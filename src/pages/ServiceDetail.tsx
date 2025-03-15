
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ExternalLink, Mail } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

// Mock services data
const servicesData = [
  {
    id: "it-strategy",
    title: "IT Strategy",
    icon: "LineChart",
    shortDescription: "Align your technology initiatives with business goals to create a roadmap for digital success.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1500",
    overview: `
      <p>In today's rapidly evolving digital landscape, having a robust IT strategy is no longer optional—it's essential for business survival and growth. Our IT Strategy consulting service helps organizations align their technology initiatives with business objectives, creating a clear roadmap for digital success.</p>
      
      <p>We understand that technology should serve as an enabler for your business goals, not as a constraint. Our strategic approach ensures that your IT investments deliver measurable business value while positioning your organization for future growth and innovation.</p>
    `,
    features: [
      {
        title: "IT Assessment & Diagnostics",
        description: "Comprehensive evaluation of your current IT landscape, identifying strengths, weaknesses, opportunities, and threats."
      },
      {
        title: "Technology Roadmap Development",
        description: "Creation of a multi-year technology roadmap aligned with business objectives and market trends."
      },
      {
        title: "Digital Transformation Strategy",
        description: "Development of strategies to leverage digital technologies for business model innovation and operational excellence."
      },
      {
        title: "IT Governance Framework",
        description: "Establishment of governance structures to ensure IT initiatives remain aligned with business priorities."
      },
      {
        title: "Technology Investment Planning",
        description: "Prioritization of IT investments based on business impact, ROI, and strategic importance."
      },
      {
        title: "Enterprise Architecture Design",
        description: "Creation of a blueprint for organizing logic for business processes and IT infrastructure."
      }
    ],
    benefits: [
      "Strategic alignment between IT initiatives and business objectives",
      "Optimized technology investments with clear ROI",
      "Enhanced competitive advantage through technology innovation",
      "Reduced IT complexity and technical debt",
      "Improved agility and responsiveness to market changes",
      "Clearer communication between IT and business stakeholders"
    ],
    approach: `
      <h3>Our Methodology</h3>
      <p>Our approach to IT strategy consulting follows a proven four-phase methodology:</p>
      
      <ol>
        <li><strong>Discover:</strong> We begin by understanding your business context, objectives, and current IT capabilities through stakeholder interviews, document reviews, and technical assessments.</li>
        <li><strong>Analyze:</strong> We evaluate your current state against industry benchmarks and best practices, identifying gaps and opportunities for improvement.</li>
        <li><strong>Develop:</strong> We create a tailored IT strategy and roadmap that addresses your specific business needs and technological requirements.</li>
        <li><strong>Implement:</strong> We provide guidance and support during the execution phase, ensuring your strategy delivers the expected outcomes.</li>
      </ol>
      
      <p>Throughout this process, we maintain close collaboration with your leadership team, ensuring that the resulting strategy has broad organizational support and alignment.</p>
    `,
    caseStudies: [
      {
        id: "1",
        title: "Financial Tech Transformation",
        description: "How we helped a leading financial institution align their IT strategy with their digital transformation goals."
      }
    ],
    faq: [
      {
        question: "How long does it typically take to develop an IT strategy?",
        answer: "The timeline varies based on organizational size and complexity, but typically ranges from 6-12 weeks for mid-sized organizations."
      },
      {
        question: "How often should we update our IT strategy?",
        answer: "We recommend reviewing your IT strategy annually and performing a comprehensive update every 2-3 years, or whenever significant business or market changes occur."
      },
      {
        question: "How do you ensure our IT strategy aligns with our business goals?",
        answer: "We begin every engagement by thoroughly understanding your business strategy and objectives. Throughout the process, we maintain close collaboration with business stakeholders to ensure alignment."
      }
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    icon: "Cloud",
    shortDescription: "Leverage cloud technologies for scalability, flexibility, and cost-effective operations.",
    heroImage: "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?auto=format&fit=crop&q=80&w=1500",
    overview: `<p>Our Cloud Solutions services help organizations leverage cloud technologies effectively...</p>`,
    features: [
      {
        title: "Cloud Readiness Assessment",
        description: "Evaluation of your current infrastructure and applications for cloud migration suitability."
      },
      {
        title: "Cloud Migration Strategy",
        description: "Development of a comprehensive plan for moving workloads to the cloud."
      }
    ],
    benefits: [
      "Enhanced scalability to meet changing business demands",
      "Reduced capital expenditure on IT infrastructure",
      "Improved business continuity and disaster recovery capabilities",
      "Increased agility and faster time-to-market"
    ],
    approach: `<p>Our cloud migration methodology follows industry best practices...</p>`,
    caseStudies: [
      {
        id: "3",
        title: "Retail Cloud Migration",
        description: "How we helped a major retailer migrate to AWS, reducing costs by 30% and improving scalability."
      }
    ],
    faq: [
      {
        question: "Which cloud platform is best for our business?",
        answer: "The optimal cloud platform depends on your specific requirements, existing technology stack, and business objectives. We provide vendor-neutral guidance to help you make the right choice."
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "ShieldCheck",
    shortDescription: "Protect your business from threats with comprehensive security solutions and best practices.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1500",
    overview: `<p>Our Cybersecurity services help organizations protect their critical assets...</p>`,
    features: [
      {
        title: "Security Risk Assessment",
        description: "Identification and evaluation of security risks across your organization."
      },
      {
        title: "Security Architecture Design",
        description: "Development of robust security architectures to protect against modern threats."
      }
    ],
    benefits: [
      "Enhanced protection of critical business assets",
      "Reduced risk of data breaches and associated costs",
      "Improved compliance with regulatory requirements",
      "Increased customer trust and brand reputation"
    ],
    approach: `<p>Our security-first approach ensures protection at every layer...</p>`,
    caseStudies: [],
    faq: [
      {
        question: "How do you stay current with evolving security threats?",
        answer: "Our security experts continuously monitor threat intelligence sources and participate in professional security communities to stay ahead of emerging threats."
      }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    icon: "Code",
    shortDescription: "Custom software solutions designed to address your unique business challenges.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1500",
    overview: `<p>Our Software Development services deliver custom applications tailored to your needs...</p>`,
    features: [],
    benefits: [],
    approach: `<p>We follow an agile development methodology...</p>`,
    caseStudies: [],
    faq: []
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    icon: "LineChart",
    shortDescription: "Transform your data into actionable insights that drive better business decisions.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1500",
    overview: `<p>Our Data Analytics services help organizations make sense of their data...</p>`,
    features: [],
    benefits: [],
    approach: `<p>Our data-driven approach combines business and technical expertise...</p>`,
    caseStudies: [
      {
        id: "2",
        title: "Healthcare Data Platform",
        description: "How we helped a healthcare provider build a HIPAA-compliant analytics platform."
      }
    ],
    faq: []
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    icon: "Globe",
    shortDescription: "Reimagine your business processes and customer experiences for the digital age.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1500",
    overview: `<p>Our Digital Transformation services help organizations evolve in the digital era...</p>`,
    features: [],
    benefits: [],
    approach: `<p>We take a holistic approach to digital transformation...</p>`,
    caseStudies: [
      {
        id: "1",
        title: "Financial Tech Transformation",
        description: "How we helped a financial institution modernize its systems and processes."
      }
    ],
    faq: []
  }
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(service => service.id === id);

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
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-24" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.heroImage})` 
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Button variant="outline" asChild className="mb-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
              <Link to="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-3xl">{service.shortDescription}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Overview Section */}
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div 
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: service.overview }}
            />
          </div>
        </AnimatedSection>

        {/* Features Section */}
        {service.features.length > 0 && (
          <AnimatedSection delay={0.1} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Features</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Benefits Section */}
        {service.benefits.length > 0 && (
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Benefits</h2>
              <div className="bg-primary/5 rounded-lg p-6">
                <ul className="grid gap-4 md:grid-cols-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Approach Section */}
        {service.approach && (
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <div 
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: service.approach }}
              />
            </div>
          </AnimatedSection>
        )}

        {/* Case Studies Section */}
        {service.caseStudies.length > 0 && (
          <AnimatedSection delay={0.4} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Related Case Studies</h2>
              <div className="space-y-6">
                {service.caseStudies.map((caseStudy, index) => (
                  <Link 
                    key={index} 
                    to={`/portfolio/${caseStudy.id}`}
                    className="group block bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                      <ExternalLink className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-muted-foreground mt-2">{caseStudy.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* FAQ Section */}
        {service.faq.length > 0 && (
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {service.faq.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* CTA Section */}
        <AnimatedSection delay={0.6} className="mt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss how our {service.title} services can help your business thrive.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Our Team
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ServiceDetail;
