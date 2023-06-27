import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./components/redax/state";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = (state: any) => {
    // (нужно изменить типизацию в store с люой на профильную)
    ReactDOM.render(
        <Provider store={store}>
            < App/>
        </Provider>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
})

