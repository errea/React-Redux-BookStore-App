(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),o=c(16),s=c.n(o),a=(c(30),c(14)),i=c(3),j=c(10),u=c(18),b=c(24),l=c.n(b),O=c(25),d=c(11),p=c(15),h=c(5),x=c.n(h),f=c(9),m="".concat("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/").concat("1xQvEGxmD6SUYX71Au1O","/books/"),k=function(){var e=Object(f.a)(x.a.mark((function e(t){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={item_id:t.id,title:t.title,category:t.category},e.next=3,fetch(m,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(c)});case 3:return n=e.sent,e.abrupt("return",n.status);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m).concat(t),{method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return c=e.sent,e.abrupt("return",c.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="books/booksslice/GET_BOOKS",y="books/booksslice/GET_BOOKS_SUCCESS",E="books/booksslice/GET_BOOKS_ERR",S="".concat("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/").concat("1xQvEGxmD6SUYX71Au1O","/books/"),N=function(){return function(){var e=Object(f.a)(x.a.mark((function e(t){var c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g}),e.next=3,fetch(S);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",t({type:y,books:n}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C="bookStore/books/ADD_BOOK",w="bookStore/books/REMOVE_BOOK",T={books:[],pending:!1,error:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return k(t.payload),e;case w:var c=Object.fromEntries(Object.entries(e.books).filter((function(e){return Object(p.a)(e,1)[0]!==t.payload})));return v(t.payload),Object(d.a)(Object(d.a)({},e),{},{pending:!1,books:c});case g:return Object(d.a)(Object(d.a)({},e),{},{pending:!0});case y:return Object(d.a)(Object(d.a)({},e),{},{pending:!1,books:t.books});case E:return Object(d.a)(Object(d.a)({},e),{},{pending:!1,error:t.error});default:return e}},B=Object(u.b)({booksReducer:A}),D=Object(u.c)(B,Object(u.a)(O.a,l.a)),R=c(1),F=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"title-navbar",children:[Object(R.jsx)("h1",{className:"title-h1",children:"Bookstore CMS"}),Object(R.jsx)("nav",{className:"nav-links",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)(a.b,{to:"/",children:"BOOKS"})}),Object(R.jsx)("li",{children:Object(R.jsx)(a.b,{to:"/categories",children:"CATEGORIES"})})]})})]}),Object(R.jsx)("span",{children:Object(R.jsx)("i",{})})]})},K=function(e){var t=e.title,c=e.category;return Object(R.jsxs)("div",{children:[Object(R.jsx)("p",{className:"book-category",children:c}),Object(R.jsx)("p",{className:"book-title",children:t})]})},_=function(e){var t=e.id,c=Object(j.b)(),n=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:w,payload:t});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(R.jsxs)("div",{className:"book-actions",children:[Object(R.jsx)("a",{href:"/#",children:"Comments"})," | ",Object(R.jsx)("a",{href:"/#",onClick:n,children:"Remove"})," | ",Object(R.jsx)("a",{href:"/#",children:"Edit"})]})},G=function(){return Object(R.jsxs)("div",{className:"book-completion-status",children:[Object(R.jsx)("i",{}),Object(R.jsx)("p",{className:"completion-percentage",children:"0%"}),Object(R.jsx)("p",{children:"Completed"})]})},U=function(){return Object(R.jsxs)("div",{className:"book-progress",children:[Object(R.jsx)("p",{children:"CURRENT CHAPTER"}),Object(R.jsx)("p",{className:"book-progress-chapter",children:"Introduction"}),Object(R.jsx)("button",{type:"button",children:"UPDATE PROGRESS"})]})},P=function(e){var t=e.id,c=e.title,n=e.category;return Object(R.jsxs)("div",{className:"book-row",children:[Object(R.jsxs)("div",{className:"book-first-column",children:[Object(R.jsx)(K,{title:c,category:n}),Object(R.jsx)(_,{id:t})]}),Object(R.jsxs)("div",{className:"book-remaining-column",children:[Object(R.jsx)(G,{}),Object(R.jsx)(U,{})]})]})},I=function(){var e=[],t=Object(j.b)();Object(n.useEffect)((function(){t(N())}),[]);var c=Object(j.c)((function(e){return e.booksReducer.books}));c.error?c=[]:Object.keys(c).forEach((function(t){c[t].map((function(c){return e.push(Object(R.jsx)(P,{id:t,title:c.title,category:c.category},t))}))}));return Object(R.jsx)(R.Fragment,{children:e})},J=c(39),L=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],r=t[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),a=s[0],i=s[1],u=Object(j.b)(),b=function(){var e=Object(f.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={id:Object(J.a)(),category:c,title:a},u({type:C,payload:n}),r(""),i(""),e.next=7,u(N());case 7:document.location.reload(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h2",{children:"ADD NEW BOOK"}),Object(R.jsxs)("form",{onSubmit:b,className:"add-book-form",children:[Object(R.jsx)("input",{name:"title",className:"title-input",placeholder:"Book title",value:a,onChange:function(e){i(e.target.value)},required:!0}),Object(R.jsxs)("select",{className:"category-select",name:"category",id:"categories",value:c,onChange:function(e){r(e.target.value)},required:!0,children:[Object(R.jsx)("option",{defaultValue:"",children:"Category"}),Object(R.jsx)("option",{value:"action",children:"Action"}),Object(R.jsx)("option",{value:"science-fiction",children:"Science Fiction"}),Object(R.jsx)("option",{value:"economy",children:"Economy"})]}),Object(R.jsx)("input",{className:"add-book-button",type:"submit",value:"ADD BOOK"})]})]})},M=function(){return Object(R.jsx)("h2",{children:"Await ....."})},q=function(){return Object(R.jsx)(j.a,{store:D,children:Object(R.jsxs)(a.a,{children:[Object(R.jsx)(F,{}),Object(R.jsxs)(i.c,{children:[Object(R.jsxs)(i.a,{exact:!0,path:"/",children:[Object(R.jsx)(I,{}),Object(R.jsx)(L,{})]}),Object(R.jsx)(i.a,{path:"/categories",children:Object(R.jsx)(M,{})})]})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),o(e),s(e)}))};s.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(q,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.985b90a6.chunk.js.map