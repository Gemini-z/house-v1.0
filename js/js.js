/**
 * Created by Administrator on 2017/4/17.
 */
$(function(){
    //南京下拉显示其他城市
    $(".select").mouseover(function(){
        $(".cities").show();
    });
    $(".cities").mouseleave(function(){
        $(".cities").hide();
    })

    //模糊查询
    json = {
        a:"弓箭坊小区",
        b:"弓箭坊40号",
        c:"弓箭坊小区二手房",
        d:"弓箭坊社区",
    }

    $(".plot").on("keyup",function(){
        var val = $(".plot").val()
        if(val == '弓'){
            $(".query").html("");
            $(".query").show().append('<p style="font-size:14px">'+json.a+'</p>').append('<p style="font-size:14px">'+json.b+'</p>')
                .append('<p style="font-size:14px">'+json.c+'</p>').append('<p style="font-size:14px">'+json.d+'</p>')
        }
    })

    $(".plot").on("click",function(){
        $(".query").html("");
        $(".query").show().append('<p style="font-size:14px">'+json.a+'</p>').append('<p style="font-size:14px">'+json.b+'</p>')
            .append('<p style="font-size:14px">'+json.c+'</p>').append('<p style="font-size:14px">'+json.d+'</p>')
    })
    $(".query").on("click",function(){
        var p = $(".query p").text();
        $(".plot").text(p);
        $(".query").hide();
    })



    //验证地图
    $(".find").on("click",function(){
        $(".map").show();
    })
    $(".map-1").on("click",function(){
        $(".map").hide();
    });



    //验证小区名字
    var name = /^[\u4E00-\u9FA5]+$/;//检测是否由纯中文组成
    var val;
   $(".plot").on("change",function(){
       val = $(this).val();
       if(!name.test(val)){
           $(".judge").html("&#xe602;");
           $(".judge").css({"color":'red',"font-family":'iconfont'}).addClass("h");
       }else{
           $(".judge").html("&#xe665;");
           $(".judge").css({"color":'green',"font-family":'iconfont'}).removeClass("h");
       }
   })

    //验证区属板块
    $(".select1").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '区属'){
            $("#check2").html("&#xe602;");
            $("#check2").css("color","red").addClass("h");
        }else{
            $("#check2").html("&#xe665;");
            $("#check2").css("color","green").removeClass("h");
        }
    })
    $(".select2").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '板块'){
            $("#check").html("&#xe602;");
            $("#check").css("color","red").addClass("h");
        }else{
            $("#check").html("&#xe665;");
            $("#check").css("color","green").removeClass("h");
        }
    })

    //验证户型
    var house = /^[0-9]+$/; //只能输入数字
    var val;

    $(".input1").on("input change",function(){
        val = $(this).val();
        if(!house.test(val)){
            $("#r1").html("&#xe602;");
            $("#r1").css("color","red").addClass("h");
        }else{
            $("#r1").html("&#xe665;");
            $("#r1").css("color","green").removeClass(h);
        }
    });
    $(".input2").on("input change",function(){
        val = $(this).val();
        if(!house.test(val)){
            $("#r2").html("&#xe602;");
            $("#r2").css("color","red").addClass("h");
        }else{
            $("#r2").html("&#xe665;");
            $("#r2").css("color","green").removeClass(h);
        }
    });
    $(".input3").on("input change",function(){
        val = $(this).val();
        if(!house.test(val)){
            $("#r3").html("&#xe602;");
            $("#r3").css("color","red").addClass("h");
        }else{
            $("#r3").html("&#xe665;");
            $("#r3").css("color","green").removeClass(h);
        }
    });
    $(".input4").on("input change",function(){
        val = $(this).val();
        if(!house.test(val)){
            $("#r4").html("&#xe602;");
            $("#r4").css("color","red").addClass("h");
        }else{
            $("#r4").html("&#xe665;");
            $("#r4").css("color","green").removeClass(h);
        }
    });
    $(".input1,.input2,.input3,.input4").on("input blur",function(){
        var val1 = $(".input1").val();
        var val2 = $(".input2").val();
        var val3 = $(".input3").val();
        var val4 = $(".input4").val();
        if(val1 == 0 && val2 == 0 && val3 == 0 && val4 == 0 ) {
            $("#r5").html("&#xe602;");
            $("#r5").css("color", "red").addClass("h");
        }else{
            $("#r5").html("&#xe665;");
            $("#r5").css("color","green").removeClass(h);
        }
    })



    //验证出租形式
    $(".bedroom").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '选择卧室内容'){
            $("#check3").html("&#xe602;");
            $("#check3").css("color","red").addClass("h");
        }else{
            $("#check3").html("&#xe665;");
            $("#check3").css("color","green").removeClass(h);
        }
    });
    $(".condition").change(function(){
        var find = $(this).find('option:selected');
        if($(find).text() === '选择限制条件'){
            $("#check1").html("&#xe602;");
            $("#check1").css("color","red").addClass("h");
        }else{
            $("#check1").html("&#xe665;");
            $("#check1").css("color","green").removeClass(h);
        }
    });


    //验证面积
    var n = /^[0-9]{1,5}$/;//判断是否由数字组成
    var val = $(".text-1").val();
    $(".pro").on("change",function(){
        val = $(".text-1").val();
        if(!n.test(val)){
            $(".num").html("&#xe602;");
            $(".num").css({"color":'red',"font-family":'iconfont'}).addClass("h");
        }else{
            $(".num").html("&#xe665;");
            $(".num").css({"color":'green',"font-family":'iconfont'}).removeClass("h");
        }
    });
    //验证租金
    $(".money").on("change",function(){
        val = $(".text_1").val();
        if(!n.test(val)){
            $(".nb").html("&#xe602;");
            $(".nb").css({"color":'red',"font-family":'iconfont'}).addClass("h");
        }else{
            $(".nb").html("&#xe665;");
            $(".nb").css({"color":'green',"font-family":'iconfont'}).removeClass(h);
        }
    });

    //验证手机号码
    var zz =/^1[34578]\d{9}$/;//检测手机号码
    var num = '';
    $(".import").change(function(){
        num = $(".import").val();
        if(num == ''){
            $(".alter").html("手机号码不为空！");
            $(".alter").css("color","red").addClass("h");
        }else if(!zz.test(num)){
            $(".alter").html("格式错误！");
            $(".alter").css("color","red").addClass("h");
        }else {
            $(".alter").html("&#xe665;");
            $(".alter").css({"color":'green',"font-family":'iconfont'}).removeClass(h);
        }
    });


    //验证付款方式
    $(".box").on("click",function(){
        $(".c-box").attr("checked",false);
    });
    $(".c-box").on("click",function(){
        $(".box").attr("checked",false);
    });


    //图片显示和隐藏
    $(".add").on("click",function(){
        $(".img").slideDown(2000);
        $(".add").hide();
    });
    $(".img-1").on("click",function(){
        $(".img").slideUp(2000);
        $(".add").show();
    })

    //验证综合信息
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    var g;
    var h;
    var j;
    var k;
    var l;
    var i;
    $(window).on("change",function(){
         a = $(".plot").val();
         b = $(".select1").find("option:selected").text();
         c = $(".select2").find("option:selected").text();
         d = $(".input1").val();
         e = $(".input2").val();
         f = $(".input3").val();
         g = $(".input4").val();
         h = $(".bedroom").find("option:selected").text();
         j = $(".condition").find("option:selected").text();
         k = $(".text-1").val();
         l = $(".text_1").val();
         i = $(".import").val();
        if($("#font1").attr("checked")){
            var m = "整租";
        }else{
            m = "";
        };
        if($("#font2").attr("checked")){
            var n = "合租";
        }else{
            n = "";
        };
        if($(".box:eq(0)").attr("checked")){
            var w = "月付";
        }else{
            w = "";
        }
        if($(".box:eq(1)").attr("checked")){
            var r = "季付";
        }else{
            r = "";
        }
        if($(".box:eq(2)").attr("checked")){
            var q = "半年付";
        }else{
            q = "";
        }
        if($(".box:eq(3)").attr("checked")){
            var t = "年付";
        }else{
            t = "";
        }
        if($(".c-box").attr("checked")){
            var x = "都可以";
        }else {
            x = "";
        }
        $(".fuzzy").html(
            '小区名称：'+a+'<br>'
            +'区属板块：'+b+c+'<br>'
            +'户型：'+d+"室"+e+"厅"+f+"卫"+g+"阳台"+'<br>'
            +'出租形式：'+m+n+h+j+'<br>'
            +'面积：'+k+'<br>'
            +'租金：'+l+'<br>'
            +'手机号：'+i+'<br>'
            +'付款方式：'+w +r + q+ t+x+'<br>'
        );

        $(".refer").bind("click",function(){
            if($(".judge").hasClass("h")||$("#check2").hasClass("h")||$("#check").hasClass("h")||$("#r1").hasClass("h")
                ||$("#r2").hasClass("h")||$("#r3").hasClass("h")||$("#r4").hasClass("h")||$("#r5").hasClass("h")
                ||$("#check3").hasClass("h")||$("#check1").hasClass("h")||$(".num").hasClass("h")||$(".nb").hasClass("h")
                ||$(".alter").hasClass("h")){
                $(".refer").val("提交失败");
            }else{
                $(".refer").val("提交成功");
            }
        })
    })








})