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
                    <div>
                        <Airform email="eric.n@me.com" method="POST">
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
                                    <select type="subject" name="subject" id="subject" required defaultValue="what">
                                        <option value="what" disabled>what can I help you with?</option>
                                        <option value="develop">development inquiry</option>
                                        <option value="design">design inquiry</option>
                                        <option value="other">other</option>
                                    </select>

                                    <span className="focus"></span>
                            </div>
                            </div>
                        <div>
                                <label htmlFor="message" className="sr-only">message</label>
                                <textarea id="message" name="message" placeholder="message" required />

                            </div>
                        <button>send message</button>
                        </Airform>
                        <p className="smallprint">Contact form powered by <a href="https://airform.io" target="_blankç">airform.io</a></p>
                        <p className="smallprint tighter">Please note that there are some technical issues with airform. After it processes your form, you need to press a button to return to my site. This button does not appear to work in Firefox or Safari. Until I have discoved a solution, you will probably need to hit the back button a couple of time to get back to my site.</p>
                    </div>
                </div>  

                
            </section>
        </motion.div>
    );
}

export default Contact;
