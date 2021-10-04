
const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apikey} =  req.query;

    res.json({
        message: 'get API - Controlador',
        q,
        nombre,
        apikey
    })

}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        message: 'POST API - Controlador',
        body
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        message: 'get API - Controlador',
        id
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        message: 'get API - Controlador'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        message: 'get API - Controlador'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}