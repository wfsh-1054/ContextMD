export enum ViewMode {
  SPLIT = 'SPLIT',
  EDITOR = 'EDITOR',
  PREVIEW = 'PREVIEW'
}

export type ThemeMode = 'light' | 'dark' | 'system';

export type Language = 'en' | 'zh-TW' | 'zh-CN' | 'ja' | 'ko';

export interface AiRequestParams {
  prompt: string;
  currentContent?: string;
}

export interface MarkdownEditorProps {
  content: string;
  onChange: (value: string) => void;
  className?: string;
}

export interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

// Mocking react-markdown props for type safety if library types aren't inferred perfectly in this env
export interface ReactMarkdownProps {
  children: string;
  className?: string;
  remarkPlugins?: any[];
}