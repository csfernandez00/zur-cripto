import React from "react";

function TarjetaNoticiaRelacionada({
	titulo,
	imagen,
	adelanto,
	autor,
	fecha,
	id,
}) {
	return (
		<div className="w-full flex flex-row p-2 py-4 border-b border-grey hover:bg-grey">
			<div className="h-24 w-36 flex-initial flex items-center justify-center bg-primary ">
				<img
					className="w-full h-full object-cover rounded"
					src={imagen}
					alt=""
				/>
			</div>
			<div className="px-2 flex-1 flex flex-col justify-between">
				<h2 className="text-sm font-bold">{titulo}</h2>
				<span className="text-sm font-bold text-darkgray ">{autor}</span>
				<span className="text-sm font-semibold text-darkgray ">{fecha}</span>
			</div>
		</div>
	);
}

export default TarjetaNoticiaRelacionada;
