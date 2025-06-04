'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { userUtils } from '@/lib/utils';

export default function SignUpPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    experience: '',
    interests: [],
    goals: []
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const roles = [
    { id: 'developer', name: 'Developer', icon: '💻', description: 'Build and code applications' },
    { id: 'designer', name: 'Designer', icon: '🎨', description: 'Create visual experiences' },
    { id: 'pm', name: 'Project Manager', icon: '📋', description: 'Lead and coordinate teams' },
    { id: 'data', name: 'Data Analyst', icon: '📊', description: 'Analyze and process data' },
    { id: 'ai', name: 'AI Engineer', icon: '🤖', description: 'Work with AI and ML' },
  ];

  const experienceLevels = [
    { id: 'beginner', name: 'Beginner', description: '0-1 years' },
    { id: 'intermediate', name: 'Intermediate', description: '2-4 years' },
    { id: 'advanced', name: 'Advanced', description: '5+ years' },
  ];

  const interestOptions = [
    'Frontend Development', 'Backend Development', 'Mobile Apps', 'Web Design',
    'UX/UI Design', 'Data Science', 'Machine Learning', 'Project Management',
    'DevOps', 'Cybersecurity', 'Game Development', 'Blockchain'
  ];

  const goalOptions = [
    'Find a new job', 'Improve skills', 'Build portfolio', 'Network with professionals',
    'Learn new technologies', 'Get certified', 'Start freelancing', 'Change career'
  ];

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    if (stepNumber === 2) {
      if (!formData.role) newErrors.role = 'Please select a role';
      if (!formData.experience) newErrors.experience = 'Please select experience level';
    }

    if (stepNumber === 3) {
      if (formData.interests.length === 0) newErrors.interests = 'Please select at least one interest';
      if (formData.goals.length === 0) newErrors.goals = 'Please select at least one goal';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Create user account
    const user = userUtils.create({
      name: formData.name,
      email: formData.email,
      role: formData.role,
      experience: formData.experience,
      interests: formData.interests,
      goals: formData.goals,
    });

    setIsLoading(false);
    
    // Redirect to demo or dashboard
    router.push('/demo?welcome=true');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const toggleArrayField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      stepNumber <= step
                        ? 'bg-accent-blue border-accent-blue text-primary-900'
                        : 'border-primary-600 text-gray-400'
                    }`}
                  >
                    {stepNumber < step ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Account</span>
                <span>Profile</span>
                <span>Preferences</span>
              </div>
            </div>

            <Card className="p-8">
              {/* Step 1: Account Information */}
              {step === 1 && (
                <div>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-400">Join SimWork and start your journey</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Create a password"
                      />
                      {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="w-full px-4 py-3 bg-primary-800 border border-primary-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
                    </div>

                    <Button onClick={handleNext} className="w-full">
                      Continue
                    </Button>

                    <p className="text-center text-sm text-gray-400">
                      Already have an account?{' '}
                      <Link href="/signin" className="text-accent-blue hover:text-accent-green transition-colors">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              )}

              {/* Step 2: Role & Experience */}
              {step === 2 && (
                <div>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Tell Us About You</h1>
                    <p className="text-gray-400">Help us personalize your experience</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        What's your primary role?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {roles.map((role) => (
                          <button
                            key={role.id}
                            onClick={() => handleInputChange('role', role.id)}
                            className={`p-4 rounded-lg border-2 text-left transition-all ${
                              formData.role === role.id
                                ? 'border-accent-blue bg-accent-blue/10'
                                : 'border-primary-600 hover:border-primary-500'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{role.icon}</span>
                              <div>
                                <div className="font-semibold text-white">{role.name}</div>
                                <div className="text-sm text-gray-400">{role.description}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.role && <p className="mt-2 text-sm text-red-400">{errors.role}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Experience Level
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {experienceLevels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => handleInputChange('experience', level.id)}
                            className={`p-3 rounded-lg border-2 text-left transition-all ${
                              formData.experience === level.id
                                ? 'border-accent-blue bg-accent-blue/10'
                                : 'border-primary-600 hover:border-primary-500'
                            }`}
                          >
                            <div className="font-semibold text-white">{level.name}</div>
                            <div className="text-sm text-gray-400">{level.description}</div>
                          </button>
                        ))}
                      </div>
                      {errors.experience && <p className="mt-2 text-sm text-red-400">{errors.experience}</p>}
                    </div>

                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleNext} className="flex-1">
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Interests & Goals */}
              {step === 3 && (
                <div>
                  <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Customize Your Journey</h1>
                    <p className="text-gray-400">Select your interests and goals</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        What interests you? (Select multiple)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {interestOptions.map((interest) => (
                          <button
                            key={interest}
                            onClick={() => toggleArrayField('interests', interest)}
                            className={`p-3 rounded-lg border text-sm transition-all ${
                              formData.interests.includes(interest)
                                ? 'border-accent-blue bg-accent-blue/10 text-accent-blue'
                                : 'border-primary-600 text-gray-300 hover:border-primary-500'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                      {errors.interests && <p className="mt-2 text-sm text-red-400">{errors.interests}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        What are your goals? (Select multiple)
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {goalOptions.map((goal) => (
                          <button
                            key={goal}
                            onClick={() => toggleArrayField('goals', goal)}
                            className={`p-3 rounded-lg border text-sm text-left transition-all ${
                              formData.goals.includes(goal)
                                ? 'border-accent-green bg-accent-green/10 text-accent-green'
                                : 'border-primary-600 text-gray-300 hover:border-primary-500'
                            }`}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                      {errors.goals && <p className="mt-2 text-sm text-red-400">{errors.goals}</p>}
                    </div>

                    <div className="flex space-x-4">
                      <Button variant="outline" onClick={handleBack} className="flex-1">
                        Back
                      </Button>
                      <Button 
                        onClick={handleSubmit} 
                        loading={isLoading}
                        className="flex-1"
                      >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
