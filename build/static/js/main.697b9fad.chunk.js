(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(82),c=a.n(l),i=a(44),o=(a(177),a(179),a(19)),u=a(208),m=a(209),d=a(61),s=a(205),p=a(207);function f(){return r.a.createElement("div",{style:{backgroundColor:"powderblue",backgroundSize:"cover",height:"100vh"}}," ",r.a.createElement(u.a,{placeholder:!0},r.a.createElement(m.a,{as:"h2",icon:!0,textAlign:"center"},r.a.createElement(d.a,{name:"shopping basket",circular:!0}),r.a.createElement(m.a.Content,null,"Welcome to market"))),r.a.createElement(s.a,{centered:!0},r.a.createElement(p.a,{as:i.b,to:"/Productspage",animated:!0,color:"teal"},r.a.createElement(p.a.Content,{visible:!0}," Our products "),r.a.createElement(p.a.Content,{hidden:!0},r.a.createElement(d.a,{name:"arrow right"})))))}function E(){return r.a.createElement("div",null,r.a.createElement("h2",null,"About us"),r.a.createElement("p",null,"We are steady supplier of Afro carabbiean food items and spices. We are based in sofia, bulgaria our working hours are form monday - saturday 10:00 - 17:00. We deleiver to all over bulgaria but delivery to time differs depending on location, delivery within sofia takes 0-2 business days, delivery outside sofia takes 2-5 business days.for order confrimation, correction or cancellation please send us an email at *****@example.com with the name on the order and the order reference number and it will be updated accordingly"),r.a.createElement("div",null,"To see list of our products",r.a.createElement(p.a,{as:i.b,to:"/Productspage",color:"teal"},"Click Me")))}var h=a(1),b=a.n(h),C=a(157),v=a(5),g=a(20),O=a(48),I=a(133),j=a(210),y=Object(n.createContext)({CartItems:[],TotalNumberOfCartitem:"",alert:"",MessageHandler:function(){},AddItemToCart:function(){},RemoveItemFromCart:function(){},IsItemInCart:function(){}});var P=y;var x=function(e){var t=Object(n.useContext)(P),a=Object(n.useState)(1),l=Object(g.a)(a,2),c=l[0],i=l[1];function o(e,t){var a=t.children;"-"===a?i(Math.max(1,c-1)):"+"===a&&i(Math.min(5,c+1))}return r.a.createElement(s.a,{centered:!0,color:"teal"},r.a.createElement(I.a,{src:e.image,alt:e.title,size:"mini",wrapped:!0,ui:!1}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,e.title),r.a.createElement(s.a.Meta,null,r.a.createElement("span",{className:"date"},"Price: \u043b\u0432.",e.price)),r.a.createElement(s.a.Description,null,e.short_description)),r.a.createElement(s.a.Content,{extra:!0},r.a.createElement(j.a,null,r.a.createElement(j.a.Column,{textAlign:"center"},r.a.createElement(p.a.Group,{size:"large"},r.a.createElement(p.a,{onClick:o},"-"),r.a.createElement(p.a.Or,{text:c}),r.a.createElement(p.a,{onClick:o},"+")))),r.a.createElement(j.a,null,r.a.createElement(j.a.Column,{textAlign:"center"},r.a.createElement(p.a,{onClick:function(){t.AddItemToCart({id:e.id,title:e.title,image:e.image,purchaseAmount:c,price:e.price}),t.MessageHandler("Added to cart")}},"Add to cart")))))};var k=function(e){return r.a.createElement(s.a.Group,null,e.ProductArray.map(function(e){return r.a.createElement(x,{key:e.id,id:e.id,title:e.title,image:e.image,short_description:e.short_description,price:e.price})}))},w=a(158),A=a(80);Object(w.a)({apiKey:"AIzaSyDUuccYuIC6OpjDzWIuU4KhgeJLQ8othNY",authDomain:"oyiboonlinemarket.firebaseapp.com",databaseURL:"https://oyiboonlinemarket-default-rtdb.europe-west1.firebasedatabase.app",projectId:"oyiboonlinemarket",storageBucket:"oyiboonlinemarket.appspot.com",messagingSenderId:"1066111715055",appId:"1:1066111715055:web:6742f91dbb0f319ef93d1a"});var R=Object(O.d)();Object(A.b)();function S(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],i=function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,Object(O.c)(Object(O.b)(R,"Products"));case 3:e.sent.forEach(function(e){t.push(Object(C.a)({id:e.id},e.data()))}),c(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){i()},[]),r.a.createElement("div",null,r.a.createElement(m.a,{as:"h3"}," Food items "),r.a.createElement(k,{ProductArray:l}))}var T=a(204);var z=function(e){return r.a.createElement(u.a,null,r.a.createElement(T.a.Item,null,r.a.createElement(T.a.Content,{floated:"right"},r.a.createElement("div",null,r.a.createElement(p.a,{circular:!0,floated:"right",size:"mini",icon:"cancel",onClick:function(){e.RemoveItemFromCart(e.Product.id)}}))),r.a.createElement(I.a,{size:"mini",src:e.Product.image}),r.a.createElement(T.a.Content,null,r.a.createElement(m.a,null,e.Product.title),r.a.createElement("div",null,"  ",r.a.createElement("span",{style:{fontWeight:"bold"}},"Price: "),"\u043b\u0432.",e.Product.totalPrice),r.a.createElement("div",null," ",r.a.createElement(p.a.Group,{size:"small"},r.a.createElement(p.a,{onClick:function(){e.Product.purchaseAmount>1?e.AddItemToCart({id:e.Product.id,title:e.Product.title,image:e.Product.image,purchaseAmount:-1,price:e.Product.price}):e.RemoveItemFromCart(e.Product.id)}},"-"),r.a.createElement(p.a.Or,{text:e.Product.purchaseAmount}),r.a.createElement(p.a,{onClick:function(){e.AddItemToCart({id:e.Product.id,title:e.Product.title,image:e.Product.image,purchaseAmount:1,price:e.Product.price})}},"+"))))))};var q=function(e){var t=e.CartItemContext;return r.a.createElement(T.a,{divided:!0,size:"massive",verticalAlign:"middle"},t.CartItems.map(function(e){return r.a.createElement(z,{key:e.id,Product:e,AddItemToCart:t.AddItemToCart,RemoveItemFromCart:t.RemoveItemFromCart})}))};var F=function(e){return r.a.createElement(u.a,null,r.a.createElement("h3",null,"CHECKOUT"),r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement("text",{style:{fontWeight:"bold"}},"subtotal: "),"\u043b\u0432.",e.SubtotalCalculation()," "),r.a.createElement("div",null,r.a.createElement("code",null,"Delivery fee: \u043b\u0432 3(sofia Delivery only) ")),r.a.createElement("div",{hidden:0===e.CartItemContext.TotalNumberOfCartitem},r.a.createElement("text",{style:{fontWeight:"bold",fontSize:"18px"}},"Grand total: \u043b\u0432.",e.SubtotalCalculation()+3," "))),r.a.createElement(p.a,{color:"teal",disabled:0===e.CartItemContext.TotalNumberOfCartitem,onClick:e.CheckOutHandler},"Check-out"))},H=a(202),D=a(206),M=a(201);var N=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useRef)();function o(){return(o=Object(v.a)(b.a.mark(function n(r){var o;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),o={FristName:t.current.lastChild.lastChild.value,LastName:a.current.lastChild.lastChild.value,Email:l.current.lastChild.lastChild.value,Phone:c.current.lastChild.lastChild.value,Address:i.current.lastChild.lastChild.value,itemsPurchased:e.CartItemContext.CartItems},n.next=4,Object(O.a)(Object(O.b)(R,"CustomerAndPurchases"),o).then(function(e){return window.location.replace("./SuccessPage")}).catch(function(e){return window.location.replace("./errorpage")});case 4:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}return r.a.createElement(u.a,null,r.a.createElement(H.a,{color:"gray",onSubmit:function(e){return o.apply(this,arguments)}},r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(D.a,{innerRef:t},r.a.createElement(H.a.Input,{fluid:!0,label:"First name",placeholder:"First name",required:!0})),r.a.createElement(D.a,{innerRef:a},r.a.createElement(H.a.Input,{fluid:!0,label:"Last name",placeholder:"Last name",required:!0}))),r.a.createElement(D.a,{innerRef:l},r.a.createElement(H.a.Field,{id:"form-input-control-error-email",control:M.a,label:"Email",placeholder:"abcd***@example.com"})),r.a.createElement(D.a,{innerRef:c},r.a.createElement(H.a.Input,{fluid:!0,label:"Phone",type:"number",placeholder:"000-000-0000",required:!0})),r.a.createElement(D.a,{innerRef:i},r.a.createElement(H.a.Input,{fluid:!0,label:"Address",placeholder:"Address",required:!0})),r.a.createElement(p.a,{color:"teal",disabled:0===e.CartItemContext.TotalNumberOfCartitem},"Place Order")))};var W=function(){var e=Object(n.useContext)(P),t=Object(n.useState)(!0),a=Object(g.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(j.a,{padded:!0,divided:!0},r.a.createElement(j.a.Row,{centered:!0,columns:2},r.a.createElement(j.a.Column,null,r.a.createElement(q,{CartItemContext:e})),r.a.createElement(j.a.Column,null,r.a.createElement(F,{CartItemContext:e,SubtotalCalculation:function(){var t=0;return e.CartItems.forEach(function(e){t+=e.totalPrice}),t},CheckOutHandler:function(){c(!1)}})))),r.a.createElement("div",{style:{padding:"50px"},hidden:l},r.a.createElement(N,{CartItemContext:e})))};var G=function(){var e=Object(A.b)(),t=Object(n.useRef)(),a=Object(n.useRef)(),l=Object(n.useRef)(),c=Object(n.useRef)(),i=Object(n.useState)(null),o=Object(g.a)(i,2),m=o[0],d=o[1];return r.a.createElement(u.a,{inverted:!0},r.a.createElement(H.a,{inverted:!0,onSubmit:function(n){n.preventDefault();var r=Object(A.c)(e,"image"+Date.now());Object(A.d)(r,m).then(function(n){console.log(n),Object(A.a)(Object(A.c)(e,n.metadata.fullPath)).then(function(e){var n={title:t.current.lastChild.lastChild.value,image:e,price:a.current.lastChild.lastChild.value,category:l.current.lastChild.lastChild.value,short_description:c.current.lastChild.lastChild.value};Object(O.a)(Object(O.b)(R,"Products"),n).then(function(){window.location.reload()})})})}},r.a.createElement(H.a.Group,{widths:"equal"},r.a.createElement(D.a,{innerRef:t},r.a.createElement(H.a.Input,{fluid:!0,label:"title",placeholder:"title",required:!0})),r.a.createElement(H.a.Input,{fluid:!0,label:"image",accept:"image/*",type:"file",onChange:function(e){d(e.target.files[0])},required:!0})),r.a.createElement(D.a,{innerRef:a},r.a.createElement(H.a.Input,{fluid:!0,label:"price",type:"number",placeholder:"\u043b\u0432.00",required:!0})),r.a.createElement(D.a,{innerRef:l},r.a.createElement(H.a.Input,{fluid:!0,label:"category",placeholder:"category",required:!0})),r.a.createElement(D.a,{innerRef:c},r.a.createElement(H.a.Input,{fluid:!0,label:"short description",required:!0})),r.a.createElement(p.a,{type:"submit"},"Submit")))};var U=function(){return r.a.createElement(u.a,{placeholder:!0},r.a.createElement(m.a,{icon:!0},r.a.createElement(d.a,{name:"checkmark"}),"Your order has been placed"),r.a.createElement(p.a,{primary:!0,href:"./"},"HomePage"))};var L=function(){return r.a.createElement(u.a,{placeholder:!0},r.a.createElement(m.a,{icon:!0},r.a.createElement(d.a,{name:"cancel"}),"Error with submiting order"))},_=a(203);function J(e){var t=e.location.pathname,a=Object(n.useState)(""),l=Object(g.a)(a,2),c=l[0],o=l[1];function u(e,a){o(t)}return Object(n.useEffect)(function(){o(t)}),r.a.createElement("div",null,r.a.createElement(_.a,{fixed:"top",pointing:!0,widths:5},r.a.createElement(_.a.Header,{as:"h2"},"Market"),r.a.createElement(_.a.Item,{as:i.b,to:"/",name:"Home",active:"/"===c,onClick:u}),r.a.createElement(_.a.Item,{as:i.b,to:"/Productspage",name:"Products",active:"/Productspage"===c,onClick:u}),r.a.createElement(_.a.Item,{as:i.b,to:"/Aboutuspage",name:"About Us",active:"/Aboutuspage"===c,onClick:u}),r.a.createElement(_.a.Menu,{position:"right"},r.a.createElement(_.a.Item,{name:"shopping cart",as:i.b,to:"/CartPage",onClick:u},r.a.createElement(d.a,{name:"shopping cart"})," Cart"))))}var K=function(e){var t=Object(n.useContext)(P);return r.a.createElement("span",{style:{display:"flex",zIndex:9999,justifyContent:"center",color:"red",fontWeight:"700",position:"fixed",width:"100%",fontSize:"1.5rem"}},t.alert)};function Y(e){return r.a.createElement("div",null,r.a.createElement(J,{location:e.location}),r.a.createElement("div",{style:{paddingTop:"50px"}},r.a.createElement(K,null),e.children))}a(130);var B=function(){var e=Object(o.f)();return r.a.createElement(Y,{location:e},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0},r.a.createElement(f,null)),r.a.createElement(o.a,{path:"/AboutUsPage"},r.a.createElement(E,null)),r.a.createElement(o.a,{path:"/ProductsPage"},r.a.createElement(S,null)),r.a.createElement(o.a,{path:"/CartPage"},r.a.createElement(W,null)),r.a.createElement(o.a,{path:"/AddingItem"},r.a.createElement(G,null)),r.a.createElement(o.a,{path:"/SuccessPage"},r.a.createElement(U,null)),r.a.createElement(o.a,{path:"/errorpage"},r.a.createElement(L,null))))};c.a.render(r.a.createElement(function(e){var t=Object(n.useState)([]),a=Object(g.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),o=Object(g.a)(i,2),u=o[0],m=o[1],d={CartItems:l,TotalNumberOfCartitem:l.length,alert:u,MessageHandler:s,AddItemToCart:function(e){return p.apply(this,arguments)},RemoveItemFromCart:function(e){return f.apply(this,arguments)},IsItemInCart:E};function s(e){m(e),setTimeout(function(){m("")},3e3)}function p(){return(p=Object(v.a)(b.a.mark(function e(t){var a,n,r,i,o,u,m,d;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=E(t.id),n=Object(g.a)(a,2),r=n[0],i=n[1],o=l,u=0,m=0,d=0,r?(d=i,u=t.purchaseAmount+l[d].purchaseAmount,m=t.price*u):(d=l.length,u=t.purchaseAmount,m=t.price*u),o[d]={id:t.id,title:t.title,image:t.image,price:t.price,purchaseAmount:u,totalPrice:m},e.next=9,c(function(e){return[].concat(o)});case 9:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function f(){return(f=Object(v.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.filter(function(e){return e.id!==t}),e.next=3,c(a);case 3:s("Removed from cart");case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function E(e){return[l.some(function(t){return t.id===e}),l.findIndex(function(t){return t.id===e})]}return r.a.createElement(y.Provider,{value:d},e.children)},null,r.a.createElement(i.a,null,r.a.createElement(B,null))),document.getElementById("root"))},172:function(e,t,a){e.exports=a(132)},177:function(e,t,a){}},[[172,2,1]]]);
//# sourceMappingURL=main.697b9fad.chunk.js.map