(this["webpackJsonpnews-aggregator"]=this["webpackJsonpnews-aggregator"]||[]).push([[0],{102:function(e,a,t){e.exports=t(118)},107:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i);t(107);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(108);var l=t(66),c=t(11),s=t(182),m=t(165),d=t(161),p=t(179),u=t(163),g=t(181),h=t(167),E=t(166),f=t(57),b=t.n(f),w=t(45),v=t(158),y=t(160);const N=Object(v.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}));function x(){const e=N();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(s.a,{className:e.avatar},r.a.createElement(b.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(u.a,{control:r.a.createElement(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:"/dashboard"},"Sign In"),r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{href:"/registration",variant:"body2"},"Don't have an account? Sign Up"))))))}t(75);var k=t(169),C=t(171),S=t(172),D=t(170),j=t(173),O=t(168),W=t(21),B=t(76),I=t.n(B);const F=Object(v.a)({root:{maxWidth:345,margin:"7px",maxHeight:316.88,minHeight:316.88,backgroundColor:"#404040",color:"white"},root2:{maxWidth:650,margin:"7px",maxHeight:650},media:{height:200},color:{color:"white !important"}});function T(e){const a=F(),[t,n]=r.a.useState(!1),i=Object(W.a)(),o=Object(O.a)(i.breakpoints.down("sm"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:a.root},r.a.createElement(D.a,{href:e.url,target:"_blank"},r.a.createElement(C.a,{className:a.media,image:e.image,title:e.title}),r.a.createElement(S.a,null,r.a.createElement(w.a,{gutterBottom:!0,variant:"body2",component:"p"},e.title),r.a.createElement(w.a,{variant:"body2",color:"textSecondary",component:"p"},r.a.createElement(I.a,{fromNow:!0},e.publishedDate))))),r.a.createElement(j.a,{fullScreen:o,open:t,onClose:()=>{n(!1)},"aria-labelledby":"responsive-dialog-title"},r.a.createElement(k.a,{className:a.root2},r.a.createElement(D.a,null,r.a.createElement(C.a,{className:a.media,image:e.image,title:e.title}),r.a.createElement(S.a,null,r.a.createElement(w.a,{gutterBottom:!0,variant:"body2",component:"p"},e.title),r.a.createElement(w.a,{className:a.color,variant:"body2",component:"p"},e.publishedDate))))))}var A=t(80),q=t(3),z=t(183),H=t(174),L=t(175),U=t(162),P=t(164),R=t(77),J=t.n(R),G=t(79),M=t.n(G),V=t(78),Y=t.n(V),X=t(176),$=t(177),_=t(178);const K=Object(v.a)(e=>({root:{display:"flex",color:"black"},icon:{color:"#fff"},appBar:{backgroundColor:"#404040",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{backgroundColor:"#404040",width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{backgroundColor:"#404040",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:{backgroundColor:"#404040",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1,[e.breakpoints.up("sm")]:{width:e.spacing(9)+1}},toolbar:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}));function Q(e){const a=K(),t=Object(W.a)(),[n,i]=r.a.useState(!1),o=a=>{e.changeCategoryEvent(a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(d.a,null),r.a.createElement(H.a,{position:"fixed",className:Object(q.a)(a.appBar,{[a.appBarShift]:n})},r.a.createElement(L.a,null,r.a.createElement(P.a,{color:"inherit","aria-label":"open drawer",onClick:()=>{i(!0)},edge:"start",className:Object(q.a)(a.menuButton,{[a.hide]:n})},r.a.createElement(J.a,null)),r.a.createElement(w.a,{variant:"h6",noWrap:!0},"News Aggregator"))),r.a.createElement(z.a,{variant:"permanent",className:Object(q.a)(a.drawer,{[a.drawerOpen]:n,[a.drawerClose]:!n}),classes:{paper:Object(q.a)({[a.drawerOpen]:n,[a.drawerClose]:!n})}},r.a.createElement("div",{className:a.toolbar},r.a.createElement(P.a,{onClick:()=>{i(!1)}},"rtl"===t.direction?r.a.createElement(Y.a,null):r.a.createElement(M.a,null))),r.a.createElement(U.a,null,r.a.createElement(X.a,{button:!0,key:"Business",onClick:()=>o("business")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-briefcase"})),r.a.createElement(_.a,{className:a.icon,primary:"Business"})),r.a.createElement(X.a,{button:!0,key:"Sports",onClick:()=>o("sports")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-futbol-o"})),r.a.createElement(_.a,{className:a.icon,primary:"Sports"})),r.a.createElement(X.a,{button:!0,key:"Technology",onClick:()=>o("technology")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-laptop"})),r.a.createElement(_.a,{className:a.icon,primary:"Technology"})),r.a.createElement(X.a,{button:!0,key:"Science",onClick:()=>o("science")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-flask"})),r.a.createElement(_.a,{className:a.icon,primary:"Science"})),r.a.createElement(X.a,{button:!0,key:"Entertainment",onClick:()=>o("entertainment")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-film","aria-hidden":"true"})),r.a.createElement(_.a,{className:a.icon,primary:"Entertainment"})),r.a.createElement(X.a,{button:!0,key:"Health",onClick:()=>o("health")},r.a.createElement($.a,{className:a.icon},r.a.createElement("i",{className:"fa fa-2x fa-medkit"})),r.a.createElement(_.a,{className:a.icon,primary:"Health"})))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(w.a,{paragraph:!0}),r.a.createElement(w.a,{paragraph:!0}))))}class Z extends r.a.Component{constructor(e){super(e),this.changeCategory=e=>{const a="".concat("https://news-aggregator-service-ogzk.onrender.com","/api/v1/get/newsData?category=").concat(e);fetch(a).then(e=>e.json()).then(a=>{if(a.data&&a.data.length>0){const t=new Date,n=new Date(a.data[0].publishedDate);if(Math.floor((t-n)/864e5)>1)return void this.addNewsData(e);this.setState({newsData:a.data})}else this.addNewsData(e)})},this.addNewsData=e=>{const a="".concat("https://news-aggregator-service-ogzk.onrender.com","/api/v1/wrapper/newsApiCall"),t={country:"us",category:e},n={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)};fetch(a,n).then(e=>e.json()).then(e=>{if(e.data===[])throw Error("No data available");this.setState({newsData:e.data})})},this.removeDuplicates=e=>{const a=[];for(let t in e)a.includes(e[t].title)?delete e[t]:a.push(e[t].title)},this.state={newsData:[]}}componentDidMount(){console.log("API URL:","https://news-aggregator-service-ogzk.onrender.com");let e="".concat("https://news-aggregator-service-ogzk.onrender.com","/api/v1/get/newsData");fetch(e).then(e=>e.json()).then(e=>{this.setState({newsData:e.data})})}render(){var{newsData:e}=this.state;return this.removeDuplicates(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{changeCategoryEvent:this.changeCategory.bind(this)}),r.a.createElement(E.a,{justifyContent:"center",direction:"row",container:!0,alignItems:"center",className:"Grid"},e.map((e,a)=>r.a.createElement(T,{key:a,image:e.imageUrl,title:e.title,content:e.content,url:e.url,publishedDate:new Date(e.publishedDate).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),description:e.description}))))}}var ee=Z,ae=t(180);function te(){return r.a.createElement(w.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}const ne=Object(v.a)(e=>({paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}));function re(){const e=ne();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(s.a,{className:e.avatar},r.a.createElement(b.a,null)),r.a.createElement(w.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(E.a,{item:!0,xs:12,sm:6},r.a.createElement(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(p.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(u.a,{control:r.a.createElement(g.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,href:"/login"},"Sign Up"),r.a.createElement(E.a,{container:!0,justify:"flex-end"},r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{href:"#",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(ae.a,{mt:5},r.a.createElement(te,null)))}const ie=()=>r.a.createElement("div",null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/Login",component:x}),r.a.createElement(c.b,{exact:!0,path:"/Dashboard",component:ee}),r.a.createElement(c.b,{exact:!0,path:"/"},r.a.createElement(c.a,{to:"/Dashboard"})),r.a.createElement(c.b,{exact:!0,path:"/Registration",component:re})));t(117);o.a.render(r.a.createElement(l.a,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},75:function(e,a,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.8d8ad709.chunk.js.map