(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(e,t,n){"use strict";n.r(t);n(12);var r=n(0),o=n.n(r),i=n(199),c=n.n(i),a=n(200),s=n.n(a),u=n(98);var p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).onClick=function(){var e=t.props,n=e.index,r=e.searchBlock;e.isMine||r(n)},t.onRightClick=function(e){e.preventDefault();var n=t.props,r=n.index;(0,n.setMine)(r)},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props,n=t.style,r=t.type,i=t.isOpen,a=t.len,u=t.isMine;return o.a.createElement("div",{onClick:function(){return e.onClick()},onContextMenu:function(t){return e.onRightClick(t)},style:n,className:s()(c.a.block,{mine:i&&10===r,open:i})},i?10===r?"X":a:u?"%":"")},r}(o.a.Component),l=Object(u.b)((function(){return{}}),(function(e){return{searchBlock:function(t){return e({type:"SEARCH_BLOCK",index:t})},setMine:function(t){return e({type:"SET_MINE",index:t})}}}))(p);var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.blocks,n=e.mines,r=e.selectedMines,i=e.restart,a=n.length-r.length;return o.a.createElement("div",{className:c.a.page},o.a.createElement("div",null,"전체 갯수: "+n.length),o.a.createElement("div",null,"남은 갯수: "+(a>0?a:0)),o.a.createElement("div",{className:c.a.blockContainer},t.map((function(e){return o.a.createElement(l,Object.assign({key:e.index},e))}))),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return i()}},"다시하기"))},r}(o.a.Component),v=Object(u.b)((function(e){return{blocks:e.blocks,mines:e.mines,selectedMines:e.selectedMines}}),(function(e){return{restart:function(){return e({type:"RESTART"})}}}))(f);t.default=v},200:function(e,t,n){var r;n(73),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=component---src-pages-index-js-e8206ac7d35cae9d9efa.js.map