import React from "react";
import {addPostClickActionCreator, onChangeNewElementActionCreator} from "../../redax/profile-reducer";
import {MyPost} from "./MyPost";
import StoreContext from "../../../StoreContext";


type MyPostContainerPropsType = {
    // store: any
}

export const MyPostContainer = (props: MyPostContainerPropsType) => {
    return <StoreContext.Consumer>
        {(store:any)=>{
    let state = store.getState()
    const addPostClick = () => {
        store.dispatch(addPostClickActionCreator())

    }
    const onChangeNewElement = (text: string) => {
      store.dispatch(onChangeNewElementActionCreator(text))
    }

    return <MyPost onChange={onChangeNewElement}
                   addPost={addPostClick}
                   post={state.profilePage.post}
                   newPostText={state.profilePage.newPostText}/>
    }}</StoreContext.Consumer>
}