import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  HandHeart, 
  MessageSquare, 
  UserPlus,
  Briefcase,
  GraduationCap,
  Home,
  ArrowRight
} from 'lucide-react';

const GetInvolved = () => {
  const volunteerRoles = [
    {
      icon: GraduationCap,
      title: "Workshop Facilitator",
      description: "Lead educational sessions on professional skills, digital literacy, or life skills",
      time: "2-4 hours/month",
      skills: ["Teaching", "Public Speaking", "Subject Expertise"]
    },
    {
      icon: Heart,
      title: "Mentor",
      description: "Provide one-on-one guidance and support to women navigating their journey",
      time: "1-2 hours/week",
      skills: ["Active Listening", "Empathy", "Professional Experience"]
    },
    {
      icon: MessageSquare,
      title: "Translation Support",
      description: "Help bridge language barriers during events and resource development",
      time: "As needed",
      skills: ["Bilingual", "Cultural Competency", "Communication"]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Offer pro-bono services in law, healthcare, finance, or other professional areas",
      time: "Flexible",
      skills: ["Professional License", "Expertise", "Compassion"]
    },
    {
      icon: Users,
      title: "Event Support",
      description: "Help organize and run community events, workshops, and celebrations",
      time: "4-8 hours/month",
      skills: ["Organization", "People Skills", "Enthusiasm"]
    },
    {
      icon: Home,
      title: "Administrative Support",
      description: "Assist with behind-the-scenes work including data entry, communications, and coordination",
      time: "2-6 hours/week",
      skills: ["Computer Skills", "Attention to Detail", "Reliability"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <HandHeart className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our movement to empower immigrant women. Whether you volunteer your time, 
            partner with us, or spread the word, your involvement makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Volunteer Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lifted">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                    Volunteer Interest Form
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about yourself and how you'd like to contribute to our community.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How much time can you volunteer?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 hours per week</SelectItem>
                        <SelectItem value="3-5">3-5 hours per week</SelectItem>
                        <SelectItem value="6-10">6-10 hours per week</SelectItem>
                        <SelectItem value="flexible">Flexible/As needed</SelectItem>
                        <SelectItem value="events">Events only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {['Mentoring', 'Workshop Facilitation', 'Translation', 'Event Planning', 'Administrative', 'Professional Services'].map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded border-border" />
                          <span>{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea 
                      id="skills" 
                      placeholder="Tell us about your professional background, languages spoken, special skills, or relevant experience..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with HerShield?</Label>
                    <Textarea 
                      id="motivation" 
                      placeholder="Share what motivates you to support immigrant women..."
                      rows={3}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Submit Volunteer Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Info */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Stay Updated
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get our newsletter with volunteer opportunities, event updates, and community news.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Button className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Group */}
            <Card className="shadow-warm bg-accent/10">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  WhatsApp Community
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our WhatsApp group for real-time updates, quick communication, and community support.
                </p>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Join WhatsApp Group
                </Button>
              </CardContent>
            </Card>

            {/* Host a Circle */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Host Your Own Circle
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start a HerShield support circle in your area. We'll provide training and resources.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect way to contribute your skills and passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lifted transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <role.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary">{role.title}</h3>
                      <Badge variant="outline" className="text-xs">{role.time}</Badge>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div>
                    <p className="font-medium text-xs text-primary mb-2">Skills needed:</p>
                    <div className="flex flex-wrap gap-1">
                      {role.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="mb-20">
          <Card className="shadow-warm bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Partner Organizations
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Collaborate with us to expand our impact and reach
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">
                      Corporate Partnerships
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Employee volunteer programs
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Skills-based volunteering opportunities
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Sponsorship and funding partnerships
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Pro-bono services and expertise
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">
                      Community Organizations
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Resource sharing and referrals
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Joint programming and events
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Advocacy and policy initiatives
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        Capacity building collaborations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button asChild>
                  <Link to="/contact">
                    Explore Partnership <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="shadow-lifted bg-gradient-empowering text-white">
            <CardContent className="p-8 lg:p-12">
              <UserPlus className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8 opacity-90">
                Every act of support, no matter how small, contributes to building a stronger, 
                more inclusive community for immigrant women. Your involvement can transform lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/donate">
                    Make a Donation <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;