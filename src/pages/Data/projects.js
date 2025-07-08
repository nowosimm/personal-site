// import craft_tacker_one from "../components/images/projectImages/craft_tracker_challenges.png";
import craft_tracker_one from "../../components/images/projectImages/craft_tracker_challenges.png";

export const projects = [
  {
    id: "craft-tracker",
    title: "Craft Tracker",
    description: "Craft Tracker is a hobby and crafting social media page made to keep past projects all in one space and find + share inspiration between friends. I kind of wanted to mix the homemade feel of scrolling Etsy with the inspiration of Pinterest, but add the social component. I thought it was important for the user to be able to store details on materials, notes, links, and images all in one place to make it easier to reference in the future.",
    image1: craft_tracker_one,
    challenges: "Challenges I faced were related mostly to creating an intertwining schema of users, posts, likes and comments. I quickly learned it wouldn’t be as simple as just having separate schemas in my Mongo database, but that I would need to incorporate virtual schemas to access all the data dependent on the current user and their data. In the routes I would then need to populate each of the schemas with the information I needed to fill out that call., ",
    image3: craft_tracker_one,
    takeaways: "Wanting to create a mock social media platform, ",
    image3: craft_tracker_one,
    tags: ["React", "Tailwind", "Firebase"],
  },
];

