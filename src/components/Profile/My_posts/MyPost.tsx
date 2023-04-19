import stile from "./myPost.module.css";
import React from "react";

export const MyPost =()=>{
    return <div className={stile.posts}>
        <h2>My post</h2>
        <input type="text"/><button>post</button>

    </div>
}