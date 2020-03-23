let userType = null;
let container = null;
let userId = null;
let roomName = null;
let timeOutMessages = [];

/**
 * CHANGE THIS ---------------------------------
 */
const socketIOIP = 'http://192.168.0.110:3333';
const rtmpPath = 'rtmp://192.168.0.110/media/';
/**
 *----------------------------------------------
 */

const getSocketIOIP = () => {
  return socketIOIP;
};
const getRtmpPath = () => {
  return rtmpPath;
};

const clearTimeOutMessages = () => {
  for (let i = 0; i < Utils.getTimeOutMessages().length; i += 1) {
    clearTimeout(Utils.getTimeOutMessages()[i]);
  }
  timeOutMessages = [];
};

const getTimeOutMessages = () => {
  return timeOutMessages;
};

const isNullOrUndefined = value => {
  return value === null || value === undefined;
};

const getContainer = () => {
  return container;
};

const setContainer = con => {
  container = con;
};

const setUserType = type => {
  userType = type;
};

const getUserType = () => {
  return userType;
};

const setUserId = id => {
  userId = id;
};

const getUserId = () => {
  return userId;
};

const setRoomName = name => {
  roomName = name;
};

const getRoomName = () => {
  return roomName;
};

const Utils = {
  isNullOrUndefined,
  getUserType,
  setUserType,
  getContainer,
  setContainer,
  getUserId,
  setUserId,
  getRoomName,
  setRoomName,
  getTimeOutMessages,
  clearTimeOutMessages,
  getSocketIOIP,
  getRtmpPath,
};

export default Utils;
