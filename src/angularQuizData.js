export const angularQuizData = {
  info: {
    title: "Angular Introduction",
    description: `Angular is a TypeScript-based open-source web application framework developed and maintained by Google. It is designed for building dynamic, single-page web applications (SPAs) with a strong structure and scalability.

Key Features of Angular:

Component-Based Architecture: Angular applications are built using components, which are reusable pieces of UI logic tied to templates.

TypeScript Language: Angular is written in TypeScript, a superset of JavaScript, which provides strong typing, object-oriented features, and better tooling support.

Two-Way Data Binding: Angular allows automatic synchronization of data between the model (business logic) and the view (UI).

Directives: Angular uses special attributes called directives (like *ngFor, *ngIf) to extend HTML's behavior.

Dependency Injection (DI): Angular has a built-in DI system that makes it easier to manage components and services, improving testability and scalability.

Routing: Angular provides a Router module to build SPAs that navigate between views without reloading the whole page.

RxJS and Observables: Angular uses RxJS for handling asynchronous operations like HTTP requests through observables, promoting reactive programming.
`,
    note: `
    What you Learned?

    Angular is a powerful front-end web framework developed by Google, designed for building dynamic and scalable single-page applications (SPAs). 
    
    It uses TypeScript for enhanced code quality and features a component-based architecture, meaning applications are built by combining reusable UI components. 
    
    Angular supports two-way data binding, allowing real-time synchronization between UI and logic. 
    
    It also offers directives to extend HTML, dependency injection for managing services, and a router module for smooth navigation without page reloads.
    
    Overall, Angular provides a complete, organized structure for developing modern web applications efficiently.`
  },

  questions: [
    {
      question: "Which language is Angular primarily written in?",
      options: ["JavaScript", "TypeScript", "Python", "PHP"],
      answer: 1
    },
    {
      question: "What is a component in Angular?",
      options: [
        "A database table",
        "A reusable UI element with logic and template",
        "A style sheet",
        "A JavaScript function"
      ],
      answer: 1
    },
    {
      question: "Which Angular feature is used for displaying a list of items?",
      options: ["*ngIf", "*ngStyle", "*ngFor", "*ngList"],
      answer: 2
    },
    {
      question: "What is the purpose of Angular's Dependency Injection system?",
      options: [
        "To connect Angular with databases",
        "To load CSS files",
        "To inject services into components",
        "To build Angular apps faster"
      ],
      answer: 2
    },
    {
      question: "Which Angular feature allows switching between different views without reloading the page?",
      options: ["FormsModule", "Data Binding", "Angular CLI", "Router Module"],
      answer: 3
    },
    {
      question: "Which language is Angular primarily written in?",
      options: [
        "JavaScript",
        "HyperLink Markup Language",
        "HyperText Management Language",
        "None of the above"
      ],
      answer: 0
    },

  ]
};
