'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const SolutionSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);

  const demoSteps = [
    {
      title: "Enter the Office",
      description: "Navigate through our immersive 2.5D office environment",
      visual: "🏢",
      details: "Walk through realistic office spaces with interactive work stations"
    },
    {
      title: "Choose Your Station",
      description: "Select from Developer, Designer, PM, Data, or AI stations",
      visual: "🎯",
      details: "Each station has specialized tools and realistic work environments"
    },
    {
      title: "Complete Real Tasks",
      description: "Work on actual job scenarios with professional tools",
      visual: "⚡",
      details: "Use real IDEs, design software, and project management tools"
    },
    {
      title: "Earn Recognition",
      description: "Build your profile with verified skills and achievements",
      visual: "🏆",
      details: "Get discovered by employers and showcase your real capabilities"
    }
  ];

  const features = [
    {
      icon: "🌐",
      title: "2.5D Immersive Environment",
      description: "Navigate through realistic office spaces with smooth animations and interactive elements"
    },
    {
      icon: "🛠️",
      title: "Real Professional Tools",
      description: "Work with actual IDEs, design software, and project management interfaces"
    },
    {
      icon: "🤖",
      title: "AI-Powered Quests",
      description: "Dynamic task generation that adapts to your skill level and learning pace"
    },
    {
      icon: "👥",
      title: "Talent Discovery",
      description: "Connect with employers and showcase your skills through live demonstrations"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track your progress, identify strengths, and get personalized recommendations"
    },
    {
      icon: "🎮",
      title: "Gamified Learning",
      description: "Earn XP, unlock achievements, and level up your professional skills"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveDemo(prev => (prev + 1) % demoSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, demoSteps.length]);

  const startDemo = () => {
    setIsPlaying(true);
    setActiveDemo(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SimWork revolutionizes skill assessment through immersive work simulation. 
            Experience real job scenarios in a gamified environment.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="mb-20">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">How It Works</h3>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={startDemo}
                  variant={isPlaying ? 'outline' : 'primary'}
                  disabled={isPlaying}
                >
                  {isPlaying ? 'Demo Running...' : 'Start Demo'}
                </Button>
                {isPlaying && (
                  <Button onClick={stopDemo} variant="outline">
                    Stop Demo
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Demo Steps */}
              <div className="space-y-6">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-500 cursor-pointer ${
                      activeDemo === index
                        ? 'border-accent-blue bg-accent-blue/10 scale-105'
                        : 'border-primary-600 hover:border-primary-500'
                    }`}
                    onClick={() => setActiveDemo(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`text-4xl transition-all duration-300 ${
                        activeDemo === index ? 'animate-bounce' : ''
                      }`}>
                        {step.visual}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">
                          Step {index + 1}: {step.title}
                        </h4>
                        <p className="text-gray-300 mb-2">{step.description}</p>
                        <p className="text-sm text-gray-400">{step.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Demo */}
              <div className="relative">
                <Card className="p-8 bg-primary-800/50">
                  <div className="text-center">
                    <div className="text-8xl mb-6 animate-pulse">
                      {demoSteps[activeDemo].visual}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {demoSteps[activeDemo].title}
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {demoSteps[activeDemo].description}
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-primary-700 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-accent-blue to-accent-green h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((activeDemo + 1) / demoSteps.length) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-sm text-gray-400">
                      Step {activeDemo + 1} of {demoSteps.length}
                    </div>
                  </div>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-green rounded-full animate-pulse"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                hover 
                className="p-6 transform transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 3-Step Summary */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Simple. Effective. Revolutionary.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <Card className="p-8 h-full">
                <div className="text-6xl mb-6">🎮</div>
                <h4 className="text-2xl font-bold text-white mb-4">Play</h4>
                <p className="text-gray-300">
                  Enter immersive work environments and complete realistic job tasks
                </p>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-accent-blue"></div>
                <div className="w-0 h-0 border-l-4 border-l-accent-blue border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-0.5"></div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 h-full">
                <div className="text-6xl mb-6">📈</div>
                <h4 className="text-2xl font-bold text-white mb-4">Prove</h4>
                <p className="text-gray-300">
                  Demonstrate real skills through hands-on work simulation and earn recognition
                </p>
              </Card>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="w-8 h-0.5 bg-accent-blue"></div>
                <div className="w-0 h-0 border-l-4 border-l-accent-blue border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-0.5"></div>
              </div>
            </div>

            <div>
              <Card className="p-8 h-full">
                <div className="text-6xl mb-6">🚀</div>
                <h4 className="text-2xl font-bold text-white mb-4">Progress</h4>
                <p className="text-gray-300">
                  Get discovered by employers and advance your career with verified skills
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/demo">
            <Button size="xl" className="px-12">
              Experience SimWork Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
