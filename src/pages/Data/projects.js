// Craft Tracker Images
import craft_tracker_one from "../../components/images/projectImages/craft_tracker_challenges.png";

// MemoryImages
import memory_Game from "../../components/images/projectImages/memory_app.png";
import memory_Challenges from "../../components/images/projectImages/memory_challenges.png";

// Stardew Images
import stardew_one from "../../components/images/projectImages/Stardew_One.png";
import stardew_challenges from "../../components/images/projectImages/stardew_challenges.png";
import filler from "../../components/images/projectImages/filler_image.jpg";

// CV images
import cv_one from "../../components/images/projectImages/CVbuilder.png";
import cv_challenges from "../../components/images/projectImages/CVchallenges.png";

// Weather Images
import weather_one from "../../components/images/projectImages/weather_cover.png";
import weather_challenges from "../../components/images/projectImages/weather_challenges.png";

// Etch-a-Sketch images 
import sketch_one from "../../components/images/projectImages/sketch_view.png";
import sketch_challenges from "../../components/images/projectImages/sketch_challenges.png";

// TO_DO List images
import toDo_one from "../../components/images/projectImages/toDo_view.png";
import toDo_challenges from "../../components/images/projectImages/toDo_challenges.png";


export const projects = [
  {
    id: "craft-tracker",
    title: "Craft Tracker",
    description: "Craft Tracker is a hobby and crafting social media page made to keep past projects all in one space and find + share inspiration between friends. I kind of wanted to mix the homemade feel of scrolling Etsy with the inspiration of Pinterest, but add the social component. I thought it was important for the user to be able to store details on materials, notes, links, and images all in one place to make it easier to reference in the future.",
    image1: filler,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn't be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    image2: craft_tracker_one,
    takeaways: "This was a great challenge in creating a mock social media platform and being able to experience how the web of schema information interacts with each element. I really enjoyed mapping out the user functionality of the site and feel pleased with my results. I think this app really put into perspective the never-ending tasks complex projects seems to have and how to go about breaking down tasks into smaller chunks rather than getting overwhelmed at the big picture.",
    image3: filler,
  },
    {
    id: "memory-game",
    title: "Animal Crossing Memory Game",
    description: "This was a project I wanted to work on inspired by seeing some pretty fun examples while scoring the internet for ideas. For my memory game, I chose the theme of Animal Crossing and was not able to find an API that matched my needs so a large chunk of time was spent gathering all the images. There were some fun challenges that I really enjoyed working through such as win conditions and randomizing. This was fun little project and the outcome is really cute!",
    image1: memory_Game,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn't be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call.",
    image2: memory_Challenges,
    takeaways: "It was really beneficial to see a game put together from start to finish. It was a great way to mindfully think about how every action affects the next, especially when considering what it takes to win or lose each round. Being able to think logically in that way was an eye opener, showing that this kind of problem solving isn’t so different from tackling more complex programming challenges. The ability to break each problem down into smaller pieces makes problem solving much less intimidating.",
    image3: filler,
  },
    {
    id: "stardew-guide",
    title: "Stardew Valley Recipe Guide",
    description: "After much frustration cross referencing wiki pages, Reddit subs and personal notes trying to find and record every item needed to craft recipes in Stardew Valley, I decided to make this tracker to do it all. Items are shown in categories that can be filtered by season. Each items are given counters to allow users to easily track how many have been gathered and once the item is fully collected, the cards background turns green for easy visual sorting.",
    image1: stardew_one,
    challenges: "There were a few challenges I encountered during the course of making this guide. The first being the only way to get the information was via the Wiki page making I would have to gather all of the data myself. Thinking ChatGPT would be of assistance, I quickly realized it was mining false information and just making a lot of stuff up, meaning I would be doing it the old-fashioned way. The next challenge I encountered was filters and sub-filters to be able to effectively sort information. It was a good challenge in thinking beyond just one layer of filtering and looking at all the possible combinations that could be sorted.",
    image2: stardew_challenges,
    takeaways: "I always hear that using ChatGPT should be avoided, and this was the project that really confirmed that for me. When I had used it in the past, it was always on topics I was not as confident in, so being able to recognize mistakes is not as likely. It took me already knowing the correct answer and just trying to use it to be more efficient to fully understand how common it is to produce incorrect responses. ",
    image3: filler,
  },
    {
    id: "mock-blog",
    title: "Mock Blog Project",
    description: "P",
    image1: filler,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn’t be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    image2: filler,
    takeaways: "Wanting to create a mock social media platform, ",
    image3: filler,
  },
      {
    id: "to-do",
    title: "To-Do List App",
    description: "Wanting to create a To-Do app, I started to outline what basic requirements I wanted it to have. Outside of the basic add, update, and delete functions, I knew I wanted the information to store on re-load and be dependent on the users computer. Unsure of how to achieve this, I found myself exploring local storage options and was able to incorporate the functionality into this app.",
    image1: toDo_one,
    challenges: "This being my first project using local storage, I spent a lot of time researching and trying to get a better understanding on how to properly use this function. I found it to be pretty straightforward concept and did not have much trouble getting it set up. All I would need to do was create a saveProjects() function that handled grabbing and sending the information to the local storage so when the page reloaded, all the entered data was still there. ",
    image2: toDo_challenges,
    takeaways: "This was a great project to introduce local storage and opened the doors to being able to actually save information that has been entered. I found the set up to be pretty straightforward and enjoyed how this project has simple bones yet the opportunity to learn about more concepts and their usage.",
    image3: filler,
  },
      {
    id: "etch-a-sketch",
    title: "Etch-A-Sketch Clone",
    description: "I set out to create an Etch-a-Sketch board with different color and size options for the user to play with. It was a fun project to work on and was good practice in using functions I don't find myself needing often, like using the mousedown feature. ",
    image1: sketch_one,
    challenges: "I had already worked out some of the basic setup required in previous projects such as creating grids  and different options for the users to select. Using mousedown was something I did not have as much experience in and had to do some research on how to implement in the way I wanted. I found for this project it was best to start the drawing feature on mousedown and end it on mouseup.",
    image2: sketch_challenges,
    takeaways: "This was a project that was just fun to make and incorporated some things I already knew with some elements that were fun to revisit. I think these types of re-creation projects are a great way to give a mock experience of working on an end goal with a client where you have an idea of what you are building towards and having to work within those boundaries.",
    image3: filler,
  },
      {
    id: "weather-app",
    title: "Weather App",
    description: "This was a project suggested by The Odin Project in their JavaScript course. The goal of the project was to introduce API's and how to fetch the data and use it in a readable way. This was a great project as it required utilizing the Async Await function for grabbing the API key, and as my first time using this function, I found it to be a great challenge. I never knew that API's were a thing prior to this project, so I was happy to add it to my arsenal!",
    image1: weather_one,
    challenges: "I found the initial setup of getting my API running was quite challenging from finding the correct documentation to getting Async Await up and running. I have found that documentation sometimes leaves things up to interpretation and as someone who had such a base level of knowledge, filling in those blanks sometimes leaves me lost and set out on a wild goose chase on programming forums. Once the API was running, I found the actual data mining to be really straight forward!",
    image2: weather_challenges,
    takeaways: "Having this new super power of being able to grab information about almost everything is very exciting! Gone are the days of painstakingly gathering images and information and sorting it in my applications. This really allowed me to work on some fun projects and feel less confined to what I was able to create.",
    image3: filler,
  },
      {
    id: "shopping-cart",
    title: "Mock Shopping Cart",
    description: "P",
    image1: filler,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn’t be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    image2: filler,
    takeaways: "Wanting to create a mock social media platform, ",
    image3: filler,
  },
      {
    id: "resume-builder",
    title: "Resume Builder",
    description: "This was a project suggested though The Odin Project JavaScript coursework. The task was to create a basic resume builder using state to update entry fields. This was my first big project using state properties so there was a learning curve involved with figure out how the relationships of all the elements would work. It game me some great foundational knowledge to build off of for future projects.",
    image1: cv_one,
    challenges: "My first application of useState() gave me a few challenges to work through. At first, it was hard to wrap my head around the idea of passing stored state values down the line to populate inputs in other components. It took a lot of trial and error to get the data passed correctly but I think that was a really important step in getting a better understanding of the concept.",
    image2: cv_challenges,
    takeaways: "It was really exciting to see how much more could be accomplished with a basic understanding of useState() properties. This was a turning point for me in my journey as it opened the doors to so much more complex and interesting projects. Looking back now it is hard to imagine creating any application without using state.",
    image3: filler,
  },
      {
    id: "rock-paper-scissors",
    title: "Rock, Paper, Scissors",
    description: "P",
    image1: filler,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn’t be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    image2: filler,
    takeaways: "Wanting to create a mock social media platform, ",
    image3: filler,
  },

];

