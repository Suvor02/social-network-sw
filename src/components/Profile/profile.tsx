import React from "react";
import stile from "./profile.module.css"
import {Post} from "./My_posts/Post/Post";
import {MyPost} from "./My_posts/MyPost";

export const Profile = () => {
    const messenger = "hello vvdhsgfsdhf dfdfdfedsf dsfsdfsdfsd fdfsdfds"
    return <div className={stile.content}>
        <div><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmlhIU4A41bSn6ifGxAQVvIr9Zs1eb_69pQw&usqp=CAU"
            alt=""/>
        </div>
        <div className={stile.grid}>
            <div className={stile.imgProfile}><img
                src="https://65.mchs.gov.ru/uploads/resize_cache/news/2021-08-25/pravila-povedeniya-pri-vstreche-s-medvedem_1629847892112633638__800x800.jpg"
                alt=""/></div>
            <div className={stile.textProfile}>
                <div>Sasha D.</div>
                <div>Date of Birth: April 22</div>
                <div>Сity: st.Petersburg</div>
                <div>Unknown</div>
                <div>Unknown</div>
            </div>
        </div>
        <MyPost />
        <Post messenge={messenger}/>
        <Post messenge={messenger}/>
        <Post messenge={messenger}/>
    </div>
}