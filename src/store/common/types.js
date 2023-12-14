export default [
  "SET_CLASS",
  "SET_GRADE",
  "GET_CLASS",
  "GET_GRADE",
].reduce((prev, cur) => ({ ...prev, [cur]: cur }), {});
