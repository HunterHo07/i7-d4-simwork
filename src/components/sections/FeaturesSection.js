'use client';

import { useState, useRef, useEffect } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      id: 'immersive',
      title: '2.5D Immersive Environment',
      description: 'Navigate through realistic office spaces with smooth animations and interactive elements',
      icon: '🌐',
      details: [
        'Realistic office layouts with multiple work stations',
        'Smooth character movement and navigation',
        'Interactive objects and environmental elements',
        'Responsive design that works on all devices'
      ],
      demo: 'office-navigation'
    },
    {
      id: 'tools',
      title: 'Real Professional Tools',
      description: 'Work with actual IDEs, design software, and project management interfaces',
      icon: '🛠️',
      details: [
        'Monaco Editor for coding challenges',
        'Fabric.js for design tasks',
        'Kanban boards for project management',
        'Real-time collaboration features'
      ],
      demo: 'tool-showcase'
    },
    {
      id: 'ai',
      title: 'AI-Powered Quest System',
      description: 'Dynamic task generation that adapts to your skill level and learning pace',
      icon: '🤖',
      details: [
        'Personalized difficulty progression',
        'Industry-relevant scenarios',
        'Real-time performance analysis',
        'Adaptive learning pathways'
      ],
      demo: 'ai-generation'
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into performance, skills, and career progression',
      icon: '📊',
      details: [
        'Detailed skill assessments',
        'Performance tracking over time',
        'Comparative analysis with peers',
        'Personalized improvement recommendations'
      ],
      demo: 'analytics-dashboard'
    },
    {
      id: 'collaboration',
      title: 'Multiplayer Collaboration',
      description: 'Work together with other users on team-based challenges and projects',
      icon: '👥',
      details: [
        'Real-time collaborative editing',
        'Team-based quest completion',
        'Voice and text communication',
        'Shared workspaces and projects'
      ],
      demo: 'collaboration-demo'
    },
    {
      id: 'marketplace',
      title: 'Talent Marketplace',
      description: 'Connect with employers and showcase your verified skills to potential clients',
      icon: '🎯',
      details: [
        'Verified skill demonstrations',
        'Direct employer connections',
        'Portfolio generation from completed tasks',
        'Reputation system based on performance'
      ],
      demo: 'marketplace-preview'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentFeature = features[activeFeature];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to showcase, develop, and validate your professional skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <Card
                key={feature.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? 'border-accent-blue bg-accent-blue/10 scale-105'
                    : 'hover:border-primary-500'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-4xl transition-all duration-300 ${
                    activeFeature === index ? 'animate-bounce' : ''
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    {activeFeature === index && (
                      <ul className="space-y-2 animate-fade-in">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="text-accent-green">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Feature Demo */}
          <div className="relative">
            <Card className="p-8 bg-primary-800/50 min-h-[500px]">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse">
                  {currentFeature.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentFeature.title}
                </h3>
                <p className="text-gray-300 mb-8">
                  {currentFeature.description}
                </p>

                {/* Demo Content Based on Feature */}
                <div className="space-y-6">
                  {currentFeature.demo === 'office-navigation' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="h-16 bg-accent-blue/20 rounded flex items-center justify-center">
                          <span className="text-accent-blue">💻 Dev</span>
                        </div>
                        <div className="h-16 bg-accent-purple/20 rounded flex items-center justify-center">
                          <span className="text-accent-purple">🎨 Design</span>
                        </div>
                        <div className="h-16 bg-accent-green/20 rounded flex items-center justify-center">
                          <span className="text-accent-green">📋 PM</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">Interactive office layout</div>
                    </div>
                  )}

                  {currentFeature.demo === 'tool-showcase' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-green-400">●</span>
                          <span className="text-gray-300">Monaco Editor - Live coding</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-blue-400">●</span>
                          <span className="text-gray-300">Design Canvas - Creative tools</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-purple-400">●</span>
                          <span className="text-gray-300">Project Board - Task management</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature.demo === 'ai-generation' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="text-left">
                          <div className="text-accent-blue text-sm mb-1">AI Quest Generator</div>
                          <div className="text-gray-300 text-sm">Analyzing your skill level...</div>
                        </div>
                        <div className="w-full bg-primary-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-accent-blue to-accent-green h-2 rounded-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="text-accent-green text-sm">Quest generated: "Build a React component with TypeScript"</div>
                      </div>
                    </div>
                  )}

                  {currentFeature.demo === 'analytics-dashboard' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-blue">85%</div>
                          <div className="text-xs text-gray-400">Skill Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-green">Level 7</div>
                          <div className="text-xs text-gray-400">Current Level</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent-purple">23</div>
                          <div className="text-xs text-gray-400">Quests Done</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-400">1,250</div>
                          <div className="text-xs text-gray-400">Total XP</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature.demo === 'collaboration-demo' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-accent-blue rounded-full flex items-center justify-center text-xs">A</div>
                          <span className="text-gray-300 text-sm">Alex is editing the header component</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center text-xs">S</div>
                          <span className="text-gray-300 text-sm">Sarah is working on the CSS styles</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-accent-purple rounded-full flex items-center justify-center text-xs">M</div>
                          <span className="text-gray-300 text-sm">Mike is reviewing the code</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentFeature.demo === 'marketplace-preview' && (
                    <div className="bg-primary-900 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Profile Views</span>
                          <span className="text-accent-blue font-bold">127</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Skill Verifications</span>
                          <span className="text-accent-green font-bold">15</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Employer Matches</span>
                          <span className="text-accent-purple font-bold">8</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <a href="/demo">
                    <Button className="px-8">
                      Try This Feature
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-blue rounded-full animate-ping opacity-75"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-green rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">All Features at a Glance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={feature.id} 
                hover 
                className={`p-6 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="text-accent-green">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>

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
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
