export const laravelQuizData = {
  info: {
    title: "Laravel Introduction",
    description: `Laravel is a popular open-source PHP framework designed to make web development easier and faster by providing built-in tools and a clean, elegant syntax. It follows the MVC (Model-View-Controller) architectural pattern, which separates application logic, user interface, and data handling for better organization and scalability.

Key Features of Laravel:

MVC Architecture: Separates logic, UI, and data, improving maintainability and scalability.

Eloquent ORM: An advanced object-relational mapper to work with databases using PHP syntax instead of SQL queries.

Routing System: Provides an easy way to define web routes for your application.

Blade Templating Engine: Allows you to create dynamic views using simple, clean syntax.

Authentication and Security: Built-in support for user authentication, password reset, and protection against common vulnerabilities.

Artisan CLI: Command-line tool that automates repetitive tasks like database migrations, seeding, and running tests.

Middleware: Filters HTTP requests entering your application for security or data validation.

Task Scheduling: Easily schedule repetitive tasks using a clean API.

`,
    
    note: `
    What you Learned?

    Laravel is a powerful PHP framework that simplifies web application development by organizing code using the MVC pattern.
    
    It provides tools like Eloquent ORM for easy database interactions and Blade templating for dynamic HTML views. 
    
    Laravel's Artisan CLI automates common tasks, and its built-in features help with routing, authentication, and security.
    
    Overall, Laravel makes building modern, scalable web applications faster and cleaner.`
  },

  questions: [
    {
      question: "What language is Laravel built with?",
      options: [
        "Python",
        "JavaScript",
        "PHP",
        "Ruby"
      ],
      answer: 2
    },
    {
      question: "Which architectural pattern does Laravel follow?",
      options: [
        "MVVM",
        "MVC",
        "MVP",
        "MVT"
      ],
      answer: 1
    },
    {
      question: "What is Eloquent in Laravel?",
      options: [
        "A templating engine",
        "An ORM for database management",
        "A routing tool",
        "A security package"
      ],
      answer: 1
    },
    {
      question: "Which tool in Laravel helps automate repetitive tasks?",
      options: [
        "Composer",
        "Artisan",
        "NPM",
        "Grunt"
      ],
      answer: 1
    },
    {
      question: "What does Blade provide in Laravel?",
      options: [
        "Database management",
        "Routing system",
        "A templating engine for views",
        "User authentication"
      ],
      answer: 2
    }
  ]
};
