export const sqliteQuizData = {
  info: {
    title: "Information on SQLite:",
    description: `SQLite is a lightweight, serverless, self-contained relational database engine that is widely used in embedded systems, mobile apps, and small to medium applications. Unlike other databases, SQLite does not require a separate server process; it reads and writes directly to ordinary disk files.

    Key Features of SQLite:
    Serverless: No need for a separate database server; database is stored in a single file.

    Self-contained: All the database engine is in one library, making it easy to embed.

    Zero Configuration: No setup or administration needed.

    Cross-Platform: Works on many operating systems including Windows, Linux, macOS, iOS, and Android.

    Supports Standard SQL: Allows querying and managing data with standard SQL syntax.

    Lightweight: Minimal setup and very small footprint, ideal for mobile and IoT devices.

    ACID Compliance: Supports reliable transactions ensuring data integrity.
    `,
    note: `
    What you Learned?

SQLite is a compact, serverless relational database engine stored as a single file, making it ideal for mobile apps, embedded systems, and lightweight applications.

It supports standard SQL and ACID-compliant transactions without the need for configuration or managing a database server. 

This simplicity and portability make it very popular in many development environments.
`
  },

  questions: [
    {
      question: "What kind of database engine is SQLite?",
      options: [
        "Server-based",
        "Serverless and embedded",
        "Cloud-based",
        "NoSQL"
      ],
      answer: 1
    },
    {
      question: "Where does SQLite store its database?",
      options: [
        "In multiple files across the server",
        "In a single file on disk",
        "In memory only",
        "On the cloud"
      ],
      answer: 1
    },
    {
      question: "Which SQL feature does SQLite support?",
      options: [
        "No SQL queries",
        "Partial SQL",
        "Standard SQL",
        "Only JSON queries"
      ],
      answer: 2
    },
    {
      question: "Which type of applications commonly use SQLite?",
      options: [
        "Large enterprise systems",
        "Embedded systems and mobile apps",
        "Web hosting servers",
        "Blockchain applications"
      ],
      answer: 1
    },
    {
      question: "Does SQLite require configuration and administration?",
      options: [
        "Yes, extensive configuration is needed",
        "Only for large databases",
        "No, it requires zero configuration",
        "Only on Windows systems"
      ],
      answer: 2
    }
  ]
};
