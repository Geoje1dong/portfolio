(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(n,t,e){"use strict";e.r(t);var a=e(1),i=e(0),r=e.n(i),l=e(89),o=e.n(l),c=e(33),s=e(21),u=e(2),m=e(6),p=e(7),d=e(9),b=e(8),h=e(10),f=e(90),g=e.n(f);function v(){var n=Object(a.a)(["\n  color:#fff;\n  margin: 0;\n  margin-top: 8px;\n  font-weight: 100;\n  font-size: 16px;\n  line-height: 29px;\n  height: 29px;\n  min-width: 10px;\n"]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  left: -140px;\n  margin: 0;\n  font-size: .75rem;\n  font-style: italic;\n  line-height: 2;\n  letter-spacing: 0.5px;\n  transform: translate3d(0, -85%, 0);\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity, transform;\n  transition-duration: 0.2s;\n  transition-delay: 0s;\n  transition-timing-function: \n"]);return w=function(){return n},n}function x(){var n=Object(a.a)(["\n  padding:0;\n  margin:0;\n  background:none;\n  border:0;\n  text-align:left;\n  position:relative;\n  z-index:3;\n  color:#fff;\n  &:hover{\n    > p{\n      transform: translate3d(0, -100%, 0);\n      opacity: 1;\n      transition-delay: 0.4s;\n    }\n    &:after{\n      transform: scaleX(1);\n      transform-origin: left center;\n      transition-delay: 0.2s;\n    }\n  }\n  &:after{\n    content: '';\n    position: absolute;\n    top: 50%;\n    margin-top:2px;\n    left: -130px;\n    height: 1px;\n    width: 180px;\n    background-color: rgba(255,255,255,0.8);\n    transform: scaleX(0);\n    transform-origin: right center;\n    transition: transform;\n    transition-duration: 0.5s;\n    transition-delay: 0s;\n    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  > img{\n    max-width:600px;\n  }\n"]);return x=function(){return n},n}var E=function(n){function t(){var n,e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=Object(d.a)(this,(n=Object(b.a)(t)).call.apply(n,[this].concat(i)))).state={title:"",mobile:!1},e.articleMouseOver=function(n){return function(t){var a=n.title;e._typingEffect(a)}},e._typingEffect=function(n){var t=0;e.timer=setInterval(function(){t<n.length?(e.setState({title:e.state.title+n.charAt(t)}),t++):clearInterval(e.timer)},e._randDelay(30,70))},e._randDelay=function(n,t){return Math.floor(Math.random()*(t-n+1)+n)},e._articleMouseOut=function(){e.setState({title:""}),clearInterval(e.timer)},e}return Object(h.a)(t,n),Object(p.a)(t,[{key:"componentWillMount",value:function(){window.innerWidth<768&&this.setState({mobile:!0})}},{key:"render",value:function(){var n=this.state,t=n.mobile,e=n.title,a=this.props,i=a.article,l=a.viewIsOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onMouseOver:this.articleMouseOver(i),onMouseOut:this._articleMouseOut,onClick:l},r.a.createElement(O,null,i.label," the project"),r.a.createElement("img",{src:i.img,alt:i.title}),r.a.createElement(j,null,t?i.title:e)))}}]),t}(r.a.Component),y=u.b.button(x()),O=u.b.p(w()),j=u.b.h2(v()),k=e(27),I=e(96);k.b.initAll();var S=function(n){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,n),Object(p.a)(t,[{key:"transformDelta",value:function(n,t){if(!/wheel/.test(t.type))return n;var e=n.x,a=n.y;return this.options.vertical?n:{y:0,x:Math.abs(e)>Math.abs(a)?e:a}}}]),t}(k.a);S.pluginName="choiceScroll",S.defaultOptions={vertical:!0},k.b.use(S,I.a);var z=k.b;function C(){var n=Object(a.a)(["\n  z-index:2;\n  position:fixed;\n  width:100vw;\n  height:100vh;\n  top:0;\n  left:0;\n  color:#000;\n  transform:translateY(100vh);\n  transition:all 0.5s cubic-bezier(0.455,0.03,0.515,0.955);\n  background:#fff;\n  &.animationIn{\n    transform:translateY(0vh);\n  }\n  &.animationOut{\n  }\n"]);return C=function(){return n},n}function _(){var n=Object(a.a)(["\n  z-index:3;\n  position:fixed; \n  padding: 21px 22px; \n  background: #fff; \n  border: 1px solid rgba(0,0,0,0.5); \n  cursor:pointer; \n  box-shadow: 3px 7px 9px -4px rgba(0,0,0,0.1);\n  right:5.26593vw;\n  top:5.26593vw;\n  svg{\n    width:14px; height:auto;\n  }\n"]);return _=function(){return n},n}function M(){var n=Object(a.a)(["\n  width:100vw;\n  position:relative;\n  z-index:1;\n  .scroll-content{\n    height:100%;\n  }\n"]);return M=function(){return n},n}function U(){var n=Object(a.a)(["\n  width:100vw;\n  height:100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  bottom:0;\n  right:0;\n  background-image:url(",");\n  background-size:cover;\n  background-position:center;\n  display:flex;\n  align-items: center;\n  justify-content: center;\n  >div{\n    color:#fff;\n    h2{\n      font-size:42px;\n      margin-bottom:30px;\n      font-style:italic;\n    }\n    p{\n      font-size:14px;\n      font-weight:100;\n      font-color:rgba(255,255,255, 0.7);\n      margin:0;\n      padding-top:6px;\n    }\n    span{\n      margin:0;\n      font-size:14px;\n      font-weight:100;\n    }\n  }\n"]);return U=function(){return n},n}function D(){var n=Object(a.a)(["\n  width:100vw;\n  height:100vh;\n"]);return D=function(){return n},n}function A(){var n=Object(a.a)(["\n  font-size:14px;\n  line-height:1.5em;\n  max-width:1024px;\n  margin:0 auto;\n  padding:5.26593vw;\n  position:relative;\n  > p{\n    padding:0;\n    margin:0 auto 0 0;\n    width:73%;\n    float:left;\n  }\n  > ol{\n    list-style-type:disc;\n    padding:0;\n    margin:0;\n    padding-left:17px;\n    width:22%;\n    float:right;\n  }\n  >a {\n    margin-top:40px;\n    display:inline-block;\n    position:relative;\n    color:#512da8;\n    text-decoration:underline;\n  }\n  @media screen and (max-width : 425px) {\n    display:block!important;\n    > p{\n      display:block;\n      margin:0 0 20px; 0;\n    }\n    > ol{\n      display:block;\n    }\n  }\n"]);return A=function(){return n},n}function F(){var n=Object(a.a)(["\n  background:#fff;\n  height:auto !important;\n  >section{\n    padding:0 5.26593vw 5.26593vw 5.26593vw;\n    display:flex;\n    justify-content:center;\n    img{\n      max-width:2000px;\n      width:100%;\n    }\n  }\n"]);return F=function(){return n},n}function W(){var n=Object(a.a)(["\n  background:#fff;\n  width:100%;\n  height:200px;\n  position:absolute;\n  left:0;\n  bottom:0;\n  z-index:0;\n"]);return W=function(){return n},n}var X=function(n){function t(){var n,e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=Object(d.a)(this,(n=Object(b.a)(t)).call.apply(n,[this].concat(i)))).state={animationView:null,dummyBox:!1},e.handleClick=function(n){n.preventDefault(),e.setState({animationView:"animationOut"})},e.transitionEnd=function(){"animationOut"===e.state.animationView&&e.props.viewIsClose()},e}return Object(h.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){return n.setState({animationView:"animationIn"})},0),z.init(document.querySelector(".view"),{overscroll:!1}).addListener(function(t){var e=t.offset.y,a=window.innerHeight;console.log(e),console.log(a),e>a?n.setState({dummyBox:!0}):n.setState({dummyBox:!1})})}},{key:"render",value:function(){var n=this.props,t=n.viewContent,e=n.view;return console.log(t),console.log(t.content[0].header_h1),r.a.createElement(T,{effect:e,onTransitionEnd:this.transitionEnd,className:this.state.animationView},r.a.createElement(J,{className:"viewHeader",backgroundImage:t.content[0].header_img},r.a.createElement("div",null,r.a.createElement("h2",null,t.content[0].header_h1),r.a.createElement("span",null,t.label," the project"),r.a.createElement("p",null,t.content[0].header_h2))),r.a.createElement(R,{onClick:this.handleClick},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 59.4 59.4"},r.a.createElement("path",{d:"M29.7 45.3L0 15.6l1.4-1.5 28.3 28.3L58 14.1l1.4 1.5z"}))),r.a.createElement(L,{className:"view"},r.a.createElement(H,null),r.a.createElement(B,null,r.a.createElement(P,null,r.a.createElement("ol",null,t.content[0].clist.map(function(n,t){return r.a.createElement("li",{key:t},n)})),r.a.createElement("p",null,t.content[0].description.split("\n").map(function(n){return r.a.createElement("span",null,n,r.a.createElement("br",null))})),r.a.createElement("a",{target:"_blank",href:t.content[0].url},t.content[0].url)),t.content[0].section_imges.map(function(n,t){return r.a.createElement("section",{key:t},r.a.createElement("img",{src:n.imgUrl,alt:n.Alt}))}))),this.state.dummyBox&&r.a.createElement(N,null))}}]),t}(r.a.Component),N=u.b.div(W()),B=u.b.div(F()),P=u.b.div(A()),H=u.b.div(D()),J=u.b.div(U(),function(n){return n.backgroundImage}),L=u.b.div(M()),R=u.b.button(_()),T=u.b.div(C());function V(){var n=Object(a.a)(["\n  padding:0;\n  margin:0;\n  list-style:none;\n  display:flex;\n  top: 8.898895vw;\n  bottom: 5.26593vw;\n  position:absolute;\n  overflow:hidden;\n  &.articlesFadeIn{\n    >li{\n      opacity:1;\n      transform: translateX(0px) !important;\n    }\n  }\n  >li{\n    opacity: 0;\n    transform: translateX(700px);\n    padding:0 5.26593vw\n    display: flex;\n    &:first-child{\n      align-items: flex-start;\n      transition:all 0.9s cubic-bezier(0.455,0.03,0.515,0.955);\n      >div{\n        width:340px;\n        padding-top:5.26593vw;\n        > p{\n          font-size: 1.3125rem;\n          line-height: 1.4em;\n          margin: 0 0.2em;\n          font-weight: 200;\n        }\n      }\n    }\n    &:nth-child(2){\n      > button >img{\n        height:560px;\n        width:auto;\n        @media screen and (max-width : 425px) {\n          height:60vh;\n        }\n      }\n    }\n  }\n  @media screen and (max-width : 1024px) {\n    top: 15.79779vw;\n    bottom: 10.79779vw;\n  }\n  @media screen and (max-width : 425px) {\n    top: 30.79779vw;\n    bottom: 10.79779vw;\n    >li{\n      padding:0 15.26593vw\n      &:first-child{\n        padding-left:5.26593vw\n      }\n    }\n    \n  }\n"]);return V=function(){return n},n}function K(){var n=Object(a.a)(["\n  transition:all 1.","s cubic-bezier(0.455,0.03,0.515,0.955);\n  &:nth-child(1n){\n    align-items: center;\n  }\n  &:nth-child(2n){\n    align-items: flex-start;\n  }\n  &:nth-child(3n){\n    align-items: flex-end;\n  }\n"]);return K=function(){return n},n}function Y(){var n=Object(a.a)(["\n  > .scroll-content{\n    height:100%;\n  }\n"]);return Y=function(){return n},n}var q=function(n){function t(){var n,e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=Object(d.a)(this,(n=Object(b.a)(t)).call.apply(n,[this].concat(i)))).state={viewIsOpen:!1,viewContent:null,articlesFadeIn:null},e._viewIsOpen=function(n){return function(){e.setState({viewIsOpen:!0,viewContent:n})}},e._viewIsClose=function(){e.setState({viewIsOpen:!1,viewContent:null})},e}return Object(h.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({articlesFadeIn:"articlesFadeIn"}),z.init(document.querySelector(".horizontalScroll"),{overscroll:{effect:"bounce",damping:.1}}).updatePluginOptions("choiceScroll",{vertical:!1})}},{key:"render",value:function(){var n=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{className:"horizontalScroll"},r.a.createElement(Z,{className:this.state.articlesFadeIn},r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("p",null,"\uc548\ub155\ud558\uc138\uc694 ",r.a.createElement("strong",null,"\uae40\uc7ac\ud604")," \uc785\ub2c8\ub2e4."),r.a.createElement("p",null,"\uc800\uc758 ",r.a.createElement("strong",null,"\ud3ec\ud2b8\ud3f4\ub9ac\uc624"),"\uc5d0 \uc624\uc2e0\uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."))),g.a.results.map(function(t){return r.a.createElement(Q,{key:t.id,delay:t.id},r.a.createElement(E,{article:t,viewIsOpen:n._viewIsOpen(t)}))}))),this.state.viewIsOpen&&r.a.createElement(X,{view:this.state.viewIsOpen,viewContent:this.state.viewContent,viewIsClose:this._viewIsClose}))}}]),t}(i.Component),G=u.b.div(Y()),Q=u.b.li(K(),function(n){return n.delay}),Z=u.b.ul(V());function $(){var n=Object(a.a)(["\n  position:fixed;\n  z-index:2;\n  top:5.26593vw;\n  left:5.26593vw;\n  right:5.26593vw;\n  letter-spacing: -0.4px;\n  >div{\n    width:65%;\n    display:inline-block;\n    >a{\n      font-size:2rem;\n      font-weight:700;\n      transition: all 0.5s ease;\n    }\n  }\n  >nav{\n    width:35%;\n    display:inline-block;\n    text-align:right;\n    >a{\n      position:relative;\n      margin-left:30px;\n      font-weight:100;\n      font-size:0.875rem;\n      &:hover{\n        &:after{\n          transform: scaleX(1);\n          transform-origin: left center;\n        }\n      }\n      &:after{\n        content: '';\n        position: absolute;\n        left: 0;\n        height:1px;\n        bottom: -3px;\n        width: 100%;\n        transform: scaleX(0);\n        transition: all 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n        background:rgba(255,255,255,0.7);\n        transform-origin:right center;\n      }\n      &:first-child{\n        margin-left:0;\n        @media screen and (max-width : 425px) {\n          display:none;\n        }\n      }\n    }\n  }\n"]);return $=function(){return n},n}var nn=function(n){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(tn,null,r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"KimJaeHyun :)")),r.a.createElement("nav",null,r.a.createElement(c.b,{to:"/"},"Work"),r.a.createElement(c.b,{to:"/about"},"About")))}}]),t}(r.a.Component),tn=u.b.header($());function en(){var n=Object(a.a)(["\n  position:fixed;\n  bottom:5.26593vw;\n  left:5.26593vw;\n  right:5.26593vw;\n"]);return en=function(){return n},n}var an=function(n){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(rn,null,"Copyright by Jaehyune Kim. 2019")}}]),t}(r.a.Component),rn=u.b.div(en());function ln(){var n=Object(a.a)(["\n  transition:all 0.8s cubic-bezier(0.455,0.03,0.515,0.955);\n  transition-delay: ","s;\n  >li{\n    padding:6px 14px 4px;;\n    border-radius: 100px;\n    border:solid 1px rgba(255,255,255,0.1 );\n    margin:0 8px 14px 0;\n    display: inline-block;\n    line-height:1.5em;\n    font-weight:200;\n  }\n"]);return ln=function(){return n},n}function on(){var n=Object(a.a)(["\n  transition:all 0.4s cubic-bezier(0.455,0.03,0.515,0.955);\n  transition-delay: ","s;\n  margin-bottom:100px;\n  max-width:1000px;\n  li{\n    padding-bottom:3.75rem;\n    margin-bottom: 3.75rem;\n    border-bottom:1px solid rgba(255, 255, 255, 0.1);\n    >p {\n      float:left;\n      width:40%;\n      font-size:1.25rem;\n      font-weight:700;\n      margin-bottom:0;\n    }\n    > div{\n      float:left;\n      width:60%;\n      font-weight:200;\n      p{\n        font-weight:100;\n        margin-bottom:0;\n        &:last-child{\n          font-size:12px;\n        }\n      }\n    }\n  }\n  li:after{\n    content:'';\n    display:block;\n    clear: both\n  }\n"]);return on=function(){return n},n}function cn(){var n=Object(a.a)(["\n  line-height:1.8em;\n  font-weight:200;\n  margin:0 0 10px 0;\n  // transition:all ","s cubic-bezier(0.455,0.03,0.515,0.955);\n  // transition:all 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n  transition:all 0.6s cubic-bezier(0.455,0.03,0.515,0.955);\n  transition-delay: ","s;\n"]);return cn=function(){return n},n}function sn(){var n=Object(a.a)(["\n  padding-top:5.26593vw;\n  margin-bottom:100px;\n"]);return sn=function(){return n},n}function un(){var n=Object(a.a)(["\n  padding: 8.898895vw 5.26593vw 8.898895vw;\n  @media screen and (max-width : 1024px) {\n    padding: 15.79779vw 5.26593vw 15.79779vw;\n  }\n  @media screen and (max-width : 425px) {\n    padding: 30.79779vw 5.26593vw 30.79779vw;\n  }\n  > h2{\n    font-size:1.5rem;\n    margin-bottom:60px;\n  }\n  >ul, >div >p{\n    opacity:0;\n    transform:translateY(80px);\n  }\n  &.aboutFadeIn{\n    >ul, >div >p{\n      opacity:1;\n      transform:translateY(0px);\n    }\n  }\n"]);return un=function(){return n},n}z.initAll();var mn=function(n){function t(){var n,e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=Object(d.a)(this,(n=Object(b.a)(t)).call.apply(n,[this].concat(i)))).state={aboutFadeIn:null},e}return Object(h.a)(t,n),Object(p.a)(t,[{key:"componentDidMount",value:function(){var n=this;setTimeout(function(){return n.setState({aboutFadeIn:"aboutFadeIn"})},0),this.scrollbar=z.init(document.querySelector(".about"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"about"},r.a.createElement(pn,{className:this.state.aboutFadeIn},r.a.createElement(dn,null,r.a.createElement(bn,{delay:"0"},"\uc548\ub155\ud558\uc138\uc694, \uc800\ub294 \uae40\uc7ac\ud604 \uc785\ub2c8\ub2e4."),r.a.createElement(bn,{delay:"0.3"},"UI/UX \ub514\uc790\uc774\ub108\ub85c Web \ubc0f App \uac1c\ubc1c\uc5d0 \ucc38\uc5ec\ud558\uba70 \ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \uc313\uace0 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(bn,{delay:"0.6"},"\uc88b\uc740 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc744 \uc704\ud574 \uac1c\ubc1c\uc790 \ubc0f \uae30\ud68d\uc790\uc758 \uc5c5\ubb34\ub97c \uc774\ud574\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(bn,{delay:"0.9"},"\ub610\ud55c, \uc2e4\uc6a9\uc801\uc774\uace0 \uc720\uc6a9\ud558\uba70 \uc544\ub984\ub2e4\uc6b4 \uc81c\ud488\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ub9ce\uc740 \uc791\uc5c5\ubb3c\uc744 \ubcf4\uba70 \uacf5\ubd80\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),r.a.createElement(bn,{delay:"1.2"},"\ub2e4\uc591\ud55c \uae30\uc220\uc744 \ud559\uc2b5\ud558\uace0, \ub2e4\uc591\ud55c \uacbd\ud5d8\uc744 \ud1b5\ud574 \uc880 \ub354 \ub098\uc740 \ub514\uc790\uc774\ub108\ub85c \ubc1c\uc804\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.")),r.a.createElement(hn,{delay:"1.5"},r.a.createElement("h2",null,"Work"),r.a.createElement("li",null,r.a.createElement("p",null,"\uc9c4\ub450\uc544\uc774\uc5d0\uc2a4, \uc704\uc9c0\uc628"),r.a.createElement("div",null,r.a.createElement("p",null,"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8\uc5d0\uc11c \uc6b4\uc601\ud558\ub294 \uc6d4\ub4dc\uc7a1\ud50c\ub7ec\uc2a4 \uc0ac\uc774\ud2b8 UI/UX Designer, WEB Publisher"),r.a.createElement("p",null,"2017.04 ~ 2019.05"))),r.a.createElement("li",null,r.a.createElement("p",null,"Rengo"),r.a.createElement("div",null,r.a.createElement("p",null,"\ub80c\ud2b8\uce74 \ub300\uc5ec b2b \uc0ac\uc774\ud2b8 UI/UX Designer, WEB Publisher"),r.a.createElement("p",null,"2016.05 ~ 2017.02"))),r.a.createElement("li",null,r.a.createElement("p",null,"\ud55c\uad6d\uc0b0\uc5c5\uc815\ubcf4\uc0ac"),r.a.createElement("div",null,r.a.createElement("p",null,"\uc6f9\uc5d0\uc774\uc804\uc2dc WEB Publisher"),r.a.createElement("p",null,"2015.10 ~ 2016.05"))),r.a.createElement("li",null,r.a.createElement("p",null,"USSOFT"),r.a.createElement("div",null,r.a.createElement("p",null,"\uc6f9\uc5d0\uc774\uc804\uc2dc GUI Designer"),r.a.createElement("p",null,"2014.07 ~ 2015.07")))),r.a.createElement(fn,{delay:"1.8"},r.a.createElement("h2",null,"Skill"),r.a.createElement("li",null,"UI Design"),r.a.createElement("li",null,"UX Design"),r.a.createElement("li",null,"Illustration"),r.a.createElement("li",null,"Visual Design"),r.a.createElement("li",null,"HTML5"),r.a.createElement("li",null,"CSS3"),r.a.createElement("li",null,"JavaScript"))))}}]),t}(r.a.Component),pn=u.b.div(un()),dn=u.b.div(sn()),bn=u.b.p(cn(),function(n){return n.delay},function(n){return n.delay}),hn=u.b.ul(on(),function(n){return n.delay}),fn=u.b.ul(ln(),function(n){return n.delay});function gn(){var n=Object(a.a)(["\n\n"]);return gn=function(){return n},n}var vn=function(n){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,n),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(wn,null,r.a.createElement("h3",null,this.props.match.params.id),r.a.createElement("p",null,this.props.location.state.title),r.a.createElement("p",null,this.props.location.state.userName))}}]),t}(r.a.Component),wn=u.b.div(gn());function xn(){var n=Object(a.a)(['\n  body, html{\n    background:#1f1f1f;\n    width:100%;\n    height:100%;\n    margin:0;\n    font-size:16px;\n    background:rgb(31, 31, 31);\n    color:rgba(255,255,255,1);\n    overflow:hidden;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ,\'Noto Sans KR\';\n  }\n  .scrollbar-track.scrollbar-track-x, .scrollbar-thumb.scrollbar-thumb-x{\n    height:2px;\n  }\n  .scrollbar-track.scrollbar-track-y, .scrollbar-thumb.scrollbar-thumb-y{\n    width:2px;\n  }\n  ul{\n    list-style:none;\n    padding:0;\n    margin:0;\n  }\n  button, a{\n    text-decoration:none;\n    color:inherit;\n    cursor:pointer;\n    &:focus{\n      outline:none;\n    }\n  }\n  #root{\n    background:#1f1f1f;\n    width:100%;\n    height:100%;\n  }\n  [data-scrollbar]{\n    width:100%;\n    height:100%;\n    max-height:100%;\n  } \n  .scroll-content > div{\n    height:100%;\n  }\n  ::selection{\n    background: #512da8;\n    color:#fff;\n    // background: rgb(255, 164, 155);\n  }\n']);return xn=function(){return n},n}var En=Object(u.a)(xn());o.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{basename:"/portfolio"},r.a.createElement(En,null),r.a.createElement(nn,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:q}),r.a.createElement(s.a,{path:"/about/",component:mn}),r.a.createElement(s.a,{path:"/Post/:id",component:vn})),r.a.createElement(an,null))},null),document.getElementById("root"))},90:function(n,t){n.exports={results:[{id:"0",title:"WorldjobPlus",label:"System Management",img:"https://i.ibb.co/s1wKP4R/worldjob-main.png",content:[{header_h1:"WorldjobPlus",header_h2:"2017.04 ~ 2019.05",header_img:"https://i.ibb.co/h1m842d/worldjob.jpg",description:"\ud55c\uad6d\uc0b0\uc5c5\uc778\ub825\uacf5\ub2e8\uc5d0\uc11c \uc11c\ube44\uc2a4\uc911\uc778 \ud574\uc678\ucde8\uc5c5 \ucc44\uc6a9\uc0ac\uc774\ud2b8 \uc6d4\ub4dc\uc7a1 \ud50c\ub7ec\uc2a4\uc5d0\uc11c \uc720\uc9c0\ubcf4\uc218 \ud300\uc6d0\uc73c\ub85c \uadfc\ubb34\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc6d4\ub4dc\uc7a1 \ud50c\ub7ec\uc2a4\uc5d0\uc11c 2\ub144\uc744 \uadfc\ubb34\ud558\uba70 \uc6f9 \uc811\uadfc\uc131 \uc778\uc99d, \ubaa8\ubc14\uc77c, \uc774\ub825\uc11c \ucca8\uc0ad, \ud30c\uc77c \ucca8\ubd80, \ud504\ub85c\uc81d\ud2b8\ub4f1\uc744 \uc218\ud589\ud558\uba70 \uc720\uc9c0\ubcf4\uc218 \uc5c5\ubb34\ub97c \ud558\uc600\uc2b5\ub2c8\ub2e4.",clist:["Design","Javascript, HTML, CSS","Co-work"],url:"https://www.worldjob.or.kr",section_imges:[{imgUrl:"https://i.ibb.co/9sPg2FR/image.png",imgAlt:"\uc6d4\ub4dc\uc7a1 \uc0c1\uc138\ud398\uc774\uc9c0"}]}]},{id:"1",title:"Rengo",label:"Web, App",img:"https://i.ibb.co/XjGbWrZ/rengo-main01.png",content:[{header_h1:"Rengo",header_h2:"2016.05 ~ 2017.02",header_img:"https://i.ibb.co/ct8QL9b/rengo-bg.jpg",description:"\ubd88\ub7ec\ud0c0\ub294 \ub80c\ud130\uce74 \ub80c\uace0\uc5d0\uc11c UI/UX Designer, Publisher\ub85c \uadfc\ubb34\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\ub80c\uace0\uc5d0\uc11c \uadfc\ubb34\ud558\uba70 \ub80c\uace0 \uc194\ub8e8\uc158, \ub80c\uace0 \uc6f9, \uc571 \ub514\uc790\uc778 \ub9ac\ub274\uc5bc\uc744 \uc9c4\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4.",clist:["Design","Javascript, HTML, CSS","Co-work"],url:"https://rengo.co.kr/",section_imges:[{imgUrl:"https://i.ibb.co/5rrtN1t/rengo-post.png",imgAlt:"\ub80c\uace0 \uc0c1\uc138\ud398\uc774\uc9c0"}]}]}]}},99:function(n,t,e){n.exports=e(149)}},[[99,1,2]]]);
//# sourceMappingURL=main.de5a9e0b.chunk.js.map