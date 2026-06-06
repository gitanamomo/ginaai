# 🌐 AI 工具导航站 (ginaai)

一个轻量级 AI 工具导航网站，收录国内主流 AI 聊天、绘画、视频、音乐、编程、办公、娱乐、Agent 等工具，支持 API 余额管理与直达链接。

> GitHub Pages: [https://gitanamomo.github.io/ginaai/](https://gitanamomo.github.io/ginaai/)

---

## 📁 文件结构

```
webai/
├── aiwebsite.html              # 主源码（导航站核心）
├── aiwebsite_backup.html       # 备份文件
├── ginacode_ai_workbench_react.jsx  # React 工作台组件
├── README.md                   # 本文档
├── .gitignore                  # Git 忽略规则
└── .nojekyll                   # GitHub Pages 禁用 Jekyll 处理
```

## 🚀 运行方式

纯静态 HTML，无需构建。有两种打开方式：

1. **本地打开**：双击 `aiwebsite.html` 或用浏览器打开
2. **在线访问**：[https://gitanamomo.github.io/ginaai/](https://gitanamomo.github.io/ginaai/)

---

## 📝 最近改动 (2025.06.06)：方案 A — 余额卡片直达充值链接

### 需求背景

API 余额看板只能手动填数额，查余额需要自己打开各平台网页。方案 A 在每张余额卡片上加了充值/账单页的直达链接。

### 改动位置（`aiwebsite.html`）

| 位置 | 说明 |
|------|------|
| CSS 179 行 | `.balance-card` 样式增加 `text-decoration: none; color: inherit; display: block; cursor: pointer`，使其适配 `<a>` 标签 |
| CSS 181-182 行 | hover 拆为 `a.balance-card:hover` 和 `div.balance-card:hover` |
| CSS 187-191 行 | 新增 `.card-link-hint` 和 `a.balance-card:hover .card-link-hint` 样式 |
| JS ~249 行 | `apiBalancePlatforms` 数组，每个平台新增 `link` 字段（充值/账单页 URL） |
| JS ~343 行 | `renderDashboard()` 把卡片从 `<div>` 改为 `<a>` 标签，`target="_blank"`，底部显示「↗️ 充值查账」 |

### 平台链接清单

| 平台 | link |
|------|------|
| 百炼 | https://bailian.console.aliyun.com |
| DeepSeek | https://platform.deepseek.com |
| 硅基流动 | https://siliconflow.cn |
| 智谱AI | https://open.bigmodel.cn |
| 月之暗面 | https://platform.moonshot.cn |
| 百度千帆 | https://qianfan.cloud.baidu.com |
| 豆包 | https://console.volcengine.com |
| 腾讯混元 | https://cloud.tencent.com/product/hunyuan |
| MiniMax | https://platform.minimaxi.com |
| 零一万物 | https://platform.lingyiwanwu.com |
| OpenAI | https://platform.openai.com/account/billing |
| Anthropic | https://console.anthropic.com |
| Google AI | https://aistudio.google.com |
| OpenRouter | https://openrouter.ai |
| Groq | https://console.groq.com |
| Mistral | https://console.mistral.ai |
| Cohere | https://dashboard.cohere.com |
| Together AI | https://api.together.ai |

---

## 🔄 后续修改指南

### 添加新平台

在 `apiBalancePlatforms` 数组中按格式添加：

```javascript
{id:"newid", name:"平台名", emoji:"🔧", group:"国内", link:"https://..."}
```

记得同时在 `toolsData` 和 `hotPicks` 中补充对应条目。

### 修改平台链接

直接在 `apiBalancePlatforms` 数组中找到对应 `id`，改 `link` 值即可。

### 改 CSS 样式

所有样式在 `<style>` 标签内（文件前 ~190 行）。余额卡片相关类名：
- `.balance-card` — 卡片容器
- `.card-link-hint` — 充值链接提示文字

### 同步 GitHub Pages

`index.html` 是 GitHub Pages 入口文件。改了 `aiwebsite.html` 后需要同步：

```bash
cp aiwebsite.html index.html
git add index.html aiwebsite.html
git commit -m "更新说明"
git push
```

### 本地预览

直接双击 `aiwebsite.html` 浏览器打开即可。无需构建工具或服务器。

### 数据说明

- 余额配置存储在 `localStorage`（key: `wab`）
- 看板隐藏状态存储在 `localStorage`（key: `wav`）
- 分类导航状态存储在 `localStorage`（key: `wac`）

---

## 🧹 清理脚本

项目完成后退出/清理，可执行以下步骤：

```bash
# 1. 停止 Ollama（释放显存）
ollama stop          # 停掉当前加载的模型
# 或者
launchctl unload ~/Library/LaunchAgents/com.ollama.ollama.plist  # 完全退出

# 2. 停止本地开发服务器（如果有）
kill -9 $(lsof -ti:3000,8080,5500,5173) 2>/dev/null

# 3. 确认所有端口已释放
lsof -i -P | grep LISTEN | grep -v rapportd
```
