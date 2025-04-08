import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedTechnology from "@/components/ui/AnimatedTechnology";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TechnologyExpertise = () => {
  const tabs = [
    {
      id: "ai-data",
      name: "Big Data & AI",
      technologies: [
        { name: "Databricks", icon: "/technology/databricks.png" },
        { name: "Snowflake", icon: "/technology/snowflake.jpg" },
        { name: "Spark", icon: "/technology/spark.png" },
        { name: "Airflow", icon: "/technology/airflow.png" },
        { name: "Hadoop", icon: "/technology/hadoop.png" },
        { name: "BigQuery", icon: "/technology/bigquery.jpg" },
        { name: "Llama", icon: "/technology/llama.png" },
        { name: "Open AI", icon: "/technology/openai.jpg" },
        { name: "Claude", icon: "/technology/claude.png" },
        { name: "Grok", icon: "/technology/grok.png" },
        { name: "Gemini", icon: "/technology/gemini.png" },
        { name: "Deepseek", icon: "/technology/deepseek.jpeg" },
      ],
    },
    {
      id: "security",
      name: "DevSecOps & Security Solutions",
      technologies: [
        { name: "SonarQube", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "Checkmarx", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "OWASP ZAP", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "Burp Suite", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "SIEM", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "OAuth", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "JWT", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "OpenID Connect", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "Fireblocks", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "Chainanalysis", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
        { name: "SumSub", icon: "/lovable-uploads/1629f2ed-aec8-4280-8966-94c436a0158c.png" },
      ],
    },
    {
      id: "database",
      name: "Database & Queues",
      technologies: [
        { name: "Open Search", icon: "/technology/openSearch.png" },
        { name: "Elastic Search", icon: "/technology/elasticSearch.png" },
        { name: "MySQL", icon: "/technology/mysql.png" },
        { name: "PostgreSQL", icon: "/technology/PostgreSQL.png" },
        { name: "Oracle", icon: "/technology/oracle.png" },
        { name: "MongoDB", icon: "/technology/mongodb.jpg" },
        { name: "Cassandra", icon: "/technology/cassendra.jpeg" },
        { name: "DynamoDB", icon: "/technology/dynamo.jpg" },
        { name: "Redis", icon: "/technology/redis.jpg" },
        { name: "Kafka", icon: "/technology/kafka.jpg" },
        { name: "HBase", icon: "/technology/Hbase.png" },
        { name: "Neo4J", icon: "/technology/neo4j.png" },
        { name: "RabbitMQ", icon: "/technology/rabbitMq.png" },
        { name: "Amazon SQS", icon: "/technology/amazonSqs.png" },
        { name: "Redis(Pub/Sub)", icon: "/technology/reddisPubSub.png" },
        { name: "Active MQ", icon: "/technology/activeMq.png" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & Security",
      technologies: [
        { name: "Azure", icon: "/technology/azure.png" },
        { name: "AWS", icon: "/technology/aws.png" },
        { name: "Google Cloud", icon: "/technology/gcp.png" },
        { name: "Kubernetes", icon: "/technology/kubernetes.png" },
        { name: "Terraform", icon: "/technology/terraform.png" },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section - Changed background to white */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/20 mix-blend-overlay" />
          <div className="text-[400px] font-bold text-gray-200 whitespace-nowrap animate-slow-slide">
            Technology
          </div>
        </div>
        <div className="container relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center text-gray-800">
              Technology Expertise
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver robust and future-ready strategies,
              including:
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies Tab Section - Improved colors and layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <Tabs defaultValue="ai-data" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger 
                  value="ai-data"
                  className="px-6 py-3 text-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg"
                >
                  Big Data & AI
                </TabsTrigger>
                <TabsTrigger 
                  value="security"
                  className="px-6 py-3 text-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg"
                >
                  DevSecOps & Security
                </TabsTrigger>
                <TabsTrigger 
                  value="database"
                  className="px-6 py-3 text-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg"
                >
                  Database & Queues
                </TabsTrigger>
                <TabsTrigger 
                  value="cloud"
                  className="px-6 py-3 text-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white rounded-lg"
                >
                  Cloud & Security
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai-data" className="mt-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {tabs[0].technologies.map((tech, index) => (
                    <AnimatedTechnology 
                      key={tech.name} 
                      name={tech.name}
                      icon={tech.icon}
                      className="bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-blue-200"
                    />
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {tabs[1].technologies.map((tech, index) => (
                    <AnimatedTechnology 
                      key={tech.name} 
                      name={tech.name}
                      icon={tech.icon}
                      className="bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-blue-200"
                    />
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="database" className="mt-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {tabs[2].technologies.map((tech, index) => (
                    <AnimatedTechnology 
                      key={tech.name} 
                      name={tech.name}
                      icon={tech.icon}
                      className="bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-blue-200"
                    />
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="cloud" className="mt-6">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {tabs[3].technologies.map((tech, index) => (
                    <AnimatedTechnology 
                      key={tech.name} 
                      name={tech.name}
                      icon={tech.icon}
                      className="bg-white border-2 border-blue-100 hover:border-blue-300 shadow-sm hover:shadow-blue-200"
                    />
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section - Improved color contrast */}
      <section className="py-16 bg-blue-100 text-gray-800">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Need expert technology consulting?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We can help you navigate the complex technology landscape and implement solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">
                  Contact Us <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-300 hover:bg-blue-50">
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default TechnologyExpertise;
