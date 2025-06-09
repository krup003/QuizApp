export const reactQuizData = {
  info: {
    title: "React Introduction",
    description: `React is a JavaScript library developed by Meta (formerly Facebook) for building user interfaces, especially for single-page applications (SPAs). It focuses on creating fast, interactive, and reusable UI components.

Key Features of React:

Component-Based Architecture: React apps are made up of components, which are self-contained modules that manage their own structure, logic, and styling.

JSX (JavaScript XML): React uses JSX, which lets you write HTML inside JavaScript. It makes UI code easier to understand and debug.

Virtual DOM: React uses a virtual DOM to update only the parts of the page that change, making rendering very fast and efficient.

Unidirectional Data Flow: Data flows in one direction (from parent to child), which helps keep code predictable and easier to debug.

Hooks: React offers Hooks like useState and useEffect to let function components use state and side effects.

React Native: A version of React that allows developers to build mobile apps using the same concepts and codebase structure.`,
    
    note: `
    What you Learned?

    React is a popular JavaScript library developed by Meta (Facebook) for building fast and interactive user interfaces.
    
    It follows a component-based architecture, where the UI is built using reusable, independent pieces called components.
    
    React uses JSX, allowing developers to write HTML within JavaScript, making code easier to read and maintain.
    
    One of React's core strengths is its Virtual DOM, which ensures efficient updates by re-rendering only the necessary parts of the page.
    
    With unidirectional data flow, data moves from parent to child components, keeping apps predictable. React also introduces Hooks like useState and useEffect to manage state and side effects in functional components..`
  },

  questions: [
    {
      question: "What is React mainly used for?",
      options: [
        "Backend development",
        "Database management",
        "Building user interfaces",
        "Operating systems"
      ],
      answer: 2
    },
    {
      question: "What does JSX allow you to do in React?",
      options: [
        "Write SQL queries",
        "Style components",
        "Embed HTML into JavaScript",
        "Connect to databases"
      ],
      answer: 2
    },
    {
      question: "What is the main benefit of the Virtual DOM?",
      options: [
        "It makes HTML more secure",
        "It allows full page reloads",
        "It speeds up UI updates",
        "It saves battery on mobile"
      ],
      answer: 2
    },
    {
      question: "Which of the following is a valid React Hook?",
      options: [
        "useClick",
        "useEffect",
        "useStyle",
        "useLayout"
      ],
      answer: 1
    },
    {
      question: "How does data flow in React?",
      options: [
        "From child to parent",
        "Circular",
        "Randomly",
        "From parent to child"
      ],
      answer: 3
    }
  ]
};
