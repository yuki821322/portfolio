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
          className="object-cover object-[center_0%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-stone-900/90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center px-4 w-full max-w-4xl">
            <p className="text-sm md:text-lg text-white/80 tracking-widest mb-6 font-light">FRONTEND ENGINEER</p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-amber-100 mb-6 drop-shadow-lg whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
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
      <section id="about" className="relative z-10 py-20 px-6 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>About Me</h2>
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <Image
                src="/MyPicture.jpg"
                alt="プロフィール画像"
                width={300}
                height={300}
                className="rounded-full object-cover w-full max-w-xs aspect-square ring-4 ring-amber-600/40 shadow-xl"
              />
            </div>
            <div className="space-y-6 text-stone-300">
              <p>
                こんにちは！フロントエンドエンジニアの今給黎 祐来です。
                Nextjsを使ってポートフォリオを作ってみました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 py-20 px-6 overflow-hidden">
        <Image
          src="/top-image.JPG"
          alt=""
          fill
          className="object-cover object-[center_50%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Projects</h2>

          {/* Timeline Stepper */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800" />

            {/* Project 1 */}
            <div className="relative flex gap-6 md:gap-10 pb-12">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #78350f, #92400e)', color: '#fef3c7', border: '2px solid rgba(217, 119, 6, 0.5)' }}>
                  01
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
                <span className="text-xs mb-2 block" style={{ color: '#fef3c7' }}>2025.05</span>
                <h3 className="text-xl font-bold mb-3 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>ビンゴゲーム(大会)</h3>
                <p className="mb-4" style={{ color: '#d6d3d1' }}>
                学校で行われた文化祭に向けて、個人開発で制作したオンラインビンゴゲームです。来場者がスマホやPCから同時に参加でき、運営側はリアルタイムで進行を管理できる仕組みを実装しました。実際のオフライン会場での使用を想定しつつ、オンライン配信と組み合わせた運用にも対応できる設計にしています。
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>React</span>
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>Next.js</span>
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>TypeScript</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>こだわったポイント</h4>
                  <p className="text-sm" style={{ color: '#78716c' }}>
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>GitHub</a>
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>Demo</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative flex gap-6 md:gap-10 pb-12">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #78350f, #92400e)', color: '#fef3c7', border: '2px solid rgba(217, 119, 6, 0.5)' }}>
                  02
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
                <span className="text-xs mb-2 block" style={{ color: '#fef3c7' }}>2024.03</span>
                <h3 className="text-xl font-bold mb-3 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>[プロジェクト名]</h3>
                <p className="mb-4" style={{ color: '#d6d3d1' }}>
                  [プロジェクトの概要を記載]
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>React</span>
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>Node.js</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>こだわったポイント</h4>
                  <p className="text-sm" style={{ color: '#78716c' }}>
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>GitHub</a>
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>Demo</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative flex gap-6 md:gap-10">
              {/* Step Indicator */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-sm md:text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #78350f, #92400e)', color: '#fef3c7', border: '2px solid rgba(217, 119, 6, 0.5)' }}>
                  03
                </div>
              </div>
              {/* Card */}
              <div className="flex-1 backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
                <span className="text-xs mb-2 block" style={{ color: '#fef3c7' }}>2024.06</span>
                <h3 className="text-xl font-bold mb-3 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>[プロジェクト名]</h3>
                <p className="mb-4" style={{ color: '#d6d3d1' }}>
                  [プロジェクトの概要を記載]
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>技術スタック</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>Vue.js</span>
                    <span className="px-3 py-1 text-sm rounded-full" style={{ background: 'rgba(217, 119, 6, 0.2)', color: '#fcd34d', border: '1px solid rgba(217, 119, 6, 0.4)' }}>Firebase</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#a8a29e' }}>こだわったポイント</h4>
                  <p className="text-sm" style={{ color: '#78716c' }}>
                    [こだわったポイントや苦労した点を記載]
                  </p>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>GitHub</a>
                  <a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#fef3c7' }}>Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative z-10 py-20 px-6 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-4 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>Languages</h3>
              <ul className="space-y-2">
                <li style={{ color: '#d6d3d1' }}>JavaScript / TypeScript</li>
                <li style={{ color: '#d6d3d1' }}>HTML / CSS</li>
                <li style={{ color: '#d6d3d1' }}>[その他]</li>
              </ul>
            </div>
            {/* Frameworks */}
            <div className="backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-4 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>Frameworks</h3>
              <ul className="space-y-2">
                <li style={{ color: '#d6d3d1' }}>React</li>
                <li style={{ color: '#d6d3d1' }}>Next.js</li>
                <li style={{ color: '#d6d3d1' }}>[その他]</li>
              </ul>
            </div>
            {/* Tools */}
            <div className="backdrop-blur-sm rounded-lg p-6 shadow-xl" style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
              <h3 className="text-lg font-semibold mb-4 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>Tools & Others</h3>
              <ul className="space-y-2">
                <li style={{ color: '#d6d3d1' }}>Git / GitHub</li>
                <li style={{ color: '#d6d3d1' }}>VS Code</li>
                <li style={{ color: '#d6d3d1' }}>[その他]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-6 overflow-hidden">
        <Image
          src="/top-image.JPG"
          alt=""
          fill
          className="object-cover object-[center_100%]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-100" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h2>
          <p className="mb-8 text-stone-400">
            お気軽にご連絡ください
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your@email.com"
              className="px-6 py-2 rounded-full transition-all hover:opacity-80"
              style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.4)', color: '#fef3c7' }}
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full transition-all hover:opacity-80"
              style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.4)', color: '#fef3c7' }}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full transition-all hover:opacity-80"
              style={{ background: 'rgba(68, 64, 60, 0.8)', border: '1px solid rgba(217, 119, 6, 0.4)', color: '#fef3c7' }}
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


