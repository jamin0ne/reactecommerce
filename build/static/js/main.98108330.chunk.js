(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,r){e.exports=r(167)},154:function(e,t,r){},165:function(e,t,r){},167:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(67),i=r.n(o),c=r(41),l=(r(154),r(156),r(6)),u=r(199),s=r(200),f=r(85),h=r(197),d=r(198);function m(){return a.a.createElement("div",{style:{backgroundColor:"powderblue",backgroundSize:"cover",height:"100vh"}}," ",a.a.createElement(u.a,{placeholder:!0},a.a.createElement(s.a,{as:"h2",icon:!0,textAlign:"center"},a.a.createElement(f.a,{name:"shopping basket",circular:!0}),a.a.createElement(s.a.Content,null,"Welcome to market"))),a.a.createElement(h.a,{centered:!0},a.a.createElement(d.a,{as:c.b,to:"/Productspage",animated:!0,color:"teal"},a.a.createElement(d.a.Content,{visible:!0}," Our products "),a.a.createElement(d.a.Content,{hidden:!0},a.a.createElement(f.a,{name:"arrow right"})))))}function p(){return a.a.createElement("div",null,a.a.createElement("h2",null,"About us"),a.a.createElement("p",null,"We are steady a supplier of Afro Caribbean food items and spices. We are based in Sofia, Bulgaria. Our working hours are form Monday - Saturday 10:00 - 17:00. We deliver to all over Bulgaria but delivery to time differs depending on location, delivery within Sofia takes 0-2 business days, delivery outside Sofia takes 2-5 business days. For order confirmation, correction or cancellation please send us an email at *****@example.com with the name on the order and the order reference number and it will be updated accordingly."),a.a.createElement("div",null,"To see list of our products",a.a.createElement(d.a,{as:c.b,to:"/Productspage",color:"teal"},"Click Me")))}var v=r(124),y=r(9),E=r(14),g=r(45),b=r(168),w=r(202);function O(){O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(A){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new x(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(A){return{type:"throw",arg:A}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==t&&r.call(y,o)&&(p=y);var E=m.prototype=h.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function C(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(E),l(E,c,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var C=Object(n.createContext)({CartItems:[],TotalNumberOfCartitem:"",alert:"",MessageHandler:function(){},AddItemToCart:function(){},RemoveItemFromCart:function(){},IsItemInCart:function(){}});function P(e){var t=Object(n.useState)([]),r=Object(E.a)(t,2),o=r[0],i=r[1],c=Object(n.useState)(""),l=Object(E.a)(c,2),u=l[0],s=l[1],f={CartItems:o,TotalNumberOfCartitem:o.length,alert:u,MessageHandler:h,AddItemToCart:function(e){return d.apply(this,arguments)},RemoveItemFromCart:function(e){return m.apply(this,arguments)},IsItemInCart:p};function h(e){s(e),setTimeout(function(){s("")},3e3)}function d(){return(d=Object(y.a)(O().mark(function e(t){var r,n,a,c,l,u,s,f;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=p(t.id),n=Object(E.a)(r,2),a=n[0],c=n[1],l=o,u=0,s=0,f=0,a?(f=c,u=t.purchaseAmount+o[f].purchaseAmount,s=t.price*u):(f=o.length,u=t.purchaseAmount,s=t.price*u),l[f]={id:t.id,title:t.title,image:t.image,price:t.price,purchaseAmount:u,totalPrice:s},e.next=9,i(function(e){return[].concat(l)});case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){return(m=Object(y.a)(O().mark(function e(t){var r;return O().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.filter(function(e){return e.id!==t}),e.next=3,i(r);case 3:h("Removed from cart");case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function p(e){return[o.some(function(t){return t.id===e}),o.findIndex(function(t){return t.id===e})]}return a.a.createElement(C.Provider,{value:f},e.children)}var L=C;var x=function(e){var t=Object(n.useContext)(L),r=Object(n.useState)(1),o=Object(E.a)(r,2),i=o[0],c=o[1];function l(e,t){var r=t.children;"-"===r?c(Math.max(1,i-1)):"+"===r&&c(Math.min(5,i+1))}return a.a.createElement(h.a,{centered:!0,color:"teal"},a.a.createElement(b.a,{src:e.image,alt:e.title,size:"mini",wrapped:!0,ui:!1}),a.a.createElement(h.a.Content,null,a.a.createElement(h.a.Header,null,e.title),a.a.createElement(h.a.Meta,null,a.a.createElement("span",{className:"date"},"Price: \u043b\u0432.",e.price)),a.a.createElement(h.a.Description,null,e.short_description)),a.a.createElement(h.a.Content,{extra:!0},a.a.createElement(w.a,null,a.a.createElement(w.a.Column,{textAlign:"center"},a.a.createElement(d.a.Group,{size:"large"},a.a.createElement(d.a,{onClick:l},"-"),a.a.createElement(d.a.Or,{text:i}),a.a.createElement(d.a,{onClick:l},"+")))),a.a.createElement(w.a,null,a.a.createElement(w.a.Column,{textAlign:"center"},a.a.createElement(d.a,{onClick:function(){t.AddItemToCart({id:e.id,title:e.title,image:e.image,purchaseAmount:i,price:e.price}),t.MessageHandler("Added to cart")}},"Add to cart")))))};var _=function(e){return a.a.createElement(h.a.Group,null,e.ProductArray.map(function(e){return a.a.createElement(x,{key:e.id,id:e.id,title:e.title,image:e.image,short_description:e.short_description,price:e.price})}))},j=r(148),A=r(66),I={apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FIREBASE_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ATH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_DATABASEURL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_APPID};Object(j.a)(I);var N=Object(g.d)();Object(A.b)();function R(){R=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(x([])));y&&y!==t&&r.call(y,o)&&(p=y);var E=m.prototype=h.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(E),l(E,c,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function S(e){var t=Object(n.useState)([]),r=Object(E.a)(t,2),o=r[0],i=r[1],c=function(){var e=Object(y.a)(R().mark(function e(){var t;return R().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Object(g.c)(Object(g.b)(N,"Products"));case 3:e.sent.forEach(function(e){t.push(Object(v.a)({id:e.id},e.data()))}),i(t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){c()},[]),a.a.createElement("div",null,a.a.createElement(s.a,{as:"h3"}," Food items "),a.a.createElement(_,{ProductArray:o}))}var k=r(201),T=r(196);var U=function(e){return a.a.createElement(u.a,null,a.a.createElement(T.a.Item,null,a.a.createElement(T.a.Content,{floated:"right"},a.a.createElement("div",null,a.a.createElement(d.a,{circular:!0,floated:"right",size:"mini",icon:"cancel",onClick:function(){e.RemoveItemFromCart(e.Product.id)}}))),a.a.createElement(b.a,{size:"mini",src:e.Product.image}),a.a.createElement(T.a.Content,null,a.a.createElement(s.a,null,e.Product.title),a.a.createElement("div",null,"  ",a.a.createElement("span",{style:{fontWeight:"bold"}},"Price: "),"\u043b\u0432.",e.Product.totalPrice),a.a.createElement("div",null," ",a.a.createElement(d.a.Group,{size:"small"},a.a.createElement(d.a,{onClick:function(){e.Product.purchaseAmount>1?e.AddItemToCart({id:e.Product.id,title:e.Product.title,image:e.Product.image,purchaseAmount:-1,price:e.Product.price}):e.RemoveItemFromCart(e.Product.id)}},"-"),a.a.createElement(d.a.Or,{text:e.Product.purchaseAmount}),a.a.createElement(d.a,{onClick:function(){e.AddItemToCart({id:e.Product.id,title:e.Product.title,image:e.Product.image,purchaseAmount:1,price:e.Product.price})}},"+"))))))};var F=function(e){var t=e.CartItemContext;return a.a.createElement(T.a,{divided:!0,size:"massive",verticalAlign:"middle"},t.CartItems.map(function(e){return a.a.createElement(U,{key:e.id,Product:e,AddItemToCart:t.AddItemToCart,RemoveItemFromCart:t.RemoveItemFromCart})}))};var G=function(e){return a.a.createElement(u.a,null,a.a.createElement("h3",null,"CHECKOUT"),a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement("text",{style:{fontWeight:"bold"}},"subtotal: "),"\u043b\u0432.",e.SubtotalCalculation()," "),a.a.createElement("div",null,a.a.createElement("code",null,"Delivery fee: \u043b\u0432 3(sofia Delivery only) ")),a.a.createElement("div",{hidden:0===e.CartItemContext.TotalNumberOfCartitem},a.a.createElement("text",{style:{fontWeight:"bold",fontSize:"18px"}},"Grand total: \u043b\u0432.",e.SubtotalCalculation()+3," "))),a.a.createElement(d.a,{color:"teal",disabled:0===e.CartItemContext.TotalNumberOfCartitem,onClick:e.CheckOutHandler},"Check-out"))},D=r(194),B=r(193);function M(){M=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:w(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(x([])));y&&y!==t&&r.call(y,o)&&(p=y);var E=m.prototype=h.prototype=Object.create(p);function g(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function w(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return _()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function O(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(E),l(E,c,"Generator"),l(E,o,function(){return this}),l(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var H=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useRef)(),c=Object(n.useRef)();function l(){return(l=Object(y.a)(M().mark(function n(a){var l;return M().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),s(l={FristName:t.current.lastChild.lastChild.value,LastName:r.current.lastChild.lastChild.value,Email:o.current.lastChild.lastChild.value,Phone:i.current.lastChild.lastChild.value,Address:c.current.lastChild.lastChild.value,itemsPurchased:e.CartItemContext.CartItems}),n.next=5,Object(g.a)(Object(g.b)(N,"CustomerAndPurchases"),l).then(function(t){return r=l.FristName,n=l.Email,a=l.itemsPurchased,void(window.Email&&window.Email.send({Host:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_HOST,Username:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USERNAME,Password:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_PASSWORD,To:n,From:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FROMEMAIL,Subject:"New Purchase",Body:"Hello ".concat(r," <br> Your order has been processed successfully. Here is a list of things you order: ").concat(a.map(function(e){return e.title+" * "+e.purchaseAmount}),"\n    for a total of ").concat(e.SubtotalCalculation(),"\u043b\u0432 + a 3\u043b\u0432 delivery fee. <br> Thank you for shopping with us. <br> Best regards,<br> oyinbo.com")}).then(function(e){return window.location.replace("./SuccessPage")}));var r,n,a}).catch(function(e){return window.location.replace("./SuccessPage")});case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function s(t){window.Email&&window.Email.send({Host:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_HOST,Username:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_USERNAME,Password:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_PASSWORD,To:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FROMEMAIL,From:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_FROMEMAIL,Subject:"New Purchase",Body:"Hello,<br> New purchase from ".concat(t.FristName," of ").concat(t.itemsPurchased.map(function(e){return e.title+" * "+e.purchaseAmount}),"\n    for a total of ").concat(e.SubtotalCalculation(),"\u043b\u0432 + a 3\u043b\u0432 delivery fee. Email address ").concat(t.Email," and phone number ").concat(t.Phone)}).then(function(e){return window.location.replace("./SuccessPage")})}return a.a.createElement(u.a,null,a.a.createElement(D.a,{color:"gray",onSubmit:function(e){return l.apply(this,arguments)}},a.a.createElement(D.a.Group,{widths:"equal"},a.a.createElement(k.a,{innerRef:t},a.a.createElement(D.a.Input,{fluid:!0,label:"First name",placeholder:"First name",required:!0})),a.a.createElement(k.a,{innerRef:r},a.a.createElement(D.a.Input,{fluid:!0,label:"Last name",placeholder:"Last name",required:!0}))),a.a.createElement(k.a,{innerRef:o},a.a.createElement(D.a.Field,{id:"form-input-control-error-email",control:B.a,label:"Email",placeholder:"abcd***@example.com"})),a.a.createElement(k.a,{innerRef:i},a.a.createElement(D.a.Input,{fluid:!0,label:"Phone",type:"number",placeholder:"000-000-0000",required:!0})),a.a.createElement(k.a,{innerRef:c},a.a.createElement(D.a.Input,{fluid:!0,label:"Address",placeholder:"Address",required:!0})),a.a.createElement(d.a,{color:"teal",disabled:0===e.CartItemContext.TotalNumberOfCartitem},"Place Order")))};var V=function(){var e=Object(n.useContext)(L),t=Object(n.useState)(!0),r=Object(E.a)(t,2),o=r[0],i=r[1],c=Object(n.useRef)(null);function l(){var t=0;return e.CartItems.forEach(function(e){t+=e.totalPrice}),t}return a.a.createElement("div",null,a.a.createElement(w.a,{padded:!0,divided:!0},a.a.createElement(w.a.Row,{centered:!0,columns:2},a.a.createElement(w.a.Column,null,a.a.createElement(F,{CartItemContext:e})),a.a.createElement(w.a.Column,null,a.a.createElement(G,{CartItemContext:e,SubtotalCalculation:l,CheckOutHandler:function(){i(!1),c.current.scrollIntoView({behavior:"smooth"})}})))),a.a.createElement(k.a,{innerRef:c},a.a.createElement("div",{style:{padding:"50px"},hidden:o},a.a.createElement(H,{CartItemContext:e,SubtotalCalculation:l}))))};var q=function(){var e=Object(A.b)(),t=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),i=Object(n.useRef)(),c=Object(n.useState)(null),l=Object(E.a)(c,2),s=l[0],f=l[1];return a.a.createElement(u.a,{inverted:!0},a.a.createElement(D.a,{inverted:!0,onSubmit:function(n){n.preventDefault();var a=Object(A.c)(e,"image"+Date.now());Object(A.d)(a,s).then(function(n){console.log(n),Object(A.a)(Object(A.c)(e,n.metadata.fullPath)).then(function(e){var n={title:t.current.lastChild.lastChild.value,image:e,price:r.current.lastChild.lastChild.value,category:o.current.lastChild.lastChild.value,short_description:i.current.lastChild.lastChild.value};Object(g.a)(Object(g.b)(N,"Products"),n).then(function(){window.location.reload()})})})}},a.a.createElement(D.a.Group,{widths:"equal"},a.a.createElement(k.a,{innerRef:t},a.a.createElement(D.a.Input,{fluid:!0,label:"title",placeholder:"title",required:!0})),a.a.createElement(D.a.Input,{fluid:!0,label:"image",accept:"image/*",type:"file",onChange:function(e){f(e.target.files[0])},required:!0})),a.a.createElement(k.a,{innerRef:r},a.a.createElement(D.a.Input,{fluid:!0,label:"price",type:"number",placeholder:"\u043b\u0432.00",required:!0})),a.a.createElement(k.a,{innerRef:o},a.a.createElement(D.a.Input,{fluid:!0,label:"category",placeholder:"category",required:!0})),a.a.createElement(k.a,{innerRef:i},a.a.createElement(D.a.Input,{fluid:!0,label:"short description",required:!0})),a.a.createElement(d.a,{type:"submit"},"Submit")))};var z=function(){return a.a.createElement(u.a,{placeholder:!0},a.a.createElement(s.a,{icon:!0},a.a.createElement(f.a,{name:"checkmark"}),"Your order has been placed",a.a.createElement("p",null,'Check your "mailbox" or "junk mail" to see your order confrimation email')),a.a.createElement(d.a,{primary:!0,href:"./"},"HomePage"))};var W=function(){return a.a.createElement(u.a,{placeholder:!0},a.a.createElement(s.a,{icon:!0},a.a.createElement(f.a,{name:"cancel"}),"Error with submiting order"))},Y=r(195);function K(e){var t=e.location.pathname,r=Object(n.useState)(""),o=Object(E.a)(r,2),i=o[0],l=o[1];function u(e,r){l(t)}return Object(n.useEffect)(function(){l(t)}),a.a.createElement("div",null,a.a.createElement(Y.a,{fixed:"top",pointing:!0,widths:5},a.a.createElement(Y.a.Header,{as:"h2"},"Market"),a.a.createElement(Y.a.Item,{as:c.b,to:"/",name:"Home",active:"/"===i,onClick:u}),a.a.createElement(Y.a.Item,{as:c.b,to:"/Productspage",name:"Products",active:"/Productspage"===i,onClick:u}),a.a.createElement(Y.a.Item,{as:c.b,to:"/Aboutuspage",name:"About Us",active:"/Aboutuspage"===i,onClick:u}),a.a.createElement(Y.a.Menu,{position:"right"},a.a.createElement(Y.a.Item,{name:"shopping cart",as:c.b,to:"/CartPage",onClick:u},a.a.createElement(f.a,{name:"shopping cart"})," Cart"))))}var J=function(e){var t=Object(n.useContext)(L);return a.a.createElement("span",{style:{display:"flex",zIndex:9999,justifyContent:"center",color:"red",fontWeight:"700",position:"fixed",width:"100%",fontSize:"1.5rem"}},t.alert)};function Q(e){return a.a.createElement("div",null,a.a.createElement(K,{location:e.location}),a.a.createElement("div",{style:{paddingTop:"50px"}},a.a.createElement(J,null),e.children))}r(165);var X=function(){var e=Object(l.f)();return a.a.createElement(Q,{location:e},a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0},a.a.createElement(m,null)),a.a.createElement(l.a,{path:"/AboutUsPage"},a.a.createElement(p,null)),a.a.createElement(l.a,{path:"/ProductsPage"},a.a.createElement(S,null)),a.a.createElement(l.a,{path:"/CartPage"},a.a.createElement(V,null)),a.a.createElement(l.a,{path:"/AddingItem"},a.a.createElement(q,null)),a.a.createElement(l.a,{path:"/SuccessPage"},a.a.createElement(z,null)),a.a.createElement(l.a,{path:"/errorpage"},a.a.createElement(W,null))))};i.a.render(a.a.createElement(P,null,a.a.createElement(c.a,null,a.a.createElement(X,null))),document.getElementById("root"))}},[[149,2,1]]]);
//# sourceMappingURL=main.98108330.chunk.js.map