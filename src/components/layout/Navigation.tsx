
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isLanding?: boolean;
}

export function Navigation({ isLanding = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLanding) return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLanding]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isLanding 
        ? isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
        : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-gradient">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold gradient-text">
              AI Cost Advisor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isLanding && (
              <div className="flex items-center space-x-6 text-sm">
                <a href="#features" className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-primary font-medium transition-colors">
                  How it Works
                </a>
                <a href="#pricing" className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Pricing
                </a>
              </div>
            )}
            
            {isLanding ? (
              <div className="flex items-center space-x-3">
                <Link to="/signin" className="text-gray-700 hover:text-primary font-medium transition-colors">
                  Sign In
                </Link>
                <Button asChild className="btn-gradient">
                  <Link to="/dashboard">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Try Demo
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm" className="border-gray-300 hover:border-primary/50 hover:bg-primary/5">
                  Export Report
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                  <span className="text-sm text-gray-700">Demo User</span>
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-primary/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg">
              {isLanding && (
                <div className="space-y-1 mb-4">
                  <a
                    href="#features"
                    className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    How it Works
                  </a>
                  <a
                    href="#pricing"
                    className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </div>
              )}
              
              {isLanding ? (
                <>
                  <Link
                    to="/signin"
                    className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="btn-gradient w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Try Demo
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="px-3 py-2">
                  <Button variant="outline" className="w-full border-gray-300 hover:border-primary/50">
                    Export Report
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
