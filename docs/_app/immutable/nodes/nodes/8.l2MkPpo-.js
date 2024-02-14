import{s as ot,d as q,n as lt,r as it,o as nt}from"../chunks/scheduler.fH47ohXk.js";import{S as ct,i as ut,s as p,e as l,b as F,h,c as a,d,g as r,f as j,m as te,n as s,q as o,j as B,k as e,o as me,l as Q}from"../chunks/index.7l0AZJdu.js";import{l as dt}from"../chunks/loadingScreen.khe5Cc7Q.js";import{f as vt,g as at}from"../chunks/client.eTayNyBR.js";import{P as ft,G as mt,y as pt,e as ht,S as gt,a as _t}from"../chunks/matchHandler.Gnnmgv6p.js";import{a as kt}from"../chunks/card.XsObq2_4.js";import{P as bt,a as yt,p as Dt,b as It,c as Ct,d as Pt,e as St,f as Bt}from"../chunks/border6.m7etiZF4.js";const Nt=""+new URL("../assets/hourglass.2iutfKNR.gif",import.meta.url).href;function rt(n){let u,m=`<img src="${dt}" alt="loading..." style="width: 15vw; display: block; margin-top:15%; margin-left:auto; margin-right:auto;"/> <h1 style="font-family: cursive; display: block; text-align:center;">LOADING...</h1>`;return{c(){u=l("div"),u.innerHTML=m,this.h()},l(k){u=a(k,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),te(u)!=="svelte-1txtf5b"&&(u.innerHTML=m),this.h()},h(){s(u,"id","loadingScreen"),s(u,"class","svelte-173sei5")},m(k,b){B(k,u,b)},d(k){k&&r(u)}}}function Tt(n){let u,m,k,b,c,_,y,C,O,v,V,W,D,P=n[1].level+"",oe,pe,N,se=n[1].username+"",le,ae,f,M,X,Re="1",ie=n[0].deckname0+"",he,we,L,Z,Ke="2",ne=n[0].deckname1+"",ge,Ge,Ee,Oe,U,x,qe="3",ce=n[0].deckname2+"",_e,Ve,z,ee,Fe="4",ue=n[0].deckname3+"",ke,be,J,$,de,Me,A,je="Készenáll",ye,S,Qe=`<img src="${Nt}" alt="waiting..."/>`,De,H,I,Y,w,Ie,Le,G,Ce,Ue,R,ve=n[2].level+"",Pe,ze,E,fe=n[2].username+"",Se,Je,We,g=!n[3]&&rt();return{c(){g&&g.c(),u=p(),m=l("div"),k=p(),b=l("div"),c=l("div"),_=l("div"),y=l("img"),O=p(),v=l("img"),W=p(),D=l("div"),oe=F(P),pe=p(),N=l("div"),le=F(se),ae=p(),f=l("div"),M=l("button"),X=l("span"),X.textContent=Re,he=F(ie),we=p(),L=l("button"),Z=l("span"),Z.textContent=Ke,ge=F(ne),Ge=l("br"),Ee=l("br"),Oe=p(),U=l("button"),x=l("span"),x.textContent=qe,_e=F(ce),Ve=p(),z=l("button"),ee=l("span"),ee.textContent=Fe,ke=F(ue),be=p(),J=l("div"),$=l("div"),de=l("button"),Me=p(),A=l("button"),A.textContent=je,ye=p(),S=l("div"),S.innerHTML=Qe,De=p(),H=l("div"),I=l("div"),Y=l("div"),w=l("img"),Le=p(),G=l("img"),Ue=p(),R=l("div"),Pe=F(ve),ze=p(),E=l("div"),Se=F(fe),this.h()},l(t){g&&g.l(t),u=h(t),m=a(t,"DIV",{id:!0,class:!0}),d(m).forEach(r),k=h(t),b=a(t,"DIV",{class:!0,style:!0});var i=d(b);c=a(i,"DIV",{style:!0});var K=d(c);_=a(K,"DIV",{class:!0});var Be=d(_);y=a(Be,"IMG",{class:!0,src:!0,alt:!0}),O=h(Be),v=a(Be,"IMG",{class:!0,src:!0,alt:!0}),Be.forEach(r),W=h(K),D=a(K,"DIV",{style:!0});var Xe=d(D);oe=j(Xe,P),Xe.forEach(r),pe=h(K),N=a(K,"DIV",{style:!0});var Ze=d(N);le=j(Ze,se),Ze.forEach(r),ae=h(K),f=a(K,"DIV",{class:!0,style:!0});var T=d(f);M=a(T,"BUTTON",{class:!0});var $e=d(M);X=a($e,"SPAN",{class:!0,"data-svelte-h":!0}),te(X)!=="svelte-99w51c"&&(X.textContent=Re),he=j($e,ie),$e.forEach(r),we=h(T),L=a(T,"BUTTON",{class:!0});var Ae=d(L);Z=a(Ae,"SPAN",{class:!0,"data-svelte-h":!0}),te(Z)!=="svelte-19f76k3"&&(Z.textContent=Ke),ge=j(Ae,ne),Ae.forEach(r),Ge=a(T,"BR",{}),Ee=a(T,"BR",{}),Oe=h(T),U=a(T,"BUTTON",{class:!0});var He=d(U);x=a(He,"SPAN",{class:!0,"data-svelte-h":!0}),te(x)!=="svelte-19hhssu"&&(x.textContent=qe),_e=j(He,ce),He.forEach(r),Ve=h(T),z=a(T,"BUTTON",{class:!0});var Ye=d(z);ee=a(Ye,"SPAN",{class:!0,"data-svelte-h":!0}),te(ee)!=="svelte-bb1s09"&&(ee.textContent=Fe),ke=j(Ye,ue),Ye.forEach(r),T.forEach(r),K.forEach(r),i.forEach(r),be=h(t),J=a(t,"DIV",{class:!0,style:!0});var xe=d(J);$=a(xe,"DIV",{style:!0});var Ne=d($);de=a(Ne,"BUTTON",{class:!0}),d(de).forEach(r),Me=h(Ne),A=a(Ne,"BUTTON",{class:!0,"data-svelte-h":!0}),te(A)!=="svelte-19o13ux"&&(A.textContent=je),Ne.forEach(r),xe.forEach(r),ye=h(t),S=a(t,"DIV",{style:!0,"data-svelte-h":!0}),te(S)!=="svelte-1y3pkth"&&(S.innerHTML=Qe),De=h(t),H=a(t,"DIV",{class:!0,style:!0});var et=d(H);I=a(et,"DIV",{style:!0});var re=d(I);Y=a(re,"DIV",{class:!0});var Te=d(Y);w=a(Te,"IMG",{class:!0,src:!0,alt:!0}),Le=h(Te),G=a(Te,"IMG",{class:!0,src:!0,alt:!0}),Te.forEach(r),Ue=h(re),R=a(re,"DIV",{style:!0});var tt=d(R);Pe=j(tt,ve),tt.forEach(r),ze=h(re),E=a(re,"DIV",{style:!0});var st=d(E);Se=j(st,fe),st.forEach(r),re.forEach(r),et.forEach(r),this.h()},h(){s(m,"id","background"),s(m,"class","svelte-173sei5"),s(y,"class","profilePic profilePicComp svelte-173sei5"),q(y.src,C=n[4][n[1].profilPic-1])||s(y,"src",C),s(y,"alt","border"),s(v,"class","profileBorder profilePicCom svelte-173sei5"),q(v.src,V=n[5][n[1].border-1])||s(v,"src",V),s(v,"alt","border"),s(_,"class","profileCont svelte-173sei5"),o(D,"font-size","3vw"),o(D,"width","100%"),o(D,"text-align","center"),o(N,"font-family","sgGachaFont"),o(N,"font-size","2vw"),o(N,"width","100%"),o(N,"text-align","center"),s(X,"class","deckNumbering svelte-173sei5"),s(M,"class","deckChooser svelte-173sei5"),s(Z,"class","deckNumbering svelte-173sei5"),s(L,"class","deckChooser svelte-173sei5"),s(x,"class","deckNumbering svelte-173sei5"),s(U,"class","deckChooser svelte-173sei5"),s(ee,"class","deckNumbering svelte-173sei5"),s(z,"class","deckChooser svelte-173sei5"),s(f,"class","deckChooserContainer svelte-173sei5"),o(f,"text-align","center"),o(c,"position","relative"),o(c,"width","80%"),o(c,"height","100%"),s(b,"class","yourDataCont svelte-173sei5"),o(b,"left","5vw"),s(de,"class","optionButtonShadow svelte-173sei5"),s(A,"class","optionButton svelte-173sei5"),o($,"position","relative"),s(J,"class","optionButtonCont svelte-173sei5"),o(J,"filter","hue-rotate(0deg)"),o(S,"position","absolute"),o(S,"top","30vh"),o(S,"left","38vw"),o(S,"width","20vw"),s(w,"class","profilePic profilePicComp svelte-173sei5"),q(w.src,Ie=n[4][n[2].profilPic-1])||s(w,"src",Ie),s(w,"alt","border"),s(G,"class","profileBorder profilePicComp svelte-173sei5"),q(G.src,Ce=n[5][n[2].border-1])||s(G,"src",Ce),s(G,"alt","border"),s(Y,"class","profileCont svelte-173sei5"),o(R,"font-size","3vw"),o(R,"width","100%"),o(R,"text-align","center"),o(E,"font-family","sgGachaFont"),o(E,"font-size","2vw"),o(E,"width","100%"),o(E,"text-align","center"),o(I,"position","relative"),o(I,"width","80%"),o(I,"height","100%"),s(H,"class","yourDataCont svelte-173sei5"),o(H,"right","5vw")},m(t,i){g&&g.m(t,i),B(t,u,i),B(t,m,i),B(t,k,i),B(t,b,i),e(b,c),e(c,_),e(_,y),e(_,O),e(_,v),e(c,W),e(c,D),e(D,oe),e(c,pe),e(c,N),e(N,le),e(c,ae),e(c,f),e(f,M),e(M,X),e(M,he),e(f,we),e(f,L),e(L,Z),e(L,ge),e(f,Ge),e(f,Ee),e(f,Oe),e(f,U),e(U,x),e(U,_e),e(f,Ve),e(f,z),e(z,ee),e(z,ke),B(t,be,i),B(t,J,i),e(J,$),e($,de),e($,Me),e($,A),B(t,ye,i),B(t,S,i),B(t,De,i),B(t,H,i),e(H,I),e(I,Y),e(Y,w),e(Y,Le),e(Y,G),e(I,Ue),e(I,R),e(R,Pe),e(I,ze),e(I,E),e(E,Se),Je||(We=[me(M,"click",n[7]),me(L,"click",n[8]),me(U,"click",n[9]),me(z,"click",n[10]),me(A,"click",ft)],Je=!0)},p(t,[i]){t[3]?g&&(g.d(1),g=null):g||(g=rt(),g.c(),g.m(u.parentNode,u)),i&2&&!q(y.src,C=t[4][t[1].profilPic-1])&&s(y,"src",C),i&2&&!q(v.src,V=t[5][t[1].border-1])&&s(v,"src",V),i&2&&P!==(P=t[1].level+"")&&Q(oe,P),i&2&&se!==(se=t[1].username+"")&&Q(le,se),i&1&&ie!==(ie=t[0].deckname0+"")&&Q(he,ie),i&1&&ne!==(ne=t[0].deckname1+"")&&Q(ge,ne),i&1&&ce!==(ce=t[0].deckname2+"")&&Q(_e,ce),i&1&&ue!==(ue=t[0].deckname3+"")&&Q(ke,ue),i&4&&!q(w.src,Ie=t[4][t[2].profilPic-1])&&s(w,"src",Ie),i&4&&!q(G.src,Ce=t[5][t[2].border-1])&&s(G,"src",Ce),i&4&&ve!==(ve=t[2].level+"")&&Q(Pe,ve),i&4&&fe!==(fe=t[2].username+"")&&Q(Se,fe)},i:lt,o:lt,d(t){t&&(r(u),r(m),r(k),r(b),r(be),r(J),r(ye),r(S),r(De),r(H)),g&&g.d(t),Je=!1,it(We)}}}function wt(n,u,m){let k=[bt,yt],b=[Dt,It,Ct,Pt,St,Bt],c,_,y,C=vt,O={},v={gameId:c,username:"esztix",health:40,currentHand:"",remaningDeck:[],mana:2,spellMana:0,ko:5,yourBoard:[],yourBoardStatus:"",isYourTurn:"",type:"player",secretSpells:[],yourBuildings:[]},V={gameId:"",username:"",health:40,currentHand:"",remaningDeck:[],mana:2,spellMana:0,ko:5,yourBoard:"",yourBoardStatus:"",isYourTurn:"",type:"player",secretSpells:[],yourBuildings:[]},W={},D=!1;nt(()=>{c=JSON.parse(localStorage.getItem("yourGameID")),_=JSON.parse(localStorage.getItem("opponentGameID")),m(2,W=JSON.parse(localStorage.getItem("opponentInfo"))),console.log("OPOLOG: ",W),v.gameId=c,V.gameId=_,y=JSON.parse(localStorage.getItem("gameKey")),m(0,C=JSON.parse(localStorage.getItem("deckData"))),m(1,O=JSON.parse(localStorage.getItem("userData"))),console.log("fasz3: logcaPulDa: ",C),C?(at(C,"deckData"),at(O,"userData")):console.log("Username not found in local storage."),v.username=O.username,mt(c,_,y),m(3,D=!0),m(3,D),console.log("u: ",c,"enemy: ",_),_t()});function P(le){var ae=C[`deckarray${le}`];console.log(ae),kt.forEach(f=>{ae.includes(f.name)&&v.remaningDeck.push(f)}),console.log(v.remaningDeck),v.isYourTurn=pt.isYourTurn,V.isYourTurn=ht.isYourTurn,localStorage.setItem("yourGameParams",JSON.stringify(v)),console.log("your and enemy params: ",v,V),gt(v)}return[C,O,W,D,k,b,P,()=>P(0),()=>P(1),()=>P(2),()=>P(3)]}class zt extends ct{constructor(u){super(),ut(this,u,wt,Tt,ot,{})}}export{zt as component};
