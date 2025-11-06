import js from "../../components/images/SVG/js.svg";
import react from "../../components/images/SVG/react.svg";
import tailwind from "../../components/images/SVG/tailwind.svg";
import node from "../../components/images/SVG/node.svg";
import vite from "../../components/images/SVG/vite.png";
import mongo from "../../components/images/SVG/mongo.svg";
import astro from "../../components/images/SVG/astro.svg";

// Website

import website from "../../components/images/projectImages/website/website_view.png";
import websiteView from "../../components/images/projectImages/website/website_cover.png";

// Craft Tracker Images
import craftView from "../../components/images/projectImages/craftTracker/craft_view.png";
import craftChallenges from "../../components/images/projectImages/craftTracker/craft_challenges.png";
import craftOne from "../../components/images/projectImages/craftTracker/craft_one.png";
import craftTwo from "../../components/images/projectImages/craftTracker/craft_two.png";
import craftThree from "../../components/images/projectImages/craftTracker/craft_three.png";

// Greenspace Images
import greenspace from "../../components/images/projectImages/greenspace/greenspace_cover.png";
import greenspaceView from "../../components/images/projectImages/greenspace/greenspace_view.png";

// MemoryImages
import memoryView from "../../components/images/projectImages/memoryGame/memory_view.png";
import memoryChallenges from "../../components/images/projectImages/memoryGame/memory_challenges.png";
import memoryOne from "../../components/images/projectImages/memoryGame/memory_one.png";

// Stardew Images
import stardewView from "../../components/images/projectImages/stardew/stardew_view.png";
import stardewChallenges from "../../components/images/projectImages/stardew/stardew_challenges.png";
import stardewOne from "../../components/images/projectImages/stardew/stardew_one.png";
import stardewTwo from "../../components/images/projectImages/stardew/stardew_two.png";

// CV images
import cvView from "../../components/images/projectImages/cvBuilder/cv_view.png";
import cvChallenges from "../../components/images/projectImages/cvBuilder/cv_challenges.png";
import cvOne from "../../components/images/projectImages/cvBuilder/cv_one.png";
import cvTwo from "../../components/images/projectImages/cvBuilder/cv_two.png";

// Weather Images
import weatherView from "../../components/images/projectImages/weatherApp/weather_view.png";
import weatherChallenges from "../../components/images/projectImages/weatherApp/weather_challenges.png";

// Etch-a-Sketch images
import sketchView from "../../components/images/projectImages/etchASketch/sketch_view.png";
import sketchChallenges from "../../components/images/projectImages/etchASketch/sketch_challenges.png";

// TO_DO List images
import toDoView from "../../components/images/projectImages/toDoList/toDo_view.png";
import toDoChallenges from "../../components/images/projectImages/toDoList/toDo_challenges.png";

// Shopping Cart Images
import shoppingCartView from "../../components/images/projectImages/shoppingCart/shoppingCart_view.png";
import shoppingCartChallenges from "../../components/images/projectImages/shoppingCart/shoppingCart_challenges.png";

// mock Blog
import blogView from "../../components/images/projectImages/mockBlog/mockBlog_view.png";
import blogChallenges from "../../components/images/projectImages/mockBlog/mockBlog_challenges.png";

import stardew from "../../components/images/projectImages/stardew/Stardew.png";
import memory from "../../components/images/projectImages/memoryGame/memory_cover.png";
import CVbuilder from "../../components/images/projectImages/cvBuilder/CVbuilder_cover.png";
import weatherApp from "../../components/images/projectImages/weatherApp/weather_view.png";
import sketchApp from "../../components/images/projectImages/etchASketch/sketch_cover.png";
import toDoList from "../../components/images/projectImages/toDoList/toDo_cover.png";
import shoppingCart from "../../components/images/projectImages/shoppingCart/shoppingCart_cover.png";
import craftTracker from "../../components/images/projectImages/craftTracker/craft_cover.png";
import mockBlog from "../../components/images/projectImages/mockBlog/mockBlog_cover.png";

