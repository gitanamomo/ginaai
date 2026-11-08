# Gina AI · 全球顶尖 AI 导航与免费学习站 (2026)

一个干净、极速、一目了然的全球顶尖 AI 网站与官方免费课程精选导航。支持**明朗亮色版（Light）与赛博暗色版（Dark）一键无缝切换**、功能关键词全文检索（如搜索“PPT”、“会议”、“矢量”、“配音”、“MCP”）、10 大核心场景切换、国内外网络环境过滤与浏览器本地无痕收藏。

- **在线体验**：`https://gitanamomo.github.io/ginaai/`
- **双主题切换**：内置 `☀️ 明朗亮色版 / 🌙 赛博暗色版` 切换开关，自动记忆用户偏好（`localStorage`）
- **技术栈**：提供纯 HTML5 / CSS3 / JS 单文件架构（位于 `public/ginaai/` 及页面导出中心）与 React + TypeScript + Tailwind v4 工作台双形态
- **数据存储**：浏览器 `localStorage`（轻量安全，零外部依赖）
- **兼容性**：深度适配 macOS Safari / Chrome 及 iOS Safari 触屏热区规范

---

## 版本与文件结构

### 1. GitHub Pages 单文件仓库标准结构 (`gitanamomo/ginaai`)
```text
ginaai/
├── index.html                 # 【主入口】全球顶尖 AI 导航 + 免费学 AI（支持明朗亮色 / 赛博暗色双主题切换）
├── index_light.html           # 【亮色独立版】默认明朗亮色版独立入口
├── index_classic.html         # 【经典版】原版 AI Signal Desk 深色荧光仪表盘备份页面
├── aiwebsite.html             # 旧入口兼容跳转页
├── aiwebsite_backup.html      # 改动前历史版本备份（遵循 AGENTS.md 规范）
├── server.js                  # 本地轻量静态服务入口（端口 3000）
├── package.json               # 项目配置与外链核验脚本入口
├── scripts/
│   └── check-links.mjs        # 外链批量核验脚本（同时支持 TOOLS_DATA 与 LEARN_DATA 115 条链接）
├── README.md                  # 项目简介、文件结构、运行方式、详细改动记录与后续修改指南
├── AGENTS.md                  # 全局开发工作流规则
└── .nojekyll                  # GitHub Pages 静态直出标识
```

### 2. AI Studio 交互式开发与导出工作台结构
```text
/
├── index.html                           # Web 应用入口（含 Google Fonts 与双主题基础类）
├── metadata.json                        # 应用元数据配置
├── package.json                         # 依赖与构建脚本配置
├── README.md                            # 项目与改动记录完整文档
├── AGENTS.md                            # 全局开发工作流与闭环规范
├── scripts/
│   └── check-links.mjs                  # 兼容单文件与 TS 数据源的外链批量核验脚本
├── public/
│   └── ginaai/
│       ├── index.html                   # 构建生成的完整单文件版（默认亮色 · 支持双主题）
│       ├── index_dark.html              # 构建生成的完整单文件版（默认暗色 · 支持双主题）
│       └── sync-to-github.sh            # 本地终端一键备份与 Git Push 脚本
└── src/
    ├── App.tsx                          # Gina AI 2026 主界面 + GitHub API 直推与源码导出中心
    ├── index.css                        # Tailwind v4 与 @custom-variant dark 双主题样式配置
    ├── main.tsx                         # React 挂载入口
    └── data/
        ├── ginaaiCompleteData.ts        # 全量修复后的 100 款 AI 工具与 15 门免费课程数据源
        ├── auditData.ts                 # 20 项内容外链审计与 8 项布局架构审计台账
        └── generateStandaloneFiles.ts   # 单文件 HTML / README / 巡检脚本生成器
```

---

## 本地运行与外链核验方式

1. **静态单文件直接运行**：
   - 直接双击打开 `public/ginaai/index.html`（或导出后的 `index.html`），或在终端执行：
   ```bash
   python3 -m http.server 8000
   ```
2. **React 工作台运行**：
   ```bash
   npm install
   npm run dev
   ```
3. **批量外链健康度核验**：
   ```bash
   node scripts/check-links.mjs
   ```

---

## 最近改动记录（2026-11 审计修复与双主题升级 · 具体到行号与代码片段）

### 1. 新增「☀️ 明朗亮色版」与「🌙 赛博暗色版」双主题架构（`index.html` 第 21–78 行、第 273–276 行）
- **位置**：`<style>` 根变量定义区与 `<header>` 顶栏操作区。
- **原因**：满足日间阅读与清爽视觉需求，消除单一深色背景长时间浏览的视觉疲劳。
- **代码片段**：
  ```css
  /* index.html Lines 51-77: 新增明朗亮色版 CSS 变量 */
  [data-theme="light"] {
    --bg: #f8fafc;
    --bg2: #f1f5f9;
    --header-bg: rgba(255, 255, 255, 0.88);
    --panel: #ffffff;
    --border: #e2e8f0;
    --text: #0f172a;
    --text-sub: #475569;
    --cyan: #0284c7;
    --green: #059669;
  }
  ```

