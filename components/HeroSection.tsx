"use client";

export default function HeroSection() {
  const scrollToUpload = () => {
    const element = document.querySelector("#main-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-purple-600 pt-20">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift opacity-50"
        style={{
          backgroundSize: "400% 400%",
          backgroundImage: "linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl" />

      <div className="relative z-10 container-base h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl animate-fade-in">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Fast.
            </span>{" "}
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Secure.
            </span>{" "}
            <span className="inline-block animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Effortless
            </span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            File Sharing.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.5s" }}>
            Share your files securely with custom passwords, expiry times, and one-time downloads. No registration required.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToUpload}
            className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-purple-600 font-bold px-8 md:px-12 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95 animate-bounce-entrance"
            style={{ animationDelay: "0.7s" }}
          >
            Start Sharing Now
            <svg className="w-5 h-5 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 text-white animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold">0B</div>
              <div className="text-sm opacity-80">Up to 50MB</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">∞</div>
              <div className="text-sm opacity-80">No Registration</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">✓</div>
              <div className="text-sm opacity-80">100% Encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
