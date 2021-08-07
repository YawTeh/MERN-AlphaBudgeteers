(this["webpackJsonpreact-expense-tracker"]=this["webpackJsonpreact-expense-tracker"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(19),s=n.n(c),o=n(0),i=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Expense Tracker"})})},u=n(4),j=n.n(u),l=n(8),d=n(6),p=n(20),b=n(3),O=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:t.payload});default:return e}},x=n(9),h=n.n(x),f={transactions:[],error:null,loading:!0},m=Object(r.createContext)(f),v=function(e){var t=e.children,n=Object(r.useReducer)(O,f),a=Object(d.a)(n,2),c=a[0],s=a[1];function i(){return(i=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("/api/v1/transactions");case 3:t=e.sent,s({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function u(){return(u=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.delete("/api/v1/transactions/".concat(t));case 3:s({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json"}},e.prev=1,e.next=4,h.a.post("/api/v1/transactions",t,n);case 4:r=e.sent,s({type:"ADD_TRANSACTION",payload:r.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(o.jsx)(m.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return i.apply(this,arguments)},deleteTransaction:function(e){return u.apply(this,arguments)},addTransaction:function(e){return p.apply(this,arguments)}},children:t})};function T(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var y=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h4",{children:"Your Balance"}),Object(o.jsxs)("h1",{children:["$",T(e)]})]})},N=function(){var e=Object(r.useContext)(m).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(o.jsxs)("div",{className:"inc-exp-container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Income"}),Object(o.jsxs)("p",{className:"money plus",children:["$",T(t)]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h4",{children:"Expense"}),Object(o.jsxs)("p",{className:"money minus",children:["$",T(n)]})]})]})},A=function(e){var t=e.transaction,n=Object(r.useContext)(m).deleteTransaction,a=t.amount<0?"-":"+";return Object(o.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text," ",Object(o.jsxs)("span",{children:[a,"$",T(Math.abs(t.amount))]}),Object(o.jsx)("button",{className:"delete-btn",onClick:function(){return n(t._id)},children:"x"})]})},R=function(){var e=Object(r.useContext)(m),t=e.transactions,n=e.getTransactions;return Object(r.useEffect)((function(){n()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:"History"}),Object(o.jsx)("ul",{className:"list",children:t.map((function(e){return Object(o.jsx)(A,{transaction:e},e.id)}))})]})},C=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(0),s=Object(d.a)(c,2),i=s[0],u=s[1],j=Object(r.useContext)(m).addTransaction;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Add new transaction"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};j(t)},children:[Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"text",children:"Text"}),Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter text..."})]}),Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(o.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(o.jsx)("input",{type:"number",value:i,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(o.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};n(45);var E=function(){return Object(o.jsxs)(v,{children:[Object(o.jsx)(i,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(y,{}),Object(o.jsx)(N,{}),Object(o.jsx)(R,{}),Object(o.jsx)(C,{})]})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a092d6bb.chunk.js.map