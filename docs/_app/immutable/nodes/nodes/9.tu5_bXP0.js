import{s as Xe,n as he,r as pe,o as Ye,f as ze,e as we,d as ue}from"../chunks/scheduler.fH47ohXk.js";import{S as Ze,i as $e,s as I,e as _,b as se,h as w,c as g,d as D,m as oe,g as u,f as ae,n as a,q as P,j as O,k as n,o as ce,l as ge,r as ke,u as de,p as Ae,H as Qe,v as We}from"../chunks/index.7l0AZJdu.js";import{e as fe}from"../chunks/each.JIJgjjIR.js";import{r as xe,u as et,f as tt,g as Me,s as De}from"../chunks/client.eTayNyBR.js";import{l as lt}from"../chunks/loadingScreen.khe5Cc7Q.js";import{a as be}from"../chunks/card.XsObq2_4.js";import{c as rt,d as st,t as at,q as ct,b as it,l as Se,a as nt,e as ot,v as ut,f as dt,s as ft,g as _t,h as gt,i as ht}from"../chunks/veszett.uKqVFruN.js";function Le(r,e,t){const l=r.slice();return l[34]=e[t],l[36]=t,l}function vt(r,e,t){const l=r.slice();return l[34]=e[t],l[38]=t,l}function mt(r,e,t){const l=r.slice();return l[34]=e[t],l[38]=t,l}function Ue(r,e,t){const l=r.slice();return l[39]=e[t],l[36]=t,l}function Ge(r,e,t){const l=r.slice();return l[41]=e[t],l[36]=t,l}function He(r,e,t){const l=r.slice();return l[44]=e[t],l[36]=t,l}function qe(r){let e,t=`<img src="${lt}" alt="loading..." style="width: 15vw; display: block; margin-top:15%; margin-left:auto; margin-right:auto;"/> <h1 style="font-family: cursive; display: block; text-align:center;">LOADING...</h1>`;return{c(){e=_("div"),e.innerHTML=t,this.h()},l(l){e=g(l,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-1txtf5b"&&(e.innerHTML=t),this.h()},h(){a(e,"id","loadingScreen"),a(e,"class","svelte-uyrg86")},m(l,s){O(l,e,s)},d(l){l&&u(e)}}}function kt(r){let e,t="Vissza a paklikhoz",l,s,c,i,v="Név mentése",m,o,f,k,T=fe(r[0]),d=[];for(let h=0;h<T.length;h+=1)d[h]=je(He(r,T,h));return{c(){e=_("button"),e.textContent=t,l=I(),s=_("input"),c=I(),i=_("button"),i.textContent=v,m=I();for(let h=0;h<d.length;h+=1)d[h].c();o=de(),this.h()},l(h){e=g(h,"BUTTON",{style:!0,"data-svelte-h":!0}),oe(e)!=="svelte-109rosd"&&(e.textContent=t),l=w(h),s=g(h,"INPUT",{type:!0,placeholder:!0,style:!0}),c=w(h),i=g(h,"BUTTON",{style:!0,"data-svelte-h":!0}),oe(i)!=="svelte-12ugwqg"&&(i.textContent=v),m=w(h);for(let y=0;y<d.length;y+=1)d[y].l(h);o=de(),this.h()},h(){P(e,"float","left"),P(e,"margin-block","1vw"),a(s,"type","text"),a(s,"placeholder","Nevezd el a paklid"),P(s,"width","58%"),P(i,"width","37%")},m(h,y){O(h,e,y),O(h,l,y),O(h,s,y),Ae(s,r[7]),O(h,c,y),O(h,i,y),O(h,m,y);for(let C=0;C<d.length;C+=1)d[C]&&d[C].m(h,y);O(h,o,y),f||(k=[ce(e,"click",r[26]),ce(s,"input",r[27]),ce(i,"click",r[28])],f=!0)},p(h,y){if(y[0]&128&&s.value!==h[7]&&Ae(s,h[7]),y[0]&16387){T=fe(h[0]);let C;for(C=0;C<T.length;C+=1){const E=He(h,T,C);d[C]?d[C].p(E,y):(d[C]=je(E),d[C].c(),d[C].m(o.parentNode,o))}for(;C<d.length;C+=1)d[C].d(1);d.length=T.length}},d(h){h&&(u(e),u(l),u(s),u(c),u(i),u(m),u(o)),ke(d,h),f=!1,pe(k)}}}function bt(r){let e,t,l,s="1",c=r[3].deckname0+"",i,v,m,o,f="2",k=r[3].deckname1+"",T,d,h,y,C,E,Z="3",G=r[3].deckname2+"",H,A,j,R,X="4",M=r[3].deckname3+"",$,te,F;return{c(){e=_("div"),t=_("button"),l=_("span"),l.textContent=s,i=se(c),v=I(),m=_("button"),o=_("span"),o.textContent=f,T=se(k),d=_("br"),h=_("br"),y=I(),C=_("button"),E=_("span"),E.textContent=Z,H=se(G),A=I(),j=_("button"),R=_("span"),R.textContent=X,$=se(M),this.h()},l(z){e=g(z,"DIV",{id:!0,style:!0});var L=D(e);t=g(L,"BUTTON",{class:!0});var S=D(t);l=g(S,"SPAN",{class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-99w51c"&&(l.textContent=s),i=ae(S,c),S.forEach(u),v=w(L),m=g(L,"BUTTON",{class:!0});var N=D(m);o=g(N,"SPAN",{class:!0,"data-svelte-h":!0}),oe(o)!=="svelte-19f76k3"&&(o.textContent=f),T=ae(N,k),N.forEach(u),d=g(L,"BR",{}),h=g(L,"BR",{}),y=w(L),C=g(L,"BUTTON",{class:!0});var U=D(C);E=g(U,"SPAN",{class:!0,"data-svelte-h":!0}),oe(E)!=="svelte-19hhssu"&&(E.textContent=Z),H=ae(U,G),U.forEach(u),A=w(L),j=g(L,"BUTTON",{class:!0});var K=D(j);R=g(K,"SPAN",{class:!0,"data-svelte-h":!0}),oe(R)!=="svelte-bb1s09"&&(R.textContent=X),$=ae(K,M),K.forEach(u),L.forEach(u),this.h()},h(){a(l,"class","deckNumbering svelte-uyrg86"),a(t,"class","deckChooser svelte-uyrg86"),a(o,"class","deckNumbering svelte-uyrg86"),a(m,"class","deckChooser svelte-uyrg86"),a(E,"class","deckNumbering svelte-uyrg86"),a(C,"class","deckChooser svelte-uyrg86"),a(R,"class","deckNumbering svelte-uyrg86"),a(j,"class","deckChooser svelte-uyrg86"),a(e,"id","deckChooserContainer"),P(e,"text-align","center")},m(z,L){O(z,e,L),n(e,t),n(t,l),n(t,i),n(e,v),n(e,m),n(m,o),n(m,T),n(e,d),n(e,h),n(e,y),n(e,C),n(C,E),n(C,H),n(e,A),n(e,j),n(j,R),n(j,$),te||(F=[ce(t,"click",r[22]),ce(m,"click",r[23]),ce(C,"click",r[24]),ce(j,"click",r[25])],te=!0)},p(z,L){L[0]&8&&c!==(c=z[3].deckname0+"")&&ge(i,c),L[0]&8&&k!==(k=z[3].deckname1+"")&&ge(T,k),L[0]&8&&G!==(G=z[3].deckname2+"")&&ge(H,G),L[0]&8&&M!==(M=z[3].deckname3+"")&&ge($,M)},d(z){z&&u(e),te=!1,pe(F)}}}function Je(r){let e,t=r[44]+"",l,s,c,i;function v(){return r[29](r[44],r[36])}return{c(){e=_("button"),l=se(t),this.h()},l(m){e=g(m,"BUTTON",{class:!0,style:!0,id:!0});var o=D(e);l=ae(o,t),o.forEach(u),this.h()},h(){a(e,"class","selectedCardButton svelte-uyrg86"),P(e,"display","block"),a(e,"id",s=r[44])},m(m,o){O(m,e,o),n(e,l),c||(i=ce(e,"click",v),c=!0)},p(m,o){r=m,o[0]&1&&t!==(t=r[44]+"")&&ge(l,t),o[0]&1&&s!==(s=r[44])&&a(e,"id",s)},d(m){m&&u(e),c=!1,i()}}}function je(r){let e=r[1].includes(r[44]),t,l=e&&Je(r);return{c(){l&&l.c(),t=de()},l(s){l&&l.l(s),t=de()},m(s,c){l&&l.m(s,c),O(s,t,c)},p(s,c){c[0]&3&&(e=s[1].includes(s[44])),e?l?l.p(s,c):(l=Je(s),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(s){s&&u(t),l&&l.d(s)}}}function pt(r){let e,t,l,s,c,i,v,m,o,f,k,T,d,h,y=r[34].description+"",C,E,Z=r[34].cost+"",G,H,A,j=r[34].name+"",R,X,M,$,te,F=fe(Array(Number(r[34].stars))),z=[];for(let S=0;S<F.length;S+=1)z[S]=Ct(vt(r,F,S));function L(){return r[31](r[34],r[36])}return{c(){e=_("div"),t=_("img"),s=I(),c=_("div"),i=I(),v=_("img"),o=I(),f=_("img"),T=I(),d=_("div"),h=new Qe(!1),C=I(),E=_("div"),G=se(Z),H=I(),A=_("div"),R=se(j),X=I(),M=_("div");for(let S=0;S<z.length;S+=1)z[S].c();this.h()},l(S){e=g(S,"DIV",{class:!0,role:!0,tabindex:!0});var N=D(e);t=g(N,"IMG",{draggable:!0,class:!0,id:!0,src:!0,style:!0,alt:!0}),s=w(N),c=g(N,"DIV",{id:!0,style:!0,class:!0}),D(c).forEach(u),i=w(N),v=g(N,"IMG",{draggable:!0,id:!0,src:!0,alt:!0,class:!0}),o=w(N),f=g(N,"IMG",{draggable:!0,class:!0,src:!0,alt:!0}),T=w(N),d=g(N,"DIV",{id:!0,class:!0});var U=D(d);h=We(U,!1),U.forEach(u),C=w(N),E=g(N,"DIV",{class:!0,style:!0});var K=D(E);G=ae(K,Z),K.forEach(u),H=w(N),A=g(N,"DIV",{class:!0});var le=D(A);R=ae(le,j),le.forEach(u),X=w(N),M=g(N,"DIV",{id:!0,style:!0,class:!0});var re=D(M);for(let b=0;b<z.length;b+=1)z[b].l(re);re.forEach(u),N.forEach(u),this.h()},h(){a(t,"draggable","false"),a(t,"class","cardTemplate svelte-uyrg86"),a(t,"id","cardBackground"),ue(t.src,l=ft)||a(t,"src",l),P(t,"--colorr",r[8][r[34].stars-3]),P(t,"--colorr2","#"+(parseInt(r[8][r[34].stars-3].replace("#",""),16)+663552).toString(16)),a(t,"alt","cardBg"),a(c,"id","rarityBG"),P(c,"background",r[8][r[34].stars-3]),a(c,"class","svelte-uyrg86"),a(v,"draggable","false"),a(v,"id","curCardInView"),ue(v.src,m=r[34].source)||a(v,"src",m),a(v,"alt",""),a(v,"class","svelte-uyrg86"),a(f,"draggable","false"),a(f,"class","cardTemplate svelte-uyrg86"),ue(f.src,k=_t)||a(f,"src",k),a(f,"alt","cardBg"),h.a=null,a(d,"id","curCardDesc"),a(d,"class","noScrollers svelte-uyrg86"),a(E,"class","curCardCost svelte-uyrg86"),P(E,"top","calc(var(--cardsScale)*1vw*4)"),a(A,"class","curCardName svelte-uyrg86"),a(M,"id","curCardRarity"),a(M,"style",r[9][r[34].stars-3]+"; top: calc(var(--cardsScale)*1vw*1);"),a(M,"class","svelte-uyrg86"),a(e,"class","previewInHand "),a(e,"role","button"),a(e,"tabindex","")},m(S,N){O(S,e,N),n(e,t),n(e,s),n(e,c),n(e,i),n(e,v),n(e,o),n(e,f),n(e,T),n(e,d),h.m(y,d),n(e,C),n(e,E),n(E,G),n(e,H),n(e,A),n(A,R),n(e,X),n(e,M);for(let U=0;U<z.length;U+=1)z[U]&&z[U].m(M,null);$||(te=[ce(e,"click",L),ce(e,"keydown",r[20])],$=!0)},p(S,N){r=S},d(S){S&&u(e),ke(z,S),$=!1,pe(te)}}}function yt(r){let e,t,l,s,c,i,v,m,o,f,k,T,d,h,y=r[34].description+"",C,E,Z=r[34].attack+"",G,H,A,j=r[34].health+"",R,X,M,$=r[34].cost+"",te,F,z,L=r[34].name+"",S,N,U,K,le,re,b,V=r[34].talent!=""&&Dt(r),x=r[34].aligment!=""&&St(r),ve=fe(Array(Number(r[34].stars))),ne=[];for(let Q=0;Q<ve.length;Q+=1)ne[Q]=Nt(mt(r,ve,Q));function ee(){return r[30](r[34],r[36])}return{c(){e=_("div"),t=_("img"),s=I(),c=_("div"),i=I(),v=_("img"),o=I(),f=_("img"),T=I(),d=_("div"),h=new Qe(!1),C=I(),E=_("div"),G=se(Z),H=I(),A=_("div"),R=se(j),X=I(),M=_("div"),te=se($),F=I(),z=_("div"),S=se(L),N=I(),V&&V.c(),U=I(),x&&x.c(),K=I(),le=_("div");for(let Q=0;Q<ne.length;Q+=1)ne[Q].c();this.h()},l(Q){e=g(Q,"DIV",{class:!0,role:!0,tabindex:!0});var B=D(e);t=g(B,"IMG",{draggable:!0,class:!0,id:!0,src:!0,style:!0,alt:!0}),s=w(B),c=g(B,"DIV",{id:!0,style:!0,class:!0}),D(c).forEach(u),i=w(B),v=g(B,"IMG",{draggable:!0,id:!0,src:!0,alt:!0,class:!0}),o=w(B),f=g(B,"IMG",{draggable:!0,class:!0,src:!0,alt:!0}),T=w(B),d=g(B,"DIV",{id:!0,class:!0});var Y=D(d);h=We(Y,!1),Y.forEach(u),C=w(B),E=g(B,"DIV",{class:!0,style:!0});var _e=D(E);G=ae(_e,Z),_e.forEach(u),H=w(B),A=g(B,"DIV",{class:!0,style:!0});var W=D(A);R=ae(W,j),W.forEach(u),X=w(B),M=g(B,"DIV",{class:!0});var p=D(M);te=ae(p,$),p.forEach(u),F=w(B),z=g(B,"DIV",{class:!0});var q=D(z);S=ae(q,L),q.forEach(u),N=w(B),V&&V.l(B),U=w(B),x&&x.l(B),K=w(B),le=g(B,"DIV",{id:!0,style:!0,class:!0});var J=D(le);for(let ie=0;ie<ne.length;ie+=1)ne[ie].l(J);J.forEach(u),B.forEach(u),this.h()},h(){a(t,"draggable","false"),a(t,"class","cardTemplate svelte-uyrg86"),a(t,"id","cardBackground"),ue(t.src,l=gt)||a(t,"src",l),P(t,"--colorr",r[8][r[34].stars-3]),P(t,"--colorr2","#"+(parseInt(r[8][r[34].stars-3].replace("#",""),16)+663552).toString(16)),a(t,"alt","cardBg"),a(c,"id","rarityBG"),P(c,"background",r[8][r[34].stars-3]),a(c,"class","svelte-uyrg86"),a(v,"draggable","false"),a(v,"id","curCardInView"),ue(v.src,m=r[34].source)||a(v,"src",m),a(v,"alt",""),a(v,"class","svelte-uyrg86"),a(f,"draggable","false"),a(f,"class","cardTemplate svelte-uyrg86"),ue(f.src,k=ht)||a(f,"src",k),a(f,"alt","cardBg"),h.a=null,a(d,"id","curCardDesc"),a(d,"class","noScrollers svelte-uyrg86"),a(E,"class","curCardStats svelte-uyrg86"),P(E,"left","calc(var(--cardsScale)*1vw*7.4)"),a(A,"class","curCardStats svelte-uyrg86"),P(A,"left","calc(var(--cardsScale)*1vw*21.5)"),a(M,"class","curCardCost svelte-uyrg86"),a(z,"class","curCardName svelte-uyrg86"),a(le,"id","curCardRarity"),a(le,"style",r[9][r[34].stars-3]+"; top: 0"),a(le,"class","svelte-uyrg86"),a(e,"class","previewInHand"),a(e,"role","button"),a(e,"tabindex","")},m(Q,B){O(Q,e,B),n(e,t),n(e,s),n(e,c),n(e,i),n(e,v),n(e,o),n(e,f),n(e,T),n(e,d),h.m(y,d),n(e,C),n(e,E),n(E,G),n(e,H),n(e,A),n(A,R),n(e,X),n(e,M),n(M,te),n(e,F),n(e,z),n(z,S),n(e,N),V&&V.m(e,null),n(e,U),x&&x.m(e,null),n(e,K),n(e,le);for(let Y=0;Y<ne.length;Y+=1)ne[Y]&&ne[Y].m(le,null);re||(b=[ce(e,"click",ee),ce(e,"keydown",r[19])],re=!0)},p(Q,B){r=Q,r[34].talent!=""&&V.p(r,B),r[34].aligment!=""&&x.p(r,B)},d(Q){Q&&u(e),V&&V.d(),x&&x.d(),ke(ne,Q),re=!1,pe(b)}}}function Ct(r){let e,t="★";return{c(){e=_("span"),e.textContent=t,this.h()},l(l){e=g(l,"SPAN",{style:!0,"data-svelte-h":!0}),oe(e)!=="svelte-173d95d"&&(e.textContent=t),this.h()},h(){P(e,"font-size","calc(var(--cardsScale)*2.4vw")},m(l,s){O(l,e,s)},p:he,d(l){l&&u(e)}}}function Dt(r){let e;function t(c,i){return c[34].talent.includes(",")?wt:It}let s=t(r)(r);return{c(){s.c(),e=de()},l(c){s.l(c),e=de()},m(c,i){s.m(c,i),O(c,e,i)},p(c,i){s.p(c,i)},d(c){c&&u(e),s.d(c)}}}function It(r){let e,t=r[34].talent.replace("támadás","")+"",l,s,c,i;return{c(){e=_("div"),l=se(t),s=I(),c=_("img"),this.h()},l(v){e=g(v,"DIV",{class:!0});var m=D(e);l=ae(m,t),m.forEach(u),s=w(v),c=g(v,"IMG",{style:!0,class:!0,src:!0,alt:!0}),this.h()},h(){a(e,"class","curCardTalent svelte-uyrg86"),P(c,"left","calc(var(--cardsScale)*1vw*10)"),a(c,"class","curCardTalentIcon svelte-uyrg86"),ue(c.src,i=r[10][r[34].talent.replace(" ","")])||a(c,"src",i),a(c,"alt","talent")},m(v,m){O(v,e,m),n(e,l),O(v,s,m),O(v,c,m)},p:he,d(v){v&&(u(e),u(s),u(c))}}}function wt(r){let e,t=fe(r[34].talent.split(",")),l=[];for(let s=0;s<t.length;s+=1)l[s]=Re(Ge(r,t,s));return{c(){e=_("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=g(s,"DIV",{class:!0});var c=D(e);for(let i=0;i<l.length;i+=1)l[i].l(c);c.forEach(u),this.h()},h(){a(e,"class","curCardMultipleIconsContainer svelte-uyrg86")},m(s,c){O(s,e,c);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null)},p(s,c){if(c[0]&1024){t=fe(s[34].talent.split(","));let i;for(i=0;i<t.length;i+=1){const v=Ge(s,t,i);l[i]?l[i].p(v,c):(l[i]=Re(v),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(s){s&&u(e),ke(l,s)}}}function Re(r){let e,t,l,s;return{c(){e=_("div"),t=_("img"),s=I(),this.h()},l(c){e=g(c,"DIV",{style:!0});var i=D(e);t=g(i,"IMG",{style:!0,src:!0,alt:!0}),s=w(i),i.forEach(u),this.h()},h(){P(t,"width","calc(var(--cardsScale)*1vw*3.1)"),ue(t.src,l=r[10][r[41].replace(" ","")])||a(t,"src",l),a(t,"alt","talent"),P(e,"width",.4*5.2/r[34].talent.split(",").length+"vw"),P(e,"margin","auto")},m(c,i){O(c,e,i),n(e,t),n(e,s)},p:he,d(c){c&&u(e)}}}function St(r){let e;function t(c,i){return c[34].aligment.includes(",")?Et:Tt}let s=t(r)(r);return{c(){s.c(),e=de()},l(c){s.l(c),e=de()},m(c,i){s.m(c,i),O(c,e,i)},p(c,i){s.p(c,i)},d(c){c&&u(e),s.d(c)}}}function Tt(r){let e,t;return{c(){e=_("img"),this.h()},l(l){e=g(l,"IMG",{style:!0,class:!0,src:!0,alt:!0}),this.h()},h(){P(e,"background-color",r[12][r[34].aligment]),P(e,"border-radius","0.5vw"),a(e,"class","curCardAlig svelte-uyrg86"),ue(e.src,t=r[11][r[34].aligment])||a(e,"src",t),a(e,"alt","aligment")},m(l,s){O(l,e,s)},p:he,d(l){l&&u(e)}}}function Et(r){let e,t=fe(r[34].aligment.split(",")),l=[];for(let s=0;s<t.length;s+=1)l[s]=Fe(Ue(r,t,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=de()},l(s){for(let c=0;c<l.length;c+=1)l[c].l(s);e=de()},m(s,c){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(s,c);O(s,e,c)},p(s,c){if(c[0]&6144){t=fe(s[34].aligment.split(","));let i;for(i=0;i<t.length;i+=1){const v=Ue(s,t,i);l[i]?l[i].p(v,c):(l[i]=Fe(v),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=t.length}},d(s){s&&u(e),ke(l,s)}}}function Fe(r){let e,t;return{c(){e=_("img"),this.h()},l(l){e=g(l,"IMG",{style:!0,class:!0,src:!0,alt:!0}),this.h()},h(){P(e,"top",.4*9.8+r[36]*4.5*.4+"vw"),P(e,"background-color",r[12][r[39]]),P(e,"border-radius","0.5vw"),a(e,"class","curCardAlig svelte-uyrg86"),ue(e.src,t=r[11][r[39]])||a(e,"src",t),a(e,"alt","aligment")},m(l,s){O(l,e,s)},p:he,d(l){l&&u(e)}}}function Nt(r){let e,t="★";return{c(){e=_("span"),e.textContent=t,this.h()},l(l){e=g(l,"SPAN",{style:!0,"data-svelte-h":!0}),oe(e)!=="svelte-173d95d"&&(e.textContent=t),this.h()},h(){P(e,"font-size","calc(var(--cardsScale)*2.4vw")},m(l,s){O(l,e,s)},p:he,d(l){l&&u(e)}}}function Ke(r){let e,t,l,s,c;function i(o,f){if(o[34].type=="character")return yt;if(o[34].type=="spell")return pt}let v=i(r),m=v&&v(r);return{c(){e=_("div"),m&&m.c(),t=I(),this.h()},l(o){e=g(o,"DIV",{class:!0,role:!0,tabindex:!0,style:!0});var f=D(e);m&&m.l(f),t=w(f),f.forEach(u),this.h()},h(){a(e,"class",l=ze(r[5][r[36]])+" svelte-uyrg86"),a(e,"role","button"),a(e,"tabindex",""),P(e,"margin","1vw")},m(o,f){O(o,e,f),m&&m.m(e,null),n(e,t),s||(c=ce(e,"keydown",r[18]),s=!0)},p(o,f){m&&m.p(o,f),f[0]&32&&l!==(l=ze(o[5][o[36]])+" svelte-uyrg86")&&a(e,"class",l)},d(o){o&&u(e),m&&m.d(),s=!1,c()}}}function Vt(r){let e,t,l,s='<h1 style="margin-top:2vh; font-size:2.5vw; text-align:center; color:white;">Paklim</h1>',c,i,v,m,o,f,k,T,d,h,y,C=r[2].gachaCurrency+"",E,Z,G,H,A=r[2].level+"",j,R,X,M=r[2].username+"",$,te,F,z="[]",L,S,N,U,K,le,re,b,V,x='<a href="/gachaScreen">pénzt ide nekem</a><br/> <a href="/collectionScreen">kártyák</a><br/> <a href="../">main menu</a>',ve,ne,ee=!r[4]&&qe();function Q(p,q){return p[6]?bt:kt}let B=Q(r),Y=B(r),_e=fe(be),W=[];for(let p=0;p<_e.length;p+=1)W[p]=Ke(Le(r,_e,p));return{c(){ee&&ee.c(),e=I(),t=_("div"),l=_("div"),l.innerHTML=s,c=I(),i=_("table"),v=_("tr"),m=_("td"),o=_("button"),f=I(),k=_("td"),T=I(),d=_("td"),h=_("div"),y=_("p"),E=se(C),Z=I(),G=_("div"),H=_("div"),j=se(A),R=I(),X=_("p"),$=se(M),te=I(),F=_("button"),F.textContent=z,L=I(),S=_("div"),N=I(),U=_("div"),K=_("div"),Y.c(),le=I(),re=_("div");for(let p=0;p<W.length;p+=1)W[p].c();b=I(),V=_("div"),V.innerHTML=x,this.h()},l(p){ee&&ee.l(p),e=w(p),t=g(p,"DIV",{id:!0,class:!0});var q=D(t);l=g(q,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),oe(l)!=="svelte-155r6tb"&&(l.innerHTML=s),c=w(q),i=g(q,"TABLE",{id:!0,class:!0});var J=D(i);v=g(J,"TR",{});var ie=D(v);m=g(ie,"TD",{class:!0});var Te=D(m);o=g(Te,"BUTTON",{id:!0,class:!0}),D(o).forEach(u),Te.forEach(u),f=w(ie),k=g(ie,"TD",{class:!0}),D(k).forEach(u),T=w(ie),d=g(ie,"TD",{class:!0});var me=D(d);h=g(me,"DIV",{class:!0,id:!0,style:!0});var Ee=D(h);y=g(Ee,"P",{style:!0});var Ne=D(y);E=ae(Ne,C),Ne.forEach(u),Ee.forEach(u),Z=w(me),G=g(me,"DIV",{class:!0,id:!0,style:!0});var ye=D(G);H=g(ye,"DIV",{id:!0,class:!0});var Ve=D(H);j=ae(Ve,A),Ve.forEach(u),R=w(ye),X=g(ye,"P",{style:!0});var Be=D(X);$=ae(Be,M),Be.forEach(u),ye.forEach(u),te=w(me),F=g(me,"BUTTON",{id:!0,"data-svelte-h":!0}),oe(F)!=="svelte-1hhnqqz"&&(F.textContent=z),me.forEach(u),ie.forEach(u),J.forEach(u),q.forEach(u),L=w(p),S=g(p,"DIV",{id:!0,class:!0}),D(S).forEach(u),N=w(p),U=g(p,"DIV",{style:!0});var Ce=D(U);K=g(Ce,"DIV",{id:!0,class:!0});var Oe=D(K);Y.l(Oe),Oe.forEach(u),le=w(Ce),re=g(Ce,"DIV",{id:!0,class:!0});var Pe=D(re);for(let Ie=0;Ie<W.length;Ie+=1)W[Ie].l(Pe);Pe.forEach(u),Ce.forEach(u),b=w(p),V=g(p,"DIV",{class:!0,"data-svelte-h":!0}),oe(V)!=="svelte-7p1cj8"&&(V.innerHTML=x),this.h()},h(){a(l,"id","logo"),a(l,"class","svelte-uyrg86"),a(o,"id","homeButton"),a(o,"class","svelte-uyrg86"),a(m,"class","headerTd svelte-uyrg86"),a(k,"class","headerTd svelte-uyrg86"),P(y,"margin-top","1.2vw"),a(h,"class","money svelte-uyrg86"),a(h,"id","gachaCurrency"),P(h,"margin-right","2vw"),a(H,"id","levelText"),a(H,"class","svelte-uyrg86"),P(X,"margin-top","1.2vw"),a(G,"class","money svelte-uyrg86"),a(G,"id","nameTag"),P(G,"position","relative"),a(F,"id","fullScreenButton"),a(d,"class","headerTd svelte-uyrg86"),a(i,"id","headerTable"),a(i,"class","svelte-uyrg86"),a(t,"id","header"),a(t,"class","svelte-uyrg86"),a(S,"id","background"),a(S,"class","svelte-uyrg86"),a(K,"id","deckBox"),a(K,"class","svelte-uyrg86"),a(re,"id","cardcollection"),a(re,"class","svelte-uyrg86"),P(U,"display","flex"),P(U,"margin-inline","5vw"),P(U,"margin-block","4vh"),a(V,"class","links")},m(p,q){ee&&ee.m(p,q),O(p,e,q),O(p,t,q),n(t,l),n(t,c),n(t,i),n(i,v),n(v,m),n(m,o),n(v,f),n(v,k),n(v,T),n(v,d),n(d,h),n(h,y),n(y,E),n(d,Z),n(d,G),n(G,H),n(H,j),n(G,R),n(G,X),n(X,$),n(d,te),n(d,F),O(p,L,q),O(p,S,q),O(p,N,q),O(p,U,q),n(U,K),Y.m(K,null),n(U,le),n(U,re);for(let J=0;J<W.length;J+=1)W[J]&&W[J].m(re,null);O(p,b,q),O(p,V,q),ve||(ne=[ce(o,"click",r[21]),ce(F,"click",xe)],ve=!0)},p(p,q){if(p[4]?ee&&(ee.d(1),ee=null):ee||(ee=qe(),ee.c(),ee.m(e.parentNode,e)),q[0]&4&&C!==(C=p[2].gachaCurrency+"")&&ge(E,C),q[0]&4&&A!==(A=p[2].level+"")&&ge(j,A),q[0]&4&&M!==(M=p[2].username+"")&&ge($,M),B===(B=Q(p))&&Y?Y.p(p,q):(Y.d(1),Y=B(p),Y&&(Y.c(),Y.m(K,null))),q[0]&16160){_e=fe(be);let J;for(J=0;J<_e.length;J+=1){const ie=Le(p,_e,J);W[J]?W[J].p(ie,q):(W[J]=Ke(ie),W[J].c(),W[J].m(re,null))}for(;J<W.length;J+=1)W[J].d(1);W.length=_e.length}},i:he,o:he,d(p){p&&(u(e),u(t),u(L),u(S),u(N),u(U),u(b),u(V)),ee&&ee.d(p),Y.d(),ke(W,p),ve=!1,pe(ne)}}}function Bt(r){window.location.href=r}function Ot(r,e,t){let l=["#2672ed","#8626ed","#ed7c26","linear-gradient(180deg, rgb(235, 160, 160), rgb(240, 216, 171), rgb(233, 233, 169), rgb(174, 236, 174), rgb(168, 213, 240), rgb(200, 155, 231), rgb(235, 159, 235))"],s=["color: #2672ed;","color: #8626ed;","color: #ed7c26;","background-image: linear-gradient(90deg, rgb(235, 160, 160), rgb(240, 216, 171), rgb(233, 233, 169), rgb(174, 236, 174), rgb(168, 213, 240), rgb(200, 155, 231), rgb(235, 159, 235));-webkit-background-clip: text;background-clip: text;color: transparent;"],c={kihívó:rt,kettőstámadás:st,tövisesbőr:at,fürgetámadás:ct,robbanótámadás:it,életelszívás_1:Se,életelszívás_2:Se,életelszívás_3:Se},i={tunya:nt,lelkiismeretes:ot,vérszomjas:ut,veszett:dt},v={tunya:"rgb(113, 166, 117)",lelkiismeretes:"rgb(113, 145, 166)",vérszomjas:"rgb(166, 113, 118)",veszett:"rgb(133, 113, 166)"},m=[];for(let b=0;b<be.length;b++)m.push(be[b].name);let o=0,f=[[],[],[],[]],k=[],T=et,d=tt,h=!1;Ye(()=>{t(3,d=JSON.parse(localStorage.getItem("deckData"))),t(2,T=JSON.parse(localStorage.getItem("userData"))),console.log("fasz3: logcaPulDa: ",d),console.log("fasz3: logcaUseDa: ",T),d?Me(d,"deckData"):console.log("Username not found in local storage."),T?(Me(T,"userData"),t(2,T)):console.log("Username not found in local storage.");for(let b=0;b<4;b++)f[b]=d[`deckarray${b}`],f[b]==""&&(f[b]=[]);console.log(f),f=f,t(4,h=!0),t(4,h)});let y=Array(be.length).fill("cardPreviewListCont filtergrayscale");function C(b,V){f[o]==[]?t(1,k=[]):f[o]==""?t(1,k=[]):t(1,k=f[o].split(",")),k.includes(b.name)?(k.splice(k.indexOf(b.name),1),console.log(k),f[o]=String(k),De(`deckarray${o}`,f[o],T.id,"deck"),t(3,d[`deckarray${o}`]=f[o],d),localStorage.setItem("deckData",JSON.stringify(d)),t(5,y[V]="cardPreviewListCont filtergrayscale",y)):(k.push(b.name),t(1,k),f[o]=String(k),console.log(f),console.log(k),De(`deckarray${o}`,f[o],T.id,"deck"),t(3,d[`deckarray${o}`]=f[o],d),localStorage.setItem("deckData",JSON.stringify(d)),t(5,y[V]="cardPreviewListCont",y)),t(1,k),f=f}function E(b,V){k.splice(k.indexOf(b),1),console.log(k),f[o]=String(k),t(0,m),console.log(y[V]),t(5,y[V]="cardPreviewListCont filtergrayscale",y),console.log(y[V]),document.getElementById(b).remove(),De(`deckarray${o}`,f[o],T.id,"deck"),t(3,d[`deckarray${o}`]=f[o],d),localStorage.setItem("deckData",JSON.stringify(d))}let Z=!0;function G(){t(6,Z=!0),t(6,Z),t(1,k=[])}function H(b){if(o=b,f[o]==[]?t(1,k=[]):f[o]==""?t(1,k=[]):t(1,k=f[o].split(",")),y.fill("cardPreviewListCont filtergrayscale"),console.log(f[o]),k!=[])for(let x=0;x<k.length;x++){console.log(k[x]);var V=m.indexOf(k[x]);console.log(V),t(5,y[V]="cardPreviewListCont",y)}f=f,t(6,Z=!1),t(6,Z),t(5,y),t(7,A=d[`deckname${o}`])}let A="";function j(b){t(3,d[`deckname${o}`]=b,d),De(`deckname${o}`,b,T.id,"deck"),localStorage.setItem("deckData",JSON.stringify(d))}function R(b){we.call(this,r,b)}function X(b){we.call(this,r,b)}function M(b){we.call(this,r,b)}const $=()=>Bt("../mainmenuScreen"),te=()=>H(0),F=()=>H(1),z=()=>H(2),L=()=>H(3),S=()=>G();function N(){A=this.value,t(7,A)}return[m,k,T,d,h,y,Z,A,l,s,c,i,v,C,E,G,H,j,R,X,M,$,te,F,z,L,S,N,()=>j(A),(b,V)=>E(b,V),(b,V)=>C(b,V),(b,V)=>C(b,V)]}class Ht extends Ze{constructor(e){super(),$e(this,e,Ot,Vt,Xe,{},null,[-1,-1])}}export{Ht as component};
