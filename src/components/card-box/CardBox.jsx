import React from "react";
import Card from "../card/Card";
import "./CardBox.css"
import PropTypes from "prop-types";

function CardBox(props) {

    return (
        <div className="card-box">
            {props.films.length > 0 && <h3 className="card-box__h3">{props.length} Movies found </h3>}
            {props.films.length > 0 && props.films.map(film => {
                return <Card onClick={props.onClick} film={film}/>
            })}
            {props.films.length <= 0 && <h1 className="card-box__h1">No Movie Found</h1>}
        </div>
    );
}

CardBox.propTypes = {
    films: PropTypes.array,
    onClick: PropTypes.func
}

export default CardBox;
