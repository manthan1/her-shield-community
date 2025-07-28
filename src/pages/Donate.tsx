import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { 
  Heart, 
  CreditCard, 
  Calendar, 
  Shield, 
  Gift,
  Users,
  GraduationCap,
  Home
} from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(60);
  const [isMonthly, setIsMonthly] = useState(false);

  const donationTiers = [
    { amount: 30, impact: "Provides one woman with a starter resource kit" },
    { amount: 60, impact: "Funds a workshop session for 10 women", featured: true },
    { amount: 120, impact: "Supports one woman through a month-long program" },
    { amount: 300, impact: "Covers emergency assistance for a family in crisis" },
    { amount: 600, impact: "Funds a complete support circle for three months" },
    { amount: 1200, impact: "Sponsors comprehensive services for one woman for a year" }
  ];

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education & Skills",
      percentage: 35,
      description: "Language classes, professional development, and certification programs"
    },
    {
      icon: Heart,
      title: "Mental Health",
      percentage: 25,
      description: "Counseling services, therapy sessions, and crisis intervention"
    },
    {
      icon: Users,
      title: "Community Support",
      percentage: 20,
      description: "Support circles, cultural events, and peer mentorship programs"
    },
    {
      icon: Home,
      title: "Emergency Aid",
      percentage: 20,
      description: "Housing assistance, safety planning, and crisis support"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your donation directly impacts the lives of immigrant women in our community. 
            Every contribution helps create safe spaces and opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lifted">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-4">Make a Donation</h2>
                  
                  {/* Monthly/One-time Toggle */}
                  <div className="flex bg-secondary rounded-lg p-1 mb-8 w-fit">
                    <button
                      onClick={() => setIsMonthly(false)}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        !isMonthly 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setIsMonthly(true)}
                      className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                        isMonthly 
                          ? 'bg-primary text-primary-foreground' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Calendar className="h-4 w-4 mr-2 inline" />
                      Monthly
                    </button>
                  </div>

                  {/* Donation Amounts */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {donationTiers.map((tier) => (
                      <button
                        key={tier.amount}
                        onClick={() => setSelectedAmount(tier.amount)}
                        className={`relative p-4 rounded-lg border-2 transition-all text-left ${
                          selectedAmount === tier.amount
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        {tier.featured && (
                          <Badge className="absolute -top-2 left-2 bg-accent">Most Popular</Badge>
                        )}
                        <div className="text-2xl font-bold text-primary mb-2">
                          ${tier.amount}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {tier.impact}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Or enter a custom amount:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                      <input
                        type="number"
                        value={selectedAmount}
                        onChange={(e) => setSelectedAmount(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                </div>

                {/* Donation Summary */}
                <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                  <h3 className="font-serif text-lg font-bold text-primary mb-4">
                    Your {isMonthly ? 'Monthly' : 'One-time'} Donation
                  </h3>
                  <div className="flex justify-between items-center text-xl font-bold text-primary">
                    <span>Total:</span>
                    <span>${selectedAmount}{isMonthly ? '/month' : ''}</span>
                  </div>
                  {isMonthly && (
                    <p className="text-sm text-muted-foreground mt-2">
                      You can modify or cancel your monthly donation at any time.
                    </p>
                  )}
                </div>

                {/* Payment Button */}
                <Button size="lg" className="w-full">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Donate ${selectedAmount} {isMonthly ? 'Monthly' : 'Now'}
                </Button>

                {/* Security Note */}
                <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 mr-2" />
                  Secure payment processing
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact & Information */}
          <div className="space-y-8">
            {/* Where Your Money Goes */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-6">
                  Where Your Donation Goes
                </h3>
                <div className="space-y-6">
                  {impactAreas.map((area, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <area.icon className="h-5 w-5 text-accent mr-2" />
                          <span className="font-medium text-sm">{area.title}</span>
                        </div>
                        <span className="text-sm font-bold text-accent">{area.percentage}%</span>
                      </div>
                      <div className="bg-secondary rounded-full h-2 mb-2">
                        <div 
                          className="bg-accent rounded-full h-2" 
                          style={{ width: `${area.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tax Information */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Tax Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-medium text-accent mb-2">501(c)(3) Tax-Exempt Status</p>
                    <p className="text-muted-foreground">
                      HerShield is a registered 501(c)(3) nonprofit organization. 
                      Your donation is tax-deductible to the fullest extent allowed by law.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-medium text-foreground mb-1">EIN: 88-1234567</p>
                    <p className="text-muted-foreground">
                      You will receive a tax receipt via email immediately after your donation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Ways to Give */}
            <Card className="shadow-warm">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  Other Ways to Support
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Gift className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-sm">Corporate Sponsorship</p>
                      <p className="text-xs text-muted-foreground">Partner with us for greater impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-sm">Volunteer Your Time</p>
                      <p className="text-xs text-muted-foreground">Contribute your skills and expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <p className="font-medium text-sm">In-Kind Donations</p>
                      <p className="text-xs text-muted-foreground">Goods and services we can use</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact Stories */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Your Impact in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how donations like yours are transforming lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">$30</div>
                <p className="font-medium mb-4">Resource Kit Impact</p>
                <p className="text-sm text-muted-foreground">
                  "The welcome kit I received helped me feel less alone in my first weeks here. 
                  It contained practical information that I desperately needed." - Maria
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">$120</div>
                <p className="font-medium mb-4">Program Participation</p>
                <p className="text-sm text-muted-foreground">
                  "The job readiness program gave me confidence to apply for positions I never 
                  thought possible. I'm now working in my dream field." - Aisha
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">$300</div>
                <p className="font-medium mb-4">Emergency Support</p>
                <p className="text-sm text-muted-foreground">
                  "When I had to leave suddenly, HerShield helped me find safe housing and 
                  connected me with legal support. They saved my life." - Fatima
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;
