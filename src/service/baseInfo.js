import axios from "@/libs/axios";
import api from "./api";
let config = {
    headers: { 'Content-Type': 'application/json' }
};

export function dpStudentMealList (data) {
    return axios.post(api.dpStudentMealList,data,config)
}
export function getClassDict (data) {
    return axios.post(api.getClassDict,data,config)
}
export function getGradeDict (data) {
    return axios.post(api.getGradeDict,data,config)
}
export function getNutrition (data) {
    return axios.post(api.getNutrition,data,config)
}
export function getStandardBody (data) {
    return axios.post(api.getStandardBody,data,config)
}
export function getAllergen (data) {
    return axios.post(api.getAllergen,data,config)
}
export function getEatUpRank (data) {
    return axios.post(api.getEatUpRank,data,config)
}
export function getEatUp (data) {
    return axios.post(api.getEatUp,data,config)
}
export function getAttendschool (data) {
    return axios.post(api.getAttendschool,data,config)
}
export function getStandardCondition (data) {
    return axios.post(api.getStandardCondition,data,config)
}
export function getSleep (data) {
    return axios.post(api.getSleep,data,config)
}
export function getAttendschoolCount (data) {
    return axios.post(api.getAttendschoolCount,data,config)
}
export function getAttendschoolCondition (data) {
    return axios.post(api.getAttendschoolCondition,data,config)
}
export function getAttendschoolSex (data) {
    return axios.post(api.getAttendschoolSex,data,config)
}
export function getAttendschoolNumber (data) {
    return axios.post(api.getAttendschoolNumber,data,config)
}
export function getAttendschoolNumberCount (data) {
    return axios.post(api.getAttendschoolNumberCount,data,config)
}
export function getDrink (data) {
    return axios.post(api.getDrink,data,config)
}
export function getShit (data) {
    return axios.post(api.getShit,data,config)
}
export function getWeather (data) {
    return axios.post(api.getWeather,data,config)
}
export function getVision (data) {
    return axios.post(api.getVision,data,config)
}
export function getAreaPeople (data) {
    return axios.post(api.getAreaPeople,data,config)
}
export function getAreaAnylise (data) {
    return axios.post(api.getAreaAnylise,data,config)
}
export function getAreaRank (data) {
    return axios.post(api.getAreaRank,data,config)
}
export function getAreaFrequency (data) {
    return axios.post(api.getAreaFrequency,data,config)
}
export function getFoodAnylise (data) {
    return axios.post(api.getFoodAnylise,data,config)
}
export function getTotal (data) {
    return axios.post(api.getTotal,data,config)
}
export function getNumPeopel (data) {
    return axios.post(api.getNumPeopel,data,config)
}
export function getSafeCount (data) {
    return axios.post(api.getSafeCount,data,config)
}
export function getFour (data) {
    return axios.post(api.getFour,data,config)
}
export function getEtiquettepolite (data) {
    return axios.post(api.getEtiquettepolite,data,config)
}
export function getSelf (data) {
    return axios.post(api.getSelf,data,config)
}
export function getFocusactivity (data) {
    return axios.post(api.getFocusactivity,data,config)
}
export function getEtiquettepoliteAndSelf (data) {
    return axios.post(api.getEtiquettepoliteAndSelf,data,config)
}
export function getUsage (data) {
    return axios.post(api.getUsage,data,config)
}
export function getSportStar (data) {
    return axios.post(api.getSportStar,data,config)
}
export function getSportAll (data) {
    return axios.post(api.getSportAll,data,config)
}
export function getSportTime (data) {
    return axios.post(api.getSportTime,data,config)
}

