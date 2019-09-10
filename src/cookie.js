function setCookie(name, value, time) {
    if (!name || !value) {
        window.alert("not name or value");
    }
    var date = new Date();
    date.setTime(date.getTime + time * 24 * 60 * 60 * 1000);
    var expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires}`;
}

function getCookie(name) {
    if (!name) {
        window.alert("not name");
    }
    var cookieObj = formatCookie(document.cookie);

    return cookieObj[name] ? cookieObj[name] : "not exits";

}

function formatCookie(cookieStr) {
    var cookieArr = cookieStr.split(";");
    var cookieObj = {};
    cookieArr.forEach((item, index, self) => {
        var itemArr = item.trim().split("=");
        cookieObj[itemArr[0]] = itemArr[1];
    })
    return cookieObj;
}

export default {
    setCookie,
    getCookie
}