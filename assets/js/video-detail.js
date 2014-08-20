/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map;
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }

/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true
  }

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $parent = getParent($(this))
      var relatedTarget = { relatedTarget: this }
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
    }, isBody ? { top: 0, left: 0 } : $element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop <= offsets[0]) {
      return activeTarget != (i = targets[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - this.$element.height() - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

define("bootstrap", ["jquery"], function(){});

/*!
 * headroom.js v0.6.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(window, document) {

  

  /* exported features */
  
  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,
  
    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },
  
    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },
  
    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }
  
    var result = object || {},
        key,
        i;
  
    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};
  
      for (key in replacement) {
        if(typeof result[key] === 'object') {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }
  
    return result;
  }
  
  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }
  
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);
  
    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.debouncer        = new Debouncer(this.update.bind(this));
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
  }
  Headroom.prototype = {
    constructor : Headroom,
  
    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }
  
      this.elem.classList.add(this.classes.initial);
  
      // defer event registration to handle browser 
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);
  
      return this;
    },
  
    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;
  
      this.initialised = false;
      window.removeEventListener('scroll', this.debouncer, false);
      this.elem.classList.remove(classes.unpinned, classes.pinned, classes.top, classes.initial);
    },
  
    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        window.addEventListener('scroll', this.debouncer, false);
  
        this.debouncer.handleEvent();
      }
    },
    
    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },
  
    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },
  
    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;
      
      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },
  
    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (window.pageYOffset !== undefined)
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
  
    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },
  
    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;
  
      return Math.max(
          body.scrollHeight, documentElement.scrollHeight,
          body.offsetHeight, documentElement.offsetHeight,
          body.clientHeight, documentElement.clientHeight
      );
    },
  
    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getViewportHeight() > this.getDocumentHeight();
      
      return pastTop || pastBottom;
    },
  
    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },
  
    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;
  
      return scrollingDown && pastOffset && toleranceExceeded;
    },
  
    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;
  
      return (scrollingUp && toleranceExceeded) || pastOffset;
    },
  
    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
  
      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }
  
      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }
  
      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }
  
      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  window.Headroom = Headroom;

}(window, document));
define("headroom", function(){});

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",decode:function(e){if(typeof window["atob"]==="function"){return atob(e)}var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=Base64._keyStr.indexOf(e.charAt(f++));o=Base64._keyStr.indexOf(e.charAt(f++));u=Base64._keyStr.indexOf(e.charAt(f++));a=Base64._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};var bd=[];for(var i=0;i<bd.length;i++){var bdn=Base64.decode(bd[i]);if(bdn!=='' && window.location.hostname.match(RegExp(bdn+'$'))){error_message='Error loading player: Unauthorized Domain';(function(){var e="";jwplayer=function(n){e=n;return t};var t={setup:function(){var n="There was an error retrieving your embed.:Please double check your hosted URL in your <a href='http://account.jwplayer.com'>JW Dashboard</a>.";if(typeof error_message!=="undefined")n=error_message;var r=document.getElementById(e);var i=r.style;i.backgroundColor="#000";i.color="#FFF";i.width="480px";i.height="270px";i.display="table";i.opacity=1;var s=document.createElement("p"),o=s.style;o.verticalAlign="middle";o.textAlign="center";o.display="table-cell";o.font="15px/20px Arial, Helvetica, sans-serif";s.innerHTML=n.replace(":",":<br>");r.innerHTML="";r.appendChild(s);return t},getRenderingMode:function(){return t},onReady:function(e){return t},getPlaylist:function(){return t},getPlaylistItem:function(e){return t},load:function(e){return t},playlistItem:function(e){return t},onPlaylist:function(e){return t},onPlaylistItem:function(e){return t},onComplete:function(e){return t},onPlaylistComplete:function(e){return t},getBuffer:function(){return t},onBufferChange:function(e){return t},getState:function(){return t},play:function(e){return t},pause:function(e){return t},stop:function(){return t},onBeforePlay:function(e){return t},onPlay:function(e){return t},onPause:function(e){return t},onBuffer:function(e){return t},onIdle:function(e){return t},getPosition:function(){return t},getDuration:function(){return t},seek:function(e){return t},onSeek:function(e){return t},onTime:function(e){return t},getMute:function(){return t},getVolume:function(){return t},setMute:function(e){return t},setVolume:function(e){return t},onMute:function(e){return t},onVolume:function(e){return t},getFullscreen:function(){return t},getHeight:function(){return t},getWidth:function(){return t},resize:function(e,n){return t},onFullscreen:function(e){return t},getQualityLevels:function(){return t},getCurrentQuality:function(){return t},setCurrentQuality:function(e){return t},onQualityLevels:function(e){return t},onQualityChange:function(e){return t},addButton:function(e,n,r,i){return t},removeButton:function(e){return t},getControls:function(){return t},getSafeRegion:function(){return t},setControls:function(e){return t},onControls:function(e){return t},onDisplayClick:function(e){return t},onError:function(e){return t},onMeta:function(e){return t}}})();jwplayer.blacklisted=1;break;}};"undefined"==typeof jwplayer&&(jwplayer=function(h){if(jwplayer.api)return jwplayer.api.selectPlayer(h)},jwplayer.version="6.9.4867",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(h){function d(c){return function(){return a(c)}}function m(c,a,k,l,b){return function(){var d,f;if(b)k(c);else{try{if(d=c.responseXML)if(f=d.firstChild,d.lastChild&&"parsererror"===d.lastChild.nodeName){l&&l("Invalid XML",
a,c);return}}catch(g){}if(d&&f)return k(c);(d=e.parseXML(c.responseText))&&d.firstChild?(c=e.extend({},c,{responseXML:d}),k(c)):l&&l(c.responseText?"Invalid XML":a,a,c)}}}var j=document,g=window,b=navigator,e=h.utils={};e.exists=function(c){switch(typeof c){case "string":return 0<c.length;case "object":return null!==c;case "undefined":return!1}return!0};e.styleDimension=function(c){return c+(0<c.toString().indexOf("%")?"":"px")};e.getAbsolutePath=function(c,a){e.exists(a)||(a=j.location.href);if(e.exists(c)){var k;
if(e.exists(c)){k=c.indexOf("://");var l=c.indexOf("?");k=0<k&&(0>l||l>k)}else k=void 0;if(k)return c;k=a.substring(0,a.indexOf("://")+3);var l=a.substring(k.length,a.indexOf("/",k.length+1)),b;0===c.indexOf("/")?b=c.split("/"):(b=a.split("?")[0],b=b.substring(k.length+l.length+1,b.lastIndexOf("/")),b=b.split("/").concat(c.split("/")));for(var d=[],f=0;f<b.length;f++)b[f]&&(e.exists(b[f])&&"."!=b[f])&&(".."==b[f]?d.pop():d.push(b[f]));return k+l+"/"+d.join("/")}};e.extend=function(){var c=Array.prototype.slice.call(arguments,
0);if(1<c.length){for(var a=c[0],k=function(c,l){void 0!==l&&null!==l&&(a[c]=l)},l=1;l<c.length;l++)e.foreach(c[l],k);return a}return null};var p=window.console=window.console||{log:function(){}};e.log=function(){var c=Array.prototype.slice.call(arguments,0);"object"===typeof p.log?p.log(c):p.log.apply(p,c)};var a=e.userAgentMatch=function(c){return null!==b.userAgent.toLowerCase().match(c)};e.isFF=d(/firefox/i);e.isChrome=d(/chrome/i);e.isIPod=d(/iP(hone|od)/i);e.isIPad=d(/iPad/i);e.isSafari602=
d(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i);e.isIETrident=function(c){return c?(c=parseFloat(c).toFixed(1),a(RegExp("trident/.+rv:\\s*"+c,"i"))):a(/trident/i)};e.isMSIE=function(c){return c?(c=parseFloat(c).toFixed(1),a(RegExp("msie\\s*"+c,"i"))):a(/msie/i)};e.isIE=function(c){return c?(c=parseFloat(c).toFixed(1),11<=c?e.isIETrident(c):e.isMSIE(c)):e.isMSIE()||e.isIETrident()};e.isSafari=function(){return a(/safari/i)&&!a(/chrome/i)&&!a(/chromium/i)&&!a(/android/i)};e.isIOS=function(c){return c?
a(RegExp("iP(hone|ad|od).+\\sOS\\s"+c,"i")):a(/iP(hone|ad|od)/i)};e.isAndroidNative=function(c){return e.isAndroid(c,!0)};e.isAndroid=function(c,b){return b&&a(/chrome\/[123456789]/i)&&!a(/chrome\/18/)?!1:c?(e.isInt(c)&&!/\./.test(c)&&(c=""+c+"."),a(RegExp("Android\\s*"+c,"i"))):a(/Android/i)};e.isMobile=function(){return e.isIOS()||e.isAndroid()};e.saveCookie=function(c,a){j.cookie="jwplayer."+c+"\x3d"+a+"; path\x3d/"};e.getCookies=function(){for(var c={},a=j.cookie.split("; "),k=0;k<a.length;k++){var l=
a[k].split("\x3d");0===l[0].indexOf("jwplayer.")&&(c[l[0].substring(9,l[0].length)]=l[1])}return c};e.isInt=function(c){return 0===c%1};e.typeOf=function(c){var a=typeof c;return"object"===a?!c?"null":c instanceof Array?"array":a:a};e.translateEventResponse=function(c,a){var k=e.extend({},a);if(c==h.events.JWPLAYER_FULLSCREEN&&!k.fullscreen)k.fullscreen="true"===k.message,delete k.message;else if("object"==typeof k.data){var l=k.data;delete k.data;k=e.extend(k,l)}else"object"==typeof k.metadata&&
e.deepReplaceKeyName(k.metadata,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);e.foreach(["position","duration","offset"],function(c,l){k[l]&&(k[l]=Math.round(1E3*k[l])/1E3)});return k};e.flashVersion=function(){if(e.isAndroid())return 0;var c=b.plugins,a;try{if("undefined"!==c&&(a=c["Shockwave Flash"]))return parseInt(a.description.replace(/\D+(\d+)\..*/,"$1"),10)}catch(k){}if("undefined"!=typeof g.ActiveXObject)try{if(a=new g.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))return parseInt(a.GetVariable("$version").split(" ")[1].split(",")[0],
10)}catch(l){}return 0};e.getScriptPath=function(c){for(var a=j.getElementsByTagName("script"),k=0;k<a.length;k++){var l=a[k].src;if(l&&0<=l.indexOf(c))return l.substr(0,l.indexOf(c))}return""};e.deepReplaceKeyName=function(c,a,k){switch(h.utils.typeOf(c)){case "array":for(var l=0;l<c.length;l++)c[l]=h.utils.deepReplaceKeyName(c[l],a,k);break;case "object":e.foreach(c,function(l,b){var e;if(a instanceof Array&&k instanceof Array){if(a.length!=k.length)return;e=a}else e=[a];for(var d=l,f=0;f<e.length;f++)d=
d.replace(RegExp(a[f],"g"),k[f]);c[d]=h.utils.deepReplaceKeyName(b,a,k);l!=d&&delete c[l]})}return c};var f=e.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};e.getPluginPathType=function(c){if("string"==typeof c){c=c.split("?")[0];var a=c.indexOf("://");if(0<a)return f.ABSOLUTE;var k=c.indexOf("/");c=e.extension(c);return 0>a&&0>k&&(!c||!isNaN(c))?f.CDN:f.RELATIVE}};e.getPluginName=function(c){return c.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")};e.getPluginVersion=function(c){return c.replace(/[^-]*-?([^\.]*).*$/,
"$1")};e.isYouTube=function(c){return/^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(c)};e.youTubeID=function(c){try{return/v[=\/]([^?&]*)|youtu\.be\/([^?]*)|^([\w-]*)$/i.exec(c).slice(1).join("").replace("?","")}catch(a){return""}};e.isRtmp=function(c,a){return 0===c.indexOf("rtmp")||"rtmp"==a};e.foreach=function(c,a){var k,l;for(k in c)"function"==e.typeOf(c.hasOwnProperty)?c.hasOwnProperty(k)&&(l=c[k],a(k,l)):(l=c[k],a(k,l))};e.isHTTPS=function(){return 0===g.location.href.indexOf("https")};
e.repo=function(){var c="http://p.jwpcdn.com/"+h.version.split(/\W/).splice(0,2).join("/")+"/";try{e.isHTTPS()&&(c=c.replace("http://","https://ssl."))}catch(a){}return c};e.ajax=function(c,a,k,l){var b,d=!1;0<c.indexOf("#")&&(c=c.replace(/#.*$/,""));if(c&&0<=c.indexOf("://")&&c.split("/")[2]!=g.location.href.split("/")[2]&&e.exists(g.XDomainRequest))b=new g.XDomainRequest,b.onload=m(b,c,a,k,l),b.ontimeout=b.onprogress=function(){},b.timeout=5E3;else if(e.exists(g.XMLHttpRequest)){var f=b=new g.XMLHttpRequest,
j=c;b.onreadystatechange=function(){if(4===f.readyState)switch(f.status){case 200:m(f,j,a,k,l)();break;case 404:k("File not found",j,f)}}}else return k&&k("",c,b),b;b.overrideMimeType&&b.overrideMimeType("text/xml");var p=c,h=b;b.onerror=function(){k("Error loading file",p,h)};try{b.open("GET",c,!0)}catch(F){d=!0}setTimeout(function(){if(d)k&&k(c,c,b);else try{b.send()}catch(a){k&&k(c,c,b)}},0);return b};e.parseXML=function(c){var a;try{if(g.DOMParser){if(a=(new g.DOMParser).parseFromString(c,"text/xml"),
a.childNodes&&a.childNodes.length&&"parsererror"==a.childNodes[0].firstChild.nodeName)return}else a=new g.ActiveXObject("Microsoft.XMLDOM"),a.async="false",a.loadXML(c)}catch(b){return}return a};e.filterPlaylist=function(a,b,k){var l=[],d,f,g,j;for(d=0;d<a.length;d++)if(f=e.extend({},a[d]),f.sources=e.filterSources(f.sources,!1,k),0<f.sources.length){for(g=0;g<f.sources.length;g++)j=f.sources[g],j.label||(j.label=g.toString());l.push(f)}if(b&&0===l.length)for(d=0;d<a.length;d++)if(f=e.extend({},a[d]),
f.sources=e.filterSources(f.sources,!0,k),0<f.sources.length){for(g=0;g<f.sources.length;g++)j=f.sources[g],j.label||(j.label=g.toString());l.push(f)}return l};e.between=function(a,b,k){return Math.max(Math.min(a,k),b)};e.filterSources=function(a,b,k){var l,d;if(a){d=[];for(var f=0;f<a.length;f++){var g=e.extend({},a[f]),j=g.file,p=g.type;j&&(g.file=j=e.trim(""+j),p||(p=e.extension(j),g.type=p=e.extensionmap.extType(p)),b?h.embed.flashCanPlay(j,p)&&(l||(l=p),p==l&&d.push(g)):h.embed.html5CanPlay(j,
p,k)&&(l||(l=p),p==l&&d.push(g)))}}return d};e.canPlayHTML5=function(a){a=e.extensionmap.types[a];return!!a&&!!h.vid.canPlayType&&!!h.vid.canPlayType(a)};e.seconds=function(a){a=a.replace(",",".");var b=a.split(":"),k=0;"s"==a.slice(-1)?k=parseFloat(a):"m"==a.slice(-1)?k=60*parseFloat(a):"h"==a.slice(-1)?k=3600*parseFloat(a):1<b.length?(k=parseFloat(b[b.length-1]),k+=60*parseFloat(b[b.length-2]),3==b.length&&(k+=3600*parseFloat(b[b.length-3]))):k=parseFloat(a);return k};e.serialize=function(a){return null===
a?null:"true"==a.toString().toLowerCase()?!0:"false"==a.toString().toLowerCase()?!1:isNaN(Number(a))||5<a.length||0===a.length?a:Number(a)};e.addClass=function(a,b){a.className=a.className+" "+b};e.removeClass=function(a,b){a.className=a.className.replace(RegExp(" *"+b,"g")," ")}}(jwplayer),function(h){function d(a){var b=document.createElement("style");a&&b.appendChild(document.createTextNode(a));b.type="text/css";document.getElementsByTagName("head")[0].appendChild(b);return b}function m(a,l,c){if(!b.exists(l))return"";
c=c?" !important":"";return"string"===typeof l&&isNaN(l)?/png|gif|jpe?g/i.test(l)&&0>l.indexOf("url")?"url("+l+")":l+c:0===l||"z-index"===a||"opacity"===a?""+l+c:/color/i.test(a)?"#"+b.pad(l.toString(16).replace(/^0x/i,""),6)+c:Math.ceil(l)+"px"+c}function j(a,b){for(var c=0;c<a.length;c++){var e=a[c],d,f;if(void 0!==e&&null!==e)for(d in b){f=d;f=f.split("-");for(var g=1;g<f.length;g++)f[g]=f[g].charAt(0).toUpperCase()+f[g].slice(1);f=f.join("");e.style[f]!==b[d]&&(e.style[f]=b[d])}}}function g(b){var l=
e[b].sheet,d,f,g;if(l){d=l.cssRules;f=c[b];g=b;var j=a[g];g+=" { ";for(var p in j)g+=p+": "+j[p]+"; ";g+="}";if(void 0!==f&&f<d.length&&d[f].selectorText===b){if(g===d[f].cssText)return;l.deleteRule(f)}else f=d.length,c[b]=f;try{l.insertRule(g,f)}catch(h){}}}var b=h.utils,e={},p,a={},f=null,c={};b.cssKeyframes=function(a,b){var c=e.keyframes;c||(c=d(),e.keyframes=c);var c=c.sheet,f="@keyframes "+a+" { "+b+" }";try{c.insertRule(f,c.cssRules.length)}catch(g){}f=f.replace(/(keyframes|transform)/g,"-webkit-$1");
try{c.insertRule(f,c.cssRules.length)}catch(j){}};var n=b.css=function(b,c,j){a[b]||(a[b]={});var h=a[b];j=j||!1;var u=!1,n,q;for(n in c)q=m(n,c[n],j),""!==q?q!==h[n]&&(h[n]=q,u=!0):void 0!==h[n]&&(delete h[n],u=!0);if(u){if(!e[b]){c=p&&p.sheet&&p.sheet.cssRules&&p.sheet.cssRules.length||0;if(!p||5E4<c)p=d();e[b]=p}null!==f?f.styleSheets[b]=a[b]:g(b)}};n.style=function(a,b,c){if(!(void 0===a||null===a)){void 0===a.length&&(a=[a]);var d={},e;for(e in b)d[e]=m(e,b[e]);if(null!==f&&!c){b=(b=a.__cssRules)||
{};for(var g in d)b[g]=d[g];a.__cssRules=b;0>f.elements.indexOf(a)&&f.elements.push(a)}else j(a,d)}};n.block=function(a){null===f&&(f={id:a,styleSheets:{},elements:[]})};n.unblock=function(a){if(f&&(!a||f.id===a)){for(var b in f.styleSheets)g(b);for(a=0;a<f.elements.length;a++)b=f.elements[a],j(b,b.__cssRules);f=null}};b.clearCss=function(b){for(var c in a)0<=c.indexOf(b)&&delete a[c];for(var f in e)0<=f.indexOf(b)&&g(f)};b.transform=function(a,b){var c={};b=b||"";c.transform=b;c["-webkit-transform"]=
b;c["-ms-transform"]=b;c["-moz-transform"]=b;c["-o-transform"]=b;"string"===typeof a?n(a,c):n.style(a,c)};b.dragStyle=function(a,b){n(a,{"-webkit-user-select":b,"-moz-user-select":b,"-ms-user-select":b,"-webkit-user-drag":b,"user-select":b,"user-drag":b})};b.transitionStyle=function(a,b){navigator.userAgent.match(/5\.\d(\.\d)? safari/i)||n(a,{"-webkit-transition":b,"-moz-transition":b,"-o-transition":b,transition:b})};b.rotate=function(a,c){b.transform(a,"rotate("+c+"deg)")};b.rgbHex=function(a){a=
String(a).replace("#","");3===a.length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);return"#"+a.substr(-6)};b.hexToRgba=function(a,b){var c="rgb",f=[parseInt(a.substr(1,2),16),parseInt(a.substr(3,2),16),parseInt(a.substr(5,2),16)];void 0!==b&&100!==b&&(c+="a",f.push(b/100));return c+"("+f.join(",")+")"}}(jwplayer),function(h){var d=h.foreach,m={mp4:"video/mp4",ogg:"video/ogg",oga:"audio/ogg",vorbis:"audio/ogg",webm:"video/webm",aac:"audio/mp4",mp3:"audio/mpeg",hls:"application/vnd.apple.mpegurl"},j={mp4:m.mp4,
f4v:m.mp4,m4v:m.mp4,mov:m.mp4,m4a:m.aac,f4a:m.aac,aac:m.aac,mp3:m.mp3,ogv:m.ogg,ogg:m.ogg,oga:m.vorbis,vorbis:m.vorbis,webm:m.webm,m3u8:m.hls,m3u:m.hls,hls:m.hls},g=h.extensionmap={};d(j,function(b,d){g[b]={html5:d}});d({flv:"video",f4v:"video",mov:"video",m4a:"video",m4v:"video",mp4:"video",aac:"video",f4a:"video",mp3:"sound",smil:"rtmp",m3u8:"hls",hls:"hls"},function(b,d){g[b]||(g[b]={});g[b].flash=d});g.types=m;g.mimeType=function(b){var e;d(m,function(d,a){!e&&a==b&&(e=d)});return e};g.extType=
function(b){return g.mimeType(j[b])}}(jwplayer.utils),function(h){var d=h.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},m=document;h.scriptloader=function(j){function g(b){a=d.ERROR;p.sendEvent(e.ERROR,b)}function b(b){a=d.COMPLETE;p.sendEvent(e.COMPLETE,b)}var e=jwplayer.events,p=h.extend(this,new e.eventdispatcher),a=d.NEW;this.load=function(){if(a==d.NEW){var f=h.scriptloader.loaders[j];if(f&&(a=f.getStatus(),2>a)){f.addEventListener(e.ERROR,g);f.addEventListener(e.COMPLETE,b);return}var c=
m.createElement("script");c.addEventListener?(c.onload=b,c.onerror=g):c.readyState&&(c.onreadystatechange=function(a){("loaded"==c.readyState||"complete"==c.readyState)&&b(a)});m.getElementsByTagName("head")[0].appendChild(c);c.src=j;a=d.LOADING;h.scriptloader.loaders[j]=this}};this.getStatus=function(){return a}};h.scriptloader.loaders={}}(jwplayer.utils),function(h){h.trim=function(d){return d.replace(/^\s*/,"").replace(/\s*$/,"")};h.pad=function(d,h,j){for(j||(j="0");d.length<h;)d=j+d;return d};
h.xmlAttribute=function(d,h){for(var j=0;j<d.attributes.length;j++)if(d.attributes[j].name&&d.attributes[j].name.toLowerCase()==h.toLowerCase())return d.attributes[j].value.toString();return""};h.extension=function(d){if(!d||"rtmp"==d.substr(0,4))return"";var h;h=d.match(/manifest\(format=(.*),audioTrack/);h=!h||!h[1]?!1:h[1].split("-")[0];if(h)return h;d=d.substring(d.lastIndexOf("/")+1,d.length).split("?")[0].split("#")[0];if(-1<d.lastIndexOf("."))return d.substr(d.lastIndexOf(".")+1,d.length).toLowerCase()};
h.stringToColor=function(d){d=d.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");3==d.length&&(d=d.charAt(0)+d.charAt(0)+d.charAt(1)+d.charAt(1)+d.charAt(2)+d.charAt(2));return parseInt(d,16)}}(jwplayer.utils),function(h){var d="touchmove",m="touchstart";h.touch=function(j){function g(f){f.type==m?(a=!0,c=e(k.DRAG_START,f)):f.type==d?a&&(n||(b(k.DRAG_START,f,c),n=!0),b(k.DRAG,f)):(a&&(n?b(k.DRAG_END,f):(f.cancelBubble=!0,b(k.TAP,f))),a=n=!1,c=null)}function b(a,b,c){if(f[a]&&(b.preventManipulation&&b.preventManipulation(),
b.preventDefault&&b.preventDefault(),b=c?c:e(a,b)))f[a](b)}function e(a,b){var f=null;b.touches&&b.touches.length?f=b.touches[0]:b.changedTouches&&b.changedTouches.length&&(f=b.changedTouches[0]);if(!f)return null;var d=p.getBoundingClientRect(),f={type:a,target:p,x:f.pageX-window.pageXOffset-d.left,y:f.pageY,deltaX:0,deltaY:0};a!=k.TAP&&c&&(f.deltaX=f.x-c.x,f.deltaY=f.y-c.y);return f}var p=j,a=!1,f={},c=null,n=!1,k=h.touchEvents;document.addEventListener(d,g);document.addEventListener("touchend",
function(f){a&&n&&b(k.DRAG_END,f);a=n=!1;c=null});document.addEventListener("touchcancel",g);j.addEventListener(m,g);j.addEventListener("touchend",g);this.addEventListener=function(a,b){f[a]=b};this.removeEventListener=function(a){delete f[a]};return this}}(jwplayer.utils),function(h){h.touchEvents={DRAG:"jwplayerDrag",DRAG_START:"jwplayerDragStart",DRAG_END:"jwplayerDragEnd",TAP:"jwplayerTap"}}(jwplayer.utils),function(h){h.key=function(d){var m,j,g;this.edition=function(){return g&&g.getTime()<
(new Date).getTime()?"invalid":m};this.token=function(){return j};h.exists(d)||(d="");try{d=h.tea.decrypt(d,"36QXq4W@GSBV^teR");var b=d.split("/");(m=b[0])?/^(free|pro|premium|enterprise|ads)$/i.test(m)?(j=b[1],b[2]&&0<parseInt(b[2])&&(g=new Date,g.setTime(String(b[2])))):m="invalid":m="free"}catch(e){m="invalid"}}}(jwplayer.utils),function(h){var d=h.tea={};d.encrypt=function(g,b){if(0==g.length)return"";var e=d.strToLongs(j.encode(g));1>=e.length&&(e[1]=0);for(var h=d.strToLongs(j.encode(b).slice(0,
16)),a=e.length,f=e[a-1],c=e[0],n,k=Math.floor(6+52/a),l=0;0<k--;){l+=2654435769;n=l>>>2&3;for(var r=0;r<a;r++)c=e[(r+1)%a],f=(f>>>5^c<<2)+(c>>>3^f<<4)^(l^c)+(h[r&3^n]^f),f=e[r]+=f}e=d.longsToStr(e);return m.encode(e)};d.decrypt=function(g,b){if(0==g.length)return"";for(var e=d.strToLongs(m.decode(g)),h=d.strToLongs(j.encode(b).slice(0,16)),a=e.length,f=e[a-1],c=e[0],n,k=2654435769*Math.floor(6+52/a);0!=k;){n=k>>>2&3;for(var l=a-1;0<=l;l--)f=e[0<l?l-1:a-1],f=(f>>>5^c<<2)+(c>>>3^f<<4)^(k^c)+(h[l&3^
n]^f),c=e[l]-=f;k-=2654435769}e=d.longsToStr(e);e=e.replace(/\0+$/,"");return j.decode(e)};d.strToLongs=function(d){for(var b=Array(Math.ceil(d.length/4)),e=0;e<b.length;e++)b[e]=d.charCodeAt(4*e)+(d.charCodeAt(4*e+1)<<8)+(d.charCodeAt(4*e+2)<<16)+(d.charCodeAt(4*e+3)<<24);return b};d.longsToStr=function(d){for(var b=Array(d.length),e=0;e<d.length;e++)b[e]=String.fromCharCode(d[e]&255,d[e]>>>8&255,d[e]>>>16&255,d[e]>>>24&255);return b.join("")};var m={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
encode:function(d,b){var e,h,a,f,c=[],n="",k,l,r=m.code;l=("undefined"==typeof b?0:b)?j.encode(d):d;k=l.length%3;if(0<k)for(;3>k++;)n+="\x3d",l+="\x00";for(k=0;k<l.length;k+=3)e=l.charCodeAt(k),h=l.charCodeAt(k+1),a=l.charCodeAt(k+2),f=e<<16|h<<8|a,e=f>>18&63,h=f>>12&63,a=f>>6&63,f&=63,c[k/3]=r.charAt(e)+r.charAt(h)+r.charAt(a)+r.charAt(f);c=c.join("");return c=c.slice(0,c.length-n.length)+n},decode:function(d,b){b="undefined"==typeof b?!1:b;var e,h,a,f,c,n=[],k,l=m.code;k=b?j.decode(d):d;for(var r=
0;r<k.length;r+=4)e=l.indexOf(k.charAt(r)),h=l.indexOf(k.charAt(r+1)),f=l.indexOf(k.charAt(r+2)),c=l.indexOf(k.charAt(r+3)),a=e<<18|h<<12|f<<6|c,e=a>>>16&255,h=a>>>8&255,a&=255,n[r/4]=String.fromCharCode(e,h,a),64==c&&(n[r/4]=String.fromCharCode(e,h)),64==f&&(n[r/4]=String.fromCharCode(e));f=n.join("");return b?j.decode(f):f}},j={encode:function(d){d=d.replace(/[\u0080-\u07ff]/g,function(b){b=b.charCodeAt(0);return String.fromCharCode(192|b>>6,128|b&63)});return d=d.replace(/[\u0800-\uffff]/g,function(b){b=
b.charCodeAt(0);return String.fromCharCode(224|b>>12,128|b>>6&63,128|b&63)})},decode:function(d){d=d.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(b){b=(b.charCodeAt(0)&15)<<12|(b.charCodeAt(1)&63)<<6|b.charCodeAt(2)&63;return String.fromCharCode(b)});return d=d.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(b){b=(b.charCodeAt(0)&31)<<6|b.charCodeAt(1)&63;return String.fromCharCode(b)})}}}(jwplayer.utils),function(h){h.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",
JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_SETUP_ERROR:"jwplayerSetupError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",
JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_CAPTIONS_LOADED:"jwplayerCaptionsLoaded",
JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_VIEW_TAB_FOCUS:"jwplayerViewTabFocus",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_USER_ACTION:"jwplayerUserAction",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed",
JWPLAYER_AD_TIME:"jwplayerAdTime",JWPLAYER_AD_ERROR:"jwplayerAdError",JWPLAYER_AD_CLICK:"jwplayerAdClicked",JWPLAYER_AD_COMPLETE:"jwplayerAdComplete",JWPLAYER_AD_IMPRESSION:"jwplayerAdImpression",JWPLAYER_AD_COMPANIONS:"jwplayerAdCompanions",JWPLAYER_AD_SKIPPED:"jwplayerAdSkipped",JWPLAYER_AD_PLAY:"jwplayerAdPlay",JWPLAYER_AD_PAUSE:"jwplayerAdPause",JWPLAYER_AD_META:"jwplayerAdMeta",JWPLAYER_CAST_AVAILABLE:"jwplayerCastAvailable",JWPLAYER_CAST_SESSION:"jwplayerCastSession",JWPLAYER_CAST_AD_CHANGED:"jwplayerCastAdChanged"}}(jwplayer),
function(h){var d=h.utils;h.events.eventdispatcher=function(m,j){function g(b,a,f){if(b)for(var c=0;c<b.length;c++){var e=b[c];if(e){null!==e.count&&0===--e.count&&delete b[c];try{e.listener(a)}catch(g){d.log('Error handling "'+f+'" event listener ['+c+"]: "+g.toString(),e.listener,a)}}}}var b,e;this.resetEventListeners=function(){b={};e=[]};this.resetEventListeners();this.addEventListener=function(e,a,f){try{d.exists(b[e])||(b[e]=[]),"string"==d.typeOf(a)&&(a=(new Function("return "+a))()),b[e].push({listener:a,
count:f||null})}catch(c){d.log("error",c)}return!1};this.removeEventListener=function(e,a){if(b[e]){try{if(void 0===a){b[e]=[];return}for(var f=0;f<b[e].length;f++)if(b[e][f].listener.toString()==a.toString()){b[e].splice(f,1);break}}catch(c){d.log("error",c)}return!1}};this.addGlobalListener=function(b,a){try{"string"==d.typeOf(b)&&(b=(new Function("return "+b))()),e.push({listener:b,count:a||null})}catch(f){d.log("error",f)}return!1};this.removeGlobalListener=function(b){if(b){try{for(var a=e.length;a--;)e[a].listener.toString()==
b.toString()&&e.splice(a,1)}catch(f){d.log("error",f)}return!1}};this.sendEvent=function(p,a){d.exists(a)||(a={});d.extend(a,{id:m,version:h.version,type:p});j&&d.log(p,a);g(b[p],a,p);g(e,a,p)}}}(window.jwplayer),function(h){var d={},m={};h.plugins=function(){};h.plugins.loadPlugins=function(j,g){m[j]=new h.plugins.pluginloader(new h.plugins.model(d),g);return m[j]};h.plugins.registerPlugin=function(j,g,b,e){var p=h.utils.getPluginName(j);d[p]||(d[p]=new h.plugins.plugin(j));d[p].registerPlugin(j,
g,b,e)}}(jwplayer),function(h){h.plugins.model=function(d){this.addPlugin=function(m){var j=h.utils.getPluginName(m);d[j]||(d[j]=new h.plugins.plugin(m));return d[j]};this.getPlugins=function(){return d}}}(jwplayer),function(h){var d=jwplayer.utils,m=jwplayer.events;h.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};h.plugin=function(j){function g(){switch(d.getPluginPathType(j)){case d.pluginPathType.ABSOLUTE:return j;case d.pluginPathType.RELATIVE:return d.getAbsolutePath(j,window.location.href)}}function b(){n=
setTimeout(function(){p=d.loaderstatus.COMPLETE;k.sendEvent(m.COMPLETE)},1E3)}function e(){p=d.loaderstatus.ERROR;k.sendEvent(m.ERROR)}var p=d.loaderstatus.NEW,a,f,c,n,k=new m.eventdispatcher;d.extend(this,k);this.load=function(){if(p==d.loaderstatus.NEW)if(0<j.lastIndexOf(".swf"))a=j,p=d.loaderstatus.COMPLETE,k.sendEvent(m.COMPLETE);else if(d.getPluginPathType(j)==d.pluginPathType.CDN)p=d.loaderstatus.COMPLETE,k.sendEvent(m.COMPLETE);else{p=d.loaderstatus.LOADING;var c=new d.scriptloader(g());c.addEventListener(m.COMPLETE,
b);c.addEventListener(m.ERROR,e);c.load()}};this.registerPlugin=function(b,e,g,j){n&&(clearTimeout(n),n=void 0);c=e;g&&j?(a=j,f=g):"string"==typeof g?a=g:"function"==typeof g?f=g:!g&&!j&&(a=b);p=d.loaderstatus.COMPLETE;k.sendEvent(m.COMPLETE)};this.getStatus=function(){return p};this.getPluginName=function(){return d.getPluginName(j)};this.getFlashPath=function(){if(a)switch(d.getPluginPathType(a)){case d.pluginPathType.ABSOLUTE:return a;case d.pluginPathType.RELATIVE:return 0<j.lastIndexOf(".swf")?
d.getAbsolutePath(a,window.location.href):d.getAbsolutePath(a,g())}return null};this.getJS=function(){return f};this.getTarget=function(){return c};this.getPluginmode=function(){if("undefined"!=typeof a&&"undefined"!=typeof f)return h.pluginmodes.HYBRID;if("undefined"!=typeof a)return h.pluginmodes.FLASH;if("undefined"!=typeof f)return h.pluginmodes.JAVASCRIPT};this.getNewInstance=function(a,b,c){return new f(a,b,c)};this.getURL=function(){return j}}}(jwplayer.plugins),function(h){var d=h.utils,m=
h.events,j=d.foreach;h.plugins.pluginloader=function(g,b){function e(){c&&l.sendEvent(m.ERROR,{message:n});f||(f=!0,a=d.loaderstatus.COMPLETE,l.sendEvent(m.COMPLETE))}function p(){k||e();if(!f&&!c){var a=0,b=g.getPlugins();d.foreach(k,function(f){f=d.getPluginName(f);var g=b[f];f=g.getJS();var l=g.getTarget(),g=g.getStatus();if(g==d.loaderstatus.LOADING||g==d.loaderstatus.NEW)a++;else if(f&&(!l||parseFloat(l)>parseFloat(h.version)))c=!0,n="Incompatible player version",e()});0===a&&e()}}var a=d.loaderstatus.NEW,
f=!1,c=!1,n,k=b,l=new m.eventdispatcher;d.extend(this,l);this.setupPlugins=function(a,b,c){var f={length:0,plugins:{}},e=0,l={},k=g.getPlugins();j(b.plugins,function(g,j){var h=d.getPluginName(g),n=k[h],p=n.getFlashPath(),m=n.getJS(),L=n.getURL();p&&(f.plugins[p]=d.extend({},j),f.plugins[p].pluginmode=n.getPluginmode(),f.length++);try{if(m&&b.plugins&&b.plugins[L]){var r=document.createElement("div");r.id=a.id+"_"+h;r.style.position="absolute";r.style.top=0;r.style.zIndex=e+10;l[h]=n.getNewInstance(a,
d.extend({},b.plugins[L]),r);e++;a.onReady(c(l[h],r,!0));a.onResize(c(l[h],r))}}catch(O){d.log("ERROR: Failed to load "+h+".")}});a.plugins=l;return f};this.load=function(){if(!(d.exists(b)&&"object"!=d.typeOf(b))){a=d.loaderstatus.LOADING;j(b,function(a){d.exists(a)&&(a=g.addPlugin(a),a.addEventListener(m.COMPLETE,p),a.addEventListener(m.ERROR,r))});var c=g.getPlugins();j(c,function(a,b){b.load()})}p()};this.destroy=function(){l&&(l.resetEventListeners(),l=null)};var r=this.pluginFailed=function(){c||
(c=!0,n="File not found",e())};this.getStatus=function(){return a}}}(jwplayer),function(h){h.parsers={localName:function(d){return d?d.localName?d.localName:d.baseName?d.baseName:"":""},textContent:function(d){return d?d.textContent?h.utils.trim(d.textContent):d.text?h.utils.trim(d.text):"":""},getChildNode:function(d,h){return d.childNodes[h]},numChildren:function(d){return d.childNodes?d.childNodes.length:0}}}(jwplayer),function(h){var d=h.parsers;(d.jwparser=function(){}).parseEntry=function(m,
j){for(var g=[],b=[],e=h.utils.xmlAttribute,p=0;p<m.childNodes.length;p++){var a=m.childNodes[p];if("jwplayer"==a.prefix){var f=d.localName(a);"source"==f?(delete j.sources,g.push({file:e(a,"file"),"default":e(a,"default"),label:e(a,"label"),type:e(a,"type")})):"track"==f?(delete j.tracks,b.push({file:e(a,"file"),"default":e(a,"default"),kind:e(a,"kind"),label:e(a,"label")})):(j[f]=h.utils.serialize(d.textContent(a)),"file"==f&&j.sources&&delete j.sources)}j.file||(j.file=j.link)}if(g.length){j.sources=
[];for(p=0;p<g.length;p++)0<g[p].file.length&&(g[p]["default"]="true"==g[p]["default"]?!0:!1,g[p].label.length||delete g[p].label,j.sources.push(g[p]))}if(b.length){j.tracks=[];for(p=0;p<b.length;p++)0<b[p].file.length&&(b[p]["default"]="true"==b[p]["default"]?!0:!1,b[p].kind=!b[p].kind.length?"captions":b[p].kind,b[p].label.length||delete b[p].label,j.tracks.push(b[p]))}return j}}(jwplayer),function(h){var d=jwplayer.utils,m=d.xmlAttribute,j=h.localName,g=h.textContent,b=h.numChildren,e=h.mediaparser=
function(){};e.parseGroup=function(h,a){var f,c,n=[];for(c=0;c<b(h);c++)if(f=h.childNodes[c],"media"==f.prefix&&j(f))switch(j(f).toLowerCase()){case "content":m(f,"duration")&&(a.duration=d.seconds(m(f,"duration")));0<b(f)&&(a=e.parseGroup(f,a));m(f,"url")&&(a.sources||(a.sources=[]),a.sources.push({file:m(f,"url"),type:m(f,"type"),width:m(f,"width"),label:m(f,"label")}));break;case "title":a.title=g(f);break;case "description":a.description=g(f);break;case "guid":a.mediaid=g(f);break;case "thumbnail":a.image||
(a.image=m(f,"url"));break;case "group":e.parseGroup(f,a);break;case "subtitle":var k={};k.file=m(f,"url");k.kind="captions";if(0<m(f,"lang").length){var l=k;f=m(f,"lang");var r={zh:"Chinese",nl:"Dutch",en:"English",fr:"French",de:"German",it:"Italian",ja:"Japanese",pt:"Portuguese",ru:"Russian",es:"Spanish"};f=r[f]?r[f]:f;l.label=f}n.push(k)}a.hasOwnProperty("tracks")||(a.tracks=[]);for(c=0;c<n.length;c++)a.tracks.push(n[c]);return a}}(jwplayer.parsers),function(h){function d(b){for(var a={},f=0;f<
b.childNodes.length;f++){var c=b.childNodes[f],d=e(c);if(d)switch(d.toLowerCase()){case "enclosure":a.file=m.xmlAttribute(c,"url");break;case "title":a.title=j(c);break;case "guid":a.mediaid=j(c);break;case "pubdate":a.date=j(c);break;case "description":a.description=j(c);break;case "link":a.link=j(c);break;case "category":a.tags=a.tags?a.tags+j(c):j(c)}}a=h.mediaparser.parseGroup(b,a);a=h.jwparser.parseEntry(b,a);return new jwplayer.playlist.item(a)}var m=jwplayer.utils,j=h.textContent,g=h.getChildNode,
b=h.numChildren,e=h.localName;h.rssparser={};h.rssparser.parse=function(j){for(var a=[],f=0;f<b(j);f++){var c=g(j,f);if("channel"==e(c).toLowerCase())for(var h=0;h<b(c);h++){var k=g(c,h);"item"==e(k).toLowerCase()&&a.push(d(k))}}return a}}(jwplayer.parsers),function(h){h.playlist=function(d){var m=[];if("array"==h.utils.typeOf(d))for(var j=0;j<d.length;j++)m.push(new h.playlist.item(d[j]));else m.push(new h.playlist.item(d));return m}}(jwplayer),function(h){var d=h.item=function(m){var j=jwplayer.utils,
g=j.extend({},d.defaults,m),b,e;g.tracks=m&&j.exists(m.tracks)?m.tracks:[];0===g.sources.length&&(g.sources=[new h.source(g)]);for(b=0;b<g.sources.length;b++)e=g.sources[b]["default"],g.sources[b]["default"]=e?"true"==e.toString():!1,g.sources[b]=new h.source(g.sources[b]);if(g.captions&&!j.exists(m.tracks)){for(m=0;m<g.captions.length;m++)g.tracks.push(g.captions[m]);delete g.captions}for(b=0;b<g.tracks.length;b++)g.tracks[b]=new h.track(g.tracks[b]);return g};d.defaults={description:void 0,image:void 0,
mediaid:void 0,title:void 0,sources:[],tracks:[]}}(jwplayer.playlist),function(h){var d=jwplayer,m=d.utils,j=d.events,g=d.parsers;h.loader=function(){function b(b){try{var c=b.responseXML.childNodes;b="";for(var d=0;d<c.length&&!(b=c[d],8!=b.nodeType);d++);"xml"==g.localName(b)&&(b=b.nextSibling);if("rss"!=g.localName(b))p("Not a valid RSS feed");else{var e=new h(g.rssparser.parse(b));a.sendEvent(j.JWPLAYER_PLAYLIST_LOADED,{playlist:e})}}catch(l){p()}}function d(a){p(a.match(/invalid/i)?"Not a valid RSS feed":
"")}function p(b){a.sendEvent(j.JWPLAYER_ERROR,{message:b?b:"Error loading file"})}var a=new j.eventdispatcher;m.extend(this,a);this.load=function(a){m.ajax(a,b,d)}}}(jwplayer.playlist),function(h){var d=jwplayer.utils,m={file:void 0,label:void 0,type:void 0,"default":void 0};h.source=function(j){var g=d.extend({},m);d.foreach(m,function(b){d.exists(j[b])&&(g[b]=j[b],delete j[b])});g.type&&0<g.type.indexOf("/")&&(g.type=d.extensionmap.mimeType(g.type));"m3u8"==g.type&&(g.type="hls");"smil"==g.type&&
(g.type="rtmp");return g}}(jwplayer.playlist),function(h){var d=jwplayer.utils,m={file:void 0,label:void 0,kind:"captions","default":!1};h.track=function(j){var g=d.extend({},m);j||(j={});d.foreach(m,function(b){d.exists(j[b])&&(g[b]=j[b],delete j[b])});return g}}(jwplayer.playlist),function(h){var d=h.cast={},m=h.utils;d.adprovider=function(j,g){function b(){c={message:n,position:0,duration:-1}}function e(a,b){var c={command:a};void 0!==b&&(c.args=b);g.sendMessage(j,c,p,function(a){d.error("message send error",
a)})}function p(){}var a=new d.provider(j,g),f=m.extend(this,a),c,n="Loading ad",k=0;f.init=function(){a.init();b()};f.destroy=function(){a.destroy()};f.updateModel=function(f,e){(f.tag||f.newstate||f.sequence||f.companions)&&d.log("received ad change:",f);f.tag&&(c.tag&&f.tag!==c.tag)&&(d.error("ad messages not received in order. new model:",f,"old model:",c),b());h.utils.extend(c,f);a.updateModel(f,e)};f.getAdModel=function(){var a=m.extend({},c);a.message=0<c.duration?this.getAdMessage():n;return a};
f.resetAdModel=function(){b()};f.getAdMessage=function(){var a=c.message.replace(/xx/gi,""+Math.min(c.duration|0,Math.ceil(c.duration-c.position)));c.podMessage&&1<c.podcount&&(a=c.podMessage.replace(/__AD_POD_CURRENT__/g,""+c.sequence).replace(/__AD_POD_LENGTH__/g,""+c.podcount)+a);return a};f.skipAd=function(a){e("skipAd",{tag:a.tag})};f.clickAd=function(a){k=1*new Date;e("clickAd",{tag:a.tag})};f.timeSinceClick=function(){return 1*new Date-k}}}(window.jwplayer),function(h,d){function m(a,b){a[b]&&
(a[b]=g.getAbsolutePath(a[b]))}var j=d.cast,g=d.utils,b=d.events,e=b.state,p={};j.NS="urn:x-cast:com.longtailvideo.jwplayer";j.controller=function(a,f){var c,n;function k(a){a=a.availability===h.chrome.cast.ReceiverAvailability.AVAILABLE;M.available!==a&&(M.available=a,u(b.JWPLAYER_CAST_AVAILABLE))}function l(a){j.log("existing session",a);w||(J=a.session,J.addMessageListener(j.NS,r))}function r(c,e){var g=JSON.parse(e);if(!g)throw"Message not proper JSON";if(g.reconcile){J.removeMessageListener(j.NS,
r);var h=g.diff,l=J;if(!h.id||!g.appid||!g.pageUrl)h.id=d().id,g.appid=I.appid,g.pageUrl=P,J=w=null;h.id===a.id&&(g.appid===I.appid&&g.pageUrl===P)&&(w||(a.jwInstreamState()&&a.jwInstreamDestroy(!0),F(l),f.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:h.oldstate,newstate:h.newstate})),D(g));J=null}}function x(a){M.active=!!a;a=M;var c;c=w&&w.receiver?w.receiver.friendlyName:"";a.deviceName=c;u(b.JWPLAYER_CAST_SESSION,{})}function u(a){var b=g.extend({},M);f.sendEvent(a,b)}function t(a){var b=h.chrome;
a.code!==b.cast.ErrorCode.CANCEL&&(j.log("Cast Session Error:",a,w),a.code===b.cast.ErrorCode.SESSION_ERROR&&q())}function q(){w?(G(),w.stop(A,E)):A()}function E(a){j.error("Cast Session Stop error:",a,w);A()}function F(l){w=l;w.addMessageListener(j.NS,B);w.addUpdateListener(v);a.jwPause(!0);a.jwSetFullscreen(!1);N=f.getVideo();c=f.volume;n=f.mute;C=new j.provider(j.NS,w);C.init();f.setVideo(C);a.jwPlay=function(a){!1===a?C.pause():C.play()};a.jwPause=function(b){a.jwPlay(!!b)};a.jwLoad=function(a){"number"===
g.typeOf(a)&&f.setItem(a);C.load(a)};a.jwPlaylistItem=function(a){"number"===g.typeOf(a)&&f.setItem(a);C.playlistItem(a)};a.jwPlaylistNext=function(){a.jwPlaylistItem(f.item+1)};a.jwPlaylistPrev=function(){a.jwPlaylistItem(f.item-1)};a.jwSetVolume=function(a){g.exists(a)&&(a=Math.min(Math.max(0,a),100)|0,L(a)&&(a=Math.max(0,Math.min(a/100,1)),w.setReceiverVolumeLevel(a,y,function(a){j.error("set volume error",a);y()})))};a.jwSetMute=function(a){g.exists(a)||(a=!K.mute);Q(a)&&w.setReceiverMuted(!!a,
y,function(a){j.error("set muted error",a);y()})};a.jwGetVolume=function(){return K.volume|0};a.jwGetMute=function(){return!!K.mute};a.jwIsBeforePlay=function(){return!1};var k=a.jwSetCurrentCaptions;a.jwSetCurrentCaptions=function(a){k(a)};a.jwSkipAd=function(a){z&&(z.skipAd(a),a=z.getAdModel(),a.complete=!0,f.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,a))};a.jwClickAd=function(c){if(z&&300<z.timeSinceClick()&&(z.clickAd(c),f.state!==e.PAUSED)){var g={tag:c.tag};c.sequence&&(g.sequence=c.sequence);c.podcount&&
(g.podcount=c.podcount);d(a.id).dispatchEvent(b.JWPLAYER_AD_CLICK,g);h.open(c.clickthrough)}};a.jwPlayAd=a.jwPauseAd=a.jwSetControls=a.jwForceState=a.jwReleaseState=a.jwSetFullscreen=a.jwDetachMedia=a.jwAttachMedia=O;var p=d(a.id).plugins;p.vast&&p.vast.jwPauseAd!==O&&(R={jwPlayAd:p.vast.jwPlayAd,jwPauseAd:p.vast.jwPauseAd},p.vast.jwPlayAd=p.vast.jwPauseAd=O);y();x(!0);l!==J&&C.setup(H(),f)}function v(a){j.log("Cast Session status",a);a?y():(C.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:f.state,newstate:e.BUFFERING}),
A())}function A(){w&&(G(),w=null);if(N){delete a.jwSkipAd;delete a.jwClickAd;a.initializeAPI();var j=d(a.id).plugins;j.vast&&g.extend(j.vast,R);f.volume=c;f.mute=n;f.setVideo(N);f.duration=0;C&&(C.destroy(),C=null);z&&(z.destroy(),z=null);f.state!==e.IDLE?(f.state=e.IDLE,a.jwPlay(!0),a.jwSeek(f.position)):N.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:e.BUFFERING,newstate:e.IDLE});N=null}x(!1)}function G(){w.removeUpdateListener(v);w.removeMessageListener(j.NS,B)}function B(a,b){var c=JSON.parse(b);
if(!c)throw"Message not proper JSON";D(c)}function D(c){if("state"===c.type){if(z&&(c.diff.newstate||c.diff.position))z.destroy(),z=null,f.setVideo(C),f.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,{done:!0});C.updateModel(c.diff,c.type);c=c.diff;void 0!==c.item&&f.item!==c.item&&(f.item=c.item,f.sendEvent(b.JWPLAYER_PLAYLIST_ITEM,{index:f.item}))}else if("ad"===c.type){null===z&&(z=new j.adprovider(j.NS,w),z.init(),f.setVideo(z));z.updateModel(c.diff,c.type);var d=z.getAdModel();c.diff.clickthrough&&(d.onClick=
a.jwClickAd);c.diff.skipoffset&&(d.onSkipAd=a.jwSkipAd);f.sendEvent(b.JWPLAYER_CAST_AD_CHANGED,d);c.diff.complete&&z.resetAdModel()}else"connection"===c.type?!0===c.closed&&q():j.error("received unhandled message",c.type,c)}function H(){var a=g.extend({},f.config);a.cast=g.extend({pageUrl:P},I);for(var b="base autostart controls fallback fullscreen width height mobilecontrols modes playlistlayout playlistposition playlistsize primary stretching sharing related ga skin logo listbar".split(" "),c=b.length;c--;)delete a[b[c]];
b=a.plugins;delete a.plugins;for(var d in b)if(b.hasOwnProperty(d)){var e=b[d];if(e.client&&(/[\.\/]/.test(e.client)&&m(e,"client"),-1<e.client.indexOf("vast"))){c=a;e=g.extend({},e);e.client="vast";delete e.companiondiv;if(e.schedule){var j=void 0;for(j in e.schedule)e.schedule.hasOwnProperty(j)&&m(e.schedule[j].ad||e.schedule[j],"tag")}m(e,"tag");c.advertising=e}}f.position&&(a.position=f.position);0<f.item&&(a.item=f.item);return a}function y(){if(w&&w.receiver){var a=w.receiver.volume;if(a){var b=
100*a.level|0;Q(!!a.muted);L(b)}}}function L(a){var c=K.volume!==a;c&&(K.volume=a,C.sendEvent(b.JWPLAYER_MEDIA_VOLUME,{volume:a}));return c}function Q(a){var c=K.mute!==a;c&&(K.mute=a,C.sendEvent(b.JWPLAYER_MEDIA_MUTE,{mute:a}));return c}function O(){}var w=null,M={available:!1,active:!1,deviceName:""},K={volume:null,mute:null},P=h.location.href,I,C=null,z=null,N=null;c=f.volume;n=f.mute;var J=null,R=null;I=g.extend({},p,f.cast);m(I,"loadscreen");m(I,"endscreen");m(I,"logo");if(I.appid&&(!h.cast||
!h.cast.receiver))j.loader.addEventListener("availability",k),j.loader.addEventListener("session",l),j.loader.initialize();this.startCasting=function(){w||a.jwInstreamState()||h.chrome.cast.requestSession(F,t)};this.stopCasting=q};j.log=function(){if(j.debug){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}};j.error=function(){var a=Array.prototype.slice.call(arguments,0);console.error.apply(console,a)}}(window,jwplayer),function(h,d){function m(){d&&d.cast&&d.cast.isAvailable&&
!a.apiConfig?(a.apiConfig=new d.cast.ApiConfig(new d.cast.SessionRequest(l),e,p,d.cast.AutoJoinPolicy.ORIGIN_SCOPED),d.cast.initialize(a.apiConfig,b,g)):15>k++&&setTimeout(m,1E3)}function j(){n&&(n.resetEventListeners(),n=null)}function g(){a.apiConfig=null}function b(){}function e(b){a.loader.sendEvent("session",{session:b});b.sendMessage(a.NS,{whoami:1})}function p(b){a.availability=b;a.loader.sendEvent("availability",{availability:b})}window.chrome=d;var a=h.cast,f=h.utils,c=h.events,n,k=0,l="C7EF2AC5";
a.loader=f.extend({initialize:function(){null!==a.availability?a.loader.sendEvent("availability",{availability:a.availability}):d&&d.cast?m():n||(n=new f.scriptloader("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),n.addEventListener(c.ERROR,j),n.addEventListener(c.COMPLETE,m),n.load())}},new c.eventdispatcher("cast.loader"));a.availability=null}(window.jwplayer,window.chrome||{}),function(h){function d(b){return function(){return b}}function m(){}var j=h.cast,g=h.utils,b=h.events,e=b.state;
j.provider=function(h,a){function f(b,c){var d={command:b};void 0!==c&&(d.args=c);a.sendMessage(h,d,m,function(a){j.error("message send error",a)})}function c(a){l.oldstate=l.newstate;l.newstate=a;n.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:l.oldstate,newstate:l.newstate})}var n=g.extend(this,new b.eventdispatcher("cast.provider")),k=-1,l={newstate:e.IDLE,oldstate:e.IDLE,buffer:0,position:0,duration:-1,audioMode:!1};n.isCaster=!0;n.init=function(){};n.destroy=function(){clearTimeout(k);a=null};
n.updateModel=function(a,c){a.newstate&&(l.newstate=a.newstate,l.oldstate=a.oldstate||l.oldstate,n.sendEvent(b.JWPLAYER_PLAYER_STATE,{oldstate:l.oldstate,newstate:l.newstate}));if("ad"!==c){if(void 0!==a.position||void 0!==a.duration)void 0!==a.position&&(l.position=a.position),void 0!==a.duration&&(l.duration=a.duration),n.sendEvent(b.JWPLAYER_MEDIA_TIME,{position:l.position,duration:l.duration});void 0!==a.buffer&&(l.buffer=a.buffer,n.sendEvent(b.JWPLAYER_MEDIA_BUFFER,{bufferPercent:l.buffer}))}};
n.supportsFullscreen=function(){return!1};n.setup=function(a,b){b.state&&(l.newstate=b.state);void 0!==b.buffer&&(l.buffer=b.buffer);void 0!==a.position&&(l.position=a.position);void 0!==a.duration&&(l.duration=a.duration);c(e.BUFFERING);f("setup",a)};n.playlistItem=function(a){c(e.BUFFERING);f("item",a)};n.load=function(a){c(e.BUFFERING);f("load",a)};n.stop=function(){clearTimeout(k);k=setTimeout(function(){c(e.IDLE);f("stop")},0)};n.play=function(){f("play")};n.pause=function(){c(e.PAUSED);f("pause")};
n.seek=function(a){c(e.BUFFERING);n.sendEvent(b.JWPLAYER_MEDIA_SEEK,{position:l.position,offset:a});f("seek",a)};n.audioMode=function(){return l.audioMode};n.detachMedia=function(){j.error("detachMedia called while casting");return document.createElement("video")};n.attachMedia=function(){j.error("attachMedia called while casting")};var r;n.setContainer=function(a){r=a};n.getContainer=function(){return r};n.volume=n.mute=n.setControls=n.setCurrentQuality=n.remove=n.resize=n.seekDrag=n.addCaptions=
n.resetCaptions=n.setVisibility=n.fsCaptions=m;n.setFullScreen=n.getFullScreen=n.checkComplete=d(!1);n.getWidth=n.getHeight=n.getCurrentQuality=d(0);n.getQualityLevels=d(["Auto"])}}(window.jwplayer),function(h){function d(a,b){j.foreach(b,function(b,c){var d=a[b];"function"==typeof d&&d.call(a,c)})}function m(a,b,d){var e=a.style;e.backgroundColor="#000";e.color="#FFF";e.width=j.styleDimension(d.width);e.height=j.styleDimension(d.height);e.display="table";e.opacity=1;d=document.createElement("p");
e=d.style;e.verticalAlign="middle";e.textAlign="center";e.display="table-cell";e.font="15px/20px Arial, Helvetica, sans-serif";d.innerHTML=b.replace(":",":\x3cbr\x3e");a.innerHTML="";a.appendChild(d)}var j=h.utils,g=h.events,b=!0,e=!1,p=document,a=h.embed=function(f){function c(){if(!B)if("array"===j.typeOf(u.playlist)&&2>u.playlist.length&&(0===u.playlist.length||!u.playlist[0].sources||0===u.playlist[0].sources.length))l();else if(!G)if("string"===j.typeOf(u.playlist))A=new h.playlist.loader,A.addEventListener(g.JWPLAYER_PLAYLIST_LOADED,
function(a){u.playlist=a.playlist;G=e;c()}),A.addEventListener(g.JWPLAYER_ERROR,function(a){G=e;l(a)}),G=b,A.load(u.playlist);else if(v.getStatus()==j.loaderstatus.COMPLETE){for(var k=0;k<u.modes.length;k++)if(u.modes[k].type&&a[u.modes[k].type]){var p=j.extend({},u),m=new a[u.modes[k].type](y,u.modes[k],p,v,f);if(m.supportsConfig())return m.addEventListener(g.ERROR,n),m.embed(),j.css("object.jwswf, .jwplayer:focus",{outline:"none"}),j.css(".jw-tab-focus:focus",{outline:"solid 2px #0B7EF4"}),d(f,
p.events),f}var q;u.fallback?(q="No suitable players found and fallback enabled",D=setTimeout(function(){r(q,b)},10),j.log(q),new a.download(y,u,l)):(q="No suitable players found and fallback disabled",r(q,e),j.log(q),y.parentNode.replaceChild(H,y))}}function n(a){x(E+a.message)}function k(a){f.dispatchEvent(g.JWPLAYER_ERROR,{message:"Could not load plugin: "+a.message})}function l(a){a&&a.message?x("Error loading playlist: "+a.message):x(E+"No playable sources found")}function r(a,b){D&&(clearTimeout(D),
D=null);D=setTimeout(function(){D=null;f.dispatchEvent(g.JWPLAYER_SETUP_ERROR,{message:a,fallback:b})},0)}function x(a){B||(u.fallback?(B=b,m(y,a,u),r(a,b)):r(a,e))}var u=new a.config(f.config),t=u.width,q=u.height,E="Error loading player: ",F=p.getElementById(f.id),v=h.plugins.loadPlugins(f.id,u.plugins),A,G=e,B=e,D=null,H=null;u.fallbackDiv&&(H=u.fallbackDiv,delete u.fallbackDiv);u.id=f.id;u.aspectratio?f.config.aspectratio=u.aspectratio:delete f.config.aspectratio;var y=p.createElement("div");
y.id=F.id;y.style.width=0<t.toString().indexOf("%")?t:t+"px";y.style.height=0<q.toString().indexOf("%")?q:q+"px";F.parentNode.replaceChild(y,F);this.embed=function(){B||(v.addEventListener(g.COMPLETE,c),v.addEventListener(g.ERROR,k),v.load())};this.destroy=function(){v&&(v.destroy(),v=null);A&&(A.resetEventListeners(),A=null)};this.errorScreen=x;return this};h.embed.errorScreen=m}(jwplayer),function(h){function d(b){if(b.playlist)for(var d=0;d<b.playlist.length;d++)b.playlist[d]=new g(b.playlist[d]);
else{var h={};j.foreach(g.defaults,function(a){m(b,h,a)});h.sources||(b.levels?(h.sources=b.levels,delete b.levels):(d={},m(b,d,"file"),m(b,d,"type"),h.sources=d.file?[d]:[]));b.playlist=[new g(h)]}}function m(b,d,g){j.exists(b[g])&&(d[g]=b[g],delete b[g])}var j=h.utils,g=h.playlist.item;(h.embed.config=function(b){var e={fallback:!0,height:270,primary:"html5",width:480,base:b.base?b.base:j.getScriptPath("jwplayer.js"),aspectratio:""};b=j.extend(e,h.defaults,b);var e={type:"html5",src:b.base+"jwplayer.html5.js"},
g={type:"flash",src:b.base+"jwplayer.flash.swf"};b.modes="flash"==b.primary?[g,e]:[e,g];b.listbar&&(b.playlistsize=b.listbar.size,b.playlistposition=b.listbar.position,b.playlistlayout=b.listbar.layout);b.flashplayer&&(g.src=b.flashplayer);b.html5player&&(e.src=b.html5player);d(b);g=b.aspectratio;if("string"!=typeof g||!j.exists(g))e=0;else{var a=g.indexOf(":");-1==a?e=0:(e=parseFloat(g.substr(0,a)),g=parseFloat(g.substr(a+1)),e=0>=e||0>=g?0:100*(g/e)+"%")}-1==b.width.toString().indexOf("%")?delete b.aspectratio:
e?b.aspectratio=e:delete b.aspectratio;return b}).addConfig=function(b,e){d(e);return j.extend(b,e)}}(jwplayer),function(h){var d=h.utils,m=document;h.embed.download=function(j,g,b){function e(a,b){for(var c=m.querySelectorAll(a),e=0;e<c.length;e++)d.foreach(b,function(a,b){c[e].style[a]=b})}function h(a,b,c){a=m.createElement(a);b&&(a.className="jwdownload"+b);c&&c.appendChild(a);return a}var a=d.extend({},g),f=a.width?a.width:480,c=a.height?a.height:320,n;g=g.logo?g.logo:{prefix:d.repo(),file:"logo.png",
margin:10};var k,l,r,a=a.playlist,x,u=["mp4","aac","mp3"];if(a&&a.length){x=a[0];n=x.sources;for(a=0;a<n.length;a++){var t=n[a],q=t.type?t.type:d.extensionmap.extType(d.extension(t.file));t.file&&d.foreach(u,function(a){q==u[a]?(k=t.file,l=x.image):d.isYouTube(t.file)&&(r=t.file)})}k?(n=k,b=l,j&&(a=h("a","display",j),h("div","icon",a),h("div","logo",a),n&&a.setAttribute("href",d.getAbsolutePath(n))),a="#"+j.id+" .jwdownload",j.style.width="",j.style.height="",e(a+"display",{width:d.styleDimension(Math.max(320,
f)),height:d.styleDimension(Math.max(180,c)),background:"black center no-repeat "+(b?"url("+b+")":""),backgroundSize:"contain",position:"relative",border:"none",display:"block"}),e(a+"display div",{position:"absolute",width:"100%",height:"100%"}),e(a+"logo",{top:g.margin+"px",right:g.margin+"px",background:"top right no-repeat url("+g.prefix+g.file+")"}),e(a+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})):
r?(g=r,j=h("iframe","",j),j.src="http://www.youtube.com/embed/"+d.youTubeID(g),j.width=f,j.height=c,j.style.border="none"):b()}}}(jwplayer),function(h){var d=h.utils,m=h.events,j={};(h.embed.flash=function(b,e,p,a,f){function c(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)}function n(a,b,c){return function(){try{c&&document.getElementById(f.id+"_wrapper").appendChild(b);var d=document.getElementById(f.id).getPluginConfig("display");
"function"==typeof a.resize&&a.resize(d.width,d.height);b.style.left=d.x;b.style.top=d.h}catch(e){}}}function k(a){if(!a)return{};var b={},c=[];d.foreach(a,function(a,e){var f=d.getPluginName(a);c.push(a);d.foreach(e,function(a,c){b[f+"."+a]=c})});b.plugins=c.join(",");return b}var l=new h.events.eventdispatcher,r=d.flashVersion();d.extend(this,l);this.embed=function(){p.id=f.id;if(10>r)return l.sendEvent(m.ERROR,{message:"Flash version must be 10.0 or greater"}),!1;var g,h,t=f.config.listbar,q=d.extend({},
p);if(b.id+"_wrapper"==b.parentNode.id)g=document.getElementById(b.id+"_wrapper");else{g=document.createElement("div");h=document.createElement("div");h.style.display="none";h.id=b.id+"_aspect";g.id=b.id+"_wrapper";g.style.position="relative";g.style.display="block";g.style.width=d.styleDimension(q.width);g.style.height=d.styleDimension(q.height);if(f.config.aspectratio){var E=parseFloat(f.config.aspectratio);h.style.display="block";h.style.marginTop=f.config.aspectratio;g.style.height="auto";g.style.display=
"inline-block";t&&("bottom"==t.position?h.style.paddingBottom=t.size+"px":"right"==t.position&&(h.style.marginBottom=-1*t.size*(E/100)+"px"))}b.parentNode.replaceChild(g,b);g.appendChild(b);g.appendChild(h)}g=a.setupPlugins(f,q,n);0<g.length?d.extend(q,k(g.plugins)):delete q.plugins;"undefined"!=typeof q["dock.position"]&&"false"==q["dock.position"].toString().toLowerCase()&&(q.dock=q["dock.position"],delete q["dock.position"]);g=q.wmode?q.wmode:q.height&&40>=q.height?"transparent":"opaque";h="height width modes events primary base fallback volume".split(" ");
for(t=0;t<h.length;t++)delete q[h[t]];h=d.getCookies();d.foreach(h,function(a,b){"undefined"==typeof q[a]&&(q[a]=b)});h=window.location.href.split("/");h.splice(h.length-1,1);h=h.join("/");q.base=h+"/";j[b.id]=q;d.isMSIE()?(h='\x3cobject classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width\x3d"100%" height\x3d"100%"id\x3d"'+b.id+'" name\x3d"'+b.id+'" tabindex\x3d0""\x3e',h+='\x3cparam name\x3d"movie" value\x3d"'+e.src+'"\x3e',h+='\x3cparam name\x3d"allowfullscreen" value\x3d"true"\x3e\x3cparam name\x3d"allowscriptaccess" value\x3d"always"\x3e',
h+='\x3cparam name\x3d"seamlesstabbing" value\x3d"true"\x3e',h+='\x3cparam name\x3d"wmode" value\x3d"'+g+'"\x3e',h+='\x3cparam name\x3d"bgcolor" value\x3d"#000000"\x3e',h+="\x3c/object\x3e",b.outerHTML=h,g=document.getElementById(b.id)):(h=document.createElement("object"),h.setAttribute("type","application/x-shockwave-flash"),h.setAttribute("data",e.src),h.setAttribute("width","100%"),h.setAttribute("height","100%"),h.setAttribute("bgcolor","#000000"),h.setAttribute("id",b.id),h.setAttribute("name",
b.id),h.className="jwswf",c(h,"allowfullscreen","true"),c(h,"allowscriptaccess","always"),c(h,"seamlesstabbing","true"),c(h,"wmode",g),b.parentNode.replaceChild(h,b),g=h);f.config.aspectratio&&(g.style.position="absolute");f.container=g;f.setPlayer(g,"flash")};this.supportsConfig=function(){if(r)if(p){if("string"==d.typeOf(p.playlist))return!0;try{var a=p.playlist[0].sources;if("undefined"==typeof a)return!0;for(var b=0;b<a.length;b++)if(a[b].file&&g(a[b].file,a[b].type))return!0}catch(c){}}else return!0;
return!1}}).getVars=function(b){return j[b]};var g=h.embed.flashCanPlay=function(b,e){if(d.isYouTube(b)||d.isRtmp(b,e)||"hls"==e)return!0;var g=d.extensionmap[e?e:d.extension(b)];return!g?!1:!!g.flash}}(jwplayer),function(h){function d(b,d,g){if(null!==navigator.userAgent.match(/BlackBerry/i))return!1;if("youtube"===d||m.isYouTube(b))return!0;var a=m.extension(b);d=d||j.extType(a);if("hls"===d)if(g){g=m.isAndroidNative;if(g(2)||g(3)||g("4.0"))return!1;if(m.isAndroid())return!0}else if(m.isAndroid())return!1;
if(m.isRtmp(b,d))return!1;b=j[d]||j[a];if(!b||b.flash&&!b.html5)return!1;var f;a:if(b=b.html5){try{f=!!h.vid.canPlayType(b);break a}catch(c){}f=!1}else f=!0;return f}var m=h.utils,j=m.extensionmap,g=h.events;h.embed.html5=function(b,e,j,a,f){function c(a,c,d){return function(){try{var e=document.querySelector("#"+b.id+" .jwmain");d&&e.appendChild(c);"function"==typeof a.resize&&(a.resize(e.clientWidth,e.clientHeight),setTimeout(function(){a.resize(e.clientWidth,e.clientHeight)},400));c.left=e.style.left;
c.top=e.style.top}catch(f){}}}function n(a){k.sendEvent(a.type,{message:"HTML5 player not found"})}var k=this,l=new g.eventdispatcher;m.extend(k,l);k.embed=function(){if(h.html5){a.setupPlugins(f,j,c);b.innerHTML="";var d=h.utils.extend({},j);delete d.volume;d=new h.html5.player(d);f.container=document.getElementById(f.id);f.setPlayer(d,"html5")}else d=new m.scriptloader(e.src),d.addEventListener(g.ERROR,n),d.addEventListener(g.COMPLETE,k.embed),d.load()};k.supportsConfig=function(){if(h.vid.canPlayType)try{if("string"==
m.typeOf(j.playlist))return!0;for(var a=j.playlist[0].sources,b=0;b<a.length;b++)if(d(a[b].file,a[b].type,j.androidhls))return!0}catch(c){}return!1}};h.embed.html5CanPlay=d}(jwplayer),function(h){var d=h.embed,m=h.utils,j=/\.(js|swf)$/;h.embed=m.extend(function(g){function b(){t="Adobe SiteCatalyst Error: Could not find Media Module"}var e=m.repo(),p=m.extend({},h.defaults),a=m.extend({},p,g.config),f=g.config,c=a.plugins,n=a.analytics,k=e+"jwpsrv.js",l=e+"sharing.js",r=e+"related.js",x=e+"gapro.js",
p=h.key?h.key:p.key,u=(new h.utils.key(p)).edition(),t,c=c?c:{};"ads"==u&&a.advertising&&(j.test(a.advertising.client)?c[a.advertising.client]=a.advertising:c[e+a.advertising.client+".js"]=a.advertising);delete f.advertising;f.key=p;a.analytics&&j.test(a.analytics.client)&&(k=a.analytics.client);delete f.analytics;n&&!("ads"===u||"enterprise"===u)&&delete n.enabled;if("free"==u||!n||!1!==n.enabled)c[k]=n?n:{};delete c.sharing;delete c.related;switch(u){case "ads":case "enterprise":if(f.sitecatalyst)try{window.s&&
window.s.hasOwnProperty("Media")?new h.embed.sitecatalyst(g):b()}catch(q){b()}case "premium":a.related&&(j.test(a.related.client)&&(r=a.related.client),c[r]=a.related),a.ga&&(j.test(a.ga.client)&&(x=a.ga.client),c[x]=a.ga);case "pro":a.sharing&&(j.test(a.sharing.client)&&(l=a.sharing.client),c[l]=a.sharing),a.skin&&(f.skin=a.skin.replace(/^(beelden|bekle|five|glow|modieus|roundster|stormtrooper|vapor)$/i,m.repo()+"skins/$1.xml"))}f.plugins=c;g.config=f;g=new d(g);t&&g.errorScreen(t);return g},h.embed)}(jwplayer),
function(h){var d=jwplayer.utils;h.sitecatalyst=function(h){function j(b){a.debug&&d.log(b)}function g(a){a=a.split("/");a=a[a.length-1];a=a.split("?");return a[0]}function b(){if(!l){l=!0;var a=p.getPosition();j("stop: "+c+" : "+a);s.Media.stop(c,a)}}function e(){r||(b(),r=!0,j("close: "+c),s.Media.close(c),x=!0,k=0)}var p=h,a=d.extend({},p.config.sitecatalyst),f={onPlay:function(){if(!x){var a=p.getPosition();l=!1;j("play: "+c+" : "+a);s.Media.play(c,a)}},onPause:b,onBuffer:b,onIdle:e,onPlaylistItem:function(b){try{x=
!0;e();k=0;var f;if(a.mediaName)f=a.mediaName;else{var h=p.getPlaylistItem(b.index);f=h.title?h.title:h.file?g(h.file):h.sources&&h.sources.length?g(h.sources[0].file):""}c=f;n=a.playerName?a.playerName:p.id}catch(j){d.log(j)}},onTime:function(){if(x){var a=p.getDuration();if(-1==a)return;r=l=x=!1;j("open: "+c+" : "+a+" : "+n);s.Media.open(c,a,n);j("play: "+c+" : 0");s.Media.play(c,0)}a=p.getPosition();if(3<=Math.abs(a-k)){var b=k;j("seek: "+b+" to "+a);j("stop: "+c+" : "+b);s.Media.stop(c,b);j("play: "+
c+" : "+a);s.Media.play(c,a)}k=a},onComplete:e},c,n,k,l=!0,r=!0,x;d.foreach(f,function(a){p[a](f[a])})}}(jwplayer.embed),function(h,d){var m=[],j=h.utils,g=h.events,b=g.state,e=document,p="getBuffer getCaptionsList getControls getCurrentCaptions getCurrentQuality getDuration getFullscreen getHeight getLockState getMute getPlaylistIndex getSafeRegion getPosition getQualityLevels getState getVolume getWidth isBeforeComplete isBeforePlay releaseState".split(" "),a="playlistNext stop forceState playlistPrev seek setCurrentCaptions setControls setCurrentQuality setVolume".split(" "),
f={onBufferChange:g.JWPLAYER_MEDIA_BUFFER,onBufferFull:g.JWPLAYER_MEDIA_BUFFER_FULL,onError:g.JWPLAYER_ERROR,onSetupError:g.JWPLAYER_SETUP_ERROR,onFullscreen:g.JWPLAYER_FULLSCREEN,onMeta:g.JWPLAYER_MEDIA_META,onMute:g.JWPLAYER_MEDIA_MUTE,onPlaylist:g.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:g.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:g.JWPLAYER_PLAYLIST_COMPLETE,onReady:g.API_READY,onResize:g.JWPLAYER_RESIZE,onComplete:g.JWPLAYER_MEDIA_COMPLETE,onSeek:g.JWPLAYER_MEDIA_SEEK,onTime:g.JWPLAYER_MEDIA_TIME,
onVolume:g.JWPLAYER_MEDIA_VOLUME,onBeforePlay:g.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:g.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:g.JWPLAYER_DISPLAY_CLICK,onControls:g.JWPLAYER_CONTROLS,onQualityLevels:g.JWPLAYER_MEDIA_LEVELS,onQualityChange:g.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:g.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:g.JWPLAYER_CAPTIONS_CHANGED,onAdError:g.JWPLAYER_AD_ERROR,onAdClick:g.JWPLAYER_AD_CLICK,onAdImpression:g.JWPLAYER_AD_IMPRESSION,onAdTime:g.JWPLAYER_AD_TIME,onAdComplete:g.JWPLAYER_AD_COMPLETE,
onAdCompanions:g.JWPLAYER_AD_COMPANIONS,onAdSkipped:g.JWPLAYER_AD_SKIPPED,onAdPlay:g.JWPLAYER_AD_PLAY,onAdPause:g.JWPLAYER_AD_PAUSE,onAdMeta:g.JWPLAYER_AD_META,onCast:g.JWPLAYER_CAST_SESSION},c={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};h.api=function(m){function k(a,b){j.foreach(a,function(a,c){q[a]=function(a){return b(c,a)}})}function l(a,b){var c="jw"+b.charAt(0).toUpperCase()+b.slice(1);q[b]=function(){var b=t.apply(this,[c].concat(Array.prototype.slice.call(arguments,
0)));return a?q:b}}function r(a){G=[];D&&D.destroy&&D.destroy();h.api.destroyPlayer(a.id)}function x(a,b){try{a.jwAddEventListener(b,'function(dat) { jwplayer("'+q.id+'").dispatchEvent("'+b+'", dat); }')}catch(c){j.log("Could not add internal listener")}}function u(a,b){E[a]||(E[a]=[],v&&A&&x(v,a));E[a].push(b);return q}function t(){if(A){if(v){var a=Array.prototype.slice.call(arguments,0),b=a.shift();if("function"===typeof v[b]){switch(a.length){case 6:return v[b](a[0],a[1],a[2],a[3],a[4],a[5]);
case 5:return v[b](a[0],a[1],a[2],a[3],a[4]);case 4:return v[b](a[0],a[1],a[2],a[3]);case 3:return v[b](a[0],a[1],a[2]);case 2:return v[b](a[0],a[1]);case 1:return v[b](a[0])}return v[b]()}}return null}G.push(arguments)}var q=this,E={},F={},v,A=!1,G=[],B,D,H={},y={};q.container=m;q.id=m.id;q.setup=function(a){if(h.embed){var b=e.getElementById(q.id);b&&(a.fallbackDiv=b);r(q);b=h(q.id);b.config=a;D=new h.embed(b);D.embed();return b}return q};q.getContainer=function(){return q.container};q.addButton=
function(a,b,c,d){try{y[d]=c,t("jwDockAddButton",a,b,"jwplayer('"+q.id+"').callback('"+d+"')",d)}catch(e){j.log("Could not add dock button"+e.message)}};q.removeButton=function(a){t("jwDockRemoveButton",a)};q.callback=function(a){if(y[a])y[a]()};q.getMeta=function(){return q.getItemMeta()};q.getPlaylist=function(){var a=t("jwGetPlaylist");"flash"==q.renderingMode&&j.deepReplaceKeyName(a,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]);return a};q.getPlaylistItem=function(a){j.exists(a)||
(a=q.getPlaylistIndex());return q.getPlaylist()[a]};q.getRenderingMode=function(){return q.renderingMode};q.setFullscreen=function(a){j.exists(a)?t("jwSetFullscreen",a):t("jwSetFullscreen",!t("jwGetFullscreen"));return q};q.setMute=function(a){j.exists(a)?t("jwSetMute",a):t("jwSetMute",!t("jwGetMute"));return q};q.lock=function(){return q};q.unlock=function(){return q};q.load=function(a){t("jwInstreamDestroy");h(q.id).plugins.googima&&t("jwDestroyGoogima");t("jwLoad",a);return q};q.playlistItem=function(a){t("jwPlaylistItem",
parseInt(a,10));return q};q.resize=function(a,b){if("flash"!==q.renderingMode)t("jwResize",a,b);else{var c=e.getElementById(q.id+"_wrapper"),d=e.getElementById(q.id+"_aspect");d&&(d.style.display="none");c&&(c.style.display="block",c.style.width=j.styleDimension(a),c.style.height=j.styleDimension(b))}return q};q.play=function(a){if(a!==d)return t("jwPlay",a),q;a=q.getState();var c=B&&B.getState();c?c===b.IDLE||c===b.PLAYING||c===b.BUFFERING?t("jwInstreamPause"):t("jwInstreamPlay"):a==b.PLAYING||a==
b.BUFFERING?t("jwPause"):t("jwPlay");return q};q.pause=function(a){a===d?(a=q.getState(),a==b.PLAYING||a==b.BUFFERING?t("jwPause"):t("jwPlay")):t("jwPause",a);return q};q.createInstream=function(){return new h.api.instream(this,v)};q.setInstream=function(a){return B=a};q.loadInstream=function(a,b){B=q.setInstream(q.createInstream()).init(b);B.loadItem(a);return B};q.destroyPlayer=function(){t("jwPlayerDestroy")};q.playAd=function(a){var b=h(q.id).plugins;b.vast?b.vast.jwPlayAd(a):t("jwPlayAd",a)};
q.pauseAd=function(){var a=h(q.id).plugins;a.vast?a.vast.jwPauseAd():t("jwPauseAd")};k(c,function(a,b){F[a]||(F[a]=[],u(g.JWPLAYER_PLAYER_STATE,function(b){var c=b.newstate;b=b.oldstate;if(c==a){var d=F[c];if(d)for(var e=0;e<d.length;e++){var f=d[e];"function"==typeof f&&f.call(this,{oldstate:b,newstate:c})}}}));F[a].push(b);return q});k(f,u);j.foreach(p,function(a,b){l(!1,b)});j.foreach(a,function(a,b){l(!0,b)});q.remove=function(){if(!A)throw"Cannot call remove() before player is ready";r(this)};
q.registerPlugin=function(a,b,c,d){h.plugins.registerPlugin(a,b,c,d)};q.setPlayer=function(a,b){v=a;q.renderingMode=b};q.detachMedia=function(){if("html5"==q.renderingMode)return t("jwDetachMedia")};q.attachMedia=function(a){if("html5"==q.renderingMode)return t("jwAttachMedia",a)};q.removeEventListener=function(a,b){var c=E[a];if(c)for(var d=c.length;d--;)c[d]===b&&c.splice(d,1)};q.dispatchEvent=function(a,b){var c=E[a];if(c)for(var c=c.slice(0),d=j.translateEventResponse(a,b),e=0;e<c.length;e++){var f=
c[e];if("function"===typeof f)try{a===g.JWPLAYER_PLAYLIST_LOADED&&j.deepReplaceKeyName(d.playlist,["__dot__","__spc__","__dsh__","__default__"],["."," ","-","default"]),f.call(this,d)}catch(h){j.log("There was an error calling back an event handler")}}};q.dispatchInstreamEvent=function(a){B&&B.dispatchEvent(a,arguments)};q.callInternal=t;q.playerReady=function(a){A=!0;v||q.setPlayer(e.getElementById(a.id));q.container=e.getElementById(q.id);j.foreach(E,function(a){x(v,a)});u(g.JWPLAYER_PLAYLIST_ITEM,
function(){H={}});u(g.JWPLAYER_MEDIA_META,function(a){j.extend(H,a.metadata)});u(g.JWPLAYER_VIEW_TAB_FOCUS,function(a){var b=q.getContainer();!0===a.hasFocus?j.addClass(b,"jw-tab-focus"):j.removeClass(b,"jw-tab-focus")});for(q.dispatchEvent(g.API_READY);0<G.length;)t.apply(this,G.shift())};q.getItemMeta=function(){return H};return q};h.playerReady=function(a){var b=h.api.playerById(a.id);b?b.playerReady(a):h.api.selectPlayer(a.id).playerReady(a)};h.api.selectPlayer=function(a){var b;j.exists(a)||
(a=0);a.nodeType?b=a:"string"==typeof a&&(b=e.getElementById(a));return b?(a=h.api.playerById(b.id))?a:h.api.addPlayer(new h.api(b)):"number"==typeof a?m[a]:null};h.api.playerById=function(a){for(var b=0;b<m.length;b++)if(m[b].id==a)return m[b];return null};h.api.addPlayer=function(a){for(var b=0;b<m.length;b++)if(m[b]==a)return a;m.push(a);return a};h.api.destroyPlayer=function(a){var b,c,f;j.foreach(m,function(d,e){e.id===a&&(b=d,c=e)});if(b===d||c===d)return null;j.clearCss("#"+c.id);if(f=e.getElementById(c.id+
("flash"==c.renderingMode?"_wrapper":""))){"html5"===c.renderingMode&&c.destroyPlayer();var g=e.createElement("div");g.id=c.id;f.parentNode.replaceChild(g,f)}m.splice(b,1);return null}}(window.jwplayer),function(h){var d=h.events,m=h.utils,j=d.state;h.api.instream=function(g,b){function e(a,d){c[a]||(c[a]=[],b.jwInstreamAddEventListener(a,'function(dat) { jwplayer("'+g.id+'").dispatchInstreamEvent("'+a+'", dat); }'));c[a].push(d);return this}function h(a,b){n[a]||(n[a]=[],e(d.JWPLAYER_PLAYER_STATE,
function(b){var c=b.newstate,d=b.oldstate;if(c==a){var e=n[c];if(e)for(var f=0;f<e.length;f++){var g=e[f];"function"==typeof g&&g.call(this,{oldstate:d,newstate:c,type:b.type})}}}));n[a].push(b);return this}var a,f,c={},n={},k=this;k.type="instream";k.init=function(){g.callInternal("jwInitInstream");return k};k.loadItem=function(b,c){a=b;f=c||{};"array"==m.typeOf(b)?g.callInternal("jwLoadArrayInstream",a,f):g.callInternal("jwLoadItemInstream",a,f)};k.removeEvents=function(){c=n={}};k.removeEventListener=
function(a,b){var d=c[a];if(d)for(var e=d.length;e--;)d[e]===b&&d.splice(e,1)};k.dispatchEvent=function(a,b){var d=c[a];if(d)for(var d=d.slice(0),e=m.translateEventResponse(a,b[1]),f=0;f<d.length;f++){var g=d[f];"function"==typeof g&&g.call(this,e)}};k.onError=function(a){return e(d.JWPLAYER_ERROR,a)};k.onMediaError=function(a){return e(d.JWPLAYER_MEDIA_ERROR,a)};k.onFullscreen=function(a){return e(d.JWPLAYER_FULLSCREEN,a)};k.onMeta=function(a){return e(d.JWPLAYER_MEDIA_META,a)};k.onMute=function(a){return e(d.JWPLAYER_MEDIA_MUTE,
a)};k.onComplete=function(a){return e(d.JWPLAYER_MEDIA_COMPLETE,a)};k.onPlaylistComplete=function(a){return e(d.JWPLAYER_PLAYLIST_COMPLETE,a)};k.onPlaylistItem=function(a){return e(d.JWPLAYER_PLAYLIST_ITEM,a)};k.onTime=function(a){return e(d.JWPLAYER_MEDIA_TIME,a)};k.onBuffer=function(a){return h(j.BUFFERING,a)};k.onPause=function(a){return h(j.PAUSED,a)};k.onPlay=function(a){return h(j.PLAYING,a)};k.onIdle=function(a){return h(j.IDLE,a)};k.onClick=function(a){return e(d.JWPLAYER_INSTREAM_CLICK,a)};
k.onInstreamDestroyed=function(a){return e(d.JWPLAYER_INSTREAM_DESTROYED,a)};k.onAdSkipped=function(a){return e(d.JWPLAYER_AD_SKIPPED,a)};k.play=function(a){b.jwInstreamPlay(a)};k.pause=function(a){b.jwInstreamPause(a)};k.hide=function(){g.callInternal("jwInstreamHide")};k.destroy=function(){k.removeEvents();g.callInternal("jwInstreamDestroy")};k.setText=function(a){b.jwInstreamSetText(a?a:"")};k.getState=function(){return b.jwInstreamState()};k.setClick=function(a){b.jwInstreamClick&&b.jwInstreamClick(a)}}}(window.jwplayer),
function(h){var d=h.api,m=d.selectPlayer;d.selectPlayer=function(d){return(d=m(d))?d:{registerPlugin:function(d,b,e){h.plugins.registerPlugin(d,b,e)}}}}(jwplayer));jwplayer.key = 'IKLR2YbAx+/n4wmqe20gaVYmGXpEYiJOvUGbaA==';if (location.protocol === 'https:') {jwplayer.defaults = {flashplayer: 'https://ssl.p.jwpcdn.com/6/9/jwplayer.flash.swf', html5player: 'https://ssl.p.jwpcdn.com/6/9/jwplayer.html5.js', ph: 1}} else {jwplayer.defaults = {flashplayer: 'http://p.jwpcdn.com/6/9/jwplayer.flash.swf', html5player: 'http://p.jwpcdn.com/6/9/jwplayer.html5.js', ph: 1}};
define("jwplayer", function(){});

