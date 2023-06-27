import React from "react";
import StoreContext from "../../../StoreContext";
import {onChangeNewMessageBodyCreator, sendMessageCreator} from "../../redax/messages-reducer";
import {Dialogue} from "./Dialogue";

type DialogueContainerTypeProps = {
    // store:any
}

export const DialogueContainer: React.FC<DialogueContainerTypeProps> = (props) => {
    return <StoreContext.Consumer>
        {
            (store:any) => {
                let state = store.getState()

                const dialogOnClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(onChangeNewMessageBodyCreator(body))
                }
                return <Dialogue onChangeNewMessageBody={onNewMessageChange}
                                 dialogOnClick={dialogOnClick}
                                 messagesPage={state.messagesPage}/>
            }
        }
    </StoreContext.Consumer>
}