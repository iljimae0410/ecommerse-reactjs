import{u as p,j as e,a as r,B as d,s as v,b as m,c as f,d as g,e as N,F as y,f as b,r as o,g as x,h as P,i as I}from"./index-f2bb83f2.js";import{M as l,u as S,a as T,b as w}from"./Footer-ce63df2e.js";import{C as $,P as h}from"./ProductItem-9a58d6c2.js";function j(){const{container:n,content:t,title:s,des:a}=v,c=p();return e("div",{className:n,children:r("div",{className:t,children:[e("h1",{className:s,children:"XStore Marseille04 Demo"}),e("div",{className:a,children:"Make yours celebrations even more special this years with beautiful."}),e("div",{style:{width:"172px"},children:e(d,{content:"Go to shop",onClick:()=>{c("/shop")}})})]})})}const B="/ecommerse-reactjs/assets/truckicon-0ca41189.svg";function C({content:n,description:t,src:s}){const{containerCard:a,containerContent:c,title:i,des:u}=m;return r("div",{className:a,children:[e("img",{width:40,height:40.5,src:s,alt:"TruckIcon"}),r("div",{className:c,children:[e("div",{className:i,children:n}),e("div",{className:u,children:t})]})]})}const X="/ecommerse-reactjs/assets/debitcardicon-95e9c539.svg",k="/ecommerse-reactjs/assets/boxicon-6c3ec002.svg",D="/ecommerse-reactjs/assets/chaticon-33abd9e8.svg",M=[{content:"Fastest Shipping",description:"Order at $39 order",src:B},{content:"100% Safe Payments",description:"9 month installments",src:X},{content:"14-Days Return",description:"Shop with confidence",src:k},{content:"24/7 Online Support",description:"Delivered to home",src:D}];function H(){const{container:n}=m;return e("div",{children:e(l,{children:e("div",{className:n,children:M.map(t=>e(C,{content:t.content,description:t.description,src:t.src}))})})})}function E(){const{container:n,headline:t,des:s,title:a,containerMiddleBox:c}=f;return e("div",{className:"",children:e(l,{children:r("div",{className:n,children:[e("div",{className:t}),r("div",{className:c,children:[e("div",{className:s,children:"don't miss super offers"}),e("div",{className:a,children:"Our best products"})]}),e("div",{className:t})]})})})}function F(){const{container:n,container__timer:t,title:s,boxBtn:a}=g;return r("div",{className:n,children:[e("div",{className:t,children:e($,{targetDate:"2025-12-31T00:00:00"})}),e("p",{className:s,children:"The classics make a comeback"}),e("div",{className:a,children:e(d,{content:"Buy Now"})})]})}function L({data:n}){const{container:t,containerItem:s}=N;return e(l,{children:r("div",{className:t,children:[e(F,{}),e("div",{className:s,children:n.map(a=>e(h,{src:a.images[0],prevSrc:a.images[1],name:a.name,price:a.price,details:a},a.id))})]})})}function _({data:n}){const{container:t}=b;return e(y,{children:e(l,{children:e("div",{className:t,children:n.map(s=>e(h,{src:s.images[0],prevSrc:s.images[1],name:s.name,price:s.price,details:s},s.id))})})})}const O=()=>{const{scrollDirection:n,scrollPosition:t}=S(),[s,a]=o.useState(80),c=()=>{n==="down"&&t>=1500?a(s<=0?0:s-1):n==="up"&&a(s>=80?80:s+1)};return o.useEffect(()=>{c()},[t]),{translateXPosition:s}};function q(){const{container:n,title:t,des:s,boxBtn:a,boxImg:c}=x,{translateXPosition:i}=O();return r("div",{className:n,children:[e("div",{className:c,style:{transform:`translateX(${i}px)`,transition:"transform 0.6s ease"},children:e("img",{src:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg",alt:""})}),r("div",{children:[e("h2",{className:t,children:"Sale of the year"}),e("p",{className:s,children:"Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales."}),e("div",{className:a,children:e(d,{content:"Read more",isPrimary:!1})})]}),e("div",{className:c,style:{transform:`translateX(-${i}px)`,transition:"transform 0.6s ease"},children:e("img",{src:"https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg",alt:""})})]})}function z(){const{container:n}=I,[t,s]=o.useState([]);return o.useEffect(()=>{P({sortType:0,page:1,limit:10}).then(c=>{s(c.contents)})},[]),e("div",{children:r("div",{className:n,children:[e(T,{}),e(j,{}),e(H,{}),e(E,{}),e(L,{data:t.slice(0,2)}),e(_,{data:t.slice(2,10)}),e(q,{}),e(w,{})]})})}export{z as default};
