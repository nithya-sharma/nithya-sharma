import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const dynamicTexts = [
    "Data Storyteller", 
    "LLM Developer",
    "Creative Thinker",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-10 rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-gradient-secondary opacity-10 rounded-full animate-float delay-300"></div>
      </div>

      {/* Main Content */}
      <div className={`section-container text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary p-1 animate-scale-in">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-secondary opacity-50"></div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text-primary">Nithya Sharma</span>
          </h1>
          
          {/* Dynamic Role Text */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light animate-slide-in-left">
              I'm a{' '}
              <span 
                key={currentText}
                className="gradient-text-creative font-semibold animate-fade-in-up"
              >
                {dynamicTexts[currentText]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
            I craft intelligent tools and experiences by combining LLMs, backend systems, and creative storytelling.
            Focused on building solutions that blend code, design, and strategy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="btn-gradient px-8 py-4 text-lg font-semibold rounded-full"
              onClick={scrollToAbout}
            >
              Explore My Work
            </Button>
            <Button
  asChild // <- this tells shadcn/ui Button to render as <a>
  size="lg"
  className="btn-gradient px-8 py-4 text-lg font-semibold rounded-full">
  <a href="/resume.pdf" download>
    Download Resume
  </a>
</Button>

          </div>

         {/* Social Links */}
         <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-400">
          {[
    { Icon: Github, href: "https://github.com/nithya-sharma", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/nithya-sharma01/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:nithya4434@gmail.com", label: "Email" }
  ].map(({ Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer" // ✅ prevents security issues
      className="p-3 rounded-full bg-surface-elevated hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  ))}
</div>

        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// import { useState, useEffect } from 'react';
// import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import heroBg from '@/assets/hero-bg.jpg';

// const HeroSection = () => {
//   const [currentText, setCurrentText] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
  
//   const dynamicTexts = [
//     "MBA Candidate",
//     "Data Storyteller", 
//     "LLM Developer",
//     "Creative Thinker",
//     "Problem Solver"
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const scrollToAbout = () => {
//     document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section 
//       className="min-h-screen relative flex items-center justify-center overflow-hidden"
//       style={{
//         backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroBg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-10 rounded-full animate-float"></div>
//         <div className="absolute -bottom-1/2 -left-1/2 w-3/4 h-3/4 bg-gradient-secondary opacity-10 rounded-full animate-float delay-300"></div>
//       </div>

//       {/* Main Content */}
//       <div className={`section-container text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//         <div className="max-w-4xl mx-auto">
//           {/* Profile Image Placeholder */}
//           <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary p-1 animate-scale-in">
//             <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
//               <div className="w-24 h-24 rounded-full bg-gradient-secondary opacity-50"></div>
//             </div>
//           </div>

//           {/* Name & Title */}
//           <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in-up">
//             <span className="gradient-text-primary">Your Name</span>
//           </h1>
          
//           {/* Dynamic Role Text */}
//           <div className="h-16 md:h-20 flex items-center justify-center mb-8">
//             <h2 className="text-2xl md:text-3xl font-light animate-slide-in-left">
//               I'm a{' '}
//               <span 
//                 key={currentText}
//                 className="gradient-text-creative font-semibold animate-fade-in-up"
//               >
//                 {dynamicTexts[currentText]}
//               </span>
//             </h2>
//           </div>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
//             Combining technical expertise in LLMs and data science with creative storytelling 
//             to build meaningful solutions. Currently pursuing an MBA to bridge technology and business strategy.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up delay-300">
//             <Button 
//               size="lg" 
//               className="btn-gradient px-8 py-4 text-lg font-semibold rounded-full"
//               onClick={scrollToAbout}
//             >
//               Explore My Work
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg"
//               className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
//             >
//               Download Resume
//             </Button>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-400">
//             {[
//               { Icon: Github, href: "#", label: "GitHub" },
//               { Icon: Linkedin, href: "#", label: "LinkedIn" }, 
//               { Icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
//             ].map(({ Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 className="p-3 rounded-full bg-surface-elevated hover:bg-card-hover transition-all duration-300 hover:scale-110 hover:shadow-glow group"
//                 aria-label={label}
//               >
//                 <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <button 
//           onClick={scrollToAbout}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
//         >
//           <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;