import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {NavBar} from "./components/NavBar/navBar";
import {Profile} from "./components/Profile/profile";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import { Setting } from './components/Settings/Settings';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";


function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <NavBar/>
                <Route path={"/Messages"} component={Messages}/>
                <Route path={"/Profile"} component={Profile}/>
                <Route path={"/Music"} component={Music}/>
                <Route path={"/News"} component={News}/>
                <Route path={"/Settings"} component={Setting}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
