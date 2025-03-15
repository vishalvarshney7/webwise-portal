
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, ShieldCheck, LineChart, Cpu, Globe } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const services = [
  {
    icon: <LineChart className="h-12 w-12 text-primary" />,
    title: 'IT Strategy',
    description: 'Align your technology initiatives with business goals to create a roadmap for digital success.',
    link: '/services/it-strategy'
  },
  {
    icon: <Cloud className="h-12 w-12 text-primary" />,
    title: 'Cloud Solutions',
    description: 'Leverage cloud technologies for scalability, flexibility, and cost-effective operations.',
    link: '/services/cloud-solutions'
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-primary" />,
    title: 'Cybersecurity',
    description: 'Protect your business from threats with comprehensive security solutions and best practices.',
    link: '/services/cybersecurity'
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Software Development',
    description: 'Custom software solutions designed to address your unique business challenges.',
    link: '/services/software-development'
  },
  {
    icon: <Cpu className="h-12 w-12 text-primary" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights that drive better business decisions.',
    link: '/services/data-analytics'
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    title: 'Digital Transformation',
    description: 'Reimagine your business processes and customer experiences for the digital age.',
    link: '/services/digital-transformation'
  }
];

const Services = () => {
  return (
    <section className="section bg-gray-50 dark:bg-gray-950">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer a comprehensive range of IT consulting services to help your business thrive in the digital landscape.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * index}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                >
                  Learn more 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
