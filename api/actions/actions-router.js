const express = require('express');
const router = express.Router();

// Import middleware

const {



} = require('./actions-middleware')

// Import Model

const Actions = require('./actions-model');

// **** Writing Project Endpoints ****


// `[GET] /api/actions` - Returns an array of actions (or an empty array) as the body of the response.

router.get('/', (req, res) => {

    Actions.get()
    .then(actions => {
        res.status(201).json(actions)
    })
})

// `[GET] /api/actions/:id - Returns an action with the given `id` as the body of the response. - If there is no action with the given `id` it responds with a status code 404.

router.get('/:id', (req, res) => {

    const {id} = req.params
    Actions.get(id) 
    .then(action => {
        if (!action) {
            res.status(404).json({
                message: 'Project ID not found'
            })
        } else {
            res.json(action)
        }
    })

})

// `[POST] /api/actions` - Returns the newly created action as the body of the response. - If the request body is missing any of the required fields it responds with a status code 400. - When adding an action make sure the `project_id` provided belongs to an existing `project`.

router.post('/', (req, res) => {

    Actions.insert(req.body)
    .then(newAction => {
        if (!req.body.project_id || !req.body.description || !req.body.notes) {
            res.status(400).json({
                message: 'Missing required fields'
            })
        } else {
            res.json(newAction)
        }
    })
    
})

// `[PUT] /api/actions/:id` - Returns the updated action as the body of the response. - If there is no action with the given `id` it responds with a status code 404. - If the request body is missing any of the required fields it responds with a status code 400.

router.put('/:id', (req, res) => {
    
    const { notes, description, project_id } = req.body
    if (!notes || !description || !project_id) {
        res.status(400).json({
            message: 'Missing required fields'
        })
    } else {
        Actions.get(req.body.params)
        .then(action => {
            if (!action) {
                res.status(404).json({
                    message: 'The action with the specified ID does not exist'
                })
            } else {
                return Actions.update(req.params.id, req.body)
            }
        })
        .then(action  => {
            if (action) {
                return Actions.get(req.params.id)
            }
        })
        .then(action => {
            if (action) {
                res.json(action)
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'The action information could not be modified'
            })
        })
    }

})

// `[DELETE] /api/actions/:id` - Returns no response body. - If there is no action with the given `id` it responds with a status code 404.

router.delete('/:id', (req, res) => {
    
    Actions.remove(req.params.id)
    .then(action => {
        if (!action) {
            res.status(404).json({
                message: 'Action with that ID could not be found'
            })
        } else {
            res.json(action)
        }
    }) 
})

module.exports = router; 