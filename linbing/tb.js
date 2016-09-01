/**
 * Created by asus on 2016/8/11.
 */
$(document).ready(function(){
    /*header的显示与隐藏*/
    $(".header-bd li").mouseover(function(){
       $(this).addClass("menu-hover").children(".js1-same").show();
    }).mouseout(function (){
        $(this).removeClass("menu-hover").children(".js1-same").hide();

    });



    /*轮番图开始*/
    var $slide=$('.slide');
    var $pipe=$('.slide_turn');
    var imgWith=520;
    var $slide_bt=$('.slide_bt_up');
    var $prev=$('.slide_bt_up .prev');
    var $next=$('.slide_bt_up .next');
    var index=1;
    var timer=null;
    var $box=$('.slide_turn>.img_box');
    var $circle=$('.col_list a');
    var $first=$box.first();
    var $last=$box.last();
     $first.clone(true).appendTo($pipe);
    $last.clone(true).prependTo($pipe);
    var $box2=$('.slide_turn>div');
    var length=$box2.length;


    function slide( i ){
        if(i==0){

            selected($circle.eq(4)) ;

        }else if(i==length-1){
            selected($circle.eq(0)) ;

        }else{
            selected($circle.eq(i-1)) ;
        }

        $pipe.animate({left:-i*imgWith+'px'},100,function (){
            if(i==0){
                $pipe.css("left",-imgWith*(length-2)+'px');
                index=length-2;
            }else if(i==length-1){
                $pipe.css("left",-imgWith+'px');
                index=1;
            }
        })

    }
    function selected($obj){
       $circle.removeClass('circle_active');
       $obj.addClass('circle_active');

}

    $slide.mouseover(function(){
              $slide_bt.show();
         clearInterval(timer);

    }).mouseout(function (){
        $slide_bt.hide();
        setTimer();
    });
    $prev.click(function (){
          index--;
        slide(index);
    });
    $next.click(function (){
        if(!$pipe.is(':animated')){
            index++;
            slide(index);
        }

    });
    $(".col_list>li").click(function (){
         index=$(this).index()+1;
        slide(index);
    });
    function setTimer(){
        timer=setInterval(function (){
            $next.trigger("click");
        },3000)
    }
 setTimer();
    /*主轮番图结束*/
  /*左边菜单切换开始*/
    $(".shop_list >li").mouseover(function (){
        $(this).addClass('bg_color').siblings().removeClass('bg_color');
        var index=$(this).index();
        $('.shop_detail_outer').show()
            .children('div').eq(index).show().siblings().hide();




    }).mouseout(function (e){
        if(!$(e.relatedTarget).hasClass('shop_detail_outer')){
            $('.shop_detail_outer').hide();
            $(this).removeClass('bg_color');
        }
    });
    $('.shop_detail_outer').mouseleave(function (){
        $(this).hide();
    })
    /*左边菜单切换结束*/
    /*下面轮番图开始*/

    var $view=$('#slide_down');
    var $slide_down=$('.slide_bt_down');
    var $pipe1=$('.slide_down_turn ');
    var k=1;
    var $box_wrap1=$('.slide_down_turn >div');
    var $first1=$box_wrap1.first();
    var $last1=$box_wrap1.last();
    $first1.clone(true).appendTo($pipe1);
    $last1.clone(true).prependTo($pipe1);
    var $box_wrap2=$('.slide_down_turn >.img_box');
    var length1=$box_wrap2.length;
     var $prev1=$('.slide_bt_down .prev');
    var $next1=$('.slide_bt_down .next');
    var $circle1=$('.circle_down a');
    var timer1=null;
    var $count=$('.t_cat i');

    function slide1( i ){
        if(i==0){

            selected1($circle1.eq(4)) ;

        }else if(i==length-1){
            selected1($circle1.eq(0)) ;

        }else{
            selected1($circle1.eq(i-1)) ;
        }

        $pipe1.animate({left:-i*imgWith+'px'},100,function (){
            if(i==0){
                $pipe1.css("left",-imgWith*(length-2)+'px');
                k=length-2;
                $count.text(k);
            }else if(i==length-1){
                $pipe1.css("left",-imgWith+'px');
                k=1;
                $count.text(k);
            }else{
                $count.text(k);
            }
        })

    };
    function selected1($o){
        $circle1.removeClass('circle_active');
        $o.addClass('circle_active')
    }
    $view.mouseover(function (){
        $slide_down.show();
        clearInterval(timer1);
    }).mouseout(function (){
        $slide_down.hide();
        setTimer1();
    });
    $prev1.click(function () {
        if(!$pipe1.is(':animated')){
            k--;
            slide1(k);
        }
    });
    $next1.click(function () {

        if(!$pipe1.is(':animated')){
            k++;
            slide1(k);
        }

    });
    $(".circle_down>li").click(function (){
      k=$(this).index()+1;
        slide1(k);
    });
    function setTimer1(){
        timer1=setInterval(function(){
            $next1.trigger('click');
        },2600)
    };
    setTimer1();
/*下面轮番图结束*/
/*公告，规则开始*/
    $('.notice li').mouseover(function (){
        $(this).addClass('ty1').siblings().removeClass('sty1');
        $('.notice_bd').eq($(this).index()).show().siblings('.notice_bd').hide();
    }).mouseout(function (){

    })
})
