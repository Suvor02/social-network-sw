import React from "react";
import {addPostClickActionCreator, onChangeNewElementActionCreator} from "../../redax/profile-reducer";
import {MyPost} from "./MyPost";


type MyPostContainerPropsType = {
    store: any
}

export const MyPostContainer = (props: MyPostContainerPropsType) => {
    let state = props.store.getState()
    const addPostClick = () => {
        props.store.dispatch(addPostClickActionCreator())

    }
    const onChangeNewElement = (text: string) => {
        props.store.dispatch(onChangeNewElementActionCreator(text))
    }

    return <MyPost onChange={onChangeNewElement}
                   addPost={addPostClick}
                   post={state.profilePage.post}
                   newPostText={state.profilePage.newPostText}/>
}