
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    content: "TechConsult helped us completely transform our IT infrastructure. Their team was professional, knowledgeable, and delivered results ahead of schedule. The ROI we've seen from their recommendations has been outstanding.",
    author: "Sarah Johnson",
    title: "CTO, FinanceHub Inc.",
    image: "https://images.unsplash.com/photo-1611432579699-484f7990b127?w=100&h=100&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    content: "Working with TechConsult on our cloud migration strategy was a game-changer. They took the time to understand our unique challenges and delivered a tailored solution that exceeded our expectations.",
    author: "Michael Chen",
    title: "VP of Technology, MediCare Solutions",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    content: "The cybersecurity assessment conducted by TechConsult identified critical vulnerabilities we weren't aware of. Their remediation plan was clear, actionable, and has significantly improved our security posture.",
    author: "David Rodriguez",
    title: "CISO, Retail Innovations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mb-12">
              Don't just take our word for it—see what our clients have to say about working with us.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatedSection key={testimonials[activeIndex].id} direction="fade">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
              <Quote className="h-16 w-16 text-white/30 mb-6" />
              <p className="text-xl md:text-2xl mb-8 font-display">
                "{testimonials[activeIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white/30">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold">{testimonials[activeIndex].author}</h4>
                  <p className="text-white/70 text-sm">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
