import Image from "next/image";
import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative w-full h-screen overflow-hidden">
        <DarkVeil
          hueShift={30}
          noiseIntensity={0.06}
          scanlineIntensity={0}
          speed={2}
          scanlineFrequency={5}
          warpAmount={0.3}
          resolutionScale={1}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <TextType
              text="Welcome to My Portfolio"
              as="span"
              typingSpeed={100}
              pauseDuration={3000}
              showCursor
              deletingSpeed={60}
              cursorBlinkDuration={0.5}
              loop={false}
            />
          </h1>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
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
            <div className="space-y-6 text-zinc-300">
              <p>
                こんにちは！フロントエンドエンジニアの今給黎 祐来です。
                Nextjsを使ってポートフォリオを作ってみました。
              </p>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">技術的なバックグラウンド</h3>
              <p>
                
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">大切にしている価値観</h3>
              <p>
                [ここに価値観を記載]
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">現在の関心事</h3>
              <p>
                [ここに関心事を記載]
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-3">[プロジェクト名]</h3>
              <p className="text-zinc-400 mb-4">
                [プロジェクトの概要を記載]
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-300 mb-2">技術スタック</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">TypeScript</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-300 mb-2">こだわったポイント</h4>
                <p className="text-zinc-400 text-sm">
                  [こだわったポイントや苦労した点を記載]
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Demo</a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-3">[プロジェクト名]</h3>
              <p className="text-zinc-400 mb-4">
                [プロジェクトの概要を記載]
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-300 mb-2">技術スタック</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">Node.js</span>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-300 mb-2">こだわったポイント</h4>
                <p className="text-zinc-400 text-sm">
                  [こだわったポイントや苦労した点を記載]
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">GitHub</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Languages</h3>
              <ul className="space-y-2">
                <li className="text-zinc-300">JavaScript / TypeScript</li>
                <li className="text-zinc-300">HTML / CSS</li>
                <li className="text-zinc-300">[その他]</li>
              </ul>
            </div>
            {/* Frameworks */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Frameworks</h3>
              <ul className="space-y-2">
                <li className="text-zinc-300">React</li>
                <li className="text-zinc-300">Next.js</li>
                <li className="text-zinc-300">[その他]</li>
              </ul>
            </div>
            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="text-zinc-300">Git / GitHub</li>
                <li className="text-zinc-300">VS Code</li>
                <li className="text-zinc-300">[その他]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Contact</h2>
          <p className="text-zinc-400 mb-8">
            お気軽にご連絡ください
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your@email.com"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


