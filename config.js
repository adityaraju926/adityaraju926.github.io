const PORTFOLIO_CONFIG = {
    personal: {
        name: "Aditya Raju",
        tagline: "Software Engineer",
        email: "aditya.raju@duke.edu",
        github: "https://github.com/adityaraju926",
        location: "Charlotte, NC"
    },

    about: {
        text: "Hey There! I'm Aditya Raju, an engineer who loves to build and learn new things. I'm currently a Master's of Engineering student at Duke University, where I'm pursuing a degree in Artificial Intelligence. I also have experience in research and industry so feel free to poke around to learn more about me!"
    },  

    experience: [
        {
            title: "Technology Architecture Senior Analyst",
            company: "Accenture",
            duration: "June 2023 - Present",
            location: "Charlotte, NC",
            achievements: [
                "Currently, a developer on GraphQL service team that handles over 4 million requests from clients a day in the Credit Card Technology Line of Business",
                "Previously, worked as a developer on the Credit Bureau team within the same LoB that handles data from major credit bureaus for pre-approval decisions. Specifically focused on the resiliency portion of the application by creating automation scripts and provisioning infrastructure for an RTO less than 15 minutes",
            ]
        },
        {
            title: "DevOps Engineering Intern",
            company: "SAS",
            duration: "May 2022 - May 2023",
            location: "Cary, NC",
            achievements: [
                "Responsible for creating a production-ready Docker image vulnerability scanning tool for the IaC team",
            ]
        },
        {
            title: "NLP Undergraduate Researcher",
            company: "UNC Charlotte",
            duration: "Aug 2022 - June 2023",
            location: "Charlotte, NC",
            achievements: [
                "Comparative study done between various sentiment analysis, summarization, and clustering techniques on student reflections within UNC Charlotte",
                "Successfully defended the research against panel of esteemed professors",
            ]
        }
    ],

    education: [
        {
            degree: "Master's of Engineering in Artificial Intelligence",
            institution: "Duke University - Pratt School of Engineering",
            duration: "Aug 2024 - Present",
            focus: "Courses: Management for High-Tech Startups, Business Fundamentals for Engineers, Modeling Process and Algorithms, Sourcing Data for Analytics, Deep Learning Applications, Alternative Data, Machine Learning for Fintech"
        },
        {
            degree: "Honors Bachelor of Science in Computer Science, Concentration in Data Science",
            institution: "UNC Charlotte - School of Data Science",
            duration: "2019 - 2023",
            focus: "Courses: Data Structures, Operating Systems, Software Engineering, Computer Architecture, Cloud Computing, Data Mining, Visual Analytics"
        }
    ],

    skills: {
        "Languages": ["Java", "Python", "Golang", "Groovy"],
        "Cloud, DevOps, and Infrastructure": ["AWS (Lambda, Cloudwatch, Fargate, SNS, SQS, Route53, CodeDeploy, Step Functions, CloudFormation, Secrets Manager, DynamoDB, DocumentDB)", "Docker", "Jenkins", "Aqua Security", "Azure (ACR, AKS)", "Harbor", "Hashicorp Vault"],
        "Tools and Technologies": ["GraphQL", "Splunk", "Grafana", "Jupyter Notebook", "Cursor IDE", "VS Code", "Postman", "Copilot", "PyTorch", "Tensorflow", "Insomnia"],
        "Collaboration": ["Git", "Jira", "Confluence", "Slack", "Zoom", "Microsoft Teams", "G-Suite"]
    },

    projects: [
        {
            title: "Simplify English",
            description: "A full-stack application that allows users to input a URL via the UI and select the level of english that they self-identify with. Upon pressing the button, the text in the URL will be scraped and depending on the level selected, an extractive summary will be created.",
            technologies: ["Streamlit", "Python", "Scikit-Learn", "Google T5", "spaCy", "BeautifulSoup", "NumPy"]
        },
        {
            title: "Workout Assistant",
            description: "A full-stack application that allows users to input your workout experience, age, and height. Based on this information, personalized workouts with descriptions will be provided to the user.",
            technologies: ["Streamlit", "Python", "Scikit-learn", "Transformers", "PyTorch", "TensorFlow"]
        },
        {
            title: "Mediscrub",
            description: "A full-stack application that allows users to input PDF documents via the UI and process medical documents by removing PHI and summarizing the content",
            technologies: ["Streamlit", "Python", "Scikit-learn", "Transformers", "PyTorch", "GLiNER", "spaCy", "NLTK", "PdfPlumber"]
        }
    ],

    blog: [
        {
            title: "Welcome to my blog!",
            date: "",
            excerpt: "",
            readTime: "",
            tags: ["Welcome", "Introduction"]
        }
    ],

    contact: {
        message: "Feel free to reach out if you'd like to connect!"
    },

    theme: {
        primaryColor: "#ffffff",
        secondaryColor: "#60a5fa",
        textColor: "#ffffff",
        backgroundColor: "#0f172a",
        accentColor: "#1e293b"
    },

    seo: {
        title: "Aditya Raju - Software Engineer",
        description: "Devleoper portfolio of Aditya Raju",
        keywords: "software engineer, developer, full-stack, machine learning, cloud, portfolio",
        author: "Aditya Raju"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
