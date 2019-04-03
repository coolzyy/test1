function ByClassName(cn) {
    return typeof (cn) == 'string' ? document.getElementsByClassName(cn)[0] : cn;
}

// 轮播图
var div = ByClassName('pic-box'),
    imgs = div.getElementsByTagName('a'),
    len = imgs.length,
    dots = ByClassName('pic-control').getElementsByTagName('li'),
    len2 = dots.length;

var index = 0,
    timer = setInterval(run, 2000);

function run() {
    index++;
    index = index == 5 ? 0 : index;
    changeImg();
    changeDot();
}

function changeImg() {
    for (var i = 0; i < len; i++) {
        imgs[i].style.display = "none";
    }
    imgs[index].style.display = "block";
}

function changeDot() {
    for (var j = 0; j < len2; j++) {
        dots[j].id = ""
    }
    dots[index].id = "dot-selected";
}

div.onmouseover = function () {
    clearInterval(timer);
}

div.onmouseout = function () {
    timer = setInterval(run, 2000);
}

for (var m = 0; m < len2; m++) {
    (function (m) {
        dots[m].onclick = function () {
            index = m;
            changeImg();
            changeDot();
        }
    }(m))
}


// 子菜单

var menu = ByClassName('inner-left').getElementsByTagName('li');
var subMenu = ByClassName('sub-menu-box');
for (var n = 0; n < menu.length; n++) {
    (function (n) {
        menu[n].onmouseover = function () {
            subMenu.style.display = "block";
        }
        menu[n].onmouseout = function () {
            subMenu.style.display = "none";
        }
    }(n))
}



