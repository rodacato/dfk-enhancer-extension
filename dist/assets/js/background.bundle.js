(()=>{var t={135:(t,e,r)=>{t.exports=r(248)},248:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(P){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(t,e,r){var n=l;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function y(){}function m(){}var w={};s(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==r&&n.call(x,o)&&(w=x);var k=m.prototype=g.prototype=Object.create(w);function B(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,o,i,c){var s=f(t[a],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=f(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=m,s(k,"constructor",m),s(m,"constructor",y),y.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},B(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},B(k),s(k,c,"Generator"),s(k,o,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(a,o){var i=e.apply(r,n);function c(e){t(i,a,o,c,s,"next",e)}function s(e){t(i,a,o,c,s,"throw",e)}c(void 0)}))}}var n=r(135),a=r.n(n),o="https://dfk-enhancer-service.global.ssl.fastly.net",i=function(t,e){var r=l[t][e];return r&&r.toLowerCase()},c=function(t){var e=function(t){var e="123456789abcdefghijkmnopqrstuvwx",r=BigInt(e.length),n="";for(;t>=r;){var a=t%r;n=e[Number(a)]+n,t=(t-a)/r}return(n=(n=e[Number(t)]+n).padStart(48,"1")).replace(/(.{4})/g,"$1 ")}(BigInt(t.toString())).split(" ").join(""),r={},n={},a={},o={},i={},c=[];for(var f in e.split(""))if(e.hasOwnProperty(f)){var h=u[Math.floor(Number(f)/4)],d=s(e[f]);r[h]=l[h][d],c.push(r[h]);for(var p=0;p<c.length;p++)0==p||4==p||8==p||12==p||16==p||20==p||24==p||28==p||32==p||36==p||40==p?i[h]=c[p]:1==p||5==p||9==p||13==p||17==p||21==p||25==p||29==p||33==p||37==p||41==p?o[h]=c[p]:2==p||6==p||10==p||14==p||18==p||22==p||26==p||30==p||34==p||38==p||42==p?a[h]=c[p]:3!=p&&7!=p&&11!=p&&15!=p&&19!=p&&23!=p&&27!=p&&31!=p&&35!=p&&39!=p&&43!=p||(n[h]=c[p])}return{d:n,r1:a,r2:o,r3:i}};function s(t){return"123456789abcdefghijkmnopqrstuvwx".indexOf(t)}var u={0:"class",1:"subClass",2:"profession",3:"passive1",4:"passive2",5:"active1",6:"active2",7:"statBoost1",8:"statBoost2",9:"statsUnknown1",10:"element",11:"statsUnknown2"},f=["common","uncommon","rare","legendary","mythic"],l={gender:{1:"male",3:"female"},background:{0:"desert",2:"forest",4:"plains",6:"island",8:"swamp",10:"mountains",12:"city",14:"arctic"},class:{0:"Warrior",1:"Knight",2:"Thief",3:"Archer",4:"Priest",5:"Wizard",6:"Monk",7:"Pirate",16:"Paladin",17:"DarkKnight",18:"Summoner",19:"Ninja",24:"Dragoon",25:"Sage",28:"DreadKnight"},skinColor:{0:"c58135",2:"f1ca9e",4:"985e1c",6:"57340c",8:"e6a861",10:"7b4a11",12:"e5ac91",14:"aa5c38"},hairColor:{0:"ab9159",1:"af3853",2:"578761",3:"068483",4:"48321e",5:"66489e",6:"ca93a7",7:"62a7e6",16:"d7bc65",17:"9b68ab",18:"8d6b3a",19:"566377",24:"880016",25:"353132",28:"8f9bb3"},eyeColor:{0:"203997",2:"896693",4:"bb3f55",6:"0d7634",8:"8d7136",10:"613d8a",12:"2494a2",14:"a41e12"},appendageColor:{0:"c5bfa7",1:"a88b47",2:"58381e",3:"566f7d",4:"2a386d",5:"3f2e40",6:"830e18",7:"6f3a3c",16:"6b173c",17:"a0304d",18:"78547c",19:"352a51",24:"c29d35",25:"211f1f",28:"d7d7d7"},backAppendageColor:{0:"c5bfa7",1:"a88b47",2:"58381e",3:"566f7d",4:"2a386d",5:"3f2e40",6:"830e18",7:"6f3a3c",16:"6b173c",17:"a0304d",18:"78547c",19:"352a51",24:"c29d35",25:"211f1f",28:"d7d7d7"},hairStyle:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},backAppendage:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},headAppendage:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},subClass:{0:"Warrior",1:"Knight",2:"Thief",3:"Archer",4:"Priest",5:"Wizard",6:"Monk",7:"Pirate",16:"Paladin",17:"DarkKnight",18:"Summoner",19:"Ninja",24:"Dragoon",25:"Sage",28:"DreadKnight"},profession:{0:"mining",2:"gardening",4:"fishing",6:"foraging"},passive1:{0:"Basic1",1:"Basic2",2:"Basic3",3:"Basic4",4:"Basic5",5:"Basic6",6:"Basic7",7:"Basic8",16:"Advanced1",17:"Advanced2",18:"Advanced3",19:"Advanced4",24:"Elite1",25:"Elite2",28:"Transcendent1"},passive2:{0:"Basic1",1:"Basic2",2:"Basic3",3:"Basic4",4:"Basic5",5:"Basic6",6:"Basic7",7:"Basic8",16:"Advanced1",17:"Advanced2",18:"Advanced3",19:"Advanced4",24:"Elite1",25:"Elite2",28:"Transcendent1"},active1:{0:"Basic1",1:"Basic2",2:"Basic3",3:"Basic4",4:"Basic5",5:"Basic6",6:"Basic7",7:"Basic8",16:"Advanced1",17:"Advanced2",18:"Advanced3",19:"Advanced4",24:"Elite1",25:"Elite2",28:"Transcendent1"},active2:{0:"Basic1",1:"Basic2",2:"Basic3",3:"Basic4",4:"Basic5",5:"Basic6",6:"Basic7",7:"Basic8",16:"Advanced1",17:"Advanced2",18:"Advanced3",19:"Advanced4",24:"Elite1",25:"Elite2",28:"Transcendent1"},statBoost1:{0:"STR",2:"AGI",4:"INT",6:"WIS",8:"LCK",10:"VIT",12:"END",14:"DEX"},statBoost2:{0:"STR",2:"AGI",4:"INT",6:"WIS",8:"LCK",10:"VIT",12:"END",14:"DEX"},element:{0:"fire",2:"water",4:"earth",6:"wind",8:"lightning",10:"ice",12:"light",14:"dark"},visualUnknown1:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},visualUnknown2:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},statsUnknown1:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28},statsUnknown2:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,16:16,17:17,18:18,19:19,24:24,25:25,28:28}},h=function(t){return{id:t.id,mainClass:i("class",t.mainclass),subClass:i("subClass",t.subclass),profession:t.profession.toLowerCase(),rarity:(e=t.rarity,f[e]),level:t.level,greenGene:t.statBoost1,blueGene:t.statBoost2,statsGenes:c(t.statgenes),visualgenes:t.visualgenes,professions_stats:{fishing:t.fishing,foraging:t.foraging,gardening:t.gardening,mining:t.mining},stats:{dexterity:t.dexterity,endurance:t.endurance,intelligence:t.intelligence,vitality:t.vitality,wisdom:t.wisdom,strength:t.strength,agility:t.agility,luck:t.luck}};var e},d=function(t){var e=t.scoreV2_0||{};return{id:t.id,heroesCount:e.total_hero,profession:{current:t.profession,best:e.bestProf,score:e.profRankScore,percentile:e.bestProfPercentile,rank:e.profession_rank_leaderboard},summoning:{score:e.summoningScore,rank:e.summoning_rank_leaderboard,percentile:e.summoningRank},pvp:{score:e.pvp_score,rank:e.pvp_rank_leaderboard,percentile:e.pvp_ranking}}};const p={fetchHero:function(){var t=e(a().mark((function t(e){var r,n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/dfk-tavern/heroes/").concat(e),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return i=t.sent,t.abrupt("return",h(i[0]));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fetchHeroTavernStats:function(){var t=e(a().mark((function t(e){var r,n,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(o,"/dfk-tavern/heroes/").concat(e,"/stats"),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return i=t.sent,t.abrupt("return",d(i.profRanking[0]));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};chrome.runtime.onMessage.addListener((function(t,e,r){return console.log(t,e),"getHeroDFKTavernStats"===t.command&&p.fetchHeroTavernStats(t.payload.heroId).then((function(t){r(t)})),"getHero"===t.command&&p.fetchHero(t.payload.heroId).then((function(t){r(t)})),!0}))})()})();