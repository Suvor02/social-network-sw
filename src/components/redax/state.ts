import {v1} from "uuid";
import {renderEntireTree} from "../../render";

export type stateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
}
export type profilePageType = {
    post: postType[]
}
export type postType = {
    id: number
    title: string
    message: string
}
export type messagesPageType = {
    users: usersArray[]
    dialogue: dialogueArray[]
}
export type usersArray = {
    _id: string
    name: string
}
export type dialogueArray = {
    id: string
    message: string
}

export const state: stateType = {
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
            }]
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
        ]
    }
}


export const addPost = (postMessage:string) =>{
const newPost = {id:6,  title: "Post1", message:postMessage }
    state.profilePage.post.push(newPost)
    renderEntireTree(state)
}