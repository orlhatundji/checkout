(this.webpackJsonpcheckout2=this.webpackJsonpcheckout2||[]).push([[0],{45:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),s=c(14),i=c.n(s),o=(c(45),c(9)),u=c(8),l=c(75),j=c(77),d=c(76),b=c(39),O=c(74),m=c(35),h=c.n(m),p=(c(63),c(64),c.p+"static/media/cart.f0432bbd.svg"),f=(c(65),function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{src:e.image,className:"product-image",onClick:function(){return e.showProductDetails(e.id)}}),Object(n.jsxs)("div",{className:"product-info",children:[Object(n.jsx)("h6",{className:"product-title",children:e.title.slice(0,60)}),Object(n.jsx)("hr",{}),Object(n.jsxs)("footer",{className:"product-footer",children:[Object(n.jsxs)("small",{className:"product-price",children:["$",e.price]}),Object(n.jsx)(O.a,{onClick:function(){return e.addToCart(e.id)},className:"bg-warning",children:"Add to Cart"})]})]})]})}),x=(c(66),function(e){var t=e.product;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"product-details row",children:[Object(n.jsx)("img",{className:"col-md-3",src:t.image}),Object(n.jsxs)("div",{className:"col-md-6 product-description",children:[Object(n.jsx)("h3",{className:"product-title",children:t.title}),Object(n.jsx)("p",{className:"product-description",children:t.description}),Object(n.jsxs)("p",{className:"product-category",children:["Category: ",t.category]}),Object(n.jsxs)("p",{className:"product-price",children:["$",t.price]}),!e.inCart&&Object(n.jsx)(O.a,{onClick:function(){return e.addToCart(t.id)},className:"bg-warning",children:"Add to Cart"}),e.inCart&&Object(n.jsxs)("div",{className:"qty-buttons",children:[Object(n.jsx)(O.a,{className:"qty-change bg-warning",onClick:function(){e.decCount(t.id)},children:" - "}),Object(n.jsx)("span",{className:"item-count",children:t.count}),Object(n.jsx)(O.a,{className:"qty-change bg-warning",onClick:function(){e.incCount(t.id)},children:" + "})]})]})]}),!e.inCart&&Object(n.jsx)(O.a,{onClick:function(){return e.showDetails(t.id)},className:"return-button bg-warning ml-auto",children:"Return"})||Object(n.jsx)(O.a,{onClick:function(){return e.removeFromCart(t.id)},className:"return-button bg-danger ml-auto",children:"Remove"})]})}),g=(c(67),c(26)),v=c.n(g),C=c(36),k=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){window.paypal.Buttons({createOrder:function(t,c,n){return c.order.create({intent:"CAPTURE",purchase_units:[{amount:{currency_code:"USD",value:e.value}}]})},onApprove:function(){var e=Object(C.a)(v.a.mark((function e(t,c){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.order.capture();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(t.current)}),[]),Object(n.jsx)("div",{className:"",children:Object(n.jsx)("div",{ref:t})})},N=function(e){var t=Object(a.useState)(0),c=Object(u.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),l=o[0],j=o[1];Object(a.useEffect)((function(){d()}),[e.checkoutItems]);var d=function(){var t=0;for(var c in e.checkoutItems)t+=e.checkoutItems[c].price*e.checkoutItems[c].count;s(parseFloat(t).toFixed(2))},b=[];for(var m in e.checkoutItems)b.push(Object(n.jsx)(x,{Key:m.id,inCart:!0,product:e.checkoutItems[m],removeFromCart:e.removeFromCart,incCount:e.incCount,decCount:e.decCount}));return Object(n.jsxs)("div",{id:"cart",children:[Object(n.jsx)("div",{className:"payment-gateway",children:l&&Object(n.jsx)(k,{description:"Many",value:r})}),Object.keys(b).length>0&&!l&&Object(n.jsx)("div",{children:b.map((function(e){return e}))}),0==Object.keys(b).length&&!l&&Object(n.jsx)("center",{className:"mt-5",children:"Empty"}),Object(n.jsxs)("div",{className:"checkout-button mt-5",children:[Object(n.jsxs)("div",{className:"total-price",children:["Total Price: $",r]}),Object(n.jsx)(O.a,{className:"mt-5 mb-5 bg-success",onClick:function(){return j(!l)},children:l?"GO BACK":"CHECKOUT"})]})]})};var y=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=(t[0],t[1]),r=Object(a.useState)([]),s=Object(u.a)(r,2),i=s[0],m=s[1],g=Object(a.useState)(!1),v=Object(u.a)(g,2),C=v[0],k=v[1],y=Object(a.useState)({}),S=Object(u.a)(y,2),w=S[0],I=S[1],F=Object(a.useState)(!1),T=Object(u.a)(F,2),E=T[0],P=T[1],J=Object(a.useState)(null),A=Object(u.a)(J,2),D=A[0],B=A[1],L=Object(a.useState)(0),K=Object(u.a)(L,2),R=K[0],q=K[1];Object(a.useEffect)((function(){localStorage.getItem("checkout")&&I(JSON.parse(localStorage.getItem("checkout")));h.a.get("https://fakestoreapi.com/products").then((function(e){m(e.data)})).catch((function(e){c(e)}))}),[]);var U=function(){P(!1),k(!1)},$=function(e){P(!E),B(i[e-1])},H=function(){var e=0;for(var t in w)e+=w[t].price*w[t].count;q(e)},M=function(e){var t=Object(o.a)({},w);w[e]||(t[e]=Object(o.a)({},i[e-1]),t[e].count=1,I(Object(o.a)({},t))),H(),localStorage.setItem("checkout",JSON.stringify(t))};return Object(n.jsxs)("div",{className:"App container",children:[Object(n.jsxs)(l.a,{bg:"light",expand:"lg",fixed:"top",className:"main-nav mb-5",children:[Object(n.jsx)(l.a.Brand,{children:Object(n.jsx)(j.a.Link,{onClick:function(){return U()},children:"Check-Out"})}),Object(n.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(l.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(j.a,{className:"ml-auto",children:[Object(n.jsx)(j.a.Link,{onClick:function(){return U()},children:"Home"}),Object(n.jsx)(j.a.Link,{href:"#",children:Object(n.jsxs)("div",{id:"cart-link",onClick:function(){return k(!0)},children:[Object(n.jsx)("img",{id:"cart-logo",src:p}),Object.keys(w).length>0&&Object(n.jsx)("div",{id:"no-of-items-in-cart",children:Object.keys(w).length})]})})]}),Object(n.jsxs)(d.a,{inline:!0,children:[Object(n.jsx)(b.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(n.jsx)(O.a,{variant:"outline-success",children:"Search"})]})]})]}),Object(n.jsx)("hr",{}),!E&&!C&&Object(n.jsx)("div",{className:"row products-section mt-5",children:i.map((function(e){return Object(n.jsx)("div",{className:"product-item col-md-4 col-lg-3",children:Object(n.jsx)(f,{Key:e.id,showProductDetails:$,id:e.id,title:e.title,price:e.price,description:e.description,image:e.image,addToCart:M})})}))}),E&&!C&&Object(n.jsx)(x,{product:D,showDetails:$,addToCart:M}),C&&Object(n.jsx)(N,{products:i,removeFromCart:function(e){var t=Object(o.a)({},w);t.hasOwnProperty(e)&&(delete t[e],I(Object(o.a)({},t))),H(),localStorage.setItem("checkout",JSON.stringify(t))},checkoutItems:w,incCount:function(e){var t=Object(o.a)({},w);t[e].count+=1,I(Object(o.a)({},t)),H(),localStorage.setItem("checkout",JSON.stringify(t))},decCount:function(e){var t=Object(o.a)({},w);t[e].count>1&&(t[e].count-=1,I(Object(o.a)({},t))),H(),localStorage.setItem("checkout",JSON.stringify(t))},totalPrice:R})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,78)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[72,1,2]]]);
//# sourceMappingURL=main.d5c8043c.chunk.js.map