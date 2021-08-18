const {request, response} = require('express');

const usuariosGet = (req = request, res = response) => {
    res.json({msg: "Hola Mundo desde GET"});
};

const usuariosPost = (req = request, res = response) => {
    const data = req.body;
    res.status(201).json({msg:"Hola Mundo desde POST", data});
};

const usuariosPut = (req = request, res = response) => {
    const data = req.params;
    res.status(400).json({msg:"Hola Mundo desde PuT ", data});
};

const usuariosDelete = (req = request, res = response) => {
    const data = req.query;
    res.status(500).json({msg:"Hola Mundo desde DELETE", data});
};

module.exports = { usuariosGet, usuariosPost, usuariosPut, usuariosDelete };
 