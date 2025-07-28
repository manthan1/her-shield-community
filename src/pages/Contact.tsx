import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  MessageSquare,
  Heart,
  AlertTriangle
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <MessageSquare className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to support you. Whether you need help, want to get involved, 
            or have questions about our services, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lifted">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    All communications are confidential.
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
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="subject">How can we help you? *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="support">I need support services</SelectItem>
                        <SelectItem value="volunteer">I want to volunteer</SelectItem>
                        <SelectItem value="partnership">Partnership opportunities</SelectItem>
                        <SelectItem value="donation">Donation questions</SelectItem>
                        <SelectItem value="events">Event information</SelectItem>
                        <SelectItem value="resources">Resource requests</SelectItem>
                        <SelectItem value="feedback">Feedback or suggestions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="preferredLanguage">Preferred Language</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="arabic">Arabic</SelectItem>
                        <SelectItem value="farsi">Farsi</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="other">Other (please specify in message)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about how we can help you or how you'd like to get involved..."
                      rows={5}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like us to respond?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="any">Any method is fine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 mt-1 flex-shrink-0" />
                      <p>
                        Your privacy is important to us. All information shared will be kept confidential 
                        and used only to provide you with the support and services you've requested.
                      </p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@hershield.org</p>
                      <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Mon-Fri, 9am-5pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">
                        123 Community Lane<br />
                        Support City, SC 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="shadow-warm bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-serif text-lg font-bold text-red-800 dark:text-red-400">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300 mb-4">
                  If you're in immediate danger or need crisis support, please contact:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Emergency Services:</span>
                    <span className="font-bold">911</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Crisis Hotline:</span>
                    <span className="font-bold">988</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HerShield Emergency:</span>
                    <span className="font-bold">(555) 123-HELP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Safe Reporting */}
            <Card className="shadow-warm bg-accent/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-lg font-bold text-primary">
                    Safe Reporting
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Need to report a concern about our services or have feedback that you'd 
                  prefer to share anonymously? Use our secure reporting form.
                </p>
                <Button variant="outline" className="w-full">
                  Anonymous Feedback Form
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-bold text-primary mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Join WhatsApp Community
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Newsletter Signup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-20">
          <Card className="shadow-warm bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                  We're Here for You
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Remember, reaching out for support is a sign of strength, not weakness. 
                  Our team is trained to provide culturally sensitive, confidential support.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Confidential</h3>
                  <p className="text-sm text-muted-foreground">
                    All communications are kept strictly confidential
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Culturally Sensitive</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team understands the unique challenges you face
                  </p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">Multilingual</h3>
                  <p className="text-sm text-muted-foreground">
                    Support available in multiple languages
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;