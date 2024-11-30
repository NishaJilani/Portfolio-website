import React from "react";
import Heading from "./Heading";
import Card from "./Card";


const data = [
  {
    id: 0,
    title: "Calligraphy",
    desc: "Website about Calligraphy",
    img: "/calligraphy.jpg",
    tags: ["HTML", "CSS", "Node", "JavaScript"],
  },
  {
    id: 1,
    title: "To Do List",
    desc: "Assignment about To Do List",
    img: "/list2.jpg",
    tags: ["HTML", "CSS", "Node", "JavaScript"],
  },
  {
    id: 2,
    title: "Calculator",
    desc: "About Calculator",
    img: "/calculator.jpg",
    tags: ["HTML", "CSS", "Node", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div id="project" className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects;
