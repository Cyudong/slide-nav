KISSY.add("slide-nav/article/article",["node","slide-nav/article/article-view","kg/xtemplate/3.3.3/runtime"],function(e,t,i,l){var a=t("node").all,n=t("slide-nav/article/article-view"),r=t("kg/xtemplate/3.3.3/runtime");l.exports={init:function(){e.log("article init");var t=new r(n).render({title:"this is article",content:"render by kg/xtemplate"});a("article").html(t)}}});