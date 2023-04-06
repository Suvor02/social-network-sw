import React from 'react';
import './App.css';
import {Header} from "./components/header";
import {NavBar} from "./components/navBar";
import {Profile} from "./components/profile";


function App() {
    return (
        <div className="app">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}

export default App;
