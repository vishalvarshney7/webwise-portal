
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  // Categories for filtering
  const categories = ['All', 'Digital Transformation', 'Cloud Solutions', 'Cybersecurity', 'Software Development', 'Data Analytics'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Financial Tech Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      description: 'Modernized legacy systems for a leading financial institution, improving operational efficiency by 45%.',
      results: [
        'Reduced transaction processing time by 60%',
        'Improved customer satisfaction scores by 35%',
        'Decreased operational costs by 25%',
        'Enhanced data security and compliance'
      ]
    },
    {
      id: 2,
      title: 'Healthcare Data Platform',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800',
      description: 'Built a HIPAA-compliant data analytics platform that reduced reporting time by 60%.',
      results: [
        'Consolidated data from 12 disparate systems',
        'Implemented real-time dashboards for clinical metrics',
        'Enabled predictive analytics for patient outcomes',
        'Reduced report generation time from days to minutes'
      ]
    },
    {
      id: 3,
      title: 'Retail Cloud Migration',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
      description: 'Migrated on-premise infrastructure to AWS, cutting costs by 30% and improving scalability.',
      results: [
        'Reduced infrastructure costs by 30%',
        'Improved system uptime to 99.99%',
        'Enabled seamless scaling during peak shopping seasons',
        'Enhanced disaster recovery capabilities'
      ]
    },
    {
      id: 4,
      title: 'Manufacturing IoT Implementation',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      description: 'Developed an IoT solution for a manufacturing plant to monitor equipment performance and predict maintenance needs.',
      results: [
        'Reduced unplanned downtime by 35%',
        'Increased overall equipment effectiveness by 15%',
        'Extended equipment lifespan by 20%',
        'Generated $2.5M in annual savings'
      ]
    },
    {
      id: 5,
      title: 'E-commerce Security Enhancement',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
      description: 'Implemented comprehensive security measures for a major e-commerce platform, preventing potential breaches.',
      results: [
        'Eliminated critical vulnerabilities identified in security audit',
        'Implemented advanced fraud detection system',
        'Achieved PCI DSS compliance',
        'Reduced fraudulent transactions by 75%'
      ]
    },
    {
      id: 6,
      title: 'Supply Chain Analytics',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800',
      description: 'Created a supply chain analytics platform that improved inventory management and forecast accuracy.',
      results: [
        'Reduced inventory holding costs by 22%',
        'Improved demand forecast accuracy by 35%',
        'Decreased stockouts by 65%',
        'Optimized logistics routes saving 15% in transportation costs'
      ]
    },
    {
      id: 7,
      title: 'Multi-cloud Strategy',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800',
      description: 'Developed and implemented a multi-cloud strategy for a global enterprise, optimizing costs and performance.',
      results: [
        'Reduced cloud spending by 28%',
        'Eliminated vendor lock-in risks',
        'Improved global service availability',
        'Enhanced disaster recovery capabilities'
      ]
    },
    {
      id: 8,
      title: 'Banking App Modernization',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800',
      description: 'Redesigned and rebuilt a legacy banking application as a modern, responsive web and mobile platform.',
      results: [
        'Increased mobile banking adoption by 70%',
        'Reduced development cycle time by 50%',
        'Improved application performance by 300%',
        'Enhanced user experience with 98% positive feedback'
      ]
    },
    {
      id: 9,
      title: 'Insurance Digital Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      description: 'Led a comprehensive digital transformation for an insurance company, digitizing core processes and enhancing customer experience.',
      results: [
        'Reduced policy issuance time from 7 days to 15 minutes',
        'Decreased claims processing time by 60%',
        'Improved customer satisfaction scores by 45%',
        'Enabled data-driven underwriting decisions'
      ]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our case studies to see how we've helped businesses across industries leverage technology for growth and innovation.
          </p>
        </AnimatedSection>
      </section>

      {/* Filter Categories */}
      <section className="py-8 border-y border-gray-200 dark:border-gray-800/50 sticky top-[72px] bg-background/80 backdrop-blur-lg z-10">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={0.1 * (index % 3)}>
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mt-auto">
                      <h4 className="font-medium mb-2">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-2 shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group">
                        View case study
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Let's build something amazing together
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Ready to discuss your project? Our team of experts is here to help you achieve your business goals.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
