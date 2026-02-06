import Image from "next/image";
import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";
import SplashCursor from "../components/SplashCursor";
import HandwritingText from "../components/HandwritingText";

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/top-image.JPG"
          alt="ファーストビュー背景"
          fill
          className="object-cover object-[center_70%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4 w-full max-w-4xl">
            <p className="text-sm md:text-lg text-white/80 tracking-widest mb-6 font-light">FRONTEND ENGINEER</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
              <TextType
                text="Welcome to My Portfolio"
                as="span"
                typingSpeed={80}
                pauseDuration={3000}
                showCursor
                deletingSpeed={60}
                cursorBlinkDuration={0.5}
                cursorCharacter="▌"
                loop={false}
              />
            </h1>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="relative z-10 py-20 px-6 bg-white/90">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <Image
                src="/MyPicture.jpg"
                alt="プロフィール画像"
                width={300}
                height={300}
                className="rounded-full object-cover w-full max-w-xs aspect-square"
              />
            </div>
            <div className="space-y-6 text-zinc-700">
              <p>
                こんにちは！フロントエンドエンジニアの今給黎 祐来です。
                Nextjsを使ってポートフォリオを作ってみました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 py-20 px-6 bg-zinc-100/90">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">Projects</h2>

          {/* Timeline Stepper */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-zinc-300" />

            {/* Project 1 */}
            <div className="relative flex gap-6 md:gap-10 pb-12">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-xl shadow-lg">
                  01
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 bg-white rounded-lg p-6 border border-zinc-200 shadow-sm">
                <span className="text-xs text-zinc-500 mb-2 block">2025.05</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">ビンゴゲーム(大会)</h3>
                <p className="text-zinc-600 mb-4">
                学校で行われた文化祭に向けて、個人開発で制作したオンラインビンゴゲームです。来場者がスマホやPCから同時に参加でき、運営側はリアルタイムで進行を管理できる仕組みを実装しました。実際のオフライン会場での使用を想定しつつ、オンライン配信と組み合わせた運用にも対応できる設計にしています。
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">TypeScript</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">こだわったポイント</h4>
                  <p className="text-zinc-600 text-sm">
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">GitHub</a>
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative flex gap-6 md:gap-10 pb-12">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-xl shadow-lg">
                  02
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 bg-white rounded-lg p-6 border border-zinc-200 shadow-sm">
                <span className="text-xs text-zinc-500 mb-2 block">2024.03</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">[プロジェクト名]</h3>
                <p className="text-zinc-600 mb-4">
                  [プロジェクトの概要を記載]
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">Node.js</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">こだわったポイント</h4>
                  <p className="text-zinc-600 text-sm">
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">GitHub</a>
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">Demo</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative flex gap-6 md:gap-10">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm md:text-xl shadow-lg">
                  03
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 bg-white rounded-lg p-6 border border-zinc-200 shadow-sm">
                <span className="text-xs text-zinc-500 mb-2 block">2024.06</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">[プロジェクト名]</h3>
                <p className="text-zinc-600 mb-4">
                  [プロジェクトの概要を記載]
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">Vue.js</span>
                    <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-full">Firebase</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zinc-700 mb-2">こだわったポイント</h4>
                  <p className="text-zinc-600 text-sm">
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">GitHub</a>
                  <a href="#" className="text-blue-600 hover:text-blue-500 text-sm">Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-20 px-6 bg-white/90">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="text-zinc-700">JavaScript / TypeScript</li>
                <li className="text-zinc-700">HTML / CSS</li>
                <li className="text-zinc-700">[その他]</li>
              </ul>
            </div>
            {/* Frameworks */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Frameworks</h3>
              <ul className="space-y-2">
                <li className="text-zinc-700">React</li>
                <li className="text-zinc-700">Next.js</li>
                <li className="text-zinc-700">[その他]</li>
              </ul>
            </div>
            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="text-zinc-700">Git / GitHub</li>
                <li className="text-zinc-700">VS Code</li>
                <li className="text-zinc-700">[その他]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-6 bg-zinc-100/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">Contact</h2>
          <p className="text-zinc-600 mb-8">
            お気軽にご連絡ください
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your@email.com"
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


