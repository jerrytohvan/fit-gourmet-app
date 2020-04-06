const util = require('util');
const isJSON = require('is-json');

async function validation(toCreate, model, create, tab, response) {
  if (util.isArray(toCreate)) {
    for (let i = 0; i < toCreate.length; i++) {
      if (!isJSON(toCreate[i])) {
        isDefined = await model.findById(toCreate[i]).exec();
        if (isDefined != null) tab.push(isDefined);
      } else {
        let json = JSON.parse(toCreate[i]);
        created = await create(json, response);
        if (created != null) tab.push(created);
      }
    }
  } else {
    if (!isJSON(toCreate)) {
      isDefined = await model.findById(toCreate).exec();
      if (isDefined != null) tab.push(isDefined);
    } else {
      let json = JSON.parse(toCreate);
      created = await create(json, response);
      if (created != null) tab.push(created);
    }
  }
  return tab;
}

async function validationUpdate(toCreate, model, tab) {
  if (util.isArray(toCreate)) {
    for (let i = 0; i < toCreate.length; i++) {
      if (!isJSON(toCreate[i])) {
        isDefined = await model.findById(toCreate[i]).exec();
        if (isDefined != null) tab.push(isDefined);
      }
    }
  } else {
    if (!isJSON(toCreate)) {
      isDefined = await model.findById(toCreate).exec();
      if (isDefined != null) tab.push(isDefined);
    }
  }
  return tab;
}

module.exports = {
  validation,
  validationUpdate
}