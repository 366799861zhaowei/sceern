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

