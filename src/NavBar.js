import React from "react";
import {
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Blog from "./Blog.js";
import Photos from "./photos/Photos.js";


function NavBar() {
    return (
        <>
        <nav class="mainNav">
            <NavLink className="mainLink" to="/">Home</NavLink>
            <NavLink className="mainLink" to="/about">About</NavLink>
            <NavLink className="mainLink" to="/blog">Blog</NavLink>
            <NavLink className="mainLink" to="/photos/photos">Photos</NavLink>
        </nav>
  
  
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/photos/photos" element={<Photos />} />  
            </Routes>
        </>
    )
}

export default NavBar;