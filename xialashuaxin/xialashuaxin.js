

down_refresh({
    'obj': '.parent',
    'load_img':'dist/img/loading.gif',
    'load_inf':'下拉加载'
},function(){
    console.log('下拉加载');
});
function down_refresh(option,callback){

    var onoff=true;

    if(!option){
        return;
    }
    var box=null , img=null , load_text=null ;

    if(!box || !img || !load_text){

        box=document.createElement('div');
        img=document.createElement('img');
        load_text=document.createElement('p');
        box.style.cssText="width:100%;position:absolute;display:none;top:0;left:0m;transform:translateY(-100%);";
        img.style.cssText="display:block;width:50px;height:50px;margin:0 auto;";
        $(img).attr('src',option.load_img);
        load_text.style.cssText="padding:0 20px;font:20px/40px '微软雅黑';color:#333;text-align:center;";
        $(load_text).html(option.load_inf);
        box.append(img);
        box.append(load_text);
        $(option.obj).css({'position':'relative'});
        $(box).insertBefore($(option.obj)[0].firstChild);
    }

    var   start_X=0,start_Y=0, X=0 , Y=0;

    $(option.obj)[0].addEventListener('touchstart',slide_star,false);
    $(option.obj)[0].addEventListener('touchmove',slide_move,false);
    $(option.obj)[0].addEventListener('touchend',slide_end,false);


    function slide_star(ev){
        if(!onoff){
            return;
        }
        var ev = ev || window.event;
        var touch = ev.targetTouches[0];

        start_X=touch.clientX;
        start_Y=touch.clientY;
    }

    function slide_move(ev){
        var ev = ev || window.event;
        var touch = ev.targetTouches[0];
        if(!onoff){
            return;
        }
        X=touch.clientX;
        Y=touch.clientY;
        console.log(Y);
        if((Y-start_Y)>100){
            $(option.obj).css({'transform':'translateY(100px)','transition':'.5s',});
            $(box).css({'display':'block'});
        }
    }

    function slide_end(ev){
        callback && callback();
        onoff=false;
        setTimeout(function(){
            $(option.obj).css({'transform':'translateY(0)','transition':'.5s',});
            $(box).css({'display':'none'});
            onoff=true;
        },800);
    }
}