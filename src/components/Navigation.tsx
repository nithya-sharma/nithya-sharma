import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <button 
              onClick={scrollToTop}
              className="text-xl font-serif font-bold gradient-text-primary hover:scale-105 transition-transform"
            >
              Nithya Sharma
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              {/* Resume Download */}
             {/* Resume Download (Desktop) */}
<Button 
  asChild
  variant="outline" 
  size="sm"
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
>
  <a href="/resume.pdf" download>
    <Download className="w-4 h-4 mr-2" />
    Resume
  </a>
</Button>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl animate-slide-in-right">
            <div className="px-6 py-8 space-y-6">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-border">
              
<Button 
  asChild
  variant="outline" 
  size="sm"
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
>
  <a href="/resume.pdf" download>
    <Download className="w-4 h-4 mr-2" />
    Resume
  </a>
</Button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;