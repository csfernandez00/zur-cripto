import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Conversor from "../components/pages/conversor/Conversor";
import Navbar from "../components/pages/home/Navbar";
import Noticias from "../components/pages/news/Noticias";
import Podcast from "../components/pages/podcast/Podcast";
import Admin from "../components/pages/dashboard/Admin";
import NoticiaDetallada from "../components/pages/news/components/NoticiaDetallada";

const Rutas = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/noticias" element={<Noticias />} />
				<Route path="/noticias/:id" element={<NoticiaDetallada />} />
				<Route exact path="/podcast" element={<Podcast />} />
				<Route exact path="/conversor" element={<Conversor />} />
				<Route
					exact
					path="/admin568489aa6548easdh4"
					element={<Admin />}
				></Route>
				<Route path="*" element={<Navigate to="/noticias" />} />
			</Routes>
		</Router>
	);
};

export default Rutas;
