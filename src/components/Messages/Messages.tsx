import s from "./messeges.module.css"
import {Users} from "./Users/Users";
import {v1} from "uuid";
import {Dialogue} from "./Dialogue/Dialogue";

export type usersArray = {
    _id: string
    name: string
}
export type dialogueArray = {
    id: string
    message:string
}
export const Messages = () => {

    const users: usersArray[] = [
        {_id: v1(), name: "Sasha"},
        {_id: v1(), name: "Ivan"},
        {_id: v1(), name: "Sergey"},
        {_id: v1(), name: "Anna"},
        {_id: v1(), name: "Valera"},
        {_id: v1(), name: "Zhenya"}
    ]
    const dialogue:dialogueArray[] = [
        {id: v1(), message:"hello"},
        {id: v1(), message:"I'm"},
        {id: v1(), message:"how are you ?"},
        {id: v1(), message:"What are you doing?"},
    ]
    return <div className={s.content}>
        <div className={s.flex}>
        <div className={s.users}><Users users={users} /></div>
        <div className={s.dialogue}> <Dialogue dialogue={dialogue}/></div>
        </div>
    </div>
}