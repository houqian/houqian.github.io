// build time:Fri Jul 12 2019 17:21:15 GMT+0800 (GMT+08:00)
if(!!$.prototype.justifiedGallery){var options={rowHeight:140,margins:4,lastRow:"justify"};$(".article-gallery").justifiedGallery(options)}$(document).ready(function(){$("#header > #nav > ul > .icon").click(function(){$("#header > #nav > ul").toggleClass("responsive")});if($(".post").length){var i=$("#menu");var e=$("#menu > #nav");var o=$("#menu-icon, #menu-icon-tablet");if($(document).width()>=1440){i.css("visibility","visible");o.addClass("active")}o.click(function(){if(i.css("visibility")==="hidden"){i.css("visibility","visible");o.addClass("active")}else{i.css("visibility","hidden");o.removeClass("active")}return false});if(i.length){$(window).on("scroll",function(){var o=i.offset().top;if(!e.is(":visible")&&o<50){e.show()}else if(e.is(":visible")&&o>100){e.hide()}if(!$("#menu-icon").is(":visible")&&o<50){$("#menu-icon-tablet").show();$("#top-icon-tablet").hide()}else if(!$("#menu-icon").is(":visible")&&o>100){$("#menu-icon-tablet").hide();$("#top-icon-tablet").show()}})}if($("#footer-post").length){var s=0;$(window).on("scroll",function(){var i=$(window).scrollTop();if(i>s){$("#footer-post").hide()}else{$("#footer-post").show()}s=i;$("#nav-footer").hide();$("#toc-footer").hide();$("#share-footer").hide();if(i<50){$("#actions-footer > #top").hide()}else if(i>100){$("#actions-footer > #top").show()}})}}});
//rebuild by neat 