(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),r=c.n(s),i=(c(24),c(2)),j=c(3),l=c(5),o=c(4),u=(c(25),c(11)),b=c(6),h=(c(26),c.p+"static/media/logo.0c68e09f.png"),d=(c(27),c(0)),m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("ul",{className:"ul",children:[Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/",children:"Exchange Rates"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/sub",children:"Weather forecast"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/news",children:"News"})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:"/contacts",children:"Contacts"})})]})})}}]),c}(a.a.Component),O=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header-logo",children:Object(d.jsx)("img",{src:h,alt:""})}),Object(d.jsx)(m,{})]})}}]),c}(a.a.Component),f=(c(37),c.p+"static/media/1.26ebf276.png"),p=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsxs)("div",{className:"footer-about",children:[Object(d.jsx)("p",{children:"Made on"}),Object(d.jsx)("div",{className:"footer-about-foto",children:Object(d.jsx)("img",{src:f,className:"foto3",alt:""})}),Object(d.jsx)("p",{children:"Alexander"})]})})}}]),c}(a.a.Component),x=(c(38),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).news=function(){},n.state={newsList:[],firstNews:1,lastNews:10},n}return Object(j.a)(c,[{key:"componentDidMount",value:function(){for(var e=this,t=this.state,c=t.firstNews,n=t.lastNews,a=[],s=function(t){var s={};fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a5492cb2d5a54e628e2e4f3b33e13418").then((function(e){return e.json()})).then((function(e){return e.articles})).then((function(r){s.title=r[t].title,s.description=r[t].description,s.img=r[t].urlToImage,a.push(s),e.setState({firstNews:c+9}),e.setState({lastNews:n+9}),e.setState({newsList:a})}))},r=c;r<n;r++)s(r)}},{key:"render",value:function(){var e=this.state.newsList;return Object(d.jsx)("div",{className:"news-main",children:e.length?Object(d.jsxs)("div",{className:"news-main-block",children:[e.map((function(e,t){return Object(d.jsxs)("div",{className:"news-block-item",children:[Object(d.jsx)("div",{style:{textTransform:"capitalize"},className:"news-block-item-title",children:e.title}),Object(d.jsx)("div",{style:{textTransform:"capitalize"},className:"news-block-item-description",children:e.description}),Object(d.jsx)("div",{className:"news-block-item-img",children:Object(d.jsx)("img",{src:e.img,alt:""})})]},t)})),Object(d.jsx)("button",{onClick:this.news,className:"btn",children:"Load mor"})]}):Object(d.jsx)("h4",{children:"Loading..."})})}}]),c}(a.a.Component)),v=(c(39),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"contacts",children:[Object(d.jsxs)("div",{className:"contacts-block",children:[Object(d.jsx)("p",{children:" Address : 11 Wall St, New York, NY 10005"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"#",children:" Tel : +380 (50) 477 75 06"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:" Mo-Fr 09:00-20:00"}),Object(d.jsx)("p",{children:"Sa-Su 10:00-19:00"})]})]}),Object(d.jsx)("div",{className:"link",children:Object(d.jsxs)("a",{href:"/map",children:[" ",Object(d.jsx)("span",{children:"Show on the map"})," "]})})]})}}]),c}(a.a.Component)),y=(c(40),c.p+"static/media/1.7549cd68.png"),w=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).weatherShow=function(e){e.preventDefault();var t=e.target.elements.town.value;""==t?alert("Enter the town"):fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=b55fa2065395d8fb34e5fcd609ccf1c0")).then((function(e){return e.json()})).then((function(e){var t={};t.Town=e.name,t.Temperature=(e.main.temp-273).toFixed(0)+"\u2103",t.Humidity=e.main.humidity+"%",t.Pressure=e.main.pressure+"mmHg",n.setState({weather:t})}))},n.state={weather:{}},n}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"weather-main",children:[Object(d.jsx)("div",{className:"weather_bg"}),Object(d.jsx)("img",{src:y,className:"foto",alt:""}),Object(d.jsxs)("form",{className:"form-2",action:"",onSubmit:this.weatherShow,children:[Object(d.jsx)("input",{type:"text",name:"town",placeholder:"Enter city "}),Object(d.jsx)("button",{type:"submit",children:"Show"})]}),Object(d.jsx)("div",{className:"weather-block-main",children:Object.entries(this.state.weather).map((function(e,t){return Object(d.jsx)("div",{className:"weather-block",children:Object(d.jsxs)("div",{className:"weather-block-name",children:[e[0]," - ",e[1]]})},e)}))})]})}}]),c}(a.a.Component),N=(c(41),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"map",children:Object(d.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48370.179244290164!2d-74.03216074210695!3d40.737028408123756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a161980d8a1%3A0x9e5797d5a981701d!2z0J3RjNGOLdCZ0L7RgNC60YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCw!5e0!3m2!1sru!2sua!4v1613657508846!5m2!1sru!2sua",width:"100%",height:"450"})})}}]),c}(a.a.Component)),g=(c(42),c(43),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).calcRate=function(e){e.preventDefault();var t=e.target.elements,c=t["count-currency"].value,a=t["type-currency"].value;n.setState({result:(c/n.state.rate[a]).toFixed(2)})},n.state={result:0},n}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"cal\u0441",children:[Object(d.jsx)("div",{className:"calk-title",children:"Exchange calculator "}),Object(d.jsxs)("div",{className:"calc-change ",children:[Object(d.jsxs)("div",{className:"calc-change-block",children:[Object(d.jsx)("p",{children:"Give"}),Object(d.jsxs)("form",{onSubmit:this.calcRate,children:[Object(d.jsx)("input",{type:"number",defaultValue:"0",name:"count-currency"}),Object(d.jsx)("select",{name:"type-currency",id:"",children:Object.keys(this.props.rate).map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},e)}))}),Object(d.jsx)("button",{className:"btn-1",type:"submit",children:"Translate"})]})]}),Object(d.jsxs)("div",{className:"calc-change-block",children:[Object(d.jsx)("p",{children:"Get"}),Object(d.jsx)("ul",{className:"calc-res",children:Object(d.jsxs)("li",{children:["USD ",this.state.result]})})]})]})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{rate:e.rate}}}]),c}(a.a.Component)),k=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).state={date:"",currencyRate:{}},n.currency=["EUR","GBP","RUB","CAD","PLN","UAH"],n}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.currencyfreaks.com/latest?apikey=5da507182cc94252a65bf05cbea6af7e").then((function(e){return e.json()})).then((function(t){e.setState({date:t.date});for(var c={},n=0;n<e.currency.length;n++)c[e.currency[n]]=t.rates[e.currency[n]];e.setState({currencyRate:c})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"rate",children:[Object(d.jsx)(g,{rate:this.state.currencyRate}),Object(d.jsxs)("div",{className:"rate-title",children:["Exchange rates for ",this.state.date]}),Object.keys(this.state.currencyRate).map((function(t,c){return Object(d.jsxs)("div",{className:"rate-block",children:[Object(d.jsx)("div",{className:"rate-block-out",children:"For 1 USD you can buy:"}),Object(d.jsx)("div",{className:"rate-block-in",children:e.state.currencyRate[t]}),Object(d.jsx)("div",{className:"rate-block-name",children:t})]},t)}))]})}}]),c}(a.a.Component),C=(c(44),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"error",children:"404"})}}]),c}(a.a.Component)),S=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(u.a,{basename:"/react_api_new",children:[Object(d.jsx)(O,{}),Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(b.a,{path:"/news",component:x}),Object(d.jsx)(b.a,{path:"/contacts",component:v}),Object(d.jsx)(b.a,{path:"/sub",component:w}),Object(d.jsx)(b.a,{path:"/map",component:N}),Object(d.jsx)(b.a,{component:C})]}),Object(d.jsx)(p,{})]})})}}]),c}(a.a.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),R()}},[[45,1,2]]]);
//# sourceMappingURL=main.b2a9d761.chunk.js.map