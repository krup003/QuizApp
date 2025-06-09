export const firebaseQuizData = {
  info: {
    title: "Information on Firebase:",
    description: `Firebase is a Backend-as-a-Service (BaaS) platform developed by Google, designed to help developers build and scale web and mobile applications quickly. It provides tools and infrastructure to handle backend services like authentication, databases, cloud functions, hosting, and analytics — all without managing your own servers.

Key Features of Firebase:

Realtime Database & Firestore: Store and sync data in real-time across all clients using Realtime Database or Cloud Firestore.

Authentication: Provides easy-to-use authentication methods (email/password, phone, Google, Facebook, etc.).

Cloud Functions: Serverless functions that automatically run backend code in response to events.

Hosting: Fast and secure static website hosting with custom domain support.

Cloud Storage: Store large files like images, audio, and video securely and at scale.

Analytics & Crashlytics: Track user behavior and app performance; detect crashes with detailed reports.

Push Notifications: Send targeted messages to users via Firebase Cloud Messaging (FCM).
    `,
    note: `
    What you Learned?

Firebase is a powerful platform by Google that provides a suite of backend tools for developers.

It simplifies app development by offering services like real-time databases, authentication, cloud functions, and hosting — all without managing servers. 

It’s especially helpful for creating scalable, secure, and interactive web or mobile applications quickly.
`
  },

  questions: [
    {
      question: "What kind of platform is Firebase?",
      options: [
        "Frontend Framework",
        "Cloud Hosting Provider",
        "Backend-as-a-Service (BaaS)",
        "Operating System"
      ],
      answer: 2
    },
    {
      question: "Which Firebase feature allows you to store and sync data in real-time?",
      options: [
        "Firehost",
        "Firequery",
        "Realtime Database",
        "Cloud DNS"
      ],
      answer: 2
    },
    {
      question: "Which Firebase service is used to send notifications?",
      options: [
        "Firebase Hosting",
        "FireNotify",
        "Firebase Cloud Messaging (FCM)",
        "FireMail"
      ],
      answer: 2
    },
    {
      question: "Which Firebase service helps you authenticate users?",
      options: [
        "Firebase Auth",
        "FireLogin",
        "FireCheck",
        "Firebase Users"
      ],
      answer: 0
    },
    {
      question: "What kind of files can be stored using Firebase Cloud Storage?",
      options: [
        "Only text files",
        "Only images",
        "Large files like images, audio, and video",
        "Only database files"
      ],
      answer: 2
    }
  ]
};
