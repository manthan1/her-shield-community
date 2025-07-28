import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calendar, Users, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import iAmAGirl from '@/assets/i-am-a-girl.jpg';
import iWorkWithGirls from '@/assets/i-work-with-girls.jpg';
import iWantToDonate from '@/assets/i-want-to-donate.jpg';
import founderImage from '@/assets/founder-shafoli.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Elevating women through unity and support
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                HerShield is a nonprofit movement creating safe, empowering spaces for immigrant women to be seen, heard, and supported.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Diverse women supporting each other" 
                className="rounded-2xl shadow-lifted w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Find Your Place in Our Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're seeking support or want to help others, there's a place for you in HerShield.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* I am a girl */}
            <Card className="overflow-hidden shadow-warm hover:shadow-lifted transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={iAmAGirl} 
                  alt="Young woman smiling confidently" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">I am a girl</h3>
                  <p className="text-white/90 text-sm">Access support resources and connect with our community</p>
                </div>
              </div>
              <CardContent className="p-6">
                <Button className="w-full" asChild>
                  <Link to="/resources">Find Support <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            {/* I work with girls */}
            <Card className="overflow-hidden shadow-warm hover:shadow-lifted transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={iWorkWithGirls} 
                  alt="Group of professional women working together" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">I work with girls</h3>
                  <p className="text-white/90 text-sm">Partner with us or volunteer your time and expertise</p>
                </div>
              </div>
              <CardContent className="p-6">
                <Button className="w-full" asChild>
                  <Link to="/get-involved">Get Involved <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            {/* I want to donate */}
            <Card className="overflow-hidden shadow-warm hover:shadow-lifted transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={iWantToDonate} 
                  alt="Hands holding a heart symbol" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">I want to donate</h3>
                  <p className="text-white/90 text-sm">Support our mission with a financial contribution</p>
                </div>
              </div>
              <CardContent className="p-6">
                <Button className="w-full" asChild>
                  <Link to="/donate">Donate Now <Heart className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-empowering text-white shadow-lifted">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={founderImage} 
                      alt="Shafoli Kapur, Founder" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <Quote className="h-8 w-8 mb-4 mx-auto lg:mx-0 opacity-80" />
                    <blockquote className="font-serif text-xl lg:text-2xl italic mb-6 leading-relaxed">
                      "Every woman deserves a safe space to grow, dream, and thrive. HerShield exists to ensure that immigrant women not only survive but flourish in their new communities."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg">Shafoli Kapur</p>
                      <p className="opacity-90">Founder & Executive Director</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cause of the Month */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Cause of the Month
            </h2>
            <p className="text-xl text-muted-foreground">Mental Health Access Initiative</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-warm">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    Breaking Barriers to Mental Wellness
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This month, we're focusing on providing culturally sensitive mental health resources and counseling services to immigrant women. Help us bridge the gap between traditional care and the unique needs of our community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link to="/causes">Learn More</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/donate">Support This Cause</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Voices from Our Community
            </h2>
            <p className="text-xl text-muted-foreground">Real stories from women whose lives have been transformed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-warm">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-accent" />
                <p className="text-muted-foreground italic">
                  "HerShield helped me find my voice when I felt completely lost in a new country. The community here became my second family."
                </p>
                <div>
                  <p className="font-semibold">Maria Santos</p>
                  <p className="text-sm text-muted-foreground">Community Member</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-accent" />
                <p className="text-muted-foreground italic">
                  "Through HerShield's employment program, I not only found a job but discovered my passion for entrepreneurship."
                </p>
                <div>
                  <p className="font-semibold">Aisha Patel</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-accent" />
                <p className="text-muted-foreground italic">
                  "The safe space HerShield provides is invaluable. Here, I learned that my experiences matter and my dreams are valid."
                </p>
                <div>
                  <p className="font-semibold">Fatima Al-Rashid</p>
                  <p className="text-sm text-muted-foreground">Advocate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Highlights */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">Join us for empowering gatherings and workshops</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Monthly Circle</h3>
                    <p className="text-muted-foreground mb-2">Safe space for sharing and connecting</p>
                    <p className="text-sm text-accent font-medium">Every first Saturday | 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Skills Workshop</h3>
                    <p className="text-muted-foreground mb-2">Professional development and networking</p>
                    <p className="text-sm text-accent font-medium">Monthly | Various times</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Moments */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Community Moments
            </h2>
            <p className="text-xl text-muted-foreground">Celebrating our journey together</p>
          </div>
          
          <div className="text-center">
            <Card className="inline-block shadow-warm">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-primary mb-2">500+</div>
                <p className="text-xl text-muted-foreground">Women Empowered</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/stories">See More Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;