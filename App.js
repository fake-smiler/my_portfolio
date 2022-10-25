import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TopContainer from './components/Top container/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contact from './components/Contact/Contact';
import Join from './Join/Join';
 const App = () => {
  return (
    <div>
       <Header/>
       <TopContainer/>
       <SkillContainer/>
       <ProjectContainer/>
       <Contact/>
       <Join/>
       
    </div>
  );
 };
 export default App;