// *******************************************
// Curious Learning Data Collection API
// *******************************************

"use strict";

import {
  AsyncStorage,
} from 'react-native';

const sectionNum = 0;
const scoreNum = 0;
const touchNum = 0;
const responseNum = 0;
const levelNum = 0;
const customNum = 0;

const section = "@Section";
const score = "@Score";
const touch = "@Touch";
const response = "@Response";
const level = "@Level";
const custom = "@Custom";

const KEYS = [];


const reportSection = function (appID, secID, timeEntered, totalTime, custom_data) {
  const value = {
    'key': 'IN_APP_SECTION',
    'value':  {
      'app_ID': appID,
      'section_ID': secID,
      'Time_enter_section': timeEntered,
      'Time_in_section': totalTime,
      'custom_data': custom_data,
    }
  };
  console.log(JSON.stringify(value));
  let key = section.concat(":",sectionNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    sectionNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportScore = function (appID, secID, timeStamp, item, foilList, score, minScore, maxScore, custom_data) {
  const value = {
    'key': 'IN_APP_SCORE',
    'value':  {
      'app_ID': appID,
      'section_ID': secID,
      'Time_stamp': timeStamp,
      'Item_selected': item,
      'Foil_list': foilList,
      'score': score,
      'min_score_possible': minScore,
      'max_score_possible': maxScore,
      'custom_data': custom_data,
    }
  };
  console.log(JSON.stringify(value));
  let key = score.concat(":",scoreNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    scoreNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportLevelSummary = function (appID, secID, levelNum, timestampMS, typeString, trialCount, sCount, fCount, tCount, responseAvgMS, custom_data) {
  const value = {
    'key': 'IN_APP_LEVEL_SUMMARY',
    'value':  {
      'app_ID': appID,
      'section_ID': secID,
      'level_ID': levelNum,
      'timestamp': timestampMS,
      'trial_type': typeString,
      'numTrials': trialCount,
      'numSuccesses': sCount,
      'numFail': fCount,
      'numTimeout': tCount,
      'avgResponse': responseAvgMS,
      'custom_data': custom_data,
    }
  };
  console.log(JSON.stringify(value));
  let key = level.concat(":", levelNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    //error handling
  }
  levelNum++;
  KEYS = KEYS.concat(key);
  return key;
}

const reportTouch = function (appID, secID, timeStamp, objID, custom_data) {
  const value = {
    'key': 'IN_APP_TOUCH',
    'value':  {
      'app_ID': appID,
      'section_ID': secID,
      'Time_stamp': timeStamp,
      'object_ID': objID,
      'custom_data': custom_data,
    }
  };
  console.log(JSON.stringify(value));
  let key = touch.concat(":",touchNum.toString());
  try {
    AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
      //error handling
    }
    touchNum++;
    KEYS = KEYS.concat(key);
    return key;
    }

const reportResponse = function (appID, secID, levelID, trialID, timeStamp, item, foilList, responseTime, responseValue, custom_data) {
  const value = {
    'key': 'IN_APP_RESPONSE',
    'value':  {
      'app_ID': appID,
      'section_ID': secID,
      'level_ID': levelID,
      'trial_ID': trialID,
      'Time_stamp': timeStamp,
      'Item_selected': item,
      'Foil_list': foilList,
      'response_time': responseTime,
      'response_value': responseValue,
      'custom_data': custom_data
    }
  };
  console.log(JSON.stringify(value));
  let key = response.concat(":",responseNum.toString());
  try {
    AsyncStorage.setItem(key,JSON.stringify(value));
  } catch (error) {
      //error handling
    }
  responseNum++;
  KEYS = KEYS.concat(key);
  return key;
  }

const reportCustom = function (jsonBlob) {
  const value = {
    'key': 'IN_APP_CUSTOM',
    'value': jsonBlob
  };
  console.log(JSON.stringify(value));
  let key = custom.concat(":",customNum.toString());
  try {
    AsyncStorage.setItem(key,JSON.stringify(value));
  } catch (error) {
    //error handling
  }
  customNum++;
  KEYS = KEYS.concat(key);
  return key;
}

const collectionAPI = {
  reportSection,
  reportScore,
  reportTouch,
  reportLevelSummary,
  reportResponse,
  reportCustom,
}

export default collectionAPI;
