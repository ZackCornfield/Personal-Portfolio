
const projects = [

    {
        id: "mathsplay",
        title: "Maths Play - Unity",
        type: "University/Client Project",
        description: "Mixed Reality (MR) and Desktop App that redfines math education for students and teachers. It combines technology with interactive learning to create more accessible and engaging math experiences.",
        lastUpdated: "2024",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            },
            {
                name: "Thomas Stiles",
                role: "Developer",
            },
            {
                name: "Adam Dabre",
                role: "Developer",
            },
            {
                name: "Jacob Mondi",
                role: "Developer",
            },
            {
                name: "Milad Rakhshbahar",
                role: "Developer",
            },
            {
                name: "Matthew Bradford",
                role: "Developer",
            }
        ],
        projectPlanning: {
            tools: ["Weekly Meetings", "Milanote", "Git/GitHub", "Doxygen", "Microsoft Project"],
            methodology: "Agile/Scrum/Waterfall"
        },
        trailer: {
            url: "https://youtu.be/vDR3iOcPd4Y",   
            thumbnail: "/assets/images/MathsPlay/Nodes.png",
        },
        featuresDeveloped: [
            {
                name: "UI",
                description: "Designed and implemented an intuitive user interface to ensure ease of use for both teachers and students. The UI includes features like creating, modifying, and managing math modules, along with seamless navigation for interactive learning.",
                image: "/assets/images/MathsPlay/UI1.png"
            },
            {
                name: "Nodes/Backend",
                description: "Developed a node-based backend system that serves as the core of the module creation engine. Teachers can use this to build interactive lessons by connecting nodes representing variables, equations, and functions. This modular system makes lesson customization flexible and efficient.",
                image: "/assets/images/MathsPlay/Nodes.png"
            },
            {
                name: "3D Axis System",
                description: "Created an optional 3D axis system that can be toggled on node models to aid in visualizing spatial relationships. Includes an interactive menu to toggle grid lines, reset the grid, and adjust settings, enhancing the clarity of 3D visualizations.",
                image: "/assets/images/MathsPlay/3DAxisSystem.png"
            },
            {
                name: "Scene Placement",
                description: "Developed a scene placement feature that allows users to position and move 3D vector nodes within the environment. This ensures precise placement and alignment of nodes, making it easier for students to interact with the scene during gameplay.",
                image: "/assets/images/MathsPlay/PlacementScene.png"
            }
        ],
        fullDescription: `"Math’s Play" is a mixed reality (MR) and desktop app that redefines math education for students and teachers. It combines technology with interactive learning to make math engaging and accessible. Key features include:

        For Teachers:
        • Create custom virtual classrooms and assign students to networked rooms.
        • Send dynamic math modules (in JSON format) for real-time interaction.
        • Use a powerful node-based engine to design and modify lessons with ease.
        For Students:
        • Join assigned rooms and engage with interactive math modules.
        • Collaborate with peers to explore and solve problems together.
        
        Client Collaboration
        This project was developed in collaboration with a lecturer in Mathematics and Science Education from Murdoch’s School of Education. The lecturer provided key insights into the needs of educators and students, shaping the design and functionality of the application. Working with a real client gave us valuable experience in understanding and addressing user requirements while ensuring the final product aligned with educational goals.`,
        skills: ["Unity", "C#"],
        links: {
        },
        image: "/assets/images/MathsPlay/Nodes.png",
    },
    {
        id: "md-game-engine",
        title: "Game Engine - Murdoch Walkthrough",
        type: "University Project",
        description: "Simulation recreating a university campus area, showcasing a custom-built game engine.",
        lastUpdated: "2024",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            },
            {
                name: "Thomas Stiles",
                role: "Developer",
            },
            {
                name: "Jacob Mondi",
                role: "Developer",
            },
            {
                name: "Milad Rakhshbahar",
                role: "Developer",
            },
        ],
        projectPlanning: {
            tools: ["Weekly Meetings", "Milanote", "Git/GitHub", "Doxygen", "Microsoft Project"],
            methodology: "Agile/Scrum/Waterfall"
        },
        trailer: {
            url: "https://youtu.be/OreWxcXUL-E",
            thumbnail: "/assets/images/MurdochWalkthrough/Environment.png",
        },
        featuresDeveloped: [
            {
                name: "Environment/Rendering",
                description: "Contributed to the mesh rendering process by iterating through all entities with meshes and implementing the logic to render them. Developed the texture manager system for efficient loading and usage of textures, the shader manager for handling shader programs, and the material manager for managing material properties and components. These systems collectively ensure efficient and high-quality rendering within the game engine.",
                image: "/assets/images/MurdochWalkthrough/Environment.png"
            },
            {
                name: "Physics System",
                description: "Designed and implemented a custom resolution system with robust support for both linear and angular physics. Developed a collision detection system for precise interactions, ensuring realistic and engaging physics within the simulation.",
                image: "/assets/images/MurdochWalkthrough/Physics.png"
            },
            {
                name: "World Creation/Design",
                description: "Collaborated on the creation and design of the world environment, ensuring a realistic and immersive experience for users. Utilized 3D scanning technology to capture and replicate the chosen area within the university campus, enhancing the authenticity and detail of the simulation.",
                image: "/assets/images/MurdochWalkthrough/3DScan.png"
            }
        ],
        fullDescription: `Murdoch Walkthrough is a simulation designed to recreate a chosen area within our university campus. The project offers an interactive walkthrough experience while showcasing realistic Newtonian physics and engaging NPC interactions.

        Physics Requirements
        • Develop a custom resolution system incorporating linear and angular physics.

        What We Accomplished:
        • Created a custom resolution system with robust support for both linear and angular physics.
        • Designed and implemented a custom collision detection system for precise interactions.

        AI Requirements
        • Develop an NPC system using an emotion model of our choice to create unique interactions.

        What We Accomplished:
        • Implemented an NPC system using a BDI (Belief, Desire, Intention) model for dynamic and believable NPC behaviors.
        • Developed an emotion model for NPCs using FCM (Fuzzy Cognitive Maps).
        • Built a custom pathfinding system to enable NPCs to navigate the environment effectively.
        • Created a custom dialogue system allowing NPCs to interact with the player. This included a Python interpreter for sentiment analysis and a chatbot system.

        Additional Features
        • To enhance usability, we developed an Engine GUI using ImGUI, which enabled us to easily create and manage scenes and objects within the engine.`,
        skills: ["C++", "GLFW (OpenGL)", "ImGUI", "LUA", "STB_IMAGE", "CMAKE"],
        links: {
        },
        image: "/assets/images/MurdochWalkthrough/Environment.png",
    },
    {
        id: "magazine-service",
        title: "Magazine Service - JavaFX",
        type: "University Project",
        description: "Simple CRUD application for managing magazine subscriptions, showcasing JavaFX and MVC architecture.",
        lastUpdated: "2024",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            }
        ],
        projectPlanning: {
            tools: ["Trello", "Git/GitHub", "Doxygen"],
            methodology: "Agile/Scrum",
        },
        featuresDeveloped: [
            {
                name: "Create Tab",
                description: "The creation pane guides the user through creating a new magazine, the supplements it offers, and the customers who will use the new magazine, if there are any, to begin with. Invalid information is not accepted, and a message will be shown to the user to explain how to fix the issue.",
                image: "/assets/images/MagazineService_Create.png",
            },
            {
                name: "Edit Tab",
                description: "The edit pane allows the user to edit existing supplements or customers using a table view. Exceptions will be caught and explained to the user if the new information is invalid.",
                image: "/assets/images/MagazineService_EditCustomer.png",
            },
            {
                name: "View Tab",
                description: "The view pane allows the user to view the supplement and customer information (including their billing emails), without being able to edit it.",
                image: "/assets/images/MagazineService_ViewCustomer.png",
            }
        ],
        fullDescription: `This application was created using java SE 8 and the JavaFX library for GUI rendering and handling. The purpose was to create a CRUD application designed using OOP. The application supported the serialization of magazines and their customers so they could be loaded and saved from a file. The application also supports limited multithreading when processing the view information.`,
        skills: ["Java", "JavaFX"],
        links: {
        },
        image: "/assets/images/MagazineService_Create.png",
    },
    {
        id: "math-puzzles",
        title: "Math Puzzles",
        type: "University/Client Project",
        description: "Math Games is an MR and PC game developed using Unity that is aimed at helping teachers and students to both teach and learn the more basic math concepts for those in middle school and similar ages.",
        lastUpdated: "2024",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            },
            {
                name: "Thomas Stiles",
                role: "Developer",
            },
            {
                name: "Jacob Mondi",
                role: "Developer",
            },
            {
                name: "Milad Rakhshbahar",
                role: "Developer",
            },
        ],
        projectPlanning: {
            tools: ["Weekly Meetings", "Trello", "Git/GitHub", "Doxygen", "Microsoft Project"],
            methodology: "Agile/Scrum/Waterfall"
        },
        trailer: {
            url: "https://youtu.be/WtQGdN8Rjbw",
            thumbnail: "/assets/images/MathPuzzles_VolumePuzzle.png",
        },
        featuresDeveloped: [
            {
                name: "3D Maze Puzzle",
                description: "Developed a challenging 3D maze puzzle that integrates mathematical concepts into gameplay. Players navigate through 3D floating puzzles, requiring the knowledge and application of movement along the 3D axis.",
                image: "/assets/images/MathPuzzles_3DMaze.png"
            },
            {
                name: "Menu System",
                description: "Created an intuitive menu system that enhances user experience and navigation within the game. This system includes options for settings and levels, ensuring accessibility and ease of use for players.",
                image: "/assets/images/MathPuzzles_MainMenu.png"
            },
            {
                name: "Flashlight Puzzle",
                description: "Designed an engaging flashlight puzzle mechanic where players use light to look through a cube to collect the right object for the current hole. When a user picks up a shape, they can put it onto the dropper and resize it, which incorporates the math concept of 2D dimensions for various shapes, including circles, cubes, and triangles.",
                image: "/assets/images/MathPuzzles_FlashLightPuzzle.png"
            },
            {
                name: "World/Level Design for PC",
                description: "Crafted captivating and visually appealing world and level designs that complement the gameplay mechanics. Each level presents unique challenges and puzzles, encouraging players to apply mathematical reasoning in diverse environments.",
                image: "/assets/images/MathPuzzles_Environment.png"
            },
            {
                name: "Rose Logic",
                description: "Implemented rose logic, which goes with the back story of the game from the story 'The Little Prince'. The rose is used to symbolise and represent how many puzzles the player has completed and gives the player a clear goal of completing the rose. When the player completes a puzzle, an effect occurs, which gives them a new petal.",
                image: "/assets/images/MathPuzzles_RoseLogic.png"
            },
            {
                name: "Sound System",
                description: "Engineered a dynamic sound system that enhances immersion and gameplay experience. This system includes ambient sounds, puzzle-solving cues, and interactive audio elements, enriching the overall atmosphere of the game. With the help of Milad we also introduced a Fox system which talks to the player and gives them quick insight on what to do.",
                image: "/assets/images/MathPuzzles_FoxLogic.png"
            },
            {
                name: "Game Logic",
                description: "Developed the core game logic that governs puzzle mechanics, player interactions, and progression. This includes implementing mathematical rules and algorithms to ensure challenging yet rewarding gameplay experiences for players.",
            }
        ],
        fullDescription: `Math Games is an MR and PC game developed using Unity that is aimed at helping teachers and students to both teach and learn the more basic math concepts for those in middle school and similar ages. During the development of this project, we worked with a client who was a math professor to make sure that the project aligned with their needs and wants for the product. Rather than having complete freedom on what we wanted from this project it required us to learn how to work with external clients and work through compromises on both ends.`,
        skills: ["Unity", "C#"],
        links: {
        },
        image: "/assets/images/MathPuzzles_VolumePuzzle.png",
    },
    {
        id: "pulse",
        title: "Pulse",
        type: "Personal Project",
        description: "A full-stack social media platform where users can create posts, follow people, like content, and interact with others. Built using React, Node.js, and Express.",
        lastUpdated: "2025",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            }
        ],
        projectPlanning: {
            tools: ["Trello", "Git/GitHub"],
            methodology: "Agile/Kanban"
        },
        featuresDeveloped: [
            {
                name: "User Authentication",
                description: "Implemented secure user authentication using JWT and bcrypt for password hashing. Users can sign up, log in, and manage their accounts securely.",
                image: "/assets/images/Pulse/Auth.png"
            },
            {
                name: "Post and Feed System",
                description: "Developed a dynamic post system where users can create, edit, and delete posts. A real-time feed updates with new content from following.",
                image: "/assets/images/Pulse/Post.png"
            },
            {
                name: "Follow System",
                description: "Built a follow system allowing users to follow and unfollow each other, view followings' posts, and manage following.",
                image: "/assets/images/Pulse/Follow.png"
            },
            {
                name: "Likes and Interactions",
                description: "Added the ability to like posts, providing engagement features similar to major social media platforms.",
                image: "/assets/images/Pulse/Like.png"
            }
        ],
        fullDescription: `"Pulse" is a modern social media application built with React, Node.js, and Express, allowing users to connect, share, and interact. Key features include:
    
            • User Authentication: Secure login and registration using JWT.
            • Dynamic Feed: Users can create and view posts from friends in real-time.
            • Follow System: Connect with others through a follow system.
            • Like System: Engage with posts by liking content.
    
            This project was a hands-on experience in full-stack web development, focusing on backend API design, database structuring, and front-end interactivity. It serves as a foundational project in modern web technologies, demonstrating proficiency in React and Node.js.`,
        skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailWind CSS", "HTML"],
        links: {
            github: "https://github.com/ZackCornfield/Pulse",
            demo: "https://pulse-1-7lvu.onrender.com/"
        },
        image: "/assets/images/Pulse/Auth.png",
    },
    {
        id: "portfolio",
        title: "Personal Portfolio",
        type: "Personal Project",
        description: "A modern, responsive portfolio website built with React to showcase my projects, skills, and experience. Designed for easy navigation and scalability.",
        lastUpdated: "2025",
        developmentTeam: [
            {
                name: "Zack Cornfield",
                role: "Developer",
            }
        ],
        projectPlanning: {
            tools: ["Git/GitHub"],
            methodology: "Iterative Development"
        },
        featuresDeveloped: [
            {
                name: "Dynamic Project Pages",
                description: "Designed the portfolio to feature individual project pages with detailed information. This allows for a more detailed breakdown of each project with images, links, and descriptions.",
                image: "/assets/images/Portfolio/Project-Pages.png"
            },
            {
                name: "Responsive Design",
                description: "Implemented a fully responsive layout to ensure the portfolio looks great on all devices, from desktops to mobile screens.",
                image: "/assets/images/Portfolio/Responsive.png"
            },
            {
                name: "Smooth Navigation",
                description: "Developed a clean and intuitive navigation system with smooth scrolling and animated transitions between sections.",
                image: "/assets/images/Portfolio/Navigation.png"
            },
        ],
        fullDescription: `"This personal portfolio is a modern, responsive web application built with React. It serves as a professional showcase of my projects, skills, and experience. 

        Key Features:
        • Dynamic Project Pages: Each project has its own dedicated page for detailed descriptions.
        • Responsive Design: Ensures a great user experience on all devices.
        • Smooth Navigation: Easy access to different sections with animated transitions.

        The portfolio is continuously updated to reflect my latest projects and skills, providing a centralized space for potential employers and collaborators to explore my work."`,
        skills: ["React", "JavaScript", "CSS", "HTML"],  
        links: {
            github: "https://github.com/ZackCornfield/Personal-Portfolio",
        },
        image: "/assets/images/Portfolio/Projects.png",   
    },
];

/* Template for new projects 

{
    id: "project-id",
    title: "Project Title",
    type: "Web Application",
    description: "A brief description of the project.",
    lastUpdated: "YYYY-MM-DD",
    developmentTeam: [
        {
            name: "Developer Name",
            role: "Role",
        }
    ],
    projectPlanning: {
        tools: ["Tool1", "Tool2"],
        methodology: "Agile/Scrum/Waterfall"
    },
    trailer: {
        url: "/path/to/video.mp4",
        thumbnail: "/path/to/thumbnail.png",
    },
    featuresDeveloped: [
        {
            name: "Feature Name",
            description: "Description of the feature.",
            image: "/path/to/image.png"
        }
    ],
    fullDescription: `A detailed description of the project, its goals, and technologies used.`,
    skills: ["Skill1", "Skill2"],  
    links: {
        github: "/path/to/github",
        liveDemo: "/path/to/live/demo",
    },
    image: "/path/to/image.png",
},

*/

export default projects;