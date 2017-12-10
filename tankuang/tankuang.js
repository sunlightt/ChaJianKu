

create_alertcomment({

    h_title:'警告提示框',
    alert_content:'警告提示内容'
},function(){
    alert('警告提示内容');
});
function create_alertcomment(option,callback){
    var box=null , h_title=null , alert_content=null, confirm_btn=null, cancel_btn=null, btn_wrap=null;
    if(!box || !h_title || !alert_content || !confirm_btn || !cancel_btn){
        box=document.createElement('div');
        h_title=document.createElement('h2');
        alert_content=document.createElement('p');
        btn_wrap=document.createElement('p');
        confirm_btn=document.createElement('span');
        cancel_btn=document.createElement('span');
        box.style.cssText='width:90%;min-height:100px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;background:#fff;border-radius:10px;padding:20px 0;';
        h_title.style.cssText='font:16px/22px "微软雅黑";color:"#333";text-align:center;';
        alert_content.style.cssText='font:14px/18px "微软雅黑";color:"#333";text-align:center;';
        btn_wrap.style.cssText='display:flex;flex-direction:row;justify-content:space-between;padding:14px;';
        confirm_btn.style.cssText='display:inlin-block;text-align:center;width:104px;height:46px;font:16px/46px "微软雅黑";color:#fff;background:#ff9800;border-radius:12px;';
        confirm_btn.innerHTML="确定";
        cancel_btn.style.cssText='display:inlin-block;text-align:center;width:104px;height:46px;font:16px/46px "微软雅黑";color:#fff;background:#ff9800;border-radius:12px;';
        cancel_btn.innerHTML="取消";
        box.appendChild(h_title);
        box.appendChild(alert_content);
        box.appendChild(btn_wrap);
        btn_wrap.appendChild(confirm_btn);
        btn_wrap.appendChild(cancel_btn);

        var body=document.getElementsByTagName('body')[0];
        body.appendChild(box);
    }
    if(option){

        h_title.innerHTML=option.h_title;
        alert_content.innerHTML=option.alert_content;

    }else{
        h_title.innerHTML='提示！';
        alert_content.innerHTML= '提示内容';
    }
    //处理事件
    confirm_btn.onclick=function(){
        //  点击确定的回调
        if(callback){
            callback();
            box.style.display="none";
        }
    }
    cancel_btn.onclick=function(){
        box.style.display="none";
    }
}