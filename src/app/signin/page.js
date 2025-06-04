'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { userUtils } from '@/lib/utils';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Demo accounts for testing
  const demoAccounts = [
    { email: 'demo@developer.com', password: 'demo123', role: 'Developer', name: 'Alex Chen' },
    { email: 'demo@designer.com', password: 'demo123', role: 'Designer', name: 'Sarah Kim' },
    { email: 'demo@pm.com', password: 'demo123', role: 'Project Manager', name: 'Mike Johnson' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check demo accounts
    const demoAccount = demoAccounts.find(
      account => account.email === formData.email && account.password === formData.password
    );

    if (demoAccount) {
      // Create/update user session
      const user = userUtils.create({
        name: demoAccount.name,
        email: demoAccount.email,
        role: demoAccount.role.toLowerCase(),
        xp: Math.floor(Math.random() * 500) + 100,
        level: Math.floor(Math.random() * 5) + 1,
        completedQuests: Math.floor(Math.random() * 20) + 5,
      });

      setIsLoading(false);
      router.push('/demo?signin=true');
    } else {
      setIsLoading(false);
      setErrors({ general: 'Invalid email or password. Try one of the demo accounts below.' });
    }
  };

  const handleDemoLogin = async (account) => {
    setIsLoading(true);
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = userUtils.create({
      name: account.name,
      email: account.email,
      role: account.role.toLowerCase(),
      xp: Math.floor(Math.random() * 500) + 100,
      level: Math.floor(Math.random() * 5) + 1,
      completedQuests: Math.floor(Math.random() * 20) + 5,
    });

    setIsLoading(false);
    router.push('/demo?signin=true');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <Card className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400">Sign in to continue your SimWork journey</p>
              </div>

              {errors.general && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">{errors.general}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Enter your password"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                      className="w-4 h-4 text-accent-blue bg-primary-800 border-primary-600 rounded focus:ring-accent-blue focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-300">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-accent-blue hover:text-accent-green transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <Button type="submit" loading={isLoading} className="w-full">
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-primary-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-primary-800 text-gray-400">Or try a demo account</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {demoAccounts.map((account, index) => (
                    <button
                      key={index}
                      onClick={() => handleDemoLogin(account)}
                      disabled={isLoading}
                      className="w-full p-3 bg-primary-700 hover:bg-primary-600 border border-primary-600 rounded-lg text-left transition-colors disabled:opacity-50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-white">{account.name}</div>
                          <div className="text-sm text-gray-400">{account.role}</div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {account.email}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <Link href="/signup" className="text-accent-blue hover:text-accent-green transition-colors">
                  Sign up for free
                </Link>
              </p>
            </Card>

            {/* Social Login Options */}
            <Card className="mt-6 p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Quick Demo Access</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleDemoLogin(demoAccounts[0])}
                  disabled={isLoading}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>💻</span>
                  <span>Developer</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDemoLogin(demoAccounts[1])}
                  disabled={isLoading}
                  className="flex items-center justify-center space-x-2"
                >
                  <span>🎨</span>
                  <span>Designer</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
