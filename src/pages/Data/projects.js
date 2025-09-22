// Craft Tracker Images
import craft_one from "../../components/images/projectImages/craftTracker/craft_view.png";
import craft_challenges from "../../components/images/projectImages/craftTracker/craft_challenges.png";
import craftOne from "../../components/images/projectImages/craftTracker/craft_one.png";
import craftTwo from "../../components/images/projectImages/craftTracker/craft_two.png";
import craftThree from "../../components/images/projectImages/craftTracker/craft_three.png";

// MemoryImages
import memory_Game from "../../components/images/projectImages/memoryGame/memory_view.png";
import memory_Challenges from "../../components/images/projectImages/memoryGame/memory_challenges.png";
import memoryOne from "../../components/images/projectImages/memoryGame/memory_one.png";

// Stardew Images
import stardew_one from "../../components/images/projectImages/stardew/stardew_view.png";
import stardew_challenges from "../../components/images/projectImages/stardew/stardew_challenges.png";
import stardewOne from "../../components/images/projectImages/stardew/stardew_one.png";
import stardewTwo from "../../components/images/projectImages/stardew/stardew_two.png";

// CV images
import cv_one from "../../components/images/projectImages/cvBuilder/CVbuilder.png";
import cv_challenges from "../../components/images/projectImages/cvBuilder/CVchallenges.png";

// Weather Images
import weather_one from "../../components/images/projectImages/weatherApp/weather_cover.png";
import weather_challenges from "../../components/images/projectImages/weatherApp/weather_challenges.png";

// Etch-a-Sketch images
import sketch_one from "../../components/images/projectImages/etchASketch/sketch_view.png";
import sketch_challenges from "../../components/images/projectImages/etchASketch/sketch_challenges.png";

// TO_DO List images
import toDo_one from "../../components/images/projectImages/toDoList/toDo_view.png";
import toDo_challenges from "../../components/images/projectImages/toDoList/toDo_challenges.png";

// Shopping Cart Images
import shoppingCart_one from "../../components/images/projectImages/shoppingCart/shoppingCart_view.png";
import shoppingCart_challenges from "../../components/images/projectImages/shoppingCart/shoppingCart_challenges.png";

