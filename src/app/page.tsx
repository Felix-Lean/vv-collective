import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-black overflow-hidden">
      {/* Screensaver */}
      <div className="screensaver">
        hannes stinkt
      </div>

      <main className="flex flex-col items-center gap-6 sm:gap-12 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-transparent blur-3xl" />
        
        {/* VV Text */}
        <h1 className="text-[4rem] sm:text-[6rem] md:text-[8.5rem] font-black relative animate-shimmer
          tracking-tight
          z-10">
          VV
        </h1>

        {/* Collective Text */}
        <h2 className="text-2xl sm:text-3xl font-light relative
          text-gray-400
          tracking-[0.15em]
          z-10">
          collective
        </h2>
      </main>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
    </div>
  );
}
