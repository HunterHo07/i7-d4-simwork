'use client';

import { useEffect, useRef } from 'react';
import Card from '@/components/ui/Card';

const ProblemSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "💸",
      title: "Costly Mis-hires",
      stat: "$240K+",
      description: "Average cost of a bad hire including recruitment, training, and replacement costs"
    },
    {
      icon: "🎭",
      title: "Fake Skills",
      stat: "70%",
      description: "Of hiring managers say traditional interviews don't reflect real work capabilities"
    },
    {
      icon: "⏰",
      title: "Slow Process",
      stat: "23 days",
      description: "Average time to hire, with multiple rounds of ineffective assessments"
    },
    {
      icon: "📊",
      title: "No Real Proof",
      stat: "89%",
      description: "Of companies struggle with accurately assessing technical skills"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Hiring{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Crisis
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional hiring methods are broken. Companies waste millions on mis-hires while 
            talented candidates can't prove their real abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              hover 
              className="p-8 text-center transform transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <div className="text-3xl font-bold text-red-400 mb-2">{problem.stat}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 text-sm">{problem.description}</p>
            </Card>
          ))}
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Why Current Methods Fail</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400">❌</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Static Assessments</h4>
                  <p className="text-gray-400">Multiple choice questions and coding puzzles don't reflect real work environments</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400">❌</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Interview Theater</h4>
                  <p className="text-gray-400">Whiteboard coding and hypothetical questions miss practical skills</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400">❌</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Resume Fraud</h4>
                  <p className="text-gray-400">No way to verify actual capabilities beyond claims on paper</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400">❌</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Bias & Inconsistency</h4>
                  <p className="text-gray-400">Human bias and inconsistent evaluation criteria lead to poor decisions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Animated Chart */}
            <Card className="p-8">
              <h4 className="text-xl font-bold text-white mb-6 text-center">Hiring Success Rate</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Traditional Interviews</span>
                    <span className="text-red-400">30%</span>
                  </div>
                  <div className="w-full bg-primary-700 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full w-[30%] animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Coding Challenges</span>
                    <span className="text-yellow-400">45%</span>
                  </div>
                  <div className="w-full bg-primary-700 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full w-[45%] animate-pulse"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Work Simulation</span>
                    <span className="text-green-400">85%</span>
                  </div>
                  <div className="w-full bg-primary-700 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full w-[85%] animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-accent-blue/10 border border-accent-blue/30 rounded-lg">
                <p className="text-accent-blue text-sm text-center">
                  <strong>SimWork's approach</strong> shows 85% accuracy in predicting job performance
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProblemSection;
