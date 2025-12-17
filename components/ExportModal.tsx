import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  lang: Language;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, content, lang }) => {
  const [escapedString, setEscapedString] = useState('');
  const [copied, setCopied] = useState(false);
  
  const t = translations[lang].export;

  useEffect(() => {
    if (isOpen) {
      const formatted = JSON.stringify(content).slice(1, -1);
      setEscapedString(formatted);
      setCopied(false);
    }
  }, [isOpen, content]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(escapedString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-100 text-emerald-600 dark:bg-emerald-600/20 dark:text-emerald-400 p-1.5 rounded-lg">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.desc}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 overflow-hidden flex flex-col gap-2">
          <label className="text-xs uppercase font-mono text-slate-500 tracking-wider">{t.label}</label>
          <div className="relative flex-1">
            <textarea
              readOnly
              value={escapedString}
              className="w-full h-full min-h-[150px] bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-slate-600 dark:text-slate-300 font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
              onClick={(e) => e.currentTarget.select()}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
          >
            {t.close}
          </button>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              copied 
                ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                {t.copied}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {t.copy}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};