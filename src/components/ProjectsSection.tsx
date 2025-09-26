// components/ProjectsSection.tsx
import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Brain, 
  BarChart3, 
  Database,
  MessageSquare,
  Filter,
  Sparkles 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'llm', label: 'LLM/AI' },
    { id: 'data', label: 'Data Dashboards' },
    { id: 'consulting', label: 'Business Use Cases' }
  ];

  const projects = [
    {
      id: 1,
      title: 'CortexHub: Multimodal Agent Framework',
      description:
        'Plug-and-play LLM agents powered by LangChain + Ollama. Includes image analysis, course generation, PDF bots & chat memory.',
      category: 'llm',
      tags: ['LangChain', 'Ollama', 'FastAPI', 'Vision AI'],
      image: '/api/placeholder/600/400',
      demoLink: 'https://github.com/nithya-sharma/cortexhub-agents',
      githubLink: 'https://github.com/nithya-sharma/cortexhub-agents',
      featured: true,
      icon: Brain,
      metrics: { agents: '6+', responseTime: '<2s' },
    },
    {
      id: 2,
      title: 'Looker Analytics Dashboards',
      description:
        'Real-time dashboards for sales, conversion & rep performance across verticals. Used Looker Studio and SQL models.',
      category: 'data',
      tags: ['Looker', 'Google Cloud', 'SQL', 'Data Modeling'],
      image: '/api/placeholder/600/400',
      demoLink: 'https://github.com/nithya-sharma/looker-analytics-dashboards.git',
      githubLink: 'https://github.com/nithya-sharma/looker-analytics-dashboards.git',
      featured: true,
      icon: BarChart3,
      metrics: { views: '5K+', KPIs: '20+' },
    },
    // {
    //   id: 3,
    //   title: 'Drone Fleet Monitoring Dashboard',
    //   description:
    //     'Simulated drone telemetry for distance, battery, faults & payload. Built real-time React dashboards for fleet and individual units.',
    //   category: 'data',
    //   tags: ['React', 'FastAPI', 'WebSockets', 'Fleet Analytics'],
    //   image: '/api/placeholder/600/400',
    //   demoLink: '#',
    //   githubLink: '#',
    //   featured: true,
    //   icon: Filter,
    //   metrics: { drones: '15+', alerts: '50+' },
    // },
   
    {
      id: 4,
      title: 'Virtual Consulting Dashboards (PwC)',
      description:
        'Simulated BI dashboards for customer churn, fraud, attrition. Completed during consulting virtual internships.',
      category: 'consulting',
      tags: ['Power BI', 'Excel', 'SQL', 'Use Cases'],
      image: '/api/placeholder/600/400',
      demoLink: 'https://github.com/nithya-sharma/pwc-virtual-internship-dashboards.git',
      githubLink: 'https://github.com/nithya-sharma/pwc-virtual-internship-dashboards.git',
      featured: false,
      icon: BarChart3,
      metrics: { dashboards: '5+', KPIs: '30+' },
    },
   
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projects combining real-world analytics, LLM applications, and strategic business insights
          </p>
        </div>

        {/* Spotlight Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
            <Sparkles className="w-6 h-6 inline mr-2 text-accent" />
            Spotlight Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`card-hover group relative overflow-hidden ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-primary/10">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <Badge variant="secondary" className="mt-1">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
    <Button size="sm" variant="ghost" className="p-2">
      <Github className="w-4 h-4" />
    </Button>
  </a>
  {/* {project.demoLink && (
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
      <Button size="sm" variant="ghost" className="p-2">
        <ExternalLink className="w-4 h-4" />
      </Button>
    </a>
  )} */}
</div>

                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-surface rounded-lg">
                        <div className="font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 reveal-up">
          <div className="flex space-x-1 bg-surface-elevated rounded-full p-1">
            {filters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === id 
                    ? 'bg-primary text-primary-foreground shadow-glow' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`card-hover group overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
  {project.githubLink && (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <Button size="sm" variant="secondary" className="btn-gradient">
        <Github className="w-4 h-4 mr-2" />
        Code
      </Button>
    </a>
  )}
  {project.demoLink && (
    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
      <Button size="sm" variant="secondary" className="bg-secondary text-secondary-foreground">
        <ExternalLink className="w-4 h-4 mr-2" />
        Demo
      </Button>
    </a>
  )}
</div>


              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 reveal-up">
          <div className="bg-gradient-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-6">
              I’m actively exploring AI-powered business products. If you'd like to build something together, reach out.
            </p>
            <Button className="btn-gradient">
              Let’s Build Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// import { useState } from 'react';
// import { 
//   ExternalLink, 
//   Github, 
//   Brain, 
//   BarChart3, 
//   Database,
//   MessageSquare,
//   Filter,
//   Sparkles 
// } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

// const ProjectsSection = () => {
//   const [activeFilter, setActiveFilter] = useState('all');

//   const filters = [
//     { id: 'all', label: 'All Projects' },
//     { id: 'llm', label: 'LLM/AI' },
//     { id: 'data', label: 'Data Science' },
//     { id: 'web', label: 'Web Development' }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: 'LLM-Powered Document-to-Course Generator',
//       description:
//         'Used Llama 3.2 Vision + LangChain to convert unstructured PDFs into structured, interactive learning modules. Designed for internal upskilling use cases.',
//       category: 'llm',
//       tags: ['LangChain', 'Llama 3.2', 'FastAPI', 'React'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: true,
//       icon: Brain,
//       metrics: { modulesCreated: '120+', avgLoadTime: '2.1s' },
//     },
//     {
//       id: 2,
//       title: 'Medical Field Visit KPI Dashboard',
//       description:
//         'Built an end-to-end reporting system for medical rep visits using React, FastAPI, and MySQL. Added filters, trends, KPIs, and user insights.',
//       category: 'data',
//       tags: ['React', 'MUI', 'MySQL', 'FastAPI', 'Nivo'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: true,
//       icon: BarChart3,
//       metrics: { visitsTracked: '30K+', reps: '150+' },
//     },
//     {
//       id: 3,
//       title: 'Autonomous API Builder (LLM x Data)',
//       description:
//         'Uploaded CSVs are converted into database schema + working APIs with LLM-generated docs, validation, and auth layers.',
//       category: 'llm',
//       tags: ['LangChain', 'FastAPI', 'MySQL', 'CSV'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: false,
//       icon: Database,
//       metrics: { apisGenerated: '100+', coverage: '4 models' },
//     },
//     {
//       id: 4,
//       title: 'LLM-based Spellchecker Benchmark',
//       description:
//         'Benchmarked rule-based vs LLM-based spelling correction using Mistral, OpenAI, and DeepSeek. Quantified error types and correction gains.',
//       category: 'llm',
//       tags: ['LangChain', 'Python', 'OpenAI', 'Mistral'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: false,
//       icon: MessageSquare,
//       metrics: { testCases: '1.5K+', accuracyGain: '+18%' },
//     },
//     {
//       id: 5,
//       title: 'EV Charging Dashboard (Mock Data)',
//       description:
//         'Simulated fleet data from EV sensors to design a location + load-aware React dashboard. Shows KPIs like usage, distance, and charger status.',
//       category: 'data',
//       tags: ['React', 'FastAPI', 'Mapbox', 'Fleet Analysis'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: false,
//       icon: Filter,
//       metrics: { vehicles: '50+', chargers: '200+' },
//     },
//     {
//       id: 6,
//       title: 'PwC/KPMG Virtual Dashboards',
//       description:
//         'Completed business-focused data analysis tasks for consulting-style use cases. Built dashboards to track revenue, fraud, attrition & customer churn.',
//       category: 'data',
//       tags: ['Excel', 'Power BI', 'SQL', 'Storytelling'],
//       image: '/api/placeholder/600/400',
//       demoLink: '#',
//       githubLink: '#',
//       featured: false,
//       icon: BarChart3,
//       metrics: { useCases: '4+', KPIs: '25+' },
//     },
//   ];
  
//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(project => project.category === activeFilter);

//   const featuredProjects = projects.filter(project => project.featured);

//   return (
//     <section id="projects" className="section-padding bg-background">
//       <div className="section-container">
//         {/* Section Header */}
//         <div className="text-center mb-16 reveal-up">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
//             Featured <span className="gradient-text-primary">Projects</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A showcase of technical projects that demonstrate my expertise in LLMs, 
//             data science, and full-stack development
//           </p>
//         </div>

//         {/* Featured Projects Spotlight */}
//         <div className="mb-20">
//           <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
//             <Sparkles className="w-6 h-6 inline mr-2 text-accent" />
//             Spotlight Projects
//           </h3>
//           <div className="grid md:grid-cols-2 gap-8">
//             {featuredProjects.map((project, index) => (
//               <Card 
//                 key={project.id}
//                 className={`card-hover group relative overflow-hidden ${
//                   index === 0 ? 'md:col-span-2' : ''
//                 }`}
//               >
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
                
//                 <CardContent className="p-8 relative">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="flex items-center space-x-3">
//                       <div className="p-3 rounded-full bg-primary/10">
//                         <project.icon className="w-6 h-6 text-primary" />
//                       </div>
//                       <div>
//                         <h4 className="text-xl font-semibold">{project.title}</h4>
//                         <Badge variant="secondary" className="mt-1">
//                           Featured
//                         </Badge>
//                       </div>
//                     </div>
//                     <div className="flex space-x-2">
//                       <Button size="sm" variant="ghost" className="p-2">
//                         <Github className="w-4 h-4" />
//                       </Button>
//                       <Button size="sm" variant="ghost" className="p-2">
//                         <ExternalLink className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>

//                   <p className="text-muted-foreground mb-6 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Metrics */}
//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     {Object.entries(project.metrics).map(([key, value]) => (
//                       <div key={key} className="text-center p-3 bg-surface rounded-lg">
//                         <div className="font-bold text-primary">{value}</div>
//                         <div className="text-xs text-muted-foreground capitalize">
//                           {key.replace(/([A-Z])/g, ' $1').trim()}
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <Badge key={tag} variant="outline" className="text-xs">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex justify-center mb-12 reveal-up">
//           <div className="flex space-x-1 bg-surface-elevated rounded-full p-1">
//             {filters.map(({ id, label }) => (
//               <button
//                 key={id}
//                 onClick={() => setActiveFilter(id)}
//                 className={`px-6 py-3 rounded-full transition-all duration-300 ${
//                   activeFilter === id 
//                     ? 'bg-primary text-primary-foreground shadow-glow' 
//                     : 'text-muted-foreground hover:text-foreground'
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* All Projects Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <Card 
//               key={project.id}
//               className={`card-hover group overflow-hidden animate-fade-in-up`}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Project Image */}
//               <div className="aspect-video bg-gradient-surface relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-all duration-300" />
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <project.icon className="w-16 h-16 text-primary/50 group-hover:text-primary/70 transition-colors" />
//                 </div>
                
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
//                   <Button size="sm" variant="secondary" className="btn-gradient">
//                     <Github className="w-4 h-4 mr-2" />
//                     Code
//                   </Button>
//                   <Button size="sm" variant="secondary" className="bg-secondary text-secondary-foreground">
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Demo
//                   </Button>
//                 </div>
//               </div>

//               <CardContent className="p-6">
//                 <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
//                   {project.description}
//                 </p>
                
//                 {/* Tags */}
//                 <div className="flex flex-wrap gap-1 mb-4">
//                   {project.tags.slice(0, 3).map((tag) => (
//                     <Badge key={tag} variant="outline" className="text-xs">
//                       {tag}
//                     </Badge>
//                   ))}
//                   {project.tags.length > 3 && (
//                     <Badge variant="outline" className="text-xs">
//                       +{project.tags.length - 3}
//                     </Badge>
//                   )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-2">
//                   <Button 
//                     size="sm" 
//                     variant="outline" 
//                     className="flex-1"
//                   >
//                     View Project
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16 reveal-up">
//           <div className="bg-gradient-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
//             <h3 className="text-2xl font-serif font-semibold mb-4">
//               Interested in Collaboration?
//             </h3>
//             <p className="text-muted-foreground mb-6">
//               I'm always excited to work on innovative projects that push the boundaries 
//               of what's possible with AI and data science.
//             </p>
//             <Button className="btn-gradient">
//               Let's Build Something Amazing
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;