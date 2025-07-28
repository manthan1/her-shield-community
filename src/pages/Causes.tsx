import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Brain, 
  Home, 
  GraduationCap, 
  Scale, 
  Users,
  ArrowRight,
  Heart
} from 'lucide-react';

const Causes = () => {
  const causes = [
    {
      icon: Briefcase,
      title: "Employment & Entrepreneurship",
      description: "Supporting career development, job placement, and business creation opportunities for immigrant women.",
      details: [
        "Resume building and interview preparation",
        "Professional networking events",
        "Mentorship programs with industry leaders",
        "Small business incubation and funding guidance"
      ],
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
    },
    {
      icon: Brain,
      title: "Mental Health Access",
      description: "Providing culturally sensitive mental health resources and counseling services.",
      details: [
        "Individual and group therapy sessions",
        "Crisis intervention and support",
        "Cultural competency training for providers",
        "Trauma-informed care approaches"
      ],
      color: "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400"
    },
    {
      icon: Home,
      title: "Housing & Safety",
      description: "Ensuring safe, affordable housing options and domestic violence support.",
      details: [
        "Emergency shelter assistance",
        "Housing navigation and advocacy",
        "Safety planning and legal support",
        "Transitional housing programs"
      ],
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400"
    },
    {
      icon: GraduationCap,
      title: "Education & Skill Building",
      description: "Offering educational opportunities and professional skill development programs.",
      details: [
        "English language learning classes",
        "Digital literacy workshops", 
        "Professional certification programs",
        "Financial literacy education"
      ],
      color: "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400"
    },
    {
      icon: Scale,
      title: "Legal Rights & Immigration Support",
      description: "Providing legal guidance and immigration assistance to protect women's rights.",
      details: [
        "Immigration status assistance",
        "Know your rights workshops",
        "Legal clinic partnerships",
        "Advocacy and policy work"
      ],
      color: "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400"
    },
    {
      icon: Users,
      title: "Community & Belonging",
      description: "Creating spaces for cultural connection, celebration, and mutual support.",
      details: [
        "Cultural events and celebrations",
        "Support groups and circles",
        "Intergenerational programming",
        "Community leadership development"
      ],
      color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Causes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We address the multifaceted challenges that immigrant women face, 
            providing comprehensive support across all areas of life.
          </p>
        </div>

        {/* Featured Cause */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-gradient-empowering text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="font-serif text-3xl font-bold mb-4">Featured Cause: Mental Health Access</h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-orange-900">
                This month, we're focusing on breaking down barriers to mental health care. 
                Many immigrant women face unique challenges including trauma, cultural barriers, 
                and lack of culturally competent providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90">
                  <Link to="/donate" className="flex items-center">
                    Support This Cause <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* All Causes Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support addressing every aspect of immigrant women's lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((cause, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lifted transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${cause.color} group-hover:scale-110 transition-transform`}>
                    <cause.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">{cause.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{cause.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <p className="font-medium text-sm text-primary">What we offer:</p>
                    <ul className="space-y-1">
                      {cause.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How We Make Impact */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-warm bg-secondary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                    How We Make Impact
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Our holistic approach ensures lasting change
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-2">Assessment & Connection</h3>
                        <p className="text-muted-foreground text-sm">We start by understanding each woman's unique needs and connecting her with our supportive community.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-2">Personalized Support</h3>
                        <p className="text-muted-foreground text-sm">We provide tailored resources and services that address individual circumstances and goals.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-2">Skill Building</h3>
                        <p className="text-muted-foreground text-sm">Through workshops, mentorship, and training, we help build confidence and practical skills.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary mb-2">Ongoing Empowerment</h3>
                        <p className="text-muted-foreground text-sm">We maintain long-term relationships, celebrating successes and providing continued support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="shadow-warm">
            <CardContent className="p-8 lg:p-12">
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether through volunteering, donating, or spreading awareness, 
                you can help us continue this vital work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/donate">Support Our Causes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Causes;