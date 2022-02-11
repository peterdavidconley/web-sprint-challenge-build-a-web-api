const express = require('express');
const router = express.Router();

// Import middleware

const {

    

} = require('./projects-middleware')

// Import Model

const Projects = require('./projects-model');

// **** Writing Project Endpoints ****

// [GET] /api/projects` - Returns an array of projects as the body of the response. - If there are no projects it responds with an empty array.

router.get('/', (req, res) => {

    Projects.get()
    .then(projects => {
        res.json(projects)
    })

})

// `[GET] /api/projects/:id` - Returns a project with the given `id` as the body of the response. - If there is no project with the given `id` it responds with a status code 404.

router.get('/:id', (req, res) => {

    const {id} = req.params
    Projects.get(id) 
    .then(project => {
        if (!project) {
            res.status(404).json({
                message: 'Project ID not found'
            })
        } else {
            res.json(project)
        }
    })

})

// `[POST] /api/projects` - Returns the newly created project as the body of the response. - If the request body is missing any of the required fields it responds with a status code 400.

router.post('/', (req, res) => {

    Projects.insert(req.body)
    .then(newProject => {
        if (!req.body.name || !req.body.description) {
            res.status(400).json({
                message: 'Missing required fields'
            })
        } else {
            res.json(newProject)
        }
    })
})

// `[PUT] /api/projects/:id` - Returns the updated project as the body of the response. - If there is no project with the given `id` it responds with a status code 404. - If the request body is missing any of the required fields it responds with a status code 400.

router.put('/:id', (req, res) => {

})

// `[DELETE] /api/projects/:id` - Returns no response body. - If there is no project with the given `id` it responds with a status code 404.

router.delete('/:id', (req, res) => {

    Projects.remove(req.params.id)
    .then(project => {
        if (!project) {
            res.status(404).json({
                message: 'Project with that ID could not be found'
            })
        } else {
            res.json(project)
        }
    }) 
})

// `[GET] /api/projects/:id/actions` - Returns an array of actions (could be empty) belonging to a project with the given `id`. - If there is no project with the given `id` it responds with a status code 404.

router.get('/:id/actions', (req, res) => {

})

module.exports = router; 