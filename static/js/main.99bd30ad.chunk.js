(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(n,t,e){n.exports=e(150)},150:function(n,t,e){"use strict";e.r(t);var i=e(1),a=e(0),r=e.n(a),o=e(90),l=e.n(o),c=e(33),s=e(21),u=e(2),d=e(6),m=e(7),p=e(9),h=e(8),f=e(10),b=e(91),g=e.n(b);function v(){var n=Object(i.a)(["\n  color:#fff;\n  margin: 0;\n  margin-top: 8px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 29px;\n  height: 29px;\n  min-width: 10px;\n  letter-spacing:1px;\n  font-style:italic;\n"]);return v=function(){return n},n}function w(){var n=Object(i.a)(["\n  position: absolute;\n  top: 50%;\n  left: -140px;\n  margin: 0;\n  font-size: .75rem;\n  font-style: italic;\n  line-height: 2;\n  letter-spacing: 0.5px;\n  transform: translate3d(0, -85%, 0);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity, transform;\n  transition-duration: 0.2s;\n  transition-delay: 0s;\n  color:rgba(255,255,255,0.8);\n  z-index:3;\n"]);return w=function(){return n},n}function x(){var n=Object(i.a)(["\n  padding:0;\n  margin:0;\n  background:none;\n  border:0;\n  text-align:left;\n  position:relative;\n  z-index:3;\n  color:#fff;\n  transition: transform 0.5s, filter 0.5s;\n  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  &:hover{\n    transform:translateY(-10px);\n    > p{\n      transform: translate3d(0, -100%, 0);\n      opacity: 1;\n      transition-delay: 0.4s;\n    }\n    &:after{\n      transform: scaleX(1);\n      transform-origin: left center;\n      transition-delay: 0.2s;\n    }\n    >img{\n      filter:brightness(70%);\n    }\n  }\n  &:after{\n    content: '';\n    position: absolute;\n    top: 50%;\n    margin-top:2px;\n    left: -130px;\n    height: 1px;\n    width: 180px;\n    background-color: rgba(255,255,255,0.8);\n    transform: scaleX(0);\n    transform-origin: right center;\n    transition: transform;\n    transition-duration: 0.5s;\n    transition-delay: 0s;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  > img{\n    max-width:600px;\n    filter:brightness(80%);\n    box-shadow:0px 20px 35px 0px rgba(0, 0, 0, 0.5);\n    @media screen and (max-width : 425px) {\n      ","\n    }\n  }\n"]);return x=function(){return n},n}var y=function(n){function t(){var n,e;Object(d.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(p.a)(this,(n=Object(h.a)(t)).call.apply(n,[this].concat(a)))).state={title:"",mobile:!1},e.articleMouseOver=function(n){return function(t){var i=n.title;e._typingEffect(i)}},e._typingEffect=function(n){var t=0;e.timer=setInterval(function(){t<n.length?(e.setState({title:e.state.title+n.charAt(t)}),t++):clearInterval(e.timer)},e._randDelay(30,70))},e._randDelay=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},e._articleMouseOut=function(){e.setState({title:""}),clearInterval(e.timer)},e}return Object(f.a)(t,n),Object(m.a)(t,[{key:"componentWillMount",value:function(){window.innerWidth<768&&this.setState({mobile:!0})}},{key:"render",value:function(){var n=this.state,t=n.mobile,e=n.title,i=this.props,a=i.article,o=i.viewIsOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{onMouseOver:this.articleMouseOver(a),onMouseOut:this._articleMouseOut,onClick:o,imgSize:a.imgSize},r.a.createElement(k,null,a.label," the project"),r.a.createElement("img",{src:"/portfolio"+"".concat(a.img),alt:a.title}),r.a.createElement(j,null,t?a.title:e)))}}]),t}(r.a.Component),E=u.b.button(x(),function(n){return n.imgSize?"height:50vh; width:auto;":"width:50vh; height:auto;"}),k=u.b.p(w()),j=u.b.h2(v()),O=e(27),S=e(97);O.b.initAll();var z=function(n){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(m.a)(t,[{key:"transformDelta",value:function(n,t){if(!/wheel/.test(t.type))return n;var e=n.x,i=n.y;return this.options.vertical?n:{y:0,x:Math.abs(e)>Math.abs(i)?e:i}}}]),t}(O.a);z.pluginName="choiceScroll",z.defaultOptions={vertical:!0},O.b.use(z,S.a);var C=O.b;function I(){var n=Object(i.a)(["\n  z-index:2;\n  position:fixed;\n  width:100vw;\n  height:100vh;\n  top:0;\n  left:0;\n  color:#000;\n  transform:translateY(100vh);\n  background:#fff;\n  &.animationIn{\n    transform:translateY(0vh);\n    transition:transform 0.4s cubic-bezier(0.455,0.03,0.515,0.955);\n  }\n  &.animationReady{\n    transform:translateY(0vh);\n  }\n  &.animationOut{\n    transform:translateY(-100vh);\n    transition:transform 0.4s cubic-bezier(0.455,0.03,0.515,0.955);\n  }\n"]);return I=function(){return n},n}function _(){var n=Object(i.a)(["\n  z-index:3;\n  position:fixed; \n  padding: 21px 22px; \n  background: #fff; \n  border: 1px solid rgba(0,0,0,0.5); \n  cursor:pointer; \n  box-shadow: 3px 7px 9px -4px rgba(0,0,0,0.1);\n  right:5.26593vw;\n  top:5.26593vw;\n  svg{\n    width:14px; height:auto;\n  }\n"]);return _=function(){return n},n}function M(){var n=Object(i.a)(["\n  width:100vw;\n  position:relative;\n  z-index:1;\n  .scroll-content{\n    height:100%;\n  }\n"]);return M=function(){return n},n}function A(){var n=Object(i.a)(["\n  font-size:",";\n  font-weight:",";\n  color:",";\n  margin:",";\n  font-style:",";\n  padding:0;\n  overflow:hidden;\n  position:relative;\n  > span{\n    display:inline-block;\n    transition-delay: ","s;  \n    transform:translate3d(0, 100%, 0);    \n    transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);\n  }\n  &.active{\n    >span{\n      transform:translate3d(0, 0, 0);\n    }\n  }\n"]);return A=function(){return n},n}function D(){var n=Object(i.a)(["\n  overflow:hidden;\n  width:100vw;\n  height:100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  >div:first-child{\n    z-index:1;\n  }\n"]);return D=function(){return n},n}function N(){var n=Object(i.a)(["\n  background-image:url(",");\n  position:absolute;\n  top:50%;\n  left:50%;\n  bottom:0;\n  right:0;\n  width:120vw;\n  height:120vh;\n  background-color:rgba(0,0,0,0.25);\n  background-blend-mode:multiply;\n  filter: blur(10px);\n  background-size:cover;\n  background-position:center;  \n  transform:translate(-50%, -50%);\n"]);return N=function(){return n},n}function U(){var n=Object(i.a)(["\n  width:100vw;\n  height:100vh;\n"]);return U=function(){return n},n}function P(){var n=Object(i.a)(["\n  font-size:14px;\n  line-height:1.5em;\n  max-width:1024px;\n  margin:0 auto;\n  padding:10.53186vw 5.26593vw;\n  position:relative;\n  >div {\n    overflow:hidden;\n    > p{\n      padding:0;\n      margin:0px 0 20px 0;\n      width:73%;\n      float:left;\n      display:block;\n      &:before{\n        content:'';\n        display:block;\n        clear: both;\n      }\n    }\n    > ol{\n      list-style-type:disc;\n      padding:0;\n      margin:0;\n      padding-left:17px;\n      display:block;\n      width:22%;\n      float:right;\n    }\n  }\n  >a {\n    margin-top:40px;\n    display:inline-block;\n    position:relative;\n    color:#512da8;\n    text-decoration:underline;\n  }\n  @media screen and (max-width : 425px) {\n    display:block!important;\n    >div{\n      > p{\n        display:block;\n        margin:20px 0 20px 0;\n        width:100%;\n        float:none;\n      }\n      > ol{\n        display:block;\n        width:100%;\n        float:none;\n      }\n    }\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(i.a)(["\n  // height:100vh;\n  background:#f5f5f5;\n"]);return R=function(){return n},n}function F(){var n=Object(i.a)(["\n  background:#fff;\n  height:auto !important;\n  >section{\n    padding:0 5.26593vw 5.26593vw 5.26593vw;\n    display:block;\n    justify-content:center;\n    @media screen and (max-width : 425px) {\n      padding:0 0 5.26593vw 0;\n    }\n    img{\n      max-width:2000px;\n      width:100vw;\n      height:auto !important;\n    }\n  }\n"]);return F=function(){return n},n}function H(){var n=Object(i.a)(["\n  background:#fff;\n  width:100%;\n  height:200px;\n  position:absolute;\n  left:0;\n  bottom:0;\n  z-index:0;\n"]);return H=function(){return n},n}function L(){var n=Object(i.a)(["\n  background:red;\n  // background:#f5f5f5;\n  width:100vw;\n  height:100vh;\n  position:fixed;\n  top:100vh;\n  left:0;\n  z-index:888;\n  &.active{\n    transition:all 0.3s cubic-bezier(0.455,0.03,0.515,0.955);\n    transform:translateY(-100vh);\n  } \n  &.ready{\n    z-index:-1;\n  }\n"]);return L=function(){return n},n}function T(){var n=Object(i.a)(["\n  background:#f5f5f5;\n  width:100vw;\n  height:100vh;\n  position:fixed;\n  top:0vh;\n  left:0;\n  z-index:888;\n  &.active{\n    // transition-delay: 0.5s;\n    transition:all 0.3s cubic-bezier(0.455,0.03,0.515,0.955);\n    transform:translateY(-100vh);\n  } \n  &.ready{\n    z-index:-1;\n  }\n"]);return T=function(){return n},n}var B=function(n){function t(){var n,e;Object(d.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(p.a)(this,(n=Object(h.a)(t)).call.apply(n,[this].concat(a)))).state={animationView:null,dummyBox:!1,animationEvent:null,closeCheck:!1,openChek:!0},e.handleClick=function(n){n.preventDefault(),e.setState({animationView:"animationOut",animationEvent:"animationClose"})},e.transitionEnd=function(){"animationIn"===e.state.animationView&&e.setState({animationEvent:"active"}),"animationOut"===e.state.animationView&&e.props.viewIsClose()},e}return Object(f.a)(t,n),Object(m.a)(t,[{key:"componentDidMount",value:function(){var n=this;console.log("a"),setTimeout(function(){return n.setState({animationView:"animationIn"})},0),C.init(document.querySelector(".view"),{overscroll:!1}).addListener(function(t){t.offset.y>window.innerHeight?n.setState({dummyBox:!0}):n.setState({dummyBox:!1})})}},{key:"_getAnimationBox",value:function(){return this.state.openChek?r.a.createElement(W,{className:this.state.animationEvent}):this.state.openChek?void 0:r.a.createElement(q,{className:this.state.animationEvent})}},{key:"render",value:function(){var n=this.props,t=n.viewContent,e=n.view,i=this._getAnimationBox();return r.a.createElement(tn,{effect:e,onTransitionEnd:this.transitionEnd,className:this.state.animationView},r.a.createElement(Q,{className:"viewHeader"},r.a.createElement("div",null,r.a.createElement(Z,{className:this.state.animationEvent,delay:"1000",fontSize:"42px",fontWeight:"700",fontStyle:"italic",margin:"0 0 30px 0"},r.a.createElement("span",null,t.content[0].header_h1)),r.a.createElement(Z,{className:this.state.animationEvent,delay:"5"},r.a.createElement("span",null,t.label," the project")),r.a.createElement(Z,{className:this.state.animationEvent,delay:"5",margin:"6px 0 0 0"},r.a.createElement("span",null,t.content[0].header_h2))),r.a.createElement("div",null),r.a.createElement(G,{backgroundImage:"/portfolio"+"".concat(t.content[0].header_img)})),r.a.createElement(nn,{onClick:this.handleClick},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.4 59.4"},r.a.createElement("path",{d:"M29.7 45.3L0 15.6l1.4-1.5 28.3 28.3L58 14.1l1.4 1.5z"}))),r.a.createElement($,{className:"view"},r.a.createElement(K,null),r.a.createElement(Y,null,r.a.createElement(V,null,r.a.createElement(X,null,r.a.createElement("div",null,r.a.createElement("ol",null,t.content[0].clist.map(function(n,t){return r.a.createElement("li",{key:t},n)})),r.a.createElement("p",null,t.content[0].description.split("\n").map(function(n,t){return r.a.createElement("span",{key:t},n,r.a.createElement("br",null))}))),r.a.createElement("a",{target:"_blank",href:t.content[0].url,rel:"noopener noreferrer"},t.content[0].url))),t.content[0].section_imges.map(function(n,t){return r.a.createElement("section",{key:t},r.a.createElement("img",{src:"/portfolio"+"".concat(n.imgUrl),alt:n.Alt}))}))),this.state.dummyBox&&r.a.createElement(J,null),i)}}]),t}(r.a.Component),W=u.b.div(T()),q=u.b.div(L()),J=u.b.div(H()),Y=u.b.div(F()),V=u.b.div(R()),X=u.b.div(P()),K=u.b.div(U()),G=u.b.div(N(),function(n){return n.backgroundImage}),Q=u.b.div(D()),Z=u.b.p(A(),function(n){return n.fontSize?n.fontSize:"14px"},function(n){return n.fontWeight?n.fontWeight:"100"},function(n){return n.fontColor?n.fontColor:"#fff"},function(n){return n.margin?n.margin:"0"},function(n){return n.fontStyle?n.fontStyle:"inherit"},function(n){return n.delay}),$=u.b.div(M()),nn=u.b.button(_()),tn=u.b.div(I());function en(){var n=Object(i.a)(["\n  padding:0;\n  margin:0;\n  list-style:none;\n  display:flex;\n  top: 7.898895vw;\n  bottom: 4.26593vw;\n  position:absolute;\n  overflow:hidden;\n  &.articlesFadeIn{\n    >li{\n      opacity:1;\n      transform: translateX(0px) !important;\n    }\n  }\n  >li{\n    opacity: 0;\n    transform: translateX(700px);\n    padding:1vw 5.26593vw;\n    display: flex;\n    &:first-child{\n      align-items: flex-start;\n      transition:all 0.9s cubic-bezier(0.455,0.03,0.515,0.955);\n      >div{\n        width:340px;\n        padding-top:5.26593vw;\n        > p{\n          font-size: 1.2125rem;\n          line-height: 1.7em;\n          margin: 0 0.2em;\n          font-weight: 200;\n        }\n      }\n    }\n    &:nth-child(2){\n      > button >img{\n        height:560px;\n        width:auto;\n        @media screen and (max-width : 425px) {\n          height:50vh;\n        }\n      }\n    }\n    &:nth-child(4){\n      > button >img{\n        @media screen and (max-width : 425px) {\n          max-width:260px;\n        }\n      }\n    }\n  }\n  @media screen and (max-width : 1024px) {\n    top: 15.79779vw;\n    bottom: 10.79779vw;\n  }\n  @media screen and (max-width : 425px) {\n    top: 23.79779vw;\n    bottom: 10.79779vw;\n    >li{\n      padding:0 15.26593vw\n      &:first-child{\n        padding-left:5.26593vw\n      }\n    }\n    \n  }\n"]);return en=function(){return n},n}function an(){var n=Object(i.a)(["\n  transition:all 1.","s cubic-bezier(0.455,0.03,0.515,0.955);\n  &:nth-child(1n){\n    align-items: center;\n  }\n  &:nth-child(2n){\n    align-items: flex-start;\n  }\n  &:nth-child(3n){\n    align-items: flex-end;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(i.a)(["\n  > .scroll-content{\n    height:100%;\n  }\n"]);return rn=function(){return n},n}var on=function(n){function t(){var n,e;Object(d.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(p.a)(this,(n=Object(h.a)(t)).call.apply(n,[this].concat(a)))).state={viewIsOpen:!1,viewContent:null,articlesFadeIn:null},e._viewIsOpen=function(n){return function(){e.setState({viewIsOpen:!0,viewContent:n})}},e._viewIsClose=function(){e.setState({viewIsOpen:!1,viewContent:null})},e}return Object(f.a)(t,n),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({articlesFadeIn:"articlesFadeIn"}),C.init(document.querySelector(".horizontalScroll"),{overscroll:{effect:"bounce",damping:.1}}).updatePluginOptions("choiceScroll",{vertical:!1})}},{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ln,{className:"horizontalScroll"},r.a.createElement(sn,{className:this.state.articlesFadeIn},r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694 ",r.a.createElement("strong",null,"\uae40\uc7ac\ud604")," \uc785\ub2c8\ub2e4."),r.a.createElement("p",null,"\uc800\uc758 ",r.a.createElement("strong",null,"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"),"\uc5d0 \uc624\uc2e0\uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."))),g.a.results.map(function(t){return r.a.createElement(cn,{key:t.id,delay:t.id},r.a.createElement(y,{article:t,viewIsOpen:n._viewIsOpen(t)}))}))),this.state.viewIsOpen&&r.a.createElement(B,{view:this.state.viewIsOpen,viewContent:this.state.viewContent,viewIsClose:this._viewIsClose}))}}]),t}(a.Component),ln=u.b.div(rn()),cn=u.b.li(an(),function(n){return n.delay}),sn=u.b.ul(en());function un(){var n=Object(i.a)(["\n  position:fixed;\n  z-index:2;\n  top:5.26593vw;\n  left:5.26593vw;\n  right:5.26593vw;\n  letter-spacing: -0.4px;\n  >div{\n    width:65%;\n    display:inline-block;\n    >a{\n      font-size:2rem;\n      font-weight:700;\n      transition: all 0.5s ease;\n    }\n  }\n  >nav{\n    width:35%;\n    display:inline-block;\n    text-align:right;\n    >a{\n      position:relative;\n      margin-left:30px;\n      font-weight:100;\n      font-size:0.875rem;\n      &:hover{\n        &:after{\n          transform: scaleX(1);\n          transform-origin: left center;\n        }\n      }\n      &:after{\n        content: '';\n        position: absolute;\n        left: 0;\n        height:1px;\n        bottom: -3px;\n        width: 100%;\n        transform: scaleX(0);\n        transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n        background:rgba(255,255,255,0.7);\n        transform-origin:right center;\n      }\n      &:first-child{\n        margin-left:0;\n        @media screen and (max-width : 425px) {\n          display:none;\n        }\n      }\n    }\n  }\n"]);return un=function(){return n},n}var dn=function(n){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(mn,null,r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"KimJaeHyun :)")),r.a.createElement("nav",null,r.a.createElement(c.b,{to:"/"},"Work"),r.a.createElement(c.b,{to:"/resume"},"Resume")))}}]),t}(r.a.Component),mn=u.b.header(un());function pn(){var n=Object(i.a)(["\n  position:fixed;\n  bottom:4.632965vw;\n  left:5.26593vw;\n  right:5.26593vw;\n  font-size:12px;\n  color:rgba(255,255,255,0.8)\n"]);return pn=function(){return n},n}var hn=function(n){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(fn,null,"Copyright by Jaehyun Kim. 2019")}}]),t}(r.a.Component),fn=u.b.div(pn()),bn=e(40),gn=e.n(bn);function vn(){var n=Object(i.a)(["\n  >h2{\n    font-size:2.4em;\n    margin-bottom:1.5em;\n  }\n  transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);\n  transition-delay: ","s;\n  margin-bottom:140px;\n  max-width:1000px;\n  > li{\n    padding-bottom:3.75rem;\n    margin-bottom: 3.75rem;\n    border-bottom:1px solid rgba(255, 255, 255, 0.1);\n    &:last-child{\n      border-bottom:0;\n    }\n    >div{\n      &:first-child{\n        float:left;\n        width:36%;\n        >h3{\n          font-size:1.25rem;\n          font-weight:700;\n          margin-bottom:0;\n        }\n        > p {\n          font-weight:100;\n          margin-bottom:0;\n          font-size:12px;\n          color:rgba(255,255,255,0.6)\n        }\n        @media screen and (max-width : 768px) {\n          width:100%;\n          float:none;\n          margin-bottom:40px;\n        }\n      }\n      &:last-child{\n        float:left;\n        width:64%;\n        font-weight:200;\n        >h5{\n          margin-bottom:0;\n          color:rgba(255,255,255,0.5);\n          padding-top:12px;\n          &:first-child{\n            padding-top:0;\n          }\n        }\n        p{\n          font-weight:100;\n          margin-bottom:0;\n          line-height:1.7em;\n        }\n        > ol{\n          &.skill{\n            margin-top:20px;  \n          }\n          margin-top:16px;\n          list-style-type:disc;\n          // font-size:14px;\n          padding:0;\n          padding-left:17px;\n          display:block;\n          >li{\n            margin-top:10px;\n          }\n        }\n        @media screen and (max-width : 768px) {\n          width:100%;\n          float:none;\n        }\n      }\n    }\n  }\n  li:after{\n    content:'';\n    display:block;\n    clear: both\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(i.a)(["\n  line-height:1.8em;\n  font-weight:200;\n  margin:0 0 10px 0;\n  transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);\n  transition-delay: ","s;\n"]);return wn=function(){return n},n}function xn(){var n=Object(i.a)(["\n  padding-top:5.26593vw;\n  margin-bottom:140px;\n"]);return xn=function(){return n},n}function yn(){var n=Object(i.a)(["\n  a {\n    display:inline-block;\n    padding:4px 6px;\n    text-decoration:none !important;\n    color:#a590ff !important;\n    box-shadow: inset 0px -0.1rem 0 0 #a590ff;\n    transition: box-shadow 0.2s;\n    &:hover{\n      box-shadow: inset 0 -2.5rem 0 0 #a590ff;\n      color:#fff !important;\n    }\n  }\n  padding: 8.898895vw 5.26593vw 8.898895vw;\n  @media screen and (max-width : 1024px) {\n    padding: 15.79779vw 5.26593vw 15.79779vw;\n  }\n  @media screen and (max-width : 425px) {\n    padding: 30.79779vw 5.26593vw 30.79779vw;\n  }\n  > h2{\n    font-size:1.5rem;\n    margin-bottom:60px;\n  }\n  >ul, >div >p{\n    opacity:0;\n    transform:translateY(80px);\n  }\n  &.aboutFadeIn{\n    >ul, >div >p{\n      opacity:1;\n      transform:translateY(0px);\n    }\n  }\n"]);return yn=function(){return n},n}C.initAll();var En=function(n){function t(){var n,e;Object(d.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=Object(p.a)(this,(n=Object(h.a)(t)).call.apply(n,[this].concat(a)))).state={aboutFadeIn:null},e}return Object(f.a)(t,n),Object(m.a)(t,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){return n.setState({aboutFadeIn:"aboutFadeIn"})},0),this.scrollbar=C.init(document.querySelector(".about"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(kn,{className:this.state.aboutFadeIn},r.a.createElement(jn,null,gn.a.contents.map(function(n,t){return r.a.createElement(On,{key:t,delay:.3*t},n)})),r.a.createElement(Sn,{delay:"1.5"},r.a.createElement("h2",null,"Work"),gn.a.companysData.map(function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement("h3",null,n.title),r.a.createElement("p",null,n.period)),r.a.createElement("div",null,n.description.map(function(n,t){return r.a.createElement("p",{key:t},n)})))})),r.a.createElement(Sn,null,r.a.createElement("h2",null,"Project"),gn.a.projectsData.map(function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("a",{href:n.link,target:"_blank",rel:"noopener noreferrer"},n.title)),r.a.createElement("p",null,n.period)),r.a.createElement("div",null,r.a.createElement("h5",null,"\uc8fc\uc694\ub0b4\uc6a9"),r.a.createElement("p",null,n.description.split("\n").map(function(n,t){return r.a.createElement("span",{key:t},n,r.a.createElement("br",null))})),r.a.createElement("h5",null,"\uae30\uc5ec\ud55c \uc810"),r.a.createElement("ol",null,n.contribution.map(function(n,t){return r.a.createElement("li",{key:t},n)})),r.a.createElement("h5",null,"\uc0ac\uc6a9\ud55c Skill \ub610\ub294 \uc9c0\uc2dd"),r.a.createElement("p",null,n.techstack),r.a.createElement("h5",null,"\uacb0\uacfc/\uc131\uacfc"),r.a.createElement("p",null,n.result.split("\n").map(function(n,t){return r.a.createElement("span",{key:t},n,r.a.createElement("br",null))}))))})),r.a.createElement(Sn,null,r.a.createElement("h2",null,"SKILL"),gn.a.skillsData.map(function(n){return r.a.createElement("li",{key:n.id},r.a.createElement("div",null,r.a.createElement("h3",null,n.title)),r.a.createElement("div",null,r.a.createElement("ol",{className:"skill"},n.description.map(function(n,t){return r.a.createElement("li",{key:t},n)}))))})),r.a.createElement(Sn,null,r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:wogus4041@naver.com",rel:"noopener noreferrer"},"wogus4041@naver.com")),r.a.createElement("p",null,"010-6663-0222"))))}}]),t}(r.a.Component),kn=u.b.div(yn()),jn=u.b.div(xn()),On=u.b.p(wn(),function(n){return n.delay}),Sn=u.b.ul(vn(),function(n){return n.delay});function zn(){var n=Object(i.a)(["\n\n"]);return zn=function(){return n},n}var Cn=function(n){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(In,null,r.a.createElement("h3",null,this.props.match.params.id),r.a.createElement("p",null,this.props.location.state.title),r.a.createElement("p",null,this.props.location.state.userName))}}]),t}(r.a.Component),In=u.b.div(zn());function _n(){var n=Object(i.a)(['\n  body, html{\n    background:#1f1f1f;\n    width:100%;\n    height:100%;\n    margin:0;\n    font-size:16px;\n    background:rgb(31, 31, 31);\n    color:rgba(255,255,255,1);\n    overflow:hidden;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ,\'Noto Sans KR\';\n  }\n  .scrollbar-track.scrollbar-track-x, .scrollbar-thumb.scrollbar-thumb-x{\n    height:6px;\n  }\n  .scrollbar-track.scrollbar-track-y, .scrollbar-thumb.scrollbar-thumb-y{\n    width:6px;\n  }\n  ul{\n    list-style:none;\n    padding:0;\n    margin:0;\n  }\n  button, a{\n    text-decoration:none;\n    color:inherit;\n    cursor:pointer;\n    &:focus{\n      outline:none;\n    }\n  }\n  #root{\n    background:#1f1f1f;\n    width:100%;\n    height:100%;\n  }\n  [data-scrollbar]{\n    width:100%;\n    height:100%;\n    max-height:100%;\n  } \n  .scroll-content > div{\n    height:100%;\n  }\n  ::selection{\n    // background: #512da8;\n    // color:#fff;\n    background:none;\n    // color:rgb(255, 111, 97);\n    color:#a590ff;\n  }\n']);return _n=function(){return n},n}var Mn=Object(u.a)(_n());l.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{basename:"/portfolio"},r.a.createElement(Mn,null),r.a.createElement(dn,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:on}),r.a.createElement(s.a,{path:"/resume/",component:En}),r.a.createElement(s.a,{path:"/Post/:id",component:Cn})),r.a.createElement(hn,null))},null),document.getElementById("root"))},40:function(n,t){n.exports={contents:["UI\ubd80\ud130 \uae30\ub2a5 \uad6c\ud604\uae4c\uc9c0 \uac1c\ubc1c\ud588\uc744 \ub54c \uc5bb\ub294 \uc131\ucde8\uac10\uc774 \uc88b\uc544\uc11c \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\ub85c \uc9c1\ubb34 \uc804\ud658\uc744 \uc900\ube44\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\ub9ac\uc561\ud2b8\uc640 es6\ub97c \ud65c\uc6a9\ud558\uc5ec \uac1c\uc778\ud504\ub85c\uc81d\ud2b8\ub4e4\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc73c\uba70 \ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc704\ub85c \uc7ac\uc0ac\uc6a9\uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\ub610\ud55c es6, \ub9ac\ub355\uc2a4, \uc6f9\ud329 \ub4f1\uc758 \ubd80\ubd84\uc744 \uc774\ud574\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","\uc5c5\ubb34\uc5d0 \uc788\uc5b4\uc11c \uac15\uc810\uc740 \ud611\uc5c5\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uc9c1\uad70\uc744 \uacbd\ud5d8, \uac19\uc774 \uc77c\ud588\uae30 \ub54c\ubb38\uc5d0 \uc6d0\ud65c\ud55c \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc774 \uc774\ub8e8\uc5b4 \uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \ud1b5\ud574 \ubb38\uc81c \ud574\uacb0, \uc11c\ube44\uc2a4 \uac1c\uc120\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uc810\uc744 \ubc14\ud0d5\uc73c\ub85c \uc800\ub294 \uc544\ub984\ub2f5\uace0,\uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc778 \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."],companysData:[{id:0,title:"\uc9c4\ub450\uc544\uc774\uc5d0\uc2a4, \uc704\uc9c0\uc628",period:"2017.04 ~ 2019.05",description:["\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8\uc5d0\uc11c \uc6b4\uc601\ud558\ub294 \uc6d4\ub4dc\uc7a1\ud50c\ub7ec\uc2a4 \uc0ac\uc774\ud2b8 \uc720\uc9c0\ubcf4\uc218 \ub514\uc790\uc778 \ubc0f \ud37c\ube14\ub9ac\uc2f1","\uc6d4\ub4dc\uc7a1 \ud589\uc0ac \uad00\ub828 \ub79c\ub529\ud398\uc774\uc9c0 UI \uac1c\ubc1c","\uc6d4\ub4dc\uc7a1 \ud589\uc0ac \uad00\ub828 \ud3ec\uc2a4\ud130 \uc81c\uc791"]},{id:1,title:"Rengo",period:"2016.05 ~ 2017.02",description:["\ub80c\ud2b8\uce74 \ub300\uc5ec \uc11c\ube44\uc2a4 \ub80c\uace0 UI, \uc6f9 UI\uac1c\ubc1c, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","\ub80c\ud130\uce74 \uc2a4\ucf00\uc974\ub7ec \uc5ed\ud560 \ubc0f \ub80c\uace0 \uc5f0\ub3d9 \uc11c\ube44\uc2a4 \uc194\ub8e8\uc158 \ub514\uc790\uc778 \ubc0f \ud37c\ube14\ub9ac\uc2f1","Rengo \uc571 \ub514\uc790\uc778"]},{id:2,title:"\ud55c\uad6d\uc0b0\uc5c5\uc815\ubcf4\uc0ac",period:"2015.10 ~ 2016.05",description:["\uae30\uc5c5 \ud648\ud398\uc774\uc9c0 \uc81c\uc791 \ubc0f \uc720\uc9c0 \ubcf4\uc218","\uae30\uc5c5 \ud648\ud398\uc774\uc9c0 \ud15c\ud50c\ub9bf \uc81c\uc791"]},{id:3,title:"USSOFT",period:"2014.07 ~ 2015.07",description:["\ubaa8\ubc14\uc77c \ud398\uc774\uc9c0 \uc81c\uc791 \ubc0f \uc720\uc9c0 \ubcf4\uc218","\ubaa8\ubc14\uc77c \ud398\uc774\uc9c0 \ud15c\ud50c\ub9bf \uc81c\uc791"]}],projectsData:[{id:0,title:"\uc6d4\ub4dc\uc7a1 \ubaa8\ubc14\uc77c \ub9ac\ub274\uc5bc \uc791\uc5c5",period:"2017.06 ~ 2017.09",description:"\uc6d4\ub4dc\uc7a1 \ud50c\ub7ec\uc2a4 \ubaa8\ubc14\uc77c \ud398\uc774\uc9c0 \ub9ac\ub274\uc5bc \uc791\uc5c5",contribution:["\ubaa8\ubc14\uc77c \ud398\uc774\uc9c0 \ud37c\ube14\ub9ac\uc2f1","\ud3ec\ud1a0\uc0f5\uc744 \ud65c\uc6a9\ud55c \uc571 \uc18c\uac1c \ud398\uc774\uc9c0, \uc2a4\ud50c\ub798\uc2dc \uc774\ubbf8\uc9c0"],techstack:"HTML5, CSS3, JavaScript, jquery",result:"calc, vw, vh\ub4f1 css\uc758 \uc0c8\ub85c\uc6b4 \ub2e8\uc704\uc5d0 \ub300\ud574\uc11c \uc870\uae08\ub354 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",link:"http://m.worldjob.or.kr/index.do"},{id:1,title:"\ub80c\uace0 \uc194\ub8e8\uc158",period:"2016.08  ~ 2016.11",description:"\ub80c\uace0\uc640 \uc81c\ud734\ud55c \uc5c5\uccb4\ub4e4\uc744 \uc704\ud55c \ucc28\ub7c9\ub80c\ud2b8 \uc194\ub8e8\uc158 \uc6f9\uc11c\ube44\uc2a4 \uad6c\ucd95",contribution:["\ub80c\uace0 \uad00\ub9ac, \uc124\uc815 \ud398\uc774\uc9c0 UI \uac1c\ubc1c","\uc81c\uc774\ucffc\ub9ac \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud65c\uc6a9\ud558\uc5ec \ub3d9\uc791 \uae30\ub2a5 \uad6c\ud604","\uc2a4\ucf00\uce58\ud234\uc744 \uc774\uc6a9\ud55c \ud504\ub85c\ud1a0\ud0c0\uc785 \uc81c\uc791"],techstack:"HTML5, CSS3, Bootstrap, Jquery, Sketch",result:"\ubd80\ud2b8\uc2a4\ud2b8\ub7a9\uc774\ub098 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0 \uc775\uc219\ud558\uc9c0\uc54a\uc544\uc11c \uc81c\ub300\ub85c \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud55c\uac8c \uc544\uc26c\uc6e0\uc2b5\ub2c8\ub2e4.\n\uc774 \ud504\ub85c\uc81d\ud2b8\ub97c \uacc4\uae30\ub85c \ud504\ub860\ud2b8\uc5d4\ub4dc \uae30\uc220 \ud559\uc2b5\uc758 \ud544\uc694\uc131\uc744 \ub290\uaf08\uace0 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",link:"http://partner.rengo.co.kr/"},{id:4,title:"\ub300\ud56d\uae38\ubcd1\uc6d0",period:"2016.03  ~ 2016.04",description:"\uadf8\ub204\ubcf4\ub4dc\ub97c \uc774\uc6a9\ud55c \ub300\ud56d\uae38\ubcd1\uc6d0 \ud64d\ubcf4 PC, Mobile \ud654\uba74 \uac1c\ubc1c",contribution:["Pc, Mobile \ub9c8\ud06c\uc5c5 \uc791\uc5c5","\uadf8\ub204\ubcf4\ub4dc\ub97c \uc774\uc6a9\ud55c cms \uc124\uce58"],techstack:"HTML5, CSS3, \uadf8\ub204\ubcf4\ub4dc",result:"\uadf8\ub204\ubcf4\ub4dc\ub97c \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc624\ud508\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc774\ud574\ub3c4\ub97c \uac00\uc84c\uc2b5\ub2c8\ub2e4.",link:"http://www.daehanggil.co.kr/"},{id:5,title:"\uae08\ud638\ub9c8\ub9b0\ud14c\ud06c",period:"2016.01  ~ 2016.02",description:"\uc120\ubc15\uc6a9 \uc804\uc790\uc7a5\ube44\uae30\uc5c5 \uae08\ud638\ub9c8\ub9b0\ud14c\ud06c \uae30\uc5c5\uc6a9 \ud64d\ubcf4 \ud398\uc774\uc9c0 \ub9ac\ub274\uc5bc \uc791\uc5c5",contribution:["Pc, Mobile \ub9c8\ud06c\uc5c5 \uc791\uc5c5"],techstack:"HTML5, CSS3, \uadf8\ub204\ubcf4\ub4dc",result:"css\ub97c \uc774\uc6a9\ud55c \ub808\uc774\uc544\uc6c3 \uc791\uc5c5\uc5d0 \ub300\ud55c \uc774\ud574\ub3c4\uac00 \uc99d\uac00\ud558\uc600\uc2b5\ub2c8\ub2e4.",link:"http://www.kumhomarine.com/"},{id:6,title:"\uc804\uad6d\uae08\uc18d\ub178\ub3d9\uc870\ud569 \ud604\ub300\uc790\ub3d9\ucc28\uc9c0\ubd80",period:"2015.05  ~ 2015.05",description:"\uc804\uad6d\uae08\uc18d\ub178\ub3d9\uc870\ud569 \ud604\ub300\uc790\ub3d9\ucc28\uc9c0\ubd80 \uc18c\uc2dd\uc9c0 \ubaa8\ubc14\uc77c \ud648\ud398\uc774\uc9c0 \uad6c\ucd95",contribution:["\ud3ec\ud1a0\uc0f5\ud234\uc744 \uc774\uc6a9\ud55c \ud504\ub85c\ud1a0 \ud0c0\uc785 \uc81c\uc791","\ud3ec\ud1a0\uc0f5 \ud0c0\uc784\ub77c\uc778\uc744 \ud65c\uc6a9\ud55c \uba54\uc778 \uc560\ub2c8\uba54\uc774\uc158 \uc81c\uc791","Mobile \ub9c8\ud06c\uc5c5 \uc791\uc5c5"],techstack:"HTML5, CSS3, Photoshop",result:"\uba54\uc778 \uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc\ub97c \uc8fc\uae30 \uc704\ud574 \uc54c\uc544\ubcf4\ub358\uc911 Gif \uc774\ubbf8\uc9c0 \uc81c\uc791 \ud590\uc600\uace0 Gif\uac00 \uc544\ub2cc \uc6f9\uc5d0\uc11c \uc791\ub3d9 \ud558\ub294 \uc560\ub2c8\uba54\uc774\uc158\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 css\ub97c \uc880\ub354 \uacf5\ubd80\ud558\uac8c \ub41c \uacc4\uae30\uac00 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",link:"http://www.kumhomarine.com/"},{id:2,title:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8",period:"2019.06 ~ 2019.09",description:"\uc791\ud488\uc744 \uc815\ub9ac\ud558\uace0 \uc0c8\ub85c\uc6b4 \uae30\uc220\uc744 \ubc30\uc6b0\ub294 \uac83\uc744 \uc88b\uc544\ud558\uae30 \ub54c\ubb38\uc5d0 \uac1c\uc778 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8\ub97c \ub9cc\ub4e4\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub9cc\ub4e4\uba74\uc11c \uc6f9 \uae30\uc220\uc744 \uacf5\ubd80\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub9ce\uc774 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",contribution:["UI \uc124\uacc4 \ubc0f \uad6c\ud604","Router\ub97c \uc774\uc6a9\ud55c \ud398\uc774\uc9c0 \ud615\uc2dd\uc758 \ub80c\ub354\ub9c1","\uc2a4\ud0c0\uc77c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud65c\uc6a9\ud55c CSS \uc2a4\ud0c0\uc77c\ub9c1","GitHub Page\uc704\uc5d0 build\ub97c \ud558\uc600\uc2b5\ub2c8\ub2e4."],techstack:"React, HTML5, Styled-Component, Router",result:"\uc800\uc5d0\uac8c \uc0dd\uc18c\ud558\uc600\ub358 SPA\uc5d0 \ub300\ud558\uc5ec \uc870\uae08 \ub354 \uc790\uc138\ud788 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc SPA\uc758 \ub2e8\uc810\uc778 \ucd08\uae30\uad6c\ub3d9 \uc18d\ub3c4, \uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654 \ubb38\uc81c\uc5d0 \ub300\ud574 \uc870\uae08 \ub354 \uc54c\uc544\ubcf4\uc544\uc57c \ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4.",link:"https://geoje1dong.github.io/portfolio/"},{id:3,title:"SNS \ud074\ub860 \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8",period:"2019.06 ~ \uc9c4\ud589\uc911",description:"react\ub97c \uc870\uae08\ub354 \uc190\uc5d0 \uc775\uae30 \uc704\ud574 \ub9cc\ub4e4\uac8c \ub41c \uac1c\uc778 \ud504\ub85c\uc81d\ud2b8 \uc785\ub2c8\ub2e4.\n\uc778\uc2a4\ud0c0\uadf8\ub7a8, \ud2b8\uc704\ud130\ub4f1\uc758 sns\ub4f1\uc744 \ucc38\uace0\ud558\uc5ec \uc124\uacc4 \ubc0f \uad6c\ud604\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub9ac\ud2b8\uc717, \uc88b\uc544\uc694, \uac8c\uc2dc\uae00 \ub4f1\ub85d, \uc0ad\uc81c, \ud314\ub85c\uc6cc, \ud314\ub85c\uc789 \uad6c\ud604\ud558\uc600\uc2b5\ub2c8\ub2e4.",contribution:["UI \uc124\uacc4 \ubc0f \uad6c\ud604","\uac80\uc0c9\uc5d4\uc9c4 \ucd5c\uc801\ud654\ub97c \uc704\ud574 next.js\uc744 \uc774\uc6a9\ud55c \uc11c\ubc84\uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1","\uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac redux\ub97c \uc774\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uad00\ub9ac","express, sequelize, mysql\uc744 \ud1b5\ud574 db\uc0dd\uc131, \uad00\ub9ac"],techstack:"react, next, redux, redux-saga, styled-component, express, sequelize",result:"\ucc98\uc74c\ubd80\ud130 \ub05d\uae4c\uc9c0 \uc778\uac15\uc744 \ubcf4\uba70 \uc81c\uc791 \ud558\uc600\uc2b5\ub2c8\ub2e4.\nredux, express, sequelize \uc774\ud574\ub3c4\uac00 \ub0ae\uc544 \uc870\uae08\ub354 \uacf5\ubd80\ub97c \ud558\uba70 \uc810\uc810\ub354 \uc5c5\ub370\uc774\ud2b8 \ud574\uac08 \uc0dd\uac01\uc785\ub2c8\ub2e4.\n\ucd08\uae30\uad6c\ub3d9 \uc18d\ub3c4\uc5d0 \ub300\ud55c \ud574\uacb0 \ubc29\uc548\uc744 \uc870\uae08\ub354 \ucc3e\uc544\ubd10\uc57c \ud560\uac83 \uac19\uc2b5\ub2c8\ub2e4.",link:""}],skillsData:[{id:0,title:"UI",description:["\uadf8\ub9ac\ub4dc \uc2dc\uc2a4\ud15c\uc744 \uc900\uc218\ud558\uba70 \ub514\uc790\uc778\uc744 \ud569\ub2c8\ub2e4.","\uc77c\uad00\ub41c \uad6c\uc870\ub85c UI \ub514\uc790\uc778\uc744 \uc124\uacc4\ud560\uc218 \uc788\uc2b5\ub2c8\ub2e4."]},{id:1,title:"HTML / CSS",description:["\uc2dc\ub9e8\ud2f1 \ub9c8\ud06c\uc5c5\uc744 \uc900\uc218\ud569\ub2c8\ub2e4.","\uc6f9 \uc811\uadfc\uc131 \uc778\uc99d\ub9c8\ud06c\ub97c \ud68d\ub4dd\ud55c \uacbd\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.","Sass\ub4f1 CSS Preprocessor\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]},{id:2,title:"JavaScript",description:["DOM API\ub97c \ub2e4\ub8e8\ub294\ub370 \ub2a5\uc219\ud569\ub2c8\ub2e4.","ES2015 \uc774\ud6c4\uc758 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ubb38\ubc95\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \uacf5\ubd80\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]},{id:3,title:"React",description:["\uc5ec\ub7ec\uac00\uc9c0 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\uc911 \uc785\ub2c8\ub2e4.","Atomic Web Design \uae30\ubc18\uc758 \ucef4\ud3ec\ub10c\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub9cc\ub4e4\uae30 \uc704\ud574 \uacf5\ubd80\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.","Redux\ub97c \uc774\uc6a9\ud574 \uc0c1\ud0dc \uad00\ub9ac\uc5d0 \ub300\ud574 \uc870\uae08\ub354 \uc6d0\ud65c\ud558\uac8c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}]}},91:function(n,t){n.exports={results:[{id:"0",title:"WorldjobPlus",label:"System Management",img:"/img/01/worldjob_main.jpg",content:[{header_h1:"WorldjobPlus",header_h2:"2017.04 ~ 2019.05",header_img:"/img/01/worldjob_cover.jpg",description:"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8\uc5d0\uc11c \uc11c\ube44\uc2a4\uc911\uc778 \ud574\uc678\ucde8\uc5c5 \ucc44\uc6a9\uc0ac\uc774\ud2b8 \uc6d4\ub4dc\uc7a1 \ud50c\ub7ec\uc2a4\uc5d0\uc11c \uc720\uc9c0\ubcf4\uc218 \ud300\uc6d0\uc73c\ub85c \uadfc\ubb34\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc6d4\ub4dc\uc7a1 \ud50c\ub7ec\uc2a4\uc5d0\uc11c 2\ub144\uc744 \uadfc\ubb34\ud558\uba70 \uc6f9 \uc811\uadfc\uc131 \uc778\uc99d, \ubaa8\ubc14\uc77c, \uc774\ub825\uc11c \ucca8\uc0ad, \ud30c\uc77c \ucca8\ubd80, \ud504\ub85c\uc81d\ud2b8\ub4f1\uc744 \uc218\ud589\ud558\uba70 \uc720\uc9c0\ubcf4\uc218 \uc5c5\ubb34\ub97c \ud558\uc600\uc2b5\ub2c8\ub2e4.",clist:["Design","Javascript, HTML, CSS","Co-work"],url:"https://www.worldjob.or.kr",imgSize:!0,section_imges:[{imgUrl:"/img/01/worldjob_content.png",imgAlt:"\uc6d4\ub4dc\uc7a1 \uc0c1\uc138\ud398\uc774\uc9c0"}]}]},{id:"1",title:"Rengo Solution",label:"Web, App",img:"/img/02/rengosolution_main.jpg",content:[{header_h1:"Rengo Solution",header_h2:"2016.08 ~ 2016.11",header_img:"/img/02/rengosolution_cover.jpg",description:"\ucc28\ub7c9\ub80c\ud2b8 \ube0c\ub79c\ub4dc \ub80c\uace0\uc640 \uc81c\ud734\ud55c \uc5c5\uccb4\ub4e4\uc744 \uc704\ud55c \ucc28\ub7c9\ub80c\ud2b8 \uc194\ub8e8\uc158 \uc6f9\uc11c\ube44\uc2a4\n \ub300\uc5ec\uad00\ub9ac, \ucc28\ub7c9\uad00\ub9ac, \uace0\uac1d\uad00\ub9ac, \ub9e4\ucd9c\uad00\ub9ac, \ub80c\uace0\uc124\uc815\ub4f1\uc758 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",clist:["Design","HTML, CSS, Javascript, Bootstrap","Co-work"],url:"http://partner.rengo.co.kr/",section_imges:[{imgUrl:"/img/02/rengosolution_content.png",imgAlt:"\ub80c\uace0 \uc0c1\uc138\ud398\uc774\uc9c0"}]}]},{id:"2",title:"Rengo App 2.0",label:"App",img:"/img/03/rengoapp_main.jpg",content:[{header_h1:"Rengo App 2.0",header_h2:"2016.11~ 2017.01",header_img:"/img/03/rengoapp_cover.jpg",description:"\ub80c\uace02.0 \ub9ac\ub274\uc5bc ios, android App \uc5c5\ub370\uc774\ud2b8",clist:["Sketch","Photoshop","Co-work"],imgSize:!0,section_imges:[{imgUrl:"/img/03/rengoapp_detail.jpg",imgAlt:"\ub80c\uace0 \uc0c1\uc138\ud398\uc774\uc9c0"}]}]}]}}},[[100,1,2]]]);
//# sourceMappingURL=main.99bd30ad.chunk.js.map