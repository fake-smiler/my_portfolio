import React from 'react'
 import {Element} from 'react-scroll';
 import Project from "../Project/Project";
 import './ProjectContainer.css';
 const ProjectContainer = () => {
    const Projects =  [
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 1",
            link:"www.google.com",
        },
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 2",
            link:"www.google.com",
        },
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 3",
            link:"www.google.com",
        },
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 4",
            link:"www.google.com",
        },
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 5",
            link:"www.google.com",
        },
        {
            img:"https://media.istockphoto.com/photos/purple-and-cyan-light-streaks-background-picture-id1335295890?b=1&k=20&m=1335295890&s=170667a&w=0&h=AA6z9_1UWK0sYMllBo5kmbPnAm3SD4VscEtXk1SvYHM=",
            title:"Project 6",
            link:"www.google.com",
        },
    ];
   return (
     <Element className = "pro"id = "projects">
         <h1>Projects</h1>
         <p>Here are some Projects which I done for making lives of people easy.</p>
         <div className = " projectContainer__projects">
     {
         Projects.map((project,i) => {
             return (
             <Project key = {i}  title = {project.title} img = {project.img} link = {project.link}/>
             );
         })}
 </div>
          
     </Element>
   );
 };
 
 export default ProjectContainer;