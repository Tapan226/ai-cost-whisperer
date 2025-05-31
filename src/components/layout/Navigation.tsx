
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
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
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200' 
          : 'bg-transparent'
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-primary-500 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">
              AI Cost Advisor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {isLanding ? (
              <>
                <Link to="/signin" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                  Sign In
                </Link>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  Export Report
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                  <span className="text-sm text-gray-700">User</span>
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {isLanding ? (
                <>
                  <Link
                    to="/signin"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-3 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              ) : (
                <div className="px-3 py-2">
                  <Button variant="outline" className="w-full">
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
