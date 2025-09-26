import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import CreativeSection from '@/components/CreativeSection';
import ContactSection from '@/components/ContactSection';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollAnimations />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CreativeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="section-padding bg-surface-elevated border-t border-border">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-muted-foreground">
                © 2025 Nithya Sharma. Crafted with passion and precision.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
