(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,t){n.exports=t(32)},31:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),u=t(4),s=t(6),l=t(5),p=t(7),m=t(9),f=t.n(m),h=t(14),d=t(1),b=t(2);function g(){var n=Object(d.a)(["\n  width: 10px;\n  height: 10px;\n  margin-top: 7.5px;\n  border-radius: 50%;\n  background-color: red;\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  position: relative;\n"]);return v=function(){return n},n}function j(){var n=Object(d.a)(["\n  font-size: 1.3rem;\n  color: white;\n  text-align: center;\n"]);return j=function(){return n},n}function x(){var n=Object(d.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 1rem;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom right, #002f4b, #dc4225);\n    opacity: 0.6;\n  }\n"]);return x=function(){return n},n}function O(){var n=Object(d.a)(["\n  font-size: 1.2rem;\n  color: white;\n  position: absolute;\n  top: 20%;\n  left: 3%;\n"]);return O=function(){return n},n}function w(){var n=Object(d.a)(["\n  display: flex;\n"]);return w=function(){return n},n}function k(){var n=Object(d.a)(["\n  width: 50px;\n  height: auto;\n  border-radius: 50%;\n  border: 3px solid #0f084b;\n"]);return k=function(){return n},n}function y(){var n=Object(d.a)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 3%;\n  text-decoration: underline;\n"]);return y=function(){return n},n}function E(){var n=Object(d.a)(["\n  background-color: #0f084b;\n  color: white;\n  padding: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  position: absolute;\n  bottom: 10%;\n  right: 5%;\n  text-transform: uppercase;\n"]);return E=function(){return n},n}function z(){var n=Object(d.a)(["\n  font-weight: 250;\n  color: #4c2c72;\n  letter-spacing: -1px;\n  font-size: 1.5rem;\n"]);return z=function(){return n},n}function S(){var n=Object(d.a)(["\n  border-radius: 1rem;\n  background-color: #212121;\n  padding: 0.3rem;\n"]);return S=function(){return n},n}var _=b.a.div(S()),C=b.a.p(z()),q=b.a.a(E()),B=b.a.h3(y()),D=b.a.img(k()),I=(b.a.div(w()),b.a.h3(O())),J=b.a.img(x()),M=b.a.h2(j()),R=b.a.div(v()),A=(b.a.span(g()),function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(_,null,a.a.createElement("span",null,a.a.createElement(D,{src:this.props.stream.channel.logo}),a.a.createElement(C,null,this.props.stream.channel.display_name)),a.a.createElement(M,null,this.props.stream.channel.game),a.a.createElement(R,null,a.a.createElement(J,{src:this.props.stream.preview.large}),";",a.a.createElement(B,null,this.props.stream.channel.status),a.a.createElement(I,null,this.props.stream.viewers),a.a.createElement(q,{href:this.props.stream.channel.url,target:"_blank"},"Watch Now")))}}]),e}(r.Component));function L(){var n=Object(d.a)(["\n  position: relative;\n  color: white;\n  font-size: 1.85rem;\n  font-weight: 230;\n  letter-spacing: -1px;\n  margin: 3.5rem 1rem 2.5rem 1rem;\n\n  &[data-badge]:after {\n    content: attr(data-badge);\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    font-size: 0.7em;\n    background: green;\n    color: white;\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    line-height: 18px;\n    border-radius: 50%;\n    box-shadow: 0 0 1px #333;\n  }\n"]);return L=function(){return n},n}function N(){var n=Object(d.a)(["\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n  grid-gap: 1.25rem;\n"]);return N=function(){return n},n}var T=b.a.div(N()),W=b.a.span(L()),G=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).state={liveStreams:null},t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=Object(h.a)(f.a.mark(function n(){var e,t;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.twitch.tv/kraken/streams?channel=mizkif,ninja,destiny,xQcOW,Hyphonix,Boneclinks,shroud,DrDisrespect,LIRIK,AndyMilonakis,Greekgodx,trihex,cloakzy,Tfue,Reckful,Asmongold,erobb221,Yassuo,Trainwreckstv,sodapoppin,MitchJones,Nmplol,summit1g,loltyler1,pokelawls,ZeRo,CoconutB&client_id=qc6qmzy5llaqzvfagxyjw7ekzpzs3s");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,console.log(t),this.setState({liveStreams:t});case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return null!=this.state.liveStreams?a.a.createElement("main",null,a.a.createElement(W,{"data-badge":this.state.liveStreams._total},"Live Streams"),a.a.createElement(T,null,this.state.liveStreams.streams.map(function(n){return a.a.createElement(A,{key:n.channel._id,stream:n})}))):null}}]),e}(r.Component),H=(t(31),function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(G,null)}}]),e}(r.Component));i.a.render(a.a.createElement(H,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.0a0b7eca.chunk.js.map