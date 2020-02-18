import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

const header = (props) => {
    return(
        <div className="header-container"> 
            <ul>
                <li>
                    <Link to="/logInPage">Log In</Link>
                </li>
                <li>
                    <Link to="/searchPage">Search</Link>
                </li>
          </ul>
        </div>
    );
};
export default header;