
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const projects = [
  {
    id: 1,
    title: 'Financial Tech Transformation',
    category: 'Digital Transformation',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    description: 'Modernized legacy systems for a leading financial institution, improving operational efficiency by 45%.',
    link: '/portfolio/1'
  },
  {
    id: 2,
    title: 'Healthcare Data Platform',
    category: 'Data Analytics',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600',
    description: 'Built a HIPAA-compliant data analytics platform that reduced reporting time by 60%.',
    link: '/portfolio/2'
  },
  {
    id: 3,
    title: 'Retail Cloud Migration',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600',
    description: 'Migrated on-premise infrastructure to AWS, cutting costs by 30% and improving scalability.',
    link: '/portfolio/3'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="section">
      <div className="container">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">
                Explore some of our best work and see how we've helped businesses achieve their goals.
              </p>
            </div>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors group mt-4 md:mt-0"
            >
              View all projects 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={0.2 * index}>
              <Link 
                to={project.link} 
                className="block group bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all h-full"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                    View case study
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
