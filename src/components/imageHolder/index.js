import React from "react";
import portrait from "../../assets/images/eric.png"
import { motion } from 'framer-motion'

function ImageHolder() {


    return (
        <motion.div
            style={{height: "100%"}}
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{duration: 0.9}}
        >
            <div id="imageHolder">
                <div>
                <img id="portrait" src={portrait} alt="Eric Normann" />
                </div>
            </div>
        </motion.div>
    );
}

export default ImageHolder;