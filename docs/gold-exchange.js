!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["gold-exchange"]=n():e["gold-exchange"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.exchangeCoins=void 0;var r=t(1),o=void 0;n.exchangeCoins=function(e){var n=function(e){var n=new Map;(e=e.toLowerCase().split(" ")).forEach(function(e){var t=e.match(/[a-z]/);if(t){var r=parseInt(e);n.has(t)?n.set(t,n.get(t)+r):n.set(t,r)}});var t=[];return n.forEach(function(e,n){t.push({symbol:n[0],quantity:e})}),t}(e),t=(null!==o&&void 0!==o||(o=new r.Exchanger({rate:.02,newCurrency:[{symbol:"g",value:1e3},{symbol:"e",value:100},{symbol:"s",value:10},{symbol:"c",value:1}]})),o).exchange(n);return t.reduce(function(e,n){return e+""+n.quantity+n.symbol+" "},"")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var o=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.rate,r=n.oldCurrency,o=n.newCurrency;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.convertToBase=this.convertToBase.bind(this),this.convertToCoins=this.convertToCoins.bind(this),this.exchange=this.exchange.bind(this);var u=[{symbol:"p",value:1e3},{symbol:"g",value:100},{symbol:"e",value:50},{symbol:"s",value:10},{symbol:"c",value:1}];this.newCurrency=void 0===o?u:o.sort(function(e,n){return n.value-e.value}),this.oldCurrency=void 0===r?u:r.sort(function(e,n){return n.value-e.value}),this.rate=void 0===t?.1:t}return r(e,[{key:"convertToBase",value:function(e){var n=this;return e.reduce(function(e,t){return n.oldCurrency.forEach(function(n){if(t.symbol===n.symbol)return e+=t.quantity*n.value}),e},0)}},{key:"convertToCoins",value:function(e){var n=[];return this.newCurrency.forEach(function(t){if(e/t.value>=1){var r=Math.floor(e/t.value);n.push({symbol:t.symbol,quantity:r}),e%=t.value}}),n}},{key:"exchange",value:function(e){var n=this.convertToBase(e),t=Math.round(n*this.rate);return t<=0&&(t=1),this.convertToCoins(t)}}]),e}();n.Exchanger=o}])});
//# sourceMappingURL=gold-exchange.js.map