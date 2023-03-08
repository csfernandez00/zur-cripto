import React from "react";
import { Link } from "react-router-dom";

const TarjetaNoticia = (props) => {
    return (
        <Link
            to={`/noticias/${props.id}`}
            className="w-full flex flex-row py-6 border-b border-grey"
        >
            <div className="h-44 w-2/5 flex-initial flex items-center justify-center bg-primary ">
                <img
                    className="w-full h-full object-cover rounded"
                    src={props.imagen}
                    alt=""
                />
            </div>
            <div className="px-7 flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-bold">{props.titulo}</h2>
                <p className="text-normal leading-5 text-darkgray">
                    {props.adelanto}
                </p>
                <div className="flex flex-row gap-2 items-center">
                    <span className="text-sm font-bold text-darkgray ">
                        {props.autor}
                    </span>
                    <span className="text-sm font-semibold text-darkgray ">
                        {props.fecha}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default TarjetaNoticia;
