javascript:!function(){function randint(e){return Math.floor(Math.random*(e-1))}!function(){if(window.alert("This hack is made by ecc251 and is maintained by Forested Studios\nDo s to start the bot and e to stop it."),window.confirm("According to this statement, you accept that we nor ecc521 are to blame if you get banned or punished.")){const e=getEventListeners;console.log(e);const r=o=>new Promise(e=>setTimeout(e,o)),u={moneyPerQuestion:[void 0,10,100,1e3,1e4,75e3,3e5,1e6,1e7,1e8],streakBonus:[void 0,15,150,1500,15e3,115e3,45e4,15e5,15e6,2e8],multiplier:[void 0,50,300,2e3,12e3,85e3,7e5,65e5,65e6,1e9],insurance:[void 0,10,250,1e3,25e3,1e5,1e6,5e6,25e6,5e7]},a={};function s(o){console.log(o),["touchstart","touchend","mouseover","mousemove","mousedown","mouseup","click"].forEach(e=>{!e.includes("mouse")&&"click"!=e||o.dispatchEvent(new MouseEvent("click",{bubbles:!0}))})}a.toggleLoc=()=>{s(document.querySelector('div[style="font-weight: 900; cursor: pointer; font-size: 22px;"]'))},a.toShop=()=>{s(document.querySelectorAll("svg.MuiSvgIcon-root")[0]),s(document.querySelectorAll("nav.MuiList-root.MuiList-padding svg.MuiSvgIcon-root")[1])},a.toQuestion=()=>{s(document.querySelectorAll("svg.MuiSvgIcon-root")[0]),s(document.querySelectorAll("nav.MuiList-root.MuiList-padding svg.MuiSvgIcon-root")[0])},a.simpleClick=s,console.log("Transporter: loaded"),console.log("ClickElement: loaded");let c={};console.log("GetMoney: loaded");async function t(){a.toQuestion();var o=document.querySelectorAll("span.notranslate.lang-en");if(console.log(o),questionName=o[0].innerText,index=1,c[questionName]){var t=c[questionName];for(let e=1;e div > div > div:nth-child(3) > div:nth-child(1) > div > div > div > div > div:nth-child(3)").innerText;c[questionName]=l,a.toQuestion()}else{c[questionName]=n;var d=Number(document.querySelector("body > div > div").innerText.split(",").join("").split("\n")[0].slice(1));let e;i=u.moneyPerQuestion.findIndex(e=>e<=d),l=u.streakBonus.findIndex(e=>e<=d),n=u.multiplier.findIndex(e=>e<=d);let o;-1!=i?(e=0,o=i,u.moneyPerQuestion[i]=void 0):-1!=l?(e=1,o=l,u.streakBonus[l]=void 0):-1!=n&&(e=2,o=n,u.multiplier[n]=void 0),console.log(d),console.log(e),console.log(o),console.log(i,l,n),null!=e&&(a.toShop(),await r(400),n=document.querySelectorAll("body > div > div > div:nth-child(3) > div:nth-child(1) > div > div > div"),console.log(n),a.simpleClick(n[e]),await r(400),s((n=document.querySelectorAll("body > div > div > div:nth-child(3) > div:nth-child(1) > div > div > div > div"))[o+3]),await r(300),a.simpleClick(n[2]),await r(300)),a.toQuestion()}await r(400)}let o=!1;window.addEventListener("keyup",function(e){"s"==e.key&&!async function(){for(o=!0;!0===o;)await t()}()}),window.addEventListener("keyup",function(e){"e"==e.key&&(o=!1)}),console.log("Script loaded successfully")}}();}();
