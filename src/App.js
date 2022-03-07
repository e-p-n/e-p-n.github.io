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

function App() {
  const account = useSelector((state) =>  state.account);


  const [itemWidth, setItemWidth] = useState("500px");
  const [mainWidth, setMainWidth] = useState("calc(100vw - 640px)")
  console.log(itemWidth)
  return (
    
    <>
      <Header></Header>

      <div id="mainContent">
      <AnimatePresence  exitBeforeEnter initial={false}>
        <motion.div 
          style={{backgroundColor: "white"}}
          animate={{ width: itemWidth }} 
          transition={{
            duration: 1.0,
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
          animate={{ width: mainWidth }} 
          transition={{duration: 1.0}}
        >
          <main id="slider">
                


                <Nav setItemWidth={setItemWidth} setMainWidth={setMainWidth} />
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
      <div id="apology">
        I'm sorry, this website does not currently support your screen (or browser window) size. If you are using a desktop computer or laptop, try increasing the size of your browser window. If you are using a tablet, try looking at it in landscape mode. Otherwise, I'm working to resolve the issue. Please check back soon.
      </div>
    </>

  );
}

export default App;