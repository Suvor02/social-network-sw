import React, {ChangeEvent} from "react";

import s from "./dialogue.module.css"
import {messagesPageType} from "../../redax/state";
import {onChangeNewMessageBodyCreator, sendMessageCreator} from "../../redax/messages-reducer";

type dialogueTypeProps = {
    dialogue: messagesPageType
    dispatch(action: any): void
}

// const newElementDialog = React.createRef<HTMLTextAreaElement>()

export const Dialogue: React.FC<dialogueTypeProps> = (props) => {

    const newMessageBody = props.dialogue.newMessageBody

    const dialogOnClick = () => {
        props.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const body = event.target.value
        if (typeof body === "string")
            props.dispatch(onChangeNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogue}>
            <div className={s.header}>
            </div>
            <div className={s.body}> {props.dialogue.dialogue.map((d) => {
                return <div key={d.id}>{d.message}</div>
            })}
            </div>
            <div className={s.entryField}>
                <textarea placeholder="Type here.."
                          value={newMessageBody}
                          onChange={onNewMessageChange}
                          className={s.textarea}>
                </textarea>
                <button onClick={dialogOnClick}>Send</button>
            </div>
        </div>


    )
}