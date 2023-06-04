import {v1} from "uuid";

export type stateType = { messagesPage: messagesPageType }

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


export const state :stateType = {
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