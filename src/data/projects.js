import VirtuFlex from "../assets/Projects/Virtuflex.png";
import ForestOfEchoes from "../assets/Projects/ForestOfEchoes.png";

export const CATEGORY_COLORS = {
    Robotics: "0, 229, 255",
    Software: "34, 197, 94",
    Website: "141, 85, 247",
    Hardware: "226, 43, 34"
};

export function getCATColor(categorySetColor, alpha = 1){
    return `rgba(${CATEGORY_COLORS[categorySetColor]},${alpha})`;
}

const PROJECTS = [
    {
        id: 0,
        title: "Virtuflex",
        description: "A robotic arm and smart gloved paired to enable hand action mimicking to handle tasks in a safer distance.",
        image: VirtuFlex,
        featured: true,
        skills: ["Arduino", "C++", "Embedded Systems", "soldering", "FreeCAD"],
        category: "Robotics"
    },
    {
        id: 1,
        title: "Forest of Echoes",
        description: "Python text-based adventure game, run the program through an IDE of your choice and interact with the console with assigned" +
        " text inputs e.g., inspect, inventory, etc.",
        image: ForestOfEchoes,
        featured: true,
        skills: ["Python", "Declarative programming"],
        category: "Software"
    },
    {
        id: 2,
        title: "Flight Booking System",
        description: "A program developed in java to handle flight bookings and more features.",
        image: null,
        featured: true,
        skills: ["Java", "OOP"],
        category: "Software"
    },
    {
        id: 3,
        title: "Just Travelin'",
        description: "A travelling website, developed using html & css, php, MySQL. Including a database and established data communication with the website through php.",
        image: null,
        featured: false,
        skills: ["HTML", "CSS", "PHP", "MySQL"],
        category: "Website"
    }
]


export default PROJECTS;
