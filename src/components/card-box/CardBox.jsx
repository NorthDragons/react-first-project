import React from "react";
import Card from "../card/Card";
import "./CardBox.css"
import PropTypes from "prop-types";

function CardBox({films}, {onClick}) {

    return (
        <div className="card-box">
            {films.length > 0 && <h3 className="card-box__h3">{films.length} Movies found </h3>}
            {films.length > 0 && films.map(film => {
                return <Card onClick={onClick} film={film}/>
            })}
            {films.length <= 0 && <h1 className="card-box__h1">No Movie Found</h1>}
        </div>
    );
}

CardBox.propTypes = {
    films: PropTypes.array,
    onClick: PropTypes.func
}

export default CardBox;
