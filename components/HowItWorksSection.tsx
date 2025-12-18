"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Upload Your File",
    description: "Drag and drop your file or click to select. Files up to 50MB are supported.",
  },
  {
    number: "2",
    title: "Secure with Options",
    description: "Add password protection, set expiry time, or require one-time download.",
  },
  {
    number: "3",
    title: "Get Share Code",
    description: "Receive a unique share code or custom code for easy sharing.",
  },
  {
    number: "4",
    title: "Share & Control",
    description: "Send the link to anyone. Files auto-delete after expiry or first download.",
  },
];

const StepCard = ({ step, index }: { step: (typeof steps)[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${
        isVisible ? "animate-slide-up" : "opacity-0 translate-y-8"
      }`}
      style={{ animationDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      {/* Connecting Line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-24 left-1/2 w-0.5 h-32 bg-gradient-to-b from-emerald-400 to-transparent transform -translate-x-1/2" />
      )}

      <div className="relative card-base">
        {/* Step Number */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center font-bold text-2xl mb-4">
          {step.number}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-base">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Simple, fast, and secure file sharing in just 4 steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.querySelector("#main-card");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            Start Sharing Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
