// build time:Fri Jun 21 2019 19:54:09 GMT+0800 (GMT+08:00)
$(document).ready(function(){function t(){var t=$("#footer").attr("position")?$(".container").height()+$("#footer").outerHeight(true):$(".container").height();if(t<window.innerHeight)$("#footer").css({position:"fixed",bottom:0,left:0,right:0}).attr("position","fixed");else $("#footer").removeAttr("style position")}t();$(window).on("resize scroll",t)});
//rebuild by neat 