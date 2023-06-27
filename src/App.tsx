import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {NavBar} from "./components/NavBar/navBar";
import {Profile} from "./components/Profile/profile";
import {Messages} from "./components/Messages/Messages";
import {BrowserRouter, Route} from "react-router-dom";
import {Setting} from './components/Settings/Settings';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";

type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header/>
                <NavBar/>
                <Route path={"/Messages"} render={() => <Messages
                    store={props.store}/>}/>
                <Route path={"/Profile"} render={() => <Profile store={props.store}/>}/>
                <Route path={"/Music"} render={() => <Music/>}/>
                <Route path={"/News"} render={() => <News/>}/>
                <Route path={"/Settings"} render={() => <Setting/>}/>

            </div>
        </BrowserRouter>
    );
}

export default App;
