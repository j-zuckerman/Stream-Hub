(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(n,e,t){n.exports=t(32)},31:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(3),u=t(4),l=t(6),s=t(5),m=t(7),p=t(9),f=t.n(p),h=t(14),d=t(1),b=t(2);function g(){var n=Object(d.a)(["\n  position: relative;\n"]);return g=function(){return n},n}function v(){var n=Object(d.a)(["\n  font-size: 1.55rem;\n  color: white;\n  text-align: center;\n  font-weight: 300;\n"]);return v=function(){return n},n}function j(){var n=Object(d.a)(["\n  width: 100%;\n  height: auto;\n  border-radius: 1rem;\n  opacity: 0.7;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient(to bottom right, #002f4b, #dc4225);\n    opacity: 0.6;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(d.a)(["\n  height: 10px;\n  width: 10px;\n  background-color: red;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n"]);return O=function(){return n},n}function w(){var n=Object(d.a)(["\n  font-size: 1.2rem;\n  color: white;\n"]);return w=function(){return n},n}function k(){var n=Object(d.a)(["\n  position: absolute;\n  bottom: 10%;\n  left: 3.5%;\n"]);return k=function(){return n},n}function x(){var n=Object(d.a)(["\n  width: 50px;\n  height: auto;\n  border-radius: 50%;\n  border: 3px solid #5e227a;\n  vertical-align: middle;\n"]);return x=function(){return n},n}function y(){var n=Object(d.a)(["\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: white;\n  position: absolute;\n  top: 0;\n  left: 3%;\n  text-decoration: underline;\n"]);return y=function(){return n},n}function E(){var n=Object(d.a)(["\n  background-color: #5e227a;\n  color: white;\n  padding: 1rem;\n  font-size: 1.25rem;\n  text-decoration: none;\n  position: absolute;\n  bottom: 10%;\n  right: 5%;\n  text-transform: uppercase;\n\n  &:hover {\n    transform: scale(1.05);\n    background-color: #421856;\n  }\n"]);return E=function(){return n},n}function z(){var n=Object(d.a)(["\n  font-weight: 250;\n  color: white;\n  letter-spacing: -1px;\n  font-size: 1.6rem;\n  margin-left: 0.5rem;\n"]);return z=function(){return n},n}function S(){var n=Object(d.a)(["\n  padding: 1rem;\n"]);return S=function(){return n},n}function _(){var n=Object(d.a)(["\n  border-radius: 1rem;\n  background-color: #212121;\n  padding: 0.3rem;\n\n  &:hover: {\n    transform: scale(1.03);\n  }\n"]);return _=function(){return n},n}var C=b.a.div(_()),q=b.a.span(S()),B=b.a.span(z()),D=b.a.a(E()),I=b.a.h3(y()),J=b.a.img(x()),M=b.a.span(k()),N=b.a.span(w()),R=b.a.span(O()),W=b.a.img(j()),A=b.a.h2(v()),L=b.a.div(g()),T=function(n){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(C,null,a.a.createElement(q,null,a.a.createElement(J,{src:this.props.stream.channel.logo}),a.a.createElement(B,null,this.props.stream.channel.display_name)),a.a.createElement(A,null,this.props.stream.channel.game),a.a.createElement(L,null,a.a.createElement(W,{src:this.props.stream.preview.large}),";",a.a.createElement(I,null,this.props.stream.channel.status),a.a.createElement(M,null,a.a.createElement(R,null),a.a.createElement(N,null,this.props.stream.viewers+" Watching Now")),a.a.createElement(D,{href:this.props.stream.channel.url,target:"_blank"},"Watch Now")))}}]),e}(r.Component);function G(){var n=Object(d.a)(["\n  margin: 1rem;\n  height: 2px;\n  background-color: rgba(255, 255, 255, 0.12);\n  border: none;\n  flex-shrink: 0;\n"]);return G=function(){return n},n}function H(){var n=Object(d.a)(["\n  position: relative;\n  color: white;\n  font-size: 1.85rem;\n  font-weight: 230;\n  letter-spacing: -1px;\n\n  &[data-badge]:after {\n    content: attr(data-badge);\n    position: absolute;\n    top: -0.75rem;\n    right: -1.25rem;\n    font-size: 1.3rem;\n    background: #5e227a;\n    color: white;\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    line-height: 18px;\n    border-radius: 50%;\n    padding: 0.2rem;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(d.a)(["\n  margin: 3.5rem 1rem 2.5rem 1rem;\n"]);return K=function(){return n},n}function Q(){var n=Object(d.a)(["\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n  grid-gap: 1.25rem;\n"]);return Q=function(){return n},n}var Y=b.a.div(Q()),Z=b.a.div(K()),F=b.a.span(H()),P=b.a.hr(G()),U=function(n){function e(n){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).state={liveStreams:null},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=Object(h.a)(f.a.mark(function n(){var e,t;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.twitch.tv/kraken/streams?channel=mizkif,ninja,destiny,xQcOW,Hyphonix,Boneclinks,shroud,DrDisrespect,LIRIK,AndyMilonakis,Greekgodx,trihex,cloakzy,Tfue,Reckful,Asmongold,erobb221,Yassuo,Trainwreckstv,sodapoppin,MitchJones,Nmplol,summit1g,loltyler1,pokelawls,ZeRo,CoconutB&client_id=qc6qmzy5llaqzvfagxyjw7ekzpzs3s");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,console.log(t),this.setState({liveStreams:t});case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return null!=this.state.liveStreams?a.a.createElement("main",null,a.a.createElement(Z,null,a.a.createElement(F,{"data-badge":this.state.liveStreams._total},"Live Streams")),a.a.createElement(P,null),a.a.createElement(Y,null,this.state.liveStreams.streams.map(function(n){return a.a.createElement(T,{key:n.channel._id,stream:n})}))):null}}]),e}(r.Component),V=(t(31),function(n){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(U,null)}}]),e}(r.Component));i.a.render(a.a.createElement(V,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1ac029b3.chunk.js.map