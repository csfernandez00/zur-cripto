import React from "react";
import { Link } from "react-router-dom";
import { SiHiveBlockchain } from "react-icons/si";

const Navbar = () => {
    return (
        <header className="w-full flex flex-row gap-16 h-16 items-center p-4 bg-white shadow-lg">
            <div className="flex flex-row gap-2 items-center ">
                <SiHiveBlockchain className="text-4xl text-primary  " />
                <h2 className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                    ZurCripto
                </h2>
            </div>
            <nav>
                <ul className="flex flex-row gap-10 pt-1">
                    <li>
                        <Link
                            to="/noticias"
                            className="font-semibold text-black text-base hover:tracking-wider	duration-150	"
                        >
                            Noticias
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/podcast"
                            className="font-semibold text-black text-base hover:tracking-wider	duration-150	"
                        >
                            Podcast
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="conversor"
                            className="font-semibold text-black text-base hover:tracking-wider	duration-150	"
                        >
                            Conversor
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
