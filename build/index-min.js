KISSY.add("slide-nav/index",["slide-nav/header/header","slide-nav/article/article"],function(e,a,t,i){var n=a("slide-nav/header/header");n.init();var r=a("slide-nav/article/article");r.init()}),KISSY.add("slide-nav/header/header",["node"],function(e,a,t,i){var n=a("node").all;i.exports={init:function(){e.log("header init"),n("header").html("this is header")}}}),KISSY.add("slide-nav/article/article",["node","slide-nav/article/article-view","kg/xtemplate/3.3.3/runtime"],function(e,a,t,i){var n=a("node").all,r=a("slide-nav/article/article-view"),l=a("kg/xtemplate/3.3.3/runtime");i.exports={init:function(){e.log("article init");var a=new l(r).render({title:"this is article",content:"render by kg/xtemplate"});n("article").html(a)}}}),KISSY.add("slide-nav/article/article-view",[],function(e,a,t,i){var n=i.exports=function(e){var a,t=this,i=t.root,n=t.buffer,r=t.scope,l=(t.runtime,t.name,t.pos),d=r.data,c=r.affix,o=i.nativeCommands,s=i.utils;s.callFn,s.callCommand,o.range,o.foreach,o.forin,o.each,o["with"],o["if"],o.set,o.include,o.parse,o.extend,o.block,o.macro,o["debugger"];n.data+="<h1>";var v=(a=c.title)!==e?a:(a=d.title)!==e?a:r.resolveLooseUp(["title"]);n=n.writeEscaped(v),n.data+="</h1>\n<p>",l.line=2;var h=(a=c.content)!==e?a:(a=d.content)!==e?a:r.resolveLooseUp(["content"]);return n=n.writeEscaped(h),n.data+="</p>",n};n.TPL_NAME=i.id||i.name});