import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Shield, Lightbulb, Target, Compass } from 'lucide-react';
import founderImage from '@/assets/founder-shafoli.jpg';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Safety",
      description: "Creating secure environments where every woman feels protected and valued."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong connections that foster belonging and mutual support."
    },
    {
      icon: Heart,
      title: "Connection",
      description: "Facilitating meaningful relationships that transform lives."
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description: "Empowering personal and professional development opportunities."
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Helping women discover their strength and achieve their dreams."
    }
  ];

  const teamMembers = [
    {
      name: "Shafoli Kapur",
      role: "Founder & Executive Director",
      image: founderImage,
      bio: "Passionate advocate for immigrant women's rights with 10+ years in nonprofit leadership."
    },
    {
      name: "Maria Rodriguez",
      role: "Program Director",
      bio: "Former social worker specializing in cultural competency and trauma-informed care."
    },
    {
      name: "Dr. Aisha Patel", 
      role: "Mental Health Coordinator",
      bio: "Licensed therapist focused on culturally sensitive mental health services."
    },
    {
      name: "Fatima Al-Rashid",
      role: "Community Outreach Manager",
      bio: "Community organizer with deep roots in immigrant advocacy and support."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            About HerShield
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from the belief that every immigrant woman deserves a safe space to thrive, 
            HerShield creates communities where strength is found in sisterhood.
          </p>
        </div>

        {/* Mission Statement */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-gradient-empowering text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <Compass className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-muted-foreground">
                To create safe, empowering spaces where immigrant women can find their voice, 
                build meaningful connections, and access the resources they need to thrive in 
                their new communities. We believe in the power of sisterhood to transform lives 
                and strengthen communities.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Founder Section */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary text-center mb-16">
              Meet Our Founder
            </h2>
            <Card className="shadow-warm">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1 text-center">
                    <img 
                      src={founderImage} 
                      alt="Shafoli Kapur" 
                      className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-warm"
                    />
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">Shafoli Kapur</h3>
                    <Badge variant="secondary" className="mb-4">Founder & Executive Director</Badge>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Shafoli's journey as an immigrant woman fueled her passion for creating HerShield. 
                      Having experienced firsthand the challenges of navigating a new culture while 
                      maintaining her identity, she understood the critical need for culturally 
                      sensitive support systems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      With over a decade of experience in nonprofit leadership and community organizing, 
                      Shafoli has dedicated her career to amplifying marginalized voices. Her vision 
                      for HerShield stems from a simple yet powerful belief: when women support each 
                      other, entire communities flourish.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Under her leadership, HerShield has grown from a small support group to a 
                      comprehensive organization serving hundreds of immigrant women across the region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate advocates working together to empower immigrant women
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-warm">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full object-cover mx-auto"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-empowering mx-auto flex items-center justify-center">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-primary">{member.name}</h3>
                      <Badge variant="outline" className="mb-4">{member.role}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-warm text-center group hover:shadow-lifted transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Our Impact
                </h2>
                <p className="text-xl text-muted-foreground">
                  Making a difference one woman at a time
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">500+</div>
                  <p className="text-lg text-muted-foreground">Women Served</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">150+</div>
                  <p className="text-lg text-muted-foreground">Support Circles</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">75+</div>
                  <p className="text-lg text-muted-foreground">Partnerships</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;