import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Briefcase, 
  Heart, 
  Home, 
  GraduationCap, 
  Scale, 
  Users,
  Mail,
  Phone
} from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import founderImage from '@/assets/founder-shafoli.jpg';

const SinglePageApp = () => {
  const causes = [
    {
      icon: Briefcase,
      text: "Employment & Entrepreneurship",
      emoji: "💼"
    },
    {
      icon: Heart,
      text: "Mental Health Access", 
      emoji: "🧠"
    },
    {
      icon: Home,
      text: "Housing & Safety",
      emoji: "🏠"
    },
    {
      icon: GraduationCap,
      text: "Education & Skill Building",
      emoji: "📚"
    },
    {
      icon: Scale,
      text: "Legal Rights & Immigration Support",
      emoji: "💬"
    },
    {
      icon: Users,
      text: "Community & Belonging",
      emoji: "❤️"
    }
  ];

  const whatWeDo = [
    {
      title: "Raise Awareness",
      description: "For 30 years, we have been an esteemed resource on Salguerro culture and history."
    },
    {
      title: "Engaging Youth", 
      description: "Through our activities and school programs, we promote Salguerro's history, culture, and heritage in classrooms."
    },
    {
      title: "Create a stronger community",
      description: "We push for the preservation of Salguerro's cultural heritage by working with local businesses and city officials."
    }
  ];

  const teamMembers = [
    { name: "TEAM 1", description: "small introduction" },
    { name: "TEAM 2", description: "small introduction" },
    { name: "TEAM 3", description: "small introduction" },
    { name: "TEAM 4", description: "small introduction" }
  ];

  return (
    <div className="min-h-screen bg-warm-beige">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.4), rgba(160, 82, 45, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Navigation */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-8">
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-maroon-primary px-8 py-2 rounded-full">
            DONATE
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-maroon-primary px-8 py-2 rounded-full">
            JOIN US
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-maroon-primary px-8 py-2 rounded-full">
            EVENTS
          </Button>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl px-6">
          <h1 className="font-serif text-7xl lg:text-8xl font-normal tracking-widest mb-12">
            HERSHIELD
          </h1>
          
          <h2 className="font-serif text-2xl lg:text-3xl font-normal mb-8 tracking-wide">
            Elevating women through unity & support.
          </h2>
          
          <p className="font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            HerShield is a nonprofit movement creating safe, empowering spaces for 
            immigrant women to be seen, heard, and supported.
          </p>
          
          {/* Logo placeholder */}
          <div className="absolute bottom-12 right-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">HerShield</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-maroon-primary mb-16 tracking-wide">
            OUR IMPACT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-4xl mx-auto">
            <div>
              <div className="text-6xl lg:text-7xl font-light text-maroon-primary mb-4">400</div>
              <p className="text-lg text-maroon-primary font-medium tracking-wide">MONEY WE HAVE RAISED</p>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-light text-maroon-primary mb-4">400,000</div>
              <p className="text-lg text-maroon-primary font-medium tracking-wide">PEOPLE WE HAVE HELPED</p>
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-light text-maroon-primary mb-4">10</div>
              <p className="text-lg text-maroon-primary font-medium tracking-wide">OUR TEAM</p>
            </div>
          </div>

          {/* Event Card */}
          <div className="mt-16 flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <img 
                src="/placeholder.svg" 
                alt="CoHere Event" 
                className="w-full h-40 object-cover rounded mb-4"
              />
              <div className="text-right">
                <div className="text-maroon-primary font-bold text-lg">CoHere</div>
                <div className="text-sm text-gray-600">Elevate & Engage</div>
                <div className="text-xs text-gray-500 mt-2">
                  519 Powell Street, West<br/>
                  Side Hall N2C 2H9<br/>
                  $35 SOLD at 905 869 0958<br/>
                  Oct 02nd<br/>
                  HerShield
                </div>
              </div>
              <Button className="w-full mt-4 bg-maroon-primary hover:bg-maroon-light text-white rounded-full">
                ATTEND OUR EVENT
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-warm-beige py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl text-maroon-primary mb-12">
              Mission Statement
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Heritage Artes Society is a nonprofit organization in Salguerro 
                  committed to protecting the city's built structures and historical sites. 
                  We are Salguerro's primary advocate of the value of the city's 
                  cultural heritage.
                </p>
                
                <div className="flex flex-wrap gap-4 text-gray-600 font-medium">
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
                <div className="w-64 h-64 bg-gray-300 rounded-3xl">
                  {/* Placeholder for architectural image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Causes Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(160, 82, 45, 0.8))'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                {causes.map((cause, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl">{cause.emoji}</span>
                    <span className="text-lg font-medium">{cause.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-right">
              <h2 className="font-serif text-6xl lg:text-7xl font-normal tracking-wide">
                OUR<br/>CAUSES
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gradient-maroon py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl lg:text-5xl text-center mb-16 tracking-wide">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatWeDo.map((item, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-warm-beige py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl lg:text-5xl text-maroon-primary text-center mb-16">
            Founder of Hershield
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src={founderImage} 
                  alt="Shafoli Kapur" 
                  className="w-48 h-48 rounded-3xl object-cover mx-auto"
                />
              </div>
              <div className="lg:col-span-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Working" 
                  className="w-48 h-48 rounded-3xl object-cover mx-auto"
                />
              </div>
              <div className="lg:col-span-1 text-center">
                <p className="text-gray-700 text-sm">
                  A little biography about Shafoli Kapur.<br/>
                  blahblahblah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl lg:text-5xl text-maroon-primary text-center mb-16">
            OUR TEAM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-48 bg-gradient-to-b from-blue-200 to-green-300 rounded-3xl mb-4">
                  {/* Placeholder team member image */}
                </div>
                <h3 className="font-serif text-lg font-bold text-maroon-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 text-white"
        style={{
          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9), rgba(160, 82, 45, 0.8))'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl mb-8">Contact us</h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg">Heritage Artes Society</p>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <span>hello@reallygreatsite.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>@reallygreatsite</span>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-cream text-maroon-primary">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl mb-6">Join Our Mailing List</h3>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Input className="bg-white border-gray-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Input className="bg-white border-gray-300" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input type="email" className="bg-white border-gray-300" />
                    </div>
                    
                    <Button className="bg-maroon-primary hover:bg-maroon-light text-white px-8 py-2 rounded-full">
                      SIGN UP
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePageApp;