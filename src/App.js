import React, { useState } from "react";

import { useSelector } from "react-redux"; 


import Nav from "./components/nav";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";

import './assets/css/style.css';
import Header from './components/header';
import ImageHolder from './components/imageHolder';
import Footer from './components/footer';
import PortHolder from "./components/portHolder";

import { AnimatePresence, motion } from 'framer-motion';

function reloadPage() {
  window.location.reload();
}

function App() {
  const account = useSelector((state) =>  state.account);

  let initWidth1 = "500px";
  let initHeight1 = "100%";
  let initWidth2 = "calc(100vw - 640px)";
  let initHeight2 = "100%";
  let transitionSpeed = 1;



  if (window.innerWidth  <= 450) {
    initWidth1 = "100%";
    initHeight1 = "190px";
    initWidth2 = "100%";
    initHeight2 = "calc(100vh - 320px)";
    transitionSpeed = 0.5;
   
  } else if (window.innerWidth  <= 950) {
    initWidth1 = "250px";
    initHeight1 = "100%";
    initWidth2 = "calc(100vw - 390px)";
    initHeight2 = "100%";
    transitionSpeed = 1;  
  
  }

  const [itemWidth, setItemWidth] = useState(initWidth1);
  const [mainWidth, setMainWidth] = useState(initWidth2);
  const [itemHeight, setItemHeight] = useState(initHeight1);
  const [mainHeight, setMainHeight] = useState(initHeight2);



  return (
    
    <>
      <Header></Header>

      <div id="mainContent">
      <AnimatePresence  exitBeforeEnter initial={false}>
        <motion.div 
          style={{backgroundColor: "white"}}
          animate={{ 
            width: itemWidth,
            height: itemHeight
          }} 
          transition={{
            duration: transitionSpeed,
          }}
        >
          <AnimatePresence  exitBeforeEnter initial={false}>
            
            {account === 'about'  && (
                <ImageHolder /> 
            )}
          
            {account === 'portfolio'  && (
                <PortHolder /> 
            )}
          </AnimatePresence>

        </motion.div>
      </AnimatePresence>
        <motion.div
          animate={{ 
            width: mainWidth,
            height: mainHeight
          }} 
          transition={{duration: transitionSpeed}}
        >
          <main id="slider">
                


                <Nav setItemWidth={setItemWidth} setItemHeight={setItemHeight} setMainWidth={setMainWidth} setMainHeight={setMainHeight} />
                <AnimatePresence exitBeforeEnter initial={false}>
                  {account === 'about'  && (
                      <About />
                  )}
                  {account === 'portfolio'  && (
                      <Portfolio />
                  )}
                  {account === 'resume' && (
                      <Resume />
                  )}
                  {account === 'contact'  && (
                      <Contact />
                  )}
                </AnimatePresence>

          </main>
        </motion.div>
      </div>

      <Footer></Footer>
      {/* {window.screen.orientation.onchange = () => reloadPage() } */}
    </>

  );
}

export default App;