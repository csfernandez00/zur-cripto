import React from "react";

const NoticiaDashboard = (props) => {
    return (
        <div className="w-full flex flex-row p-6 border-b border-grey hover:bg-grey">
            <div className="h-24 w-36 flex-initial flex items-center justify-center bg-primary ">
                <img
                    className="w-full h-full object-cover rounded"
                    src={props.imagen}
                    alt=""
                />
            </div>
            <div className="px-7 flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-bold">{props.titulo}</h2>
                <span className="text-sm font-bold text-darkgray ">
                    {props.autor}
                </span>
                <span className="text-sm font-semibold text-darkgray ">
                    {props.fecha}
                </span>
            </div>
        </div>
    );
};

export default NoticiaDashboard;
