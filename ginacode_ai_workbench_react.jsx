export default function GinaCodeWorkbench() {
  const tools = [
    {
      title: 'ChatGPT',
      desc: '生成网页、小游戏与 AI 工具',
      link: 'https://chatgpt.com',
      color: 'from-cyan-400/20 to-blue-500/20',
    },
    {
      title: 'CodePen',
      desc: '在线即时运行网页代码',
      link: 'https://codepen.io',
      color: 'from-blue-400/20 to-indigo-500/20',
    },
    {
      title: 'GitHub',
      desc: '保存并管理你的项目',
      link: 'https://github.com',
      color: 'from-white/10 to-white/5',
    },
    {
      title: 'MDN Docs',
      desc: '最适合新手的前端学习文档',
      link: 'https://developer.mozilla.org/zh-CN/',
      color: 'from-emerald-400/20 to-cyan-400/20',
    },
    {
      title: 'Canva',
      desc: '免费设计 Logo 与界面素材',
      link: 'https://www.canva.com',
      color: 'from-pink-400/20 to-purple-500/20',
    },
    {
      title: 'Coolors',
      desc: '一键生成高级配色方案',
      link: 'https://coolors.co',
      color: 'from-yellow-400/20 to-orange-500/20',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-cyan-100 overflow-hidden relative">
      {/* 动态背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,140,255,0.15),transparent_45%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 顶部 */}
      <header className="relative z-10 border-b border-cyan-500/20 backdrop-blur-2xl bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]">
              GinaCode
            </h1>
            <p className="text-cyan-100/60 mt-2 text-sm">
              未来 AI 编程工作台 · 为新手打造
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://chatgpt.com"
              target="_blank"
              className="px-5 py-2 rounded-2xl bg-cyan-400/20 border border-cyan-300/30 hover:scale-105 hover:bg-cyan-300/30 transition"
            >
              AI 创作
            </a>

            <a
              href="https://codepen.io"
              target="_blank"
              className="px-5 py-2 rounded-2xl bg-blue-400/20 border border-blue-300/30 hover:scale-105 hover:bg-blue-300/30 transition"
            >
              在线预览
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-5 py-2 rounded-2xl bg-white/10 border border-white/20 hover:scale-105 hover:bg-white/20 transition"
            >
              项目仓库
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-4">
        <div className="rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-cyan-500/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-300 animate-ping" />
                <span className="text-sm text-cyan-200">
                  AI 编程模式已启动
                </span>
              </div>

              <h2 className="text-5xl font-black leading-tight text-white">
                用中文
                <span className="text-cyan-300">创造网页</span>
              </h2>

              <p className="text-cyan-100/60 mt-6 text-lg leading-relaxed max-w-xl">
                不需要会代码。
                只需要告诉 AI 你想做什么，GinaCode 会帮你快速连接 ChatGPT、CodePen 与 GitHub。
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://chatgpt.com"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition shadow-[0_0_25px_rgba(0,255,255,0.6)]"
                >
                  开始 AI 创作
                </a>

                <a
                  href="https://codepen.io/pen/"
                  target="_blank"
                  className="px-6 py-4 rounded-2xl border border-cyan-400/20 bg-white/5 hover:bg-cyan-400/10 transition"
                >
                  立即运行代码
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-black/40 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-cyan-300 font-semibold text-lg">
                    今日推荐提示词
                  </p>
                  <p className="text-cyan-100/50 text-sm mt-1">
                    一键生成未来科技网页
                  </p>
                </div>

                <div className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse" />
              </div>

              <div className="rounded-2xl bg-cyan-400/10 border border-cyan-400/20 p-5 text-cyan-100 leading-relaxed text-sm">
                做一个赛博朋克风个人主页。
                要求：深色背景、动态粒子、霓虹按钮、支持手机、带动画效果。
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  '登录页',
                  'Todo 工具',
                  '贪吃蛇',
                  'AI 聊天界面',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4 hover:border-cyan-400/40 transition"
                  >
                    <p className="text-sm text-cyan-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工具区 */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-cyan-200">
              免费新手工具箱
            </h3>
            <p className="text-cyan-100/50 mt-1 text-sm">
              这些工具非常适合 AI 编程入门
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-sm text-cyan-200">
            GinaCode Workspace
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              target="_blank"
              className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${tool.color} p-6 backdrop-blur-xl hover:scale-[1.02] hover:border-cyan-400/30 transition-all duration-300 shadow-xl`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-black/30 flex items-center justify-center text-cyan-300 font-bold text-lg border border-white/10">
                  {tool.title.charAt(0)}
                </div>

                <div className="w-2 h-2 rounded-full bg-cyan-300 group-hover:animate-ping" />
              </div>

              <h4 className="text-2xl font-bold text-white mb-3">
                {tool.title}
              </h4>

              <p className="text-cyan-100/60 leading-relaxed text-sm">
                {tool.desc}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-cyan-300 text-sm">
                打开工具 →
              </div>
            </a>
          ))}
        </div>

        {/* 底部状态 */}
        <div className="mt-10 rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-cyan-200">
              GinaCode AI 状态
            </h4>
            <p className="text-cyan-100/50 mt-2">
              当前工作台已准备完成，你可以直接开始 AI 编程体验。
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
            {[
              ['AI 模式', '在线'],
              ['CodePen', '已连接'],
              ['GitHub', '待上传'],
            ].map(([title, status]) => (
              <div
                key={title}
                className="rounded-2xl border border-cyan-400/20 bg-black/30 px-5 py-4 min-w-[120px]"
              >
                <p className="text-xs text-cyan-100/50">{title}</p>
                <p className="text-cyan-300 font-semibold mt-2">{status}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
