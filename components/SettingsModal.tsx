import React from 'react';
import { X, Moon, Sun, Monitor, Globe } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { translations } from '../translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  currentTheme, 
  onThemeChange,
  currentLang,
  onLangChange
}) => {
  if (!isOpen) return null;

  const t = translations[currentLang];

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.settings.title}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          
          {/* Theme Section */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-mono text-slate-500 font-bold tracking-wider flex items-center gap-2">
              <Sun className="w-3 h-3" /> {t.settings.theme}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'light', icon: Sun, label: t.settings.modes.light },
                { id: 'dark', icon: Moon, label: t.settings.modes.dark },
                { id: 'system', icon: Monitor, label: t.settings.modes.system },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => onThemeChange(item.id as ThemeMode)}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                    currentTheme === item.id 
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-500 dark:text-indigo-300' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-3">
            <label className="text-xs uppercase font-mono text-slate-500 font-bold tracking-wider flex items-center gap-2">
              <Globe className="w-3 h-3" /> {t.settings.language}
            </label>
            <div className="grid grid-cols-1 gap-2">
              <select 
                value={currentLang}
                onChange={(e) => onLangChange(e.target.value as Language)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-2.5 text-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="zh-TW">繁體中文 (Traditional Chinese)</option>
                <option value="zh-CN">简体中文 (Simplified Chinese)</option>
                <option value="ja">日本語 (Japanese)</option>
                <option value="ko">한국어 (Korean)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            {t.export.close}
          </button>
        </div>
      </div>
    </div>
  );
};