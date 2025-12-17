# ContextMD 📝

> A real-time Markdown editor tailored for LLM Context Engineering.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61DAFB.svg?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)

**ContextMD** is a lightweight, responsive editor designed to bridge the gap between human writing and AI development. 

While it functions as a great standalone Markdown editor, its core mission is to help developers prepare **Context** and **Prompts** for LLMs (Large Language Models).

## 🚀 Why Use This?

When developing with AI APIs (OpenAI, Gemini, Claude), developers often need to insert structured documentation or instructions into a JSON payload. 

Manually converting a multi-line Markdown document into a JSON-safe string (escaping newlines `\n` and quotes `\"`) is tedious and error-prone. 

**ContextMD solves this with a dedicated JSON Export tool.**

## ✨ Key Features

- **👀 Real-time Preview**: Instant rendering of GitHub Flavored Markdown (GFM).
- **🔧 JSON String Export**: One-click conversion of your markdown into a single-line, escaped string ready for API payloads.
- **🌗 Theming System**: Built-in Light, Dark, and System Sync modes.
- **🌍 Internationalization**: Fully localized interface supporting:
  - English
  - Traditional Chinese (繁體中文)
  - Simplified Chinese (简体中文)
  - Japanese (日本語)
  - Korean (한국어)
- **⚡ Privacy First**: Runs entirely in the browser (Client-side). No data is sent to any server.

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Vite (recommended for local dev)
- **Styling**: Tailwind CSS + Typography Plugin
- **Markdown Engine**: `react-markdown`, `remark-gfm`
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/context-md.git
   ```

2. Navigate to the project directory:
   ```bash
   cd context-md
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📖 Usage

1. **Write**: Type Markdown in the left editor pane.
2. **Preview**: View the rendered result on the right.
3. **Export for AI**: Click the `{ }` (Braces) icon in the toolbar.
4. **Copy**: Click "Copy to Clipboard" to get the escaped JSON string.
5. **Paste**: Paste the string directly into your API call's `content` or `prompt` field.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
