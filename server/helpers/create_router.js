const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {
    const router = express.Router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection
        .findOne({_id: ObjectID(id)})
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    return router
}

module.exports = createRouter;

