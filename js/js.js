/**
 * Created by Administrator on 2017/4/17.
 */
$(function(){
    $(".select").mouseover(function(){
        $(".cities").show();
    })
    $(".select").mouseleave(function(){
        $(".cities").hide();
    })
    var name = /^[\u4E00-\u9FA5]+$/;//检测是否由纯中文组成
   $(".input").on("change",function(){
       if(!name.test(val)){
           $(".judge").html("&#xe602;");
           $(".judge").css({"color":'red',"font-family":'iconfont'});
       }else{
           $(".judge").html("&#xe665;");
           $(".judge").css({"color":'green',"font-family":'iconfont'});
       }
   })


    $(".select1").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '区属'){
            $("#check").html("&#xe602;");
            $("#check").css("color","red");
        }else{
            $("#check").html("&#xe665;");
            $("#check").css("color","green");
        }
    })
    $(".select2").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '板块'){
            $("#check").html("&#xe602;");
            $("#check").css("color","red");
        }else{
            $("#check").html("&#xe665;");
            $("#check").css("color","green");
        }
    })

    $(".bedroom").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '选择卧室内容'){
            $("#check1").html("&#xe602;");
            $("#check1").css("color","red");
        }else{
            $("#check1").html("&#xe665;");
            $("#check1").css("color","green");
        }
    })
    $(".condition").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '选择限制条件'){
            $("#check1").html("&#xe602;");
            $("#check1").css("color","red");
        }else{
            $("#check1").html("&#xe665;");
            $("#check1").css("color","green");
        }
    })

    var n = /^[0-9]$/;//判断是否由数字组成
    var val = $(".text-1").val();
    $(".pro").on("change",function(){
        val = $(".text-1").val();
        if(!n.test(val)){
            $(".num").html("&#xe602;");
            $(".num").css({"color":'red',"font-family":'iconfont'});
        }else{
            $(".num").html("&#xe665;");
            $(".num").css({"color":'green',"font-family":'iconfont'});
        }
    })
    $(".money").on("change",function(){
        val = $(".text_1").val();
        if(!n.test(val)){
            $(".nb").html("&#xe602;");
            $(".nb").css({"color":'red',"font-family":'iconfont'});
        }else{
            console.log(1);
            $(".nb").html("&#xe665;");
            $(".nb").css({"color":'green',"font-family":'iconfont'});
        }
    })


    var zz =/^1[34578]\d{9}$/;//检测手机号码
    var num = '';
    $(".import").change(function(){
        num = $(".import").val();
        if(num == ''){
            $(".alter").html("手机号码不为空！");
            $(".alter").css("color","red");
        }else if(!zz.test(num)){
            $(".alter").html("格式错误！");
            $(".alter").css("color","red");
        }else {
            $(".alter").html("&#xe665;");
            $(".alter").css({"color":'green',"font-family":'iconfont'});
        }
    })

    $(".fuzzy").on("change", function(){
        var val = $(".name").val();
        $(".fuzzy").text(val);
    })

})