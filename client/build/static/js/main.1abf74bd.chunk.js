(this["webpackJsonpsy-structures-web-app"]=this["webpackJsonpsy-structures-web-app"]||[]).push([[0],{119:function(e,t){},120:function(e,t){},127:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(31),c=n.n(s),i=n(6),l=n.n(i),o=n(12),d=n(11),u=n(129),p=n(137),j=n(130),b=n(134),h=n(131),x=n(72),f=(n(86),x.a.initializeApp({apiKey:"AIzaSyAw4DJ6nlrv2x_ilJUwpswoef3hJ2AorIo",authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAw4DJ6nlrv2x_ilJUwpswoef3hJ2AorIo",REACT_APP_FIREBASE_APP_ID:"1:198812450568:web:4995488f56e887a48f36bd",REACT_APP_FIREBASE_AUTH_DOMAIN:"sy-auth-production-f970d.firebaseapp.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"198812450568",REACT_APP_FIREBASE_PROJECT_ID:"sy-auth-production-f970d",REACT_APP_FIREBASE_STORAGE_BUCKET:"sy-auth-production-f970d.appspot.com",REACT_APP_GOOGLE_DRIVE_API_KEY:"AIzaSyCIcU7f2xGtPCRIcCsr4M0WPcyxBOalwSE",REACT_APP_GOOGLE_DRIVE_CLIENT_ID:"597531148432-gi46mddcc0uk1jipcddd8li3ue7ha0s2.apps.googleusercontent.com"}).REACT_APP_FIREBASE_AUTH_DOMAI,projectId:"sy-auth-production-f970d",storageBucket:"sy-auth-production-f970d.appspot.com",messagingSenderId:"198812450568",appId:"1:198812450568:web:4995488f56e887a48f36bd"})),m=f.auth(),O=n(1),g=r.a.createContext();function v(){return Object(a.useContext)(g)}function y(e){var t=e.children,n=Object(a.useState)(),r=Object(d.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(!0),l=Object(d.a)(i,2),o=l[0],u=l[1];Object(a.useEffect)((function(){return m.onAuthStateChanged((function(e){c(e),u(!1)}))}),[]),m.onAuthStateChanged((function(e){c(e)}));var p={currentUser:s,login:function(e,t){return m.signInWithEmailAndPassword(e,t)},signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(O.jsx)(g.Provider,{value:p,children:!o&&t})}var w=n(14),N=n(19);function k(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=v().signup,s=Object(a.useState)(""),c=Object(d.a)(s,2),i=c[0],x=c[1],f=Object(a.useState)(!1),m=Object(d.a)(f,2),g=m[0],y=m[1],k=Object(w.g)();function E(){return(E=Object(o.a)(l.a.mark((function a(s){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",x("Passwords do not match"));case 3:return a.prev=3,x(""),y(!0),a.next=8,r(e.current.value,t.current.value);case 8:k.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),x("Failed to create an account");case 14:y(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"w100",style:{maxWidth:"400px"},children:[Object(O.jsx)(p.a,{children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Add New User"}),i&&Object(O.jsx)(j.a,{variant:"danger",children:i}),Object(O.jsxs)(b.a,{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(O.jsxs)(b.a.Group,{id:"email",children:[Object(O.jsx)(b.a.Label,{children:"Email"}),Object(O.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(b.a.Group,{id:"password",children:[Object(O.jsx)(b.a.Label,{children:"Password"}),Object(O.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(O.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(b.a.Control,{type:"password",ref:n,required:!0})]}),Object(O.jsx)(h.a,{disabled:g,className:"w-100 mt-4",type:"submit",children:"Add New User"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsx)(N.b,{to:"/",children:"Cancel"})})]})})})}var E=n(136),C=n(135),S=n(132),R=n(73),T=n(9),I=n.n(T),A=n(58),F=n.n(A),P="https://sy-custom-api-web-app.ts.r.appspot.com";function D(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(l.a.mark((function e(t,n,a){var r,s,c,i,o,d,u,p,j,b,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,s=null,c=null,i=null,"Geotechnical"!==n){e.next=11;break}return e.next=7,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='Engineering' and '"+t[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){r=e.data}));case 7:return e.next=9,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='"+n+"' and '"+r[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){r=e.data}));case 9:e.next=13;break;case 11:return e.next=13,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='"+n+"' and '"+t[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){r=e.data}));case 13:if("Photos"===n){e.next=16;break}return e.next=16,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='Received' and '"+r[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){r=e.data}));case 16:return e.next=18,I.a.post(P+"/listChildrenFolders",{q:"mimeType='application/vnd.google-apps.folder' and '"+r[0].id+"' in parents",fields:"nextPageToken, files(id, name)",spaces:"drive",pageToken:i}).then((function(e){s=e.data}));case 18:if(o="",0!==(d=s.files.sort((function(e,t){return e.name>t.name?1:-1}))).length){e.next=24;break}o="00",e.next=27;break;case 24:return e.next=26,d[d.length-1].name.toString();case 26:o=e.sent;case 27:return e.next=29,F()().format("DD MMMM YYYY").toLocaleString();case 29:return u=e.sent,e.next=32,Number(o.substring(0,2));case 32:return p=e.sent,e.next=35,p++;case 35:if(1!==p.toString().length){e.next=41;break}return e.next=38,"0";case 38:e.t0=e.sent,e.t1=p,p=e.t0+e.t1;case 41:return e.next=43,p;case 43:return e.t2=e.sent,e.t3=e.t2+" - ",e.t4=u,j=e.t3+e.t4,e.next=49,I.a.post(P+"/createFolder",{name:j,parents:[r[0].id],mimeType:"application/vnd.google-apps.folder"}).then((function(e){c=e.data.id}));case 49:b=0;case 50:if(!(b<a.length)){e.next=67;break}return h=new FormData,e.next=54,h.append("file",a[b]);case 54:return e.next=56,h.append("id",c);case 56:return e.prev=56,e.next=59,I.a.post(P+"/uploadFile",h,{headers:{"Content-Type":"multipart/form-data"}});case 59:e.next=64;break;case 61:e.prev=61,e.t5=e.catch(56),e.t5.response.status;case 64:b++,e.next=50;break;case 67:return e.abrupt("return",[c,j]);case 68:case"end":return e.stop()}}),e,null,[[56,61]])})))).apply(this,arguments)}function L(e,t){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(l.a.mark((function e(t,n){var a,r,s,c,i,o,d,u,p,j,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,r=null,s=null,c=null,e.next=6,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='CAD' and '"+t[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 6:return e.next=8,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='SY' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 8:return e.next=10,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='Issued' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 10:return e.next=12,I.a.post(P+"/listChildrenFolders",{q:"mimeType='application/vnd.google-apps.folder' and '"+a[0].id+"' in parents",fields:"nextPageToken, files(id, name)",spaces:"drive",pageToken:c}).then((function(e){r=e.data}));case 12:if(i="",0!==(o=r.files.sort((function(e,t){return e.name>t.name?1:-1}))).length){e.next=18;break}i="00",e.next=21;break;case 18:return e.next=20,o[o.length-1].name.toString();case 20:i=e.sent;case 21:return e.next=23,F()().format("DD MMMM YYYY").toLocaleString();case 23:return d=e.sent,e.next=26,Number(i.substring(0,2));case 26:return u=e.sent,e.next=29,u++;case 29:if(1!==u.toString().length){e.next=35;break}return e.next=32,"0";case 32:e.t0=e.sent,e.t1=u,u=e.t0+e.t1;case 35:return e.next=37,u;case 37:return e.t2=e.sent,e.t3=e.t2+" - ",e.t4=d,p=e.t3+e.t4,e.next=43,I.a.post(P+"/createFolder",{name:p,parents:[a[0].id],mimeType:"application/vnd.google-apps.folder"}).then((function(e){s=e.data.id}));case 43:j=0;case 44:if(!(j<n.length)){e.next=61;break}return b=new FormData,e.next=48,b.append("file",n[j]);case 48:return e.next=50,b.append("id",s);case 50:return e.prev=50,e.next=53,I.a.post(P+"/uploadFile",b,{headers:{"Content-Type":"multipart/form-data"}});case 53:e.next=58;break;case 55:e.prev=55,e.t5=e.catch(50),e.t5.response.status;case 58:j++,e.next=44;break;case 61:return e.abrupt("return",[s,p]);case 62:case"end":return e.stop()}}),e,null,[[50,55]])})))).apply(this,arguments)}function U(e,t){return G.apply(this,arguments)}function G(){return(G=Object(o.a)(l.a.mark((function e(t,n){var a,r,s,c,i,o,d,u,p,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,r=null,s=null,c=null,e.next=6,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='CAD' and '"+t[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 6:return e.next=8,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='SY' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 8:return e.next=10,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='Current PDF' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 10:return e.next=12,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='SS' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){c=e.data}));case 12:return e.next=14,I.a.post(P+"/listChildrenFolders",{q:"'"+a[0].id+"' in parents",fields:"nextPageToken, files(id, name)",spaces:"drive",pageToken:s}).then((function(e){r=e.data}));case 14:return i=[],o=[],e.next=18,r.files.forEach((function(e){for(var t=0;t<n.length;t++){var a=e.name.lastIndexOf("_");if(-1!==a){var r=e.name.substr(0,a),s=n[t].name.lastIndexOf("_");if(-1!==s)if(r===n[t].name.substr(0,s)){var c=e.name.substr(a+1),l=n[t].name.substr(s+1),d=c.lastIndexOf("."),u=l.lastIndexOf(".");if(c=c.substr(0,d),l=l.substr(0,u),!1===isNaN(l)&&!1===isNaN(c)){var p=Number(c);Number(l)>=p?i.push(e.id):o.push(t)}else if(!0===isNaN(l)&&!0===isNaN(c)){var j=Number(c.charCodeAt(0));Number(l.charCodeAt(0))>=j?i.push(e.id):o.push(t)}}}}}));case 18:d=0;case 19:if(!(d<i.length)){e.next=38;break}return u=new FormData,e.next=23,u.append("fileId",i[d]);case 23:return e.next=25,u.append("addParentId",c[0].id);case 25:return e.next=27,u.append("removeParentId",a[0].id);case 27:return e.prev=27,e.next=30,I.a.post(P+"/moveFile",u);case 30:e.next=35;break;case 32:e.prev=32,e.t0=e.catch(27),e.t0.response.status;case 35:d++,e.next=19;break;case 38:p=0;case 39:if(!(p<n.length)){e.next=57;break}if(o.includes(p)){e.next=54;break}return j=new FormData,e.next=44,j.append("file",n[p]);case 44:return e.next=46,j.append("id",a[0].id);case 46:return e.prev=46,e.next=49,I.a.post(P+"/uploadFile",j,{headers:{"Content-Type":"multipart/form-data"}});case 49:e.next=54;break;case 51:e.prev=51,e.t1=e.catch(46),e.t1.response.status;case 54:p++,e.next=39;break;case 57:case"end":return e.stop()}}),e,null,[[27,32],[46,51]])})))).apply(this,arguments)}function q(e,t){return H.apply(this,arguments)}function H(){return(H=Object(o.a)(l.a.mark((function e(t,n){var a,r,s,c,i,o,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,r=null,s=null,c=null,e.next=6,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='CAD' and '"+t[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 6:return e.next=8,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='SY' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 8:return e.next=10,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='Current PDF' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){a=e.data}));case 10:return e.next=12,I.a.post(P+"/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='SS' and '"+a[0].id+"' in parents",fields:"files(name,id)"}).then((function(e){c=e.data}));case 12:return e.next=14,I.a.post(P+"/listChildrenFolders",{q:"'"+a[0].id+"' in parents",fields:"nextPageToken, files(id, name)",spaces:"drive",pageToken:s}).then((function(e){r=e.data}));case 14:return i=[],e.next=17,r.files.forEach((function(e){var t=e.name.lastIndexOf(".");if(-1!==t)for(var a=e.name.substr(0,t),r=0;r<n.length&&a!==n[r];r++)r===n.length-1&&i.push(e.id)}));case 17:o=0;case 18:if(!(o<i.length)){e.next=37;break}return d=new FormData,e.next=22,d.append("fileId",i[o]);case 22:return e.next=24,d.append("addParentId",c[0].id);case 24:return e.next=26,d.append("removeParentId",a[0].id);case 26:return e.prev=26,e.next=29,I.a.post(P+"/moveFile",d);case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(26),e.t0.response.status;case 34:o++,e.next=18;break;case 37:case"end":return e.stop()}}),e,null,[[26,31]])})))).apply(this,arguments)}var M=n(34),Y=n(74),W=n(75),J=n(80),V=n(79),K=(n(69),n(133)),z=function(e){Object(J.a)(n,e);var t=Object(V.a)(n);function n(){return Object(Y.a)(this,n),t.apply(this,arguments)}return Object(W.a)(n,[{key:"handleSubmit",value:function(){var e=Object(o.a)(l.a.mark((function e(t,n,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""===t.target.Remark.value){e.next=4;break}return e.next=4,this.renameID(n,a,t.target.Remark.value);case 4:return e.next=6,null;case 6:t.target.Remark.value=e.sent;case 7:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"renameID",value:function(e,t,n){I.a.post("https://sy-custom-api-web-app.ts.r.appspot.com/renameID",{name:t+" - "+n,fileId:e})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)(K.a,Object(M.a)(Object(M.a)({},this.props),{},{backdrop:"static",keyboard:"false",children:[Object(O.jsx)(K.a.Header,{children:Object(O.jsx)(K.a.Title,{children:"Add remark/description for uploaded files"})}),Object(O.jsxs)(b.a,{onSubmit:function(t){e.handleSubmit(t,e.props.remarkdata[0],e.props.remarkdata[1])},children:[Object(O.jsx)(K.a.Body,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(b.a.Group,{className:"mb-2",id:"job-number",children:[Object(O.jsx)(b.a.Label,{className:"mb-0",children:"REMARK/DESCRIPTION"}),Object(O.jsx)(b.a.Control,{type:"text",name:"Remark",placeholder:"Remark goes here"})]})})}),Object(O.jsxs)(K.a.Footer,{children:[Object(O.jsx)(h.a,{variant:"secondary",onClick:this.props.onHide,children:"No Remark"}),Object(O.jsx)(h.a,{variant:"primary",type:"submit",onClick:this.props.onHide,children:"Add Remark"})]})]})]}))}}]),n}(a.Component),X=n(77),Q=n.n(X),Z=n(59);function $(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(""),c=Object(d.a)(s,2),i=c[0],x=c[1],f=v(),m=(f.currentUser,f.logout),g=Object(w.g)();function y(){return(y=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(""),e.prev=1,e.next=4,m();case 4:g.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),x("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}var k=Object(a.useRef)(null),T=Object(a.useRef)(null),A=Object(a.useRef)(null),F=Object(a.useState)(null),P=Object(d.a)(F,2),_=P[0],B=P[1];var G=Object(a.useState)(""),H=Object(d.a)(G,2),M=H[0],Y=H[1],W=Object(a.useState)(""),J=Object(d.a)(W,2),V=J[0],K=J[1],X=Object(a.useState)(!1),$=Object(d.a)(X,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(d.a)(ne,2),re=ae[0],se=ae[1],ce=Object(a.useState)(""),ie=Object(d.a)(ce,2),le=ie[0],oe=ie[1];function de(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==_&&0!==_.length){e.next=6;break}return K("No job selected. Please select a job before attempting to upload a file."),te(!0),e.abrupt("return");case 6:return e.next=8,r(!0);case 8:return e.t0=oe,e.next=11,D(_,t,n);case 11:return e.t1=e.sent,e.next=14,(0,e.t0)(e.t1);case 14:return e.next=16,De();case 16:return e.next=18,r(!1);case 18:return e.next=20,te(!1);case 20:return e.next=22,Y("Successfully uploaded "+n.length+" files");case 22:return e.next=24,se(!0);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(e){return je.apply(this,arguments)}function je(){return(je=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==_&&0!==_.length){e.next=6;break}return K("No job selected. Please select a job before attempting to upload a file."),te(!0),e.abrupt("return");case 6:return e.next=8,r(!0);case 8:return e.t0=oe,e.next=11,L(_,t);case 11:return e.t1=e.sent,e.next=14,(0,e.t0)(e.t1);case 14:return e.next=16,U(_,t);case 16:return e.next=18,De();case 18:return e.next=20,r(!1);case 20:return e.next=22,te(!1);case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=[];function he(e,t){return xe.apply(this,arguments)}function xe(){return(xe=Object(o.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==_&&0!==_.length){e.next=6;break}return K("No job selected. Please select a job before attempting to upload a file."),te(!0),e.abrupt("return");case 6:return e.next=8,r(!0);case 8:return e.next=10,fe(t);case 10:return e.t0=q,e.t1=_,e.next=14,Oe(be);case 14:return e.t2=e.sent,e.next=17,(0,e.t0)(e.t1,e.t2);case 17:return e.next=19,r(!1);case 19:return e.next=21,te(!1);case 21:return e.next=23,Y("Successfully uploaded "+n.length+" files");case 23:return e.next=25,se(!0);case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return me.apply(this,arguments)}function me(){return(me=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise(function(){var e=Object(o.a)(l.a.mark((function e(n,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=new FileReader).readAsArrayBuffer(t),r.onload=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,r,s,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.result,r=Z.read(a,{type:"buffer"}),s=r.SheetNames[0],c=r.Sheets[s],i=Z.utils.sheet_to_json(c),n(i);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.onerror=function(e){a(e)};case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=3,n.then(function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:be=t;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(o.a)(l.a.mark((function e(t){var n,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],a=0;a<t.length;a++)r=Object.values(t[a]),s=_[0].name+"_"+r[0]+"_"+r[1]+"_"+r[2],n.push(s);return be=[],e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve=Object(a.useRef)();var ye=Object(a.useState)(""),we=Object(d.a)(ye,2),Ne=we[0],ke=we[1];function Ee(){return(Ee=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t.target.files[0]){e.next=5;break}if(""===Ne){e.next=5;break}return e.next=4,de(Ne,t.target.files);case 4:ke("");case 5:t.target.value=null;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ce=null;function Se(){return(Se=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t.target.files[0]){e.next=6;break}return e.next=3,t.target.files;case 3:return Ce=e.sent,e.next=6,document.getElementById("liveReadXlsxFile").click();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Re(){return(Re=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t.target.files[0]){e.next=5;break}return e.next=3,pe(Ce);case 3:return e.next=5,he(t.target.files[0],Ce);case 5:return e.next=7,null;case 7:Ce=e.sent,t.target.value=null;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(){k.current.click()}var Ie=Object(a.useState)(!1),Ae=Object(d.a)(Ie,2),Fe=Ae[0],Pe=Ae[1],De=function(){return Pe(!0)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(z,{show:Fe,onHide:function(){return Pe(!1)},remarkdata:le}),Object(O.jsx)(E.a,{className:"",style:{minHeight:"7vh"},children:Object(O.jsxs)(u.a,{style:{minWidth:"97vw"},children:[Object(O.jsxs)(E.a.Brand,{children:[Object(O.jsx)("img",{alt:"",src:"https://systructures.com.au/wp-content/uploads/2020/05/sy-logo.png",className:"d-inline-block align-top"})," "]}),Object(O.jsxs)(C.a,{className:"mr-auto",children:[Object(O.jsx)(C.a.Link,{href:"/update-profile",children:"Update Profile"}),Object(O.jsx)(C.a.Link,{href:"/signup",children:"Add New User"}),Object(O.jsx)(N.b,{style:{backgroundColor:"#666666",color:"#FFFFFF"},onClick:function(){return y.apply(this,arguments)},className:"btn pull-right",children:"Log Out"})]})]})}),Object(O.jsxs)(j.a,{show:re,variant:"success",className:"d-flex align-items-center justify-content-between flex-row",children:[M,Object(O.jsx)(h.a,{onClick:function(){return se(!1)},variant:"outline-success",children:"Close"})]}),Object(O.jsxs)(j.a,{show:ee,variant:"danger",className:"d-flex align-items-center justify-content-between flex-row",children:[V,Object(O.jsx)(h.a,{onClick:function(){return te(!1)},variant:"outline-danger",children:"Close"})]}),n?Object(O.jsxs)("div",{style:{height:"93vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(O.jsx)(Q.a,{color:"#8B0000",loading:n,size:150}),Object(O.jsx)("h5",{className:"mt-4",children:"Files are being uploaded - this process may take a while"}),Object(O.jsx)("h5",{children:"Please do not close tab or browser"})]}):Object(O.jsxs)(u.a,{fluid:!0,children:[Object(O.jsxs)(S.a,{style:{height:"25vh"},className:"mb-4",children:[Object(O.jsx)(R.a,{xs:3,className:"d-flex align-items-start justify-content-center mt-2",children:Object(O.jsxs)(p.a,{style:{minHeight:"90%",borderRadius:"20px",backgroundColor:"#810B0A",borderColor:"lightgray"},className:"w-75 m-2",children:[Object(O.jsx)(u.a,{style:{color:"#FFF"},className:"mt-3 text-center border-bottom",children:Object(O.jsx)("h4",{children:"CREATE NEW JOB"})}),Object(O.jsx)(p.a.Body,{style:{backgroundColor:"white",borderBottomLeftRadius:"18px",borderBottomRightRadius:"18px"},className:"d-flex align-items-center justify-content-center",children:Object(O.jsx)(h.a,{className:"w-50",variant:"outline-dark",type:"submit",disabled:!0,children:"CREATE"})})]})}),Object(O.jsx)(R.a,{xs:6,className:"align-middle mt-2",children:Object(O.jsxs)(p.a,{style:{minHeight:"90%",borderRadius:"20px",backgroundColor:"#810B0A",borderColor:"lightgray"},className:"m-2",children:[Object(O.jsx)(u.a,{style:{color:"#FFF"},className:"mt-3 text-center border-bottom",children:Object(O.jsx)("h4",{children:"SELECT JOB"})}),Object(O.jsx)(p.a.Body,{style:{backgroundColor:"white",borderBottomLeftRadius:"18px",borderBottomRightRadius:"18px"},children:Object(O.jsxs)(b.a,{className:"d-flex align-items-center justify-content-center flex-row",onSubmit:function(e){var t;e.preventDefault(),t=ve.current.value,I.a.post("https://sy-custom-api-web-app.ts.r.appspot.com/getFolder",{q:"mimeType='application/vnd.google-apps.folder' and name='"+t+"'",fields:"files(name,id)"}).then((function(e){var t=e.data;B(t)}))},children:[Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(b.a.Group,{id:"job-number",children:[Object(O.jsx)(b.a.Label,{className:"mb-0",children:"JOB NUMBER"}),Object(O.jsx)(b.a.Control,{type:"text",placeholder:"Enter Job #",ref:ve,required:!0})]}),Object(O.jsx)(h.a,{className:"w-100 mt-3 mb-2",variant:"outline-dark",type:"submit",children:"SELECT"})]}),Object(O.jsxs)(u.a,{className:"text-center",children:[Object(O.jsx)("div",{children:"CURRENT JOB"})," ",null===_||0===_.length?"No Job Selected":_[0].name]})]})}),i&&Object(O.jsx)(j.a,{variant:"danger",children:i})]})}),Object(O.jsxs)(R.a,{className:"d-flex align-items-center flex-column justify-content-evenly",children:[Object(O.jsx)("input",{type:"file",onChange:function(e){return Se.apply(this,arguments)},ref:T,style:{display:"none"},accept:".pdf",multiple:!0}),Object(O.jsx)(h.a,{className:"w-50",variant:"outline-dark",onClick:function(){T.current.click()},children:"ISSUE SY DOCUMENT/S"}),Object(O.jsx)("input",{type:"file",onChange:function(e){return Re.apply(this,arguments)},ref:A,style:{display:"none"},accept:".xlsx, .xls, .csv",id:"liveReadXlsxFile"}),Object(O.jsx)(h.a,{className:"w-50",variant:"outline-dark",onClick:function(){A.current.click()},style:{display:"none"},children:"CLEAN CURRENT PDF (EXCEL)"})]})]}),Object(O.jsxs)(S.a,{style:{height:"34vh"},children:[Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"SAVE RECEIVED DOCUMENTS"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)("input",{type:"file",onChange:function(e){return Ee.apply(this,arguments)},ref:k,style:{display:"none"},multiple:!0}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",onClick:function(){ke("CAD"),Te()},children:"CAD"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",onClick:function(){ke("Photos"),Te()},children:"PHOTOS"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",onClick:function(){ke("Shop Drawings"),Te()},children:"SHOP DRAWINGS"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",onClick:function(){ke("Geotechnical"),Te()},children:"GEOTECHNICAL"})]})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"ADMIN DOCUMENTS"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"FEE PROPOSAL"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"FEE VARIATION"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"LETTER"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"REPORT"})]})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"CONCEPT"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"DESIGN BREIF"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"GEOTECH FEE REQUEST"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"CONCEPT DESIGN CHECKLIST"})]})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"DESIGN & DOCUMENTATION"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"SAFETY IN DESIGN REPORT"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"STRUCTURAL SPECIFICATIONS"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"CALCULATION DOCUMENT"})]})]})]}),Object(O.jsxs)(S.a,{style:{height:"34vh"},children:[Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"CONSTRUCTION"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"SITE INSPECTION REPORT"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"LETTER OF COMPLIANCE"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"SHOP DRAWING REVIEW"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"CERTIFICATION LETTER"})]})]}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(u.a,{className:"text-center",style:{height:"10%"},children:Object(O.jsx)("h5",{children:"QA"})}),Object(O.jsxs)(u.a,{className:"d-flex align-items-center flex-column justify-content-evenly",style:{height:"80% "},children:[Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"VERIFY ENGINEERING CHECKLIST"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"VERIFY BIM CHECKLIST"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"VERIFY DRAWING REVIEW"}),Object(O.jsx)(h.a,{className:"w-100",variant:"outline-dark",type:"submit",disabled:!0,children:"VERIFY SAFETY IN DESIGN"})]})]}),Object(O.jsx)(R.a,{}),Object(O.jsx)(R.a,{})]})]})]})}function ee(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=v().login,r=Object(a.useState)(""),s=Object(d.a)(r,2),c=s[0],i=s[1],x=Object(a.useState)(!1),f=Object(d.a)(x,2),m=f[0],g=f[1],y=Object(w.g)();function k(){return(k=Object(o.a)(l.a.mark((function a(r){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,i(""),g(!0),a.next=6,n(e.current.value,t.current.value);case 6:y.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),i("Failed to log in");case 12:g(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsx)("div",{className:"w100",style:{maxWidth:"400px"},children:Object(O.jsx)(p.a,{children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),c&&Object(O.jsx)(j.a,{variant:"danger",children:c}),Object(O.jsxs)(b.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(O.jsxs)(b.a.Group,{id:"email",children:[Object(O.jsx)(b.a.Label,{children:"Email"}),Object(O.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsxs)(b.a.Group,{id:"password",children:[Object(O.jsx)(b.a.Label,{children:"Password"}),Object(O.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(O.jsx)(h.a,{disabled:m,className:"w-100 mt-4",type:"submit",children:"Log In"})]}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(N.b,{to:"/forgot-password",children:"Forgot Password?"})})]})})})})})}var te=n(78),ne=["component"];function ae(e){var t=e.component,n=Object(te.a)(e,ne),a=v().currentUser;return Object(O.jsx)(w.b,Object(M.a)(Object(M.a)({},n),{},{render:function(e){return a?Object(O.jsx)(t,Object(M.a)({},e)):Object(O.jsx)(w.a,{to:"/login"})}}))}function re(){var e=Object(a.useRef)(),t=v().resetPassword,n=Object(a.useState)(""),r=Object(d.a)(n,2),s=r[0],c=r[1],i=Object(a.useState)(""),x=Object(d.a)(i,2),f=x[0],m=x[1],g=Object(a.useState)(!1),y=Object(d.a)(g,2),w=y[0],k=y[1];function E(){return(E=Object(o.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,m(""),c(""),k(!0),n.next=7,t(e.current.value);case 7:m("Check your inbox for further instructions"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),c("Failed to reset password");case 13:k(!1);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"w100",style:{maxWidth:"400px"},children:[Object(O.jsx)(p.a,{children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(O.jsx)(j.a,{variant:"danger",children:s}),f&&Object(O.jsx)(j.a,{variant:"success",children:f}),Object(O.jsxs)(b.a,{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(O.jsxs)(b.a.Group,{id:"email",children:[Object(O.jsx)(b.a.Label,{children:"Email"}),Object(O.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(O.jsx)(h.a,{disabled:w,className:"w-100 mt-4",type:"submit",children:"Reset Password"})]}),Object(O.jsx)("div",{className:"w-100 text-center mt-3",children:Object(O.jsx)(N.b,{to:"/login",children:"Login"})})]})}),Object(O.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(O.jsx)(N.b,{to:"/signup",children:"Sign Up"})]})]})})})}function se(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),r=v(),s=r.currentUser,c=r.updateEmail,i=r.updatePassword,l=Object(a.useState)(""),o=Object(d.a)(l,2),x=o[0],f=o[1],m=Object(a.useState)(!1),g=Object(d.a)(m,2),y=g[0],k=g[1],E=Object(w.g)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(u.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(O.jsxs)("div",{className:"w100",style:{maxWidth:"400px"},children:[Object(O.jsx)(p.a,{children:Object(O.jsxs)(p.a.Body,{children:[Object(O.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),x&&Object(O.jsx)(j.a,{variant:"danger",children:x}),Object(O.jsxs)(b.a,{onSubmit:function(a){if(a.preventDefault(),t.current.value!==n.current.value)return f("Passwords do not match");var r=[];f(""),k(!0),e.current.value!==s.email&&r.push(c(e.current.value)),t.current.value&&r.push(i(t.current.value)),Promise.all(r).then((function(){E.push("/")})).catch((function(){f("Failed to update account")})).finally((function(){k(!1)}))},children:[Object(O.jsxs)(b.a.Group,{id:"email",children:[Object(O.jsx)(b.a.Label,{children:"Email"}),Object(O.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:s.email})]}),Object(O.jsxs)(b.a.Group,{id:"password",children:[Object(O.jsx)(b.a.Label,{children:"Password"}),Object(O.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(O.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(O.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(O.jsx)(b.a.Control,{type:"password",ref:n,placeholder:"Leave blank to keep the same"})]}),Object(O.jsx)(h.a,{disabled:y,className:"w-100 mt-4",type:"submit",children:"Update"})]})]})}),Object(O.jsx)("div",{className:"w-100 text-center mt-2",children:Object(O.jsx)(N.b,{to:"/",children:"Cancel"})})]})})})}var ce=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(N.a,{children:Object(O.jsx)(y,{children:Object(O.jsxs)(w.d,{children:[Object(O.jsx)(ae,{exact:!0,path:"/",component:$}),Object(O.jsx)(ae,{path:"/update-profile",component:se}),Object(O.jsx)(ae,{path:"/signup",component:k}),Object(O.jsx)(w.b,{path:"/login",component:ee}),Object(O.jsx)(w.b,{path:"/forgot-password",component:re})]})})})})};c.a.render(Object(O.jsx)(ce,{}),document.getElementById("root"))},71:function(e,t){}},[[127,1,2]]]);
//# sourceMappingURL=main.1abf74bd.chunk.js.map