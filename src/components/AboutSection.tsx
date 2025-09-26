import { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Palette, 
  Target, 
  BookOpen, 
  Award,
  Calendar,
  MapPin 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import workspaceImg from '@/assets/workspace.jpg';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('professional');

  const tabs = [
    { id: 'professional', label: 'Professional', icon: Code2 },
    { id: 'creative', label: 'Creative', icon: Palette },
    // { id: 'personal', label: 'Personal', icon: Target }
  ];

  const techStack = [
    'Python', 'LangChain', 'FastAPI', 'React', 'TypeScript',
    'SQL', 'PostgreSQL', 'MySQL', 'React Native', 'Git'
  ];
  const experiences = [
    {
      title: 'Jr. Data Engineer',
      company: 'Betamonks Technology Factory',
      period: 'Feb 2025 – Present',
      location: 'Chennai, India',
      description: 'Designed real-time data platforms and APIs (FastAPI, SQL, LangChain) to deliver business-critical KPIs through interactive dashboards. Applied domain-driven design to build scalable LLM-powered tools and automated workflows.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Betamonks Technology Factory',
      period: 'Sep 2024 – Feb 2025',
      location: 'Chennai, India',
      description: 'Built React Native mobile features and improved modularity, cutting code redundancy by 35%. Enhanced cross-platform UI/UX and contributed to scalable app development.'
    },
    {
      title: 'Product Solutions Intern',
      company: 'TVS Electronics Ltd.',
      period: 'May 2023 – Apr 2024',
      location: 'Bangalore, India',
      description: 'Enhanced Android payment apps with 20% faster UI responsiveness and improved stability. Collaborated in Agile sprints across 3 live products and resolved 100+ issues to boost customer experience.'
    }
  ];
  

  // const experiences = [
  //   {
  //     title: 'Jr. Data Engineer',
  //     company: 'Betamonks Technology Factory',
  //     period: 'Feb 2025 – Present',
  //     location: 'Chennai, India',
  //     description: 'Building LLM-powered tools, dashboards, and APIs using LangChain, FastAPI, and React.'
  //   },
  //   {
  //     title: 'Software Engineer Intern',
  //     company: 'Betamonks Technology Factory',
  //     period: 'Sep 2024 – Feb 2025',
  //     location: 'Chennai, India',
  //     description: 'Worked on React Native app development and UI/UX improvements.'
  //   },
  //   {
  //     title: 'Product Solutions Intern',
  //     company: 'TVS Electronics Ltd.',
  //     period: 'May 2023 – Apr 2024',
  //     location: 'Bangalore, India',
  //     description: 'Contributed to Android app development, testing, and UI responsiveness in agile teams.'
  //   }
  // ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging creativity, code, and business thinking with a human-centered approach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-up">
            <div className="relative">
              <img 
                src={workspaceImg} 
                alt="Workspace" 
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-primary p-6 rounded-2xl shadow-xl">
                <div className="text-center text-primary-foreground">
                  <div className="text-3xl font-bold">1+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Brain, label: 'LLM Projects', value: '5+' },
                { icon: Award, label: 'Internships & Training', value: '3' }
              ].map(({ icon: Icon, label, value }) => (
                <Card key={label} className="text-center card-hover">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{value}</div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal-up">
            {/* Tabs */}
            <div className="flex space-x-1 mb-8 bg-surface-elevated rounded-full p-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === id 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
              {activeTab === 'professional' && (
                <div className="space-y-8 animate-fade-in-up">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">Professional Journey</h3>
                    <p className="text-muted-foreground mb-6">
                      I’ve worked across data engineering, app development, and product-focused roles,
                      gaining hands-on experience with AI, backend APIs, and front-end development. 
                      I'm now focused on building smart tools that merge technology and strategy.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary/20 pl-6 pb-6">
                        <div className="bg-primary/10 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-lg">{exp.title}</h4>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-1 mt-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Technical Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'creative' && (
                <div className="space-y-6 animate-fade-in-up">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">Creative Side</h3>
                    <p className="text-muted-foreground mb-6">
                      Outside of tech, I love creating — from digital illustrations to 
                      book-inspired moodboards. These pursuits fuel my imagination and 
                      influence how I approach design and UX.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <Palette className="w-8 h-8 text-creative mb-4" />
                        <h4 className="font-semibold mb-2">Art & Design</h4>
                        <p className="text-muted-foreground text-sm">
                          I explore creativity through traditional sketches and digital art — 
                          often blending tech and human elements.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <BookOpen className="w-8 h-8 text-creative mb-4" />
                        <h4 className="font-semibold mb-2">Books & Aesthetic Boards</h4>
                        <p className="text-muted-foreground text-sm">
                          I create moodboards inspired by literature, quotes, and visual storytelling — 
                          shared across Instagram and Pinterest.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === 'personal' && (
                <div className="space-y-6 animate-fade-in-up">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold mb-4">Personal Vision</h3>
                    <p className="text-muted-foreground mb-6">
                      I’m curious, driven, and passionate about building things that matter. 
                      My goal is to bridge engineering with creativity to solve 
                      real-world problems at scale.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-secondary/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-2 text-creative">Future Goals</h4>
                    <p className="text-muted-foreground">
                      I aspire to build and lead products at the intersection of AI and 
                      user experience — where empathy meets technology.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;