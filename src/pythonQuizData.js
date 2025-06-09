// pythonQuizData.js
export const pythonQuizData = {
    info: {
      title: "Python Quiz",
      description: `Python is a high-level, interpreted programming language known for its readability and versatility. 
  
      It is widely used in various fields like web development, data analysis, artificial intelligence, machine learning, automation, and more. 
  
      Python's syntax is simple and emphasizes readability, making it an excellent choice for both beginners and experienced developers.
  
  Key Features of Python:
  1. Easy Syntax: Python's syntax is straightforward, making it easy to learn and use, especially for beginners. It relies on indentation rather than brackets to define code blocks.
  
  2. Interpreted Language: Python code is executed line-by-line by an interpreter, meaning you don’t need to compile the code before running it.
  
  3. Dynamic Typing: Variables in Python do not require explicit data type declarations. The type is determined at runtime.
  
  4. Extensive Libraries: Python has a vast ecosystem of libraries and frameworks for web development (e.g., Django, Flask), data analysis (e.g., Pandas, NumPy), machine learning (e.g., TensorFlow, scikit-learn), and more.
  
  5. Object-Oriented: Python supports object-oriented programming (OOP), which allows the creation of reusable code through classes and objects.
  
  6. Cross-platform: Python is cross-platform, meaning Python programs can run on different operating systems like Windows, macOS, and Linux.`,
      note: `Python is a versatile, high-level programming language that emphasizes readability and ease of use.
       It is widely used in web development, data analysis, machine learning, automation, and more. 
       
       Python's syntax is simple and easy to learn, making it ideal for beginners. It is an interpreted language, which means code is executed line-by-line, and it supports dynamic typing, allowing variables to change types at runtime. 
       
       Python has extensive libraries for various applications, supports object-oriented programming (OOP), and is cross-platform, meaning it can run on multiple operating systems. 
       
       Its vast ecosystem and simple syntax make Python one of the most popular programming languages today.`
    },
    questions: [
      {
        question: "What is the correct syntax to output 'Hello World' in Python?",
        options: ["echo 'Hello World'", "print('Hello World')", "println('Hello World')", "console.log('Hello World')"],
        answer: 1 // 'print('Hello World')' is the correct answer
      },
      {
        question: "Which of the following is an immutable type in Python?",
        options: ["list", "set", "tuple", "dictionary"],
        answer: 2 // 'tuple' is the correct answer
      },
      {
        question: "What is the correct way to declare a function in Python?",
        options: ["def functionName():", "function functionName():", "func functionName():", "declare functionName():"],
        answer: 0 // 'def functionName():' is the correct answer
      },
      {
        question: "What does the 'len()' function do in Python?",
        options: ["Returns the length of an object", "Returns a random number", "Creates a list", "Converts an object to a string"],
        answer: 0 // 'Returns the length of an object' is the correct answer
      },
      {
        question: "Which of the following is used to handle exceptions in Python?",
        options: ["try-except", "catch-throw", "handle-error", "error-try"],
        answer: 0 // 'try-except' is the correct answer
      },
      {
        question: "What is Python primarily used for?",
        options: [
          "a) Web design",
          "b) Web development, data analysis, and machine learning",
          "c) Creating operating systems",
          "d) Designing graphics"
        ],
        answer: 1 // 'Web development, data analysis, and machine learning' is the correct answer
      },
    
     
    ]
  };
  