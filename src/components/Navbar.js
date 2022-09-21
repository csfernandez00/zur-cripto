import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link to="/podcast">Podcast</Link>
                    </li>
                    <li>
                        <Link to="conversor">Conversor</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
