
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CheckCircle2, ArrowRight, Code, Cloud, ShieldCheck, LineChart, Cpu, Globe, Workflow, BarChart2, Bot, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Services data
  const services = [
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: 'IT Strategy',
      description: 'Align your technology initiatives with business goals to create a roadmap for digital success.',
      benefits: [
        'Strategic technology roadmapping',
        'IT governance frameworks',
        'Business-IT alignment',
        'Technology stack assessment'
      ],
      cta: '/contact'
    },
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: 'Cloud Solutions',
      description: 'Leverage cloud technologies for scalability, flexibility, and cost-effective operations.',
      benefits: [
        'Cloud migration strategy',
        'Multi-cloud architecture',
        'Cloud optimization & cost management',
        'Serverless application development'
      ],
      cta: '/contact'
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: 'Cybersecurity',
      description: 'Protect your business from threats with comprehensive security solutions and best practices.',
      benefits: [
        'Security assessments & audits',
        'Penetration testing',
        'Security architecture design',
        'Compliance management (GDPR, HIPAA, PCI DSS)'
      ],
      cta: '/contact'
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: 'Software Development',
      description: 'Custom software solutions designed to address your unique business challenges.',
      benefits: [
        'Custom application development',
        'Legacy system modernization',
        'API development & integration',
        'DevOps implementation'
      ],
      cta: '/contact'
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights that drive better business decisions.',
      benefits: [
        'Data strategy & architecture',
        'Business intelligence solutions',
        'Predictive analytics',
        'Data governance & quality management'
      ],
      cta: '/contact'
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: 'Digital Transformation',
      description: 'Reimagine your business processes and customer experiences for the digital age.',
      benefits: [
        'Digital maturity assessment',
        'Customer experience design',
        'Process automation',
        'Change management'
      ],
      cta: '/contact'
    },
    {
      icon: <Workflow className="h-12 w-12 text-primary" />,
      title: 'IT Infrastructure',
      description: 'Design, implement, and manage robust IT infrastructure that supports your business needs.',
      benefits: [
        'Infrastructure assessment & planning',
        'Network design & optimization',
        'Server virtualization',
        'Disaster recovery planning'
      ],
      cta: '/contact'
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-primary" />,
      title: 'Business Intelligence',
      description: 'Gain valuable insights from your data with advanced BI tools and dashboards.',
      benefits: [
        'Dashboard development',
        'Self-service BI implementation',
        'Data visualization',
        'Reporting automation'
      ],
      cta: '/contact'
    },
    {
      icon: <Bot className="h-12 w-12 text-primary" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI and ML to automate processes and uncover new opportunities.',
      benefits: [
        'AI readiness assessment',
        'Machine learning model development',
        'AI strategy & roadmapping',
        'Computer vision & NLP solutions'
      ],
      cta: '/contact'
    }
  ];

  // Our approach steps
  const approachSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business goals, challenges, and current technology landscape through in-depth discussions and assessments.'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Based on our findings, we develop a strategic roadmap with clear recommendations, priorities, and timelines.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our expert team executes the plan, implementing solutions with minimal disruption to your business operations.'
    },
    {
      number: '04',
      title: 'Optimization & Support',
      description: 'We continuously monitor, optimize, and support the implemented solutions to ensure they deliver maximum value.'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT consulting services to help your business leverage technology for growth and competitive advantage.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={0.1 * (index % 3)}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium mb-2">Key Benefits:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={service.cta} 
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                    >
                      Learn more 
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Approach</h2>
            <p className="section-subtitle">
              We follow a structured approach to deliver consistent, high-quality results across all our engagements.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={0.1 * index}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm h-full relative">
                  <div className="text-5xl font-display font-bold text-gray-100 dark:text-gray-800 absolute top-6 right-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 relative z-10">{step.title}</h3>
                  <p className="text-muted-foreground relative z-10">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              We have deep expertise across a wide range of industries, allowing us to deliver tailored solutions that address industry-specific challenges.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government', 'Non-profit', 'Energy', 'Transportation', 'Media', 'Professional Services'].map((industry, index) => (
              <AnimatedSection key={industry} delay={0.05 * index}>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-800 text-center hover:border-primary/50 transition-colors">
                  <p className="font-medium">{industry}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Contact us today to discuss how our services can address your specific business challenges.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
