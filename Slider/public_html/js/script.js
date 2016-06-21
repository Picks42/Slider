/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

//$(".slider").bxSlider();   

    $.fn.abc = function () {
        var that=this;
        var reset = function () {
            $(that).find(".slider_li:first").addClass("active");

            $(that).find(".active").fadeIn().delay(1200).fadeOut().removeClass("active").next().addClass("active");
            re_call();
        }
        var re_call = function () {
            setInterval(function () {
                $(that).find(".active").fadeIn().delay(1200).fadeOut().removeClass("active").next().addClass("active");
                if ($(".active").next().length == 0) {
                    $(that).find(".active").removeClass(".active");
                    reset();
                }
            }, 3000);
        }

        //slider call
        if (this.length == 0)
            return this;
        // support mutltiple elements
        if (this.length > 0) {
            debugger;
            $(that).find("li").addClass("slider_li");
            reset();
        }

    };
    $(".slider").abc();


});
