const error = require('./error');
const util = require('util');

async function list(model, request, response) {
  try {
    const elements = await model.find().exec();
    return response.status(200).json(elements);
  } catch (err) {
    error.errorHandling(response, err);
  }
}

async function detail(model, request, response) {
  try {
    if (request.params != null) {
      const element = await model.findById(request.params.id).exec();
      return response.status(200).json(element);
    } else {
      let element = await model.findById(request).exec();
      return (element);
    }
  } catch (err) {
    error.errorHandling(response, err);
  }
}

async function recoverReferences(object, model) {
  for (let iter = 0; iter < object.length; iter++) {
    object[iter] = await model.findById(object[iter]).exec();
  }
  return object;
}

async function showConfigs(object, getObject, response) {
  if (object != null) {
    for (let i = 0; i < object.length; i++) {
      object[i] = await getObject(object[i], response);
    }
    return object;
  }
}

module.exports = {
  list,
  detail,
  recoverReferences,
  showConfigs
}