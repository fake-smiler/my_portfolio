import React from 'react';
import { Element } from 'react-scroll';
import {IconButton} from "@material-ui/core";
import { Facebook,Instagram,LinkedIn } from '@material-ui/icons';
import "./Contact.css";
const Contact = () => {
  return (
      <Element className = "contact" id = "Contact">
          <h1>Contact</h1>
    <div className='contact__container'>
        <p>
            Email : <span>bs2010323@gmail.com</span>
        </p>
        <p>
            Ph No : <span>9025009711</span>
        </p>
        <div className='contact__icons'>
            <a href = "google.com">
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href = "google.com">
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
            <a href = "google.com">
                <IconButton>
                    <LinkedIn/>
                </IconButton>
                </a>
        </div>
    </div>
    </Element>
  )
}

export default Contact