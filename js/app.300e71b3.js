(function(e){function n(n){for(var o,c,u=n[0],i=n[1],l=n[2],p=0,s=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&s.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,u=1;u<t.length;u++){var i=t[u];0!==r[i]&&(o=!1)}o&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=i;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},1:function(e,n){},"41d0":function(e,n,t){},a7b5:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=(t("a0c3"),t("941c"),t("b912")),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App")},c=[],u=t("d4ec"),i=t("bee2"),l=t("262e"),f=t("2caf"),p=t("9ab4"),s=t("1b40"),d=t("f4bc"),b=t("4d42"),g=t("58a0"),v=t("15f5"),y=(t("41d0"),function(e){Object(l["a"])(t,e);var n=Object(f["a"])(t);function t(){return Object(u["a"])(this,t),n.apply(this,arguments)}return Object(i["a"])(t,[{key:"mounted",value:function(){g["a"].login.google.init(),g["a"].login.google.onGoogleSignInBtnLoaded((function(e){console.warn("token",e),location.href="sawaksa://external_web_google_login?token=".concat(e)}))}},{key:"jump",value:function(){location.href="sawaksa://party_square"}},{key:"render",value:function(){var e=arguments[0];return e(d["a"],{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},[e("div",{attrs:{id:"google-icon"}}),e("div",{attrs:{id:"google-login-btn"}},[Object(v["a"])("sawa تسجيل دخول")])])}}]),t}(b["a"]));y=Object(p["a"])([Object(s["a"])({})],y);var h=y,j=o["a"].extend({components:{App:h}}),O=j,w=t("2877"),m=Object(w["a"])(O,a,c,!1,null,null,null),_=m.exports,x=t("2f62");o["a"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});t("a7b5");o["a"].config.productionTip=!1,Object(r["a"])(),new o["a"]({store:k,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.300e71b3.js.map