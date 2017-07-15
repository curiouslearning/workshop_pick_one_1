/**
 * Game Utils
 */

// Specify game JSON data
const pickOneData = require('./data/pick_one.json');

// Specify image files
const images = {
  'cat_pic': require('PickOne/src/images/cat.jpg')
};

function calcDimensions (objArray) {
  /**
   * Based on a array of row/column coordinates, calculate the dimensions of
   * stimuli to display.
   */
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

function getObjectIDs (objArray) {
  /*
   * Return an array of object IDs.
   */
  let objIDs = [];

  objArray.forEach(function(obj) {
    objIDs.push(obj.obj_id);
  });

  return objIDs;
}

function getStimulus (objID) {
  /*
   * Based on an object ID, return the corresponding stimulus object.
   */
  const objList = pickOneData.object_list;
  let stimulus = undefined;

  objList.forEach(function(obj) {
    if (obj.object_id == objID) {
      stimulus = obj;
      return;
    }
  });

  return stimulus;
}

function getTrial (trialId) {
  /*
   * Based on a trial ID, return trial object.
   */
  const trialList = pickOneData.trial_list;
  let trial = undefined;

  trialList.forEach(function(obj) {
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
  getObjectIDs,
  getStimulus,
  getTrial
};
