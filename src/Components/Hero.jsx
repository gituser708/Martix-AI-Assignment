export default function Hero() {
  return (
    <header
      className="flex flex-col justify-center items-center text-center 
                 text-white px-4 relative overflow-hidden 
                 h-[50vh] md:h-screen"
      style={{
        backgroundImage: "url('/ai-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('/ai-background.jpg')",
        }}
      ></div>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-md md:max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
          Empowering AI Innovation
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 font-semibold text-gray-100 drop-shadow-md">
          We help businesses harness Artificial Intelligence to innovate, scale,
          and stay ahead.
        </p>
        <a
          href="#contact"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
