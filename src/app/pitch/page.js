'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    {
      id: 1,
      title: "The Problem",
      subtitle: "Hiring is Broken",
      content: [
        "70% of hiring managers say interviews don't reflect real work",
        "Mis-hires cost companies $240K+ per position",
        "Traditional assessments are static and unrealistic",
        "No way to prove skills in real work environments"
      ],
      visual: "📊",
      bgColor: "from-red-500/20 to-orange-500/20"
    },
    {
      id: 2,
      title: "Our Solution",
      subtitle: "SimWork: Real Work, Simulated",
      content: [
        "2.5D immersive office environment",
        "Real tools: IDEs, design software, project management",
        "AI-generated tasks matching actual job requirements",
        "Live skill demonstration and portfolio building"
      ],
      visual: "🚀",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "Market Opportunity",
      subtitle: "$6.8B Total Addressable Market",
      content: [
        "Technical Assessment: $2.3B market",
        "Gamified Learning: $17.2B growing 27% annually",
        "Remote Hiring Tools: $4.1B accelerated by remote work",
        "VR/AR Training: $12.8B expected to reach $50B by 2030"
      ],
      visual: "💰",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Competitive Advantage",
      subtitle: "First-Mover in Immersive Assessment",
      content: [
        "Only platform combining 2.5D simulation + real tools",
        "Multi-role support (Dev, Design, PM, Data, AI)",
        "Freelancer marketplace integration",
        "AI-powered adaptive quest generation"
      ],
      visual: "⚡",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      title: "Business Model",
      subtitle: "Freemium with Enterprise Focus",
      content: [
        "Free: Basic simulation access",
        "Pro ($199/mo): Recruiter tools, analytics",
        "Enterprise ($599/mo): Custom simulations, API",
        "Revenue streams: SaaS, marketplace fees, certifications"
      ],
      visual: "💼",
      bgColor: "from-indigo-500/20 to-blue-500/20"
    },
    {
      id: 6,
      title: "Traction & Metrics",
      subtitle: "Early Validation",
      content: [
        "MVP completed with 5 work stations",
        "Target: 1,000 DAU in first 3 months",
        "70%+ quest completion rate goal",
        "40% weekly retention target"
      ],
      visual: "📈",
      bgColor: "from-teal-500/20 to-green-500/20"
    },
    {
      id: 7,
      title: "Team & Vision",
      subtitle: "Building the Future of Work Assessment",
      content: [
        "Experienced team in EdTech and HR Tech",
        "Vision: Make skills visible through action",
        "Mission: Revolutionize hiring with immersive simulation",
        "Goal: Become the standard for skill assessment"
      ],
      visual: "👥",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 8,
      title: "Funding Ask",
      subtitle: "$2M Seed Round",
      content: [
        "Product development: 40%",
        "Team expansion: 35%",
        "Marketing & user acquisition: 20%",
        "Operations & infrastructure: 5%"
      ],
      visual: "💎",
      bgColor: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        {/* Presentation Controls */}
        <div className="fixed top-20 right-4 z-50 flex flex-col space-y-2">
          <Button
            size="sm"
            variant={isAutoPlay ? 'primary' : 'outline'}
            onClick={() => setIsAutoPlay(!isAutoPlay)}
          >
            {isAutoPlay ? '⏸️' : '▶️'}
          </Button>
          <Button size="sm" variant="outline" onClick={prevSlide}>
            ⬅️
          </Button>
          <Button size="sm" variant="outline" onClick={nextSlide}>
            ➡️
          </Button>
        </div>

        {/* Slide Navigation */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-2 bg-primary-800/80 backdrop-blur-sm rounded-full px-4 py-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-accent-blue scale-125'
                    : 'bg-primary-600 hover:bg-primary-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Slide */}
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl w-full">
            <Card className={`p-12 bg-gradient-to-br ${currentSlideData.bgColor} border-2 border-primary-600`}>
              <div className="text-center">
                {/* Slide Number */}
                <div className="text-sm text-gray-400 mb-4">
                  {currentSlide + 1} / {slides.length}
                </div>

                {/* Visual Icon */}
                <div className="text-8xl mb-8 animate-bounce">
                  {currentSlideData.visual}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  {currentSlideData.title}
                </h1>

                {/* Subtitle */}
                <h2 className="text-2xl md:text-3xl text-accent-blue mb-12">
                  {currentSlideData.subtitle}
                </h2>

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                  <ul className="space-y-6 text-left">
                    {currentSlideData.content.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-4 text-xl text-gray-300 animate-fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <span className="text-accent-green text-2xl">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special content for specific slides */}
                {currentSlide === 2 && (
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-blue">$2.3B</div>
                      <div className="text-sm text-gray-400">Assessment Market</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-green">$17.2B</div>
                      <div className="text-sm text-gray-400">Gamified Learning</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-purple">$4.1B</div>
                      <div className="text-sm text-gray-400">Remote Hiring</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">$50B</div>
                      <div className="text-sm text-gray-400">VR/AR by 2030</div>
                    </div>
                  </div>
                )}

                {currentSlide === 4 && (
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="p-6 bg-primary-700/50">
                      <h3 className="text-xl font-bold text-white mb-2">Free</h3>
                      <div className="text-3xl font-bold text-accent-blue mb-2">$0</div>
                      <p className="text-gray-400">Basic simulation access</p>
                    </Card>
                    <Card className="p-6 bg-primary-700/50 border-2 border-accent-blue">
                      <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                      <div className="text-3xl font-bold text-accent-blue mb-2">$199</div>
                      <p className="text-gray-400">Recruiter tools & analytics</p>
                    </Card>
                    <Card className="p-6 bg-primary-700/50">
                      <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                      <div className="text-3xl font-bold text-accent-blue mb-2">$599</div>
                      <p className="text-gray-400">Custom simulations & API</p>
                    </Card>
                  </div>
                )}

                {currentSlide === 7 && (
                  <div className="mt-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">💻</span>
                        </div>
                        <div className="text-lg font-semibold text-white">40%</div>
                        <div className="text-sm text-gray-400">Product Dev</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">👥</span>
                        </div>
                        <div className="text-lg font-semibold text-white">35%</div>
                        <div className="text-sm text-gray-400">Team Growth</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">📢</span>
                        </div>
                        <div className="text-lg font-semibold text-white">20%</div>
                        <div className="text-sm text-gray-400">Marketing</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl">⚙️</span>
                        </div>
                        <div className="text-lg font-semibold text-white">5%</div>
                        <div className="text-sm text-gray-400">Operations</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
                  {currentSlide === slides.length - 1 ? (
                    <>
                      <Button size="xl" className="px-12">
                        Schedule Meeting
                      </Button>
                      <Button variant="outline" size="xl" className="px-12">
                        Download Deck
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={nextSlide} size="lg">
                        Next Slide
                      </Button>
                      <Button variant="outline" onClick={() => goToSlide(slides.length - 1)} size="lg">
                        Skip to Ask
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Slide Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Presentation Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slides.map((slide, index) => (
                <Card
                  key={slide.id}
                  hover
                  className={`p-6 cursor-pointer transition-all ${
                    index === currentSlide ? 'border-accent-blue bg-accent-blue/10' : ''
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{slide.visual}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{slide.title}</h3>
                    <p className="text-sm text-gray-400">{slide.subtitle}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
