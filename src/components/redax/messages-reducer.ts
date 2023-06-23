import {v1} from "uuid";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export const messagesReducer = (state: any, action: TsarType) => {

   if (action.type === SEND_MESSAGE) {
        const newMessageBody = {id: v1(), message: state.newMessageBody }
       state.dialogue.push(newMessageBody)
       state.newMessageBody = ""
    }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
       state.newMessageBody = action.body
    }

    return state
}

type TsarType = SendMessageCreator | OnChangeNewMessageBodyCreator
type SendMessageCreator = ReturnType<typeof sendMessageCreator>
type OnChangeNewMessageBodyCreator = ReturnType<typeof onChangeNewMessageBodyCreator>
export const sendMessageCreator = () => ({type:SEND_MESSAGE} as const)
export const onChangeNewMessageBodyCreator = (body:string) => ( {type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)
