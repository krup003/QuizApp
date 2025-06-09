export const htmlQuizData = {
    info: {
      title: "HTML Introduction",
      description: `HTML (HyperText Markup Language) is the standard language used to create and design web pages. It forms the backbone of web content and provides structure to websites. HTML uses "tags" to define elements like paragraphs, headings, images, links, and more. Each HTML document consists of several sections, including the head and body.
      
  Key components of HTML:
  
  • HTML Tags: Tags are used to define elements in a document. They come in pairs: opening tag (<tag>) and closing tag (</tag>).
  
  • Head Section: Contains metadata about the webpage, like the title, character set, links to stylesheets, and other resources.
  
  • Body Section: Contains the visible content of the webpage, including text, images, links, forms, etc.
  
  Common Tags:
  <html>: The root element.
  
  <head>: Contains meta-information about the document.
  
  <body>: Contains the visible content of the webpage.
  
  <p>: Defines a paragraph. 
  
  <h1>–<h6>:  Define headings of different levels.
  
  <a>: Defines a hyperlink.
  
  <img>: Embeds an image.
  
  <ul>, <ol>, <li>: Define unordered and ordered lists.`,
      
      // ✅ Add this new field
      note: `
      What you Learned?

      HTML (HyperText Markup Language) is the foundation of web development, used to structure content on web pages. 

      It consists of a series of elements represented by tags, which help define content such as paragraphs, headings, images, links, and lists. 

      HTML documents are divided into two main sections: the head, which holds metadata and links to external resources, and the body, which contains the visible content on the page.

       Key tags include <p> for paragraphs, <h1> to <h6> for headings, <a> for hyperlinks, and <ul> and <ol> for unordered and ordered lists. 

       HTML is essential for creating the layout of a webpage, and when paired with CSS and JavaScript, it becomes a powerful tool for developing interactive and styled websites.`
    },
  
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HyperLink Markup Language",
          "HyperText Management Language",
          "None of the above"
        ],
        answer: 0
      },
      {
        question: "Which HTML tag is used to define a paragraph?",
        options: ["<p>", "<h1>", "<div>", "<section>"],
        answer: 0
      },
      {
        question: "What is the purpose of the <head> section in an HTML document?",
        options: [
          "To display content on the webpage",
          "To contain metadata and links to resources",
          "To define the structure of the document",
          "To create hyperlinks"
        ],
        answer: 1
      },
      {
        question: "Which tag is used to create an unordered list?",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 1
      },
      {
        question: "What does the <a> tag define in HTML?",
        options: ["A paragraph", "An image", "A hyperlink", "A table"],
        answer: 2
      }
    ]
  };
  