const db = require("../db");

//Create a table for products in the database if it doesn't exist at application start
exports.creacionTabla = async function () {
    const tableQuery = `CREATE TABLE IF NOT EXISTS empleados (
        id VARCHAR(20) PRIMARY KEY,
        nombre VARCHAR(50),
        cargo VARCHAR(20),
        jefe VARCHAR(20))`;
    const results = await db.query(tableQuery);
    return results[0];
}

exports.consultarTodos = async function () {
    const results = await db.query("SELECT * FROM empleados");
    return results[0];
}

exports.crearEmpleado = async function (id, nombre, cargo, jefe) {
    await db.query("INSERT INTO empleados(id, nombre, cargo, jefe) VALUES (?, ?, ?, ?)", [id, nombre, cargo, jefe]);
}
