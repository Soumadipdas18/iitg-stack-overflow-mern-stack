(this.webpackJsonpiitgstackoverflow=this.webpackJsonpiitgstackoverflow||[]).push([[0],{132:function(e,t,a){e.exports=a(203)},137:function(e,t,a){},145:function(e,t,a){},167:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=(a(137),a(2)),i=a.n(s),u=a(16),o=a(7),m=a(10),d=a(39),p=a(77),E=a(76),g=a(113),f=a(114),h=a.n(f),b=(a(81),a(69));function v(){var e=Object(g.a)(["\n    display: block;\n    text-align: center;\n    border-color: #0275d8;\n  "]);return v=function(){return e},e}var w=function(e){var t=e.isloading,a=Object(b.css)(v());return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement(h.a,{color:"red",loading:t,css:a,size:50}),r.a.createElement("br",null),r.a.createElement("h4",{className:"center"},"Loading")):null)},y=(a(145),a(37)),O=a(19),x=a(239),N=a(236),S=a(240),j=a(241),k=a(242),q=a(243),C=a(244),_=a(238),I=a(245),F=a(227),A=a(251),T=a(252),D=a(253),J=a(254),L=a(246),U=a(122),R=a.n(U),P=a(247),Q=a(11),H=a(117),G=a.n(H).a.create({baseURL:"https://apistackoverflowiitg.herokuapp.com/"}),M=a(228),B=a(229),z=a(230),W=a(231),Y=a(232),K=a(73),V=a.n(K),X=a(255),Z=a(248),$=a(249),ee=a(74),te=a.n(ee),ae=a(223),ne=a(78),re=a(250),le=a(120),ce=a(40),se=a.n(ce);a(99);function ie(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var ue=function(e){var t=e.imageURL,a=e.show,l=e.hide,c=e.ques_title,s=e.questiondesc,o=e.quid,m=r.a.useState(ie),d=Object(Q.a)(m,1)[0],p=Object(ae.a)((function(e){return{paper:{position:"absolute",width:"75%",maxHeight:"100%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],overflow:"scroll",padding:e.spacing(2,4,3)}}}))(),E=Object(n.useState)(s),g=Object(Q.a)(E,2),f=g[0],h=g[1],b=Object(n.useState)(c),v=Object(Q.a)(b,2),y=v[0],O=v[1],x=Object(n.useState)(t),N=Object(Q.a)(x,2),S=N[0],j=N[1],k=Object(n.useState)(null),q=Object(Q.a)(k,2),C=q[0],_=q[1],I=Object(n.useState)(!1),A=Object(Q.a)(I,2),T=A[0],D=A[1],J=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),D(!0),(a=new FormData).append("question_title",y),a.append("question",f),null!=C?(a.append("picture",C),a.append("imageadded","true")):a.append("imageadded","false"),e.next=8,G.put("/ques/".concat(o),a).then((function(e){window.location.reload()})).catch((function(e){return console.log(e.message)}));case 8:e.sent;case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(re.a,{open:a,onClose:l},r.a.createElement("center",null,r.a.createElement("div",{style:d,className:p.paper},T?r.a.createElement(w,{isloading:!0}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",null,"EDIT YOUR QUESTION"),r.a.createElement($.a,{"aria-label":"edit",onClick:function(e){l()}},r.a.createElement(se.a,{className:p.icon,style:{color:"red"}}))),r.a.createElement("form",{className:"form__question",onSubmit:J,encType:"multipart/form-data"},r.a.createElement(F.a,{"aria-label":"minimum height",type:"text",maxLength:"177",placeholder:"Title of question in 177 characters",value:y,className:"mb-2",required:!0,onChange:function(e){return O(e.target.value)}}),r.a.createElement(F.a,{"aria-label":"minimum height",type:"textarea",style:{height:200},placeholder:"Describe your question",value:f,required:!0,onChange:function(e){return h(e.target.value)}}),r.a.createElement(F.a,{type:"file",accept:"image/*",name:"picture",id:"exampleFile",className:"mt-2 mb-2",onChange:function(e){null!=e.target.files[0]&&(j(URL.createObjectURL(e.target.files[0])),_(e.target.files[0]))}}),null!=C?r.a.createElement("div",{className:"uploadimg"},r.a.createElement("div",{className:"container-modal mb-3"},r.a.createElement("img",{src:S}),r.a.createElement("div",{className:"topright"},r.a.createElement(Z.a,{title:"Delete File"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(e){j(null),console.log(C),_(null),document.querySelector("#exampleFile").value=null}},r.a.createElement(se.a,{className:p.icon,style:{color:"red"}})))))):null,r.a.createElement(le.a,{type:"submit",color:"warning"},"Post Question"))))))};a(167);function oe(e){var t=0;return e.text.split("\n").map((function(a){return t++,r.a.createElement("p",{key:e.id+"_"+t},a)}))}var me=function(e){var t=e.myquestions,a=e.askques,l=Object(n.useState)(!0),c=Object(Q.a)(l,2),s=c[0],o=c[1],m=Object(n.useState)(!1),d=Object(Q.a)(m,2),p=d[0],E=d[1],g=Object(n.useState)([]),f=Object(Q.a)(g,2),h=f[0],b=f[1],v=Object(n.useState)([]),O=Object(Q.a)(v,2),x=O[0],N=O[1],S=Object(ae.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},purple:{marginTop:"auto",marginBottom:"auto",height:"50px",width:"50px",color:e.palette.getContrastText(ne.a[500]),backgroundColor:ne.a[500]}}}))();Object(n.useEffect)((function(){t?function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,G.get("/ques/my/".concat(JSON.parse(window.localStorage.getItem("user")).id));case 3:return t=e.sent,e.next=6,N(t.data);case 6:console.log(t.data),E(!1),b(Array.from({length:t.data.length},(function(e,t){return!1})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,G.get("/ques/");case 3:return t=e.sent,e.next=6,N(t.data);case 6:console.log(t.data),E(!1),b(Array.from({length:t.data.length},(function(e,t){return!1})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]);var j=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),E(!1),e.next=4,G.delete("/ques/".concat(t));case 4:e.sent,o(!s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"head pb-2"},r.a.createElement("h2",null,t?"My":"Recent"," Questions"),r.a.createElement("button",{className:"ask_to_ques",onClick:function(){return a()}},"Ask a Question")),p?r.a.createElement(w,{isloading:p}):x.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{imageURL:e.picture,show:h[t],hide:function(){return b(Array.from({length:x.length},(function(e,t){return!1})))},ques_title:e.question_title,questiondesc:e.question,quid:e._id}),r.a.createElement("div",{key:e._id},r.a.createElement(M.a,null,r.a.createElement(B.a,{className:"card-header"},r.a.createElement("div",{className:"avatar-parent"},r.a.createElement(X.a,{className:S.purple},e.name[0]),r.a.createElement("div",{style:{width:"6px"}}),r.a.createElement("div",{className:"mt-auto mb-auto"},r.a.createElement("div",{className:"mt-auto mb-auto"},e.name),e.emailid&&e.rollno?r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{className:"mt-auto mb-auto text-muted"},e.emailid),r.a.createElement("div",null),r.a.createElement("small",{className:"mt-auto mb-auto text-muted"},e.rollno)):null)),r.a.createElement("div",null,r.a.createElement("small",{class:"text-muted"},e.date),e.userId==JSON.parse(window.localStorage.getItem("user")).id?r.a.createElement("div",{class:"button-bar"},r.a.createElement(Z.a,{className:"mt-auto mb-auto",title:"Edit your question"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(){return b(Array.from({length:x.length},(function(e,a){return a==t})))}},r.a.createElement(V.a,{className:S.icon,style:{color:"blue"}}))),r.a.createElement(Z.a,{className:"mt-auto mb-auto",title:"Delete your question"},r.a.createElement($.a,{"aria-label":"delete",onClick:function(){j(e._id)}},r.a.createElement(te.a,{className:S.icon,style:{color:"red"}})))):null)),r.a.createElement(z.a,null,r.a.createElement(W.a,null,r.a.createElement("strong",null,"Question: "),r.a.createElement(oe,{text:e.question_title,id:e._id}))),r.a.createElement(Y.a,null,r.a.createElement(y.b,{to:"/question/".concat(e._id),className:"link_to_ques",exact:!0},r.a.createElement("div",{className:"view"},"Answers \xa0 ")))),r.a.createElement("br",null)))})))},de={clientId:"ff607b18-dcf4-47db-8fa6-6258f68371fa",redirectUri:"https://determined-hopper-c48e23.netlify.app/",scopes:["user.read"]},pe=a(202);function Ee(e){return pe.Client.init({authProvider:function(t){t(null,e)}})}function ge(e){return fe.apply(this,arguments)}function fe(){return(fe=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ee(t),e.next=3,a.api("/me").get();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){var t={};if("string"===typeof e){var a=e.split("|");t=a.length>1?{message:a[1],debug:a[0]}:{message:e}}else t={message:e.message,debug:JSON.stringify(e)};return t}function be(e,t){return ve.apply(this,arguments)}function ve(){return(ve=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we(t,a);case 3:if(!(n=e.sent)){e.next=8;break}return e.next=7,ge(n);case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",null);case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function we(e,t){return ye.apply(this,arguments)}function ye(){return(ye=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.acquireTokenSilent({scopes:a});case 3:return n=e.sent,e.abrupt("return",n.accessToken);case 7:if(e.prev=7,e.t0=e.catch(0),!Oe(e.t0)){e.next=16;break}return e.next=12,t.acquireTokenPopup({scopes:a});case 12:return r=e.sent,e.abrupt("return",r.accessToken);case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Oe(e){return!(!e.message||e.message.length<=0)&&(e.message.indexOf("consent_required")>-1||e.message.indexOf("interaction_required")>-1||e.message.indexOf("login_required")>-1||e.message.indexOf("no_account_in_silent_request")>-1)}a(172);function xe(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}function Ne(e,t){return e.filter((function(e){return e!=t}))}var Se=function(e){var t=r.a.useState(xe),a=Object(Q.a)(t,1)[0],l=Object(ae.a)((function(e){return{paper:{position:"absolute",width:"75%",maxHeight:"100%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],overflow:"scroll",padding:e.spacing(2,4,3)}}}))(),c=Object(n.useState)(""),s=Object(Q.a)(c,2),o=s[0],m=s[1],d=Object(n.useState)(""),p=Object(Q.a)(d,2),E=p[0],g=p[1],f=Object(n.useState)(null),h=Object(Q.a)(f,2),b=h[0],v=h[1],y=Object(n.useState)(null),O=Object(Q.a)(y,2),x=O[0],N=O[1],S=Object(n.useState)(!1),j=Object(Q.a)(S,2),k=j[0],q=j[1],C=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),q(!0),a=E.toLowerCase().trim().replace(/\s\s+/g," ").trim().replace(/(\r\n|\n|\r)/gm,"").split(" "),e.next=5,Ne(a,"");case 5:return a=e.sent,(n=new FormData).append("name",JSON.parse(window.localStorage.getItem("user")).displayName),n.append("userId",JSON.parse(window.localStorage.getItem("user")).id),n.append("rollno",JSON.parse(window.localStorage.getItem("user")).surname||null),n.append("emailid",JSON.parse(window.localStorage.getItem("user")).mail||JSON.parse(window.localStorage.getItem("user")).userPrincipalName),n.append("question",o),n.append("question_title",E),null!=x?(n.append("picture",x),n.append("imageadded","true")):n.append("imageadded","false"),n.append("keywordarray",a),e.next=17,G.post("/ques/",n).then((function(e){window.location.reload()})).catch((function(e){return console.log(e.message)}));case 17:e.sent;case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(re.a,{open:e.show,onClose:e.onHide},r.a.createElement("center",null,r.a.createElement("div",{style:a,className:l.paper},k?r.a.createElement(w,{isloading:!0}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-header"},r.a.createElement("h4",null,"ASK A QUESTION"),r.a.createElement($.a,{"aria-label":"edit",onClick:function(t){e.onHide()}},r.a.createElement(se.a,{className:l.icon,style:{color:"red"}}))),r.a.createElement("form",{className:"form__question",onSubmit:C,encType:"multipart/form-data"},r.a.createElement(F.a,{"aria-label":"minimum height",type:"text",maxLength:"177",placeholder:"Title of question in 177 characters",value:E,className:"mb-2",required:!0,onChange:function(e){return g(e.target.value)}}),r.a.createElement(F.a,{"aria-label":"minimum height",type:"textarea",style:{height:200},placeholder:"Describe your question",value:o,required:!0,onChange:function(e){return m(e.target.value)}}),r.a.createElement(F.a,{type:"file",accept:"image/*",name:"picture",id:"exampleFile",className:"mt-2 mb-2",onChange:function(e){null!=e.target.files[0]&&(v(URL.createObjectURL(e.target.files[0])),N(e.target.files[0]))}}),null!=b?r.a.createElement("div",{className:"uploadimg"},r.a.createElement("div",{className:"container-modal mb-3"},r.a.createElement("img",{src:b}),r.a.createElement("div",{className:"topright"},r.a.createElement(Z.a,{title:"Delete File"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(e){v(null),console.log(x),N(null),document.querySelector("#exampleFile").value=null}},r.a.createElement(se.a,{className:l.icon,style:{color:"red"}})))))):null,r.a.createElement(le.a,{type:"submit",color:"warning"},"Post Question"))))))},je=a(36),ke=a(233);a(173);function qe(e){var t=0;return e.text.split("\n").map((function(a){return t++,r.a.createElement("p",{key:e.id+"_"+t},a)}))}var Ce=function(e){var t=e.searchtext,a=Object(n.useState)([]),l=Object(Q.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var a,n,r,l,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/ques/");case 2:for(a=e.sent,n=t.toLowerCase().trim().replace(/\s\s+/g," ").trim().replace(/(\r\n|\n|\r)/gm,"").split(" "),r=0;r<a.data.length;r++){for(l=0,console.log(a.data[r].keywordarray),c=0;c<n.length;c++)console.log("index loop with ".concat(a.data[r].keywordarray)),a.data[r].keywordarray.includes(n[c])&&(l+=1);l-n.length>=-5&&0!==l&&s((function(e){return[].concat(Object(je.a)(e),[a.data[r]])}))}case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s([]),function(){e.apply(this,arguments)}()}),[t]),0!=c.length&&0!=t.length?c.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(M.a,{className:"mt-2"},r.a.createElement(B.a,null,"Recent Questions"),r.a.createElement(z.a,null,r.a.createElement(ke.a,null,r.a.createElement("strong",null,"Asked by: "),e.name),r.a.createElement(W.a,null,r.a.createElement("strong",null,"Question: "),r.a.createElement(qe,{text:e.question_title,id:e._id})),r.a.createElement(y.b,{to:"/question/".concat(e._id),className:"btn btn-warning",exact:!0},"View Question"))),r.a.createElement("br",null))})):r.a.createElement("div",{class:"no-search"},"No Search Results")},_e=a(237),Ie=a(234),Fe=a(235);a(174);var Ae=function(e){var t=e.is404;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{class:"notfound"},r.a.createElement("div",{class:"notfound-404"},r.a.createElement("h1",null,"Oops!")),r.a.createElement("h2",null,"404 - Page not found"),r.a.createElement("p",null,"The page you are looking for might have been removed had its name changed or is temporarily unavailable."),r.a.createElement("a",{href:"/"},"Go To Homepage"))):null)};a(175);function Te(e){var t=0;return(e.text+"").split("\n").map((function(a){return t++,r.a.createElement("p",{key:e.id+"_"+t},a)}))}var De=function(){var e=Object(ae.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},orange:{color:e.palette.getContrastText(Ie.a[500]),backgroundColor:Ie.a[500],height:"50px",width:"50px"},purple:{color:e.palette.getContrastText(Fe.a[500]),backgroundColor:Fe.a[500]}}})),t=Object(n.useState)(window.location.href.split("/")[window.location.href.split("/").length-1]),a=Object(Q.a)(t,2),l=a[0],c=(a[1],Object(n.useState)([])),s=Object(Q.a)(c,2),o=s[0],m=s[1],d=Object(n.useState)([]),p=Object(Q.a)(d,2),E=p[0],g=p[1],f=Object(n.useState)(""),h=Object(Q.a)(f,2),b=h[0],v=h[1],y=Object(n.useState)(""),O=Object(Q.a)(y,2),x=O[0],S=O[1],j=Object(n.useState)(""),k=Object(Q.a)(j,2),q=k[0],C=k[1],I=Object(n.useState)(!0),A=Object(Q.a)(I,2),T=A[0],D=A[1],J=Object(n.useState)(!1),L=Object(Q.a)(J,2),U=L[0],R=L[1],P=Object(n.useState)(null),H=Object(Q.a)(P,2),Y=H[0],K=H[1],ee=Object(n.useState)(null),ne=Object(Q.a)(ee,2),re=ne[0],ce=ne[1],ie=Object(n.useState)(!1),ue=Object(Q.a)(ie,2),oe=ue[0],me=ue[1],de=Object(n.useState)(null),pe=Object(Q.a)(de,2),Ee=pe[0],ge=pe[1],fe=Object(n.useState)(null),he=Object(Q.a)(fe,2),be=he[0],ve=he[1],we=Object(n.useState)(!1),ye=Object(Q.a)(we,2),Oe=ye[0],xe=ye[1],Ne=Object(n.useState)(!1),Se=Object(Q.a)(Ne,2),je=Se[0],qe=Se[1],Ce=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),me(!0),(a=new FormData).append("name",JSON.parse(window.localStorage.getItem("user")).displayName),a.append("userId",JSON.parse(window.localStorage.getItem("user")).id),a.append("rollno",JSON.parse(window.localStorage.getItem("user")).surname||null),a.append("emailid",JSON.parse(window.localStorage.getItem("user")).mail||JSON.parse(window.localStorage.getItem("user")).userPrincipalName),a.append("answer",b),a.append("questionID",o._id),null!=re?(a.append("picture",re),a.append("imageadded","true")):a.append("imageadded","false"),e.next=12,G.post("/ques/answer",a).then((function(e){D(!T),K(null),v(""),ce(null),document.querySelector("#exampleFile").value=null})).catch((function(e){return console.log(e.message)}));case 12:e.sent,me(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),e.next=3,G.delete("ques/answer/".concat(o._id,"/").concat(t)).then((function(e){return D(!T)})).catch((function(e){return console.log(e.message)}));case 3:e.sent,me(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),a=new FormData,null!=be?(a.append("picture",be),a.append("imageadded","true")):a.append("imageadded","false"),a.append("answer",x),e.next=6,G.put("ques/answer/".concat(o._id,"/").concat(t),a).then((function(e){D(!T),R(!1),C(""),S("")})).catch((function(e){return console.log(e.message)}));case 6:e.sent,me(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.get("/ques/".concat(l)).catch((function(e){return xe(!0)}));case 2:return t=e.sent,e.next=5,G.get("/ques/answer/".concat(l));case 5:return a=e.sent,e.next=8,m(t.data);case 8:return e.next=10,g(a.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[T]);var Le=e();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{is404:Oe}),Oe?null:r.a.createElement(r.a.Fragment,null,oe?r.a.createElement(w,{isloading:!0}):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement("h2",{className:"pt-4 pb-2"},"Question"),r.a.createElement(M.a,null,r.a.createElement(B.a,{tag:"h5"},r.a.createElement("strong",null,o.question_title),r.a.createElement("div",null,r.a.createElement("small",{class:"text-muted"},o.date))),r.a.createElement(z.a,null,r.a.createElement(ke.a,null,r.a.createElement("strong",null,"Description: ")),r.a.createElement(W.a,null,r.a.createElement(Te,{text:o.question,id:o._id})),r.a.createElement("img",{src:o.picture,className:"image_ques",onClick:function(){return window.open(o.picture,"_blank")}}),r.a.createElement(ke.a,{tag:"h5"},r.a.createElement("strong",null,"Asked By: ")),r.a.createElement(W.a,null,r.a.createElement("strong",null,r.a.createElement("small",{className:"text-muted"},o.name,r.a.createElement("br",null))),r.a.createElement("small",{className:"text-muted"},o.emailid,r.a.createElement("br",null)),r.a.createElement("small",{className:"text-muted"},o.rollno,r.a.createElement("br",null))))),r.a.createElement("br",null),0===E.length?r.a.createElement("h2",null,"No Solution yet"):r.a.createElement("h2",null,"Solutions"),E.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement(M.a,null,r.a.createElement(B.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("div",{className:"avatar-parent"},r.a.createElement(X.a,{className:Le.orange,style:{marginTop:"auto",marginBottom:"auto"}},e.name[0]),r.a.createElement("div",{style:{width:"6px"}}),r.a.createElement("div",{className:"mt-auto mb-auto"},r.a.createElement("div",{className:"mt-auto mb-auto"},e.name),e.emailid&&e.rollno?r.a.createElement(r.a.Fragment,null,r.a.createElement("small",{className:"mt-auto mb-auto text-muted"},e.emailid),r.a.createElement("div",null),r.a.createElement("small",{className:"mt-auto mb-auto text-muted"},e.rollno)):null)),e.userId==JSON.parse(window.localStorage.getItem("user")).id?r.a.createElement("div",null,r.a.createElement(Z.a,{className:"mt-auto mb-auto",title:"Edit your solution"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(){R(!0),C(e._id),ge(e.picture),S(e.answer),qe(e.picture.length>0)}},r.a.createElement(V.a,{className:Le.icon,style:{color:"blue"}}))),r.a.createElement(Z.a,{className:"mt-auto mb-auto",title:"Delete your solution"},r.a.createElement($.a,{"aria-label":"delete",onClick:function(){return De(e._id)}},r.a.createElement(te.a,{className:Le.icon,style:{color:"red"}})))):null),r.a.createElement(z.a,null,r.a.createElement(W.a,null,r.a.createElement("strong",null,"Solution: "),r.a.createElement(Te,{text:e.answer,id:e._id})),r.a.createElement("img",{src:e.picture,className:"image_ans",onClick:function(){return window.open(o.picture,"_blank")}}))),r.a.createElement("br",null))})),r.a.createElement("br",null),U?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Edit your Solution"),r.a.createElement(_e.a,null,r.a.createElement(_.a,null,r.a.createElement(F.a,{type:"textarea",value:x,required:!0,onChange:function(e){return S(e.target.value)},className:"mb-2",style:{height:200}})),r.a.createElement(_.a,{className:"editimg"},r.a.createElement("div",{className:"container-modal mb-3"},r.a.createElement("img",{src:Ee}),r.a.createElement("div",{className:"topright"},r.a.createElement(Z.a,{title:"Delete File"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(e){ge(null),ve(null),qe(!1),document.querySelector("#exampleFile2").value=null,document.querySelector(".editimg").style.display="none"}},je?r.a.createElement(se.a,{className:Le.icon,style:{color:"red"}}):null))))),r.a.createElement(_.a,null,r.a.createElement(F.a,{type:"file",accept:"image/*",name:"picture",id:"exampleFile2",className:"mt-2 mb-2",onChange:function(e){null!=e.target.files[0]&&(ge(URL.createObjectURL(e.target.files[0])),qe(!0),document.querySelector(".editimg").style.display="block",ve(e.target.files[0]))}})),r.a.createElement(_.a,{className:"mb-1"},r.a.createElement(le.a,{className:"btn btn-success",onClick:function(){return Je(q)}},"Confirm Changes")),r.a.createElement(_.a,{classNAme:"mb-3"},r.a.createElement(le.a,{className:"btn btn-danger",onClick:function(){R(!1),C(""),S("")}},"Cancel")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add a Solution"),r.a.createElement(_e.a,null,r.a.createElement(_.a,null,r.a.createElement(F.a,{type:"textarea",value:b,required:!0,onChange:function(e){return v(e.target.value)},className:"mb-2",style:{height:200}})),r.a.createElement(_.a,null,r.a.createElement(F.a,{type:"file",accept:"image/*",name:"picture",id:"exampleFile",className:"mt-2 mb-2",onChange:function(e){null!=e.target.files[0]&&(K(URL.createObjectURL(e.target.files[0])),ce(e.target.files[0]))}})),null!=Y?r.a.createElement("div",{className:"uploadimg-ans"},r.a.createElement("div",{className:"container-modal mb-3"},r.a.createElement("img",{src:Y}),r.a.createElement("div",{className:"topright"},r.a.createElement(Z.a,{title:"Delete File"},r.a.createElement($.a,{"aria-label":"edit",onClick:function(e){K(null),ce(null),document.querySelector("#exampleFile").value=null}},r.a.createElement(se.a,{className:Le.icon,style:{color:"red"}})))))):null,r.a.createElement(_.a,null,r.a.createElement(le.a,{className:"btn btn-success",onClick:Ce},"Submit")))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))};a(176);var Je=function(e){var t=e.name;return r.a.createElement("div",null,r.a.createElement("div",{className:"bg-text"},r.a.createElement(N.a,{className:"bg-text-cont"},r.a.createElement("h1",{className:"title"},"IITG Stack Overflow"),r.a.createElement("h1",null,"Welcome ",t),r.a.createElement("p",{className:"lead"},"This app is built using MERN Stack.",r.a.createElement("br",null)," You can ask your tech related queries and someone will answer them.",r.a.createElement("br",null),"Use the navigation bar at the top of the page to get started."))),r.a.createElement("img",{src:"https://res.cloudinary.com/dmcbeyvr4/image/upload/v1628275669/iitgstackoverflow/iitgback_ita5se.jpg",className:"bg-image"}))};a(177);var Le=function(e){var t=e.onClick;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-manual"},r.a.createElement("div",{className:"card-manual"},r.a.createElement("div",{className:"container-manual"},r.a.createElement("div",{className:"menu-manual"},r.a.createElement("img",{className:"iitgicon-manual",src:"https://res.cloudinary.com/dmcbeyvr4/image/upload/v1628275671/iitgstackoverflow/iitgicon_njgwqm.png",alt:""})),r.a.createElement("br",null),r.a.createElement("div",{className:"content-manual"},r.a.createElement("div",{className:"text-manual"},r.a.createElement("h1",null,"IITG ",r.a.createElement("br",null),"Stack Overflow"),r.a.createElement("p",null,"Welcome to IITG Stack Overflow ",r.a.createElement("br",null),"This application is built using MERN Stack where usrs can post their queries related to tech and other stuff"),r.a.createElement("button",{onClick:function(){return t()}},"Let's go !")))),r.a.createElement("br",null),r.a.createElement("div",{className:"photo-manual"}))))},Ue=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggle=n.toggle.bind(Object(d.a)(n)),n.state={isOpen:!1,isloading:!1,error:null,modalShow:!1,isAuthenticated:null!==localStorage.getItem("user"),user:JSON.parse(window.localStorage.getItem("user")),searchtext:"",_uniqueid:""},n.userAgentApplication=new P.a({auth:{clientId:de.clientId,redirectUri:de.redirectUri},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}}),n}return Object(m.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"login",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.userAgentApplication.loginPopup({scopes:de.scopes,prompt:"select_account"});case 3:return this.setState({isloading:!0}),e.next=6,be(this.userAgentApplication,de.scopes);case 6:return t=e.sent,e.next=9,window.localStorage.setItem("user",JSON.stringify(t));case 9:this.setState({isAuthenticated:!0,user:{displayName:t.displayName,userPrincipalName:t.mail||t.userPrincipalName,id:t.id},error:null,isloading:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),this.setState({isAuthenticated:!1,user:{},error:he(e.t0),isloading:!1});case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.userAgentApplication.logout();case 2:localStorage.removeItem("user");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.error&&(alert(this.state.error.message),this.setState({error:null})),r.a.createElement(r.a.Fragment,null,this.state.isloading?null:r.a.createElement(y.a,null,this.state.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{color:"dark",dark:!0,expand:"md",className:"p-3"},r.a.createElement(N.a,null,r.a.createElement(S.a,{href:"/"},"IITG Stack Overflow"),r.a.createElement(j.a,{onClick:this.toggle}),r.a.createElement(k.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(q.a,{className:"mr-auto",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(y.b,{to:"/",className:"nav-link",exact:!0},"Home")),r.a.createElement(C.a,null,r.a.createElement(y.b,{to:"/myquestions",className:"nav-link",exact:!0},"MyQuestions")),r.a.createElement(C.a,null,r.a.createElement(y.b,{to:"/search",className:"nav-link",exact:!0},"SearchPage"))),r.a.createElement(q.a,null,r.a.createElement(_.a,{style:{width:300}},r.a.createElement(I.a,null,r.a.createElement(F.a,{placeholder:"Search a question",size:"md",type:"text",value:this.state.searchtext,className:"search-field",onChange:function(t){return e.setState({searchtext:t.target.value})}}),r.a.createElement(A.a,{addonType:"append"},r.a.createElement(y.b,{to:"/search",className:"btn btn-warning",exact:!0},r.a.createElement(R.a,null)))))),r.a.createElement("div",{className:"input-width-1"}),r.a.createElement(q.a,{navbar:!0},r.a.createElement(T.a,null,r.a.createElement(D.a,{nav:!0,caret:!0},r.a.createElement("i",{className:"far fa-user-circle fa-lg rounded-circle align-self-center mr-2",style:{width:"32px"}})),r.a.createElement(J.a,{right:!0},r.a.createElement("h5",{className:"dropdown-item-text mb-0"},this.state.user.displayName),r.a.createElement("p",{className:"dropdown-item-text text-muted mb-0"},this.state.user.userPrincipalName),r.a.createElement(L.a,{divider:!0}),r.a.createElement(L.a,{onClick:function(){return e.logout()}},"Sign Out"))))))),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Je,{name:e.state.user.displayName}),r.a.createElement(N.a,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{show:e.state.modalShow,onHide:function(){return e.setState({modalShow:!1})}}),r.a.createElement(me,{askques:function(){return e.setState({modalShow:!0})},className:"mt-5"}))}})))}}),r.a.createElement(O.a,{exact:!0,path:"/search",render:function(){return r.a.createElement(N.a,null,r.a.createElement(Ce,{searchtext:e.state.searchtext}))}}),r.a.createElement(O.a,{exact:!0,path:"/question/:id",render:function(){return r.a.createElement(N.a,null,r.a.createElement(De,null))}}),r.a.createElement(O.a,{exact:!0,path:"/myquestions",render:function(){return r.a.createElement(N.a,null,r.a.createElement(Se,{show:e.state.modalShow,onHide:function(){return e.setState({modalShow:!1})}}),r.a.createElement(me,{askques:function(){return e.setState({modalShow:!0})},editques:function(t,a,n,r){e.setState({editquestiontitle:a,editquestion:n,editquestionimgurl:r,editquid:t}),e.setState({modalShowedit:!0})},myquestions:!0}))}}),r.a.createElement(O.a,{path:"*"},r.a.createElement(Ae,{is404:!0})))):r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",exact:!0},r.a.createElement(Le,{onClick:function(){return e.login()}})),r.a.createElement(O.a,{path:"*"},r.a.createElement(Ae,{is404:!0})))),r.a.createElement(w,{isloading:this.state.isloading}))}}]),a}(n.Component);a(201);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ue,null)),document.getElementById("root"))},81:function(e,t,a){},99:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.31f1ab64.chunk.js.map