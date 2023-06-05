import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, stateType} from "./components/redax/state";

export const renderEntireTree = (state:stateType)=>{
    ReactDOM.render(
        < App
            state={state} addPost={addPost}
        />,
        document.getElementById('root')
    );
}

