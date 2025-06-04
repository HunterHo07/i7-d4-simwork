'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { PRICING_PLANS } from '@/lib/constants';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      ...PRICING_PLANS.free,
      cta: 'Get Started Free',
      href: '/signup',
      highlight: false
    },
    {
      ...PRICING_PLANS.pro,
      price: billingCycle === 'monthly' ? 199 : 159,
      originalPrice: billingCycle === 'monthly' ? null : 199,
      cta: 'Start Pro Trial',
      href: '/signup?plan=pro',
      highlight: true
    },
    {
      ...PRICING_PLANS.enterprise,
      price: billingCycle === 'monthly' ? 599 : 479,
      originalPrice: billingCycle === 'monthly' ? null : 599,
      cta: 'Contact Sales',
      href: '/contact',
      highlight: false
    }
  ];

  const faqs = [
    {
      question: "Can I switch plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, we offer a 14-day free trial for both Pro and Enterprise plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise customers."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your access continues until the end of your billing period."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Simple{' '}
            <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-accent-blue transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-2 py-1 bg-accent-green/20 text-accent-green text-sm rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.highlight
                  ? 'border-2 border-accent-blue bg-accent-blue/5 scale-105'
                  : 'border border-primary-600'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent-blue text-primary-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {plan.originalPrice && (
                    <div className="text-gray-400 line-through text-lg">
                      ${plan.originalPrice}/{plan.period}
                    </div>
                  )}
                </div>

                <a href={plan.href}>
                  <Button
                    variant={plan.highlight ? 'primary' : 'outline'}
                    className="w-full mb-8"
                  >
                    {plan.cta}
                  </Button>
                </a>

                <div className="space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-accent-green text-lg">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations && (
                  <div className="mt-6 pt-6 border-t border-primary-600">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Limitations:</h4>
                    <div className="space-y-2 text-left">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <span className="text-gray-500 text-lg">•</span>
                          <span className="text-gray-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Feature Comparison</h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary-600">
                    <th className="text-left p-6 text-white font-semibold">Features</th>
                    <th className="text-center p-6 text-white font-semibold">Free</th>
                    <th className="text-center p-6 text-white font-semibold">Pro</th>
                    <th className="text-center p-6 text-white font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-700">
                    <td className="p-6 text-gray-300">2.5D Office Access</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                  </tr>
                  <tr className="border-b border-primary-700">
                    <td className="p-6 text-gray-300">Basic Quests</td>
                    <td className="p-6 text-center text-accent-green">5/day</td>
                    <td className="p-6 text-center text-accent-green">Unlimited</td>
                    <td className="p-6 text-center text-accent-green">Unlimited</td>
                  </tr>
                  <tr className="border-b border-primary-700">
                    <td className="p-6 text-gray-300">Advanced Analytics</td>
                    <td className="p-6 text-center text-gray-500">✗</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                  </tr>
                  <tr className="border-b border-primary-700">
                    <td className="p-6 text-gray-300">Custom Branding</td>
                    <td className="p-6 text-center text-gray-500">✗</td>
                    <td className="p-6 text-center text-gray-500">✗</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                  </tr>
                  <tr className="border-b border-primary-700">
                    <td className="p-6 text-gray-300">API Access</td>
                    <td className="p-6 text-center text-gray-500">✗</td>
                    <td className="p-6 text-center text-gray-500">✗</td>
                    <td className="p-6 text-center text-accent-green">✓</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-gray-300">Support</td>
                    <td className="p-6 text-center text-gray-300">Community</td>
                    <td className="p-6 text-center text-gray-300">Priority</td>
                    <td className="p-6 text-center text-gray-300">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-400">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals already using SimWork to showcase their skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup">
              <Button size="xl" className="px-12">
                Start Free Trial
              </Button>
            </a>
            <a href="/demo">
              <Button variant="outline" size="xl" className="px-12">
                Try Demo First
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
