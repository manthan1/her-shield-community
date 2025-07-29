import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Calendar, Users, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center">
                Elevating women through unity and support
              </h1>
              <p className="text-xl leading-relaxed text-center text-primary">
                HerShield is a nonprofit movement creating safe, empowering spaces for immigrant women to be seen, heard, and supported.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                src="/api/placeholder/600/500" 
                alt="Diverse women supporting each other" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" style={{color: '#72523B'}}>
              Find Your Place in Our Community
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{color: '#72523B'}}>
              Whether you're seeking support or want to help others, there's a place for you in HerShield.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* I am a girl */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/api/placeholder/400/300" 
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
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/api/placeholder/400/300" 
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
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src="/api/placeholder/400/300" 
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
            <Card className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Shafoli Kapur, Founder" 
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/50"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <Quote className="h-8 w-8 mb-4 mx-auto lg:mx-0 opacity-80" style={{color: '#72523B'}} />
                    <blockquote className="font-serif text-xl lg:text-2xl italic mb-6 leading-relaxed" style={{color: '#72523B'}}>
                      "Every woman deserves a safe space to grow, dream, and thrive. HerShield exists to ensure that immigrant women not only survive but flourish in their new communities."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg" style={{color: '#72523B'}}>Shafoli Kapur</p>
                      <p className="opacity-90" style={{color: '#72523B'}}>Founder & Executive Director</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Cause of the Month */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" style={{color: '#72523B'}}>
              Featured Cause of the Month
            </h2>
            <p className="text-xl" style={{color: '#72523B'}}>Mental Health Access Initiative</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold" style={{color: '#72523B'}}>
                    Breaking Barriers to Mental Wellness
                  </h3>
                  <p className="leading-relaxed" style={{color: '#72523B'}}>
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
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" style={{color: '#72523B'}}>
              Voices from Our Community
            </h2>
            <p className="text-xl" style={{color: '#72523B'}}>Real stories from women whose lives have been transformed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-orange-600" />
                <p className="italic" style={{color: '#72523B'}}>
                  "HerShield helped me find my voice when I felt completely lost in a new country. The community here became my second family."
                </p>
                <div>
                  <p className="font-semibold" style={{color: '#72523B'}}>Maria Santos</p>
                  <p className="text-sm opacity-75" style={{color: '#72523B'}}>Community Member</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-orange-600" />
                <p className="italic" style={{color: '#72523B'}}>
                  "Through HerShield's employment program, I not only found a job but discovered my passion for entrepreneurship."
                </p>
                <div>
                  <p className="font-semibold" style={{color: '#72523B'}}>Aisha Patel</p>
                  <p className="text-sm opacity-75" style={{color: '#72523B'}}>Entrepreneur</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-6 w-6 text-orange-600" />
                <p className="italic" style={{color: '#72523B'}}>
                  "The safe space HerShield provides is invaluable. Here, I learned that my experiences matter and my dreams are valid."
                </p>
                <div>
                  <p className="font-semibold" style={{color: '#72523B'}}>Fatima Al-Rashid</p>
                  <p className="text-sm opacity-75" style={{color: '#72523B'}}>Advocate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" style={{color: '#72523B'}}>
              Upcoming Events
            </h2>
            <p className="text-xl" style={{color: '#72523B'}}>Join us for empowering gatherings and workshops</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-200 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{color: '#72523B'}}>Monthly Circle</h3>
                    <p className="mb-2" style={{color: '#72523B'}}>Safe space for sharing and connecting</p>
                    <p className="text-sm text-orange-600 font-medium">Every first Saturday | 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-200 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{color: '#72523B'}}>Skills Workshop</h3>
                    <p className="mb-2" style={{color: '#72523B'}}>Professional development and networking</p>
                    <p className="text-sm text-orange-600 font-medium">Monthly | Various times</p>
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
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4" style={{color: '#72523B'}}>
              Community Moments
            </h2>
            <p className="text-xl" style={{color: '#72523B'}}>Celebrating our journey together</p>
          </div>
          
          <div className="text-center">
            <Card className="inline-block shadow-lg">
              <CardContent className="p-8">
                <div className="text-6xl font-bold mb-2" style={{color: '#72523B'}}>500+</div>
                <p className="text-xl" style={{color: '#72523B'}}>Women Empowered</p>
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