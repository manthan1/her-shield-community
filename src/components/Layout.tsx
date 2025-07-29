import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Causes', href: '/causes' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Stories', href: '/stories' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16 md:flex md:items-center md:justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 justify-self-start">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              <span className="font-serif text-2xl font-semibold text-primary">HerShield</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="ml-4">
                <Link to="/donate">Donate</Link>
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 justify-self-end"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground hover:text-accent'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-fit">
                  <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)}>
                    Donate
                  </Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-accent" fill="currentColor" />
                <span className="font-serif text-2xl font-semibold">HerShield</span>
              </Link>
              <p className="text-primary-foreground/80 mb-4">
                Elevating women through unity and support.
              </p>
              <p className="text-sm text-primary-foreground/70 italic">
                Built by immigrants, for immigrants.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent">About Us</Link></li>
                <li><Link to="/causes" className="text-primary-foreground/80 hover:text-accent">Our Causes</Link></li>
                <li><Link to="/get-involved" className="text-primary-foreground/80 hover:text-accent">Get Involved</Link></li>
                <li><Link to="/stories" className="text-primary-foreground/80 hover:text-accent">Stories</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent">Contact Us</Link></li>
                <li><Link to="/resources" className="text-primary-foreground/80 hover:text-accent">Resources</Link></li>
                <li><a href="mailto:info@hershield.org" className="text-primary-foreground/80 hover:text-accent">info@hershield.org</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 HerShield. 501(c)(3) Nonprofit Organization. EIN: 88-1234567
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;