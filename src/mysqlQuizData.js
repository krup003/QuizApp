export const mysqlQuizData = {
  info: {
    title: "MySQL Introduction",
    description: `MySQL is one of the most popular open-source relational database management systems (RDBMS). 
    
    It stores data in tables with rows and columns and uses Structured Query Language (SQL) to manage and manipulate the data. 
    
    MySQL is widely used in web applications, especially with PHP, and is known for reliability, speed, and ease of use.

    Key Features of MySQL:

    Relational Database: Data is organized in tables with predefined schemas and relationships between tables.

    SQL Support: Uses SQL for querying, updating, and managing databases.

    ACID Compliance: Ensures reliable transactions with Atomicity, Consistency, Isolation, and Durability.

    Scalability and Flexibility: Can handle small to large-scale applications.

    Security Features: Provides user authentication, access control, and encryption.

    Replication: Supports data replication for backups and high availability.

    Cross-Platform: Runs on various operating systems like Windows, Linux, and macOS.

`,
    note: `
    What you Learned?

  MySQL is a widely used open-source relational database management system that organizes data into tables and uses SQL for managing data.
  
  It ensures reliable and consistent transactions through ACID compliance and supports replication for high availability.
  
  Its cross-platform nature and strong security features make it ideal for a variety of applications, from small websites to large enterprise systems.`
  },

  questions: [
    {
      question: "What type of database system is MySQL?",
      options: [
        "NoSQL",
        "Relational database",
        "Key-value store",
        "Graph database"
      ],
      answer: 1
    },
    {
      question: "Which language is used to interact with MySQL databases?",
      options: [
        "Python",
        "JavaScript",
        "SQL",
        "HTML"
      ],
      answer: 2
    },
    {
      question: "What does ACID compliance in MySQL ensure?",
      options: [
        "Fast queries",
        "Reliable and safe transactions",
        "Unlimited storage",
        "Easy backups"
      ],
      answer: 1
    },
    {
      question: "Which MySQL feature helps keep data synchronized across servers?",
      options: [
        "Indexing",
        "Replication",
        "Partitioning",
        "Caching"
      ],
      answer: 1
    },
    {
      question: "What is the basic unit of data storage in MySQL?",
      options: [
        "Document",
        "Key-value pair",
        "Table",
        "Graph"
      ],
      answer: 2
    }
  ]
};
