import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Calendar className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for empowering gatherings, workshops, and community celebrations. 
            Together, we create spaces where every woman can thrive.
          </p>
        </div>

        {/* Coming Soon Section */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-gradient-empowering text-white">
            <CardContent className="p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Calendar className="h-12 w-12" />
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                  We Will Be Posting Our Events Soon!
                </h2>
                <p className="text-xl leading-relaxed mb-8 opacity-90">
                  We're working hard to bring you meaningful events and workshops. 
                  Our calendar will be filled with opportunities for connection, learning, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link to="/get-involved">
                      Get Notified <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Types of Events We'll Host */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of the types of events we'll be hosting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Support Circles</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monthly gatherings for sharing experiences, offering mutual support, 
                  and building lasting friendships within our community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Skills Workshops</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional development sessions covering resume writing, interview skills, 
                  digital literacy, and entrepreneurship basics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Cultural Celebrations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Festivals and events celebrating the rich cultures within our community, 
                  fostering understanding and appreciation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Networking Events</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional networking opportunities connecting women with mentors, 
                  industry leaders, and potential collaborators.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Educational Seminars</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Informational sessions on topics like financial literacy, legal rights, 
                  healthcare navigation, and immigration processes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Community Outreach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Volunteer opportunities and community service projects that strengthen 
                  our bonds while giving back to the broader community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Stay Updated */}
        <section className="mb-20">
          <Card className="shadow-warm bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Stay Connected
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Be the first to know when we announce our upcoming events
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-2">Join Our Community</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Sign up to receive event notifications and community updates
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/get-involved">Join Our Newsletter</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-warm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-2">Host an Event</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Interested in hosting a HerShield Circle in your area?
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/get-involved">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Placeholder for Future Event Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Event Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This space will showcase photos and videos from our amazing events
            </p>
          </div>
          
          <Card className="shadow-warm">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Coming Soon: Event Gallery
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Once our events begin, this section will feature beautiful moments captured 
                during our gatherings, workshops, and celebrations. You'll see the joy, 
                connection, and empowerment that defines our community.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Events;