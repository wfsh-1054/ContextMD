import { Language } from './types';

export const translations = {
  en: {
    title: "ContextMD",
    editor: "Editor",
    preview: "Preview",
    stats: {
      chars: "chars",
      lines: "lines",
      words: "words"
    },
    export: {
      title: "JSON String Export",
      desc: "Content flattened to single line (escaped newlines)",
      label: "Result Preview",
      copy: "Copy to Clipboard",
      copied: "Copied!",
      close: "Close"
    },
    settings: {
      title: "Settings",
      theme: "Theme",
      language: "Language",
      modes: {
        light: "Light",
        dark: "Dark",
        system: "System"
      }
    },
    tooltips: {
      editorOnly: "Editor Only",
      splitView: "Split View",
      previewOnly: "Preview Only",
      exportJson: "Export as JSON String",
      download: "Download Markdown",
      clear: "Clear All",
      settings: "Settings"
    }
  },
  'zh-TW': {
    title: "ContextMD",
    editor: "編輯器",
    preview: "預覽",
    stats: {
      chars: "字元",
      lines: "行數",
      words: "字數"
    },
    export: {
      title: "JSON 字串匯出",
      desc: "內容已轉為單行字串（包含轉義換行符）",
      label: "結果預覽",
      copy: "複製到剪貼簿",
      copied: "已複製！",
      close: "關閉"
    },
    settings: {
      title: "設定",
      theme: "外觀主題",
      language: "顯示語言",
      modes: {
        light: "亮色",
        dark: "深色",
        system: "跟隨系統"
      }
    },
    tooltips: {
      editorOnly: "僅編輯",
      splitView: "分割檢視",
      previewOnly: "僅預覽",
      exportJson: "匯出 JSON 字串",
      download: "下載 Markdown",
      clear: "清空內容",
      settings: "設定"
    }
  },
  'zh-CN': {
    title: "ContextMD",
    editor: "编辑器",
    preview: "预览",
    stats: {
      chars: "字符",
      lines: "行数",
      words: "字数"
    },
    export: {
      title: "JSON 字符串导出",
      desc: "内容已转为单行字符串（包含转义换行符）",
      label: "结果预览",
      copy: "复制到剪贴板",
      copied: "已复制！",
      close: "关闭"
    },
    settings: {
      title: "设置",
      theme: "外观主题",
      language: "显示语言",
      modes: {
        light: "亮色",
        dark: "深色",
        system: "跟随系统"
      }
    },
    tooltips: {
      editorOnly: "仅编辑",
      splitView: "分屏视图",
      previewOnly: "仅预览",
      exportJson: "导出 JSON 字符串",
      download: "下载 Markdown",
      clear: "清空内容",
      settings: "设置"
    }
  },
  'ja': {
    title: "ContextMD",
    editor: "エディタ",
    preview: "プレビュー",
    stats: {
      chars: "文字",
      lines: "行",
      words: "単語"
    },
    export: {
      title: "JSON文字列エクスポート",
      desc: "改行をエスケープした1行の文字列に変換",
      label: "プレビュー結果",
      copy: "クリップボードにコピー",
      copied: "コピーしました！",
      close: "閉じる"
    },
    settings: {
      title: "設定",
      theme: "テーマ",
      language: "言語",
      modes: {
        light: "ライト",
        dark: "ダーク",
        system: "システム"
      }
    },
    tooltips: {
      editorOnly: "エディタのみ",
      splitView: "分割表示",
      previewOnly: "プレビューのみ",
      exportJson: "JSON文字列としてエクスポート",
      download: "Markdownをダウンロード",
      clear: "すべて消去",
      settings: "設定"
    }
  },
  'ko': {
    title: "ContextMD",
    editor: "에디터",
    preview: "미리보기",
    stats: {
      chars: "글자",
      lines: "줄",
      words: "단어"
    },
    export: {
      title: "JSON 문자열 내보내기",
      desc: "내용을 한 줄 문자열로 변환 (이스케이프 포함)",
      label: "결과 미리보기",
      copy: "클립보드에 복사",
      copied: "복사됨!",
      close: "닫기"
    },
    settings: {
      title: "설정",
      theme: "테마",
      language: "언어",
      modes: {
        light: "라이트",
        dark: "다크",
        system: "시스템"
      }
    },
    tooltips: {
      editorOnly: "에디터만 보기",
      splitView: "분할 보기",
      previewOnly: "미리보기만",
      exportJson: "JSON 문자열로 내보내기",
      download: "Markdown 다운로드",
      clear: "모두 지우기",
      settings: "설정"
    }
  }
} as const;
