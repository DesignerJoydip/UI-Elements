import React from "react";

export const Card = (props) => {
    return(
        <div className="card" style={{backgroundImage: "url('https://img.freepik.com/free-vector/abstract-dynamic-pattern-wallpaper-vector_53876-59131.jpg?size=338&ext=jpg')" }}>
            <h3>{props.avater.name}</h3>
        </div>
    )

}