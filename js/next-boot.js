// build time:Fri Jul 12 2019 16:52:12 GMT+0800 (GMT+08:00)
$(document).ready(function(){CONFIG.fastclick&&NexT.utils.isMobile()&&window.FastClick.attach(document.body);CONFIG.lazyload&&NexT.utils.lazyLoadPostsImages();NexT.utils.registerESCKeyEvent();CONFIG.back2top&&NexT.utils.registerBackToTop();$(".site-nav-toggle button").on("click",function(){var e=$(".site-nav");var t="site-nav-on";var i=e.hasClass(t);var o=i?"slideUp":"slideDown";var a=i?"removeClass":"addClass";e.stop()[o]("fast",function(){e[a](t)})});CONFIG.fancybox&&NexT.utils.wrapImageWithFancyBox();CONFIG.tabs&&NexT.utils.registerTabsTag();NexT.utils.embeddedVideoTransformer();CONFIG.motion.enable&&NexT.motion.integrator.add(NexT.motion.middleWares.logo).add(NexT.motion.middleWares.menu).add(NexT.motion.middleWares.postList).add(NexT.motion.middleWares.sidebar).bootstrap();function e(e){e=e||"auto";$(".site-overview, .post-toc").css("max-height",e)}function t(){var t;$(window).on("resize",function(){t&&clearTimeout(t);t=setTimeout(function(){var t=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();e(t)},0)});var i=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+i+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+i+"px)")}e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}t();function i(){$("table").not(".gist table").wrap('<div class="table-container"></div>')}i()});
//rebuild by neat 