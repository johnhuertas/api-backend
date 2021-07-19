require("dotenv").config();
const express = require("express");
const empleadoModel = require("./models/empleado");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get("/api/empleados/consultar", async (req, res) => {
    try {
        const emp = await empleadoModel.consultarTodos();
        res.status(200).json(emp);
    }
    catch (err) {
        res.status(500).json({Mensaje: err.message});
    }
});

app.get("/api/empleados/crearTabla", async (req, res) => {
    try {
        const respuesta = await empleadoModel.creacionTabla();
        res.status(200).json(respuesta);
    }
    catch (err) {
        res.status(500).json({Mensaje: err.message});
    }
});

app.post("/api/empleados/crear", async (req, res) => {
    try {
        const {id, nombre, cargo, jefe} = req.body;
        await empleadoModel.crearEmpleado(id, nombre, cargo, jefe);
        res.status(200).json({Mensaje: "Empleado creado"});
    }
    catch (err) {
        res.status(500).json({Mensaje: err.message});
    }
});

app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log(`aplicacion ejecutandose en el puerto: ${process.env.NODE_DOCKER_PORT}`)
});