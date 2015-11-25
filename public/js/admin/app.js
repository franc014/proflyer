(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

},{}],2:[function(require,module,exports){
/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */

(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory();
    } else {
        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
        root.rangy = factory();
    }
})(function() {

    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
        "commonAncestorContainer"];

    // Minimal set of methods required for DOM Level 2 Range compliance
    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

    // Subset of TextRange's full set of methods that we're interested in
    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
        "setEndPoint", "getBoundingClientRect"];

    /*----------------------------------------------------------------------------------------------------------------*/

    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod(o, p) {
        var t = typeof o[p];
        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
    }

    function isHostObject(o, p) {
        return !!(typeof o[p] == OBJECT && o[p]);
    }

    function isHostProperty(o, p) {
        return typeof o[p] != UNDEFINED;
    }

    // Creates a convenience function to save verbose repeated calls to tests functions
    function createMultiplePropertyTest(testFunc) {
        return function(o, props) {
            var i = props.length;
            while (i--) {
                if (!testFunc(o, props[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
    var areHostMethods = createMultiplePropertyTest(isHostMethod);
    var areHostObjects = createMultiplePropertyTest(isHostObject);
    var areHostProperties = createMultiplePropertyTest(isHostProperty);

    function isTextRange(range) {
        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
    }

    function getBody(doc) {
        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
    }

    var forEach = [].forEach ?
        function(arr, func) {
            arr.forEach(func);
        } :
        function(arr, func) {
            for (var i = 0, len = arr.length; i < len; ++i) {
                func(arr[i], i);
            }
        };

    var modules = {};

    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

    var util = {
        isHostMethod: isHostMethod,
        isHostObject: isHostObject,
        isHostProperty: isHostProperty,
        areHostMethods: areHostMethods,
        areHostObjects: areHostObjects,
        areHostProperties: areHostProperties,
        isTextRange: isTextRange,
        getBody: getBody,
        forEach: forEach
    };

    var api = {
        version: "1.3.0",
        initialized: false,
        isBrowser: isBrowser,
        supported: true,
        util: util,
        features: {},
        modules: modules,
        config: {
            alertOnFail: false,
            alertOnWarn: false,
            preferTextRange: false,
            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
        }
    };

    function consoleLog(msg) {
        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
            console.log(msg);
        }
    }

    function alertOrLog(msg, shouldAlert) {
        if (isBrowser && shouldAlert) {
            alert(msg);
        } else  {
            consoleLog(msg);
        }
    }

    function fail(reason) {
        api.initialized = true;
        api.supported = false;
        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
    }

    api.fail = fail;

    function warn(msg) {
        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
    }

    api.warn = warn;

    // Add utility extend() method
    var extend;
    if ({}.hasOwnProperty) {
        util.extend = extend = function(obj, props, deep) {
            var o, p;
            for (var i in props) {
                if (props.hasOwnProperty(i)) {
                    o = obj[i];
                    p = props[i];
                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
                        extend(o, p, true);
                    }
                    obj[i] = p;
                }
            }
            // Special case for toString, which does not show up in for...in loops in IE <= 8
            if (props.hasOwnProperty("toString")) {
                obj.toString = props.toString;
            }
            return obj;
        };

        util.createOptions = function(optionsParam, defaults) {
            var options = {};
            extend(options, defaults);
            if (optionsParam) {
                extend(options, optionsParam);
            }
            return options;
        };
    } else {
        fail("hasOwnProperty not supported");
    }

    // Test whether we're in a browser and bail out if not
    if (!isBrowser) {
        fail("Rangy can only run in a browser");
    }

    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
    (function() {
        var toArray;

        if (isBrowser) {
            var el = document.createElement("div");
            el.appendChild(document.createElement("span"));
            var slice = [].slice;
            try {
                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
                    toArray = function(arrayLike) {
                        return slice.call(arrayLike, 0);
                    };
                }
            } catch (e) {}
        }

        if (!toArray) {
            toArray = function(arrayLike) {
                var arr = [];
                for (var i = 0, len = arrayLike.length; i < len; ++i) {
                    arr[i] = arrayLike[i];
                }
                return arr;
            };
        }

        util.toArray = toArray;
    })();

    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
    // normalization of event properties
    var addListener;
    if (isBrowser) {
        if (isHostMethod(document, "addEventListener")) {
            addListener = function(obj, eventType, listener) {
                obj.addEventListener(eventType, listener, false);
            };
        } else if (isHostMethod(document, "attachEvent")) {
            addListener = function(obj, eventType, listener) {
                obj.attachEvent("on" + eventType, listener);
            };
        } else {
            fail("Document does not have required addEventListener or attachEvent method");
        }

        util.addListener = addListener;
    }

    var initListeners = [];

    function getErrorDesc(ex) {
        return ex.message || ex.description || String(ex);
    }

    // Initialization
    function init() {
        if (!isBrowser || api.initialized) {
            return;
        }
        var testRange;
        var implementsDomRange = false, implementsTextRange = false;

        // First, perform basic feature tests

        if (isHostMethod(document, "createRange")) {
            testRange = document.createRange();
            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
                implementsDomRange = true;
            }
        }

        var body = getBody(document);
        if (!body || body.nodeName.toLowerCase() != "body") {
            fail("No body element found");
            return;
        }

        if (body && isHostMethod(body, "createTextRange")) {
            testRange = body.createTextRange();
            if (isTextRange(testRange)) {
                implementsTextRange = true;
            }
        }

        if (!implementsDomRange && !implementsTextRange) {
            fail("Neither Range nor TextRange are available");
            return;
        }

        api.initialized = true;
        api.features = {
            implementsDomRange: implementsDomRange,
            implementsTextRange: implementsTextRange
        };

        // Initialize modules
        var module, errorMessage;
        for (var moduleName in modules) {
            if ( (module = modules[moduleName]) instanceof Module ) {
                module.init(module, api);
            }
        }

        // Call init listeners
        for (var i = 0, len = initListeners.length; i < len; ++i) {
            try {
                initListeners[i](api);
            } catch (ex) {
                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
                consoleLog(errorMessage);
            }
        }
    }

    function deprecationNotice(deprecated, replacement, module) {
        if (module) {
            deprecated += " in module " + module.name;
        }
        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
        replacement + " instead.");
    }

    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
        owner[deprecated] = function() {
            deprecationNotice(deprecated, replacement, module);
            return owner[replacement].apply(owner, util.toArray(arguments));
        };
    }

    util.deprecationNotice = deprecationNotice;
    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
    api.init = init;

    // Execute listener immediately if already initialized
    api.addInitListener = function(listener) {
        if (api.initialized) {
            listener(api);
        } else {
            initListeners.push(listener);
        }
    };

    var shimListeners = [];

    api.addShimListener = function(listener) {
        shimListeners.push(listener);
    };

    function shim(win) {
        win = win || window;
        init();

        // Notify listeners
        for (var i = 0, len = shimListeners.length; i < len; ++i) {
            shimListeners[i](win);
        }
    }

    if (isBrowser) {
        api.shim = api.createMissingNativeApi = shim;
        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
    }

    function Module(name, dependencies, initializer) {
        this.name = name;
        this.dependencies = dependencies;
        this.initialized = false;
        this.supported = false;
        this.initializer = initializer;
    }

    Module.prototype = {
        init: function() {
            var requiredModuleNames = this.dependencies || [];
            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
                moduleName = requiredModuleNames[i];

                requiredModule = modules[moduleName];
                if (!requiredModule || !(requiredModule instanceof Module)) {
                    throw new Error("required module '" + moduleName + "' not found");
                }

                requiredModule.init();

                if (!requiredModule.supported) {
                    throw new Error("required module '" + moduleName + "' not supported");
                }
            }

            // Now run initializer
            this.initializer(this);
        },

        fail: function(reason) {
            this.initialized = true;
            this.supported = false;
            throw new Error(reason);
        },

        warn: function(msg) {
            api.warn("Module " + this.name + ": " + msg);
        },

        deprecationNotice: function(deprecated, replacement) {
            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
                replacement + " instead");
        },

        createError: function(msg) {
            return new Error("Error in Rangy " + this.name + " module: " + msg);
        }
    };

    function createModule(name, dependencies, initFunc) {
        var newModule = new Module(name, dependencies, function(module) {
            if (!module.initialized) {
                module.initialized = true;
                try {
                    initFunc(api, module);
                    module.supported = true;
                } catch (ex) {
                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
                    consoleLog(errorMessage);
                    if (ex.stack) {
                        consoleLog(ex.stack);
                    }
                }
            }
        });
        modules[name] = newModule;
        return newModule;
    }

    api.createModule = function(name) {
        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
        var initFunc, dependencies;
        if (arguments.length == 2) {
            initFunc = arguments[1];
            dependencies = [];
        } else {
            initFunc = arguments[2];
            dependencies = arguments[1];
        }

        var module = createModule(name, dependencies, initFunc);

        // Initialize the module immediately if the core is already initialized
        if (api.initialized && api.supported) {
            module.init();
        }
    };

    api.createCoreModule = function(name, dependencies, initFunc) {
        createModule(name, dependencies, initFunc);
    };

    /*----------------------------------------------------------------------------------------------------------------*/

    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

    function RangePrototype() {}
    api.RangePrototype = RangePrototype;
    api.rangePrototype = new RangePrototype();

    function SelectionPrototype() {}
    api.selectionPrototype = new SelectionPrototype();

    /*----------------------------------------------------------------------------------------------------------------*/

    // DOM utility methods used by Rangy
    api.createCoreModule("DomUtil", [], function(api, module) {
        var UNDEF = "undefined";
        var util = api.util;
        var getBody = util.getBody;

        // Perform feature tests
        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
            module.fail("document missing a Node creation method");
        }

        if (!util.isHostMethod(document, "getElementsByTagName")) {
            module.fail("document missing getElementsByTagName method");
        }

        var el = document.createElement("div");
        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
            module.fail("Incomplete Element implementation");
        }

        // innerHTML is required for Range's createContextualFragment method
        if (!util.isHostProperty(el, "innerHTML")) {
            module.fail("Element is missing innerHTML property");
        }

        var textNode = document.createTextNode("test");
        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
                !util.areHostProperties(textNode, ["data"]))) {
            module.fail("Incomplete Text Node implementation");
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
        // contains just the document as a single element and the value searched for is the document.
        var arrayContains = /*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/

            function(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === val) {
                        return true;
                    }
                }
                return false;
            };

        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
        function isHtmlNamespace(node) {
            var ns;
            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
        }

        function parentElement(node) {
            var parent = node.parentNode;
            return (parent.nodeType == 1) ? parent : null;
        }

        function getNodeIndex(node) {
            var i = 0;
            while( (node = node.previousSibling) ) {
                ++i;
            }
            return i;
        }

        function getNodeLength(node) {
            switch (node.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return node.length;
                default:
                    return node.childNodes.length;
            }
        }

        function getCommonAncestor(node1, node2) {
            var ancestors = [], n;
            for (n = node1; n; n = n.parentNode) {
                ancestors.push(n);
            }

            for (n = node2; n; n = n.parentNode) {
                if (arrayContains(ancestors, n)) {
                    return n;
                }
            }

            return null;
        }

        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
            var n = selfIsAncestor ? descendant : descendant.parentNode;
            while (n) {
                if (n === ancestor) {
                    return true;
                } else {
                    n = n.parentNode;
                }
            }
            return false;
        }

        function isOrIsAncestorOf(ancestor, descendant) {
            return isAncestorOf(ancestor, descendant, true);
        }

        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
            var p, n = selfIsAncestor ? node : node.parentNode;
            while (n) {
                p = n.parentNode;
                if (p === ancestor) {
                    return n;
                }
                n = p;
            }
            return null;
        }

        function isCharacterDataNode(node) {
            var t = node.nodeType;
            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
        }

        function isTextOrCommentNode(node) {
            if (!node) {
                return false;
            }
            var t = node.nodeType;
            return t == 3 || t == 8 ; // Text or Comment
        }

        function insertAfter(node, precedingNode) {
            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
            if (nextNode) {
                parent.insertBefore(node, nextNode);
            } else {
                parent.appendChild(node);
            }
            return node;
        }

        // Note that we cannot use splitText() because it is bugridden in IE 9.
        function splitDataNode(node, index, positionsToPreserve) {
            var newNode = node.cloneNode(false);
            newNode.deleteData(0, index);
            node.deleteData(index, node.length - index);
            insertAfter(newNode, node);

            // Preserve positions
            if (positionsToPreserve) {
                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
                    // Handle case where position was inside the portion of node after the split point
                    if (position.node == node && position.offset > index) {
                        position.node = newNode;
                        position.offset -= index;
                    }
                    // Handle the case where the position is a node offset within node's parent
                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
                        ++position.offset;
                    }
                }
            }
            return newNode;
        }

        function getDocument(node) {
            if (node.nodeType == 9) {
                return node;
            } else if (typeof node.ownerDocument != UNDEF) {
                return node.ownerDocument;
            } else if (typeof node.document != UNDEF) {
                return node.document;
            } else if (node.parentNode) {
                return getDocument(node.parentNode);
            } else {
                throw module.createError("getDocument: no document found for node");
            }
        }

        function getWindow(node) {
            var doc = getDocument(node);
            if (typeof doc.defaultView != UNDEF) {
                return doc.defaultView;
            } else if (typeof doc.parentWindow != UNDEF) {
                return doc.parentWindow;
            } else {
                throw module.createError("Cannot get a window object for node");
            }
        }

        function getIframeDocument(iframeEl) {
            if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument;
            } else if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow.document;
            } else {
                throw module.createError("getIframeDocument: No Document object found for iframe element");
            }
        }

        function getIframeWindow(iframeEl) {
            if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow;
            } else if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument.defaultView;
            } else {
                throw module.createError("getIframeWindow: No Window object found for iframe element");
            }
        }

        // This looks bad. Is it worth it?
        function isWindow(obj) {
            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
        }

        function getContentDocument(obj, module, methodName) {
            var doc;

            if (!obj) {
                doc = document;
            }

            // Test if a DOM node has been passed and obtain a document object for it if so
            else if (util.isHostProperty(obj, "nodeType")) {
                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
                    getIframeDocument(obj) : getDocument(obj);
            }

            // Test if the doc parameter appears to be a Window object
            else if (isWindow(obj)) {
                doc = obj.document;
            }

            if (!doc) {
                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
            }

            return doc;
        }

        function getRootContainer(node) {
            var parent;
            while ( (parent = node.parentNode) ) {
                node = parent;
            }
            return node;
        }

        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
            var nodeC, root, childA, childB, n;
            if (nodeA == nodeB) {
                // Case 1: nodes are the same
                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
                // Case 2: node C (container B or an ancestor) is a child node of A
                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
                // Case 3: node C (container A or an ancestor) is a child node of B
                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
            } else {
                root = getCommonAncestor(nodeA, nodeB);
                if (!root) {
                    throw new Error("comparePoints error: nodes have no common ancestor");
                }

                // Case 4: containers are siblings or descendants of siblings
                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

                if (childA === childB) {
                    // This shouldn't be possible
                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
                } else {
                    n = root.firstChild;
                    while (n) {
                        if (n === childA) {
                            return -1;
                        } else if (n === childB) {
                            return 1;
                        }
                        n = n.nextSibling;
                    }
                }
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
        var crashyTextNodes = false;

        function isBrokenNode(node) {
            var n;
            try {
                n = node.parentNode;
                return false;
            } catch (e) {
                return true;
            }
        }

        (function() {
            var el = document.createElement("b");
            el.innerHTML = "1";
            var textNode = el.firstChild;
            el.innerHTML = "<br />";
            crashyTextNodes = isBrokenNode(textNode);

            api.features.crashyTextNodes = crashyTextNodes;
        })();

        /*----------------------------------------------------------------------------------------------------------------*/

        function inspectNode(node) {
            if (!node) {
                return "[No node]";
            }
            if (crashyTextNodes && isBrokenNode(node)) {
                return "[Broken node]";
            }
            if (isCharacterDataNode(node)) {
                return '"' + node.data + '"';
            }
            if (node.nodeType == 1) {
                var idAttr = node.id ? ' id="' + node.id + '"' : "";
                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
            }
            return node.nodeName;
        }

        function fragmentFromNodeChildren(node) {
            var fragment = getDocument(node).createDocumentFragment(), child;
            while ( (child = node.firstChild) ) {
                fragment.appendChild(child);
            }
            return fragment;
        }

        var getComputedStyleProperty;
        if (typeof window.getComputedStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return getWindow(el).getComputedStyle(el, null)[propName];
            };
        } else if (typeof document.documentElement.currentStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return el.currentStyle ? el.currentStyle[propName] : "";
            };
        } else {
            module.fail("No means of obtaining computed style properties found");
        }

        function createTestElement(doc, html, contentEditable) {
            var body = getBody(doc);
            var el = doc.createElement("div");
            el.contentEditable = "" + !!contentEditable;
            if (html) {
                el.innerHTML = html;
            }

            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
            var bodyFirstChild = body.firstChild;
            if (bodyFirstChild) {
                body.insertBefore(el, bodyFirstChild);
            } else {
                body.appendChild(el);
            }

            return el;
        }

        function removeNode(node) {
            return node.parentNode.removeChild(node);
        }

        function NodeIterator(root) {
            this.root = root;
            this._next = root;
        }

        NodeIterator.prototype = {
            _current: null,

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                var n = this._current = this._next;
                var child, next;
                if (this._current) {
                    child = n.firstChild;
                    if (child) {
                        this._next = child;
                    } else {
                        next = null;
                        while ((n !== this.root) && !(next = n.nextSibling)) {
                            n = n.parentNode;
                        }
                        this._next = next;
                    }
                }
                return this._current;
            },

            detach: function() {
                this._current = this._next = this.root = null;
            }
        };

        function createIterator(root) {
            return new NodeIterator(root);
        }

        function DomPosition(node, offset) {
            this.node = node;
            this.offset = offset;
        }

        DomPosition.prototype = {
            equals: function(pos) {
                return !!pos && this.node === pos.node && this.offset == pos.offset;
            },

            inspect: function() {
                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
            },

            toString: function() {
                return this.inspect();
            }
        };

        function DOMException(codeName) {
            this.code = this[codeName];
            this.codeName = codeName;
            this.message = "DOMException: " + this.codeName;
        }

        DOMException.prototype = {
            INDEX_SIZE_ERR: 1,
            HIERARCHY_REQUEST_ERR: 3,
            WRONG_DOCUMENT_ERR: 4,
            NO_MODIFICATION_ALLOWED_ERR: 7,
            NOT_FOUND_ERR: 8,
            NOT_SUPPORTED_ERR: 9,
            INVALID_STATE_ERR: 11,
            INVALID_NODE_TYPE_ERR: 24
        };

        DOMException.prototype.toString = function() {
            return this.message;
        };

        api.dom = {
            arrayContains: arrayContains,
            isHtmlNamespace: isHtmlNamespace,
            parentElement: parentElement,
            getNodeIndex: getNodeIndex,
            getNodeLength: getNodeLength,
            getCommonAncestor: getCommonAncestor,
            isAncestorOf: isAncestorOf,
            isOrIsAncestorOf: isOrIsAncestorOf,
            getClosestAncestorIn: getClosestAncestorIn,
            isCharacterDataNode: isCharacterDataNode,
            isTextOrCommentNode: isTextOrCommentNode,
            insertAfter: insertAfter,
            splitDataNode: splitDataNode,
            getDocument: getDocument,
            getWindow: getWindow,
            getIframeWindow: getIframeWindow,
            getIframeDocument: getIframeDocument,
            getBody: getBody,
            isWindow: isWindow,
            getContentDocument: getContentDocument,
            getRootContainer: getRootContainer,
            comparePoints: comparePoints,
            isBrokenNode: isBrokenNode,
            inspectNode: inspectNode,
            getComputedStyleProperty: getComputedStyleProperty,
            createTestElement: createTestElement,
            removeNode: removeNode,
            fragmentFromNodeChildren: fragmentFromNodeChildren,
            createIterator: createIterator,
            DomPosition: DomPosition
        };

        api.DOMException = DOMException;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Pure JavaScript implementation of DOM Range
    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DOMException = api.DOMException;

        var isCharacterDataNode = dom.isCharacterDataNode;
        var getNodeIndex = dom.getNodeIndex;
        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
        var getDocument = dom.getDocument;
        var comparePoints = dom.comparePoints;
        var splitDataNode = dom.splitDataNode;
        var getClosestAncestorIn = dom.getClosestAncestorIn;
        var getNodeLength = dom.getNodeLength;
        var arrayContains = dom.arrayContains;
        var getRootContainer = dom.getRootContainer;
        var crashyTextNodes = api.features.crashyTextNodes;

        var removeNode = dom.removeNode;

        /*----------------------------------------------------------------------------------------------------------------*/

        // Utility functions

        function isNonTextPartiallySelected(node, range) {
            return (node.nodeType != 3) &&
                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
        }

        function getRangeDocument(range) {
            return range.document || getDocument(range.startContainer);
        }

        function getRangeRoot(range) {
            return getRootContainer(range.startContainer);
        }

        function getBoundaryBeforeNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node));
        }

        function getBoundaryAfterNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
        }

        function insertNodeAtPosition(node, n, o) {
            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
            if (isCharacterDataNode(n)) {
                if (o == n.length) {
                    dom.insertAfter(node, n);
                } else {
                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
                }
            } else if (o >= n.childNodes.length) {
                n.appendChild(node);
            } else {
                n.insertBefore(node, n.childNodes[o]);
            }
            return firstNodeInserted;
        }

        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
            assertRangeValid(rangeA);
            assertRangeValid(rangeB);

            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }

            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
        }

        function cloneSubtree(iterator) {
            var partiallySelected;
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
                partiallySelected = iterator.isPartiallySelectedSubtree();
                node = node.cloneNode(!partiallySelected);
                if (partiallySelected) {
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(cloneSubtree(subIterator));
                    subIterator.detach();
                }

                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function iterateSubtree(rangeIterator, func, iteratorState) {
            var it, n;
            iteratorState = iteratorState || { stop: false };
            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
                if (rangeIterator.isPartiallySelectedSubtree()) {
                    if (func(node) === false) {
                        iteratorState.stop = true;
                        return;
                    } else {
                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
                        // the node selected by the Range.
                        subRangeIterator = rangeIterator.getSubtreeIterator();
                        iterateSubtree(subRangeIterator, func, iteratorState);
                        subRangeIterator.detach();
                        if (iteratorState.stop) {
                            return;
                        }
                    }
                } else {
                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
                    // descendants
                    it = dom.createIterator(node);
                    while ( (n = it.next()) ) {
                        if (func(n) === false) {
                            iteratorState.stop = true;
                            return;
                        }
                    }
                }
            }
        }

        function deleteSubtree(iterator) {
            var subIterator;
            while (iterator.next()) {
                if (iterator.isPartiallySelectedSubtree()) {
                    subIterator = iterator.getSubtreeIterator();
                    deleteSubtree(subIterator);
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
            }
        }

        function extractSubtree(iterator) {
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

                if (iterator.isPartiallySelectedSubtree()) {
                    node = node.cloneNode(false);
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(extractSubtree(subIterator));
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function getNodesInRange(range, nodeTypes, filter) {
            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
            var filterExists = !!filter;
            if (filterNodeTypes) {
                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
            }

            var nodes = [];
            iterateSubtree(new RangeIterator(range, false), function(node) {
                if (filterNodeTypes && !regex.test(node.nodeType)) {
                    return;
                }
                if (filterExists && !filter(node)) {
                    return;
                }
                // Don't include a boundary container if it is a character data node and the range does not contain any
                // of its character data. See issue 190.
                var sc = range.startContainer;
                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
                    return;
                }

                var ec = range.endContainer;
                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
                    return;
                }

                nodes.push(node);
            });
            return nodes;
        }

        function inspect(range) {
            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

        function RangeIterator(range, clonePartiallySelectedTextNodes) {
            this.range = range;
            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


            if (!range.collapsed) {
                this.sc = range.startContainer;
                this.so = range.startOffset;
                this.ec = range.endContainer;
                this.eo = range.endOffset;
                var root = range.commonAncestorContainer;

                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
                    this.isSingleCharacterDataNode = true;
                    this._first = this._last = this._next = this.sc;
                } else {
                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
                }
            }
        }

        RangeIterator.prototype = {
            _current: null,
            _next: null,
            _first: null,
            _last: null,
            isSingleCharacterDataNode: false,

            reset: function() {
                this._current = null;
                this._next = this._first;
            },

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                // Move to next node
                var current = this._current = this._next;
                if (current) {
                    this._next = (current !== this._last) ? current.nextSibling : null;

                    // Check for partially selected text nodes
                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
                        if (current === this.ec) {
                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
                        }
                        if (this._current === this.sc) {
                            (current = current.cloneNode(true)).deleteData(0, this.so);
                        }
                    }
                }

                return current;
            },

            remove: function() {
                var current = this._current, start, end;

                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
                    start = (current === this.sc) ? this.so : 0;
                    end = (current === this.ec) ? this.eo : current.length;
                    if (start != end) {
                        current.deleteData(start, end - start);
                    }
                } else {
                    if (current.parentNode) {
                        removeNode(current);
                    } else {
                    }
                }
            },

            // Checks if the current node is partially selected
            isPartiallySelectedSubtree: function() {
                var current = this._current;
                return isNonTextPartiallySelected(current, this.range);
            },

            getSubtreeIterator: function() {
                var subRange;
                if (this.isSingleCharacterDataNode) {
                    subRange = this.range.cloneRange();
                    subRange.collapse(false);
                } else {
                    subRange = new Range(getRangeDocument(this.range));
                    var current = this._current;
                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

                    if (isOrIsAncestorOf(current, this.sc)) {
                        startContainer = this.sc;
                        startOffset = this.so;
                    }
                    if (isOrIsAncestorOf(current, this.ec)) {
                        endContainer = this.ec;
                        endOffset = this.eo;
                    }

                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
                }
                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
            },

            detach: function() {
                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
            }
        };

        /*----------------------------------------------------------------------------------------------------------------*/

        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
        var rootContainerNodeTypes = [2, 9, 11];
        var readonlyNodeTypes = [5, 6, 10, 12];
        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

        function createAncestorFinder(nodeTypes) {
            return function(node, selfIsAncestor) {
                var t, n = selfIsAncestor ? node : node.parentNode;
                while (n) {
                    t = n.nodeType;
                    if (arrayContains(nodeTypes, t)) {
                        return n;
                    }
                    n = n.parentNode;
                }
                return null;
            };
        }

        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidNodeType(node, invalidTypes) {
            if (!arrayContains(invalidTypes, node.nodeType)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidOffset(node, offset) {
            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
                throw new DOMException("INDEX_SIZE_ERR");
            }
        }

        function assertSameDocumentOrFragment(node1, node2) {
            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        function assertNodeNotReadOnly(node) {
            if (getReadonlyAncestor(node, true)) {
                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
            }
        }

        function assertNode(node, codeName) {
            if (!node) {
                throw new DOMException(codeName);
            }
        }

        function isValidOffset(node, offset) {
            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
        }

        function isRangeValid(range) {
            return (!!range.startContainer && !!range.endContainer &&
                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
                    isValidOffset(range.startContainer, range.startOffset) &&
                    isValidOffset(range.endContainer, range.endOffset));
        }

        function assertRangeValid(range) {
            if (!isRangeValid(range)) {
                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test the browser's innerHTML support to decide how to implement createContextualFragment
        var styleEl = document.createElement("style");
        var htmlParsingConforms = false;
        try {
            styleEl.innerHTML = "<b>x</b>";
            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
        } catch (e) {
            // IE 6 and 7 throw
        }

        api.features.htmlParsingConforms = htmlParsingConforms;

        var createContextualFragment = htmlParsingConforms ?

            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
            // discussion and base code for this implementation at issue 67.
            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
            // Thanks to Aleks Williams.
            function(fragmentStr) {
                // "Let node the context object's start's node."
                var node = this.startContainer;
                var doc = getDocument(node);

                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
                // exception and abort these steps."
                if (!node) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // "Let element be as follows, depending on node's interface:"
                // Document, Document Fragment: null
                var el = null;

                // "Element: node"
                if (node.nodeType == 1) {
                    el = node;

                // "Text, Comment: node's parentElement"
                } else if (isCharacterDataNode(node)) {
                    el = dom.parentElement(node);
                }

                // "If either element is null or element's ownerDocument is an HTML document
                // and element's local name is "html" and element's namespace is the HTML
                // namespace"
                if (el === null || (
                    el.nodeName == "HTML" &&
                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
                    dom.isHtmlNamespace(el)
                )) {

                // "let element be a new Element with "body" as its local name and the HTML
                // namespace as its namespace.""
                    el = doc.createElement("body");
                } else {
                    el = el.cloneNode(false);
                }

                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
                // "In either case, the algorithm must be invoked with fragment as the input
                // and element as the context element."
                el.innerHTML = fragmentStr;

                // "If this raises an exception, then abort these steps. Otherwise, let new
                // children be the nodes returned."

                // "Let fragment be a new DocumentFragment."
                // "Append all new children to fragment."
                // "Return fragment."
                return dom.fragmentFromNodeChildren(el);
            } :

            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
            // previous versions of Rangy used (with the exception of using a body element rather than a div)
            function(fragmentStr) {
                var doc = getRangeDocument(this);
                var el = doc.createElement("body");
                el.innerHTML = fragmentStr;

                return dom.fragmentFromNodeChildren(el);
            };

        function splitRangeBoundaries(range, positionsToPreserve) {
            assertRangeValid(range);

            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
            var startEndSame = (sc === ec);

            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
                splitDataNode(ec, eo, positionsToPreserve);
            }

            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
                sc = splitDataNode(sc, so, positionsToPreserve);
                if (startEndSame) {
                    eo -= so;
                    ec = sc;
                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
                    eo++;
                }
                so = 0;
            }
            range.setStartAndEnd(sc, so, ec, eo);
        }

        function rangeToHtml(range) {
            assertRangeValid(range);
            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
            container.appendChild( range.cloneContents() );
            return container.innerHTML;
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
            "commonAncestorContainer"];

        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

        util.extend(api.rangePrototype, {
            compareBoundaryPoints: function(how, range) {
                assertRangeValid(this);
                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

                var nodeA, offsetA, nodeB, offsetB;
                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
                nodeA = this[prefixA + "Container"];
                offsetA = this[prefixA + "Offset"];
                nodeB = range[prefixB + "Container"];
                offsetB = range[prefixB + "Offset"];
                return comparePoints(nodeA, offsetA, nodeB, offsetB);
            },

            insertNode: function(node) {
                assertRangeValid(this);
                assertValidNodeType(node, insertableNodeTypes);
                assertNodeNotReadOnly(this.startContainer);

                if (isOrIsAncestorOf(node, this.startContainer)) {
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }

                // No check for whether the container of the start of the Range is of a type that does not allow
                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
                // to add the node

                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
                this.setStartBefore(firstNodeInserted);
            },

            cloneContents: function() {
                assertRangeValid(this);

                var clone, frag;
                if (this.collapsed) {
                    return getRangeDocument(this).createDocumentFragment();
                } else {
                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
                        clone = this.startContainer.cloneNode(true);
                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
                        frag = getRangeDocument(this).createDocumentFragment();
                        frag.appendChild(clone);
                        return frag;
                    } else {
                        var iterator = new RangeIterator(this, true);
                        clone = cloneSubtree(iterator);
                        iterator.detach();
                    }
                    return clone;
                }
            },

            canSurroundContents: function() {
                assertRangeValid(this);
                assertNodeNotReadOnly(this.startContainer);
                assertNodeNotReadOnly(this.endContainer);

                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                // no non-text nodes.
                var iterator = new RangeIterator(this, true);
                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                iterator.detach();
                return !boundariesInvalid;
            },

            surroundContents: function(node) {
                assertValidNodeType(node, surroundNodeTypes);

                if (!this.canSurroundContents()) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // Extract the contents
                var content = this.extractContents();

                // Clear the children of the node
                if (node.hasChildNodes()) {
                    while (node.lastChild) {
                        node.removeChild(node.lastChild);
                    }
                }

                // Insert the new node and add the extracted contents
                insertNodeAtPosition(node, this.startContainer, this.startOffset);
                node.appendChild(content);

                this.selectNode(node);
            },

            cloneRange: function() {
                assertRangeValid(this);
                var range = new Range(getRangeDocument(this));
                var i = rangeProperties.length, prop;
                while (i--) {
                    prop = rangeProperties[i];
                    range[prop] = this[prop];
                }
                return range;
            },

            toString: function() {
                assertRangeValid(this);
                var sc = this.startContainer;
                if (sc === this.endContainer && isCharacterDataNode(sc)) {
                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
                } else {
                    var textParts = [], iterator = new RangeIterator(this, true);
                    iterateSubtree(iterator, function(node) {
                        // Accept only text or CDATA nodes, not comments
                        if (node.nodeType == 3 || node.nodeType == 4) {
                            textParts.push(node.data);
                        }
                    });
                    iterator.detach();
                    return textParts.join("");
                }
            },

            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
            // been removed from Mozilla.

            compareNode: function(node) {
                assertRangeValid(this);

                var parent = node.parentNode;
                var nodeIndex = getNodeIndex(node);

                if (!parent) {
                    throw new DOMException("NOT_FOUND_ERR");
                }

                var startComparison = this.comparePoint(parent, nodeIndex),
                    endComparison = this.comparePoint(parent, nodeIndex + 1);

                if (startComparison < 0) { // Node starts before
                    return (endComparison > 0) ? n_b_a : n_b;
                } else {
                    return (endComparison > 0) ? n_a : n_i;
                }
            },

            comparePoint: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
                    return -1;
                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
                    return 1;
                }
                return 0;
            },

            createContextualFragment: createContextualFragment,

            toHtml: function() {
                return rangeToHtml(this);
            },

            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
            intersectsNode: function(node, touchingIsIntersecting) {
                assertRangeValid(this);
                if (getRootContainer(node) != getRangeRoot(this)) {
                    return false;
                }

                var parent = node.parentNode, offset = getNodeIndex(node);
                if (!parent) {
                    return true;
                }

                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
            },

            isPointInRange: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
            },

            // The methods below are non-standard and invented by me.

            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
            intersectsRange: function(range) {
                return rangesIntersect(this, range, false);
            },

            // Sharing a boundary start-to-end or end-to-start does count as intersection.
            intersectsOrTouchesRange: function(range) {
                return rangesIntersect(this, range, true);
            },

            intersection: function(range) {
                if (this.intersectsRange(range)) {
                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

                    var intersectionRange = this.cloneRange();
                    if (startComparison == -1) {
                        intersectionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (endComparison == 1) {
                        intersectionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return intersectionRange;
                }
                return null;
            },

            union: function(range) {
                if (this.intersectsOrTouchesRange(range)) {
                    var unionRange = this.cloneRange();
                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
                        unionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
                        unionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return unionRange;
                } else {
                    throw new DOMException("Ranges do not intersect");
                }
            },

            containsNode: function(node, allowPartial) {
                if (allowPartial) {
                    return this.intersectsNode(node, false);
                } else {
                    return this.compareNode(node) == n_i;
                }
            },

            containsNodeContents: function(node) {
                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
            },

            containsRange: function(range) {
                var intersection = this.intersection(range);
                return intersection !== null && range.equals(intersection);
            },

            containsNodeText: function(node) {
                var nodeRange = this.cloneRange();
                nodeRange.selectNode(node);
                var textNodes = nodeRange.getNodes([3]);
                if (textNodes.length > 0) {
                    nodeRange.setStart(textNodes[0], 0);
                    var lastTextNode = textNodes.pop();
                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
                    return this.containsRange(nodeRange);
                } else {
                    return this.containsNodeContents(node);
                }
            },

            getNodes: function(nodeTypes, filter) {
                assertRangeValid(this);
                return getNodesInRange(this, nodeTypes, filter);
            },

            getDocument: function() {
                return getRangeDocument(this);
            },

            collapseBefore: function(node) {
                this.setEndBefore(node);
                this.collapse(false);
            },

            collapseAfter: function(node) {
                this.setStartAfter(node);
                this.collapse(true);
            },

            getBookmark: function(containerNode) {
                var doc = getRangeDocument(this);
                var preSelectionRange = api.createRange(doc);
                containerNode = containerNode || dom.getBody(doc);
                preSelectionRange.selectNodeContents(containerNode);
                var range = this.intersection(preSelectionRange);
                var start = 0, end = 0;
                if (range) {
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    start = preSelectionRange.toString().length;
                    end = start + range.toString().length;
                }

                return {
                    start: start,
                    end: end,
                    containerNode: containerNode
                };
            },

            moveToBookmark: function(bookmark) {
                var containerNode = bookmark.containerNode;
                var charIndex = 0;
                this.setStart(containerNode, 0);
                this.collapse(true);
                var nodeStack = [containerNode], node, foundStart = false, stop = false;
                var nextCharIndex, i, childNodes;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType == 3) {
                        nextCharIndex = charIndex + node.length;
                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
                            this.setStart(node, bookmark.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
                            this.setEnd(node, bookmark.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        childNodes = node.childNodes;
                        i = childNodes.length;
                        while (i--) {
                            nodeStack.push(childNodes[i]);
                        }
                    }
                }
            },

            getName: function() {
                return "DomRange";
            },

            equals: function(range) {
                return Range.rangesEqual(this, range);
            },

            isValid: function() {
                return isRangeValid(this);
            },

            inspect: function() {
                return inspect(this);
            },

            detach: function() {
                // In DOM4, detach() is now a no-op.
            }
        });

        function copyComparisonConstantsToObject(obj) {
            obj.START_TO_START = s2s;
            obj.START_TO_END = s2e;
            obj.END_TO_END = e2e;
            obj.END_TO_START = e2s;

            obj.NODE_BEFORE = n_b;
            obj.NODE_AFTER = n_a;
            obj.NODE_BEFORE_AND_AFTER = n_b_a;
            obj.NODE_INSIDE = n_i;
        }

        function copyComparisonConstants(constructor) {
            copyComparisonConstantsToObject(constructor);
            copyComparisonConstantsToObject(constructor.prototype);
        }

        function createRangeContentRemover(remover, boundaryUpdater) {
            return function() {
                assertRangeValid(this);

                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

                var iterator = new RangeIterator(this, true);

                // Work out where to position the range after content removal
                var node, boundary;
                if (sc !== root) {
                    node = getClosestAncestorIn(sc, root, true);
                    boundary = getBoundaryAfterNode(node);
                    sc = boundary.node;
                    so = boundary.offset;
                }

                // Check none of the range is read-only
                iterateSubtree(iterator, assertNodeNotReadOnly);

                iterator.reset();

                // Remove the content
                var returnValue = remover(iterator);
                iterator.detach();

                // Move to the new position
                boundaryUpdater(this, sc, so, sc, so);

                return returnValue;
            };
        }

        function createPrototypeRange(constructor, boundaryUpdater) {
            function createBeforeAfterNodeSetter(isBefore, isStart) {
                return function(node) {
                    assertValidNodeType(node, beforeAfterNodeTypes);
                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
                };
            }

            function setRangeStart(range, node, offset) {
                var ec = range.endContainer, eo = range.endOffset;
                if (node !== range.startContainer || offset !== range.startOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
                        ec = node;
                        eo = offset;
                    }
                    boundaryUpdater(range, node, offset, ec, eo);
                }
            }

            function setRangeEnd(range, node, offset) {
                var sc = range.startContainer, so = range.startOffset;
                if (node !== range.endContainer || offset !== range.endOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
                        sc = node;
                        so = offset;
                    }
                    boundaryUpdater(range, sc, so, node, offset);
                }
            }

            // Set up inheritance
            var F = function() {};
            F.prototype = api.rangePrototype;
            constructor.prototype = new F();

            util.extend(constructor.prototype, {
                setStart: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeStart(this, node, offset);
                },

                setEnd: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeEnd(this, node, offset);
                },

                /**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
                setStartAndEnd: function() {
                    var args = arguments;
                    var sc = args[0], so = args[1], ec = sc, eo = so;

                    switch (args.length) {
                        case 3:
                            eo = args[2];
                            break;
                        case 4:
                            ec = args[2];
                            eo = args[3];
                            break;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                setBoundary: function(node, offset, isStart) {
                    this["set" + (isStart ? "Start" : "End")](node, offset);
                },

                setStartBefore: createBeforeAfterNodeSetter(true, true),
                setStartAfter: createBeforeAfterNodeSetter(false, true),
                setEndBefore: createBeforeAfterNodeSetter(true, false),
                setEndAfter: createBeforeAfterNodeSetter(false, false),

                collapse: function(isStart) {
                    assertRangeValid(this);
                    if (isStart) {
                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
                    } else {
                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
                    }
                },

                selectNodeContents: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, true);

                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
                },

                selectNode: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, false);
                    assertValidNodeType(node, beforeAfterNodeTypes);

                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
                },

                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

                canSurroundContents: function() {
                    assertRangeValid(this);
                    assertNodeNotReadOnly(this.startContainer);
                    assertNodeNotReadOnly(this.endContainer);

                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                    // no non-text nodes.
                    var iterator = new RangeIterator(this, true);
                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                    iterator.detach();
                    return !boundariesInvalid;
                },

                splitBoundaries: function() {
                    splitRangeBoundaries(this);
                },

                splitBoundariesPreservingPositions: function(positionsToPreserve) {
                    splitRangeBoundaries(this, positionsToPreserve);
                },

                normalizeBoundaries: function() {
                    assertRangeValid(this);

                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

                    var mergeForward = function(node) {
                        var sibling = node.nextSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            ec = node;
                            eo = node.length;
                            node.appendData(sibling.data);
                            removeNode(sibling);
                        }
                    };

                    var mergeBackward = function(node) {
                        var sibling = node.previousSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            sc = node;
                            var nodeLength = node.length;
                            so = sibling.length;
                            node.insertData(0, sibling.data);
                            removeNode(sibling);
                            if (sc == ec) {
                                eo += so;
                                ec = sc;
                            } else if (ec == node.parentNode) {
                                var nodeIndex = getNodeIndex(node);
                                if (eo == nodeIndex) {
                                    ec = node;
                                    eo = nodeLength;
                                } else if (eo > nodeIndex) {
                                    eo--;
                                }
                            }
                        }
                    };

                    var normalizeStart = true;
                    var sibling;

                    if (isCharacterDataNode(ec)) {
                        if (eo == ec.length) {
                            mergeForward(ec);
                        } else if (eo == 0) {
                            sibling = ec.previousSibling;
                            if (sibling && sibling.nodeType == ec.nodeType) {
                                eo = sibling.length;
                                if (sc == ec) {
                                    normalizeStart = false;
                                }
                                sibling.appendData(ec.data);
                                removeNode(ec);
                                ec = sibling;
                            }
                        }
                    } else {
                        if (eo > 0) {
                            var endNode = ec.childNodes[eo - 1];
                            if (endNode && isCharacterDataNode(endNode)) {
                                mergeForward(endNode);
                            }
                        }
                        normalizeStart = !this.collapsed;
                    }

                    if (normalizeStart) {
                        if (isCharacterDataNode(sc)) {
                            if (so == 0) {
                                mergeBackward(sc);
                            } else if (so == sc.length) {
                                sibling = sc.nextSibling;
                                if (sibling && sibling.nodeType == sc.nodeType) {
                                    if (ec == sibling) {
                                        ec = sc;
                                        eo += sc.length;
                                    }
                                    sc.appendData(sibling.data);
                                    removeNode(sibling);
                                }
                            }
                        } else {
                            if (so < sc.childNodes.length) {
                                var startNode = sc.childNodes[so];
                                if (startNode && isCharacterDataNode(startNode)) {
                                    mergeBackward(startNode);
                                }
                            }
                        }
                    } else {
                        sc = ec;
                        so = eo;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                collapseToPoint: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);
                    this.setStartAndEnd(node, offset);
                }
            });

            copyComparisonConstants(constructor);
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Updates commonAncestorContainer and collapsed after boundary change
        function updateCollapsedAndCommonAncestor(range) {
            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
            range.commonAncestorContainer = range.collapsed ?
                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
        }

        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
            range.startContainer = startContainer;
            range.startOffset = startOffset;
            range.endContainer = endContainer;
            range.endOffset = endOffset;
            range.document = dom.getDocument(startContainer);

            updateCollapsedAndCommonAncestor(range);
        }

        function Range(doc) {
            this.startContainer = doc;
            this.startOffset = 0;
            this.endContainer = doc;
            this.endOffset = 0;
            this.document = doc;
            updateCollapsedAndCommonAncestor(this);
        }

        createPrototypeRange(Range, updateBoundaries);

        util.extend(Range, {
            rangeProperties: rangeProperties,
            RangeIterator: RangeIterator,
            copyComparisonConstants: copyComparisonConstants,
            createPrototypeRange: createPrototypeRange,
            inspect: inspect,
            toHtml: rangeToHtml,
            getRangeDocument: getRangeDocument,
            rangesEqual: function(r1, r2) {
                return r1.startContainer === r2.startContainer &&
                    r1.startOffset === r2.startOffset &&
                    r1.endContainer === r2.endContainer &&
                    r1.endOffset === r2.endOffset;
            }
        });

        api.DomRange = Range;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wrappers for the browser's native DOM Range and/or TextRange implementation
    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
        var WrappedRange, WrappedTextRange;
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DomRange = api.DomRange;
        var getBody = dom.getBody;
        var getContentDocument = dom.getContentDocument;
        var isCharacterDataNode = dom.isCharacterDataNode;


        /*----------------------------------------------------------------------------------------------------------------*/

        if (api.features.implementsDomRange) {
            // This is a wrapper around the browser's native DOM Range. It has two aims:
            // - Provide workarounds for specific browser bugs
            // - provide convenient extensions, which are inherited from Rangy's DomRange

            (function() {
                var rangeProto;
                var rangeProperties = DomRange.rangeProperties;

                function updateRangeProperties(range) {
                    var i = rangeProperties.length, prop;
                    while (i--) {
                        prop = rangeProperties[i];
                        range[prop] = range.nativeRange[prop];
                    }
                    // Fix for broken collapsed property in IE 9.
                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
                }

                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
                    var nativeRangeDifferent = !range.equals(range.nativeRange);

                    // Always set both boundaries for the benefit of IE9 (see issue 35)
                    if (startMoved || endMoved || nativeRangeDifferent) {
                        range.setEnd(endContainer, endOffset);
                        range.setStart(startContainer, startOffset);
                    }
                }

                var createBeforeAfterNodeSetter;

                WrappedRange = function(range) {
                    if (!range) {
                        throw module.createError("WrappedRange: Range must be specified");
                    }
                    this.nativeRange = range;
                    updateRangeProperties(this);
                };

                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

                rangeProto = WrappedRange.prototype;

                rangeProto.selectNode = function(node) {
                    this.nativeRange.selectNode(node);
                    updateRangeProperties(this);
                };

                rangeProto.cloneContents = function() {
                    return this.nativeRange.cloneContents();
                };

                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
                // insertNode() is never delegated to the native range.

                rangeProto.surroundContents = function(node) {
                    this.nativeRange.surroundContents(node);
                    updateRangeProperties(this);
                };

                rangeProto.collapse = function(isStart) {
                    this.nativeRange.collapse(isStart);
                    updateRangeProperties(this);
                };

                rangeProto.cloneRange = function() {
                    return new WrappedRange(this.nativeRange.cloneRange());
                };

                rangeProto.refresh = function() {
                    updateRangeProperties(this);
                };

                rangeProto.toString = function() {
                    return this.nativeRange.toString();
                };

                // Create test range and node for feature detection

                var testTextNode = document.createTextNode("test");
                getBody(document).appendChild(testTextNode);
                var range = document.createRange();

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
                // correct for it

                range.setStart(testTextNode, 0);
                range.setEnd(testTextNode, 0);

                try {
                    range.setStart(testTextNode, 1);

                    rangeProto.setStart = function(node, offset) {
                        this.nativeRange.setStart(node, offset);
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        this.nativeRange.setEnd(node, offset);
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name) {
                        return function(node) {
                            this.nativeRange[name](node);
                            updateRangeProperties(this);
                        };
                    };

                } catch(ex) {

                    rangeProto.setStart = function(node, offset) {
                        try {
                            this.nativeRange.setStart(node, offset);
                        } catch (ex) {
                            this.nativeRange.setEnd(node, offset);
                            this.nativeRange.setStart(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        try {
                            this.nativeRange.setEnd(node, offset);
                        } catch (ex) {
                            this.nativeRange.setStart(node, offset);
                            this.nativeRange.setEnd(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name, oppositeName) {
                        return function(node) {
                            try {
                                this.nativeRange[name](node);
                            } catch (ex) {
                                this.nativeRange[oppositeName](node);
                                this.nativeRange[name](node);
                            }
                            updateRangeProperties(this);
                        };
                    };
                }

                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

                /*--------------------------------------------------------------------------------------------------------*/

                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
                // whether the native implementation can be trusted
                rangeProto.selectNodeContents = function(node) {
                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
                };

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

                range.selectNodeContents(testTextNode);
                range.setEnd(testTextNode, 3);

                var range2 = document.createRange();
                range2.selectNodeContents(testTextNode);
                range2.setEnd(testTextNode, 4);
                range2.setStart(testTextNode, 2);

                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
                    // This is the wrong way round, so correct for it

                    rangeProto.compareBoundaryPoints = function(type, range) {
                        range = range.nativeRange || range;
                        if (type == range.START_TO_END) {
                            type = range.END_TO_START;
                        } else if (type == range.END_TO_START) {
                            type = range.START_TO_END;
                        }
                        return this.nativeRange.compareBoundaryPoints(type, range);
                    };
                } else {
                    rangeProto.compareBoundaryPoints = function(type, range) {
                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

                var el = document.createElement("div");
                el.innerHTML = "123";
                var textNode = el.firstChild;
                var body = getBody(document);
                body.appendChild(el);

                range.setStart(textNode, 1);
                range.setEnd(textNode, 2);
                range.deleteContents();

                if (textNode.data == "13") {
                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
                    // extractContents()
                    rangeProto.deleteContents = function() {
                        this.nativeRange.deleteContents();
                        updateRangeProperties(this);
                    };

                    rangeProto.extractContents = function() {
                        var frag = this.nativeRange.extractContents();
                        updateRangeProperties(this);
                        return frag;
                    };
                } else {
                }

                body.removeChild(el);
                body = null;

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for existence of createContextualFragment and delegate to it if it exists
                if (util.isHostMethod(range, "createContextualFragment")) {
                    rangeProto.createContextualFragment = function(fragmentStr) {
                        return this.nativeRange.createContextualFragment(fragmentStr);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Clean up
                getBody(document).removeChild(testTextNode);

                rangeProto.getName = function() {
                    return "WrappedRange";
                };

                api.WrappedRange = WrappedRange;

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return doc.createRange();
                };
            })();
        }

        if (api.features.implementsTextRange) {
            /*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
            var getTextRangeContainerElement = function(textRange) {
                var parentEl = textRange.parentElement();
                var range = textRange.duplicate();
                range.collapse(true);
                var startEl = range.parentElement();
                range = textRange.duplicate();
                range.collapse(false);
                var endEl = range.parentElement();
                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
            };

            var textRangeIsCollapsed = function(textRange) {
                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
            };

            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
            // bugs, handling for inputs and images, plus optimizations.
            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
                var workingRange = textRange.duplicate();
                workingRange.collapse(isStart);
                var containerElement = workingRange.parentElement();

                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
                // check for that
                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
                    containerElement = wholeRangeContainerElement;
                }


                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
                if (!containerElement.canHaveHTML) {
                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
                    return {
                        boundaryPosition: pos,
                        nodeInfo: {
                            nodeIndex: pos.offset,
                            containerElement: pos.node
                        }
                    };
                }

                var workingNode = dom.getDocument(containerElement).createElement("span");

                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
                if (workingNode.parentNode) {
                    dom.removeNode(workingNode);
                }

                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
                var previousNode, nextNode, boundaryPosition, boundaryNode;
                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
                var childNodeCount = containerElement.childNodes.length;
                var end = childNodeCount;

                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
                // after the range boundary.
                var nodeIndex = end;

                while (true) {
                    if (nodeIndex == childNodeCount) {
                        containerElement.appendChild(workingNode);
                    } else {
                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
                    }
                    workingRange.moveToElementText(workingNode);
                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
                    if (comparison == 0 || start == end) {
                        break;
                    } else if (comparison == -1) {
                        if (end == start + 1) {
                            // We know the endth child node is after the range boundary, so we must be done.
                            break;
                        } else {
                            start = nodeIndex;
                        }
                    } else {
                        end = (end == start + 1) ? start : nodeIndex;
                    }
                    nodeIndex = Math.floor((start + end) / 2);
                    containerElement.removeChild(workingNode);
                }


                // We've now reached or gone past the boundary of the text range we're interested in
                // so have identified the node we want
                boundaryNode = workingNode.nextSibling;

                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
                    // the node containing the text range's boundary, so we move the end of the working range to the
                    // boundary point and measure the length of its text to get the boundary's offset within the node.
                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

                    var offset;

                    if (/[\r\n]/.test(boundaryNode.data)) {
                        /*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
                        var tempRange = workingRange.duplicate();
                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

                        offset = tempRange.moveStart("character", rangeLength);
                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
                            offset++;
                            tempRange.moveStart("character", 1);
                        }
                    } else {
                        offset = workingRange.text.length;
                    }
                    boundaryPosition = new DomPosition(boundaryNode, offset);
                } else {

                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
                    // a position within that, and likewise for a start boundary preceding a character data node
                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
                    if (nextNode && isCharacterDataNode(nextNode)) {
                        boundaryPosition = new DomPosition(nextNode, 0);
                    } else if (previousNode && isCharacterDataNode(previousNode)) {
                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
                    } else {
                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
                    }
                }

                // Clean up
                dom.removeNode(workingNode);

                return {
                    boundaryPosition: boundaryPosition,
                    nodeInfo: {
                        nodeIndex: nodeIndex,
                        containerElement: containerElement
                    }
                };
            };

            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
            // (http://code.google.com/p/ierange/)
            var createBoundaryTextRange = function(boundaryPosition, isStart) {
                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
                var doc = dom.getDocument(boundaryPosition.node);
                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

                if (nodeIsDataNode) {
                    boundaryNode = boundaryPosition.node;
                    boundaryParent = boundaryNode.parentNode;
                } else {
                    childNodes = boundaryPosition.node.childNodes;
                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
                    boundaryParent = boundaryPosition.node;
                }

                // Position the range immediately before the node containing the boundary
                workingNode = doc.createElement("span");

                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
                // the element rather than immediately before or after it
                workingNode.innerHTML = "&#feff;";

                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
                if (boundaryNode) {
                    boundaryParent.insertBefore(workingNode, boundaryNode);
                } else {
                    boundaryParent.appendChild(workingNode);
                }

                workingRange.moveToElementText(workingNode);
                workingRange.collapse(!isStart);

                // Clean up
                boundaryParent.removeChild(workingNode);

                // Move the working range to the text offset, if required
                if (nodeIsDataNode) {
                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
                }

                return workingRange;
            };

            /*------------------------------------------------------------------------------------------------------------*/

            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
            // prototype

            WrappedTextRange = function(textRange) {
                this.textRange = textRange;
                this.refresh();
            };

            WrappedTextRange.prototype = new DomRange(document);

            WrappedTextRange.prototype.refresh = function() {
                var start, end, startBoundary;

                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

                if (textRangeIsCollapsed(this.textRange)) {
                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
                        true).boundaryPosition;
                } else {
                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
                    start = startBoundary.boundaryPosition;

                    // An optimization used here is that if the start and end boundaries have the same parent element, the
                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
                    // the start boundary
                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
                        startBoundary.nodeInfo).boundaryPosition;
                }

                this.setStart(start.node, start.offset);
                this.setEnd(end.node, end.offset);
            };

            WrappedTextRange.prototype.getName = function() {
                return "WrappedTextRange";
            };

            DomRange.copyComparisonConstants(WrappedTextRange);

            var rangeToTextRange = function(range) {
                if (range.collapsed) {
                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                } else {
                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
                    textRange.setEndPoint("StartToStart", startRange);
                    textRange.setEndPoint("EndToEnd", endRange);
                    return textRange;
                }
            };

            WrappedTextRange.rangeToTextRange = rangeToTextRange;

            WrappedTextRange.prototype.toTextRange = function() {
                return rangeToTextRange(this);
            };

            api.WrappedTextRange = WrappedTextRange;

            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
            // implementation to use by default.
            if (!api.features.implementsDomRange || api.config.preferTextRange) {
                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
                var globalObj = (function(f) { return f("return this;")(); })(Function);
                if (typeof globalObj.Range == "undefined") {
                    globalObj.Range = WrappedTextRange;
                }

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return getBody(doc).createTextRange();
                };

                api.WrappedRange = WrappedTextRange;
            }
        }

        api.createRange = function(doc) {
            doc = getContentDocument(doc, module, "createRange");
            return new api.WrappedRange(api.createNativeRange(doc));
        };

        api.createRangyRange = function(doc) {
            doc = getContentDocument(doc, module, "createRangyRange");
            return new DomRange(doc);
        };

        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

        api.addShimListener(function(win) {
            var doc = win.document;
            if (typeof doc.createRange == "undefined") {
                doc.createRange = function() {
                    return api.createRange(doc);
                };
            }
            doc = win = null;
        });
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
        api.config.checkSelectionRanges = true;

        var BOOLEAN = "boolean";
        var NUMBER = "number";
        var dom = api.dom;
        var util = api.util;
        var isHostMethod = util.isHostMethod;
        var DomRange = api.DomRange;
        var WrappedRange = api.WrappedRange;
        var DOMException = api.DOMException;
        var DomPosition = dom.DomPosition;
        var getNativeSelection;
        var selectionIsCollapsed;
        var features = api.features;
        var CONTROL = "Control";
        var getDocument = dom.getDocument;
        var getBody = dom.getBody;
        var rangesEqual = DomRange.rangesEqual;


        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
        // "forward" or "forwards") or a Boolean (true for backwards).
        function isDirectionBackward(dir) {
            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
        }

        function getWindow(win, methodName) {
            if (!win) {
                return window;
            } else if (dom.isWindow(win)) {
                return win;
            } else if (win instanceof WrappedSelection) {
                return win.win;
            } else {
                var doc = dom.getContentDocument(win, module, methodName);
                return dom.getWindow(doc);
            }
        }

        function getWinSelection(winParam) {
            return getWindow(winParam, "getWinSelection").getSelection();
        }

        function getDocSelection(winParam) {
            return getWindow(winParam, "getDocSelection").document.selection;
        }

        function winSelectionIsBackward(sel) {
            var backward = false;
            if (sel.anchorNode) {
                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
            }
            return backward;
        }

        // Test for the Range/TextRange and Selection features required
        // Test for ability to retrieve selection
        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
            implementsDocSelection = util.isHostObject(document, "selection");

        features.implementsWinGetSelection = implementsWinGetSelection;
        features.implementsDocSelection = implementsDocSelection;

        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

        if (useDocumentSelection) {
            getNativeSelection = getDocSelection;
            api.isSelectionValid = function(winParam) {
                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

                // Check whether the selection TextRange is actually contained within the correct document
                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
            };
        } else if (implementsWinGetSelection) {
            getNativeSelection = getWinSelection;
            api.isSelectionValid = function() {
                return true;
            };
        } else {
            module.fail("Neither document.selection or window.getSelection() detected.");
            return false;
        }

        api.getNativeSelection = getNativeSelection;

        var testSelection = getNativeSelection();

        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
        if (!testSelection) {
            module.fail("Native selection was null (possibly issue 138?)");
            return false;
        }

        var testRange = api.createNativeRange(document);
        var body = getBody(document);

        // Obtaining a range from a selection
        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

        // Test for existence of native selection extend() method
        var selectionHasExtend = isHostMethod(testSelection, "extend");
        features.selectionHasExtend = selectionHasExtend;

        // Test if rangeCount exists
        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
        features.selectionHasRangeCount = selectionHasRangeCount;

        var selectionSupportsMultipleRanges = false;
        var collapsedNonEditableSelectionsSupported = true;

        var addRangeBackwardToNative = selectionHasExtend ?
            function(nativeSelection, range) {
                var doc = DomRange.getRangeDocument(range);
                var endRange = api.createRange(doc);
                endRange.collapseToPoint(range.endContainer, range.endOffset);
                nativeSelection.addRange(getNativeRange(endRange));
                nativeSelection.extend(range.startContainer, range.startOffset);
            } : null;

        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

            (function() {
                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
                // performed on the current document's selection. See issue 109.

                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
                // will result in the selection direction begin reversed if the original selection was backwards and the
                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
                var sel = window.getSelection();
                if (sel) {
                    // Store the current selection
                    var originalSelectionRangeCount = sel.rangeCount;
                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
                    var originalSelectionRanges = [];
                    var originalSelectionBackward = winSelectionIsBackward(sel);
                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
                        originalSelectionRanges[i] = sel.getRangeAt(i);
                    }

                    // Create some test elements
                    var testEl = dom.createTestElement(document, "", false);
                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

                    // Test whether the native selection will allow a collapsed selection within a non-editable element
                    var r1 = document.createRange();

                    r1.setStart(textNode, 1);
                    r1.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(r1);
                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
                    sel.removeAllRanges();

                    // Test whether the native selection is capable of supporting multiple ranges.
                    if (!selectionHasMultipleRanges) {
                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
                        // sniff. I'm not happy about it. See
                        // https://code.google.com/p/chromium/issues/detail?id=399791
                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
                            selectionSupportsMultipleRanges = false;
                        } else {
                            var r2 = r1.cloneRange();
                            r1.setStart(textNode, 0);
                            r2.setEnd(textNode, 3);
                            r2.setStart(textNode, 2);
                            sel.addRange(r1);
                            sel.addRange(r2);
                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
                        }
                    }

                    // Clean up
                    dom.removeNode(testEl);
                    sel.removeAllRanges();

                    for (i = 0; i < originalSelectionRangeCount; ++i) {
                        if (i == 0 && originalSelectionBackward) {
                            if (addRangeBackwardToNative) {
                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
                            } else {
                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
                                sel.addRange(originalSelectionRanges[i]);
                            }
                        } else {
                            sel.addRange(originalSelectionRanges[i]);
                        }
                    }
                }
            })();
        }

        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

        // ControlRanges
        var implementsControlRange = false, testControlRange;

        if (body && isHostMethod(body, "createControlRange")) {
            testControlRange = body.createControlRange();
            if (util.areHostProperties(testControlRange, ["item", "add"])) {
                implementsControlRange = true;
            }
        }
        features.implementsControlRange = implementsControlRange;

        // Selection collapsedness
        if (selectionHasAnchorAndFocus) {
            selectionIsCollapsed = function(sel) {
                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
            };
        } else {
            selectionIsCollapsed = function(sel) {
                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
            };
        }

        function updateAnchorAndFocusFromRange(sel, range, backward) {
            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
            sel.anchorNode = range[anchorPrefix + "Container"];
            sel.anchorOffset = range[anchorPrefix + "Offset"];
            sel.focusNode = range[focusPrefix + "Container"];
            sel.focusOffset = range[focusPrefix + "Offset"];
        }

        function updateAnchorAndFocusFromNativeSelection(sel) {
            var nativeSel = sel.nativeSelection;
            sel.anchorNode = nativeSel.anchorNode;
            sel.anchorOffset = nativeSel.anchorOffset;
            sel.focusNode = nativeSel.focusNode;
            sel.focusOffset = nativeSel.focusOffset;
        }

        function updateEmptySelection(sel) {
            sel.anchorNode = sel.focusNode = null;
            sel.anchorOffset = sel.focusOffset = 0;
            sel.rangeCount = 0;
            sel.isCollapsed = true;
            sel._ranges.length = 0;
        }

        function getNativeRange(range) {
            var nativeRange;
            if (range instanceof DomRange) {
                nativeRange = api.createNativeRange(range.getDocument());
                nativeRange.setEnd(range.endContainer, range.endOffset);
                nativeRange.setStart(range.startContainer, range.startOffset);
            } else if (range instanceof WrappedRange) {
                nativeRange = range.nativeRange;
            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
                nativeRange = range;
            }
            return nativeRange;
        }

        function rangeContainsSingleElement(rangeNodes) {
            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
                return false;
            }
            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
                    return false;
                }
            }
            return true;
        }

        function getSingleElementFromRange(range) {
            var nodes = range.getNodes();
            if (!rangeContainsSingleElement(nodes)) {
                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
            }
            return nodes[0];
        }

        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
        function isTextRange(range) {
            return !!range && typeof range.text != "undefined";
        }

        function updateFromTextRange(sel, range) {
            // Create a Range from the selected TextRange
            var wrappedRange = new WrappedRange(range);
            sel._ranges = [wrappedRange];

            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
            sel.rangeCount = 1;
            sel.isCollapsed = wrappedRange.collapsed;
        }

        function updateControlSelection(sel) {
            // Update the wrapped selection based on what's now in the native selection
            sel._ranges.length = 0;
            if (sel.docSelection.type == "None") {
                updateEmptySelection(sel);
            } else {
                var controlRange = sel.docSelection.createRange();
                if (isTextRange(controlRange)) {
                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
                    // ControlRange have been removed from the ControlRange and removed from the document.
                    updateFromTextRange(sel, controlRange);
                } else {
                    sel.rangeCount = controlRange.length;
                    var range, doc = getDocument(controlRange.item(0));
                    for (var i = 0; i < sel.rangeCount; ++i) {
                        range = api.createRange(doc);
                        range.selectNode(controlRange.item(i));
                        sel._ranges.push(range);
                    }
                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
                }
            }
        }

        function addRangeToControlSelection(sel, range) {
            var controlRange = sel.docSelection.createRange();
            var rangeElement = getSingleElementFromRange(range);

            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
            // contained by the supplied range
            var doc = getDocument(controlRange.item(0));
            var newControlRange = getBody(doc).createControlRange();
            for (var i = 0, len = controlRange.length; i < len; ++i) {
                newControlRange.add(controlRange.item(i));
            }
            try {
                newControlRange.add(rangeElement);
            } catch (ex) {
                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
            }
            newControlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        var getSelectionRangeAt;

        if (isHostMethod(testSelection, "getRangeAt")) {
            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
            // lesson to us all, especially me.
            getSelectionRangeAt = function(sel, index) {
                try {
                    return sel.getRangeAt(index);
                } catch (ex) {
                    return null;
                }
            };
        } else if (selectionHasAnchorAndFocus) {
            getSelectionRangeAt = function(sel) {
                var doc = getDocument(sel.anchorNode);
                var range = api.createRange(doc);
                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

                // Handle the case when the selection was selected backwards (from the end to the start in the
                // document)
                if (range.collapsed !== this.isCollapsed) {
                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
                }

                return range;
            };
        }

        function WrappedSelection(selection, docSelection, win) {
            this.nativeSelection = selection;
            this.docSelection = docSelection;
            this._ranges = [];
            this.win = win;
            this.refresh();
        }

        WrappedSelection.prototype = api.selectionPrototype;

        function deleteProperties(sel) {
            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
            sel.detached = true;
        }

        var cachedRangySelections = [];

        function actOnCachedSelection(win, action) {
            var i = cachedRangySelections.length, cached, sel;
            while (i--) {
                cached = cachedRangySelections[i];
                sel = cached.selection;
                if (action == "deleteAll") {
                    deleteProperties(sel);
                } else if (cached.win == win) {
                    if (action == "delete") {
                        cachedRangySelections.splice(i, 1);
                        return true;
                    } else {
                        return sel;
                    }
                }
            }
            if (action == "deleteAll") {
                cachedRangySelections.length = 0;
            }
            return null;
        }

        var getSelection = function(win) {
            // Check if the parameter is a Rangy Selection object
            if (win && win instanceof WrappedSelection) {
                win.refresh();
                return win;
            }

            win = getWindow(win, "getNativeSelection");

            var sel = actOnCachedSelection(win);
            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
            if (sel) {
                sel.nativeSelection = nativeSel;
                sel.docSelection = docSel;
                sel.refresh();
            } else {
                sel = new WrappedSelection(nativeSel, docSel, win);
                cachedRangySelections.push( { win: win, selection: sel } );
            }
            return sel;
        };

        api.getSelection = getSelection;

        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

        var selProto = WrappedSelection.prototype;

        function createControlSelection(sel, ranges) {
            // Ensure that the selection becomes of type "Control"
            var doc = getDocument(ranges[0].startContainer);
            var controlRange = getBody(doc).createControlRange();
            for (var i = 0, el, len = ranges.length; i < len; ++i) {
                el = getSingleElementFromRange(ranges[i]);
                try {
                    controlRange.add(el);
                } catch (ex) {
                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
                }
            }
            controlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        // Selecting a range
        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
            selProto.removeAllRanges = function() {
                this.nativeSelection.removeAllRanges();
                updateEmptySelection(this);
            };

            var addRangeBackward = function(sel, range) {
                addRangeBackwardToNative(sel.nativeSelection, range);
                sel.refresh();
            };

            if (selectionHasRangeCount) {
                selProto.addRange = function(range, direction) {
                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                        addRangeToControlSelection(this, range);
                    } else {
                        if (isDirectionBackward(direction) && selectionHasExtend) {
                            addRangeBackward(this, range);
                        } else {
                            var previousRangeCount;
                            if (selectionSupportsMultipleRanges) {
                                previousRangeCount = this.rangeCount;
                            } else {
                                this.removeAllRanges();
                                previousRangeCount = 0;
                            }
                            // Clone the native range so that changing the selected range does not affect the selection.
                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
                            // issue 80.
                            var clonedNativeRange = getNativeRange(range).cloneRange();
                            try {
                                this.nativeSelection.addRange(clonedNativeRange);
                            } catch (ex) {
                            }

                            // Check whether adding the range was successful
                            this.rangeCount = this.nativeSelection.rangeCount;

                            if (this.rangeCount == previousRangeCount + 1) {
                                // The range was added successfully

                                // Check whether the range that we added to the selection is reflected in the last range extracted from
                                // the selection
                                if (api.config.checkSelectionRanges) {
                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
                                        range = new WrappedRange(nativeRange);
                                    }
                                }
                                this._ranges[this.rangeCount - 1] = range;
                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
                                this.isCollapsed = selectionIsCollapsed(this);
                            } else {
                                // The range was not added successfully. The simplest thing is to refresh
                                this.refresh();
                            }
                        }
                    }
                };
            } else {
                selProto.addRange = function(range, direction) {
                    if (isDirectionBackward(direction) && selectionHasExtend) {
                        addRangeBackward(this, range);
                    } else {
                        this.nativeSelection.addRange(getNativeRange(range));
                        this.refresh();
                    }
                };
            }

            selProto.setRanges = function(ranges) {
                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
                    createControlSelection(this, ranges);
                } else {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        this.addRange(ranges[i]);
                    }
                }
            };
        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
                   implementsControlRange && useDocumentSelection) {

            selProto.removeAllRanges = function() {
                // Added try/catch as fix for issue #21
                try {
                    this.docSelection.empty();

                    // Check for empty() not working (issue #24)
                    if (this.docSelection.type != "None") {
                        // Work around failure to empty a control selection by instead selecting a TextRange and then
                        // calling empty()
                        var doc;
                        if (this.anchorNode) {
                            doc = getDocument(this.anchorNode);
                        } else if (this.docSelection.type == CONTROL) {
                            var controlRange = this.docSelection.createRange();
                            if (controlRange.length) {
                                doc = getDocument( controlRange.item(0) );
                            }
                        }
                        if (doc) {
                            var textRange = getBody(doc).createTextRange();
                            textRange.select();
                            this.docSelection.empty();
                        }
                    }
                } catch(ex) {}
                updateEmptySelection(this);
            };

            selProto.addRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    addRangeToControlSelection(this, range);
                } else {
                    api.WrappedTextRange.rangeToTextRange(range).select();
                    this._ranges[0] = range;
                    this.rangeCount = 1;
                    this.isCollapsed = this._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(this, range, false);
                }
            };

            selProto.setRanges = function(ranges) {
                this.removeAllRanges();
                var rangeCount = ranges.length;
                if (rangeCount > 1) {
                    createControlSelection(this, ranges);
                } else if (rangeCount) {
                    this.addRange(ranges[0]);
                }
            };
        } else {
            module.fail("No means of selecting a Range or TextRange was found");
            return false;
        }

        selProto.getRangeAt = function(index) {
            if (index < 0 || index >= this.rangeCount) {
                throw new DOMException("INDEX_SIZE_ERR");
            } else {
                // Clone the range to preserve selection-range independence. See issue 80.
                return this._ranges[index].cloneRange();
            }
        };

        var refreshSelection;

        if (useDocumentSelection) {
            refreshSelection = function(sel) {
                var range;
                if (api.isSelectionValid(sel.win)) {
                    range = sel.docSelection.createRange();
                } else {
                    range = getBody(sel.win.document).createTextRange();
                    range.collapse(true);
                }

                if (sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else if (isTextRange(range)) {
                    updateFromTextRange(sel, range);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
            refreshSelection = function(sel) {
                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else {
                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
                    if (sel.rangeCount) {
                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
                        }
                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
                        sel.isCollapsed = selectionIsCollapsed(sel);
                    } else {
                        updateEmptySelection(sel);
                    }
                }
            };
        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
            refreshSelection = function(sel) {
                var range, nativeSel = sel.nativeSelection;
                if (nativeSel.anchorNode) {
                    range = getSelectionRangeAt(nativeSel, 0);
                    sel._ranges = [range];
                    sel.rangeCount = 1;
                    updateAnchorAndFocusFromNativeSelection(sel);
                    sel.isCollapsed = selectionIsCollapsed(sel);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else {
            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
            return false;
        }

        selProto.refresh = function(checkForChanges) {
            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

            refreshSelection(this);
            if (checkForChanges) {
                // Check the range count first
                var i = oldRanges.length;
                if (i != this._ranges.length) {
                    return true;
                }

                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
                // ranges after this
                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
                    return true;
                }

                // Finally, compare each range in turn
                while (i--) {
                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
                        return true;
                    }
                }
                return false;
            }
        };

        // Removal of a single range
        var removeRangeManually = function(sel, range) {
            var ranges = sel.getAllRanges();
            sel.removeAllRanges();
            for (var i = 0, len = ranges.length; i < len; ++i) {
                if (!rangesEqual(range, ranges[i])) {
                    sel.addRange(ranges[i]);
                }
            }
            if (!sel.rangeCount) {
                updateEmptySelection(sel);
            }
        };

        if (implementsControlRange && implementsDocSelection) {
            selProto.removeRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    var controlRange = this.docSelection.createRange();
                    var rangeElement = getSingleElementFromRange(range);

                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
                    // element contained by the supplied range
                    var doc = getDocument(controlRange.item(0));
                    var newControlRange = getBody(doc).createControlRange();
                    var el, removed = false;
                    for (var i = 0, len = controlRange.length; i < len; ++i) {
                        el = controlRange.item(i);
                        if (el !== rangeElement || removed) {
                            newControlRange.add(controlRange.item(i));
                        } else {
                            removed = true;
                        }
                    }
                    newControlRange.select();

                    // Update the wrapped selection based on what's now in the native selection
                    updateControlSelection(this);
                } else {
                    removeRangeManually(this, range);
                }
            };
        } else {
            selProto.removeRange = function(range) {
                removeRangeManually(this, range);
            };
        }

        // Detecting if a selection is backward
        var selectionIsBackward;
        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
            selectionIsBackward = winSelectionIsBackward;

            selProto.isBackward = function() {
                return selectionIsBackward(this);
            };
        } else {
            selectionIsBackward = selProto.isBackward = function() {
                return false;
            };
        }

        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
        selProto.isBackwards = selProto.isBackward;

        // Selection stringifier
        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
        // The current spec does not yet define this method.
        selProto.toString = function() {
            var rangeTexts = [];
            for (var i = 0, len = this.rangeCount; i < len; ++i) {
                rangeTexts[i] = "" + this._ranges[i];
            }
            return rangeTexts.join("");
        };

        function assertNodeInSameDocument(sel, node) {
            if (sel.win.document != getDocument(node)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
        selProto.collapse = function(node, offset) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.collapseToPoint(node, offset);
            this.setSingleRange(range);
            this.isCollapsed = true;
        };

        selProto.collapseToStart = function() {
            if (this.rangeCount) {
                var range = this._ranges[0];
                this.collapse(range.startContainer, range.startOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        selProto.collapseToEnd = function() {
            if (this.rangeCount) {
                var range = this._ranges[this.rangeCount - 1];
                this.collapse(range.endContainer, range.endOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
        // specified so the native implementation is never used by Rangy.
        selProto.selectAllChildren = function(node) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.selectNodeContents(node);
            this.setSingleRange(range);
        };

        selProto.deleteFromDocument = function() {
            // Sepcial behaviour required for IE's control selections
            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                var controlRange = this.docSelection.createRange();
                var element;
                while (controlRange.length) {
                    element = controlRange.item(0);
                    controlRange.remove(element);
                    dom.removeNode(element);
                }
                this.refresh();
            } else if (this.rangeCount) {
                var ranges = this.getAllRanges();
                if (ranges.length) {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        ranges[i].deleteContents();
                    }
                    // The spec says nothing about what the selection should contain after calling deleteContents on each
                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
                    this.addRange(ranges[len - 1]);
                }
            }
        };

        // The following are non-standard extensions
        selProto.eachRange = function(func, returnValue) {
            for (var i = 0, len = this._ranges.length; i < len; ++i) {
                if ( func( this.getRangeAt(i) ) ) {
                    return returnValue;
                }
            }
        };

        selProto.getAllRanges = function() {
            var ranges = [];
            this.eachRange(function(range) {
                ranges.push(range);
            });
            return ranges;
        };

        selProto.setSingleRange = function(range, direction) {
            this.removeAllRanges();
            this.addRange(range, direction);
        };

        selProto.callMethodOnEachRange = function(methodName, params) {
            var results = [];
            this.eachRange( function(range) {
                results.push( range[methodName].apply(range, params || []) );
            } );
            return results;
        };

        function createStartOrEndSetter(isStart) {
            return function(node, offset) {
                var range;
                if (this.rangeCount) {
                    range = this.getRangeAt(0);
                    range["set" + (isStart ? "Start" : "End")](node, offset);
                } else {
                    range = api.createRange(this.win.document);
                    range.setStartAndEnd(node, offset);
                }
                this.setSingleRange(range, this.isBackward());
            };
        }

        selProto.setStart = createStartOrEndSetter(true);
        selProto.setEnd = createStartOrEndSetter(false);

        // Add select() method to Range prototype. Any existing selection will be removed.
        api.rangePrototype.select = function(direction) {
            getSelection( this.getDocument() ).setSingleRange(this, direction);
        };

        selProto.changeEachRange = function(func) {
            var ranges = [];
            var backward = this.isBackward();

            this.eachRange(function(range) {
                func(range);
                ranges.push(range);
            });

            this.removeAllRanges();
            if (backward && ranges.length == 1) {
                this.addRange(ranges[0], "backward");
            } else {
                this.setRanges(ranges);
            }
        };

        selProto.containsNode = function(node, allowPartial) {
            return this.eachRange( function(range) {
                return range.containsNode(node, allowPartial);
            }, true ) || false;
        };

        selProto.getBookmark = function(containerNode) {
            return {
                backward: this.isBackward(),
                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
            };
        };

        selProto.moveToBookmark = function(bookmark) {
            var selRanges = [];
            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
                range = api.createRange(this.win);
                range.moveToBookmark(rangeBookmark);
                selRanges.push(range);
            }
            if (bookmark.backward) {
                this.setSingleRange(selRanges[0], "backward");
            } else {
                this.setRanges(selRanges);
            }
        };

        selProto.saveRanges = function() {
            return {
                backward: this.isBackward(),
                ranges: this.callMethodOnEachRange("cloneRange")
            };
        };

        selProto.restoreRanges = function(selRanges) {
            this.removeAllRanges();
            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
                this.addRange(range, (selRanges.backward && i == 0));
            }
        };

        selProto.toHtml = function() {
            var rangeHtmls = [];
            this.eachRange(function(range) {
                rangeHtmls.push( DomRange.toHtml(range) );
            });
            return rangeHtmls.join("");
        };

        if (features.implementsTextRange) {
            selProto.getNativeTextRange = function() {
                var sel, textRange;
                if ( (sel = this.docSelection) ) {
                    var range = sel.createRange();
                    if (isTextRange(range)) {
                        return range;
                    } else {
                        throw module.createError("getNativeTextRange: selection is a control selection");
                    }
                } else if (this.rangeCount > 0) {
                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
                } else {
                    throw module.createError("getNativeTextRange: selection contains no range");
                }
            };
        }

        function inspect(sel) {
            var rangeInspects = [];
            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

            if (typeof sel.rangeCount != "undefined") {
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
                }
            }
            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
        }

        selProto.getName = function() {
            return "WrappedSelection";
        };

        selProto.inspect = function() {
            return inspect(this);
        };

        selProto.detach = function() {
            actOnCachedSelection(this.win, "delete");
            deleteProperties(this);
        };

        WrappedSelection.detachAll = function() {
            actOnCachedSelection(null, "deleteAll");
        };

        WrappedSelection.inspect = inspect;
        WrappedSelection.isDirectionBackward = isDirectionBackward;

        api.Selection = WrappedSelection;

        api.selectionPrototype = selProto;

        api.addShimListener(function(win) {
            if (typeof win.getSelection == "undefined") {
                win.getSelection = function() {
                    return getSelection(win);
                };
            }
            win = null;
        });
    });
    

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wait for document to load before initializing
    var docReady = false;

    var loadHandler = function(e) {
        if (!docReady) {
            docReady = true;
            if (!api.initialized && api.config.autoInitialize) {
                init();
            }
        }
    };

    if (isBrowser) {
        // Test whether the document has already been loaded and initialize immediately if so
        if (document.readyState == "complete") {
            loadHandler();
        } else {
            if (isHostMethod(document, "addEventListener")) {
                document.addEventListener("DOMContentLoaded", loadHandler, false);
            }

            // Add a fallback in case the DOMContentLoaded event isn't supported
            addListener(window, "load", loadHandler);
        }
    }

    return api;
}, this);
},{}],3:[function(require,module,exports){
/**
 * Selection save and restore module for Rangy.
 * Saves and restores user selections using marker invisible elements in the DOM.
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module with a dependency on Rangy.
        define(["./rangy-core"], factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory( require("rangy") );
    } else {
        // No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
        factory(root.rangy);
    }
})(function(rangy) {
    rangy.createModule("SaveRestore", ["WrappedRange"], function(api, module) {
        var dom = api.dom;
        var removeNode = dom.removeNode;
        var isDirectionBackward = api.Selection.isDirectionBackward;
        var markerTextChar = "\ufeff";

        function gEBI(id, doc) {
            return (doc || document).getElementById(id);
        }

        function insertRangeBoundaryMarker(range, atStart) {
            var markerId = "selectionBoundary_" + (+new Date()) + "_" + ("" + Math.random()).slice(2);
            var markerEl;
            var doc = dom.getDocument(range.startContainer);

            // Clone the Range and collapse to the appropriate boundary point
            var boundaryRange = range.cloneRange();
            boundaryRange.collapse(atStart);

            // Create the marker element containing a single invisible character using DOM methods and insert it
            markerEl = doc.createElement("span");
            markerEl.id = markerId;
            markerEl.style.lineHeight = "0";
            markerEl.style.display = "none";
            markerEl.className = "rangySelectionBoundary";
            markerEl.appendChild(doc.createTextNode(markerTextChar));

            boundaryRange.insertNode(markerEl);
            return markerEl;
        }

        function setRangeBoundary(doc, range, markerId, atStart) {
            var markerEl = gEBI(markerId, doc);
            if (markerEl) {
                range[atStart ? "setStartBefore" : "setEndBefore"](markerEl);
                removeNode(markerEl);
            } else {
                module.warn("Marker element has been removed. Cannot restore selection.");
            }
        }

        function compareRanges(r1, r2) {
            return r2.compareBoundaryPoints(r1.START_TO_START, r1);
        }

        function saveRange(range, direction) {
            var startEl, endEl, doc = api.DomRange.getRangeDocument(range), text = range.toString();
            var backward = isDirectionBackward(direction);

            if (range.collapsed) {
                endEl = insertRangeBoundaryMarker(range, false);
                return {
                    document: doc,
                    markerId: endEl.id,
                    collapsed: true
                };
            } else {
                endEl = insertRangeBoundaryMarker(range, false);
                startEl = insertRangeBoundaryMarker(range, true);

                return {
                    document: doc,
                    startMarkerId: startEl.id,
                    endMarkerId: endEl.id,
                    collapsed: false,
                    backward: backward,
                    toString: function() {
                        return "original text: '" + text + "', new text: '" + range.toString() + "'";
                    }
                };
            }
        }

        function restoreRange(rangeInfo, normalize) {
            var doc = rangeInfo.document;
            if (typeof normalize == "undefined") {
                normalize = true;
            }
            var range = api.createRange(doc);
            if (rangeInfo.collapsed) {
                var markerEl = gEBI(rangeInfo.markerId, doc);
                if (markerEl) {
                    markerEl.style.display = "inline";
                    var previousNode = markerEl.previousSibling;

                    // Workaround for issue 17
                    if (previousNode && previousNode.nodeType == 3) {
                        removeNode(markerEl);
                        range.collapseToPoint(previousNode, previousNode.length);
                    } else {
                        range.collapseBefore(markerEl);
                        removeNode(markerEl);
                    }
                } else {
                    module.warn("Marker element has been removed. Cannot restore selection.");
                }
            } else {
                setRangeBoundary(doc, range, rangeInfo.startMarkerId, true);
                setRangeBoundary(doc, range, rangeInfo.endMarkerId, false);
            }

            if (normalize) {
                range.normalizeBoundaries();
            }

            return range;
        }

        function saveRanges(ranges, direction) {
            var rangeInfos = [], range, doc;
            var backward = isDirectionBackward(direction);

            // Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
            ranges = ranges.slice(0);
            ranges.sort(compareRanges);

            for (var i = 0, len = ranges.length; i < len; ++i) {
                rangeInfos[i] = saveRange(ranges[i], backward);
            }

            // Now that all the markers are in place and DOM manipulation over, adjust each range's boundaries to lie
            // between its markers
            for (i = len - 1; i >= 0; --i) {
                range = ranges[i];
                doc = api.DomRange.getRangeDocument(range);
                if (range.collapsed) {
                    range.collapseAfter(gEBI(rangeInfos[i].markerId, doc));
                } else {
                    range.setEndBefore(gEBI(rangeInfos[i].endMarkerId, doc));
                    range.setStartAfter(gEBI(rangeInfos[i].startMarkerId, doc));
                }
            }

            return rangeInfos;
        }

        function saveSelection(win) {
            if (!api.isSelectionValid(win)) {
                module.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus.");
                return null;
            }
            var sel = api.getSelection(win);
            var ranges = sel.getAllRanges();
            var backward = (ranges.length == 1 && sel.isBackward());

            var rangeInfos = saveRanges(ranges, backward);

            // Ensure current selection is unaffected
            if (backward) {
                sel.setSingleRange(ranges[0], backward);
            } else {
                sel.setRanges(ranges);
            }

            return {
                win: win,
                rangeInfos: rangeInfos,
                restored: false
            };
        }

        function restoreRanges(rangeInfos) {
            var ranges = [];

            // Ranges are in reverse order of appearance in the DOM. We want to restore earliest first to avoid
            // normalization affecting previously restored ranges.
            var rangeCount = rangeInfos.length;

            for (var i = rangeCount - 1; i >= 0; i--) {
                ranges[i] = restoreRange(rangeInfos[i], true);
            }

            return ranges;
        }

        function restoreSelection(savedSelection, preserveDirection) {
            if (!savedSelection.restored) {
                var rangeInfos = savedSelection.rangeInfos;
                var sel = api.getSelection(savedSelection.win);
                var ranges = restoreRanges(rangeInfos), rangeCount = rangeInfos.length;

                if (rangeCount == 1 && preserveDirection && api.features.selectionHasExtend && rangeInfos[0].backward) {
                    sel.removeAllRanges();
                    sel.addRange(ranges[0], true);
                } else {
                    sel.setRanges(ranges);
                }

                savedSelection.restored = true;
            }
        }

        function removeMarkerElement(doc, markerId) {
            var markerEl = gEBI(markerId, doc);
            if (markerEl) {
                removeNode(markerEl);
            }
        }

        function removeMarkers(savedSelection) {
            var rangeInfos = savedSelection.rangeInfos;
            for (var i = 0, len = rangeInfos.length, rangeInfo; i < len; ++i) {
                rangeInfo = rangeInfos[i];
                if (rangeInfo.collapsed) {
                    removeMarkerElement(savedSelection.doc, rangeInfo.markerId);
                } else {
                    removeMarkerElement(savedSelection.doc, rangeInfo.startMarkerId);
                    removeMarkerElement(savedSelection.doc, rangeInfo.endMarkerId);
                }
            }
        }

        api.util.extend(api, {
            saveRange: saveRange,
            restoreRange: restoreRange,
            saveRanges: saveRanges,
            restoreRanges: restoreRanges,
            saveSelection: saveSelection,
            restoreSelection: restoreSelection,
            removeMarkerElement: removeMarkerElement,
            removeMarkers: removeMarkers
        });
    });
    
    return rangy;
}, this);
},{"rangy":2}],4:[function(require,module,exports){
!function(a,b){b["true"]=a,/**
 * @license AngularJS v1.3.10
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
function(a,b,c){"use strict";function d(){this.$get=["$$sanitizeUri",function(a){return function(b){"undefined"!=typeof arguments[1]&&(arguments[1].version="taSanitize");var c=[];return g(b,l(c,function(b,c){return!/^unsafe/.test(a(b,c))})),c.join("")}}]}function e(a){var c=[],d=l(c,b.noop);return d.chars(a),c.join("")}function f(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function g(a,c){function d(a,d,f,g){if(d=b.lowercase(d),D[d])for(;k.last()&&E[k.last()];)e("",k.last());C[d]&&k.last()==d&&e("",d),g=z[d]||!!g,g||k.push(d);var i={};f.replace(p,function(a,b,c,d,e){var f=c||d||e||"";i[b]=h(f)}),c.start&&c.start(d,i,g)}function e(a,d){var e,f=0;if(d=b.lowercase(d))for(f=k.length-1;f>=0&&k[f]!=d;f--);if(f>=0){for(e=k.length-1;e>=f;e--)c.end&&c.end(k[e]);k.length=f}}"string"!=typeof a&&(a=null===a||"undefined"==typeof a?"":""+a);var f,g,i,j,k=[],l=a;for(k.last=function(){return k[k.length-1]};a;){if(j="",g=!0,k.last()&&G[k.last()])a=a.replace(new RegExp("([^]*)<\\s*\\/\\s*"+k.last()+"[^>]*>","i"),function(a,b){return b=b.replace(s,"$1").replace(v,"$1"),c.chars&&c.chars(h(b)),""}),e("",k.last());else{if(y.test(a)){if(i=a.match(y)){i[0];c.whitespace&&c.whitespace(i[0]),a=a.replace(i[0],""),g=!1}}else t.test(a)?(i=a.match(t),i&&(c.comment&&c.comment(i[1]),a=a.replace(i[0],""),g=!1)):u.test(a)?(i=a.match(u),i&&(a=a.replace(i[0],""),g=!1)):r.test(a)?(i=a.match(o),i&&(a=a.substring(i[0].length),i[0].replace(o,e),g=!1)):q.test(a)&&(i=a.match(n),i?(i[4]&&(a=a.substring(i[0].length),i[0].replace(n,d)),g=!1):(j+="<",a=a.substring(1)));g&&(f=a.indexOf("<"),j+=0>f?a:a.substring(0,f),a=0>f?"":a.substring(f),c.chars&&c.chars(h(j)))}if(a==l)throw m("badparse","The sanitizer was unable to parse the following block of html: {0}",a);l=a}e()}function h(a){if(!a)return"";var b=N.exec(a),c=b[1],d=b[3],e=b[2];return e&&(M.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in M?M.textContent:M.innerText),c+e+d}function i(a){return a.replace(/&/g,"&amp;").replace(w,function(a){var b=a.charCodeAt(0),c=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(c-56320)+65536)+";"}).replace(x,function(a){var b=a.charCodeAt(0);return 159>=b||173==b||b>=1536&&1540>=b||1807==b||6068==b||6069==b||b>=8204&&8207>=b||b>=8232&&8239>=b||b>=8288&&8303>=b||65279==b||b>=65520&&65535>=b?"&#"+b+";":a}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function j(a){var c="",d=a.split(";");return b.forEach(d,function(a){var d=a.split(":");if(2==d.length){var e=O(b.lowercase(d[0])),a=O(b.lowercase(d[1]));(("color"===e||"background-color"===e)&&(a.match(/^rgb\([0-9%,\. ]*\)$/i)||a.match(/^rgba\([0-9%,\. ]*\)$/i)||a.match(/^hsl\([0-9%,\. ]*\)$/i)||a.match(/^hsla\([0-9%,\. ]*\)$/i)||a.match(/^#[0-9a-f]{3,6}$/i)||a.match(/^[a-z]*$/i))||"text-align"===e&&("left"===a||"right"===a||"center"===a||"justify"===a)||"float"===e&&("left"===a||"right"===a||"none"===a)||("width"===e||"height"===e)&&a.match(/[0-9\.]*(px|em|rem|%)/)||"direction"===e&&a.match(/^ltr|rtl|initial|inherit$/))&&(c+=e+": "+a+";")}}),c}function k(a,b,c,d){return"img"===a&&b["ta-insert-video"]&&("ta-insert-video"===c||"allowfullscreen"===c||"frameborder"===c||"contenteditable"===c&&"false"===d)?!0:!1}function l(a,c){var d=!1,e=b.bind(a,a.push);return{start:function(a,f,g){a=b.lowercase(a),!d&&G[a]&&(d=a),d||H[a]!==!0||(e("<"),e(a),b.forEach(f,function(d,g){var h=b.lowercase(g),l="img"===a&&"src"===h||"background"===h;("style"===h&&""!==(d=j(d))||k(a,f,h,d)||L[h]===!0&&(I[h]!==!0||c(d,l)))&&(e(" "),e(g),e('="'),e(i(d)),e('"'))}),e(g?"/>":">"))},comment:function(a){e(a)},whitespace:function(a){e(i(a))},end:function(a){a=b.lowercase(a),d||H[a]!==!0||(e("</"),e(a),e(">")),a==d&&(d=!1)},chars:function(a){d||e(i(a))}}}var m=b.$$minErr("$sanitize"),n=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,o=/^<\/\s*([\w:-]+)[^>]*>/,p=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,q=/^</,r=/^<\//,s=/<!--(.*?)-->/g,t=/(^<!--.*?-->)/,u=/<!DOCTYPE([^>]*?)>/i,v=/<!\[CDATA\[(.*?)]]>/g,w=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,x=/([^\#-~| |!])/g,y=/^(\s+)/,z=f("area,br,col,hr,img,wbr,input"),A=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),B=f("rp,rt"),C=b.extend({},B,A),D=b.extend({},A,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),E=b.extend({},B,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),F=f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),G=f("script,style"),H=b.extend({},z,D,E,C,F),I=f("background,cite,href,longdesc,src,usemap,xlink:href"),J=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,id,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),K=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),L=b.extend({},I,K,J),M=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/,O=function(){return String.prototype.trim?function(a){return b.isString(a)?a.trim():a}:function(a){return b.isString(a)?a.replace(/^\s\s*/,"").replace(/\s\s*$/,""):a}}();b.module("ngSanitize",[]).provider("$sanitize",d),b.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,d=/^mailto:/;return function(f,g){function h(a){a&&n.push(e(a))}function i(a,c){n.push("<a "),b.isDefined(g)&&n.push('target="',g,'" '),n.push('href="',a.replace(/"/g,"&quot;"),'">'),h(c),n.push("</a>")}if(!f)return f;for(var j,k,l,m=f,n=[];j=m.match(c);)k=j[0],j[2]||j[4]||(k=(j[3]?"http://":"mailto:")+k),l=j.index,h(m.substr(0,l)),i(k,j[0].replace(d,"")),m=m.substring(l+j[0].length);return h(m),a(n.join(""))}}])}(window,window.angular)}({},function(){return this}());
},{}],5:[function(require,module,exports){
!function(a,b){function c(a){try{return 0!==angular.element(a).length}catch(b){return!1}}function d(a,b){if(!a||""===a||e.hasOwnProperty(a))throw"textAngular Error: A unique name is required for a Tool Definition";if(b.display&&(""===b.display||!c(b.display))||!b.display&&!b.buttontext&&!b.iconclass)throw'textAngular Error: Tool Definition for "'+a+'" does not have a valid display/iconclass/buttontext value';e[a]=b}b["true"]=a;var e={};angular.module("textAngularSetup",[]).constant("taRegisterTool",d).value("taTools",e).value("taOptions",{forceTextAngularSanitize:!0,keyMappings:[],toolbar:[["h1","h2","h3","h4","h5","h6","p","pre","quote"],["bold","italics","underline","strikeThrough","ul","ol","redo","undo","clear"],["justifyLeft","justifyCenter","justifyRight","justifyFull","indent","outdent"],["html","insertImage","insertLink","insertVideo","wordcount","charcount"]],classes:{focussed:"focussed",toolbar:"btn-toolbar",toolbarGroup:"btn-group",toolbarButton:"btn btn-default",toolbarButtonActive:"active",disabled:"disabled",textEditor:"form-control",htmlEditor:"form-control"},defaultTagAttributes:{a:{target:""}},setup:{textEditorSetup:function(a){},htmlEditorSetup:function(a){}},defaultFileDropHandler:function(a,b){var c=new FileReader;return"image"===a.type.substring(0,5)?(c.onload=function(){""!==c.result&&b("insertImage",c.result,!0)},c.readAsDataURL(a),!0):!1}}).value("taSelectableElements",["a","img"]).value("taCustomRenderers",[{selector:"img",customAttribute:"ta-insert-video",renderLogic:function(a){var b=angular.element("<iframe></iframe>"),c=a.prop("attributes");angular.forEach(c,function(a){b.attr(a.name,a.value)}),b.attr("src",b.attr("ta-insert-video")),a.replaceWith(b)}}]).value("taTranslations",{html:{tooltip:"Toggle html / Rich Text"},heading:{tooltip:"Heading "},p:{tooltip:"Paragraph"},pre:{tooltip:"Preformatted text"},ul:{tooltip:"Unordered List"},ol:{tooltip:"Ordered List"},quote:{tooltip:"Quote/unquote selection or paragraph"},undo:{tooltip:"Undo"},redo:{tooltip:"Redo"},bold:{tooltip:"Bold"},italic:{tooltip:"Italic"},underline:{tooltip:"Underline"},strikeThrough:{tooltip:"Strikethrough"},justifyLeft:{tooltip:"Align text left"},justifyRight:{tooltip:"Align text right"},justifyFull:{tooltip:"Justify text"},justifyCenter:{tooltip:"Center"},indent:{tooltip:"Increase indent"},outdent:{tooltip:"Decrease indent"},clear:{tooltip:"Clear formatting"},insertImage:{dialogPrompt:"Please enter an image URL to insert",tooltip:"Insert image",hotkey:"the - possibly language dependent hotkey ... for some future implementation"},insertVideo:{tooltip:"Insert video",dialogPrompt:"Please enter a youtube URL to embed"},insertLink:{tooltip:"Insert / edit link",dialogPrompt:"Please enter a URL to insert"},editLink:{reLinkButton:{tooltip:"Relink"},unLinkButton:{tooltip:"Unlink"},targetToggle:{buttontext:"Open in New Window"}},wordcount:{tooltip:"Display words Count"},charcount:{tooltip:"Display characters Count"}}).factory("taToolFunctions",["$window","taTranslations",function(a,b){return{imgOnSelectAction:function(a,b,c){var d=function(){c.updateTaBindtaTextElement(),c.hidePopover()};a.preventDefault(),c.displayElements.popover.css("width","375px");var e=c.displayElements.popoverContainer;e.empty();var f=angular.element('<div class="btn-group" style="padding-right: 6px;">'),g=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');g.on("click",function(a){a.preventDefault(),b.css({width:"100%",height:""}),d()});var h=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');h.on("click",function(a){a.preventDefault(),b.css({width:"50%",height:""}),d()});var i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');i.on("click",function(a){a.preventDefault(),b.css({width:"25%",height:""}),d()});var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');j.on("click",function(a){a.preventDefault(),b.css({width:"",height:""}),d()}),f.append(g),f.append(h),f.append(i),f.append(j),e.append(f),f=angular.element('<div class="btn-group" style="padding-right: 6px;">');var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');k.on("click",function(a){a.preventDefault(),b.css("float","left"),b.css("cssFloat","left"),b.css("styleFloat","left"),d()});var l=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');l.on("click",function(a){a.preventDefault(),b.css("float","right"),b.css("cssFloat","right"),b.css("styleFloat","right"),d()});var m=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');m.on("click",function(a){a.preventDefault(),b.css("float",""),b.css("cssFloat",""),b.css("styleFloat",""),d()}),f.append(k),f.append(m),f.append(l),e.append(f),f=angular.element('<div class="btn-group">');var n=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');n.on("click",function(a){a.preventDefault(),b.remove(),d()}),f.append(n),e.append(f),c.showPopover(b),c.showResizeOverlay(b)},aOnSelectAction:function(c,d,e){c.preventDefault(),e.displayElements.popover.css("width","436px");var f=e.displayElements.popoverContainer;f.empty(),f.css("line-height","28px");var g=angular.element('<a href="'+d.attr("href")+'" target="_blank">'+d.attr("href")+"</a>");g.css({display:"inline-block","max-width":"200px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap","vertical-align":"middle"}),f.append(g);var h=angular.element('<div class="btn-group pull-right">'),i=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.reLinkButton.tooltip+'"><i class="fa fa-edit icon-edit"></i></button>');i.on("click",function(c){c.preventDefault();var f=a.prompt(b.insertLink.dialogPrompt,d.attr("href"));f&&""!==f&&"http://"!==f&&(d.attr("href",f),e.updateTaBindtaTextElement()),e.hidePopover()}),h.append(i);var j=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="'+b.editLink.unLinkButton.tooltip+'"><i class="fa fa-unlink icon-unlink"></i></button>');j.on("click",function(a){a.preventDefault(),d.replaceWith(d.contents()),e.updateTaBindtaTextElement(),e.hidePopover()}),h.append(j);var k=angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">'+b.editLink.targetToggle.buttontext+"</button>");"_blank"===d.attr("target")&&k.addClass("active"),k.on("click",function(a){a.preventDefault(),d.attr("target","_blank"===d.attr("target")?"":"_blank"),k.toggleClass("active"),e.updateTaBindtaTextElement()}),h.append(k),f.append(h),e.showPopover(d)},extractYoutubeVideoId:function(a){var b=/(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i,c=a.match(b);return c&&c[1]||null}}}]).run(["taRegisterTool","$window","taTranslations","taSelection","taToolFunctions","$sanitize","taOptions",function(a,b,c,d,e,f,g){var h={};if(f("",h),g.forceTextAngularSanitize===!0&&"taSanitize"!==h.version)throw angular.$$minErr("textAngular")("textAngularSetup","The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");a("html",{iconclass:"fa fa-code",tooltiptext:c.html.tooltip,action:function(){this.$editor().switchView()},activeState:function(){return this.$editor().showHtml}});var i=function(a){return function(){return this.$editor().queryFormatBlockState(a)}},j=function(){return this.$editor().wrapSelection("formatBlock","<"+this.name.toUpperCase()+">")};angular.forEach(["h1","h2","h3","h4","h5","h6"],function(b){a(b.toLowerCase(),{buttontext:b.toUpperCase(),tooltiptext:c.heading.tooltip+b.charAt(1),action:j,activeState:i(b.toLowerCase())})}),a("p",{buttontext:"P",tooltiptext:c.p.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<P>")},activeState:function(){return this.$editor().queryFormatBlockState("p")}}),a("pre",{buttontext:"pre",tooltiptext:c.pre.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<PRE>")},activeState:function(){return this.$editor().queryFormatBlockState("pre")}}),a("ul",{iconclass:"fa fa-list-ul",tooltiptext:c.ul.tooltip,action:function(){return this.$editor().wrapSelection("insertUnorderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertUnorderedList")}}),a("ol",{iconclass:"fa fa-list-ol",tooltiptext:c.ol.tooltip,action:function(){return this.$editor().wrapSelection("insertOrderedList",null)},activeState:function(){return this.$editor().queryCommandState("insertOrderedList")}}),a("quote",{iconclass:"fa fa-quote-right",tooltiptext:c.quote.tooltip,action:function(){return this.$editor().wrapSelection("formatBlock","<BLOCKQUOTE>")},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")}}),a("undo",{iconclass:"fa fa-undo",tooltiptext:c.undo.tooltip,action:function(){return this.$editor().wrapSelection("undo",null)}}),a("redo",{iconclass:"fa fa-repeat",tooltiptext:c.redo.tooltip,action:function(){return this.$editor().wrapSelection("redo",null)}}),a("bold",{iconclass:"fa fa-bold",tooltiptext:c.bold.tooltip,action:function(){return this.$editor().wrapSelection("bold",null)},activeState:function(){return this.$editor().queryCommandState("bold")},commandKeyCode:98}),a("justifyLeft",{iconclass:"fa fa-align-left",tooltiptext:c.justifyLeft.tooltip,action:function(){return this.$editor().wrapSelection("justifyLeft",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="left"===a.css("text-align")||"left"===a.attr("align")||"right"!==a.css("text-align")&&"center"!==a.css("text-align")&&"justify"!==a.css("text-align")&&!this.$editor().queryCommandState("justifyRight")&&!this.$editor().queryCommandState("justifyCenter")&&!this.$editor().queryCommandState("justifyFull")),b=b||this.$editor().queryCommandState("justifyLeft")}}),a("justifyRight",{iconclass:"fa fa-align-right",tooltiptext:c.justifyRight.tooltip,action:function(){return this.$editor().wrapSelection("justifyRight",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="right"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyRight")}}),a("justifyFull",{iconclass:"fa fa-align-justify",tooltiptext:c.justifyFull.tooltip,action:function(){return this.$editor().wrapSelection("justifyFull",null)},activeState:function(a){var b=!1;return a&&(b="justify"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyFull")}}),a("justifyCenter",{iconclass:"fa fa-align-center",tooltiptext:c.justifyCenter.tooltip,action:function(){return this.$editor().wrapSelection("justifyCenter",null)},activeState:function(a){if(a&&"#document"===a.nodeName)return!1;var b=!1;return a&&(b="center"===a.css("text-align")),b=b||this.$editor().queryCommandState("justifyCenter")}}),a("indent",{iconclass:"fa fa-indent",tooltiptext:c.indent.tooltip,action:function(){return this.$editor().wrapSelection("indent",null)},activeState:function(){return this.$editor().queryFormatBlockState("blockquote")},commandKeyCode:"TabKey"}),a("outdent",{iconclass:"fa fa-outdent",tooltiptext:c.outdent.tooltip,action:function(){return this.$editor().wrapSelection("outdent",null)},activeState:function(){return!1},commandKeyCode:"ShiftTabKey"}),a("italics",{iconclass:"fa fa-italic",tooltiptext:c.italic.tooltip,action:function(){return this.$editor().wrapSelection("italic",null)},activeState:function(){return this.$editor().queryCommandState("italic")},commandKeyCode:105}),a("underline",{iconclass:"fa fa-underline",tooltiptext:c.underline.tooltip,action:function(){return this.$editor().wrapSelection("underline",null)},activeState:function(){return this.$editor().queryCommandState("underline")},commandKeyCode:117}),a("strikeThrough",{iconclass:"fa fa-strikethrough",tooltiptext:c.strikeThrough.tooltip,action:function(){return this.$editor().wrapSelection("strikeThrough",null)},activeState:function(){return document.queryCommandState("strikeThrough")}}),a("clear",{iconclass:"fa fa-ban",tooltiptext:c.clear.tooltip,action:function(a,b){var c;this.$editor().wrapSelection("removeFormat",null);var e=angular.element(d.getSelectionElement()),f=function(a){a=angular.element(a);var b=a;angular.forEach(a.children(),function(a){var c=angular.element("<p></p>");c.html(angular.element(a).html()),b.after(c),b=c}),a.remove()};if(angular.forEach(e.find("ul"),f),angular.forEach(e.find("ol"),f),"li"===e[0].tagName.toLowerCase()){var g=e[0].parentNode.childNodes,h=[],i=[],j=!1;for(c=0;c<g.length;c++)g[c]===e[0]?j=!0:j?i.push(g[c]):h.push(g[c]);var k=angular.element(e[0].parentNode),l=angular.element("<p></p>");if(l.html(angular.element(e[0]).html()),0===h.length||0===i.length)0===i.length?k.after(l):k[0].parentNode.insertBefore(l[0],k[0]),0===h.length&&0===i.length?k.remove():angular.element(e[0]).remove();else{var m=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">"),n=angular.element("<"+k[0].tagName+"></"+k[0].tagName+">");for(c=0;c<h.length;c++)m.append(angular.element(h[c]));for(c=0;c<i.length;c++)n.append(angular.element(i[c]));k.after(n),k.after(l),k.after(m),k.remove()}d.setSelectionToElementEnd(l[0])}var o=this.$editor(),p=function(a){a=angular.element(a),a[0]!==o.displayElements.text[0]&&a.removeAttr("class"),angular.forEach(a.children(),p)};angular.forEach(e,p),"li"!==e[0].tagName.toLowerCase()&&"ol"!==e[0].tagName.toLowerCase()&&"ul"!==e[0].tagName.toLowerCase()&&this.$editor().wrapSelection("formatBlock","default"),b()}}),a("insertImage",{iconclass:"fa fa-picture-o",tooltiptext:c.insertImage.tooltip,action:function(){var a;return a=b.prompt(c.insertImage.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("insertImage",a,!0):void 0},onElementSelect:{element:"img",action:e.imgOnSelectAction}}),a("insertVideo",{iconclass:"fa fa-youtube-play",tooltiptext:c.insertVideo.tooltip,action:function(){var a;if(a=b.prompt(c.insertVideo.dialogPrompt,"https://"),a&&""!==a&&"https://"!==a&&(videoId=e.extractYoutubeVideoId(a),videoId)){var d="https://www.youtube.com/embed/"+videoId,f='<img class="ta-insert-video" src="https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg" ta-insert-video="'+d+'" contenteditable="false" allowfullscreen="true" frameborder="0" />';return this.$editor().wrapSelection("insertHTML",f,!0)}},onElementSelect:{element:"img",onlyWithAttrs:["ta-insert-video"],action:e.imgOnSelectAction}}),a("insertLink",{tooltiptext:c.insertLink.tooltip,iconclass:"fa fa-link",action:function(){var a;return a=b.prompt(c.insertLink.dialogPrompt,"http://"),a&&""!==a&&"http://"!==a?this.$editor().wrapSelection("createLink",a,!0):void 0},activeState:function(a){return a?"A"===a[0].tagName:!1},onElementSelect:{element:"a",action:e.aOnSelectAction}}),a("wordcount",{display:'<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',disabled:!0,wordcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerHTML||"",c=0;return""!==b.replace(/\s*<[^>]*?>\s*/g,"")&&(c=b.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi,"").replace(/(<[^>]*?>\s*<[^>]*?>)/gi," ").replace(/(<[^>]*?>)/gi,"").replace(/\s+/gi," ").match(/\S+/g).length),this.wordcount=c,this.$editor().wordcount=c,!1}}),a("charcount",{display:'<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',disabled:!0,charcount:0,activeState:function(){var a=this.$editor().displayElements.text,b=a[0].innerText||a[0].textContent,c=b.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g," ").replace(/\s+$/g," ").length;return this.charcount=c,this.$editor().charcount=c,!1}})}]),/*
@license textAngular
Author : Austin Anderson
License : 2013 MIT
Version 1.4.6

See README.md or https://github.com/fraywing/textAngular/wiki for requirements and use.
*/
"undefined"!=typeof module&&"undefined"!=typeof a&&module.exports===a&&(module.exports="textAngular"),function(){"use strict";var b={ie:function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}(),webkit:/AppleWebKit\/([\d.]+)/i.test(navigator.userAgent)},c=!1;b.webkit&&(document.addEventListener("mousedown",function(a){var b=a||window.event,d=b.target;if(c&&null!==d){for(var e=!1,f=d;null!==f&&"html"!==f.tagName.toLowerCase()&&!e;)e="true"===f.contentEditable,f=f.parentNode;e||(document.getElementById("textAngular-editableFix-010203040506070809").setSelectionRange(0,0),d.focus(),d.select&&d.select())}c=!1},!1),angular.element(document).ready(function(){angular.element(document.body).append(angular.element('<input id="textAngular-editableFix-010203040506070809" class="ta-hidden-input" aria-hidden="true" unselectable="on" tabIndex="-1">'))}));var d=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video)$/i,f=/^(ul|li|ol)$/i,g=/^(address|article|aside|audio|blockquote|canvas|dd|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|noscript|ol|output|p|pre|section|table|tfoot|ul|video|li)$/i;String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var h,i,j,k,l,m;if(b.ie>8||void 0===b.ie){for(var n=document.styleSheets,o=0;o<n.length;o++)if((0===n[o].media.length||n[o].media.mediaText.match(/(all|screen)/gi))&&n[o].href&&n[o].href.match(/textangular\.(min\.|)css/gi)){h=n[o];break}h||(h=function(){var a=document.createElement("style");return b.webkit&&a.appendChild(document.createTextNode("")),document.getElementsByTagName("head")[0].appendChild(a),a.sheet}()),i=function(a,b){return k(h,a,b)},k=function(a,b,c){var d,e;return a.cssRules?d=Math.max(a.cssRules.length-1,0):a.rules&&(d=Math.max(a.rules.length-1,0)),a.insertRule?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d),h.rules?e=h.rules[d]:h.cssRules&&(e=h.cssRules[d]),e},m=function(a,b){var c,d;for(c=0;c<b.length;c++)if(b[c].cssText===a.cssText){d=c;break}return d},j=function(a){l(h,a)},l=function(a,b){var c=a.cssRules||a.rules;if(c&&0!==c.length){var d=m(b,c);a.removeRule?a.removeRule(d):a.deleteRule(d)}}}angular.module("textAngular.factories",[]).factory("taBrowserTag",[function(){return function(a){return a?""===a?void 0===b.ie?"div":b.ie<=8?"P":"p":b.ie<=8?a.toUpperCase():a:b.ie<=8?"P":"p"}}]).factory("taApplyCustomRenderers",["taCustomRenderers","taDOM",function(a,b){return function(c){var d=angular.element("<div></div>");return d[0].innerHTML=c,angular.forEach(a,function(a){var c=[];a.selector&&""!==a.selector?c=d.find(a.selector):a.customAttribute&&""!==a.customAttribute&&(c=b.getByAttribute(d,a.customAttribute)),angular.forEach(c,function(b){b=angular.element(b),a.selector&&""!==a.selector&&a.customAttribute&&""!==a.customAttribute?void 0!==b.attr(a.customAttribute)&&a.renderLogic(b):a.renderLogic(b)})}),d[0].innerHTML}}]).factory("taFixChrome",function(){var a=function(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c,d,e=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,f="",g=0;b=e.exec(a);)c=b[3]||b[4],c&&c.match(/line-height: 1.[0-9]{3,12};|color: inherit; line-height: 1.1;/i)&&(c=c.replace(/( |)font-family: inherit;|( |)line-height: 1.[0-9]{3,12};|( |)color: inherit;/gi,""),d="<"+b[1].trim(),c.trim().length>0&&(d+=" style="+b[2].substring(0,1)+c+b[2].substring(0,1)),d+=b[5].trim()+">",f+=a.substring(g,b.index)+d,g=b.index+b[0].length);return f+=a.substring(g),g>0?f.replace(/<span\s?>(.*?)<\/span>(<br(\/|)>|)/gi,"$1"):a};return a}).factory("taSanitize",["$sanitize",function(a){function b(a,b){for(var c,d=0,e=0,f=/<[^>]*>/gi;c=f.exec(a);)if(e=c.index,"/"===c[0].substr(1,1)){if(0===d)break;d--}else d++;return b+a.substring(0,e)+angular.element(b)[0].outerHTML.substring(b.length)+a.substring(e)}function c(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var d,f,g,h,i,k,l=/<([^>\/]+?)style=("([^"]+)"|'([^']+)')([^>]*)>/gi,m="",n="",o=0;f=l.exec(a);){h=f[3]||f[4];var p=new RegExp(j,"i");if(angular.isString(h)&&p.test(h)){i="";for(var q=new RegExp(j,"ig");g=q.exec(h);)for(d=0;d<e.length;d++)g[2*d+2]&&(i+="<"+e[d].tag+">");k=c(a.substring(o,f.index)),n+=m.length>0?b(k,m):k,h=h.replace(new RegExp(j,"ig"),""),n+="<"+f[1].trim(),h.length>0&&(n+=' style="'+h+'"'),n+=f[5]+">",o=f.index+f[0].length,m=i}}return n+=m.length>0?b(a.substring(o),m):a.substring(o)}function d(a){if(!a||!angular.isString(a)||a.length<=0)return a;for(var b,c=/<([^>\/]+?)align=("([^"]+)"|'([^']+)')([^>]*)>/gi,d="",e=0;b=c.exec(a);){d+=a.substring(e,b.index),e=b.index+b[0].length;var f="<"+b[1]+b[5];/style=("([^"]+)"|'([^']+)')/gi.test(f)?f=f.replace(/style=("([^"]+)"|'([^']+)')/i,'style="$2$3 text-align:'+(b[3]||b[4])+';"'):f+=' style="text-align:'+(b[3]||b[4])+';"',f+=">",d+=f}return d+a.substring(e)}for(var e=[{property:"font-weight",values:["bold"],tag:"b"},{property:"font-style",values:["italic"],tag:"i"}],f=[],g=0;g<e.length;g++){for(var h="("+e[g].property+":\\s*(",i=0;i<e[g].values.length;i++)i>0&&(h+="|"),h+=e[g].values[i];h+=");)",f.push(h)}var j="("+f.join("|")+")";return function(b,e,f){if(!f)try{b=c(b)}catch(g){}b=d(b);var h;try{h=a(b),f&&(h=b)}catch(g){h=e||""}var i,j=h.match(/(<pre[^>]*>.*?<\/pre[^>]*>)/gi),k=h.replace(/(&#(9|10);)*/gi,""),l=/<pre[^>]*>.*?<\/pre[^>]*>/gi,m=0,n=0;for(h="";null!==(i=l.exec(k))&&m<j.length;)h+=k.substring(n,i.index)+j[m],n=i.index+i[0].length,m++;return h+k.substring(n)}}]).factory("taToolExecuteAction",["$q","$log",function(a,b){return function(c){void 0!==c&&(this.$editor=function(){return c});var d,e=a.defer(),f=e.promise,g=this.$editor();try{d=this.action(e,g.startAction()),f["finally"](function(){g.endAction.call(g)})}catch(h){b.error(h)}(d||void 0===d)&&e.resolve()}}]),angular.module("textAngular.DOM",["textAngular.factories"]).factory("taExecCommand",["taSelection","taBrowserTag","$document",function(a,b,c){var e=function(b,c){var d,e,f=b.find("li");for(e=f.length-1;e>=0;e--)d=angular.element("<"+c+">"+f[e].innerHTML+"</"+c+">"),b.after(d);b.remove(),a.setSelectionToElementEnd(d[0])},g=function(b){/(<br(|\/)>)$/i.test(b.innerHTML.trim())?a.setSelectionBeforeElement(angular.element(b).find("br")[0]):a.setSelectionToElementEnd(b)},h=function(a,b){var c=angular.element("<"+b+">"+a[0].innerHTML+"</"+b+">");a.after(c),a.remove(),g(c.find("li")[0])},i=function(a,c,d){for(var e="",f=0;f<a.length;f++)e+="<"+b("li")+">"+a[f].innerHTML+"</"+b("li")+">";var h=angular.element("<"+d+">"+e+"</"+d+">");c.after(h),c.remove(),g(h.find("li")[0])};return function(g,j){return g=b(g),function(k,l,m,n){var o,p,q,r,s,t,u,v=angular.element("<"+g+">");try{u=a.getSelectionElement()}catch(w){}var x=angular.element(u);if(void 0!==u){var y=u.tagName.toLowerCase();if("insertorderedlist"===k.toLowerCase()||"insertunorderedlist"===k.toLowerCase()){var z=b("insertorderedlist"===k.toLowerCase()?"ol":"ul");if(y===z)return e(x,g);if("li"===y&&x.parent()[0].tagName.toLowerCase()===z&&1===x.parent().children().length)return e(x.parent(),g);if("li"===y&&x.parent()[0].tagName.toLowerCase()!==z&&1===x.parent().children().length)return h(x.parent(),z);if(y.match(d)&&!x.hasClass("ta-bind")){if("ol"===y||"ul"===y)return h(x,z);var A=!1;return angular.forEach(x.children(),function(a){a.tagName.match(d)&&(A=!0)}),A?i(x.children(),x,z):i([angular.element("<div>"+u.innerHTML+"</div>")[0]],x,z)}if(y.match(d)){if(r=a.getOnlySelectedElements(),0===r.length)p=angular.element("<"+z+"><li>"+u.innerHTML+"</li></"+z+">"),x.html(""),x.append(p);else{if(1===r.length&&("ol"===r[0].tagName.toLowerCase()||"ul"===r[0].tagName.toLowerCase()))return r[0].tagName.toLowerCase()===z?e(angular.element(r[0]),g):h(angular.element(r[0]),z);q="";var B=[];for(o=0;o<r.length;o++)if(3!==r[o].nodeType){var C=angular.element(r[o]);if("li"===r[o].tagName.toLowerCase())continue;q+="ol"===r[o].tagName.toLowerCase()||"ul"===r[o].tagName.toLowerCase()?C[0].innerHTML:"span"!==r[o].tagName.toLowerCase()||"ol"!==r[o].childNodes[0].tagName.toLowerCase()&&"ul"!==r[o].childNodes[0].tagName.toLowerCase()?"<"+b("li")+">"+C[0].innerHTML+"</"+b("li")+">":C[0].childNodes[0].innerHTML,B.unshift(C)}p=angular.element("<"+z+">"+q+"</"+z+">"),B.pop().replaceWith(p),angular.forEach(B,function(a){a.remove()})}return void a.setSelectionToElementEnd(p[0])}}else{if("formatblock"===k.toLowerCase()){for(t=m.toLowerCase().replace(/[<>]/gi,""),"default"===t.trim()&&(t=g,m="<"+g+">"),p="li"===y?x.parent():x;!p[0].tagName||!p[0].tagName.match(d)&&!p.parent().attr("contenteditable");)p=p.parent(),y=(p[0].tagName||"").toLowerCase();if(y===t){r=p.children();var D=!1;for(o=0;o<r.length;o++)D=D||r[o].tagName.match(d);D?(p.after(r),s=p.next(),p.remove(),p=s):(v.append(p[0].childNodes),p.after(v),p.remove(),p=v)}else if(p.parent()[0].tagName.toLowerCase()!==t||p.parent().hasClass("ta-bind"))if(y.match(f))p.wrap(m);else{for(r=a.getOnlySelectedElements(),0===r.length&&(r=[p[0]]),o=0;o<r.length;o++)if(3===r[o].nodeType||!r[o].tagName.match(d))for(;3===r[o].nodeType||!r[o].tagName||!r[o].tagName.match(d);)r[o]=r[o].parentNode;if(angular.element(r[0]).hasClass("ta-bind"))p=angular.element(m),p[0].innerHTML=r[0].innerHTML,r[0].innerHTML=p[0].outerHTML;else if("blockquote"===t){for(q="",o=0;o<r.length;o++)q+=r[o].outerHTML;for(p=angular.element(m),p[0].innerHTML=q,r[0].parentNode.insertBefore(p[0],r[0]),o=r.length-1;o>=0;o--)r[o].parentNode&&r[o].parentNode.removeChild(r[o])}else for(o=0;o<r.length;o++)p=angular.element(m),p[0].innerHTML=r[o].innerHTML,r[o].parentNode.insertBefore(p[0],r[o]),r[o].parentNode.removeChild(r[o])}else{var E=p.parent(),F=E.contents();for(o=0;o<F.length;o++)E.parent().hasClass("ta-bind")&&3===F[o].nodeType&&(v=angular.element("<"+g+">"),v[0].innerHTML=F[o].outerHTML,F[o]=v[0]),E.parent()[0].insertBefore(F[o],E[0]);E.remove()}return void a.setSelectionToElementEnd(p[0])}if("createlink"===k.toLowerCase()){var G='<a href="'+m+'" target="'+(n.a.target?n.a.target:"")+'">',H="</a>",I=a.getSelection();if(I.collapsed)a.insertHtml(G+m+H,j);else if(rangy.getSelection().getRangeAt(0).canSurroundContents()){var J=angular.element(G+H)[0];rangy.getSelection().getRangeAt(0).surroundContents(J)}return}if("inserthtml"===k.toLowerCase())return void a.insertHtml(m,j)}}try{c[0].execCommand(k,l,m)}catch(w){}}}}]).service("taSelection",["$window","$document","taDOM",function(a,b,c){var e=b[0],f=a.rangy,h=function(a,b){return a.tagName&&a.tagName.match(/^br$/i)&&0===b&&!a.previousSibling?{element:a.parentNode,offset:0}:{element:a,offset:b}},i={getSelection:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer,c={start:h(a.startContainer,a.startOffset),end:h(a.endContainer,a.endOffset),collapsed:a.collapsed};return b=3===b.nodeType?b.parentNode:b,b.parentNode===c.start.element||b.parentNode===c.end.element?c.container=b.parentNode:c.container=b,c},getOnlySelectedElements:function(){var a=f.getSelection().getRangeAt(0),b=a.commonAncestorContainer;return b=3===b.nodeType?b.parentNode:b,a.getNodes([1],function(a){return a.parentNode===b})},getSelectionElement:function(){return i.getSelection().container},setSelection:function(a,b,c){var d=f.createRange();d.setStart(a,b),d.setEnd(a,c),f.getSelection().setSingleRange(d)},setSelectionBeforeElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionAfterElement:function(a){var b=f.createRange();b.selectNode(a),b.collapse(!1),f.getSelection().setSingleRange(b)},setSelectionToElementStart:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!0),f.getSelection().setSingleRange(b)},setSelectionToElementEnd:function(a){var b=f.createRange();b.selectNodeContents(a),b.collapse(!1),a.childNodes&&a.childNodes[a.childNodes.length-1]&&"br"===a.childNodes[a.childNodes.length-1].nodeName&&(b.startOffset=b.endOffset=b.startOffset-1),f.getSelection().setSingleRange(b)},insertHtml:function(a,b){var h,j,k,l,m,n,o,p=angular.element("<div>"+a+"</div>"),q=f.getSelection().getRangeAt(0),r=e.createDocumentFragment(),s=p[0].childNodes,t=!0;if(s.length>0){for(l=[],k=0;k<s.length;k++)"p"===s[k].nodeName.toLowerCase()&&""===s[k].innerHTML.trim()||3===s[k].nodeType&&""===s[k].nodeValue.trim()||(t=t&&!d.test(s[k].nodeName),l.push(s[k]));for(var u=0;u<l.length;u++)n=r.appendChild(l[u]);!t&&q.collapsed&&/^(|<br(|\/)>)$/i.test(q.startContainer.innerHTML)&&q.selectNode(q.startContainer)}else t=!0,n=r=e.createTextNode(a);if(t)q.deleteContents();else if(q.collapsed&&q.startContainer!==b)if(q.startContainer.innerHTML&&q.startContainer.innerHTML.match(/^<[^>]*>$/i))h=q.startContainer,1===q.startOffset?(q.setStartAfter(h),q.setEndAfter(h)):(q.setStartBefore(h),q.setEndBefore(h));else{if(3===q.startContainer.nodeType&&q.startContainer.parentNode!==b)for(h=q.startContainer.parentNode,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,q.startContainer,q.startOffset);!g.test(h.nodeName);){angular.element(h).after(j),h=h.parentNode;var v=j;j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,v)}else h=q.startContainer,j=h.cloneNode(),c.splitNodes(h.childNodes,h,j,void 0,void 0,q.startOffset);if(angular.element(h).after(j),q.setStartAfter(h),q.setEndAfter(h),/^(|<br(|\/)>)$/i.test(h.innerHTML.trim())&&(q.setStartBefore(h),q.setEndBefore(h),angular.element(h).remove()),/^(|<br(|\/)>)$/i.test(j.innerHTML.trim())&&angular.element(j).remove(),"li"===h.nodeName.toLowerCase()){for(o=e.createDocumentFragment(),m=0;m<r.childNodes.length;m++)p=angular.element("<li>"),c.transferChildNodes(r.childNodes[m],p[0]),c.transferNodeAttributes(r.childNodes[m],p[0]),o.appendChild(p[0]);r=o,n&&(n=r.childNodes[r.childNodes.length-1],n=n.childNodes[n.childNodes.length-1])}}else q.deleteContents();q.insertNode(r),n&&i.setSelectionToElementEnd(n)}};return i}]).service("taDOM",function(){var a={getByAttribute:function(b,c){var d=[],e=b.children();return e.length&&angular.forEach(e,function(b){d=d.concat(a.getByAttribute(angular.element(b),c))}),void 0!==b.attr(c)&&d.push(b),d},transferChildNodes:function(a,b){for(b.innerHTML="";a.childNodes.length>0;)b.appendChild(a.childNodes[0]);return b},splitNodes:function(b,c,d,e,f,g){if(!e&&isNaN(g))throw new Error("taDOM.splitNodes requires a splitNode or splitIndex");for(var h=document.createDocumentFragment(),i=document.createDocumentFragment(),j=0;b.length>0&&(isNaN(g)||g!==j)&&b[0]!==e;)h.appendChild(b[0]),j++;for(!isNaN(f)&&f>=0&&b[0]&&(h.appendChild(document.createTextNode(b[0].nodeValue.substring(0,f))),b[0].nodeValue=b[0].nodeValue.substring(f));b.length>0;)i.appendChild(b[0]);a.transferChildNodes(h,c),a.transferChildNodes(i,d)},transferNodeAttributes:function(a,b){for(var c=0;c<a.attributes.length;c++)b.setAttribute(a.attributes[c].name,a.attributes[c].value);return b}};return a}),angular.module("textAngular.validators",[]).directive("taMaxText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMaxText));if(isNaN(e))throw"Max text must be an integer";c.$observe("taMaxText",function(a){if(e=parseInt(a),isNaN(e))throw"Max text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMaxText=function(a){var b=angular.element("<div/>");return b.html(a),b.text().length<=e}}}}).directive("taMinText",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){var e=parseInt(a.$eval(c.taMinText));if(isNaN(e))throw"Min text must be an integer";c.$observe("taMinText",function(a){if(e=parseInt(a),isNaN(e))throw"Min text must be an integer";d.$dirty&&d.$validate()}),d.$validators.taMinText=function(a){var b=angular.element("<div/>");return b.html(a),!b.text().length||b.text().length>=e}}}}),angular.module("textAngular.taBind",["textAngular.factories","textAngular.DOM"]).service("_taBlankTest",[function(){var a=/<(a|abbr|acronym|bdi|bdo|big|cite|code|del|dfn|img|ins|kbd|label|map|mark|q|ruby|rp|rt|s|samp|time|tt|var)[^>]*(>|$)/i;return function(b){return function(c){if(!c)return!0;var d,e=/(^[^<]|>)[^<]/i.exec(c);return e?d=e.index:(c=c.toString().replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,"").replace(/="[^"]*"/i,""),d=c.indexOf(">")),c=c.trim().substring(d,d+100),/^[^<>]+$/i.test(c)?!1:0===c.length||c===b||/^>(\s|&nbsp;)*<\/[^>]+>$/gi.test(c)?!0:/>\s*[^\s<]/i.test(c)||a.test(c)?!1:!0}}}]).directive("taButton",[function(){return{link:function(a,b,c){b.attr("unselectable","on"),b.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1})}}}]).directive("taBind",["taSanitize","$timeout","$window","$document","taFixChrome","taBrowserTag","taSelection","taSelectableElements","taApplyCustomRenderers","taOptions","_taBlankTest","$parse","taDOM","textAngularManager",function(a,e,f,h,k,l,m,n,o,q,r,s,t,u){return{priority:2,require:["ngModel","?ngModelOptions"],link:function(l,v,w,x){function y(a){var b;return R.forEach(function(c){if(c.keyCode===a.keyCode){var d=(a.metaKey?O:0)+(a.ctrlKey?N:0)+(a.shiftKey?Q:0)+(a.altKey?P:0);if(c.forbiddenModifiers&d)return;c.mustHaveModifiers.every(function(a){return d&a})&&(b=c.specialKey)}}),b}var z,A,B,C,D=x[0],E=x[1]||{},F=void 0!==v.attr("contenteditable")&&v.attr("contenteditable"),G=F||"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase(),H=!1,I=!1,J=!1,K=w.taUnsafeSanitizer||q.disableSanitizer,L=/^(9|19|20|27|33|34|35|36|37|38|39|40|45|112|113|114|115|116|117|118|119|120|121|122|123|144|145)$/i,M=/^(8|13|32|46|59|61|107|109|173|186|187|188|189|190|191|192|219|220|221|222)$/i,N=1,O=2,P=4,Q=8,R=[{specialKey:"UndoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P,mustHaveModifiers:[O+N,Q],keyCode:90},{specialKey:"RedoKey",forbiddenModifiers:P+Q,mustHaveModifiers:[O+N],keyCode:89},{specialKey:"TabKey",forbiddenModifiers:O+Q+P+N,mustHaveModifiers:[],keyCode:9},{specialKey:"ShiftTabKey",forbiddenModifiers:O+P+N,mustHaveModifiers:[Q],keyCode:9}];void 0===w.taDefaultWrap&&(w.taDefaultWrap="p"),""===w.taDefaultWrap?(B="",C=void 0===b.ie?"<div><br></div>":b.ie>=11?"<p><br></p>":b.ie<=8?"<P>&nbsp;</P>":"<p>&nbsp;</p>"):(B=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+"></"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+"></"+w.taDefaultWrap+">",C=void 0===b.ie||b.ie>=11?"<"+w.taDefaultWrap+"><br></"+w.taDefaultWrap+">":b.ie<=8?"<"+w.taDefaultWrap.toUpperCase()+">&nbsp;</"+w.taDefaultWrap.toUpperCase()+">":"<"+w.taDefaultWrap+">&nbsp;</"+w.taDefaultWrap+">"),E.$options||(E.$options={});var S=r(C),T=function(a){if(S(a))return a;var b=angular.element("<div>"+a+"</div>");if(0===b.children().length)a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">";else{var c,e=b[0].childNodes,f=!1;for(c=0;c<e.length&&!(f=e[c].nodeName.toLowerCase().match(d));c++);if(f)for(a="",c=0;c<e.length;c++){var g=e[c],h=g.nodeName.toLowerCase();if("#comment"===h)a+="<!--"+g.nodeValue+"-->";else if("#text"===h){var i=g.textContent;a+=i.trim()?"<"+w.taDefaultWrap+">"+i+"</"+w.taDefaultWrap+">":i}else if(h.match(d))a+=g.outerHTML;else{var j=g.outerHTML||g.nodeValue;a+=""!==j.trim()?"<"+w.taDefaultWrap+">"+j+"</"+w.taDefaultWrap+">":j}}else a="<"+w.taDefaultWrap+">"+a+"</"+w.taDefaultWrap+">"}return a};w.taPaste&&(A=s(w.taPaste)),v.addClass("ta-bind");var U;l["$undoManager"+(w.id||"")]=D.$undoManager={_stack:[],_index:0,_max:1e3,push:function(a){return"undefined"==typeof a||null===a||"undefined"!=typeof this.current()&&null!==this.current()&&a===this.current()?a:(this._index<this._stack.length-1&&(this._stack=this._stack.slice(0,this._index+1)),this._stack.push(a),U&&e.cancel(U),this._stack.length>this._max&&this._stack.shift(),this._index=this._stack.length-1,a)},undo:function(){return this.setToIndex(this._index-1)},redo:function(){return this.setToIndex(this._index+1)},setToIndex:function(a){return 0>a||a>this._stack.length-1?void 0:(this._index=a,this.current())},current:function(){return this._stack[this._index]}};var V,W=l["$undoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.undo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},X=l["$redoTaBind"+(w.id||"")]=function(){if(!H&&F){var a=D.$undoManager.redo();"undefined"!=typeof a&&null!==a&&(ka(a),Z(a,!1),V&&e.cancel(V),V=e(function(){v[0].focus(),m.setSelectionToElementEnd(v[0])},1))}},Y=function(){if(F)return v[0].innerHTML;if(G)return v.val();throw"textAngular Error: attempting to update non-editable taBind"},Z=function(a,b,c){J=c||!1,("undefined"==typeof b||null===b)&&(b=!0&&F),("undefined"==typeof a||null===a)&&(a=Y()),S(a)?(""!==D.$viewValue&&D.$setViewValue(""),b&&""!==D.$undoManager.current()&&D.$undoManager.push("")):(ja(),D.$viewValue!==a&&(D.$setViewValue(a),b&&D.$undoManager.push(a))),D.$render()};l["updateTaBind"+(w.id||"")]=function(){H||Z(void 0,void 0,!0)};var $=function(b){return D.$oldViewValue=a(k(b),D.$oldViewValue,K)};if(v.attr("required")&&(D.$validators.required=function(a,b){return!S(a||b)}),D.$parsers.push($),D.$parsers.unshift(T),D.$formatters.push($),D.$formatters.unshift(T),D.$formatters.unshift(function(a){return D.$undoManager.push(a||"")}),G)if(l.events={},F){var _=!1,aa=function(b){if(b&&b.trim().length){if(b.match(/class=["']*Mso(Normal|List)/i)){var c=b.match(/<!--StartFragment-->([\s\S]*?)<!--EndFragment-->/i);c=c?c[1]:b,c=c.replace(/<o:p>[\s\S]*?<\/o:p>/gi,"").replace(/class=(["']|)MsoNormal(["']|)/gi,"");var d=angular.element("<div>"+c+"</div>"),f=angular.element("<div></div>"),g={element:null,lastIndent:[],lastLi:null,isUl:!1};g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0};for(var h=function(a){g.isUl=a,g.element=angular.element(a?"<ul>":"<ol>"),g.lastIndent=[],g.lastIndent.peek=function(){var a=this.length;return a>0?this[a-1]:void 0},g.lastLevelMatch=null},i=0;i<=d[0].childNodes.length;i++)if(d[0].childNodes[i]&&"#text"!==d[0].childNodes[i].nodeName&&"p"===d[0].childNodes[i].tagName.toLowerCase()){var j=angular.element(d[0].childNodes[i]),k=(j.attr("class")||"").match(/MsoList(Bullet|Number|Paragraph)(CxSp(First|Middle|Last)|)/i);if(k){if(j[0].childNodes.length<2||j[0].childNodes[1].childNodes.length<1)continue;var n="bullet"===k[1].toLowerCase()||"number"!==k[1].toLowerCase()&&!(/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].innerHTML)||/^[^0-9a-z<]*[0-9a-z]+[^0-9a-z<>]</i.test(j[0].childNodes[1].childNodes[0].innerHTML)),o=(j.attr("style")||"").match(/margin-left:([\-\.0-9]*)/i),p=parseFloat(o?o[1]:0),q=(j.attr("style")||"").match(/mso-list:l([0-9]+) level([0-9]+) lfo[0-9+]($|;)/i);if(q&&q[2]&&(p=parseInt(q[2])),q&&(!g.lastLevelMatch||q[1]!==g.lastLevelMatch[1])||!k[3]||"first"===k[3].toLowerCase()||null===g.lastIndent.peek()||g.isUl!==n&&g.lastIndent.peek()===p)h(n),f.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()<p)g.element=angular.element(n?"<ul>":"<ol>"),g.lastLi.append(g.element);else if(null!=g.lastIndent.peek()&&g.lastIndent.peek()>p){for(;null!=g.lastIndent.peek()&&g.lastIndent.peek()>p;)if("li"!==g.element.parent()[0].tagName.toLowerCase()){if(!/[uo]l/i.test(g.element.parent()[0].tagName.toLowerCase()))break;g.element=g.element.parent(),g.lastIndent.pop()}else g.element=g.element.parent();g.isUl="ul"===g.element[0].tagName.toLowerCase(),n!==g.isUl&&(h(n),f.append(g.element))}g.lastLevelMatch=q,p!==g.lastIndent.peek()&&g.lastIndent.push(p),g.lastLi=angular.element("<li>"),g.element.append(g.lastLi),g.lastLi.html(j.html().replace(/<!(--|)\[if !supportLists\](--|)>[\s\S]*?<!(--|)\[endif\](--|)>/gi,"")),j.remove()}else h(!1),f.append(j)}var r=function(a){a=angular.element(a);for(var b=a[0].childNodes.length-1;b>=0;b--)a.after(a[0].childNodes[b]);a.remove()};angular.forEach(f.find("span"),function(a){a.removeAttribute("lang"),a.attributes.length<=0&&r(a)}),angular.forEach(f.find("font"),r),b=f.html()}else{if(b=b.replace(/<(|\/)meta[^>]*?>/gi,""),b.match(/<[^>]*?(ta-bind)[^>]*?>/)){if(b.match(/<[^>]*?(text-angular)[^>]*?>/)){var s=angular.element("<div>"+b+"</div>");s.find("textarea").remove();for(var u=t.getByAttribute(s,"ta-bind"),w=0;w<u.length;w++){for(var x=u[w][0].parentNode.parentNode,y=0;y<u[w][0].childNodes.length;y++)x.parentNode.insertBefore(u[w][0].childNodes[y],x);x.parentNode.removeChild(x)}b=s.html().replace('<br class="Apple-interchange-newline">',"")}}else b.match(/^<span/)&&(b.match(/<span class=(\"Apple-converted-space\"|\'Apple-converted-space\')>.<\/span>/gi)||(b=b.replace(/<(|\/)span[^>]*?>/gi,"")));b=b.replace(/<br class="Apple-interchange-newline"[^>]*?>/gi,"").replace(/<span class="Apple-converted-space">( |&nbsp;)<\/span>/gi,"&nbsp;")}/<li(\s.*)?>/i.test(b)&&/(<ul(\s.*)?>|<ol(\s.*)?>).*<li(\s.*)?>/i.test(b)===!1&&(b=b.replace(/<li(\s.*)?>.*<\/li(\s.*)?>/i,"<ul>$&</ul>")),b=b.replace(/^[ |\u00A0]+/gm,function(a){for(var b="",c=0;c<a.length;c++)b+="&nbsp;";return b}).replace(/\n|\r\n|\r/g,"<br />").replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),A&&(b=A(l,{$html:b})||b),b=a(b,"",K),m.insertHtml(b,v[0]),e(function(){D.$setViewValue(Y()),_=!1,v.removeClass("processing-paste")},0)}else _=!1,v.removeClass("processing-paste")};v.on("paste",l.events.paste=function(a,b){if(b&&angular.extend(a,b),H||_)return a.stopPropagation(),a.preventDefault(),!1;_=!0,v.addClass("processing-paste");var c,d=(a.originalEvent||a).clipboardData;if(d&&d.getData&&d.types.length>0){for(var g="",i=0;i<d.types.length;i++)g+=" "+d.types[i];return/text\/html/i.test(g)?c=d.getData("text/html"):/text\/plain/i.test(g)&&(c=d.getData("text/plain")),aa(c),a.stopPropagation(),a.preventDefault(),!1}var j=f.rangy.saveSelection(),k=angular.element('<div class="ta-hidden-input" contenteditable="true"></div>');h.find("body").append(k),k[0].focus(),e(function(){f.rangy.restoreSelection(j),aa(k[0].innerHTML),v[0].focus(),k.remove()},0)}),v.on("cut",l.events.cut=function(a){H?a.preventDefault():e(function(){D.$setViewValue(Y())},0)}),v.on("keydown",l.events.keydown=function(a,b){b&&angular.extend(a,b),a.specialKey=y(a);var c;if(q.keyMappings.forEach(function(b){a.specialKey===b.commandKeyCode&&(a.specialKey=void 0),b.testForKey(a)&&(c=b.commandKeyCode),("UndoKey"===b.commandKeyCode||"RedoKey"===b.commandKeyCode)&&(b.enablePropagation||a.preventDefault())}),"undefined"!=typeof c&&(a.specialKey=c),"undefined"==typeof a.specialKey||"UndoKey"===a.specialKey&&"RedoKey"===a.specialKey||(a.preventDefault(),u.sendKeyCommand(l,a)),!H&&("UndoKey"===a.specialKey&&(W(),a.preventDefault()),"RedoKey"===a.specialKey&&(X(),a.preventDefault()),13===a.keyCode&&!a.shiftKey)){var d,e=m.getSelectionElement();if(!e.tagName.match(g))return;var f=angular.element(B);if(/^<br(|\/)>$/i.test(e.innerHTML.trim())&&"blockquote"===e.parentNode.tagName.toLowerCase()&&!e.nextSibling){d=angular.element(e);var h=d.parent();h.after(f),d.remove(),0===h.children().length&&h.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault()}else/^<[^>]+><br(|\/)><\/[^>]+>$/i.test(e.innerHTML.trim())&&"blockquote"===e.tagName.toLowerCase()&&(d=angular.element(e),d.after(f),d.remove(),m.setSelectionToElementStart(f[0]),a.preventDefault())}});var ba;if(v.on("keyup",l.events.keyup=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=m.getSelection();return void(c.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0]))}if(U&&e.cancel(U),!H&&!L.test(a.keyCode)){if(""!==B&&13===a.keyCode&&!a.shiftKey){for(var d=m.getSelectionElement();!d.tagName.match(g)&&d!==v[0];)d=d.parentNode;if(d.tagName.toLowerCase()!==w.taDefaultWrap&&"li"!==d.tagName.toLowerCase()&&(""===d.innerHTML.trim()||"<br>"===d.innerHTML.trim())){var f=angular.element(B);angular.element(d).replaceWith(f),m.setSelectionToElementStart(f[0])}}var h=Y();""!==B&&""===h.trim()?(ka(B),m.setSelectionToElementStart(v.children()[0])):"<"!==h.substring(0,1)&&""!==w.taDefaultWrap;var i=z!==a.keyCode&&M.test(a.keyCode);ba&&e.cancel(ba),ba=e(function(){Z(h,i,!0)},E.$options.debounce||400),i||(U=e(function(){D.$undoManager.push(h)},250)),z=a.keyCode}}),v.on("blur",l.events.blur=function(){I=!1,H?(J=!0,D.$render()):Z(void 0,void 0,!0)}),w.placeholder&&(b.ie>8||void 0===b.ie)){var ca;if(!w.id)throw"textAngular Error: An unique ID is required for placeholders to work";ca=i("#"+w.id+".placeholder-text:before",'content: "'+w.placeholder+'"'),l.$on("$destroy",function(){j(ca)})}v.on("focus",l.events.focus=function(){I=!0,v.removeClass("placeholder-text"),ja()}),v.on("mouseup",l.events.mouseup=function(){var a=m.getSelection();a.start.element===v[0]&&v.children().length&&m.setSelectionToElementStart(v.children()[0])}),v.on("mousedown",l.events.mousedown=function(a,b){b&&angular.extend(a,b),a.stopPropagation()})}else{v.on("change blur",l.events.change=l.events.blur=function(){H||D.$setViewValue(Y())}),v.on("keydown",l.events.keydown=function(a,b){if(b&&angular.extend(a,b),9===a.keyCode){var c=this.selectionStart,d=this.selectionEnd,e=v.val();if(a.shiftKey){var f=e.lastIndexOf("\n",c),g=e.lastIndexOf("	",c);-1!==g&&g>=f&&(v.val(e.substring(0,g)+e.substring(g+1)),this.selectionStart=this.selectionEnd=c-1)}else v.val(e.substring(0,c)+"	"+e.substring(d)),this.selectionStart=this.selectionEnd=c+1;a.preventDefault()}});var da=function(a,b){for(var c="",d=0;b>d;d++)c+=a;return c},ea=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},fa=function(a,b){var c="",d=a.childNodes;return b++,c+=da("	",b-1)+a.outerHTML.substring(0,4),ea(d,function(a,d){var e=d.nodeName.toLowerCase();return"#comment"===e?void(c+="<!--"+d.nodeValue+"-->"):"#text"===e?void(c+=d.textContent):void(d.outerHTML&&(c+="ul"===e||"ol"===e?"\n"+fa(d,b):"\n"+da("	",b)+d.outerHTML))}),c+="\n"+da("	",b-1)+a.outerHTML.substring(a.outerHTML.lastIndexOf("<"))};D.$formatters.unshift(function(a){var b=angular.element("<div>"+a+"</div>")[0].childNodes;return b.length>0&&(a="",ea(b,function(b,c){var d=c.nodeName.toLowerCase();return"#comment"===d?void(a+="<!--"+c.nodeValue+"-->"):"#text"===d?void(a+=c.textContent):void(c.outerHTML&&(a.length>0&&(a+="\n"),a+="ul"===d||"ol"===d?""+fa(c,0):""+c.outerHTML))})),a})}var ga,ha=function(a){return l.$emit("ta-element-select",this),a.preventDefault(),!1},ia=function(a,b){if(b&&angular.extend(a,b),!p&&!H){p=!0;var c;c=a.originalEvent?a.originalEvent.dataTransfer:a.dataTransfer,l.$emit("ta-drop-event",this,a,c),e(function(){p=!1,Z(void 0,void 0,!0)},100)}},ja=l["reApplyOnSelectorHandlers"+(w.id||"")]=function(){H||angular.forEach(n,function(a){v.find(a).off("click",ha).on("click",ha)})},ka=function(a){v[0].innerHTML=a},la=!1;D.$render=function(){if(!la){la=!0;var a=D.$viewValue||"";J||(F&&I&&(v.removeClass("placeholder-text"),ga&&e.cancel(ga),ga=e(function(){I||(v[0].focus(),m.setSelectionToElementEnd(v.children()[v.children().length-1])),ga=void 0},1)),F?(ka(w.placeholder?""===a?B:a:""===a?B:a),H?v.off("drop",ia):(ja(),v.on("drop",ia))):"textarea"!==v[0].tagName.toLowerCase()&&"input"!==v[0].tagName.toLowerCase()?ka(o(a)):v.val(a)),F&&w.placeholder&&(""===a?I?v.removeClass("placeholder-text"):v.addClass("placeholder-text"):v.removeClass("placeholder-text")),la=J=!1}},w.taReadonly&&(H=l.$eval(w.taReadonly),H?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable")):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true")),l.$watch(w.taReadonly,function(a,b){b!==a&&(a?(v.addClass("ta-readonly"),("textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase())&&v.attr("disabled","disabled"),void 0!==v.attr("contenteditable")&&v.attr("contenteditable")&&v.removeAttr("contenteditable"),angular.forEach(n,function(a){
v.find(a).on("click",ha)}),v.off("drop",ia)):(v.removeClass("ta-readonly"),"textarea"===v[0].tagName.toLowerCase()||"input"===v[0].tagName.toLowerCase()?v.removeAttr("disabled"):F&&v.attr("contenteditable","true"),angular.forEach(n,function(a){v.find(a).off("click",ha)}),v.on("drop",ia)),H=a)})),F&&!H&&(angular.forEach(n,function(a){v.find(a).on("click",ha)}),v.on("drop",ia),v.on("blur",function(){b.webkit&&(c=!0)}))}}}]);var p=!1,q=angular.module("textAngular",["ngSanitize","textAngularSetup","textAngular.factories","textAngular.DOM","textAngular.validators","textAngular.taBind"]);q.config([function(){angular.forEach(e,function(a,b){delete e[b]})}]),q.run([function(){if("function"==typeof define&&define.amd)define(function(a){window.rangy=a("rangy"),window.rangy.saveSelection=a("rangy/lib/rangy-selectionsaverestore")});else if("function"==typeof require&&"undefined"!=typeof module&&"object"==typeof a)window.rangy=require("rangy"),window.rangy.saveSelection=require("rangy/lib/rangy-selectionsaverestore");else{if(!window.rangy)throw"rangy-core.js and rangy-selectionsaverestore.js are required for textAngular to work correctly, rangy-core is not yet loaded.";if(window.rangy.init(),!window.rangy.saveSelection)throw"rangy-selectionsaverestore.js is required for textAngular to work correctly."}}]),q.directive("textAngular",["$compile","$timeout","taOptions","taSelection","taExecCommand","textAngularManager","$window","$document","$animate","$log","$q","$parse",function(a,b,c,d,e,f,g,h,i,j,k,l){return{require:"?ngModel",scope:{},restrict:"EA",priority:2,link:function(m,n,o,p){var q,r,s,t,u,v,w,x,y,z,A,B=o.serial?o.serial:Math.floor(1e16*Math.random());m._name=o.name?o.name:"textAngularEditor"+B;var C=function(a,c,d){b(function(){var b=function(){a.off(c,b),d.apply(this,arguments)};a.on(c,b)},100)};if(y=e(o.taDefaultWrap),angular.extend(m,angular.copy(c),{wrapSelection:function(a,b,c){"undo"===a.toLowerCase()?m["$undoTaBindtaTextElement"+B]():"redo"===a.toLowerCase()?m["$redoTaBindtaTextElement"+B]():(y(a,!1,b,m.defaultTagAttributes),c&&m["reApplyOnSelectorHandlerstaTextElement"+B](),m.displayElements.text[0].focus())},showHtml:m.$eval(o.taShowHtml)||!1}),o.taFocussedClass&&(m.classes.focussed=o.taFocussedClass),o.taTextEditorClass&&(m.classes.textEditor=o.taTextEditorClass),o.taHtmlEditorClass&&(m.classes.htmlEditor=o.taHtmlEditorClass),o.taDefaultTagAttributes)try{angular.extend(m.defaultTagAttributes,angular.fromJson(o.taDefaultTagAttributes))}catch(D){j.error(D)}o.taTextEditorSetup&&(m.setup.textEditorSetup=m.$parent.$eval(o.taTextEditorSetup)),o.taHtmlEditorSetup&&(m.setup.htmlEditorSetup=m.$parent.$eval(o.taHtmlEditorSetup)),o.taFileDrop?m.fileDropHandler=m.$parent.$eval(o.taFileDrop):m.fileDropHandler=m.defaultFileDropHandler,w=n[0].innerHTML,n[0].innerHTML="",m.displayElements={forminput:angular.element("<input type='hidden' tabindex='-1' style='display: none;'>"),html:angular.element("<textarea></textarea>"),text:angular.element("<div></div>"),scrollWindow:angular.element("<div class='ta-scroll-window'></div>"),popover:angular.element('<div class="popover fade bottom" style="max-width: none; width: 305px;"></div>'),popoverArrow:angular.element('<div class="arrow"></div>'),popoverContainer:angular.element('<div class="popover-content"></div>'),resize:{overlay:angular.element('<div class="ta-resizer-handle-overlay"></div>'),background:angular.element('<div class="ta-resizer-handle-background"></div>'),anchors:[angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-tr"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-bl"></div>'),angular.element('<div class="ta-resizer-handle-corner ta-resizer-handle-corner-br"></div>')],info:angular.element('<div class="ta-resizer-handle-info"></div>')}},m.displayElements.popover.append(m.displayElements.popoverArrow),m.displayElements.popover.append(m.displayElements.popoverContainer),m.displayElements.scrollWindow.append(m.displayElements.popover),m.displayElements.popover.on("mousedown",function(a,b){return b&&angular.extend(a,b),a.preventDefault(),!1}),m.showPopover=function(a){m.displayElements.popover.css("display","block"),m.reflowPopover(a),i.addClass(m.displayElements.popover,"in"),C(h.find("body"),"click keyup",function(){m.hidePopover()})},m.reflowPopover=function(a){m.displayElements.text[0].offsetHeight-51>a[0].offsetTop?(m.displayElements.popover.css("top",a[0].offsetTop+a[0].offsetHeight+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("top").addClass("bottom")):(m.displayElements.popover.css("top",a[0].offsetTop-54+m.displayElements.scrollWindow[0].scrollTop+"px"),m.displayElements.popover.removeClass("bottom").addClass("top"));var b=m.displayElements.text[0].offsetWidth-m.displayElements.popover[0].offsetWidth,c=a[0].offsetLeft+a[0].offsetWidth/2-m.displayElements.popover[0].offsetWidth/2;m.displayElements.popover.css("left",Math.max(0,Math.min(b,c))+"px"),m.displayElements.popoverArrow.css("margin-left",Math.min(c,Math.max(0,c-b))-11+"px")},m.hidePopover=function(){m.displayElements.popover.css("display",""),m.displayElements.popoverContainer.attr("style",""),m.displayElements.popoverContainer.attr("class","popover-content"),m.displayElements.popover.removeClass("in")},m.displayElements.resize.overlay.append(m.displayElements.resize.background),angular.forEach(m.displayElements.resize.anchors,function(a){m.displayElements.resize.overlay.append(a)}),m.displayElements.resize.overlay.append(m.displayElements.resize.info),m.displayElements.scrollWindow.append(m.displayElements.resize.overlay),m.reflowResizeOverlay=function(a){a=angular.element(a)[0],m.displayElements.resize.overlay.css({display:"block",left:a.offsetLeft-5+"px",top:a.offsetTop-5+"px",width:a.offsetWidth+10+"px",height:a.offsetHeight+10+"px"}),m.displayElements.resize.info.text(a.offsetWidth+" x "+a.offsetHeight)},m.showResizeOverlay=function(a){var b=h.find("body");z=function(c){var d={width:parseInt(a.attr("width")),height:parseInt(a.attr("height")),x:c.clientX,y:c.clientY};(void 0===d.width||isNaN(d.width))&&(d.width=a[0].offsetWidth),(void 0===d.height||isNaN(d.height))&&(d.height=a[0].offsetHeight),m.hidePopover();var e=d.height/d.width,f=function(b){function c(a){return Math.round(Math.max(0,a))}var f={x:Math.max(0,d.width+(b.clientX-d.x)),y:Math.max(0,d.height+(b.clientY-d.y))},g=void 0!==o.taResizeForceAspectRatio,h=o.taResizeMaintainAspectRatio,i=g||h&&!b.shiftKey;if(i){var j=f.y/f.x;f.x=e>j?f.x:f.y/e,f.y=e>j?f.x*e:f.y}var k=angular.element(a);k.css("height",c(f.y)+"px"),k.css("width",c(f.x)+"px"),m.reflowResizeOverlay(a)};b.on("mousemove",f),C(b,"mouseup",function(c){c.preventDefault(),c.stopPropagation(),b.off("mousemove",f),m.showPopover(a)}),c.stopPropagation(),c.preventDefault()},m.displayElements.resize.anchors[3].off("mousedown"),m.displayElements.resize.anchors[3].on("mousedown",z),m.reflowResizeOverlay(a),C(b,"click",function(){m.hideResizeOverlay()})},m.hideResizeOverlay=function(){m.displayElements.resize.anchors[3].off("mousedown",z),m.displayElements.resize.overlay.css("display","")},m.setup.htmlEditorSetup(m.displayElements.html),m.setup.textEditorSetup(m.displayElements.text),m.displayElements.html.attr({id:"taHtmlElement"+B,"ng-show":"showHtml","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.text.attr({id:"taTextElement"+B,contentEditable:"true","ta-bind":"ta-bind","ng-model":"html","ng-model-options":n.attr("ng-model-options")}),m.displayElements.scrollWindow.attr({"ng-hide":"showHtml"}),o.taDefaultWrap&&m.displayElements.text.attr("ta-default-wrap",o.taDefaultWrap),o.taUnsafeSanitizer&&(m.displayElements.text.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer),m.displayElements.html.attr("ta-unsafe-sanitizer",o.taUnsafeSanitizer)),m.displayElements.scrollWindow.append(m.displayElements.text),n.append(m.displayElements.scrollWindow),n.append(m.displayElements.html),m.displayElements.forminput.attr("name",m._name),n.append(m.displayElements.forminput),o.tabindex&&(n.removeAttr("tabindex"),m.displayElements.text.attr("tabindex",o.tabindex),m.displayElements.html.attr("tabindex",o.tabindex)),o.placeholder&&(m.displayElements.text.attr("placeholder",o.placeholder),m.displayElements.html.attr("placeholder",o.placeholder)),o.taDisabled&&(m.displayElements.text.attr("ta-readonly","disabled"),m.displayElements.html.attr("ta-readonly","disabled"),m.disabled=m.$parent.$eval(o.taDisabled),m.$parent.$watch(o.taDisabled,function(a){m.disabled=a,m.disabled?n.addClass(m.classes.disabled):n.removeClass(m.classes.disabled)})),o.taPaste&&(m._pasteHandler=function(a){return l(o.taPaste)(m.$parent,{$html:a})},m.displayElements.text.attr("ta-paste","_pasteHandler($html)")),a(m.displayElements.scrollWindow)(m),a(m.displayElements.html)(m),m.updateTaBindtaTextElement=m["updateTaBindtaTextElement"+B],m.updateTaBindtaHtmlElement=m["updateTaBindtaHtmlElement"+B],n.addClass("ta-root"),m.displayElements.scrollWindow.addClass("ta-text ta-editor "+m.classes.textEditor),m.displayElements.html.addClass("ta-html ta-editor "+m.classes.htmlEditor),m._actionRunning=!1;var E=!1;if(m.startAction=function(){return m._actionRunning=!0,E=g.rangy.saveSelection(),function(){E&&g.rangy.restoreSelection(E)}},m.endAction=function(){m._actionRunning=!1,E&&(m.showHtml?m.displayElements.html[0].focus():m.displayElements.text[0].focus(),g.rangy.removeMarkers(E)),E=!1,m.updateSelectedStyles(),m.showHtml||m["updateTaBindtaTextElement"+B]()},u=function(){m.focussed=!0,n.addClass(m.classes.focussed),x.focus(),n.triggerHandler("focus")},m.displayElements.html.on("focus",u),m.displayElements.text.on("focus",u),v=function(a){return m._actionRunning||h[0].activeElement===m.displayElements.html[0]||h[0].activeElement===m.displayElements.text[0]||(n.removeClass(m.classes.focussed),x.unfocus(),b(function(){m._bUpdateSelectedStyles=!1,n.triggerHandler("blur"),m.focussed=!1},0)),a.preventDefault(),!1},m.displayElements.html.on("blur",v),m.displayElements.text.on("blur",v),m.displayElements.text.on("paste",function(a){n.triggerHandler("paste",a)}),m.queryFormatBlockState=function(a){return!m.showHtml&&a.toLowerCase()===h[0].queryCommandValue("formatBlock").toLowerCase()},m.queryCommandState=function(a){return m.showHtml?"":h[0].queryCommandState(a)},m.switchView=function(){m.showHtml=!m.showHtml,i.enabled(!1,m.displayElements.html),i.enabled(!1,m.displayElements.text),m.showHtml?b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.html[0].focus()},100):b(function(){return i.enabled(!0,m.displayElements.html),i.enabled(!0,m.displayElements.text),m.displayElements.text[0].focus()},100)},o.ngModel){var F=!0;p.$render=function(){if(F){F=!1;var a=m.$parent.$eval(o.ngModel);void 0!==a&&null!==a||!w||""===w||p.$setViewValue(w)}m.displayElements.forminput.val(p.$viewValue),m.html=p.$viewValue||""},n.attr("required")&&(p.$validators.required=function(a,b){var c=a||b;return!(!c||""===c.trim())})}else m.displayElements.forminput.val(w),m.html=w;if(m.$watch("html",function(a,b){a!==b&&(o.ngModel&&p.$viewValue!==a&&p.$setViewValue(a),m.displayElements.forminput.val(a))}),o.taTargetToolbars)x=f.registerEditor(m._name,m,o.taTargetToolbars.split(","));else{var G=angular.element('<div text-angular-toolbar name="textAngularToolbar'+B+'">');o.taToolbar&&G.attr("ta-toolbar",o.taToolbar),o.taToolbarClass&&G.attr("ta-toolbar-class",o.taToolbarClass),o.taToolbarGroupClass&&G.attr("ta-toolbar-group-class",o.taToolbarGroupClass),o.taToolbarButtonClass&&G.attr("ta-toolbar-button-class",o.taToolbarButtonClass),o.taToolbarActiveButtonClass&&G.attr("ta-toolbar-active-button-class",o.taToolbarActiveButtonClass),o.taFocussedClass&&G.attr("ta-focussed-class",o.taFocussedClass),n.prepend(G),a(G)(m.$parent),x=f.registerEditor(m._name,m,["textAngularToolbar"+B])}m.$on("$destroy",function(){f.unregisterEditor(m._name),angular.element(window).off("blur")}),m.$on("ta-element-select",function(a,b){x.triggerElementSelect(a,b)&&m["reApplyOnSelectorHandlerstaTextElement"+B]()}),m.$on("ta-drop-event",function(a,c,d,e){m.displayElements.text[0].focus(),e&&e.files&&e.files.length>0?(angular.forEach(e.files,function(a){try{k.when(m.fileDropHandler(a,m.wrapSelection)||m.fileDropHandler!==m.defaultFileDropHandler&&k.when(m.defaultFileDropHandler(a,m.wrapSelection))).then(function(){m["updateTaBindtaTextElement"+B]()})}catch(b){j.error(b)}}),d.preventDefault(),d.stopPropagation()):b(function(){m["updateTaBindtaTextElement"+B]()},0)}),m._bUpdateSelectedStyles=!1,angular.element(window).on("blur",function(){m._bUpdateSelectedStyles=!1,m.focussed=!1}),m.updateSelectedStyles=function(){var a;A&&b.cancel(A),void 0!==(a=d.getSelectionElement())&&a.parentNode!==m.displayElements.text[0]?x.updateSelectedStyles(angular.element(a)):x.updateSelectedStyles(),m._bUpdateSelectedStyles&&(A=b(m.updateSelectedStyles,200))},q=function(){return m.focussed?void(m._bUpdateSelectedStyles||(m._bUpdateSelectedStyles=!0,m.$apply(function(){m.updateSelectedStyles()}))):void(m._bUpdateSelectedStyles=!1)},m.displayElements.html.on("keydown",q),m.displayElements.text.on("keydown",q),r=function(){m._bUpdateSelectedStyles=!1},m.displayElements.html.on("keyup",r),m.displayElements.text.on("keyup",r),s=function(a,b){b&&angular.extend(a,b),m.$apply(function(){return x.sendKeyCommand(a)?(m._bUpdateSelectedStyles||m.updateSelectedStyles(),a.preventDefault(),!1):void 0})},m.displayElements.html.on("keypress",s),m.displayElements.text.on("keypress",s),t=function(){m._bUpdateSelectedStyles=!1,m.$apply(function(){m.updateSelectedStyles()})},m.displayElements.html.on("mouseup",t),m.displayElements.text.on("mouseup",t)}}}]),q.service("textAngularManager",["taToolExecuteAction","taTools","taRegisterTool",function(a,b,c){var d={},e={};return{registerEditor:function(c,f,g){if(!c||""===c)throw"textAngular Error: An editor requires a name";if(!f)throw"textAngular Error: An editor requires a scope";if(e[c])throw'textAngular Error: An Editor with name "'+c+'" already exists';var h=[];return angular.forEach(g,function(a){d[a]&&h.push(d[a])}),e[c]={scope:f,toolbars:g,_registerToolbar:function(a){this.toolbars.indexOf(a.name)>=0&&h.push(a)},editorFunctions:{disable:function(){angular.forEach(h,function(a){a.disabled=!0})},enable:function(){angular.forEach(h,function(a){a.disabled=!1})},focus:function(){angular.forEach(h,function(a){a._parent=f,a.disabled=!1,a.focussed=!0,f.focussed=!0})},unfocus:function(){angular.forEach(h,function(a){a.disabled=!0,a.focussed=!1}),f.focussed=!1},updateSelectedStyles:function(a){angular.forEach(h,function(b){angular.forEach(b.tools,function(c){c.activeState&&(b._parent=f,c.active=c.activeState(a))})})},sendKeyCommand:function(c){var d=!1;return(c.ctrlKey||c.metaKey||c.specialKey)&&angular.forEach(b,function(b,e){if(b.commandKeyCode&&(b.commandKeyCode===c.which||b.commandKeyCode===c.specialKey))for(var g=0;g<h.length;g++)if(void 0!==h[g].tools[e]){a.call(h[g].tools[e],f),d=!0;break}}),d},triggerElementSelect:function(a,c){var d=function(a,b){for(var c=!0,d=0;d<b.length;d++)c=c&&a.attr(b[d]);return c},e=[],g={},i=!1;c=angular.element(c);var j=!1;if(angular.forEach(b,function(a,b){a.onElementSelect&&a.onElementSelect.element&&a.onElementSelect.element.toLowerCase()===c[0].tagName.toLowerCase()&&(!a.onElementSelect.filter||a.onElementSelect.filter(c))&&(j=j||angular.isArray(a.onElementSelect.onlyWithAttrs)&&d(c,a.onElementSelect.onlyWithAttrs),(!a.onElementSelect.onlyWithAttrs||d(c,a.onElementSelect.onlyWithAttrs))&&(g[b]=a))}),j?(angular.forEach(g,function(a,b){a.onElementSelect.onlyWithAttrs&&d(c,a.onElementSelect.onlyWithAttrs)&&e.push({name:b,tool:a})}),e.sort(function(a,b){return b.tool.onElementSelect.onlyWithAttrs.length-a.tool.onElementSelect.onlyWithAttrs.length})):angular.forEach(g,function(a,b){e.push({name:b,tool:a})}),e.length>0)for(var k=0;k<e.length;k++){for(var l=e[k].tool,m=e[k].name,n=0;n<h.length;n++)if(void 0!==h[n].tools[m]){l.onElementSelect.action.call(h[n].tools[m],a,c,f),i=!0;break}if(i)break}return i}}},e[c].editorFunctions},retrieveEditor:function(a){return e[a]},unregisterEditor:function(a){delete e[a]},registerToolbar:function(a){if(!a)throw"textAngular Error: A toolbar requires a scope";if(!a.name||""===a.name)throw"textAngular Error: A toolbar requires a name";if(d[a.name])throw'textAngular Error: A toolbar with name "'+a.name+'" already exists';d[a.name]=a,angular.forEach(e,function(b){b._registerToolbar(a)})},retrieveToolbar:function(a){return d[a]},retrieveToolbarsViaEditor:function(a){var b=[],c=this;return angular.forEach(this.retrieveEditor(a).toolbars,function(a){b.push(c.retrieveToolbar(a))}),b},unregisterToolbar:function(a){delete d[a]},updateToolsDisplay:function(a){var b=this;angular.forEach(a,function(a,c){b.updateToolDisplay(c,a)})},resetToolsDisplay:function(){var a=this;angular.forEach(b,function(b,c){a.resetToolDisplay(c)})},updateToolDisplay:function(a,b){var c=this;angular.forEach(d,function(d,e){c.updateToolbarToolDisplay(e,a,b)})},resetToolDisplay:function(a){var b=this;angular.forEach(d,function(c,d){b.resetToolbarToolDisplay(d,a)})},updateToolbarToolDisplay:function(a,b,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(b,c)},resetToolbarToolDisplay:function(a,c){if(!d[a])throw'textAngular Error: No Toolbar with name "'+a+'" exists';d[a].updateToolDisplay(c,b[c],!0)},removeTool:function(a){delete b[a],angular.forEach(d,function(b){delete b.tools[a];for(var c=0;c<b.toolbar.length;c++){for(var d,e=0;e<b.toolbar[c].length;e++){if(b.toolbar[c][e]===a){d={group:c,index:e};break}if(void 0!==d)break}void 0!==d&&(b.toolbar[d.group].slice(d.index,1),b._$element.children().eq(d.group).children().eq(d.index).remove())}})},addTool:function(a,b,e,f){c(a,b),angular.forEach(d,function(c){c.addTool(a,b,e,f)})},addToolToToolbar:function(a,b,e,f,g){c(a,b),d[e].addTool(a,b,f,g)},refreshEditor:function(a){if(!e[a])throw'textAngular Error: No Editor with name "'+a+'" exists';e[a].scope.updateTaBindtaTextElement(),e[a].scope.$$phase||e[a].scope.$digest()},sendKeyCommand:function(a,b){angular.forEach(e,function(c){return c.editorFunctions.sendKeyCommand(b)?(a._bUpdateSelectedStyles||a.updateSelectedStyles(),b.preventDefault(),!1):void 0})}}}]),q.directive("textAngularToolbar",["$compile","textAngularManager","taOptions","taTools","taToolExecuteAction","$window",function(a,b,c,d,e,f){return{scope:{name:"@"},restrict:"EA",link:function(g,h,i){if(!g.name||""===g.name)throw"textAngular Error: A toolbar requires a name";angular.extend(g,angular.copy(c)),i.taToolbar&&(g.toolbar=g.$parent.$eval(i.taToolbar)),i.taToolbarClass&&(g.classes.toolbar=i.taToolbarClass),i.taToolbarGroupClass&&(g.classes.toolbarGroup=i.taToolbarGroupClass),i.taToolbarButtonClass&&(g.classes.toolbarButton=i.taToolbarButtonClass),i.taToolbarActiveButtonClass&&(g.classes.toolbarButtonActive=i.taToolbarActiveButtonClass),i.taFocussedClass&&(g.classes.focussed=i.taFocussedClass),g.disabled=!0,g.focussed=!1,g._$element=h,h[0].innerHTML="",h.addClass("ta-toolbar "+g.classes.toolbar),g.$watch("focussed",function(){g.focussed?h.addClass(g.classes.focussed):h.removeClass(g.classes.focussed)});var j=function(b,c){var d;if(d=b&&b.display?angular.element(b.display):angular.element("<button type='button'>"),b&&b["class"]?d.addClass(b["class"]):d.addClass(g.classes.toolbarButton),d.attr("name",c.name),d.attr("ta-button","ta-button"),d.attr("ng-disabled","isDisabled()"),d.attr("tabindex","-1"),d.attr("ng-click","executeAction()"),d.attr("ng-class","displayActiveToolClass(active)"),b&&b.tooltiptext&&d.attr("title",b.tooltiptext),b&&!b.display&&!c._display&&(d[0].innerHTML="",b.buttontext&&(d[0].innerHTML=b.buttontext),b.iconclass)){var e=angular.element("<i>"),f=d[0].innerHTML;e.addClass(b.iconclass),d[0].innerHTML="",d.append(e),f&&""!==f&&d.append("&nbsp;"+f)}return c._lastToolDefinition=angular.copy(b),a(d)(c)};g.tools={},g._parent={disabled:!0,showHtml:!1,queryFormatBlockState:function(){return!1},queryCommandState:function(){return!1}};var k={$window:f,$editor:function(){return g._parent},isDisabled:function(){return"function"!=typeof this.$eval("disabled")&&this.$eval("disabled")||this.$eval("disabled()")||"html"!==this.name&&this.$editor().showHtml||this.$parent.disabled||this.$editor().disabled},displayActiveToolClass:function(a){return a?g.classes.toolbarButtonActive:""},executeAction:e};angular.forEach(g.toolbar,function(a){var b=angular.element("<div>");b.addClass(g.classes.toolbarGroup),angular.forEach(a,function(a){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]),b.append(g.tools[a].$element)}),h.append(b)}),g.updateToolDisplay=function(a,b,c){var d=g.tools[a];if(d){if(d._lastToolDefinition&&!c&&(b=angular.extend({},d._lastToolDefinition,b)),null===b.buttontext&&null===b.iconclass&&null===b.display)throw'textAngular Error: Tool Definition for updating "'+a+'" does not have a valid display/iconclass/buttontext value';null===b.buttontext&&delete b.buttontext,null===b.iconclass&&delete b.iconclass,null===b.display&&delete b.display;var e=j(b,d);d.$element.replaceWith(e),d.$element=e}},g.addTool=function(a,b,c,e){g.tools[a]=angular.extend(g.$new(!0),d[a],k,{name:a}),g.tools[a].$element=j(d[a],g.tools[a]);var f;void 0===c&&(c=g.toolbar.length-1),f=angular.element(h.children()[c]),void 0===e?(f.append(g.tools[a].$element),g.toolbar[c][g.toolbar[c].length-1]=a):(f.children().eq(e).after(g.tools[a].$element),g.toolbar[c][e]=a)},b.registerToolbar(g),g.$on("$destroy",function(){b.unregisterToolbar(g.name)})}}}])}()}({},function(){return this}());
},{"rangy":2,"rangy/lib/rangy-selectionsaverestore":3}],6:[function(require,module,exports){

// tests against the current jqLite/jquery implementation if this can be an element
function validElementString(string){
	try{
		return angular.element(string).length !== 0;
	}catch(any){
		return false;
	}
}
// setup the global contstant functions for setting up the toolbar

// all tool definitions
var taTools = {};
/*
	A tool definition is an object with the following key/value parameters:
		action: [function(deferred, restoreSelection)]
				a function that is executed on clicking on the button - this will allways be executed using ng-click and will
				overwrite any ng-click value in the display attribute.
				The function is passed a deferred object ($q.defer()), if this is wanted to be used `return false;` from the action and
				manually call `deferred.resolve();` elsewhere to notify the editor that the action has finished.
				restoreSelection is only defined if the rangy library is included and it can be called as `restoreSelection()` to restore the users
				selection in the WYSIWYG editor.
		display: [string]?
				Optional, an HTML element to be displayed as the button. The `scope` of the button is the tool definition object with some additional functions
				If set this will cause buttontext and iconclass to be ignored
		class: [string]?
				Optional, if set will override the taOptions.classes.toolbarButton class.
		buttontext: [string]?
				if this is defined it will replace the contents of the element contained in the `display` element
		iconclass: [string]?
				if this is defined an icon (<i>) will be appended to the `display` element with this string as it's class
		tooltiptext: [string]?
				Optional, a plain text description of the action, used for the title attribute of the action button in the toolbar by default.
		activestate: [function(commonElement)]?
				this function is called on every caret movement, if it returns true then the class taOptions.classes.toolbarButtonActive
				will be applied to the `display` element, else the class will be removed
		disabled: [function()]?
				if this function returns true then the tool will have the class taOptions.classes.disabled applied to it, else it will be removed
	Other functions available on the scope are:
		name: [string]
				the name of the tool, this is the first parameter passed into taRegisterTool
		isDisabled: [function()]
				returns true if the tool is disabled, false if it isn't
		displayActiveToolClass: [function(boolean)]
				returns true if the tool is 'active' in the currently focussed toolbar
		onElementSelect: [Object]
				This object contains the following key/value pairs and is used to trigger the ta-element-select event
				element: [String]
					an element name, will only trigger the onElementSelect action if the tagName of the element matches this string
				filter: [function(element)]?
					an optional filter that returns a boolean, if true it will trigger the onElementSelect.
				action: [function(event, element, editorScope)]
					the action that should be executed if the onElementSelect function runs
*/
// name and toolDefinition to add into the tools available to be added on the toolbar
function registerTextAngularTool(name, toolDefinition){
	if(!name || name === '' || taTools.hasOwnProperty(name)) throw('textAngular Error: A unique name is required for a Tool Definition');
	if(
		(toolDefinition.display && (toolDefinition.display === '' || !validElementString(toolDefinition.display))) ||
		(!toolDefinition.display && !toolDefinition.buttontext && !toolDefinition.iconclass)
	)
		throw('textAngular Error: Tool Definition for "' + name + '" does not have a valid display/iconclass/buttontext value');
	taTools[name] = toolDefinition;
}

angular.module('textAngularSetup', [])
.constant('taRegisterTool', registerTextAngularTool)
.value('taTools', taTools)
// Here we set up the global display defaults, to set your own use a angular $provider#decorator.
.value('taOptions',  {
	//////////////////////////////////////////////////////////////////////////////////////
    // forceTextAngularSanitize
    // set false to allow the textAngular-sanitize provider to be replaced
    // with angular-sanitize or a custom provider.
	forceTextAngularSanitize: true,
	///////////////////////////////////////////////////////////////////////////////////////
	// keyMappings
	// allow customizable keyMappings for specialized key boards or languages
	//
	// keyMappings provides key mappings that are attached to a given commandKeyCode.
	// To modify a specific keyboard binding, simply provide function which returns true
	// for the event you wish to map to.
	// Or to disable a specific keyboard binding, provide a function which returns false.
	// Note: 'RedoKey' and 'UndoKey' are internally bound to the redo and undo functionality.
	// At present, the following commandKeyCodes are in use:
	// 98, 'TabKey', 'ShiftTabKey', 105, 117, 'UndoKey', 'RedoKey'
	//
	// To map to an new commandKeyCode, add a new key mapping such as:
	// {commandKeyCode: 'CustomKey', testForKey: function (event) {
	//  if (event.keyCode=57 && event.ctrlKey && !event.shiftKey && !event.altKey) return true;
	// } }
	// to the keyMappings. This example maps ctrl+9 to 'CustomKey'
	// Then where taRegisterTool(...) is called, add a commandKeyCode: 'CustomKey' and your
	// tool will be bound to ctrl+9.
	//
	// To disble one of the already bound commandKeyCodes such as 'RedoKey' or 'UndoKey' add:
	// {commandKeyCode: 'RedoKey', testForKey: function (event) { return false; } },
	// {commandKeyCode: 'UndoKey', testForKey: function (event) { return false; } },
	// to disable them.
	//
	keyMappings : [],
	toolbar: [
		['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
		['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
		['justifyLeft','justifyCenter','justifyRight','justifyFull','indent','outdent'],
		['html', 'insertImage', 'insertLink', 'insertVideo', 'wordcount', 'charcount']
	],
	classes: {
		focussed: "focussed",
		toolbar: "btn-toolbar",
		toolbarGroup: "btn-group",
		toolbarButton: "btn btn-default",
		toolbarButtonActive: "active",
		disabled: "disabled",
		textEditor: 'form-control',
		htmlEditor: 'form-control'
	},
	defaultTagAttributes : {
		a: {target:""}
	},
	setup: {
		// wysiwyg mode
		textEditorSetup: function($element){ /* Do some processing here */ },
		// raw html
		htmlEditorSetup: function($element){ /* Do some processing here */ }
	},
	defaultFileDropHandler:
		/* istanbul ignore next: untestable image processing */
		function(file, insertAction){
			var reader = new FileReader();
			if(file.type.substring(0, 5) === 'image'){
				reader.onload = function() {
					if(reader.result !== '') insertAction('insertImage', reader.result, true);
				};

				reader.readAsDataURL(file);
				// NOTE: For async procedures return a promise and resolve it when the editor should update the model.
				return true;
			}
			return false;
		}
})

// This is the element selector string that is used to catch click events within a taBind, prevents the default and $emits a 'ta-element-select' event
// these are individually used in an angular.element().find() call. What can go here depends on whether you have full jQuery loaded or just jQLite with angularjs.
// div is only used as div.ta-insert-video caught in filter.
.value('taSelectableElements', ['a','img'])

// This is an array of objects with the following options:
//				selector: <string> a jqLite or jQuery selector string
//				customAttribute: <string> an attribute to search for
//				renderLogic: <function(element)>
// Both or one of selector and customAttribute must be defined.
.value('taCustomRenderers', [
	{
		// Parse back out: '<div class="ta-insert-video" ta-insert-video src="' + urlLink + '" allowfullscreen="true" width="300" frameborder="0" height="250"></div>'
		// To correct video element. For now only support youtube
		selector: 'img',
		customAttribute: 'ta-insert-video',
		renderLogic: function(element){
			var iframe = angular.element('<iframe></iframe>');
			var attributes = element.prop("attributes");
			// loop through element attributes and apply them on iframe
			angular.forEach(attributes, function(attr) {
				iframe.attr(attr.name, attr.value);
			});
			iframe.attr('src', iframe.attr('ta-insert-video'));
			element.replaceWith(iframe);
		}
	}
])

.value('taTranslations', {
	// moved to sub-elements
	//toggleHTML: "Toggle HTML",
	//insertImage: "Please enter a image URL to insert",
	//insertLink: "Please enter a URL to insert",
	//insertVideo: "Please enter a youtube URL to embed",
	html: {
		tooltip: 'Toggle html / Rich Text'
	},
	// tooltip for heading - might be worth splitting
	heading: {
		tooltip: 'Heading '
	},
	p: {
		tooltip: 'Paragraph'
	},
	pre: {
		tooltip: 'Preformatted text'
	},
	ul: {
		tooltip: 'Unordered List'
	},
	ol: {
		tooltip: 'Ordered List'
	},
	quote: {
		tooltip: 'Quote/unquote selection or paragraph'
	},
	undo: {
		tooltip: 'Undo'
	},
	redo: {
		tooltip: 'Redo'
	},
	bold: {
		tooltip: 'Bold'
	},
	italic: {
		tooltip: 'Italic'
	},
	underline: {
		tooltip: 'Underline'
	},
	strikeThrough:{
		tooltip: 'Strikethrough'
	},
	justifyLeft: {
		tooltip: 'Align text left'
	},
	justifyRight: {
		tooltip: 'Align text right'
	},
	justifyFull: {
		tooltip: 'Justify text'
	},
	justifyCenter: {
		tooltip: 'Center'
	},
	indent: {
		tooltip: 'Increase indent'
	},
	outdent: {
		tooltip: 'Decrease indent'
	},
	clear: {
		tooltip: 'Clear formatting'
	},
	insertImage: {
		dialogPrompt: 'Please enter an image URL to insert',
		tooltip: 'Insert image',
		hotkey: 'the - possibly language dependent hotkey ... for some future implementation'
	},
	insertVideo: {
		tooltip: 'Insert video',
		dialogPrompt: 'Please enter a youtube URL to embed'
	},
	insertLink: {
		tooltip: 'Insert / edit link',
		dialogPrompt: "Please enter a URL to insert"
	},
	editLink: {
		reLinkButton: {
			tooltip: "Relink"
		},
		unLinkButton: {
			tooltip: "Unlink"
		},
		targetToggle: {
			buttontext: "Open in New Window"
		}
	},
	wordcount: {
		tooltip: 'Display words Count'
	},
		charcount: {
		tooltip: 'Display characters Count'
	}
})
.factory('taToolFunctions', ['$window','taTranslations', function($window, taTranslations) {
	return {
		imgOnSelectAction: function(event, $element, editorScope){
			// setup the editor toolbar
			// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic/display
			var finishEdit = function(){
				editorScope.updateTaBindtaTextElement();
				editorScope.hidePopover();
			};
			event.preventDefault();
			editorScope.displayElements.popover.css('width', '375px');
			var container = editorScope.displayElements.popoverContainer;
			container.empty();
			var buttonGroup = angular.element('<div class="btn-group" style="padding-right: 6px;">');
			var fullButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">100% </button>');
			fullButton.on('click', function(event){
				event.preventDefault();
				$element.css({
					'width': '100%',
					'height': ''
				});
				finishEdit();
			});
			var halfButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">50% </button>');
			halfButton.on('click', function(event){
				event.preventDefault();
				$element.css({
					'width': '50%',
					'height': ''
				});
				finishEdit();
			});
			var quartButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">25% </button>');
			quartButton.on('click', function(event){
				event.preventDefault();
				$element.css({
					'width': '25%',
					'height': ''
				});
				finishEdit();
			});
			var resetButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1">Reset</button>');
			resetButton.on('click', function(event){
				event.preventDefault();
				$element.css({
					width: '',
					height: ''
				});
				finishEdit();
			});
			buttonGroup.append(fullButton);
			buttonGroup.append(halfButton);
			buttonGroup.append(quartButton);
			buttonGroup.append(resetButton);
			container.append(buttonGroup);

			buttonGroup = angular.element('<div class="btn-group" style="padding-right: 6px;">');
			var floatLeft = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-left"></i></button>');
			floatLeft.on('click', function(event){
				event.preventDefault();
				// webkit
				$element.css('float', 'left');
				// firefox
				$element.css('cssFloat', 'left');
				// IE < 8
				$element.css('styleFloat', 'left');
				finishEdit();
			});
			var floatRight = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-right"></i></button>');
			floatRight.on('click', function(event){
				event.preventDefault();
				// webkit
				$element.css('float', 'right');
				// firefox
				$element.css('cssFloat', 'right');
				// IE < 8
				$element.css('styleFloat', 'right');
				finishEdit();
			});
			var floatNone = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-align-justify"></i></button>');
			floatNone.on('click', function(event){
				event.preventDefault();
				// webkit
				$element.css('float', '');
				// firefox
				$element.css('cssFloat', '');
				// IE < 8
				$element.css('styleFloat', '');
				finishEdit();
			});
			buttonGroup.append(floatLeft);
			buttonGroup.append(floatNone);
			buttonGroup.append(floatRight);
			container.append(buttonGroup);

			buttonGroup = angular.element('<div class="btn-group">');
			var remove = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" unselectable="on" tabindex="-1"><i class="fa fa-trash-o"></i></button>');
			remove.on('click', function(event){
				event.preventDefault();
				$element.remove();
				finishEdit();
			});
			buttonGroup.append(remove);
			container.append(buttonGroup);

			editorScope.showPopover($element);
			editorScope.showResizeOverlay($element);
		},
		aOnSelectAction: function(event, $element, editorScope){
			// setup the editor toolbar
			// Credit to the work at http://hackerwins.github.io/summernote/ for this editbar logic
			event.preventDefault();
			editorScope.displayElements.popover.css('width', '436px');
			var container = editorScope.displayElements.popoverContainer;
			container.empty();
			container.css('line-height', '28px');
			var link = angular.element('<a href="' + $element.attr('href') + '" target="_blank">' + $element.attr('href') + '</a>');
			link.css({
				'display': 'inline-block',
				'max-width': '200px',
				'overflow': 'hidden',
				'text-overflow': 'ellipsis',
				'white-space': 'nowrap',
				'vertical-align': 'middle'
			});
			container.append(link);
			var buttonGroup = angular.element('<div class="btn-group pull-right">');
			var reLinkButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="' + taTranslations.editLink.reLinkButton.tooltip + '"><i class="fa fa-edit icon-edit"></i></button>');
			reLinkButton.on('click', function(event){
				event.preventDefault();
				var urlLink = $window.prompt(taTranslations.insertLink.dialogPrompt, $element.attr('href'));
				if(urlLink && urlLink !== '' && urlLink !== 'http://'){
					$element.attr('href', urlLink);
					editorScope.updateTaBindtaTextElement();
				}
				editorScope.hidePopover();
			});
			buttonGroup.append(reLinkButton);
			var unLinkButton = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on" title="' + taTranslations.editLink.unLinkButton.tooltip + '"><i class="fa fa-unlink icon-unlink"></i></button>');
			// directly before this click event is fired a digest is fired off whereby the reference to $element is orphaned off
			unLinkButton.on('click', function(event){
				event.preventDefault();
				$element.replaceWith($element.contents());
				editorScope.updateTaBindtaTextElement();
				editorScope.hidePopover();
			});
			buttonGroup.append(unLinkButton);
			var targetToggle = angular.element('<button type="button" class="btn btn-default btn-sm btn-small" tabindex="-1" unselectable="on">' + taTranslations.editLink.targetToggle.buttontext + '</button>');
			if($element.attr('target') === '_blank'){
				targetToggle.addClass('active');
			}
			targetToggle.on('click', function(event){
				event.preventDefault();
				$element.attr('target', ($element.attr('target') === '_blank') ? '' : '_blank');
				targetToggle.toggleClass('active');
				editorScope.updateTaBindtaTextElement();
			});
			buttonGroup.append(targetToggle);
			container.append(buttonGroup);
			editorScope.showPopover($element);
		},
		extractYoutubeVideoId: function(url) {
			var re = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i;
			var match = url.match(re);
			return (match && match[1]) || null;
		}
	};
}])
.run(['taRegisterTool', '$window', 'taTranslations', 'taSelection', 'taToolFunctions', '$sanitize', 'taOptions', function(taRegisterTool, $window, taTranslations, taSelection, taToolFunctions, $sanitize, taOptions){
	// test for the version of $sanitize that is in use
	// You can disable this check by setting taOptions.textAngularSanitize == false
	var gv = {}; $sanitize('', gv);
	/* istanbul ignore next, throws error */
	if ((taOptions.forceTextAngularSanitize===true) && (gv.version !== 'taSanitize')) {
		throw angular.$$minErr('textAngular')("textAngularSetup", "The textAngular-sanitize provider has been replaced by another -- have you included angular-sanitize by mistake?");
	}
	taRegisterTool("html", {
		iconclass: 'fa fa-code',
		tooltiptext: taTranslations.html.tooltip,
		action: function(){
			this.$editor().switchView();
		},
		activeState: function(){
			return this.$editor().showHtml;
		}
	});
	// add the Header tools
	// convenience functions so that the loop works correctly
	var _retActiveStateFunction = function(q){
		return function(){ return this.$editor().queryFormatBlockState(q); };
	};
	var headerAction = function(){
		return this.$editor().wrapSelection("formatBlock", "<" + this.name.toUpperCase() +">");
	};
	angular.forEach(['h1','h2','h3','h4','h5','h6'], function(h){
		taRegisterTool(h.toLowerCase(), {
			buttontext: h.toUpperCase(),
			tooltiptext: taTranslations.heading.tooltip + h.charAt(1),
			action: headerAction,
			activeState: _retActiveStateFunction(h.toLowerCase())
		});
	});
	taRegisterTool('p', {
		buttontext: 'P',
		tooltiptext: taTranslations.p.tooltip,
		action: function(){
			return this.$editor().wrapSelection("formatBlock", "<P>");
		},
		activeState: function(){ return this.$editor().queryFormatBlockState('p'); }
	});
	// key: pre -> taTranslations[key].tooltip, taTranslations[key].buttontext
	taRegisterTool('pre', {
		buttontext: 'pre',
		tooltiptext: taTranslations.pre.tooltip,
		action: function(){
			return this.$editor().wrapSelection("formatBlock", "<PRE>");
		},
		activeState: function(){ return this.$editor().queryFormatBlockState('pre'); }
	});
	taRegisterTool('ul', {
		iconclass: 'fa fa-list-ul',
		tooltiptext: taTranslations.ul.tooltip,
		action: function(){
			return this.$editor().wrapSelection("insertUnorderedList", null);
		},
		activeState: function(){ return this.$editor().queryCommandState('insertUnorderedList'); }
	});
	taRegisterTool('ol', {
		iconclass: 'fa fa-list-ol',
		tooltiptext: taTranslations.ol.tooltip,
		action: function(){
			return this.$editor().wrapSelection("insertOrderedList", null);
		},
		activeState: function(){ return this.$editor().queryCommandState('insertOrderedList'); }
	});
	taRegisterTool('quote', {
		iconclass: 'fa fa-quote-right',
		tooltiptext: taTranslations.quote.tooltip,
		action: function(){
			return this.$editor().wrapSelection("formatBlock", "<BLOCKQUOTE>");
		},
		activeState: function(){ return this.$editor().queryFormatBlockState('blockquote'); }
	});
	taRegisterTool('undo', {
		iconclass: 'fa fa-undo',
		tooltiptext: taTranslations.undo.tooltip,
		action: function(){
			return this.$editor().wrapSelection("undo", null);
		}
	});
	taRegisterTool('redo', {
		iconclass: 'fa fa-repeat',
		tooltiptext: taTranslations.redo.tooltip,
		action: function(){
			return this.$editor().wrapSelection("redo", null);
		}
	});
	taRegisterTool('bold', {
		iconclass: 'fa fa-bold',
		tooltiptext: taTranslations.bold.tooltip,
		action: function(){
			return this.$editor().wrapSelection("bold", null);
		},
		activeState: function(){
			return this.$editor().queryCommandState('bold');
		},
		commandKeyCode: 98
	});
	taRegisterTool('justifyLeft', {
		iconclass: 'fa fa-align-left',
		tooltiptext: taTranslations.justifyLeft.tooltip,
		action: function(){
			return this.$editor().wrapSelection("justifyLeft", null);
		},
		activeState: function(commonElement){
			/* istanbul ignore next: */
			if (commonElement && commonElement.nodeName === '#document') return false;
			var result = false;
			if (commonElement)
				result =
					commonElement.css('text-align') === 'left' ||
					commonElement.attr('align') === 'left' ||
					(
						commonElement.css('text-align') !== 'right' &&
						commonElement.css('text-align') !== 'center' &&
						commonElement.css('text-align') !== 'justify' && !this.$editor().queryCommandState('justifyRight') && !this.$editor().queryCommandState('justifyCenter')
					) && !this.$editor().queryCommandState('justifyFull');
			result = result || this.$editor().queryCommandState('justifyLeft');
			return result;
		}
	});
	taRegisterTool('justifyRight', {
		iconclass: 'fa fa-align-right',
		tooltiptext: taTranslations.justifyRight.tooltip,
		action: function(){
			return this.$editor().wrapSelection("justifyRight", null);
		},
		activeState: function(commonElement){
			/* istanbul ignore next: */
			if (commonElement && commonElement.nodeName === '#document') return false;
			var result = false;
			if(commonElement) result = commonElement.css('text-align') === 'right';
			result = result || this.$editor().queryCommandState('justifyRight');
			return result;
		}
	});
	taRegisterTool('justifyFull', {
		iconclass: 'fa fa-align-justify',
		tooltiptext: taTranslations.justifyFull.tooltip,
		action: function(){
			return this.$editor().wrapSelection("justifyFull", null);
		},
		activeState: function(commonElement){
			var result = false;
			if(commonElement) result = commonElement.css('text-align') === 'justify';
			result = result || this.$editor().queryCommandState('justifyFull');
			return result;
		}
	});
	taRegisterTool('justifyCenter', {
		iconclass: 'fa fa-align-center',
		tooltiptext: taTranslations.justifyCenter.tooltip,
		action: function(){
			return this.$editor().wrapSelection("justifyCenter", null);
		},
		activeState: function(commonElement){
			/* istanbul ignore next: */
			if (commonElement && commonElement.nodeName === '#document') return false;
			var result = false;
			if(commonElement) result = commonElement.css('text-align') === 'center';
			result = result || this.$editor().queryCommandState('justifyCenter');
			return result;
		}
	});
	taRegisterTool('indent', {
		iconclass: 'fa fa-indent',
		tooltiptext: taTranslations.indent.tooltip,
		action: function(){
			return this.$editor().wrapSelection("indent", null);
		},
		activeState: function(){
			return this.$editor().queryFormatBlockState('blockquote');
		},
		commandKeyCode: 'TabKey'
	});
	taRegisterTool('outdent', {
		iconclass: 'fa fa-outdent',
		tooltiptext: taTranslations.outdent.tooltip,
		action: function(){
			return this.$editor().wrapSelection("outdent", null);
		},
		activeState: function(){
			return false;
		},
		commandKeyCode: 'ShiftTabKey'
	});
	taRegisterTool('italics', {
		iconclass: 'fa fa-italic',
		tooltiptext: taTranslations.italic.tooltip,
		action: function(){
			return this.$editor().wrapSelection("italic", null);
		},
		activeState: function(){
			return this.$editor().queryCommandState('italic');
		},
		commandKeyCode: 105
	});
	taRegisterTool('underline', {
		iconclass: 'fa fa-underline',
		tooltiptext: taTranslations.underline.tooltip,
		action: function(){
			return this.$editor().wrapSelection("underline", null);
		},
		activeState: function(){
			return this.$editor().queryCommandState('underline');
		},
		commandKeyCode: 117
	});
	taRegisterTool('strikeThrough', {
		iconclass: 'fa fa-strikethrough',
		tooltiptext: taTranslations.strikeThrough.tooltip,
		action: function(){
			return this.$editor().wrapSelection("strikeThrough", null);
		},
		activeState: function(){
			return document.queryCommandState('strikeThrough');
		}
	});
	taRegisterTool('clear', {
		iconclass: 'fa fa-ban',
		tooltiptext: taTranslations.clear.tooltip,
		action: function(deferred, restoreSelection){
			var i;
			this.$editor().wrapSelection("removeFormat", null);
			var possibleNodes = angular.element(taSelection.getSelectionElement());
			// remove lists
			var removeListElements = function(list){
				list = angular.element(list);
				var prevElement = list;
				angular.forEach(list.children(), function(liElem){
					var newElem = angular.element('<p></p>');
					newElem.html(angular.element(liElem).html());
					prevElement.after(newElem);
					prevElement = newElem;
				});
				list.remove();
			};
			angular.forEach(possibleNodes.find("ul"), removeListElements);
			angular.forEach(possibleNodes.find("ol"), removeListElements);
			if(possibleNodes[0].tagName.toLowerCase() === 'li'){
				var _list = possibleNodes[0].parentNode.childNodes;
				var _preLis = [], _postLis = [], _found = false;
				for(i = 0; i < _list.length; i++){
					if(_list[i] === possibleNodes[0]){
						_found = true;
					}else if(!_found) _preLis.push(_list[i]);
					else _postLis.push(_list[i]);
				}
				var _parent = angular.element(possibleNodes[0].parentNode);
				var newElem = angular.element('<p></p>');
				newElem.html(angular.element(possibleNodes[0]).html());
				if(_preLis.length === 0 || _postLis.length === 0){
					if(_postLis.length === 0) _parent.after(newElem);
					else _parent[0].parentNode.insertBefore(newElem[0], _parent[0]);

					if(_preLis.length === 0 && _postLis.length === 0) _parent.remove();
					else angular.element(possibleNodes[0]).remove();
				}else{
					var _firstList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
					var _secondList = angular.element('<'+_parent[0].tagName+'></'+_parent[0].tagName+'>');
					for(i = 0; i < _preLis.length; i++) _firstList.append(angular.element(_preLis[i]));
					for(i = 0; i < _postLis.length; i++) _secondList.append(angular.element(_postLis[i]));
					_parent.after(_secondList);
					_parent.after(newElem);
					_parent.after(_firstList);
					_parent.remove();
				}
				taSelection.setSelectionToElementEnd(newElem[0]);
			}
			// clear out all class attributes. These do not seem to be cleared via removeFormat
			var $editor = this.$editor();
			var recursiveRemoveClass = function(node){
				node = angular.element(node);
				if(node[0] !== $editor.displayElements.text[0]) node.removeAttr('class');
				angular.forEach(node.children(), recursiveRemoveClass);
			};
			angular.forEach(possibleNodes, recursiveRemoveClass);
			// check if in list. If not in list then use formatBlock option
			if(possibleNodes[0].tagName.toLowerCase() !== 'li' &&
				possibleNodes[0].tagName.toLowerCase() !== 'ol' &&
				possibleNodes[0].tagName.toLowerCase() !== 'ul') this.$editor().wrapSelection("formatBlock", "default");
			restoreSelection();
		}
	});


	taRegisterTool('insertImage', {
		iconclass: 'fa fa-picture-o',
		tooltiptext: taTranslations.insertImage.tooltip,
		action: function(){
			var imageLink;
			imageLink = $window.prompt(taTranslations.insertImage.dialogPrompt, 'http://');
			if(imageLink && imageLink !== '' && imageLink !== 'http://'){
				return this.$editor().wrapSelection('insertImage', imageLink, true);
			}
		},
		onElementSelect: {
			element: 'img',
			action: taToolFunctions.imgOnSelectAction
		}
	});
	taRegisterTool('insertVideo', {
		iconclass: 'fa fa-youtube-play',
		tooltiptext: taTranslations.insertVideo.tooltip,
		action: function(){
			var urlPrompt;
			urlPrompt = $window.prompt(taTranslations.insertVideo.dialogPrompt, 'https://');
			if (urlPrompt && urlPrompt !== '' && urlPrompt !== 'https://') {

				videoId = taToolFunctions.extractYoutubeVideoId(urlPrompt);

				/* istanbul ignore else: if it's invalid don't worry - though probably should show some kind of error message */
				if(videoId){
					// create the embed link
					var urlLink = "https://www.youtube.com/embed/" + videoId;
					// create the HTML
					// for all options see: http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
					// maxresdefault.jpg seems to be undefined on some.
					var embed = '<img class="ta-insert-video" src="https://img.youtube.com/vi/' + videoId + '/hqdefault.jpg" ta-insert-video="' + urlLink + '" contenteditable="false" allowfullscreen="true" frameborder="0" />';
					// insert
					return this.$editor().wrapSelection('insertHTML', embed, true);
				}
			}
		},
		onElementSelect: {
			element: 'img',
			onlyWithAttrs: ['ta-insert-video'],
			action: taToolFunctions.imgOnSelectAction
		}
	});
	taRegisterTool('insertLink', {
		tooltiptext: taTranslations.insertLink.tooltip,
		iconclass: 'fa fa-link',
		action: function(){
			var urlLink;
			urlLink = $window.prompt(taTranslations.insertLink.dialogPrompt, 'http://');
			if(urlLink && urlLink !== '' && urlLink !== 'http://'){
				return this.$editor().wrapSelection('createLink', urlLink, true);
			}
		},
		activeState: function(commonElement){
			if(commonElement) return commonElement[0].tagName === 'A';
			return false;
		},
		onElementSelect: {
			element: 'a',
			action: taToolFunctions.aOnSelectAction
		}
	});
	taRegisterTool('wordcount', {
		display: '<div id="toolbarWC" style="display:block; min-width:100px;">Words: <span ng-bind="wordcount"></span></div>',
		disabled: true,
		wordcount: 0,
		activeState: function(){ // this fires on keyup
			var textElement = this.$editor().displayElements.text;
			/* istanbul ignore next: will default to '' when undefined */
			var workingHTML = textElement[0].innerHTML || '';
			var noOfWords = 0;

			/* istanbul ignore if: will default to '' when undefined */
			if (workingHTML.replace(/\s*<[^>]*?>\s*/g, '') !== '') {
				noOfWords = workingHTML.replace(/<\/?(b|i|em|strong|span|u|strikethrough|a|img|small|sub|sup|label)( [^>*?])?>/gi, '') // remove inline tags without adding spaces
										.replace(/(<[^>]*?>\s*<[^>]*?>)/ig, ' ') // replace adjacent tags with possible space between with a space
										.replace(/(<[^>]*?>)/ig, '') // remove any singular tags
										.replace(/\s+/ig, ' ') // condense spacing
										.match(/\S+/g).length; // count remaining non-space strings
			}

			//Set current scope
			this.wordcount = noOfWords;
			//Set editor scope
			this.$editor().wordcount = noOfWords;

			return false;
		}
	});
	taRegisterTool('charcount', {
		display: '<div id="toolbarCC" style="display:block; min-width:120px;">Characters: <span ng-bind="charcount"></span></div>',
		disabled: true,
		charcount: 0,
		activeState: function(){ // this fires on keyup
			var textElement = this.$editor().displayElements.text;
			var sourceText = textElement[0].innerText || textElement[0].textContent; // to cover the non-jquery use case.

			// Caculate number of chars
			var noOfChars = sourceText.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+/g,' ').replace(/\s+$/g, ' ').length;
			//Set current scope
			this.charcount = noOfChars;
			//Set editor scope
			this.$editor().charcount = noOfChars;
			return false;
		}
	});
}]);

},{}],7:[function(require,module,exports){
"use strict";

var saleableBasicCtrl = function saleableBasicCtrl($scope, $rootScope, SaleableService, MessageService, CategoryHelper) {

    $rootScope.$on("newBasicDetail", function (event) {
        CategoryHelper.categoryList('/salcatlist', $scope);

        //var numberOfSaleables = $scope.$parent.saleables.length;
        var saleable = SaleableService.$build();
        saleable.type = 0;
        saleable.featured = 0;

        /*if(numberOfSaleables==0){
         }*/
        //$scope.saleable = angular.copy($scope.master);
        $scope.saleable = saleable;

        $scope.updateSaleable = function () {

            if ($scope.saleable.isfeatured) {
                $scope.saleable.featured = 1;
            } else {
                $scope.saleable.featured = 0;
            }
            console.log($scope.saleable.categories);
            saleable.$save().$then(function (data) {
                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
                $rootScope.$emit("saleableCreated", saleable);
            });
        };
    });

    $rootScope.$on("editBasicDetail", function (event, saleable) {
        CategoryHelper.categoryList('/salcatlist', $scope);
        CategoryHelper.salCategoryList('/salcatlistselected/' + saleable.id, $scope);
        $scope.saleable = saleable;
        $scope.updateSaleable = function () {

            if ($scope.saleable.isfeatured) {
                $scope.saleable.featured = 1;
            } else {
                $scope.saleable.featured = 0;
            }
            saleable.$save().$then(function (data) {

                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
                $rootScope.$emit("saleableUpdated", saleable);
            });
        };
    });
};

module.exports = saleableBasicCtrl;

},{}],8:[function(require,module,exports){
"use strict";

var bioController = function bioController($scope, BiographyService, MessageService) {

    var data = BiographyService.$find(0);

    $scope.profile = data.$fetch();

    $scope.updateBio = function () {
        data.$save().$then(function (data) {

            var meta = data.$metadata.meta;

            MessageService.setAlertMessage($scope, meta);
        });
    };
};

module.exports = bioController;

},{}],9:[function(require,module,exports){
"use strict";

var configController = function configController($scope, $timeout, MessageService, UserContentType) {

    var contenttypes = UserContentType.$search().$then(function (data) {
        $scope.usercontenttypes = data;
    });

    $scope.editUserContent = function (content) {
        $scope.content = content;
        $scope.showEditContentItem = true;
    };
    $scope.updateUserContent = function () {
        var isHome = $scope.content.ishome;
        var asHome = false;
        $scope.content.ashome = 0;
        if (isHome) {
            $scope.content.ashome = 1;
        }
        $scope.content.$save().$then(function (data) {
            $scope.usercontenttypes.$refresh();
            $scope.showEditContentItem = false;
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        });
    };

    $scope.changeStateContent = function ($event, usercontent) {
        var checkbox = $event.target;
        var action = checkbox.checked ? true : false;

        usercontent.active = action;
        usercontent.$save().$then(function (data) {
            $scope.usercontenttypes.$refresh();
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        });
    };
    $scope.setAsHome = function ($event, usercontent) {
        var checkbox = $event.target;
        var action = checkbox.checked ? true : false;

        usercontent.ashome = action;
        usercontent.$save().$then(function (data) {
            $scope.usercontenttypes.$refresh();
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        });
    };
};
module.exports = configController;

},{}],10:[function(require,module,exports){
'use strict';

var homeController = function homeController($scope, UserService, UserContentType) {
    //console.log($scope);
    $scope.showAlert = true;
    $scope.noProfileMsge = 'Este es tu primera sesión en este panel de control. ' + 'Por favor, a continuación completa tus datos personales.' + 'Si no deseas actualizar tus datos, puedes hacerlo en otro momento desde [Perfil] y' + 'continuar con las otras opciones de este panel de control.';
};

module.exports = homeController;

},{}],11:[function(require,module,exports){
"use strict";

var portfolioController = function portfolioController($scope, $rootScope) {
    $scope.shownProjectList = true;
    $scope.showProjectWizard = function () {
        $scope.shownProjectList = false;
        $scope.shownProjectWizard = true;
    };

    $scope.hideProjectWizard = function () {
        $scope.shownProjectList = true;
        $scope.shownProjectWizard = false;
    };
};

module.exports = portfolioController;

},{}],12:[function(require,module,exports){
'use strict';

var resumeController = function resumeController($scope, $rootScope, ResumeHelper, MessageService) {

    ResumeHelper.getResumePub($scope, $rootScope, '/publishedresume');
    ResumeHelper.dropDownList('/resume_drop_list', $scope);
    $scope.resume = 89;

    $rootScope.$on("updateResumeList", function () {
        ResumeHelper.dropDownList('/resume_drop_list', $scope);
    });

    $scope.getResume = function (id) {
        var data = {
            resume: {
                id: id
            }
        };
        //console.log(data);
        $rootScope.$emit("resumeChange", data);
    };
};

module.exports = resumeController;

},{}],13:[function(require,module,exports){
"use strict";

var saleableAllDetails = function saleableAllDetails($scope, $rootScope, SaleableDetailsService, MessageService, FileProcessor) {

    $scope.onFileSelect = function ($files) {
        $scope.files = $files;
    };
    $scope.hasIcon = false;
    var saleable_id = $scope.saleable.id;
    var details = SaleableDetailsService.$search({ saleable_id: saleable_id }).$then(function (data) {
        var items_number = data.length;

        if (items_number == 0) {
            //var linkToNew = ". Crea ya uno nuevo!";
            MessageService.setNoItemsInfoMessage($scope, "detalles", " .Crea uno nuevo!");
        }
    }).$resolve();
    $scope.saleable.details = details;

    var detail = SaleableDetailsService.$build();
    detail.saleable_id = saleable_id;
    detail.type = 0;
    $scope.detail = detail;

    $scope.updateDetail = function () {
        detail.$save().$then(function (data) {
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
            details.$refresh();
        });
    };

    $scope.editDetail = function (detail) {
        $scope.files = [];
        //download detail icon to load
        FileProcessor.download($scope, '/saleabledetail/' + detail.id + '/icon');
        //$scope.descriptiveIcon = "";
        $scope.showDetailForm = true;
        $scope.detail = detail;
        $scope.updateDetail = function () {
            detail.$save().$then(function (data) {
                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
                //upload file
                if ($scope.files.length > 0) {
                    FileProcessor.upload($scope, '/uploadSaleableDetailIcon', data.id);
                    $scope.files = [];
                }
            });
        };
    };

    $scope.newDetail = function () {
        $scope.hasIcon = false;
        $scope.showDetailForm = true;
        $scope.files = [];
        console.log($scope.files.length);
        //$scope.saleableDetailForm.$setPristine();
        var detail = SaleableDetailsService.$build();
        detail.saleable_id = saleable_id;
        detail.type = 0;
        $scope.detail = detail;

        $scope.updateDetail = function () {
            detail.$save().$then(function (data) {
                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
                details.$refresh();
                if ($scope.files.length > 0) {
                    FileProcessor.upload($scope, '/uploadSaleableDetailIcon', data.id);
                    $scope.files = [];
                }
            });
        };
    };

    $scope.removeDetail = function (detail) {
        var confirmation = MessageService.setConfirmDeleteMessage("detalle", " ");
        if (confirmation) {
            detail.$destroy().$then(function (data) {
                var meta = data.$response.data;
                MessageService.setAlertMessage($scope, meta);
                //$scope.saleableDetailForm.$setPristine();

                var detail = SaleableDetailsService.$build();
                detail.saleable_id = saleable_id;
                detail.type = 0;
                $scope.detail = detail;
                $scope.updateDetail = function () {
                    detail.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        details.$refresh();
                        //$rootScope.$emit('saleableUpdated');
                    });
                };
            });
        }
    };
};

module.exports = saleableAllDetails;

},{}],14:[function(require,module,exports){
"use strict";

var saleableController = function saleableController($scope, $rootScope, $timeout, SaleableService, MessageService) {
    $scope.master = {};

    var saleables = SaleableService.$search().$then(function (data) {
        //console.log(data.length);
        var items_number = data.length;
        if (items_number == 0) {
            var linkToNew = ". Crea ya uno nuevo!";
            MessageService.setNoItemsInfoMessage($scope, "servicios o productos", linkToNew);
        } /*else{
             $scope.saleables = data;
          }*/
    });

    $scope.saleables = saleables;

    $scope.removeSaleable = function (saleable) {
        var confirmation = MessageService.setConfirmDeleteMessage(" servicio o producto", " Se destruirán también todos sus detalles.");
        if (confirmation) {
            saleable.$destroy().$then(function (data) {
                var meta = data.$response.data;
                MessageService.setAlertMessage($scope, meta);
            });
        }
    };

    //Details
    //new: create a new details "wizard" instance
    $scope.newDetails = function () {
        $scope.showDetails = true;
        $rootScope.$broadcast('newDetails');
    };
    //edit: wizard, edit fashion
    $scope.editDetails = function (saleable) {
        $scope.showDetails = true;
        $rootScope.$broadcast('editDetails', saleable);
    };

    //close wizard
    $scope.closeWizard = function () {
        $scope.showDetails = false;
        location.href = '/admin/services';
    };
};
module.exports = saleableController;

},{}],15:[function(require,module,exports){
'use strict';

var saleableDetailCtrl = function saleableDetailCtrl($scope, $rootScope, SaleableService, MessageService, $element, $compile) {

    $rootScope.$on('newDetails', function () {

        $scope.saleable = {};
        $rootScope.$broadcast('newBasicDetail');
    });

    $rootScope.$on('saleableCreated', function (event, data) {
        $scope.saleables.$refresh();
        $scope.saleable = data;
    });
    $rootScope.$on('editDetails', function (event, saleable) {
        $scope.saleable = saleable;
        $scope.saleables.$refresh();
        $rootScope.$broadcast('editBasicDetail', saleable);
    });
};

module.exports = saleableDetailCtrl;

},{}],16:[function(require,module,exports){
"use strict";

var saleablePrices = function saleablePrices($scope, $rootScope, SaleablePriceService, MessageService) {

    /*var reset = function(){
        $scope.saleablePriceForm.$setPristine();
        $scope.price = angular.copy({});
    }*/

    var saleable_id = $scope.saleable.id;
    var prices = SaleablePriceService.$search({ saleable_id: saleable_id }).$then(function (data) {
        var items_number = data.length;
        if (items_number == 0) {
            //var linkToNew = ". Crea ya uno nuevo!";
            MessageService.setNoItemsInfoMessage($scope, "precios", " .Crea uno nuevo!");
        }
    }).$resolve();

    $scope.saleable.prices = prices;

    var price = SaleablePriceService.$build();
    price.saleable_id = saleable_id;
    $scope.price = price;

    $scope.updatePrice = function () {
        price.$save().$then(function (data) {
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
            prices.$refresh();
        });
    };

    $scope.editPrice = function (price) {
        $scope.showPriceForm = true;
        $scope.price = price;
        $scope.updatePrice = function () {
            price.$save().$then(function (data) {
                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
            });
        };
    };

    $scope.newPrice = function () {
        $scope.showPriceForm = true;
        //$scope.saleablePriceForm.$setPristine();
        var price = SaleablePriceService.$build();
        price.saleable_id = saleable_id;
        $scope.price = price;

        $scope.updatePrice = function () {
            price.$save().$then(function (data) {
                var meta = data.$metadata.meta;
                MessageService.setAlertMessage($scope, meta);
                prices.$refresh();
                $scope.showPriceForm = false;
            });
        };
    };

    $scope.removePrice = function (price) {
        var confirmation = MessageService.setConfirmDeleteMessage(" precio", " ");
        if (confirmation) {
            price.$destroy().$then(function (data) {
                var meta = data.$response.data;

                MessageService.setAlertMessage($scope, meta);
                //s$scope.saleablePriceForm.$setPristine();

                var price = SaleablePriceService.$build();
                price.saleable_id = saleable_id;
                $scope.price = price;
                $scope.updatePrice = function () {
                    price.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        prices.$refresh();
                        $scope.showPriceForm = false;
                    });
                };
            });
        }
    };
};

module.exports = saleablePrices;

},{}],17:[function(require,module,exports){
"use strict";

var userController = function userController($scope, $timeout, UserService, ProfileService, MessageService, NewPassword) {

    var user = UserService.$find(0);
    var profile = ProfileService.$find(0);
    $scope.profile = profile.$fetch();
    $scope.user = user.$fetch();

    $scope.updateUser = function () {

        user.$save().$then(function (data) {
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        }, function (data) {
            $scope.errors = data.$response.data;
            MessageService.setServerValidationMessage($scope);
        });
    };

    $scope.updatePassword = function () {
        var changedPassword = {
            password: $scope.password
        };
        var newPassword = NewPassword.updatePassword(user.id, changedPassword);
        newPassword.success(function (data) {
            var meta = data.meta;
            MessageService.setAlertMessage($scope, meta);
            $timeout(function () {
                $scope.password = "";
                $scope.showPasswordChange = false;
            }, 4000);
        });
    };
    $scope.updatePersonalInfo = function () {
        profile.$save().$then(function (data) {
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        }, function (data) {
            $scope.errors = data.$response.data;
            MessageService.setServerValidationMessage($scope);
        });
    };
    $scope.updateSocialInfo = function () {
        profile.$save().$then(function (data) {
            var meta = data.$metadata.meta;
            MessageService.setAlertMessage($scope, meta);
        }, function (data) {
            $scope.errors = data.$response.data;
            MessageService.setServerValidationMessage($scope);
        });
    };
};

module.exports = userController;

},{}],18:[function(require,module,exports){
"use strict";

var bioDirective = function bioDirective(MessageService, Bio, $timeout, Helper, $http) {
    return {
        templateUrl: "../../js/admin/angular/templates/biographies/biographies.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);

            var bios = Bio.$search().$then(function (data) {
                console.log(data);
                $scope.bios = data;
                if ($scope.bios.length == 0) {
                    MessageService.setNoItemsInfoMessage($scope, " biografías", ". Pulsa el botón Nueva para crear una");
                }
            });

            $scope.newBio = function () {

                Helper.enableForm($scope, true);
                var bio = Bio.$build();
                $scope.bio = bio;

                $scope.updateBio = function () {

                    bio.$save().$then(function (data) {
                        $scope.bios.$refresh();
                        $scope.bioForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                };
            };

            $scope.editBio = function (bio) {
                Helper.enableForm($scope, true);
                $scope.bio = bio;

                $scope.updateBio = function () {

                    bio.$save().$then(function (data) {
                        $scope.bios.$refresh();
                        $scope.bioForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                };
            };

            //delete
            $scope.removeBio = function (bio) {
                $scope.bio = bio;
                var confirmation = MessageService.setConfirmDeleteMessage(" biografía", " ");
                if (confirmation) {
                    bio.$destroy().$then(function (data) {
                        var meta = data.$response.data;
                        $scope.bios.$refresh();
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            //change status
            $scope.changeStatus = function ($event, bio) {
                var checkbox = $event.target;
                var action = checkbox.checked ? true : false;

                bio.status = action;
                bio.$save().$then(function (data) {
                    $scope.bios.$refresh();
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };

            $scope.setDef = function ($event, bio) {
                console.log("aqui");
                /*var checkbox = $event.target;
                var action = (checkbox.checked ? true : false);
                 bio.status = action;*/
                $http.post("/biography/setDefault/" + bio.id).success(function (data) {
                    $scope.bios.$refresh();
                    console.log(data);
                    var meta = data.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };
        }
    };
};
module.exports = bioDirective;

},{}],19:[function(require,module,exports){
"use strict";

var categoryDirective = function categoryDirective(MessageService, Category, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/configuration/categories.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);
            var categories = Category.$search().$then(function (data) {
                $scope.categories = data;
                if ($scope.categories.length == 0) {
                    MessageService.setNoItemsInfoMessage($scope, " categorías", ". Pulsa el botón Nueva para crear una");
                }
            });

            $scope.newCategory = function () {
                Helper.enableForm($scope, true);
                var category = Category.$build();
                $scope.category = category;

                $scope.updateCategory = function () {
                    category.$save().$then(function (data) {
                        $scope.categories.$refresh();
                        $scope.categoryForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                };
            };

            $scope.editCategory = function (category) {
                Helper.enableForm($scope, true);
                $scope.category = category;

                $scope.updateCategory = function () {

                    category.$save().$then(function (data) {
                        $scope.categories.$refresh();
                        $scope.categoryForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                };
            };

            //delete
            $scope.removeCategory = function (category) {
                $scope.category = category;
                var confirmation = MessageService.setConfirmDeleteMessage(" categoría", " ");
                if (confirmation) {
                    category.$destroy().$then(function (data) {
                        var meta = data.$response.data;
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            //change status
            /*$scope.changeStatus = function ($event, category) {
                var checkbox = $event.target;
                var action = (checkbox.checked ? true : false);
                 category.status = action;
                category.$save().$then(function (data) {
                    $scope.categories.$refresh();
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };*/
        }
    };
};
module.exports = categoryDirective;

},{}],20:[function(require,module,exports){
/**
 * Created by macintosh on 2/3/15.
 */
"use strict";

var alertDirective = function alertDirective() {
    return {
        templateUrl: "../../js/admin/angular/templates/alert.html",
        restrict: "EA",
        scope: {
            message: "=msge"
        },

        controller: function controller($scope) {

            $scope.showAlert = true;
            $scope.destroyAlert = function () {
                $scope.$parent.showAlert = false;
            };
        }
    };
};
module.exports = alertDirective;

},{}],21:[function(require,module,exports){
'use strict';

var closeContentDirective = function closeContentDirective() {
    return {
        restrict: 'EA',
        template: '<a href="" ng-click="destroySection()" class="pull-right remove-button" data-icon="&#xe70d" ></a>',

        scope: { remove: '&' },
        controller: function controller($scope) {
            $scope.destroySection = function () {
                $scope.remove();
            };
        }
    };
};

module.exports = closeContentDirective;

},{}],22:[function(require,module,exports){
"use strict";

var configMenu = function configMenu() {
    return {
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/config_menu.html"
    };
};
module.exports = configMenu;

},{}],23:[function(require,module,exports){
"use strict";

var contentSelector = function contentSelector(MessageService, UserContentType) {
    return {
        templateUrl: "../../js/admin/angular/templates/content_selector.html",
        restrict: "EA",
        scope: {},
        transclude: true,
        controller: function controller($scope, $timeout) {
            $scope.infoContentSelector = MessageService.get('contentselector_info').message;
            var contenttypes = UserContentType.$search().$then(function (data) {
                $scope.usercontenttypes = data;
            });

            $scope.updateContent = function ($event, usercontent) {

                var checkbox = $event.target;
                var action = checkbox.checked ? true : false;

                usercontent.active = action;
                usercontent.$save().$then(function (data) {
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };
        }
    };
};

module.exports = contentSelector;

},{}],24:[function(require,module,exports){
"use strict";

var homeCallsDirective = function homeCallsDirective(MessageService, Homecallout, $timeout, Helper, FileProcessor, $http) {
    return {
        templateUrl: "../../js/admin/angular/templates/homepage/homecalls.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {

            $scope.onFileSelect = function ($files) {
                $scope.files = $files;
            };
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);

            $http.get('/activecontent').success(function (data) {
                var contents = data.contents;
                $scope.contents = contents;
            }).error();

            var callouts = Homecallout.$search().$then(function (data) {
                $scope.callouts = data;
                if ($scope.callouts.length == 0) {
                    MessageService.setNoItemsInfoMessage($scope, " ítems", ". Pulsa el botón Nuevo para crear uno");
                }
                if ($scope.callouts.length == 1) {
                    $scope.hideIfOne = true;
                }
            });

            $scope.newHomecallout = function () {

                Helper.enableForm($scope, true);
                var callout = Homecallout.$build();
                $scope.callout = callout;
                $scope.callout.buttonlink = 'home';
                $scope.updateHomecallout = function () {
                    /*console.log($scope.callout);*/
                    callout.$save().$then(function (data) {
                        $scope.hideIfOne = true;
                        $scope.callouts.$refresh();
                        $scope.calloutForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        if (typeof $scope.files !== "undefined") {
                            if ($scope.files.length > 0) {
                                FileProcessor.upload($scope, '/uploadHomeImage', data.id);
                                $scope.files = [];
                            }
                        }
                    });
                };
            };

            $scope.editHomecallout = function (callout) {
                Helper.enableForm($scope, true);
                $scope.callout = callout;
                $scope.files = [];
                FileProcessor.download($scope, '/homeimage/' + callout.id);
                $scope.updateHomecallout = function () {

                    callout.$save().$then(function (data) {
                        $scope.callouts.$refresh();
                        $scope.calloutForm.$resetForm();
                        Helper.enableForm($scope, false);
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        if (typeof $scope.files !== "undefined") {
                            if ($scope.files.length > 0) {
                                FileProcessor.upload($scope, '/uploadHomeImage', data.id);
                                $scope.files = [];
                            }
                        }
                    });
                };
            };

            //delete
            $scope.removeHomecallout = function (callout) {
                $scope.callout = callout;
                var confirmation = MessageService.setConfirmDeleteMessage(" ítem", " ");
                if (confirmation) {
                    $scope.hideIfOne = false;
                    callout.$destroy().$then(function (data) {
                        var meta = data.$response.data;
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            //change status
            $scope.changeStatus = function ($event, callout) {
                var checkbox = $event.target;
                var action = checkbox.checked ? true : false;

                callout.status = action;
                callout.$save().$then(function (data) {
                    $scope.callouts.$refresh();
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };
        }
    };
};
module.exports = homeCallsDirective;

},{}],25:[function(require,module,exports){
"use strict";

var projectDirective = function projectDirective(MessageService, Project, $timeout, CategoryHelper, FileProcessor, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/portfolio/project.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.onFileSelect = function ($files) {
                $scope.files = $files;
            };
            $rootScope.$on('newProject', function () {

                CategoryHelper.categoryList('/projectcatlist', $scope);
                var project = Project.$build();
                $scope.project = project;

                $scope.updateProject = function () {

                    //$rootScope.$broadcast('editProject',project);
                    project.$save().$then(function (data) {
                        //$scope.projects.$refresh();
                        $scope.projectForm.$resetForm();
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);

                        if (typeof $scope.files !== "undefined") {
                            if ($scope.files.length > 0) {
                                FileProcessor.upload($scope, '/uploadProjectFeatureImage', data.id);
                                $scope.files = [];
                            }
                        }
                        $rootScope.$broadcast('projectCreated', project);
                    });
                };
            });

            $rootScope.$on('editProject', function (event, data) {
                $scope.files = [];
                var project = data;
                FileProcessor.download($scope, '/projectimage/' + project.id);
                CategoryHelper.categoryList('/projectcatlist', $scope);
                CategoryHelper.projectCategoryList('/projectcatlistselected/' + project.id, $scope);

                $scope.project = project;
                $scope.updateProject = function () {
                    project.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        //upload file
                        if ($scope.files.length > 0) {
                            FileProcessor.upload($scope, '/uploadProjectFeatureImage', data.id);
                            $scope.files = [];
                        }
                    });
                };
            });

            $rootScope.$on('editProject', function (evt, data) {
                $scope.project = data;
            });
        }
    };
};
module.exports = projectDirective;

},{}],26:[function(require,module,exports){
"use strict";

var projectGalleryDirective = function projectGalleryDirective(MessageService, Project, $timeout, FileProcessor, Gallery) {
    return {
        templateUrl: "../../js/admin/angular/templates/portfolio/projectgallery.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            function loadImages(data) {
                $scope.project = data;
                var images = Gallery.$search({ project_id: $scope.project.id }).$then(function (data) {
                    $scope.images = data;
                    if ($scope.images.length == 0) {
                        MessageService.setNoItemsInfoMessage($scope, " imágenes", ". Pulsa el botón 'Chose files' para cargar nuevas imágenes");
                    }
                });
                $scope.onFileSelect = function ($files) {
                    $scope.files = $files;
                    FileProcessor.upload($scope, '/uploadProjectGalleryImage', data.id);
                };

                $scope.removeImage = function (image) {

                    var confirmation = MessageService.setConfirmDeleteMessage(" imagen", " ");
                    if (confirmation) {
                        image.$destroy().$then(function (data) {
                            var meta = data.$response.data;
                            MessageService.setAlertMessage($scope, meta);
                            $scope.images.$refresh();
                        });
                    }
                };
            }

            $rootScope.$on('editProject', function (evt, data) {
                loadImages(data);
            });
            $rootScope.$on('projectCreated', function (evt, data) {
                loadImages(data);
            });
        }
    };
};
module.exports = projectGalleryDirective;

},{}],27:[function(require,module,exports){
"use strict";

var projectDirective = function projectDirective(MessageService, Project, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/portfolio/projectlist.html",
        restrict: "EA",
        scope: {
            openProjectWizard: "&openprojectwizard"
        },
        controller: function controller($scope, $rootScope) {

            var projects = Project.$search().$then(function (data) {
                $scope.projects = data;

                if ($scope.projects.length == 0) {
                    MessageService.setNoItemsInfoMessage($scope, " proyectos", ". Pulsa el botón Nuevo para crear uno");
                }
            });

            $scope.newProject = function () {
                $rootScope.$broadcast('newProject');
                $scope.openProjectWizard();
            };

            $scope.editProject = function (project) {
                $rootScope.$emit('editProject', project);
                $scope.openProjectWizard();
            };

            //delete
            $scope.removeProject = function (project) {
                $scope.project = project;
                var confirmation = MessageService.setConfirmDeleteMessage(" proyecto", " ");
                if (confirmation) {
                    project.$destroy().$then(function (data) {
                        var meta = data.$response.data;
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            //change status
            $scope.changeStatus = function ($event, project) {
                var checkbox = $event.target;
                var action = checkbox.checked ? true : false;

                project.status = action;
                project.$save().$then(function (data) {
                    $scope.projects.$refresh();
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };
        }

    };
};
module.exports = projectDirective;

},{}],28:[function(require,module,exports){
"use strict";

var projectWizardDirective = function projectWizardDirective(MessageService, Project, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/portfolio/projectwizard.html",
        restrict: "EA",
        scope: {
            openProjectList: '&openprojectlist'
        },
        controller: function controller($scope, $rootScope) {

            $rootScope.$on('projectCreated', function (evt, data) {

                $scope.project = data;
            });
            $rootScope.$on('editProject', function (evt, data) {
                $scope.project = data;
            });

            $scope.closeWizard = function () {
                $scope.openProjectList();
                location.href = '/admin/projects';
            };
        }
    };
};
module.exports = projectWizardDirective;

},{}],29:[function(require,module,exports){
"use strict";

var profileMenu = function profileMenu() {
    return {
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/profile_menu.html"
    };
};
module.exports = profileMenu;

},{}],30:[function(require,module,exports){
"use strict";

var educationDirective = function educationDirective(MessageService, Education, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/education.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);
            $rootScope.$on('resumeChange', function (event, args) {
                if (typeof args.resume !== "undefined") {
                    var resumeId = args.resume.id;
                    var educations = Education.$search({ resume_id: resumeId }).$then(function (data) {
                        $scope.educations = data;
                        if ($scope.educations.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " estudios", ". Pulsa el botón Nueva para crear una");
                        }
                    });

                    $scope.newEducation = function () {
                        Helper.enableForm($scope, true);
                        var education = Education.$build({ resume_id: resumeId, initdate: '', enddate: '' });
                        $scope.education = education;
                        $scope.monthoptions = Helper.months();
                        $scope.education.initmonth = Helper.months()[0];
                        $scope.education.endmonth = Helper.months()[0];

                        $scope.updateEducation = function () {
                            var isCurrent = $scope.education.currentplace;
                            $scope.education.current = 0;
                            if (isCurrent) {
                                $scope.education.current = 1;
                            }
                            $scope.education.initdate = $scope.education.initmonth + "-" + $scope.education.inityear;
                            $scope.education.enddate = $scope.education.endmonth + "-" + $scope.education.endyear;

                            education.$save().$then(function (data) {
                                $scope.educations.$refresh();
                                $scope.educationForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    $scope.editEducation = function (education) {
                        Helper.enableForm($scope, true);
                        $scope.monthoptions = Helper.months();
                        var imonthIndex = Helper.months().indexOf(education.imonth);
                        var emonthIndex = Helper.months().indexOf(education.emonth);
                        $scope.education = education;
                        $scope.education.initmonth = $scope.monthoptions[imonthIndex];
                        $scope.education.endmonth = $scope.monthoptions[emonthIndex];
                        $scope.education.inityear = education.iyear;
                        $scope.education.endyear = education.eyear;

                        $scope.updateEducation = function () {
                            var isCurrent = $scope.education.currentplace;
                            $scope.education.current = 0;
                            if (isCurrent) {
                                $scope.education.current = 1;
                            }
                            $scope.education.initdate = $scope.education.initmonth + "-" + $scope.education.inityear;
                            $scope.education.enddate = $scope.education.endmonth + "-" + $scope.education.endyear;

                            education.$save().$then(function (data) {
                                $scope.educations.$refresh();
                                $scope.educationForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    //delete
                    $scope.removeEducation = function (education) {
                        $scope.education = education;
                        var confirmation = MessageService.setConfirmDeleteMessage(" estudio", " ");
                        if (confirmation) {
                            education.$destroy().$then(function (data) {
                                var meta = data.$response.data;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        }
                    };

                    //change status
                    $scope.changeStatus = function ($event, education) {
                        var checkbox = $event.target;
                        var action = checkbox.checked ? true : false;

                        education.status = action;
                        education.$save().$then(function (data) {
                            $scope.educations.$refresh();
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                        });
                    };
                }
            });
        }
    };
};
module.exports = educationDirective;

},{}],31:[function(require,module,exports){
"use strict";

var experienceDirective = function experienceDirective(MessageService, Experience, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/experience.html",
        restrict: "EA",
        scope: {},

        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);

            $rootScope.$on('resumeChange', function (event, args) {

                /*$scope.sortingLog = [];
                var tmpList = [];
                $scope.sortableOrder = [];
                for (var i = 1; i <= 6; i++){
                    tmpList.push({
                        text: 'Item ' + i,
                        value: i
                    });
                }
                $scope.sortableOptions = {
                    activate: function() {
                        console.log("activate");
                    },
                    beforeStop: function() {
                        console.log("beforeStop");
                    },
                    change: function() {
                        console.log("change");
                    },
                    create: function() {
                        console.log("create");
                    },
                    deactivate: function() {
                        console.log("deactivate");
                    },
                    out: function() {
                        console.log("out");
                    },
                    over: function() {
                        console.log("over");
                    },
                    receive: function() {
                        console.log("receive");
                    },
                    remove: function() {
                        console.log("remove");
                    },
                    sort: function() {
                        console.log("sort");
                    },
                    start: function() {
                        console.log("start");
                    },
                    update: function(e, ui) {
                        $scope.$apply();
                        console.log(this);
                         var logEntry = tmpList.map(function(i){
                            return i.value;
                        }).join(', ');
                        $scope.sortingLog.push('Update: ' + logEntry);
                        console.log($scope.sortingLog);
                    },
                    stop: function(e, ui) {
                         var $list=ui.item.parent();
                        console.log($list);
                        $scope.sortableOrder = $list.sortable('toArray');
                        console.log($scope.sortableOrder);
                        // this callback has the changed model
                        var logEntry = tmpList.map(function(i){
                            return i.value;
                        }).join(', ');
                        $scope.sortingLog.push('Stop: ' + logEntry);
                        console.log($scope.sortingLog);
                    }
                };*/
                /*var exp = [];
                exp  = $scope.experiences;
                $scope.bar = function($item, $partFrom, $partTo, $indexFrom, $indexTo){
                    console.log($scope.experiences);
                    console.log($indexFrom);
                    console.log($indexTo);
                    console.log($partFrom);
                    console.log($partTo);
                };
                 $scope.baz = function($item, $part, $index){
                    console.log($item);
                    console.log($part);
                    console.log($index);
                 };*/

                if (typeof args.resume !== "undefined") {
                    var resumeId = args.resume.id;
                    var experiences = Experience.$search({ resume_id: resumeId }).$then(function (data) {
                        $scope.experiences = data;
                        if ($scope.experiences.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " experiencias", ". Pulsa el botón Nueva para crear una");
                        }
                    });
                    //new
                    $scope.newExperience = function () {
                        console.log('aqio');
                        Helper.enableForm($scope, true);
                        var experience = Experience.$build({ resume_id: resumeId, initdate: '', enddate: '' });
                        $scope.experience = experience;
                        $scope.monthoptions = Helper.months();
                        $scope.experience.initmonth = Helper.months()[0];
                        $scope.experience.endmonth = Helper.months()[0];

                        $scope.updateExperience = function () {
                            var isCurrent = $scope.experience.currentplace;
                            $scope.experience.current = 0;
                            if (isCurrent) {
                                $scope.experience.current = 1;
                            }
                            $scope.experience.initdate = $scope.experience.initmonth + "-" + $scope.experience.inityear;
                            $scope.experience.enddate = $scope.experience.endmonth + "-" + $scope.experience.endyear;

                            experience.$save().$then(function (data) {
                                $scope.experiences.$refresh();
                                $scope.experienceForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };
                    //edit
                    $scope.editExperience = function (experience) {
                        Helper.enableForm($scope, true);
                        $scope.monthoptions = Helper.months();
                        var imonthIndex = Helper.months().indexOf(experience.imonth);
                        var emonthIndex = Helper.months().indexOf(experience.emonth);
                        $scope.experience = experience;
                        $scope.experience.initmonth = $scope.monthoptions[imonthIndex];
                        $scope.experience.endmonth = $scope.monthoptions[emonthIndex];
                        $scope.experience.inityear = experience.iyear;
                        $scope.experience.endyear = experience.eyear;

                        $scope.updateExperience = function () {
                            var isCurrent = $scope.experience.currentplace;
                            $scope.experience.current = 0;
                            if (isCurrent) {
                                $scope.experience.current = 1;
                            }
                            $scope.experience.initdate = $scope.experience.initmonth + "-" + $scope.experience.inityear;
                            $scope.experience.enddate = $scope.experience.endmonth + "-" + $scope.experience.endyear;

                            experience.$save().$then(function (data) {
                                $scope.experiences.$refresh();
                                $scope.experienceForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    //delete
                    $scope.removeExperience = function (experience) {
                        $scope.experience = experience;
                        var confirmation = MessageService.setConfirmDeleteMessage(" experiencia", " ");
                        if (confirmation) {
                            experience.$destroy().$then(function (data) {
                                var meta = data.$response.data;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        }
                    };

                    //change status
                    $scope.changeStatus = function ($event, experience) {
                        /*console.log(experience);*/
                        var checkbox = $event.target;
                        var action = checkbox.checked ? true : false;

                        experience.status = action;
                        experience.$save().$then(function (data) {
                            $scope.experiences.$refresh();
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                        });
                    };
                }
            });
        }
    };
};
module.exports = experienceDirective;

},{}],32:[function(require,module,exports){
"use strict";

var interestDirective = function interestDirective(MessageService, Interest, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/interests.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);
            $rootScope.$on('resumeChange', function (event, args) {
                if (typeof args.resume !== "undefined") {
                    var resumeId = args.resume.id;
                    var interests = Interest.$search({ resume_id: resumeId }).$then(function (data) {
                        $scope.interests = data;
                        if ($scope.interests.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " intereses profesionales", ". Pulsa el botón Nuevo para crear uno");
                        }
                    });

                    $scope.newInterest = function () {
                        Helper.enableForm($scope, true);
                        var interest = Interest.$build({ resume_id: resumeId });
                        $scope.interest = interest;

                        $scope.updateInterest = function () {
                            interest.$save().$then(function (data) {
                                $scope.interests.$refresh();
                                $scope.interestForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    $scope.editInterest = function (interest) {
                        Helper.enableForm($scope, true);
                        $scope.interest = interest;

                        $scope.updateInterest = function () {

                            interest.$save().$then(function (data) {
                                $scope.interests.$refresh();
                                $scope.interestForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    //delete
                    $scope.removeInterest = function (interest) {
                        $scope.interest = interest;
                        var confirmation = MessageService.setConfirmDeleteMessage(" idioma", " ");
                        if (confirmation) {
                            interest.$destroy().$then(function (data) {
                                var meta = data.$response.data;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        }
                    };

                    //change status
                    $scope.changeStatus = function ($event, interest) {
                        var checkbox = $event.target;
                        var action = checkbox.checked ? true : false;

                        interest.status = action;
                        interest.$save().$then(function (data) {
                            $scope.interests.$refresh();
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                        });
                    };
                }
            });
        }
    };
};
module.exports = interestDirective;

},{}],33:[function(require,module,exports){
"use strict";

var languageDirective = function languageDirective(MessageService, Language, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/languages.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);
            $rootScope.$on('resumeChange', function (event, args) {
                if (typeof args.resume !== "undefined") {
                    var resumeId = args.resume.id;
                    var languages = Language.$search({ resume_id: resumeId }).$then(function (data) {
                        $scope.languages = data;
                        if ($scope.languages.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " idiomas", ". Pulsa el botón Nuevo para crear uno");
                        }
                    });

                    $scope.newLanguage = function () {
                        Helper.enableForm($scope, true);
                        var language = Language.$build({ resume_id: resumeId });
                        $scope.language = language;

                        $scope.updateLanguage = function () {
                            language.$save().$then(function (data) {
                                $scope.languages.$refresh();
                                $scope.languageForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    $scope.editLanguage = function (language) {
                        Helper.enableForm($scope, true);
                        $scope.language = language;

                        $scope.updateLanguage = function () {

                            language.$save().$then(function (data) {
                                $scope.languages.$refresh();
                                $scope.languageForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    //delete
                    $scope.removeLanguage = function (language) {
                        $scope.language = language;
                        var confirmation = MessageService.setConfirmDeleteMessage(" idioma", " ");
                        if (confirmation) {
                            language.$destroy().$then(function (data) {
                                var meta = data.$response.data;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        }
                    };

                    //change status
                    $scope.changeStatus = function ($event, language) {
                        var checkbox = $event.target;
                        var action = checkbox.checked ? true : false;

                        language.status = action;
                        language.$save().$then(function (data) {
                            $scope.languages.$refresh();
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                        });
                    };
                }
            });
        }
    };
};
module.exports = languageDirective;

},{}],34:[function(require,module,exports){
"use strict";

var resumeDirective = function resumeDirective(MessageService, Resume, $timeout, ResumeHelper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/resume.html",
        restrict: "EA",

        scope: {},
        controller: function controller($scope, $rootScope) {

            $rootScope.$on('noResumeFound', function () {
                MessageService.setNoItemsInfoMessage($scope, " résumés", ". Pulsa el botón Nuevo para crear");
            });
            $rootScope.$on('resumeChange', function (event, args) {

                if (typeof args.resume !== "undefined") {
                    //biographies dropdown list
                    //ResumeHelper.bioDropDownList('/bio_drop_list',$scope);
                    //console.log(args);
                    var resumes = Resume.$search().$then(function (data) {
                        $scope.resumes = data;

                        if ($scope.resumes.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " résumés", ". Pulsa el botón Nuevo para crear uno");
                        }
                    });

                    var resume = Resume.$find(args.resume.id);
                    $scope.resume = resume;
                    $scope.updateResume = function () {
                        $scope.resume.$save().$then(function (data) {
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                            $scope.showResumeForm = false;
                        });
                    };
                }
            });

            $scope.newResume = function () {
                $scope.showedResumeForm = true;
                $rootScope.$emit("newResume");
            };

            $scope.deleteResume = function (resume) {
                var confirmation = MessageService.setConfirmDeleteMessage(" résumé", ". Todos las secciones del résumé serán eliminadas también...");
                if (confirmation) {
                    resume.$destroy().$then(function (data) {

                        var meta = data.$response.data;
                        MessageService.setAlertMessage($scope, meta);
                        $timeout(function () {
                            location.href = "/admin/resume";
                        }, 2000);
                    });
                }
            };

            $scope.publication = function (resume, toBePublished) {
                if (toBePublished) {
                    resume.active = 1;
                    //publish resume
                    ResumeHelper.publishResume($scope, $rootScope, "/publish_resume/" + resume.id);
                } else {
                    resume.active = 0;
                    resume.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            $scope.setDefault = function (resume, isDefault) {
                if (isDefault) {
                    resume["default"] = 1;
                    //publish resume
                    ResumeHelper.publishResume($scope, $rootScope, "/default_resume/" + resume.id);
                } else {
                    resume["default"] = 0;
                    resume.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                    });
                }
            };

            $scope.cloneResume = function (resume) {
                ResumeHelper.cloneResume($scope, $rootScope, "/clone_resume/" + resume.id);
            };

            $scope.showResumeEditForm = function (resume) {
                $scope.showedEditResumeForm = true;
                $rootScope.$emit("editResume", resume);
            };

            $scope.closeAfterUpdate = function () {
                $scope.showedEditResumeForm = false;
            };

            $scope.closeAfterCreate = function () {
                $scope.showedResumeForm = false;
            };

            /*$scope.$watch('$viewContentLoaded', function()
            {
                console.log("loading");
            });*/
        }
    };
};

module.exports = resumeDirective;

},{}],35:[function(require,module,exports){
"use strict";

var resumeEditDirective = function resumeEditDirective(MessageService, Resume, ResumeHelper, $timeout) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/resumeeditform.html",
        restrict: "EA",
        scope: {

            close: "&close"
        },
        controller: function controller($scope, $rootScope) {

            $rootScope.$on("editResume", function (event, resume) {
                //biographies dropdown list
                ResumeHelper.bioDropDownList('/bio_drop_list', $scope);
                $scope.resume = resume;
                var bioId = resume.biographyId;
                $scope.resume.biography_id = bioId.toString();
                //console.log($scope);
                $scope.closeForm = function () {
                    $scope.close();
                };
                //$scope.resume.biographyId = 1;//$scope.bios[$scope.resume.biography_id];
                $scope.saveResume = function () {

                    $scope.resume.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        $rootScope.$emit("updateResumeList");
                        $rootScope.$emit("resumeChange", data.$response.data);
                        $timeout(function () {
                            $scope.close(data);
                        }, 4000);

                        //$scope.$parent.showedEditResumeForm = false;
                    });
                };
            });
        }
    };
};

module.exports = resumeEditDirective;

},{}],36:[function(require,module,exports){
"use strict";

var resumeCreationDirective = function resumeCreationDirective(MessageService, Resume, ResumeHelper, $timeout) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/resumeform.html",
        restrict: "EA",
        scope: {
            close: "&close"
        },
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                $scope.close();
            };

            $rootScope.$on("newResume", function () {
                //biographies dropdown list
                ResumeHelper.bioDropDownList('/bio_drop_list', $scope);
                var resume = Resume.$build();
                $scope.resume = resume;

                $scope.createResume = function () {
                    //console.log(resume);
                    resume.$save().$then(function (data) {
                        var meta = data.$metadata.meta;
                        MessageService.setAlertMessage($scope, meta);
                        $rootScope.$emit("updateResumeList");
                        $rootScope.$emit("resumeChange", data.$response.data);
                        $timeout(function () {
                            $scope.close(data);
                            //$scope.$destroy();
                        }, 4000);
                    });
                };
            });
        }
    };
};

module.exports = resumeCreationDirective;

},{}],37:[function(require,module,exports){
"use strict";

var resumeList = function resumeList(MessageService, Resume, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/resumelist.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);

            var resumes = Resume.$search().$then(function (data) {
                $scope.resumes = data;
                if ($scope.resumes.length == 0) {
                    MessageService.setNoItemsInfoMessage($scope, " résumés", ". Pulsa el botón Nuevo para crear uno");
                }
            });

            $scope.newResume = function () {};

            $scope.editResume = function (education) {};

            //delete
            $scope.removeResume = function (education) {};

            //change status
            $scope.setDefault = function ($event, resume) {
                var checkbox = $event.target;
                var action = checkbox.checked ? true : false;

                resume["default"] = action;
                resume.$save().$then(function (data) {
                    $scope.resumes.$refresh();
                    var meta = data.$metadata.meta;
                    MessageService.setAlertMessage($scope, meta);
                });
            };

            $scope.showDetail = function (resume) {

                var data = {
                    resume: {
                        id: resume.id
                    }
                };
                $rootScope.$emit("resumeChange", data);
            };
        }
    };
};
module.exports = resumeList;

},{}],38:[function(require,module,exports){
"use strict";

var contentSelector = function contentSelector(MessageService) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/resume_selector.html",
        restrict: "EA",
        scope: {},
        transclude: true,
        controller: function controller($scope, $timeout) {
            $scope.infoResumeSelector = MessageService.get('resumeselector_info').message;
            //TODO get sections according to user resume

            var sections = [{ alias: "Experiencia", link: "experience" }, { alias: "Estudios", link: "study" }, { alias: "Habilidades / Conocimientos", link: "skills" }, { alias: "Idiomas", link: "languages" }, { alias: "Intereses Profesionales", link: "personal" }];
            $scope.sections = sections;
        }
    };
};

module.exports = contentSelector;

},{}],39:[function(require,module,exports){
"use strict";

var sectionsDirective = function sectionsDirective(Resume) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/sections.html",
        restrict: "EA",
        scope: {},

        controller: function controller($scope, $rootScope) {
            $rootScope.$on('resumeChange', function (event, args) {

                if (typeof args.resume !== "undefined") {
                    var resume = Resume.$find(args.resume.id);
                    $scope.resume = resume.$resolve();
                    $rootScope.$broadcast("resumeChange2");
                }
            });
        },
        link: function link(scope, element) {
            //$(element).effect("highlight", {}, 3000);
        }
    };
};
module.exports = sectionsDirective;

},{}],40:[function(require,module,exports){
"use strict";

var skillDirective = function skillDirective(MessageService, Skill, $timeout, Helper) {
    return {
        templateUrl: "../../js/admin/angular/templates/resume/skills.html",
        restrict: "EA",
        scope: {},
        controller: function controller($scope, $rootScope) {
            $scope.closeForm = function () {
                Helper.enableForm($scope, false);
            };
            Helper.enableForm($scope, false);
            $rootScope.$on('resumeChange', function (event, args) {
                if (typeof args.resume !== "undefined") {
                    var resumeId = args.resume.id;
                    var skills = Skill.$search({ resume_id: resumeId }).$then(function (data) {
                        $scope.skills = data;
                        if ($scope.skills.length == 0) {
                            MessageService.setNoItemsInfoMessage($scope, " habilidades", ". Pulsa el botón Nueva para crear una");
                        }
                    });

                    $scope.newSkill = function () {
                        Helper.enableForm($scope, true);
                        var skill = Skill.$build({ resume_id: resumeId });
                        $scope.skill = skill;

                        $scope.updateSkill = function () {
                            skill.$save().$then(function (data) {
                                $scope.skills.$refresh();
                                $scope.skillForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    $scope.editSkill = function (skill) {
                        Helper.enableForm($scope, true);
                        $scope.skill = skill;

                        $scope.updateSkill = function () {

                            skill.$save().$then(function (data) {
                                $scope.skills.$refresh();
                                $scope.skillForm.$resetForm();
                                Helper.enableForm($scope, false);
                                var meta = data.$metadata.meta;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        };
                    };

                    //delete
                    $scope.removeSkill = function (skill) {
                        $scope.skill = skill;
                        var confirmation = MessageService.setConfirmDeleteMessage(" habilidad", " ");
                        if (confirmation) {
                            skill.$destroy().$then(function (data) {
                                var meta = data.$response.data;
                                MessageService.setAlertMessage($scope, meta);
                            });
                        }
                    };

                    //change status
                    $scope.changeStatus = function ($event, skill) {
                        var checkbox = $event.target;
                        var action = checkbox.checked ? true : false;

                        skill.status = action;
                        skill.$save().$then(function (data) {
                            $scope.skills.$refresh();
                            var meta = data.$metadata.meta;
                            MessageService.setAlertMessage($scope, meta);
                        });
                    };
                }
            });
        }
    };
};
module.exports = skillDirective;

},{}],41:[function(require,module,exports){
"use strict";

var saleableBasic = function saleableBasic(SaleableService) {
    return {
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/saleable_basic.html",
        replace: true,
        controller: "saleableBasicCtrl",
        scope: {}

    };
};
module.exports = saleableBasic;

},{}],42:[function(require,module,exports){
"use strict";

var saleableDetails = function saleableDetails($templateCache, $compile, $rootScope) {
    return {
        transclude: 'element',
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/saleable_details.html",
        replace: true,

        controller: "SaleableDetailCtrl",
        link: function link(scope, $element, $attrs, $ctrl, transclude) {
            $rootScope.$on("newBasicDetail", function (event) {
                $('#tabsf a[href="#pilltab1"]').tab('show');
            });
        }
    };
};
module.exports = saleableDetails;

},{}],43:[function(require,module,exports){
"use strict";

var saleableBasic = function saleableBasic() {
    return {
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/saleable_details_list.html",
        replace: true,
        scope: { saleable: "=" },
        controller: "saleableAllDetailsCtrl"

    };
};
module.exports = saleableBasic;

},{}],44:[function(require,module,exports){
"use strict";

var saleablePrices = function saleablePrices() {
    return {
        restrict: "EA",
        templateUrl: "../../js/admin/angular/templates/saleable_prices_list.html",
        replace: true,
        scope: { saleable: "=" },
        controller: "saleablePriceCtrl"

    };
};
module.exports = saleablePrices;

},{}],45:[function(require,module,exports){
'use strict';

var bioService = function bioService(restmod) {
  return restmod.model('/bio').mix('DefaultPacker', {
    $config: { jsonMeta: '.' }

  });
};
module.exports = bioService;

},{}],46:[function(require,module,exports){
'use strict';

var categoryService = function categoryService(restmod) {
    return restmod.model('/cat').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = categoryService;

},{}],47:[function(require,module,exports){
"use strict";

var categoryHelper = function categoryHelper($http) {

    return {
        categoryList: function categoryList(path, scope) {
            $http.get(path).success(function (data) {
                scope.catoptions = data.categories;
            }).error();
        },
        salCategoryList: function salCategoryList(path, scope) {
            $http.get(path).success(function (data) {
                var cats = data.categories;
                scope.saleable.categories = cats;
            }).error();
        },
        projectCategoryList: function projectCategoryList(path, scope) {
            $http.get(path).success(function (data) {
                var cats = data.categories;
                scope.project.categories = cats;
            }).error();
        }

    };
};

module.exports = categoryHelper;

},{}],48:[function(require,module,exports){
'use strict';

var educationService = function educationService(restmod) {
    return restmod.model('/education').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = educationService;

},{}],49:[function(require,module,exports){
'use strict';

var experienceService = function experienceService(restmod) {
    return restmod.model('/experience').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = experienceService;

},{}],50:[function(require,module,exports){
"use strict";

var fileProcessor = function fileProcessor($upload, $http, MessageService, $timeout) {
    return {
        upload: function upload(scope, path, data) {

            var files = scope.files[0];
            scope.fileerrors = [];
            var numberOfFiles = scope.files.length;
            if (numberOfFiles > 1 && numberOfFiles < 8) {
                files = scope.files;
            } else if (numberOfFiles > 7) {
                console.log("no cargue asiiiii");
            }
            console.log(files);
            for (var i = 0; i < scope.files.length; i++) {
                var file = scope.files[i];
                //var file = scope.files;
                scope.upload = $upload.upload({
                    url: path, //upload.php script, node.js route, or servlet url
                    method: 'POST', //or 'PUT',
                    file: file,
                    data: data
                }).progress(function (evt) {
                    scope.getPercentage = function () {
                        return parseInt(100.0 * evt.loaded / evt.total);
                    };
                }).success(function (data) {
                    scope.hasIcon = true;
                    scope.descriptiveImage = data.img;
                    scope.getPercentage = function () {
                        return 0;
                    };
                    scope.images.$refresh();
                }).error(function (data) {
                    MessageService.setServerValidationMessage(scope);
                    scope.fileerrors.push(data);
                    $timeout(function () {
                        scope.fileerrors.splice(0, scope.fileerrors.length);
                    }, 10000);
                });
            }
        },
        download: function download(scope, path) {
            $http.get(path).success(function (data) {
                scope.descriptiveImage = data.img;
            }).error(function (data) {
                console.log(data);
            });
        }

    };
};
module.exports = fileProcessor;

},{}],51:[function(require,module,exports){
"use strict";

var numberFormat = function numberFormat() {
    return function (_value) {
        var numberFormatted = parseFloat(_value);
        return numberFormatted;
    };
};
module.exports = numberFormat;

},{}],52:[function(require,module,exports){
'use strict';

var galleryService = function galleryService(restmod) {
    return restmod.model('/galimage').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = galleryService;

},{}],53:[function(require,module,exports){
"use strict";

var helperService = function helperService() {
    return {
        months: function months() {
            var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            return months;
        },
        enableForm: function enableForm(scope, status) {
            if (status) {
                scope.gridShown = false;
                scope.formShown = true;
            } else {
                scope.gridShown = true;
                scope.formShown = false;
            }
        },
        getCheckButtonStatus: function getCheckButtonStatus(event) {
            var checkbox = event.target;
            var action = checkbox.checked ? true : false;
            return action;
        }
    };
};
module.exports = helperService;

},{}],54:[function(require,module,exports){
'use strict';

var HomeCallOutService = function HomeCallOutService(restmod) {
    return restmod.model('/homecallout').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = HomeCallOutService;

},{}],55:[function(require,module,exports){
'use strict';

var interestService = function interestService(restmod) {
    return restmod.model('/interest').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = interestService;

},{}],56:[function(require,module,exports){
'use strict';

var languageService = function languageService(restmod) {
    return restmod.model('/language').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = languageService;

},{}],57:[function(require,module,exports){
"use strict";

var messageService = function messageService(Messages, $timeout) {
    return {
        get: function get(name) {
            return Messages.filter(function (obj) {
                // coerce both obj.id and id to numbers
                // for val & type comparison
                //return +obj.name === +name;
                return obj.name === name;
            })[0];
        },
        setAlertMessage: function setAlertMessage(scope, data) {
            scope.ShowResultAlert = true;
            scope.result = data;
            $timeout(function () {
                scope.ShowResultAlert = false;
            }, 4000);
        },
        setServerValidationMessage: function setServerValidationMessage(scope) {
            scope.ShowServerErrors = true;
            scope.result = "Los datos no se pudieron guardar" + " debido a los siguientes errores. Por favor corrígelos.";
            $timeout(function () {
                scope.ShowServerErrors = false;
            }, 5000);
        },
        setNoItemsInfoMessage: function setNoItemsInfoMessage(scope, datatype, additional) {
            scope.showNoItemsAlert = true;
            scope.result = "No se han encontrado " + datatype + additional;
            $timeout(function () {
                scope.showNoItemsAlert = false;
            }, 8000);
        },
        setConfirmDeleteMessage: function setConfirmDeleteMessage(item, additional) {
            return confirm("Realmente deseas eliminar este/a" + item + "?. " + additional + "");
        }

    };
};
module.exports = messageService;

},{}],58:[function(require,module,exports){
'use strict';

var newPassword = function newPassword($http) {
    //$http.post();
    return {
        updatePassword: function updatePassword(userId, data) {
            return $http.post('/admin/newpassword/' + userId, data);
        }
    };
};

module.exports = newPassword;

},{}],59:[function(require,module,exports){
'use strict';

var profileService = function profileService(restmod) {
    return restmod.model('/profile').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = profileService;

},{}],60:[function(require,module,exports){
'use strict';

var projectService = function projectService(restmod) {
    return restmod.model('/project').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = projectService;

},{}],61:[function(require,module,exports){
"use strict";

var resumeHelper = function resumeHelper($http, MessageService) {

    return {
        dropDownList: function dropDownList(path, scope) {
            $http.get(path).success(function (data) {
                scope.resumes = data.resumes;
                scope.resume = scope.resumes[89];
            }).error();
        },
        bioDropDownList: function bioDropDownList(path, scope) {
            $http.get(path).success(function (data) {
                scope.bios = data.bios;
            }).error();
        },
        getResumePub: function getResumePub(scope, rootScope, path) {

            $http.get(path).success(function (data) {

                var resume = data.resume;

                if (resume === null) {
                    rootScope.$emit("noResumeFound");
                } else {

                    rootScope.$emit("resumeChange", data);
                }
            });
        },
        publishResume: function publishResume(scope, rootScope, path) {
            $http.post(path).success(function (data) {
                var meta = data.meta;
                MessageService.setAlertMessage(scope, meta);
            }).error();
        },
        cloneResume: function cloneResume(scope, rootScope, path) {
            $http.post(path).success(function (data) {
                rootScope.$emit("resumeChange", data);
                rootScope.$emit("updateResumeList", data);
                var meta = data.meta;
                MessageService.setAlertMessage(scope, meta);
            }).error();
        }
        /*unpublishResume:function(scope,rootScope,path){
            $http.post(path).success(function(data){
                console.log("unpu");
            }).error();
        }*/
    };
};

module.exports = resumeHelper;

},{}],62:[function(require,module,exports){
'use strict';

var resumeService = function resumeService(restmod) {
    return restmod.model('/resume').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = resumeService;

},{}],63:[function(require,module,exports){
'use strict';

var seleableDetails = function seleableDetails(restmod) {
    return restmod.model('/saleabledetail').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = seleableDetails;

},{}],64:[function(require,module,exports){
'use strict';

var seleablePrice = function seleablePrice(restmod) {
    return restmod.model('/saleableprice').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    }).mix({
        ammount: { decode: 'NumberFormat' },
        discount: { decode: 'NumberFormat' }
    });
};
module.exports = seleablePrice;

},{}],65:[function(require,module,exports){
'use strict';

var seleableService = function seleableService(restmod) {
    return restmod.model('/saleable').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = seleableService;

},{}],66:[function(require,module,exports){
'use strict';

var skillService = function skillService(restmod) {
    return restmod.model('/skill').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = skillService;

},{}],67:[function(require,module,exports){
"use strict";

var thePacker = function thePacker() {

    function MyPacker(_model) {
        //this.meta = _model.$getProperty('jsonMeta', 'meta');
        console.log(_model);
        // you can set some model specific behaviour here, like the property being extracted.
    }

    MyPacker.prototype = {
        unPack: function unPack(_rawData, _record) {
            console.log(_rawData);
            _record.$metadata = _rawData; // store metadata associated with request
            return _rawData.myProp; // extract property from request data.
        },
        unPackMany: function unPackMany(_rawData, _collection) {

            _collection.$metadata = _rawData; // store metadata associated with request
            return _collection.myProp; // extract property from request data.
        }
    };

    return MyPacker;
};
module.exports = thePacker;

},{}],68:[function(require,module,exports){
'use strict';

var userContentType = function userContentType(restmod) {
    return restmod.model('/usercontenttype').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};

module.exports = userContentType;

},{}],69:[function(require,module,exports){
'use strict';

var userService = function userService(restmod) {
    return restmod.model('/user').mix('DefaultPacker', {
        $config: { jsonMeta: '.' }
    });
};
module.exports = userService;

},{}],70:[function(require,module,exports){
'use strict';

var JQuery = require('jquery/dist/jquery.min');
var angular = require('./../vendor/angular/index.js');
var angular_restmod = require('./../vendor/angular-restmod/dist/angular-restmod-bundle.min.js');
var res_style = require('./../vendor/angular-restmod/dist/styles/ams.min.js');
var stc_messages = require('./config/messages.js');

var ngFabForm = require('./../vendor/ng-fab-form/dist/ng-fab-form.min.js');
var ngMessages = require('./../vendor/angular-messages/angular-messages.min.js');
/*var froala = require('./../vendor/angular-froala/src/angular-froala.js');
var froalasan = require('./../vendor/angular-froala/src/froala-sanitize.js');*/
/*var textAngular = require('./../vendor/textAngular/dist/textAngular-rangy.min.js');
var sanitize = require('./../vendor/textAngular/dist/textAngular-sanitize.min.js');
var rangy = require('./../vendor/textAngular/dist/textAngular.min.js');*/
/*var sanitize = require('./../vendor/textAngular/dist/textAngular-sanitize.min.js');*/
var uploadLibp1 = require('../vendor/angularjs-file-upload/angular-file-upload-shim.min.js');
var uploadLibp2 = require('../vendor/angularjs-file-upload/angular-file-upload.min.js');

var nganimate = require('./../vendor/angular_animate/angular-animate.min.js');

window.rangy = require('rangy/lib/rangy-core');
window.rangy.saveSelection = require('rangy/lib/rangy-selectionsaverestore');

require('textangular/dist/textAngular-sanitize.min');
require('textangular/dist/textAngular.min');
require('textangular/dist/textAngularSetup');
var prfapp = angular.module('prfapp', ['restmod', 'ngFabForm', 'ngMessages', 'angularFileUpload', 'ngAnimate', 'textAngular']);

prfapp.config(['restmodProvider', '$httpProvider', 'ngFabFormProvider', function (restmodProvider, $httpProvider, ngFabFormProvider) {
    restmodProvider.rebase('AMSApi');
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    restmodProvider.rebase('DefaultPacker');

    ngFabFormProvider.extendConfig({
        validationsTemplate: '../../js/admin/angular/templates/customValidationTemplate.html'
        /*,setFormDirtyOnSubmit: true*/
    });

    $httpProvider.interceptors.push(function ($q, $rootScope, $timeout) {
        return {
            'request': function request(config) {
                $rootScope.showSystemAlert = false;
                $rootScope.showSpinner = true;
                return config;
            },

            'response': function response(_response) {
                $rootScope.showSpinner = false;
                return _response;
            },
            'requestError': function requestError(rejection) {
                console.log(rejection);
                return $q.reject(rejection);
            },
            'responseError': function responseError(rejection) {

                var status = rejection.status;
                switch (status) {
                    case 401:
                        $rootScope.showSpinner = false;
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Ha caducado tu sesión. Debes ingresar nuevamente!";
                        $timeout(function () {
                            location.href = "/auth/logout";
                        }, 4000);
                        break;
                    case 500:
                        $rootScope.showSpinner = false;
                        $timeout(function () {
                            $rootScope.showSystemAlert = false;
                        }, 3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Vaya! :( Hubo un problema en la respuesta del servidor. <br>" + "Por favor intenta la acción nuevamente o contacta al Administrador";
                        break;
                    case 404:
                        $rootScope.showSpinner = false;
                        $timeout(function () {
                            $rootScope.showSystemAlert = false;
                        }, 3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Vaya! :( No se encontró el servicio que requieres. <br>" + "Por favor intenta la acción nuevamente o contacta al Administrador";
                        break;
                    /*case 413:
                        //$rootScope.messageType = 'danger';
                        //$rootScope.fileTooLarge = true;
                        //$rootScope.fileTooLargeMessage = "Está intentando subir un archivo demasiado pesado. El archivo no debe superar los 5MB";
                        alert("Está intentando subir un archivo demasiado pesado. El archivo no debe superar los 5MB");
                        location.reload();
                        break;*/
                    default:
                        $rootScope.showSpinner = false;
                        $timeout(function () {
                            $rootScope.showSystemAlert = false;
                        }, 3000);
                        $rootScope.showSystemAlert = true;
                        $rootScope.systemAlert = "Se detectó un problema de conexión. <br>" + "Por favor comprueba que estás conectada/o a una red. Si persisten los problemas, <br> por favor contacta al Administrador.";

                }
                return $q.reject(rejection);
            }
        };
    });
}]);

var homeController = require('./admin/angular/controllers/homecontroller');
var bioController = require('./admin/angular/controllers/biocontroller');
var userController = require('./admin/angular/controllers/usercontroller');
var configController = require('./admin/angular/controllers/configcontroller');
var saleableController = require('./admin/angular/controllers/saleablecontroller');
var saleableDetailController = require('./admin/angular/controllers/saleabledetailcontroller');
var saleableBasicController = require('./admin/angular/controllers/basicdetailcontroller');
var saleableAllDetailsController = require('./admin/angular/controllers/saleablealldetailscontroller');
var saleablePriceController = require('./admin/angular/controllers/saleablepricescontroller');
var resumeController = require('./admin/angular/controllers/resumecontroller');
var portfolioController = require('./admin/angular/controllers/portfoliocontroller');

var messageService = require('./admin/angular/services/messageservice');
var userService = require('./admin/angular/services/userservice');
var userContentTypeService = require('./admin/angular/services/usercontenttypeservice');
var profileService = require('./admin/angular/services/profileservice');
var saleableService = require('./admin/angular/services/saleableservice');
var bioService = require('./admin/angular/services/biographyservice');
var thePacker = require('./admin/angular/services/thepacker');
var saleableDetailService = require('./admin/angular/services/saleabledetails');
var saleablePriceService = require('./admin/angular/services/saleableprice');
var newPassword = require('./admin/angular/services/newpasswordservice');
var numberFormat = require('./admin/angular/services/formatfilterservice');
var fileProcessor = require('./admin/angular/services/fileprocessor');
var resumeService = require('./admin/angular/services/resumeservice');
var resumeHelper = require('./admin/angular/services/resumehelper');
var categoryHelper = require('./admin/angular/services/categoryhelper');
var experienceService = require('./admin/angular/services/experience');
var helpersService = require('./admin/angular/services/helpers');
var educationService = require('./admin/angular/services/education');
var skillService = require('./admin/angular/services/skill');
var languageService = require('./admin/angular/services/language');
var interestService = require('./admin/angular/services/interest');
var categoryService = require('./admin/angular/services/category');
var projectService = require('./admin/angular/services/project');
var galleryService = require('./admin/angular/services/gallery');
var homeCalloutService = require('./admin/angular/services/homecallout');

var alertDirective = require('./admin/angular/directives/global/alertdirective');
var closeContentDirective = require('./admin/angular/directives/global/closecontentdirective');
var contentSelectorDirective = require('./admin/angular/directives/global/contentselector');
var prodileMenuDirective = require('./admin/angular/directives/profile/profilemenu');
var configMenuDirective = require('./admin/angular/directives/global/configmenu');
var categoryDirective = require('./admin/angular/directives/configuration/category');
var projectListDirective = require('./admin/angular/directives/portfolio/projectlist');
var projectWizardDirective = require('./admin/angular/directives/portfolio/projectwizard');
var projectDirective = require('./admin/angular/directives/portfolio/project');
var projectGalleryDirective = require('./admin/angular/directives/portfolio/projectgallery');
var homePageDirective = require('./admin/angular/directives/homepage/homecalls');

var resumeSelectorDirective = require('./admin/angular/directives/resume/resumeselector');
var resumeDirective = require('./admin/angular/directives/resume/resumedirective');
var resumeEditForm = require('./admin/angular/directives/resume/resumeeditform');
var resumeForm = require('./admin/angular/directives/resume/resumeform');
var resumeExperience = require('./admin/angular/directives/resume/experience');
var resumeSections = require('./admin/angular/directives/resume/sections');
var resumeEducation = require('./admin/angular/directives/resume/education');
var resumeSkill = require('./admin/angular/directives/resume/skill');
var resumeLanguage = require('./admin/angular/directives/resume/language');
var resumeInterest = require('./admin/angular/directives/resume/interest');
var resumeList = require('./admin/angular/directives/resume/resumelist');

var bioDirective = require('./admin/angular/directives/biographies/biography');

var saleableDetails = require('./admin/angular/directives/saleables/saleabledetails');
var saleableBasic = require('./admin/angular/directives/saleables/saleablebasic');
var saleableDetailsList = require('./admin/angular/directives/saleables/saleabledetailslist');
var saleablePricesList = require('./admin/angular/directives/saleables/saleablepriceslist');

prfapp.factory('Messages', [stc_messages]);
prfapp.factory('MessageService', ['Messages', '$timeout', messageService]);
prfapp.factory('UserService', ['restmod', userService]);
prfapp.factory('ProfileService', ['restmod', profileService]);
prfapp.factory('SaleableService', ['restmod', saleableService]);
prfapp.factory('SaleableDetailsService', ['restmod', saleableDetailService]);
prfapp.factory('SaleablePriceService', ['restmod', saleablePriceService]);
prfapp.factory('UserContentType', ['restmod', userContentTypeService]);
prfapp.factory('BiographyService', ['restmod', bioService]);
prfapp.factory('ThePacker', [thePacker]);
prfapp.factory('NewPassword', ['$http', newPassword]);
prfapp.factory('NumberFormatFilter', [numberFormat]);
prfapp.factory('FileProcessor', ['$upload', '$http', 'MessageService', '$timeout', fileProcessor]);
prfapp.factory('Resume', ['restmod', resumeService]);
prfapp.factory('Experience', ['restmod', experienceService]);
prfapp.factory('ResumeHelper', ['$http', 'MessageService', resumeHelper]);
prfapp.factory('CategoryHelper', ['$http', categoryHelper]);
prfapp.factory('Helper', [helpersService]);
prfapp.factory('Education', ['restmod', educationService]);
prfapp.factory('Skill', ['restmod', skillService]);
prfapp.factory('Language', ['restmod', languageService]);
prfapp.factory('Interest', ['restmod', interestService]);
prfapp.factory('Category', ['restmod', categoryService]);
prfapp.factory('Project', ['restmod', projectService]);
prfapp.factory('Gallery', ['restmod', galleryService]);
prfapp.factory('Homecallout', ['restmod', homeCalloutService]);

prfapp.directive('alert', [alertDirective]);
prfapp.directive('closeContent', [closeContentDirective]);
prfapp.directive('contentSelector', ['MessageService', 'UserContentType', contentSelectorDirective]);
prfapp.directive('profileMenu', [prodileMenuDirective]);
prfapp.directive('configMenu', [configMenuDirective]);
prfapp.directive('saleableDetails', ['$templateCache', '$compile', '$rootScope', saleableDetails]);
prfapp.directive('saleableBasic', ['SaleableService', saleableBasic]);
prfapp.directive('saleableDetailsList', [saleableDetailsList]);
prfapp.directive('saleablePricesList', [saleablePricesList]);

prfapp.directive('resumeSelector', ['MessageService', resumeSelectorDirective]);
prfapp.directive('resume', ['MessageService', 'Resume', '$timeout', 'ResumeHelper', resumeDirective]);
prfapp.directive('resumeEditForm', ['MessageService', 'Resume', 'ResumeHelper', '$timeout', resumeEditForm]);
prfapp.directive('resumeForm', ['MessageService', 'Resume', 'ResumeHelper', '$timeout', resumeForm]);
prfapp.directive('resumeExperience', ['MessageService', 'Experience', '$timeout', 'Helper', resumeExperience]);
prfapp.directive('resumeSections', ['Resume', resumeSections]);
prfapp.directive('resumeEducation', ['MessageService', 'Education', '$timeout', 'Helper', resumeEducation]);
prfapp.directive('resumeSkill', ['MessageService', 'Skill', '$timeout', 'Helper', resumeSkill]);
prfapp.directive('resumeLanguage', ['MessageService', 'Language', '$timeout', 'Helper', resumeLanguage]);
prfapp.directive('resumeInterest', ['MessageService', 'Interest', '$timeout', 'Helper', resumeInterest]);
prfapp.directive('biography', ['MessageService', 'BiographyService', '$timeout', 'Helper', '$http', bioDirective]);
prfapp.directive('resumeList', ['MessageService', 'Resume', '$timeout', 'Helper', resumeList]);
prfapp.directive('categoryManager', ['MessageService', 'Category', '$timeout', 'Helper', categoryDirective]);
prfapp.directive('projectList', ['MessageService', 'Project', '$timeout', 'Helper', projectListDirective]);
prfapp.directive('projectWizard', ['MessageService', 'Project', '$timeout', 'Helper', projectWizardDirective]);
prfapp.directive('project', ['MessageService', 'Project', '$timeout', 'CategoryHelper', 'FileProcessor', 'Helper', projectDirective]);
prfapp.directive('projectGallery', ['MessageService', 'Project', '$timeout', 'FileProcessor', 'Gallery', projectGalleryDirective]);
prfapp.directive('homePage', ['MessageService', 'Homecallout', '$timeout', 'Helper', 'FileProcessor', '$http', homePageDirective]);

prfapp.controller('HomeCtrl', ['$scope', 'UserService', 'UserContentType', homeController]);
prfapp.controller('BioCtrl', ['$scope', 'BiographyService', 'MessageService', bioController]);
prfapp.controller('UserCtrl', ['$scope', '$timeout', 'UserService', 'ProfileService', 'MessageService', 'NewPassword', userController]);
prfapp.controller('ConfigCtrl', ['$scope', '$timeout', 'MessageService', 'UserContentType', configController]);

prfapp.controller('SaleableCtrl', ['$scope', '$rootScope', '$timeout', 'SaleableService', 'MessageService', 'SaleableDetailsService', saleableController]);
prfapp.controller('SaleableDetailCtrl', ['$scope', '$rootScope', 'SaleableService', 'MessageService', '$element', '$compile', saleableDetailController]);
prfapp.controller('saleableBasicCtrl', ['$scope', '$rootScope', 'SaleableService', 'MessageService', 'CategoryHelper', saleableBasicController]);
prfapp.controller('saleableAllDetailsCtrl', ['$scope', '$rootScope', 'SaleableDetailsService', 'MessageService', 'FileProcessor', saleableAllDetailsController]);
prfapp.controller('saleablePriceCtrl', ['$scope', '$rootScope', 'SaleablePriceService', 'MessageService', saleablePriceController]);
prfapp.controller('resumeCtrl', ['$scope', '$rootScope', 'ResumeHelper', 'MessageService', resumeController]);
prfapp.controller('PortfolioCtrl', ['$scope', '$rootScope', portfolioController]);

},{"../vendor/angularjs-file-upload/angular-file-upload-shim.min.js":78,"../vendor/angularjs-file-upload/angular-file-upload.min.js":79,"./../vendor/angular-messages/angular-messages.min.js":72,"./../vendor/angular-restmod/dist/angular-restmod-bundle.min.js":73,"./../vendor/angular-restmod/dist/styles/ams.min.js":74,"./../vendor/angular/index.js":76,"./../vendor/angular_animate/angular-animate.min.js":77,"./../vendor/ng-fab-form/dist/ng-fab-form.min.js":80,"./admin/angular/controllers/basicdetailcontroller":7,"./admin/angular/controllers/biocontroller":8,"./admin/angular/controllers/configcontroller":9,"./admin/angular/controllers/homecontroller":10,"./admin/angular/controllers/portfoliocontroller":11,"./admin/angular/controllers/resumecontroller":12,"./admin/angular/controllers/saleablealldetailscontroller":13,"./admin/angular/controllers/saleablecontroller":14,"./admin/angular/controllers/saleabledetailcontroller":15,"./admin/angular/controllers/saleablepricescontroller":16,"./admin/angular/controllers/usercontroller":17,"./admin/angular/directives/biographies/biography":18,"./admin/angular/directives/configuration/category":19,"./admin/angular/directives/global/alertdirective":20,"./admin/angular/directives/global/closecontentdirective":21,"./admin/angular/directives/global/configmenu":22,"./admin/angular/directives/global/contentselector":23,"./admin/angular/directives/homepage/homecalls":24,"./admin/angular/directives/portfolio/project":25,"./admin/angular/directives/portfolio/projectgallery":26,"./admin/angular/directives/portfolio/projectlist":27,"./admin/angular/directives/portfolio/projectwizard":28,"./admin/angular/directives/profile/profilemenu":29,"./admin/angular/directives/resume/education":30,"./admin/angular/directives/resume/experience":31,"./admin/angular/directives/resume/interest":32,"./admin/angular/directives/resume/language":33,"./admin/angular/directives/resume/resumedirective":34,"./admin/angular/directives/resume/resumeeditform":35,"./admin/angular/directives/resume/resumeform":36,"./admin/angular/directives/resume/resumelist":37,"./admin/angular/directives/resume/resumeselector":38,"./admin/angular/directives/resume/sections":39,"./admin/angular/directives/resume/skill":40,"./admin/angular/directives/saleables/saleablebasic":41,"./admin/angular/directives/saleables/saleabledetails":42,"./admin/angular/directives/saleables/saleabledetailslist":43,"./admin/angular/directives/saleables/saleablepriceslist":44,"./admin/angular/services/biographyservice":45,"./admin/angular/services/category":46,"./admin/angular/services/categoryhelper":47,"./admin/angular/services/education":48,"./admin/angular/services/experience":49,"./admin/angular/services/fileprocessor":50,"./admin/angular/services/formatfilterservice":51,"./admin/angular/services/gallery":52,"./admin/angular/services/helpers":53,"./admin/angular/services/homecallout":54,"./admin/angular/services/interest":55,"./admin/angular/services/language":56,"./admin/angular/services/messageservice":57,"./admin/angular/services/newpasswordservice":58,"./admin/angular/services/profileservice":59,"./admin/angular/services/project":60,"./admin/angular/services/resumehelper":61,"./admin/angular/services/resumeservice":62,"./admin/angular/services/saleabledetails":63,"./admin/angular/services/saleableprice":64,"./admin/angular/services/saleableservice":65,"./admin/angular/services/skill":66,"./admin/angular/services/thepacker":67,"./admin/angular/services/usercontenttypeservice":68,"./admin/angular/services/userservice":69,"./config/messages.js":71,"jquery/dist/jquery.min":1,"rangy/lib/rangy-core":2,"rangy/lib/rangy-selectionsaverestore":3,"textangular/dist/textAngular-sanitize.min":4,"textangular/dist/textAngular.min":5,"textangular/dist/textAngularSetup":6}],71:[function(require,module,exports){
"use strict";

var stc_messages = function stc_messages() {
    return [{
        "code": 701,
        "name": "contentselector_info",
        "message": 'Activa las opciones que quieres que aparezcan en tu sitio Web.' + 'Por ejemplo, si no es tu objetivo mostrar Servicios a tus visitantes, puedes desactivar la casilla "Servicios" y ese contenido no se mostrará.',
        "type": "info"
    }, {
        "code": 702,
        "name": "resumeselector_info",
        "message": 'Pulsa la opción para ir a la sección del Résumé indicada',
        "type": "info"
    }];
};
module.exports = stc_messages;

},{}],72:[function(require,module,exports){
/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
"use strict";

(function (r, f, s) {
  'use strict';f.module("ngMessages", []).directive("ngMessages", ["$compile", "$animate", "$templateRequest", function (q, k, l) {
    return { restrict: "AE", controller: function controller() {
        this.$renderNgMessageClasses = f.noop;var b = [];this.registerMessage = function (d, a) {
          for (var c = 0; c < b.length; c++) if (b[c].type == a.type) {
            if (d != c) {
              var g = b[d];b[d] = b[c];d < b.length ? b[c] = g : b.splice(0, c);
            }return;
          }b.splice(d, 0, a);
        };this.renderMessages = function (d, a) {
          d = d || {};var c;f.forEach(b, function (b) {
            var e;if (e = !c || a) e = d[b.type], e = null !== e && !1 !== e && e;e ? (b.attach(), c = !0) : b.detach();
          });this.renderElementClasses(c);
        };
      }, require: "ngMessages", link: function link(b, d, a, c) {
        c.renderElementClasses = function (b) {
          b ? k.setClass(d, "ng-active", "ng-inactive") : k.setClass(d, "ng-inactive", "ng-active");
        };var g = f.isString(a.ngMessagesMultiple) || f.isString(a.multiple),
            e;b.$watchCollection(a.ngMessages || a["for"], function (b) {
          e = b;c.renderMessages(b, g);
        });(a = a.ngMessagesInclude || a.include) && l(a).then(function (a) {
          var h;a = f.element("<div/>").html(a);f.forEach(a.children(), function (a) {
            a = f.element(a);h ? h.after(a) : d.prepend(a);h = a;q(a)(b);
          });c.renderMessages(e, g);
        });
      } };
  }]).directive("ngMessage", ["$animate", function (f) {
    return { require: "^ngMessages", transclude: "element", terminal: !0, restrict: "AE", link: function link(k, l, b, d, a) {
        for (var c, g, e = l[0], n = e.parentNode, h = 0, p = 0; h < n.childNodes.length; h++) {
          var m = n.childNodes[h];if (8 == m.nodeType && 0 <= m.nodeValue.indexOf("ngMessage")) {
            if (m === e) {
              c = p;break;
            }p++;
          }
        }d.registerMessage(c, { type: b.ngMessage || b.when, attach: function attach() {
            g || a(k, function (a) {
              f.enter(a, null, l);g = a;
            });
          }, detach: function detach(a) {
            g && (f.leave(g), g = null);
          } });
      } };
  }]);
})(window, window.angular);


},{}],73:[function(require,module,exports){
/**
 * API Bound Models for AngularJS
 * @version v1.1.7 - 2015-01-06
 * @link https://github.com/angular-platanus/restmod
 * @author Ignacio Baixas <ignacio@platan.us>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";

!(function (a, b) {
  "use strict";!(function (a) {
    a.module("platanus.inflector", []).provider("inflector", [function () {
      function a(a, b, c) {
        if (-1 === c.indexOf(a.toLowerCase())) for (var d, e = 0; d = b[e++];) if (a.match(d[0])) return a.replace(d[0], d[1]);return a;
      }var b = "en",
          c = { en: { uncountable: ["music", "art", "love", "happiness", "advice", "furniture", "luggage", "sugar", "butter", "water", "electricity", "gas", "power", "currency", "equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "moose", "deer", "news"], plural: [[new RegExp("(m)an$", "gi"), "$1en"], [new RegExp("(pe)rson$", "gi"), "$1ople"], [new RegExp("(child)$", "gi"), "$1ren"], [new RegExp("^(ox)$", "gi"), "$1en"], [new RegExp("(ax|test)is$", "gi"), "$1es"], [new RegExp("(octop|vir)us$", "gi"), "$1i"], [new RegExp("(alias|status)$", "gi"), "$1es"], [new RegExp("(bu)s$", "gi"), "$1ses"], [new RegExp("(buffal|tomat|potat)o$", "gi"), "$1oes"], [new RegExp("([ti])um$", "gi"), "$1a"], [new RegExp("sis$", "gi"), "ses"], [new RegExp("(?:([^f])fe|([lr])f)$", "gi"), "$1$2ves"], [new RegExp("(hive)$", "gi"), "$1s"], [new RegExp("([^aeiouy]|qu)y$", "gi"), "$1ies"], [new RegExp("(x|ch|ss|sh)$", "gi"), "$1es"], [new RegExp("(matr|vert|ind)ix|ex$", "gi"), "$1ices"], [new RegExp("([m|l])ouse$", "gi"), "$1ice"], [new RegExp("(quiz)$", "gi"), "$1zes"], [new RegExp("s$", "gi"), "s"], [new RegExp("$", "gi"), "s"]], singular: [[new RegExp("(m)en$", "gi"), "$1an"], [new RegExp("(pe)ople$", "gi"), "$1rson"], [new RegExp("(child)ren$", "gi"), "$1"], [new RegExp("([ti])a$", "gi"), "$1um"], [new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$", "gi"), "$1$2sis"], [new RegExp("(hive)s$", "gi"), "$1"], [new RegExp("(tive)s$", "gi"), "$1"], [new RegExp("(curve)s$", "gi"), "$1"], [new RegExp("([lr])ves$", "gi"), "$1f"], [new RegExp("([^fo])ves$", "gi"), "$1fe"], [new RegExp("([^aeiouy]|qu)ies$", "gi"), "$1y"], [new RegExp("(s)eries$", "gi"), "$1eries"], [new RegExp("(m)ovies$", "gi"), "$1ovie"], [new RegExp("(x|ch|ss|sh)es$", "gi"), "$1"], [new RegExp("([m|l])ice$", "gi"), "$1ouse"], [new RegExp("(bus)es$", "gi"), "$1"], [new RegExp("(o)es$", "gi"), "$1"], [new RegExp("(shoe)s$", "gi"), "$1"], [new RegExp("(cris|ax|test)es$", "gi"), "$1is"], [new RegExp("(octop|vir)i$", "gi"), "$1us"], [new RegExp("(alias|status)es$", "gi"), "$1"], [new RegExp("^(ox)en", "gi"), "$1"], [new RegExp("(vert|ind)ices$", "gi"), "$1ex"], [new RegExp("(matr)ices$", "gi"), "$1ix"], [new RegExp("(quiz)zes$", "gi"), "$1"], [new RegExp("s$", "gi"), ""]] } };return { registerLocale: function registerLocale(a, b) {
          c[a] = b;
        }, setLocale: function setLocale(a) {
          b = a;
        }, $get: ["$log", function (d) {
          function e(a) {
            a = a || b;var e = c[a];return e || d.warn("Invalid inflector locale " + a), e;
          }return { camelize: function camelize(a, b) {
              return "string" != typeof a ? a : a.replace(/(?:^[-_\s]*|[-_\s]+)([A-Z\d])/gi, function (a, c, d) {
                return b || 0 !== d ? c.toUpperCase() : c;
              });
            }, parameterize: function parameterize(a, b) {
              return "string" != typeof a ? a : a.replace(/(?:[A-Z]+|[0-9]+)/g, function (a, c) {
                return 0 === c ? a : (b || "-") + a;
              }).toLowerCase();
            }, dasherize: function dasherize(a, b) {
              return a.replace(/[-_\s]+/g, b || "-");
            }, singularize: function singularize(b, c) {
              var d = e(c);return d ? a(b, d.singular, d.uncountable) : b;
            }, pluralize: function pluralize(b, c) {
              var d = e(c);return d ? a(b, d.plural, d.uncountable) : b;
            } };
        }] };
    }]);
  })(a);var c = a.module("restmod", ["ng", "platanus.inflector"]);c.provider("restmod", [function () {
    function b(a) {
      return function (b) {
        b.invoke(a, this, { $builder: this });
      };
    }var c = ["RMBuilderExt", "RMBuilderRelations", "RMBuilderComputed"];return { rebase: function rebase() {
        var d,
            e,
            f = arguments.length;for (e = 0; f > e; e++) d = arguments[e], (a.isArray(d) || a.isFunction(d)) && (d = b(d)), c.push(d);return this;
      }, $get: ["RMModelFactory", "$log", function (a, b) {
        var d = Array.prototype.slice,
            e = { model: function model(e) {
            var f = a(e, c);return arguments.length > 1 && (f.mix(d.call(arguments, 1)), b.warn("Passing mixins and difinitions in the model method will be deprecated in restmod 1.2, use restmod.model().mix() instead.")), f;
          }, mixin: function mixin() {
            return { $isAbstract: !0, $$chain: d.call(arguments, 0) };
          }, singleton: function singleton(a) {
            return e.model.apply(this, arguments).single(a);
          } };return e;
      }] };
  }]).factory("model", ["restmod", function (a) {
    return a.model;
  }]).factory("mixin", ["restmod", function (a) {
    return a.mixin;
  }]), c.factory("RMCollectionApi", ["RMUtils", function (c) {
    var d = a.extend;return { $isCollection: !0, $initialize: function $initialize() {
        this.$dispatch("after-collection-init");
      }, $decode: function $decode(b, d) {
        c.assert(b && a.isArray(b), "Collection $decode expected array");for (var e = 0, f = b.length; f > e; e++) this.$buildRaw(b[e], d).$reveal();return this.$dispatch("after-feed-many", [b]), this;
      }, $encode: function $encode(a) {
        for (var b = [], c = 0, d = this.length; d > c; c++) b.push(this[c].$encode(a));return this.$dispatch("before-render-many", [b]), b;
      }, $clear: function $clear() {
        return this.$always(function () {
          this.length = 0;
        });
      }, $fetch: function $fetch(a) {
        return this.$action(function () {
          var b = { method: "GET", url: this.$url("fetchMany"), params: this.$params };a && (b.params = b.params ? d(b.params, a) : a), this.$dispatch("before-fetch-many", [b]).$send(b, function (a) {
            this.$unwrap(a.data).$dispatch("after-fetch-many", [a]);
          }, function (a) {
            this.$dispatch("after-fetch-many-error", [a]);
          });
        });
      }, $add: function $add(a, d) {
        return c.assert(a.$type && a.$type === this.$type, "Collection $add expects record of the same $type"), this.$action(function () {
          a.$position === b && (d !== b ? this.splice(d, 0, a) : this.push(a), a.$position = !0, this.$dispatch("after-add", [a]));
        });
      }, $remove: function $remove(a) {
        return this.$action(function () {
          var c = this.$indexOf(a);-1 !== c && (this.splice(c, 1), a.$position = b, this.$dispatch("after-remove", [a]));
        });
      }, $indexOf: function $indexOf(a) {
        for (var b = "function" == typeof a ? a : !1, c = 0, d = this.length; d > c; c++) if (b ? b(this[c]) : this[c] === a) return c;return -1;
      } };
  }]), c.factory("RMCommonApi", ["$http", "RMFastQ", "$log", function (c, d, e) {
    function f(a, c) {
      var d = a.$dispatcher();return function (e) {
        var f = a.$promise;a.$promise = b;try {
          a.$last = e;var g = d ? a.$decorate(d, c, [a]) : c.call(a, a);return g === b ? a.$promise : g;
        } finally {
          a.$promise = f;
        }
      };
    }var g = [],
        h = { $url: function $url(a) {
        if (a) {
          if ((a = "$" + a + "UrlFor", this.$scope[a])) return this.$scope[a](this);
        } else if (this.$scope.$canonicalUrlFor) return this.$scope.$canonicalUrlFor(this);return this.$scope.$urlFor(this);
      }, $dispatch: function $dispatch(a, c, d) {
        var e,
            f,
            h,
            i = this.$$dsp;if ((d || (d = this), i && (this.$$dsp = b, i(a, c, d)), this.$$cb && (e = this.$$cb[a]))) for (f = 0; h = e[f]; f++) h.apply(d, c || g);return this.$scope && this.$scope.$dispatch ? this.$scope.$dispatch(a, c, d) : this.$type && this.$type.$dispatch(a, c, d), this.$$dsp = i, this;
      }, $on: function $on(a, b) {
        var c = (this.$$cb || (this.$$cb = {}))[a] || (this.$$cb[a] = []);return c.push(b), this;
      }, $decorate: function $decorate(a, b, c) {
        var d = this.$$dsp;this.$$dsp = "function" != typeof a && a ? function (b, c, e) {
          d && d.apply(null, arguments);var f = a[b];f && f.apply(e, c || g);
        } : a;try {
          return b.apply(this, c);
        } finally {
          this.$$dsp = d;
        }
      }, $dispatcher: function $dispatcher() {
        return this.$$dsp;
      }, $asPromise: function $asPromise() {
        var a = this;return this.$promise ? this.$promise.then(function () {
          return a;
        }, function () {
          return d.reject(a);
        }) : d.when(this);
      }, $then: function $then(a, b) {
        return this.$promise = this.$promise ? this.$promise.then(a ? f(this, a) : a, b ? f(this, b) : b) : d.when(f(this, a)(this)), this;
      }, $always: function $always(a) {
        return this.$then(a, a);
      }, $finally: function $finally(a) {
        return this.$promise = this.$promise["finally"](f(this, a)), this;
      }, $send: function $send(a, b, g) {
        this.$type.getProperty("style") || e.warn("No API style base was selected, see the Api Integration FAQ for more information on this warning");var h = this.$$action;return this.$always(function () {
          return this.$response = null, this.$status = "pending", this.$dispatch("before-request", [a]), c(a).then(f(this, function () {
            h && h.canceled ? this.$status = "canceled" : (this.$status = "ok", this.$response = this.$last, this.$dispatch("after-request", [this.$last]), b && b.call(this, this.$last));
          }), f(this, function () {
            return h && h.canceled ? void (this.$status = "canceled") : (this.$status = "error", this.$response = this.$last, this.$dispatch("after-request-error", [this.$last]), g && g.call(this, this.$last), d.reject(this));
          }));
        });
      }, $action: function $action(a) {
        var b = { canceled: !1 },
            c = this.$pending || (this.$pending = []);return c.push(b), this.$always(function () {
          var c = this.$$action;try {
            return b.canceled ? d.reject(this) : (this.$$action = b, a.call(this));
          } finally {
            this.$$action = c;
          }
        }).$finally(function () {
          c.splice(c.indexOf(b), 1);
        });
      }, $cancel: function $cancel() {
        return this.$pending && a.forEach(this.$pending, function (a) {
          a.canceled = !0;
        }), this;
      }, $hasPendingActions: function $hasPendingActions() {
        var b = 0;return this.$pending && a.forEach(this.$pending, function (a) {
          a.canceled || b++;
        }), b > 0;
      } };return h;
  }]), c.factory("RMExtendedApi", ["$q", "RMPackerCache", function (a, b) {
    return { $decode: function $decode(a, b) {
        return this.$resolved === !1 && this.$clear && this.$clear(), this.$super(a, b), this.$resolved = !0, this;
      }, $unwrap: function $unwrap(a, c) {
        try {
          return b.prepare(), a = this.$type.unpack(this, a), this.$decode(a, c);
        } finally {
          b.clear();
        }
      }, $wrap: function $wrap(a) {
        var b = this.$encode(a);return b = this.$type.pack(this, b);
      }, $reset: function $reset() {
        return this.$cancel().$action(function () {
          this.$resolved = !1;
        });
      }, $resolve: function $resolve(a) {
        return this.$action(function () {
          this.$dispatch("before-resolve", []), this.$resolved || this.$fetch(a);
        });
      }, $refresh: function $refresh(a) {
        return this.$reset().$fetch(a);
      } };
  }]), c.factory("RMListApi", [function () {
    return { $asList: function $asList(a) {
        var b = this.$type.list(),
            c = this.$asPromise();return b.$promise = c.then(function (c) {
          b.push.apply(b, a ? a(c) : c);
        }), b;
      } };
  }]), c.factory("RMRecordApi", ["RMUtils", function (a) {
    var c = function c(b, _c, d) {
      this.$scope = b, this.$target = _c, this.$partial = a.cleanUrl(d);
    };return c.prototype = { $nestedUrl: function $nestedUrl() {
        return a.joinUrl(this.$scope.$url(), this.$partial);
      }, $urlFor: function $urlFor(a) {
        return a.$isCollection || this.$target.isNested() ? this.$nestedUrl() : this.$target.$urlFor(a);
      }, $fetchUrlFor: function $fetchUrlFor() {
        return this.$nestedUrl();
      }, $createUrlFor: function $createUrlFor() {
        return null;
      } }, { $initialize: function $initialize() {
        this.$super(), this.$dispatch("after-init");
      }, $buildUrl: function $buildUrl(c) {
        return this.$pk === b || null === this.$pk ? null : a.joinUrl(c.$url(), this.$pk + "");
      }, $buildScope: function $buildScope(a, b) {
        return a.$buildOwnScope ? void 0 : new c(this, a, b);
      }, $each: function $each(a, b) {
        for (var c in this) this.hasOwnProperty(c) && "$" !== c[0] && a.call(b || this[c], this[c], c);return this;
      }, $decode: function $decode(c, d) {
        return this.$type.decode(this, c, d || a.READ_MASK), (this.$pk === b || null === this.$pk) && (this.$pk = this.$type.inferKey(c)), this.$dispatch("after-feed", [c]), this;
      }, $encode: function $encode(b) {
        var c = this.$type.encode(this, b || a.CREATE_MASK);return this.$dispatch("before-render", [c]), c;
      }, $fetch: function $fetch(b) {
        return this.$action(function () {
          var c = this.$url("fetch");a.assert(!!c, "Cant $fetch if resource is not bound");var d = { method: "GET", url: c, params: b };this.$dispatch("before-fetch", [d]), this.$send(d, function (a) {
            this.$unwrap(a.data), this.$dispatch("after-fetch", [a]);
          }, function (a) {
            this.$dispatch("after-fetch-error", [a]);
          });
        });
      }, $extend: function $extend(a) {
        return this.$action(function () {
          for (var b in a) a.hasOwnProperty(b) && "$" !== b[0] && (this[b] = a[b]);
        });
      }, $update: function $update(a) {
        return this.$extend(a).$save();
      }, $save: function $save(c) {
        return this.$action(function () {
          var d,
              e = this.$url("update");e ? (d = c ? { method: this.$type.getProperty("patchMethod", "PATCH"), url: e, data: this.$wrap(function (a) {
              a = a.replace("[]", "");for (var b = 0, d = c.length; d > b; b++) if (a === c[b] || 0 === a.indexOf(c[b] + ".") || 0 === c[b].indexOf(a + ".")) return !1;return !0;
            }) } : { method: "PUT", url: e, data: this.$wrap(a.UPDATE_MASK) }, this.$dispatch("before-update", [d, !!c]).$dispatch("before-save", [d]).$send(d, function (a) {
            this.$unwrap(a.data).$dispatch("after-update", [a, !!c]).$dispatch("after-save", [a]);
          }, function (a) {
            this.$dispatch("after-update-error", [a, !!c]).$dispatch("after-save-error", [a]);
          })) : (e = this.$url("create") || this.$scope.$url(), a.assert(!!e, "Cant $create if parent scope is not bound"), d = { method: "POST", url: e, data: this.$wrap(a.CREATE_MASK) }, this.$dispatch("before-save", [d]).$dispatch("before-create", [d]).$send(d, function (a) {
            this.$unwrap(a.data), this.$scope.$isCollection && this.$position === b && !this.$preventReveal && this.$scope.$add(this, this.$revealAt), this.$dispatch("after-create", [a]).$dispatch("after-save", [a]);
          }, function (a) {
            this.$dispatch("after-create-error", [a]).$dispatch("after-save-error", [a]);
          }));
        });
      }, $destroy: function $destroy() {
        return this.$action(function () {
          var a = this.$url("destroy");if (a) {
            var b = { method: "DELETE", url: a };this.$dispatch("before-destroy", [b]).$send(b, function (a) {
              this.$scope.$remove && this.$scope.$remove(this), this.$dispatch("after-destroy", [a]);
            }, function (a) {
              this.$dispatch("after-destroy-error", [a]);
            });
          } else this.$scope.$remove && this.$scope.$remove(this);
        });
      }, $moveTo: function $moveTo(a) {
        return this.$position !== b || (this.$revealAt = a), this;
      }, $reveal: function $reveal(a) {
        return a === b || a ? this.$scope.$add(this, this.$revealAt) : this.$preventReveal = !0, this;
      } };
  }]), c.factory("RMScopeApi", ["RMUtils", function () {
    return { $urlFor: function $urlFor(a) {
        var b = this.$type.isNested() ? this : this.$type;return "function" == typeof a.$buildUrl ? a.$buildUrl(b) : b.$url();
      }, $new: function $new(a, b) {
        return this.$super(a, b);
      }, $build: function $build(a) {
        return this.$new().$extend(a);
      }, $buildRaw: function $buildRaw(a, b) {
        var c = this.$new(this.$type.inferKey(a));return c.$decode(a, b), c;
      }, $find: function $find(a, b) {
        return this.$new(a).$resolve(b);
      }, $create: function $create(a) {
        return this.$build(a).$save();
      }, $collection: function $collection(a, b) {
        return this.$super(a, b);
      }, $search: function $search(a) {
        return this.$collection(a).$fetch();
      } };
  }]), c.factory("RMBuilder", ["$injector", "inflector", "$log", "RMUtils", function (b, c, d, e) {
    function f(a) {
      var b = { init: ["attrDefault"], mask: ["attrMask"], ignore: ["attrMask"], map: ["attrMap", "force"], decode: ["attrDecoder", "param", "chain"], encode: ["attrEncoder", "param", "chain"], "volatile": ["attrVolatile"] };this.dsl = k(a, { describe: function describe(a) {
          return g(a, function (a, b) {
            switch (b.charAt(0)) {case "@":
                d.warn("Usage of @ in description objects will be removed in 1.2, use a $extend block instead"), this.define("Scope." + b.substring(1), a);break;case "~":
                b = c.parameterize(b.substring(1)), d.warn("Usage of ~ in description objects will be removed in 1.2, use a $hooks block instead"), this.on(b, a);break;default:
                if ("$config" === b) for (var e in a) a.hasOwnProperty(e) && this.setProperty(e, a[e]);else if ("$extend" === b) for (var e in a) a.hasOwnProperty(e) && this.define(e, a[e]);else if ("$hooks" === b) for (var e in a) a.hasOwnProperty(e) && this.on(e, a[e]);else l.test(b) ? (d.warn("Usage of ~ in description objects will be removed in 1.2, use a $config block instead"), b = c.camelize(b.toLowerCase()), this.setProperty(b, a)) : h(a) ? this.attribute(b, a) : j(a) ? this.define(b, a) : this.attrDefault(b, a);}
          }, this), this;
        }, extend: function extend(a, c, d) {
          return "string" == typeof a ? (this[a] = e.override(this[name], c), d && (b[d[0]] = d, d[0] = a)) : e.extendOverriden(this, a), this;
        }, attribute: function attribute(a, c) {
          var d, e, f, g;for (d in c) if (c.hasOwnProperty(d) && (e = b[d])) {
            for (f = [a, c[d]], g = 1; g < e.length; g++) f.push(c[e[g]]);f.push(c), this[e[0]].apply(this, f);
          }return this;
        } });
    }var g = a.forEach,
        h = a.isObject,
        i = a.isArray,
        j = a.isFunction,
        k = a.extend,
        l = /^[A-Z]+[A-Z_0-9]*$/;return f.prototype = { chain: function chain(a) {
        for (var b = 0, c = a.length; c > b; b++) this.mixin(a[b]);
      }, mixin: function mixin(a) {
        a.$$chain ? this.chain(a.$$chain) : "string" == typeof a ? this.mixin(b.get(a)) : i(a) ? this.chain(a) : j(a) ? a.call(this.dsl, b) : this.dsl.describe(a);
      } }, f;
  }]), c.factory("RMBuilderComputed", ["restmod", function (a) {
    var b = { attrAsComputed: function attrAsComputed(a, b) {
        return this.attrComputed(a, b), this;
      } };return a.mixin(function () {
      this.extend("attrAsComputed", b.attrAsComputed, ["computed"]);
    });
  }]), c.factory("RMBuilderExt", ["$injector", "$parse", "inflector", "$log", "restmod", function (b, c, d, e, f) {
    var g = a.bind,
        h = a.isFunction,
        i = { setUrlPrefix: function setUrlPrefix(a) {
        return this.setProperty("urlPrefix", a);
      }, setPrimaryKey: function setPrimaryKey(a) {
        return this.setProperty("primaryKey", a);
      }, attrSerializer: function attrSerializer(a, c, e) {
        return "string" == typeof c && (c = b.get(d.camelize(c, !0) + "Serializer")), h(c) && (c = c(e)), c.decode && this.attrDecoder(a, g(c, c.decode)), c.encode && this.attrEncoder(a, g(c, c.encode)), this;
      }, attrExpression: function attrExpression(a, b) {
        var d = c(b);return this.on("after-feed", function () {
          this[a] = d(this);
        });
      } };return f.mixin(function () {
      this.extend("setUrlPrefix", i.setUrlPrefix).extend("setPrimaryKey", i.setPrimaryKey).extend("attrSerializer", i.attrSerializer, ["serialize"]);
    });
  }]), c.factory("RMBuilderRelations", ["$injector", "inflector", "$log", "RMUtils", "restmod", "RMPackerCache", function (a, c, d, e, f, g) {
    function h(a, b) {
      return function () {
        var c = this.$owner;this.$owner = b;try {
          return a.apply(this, arguments);
        } finally {
          this.$owner = c;
        }
      };
    }function i(a, b, c) {
      for (var d in b) b.hasOwnProperty(d) && a.$on(d, h(b[d], c));
    }var j = { attrAsCollection: function attrAsCollection(b, c, f, g, h, j, k) {
        var l, m;return this.attrDefault(b, function () {
          if ("string" == typeof c && (c = a.get(c), l = c.getProperty("hasMany", {}), m = l.hooks, h)) {
            var e = c.$$getDescription(h);e && "belongs_to" === e.relation || (d.warn("Must define an inverse belongsTo relation for inverseOf to work"), h = !1);
          }var g,
              n = this.$buildScope(c, f || c.encodeUrlName(b));if ((g = c.$collection(j || null, n), m && i(g, m, this), k && i(g, k, this), g.$dispatch("after-has-many-init"), h)) {
            var o = this;g.$on("after-add", function (a) {
              a[h] = o;
            });
          }return g;
        }), (g || f) && this.attrMap(b, g || f), this.attrDecoder(b, function (a) {
          this[b].$reset().$decode(a);
        }).attrMask(b, e.WRITE_MASK).attrMeta(b, { relation: "has_many" }), this;
      }, attrAsResource: function attrAsResource(b, c, f, g, h, j) {
        var k, l;return this.attrDefault(b, function () {
          if ("string" == typeof c && (c = a.get(c), k = c.getProperty("hasOne", {}), l = k.hooks, h)) {
            var e = c.$$getDescription(h);e && "belongs_to" === e.relation || (d.warn("Must define an inverse belongsTo relation for inverseOf to work"), h = !1);
          }var g,
              m = this.$buildScope(c, f || c.encodeUrlName(b));return g = c.$new(null, m), l && i(g, l, this), j && i(g, j, this), g.$dispatch("after-has-one-init"), h && (g[h] = this), g;
        }), (g || f) && this.attrMap(b, g || f), this.attrDecoder(b, function (a) {
          this[b].$decode(a);
        }).attrMask(b, e.WRITE_MASK).attrMeta(b, { relation: "has_one" }), this;
      }, attrAsReference: function attrAsReference(c, d, f, h) {
        function i() {
          "string" == typeof d && (d = a.get(d));
        }return this.attrDefault(c, null).attrMask(c, e.WRITE_MASK).attrMeta(c, { relation: "belongs_to" }), this.attrDecoder(c, function (a) {
          return null === a ? null : (i(), void (this[c] && this[c].$pk === d.inferKey(a) ? this[c].$decode(a) : this[c] = d.$buildRaw(a)));
        }), f !== !1 && this.attrMap(c + "Id", f || "*", !0).attrDecoder(c + "Id", function (a) {
          a !== b && (this[c] && this[c].$pk === a || (null !== a && a !== !1 ? (i(), this[c] = g.resolve(d.$new(a)), h && this[c].$fetch()) : this[c] = null));
        }).attrEncoder(c + "Id", function () {
          return this[c] ? this[c].$pk : null;
        }), this;
      }, attrAsReferenceToMany: function attrAsReferenceToMany(b, d, f) {
        function h() {
          "string" == typeof d && (d = a.get(d));
        }function i(a, b) {
          h(), b.length = 0;for (var c = 0, e = a.length; e > c; c++) b.push("object" == typeof a[c] ? d.$buildRaw(a[c]) : g.resolve(d.$new(a[c])));
        }if ((this.attrDefault(b, function () {
          return [];
        }).attrMask(b, e.WRITE_MASK).attrMeta(b, { relation: "belongs_to_many" }), this.attrDecoder(b, function (a) {
          a && i(a, this[b]);
        }), f !== !1)) {
          var j = c.singularize(b) + "Ids";this.attrMap(j, f || "*", !0).attrDecoder(j, function (a) {
            a && i(a, this[b]);
          }).attrEncoder(j, function () {
            for (var a = [], c = this[b], d = 0, e = c.length; e > d; d++) a.push(c[d].$pk);return a;
          });
        }return this;
      } };return f.mixin(function () {
      this.extend("attrAsCollection", j.attrAsCollection, ["hasMany", "path", "source", "inverseOf", "params", "hooks"]).extend("attrAsResource", j.attrAsResource, ["hasOne", "path", "source", "inverseOf", "hooks"]).extend("attrAsReference", j.attrAsReference, ["belongsTo", "key", "prefetch"]).extend("attrAsReferenceToMany", j.attrAsReferenceToMany, ["belongsToMany", "keys"]);
    });
  }]), c.factory("RMModelFactory", ["$injector", "$log", "inflector", "RMUtils", "RMScopeApi", "RMCommonApi", "RMRecordApi", "RMListApi", "RMCollectionApi", "RMExtendedApi", "RMSerializer", "RMBuilder", function (c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = /(.*?)([^\/]+)\/?$/,
        p = f.extendOverriden;return function (c, q) {
      function r(a, b) {
        this.$scope = a || r, this.$pk = b, this.$initialize();
      }function s(a, b) {
        var c = new B();return c.$scope = b || r, c.$params = a, c.$initialize(), c;
      }function t(a, b, c) {
        var d = E[a];f.assert(!!d, "Invalid api name $1", a), b ? d[b] = f.override(d[b], c) : f.extendOverriden(d, c);
      }c = f.cleanUrl(c);var u,
          v = { primaryKey: "id", urlPrefix: null },
          w = new m(r),
          x = [],
          y = [],
          z = {},
          A = {};!v.name && c && (v.name = e.singularize(c.replace(o, "$2"))), !v.plural && v.name && (v.plural = e.pluralize(v.name));var B = f.buildArrayType(),
          C = f.buildArrayType(),
          D = function D(a) {
        this.$isCollection = a, this.$initialize();
      };p(r, { $$getDescription: function $$getDescription(a) {
          return z[a];
        }, $$chain: [], $type: r, $new: function $new(a, b) {
          return new r(b || r, a);
        }, $collection: s, $url: function $url() {
          return v.urlPrefix ? f.joinUrl(v.urlPrefix, c) : c;
        }, $dispatch: function $dispatch(a, b, c) {
          var d,
              e,
              f = A[a];if (f) for (d = 0; e = f[d]; d++) e.apply(c || this, b || []);return this;
        }, inferKey: function inferKey(a) {
          return a && "undefined" != typeof a[v.primaryKey] ? a[v.primaryKey] : null;
        }, getProperty: function getProperty(a, c) {
          var d = v[a];return d !== b ? d : c;
        }, isNested: function isNested() {
          return !c;
        }, single: function single(a) {
          return new r({ $urlFor: function $urlFor() {
              return v.urlPrefix ? f.joinUrl(v.urlPrefix, a) : a;
            } }, "");
        }, dummy: function dummy(a) {
          return new D(a);
        }, list: function list(a) {
          var b = new C();return a && b.push.apply(b, a), b;
        }, identity: function identity(a) {
          return a ? v.plural : v.name;
        }, mix: function mix() {
          return u.chain(arguments), this.$$chain.push.apply(this.$$chain, arguments), this;
        }, unpack: function unpack(a, b) {
          return b;
        }, pack: function pack(a, b) {
          return b;
        }, decode: w.decode, encode: w.encode, decodeName: null, encodeName: null, encodeUrlName: function encodeUrlName(a) {
          return d.warn("Default paremeterization of urls will be disabled in 1.2, override Model.encodeUrlName with inflector.parameterize in your base model to keep the same behaviour."), e.parameterize(a);
        } }, g), p(r.prototype, { $type: r, $initialize: function $initialize() {
          var a,
              b,
              c = this;for (b = 0; a = x[b]; b++) this[a[0]] = "function" == typeof a[1] ? a[1].apply(this) : a[1];for (b = 0; a = y[b]; b++) Object.defineProperty(c, a[0], { enumerable: !0, get: a[1] });
        } }, h, i, l), p(B.prototype, { $type: r, $new: function $new(a, b) {
          return r.$new(a, b || this);
        }, $collection: function $collection(b, c) {
          return b = this.$params ? a.extend({}, this.$params, b) : b, s(b, c || this.$scope);
        } }, j, g, h, k, l), p(C.prototype, { $type: r }, j, h), p(D.prototype, { $type: r, $initialize: function $initialize() {} }, h);var E = { Model: r, Record: r.prototype, Collection: B.prototype, List: C.prototype, Dummy: D.prototype };return u = new n(a.extend(w.dsl(), { setProperty: function setProperty(a, b) {
          return v[a] = b, this;
        }, attrDefault: function attrDefault(a, b) {
          return x.push([a, b]), this;
        }, attrComputed: function attrComputed(a, b) {
          return y.push([a, b]), this.attrMask(a, !0), this;
        }, attrMeta: function attrMeta(a, b) {
          return z[a] = p(z[a] || {}, b), this;
        }, define: function define(a, b) {
          var c = !1,
              d = "Record";switch (("object" == typeof b && b ? d = a : (c = a.split("."), 1 === c.length ? c = c[0] : (d = c[0], c = c[1])), d)) {case "List":
              t("Collection", c, b), t("List", c, b);break;case "Scope":
              t("Model", c, b), t("Collection", c, b);break;case "Resource":
              t("Record", c, b), t("Collection", c, b), t("List", c, b), t("Dummy", c, b);break;default:
              t(d, c, b);}return this;
        }, on: function on(a, b) {
          return (A[a] || (A[a] = [])).push(b), this;
        } })), u.chain(q), r;
    };
  }]), c.factory("RMFastQ", [function () {
    function b(a, f) {
      return a && d(a.then) ? c(a) : { simple: !0, then: function then(c, d) {
          return b(f ? d(a) : c(a));
        }, "catch": e, "finally": function _finally(e) {
          var g = e();return g && d(a.then) ? c(a.then(function () {
            return f ? b(a, !0) : a;
          }, function () {
            return f ? b(a, !0) : a;
          })) : this;
        } };
    }function c(a) {
      if (a.simple) return a;var d;return a.then(function (a) {
        d = b(a);
      }, function (a) {
        d = b(a, !0);
      }), { then: function then(b, e) {
          return d ? d.then(b, e) : c(a.then(b, e));
        }, "catch": e, "finally": function _finally(b) {
          return d ? d["finally"](b) : c(a["finally"](b));
        } };
    }var d = a.isFunction,
        e = function e(a) {
      return this.then(null, a);
    };return { reject: function reject(a) {
        return b(a, !0);
      }, when: function when(a) {
        return b(a, !1);
      }, wrap: c };
  }]), c.factory("RMPackerCache", [function () {
    var a;return { feed: function feed(b, c) {
        a[b] = c;
      }, resolve: function resolve(b) {
        if (a) {
          var c = b.$type,
              d = a[c.identity(!0)];if (d && b.$pk) for (var e = 0, f = d.length; f > e; e++) if (b.$pk === c.inferKey(d[e])) {
            b.$decode(d[e]);break;
          }
        }return b;
      }, prepare: function prepare() {
        a = {};
      }, clear: function clear() {
        a = null;
      } };
  }]), c.factory("RMSerializer", ["$injector", "inflector", "$filter", "RMUtils", function (c, d, e, f) {
    function g(a, b) {
      for (var c, d = 0; a && (c = b[d]); d++) a = a[c];return a;
    }function h(a, b, c) {
      for (var d = 0, e = b.length - 1; e > d; d++) {
        var f = b[d];a = a[f] || (a[f] = {});
      }a[b[b.length - 1]] = c;
    }return function (c) {
      function d(a, b) {
        if ("function" == typeof b) return b(a);var c = n[a];return c && (c === !0 || -1 !== c.indexOf(b));
      }function i(a, e, f, h, i) {
        var k,
            l,
            m,
            n,
            o,
            p,
            s,
            t,
            u = f ? f + "." : "";if (o = r[f]) for (s = 0, t = o.length; t > s; s++) m = u + o[s].path, d(m, h) || (n = o[s].map ? g(a, o[s].map) : a[c.encodeName ? c.encodeName(o[s].path) : o[s].path], (o[s].forced || n !== b) && (n = j(n, m, h, i), n !== b && (e[o[s].path] = n)));for (k in a) if (a.hasOwnProperty(k)) {
          if ((l = c.decodeName ? c.decodeName(k) : k, "$" === l[0])) continue;if (o) {
            for (p = !1, s = 0, t = o.length; t > s && !(p = o[s].mapPath === k); s++);if (p) continue;
          }if ((m = u + l, q[m] || d(m, h))) continue;n = j(a[k], m, h, i), n !== b && (e[l] = n);
        }
      }function j(a, b, c, d) {
        var e = o[b],
            f = a;if (e) f = e.call(d, a);else if ("object" == typeof a) if (m(a)) {
          f = [];for (var g = 0, h = a.length; h > g; g++) f.push(j(a[g], b + "[]", c, d));
        } else a && (f = {}, i(a, f, b, c, d));return f;
      }function k(a, e, f, g, i) {
        var j,
            k,
            m,
            n,
            o,
            p = f ? f + "." : "";for (j in a) if (a.hasOwnProperty(j) && "$" !== j[0]) {
          if ((k = p + j, q[k] || d(k, g))) continue;n = l(a[j], k, g, i), n !== b && (m = c.encodeName ? c.encodeName(j) : j, e[m] = n), s[k] && delete a[j];
        }if (o = r[f]) for (var t = 0, u = o.length; u > t; t++) k = p + o[t].path, d(k, g) || (n = a[o[t].path], (o[t].forced || n !== b) && (n = l(n, k, g, i), n !== b && (o[t].map ? h(e, o[t].map, n) : e[c.encodeName ? c.encodeName(o[t].path) : o[t].path] = n)));
      }function l(a, b, c, d) {
        var e = p[b],
            f = a;if (e) f = e.call(d, a);else if (null !== a && "object" == typeof a && "function" != typeof a.toJSON) if (m(a)) {
          f = [];for (var g = 0, h = a.length; h > g; g++) f.push(l(a[g], b + "[]", c, d));
        } else a && (f = {}, k(a, f, b, c, d));return f;
      }var m = a.isArray,
          n = {},
          o = {},
          p = {},
          q = {},
          r = {},
          s = {};return { decode: function decode(a, b, c) {
          i(b, a, "", c, a);
        }, encode: function encode(a, b) {
          var c = {};return k(a, c, "", b, a), c;
        }, dsl: function dsl() {
          return { attrMap: function attrMap(a, b, c) {
              var d = a.lastIndexOf("."),
                  e = -1 !== d ? a.substr(0, d) : "",
                  f = -1 !== d ? a.substr(d + 1) : a;q[a] = !0;var g = r[e] || (r[e] = []);return g.push({ path: f, map: "*" === b ? null : b.split("."), mapPath: b, forced: c }), this;
            }, attrMask: function attrMask(a, b) {
              return b ? n[a] = b : delete n[a], this;
            }, attrDecoder: function attrDecoder(a, b, c, d) {
              if ("string" == typeof b) {
                var g = e(b);b = function (a) {
                  return g(a, c);
                };
              }return o[a] = d ? f.chain(o[a], b) : b, this;
            }, attrEncoder: function attrEncoder(a, b, c, d) {
              if ("string" == typeof b) {
                var g = e(b);b = function (a) {
                  return g(a, c);
                };
              }return p[a] = d ? f.chain(p[a], b) : b, this;
            }, attrVolatile: function attrVolatile(a, c) {
              return s[a] = c === b ? !0 : c, this;
            } };
        } };
    };
  }]), c.factory("DefaultPacker", ["restmod", "inflector", "RMPackerCache", function (b, c, d) {
    function e(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) c(b[d], a[b[d]]);
    }function f(a, b, c) {
      for (var d in a) a.hasOwnProperty(d) && -1 === b.indexOf(d) && c(d, a[d]);
    }function g(b, c, d, g, h) {
      if ("." === d || d === !0) {
        var i = [c];g && i.push.apply(i, a.isArray(g) ? g : [g]), f(b, i, h);
      } else "string" == typeof d ? f(b[d], [], h) : e(b, d, h);
    }return b.mixin(function () {
      this.define("Model.unpack", function (a, b) {
        var c = null,
            e = this.getProperty("jsonLinks", "linked"),
            f = this.getProperty("jsonMeta", "meta");return c = a.$isCollection ? this.getProperty("jsonRootMany") || this.getProperty("jsonRoot") || this.getProperty("plural") : this.getProperty("jsonRootSingle") || this.getProperty("jsonRoot") || this.getProperty("name"), f && (a.$metadata = {}, g(b, c, f, e, function (b, c) {
          a.$metadata[b] = c;
        })), e && g(b, c, e, f, function (a, b) {
          d.feed(a, b);
        }), b[c];
      });
    });
  }]), c.factory("RMUtils", ["$log", function (a) {
    var b = [],
        c = (function () {
      var a = function a() {};return Object.setPrototypeOf ? function (a, b) {
        Object.setPrototypeOf(a, b);
      } : new a().__proto__ === a.prototype ? function (a, b) {
        a.__proto__ = b;
      } : void 0;
    })(),
        d = { CREATE_MASK: "C", UPDATE_MASK: "U", READ_MASK: "R", WRITE_MASK: "CU", FULL_MASK: "CRU", format: function format(a, b) {
        for (var c = 0; b && c < b.length; c++) a = a.replace("$" + (c + 1), b[c]);return a;
      }, assert: function assert(b, c) {
        if (!b) {
          var e = Array.prototype.slice.call(arguments, 2);throw (c = d.format(c, e), a.error(c), new Error(c));
        }
      }, joinUrl: function joinUrl(a, b) {
        return a && b ? (a + "").replace(/\/$/, "") + "/" + (b + "").replace(/^\//, "") : null;
      }, cleanUrl: function cleanUrl(a) {
        return a ? a.replace(/\/$/, "") : a;
      }, chain: function chain(a, b) {
        return a ? function (c) {
          return b.call(this, a.call(this, c));
        } : b;
      }, override: function override(a, b) {
        return a && "function" == typeof b ? function () {
          var c = this.$super;try {
            return this.$super = a, b.apply(this, arguments);
          } finally {
            this.$super = c;
          }
        } : b;
      }, extendOverriden: function extendOverriden(a) {
        for (var b = 1; b < arguments.length; b++) {
          var c = arguments[b];for (var e in c) c.hasOwnProperty(e) && (a[e] = a[e] && "function" == typeof a[e] ? d.override(a[e], c[e]) : c[e]);
        }return a;
      }, buildArrayType: function buildArrayType(a) {
        var d;if (c && !a) {
          var e = function e() {
            var a = [];return a.push.apply(a, arguments), c(a, e.prototype), a;
          };e.prototype = [], e.prototype.last = function () {
            return this[this.length - 1];
          }, d = e;
        } else {
          var f = document.createElement("iframe");f.style.display = "none", f.height = 0, f.width = 0, f.border = 0, document.body.appendChild(f), window.frames[window.frames.length - 1].document.write("<script>parent.RestmodArray = Array;</script>"), d = window.RestmodArray, delete window.RestmodArray;for (var g in Array.prototype) "function" != typeof Array.prototype[g] || d.prototype[g] || (d.prototype[g] = Array.prototype[g]);document.body.removeChild(f), b.push(f);
        }return d;
      } };return d;
  }]);
})(angular);

},{}],74:[function(require,module,exports){
/**
 * API Bound Models for AngularJS
 * @version v1.1.7 - 2015-01-06
 * @link https://github.com/angular-platanus/restmod
 * @author Ignacio Baixas <ignacio@platan.us>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";

!(function (a) {
  "use strict";a.module("restmod").factory("AMSApi", ["restmod", "inflector", function (a, b) {
    return a.mixin("DefaultPacker", { $config: { style: "AMS", primaryKey: "id", jsonMeta: "meta", jsonLinks: "links" }, $extend: { Model: { decodeName: b.camelize, encodeName: function encodeName(a) {
            return b.parameterize(a, "_");
          }, encodeUrlName: b.parameterize } } });
  }]);
})(angular);

},{}],75:[function(require,module,exports){
/*
 AngularJS v1.3.13
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
"use strict";

(function (M, Y, t) {
  'use strict';function S(b) {
    return function () {
      var a = arguments[0],
          c;c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.13/" + (b ? b + "/" : "") + a;for (a = 1; a < arguments.length; a++) {
        c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";var d = encodeURIComponent,
            e;e = arguments[a];e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;c += d(e);
      }return Error(c);
    };
  }function Ta(b) {
    if (null == b || Ua(b)) return !1;var a = b.length;return b.nodeType === oa && a ? !0 : F(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
  }function s(b, a, c) {
    var d, e;if (b) if (G(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b);else if (H(b) || Ta(b)) {
      var f = "object" !== typeof b;d = 0;for (e = b.length; d < e; d++) (f || d in b) && a.call(c, b[d], d, b);
    } else if (b.forEach && b.forEach !== s) b.forEach(a, c, b);else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);return b;
  }function Ed(b, a, c) {
    for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);return d;
  }function lc(b) {
    return function (a, c) {
      b(c, a);
    };
  }function Fd() {
    return ++ob;
  }function mc(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }function x(b) {
    for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
      var e = arguments[c];if (e) for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
        var l = f[g];b[l] = e[l];
      }
    }mc(b, a);return b;
  }function ba(b) {
    return parseInt(b, 10);
  }function Pb(b, a) {
    return x(Object.create(b), a);
  }function z() {}function pa(b) {
    return b;
  }function ea(b) {
    return function () {
      return b;
    };
  }function B(b) {
    return "undefined" === typeof b;
  }function y(b) {
    return "undefined" !== typeof b;
  }function I(b) {
    return null !== b && "object" === typeof b;
  }function F(b) {
    return "string" === typeof b;
  }function V(b) {
    return "number" === typeof b;
  }function qa(b) {
    return "[object Date]" === Da.call(b);
  }function G(b) {
    return "function" === typeof b;
  }function pb(b) {
    return "[object RegExp]" === Da.call(b);
  }function Ua(b) {
    return b && b.window === b;
  }function Va(b) {
    return b && b.$evalAsync && b.$watch;
  }function Wa(b) {
    return "boolean" === typeof b;
  }function nc(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }function Gd(b) {
    var a = {};b = b.split(",");var c;for (c = 0; c < b.length; c++) a[b[c]] = !0;return a;
  }function ua(b) {
    return Q(b.nodeName || b[0] && b[0].nodeName);
  }function Xa(b, a) {
    var c = b.indexOf(a);0 <= c && b.splice(c, 1);return a;
  }function Ea(b, a, c, d) {
    if (Ua(b) || Va(b)) throw Ka("cpws");if (a) {
      if (b === a) throw Ka("cpi");c = c || [];d = d || [];if (I(b)) {
        var e = c.indexOf(b);if (-1 !== e) return d[e];c.push(b);d.push(a);
      }if (H(b)) for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);else {
        var g = a.$$hashKey;H(a) ? a.length = 0 : s(a, function (b, c) {
          delete a[c];
        });for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), I(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);mc(a, g);
      }
    } else if (a = b) H(b) ? a = Ea(b, [], c, d) : qa(b) ? a = new Date(b.getTime()) : pb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : I(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));return a;
  }function ra(b, a) {
    if (H(b)) {
      a = a || [];for (var c = 0, d = b.length; c < d; c++) a[c] = b[c];
    } else if (I(b)) for (c in (a = a || {}, b)) if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];return a || b;
  }function ga(_x, _x2) {
    var _again = true;

    _function: while (_again) {
      var b = _x,
          a = _x2;
      _again = false;
      if (b === a) return !0;if (null === b || null === a) return !1;if (b !== b && a !== a) return !0;var c = typeof b,
          d;if (c == typeof a && "object" == c) if (H(b)) {
        if (!H(a)) return !1;if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++) if (!ga(b[d], a[d])) return !1;return !0;
        }
      } else {
        if (qa(b)) {
          if (qa(a)) {
            _x = b.getTime();
            _x2 = a.getTime();
            _again = true;
            c = d = undefined;
            continue _function;
          } else {
            return !1;
          }
        }if (pb(b) && pb(a)) return b.toString() == a.toString();if (Va(b) || Va(a) || Ua(b) || Ua(a) || H(a)) return !1;c = {};for (d in b) if ("$" !== d.charAt(0) && !G(b[d])) {
          if (!ga(b[d], a[d])) return !1;c[d] = !0;
        }for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !G(a[d])) return !1;return !0;
      }return !1;
    }
  }function Ya(b, a, c) {
    return b.concat(Za.call(a, c));
  }function oc(b, a) {
    var c = 2 < arguments.length ? Za.call(arguments, 2) : [];return !G(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }function Hd(b, a) {
    var c = a;"string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? c = t : Ua(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");return c;
  }function $a(b, a) {
    if ("undefined" === typeof b) return t;V(a) || (a = a ? 2 : null);return JSON.stringify(b, Hd, a);
  }function pc(b) {
    return F(b) ? JSON.parse(b) : b;
  }function va(b) {
    b = D(b).clone();try {
      b.empty();
    } catch (a) {}var c = D("<div>").append(b).html();try {
      return b[0].nodeType === qb ? Q(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return "<" + Q(b);
      });
    } catch (d) {
      return Q(c);
    }
  }function qc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {}
  }function rc(b) {
    var a = {},
        c,
        d;s((b || "").split("&"), function (b) {
      b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, sc.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b));
    });return a;
  }function Qb(b) {
    var a = [];s(b, function (b, d) {
      H(b) ? s(b, function (b) {
        a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
      }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)));
    });return a.length ? a.join("&") : "";
  }function rb(b) {
    return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
  }function Fa(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+");
  }function Id(b, a) {
    var c,
        d,
        e = sb.length;b = D(b);for (d = 0; d < e; ++d) if ((c = sb[d] + a, F(c = b.attr(c)))) return c;return null;
  }function Jd(b, a) {
    var c,
        d,
        e = {};s(sb, function (a) {
      a += "app";!c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a));
    });s(sb, function (a) {
      a += "app";var e;!c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a));
    });c && (e.strictDi = null !== Id(c, "strict-di"), a(c, d ? [d] : [], e));
  }function tc(b, a, c) {
    I(c) || (c = {});c = x({ strictDi: !1 }, c);var d = function d() {
      b = D(b);if (b.injector()) {
        var d = b[0] === Y ? "document" : va(b);throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
      }a = a || [];a.unshift(["$provide", function (a) {
        a.value("$rootElement", b);
      }]);c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
        a.debugInfoEnabled(!0);
      }]);a.unshift("ng");d = ab(a, c.strictDi);d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
        a.$apply(function () {
          b.data("$injector", d);c(b)(a);
        });
      }]);return d;
    },
        e = /^NG_ENABLE_DEBUG_INFO!/,
        f = /^NG_DEFER_BOOTSTRAP!/;M && e.test(M.name) && (c.debugInfoEnabled = !0, M.name = M.name.replace(e, ""));if (M && !f.test(M.name)) return d();M.name = M.name.replace(f, "");ca.resumeBootstrap = function (b) {
      s(b, function (b) {
        a.push(b);
      });return d();
    };G(ca.resumeDeferredBootstrap) && ca.resumeDeferredBootstrap();
  }function Kd() {
    M.name = "NG_ENABLE_DEBUG_INFO!" + M.name;M.location.reload();
  }function Ld(b) {
    b = ca.element(b).injector();if (!b) throw Ka("test");return b.get("$$testability");
  }
  function uc(b, a) {
    a = a || "_";return b.replace(Md, function (b, d) {
      return (d ? a : "") + b.toLowerCase();
    });
  }function Nd() {
    var b;vc || ((sa = M.jQuery) && sa.fn.on ? (D = sa, x(sa.fn, { scope: La.scope, isolateScope: La.isolateScope, controller: La.controller, injector: La.injector, inheritedData: La.inheritedData }), b = sa.cleanData, sa.cleanData = function (a) {
      var c;if (Rb) Rb = !1;else for (var d = 0, e; null != (e = a[d]); d++) (c = sa._data(e, "events")) && c.$destroy && sa(e).triggerHandler("$destroy");b(a);
    }) : D = R, ca.element = D, vc = !0);
  }function Sb(b, a, c) {
    if (!b) throw Ka("areq", a || "?", c || "required");return b;
  }function tb(b, a, c) {
    c && H(b) && (b = b[b.length - 1]);Sb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));return b;
  }function Ma(b, a) {
    if ("hasOwnProperty" === b) throw Ka("badname", a);
  }function wc(b, a, c) {
    if (!a) return b;a = a.split(".");for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);return !c && G(b) ? oc(e, b) : b;
  }function ub(b) {
    var a = b[0];b = b[b.length - 1];var c = [a];do {
      a = a.nextSibling;if (!a) break;c.push(a);
    } while (a !== b);return D(c);
  }function ha() {
    return Object.create(null);
  }
  function Od(b) {
    function a(a, b, c) {
      return a[b] || (a[b] = c());
    }var c = S("$injector"),
        d = S("ng");b = a(b, "angular", Object);b.$$minErr = b.$$minErr || S;return a(b, "module", function () {
      var b = {};return function (f, g, h) {
        if ("hasOwnProperty" === f) throw d("badname", "module");g && b.hasOwnProperty(f) && (b[f] = null);return a(b, f, function () {
          function a(c, d, e, f) {
            f || (f = b);return function () {
              f[e || "push"]([c, d, arguments]);return u;
            };
          }if (!g) throw c("nomod", f);var b = [],
              d = [],
              e = [],
              q = a("$injector", "invoke", "push", d),
              u = { _invokeQueue: b, _configBlocks: d,
            _runBlocks: e, requires: g, name: f, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), animation: a("$animateProvider", "register"), filter: a("$filterProvider", "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: q, run: function run(a) {
              e.push(a);return this;
            } };h && q(h);return u;
        });
      };
    });
  }function Pd(b) {
    x(b, { bootstrap: tc, copy: Ea, extend: x, equals: ga,
      element: D, forEach: s, injector: ab, noop: z, bind: oc, toJson: $a, fromJson: pc, identity: pa, isUndefined: B, isDefined: y, isString: F, isFunction: G, isObject: I, isNumber: V, isElement: nc, isArray: H, version: Qd, isDate: qa, lowercase: Q, uppercase: vb, callbacks: { counter: 0 }, getTestability: Ld, $$minErr: S, $$csp: bb, reloadWithDebugInfo: Kd });cb = Od(M);try {
      cb("ngLocale");
    } catch (a) {
      cb("ngLocale", []).provider("$locale", Rd);
    }cb("ng", ["ngLocale"], ["$provide", function (a) {
      a.provider({ $$sanitizeUri: Sd });a.provider("$compile", xc).directive({ a: Td,
        input: yc, textarea: yc, form: Ud, script: Vd, select: Wd, style: Xd, option: Yd, ngBind: Zd, ngBindHtml: $d, ngBindTemplate: ae, ngClass: be, ngClassEven: ce, ngClassOdd: de, ngCloak: ee, ngController: fe, ngForm: ge, ngHide: he, ngIf: ie, ngInclude: je, ngInit: ke, ngNonBindable: le, ngPluralize: me, ngRepeat: ne, ngShow: oe, ngStyle: pe, ngSwitch: qe, ngSwitchWhen: re, ngSwitchDefault: se, ngOptions: te, ngTransclude: ue, ngModel: ve, ngList: we, ngChange: xe, pattern: zc, ngPattern: zc, required: Ac, ngRequired: Ac, minlength: Bc, ngMinlength: Bc, maxlength: Cc, ngMaxlength: Cc,
        ngValue: ye, ngModelOptions: ze }).directive({ ngInclude: Ae }).directive(wb).directive(Dc);a.provider({ $anchorScroll: Be, $animate: Ce, $browser: De, $cacheFactory: Ee, $controller: Fe, $document: Ge, $exceptionHandler: He, $filter: Ec, $interpolate: Ie, $interval: Je, $http: Ke, $httpBackend: Le, $location: Me, $log: Ne, $parse: Oe, $rootScope: Pe, $q: Qe, $$q: Re, $sce: Se, $sceDelegate: Te, $sniffer: Ue, $templateCache: Ve, $templateRequest: We, $$testability: Xe, $timeout: Ye, $window: Ze, $$rAF: $e, $$asyncCallback: af, $$jqLite: bf });
    }]);
  }function db(b) {
    return b.replace(cf, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(df, "Moz$1");
  }function Fc(b) {
    b = b.nodeType;return b === oa || !b || 9 === b;
  }function Gc(b, a) {
    var c,
        d,
        e = a.createDocumentFragment(),
        f = [];if (Tb.test(b)) {
      c = c || e.appendChild(a.createElement("div"));d = (ef.exec(b) || ["", ""])[1].toLowerCase();d = ia[d] || ia._default;c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];for (d = d[0]; d--;) c = c.lastChild;f = Ya(f, c.childNodes);c = e.firstChild;c.textContent = "";
    } else f.push(a.createTextNode(b));e.textContent = "";e.innerHTML = "";s(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }function R(b) {
    if (b instanceof R) return b;var a;F(b) && (b = U(b), a = !0);if (!(this instanceof R)) {
      if (a && "<" != b.charAt(0)) throw Ub("nosel");return new R(b);
    }if (a) {
      a = Y;var c;b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Gc(b, a)) ? c.childNodes : [];
    }Hc(this, b);
  }function Vb(b) {
    return b.cloneNode(!0);
  }function xb(b, a) {
    a || yb(b);if (b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) yb(c[d]);
  }function Ic(b, a, c, d) {
    if (y(d)) throw Ub("offargs");var e = (d = zb(b)) && d.events,
        f = d && d.handle;if (f) if (a) s(a.split(" "), function (a) {
      if (y(c)) {
        var d = e[a];Xa(d || [], c);if (d && 0 < d.length) return;
      }b.removeEventListener(a, f, !1);delete e[a];
    });else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a];
  }function yb(b, a) {
    var c = b.ng339,
        d = c && Ab[c];d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ic(b)), delete Ab[c], b.ng339 = t));
  }function zb(b, a) {
    var c = b.ng339,
        c = c && Ab[c];a && !c && (b.ng339 = c = ++hf, c = Ab[c] = { events: {}, data: {}, handle: t });return c;
  }function Wb(b, a, c) {
    if (Fc(b)) {
      var d = y(c),
          e = !d && a && !I(a),
          f = !a;b = (b = zb(b, !e)) && b.data;if (d) b[a] = c;else {
        if (f) return b;if (e) return b && b[a];x(b, a);
      }
    }
  }function Bb(b, a) {
    return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
  }function Cb(b, a) {
    a && b.setAttribute && s(a.split(" "), function (a) {
      b.setAttribute("class", U((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + U(a) + " ", " ")));
    });
  }function Db(b, a) {
    if (a && b.setAttribute) {
      var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
      s(a.split(" "), function (a) {
        a = U(a);-1 === c.indexOf(" " + a + " ") && (c += a + " ");
      });b.setAttribute("class", U(c));
    }
  }function Hc(b, a) {
    if (a) if (a.nodeType) b[b.length++] = a;else {
      var c = a.length;if ("number" === typeof c && a.window !== a) {
        if (c) for (var d = 0; d < c; d++) b[b.length++] = a[d];
      } else b[b.length++] = a;
    }
  }function Jc(b, a) {
    return Eb(b, "$" + (a || "ngController") + "Controller");
  }function Eb(b, a, c) {
    9 == b.nodeType && (b = b.documentElement);for (a = H(a) ? a : [a]; b;) {
      for (var d = 0, e = a.length; d < e; d++) if ((c = D.data(b, a[d])) !== t) return c;b = b.parentNode || 11 === b.nodeType && b.host;
    }
  }function Kc(b) {
    for (xb(b, !0); b.firstChild;) b.removeChild(b.firstChild);
  }function Lc(b, a) {
    a || xb(b);var c = b.parentNode;c && c.removeChild(b);
  }function jf(b, a) {
    a = a || M;if ("complete" === a.document.readyState) a.setTimeout(b);else D(a).on("load", b);
  }function Mc(b, a) {
    var c = Fb[a.toLowerCase()];return c && Nc[ua(b)] && c;
  }function kf(b, a) {
    var c = b.nodeName;return ("INPUT" === c || "TEXTAREA" === c) && Oc[a];
  }function lf(b, a) {
    var c = function c(_c, e) {
      _c.isDefaultPrevented = function () {
        return _c.defaultPrevented;
      };var f = a[e || _c.type],
          g = f ? f.length : 0;if (g) {
        if (B(_c.immediatePropagationStopped)) {
          var h = _c.stopImmediatePropagation;_c.stopImmediatePropagation = function () {
            _c.immediatePropagationStopped = !0;_c.stopPropagation && _c.stopPropagation();h && h.call(_c);
          };
        }_c.isImmediatePropagationStopped = function () {
          return !0 === _c.immediatePropagationStopped;
        };1 < g && (f = ra(f));for (var l = 0; l < g; l++) _c.isImmediatePropagationStopped() || f[l].call(b, _c);
      }
    };c.elem = b;return c;
  }function bf() {
    this.$get = function () {
      return x(R, { hasClass: function hasClass(b, a) {
          b.attr && (b = b[0]);
          return Bb(b, a);
        }, addClass: function addClass(b, a) {
          b.attr && (b = b[0]);return Db(b, a);
        }, removeClass: function removeClass(b, a) {
          b.attr && (b = b[0]);return Cb(b, a);
        } });
    };
  }function Na(b, a) {
    var c = b && b.$$hashKey;if (c) return "function" === typeof c && (c = b.$$hashKey()), c;c = typeof b;return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b;
  }function eb(b, a) {
    if (a) {
      var c = 0;this.nextUid = function () {
        return ++c;
      };
    }s(b, this.put, this);
  }function mf(b) {
    return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn";
  }function ab(b, a) {
    function c(a) {
      return function (b, c) {
        if (I(b)) s(b, lc(a));else return a(b, c);
      };
    }function d(a, b) {
      Ma(a, "service");if (G(b) || H(b)) b = q.instantiate(b);if (!b.$get) throw Ga("pget", a);return n[a + "Provider"] = b;
    }function e(a, b) {
      return function () {
        var c = r.invoke(b, this);if (B(c)) throw Ga("undef", a);return c;
      };
    }function f(a, b, c) {
      return d(a, { $get: !1 !== c ? e(a, b) : b });
    }function g(a) {
      var b = [],
          c;s(a, function (a) {
        function d(a) {
          var b, c;b = 0;for (c = a.length; b < c; b++) {
            var e = a[b],
                f = q.get(e[0]);f[e[1]].apply(f, e[2]);
          }
        }if (!m.get(a)) {
          m.put(a, !0);try {
            F(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : H(a) ? b.push(q.invoke(a)) : tb(a, "module");
          } catch (e) {
            throw (H(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e));
          }
        }
      });return b;
    }function h(b, c) {
      function d(a, e) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));return b[a];
        }try {
          return k.unshift(a), b[a] = l, b[a] = c(a, e);
        } catch (f) {
          throw (b[a] === l && delete b[a], f);
        } finally {
          k.shift();
        }
      }function e(b, c, f, g) {
        "string" === typeof f && (g = f, f = null);var h = [],
            k = ab.$$annotate(b, a, g),
            l,
            q,
            n;q = 0;for (l = k.length; q < l; q++) {
          n = k[q];if ("string" !== typeof n) throw Ga("itkn", n);h.push(f && f.hasOwnProperty(n) ? f[n] : d(n, g));
        }H(b) && (b = b[l]);return b.apply(c, h);
      }return { invoke: e, instantiate: function instantiate(a, b, c) {
          var d = Object.create((H(a) ? a[a.length - 1] : a).prototype || null);a = e(a, d, b, c);return I(a) || G(a) ? a : d;
        }, get: d, annotate: ab.$$annotate, has: function has(a) {
          return n.hasOwnProperty(a + "Provider") || b.hasOwnProperty(a);
        } };
    }a = !0 === a;var l = {},
        k = [],
        m = new eb([], !0),
        n = { $provide: { provider: c(d), factory: c(f), service: c(function (a, b) {
          return f(a, ["$injector", function (a) {
            return a.instantiate(b);
          }]);
        }), value: c(function (a, b) {
          return f(a, ea(b), !1);
        }), constant: c(function (a, b) {
          Ma(a, "constant");n[a] = b;u[a] = b;
        }), decorator: function decorator(a, b) {
          var c = q.get(a + "Provider"),
              d = c.$get;c.$get = function () {
            var a = r.invoke(d, c);return r.invoke(b, null, { $delegate: a });
          };
        } } },
        q = n.$injector = h(n, function (a, b) {
      ca.isString(b) && k.push(b);
      throw Ga("unpr", k.join(" <- "));
    }),
        u = {},
        r = u.$injector = h(u, function (a, b) {
      var c = q.get(a + "Provider", b);return r.invoke(c.$get, c, t, a);
    });s(g(b), function (a) {
      r.invoke(a || z);
    });return r;
  }function Be() {
    var b = !0;this.disableAutoScrolling = function () {
      b = !1;
    };this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
      function e(a) {
        var b = null;Array.prototype.some.call(a, function (a) {
          if ("a" === ua(a)) return b = a, !0;
        });return b;
      }function f(b) {
        if (b) {
          b.scrollIntoView();var c;c = g.yOffset;G(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !== a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c));
        } else a.scrollTo(0, 0);
      }function g() {
        var a = c.hash(),
            b;a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null);
      }var h = a.document;b && d.$watch(function () {
        return c.hash();
      }, function (a, b) {
        a === b && "" === a || jf(function () {
          d.$evalAsync(g);
        });
      });return g;
    }];
  }function af() {
    this.$get = ["$$rAF", "$timeout", function (b, a) {
      return b.supported ? function (a) {
        return b(a);
      } : function (b) {
        return a(b, 0, !1);
      };
    }];
  }function nf(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, Za.call(arguments, 1));
      } finally {
        if ((v--, 0 === v)) for (; w.length;) try {
          w.pop()();
        } catch (b) {
          c.error(b);
        }
      }
    }function f(a, b) {
      (function N() {
        s(L, function (a) {
          a();
        });C = b(N, a);
      })();
    }function g() {
      h();l();
    }function h() {
      A = b.history.state;A = B(A) ? null : A;ga(A, J) && (A = J);J = A;
    }function l() {
      if (E !== m.url() || O !== A) E = m.url(), O = A, s(W, function (a) {
        a(m.url(), A);
      });
    }function k(a) {
      try {
        return decodeURIComponent(a);
      } catch (b) {
        return a;
      }
    }var m = this,
        n = a[0],
        q = b.location,
        u = b.history,
        r = b.setTimeout,
        P = b.clearTimeout,
        p = {};m.isMock = !1;var v = 0,
        w = [];m.$$completeOutstandingRequest = e;m.$$incOutstandingRequestCount = function () {
      v++;
    };m.notifyWhenNoOutstandingRequests = function (a) {
      s(L, function (a) {
        a();
      });0 === v ? a() : w.push(a);
    };var L = [],
        C;m.addPollFn = function (a) {
      B(C) && f(100, r);L.push(a);return a;
    };var A,
        O,
        E = q.href,
        T = a.find("base"),
        X = null;h();O = A;m.url = function (a, c, e) {
      B(e) && (e = null);q !== b.location && (q = b.location);u !== b.history && (u = b.history);if (a) {
        var f = O === e;if (E === a && (!d.history || f)) return m;
        var g = E && Ha(E) === Ha(a);E = a;O = e;!d.history || g && f ? (g || (X = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (u[c ? "replaceState" : "pushState"](e, "", a), h(), O = A);return m;
      }return X || q.href.replace(/%27/g, "'");
    };m.state = function () {
      return A;
    };var W = [],
        wa = !1,
        J = null;m.onUrlChange = function (a) {
      if (!wa) {
        if (d.history) D(b).on("popstate", g);D(b).on("hashchange", g);wa = !0;
      }W.push(a);return a;
    };m.$$checkUrlChange = l;m.baseHref = function () {
      var a = T.attr("href");return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
    };var fa = {},
        y = "",
        da = m.baseHref();m.cookies = function (a, b) {
      var d, e, f, g;if (a) b === t ? n.cookie = encodeURIComponent(a) + "=;path=" + da + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (n.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + da).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));else {
        if (n.cookie !== y) for (y = n.cookie, d = y.split("; "), fa = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)), fa[a] === t && (fa[a] = k(e.substring(g + 1))));return fa;
      }
    };m.defer = function (a, b) {
      var c;v++;c = r(function () {
        delete p[c];e(a);
      }, b || 0);p[c] = !0;return c;
    };m.defer.cancel = function (a) {
      return p[a] ? (delete p[a], P(a), e(z), !0) : !1;
    };
  }function De() {
    this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
      return new nf(b, d, a, c);
    }];
  }function Ee() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
        }function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }if (b in a) throw S("$cacheFactory")("iid", b);var g = 0,
            h = x({}, d, { id: b }),
            l = {},
            k = d && d.capacity || Number.MAX_VALUE,
            m = {},
            n = null,
            q = null;return a[b] = { put: function put(a, b) {
            if (k < Number.MAX_VALUE) {
              var c = m[a] || (m[a] = { key: a });e(c);
            }if (!B(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b;
          }, get: function get(a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;e(b);
            }return l[a];
          }, remove: function remove(a) {
            if (k < Number.MAX_VALUE) {
              var b = m[a];if (!b) return;b == n && (n = b.p);b == q && (q = b.n);f(b.n, b.p);delete m[a];
            }delete l[a];g--;
          }, removeAll: function removeAll() {
            l = {};g = 0;m = {};n = q = null;
          }, destroy: function destroy() {
            m = h = l = null;delete a[b];
          }, info: function info() {
            return x({}, h, { size: g });
          } };
      }var a = {};b.info = function () {
        var b = {};s(a, function (a, e) {
          b[e] = a.info();
        });return b;
      };b.get = function (b) {
        return a[b];
      };return b;
    };
  }function Ve() {
    this.$get = ["$cacheFactory", function (b) {
      return b("templates");
    }];
  }function xc(b, a) {
    function c(a, b) {
      var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
          d = {};s(a, function (a, e) {
        var f = a.match(c);if (!f) throw ja("iscp", b, e, a);d[e] = { mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e };
      });return d;
    }var d = {},
        e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        g = Gd("ngSrc,ngSrcset,src,srcset"),
        h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        l = /^(on[a-z]+|formaction)$/;this.directive = function n(a, e) {
      Ma(a, "directive");F(a) ? (Sb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
        var f = [];s(d[a], function (d, g) {
          try {
            var h = b.invoke(d);G(h) ? h = { compile: ea(h) } : !h.compile && h.link && (h.compile = ea(h.link));h.priority = h.priority || 0;h.index = g;h.name = h.name || a;h.require = h.require || h.controller && h.name;h.restrict = h.restrict || "EA";I(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));f.push(h);
          } catch (l) {
            e(l);
          }
        });return f;
      }])), d[a].push(e)) : s(a, lc(n));return this;
    };this.aHrefSanitizationWhitelist = function (b) {
      return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };var k = !0;this.debugInfoEnabled = function (a) {
      return y(a) ? (k = a, this) : k;
    };this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, r, P, p, v, w, L, C, A) {
      function O(a, b) {
        try {
          a.addClass(b);
        } catch (c) {}
      }function E(a, b, c, d, e) {
        a instanceof D || (a = D(a));s(a, function (b, c) {
          b.nodeType == qb && b.nodeValue.match(/\S+/) && (a[c] = D(b).wrap("<span></span>").parent()[0]);
        });var f = T(a, b, a, c, d, e);E.$$addScopeClass(a);var g = null;return function (b, c, d) {
          Sb(b, "scope");d = d || {};var e = d.parentBoundTranscludeFn,
              h = d.transcludeControllers;d = d.futureParentElement;e && e.$$boundTransclude && (e = e.$$boundTransclude);g || (g = (d = d && d[0]) ? "foreignobject" !== ua(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");d = "html" !== g ? D(Xb(g, D("<div>").append(a).html())) : c ? La.clone.call(a) : a;if (h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);E.$$addScopeInfo(d, b);c && c(d, b);f && f(b, d, d, e);return d;
        };
      }function T(a, b, c, d, e, f) {
        function g(a, c, d, e) {
          var f, l, k, q, n, p, w;if (r) for (w = Array(c.length), q = 0; q < h.length; q += 3) f = h[q], w[f] = c[f];else w = c;q = 0;for (n = h.length; q < n;) l = w[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), E.$$addScopeInfo(D(l), k)) : k = a, p = c.transcludeOnThisElement ? X(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? X(a, b) : null, c(f, k, l, d, p)) : f && f(a, l.childNodes, t, e);
        }for (var h = [], l, k, q, n, r, p = 0; p < a.length; p++) {
          l = new Yb();k = W(a[p], [], l, 0 === p ? d : t, e);(f = k.length ? fa(k, a[p], l, b, c, null, [], [], f) : null) && f.scope && E.$$addScopeClass(l.$$element);
          l = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : T(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);if (f || l) h.push(p, f, l), n = !0, r = r || f;f = null;
        }return n ? g : null;
      }function X(a, b, c, d) {
        return function (d, e, f, g, h) {
          d || (d = a.$new(!1, h), d.$$transcluded = !0);return b(d, e, { parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g });
        };
      }function W(a, b, c, d, g) {
        var h = c.$attr,
            l;switch (a.nodeType) {case oa:
            da(b, ya(ua(a)), "E", d, g);for (var k, q, n, r = a.attributes, p = 0, w = r && r.length; p < w; p++) {
              var P = !1,
                  L = !1;k = r[p];l = k.name;q = U(k.value);k = ya(l);if (n = gb.test(k)) l = l.replace(Sc, "").substr(8).replace(/_(.)/g, function (a, b) {
                return b.toUpperCase();
              });var u = k.replace(/(Start|End)$/, "");B(u) && k === u + "Start" && (P = l, L = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));k = ya(l.toLowerCase());h[k] = l;if (n || !c.hasOwnProperty(k)) c[k] = q, Mc(a, k) && (c[k] = !0);Pa(a, b, q, k, n);da(b, k, "A", d, g, P, L);
            }a = a.className;I(a) && (a = a.animVal);if (F(a) && "" !== a) for (; l = f.exec(a);) k = ya(l[2]), da(b, k, "C", d, g) && (c[k] = U(l[3])), a = a.substr(l.index + l[0].length);break;case qb:
            M(b, a.nodeValue);break;case 8:
            try {
              if (l = e.exec(a.nodeValue)) k = ya(l[1]), da(b, k, "M", d, g) && (c[k] = U(l[2]));
            } catch (v) {}}b.sort(N);return b;
      }function wa(a, b, c) {
        var d = [],
            e = 0;if (b && a.hasAttribute && a.hasAttribute(b)) {
          do {
            if (!a) throw ja("uterdir", b, c);a.nodeType == oa && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);d.push(a);a = a.nextSibling;
          } while (0 < e);
        } else d.push(a);return D(d);
      }function J(a, b, c) {
        return function (d, e, f, g, h) {
          e = wa(e[0], b, c);return a(d, e, f, g, h);
        };
      }function fa(a, d, e, f, g, l, k, n, r) {
        function w(a, b, c, d) {
          if (a) {
            c && (a = J(a, c, d));a.require = K.require;a.directiveName = x;if (T === K || K.$$isolateScope) a = Z(a, { isolateScope: !0 });k.push(a);
          }if (b) {
            c && (b = J(b, c, d));b.require = K.require;b.directiveName = x;if (T === K || K.$$isolateScope) b = Z(b, { isolateScope: !0 });n.push(b);
          }
        }function L(a, b, c, d) {
          var e,
              f = "data",
              g = !1,
              l = c,
              k;if (F(b)) {
            k = b.match(h);b = b.substring(k[0].length);k[3] && (k[1] ? k[3] = null : k[1] = k[3]);"^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());"?" === k[2] && (g = !0);
            e = null;d && "data" === f && (e = d[b]) && (e = e.instance);e = e || l[f]("$" + b + "Controller");if (!e && !g) throw ja("ctreq", b, a);return e || null;
          }H(b) && (e = [], s(b, function (b) {
            e.push(L(a, b, c, d));
          }));return e;
        }function v(a, c, f, g, h) {
          function l(a, b, c) {
            var d;Va(a) || (c = b, b = a, a = t);z && (d = O);c || (c = z ? W.parent() : W);return h(a, b, d, c, wa);
          }var r, w, u, A, O, fb, W, J;d === f ? (J = e, W = e.$$element) : (W = D(f), J = new Yb(W, e));T && (A = c.$new(!0));h && (fb = l, fb.$$boundTransclude = h);C && (X = {}, O = {}, s(C, function (a) {
            var b = { $scope: a === T || a.$$isolateScope ? A : c, $element: W,
              $attrs: J, $transclude: fb };u = a.controller;"@" == u && (u = J[a.name]);b = p(u, b, !0, a.controllerAs);O[a.name] = b;z || W.data("$" + a.name + "Controller", b.instance);X[a.name] = b;
          }));if (T) {
            E.$$addScopeInfo(W, A, !0, !(ka && (ka === T || ka === T.$$originalDirective)));E.$$addScopeClass(W, !0);g = X && X[T.name];var xa = A;g && g.identifier && !0 === T.bindToController && (xa = g.instance);s(A.$$isolateBindings = T.$$isolateBindings, function (a, d) {
              var e = a.attrName,
                  f = a.optional,
                  g,
                  h,
                  l,
                  k;switch (a.mode) {case "@":
                  J.$observe(e, function (a) {
                    xa[d] = a;
                  });J.$$observers[e].$$scope = c;J[e] && (xa[d] = b(J[e])(c));break;case "=":
                  if (f && !J[e]) break;h = P(J[e]);k = h.literal ? ga : function (a, b) {
                    return a === b || a !== a && b !== b;
                  };l = h.assign || function () {
                    g = xa[d] = h(c);throw ja("nonassign", J[e], T.name);
                  };g = xa[d] = h(c);f = function (a) {
                    k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);return g = a;
                  };f.$stateful = !0;f = a.collection ? c.$watchCollection(J[e], f) : c.$watch(P(J[e], f), null, h.literal);A.$on("$destroy", f);break;case "&":
                  h = P(J[e]), xa[d] = function (a) {
                    return h(c, a);
                  };}
            });
          }X && (s(X, function (a) {
            a();
          }), X = null);g = 0;for (r = k.length; g < r; g++) w = k[g], $(w, w.isolateScope ? A : c, W, J, w.require && L(w.directiveName, w.require, W, O), fb);var wa = c;T && (T.template || null === T.templateUrl) && (wa = A);a && a(wa, f.childNodes, t, h);for (g = n.length - 1; 0 <= g; g--) w = n[g], $(w, w.isolateScope ? A : c, W, J, w.require && L(w.directiveName, w.require, W, O), fb);
        }r = r || {};for (var A = -Number.MAX_VALUE, O, C = r.controllerDirectives, X, T = r.newIsolateScopeDirective, ka = r.templateDirective, fa = r.nonTlbTranscludeDirective, da = !1, B = !1, z = r.hasElementTranscludeDirective, aa = e.$$element = D(d), K, x, N, Aa = f, Q, M = 0, R = a.length; M < R; M++) {
          K = a[M];var Pa = K.$$start,
              gb = K.$$end;Pa && (aa = wa(d, Pa, gb));N = t;if (A > K.priority) break;if (N = K.scope) K.templateUrl || (I(N) ? (Oa("new/isolated scope", T || O, K, aa), T = K) : Oa("new/isolated scope", T, K, aa)), O = O || K;x = K.name;!K.templateUrl && K.controller && (N = K.controller, C = C || {}, Oa("'" + x + "' controller", C[x], K, aa), C[x] = K);if (N = K.transclude) da = !0, K.$$tlb || (Oa("transclusion", fa, K, aa), fa = K), "element" == N ? (z = !0, A = K.priority, N = aa, aa = e.$$element = D(Y.createComment(" " + x + ": " + e[x] + " ")), d = aa[0], V(g, Za.call(N, 0), d), Aa = E(N, f, A, l && l.name, { nonTlbTranscludeDirective: fa })) : (N = D(Vb(d)).contents(), aa.empty(), Aa = E(N, f));if (K.template) if ((B = !0, Oa("template", ka, K, aa), ka = K, N = G(K.template) ? K.template(aa, e) : K.template, N = Tc(N), K.replace)) {
            l = K;N = Tb.test(N) ? Uc(Xb(K.templateNamespace, U(N))) : [];d = N[0];if (1 != N.length || d.nodeType !== oa) throw ja("tplrt", x, "");V(g, aa, d);R = { $attr: {} };N = W(d, [], R);var ba = a.splice(M + 1, a.length - (M + 1));T && y(N);a = a.concat(N).concat(ba);Rc(e, R);R = a.length;
          } else aa.html(N);if (K.templateUrl) B = !0, Oa("template", ka, K, aa), ka = K, K.replace && (l = K), v = S(a.splice(M, a.length - M), aa, e, g, da && Aa, k, n, { controllerDirectives: C, newIsolateScopeDirective: T, templateDirective: ka, nonTlbTranscludeDirective: fa }), R = a.length;else if (K.compile) try {
            Q = K.compile(aa, e, Aa), G(Q) ? w(null, Q, Pa, gb) : Q && w(Q.pre, Q.post, Pa, gb);
          } catch (of) {
            c(of, va(aa));
          }K.terminal && (v.terminal = !0, A = Math.max(A, K.priority));
        }v.scope = O && !0 === O.scope;v.transcludeOnThisElement = da;v.elementTranscludeOnThisElement = z;v.templateOnThisElement = B;v.transclude = Aa;r.hasElementTranscludeDirective = z;return v;
      }function y(a) {
        for (var b = 0, c = a.length; b < c; b++) a[b] = Pb(a[b], { $$isolateScope: !0 });
      }function da(b, e, f, g, h, l, k) {
        if (e === h) return null;h = null;if (d.hasOwnProperty(e)) {
          var q;e = a.get(e + "Directive");for (var r = 0, p = e.length; r < p; r++) try {
            q = e[r], (g === t || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Pb(q, { $$start: l, $$end: k })), b.push(q), h = q);
          } catch (w) {
            c(w);
          }
        }return h;
      }function B(b) {
        if (d.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++) if ((b = c[e], b.multiElement)) return !0;return !1;
      }function Rc(a, b) {
        var c = b.$attr,
            d = a.$attr,
            e = a.$$element;s(a, function (d, e) {
          "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]));
        });s(b, function (b, f) {
          "class" == f ? (O(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
        });
      }function S(a, b, c, d, e, f, g, h) {
        var l = [],
            k,
            q,
            n = b[0],
            p = a.shift(),
            w = Pb(p, { templateUrl: null, transclude: null, replace: null, $$originalDirective: p }),
            P = G(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
            u = p.templateNamespace;b.empty();r(L.getTrustedResourceUrl(P)).then(function (r) {
          var L, v;r = Tc(r);if (p.replace) {
            r = Tb.test(r) ? Uc(Xb(u, U(r))) : [];L = r[0];if (1 != r.length || L.nodeType !== oa) throw ja("tplrt", p.name, P);r = { $attr: {} };V(d, b, L);var A = W(L, [], r);I(p.scope) && y(A);a = A.concat(a);Rc(c, r);
          } else L = n, b.html(r);a.unshift(w);k = fa(a, L, c, e, b, p, f, g, h);s(d, function (a, c) {
            a == L && (d[c] = b[0]);
          });for (q = T(b[0].childNodes, e); l.length;) {
            r = l.shift();v = l.shift();var C = l.shift(),
                E = l.shift(),
                A = b[0];if (!r.$$destroyed) {
              if (v !== n) {
                var J = v.className;h.hasElementTranscludeDirective && p.replace || (A = Vb(L));V(C, D(v), A);O(D(A), J);
              }v = k.transcludeOnThisElement ? X(r, k.transclude, E) : E;k(q, r, A, d, v);
            }
          }l = null;
        });return function (a, b, c, d, e) {
          a = e;b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = X(b, k.transclude, e)), k(q, b, c, d, a)));
        };
      }function N(a, b) {
        var c = b.priority - a.priority;return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
      }function Oa(a, b, c, d) {
        if (b) throw ja("multidir", b.name, c.name, a, va(d));
      }function M(a, c) {
        var d = b(c, !0);d && a.push({ priority: 0, compile: function compile(a) {
            a = a.parent();var b = !!a.length;b && E.$$addBindingClass(a);return function (a, c) {
              var e = c.parent();b || E.$$addBindingClass(e);E.$$addBindingInfo(e, d.expressions);a.$watch(d, function (a) {
                c[0].nodeValue = a;
              });
            };
          } });
      }function Xb(a, b) {
        a = Q(a || "html");switch (a) {case "svg":case "math":
            var c = Y.createElement("div");c.innerHTML = "<" + a + ">" + b + "</" + a + ">";return c.childNodes[0].childNodes;default:
            return b;}
      }function R(a, b) {
        if ("srcdoc" == b) return L.HTML;var c = ua(a);if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return L.RESOURCE_URL;
      }function Pa(a, c, d, e, f) {
        var h = R(a, e);f = g[e] || f;var k = b(d, !0, h, f);if (k) {
          if ("multiple" === e && "select" === ua(a)) throw ja("selmulti", va(a));c.push({ priority: 100, compile: function compile() {
              return { pre: function pre(a, c, g) {
                  c = g.$$observers || (g.$$observers = {});if (l.test(e)) throw ja("nodomevents");var n = g[e];n !== d && (k = n && b(n, !0, h, f), d = n);k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                    "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                  }));
                } };
            } });
        }
      }function V(a, b, c) {
        var d = b[0],
            e = b.length,
            f = d.parentNode,
            g,
            h;if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
          a[g++] = c;h = g + e - 1;for (var l = a.length; g < l; g++, h++) h < l ? a[g] = a[h] : delete a[g];a.length -= e - 1;a.context === d && (a.context = c);break;
        }f && f.replaceChild(c, d);a = Y.createDocumentFragment();a.appendChild(d);D(c).data(D(d).data());sa ? (Rb = !0, sa.cleanData([d])) : delete D.cache[d[D.expando]];d = 1;for (e = b.length; d < e; d++) f = b[d], D(f).remove(), a.appendChild(f), delete b[d];b[0] = c;b.length = 1;
      }function Z(a, b) {
        return x(function () {
          return a.apply(null, arguments);
        }, a, b);
      }function $(a, b, d, e, f, g) {
        try {
          a(b, d, e, f, g);
        } catch (h) {
          c(h, va(d));
        }
      }var Yb = function Yb(a, b) {
        if (b) {
          var c = Object.keys(b),
              d,
              e,
              f;d = 0;for (e = c.length; d < e; d++) f = c[d], this[f] = b[f];
        } else this.$attr = {};this.$$element = a;
      };Yb.prototype = { $normalize: ya, $addClass: function $addClass(a) {
          a && 0 < a.length && C.addClass(this.$$element, a);
        }, $removeClass: function $removeClass(a) {
          a && 0 < a.length && C.removeClass(this.$$element, a);
        }, $updateClass: function $updateClass(a, b) {
          var c = Vc(a, b);c && c.length && C.addClass(this.$$element, c);(c = Vc(b, a)) && c.length && C.removeClass(this.$$element, c);
        }, $set: function $set(a, b, d, e) {
          var f = this.$$element[0],
              g = Mc(f, a),
              h = kf(f, a),
              f = a;g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);this[a] = b;e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-"));g = ua(this.$$element);if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = A(b, "src" === a);else if ("img" === g && "srcset" === a) {
            for (var g = "", h = U(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ? l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++) var q = 2 * k, g = g + A(U(h[q]), !0), g = g + (" " + U(h[q + 1]));h = U(h[2 * k]).split(/\s/);g += A(U(h[0]), !0);2 === h.length && (g += " " + U(h[1]));this[a] = b = g;
          }!1 !== d && (null === b || b === t ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));(a = this.$$observers) && s(a[f], function (a) {
            try {
              a(b);
            } catch (d) {
              c(d);
            }
          });
        }, $observe: function $observe(a, b) {
          var c = this,
              d = c.$$observers || (c.$$observers = ha()),
              e = d[a] || (d[a] = []);e.push(b);v.$evalAsync(function () {
            !e.$$inter && c.hasOwnProperty(a) && b(c[a]);
          });
          return function () {
            Xa(e, b);
          };
        } };var Aa = b.startSymbol(),
          ka = b.endSymbol(),
          Tc = "{{" == Aa || "}}" == ka ? pa : function (a) {
        return a.replace(/\{\{/g, Aa).replace(/}}/g, ka);
      },
          gb = /^ngAttr[A-Z]/;E.$$addBindingInfo = k ? function (a, b) {
        var c = a.data("$binding") || [];H(b) ? c = c.concat(b) : c.push(b);a.data("$binding", c);
      } : z;E.$$addBindingClass = k ? function (a) {
        O(a, "ng-binding");
      } : z;E.$$addScopeInfo = k ? function (a, b, c, d) {
        a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b);
      } : z;E.$$addScopeClass = k ? function (a, b) {
        O(a, b ? "ng-isolate-scope" : "ng-scope");
      } : z;return E;
    }];
  }function ya(b) {
    return db(b.replace(Sc, ""));
  }function Vc(b, a) {
    var c = "",
        d = b.split(/\s+/),
        e = a.split(/\s+/),
        f = 0;a: for (; f < d.length; f++) {
      for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;c += (0 < c.length ? " " : "") + g;
    }return c;
  }function Uc(b) {
    b = D(b);var a = b.length;if (1 >= a) return b;for (; a--;) 8 === b[a].nodeType && pf.call(b, a, 1);return b;
  }function Fe() {
    var b = {},
        a = !1,
        c = /^(\S+)(\s+as\s+(\w+))?$/;this.register = function (a, c) {
      Ma(a, "controller");I(a) ? x(b, a) : b[a] = c;
    };this.allowGlobals = function () {
      a = !0;
    };this.$get = ["$injector", "$window", function (d, e) {
      function f(a, b, c, d) {
        if (!a || !I(a.$scope)) throw S("$controller")("noscp", d, b);a.$scope[b] = c;
      }return function (g, h, l, k) {
        var m, n, q;l = !0 === l;k && F(k) && (q = k);if (F(g)) {
          k = g.match(c);if (!k) throw qf("ctrlfmt", g);n = k[1];q = q || k[3];g = b.hasOwnProperty(n) ? b[n] : wc(h.$scope, n, !0) || (a ? wc(e, n, !0) : t);tb(g, n, !0);
        }if (l) return l = (H(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), q && f(h, q, m, n || g.name), x(function () {
          d.invoke(g, m, h, n);return m;
        }, { instance: m, identifier: q });
        m = d.instantiate(g, h, n);q && f(h, q, m, n || g.name);return m;
      };
    }];
  }function Ge() {
    this.$get = ["$window", function (b) {
      return D(b.document);
    }];
  }function He() {
    this.$get = ["$log", function (b) {
      return function (a, c) {
        b.error.apply(b, arguments);
      };
    }];
  }function Zb(b, a) {
    if (F(b)) {
      var c = b.replace(rf, "").trim();if (c) {
        var d = a("Content-Type");(d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(sf)) && tf[d[0]].test(c));d && (b = pc(c));
      }
    }return b;
  }function Xc(b) {
    var a = ha(),
        c,
        d,
        e;if (!b) return a;s(b.split("\n"), function (b) {
      e = b.indexOf(":");c = Q(U(b.substr(0, e)));d = U(b.substr(e + 1));c && (a[c] = a[c] ? a[c] + ", " + d : d);
    });return a;
  }function Yc(b) {
    var a = I(b) ? b : t;return function (c) {
      a || (a = Xc(b));return c ? (c = a[Q(c)], void 0 === c && (c = null), c) : a;
    };
  }function Zc(b, a, c, d) {
    if (G(d)) return d(b, a, c);s(d, function (d) {
      b = d(b, a, c);
    });return b;
  }function Ke() {
    var b = this.defaults = { transformResponse: [Zb], transformRequest: [function (a) {
        return I(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a;
      }], headers: { common: { Accept: "application/json, text/plain, */*" },
        post: ra($b), put: ra($b), patch: ra($b) }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN" },
        a = !1;this.useApplyAsync = function (b) {
      return y(b) ? (a = !!b, this) : a;
    };var c = this.interceptors = [];this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
      function k(a) {
        function c(a) {
          var b = x({}, a);b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data;a = a.status;return 200 <= a && 300 > a ? b : h.reject(b);
        }function d(a) {
          var b,
              c = {};s(a, function (a, d) {
            G(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a;
          });return c;
        }if (!ca.isObject(a)) throw S("$http")("badreq", a);var e = x({ method: "get", transformRequest: b.transformRequest, transformResponse: b.transformResponse }, a);e.headers = (function (a) {
          var c = b.headers,
              e = x({}, a.headers),
              f,
              g,
              c = x({}, c.common, c[Q(a.method)]);a: for (f in c) {
            a = Q(f);for (g in e) if (Q(g) === a) continue a;e[f] = c[f];
          }return d(e);
        })(a);e.method = vb(e.method);var f = [function (a) {
          var d = a.headers,
              e = Zc(a.data, Yc(d), t, a.transformRequest);B(e) && s(d, function (a, b) {
            "content-type" === Q(b) && delete d[b];
          });B(a.withCredentials) && !B(b.withCredentials) && (a.withCredentials = b.withCredentials);return m(a, e).then(c, c);
        }, t],
            g = h.when(e);for (s(u, function (a) {
          (a.request || a.requestError) && f.unshift(a.request, a.requestError);(a.response || a.responseError) && f.push(a.response, a.responseError);
        }); f.length;) {
          a = f.shift();var l = f.shift(),
              g = g.then(a, l);
        }g.success = function (a) {
          g.then(function (b) {
            a(b.data, b.status, b.headers, e);
          });return g;
        };g.error = function (a) {
          g.then(null, function (b) {
            a(b.data, b.status, b.headers, e);
          });
          return g;
        };return g;
      }function m(c, f) {
        function l(b, c, d, e) {
          function f() {
            m(c, b, d, e);
          }O && (200 <= b && 300 > b ? O.put(X, [b, c, Xc(d), e]) : O.remove(X));a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply());
        }function m(a, b, d, e) {
          b = Math.max(b, 0);(200 <= b && 300 > b ? C.resolve : C.reject)({ data: a, status: b, headers: Yc(d), config: c, statusText: e });
        }function w(a) {
          m(a.data, a.status, ra(a.headers()), a.statusText);
        }function u() {
          var a = k.pendingRequests.indexOf(c);-1 !== a && k.pendingRequests.splice(a, 1);
        }var C = h.defer(),
            A = C.promise,
            O,
            E,
            s = c.headers,
            X = n(c.url, c.params);k.pendingRequests.push(c);A.then(u, u);!c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (O = I(c.cache) ? c.cache : I(b.cache) ? b.cache : q);O && (E = O.get(X), y(E) ? E && G(E.then) ? E.then(w, w) : H(E) ? m(E[1], E[0], ra(E[2]), E[3]) : m(E, 200, {}, "OK") : O.put(X, A));B(E) && ((E = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : t) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = E), d(c.method, X, f, l, s, c.timeout, c.withCredentials, c.responseType));return A;
      }function n(a, b) {
        if (!b) return a;var c = [];Ed(b, function (a, b) {
          null === a || B(a) || (H(a) || (a = [a]), s(a, function (a) {
            I(a) && (a = qa(a) ? a.toISOString() : $a(a));c.push(Fa(b) + "=" + Fa(a));
          }));
        });0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));return a;
      }var q = f("$http"),
          u = [];s(c, function (a) {
        u.unshift(F(a) ? l.get(a) : l.invoke(a));
      });k.pendingRequests = [];(function (a) {
        s(arguments, function (a) {
          k[a] = function (b, c) {
            return k(x(c || {}, { method: a, url: b }));
          };
        });
      })("get", "delete", "head", "jsonp");(function (a) {
        s(arguments, function (a) {
          k[a] = function (b, c, d) {
            return k(x(d || {}, { method: a,
              url: b, data: c }));
          };
        });
      })("post", "put", "patch");k.defaults = b;return k;
    }];
  }function uf() {
    return new M.XMLHttpRequest();
  }function Le() {
    this.$get = ["$browser", "$window", "$document", function (b, a, c) {
      return vf(b, uf, b.defer, a.angular.callbacks, c[0]);
    }];
  }function vf(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement("script"),
          m = null;f.type = "text/javascript";f.src = a;f.async = !0;m = function (a) {
        f.removeEventListener("load", m, !1);f.removeEventListener("error", m, !1);e.body.removeChild(f);f = null;var g = -1,
            u = "unknown";a && ("load" !== a.type || d[b].called || (a = { type: "error" }), u = a.type, g = "error" === a.type ? 404 : 200);c && c(g, u);
      };f.addEventListener("load", m, !1);f.addEventListener("error", m, !1);e.body.appendChild(f);return m;
    }return function (e, h, l, k, m, n, q, u) {
      function r() {
        v && v();w && w.abort();
      }function P(a, d, e, f, g) {
        C !== t && c.cancel(C);v = w = null;a(d, e, f, g);b.$$completeOutstandingRequest(z);
      }b.$$incOutstandingRequestCount();h = h || b.url();if ("jsonp" == Q(e)) {
        var p = "_" + (d.counter++).toString(36);d[p] = function (a) {
          d[p].data = a;d[p].called = !0;
        };var v = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function (a, b) {
          P(k, a, d[p].data, "", b);d[p] = z;
        });
      } else {
        var w = a();w.open(e, h, !0);s(m, function (a, b) {
          y(a) && w.setRequestHeader(b, a);
        });w.onload = function () {
          var a = w.statusText || "",
              b = "response" in w ? w.response : w.responseText,
              c = 1223 === w.status ? 204 : w.status;0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0);P(k, c, b, w.getAllResponseHeaders(), a);
        };e = function () {
          P(k, -1, null, null, "");
        };w.onerror = e;w.onabort = e;q && (w.withCredentials = !0);if (u) try {
          w.responseType = u;
        } catch (L) {
          if ("json" !== u) throw L;
        }w.send(l || null);
      }if (0 < n) var C = c(r, n);else n && G(n.then) && n.then(r);
    };
  }function Ie() {
    var b = "{{",
        a = "}}";this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
      function f(a) {
        return "\\\\\\" + a;
      }function g(f, g, u, r) {
        function P(c) {
          return c.replace(k, b).replace(m, a);
        }function p(a) {
          try {
            var b = a;a = u ? e.getTrusted(u, b) : e.valueOf(b);var c;if (r && !y(a)) c = a;else if (null == a) c = "";else {
              switch (typeof a) {case "string":
                  break;case "number":
                  a = "" + a;break;default:
                  a = $a(a);}c = a;
            }return c;
          } catch (g) {
            c = ac("interr", f, g.toString()), d(c);
          }
        }r = !!r;for (var v, w, L = 0, C = [], A = [], O = f.length, E = [], s = []; L < O;) if (-1 != (v = f.indexOf(b, L)) && -1 != (w = f.indexOf(a, v + h))) L !== v && E.push(P(f.substring(L, v))), L = f.substring(v + h, w), C.push(L), A.push(c(L, p)), L = w + l, s.push(E.length), E.push("");else {
          L !== O && E.push(P(f.substring(L)));break;
        }if (u && 1 < E.length) throw ac("noconcat", f);if (!g || C.length) {
          var X = function X(a) {
            for (var b = 0, c = C.length; b < c; b++) {
              if (r && B(a[b])) return;E[s[b]] = a[b];
            }return E.join("");
          };
          return x(function (a) {
            var b = 0,
                c = C.length,
                e = Array(c);try {
              for (; b < c; b++) e[b] = A[b](a);return X(e);
            } catch (g) {
              a = ac("interr", f, g.toString()), d(a);
            }
          }, { exp: f, expressions: C, $$watchDelegate: function $$watchDelegate(a, b, c) {
              var d;return a.$watchGroup(A, function (c, e) {
                var f = X(c);G(b) && b.call(this, f, c !== e ? d : f, a);d = f;
              }, c);
            } });
        }
      }var h = b.length,
          l = a.length,
          k = new RegExp(b.replace(/./g, f), "g"),
          m = new RegExp(a.replace(/./g, f), "g");g.startSymbol = function () {
        return b;
      };g.endSymbol = function () {
        return a;
      };return g;
    }];
  }function Je() {
    this.$get = ["$rootScope", "$window", "$q", "$$q", function (b, a, c, d) {
      function e(e, h, l, k) {
        var m = a.setInterval,
            n = a.clearInterval,
            q = 0,
            u = y(k) && !k,
            r = (u ? d : c).defer(),
            P = r.promise;l = y(l) ? l : 0;P.then(null, null, e);P.$$intervalId = m(function () {
          r.notify(q++);0 < l && q >= l && (r.resolve(q), n(P.$$intervalId), delete f[P.$$intervalId]);u || b.$apply();
        }, h);f[P.$$intervalId] = r;return P;
      }var f = {};e.cancel = function (b) {
        return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
      };return e;
    }];
  }
  function Rd() {
    this.$get = function () {
      return { id: "en-us", NUMBER_FORMATS: { DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [{ minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3 }, { minInt: 1, minFrac: 2, maxFrac: 2, posPre: "¤", posSuf: "", negPre: "(¤", negSuf: ")", gSize: 3, lgSize: 3 }], CURRENCY_SYM: "$" }, DATETIME_FORMATS: { MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
          DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a" }, pluralCat: function pluralCat(b) {
          return 1 === b ? "one" : "other";
        } };
    };
  }function bc(b) {
    b = b.split("/");for (var a = b.length; a--;) b[a] = rb(b[a]);return b.join("/");
  }function ad(b, a) {
    var c = Ba(b);a.$$protocol = c.protocol;a.$$host = c.hostname;a.$$port = ba(c.port) || wf[c.protocol] || null;
  }function bd(b, a) {
    var c = "/" !== b.charAt(0);c && (b = "/" + b);var d = Ba(b);a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);a.$$search = rc(d.search);a.$$hash = decodeURIComponent(d.hash);a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
  }function za(b, a) {
    if (0 === a.indexOf(b)) return a.substr(b.length);
  }function Ha(b) {
    var a = b.indexOf("#");return -1 == a ? b : b.substr(0, a);
  }function Gb(b) {
    return b.replace(/(#.+)|#$/, "$1");
  }function cc(b) {
    return b.substr(0, Ha(b).lastIndexOf("/") + 1);
  }function dc(b, a) {
    this.$$html5 = !0;a = a || "";var c = cc(b);ad(b, this);this.$$parse = function (a) {
      var b = za(c, a);if (!F(b)) throw Hb("ipthprfx", a, c);bd(b, this);this.$$path || (this.$$path = "/");this.$$compose();
    };this.$$compose = function () {
      var a = Qb(this.$$search),
          b = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b;this.$$absUrl = c + this.$$url.substr(1);
    };this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;(f = za(b, d)) !== t ? (g = f, g = (f = za(a, f)) !== t ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== t ? g = c + f : c == d + "/" && (g = c);g && this.$$parse(g);return !!g;
    };
  }function ec(b, a) {
    var c = cc(b);ad(b, this);this.$$parse = function (d) {
      d = za(b, d) || za(c, d);var e;"#" === d.charAt(0) ? (e = za(a, d), B(e) && (e = d)) : e = this.$$html5 ? d : "";bd(e, this);d = this.$$path;var f = /^\/[A-Z]:(\/.*)/;0 === e.indexOf(b) && (e = e.replace(b, ""));f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);this.$$path = d;this.$$compose();
    };this.$$compose = function () {
      var c = Qb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
    };this.$$parseLinkUrl = function (a, c) {
      return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1;
    };
  }function cd(b, a) {
    this.$$html5 = !0;ec.apply(this, arguments);var c = cc(b);this.$$parseLinkUrl = function (d, e) {
      if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;var f, g;b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c);f && this.$$parse(f);return !!f;
    };this.$$compose = function () {
      var c = Qb(this.$$search),
          e = this.$$hash ? "#" + rb(this.$$hash) : "";this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;this.$$absUrl = b + a + this.$$url;
    };
  }function Ib(b) {
    return function () {
      return this[b];
    };
  }function dd(b, a) {
    return function (c) {
      if (B(c)) return this[b];this[b] = a(c);this.$$compose();return this;
    };
  }function Me() {
    var b = "",
        a = { enabled: !1, requireBase: !0, rewriteLinks: !0 };this.hashPrefix = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.html5Mode = function (b) {
      return Wa(b) ? (a.enabled = b, this) : I(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) && (a.rewriteLinks = b.rewriteLinks), this) : a;
    };this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
      function h(a, b, c) {
        var e = k.url(),
            f = k.$$state;try {
          d.url(a, b, c), k.$$state = d.state();
        } catch (g) {
          throw (k.url(e), k.$$state = f, g);
        }
      }function l(a, b) {
        c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b);
      }var k, m;m = d.baseHref();var n = d.url(),
          q;if (a.enabled) {
        if (!m && a.requireBase) throw Hb("nobase");q = n.substring(0, n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");m = e.history ? dc : cd;
      } else q = Ha(n), m = ec;k = new m(q, "#" + b);k.$$parseLinkUrl(n, n);k.$$state = d.state();var u = /^\s*(javascript|mailto):/i;f.on("click", function (b) {
        if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
          for (var e = D(b.target); "a" !== ua(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;var h = e.prop("href"),
              l = e.attr("href") || e.attr("xlink:href");I(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href);u.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h, l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0));
        }
      });Gb(k.absUrl()) != Gb(n) && d.url(k.absUrl(), !0);var r = !0;d.onUrlChange(function (a, b) {
        c.$evalAsync(function () {
          var d = k.absUrl(),
              e = k.$$state,
              f;k.$$parse(a);k.$$state = b;f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)));
        });c.$$phase || c.$digest();
      });c.$watch(function () {
        var a = Gb(d.url()),
            b = Gb(k.absUrl()),
            f = d.state(),
            g = k.$$replace,
            q = a !== b || k.$$html5 && e.history && f !== k.$$state;if (r || q) r = !1, c.$evalAsync(function () {
          var b = k.absUrl(),
              d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)));
        });k.$$replace = !1;
      });return k;
    }];
  }function Ne() {
    var b = !0,
        a = this;this.debugEnabled = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.$get = ["$window", function (c) {
      function d(a) {
        a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));return a;
      }function e(a) {
        var b = c.console || {},
            e = b[a] || b.log || z;a = !1;try {
          a = !!e.apply;
        } catch (l) {}return a ? function () {
          var a = [];s(arguments, function (b) {
            a.push(d(b));
          });return e.apply(b, a);
        } : function (a, b) {
          e(a, null == b ? "" : b);
        };
      }return { log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: (function () {
          var c = e("debug");return function () {
            b && c.apply(a, arguments);
          };
        })() };
    }];
  }function ta(b, a) {
    if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);return b;
  }function ma(b, a) {
    if (b) {
      if (b.constructor === b) throw la("isecfn", a);if (b.window === b) throw la("isecwindow", a);if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);if (b === Object) throw la("isecobj", a);
    }return b;
  }function fc(b) {
    return b.constant;
  }function hb(b, a, c, d, e) {
    ma(b, e);ma(a, e);c = c.split(".");for (var f, g = 0; 1 < c.length; g++) {
      f = ta(c.shift(), e);var h = 0 === g && a && a[f] || b[f];h || (h = {}, b[f] = h);b = ma(h, e);
    }f = ta(c.shift(), e);ma(b[f], e);return b[f] = d;
  }function Qa(b) {
    return "constructor" == b;
  }function ed(b, a, c, d, e, f, g) {
    ta(b, f);ta(a, f);ta(c, f);ta(d, f);ta(e, f);var h = function h(a) {
      return ma(a, f);
    },
        l = g || Qa(b) ? h : pa,
        k = g || Qa(a) ? h : pa,
        m = g || Qa(c) ? h : pa,
        n = g || Qa(d) ? h : pa,
        q = g || Qa(e) ? h : pa;return function (f, g) {
      var h = g && g.hasOwnProperty(b) ? g : f;if (null == h) return h;h = l(h[b]);if (!a) return h;if (null == h) return t;h = k(h[a]);if (!c) return h;if (null == h) return t;h = m(h[c]);if (!d) return h;if (null == h) return t;
      h = n(h[d]);return e ? null == h ? t : h = q(h[e]) : h;
    };
  }function xf(b, a) {
    return function (c, d) {
      return b(c, d, ma, a);
    };
  }function yf(b, a, c) {
    var d = a.expensiveChecks,
        e = d ? zf : Af,
        f = e[b];if (f) return f;var g = b.split("."),
        h = g.length;if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
      var e = 0,
          f;do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = t, a = f; while (e < h);return f;
    };else {
      var l = "";d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");var k = d;s(g, function (a, b) {
        ta(a, c);var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;l += "if(s == null) return undefined;\ns=" + e + ";\n";
      });l += "return s;";a = new Function("s", "l", "eso", "fe", l);a.toString = ea(l);k && (a = xf(a, c));f = a;
    }f.sharedGetter = !0;f.assign = function (a, c, d) {
      return hb(a, d, b, c, b);
    };return e[b] = f;
  }function gc(b) {
    return G(b.valueOf) ? b.valueOf() : Bf.call(b);
  }function Oe() {
    var b = ha(),
        a = ha();this.$get = ["$filter", "$sniffer", function (c, d) {
      function e(a) {
        var b = a;a.sharedGetter && (b = function (b, c) {
          return a(b, c);
        }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign);return b;
      }function f(a, b) {
        for (var c = 0, d = a.length; c < d; c++) {
          var e = a[c];e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e));
        }return b;
      }function g(a, b) {
        return null == a || null == b ? a === b : "object" === typeof a && (a = gc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b;
      }function h(a, b, c, d) {
        var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])),
            h;if (1 === e.length) {
          var l = g,
              e = e[0];return a.$watch(function (a) {
            var b = e(a);g(b, l) || (h = d(a), l = b && gc(b));return h;
          }, b, c);
        }for (var k = [], q = 0, n = e.length; q < n; q++) k[q] = g;return a.$watch(function (a) {
          for (var b = !1, c = 0, f = e.length; c < f; c++) {
            var l = e[c](a);if (b || (b = !g(l, k[c]))) k[c] = l && gc(l);
          }b && (h = d(a));return h;
        }, b, c);
      }function l(a, b, c, d) {
        var e, f;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          f = a;G(b) && b.apply(this, arguments);y(a) && d.$$postDigest(function () {
            y(f) && e();
          });
        }, c);
      }function k(a, b, c, d) {
        function e(a) {
          var b = !0;s(a, function (a) {
            y(a) || (b = !1);
          });return b;
        }var f, g;return f = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          g = a;G(b) && b.call(this, a, c, d);e(a) && d.$$postDigest(function () {
            e(g) && f();
          });
        }, c);
      }function m(a, b, c, d) {
        var e;return e = a.$watch(function (a) {
          return d(a);
        }, function (a, c, d) {
          G(b) && b.apply(this, arguments);e();
        }, c);
      }function n(a, b) {
        if (!b) return a;var c = a.$$watchDelegate,
            c = c !== k && c !== l ? function (c, d) {
          var e = a(c, d);return b(e, c, d);
        } : function (c, d) {
          var e = a(c, d),
              f = b(e, c, d);return y(e) ? f : e;
        };a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);return c;
      }var q = { csp: d.csp, expensiveChecks: !1 },
          u = { csp: d.csp, expensiveChecks: !0 };
      return function (d, f, g) {
        var v, w, L;switch (typeof d) {case "string":
            L = d = d.trim();var C = g ? a : b;v = C[L];v || (":" === d.charAt(0) && ":" === d.charAt(1) && (w = !0, d = d.substring(2)), g = g ? u : q, v = new hc(g), v = new ib(v, c, g).parse(d), v.constant ? v.$$watchDelegate = m : w ? (v = e(v), v.$$watchDelegate = v.literal ? k : l) : v.inputs && (v.$$watchDelegate = h), C[L] = v);return n(v, f);case "function":
            return n(d, f);default:
            return n(z, f);}
      };
    }];
  }function Qe() {
    this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
      return fd(function (a) {
        b.$evalAsync(a);
      }, a);
    }];
  }function Re() {
    this.$get = ["$browser", "$exceptionHandler", function (b, a) {
      return fd(function (a) {
        b.defer(a);
      }, a);
    }];
  }function fd(b, a) {
    function c(a, b, c) {
      function d(b) {
        return function (c) {
          e || (e = !0, b.call(a, c));
        };
      }var e = !1;return [d(b), d(c)];
    }function d() {
      this.$$state = { status: 0 };
    }function e(a, b) {
      return function (c) {
        b.call(a, c);
      };
    }function f(c) {
      !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
        var b, d, e;e = c.pending;c.processScheduled = !1;c.pending = t;for (var f = 0, g = e.length; f < g; ++f) {
          d = e[f][0];b = e[f][c.status];
          try {
            G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value);
          } catch (h) {
            d.reject(h), a(h);
          }
        }
      }));
    }function g() {
      this.promise = new d();this.resolve = e(this, this.resolve);this.reject = e(this, this.reject);this.notify = e(this, this.notify);
    }var h = S("$q", TypeError);d.prototype = { then: function then(a, b, c) {
        var d = new g();this.$$state.pending = this.$$state.pending || [];this.$$state.pending.push([d, a, b, c]);0 < this.$$state.status && f(this.$$state);return d.promise;
      }, "catch": function _catch(a) {
        return this.then(null, a);
      }, "finally": function _finally(a, b) {
        return this.then(function (b) {
          return k(b, !0, a);
        }, function (b) {
          return k(b, !1, a);
        }, b);
      } };g.prototype = { resolve: function resolve(a) {
        this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a));
      }, $$resolve: function $$resolve(b) {
        var d, e;e = c(this, this.$$resolve, this.$$reject);try {
          if (I(b) || G(b)) d = b && b.then;G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state));
        } catch (g) {
          e[1](g), a(g);
        }
      }, reject: function reject(a) {
        this.promise.$$state.status || this.$$reject(a);
      }, $$reject: function $$reject(a) {
        this.promise.$$state.value = a;this.promise.$$state.status = 2;f(this.promise.$$state);
      }, notify: function notify(c) {
        var d = this.promise.$$state.pending;0 >= this.promise.$$state.status && d && d.length && b(function () {
          for (var b, e, f = 0, g = d.length; f < g; f++) {
            e = d[f][0];b = d[f][3];try {
              e.notify(G(b) ? b(c) : c);
            } catch (h) {
              a(h);
            }
          }
        });
      } };var l = function l(a, b) {
      var c = new g();b ? c.resolve(a) : c.reject(a);return c.promise;
    },
        k = function k(a, b, c) {
      var d = null;try {
        G(c) && (d = c());
      } catch (e) {
        return l(e, !1);
      }return d && G(d.then) ? d.then(function () {
        return l(a, b);
      }, function (a) {
        return l(a, !1);
      }) : l(a, b);
    },
        m = function m(a, b, c, d) {
      var e = new g();e.resolve(a);return e.promise.then(b, c, d);
    },
        n = function u(a) {
      if (!G(a)) throw h("norslvr", a);if (!(this instanceof u)) return new u(a);var b = new g();a(function (a) {
        b.resolve(a);
      }, function (a) {
        b.reject(a);
      });return b.promise;
    };n.defer = function () {
      return new g();
    };n.reject = function (a) {
      var b = new g();b.reject(a);return b.promise;
    };n.when = m;n.all = function (a) {
      var b = new g(),
          c = 0,
          d = H(a) ? [] : {};s(a, function (a, e) {
        c++;m(a).then(function (a) {
          d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          d.hasOwnProperty(e) || b.reject(a);
        });
      });0 === c && b.resolve(d);return b.promise;
    };return n;
  }function $e() {
    this.$get = ["$window", "$timeout", function (b, a) {
      var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
          d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
          e = !!c,
          f = e ? function (a) {
        var b = c(a);return function () {
          d(b);
        };
      } : function (b) {
        var c = a(b, 16.66, !1);return function () {
          a.cancel(c);
        };
      };f.supported = e;return f;
    }];
  }function Pe() {
    var b = 10,
        a = S("$rootScope"),
        c = null,
        d = null;this.digestTtl = function (a) {
      arguments.length && (b = a);return b;
    };this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (e, f, g, h) {
      function l() {
        this.$id = ++ob;this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;this.$root = this;this.$$destroyed = !1;this.$$listeners = {};this.$$listenerCount = {};this.$$isolateBindings = null;
      }function k(b) {
        if (r.$$phase) throw a("inprog", r.$$phase);r.$$phase = b;
      }function m(a, b, c) {
        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
      }function n() {}function q() {
        for (; v.length;) try {
          v.shift()();
        } catch (a) {
          f(a);
        }d = null;
      }function u() {
        null === d && (d = h.defer(function () {
          r.$apply(q);
        }));
      }l.prototype = { constructor: l, $new: function $new(a, b) {
          function c() {
            d.$$destroyed = !0;
          }var d;b = b || this;a ? (d = new l(), d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
            this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;this.$$listeners = {};this.$$listenerCount = {};this.$id = ++ob;this.$$ChildScope = null;
          }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope());d.$parent = b;d.$$prevSibling = b.$$childTail;b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;(a || b != this) && d.$on("$destroy", c);return d;
        }, $watch: function $watch(a, b, d) {
          var e = g(a);if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);var f = this.$$watchers,
              h = { fn: b, last: n, get: e, exp: a, eq: !!d };c = null;G(b) || (h.fn = z);f || (f = this.$$watchers = []);f.unshift(h);
          return function () {
            Xa(f, h);c = null;
          };
        }, $watchGroup: function $watchGroup(a, b) {
          function c() {
            h = !1;l ? (l = !1, b(e, e, g)) : b(e, d, g);
          }var d = Array(a.length),
              e = Array(a.length),
              f = [],
              g = this,
              h = !1,
              l = !0;if (!a.length) {
            var k = !0;g.$evalAsync(function () {
              k && b(e, e, g);
            });return function () {
              k = !1;
            };
          }if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
            e[0] = a;d[0] = c;b(e, a === c ? e : d, f);
          });s(a, function (a, b) {
            var l = g.$watch(a, function (a, f) {
              e[b] = a;d[b] = f;h || (h = !0, g.$evalAsync(c));
            });f.push(l);
          });return function () {
            for (; f.length;) f.shift()();
          };
        }, $watchCollection: function $watchCollection(a, b) {
          function c(a) {
            e = a;var b, d, g, h;if (!B(e)) {
              if (I(e)) if (Ta(e)) for (f !== q && (f = q, u = f.length = 0, k++), a = e.length, u !== a && (k++, f.length = u = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g);else {
                f !== m && (f = m = {}, u = 0, k++);a = 0;for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (u++, f[b] = g, k++));if (u > a) for (b in (k++, f)) e.hasOwnProperty(b) || (u--, delete f[b]);
              } else f !== e && (f = e, k++);return k;
            }
          }c.$stateful = !0;var d = this,
              e,
              f,
              h,
              l = 1 < b.length,
              k = 0,
              n = g(a, c),
              q = [],
              m = {},
              p = !0,
              u = 0;return this.$watch(n, function () {
            p ? (p = !1, b(e, e, d)) : b(e, h, d);if (l) if (I(e)) if (Ta(e)) {
              h = Array(e.length);for (var a = 0; a < e.length; a++) h[a] = e[a];
            } else for (a in (h = {}, e)) sc.call(e, a) && (h[a] = e[a]);else h = e;
          });
        }, $digest: function $digest() {
          var e,
              g,
              l,
              m,
              u,
              v,
              s = b,
              t,
              W = [],
              y,
              J;k("$digest");h.$$checkUrlChange();this === r && null !== d && (h.defer.cancel(d), q());c = null;do {
            v = !1;for (t = this; P.length;) {
              try {
                J = P.shift(), J.scope.$eval(J.expression, J.locals);
              } catch (D) {
                f(D);
              }c = null;
            }a: do {
              if (m = t.$$watchers) for (u = m.length; u--;) try {
                if (e = m[u]) if ((g = e.get(t)) !== (l = e.last) && !(e.eq ? ga(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l))) v = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === n ? g : l, t), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({ msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp, newVal: g, oldVal: l }));else if (e === c) {
                  v = !1;break a;
                }
              } catch (B) {
                f(B);
              }if (!(m = t.$$childHead || t !== this && t.$$nextSibling)) for (; t !== this && !(m = t.$$nextSibling);) t = t.$parent;
            } while (t = m);if ((v || P.length) && ! s--) throw (r.$$phase = null, a("infdig", b, W));
          } while (v || P.length);
          for (r.$$phase = null; p.length;) try {
            p.shift()();
          } catch (da) {
            f(da);
          }
        }, $destroy: function $destroy() {
          if (!this.$$destroyed) {
            var a = this.$parent;this.$broadcast("$destroy");this.$$destroyed = !0;if (this !== r) {
              for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);a.$$childHead == this && (a.$$childHead = this.$$nextSibling);a.$$childTail == this && (a.$$childTail = this.$$prevSibling);this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
              this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = z;this.$on = this.$watch = this.$watchGroup = function () {
                return z;
              };this.$$listeners = {};this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null;
            }
          }
        }, $eval: function $eval(a, b) {
          return g(a)(this, b);
        }, $evalAsync: function $evalAsync(a, b) {
          r.$$phase || P.length || h.defer(function () {
            P.length && r.$digest();
          });P.push({ scope: this, expression: a, locals: b });
        }, $$postDigest: function $$postDigest(a) {
          p.push(a);
        }, $apply: function $apply(a) {
          try {
            return k("$apply"), this.$eval(a);
          } catch (b) {
            f(b);
          } finally {
            r.$$phase = null;try {
              r.$digest();
            } catch (c) {
              throw (f(c), c);
            }
          }
        }, $applyAsync: function $applyAsync(a) {
          function b() {
            c.$eval(a);
          }var c = this;a && v.push(b);u();
        }, $on: function $on(a, b) {
          var c = this.$$listeners[a];c || (this.$$listeners[a] = c = []);c.push(b);var d = this;do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);var e = this;return function () {
            var d = c.indexOf(b);-1 !== d && (c[d] = null, m(e, 1, a));
          };
        }, $emit: function $emit(a, b) {
          var c = [],
              d,
              e = this,
              g = !1,
              h = { name: a, targetScope: e,
            stopPropagation: function stopPropagation() {
              g = !0;
            }, preventDefault: function preventDefault() {
              h.defaultPrevented = !0;
            }, defaultPrevented: !1 },
              l = Ya([h], arguments, 1),
              k,
              m;do {
            d = e.$$listeners[a] || c;h.currentScope = e;k = 0;for (m = d.length; k < m; k++) if (d[k]) try {
              d[k].apply(null, l);
            } catch (n) {
              f(n);
            } else d.splice(k, 1), k--, m--;if (g) return h.currentScope = null, h;e = e.$parent;
          } while (e);h.currentScope = null;return h;
        }, $broadcast: function $broadcast(a, b) {
          var c = this,
              d = this,
              e = { name: a, targetScope: this, preventDefault: function preventDefault() {
              e.defaultPrevented = !0;
            }, defaultPrevented: !1 };if (!this.$$listenerCount[a]) return e;
          for (var g = Ya([e], arguments, 1), h, l; c = d;) {
            e.currentScope = c;d = c.$$listeners[a] || [];h = 0;for (l = d.length; h < l; h++) if (d[h]) try {
              d[h].apply(null, g);
            } catch (k) {
              f(k);
            } else d.splice(h, 1), h--, l--;if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent;
          }e.currentScope = null;return e;
        } };var r = new l(),
          P = r.$$asyncQueue = [],
          p = r.$$postDigestQueue = [],
          v = r.$$applyAsyncQueue = [];return r;
    }];
  }function Sd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/,
        a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (a) {
      return y(a) ? (b = a, this) : b;
    };this.imgSrcSanitizationWhitelist = function (b) {
      return y(b) ? (a = b, this) : a;
    };this.$get = function () {
      return function (c, d) {
        var e = d ? a : b,
            f;f = Ba(c).href;return "" === f || f.match(e) ? c : "unsafe:" + f;
      };
    };
  }function Cf(b) {
    if ("self" === b) return b;if (F(b)) {
      if (-1 < b.indexOf("***")) throw Ca("iwcard", b);b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");return new RegExp("^" + b + "$");
    }if (pb(b)) return new RegExp("^" + b.source + "$");throw Ca("imatcher");
  }function hd(b) {
    var a = [];y(b) && s(b, function (b) {
      a.push(Cf(b));
    });return a;
  }function Te() {
    this.SCE_CONTEXTS = na;var b = ["self"],
        a = [];this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = hd(a));return b;
    };this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = hd(b));return a;
    };this.$get = ["$injector", function (c) {
      function d(a, b) {
        return "self" === a ? $c(b) : !!a.exec(b.href);
      }function e(a) {
        var b = function b(a) {
          this.$$unwrapTrustedValue = function () {
            return a;
          };
        };a && (b.prototype = new a());b.prototype.valueOf = function () {
          return this.$$unwrapTrustedValue();
        };
        b.prototype.toString = function () {
          return this.$$unwrapTrustedValue().toString();
        };return b;
      }var f = function f(a) {
        throw Ca("unsafe");
      };c.has("$sanitize") && (f = c.get("$sanitize"));var g = e(),
          h = {};h[na.HTML] = e(g);h[na.CSS] = e(g);h[na.URL] = e(g);h[na.JS] = e(g);h[na.RESOURCE_URL] = e(h[na.URL]);return { trustAs: function trustAs(a, b) {
          var c = h.hasOwnProperty(a) ? h[a] : null;if (!c) throw Ca("icontext", a, b);if (null === b || b === t || "" === b) return b;if ("string" !== typeof b) throw Ca("itype", a);return new c(b);
        }, getTrusted: function getTrusted(c, e) {
          if (null === e || e === t || "" === e) return e;var g = h.hasOwnProperty(c) ? h[c] : null;if (g && e instanceof g) return e.$$unwrapTrustedValue();if (c === na.RESOURCE_URL) {
            var g = Ba(e.toString()),
                n,
                q,
                u = !1;n = 0;for (q = b.length; n < q; n++) if (d(b[n], g)) {
              u = !0;break;
            }if (u) for (n = 0, q = a.length; n < q; n++) if (d(a[n], g)) {
              u = !1;break;
            }if (u) return e;throw Ca("insecurl", e.toString());
          }if (c === na.HTML) return f(e);throw Ca("unsafe");
        }, valueOf: function valueOf(a) {
          return a instanceof g ? a.$$unwrapTrustedValue() : a;
        } };
    }];
  }function Se() {
    var b = !0;this.enabled = function (a) {
      arguments.length && (b = !!a);return b;
    };this.$get = ["$parse", "$sceDelegate", function (a, c) {
      if (b && 8 > Ra) throw Ca("iequirks");var d = ra(na);d.isEnabled = function () {
        return b;
      };d.trustAs = c.trustAs;d.getTrusted = c.getTrusted;d.valueOf = c.valueOf;b || (d.trustAs = d.getTrusted = function (a, b) {
        return b;
      }, d.valueOf = pa);d.parseAs = function (b, c) {
        var e = a(c);return e.literal && e.constant ? e : a(c, function (a) {
          return d.getTrusted(b, a);
        });
      };var e = d.parseAs,
          f = d.getTrusted,
          g = d.trustAs;s(na, function (a, b) {
        var c = Q(b);d[db("parse_as_" + c)] = function (b) {
          return e(a, b);
        };d[db("get_trusted_" + c)] = function (b) {
          return f(a, b);
        };d[db("trust_as_" + c)] = function (b) {
          return g(a, b);
        };
      });return d;
    }];
  }function Ue() {
    this.$get = ["$window", "$document", function (b, a) {
      var c = {},
          d = ba((/android (\d+)/.exec(Q((b.navigator || {}).userAgent)) || [])[1]),
          e = /Boxee/i.test((b.navigator || {}).userAgent),
          f = a[0] || {},
          g,
          h = /^(Moz|webkit|ms)(?=[A-Z])/,
          l = f.body && f.body.style,
          k = !1,
          m = !1;if (l) {
        for (var n in l) if (k = h.exec(n)) {
          g = k[0];g = g.substr(0, 1).toUpperCase() + g.substr(1);break;
        }g || (g = "WebkitOpacity" in l && "webkit");
        k = !!("transition" in l || g + "Transition" in l);m = !!("animation" in l || g + "Animation" in l);!d || k && m || (k = F(f.body.style.webkitTransition), m = F(f.body.style.webkitAnimation));
      }return { history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function hasEvent(a) {
          if ("input" === a && 11 >= Ra) return !1;if (B(c[a])) {
            var b = f.createElement("div");c[a] = "on" + a in b;
          }return c[a];
        }, csp: bb(), vendorPrefix: g, transitions: k, animations: m, android: d };
    }];
  }function We() {
    this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
      function d(e, f) {
        d.totalPendingRequests++;
        var g = a.defaults && a.defaults.transformResponse;H(g) ? g = g.filter(function (a) {
          return a !== Zb;
        }) : g === Zb && (g = null);return a.get(e, { cache: b, transformResponse: g })["finally"](function () {
          d.totalPendingRequests--;
        }).then(function (a) {
          return a.data;
        }, function (a) {
          if (!f) throw ja("tpload", e);return c.reject(a);
        });
      }d.totalPendingRequests = 0;return d;
    }];
  }function Xe() {
    this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
      return { findBindings: function findBindings(a, b, c) {
          a = a.getElementsByClassName("ng-binding");var g = [];s(a, function (a) {
            var d = ca.element(a).data("$binding");d && s(d, function (d) {
              c ? new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)").test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a);
            });
          });return g;
        }, findModels: function findModels(a, b, c) {
          for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
            var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');if (l.length) return l;
          }
        }, getLocation: function getLocation() {
          return c.url();
        }, setLocation: function setLocation(a) {
          a !== c.url() && (c.url(a), b.$digest());
        }, whenStable: function whenStable(b) {
          a.notifyWhenNoOutstandingRequests(b);
        } };
    }];
  }function Ye() {
    this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
      function f(f, l, k) {
        var m = y(k) && !k,
            n = (m ? d : c).defer(),
            q = n.promise;l = a.defer(function () {
          try {
            n.resolve(f());
          } catch (a) {
            n.reject(a), e(a);
          } finally {
            delete g[q.$$timeoutId];
          }m || b.$apply();
        }, l);q.$$timeoutId = l;g[l] = n;return q;
      }var g = {};f.cancel = function (b) {
        return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
      };return f;
    }];
  }function Ba(b) {
    Ra && (Z.setAttribute("href", b), b = Z.href);
    Z.setAttribute("href", b);return { href: Z.href, protocol: Z.protocol ? Z.protocol.replace(/:$/, "") : "", host: Z.host, search: Z.search ? Z.search.replace(/^\?/, "") : "", hash: Z.hash ? Z.hash.replace(/^#/, "") : "", hostname: Z.hostname, port: Z.port, pathname: "/" === Z.pathname.charAt(0) ? Z.pathname : "/" + Z.pathname };
  }function $c(b) {
    b = F(b) ? Ba(b) : b;return b.protocol === id.protocol && b.host === id.host;
  }function Ze() {
    this.$get = ea(M);
  }function Ec(b) {
    function a(c, d) {
      if (I(c)) {
        var e = {};s(c, function (b, c) {
          e[c] = a(c, b);
        });return e;
      }return b.factory(c + "Filter", d);
    }this.register = a;this.$get = ["$injector", function (a) {
      return function (b) {
        return a.get(b + "Filter");
      };
    }];a("currency", jd);a("date", kd);a("filter", Df);a("json", Ef);a("limitTo", Ff);a("lowercase", Gf);a("number", ld);a("orderBy", md);a("uppercase", Hf);
  }function Df() {
    return function (b, a, c) {
      if (!H(b)) return b;var d;switch (typeof a) {case "function":
          break;case "boolean":case "number":case "string":
          d = !0;case "object":
          a = If(a, c, d);break;default:
          return b;}return b.filter(a);
    };
  }function If(b, a, c) {
    var d = I(b) && "$" in b;!0 === a ? a = ga : G(a) || (a = function (a, b) {
      if (I(a) || I(b)) return !1;a = Q("" + a);b = Q("" + b);return -1 !== a.indexOf(b);
    });return function (e) {
      return d && !I(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c);
    };
  }function Ia(_x3, _x4, _x5, _x6, _x7) {
    var _again2 = true;

    _function2: while (_again2) {
      var b = _x3,
          a = _x4,
          c = _x5,
          d = _x6,
          e = _x7;
      _again2 = false;
      var f = typeof b,
          g = typeof a;if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);if (H(b)) return b.some(function (b) {
        return Ia(b, a, c, d);
      });switch (f) {case "object":
          var h;if (d) {
            for (h in b) if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0)) return !0;if (e) {
              return !1;
            } else {
              _x3 = b;
              _x4 = a;
              _x5 = c;
              _x6 = !1;
              _x7 = undefined;
              _again2 = true;
              f = g = h = undefined;
              continue _function2;
            }
          }if ("object" === g) {
            for (h in a) if ((e = a[h], !G(e) && (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f)))) return !1;return !0;
          }return c(b, a);case "function":
          return !1;default:
          return c(b, a);}
    }
  }function jd(b) {
    var a = b.NUMBER_FORMATS;return function (b, d, e) {
      B(d) && (d = a.CURRENCY_SYM);B(e) && (e = a.PATTERNS[1].maxFrac);return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d);
    };
  }function ld(b) {
    var a = b.NUMBER_FORMATS;return function (b, d) {
      return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }function nd(b, a, c, d, e) {
    if (!isFinite(b) || I(b)) return "";var f = 0 > b;b = Math.abs(b);var g = b + "",
        h = "",
        l = [],
        k = !1;if (-1 !== g.indexOf("e")) {
      var m = g.match(/([\d\.]+)e(-?)(\d+)/);m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0);
    }if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h));else {
      g = (g.split(od)[1] || "").length;B(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);var g = ("" + b).split(od),
          k = g[0],
          g = g[1] || "",
          n = 0,
          q = a.lgSize,
          u = a.gSize;if (k.length >= q + u) for (n = k.length - q, m = 0; m < n; m++) 0 === (n - m) % u && 0 !== m && (h += c), h += k.charAt(m);for (m = n; m < k.length; m++) 0 === (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);for (; g.length < e;) g += "0";e && "0" !== e && (h += d + g.substr(0, e));
    }0 === b && (f = !1);l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);return l.join("");
  }function Jb(b, a, c) {
    var d = "";0 > b && (d = "-", b = -b);for (b = "" + b; b.length < a;) b = "0" + b;c && (b = b.substr(b.length - a));return d + b;
  }function $(b, a, c, d) {
    c = c || 0;return function (e) {
      e = e["get" + b]();if (0 < c || e > -c) e += c;0 === e && -12 == c && (e = 12);return Jb(e, a, d);
    };
  }function Kb(b, a) {
    return function (c, d) {
      var e = c["get" + b](),
          f = vb(a ? "SHORT" + b : b);return d[f][e];
    };
  }
  function pd(b) {
    var a = new Date(b, 0, 1).getDay();return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }function qd(b) {
    return function (a) {
      var c = pd(a.getFullYear());a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;a = 1 + Math.round(a / 6048E5);return Jb(a, b);
    };
  }function kd(b) {
    function a(a) {
      var b;if (b = a.match(c)) {
        a = new Date(0);var f = 0,
            g = 0,
            h = b[8] ? a.setUTCFullYear : a.setFullYear,
            l = b[8] ? a.setUTCHours : a.setHours;b[9] && (f = ba(b[9] + b[10]), g = ba(b[9] + b[11]));h.call(a, ba(b[1]), ba(b[2]) - 1, ba(b[3]));f = ba(b[4] || 0) - f;
        g = ba(b[5] || 0) - g;h = ba(b[6] || 0);b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));l.call(a, f, g, h, b);
      }return a;
    }var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function (c, e, f) {
      var g = "",
          h = [],
          l,
          k;e = e || "mediumDate";e = b.DATETIME_FORMATS[e] || e;F(c) && (c = Jf.test(c) ? ba(c) : a(c));V(c) && (c = new Date(c));if (!qa(c)) return c;for (; e;) (k = Kf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));s(h, function (a) {
        l = Lf[a];g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
      });return g;
    };
  }function Ef() {
    return function (b, a) {
      B(a) && (a = 2);return $a(b, a);
    };
  }function Ff() {
    return function (b, a) {
      V(b) && (b = b.toString());return H(b) || F(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : ba(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : F(b) ? "" : [] : b;
    };
  }function md(b) {
    return function (a, c, d) {
      function e(a, b) {
        return b ? function (b, c) {
          return a(c, b);
        } : a;
      }function f(a) {
        switch (typeof a) {case "number":case "boolean":case "string":
            return !0;
          default:
            return !1;}
      }function g(a) {
        return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : "";
      }function h(a, b) {
        var c = typeof a,
            d = typeof b;c === d && "object" === c && (a = g(a), b = g(b));return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }if (!Ta(a)) return a;c = H(c) ? c : [c];0 === c.length && (c = ["+"]);c = c.map(function (a) {
        var c = !1,
            d = a || pa;if (F(a)) {
          if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
          if ("" === a) return e(h, c);d = b(a);if (d.constant) {
            var f = d();return e(function (a, b) {
              return h(a[f], b[f]);
            }, c);
          }
        }return e(function (a, b) {
          return h(d(a), d(b));
        }, c);
      });return Za.call(a).sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);if (0 !== e) return e;
        }return 0;
      }, d));
    };
  }function Ja(b) {
    G(b) && (b = { link: b });b.restrict = b.restrict || "AC";return ea(b);
  }function rd(b, a, c, d, e) {
    var f = this,
        g = [],
        h = f.$$parentForm = b.parent().controller("form") || Lb;f.$error = {};f.$$success = {};f.$pending = t;f.$name = e(a.name || a.ngForm || "")(c);f.$dirty = !1;f.$pristine = !0;f.$valid = !0;f.$invalid = !1;f.$submitted = !1;h.$addControl(f);f.$rollbackViewValue = function () {
      s(g, function (a) {
        a.$rollbackViewValue();
      });
    };f.$commitViewValue = function () {
      s(g, function (a) {
        a.$commitViewValue();
      });
    };f.$addControl = function (a) {
      Ma(a.$name, "input");g.push(a);a.$name && (f[a.$name] = a);
    };f.$$renameControl = function (a, b) {
      var c = a.$name;f[c] === a && delete f[c];f[b] = a;a.$name = b;
    };f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];s(f.$pending, function (b, c) {
        f.$setValidity(c, null, a);
      });s(f.$error, function (b, c) {
        f.$setValidity(c, null, a);
      });s(f.$$success, function (b, c) {
        f.$setValidity(c, null, a);
      });Xa(g, a);
    };sd({ ctrl: this, $element: b, set: function set(a, b, c) {
        var d = a[b];d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c];
      }, unset: function unset(a, b, c) {
        var d = a[b];d && (Xa(d, c), 0 === d.length && delete a[b]);
      }, parentForm: h, $animate: d });f.$setDirty = function () {
      d.removeClass(b, Sa);d.addClass(b, Mb);f.$dirty = !0;f.$pristine = !1;h.$setDirty();
    };f.$setPristine = function () {
      d.setClass(b, Sa, Mb + " ng-submitted");f.$dirty = !1;f.$pristine = !0;f.$submitted = !1;s(g, function (a) {
        a.$setPristine();
      });
    };f.$setUntouched = function () {
      s(g, function (a) {
        a.$setUntouched();
      });
    };f.$setSubmitted = function () {
      d.addClass(b, "ng-submitted");f.$submitted = !0;h.$setSubmitted();
    };
  }function ic(b) {
    b.$formatters.push(function (a) {
      return b.$isEmpty(a) ? a : a.toString();
    });
  }function jb(b, a, c, d, e, f) {
    var g = Q(a[0].type);if (!e.android) {
      var h = !1;a.on("compositionstart", function (a) {
        h = !0;
      });a.on("compositionend", function () {
        h = !1;l();
      });
    }var l = function l(b) {
      k && (f.defer.cancel(k), k = null);if (!h) {
        var e = a.val();b = b && b.type;"password" === g || c.ngTrim && "false" === c.ngTrim || (e = U(e));(d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b);
      }
    };if (e.hasEvent("input")) a.on("input", l);else {
      var k,
          m = function m(a, b, c) {
        k || (k = f.defer(function () {
          k = null;b && b.value === c || l(a);
        }));
      };a.on("keydown", function (a) {
        var b = a.keyCode;91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value);
      });if (e.hasEvent("paste")) a.on("paste cut", m);
    }a.on("change", l);d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
    };
  }
  function Nb(b, a) {
    return function (c, d) {
      var e, f;if (qa(c)) return c;if (F(c)) {
        '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));if (Mf.test(c)) return new Date(c);b.lastIndex = 0;if (e = b.exec(c)) return e.shift(), f = d ? { yyyy: d.getFullYear(), MM: d.getMonth() + 1, dd: d.getDate(), HH: d.getHours(), mm: d.getMinutes(), ss: d.getSeconds(), sss: d.getMilliseconds() / 1E3 } : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }, s(e, function (b, c) {
          c < a.length && (f[a[c]] = +b);
        }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0);
      }return NaN;
    };
  }function kb(b, a, c, d) {
    return function (e, f, g, h, l, k, m) {
      function n(a) {
        return a && !(a.getTime && a.getTime() !== a.getTime());
      }function q(a) {
        return y(a) ? qa(a) ? a : c(a) : t;
      }td(e, f, g, h);jb(e, f, g, h, l, k);var u = h && h.$options && h.$options.timezone,
          r;h.$$parserName = b;h.$parsers.push(function (b) {
        return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === u && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : t;
      });h.$formatters.push(function (a) {
        if (a && !qa(a)) throw Ob("datefmt", a);if (n(a)) {
          if ((r = a) && "UTC" === u) {
            var b = 6E4 * r.getTimezoneOffset();r = new Date(r.getTime() + b);
          }return m("date")(a, d, u);
        }r = null;return "";
      });if (y(g.min) || g.ngMin) {
        var s;h.$validators.min = function (a) {
          return !n(a) || B(s) || c(a) >= s;
        };g.$observe("min", function (a) {
          s = q(a);h.$validate();
        });
      }if (y(g.max) || g.ngMax) {
        var p;h.$validators.max = function (a) {
          return !n(a) || B(p) || c(a) <= p;
        };g.$observe("max", function (a) {
          p = q(a);h.$validate();
        });
      }
    };
  }function td(b, a, c, d) {
    (d.$$hasNativeValidators = I(a[0].validity)) && d.$parsers.push(function (b) {
      var c = a.prop("validity") || {};
      return c.badInput && !c.typeMismatch ? t : b;
    });
  }function ud(b, a, c, d, e) {
    if (y(d)) {
      b = b(d);if (!b.constant) throw S("ngModel")("constexpr", c, d);return b(a);
    }return e;
  }function jc(b, a) {
    b = "ngClass" + b;return ["$animate", function (c) {
      function d(a, b) {
        var c = [],
            d = 0;a: for (; d < a.length; d++) {
          for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;c.push(e);
        }return c;
      }function e(a) {
        if (!H(a)) {
          if (F(a)) return a.split(" ");if (I(a)) {
            var b = [];s(a, function (a, c) {
              a && (b = b.concat(c.split(" ")));
            });return b;
          }
        }return a;
      }return { restrict: "AC", link: function link(f, g, h) {
          function l(a, b) {
            var c = g.data("$classCounts") || {},
                d = [];s(a, function (a) {
              if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
            });g.data("$classCounts", c);return d.join(" ");
          }function k(b) {
            if (!0 === a || f.$index % 2 === a) {
              var k = e(b || []);if (!m) {
                var u = l(k, 1);h.$addClass(u);
              } else if (!ga(b, m)) {
                var r = e(m),
                    u = d(k, r),
                    k = d(r, k),
                    u = l(u, 1),
                    k = l(k, -1);u && u.length && c.addClass(g, u);k && k.length && c.removeClass(g, k);
              }
            }m = ra(b);
          }var m;f.$watch(h[b], k, !0);h.$observe("class", function (a) {
            k(f.$eval(h[b]));
          });"ngClass" !== b && f.$watch("$index", function (c, d) {
            var g = c & 1;if (g !== (d & 1)) {
              var k = e(f.$eval(h[b]));g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g));
            }
          });
        } };
    }];
  }function sd(b) {
    function a(a, b) {
      b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1);
    }function c(b, c) {
      b = b ? "-" + uc(b, "-") : "";a(lb + b, !0 === c);a(vd + b, !1 === c);
    }var d = b.ctrl,
        e = b.$element,
        f = {},
        g = b.set,
        h = b.unset,
        l = b.parentForm,
        k = b.$animate;f[vd] = !(f[lb] = e.hasClass(lb));d.$setValidity = function (b, e, f) {
      e === t ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending && h(d.$pending, b, f), wd(d.$pending) && (d.$pending = t));Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));d.$pending ? (a(xd, !0), d.$valid = d.$invalid = t, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));e = d.$pending && d.$pending[b] ? t : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;c(b, e);l.$setValidity(b, e, d);
    };
  }function wd(b) {
    if (b) for (var a in b) return !1;return !0;
  }var Nf = /^\/(.+)\/([a-z]*)$/,
      Q = function Q(b) {
    return F(b) ? b.toLowerCase() : b;
  },
      sc = Object.prototype.hasOwnProperty,
      vb = function vb(b) {
    return F(b) ? b.toUpperCase() : b;
  },
      Ra,
      D,
      sa,
      Za = [].slice,
      pf = [].splice,
      Of = [].push,
      Da = Object.prototype.toString,
      Ka = S("ng"),
      ca = M.angular || (M.angular = {}),
      cb,
      ob = 0;Ra = Y.documentMode;z.$inject = [];pa.$inject = [];var H = Array.isArray,
      U = function U(b) {
    return F(b) ? b.trim() : b;
  },
      gd = function gd(b) {
    return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
  },
      bb = function bb() {
    if (y(bb.isActive_)) return bb.isActive_;var b = !(!Y.querySelector("[ng-csp]") && !Y.querySelector("[data-ng-csp]"));
    if (!b) try {
      new Function("");
    } catch (a) {
      b = !0;
    }return bb.isActive_ = b;
  },
      sb = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Md = /[A-Z]/g,
      vc = !1,
      Rb,
      oa = 1,
      qb = 3,
      Qd = { full: "1.3.13", major: 1, minor: 3, dot: 13, codeName: "meticulous-riffleshuffle" };R.expando = "ng339";var Ab = R.cache = {},
      hf = 1;R._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };var cf = /([\:\-\_]+(.))/g,
      df = /^moz([A-Z])/,
      Pf = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Ub = S("jqLite"),
      gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Tb = /<|&#?\w+;/,
      ef = /<([\w:]+)/,
      ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ia = { option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option;ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;ia.th = ia.td;var La = R.prototype = { ready: function ready(b) {
      function a() {
        c || (c = !0, b());
      }var c = !1;"complete" === Y.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(M).on("load", a));
    },
    toString: function toString() {
      var b = [];s(this, function (a) {
        b.push("" + a);
      });return "[" + b.join(", ") + "]";
    }, eq: function eq(b) {
      return 0 <= b ? D(this[b]) : D(this[this.length + b]);
    }, length: 0, push: Of, sort: [].sort, splice: [].splice },
      Fb = {};s("multiple selected checked disabled readOnly required open".split(" "), function (b) {
    Fb[Q(b)] = b;
  });var Nc = {};s("input select option textarea button form details".split(" "), function (b) {
    Nc[b] = !0;
  });var Oc = { ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern" };
  s({ data: Wb, removeData: yb }, function (b, a) {
    R[a] = b;
  });s({ data: Wb, inheritedData: Eb, scope: function scope(b) {
      return D.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"]);
    }, isolateScope: function isolateScope(b) {
      return D.data(b, "$isolateScope") || D.data(b, "$isolateScopeNoTemplate");
    }, controller: Jc, injector: function injector(b) {
      return Eb(b, "$injector");
    }, removeAttr: function removeAttr(b, a) {
      b.removeAttribute(a);
    }, hasClass: Bb, css: function css(b, a, c) {
      a = db(a);if (y(c)) b.style[a] = c;else return b.style[a];
    }, attr: function attr(b, a, c) {
      var d = Q(a);if (Fb[d]) if (y(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));else return b[a] || (b.attributes.getNamedItem(a) || z).specified ? d : t;else if (y(c)) b.setAttribute(a, c);else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? t : b;
    }, prop: function prop(b, a, c) {
      if (y(c)) b[a] = c;else return b[a];
    }, text: (function () {
      function b(a, b) {
        if (B(b)) {
          var d = a.nodeType;return d === oa || d === qb ? a.textContent : "";
        }a.textContent = b;
      }b.$dv = "";return b;
    })(), val: function val(b, a) {
      if (B(a)) {
        if (b.multiple && "select" === ua(b)) {
          var c = [];s(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });return 0 === c.length ? null : c;
        }return b.value;
      }b.value = a;
    }, html: function html(b, a) {
      if (B(a)) return b.innerHTML;xb(b, !0);b.innerHTML = a;
    }, empty: Kc }, function (b, a) {
    R.prototype[a] = function (a, d) {
      var e,
          f,
          g = this.length;if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === t) {
        if (I(a)) {
          for (e = 0; e < g; e++) if (b === Wb) b(this[e], a);else for (f in a) b(this[e], f, a[f]);return this;
        }e = b.$dv;g = e === t ? Math.min(g, 1) : g;for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);e = e ? e + h : h;
        }return e;
      }for (e = 0; e < g; e++) b(this[e], a, d);return this;
    };
  });
  s({ removeData: yb, on: function a(c, d, e, f) {
      if (y(f)) throw Ub("onargs");if (Fc(c)) {
        var g = zb(c, !0);f = g.events;var h = g.handle;h || (h = g.handle = lf(c, f));for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
          d = g[l];var k = f[d];k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Pf[d], function (a) {
            var c = a.relatedTarget;c && (c === this || this.contains(c)) || h(a, d);
          }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);k.push(e);
        }
      }
    }, off: Ic, one: function one(a, c, d) {
      a = D(a);a.on(c, function f() {
        a.off(c, d);a.off(c, f);
      });a.on(c, d);
    }, replaceWith: function replaceWith(a, c) {
      var d,
          e = a.parentNode;xb(a);s(new R(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);d = c;
      });
    }, children: function children(a) {
      var c = [];s(a.childNodes, function (a) {
        a.nodeType === oa && c.push(a);
      });return c;
    }, contents: function contents(a) {
      return a.contentDocument || a.childNodes || [];
    }, append: function append(a, c) {
      var d = a.nodeType;if (d === oa || 11 === d) {
        c = new R(c);for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d]);
      }
    }, prepend: function prepend(a, c) {
      if (a.nodeType === oa) {
        var d = a.firstChild;s(new R(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    }, wrap: function wrap(a, c) {
      c = D(c).eq(0).clone()[0];var d = a.parentNode;d && d.replaceChild(c, a);c.appendChild(a);
    }, remove: Lc, detach: function detach(a) {
      Lc(a, !0);
    }, after: function after(a, c) {
      var d = a,
          e = a.parentNode;c = new R(c);for (var f = 0, g = c.length; f < g; f++) {
        var h = c[f];e.insertBefore(h, d.nextSibling);d = h;
      }
    }, addClass: Db, removeClass: Cb, toggleClass: function toggleClass(a, c, d) {
      c && s(c.split(" "), function (c) {
        var f = d;B(f) && (f = !Bb(a, c));(f ? Db : Cb)(a, c);
      });
    }, parent: function parent(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, next: function next(a) {
      return a.nextElementSibling;
    },
    find: function find(a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    }, clone: Vb, triggerHandler: function triggerHandler(a, c, d) {
      var e,
          f,
          g = c.type || c,
          h = zb(a);if (h = (h = h && h.events) && h[g]) e = { preventDefault: function preventDefault() {
          this.defaultPrevented = !0;
        }, isDefaultPrevented: function isDefaultPrevented() {
          return !0 === this.defaultPrevented;
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          this.immediatePropagationStopped = !0;
        }, isImmediatePropagationStopped: function isImmediatePropagationStopped() {
          return !0 === this.immediatePropagationStopped;
        }, stopPropagation: z, type: g, target: a }, c.type && (e = x(e, c)), c = ra(h), f = d ? [e].concat(d) : [e], s(c, function (c) {
        e.isImmediatePropagationStopped() || c.apply(a, f);
      });
    } }, function (a, c) {
    R.prototype[c] = function (c, e, f) {
      for (var g, h = 0, l = this.length; h < l; h++) B(g) ? (g = a(this[h], c, e, f), y(g) && (g = D(g))) : Hc(g, a(this[h], c, e, f));return y(g) ? g : this;
    };R.prototype.bind = R.prototype.on;R.prototype.unbind = R.prototype.off;
  });eb.prototype = { put: function put(a, c) {
      this[Na(a, this.nextUid)] = c;
    }, get: function get(a) {
      return this[Na(a, this.nextUid)];
    }, remove: function remove(a) {
      var c = this[a = Na(a, this.nextUid)];delete this[a];
      return c;
    } };var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
      Qf = /,/,
      Rf = /^\s*(_?)(\S+?)\1\s*$/,
      Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
      Ga = S("$injector");ab.$$annotate = function (a, c, d) {
    var e;if ("function" === typeof a) {
      if (!(e = a.$inject)) {
        e = [];if (a.length) {
          if (c) throw (F(d) && d || (d = a.name || mf(a)), Ga("strictdi", d));c = a.toString().replace(Pc, "");c = c.match(Qc);s(c[1].split(Qf), function (a) {
            a.replace(Rf, function (a, c, d) {
              e.push(d);
            });
          });
        }a.$inject = e;
      }
    } else H(a) ? (c = a.length - 1, tb(a[c], "fn"), e = a.slice(0, c)) : tb(a, "fn", !0);return e;
  };
  var Sf = S("$animate"),
      Ce = ["$provide", function (a) {
    this.$$selectors = {};this.register = function (c, d) {
      var e = c + "-animation";if (c && "." != c.charAt(0)) throw Sf("notcsel", c);this.$$selectors[c.substr(1)] = e;a.factory(e, d);
    };this.classNameFilter = function (a) {
      1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);return this.$$classNameFilter;
    };this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
      function f(d) {
        var f,
            g = a.defer();g.promise.$$cancelFn = function () {
          f && f();
        };e.$$postDigest(function () {
          f = d(function () {
            g.resolve();
          });
        });return g.promise;
      }function g(a, c) {
        var d = [],
            e = [],
            f = ha();s((a.attr("class") || "").split(/\s+/), function (a) {
          f[a] = !0;
        });s(c, function (a, c) {
          var g = f[c];!1 === a && g ? e.push(c) : !0 !== a || g || d.push(c);
        });return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null];
      }function h(a, c, d) {
        for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d;
      }function l() {
        m || (m = a.defer(), d(function () {
          m.resolve();m = null;
        }));return m.promise;
      }function k(a, c) {
        if (ca.isObject(c)) {
          var d = x(c.from || {}, c.to || {});a.css(d);
        }
      }var m;return { animate: function animate(a, c, d) {
          k(a, { from: c, to: d });return l();
        }, enter: function enter(a, c, d, e) {
          k(a, e);d ? d.after(a) : c.prepend(a);return l();
        }, leave: function leave(a, c) {
          a.remove();return l();
        }, move: function move(a, c, d, e) {
          return this.enter(a, c, d, e);
        }, addClass: function addClass(a, c, d) {
          return this.setClass(a, c, [], d);
        }, $$addClassImmediately: function $$addClassImmediately(a, c, d) {
          a = D(a);c = F(c) ? c : H(c) ? c.join(" ") : "";s(a, function (a) {
            Db(a, c);
          });k(a, d);return l();
        }, removeClass: function removeClass(a, c, d) {
          return this.setClass(a, [], c, d);
        }, $$removeClassImmediately: function $$removeClassImmediately(a, c, d) {
          a = D(a);c = F(c) ? c : H(c) ? c.join(" ") : "";s(a, function (a) {
            Cb(a, c);
          });k(a, d);return l();
        }, setClass: function setClass(a, c, d, e) {
          var k = this,
              l = !1;a = D(a);var m = a.data("$$animateClasses");m ? e && m.options && (m.options = ca.extend(m.options || {}, e)) : (m = { classes: {}, options: e }, l = !0);e = m.classes;c = H(c) ? c : c.split(" ");d = H(d) ? d : d.split(" ");h(e, c, !0);h(e, d, !1);l && (m.promise = f(function (c) {
            var d = a.data("$$animateClasses");a.removeData("$$animateClasses");if (d) {
              var e = g(a, d.classes);e && k.$$setClassImmediately(a, e[0], e[1], d.options);
            }c();
          }), a.data("$$animateClasses", m));
          return m.promise;
        }, $$setClassImmediately: function $$setClassImmediately(a, c, d, e) {
          c && this.$$addClassImmediately(a, c);d && this.$$removeClassImmediately(a, d);k(a, e);return l();
        }, enabled: z, cancel: z };
    }];
  }],
      ja = S("$compile");xc.$inject = ["$provide", "$$sanitizeUriProvider"];var Sc = /^((?:x|data)[\:\-_])/i,
      qf = S("$controller"),
      Wc = "application/json",
      $b = { "Content-Type": Wc + ";charset=utf-8" },
      sf = /^\[|^\{(?!\{)/,
      tf = { "[": /]$/, "{": /}$/ },
      rf = /^\)\]\}',?\n/,
      ac = S("$interpolate"),
      Tf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      wf = { http: 80, https: 443, ftp: 21 },
      Hb = S("$location"),
      Uf = { $$html5: !1, $$replace: !1, absUrl: Ib("$$absUrl"), url: function url(a) {
      if (B(a)) return this.$$url;var c = Tf.exec(a);(c[1] || "" === a) && this.path(decodeURIComponent(c[1]));(c[2] || c[1] || "" === a) && this.search(c[3] || "");this.hash(c[5] || "");return this;
    }, protocol: Ib("$$protocol"), host: Ib("$$host"), port: Ib("$$port"), path: dd("$$path", function (a) {
      a = null !== a ? a.toString() : "";return "/" == a.charAt(0) ? a : "/" + a;
    }), search: function search(a, c) {
      switch (arguments.length) {case 0:
          return this.$$search;case 1:
          if (F(a) || V(a)) a = a.toString(), this.$$search = rc(a);else if (I(a)) a = Ea(a, {}), s(a, function (c, e) {
            null == c && delete a[e];
          }), this.$$search = a;else throw Hb("isrcharg");break;default:
          B(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;}this.$$compose();return this;
    }, hash: dd("$$hash", function (a) {
      return null !== a ? a.toString() : "";
    }), replace: function replace() {
      this.$$replace = !0;return this;
    } };s([cd, ec, dc], function (a) {
    a.prototype = Object.create(Uf);a.prototype.state = function (c) {
      if (!arguments.length) return this.$$state;if (a !== dc || !this.$$html5) throw Hb("nostate");
      this.$$state = B(c) ? null : c;return this;
    };
  });var la = S("$parse"),
      Vf = Function.prototype.call,
      Wf = Function.prototype.apply,
      Xf = Function.prototype.bind,
      mb = ha();s({ "null": function _null() {
      return null;
    }, "true": function _true() {
      return !0;
    }, "false": function _false() {
      return !1;
    }, undefined: function undefined() {} }, function (a, c) {
    a.constant = a.literal = a.sharedGetter = !0;mb[c] = a;
  });mb["this"] = function (a) {
    return a;
  };mb["this"].sharedGetter = !0;var nb = x(ha(), { "+": function _(a, c, d, e) {
      d = d(a, c);e = e(a, c);return y(d) ? y(e) ? d + e : d : y(e) ? e : t;
    }, "-": function _(a, c, d, e) {
      d = d(a, c);e = e(a, c);return (y(d) ? d : 0) - (y(e) ? e : 0);
    }, "*": function _(a, c, d, e) {
      return d(a, c) * e(a, c);
    }, "/": function _(a, c, d, e) {
      return d(a, c) / e(a, c);
    }, "%": function _(a, c, d, e) {
      return d(a, c) % e(a, c);
    }, "===": function _(a, c, d, e) {
      return d(a, c) === e(a, c);
    }, "!==": function _(a, c, d, e) {
      return d(a, c) !== e(a, c);
    }, "==": function _(a, c, d, e) {
      return d(a, c) == e(a, c);
    }, "!=": function _(a, c, d, e) {
      return d(a, c) != e(a, c);
    }, "<": function _(a, c, d, e) {
      return d(a, c) < e(a, c);
    }, ">": function _(a, c, d, e) {
      return d(a, c) > e(a, c);
    }, "<=": function _(a, c, d, e) {
      return d(a, c) <= e(a, c);
    }, ">=": function _(a, c, d, e) {
      return d(a, c) >= e(a, c);
    }, "&&": function _(a, c, d, e) {
      return d(a, c) && e(a, c);
    }, "||": function _(a, c, d, e) {
      return d(a, c) || e(a, c);
    }, "!": function _(a, c, d) {
      return !d(a, c);
    }, "=": !0, "|": !0 }),
      Yf = { n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"' },
      hc = function hc(a) {
    this.options = a;
  };hc.prototype = { constructor: hc, lex: function lex(a) {
      this.text = a;this.index = 0;for (this.tokens = []; this.index < this.text.length;) if ((a = this.text.charAt(this.index), '"' === a || "'" === a)) this.readString(a);else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();else if (this.isIdent(a)) this.readIdent();else if (this.is(a, "(){}[].,;:?")) this.tokens.push({ index: this.index, text: a }), this.index++;else if (this.isWhitespace(a)) this.index++;else {
        var c = a + this.peek(),
            d = c + this.peek(2),
            e = nb[c],
            f = nb[d];nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({ index: this.index, text: a, operator: !0 }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1);
      }return this.tokens;
    }, is: function is(a, c) {
      return -1 !== c.indexOf(a);
    }, peek: function peek(a) {
      a = a || 1;return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    }, isNumber: function isNumber(a) {
      return "0" <= a && "9" >= a && "string" === typeof a;
    }, isWhitespace: function isWhitespace(a) {
      return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || " " === a;
    }, isIdent: function isIdent(a) {
      return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
    }, isExpOperator: function isExpOperator(a) {
      return "-" === a || "+" === a || this.isNumber(a);
    }, throwError: function throwError(a, c, d) {
      d = d || this.index;c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;throw la("lexerr", a, c, this.text);
    }, readNumber: function readNumber() {
      for (var a = "", c = this.index; this.index < this.text.length;) {
        var d = Q(this.text.charAt(this.index));if ("." == d || this.isNumber(d)) a += d;else {
          var e = this.peek();if ("e" == d && this.isExpOperator(e)) a += d;else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break;else this.throwError("Invalid exponent");
        }this.index++;
      }this.tokens.push({ index: c, text: a, constant: !0, value: Number(a) });
    }, readIdent: function readIdent() {
      for (var a = this.index; this.index < this.text.length;) {
        var c = this.text.charAt(this.index);if (!this.isIdent(c) && !this.isNumber(c)) break;this.index++;
      }this.tokens.push({ index: a, text: this.text.slice(a, this.index), identifier: !0 });
    }, readString: function readString(a) {
      var c = this.index;this.index++;for (var d = "", e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index),
            e = e + g;if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Yf[g] || g, f = !1;else if ("\\" === g) f = !0;else {
          if (g === a) {
            this.index++;this.tokens.push({ index: c, text: e, constant: !0, value: d });return;
          }d += g;
        }this.index++;
      }this.throwError("Unterminated quote", c);
    } };var ib = function ib(a, c, d) {
    this.lexer = a;this.$filter = c;this.options = d;
  };ib.ZERO = x(function () {
    return 0;
  }, { sharedGetter: !0, constant: !0 });ib.prototype = { constructor: ib, parse: function parse(a) {
      this.text = a;this.tokens = this.lexer.lex(a);a = this.statements();0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);a.literal = !!a.literal;a.constant = !!a.constant;return a;
    }, primary: function primary() {
      var a;this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");return a;
    }, throwError: function throwError(a, c) {
      throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function peekToken() {
      if (0 === this.tokens.length) throw la("ueoe", this.text);return this.tokens[0];
    }, peek: function peek(a, c, d, e) {
      return this.peekAhead(0, a, c, d, e);
    }, peekAhead: function peekAhead(a, c, d, e, f) {
      if (this.tokens.length > a) {
        a = this.tokens[a];var g = a.text;if (g === c || g === d || g === e || g === f || !(c || d || e || f)) return a;
      }return !1;
    }, expect: function expect(a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    }, consume: function consume(a) {
      if (0 === this.tokens.length) throw la("ueoe", this.text);var c = this.expect(a);c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());return c;
    }, unaryFn: function unaryFn(a, c) {
      var d = nb[a];return x(function (a, f) {
        return d(a, f, c);
      }, { constant: c.constant, inputs: [c] });
    }, binaryFn: function binaryFn(a, c, d, e) {
      var f = nb[c];return x(function (c, e) {
        return f(c, e, a, d);
      }, { constant: a.constant && d.constant, inputs: !e && [a, d] });
    }, identifier: function identifier() {
      for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;return yf(a, this.options, this.text);
    }, constant: function constant() {
      var a = this.consume().value;return x(function () {
        return a;
      }, { constant: !0, literal: !0 });
    }, statements: function statements() {
      for (var a = [];;) if ((0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))) return 1 === a.length ? a[0] : function (c, d) {
        for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);return e;
      };
    }, filterChain: function filterChain() {
      for (var a = this.expression(); this.expect("|");) a = this.filter(a);return a;
    }, filter: function filter(a) {
      var c = this.$filter(this.consume().text),
          d,
          e;if (this.peek(":")) for (d = [], e = []; this.expect(":");) d.push(this.expression());var f = [a].concat(d || []);return x(function (f, h) {
        var l = a(f, h);if (e) {
          e[0] = l;for (l = d.length; l--;) e[l + 1] = d[l](f, h);return c.apply(t, e);
        }return c(l);
      }, { constant: !c.$stateful && f.every(fc), inputs: !c.$stateful && f });
    }, expression: function expression() {
      return this.assignment();
    },
    assignment: function assignment() {
      var a = this.ternary(),
          c,
          d;return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), x(function (d, f) {
        return a.assign(d, c(d, f), f);
      }, { inputs: [a, c] })) : a;
    }, ternary: function ternary() {
      var a = this.logicalOR(),
          c;if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
        var d = this.assignment();return x(function (e, f) {
          return a(e, f) ? c(e, f) : d(e, f);
        }, { constant: a.constant && c.constant && d.constant });
      }return a;
    },
    logicalOR: function logicalOR() {
      for (var a = this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);return a;
    }, logicalAND: function logicalAND() {
      for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);return a;
    }, equality: function equality() {
      for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());return a;
    }, relational: function relational() {
      for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text, this.additive());return a;
    }, additive: function additive() {
      for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());return a;
    }, multiplicative: function multiplicative() {
      for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());return a;
    }, unary: function unary() {
      var a;return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary();
    }, fieldAccess: function fieldAccess(a) {
      var c = this.identifier();return x(function (d, e, f) {
        d = f || a(d, e);return null == d ? t : c(d);
      }, { assign: function assign(d, e, f) {
          var g = a(d, f);g || a.assign(d, g = {}, f);return c.assign(g, e);
        } });
    }, objectIndex: function objectIndex(a) {
      var c = this.text,
          d = this.expression();this.consume("]");return x(function (e, f) {
        var g = a(e, f),
            h = d(e, f);ta(h, c);return g ? ma(g[h], c) : t;
      }, { assign: function assign(e, f, g) {
          var h = ta(d(e, g), c),
              l = ma(a(e, g), c);l || a.assign(e, l = {}, g);return l[h] = f;
        } });
    }, functionCall: function functionCall(a, c) {
      var d = [];if (")" !== this.peekToken().text) {
        do d.push(this.expression()); while (this.expect(","));
      }this.consume(")");var e = this.text,
          f = d.length ? [] : null;return function (g, h) {
        var l = c ? c(g, h) : y(c) ? t : g,
            k = a(g, h, l) || z;if (f) for (var m = d.length; m--;) f[m] = ma(d[m](g, h), e);ma(l, e);if (k) {
          if (k.constructor === k) throw la("isecfn", e);if (k === Vf || k === Wf || k === Xf) throw la("isecff", e);
        }l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);f && (f.length = 0);return ma(l, e);
      };
    }, arrayDeclaration: function arrayDeclaration() {
      var a = [];if ("]" !== this.peekToken().text) {
        do {
          if (this.peek("]")) break;a.push(this.expression());
        } while (this.expect(","));
      }this.consume("]");return x(function (c, d) {
        for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));return e;
      }, { literal: !0, constant: a.every(fc), inputs: a });
    }, object: function object() {
      var a = [],
          c = [];if ("}" !== this.peekToken().text) {
        do {
          if (this.peek("}")) break;var d = this.consume();d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);this.consume(":");c.push(this.expression());
        } while (this.expect(","));
      }this.consume("}");return x(function (d, f) {
        for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] = c[h](d, f);return g;
      }, { literal: !0, constant: c.every(fc), inputs: c });
    } };var Af = ha(),
      zf = ha(),
      Bf = Object.prototype.valueOf,
      Ca = S("$sce"),
      na = { HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js" },
      ja = S("$compile"),
      Z = Y.createElement("a"),
      id = Ba(M.location.href);Ec.$inject = ["$provide"];jd.$inject = ["$locale"];ld.$inject = ["$locale"];var od = ".",
      Lf = { yyyy: $("FullYear", 4), yy: $("FullYear", 2, 0, !0), y: $("FullYear", 1), MMMM: Kb("Month"), MMM: Kb("Month", !0), MM: $("Month", 2, 1), M: $("Month", 1, 1), dd: $("Date", 2), d: $("Date", 1), HH: $("Hours", 2), H: $("Hours", 1), hh: $("Hours", 2, -12), h: $("Hours", 1, -12), mm: $("Minutes", 2), m: $("Minutes", 1), ss: $("Seconds", 2), s: $("Seconds", 1), sss: $("Milliseconds", 3), EEEE: Kb("Day"), EEE: Kb("Day", !0), a: function a(_a, c) {
      return 12 > _a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
    }, Z: function Z(a) {
      a = -1 * a.getTimezoneOffset();return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2));
    }, ww: qd(2), w: qd(1) },
      Kf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
      Jf = /^\-?\d+$/;
  kd.$inject = ["$locale"];var Gf = ea(Q),
      Hf = ea(vb);md.$inject = ["$parse"];var Td = ea({ restrict: "E", compile: function compile(a, c) {
      if (!c.href && !c.xlinkHref && !c.name) return function (a, c) {
        if ("a" === c[0].nodeName.toLowerCase()) {
          var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";c.on("click", function (a) {
            c.attr(f) || a.preventDefault();
          });
        }
      };
    } }),
      wb = {};s(Fb, function (a, c) {
    if ("multiple" != a) {
      var d = ya("ng-" + c);wb[d] = function () {
        return { restrict: "A", priority: 100, link: function link(a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a);
            });
          } };
      };
    }
  });s(Oc, function (a, c) {
    wb[c] = function () {
      return { priority: 100, link: function link(a, e, f) {
          if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Nf))) {
            f.$set("ngPattern", new RegExp(e[1], e[2]));return;
          }a.$watch(f[c], function (a) {
            f.$set(c, a);
          });
        } };
    };
  });s(["src", "srcset", "href"], function (a) {
    var c = ya("ng-" + a);wb[c] = function () {
      return { priority: 99, link: function link(d, e, f) {
          var g = a,
              h = a;"href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);f.$observe(c, function (c) {
            c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null);
          });
        } };
    };
  });var Lb = { $addControl: z, $$renameControl: function $$renameControl(a, c) {
      a.$name = c;
    }, $removeControl: z, $setValidity: z, $setDirty: z, $setPristine: z, $setSubmitted: z };rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];var yd = function yd(a) {
    return ["$timeout", function (c) {
      return { name: "form", restrict: a ? "EAC" : "E", controller: rd, compile: function compile(a) {
          a.addClass(Sa).addClass(lb);return { pre: function pre(a, d, g, h) {
              if (!("action" in g)) {
                var l = function l(c) {
                  a.$apply(function () {
                    h.$commitViewValue();
                    h.$setSubmitted();
                  });c.preventDefault();
                };d[0].addEventListener("submit", l, !1);d.on("$destroy", function () {
                  c(function () {
                    d[0].removeEventListener("submit", l, !1);
                  }, 0, !1);
                });
              }var k = h.$$parentForm,
                  m = h.$name;m && (hb(a, null, m, h, m), g.$observe(g.name ? "name" : "ngForm", function (c) {
                m !== c && (hb(a, null, m, t, m), m = c, hb(a, null, m, h, m), k.$$renameControl(h, m));
              }));d.on("$destroy", function () {
                k.$removeControl(h);m && hb(a, null, m, t, m);x(h, Lb);
              });
            } };
        } };
    }];
  },
      Ud = yd(),
      ge = yd(!0),
      Mf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
      Zf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
      $f = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
      ag = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
      zd = /^(\d{4})-(\d{2})-(\d{2})$/,
      Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      kc = /^(\d{4})-W(\d\d)$/,
      Bd = /^(\d{4})-(\d\d)$/,
      Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Dd = { text: function text(a, c, d, e, f, g) {
      jb(a, c, d, e, f, g);ic(e);
    }, date: kb("date", zd, Nb(zd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"), "datetime-local": kb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"), time: kb("time", Cd, Nb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"), week: kb("week", kc, function (a, c) {
      if (qa(a)) return a;if (F(a)) {
        kc.lastIndex = 0;var d = kc.exec(a);if (d) {
          var e = +d[1],
              f = +d[2],
              g = d = 0,
              h = 0,
              l = 0,
              k = pd(e),
              f = 7 * (f - 1);c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());return new Date(e, 0, k.getDate() + f, d, g, h, l);
        }
      }return NaN;
    }, "yyyy-Www"), month: kb("month", Bd, Nb(Bd, ["yyyy", "MM"]), "yyyy-MM"), number: function number(a, c, d, e, f, g) {
      td(a, c, d, e);jb(a, c, d, e, f, g);e.$$parserName = "number";e.$parsers.push(function (a) {
        return e.$isEmpty(a) ? null : ag.test(a) ? parseFloat(a) : t;
      });e.$formatters.push(function (a) {
        if (!e.$isEmpty(a)) {
          if (!V(a)) throw Ob("numfmt", a);a = a.toString();
        }return a;
      });if (d.min || d.ngMin) {
        var h;e.$validators.min = function (a) {
          return e.$isEmpty(a) || B(h) || a >= h;
        };d.$observe("min", function (a) {
          y(a) && !V(a) && (a = parseFloat(a, 10));h = V(a) && !isNaN(a) ? a : t;e.$validate();
        });
      }if (d.max || d.ngMax) {
        var l;e.$validators.max = function (a) {
          return e.$isEmpty(a) || B(l) || a <= l;
        };d.$observe("max", function (a) {
          y(a) && !V(a) && (a = parseFloat(a, 10));l = V(a) && !isNaN(a) ? a : t;e.$validate();
        });
      }
    }, url: function url(a, c, d, e, f, g) {
      jb(a, c, d, e, f, g);ic(e);e.$$parserName = "url";e.$validators.url = function (a, c) {
        var d = a || c;return e.$isEmpty(d) || Zf.test(d);
      };
    }, email: function email(a, c, d, e, f, g) {
      jb(a, c, d, e, f, g);ic(e);e.$$parserName = "email";e.$validators.email = function (a, c) {
        var d = a || c;return e.$isEmpty(d) || $f.test(d);
      };
    }, radio: function radio(a, c, d, e) {
      B(d.name) && c.attr("name", ++ob);c.on("click", function (a) {
        c[0].checked && e.$setViewValue(d.value, a && a.type);
      });e.$render = function () {
        c[0].checked = d.value == e.$viewValue;
      };d.$observe("value", e.$render);
    }, checkbox: function checkbox(a, c, d, e, f, g, h, l) {
      var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0),
          m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);c.on("click", function (a) {
        e.$setViewValue(c[0].checked, a && a.type);
      });e.$render = function () {
        c[0].checked = e.$viewValue;
      };e.$isEmpty = function (a) {
        return !1 === a;
      };e.$formatters.push(function (a) {
        return ga(a, k);
      });e.$parsers.push(function (a) {
        return a ? k : m;
      });
    }, hidden: z, button: z, submit: z, reset: z, file: z },
      yc = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
    return { restrict: "E", require: ["?ngModel"], link: { pre: function pre(f, g, h, l) {
          l[0] && (Dd[Q(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e);
        } } };
  }],
      bg = /^(true|false|\d+)$/,
      ye = function ye() {
    return { restrict: "A", priority: 100, compile: function compile(a, c) {
        return bg.test(c.ngValue) ? function (a, c, f) {
          f.$set("value", a.$eval(f.ngValue));
        } : function (a, c, f) {
          a.$watch(f.ngValue, function (a) {
            f.$set("value", a);
          });
        };
      } };
  },
      Zd = ["$compile", function (a) {
    return { restrict: "AC", compile: function compile(c) {
        a.$$addBindingClass(c);return function (c, e, f) {
          a.$$addBindingInfo(e, f.ngBind);e = e[0];c.$watch(f.ngBind, function (a) {
            e.textContent = a === t ? "" : a;
          });
        };
      } };
  }],
      ae = ["$interpolate", "$compile", function (a, c) {
    return { compile: function compile(d) {
        c.$$addBindingClass(d);return function (d, f, g) {
          d = a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f, d.expressions);f = f[0];g.$observe("ngBindTemplate", function (a) {
            f.textContent = a === t ? "" : a;
          });
        };
      } };
  }],
      $d = ["$sce", "$parse", "$compile", function (a, c, d) {
    return { restrict: "A", compile: function compile(e, f) {
        var g = c(f.ngBindHtml),
            h = c(f.ngBindHtml, function (a) {
          return (a || "").toString();
        });d.$$addBindingClass(e);return function (c, e, f) {
          d.$$addBindingInfo(e, f.ngBindHtml);c.$watch(h, function () {
            e.html(a.getTrustedHtml(g(c)) || "");
          });
        };
      } };
  }],
      xe = ea({ restrict: "A", require: "ngModel", link: function link(a, c, d, e) {
      e.$viewChangeListeners.push(function () {
        a.$eval(d.ngChange);
      });
    } }),
      be = jc("", !0),
      de = jc("Odd", 0),
      ce = jc("Even", 1),
      ee = Ja({ compile: function compile(a, c) {
      c.$set("ngCloak", t);a.removeClass("ng-cloak");
    } }),
      fe = [function () {
    return { restrict: "A", scope: !0, controller: "@", priority: 500 };
  }],
      Dc = {},
      cg = { blur: !0, focus: !0 };s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
    var c = ya("ng-" + a);Dc[c] = ["$parse", "$rootScope", function (d, e) {
      return { restrict: "A", compile: function compile(f, g) {
          var h = d(g[c], null, !0);return function (c, d) {
            d.on(a, function (d) {
              var f = function f() {
                h(c, { $event: d });
              };
              cg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f);
            });
          };
        } };
    }];
  });var ie = ["$animate", function (a) {
    return { multiElement: !0, transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function link(c, d, e, f, g) {
        var h, l, k;c.$watch(e.ngIf, function (c) {
          c ? l || g(function (c, f) {
            l = f;c[c.length++] = Y.createComment(" end ngIf: " + e.ngIf + " ");h = { clone: c };a.enter(c, d.parent(), d);
          }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ub(h.clone), a.leave(k).then(function () {
            k = null;
          }), h = null));
        });
      } };
  }],
      je = ["$templateRequest", "$anchorScroll", "$animate", "$sce", function (a, c, d, e) {
    return { restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: ca.noop, compile: function compile(f, g) {
        var h = g.ngInclude || g.src,
            l = g.onload || "",
            k = g.autoscroll;return function (f, g, q, s, r) {
          var t = 0,
              p,
              v,
              w,
              L = function L() {
            v && (v.remove(), v = null);p && (p.$destroy(), p = null);w && (d.leave(w).then(function () {
              v = null;
            }), v = w, w = null);
          };f.$watch(e.parseAsResourceUrl(h), function (e) {
            var h = function h() {
              !y(k) || k && !f.$eval(k) || c();
            },
                q = ++t;e ? (a(e, !0).then(function (a) {
              if (q === t) {
                var c = f.$new();
                s.template = a;a = r(c, function (a) {
                  L();d.enter(a, null, g).then(h);
                });p = c;w = a;p.$emit("$includeContentLoaded", e);f.$eval(l);
              }
            }, function () {
              q === t && (L(), f.$emit("$includeContentError", e));
            }), f.$emit("$includeContentRequested", e)) : (L(), s.template = null);
          });
        };
      } };
  }],
      Ae = ["$compile", function (a) {
    return { restrict: "ECA", priority: -400, require: "ngInclude", link: function link(c, d, e, f) {
        /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, Y).childNodes)(c, function (a) {
          d.append(a);
        }, { futureParentElement: d })) : (d.html(f.template), a(d.contents())(c));
      } };
  }],
      ke = Ja({ priority: 450, compile: function compile() {
      return { pre: function pre(a, c, d) {
          a.$eval(d.ngInit);
        } };
    } }),
      we = function we() {
    return { restrict: "A", priority: 100, require: "ngModel", link: function link(a, c, d, e) {
        var f = c.attr(d.$attr.ngList) || ", ",
            g = "false" !== d.ngTrim,
            h = g ? U(f) : f;e.$parsers.push(function (a) {
          if (!B(a)) {
            var c = [];a && s(a.split(h), function (a) {
              a && c.push(g ? U(a) : a);
            });return c;
          }
        });e.$formatters.push(function (a) {
          return H(a) ? a.join(f) : t;
        });e.$isEmpty = function (a) {
          return !a || !a.length;
        };
      } };
  },
      lb = "ng-valid",
      vd = "ng-invalid",
      Sa = "ng-pristine",
      Mb = "ng-dirty",
      xd = "ng-pending",
      Ob = new S("ngModel"),
      dg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, m) {
    this.$modelValue = this.$viewValue = Number.NaN;this.$$rawModelValue = t;this.$validators = {};this.$asyncValidators = {};this.$parsers = [];this.$formatters = [];this.$viewChangeListeners = [];this.$untouched = !0;this.$touched = !1;this.$pristine = !0;this.$dirty = !1;this.$valid = !0;this.$invalid = !1;this.$error = {};this.$$success = {};this.$pending = t;this.$name = m(d.name || "", !1)(a);var n = f(d.ngModel),
        q = n.assign,
        u = n,
        r = q,
        P = null,
        p = this;this.$$setOptions = function (a) {
      if ((p.$options = a) && a.getterSetter) {
        var c = f(d.ngModel + "()"),
            g = f(d.ngModel + "($$$p)");u = function (a) {
          var d = n(a);G(d) && (d = c(a));return d;
        };r = function (a, c) {
          G(n(a)) ? g(a, { $$$p: p.$modelValue }) : q(a, p.$modelValue);
        };
      } else if (!n.assign) throw Ob("nonassign", d.ngModel, va(e));
    };this.$render = z;this.$isEmpty = function (a) {
      return B(a) || "" === a || null === a || a !== a;
    };var v = e.inheritedData("$formController") || Lb,
        w = 0;sd({ ctrl: this, $element: e, set: function set(a, c) {
        a[c] = !0;
      }, unset: function unset(a, c) {
        delete a[c];
      }, parentForm: v, $animate: g });this.$setPristine = function () {
      p.$dirty = !1;p.$pristine = !0;g.removeClass(e, Mb);g.addClass(e, Sa);
    };this.$setDirty = function () {
      p.$dirty = !0;p.$pristine = !1;g.removeClass(e, Sa);g.addClass(e, Mb);v.$setDirty();
    };this.$setUntouched = function () {
      p.$touched = !1;p.$untouched = !0;g.setClass(e, "ng-untouched", "ng-touched");
    };this.$setTouched = function () {
      p.$touched = !0;p.$untouched = !1;g.setClass(e, "ng-touched", "ng-untouched");
    };this.$rollbackViewValue = function () {
      h.cancel(P);p.$viewValue = p.$$lastCommittedViewValue;p.$render();
    };this.$validate = function () {
      if (!V(p.$modelValue) || !isNaN(p.$modelValue)) {
        var a = p.$$rawModelValue,
            c = p.$valid,
            d = p.$modelValue,
            e = p.$options && p.$options.allowInvalid;p.$$runValidators(p.$error[p.$$parserName || "parse"] ? !1 : t, a, p.$$lastCommittedViewValue, function (f) {
          e || c === f || (p.$modelValue = f ? a : t, p.$modelValue !== d && p.$$writeModelToScope());
        });
      }
    };this.$$runValidators = function (a, c, d, e) {
      function f() {
        var a = !0;s(p.$validators, function (e, f) {
          var g = e(c, d);a = a && g;h(f, g);
        });return a ? !0 : (s(p.$asyncValidators, function (a, c) {
          h(c, null);
        }), !1);
      }function g() {
        var a = [],
            e = !0;s(p.$asyncValidators, function (f, g) {
          var l = f(c, d);if (!l || !G(l.then)) throw Ob("$asyncValidators", l);h(g, t);a.push(l.then(function () {
            h(g, !0);
          }, function (a) {
            e = !1;h(g, !1);
          }));
        });a.length ? k.all(a).then(function () {
          l(e);
        }, z) : l(!0);
      }function h(a, c) {
        m === w && p.$setValidity(a, c);
      }function l(a) {
        m === w && e(a);
      }w++;var m = w;(function (a) {
        var c = p.$$parserName || "parse";if (a === t) h(c, null);else if ((h(c, a), !a)) return s(p.$validators, function (a, c) {
          h(c, null);
        }), s(p.$asyncValidators, function (a, c) {
          h(c, null);
        }), !1;return !0;
      })(a) ? f() ? g() : l(!1) : l(!1);
    };this.$commitViewValue = function () {
      var a = p.$viewValue;h.cancel(P);if (p.$$lastCommittedViewValue !== a || "" === a && p.$$hasNativeValidators) p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate();
    };this.$$parseAndValidate = function () {
      var c = p.$$lastCommittedViewValue,
          d = B(c) ? t : !0;if (d) for (var e = 0; e < p.$parsers.length; e++) if ((c = p.$parsers[e](c), B(c))) {
        d = !1;break;
      }V(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = u(a));var f = p.$modelValue,
          g = p.$options && p.$options.allowInvalid;p.$$rawModelValue = c;g && (p.$modelValue = c, p.$modelValue !== f && p.$$writeModelToScope());p.$$runValidators(d, c, p.$$lastCommittedViewValue, function (a) {
        g || (p.$modelValue = a ? c : t, p.$modelValue !== f && p.$$writeModelToScope());
      });
    };this.$$writeModelToScope = function () {
      r(a, p.$modelValue);s(p.$viewChangeListeners, function (a) {
        try {
          a();
        } catch (d) {
          c(d);
        }
      });
    };this.$setViewValue = function (a, c) {
      p.$viewValue = a;p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(c);
    };this.$$debounceViewValueCommit = function (c) {
      var d = 0,
          e = p.$options;e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));h.cancel(P);d ? P = h(function () {
        p.$commitViewValue();
      }, d) : l.$$phase ? p.$commitViewValue() : a.$apply(function () {
        p.$commitViewValue();
      });
    };a.$watch(function () {
      var c = u(a);if (c !== p.$modelValue) {
        p.$modelValue = p.$$rawModelValue = c;for (var d = p.$formatters, e = d.length, f = c; e--;) f = d[e](f);p.$viewValue !== f && (p.$viewValue = p.$$lastCommittedViewValue = f, p.$render(), p.$$runValidators(t, c, f, z));
      }return c;
    });
  }],
      ve = ["$rootScope", function (a) {
    return { restrict: "A", require: ["ngModel", "^?form", "^?ngModelOptions"], controller: dg, priority: 1, compile: function compile(c) {
        c.addClass(Sa).addClass("ng-untouched").addClass(lb);return { pre: function pre(a, c, f, g) {
            var h = g[0],
                l = g[1] || Lb;h.$$setOptions(g[2] && g[2].$options);l.$addControl(h);f.$observe("name", function (a) {
              h.$name !== a && l.$$renameControl(h, a);
            });a.$on("$destroy", function () {
              l.$removeControl(h);
            });
          }, post: function post(c, e, f, g) {
            var h = g[0];if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function (a) {
              h.$$debounceViewValueCommit(a && a.type);
            });e.on("blur", function (e) {
              h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched));
            });
          } };
      } };
  }],
      eg = /(\s+|^)default(\s+|$)/,
      ze = function ze() {
    return { restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
        var d = this;this.$options = a.$eval(c.ngModelOptions);this.$options.updateOn !== t ? (this.$options.updateOnDefault = !1, this.$options.updateOn = U(this.$options.updateOn.replace(eg, function () {
          d.$options.updateOnDefault = !0;return " ";
        }))) : this.$options.updateOnDefault = !0;
      }] };
  },
      le = Ja({ terminal: !0, priority: 1E3 }),
      me = ["$locale", "$interpolate", function (a, c) {
    var d = /{}/g,
        e = /^when(Minus)?(.+)$/;return { restrict: "EA", link: function link(f, g, h) {
        function l(a) {
          g.text(a || "");
        }var k = h.count,
            m = h.$attr.when && g.attr(h.$attr.when),
            n = h.offset || 0,
            q = f.$eval(m) || {},
            u = {},
            m = c.startSymbol(),
            r = c.endSymbol(),
            t = m + k + "-" + n + r,
            p = ca.noop,
            v;s(h, function (a, c) {
          var d = e.exec(c);d && (d = (d[1] ? "-" : "") + Q(d[2]), q[d] = g.attr(h.$attr[c]));
        });s(q, function (a, e) {
          u[e] = c(a.replace(d, t));
        });f.$watch(k, function (c) {
          c = parseFloat(c);var d = isNaN(c);d || c in q || (c = a.pluralCat(c - n));c === v || d && isNaN(v) || (p(), p = f.$watch(u[c], l), v = c);
        });
      } };
  }],
      ne = ["$parse", "$animate", function (a, c) {
    var d = S("ngRepeat"),
        e = function e(a, c, d, _e, k, m, n) {
      a[d] = _e;k && (a[k] = m);a.$index = c;a.$first = 0 === c;a.$last = c === n - 1;a.$middle = !(a.$first || a.$last);a.$odd = !(a.$even = 0 === (c & 1));
    };return { restrict: "A", multiElement: !0, transclude: "element",
      priority: 1E3, terminal: !0, $$tlb: !0, compile: function compile(f, g) {
        var h = g.ngRepeat,
            l = Y.createComment(" end ngRepeat: " + h + " "),
            k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if (!k) throw d("iexp", h);var m = k[1],
            n = k[2],
            q = k[3],
            u = k[4],
            k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if (!k) throw d("iidexp", m);var r = k[3] || k[1],
            y = k[2];if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);var p,
            v,
            w,
            B,
            z = { $id: Na };u ? p = a(u) : (w = function (a, c) {
          return Na(c);
        }, B = function (a) {
          return a;
        });return function (a, f, g, k, m) {
          p && (v = function (c, d, e) {
            y && (z[y] = c);z[r] = d;z.$index = e;return p(a, z);
          });var u = ha();a.$watchCollection(n, function (g) {
            var k,
                p,
                n = f[0],
                E,
                z = ha(),
                x,
                T,
                N,
                G,
                H,
                C,
                I;q && (a[q] = g);if (Ta(g)) H = g, p = v || w;else {
              p = v || B;H = [];for (I in g) g.hasOwnProperty(I) && "$" != I.charAt(0) && H.push(I);H.sort();
            }x = H.length;I = Array(x);for (k = 0; k < x; k++) if ((T = g === H ? k : H[k], N = g[T], G = p(T, N, k), u[G])) C = u[G], delete u[G], z[G] = C, I[k] = C;else {
              if (z[G]) throw (s(I, function (a) {
                a && a.scope && (u[a.id] = a);
              }), d("dupes", h, G, N));I[k] = { id: G, scope: t, clone: t };z[G] = !0;
            }for (E in u) {
              C = u[E];G = ub(C.clone);c.leave(G);if (G[0].parentNode) for (k = 0, p = G.length; k < p; k++) G[k].$$NG_REMOVED = !0;C.scope.$destroy();
            }for (k = 0; k < x; k++) if ((T = g === H ? k : H[k], N = g[T], C = I[k], C.scope)) {
              E = n;do E = E.nextSibling; while (E && E.$$NG_REMOVED);C.clone[0] != E && c.move(ub(C.clone), null, D(n));n = C.clone[C.clone.length - 1];e(C.scope, k, r, N, y, T, x);
            } else m(function (a, d) {
              C.scope = d;var f = l.cloneNode(!1);a[a.length++] = f;c.enter(a, null, D(n));n = f;C.clone = a;z[C.id] = C;e(C.scope, k, r, N, y, T, x);
            });u = z;
          });
        };
      } };
  }],
      oe = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
        c.$watch(e.ngShow, function (c) {
          a[c ? "removeClass" : "addClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      he = ["$animate", function (a) {
    return { restrict: "A", multiElement: !0, link: function link(c, d, e) {
        c.$watch(e.ngHide, function (c) {
          a[c ? "addClass" : "removeClass"](d, "ng-hide", { tempClasses: "ng-hide-animate" });
        });
      } };
  }],
      pe = Ja(function (a, c, d) {
    a.$watchCollection(d.ngStyle, function (a, d) {
      d && a !== d && s(d, function (a, d) {
        c.css(d, "");
      });a && c.css(a);
    });
  }),
      qe = ["$animate", function (a) {
    return { restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases = {};
      }], link: function link(c, d, e, f) {
        var g = [],
            h = [],
            l = [],
            k = [],
            m = function m(a, c) {
          return function () {
            a.splice(c, 1);
          };
        };c.$watch(e.ngSwitch || e.on, function (c) {
          var d, e;d = 0;for (e = l.length; d < e; ++d) a.cancel(l[d]);d = l.length = 0;for (e = k.length; d < e; ++d) {
            var r = ub(h[d].clone);k[d].$destroy();(l[d] = a.leave(r)).then(m(l, d));
          }h.length = 0;k.length = 0;(g = f.cases["!" + c] || f.cases["?"]) && s(g, function (c) {
            c.transclude(function (d, e) {
              k.push(e);var f = c.element;d[d.length++] = Y.createComment(" end ngSwitchWhen: ");h.push({ clone: d });a.enter(d, f.parent(), f);
            });
          });
        });
      } };
  }],
      re = Ja({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function link(a, c, d, e, f) {
      e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];e.cases["!" + d.ngSwitchWhen].push({ transclude: f, element: c });
    } }),
      se = Ja({ transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0,
    link: function link(a, c, d, e, f) {
      e.cases["?"] = e.cases["?"] || [];e.cases["?"].push({ transclude: f, element: c });
    } }),
      ue = Ja({ restrict: "EAC", link: function link(a, c, d, e, f) {
      if (!f) throw S("ngTransclude")("orphan", va(c));f(function (a) {
        c.empty();c.append(a);
      });
    } }),
      Vd = ["$templateCache", function (a) {
    return { restrict: "E", terminal: !0, compile: function compile(c, d) {
        "text/ng-template" == d.type && a.put(d.id, c[0].text);
      } };
  }],
      fg = S("ngOptions"),
      te = ea({ restrict: "A", terminal: !0 }),
      Wd = ["$compile", "$parse", function (a, c) {
    var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        e = { $setViewValue: z };return { restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
        var l = this,
            k = {},
            m = e,
            n;l.databound = d.ngModel;l.init = function (a, c, d) {
          m = a;n = d;
        };l.addOption = function (c, d) {
          Ma(c, '"option value"');k[c] = !0;m.$viewValue == c && (a.val(c), n.parent() && n.remove());d && d[0].hasAttribute("selected") && (d[0].selected = !0);
        };l.removeOption = function (a) {
          this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a));
        };l.renderUnknownOption = function (c) {
          c = "? " + Na(c) + " ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected", !0);
        };l.hasOption = function (a) {
          return k.hasOwnProperty(a);
        };c.$on("$destroy", function () {
          l.renderUnknownOption = z;
        });
      }], link: function link(e, g, h, l) {
        function k(a, c, d, e) {
          d.$render = function () {
            var a = d.$viewValue;e.hasOption(a) ? (C.parent() && C.remove(), c.val(a), "" === a && p.prop("selected", !0)) : B(a) && p ? c.val("") : e.renderUnknownOption(a);
          };c.on("change", function () {
            a.$apply(function () {
              C.parent() && C.remove();d.$setViewValue(c.val());
            });
          });
        }function m(a, c, d) {
          var e;
          d.$render = function () {
            var a = new eb(d.$viewValue);s(c.find("option"), function (c) {
              c.selected = y(a.get(c.value));
            });
          };a.$watch(function () {
            ga(e, d.$viewValue) || (e = ra(d.$viewValue), d.$render());
          });c.on("change", function () {
            a.$apply(function () {
              var a = [];s(c.find("option"), function (c) {
                c.selected && a.push(c.value);
              });d.$setViewValue(a);
            });
          });
        }function n(e, f, g) {
          function h(a, c, d) {
            S[x] = d;D && (S[D] = c);return a(e, S);
          }function k(a) {
            var c;if (u) if (M && H(a)) {
              c = new eb([]);for (var d = 0; d < a.length; d++) c.put(h(M, null, a[d]), !0);
            } else c = new eb(a);else M && (a = h(M, null, a));return function (d, e) {
              var f;f = M ? M : B ? B : F;return u ? y(c.remove(h(f, d, e))) : a === h(f, d, e);
            };
          }function l() {
            v || (e.$$postDigest(p), v = !0);
          }function m(a, c, d) {
            a[c] = a[c] || 0;a[c] += d ? 1 : -1;
          }function p() {
            v = !1;var a = { "": [] },
                c = [""],
                d,
                l,
                n,
                r,
                t;n = g.$viewValue;r = O(e) || [];var B = D ? Object.keys(r).sort() : r,
                x,
                A,
                H,
                F,
                N = {};t = k(n);var J = !1,
                U,
                V;Q = {};for (F = 0; H = B.length, F < H; F++) {
              x = F;if (D && (x = B[F], "$" === x.charAt(0))) continue;A = r[x];d = h(I, x, A) || "";(l = a[d]) || (l = a[d] = [], c.push(d));d = t(x, A);J = J || d;A = h(C, x, A);
              A = y(A) ? A : "";V = M ? M(e, S) : D ? B[F] : F;M && (Q[V] = x);l.push({ id: V, label: A, selected: d });
            }u || (z || null === n ? a[""].unshift({ id: "", label: "", selected: !J }) : J || a[""].unshift({ id: "?", label: "", selected: !0 }));x = 0;for (B = c.length; x < B; x++) {
              d = c[x];l = a[d];R.length <= x ? (n = { element: G.clone().attr("label", d), label: l.label }, r = [n], R.push(r), f.append(n.element)) : (r = R[x], n = r[0], n.label != d && n.element.attr("label", n.label = d));J = null;F = 0;for (H = l.length; F < H; F++) d = l[F], (t = r[F + 1]) ? (J = t.element, t.label !== d.label && (m(N, t.label, !1), m(N, d.label, !0), J.text(t.label = d.label), J.prop("label", t.label)), t.id !== d.id && J.val(t.id = d.id), J[0].selected !== d.selected && (J.prop("selected", t.selected = d.selected), Ra && J.prop("selected", t.selected))) : ("" === d.id && z ? U = z : (U = w.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), r.push(t = { element: U, label: d.label, id: d.id, selected: d.selected }), m(N, d.label, !0), J ? J.after(U) : n.element.append(U), J = U);for (F++; r.length > F;) d = r.pop(), m(N, d.label, !1), d.element.remove();
            }for (; R.length > x;) {
              l = R.pop();for (F = 1; F < l.length; ++F) m(N, l[F].label, !1);l[0].element.remove();
            }s(N, function (a, c) {
              0 < a ? q.addOption(c) : 0 > a && q.removeOption(c);
            });
          }var n;if (!(n = r.match(d))) throw fg("iexp", r, va(f));var C = c(n[2] || n[1]),
              x = n[4] || n[6],
              A = / as /.test(n[0]) && n[1],
              B = A ? c(A) : null,
              D = n[5],
              I = c(n[3] || ""),
              F = c(n[2] ? n[1] : x),
              O = c(n[7]),
              M = n[8] ? c(n[8]) : null,
              Q = {},
              R = [[{ element: f, label: "" }]],
              S = {};z && (a(z)(e), z.removeClass("ng-scope"), z.remove());f.empty();f.on("change", function () {
            e.$apply(function () {
              var a = O(e) || [],
                  c;if (u) c = [], s(f.val(), function (d) {
                d = M ? Q[d] : d;c.push("?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]));
              });else {
                var d = M ? Q[f.val()] : f.val();c = "?" === d ? t : "" === d ? null : h(B ? B : F, d, a[d]);
              }g.$setViewValue(c);p();
            });
          });g.$render = p;e.$watchCollection(O, l);e.$watchCollection(function () {
            var a = O(e),
                c;if (a && H(a)) {
              c = Array(a.length);for (var d = 0, f = a.length; d < f; d++) c[d] = h(C, d, a[d]);
            } else if (a) for (d in (c = {}, a)) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));return c;
          }, l);u && e.$watchCollection(function () {
            return g.$modelValue;
          }, l);
        }if (l[1]) {
          var q = l[0];l = l[1];var u = h.multiple,
              r = h.ngOptions,
              z = !1,
              p,
              v = !1,
              w = D(Y.createElement("option")),
              G = D(Y.createElement("optgroup")),
              C = w.clone();h = 0;for (var A = g.children(), x = A.length; h < x; h++) if ("" === A[h].value) {
            p = z = A.eq(h);break;
          }q.init(l, z, C);u && (l.$isEmpty = function (a) {
            return !a || 0 === a.length;
          });r ? n(e, g, l) : u ? m(e, g, l) : k(e, g, l, q);
        }
      } };
  }],
      Yd = ["$interpolate", function (a) {
    var c = { addOption: z, removeOption: z };return { restrict: "E", priority: 100, compile: function compile(d, e) {
        if (B(e.value)) {
          var f = a(d.text(), !0);f || e.$set("value", d.text());
        }return function (a, d, e) {
          var k = d.parent(),
              m = k.data("$selectController") || k.parent().data("$selectController");m && m.databound || (m = c);f ? a.$watch(f, function (a, c) {
            e.$set("value", a);c !== a && m.removeOption(c);m.addOption(a, d);
          }) : m.addOption(e.value, d);d.on("$destroy", function () {
            m.removeOption(e.value);
          });
        };
      } };
  }],
      Xd = ea({ restrict: "E", terminal: !1 }),
      Ac = function Ac() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        e && (d.required = !0, e.$validators.required = function (a, c) {
          return !d.required || !e.$isEmpty(c);
        }, d.$observe("required", function () {
          e.$validate();
        }));
      } };
  },
      zc = function zc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f,
              g = d.ngPattern || d.pattern;d.$observe("pattern", function (a) {
            F(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));if (a && !a.test) throw S("ngPattern")("noregexp", g, a, va(c));f = a || t;e.$validate();
          });e.$validators.pattern = function (a) {
            return e.$isEmpty(a) || B(f) || f.test(a);
          };
        }
      } };
  },
      Cc = function Cc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f = -1;d.$observe("maxlength", function (a) {
            a = ba(a);f = isNaN(a) ? -1 : a;e.$validate();
          });
          e.$validators.maxlength = function (a, c) {
            return 0 > f || e.$isEmpty(c) || c.length <= f;
          };
        }
      } };
  },
      Bc = function Bc() {
    return { restrict: "A", require: "?ngModel", link: function link(a, c, d, e) {
        if (e) {
          var f = 0;d.$observe("minlength", function (a) {
            f = ba(a) || 0;e.$validate();
          });e.$validators.minlength = function (a, c) {
            return e.$isEmpty(c) || c.length >= f;
          };
        }
      } };
  };M.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(ca), D(Y).ready(function () {
    Jd(Y, tc);
  }));
})(window, document);!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');


},{}],76:[function(require,module,exports){
'use strict';

require('./angular.min');
module.exports = angular;

},{"./angular.min":75}],77:[function(require,module,exports){
/*
 AngularJS v1.3.0
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
"use strict";

(function (M, f, S) {
  'use strict';f.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
    return function (T, B, k) {
      k = k.ngAnimateChildren;f.isString(k) && 0 === k.length ? B.data("$$ngAnimateChildren", !0) : T.$watch(k, function (f) {
        B.data("$$ngAnimateChildren", !!f);
      });
    };
  }).factory("$$animateReflow", ["$$rAF", "$document", function (f, B) {
    return function (k) {
      return f(function () {
        k();
      });
    };
  }]).config(["$provide", "$animateProvider", function (T, B) {
    function k(f) {
      for (var g = 0; g < f.length; g++) {
        var k = f[g];if (1 == k.nodeType) return k;
      }
    }
    function N(f, g) {
      return k(f) == k(g);
    }var s = f.noop,
        g = f.forEach,
        ba = B.$$selectors,
        $ = f.isArray,
        ca = f.isString,
        da = f.isObject,
        t = { running: !0 };T.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", function (O, M, I, U, x, C, P, S, V) {
      function A(a, c) {
        var b = a.data("$$ngAnimateState") || {};c && (b.running = !0, b.structural = !0, a.data("$$ngAnimateState", b));return b.disabled || b.running && b.structural;
      }function z(a) {
        var c,
            b = M.defer();b.promise.$$cancelFn = function () {
          c && c();
        };P.$$postDigest(function () {
          c = a(function () {
            b.resolve();
          });
        });return b.promise;
      }function J(a) {
        if (da(a)) return a.tempClasses && ca(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a;
      }function W(a, c, b) {
        b = b || {};var e = {};g(b, function (a, d) {
          g(d.split(" "), function (d) {
            e[d] = a;
          });
        });var m = Object.create(null);g((a.attr("class") || "").split(/\s+/), function (a) {
          m[a] = !0;
        });var f = [],
            k = [];g(c.classes, function (a, d) {
          var b = m[d],
              c = e[d] || {};!1 === a ? (b || "addClass" == c.event) && k.push(d) : !0 === a && (b && "removeClass" != c.event || f.push(d));
        });return 0 < f.length + k.length && [f.join(" "), k.join(" ")];
      }function Q(a) {
        if (a) {
          var c = [],
              b = {};a = a.substr(1).split(".");(U.transitions || U.animations) && c.push(I.get(ba[""]));for (var e = 0; e < a.length; e++) {
            var f = a[e],
                k = ba[f];k && !b[f] && (c.push(I.get(k)), b[f] = !0);
          }return c;
        }
      }function R(a, c, b, e) {
        function m(a, d) {
          var b = a[d],
              c = a["before" + d.charAt(0).toUpperCase() + d.substr(1)];if (b || c) return "leave" == d && (c = b, b = null), l.push({ event: d, fn: b }), H.push({ event: d, fn: c }), !0;
        }function k(c, h, G) {
          var w = [];g(c, function (a) {
            a.fn && w.push(a);
          });var f = 0;g(w, function (c, n) {
            var u = function u() {
              a: {
                if (h) {
                  (h[n] || s)();if (++f < w.length) break a;h = null;
                }G();
              }
            };switch (c.event) {case "setClass":
                h.push(c.fn(a, F, d, u, e));break;case "animate":
                h.push(c.fn(a, b, e.from, e.to, u));break;case "addClass":
                h.push(c.fn(a, F || b, u, e));break;case "removeClass":
                h.push(c.fn(a, d || b, u, e));break;default:
                h.push(c.fn(a, u, e));}
          });h && 0 === h.length && G();
        }var p = a[0];if (p) {
          e && (e.to = e.to || {}, e.from = e.from || {});var F, d;$(b) && (F = b[0], d = b[1], F ? d ? b = F + " " + d : (b = F, c = "addClass") : (b = d, c = "removeClass"));
          var h = "setClass" == c,
              G = h || "addClass" == c || "removeClass" == c || "animate" == c,
              w = a.attr("class") + " " + b;if (X(w)) {
            var u = s,
                n = [],
                H = [],
                q = s,
                r = [],
                l = [],
                w = (" " + w).replace(/\s+/g, ".");g(Q(w), function (a) {
              !m(a, c) && h && (m(a, "addClass"), m(a, "removeClass"));
            });return { node: p, event: c, className: b, isClassBased: G, isSetClassOperation: h, applyStyles: function applyStyles() {
                e && a.css(f.extend(e.from || {}, e.to || {}));
              }, before: function before(a) {
                u = a;k(H, n, function () {
                  u = s;a();
                });
              }, after: function after(a) {
                q = a;k(l, r, function () {
                  q = s;a();
                });
              }, cancel: function cancel() {
                n && (g(n, function (a) {
                  (a || s)(!0);
                }), u(!0));r && (g(r, function (a) {
                  (a || s)(!0);
                }), q(!0));
              } };
          }
        }
      }function y(a, c, b, e, m, k, p, F) {
        function d(d) {
          var h = "$animate:" + d;H && H[h] && 0 < H[h].length && C(function () {
            b.triggerHandler(h, { event: a, className: c });
          });
        }function h() {
          d("before");
        }function G() {
          d("after");
        }function w() {
          w.hasBeenRun || (w.hasBeenRun = !0, k());
        }function u() {
          if (!u.hasBeenRun) {
            n && n.applyStyles();u.hasBeenRun = !0;p && p.tempClasses && g(p.tempClasses, function (a) {
              b.removeClass(a);
            });var h = b.data("$$ngAnimateState");h && (n && n.isClassBased ? l(b, c) : (C(function () {
              var d = b.data("$$ngAnimateState") || {};v == d.index && l(b, c, a);
            }), b.data("$$ngAnimateState", h)));d("close");F();
          }
        }var n = R(b, a, c, p);if (!n) return w(), h(), G(), u(), s;a = n.event;c = n.className;var H = f.element._data(n.node),
            H = H && H.events;e || (e = m ? m.parent() : b.parent());if (Y(b, e)) return w(), h(), G(), u(), s;e = b.data("$$ngAnimateState") || {};var q = e.active || {},
            r = e.totalActive || 0,
            t = e.last;m = !1;if (0 < r) {
          r = [];if (n.isClassBased) "setClass" == t.event ? (r.push(t), l(b, c)) : q[c] && (aa = q[c], aa.event == a ? m = !0 : (r.push(aa), l(b, c)));else if ("leave" == a && q["ng-leave"]) m = !0;else {
            for (var aa in q) r.push(q[aa]);e = {};l(b, !0);
          }0 < r.length && g(r, function (a) {
            a.cancel();
          });
        }!n.isClassBased || n.isSetClassOperation || "animate" == a || m || (m = "addClass" == a == b.hasClass(c));if (m) return w(), h(), G(), d("close"), F(), s;q = e.active || {};r = e.totalActive || 0;if ("leave" == a) b.one("$destroy", function (a) {
          a = f.element(this);var d = a.data("$$ngAnimateState");d && (d = d.active["ng-leave"]) && (d.cancel(), l(a, "ng-leave"));
        });b.addClass("ng-animate");p && p.tempClasses && g(p.tempClasses, function (a) {
          b.addClass(a);
        });
        var v = Z++;r++;q[c] = n;b.data("$$ngAnimateState", { last: n, active: q, index: v, totalActive: r });h();n.before(function (d) {
          var h = b.data("$$ngAnimateState");d = d || !h || !h.active[c] || n.isClassBased && h.active[c].event != a;w();!0 === d ? u() : (G(), n.after(u));
        });return n.cancel;
      }function K(a) {
        if (a = k(a)) a = f.isFunction(a.getElementsByClassName) ? a.getElementsByClassName("ng-animate") : a.querySelectorAll(".ng-animate"), g(a, function (a) {
          a = f.element(a);(a = a.data("$$ngAnimateState")) && a.active && g(a.active, function (a) {
            a.cancel();
          });
        });
      }
      function l(a, c) {
        if (N(a, x)) t.disabled || (t.running = !1, t.structural = !1);else if (c) {
          var b = a.data("$$ngAnimateState") || {},
              e = !0 === c;!e && b.active && b.active[c] && (b.totalActive--, delete b.active[c]);if (e || !b.totalActive) a.removeClass("ng-animate"), a.removeData("$$ngAnimateState");
        }
      }function Y(a, c) {
        if (t.disabled) return !0;if (N(a, x)) return t.running;var b, e, k;do {
          if (0 === c.length) break;var g = N(c, x),
              p = g ? t : c.data("$$ngAnimateState") || {};if (p.disabled) return !0;g && (k = !0);!1 !== b && (g = c.data("$$ngAnimateChildren"), f.isDefined(g) && (b = g));e = e || p.running || p.last && !p.last.isClassBased;
        } while (c = c.parent());return !k || !b && e;
      }x.data("$$ngAnimateState", t);var L = P.$watch(function () {
        return V.totalPendingRequests;
      }, function (a, c) {
        0 === a && (L(), P.$$postDigest(function () {
          P.$$postDigest(function () {
            t.running = !1;
          });
        }));
      }),
          Z = 0,
          E = B.classNameFilter(),
          X = E ? function (a) {
        return E.test(a);
      } : function () {
        return !0;
      };return { animate: function animate(a, c, b, e, g) {
          e = e || "ng-inline-animate";g = J(g) || {};g.from = b ? c : null;g.to = b ? b : c;return z(function (b) {
            return y("animate", e, f.element(k(a)), null, null, s, g, b);
          });
        }, enter: function enter(a, c, b, e) {
          e = J(e);a = f.element(a);c = c && f.element(c);b = b && f.element(b);A(a, !0);O.enter(a, c, b);return z(function (g) {
            return y("enter", "ng-enter", f.element(k(a)), c, b, s, e, g);
          });
        }, leave: function leave(a, c) {
          c = J(c);a = f.element(a);K(a);A(a, !0);return z(function (b) {
            return y("leave", "ng-leave", f.element(k(a)), null, null, function () {
              O.leave(a);
            }, c, b);
          });
        }, move: function move(a, c, b, e) {
          e = J(e);a = f.element(a);c = c && f.element(c);b = b && f.element(b);K(a);A(a, !0);O.move(a, c, b);return z(function (g) {
            return y("move", "ng-move", f.element(k(a)), c, b, s, e, g);
          });
        }, addClass: function addClass(a, c, b) {
          return this.setClass(a, c, [], b);
        }, removeClass: function removeClass(a, c, b) {
          return this.setClass(a, [], c, b);
        }, setClass: function setClass(a, c, b, e) {
          e = J(e);a = f.element(a);a = f.element(k(a));if (A(a)) return O.$$setClassImmediately(a, c, b, e);var m,
              l = a.data("$$animateClasses"),
              p = !!l;l || (l = { classes: {} });m = l.classes;c = $(c) ? c : c.split(" ");g(c, function (a) {
            a && a.length && (m[a] = !0);
          });b = $(b) ? b : b.split(" ");g(b, function (a) {
            a && a.length && (m[a] = !1);
          });if (p) return e && l.options && (l.options = f.extend(l.options || {}, e)), l.promise;a.data("$$animateClasses", l = { classes: m, options: e });return l.promise = z(function (b) {
            var d = a.parent(),
                h = k(a),
                c = h.parentNode;if (!c || c.$$NG_REMOVED || h.$$NG_REMOVED) b();else {
              h = a.data("$$animateClasses");a.removeData("$$animateClasses");var c = a.data("$$ngAnimateState") || {},
                  e = W(a, h, c.active);return e ? y("setClass", e, a, d, null, function () {
                e[0] && O.$$addClassImmediately(a, e[0]);e[1] && O.$$removeClassImmediately(a, e[1]);
              }, h.options, b) : b();
            }
          });
        }, cancel: function cancel(a) {
          a.$$cancelFn();
        },
        enabled: function enabled(a, c) {
          switch (arguments.length) {case 2:
              if (a) l(c);else {
                var b = c.data("$$ngAnimateState") || {};b.disabled = !0;c.data("$$ngAnimateState", b);
              }break;case 1:
              t.disabled = !a;break;default:
              a = !t.disabled;}return !!a;
        } };
    }]);B.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (t, B, I, U) {
      function x() {
        e || (e = U(function () {
          b = [];e = null;a = {};
        }));
      }function C(c, d) {
        e && e();b.push(d);e = U(function () {
          g(b, function (a) {
            a();
          });b = [];e = null;a = {};
        });
      }function P(a, d) {
        var h = k(a);a = f.element(h);p.push(a);h = Date.now() + d;h <= N || (I.cancel(m), N = h, m = I(function () {
          T(p);p = [];
        }, d, !1));
      }function T(a) {
        g(a, function (a) {
          (a = a.data("$$ngAnimateCSS3Data")) && g(a.closeAnimationFns, function (a) {
            a();
          });
        });
      }function V(b, d) {
        var h = d ? a[d] : null;if (!h) {
          var c = 0,
              e = 0,
              f = 0,
              k = 0;g(b, function (a) {
            if (1 == a.nodeType) {
              a = t.getComputedStyle(a) || {};c = Math.max(A(a[L + "Duration"]), c);e = Math.max(A(a[L + "Delay"]), e);k = Math.max(A(a[E + "Delay"]), k);var d = A(a[E + "Duration"]);0 < d && (d *= parseInt(a[E + "IterationCount"], 10) || 1);f = Math.max(d, f);
            }
          });h = { total: 0, transitionDelay: e,
            transitionDuration: c, animationDelay: k, animationDuration: f };d && (a[d] = h);
        }return h;
      }function A(a) {
        var d = 0;a = ca(a) ? a.split(/\s*,\s*/) : [];g(a, function (a) {
          d = Math.max(parseFloat(a) || 0, d);
        });return d;
      }function z(b, d, h, e) {
        b = 0 <= ["ng-enter", "ng-leave", "ng-move"].indexOf(h);var f,
            g = d.parent(),
            n = g.data("$$ngAnimateKey");n || (g.data("$$ngAnimateKey", ++c), n = c);f = n + "-" + k(d).getAttribute("class");var g = f + " " + h,
            n = a[g] ? ++a[g].total : 0,
            l = {};if (0 < n) {
          var q = h + "-stagger",
              l = f + " " + q;(f = !a[l]) && d.addClass(q);l = V(d, l);f && d.removeClass(q);
        }d.addClass(h);
        var q = d.data("$$ngAnimateCSS3Data") || {},
            r = V(d, g);f = r.transitionDuration;r = r.animationDuration;if (b && 0 === f && 0 === r) return d.removeClass(h), !1;h = e || b && 0 < f;b = 0 < r && 0 < l.animationDelay && 0 === l.animationDuration;d.data("$$ngAnimateCSS3Data", { stagger: l, cacheKey: g, running: q.running || 0, itemIndex: n, blockTransition: h, closeAnimationFns: q.closeAnimationFns || [] });g = k(d);h && (W(g, !0), e && d.css(e));b && (g.style[E + "PlayState"] = "paused");return !0;
      }function J(a, d, b, c, e) {
        function f() {
          d.off(C, l);d.removeClass(q);d.removeClass(r);
          z && I.cancel(z);K(d, b);var a = k(d),
              c;for (c in p) a.style.removeProperty(p[c]);
        }function l(a) {
          a.stopPropagation();var d = a.originalEvent || a;a = d.$manualTimeStamp || d.timeStamp || Date.now();d = parseFloat(d.elapsedTime.toFixed(3));Math.max(a - B, 0) >= A && d >= x && c();
        }var m = k(d);a = d.data("$$ngAnimateCSS3Data");if (-1 != m.getAttribute("class").indexOf(b) && a) {
          var q = "",
              r = "";g(b.split(" "), function (a, d) {
            var b = (0 < d ? " " : "") + a;q += b + "-active";r += b + "-pending";
          });var p = [],
              t = a.itemIndex,
              v = a.stagger,
              s = 0;if (0 < t) {
            s = 0;0 < v.transitionDelay && 0 === v.transitionDuration && (s = v.transitionDelay * t);var y = 0;0 < v.animationDelay && 0 === v.animationDuration && (y = v.animationDelay * t, p.push(Y + "animation-play-state"));s = Math.round(100 * Math.max(s, y)) / 100;
          }s || (d.addClass(q), a.blockTransition && W(m, !1));var D = V(d, a.cacheKey + " " + q),
              x = Math.max(D.transitionDuration, D.animationDuration);if (0 === x) d.removeClass(q), K(d, b), c();else {
            !s && e && (D.transitionDuration || (d.css("transition", D.animationDuration + "s linear all"), p.push("transition")), d.css(e));var t = Math.max(D.transitionDelay, D.animationDelay),
                A = 1E3 * t;0 < p.length && (v = m.getAttribute("style") || "", ";" !== v.charAt(v.length - 1) && (v += ";"), m.setAttribute("style", v + " "));var B = Date.now(),
                C = X + " " + Z,
                t = 1E3 * (s + 1.5 * (t + x)),
                z;0 < s && (d.addClass(r), z = I(function () {
              z = null;0 < D.transitionDuration && W(m, !1);0 < D.animationDuration && (m.style[E + "PlayState"] = "");d.addClass(q);d.removeClass(r);e && (0 === D.transitionDuration && d.css("transition", D.animationDuration + "s linear all"), d.css(e), p.push("transition"));
            }, 1E3 * s, !1));d.on(C, l);a.closeAnimationFns.push(function () {
              f();
              c();
            });a.running++;P(d, t);return f;
          }
        } else c();
      }function W(a, d) {
        a.style[L + "Property"] = d ? "none" : "";
      }function Q(a, d, b, c) {
        if (z(a, d, b, c)) return function (a) {
          a && K(d, b);
        };
      }function R(a, d, b, c, e) {
        if (d.data("$$ngAnimateCSS3Data")) return J(a, d, b, c, e);K(d, b);c();
      }function y(a, d, b, c, e) {
        var f = Q(a, d, b, e.from);if (f) {
          var g = f;C(d, function () {
            g = R(a, d, b, c, e.to);
          });return function (a) {
            (g || s)(a);
          };
        }x();c();
      }function K(a, d) {
        a.removeClass(d);var b = a.data("$$ngAnimateCSS3Data");b && (b.running && b.running--, b.running && 0 !== b.running || a.removeData("$$ngAnimateCSS3Data"));
      }
      function l(a, d) {
        var b = "";a = $(a) ? a : a.split(/\s+/);g(a, function (a, c) {
          a && 0 < a.length && (b += (0 < c ? " " : "") + a + d);
        });return b;
      }var Y = "",
          L,
          Z,
          E,
          X;M.ontransitionend === S && M.onwebkittransitionend !== S ? (Y = "-webkit-", L = "WebkitTransition", Z = "webkitTransitionEnd transitionend") : (L = "transition", Z = "transitionend");M.onanimationend === S && M.onwebkitanimationend !== S ? (Y = "-webkit-", E = "WebkitAnimation", X = "webkitAnimationEnd animationend") : (E = "animation", X = "animationend");var a = {},
          c = 0,
          b = [],
          e,
          m = null,
          N = 0,
          p = [];return { animate: function animate(a, d, b, c, e, f) {
          f = f || {};f.from = b;f.to = c;return y("animate", a, d, e, f);
        }, enter: function enter(a, b, c) {
          c = c || {};return y("enter", a, "ng-enter", b, c);
        }, leave: function leave(a, b, c) {
          c = c || {};return y("leave", a, "ng-leave", b, c);
        }, move: function move(a, b, c) {
          c = c || {};return y("move", a, "ng-move", b, c);
        }, beforeSetClass: function beforeSetClass(a, b, c, e, f) {
          f = f || {};b = l(c, "-remove") + " " + l(b, "-add");if (f = Q("setClass", a, b, f.from)) return C(a, e), f;x();e();
        }, beforeAddClass: function beforeAddClass(a, b, c, e) {
          e = e || {};if (b = Q("addClass", a, l(b, "-add"), e.from)) return C(a, c), b;x();c();
        }, beforeRemoveClass: function beforeRemoveClass(a, b, c, e) {
          e = e || {};if (b = Q("removeClass", a, l(b, "-remove"), e.from)) return C(a, c), b;x();c();
        }, setClass: function setClass(a, b, c, e, f) {
          f = f || {};c = l(c, "-remove");b = l(b, "-add");return R("setClass", a, c + " " + b, e, f.to);
        }, addClass: function addClass(a, b, c, e) {
          e = e || {};return R("addClass", a, l(b, "-add"), c, e.to);
        }, removeClass: function removeClass(a, b, c, e) {
          e = e || {};return R("removeClass", a, l(b, "-remove"), c, e.to);
        } };
    }]);
  }]);
})(window, window.angular);


},{}],78:[function(require,module,exports){
/*! 3.1.2 */
"use strict";

!(function () {
  function a(a, b) {
    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a]);
  }function b(a, b, c) {
    try {
      Object.defineProperty(a, b, { get: c });
    } catch (d) {}
  }var c = function c() {
    try {
      var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if (a) return !0;
    } catch (b) {
      if (void 0 != navigator.mimeTypes["application/x-shockwave-flash"]) return !0;
    }return !1;
  };if (window.XMLHttpRequest && !window.FormData || window.FileAPI && FileAPI.forceLoad) {
    var d = function d(a) {
      if (!a.__listeners) {
        a.upload || (a.upload = {}), a.__listeners = [];var b = a.upload.addEventListener;a.upload.addEventListener = function (c, d) {
          a.__listeners[c] = d, b && b.apply(this, arguments);
        };
      }
    };a("open", function (a) {
      return function (b, c, e) {
        d(this), this.__url = c;try {
          a.apply(this, [b, c, e]);
        } catch (f) {
          f.message.indexOf("Access is denied") > -1 && (this.__origError = f, a.apply(this, [b, "_fix_for_ie_crossdomain__", e]));
        }
      };
    }), a("getResponseHeader", function (a) {
      return function (b) {
        return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b]);
      };
    }), a("getAllResponseHeaders", function (a) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this);
      };
    }), a("abort", function (a) {
      return function () {
        return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this);
      };
    }), a("setRequestHeader", function (a) {
      return function (b, c) {
        if ("__setXHR_" === b) {
          d(this);var e = c(this);e instanceof Function && e(this);
        } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = c, a.apply(this, arguments);
      };
    }), a("send", function (a) {
      return function () {
        var d = this;if (arguments[0] && arguments[0].__isFileAPIShim) {
          var e = arguments[0],
              f = { url: d.__url, jsonp: !1, cache: !0, complete: function complete(a, c) {
              d.__completed = !0, !a && d.__listeners.load && d.__listeners.load({ type: "load", loaded: d.__loaded, total: d.__total, target: d, lengthComputable: !0 }), !a && d.__listeners.loadend && d.__listeners.loadend({ type: "loadend", loaded: d.__loaded, total: d.__total, target: d, lengthComputable: !0 }), "abort" === a && d.__listeners.abort && d.__listeners.abort({ type: "abort", loaded: d.__loaded, total: d.__total, target: d, lengthComputable: !0 }), void 0 !== c.status && b(d, "status", function () {
                return 0 == c.status && a && "abort" !== a ? 500 : c.status;
              }), void 0 !== c.statusText && b(d, "statusText", function () {
                return c.statusText;
              }), b(d, "readyState", function () {
                return 4;
              }), void 0 !== c.response && b(d, "response", function () {
                return c.response;
              });var e = c.responseText || (a && 0 == c.status && "abort" !== a ? a : void 0);b(d, "responseText", function () {
                return e;
              }), b(d, "response", function () {
                return e;
              }), a && b(d, "err", function () {
                return a;
              }), d.__fileApiXHR = c, d.onreadystatechange && d.onreadystatechange(), d.onload && d.onload();
            }, fileprogress: function fileprogress(a) {
              if ((a.target = d, d.__listeners.progress && d.__listeners.progress(a), d.__total = a.total, d.__loaded = a.loaded, a.total === a.loaded)) {
                var b = this;setTimeout(function () {
                  d.__completed || (d.getAllResponseHeaders = function () {}, b.complete(null, { status: 204, statusText: "No Content" }));
                }, FileAPI.noContentTimeout || 1e4);
              }
            }, headers: d.__requestHeaders };f.data = {}, f.files = {};for (var g = 0; g < e.data.length; g++) {
            var h = e.data[g];null != h.val && null != h.val.name && null != h.val.size && null != h.val.type ? f.files[h.key] = h.val : f.data[h.key] = h.val;
          }setTimeout(function () {
            if (!c()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';d.__fileApiXHR = FileAPI.upload(f);
          }, 1);
        } else {
          if (this.__origError) throw this.__origError;a.apply(d, arguments);
        }
      };
    }), window.XMLHttpRequest.__isFileAPIShim = !0;var e = function e(a) {
      if (!c()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var b = angular.element(a);if (!b.attr("disabled")) {
        for (var d = !1, e = 0; e < b[0].attributes.length; e++) {
          var f = b[0].attributes[e];if (-1 !== f.name.indexOf("file-select")) {
            d = !0;break;
          }
        }if (!b.hasClass("js-fileapi-wrapper") && (d || null != b.attr("__afu_gen__")) && (b.addClass("js-fileapi-wrapper"), null != b.attr("__afu_gen__"))) {
          for (var g = b[0].__refElem__ && angular.element(b[0].__refElem__) || b; g && !g.attr("__refElem__");) g = angular.element(g[0].nextSibling);g.bind("mouseover", function () {
            ("" === b.parent().css("position") || "static" === b.parent().css("position")) && b.parent().css("position", "relative"), b.css("position", "absolute").css("top", g[0].offsetTop + "px").css("left", g[0].offsetLeft + "px").css("width", g[0].offsetWidth + "px").css("height", g[0].offsetHeight + "px").css("padding", g.css("padding")).css("margin", g.css("margin")).css("filter", "alpha(opacity=0)"), g.attr("onclick", ""), b.css("z-index", "1000");
          });
        }
      }
    },
        f = function f(a) {
      return function (b) {
        for (var c = FileAPI.getFiles(b), d = 0; d < c.length; d++) void 0 === c[d].size && (c[d].size = 0), void 0 === c[d].name && (c[d].name = "file"), void 0 === c[d].type && (c[d].type = "undefined");b.target || (b.target = {}), b.target.files = c, b.target.files != c && (b.__files_ = c), (b.__files_ || b.target.files).item = function (a) {
          return (b.__files_ || b.target.files)[a] || null;
        }, a && a.apply(this, [b]);
      };
    },
        g = function g(a, b) {
      return ("change" === b.toLowerCase() || "onchange" === b.toLowerCase()) && "file" == a.getAttribute("type");
    };HTMLInputElement.prototype.addEventListener && (HTMLInputElement.prototype.addEventListener = (function (a) {
      return function (b, c, d, h) {
        g(this, b) ? (e(this), a.apply(this, [b, f(c), d, h])) : a.apply(this, [b, c, d, h]);
      };
    })(HTMLInputElement.prototype.addEventListener)), HTMLInputElement.prototype.attachEvent && (HTMLInputElement.prototype.attachEvent = (function (a) {
      return function (b, c) {
        g(this, b) ? (e(this), window.jQuery ? angular.element(this).bind("change", f(null)) : a.apply(this, [b, f(c)])) : a.apply(this, [b, c]);
      };
    })(HTMLInputElement.prototype.attachEvent)), window.FormData = FormData = function () {
      return { append: function append(a, b, c) {
          b.__isFileAPIBlobShim && (b = b.data[0]), this.data.push({ key: a, val: b, name: c });
        }, data: [], __isFileAPIShim: !0 };
    }, window.Blob = Blob = function (a) {
      return { data: a, __isFileAPIBlobShim: !0 };
    }, (function () {
      if ((window.FileAPI || (window.FileAPI = {}), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload)) {
        var a,
            b,
            d,
            e,
            f,
            g = document.createElement("script"),
            h = document.getElementsByTagName("script");if (window.FileAPI.jsUrl) a = window.FileAPI.jsUrl;else if (window.FileAPI.jsPath) b = window.FileAPI.jsPath;else for (d = 0; d < h.length; d++) if ((f = h[d].src, e = f.search(/\/angular\-file\-upload[\-a-zA-z0-9\.]*\.js/), e > -1)) {
          b = f.substring(0, e + 1);break;
        }null == FileAPI.staticPath && (FileAPI.staticPath = b), g.setAttribute("src", a || b + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(g), FileAPI.hasFlash = c();
      }
    })(), FileAPI.disableFileInput = function (a, b) {
      b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper");
    };
  }window.FileReader || (window.FileReader = function () {
    var a = this,
        b = !1;this.listeners = {}, this.addEventListener = function (b, c) {
      a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c);
    }, this.removeEventListener = function (b, c) {
      a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1);
    }, this.dispatchEvent = function (b) {
      var c = a.listeners[b.type];if (c) for (var d = 0; d < c.length; d++) c[d].call(a, b);
    }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;var c = function c(b, _c) {
      var d = { type: b, target: a, loaded: _c.loaded, total: _c.total, error: _c.error };return null != _c.result && (d.target.result = _c.result), d;
    },
        d = function d(_d) {
      if ((b || (b = !0, a.onloadstart && a.onloadstart(c("loadstart", _d))), "load" === _d.type)) {
        a.onloadend && a.onloadend(c("loadend", _d));var e = c("load", _d);a.onload && a.onload(e), a.dispatchEvent(e);
      } else if ("progress" === _d.type) {
        var e = c("progress", _d);a.onprogress && a.onprogress(e), a.dispatchEvent(e);
      } else {
        var e = c("error", _d);a.onerror && a.onerror(e), a.dispatchEvent(e);
      }
    };this.readAsArrayBuffer = function (a) {
      FileAPI.readAsBinaryString(a, d);
    }, this.readAsBinaryString = function (a) {
      FileAPI.readAsBinaryString(a, d);
    }, this.readAsDataURL = function (a) {
      FileAPI.readAsDataURL(a, d);
    }, this.readAsText = function (a) {
      FileAPI.readAsText(a, d);
    };
  });
})();

},{}],79:[function(require,module,exports){
/*! 3.1.2 */
"use strict";

!(function () {
  function a(a, b) {
    window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a]);
  }function b(a, b, c, d, f, g, h) {
    function i() {
      return "input" === b[0].tagName.toLowerCase() && b.attr("type") && "file" === b.attr("type").toLowerCase();
    }function j(c) {
      g(function () {
        b.parent().length && p.push(a.$watch(c, function (a, b) {
          a != b && k();
        }));
      });
    }function k() {
      var c = b.clone();if ((b.attr("__afu_gen__") && angular.element(document.getElementById(b.attr("id").substring(1))).remove(), b.parent().length)) {
        for (var d = 0; d < p.length; d++) p[d]();b.replaceWith(c), h(c)(a);
      }return c;
    }function l(d, e) {
      if (d) {
        j(d);var g = f(d)(a);g ? (b.attr(e, g), c[e] = g) : (b.attr(e, null), delete c[e]);
      }
    }function m(b) {
      var e;e = b.__files_ || b.target && b.target.files, o(e, c, d, a, b);
    }function n(a) {
      if ((null != q[0].value && "" != q[0].value && (q[0].value = null, -1 === navigator.userAgent.indexOf("Trident/7") && m({ target: { files: [] } })), b.attr("__afu_clone__"))) b.attr("__afu_clone__", null);else if (-1 !== navigator.appVersion.indexOf("MSIE 10") || -1 !== navigator.userAgent.indexOf("Trident/7")) {
        var c = k();return c.attr("__afu_clone__", !0), c[0].click(), a.preventDefault(), a.stopPropagation(), !0;
      }
    }function o(a, b, c, d, h) {
      for (var i = [], j = [], k = f(b.ngAccept)(d), l = angular.isString(k) && k ? new RegExp(e(k), "gi") : null, m = l ? null : b.ngAccept, n = 0; n < a.length; n++) {
        var o = a.item(n);!(!l || o.type.match(l) || null != o.name && o.name.match(l)) || m && !f(m)(d, { $file: o, $event: h }) ? j.push(o) : i.push(o);
      }g(function () {
        c && (f(b.ngModel).assign(d, i), c && c.$setViewValue(null != i && 0 == i.length ? "" : i), b.ngModelRejected && f(b.ngModelRejected).assign(d, j)), b.ngFileChange && "" != b.ngFileChange && f(b.ngFileChange)(d, { $files: i, $rejectedFiles: j, $event: h });
      });
    }var p = [];l(c.ngMultiple, "multiple"), l(c.ngAccept, "ng-accept"), l(c.ngCapture, "capture"), "" != c.ngFileSelect && (c.ngFileChange = c.ngFileSelect);var q = b;if (i()) b.bind("click", n);else {
      q = angular.element('<input type="file">'), b.attr("multiple") && q.attr("multiple", b.attr("multiple")), b.attr("accept") && q.attr("accept", b.attr("accept")), b.attr("capture") && q.attr("capture", b.attr("capture"));for (var r in c) if (0 == r.indexOf("inputFile")) {
        var s = r.substring("inputFile".length);s = s[0].toLowerCase() + s.substring(1), q.attr(s, c[r]);
      }q.css("width", "0px").css("height", "0px").css("position", "absolute").css("padding", 0).css("margin", 0).css("overflow", "hidden").attr("tabindex", "-1").css("opacity", 0).attr("__afu_gen__", !0), b.attr("__refElem__", !0), q[0].__refElem__ = b[0], b.parent()[0].insertBefore(q[0], b[0]), b.css("overflow", "hidden"), b.bind("click", function (a) {
        n(a) || q[0].click();
      });
    }q.bind("change", m), b.on("$destroy", function () {
      for (var a = 0; a < p.length; a++) p[a]();b[0] != q[0] && q.remove();
    }), p.push(a.$watch(c.ngModel, function (a, b) {
      a == b || null != a && a.length || (-1 !== navigator.appVersion.indexOf("MSIE 10") ? k() : q[0].value = null);
    }));
  }function c(a, b, c, f, g, h, i) {
    function j(a, b, c) {
      var d = !0;if (r || s) {
        var e = c.dataTransfer.items;if (null != e) for (var f = 0; f < e.length && d; f++) d = d && ("file" == e[f].kind || "" == e[f].kind) && (s && g(s)(a, { $file: e[f], $event: c }) || r && null != e[f].type && e[f].type.match(r) || null != e[f].name && e[f].name.match(r));
      }var h = g(b.dragOverClass)(a, { $event: c });return h && (h.delay && (p = h.delay), h.accept && (h = d ? h.accept : h.reject)), h || b.dragOverClass || "dragover";
    }function k(b, c, d, e) {
      function f(c) {
        !(!r || c.type.match(r) || null != c.name && c.name.match(r)) || s && !g(s)(a, { $file: c, $event: b }) ? l.push(c) : k.push(c);
      }function j(a, b, c) {
        if (null != b) if (b.isDirectory) {
          var d = (c || "") + b.name;f({ name: b.name, type: "directory", path: d });var e = b.createReader(),
              g = [];n++;var h = function h() {
            e.readEntries(function (d) {
              try {
                if (d.length) g = g.concat(Array.prototype.slice.call(d || [], 0)), h();else {
                  for (var e = 0; e < g.length; e++) j(a, g[e], (c ? c : "") + b.name + "/");n--;
                }
              } catch (f) {
                n--, console.error(f);
              }
            }, function () {
              n--;
            });
          };h();
        } else n++, b.file(function (a) {
          try {
            n--, a.path = (c ? c : "") + a.name, f(a);
          } catch (b) {
            n--, console.error(b);
          }
        }, function () {
          n--;
        });
      }var k = [],
          l = [],
          m = b.dataTransfer.items,
          n = 0;if (m && m.length > 0 && "file" != i.protocol()) for (var o = 0; o < m.length; o++) {
        if (m[o].webkitGetAsEntry && m[o].webkitGetAsEntry() && m[o].webkitGetAsEntry().isDirectory) {
          var p = m[o].webkitGetAsEntry();if (p.isDirectory && !d) continue;null != p && j(k, p);
        } else {
          var q = m[o].getAsFile();null != q && f(q);
        }if (!e && k.length > 0) break;
      } else {
        var t = b.dataTransfer.files;if (null != t) for (var o = 0; o < t.length && (f(t.item(o)), e || !(k.length > 0)); o++);
      }var u = 0;!(function v(a) {
        h(function () {
          if (n) 10 * u++ < 2e4 && v(10);else {
            if (!e && k.length > 1) {
              for (var a = 0; "directory" == k[a].type;) a++;k = [k[a]];
            }c(k, l);
          }
        }, a || 0);
      })();
    }var l = d();if ((c.dropAvailable && h(function () {
      a.dropAvailable ? a.dropAvailable.value = l : a.dropAvailable = l;
    }), !l)) return 0 != g(c.hideOnDropNotAvailable)(a) && b.css("display", "none"), void 0;var m,
        n = null,
        o = g(c.stopPropagation)(a),
        p = 1,
        q = g(c.ngAccept)(a) || c.accept,
        r = angular.isString(q) && q ? new RegExp(e(q), "gi") : null,
        s = r ? null : c.ngAccept;b[0].addEventListener("dragover", function (d) {
      if ((d.preventDefault(), o && d.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1)) {
        var e = d.dataTransfer.effectAllowed;d.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy";
      }h.cancel(n), a.actualDragOverClass || (m = j(a, c, d)), b.addClass(m);
    }, !1), b[0].addEventListener("dragenter", function (a) {
      a.preventDefault(), o && a.stopPropagation();
    }, !1), b[0].addEventListener("dragleave", function () {
      n = h(function () {
        b.removeClass(m), m = null;
      }, p || 1);
    }, !1), "" != c.ngFileDrop && (c.ngFileChange = a.ngFileDrop), b[0].addEventListener("drop", function (d) {
      d.preventDefault(), o && d.stopPropagation(), b.removeClass(m), m = null, k(d, function (b, e) {
        h(function () {
          f && (g(c.ngModel).assign(a, b), f && f.$setViewValue(null != b && 0 == b.length ? "" : b)), c.ngModelRejected && a[c.ngModelRejected] && g(c.ngModelRejected).assign(a, e);
        }), h(function () {
          g(c.ngFileChange)(a, { $files: b, $rejectedFiles: e, $event: d });
        });
      }, 0 != g(c.allowDir)(a), c.multiple || g(c.ngMultiple)(a));
    }, !1);
  }function d() {
    var a = document.createElement("div");return "draggable" in a && "ondrop" in a;
  }function e(a) {
    if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) return a.substring(1, a.length - 1);var b = a.split(","),
        c = "";if (b.length > 1) for (var d = 0; d < b.length; d++) c += "(" + e(b[d]) + ")", d < b.length - 1 && (c += "|");else 0 == a.indexOf(".") && (a = "*" + a), c = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", c = c.replace(/\\\*/g, ".*").replace(/\\\?/g, ".");return c;
  }window.XMLHttpRequest && !window.XMLHttpRequest.__isFileAPIShim && a("setRequestHeader", function (a) {
    return function (b, c) {
      if ("__setXHR_" === b) {
        var d = c(this);d instanceof Function && d(this);
      } else a.apply(this, arguments);
    };
  });var f = angular.module("angularFileUpload", []);f.version = "3.1.2", f.service("$upload", ["$http", "$q", "$timeout", function (a, b, c) {
    function d(d) {
      d.method = d.method || "POST", d.headers = d.headers || {}, d.transformRequest = d.transformRequest || function (b, c) {
        return window.ArrayBuffer && b instanceof window.ArrayBuffer ? b : a.defaults.transformRequest[0](b, c);
      };var e = b.defer(),
          f = e.promise;return d.headers.__setXHR_ = function () {
        return function (a) {
          a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
            a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
              f.progress_fn(a);
            });
          }, !1), a.upload.addEventListener("load", function (a) {
            a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progress_fn && c(function () {
              f.progress_fn(a);
            }));
          }, !1));
        };
      }, a(d).then(function (a) {
        e.resolve(a);
      }, function (a) {
        e.reject(a);
      }, function (a) {
        e.notify(a);
      }), f.success = function (a) {
        return f.then(function (b) {
          a(b.data, b.status, b.headers, d);
        }), f;
      }, f.error = function (a) {
        return f.then(null, function (b) {
          a(b.data, b.status, b.headers, d);
        }), f;
      }, f.progress = function (a) {
        return f.progress_fn = a, f.then(null, null, function (b) {
          a(b);
        }), f;
      }, f.abort = function () {
        return d.__XHR && c(function () {
          d.__XHR.abort();
        }), f;
      }, f.xhr = function (a) {
        return d.xhrFn = (function (b) {
          return function () {
            b && b.apply(f, arguments), a.apply(f, arguments);
          };
        })(d.xhrFn), f;
      }, f;
    }this.upload = function (a) {
      a.headers = a.headers || {}, a.headers["Content-Type"] = void 0;a.transformRequest;return a.transformRequest = a.transformRequest ? "[object Array]" === Object.prototype.toString.call(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function (b) {
        var c = new FormData(),
            d = {};for (var e in a.fields) d[e] = a.fields[e];if ((b && (d.data = b), a.formDataAppender)) for (var e in d) a.formDataAppender(c, e, d[e]);else for (var e in d) {
          var f = d[e];void 0 !== f && ("[object String]" === Object.prototype.toString.call(f) ? c.append(e, f) : a.sendObjectsAsJsonBlob && "object" == typeof f ? c.append(e, new Blob([f], { type: "application/json" })) : c.append(e, JSON.stringify(f)));
        }if (null != a.file) {
          var g = a.fileFormDataName || "file";if ("[object Array]" === Object.prototype.toString.call(a.file)) for (var h = "[object String]" === Object.prototype.toString.call(g), i = 0; i < a.file.length; i++) c.append(h ? g : g[i], a.file[i], a.fileName && a.fileName[i] || a.file[i].name);else c.append(g, a.file, a.fileName || a.file.name);
        }return c;
      }), d(a);
    }, this.http = function (a) {
      return d(a);
    };
  }]), f.directive("ngFileSelect", ["$parse", "$timeout", "$compile", function (a, c, d) {
    return { restrict: "AEC", require: "?ngModel", link: function link(e, f, g, h) {
        b(e, f, g, h, a, c, d);
      } };
  }]), f.directive("ngFileDrop", ["$parse", "$timeout", "$location", function (a, b, d) {
    return { restrict: "AEC", require: "?ngModel", link: function link(e, f, g, h) {
        c(e, f, g, h, a, b, d);
      } };
  }]), f.directive("ngNoFileDrop", function () {
    return function (a, b) {
      d() && b.css("display", "none");
    };
  }), f.directive("ngFileDropAvailable", ["$parse", "$timeout", function (a, b) {
    return function (c, e, f) {
      if (d()) {
        var g = a(f.ngFileDropAvailable);b(function () {
          g(c);
        });
      }
    };
  }]);var g = angular.module("ngFileUpload", []);for (var h in f) g[h] = f[h];
})();

},{}],80:[function(require,module,exports){
"use strict";

angular.module("ngFabForm", ["ngMessages"]), angular.module("ngFabForm").directive("form", ["ngFabFormDirective", function (a) {
  "use strict";return a;
}]), angular.module("ngFabForm").directive("input", ["ngFabFormValidationsDirective", function (a) {
  "use strict";return a;
}]), angular.module("ngFabForm").directive("textarea", ["ngFabFormValidationsDirective", function (a) {
  "use strict";return a;
}]), angular.module("ngFabForm").directive("select", ["ngFabFormValidationsDirective", function (a) {
  "use strict";return a;
}]), angular.module("ngFabForm").provider("ngFabForm", function () {
  "use strict";function a(a, b) {
    var d = angular.element(angular.element("<div/>").html(a));return angular.forEach(b, function (a, b) {
      var e = new RegExp(c.validationMsgPrefix);if (b.match(e)) {
        var f = b.replace(c.validationMsgPrefix, "");f = f.charAt(0).toLowerCase() + f.slice(1);var g = d[0].querySelector('[ng-message="' + f + '"]');angular.element(g).html(a);
      }
    }), d;
  }var b,
      c = { validationsTemplate: "default-validation-msgs.html", preventInvalidSubmit: !0, preventDoubleSubmit: !0, preventDoubleSubmitTimeoutLength: 1e3, setFormDirtyOnSubmit: !0, scrollToAndFocusFirstErrorOnSubmit: !0, scrollAnimationTime: 500, scrollOffset: -100, disabledForms: !0, globalFabFormDisable: !1, setNovalidate: !0, setNamesByNgModel: !0, setAsteriskForRequiredLabel: !1, asteriskStr: "*", validationMsgPrefix: "validationMsg", emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, watchForFormCtrl: !1, formChangeEvent: "NG_FAB_FORM_OPTIONS_CHANGED" },
      d = function d(a, b, c) {
    "checkbox" === c.type || "radio" === c.type ? b.parent().after(a) : b.after(a);
  },
      e = (function () {
    function a(a, b, c, d) {
      return (a /= d / 2) < 1 ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b;
    }function b(a, b) {
      var c = 500,
          d = Math.abs(a),
          e = b / 10;return b * d / c + e;
    }return function (c, d, e) {
      function f() {
        l += m;var b = a(l, j, k, i);window.scrollTo(h, b), i > l ? setTimeout(f, m) : c.focus();
      }var g = c.getBoundingClientRect().top + parseInt(e),
          h = c.getBoundingClientRect().left,
          i = b(g, d),
          j = window.pageYOffset,
          k = g,
          l = 0,
          m = 20;return 0 === k ? void c.focus() : void f();
    };
  })();return { extendConfig: function extendConfig(a) {
      c = angular.extend(c, a);
    }, setInsertErrorTplFn: function setInsertErrorTplFn(a) {
      d = a;
    }, setScrollToFn: function setScrollToFn(a) {
      e = a;
    }, setCustomValidatorsFn: function setCustomValidatorsFn(a) {
      b = a;
    }, $get: function $get() {
      return { insertErrorTpl: d, addCustomValidations: a, customValidators: b, scrollTo: e, config: c };
    } };
}), angular.module("ngFabForm").run(["$templateCache", function (a) {
  "use strict";a.put("default-validation-msgs.html", '<div ng-messages="field.$error" class="validation" ng-show="attrs.required==\'\'|| attrs.required"><ul class="list-unstyled validation-errors" ng-show="field.$invalid && (field.$touched || field.$dirty || form.$triedSubmit)"><li ng-message="required">This field is required</li><li ng-message="ngFabEnsureExpression">Not valid condition</li><li ng-message="password">Please enter a valid password</li><li ng-message="email">Please enter a valid e-mail</li><li ng-message="pattern">Invalid input format</li><li ng-message="date">Please enter a valid date</li><li ng-message="time">Please enter a valid time</li><li ng-message="datetime">Please enter a valid date and time</li><li ng-message="datetime-local">Please enter a valid date and time</li><li ng-message="number">This field must be numeric</li><li ng-message="color">Please enter a valid color</li><li ng-message="range">Please enter a valid range</li><li ng-message="month">Please enter a valid month</li><li ng-message="url">Please enter a valid URL</li><li ng-message="file">Invalid file</li><li ng-message="minlength">Please use at least {{ attrs.minlength }} characters</li><li ng-message="maxlength">Please do not exceed {{ attrs.maxlength }} characters</li><li ng-message="ngFabMatch">The {{ attrs.type ===\'password\'? \'passwords\' : \'values\' }} should match</li><li ng-if="attrs.type == \'time\' " ng-message="min">The time provided should after {{ attrs.min |date: \'HH:MM\' }}</li><li ng-message="max" ng-if="attrs.type == \'time\' ">The time provided should be before {{attrs.max |date: \'HH:MM\'}}</li><li ng-message="min" ng-if="attrs.type == \'date\' ">The date provided should be after {{attrs.min |date:\'dd.MM.yy\'}}</li><li ng-message="max" ng-if="attrs.type == \'date\' ">The date provided should be before {{attrs.max |date: \'dd.MM.yy\'}}</li></ul><div class="validation-success" ng-show="field.$valid && !field.$invalid"></div></div>');
}]), angular.module("ngFabForm").factory("ngFabFormValidationsDirective", ["ngFabForm", "$compile", "$templateRequest", "$rootScope", "$timeout", function (a, b, c, d, e) {
  "use strict";function f(e) {
    var f = e.el,
        g = e.cfg,
        h = e.formCtrl,
        i = e.ngModelCtrl,
        j = e.attrs;e.currentValidationVars.tpl && 0 !== Object.keys(e.currentValidationVars.tpl).length && angular.element(e.currentValidationVars.tpl).remove(), c(g.validationsTemplate).then(function (c) {
      var g = d.$new(!0);e.currentValidationVars.privateScope = g, c = a.addCustomValidations(c, j), g.attrs = j, g.form = h, g.field = i;var k = b(c.children())(g);e.currentValidationVars.tpl = k[0], a.insertErrorTpl(k[0], f, j);
    });
  }function g(a, b, c) {
    var d = document.querySelectorAll('label[for="' + b.name + '"]');if (!d || d.length < 1) {
      var e = a[0].previousElementSibling;e && "LABEL" === e.tagName && (d = [e]);
    }if (d && d.length > 0 && "radio" !== b.type && "checkbox" !== b.type) for (var f = 0; f < d.length; f++) {
      var g = d[f];g.textContent.slice(-c.asteriskStr.length) !== c.asteriskStr && (g.textContent = g.textContent + c.asteriskStr);
    }
  }return { restrict: "E", require: "?ngModel", compile: function compile(b, c) {
      return !c.type || "submit" !== c.type.toLowerCase() && "button" !== c.type.toLowerCase() ? (a.config.setNamesByNgModel && c.ngModel && !c.name && !a.config.globalFabFormDisable && (b.attr("name", c.ngModel), c.name = c.ngModel), function (b, c, d, h) {
        function i(a) {
          !h || !k.validationsTemplate || 0 === Object.keys(h.$validators).length && 0 === Object.keys(h.$asyncValidators).length || a && k.validationsTemplate === a.validationsTemplate ? !k.validationsTemplate && o.tpl && 0 !== Object.keys(o.tpl).length && (o.privateScope.$destroy(), angular.element(o.tpl).remove()) : f({ el: c, cfg: k, formCtrl: l, ngModelCtrl: h, attrs: d, currentValidationVars: o }), !k.setAsteriskForRequiredLabel || d.required !== !0 || a && k.setAsteriskForRequiredLabel === a.setAsteriskForRequiredLabel && k.asteriskStr === a.asteriskStr || g(c, d, k);
        }function j() {
          e(function () {
            if ((l = c.controller("form"), l && h)) {
              if ((k || (k = l.ngFabFormConfig), !k)) return;k.emailRegex && "email" === d.type && (h.$validators.email = function (a) {
                return h.$isEmpty(a) || k.emailRegex.test(a);
              }), a.customValidators && a.customValidators(h, d), i(), m = b.$on(a.formChangeEvent, function (a, b, c) {
                k = b, i(c);
              });
            }
          }, 0);
        }var k,
            l,
            m,
            n,
            o = { tpl: void 0, privateScope: void 0 };a.config.watchForFormCtrl ? n = b.$watch(function () {
          return c.controller("form");
        }, function (a) {
          a && (n(), j());
        }) : j(), b.$on("$destroy", function () {
          o && o.privateScope && o.privateScope.$destroy();
        });
      }) : void 0;
    } };
}]), angular.module("ngFabForm").directive("ngFabEnsureExpression", ["$http", "$parse", function (a, b) {
  "use strict";return { require: "ngModel", link: function link(a, c, d, e) {
      a.$watch(d.ngModel, function () {
        var c = b(d.ngFabEnsureExpression)(a);e.$setValidity("ngFabEnsureExpression", c), e.$validate();
      });
    } };
}]), angular.module("ngFabForm").directive("ngFabMatch", function () {
  "use strict";return { require: "ngModel", restrict: "A", scope: { ngFabMatch: "=" }, link: function link(a, b, c, d) {
      d.$validators.ngFabMatch = function (b) {
        return Boolean(b) && b == a.ngFabMatch;
      }, a.$watch("ngFabMatch", function () {
        d.$validate();
      });
    } };
}), angular.module("ngFabForm").directive("ngFabResetFormOn", function () {
  "use strict";return { require: "^form", restrict: "A", scope: { ngFabResetFormOn: "@", doNotClearInputs: "@" }, link: function link(a, b, c, d) {
      c.ngFabResetFormOn || (c.ngFabResetFormOn = "click"), b.on(c.ngFabResetFormOn, function () {
        c.doNotClearInputs ? d.$resetForm() : d.$resetForm(!0), a.$apply();
      });
    } };
}), angular.module("ngFabForm").factory("ngFabFormDirective", ["$compile", "$timeout", "ngFabForm", function (a, b, c) {
  "use strict";function d(a) {
    a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation();
  }function e(a, b) {
    if (b.disableForm) {
      a.contents().wrap("<fieldset>");var c = a.children();b.$observe("disableForm", function () {
        "true" === b.disableForm || b.disableForm === !0 ? c.attr("disabled", !0) : c.attr("disabled", !1);
      });
    }
  }function f(a, b, d, e) {
    var f = a[0].querySelector(".ng-invalid");f && b.$invalid && c.scrollTo(f, parseInt(d), e);
  }return { restrict: "EAC", scope: !1, require: "form", compile: function compile(a, g) {
      var h,
          i = angular.copy(c.config);if (i.globalFabFormDisable !== !0 || !angular.isUndefined(g.ngFabForm)) return !g.novalidate && i.setNovalidate && (a.attr("novalidate", !0), g.novalidate = !0), { pre: function pre(a, c, e, g) {
          c.bind("submit", function (e) {
            i.setFormDirtyOnSubmit && a.$apply(function () {
              g.$triedSubmit = !0;
            }), i.preventInvalidSubmit && !g.$valid ? d(e) : i.preventDoubleSubmit && (g.$preventDoubleSubmit && d(e), h && b.cancel(h), g.$preventDoubleSubmit = !0, h = b(function () {
              g.$preventDoubleSubmit = !1;
            }, i.preventDoubleSubmitTimeoutLength)), i.scrollToAndFocusFirstErrorOnSubmit && f(c, g, i.scrollAnimationTime, i.scrollOffset);
          });
        }, post: function post(a, d, f, g) {
          g.$triedSubmit = !1, g.$preventDoubleSubmit = !1, g.ngFabFormConfig = i, g.$resetForm = function (a) {
            if (a === !0) for (var b = d.find("input"), c = 0; c < b.length; c++) {
              var e = angular.element(b[c]),
                  f = e.controller("ngModel");f && (f.$setViewValue(""), f.$render());
            }g.$triedSubmit = !1, g.$setPristine(), g.$setUntouched();
          }, i.disabledForms && e(d, f), f.ngFabFormOptions && a.$watch(f.ngFabFormOptions, function (b) {
            if (b) {
              var d = angular.copy(i);i = g.ngFabFormConfig = angular.extend(i, b), a.$broadcast(c.formChangeEvent, i, d);
            }
          }, !0), a.$on("$destroy", function () {
            h && b.cancel(h);
          });
        } };
    } };
}]), angular.module("ngFabForm").directive("ngForm", ["ngFabFormDirective", function (a) {
  "use strict";return a;
}]);

},{}]},{},[70]);
