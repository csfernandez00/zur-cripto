import React from "react";
import TarjetaNoticiaRelacionada from "./TarjetaNoticiaRelacionada";

function NoticiasRelacionadas({ news }) {
	return (
		<div>
			<h2 style={{ color: "#555" }}>Noticias Relacionadas</h2>
			<hr />
			<div>
				{news.map((el) => {
					return (
						<TarjetaNoticiaRelacionada
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
	);
}

export default NoticiasRelacionadas;
