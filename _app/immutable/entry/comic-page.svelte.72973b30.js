import{S as G,i as M,s as j,L as $,k,a as P,K as z,l as w,h as s,c as R,m as g,n as v,D as u,b as f,M as A,E as m,q as p,r as _,C as H}from"../chunks/index.ac557520.js";function K(a){return{c:m,l:m,m,p:m,d:m}}function T(a){let t,i=a[0].title+"",l,n,e,o,y=a[0].day+"",L,C,U=a[0].month+"",E,S,q=a[0].year+"",I,b,r,D;return{c(){t=k("h2"),l=p(i),n=P(),e=k("p"),o=p("Date: "),L=p(y),C=p("."),E=p(U),S=p("."),I=p(q),b=P(),r=k("img"),this.h()},l(c){t=w(c,"H2",{});var h=g(t);l=_(h,i),h.forEach(s),n=R(c),e=w(c,"P",{});var d=g(e);o=_(d,"Date: "),L=_(d,y),C=_(d,"."),E=_(d,U),S=_(d,"."),I=_(d,q),d.forEach(s),b=R(c),r=w(c,"IMG",{src:!0,alt:!0,title:!0,class:!0}),this.h()},h(){H(r.src,D=a[0].img)||v(r,"src",D),v(r,"alt",a[0].alt),v(r,"title",a[0].title),v(r,"class","svelte-5v5lmr")},m(c,h){f(c,t,h),u(t,l),f(c,n,h),f(c,e,h),u(e,o),u(e,L),u(e,C),u(e,E),u(e,S),u(e,I),f(c,b,h),f(c,r,h)},p:m,d(c){c&&s(t),c&&s(n),c&&s(e),c&&s(b),c&&s(r)}}}function V(a){let t,i;return{c(){t=k("p"),i=p("Loading...")},l(l){t=w(l,"P",{});var n=g(t);i=_(n,"Loading..."),n.forEach(s)},m(l,n){f(l,t,n),u(t,i)},p:m,d(l){l&&s(t)}}}function B(a){let t,i,l,n={ctx:a,current:null,token:null,hasCatch:!1,pending:V,then:T,catch:K,value:0};return $(a[0],n),{c(){t=k("meta"),i=P(),l=k("div"),n.block.c(),this.h()},l(e){const o=z("svelte-tueuuz",document.head);t=w(o,"META",{name:!0,content:!0}),o.forEach(s),i=R(e),l=w(e,"DIV",{});var y=g(l);n.block.l(y),y.forEach(s),this.h()},h(){document.title="Comic",v(t,"name","description"),v(t,"content","Comic")},m(e,o){u(document.head,t),f(e,i,o),f(e,l,o),n.block.m(l,n.anchor=null),n.mount=()=>l,n.anchor=null},p(e,[o]){a=e,A(n,a,o)},i:m,o:m,d(e){s(t),e&&s(i),e&&s(l),n.block.d(),n.token=null,n=null}}}const F="s.pasynkov@innopolis.university",J="https://fwd.innopolis.app/api/hw2",N="https://getxkcd.vercel.app/api/comic";async function O(){const a=new URL(J),t=new URLSearchParams({email:F});return a.search=new URLSearchParams(t).toString(),await(await fetch(a)).json()}async function Q(){const a=await O(),t=new URL(N);return t.search=new URLSearchParams({num:a.toString()}).toString(),(await fetch(t)).json()}function W(a){return[Q()]}class Y extends G{constructor(t){super(),M(this,t,W,B,j,{})}}export{Y as default};
