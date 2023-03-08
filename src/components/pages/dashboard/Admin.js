import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import Dashboard from "./Dashboard";

const Admin = () => {
	const [success, setSuccess] = useState(true);
	const [error, setError] = useState(false);
	const name = "JotaDe";
	const pass = "a6s5-D1a65_s1Gr5";

	const checkLogin = () => {
		let nombreIngresado = document.getElementById("input-name").value;
		let contraseniaIngresada = document.getElementById("input-pass").value;
		if (nombreIngresado === name && pass === contraseniaIngresada) {
			setSuccess(true);
		} else {
			setError(true);
		}
	};

	return success ? (
		<div className="-my-16">
			<Dashboard />
		</div>
	) : (
		<div className="flex justify-center items-center w-full h-full pb-20 bg-grey">
			<div className="flex w-3/12 h-96 flex-col justify-center items-center gap-8 bg-white shadow-2xl rounded border-gray ">
				<h2 className="text-3xl">Iniciar sesion</h2>

				<form className="flex flex-col gap-8 w-8/12 ">
					<TextField id="input-name" label="Nombre" variant="outlined" />
					<TextField
						id="input-pass"
						label="Contraseña"
						type="password"
						variant="outlined"
					/>
					<div className="flex flex-col pb-5 gap-1">
						<Button variant="contained" type="button" onClick={checkLogin}>
							Ingresar
						</Button>
						{error ? (
							<span className="text-red text-center">
								Error, nombre o contraseña incorrectos
							</span>
						) : null}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Admin;
