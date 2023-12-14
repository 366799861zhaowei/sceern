import TYPES from "./types";
import { getGradeDict,getClassDict } from "@/service/baseInfo.js";
console.log(TYPES,'--------------TYPES');
export default {
  [TYPES.GET_GRADE]({ commit, state }) {
    if(state.grad && state.grad.length) return;
    return new Promise((resolve, reject) => {
      getGradeDict()
        .then((res) => {
          commit(TYPES.SET_GRADE, res); 
          resolve();
        })
        .catch(() => {
          reject(new Error("获取字典失败"));
        });
    });
  },
  [TYPES.GET_CLASS]({ commit, state },val) {
    if(state.class[val] && state.class[val].length) return;
    return new Promise((resolve, reject) => {
      getClassDict({gradeId:val})
        .then((res) => {
          const data = {[val]:res}
          commit(TYPES.SET_CLASS, data); 
          resolve();
        })
        .catch(() => {
          reject(new Error("获取字典失败"));
        });
    });
  },
};
