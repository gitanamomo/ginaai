# Gina AI Atlas

一个轻量、无构建依赖的 AI 网站合集。收录经过清洗和分类的常用工具，支持搜索、筛选与收藏。

- 在线地址：<https://gitanamomo.github.io/ginaai/>
- 技术栈：单文件 HTML / CSS / JavaScript
- 数据存储：浏览器 `localStorage`
- 主要兼容：macOS Safari、iOS Safari 与现代桌面浏览器

## 功能

- 80 个精选 AI 工具，覆盖 10 类使用场景
- 全局关键词搜索与分类筛选
- 最近更新、国内可用、免费体验快捷入口
- 本地收藏和访问记录
- 桌面、平板和手机端响应式布局
- 键盘快捷键 `⌘ K` / `Ctrl K` 聚焦搜索

## 文件结构

```text
ginaai/
├── index.html                 # GitHub Pages 主页面，完整单文件应用
├── aiwebsite.html             # 旧入口兼容页，自动跳转至 index.html
├── scripts/
│   └── check-links.mjs        # 外链批量核验脚本
├── ginacode_ai_workbench_react.jsx
├── README.md
├── AGENTS.md
├── .nojekyll
└── .gitignore
```

## 本地运行

无需安装依赖。可以直接打开 `index.html`，或启动本地静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 <http://127.0.0.1:8000/>。

## 链接核验

```bash
node scripts/check-links.mjs
```

输出状态：

- `✓`：正常访问或正常跳转
- `△`：网站返回 401 / 403 / 405 / 429，通常为登录或反爬限制，需人工确认
- `?`：网络超时或当前环境无法判断
- `✗`：明确的 HTTP 错误，应检查、替换或删除

链接治理原则：只有 DNS 失效、明确 404/410 或产品官方确认停止服务时才直接移除；反爬、地区限制和偶发超时一律标记待核实，不凭一次请求误删。

## 数据与隐私

页面不使用后端。以下数据只保存在当前浏览器：

| 数据 | localStorage key |
|---|---|
| 收藏 | `gina-favorites` |
| 最近访问 | `gina-recent` |

## 2026-09-03 改版记录

### 页面与视觉

- `index.html:45`：重做粘性顶栏、全局搜索和横向分类栏。
- `index.html:151`：使用简洁的“AI 工具导航”首页介绍。
- `index.html:224`：重做工具卡片网格、核验状态和收藏交互。
- `index.html:292`：新增 iOS 手机端布局和三项底部导航。
- `index.html:351`：重组页面语义结构和无障碍标签。

### 工具数据

- `index.html:420`：将工具库整理为 80 个条目、10 个分类。
- 删除失效入口：AutoGLM 旧域名、DeepGamer、v5games、美图 AI PPT 旧域名。
- 移除无链接的 Google Stitch 卡片。
- 更新 Kimi、Claude Platform、通义万相、LiblibAI、TRAE、Runway、可灵等迁移地址。
- 新增 Gemini Notebook、Codex App、Google Antigravity、腾讯元宝、ima、Midjourney、Runway、Suno、Udio、ElevenLabs、Figma Make、Higgsfield、Genspark 等代表工具。
- 清理“最火、永久免费、无限制、送额度”等易过期宣传文案，改为能力描述。

### 功能

- `index.html:526`：分类数量动态生成。
- `index.html:546`：搜索、场景筛选、排序和卡片渲染统一处理。
- `scripts/check-links.mjs`：新增无需依赖的批量外链检查工具。

## 修改指南

### 添加工具

在 `index.html` 的 `TOOLS` 数组中添加对象：

```javascript
{
  id: "unique-id",
  name: "工具名",
  mark: "缩写",
  cat: "coding",
  desc: "客观、耐久的能力描述。",
  url: "https://official.example/",
  tags: ["标签一", "标签二"],
  region: "china",
  price: "free",
  isNew: true,
  color: "#d8ff4f"
}
```

要求：

1. 只使用官方入口。
2. `id` 必须唯一。
3. 不写无法长期核实的绝对化宣传。
4. 新增后运行 `node scripts/check-links.mjs`。
5. 在桌面端和 390px 手机宽度下各检查一次。

### 修改分类

分类名称位于 `CATEGORY`，工具通过 `cat` 字段归类。新增分类时，需要同时补充 `CATEGORY` 项和对应工具数据。

### 修改配色

全局颜色在 `:root` CSS 变量中维护。卡片图标块颜色由每个工具的 `color` 字段控制。

## 发布

确认页面效果与链接结果后：

```bash
git add index.html aiwebsite.html README.md scripts/check-links.mjs
git commit -m "feat: 重构 AI 工具导航并更新链接库"
git push origin main
```

GitHub Pages 会从 `main` 分支自动更新。
