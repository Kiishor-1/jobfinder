const sampleJobs = [
    {
        title: "Frontend Developer",
        company: "Tech Innovators Ltd.",
        logoUrl: "https://example.com/logo1.png",
        salary: {
            from: 600000,
            to: 900000,
        },
        jobType: "Full-Time",
        site: "Remote",
        location: "Bengaluru, India",
        vacancies: 3,
        duration: 12, // Duration in months
        description: "Build responsive user interfaces with React and modern web technologies.",
        about: "Tech Innovators is a cutting-edge company specializing in web development solutions for a global clientele.",
        aboutJob: {
            description: "You'll collaborate with the design team to create seamless user experiences.",
            responsibility: [
                "Develop front-end features using React.",
                "Optimize applications for maximum speed and scalability.",
                "Work closely with UI/UX designers to implement design systems.",
            ],
        },
        additionalInformation: "Flexible work hours and fully remote work options.",
        skills: ["JavaScript", "React", "CSS", "HTML"]
    },
    {
        title: "Backend Developer",
        company: "SaaS Solutions",
        logoUrl: "https://example.com/logo2.png",
        salary: {
            from: 800000,
            to: 1200000,
        },
        jobType: "Full-Time",
        site: "Onsite",
        location: "Mumbai, India",
        vacancies: 2,
        duration: 18, // Duration in months
        description: "Develop robust backend systems with Node.js and MongoDB.",
        about: "SaaS Solutions delivers enterprise-level backend services for scalable software.",
        aboutJob: {
            description: "As a backend developer, you'll design and implement RESTful APIs and work on scalable backend systems.",
            responsibility: [
                "Design RESTful APIs for internal and external use.",
                "Manage database schemas and optimize queries.",
                "Collaborate with the front-end team to integrate APIs."
            ],
        },
        additionalInformation: "Onsite gym and lunch provided.",
        skills: ["Node.js", "MongoDB", "Express", "API Design"]
    },
    {
        title: "Full Stack Developer",
        company: "WebDev Corp.",
        logoUrl: "https://example.com/logo3.png",
        salary: {
            from: 700000,
            to: 1000000,
        },
        jobType: "Full-Time",
        site: "Remote",
        location: "Hyderabad, India",
        vacancies: 4,
        duration: 24, // Duration in months
        description: "Work on both frontend and backend of web applications using modern technologies.",
        about: "WebDev Corp. creates high-performing, scalable web applications for startups and enterprises.",
        aboutJob: {
            description: "Join the full stack development team to build end-to-end solutions for clients.",
            responsibility: [
                "Develop user-facing features and backend services.",
                "Collaborate with other developers and designers.",
                "Maintain the reliability of both frontend and backend."
            ],
        },
        additionalInformation: "Remote work with occasional in-person meetings.",
        skills: ["JavaScript", "React", "Node.js", "SQL"]
    },
    {
        title: "DevOps Engineer",
        company: "CloudOps Inc.",
        logoUrl: "https://example.com/logo4.png",
        salary: {
            from: 900000,
            to: 1300000,
        },
        jobType: "Full-Time",
        site: "Onsite",
        location: "Pune, India",
        vacancies: 1,
        duration: 12, // Duration in months
        description: "Manage cloud infrastructure and CI/CD pipelines to ensure smooth operations.",
        about: "CloudOps Inc. specializes in providing cloud infrastructure solutions to enterprises.",
        aboutJob: {
            description: "You'll work with the development team to deploy and monitor cloud services.",
            responsibility: [
                "Manage AWS infrastructure.",
                "Automate CI/CD pipelines.",
                "Monitor performance and troubleshoot issues."
            ],
        },
        additionalInformation: "Access to the latest DevOps tools and cloud services.",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
        title: "Data Scientist",
        company: "Data Insights Ltd.",
        logoUrl: "https://example.com/logo5.png",
        salary: {
            from: 500000,
            to: 800000,
        },
        jobType: "Part-Time",
        site: "Remote",
        location: "Delhi, India",
        vacancies: 2,
        duration: 6, // Duration in months
        description: "Analyze large datasets to extract insights and build machine learning models.",
        about: "Data Insights Ltd. uses data analytics to drive business intelligence for its clients.",
        aboutJob: {
            description: "Join the data science team to work on predictive models and data analysis projects.",
            responsibility: [
                "Analyze complex datasets to inform business decisions.",
                "Develop predictive models using machine learning algorithms.",
                "Collaborate with data engineers to streamline data processes."
            ],
        },
        additionalInformation: "Opportunity to work on real-world business challenges.",
        skills: ["Python", "Machine Learning", "Data Analysis", "SQL"]
    },
    {
        title: "UI/UX Designer",
        company: "Creative Designs Agency",
        logoUrl: "https://example.com/logo6.png",
        salary: {
            from: 400000,
            to: 700000,
        },
        jobType: "Full-Time",
        site: "Onsite",
        location: "Chennai, India",
        vacancies: 1,
        duration: 18, // Duration in months
        description: "Design intuitive user interfaces and enhance user experience across platforms.",
        about: "Creative Designs Agency creates visually stunning and user-friendly designs for mobile and web applications.",
        aboutJob: {
            description: "You'll work closely with the development team to create wireframes, prototypes, and final designs.",
            responsibility: [
                "Design user interfaces using Figma and Adobe XD.",
                "Collaborate with developers to ensure design feasibility.",
                "Conduct user research and usability testing."
            ],
        },
        additionalInformation: "Collaborative work environment with designers and developers.",
        skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"]
    },
    {
        title: "Project Manager",
        company: "Agile Solutions Pvt. Ltd.",
        logoUrl: "https://example.com/logo7.png",
        salary: {
            from: 1000000,
            to: 1500000,
        },
        jobType: "Full-Time",
        site: "Onsite",
        location: "Kolkata, India",
        vacancies: 2,
        duration: 24, // Duration in months
        description: "Lead software development projects, ensuring they are delivered on time and within budget.",
        about: "Agile Solutions is a project management consultancy specializing in software development.",
        aboutJob: {
            description: "You'll manage multiple software development projects and coordinate with teams to ensure successful delivery.",
            responsibility: [
                "Lead daily stand-ups and project planning sessions.",
                "Ensure timely delivery of software projects.",
                "Manage budgets and resources efficiently."
            ],
        },
        additionalInformation: "Opportunity to work on international projects.",
        skills: ["Agile", "Scrum", "Project Management", "Team Leadership"]
    },
    {
        title: "Quality Assurance Engineer",
        company: "QA Experts Ltd.",
        logoUrl: "https://example.com/logo8.png",
        salary: {
            from: 500000,
            to: 800000,
        },
        jobType: "Full-Time",
        site: "Onsite",
        location: "Ahmedabad, India",
        vacancies: 1,
        duration: 12, // Duration in months
        description: "Test and validate software solutions to ensure quality and performance.",
        about: "QA Experts Ltd. provides specialized software testing services to ensure quality and compliance.",
        aboutJob: {
            description: "You'll be responsible for creating test cases, identifying bugs, and working with developers to ensure quality.",
            responsibility: [
                "Write and execute test cases.",
                "Collaborate with developers to resolve issues.",
                "Ensure software meets performance and security standards."
            ],
        },
        additionalInformation: "Great opportunity to work with cutting-edge software testing tools.",
        skills: ["Manual Testing", "Automation Testing", "Selenium", "JIRA"]
    },
    {
        title: "Mobile App Developer",
        company: "AppWorks Technologies",
        logoUrl: "https://example.com/logo9.png",
        salary: {
            from: 600000,
            to: 1000000,
        },
        jobType: "Full-Time",
        site: "Remote",
        location: "Gurgaon, India",
        vacancies: 3,
        duration: 12, // Duration in months
        description: "Develop cross-platform mobile apps using Flutter.",
        about: "AppWorks specializes in creating mobile applications for Android and iOS using Flutter.",
        aboutJob: {
            description: "You'll build and maintain mobile apps that are performant and user-friendly.",
            responsibility: [
                "Develop mobile applications using Flutter.",
                "Optimize apps for performance and reliability.",
                "Collaborate with designers and backend developers."
            ],
        },
        additionalInformation: "Flexible remote work options available.",
        skills: ["Flutter", "Dart", "iOS", "Android"]
    },
    {
        title: "Digital Marketing Specialist",
        company: "Marketing Gurus Ltd.",
        logoUrl: "https://example.com/logo10.png",
        salary: {
            from: 400000,
            to: 600000,
        },
        jobType: "Part-Time",
        site: "Remote",
        location: "Jaipur, India",
        vacancies: 1,
        duration: 6, // Duration in months
        description: "Create and execute digital marketing strategies to boost online presence.",
        about: "Marketing Gurus helps businesses grow their online presence through effective digital marketing strategies.",
        aboutJob: {
            description: "You'll be responsible for running SEO, PPC, and social media marketing campaigns.",
            responsibility: [
                "Run paid marketing campaigns.",
                "Optimize websites for search engines.",
                "Manage social media accounts and engagement."
            ],
        },
        additionalInformation: "Flexible hours with a focus on work-life balance.",
        skills: ["SEO", "PPC", "Content Marketing", "Social Media Marketing"]
    }
];

module.exports = { data: sampleJobs };
