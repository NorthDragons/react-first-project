import React from "react";
import "./FilmsDropdownStyle.css"

export default function () {
    return (
        <div className="dropdown">
            <div className="projects">
                <button className="img-button" type="button"><img src="/images/circle-button.png" alt="U"/></button>
                <ul>
                    <li>
                        <button>Update</button>
                    </li>
                    <li>
                        <button>Delete</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}