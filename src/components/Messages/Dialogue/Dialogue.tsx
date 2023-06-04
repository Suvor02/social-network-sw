
import React from "react";

import s from "./dialogue.module.css"
import {dialogueArray} from "../../redax/state";


type dialogueTypeProps = {
    dialogue:dialogueArray[]
}
export const Dialogue: React.FC<dialogueTypeProps> = (props) => {

    // const dialogueMap = props.dialogue.map((d)=>{
    //     return <div key={d.id}>{d.message}</div>
    // })

    return (

        <div className={s.dialogue}>
            {props.dialogue.map((d)=>{
                return <div key={d.id}>{d.message}</div>
            })}

        </div>


    )
}