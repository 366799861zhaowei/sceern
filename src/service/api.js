const tempApis = {
    "": {
        dpStudentMealList:"/jeecg-boot/dp/dietary/nutrition/student/meal/count",//用餐人数统计
        getGradeDict:"/jeecg-boot/dp/common/grade/select/list",//用餐人数统计
        getClassDict:"/jeecg-boot/dp/common/clazzgroup/select/list",//用餐人数统计
        getNutrition:"/jeecg-boot/dp/dietary/nutrition/grade/food/nutrition/count",//每日膳食营养计入量统计
        getAllergen:"/jeecg-boot/dp/dietary/nutrition/student/allergen/count",//过敏原
        getEatUpRank:"/jeecg-boot/dp/dietary/nutrition/student/cd/top/count",//过敏原
        getEatUp:"/jeecg-boot/dp/dietary/nutrition/student/cd/count",//过敏原
        //------------------------------智慧生活
        getStandardBody:"/jeecg-boot/dp/common/intelligent/life/standard/height/and/weight",//智慧生活-标准身高体重
        getStandardCondition:"/jeecg-boot/dp/common/intelligent/life/height/and/weight",//智慧生活-标准身高体重达标情况
        getSleep:"/jeecg-boot/yey/dpStudentSiesta/dp/count",//午休
        //------------------------------智慧考勤
        getAttendschool:"/jeecg-boot/dp/dietary/attendance/grade/student/attendschool/count",//今日实到人数
    },
};

let apis = {};
Object.keys(tempApis).forEach((item) => {
    Object.keys(tempApis[item]).forEach((key) => {
        apis[key] = item + tempApis[item][key];
    });
});
export default apis;
