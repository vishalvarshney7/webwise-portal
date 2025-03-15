
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';

// Mock blog data - this would normally come from a database or API
const blogPostsData = [
  {
    id: "1",
    title: 'The Future of Cloud Computing in IT Consulting',
    excerpt: 'Explore how cloud technologies are reshaping the IT consulting landscape and creating new opportunities for businesses.',
    date: 'June 15, 2023',
    author: 'David Chen',
    category: 'Cloud Computing',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    content: `
      <p>Cloud computing has transformed the IT landscape, offering unprecedented flexibility, scalability, and cost-efficiency. As businesses increasingly migrate to cloud-based solutions, IT consulting firms must adapt to remain relevant and valuable to their clients.</p>
      
      <h2>The Evolution of Cloud Solutions</h2>
      <p>The cloud computing paradigm has evolved significantly over the past decade. What began as simple storage solutions has expanded into comprehensive platforms capable of handling everything from infrastructure management to complex machine learning operations. This evolution has created both challenges and opportunities for IT consulting firms.</p>
      
      <p>Modern cloud platforms now offer:</p>
      <ul>
        <li>Infrastructure as a Service (IaaS)</li>
        <li>Platform as a Service (PaaS)</li>
        <li>Software as a Service (SaaS)</li>
        <li>Function as a Service (FaaS)</li>
        <li>Machine Learning as a Service (MLaaS)</li>
      </ul>
      
      <h2>Strategic Advantages for Businesses</h2>
      <p>For businesses, cloud adoption offers numerous strategic advantages:</p>
      
      <h3>Cost Optimization</h3>
      <p>Cloud platforms allow businesses to shift from capital expenditure to operational expenditure models, paying only for the resources they use. This can result in significant cost savings, particularly for organizations with fluctuating resource needs.</p>
      
      <h3>Scalability and Flexibility</h3>
      <p>Cloud resources can be scaled up or down almost instantly, allowing businesses to respond quickly to changing demands without investing in physical hardware. This flexibility is particularly valuable in today's fast-paced business environment.</p>
      
      <h3>Enhanced Collaboration</h3>
      <p>Cloud-based tools enable seamless collaboration among team members, regardless of their physical location. This capability has become even more critical with the rise of remote work and distributed teams.</p>
      
      <h2>The Consulting Opportunity</h2>
      <p>For IT consulting firms, the cloud revolution presents significant opportunities to provide value to clients:</p>
      
      <h3>Migration Strategy</h3>
      <p>Many organizations need expert guidance to plan and execute their migration to cloud platforms. Consultants can help identify which workloads are suitable for cloud migration, develop migration strategies, and manage the transition process.</p>
      
      <h3>Architecture Design</h3>
      <p>Designing efficient, secure, and cost-effective cloud architectures requires specialized expertise. Consultants can help clients design architectures that meet their specific needs while maximizing the benefits of cloud platforms.</p>
      
      <h3>Security and Compliance</h3>
      <p>Cloud security presents unique challenges compared to traditional on-premises environments. Consultants can help clients navigate these challenges and ensure their cloud deployments comply with relevant regulations and industry standards.</p>
      
      <h2>Looking Ahead</h2>
      <p>As cloud technologies continue to evolve, IT consulting firms must stay ahead of the curve to provide value to their clients. The future will likely see increased focus on multi-cloud strategies, edge computing integration, and AI-powered cloud management.</p>
      
      <p>By developing expertise in these emerging areas, IT consulting firms can position themselves as valuable partners in their clients' digital transformation journeys.</p>
    `,
    relatedPosts: ["2", "3"]
  },
  {
    id: "2",
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Learn essential cybersecurity measures that small businesses can implement to protect their digital assets.',
    date: 'May 22, 2023',
    author: 'Sarah Johnson',
    category: 'Cybersecurity',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    content: `
      <p>In today's digital landscape, cybersecurity is a critical concern for businesses of all sizes. Small businesses, in particular, face unique challenges as they often lack the resources and expertise of larger organizations while still being attractive targets for cybercriminals.</p>
      
      <h2>The Small Business Security Challenge</h2>
      <p>Small businesses face several challenges when it comes to cybersecurity:</p>
      <ul>
        <li>Limited budget for security investments</li>
        <li>Lack of dedicated IT security staff</li>
        <li>Insufficient security awareness among employees</li>
        <li>The misconception that small businesses aren't targets</li>
      </ul>
      
      <p>Despite these challenges, small businesses can significantly improve their security posture by implementing some essential best practices.</p>
      
      <h2>Essential Security Measures</h2>
      
      <h3>1. Implement Strong Authentication</h3>
      <p>Passwords remain a common point of vulnerability. Small businesses should:</p>
      <ul>
        <li>Enforce strong password policies</li>
        <li>Implement multi-factor authentication (MFA) wherever possible</li>
        <li>Consider using password management solutions</li>
      </ul>
      
      <h3>2. Keep Systems Updated</h3>
      <p>Many cyber attacks exploit known vulnerabilities in outdated software. Regular updates and patches are essential:</p>
      <ul>
        <li>Establish a regular patching schedule</li>
        <li>Enable automatic updates where appropriate</li>
        <li>Regularly audit systems for outdated software</li>
      </ul>
      
      <h3>3. Back Up Critical Data</h3>
      <p>Backups are your last line of defense against ransomware and other data-destructive attacks:</p>
      <ul>
        <li>Follow the 3-2-1 backup rule: three copies, on two different media, with one off-site</li>
        <li>Test backup restoration regularly</li>
        <li>Keep backups isolated from the main network</li>
      </ul>
      
      <h3>4. Train Employees</h3>
      <p>Human error remains a leading cause of security breaches:</p>
      <ul>
        <li>Conduct regular security awareness training</li>
        <li>Simulate phishing attacks to test awareness</li>
        <li>Establish clear security policies and procedures</li>
      </ul>
      
      <h2>Cost-Effective Security Tools</h2>
      <p>Several cost-effective tools can help small businesses improve their security posture:</p>
      <ul>
        <li>Antivirus and anti-malware solutions</li>
        <li>Firewalls (hardware or software)</li>
        <li>Email filtering services</li>
        <li>VPNs for secure remote access</li>
        <li>Cloud-based security solutions with pay-as-you-go models</li>
      </ul>
      
      <h2>Developing an Incident Response Plan</h2>
      <p>Even with preventive measures in place, security incidents can still occur. Having a plan in place can minimize damage:</p>
      <ul>
        <li>Define roles and responsibilities during an incident</li>
        <li>Establish communication protocols</li>
        <li>Document steps for containing and eradicating threats</li>
        <li>Plan for business continuity during recovery</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While cybersecurity can seem overwhelming for small businesses, implementing these essential practices can significantly reduce risk without breaking the budget. Remember that cybersecurity is not a one-time project but an ongoing process of assessment, implementation, and improvement.</p>
    `,
    relatedPosts: ["1", "4"]
  },
  // Additional posts would be added here
  {
    id: "3",
    title: 'Digital Transformation: A Strategic Approach',
    excerpt: 'Discover how businesses can navigate digital transformation with a structured and strategic approach.',
    date: 'April 10, 2023',
    author: 'Michael Rodriguez',
    category: 'Digital Transformation',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    content: `<p>Digital transformation content would go here.</p>`,
    relatedPosts: ["1", "4"]
  },
  {
    id: "4",
    title: 'AI Integration in Business Processes',
    excerpt: 'How artificial intelligence is revolutionizing business operations and decision-making processes.',
    date: 'March 5, 2023',
    author: 'Jennifer Lee',
    category: 'Artificial Intelligence',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
    content: `<p>AI integration content would go here.</p>`,
    relatedPosts: ["2", "3"]
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPostsData.find(post => post.id === id);
  
  // Find related posts
  const relatedPosts = post 
    ? blogPostsData.filter(rp => post.relatedPosts.includes(rp.id)) 
    : [];

  if (!post) {
    return (
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="mt-6">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <Button variant="ghost" asChild className="mb-6 -ml-2">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Tag className="mr-1 h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </AnimatedSection>

      {relatedPosts.length > 0 && (
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedPost.imageUrl} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold group-hover:text-primary transition-colors">{relatedPost.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedPost.date}</p>
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

export default BlogPost;
