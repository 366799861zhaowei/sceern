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

