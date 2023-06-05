import stile from "./myPost.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {postType} from "../../redax/state";


type MyPostPropsType = {
    post: postType[]
    addPost: (postMessage: string) => void
}

export const MyPost = (props: MyPostPropsType) => {


    const elementsPost =
        props.post.map((p) => <Post key={p.id} title={p.title} message={p.message}/>)
    //          createRef.current?.value                             useRef
    let newElementPost = React.createRef<HTMLTextAreaElement>()

    const addPostClick = () => {
        let text = newElementPost.current?.value
        if (typeof text === "string") {
            props.addPost(text)
        }

    }


    return <div className={stile.posts}>
        <h2>My post</h2>
        <div>
            <textarea ref={newElementPost}/>
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