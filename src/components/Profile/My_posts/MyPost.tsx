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
    return <div className={stile.posts}>
        <h2>My post</h2>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add Post</button>
        </div>
        <div>
            {elementsPost}
        </div>


    </div>
}