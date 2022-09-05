(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var c=e.g.document;if(!r&&c&&(c.currentScript&&(r=c.currentScript.src),!r)){var a=c.getElementsByTagName("script");a.length&&(r=a[a.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r+"../"})();const r={azathoth:e.p+"assets/e76cc60e6f2b9bb167ce.png",cthulhu:e.p+"assets/e7bfd029744dc9f87c1a.png",iogSothoth:e.p+"assets/c5b7717bff973cda27be.png",shubNiggurath:e.p+"assets/68c4272e00c9596e65b1.png"},c=[{id:"azathoth",name:"azathoth",cardFace:r.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4},green:5,brown:9,blue:2},{id:"cthulhu",name:"cthulhu",cardFace:r.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4},green:4,brown:9,blue:2},{id:"iogSothoth",name:"iogSothoth",cardFace:r.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4},green:5,brown:9,blue:2},{id:"shubNiggurath",name:"shubNiggurath",cardFace:r.shubNiggurath,firstStage:{green:1,blue:1,brown:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4},green:6,brown:8,blue:2}],a=e.p+"assets/635012cb5c1e192ab1c6.png",n=e.p+"assets/6cfef7456fa52cb3c0c7.png",o={brown1:e.p+"assets/ac85e7db9ab360fe235a.png",brown2:e.p+"assets/c44579505d0d3ccfd7c8.png",brown3:e.p+"assets/caababcab21e08510c27.png",brown4:e.p+"assets/e387b64a537a0fb25c84.png",brown5:e.p+"assets/709f87f82c146ab3189a.png",brown6:e.p+"assets/23453f970c4a388f8b68.png",brown7:e.p+"assets/7da5050420b14d67a481.png",brown8:e.p+"assets/2126fcd965be3b428dca.png",brown9:e.p+"assets/3d69a01cdd56175f304e.png",brown10:e.p+"assets/703068f44f9153534f9c.png",brown11:e.p+"assets/157fd0a92444cc2a245f.png",brown12:e.p+"assets/920b1409d3f7d006e764.png",brown13:e.p+"assets/a8d77ff5b5eaa534b968.png",brown14:e.p+"assets/f5d21e1965d8ec808bc2.png",brown15:e.p+"assets/036f8f91eccd0e8f9708.png",brown16:e.p+"assets/1fd61bbd111986a0965a.png",brown17:e.p+"assets/6a53cc04a2d6cbb63677.png",brown18:e.p+"assets/c537bfb2cd284c9667ae.png",brown19:e.p+"assets/199841521c55940d0d03.png",brown20:e.p+"assets/1182a8f80bd2272b3d07.png",brown21:e.p+"assets/3a8e72879e11c315c59d.png"},t=[{id:"brown1",cardFace:o.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:o.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:o.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:o.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:o.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:o.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:o.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:o.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:o.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:o.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:o.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:o.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:o.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:o.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:o.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:o.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:o.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:o.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:o.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:o.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:o.brown21,difficulty:"easy",color:"brown"}],d={blue1:e.p+"assets/09c8e5eb50dc7666f1aa.png",blue2:e.p+"assets/3cc352cdc8fade5dad4c.png",blue3:e.p+"assets/fdd1d10ff513774eb841.png",blue4:e.p+"assets/f09f0f715e525a0b50ec.png",blue5:e.p+"assets/e3e8792622b0c75c78c1.png",blue6:e.p+"assets/cf323c98a3f54632a66c.png",blue7:e.p+"assets/4cdb1bd641372e2d0f74.png",blue8:e.p+"assets/02a9eec68518951fc18e.png",blue9:e.p+"assets/d3371911f8f0d84b5585.png",blue10:e.p+"assets/c61c9f73492d8cd7027c.png",blue11:e.p+"assets/f7e6552a92e4b878107a.png",blue12:e.p+"assets/204f9160083e529ab763.png"},s=[{id:"blue1",cardFace:d.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:d.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:d.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:d.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:d.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:d.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:d.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:d.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:d.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:d.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:d.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:d.blue12,difficulty:"normal",color:"blue"}],l={green1:e.p+"assets/ee9218f13d2668469469.png",green2:e.p+"assets/1a1b4da17274000ce3a8.png",green3:e.p+"assets/24a6de1c53f0cc14bb95.png",green4:e.p+"assets/d9d9a3dc837a4101fc61.png",green5:e.p+"assets/0634bb414e136066d46f.png",green6:e.p+"assets/ca07046ad17914ec04d0.png",green7:e.p+"assets/f9d8238c6770bdc97f73.png",green8:e.p+"assets/bc5f83ed7ced1b832494.png",green9:e.p+"assets/bc368631ac89e5bf0891.png",green10:e.p+"assets/766beb973fc76ac9564e.png",green11:e.p+"assets/305fdb3b09ad909c598f.png",green12:e.p+"assets/b786b0a5e0aaf884c27b.png",green13:e.p+"assets/b3e3243ad3927ba66da7.png",green14:e.p+"assets/20b6b1be80bef6932ab0.png",green15:e.p+"assets/63677766cd3a4cea8da0.png",green16:e.p+"assets/608e0aecaccf5ff896fb.png",green17:e.p+"assets/0ebea1f5b536a0b85765.png",green18:e.p+"assets/268edbdc27e016d06a52.png"},i=[{id:"green1",cardFace:l.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:l.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:l.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:l.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:l.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:l.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:l.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:l.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:l.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:l.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:l.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:l.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:l.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:l.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:l.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:l.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:l.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:l.green18,difficulty:"easy",color:"green"}],b=[{id:"easy",name:"Низкая"},{id:"normal",name:"Средняя"},{id:"hard",name:"Высокая"}];document.body.style.backgroundImage=`url('${a}')`;const f=document.querySelector(".deck");let g,u,p;f.style.backgroundImage=`url('${n}')`;const w=document.querySelector(".green"),y=document.querySelector(".brown"),h=document.querySelector(".blue"),m=document.querySelector(".difficulty-container"),F=document.querySelector(".stage-container"),v=document.querySelectorAll(".ancient-card");for(let e=0;e<v.length;e++)v[e].style.backgroundImage=`url('${c[e].cardFace}')`,v[e].addEventListener("click",(()=>{for(let e of v)e.classList.remove("active");for(let e of A)e.classList.remove("active");m.classList.add("active"),v[e].classList.add("active"),T.classList.remove("active"),f.classList.remove("active"),P.classList.remove("active"),F.classList.remove("active"),D.classList.remove("done"),g=c[e].green,u=c[e].brown,p=c[e].blue}));function C(e,r){return e.filter((e=>e.difficulty==r))}const S=C(s,b[2].id),L=C(t,b[2].id),k=C(i,b[2].id),q=C(s,b[1].id),N=C(t,b[1].id),x=C(i,b[1].id),$=C(s,b[0].id),E=C(t,b[0].id),I=C(i,b[0].id);function z(e){return Math.floor(Math.random()*e.length)}function J(e,r,c){let a,n=[],o=JSON.parse(JSON.stringify(r));for(c&&(a=JSON.parse(JSON.stringify(c)));n.length<e;)n=c?o.length?n.concat(o.splice(z(o),1)):n.concat(a.splice(z(a),1)):n.concat(o.splice(z(o),1));return n}let O=[];const A=document.querySelectorAll(".difficulty"),T=document.querySelector(".shuffle-button"),j=[function(){let e=J(g,I,x),r=J(u,E,N),c=J(p,$,q);return O.concat(e,r,c)},function(){let e=J(g,I.concat(x)),r=J(u,E.concat(N)),c=J(p,$.concat(q));return O.concat(e,r,c)},function(){let e=J(g,i),r=J(u,t),c=J(p,s);return O.concat(e,r,c)},function(){let e=J(g,k.concat(x)),r=J(u,L.concat(N)),c=J(p,S.concat(q));return O.concat(e,r,c)},function(){let e=J(g,k,x),r=J(u,L,N),c=J(p,S,q);return O.concat(e,r,c)}];let M,B;for(let e=0;e<A.length;e++)A[e].addEventListener("click",(()=>{for(let e of A)e.classList.remove("active");A[e].classList.add("active"),M=j[e](),T.classList.add("active"),f.classList.remove("active"),P.classList.remove("active"),F.classList.remove("active"),D.classList.remove("done"),w.textContent=g,y.textContent=u,h.textContent=p}));T.addEventListener("click",(()=>{T.classList.remove("active"),F.classList.add("active"),f.classList.add("active"),P.classList.add("active"),D.classList.remove("done"),P.style.backgroundImage="none"}));const P=document.querySelector(".last-card"),D=document.querySelector(".stage-text");f.addEventListener("click",(()=>{M.length?(B=M.splice(z(M),1),P.style.backgroundImage=`url('${B[0].cardFace}')`,"green"==B[0].color?w.textContent--:"brown"==B[0].color?y.textContent--:"blue"==B[0].color&&h.textContent--):(P.style.backgroundImage="none",D.classList.add("done"))}))})();