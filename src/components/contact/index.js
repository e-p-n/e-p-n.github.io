import React from "react";
import Airform from 'react-airform';
import { motion } from 'framer-motion';


function Contact() {


  
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{duration: 1.0}}
        >
            <section id="fader">
                <div id="headingHolder">
                    <h3>contact</h3>
                </div>
                <div id="contentHolder">
                    <div id="contactText">
                    <form action="https://formsubmit.co/eric.n@me.com"  method="POST"> 
                            <div>
                                <label htmlFor="name" className="sr-only">name</label>
                                <input type="text" id="name" name="name" placeholder="name" autoFocus required />
                            </div>
                            <div>
                                <label htmlFor="email" value="email" className="sr-only">email</label>
                                <input type="email" name="email" id="email" placeholder="email" required />

                            </div>
                            <div>
                                <label htmlFor="subject" className="sr-only">subject</label>
                                <div className="select">
                                    <select type="subject" name="_subject" id="subject" required defaultValue="what">
                                        <option value="what" disabled>what can I help you with?</option>
                                        <option value="Contact Form: Development Inquiry">development inquiry</option>
                                        <option value="Contact Form: Design Inquiry">design inquiry</option>
                                        <option value="Contact Form: other">other</option>
                                    </select>
                                    <span className="focus"></span>
                                 </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">message</label>
                                <textarea id="message" name="message" placeholder="message" required />
                                <input type='hidden' name='_after' value='https://e-p-n.github.io' />
                            </div>
                        <button>send message</button>
                        </form>
                        <p className="smallprint">Contact form powered by <a href="https://mailthis.to" target="_blank">mailthis.to</a></p>
                    </div>
                </div>  

                
            </section>
        </motion.div>
    );
}

export default Contact;
