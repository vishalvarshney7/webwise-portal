
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
  },
  {
    id: "5",
    title: "Streamlining Data Pipelines: IBM DB2 to Azure Hyperscale DB with Databricks and ADLS – A CDC and Bulk Load Journey",
    excerpt: "Explore a robust architecture for migrating data from IBM DB2 to Azure Hyperscale DB using Databricks, ADLS, and ADF, with detailed insights into CDC, bulk loads, and reconciliation.",
    date: "April 05, 2025",
    author: "Rachit",
    category: "Data Engineering",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    content: `
      <h2>Architecture Overview</h2>
      <p>The proposed solution revolves around extracting data from IBM DB2, processing it through a modern data pipeline, and landing it in Azure Hyperscale DB. The architecture diagram below illustrates the flow:</p>
      <img src="/IbmMigrationArch.png", alt="Architecture Diagram" />
      <h3>Key Components:</h3>
      <ul>
        <li><strong>Source: IBM DB2 (On-Premises)</strong> - Data is captured from DB2 journals using multiple methods (Java Exit Program or IBM InfoSphere CDC). Supports both CDC for real-time changes and bulk loads for historical data.</li>
        <li><strong>Intermediary: Kafka and Databricks</strong> - Kafka serves as a messaging backbone, receiving JSON-formatted CDC data. Databricks, powered by Spark, processes data streams and bulk loads, staging them in ADLS as Delta Lake tables (Raw and Bronze layers).</li>
        <li><strong>Destination: Azure Hyperscale DB</strong> - Final data is validated and loaded into Hyperscale DB, with detailed reconciliation checks ensuring consistency.</li>
        <li><strong>Orchestration: Azure Data Factory (ADF)</strong> - ADF manages workflows, triggering Databricks jobs, and coordinating data movement between ADLS and Hyperscale DB.</li>
        <li><strong>Data Flow</strong> - CDC data flows from DB2 journals → (Java Exit Program or InfoSphere CDC) → Kafka → Spark Streaming → ADLS Delta Lake → Hyperscale DB. Bulk data is ingested via Spark JDBC from DB2 to ADLS, then processed and loaded.</li>
      </ul>
  
      <h2>Technical Implementation</h2>
      <h3>1. CDC Extraction from DB2 Journals</h3>
      <p>Data extraction from DB2 journals can be achieved through multiple approaches, each running on the on-premises DB2 server:</p>
      <h4>a. Java Exit Program</h4>
      <p>A custom Java Exit Program intercepts DB2 journal entries, filters out commit/rollback messages, and pushes relevant changes as JSON to a Kafka topic. This program runs on the DB2 on-premises server.</p>
      <pre><code>import com.ibm.db2.jcc.DB2Journal;
  import org.apache.kafka.clients.producer.KafkaProducer;
  import org.apache.kafka.clients.producer.ProducerRecord;
  import java.util.Properties;
  
  public class Db2CDCExitProgram {
      private static final String KAFKA_TOPIC = "db2_cdc_topic";
      private static KafkaProducer&lt;String, String&gt; producer;
  
      public static void main(String[] args) {
          Properties props = new Properties();
          props.put("bootstrap.servers", "localhost:9092");
          props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
          props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
          producer = new KafkaProducer&lt;&gt;(props);
  
          DB2Journal journal = new DB2Journal();
          journal.registerExitProgram(new Db2CDCExitProgram()::processJournalEntry);
      }
  
      private void processJournalEntry(String entry) {
          if (isValidOperation(entry) && !isCommitOrRollback(entry)) {
              String jsonPayload = formatToJson(entry);
              ProducerRecord&lt;String, String&gt; record = new ProducerRecord&lt;&gt;(KAFKA_TOPIC, jsonPayload);
              producer.send(record);
          }
      }
  
      private boolean isCommitOrRollback(String entry) {
          return entry.contains("COMMIT") || entry.contains("ROLLBACK");
      }
  
      private String formatToJson(String entry) {
          return "{\"op\": \"insert\", \"data\": {\"id\": 1, \"value\": \"test\"}}";
      }
  }
      </code></pre>
      <h4>b. IBM InfoSphere CDC</h4>
      <p>Alternatively, IBM InfoSphere CDC can be deployed on the DB2 on-premises server to capture changes from journals and replicate them to Kafka or ADLS directly. This tool offers a low-code solution with built-in transformation capabilities.</p>
      <ul>
        <li><strong>Configuration</strong>: Set up InfoSphere CDC to monitor DB2 journals and configure a target endpoint (e.g., Kafka topic).</li>
        <li><strong>Advantage</strong>: Reduces custom coding, handles complex transformations, and supports high-volume transactions.</li>
      </ul>
  
      <h3>2. Spark Streaming with Kafka</h3>
      <p>Databricks, hosted in Azure, consumes the Kafka topic using Spark Structured Streaming, inferring the schema dynamically from JSON messages. The processing occurs in the Databricks cluster.</p>
      <pre><code>import org.apache.spark.sql.SparkSession
  import org.apache.spark.sql.streaming.Trigger
  import org.apache.spark.sql.types._
  
  val spark = SparkSession.builder()
    .appName("DB2_CDC_Streaming")
    .getOrCreate()
  
  val schema = StructType(Array(
    StructField("op", StringType, nullable = true),
    StructField("data", StructType(Array(
      StructField("id", IntegerType, nullable = true),
      StructField("value", StringType, nullable = true)
    )), nullable = true)
  ))
  
  val df = spark.readStream
    .format("kafka")
    .option("kafka.bootstrap.servers", "localhost:9092")
    .option("subscribe", "db2_cdc_topic")
    .option("startingOffsets", "earliest")
    .option("inferSchema", "true")
    .load()
    .selectExpr("CAST(value AS STRING) as json")
    .select(from_json($"json", schema).as("data"))
    .select("data.*")
  
  df.writeStream
    .outputMode("append")
    .format("delta")
    .option("checkpointLocation", "/delta/checkpoints/cdc")
    .trigger(Trigger.ProcessingTime("10 seconds"))
    .start("/mnt/adls/bronze/cdc")
      </code></pre>
  
      <h3>3. Bulk Load with Spark JDBC</h3>
      <p>For initial data loads, Spark JDBC connects from the Databricks cluster in Azure to the DB2 on-premises server, ingesting large datasets into the ADLS Raw layer.</p>
      <pre><code>val jdbcDF = spark.read
    .format("jdbc")
    .option("url", "jdbc:db2://localhost:50000/DBNAME")
    .option("dbtable", "SOURCE_TABLE")
    .option("user", "username")
    .option("password", "password")
    .option("driver", "com.ibm.db2.jcc.DB2Driver")
    .load()
  
  jdbcDF.write
    .format("delta")
    .mode("overwrite")
    .save("/mnt/adls/raw/bulk")
      </code></pre>
  
      <h3>4. Delta Lake MERGE Operations</h3>
      <p>Databricks performs UPSERT and DELETE operations on Delta tables, executed within the Databricks cluster.</p>
      <pre><code>MERGE INTO delta.\`/mnt/adls/bronze/cdc\` AS target
  USING (SELECT id, value, op FROM stream_data) AS source
  ON target.id = source.id
  WHEN MATCHED AND source.op = 'delete' THEN DELETE
  WHEN MATCHED AND source.op = 'update' THEN UPDATE SET target.value = source.value
  WHEN NOT MATCHED AND source.op = 'insert' THEN INSERT (id, value) VALUES (source.id, source.value)
      </code></pre>
  
      <h3>5. Orchestration with Azure Data Factory (ADF)</h3>
      <p>ADF, running in the Azure cloud, orchestrates the pipeline:</p>
      <ul>
        <li><strong>Triggers</strong>: Schedules Databricks jobs for streaming and bulk loads.</li>
        <li><strong>Pipelines</strong>: Manages data movement from ADLS to Hyperscale DB using copy activities.</li>
        <li><strong>Monitoring</strong>: Tracks job status and triggers alerts via Azure Monitor.</li>
      </ul>
      <pre><code>{
    "name": "CDC_Pipeline",
    "properties": {
      "activities": [
        {
          "name": "Run_Databricks_Job",
          "type": "DatabricksSparkJob",
          "typeProperties": {
            "existingClusterId": "&lt;cluster-id&gt;",
            "notebookPath": "/Shared/CDC_Processing"
          }
        },
        {
          "name": "CopyToHyperscale",
          "type": "Copy",
          "typeProperties": {
            "source": { "type": "DeltaLakeSource", "storeSettings": { "type": "AzureDataLakeStorage" } },
            "sink": { "type": "AzureSqlDW", "connectionString": "connection-string" }
          }
        }
      ]
    }
  }
      </code></pre>
  
      <h3>6. Reconciliation and Validation</h3>
      <p>Reconciliation ensures data consistency between DB2 and Hyperscale DB, executed as a Databricks job orchestrated by ADF. The following aspects are captured and monitored:</p>
      <ul>
        <li><strong>Row Count Comparison</strong>: Compare total row counts between DB2 source table and Hyperscale DB target table.
          <pre><code>val db2Count = spark.read.jdbc("jdbc:db2://localhost:50000/DBNAME", "SOURCE_TABLE", props).count()
  val hyperscaleCount = spark.read.jdbc("jdbc:sqlserver://hyperscale-db", "TARGET_TABLE", props).count()</code></pre>
        </li>
        <li><strong>Checksum Validation</strong>: Generate and compare checksums (e.g., MD5) for critical columns or entire rows.
          <pre><code>val db2Checksum = spark.sql("SELECT CHECKSUM_AGG(BINARY_CHECKSUM(*)) as chk FROM SOURCE_TABLE").collect()(0)(0)
  val hyperscaleChecksum = spark.sql("SELECT CHECKSUM_AGG(BINARY_CHECKSUM(*)) as chk FROM TARGET_TABLE").collect()(0)(0)
  if (db2Checksum == hyperscaleChecksum) println("Checksums match!") else println("Checksum mismatch!")</code></pre>
        </li>
        <li><strong>Operation-Level Reconciliation</strong>: Track insert, update, and delete operations from CDC logs and validate against target changes. Store operation logs in ADLS: <code>/mnt/adls/reports/cdc_operations</code>.</li>
        <li><strong>Latency Monitoring</strong>: Measure time from journal entry to Hyperscale DB update, logged in ADLS: <code>/mnt/adls/reports/latency</code>.</li>
        <li><strong>Error Tracking</strong>: Capture failed records (e.g., schema mismatches) and store in ADLS: <code>/mnt/adls/reports/errors</code>.
          <pre><code>val errorCount = spark.read.format("delta").load("/mnt/adls/reports/errors").count()
  if (errorCount > 0) println(s"Errors detected: $errorCount")</code></pre>
        </li>
        <li><strong>Reconciliation Reports</strong>: Generate daily/weekly reports in CSV format, uploaded to ADLS and accessible via ADF dashboards.
          <pre><code>val report = spark.sql("SELECT 'Reconciliation Report' as title, db2Count, hyperscaleCount, CASE WHEN db2Count = hyperscaleCount THEN 'Pass' ELSE 'Fail' END as status")
  report.write.format("csv").mode("overwrite").save("/mnt/adls/reports/reconciliation_report")</code></pre>
        </li>
        <li><strong>Monitoring</strong>: Use ADF to schedule reconciliation jobs and integrate with Azure Monitor for alerts on mismatches or latency breaches. Set thresholds (e.g., 5% row count difference) to trigger notifications.</li>
      </ul>
  
      <h2>Where Components Run</h2>
      <ul>
        <li><strong>IBM DB2</strong>: On-premises server (Java Exit Program or InfoSphere CDC).</li>
        <li><strong>Kafka</strong>: On-premises or hybrid cluster (close to DB2 for low latency).</li>
        <li><strong>Databricks</strong>: Azure cloud (processing and ADLS integration).</li>
        <li><strong>ADLS</strong>: Azure cloud (data staging).</li>
        <li><strong>ADF</strong>: Azure cloud (orchestration).</li>
        <li><strong>Hyperscale DB</strong>: Azure cloud (final destination).</li>
      </ul>
  
      <h2>Challenges and Solutions</h2>
      <ol>
        <li><strong>Journal Noise (Commit/Rollback Filtering)</strong>
          <p><strong>Challenge</strong>: DB2 journals contain commit and rollback messages.</p>
          <p><strong>Solution</strong>: Java Exit Program or InfoSphere CDC filters these out.</p>
        </li>
        <li><strong>Schema Evolution</strong>
          <p><strong>Challenge</strong>: Varying schemas from multiple tables.</p>
          <p><strong>Solution</strong>: Spark’s <code>inferSchema=true</code> or InfoSphere’s schema mapping.</p>
        </li>
        <li><strong>Latency and Throughput</strong>
          <p><strong>Challenge</strong>: Real-time CDC vs. bulk load demands.</p>
          <p><strong>Solution</strong>: Spark Streaming for CDC, parallel JDBC for bulk.</p>
        </li>
        <li><strong>Data Consistency</strong>
          <p><strong>Challenge</strong>: Ensuring integrity across systems.</p>
          <p><strong>Solution</strong>: Delta Lake transactions and detailed reconciliation.</p>
        </li>
        <li><strong>Security and Compliance</strong>
          <p><strong>Challenge</strong>: Data encryption in transit.</p>
          <p><strong>Solution</strong>: SSL for Kafka, ADLS encryption.</p>
        </li>
      </ol>
  
      <h2>Conclusion</h2>
      <p>This architecture provides a scalable solution for migrating data from IBM DB2 to Azure Hyperscale DB using Databricks, ADLS, and ADF. By supporting CDC via Java Exit Program or InfoSphere CDC and bulk loads via Spark JDBC, it addresses diverse data needs. Detailed reconciliation—covering row counts, checksums, operations, latency, and errors—ensures data integrity, while ADF orchestrates the end-to-end process. Collaborate with your teams to refine transaction rates, retention policies, and SLAs for optimal performance. Stay tuned for more technical insights!</p>
    `,
    relatedPosts: ["1", "4"]
  },{
    id: "6",
    title: "Custom Authentication in Django: A Step-by-Step Guide",
    excerpt: "Learn how to customize Django’s authentication system by modifying models.py, settings.py, and more to use email-based login and additional fields.",
    date: "April 06, 2025",
    author: "Rachit", // Replace with your actual name
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80", // Placeholder image of a laptop/coding
    content: `
      <h1>How to Set Up Custom Authentication in Django: A Step-by-Step Guide</h1>
      <p>Django’s built-in authentication system is powerful and flexible, but sometimes you need more control—like using an email instead of a username for login or adding custom fields to the user model. In this blog post, we’ll walk through the process of setting up custom authentication in Django by modifying <code>models.py</code>, <code>settings.py</code>, <code>backend.py</code>, and other key files. Each step is explained in detail, with code snippets, so you can follow along and adapt it to your project.</p>
      <p>By the end, you’ll have a custom user model that uses email for authentication, a custom backend for flexibility, and an admin interface tailored to your setup. Let’s get started!</p>

      <h2>Prerequisites</h2>
      <p>Before diving in, ensure you have:</p>
      <ul>
        <li>A Django project set up (<code>django-admin startproject myproject</code>).</li>
        <li>An app created (<code>python manage.py startapp myapp</code>).</li>
        <li>Basic familiarity with Django models, settings, and migrations.</li>
      </ul>
      <p>All code examples assume your app is named <code>myapp</code>. Adjust the paths and names as needed for your project.</p>

      <h2>Step 1: Create a Custom User Model (<code>models.py</code>)</h2>
      <p>Django’s default <code>User</code> model uses a username for authentication, but we’ll replace it with a custom model that uses email instead and adds an extra field (<code>date_of_birth</code>) as an example.</p>
      <h3>Why Customize?</h3>
      <ul>
        <li>The default <code>User</code> model might not fit your needs (e.g., requiring email-based login).</li>
        <li>Custom models let you add fields like phone numbers, birthdays, or profile pictures.</li>
      </ul>
      <h3>Code Explanation</h3>
      <p>We’ll subclass <code>AbstractUser</code> to extend the default model and create a custom manager to handle user creation.</p>
      <pre><code class="language-python">
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# Custom manager for user creation
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

# Custom user model
class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Replace username with email
    username = models.CharField(max_length=150, unique=False, blank=True, null=True)  # Optional username
    date_of_birth = models.DateField(null=True, blank=True)  # Extra field example

    # Specify the field to use for authentication
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # No additional required fields besides email and password

    objects = CustomUserManager()

    def __str__(self):
        return self.email
      </code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li><code>CustomUserManager</code>: Overrides the default manager to enforce email as the primary identifier and handle password hashing.</li>
        <li><code>AbstractUser</code>: Inherits all fields from Django’s default <code>User</code> model while letting us add <code>date_of_birth</code>.</li>
        <li><code>USERNAME_FIELD</code>: Tells Django to use <code>email</code> for login instead of <code>username</code>.</li>
      </ul>

      <h2>Step 2: Update <code>settings.py</code></h2>
      <p>Django needs to know we’re using a custom user model. This is done by setting the <code>AUTH_USER_MODEL</code> variable.</p>
      <pre><code class="language-python">
# Replace 'myapp' with your app name
AUTH_USER_MODEL = 'myapp.CustomUser'
      </code></pre>
      <p><strong>Why?</strong> Without this, Django will use its default <code>auth.User</code> model, ignoring our custom model.</p>

      <h2>Step 3: (Optional) Create a Custom Authentication Backend (<code>backend.py</code>)</h2>
      <p>If you want custom logic—like case-insensitive email lookups—create a custom backend.</p>
      <pre><code class="language-python">
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model

class CustomAuthBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            # Case-insensitive email lookup
            user = UserModel.objects.get(email__iexact=email)
            if user.check_password(password):
                return user
        except UserModel.DoesNotExist:
            return None

    def get_user(self, user_id):
        UserModel = get_user_model()
        try:
            return UserModel.objects.get(pk=user_id)
        except UserModel.DoesNotExist:
            return None
      </code></pre>
      <p>Then update <code>settings.py</code>:</p>
      <pre><code class="language-python">
AUTHENTICATION_BACKENDS = [
    'myapp.backend.CustomAuthBackend',  # Path to your custom backend
    'django.contrib.auth.backends.ModelBackend',  # Fallback to default
]
      </code></pre>
      <h3>Key Points:</h3>
      <ul>
        <li><code>authenticate</code>: Checks if the email exists (case-insensitive) and verifies the password.</li>
        <li><code>get_user</code>: Retrieves a user by ID for session management.</li>
      </ul>

      <h2>Step 4: Apply Migrations</h2>
      <p>Run these commands to create and apply migrations:</p>
      <pre><code class="language-bash">
python manage.py makemigrations
python manage.py migrate
      </code></pre>
      <p><strong>Why?</strong> This creates the database tables for <code>CustomUser</code>.</p>

      <h2>Step 5: Update the Admin Interface (<code>admin.py</code>)</h2>
      <p>Register your custom model with the admin:</p>
      <pre><code class="language-python">
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name', 'date_of_birth')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'date_of_birth'),
        }),
    )

admin.site.register(CustomUser, CustomUserAdmin)
      </code></pre>
      <p><strong>Why?</strong> Ensures the admin reflects your custom fields.</p>

      <h2>Step 6: Test Your Setup</h2>
      <p>Create a superuser and test:</p>
      <pre><code class="language-bash">
python manage.py createsuperuser
      </code></pre>
      <p>Run the server (<code>python manage.py runserver</code>) and visit <code>/admin/</code> to log in.</p>

      <h2>Bonus: Custom Forms (Optional)</h2>
      <pre><code class="language-python">
from django import forms
from .models import CustomUser

class CustomUserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Confirm Password', widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ('email', 'date_of_birth')

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user
      </code></pre>

      <h2>Conclusion</h2>
      <p>You’ve now set up custom authentication in Django! Experiment with additional fields or backend logic to suit your needs. Happy coding!</p>
    `,
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
