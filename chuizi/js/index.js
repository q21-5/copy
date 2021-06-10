//搜索栏focus后变化
var barput = document.getElementById('barput');
var btns = document.getElementById('btns');
barput.onblur = function() {
    btns.style.display = 'block';
    this.setAttribute("placeholder", "");
}
barput.onfocus = function() {
        btns.style.display = 'none';
        this.setAttribute("placeholder", "请输入搜索的商品");
    }
    //导航栏吸顶后变化
window.onscroll = function() {
        var bar = document.getElementById('bar');
        var bartop = bar.offsetTop;
        var barright = document.getElementById('barright');
        var barright2 = document.getElementById('barright2');
        if (bartop > 45) {
            barright.style.display = 'none';
            barright2.style.display = 'block';
        } else {
            barright.style.display = 'block';
            barright2.style.display = 'none';
        }
    }
    //轮播
var main = document.getElementById('main');
var imgs = document.getElementById('imgs');
var ul = document.getElementById('selectul');
var img = imgs.getElementsByTagName('img');
var li = ul.getElementsByTagName('li')
var index = 1; //记录位置
//自动播放  开始
var timer = setInterval(scroll, 2000); //设置定时器
function scroll() {
    for (var i = 0; i < img.length; i++) {
        img[i].style.opacity = '0';
        li[i].style.opacity = '0.5';
    }
    img[index].style.opacity = '1';
    li[index].style.opacity = '1';
    index++;
    if (index == img.length) {
        index = 0;
    }
}

//自动播放  结束
//  鼠标移动上的操作  start
function mouseOver() {
    clearInterval(timer); //清除定时器,停止定时轮播  
}

function mouseOut() {
    timer = setInterval(scroll, 2000);
}
main.onmouseover = function() {
    mouseOver();
}
main.onmouseout = function() {
        mouseOut();
    }
    //  鼠标移动上的操作  end

li[0].onclick = function() {
    // var x = li.index();
    li[0].style.opacity = '1';
    img[0].style.opacity = '1';
    li[2].style.opacity = '0.5';
    img[2].style.opacity = '0';
    li[1].style.opacity = '0.5';
    img[1].style.opacity = '0';
}
li[1].onclick = function() {
    // var x = li.index();
    li[0].style.opacity = '0.5';
    img[0].style.opacity = '0';
    li[2].style.opacity = '0.5';
    img[2].style.opacity = '0';
    li[1].style.opacity = '1';
    img[1].style.opacity = '1';
}
li[2].onclick = function() {
        // var x = li.index();
        li[0].style.opacity = '0.5';
        img[0].style.opacity = '0';
        li[2].style.opacity = '1';
        img[2].style.opacity = '1';
        li[1].style.opacity = '0.5';
        img[1].style.opacity = '0';
    }
    //修改热卖里的文字
var p = document.getElementById('hotp');
var a = document.getElementById('hota');
a.onmouseover = function() {
    p.innerText = "6月优惠换机购";
    p.style.color = 'red';
}
a.onmouseout = function() {
    p.innerText = "是下一代手机，更是下一代电脑";
    p.style.color = 'black';
}