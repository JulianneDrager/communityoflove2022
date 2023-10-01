import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import ThankyouRegister from "./Components/ThankyouRegister";
import Thankyou from "./Components/Thankyou";
import Screen from "./Components/Screen";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/communityoflove2022.com/" element={<Screen/>} />
          <Route exact path="/tmp/communityoflove2022.com/about" element={<About/>} />
          <Route exact path="/tmp/communityoflove2022.com/contact" element={<Contact/>} />
          <Route exact path="/tmp/communityoflove2022.com/thankyou-register/:name" element={<ThankyouRegister/>} />
          <Route exact path="/tmp/communityoflove2022.com/thankyou-general/:name" element={<Thankyou/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;