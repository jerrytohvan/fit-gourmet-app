const error = require('../util/error');

const modelDelete = async function (response, name, model, id) {
  try {
    if (await model.findByIdAndRemove(id) != null) {
      const res = {
        message: name + " successfully deleted",
        id: id
      };
      return response.status(200).send(res);
    } else {
      return response.status(404).send(name + ' not found');
    }
  } catch (err) {
    error.errorHandling(response, err);
  }
}

module.exports = {
  modelDelete
}