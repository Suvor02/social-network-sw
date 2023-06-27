import stile from "./myPost.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {postType} from "../../redax/state";

type MyPostPropsType = {
    post: postType[]
    newPostText: string
    onChange: (text: string) => void
    addPost: () => void
}

export const MyPost = (props: MyPostPropsType) => {


    const elementsPost =
        props.post.map((p) => <Post key={p.id} title={p.title} message={p.message}/>)


    const addPostClick = () => {
        props.addPost()
    }

    const onChangeNewElement = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.target.value
        if (typeof text === "string") {
            props.onChange(text)
        }
    }

    return <div className={stile.posts}>
        <h2>My post</h2>
        <div>
            <textarea
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