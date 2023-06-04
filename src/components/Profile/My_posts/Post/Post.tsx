import React, {useState} from "react";
import stile from "./post.module.css"
import {postType} from "../../../redax/state";

type PostProps = {
    key: number
    title: string
    message: string
}
export const Post: React.FC<PostProps> = (props) => {
    let [like, setLike] = useState(0)
    const increaseLike = () => {
        setLike(like + 1)
    }
    const decreaseLike = () => {
        setLike(like - 1)
    }

    return (
        <div className={stile.post} key={props.key}>
                        <div className={stile.div1}>
                            <img
                                src="https://kartinkin.net/uploads/posts/2022-02/1644893136_4-kartinkin-net-p-pikselnie-kartinki-4.png"
                                alt=""/>
                        </div>
                        <div className={stile.div2}>
                            <h2>{props.title}</h2>
                            <h4>{props.message}</h4>
                        </div>
                        <div className={stile.div3}>
                            <button
                                onClick={increaseLike}>
                                like
                            </button>
                            {like}
                            <button
                                onClick={decreaseLike}>dislike
                            </button>
                        </div>
        </div>
    )
}