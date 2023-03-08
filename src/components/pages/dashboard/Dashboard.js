import { React, useState, useEffect } from "react";
import axios from "axios";
import CreateNew from "./components/CreateNew";
import NoticiaDashboard from "./components/NoticiaDashboard";
import EditNew from "./components/EditNew";
import { Button } from "@mui/material";

const Dashboard = () => {
	const [newsList, setNewsList] = useState([]);
	const [newSelected, setNewSelected] = useState();

	const updateNews = async () => {
		const NEWS_URL = "http://localhost:5000/noticias";
		const resNews = await axios.get(NEWS_URL);
		const news = resNews.data;
		setNewsList(news);
	};
	const createNew = (newCreated) => {
		newCreated.id = Date.now();
		axios
			.post("http://localhost:5000/noticias", newCreated)
			.then(function (response) {
				alert(response.statusText + ", Noticia creada correctamente");
				updateNews();
			})
			.catch(function (error) {
				alert(
					`${error.message}, Se produjo un error al intentar crear la noticia`
				);
			});
	};

	const deleteNew = (newSelected) => {
		const id = newSelected.id;
		let isDelete = window.confirm("Seguro que deseas eliminar esta noticia?");
		if (isDelete) {
			axios
				.delete(`http://localhost:5000/noticias/${id}`)
				.then(function (response) {
					alert(response.statusText + ", Noticia eliminada correctamente");
					updateNews();
				})
				.catch(function (error) {
					alert(
						`${error.message}, Se produjo un error al intentar eliminar la noticia`
					);
				});
			setNewSelected(null);
		}
	};

	const editNew = (editedNew) => {
		const id = editedNew.id;
		let isUpdated = window.confirm("Seguro que deseas editar esta noticia?");
		if (isUpdated) {
			axios
				.patch(`http://localhost:5000/noticias/${id}`, editedNew)
				.then(function (response) {
					alert(response.statusText + ", Noticia editada correctamente");
					updateNews();
				})
				.catch(function (error) {
					alert(
						`${error.message}, Se produjo un error al intentar editar la noticia`
					);
				});
			setNewSelected(editedNew);
		}
	};

	useEffect(() => {
		updateNews();
	}, []);

	return (
		<div className="w-screen p-5 h-screen pt-20 gap-3 flex flex-row  ">
			<div className="w-3/12 ">
				<CreateNew createNew={createNew} />
			</div>
			<div className="flex flex-col gap-5 items-center justify-center bg-white p-2 rounded  shadow-xl  ">
				<ul className=" p-1 flex flex-col overflow-y-scroll  outline outline-grey bg-grey ">
					{newsList.map((el) => {
						return (
							<li
								className={
									newSelected === el
										? "bg-grey border-4 border-primary"
										: "bg-white border-4 border-white "
								}
								onClick={() => {
									setNewSelected(el);
								}}
								key={el.id}
							>
								<NoticiaDashboard
									titulo={el.titulo}
									imagen={el.imagen}
									adelanto={el.adelanto}
									autor={el.autor}
									fecha={el.fecha}
								/>
							</li>
						);
					})}
				</ul>

				<div className="flex flex-row h-0/6 p-8 w-full">
					{newSelected ? (
						<div className=" flex flex-row gap-2">
							<Button
								variant="contained"
								onClick={() => {
									setNewSelected(null);
								}}
							>
								Deselecionar
							</Button>
							<Button
								variant="contained"
								color="error"
								onClick={() => {
									deleteNew(newSelected);
								}}
							>
								Eliminar
							</Button>
						</div>
					) : (
						<div className="flex flex-row gap-2">
							<Button
								variant="contained"
								onClick={() => {
									setNewSelected(null);
								}}
								disabled
							>
								Deselecionar
							</Button>
							<Button
								variant="contained"
								color="error"
								disabled
								onClick={() => {
									deleteNew(newSelected);
								}}
							>
								Eliminar
							</Button>
						</div>
					)}
				</div>
			</div>
			{newSelected ? (
				<div className="w-3/12">
					<EditNew data={newSelected} editNew={editNew} />
				</div>
			) : (
				<div className="invisible w-3/12"></div>
			)}
		</div>
	);
};

export default Dashboard;
