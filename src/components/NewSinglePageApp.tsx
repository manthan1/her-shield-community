import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Heart, 
  Users,
  Shield,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import canvaHeroImage from '@/assets/canva-hero-background.png';
import hershieldLogo from '@/assets/hershield-logo.png';

const NewSinglePageApp = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section - Matching Canva design exactly */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${canvaHeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-overlay-dark/30"></div>
        
        {/* Navigation buttons - positioned at top center like in Canva */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
          <Button 
            className="bg-light-peach hover:bg-accent text-text-crimson px-8 py-3 rounded-full text-base font-medium border-none shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '#donate'}
          >
            DONATE
          </Button>
          <Button 
            className="bg-light-peach hover:bg-accent text-text-crimson px-8 py-3 rounded-full text-base font-medium border-none shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '#contact'}
          >
            JOIN US
          </Button>
          <Button 
            className="bg-light-peach hover:bg-accent text-text-crimson px-8 py-3 rounded-full text-base font-medium border-none shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = '#events'}
          >
            EVENTS
          </Button>
        </div>

        {/* Hero Content - Centered like in Canva */}
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-normal tracking-[0.3em] mb-12 text-white drop-shadow-lg">
            HERSHIELD
          </h1>
        </div>

        {/* HerShield Logo - Bottom right like in Canva */}
        <div className="absolute bottom-12 right-12 z-10">
          <div className="flex flex-col items-center">
            <img 
              src={hershieldLogo} 
              alt="HerShield Logo" 
              className="w-16 h-16 mb-2 drop-shadow-lg"
            />
            <span className="text-sm font-bold text-white drop-shadow-lg">HerShield</span>
          </div>
        </div>
      </section>

      {/* Tagline Section - 60px spacing */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-body text-3xl md:text-4xl font-normal mb-8 tracking-wide text-text-crimson leading-relaxed">
            Elevating women through unity & support.
          </h2>
          
          <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-text-crimson">
            HerShield is a nonprofit movement creating safe, empowering spaces for 
            immigrant women to be seen, heard, and supported.
          </p>
        </div>
      </section>

      {/* Impact Statistics Section - Crimson background */}
      <section className="py-20 bg-crimson">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-16 tracking-wide text-center">
            OUR IMPACT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-light text-white mb-4">400</div>
              <p className="text-lg md:text-xl text-white font-medium tracking-wide">MONEY WE HAVE RAISED</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-light text-white mb-4">400,000</div>
              <p className="text-lg md:text-xl text-white font-medium tracking-wide">PEOPLE WE HAVE HELPED</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-light text-white mb-4">10</div>
              <p className="text-lg md:text-xl text-white font-medium tracking-wide">OUR TEAM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-column What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wide text-text-crimson">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Heart className="h-12 w-12 text-crimson mx-auto" />
                </div>
                <h3 className="font-body text-xl md:text-2xl font-bold mb-4 text-text-crimson">Raise Awareness</h3>
                <p className="font-body text-lg leading-relaxed text-text-crimson">
                  For 30 years, we have been an esteemed resource on supporting immigrant women and their unique challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Users className="h-12 w-12 text-crimson mx-auto" />
                </div>
                <h3 className="font-body text-xl md:text-2xl font-bold mb-4 text-text-crimson">Engaging Youth</h3>
                <p className="font-body text-lg leading-relaxed text-text-crimson">
                  Through our activities and programs, we empower young women to understand their rights and potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-crimson mx-auto" />
                </div>
                <h3 className="font-body text-xl md:text-2xl font-bold mb-4 text-text-crimson">Create Stronger Community</h3>
                <p className="font-body text-lg leading-relaxed text-text-crimson">
                  We build bridges between communities and create safe spaces for growth and empowerment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-soft-beige">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-crimson mb-12">
              Mission Statement
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-body text-xl md:text-2xl text-text-crimson leading-relaxed mb-8">
                  HerShield is a nonprofit organization committed to creating safe, empowering spaces 
                  for immigrant women. We are advocates for justice, equality, and the inherent 
                  value of every woman's journey.
                </p>
                
                <div className="flex flex-wrap gap-4 text-text-crimson font-medium text-lg">
                  <span>SAFETY</span>
                  <span>·</span>
                  <span>COMMUNITY</span>
                  <span>·</span>
                  <span>CONNECTION</span>
                  <span>·</span>
                  <span>GROWTH</span>
                  <span>·</span>
                  <span>EMPOWERMENT</span>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-light-peach to-accent rounded-3xl shadow-lg">
                  {/* Placeholder for mission image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Feminine styling */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center mb-16 tracking-wide text-text-crimson">
              Get In Touch
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="font-body text-2xl font-bold text-text-crimson mb-8">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-crimson" />
                    <span className="font-body text-lg text-text-crimson">hello@hershield.org</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-crimson" />
                    <span className="font-body text-lg text-text-crimson">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-crimson" />
                    <span className="font-body text-lg text-text-crimson">123 Community St, City, State 12345</span>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-body text-2xl font-bold mb-6 text-text-crimson">Send us a Message</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-lg font-medium mb-2 text-text-crimson">First Name</label>
                        <Input className="bg-background border-border rounded-lg text-lg p-4" />
                      </div>
                      <div>
                        <label className="block font-body text-lg font-medium mb-2 text-text-crimson">Last Name</label>
                        <Input className="bg-background border-border rounded-lg text-lg p-4" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-body text-lg font-medium mb-2 text-text-crimson">Email</label>
                      <Input type="email" className="bg-background border-border rounded-lg text-lg p-4" />
                    </div>
                    
                    <div>
                      <label className="block font-body text-lg font-medium mb-2 text-text-crimson">Message</label>
                      <Textarea className="bg-background border-border rounded-lg text-lg p-4 min-h-32" />
                    </div>
                    
                    <Button className="w-full bg-crimson hover:bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with ID for navigation */}
      <section id="events" className="py-20 bg-crimson">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-wide">
            Upcoming Events
          </h2>
          <p className="font-body text-xl text-white max-w-2xl mx-auto">
            Join us for community events, workshops, and gatherings that celebrate and empower women.
          </p>
          <Button 
            id="donate"
            className="mt-8 bg-light-peach hover:bg-accent text-text-crimson px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Events
          </Button>
        </div>
      </section>
    </div>
  );
};

export default NewSinglePageApp;