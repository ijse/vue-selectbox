!function(e){var t={};function r(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){var a=r(5);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,r(3).default)("b44384e8",a,!0,{})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var r=[],a={},i=0;i<t.length;i++){var n=t[i],s=n[0],o=n[1],c=n[2],l=n[3],u={id:e+":"+i,css:o,media:c,sourceMap:l};a[s]?a[s].parts.push(u):r.push(a[s]={id:s,parts:[u]})}return r}},function(e,t,r){"use strict";r.r(t);var a={name:"select-box",props:{title:{type:String,default:"Title"},data:{type:Array,default:function(){return[{id:1,email:"email@example.com"},{id:2,email:"firstname@example.com"},{id:3,email:"lastname@example.com"},{id:4,email:"test@example.com"},{id:5,email:"vue@example.com"}]}},checked:{type:[Array,Boolean],default:function(){return[]}},labelKey:{type:String,default:"email"},valueKey:{type:String,default:"id"},inputName:{type:String,default:"data"}},data:function(){return{searchQuery:"",selectedData:this.checked?this.checked:[]}},computed:{filteredData:function(){var e=this;return this.data.filter(function(t){return t[e.labelKey].toLowerCase().includes(e.searchQuery.toLowerCase())})}},watch:{checked:function(e){e&&(this.selectedData=e)}},methods:{resetFilters:function(){this.selectedData=[],this.emitChanges()},selectAll:function(){var e=this;this.selectedData=[],this.data.forEach(function(t){e.selectedData.push(t[e.valueKey])}),this.emitChanges()},emitChanges:function(){this.$emit("input",this.selectedData)},emitData:function(e,t){e.target.checked&&this.$emit("data-change",t)},isInFilter:function(e){var t=this;return!!this.filteredData.find(function(r){return r[t.valueKey]==e})}}};r(6);var i=function(e,t,r,a,i,n,s,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),a&&(l.functional=!0),n&&(l._scopeId="data-v-"+n),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):i&&(c=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"select-box-criteria"},[r("div",{staticClass:"select-box-criteria-title"},[r("div",{staticClass:"is-size-5 is-primary-title"},[e._v("\n            "+e._s(e.title)+"\n        ")])]),e._v(" "),r("div",{staticClass:"select-box-selected-helper"},[r("button",{staticClass:"button is-small is-white",attrs:{type:"button",disabled:e.selectedData.length==e.data.length},on:{click:function(t){e.selectAll()}}},[e._m(0),e._v(" "),r("span",[e._v("\n                Alles selecteren\n            ")])]),e._v(" "),r("button",{staticClass:"button is-small is-white",attrs:{type:"button",disabled:0==e.selectedData.length},on:{click:function(t){e.resetFilters()}}},[e._m(1),e._v(" "),r("span",[e._v("\n                "+e._s(e.selectedData.length)+" selectie(s) ongedaan maken\n            ")])])]),e._v(" "),r("div",{staticClass:"select-box-criteria-search-box"},[r("div",{staticClass:"field"},[r("div",{staticClass:"control"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"input",attrs:{type:"text",placeholder:"Zoeken"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"select-box-criteria-box",class:{"is-empty":!e.filteredData.length}},[e._l(e.data,function(t){return r("label",{directives:[{name:"show",rawName:"v-show",value:e.isInFilter(t[e.valueKey]),expression:"isInFilter(data[valueKey])"}],key:t[e.valueKey],staticClass:"select-box-criteria-box-item",class:{"is-selected":e.selectedData.indexOf(t[e.valueKey])>-1}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedData,expression:"selectedData"}],attrs:{type:"checkbox",name:e.inputName+"[]"},domProps:{value:t[e.valueKey],checked:Array.isArray(e.selectedData)?e._i(e.selectedData,t[e.valueKey])>-1:e.selectedData},on:{change:[function(r){var a=e.selectedData,i=r.target,n=!!i.checked;if(Array.isArray(a)){var s=t[e.valueKey],o=e._i(a,s);i.checked?o<0&&(e.selectedData=a.concat([s])):o>-1&&(e.selectedData=a.slice(0,o).concat(a.slice(o+1)))}else e.selectedData=n},function(r){e.emitChanges(),e.emitData(r,t)}]}}),e._v(" "),r("span",{attrs:{title:t[e.labelKey]}},[e._v("\n                "+e._s(t[e.labelKey])+"\n            ")])])}),e._v(" "),e.filteredData.length?e._e():r("div",{staticClass:"select-box-criteria-box-empty"},[r("i",{staticClass:"fa fa-exclamation"}),e._v(" "),r("p",{staticClass:"is-size-7"},[e._v("\n                Geen resultaten\n            ")])])],2)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-check-circle-o"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fa fa-times-circle-o"})])}],!1,null,null,null).exports;r.d(t,"SelectBox",function(){return i})},function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return v});var a=r(1),i=r.n(a),n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=n&&(document.head||document.getElementsByTagName("head")[0]),c=null,l=0,u=!1,d=function(){},f=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,a){u=r,f=a||{};var n=i()(e,t);return m(n),function(t){for(var r=[],a=0;a<n.length;a++){var o=n[a];(c=s[o.id]).refs--,r.push(c)}t?m(n=i()(e,t)):n=[];for(a=0;a<r.length;a++){var c;if(0===(c=r[a]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete s[c.id]}}}}function m(e){for(var t=0;t<e.length;t++){var r=e[t],a=s[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(x(r.parts[i]));a.parts.length>r.parts.length&&(a.parts.length=r.parts.length)}else{var n=[];for(i=0;i<r.parts.length;i++)n.push(x(r.parts[i]));s[r.id]={id:r.id,refs:1,parts:n}}}}function b(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function x(e){var t,r,a=document.querySelector("style["+p+'~="'+e.id+'"]');if(a){if(u)return d;a.parentNode.removeChild(a)}if(h){var i=l++;a=c||(c=b()),t=_.bind(null,a,i,!1),r=_.bind(null,a,i,!0)}else a=b(),t=function(e,t){var r=t.css,a=t.media,i=t.sourceMap;a&&e.setAttribute("media",a);f.ssrId&&e.setAttribute(p,t.id);i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,a),r=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else r()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,r,a){var i=r?"":a.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var n=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(n,s[t]):e.appendChild(n)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var i=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),n=a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"});return[r].concat(n).concat([i]).join("\n")}var s;return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var n=this[i][0];"number"==typeof n&&(a[n]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&a[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},function(e,t,r){(e.exports=r(4)(!1)).push([e.i,".select-box-criteria .select-box-criteria-box{border:1px solid #dbdbdb;min-height:300px;max-height:300px;overflow:auto}.select-box-criteria .select-box-criteria-box.is-empty{display:flex;flex-direction:column}.select-box-criteria .select-box-criteria-box .select-box-criteria-box-item{display:block;padding:5px;border-bottom:1px solid #dbdbdb;cursor:pointer;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:.9rem}.select-box-criteria .select-box-criteria-box .select-box-criteria-box-item:hover{background:#f5f5f5}.select-box-criteria .select-box-criteria-box .select-box-criteria-box-item.is-selected{background:#e8e8e8}.select-box-criteria .select-box-criteria-box-empty{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.select-box-criteria .select-box-criteria-box-empty i{font-size:2.5em}.select-box-criteria .select-box-criteria-search-box,.select-box-criteria .select-box-selected-helper{margin:0 0 10px}",""])},function(e,t,r){"use strict";var a=r(0);r.n(a).a}]);