### 2. 修复工具卡片右上角角标叠压、补充一句话定位与价格标识（`index.html` 第 172–198 行）
- **位置**：`.tool-card`、`.fav-heart-btn`、`.tool-desc`、`.tool-meta-row` 样式与模板渲染函数 `renderTools()`。
- **原因**：
  1. 原版 `.tool-card.is-new::after` 实心青色三角与 `.new-badge` 在右上角重叠；
  2. 原版卡片无任何功能简介与价格显示，导致“盲盒式点击”且搜索“PPT”、“会议”、“音乐”结果为空；
  3. 原版 `.fav-heart-btn` 默认 `opacity: 0` 且仅 24×18px，iOS Safari 触屏无法看到和点击。
- **代码片段**：
  ```css
  /* index.html Lines 177-189: 移除冲突 ::after 三角，扩大收藏按钮至 32x32px 并常驻半透明 */
  .tool-card.is-new { border-color: rgba(2, 132, 199, 0.35); }
  .fav-heart-btn {
    position: absolute; top: 8px; left: 8px; width: 32px; height: 32px;
    opacity: 0.55; border-radius: 8px; display: grid; place-items: center;
  }
  .tool-desc { font-size: 11.5px; color: var(--text-sub); text-overflow: ellipsis; white-space: nowrap; }
  ```

### 3. 全量修复 20 处失效/重定向/重复外链（`TOOLS_DATA` & `LEARN_DATA` 数据区）
- **原因**：修复死链、课程路由下线、品牌更名重定向与重复 URL。
- **关键改动对照**：
  - `stepfun`：`https://yuewen.cn/` (死链) $\rightarrow$ `https://www.stepfun.com/`（阶跃 AI）
  - `windsurf`：`https://codeium.com/windsurf` $\rightarrow$ `https://windsurf.com/`
  - `kling`（可灵 AI）：`https://klingai.com/` (原标 `global`) $\rightarrow$ `https://klingai.kuaishou.com/` (`china` 国内直连)
  - `kimi`：`https://kimi.moonshot.cn/` $\rightarrow$ `https://www.kimi.com/`
  - `qianwen`：`https://www.tongyi.com/` $\rightarrow$ `https://www.qianwen.com/`
  - `yiyan`：`https://yiyan.baidu.com/` $\rightarrow$ `https://wenxin.baidu.com/`
  - `v0`：`https://v0.dev/` $\rightarrow$ `https://v0.app/`
  - `claude-api`：`https://console.anthropic.com/` $\rightarrow$ `https://platform.claude.com/`
  - `openhands`：替换原与 `manus` 重复的 `cue-manus`，指向 `https://www.all-hands.dev/`
  - 学习区更新：`skills.google/paths`、`developers.openai.com/cookbook`、`cs229.stanford.edu`、`modelscope.cn/docs`

### 4. 修复外链巡检脚本正则崩溃（`scripts/check-links.mjs`）
- **位置**：`scripts/check-links.mjs`。
- **原因**：原脚本写死匹配 `const TOOLS = [`，而 `index.html` 变量名为 `TOOLS_DATA`。
- **代码片段**：
  ```js
  const toolsBlock = html.match(/const TOOLS(?:_DATA)? = \[([\s\S]*?)\n    \];/);
  const learnBlock = html.match(/const LEARN_DATA = \[([\s\S]*?)\n    \];/);
  ```

---

## 后续修改指南

1. **如何新增或修改 AI 工具**：
   - 打开 `index.html`（或 `src/data/ginaaiCompleteData.ts`），搜索 `TOOLS_DATA`，按如下结构添加条目即可（页面会自动重算分类数量与总计数量）：
   ```js
   {
     id: "tool-id",
     name: "工具名称",
     cat: "chat", // 可选: chat | search | image | video | code | audio | office | write | agent | api
     emoji: "✨",
     url: "https://example.com/",
     region: "china", // "china" (🇨🇳 直连) 或 "global" (🌐 VPN)
     price: "free",   // "free" (免费) 或 "paid" (付费)
     isNew: true,
     tint: "rgba(2,132,199,0.12)",
     desc: "10~16字一句话核心定位说明",
     tags: ["关键词1", "关键词2"]
   }
   ```
2. **如何新增免费学习课程**：
   - 搜索 `LEARN_DATA`（或 `LEARN_COURSES_DATA`），在对应 `section`（`beginner` / `advanced` / `chinese`）下添加对象即可，支持顶栏搜索框直接检索。
