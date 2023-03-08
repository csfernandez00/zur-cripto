import React from "react";

const UltimaNoticia = (props) => {
    return (
        <div className="flex flex-col gap-4 mb-4">
            <img
                className="rounded h-96 w-full object-cover"
                src={props.imagen}
                alt=""
            />
            <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-3xl">{props.titulo}</h2>
                <span className="text-base font-normal text-darkgray">
                    {props.fecha}
                </span>
            </div>
        </div>
    );
};

export default UltimaNoticia;
