function wrr() {
    alert("警告信息");
}

function conf() {
    const flag = confirm("确认/取消信息");
    document.write(flag);
}

function pro() {
    const flag = prompt("提示输入信息");
    document.write(flag);
}

function bClose() {
    const flag = confirm("确定要离开吗?");
    if (flag){
        close();
    }else {
        alert("帮你打开一个新网页");
        open("https://www.baidu.com");
    }
}

let tid;

function sTout() {
    tid = setTimeout("alert('Hello world!')",3000);
}

function cTout() {
    clearTimeout(tid)
}

let  sid;

function sIval() {
    sid = setInterval("alert('Hello JavaScript!')", 3000);
}

function csi() {
    clearInterval(sid)
}