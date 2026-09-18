# Gina AI Atlas

一个轻量、无构建依赖的 AI 工具信号台，收录经过整理和核验的 AI 网站，支持搜索、分类筛选、最近更新、中文可用、免费体验和本地收藏。

- 在线地址：<https://gitanamomo.github.io/ginaai/>
- 目标部署：Vercel（由 GitHub `main` 分支自动部署）
- 技术栈：单文件 HTML / CSS / JavaScript
- 数据存储：浏览器 `localStorage`，不上传收藏数据

## 本次改版

2026-09：页面由浅色工具网格改为深色 **AI Signal Desk** 视觉系统，以“今日信号—快捷入口—工具目录”为信息架构。新增荧光绿与青色信号色、玻璃面板、信号摘要卡、移动端底部导航和更强的响应式层级。保留原有 80 个工具、官方入口、搜索、分类、收藏与访问记录逻辑，并突出 Agent、AI 编程、研究、视频与办公等近期高频场景。

## 文件结构

```text
ginaai/
├── index.html                 # Vercel / GitHub Pages 主页面
├── aiwebsite.html             # 旧入口兼容跳转页
├── scripts/check-links.mjs    # 外链批量核验脚本
├── ginacode_ai_workbench_react.jsx
├── README.md
├── AGENTS.md
└── .nojekyll
```

## 本地运行

无需安装依赖：`python3 -m http.server 8000`，然后访问 `http://127.0.0.1:8000/`。

## 后续修改

工具数据位于 `index.html` 中的 `TOOLS` 数组。新增工具时只使用官方入口，保持客观能力描述；更新后运行 `node scripts/check-links.mjs`，并在桌面端与 390px 手机宽度检查布局。
