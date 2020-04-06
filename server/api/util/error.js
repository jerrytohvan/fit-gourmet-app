function errorHandling(response, error) {
  console.log(error.name)
  switch (error.name) {
    case 'TypeError':
      return response.status(404).end(error.message);
    case 'CastError':
      return response.status(400).end(error.message);
    case 'MongoError':
      return response.status(400).end(error.message);
    case 'Error':
      return response.status(400).end(error.message);
    case 'ValidationError':
      return response.status(400).end(error.message);
    default:
      return response.status(500).end(error.message);
  }
}

module.exports = {
  errorHandling
}