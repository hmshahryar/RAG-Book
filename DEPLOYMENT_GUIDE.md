# 🚀 Deployment Guide: GitHub + Vercel

## 📁 What Gets Uploaded to GitHub

✅ **Include these folders:**
- `docs/` - Your RAG book content
- `my-website/` - Docusaurus website
- `README.md` - Repository documentation
- `DEPLOYMENT_GUIDE.md` - This file

❌ **Excluded (via .gitignore):**
- `.claude/` - Development tools
- `.specify/` - Development tools
- `node_modules/` - Dependencies (auto-installed)
- `build/` - Generated files

## Step 1: Initialize Git Repository

```bash
# Navigate to your project root
cd "c:\Users\MUHAMMAD\Desktop\allcode\coding series"

# Initialize git (if not already done)
git init

# Add all files (gitignore will exclude .claude and .specify)
git add .

# Check what will be committed
git status

# Commit
git commit -m "Initial commit: RAG Book with glassmorphic homepage"
```

## Step 2: Push to GitHub

### Create New Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `rag-book` (or your choice)
3. Make it **Public**
4. **DO NOT** initialize with README
5. Click "Create repository"

### Push Your Code:
```bash
# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/rag-book.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Using Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `rag-book` repository
5. **Configure Build Settings:**
   - **Framework Preset:** Docusaurus
   - **Root Directory:** `my-website`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
6. Click "Deploy"

### Your Site Will Be Live!
- Vercel provides a URL: `https://your-project.vercel.app`
- Auto-deploys on every push to main branch

## Troubleshooting

**Build fails?** 
- Check that Root Directory is set to `my-website`
- Verify build logs in Vercel dashboard

**Updates not showing?**
- Vercel auto-deploys on git push
- Or manually redeploy from dashboard

---

That's it! Your RAG Book is now live! 🎉
