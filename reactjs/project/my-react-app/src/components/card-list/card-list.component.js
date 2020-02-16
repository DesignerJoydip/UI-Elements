import React from "react";
import {Card} from "../card/card.component";
import "./card-list.styles.css";

export const CardList = (props) => {
    //console.log(props)
    return(
    // <div className="card">{props.children}</div>
        <div>
            {
                //props.AvatarArray.map(avater => (<h3 key={avater.id}>{avater.name}</h3>))
                props.AvatarArray.map(avater => (<Card key={avater.id} avater={avater} />))

            }
       </div>
    )
}