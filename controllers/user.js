const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {

    const {nombre, deliren} = req.query;

    res.json({
        msg: 'API GET (controller)',
        nombre,
        deliren
    });
}

const usuariosPut = (req, res) => {

    const {id} = req.params;

    res.json({
        msg: 'API: PUT (controller)',
        id
    });
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'API: POST (controller)',
        nombre,
        edad 
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'API: DELETE (controller)'
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'API: PATCH (controller)'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}