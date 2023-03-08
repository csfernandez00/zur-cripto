import React from "react";
import { Navigate } from "react-router-dom";

const RutaPrivada = ({ children, success }) => {
    if (!success) {
        return <Navigate to="/noticias" />;
    }

    return children;
};

export default RutaPrivada;
