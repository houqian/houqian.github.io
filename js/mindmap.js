// build time:Wed Jul 03 2019 18:08:15 GMT+0800 (GMT+08:00)
$(document).ready(function(){$(".mindmap").each(function(){MM_FUNCS.drawMindMap(this)})});var MM_FUNCS={li2jsonData:function(i){var n;var t=i.children("a:first");if(t.length!==0){n={data:{text:t.text(),hyperlink:t.attr("href")}}}else{n={data:{text:i[0].childNodes[0].nodeValue.trim()}}}i.find("> ul > li").each(function(){if(!n.hasOwnProperty("children")){n.children=[]}n.children.push(MM_FUNCS.li2jsonData($(this)))});return n},drawMindMap:function(i){var n=$(i).find(">ul:first");var t={root:{}};var a=new kityminder.Minder({renderTo:i});t.root=MM_FUNCS.li2jsonData(n.children("li:first"));a.importData("json",JSON.stringify(t));a.disable();a.execCommand("hand");$(n).hide()}};
//rebuild by neat 