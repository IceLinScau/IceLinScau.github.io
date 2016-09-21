/**
 * Created by asus on 2016/8/16.
 */
$(document).ready( function  (){

    var $school_experience= $('.school_experience ');
    var $cover=$('.cover');
    function addActive(obj){
        $(obj).parent().addClass('active').siblings().removeClass('active').children('.main_content').show();
    };
    function showPlace($obj){
        var height=$(window).height();
        var width=$(window).width();
        $obj.css("width",width);
        $obj.css("height",height);

    }
    $('.home').click(function (){
        $('._close').trigger('click');
    });
    $('.study').click(function (){
        $('._close').trigger('click');
    })
       /*学校经历点击事件*/
    $('.school').click(function (){
        $('#experience').slideDown('15000');
               $cover.show();
        showPlace($cover);
        $('#fullPage').hide().setAllowScrolling();


    });
    $school_experience.find('.check').click(function (){
            addActive(this);
    });
    $school_experience.find('.pic').mouseover(function (){
                         addActive(this);
    });
    $('._close').click(function (){
        $('#experience').hide();
        $cover.hide();
        $('#fullPage').show();

    });
    $('.small_pic_box img').click(function () {
                var src=this.getAttribute('src');
        var target=document.getElementById('target');
          target.setAttribute('src',src);
        $('.small_pic_box >li>img').removeClass('border_orange');
        $(this).addClass('border_orange');


    });
    $('.java').mouseover(function (){
        $('.det').hide();
        $(this).siblings('.det').show();
        $('.triangle').addClass('rotate');
        $(this).siblings('.triangle').removeClass('rotate');


    }).mouseout(function (){
        $(this).siblings('.det').hide();
        $('.triangle').removeClass('rotate');
    })

    /*fullPage滑动*/

        $('#fullPage').fullpage(
            {
                anchors:['page1','page2','page3','page4','page5'],
                verticalCenter:false,
                resize:false,
                scrollingSpeed:700,
                css3:true,
                navigation:true,
                navigationPosition:"right",
                slidesNavigation:true,
                slidesNavPosition:'bottom',
                controlArrowColor:'orange',
                navigationTooltips:['首页','关于我','专业技能','学习与积累','联系我'],
                afterRender:function(){
                    $('.evaluate p').css("top","2000px");
                    $('.ar-left').show();
                    $('.ar-right').show();
                    $('.intro_3').css({' bottom':'-30px',' left':'42%'});


                },
                afterLoad:function (link,index){
                    switch (index){
                        case 1:
                            $('.img_box').animate({top:'0'});
                            $('.intro_1').animate({left:"630px"},800,function (){
                                $('.intro_2').animate({left:"630px"},800,function(){
                                    $('.intro_3').animate({bottom:"198px"},800,function (){
                                        $('.intro_4').animate({bottom:"170px"},800,function (){
                                            $('.bt').animate({width:"800px",left:"0",right:"0"},800)
                                        })
                                    })
                                })
                            });
                            break;
                        case 2:
                            $('.two h1').animate({top:"70px"},800, function () {
                                  $('.about').animate({width:"200px",top:"120px"},1200,function(){
                                        $('.info_pic').addClass('img_change');
                                              $('.evaluate p').eq(0).animate({top:"0"},800,function(){
                                                  $('.evaluate p').eq(1).animate({top:"0"},800,function(){
                                                      $('.evaluate p').eq(2).animate({top:"0"},800,function(){

                                                      })
                                                  })
                                              })

                                  });
                            })
                            break;
                        case 3:
                            $('.three h1').animate({top:"130px"},800, function (){
                                $('.about').animate({width:"200px",top:"180px"},1200,function(){
                                    $('.info_pic').addClass('img_change');
                                    $('.evaluate p').eq(0).animate({top:"0"},800,function(){
                                        $('.evaluate p').eq(1).animate({top:"0"},800,function(){
                                            $('.evaluate p').eq(2).animate({top:"0"},800,function(){

                                            })
                                        })
                                    })
                                })
                            })
                            break;
                        case 4:
                            $('.small_pic_box li').eq(0).show(800,function(){
                                $('.small_pic_box li').eq(1).show(800,function(){
                                    $('.small_pic_box li').eq(2).show(800,function(){
                                        $('.small_pic_box li').eq(3).show(800, function () {
                                            $('.big_pic').show();
                                        })
                                    })
                                })
                            })
                            break;
                        case 5:
                            $('.six h1').animate({top:"190px"},800, function (){
                                $('.about').animate({width:"200px",top:"240px"},1200,function(){
                                        $(".title_1 ").slideDown();

                                })
                            })
                    }
                },
                onLeave:function(){
                    $('.intro_1').css("left","-400px");
                    $('.bt').css("width","0");
                    $('.img_box').css("top","-400px");
                    $('intro_2').css("left","2000px");
                    $('.two h1').css("top","0");
                    $('.about').css("width","0");
                    $('.info_pic').removeClass('img_change');
                    $(".title_1").hide();
                    $('.evaluate .p3').css("top","800px");
                    $('.evaluate .p4').css("top","800px");
                    $('.evaluate .p5').css("top","800px");
                    $('.three h1').css("top","0");
                    $('.small_pic_box li').hide();
                    $('.big_pic').hide();
                    $('.six h1').css('top','0')



                }

            })





} )