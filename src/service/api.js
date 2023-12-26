const tempApis = {
    "": {
        dpStudentMealList:"/jeecg-boot/dp/dietary/nutrition/student/meal/count",//用餐人数统计
        getGradeDict:"/jeecg-boot/dp/common/grade/select/list",//用餐人数统计
        getClassDict:"/jeecg-boot/dp/common/clazzgroup/select/list",//用餐人数统计
        getNutrition:"/jeecg-boot/dp/dietary/nutrition/grade/food/nutrition/count",//每日膳食营养计入量统计
        getAllergen:"/jeecg-boot/dp/dietary/nutrition/student/allergen/count",//过敏原
        getEatUpRank:"/jeecg-boot/dp/dietary/nutrition/student/cd/top/count",//过敏原
        getEatUp:"/jeecg-boot/dp/dietary/nutrition/student/cd/count",//过敏原
        getFoodAnylise:"/jeecg-boot/dp/dietary/nutrition/grade/food/type/count",//过敏原
        getTotal:"/jeecg-boot/dp/common/yey/person/total",//过敏原
        //------------------------------智慧生活
        getStandardBody:"/jeecg-boot/dp/common/intelligent/life/standard/height/and/weight",//智慧生活-标准身高体重
        getStandardCondition:"/jeecg-boot/dp/intelligent/life/height/and/weight",//智慧生活-标准身高体重达标情况
        getSleep:"/jeecg-boot/dp/intelligent/life/siesta/count",//午休
        getDrink:"/jeecg-boot/dp/intelligent/life/drink/count",//午休
        getShit:"/jeecg-boot/dp/intelligent/life/faeces/count",//午休
        getWeather:"/jeecg-boot/dp/intelligent/life/title",//午休
        getVision:"/jeecg-boot/dp/intelligent/life/vision",//午休
        //------------------------------智慧考勤
        getAttendschool:"/jeecg-boot/dp/dietary/attendance/grade/student/attendschool/count",//今日实到人数
        getAttendschoolCount:"/jeecg-boot/dp/dietary/attendance/everyday/student/attendschool/count",//出勤率统计
        getAttendschoolCondition:"/jeecg-boot/dp/dietary/attendance/clazzgroup/student/attendschool/count",//出勤率统计
        getAttendschoolSex:"/jeecg-boot/dp/dietary/attendance/grade/sex/count",//出勤率统计
        getAttendschoolNumber:"/jeecg-boot/dp/dietary/attendance/grade/student/count",//出勤率统计
        getAttendschoolNumberCount:"/jeecg-boot/dp/dietary/attendance/student/attendschool/count",//出勤率统计
        //==================================智慧区域
        getAreaPeople:"/jeecg-boot/dp/activity/area/student/activityarea/count",//出勤率统计
        getAreaAnylise:"/jeecg-boot/dp/activity/area/student/activityarea/analyze/count",//出勤率统计
        getAreaRank:"/jeecg-boot/dp/activity/area/student/activityarea/top/count",//出勤率统计
        getAreaFrequency:"/jeecg-boot/dp/activity/area/student/activityarea/frequency/count",//出勤率统计
        //=================================智慧数字
        getNumPeopel:"/jeecg-boot/dp/digital/literacy/interest/course/count",//报名人数统计
        //=================================智慧安全
        getSafeCount:"/jeecg-boot/dp/intelligent/security/safe/education/count",//报名人数统计
        //===============================智慧评价
        getFour:"/jeecg-boot/dp/intelligent/evaluation/student/good/growth/count",//报名人数统计
        getEtiquettepolite:"/jeecg-boot/dp/intelligent/evaluation/student/etiquettepolite/count",//报名人数统计
        getSelf:"/jeecg-boot/dp/intelligent/evaluation/student/self/count",//报名人数统计
        getFocusactivity:"/jeecg-boot/dp/intelligent/evaluation/student/focusactivity/count",//报名人数统计
        getEtiquettepoliteAndSelf:"/jeecg-boot/dp/intelligent/evaluation/student/self/and/etiquettepolite/count",//报名人数统计
        //==================================智慧运动
        getUsage:"/jeecg-boot/dp/intelligent/sports/sports/area/usage/rate",//报名人数统计
        getSportStar:"/jeecg-boot/dp/intelligent/sports/sports/eminent",//报名人数统计
        getSportAll:"/jeecg-boot/dp/intelligent/sports/school/sports",//报名人数统计
        getSportTime:"/jeecg-boot/dp/intelligent/sports/clazz/sports/times",//报名人数统计


    },
};

let apis = {};
Object.keys(tempApis).forEach((item) => {
    Object.keys(tempApis[item]).forEach((key) => {
        apis[key] = item + tempApis[item][key];
    });
});
export default apis;
