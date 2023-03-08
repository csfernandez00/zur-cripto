import { React, useState, useEffect } from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";

const EditNew = ({ data, editNew }) => {
    const [form, setForm] = useState(data);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editNew(form);
    };

    const handleReset = () => {
        setForm(data);
    };

    useEffect(() => {
        handleReset();
    }, [data]);

    return (
        <div className="flex flex-col  w-full h-full gap-5 items-center justify-center bg-white   p-10 rounded shadow-xl">
            <h2 className="text-3xl font-semibold">Editar noticia</h2>
            <form
                className=" flex flex-col gap-5 w-full"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="title"
                    label="Titulo de noticia"
                    name="titulo"
                    variant="filled"
                    onChange={handleChange}
                    value={form.titulo}
                />
                <TextField
                    id="img-link"
                    label="Link de imagen"
                    variant="filled"
                    name="imagen"
                    onChange={handleChange}
                    value={form.imagen}
                />
                <TextField
                    id="resume"
                    label="Parrafo de adelanto"
                    variant="filled"
                    name="adelanto"
                    onChange={handleChange}
                    value={form.adelanto}
                />
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Texto completo"
                    className="rounded"
                    name="texto"
                    style={{ outline: "1px solid #bbb", height: "200px" }}
                    onChange={handleChange}
                    value={form.texto}
                />
                <TextField
                    id="fuente"
                    type="text"
                    label="Fuente"
                    name="fuente"
                    variant="filled"
                    onChange={handleChange}
                    value={form.fuente}
                />

                <div className="flex flex-row gap-1">
                    <TextField
                        id="autor"
                        name="autor"
                        type="text"
                        label="Autor"
                        variant="filled"
                        onChange={handleChange}
                        value={form.autor}
                    />
                    <TextField
                        id="date"
                        type="date"
                        name="fecha"
                        helperText="Fecha"
                        variant="filled"
                        onChange={handleChange}
                        value={form.fecha}
                    />
                </div>

                <Button variant="contained" type="submit">
                    Confirmar
                </Button>
                <Button variant="contained" color="error" onClick={handleReset}>
                    Descartar
                </Button>
            </form>
        </div>
    );
};

export default EditNew;
