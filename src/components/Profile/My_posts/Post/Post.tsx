import React from "react";
import stile from "./post.module.css"
type PostProps = {
    messenge:string
}
export const Post: React.FC<PostProps> = (props) => {
    console.log(props.messenge)
    return <>
        <div className={stile.post}>

            <img src="https://oir.mobi/uploads/posts/2022-08/1661283100_5-oir-mobi-p-vityaz-art-krasivo-6.jpg" alt=""/>
            <h2>Post</h2>
            <input type="text"/>
            <h4>{props.messenge}</h4>
            <button>like</button>
        </div>
    </>
}