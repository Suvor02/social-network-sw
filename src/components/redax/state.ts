import {v1} from "uuid";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

export type StoreType = {
    _state: stateType
    getState(): void
    _callSubscriber(state: any): void
    // addPost(): void
    // updateNewPostText(newText: string): void
    subscribe(observer: any): void
    dispatch(action: any): void
}
export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
    sidebarPage: any
}
export type profilePageType = {
    post: postType[]
    newPostText: string
}
export type postType = {
    id: number
    title: string
    message: string
}
export type messagesPageType = {
    users: usersArray[]
    dialogue: dialogueArray[]
    newMessageBody: string
}
export type usersArray = {
    _id: string
    name: string
}
export type dialogueArray = {
    id: string
    message: string
}

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, title: "Post1", message: "hello"},
                {id: 2, title: "Post2", message: "Greetings, fellow colleagues "},
                {id: 3, title: "Post3", message: "I would like to share my insights on this task"},
                {
                    id: 4,
                    title: "Post4",
                    message: " I reckon we should deal with at least half of the points in the plan without further delays"
                },
                {
                    id: 5,
                    title: "Post5",
                    message: "I suggest proceeding from one point to the next and notifying the rest of us with at least short notices"
                }],
            newPostText: ""
        },
        messagesPage: {
            users: [
                {_id: v1(), name: "Sasha"},
                {_id: v1(), name: "Ivan"},
                {_id: v1(), name: "Sergey"},
                {_id: v1(), name: "Anna"},
                {_id: v1(), name: "Valera"},
                {_id: v1(), name: "Zhenya"}
            ],
            dialogue: [
                {id: v1(), message: "hello"},
                {id: v1(), message: "I'm"},
                {id: v1(), message: "how are you ?"},
                {id: v1(), message: "What are you doing?"}
            ],
            newMessageBody: ""
        },
        sidebarPage: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(store: any) {
        console.log("изменился")
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)

    }
}



export default store
// window.store = store