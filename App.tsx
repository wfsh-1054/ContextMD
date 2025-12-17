import React, { useState, useEffect, useRef } from 'react';
import { 
  Split, 
  Code2, 
  Eye, 
  Download, 
  Trash2,
  FileText,
  Github,
  Braces,
  Settings
} from 'lucide-react';
import { ViewMode, ThemeMode, Language } from './types';
import { translations } from './translations';
import { MarkdownPreview } from './components/MarkdownPreview';
import { ExportModal } from './components/ExportModal';
import { SettingsModal } from './components/SettingsModal';

const INITIAL_DOC = `# Welcome to ContextMD

This is a **real-time** Markdown editor.

## Features
- 📝 **Live Preview**: See changes as you type.
- 🎨 **GitHub Flavor**: Supports tables, task lists, and code blocks.
- 🔧 **JSON Utils**: Export content as a single line string for APIs.

## Try it out

| Feature | Status |
| :--- | :--- |
| Editing | ✅ Ready |
| Preview | ✅ Ready |
| Privacy | ✅ Secured |

\`\`\`javascript
console.log("Hello, World!");
\`\`\`
`;

export default function App() {
  const [content, setContent] = useState<string>(INITIAL_DOC);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.SPLIT);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Settings State (Initialize from localStorage if available, else detect browser language)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) || 'dark';
  });

  const [lang, setLang] = useState<Language>(() => {
    // 1. Check local storage first
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && ['en', 'zh-TW', 'zh-CN', 'ja', 'ko'].includes(savedLang)) {
      return savedLang;
    }

    // 2. Detect browser language
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('zh')) {
      // Map 'zh-TW', 'zh-HK' to Traditional, others to Simplified
      return (browserLang.includes('tw') || browserLang.includes('hk')) ? 'zh-TW' : 'zh-CN';
    }
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('ko')) return 'ko';
    
    // 3. Default to English
    return 'en';
  });

  const t = translations[lang];

  // Theme Application Logic
  useEffect(() => {
    const root = window.document.documentElement;
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Remove previous classes
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      root.classList.add(isSystemDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Language Persistence
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  // Focus textarea on load
  useEffect(() => {
    if (viewMode !== ViewMode.PREVIEW && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [viewMode]);

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'document.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-200">
      {/* Header */}
      <header className="h-14 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-4 shrink-0 z-10 transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-lg tracking-tight text-slate-800 dark:text-slate-100 hidden sm:block">
            {t.title}
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
           {/* View Modes */}
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 mr-2 border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => setViewMode(ViewMode.EDITOR)}
              className={`p-1.5 rounded transition-all ${viewMode === ViewMode.EDITOR ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
              title={t.tooltips.editorOnly}
            >
              <Code2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode(ViewMode.SPLIT)}
              className={`p-1.5 rounded transition-all hidden md:block ${viewMode === ViewMode.SPLIT ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
              title={t.tooltips.splitView}
            >
              <Split className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode(ViewMode.PREVIEW)}
              className={`p-1.5 rounded transition-all ${viewMode === ViewMode.PREVIEW ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`}
              title={t.tooltips.previewOnly}
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

          {/* Actions */}
          <button
            onClick={() => setIsExportOpen(true)}
            className="p-2 text-emerald-600 dark:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={t.tooltips.exportJson}
          >
            <Braces className="w-5 h-5" />
          </button>

          <button
            onClick={handleDownload}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={t.tooltips.download}
          >
            <Download className="w-5 h-5" />
          </button>
           <button
            onClick={() => setContent('')}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={t.tooltips.clear}
          >
            <Trash2 className="w-5 h-5" />
          </button>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

          <button
            onClick={() => setIsSettingsOpen(true)}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            title={t.tooltips.settings}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Editor Pane */}
        {(viewMode === ViewMode.EDITOR || viewMode === ViewMode.SPLIT) && (
          <div className={`flex-1 flex flex-col bg-slate-50 dark:bg-slate-950 ${viewMode === ViewMode.SPLIT ? 'border-r border-slate-200 dark:border-slate-800' : ''}`}>
             <div className="h-8 bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 text-xs font-mono text-slate-500 uppercase tracking-wider shrink-0">
               {t.editor}
             </div>
            <textarea
              ref={textareaRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 w-full bg-slate-50 dark:bg-slate-950 p-6 font-mono text-sm text-slate-800 dark:text-slate-300 resize-none focus:outline-none selection:bg-indigo-500/30 placeholder-slate-400 dark:placeholder-slate-700 leading-relaxed"
              placeholder="Type your markdown here..."
              spellCheck={false}
            />
          </div>
        )}

        {/* Preview Pane */}
        {(viewMode === ViewMode.PREVIEW || viewMode === ViewMode.SPLIT) && (
          <div className="flex-1 flex flex-col bg-white dark:bg-slate-900/50">
             <div className="h-8 bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 text-xs font-mono text-slate-500 uppercase tracking-wider shrink-0 justify-between">
               <span>{t.preview}</span>
               <span className="flex items-center gap-1"><Github className="w-3 h-3"/> GFM</span>
             </div>
            <MarkdownPreview content={content} />
          </div>
        )}
      </main>

      {/* Footer / Status Bar */}
      <footer className="h-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center px-4 text-[10px] text-slate-500 shrink-0 select-none justify-between transition-colors duration-200">
        <div className="flex gap-4">
           <span>{t.stats.chars}: {content.length}</span>
           <span>{t.stats.lines}: {content.split('\n').length}</span>
           <span>{t.stats.words}: {content.split(/\s+/).filter(Boolean).length}</span>
        </div>
        <div>
          Local Mode
        </div>
      </footer>

      <ExportModal 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
        content={content} 
        lang={lang}
      />

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentTheme={theme}
        onThemeChange={setTheme}
        currentLang={lang}
        onLangChange={setLang}
      />
    </div>
  );
}