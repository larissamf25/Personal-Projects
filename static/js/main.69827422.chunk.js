(this.webpackJsonpmywallet=this.webpackJsonpmywallet||[]).push([[0],{42:function(e,t,a){},47:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),i=a(21),o=(a(42),a(12)),u=a(3),s=a(14),m=a(9),d=a(10),p=a(11),h=a(13),E=a(16),b=a(19),v=a(26),f=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},g="SAVE_LOGIN",y="FETCH_SUCESS";var j="SAVE_EXPENSES",O=function(e){return{type:j,expense:e}};var w="DELETE_ITEM",C="EDIT_ITEM",x="UPDATE_ITEM",k=(a(47),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r),e.validateLogin)},e.validateLogin=function(){var t=e.state,a=t.emailInput;t.passwordInput.length>=6&&/^[a-zA-Z0-9.!#$%&*+/=?^_{|}~-]+@[a-zA-Z0-9.-]+\.com$/gim.test(a)?e.setState({btnDisabled:!1}):e.setState({btnDisabled:!0})},e.handleLogin=function(){var t=e.state.emailInput;(0,e.props.saveLoginFunc)(t),e.setState({redirect:!0})},e.state={emailInput:"",passwordInput:"",btnDisabled:!0,redirect:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.btnDisabled;return e.redirect?r.a.createElement(u.a,{to:"/carteira"}):r.a.createElement("div",null,r.a.createElement("form",{className:"login-form"},r.a.createElement(E.d,{className:"icon"}),r.a.createElement("h1",null,"my wallet"),r.a.createElement("input",{"data-testid":"email-input",placeholder:"email",name:"emailInput",onChange:this.handleChange}),r.a.createElement("input",{"data-testid":"password-input",placeholder:"senha",name:"passwordInput",type:"password",onChange:this.handleChange}),r.a.createElement("button",{type:"button",disabled:t,onClick:this.handleLogin},"Entrar"),r.a.createElement("a",{href:"www.google.com"},"forgot the password")))}}]),a}(r.a.Component)),F=Object(o.b)(null,(function(e){return{saveLoginFunc:function(t){return e({type:g,email:t})}}}))(k),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.wallet.expenses;return r.a.createElement("div",{className:"header"},r.a.createElement(E.c,{className:"icon"}),r.a.createElement("p",{className:"email","data-testid":"email-field"},t.email),r.a.createElement("p",{className:"title"},r.a.createElement("span",{style:{color:"#1BB81B"}},"M"),"y",r.a.createElement("span",{style:{color:"#1BB81B"}},"W"),"allet"),r.a.createElement("div",{className:"total-container"},r.a.createElement("p",null,"R$"),r.a.createElement("p",{"data-testid":"total-field"},a.reduce((function(e,t){var a=t.value,n=t.currency,r=t.exchangeRates;return e+parseFloat(a)*parseFloat(r[n].ask)}),0).toFixed(2))))}}]),a}(n.Component),T=Object(o.b)((function(e){return{user:e.user,wallet:e.wallet}}))(S),I=a(29),N=a(34),D=a(35),R=a(36),L=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleFilter=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.state={rank:!1},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.wallet,n=t.deleteItemFunc,l=t.editItemFunc,c=this.state.rank,i=a.expenses,o=a.editor,u=a.idToEdit,s=i;return i.length>0&&c&&s.sort((function(e,t){return e.exchangeRates[e.currency].ask*e.value-t.exchangeRates[t.currency].ask*t.value})),o&&(s=i.filter((function(e){return e.id!==u}))),r.a.createElement("div",null,r.a.createElement("p",{className:"table-title"},"Exchanges Table"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",null,"n\xba"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"Method"),r.a.createElement("th",null,"Value"),r.a.createElement("th",null,"Currency"),r.a.createElement("th",null,"Rate"),r.a.createElement("th",null,"Value (BRL)"),r.a.createElement("th",null,"Currency default"),r.a.createElement("th",null,"Edit/Delete"))),r.a.createElement("tbody",{className:"table-body"},s.map((function(e,t){var a=e.id,c=e.description,i=e.tag,o=e.method,u=e.value,s=e.currency,m=e.exchangeRates,d=parseFloat(m[s].ask);return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t+1),r.a.createElement("td",null,c),r.a.createElement("td",null,"Food"===i&&r.a.createElement(N.a,null),"Health"===i&&r.a.createElement(D.a,null),"Transport"===i&&r.a.createElement(E.a,null),"Work"===i&&r.a.createElement(R.a,null),"Spare time"===i&&r.a.createElement(E.b,null)),r.a.createElement("td",null,o),r.a.createElement("td",null,parseFloat(u).toFixed(2)),r.a.createElement("td",null,m[s].name.split("/")[0]),r.a.createElement("td",null,Math.round(100*d)/100),r.a.createElement("td",null,Math.round(parseFloat(u)*d*100)/100),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(){return l(a)}},r.a.createElement(I.b,null)),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return n(a)}},r.a.createElement(I.a,null))))})))),r.a.createElement("button",{type:"button",className:"sort-btn",onClick:function(){e.setState({rank:!0})}},"Rank by value (BRL)"))}}]),a}(n.Component),M=Object(o.b)((function(e){return{wallet:e.wallet}}),(function(e){return{deleteItemFunc:function(t){return e({type:w,id:t})},editItemFunc:function(t){return e({type:C,id:t})}}}))(L),B=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).componentDidMount=function(){(0,e.props.getCurrencies)()},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(s.a)({},n,r))},e.handleSave=function(){var t=e.state,a=t.value,n=t.description,r=t.currency,l=t.method,c=t.tag,i=e.props,o=i.wallet,u=i.updateItemFunc,s=o.editor,m=o.idToEdit;if(s)u({id:m,value:a.toString(),description:n,currency:r,method:l,tag:c});else{var d=0===o.expenses.length?0:o.expenses[o.expenses.length-1].id+1;(0,e.props.saveExpensesFunc)({id:d,value:a.toString(),description:n,currency:r,method:l,tag:c})}e.setState({value:"",description:""})},e.state={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.wallet,t=e.currencies,a=e.editor,n=this.state,l=n.value,c=n.description;return r.a.createElement("div",null,r.a.createElement("form",{className:"wallet-form"},r.a.createElement("label",{htmlFor:"value"},"Value:",r.a.createElement("input",{className:"value",id:"value",name:"value",value:l,"data-testid":"value-input",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"description"},"Description:",r.a.createElement("input",{id:"description",name:"description",value:c,"data-testid":"description-input",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"currency"},"Currency:",r.a.createElement("select",{id:"currency",name:"currency","data-testid":"currency-input",onChange:this.handleChange},t.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("label",{htmlFor:"method"},"Method:",r.a.createElement("select",{id:"method",name:"method","data-testid":"method-input",onChange:this.handleChange},r.a.createElement("option",null,"Cash"),r.a.createElement("option",null,"Credit Card"),r.a.createElement("option",null,"Debit Card"))),r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{id:"tag",name:"tag","data-testid":"tag-input",onChange:this.handleChange},r.a.createElement("option",null,"Food"),r.a.createElement("option",null,"Spare time"),r.a.createElement("option",null,"Work"),r.a.createElement("option",null,"Transport"),r.a.createElement("option",null,"Health"))),r.a.createElement("button",{type:"button",onClick:this.handleSave},a?"Edit":"Add")))}}]),a}(n.Component),A=Object(o.b)((function(e){return{wallet:e.wallet}}),(function(e){return{getCurrencies:function(){return e(function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){var a,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:delete(a=e.sent).USDT,n=Object.values(a).map((function(e){return e.code})),t({type:y,currencies:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},saveExpensesFunc:function(t){return e((a=t,function(){var e=Object(v.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:delete(n=e.sent).USDT,a.exchangeRates=n,t(O(a));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var a},updateItemFunc:function(t){return e((a=t,console.log(a),{type:x,expense:a}));var a}}}))(B),_=(a(53),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement("hr",null),r.a.createElement(A,null),r.a.createElement(M,null))}}]),a}(r.a.Component)),W=_;a(54);var U=function(){return r.a.createElement("div",{className:"login-page"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0},r.a.createElement(F,null)),r.a.createElement(u.b,{path:"/carteira"},r.a.createElement(W,null))),r.a.createElement("footer",{className:"footer"},"by Larissa Menezes, 2022"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(15),P=a(4),$={email:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===g?Object(P.a)(Object(P.a)({},e),{},{email:t.email}):e},H=a(37),J={currencies:[],expenses:[],editor:!1,idToEdit:0},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(P.a)(Object(P.a)({},e),{},{currencies:t.currencies});case j:return Object(P.a)(Object(P.a)({},e),{},{expenses:[].concat(Object(H.a)(e.expenses),[t.expense])});case w:return Object(P.a)(Object(P.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});case C:return Object(P.a)(Object(P.a)({},e),{},{editor:!0,idToEdit:t.id});case x:return Object(P.a)(Object(P.a)({},e),{},{editor:!1,idToEdit:-1,expenses:e.expenses.map((function(e){return e.id===t.expense.id?Object(P.a)(Object(P.a)({},e),t.expense):e}))});default:return e}},G=Object(V.combineReducers)({user:z,wallet:Z}),X=a(15).applyMiddleware,q=(0,a(15).createStore)(G,(0,a(55).composeWithDevTools)(X(a(56).default)));window.Cypress&&(window.store=q);var K=q;c.a.render(r.a.createElement(i.a,null,r.a.createElement(o.a,{store:K},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.69827422.chunk.js.map