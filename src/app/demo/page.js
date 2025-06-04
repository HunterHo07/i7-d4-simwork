'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { WORK_STATIONS } from '@/lib/constants';

export default function DemoPage() {
  const [selectedStation, setSelectedStation] = useState('developer');
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [userProgress, setUserProgress] = useState({ xp: 0, level: 1, completedTasks: 0 });
  const canvasRef = useRef(null);

  // Simulated office map data
  const officeMap = {
    width: 800,
    height: 600,
    stations: [
      { id: 'developer', x: 150, y: 200, name: 'Dev Desk' },
      { id: 'designer', x: 350, y: 150, name: 'Design Bay' },
      { id: 'pm', x: 550, y: 200, name: 'PM Room' },
      { id: 'data', x: 250, y: 350, name: 'Data Station' },
      { id: 'ai', x: 450, y: 350, name: 'AI Lab' },
    ]
  };

  // Sample tasks for each station
  const stationTasks = {
    developer: [
      { id: 1, title: 'Fix Login Bug', description: 'Debug authentication issue', xp: 50, difficulty: 'Easy' },
      { id: 2, title: 'Implement API Endpoint', description: 'Create user profile API', xp: 100, difficulty: 'Medium' },
      { id: 3, title: 'Optimize Database Query', description: 'Improve query performance', xp: 150, difficulty: 'Hard' },
    ],
    designer: [
      { id: 4, title: 'Create Landing Page', description: 'Design hero section mockup', xp: 75, difficulty: 'Easy' },
      { id: 5, title: 'Design Mobile App UI', description: 'Create responsive interface', xp: 125, difficulty: 'Medium' },
      { id: 6, title: 'Brand Identity System', description: 'Complete brand guidelines', xp: 200, difficulty: 'Hard' },
    ],
    pm: [
      { id: 7, title: 'Sprint Planning', description: 'Organize next sprint tasks', xp: 60, difficulty: 'Easy' },
      { id: 8, title: 'Stakeholder Meeting', description: 'Present project roadmap', xp: 90, difficulty: 'Medium' },
      { id: 9, title: 'Risk Assessment', description: 'Identify project risks', xp: 120, difficulty: 'Hard' },
    ],
    data: [
      { id: 10, title: 'Data Validation', description: 'Validate customer data', xp: 40, difficulty: 'Easy' },
      { id: 11, title: 'Report Generation', description: 'Create monthly analytics', xp: 80, difficulty: 'Medium' },
      { id: 12, title: 'Data Pipeline Setup', description: 'Configure ETL process', xp: 160, difficulty: 'Hard' },
    ],
    ai: [
      { id: 13, title: 'Prompt Engineering', description: 'Optimize AI prompts', xp: 70, difficulty: 'Easy' },
      { id: 14, title: 'Model Fine-tuning', description: 'Improve model accuracy', xp: 140, difficulty: 'Medium' },
      { id: 15, title: 'AI Ethics Review', description: 'Assess bias and fairness', xp: 180, difficulty: 'Hard' },
    ],
  };

  // Initialize 2D office map
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = officeMap.width;
    canvas.height = officeMap.height;

    // Draw office background
    ctx.fillStyle = '#1A1F3A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid pattern
    ctx.strokeStyle = '#2A2D3A';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Draw stations
    officeMap.stations.forEach(station => {
      const isSelected = station.id === selectedStation;
      
      // Station circle
      ctx.beginPath();
      ctx.arc(station.x, station.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = isSelected ? '#00D4FF' : '#3A3F4A';
      ctx.fill();
      ctx.strokeStyle = isSelected ? '#39FF14' : '#00D4FF';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Station label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(station.name, station.x, station.y - 40);

      // Pulsing effect for selected station
      if (isSelected) {
        ctx.beginPath();
        ctx.arc(station.x, station.y, 35, 0, 2 * Math.PI);
        ctx.strokeStyle = '#00D4FF';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    });

    // Draw user avatar
    const selectedStationData = officeMap.stations.find(s => s.id === selectedStation);
    if (selectedStationData) {
      ctx.beginPath();
      ctx.arc(selectedStationData.x, selectedStationData.y, 8, 0, 2 * Math.PI);
      ctx.fillStyle = '#39FF14';
      ctx.fill();
    }
  }, [selectedStation]);

  const startTask = (task) => {
    setCurrentTask(task);
    setIsSimulationActive(true);
  };

  const completeTask = () => {
    if (currentTask) {
      setUserProgress(prev => ({
        xp: prev.xp + currentTask.xp,
        level: Math.floor((prev.xp + currentTask.xp) / 100) + 1,
        completedTasks: prev.completedTasks + 1
      }));
      setCurrentTask(null);
      setIsSimulationActive(false);
    }
  };

  const currentStationData = WORK_STATIONS[selectedStation];
  const currentTasks = stationTasks[selectedStation] || [];

  return (
    <div className="min-h-screen bg-primary-900">
      <Header />
      
      <main className="pt-16">
        {/* Demo Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                Live Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of work simulation. Navigate the 2.5D office, complete real tasks, and earn XP.
            </p>
          </div>
        </section>

        {/* User Progress */}
        <section className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-7xl mx-auto">
            <Card className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-blue">{userProgress.level}</div>
                    <div className="text-sm text-gray-400">Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-green">{userProgress.xp}</div>
                    <div className="text-sm text-gray-400">XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-purple">{userProgress.completedTasks}</div>
                    <div className="text-sm text-gray-400">Tasks</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Live Demo Active</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Main Demo Area */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Office Map */}
              <Card className="p-6">
                <Card.Header>
                  <Card.Title>2.5D Office Environment</Card.Title>
                  <Card.Description>Click on stations to explore different work areas</Card.Description>
                </Card.Header>
                <Card.Content>
                  <div className="relative">
                    <canvas
                      ref={canvasRef}
                      className="w-full border border-primary-600 rounded-lg cursor-pointer"
                      onClick={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        const x = (e.clientX - rect.left) * (officeMap.width / rect.width);
                        const y = (e.clientY - rect.top) * (officeMap.height / rect.height);
                        
                        // Check if click is near any station
                        officeMap.stations.forEach(station => {
                          const distance = Math.sqrt((x - station.x) ** 2 + (y - station.y) ** 2);
                          if (distance < 40) {
                            setSelectedStation(station.id);
                          }
                        });
                      }}
                    />
                    
                    {/* Station Selection Buttons */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {Object.entries(WORK_STATIONS).map(([key, station]) => (
                        <Button
                          key={key}
                          variant={selectedStation === key ? 'primary' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedStation(key)}
                        >
                          {station.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Card.Content>
              </Card>

              {/* Station Details & Tasks */}
              <Card className="p-6">
                <Card.Header>
                  <Card.Title style={{ color: currentStationData?.color }}>
                    {currentStationData?.name}
                  </Card.Title>
                  <Card.Description>{currentStationData?.description}</Card.Description>
                </Card.Header>
                <Card.Content>
                  {/* Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Available Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentStationData?.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-700 text-xs rounded-md text-gray-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Available Tasks */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300">Available Tasks:</h4>
                    {currentTasks.map(task => (
                      <div
                        key={task.id}
                        className="p-4 bg-primary-700/50 rounded-lg border border-primary-600 hover:border-accent-blue/50 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-white">{task.title}</h5>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded ${
                              task.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                              task.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {task.difficulty}
                            </span>
                            <span className="text-accent-blue font-semibold">+{task.xp} XP</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{task.description}</p>
                        <Button
                          size="sm"
                          onClick={() => startTask(task)}
                          disabled={isSimulationActive}
                        >
                          {isSimulationActive && currentTask?.id === task.id ? 'In Progress...' : 'Start Task'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card.Content>
              </Card>
            </div>
          </div>
        </section>

        {/* Task Simulation Modal */}
        {isSimulationActive && currentTask && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl">
              <Card.Header>
                <Card.Title>Task Simulation: {currentTask.title}</Card.Title>
                <Card.Description>Complete this realistic work scenario</Card.Description>
              </Card.Header>
              <Card.Content>
                <div className="space-y-6">
                  {/* Simulated Work Interface */}
                  <div className="bg-primary-900 rounded-lg p-4 border border-primary-600">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-400 ml-2">SimWork IDE</span>
                    </div>
                    
                    {selectedStation === 'developer' && (
                      <div className="font-mono text-sm">
                        <div className="text-green-400">// Debugging authentication issue</div>
                        <div className="text-white">function validateUser(token) &#123;</div>
                        <div className="text-white ml-4">if (!token) return false;</div>
                        <div className="text-white ml-4">// Fix: Add token expiry check</div>
                        <div className="text-accent-blue ml-4">return jwt.verify(token, SECRET_KEY);</div>
                        <div className="text-white">&#125;</div>
                      </div>
                    )}
                    
                    {selectedStation === 'designer' && (
                      <div className="space-y-2">
                        <div className="h-4 bg-accent-blue/20 rounded w-3/4"></div>
                        <div className="h-4 bg-accent-purple/20 rounded w-1/2"></div>
                        <div className="h-8 bg-accent-green/20 rounded w-full"></div>
                        <div className="text-sm text-gray-400">Designing landing page layout...</div>
                      </div>
                    )}
                    
                    {selectedStation === 'pm' && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-primary-700 rounded">
                          <span className="text-sm">Sprint Planning Meeting</span>
                          <span className="text-xs text-accent-blue">In Progress</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-primary-700 rounded">
                          <span className="text-sm">Stakeholder Review</span>
                          <span className="text-xs text-gray-400">Pending</span>
                        </div>
                      </div>
                    )}
                    
                    {selectedStation === 'data' && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-300">Validating customer data...</div>
                        <div className="w-full bg-primary-700 rounded-full h-2">
                          <div className="bg-accent-green h-2 rounded-full w-3/4"></div>
                        </div>
                        <div className="text-xs text-gray-400">Processing 1,247 records</div>
                      </div>
                    )}
                    
                    {selectedStation === 'ai' && (
                      <div className="space-y-2">
                        <div className="text-sm text-gray-300">Optimizing AI prompt...</div>
                        <div className="p-2 bg-primary-700 rounded text-sm">
                          <div className="text-accent-blue">Input:</div>
                          <div className="text-gray-300">"Generate a professional email"</div>
                          <div className="text-accent-green mt-2">Optimized:</div>
                          <div className="text-gray-300">"Generate a professional business email with formal tone, clear subject line, and call-to-action"</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress Simulation */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Task Progress</span>
                      <span className="text-accent-blue">85%</span>
                    </div>
                    <div className="w-full bg-primary-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-accent-blue to-accent-green h-2 rounded-full w-5/6 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <Button onClick={completeTask} className="flex-1">
                      Complete Task (+{currentTask.xp} XP)
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCurrentTask(null);
                        setIsSimulationActive(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        )}

        {/* Demo Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What You Just Experienced
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover className="p-6">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">2.5D Environment</h3>
                <p className="text-gray-400">Navigate through an immersive office space with interactive work stations</p>
              </Card>

              <Card hover className="p-6">
                <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real Work Tasks</h3>
                <p className="text-gray-400">Complete actual job scenarios with realistic tools and interfaces</p>
              </Card>

              <Card hover className="p-6">
                <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Progress</h3>
                <p className="text-gray-400">Earn XP, level up, and track your skill development in real-time</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