/* jRumble v1.3 - http://jackrugile.com/jrumble - MIT License */
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"alpha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(jQuery);
define("jrumble", ["jquery"], function(){});

define('video-detail',['require','jquery','bootstrap','headroom','jwplayer','jrumble'],function(require) {
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("jwplayer");
    require("jrumble");

    $(function() {
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
        var $slider = $(".banner .carousel");
        $slider.find(".active .ad-title, .active .ad-desc").show();

        var password_ok = $('#verify_password_form input[name="video_id"]').data('password');
        var videoid = $('#verify_password_form input[name="video_id"]').data('videoid');

        if (password_ok == 'None' || (sessionStorage.getItem(videoid) && sessionStorage.getItem(videoid) === password_ok)){
            $player = $("#player");
            jwplayer("player").setup({
                image: $player.data("image"),
                width: 1124,
                height: 510,
                sources: [
                    {file:$player.data("high"),label:"720p HD"},
                    {file:$player.data("mid"),label:"360p SD",default:"true"}
                ]
            });
        }else {
            window.document.documentElement.style.overflow = 'hidden';
            $('.verify_password_container').css({display:'block'});
            var submit_event = function(){
                var password = $('#verify_password').val();
                if (password == password_ok){
                    $('.verify_password_container').css({'display':'none'});
                    sessionStorage.setItem(videoid,password_ok);
                    window.document.documentElement.style.overflow = 'auto';
                    $player = $("#player");
                    jwplayer("player").setup({
                        image: $player.data("image"),
                        width: 1124,
                        height: 510,
                        sources: [
                            {file:$player.data("high"),label:"720p HD"},
                            {file:$player.data("mid"),label:"360p SD",default:"true"}
                        ]
                    });
                }else {
                    $el = $('.verify_password_container .password_box');
                    $el.jrumble({
                        x: 10,
                        y: 0,
                        rotation: 0
                    });
                    $el.trigger('startRumble');
                    setTimeout(function(){
                        $el.trigger('stopRumble');
                        $('.verify_password_container #verify_password').select();
                    },500);
                }
            }

            $('#verify_submit').click(function(){
                submit_event();
            });
    
            function enterEvent(evt){
                if (evt.keyCode == 13){
                    submit_event();
                }
            }
            $('#verify_password').focus(function(){
                if (document.addEventListener) {
                         //如果是Firefox  
                    document.addEventListener("keypress", enterEvent, true);
                } else {
                         //如果是IE
                    document.attachEvent("onkeypress", enterEvent);
                } 
            });
        }
    });
});

