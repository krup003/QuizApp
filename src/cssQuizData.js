export const cssQuizData = {
    info: {
      title: "CSS Introduction",
      description: `CSS (Cascading Style Sheets) is a stylesheet language used to describe the look and formatting of an HTML document.
  
  While HTML structures the content of a webpage, CSS controls its presentation, such as layout, colors, fonts, spacing, and animations.
  
  Key Concepts in CSS:
  Selectors: These target HTML elements to apply styles. Examples: p, .className, #idName.
  
  Properties and Values: CSS applies styles using properties (like color, font-size, margin) with assigned values (like blue, 16px, 10px).
  
  Types of CSS:
  
  Inline CSS: Written directly in the HTML element using the style attribute.
  
  Internal CSS: Written inside a <style> tag within the HTML <head>.
  
  External CSS: Stored in a separate .css file and linked to the HTML document using <link>.
  
  Box Model: Every HTML element is treated as a box with four layers—content, padding, border, and margin.
  
  Cascading Rule: If multiple styles apply to the same element, CSS follows a hierarchy (inline > internal > external) to determine which style is applied.`,
      note: `CSS (Cascading Style Sheets) is used to control the visual appearance of HTML content on a webpage. 
      
      It allows developers to style elements by defining properties like color, font, layout, and spacing.
      
      CSS can be applied in three ways: inline (within the HTML element), internal (within a <style> tag), and external (linked through a .css file).
      
      It works through selectors and follows a box model concept, which includes content, padding, border, and margin. 
      
      CSS follows a priority system where inline styles override internal and external styles. Overall, CSS is essential for creating visually appealing and responsive web designs.`
    },
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        answer: 1
      },
      {
        question: "Which HTML tag is used to link an external CSS file?",
        options: [
          "<style>",
          "<script>",
          "<link>",
          "<css>"
        ],
        answer: 2
      },
      {
        question: "Which of the following is a correct CSS syntax?",
        options: [
          "body:color=black;",
          "body { color: black; }",
          "{body:color=black}",
          "body = { color: black; }"
        ],
        answer: 1
      },
      {
        question: "Which type of CSS has the highest priority?",
        options: [
          "External CSS",
          "Internal CSS",
          "Inline CSS",
          "None"
        ],
        answer: 2
      },
      {
        question: "What part of the CSS box model is directly outside the content area?",
        options: [
          "Margin",
          "Border",
          "Padding",
          "Outline"
        ],
        answer: 2
      },
      {
        question: "Which property is used to change text color in CSS?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: 2
      }
    ]
  };
  