export interface Project {
  title: string;
  technologies: string[];
  description: string;
  contributions: string[];
}

export const portfolioData = {
  name: "Jaypal Singh Mandloi",
  title: "Full-Stack .NET & Cloud Engineer",
  tagline: "Specializing in building scalable, secure, and maintainable web applications using C#, .NET, ASP.NET Core, React, SQL Server, AWS, and Microsoft Azure.",
  about: "Experienced Full-Stack .NET Engineer specializing in building scalable, secure, and maintainable web applications using C#, .NET, ASP.NET Core, React, SQL Server, AWS, and Microsoft Azure. Strong experience across backend API development, frontend application development, cloud integration, database design, CI/CD, debugging, performance optimization, and modern software architecture. Skilled in building end-to-end solutions by integrating React frontends with .NET Web APIs and deploying applications through Azure DevOps and cloud platforms.",
  careerObjective: "To contribute as a Full-Stack .NET & Cloud Engineer by combining strong expertise in C#, .NET, React, Azure, AWS, and Azure DevOps to build scalable applications, improve engineering processes, and contribute to high-quality AI and software engineering solutions.",
  
  coreSkills: [
    "AI/LLM Output Evaluation",

    "Microsoft Azure", "Azure DevOps", "CI/CD Deployment", "Azure Functions", "Azure Storage", "Docker", 
    "Node.js", "React","Express.js",  "TypeScript","Redis",
"Microservices","RESTful API Development", 
"C#", ".NET / .NET Core", "ASP.NET Core", 
 "JWT", "OAuth 2.0", 
 "Entity Framework Core", "LINQ",  
"SQL Server", "My-Sql","MongoDB", "PostgreSQL","SnowFlake", "Database Design & Optimization", 
"API Integration","Clean Architecture", "SOLID Principles", "Design Patterns",
 "Git", "Technical Documentation",
 "Code Review", "Performance Optimization",
 "HTML5 / CSS3"
  ],

  technicalExpertise: [
    {
      category: "Backend Development",
      description: "Strong experience developing production-ready backend applications using C# and .NET.",
      items: [
         "Node.js", "Express.js",  "TypeScript","Redis",
        "C#", ".NET / .NET Core", "ASP.NET Core", "Web API", "REST APIs",
        "Entity Framework Core", "LINQ", "Dependency Injection", "Middleware",
        "Authentication and Authorization", "Exception Handling", "Asynchronous Programming",
        "Logging and monitoring", "Performance optimization"
      ]
    },
    {
      category: "Frontend Development",
      description: "Experience developing responsive and maintainable web applications using React and modern frontend technologies.",
      items: [
        "React",  "TypeScript", 
        "Component-based architecture", "React Hooks", "API integration",  
        "Responsive UI development", "Performance optimization",
        "React and .NET API integration",
        "HTML5","JavaScript", "CSS3"
      ]
    },
    {
      category: "Cloud Technologies",
      description: "Hands-on knowledge of cloud application development and integration using Microsoft Azure and AWS.",
      items: [
        "Azure App Services", "Azure Functions", "Azure Storage", "Azure DevOps",
        "Azure Pipelines", "CI/CD & Deployment", "AWS Cloud Services", "Scalable Cloud Architecture"
      ]
    },
    {
      category: "Azure DevOps & CI/CD",
      description: "Strong understanding of Azure DevOps for source control, build automation, release management, and continuous integration/continuous deployment.",
      items: [
        "Azure Repos", "Azure Pipelines", "CI/CD pipeline design", "Build & Release pipelines",
        "Automated deployments", "Git branching strategies", "Environment management", "Deployment troubleshooting"
      ]
    }
  ],

  architectureFlow: {
    pipeline: "React → REST API → ASP.NET Core → Business Logic → Entity Framework Core → SQL Server",
    deployment: "Cloud deployment and CI/CD using Azure DevOps, Azure, and AWS.",
    focusAreas: [
      "Separation of concerns", "Clean Architecture", "Scalable API design", 
      "Reusable React components", "Secure authentication", "Database optimization", 
      "API performance", "Error handling", "Logging & monitoring", "Maintainable codebases"
    ]
  },

  projects: [
    {
      title: "Enterprise Collection & Reporting Platform",
      technologies: ["C#", ".NET", "ASP.NET Core", "React", "Web API", "SQL Server", "Azure DevOps"],
      description: "Developed and enhanced collection, receipt, and reporting workflows across frontend and backend applications.",
      contributions: [
        "Developed and enhanced .NET Web APIs.",
        "Integrated React frontend applications with backend APIs.",
        "Implemented collection and receipt-related business workflows.",
        "Worked on collection and RF report API integration.",
        "Investigated and fixed reporting-related bugs & improved validation workflows.",
        "Supported CI/CD and application deployment through Azure DevOps."
      ]
    },
    {
      title: "Receipt Validation System",
      technologies: ["C#", ".NET", "ASP.NET Core", "React", "SQL Server"],
      description: "Worked on receipt validation functionality to improve transaction accuracy and reliability.",
      contributions: [
        "Developed backend validation logic and created/modified REST APIs.",
        "Integrated React UI with .NET APIs & implemented business validation rules.",
        "Investigated and resolved validation issues, enhancing error handling and API responses."
      ]
    },
    {
      title: "Collection & PMR Reporting",
      technologies: [".NET", "Web API", "React", "SQL Server", "Azure DevOps"],
      description: "Enhanced collection and PMR reporting functionality.",
      contributions: [
        "Investigated collection report issues and fixed PMR request report bugs.",
        "Modified backend API logic and integrated APIs with React frontend.",
        "Improved report accuracy and reliability, supporting testing/deployment via Azure DevOps."
      ]
    },
    {
      title: "Menu Optimization Platform",
      technologies: ["React", "C#", ".NET", "Web API", "SQL Server"],
      description: "Worked on frontend and backend API integration for menu optimization functionality.",
      contributions: [
        "Developed React components and integrated frontend APIs with .NET backend services.",
        "Implemented/modified REST APIs and debugged integration workflows."
      ]
    },
    {
      title: "One-Step Profile Revamp",
      technologies: ["React", "C#", ".NET", "Web API", "SQL Server"],
      description: "Contributed to profile application modernization and UI/API enhancements.",
      contributions: [
        "Developed and modified React components and implemented backend API changes.",
        "Integrated frontend/backend workflows and improved profile-related business logic."
      ]
    }
  ],

  engineeringPractices: [
    "SOLID principles", "Clean Architecture", "Design Patterns", "Dependency Injection",
    "Repository & service patterns", "Code review & Unit testing", "Git version control & CI/CD",
    "Secure API development", "Performance optimization", "Logging & monitoring", "Technical documentation"
  ],

  aiEvaluation: [
    "Evaluating AI-generated C# and .NET code",
    "Reviewing React and frontend implementations",
    "Evaluating ASP.NET Core API designs",
    "Reviewing Azure and AWS cloud solutions",
    "Identifying technical inaccuracies and hallucinations",
    "Evaluating scalability and performance",
    "Reviewing database and API approaches",
    "Assessing CI/CD and Azure DevOps solutions",
    "Providing structured technical feedback",
    "Identifying gaps in AI model understanding"
  ],

  problemSolvingSteps: [
    "Understand the business and technical requirements.",
    "Analyze the existing application architecture.",
    "Identify the root cause of technical issues.",
    "Evaluate possible solutions and trade-offs.",
    "Implement a clean and scalable solution.",
    "Integrate and test frontend, backend, and database components.",
    "Validate performance, security, and maintainability.",
    "Deploy and monitor using appropriate cloud and DevOps practices.",
    "Document the solution and communicate the technical approach clearly."
  ],

  techStackSummary: {
    Languages: ["C#", "JavaScript", "TypeScript", "SQL"],
    Backend: [".NET", ".NET Core", "ASP.NET Core", "Web API", "Entity Framework Core", "LINQ"],
    Frontend: ["React", "HTML5", "CSS3", "JavaScript", "TypeScript"],
    Databases: ["SQL Server", "Relational Database Design", "Query Optimization"],
    Cloud: ["Microsoft Azure", "AWS"],
    DevOps: ["Azure DevOps", "Azure Repos", "Azure Pipelines", "CI/CD", "Git", "Docker"],
    Architecture: ["Microservices", "REST APIs", "Clean Architecture", "SOLID", "Design Patterns"],
    Practices: ["Code Review", "Unit Testing", "Debugging", "Performance Optimization", "Technical Documentation"]
  },

  whatIBring: [
    "Strong C# and .NET development experience",
    "Full-stack development using React + .NET",
    "Experience with AWS and Microsoft Azure",
    "Strong Azure DevOps and CI/CD knowledge",
    "Backend API and integration expertise",
    "Modern frontend development experience",
    "Scalable application architecture knowledge",
    "Strong debugging and problem-solving skills",
    "Code review and optimization capabilities",
    "Clear technical communication",
    "Experience working with distributed teams",
    "Ability to evaluate AI-generated technical solutions"
  ]
};