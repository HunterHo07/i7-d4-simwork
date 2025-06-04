'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [votedFeatures, setVotedFeatures] = useState(new Set());

  const roadmapPhases = [
    {
      id: 1,
      title: "Phase 1: MVP Foundation",
      subtitle: "Q1 2024 - COMPLETED ✅",
      status: "completed",
      progress: 100,
      features: [
        { name: "2.5D Office Environment", status: "completed", votes: 245 },
        { name: "5 Core Work Stations", status: "completed", votes: 198 },
        { name: "Basic Quest System", status: "completed", votes: 167 },
        { name: "User Profiles & XP", status: "completed", votes: 134 },
        { name: "Monaco Editor Integration", status: "completed", votes: 156 }
      ],
      description: "Core platform with immersive office simulation and basic functionality"
    },
    {
      id: 2,
      title: "Phase 2: Enhanced Experience",
      subtitle: "Q2 2024 - IN PROGRESS 🚧",
      status: "in-progress",
      progress: 75,
      features: [
        { name: "Advanced AI Quest Generation", status: "completed", votes: 289 },
        { name: "Multiplayer Collaboration", status: "in-progress", votes: 234 },
        { name: "Mobile App (iOS/Android)", status: "in-progress", votes: 312 },
        { name: "Advanced Analytics Dashboard", status: "planned", votes: 178 },
        { name: "Custom Workspace Branding", status: "planned", votes: 145 }
      ],
      description: "Enhanced user experience with mobile support and collaboration features"
    },
    {
      id: 3,
      title: "Phase 3: Enterprise Features",
      subtitle: "Q3 2024 - PLANNED 📋",
      status: "planned",
      progress: 25,
      features: [
        { name: "Enterprise SSO Integration", status: "planned", votes: 198 },
        { name: "Custom Assessment Builder", status: "planned", votes: 267 },
        { name: "Advanced Reporting Suite", status: "planned", votes: 156 },
        { name: "API Access & Webhooks", status: "planned", votes: 189 },
        { name: "White-label Solutions", status: "planned", votes: 134 }
      ],
      description: "Enterprise-grade features for large organizations and custom implementations"
    },
    {
      id: 4,
      title: "Phase 4: VR/AR Integration",
      subtitle: "Q4 2024 - FUTURE 🔮",
      status: "future",
      progress: 0,
      features: [
        { name: "VR Office Environment", status: "future", votes: 345 },
        { name: "AR Mobile Overlays", status: "future", votes: 278 },
        { name: "Haptic Feedback Support", status: "future", votes: 167 },
        { name: "3D Spatial Audio", status: "future", votes: 145 },
        { name: "Virtual Reality Collaboration", status: "future", votes: 234 }
      ],
      description: "Next-generation immersive experiences with VR and AR technologies"
    }
  ];

  const upcomingFeatures = [
    {
      name: "AI-Powered Code Review",
      description: "Intelligent code analysis and feedback during coding challenges",
      votes: 456,
      category: "AI/ML",
      eta: "Q2 2024"
    },
    {
      name: "Real-time Pair Programming",
      description: "Collaborative coding sessions with other users",
      votes: 389,
      category: "Collaboration",
      eta: "Q3 2024"
    },
    {
      name: "Industry Certifications",
      description: "Official certifications based on completed quest trees",
      votes: 367,
      category: "Credentials",
      eta: "Q3 2024"
    },
    {
      name: "Company Challenges",
      description: "Real company projects as assessment challenges",
      votes: 334,
      category: "Enterprise",
      eta: "Q4 2024"
    }
  ];

  const handleVote = (featureName) => {
    setVotedFeatures(prev => {
      const newSet = new Set(prev);
      if (newSet.has(featureName)) {
        newSet.delete(featureName);
      } else {
        newSet.add(featureName);
      }
      return newSet;
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-yellow-400';
      case 'planned': return 'text-blue-400';
      case 'future': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🚧';
      case 'planned': return '📋';
      case 'future': return '🔮';
      default: return '⏳';
    }
  };

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Product{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              See what we're building next and help shape the future of SimWork. 
              Vote on features that matter most to you.
            </p>
          </div>
        </section>

        {/* Phase Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Development Timeline</h2>
            
            {/* Phase Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {roadmapPhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(index)}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    selectedPhase === index
                      ? 'border-accent-blue bg-accent-blue/10 text-accent-blue'
                      : 'border-primary-600 text-gray-300 hover:border-primary-500'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{getStatusIcon(phase.status)}</span>
                    <span className="font-medium">Phase {phase.id}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Phase Details */}
            <Card className="p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {roadmapPhases[selectedPhase].title}
                    </h3>
                    <p className={`text-lg ${getStatusColor(roadmapPhases[selectedPhase].status)}`}>
                      {roadmapPhases[selectedPhase].subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent-blue">
                      {roadmapPhases[selectedPhase].progress}%
                    </div>
                    <div className="text-sm text-gray-400">Complete</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-primary-700 rounded-full h-3 mb-4">
                  <div
                    className="bg-gradient-to-r from-accent-blue to-accent-green h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${roadmapPhases[selectedPhase].progress}%` }}
                  ></div>
                </div>
                
                <p className="text-gray-300">{roadmapPhases[selectedPhase].description}</p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roadmapPhases[selectedPhase].features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 bg-primary-700/50 rounded-lg border border-primary-600 hover:border-accent-blue/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span>{getStatusIcon(feature.status)}</span>
                        <h4 className="font-semibold text-white">{feature.name}</h4>
                      </div>
                      <button
                        onClick={() => handleVote(feature.name)}
                        className={`flex items-center space-x-1 px-2 py-1 rounded text-sm transition-colors ${
                          votedFeatures.has(feature.name)
                            ? 'bg-accent-blue text-primary-900'
                            : 'bg-primary-600 text-gray-300 hover:bg-primary-500'
                        }`}
                      >
                        <span>👍</span>
                        <span>{feature.votes + (votedFeatures.has(feature.name) ? 1 : 0)}</span>
                      </button>
                    </div>
                    <div className={`text-sm ${getStatusColor(feature.status)}`}>
                      {feature.status.charAt(0).toUpperCase() + feature.status.slice(1).replace('-', ' ')}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Community Voting */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Community Requested Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingFeatures.map((feature, index) => (
                <Card key={index} hover className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="px-2 py-1 bg-accent-purple/20 text-accent-purple rounded">
                          {feature.category}
                        </span>
                        <span className="text-gray-400">ETA: {feature.eta}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleVote(feature.name)}
                      className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                        votedFeatures.has(feature.name)
                          ? 'bg-accent-blue text-primary-900'
                          : 'bg-primary-700 text-gray-300 hover:bg-primary-600'
                      }`}
                    >
                      <span className="text-lg">👍</span>
                      <span className="text-sm font-bold">
                        {feature.votes + (votedFeatures.has(feature.name) ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Release Notes */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Latest Updates</h2>
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 text-xl">🎉</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">v1.2.0 - Enhanced AI Quest System</h3>
                      <span className="text-sm text-gray-400">March 15, 2024</span>
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Improved AI quest generation with better difficulty scaling</li>
                      <li>• Added new coding challenges for Python and JavaScript</li>
                      <li>• Enhanced user profile with skill tracking</li>
                      <li>• Bug fixes and performance improvements</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-400 text-xl">🚀</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">v1.1.0 - Mobile Optimization</h3>
                      <span className="text-sm text-gray-400">February 28, 2024</span>
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Responsive design improvements for mobile devices</li>
                      <li>• Touch-friendly interface for 2.5D navigation</li>
                      <li>• Optimized performance for lower-end devices</li>
                      <li>• Added offline mode for basic functionality</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-400 text-xl">✨</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">v1.0.0 - MVP Launch</h3>
                      <span className="text-sm text-gray-400">January 15, 2024</span>
                    </div>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Initial release with 2.5D office environment</li>
                      <li>• 5 core work stations (Dev, Design, PM, Data, AI)</li>
                      <li>• Basic quest system and user progression</li>
                      <li>• User authentication and profile management</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Shape Our Future</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have ideas for new features? Want to influence our roadmap? 
              Join our community and help us build the future of work simulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="px-12">
                Join Community
              </Button>
              <Button variant="outline" size="xl" className="px-12">
                Submit Feature Request
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
