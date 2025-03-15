
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Code, Cloud, ShieldCheck, LineChart, Cpu, Globe, Workflow, BarChart2, Bot, Server } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Service Data
  const servicesData = {
    'it-strategy': {
      title: 'IT Strategy',
      icon: <LineChart className="h-16 w-16 text-primary" />,
      description: 'Strategic planning and roadmapping to align your technology initiatives with business goals.',
      longDescription: `Our IT Strategy services help businesses create a clear vision and roadmap for their technology investments. 
      We work closely with your leadership team to understand your business objectives and develop strategies that leverage technology 
      to achieve those goals. Whether you're looking to transform your digital capabilities, optimize your IT infrastructure, or 
      improve your technology governance, our experienced consultants can help you navigate the complex technology landscape.`,
      benefits: [
        'Align IT investments with business objectives',
        'Prioritize technology initiatives for maximum impact',
        'Reduce costs through strategic planning',
        'Create a clear technology roadmap',
        'Improve IT governance and decision-making',
        'Identify technology opportunities and risks'
      ],
      expertise: [
        'Digital Strategy Development',
        'Technology Roadmapping',
        'IT Governance Frameworks',
        'Enterprise Architecture',
        'IT Service Management',
        'Technology Portfolio Management'
      ],
      relatedProjects: [1, 9],
      process: [
        {
          title: 'Assessment',
          description: 'We begin by assessing your current technology landscape, business goals, and market position.'
        },
        {
          title: 'Strategic Planning',
          description: 'Develop a comprehensive strategy that aligns technology initiatives with business objectives.'
        },
        {
          title: 'Roadmap Development',
          description: 'Create a detailed implementation roadmap with clear milestones and success metrics.'
        },
        {
          title: 'Governance Framework',
          description: 'Establish governance frameworks to ensure effective execution and ongoing alignment.'
        }
      ]
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      icon: <Cloud className="h-16 w-16 text-primary" />,
      description: 'Leverage cloud technologies for scalability, flexibility, and cost-effective operations.',
      longDescription: `Our Cloud Solutions services help businesses harness the power of cloud computing to enhance agility, 
      scalability, and efficiency. We provide comprehensive cloud strategy, migration, and optimization services tailored to 
      your specific business needs. Whether you're looking to migrate existing applications to the cloud, build cloud-native 
      solutions, or optimize your current cloud environment, our team of cloud experts can help you achieve your goals.`,
      benefits: [
        'Reduce infrastructure costs and capital expenditure',
        'Improve scalability and flexibility to meet changing business needs',
        'Enhance business continuity and disaster recovery capabilities',
        'Accelerate time-to-market for new products and services',
        'Improve collaboration and remote work capabilities',
        'Access advanced technologies like AI and machine learning'
      ],
      expertise: [
        'Cloud Strategy and Roadmap Development',
        'Cloud Migration and Modernization',
        'Multi-cloud and Hybrid Cloud Architecture',
        'Cloud Security and Compliance',
        'Cloud Cost Optimization',
        'Serverless Application Development'
      ],
      relatedProjects: [3, 7],
      process: [
        {
          title: 'Assessment',
          description: 'Evaluate your current infrastructure and applications for cloud readiness.'
        },
        {
          title: 'Strategy Development',
          description: 'Develop a cloud strategy aligned with your business goals and requirements.'
        },
        {
          title: 'Migration Planning',
          description: 'Create a detailed migration plan with prioritized workloads and timelines.'
        },
        {
          title: 'Implementation',
          description: 'Execute the migration with minimal disruption to your business operations.'
        },
        {
          title: 'Optimization',
          description: 'Continuously optimize your cloud environment for performance and cost.'
        }
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      icon: <ShieldCheck className="h-16 w-16 text-primary" />,
      description: 'Protect your business from threats with comprehensive security solutions and best practices.',
      longDescription: `In today's digital landscape, cybersecurity is more important than ever. Our Cybersecurity services 
      help businesses protect their critical assets, data, and reputation from evolving cyber threats. We offer comprehensive 
      security assessments, strategy development, and implementation services to ensure your organization has robust defenses 
      against potential threats. Our approach combines people, processes, and technology to create a holistic security program.`,
      benefits: [
        'Protect sensitive data and intellectual property',
        'Reduce the risk of security breaches and their financial impact',
        'Maintain customer trust and brand reputation',
        'Ensure compliance with industry regulations and standards',
        'Develop a security-aware culture within your organization',
        'Respond effectively to security incidents and minimize damage'
      ],
      expertise: [
        'Security Assessments and Audits',
        'Security Strategy and Program Development',
        'Penetration Testing and Vulnerability Management',
        'Security Architecture Design',
        'Identity and Access Management',
        'Security Awareness Training',
        'Incident Response Planning'
      ],
      relatedProjects: [5],
      process: [
        {
          title: 'Assessment',
          description: 'Conduct a comprehensive security assessment to identify vulnerabilities and risks.'
        },
        {
          title: 'Strategy Development',
          description: 'Develop a security strategy aligned with your business objectives and risk appetite.'
        },
        {
          title: 'Implementation',
          description: 'Implement security controls and technologies to address identified risks.'
        },
        {
          title: 'Training',
          description: 'Provide security awareness training to employees to build a security-conscious culture.'
        },
        {
          title: 'Monitoring',
          description: 'Continuously monitor and update security measures to address evolving threats.'
        }
      ]
    },
    'software-development': {
      title: 'Software Development',
      icon: <Code className="h-16 w-16 text-primary" />,
      description: 'Custom software solutions designed to address your unique business challenges.',
      longDescription: `Our Software Development services help businesses create custom applications that address specific 
      business challenges and provide competitive advantages. We follow a collaborative, user-centered approach to deliver 
      high-quality software solutions that meet your business requirements. From web and mobile applications to enterprise 
      systems, our experienced development team can bring your ideas to life.`,
      benefits: [
        'Address specific business challenges with tailored solutions',
        'Streamline operations and improve efficiency',
        'Enhance customer experience and satisfaction',
        'Integrate disparate systems and data sources',
        'Scale your technology capabilities as your business grows',
        'Maintain full ownership and control of your software'
      ],
      expertise: [
        'Web Application Development',
        'Mobile Application Development',
        'Enterprise Software Development',
        'API Development and Integration',
        'Legacy System Modernization',
        'DevOps Implementation',
        'Quality Assurance and Testing'
      ],
      relatedProjects: [8, 4],
      process: [
        {
          title: 'Discovery',
          description: 'Understand your business needs, user requirements, and technical constraints.'
        },
        {
          title: 'Design',
          description: 'Create software architecture and user experience designs.'
        },
        {
          title: 'Development',
          description: 'Build the solution using agile methodologies and best practices.'
        },
        {
          title: 'Testing',
          description: 'Ensure quality through comprehensive testing and validation.'
        },
        {
          title: 'Deployment',
          description: 'Deploy the solution to production with minimal disruption.'
        },
        {
          title: 'Support',
          description: 'Provide ongoing support and enhancements as needed.'
        }
      ]
    },
    'data-analytics': {
      title: 'Data Analytics',
      icon: <Cpu className="h-16 w-16 text-primary" />,
      description: 'Transform your data into actionable insights that drive better business decisions.',
      longDescription: `Our Data Analytics services help businesses leverage their data to gain valuable insights and make 
      better decisions. We help you collect, process, analyze, and visualize data to uncover patterns, trends, and opportunities 
      that might otherwise remain hidden. Whether you're looking to understand customer behavior, optimize operations, or identify 
      new market opportunities, our data analytics expertise can help you turn your data into a strategic asset.`,
      benefits: [
        'Make data-driven decisions based on accurate insights',
        'Identify trends and patterns that impact your business',
        'Improve customer understanding and personalization',
        'Optimize operational efficiency and reduce costs',
        'Predict future outcomes and prepare accordingly',
        'Measure and improve business performance'
      ],
      expertise: [
        'Data Strategy and Architecture',
        'Business Intelligence and Reporting',
        'Predictive Analytics and Modeling',
        'Big Data Processing and Analysis',
        'Data Visualization and Dashboards',
        'Machine Learning and AI Integration',
        'Data Governance and Quality Management'
      ],
      relatedProjects: [2, 6],
      process: [
        {
          title: 'Data Assessment',
          description: 'Evaluate your current data sources, quality, and analytical capabilities.'
        },
        {
          title: 'Strategy Development',
          description: 'Develop a data strategy aligned with your business objectives.'
        },
        {
          title: 'Infrastructure Setup',
          description: 'Implement the necessary data infrastructure and tools.'
        },
        {
          title: 'Analysis and Modeling',
          description: 'Conduct data analysis and develop predictive models as needed.'
        },
        {
          title: 'Visualization',
          description: 'Create intuitive dashboards and visualizations to communicate insights.'
        },
        {
          title: 'Knowledge Transfer',
          description: 'Train your team to use and maintain the analytics solution.'
        }
      ]
    },
    'digital-transformation': {
      title: 'Digital Transformation',
      icon: <Globe className="h-16 w-16 text-primary" />,
      description: 'Reimagine your business processes and customer experiences for the digital age.',
      longDescription: `Our Digital Transformation services help businesses adapt and thrive in the digital era. We work with 
      you to reimagine your business models, processes, and customer experiences using digital technologies. Digital transformation 
      is not just about technology—it's about changing how your business operates and delivers value to customers. Our comprehensive 
      approach addresses technology, people, and processes to create sustainable change.`,
      benefits: [
        'Improve customer experience and engagement',
        'Increase operational efficiency and agility',
        'Enable new business models and revenue streams',
        'Enhance employee productivity and collaboration',
        'Gain competitive advantage in your industry',
        'Build a culture of innovation and continuous improvement'
      ],
      expertise: [
        'Digital Strategy Development',
        'Business Process Reengineering',
        'Customer Experience Design',
        'Digital Workplace Transformation',
        'Change Management and Adoption',
        'Digital Innovation and Ideation',
        'Technology Selection and Implementation'
      ],
      relatedProjects: [1, 9],
      process: [
        {
          title: 'Assessment',
          description: 'Evaluate your digital maturity and identify transformation opportunities.'
        },
        {
          title: 'Vision and Strategy',
          description: 'Develop a digital vision and strategy aligned with your business goals.'
        },
        {
          title: 'Roadmap Development',
          description: 'Create a transformation roadmap with prioritized initiatives.'
        },
        {
          title: 'Implementation',
          description: 'Execute the transformation initiatives using agile methodologies.'
        },
        {
          title: 'Change Management',
          description: 'Manage the people side of change to ensure successful adoption.'
        },
        {
          title: 'Continuous Improvement',
          description: 'Continuously measure, learn, and improve your digital capabilities.'
        }
      ]
    }
  };

  const service = id ? servicesData[id as keyof typeof servicesData] : null;

  // Projects data for related projects
  const projectsData = [
    {
      id: 1,
      title: 'Financial Tech Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      title: 'Healthcare Data Platform',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      title: 'Retail Cloud Migration',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      title: 'Manufacturing IoT Implementation',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 5,
      title: 'E-commerce Security Enhancement',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 6,
      title: 'Supply Chain Analytics',
      category: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 7,
      title: 'Multi-cloud Strategy',
      category: 'Cloud Solutions',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 8,
      title: 'Banking App Modernization',
      category: 'Software Development',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 9,
      title: 'Insurance Digital Transformation',
      category: 'Digital Transformation',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    }
  ];

  // Find related projects
  const relatedProjects = service 
    ? projectsData.filter(project => service.relatedProjects.includes(project.id)) 
    : [];

  if (!service) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="mt-4">The service you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link to="/services">Back to Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-32">
      <div className="container">
        <AnimatedSection>
          <Button variant="ghost" asChild className="mb-6 -ml-2">
            <Link to="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {service.description}
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center bg-primary/5 rounded-2xl p-10">
              <div className="flex items-center justify-center w-32 h-32 rounded-full bg-primary/10">
                {service.icon}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground whitespace-pre-line">
              {service.longDescription}
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits and Expertise Section */}
        <AnimatedSection className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-2xl font-display font-bold mb-6">Our Expertise</h2>
              <ul className="space-y-4">
                {service.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Process Section */}
        <AnimatedSection className="mb-20">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <AnimatedSection className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <Link 
                  key={project.id} 
                  to={`/portfolio/${project.id}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our {service.title} services can address your specific business challenges.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServiceDetail;
