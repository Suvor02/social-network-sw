import s from "./messeges.module.css"
import {Users} from "./Users/Users";
import {Dialogue} from "./Dialogue/Dialogue";
import {stateType} from "../redax/state";

type MessagesPropsType = {
    state:stateType
}
export const Messages = (props:MessagesPropsType) => {

    return <div className={s.content}>
        <div className={s.flex}>
            <div className={s.users}><Users
                users={props.state.messagesPage.users}/></div>
            <div className={s.dialogue}><Dialogue
                dialogue={props.state.messagesPage.dialogue}/></div>
        </div>
    </div>
}