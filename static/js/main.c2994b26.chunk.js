(this.webpackJsonpfilms=this.webpackJsonpfilms||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(9),r=a.n(n),i=(a(16),a(2)),l=a(3),h=a(5),j=a(4),o=a(0);var d=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("nav",{className:"nav blue-grey darken-4",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("a",{href:"!#",className:"brand-logo",children:"React Movies"}),Object(o.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"!#",children:"GitHub"})})})]})})})},b=(new Date).getFullYear();var p=function(){return Object(o.jsx)("footer",{className:"page-footer blue-grey darken-4",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",b," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"GitHub"})]})})})},u=a(8),O=a.n(u),m=a(10),v=a(11);var x=function(e){var t=e.Title,a=e.Year,c=e.Type,s=e.Poster,n=e.imdbID;return Object(o.jsxs)("div",{id:n,className:"card card__margin_zero",children:[Object(o.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(o.jsx)("img",{className:"activator",src:"N/A"===s?"http://dummyimage.com/305x435/99cccc.gif&text=".concat(t):s,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(o.jsxs)("p",{children:[a," ",Object(o.jsx)("span",{className:"right",children:c})]})]})]})};var g=function(e){var t=e.movies,a=Array.isArray(t);return Object(o.jsx)("div",{className:"movies",children:a?t.map((function(e){return Object(o.jsx)(x,Object(v.a)({},e),e.imdbID)})):Object(o.jsx)("h3",{children:"Nothing found"})})};var f=function(){return Object(o.jsx)("div",{className:"progress blue-grey",children:Object(o.jsx)("div",{className:"indeterminate blue-grey darken-4"})})},y=a(6),N=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",type:""},e.handleChange=function(t){e.setState({search:t.target.value})},e.handleChecked=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e.searchOnKey=function(t){"Enter"===t.key&&e.props.filterByMovies(e.state.search,e.state.type)},e.searchOnClick=function(){e.props.filterByMovies(e.state.search,e.state.type)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.search;return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{placeholder:"Search",id:"search",type:"text",className:"validate",value:e,onChange:this.handleChange,onKeyUp:this.searchOnKey}),Object(o.jsx)("button",{className:"waves-effect waves-light btn-small btn-small_position",onClick:this.searchOnClick,children:"Search"}),Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"with-gap",name:"type",type:"radio",value:"all",onChange:this.handleChecked,checked:"all"===this.state.type}),Object(o.jsx)("span",{children:"All"})]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"with-gap",name:"type",type:"radio",value:"movie",onChange:this.handleChecked,checked:"movie"===this.state.type}),Object(o.jsx)("span",{children:"Movies"})]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"with-gap",name:"type",type:"radio",value:"series",onChange:this.handleChecked,checked:"series"===this.state.type}),Object(o.jsx)("span",{children:"Series"})]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{className:"with-gap",name:"type",type:"radio",value:"game",onChange:this.handleChecked,checked:"game"===this.state.type}),Object(o.jsx)("span",{children:"Games"})]})})]})]})})}}]),a}(c.Component),k=N,w="4aeaa666",C=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],isLoaded:!1},e.getData=Object(m.a)(O.a.mark((function t(){var a,c,s,n,r=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.length>0&&void 0!==r[0]?r[0]:"halloween",c=r.length>1&&void 0!==r[1]?r[1]:"all",t.prev=2,t.next=5,fetch("https://www.omdbapi.com/?apikey=".concat(w,"&s=").concat(a).concat("all"!==c?"&type=".concat(c):""));case 5:return s=t.sent,t.next=8,s.json();case 8:n=t.sent,e.setState({movies:n.Search,isLoaded:!0}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0),e.setState({isLoaded:!1});case 16:case"end":return t.stop()}}),t,null,[[2,12]])}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.isLoaded;return Object(o.jsxs)("main",{className:"container content",children:[Object(o.jsx)(k,{filterByMovies:this.getData}),a?Object(o.jsx)(g,{movies:t}):Object(o.jsx)(f,{})]})}}]),a}(c.Component),S=C,D=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)(S,{}),Object(o.jsx)(p,{})]})}}]),a}(c.Component),M=D;r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c2994b26.chunk.js.map