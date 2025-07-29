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
import canvaHeroImage from '@/assets/canva-hero-background.png';
import hershieldLogo from '@/assets/hershield-logo.png';
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
      {/* Hero Section - Fully Responsive */}
      <section className="relative h-screen flex flex-col">
  {/* 70% Top Image Background Section */}
  <div
    className="h-[70%] flex flex-col justify-center items-center text-white relative"
    style={{
      backgroundImage: `url(${canvaHeroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Navigation Buttons */}
    <div className="absolute top-4 sm:top-6 md:top-8 left-1/2 transform -translate-x-1/2 w-full flex justify-center px-4 z-10">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 items-center">
        <Button 
          className="bg-tan-brown hover:bg-button-brown text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium border-none shadow-lg w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
          onClick={() => window.location.href = '#donate'}
        >
          DONATE
        </Button>
        <Button 
          className="bg-tan-brown hover:bg-button-brown text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium border-none shadow-lg w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
          onClick={() => window.location.href = '#contact'}
        >
          JOIN US
        </Button>
        <Button 
          className="bg-tan-brown hover:bg-button-brown text-white px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium border-none shadow-lg w-full sm:w-auto min-w-[120px] sm:min-w-[140px]"
          onClick={() => window.location.href = '#impact'}
        >
          EVENTS
        </Button>
      </div>
    </div>

    {/* Title in Image Section */}
    <div className="text-center max-w-6xl px-4 sm:px-6">
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] mb-6 sm:mb-8 md:mb-12 text-white">
        HERSHIELD
      </h1>
    </div>
  </div>

  {/* 30% Bottom Solid Color Section with Text */}
  <div className="h-[30%] bg-[#EADBC8] flex flex-col justify-center items-center px-4 sm:px-6 text-center relative">
    <h2 className="font-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal mb-3 sm:mb-4 md:mb-6 tracking-wide text-warm-brown">
      Elevating women through unity & support.
    </h2>
    <p className="font-subtitle text-xs sm:text-sm md:text-base leading-relaxed text-warm-brown max-w-2xl">
      HerShield is a nonprofit movement creating safe, empowering spaces for 
      immigrant women to be seen, heard, and supported.
    </p>
  </div>
</section>



      {/* Our Impact Section */}
      <section id="impact" className="min-h-screen flex items-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-brown mb-8 sm:mb-12 md:mb-16 tracking-wide text-center">
            OUR IMPACT
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Statistics on the left */}
            <div className="space-y-6 sm:space-y-8 md:space-y-12">
              <div className="text-center md:text-left">
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-warm-brown mb-1 sm:mb-2 md:mb-4">400</div>
                <p className="text-sm sm:text-base md:text-lg text-warm-brown font-medium tracking-wide">MONEY WE HAVE RAISED</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-warm-brown mb-1 sm:mb-2 md:mb-4">400,000</div>
                <p className="text-sm sm:text-base md:text-lg text-warm-brown font-medium tracking-wide">PEOPLE WE HAVE HELPED</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-warm-brown mb-1 sm:mb-2 md:mb-4">10</div>
                <p className="text-sm sm:text-base md:text-lg text-warm-brown font-medium tracking-wide">OUR TEAM</p>
              </div>
            </div>

            {/* Event Card on the right */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm w-full">
                <img 
                  src="/placeholder.svg" 
                  alt="CoHere Event" 
                  className="w-full h-28 sm:h-32 md:h-40 object-cover rounded mb-3 sm:mb-4"
                />
                <div className="text-right">
                  <div className="text-warm-brown font-bold text-base sm:text-lg">CoHere</div>
                  <div className="text-xs sm:text-sm text-warm-brown">Elevate & Engage</div>
                  <div className="text-xs text-warm-brown mt-2 leading-relaxed">
                    519 Powell Street, West<br/>
                    Side Hall N2C 2H9<br/>
                    $35 SOLD at 905 869 0958<br/>
                    Oct 02nd<br/>
                    HerShield
                  </div>
                </div>
                <Button className="w-full mt-3 sm:mt-4 bg-warm-brown hover:bg-button-brown text-white rounded-full text-sm">
                  ATTEND OUR EVENT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-crimson">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wide text-white text-right mb-8 sm:mb-12 md:mb-16">
              What We Do
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {whatWeDo.map((item, index) => (
                <Card key={index} className="bg-white border-warm-brown/20 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                  <CardContent className="p-4 sm:p-6 md:p-8 text-center h-full flex flex-col justify-center">
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-warm-brown">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed text-warm-brown">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-brown mb-6 sm:mb-8 md:mb-12">
              Mission Statement
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div>
                <p className="text-sm sm:text-base md:text-lg text-warm-brown leading-relaxed mb-4 sm:mb-6 md:mb-8">
                  Heritage Artes Society is a nonprofit organization in Salguerro 
                  committed to protecting the city's built structures and historical sites. 
                  We are Salguerro's primary advocate of the value of the city's 
                  cultural heritage.
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-4 text-warm-brown font-medium text-xs sm:text-sm md:text-base">
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
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gray-300 rounded-3xl">
                  {/* Placeholder for architectural image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Causes Section */}
      <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-crimson">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {causes.map((cause, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <span className="text-lg sm:text-xl md:text-2xl">{cause.emoji}</span>
                    <span className="text-sm sm:text-base md:text-lg font-medium text-white">{cause.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal tracking-wide text-white">
                OUR<br/>CAUSES
              </h2>
            </div>
          </div>
        </div>
      </section>


      {/* Founder Section */}
      <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-brown text-center mb-8 sm:mb-12 md:mb-16">
            Founder of Hershield
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="lg:col-span-1">
                <img 
                  src={founderImage} 
                  alt="Shafoli Kapur" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl object-cover mx-auto"
                />
              </div>
              <div className="lg:col-span-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Working" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-3xl object-cover mx-auto"
                />
              </div>
              <div className="lg:col-span-1 text-center">
                <p className="text-warm-brown text-xs sm:text-sm md:text-base">
                  A little biography about Shafoli Kapur.<br/>
                  blahblahblah
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="min-h-screen flex items-center py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-warm-brown text-center mb-8 sm:mb-12 md:mb-16">
            OUR TEAM
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-full h-32 sm:h-36 md:h-40 lg:h-48 bg-gradient-to-b from-blue-200 to-green-300 rounded-3xl mb-3 sm:mb-4">
                  {/* Placeholder team member image */}
                </div>
                <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-warm-brown mb-1 sm:mb-2">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-warm-brown">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-12 sm:py-16 md:py-20 bg-crimson">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 md:mb-8 text-white">Contact us</h2>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-lg text-white">Heritage Artes Society</p>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                  <span className="text-xs sm:text-sm md:text-base text-white">hello@reallygreatsite.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm md:text-base text-white">@reallygreatsite</span>
                </div>
              </div>
            </div>
            
            <div id="donate">
              <Card className="bg-white border-warm-brown/20">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h3 className="font-subtitle text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-6 text-warm-brown">Join Our Mailing List</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1 text-warm-brown">First Name</label>
                        <Input className="bg-white border-gray-300 text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1 text-warm-brown">Last Name</label>
                        <Input className="bg-white border-gray-300 text-sm" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-warm-brown">Email</label>
                      <Input type="email" className="bg-white border-gray-300 text-sm" />
                    </div>
                    
                    <Button className="bg-warm-brown hover:bg-button-brown text-white px-4 sm:px-6 md:px-8 py-2 rounded-full text-sm">
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