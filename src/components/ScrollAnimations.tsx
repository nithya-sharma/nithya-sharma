import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    // Parallax effect for hero background
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translate3d(0, ${rate}px, 0)`;
      });
    };

    // Smooth scroll behavior
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleSmoothScroll);

    // Cleanup
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimations;