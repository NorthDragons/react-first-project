import React from "react";
import './DropMenu.css';

function DropMenu(){
    return(
          <div className="dropdown">
              <span className="dropdown__span"> Sort By:</span>
              <button className="dropdown__button">RELEASE DATE</button>
              <div className="dropdown-content">
                  <a href="">THMTH</a>
                  <a href="">THMTH</a>
                  <a href="">THMTH</a>
              </div>
          </div>
    );
}

export default DropMenu;