import React from "react";
import {messagesPageType, onChangeNewMessageBodyCreator, sendMessageCreator} from "../../redax/messages-reducer";
import {Dialogue} from "./Dialogue";
import {connect} from "react-redux";
import {AppStateType} from "../../redax/redux-store";
import {Dispatch} from "redux";

type DialogueContainerTypeProps = {
    // store:any
}

// export const DialogueContainer: React.FC<DialogueContainerTypeProps> = (props) => {
//     return <StoreContext.Consumer>
//         {
//             (store: any) => {
//                 let state = store.getState()
//
//                 const dialogOnClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 const onNewMessageChange = (body: string) => {
//                     store.dispatch(onChangeNewMessageBodyCreator(body))
//                 }
//                 return <Dialogue onChangeNewMessageBody={onNewMessageChange}
//                                  dialogOnClick={dialogOnClick}
//                                  messagesPage={state.messagesPage}/>
//             }
//         }
//     </StoreContext.Consumer>
// }

type MapStatePropsType = { messagesPage: messagesPageType }
type MapDispatchPropsType = {
    onChangeNewMessageBody: () => void
    dialogOnClick: (body: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messagesPage: state.messagesPage
    }

}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        onChangeNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        dialogOnClick: (body: string) => {
            dispatch(onChangeNewMessageBodyCreator(body))
        }

    }
}


export const DialogueContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogue)