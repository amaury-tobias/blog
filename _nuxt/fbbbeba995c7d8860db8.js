(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{187:function(t,e,n){},188:function(t,e,n){},197:function(t,e,n){"use strict";var r=n(187);n.n(r).a},198:function(t,e,n){var map={"./2018-10-18-Hello-World.md":[203,9],"./2018-10-21-Update.md":[204,10],"./2018-10-31-Dia-de-Muertos.md":[205,11],"./2018-12-04-Frameworks-Everywhere.md":[206,12],"./2019-01-25-GGJ19.md":[207,13],"./2019-06-07-Actualizacion.md":[208,14],"./2019-08-28-Actualizacion-2.0.md":[209,15]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=198,t.exports=r},199:function(t,e,n){"use strict";var r=n(188);n.n(r).a},211:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(192),c=n.n(o),l=n(193),d=n.n(l),h=n(194),m=n.n(h),f=n(195),v=n.n(f);n(196);c.a.registerLanguage("javascript",d.a),c.a.registerLanguage("css",m.a),c.a.registerLanguage("xml",v.a);var x={props:["renderFunc","staticRenderFuncs"],created:function(){this.templateRender=this.renderFunc,this.$options.staticRenderFns=this.staticRenderFuncs},render:function(t){return this.templateRender?this.templateRender():t("div","error")}},w=(n(197),n(12)),_=Object(w.a)(x,void 0,void 0,!1,null,null,null).exports,C=r.a.extend(_),F={name:"Slug",asyncData:function(t){return{slug:t.params.slug}},data:function(){return{title:"",date:null,episodeContent:null}},created:function(){var t=this;n(198)("./".concat(this.slug,".md")).then((function(e){t.title=e.attributes.title;var n=new Date(e.attributes.date);t.date=n.toLocaleString("es",{year:"numeric",month:"short",day:"numeric"});var r=new C({propsData:{renderFunc:e.vue.render,staticRenderFuncs:e.vue.staticRenderFns}});r.$mount(),t.$refs.container.appendChild(r.$el)}))},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"}]}}},R=(n(199),Object(w.a)(F,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animated fadeIn min-h-full w-full font-light py-24"},[e("div",{staticClass:"container mx-auto px-12 md_px-32 lg_px-40"},[e("h3",{staticClass:"text-sm md_text-base"},[this._v(this._s(this.date))]),e("h1",{staticClass:"break-words text-2xl md_text-4xl"},[this._v(this._s(this.title))]),e("section",[e("div",{staticClass:"container text-left content"},[e("div",{ref:"container"}),e("div",{staticClass:"relative pt-8"},[e("n-link",{staticClass:"absolute right-0 bottom-0",attrs:{to:"/blog"}},[this._v("ATRÁS")])],1)])])])])}),[],!1,null,null,null));e.default=R.exports}}]);