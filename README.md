# Gina AI · 全球顶尖 AI 导航

一个干净、简洁、一目了然的全球顶尖 AI 网站精选导航。纯单文件静态架构，无冗余框架依赖，支持即时全文检索、场景分类切换、标签过滤与浏览器本地无痕收藏。

- 在线体验：支持全新极简版（默认）与原版经典深色版无缝双向切换
- 技术栈：纯 HTML5 / 现代原生 CSS / 原生 JavaScript
- 数据存储：浏览器 `localStorage`（轻量安全，零外部依赖）
- 兼容性：高度适配 macOS Safari / Chrome 及 iOS Safari 移动端视口

## 版本架构

1. **全新极简版（`index.html`）**：
   - 设计风格：极简明朗（Clean & Minimalist），高空间利用率，去除沉重视觉阻碍，首屏直达工具。
   - 工具规模：精选 **86 款** 全球顶尖网页版 AI 产品，划分为 10 大核心场景。
   - 新增工具：全面补充 2026 最新入选工具（如 Grok 3, Mistral Le Chat, FLUX.1, HeyGen, Phind, Felo, NotebookLM, v0, Bolt, Lovable, Claude Code, Hugging Face 等）。
   - 交互亮点：支持 `⌘ K` 快捷键极速搜索、场景分类滑动轨道、免费/新收录/中文专属徽章、本地独立收藏夹、顶栏双版本一键切换。
2. **经典原版（`index_classic.html`）**：
   - 100% 完整保留原版 AI Signal Desk 深色荧光仪表盘风格，并在顶栏增加了前往全新极简版的切换按钮。

## 文件结构

```text
ginaai/
├── index.html                 # 【新版】全新干净、简洁、一目了然的全球顶尖 AI 导航主页
├── index_classic.html         # 【原版】经典深色 AI Signal Desk 备份与备用页面
├── aiwebsite.html             # 旧入口兼容跳转页
├── server.js                  # 轻量服务静态入口（端口 3000）
├── package.json               # 项目配置
├── scripts/check-links.mjs    # 外链批量核验脚本
├── README.md                  # 项目与改动记录文档
├── AGENTS.md                  # 全局开发工作流规则
└── .nojekyll
```

## 本地运行方式

- **Node.js 运行**：`node server.js` 或 `npm start`，访问 `http://localhost:3000`。
- **静态单文件运行**：直接使用浏览器双击打开 `index.html` 或 `python3 -m http.server 8000`。

## 最近改动记录 (2026-09)

1. **`index_classic.html` 优化**：
   - 移除右侧沉重的「今日信号（Signal Panel）」卡片，整体抬头重新排版，视野更加开阔舒展。
   - 为所有收录工具新增网络环境标注：明确区分并醒目标识 `🌐 需VPN`（海外网络环境）与 `🇨🇳 直连`（国内直接访问）。
   - 快速筛选栏升级为：`01 / 最近更新`、`02 / 🇨🇳 国内直连`、`03 / 🌐 需海外VPN`、`04 / 我的收藏`。
2. **`index.html` 极简版重构为「苹果毛玻璃 + 可爱糖果风」**：
   - **视觉美学**：采用 Apple iOS / macOS 级别的 Liquid Glass 高透毛玻璃效果（`backdrop-filter: blur(28px) saturate(190%)`），搭配淡雅晨雾粉、浅天蓝微漫反射流动光斑，支持深浅色模式自适应。
   - **极致精简**：卡片信息降噪，去除冗长说明文字，仅呈现：
     1. **可爱专属 Emoji Logo**：3D 立体触感的 Squircle 柔光糖果色底座 + 精准拟态 Emoji（如 ChatGPT 🤖、Claude 🧠、DeepSeek 🐬、Midjourney 🎨、Manus 🦾、HeyGen 🎭、Suno 🎵 等）。
     2. **产品名称**：高识别度圆润粗体。
     3. **网络环境胶囊**：醒目标注 `🌐 需VPN` 或 `🇨🇳 直连`。
     4. **收藏小爱心**：悬浮/点亮红心（`❤️` / `🤍`），点赞即可保存至本地收藏。
   - **点击交互**：点击整张卡片即一键在新标签页安全直达官网（`_blank`，带 `noopener`）。
   - **检索与分类**：顶部提供苹果风格圆角搜索栏（支持 `⌘ K` 快捷键）与可横滑的 10 大分类可爱胶囊栏。
3. **Logo 升级为可爱女孩 Emoji 头像（2026-09）**：
   - 将 `index.html` 顶栏 Gina AI 标志与网页 Favicon 全面切换为原生可爱女孩 Emoji 头像（`👧🏻`），放置在柔美樱花粉渐变 Squircle 糖果底座中，悬停时带有活泼的轻量缩放与倾斜动效（`scale(1.15) rotate(-5deg)`），与全站 Emoji 风格完全统一且轻快可爱。
