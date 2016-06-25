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
        child = $(that).children();
        var count;
        count = child.length;
        var parent;
        var btn_next;
        var btn_prev;
        var init = function () {
            $(that).addClass("picksSlider").attr("data-current", "slide-0");


            total_slide = parseInt(count) - 1;
            $.each(child, function (index, item) {
                $(item).addClass("item slide-" + index);
            });
        };
        var min_height = function () {
            $(that).wrap("<div class='Slider_container'></div>");
            parent = $(that).parent();

            var min = 0;
            var current;
            $.each(child, function () {

                current = $(this).height();
                if (min < current)
                {
                    min = current;
                }
            });
            min = parseInt(min) + 15;
            $(that).parent().css("min-height", min);
        };
        var buttons = function () {
            $(parent).append("<div class='px-prev'></div>");
            $(parent).append("<div class='px-next'></div>");
            $(parent).find('.px-next').html("<button>Next</button>");
            $(parent).find('.px-prev').html("<button>Previous</button>");
            btn_next = $(parent).find(".px-next button");
            btn_prev = $(parent).find(".px-prev button");
        };
        var current_slide = function () {
            var current = $(that).attr("data-current");
            return current;
        };

        var show = function () {
            $(that).find(".item").fadeOut(500);
            var active = current_slide();
            $(that).find("." + active).delay(1000).fadeIn("slow");
            setTimeout(function () {
                $(btn_next).attr("disabled", false);
                $(btn_prev).attr("disabled", false);
            }, 1200);

        };
        var next = function () {
            var current = current_slide();
            var next = current.toString().replace("slide-", "");
            if (next >= total_slide)
            {
                $(that).attr("data-current", "slide-0");
                show();
            } else
            {
                next = parseInt(next) + 1;
                next = "slide-" + next;
                $(that).attr("data-current", next);
                show();

            }

        };
        var prev = function () {
            debugger;
            var current = current_slide();
            var prev = current.toString().replace("slide-", "");
            if (prev <= 0)
            {
                $(that).attr("data-current", "slide-" + total_slide);
                show();
            } else
            {
                prev = parseInt(prev) - 1;
                prev = "slide-" + prev;
                $(that).attr("data-current", prev);
                show();

            }
        };

        init();
        min_height();
        buttons();
        show();
        $(btn_next).click(function () {
            $(this).attr("disabled", true);
            next();
        });
        $(btn_prev).click(function () {
            $(this).attr("disabled", true);
            prev();
        });


    };
    $(".slider").picksSilder();
});
