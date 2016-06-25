/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

//$(".slider").bxSlider();   

    $.fn.picksSilder = function () {
        var that = this;
        
        var total_slide;
        var child;
        child=$(that).children();
        var count;
         count=child.length;
      var init = function () {
            $(that).addClass("picksSlider").attr("data-current","slide-0");
             
            
             total_slide=parseInt(count)-1;
            $.each(child,function (index,item){
               $(item).addClass("item slide-"+index); 
            });
        };
        var min_height= function (){
            $(that).wrap("<div class='Slider_container'></div>");
            debugger;
             var min=0;
             var current;
            $.each(child,function (){
              
               current=$(this).height();
               if(min<current)
               {
                   min=current;
               }
            });
            min=parseInt(min)+15;
            $(that).parent().css("min-height",min);
        };
                var current_slide=function (){
                 var current=   $(that).attr("data-current");
                 return current;
                };
                
        var show=function (){
            $(that).find(".item").fadeOut(1000);
            var active=current_slide();
            $(that).find("."+active).delay(1100).fadeIn();
        };
        var next=function (){
            var current=current_slide();
           var next=current.toString().replace("slide-","");
           if(next>=total_slide)
           {
               $(that).attr("data-current","slide-0");
               show();
           }
           else
           {
               next=parseInt(next)+1;
               next="slide-"+next;
               $(that).attr("data-current",next);
               show();
               
           }
        };
        
        init();
        min_height();
        show();
        $(".next").click(function (){
           next(); 
        });
        $(".prev").click(function (){
           prev(); 
        });
    };
    $(".slider").picksSilder();
});
