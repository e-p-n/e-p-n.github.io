import React from "react";
import { motion } from 'framer-motion';

import Dogs from "../../assets/images/dogs.png";
import Eric from "../../assets/images/eric.png"

function swapPhoto(photo) {
    let swapImg = Dogs;
    if(photo === 'me') {
        swapImg = Eric;
    }
    document.getElementById("portrait").src = swapImg; 
}

function About() {
    
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{duration: 1.0}}
        >

       
        <section id="fader">
            <div id="headingHolder">
                <h3>about</h3>
            </div>
            <div id="contentHolder">
                <div>
                    <p>I have been a graphic designer for more than twenty years, working in both print and web. My experience with web design ignited my interest in programming, which led me to teaching myself the basics of HTML, CSS, JavaScript and even a little bit about some more advanced scripting languages like PHP and the now outdated ColdFusion. I recently decided to take my interest in programming more seriously and completed the Full Stack Web Development Bootcamp at U&nbsp;of&nbsp;T.</p>

                    <p>My wife Tina and I could not be prouder of our son Aleks, who was recently accepted to the Film Production program at York University. He has turned me into a camera operator, sound man, craft services manager and even an occasional actor for his short films.</p>
                        
                    <p>We also have two dogs, <span onMouseOver={() => swapPhoto('dogs')} onMouseOut={() => swapPhoto('me')}>Pixel and Pudding</span> who are always there to brighten our day.</p>
                </div>
            </div>  
            
        </section>
        </motion.div>
    );
}

export default About;