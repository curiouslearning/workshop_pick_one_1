/**/

var pick_one_data = require('./data/pick_one.json');

const images = {
  'cat_pic': require('PickOne/src/images/cat.jpg')
};

function calcDimensions (objArray) {
  let rows = [];
  let columns = [];
  let dimensions = [];

  objArray.forEach(function(obj) {
    rows.push(parseInt(obj.pos[0]));
    columns.push(parseInt(obj.pos[1]));
  });

  dimensions.push(Math.max(...rows));
  dimensions.push(Math.max(...columns));

  return dimensions;
}

function getObjectIds (objectArray) {
  let objIds = [];

  objectArray.forEach(function(obj) {
    objIds.push(obj.obj_id);
  });

  return objIds;
}

function getStimulus (objectId) {
  const object_list = pick_one_data.object_list;
  let stimulus = undefined;

  object_list.forEach(function(obj) {
    if (obj.object_id == objectId) {
      stimulus = obj;
      return;
    }
  });

  return stimulus;
}

function getTrial (trialId) {
  const trial_list = pick_one_data.trial_list;
  let trial = undefined;

  trial_list.forEach(function(obj) {
    if (obj.trial_id == trialId) {
      trial = obj;
      return;
    }
  });

  return trial;
}

export default {
  images,
  calcDimensions,
  getObjectIds,
  getStimulus,
  getTrial
};