export const projects = [
      {
    id: "website",
    link: "website",
    image: website,
    title: "Client Website",
    description:
      "Created a visually engaging and user-friendly website for a company, showcasing their full range of products and services. The site includes clear informational sections, organized product displays, and custom contact forms to enhance accessibility and communication.",
    features: [
      "Organized and presented the company's full range of offerings with clear, visually consistent layouts",
      "Built custom forms to streamline customer inquiries and improve communication.",
      "Ensured seamless performance and usability across desktop, tablet, and mobile devices.",
    ],
    takeaways:
      "This was a great challenge in creating a mock social media platform and being able to experience how the web of schema information interacts with each element. I really enjoyed mapping out the user functionality of the site and feel pleased with my results. I think this app really put into perspective the never-ending tasks complex projects seems to have and how to go about breaking down tasks into smaller chunks rather than getting overwhelmed at the big picture.",
    summary:
      "Developed a responsive company website featuring detailed service information and integrated contact forms to improve client engagement.",
    view: websiteView,
    github: "https://github.com/nowosimm/greenspace",
    technologies: [react, tailwind, astro],
  },
  {
    id: "craft-tracker",
    link: "craft-tracker",
    image: craftTracker,
    title: "Craft Tracker",
    description:
      "A hobby and crafting social platform that blends the homemade charm of Etsy with the inspiration of Pinterest, while adding a strong social layer. Users can log project details, share ideas, and interact with other makers, with all data stored and organized in MongoDB.",
    features: [
      "User and project schemas with likes, comments, and profile data",
      "Detailed project storage for notes, materials, links, and images",
      "Interconnected MongoDB virtual schemas for efficient data retrieval",
    ],
    takeaways:
      "This was a great challenge in creating a mock social media platform and being able to experience how the web of schema information interacts with each element. I really enjoyed mapping out the user functionality of the site and feel pleased with my results. I think this app really put into perspective the never-ending tasks complex projects seems to have and how to go about breaking down tasks into smaller chunks rather than getting overwhelmed at the big picture.",
    summary:
      "Mock social media page for crafter's and hobbyists to share their work. Users can add friends, like and comment on posts and store material information for later reference.",
    view: craftView,
    challengesImage: craftChallenges,
    image1: craftOne,
    image2: craftTwo,
    image3: craftThree,
    github: "https://github.com/nowosimm/craft-tracker",
    technologies: [react, vite, node],
  },
    {
    id: "greenspace",
    link: "greenspace",
    image: greenspaceView,
    title: "Greenspace",
    description:
      "A houseplant management app that helps users track and care for their plants. Users can upload images, record care details, and schedule reminders for watering and other tasks. All user and plant data is stored in MongoDB, ensuring persistent and organized recordkeeping.",
    features: [
      "Upload and manage plant images with care notes and task details",
      "Calendar-based reminders for watering and maintenance",
      "MongoDB integration for storing user, plant, and schedule data",
    ],
    takeaways:
      "This was a great challenge in creating a mock social media platform and being able to experience how the web of schema information interacts with each element. I really enjoyed mapping out the user functionality of the site and feel pleased with my results. I think this app really put into perspective the never-ending tasks complex projects seems to have and how to go about breaking down tasks into smaller chunks rather than getting overwhelmed at the big picture.",
    summary:
      "Personal plant care tracker that allows users to record watering and misting schedules, upload progress photos, and view their plant care history over time. ",
    view: greenspace,
    github: "https://github.com/nowosimm/greenspace",
    technologies: [react, vite, node],
  },
  {
    id: "memory-game",
    link: "memory-game",
    image: memory,
    title: "Animal Crossing Memory Game",
    description:
      "A themed memory game inspired by Animal Crossing. Since no suitable API was available, all character images were collected manually. The project focuses on game logic, including randomized card layouts and win condition handling, resulting in a fun and visually charming experience.",
    features: [
      "Custom Animal Crossing dataset built from manually sourced images",
      "Randomized card shuffling and match detection logic",
      "Win condition handling with game state management",
    ],
    challenges:
      "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn't be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call.",
    takeaways:
      "It was really beneficial to see a game put together from start to finish. It was a great way to mindfully think about how every action affects the next, especially when considering what it takes to win or lose each round. Being able to think logically in that way was an eye opener, showing that this kind of problem solving isn’t so different from tackling more complex programming challenges. The ability to break each problem down into smaller pieces makes problem solving much less intimidating.",
    summary:
      "Interactive memory game that challenges players to remember and match previous clicks, tracks their progress with a running high score, and includes functionality to start fresh or restart a game.",
    view: memoryView,
    challengesImage: memoryChallenges,
    image1: memoryOne,
    github: "https://github.com/nowosimm/memory-game",
    technologies: [react, vite],
  },
  {
    id: "stardew-guide",
    link: "stardew-guide",
    image: stardew,
    title: "Stardew Valley Recipe Guide",
    description:
      "Born out of the frustration of cross-referencing wikis, Reddit threads, and personal notes, this tracker streamlines recipe management for Stardew Valley. Items are organized into categories with seasonal filters, counters track collection progress, and completed items automatically highlight for quick visual reference.",
    features: [
      "Categorized item lists with seasonal filtering",
      "Counters for tracking quantities of collected items",
      "Dynamic card states that turn green once requirements are met",
    ],
    challenges:
      "There were a few challenges I encountered during the course of making this guide. The first being the only way to get the information was via the Wiki page making I would have to gather all of the data myself. Thinking ChatGPT would be of assistance, I quickly realized it was mining false information and just making a lot of stuff up, meaning I would be doing it the old-fashioned way. The next challenge I encountered was filters and sub-filters to be able to effectively sort information. It was a good challenge in thinking beyond just one layer of filtering and looking at all the possible combinations that could be sorted.",
    takeaways:
      "I always hear that using ChatGPT should be avoided, and this was the project that really confirmed that for me. When I had used it in the past, it was always on topics I was not as confident in, so being able to recognize mistakes is not as likely. It took me already knowing the correct answer and just trying to use it to be more efficient to fully understand how common it is to produce incorrect responses. ",
    summary:
      "Data log site that tracks every ingredient needed to achieve the Gourmet Chef milestone, with features for sorting by season and ingredient type to make planning and progress tracking easier.",
    view: stardewView,
    challengesImage: stardewChallenges,
    image1: stardewOne,
    image2: stardewTwo,
    github: "https://github.com/nowosimm/stardew-guide",
    technologies: [js, vite],
  },
  {
    id: "mock-blog",
    link: "mock-blog",
    image: mockBlog,
    title: "Mock Blog Project",
    description:
      "A full-stack blog application built to explore more complex MongoDB relationships. The project supports users, posts, likes, and comments, with Passport.js handling authentication. This project was a valuable exercise in designing relational data structures and implementing secure user flows.",
    features: [
      "User authentication and session handling with Passport.js",
      "MongoDB schemas for users, posts, comments, and likes",
      "Interconnected data models to manage relationships between entities",
    ],
    challenges:
      "There were a lot of complexities with this project as it was my first time using MongoDB in a more complex way. It was my first time creating a full application using passport to store login information, and creating routes to send that data and setting up passport correctly proved to be a challenge. This project made me realize how important it is to put imports in the correct order and how much of a headache that can cause if just one item is out of place.",
    takeaways:
      "Learning how to use passport authenticate with MongoDB deemed challenged, yet once it was properly set up, made the storing of user login information much more manageable. It was really fun to see how likes and comments updated in real time and would change based on who the current user was.",
    summary:
      "Mock blog application using MongoDB that allows users to create and publish posts, interact through comments, and experience the basic functionality of a full blogging platform.",
    view: blogView,
    challengesImage: blogChallenges,
    github: "https://github.com/nowosimm/mock-blog",
    technologies: [js, node, mongo],
  },
  {
    id: "to-do",
    link: "to-do",
    image: toDoList,
    title: "To-Do List App",
    description:
      "A lightweight task management application built with core CRUD functionality. To ensure persistence across sessions without a backend, the app leverages browser local storage to save user data directly on the client’s machine. This project was a great introduction to handling state and persistence outside of a database.",
    view: toDoView,
    features: [
      "Add, update, and delete tasks in real-time",
      "Data persistence using browser local storage",
      "Minimal and responsive interface for simple task management",
    ],
    challenges:
      "This being my first project using local storage, I spent a lot of time researching and trying to get a better understanding on how to properly use this function. I found it to be pretty straightforward concept and did not have much trouble getting it set up. All I would need to do was create a saveProjects() function that handled grabbing and sending the information to the local storage so when the page reloaded, all the entered data was still there. ",
    summary:
      "To-do task list application that lets users organize tasks into specific projects or view them all together, with sorting options by due date to help manage priorities more effectively",
    challengesImage: toDoChallenges,
    takeaways:
      "This was a great project to introduce local storage and opened the doors to being able to actually save information that has been entered. I found the set up to be pretty straightforward and enjoyed how this project has simple bones yet the opportunity to learn about more concepts and their usage.",
    github: "https://github.com/nowosimm/ToDo",
    technologies: [js],
  },
  // {
  //   id: "etch-a-sketch",
  //   id: "linkch-a-sketch",
  //   image: sketchApp,
  //   title: "Etch-A-Sketch Clone",
  //   description:
  //     "I set out to create an Etch-a-Sketch board with different color and size options for the user to play with. It was a fun project to work on and was good practice in using functions I don't find myself needing often, like using the mousedown feature. ",
  //   challenges:
  //     "I had already worked out some of the basic setup required in previous projects such as creating grids  and different options for the users to select. Using mousedown was something I did not have as much experience in and had to do some research on how to implement in the way I wanted. I found for this project it was best to start the drawing feature on mousedown and end it on mouseup.",
  //   takeaways:
  //     "This was a project that was just fun to make and incorporated some things I already knew with some elements that were fun to revisit. I think these types of re-creation projects are a great way to give a mock experience of working on an end goal with a client where you have an idea of what you are building towards and having to work within those boundaries.",
  //   view: sketchView,
  //   challengesImage: sketchChallenges,
  // },
  {
    id: "weather-app",
    link: "weather-app",
    image: weatherApp,
    title: "Weather App",
    description:
      "A JavaScript project inspired by The Odin Project curriculum, designed to practice working with APIs. The app fetches and displays real-time weather data, requiring the use of async/await for handling asynchronous API calls. This was my first exposure to APIs, making it both a challenge and a rewarding learning experience.",
    features: [
      "Fetch and display live weather data from an external API",
      "Async/await implementation for handling asynchronous requests",
      "Search functionality for retrieving weather by city",
    ],
    challenges:
      "I found the initial setup of getting my API running was quite challenging from finding the correct documentation to getting Async Await up and running. I have found that documentation sometimes leaves things up to interpretation and as someone who had such a base level of knowledge, filling in those blanks sometimes leaves me lost and set out on a wild goose chase on programming forums. Once the API was running, I found the actual data mining to be really straight forward!",
    takeaways:
      "Having this new super power of being able to grab information about almost everything is very exciting! Gone are the days of painstakingly gathering images and information and sorting it in my applications. This really allowed me to work on some fun projects and feel less confined to what I was able to create.",
    summary:
      "Weather application that pulls real-time data from an API to display a three-day forecast, complete with weather icons, and includes a search feature for looking up different cities.",
    view: weatherView,
    challengesImage: weatherChallenges,
    github: "https://github.com/nowosimm/weather-app",
    technologies: [js, node, mongo, vite],
  },
  {
    id: "shopping-cart",
    link: "shopping-cart",
    image: shoppingCart,
    title: "Mock Shopping Cart",
    description:
      "A practice e-commerce application built to explore site functionality and user interaction. This project focused on managing product listings, cart state, and total calculations while creating a smooth user experience. Tailwind CSS was used for styling with pre-built UI components, providing both flexibility and challenges in customization.",
    features: [
      "Add multiple products to the cart and view a running total",
      "Interactive cart state management for an improved shopping flow",
      "Styled with Tailwind CSS using customizable pre-built UI components",
    ],
    challenges:
      "This was my first time using Tailwind for UI elements and I found it to be a really difficult experience. I really enjoy using Tailwind for normal CSS styling, however, when using it for their pre-made components I found the code to be overwhelming and over-complicated. Since this project, I have discovered that I enjoy using Mantine's components due to their simplicity and ease of use.",
    takeaways:
      "I am glad that I tried using Tailwind UI components as it led me to find other options such as Mantine that I enjoy using much more. While I don't like to solely rely on these builders, it is great to use when I need a more complicated component or to see how accessibility should be properly used. ",
    summary:
      "Mock shopping page that allows users to browse products, add multiple items to a cart, and view an updated total, simulating the core functionality of an e-commerce site.",
    view: shoppingCartView,
    challengesImage: shoppingCartChallenges,
    github: "https://github.com/nowosimm/shopping-cart",
    technologies: [react, node, mongo, tailwind],
  },
  {
    id: "resume-builder",
    link: "resume-builder",
    image: CVbuilder,
    title: "Resume Builder",
    description:
      "A resume-building application inspired by The Odin Project JavaScript curriculum. This project focused on using state to dynamically update entry fields, giving me a strong foundation in state management and UI relationships. It was a valuable first step in creating interactive, data-driven applications.",
    features: [
      "Dynamic form inputs that update CV entries in real time",
      "State management for controlling form data and display",
      "Customizable layout for CV presentation",
    ],
    challenges:
      "My first application of useState() gave me a few challenges to work through. At first, it was hard to wrap my head around the idea of passing stored state values down the line to populate inputs in other components. It took a lot of trial and error to get the data passed correctly but I think that was a really important step in getting a better understanding of the concept.",
    takeaways:
      "It was really exciting to see how much more could be accomplished with a basic understanding of useState() properties. This was a turning point for me in my journey as it opened the doors to so much more complex and interesting projects. Looking back now it is hard to imagine creating any application without using state.",
    summary:
      "CV builder application that allows users to input their education, work experience, and personal information, customize fonts, and toggle which details are viewable.",
    view: cvView,
    challengesImage: cvChallenges,
    image1: cvOne,
    image2: cvTwo,
    github: "https://github.com/nowosimm/cv-maker",
    technologies: [vite, react],
  },
];
