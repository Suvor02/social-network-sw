const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
    post: [
        {id: 1, title: "Post1", message: "hello"},
        {id: 2, title: "Post2", message: "Greetings, fellow colleagues "},
        {id: 3, title: "Post3", message: "I would like to share my insights on this task"},
        {
            id: 4,
            title: "Post4",
            message: " I reckon we should deal with at least half of the points in the plan without further delays"
        },
        {
            id: 5,
            title: "Post5",
            message: "I suggest proceeding from one point to the next and notifying the rest of us with at least short notices"
        }],
        newPostText: ""
}

export const profileReducer = (state: any=initialState, action: TsarType) => {

    switch (action.type) {
        case ADD_POST : {
            const newPost = {id: 6, title: "Post1", message: state.newPostText}
            state.post.push(newPost)
            state.newPostText = ""
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }
}


type TsarType = AddPostClickActionCreator | OnChangeNewElementActionCreator
type AddPostClickActionCreator = ReturnType<typeof addPostClickActionCreator>
type OnChangeNewElementActionCreator = ReturnType<typeof onChangeNewElementActionCreator>
export const addPostClickActionCreator = () => ({type:ADD_POST} as const)
export const onChangeNewElementActionCreator = (text:string) => ( {type: "UPDATE-NEW-POST-TEXT", newText: text} as const)

export default profileReducer