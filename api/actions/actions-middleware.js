function logger(req, res, next) {

    const timestamp = new Date().toLocaleString();
    const method = req.method
    const url = req.url
    console.log(`[${timestamp}] ${method} to ${url}`);
    next()
  
  }


  // Exporting files

  module.exports = {

    logger, 
  
  }