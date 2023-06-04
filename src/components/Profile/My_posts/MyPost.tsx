import stile from "./myPost.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {postType} from "../../redax/state";


type MyPostPropsType = {
    post: postType[]
}

export const MyPost = (props: MyPostPropsType) => {

    const elementsPost =
        props.post.map((p) => <Post key={p.id} title={p.title} message={p.message}/>)

    const newElementPost = React.createRef()


    const addPostClick = () => {
        let text = newElementPost.current.value
        console.log(text)
    }

    return <div className={stile.posts}>
        <h2>My post</h2>
        <div>
            <textarea ref={(e) => newElementPost}></textarea>
        </div>
        <div>
            <button onClick={addPostClick}>Add Post</button>
        </div>
        <div>
            {elementsPost}
        </div>


    </div>
}