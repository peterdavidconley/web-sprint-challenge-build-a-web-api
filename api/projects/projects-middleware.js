const Projects = require('./projects-model');

function logger(req, res, next) {

    const timestamp = new Date().toLocaleString();
    const method = req.method
    const url = req.url
    console.log(`[${timestamp}] ${method} to ${url}`);
    next()
  
  }

  async function validateProjectId(req, res, next) {

    try {
      const project = await Projects.get(req.params.id)
      if (!project) {
        res.status(404).json({
          message: 'Project not found'
        })
      } else {
        next()
      }
    } catch (err) {
      res.status(500).json({
        message: 'error fetching user'
      })
    }
  }


  // Exporting files

  module.exports = {

    logger, 
    validateProjectId,
  
  }
