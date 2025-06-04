'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/ui/Card';
import testimonials from '@/data/testimonials.json';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial(prev => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, featuredTestimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with SimWork
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-16">
          <Card className="p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-6">
                {featuredTestimonials[currentTestimonial]?.avatar}
              </div>
              
              <div className="flex justify-center mb-6">
                {renderStars(featuredTestimonials[currentTestimonial]?.rating)}
              </div>

              <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed">
                "{featuredTestimonials[currentTestimonial]?.text}"
              </blockquote>

              <div className="border-t border-primary-600 pt-6">
                <div className="font-semibold text-white text-lg">
                  {featuredTestimonials[currentTestimonial]?.name}
                </div>
                <div className="text-accent-blue">
                  {featuredTestimonials[currentTestimonial]?.role}
                </div>
                <div className="text-gray-400">
                  {featuredTestimonials[currentTestimonial]?.company}
                </div>
              </div>
            </div>
          </Card>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setCurrentTestimonial(prev => 
                prev === 0 ? featuredTestimonials.length - 1 : prev - 1
              )}
              className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ←
            </button>
            
            <div className="flex space-x-2 items-center">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-accent-blue scale-125'
                      : 'bg-primary-600 hover:bg-primary-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial(prev => 
                (prev + 1) % featuredTestimonials.length
              )}
              className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              →
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
            >
              {isAutoPlay ? '⏸️ Pause' : '▶️ Auto-play'}
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial) => (
            <Card key={testimonial.id} hover className="p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-accent-blue text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-xs">{testimonial.company}</div>
                </div>
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent-blue mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent-green mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent-purple mb-2">500+</div>
            <div className="text-gray-400">Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-gray-400">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
