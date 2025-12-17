# How to View Your RAG Book in Docusaurus

## Quick Start

Your RAG book content is ready to view! Follow these steps:

### Option 1: Using the Existing Docusaurus Site (Recommended)

1. **Navigate to the my-website directory:**
   ```bash
   cd "c:\Users\MUHAMMAD\Desktop\allcode\coding series\my-website"
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **View in browser:**
   - The site will automatically open at `http://localhost:3000`
   - Your RAG book chapters will be in the "Docs" section

### Option 2: Move Content to Docusaurus Docs Folder

If you want the RAG book to be the main content:

1. **Copy your RAG book chapters:**
   ```bash
   # From the project root
   xcopy "docs\chapter*" "my-website\docs\" /E /I /Y
   ```

2. **Start the server:**
   ```bash
   cd my-website
   npm start
   ```

### Current Structure

```
coding series/
├── docs/                          # Your RAG book content (30 sections)
│   ├── chapter1-introduction-to-rag/
│   ├── chapter2-rag-architecture-fundamentals/
│   ├── chapter3-vector-databases-embeddings/
│   ├── chapter4-advanced-rag-techniques/
│   ├── chapter5-prompt-engineering-rag/
│   ├── chapter6-evaluation-monitoring/
│   └── ...
│
└── my-website/                    # Docusaurus site
    ├── docs/                      # Docusaurus docs folder
    ├── package.json
    └── docusaurus.config.ts
```

### Recommended: Update Docusaurus Config

To point Docusaurus to your RAG book content, update `my-website/docusaurus.config.ts`:

```typescript
// Change the docs path
presets: [
  [
    'classic',
    {
      docs: {
        path: '../docs',  // Point to your RAG book
        sidebarPath: './sidebars.ts',
      },
    },
  ],
],
```

### Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve

# Clear cache
npm run clear
```

### Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Then run npm start again
```

**Dependencies not installed:**
```bash
npm install
```

**Cache issues:**
```bash
npm run clear
npm start
```

### What You'll See

Once running, you'll be able to browse:
- ✅ All 5 complete chapters (29 sections)
- ✅ Chapter 6.1 on RAG Evaluation
- ✅ Code examples with syntax highlighting
- ✅ Mermaid diagrams rendered
- ✅ Tables and comparisons
- ✅ Full search functionality
- ✅ Mobile-responsive design

### Next Steps

1. Run `npm start` in the `my-website` folder
2. Browse your RAG book at `http://localhost:3000`
3. Make edits to markdown files - they'll hot-reload automatically!

Enjoy viewing your comprehensive RAG book! 📚
