(this["webpackJsonpreactive-marquee"]=this["webpackJsonpreactive-marquee"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},37:function(e,t,a){},38:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(25),c=a.n(i),r=(a(37),a(14)),o=a(26),u=a(27),l=a(32),d=a(31),g=a(23),b=a(1),p=a(28),h=(a(38),a(3)),m=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Error: Page does not exist!"})})},j=a(29),f=a.n(j),v=s.a.lazy((function(){return a.e(3).then(a.bind(null,67))})),k=s.a.lazy((function(){return Promise.all([a.e(5),a.e(4)]).then(a.bind(null,68))})),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,pageData:[],backgroundClass:""},e.handleClick=function(t){e.state.pageData.pages.forEach((function(a){a.title===t.target.innerText&&(console.log(window.location.hash),e.setState({backgroundClass:a.blocks[0].background.replace(".jpg","")}))}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json").then((function(t){e.setState({pageData:t.data,isLoading:!1})})).catch((function(t){console.log("Error",t),e.setState({pageData:p,isLoading:!1})}))}},{key:"render",value:function(){if(this.state.isLoading)return Object(h.jsx)("div",{className:"container",children:"Loading..."});var e="";return!1===this.state.isLoading&&""===this.state.backgroundClass&&this.state.pageData.pages.forEach((function(t){t.slug===window.location.hash.replace("#/","")&&(e=t.blocks[0].background.replace(".jpg",""))})),Object(h.jsx)(g.a,{children:Object(h.jsx)("div",{className:"container ".concat(this.state.backgroundClass||e),children:Object(h.jsxs)(n.Suspense,{fallback:Object(h.jsx)("div",{children:"Loading..."}),children:[Object(h.jsx)(v,{data:this.state.pageData.pages,handleClick:this.handleClick}),Object(h.jsxs)(b.c,{children:[this.state.pageData.pages.map((function(e){return Object(h.jsx)(b.a,{path:"/".concat(e.slug),render:function(t){return Object(h.jsx)(k,Object(r.a)(Object(r.a)({},t),{},{data:e}))}},e.slug)})),Object(h.jsx)(b.a,{component:m})]})]})})})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),x()}},[[63,1,2]]]);
//# sourceMappingURL=main.7df0eeff.chunk.js.map