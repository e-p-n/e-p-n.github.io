import React from "react";

import { useSelector } from "react-redux"; 
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function PortHolder() {

    const portfolio = useSelector((state) =>  state.portfolio);
    const itemNumber = useSelector((state) =>  state.selectPortfolio);
    const selectedItem = portfolio[itemNumber];


    return (
        <motion.div
            style={{height:"100%"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.9}}
        >
            <div id="portHolder">
                <div className="itemHolder">
                    <div className="portfolioImage">
                        <img src={require(`../../assets/images/fullSize/${selectedItem.name.toLowerCase().replace(/\s/g, '')}.png`)} alt=""/>
                    </div>
                    <div className="portfolioDescription">
                        <h4 style={{clear:"none", float:"left"}}>{selectedItem.name}: <span className="normal">{selectedItem.project_type}</span></h4>
                        <p style={{clear:"none", float:"left"}}>&nbsp;&nbsp;&ndash; &nbsp;{selectedItem.client}</p>
                        <p style={{clear:"both"}}>{selectedItem.description}</p>
                        <p>{selectedItem.tools}</p>
                        <p>
                            {selectedItem.website_1 &&
                                <a href={selectedItem.website_1} target={selectedItem.name.toLowerCase().replace(/\s/g, '')}><button>Website</button></a> 
                            }
                            {selectedItem.website_2 && 
                                <a href={selectedItem.website_2} target={selectedItem.name.toLowerCase().replace(/\s/g, '')}><button> <FontAwesomeIcon icon={faGithub} /> Github repo</button></a>
                            }
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default PortHolder;