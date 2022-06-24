const express = require("express");
const userSchema = require("../models/user");
const { body, validationResult } = require("express-validator")
const router = express.Router();




// create user
router.post("/rifa", (req, res) => {
    const user = userSchema(req.body);

    if (!req.body.numero) {
        return res.status(400).json('Campo numero é obrigatório')
    } else if (!req.body.nome) {
        return res.status(400).json('Campo nome é obrigatório')
    } 
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/rifa", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: "Erro na busca de um agendamento. Entre em contado com o desenvolvedor" }));
});

//mexi daqui pra baixo


// delete a user
router.delete("/rifa/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/rifa/:id", (req, res) => {
    const { id } = req.params;
    const { numero, nome} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { numero, nome} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//ate aqui


module.exports = router;
