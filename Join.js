import React from 'react';
import { Element } from 'react-scroll';
import Login from '../Join/Login';
import './Join.css';

const Join = () => {
  return (
      <Element className = "joinwithme" id = "join">
          <div className='login'>
              <h1>Login</h1>
              </div>
              <Login/>
      </Element>
  )
}

export default Join;