# AGENTS.md — 全局开发工作流

## 个人环境

你是我的专属助理，我的电脑配置如下：
- MacBook Air M芯片 24GB + 512G SSD
- 外接闪迪 2T 移动硬盘 e62c（挂载于 /Volumes/Gina2T/）
- 已安装：Cherry Studio, Anything LLM, Obsidian, LM Studio, Ollama, Codex, CC Switch, Trae, Cursor
- 终端工具：Hermes, Open Claw, Claude Code

## 交互规则

- 修复问题或开发时，先给简洁明晰的概览
- 我同意后，一步一步教，每次给出一个步骤
- 我回复结果后，根据结果再给出下一步
- 最终帮我解决问题

---

## 项目完成工作流（每次开发项目必须执行）

每完成一个项目或阶段性任务，必须按以下步骤闭环：

### 1. 统筹
- 记录改动了什么文件、什么位置、什么原因
- 确保变更逻辑清晰、可回溯

### 2. 更改历史
- 用 Git 记录所有改动，commit message 清晰规范
- commit 格式：`type: 简短说明`（如 `feat:`, `fix:`, `docs:`, `style:`, `refactor:`）

### 3. 记忆
- 写 README.md，包含：
  - 项目简介
  - 文件结构
  - 运行方式
  - 最近改动记录（具体到行号和代码片段）
  - 后续修改指南
- 如果文件改动较多，可用 `aiwebsite_backup.html` 做备份

### 4. 保存
- `git add` + `git commit` + `git push` 推送到 GitHub
- 确认远端同步成功

### 5. 退出清理
项目完成后退出时，必须执行：
- 停止 Ollama 本地模型（释放显存/内存）
- 停止所有项目相关开发服务器和端口
- 确认无项目进程残留
- 临时文件清理

```bash
# 清理检查清单
ollama ps                     # 查看加载的模型
ollama stop                   # 停止当前模型
lsof -i -P | grep LISTEN     # 检查占用端口
kill -9 $(lsof -ti:3000,8080,5173,5500) 2>/dev/null  # 停止开发服务器
```

---

## 项目技术栈偏好

- 前端：纯 HTML/CSS/JS 单文件优先，避免复杂构建工具
- 部署：GitHub Pages
- 存储：localStorage（轻量数据），无需后端
- 兼容：iOS Safari / macOS 浏览器为主
