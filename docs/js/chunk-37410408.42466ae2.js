(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37410408"],{"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),i=r("species");t.exports=function(t){return!o((function(){var e=[],n=e.constructor={};return n[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var o=n("861d"),r=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"7d45":function(t,e,n){"use strict";var o=n("d514"),r=n.n(o);r.a},8418:function(t,e,n){"use strict";var o=n("c04e"),r=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=o(e);c in t?r.f(t,c,i(0,n)):t[c]=n}},a434:function(t,e,n){"use strict";var o=n("23e7"),r=n("23cb"),i=n("a691"),c=n("50c4"),s=n("7b0b"),u=n("65f0"),a=n("8418"),d=n("1dde"),f=Math.max,l=Math.min,v=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d("splice")},{splice:function(t,e){var n,o,d,m,h,k,y=s(this),_=c(y.length),w=r(t,_),b=arguments.length;if(0===b?n=o=0:1===b?(n=0,o=_-w):(n=b-2,o=l(f(i(e),0),_-w)),_+n-o>v)throw TypeError(p);for(d=u(y,o),m=0;m<o;m++)h=w+m,h in y&&a(d,m,y[h]);if(d.length=o,n<o){for(m=w;m<_-o;m++)h=m+o,k=m+n,h in y?y[k]=y[h]:delete y[k];for(m=_;m>_-o+n;m--)delete y[m-1]}else if(n>o)for(m=_-o;m>w;m--)h=m+o-1,k=m+n-1,h in y?y[k]=y[h]:delete y[k];for(m=0;m<n;m++)y[m+w]=arguments[m+2];return y.length=_-o+n,d}})},d514:function(t,e,n){},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},f378:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"methods"},[n("h1",[t._v("Methods & Events")]),t._m(0),n("section",{staticClass:"counter contain"},[n("h2",[t._v("Counter")]),n("button",{on:{click:function(e){return t.addClick()}}},[t._v("Cick counter")]),t._v(" "+t._s(t.clicks)+" ")]),n("section",{staticClass:"todo contain"},[n("h2",[t._v("To Do List:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newToDoItem,expression:"newToDoItem"}],attrs:{type:"text"},domProps:{value:t.newToDoItem},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addToDo()},input:function(e){e.target.composing||(t.newToDoItem=e.target.value)}}}),n("button",{on:{click:function(e){return t.addToDo()}}},[t._v("Add")]),n("ul",t._l(t.tasks,(function(e,o){return n("li",{key:e,on:{click:function(e){return t.removeToDo(o)}}},[t._v(" "+t._s(e)+" ")])})),0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" When you need to define more complex functionality in a component, you can use a "),n("code",[t._v("method")])])}],i=(n("a434"),{data:function(){return{clicks:0,newToDoItem:"",tasks:[]}},methods:{addClick:function(){this.clicks+=1},addToDo:function(){this.tasks.push(this.newToDoItem),this.newToDoItem=""},removeToDo:function(t){this.tasks.splice(t,1)}}}),c=i,s=(n("7d45"),n("2877")),u=Object(s["a"])(c,o,r,!1,null,"4e562e74",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-37410408.42466ae2.js.map