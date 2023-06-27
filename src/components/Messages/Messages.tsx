import s from "./messeges.module.css"
import {Users} from "./Users/Users";
import {DialogueContainer} from "./Dialogue/DialogueContainer";


type MessagesPropsType = {
    store:any
}
export const Messages = (props: MessagesPropsType) => {
    let state = props.store.getState()

    return <div className={s.content}>
        <div className={s.flex}>
            <Users
                users={state.messagesPage.users}/>
           <DialogueContainer store={props.store}/>
        </div>
    </div>
}