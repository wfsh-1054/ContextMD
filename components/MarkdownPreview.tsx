import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownPreviewProps } from '../types';

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-slate dark:prose-invert max-w-none w-full h-full overflow-y-auto p-6 ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Customize specific elements if needed
          a: ({node, ...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />,
          pre: ({node, ...props}) => <pre {...props} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 overflow-x-auto border border-slate-200 dark:border-slate-700" />,
          code: ({node, ...props}) => {
             const isInline = !props.className?.includes('language-');
             return (
               <code 
                 {...props} 
                 className={`${isInline ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200 dark:border-slate-700' : 'block text-sm font-mono'}`} 
               />
             );
          },
          table: ({node, ...props}) => <div className="overflow-x-auto my-4 border border-slate-200 dark:border-slate-700 rounded-lg"><table {...props} className="min-w-full divide-y divide-slate-200 dark:divide-slate-700" /></div>,
          th: ({node, ...props}) => <th {...props} className="bg-slate-50 dark:bg-slate-800 px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-300 uppercase tracking-wider" />,
          td: ({node, ...props}) => <td {...props} className="px-3 py-2 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700" />,
        }}
      >
        {content || ''}
      </ReactMarkdown>
    </div>
  );
};