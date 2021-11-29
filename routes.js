const express = require('express');
const routes = express.Router();

// Crear nuevos empleados
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('INSERT INTO empleados SET ?', [req.body], (err, rows) => {
                if (err) {
                    return res.send(err.message);
                } else {
                    res.status(201).send('Empleado creado');
                }
            });
        }
    });
});

// Editar el empleado
routes.put('/edit/:id', async (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('UPDATE empleados set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send('Empleado editado');
                }
            });
        }
    });
});

// Dar de baja empleado
routes.put('/delete/:id', async (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('UPDATE empleados SET status = 0 WHERE id = ?', [req.params.id], (err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.send('Empleado eliminado');
                }
            });
        }
    });
});

// Get de un solo empleado
routes.get('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('SELECT * FROM empleados WHERE status = 1 AND id = ?', req.params.id, (err, row) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.json(row);
                }
            });
        }
    });
});

// Get de todos los empleados
routes.get('/', (req, res) => {

    req.getConnection((err, conn) => {
        if (err) {return res.send(err);}
        else {
            conn.query('SELECT * FROM empleados WHERE status = 1', (err, result) => {
                if (err) {return res.send(err);}
                else {
                    const resultsPerPage = 6;
                    const numOfResults = result.length;
                    const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
                    let page = req.query.page ? Number(req.query.page) : 1;
                    if (page > numberOfPages) {
                        return res.redirect(200, `http://localhost:4000/api/v1/empleados/?page=${encodeURIComponent(numberOfPages)}`);
                    }
                    if (page < 1) {
                        return res.redirect(200, `http://localhost:4000/api/v1/empleados/?page=${encodeURIComponent('1')}`);
                    }
                    // Aqui utilizamos lo calculado anteriormente, como sabemos limit puede elegir de que fila iniciar y cuantas mas tomar
                    const startingLimit = (page - 1) * resultsPerPage;
                    conn.query(`SELECT * FROM empleados WHERE status = 1 LIMIT ${startingLimit},${resultsPerPage}`, (err, rows) => {
                        if (err) return res.send(err);
                        else {
                            return res.json(rows);
                        }
                    })
                }
            })
        }
    })
})

// Filtrar por departamento
routes.get('/departamento/:departamento', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.send(err);
        } else {
            conn.query('SELECT * FROM empleados WHERE status = 1 AND departamento = ?', req.params.departamento , (err, rows) => {
                if (err) {
                    return res.send(err);
                } else {
                    res.json(rows);
                }
            });
        }
    });
});

module.exports = routes;