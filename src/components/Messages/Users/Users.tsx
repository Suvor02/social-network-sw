import React from "react";
import {NavLink} from "react-router-dom";
import s from "./users.module.css"
import {usersArray} from "../../redax/state";


type usersTypeProps = {
    users: usersArray[]
}
export const Users: React.FC<usersTypeProps> = (props) => {
    return (
        <div className={s.users}>


            {props.users.map((u) => {
                return (
                    <div key={u._id} className={s.u}>
                        <NavLink to={"/Messages/" + u._id}>
                            <div className={s.u}>{u.name} </div>
                        </NavLink>

                    </div>
                )
            })}


        </div>

    )
}