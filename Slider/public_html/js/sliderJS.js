/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function ($) {

    $.sliderM = function (element, options) {

        var defaults = {
            isAutomatic: false,
            delayTime: 2000,
            animationDuration: 1000,
            nextImageCallBack: function () {},
            prevImageCallBack: function () {}
        };
        var that = element;
        var total_child = $(that).children().length;
        var child = $(that).children();
        that.settings = {};

        var $element = $(element),
                element = element;

        that.init = function () {
            that.settings = $.extend({}, defaults, options);
            if ($(that).children().length <= 0) {
                return;
            }
            $(that).addClass("sliderM-parent");
            $(that).attr("data-sliderM-current", "#sliderM-0");
            var all_li = $(that).children();
            var total_child = all_li.length;
            $.each(all_li, function (index, item) {
                $(item).attr("id", "sliderM-" + index);
                $(item).addClass("item");
            });
            var current_id = $(that).attr("data-sliderM-current");
            $(current_id).addClass('active');

            if (that.settings.isAutomatic) {
                setInterval(getNextImage, that.settings.delayTime);
            } else {
                var prev = $("<div></div>").addClass('sliderM-prev');
                var next = $("<div></div>").addClass('sliderM-next');
                $(that).append(prev);
                $(that).append(next);

                prev.click(function (event) {
                    getPreviousImage();
                });
                next.click(function (event) {
                    getNextImage();
                });
            }

            return that;
        };
        var getCurrentId = function () {
            return $(that).attr("data-sliderM-current");
        };
        var getPreviouseId = function () {
            var current_id = getCurrentId();
            var prev_No = current_id.toString().replace("#sliderM-", '');
            if (parseInt(prev_No) <= 0) {
                prev_No = total_child - 1;
            } else {
                prev_No = parseInt(prev_No) - 1;
            }
            return "#sliderM-" + prev_No;
        };
        var getNextId = function () {
            var current_id = getCurrentId();
            var next_No = current_id.toString().replace("#sliderM-", '');
            if (parseInt(next_No) >= total_child - 1) {
                next_No = 0;
            } else {
                next_No = parseInt(next_No) + 1;
            }
            return "#sliderM-" + next_No;
        };
        var changeImage = function (current, next) {
            $(current).removeClass("active");
            $(next).addClass('active');
        };
        var getPreviousImage = function () {
            var current_id = getCurrentId();
            var prev_id = getPreviouseId();
            $(that).attr("data-sliderM-current", prev_id);
            changeImage(current_id, prev_id);

            that.settings.prevImageCallBack.call();
        };
        var getNextImage = function () {
            var current_id = getCurrentId();
            var next_id = getNextId();
            $(that).attr("data-sliderM-current", next_id);
            changeImage(current_id, next_id);
            that.settings.nextImageCallBack.call();
        };
        that.previous = function () {
            if (that.settings.isAutomatic) {

            } else {
                getPreviousImage();
            }

        };
        that.next = function () {
            if (that.settings.isAutomatic) {

            } else {
                getNextImage();
            }
        };
        var min_height = function () {
            $(that).wrap("<div class='Slider_container'></div>");

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
        return that.init();

    };

    $.fn.sliderM = function (options) {
        return this.each(function () {
            if (typeof $(this).data('sliderM') ===  "undefined") {
                var that = new $.sliderM(this, options);
                $(this).data('sliderM', that);
            }
        });

    };

})(jQuery);
