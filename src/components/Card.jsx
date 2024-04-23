import React from "react";
import './Card.css';

function capital(string) {
    return string.substring(0,1).toUpperCase() + string.substring(1);
}

function Card(props) {

    let color = props.type;

    let name = props.name;

    return (

        <div className={"card " + color }>

            <p className="name"> {capital(name)} </p>

            <img className="art" alt={name} src={props.img}></img>

            <div className="stats">
                <ul>
                    <li>
                        Type: {capital(props.type)}
                    </li>
                    <li>
                        Height: {props.height / 10} m
                    </li>
                    <li>
                        Weight: {props.weight / 10} kg
                    </li>
                </ul>
            </div>

            <p className="number">#{props.number}</p>

        </div>

    );

}

export default Card;