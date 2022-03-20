import React from "react";
import Thumbnail from "./thumbnail";
import { useSelector } from "react-redux"; 
import { motion } from 'framer-motion';

function Portfolio() {

    const thumbnails = useSelector((state) =>  state.portfolio);

    
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{duration: 1.0}}
        >
            <section id="fader">
                <div id="thumbnailHolder">
                    <div id="headingHolder">
                        <h3>portfolio</h3>
                    </div>
                    <div id="contentHolder">
                        {thumbnails.map ( (thumbnail, i) =>
                            <Thumbnail thumbnail={thumbnail} portItem={i} key={i} />,
                        )} 
                    </div>
                </div>
            </section>
        </motion.div>  
    );
}

export default Portfolio;