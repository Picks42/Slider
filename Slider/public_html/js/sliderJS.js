/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$.fn.sliderM = function () {
    var that = this;
    if ($(that).children().length <= 0) {
        return;
    }
    $(that).addClass("sliderM-parent");
    $(that).attr("data-sliderM-current","#sliderM-0");
    var all_li = $(that).children();
    var total_child = all_li.length;
    $.each(all_li,function(index,item){
        $(item).attr("id","sliderM-"+index);
        $(item).addClass("item");
    });
    var current_id = $(that).attr("data-sliderM-current");
    $(current_id).addClass('active');
    var prev = $("<div></div>").addClass('sliderM-prev');
    var next = $("<div></div>").addClass('sliderM-next');
    $(that).append(prev);
    $(that).append(next);
    
    prev.click(function(event){
        //PREV IMAGE;
        current_id = $(that).attr("data-sliderM-current");
        var prev_No =  current_id.toString().replace("#sliderM-",'');
        if(parseInt(prev_No) <=0){
            prev_No = total_child-1;
        }
        else{
            prev_No = parseInt(prev_No) - 1;
        }
        var prev_id = "#sliderM-"+prev_No;
        $(that).attr("data-sliderM-current",prev_id);
        $(current_id).removeClass("active");
        $(prev_id).addClass("active");
    });
    next.click(function(event){
        current_id = $(that).attr("data-sliderM-current");
        var next_No =  current_id.toString().replace("#sliderM-",'');
        if(parseInt(next_No) >=total_child-1){
            next_No = 0;
        }
        else{
            next_No = parseInt(next_No) + 1;
        }
        var next_id = "#sliderM-"+next_No;
        $(that).attr("data-sliderM-current",next_id);
        $(current_id).removeClass("active");
        $(next_id).addClass("active");
    });
    
};