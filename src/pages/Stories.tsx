import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Quote, 
  Heart, 
  Star, 
  Users, 
  ArrowRight,
  PlayCircle,
  Image as ImageIcon
} from 'lucide-react';

const Stories = () => {
  const featuredStories = [
    {
      name: "Maria Santos",
      title: "From Isolation to Leadership",
      location: "Originally from El Salvador",
      story: "When I first arrived, I felt invisible. The language barrier made everything seem impossible. Through HerShield's support circles, I found my voice and learned that my experiences had value. Today, I mentor other women and have started my own catering business serving traditional Salvadoran food.",
      impact: "Now mentors 15+ women",
      category: "Entrepreneurship",
      featured: true
    },
    {
      name: "Dr. Aisha Patel",
      title: "Rebuilding a Medical Career",
      location: "Originally from Pakistan",
      story: "As a doctor in Pakistan, I had built a successful career. Moving to the US meant starting over completely. HerShield connected me with other professional women who understood the struggle of credential recognition. Their support helped me navigate the complex process of medical licensing.",
      impact: "Now practices at local clinic",
      category: "Professional Development"
    },
    {
      name: "Fatima Al-Rashid",
      title: "Finding Safety and Strength",
      location: "Originally from Syria",
      story: "Leaving everything behind was the hardest decision I've ever made, but staying wasn't safe for my children and me. HerShield's emergency support program helped us find housing and connected us with legal aid. More importantly, they helped me believe in myself again.",
      impact: "Now advocates for other refugees",
      category: "Safety & Support"
    },
    {
      name: "Carmen Rodriguez",
      title: "Education Opens Doors",
      location: "Originally from Guatemala",
      story: "I dropped out of school at 14 to work and help my family. In the US, HerShield's education program helped me get my GED and apply for college. Learning wasn't easy at my age, but the other women in my study group became my sisters.",
      impact: "Graduated with nursing degree",
      category: "Education"
    }
  ];

  const carryTheFlameStories = [
    {
      quote: "Every woman I help reminds me that we're stronger together than we ever could be alone.",
      author: "Priya Sharma",
      role: "Former participant, now volunteer coordinator"
    },
    {
      quote: "I carry the flame by teaching other women that their dreams are valid, no matter where they started.",
      author: "Amara Hassan",
      role: "Entrepreneur and mentor"
    },
    {
      quote: "My journey was difficult, but it prepared me to light the way for others walking the same path.",
      author: "Elena Vasquez",
      role: "Legal advocate"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Star className="h-16 w-16 text-accent mx-auto mb-6" />
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-6">
            Stories of Transformation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from remarkable women who found strength, built community, 
            and transformed not just their own lives but the lives of others around them.
          </p>
        </div>

        {/* Featured Story */}
        <section className="mb-20">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lifted bg-gradient-empowering text-white overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <Badge className="bg-white/20 text-white mb-4">Featured Story</Badge>
                    <h2 className="font-serif text-3xl font-bold mb-4">
                      {featuredStories[0].title}
                    </h2>
                    <p className="text-xl opacity-90 mb-6">
                      {featuredStories[0].name} • {featuredStories[0].location}
                    </p>
                    <Quote className="h-8 w-8 mb-4 opacity-80" />
                    <p className="text-lg leading-relaxed mb-6 opacity-90">
                      {featuredStories[0].story}
                    </p>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-accent text-accent-foreground">
                        {featuredStories[0].impact}
                      </Badge>
                      <Badge variant="outline" className="border-white text-white">
                        {featuredStories[0].category}
                      </Badge>
                    </div>
                  </div>
                  <div className="bg-white/10 flex items-center justify-center p-8 lg:p-12">
                    <div className="text-center">
                      <PlayCircle className="h-24 w-24 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">Watch Maria's Story</p>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Story Grid */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              More Inspiring Journeys
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each story represents courage, resilience, and the power of community support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.slice(1).map((story, index) => (
              <Card key={index} className="shadow-warm hover:shadow-lifted transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">{story.category}</Badge>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {story.name} • {story.location}
                    </p>
                  </div>
                  
                  <Quote className="h-6 w-6 text-accent mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {story.story.substring(0, 150)}...
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className="bg-accent/20 text-accent text-xs">
                      {story.impact}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Carry the Flame Campaign */}
        <section className="mb-20">
          <Card className="shadow-lifted bg-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Carry the Flame Campaign
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Women who have been supported by HerShield now carry the flame forward, 
                  becoming mentors, leaders, and advocates in their own communities.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {carryTheFlameStories.map((flame, index) => (
                  <Card key={index} className="shadow-warm">
                    <CardContent className="p-6 text-center">
                      <Quote className="h-8 w-8 text-accent mx-auto mb-4" />
                      <p className="text-muted-foreground italic mb-6 leading-relaxed">
                        "{flame.quote}"
                      </p>
                      <div>
                        <p className="font-semibold text-primary">{flame.author}</p>
                        <p className="text-sm text-muted-foreground">{flame.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-lg text-muted-foreground mb-6">
                  Ready to carry the flame in your community?
                </p>
                <Button asChild>
                  <Link to="/get-involved">
                    Join Our Movement <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Story Formats */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
              Stories in Every Format
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We share our community's stories through various mediums to reach and inspire more people
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-warm text-center">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Written Stories</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  In-depth written narratives capturing the full journey of transformation
                </p>
                <Badge variant="outline">Coming Soon</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm text-center">
              <CardContent className="p-8">
                <ImageIcon className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Photo Essays</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Visual storytelling through powerful photography and personal moments
                </p>
                <Badge variant="outline">In Development</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-warm text-center">
              <CardContent className="p-8">
                <PlayCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">Video Stories</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Personal video testimonials sharing journeys of growth and empowerment
                </p>
                <Badge variant="outline">Planning Phase</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="text-center">
          <Card className="shadow-warm">
            <CardContent className="p-8 lg:p-12">
              <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">
                Share Your Story
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your journey matters. If HerShield has been part of your story, 
                we'd love to help you share it with others who might find hope in your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact">
                    Share Your Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/get-involved">Get Involved</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Stories;