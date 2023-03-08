import axios from "axios";
import { React, useEffect, useState } from "react";
import NoticiasRelacionadas from "./components/NoticiasRelacionadas";
import TarjetaNoticia from "./components/TarjetaNoticia";
import UltimaNoticia from "./components/UltimaNoticia";

export default function Noticias() {
	const [newsList, setNewsList] = useState([]);
	const [lastNew, setLastNew] = useState([]);

	const updateNews = async () => {
		const NEWS_URL = "http://localhost:5000/noticias";
		const resNews = await axios.get(NEWS_URL);
		const news = resNews.data;
		setLastNew(news[0]);
		news.shift();
		setNewsList(news);
	};

	useEffect(() => {
		updateNews();
	}, []);

	return (
		<div className="w-full bg-gray min-h-screen shadow-inner">
			<div className="flex flex-row m-auto w-8/12 gap-0">
				<div className="w-8/12 h-screen p-0 pt-16 pl-20 ">
					<h1 className="font-extralight text-black text-5xl">
						Ultimas noticias
					</h1>
					<p className="pt-3 pl-1 text-darkgray">
						Informacion sobre las noticias mas importantes del dia
					</p>
					<div className="w-12/12 h-screen pt-3 flex flex-col ">
						<UltimaNoticia
							titulo={lastNew.titulo}
							imagen={lastNew.imagen}
							adelanto={lastNew.adelanto}
							fecha={lastNew.fecha}
						/>
						{newsList.map((el) => {
							return (
								<TarjetaNoticia
									key={el.id}
									titulo={el.titulo}
									imagen={el.imagen}
									adelanto={el.adelanto}
									autor={el.autor}
									fecha={el.fecha}
									id={el.id}
								/>
							);
						})}
					</div>
				</div>
				<div className="w-4/12 h-screen p-0 pt-40 pl-20">
					<div className="w-12/12 h-screen pt-0 flex flex-col gap-10">
						<img src="https://www.adsoftheworld.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBczJhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a217068f4b8fbe03c8ca170f6e822f4df9c53522/thumbnail_356465"></img>
						<img src="https://static.seekingalpha.com/uploads/2020/5/27/721257-15905927988328414_origin.png"></img>
						<NoticiasRelacionadas news={newsList} />
					</div>
				</div>
			</div>
		</div>
	);
}
