import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Search, 
  Briefcase, 
  Heart, 
  Home,
  GraduationCap,
  Scale,
  Phone,
  Globe,
  Users,
  ArrowRight
} from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: Briefcase,
      title: "Employment & Career",
      count: 12,
      description: "Job search guides, resume templates, interview preparation",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
    },
    {
      icon: Heart,
      title: "Mental Health & Wellness",
      count: 8,
      description: "Culturally sensitive mental health resources and support",
      color: "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400"
    },
    {
      icon: Home,
      title: "Housing & Safety",
      count: 10,
      description: "Housing assistance, safety planning, emergency resources",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400"
    },
    {
      icon: GraduationCap,
      title: "Education & Skills",
      count: 15,
      description: "Learning resources, skill development, certification guides",
      color: "bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400"
    },
    {
      icon: Scale,
      title: "Legal & Immigration",
      count: 9,
      description: "Know your rights, immigration guides, legal resources",
      color: "bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400"
    },
    {
      icon: Users,
      title: "Community & Support",
      count: 6,
      description: "Support groups, cultural resources, community connections",
      color: "bg-pink-50 text-pink-600 dark:bg-pink-950/50 dark:text-pink-400"
    }
  ];

  const featuredResources = [
    {
      title: "Complete Job Search Toolkit",
      description: "Comprehensive guide including resume templates, cover letter examples, and interview strategies",
      type: "PDF Guide",
      languages: ["English", "Spanish", "Arabic"],
      downloads: 1247,
      featured: true
    },
    {
      title: "Mental Health Resource Directory",
      description: "Directory of culturally competent mental health providers and crisis support contacts",
      type: "Directory",
      languages: ["English", "Spanish", "Farsi"],
      downloads: 892
    },
    {
      title: "Immigration Rights Checklist",
      description: "Know your rights during immigration encounters and important contact information",
      type: "Checklist",
      languages: ["English", "Spanish", "French"],
      downloads: 1156
    },
    {
      title: "Financial Literacy Workbook",
      description: "Step-by-step guide to building credit, managing money, and financial planning",
      type: "Workbook",
      languages: ["English", "Spanish"],
      downloads: 743
    }
  ];

  const emergencyContacts = [
    {
      service: "Crisis Hotline",
      number: "988",
      description: "24/7 mental health crisis support"
    },
    {
      service: "Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "National domestic violence support"
    },
    {
      service: "Immigration Legal Aid",
      number: "1-800-354-0365",
      description: "Free immigration legal assistance"
    },
    {
      service: "HerShield Emergency Support",
      number: "(555) 123-4567",
      description: "Our 24/7 emergency support line"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <FileText className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Resources Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access comprehensive resources, guides, and tools designed specifically 
            for immigrant women. All materials are culturally sensitive and available 
            in multiple languages.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search resources by topic, language, or keyword..." 
              className="pl-10 pr-4 py-3 text-lg"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Phone className="h-8 w-8 text-red-600" />
                <h2 className="font-serif text-2xl font-bold text-red-800 dark:text-red-400">
                  Emergency Contacts
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{contact.service}</h3>
                      <Badge className="bg-red-600 text-white">{contact.number}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{contact.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resource Categories */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find resources organized by the areas that matter most to you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lifted transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary">{category.title}</h3>
                      <Badge variant="outline" className="text-xs">{category.count} resources</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Browse Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular and comprehensive guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className={`shadow-warm hover:shadow-lifted transition-all duration-300 ${resource.featured ? 'border-accent' : ''}`}>
                <CardContent className="p-6">
                  {resource.featured && (
                    <Badge className="mb-4 bg-accent">Most Popular</Badge>
                  )}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-primary mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {resource.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>{resource.type}</span>
                        <span>•</span>
                        <span>{resource.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <div className="flex space-x-1">
                        {resource.languages.map((lang, langIndex) => (
                          <Badge key={langIndex} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resource Request */}
        <section className="mb-20">
          <Card className="shadow-warm bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Can't Find What You Need?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  We're constantly expanding our resource library. Let us know what you're looking for.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-4 mb-6">
                  <Input placeholder="What type of resource are you looking for?" />
                  <Input placeholder="Preferred language(s)" />
                  <Input placeholder="Your email (optional - for updates)" />
                </div>
                <div className="text-center">
                  <Button size="lg">
                    Request Resource
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Support */}
        <section className="text-center">
          <Card className="shadow-warm">
            <CardContent className="p-8 lg:p-12">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                Need Personal Support?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                While our resources are comprehensive, sometimes you need personal guidance. 
                Our support team is here to help connect you with the right services and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Contact Support <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/get-involved">Join Our Community</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Resources;