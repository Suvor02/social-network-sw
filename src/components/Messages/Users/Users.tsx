import {usersArray} from "../Messages";
import React from "react";
import {NavLink} from "react-router-dom";
import s from "./users.module.css"

type usersTypeProps = {
    users: usersArray[]
}
export const Users: React.FC<usersTypeProps> = (props) => {
    return (
        <div className={s.users}>


            {props.users.map((u) => {
                return (
                    <div key={u._id} className={s.users}>
                        <NavLink to={"/Messages/" + u._id}>
                            <div>{u.name} </div>
                        </NavLink>

                    </div>
                )
            })}


        </div>

    )
}