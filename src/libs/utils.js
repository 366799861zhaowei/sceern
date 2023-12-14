export function loadScript (url, attr = {}, once = true) {
    if (once) {
    // 成功加载过一次就跳过
        const els = document.querySelectorAll("script");
        const matched = Array.from(els).find((x) => x.src.indexOf(url) > -1);
        if (matched && matched.getAttribute("data-status") === "load") {
            return Promise.resolve();
        }
    }
    return new Promise((resolve, reject) => {
        const el = document.createElement("script");
        el.src = url;
        Object.keys(attr).forEach((k) => {
            el.setAttribute(k, attr[k]);
        });
        el.addEventListener("load", () => {
            el.setAttribute("data-status", "load");
            resolve(el);
        });
        el.addEventListener("error", () => {
            el.setAttribute("data-status", "error");
            reject(new Error(`加载失败:${url}`));
        });
        document.body.appendChild(el);
    });
}

export function loadStyle (url, attr = {}, once = true) {
    if (once) {
    // 成功加载过一次就跳过
        const els = document.querySelectorAll("link");
        const matched = Array.from(els).find((x) => x.href.indexOf(url) > -1);
        if (matched && matched.getAttribute("data-status") === "load") {
            return Promise.resolve();
        }
    }
    return new Promise((resolve, reject) => {
        const el = document.createElement("link");
        el.rel = "stylesheet";
        el.href = url;
        Object.keys(attr).forEach((k) => {
            el.setAttribute(k, attr[k]);
        });
        el.addEventListener("load", () => {
            el.setAttribute("data-status", "load");
            resolve(el);
        });
        el.addEventListener("error", () => {
            el.setAttribute("data-status", "error");
            reject(new Error(`加载失败:${url}`));
        });
        document.head.appendChild(el);
    });
}


/**
 * 判断是否安卓端
 * author sumingqin@linewell.com
 * @since 2020-11-27
 */
export const isAndroid = () => {
    const u = navigator.userAgent;
    // Android终端
    return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
};

export const getQueryVariable = (variable) => {
       // var query = window.location.search.substring(1);
       let query = window.location.href.split("?")
        if(query.length < 2)return false
       query = query[1]
       let vars = query.split("&");
       for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] == variable){
                   return pair[1];
            }
       }
       return false;
}
