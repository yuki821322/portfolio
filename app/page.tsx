import DarkVeil from "../components/DarkVeil";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 背景エフェクト */}
      <DarkVeil
        hueShift={30}
        noiseIntensity={0.06}
        scanlineIntensity={0}
        speed={2}
        scanlineFrequency={5}
        warpAmount={0.3}
        resolutionScale={1}
      />

      {/* コンテンツ */}
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
  );
}


