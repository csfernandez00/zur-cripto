import { React, useState, useEffect } from "react";
import { Button, TextareaAutosize, TextField } from "@mui/material";

const initialForm = {
    id: null,
    titulo: "",
    imagen: "",
    adelanto: "",
    texto: "",
    fuente: "",
    autor: "",
    fecha: "",
};

const CreateNew = ({ createNew }) => {
    const [form, setForm] = useState(initialForm);
    const [completed, setCompleted] = useState(false);
    const [dirty, setDirty] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (completed) {
            createNew(form);
        } else {
            alert("Datos incompletos");
            return;
        }
    };

    const handleReset = () => {
        setForm(initialForm);
    };

    useEffect(() => {
        const checkCompleted = () => {
            if (
                form.titulo &&
                form.imagen &&
                form.adelanto &&
                form.texto &&
                form.fuente &&
                form.autor &&
                form.fecha
            ) {
                setCompleted(true);
            } else {
                setCompleted(false);
            }
        };

        const checkDirty = () => {
            if (
                form.titulo ||
                form.imagen ||
                form.adelanto ||
                form.texto ||
                form.fuente ||
                form.autor ||
                form.fecha
            ) {
                setDirty(true);
            } else {
                setDirty(false);
            }
        };
        checkCompleted();
        checkDirty();
    }, [form]);

    return (
        <div className="flex flex-col gap-5 items-center justify-center bg-white  w-full h-full  p-10 rounded shadow-xl">
            <h2 className="text-3xl font-semibold">Nueva noticia</h2>
            <form
                className=" flex flex-col gap-5 w-full"
                onSubmit={handleSubmit}
            >
                <TextField
                    id="title"
                    name="titulo"
                    label="Titulo de noticia"
                    variant="outlined"
                    onChange={handleChange}
                    value={form.titulo}
                />
                <TextField
                    id="img-link"
                    name="imagen"
                    label="Link de imagen"
                    variant="outlined"
                    onChange={handleChange}
                    value={form.imagen}
                />
                <TextField
                    id="resume"
                    name="adelanto"
                    label="Parrafo de adelanto"
                    variant="outlined"
                    onChange={handleChange}
                    value={form.adelanto}
                />
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Texto completo"
                    name="texto"
                    className="rounded"
                    style={{
                        outline: "1px solid #bbb",
                        height: "200px",
                        maxHeight: "200px",
                        minHeight: "150px",
                    }}
                    onChange={handleChange}
                    value={form.texto}
                />
                <TextField
                    id="fuente"
                    name="fuente"
                    type="text"
                    label="Fuente"
                    variant="outlined"
                    onChange={handleChange}
                    value={form.fuente}
                />
                <div className="flex flex-row gap-1">
                    <TextField
                        id="autor"
                        name="autor"
                        type="text"
                        label="Autor"
                        variant="outlined"
                        onChange={handleChange}
                        value={form.autor}
                    />
                    <TextField
                        id="date"
                        name="fecha"
                        type="date"
                        helperText="Fecha"
                        variant="outlined"
                        onChange={handleChange}
                        value={form.fecha}
                    />
                </div>

                {completed ? (
                    <Button variant="contained" type="submit">
                        Publicar
                    </Button>
                ) : (
                    <Button variant="contained" type="submit" disabled>
                        Publicar
                    </Button>
                )}
                {dirty ? (
                    <Button
                        variant="contained"
                        onClick={handleReset}
                        color="error"
                    >
                        Limpiar
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        onClick={handleReset}
                        color="error"
                        disabled
                    >
                        Limpiar
                    </Button>
                )}
            </form>
        </div>
    );
};

export default CreateNew;
