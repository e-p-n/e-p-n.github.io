import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index"; 


function Nav( {setItemWidth, setMainWidth}) {
    const account = useSelector((state) =>  state.account);

    const dispatch = useDispatch();

    const {setNav} = bindActionCreators(actionCreators, dispatch);

    function clickActions(page, width, width2) {
        setNav(page);
        setItemWidth(width);
        setMainWidth(width2);
    }
    
    return (
             
        <nav>
            <ul>
                <li id="about" className={`${account ==='about' && 'selected'}`} onClick={() =>  clickActions('about', "500px", "calc(100vw - 640px)")}>about</li>
                <li id="portfolio" className={`${account ==='portfolio' && 'selected'}`} onClick={() => clickActions('portfolio', "calc(100vw - 435px)", "235px")}>portfolio</li>
                <li id="resume" className={`${account ==='resume' && 'selected'}`} onClick={() => clickActions('resume', 0, "calc(100vw - 140px)")}>resume</li>
                <li id="contact" className={`${account ==='contact' && 'selected'}`} onClick={() => clickActions('contact', 0, "calc(100vw - 140px)")}>contact</li>
            </ul>
        </nav>
    
    );
}

export default Nav;