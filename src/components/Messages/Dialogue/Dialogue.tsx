import React from "react";

import s from "./dialogue.module.css"
import {dialogueArray} from "../../redax/state";

type dialogueTypeProps = {
    dialogue: dialogueArray[]
}

const newElementDialog = React.createRef<HTMLTextAreaElement>()

export const Dialogue: React.FC<dialogueTypeProps> = (props) => {

    const dialogOnClick = ()=>{
        const text = newElementDialog.current?.value
        console.log(text)
    }
    return (
        <div className={s.dialogue}>
            <div className={s.header}>

            </div>

            <div className={s.body}> {props.dialogue.map((d) => {
                return <div key={d.id}>{d.message}</div>
            })}
            </div>

            <div className={s.entryField}>
                <textarea placeholder="Type here.."
                          ref={newElementDialog}
                    className={s.textarea}>

                </textarea>
<button onClick={dialogOnClick}>Add text</button>
            </div>


        </div>


    )
}