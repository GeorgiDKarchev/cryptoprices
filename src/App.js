import React from "react"
//import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";

//import components
import Nav from "./components/Nav";

export default function App () {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}