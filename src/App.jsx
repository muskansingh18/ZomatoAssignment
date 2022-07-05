import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';


function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<> <Navbar /><Body /><Footer /> </>} />
        <Route path="/OrderOnline" element={<HomePage />} />
        
      </Routes>

    
    </>
  );
}

export default App;
