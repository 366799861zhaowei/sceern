
let dateUtil = {

};

dateUtil.getDateTime = function (timeStamp) {
    timeStamp += dateUtil.baseDate;
    var date = new Date(parseInt(timeStamp) * 1000);
    if (date.toLocaleDateString() == new Date().toLocaleDateString()) {
        return date.toLocaleTimeString();
    } else {
        return date.toLocaleString();
    }
};

/* 将时间戳转换成日期格式 */
dateUtil.timestampToDate = function (timestamp) {
    if (!timestamp) {
        return null
    } else {
        if (timestamp.length == 10) {
            timestamp = timestamp * 1000
        }
        var date = new Date(timestamp);// 时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear();
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
    }
};

dateUtil.getTimeStamp = function (strDateTime) {
    var timeStamp = new Date(strDateTime).valueOf();
    timeStamp /= 1000;
    timeStamp -= dateUtil.baseDate;
    return timeStamp;
};

/*
 *  格式化日期函数
 *  参数:
 *      {1}  ->  date : 日期对象(Date)
 *      {2}  _>  format: 格式 (yyyy-MM-dd hh:mm:ss)
 *
 *  wangertiao 2016-5-31
 */
dateUtil.format = function (date, format) {
    if (typeof date == 'number'){
        date = new Date(date)
    }
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

dateUtil.daysComputed = (data) => {
    let now = new Date().getTime();
    let before = new Date(data).getTime();
    let day = (now - before) / (1000 * 60 * 60 * 24);
    return parseInt(day)
}

export default dateUtil;
