export const mongodbQuizData = {
  info: {
    title: "MongoDB Introduction",
    description: `MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents instead of traditional tables. It is designed for scalability, high performance, and easy development with unstructured or semi-structured data.

Key Features of MongoDB:

Document-Oriented Storage: Data is stored as BSON (Binary JSON) documents, allowing complex nested structures.

Schema Flexibility: Unlike SQL databases, MongoDB does not require a fixed schema, making it easier to evolve the data model.

Scalability: Supports horizontal scaling through sharding, allowing data distribution across multiple servers.

Powerful Query Language: Supports rich queries, indexing, aggregation, and text search.

High Availability: Uses replica sets to provide automatic failover and data redundancy.

Built for Cloud and Big Data: Works well with modern cloud architectures and big data applications.


`,
    note: `
    What you Learned?

    MongoDB is a modern NoSQL database designed to store data in flexible JSON-like documents, which allows easy handling of complex and evolving data structures. 
    
    It offers features like high availability through replica sets and scalability through sharding, making it suitable for cloud and big data environments. 
    
    Unlike traditional relational databases, MongoDB does not require a fixed schema, which adds agility to development..`
  },

  questions: [
    {
      question: "What type of database is MongoDB?",
      options: [
        "Relational database",
        "NoSQL document database",
        "Key-value store",
        "Graph database"
      ],
      answer: 1
    },
    {
      question: "How does MongoDB store its data?",
      options: [
        "Tables with rows and columns",
        "XML files",
        "JSON-like documents (BSON)",
        "Plain text files"
      ],
      answer: 2
    },
    {
      question: "What does MongoDB use to provide high availability?",
      options: [
        "Load balancers",
        "Replica sets",
        "Backup tapes",
        "Cloud functions"
      ],
      answer: 1
    },
    {
      question: "Which feature of MongoDB allows it to scale horizontally?",
      options: [
        "Indexing",
        "Sharding",
        "Replication",
        "Caching"
      ],
      answer: 1
    },
    {
      question: "Does MongoDB require a fixed schema?",
      options: [
        "Yes, always",
        "No, it is schema-flexible",
        "Only for text data",
        "Only for numeric data"
      ],
      answer: 1
    }
  ]
};