// mock Blog
import mockBlog_one from "../../components/images/projectImages/mockBlog/mockBlog_view.png";
import mockBlog_challenges from "../../components/images/projectImages/mockBlog/mockBlog_challenges.png";

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
    id: "craft-tracker",
    link: "craft-tracker",
    image: craftTracker,
    title: "Craft Tracker",
    description:
      "Craft Tracker is a hobby and crafting social media page made to keep past projects all in one space and find + share inspiration between friends. I kind of wanted to mix the homemade feel of scrolling Etsy with the inspiration of Pinterest, but add the social component. I thought it was important for the user to be able to store details on materials, notes, links, and images all in one place to make it easier to reference in the future.",
    challenges:
      "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn't be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    takeaways:
      "This was a great challenge in creating a mock social media platform and being able to experience how the web of schema information interacts with each element. I really enjoyed mapping out the user functionality of the site and feel pleased with my results. I think this app really put into perspective the never-ending tasks complex projects seems to have and how to go about breaking down tasks into smaller chunks rather than getting overwhelmed at the big picture.",
    view: craft_one,
    challengesImage: craft_challenges,
    image1: craftOne,
    image2: craftTwo,
    image3: craftThree,
  },
  {
    id: "memory-game",
    link: "memory-game",
    image: memory,
    title: "Animal Crossing Memory Game",
    description:
      "This was a project I wanted to work on inspired by seeing some pretty fun examples while scoring the internet for ideas. For my memory game, I chose the theme of Animal Crossing and was not able to find an API that matched my needs so a large chunk of time was spent gathering all the images. There were some fun challenges that I really enjoyed working through such as win conditions and randomizing. This was fun little project and the outcome is really cute!",
    view: memory_Game,
    challenges:
      "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn't be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call.",
    challengesImage: memory_Challenges,
    takeaways:
      "It was really beneficial to see a game put together from start to finish. It was a great way to mindfully think about how every action affects the next, especially when considering what it takes to win or lose each round. Being able to think logically in that way was an eye opener, showing that this kind of problem solving isn’t so different from tackling more complex programming challenges. The ability to break each problem down into smaller pieces makes problem solving much less intimidating.",
    image1: memoryOne,
  },
  {
    id: "stardew-guide",
    link: "stardew-guide",
    image: stardew,
    title: "Stardew Valley Recipe Guide",
    description:
      "After much frustration cross referencing wiki pages, Reddit subs and personal notes trying to find and record every item needed to craft recipes in Stardew Valley, I decided to make this tracker to do it all. Items are shown in categories that can be filtered by season. Each items are given counters to allow users to easily track how many have been gathered and once the item is fully collected, the cards background turns green for easy visual sorting.",
    view: stardew_one,
    challenges:
      "There were a few challenges I encountered during the course of making this guide. The first being the only way to get the information was via the Wiki page making I would have to gather all of the data myself. Thinking ChatGPT would be of assistance, I quickly realized it was mining false information and just making a lot of stuff up, meaning I would be doing it the old-fashioned way. The next challenge I encountered was filters and sub-filters to be able to effectively sort information. It was a good challenge in thinking beyond just one layer of filtering and looking at all the possible combinations that could be sorted.",
    challengesImage: stardew_challenges,
    takeaways:
      "I always hear that using ChatGPT should be avoided, and this was the project that really confirmed that for me. When I had used it in the past, it was always on topics I was not as confident in, so being able to recognize mistakes is not as likely. It took me already knowing the correct answer and just trying to use it to be more efficient to fully understand how common it is to produce incorrect responses. ",
    image1: stardewOne,
    image2: stardewTwo,
  },
  {
    id: "mock-blog",
    link: "mock-blog",
    image: mockBlog,
    title: "Mock Blog Project",
    description:
      "Finally ready to start making more complex projects using MongoDB, I wanted to create a mock blog as I thought it would bet realistic to have an application with users, likes, comments and posts. This was a great challenge in setting up those relationships and using passport authentication in something more complex.",
    view: mockBlog_one,
    challenges:
      "There were a lot of complexities with this project as it was my first time using MongoDB in a more complex way. It was my first time creating a full application using passport to store login information, and creating routes to send that data and setting up passport correctly proved to be a challenge. This project made me realize how important it is to put imports in the correct order and how much of a headache that can cause if just one item is out of place.",
    challengesImage: mockBlog_challenges,
    takeaways:
      "Learning how to use passport authenticate with MongoDB deemed challenged, yet once it was properly set up, made the storing of user login information much more manageable. It was really fun to see how likes and comments updated in real time and would change based on who the current user was.",
  },
  {
    id: "to-do",
    link: "to-do",
    image: toDoList,
    title: "To-Do List App",
    description:
      "Wanting to create a To-Do app, I started to outline what basic requirements I wanted it to have. Outside of the basic add, update, and delete functions, I knew I wanted the information to store on re-load and be dependent on the users computer. Unsure of how to achieve this, I found myself exploring local storage options and was able to incorporate the functionality into this app.",
    view: toDo_one,
    challenges:
      "This being my first project using local storage, I spent a lot of time researching and trying to get a better understanding on how to properly use this function. I found it to be pretty straightforward concept and did not have much trouble getting it set up. All I would need to do was create a saveProjects() function that handled grabbing and sending the information to the local storage so when the page reloaded, all the entered data was still there. ",
    challengesImage: toDo_challenges,
    takeaways:
      "This was a great project to introduce local storage and opened the doors to being able to actually save information that has been entered. I found the set up to be pretty straightforward and enjoyed how this project has simple bones yet the opportunity to learn about more concepts and their usage.",
  },
  {
    id: "etch-a-sketch",
    id: "linkch-a-sketch",
    image: sketchApp,
    title: "Etch-A-Sketch Clone",
    description:
      "I set out to create an Etch-a-Sketch board with different color and size options for the user to play with. It was a fun project to work on and was good practice in using functions I don't find myself needing often, like using the mousedown feature. ",
    view: sketch_one,
    challenges:
      "I had already worked out some of the basic setup required in previous projects such as creating grids  and different options for the users to select. Using mousedown was something I did not have as much experience in and had to do some research on how to implement in the way I wanted. I found for this project it was best to start the drawing feature on mousedown and end it on mouseup.",
    challengesImage: sketch_challenges,
    takeaways:
      "This was a project that was just fun to make and incorporated some things I already knew with some elements that were fun to revisit. I think these types of re-creation projects are a great way to give a mock experience of working on an end goal with a client where you have an idea of what you are building towards and having to work within those boundaries.",
  },
  {
    id: "weather-app",
    link: "weather-app",
    image: weatherApp,
    title: "Weather App",
    description:
      "This was a project suggested by The Odin Project in their JavaScript course. The goal of the project was to introduce API's and how to fetch the data and use it in a readable way. This was a great project as it required utilizing the Async Await function for grabbing the API key, and as my first time using this function, I found it to be a great challenge. I never knew that API's were a thing prior to this project, so I was happy to add it to my arsenal!",
    view: weather_one,
    challenges:
      "I found the initial setup of getting my API running was quite challenging from finding the correct documentation to getting Async Await up and running. I have found that documentation sometimes leaves things up to interpretation and as someone who had such a base level of knowledge, filling in those blanks sometimes leaves me lost and set out on a wild goose chase on programming forums. Once the API was running, I found the actual data mining to be really straight forward!",
    challengesImage: weather_challenges,
    takeaways:
      "Having this new super power of being able to grab information about almost everything is very exciting! Gone are the days of painstakingly gathering images and information and sorting it in my applications. This really allowed me to work on some fun projects and feel less confined to what I was able to create.",
  },
  {
    id: "shopping-cart",
    link: "shopping-cart",
    image: shoppingCart,
    title: "Mock Shopping Cart",
    description:
      "Wanting to create a mock site to practice site functionality, I decided that a shopping cart would be a good place to start. It was great practice to see how elements of an application interact with each other and how to create an enjoyable user experience. I used Tailwind for their pre-made UI components for this application and while I enjoyed the options these components offered, I ultimately struggled with setting them up and with making changed needed for the site.",
    view: shoppingCart_one,
    challenges:
      "This was my first time using Tailwind for UI elements and I found it to be a really difficult experience. I really enjoy using Tailwind for normal CSS styling, however, when using it for their pre-made components I found the code to be overwhelming and over-complicated. Since this project, I have discovered that I enjoy using Mantine's components due to their simplicity and ease of use.",
    challengesImage: shoppingCart_challenges,
    takeaways:
      "I am glad that I tried using Tailwind UI components as it led me to find other options such as Mantine that I enjoy using much more. While I don't like to solely rely on these builders, it is great to use when I need a more complicated component or to see how accessibility should be properly used. ",
  },
  {
    id: "resume-builder",
    link: "resume-builder",
    image: CVbuilder,
    title: "Resume Builder",
    description:
      "This was a project suggested though The Odin Project JavaScript coursework. The task was to create a basic resume builder using state to update entry fields. This was my first big project using state properties so there was a learning curve involved with figure out how the relationships of all the elements would work. It game me some great foundational knowledge to build off of for future projects.",
    view: cv_one,
    challenges:
      "My first application of useState() gave me a few challenges to work through. At first, it was hard to wrap my head around the idea of passing stored state values down the line to populate inputs in other components. It took a lot of trial and error to get the data passed correctly but I think that was a really important step in getting a better understanding of the concept.",
    challengesImage: cv_challenges,
    takeaways:
      "It was really exciting to see how much more could be accomplished with a basic understanding of useState() properties. This was a turning point for me in my journey as it opened the doors to so much more complex and interesting projects. Looking back now it is hard to imagine creating any application without using state.",
  },
];
