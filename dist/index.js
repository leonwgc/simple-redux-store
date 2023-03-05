"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("react-redux"),e=require("redux"),t=require("react");function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function o(r){for(var e=1;arguments.length>e;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){i(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function i(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function u(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);e>t;t++)n[t]=r[t];return n}function a(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function(r,e){if(r){if("string"==typeof r)return u(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(r,e):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return r.length>n?{done:!1,value:r[n++]}:{done:!0}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return a=r.done,r},e:function(r){c=!0,i=r},f:function(){try{a||null==t.return||t.return()}finally{if(c)throw i}}}}var c={},f=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"Update":return o(o({},r),e.payload);default:return o({},r)}},l=function(){return e.combineReducers({app:f})};Object.defineProperty(exports,"Provider",{enumerable:!0,get:function(){return r.Provider}}),exports.configureStore=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.compose;t&&"undefined"!=typeof window&&"function"==typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&(n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}));var o=e.createStore(l(),{app:r},n(e.applyMiddleware()));return o},exports.useAppData=function(e,t){return r.useSelector((function(r){var t=r.app||{};if(!e)return t;if("string"==typeof e)return i({},e,t[e]);if(Array.isArray(e)&&e.length>0){var n={};return e.map((function(r){return n[r]=t[r]})),n}return t}),t||function(e){return function(t,n){if(!e)return t===n;if("string"==typeof e)return r.shallowEqual(t[e],n[e]);if(Array.isArray(e)&&e.length>0){var o,i=a(e);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(!r.shallowEqual(t[u],n[u]))return!1}}catch(r){i.e(r)}finally{i.f()}}return!0}}(e))},exports.useUpdateStore=function(){var e=r.useDispatch();return t.useCallback((function(r){!function(r){return function(){return r({type:"Update",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}})}}(e)(o({},r))}),[e])};
