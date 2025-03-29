
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import TechnologyExpertise from "./TechnologyExpertise";
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, BarChart3, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 border-y border-gray-200 dark:border-gray-800/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">500+</div>
                  <div className="text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">1,200+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex items-center space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold">98.7%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <Services />

      {/* Technology Expertise Section */}
      <TechnologyExpertise />
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Let's discuss how our IT consulting services can help you achieve your business goals.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
