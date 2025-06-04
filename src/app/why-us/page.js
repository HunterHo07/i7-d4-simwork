'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function WhyUsPage() {
  const [activeComparison, setActiveComparison] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef(null);

  const competitors = [
    {
      name: "HackerRank",
      logo: "🏆",
      strengths: ["Large user base", "Established brand", "Coding challenges"],
      weaknesses: ["Static tests", "No immersive environment", "Limited to coding only"],
      ourAdvantage: "We provide immersive 2.5D simulation with real work environments"
    },
    {
      name: "Codility",
      logo: "🔒",
      strengths: ["Anti-cheating tech", "Detailed analytics", "Enterprise focus"],
      weaknesses: ["Traditional format", "No gamification", "Single-skill focus"],
      ourAdvantage: "Multi-role support with gamified, engaging experiences"
    },
    {
      name: "TestGorilla",
      logo: "🧪",
      strengths: ["Multi-skill testing", "User-friendly", "Growing market"],
      weaknesses: ["No simulation", "Limited real-world scenarios", "Static assessments"],
      ourAdvantage: "Real work simulation with actual tools and environments"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Co-founder",
      avatar: "👨‍💼",
      background: "Former VP Engineering at TechCorp, 10+ years in EdTech",
      expertise: ["Product Strategy", "Team Leadership", "EdTech Innovation"]
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-founder",
      avatar: "👩‍💻",
      background: "Ex-Google Senior Engineer, AI/ML specialist",
      expertise: ["System Architecture", "AI/ML", "Scalable Platforms"]
    },
    {
      name: "Mike Johnson",
      role: "Head of Design",
      avatar: "👨‍🎨",
      background: "Former Design Lead at Meta, UX/UI expert",
      expertise: ["User Experience", "3D Design", "Interactive Systems"]
    },
    {
      name: "Dr. Lisa Wang",
      role: "Head of Research",
      avatar: "👩‍🔬",
      background: "PhD in Educational Psychology, Assessment expert",
      expertise: ["Learning Science", "Assessment Design", "User Research"]
    }
  ];

  const achievements = [
    { metric: "15+", label: "Years Combined Experience", icon: "⏰" },
    { metric: "3", label: "Successful Exits", icon: "🚀" },
    { metric: "50M+", label: "Users Impacted", icon: "👥" },
    { metric: "5", label: "Patents Filed", icon: "💡" }
  ];

  const differentiators = [
    {
      title: "Immersive 2.5D Environment",
      description: "First platform to combine realistic work simulation with engaging gameplay",
      icon: "🌐",
      details: [
        "Navigate through virtual office spaces",
        "Interact with realistic work stations",
        "Experience actual job environments",
        "Seamless desktop and mobile experience"
      ]
    },
    {
      title: "Real Tools Integration",
      description: "Actual professional tools embedded within the simulation",
      icon: "🛠️",
      details: [
        "Monaco Editor for coding tasks",
        "Fabric.js for design challenges",
        "Real project management interfaces",
        "Industry-standard software simulation"
      ]
    },
    {
      title: "AI-Powered Adaptation",
      description: "Intelligent quest generation that adapts to user skill level",
      icon: "🤖",
      details: [
        "Personalized difficulty progression",
        "Dynamic task generation",
        "Real-time performance analysis",
        "Adaptive learning pathways"
      ]
    },
    {
      title: "Multi-Role Coverage",
      description: "Comprehensive assessment across all major tech roles",
      icon: "🎯",
      details: [
        "Developer challenges and coding",
        "Design tasks and creativity",
        "Project management scenarios",
        "Data analysis and AI engineering"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                SimWork?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just another assessment platform. We're revolutionizing how skills are demonstrated, 
              evaluated, and discovered through immersive work simulation.
            </p>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Unique Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <Card key={index} hover className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="text-accent-green">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">How We Compare</h2>
            
            {/* Competitor Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4 bg-primary-800 rounded-lg p-2">
                {competitors.map((competitor, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveComparison(index)}
                    className={`px-6 py-3 rounded-lg transition-all ${
                      activeComparison === index
                        ? 'bg-accent-blue text-primary-900'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{competitor.logo}</span>
                    {competitor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Content */}
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-2">✅</span>
                    Their Strengths
                  </h3>
                  <ul className="space-y-2">
                    {competitors[activeComparison].strengths.map((strength, index) => (
                      <li key={index} className="text-gray-300 flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-2">❌</span>
                    Their Limitations
                  </h3>
                  <ul className="space-y-2">
                    {competitors[activeComparison].weaknesses.map((weakness, index) => (
                      <li key={index} className="text-gray-300 flex items-center space-x-2">
                        <span className="text-red-400">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-2">🚀</span>
                    Our Advantage
                  </h3>
                  <div className="p-4 bg-accent-blue/10 border border-accent-blue/30 rounded-lg">
                    <p className="text-accent-blue font-medium">
                      {competitors[activeComparison].ourAdvantage}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} hover className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-accent-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.background}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-700 text-xs rounded-md text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Our Track Record</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-8 text-center">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className={`text-4xl font-bold text-accent-blue mb-2 transition-all duration-1000 ${
                    visibleStats ? 'opacity-100 transform-none' : 'opacity-0 transform scale-50'
                  }`}>
                    {achievement.metric}
                  </div>
                  <p className="text-gray-300">{achievement.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Built with Cutting-Edge Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Frontend Excellence</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-blue">⚛️</span>
                    <span className="text-gray-300">Next.js 15 with App Router</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-green">🎨</span>
                    <span className="text-gray-300">Tailwind CSS v3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-purple">✨</span>
                    <span className="text-gray-300">GSAP Animations</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">3D & Simulation</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-blue">🌐</span>
                    <span className="text-gray-300">Three.js for 3D graphics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-green">🎮</span>
                    <span className="text-gray-300">Phaser 3 for 2D simulation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-purple">🔧</span>
                    <span className="text-gray-300">Monaco Editor integration</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">AI & Backend</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-blue">🤖</span>
                    <span className="text-gray-300">AI-powered quest generation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-green">📊</span>
                    <span className="text-gray-300">Real-time analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-accent-purple">🔒</span>
                    <span className="text-gray-300">Secure assessment engine</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of skill assessment and talent discovery. See why leading companies choose SimWork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="px-12">
                Try Live Demo
              </Button>
              <Button variant="outline" size="xl" className="px-12">
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
