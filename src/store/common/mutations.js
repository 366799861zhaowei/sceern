import TYPES from "./types";
export default {
  [TYPES.SET_CLASS](state, v) {
    console.log(v,'vvv');
    state.class = {...state.class,...v}; 
  },
  [TYPES.SET_GRADE](state,v) {
    state.grade = v;
  },
};
