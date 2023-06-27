import React from "react";
import {onChangeNewMessageBodyCreator, sendMessageCreator} from "../../redax/messages-reducer";
import {Dialogue} from "./Dialogue";

type DialogueContainerTypeProps = {
    store:any
}

export const DialogueContainer: React.FC<DialogueContainerTypeProps> = (props) => {

    let state = props.store.getState()

    const dialogOnClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body:string) => {
            props.store.dispatch(onChangeNewMessageBodyCreator(body))
    }
    return <Dialogue onChangeNewMessageBody={onNewMessageChange}
                     dialogOnClick={dialogOnClick}
                     messagesPage={state.messagesPage}/>
}