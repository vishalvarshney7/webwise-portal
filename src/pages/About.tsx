
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle2, Globe, BarChart2, Users, Award, Compass } from 'lucide-react';

const About = () => {
  // Team members data
  const team = [
    {
      name: "Rachit",
      role: "Leadership Team Member",
      image: "/image.jpeg",
      bio: "Rachit brings a wealth of experience in leadership and innovation, driving success across multiple domains."
    },
    {
      name: "Tanmay",
      role: "Leadership Team Member",
      image: "/image.jpeg",
      bio: "Tanmay specializes in strategic planning and operational excellence, ensuring seamless execution of projects."
    },
    {
      name: "Vishal",
      role: "Leadership Team Member",
      image: "/image.jpeg",
      bio: "Vishal is known for his expertise in technology and business integration, delivering impactful solutions."
    }
  ];

  // Company values
  const values = [
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality solutions that exceed client expectations."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We embrace innovation and stay at the forefront of emerging technologies to provide cutting-edge solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with clients as trusted partners."
    },
    {
      icon: <Compass className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, building trust through transparency and honesty."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Client Success",
      description: "Our ultimate goal is client success. We measure our achievements by the business outcomes we deliver."
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Continuous Improvement",
      description: "We're committed to continuous improvement, consistently refining our approach and methodologies."
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            About <span className="text-gradient">TechConsult</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of experienced IT consultants dedicated to helping businesses leverage technology for growth and competitive advantage.
          </p>
        </AnimatedSection>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-3xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                  alt="TechConsult team working together" 
                  className="relative z-10 rounded-xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-6 text-lg">
                <p>
                  Founded in 2010, TechConsult was born from a vision to bridge the gap between business strategy and technology implementation. Our founder, Jennifer Matthews, recognized that many businesses were struggling to keep pace with rapid technological change and needed a partner to guide them through digital transformation.
                </p>
                <p>
                  Over the past decade, we've grown from a small team of technology enthusiasts to a comprehensive IT consulting firm serving clients across industries. Throughout our journey, our mission has remained constant: to help businesses leverage technology as a strategic asset for growth and competitive advantage.
                </p>
                <p>
                  Today, TechConsult is recognized as a leader in IT consulting, known for our deep technical expertise, business acumen, and client-centric approach. With a team of over 100 consultants, we've successfully completed more than 1,200 projects for 500+ clients worldwide.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              Our values guide everything we do—from how we interact with clients to how we deliver solutions and build our team.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.1 * index}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm h-full">
                  <div className="mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">
              Our leadership team brings decades of experience across IT strategy, software development, cybersecurity, and business consulting.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {team.map((member, index) => (
    <AnimatedSection key={member.name} delay={0.1 * index}>
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group h-full">
        <div className="aspect-square overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-display font-bold">{member.name}</h3>
          <p className="text-primary font-medium mb-3">{member.role}</p>
          <p className="text-muted-foreground text-sm">{member.bio}</p>
        </div>
      </div>
    </AnimatedSection>
  ))}
</div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">4+</div>
                <div className="text-white/80">Years in Business</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">10+</div>
                <div className="text-white/80">Team Members</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="text-5xl font-display font-bold mb-2">20+</div>
                <div className="text-white/80">Certification</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
