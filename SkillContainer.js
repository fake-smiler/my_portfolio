import React from 'react';
import {Element} from 'react-scroll';
import skill from "../../Assets/skill.jpg";
import './SkillContainer.css';
import LinearProgress from '@material-ui/core/LinearProgress';
const SkillContainer = () => {
    return (
        <Element className = "skillContainer" id = "skills">
            <div className = "skillContainer__image">
                <img src = {skill} alt = ""/>
                </div>

                <div className = "skillContainer__text">
                <h2>SKILLSET</h2>
                <div className="skillContainer__skillset">
                    <h5>React</h5>
                    <div className = "skillContainer__slider skillContainer__slider1">
                        <LinearProgress variant = "determinate" value = {90} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Javascript</h5>
                    <div className = "skillContainer__slider skillContainer__slider2">
                        <LinearProgress variant = "determinate" value = {75} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>Bootstrap</h5>
                    <div className = "skillContainer__slider skillContainer__slider3">
                        <LinearProgress variant = "determinate" value = {50} />
                    </div>
                </div>
                <div className="skillContainer__skillset">
                    <h5>PHP</h5>
                    <div className = "skillContainer__slider skillContainer__slider4">
                        <LinearProgress variant = "determinate" value = {90} />
                    </div>
                </div>
                    <div className="skillContainer__skillset">
                    <h5>JSON</h5>
                    <div className = "skillContainer__slider skillContainer__slider5">
                        <LinearProgress variant = "determinate" value = {40} />
                    </div>
                    </div>
            </div>
        </Element>
    );
};

export default SkillContainer;
         
                
                 