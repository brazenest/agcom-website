export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-gradient-slow"></div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
        Alden Gillespy
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-100 font-medium mb-4">
        Full-Stack Software Engineer
      </h2>
      <p className="max-w-2xl text-base sm:text-lg text-gray-200 leading-relaxed mb-8">
        Full-stack software engineer focused on building clean, reliable, and
        user-friendly experiences — with a curiosity for learning and a love for
        great code.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white hover:text-gray-900 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
