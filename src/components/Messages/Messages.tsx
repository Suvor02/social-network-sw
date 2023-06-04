import s from "./messeges.module.css"
import {Users} from "./Users/Users";
import {Dialogue} from "./Dialogue/Dialogue";
import {stateType} from "../redax/state";

type MessagesPropsType = {
    state: stateType
}
export const Messages = (props: MessagesPropsType) => {

    return <div className={s.content}>
        <div className={s.flex}>
            <Users
                users={props.state.messagesPage.users}/>
            <Dialogue
                dialogue={props.state.messagesPage.dialogue}/>
        </div>
    </div>
}