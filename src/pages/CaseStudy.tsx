
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Building, CheckCircle, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

// Mock case study data
const caseStudiesData = [
  // {
  //   id: "1",
  //   title: 'Financial Tech Transformation',
  //   client: 'Global Financial Services, Inc.',
  //   category: 'Digital Transformation',
  //   duration: '8 months',
  //   year: '2023',
  //   mainImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200',
  //   additionalImages: [
  //     'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  //     'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800',
  //     'https://images.unsplash.com/photo-1590283603385-c1c9cfd24fd6?auto=format&fit=crop&q=80&w=800'
  //   ],
  //   challenge: `
  //     <p>Global Financial Services, a leading financial institution with over 50 years of history, faced significant challenges with their legacy systems:</p>
  //     <ul>
  //       <li>Aging infrastructure that struggled to handle modern transaction volumes</li>
  //       <li>Siloed data across multiple systems, preventing holistic customer insights</li>
  //       <li>Increasing maintenance costs for legacy applications</li>
  //       <li>Difficulty integrating with modern fintech services</li>
  //       <li>Slow time-to-market for new financial products</li>
  //     </ul>
  //     <p>The company recognized the need for a comprehensive digital transformation to maintain its competitive edge in a rapidly evolving financial services landscape.</p>
  //   `,
  //   solution: `
  //     <p>Our team developed a comprehensive transformation strategy that addressed both technical and organizational challenges:</p>
      
  //     <h3>Technical Solutions</h3>
  //     <ul>
  //       <li><strong>Core Banking Platform Modernization:</strong> We replaced the legacy core banking system with a modular, API-first platform that could easily integrate with both internal and external services.</li>
  //       <li><strong>Cloud Migration:</strong> Critical workloads were migrated to a hybrid cloud infrastructure, balancing security requirements with the need for scalability.</li>
  //       <li><strong>Data Lake Implementation:</strong> We created a centralized data lake to unify customer and transaction data from previously siloed systems.</li>
  //       <li><strong>Microservices Architecture:</strong> New applications were developed using a microservices approach, enabling faster iteration and deployment of individual features.</li>
  //     </ul>
      
  //     <h3>Organizational Changes</h3>
  //     <ul>
  //       <li><strong>DevOps Transformation:</strong> We helped the client implement DevOps practices, reducing deployment times from weeks to hours.</li>
  //       <li><strong>Agile Methodology:</strong> Teams were reorganized around agile principles, with cross-functional squads focused on specific business domains.</li>
  //       <li><strong>Digital Skills Training:</strong> Comprehensive training programs were developed to upskill existing staff on new technologies and methodologies.</li>
  //     </ul>
  //   `,
  //   results: [
  //     '45% improvement in operational efficiency',
  //     '60% faster time-to-market for new financial products',
  //     '30% reduction in IT infrastructure costs',
  //     '99.99% system availability, up from 98.5%',
  //     'Enhanced customer experience with real-time transaction processing',
  //     'Successful integration with 15+ third-party fintech services'
  //   ],
  //   testimonial: {
  //     quote: "The transformation project delivered by TechConsult has revolutionized our ability to serve our customers and compete in the digital banking space. What impressed us most was their holistic approach, addressing not just our technology challenges but also helping us evolve our organizational culture.",
  //     author: "Sarah Johnson",
  //     title: "CIO, Global Financial Services, Inc."
  //   },
  //   relatedProjects: ["2", "3"]
  // },
  {
    id: "1",
    title: 'XDR Agent: Background Security Monitoring for Windows',
    client: 'Confidential Inc.',
    category: 'Endpoint Security',
    duration: '6 months',
    year: '2023',
    mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      // 'https://images.unsplash.com/photo-1560264418-81a4c46e7b2f?auto=format&fit=crop&q=80&w=800',
      // 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      // 'https://images.unsplash.com/photo-1590608897129-79b5257a2a48?auto=format&fit=crop&q=80&w=800'
    ],
    challenge: `
      <p>Our client required a robust solution to ensure continuous, behind-the-scenes monitoring of their Windows endpoints. Existing security systems were not sufficient for real-time threat detection and often required manual oversight, leaving gaps in the security posture.</p>
      <ul>
        <li>The need for a stealth, low-impact background application that continuously monitors Windows machines.</li>
        <li>Integration of multiple security tools to provide comprehensive data collection.</li>
        <li>Reliable and secure transmission of security data to a centralized monitoring server.</li>
        <li>Simplifying the deployment process with support for both interactive and silent installations.</li>
      </ul>
      <p>The challenge was to design a solution that could run continuously without impacting system performance while seamlessly integrating with existing security frameworks.</p>
    `,
    solution: `
      <p>We developed XDR Agent as a lightweight Windows service that operates silently in the background, ensuring continuous security monitoring without disrupting user activities.</p>
      
      <h3>Technical Solutions</h3>
      <ul>
        <li><strong>Seamless Tool Integration:</strong> Incorporated leading security tools such as Wazuh, Velocirotor, OSQUERY, and Sysmon to capture a wide range of security metrics.</li>
        <li><strong>Robust Installation Framework:</strong> Created a Python-based installer and uninstaller using Tkinter, enabling both interactive and silent installations.</li>
        <li><strong>Centralized Data Transmission:</strong> Utilized Kafka to reliably send security data from the agent to a centralized XDR server hosted on Linux, capable of handling multiple agent connections simultaneously.</li>
        <li><strong>Server-Side Architecture:</strong> Developed a Python-based server featuring a Flask application and supporting shell scripts (install.sh and uninstall.sh) for managing Kafka and secure file transfers.</li>
      </ul>
      
      <h3>Operational Enhancements</h3>
      <ul>
        <li><strong>Automated Startup:</strong> Configured the agent to launch automatically when the Windows machine starts, ensuring uninterrupted monitoring.</li>
        <li><strong>On-Demand Data Requests:</strong> Enabled analysts to request specific security information from the server, facilitating targeted investigations.</li>
      </ul>
    `,
    results: [
      'Achieved 99% uptime for continuous security monitoring',
      'Reduced manual intervention by 80%',
      'Enhanced real-time threat detection and response capabilities',
      'Streamlined installation process with support for silent deployments',
      'Successfully integrated multiple industry-leading security tools'
    ],
    testimonial: {
      quote: "XDR Agent has revolutionized our approach to endpoint security. Its seamless integration and robust monitoring capabilities have significantly reduced our security risks.",
      author: "John Doe",
      title: "Head of IT Security, Confidential Inc."
    },
    relatedProjects: ["2", "3"]
  },
  {
    id: "2",
    title: 'CSOC Platform: Integrated Security Operations Center',
    client: 'Security Operations Inc.',
    category: 'Security Operations',
    duration: '12 months',
    year: '2023',
    mainImage: 'https://images.unsplash.com/photo-1581092580494-7a50ef58e0c6?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1601924571001-8eae4d36a94b?auto=format&fit=crop&q=80&w=800'
    ],
    challenge: `
      <p>Modern security operations demand a unified platform capable of managing diverse modules and integrations efficiently. Our client needed a CSOC platform that could seamlessly combine various functionalities into one cohesive system, ensuring comprehensive incident tracking, alerting, and reporting.</p>
      <ul>
        <li>Integrate multiple systems including <strong>ZOHO</strong> for incident tracking and <strong>Wazuh</strong> for alert generation.</li>
        <li>Utilize <strong>Opensearch</strong> as a robust database solution to facilitate efficient search, data management, and aggregation.</li>
        <li>Develop a reporting module to generate both scheduled and on-demand reports with flexible time selections.</li>
        <li>Support full read and write operations for incidents via a seamless integration with ZOHO.</li>
        <li>Manage a wide array of assets including agents, servers, network devices, and maintain SBOM (Software Bill of Materials).</li>
        <li>Implement specialized modules such as Hunt, Logic Service (backed by MongoDB), and an Admin Portal for user and tenant management.</li>
        <li>Enable multi-tenancy to support isolated operations for different user groups.</li>
        <li>Visualize alert relationships and event connections through an Event Map powered by <strong>Neo4j</strong>.</li>
        <li>Offer add-on modules for Documents, Lists, and Task Creation & Assignment to boost collaboration.</li>
      </ul>
      <p>The challenge was to build a scalable, feature-rich platform that integrated these diverse functionalities while maintaining high performance and an intuitive user experience.</p>
    `,
    solution: `
      <p>Our team architected and developed a robust CSOC platform that unified essential security operations into a single, cohesive system.</p>
      
      <h3><strong>Technical Solutions</strong></h3>
      <ul>
        <li><strong>Unified Integration Framework:</strong> Seamlessly integrated key systems such as <strong>ZOHO</strong> for incident management, <strong>Wazuh</strong> for alert monitoring, and <strong>Opensearch</strong> for efficient data search and aggregation.</li>
        <li><strong>Comprehensive Module Development:</strong> Developed core modules including incidents, alerts, hunt, and logic services (leveraging MongoDB), along with an intuitive Admin Portal for user and tenant management.</li>
        <li><strong>Advanced Event Mapping:</strong> Leveraged <strong>Neo4j</strong> to create an interactive event map, enabling visual analysis of alert connections and multi-layered incident correlation.</li>
        <li><strong>Add-on Functionalities:</strong> Built additional modules for document management, list creation, and task assignment to enhance operational collaboration.</li>
        <li><strong>Robust Backend & Frontend:</strong> Engineered the backend with Python using Flask APIs and crafted a dynamic frontend with Angular for a responsive, user-friendly interface.</li>
      </ul>
      
      <h3><strong>Operational Enhancements</strong></h3>
      <ul>
        <li><strong>Scalability & Multi-Tenancy:</strong> Designed the platform to support multi-tenancy, ensuring secure and isolated operations across diverse user groups.</li>
        <li><strong>Real-Time Reporting:</strong> Enabled both scheduled and on-demand reporting to provide timely insights and data-driven decision-making.</li>
        <li><strong>Streamlined Incident Management:</strong> Integrated robust incident tracking and alerting mechanisms to enhance the overall security posture.</li>
      </ul>
    `,
    results: [
      'Reduced incident response time by 50%',
      'Unified management of over 1,000 security assets',
      'Enhanced data search and aggregation with Opensearch',
      'Improved operational efficiency with real-time reporting',
      'Increased collaboration and reduced manual intervention by 60%'
    ],
    testimonial: {
      quote: "The CSOC platform has revolutionized our security operations. Its integrated modules and real-time insights have empowered our team to respond to threats swiftly and efficiently.",
      title: "CIO, Security Operations Inc."
    },
    relatedProjects: ["1", "3"]
  },
  {
    id: "3",
    title: 'Retail Cloud Migration',
    client: 'Global Retail Enterprises',
    category: 'Cloud Solutions',
    duration: '6 months',
    year: '2023',
    mainImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
    additionalImages: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1546621066-89b2bc6564ce?auto=format&fit=crop&q=80&w=800'
    ],
    challenge: `<p>Global Retail Enterprises needed to migrate from on-premise infrastructure to AWS...</p>`,
    solution: `<p>We developed a phased migration strategy prioritizing critical workloads...</p>`,
    results: [
      '30% reduction in infrastructure costs',
      'Improved scalability during peak sales periods',
      '99.95% uptime, exceeding previous on-premise metrics',
      'Enhanced disaster recovery capabilities',
      'Reduced time-to-market for new e-commerce features'
    ],
    testimonial: {
      quote: "The cloud migration has revolutionized our IT operations and given us the agility we needed to compete in today's retail landscape.",
      author: "James Miller",
      title: "VP of Technology, Global Retail Enterprises"
    },
    relatedProjects: ["1", "2"]
  }
];

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = caseStudiesData.find(project => project.id === id);
  
  // Find related projects
  const relatedProjects = project 
    ? caseStudiesData.filter(rp => project.relatedProjects.includes(rp.id)) 
    : [];

  if (!project) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold">Case study not found</h1>
        <p className="mt-4">The case study you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link to="/portfolio">Back to Portfolio</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <Button variant="ghost" asChild className="mb-6 -ml-2">
          <Link to="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center">
                <Building className="mr-2 h-4 w-4 text-primary" />
                <span><strong>Client:</strong> {project.client}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <span><strong>Year:</strong> {project.year}</span>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-10">
            <img 
              src={project.mainImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {project.additionalImages.map((img, index) => (
              <div key={index} className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={img} 
                  alt={`${project.title} - additional image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2>The Challenge</h2>
              <div dangerouslySetInnerHTML={{ __html: project.challenge }} />
              
              <h2>Our Solution</h2>
              <div dangerouslySetInnerHTML={{ __html: project.solution }} />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Results</h2>
              <div className="bg-primary/5 rounded-lg p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {project.testimonial && (
              <div className="border-l-4 border-primary pl-6 py-2">
                <blockquote className="text-lg italic mb-4">"{project.testimonial.quote}"</blockquote>
                <div className="font-medium">{project.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{project.testimonial.title}</div>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {relatedProjects.length > 0 && (
        <AnimatedSection delay={0.2} className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map(relatedProject => (
                <Link 
                  key={relatedProject.id} 
                  to={`/portfolio/${relatedProject.id}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedProject.mainImage} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{relatedProject.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedProject.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
};

export default CaseStudy;
