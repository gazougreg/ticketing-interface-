import React from 'react';
import logo from '../../assets/images/hexagon-geometric-abstract-logo-by_vexels.svg';
//<a href="https://www.vexels.com/vectors/preview/137685/hexagon-geometric-abstract-logo"> Hexagon Geometric Abstract Logo </a> | designed by Vexels

const navBar = (props) => {
    return (
        <header>
            <nav>
            <a href="https://www.vexels.com/vectors/preview/137685/hexagon-geometric-abstract-logo"><img src={logo} width={80} height={50} /></a>
            <p>Hexagon Geometric Abstract Logo | designed by Vexels</p>
                <ul className="main-nav">
                    <li><a className="btn-b" href="#new-request" onClick={()=>props.popUpForm()}>New Request</a></li>
                    <li><a className="btn-w" href="#logout">Logout</a></li>
                </ul>
            </nav>
            <div className="grey"></div>
        </header>
    );
};

export default navBar;