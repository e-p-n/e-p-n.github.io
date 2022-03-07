import React from "react";

import resume from "../../assets/pdfs/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';


function Resume() {
    
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{duration: 1.0}}
        >
            <section id="fader">
                <div id="headingHolder">
                    <h3>resume</h3>
                </div>
                <div id="contentHolder">
                    <div>
                        <p><a href={resume} className="pdfLink"><span className="enlarge"><FontAwesomeIcon icon={faFilePdf} /></span> Download PDF</a></p>
                        <h4>skills</h4>
                        <ul>
                            <li>HTML, CSS, JavaScript, Node.js, jQuery, React, Bootstrap, Express.js, MySQL, Sequelize, MongoDB, Mongoose, responsive design, REST, Git</li>
                            <li>Adobe Photoshop, Illustrator, InDesign, Dreamweaver, Acrobat and Premiere </li>
                            <li>Microsoft Word, Excel and PowerPoint</li>
                        </ul>
                        <h4>experience</h4>
                        <p><strong>Procom</strong> | Graphic Designer | Oct.&nbsp;2018 to present
                        </p>
                        <ul>
                            <li>
                                Design materials and other marketing work for Procom’s client BMO Global Asset Management (sell sheets, brochures, HTML emails, manuals, video editing, etc.)
                            </li>
                            <li>
                                Specialize in streamlining regularly updated documents to improve turn around time without sacrificing design
                            </li>
                        </ul>
                        <p><strong>Gobsmact</strong> | Co-owner &amp; Designer | Jan.&nbsp;2011 to present</p>
                        <ul>
                            <li>Create designs to sell on various products (t-shirts, posters, phone cases, etc.) for sale on websites like Zazzle, Red Bubble and Etsy.</li>
                            <li>Design and layout books for sale on Amazon.</li>
                        </ul>
                        <p><strong>Self-employed</strong> | Graphic Designer | Dec.&nbsp;2010 to Oct.&nbsp;2018</p>
                        <ul>
                            <li>
                                Design materials and other marketing work for clients, including BMO Global Asset Management (sell sheets, brochures, HTML emails, manuals, video editing, etc.) and Mosaic Press (book cover design, book layout, advertising design, maintain website and Facebook page).
                            </li>
                        </ul>
                        <p><strong>BMO Financial Group</strong> | Graphic Designer | Nov.&nbsp;2005 to Dec.&nbsp;2010</p>
                        <ul>
                            <li>Design brochures, postcards, posters and other print materials, Flash presentations, PowerPoint templates, HTML e-mails and other materials for the marketing department</li>
                        </ul>

                        <p><strong>Meta Strategies</strong> | Web Designer | Dec.&nbsp;2002 to Nov.&nbsp;2005</p>
                        <ul>
                            <li>Design websites, logos, and graphic elements for Meta Strategies’ clients</li>
                            <li>Create web templates using, HTML, JavaScript, CSS, ColdFusion and PHP for the web developer to populate.</li>
                            <li>Create tools web tools using Flash and ActionScript</li>
                        </ul>
                        <h4>education</h4>
                        <p><strong>University of Toronto</strong> | Full Stack Web Developer Bootcamp | Nov.&nbsp;2020 to May&nbsp;2021</p>
                        <ul>
                            <li>Learned both front and back-end coding for website development, learning HTML, CSS, Git, JavaScript, Node.js, Express.js, SQL, MongoDB, Mongoose and React.</li>
                        </ul>

                        <p><strong>David Berman Communications</strong> | Acrobat Accessibility Training | Nov.&nbsp;2020</p>
                        <ul>
                            <li>Trained to create AODA compliant PDFs with Adobe InDesign / Microsoft Office</li>
                        </ul>
                        <p><strong>International Academy of Design </strong> Computer Graphics Diploma | Sep.&nbsp;1997 to Jun.&nbsp;1998</p>
                        <ul>
                            <li>Learned graphic design concepts and software</li>
                        </ul>
                    </div>

    

                </div>  
                    
            </section>
        </motion.div>
    );
}

export default Resume;