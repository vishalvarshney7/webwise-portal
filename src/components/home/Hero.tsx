
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-2 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              <span className="block w-2 h-2 rounded-full bg-primary mr-2"></span>
              Leading IT Consulting Services
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <span className="text-gradient">Transform</span> your business with technology
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-left" style={{ animationDelay: '0.5s' }}>
              We provide strategic IT consulting services to help businesses leverage technology for growth, efficiency, and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left" style={{ animationDelay: '0.7s' }}>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-secondary transition-colors"
              >
                About Us
              </Link>
            </div>
            
            <div className="pt-6 flex items-center gap-6 animate-fade-in-left" style={{ animationDelay: '0.9s' }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-primary flex items-center justify-center text-white font-medium">T</div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-blue-500 flex items-center justify-center text-white font-medium">C</div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-indigo-500 flex items-center justify-center text-white font-medium">S</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">500+</span> companies worldwide
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-3xl opacity-30 animate-float"></div>
            <div className="relative glass-card rounded-2xl p-2 overflow-hidden border-2 border-white/20 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
                alt="IT consulting team working on digital transformation" 
                className="w-full h-full object-cover rounded-xl"
                loading="lazy"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute top-6 -right-14 w-44 glass-card p-4 rounded-lg shadow-lg border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-muted-foreground">Success Rate</div>
                <div className="text-xl font-display font-bold">98.7%</div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
                  <div className="h-2 bg-primary rounded-full" style={{ width: '98.7%' }}></div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-44 glass-card p-4 rounded-lg shadow-lg border border-white/20 animate-float" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }}>
                <div className="text-xs text-muted-foreground">Projects Completed</div>
                <div className="text-xl font-display font-bold">1,200+</div>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
