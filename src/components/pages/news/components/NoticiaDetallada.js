import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function NoticiaDetallada() {
	const params = useParams();
	const [noticia, setNoticia] = useState();

	const getNew = async (param) => {
		const id = parseInt(param);
		const { data } = await axios.get(`http://localhost:5000/noticias/${id}`);
		console.log(data);
		setNoticia(data);
	};

	useEffect(() => {
		getNew(params.id);
	}, []);

	return noticia ? (
		<div className="w-full bg-gray min-h-screen shadow-inner">
			<div className="flex flex-row ">
				<div className="w-9/12 h-screen m-auto p-24 pt-16 pl-20">
					<div className="w-8/12 h-screen pt-3 flex flex-col ">
						<h1 className="font-bold text-black text-4xl">{noticia.titulo}</h1>
						<a href={noticia.fuente}>{noticia.autor}</a>
						<img
							className=" rounded h-4/5 w-10/12 object-cover"
							src={noticia.imagen}
							alt=""
						/>

						<p className="font-semibold text-black text-xl w-8/12">
							{noticia.texto}
						</p>

						<a href={noticia.fuente} className="btn">
							Ver noticia completa en {noticia.autor}
						</a>
					</div>
				</div>
			</div>
		</div>
	) : (
		<div className="w-full h-full flex items-center flex-col justify-center">
			<h1>404</h1>
			<h2>Not found</h2>
			<h3>La noticia que buscas no ha sido encontrada</h3>
		</div>
	);
}

export default NoticiaDetallada;
