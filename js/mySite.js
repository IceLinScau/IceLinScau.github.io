/**
 * Created by asus on 2016/8/16.
 */
$(document).ready( function  (){
    var $school_experience= $('.school_experience ');
    function addActive(obj){
        $(obj).parent().addClass('active').siblings().removeClass('active').children('.main_content').show();
    }
       /*学校经历点击事件*/
    $('.school').click(function (){
        $('#experience').slideDown('15000');
    });
    $school_experience.find('.check').click(function (){
            addActive(this);
    });
    $school_experience.find('.pic').mouseover(function (){
                         addActive(this);
    });
    $('._close').click(function (){
        $('#experience').hide();
    });

    /*fullPage滑动*/

        $('#fullPage').fullpage(
            {
                anchors:['page1','page2','page3','page4'],
                verticalCenter:false,
                resize:false,
                scrollingSpeed:700,
                css3:true,
                navigation:true,
                navigationPosition:"left",
                navigationTooltips:['首页','关于我','专业技能','我的经历','我的作品','联系我'],
                afterRender:function(){
                    $('.evaluate p').css("top","2000px");
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
                                  $('.about').animate({width:"200px",left:"0",right:"0",top:"100px"},1200,function(){
                                      $(".two h1").after("<div class='title_1'><h2>· About me ·</h2></div>");
                                      $(".title_1").animate({width:"130px"},800,function(){
                                          $(".title_1 h2").slideDown(900, function () {
                                              $('.info_pic').addClass('img_change');
                                              $('.evaluate p').eq(0).animate({top:"0"},800,function(){
                                                  $('.evaluate p').eq(1).animate({top:"0"},800,function(){
                                                      $('.evaluate p').eq(2).animate({top:"0"},800,function(){

                                                      })
                                                  })
                                              })

                                          });
                                      });
                                  });
                            })
                            break;
                        case 3:
                            $('.three h1').animate({top:"130px"},800, function (){
                                $('.about').animate({width:"200px",left:"0",right:"0",top:"160px"},1200,function(){
                                    $(".three h1").after("<div class='title_1'><h2>· Skill ·</h2></div>");
                                    $(".title_1").animate({width:"130px"},800,function(){
                                        $(".title_1 h2").slideDown(900, function () {
                                            $('.java').mouseover(function (){
                                             $('.det').hide();
                                             $(this).siblings('.det').show();
                                             $('.triangle').addClass('rotate');
                                             $(this).siblings('.triangle').removeClass('rotate');


                                             }).mouseout(function (){
                                                $(this).siblings('.det').hide();
                                                $('.triangle').removeClass('rotate');
                                            })

                                        })
                                    })
                                })
                            })
                            break;
                    }
                },
                onLeave:function(){
                    $('.intro_1').css("left","-400px");
                    $('.intro_3').css("bottom","-300px");
                    $('.intro_4').css("bottom","-200px");
                    $('.bt').css("width","0");
                    $('.img_box').css("top","-400px");
                    $('intro_2').css("left","2000px");
                    $('.two h1').css("top","0");
                    $('.about').css("width","0");
                    $('.info_pic').removeClass('img_change');
                    $(".title_1").hide();
                    $('.evaluate p').css("top","800px");
                    $('.three h1').css("top","0");



                }

            })





} )