// Course and quiz data for Kakashi Learning Hub

// YouTube playlists data (mapped as courses)
const coursesData = [
    {
        id: 'devops1',
        title: 'Azure DevOps',
        category: 'DevOps',
        description: 'A complete beginner-friendly playlist to get you started with Azure DevOps. Covers Boards, Repos, Pipelines, Test Plans, and Artifacts with clear, step-by-step tutorials.',
        thumbnail: 'assets/devopspotato.png',
        lessons: 19,
        duration: '2h 10m',
        level: 'Advanced',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLQ10yv3WDdnY3AT2rmT8xfWBDmUFP83X9',
        videos: [
            {
                title: 'Azure DevOps Setup from Scratch – Create Your First Project (Briefing 01)',
                url: 'https://youtu.be/wvdByUVMJ1g?si=1ush1jA-Vku6tfrE',
                duration: '03:24'
            },
            {
                title: 'Azure DevOps Interface Overview + Quick Tweaks (Briefing 02)',
                url: 'https://youtu.be/Lq9kSQUWPyY?si=-Jy-4L0KtXuB2dOc',
                duration: '09:45'
            },
            {
                title: 'Why Your Azure Pipeline Fails: Parallelism Setup (Briefing 03)',
                url: 'https://youtu.be/cxZiYd26Toc?si=rHJ3riOridc8m3au',
                duration: '04:03'
            },
            {
                title: 'Azure DevOps Demo Generator – Sample Projects Fast (Briefing 04)',
                url: 'https://youtu.be/FF3BbxCxNvo?si=6qsdIsVdFlI5pBZj',
                duration: '05:44'
            },
            {
                title: 'Azure Boards – Epics, Features, Stories & Tasks Explained (Briefing 05.1)',
                url: 'https://youtu.be/_Io1XOAQEfA?si=mwJ_BVMYvPDyKHIc',
                duration: '10:51'
            },
            {
                title: 'Azure Boards – Sprints, Backlogs & Iteration Paths (Briefing 05.2)',
                url: 'https://youtu.be/FYadS5ZMhxo?si=s9JDN19LPjVwng21',
                duration: '07:46'
            },
            {
                title: 'Azure Boards UI Customization – Story Points, WIP Limits & Colors (Briefing 05.3)',
                url: 'https://youtu.be/6dBCo6nQjEQ?si=Mo0DgjhVohpgEoeQ',
                duration: '13:01'
            },
            {
                title: 'Azure DevOps Teams – Multi-Team Setup & Clean Sprint Boards (Briefing 05.4)',
                url: 'https://youtu.be/Yt6GHNHwvrA?si=_VXAICW5a8wq2gT0',
                duration: '14:18'
            },
            {
                title: 'Azure Repos UI & Settings Overview – Repositories, Policies & Security (Briefing 06.1)',
                url: 'https://youtu.be/ae1hLQ-IF1Q?si=XFpoE4-fTGWeWIiw',
                duration: '07:57'
            },
            {
                title: 'Clone & Push Azure Repos with Visual Studio – Branch Setup Guide (Briefing 06.2)',
                url: 'https://youtu.be/SRC3I9Qyk3A?si=8JEufVZeHAsS3Tlc',
                duration: '11:37'
            },
            {
                title: 'Cloning Azure Repos in Visual Studio – Team Member Perspective (Briefing 06.3)',
                url: 'https://youtu.be/4ZwgsmZQO_I?si=L5e2-zxicg6P2qG3',
                duration: '02:34'
            },
            {
                title: 'Clone Azure Repos with VS Code – Git Workflow Demo (Briefing 06.4)',
                url: 'https://youtu.be/vmOLx2Zh3lU?si=78TtalDEmA5FvQ54',
                duration: '04:47'
            },
            {
                title: 'Real-World Dev Setup with Azure Repos – Frontend & Backend Projects (Briefing 06.5)',
                url: 'https://youtu.be/lFELe2ZNzSs?si=idaBl-DQk1MaKStO',
                duration: '12:36'
            },
            {
                title: 'Syncing Dev Branches Across Teams – Azure Repos Workflow (Briefing 06.6)',
                url: 'https://youtu.be/8WFYe0bRzQQ?si=-pB3hVcltvNo6WFy',
                duration: '04:24'
            },
            {
                title: 'Pull Requests in Azure DevOps – Feature Branch Workflow (Briefing 06.7)',
                url: 'https://youtu.be/KicQjjwRT7k?si=ALfdwQvKk7Hw4YEX',
                duration: '17:02'
            },
            {
                title: 'Protect Dev Branch with Azure Repos Policies (Briefing 06.8)',
                url: 'https://youtu.be/zt50Hm88P4U?si=h26AFRtD1NPcIl_K',
                duration: '11:38'
            },
            {
                title: 'Hard Reset & Sync Dev Branch – Stay Up To Date (Briefing 06.9)',
                url: 'https://youtu.be/arYO-ayAfCc?si=I9a5oL5-XDBnvF7Q',
                duration: '02:32'
            },
            {
                title: 'Fix Visual Studio Git UI Bug – Remote Branch Cleanup (Briefing 06.10)',
                url: 'https://youtu.be/7P8z-NuXBvo?si=DxltNuKm1sL2Qo2D',
                duration: '01:18'
            },
            {
                title: 'Send Azure DevOps Pull Request Notifications to Discord (Briefing 06.11)',
                url: 'https://youtu.be/KRcZI_otdEA?si=w_hyOgn-P--1tIHG',
                duration: '12:32'
            },
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'azure1',
        title: 'Azure Fundamentals',
        category: 'Cloud',
        description: '​The "Azure" playlist offers a concise introduction to Microsoft Azures core services and functionalities. Ideal for beginners, it covers topics like cloud fundamentals, resource management, and deployment strategies, providing a solid foundation for navigating Azures ecosystem.',
        thumbnail: 'assets/AzurePotato.png',
        lessons: 14,
        duration: '5h 30m',
        level: 'Beginner-Intermediate',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLQ10yv3WDdnbjN7ThlNlv7wVkd_pqbnhH',
        videos: [
            {
                title: 'Create a resource group in Azure',
                url: 'https://youtu.be/Y-eEnooI9_0?si=ePSIfUyGAYzCZvhC',
                duration: '11:42'
            },
            {
                title: 'Cloud terms',
                url: 'https://youtu.be/i_U9TxTlUSM?si=KZyt2CaB1shpEVVA',
                duration: '16:30'
            },
            {
                title: 'Azure Pricing Model',
                url: 'https://youtu.be/HslutSP-SUM?si=xCPWfgpWUvYvy33H',
                duration: '12:15'
            },
            {
                title: 'Azure App services fundamentals',
                url: 'https://youtu.be/kPECboNDoGs?si=vLO95vSPdLHiaP8X',
                duration: '37:59'
            },
            {
                title: 'Azure Budget And Cost managment',
                url: 'https://youtu.be/orIUgBG6ocw?si=AMD3mWXrDfen6CzC',
                duration: '26:56'
            },
            {
                title: 'Azure SQL Server And Database',
                url: 'https://youtu.be/0lFcppmeaU4?si=PhruzjiPcwCKS-3s',
                duration: '22:57'
            },
            {
                title: 'CosmosDB With MongoDB And .NET Step By Step tutorial',
                url: 'https://youtu.be/3rA9egbzq4s?si=0j_jOwux7f_9ad9a',
                duration: '33:20'
            },
            {
                title: 'Azure AKS demo with deployment',
                url: 'https://youtu.be/I39jfFoWZwg?si=vpYwDLDYwa1uBAEv',
                duration: '19:31'
            },
            {
                title: 'Azure logic app demo, azure course part 8',
                url: 'https://youtu.be/1d1X9Wsayf0?si=mchxCfOYOmj1UoPt',
                duration: '37:30'
            },
            {
                title: 'Terraform and Azure for Beginners',
                url: 'https://youtu.be/kYAQ84wOyxw?si=sCQ5NSAcnYrxayRJ',
                duration: '25:32'
            },
            {
                title: 'How to implement CICD with Blazor app, Azure DevOps and Azure App service',
                url: 'https://youtu.be/dA5_2NvoroA?si=HnNIW5TLm8JXbJdB',
                duration: '16:04'
            },
            {
                title: 'Kali Linux Azure VM - Step by Step 2025',
                url: 'https://youtu.be/HgHyH1VsuTY?si=9Hp3xOI3hNkyaVFk',
                duration: '09:12'
            },
            {
                title: 'How to host a website on a virtual machine in Azure',
                url: 'https://youtu.be/RdgqDqgdu3g?si=nGSlHnPjhiga4uZh',
                duration: '14:45'
            },
            {
                title: 'Deploy WPF application to Azure Storage',
                url: 'https://youtu.be/csz5e4-PKX4?si=8slzXx6Znq87qWTA',
                duration: '08:46'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'rpa1',
        title: 'UiPath RPA Development',
        category: 'rpa',
        description: 'Master RPA development with UiPath through step-by-step tutorials and real-world projects.',
        thumbnail: 'assets/happypotato.png',
        lessons: 20,
        duration: '1h 30m',
        level: 'Intermediate',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLQ10yv3WDdnYxsbav5mc9Wp8LF_l2jsfJ',
        videos: [
            {
                title: 'RPA Beginner Course 2025 Zero To Hero - UiPath Installation Part 1',
                url: 'https://youtu.be/5LEfQ04gjo0?si=XlhegKLRaI7VssQt',
                duration: '11:58'
            },
            {
                title: 'Create Your First Robot with UiPath - RPA Beginner Course 2024 Zero To Hero Part 2',
                url: 'https://youtu.be/necHrr4MCho?si=vsY00Tk-ab2MUPky',
                duration: '13:03'
            },
            {
                title: 'Getting To Know UiPath Editor RPA Beginner Course 2024 Zero To Hero - Part 3',
                url: 'https://youtu.be/nGp4AdPA4F8?si=dnP3f7DaMryJmXmT',
                duration: '07:40'
            },
            {
                title: 'UiPath Project Structures Fundamentals - RPA Zero To Hero 2024 Part 4',
                url: 'https://youtu.be/QZXgPLE6SSY?si=Zb1MEX4CoFJmpduc',
                duration: '12:15'
            },
            {
                title: 'How To Send Email and Create ForEach With UiPath and Outlook - RPA Zero To Hero 2024 Part 5',
                url: 'https://youtu.be/YQuXSwo3nbU?si=dRtcLJTiHGQcMD01',
                duration: '25:08'
            },
            {
                title: 'Webscraping with UiPath and Excel - RPA Zero To Hero Part 6',
                url: 'https://youtu.be/XkA0AEV8vA4?si=E0LV4zNruv9nXV2R',
                duration: '12:08'
            },
            {
                title: 'Webscraping From Excel with UiPath - RPA Zero To Hero 2024 Part 7',
                url: 'https://youtu.be/ZCLaihSgHT8?si=bu3Ax7o-u957GJv7',
                duration: '15:40'
            },
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'security1',
        title: 'Azure functions',
        category: 'Serverless Integration',
        description: '​The Azure Functions playlist offers a beginner-friendly introduction to building serverless applications with Azure Functions. It covers essential topics like triggers, bindings, and deployment, providing a solid foundation for developers new to Azures serverless offerings',
        thumbnail: 'assets/functionpotato.png',
        lessons: 18,
        duration: '1h 10m',
        level: 'Beginner',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLQ10yv3WDdnZHPUfXce3HlJPsUI8-5dM6',
        videos: [
            {
                title: 'Azure Functions – What They Are, Setup & Portal Demo (Briefing 01)',
                url: 'https://youtu.be/0pIChjWsIJo?si=fyh78BBSzLh35Jt0',
                duration: '12:'
            },
            {
                title: 'Build Azure Functions in Visual Studio (Mission 01)',
                url: 'https://youtu.be/eV_vAl3R9gM?si=tBZpxvCasSKyrY8J',
                duration: '10:08'
            },
            {
                title: 'Deploy Azure Functions from Visual Studio (Mission 02)',
                url: 'https://youtu.be/uudW5IfQGKw?si=IyzfACNaMUuUj2X5',
                duration: '03:31'
            },
            {
                title: 'Setup & Deploy Azure Functions with VS Code (Mission 03)',
                url: 'https://youtu.be/i_d9maPOrjk?si=cEE6kal59SOjY_do',
                duration: '13:13'
            }, {
                title: 'Setup & Deploy Azure Functions with Rider (Mission 04)',
                url: 'https://youtu.be/VRj4kUvwXfw?si=eFCgZhIuazX6Y45j',
                duration: '13:21'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    },
    {
        id: 'dotnet1',
        title: 'LogicApps',
        category: 'Serverless Integration',
        description: 'Logic App fundamentals',
        thumbnail: 'assets/LogicAppPotato.png',
        lessons: 3,
        duration: '30m',
        level: 'Beginner',
        playlistUrl: 'https://www.youtube.com/playlist?list=PLQ10yv3WDdnbDyz3QF4LlZFrxzXFt5cNa',
        videos: [
            {
                title: 'Azure Logic Apps – What They Are & Why They Matter (Briefing 01)',
                url: 'https://youtu.be/gw_5KNpZMCk?si=pOz4WBU6t9MJsvH-',
                duration: '06:03'
            },
            {
                title: 'Azure Logic Apps – Automate Email Reminders (Mission 01: Monday Transmission)',
                url: 'https://youtu.be/XOjbjpVXDaE?si=K-kDi5c9pdJDxQVK',
                duration: '16:19'
            },
            {
                title: 'Azure Logic Apps – Call Chuck Norris API (Mission 02: Comedy Beacon)',
                url: 'https://youtu.be/r3TfMQ9YLO0?si=9s-54OIUMmMol0SG',
                duration: '04:41'
            }
            // Additional videos will be populated from the YouTube API in a real implementation
        ]
    }
];

// Sample quiz data for courses
const quizData = {
    'devops1': [
        {
            question: 'What is the primary focus of DevOps?',
            options: [
                { text: 'Software development only', correct: false },
                { text: 'Infrastructure management only', correct: false },
                { text: 'Bridging the gap between development and operations', correct: true },
                { text: 'Security testing', correct: false }
            ]
        },
        {
            question: 'Which of the following is NOT a core DevOps practice?',
            options: [
                { text: 'Continuous Integration', correct: false },
                { text: 'Infrastructure as Code', correct: false },
                { text: 'Waterfall Development', correct: true },
                { text: 'Continuous Delivery', correct: false }
            ]
        },
        {
            question: 'What Azure service is primarily used for CI/CD pipelines?',
            options: [
                { text: 'Azure App Service', correct: false },
                { text: 'Azure DevOps', correct: true },
                { text: 'Azure Functions', correct: false },
                { text: 'Azure Kubernetes Service', correct: false }
            ]
        }
    ],
    'azure1': [
        {
            question: 'What is Azure?',
            options: [
                { text: 'A programming language', correct: false },
                { text: 'A cloud computing platform by Microsoft', correct: true },
                { text: 'A database management system', correct: false },
                { text: 'An operating system', correct: false }
            ]
        },
        {
            question: 'Which of the following is NOT an Azure compute service?',
            options: [
                { text: 'Azure Virtual Machines', correct: false },
                { text: 'Azure App Service', correct: false },
                { text: 'Azure DevOps', correct: true },
                { text: 'Azure Functions', correct: false }
            ]
        }
    ],
    // More quizzes for other courses
};

// Helper function to get category display name
function getCategoryName(categoryId) {
    const categories = {
        'devops': 'DevOps',
        'azure': 'Azure',
        'dotnet': '.NET',
        'rpa': 'RPA',
        'security': 'Cybersecurity'
    };
    
    return categories[categoryId] || categoryId;
}

// Progress tracking functions
function saveUserProgress(courseId, videoId, completed) {
    // Get existing progress from localStorage
    let progress = getUserProgress();
    
    // Initialize course progress if it doesn't exist
    if (!progress[courseId]) {
        progress[courseId] = {
            completedVideos: []
        };
    }
    
    // Add or remove video from completed list
    if (completed) {
        // Only add if not already in the list
        if (!progress[courseId].completedVideos.includes(videoId)) {
            progress[courseId].completedVideos.push(videoId);
        }
    } else {
        // Remove from completed list
        progress[courseId].completedVideos = progress[courseId].completedVideos.filter(id => id !== videoId);
    }
    
    // Save to localStorage
    localStorage.setItem('kakashiLearningHubProgress', JSON.stringify(progress));
    
    // Return updated progress
    return progress;
}

function getUserProgress() {
    // Get progress from localStorage or create new object
    const progressData = localStorage.getItem('kakashiLearningHubProgress');
    return progressData ? JSON.parse(progressData) : {};
}

function getCourseProgress(courseId) {
    const progress = getUserProgress();
    
    // If no progress for this course, return 0
    if (!progress[courseId] || !progress[courseId].completedVideos) {
        return 0;
    }
    
    // Find course to get total number of videos
    const course = coursesData.find(c => c.id === courseId);
    if (!course || !course.videos || course.videos.length === 0) {
        return 0;
    }
    
    // Calculate percentage
    const completedCount = progress[courseId].completedVideos.length;
    const totalVideos = course.videos.length;
    return Math.round((completedCount / totalVideos) * 100);
} 