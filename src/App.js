import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Contact from "./Components/Community of Love/Contact/Contact";
import About from "./Components/Community of Love/About/About";
import Thankyou from "./Components/Thank You/Thankyou";
import Screen from "./Components/Screen";
import ReadMore from "./Components/Community of Love/Testimonials/Readmore/ReadMore" 
import PrayerFormScreen from "./Components/Community of Love/Mission Statement/PrayerForm/PrayerFormScreen";
// import Header from "./Components/Gods Gospel Cafe/Header/Header";
// import Contact from "./Components/Gods Gospel Cafe/Contact/Contact";


function App() {

  return (
    <body style={{ backgroundColor: "cyan" }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/tmp/communityoflove2022.com/" element={<Screen />} />
          <Route exact path="/tmp/communityoflove2022.com/about" element={<About />} />
          <Route exact path="/tmp/communityoflove2022.com/contact" element={<Contact />} />
          <Route exact path="/tmp/communityoflove2022.com/readmore" element={<ReadMore />} />
          <Route exact path="/tmp/communityoflove2022.com/prayer" element={<PrayerFormScreen />} />
          <Route exact path="/tmp/communityoflove2022.com/thankyou-general/:name" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
