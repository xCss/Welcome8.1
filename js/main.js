var TIPS = ['你好','我们正在为你进行相关设置',['正在获取关键更新','请不要关闭电脑'],['这可能需要一点时间','请不要关闭电脑'],'马上回来','更新完成','现在，我们将设置你的应用',['你可以从应用商店获取新应用','正在安装应用'],['正在处理一些事情','正在安装应用'],['正在准备你的应用','请不要关闭电脑'],['准备工作马上就绪','请不要关闭电脑'],['尽情使用吧','Author:@Niineo<br/>项目地址:https://github.com/niineo/WelcomeToWindows8.1']],
    isTrue = true,
    i = 0,
    timer = null;

window.onload = function(){
    var i = 0,
        text = $('.text'),
        rgb = [0,0,0];
    alpha(text,TIPS[i],true,2000,2500);
    setTimeout(function(){
        timer = setInterval(function(){
            rgb = color(rgb);
            $('.main').style.backgroundColor = "rgb("+rgb.join(',')+")";
        },20);
    },17500);


    document.addEventListener('click',function(){
        var form = document.createElement('form');
        form.action = "https://github.com/niineo/WelcomeToWindows8.1";
        form.method = "get";
        form.target = "_blank";
        form.submit();
    },false);
}





/**
 * [$ 获取目标元素]
 * @param  {[element]} selector [description]
 * @return {[element]}          [description]
 */
function $(selector){
    return document.querySelector(selector);
}
/**
 * [alpha 元素渐显渐隐动画]
 * @param  {[element]}  target  [目标元素]
 * @param  {[Text]}     text    [显示文本]
 * @param  {[boolean]}  fade    [渐显/渐隐:true/false]
 * @param  {[Number]}   consume [耗时(ms)]
 * @param  {[Number]}   delay   [延时进行下一步(ms)]
 * @return {[null]}             []
 */
function alpha(target,text,fade,consume,delay,callback){
    var ie = (window.ActiveXObject) ? true : false,
        n  = fade ? 0 : 1;
    if(i == TIPS.length) {
        clearInterval(timer);
        return;
    }
    if(text instanceof Array){
        target.innerHTML = text[0];
        $('.desc').innerHTML = text[1];
    }else target.innerHTML = text;
    var time = setInterval(function(){
        if(fade){
            n += 0.01;
            ie && (target.style.filter='Alpha(opacity:'+ n*100 +')') || (target.style.opacity = n);
            if(n >= 1){
                clearInterval(time);
                //callback && callback();
                isTrue = false;
                setTimeout(function(){
                    alpha(target,TIPS[i++],isTrue,consume,delay,callback);
                },delay);
            }
        }else {
            n -= 0.01;
            ie && (target.style.filter='Alpha(opacity:'+ n*100 +')') || (target.style.opacity = n);
            if(n <= 0) {
                clearInterval(time);
                //callback && callback();
                isTrue = true;
                setTimeout(function(){
                    alpha(target,TIPS[i],isTrue,consume,delay,callback);
                },delay);
            }
        }
    },consume/100);
}    


/**
 * 颜色平滑过渡算法
 * @param  {[Array]} rgb [颜色数组]
 * @return {[Array]}     [颜色数组]
 */
function color(rgb){
    // var r = rgb[0],
    //     g = rgb[1],
    //     b = rgb[2];
    // if(r < 255 && g == 0 && b == 0 ){
    //     rgb[0] = ++r;
    // }else if(r == 255 && g < 200 && b == 0){
    //     rgb[1] = ++g;
    // }else if(r > 0 && g == 200 && b == 0){
    //     rgb[0] = --r;
    // }else if(r == 0 && g == 200 && b < 255){
    //     rgb[2] = ++b;
    // }else if(r == 0 && g > 0 && b == 255){
    //     rgb[1] = --g;
    // }else if(r < 255 && g == 0 && b == 255){
    //     rgb[0] = ++r;
    // }else if(r == 255 && g == 0 && b > 0){
    //     rgb[2] = --b;
    // }
    
    ((rgb[0] < 255 && rgb[1] == 0 && rgb[2] == 0) && (rgb[0] = ++rgb[0])) || 
    ((rgb[0] == 255 && rgb[1] < 200 && rgb[2] == 0) && (rgb[1] = ++rgb[1])) ||
    ((rgb[0] > 0 && rgb[1] == 200 && rgb[2] == 0) && (rgb[0] = --rgb[0])) ||
    ((rgb[0] == 0 && rgb[1] == 200 && rgb[2] < 255) && (rgb[2] = ++rgb[2])) ||
    ((rgb[0] == 0 && rgb[1] > 0 && rgb[2] == 255) && (rgb[1] = --rgb[1])) ||
    ((rgb[0] < 255 && rgb[1] == 0 && rgb[2] == 255) && (rgb[0] = ++rgb[0])) || 
    ((rgb[0] == 255 && rgb[1] == 0 && rgb[2] > 0) && (rgb[2] = --rgb[2]));
    return rgb;
};



