import s from "./messeges.module.css"
import {Users} from "./Users/Users";
import {DialogueContainer} from "./Dialogue/DialogueContainer";
import StoreContext from "../../StoreContext";
import {StoreType} from "../redax/state";


type MessagesPropsType = {
    // store: any
}
export const Messages = (props: MessagesPropsType) => {

    return <StoreContext.Consumer>
        {(store:any) => {
            let state = store.getState()

            return <div className={s.content}>
                <div className={s.flex}>
                    <Users
                        users={state.messagesPage.users}/>
                    <DialogueContainer />
                </div>
            </div>
        }
    }
    </StoreContext.Consumer>
}