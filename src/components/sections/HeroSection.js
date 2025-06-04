'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { APP_NAME, APP_TAGLINE } from '@/lib/constants';

const HeroSection = () => {
  const heroRef = useRef(null);
  const matrixRef = useRef(null);

  useEffect(() => {
    // Matrix effect
    const canvas = matrixRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00D4FF';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Background */}
      <canvas
        ref={matrixRef}
        className="absolute inset-0 w-full h-full opacity-20"
        style={{ zIndex: 1 }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-700/90" style={{ zIndex: 2 }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-blue rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-green rounded-xl flex items-center justify-center shadow-lg shadow-accent-blue/25">
            <svg
              className="w-10 h-10 text-primary-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white">
            {APP_NAME}
          </h1>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-accent-blue via-accent-green to-accent-purple bg-clip-text text-transparent">
              Prove your skills.
            </span>
            <br />
            <span className="text-white">Play your job.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enter an immersive 2.5D office simulation where you complete real work tasks, 
            showcase your abilities, and connect with opportunities—all in a gamified environment.
          </p>
        </div>

        {/* Mini Demo Preview */}
        <div className="mb-12 relative">
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Developer Station */}
              <div className="bg-primary-700/50 rounded-xl p-4 border border-accent-blue/30 hover:border-accent-blue transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent-blue/30 transition-colors">
                  <svg className="w-6 h-6 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Developer Desk</h3>
                <p className="text-gray-400 text-sm">Code, debug, and build applications with real tools</p>
              </div>

              {/* Designer Station */}
              <div className="bg-primary-700/50 rounded-xl p-4 border border-accent-purple/30 hover:border-accent-purple transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent-purple/30 transition-colors">
                  <svg className="w-6 h-6 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Design Bay</h3>
                <p className="text-gray-400 text-sm">Create stunning visuals and user experiences</p>
              </div>

              {/* AI Lab */}
              <div className="bg-primary-700/50 rounded-xl p-4 border border-accent-green/30 hover:border-accent-green transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent-green/30 transition-colors">
                  <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">AI Prompt Lab</h3>
                <p className="text-gray-400 text-sm">Engineer prompts and optimize AI models</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/signup">
            <Button size="xl" className="px-12 py-4 text-xl">
              Start Your Journey
            </Button>
          </a>
          <a href="/demo">
            <Button variant="outline" size="xl" className="px-12 py-4 text-xl">
              Watch Demo
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">2.5D</div>
            <div className="text-gray-400">Immersive Environment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-green mb-2">5+</div>
            <div className="text-gray-400">Work Stations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-purple mb-2">AI</div>
            <div className="text-gray-400">Powered Quests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">Real</div>
            <div className="text-gray-400">Work Simulation</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-blue rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
