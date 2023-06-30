import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer
})

export type AppStateType = ReturnType< typeof rootReducer>

const store = createStore(rootReducer)

export default store