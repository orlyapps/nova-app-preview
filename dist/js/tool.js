/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
    router.addRoutes([{
        name: 'nova-app-preview',
        path: '/nova-app-preview',
        component: __webpack_require__(2)
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(9)
/* template */
var __vue_template__ = __webpack_require__(10)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-68ff5483"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("1eba3f4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.phone-frame-wrap[data-v-68ff5483] {\n  position: relative;\n  width: 375px;\n  height: 667px;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 0px 6px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08), 0 0px 6px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.phone-frame-wrap .statusbar[data-v-68ff5483] {\n    position: absolute;\n    top: 0;\n    width: 375px;\n    height: 24px;\n    padding: 5px 0;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-color: #e64116;\n    background-position: center;\n    border-radius: 3px 3px 0 0;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAwCAYAAABOtv+8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACdJJREFUeNrs3X9IlFsex3FNM9Oro47u2K2bpSSpaWmJXqEFWeXmH8betI32CkvkkrBsQoLbDxDyj/ReKIIlqOiHC0FrakVyK3Lpj8WsoAysEBWdtU3Mcvx1c/LHlHu+7p0Y587o+Guaub1f8OAzz3POmXGc4POcvnMeTw8Pj288AAAAALg0T4I7AAAAQHAHAAAAQHAHAAAACO4AAAAACO4AAAAACO4AAAAAwR0AAAAAwR0AAAAAwR0AAAAguAMAAMAlHTx4cN1058vLy9t4l1zXEt4CAAAAwPUx4w4AABaFt7e3p5eXl0dQUJB3ZGTk8tjY2ICIiIhAjUbju3TpUnXae4nJZPowPj5uGh4eHjMYDCN6vf6n5ubmn7q6usZGR0c/qG3i1/J+ZGdna2traw3OfM6ZZthnwgy8i/2b4i0AAAALGdb9/PyWrFy50mfTpk2ajRs3hmm1Wn977VWA95JN9VkWFhYWsH79+rCsrCwPFdjH29vb+548edKvgvzwwMCAyZ1DvIT2uLi4EGcHdxDcAQAAfmH16tU+SUlJmtTU1PDpwrojli1btjQ2NlYn29DQ0EhbW1tffX19b0dHx4jRaPzgjqGdTwgI7gAA4JMLDg72LiwsjA0MDPRd6LFlzM2bN38ZExMT2tLS0ltRUfHSXcI7oR0LiS+nAgCAeYuPj/dfjNBuyc/PzycxMfHLyMhIX3d4Twjt9lVXVyfU1dWltba25nV2du6TzZF+0sdgMJRMTEzcNm/yWMaby+t48OBB5uDg4A/msUwmU3V3d3dRSUmJbrp+cl7aSXvLfqdPn45azPeNGXcAADBvDx8+HMrIyBhcsWKFZjGfR4Wjwba2tneEdvclQdf62NDQUJMDf/ui8PDwTNkfGxvrGRkZ6fH19dWFhISk5eTkpKkQfjw1NbVuFp+lj+MZjcZ2Fb6H/f39I+XY0aNHM7du3VqamZnZYN1Pwnl+fv73Xl5eX8jrGB4e7pDXIf3U8a+joqJO2OpHcAcAAC5Bvjh68eLFjqKiog1Sn255TgWcJatXr9aFKsHBweEqaK1RQUfj6enpo0KcaXx8/J3qb1D+29/f/1oFqlc9PT2DNp5jXJ7D1b+kSmifnmVIl8Dr4+Ojm6lPU1PTtxKM379///b69eulubm5TdYBPCUlRWbKm0pLS3tmGk9m+mcaLz09/YB6OCWA79y58wtzaH/16lWdulA9bj4n/2ugPuffSj/VrqmqqurtQr93LAcJAAAWzI4dO36TlZUVKfsq/ATHxMRs0Gq1XwUEBHylws5yR8Z49+5drwp3L1UQam5paWlXQd0kx2/dutVx9erV1+4c2p29vKKrLwcpAXrdunV5EuY1Gk3xNBeG/5CA39bWdik6OvqS9XkpVZEw/fTp0zMJCQnXHLjQtDuehPMrV65Uy35NTU2xZaiXC4j4+Ph9MtOuLlD/ZG9cR1/HbFHjDgAAFowEa71e36dCy7pt27b9OSoq6ndBQUHRjoZ2sXz58lCdTrcpOTn5D9u3b//jmjVrwmVMdw/tmDvzrLwKzjZLaqRcRX76+vpOWc1IatHl4kA2y+NSZiMXC3fv3r1vPZblTLn6HE+pnY+IiPhafqqLSpslOebj5nYLjVIZAACwoM6fP6/Pzc39rbe3t998xvH09PTSaDSRKvgHyZiE9s+XzHzLz8rKyo7Z9FO5Wycz+j8//DizPt3svqW+vr4pZTdS2uNIP0fbEdwBAMAn1dPTM15WVnbj1KlT68PCwjbMZ6w3b948O3HixG0Zk9D++bIsV7Ems+qBgYGTM+P2ZuRnw7xCjdS/Hz9+fMqM/Ez1+PL86kLBw5G6fYI7AABwCVVVVa/T09Mr9+7du1KFmOC5jDE2NtavQlTl5cuXXxHaYU9hYeHkUpJS+mId8H9+vG26/rJKTGho6GSJzapVq3RbtmyZHO/Ro0dnFuMLpgR3AADgco4cOfIkMTHxx9TU1O88/r8gxmxMNDY2/ihjuOrv9/jx4z0q2NW78t+grKzs7/PpX15evs2Vfz/5sqgsBymz4+oC78xcxti9e/c+84y9mXxpdTZLSzoLX04FAACLor+/33TgwIEbXV1dj2bbV/pIXxnDVUN7UlLSLv7Kn47cPElWeJF9mR0vKChon8s4zc3NdRLUZZMlHuUiQOriHb0pFMEdAAD8Kty/f3+ooqLin0ajsdvRPtJW+khfQjtskfIWc0mLLL04n9lx6StLQsom67KfO3fub3Jc1mSf6x1ZCe4AAMAtHTt2rLm+vv76xMTE+5naShtpK30I7bAX2i1vgrTQ66XLzL35JlHJycmzWtZRauQJ7gAAwG0ZjcYPRUVFdXq9/t8ztZU20lb6ENphTW6OtGfPnhJbdy6dDZlJl03Gs3V+YGBgsuwmKCgoyvK45V1fbQkJCdE50o7gDgAAXNazZ8+MJ0+erFSB5j/22sg5aSNtCe2wFdorKiq+l6UWJRjPNbSLnJycH2TbtWtXpK3z5sCuLiB7rC5CJx9rtVqb/QICAnS2+hHcAQCAWzl79mznnTt3rphMpl8Eczkm56QNoR22SGj38/OLUqG4PT8/v9TRsG+eXbc8PjY2Nhms09PTf2/dR0pxzKvMdHZ2Tpk5v3fv3mQtvaxkI+0sz8l68uHh4ZmW7RaaLM30DR8FAADgDGvXrl1WW1u7Ny4ubrvl8efPn9/Izs4+r9frR90ptB86dOivsxmvvLy8zZmvf2Ji4va8gqKn56IuB9na2ponK7jIDPp0dzOVFV7ky6Ky/+LFi2ujo6PD9tpeunSprrS0dDKYS2CXmXXr36Wuri4tIyOjRPb7+voaGhsb/zU4OPg2Ojo6KjY29jspxZELBH9//79Yj9/d3V0kAV1Wn5HVbF6+fNkjte2JiYl58r8BMp5Wqy1djPeLddwBAIDTSDA/fPjwlQsXLkSpcBMnxwwGw3M55m6hHc5jWWtuDvD2JCQkyCz5tKUqmZmZDSq8l6anpx+Q2XMV4tMsz0v9/P79+22uCy8lOupC4q28jpSUlCK1fTwnob2goODEYr0PBHcAAOBUN2/eNFy7dq0qLy8vXB7LvhwjtH9+ZHZcgnZvb+/wdO3k5krmu5vOpLKyssNqv9heeFc/JMCnRURETNasj4yMDFdXVzeYZ+ztUe3PlJSUXM/NzU3z9fX1l34NDQ1Nc11L3lGUygAAAKdTIcy7pqZmh+zn5ORcVcHNZW60NJvQTqkMnIkZdwAA4HQS1IuLi2+Z990xtAPOxow7AAAAQHAHAAAAQHAHAAAACO4AAAAACO4AAAAACO4AAAAAwR0AAAAAwR0AAAAAwR0AAAAguAMAAAAguAMAAAAEdwAAAACu6X8CDABf959I8RLypgAAAABJRU5ErkJggg==\");\n}\n.phone-frame-wrap iframe[data-v-68ff5483] {\n    height: 647px;\n    margin-top: 20px;\n    width: 100%;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        //
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("heading", { staticClass: "mb-6" }, [_vm._v("App Preview")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "card",
        { staticClass: "bg-90 flex flex-col items-center justify-center py-8" },
        [
          _c("div", { staticClass: "phone-frame-wrap" }, [
            _c("div", { staticClass: "statusbar" }),
            _vm._v(" "),
            _c("iframe", { attrs: { src: "/app/" } })
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex justify-between" }, [
      _c("div", { staticClass: "relative h-9 mb-6" }, [
        _c("span", { staticClass: "ml-auto mb-6" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-default btn-primary",
              attrs: {
                dusk: "create-button",
                href: "/apk/app.apk",
                target: "_blank"
              }
            },
            [_vm._v("Download App")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);