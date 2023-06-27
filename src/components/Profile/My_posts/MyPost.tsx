import stile from "./myPost.module.css";
import React from "react";
import {Post} from "./Post/Post";
import { postType} from "../../redax/state";
import {addPostClickActionCreator, onChangeNewElementActionCreator} from "../../redax/profile-reducer";


type MyPostPropsType = {
    post: postType[]
    // addPost: (postMessage: string) => void
    newPostText: string
    // updateNewPostText:(newText:string)=>void
    dispatch(action: any): void
}

export const MyPost = (props: MyPostPropsType) => {


    const elementsPost =
        props.post.map((p) => <Post key={p.id} title={p.title} message={p.message}/>)

    let newElementPost = React.createRef<HTMLTextAreaElement>()

    const addPostClick = () => {
        let text = newElementPost.current?.value
        if (typeof text === "string") {
            // props.addPost(text)
            props.dispatch(addPostClickActionCreator())
        }

    }

    const onChangeNewElement = () => {
        let text = newElementPost.current?.value
        if (typeof text === "string") {
            // props.updateNewPostText(text)
            props.dispatch(onChangeNewElementActionCreator(text))
        }
    }

    return <div className={stile.posts}>
        <h2>My post</h2>
        <div>
            <textarea ref={newElementPost}
                      value={props.newPostText}
                      onChange={onChangeNewElement}/>
        </div>
        <div>
            <button
                onClick={addPostClick}
            >Add Post
            </button>
        </div>
        <div>
            {elementsPost}
        </div>


    </div>

}