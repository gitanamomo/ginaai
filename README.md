# Gina AI — Intelligent AI Tool Navigator & Free Learning Hub

Final project for the [Building AI](https://buildingai.elementsofai.com/) course (University of Helsinki & MinnaLearn).

> **Live Demo / 在线体验**: https://gitanamomo.github.io/ginaai/  
> **Repository / 项目仓库**: https://github.com/gitanamomo/ginaai

---

## Summary

Gina AI is a lightweight, browser-based AI tool directory and free learning hub powered by client-side **TF-IDF search ranking** and **k-Nearest Neighbors (k-NN)** recommendations. It helps learners and everyday users quickly discover verified AI tools and free courses tailored to their tasks, budget, and regional network access.

> **中文概要**：Gina AI 是一个轻量级、零后端依赖的全球顶尖 AI 工具导航与免费学习平台，内置前端 **TF-IDF 相关性排序**与 **k-NN 最近邻相似推荐**引擎，帮助学习者与日常用户按场景、预算及网络环境（国内直连 / VPN）快速匹配经过核验的 AI 工具与免费课程。

---

## Background

Artificial intelligence tools and learning resources have exploded in number over the past few years. While this innovation is exciting, everyday users, students, and self-taught learners face several recurring problems:

* **Information overload & "blind clicking"**: Hundreds of new AI products launch every month, making it difficult to tell which tool actually fits a specific task (e.g., making slides, summarizing academic papers, or writing code).
* **Broken links & outdated directories**: AI startups frequently rebrand, migrate domains, or shut down, leaving static bookmark lists full of dead links.
* **Regional network & pricing friction**: Users in mainland China and other regions need to know upfront whether a tool is directly accessible (`🇨🇳 直连`) or requires a VPN (`🌐 VPN`), and whether a free tier is available.
* **Fragmented learning paths**: Beginners often struggle to separate high-quality, free official courses from low-quality paid tutorials.

**Personal motivation**: As a learner exploring AI tools and taking courses like *Building AI*, I wanted to build a fast, clutter-free, privacy-respecting workspace that I actually use every day — and apply the text-processing and nearest-neighbor AI methods from the course to turn a static directory into an intelligent discovery tool.

> **背景与动机**：面对 AI 工具爆发式增长带来的“信息过载、外链频繁失效、国内外网络门槛不清、免费优质学习路径分散”等高频痛点，我希望打造一个极速、清爽且尊重隐私的 AI 导航与学习站，并将 Building AI 课程中学到的文本向量化与最近邻算法落地到真实日常使用中。

---

## How is it used?

Gina AI runs directly in any modern desktop or mobile browser (macOS Safari/Chrome, iOS Safari, etc.) with zero sign-up and zero backend tracking.

### Target Users & Usage Scenarios
* **Students & AI Beginners**: Switching to the **🎓 免费学 AI (Free Learning)** tab to browse 15 curated official courses (from beginner academies to Stanford CS229 and open-source communities).
* **Knowledge Workers & Developers**: Opening Gina AI (`⌘K` / `Ctrl+K`) during daily work to search in natural language (Chinese or English, e.g. `"free coding"`, `"做PPT"`, `"论文"`) and immediately find ranked tools.
* **Tool Explorers**: Clicking **`✨ 相似` (Similar)** on any tool card to discover top-4 alternative or complementary tools (for example, finding direct-access or free alternatives to a paid tool), or starring favorite tools (`❤️`) to unlock the **Personalized AI Recommendations** bar.

### Workflow
1. **Open** [gitanamomo.github.io/ginaai](https://gitanamomo.github.io/ginaai/) and optionally toggle **☀️ Light / 🌙 Dark** theme.
2. **Filter or Search**: Filter by 10 core scenarios (Chat, Image, Video, Code, Search, Audio, Office, Agent, API, Writing), network accessibility (`🇨🇳 国内直连` / `🌐 需VPN`), or pricing (`🆓 免费可用`), or type bilingual keywords into the search bar for **TF-IDF ranked** results with relevance scores.
3. **Explore via k-NN**: Click **`✨ 相似`** on any card to view the 4 nearest-neighbor tools computed by cosine similarity, or favorite tools (`localStorage`) to generate personalized recommendations from your interest centroid.

### Core Code Example (Client-side TF-IDF + k-NN in `index.html`)

```javascript
// Compute cosine similarity between two sparse TF-IDF vectors
function cosineSimilarity(vecA, normA, vecB, normB) {
  let dot = 0;
  const [small, large] = vecA.size <= vecB.size ? [vecA, vecB] : [vecB, vecA];
  for (const [tok, val] of small.entries()) {
    const other = large.get(tok);
    if (other) dot += val * other;
  }
  return dot / (normA * normB);
}

// Find top-k nearest neighbor tools using TF-IDF cosine similarity + metadata features
function findNearestTools(toolId, k = 4) {
  const target = TOOLS_DATA.find(t => t.id === toolId);
  const targetVec = TFIDF_INDEX.vectors.get(toolId);
  return TOOLS_DATA
    .filter(t => t.id !== toolId)
    .map(t => {
      const candVec = TFIDF_INDEX.vectors.get(t.id);
      const cos = cosineSimilarity(targetVec.vec, targetVec.norm, candVec.vec, candVec.norm);
      const metaBonus =
        (t.cat === target.cat ? 0.18 : 0) +
        (t.region === target.region ? 0.04 : 0) +
        (t.price === target.price ? 0.03 : 0);
      return { tool: t, score: Math.min(0.99, cos * 0.8 + metaBonus) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}
```

### Local Run & Link Verification / 本地运行与巡检
```bash
# 1. Start a local static server (or double-click index.html directly)
python3 -m http.server 8000

# 2. Run the automated link-health checker across all 115 URLs
node scripts/check-links.mjs
```

---

## Data sources and AI methods

### Data Sources / 数据来源
All data is self-curated, structured as clean JSON arrays inside `index.html`, and audited both manually and via the automated Node.js verification script ([scripts/check-links.mjs](./scripts/check-links.mjs)).

| Dataset | Count | Structure & Attributes | Source / Verification |
| :--- | :---: | :--- | :--- |
| **AI Tools (`TOOLS_DATA`)** | 100 | `id`, `name`, `cat` (10 categories), `url`, `region` (36 China Direct / 64 Global VPN), `price` (87 Free / 13 Paid), `desc`, `tags` | Official product websites; verified via `scripts/check-links.mjs` (20 broken/redirected URLs audited & repaired) |
| **Free AI Courses (`LEARN_DATA`)** | 15 | `title`, `provider`, `section` (`beginner`, `advanced`, `chinese`), `url`, `region`, `badges`, `desc` | Official free academies & universities ([DeepLearning.AI](https://www.deeplearning.ai/), [Fast.ai](https://www.fast.ai/), [Hugging Face](https://huggingface.co/learn), [Stanford CS229](https://cs229.stanford.edu/), [OpenAI Cookbook](https://developers.openai.com/cookbook), [Datawhale](https://github.com/datawhalechina), etc.) |
| **User Preferences** | Local | Favorited tool IDs & Light/Dark theme preference | Stored exclusively in browser `localStorage` (zero server-side collection) |

### AI Methods / 核心 AI 方法
Directly applying concepts from **Building AI (Chapter 3: Working with Text & Nearest Neighbor Method)**, Gina AI implements a lightweight, interpretable client-side retrieval and recommendation pipeline:

1. **Bilingual Tokenization & Synonym Expansion (`tokenize`)**:
   * Extracts lowercase Latin/alphanumeric words alongside CJK unigrams and character bigrams (effective for Chinese search without requiring a heavy dictionary), plus a compact English–Chinese synonym table (`coding ↔ 编程/代码`, `ppt ↔ 演示/幻灯片`, `paper ↔ 论文/学术`, etc.).
2. **TF-IDF Vectorization & Cosine Similarity Ranking (`buildToolTfIdfIndex`, `vectorizeQuery`)**:
   * Represents each tool as a weighted TF-IDF vector across `name` (2.5×), `tags` (2.0×), `category` (1.6×), `desc` (1.2×), and region/price metadata (0.6×).
   * Ranks search results by combining TF-IDF cosine similarity with exact-match boosts, displaying a transparent relevance percentage badge (`匹配 xx%`).
3. **k-Nearest Neighbors (k-NN) for Similar Tools & Personalized Recommendations (`findNearestTools`, `getPersonalizedRecommendations`)**:
   * **Item-to-Item k-NN**: Finds the 4 closest tools to any selected tool using TF-IDF cosine similarity plus structured feature similarity (same category, region, pricing). For example, clicking `✨ 相似` on **Cursor** surfaces *Windsurf*, *GitHub Copilot*, *Tabnine*, and *Trae*.
   * **User-Profile Centroid k-NN**: Averages the normalized TF-IDF vectors of a user's favorited tools into a local preference centroid vector and recommends the top-4 unseen nearest neighbors — entirely inside the browser.

> **方法说明**：本项目在纯前端实现了 Building AI 课程的核心文本与推荐方法——中英双语分词与同义词扩展、加权 **TF-IDF 向量化 + 余弦相似度检索排序**，以及基于 **k-NN 最近邻**的「相似工具查找」与「收藏兴趣质心个性化推荐」。

---

## Challenges

What does Gina AI **not** solve, and what limitations or ethical considerations must be kept in mind?

* **Link rot & rapid ecosystem churn**: AI tools frequently change pricing tiers (e.g., free to paid), rename domains, or shut down. Although `scripts/check-links.mjs` helps detect dead links, pricing and feature descriptions still require periodic human review.
* **Curation & selection bias**: Limiting the directory to 100 tools and 15 courses inevitably reflects the curator's subjective judgment and language focus (Chinese & English), potentially overlooking valuable niche or regional tools.
* **Lexical limits of TF-IDF**: While TF-IDF + bilingual synonym expansion is fast, transparent, and zero-dependency, it cannot understand deep semantic nuance or complex multi-step user prompts the way dense neural embeddings or LLMs can.
* **Regional access disparities**: Labeling tools as `🇨🇳 直连` vs `🌐 VPN` is helpful for transparency, but network availability can fluctuate depending on ISP, campus, or corporate policies.
* **No quality guarantee for third-party tools**: Gina AI does not audit the privacy policies, data-retention practices, or hallucination rates of linked third-party AI platforms; users should still exercise caution before uploading sensitive personal or confidential data to external services.

> **局限与伦理考量**：Gina AI 无法彻底消除第三方 AI 网站链接失效与定价变动、人工精选带来的主观收录偏见、纯词袋/TF-IDF 模型在复杂语义理解上的天花板，也不对第三方平台的数据隐私合规性背书；因此项目本身坚持零登录、纯本地 `localStorage` 存储，并明确标注网络与收费状态以降低用户决策成本。

---

## What next?

To grow Gina AI from a single-file personal project into a community-maintained intelligent AI discovery platform:

1. **Automated Link & Metadata Monitoring (GitHub Actions)**: Schedule `scripts/check-links.mjs` weekly via GitHub Actions to automatically open issues when a URL returns 404 or redirects.
2. **Dense Semantic Embeddings in the Browser**: Pre-compute compact multilingual text embeddings (e.g., via open-source sentence-transformers) or run a small ONNX/WebGPU model in-browser to upgrade natural-language intent matching beyond TF-IDF.
3. **Full English / Chinese UI Toggle**: Extend the current bilingual search and README to a full `EN / 中文` interface switch so international learners can navigate effortlessly.
4. **Community Contributions & Evaluation Rubrics**: Add a structured PR template and transparent inclusion rubric (utility, reliability, free-tier clarity) so other learners can propose and verify new tools.

**Skills & assistance needed**: Collaboration with UX/accessibility designers for multi-language layouts, NLP/IR contributors for evaluating embedding vs. TF-IDF retrieval quality, and community maintainers to help keep tool statuses up to date.

---

## Acknowledgments

* **[Building AI](https://buildingai.elementsofai.com/)** by the **University of Helsinki** and **MinnaLearn** — for the clear conceptual foundation in text representation (TF-IDF), nearest-neighbor methods (k-NN), and responsible AI design, as well as the final project README framework.
* **Open-source & official AI education providers** featured in the Free Learning tab, including DeepLearning.AI, Fast.ai, Hugging Face, Stanford CS229, Google Skills, OpenAI Cookbook, Microsoft AI for Beginners, PaddlePaddle AI Studio, ModelScope, and Datawhale.
* All external product names, emojis, and links belong to their respective owners; Gina AI links directly to official sources without hosting third-party proprietary content.

---

## Appendix: Repository Structure / 仓库文件结构

```text
ginaai/
├── index.html                      # Main app (Light theme default, Light/Dark toggle, TF-IDF & k-NN engine)
├── index_light.html                # Standalone Light-default entry
├── index_dark.html                 # Standalone Dark-default entry
├── index_classic.html              # Legacy dark cyberpunk dashboard backup
├── aiwebsite.html                  # Legacy URL redirect page
├── aiwebsite_backup.html           # Historical backup before 2026 redesign
├── ginacode_ai_workbench_react.jsx # Optional React workbench snapshot
├── scripts/
│   └── check-links.mjs             # Automated health-check script for all 115 tool & course URLs
├── AGENTS.md                       # Local development workflow checklist
├── .nojekyll                       # GitHub Pages static deployment marker
└── README.md                       # Building AI final project documentation (this file)
```
