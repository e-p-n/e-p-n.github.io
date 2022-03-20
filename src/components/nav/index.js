import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index"; 


function Nav( {setItemWidth, setItemHeight, setMainWidth, setMainHeight}) {
    const account = useSelector((state) =>  state.account);

    const dispatch = useDispatch();

    const {setNav} = bindActionCreators(actionCreators, dispatch);

    let aboutWidth="500px";
    let aboutHeight="100%";
    let aboutWidth2="calc(100vw - 640px)";
    let aboutHeight2="100%";

    let portWidth="calc(100vw - 435px)";
    let portHeight="100%";
    let portWidth2="235px";
    let portHeight2="100%";

    let resumeWidth=0;
    let resumeHeight="100%";
    let resumeWidth2="calc(100vw - 140px)";
    let resumeHeight2="100%";
    
    if (window.innerWidth <= 450) {
        aboutWidth="100%";
        aboutHeight="190px";
        aboutWidth2="100%";
        aboutHeight2="calc(100vh - 320px)"; 

        portWidth="100%";
        portHeight="calc(100vh - 350px)";
        portWidth2="100%";
        portHeight2="180px";

        resumeWidth="100%";
        resumeHeight=0;
        resumeWidth2="100%";
        resumeHeight2="calc(100vh - 130px)";

    } else if (window.innerWidth <= 950) {
        aboutWidth="250px";
        aboutHeight="100%x";
        aboutWidth2="calc(100vw - 390px)";
        aboutHeight2="100%"; 

        portWidth="calc(100vw - 285px)";
        portHeight="100%";
        portWidth2="85px";
        portHeight2="100%";

    }

    function clickActions(page, width, height, width2, height2) {
        setNav(page);
        setItemWidth(width);
        setItemHeight(height);
        setMainWidth(width2);
        setMainHeight(height2);
    }
    
    return (
             
        <nav>
            <ul>
                <li id="about" className={`${account ==='about' && 'selected'}`} onClick={() =>  clickActions('about', aboutWidth, aboutHeight, aboutWidth2, aboutHeight2)}>about</li>
                <li id="portfolio" className={`${account ==='portfolio' && 'selected'}`} onClick={() => clickActions('portfolio', portWidth, portHeight, portWidth2, portHeight2)}>portfolio</li>
                <li id="resume" className={`${account ==='resume' && 'selected'}`} onClick={() => clickActions('resume', resumeWidth, resumeHeight, resumeWidth2, resumeHeight2)}>resume</li>
                <li id="contact" className={`${account ==='contact' && 'selected'}`} onClick={() => clickActions('contact', resumeWidth, resumeHeight, resumeWidth2, resumeHeight2)}>contact</li>
            </ul>
        </nav>
    
    );
}

export default Nav;