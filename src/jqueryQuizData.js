export const jqueryQuizData = {
  info: {
    title: "jQuery Introduction",
    description: `jQuery is a fast, small, and feature-rich JavaScript library created to simplify tasks like HTML document traversal, event handling, animation, and AJAX interactions for rapid web development. It was designed to make it easier to use JavaScript on websites and handle browser inconsistencies.

Key Features of jQuery:

DOM Manipulation: Easily select and modify HTML elements and their content using simple syntax (e.g., $('#id') or $('.class')).

Event Handling: Simplifies attaching event listeners (like click, hover, etc.) to elements.

AJAX Support: Makes it simple to send/receive data from a server without reloading the page.

Animations and Effects: Offers built-in methods for animations like fadeIn(), slideUp(), etc.

Cross-Browser Compatibility: Smoothly handles JavaScript differences across various browsers.`,
    
    note: `
    What you Learned?

    jQuery is a helpful JavaScript library that simplifies tasks like selecting HTML elements, handling events, making AJAX requests, and adding animations. 
    
    It uses simple syntax (like $()), works across all major browsers, and reduces the amount of code needed for common JavaScript functions. 
    
    It was widely used before modern frameworks like React and Angular became popular but is still useful for lightweight projects or legacy systems.`
  },

  questions: [
    {
      question: "What is the main purpose of jQuery?",
      options: [
        "Backend development",
        "Simplifying JavaScript tasks",
        "Creating databases",
        "Writing server-side logic"
      ],
      answer: 1
    },
    {
      question: "Which symbol is used to access jQuery?",
      options: [
        "#",
        "$",
        "@",
        "&"
      ],
      answer: 1
    },
    {
      question: "Which method is used in jQuery to hide an element?",
      options: [
        "hideIt()",
        "invisible()",
        "hide()",
        "displayNone()"
      ],
      answer: 2
    },
    {
      question: "What does $(document).ready() do?",
      options: [
        "Starts a database",
        "Waits for all HTML to load before running code",
        "Creates a new web page",
        "Closes the document"
      ],
      answer: 1
    },
    {
      question: "Which jQuery method is used to perform an AJAX request?",
      options: [
        "getJSON()",
        "ajax()",
        "fetchData()",
        "httpRequest()"
      ],
      answer: 1
    }
  ]
};
