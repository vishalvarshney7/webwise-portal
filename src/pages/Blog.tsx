
import React from 'react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Cloud Computing in IT Consulting',
    excerpt: 'Explore how cloud technologies are reshaping the IT consulting landscape and creating new opportunities for businesses.',
    date: 'June 15, 2023',
    category: 'Cloud Computing',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Learn essential cybersecurity measures that small businesses can implement to protect their digital assets.',
    date: 'May 22, 2023',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 3,
    title: 'Digital Transformation: A Strategic Approach',
    excerpt: 'Discover how businesses can navigate digital transformation with a structured and strategic approach.',
    date: 'April 10, 2023',
    category: 'Digital Transformation',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 4,
    title: 'AI Integration in Business Processes',
    excerpt: 'How artificial intelligence is revolutionizing business operations and decision-making processes.',
    date: 'March 5, 2023',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
  },
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">IT Consulting Insights</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest trends, insights, and best practices in the IT consulting industry.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">Read More →</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="text-center">
        <h3 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h3>
        <div className="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button>Subscribe</Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Blog;
