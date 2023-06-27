import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const messagesReducer = (state: any, action: any) => {

    switch (action.type) {
        case SEND_MESSAGE : {
            const newMessageBody = {id: v1(), message: state.newMessageBody}
            state.dialogue.push(newMessageBody)
            state.newMessageBody = ""
            return state
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body
            return state
        }
        default :
            return state
    }
}

type TsarType = SendMessageCreator | OnChangeNewMessageBodyCreator
type SendMessageCreator = ReturnType<typeof sendMessageCreator>
type OnChangeNewMessageBodyCreator = ReturnType<typeof onChangeNewMessageBodyCreator>
export const sendMessageCreator = () => ({type:SEND_MESSAGE} as const)
export const onChangeNewMessageBodyCreator = (body:string) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default messagesReducer