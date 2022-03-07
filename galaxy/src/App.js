import React from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/training" element={<Training />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
