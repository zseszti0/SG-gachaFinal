import{h as t,e as u}from"./client.eTayNyBR.js";import"./card.XsObq2_4.js";import"./index.7l0AZJdu.js";let G=!1,f="",I={},n="",d="",a="",H="",r={isYourTurn:"",currentHand:[],remaningDeck:[],yourBoard:Array(10).fill(""),mana:2,spellMana:0,username:"",hp:0,secretSpells:[],yourBuildings:[]},c={isYourTurn:"",currentHand:[],remaningDeck:[],yourBoard:Array(10).fill(""),mana:2,spellMana:0,username:"",hp:0,secretSpells:[],yourBuildings:[]};function K(){r=JSON.parse(localStorage.getItem("yourGameParams")),c=JSON.parse(localStorage.getItem("opponentGameParams")),console.log("enemy and your game paramts, clinet: ",r,c)}function q(e,o,i){n=e,d=o,a=i}let p,J,N,T=!1;function x(){T=!0,p=new Event("matchMadeEvent"),J=new Event("socketLoaded"),N=new Event("matchDeclinedEvent")}function z(e,o){f=e.id,I=e,console.log("MATCHLOG: ",e.id,o),t.emit("makeMatchSocket",`${f}${JSON.stringify(o)}`)}t.on("makeMatchSocket",e=>{if(e.substring(0,23).includes(u)){console.log("socket on makeMatch: ",e);var o=JSON.parse(e.replace(u,""));p.data=o,f=o.id,I=o,document.dispatchEvent(p)}});function F(){t.emit("MatchAccepted",`${u}${f}`)}function j(e){console.log("MATCHLOG: ",e),t.emit("MatchDeclined",e)}let y=!1,g=!1;function Q(){var e=n+"trueReady";t.emit(a,e),y=!0,console.log("ready vagy te"),y&&g&&(console.log("LETS GOOOOOOOOOOOOOOOOOOOOOOOOO"),t.emit("newPage",`${n}DisconnectedWithSocket`),window.location.href="./gameplayScreen")}let L=!1;t.on("connect",()=>{console.log(`${Date.now()}: Connected with ID: ${t.id}`),L=!0,T&&document.dispatchEvent(J),t.on(`${u}MatchDeclined`,()=>{console.log("MATCHDECLINED"),document.dispatchEvent(N)}),t.on("MatchAccepted",e=>{e.includes(u)&&(localStorage.setItem("yourGameID",JSON.stringify(u)),localStorage.setItem("opponentGameID",JSON.stringify(f)),localStorage.setItem("gameKey",JSON.stringify(e)),localStorage.setItem("opponentInfo",JSON.stringify(I)),window.location.href="./matchScreen")})});function U(){G=!0}let w,k,v,$,S,E,h,A,M,O,P,C=!1,D=!1;function R(){!G&&!L?setTimeout(()=>{R()},10):(w=new Event("socketConnected"),k=new Event("nextTurn"),v=new Event("updateParams"),$=new Event("actionLog"),S=new Event("cellAligmentAnim"),E=new Event("cardDmgAnim"),h=new Event("summoningLocationEvent"),A=new Event("cardAttackAnimEvent"),M=new Event("startingHandEvent"),O=new Event("endGameEvent"),P=new Event("bizsoEndTurn"),Y())}function Y(){console.log("ready for server code"),n=JSON.parse(localStorage.getItem("yourGameID")),d=JSON.parse(localStorage.getItem("opponentGameID")),a=JSON.parse(localStorage.getItem("gameKey")),console.log("GAMEKEY: ",a),t.emit(a,JSON.stringify(`${n}SocketConnectionEstablished`)),t.on(a,e=>{if(console.log("msg"),e.includes("trueReady"))console.log("Ready msg got: ",e),e.includes(d)&&(g=!0,console.log(y,g),y&&g&&(console.log("LETS GOOOOOOOOOOOOOOOOOOOOOOOOO"),window.location.href="./gameplayScreen"));else if(e.includes("SocketConnectionEstablished"))console.log(`${Date.now()}: connected msg got: `,e),console.log(d),e.includes(d)&&(console.log(`${Date.now()}: opponent connected`),document.dispatchEvent(w));else if(e.includes("isFirst"))console.log(e),r.isYourTurn==""&&(r.isYourTurn=!0,e.includes(n)?(r.isYourTurn=!0,c.isYourTurn=!1):(r.isYourTurn=!1,c.isYourTurn=!0),console.log("FIRSTLOG: ",e,r,c),localStorage.setItem("yourGameParams",JSON.stringify(r)),localStorage.setItem("opponentGameParams",JSON.stringify(c)));else if(e.includes("TurnEnded"))c.isYourTurn=!c.isYourTurn,document.dispatchEvent(k),document.dispatchEvent(v);else if(e.includes("ActionLog")){var o;e.includes(n)?o="your":o="enemy";var i=e.replace("ActionLog",""),m;o=="your"?m=i.replace(n,""):m=i.replace(d,""),H={card:JSON.parse(m),side:o},document.dispatchEvent($)}else if(e.includes("CellAligmentAnimation"))S.data=e.replace("CellAligmentAnimation",""),document.dispatchEvent(S);else if(e.includes("CardDmgAnimation")){var s=JSON.parse(e.replace("CardDmgAnimation",""));s.side==n?s.side="your":s.side="enemy",s.side=="enemy"&&(s.domId=`e${s.domId}`),E.data=s,document.dispatchEvent(E)}else if(e.includes("BizsoEndTurn"))document.dispatchEvent(P);else if(e.includes("SummoningLocationChoosing")){var l=JSON.parse(e.replace("SummoningLocationChoosing",""));l.side==n?l.side="your":l.side="enemy",h.data=l,document.dispatchEvent(h)}else if(e.includes("CardAttackAnimation")){var l=JSON.parse(e.replace("CardAttackAnimation",""));l.side==n?l.side="td":l.side="etd",A.data=l,document.dispatchEvent(A)}else if(e.includes("StartingHandReady")){var l=e.replace("StartingHandReady","");l==n?C=!0:D=!0,C&&D&&document.dispatchEvent(M)}else if(e.includes("JustWonTheGame")){var l=e.replace("JustWonTheGame","");l==n?O.data="victory":O.data="defeat",document.dispatchEvent(O)}else e=JSON.parse(e),e.gameId!=n?(console.log("from server, enemyGameParamters: ",e),localStorage.setItem("opponentGameParams",JSON.stringify(e)),c=e,c.yourBoard.length==0&&(console.log("üres vót"),c.yourBoard=Array(10).fill(""))):e.gameId==n&&(console.log("from server, yourGameParamters: ",e),localStorage.setItem("yourGameParams",JSON.stringify(e)),r=e,r.yourBoard.length==0&&(console.log("üres vót"),r.yourBoard=Array(10).fill(""))),document.dispatchEvent(v)})}t.on("disconnect",()=>{});function V(e){e.gameId==n&&(r=e),t.emit(a,JSON.stringify(e)),console.log(`${Date.now()}: game data sent: `,n)}function X(){t.emit(a,"TurnEnded")}function Z(){t.emit(a,`${n}StartingHandReady`)}function _(e,o){var i={attackerI:o,defenderI:e,side:n};console.log("ANIMLOG client: ",i),t.emit(a,`CardAttackAnimation${JSON.stringify(i)}`)}function ee(e){t.emit(a,`${n}ActionLog${JSON.stringify(e)}`),console.log("ACTIONLOG: ",`ActionLog${JSON.stringify(e)}`)}function ne(e){t.emit(a,`CellAligmentAnimation${e}`)}function te(e,o,i,m){i=="your"?i=n:i=d;var s={domId:e,dmg:o,side:i,type:m};t.emit(a,`CardDmgAnimation${JSON.stringify(s)}`)}function oe(){t.emit(a,`${n}JustWonTheGame`)}function ae(e,o){var i={side:n,wether:e};t.emit(a,`SummoningLocationChoosing${JSON.stringify(i)}`)}R();export{F as A,te as C,j as D,X as E,q as G,x as L,Q as P,V as S,U as a,Z as b,K as c,ee as d,c as e,oe as f,ae as g,ne as h,_ as i,H as l,z as s,r as y};
