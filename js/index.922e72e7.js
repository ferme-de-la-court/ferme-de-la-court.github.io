(function(e){function t(t){for(var n,i,s=t[0],o=t[1],l=t[2],b=0,p=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,s=1;s<c.length;s++){var o=c[s];0!==r[o]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=c[0]))}return e}var n={},r={index:0},a=[];function i(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=n,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(c,n,function(t){return e[t]}.bind(null,n));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"108c":function(e,t,c){"use strict";c("84a7")},"37ad":function(e,t,c){"use strict";c("5947")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),r=c("6c02"),a=c("5502"),i=(c("c740"),c("e9c4"),c("d3b7"),c("a434"),c("2ef0")),s=c.n(i);function o(e,t,c){return e.findIndex((function(e){return s.a.isEqual(e.product,t)&&s.a.isEqual(e.price,c)}))}var l="cart.list";function u(e){e&&localStorage.setItem(l,JSON.stringify(e))}function b(){var e=localStorage.getItem(l);if(!e)return[];try{return JSON.parse(e)||[]}catch(t){return console.log(t),[]}}var p={products:b(),prices:[{distance:20,amount:60},{distance:30,amount:80},{distance:40,amount:90},{distance:60,amount:100}]},d={products:function(e){return e.products},prices:function(e){return e.prices},count:function(e){return e.products.length},total:function(e){return e.products.reduce((function(e,t){return e+t.price.price*t.quantity}),0)},quantity:function(e){return e.products.reduce((function(e,t){return e+t.quantity}),0)},deliverable:function(e,t){return t.total>=e.prices[0].amount}},g={addToCart:function(e,t){var c=t.item,n=t.price,r=o(e.products,c,n);r>=0?e.products[r].quantity++:(e.products.push({product:c,price:n,quantity:1}),u(e.products))},delFromCart:function(e,t){var c=t.item,n=t.price,r=o(e.products,c,n);r<0||e.products.splice(r,1)},updateQuantity:function(e,t){var c=t.item,n=t.price,r=t.quantity,a=o(e.products,c,n);a<0||(e.products[a].quantity=r,u(e.products))}},m={},O={namespaced:!0,state:p,getters:d,actions:m,mutations:g},j=(c("4de4"),c("b0c0"),c("4e82"),c("0481"),c("4069"),c("d81d"),[{name:"bintje",highlight:!0,desc:"une pomme de terre idéale pour les frites",categories:["légumes","pomme de terre"],prices:[{quantity:"1kg",price:1.6},{quantity:"5kg",price:3},{quantity:"10kg",price:6}]},{name:"nicolas",highlight:!0,desc:"une pomme de terre à la chair tendre",categories:["légumes","pomme de terre"],prices:[{quantity:"1kg",price:1.2},{quantity:"5kg",price:2},{quantity:"10kg",price:4}]},{name:"charlotte",highlight:!0,desc:"une pomme de terre idéale pour les purées et cuisson vapeure",categories:["légumes","pomme de terre"],prices:[{quantity:"1kg",price:1.2},{quantity:"5kg",price:2},{quantity:"10kg",price:4}]},{name:"challenger",highlight:!0,desc:"une pomme de terre à la chair ferme",categories:["légumes","pomme de terre"],prices:[{quantity:"1kg",price:1},{quantity:"5kg",price:4},{quantity:"10kg",price:15}]},{name:"poireaux",desc:"idéal pour les potages",categories:["légumes"],prices:[{quantity:"botte de 5",price:4.25}]},{name:"navets",desc:"manger des navets qu'ils disaient!!!",categories:["légumes"],prices:[{quantity:"1kg",price:7.25}]},{name:"chicons",desc:"ils sont beaux mes chicons",categories:["légumes"],prices:[{quantity:"1kg",price:2.56}]},{name:"asperges",categories:["légumes"],prices:[{quantity:"1kg",price:17.25},{quantity:"5kg",price:45}]},{name:"carottes",categories:["légumes"],prices:[{quantity:"1kg",price:1.2},{quantity:"5kg",price:2},{quantity:"10kg",price:4}]},{name:"oignons blanc",prices:[{quantity:"1kg",price:.5},{quantity:"5kg",price:4},{quantity:"10kg",price:10}]},{name:"oignons rouge",categories:["légumes"],prices:[{quantity:"1kg",price:.5},{quantity:"5kg",price:4},{quantity:"10kg",price:10}]},{name:"cassoulet",desc:"un plat délicieux à partager en famille",categories:["menu"],prices:[{quantity:1,price:8},{quantity:2,price:13},{quantity:4,price:20}]},{name:"waterzooi de poulet",highlight:!0,desc:"un plat délicieusement belge préparé façon grand mère",categories:["menu","plat belge"],prices:[{quantity:1,price:8},{quantity:2,price:13},{quantity:4,price:20}]},{name:"carbonnades à la flamande",highlight:!0,desc:"un plat délicieusement belge préparé façon grand mère",categories:["menu","plat belge"],prices:[{quantity:1,price:8},{quantity:2,price:13},{quantity:4,price:20}]},{name:"vol au vent",desc:"un plat délicieusement belge préparé façon grand mère",categories:["menu","plat belge"],prices:[{quantity:1,price:8},{quantity:2,price:13},{quantity:4,price:20}]},{name:"croquette de crevettes",desc:"un plat délicieusement belge préparé avec des crevettes fraichement pêchée",categories:["menu","plat belge"],prices:[{quantity:1,price:14},{quantity:2,price:15},{quantity:4,price:25}]},{name:"chicons au gratin et sa purée",desc:"un plat délicieusement belge préparé façon grand mère",categories:["menu","plat belge"],prices:[{quantity:1,price:9},{quantity:2,price:15},{quantity:4,price:27}]}]),f="asc",h="desc",v="popular";function y(e){return s.a.sortBy(e,(function(e){return s.a.chain(e.prices).sortBy("price").first().value().price}))}function k(e,t){return e==f?t=y(t):e==h?(t=y(t),t=s.a.reverse(t)):e==v||(t=s.a.sortBy(t,"name")),t}var x={products:j,term:"",category:"",sort:""},q={highlight:function(e){return e.products.filter((function(e){return e.highlight}))},products:function(e){var t=e.products.filter((function(t){var c=""==e.term||t.name.indexOf(e.term)>=0,n=""==e.category||t.categories.indexOf(e.category)>=0;return c&&n}));return k(e.sort,t)},categories:function(e){var t=e.products.map((function(e){return e.categories})).flat();return s.a.chain(t).uniq().sort().value()},term:function(e){return e.term},category:function(e){return e.category},sort:function(e){return e.sort},all:function(e){return e.products.length},available:function(e,t){return t.products.length}},w={setTerm:function(e,t){e.term=t},setCategory:function(e,t){e.category=t},setSort:function(e,t){e.sort=t}},C={},I={namespaced:!0,state:x,getters:q,actions:C,mutations:w},z=[50.361819709314595,4.073969071720251],B={position:function(){return z}},S={namespaced:!0,getters:B},M=Object(a["a"])({modules:{cart:O,catalog:I,farm:S},strict:!0});function _(e,t,c,r,a,i){var s=Object(n["z"])("Nav"),o=Object(n["z"])("Header"),l=Object(n["z"])("router-view");return Object(n["s"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(s),Object(n["i"])(o),Object(n["i"])(l)],64)}var T={class:"navbar navbar-expand navbar-light bg-light sticky-top border-bottom"},U={class:"container"},F={class:"collapse navbar-collapse"},D={class:"navbar-nav me-auto"},P={class:"nav-item"},$=Object(n["g"])("span",null,"shop",-1),J={key:0,class:"d-flex"},N=Object(n["g"])("i",{class:"bi bi-cart-fill"},null,-1),L=Object(n["g"])("span",{class:"p-2"},"panier",-1),A={class:"badge bg-dark px-2"};function E(e,t,c,r,a,i){var s=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("nav",T,[Object(n["g"])("div",U,[Object(n["i"])(s,{to:{name:"home"},class:"navbar-brand mb-0"},{default:Object(n["F"])((function(){return[Object(n["h"])(Object(n["B"])(a.title),1)]})),_:1}),Object(n["g"])("div",F,[Object(n["g"])("ul",D,[Object(n["g"])("li",P,[Object(n["i"])(s,{to:{name:"shop"},class:"nav-link"},{default:Object(n["F"])((function(){return[$]})),_:1})])]),e.count?(Object(n["s"])(),Object(n["f"])("form",J,[Object(n["i"])(s,{to:{name:"cart"},type:"button",class:"btn btn-outline-dark"},{default:Object(n["F"])((function(){return[N,L,Object(n["g"])("span",A,Object(n["B"])(e.count),1)]})),_:1})])):Object(n["e"])("",!0)])])])}var V=c("5530"),H="Ferme de la Court",Q="Les produits du terroir",R="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",Y="pk.eyJ1IjoibmljYnJ1biIsImEiOiJja3hldjZuMmwzOHkzMnBvNWs5dzdvbmVsIn0.4Y-ckfPPbzJ9IuRd4DbJCA",Z={name:"Nav",data:function(){return{title:H}},computed:Object(V["a"])({},Object(a["b"])("cart",["count"]))},G=c("6b0d"),W=c.n(G);const K=W()(Z,[["render",E]]);var X=K,ee={class:"bg-dark py-5"},te={class:"container px-4 px-lg-5 my-5"},ce={class:"text-center text-white"},ne={class:"display-4 fw-bolder"},re={class:"lead fw-normal text-white-50 mb-0"};function ae(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("header",ee,[Object(n["g"])("div",te,[Object(n["g"])("div",ce,[Object(n["g"])("h1",ne,Object(n["B"])(a.title),1),Object(n["g"])("p",re,Object(n["B"])(a.subtitle),1)])])])}var ie={name:"Nav",data:function(){return{title:H,subtitle:Q}}};const se=W()(ie,[["render",ae]]);var oe=se,le={name:"App",components:{Nav:X,Header:oe}};const ue=W()(le,[["render",_]]);var be=ue,pe={class:""},de={class:"h-50 my-5"},ge={class:"container align-middle py-5"},me={class:"w-75 mx-auto lead text-center"},Oe={class:"h-50 bg-light"},je={key:0,class:"h-50 my-5"},fe={class:"container py-5"},he={class:"text-center"},ve=Object(n["g"])("span",null,"visitez notre shop et découvrez tous nos produits",-1);function ye(e,t,c,r,a,i){var s=Object(n["z"])("Map"),o=Object(n["z"])("Carousel"),l=Object(n["z"])("router-link");return Object(n["s"])(),Object(n["f"])("div",pe,[Object(n["g"])("div",de,[Object(n["g"])("div",ge,[Object(n["g"])("p",me,Object(n["B"])(a.about),1)])]),Object(n["g"])("div",Oe,[Object(n["i"])(s)]),i.showCarousel?(Object(n["s"])(),Object(n["f"])("div",je,[Object(n["g"])("div",fe,[Object(n["i"])(o),Object(n["g"])("p",he,[Object(n["i"])(l,{to:{name:"shop"}},{default:Object(n["F"])((function(){return[ve]})),_:1})])])])):Object(n["e"])("",!0)])}var ke={class:"carousel slide","data-bs-ride":"carousel",id:"highlight","data-bs-interval":"10000"},xe={class:"carousel-inner"},qe={class:"row"},we=Object(n["g"])("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#highlight","data-bs-slide":"prev"},[Object(n["g"])("span",{class:"carousel-control-prev-icon","aria-hidden":"true"})],-1),Ce=Object(n["g"])("button",{class:"carousel-control-next",type:"button","data-bs-target":"#highlight","data-bs-slide":"next"},[Object(n["g"])("span",{class:"carousel-control-next-icon","aria-hidden":"true"})],-1);function Ie(e,t,c,r,a,i){var s=Object(n["z"])("Item");return Object(n["s"])(),Object(n["f"])("div",ke,[Object(n["g"])("div",xe,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.groups,(function(e,t){return Object(n["s"])(),Object(n["f"])("div",{key:t,class:Object(n["o"])(["carousel-item",{active:0==t}])},[Object(n["g"])("div",qe,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e,(function(e,t){return Object(n["s"])(),Object(n["d"])(s,{key:t,item:e,interact:!1},null,8,["item"])})),128))])],2)})),128))]),we,Ce])}c("159b");var ze={class:"col mb-3"},Be={class:"card h-100"},Se=["alt"],Me={class:"card-body text-center mb-3 h-100"},_e={class:"card-title text-center"},Te={class:"card-text"},Ue={key:0,class:"card-body text-center"},Fe={class:"btn-group"},De=Object(n["g"])("i",{class:"bi bi-cart-plus-fill px-2"},null,-1),Pe=Object(n["g"])("span",null,"Ajouter",-1),$e=[De,Pe],Je=Object(n["g"])("button",{type:"button",class:"btn btn-outline-dark dropdown-toggle dropdown-toggle-split","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(n["g"])("span",{class:"visually-hidden"},"voir les tarifs")],-1),Ne={class:"dropdown-menu"},Le=["onClick"];function Ae(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("div",ze,[Object(n["g"])("div",Be,[Object(n["g"])("img",{src:"https://via.placeholder.com/450x300",class:"card-img-top",alt:c.item.name},null,8,Se),Object(n["g"])("div",Me,[Object(n["g"])("h5",_e,Object(n["B"])(c.item.name),1),Object(n["g"])("p",Te,[Object(n["g"])("em",null,Object(n["B"])(c.item.desc||"aucune description disponible"),1)])]),c.interact&&c.item.prices.length>0?(Object(n["s"])(),Object(n["f"])("div",Ue,[Object(n["g"])("div",Fe,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-dark",onClick:t[0]||(t[0]=function(t){return e.addToCart({item:c.item,price:c.item.prices[0]})})},$e),Je,Object(n["g"])("ul",Ne,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.item.prices,(function(t,r){return Object(n["s"])(),Object(n["f"])("li",{key:r},[Object(n["g"])("a",{class:"dropdown-item",href:"#",onClick:function(n){return e.addToCart({item:c.item,price:t})}},Object(n["B"])(t.price)+"€ pour "+Object(n["B"])(t.quantity),9,Le)])})),128))])])])):Object(n["e"])("",!0)])])}var Ee={name:"catalog-item",props:{item:Object,interact:{type:Boolean,default:!0}},methods:Object(V["a"])({},Object(a["c"])("cart",["addToCart"]))};const Ve=W()(Ee,[["render",Ae]]);var He=Ve,Qe={name:"carousel",computed:Object(V["a"])(Object(V["a"])({},Object(a["b"])("catalog",["highlight"])),{},{groups:function(){var e=[[]];this.highlight.forEach((function(t){var c=s.a.last(e);c.length<3?c.push(t):e.push([t])}));var t=s.a.last(e);return 3!=t.length&&e.pop(),e}}),components:{Item:He}};const Re=W()(Qe,[["render",Ie]]);var Ye=Re,Ze={id:"map"};function Ge(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("div",Ze)}c("6cc5");var We=c("e11e"),Ke=c.n(We),Xe={name:"map",mounted:function(){this.setupMap()},computed:Object(V["a"])({},Object(a["b"])("farm",["position"])),methods:{setupMap:function(){var e=Ke.a.map("map").setView(this.position,12);Ke.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:Y}).addTo(e),Ke.a.marker(this.position).addTo(e)}}};c("108c");const et=W()(Xe,[["render",Ge],["__scopeId","data-v-0d6f7d65"]]);var tt=et,ct={name:"home",data:function(){return{about:R}},computed:Object(V["a"])(Object(V["a"])({},Object(a["b"])("catalog",["highlight"])),{},{showCarousel:function(){return this.highlight&&this.highlight.length%3==0}}),components:{Carousel:Ye,Map:tt}};const nt=W()(ct,[["render",ye]]);var rt=nt,at={class:"container"},it={class:"mt-5 mb-3 d-flex justify-content-between"},st={class:"d-flex"},ot={key:0,class:"mx-3 mt-2"},lt=Object(n["h"])("produits "),ut={class:"my-5"},bt={class:"row row-cols-1 row-cols-md-4 g-4"};function pt(e,t,c,r,a,i){var s=Object(n["z"])("Filter"),o=Object(n["z"])("Sort"),l=Object(n["z"])("Pagination"),u=Object(n["z"])("Item");return Object(n["s"])(),Object(n["f"])("main",at,[Object(n["g"])("section",it,[Object(n["g"])("div",st,[Object(n["i"])(s,{categories:e.categories,term:i.term,"onUpdate:term":t[0]||(t[0]=function(e){return i.term=e}),category:i.category,"onUpdate:category":t[1]||(t[1]=function(e){return i.category=e})},null,8,["categories","term","category"]),e.available<e.all?(Object(n["s"])(),Object(n["f"])("div",ot,[Object(n["g"])("span",null,[lt,Object(n["g"])("strong",null,Object(n["B"])(e.available)+"/"+Object(n["B"])(e.all),1)])])):Object(n["e"])("",!0)]),Object(n["i"])(o,{by:i.sort,"onUpdate:by":t[2]||(t[2]=function(e){return i.sort=e})},null,8,["by"])]),Object(n["g"])("section",ut,[Object(n["i"])(l,{pages:i.pages,"onUpdate:pages":t[3]||(t[3]=function(e){return i.pages=e}),current:a.current,"onUpdate:current":t[4]||(t[4]=function(e){return a.current=e}),count:a.count,"onUpdate:count":t[5]||(t[5]=function(e){return a.count=e})},null,8,["pages","current","count"]),Object(n["g"])("div",bt,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(i.list,(function(e,t){return Object(n["s"])(),Object(n["d"])(u,{item:e,key:t},null,8,["item"])})),128))]),Object(n["i"])(l,{pages:i.pages,"onUpdate:pages":t[6]||(t[6]=function(e){return i.pages=e}),current:a.current,"onUpdate:current":t[7]||(t[7]=function(e){return a.current=e}),count:a.count,"onUpdate:count":t[8]||(t[8]=function(e){return a.count=e})},null,8,["pages","current","count"])])])}c("fb6a");var dt={class:"row row-cols-lg-auto g-3 align-items-center"},gt=Object(n["g"])("label",{for:"sort",class:"col"},"Trier par",-1),mt={class:"col"},Ot=Object(n["g"])("option",{value:""},null,-1),jt=Object(n["g"])("option",{value:"asc"},"prix croissant",-1),ft=Object(n["g"])("option",{value:"desc"},"prix décroissant",-1),ht=Object(n["g"])("option",{value:"popular"},"popularité",-1),vt=[Ot,jt,ft,ht];function yt(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("form",dt,[gt,Object(n["g"])("div",mt,[Object(n["g"])("select",{class:"form-select",id:"sort",onChange:t[0]||(t[0]=function(t){return e.$emit("update:by",t.target.value)})},vt,32)])])}var kt={name:"sort",props:{by:String},emits:["update:by"]};const xt=W()(kt,[["render",yt]]);var qt=xt,wt={class:"row row-cols-lg-auto g-3 align-items-center"},Ct=Object(n["g"])("label",{for:"category",class:"col"},"Filtrer par",-1),It={class:"col"},zt=Object(n["g"])("option",null,null,-1),Bt=["value"],St=Object(n["g"])("label",{for:"search",class:"col"},"Rechercher",-1),Mt={class:"col"},_t=["value"];function Tt(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("form",wt,[Ct,Object(n["g"])("div",It,[Object(n["g"])("select",{class:"form-select",id:"category",onChange:t[0]||(t[0]=function(t){return e.$emit("update:category",t.target.value)})},[zt,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.categories,(function(e,t){return Object(n["s"])(),Object(n["f"])("option",{value:e,key:t},Object(n["B"])(e),9,Bt)})),128))],32)]),St,Object(n["g"])("div",Mt,[Object(n["g"])("input",{value:c.term,onInput:t[1]||(t[1]=function(t){return e.$emit("update:term",t.target.value)}),type:"search",class:"form-control",placeholder:"bintje, poireaux,..."},null,40,_t)])])}var Ut={name:"filter",props:{categories:Array,term:String,category:String},emits:["update:term","update:category"]};const Ft=W()(Ut,[["render",Tt]]);var Dt=Ft,Pt={class:"my-3 d-flex justify-content-center"},$t={class:"row row-cols-lg-auto g-3 align-items-center me-3"},Jt=Object(n["g"])("label",{for:"page",class:"col m-0"},"Produits par page",-1),Nt={class:"col m-0"},Lt=["value"],At=Object(n["g"])("option",{value:"12"},"12",-1),Et=Object(n["g"])("option",{value:"24"},"24",-1),Vt=Object(n["g"])("option",{value:"48"},"48",-1),Ht=[At,Et,Vt],Qt={key:0,class:"pagination justify-content-center"},Rt=["onClick"],Yt={class:"page-link",href:"#"};function Zt(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("nav",Pt,[Object(n["g"])("form",$t,[Jt,Object(n["g"])("div",Nt,[Object(n["g"])("select",{value:c.count,class:"form-select",id:"page",onChange:t[0]||(t[0]=function(t){return e.$emit("update:count",parseInt(t.target.value))})},Ht,40,Lt)])]),c.pages>1?(Object(n["s"])(),Object(n["f"])("ul",Qt,[Object(n["g"])("li",{class:Object(n["o"])(["page-item",{disabled:1==c.current}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=function(t){return e.$emit("update:current",i.prev)})},"«")],2),(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.pages,(function(t){return Object(n["s"])(),Object(n["f"])("li",{key:t,class:Object(n["o"])(["page-item",{active:t==c.current}]),onClick:function(c){return e.$emit("update:current",t)}},[Object(n["g"])("a",Yt,Object(n["B"])(t),1)],10,Rt)})),128)),Object(n["g"])("li",{class:Object(n["o"])(["page-item",{disabled:c.current==c.pages}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=function(t){return e.$emit("update:current",i.next)})},"»")],2)])):Object(n["e"])("",!0)])}c("a9e3");var Gt={name:"pagination",props:{pages:Number,current:Number,count:{type:Number,default:12}},computed:{prev:function(){return this.current>1?this.current-1:1},next:function(){return this.current<this.pages?this.current+1:this.pages}},emits:["update:count","update:current"]};const Wt=W()(Gt,[["render",Zt]]);var Kt=Wt,Xt={name:"shop",data:function(){return{count:12,current:1}},computed:Object(V["a"])(Object(V["a"])({},Object(a["b"])("catalog",["products","categories","available","all"])),{},{term:{get:function(){return this.$store.getters.term},set:function(e){this.setTerm(e)}},category:{get:function(){return this.$store.getters.category},set:function(e){this.setCategory(e)}},sort:{get:function(){return this.$store.getters.sort},set:function(e){this.setSort(e)}},list:function(){var e=this.products;if(this.count<this.available){var t=this.count*(this.current-1),c=t+this.count;e=s.a.slice(e,t,c)}return e},pages:function(){return this.available<this.count?1:Math.round(this.available/this.count)+1}}),methods:Object(V["a"])({},Object(a["c"])("catalog",["setTerm","setCategory","setSort"])),components:{Item:He,Sort:qt,Filter:Dt,Pagination:Kt}};const ec=W()(Xt,[["render",pt]]);var tc=ec,cc={class:"container"},nc={key:0,class:"w-75 mx-auto mb-5"},rc={key:0,class:"my-5 text-center"},ac={key:1,class:"my-4"},ic={class:"mb-3"},sc=Object(n["g"])("label",null,"nom",-1),oc=["disabled"],lc={class:"mb-3"},uc=Object(n["g"])("label",null,"e-mail",-1),bc=["disabled"],pc={class:"mb-3"},dc=Object(n["g"])("label",null,"numéro de téléphone",-1),gc=["disabled"],mc={key:0},Oc={class:"mb-3"},jc=Object(n["g"])("label",null,"adresse",-1),fc=["disabled"],hc={class:"row mb-3"},vc={class:"col-9"},yc=Object(n["g"])("label",null,"ville",-1),kc=["disabled"],xc={class:"col"},qc=Object(n["g"])("label",null,"code postal",-1),wc=["disabled"],Cc={class:"mb-3"},Ic=Object(n["g"])("label",null,"date de retrait/livraison désirée",-1),zc=["disabled"];function Bc(e,t,c,r,a,i){var s=Object(n["z"])("Content"),o=Object(n["z"])("SelectMode");return Object(n["s"])(),Object(n["f"])("main",cc,[Object(n["i"])(s),e.count?(Object(n["s"])(),Object(n["f"])("section",nc,[Object(n["i"])(o,{mode:a.mode,"onUpdate:mode":t[0]||(t[0]=function(e){return a.mode=e})},null,8,["mode"]),a.mode?(Object(n["s"])(),Object(n["f"])("p",rc,"complétez le formulaire ci-dessous afin que nous puissions continuer la validation de votre commande")):Object(n["e"])("",!0),a.mode?(Object(n["s"])(),Object(n["f"])("form",ac,[Object(n["g"])("fieldset",null,[Object(n["g"])("div",ic,[sc,Object(n["g"])("input",{type:"text",id:"name",class:"form-control",disabled:i.canDeliver},null,8,oc)]),Object(n["g"])("div",lc,[uc,Object(n["g"])("input",{type:"email",id:"email",class:"form-control",disabled:i.canDeliver},null,8,bc)]),Object(n["g"])("div",pc,[dc,Object(n["g"])("input",{type:"text",id:"phone",class:"form-control",disabled:i.canDeliver},null,8,gc)])]),"delivery"==a.mode?(Object(n["s"])(),Object(n["f"])("fieldset",mc,[Object(n["g"])("div",Oc,[jc,Object(n["g"])("input",{type:"text",id:"street",class:"form-control",disabled:i.canDeliver},null,8,fc)]),Object(n["g"])("div",hc,[Object(n["g"])("div",vc,[yc,Object(n["g"])("input",{type:"text",id:"city",class:"form-control",disabled:i.canDeliver},null,8,kc)]),Object(n["g"])("div",xc,[qc,Object(n["g"])("input",{type:"number",id:"zipcode",class:"form-control",disabled:i.canDeliver},null,8,wc)])])])):Object(n["e"])("",!0),Object(n["g"])("div",Cc,[Ic,Object(n["G"])(Object(n["g"])("input",{type:"date",id:"when",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.when=e}),disabled:i.canDeliver},null,8,zc),[[n["D"],a.when]])])])):Object(n["e"])("",!0)])):Object(n["e"])("",!0)])}c("ac1f"),c("1276"),c("b680");var Sc=function(e){return Object(n["v"])("data-v-1279a36e"),e=e(),Object(n["t"])(),e},Mc={key:0,class:"my-5"},_c=Sc((function(){return Object(n["g"])("h3",null,"Votre panier",-1)})),Tc={class:"table table-striped"},Uc=Sc((function(){return Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th"),Object(n["g"])("th",null,"produit"),Object(n["g"])("th",{class:"text-center"},"prix unitaire"),Object(n["g"])("th",{class:"text-center"},"quantité"),Object(n["g"])("th",{class:"text-end"},"total"),Object(n["g"])("th")])],-1)})),Fc=Sc((function(){return Object(n["g"])("td",{width:"10%"},[Object(n["g"])("img",{src:"https://via.placeholder.com/450x300",class:"card-img-top"})],-1)})),Dc={class:"align-middle"},Pc={class:"align-middle text-center"},$c={width:"10%",class:"align-middle text-center"},Jc=["value","onInput"],Nc={class:"align-middle text-end"},Lc={class:"align-middle text-center"},Ac=["onClick"],Ec=Sc((function(){return Object(n["g"])("i",{class:"bi bi-cart-dash-fill"},null,-1)})),Vc=[Ec],Hc=Sc((function(){return Object(n["g"])("td",{colspan:"3"},"total",-1)})),Qc={width:"10%",class:"align-middle text-center"},Rc={class:"align-middle text-end"},Yc=Sc((function(){return Object(n["g"])("td",null,null,-1)})),Zc={key:1,class:"my-5"},Gc=Sc((function(){return Object(n["g"])("p",{class:"text-center lead"},"il n'y a pas d'article dans votre panier",-1)})),Wc=[Gc];function Kc(e,t,c,r,a,i){return e.count>0?(Object(n["s"])(),Object(n["f"])("section",Mc,[_c,Object(n["g"])("table",Tc,[Uc,Object(n["g"])("tbody",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e.products,(function(t,c){return Object(n["s"])(),Object(n["f"])("tr",{key:c},[Fc,Object(n["g"])("td",Dc,Object(n["B"])(t.product.name),1),Object(n["g"])("td",Pc,Object(n["B"])(t.price.price.toFixed(2))+"€/"+Object(n["B"])(t.price.quantity),1),Object(n["g"])("td",$c,[Object(n["g"])("input",{type:"number",min:"1",value:t.quantity,class:"form-control",onInput:function(c){return e.updateQuantity({item:t.product,price:t.price,quantity:parseInt(c.target.value)})}},null,40,Jc)]),Object(n["g"])("td",Nc,Object(n["B"])((t.price.price*t.quantity).toFixed(2))+"€",1),Object(n["g"])("td",Lc,[Object(n["g"])("button",{type:"button",class:"btn btn-outline-dark",title:"supprimer du panier",onClick:function(c){return e.delFromCart({item:t.product,price:t.price})}},Vc,8,Ac)])])})),128))]),Object(n["g"])("tfoot",null,[Object(n["g"])("tr",null,[Hc,Object(n["g"])("td",Qc,Object(n["B"])(e.quantity),1),Object(n["g"])("td",Rc,Object(n["B"])(e.total.toFixed(2))+"€",1),Yc])])])])):(Object(n["s"])(),Object(n["f"])("div",Zc,Wc))}var Xc={name:"cart-content",computed:Object(V["a"])({},Object(a["b"])("cart",["products","total","quantity","count"])),methods:Object(V["a"])({},Object(a["c"])("cart",["updateQuantity","delFromCart"]))};c("37ad");const en=W()(Xc,[["render",Kc],["__scopeId","data-v-1279a36e"]]);var tn=en,cn={class:"d-flex justify-content-center btn-group",role:"group"},nn=Object(n["g"])("label",{class:"btn btn-outline-secondary mx-2 flex-fill",for:"takeaway"},[Object(n["g"])("i",{class:"bi bi-shop fs-1"}),Object(n["g"])("span",{class:"fs-3 d-block"},"Je choisis à emporter")],-1),rn=Object(n["g"])("label",{class:"btn btn-outline-secondary mx-2 flex-fill",for:"delivery"},[Object(n["g"])("i",{class:"bi bi-house fs-1"}),Object(n["g"])("span",{class:"fs-3 d-block"},"Je choisis la livraison")],-1);function an(e,t,c,r,a,i){return Object(n["s"])(),Object(n["f"])("div",cn,[Object(n["g"])("input",{type:"radio",class:"btn-check",id:"takeaway",name:"mode",value:"takeaway",onChange:t[0]||(t[0]=function(t){return e.$emit("update:mode",t.target.value)})},null,32),nn,Object(n["g"])("input",{type:"radio",class:"btn-check",id:"delivery",name:"mode",value:"delivery",onChange:t[1]||(t[1]=function(t){return e.$emit("update:mode",t.target.value)})},null,32),rn])}var sn={name:"select-mode",props:{mode:String},emits:["update:mode"]};const on=W()(sn,[["render",an]]);var ln=on,un={name:"cart",data:function(){var e=new Date;return{mode:"",confirmed:!1,when:e.toISOString().split("T")[0]}},computed:Object(V["a"])(Object(V["a"])({},Object(a["b"])("cart",["count","deliverable"])),{},{canDeliver:function(){return"delivery"==this.mode&&(("delivery"!=this.mode||!this.deliverable)&&"disabled")}}),components:{Content:tn,SelectMode:ln}};const bn=W()(un,[["render",Bc]]);var pn=bn;delete We["Icon"].Default.prototype._getIconUrl,We["Icon"].Default.mergeOptions({iconRetinaUrl:c("584d"),iconUrl:c("6397"),shadowUrl:c("e2b9")});var dn=[{path:"/",name:"home",component:rt},{path:"/shop",name:"shop",component:tc},{path:"/cart",name:"cart",component:pn}],gn=Object(r["a"])({history:Object(r["b"])(),routes:dn}),mn=Object(n["c"])(be);mn.use(M),mn.use(gn),mn.mount("#app")},5947:function(e,t,c){},"84a7":function(e,t,c){}});
//# sourceMappingURL=index.922e72e7.js.map