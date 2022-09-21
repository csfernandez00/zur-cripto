import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Conversor from "../components/Conversor";
import Noticias from "../components/Noticias";
import Podcast from "../components/Podcast";

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" />
                <Route exact path="/noticias" element={<Noticias />} />
                <Route exact path="/podcast" element={<Podcast />} />
                <Route exact path="/conversor" element={<Conversor />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rutas;
