const { Router } = require('express');
const router = Router();

const empleados = require('../datos.json');
const con = require('../database');

router.get('/', (req,res)=>{
    //res.json(empleados);
    con.query('SELECT * FROM empleados', (err,rows,felds)=>{
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req,res)=>{
    console.log(req.body);
    const { cc, nombre, jefe } = req.body;
    if(cc && nombre && jefe){
        const newEmpleado = {...req.body}
        empleados.push(newEmpleado);
        res.json(empleados);
    }else{
        res.status(500).json({
            error:500,
            Mensaje:'Datos incorrectos para crear empleado'
        })
    }
})

module.exports = router;