(this["webpackJsonpreactive-marquee"]=this["webpackJsonpreactive-marquee"]||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"pages":[{"title":"Industries","slug":"industries","blocks":[{"type":"marquee","headline":"Industries","subhead":"Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.","cta":"Vestibulum id ligula porta felis euismod semper.","background":"slide_one.jpg"}]},{"title":"Services","slug":"services","blocks":[{"type":"marquee","headline":"Services","subhead":"Cras mattis consectetur purus sit amet fermentum.","cta":"Donec id elit non mi porta gravida at eget metus.","background":"slide_two.jpg"}]},{"title":"About Us","slug":"about-us","blocks":[{"type":"marquee","headline":"Maecenas sed diam eget risus varius blandit sit amet non magna","subhead":"Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.","cta":"Nullam quis risus eget urna mollis ornare vel eu leo.","background":"slide_three.jpg"}]}]}')},36:function(e,t,a){},37:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(25),c=a.n(i),r=(a(36),a(15)),l=a(26),o=a(27),u=a(31),d=a(30),g=a(10),b=a(2),m=a(28),p=(a(37),a(1)),h=function(e){var t=e.data,a=e.background;return Object(p.jsxs)("div",{className:"marquee  ".concat(a),children:[t.blocks[0].headline,Object(p.jsx)("hr",{}),t.blocks[0].subhead]})},j=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Error: Page does not exist!"})})},k=function(e){var t=e.data,a=e.handleClick;return Object(p.jsx)("div",{className:"navlinks",children:t.map((function(e){return Object(p.jsx)(g.b,{to:"/".concat(e.slug),onClick:a,className:e.slug===window.location.pathname.replace("/","")?"navlinks__link navlinks__link--active":"navlinks__link navlinks__link--unactive",children:e.title},e.slug)}))})},v=a.p+"static/media/abc.37994532.svg",f=function(e){var t=e.data,a=e.style,s=e.handleClick;return Object(p.jsxs)("div",{className:"layout",style:a,children:[Object(p.jsx)("img",{src:v,className:"App-logo",alt:"logo"}),Object(p.jsx)(k,{data:t,handleClick:s})]})},O=(a(44),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).config={headers:{"Access-Control-Allow-Origin":"*"}},e.state={isLoading:!0,pageData:[],backgroundClass:""},e.handleClick=function(t){e.state.pageData.pages.forEach((function(a){a.title===t.target.innerText&&(console.log(a.blocks[0].background.replace(".jpg","")),e.setState({backgroundClass:a.blocks[0].background.replace(".jpg","")}))}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({pageData:m,isLoading:!1})}},{key:"render",value:function(){if(this.state.isLoading)return Object(p.jsx)("div",{className:"container",children:"Loading..."});var e="";return!1===this.state.isLoading&&""===this.state.backgroundClass&&this.state.pageData.pages.forEach((function(t){t.slug===window.location.pathname.replace("/","")&&(e=t.blocks[0].background.replace(".jpg",""))})),Object(p.jsx)(g.a,{children:Object(p.jsxs)("div",{className:"container ".concat(this.state.backgroundClass||e),children:[Object(p.jsx)(f,{data:this.state.pageData.pages,handleClick:this.handleClick}),Object(p.jsxs)(b.c,{children:[this.state.pageData.pages.map((function(e){return Object(p.jsx)(b.a,{path:"/".concat(e.slug),render:function(t){return Object(p.jsx)(h,Object(r.a)(Object(r.a)({},t),{},{data:e}))}},e.slug)})),Object(p.jsx)(b.a,{component:j})]})]})})}}]),a}(s.Component)),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),i(e),c(e)}))};c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),x()}},[[63,1,2]]]);
//# sourceMappingURL=main.6d85f760.chunk.js.map