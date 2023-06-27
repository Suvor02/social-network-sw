const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state: any, action: any) => {

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