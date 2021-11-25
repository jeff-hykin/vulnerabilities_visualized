// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../node_modules/css-baseline/css/3.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../global.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../static_files/tailwind.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/@vue/shared/dist/shared.esm-bundler.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.escapeHtmlComment = escapeHtmlComment;
exports.generateCodeFrame = generateCodeFrame;
exports.includeBooleanAttr = includeBooleanAttr;
exports.isSSRSafeAttrName = isSSRSafeAttrName;
exports.looseEqual = looseEqual;
exports.looseIndexOf = looseIndexOf;
exports.makeMap = makeMap;
exports.normalizeClass = normalizeClass;
exports.normalizeProps = normalizeProps;
exports.normalizeStyle = normalizeStyle;
exports.parseStringStyle = parseStringStyle;
exports.stringifyStyle = stringifyStyle;
exports.toTypeString = exports.toRawType = exports.toNumber = exports.toHandlerKey = exports.toDisplayString = exports.slotFlagsText = exports.remove = exports.propsToAttrMap = exports.objectToString = exports.isVoidTag = exports.isSymbol = exports.isString = exports.isSpecialBooleanAttr = exports.isSet = exports.isSVGTag = exports.isReservedProp = exports.isPromise = exports.isPlainObject = exports.isOn = exports.isObject = exports.isNoUnitNumericStyleProp = exports.isModelListener = exports.isMap = exports.isKnownSvgAttr = exports.isKnownHtmlAttr = exports.isIntegerKey = exports.isHTMLTag = exports.isGloballyWhitelisted = exports.isFunction = exports.isDate = exports.isBooleanAttr = exports.isArray = exports.invokeArrayFns = exports.hyphenate = exports.hasOwn = exports.hasChanged = exports.getGlobalThis = exports.extend = exports.def = exports.capitalize = exports.camelize = exports.babelParserDefaultPlugins = exports.PatchFlagNames = exports.NOOP = exports.NO = exports.EMPTY_OBJ = exports.EMPTY_ARR = void 0;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(',');

  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}
/**
 * dev only flag -> name mapping
 */


const PatchFlagNames = {
  [1
  /* TEXT */
  ]: `TEXT`,
  [2
  /* CLASS */
  ]: `CLASS`,
  [4
  /* STYLE */
  ]: `STYLE`,
  [8
  /* PROPS */
  ]: `PROPS`,
  [16
  /* FULL_PROPS */
  ]: `FULL_PROPS`,
  [32
  /* HYDRATE_EVENTS */
  ]: `HYDRATE_EVENTS`,
  [64
  /* STABLE_FRAGMENT */
  ]: `STABLE_FRAGMENT`,
  [128
  /* KEYED_FRAGMENT */
  ]: `KEYED_FRAGMENT`,
  [256
  /* UNKEYED_FRAGMENT */
  ]: `UNKEYED_FRAGMENT`,
  [512
  /* NEED_PATCH */
  ]: `NEED_PATCH`,
  [1024
  /* DYNAMIC_SLOTS */
  ]: `DYNAMIC_SLOTS`,
  [2048
  /* DEV_ROOT_FRAGMENT */
  ]: `DEV_ROOT_FRAGMENT`,
  [-1
  /* HOISTED */
  ]: `HOISTED`,
  [-2
  /* BAIL */
  ]: `BAIL`
};
/**
 * Dev only
 */

exports.PatchFlagNames = PatchFlagNames;
const slotFlagsText = {
  [1
  /* STABLE */
  ]: 'STABLE',
  [2
  /* DYNAMIC */
  ]: 'DYNAMIC',
  [3
  /* FORWARDED */
  ]: 'FORWARDED'
};
exports.slotFlagsText = slotFlagsText;
const GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
const isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
exports.isGloballyWhitelisted = isGloballyWhitelisted;
const range = 2;

function generateCodeFrame(source, start = 0, end = source.length) {
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  let lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];

  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        const line = j + 1;
        res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + '^'.repeat(length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
const isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` + `loop,open,required,reversed,scoped,seamless,` + `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. <select multiple> compiles to { multiple: '' }
 */

exports.isBooleanAttr = isBooleanAttr;

function includeBooleanAttr(value) {
  return !!value || value === '';
}

const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  const isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }

  return attrValidationCache[name] = !isUnsafe;
}

const propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

exports.propsToAttrMap = propsToAttrMap;
const isNoUnitNumericStyleProp = /*#__PURE__*/makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` + `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` + `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` + `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` + `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` + `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` + // SVG
`fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` + `stroke-miterlimit,stroke-opacity,stroke-width`);
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
const isKnownHtmlAttr = /*#__PURE__*/makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` + `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` + `border,buffered,capture,challenge,charset,checked,cite,class,code,` + `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` + `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` + `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` + `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` + `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` + `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` + `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` + `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` + `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` + `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` + `start,step,style,summary,tabindex,target,title,translate,type,usemap,` + `value,width,wrap`);
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */

exports.isKnownHtmlAttr = isKnownHtmlAttr;
const isKnownSvgAttr = /*#__PURE__*/makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` + `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` + `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` + `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` + `color-interpolation-filters,color-profile,color-rendering,` + `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` + `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` + `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` + `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` + `font-family,font-size,font-size-adjust,font-stretch,font-style,` + `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` + `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` + `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` + `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` + `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` + `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` + `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` + `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` + `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` + `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` + `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` + `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` + `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` + `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` + `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` + `specularConstant,specularExponent,speed,spreadMethod,startOffset,` + `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` + `strikethrough-position,strikethrough-thickness,string,stroke,` + `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` + `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` + `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` + `text-decoration,text-rendering,textLength,to,transform,transform-origin,` + `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` + `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` + `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` + `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` + `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` + `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` + `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
exports.isKnownSvgAttr = isKnownSvgAttr;

function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};

    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);

      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}

const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach(item => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  let ret = '';

  if (!styles || isString(styles)) {
    return ret;
  }

  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += `${normalizedKey}:${value};`;
    }
  }

  return ret;
}

function normalizeClass(value) {
  let res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
}

function normalizeProps(props) {
  if (!props) return null;
  let {
    class: klass,
    style
  } = props;

  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }

  if (style) {
    props.style = normalizeStyle(style);
  }

  return props;
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


const HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

const SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
const isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
exports.isHTMLTag = isHTMLTag;
const isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
exports.isSVGTag = isSVGTag;
const isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
exports.isVoidTag = isVoidTag;
const escapeRE = /["'&<>]/;

function escapeHtml(string) {
  const str = '' + string;
  const match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  let html = '';
  let escaped;
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;

  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(item => looseEqual(item, val));
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


const toDisplayString = val => {
  return val == null ? '' : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};

exports.toDisplayString = toDisplayString;

const replacer = (_key, val) => {
  // can't use isRef here since @vue/shared has no deps
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
        entries[`${key} =>`] = val;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


const babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
const EMPTY_OBJ = undefined !== 'production' ? Object.freeze({}) : {};
exports.EMPTY_OBJ = EMPTY_OBJ;
const EMPTY_ARR = undefined !== 'production' ? Object.freeze([]) : [];
exports.EMPTY_ARR = EMPTY_ARR;

const NOOP = () => {};
/**
 * Always return false.
 */


exports.NOOP = NOOP;

const NO = () => false;

exports.NO = NO;
const onRE = /^on[^a-z]/;

const isOn = key => onRE.test(key);

exports.isOn = isOn;

const isModelListener = key => key.startsWith('onUpdate:');

exports.isModelListener = isModelListener;
const extend = Object.assign;
exports.extend = extend;

const remove = (arr, el) => {
  const i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

exports.remove = remove;
const hasOwnProperty = Object.prototype.hasOwnProperty;

const hasOwn = (val, key) => hasOwnProperty.call(val, key);

exports.hasOwn = hasOwn;
const isArray = Array.isArray;
exports.isArray = isArray;

const isMap = val => toTypeString(val) === '[object Map]';

exports.isMap = isMap;

const isSet = val => toTypeString(val) === '[object Set]';

exports.isSet = isSet;

const isDate = val => val instanceof Date;

exports.isDate = isDate;

const isFunction = val => typeof val === 'function';

exports.isFunction = isFunction;

const isString = val => typeof val === 'string';

exports.isString = isString;

const isSymbol = val => typeof val === 'symbol';

exports.isSymbol = isSymbol;

const isObject = val => val !== null && typeof val === 'object';

exports.isObject = isObject;

const isPromise = val => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

exports.isPromise = isPromise;
const objectToString = Object.prototype.toString;
exports.objectToString = objectToString;

const toTypeString = value => objectToString.call(value);

exports.toTypeString = toTypeString;

const toRawType = value => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

exports.toRawType = toRawType;

const isPlainObject = val => toTypeString(val) === '[object Object]';

exports.isPlainObject = isPlainObject;

const isIntegerKey = key => isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;

exports.isIntegerKey = isIntegerKey;
const isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');
exports.isReservedProp = isReservedProp;

const cacheStringFunction = fn => {
  const cache = Object.create(null);
  return str => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

const camelizeRE = /-(\w)/g;
/**
 * @private
 */

const camelize = cacheStringFunction(str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
});
exports.camelize = camelize;
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

const hyphenate = cacheStringFunction(str => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */

exports.hyphenate = hyphenate;
const capitalize = cacheStringFunction(str => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */

exports.capitalize = capitalize;
const toHandlerKey = cacheStringFunction(str => str ? `on${capitalize(str)}` : ``); // compare whether a value has changed, accounting for NaN.

exports.toHandlerKey = toHandlerKey;

const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

exports.hasChanged = hasChanged;

const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

exports.invokeArrayFns = invokeArrayFns;

const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};

exports.def = def;

const toNumber = val => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

exports.toNumber = toNumber;

let _globalThis;

const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};

exports.getGlobalThis = getGlobalThis;
},{}],"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computed = computed;
exports.customRef = customRef;
exports.deferredComputed = deferredComputed;
exports.effect = effect;
exports.effectScope = effectScope;
exports.enableTracking = enableTracking;
exports.getCurrentScope = getCurrentScope;
exports.isProxy = isProxy;
exports.isReactive = isReactive;
exports.isReadonly = isReadonly;
exports.isRef = isRef;
exports.markRaw = markRaw;
exports.onScopeDispose = onScopeDispose;
exports.pauseTracking = pauseTracking;
exports.proxyRefs = proxyRefs;
exports.reactive = reactive;
exports.readonly = readonly;
exports.ref = ref;
exports.resetTracking = resetTracking;
exports.shallowReactive = shallowReactive;
exports.shallowReadonly = shallowReadonly;
exports.shallowRef = shallowRef;
exports.stop = stop;
exports.toRaw = toRaw;
exports.toRef = toRef;
exports.toRefs = toRefs;
exports.track = track;
exports.trigger = trigger;
exports.triggerRef = triggerRef;
exports.unref = unref;
exports.ReactiveEffect = exports.ITERATE_KEY = exports.EffectScope = void 0;

var _shared = require("@vue/shared");

function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}

let activeEffectScope;
const effectScopeStack = [];

class EffectScope {
  constructor(detached = false) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];

    if (!detached && activeEffectScope) {
      this.parent = activeEffectScope;
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
    }
  }

  run(fn) {
    if (this.active) {
      try {
        this.on();
        return fn();
      } finally {
        this.off();
      }
    } else if (undefined !== 'production') {
      warn(`cannot run an inactive effect scope.`);
    }
  }

  on() {
    if (this.active) {
      effectScopeStack.push(this);
      activeEffectScope = this;
    }
  }

  off() {
    if (this.active) {
      effectScopeStack.pop();
      activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
    }
  }

  stop(fromParent) {
    if (this.active) {
      this.effects.forEach(e => e.stop());
      this.cleanups.forEach(cleanup => cleanup());

      if (this.scopes) {
        this.scopes.forEach(e => e.stop(true));
      } // nested scope, dereference from parent to avoid memory leaks


      if (this.parent && !fromParent) {
        // optimized O(1) removal
        const last = this.parent.scopes.pop();

        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }

      this.active = false;
    }
  }

}

exports.EffectScope = EffectScope;

function effectScope(detached) {
  return new EffectScope(detached);
}

function recordEffectScope(effect, scope) {
  scope = scope || activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
  }
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (undefined !== 'production') {
    warn(`onScopeDispose() is called when there is no active effect scope` + ` to be associated with.`);
  }
}

const createDep = effects => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};

const wasTracked = dep => (dep.w & trackOpBit) > 0;

const newTracked = dep => (dep.n & trackOpBit) > 0;

const initDepMarkers = ({
  deps
}) => {
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].w |= trackOpBit; // set was tracked
    }
  }
};

const finalizeDepMarkers = effect => {
  const {
    deps
  } = effect;

  if (deps.length) {
    let ptr = 0;

    for (let i = 0; i < deps.length; i++) {
      const dep = deps[i];

      if (wasTracked(dep) && !newTracked(dep)) {
        dep.delete(effect);
      } else {
        deps[ptr++] = dep;
      } // clear bits


      dep.w &= ~trackOpBit;
      dep.n &= ~trackOpBit;
    }

    deps.length = ptr;
  }
};

const targetMap = new WeakMap(); // The number of effects currently being tracked recursively.

let effectTrackDepth = 0;
let trackOpBit = 1;
/**
 * The bitwise track markers support at most 30 levels op recursion.
 * This value is chosen to enable modern JS engines to use a SMI on all platforms.
 * When recursion depth is greater, fall back to using a full cleanup.
 */

const maxMarkerBits = 30;
const effectStack = [];
let activeEffect;
const ITERATE_KEY = Symbol(undefined !== 'production' ? 'iterate' : '');
exports.ITERATE_KEY = ITERATE_KEY;
const MAP_KEY_ITERATE_KEY = Symbol(undefined !== 'production' ? 'Map key iterate' : '');

class ReactiveEffect {
  constructor(fn, scheduler = null, scope) {
    this.fn = fn;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    recordEffectScope(this, scope);
  }

  run() {
    if (!this.active) {
      return this.fn();
    }

    if (!effectStack.includes(this)) {
      try {
        effectStack.push(activeEffect = this);
        enableTracking();
        trackOpBit = 1 << ++effectTrackDepth;

        if (effectTrackDepth <= maxMarkerBits) {
          initDepMarkers(this);
        } else {
          cleanupEffect(this);
        }

        return this.fn();
      } finally {
        if (effectTrackDepth <= maxMarkerBits) {
          finalizeDepMarkers(this);
        }

        trackOpBit = 1 << --effectTrackDepth;
        resetTracking();
        effectStack.pop();
        const n = effectStack.length;
        activeEffect = n > 0 ? effectStack[n - 1] : undefined;
      }
    }
  }

  stop() {
    if (this.active) {
      cleanupEffect(this);

      if (this.onStop) {
        this.onStop();
      }

      this.active = false;
    }
  }

}

exports.ReactiveEffect = ReactiveEffect;

function cleanupEffect(effect) {
  const {
    deps
  } = effect;

  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }

    deps.length = 0;
  }
}

function effect(fn, options) {
  if (fn.effect) {
    fn = fn.effect.fn;
  }

  const _effect = new ReactiveEffect(fn);

  if (options) {
    (0, _shared.extend)(_effect, options);
    if (options.scope) recordEffectScope(_effect, options.scope);
  }

  if (!options || !options.lazy) {
    _effect.run();
  }

  const runner = _effect.run.bind(_effect);

  runner.effect = _effect;
  return runner;
}

function stop(runner) {
  runner.effect.stop();
}

let shouldTrack = true;
const trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!isTracking()) {
    return;
  }

  let depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  let dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = createDep());
  }

  const eventInfo = undefined !== 'production' ? {
    effect: activeEffect,
    target,
    type,
    key
  } : undefined;
  trackEffects(dep, eventInfo);
}

function isTracking() {
  return shouldTrack && activeEffect !== undefined;
}

function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack = false;

  if (effectTrackDepth <= maxMarkerBits) {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit; // set newly tracked

      shouldTrack = !wasTracked(dep);
    }
  } else {
    // Full cleanup mode.
    shouldTrack = !dep.has(activeEffect);
  }

  if (shouldTrack) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if (undefined !== 'production' && activeEffect.onTrack) {
      activeEffect.onTrack(Object.assign({
        effect: activeEffect
      }, debuggerEventExtraInfo));
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  let deps = [];

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    deps = [...depsMap.values()];
  } else if (key === 'length' && (0, _shared.isArray)(target)) {
    depsMap.forEach((dep, key) => {
      if (key === 'length' || key >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!(0, _shared.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0, _shared.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0, _shared.isIntegerKey)(key)) {
          // new index added to array -> length changes
          deps.push(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!(0, _shared.isArray)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));

          if ((0, _shared.isMap)(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if ((0, _shared.isMap)(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  const eventInfo = undefined !== 'production' ? {
    target,
    type,
    key,
    newValue,
    oldValue,
    oldTarget
  } : undefined;

  if (deps.length === 1) {
    if (deps[0]) {
      if (undefined !== 'production') {
        triggerEffects(deps[0], eventInfo);
      } else {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];

    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }

    if (undefined !== 'production') {
      triggerEffects(createDep(effects), eventInfo);
    } else {
      triggerEffects(createDep(effects));
    }
  }
}

function triggerEffects(dep, debuggerEventExtraInfo) {
  // spread into array for stabilization
  for (const effect of (0, _shared.isArray)(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (undefined !== 'production' && effect.onTrigger) {
        effect.onTrigger((0, _shared.extend)({
          effect
        }, debuggerEventExtraInfo));
      }

      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}

const isNonTrackableKeys = /*#__PURE__*/(0, _shared.makeMap)(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(key => Symbol[key]).filter(_shared.isSymbol));
const get = /*#__PURE__*/createGetter();
const shallowGet = /*#__PURE__*/createGetter(false, true);
const readonlyGet = /*#__PURE__*/createGetter(true);
const shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
const arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  const instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(key => {
    instrumentations[key] = function (...args) {
      const arr = toRaw(this);

      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      const res = arr[key](...args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(key => {
    instrumentations[key] = function (...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter(isReadonly = false, shallow = false) {
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    const targetIsArray = (0, _shared.isArray)(target);

    if (!isReadonly && targetIsArray && (0, _shared.hasOwn)(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    const res = Reflect.get(target, key, receiver);

    if ((0, _shared.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      const shouldUnwrap = !targetIsArray || !(0, _shared.isIntegerKey)(key);
      return shouldUnwrap ? res.value : res;
    }

    if ((0, _shared.isObject)(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

const set = /*#__PURE__*/createSetter();
const shallowSet = /*#__PURE__*/createSetter(true);

function createSetter(shallow = false) {
  return function set(target, key, value, receiver) {
    let oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);

      if (!(0, _shared.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    const hadKey = (0, _shared.isArray)(target) && (0, _shared.isIntegerKey)(key) ? Number(key) < target.length : (0, _shared.hasOwn)(target, key);
    const result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if ((0, _shared.hasChanged)(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  const hadKey = (0, _shared.hasOwn)(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  const result = Reflect.has(target, key);

  if (!(0, _shared.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , (0, _shared.isArray)(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,

  set(target, key) {
    if (undefined !== 'production') {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }

    return true;
  },

  deleteProperty(target, key) {
    if (undefined !== 'production') {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }

    return true;
  }

};
const shallowReactiveHandlers = /*#__PURE__*/(0, _shared.extend)({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

const shallowReadonlyHandlers = /*#__PURE__*/(0, _shared.extend)({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

const toShallow = value => value;

const getProto = v => Reflect.getPrototypeOf(v);

function get$1(target, key, isReadonly = false, isShallow = false) {
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);
  const {
    has
  } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key, isReadonly = false) {
  const target = this["__v_raw"
  /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target, isReadonly = false) {
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const {
    has,
    get
  } = getProto(target);
  let hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (undefined !== 'production') {
    checkIdentityKeys(target, has, key);
  }

  const oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if ((0, _shared.hasChanged)(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  const target = toRaw(this);
  const {
    has,
    get
  } = getProto(target);
  let hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (undefined !== 'production') {
    checkIdentityKeys(target, has, key);
  }

  const oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  const result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = undefined !== 'production' ? (0, _shared.isMap)(target) ? new Map(target) : new Set(target) : undefined; // forward the operation before queueing reactions

  const result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"
    /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach((value, key) => {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function (...args) {
    const target = this["__v_raw"
    /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = (0, _shared.isMap)(rawTarget);
    const isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === 'keys' && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return {
      // iterator protocol
      next() {
        const {
          value,
          done
        } = innerIterator.next();
        return done ? {
          value,
          done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },

      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }

    };
  };
}

function createReadonlyMethod(type) {
  return function (...args) {
    if (undefined !== 'production') {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${(0, _shared.capitalize)(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  const mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has(key) {
      return has$1.call(this, key, true);
    },

    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(method => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* #__PURE__*/createInstrumentations();

function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get((0, _shared.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

const mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  const rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    const type = (0, _shared.toRawType)(target);
    console.warn(`Reactive ${type} contains both the raw and reactive ` + `versions of the same object${type === `Map` ? ` as keys` : ``}, ` + `which can lead to inconsistencies. ` + `Avoid differentiating between the raw and reactive versions ` + `of an object and only use the reactive version if possible.`);
  }
}

const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap((0, _shared.toRawType)(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0, _shared.isObject)(target)) {
    if (undefined !== 'production') {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  const existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  const targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  const proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  const raw = observed && observed["__v_raw"
  /* RAW */
  ];
  return raw ? toRaw(raw) : observed;
}

function markRaw(value) {
  (0, _shared.def)(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

const toReactive = value => (0, _shared.isObject)(value) ? reactive(value) : value;

const toReadonly = value => (0, _shared.isObject)(value) ? readonly(value) : value;

function trackRefValue(ref) {
  if (isTracking()) {
    ref = toRaw(ref);

    if (!ref.dep) {
      ref.dep = createDep();
    }

    if (undefined !== 'production') {
      trackEffects(ref.dep, {
        target: ref,
        type: "get"
        /* GET */
        ,
        key: 'value'
      });
    } else {
      trackEffects(ref.dep);
    }
  }
}

function triggerRefValue(ref, newVal) {
  ref = toRaw(ref);

  if (ref.dep) {
    if (undefined !== 'production') {
      triggerEffects(ref.dep, {
        target: ref,
        type: "set"
        /* SET */
        ,
        key: 'value',
        newValue: newVal
      });
    } else {
      triggerEffects(ref.dep);
    }
  }
}

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value, false);
}

function shallowRef(value) {
  return createRef(value, true);
}

function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

class RefImpl {
  constructor(value, _shallow) {
    this._shallow = _shallow;
    this.dep = undefined;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : toReactive(value);
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newVal) {
    newVal = this._shallow ? newVal : toRaw(newVal);

    if ((0, _shared.hasChanged)(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : toReactive(newVal);
      triggerRefValue(this, newVal);
    }
  }

}

function triggerRef(ref) {
  triggerRefValue(ref, undefined !== 'production' ? ref.value : void 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

class CustomRefImpl {
  constructor(factory) {
    this.dep = undefined;
    this.__v_isRef = true;
    const {
      get,
      set
    } = factory(() => trackRefValue(this), () => triggerRefValue(this));
    this._get = get;
    this._set = set;
  }

  get value() {
    return this._get();
  }

  set value(newVal) {
    this._set(newVal);
  }

}

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if (undefined !== 'production' && !isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`);
  }

  const ret = (0, _shared.isArray)(object) ? new Array(object.length) : {};

  for (const key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

class ObjectRefImpl {
  constructor(_object, _key) {
    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  get value() {
    return this._object[this._key];
  }

  set value(newVal) {
    this._object[this._key] = newVal;
  }

}

function toRef(object, key) {
  const val = object[key];
  return isRef(val) ? val : new ObjectRefImpl(object, key);
}

class ComputedRefImpl {
  constructor(getter, _setter, isReadonly) {
    this._setter = _setter;
    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true;
        triggerRefValue(this);
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this);
    trackRefValue(self);

    if (self._dirty) {
      self._dirty = false;
      self._value = self.effect.run();
    }

    return self._value;
  }

  set value(newValue) {
    this._setter(newValue);
  }

}

function computed(getterOrOptions, debugOptions) {
  let getter;
  let setter;
  const onlyGetter = (0, _shared.isFunction)(getterOrOptions);

  if (onlyGetter) {
    getter = getterOrOptions;
    setter = undefined !== 'production' ? () => {
      console.warn('Write operation failed: computed value is readonly');
    } : _shared.NOOP;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter);

  if (undefined !== 'production' && debugOptions) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }

  return cRef;
}

var _a;

const tick = Promise.resolve();
const queue = [];
let queued = false;

const scheduler = fn => {
  queue.push(fn);

  if (!queued) {
    queued = true;
    tick.then(flush);
  }
};

const flush = () => {
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }

  queue.length = 0;
  queued = false;
};

class DeferredComputedRefImpl {
  constructor(getter) {
    this.dep = undefined;
    this._dirty = true;
    this.__v_isRef = true;
    this[_a] = true;
    let compareTarget;
    let hasCompareTarget = false;
    let scheduled = false;
    this.effect = new ReactiveEffect(getter, computedTrigger => {
      if (this.dep) {
        if (computedTrigger) {
          compareTarget = this._value;
          hasCompareTarget = true;
        } else if (!scheduled) {
          const valueToCompare = hasCompareTarget ? compareTarget : this._value;
          scheduled = true;
          hasCompareTarget = false;
          scheduler(() => {
            if (this.effect.active && this._get() !== valueToCompare) {
              triggerRefValue(this);
            }

            scheduled = false;
          });
        } // chained upstream computeds are notified synchronously to ensure
        // value invalidation in case of sync access; normal effects are
        // deferred to be triggered in scheduler.


        for (const e of this.dep) {
          if (e.computed) {
            e.scheduler(true
            /* computedTrigger */
            );
          }
        }
      }

      this._dirty = true;
    });
    this.effect.computed = true;
  }

  _get() {
    if (this._dirty) {
      this._dirty = false;
      return this._value = this.effect.run();
    }

    return this._value;
  }

  get value() {
    trackRefValue(this); // the computed ref may get wrapped by other proxies e.g. readonly() #3376

    return toRaw(this)._get();
  }

}

_a = "__v_isReadonly"
/* IS_READONLY */
;

function deferredComputed(getter) {
  return new DeferredComputedRefImpl(getter);
}
},{"@vue/shared":"../../node_modules/@vue/shared/dist/shared.esm-bundler.js"}],"../../node_modules/@vue-reactivity/watch/dist/index.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watch = watch;
exports.watchEffect = watchEffect;

var _shared = require("@vue/shared");

var _reactivity = require("@vue/reactivity");

// src/errorHandling.ts
function callWithErrorHandling(fn, type, args) {
  let res;

  try {
    res = args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, type, args) {
  if ((0, _shared.isFunction)(fn)) {
    const res = callWithErrorHandling(fn, type, args);

    if (res && (0, _shared.isPromise)(res)) {
      res.catch(err => {
        handleError(err, type);
      });
    }

    return res;
  }

  const values = [];

  for (let i = 0; i < fn.length; i++) values.push(callWithAsyncErrorHandling(fn[i], type, args));

  return values;
}

function handleError(err, type) {
  console.error(new Error(`[@vue-reactivity/watch]: ${type}`));
  console.error(err);
}

function warn(message) {
  console.warn(createError(message));
}

function createError(message) {
  return new Error(`[reactivue]: ${message}`);
} // src/index.ts


const invoke = fn => fn();

const INITIAL_WATCHER_VALUE = {};

function watchEffect(effect2, options) {
  return doWatch(effect2, null, options);
}

function watch(source, cb, options) {
  return doWatch(source, cb, options);
}

function doWatch(source, cb, {
  immediate,
  deep,
  onTrack,
  onTrigger
} = {}) {
  let getter;

  if ((0, _shared.isArray)(source) && !(0, _reactivity.isReactive)(source)) {
    getter = () => source.map(s => {
      if ((0, _reactivity.isRef)(s)) return s.value;else if ((0, _reactivity.isReactive)(s)) return traverse(s);else if ((0, _shared.isFunction)(s)) return callWithErrorHandling(s, "watch getter");else warn("invalid source");
    });
  } else if ((0, _reactivity.isRef)(source)) {
    getter = () => source.value;
  } else if ((0, _reactivity.isReactive)(source)) {
    getter = () => source;

    deep = true;
  } else if ((0, _shared.isFunction)(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, "watch getter");
    } else {
      getter = () => {
        if (cleanup) cleanup();
        return callWithErrorHandling(source, "watch callback", [onInvalidate]);
      };
    }
  } else {
    getter = _shared.NOOP;
  }

  if (cb && deep) {
    const baseGetter = getter;

    getter = () => traverse(baseGetter());
  }

  let cleanup;

  const onInvalidate = fn => {
    cleanup = runner.options.onStop = () => {
      callWithErrorHandling(fn, "watch cleanup");
    };
  };

  let oldValue = (0, _shared.isArray)(source) ? [] : INITIAL_WATCHER_VALUE;
  const applyCb = cb ? () => {
    const newValue = runner();

    if (deep || (0, _shared.hasChanged)(newValue, oldValue)) {
      if (cleanup) cleanup();
      callWithAsyncErrorHandling(cb, "watch callback", [newValue, oldValue === INITIAL_WATCHER_VALUE ? void 0 : oldValue, onInvalidate]);
      oldValue = newValue;
    }
  } : void 0;
  const scheduler = invoke;
  const runner = (0, _reactivity.effect)(getter, {
    lazy: true,
    onTrack,
    onTrigger,
    scheduler: applyCb ? () => scheduler(applyCb) : scheduler
  });

  if (applyCb) {
    if (immediate) applyCb();else oldValue = runner();
  } else {
    runner();
  }

  const stopWatcher = function () {
    (0, _reactivity.stop)(runner);
  };

  stopWatcher.effect = runner;
  return stopWatcher;
}

function traverse(value, seen = new Set()) {
  if (!(0, _shared.isObject)(value) || seen.has(value)) return value;
  seen.add(value);

  if ((0, _shared.isArray)(value)) {
    for (let i = 0; i < value.length; i++) traverse(value[i], seen);
  } else if (value instanceof Map) {
    value.forEach((_, key) => {
      traverse(value.get(key), seen);
    });
  } else if (value instanceof Set) {
    value.forEach(v => {
      traverse(v, seen);
    });
  } else {
    for (const key of Object.keys(value)) traverse(value[key], seen);
  }

  return value;
}
},{"@vue/shared":"../../node_modules/@vue/shared/dist/shared.esm-bundler.js","@vue/reactivity":"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js"}],"../../node_modules/quik-router/main/main.js":[function(require,module,exports) {
const { reactive } = require("@vue/reactivity")
const { watch } = require("@vue-reactivity/watch")

// 
// helpers
// 
const getParameters = function(url) {
    return JSON.parse(`${new URL(url).searchParams.get("_")}`) || {}
}
const addParameters = function(url=window.location.href) {
    // append the parameters
    const urlObject = new URL(url)
    urlObject.searchParams.append('_', JSON.stringify(pageInfo))
    return `${urlObject}`
}

// 
// intial page data
// 
const pageInfo = reactive(getParameters(window.location.href))
let ignoreChangesToPageInfo = false
const goListeners = new Set([])
const pageInfoChangeListeners = new Set([])
function onGo() {
    // run the callback
    for (const each of goListeners) {
        each(pageInfo)
    }
}
function onPageInfoChange() {
    // run all the callbacks since the object changed
    for (const each of pageInfoChangeListeners) {
        each()
    }
}
function quietlySetPageInfo(replacementInfo) {
    // pause the watch function 
    ignoreChangesToPageInfo = true
    // delete all the existing data
    for (const [key, value] of Object.entries(pageInfo)) {
        delete pageInfo[key]
    }
    // put the incoming data into the object
    Object.assign(pageInfo, replacementInfo||{})
    // resume the watch function
    ignoreChangesToPageInfo = false
    onPageInfoChange()
}

// 
// whenever the pageInfo is updated, update the URL
// 
function updateUrl() {
    const urlWithParameters = addParameters(window.location.origin)
    // change the url in the top bar to include the new path and parameters
    window.history.replaceState(JSON.parse(JSON.stringify(pageInfo)), '', urlWithParameters)
}
// update the url when pageInfo changes
watch(pageInfo, ()=>{
    if (!ignoreChangesToPageInfo) {
        updateUrl()
        onPageInfoChange()
    }
})

// 
// when user presses back/forward, update the pageInfo
// 
window.addEventListener("popstate", ({state})=>{
    // change the value
    quietlySetPageInfo(state)
    // run all the callbacks to let them know something changed
    onGo()
})

module.exports = {
    goTo(object) {
        // first update the pageInfo 
        quietlySetPageInfo(object)
        // then generate the new url
        const urlWithParameters = addParameters(window.location.origin)
        // push the change onto history
        window.history.pushState(JSON.parse(JSON.stringify(pageInfo)), '', urlWithParameters)
        // run all the callbacks
        onGo()
    },
    goSecretlyTo(object) {
        // quitely is to save processing power if there are a lot of keys/values
        quietlySetPageInfo(object)
        // update url once instead of once per key-value
        updateUrl()
    },
    goBack() {
        // this will automaticall call the "popstate" listener,
        // which will set the pageInfo and callbacks accordingly
        window.history.back()
    },
    pageInfo,
    addEventListener(type, listener) {
        if (type == "go") {
            goListeners.add(listener)
        } else if (type == "allChanges") {
            pageInfoChangeListeners.add(listener)
        }
    },
    removeEventListener(type, listener) {
        if (type == "go") {
            goListeners.remove(listener)
        } else if (type == "allChanges") {
            pageInfoChangeListeners.remove(listener)
        }
    },
}
},{"@vue/reactivity":"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js","@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs"}],"../code/skeletons/Header.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// FIXME: Include help button to launch overlay
module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    style: "min-width: 100%; height: fit-content; padding: 1.2rem; margin: 0; z-index: 9999999;",
    class: "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow"
  }, /*#__PURE__*/React.createElement("div", {
    class: "relative flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    "aria-label": "GitBug",
    title: "GitBug",
    class: "inline-flex items-center"
  }, /*#__PURE__*/React.createElement("span", {
    class: "ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
  }, "GitBug")), /*#__PURE__*/React.createElement("ul", {
    class: "flex items-center hidden space-x-8 lg:flex"
  })));
};
},{}],"../code/skeletons/SquareGrid.jsx":[function(require,module,exports) {
var _excluded = ["children", "numberOfSquares"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

module.exports = function (_ref) {
  var children = _ref.children,
      _ref$numberOfSquares = _ref.numberOfSquares,
      numberOfSquares = _ref$numberOfSquares === void 0 ? 10 : _ref$numberOfSquares,
      props = _objectWithoutProperties(_ref, _excluded);

  var percentage = "".concat(100 / numberOfSquares, "% ");
  var columnTemplate = percentage.repeat(numberOfSquares);
  return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement("div", {
    style: "\n                    display: grid;\n                    width: 100%;\n                    aspect-ratio: 1;\n                    flex-shrink: 0;\n                    overflow: visible;\n                    grid-template-columns: ".concat(columnTemplate, ";\n                    grid-template-rows: repeat(auto-fit,").concat(percentage, ");\n                ")
  }, children));
};
},{}],"../code/skeletons/Waterfall.jsx":[function(require,module,exports) {
var SquareGrid = require("./SquareGrid"); // 
// Waterfall
// 


module.exports = function (_ref) {
  var children = _ref.children;
  var hasReallyNarrowScreen = window.innerWidth / window.innerHeight < 0.9;
  return /*#__PURE__*/React.createElement("div", {
    name: "waterfall-outermost",
    style: "width: 100%; min-height: 100%; overflow-x: hidden; overflow-y: auto; display: flex; align-content: center; justify-content: center; justify-content: center; background: var(--soft-gray-gradient);"
  }, /*#__PURE__*/React.createElement(SquareGrid, {
    numberOfSquares: hasReallyNarrowScreen ? 6 : 12,
    style: "width: 80rem; max-width: 100%; height: 100%; min-height: fit-content; padding: 2rem; box-sizing: border-box;"
  }, children));
};
},{"./SquareGrid":"../code/skeletons/SquareGrid.jsx"}],"../../node_modules/.pnpm/util@0.11.1/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"../../node_modules/.pnpm/util@0.11.1/node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../node_modules/.pnpm/util@0.11.1/node_modules/util/util.js":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = undefined || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
},{"./support/isBuffer":"../../node_modules/.pnpm/util@0.11.1/node_modules/util/support/isBufferBrowser.js","inherits":"../../node_modules/.pnpm/util@0.11.1/node_modules/inherits/inherits_browser.js","process":"../../node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js"}],"../../node_modules/good-date/index.js":[function(require,module,exports) {
const padZero = (amount) => {
    if (amount < 10) {
        return `0${amount-0}`
    } else {
        return amount
    }
}

const isPositiveInt = (value, name) => {
    value-=0
    if (typeof value != 'number' || value <= 0 || value != value) {
        throw Error(`${name}=${value} must be a positive integer`)
    } else {
        return value
    }
}

const createDateArguments = (...args) => {
    let [year, month, day, hour, minute, second, milisecond] = args
    switch (args.length) {
        case 0:
            return []
        case 1:
            return [ isPositiveInt(year,'year'), 0 ]
            break;
        case 2:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1 ]
            break;
        case 3:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1, isPositiveInt(day,'day') ]
            break;
        case 4:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1, isPositiveInt(day,'day'), hour ]
            break;
        case 5:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1, isPositiveInt(day,'day'), hour, minute ]
            break;
        case 6:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1, isPositiveInt(day,'day'), hour, minute, second ]
            break;
        default:
            return [ isPositiveInt(year,'year'), isPositiveInt(month,'month')-1, isPositiveInt(day,'day'), hour, minute, second, milisecond ]
            break;
    }
}

const inspectSymbol = (require && require('util').inspect.custom) || Symbol.for('inspect')

class DateTimeError extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}

class DateTime extends Date {
    constructor(...args) {
        // no argument
        if (args.length == 0) {
            super()
            this.timeIncluded = true
        } else {
            let dateStringArgument
            let arg = args[0]
            if (args.length > 1) {
                throw Error("The DateTime class only takes one argument.\nIf you want you do DateTime(Year, Month, ...etc) change it to DateTime([ Year, Month,  ...etc ])")
            }
            // assume unix epoch time
            if (typeof arg == 'number') {
                super(isPositiveInt(arg,'DateTime(arg)'))
                this.timeIncluded = true
            } else if (arg instanceof Array) {
                super(...createDateArguments(...arg))
                if (arg.length > 3) {
                    this.timeIncluded = true
                }
            } else if (typeof arg == 'string') {
                arg = arg.trim()
                // formats:
                //     12/31/1999
                //     2011-09-24
                //     2011-09-24T00:00:00
                //     2011-09-24T00:00:00Z
                let format1 = arg.match(/(\d\d?)\/(\d\d?)\/(\d\d\d\d)/)
                let format2 = arg.match(/(\d\d\d\d)-(\d\d?)-(\d\d?)/)
                let format3 = arg.match(/(\d\d\d\d)-(\d\d?)-(\d\d?)T(\d\d?):(\d\d?):(\d\d?(?:\.\d+))/)
                let format4 = arg.match(/(\d\d\d\d)-(\d\d?)-(\d\d?)T(\d\d?):(\d\d?):(\d\d?(?:\.\d+))Z/)
                let years, months, days, hours, minutes, seconds, miliseconds
                if (format4) {
                    // this makes it in UTC time rather than relative to the current time zone
                    super(format4)
                    this.timeIncluded = true
                } else if (format3) {
                    years       = format3[1]
                    months      = format3[2]
                    days        = format3[3]
                    hours       = format3[4]
                    minutes     = format3[5]
                    seconds     = format3[6]
                    miliseconds = format3[7]
                    this.timeIncluded = true
                    super(...createDateArguments(years, months, hours, minutes, seconds, miliseconds))
                } else if (format2) {
                    years       = format2[1]
                    months      = format2[2]
                    days        = format2[3]
                    super(...createDateArguments(years, months, days))
                } else if (format1) {
                    months      = format1[1]
                    days        = format1[2]
                    years       = format1[3]
                    super(...createDateArguments(years, months, days))
                } else {
                    throw new DateTimeError(`Invalid Date format: ${arg}, please use one of: \n    12/31/1999\n    2011-09-24\n    2011-09-24T00:00:00\n    2011-09-24T00:00:00Z`)
                }
            }
        }
    }
    add({days=0, hours=0, minutes=0, seconds=0, miliseconds=0}) {
        // TODO: add year, and month in future
        miliseconds += seconds * 1000
        miliseconds += minutes * 1000 * 60
        miliseconds += hours   * 1000 * 60 * 60
        miliseconds += days    * 1000 * 60 * 60 * 24
        this.unix = this.unix + miliseconds
        return this
    }
    get isInvalid() {
        let time = this.getTime()
        if (time != time) {
            return true
        } else {
            return false
        }
    }
    get utcOffset() {
        if (this.isInvalid) {return null}
        return Math.abs(this.getTimezoneOffset()*60000)
    }
    get millisecond() {
        if (this.isInvalid) {return null}
        return super.getMilliseconds()
    }
    get second() {
        if (this.isInvalid) {return null}
        return super.getSeconds()
    }
    get minute() {
        if (this.isInvalid) {return null}
        return super.toLocaleTimeString().match(/(\d+):(\d+):(\d+) ([AP]M)/)[2]-0
    }
    get hour12() {
        if (this.isInvalid) {return null}
        return super.toLocaleTimeString().match(/(\d+):(\d+):(\d+) ([AP]M)/)[1]-0
    }
    get amPm() {
        if (this.isInvalid) {return null}
        return (this.hour24 >= 12)? 'pm' : 'am'
    }
    get hour24() {
        if (this.isInvalid) {return null}
        let match = super.toLocaleTimeString().match(/(\d+):(\d+):(\d+) ([AP]M)/)
        return DateTime.convertTime12to24(match[1], match[4])
    }
    get time() {
        if (this.isInvalid) {return null}
        return this.time12
    }
    set time(time) {
        let [hour, minute, second, milisecond] = DateTime.uncheckedParseTimeString(time)
        // ensure valid numbers for: hour, minute, seconds, miliseconds
        DateTime.ensureValidTime([hour, minute, second, milisecond])
        super.setHours(hour, minute, second, milisecond)
        this.timeIncluded = true
    }
    get time12() {
        if (this.isInvalid) {return null}
        // it is pm if hours from 12 onwards
        return `${padZero(this.hour12)}:${padZero(this.minute)}${this.amPm}`
    }
    get time24() {
        if (this.isInvalid) {return null}
        return `${padZero(this.hour24)}:${padZero(this.minute)}`
    }
    get unix() {
        if (this.isInvalid) {return null}
        return super.getTime()
    }
    set unix(value) {
        return super.setTime(value)
    }
    get month() {
        if (this.isInvalid) {return null}
        return super.toLocaleDateString().match(/(\d+)\/\d+\/\d+/)[1]-0
    }
    get monthName() {
        if (this.isInvalid) {return null}
        return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][super.getMonth()]
    }
    get timeOfDayAsSeconds() {
        if (this.isInvalid) {return null}
        return (((this.hour24*60) + this.minute)*60 + this.second)
    }
    get day() {
        if (this.isInvalid) {return null}
        return super.toLocaleDateString().match(/\d+\/(\d+)\/\d+/)[1]-0
    }
    get dayName() {
        if (this.isInvalid) {return null}
        return this.weekDay
    }
    get weekDay() {
        if (this.isInvalid) {return null}
        let weekDay = super.getDay()
        switch (weekDay) {
            case 0: return 'Sunday'
            case 1: return 'Monday'
            case 2: return 'Tuesday'
            case 3: return 'Wednesday'
            case 4: return 'Thursday'
            case 5: return 'Friday'
            case 6: return 'Saturday'
        }
        return weekDay
    }
    get weekIndex() {
        if (this.isInvalid) {return null}
        return super.getDay()
    }
    get year() {
        if (this.isInvalid) {return null}
        return super.toLocaleDateString().match(/\d+\/\d+\/(\d+)/)[1]-0
    }
    get date() {
        if (this.isInvalid) {return null}
        return `${padZero(this.month)}/${padZero(this.day)}/${this.getFullYear()}`
    }
    toArray() {
        if (this.isInvalid) {return null}
        return [this.year, this.month, this.day, this.hour24, this.minute, this.second ]
    }
    toString() {
        if (this.isInvalid) {return null}
        let date = this.date
        if (this.timeIncluded) {
            date = `${date}, ${this.time}`
        }
        return date
    }
    inspect()                  { return this.toString() }
    [inspectSymbol]()          { return this.toString() }
    valueOf()                  { return this.unix  }
    toPrimitive()              { return this.unix  }
    [Symbol.toPrimitive](hint) { return this.unix  }
}

DateTime.uncheckedParseTimeString = (time) => {
    let match = time.match(/(\d+):(\d+)(.*)/)
    if (match) {
        let hour = match[1]
        let minute = match[2]
        let second = 0
        let milisecond = 0
        let everythingElse = match[3]
        // check for seconds
        let checkForSeconds = everythingElse.match(/:(\d+)(?:\.(\d+))?(.*)/)
        if (checkForSeconds) {
            second = checkForSeconds[1]
            checkForSeconds[2] && (milisecond = checkForSeconds[2])
            everythingElse = checkForSeconds[3]
        }
        // check for am/pm
        let modifierMatch = everythingElse.trim().match(/((?:[aA]|[pP])[mM])/)
        if (modifierMatch) {
            hour = DateTime.convertTime12to24(hour, modifierMatch[1])
        }
        // ensure valid numbers for: hour, minute, seconds, miliseconds
        // convert all to numbers
        hour -= 0
        minute -= 0
        second -= 0
        milisecond -= 0
        return [hour, minute, second, milisecond]
    }
    return null
}

DateTime.ensureValidTime = (input) => {
    let timeArray
    if (typeof input == 'string') {
        timeArray = DateTime.uncheckedParseTimeString(input)
    } else if (input instanceof Array) {
        timeArray = input
    } else {
        throw Error(`Invalid argument for DateTime.ensureValidTime() argument should be a string or an array. Instead it was ${JSON.stringify(input)}`)
    }
    
    let [hour, minute, second, milisecond] = input
    hour -= 0
    minute -= 0
    second -= 0
    milisecond -= 0
    
    if (hour != hour || hour < 0 || hour > 23) {
        throw new DateTimeError(`invalid hour: ${hour}`)
    } else if (minute != minute || minute < 0 || minute > 59) {
        throw new DateTimeError(`invalid minute: ${minute}`)
    } else if (second != second || second < 0 || second > 59) {
        throw new DateTimeError(`invalid second: ${second}`)
    } else if (milisecond != milisecond || milisecond < 0 || milisecond > 999) {
        throw new DateTimeError(`invalid miliseconds: ${milisecond}`)
    }
}

DateTime.isValidTime = (input) => {
    try {
        DateTime.ensureValidTime(input)
        return true
    } catch (error) {
        return false
    }
}

DateTime.convertTime12to24 = (hours, pmOrAm) => {
    if (hours == "12") {
        hours = "00"
    }
    if (pmOrAm.match(/[pP][mM]/)) {
        hours = parseInt(hours, 10) + 12
    }
    return hours-0
}

DateTime.now = () => {
    return new DateTime()
}

module.exports = DateTime
},{"util":"../../node_modules/.pnpm/util@0.11.1/node_modules/util/util.js"}],"../../node_modules/good-js/source/object.js":[function(require,module,exports) {
module.exports = {
    /**
     * Safely get nested values
     *
     * @param {any} obj.from - what object/value you're extracting from
     * @param {string[]} obj.keyList - anObject.key1.key2 -> [ "key1", "key2" ]
     * @param {any} obj.failValue - what to return in the event of an error
     * @return {any} either the failValue or the actual value
     *
     * @example
     *     let obj = { key1: {} }
     *     // equivlent to obj.key1.subKey.subSubKey
     *     get({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         from: obj,
     *     })
     *     get({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         from: null,
     *     })
     *     get({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         from: null,
     *         failValue: 0
     *     })
     */
    get({ from, keyList, failValue }) {
        // iterate over nested values
        try {
            for (var each of keyList) {
                if (from instanceof Object && each in from) {
                    from = from[each]
                } else {
                    return failValue
                }
            }
        } catch (error) {
            return failValue
        }
        return from
    },
    /**
     * Forcefully set nested values
     *
     * @param {string[]} obj.keyList - anObject.key1.key2 -> [ "key1", "key2" ]
     * @param {any} obj.to - what the new value should be
     * @param {any} obj.on - what object/value you're modifying
     * @return {Object} - the object given (object is still mutated)
     * @error
     * only if the argument is not an object
     *
     * @example
     *     let obj = { key1: {} }
     *     // equivlent to obj.key1.subKey.subSubKey
     *     set({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         to: 10,
     *         on: obj,
     *     })
     *     set({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         to: 10,
     *         on: obj,
     *     })
     */
    set({ keyList, on, to }) {
        let originalKeyList = keyList
        try {
            keyList = [...keyList]
            let lastAttribute = keyList.pop()
            for (var key of keyList) {
                // create each parent if it doesnt exist
                if (!(on[key] instanceof Object)) {
                    on[key] = {}
                }
                // change the object reference be the nested element
                on = on[key]
            }
            on[lastAttribute] = to
        } catch (error) {
            throw new Error(`\nthe set function was unable to set the value for some reason\n    the set obj was: ${JSON.stringify(on)}\n    the keyList was: ${JSON.stringify(originalKeyList)}\n    the value was: ${JSON.stringify(to)}\nthe original error message was:\n\n`, error)
        }
        return on
    },
    /**
     * Safely delete nested values
     *
     * @param {any} obj.from - what object/value you're extracting from
     * @param {string[]} obj.keyList - anObject.key1.key2 -> [ "key1", "key2" ]
     * @return {undefined}
     *
     * @example
     *     let obj = { key1: {} }
     *     // equivlent to obj.key1.subKey.subSubKey
     *     delete({
     *         keyList: [ 'key1', 'subKey', 'subSubKey' ],
     *         from: obj,
     *     })
     */
    delete({ keyList, from }) {
        if (keyList.length == 1) {
            try {
                delete from[keyList[0]]
            } catch (error) {
                return false
            }
        } else if (keyList.length > 1) {
            keyList = [...keyList]
            let last = keyList.pop()
            let parentObj = module.exports.get({ keyList, from })
            return module.exports.delete({ keyList: [last], from: parentObj })
        }
    },
    merge({ oldData, newData }) {
        // if its not an object, then it immediately overwrites the value
        if (!(newData instanceof Object) || !(oldData instanceof Object)) {
            return newData
        }
        // default value for all keys is the original object
        let output = {}
        newData instanceof Array && (output = [])
        Object.assign(output, oldData)
        for (const key in newData) {
            // if no conflict, then assign as normal
            if (!(key in output)) {
                output[key] = newData[key]
                // if there is a conflict, then be recursive
            } else {
                output[key] = module.exports.merge(oldData[key], newData[key])
            }
        }
        return output
    },
    /**
     * Function to sort alphabetically an array of objects by some specific key.
     *
     * @param {string[]} obj.keyList list of keys of which property to sort by
     * @param {string[]} [obj.largestFirst=false] decending order
     * @example
     * let listOfObjects = [ { a:1 }, { a:3 }, { a:2 }, ]
     * listOfObjects.sort(
     *     compareProperty({keyList:['a']})
     * )
     * //  [ { a: 1 }, { a: 2 }, { a: 3 } ]
     *
     * listOfObjects.sort(
     *   compareProperty({
     *     keyList:['a'],
     *     largestFirst:true
     *   })
     * )
     * //  [ { a: 3 }, { a: 2 }, { a: 1 } ]
     */
    compareProperty({ keyList, largestFirst = false }) {
        let comparison = (a, b) => {
            let aValue = module.exports.get({ keyList, from: a, failValue: -Infinity })
            let bValue = module.exports.get({ keyList, from: b, failValue: -Infinity })
            if (typeof aValue == "number") {
                return aValue - bValue
            } else {
                return aValue.localeCompare(bValue)
            }
        }
        if (largestFirst) {
            oldComparison = comparison
            comparison = (b, a) => oldComparison(a, b)
        }
        return comparison
    },
    /**
     * Deep iterate objects
     *
     * @param {Object} obj - Any object
     * @return {string[][]} lists of key-lists
     *
     * @example
     *
     *     recursivelyAllAttributesOf({ a: { b: 1} })
     *     >>> [
     *         [ 'a', ],
     *         [ 'a', 'b' ],
     *     ]
     */
    recursivelyAllAttributesOf(obj) {
        // if not an object then add no attributes
        if (!(obj instanceof Object)) {
            return []
        }
        // else check all keys for sub-attributes
        let output = []
        for (let eachKey of Object.keys(obj)) {
            // add the key itself (alone)
            output.push([eachKey])
            // add all of its children
            let newAttributes = module.exports.recursivelyAllAttributesOf(obj[eachKey])
            // if nested
            for (let eachNewAttributeList of newAttributes) {
                // add the parent key
                eachNewAttributeList.unshift(eachKey)
                output.push(eachNewAttributeList)
            }
        }
        return output
    },
}

},{}],"../../node_modules/node-fetch/browser.js":[function(require,module,exports) {

"use strict"; // ref: https://github.com/tc39/proposal-global

var getGlobal = function () {
  // the only reliable means to get the global object is
  // `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  throw new Error('unable to locate global object');
};

var global = getGlobal();
module.exports = exports = global.fetch; // Needed for TypeScript and Webpack.

if (global.fetch) {
  exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}],"../../node_modules/good-js/source/network.js":[function(require,module,exports) {
// use libs since node doesn't have fetch
if (typeof document == 'undefined') {
    fetch = require("node-fetch")
}

module.exports = {
    curl(url) {
        return new Promise((resolve) =>
            fetch(url)
                .then((res) => res.text())
                .then((body) => resolve(body))
        )
    },
    getJson(url) {
        return new Promise((resolve, reject) =>
            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    resolve(data)
                })
                .catch(function () {
                    reject()
                })
        )
    },
    async postJson({ data = null, to = null }) {
        return (await fetch(to, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })).json()
    },
}

},{"node-fetch":"../../node_modules/node-fetch/browser.js"}],"../../node_modules/good-js/source/string.js":[function(require,module,exports) {
module.exports = {
    capitalize: (string) => string.replace(/\b\w/g, (chr) => chr.toUpperCase()),
    indent: ({ string, by = "    " }) => by + string.replace(/\n/g, "\n" + by),
    snakeToCamelCase: (baseName) =>
        baseName
            .toLowerCase()
            .replace(/_/, " ")
            .replace(/.\b\w/g, (aChar) => aChar.toUpperCase())
            .replace(" ", ""),
    toCamelCase: (obj) => (typeof obj === "string") ? camelCase(obj) : walkObject(obj),
    varnameToTitle: (string) => string.replace(/_/, " ").replace(/\b\w/g, (chr) => chr.toUpperCase()),
    findAll(regexPattern, sourceString) {
        let output = []
        let match
        // make sure the pattern has the global flag
        let regexPatternWithGlobal = RegExp(regexPattern, [...new Set("g" + regexPattern.flags)].join(""))
        while ((match = regexPatternWithGlobal.exec(sourceString))) {
            // get rid of the string copy
            delete match.input
            // store the match data
            output.push(match)
        }
        return output
    },
}

// 
// 
// below code is modified from: https://www.npmjs.com/package/camelize
// 
// 
function walkObject(obj) {
    if (!obj || typeof obj !== "object") return obj
    if (isDate(obj) || isRegex(obj)) return obj
    if (isArray(obj)) return map(obj, walkObject)
    return reduce(
        objectKeys(obj),
        function (acc, key) {
            const camel = camelCase(key)
            acc[camel] = walkObject(obj[key])
            return acc
        },
        {}
    )
}

function camelCase(str) {
    const addedSeperator = str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/[^a-zA-Z0-9 _.-]/,"_").toLowerCase()
    const words = addedSeperator.split(/[ _.-]+/g)
    const capatalizedWords = words.map(each=>each.replace(/^\w/, (group0)=>group0.toUpperCase()))
    // make the first one lowercase
    capatalizedWords[0] = capatalizedWords[0].toLowerCase()
    return capatalizedWords.join('')
}

const isArray =
    Array.isArray ||
    function (obj) {
        return Object.prototype.toString.call(obj) === "[object Array]"
    }

const isDate = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Date]"
}

const isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]"
}

const objectKeys =
    Object.keys ||
    function (obj) {
        const keys = []
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) keys.push(key)
        }
        return keys
    }

function map(xs, f) {
    if (xs.map) return xs.map(f)
    const res = []
    for (const i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i))
    }
    return res
}

function reduce(xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc)
    for (const i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i)
    }
    return acc
}

},{}],"../../node_modules/good-js/source/tests.js":[function(require,module,exports) {
module.exports = {
    /**
     * Checks type according to English
     *
     * @param {Object} args.value - any possible value 
     * @param {Object} args.is - a class or string-description Object, Array, null, "nullish", "number", Number, Boolean, Function
     * @return {Boolean} the legitmate/intuitive answer
     * 
     * @note
     *     Object means can-be-a JSON-object
     * 
     * @example
     *     checkIf({value: undefined , is: null     }) // false
     *     checkIf({value: undefined , is: String   }) // false
     *     checkIf({value: undefined , is: 'nullish'}) // true
     *     checkIf({value: null      , is: 'nullish'}) // true
     *     checkIf({value: NaN       , is: 'nullish'}) // true
     *     checkIf({value: null      , is: Object   }) // false
     *     checkIf({value: NaN       , is: NaN      }) // true!
     *     checkIf({value: NaN       , is: Number   }) // false!
     *     checkIf({value: ("string"), is: Object   }) // false
     *     checkIf({value: {blah: 10}, is: Object   }) // true!
     *     checkIf({value: new Date(), is: Object   }) // false!
     *     checkIf({value: new CustomClass()         , is: Object}) // true!
     *     checkIf({value: ()=>{return "imma func"}  , is: Object}) // false
     *     checkIf({value: ["I", "am", "an", "array"], is: Object}) // false
     *     checkIf({value: new CustomClass()         , is: Date})   // false
     */
    checkIf({ value, is }) {
        let typeOrClass = is 
        // 
        // Check typeOrClass
        // 
        // see if typeOrClass is actually a class 
        if (typeof typeOrClass == 'function') {
            typeOrClass = typeOrClass.name
        }
        // lowercase any string-names
        if (typeof typeOrClass == 'string') {
            typeOrClass = typeOrClass.toLowerCase()
        }

        //
        // Strict Values
        //
        // object (non-null, non-function, non-array)
        if (typeOrClass === "object") {
            if (!(value instanceof Object)) {
                return false
            } else if (value instanceof Array || value instanceof Function || value instanceof Date) {
                return false
            // check if its stringified+parsed form is also an object 
            // (this is to remove things like BigInt and BigInt64Array and other built-in pseudo-primitives)
            } else {
                let stringified = JSON.stringify(value)
                // note that this is not == '"undefined"'
                if (stringified === 'undefined') {
                    return false
                } else if (JSON.parse(stringified) instanceof Object) {
                    return true
                } else {
                    return false
                }
            }
        }
        // undefined
        else if (typeof typeOrClass === 'undefined' || typeOrClass == 'undefined') {
            return typeof value === 'undefined'
        }
        // null
        else if (typeOrClass === null || typeOrClass == 'null') {
            return value === null
        }
        // NaN
        else if ((typeOrClass !== typeOrClass && typeof typeOrClass == 'number') || typeOrClass == 'nan') {
            return value !== value && typeof value == 'number'
        }
        // false
        else if (typeOrClass === false) {
            return value === false
        }
        // true
        else if (typeOrClass === true) {
            return value === true
        }
        // bool
        else if (typeOrClass === "bool" || typeOrClass === "boolean") {
            return value === true || value === false
        }
        // empty string
        else if (typeOrClass === "") {
            return value === ""
        }
        // empty list
        else if (typeOrClass === "[]" || Array.isArray(typeOrClass) && typeOrClass.length == 0) {
            return value instanceof Array && value.length == 0
        }
        // function
        else if (typeOrClass === "function") {
            return typeof value == "function"
        }
        // number
        else if (typeOrClass == "number" || typeOrClass == Number) {
            if (value !== value) {
                return false
            }
            else {
                return typeof value == "number" || value instanceof Number
            }
        }
        // string
        else if (typeOrClass == "string") {
            return typeof value == "string" || value instanceof String
        }
        // array
        else if (typeOrClass == "array") {
            return value instanceof Array
        }
        // symbol
        else if (typeOrClass == "symbol") {
            return typeof value == "symbol"
        }

        // 
        // Unstrict values
        // 
        // nullish (null, undefined, NaN)
        else if (typeOrClass === 'nullish') {
            return value == null || value !== value
        }
        // emptyish ({},[],"",null,undefined)
        else if (typeOrClass === 'emptyish') {
            if ((value instanceof Array && value.length == 0) || value === "" || value == null) {
                return true
            }
            else if (value instanceof Object) {
                return Object.keys(value).length == 0
            }
            else {
                return false
            }
        }
        // falsey ("0",0,false,null,undefined,NaN)
        else if (typeOrClass === 'falsey' || typeOrClass === 'falsy' || typeOrClass === 'falseish' || typeOrClass === 'falsish') {
            return value == null || value === false || value !== value || value === 0 || value === "0"
        }
        // falsey-or-empty ({},[],"","0",0,false,null,undefined,NaN)
        else if (typeOrClass === 'falsey-or-empty' || typeOrClass === 'falsy-or-empty' || typeOrClass === 'falseish-or-empty' || typeOrClass === 'falsish-or-empty') {
            // empty array
            if (value instanceof Array && value.length == 0) {
                return true
            }
            // empty object
            else if (value instanceof Object) {
                return Object.keys(value).length == 0
            }
            else {
                return (value ? true : false)
            }
        }
        // numberish 
        else if (typeOrClass == 'numberish') {
            return (value != value) || !isNaN(value - 0)
        }
        // 
        // class type
        // 
        else if (aClass) {
            // if no constructor
            if (value === null || value === undefined) {
                return false
            }
            else {
                // see if constructors match
                if (value.constructor.name === typeOrClass) {
                    return true
                }
                // check instanceof 
                else {
                    return value instanceof aClass
                }
            }
        }
        // 
        // failed to recognize
        // 
        else {
            throw new Error(`when you call checkIf(), I'm not recoginizing the type or class: ${typeOrClass}`)
        }
    },
    /**
     * Throws error if type requirement isn't met
     *
     * @param {Object} args.value - any possible value 
     * @param {Object} args.is - a class or string-description Object, Array, null, "nullish", "number", Number, Boolean, Function
     * @param {string} args.failMessage - a string to be added to the top of the error message
     * @return {undefined}
     * 
     * 
     * @example
     * // see checkIf() for more argument examples
     * requireThat({
     *     value: arg1.size,
     *     is: Number,
     *     failMessage: "The size of the first argument needs to be a number"
     * })
     */
    requireThat({ value, is, failMessage }){
        if (!module.exports.checkIf({ value, is})) {
            let requiredType = (is instanceof Object) ? is.prototype.constructor.name : is
            // 
            // figure out the real type of the object
            // 
            let actualType
            if (value instanceof Object) {
                actualType = value.constructor.prototype.constructor.name
            } else {
                if (value !== value) {
                    actualType = "NaN"
                } else if (value === null) {
                    actualType = "null"
                } else {
                    actualType = typeof value
                }
            }
            failMessage = failMessage ? `Error Message: ${failMessage}` : ""
            throw Error(`Failed to pass a type check created by requireThat()\n    the value is considered to be: ${actualType}\n    which fails to meet the requirement of: ${requiredType}\n    the failing value is: ${value}\n\n${failMessage}`)
        }
    }
}
},{}],"../../node_modules/good-js/index.js":[function(require,module,exports) {
module.exports = {
    object: require("./source/object"),
    network: require("./source/network"),
    string: require("./source/string"),
    tests: require("./source/tests"),
}
},{"./source/object":"../../node_modules/good-js/source/object.js","./source/network":"../../node_modules/good-js/source/network.js","./source/string":"../../node_modules/good-js/source/string.js","./source/tests":"../../node_modules/good-js/source/tests.js"}],"../../node_modules/quik-client/index.js":[function(require,module,exports) {
// get the quik symbol
let quikUniqueKey = Symbol.for("quik")
// if the quik-window doesnt exist, then create it
window[quikUniqueKey] || (window[quikUniqueKey] = {})
// return the window-quik object
module.exports = window[quikUniqueKey]

},{}],"../code/systems/smart_backend.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("quik-client"),
    backend = _require.backend; // 
// 
// Backend caching since our data is static
// 
// 
// 
// getOrgTree
// 


var orgData;

var getOrgTree = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!orgData) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", orgData);

          case 4:
            _context.next = 6;
            return backend.data.getOrgTree();

          case 6:
            return _context.abrupt("return", orgData = _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getOrgTree() {
    return _ref.apply(this, arguments);
  };
}(); // 
// getOrgSummaryDataFor
// 


var getOrgSummaryDataFor = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(orgName) {
    var orgTree;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getOrgTree();

          case 2:
            orgTree = _context2.sent;
            return _context2.abrupt("return", orgTree[orgName].orgSummary);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getOrgSummaryDataFor(_x) {
    return _ref2.apply(this, arguments);
  };
}(); // 
// getRepoSummaryDataFor
// 


var getRepoSummaryDataFor = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(orgName, repoName) {
    var orgTree;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getOrgTree();

          case 2:
            orgTree = _context3.sent;
            return _context3.abrupt("return", orgTree[orgName].repoSummaries[repoName]);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getRepoSummaryDataFor(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}(); // 
// getVulnDataFor
// 


var vulnData = {};

var getVulnDataFor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(repoName) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!vulnData[repoName]) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", vulnData[repoName]);

          case 4:
            _context4.next = 6;
            return backend.data.vulnerabilitiesFor({
              product: repoName
            });

          case 6:
            return _context4.abrupt("return", vulnData[repoName] = _context4.sent);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getVulnDataFor(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); // 
// getCommitDataFor
// 


var commitData = {};

var getCommitDataFor = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(repoName) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(commitData[repoName] != undefined)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", commitData[repoName]);

          case 4:
            _context5.prev = 4;
            _context5.next = 7;
            return backend.data.commitLogFor({
              product: repoName
            });

          case 7:
            commitData[repoName] = _context5.sent;
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](4);
            console.log("Error getting commit data for: ".concat(repoName));
            commitData[repoName] = null;

          case 14:
            return _context5.abrupt("return", commitData[repoName]);

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 10]]);
  }));

  return function getCommitDataFor(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  getOrgTree: getOrgTree,
  getOrgSummaryDataFor: getOrgSummaryDataFor,
  getRepoSummaryDataFor: getRepoSummaryDataFor,
  getVulnDataFor: getVulnDataFor,
  getCommitDataFor: getCommitDataFor
};
},{"quik-client":"../../node_modules/quik-client/index.js"}],"../code/components/Waterfall/getOrgData.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DateTime = require("good-date");

var _require = require("good-js"),
    object = _require.object;

var smartBackend = require("../../systems/smart_backend");

var maxNumberOfOrgs = 300;

module.exports = function () {
  return smartBackend.getOrgTree().then(function (orgTree) {
    // 
    // convert structure method
    // 
    var output = [];

    for (var _i = 0, _Object$entries = Object.entries(orgTree); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      var lastTouched = new DateTime(value.orgSummary.newestVulnerabilityTime).unix;
      output.push(_objectSpread(_objectSpread({}, value), {}, {
        name: key,
        size: value.orgSummary.numberOfRepos,
        orderMetric: Math.log(lastTouched) + Math.log(value.orgSummary.numberOfVulnerabilies)
      }));
    } // 
    // sorting method
    // 


    output = output.sort(object.compareProperty({
      keyList: ['orderMetric'],
      largestFirst: true
    }));
    console.log("output is:", output.slice(0, 5));
    return output.slice(0, maxNumberOfOrgs);
  });
};
},{"good-date":"../../node_modules/good-date/index.js","good-js":"../../node_modules/good-js/index.js","../../systems/smart_backend":"../code/systems/smart_backend.js"}],"../code/systems/theme.js":[function(require,module,exports) {
//
// Node Component Colors
//
module.exports = {
  nodeTheme: {
    // colors have duplicates in a different order to make a better visual pattern 
    lightColors: ["#8FE9FF", "#87EAEF", "#FFC9E3", "#A7C2FF", "#FFA1E3", "#FFE269", "#BFCFEE", "#FFA0C5", "#D5FF86", "#FFC9E3", "#87EAEF", "#FFA1E3", "#FFE269", "#D5FF86", "#8FE9FF", "#A7C2FF", "#BFCFEE", "#FFA0C5"],
    darkColors: ["#7DA8FF", "#44E6C1", "#FF68A7", "#7F86FF", "#AE6CFF", "#FF5A34", "#5D7092", "#FF6565", "#6BFFDE", "#FF68A7", "#44E6C1", "#AE6CFF", "#FF5A34", "#6BFFDE", "#7DA8FF", "#7F86FF", "#5D7092", "#FF6565"],
    uLightColors: ["#CFF6FF", "#BCFCFF", "#FFECF5", "#ECFBFF", "#EAD9FF", "#FFF8DA", "#DCE2EE", "#FFE7F0", "#EEFFCE"],
    uDarkColors: ["#CADBFF", "#A9FFEB", "#FFC4DD", "#CACDFF", "#FFD4F2", "#FFD3C9", "#EBF2FF", "#FFCBCB", "#CAFFF3"]
  }
};
},{}],"../code/systems/utilies.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
// Mounted to DOM
//
//
var pollingRate = 350;
var elementsBeingWatched = new Map(); // mounted checker (keep outside for efficiency reasons)

setInterval(function () {
  var _iterator = _createForOfIteratorHelper(elementsBeingWatched.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          element = _step$value[0],
          resolvers = _step$value[1];

      // if connected, run callbacks, and remove listener
      if (element.isConnected) {
        var _iterator2 = _createForOfIteratorHelper(resolvers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var eachResolver = _step2.value;
            eachResolver();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        elementsBeingWatched.delete(element);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}, pollingRate);

var mountedToDom = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!element.isConnected) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              if (elementsBeingWatched.has(element)) {
                elementsBeingWatched.get(element).push(resolve);
              } else {
                elementsBeingWatched.set(element, [resolve]);
              }
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function mountedToDom(_x) {
    return _ref.apply(this, arguments);
  };
}(); //
// hash
//


var hash = function hash(object) {
  return JSON.stringify(object).split("").reduce(function (hashCode, currentVal) {
    return hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode;
  }, 0);
}; //
// wrapAroundGet
//


var wrapAroundGet = function wrapAroundGet(number, list) {
  return list[(number % list.length + list.length) % list.length];
}; //
//
// exports
//
//


module.exports = {
  mountedToDom: mountedToDom,
  wrapAroundGet: wrapAroundGet,
  hash: hash
};
},{}],"../code/skeletons/SquareGridSizer.jsx":[function(require,module,exports) {
module.exports = function (_ref) {
  var numberOfCells = _ref.numberOfCells,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    name: "square-grid-cell-shaper",
    style: "\n            grid-column: span ".concat(Math.ceil(numberOfCells), ";\n            grid-row: span ").concat(Math.ceil(numberOfCells), ";\n            justify-self: stretch;\n            aspect-ratio: 1;\n            position: relative;\n            display: flex;\n            flex-direction: column;\n        ")
  }, children);
};
},{}],"../code/skeletons/FancyBubble.jsx":[function(require,module,exports) {
var _excluded = ["color1", "color2", "rotationOffset", "children", "padding"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

module.exports = function (_ref) {
  var color1 = _ref.color1,
      color2 = _ref.color2,
      rotationOffset = _ref.rotationOffset,
      children = _ref.children,
      padding = _ref.padding,
      props = _objectWithoutProperties(_ref, _excluded);

  // main content
  var bubbleInnerPart = /*#__PURE__*/React.createElement("div", {
    name: "bubble-inner-part",
    style: "\n            width: 100%;\n            aspect-ratio: 1;\n            border-radius: 200vw;\n        "
  }, children); // wrapper #1

  var unRotatePart = /*#__PURE__*/React.createElement("div", {
    name: "bubble-un-rotate-part",
    class: "rotateCounterClockwise centered",
    style: "max-width: 100%;"
  }, bubbleInnerPart); // wapper #2

  var animatedColorGradientPart = /*#__PURE__*/React.createElement("div", {
    name: "bubble-animated-background-part",
    class: "animatedGradientBackground centered",
    style: "\n            min-width: 101%;\n            aspect-ratio: 1;\n            --color1: ".concat(color1, ";\n            --color2: ").concat(color2, ";\n            border-radius: 200vw;\n        ")
  }, unRotatePart); // wrapper #3

  var rotatingCircle = /*#__PURE__*/React.createElement("div", {
    name: "bubble-outer-part",
    class: "rotateClockwise centered",
    style: "\n            min-width: 101%;\n            aspect-ratio: 1;\n            border-radius: 200vw;\n        "
  }, animatedColorGradientPart); // wrapper #4

  var circleWithShadow = /*#__PURE__*/React.createElement("div", {
    name: "bubble-outer-part",
    class: "our-strong-shadow centered",
    style: "\n            max-width: 99%;\n            width: 99%;\n            transition: all 0.2s ease-in-out 0s;\n            aspect-ratio: 1;\n            border-radius: 200vw;\n            --rotation-offset: ".concat(rotationOffset, ";\n        ")
  }, rotatingCircle); // wrapper #5

  var paddingWrapper = /*#__PURE__*/React.createElement("div", _extends({
    name: "bubble-outer-part",
    class: "centered",
    style: "\n            max-width: 100%;\n            width: 100%;\n            flex-shrink: 0;\n            aspect-ratio: 1;\n            position: relative;\n            box-sizing: border-box;\n            padding: ".concat(padding, ";\n        ")
  }, props), circleWithShadow);
  return paddingWrapper;
};
},{}],"../code/components/Waterfall/RepoSummaryElement.jsx":[function(require,module,exports) {
var router = require("quik-router");

module.exports = function (_ref) {
  var repoData = _ref.repoData,
      orgData = _ref.orgData;
  return /*#__PURE__*/React.createElement("div", {
    class: "our-weak-shadow",
    style: "\n            border-radius: 1rem;\n            transition: all 0.2s ease-in-out 0s;\n            margin-top: 0.8rem;\n            padding: 0.25rem;\n            background: lightgray;\n            color: black;\n            cursor: pointer;\n        ",
    onclick: function onclick() {
      // TODO: record the scroll position, then do a goto, also add scrolling logic to main waterfall element
      router.goTo({
        page: "ProductView",
        orgName: orgData.name,
        repoName: repoData.name
      });
    }
  }, repoData.name);
};
},{"quik-router":"../../node_modules/quik-router/main/main.js"}],"../code/components/Waterfall/RepoList.jsx":[function(require,module,exports) {
var _excluded = ["repos", "orgData"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var RepoSummaryElement = require("./RepoSummaryElement");

var RepoList = function RepoList(_ref) {
  var _ref$repos = _ref.repos,
      repos = _ref$repos === void 0 ? {} : _ref$repos,
      orgData = _ref.orgData,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    class: "our-weak-shadow",
    style: "\n            z-index: 999999;\n            height: fit-content;\n            max-height: 17vh;\n            width: 18rem;\n            align-self: center;\n            flex-shrink: 0;\n            background: white;\n            border-radius: 1rem;\n            overflow: auto;\n            padding: 0.5rem;\n            margin-top: -25px;\n            transition: all ".concat(RepoList.animationTime / 1000, "s ease-in-out 0s;\n        ")
  }, props), Object.entries(repos).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        name = _ref3[0],
        info = _ref3[1];

    return RepoSummaryElement({
      repoData: _objectSpread({
        name: name
      }, info),
      orgData: orgData
    });
  }));
};

RepoList.animationTime = 300; // miliseconds

module.exports = RepoList;
},{"./RepoSummaryElement":"../code/components/Waterfall/RepoSummaryElement.jsx"}],"../code/components/Waterfall/OrgBubble.jsx":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var router = require("quik-router");

var _require = require("../../systems/theme"),
    nodeTheme = _require.nodeTheme;

var _require2 = require("../../systems/utilies"),
    hash = _require2.hash,
    wrapAroundGet = _require2.wrapAroundGet;

var SquareGridSizer = require("../../skeletons/SquareGridSizer");

var FancyBubble = require("../../skeletons/FancyBubble");

var RepoList = require("../../components/Waterfall/RepoList"); // 
// Org
// 


var OrgBubble = function OrgBubble(_ref) {
  var eachOrg = _ref.eachOrg;
  var circle, repoListElement; // grab an id

  var hashNumber = hash(eachOrg.name); // set the colors 

  OrgBubble.index++;
  var color1 = wrapAroundGet(OrgBubble.index, nodeTheme.darkColors);
  var color2 = wrapAroundGet(OrgBubble.index, nodeTheme.lightColors); // randomly swap light and dark to add visual variation

  if (Math.random() > 0.7) {
    var swap = color1;
    color1 = color2;
    color2 = swap;
  } // 
  // hover
  // 


  var pendingHoverCallbacks = [];

  pendingHoverCallbacks.clearAll = function () {
    var _iterator = _createForOfIteratorHelper(pendingHoverCallbacks),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var id = _step.value;
        clearTimeout(id);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    pendingHoverCallbacks.length = 0; // removes all elements strangely enough
  };

  var onHover = function onHover(event) {
    pendingHoverCallbacks.clearAll();
    pendingHoverCallbacks.push(setTimeout(function () {
      return circle.style.zIndex = 9999;
    }, 100)); // 
    // attach the repo list
    // 
    // first move into position

    var bottomCenterOfBubble = {
      x: circle.x - circle.scrollWidth,
      y: circle.y - circle.scrollHeight
    };
    repoListElement.style.left = bottomCenterOfBubble.x;
    repoListElement.style.top = bottomCenterOfBubble.y; // make it react to pointer events

    repoListElement.style.pointerEvents = "auto"; // then make it fade in

    repoListElement.style.opacity = 1;
  };

  var offHover = function offHover() {
    pendingHoverCallbacks.clearAll();
    pendingHoverCallbacks.push(setTimeout(function () {
      return circle.style.zIndex = 0;
    }, 100)); // start making the repo list fade out

    repoListElement.style.opacity = 0; // disable RepoList interactivity after 85% dissapeared

    pendingHoverCallbacks.push(setTimeout(function () {
      return repoListElement.style.pointerEvents = "none";
    }, RepoList.animationTime * 0.85));
  }; // 
  // setup repo list
  // 


  repoListElement = /*#__PURE__*/React.createElement(RepoList, {
    repos: eachOrg.repoSummaries,
    orgData: eachOrg,
    onmouseover: onHover,
    onmouseout: offHover
  });
  repoListElement.style.opacity = 0;
  repoListElement.style.pointerEvents = "none"; // have it non-linearly increase with size

  var numberOfCells = Math.ceil(Math.sqrt(eachOrg.size) + 1);
  var minPadding = 1.5;
  var maxPadding = 12;
  var paddingAmount = 0; // randomize for small repos

  if (eachOrg.size == 1) {
    paddingAmount = Math.random() * (minPadding - maxPadding) + maxPadding; // make it depend on size for big repos
  } else {
    var unroundedNumberOfCells = Math.sqrt(eachOrg.size) + 1;
    var relativeSmallness = numberOfCells - unroundedNumberOfCells;
    paddingAmount = (1 - relativeSmallness) * (minPadding - maxPadding) + maxPadding;
  } // create a whole bunch of wrappers


  return /*#__PURE__*/React.createElement(SquareGridSizer, {
    numberOfCells: Math.sqrt(eachOrg.size) + 1
  }, circle = /*#__PURE__*/React.createElement(FancyBubble, {
    color1: color1,
    color2: color2,
    rotationOffset: "".concat(Math.random() * 360, "deg"),
    onmouseover: onHover,
    onmouseout: offHover // padding basically adjusts the size of bubble
    ,
    padding: "".concat(paddingAmount, "%")
  }, /*#__PURE__*/React.createElement("div", {
    class: "centered column",
    style: "color: white; height: 100%; max-width: 100%; overflow:visible;"
  }, /*#__PURE__*/React.createElement("span", {
    name: "repo-name",
    class: "centered",
    style: "\n                            border-radius: 0.6rem;\n                            padding: 0.3rem 0.5rem;\n                            background: var(--translucent-charcoal);\n                            color: white;\n                            max-width: 110%;\n                        "
  }, eachOrg.name), /*#__PURE__*/React.createElement("br", null), "(".concat(eachOrg.size, ")"))), repoListElement);
};

OrgBubble.index = 0;
router.addEventListener("go", function () {
  return OrgBubble.index = 0;
}); // reset index when page changes

module.exports = OrgBubble;
},{"quik-router":"../../node_modules/quik-router/main/main.js","../../systems/theme":"../code/systems/theme.js","../../systems/utilies":"../code/systems/utilies.js","../../skeletons/SquareGridSizer":"../code/skeletons/SquareGridSizer.jsx","../../skeletons/FancyBubble":"../code/skeletons/FancyBubble.jsx","../../components/Waterfall/RepoList":"../code/components/Waterfall/RepoList.jsx"}],"../code/components/Waterfall/OrgStream.jsx":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getOrgData = require("../Waterfall/getOrgData");

var OrgBubble = require("../Waterfall/OrgBubble");

module.exports = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var orgData;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getOrgData();

        case 2:
          orgData = _context.sent;
          return _context.abrupt("return", orgData.map(function (eachOrg) {
            return OrgBubble({
              eachOrg: eachOrg
            });
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
},{"../Waterfall/getOrgData":"../code/components/Waterfall/getOrgData.js","../Waterfall/OrgBubble":"../code/components/Waterfall/OrgBubble.jsx"}],"../code/pages/OrgWaterfall.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Waterfall = require("../skeletons/Waterfall");

var OrgStream = require("../components/Waterfall/OrgStream");

module.exports = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var children, properties, repoStreamElements;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            children = _ref.children, properties = _objectWithoutProperties(_ref, _excluded);
            _context.next = 3;
            return OrgStream();

          case 3:
            repoStreamElements = _context.sent;
            return _context.abrupt("return", /*#__PURE__*/React.createElement("main", {
              style: "height: 100%; overflow: scroll; justify-content: flex-start;",
              class: "column centered"
            }, /*#__PURE__*/React.createElement(Waterfall, null, repoStreamElements)));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
},{"../skeletons/Waterfall":"../code/skeletons/Waterfall.jsx","../components/Waterfall/OrgStream":"../code/components/Waterfall/OrgStream.jsx"}],"../code/components/Waterfall/getRepoData.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DateTime = require("good-date");

var _require = require("good-js"),
    object = _require.object;

var smartBackend = require("../../systems/smart_backend"); // parameters for tweaking


var maxNumberOfRepos = 300;
var magicNumberThatMakesTheUILookGood1 = 400; // importance of number of vulnerabilies when sorting

var magicNumberThatMakesTheUILookGood2 = 3300; // inverse importance of most recent date when sorting

module.exports = function () {
  return smartBackend.getOrgTree().then(function (orgTree) {
    // 
    // Flatten out into Repos (and add some data to them)
    // 
    var repos = [];

    for (var _i = 0, _Object$entries = Object.entries(orgTree); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          eachOrgName = _Object$entries$_i[0],
          eachOrg = _Object$entries$_i[1];

      for (var _i2 = 0, _Object$entries2 = Object.entries(eachOrg.repoSummaries); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            eachRepoName = _Object$entries2$_i[0],
            eachRepoValue = _Object$entries2$_i[1];

        var bubbleSize = (eachRepoValue.numberOfVulnerabilies / magicNumberThatMakesTheUILookGood1).toFixed(3) - 0;
        var lastTouched = new DateTime(eachRepoValue.newestVulnerabilityTime).unix;
        repos.push(_objectSpread(_objectSpread({}, eachRepoValue), {}, {
          name: eachRepoName,
          size: bubbleSize,
          orgName: eachOrgName,
          lastTouched: lastTouched,
          orderMetric: bubbleSize + Math.sqrt(lastTouched) / magicNumberThatMakesTheUILookGood2
        }));
      }
    } // 
    // sorting method
    // 


    var output = repos.sort(object.compareProperty({
      keyList: ['orderMetric'],
      largestFirst: true
    })); // 
    // convert structure method
    // 

    console.log("output is:", output.slice(0, 5));
    return output.slice(0, maxNumberOfRepos);
  });
};
},{"good-date":"../../node_modules/good-date/index.js","good-js":"../../node_modules/good-js/index.js","../../systems/smart_backend":"../code/systems/smart_backend.js"}],"../code/components/Waterfall/RepoBubble.jsx":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var router = require("quik-router");

var _require = require("../../systems/theme"),
    nodeTheme = _require.nodeTheme;

var _require2 = require("../../systems/utilies"),
    hash = _require2.hash,
    wrapAroundGet = _require2.wrapAroundGet;

var SquareGridSizer = require("../../skeletons/SquareGridSizer");

var FancyBubble = require("../../skeletons/FancyBubble");

var magicNumberThatMakesTheUILookGood1 = 1.5; // scales down the size of the bubbles

var minPadding = 1.5;
var maxPadding = 12; // 
// helpers
// 

var computeColors = function computeColors(index) {
  var color1 = wrapAroundGet(index, nodeTheme.darkColors);
  var color2 = wrapAroundGet(index, nodeTheme.lightColors); // randomly swap light and dark to add visual variation

  if (Math.random() > 0.5) {
    return [color1, color2];
  } else {
    return [color2, color1];
  }
};

var computePaddingAndCellCount = function computePaddingAndCellCount(size) {
  var numberOfCells = size / magicNumberThatMakesTheUILookGood1 + 1;
  var paddingAmount = 0; // randomize for small repos

  if (size == 1) {
    paddingAmount = Math.random() * (minPadding - maxPadding) + maxPadding; // make it depend on size for big repos
  } else {
    var relativeSmallness = Math.ceil(numberOfCells) - numberOfCells;
    paddingAmount = (1 - relativeSmallness) * (minPadding - maxPadding) + maxPadding;
  }

  return [paddingAmount, Math.ceil(numberOfCells)];
}; // 
// Repo
// 


var RepoBubble = function RepoBubble(_ref) {
  var eachRepo = _ref.eachRepo;

  var _computeColors = computeColors(++RepoBubble.index),
      _computeColors2 = _slicedToArray(_computeColors, 2),
      color1 = _computeColors2[0],
      color2 = _computeColors2[1];

  var _computePaddingAndCel = computePaddingAndCellCount(eachRepo.size),
      _computePaddingAndCel2 = _slicedToArray(_computePaddingAndCel, 2),
      paddingAmount = _computePaddingAndCel2[0],
      numberOfCells = _computePaddingAndCel2[1]; // create a whole bunch of wrappers


  return /*#__PURE__*/React.createElement(SquareGridSizer, {
    numberOfCells: numberOfCells
  }, /*#__PURE__*/React.createElement(FancyBubble, {
    color1: color1,
    color2: color2,
    rotationOffset: "".concat(Math.random() * 360, "deg") // padding basically adjusts the size of bubble
    ,
    onclick: function onclick(eventObject) {
      return router.goTo({
        page: "ProductView",
        orgName: eachRepo.orgName,
        repoName: eachRepo.name
      });
    },
    padding: "".concat(paddingAmount, "%")
  }, /*#__PURE__*/React.createElement("div", {
    class: "centered column",
    style: "color: white; height: 100%; max-width: 100%; overflow:visible;"
  }, /*#__PURE__*/React.createElement("span", {
    name: "repo-name",
    class: "centered",
    style: "\n                            border-radius: 0.6rem;\n                            padding: 0.3rem 0.5rem;\n                            background: var(--translucent-charcoal);\n                            color: white;\n                            max-width: 110%;\n                        "
  }, eachRepo.name), /*#__PURE__*/React.createElement("br", null), "(".concat(eachRepo.size, ")"))));
};

RepoBubble.index = 0;
router.addEventListener("go", function () {
  return RepoBubble.index = 0;
}); // reset index when page changes

module.exports = RepoBubble;
},{"quik-router":"../../node_modules/quik-router/main/main.js","../../systems/theme":"../code/systems/theme.js","../../systems/utilies":"../code/systems/utilies.js","../../skeletons/SquareGridSizer":"../code/skeletons/SquareGridSizer.jsx","../../skeletons/FancyBubble":"../code/skeletons/FancyBubble.jsx"}],"../code/components/Waterfall/RepoStream.jsx":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getRepoData = require("../Waterfall/getRepoData");

var RepoBubble = require("../Waterfall/RepoBubble"); // just get the data, and create an element for each


module.exports = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var RepoData;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getRepoData();

        case 2:
          RepoData = _context.sent;
          return _context.abrupt("return", RepoData.map(function (eachRepo) {
            return RepoBubble({
              eachRepo: eachRepo
            });
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
},{"../Waterfall/getRepoData":"../code/components/Waterfall/getRepoData.js","../Waterfall/RepoBubble":"../code/components/Waterfall/RepoBubble.jsx"}],"../code/pages/RepoWaterfall.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Waterfall = require("../skeletons/Waterfall");

var RepoStream = require("../components/Waterfall/RepoStream");

module.exports = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var children, properties, repoStreamElements;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            children = _ref.children, properties = _objectWithoutProperties(_ref, _excluded);
            _context.next = 3;
            return RepoStream();

          case 3:
            repoStreamElements = _context.sent;
            return _context.abrupt("return", /*#__PURE__*/React.createElement("main", {
              style: "height: 100%; overflow: scroll; justify-content: flex-start;",
              class: "column centered"
            }, /*#__PURE__*/React.createElement(Waterfall, null, repoStreamElements)));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
},{"../skeletons/Waterfall":"../code/skeletons/Waterfall.jsx","../components/Waterfall/RepoStream":"../code/components/Waterfall/RepoStream.jsx"}],"../code/skeletons/Positioner.jsx":[function(require,module,exports) {
var _excluded = ["row", "column", "reverse", "wrap", "positionSelf", "verticalAlignment", "horizontalAlignment", "innerAlignment", "textWrapAlignment", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var htmlEventHandlers = new Set(['onabort', 'onanimationcancel', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onblur', 'onerror', 'onfocus', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadend', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onwheel', 'onpause', 'onplay', 'onplaying', 'onpointerdown', 'onpointermove', 'onpointerup', 'onpointercancel', 'onpointerover', 'onpointerout', 'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectstart', 'onselectionchange', 'onshow', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'ontouchcancel', 'ontouchend', 'ontouchmove', 'ontouchstart', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onwaiting']);
var fixedAttributes = new Set(['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allow', 'alt', 'async', 'autocapitalize', 'autocomplete', 'autofocus', 'autoplay', 'background', 'bgcolor', 'border', 'buffered', 'capture', 'challenge', 'charset', 'checked', 'cite', 'class', 'code', 'codebase', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'crossorigin', 'csp', 'data', 'datetime', 'decoding', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'enctype', 'enterkeyhint', 'for', 'form', 'formaction', 'formenctype', 'formmethod', 'formnovalidate', 'formtarget', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id', 'importance', 'integrity', 'intrinsicsize', 'inputmode', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'loading', 'list', 'loop', 'low', 'manifest', 'max', 'maxlength', 'minlength', 'media', 'method', 'min', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'poster', 'preload', 'radiogroup', 'readonly', 'referrerpolicy', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'selected', 'shape', 'size', 'sizes', 'slot', 'span', 'spellcheck', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style', 'summary', 'tabindex', 'target', 'title', 'translate', 'type', 'usemap', 'value', 'width', 'wrap'].concat(_toConsumableArray(htmlEventHandlers)));

var isAnHtmlAttribute = function isAnHtmlAttribute(string) {
  if (fixedAttributes.has(string)) {
    return true;
  } else if (string.startsWith('data-')) {
    return true;
  }

  return false;
};

var cssHmtlOverlap = new Set(['width', 'height', 'background', 'border', 'color']);

var splitHtmlCssAttributes = function splitHtmlCssAttributes(object) {
  var htmlAttributes = {};
  var cssAttributes = {};

  for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (cssHmtlOverlap.has(key)) {
      htmlAttributes[key] = value;
      cssAttributes[key] = value;
    } else if (isAnHtmlAttribute(key)) {
      htmlAttributes[key] = value;
    } else {
      cssAttributes[key] = value;
    }
  }

  return [htmlAttributes, cssAttributes];
};

var computeDirection = function computeDirection(row, column, reverse) {
  var output = row ? 'row' : 'column';

  if (!reverse) {
    return output;
  } else {
    return "".concat(output, "-reverse");
  }
};

var humanPositionToCssPosition = function humanPositionToCssPosition(humanPosition) {
  if (humanPosition === 'relativeToParent') {
    return 'absolute';
  } else if (humanPosition === 'relativeToSelf') {
    return 'relative';
  } else if (humanPosition === 'relativeToWindow') {
    return 'fixed';
  } else if (humanPosition === 'sticky') {
    return 'sticky';
  } else if (typeof humanPosition === 'string') {
    console.warn("positionSelf needs to be one of [ 'relativeToParent', 'relativeToSelf', 'relativeToWindow', 'sticky' ]\nbut instead it was: '".concat(humanPosition, "'"));
  }

  return undefined;
};

var humanPositionToCssFlexbox = function humanPositionToCssFlexbox(humanWord) {
  if (humanWord.match(/^(top|left)$/i)) {
    return 'flex-start';
  } else if (humanWord.match(/^(bottom|right)$/i)) {
    return 'flex-end';
  } else {
    return humanWord;
  }
};

var columnAlignment = function columnAlignment(horizontalAlignment, verticalAlignment, innerAlignment, wrap) {
  if (!wrap) {
    return {
      justifyContent: verticalAlignment,
      alignItems: horizontalAlignment
    };
  } else {
    return {
      // still just vertical space between
      justifyContent: verticalAlignment,
      // when wrapped this becomes the inner item alignment
      alignItems: innerAlignment,
      // when wrapped this becomes the horizontal space between
      alignContent: horizontalAlignment
    };
  }
};

var rowAlignment = function rowAlignment(horizontalAlignment, verticalAlignment, innerAlignment, wrap) {
  if (!wrap) {
    return {
      justifyContent: horizontalAlignment,
      alignItems: verticalAlignment
    };
  } else {
    return {
      // still just horizontal space between
      justifyContent: horizontalAlignment,
      // when wrapped this becomes the inner item alignment
      alignItems: innerAlignment,
      // when wrapped this becomes the vertical space between
      alignContent: verticalAlignment
    };
  }
};

var computeFlexAlignmentAttributes = function computeFlexAlignmentAttributes(directionIsRow, verticalAlignment, horizontalAlignment, innerAlignment, wrap) {
  // convert to css form
  verticalAlignment = humanPositionToCssFlexbox(verticalAlignment);
  horizontalAlignment = humanPositionToCssFlexbox(horizontalAlignment); // then pick the correct one

  if (directionIsRow) {
    return rowAlignment(verticalAlignment, horizontalAlignment, innerAlignment, wrap);
  } else {
    return columnAlignment(verticalAlignment, horizontalAlignment, innerAlignment, wrap);
  }
};

module.exports = function (_ref) {
  var row = _ref.row,
      column = _ref.column,
      reverse = _ref.reverse,
      wrap = _ref.wrap,
      _ref$positionSelf = _ref.positionSelf,
      positionSelf = _ref$positionSelf === void 0 ? 'relativeToSelf' : _ref$positionSelf,
      _ref$verticalAlignmen = _ref.verticalAlignment,
      verticalAlignment = _ref$verticalAlignmen === void 0 ? 'top' : _ref$verticalAlignmen,
      _ref$horizontalAlignm = _ref.horizontalAlignment,
      horizontalAlignment = _ref$horizontalAlignm === void 0 ? 'left' : _ref$horizontalAlignm,
      _ref$innerAlignment = _ref.innerAlignment,
      innerAlignment = _ref$innerAlignment === void 0 ? 'center' : _ref$innerAlignment,
      textWrapAlignment = _ref.textWrapAlignment,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _splitHtmlCssAttribut = splitHtmlCssAttributes(props),
      _splitHtmlCssAttribut2 = _slicedToArray(_splitHtmlCssAttribut, 2),
      htmlAttributes = _splitHtmlCssAttribut2[0],
      cssAttributes = _splitHtmlCssAttribut2[1];

  return /*#__PURE__*/React.createElement("div", _extends({
    name: "positioner"
  }, htmlAttributes, {
    style: _objectSpread(_objectSpread({
      position: humanPositionToCssPosition(positionSelf) || 'relative',
      display: 'flex',
      flexDirection: computeDirection(row, column, reverse),
      flexWrap: wrap === 'reverse' ? 'wrap-reverse' : wrap && 'wrap',
      // text-align (effects how text will look when wrapped)
      textAlign: textWrapAlignment || horizontalAlignment
    }, computeFlexAlignmentAttributes(row, verticalAlignment, horizontalAlignment, innerAlignment, wrap)), cssAttributes)
  }), children);
};
},{}],"../static_files/d3_v3.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  var d3 = {
    version: "3.5.17"
  };

  var d3_arraySlice = [].slice,
      d3_array = function d3_array(list) {
    return d3_arraySlice.call(list);
  };

  var d3_document = this.document;

  function d3_documentElement(node) {
    return node && (node.ownerDocument || node.document || node).documentElement;
  }

  function d3_window(node) {
    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
  }

  if (d3_document) {
    try {
      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
    } catch (e) {
      d3_array = function d3_array(list) {
        var i = list.length,
            array = new Array(i);

        while (i--) {
          array[i] = list[i];
        }

        return array;
      };
    }
  }

  if (!Date.now) Date.now = function () {
    return +new Date();
  };

  if (d3_document) {
    try {
      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
    } catch (error) {
      var d3_element_prototype = this.Element.prototype,
          d3_element_setAttribute = d3_element_prototype.setAttribute,
          d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
          d3_style_prototype = this.CSSStyleDeclaration.prototype,
          d3_style_setProperty = d3_style_prototype.setProperty;

      d3_element_prototype.setAttribute = function (name, value) {
        d3_element_setAttribute.call(this, name, value + "");
      };

      d3_element_prototype.setAttributeNS = function (space, local, value) {
        d3_element_setAttributeNS.call(this, space, local, value + "");
      };

      d3_style_prototype.setProperty = function (name, value, priority) {
        d3_style_setProperty.call(this, name, value + "", priority);
      };
    }
  }

  d3.ascending = d3_ascending;

  function d3_ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  d3.descending = function (a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  };

  d3.min = function (array, f) {
    var i = -1,
        n = array.length,
        a,
        b;

    if (arguments.length === 1) {
      while (++i < n) {
        if ((b = array[i]) != null && b >= b) {
          a = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = array[i]) != null && a > b) a = b;
      }
    } else {
      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null && b >= b) {
          a = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
      }
    }

    return a;
  };

  d3.max = function (array, f) {
    var i = -1,
        n = array.length,
        a,
        b;

    if (arguments.length === 1) {
      while (++i < n) {
        if ((b = array[i]) != null && b >= b) {
          a = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = array[i]) != null && b > a) a = b;
      }
    } else {
      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null && b >= b) {
          a = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
      }
    }

    return a;
  };

  d3.extent = function (array, f) {
    var i = -1,
        n = array.length,
        a,
        b,
        c;

    if (arguments.length === 1) {
      while (++i < n) {
        if ((b = array[i]) != null && b >= b) {
          a = c = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = array[i]) != null) {
          if (a > b) a = b;
          if (c < b) c = b;
        }
      }
    } else {
      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null && b >= b) {
          a = c = b;
          break;
        }
      }

      while (++i < n) {
        if ((b = f.call(array, array[i], i)) != null) {
          if (a > b) a = b;
          if (c < b) c = b;
        }
      }
    }

    return [a, c];
  };

  function d3_number(x) {
    return x === null ? NaN : +x;
  }

  function d3_numeric(x) {
    return !isNaN(x);
  }

  d3.sum = function (array, f) {
    var s = 0,
        n = array.length,
        a,
        i = -1;

    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = +array[i])) s += a;
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
      }
    }

    return s;
  };

  d3.mean = function (array, f) {
    var s = 0,
        n = array.length,
        a,
        i = -1,
        j = n;

    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) s += a;else --j;
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a;else --j;
      }
    }

    if (j) return s / j;
  };

  d3.quantile = function (values, p) {
    var H = (values.length - 1) * p + 1,
        h = Math.floor(H),
        v = +values[h - 1],
        e = H - h;
    return e ? v + e * (values[h] - v) : v;
  };

  d3.median = function (array, f) {
    var numbers = [],
        n = array.length,
        a,
        i = -1;

    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
      }
    }

    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
  };

  d3.variance = function (array, f) {
    var n = array.length,
        m = 0,
        a,
        d,
        s = 0,
        i = -1,
        j = 0;

    if (arguments.length === 1) {
      while (++i < n) {
        if (d3_numeric(a = d3_number(array[i]))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    } else {
      while (++i < n) {
        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
          d = a - m;
          m += d / ++j;
          s += d * (a - m);
        }
      }
    }

    if (j > 1) return s / (j - 1);
  };

  d3.deviation = function () {
    var v = d3.variance.apply(this, arguments);
    return v ? Math.sqrt(v) : v;
  };

  function d3_bisector(compare) {
    return {
      left: function left(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;

        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) < 0) lo = mid + 1;else hi = mid;
        }

        return lo;
      },
      right: function right(a, x, lo, hi) {
        if (arguments.length < 3) lo = 0;
        if (arguments.length < 4) hi = a.length;

        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a[mid], x) > 0) hi = mid;else lo = mid + 1;
        }

        return lo;
      }
    };
  }

  var d3_bisect = d3_bisector(d3_ascending);
  d3.bisectLeft = d3_bisect.left;
  d3.bisect = d3.bisectRight = d3_bisect.right;

  d3.bisector = function (f) {
    return d3_bisector(f.length === 1 ? function (d, x) {
      return d3_ascending(f(d), x);
    } : f);
  };

  d3.shuffle = function (array, i0, i1) {
    if ((m = arguments.length) < 3) {
      i1 = array.length;
      if (m < 2) i0 = 0;
    }

    var m = i1 - i0,
        t,
        i;

    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }

    return array;
  };

  d3.permute = function (array, indexes) {
    var i = indexes.length,
        permutes = new Array(i);

    while (i--) {
      permutes[i] = array[indexes[i]];
    }

    return permutes;
  };

  d3.pairs = function (array) {
    var i = 0,
        n = array.length - 1,
        p0,
        p1 = array[0],
        pairs = new Array(n < 0 ? 0 : n);

    while (i < n) {
      pairs[i] = [p0 = p1, p1 = array[++i]];
    }

    return pairs;
  };

  d3.transpose = function (matrix) {
    if (!(n = matrix.length)) return [];

    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m;) {
      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
        row[j] = matrix[j][i];
      }
    }

    return transpose;
  };

  function d3_transposeLength(d) {
    return d.length;
  }

  d3.zip = function () {
    return d3.transpose(arguments);
  };

  d3.keys = function (map) {
    var keys = [];

    for (var key in map) {
      keys.push(key);
    }

    return keys;
  };

  d3.values = function (map) {
    var values = [];

    for (var key in map) {
      values.push(map[key]);
    }

    return values;
  };

  d3.entries = function (map) {
    var entries = [];

    for (var key in map) {
      entries.push({
        key: key,
        value: map[key]
      });
    }

    return entries;
  };

  d3.merge = function (arrays) {
    var n = arrays.length,
        m,
        i = -1,
        j = 0,
        merged,
        array;

    while (++i < n) {
      j += arrays[i].length;
    }

    merged = new Array(j);

    while (--n >= 0) {
      array = arrays[n];
      m = array.length;

      while (--m >= 0) {
        merged[--j] = array[m];
      }
    }

    return merged;
  };

  var abs = Math.abs;

  d3.range = function (start, stop, step) {
    if (arguments.length < 3) {
      step = 1;

      if (arguments.length < 2) {
        stop = start;
        start = 0;
      }
    }

    if ((stop - start) / step === Infinity) throw new Error("infinite range");
    var range = [],
        k = d3_range_integerScale(abs(step)),
        i = -1,
        j;
    start *= k, stop *= k, step *= k;
    if (step < 0) while ((j = start + step * ++i) > stop) {
      range.push(j / k);
    } else while ((j = start + step * ++i) < stop) {
      range.push(j / k);
    }
    return range;
  };

  function d3_range_integerScale(x) {
    var k = 1;

    while (x * k % 1) {
      k *= 10;
    }

    return k;
  }

  function d3_class(ctor, properties) {
    for (var key in properties) {
      Object.defineProperty(ctor.prototype, key, {
        value: properties[key],
        enumerable: false
      });
    }
  }

  d3.map = function (object, f) {
    var map = new d3_Map();

    if (object instanceof d3_Map) {
      object.forEach(function (key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;
      if (arguments.length === 1) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f.call(object, o = object[i], i), o);
      }
    } else {
      for (var key in object) {
        map.set(key, object[key]);
      }
    }

    return map;
  };

  function d3_Map() {
    this._ = Object.create(null);
  }

  var d3_map_proto = "__proto__",
      d3_map_zero = "\x00";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function get(key) {
      return this._[d3_map_escape(key)];
    },
    set: function set(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function values() {
      var values = [];

      for (var key in this._) {
        values.push(this._[key]);
      }

      return values;
    },
    entries: function entries() {
      var entries = [];

      for (var key in this._) {
        entries.push({
          key: d3_map_unescape(key),
          value: this._[key]
        });
      }

      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function forEach(f) {
      for (var key in this._) {
        f.call(this, d3_map_unescape(key), this._[key]);
      }
    }
  });

  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }

  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }

  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }

  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }

  function d3_map_keys() {
    var keys = [];

    for (var key in this._) {
      keys.push(d3_map_unescape(key));
    }

    return keys;
  }

  function d3_map_size() {
    var size = 0;

    for (var key in this._) {
      ++size;
    }

    return size;
  }

  function d3_map_empty() {
    for (var key in this._) {
      return false;
    }

    return true;
  }

  d3.nest = function () {
    var nest = {},
        keys = [],
        sortKeys = [],
        sortValues,
        rollup;

    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1,
          n = array.length,
          key = keys[depth++],
          keyValue,
          object,
          setter,
          valuesByKey = new d3_Map(),
          values;

      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [object]);
        }
      }

      if (mapType) {
        object = mapType();

        setter = function setter(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};

        setter = function setter(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }

      valuesByKey.forEach(setter);
      return object;
    }

    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [],
          sortKey = sortKeys[depth++];
      map.forEach(function (key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function (a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }

    nest.map = function (array, mapType) {
      return map(mapType, array, 0);
    };

    nest.entries = function (array) {
      return entries(map(d3.map, array, 0), 0);
    };

    nest.key = function (d) {
      keys.push(d);
      return nest;
    };

    nest.sortKeys = function (order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    };

    nest.sortValues = function (order) {
      sortValues = order;
      return nest;
    };

    nest.rollup = function (f) {
      rollup = f;
      return nest;
    };

    return nest;
  };

  d3.set = function (array) {
    var set = new d3_Set();
    if (array) for (var i = 0, n = array.length; i < n; ++i) {
      set.add(array[i]);
    }
    return set;
  };

  function d3_Set() {
    this._ = Object.create(null);
  }

  d3_class(d3_Set, {
    has: d3_map_has,
    add: function add(key) {
      this._[d3_map_escape(key += "")] = true;
      return key;
    },
    remove: d3_map_remove,
    values: d3_map_keys,
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function forEach(f) {
      for (var key in this._) {
        f.call(this, d3_map_unescape(key));
      }
    }
  });
  d3.behavior = {};

  function d3_identity(d) {
    return d;
  }

  d3.rebind = function (target, source) {
    var i = 1,
        n = arguments.length,
        method;

    while (++i < n) {
      target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    }

    return target;
  };

  function d3_rebind(target, source, method) {
    return function () {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }

  function d3_vendorSymbol(object, name) {
    if (name in object) return name;
    name = name.charAt(0).toUpperCase() + name.slice(1);

    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
      var prefixName = d3_vendorPrefixes[i] + name;
      if (prefixName in object) return prefixName;
    }
  }

  var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];

  function d3_noop() {}

  d3.dispatch = function () {
    var dispatch = new d3_dispatch(),
        i = -1,
        n = arguments.length;

    while (++i < n) {
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    }

    return dispatch;
  };

  function d3_dispatch() {}

  d3_dispatch.prototype.on = function (type, listener) {
    var i = type.indexOf("."),
        name = "";

    if (i >= 0) {
      name = type.slice(i + 1);
      type = type.slice(0, i);
    }

    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);

    if (arguments.length === 2) {
      if (listener == null) for (type in this) {
        if (this.hasOwnProperty(type)) this[type].on(name, null);
      }
      return this;
    }
  };

  function d3_dispatch_event(dispatch) {
    var listeners = [],
        listenerByName = new d3_Map();

    function event() {
      var z = listeners,
          i = -1,
          n = z.length,
          l;

      while (++i < n) {
        if (l = z[i].on) l.apply(this, arguments);
      }

      return dispatch;
    }

    event.on = function (name, listener) {
      var l = listenerByName.get(name),
          i;
      if (arguments.length < 2) return l && l.on;

      if (l) {
        l.on = null;
        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
        listenerByName.remove(name);
      }

      if (listener) listeners.push(listenerByName.set(name, {
        on: listener
      }));
      return dispatch;
    };

    return event;
  }

  d3.event = null;

  function d3_eventPreventDefault() {
    d3.event.preventDefault();
  }

  function d3_eventSource() {
    var e = d3.event,
        s;

    while (s = e.sourceEvent) {
      e = s;
    }

    return e;
  }

  function d3_eventDispatch(target) {
    var dispatch = new d3_dispatch(),
        i = 0,
        n = arguments.length;

    while (++i < n) {
      dispatch[arguments[i]] = d3_dispatch_event(dispatch);
    }

    dispatch.of = function (thiz, argumentz) {
      return function (e1) {
        try {
          var e0 = e1.sourceEvent = d3.event;
          e1.target = target;
          d3.event = e1;
          dispatch[e1.type].apply(thiz, argumentz);
        } finally {
          d3.event = e0;
        }
      };
    };

    return dispatch;
  }

  d3.requote = function (s) {
    return s.replace(d3_requote_re, "\\$&");
  };

  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  var d3_subclass = {}.__proto__ ? function (object, prototype) {
    object.__proto__ = prototype;
  } : function (object, prototype) {
    for (var property in prototype) {
      object[property] = prototype[property];
    }
  };

  function d3_selection(groups) {
    d3_subclass(groups, d3_selectionPrototype);
    return groups;
  }

  var d3_select = function d3_select(s, n) {
    return n.querySelector(s);
  },
      d3_selectAll = function d3_selectAll(s, n) {
    return n.querySelectorAll(s);
  },
      _d3_selectMatches = function d3_selectMatches(n, s) {
    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];

    _d3_selectMatches = function d3_selectMatches(n, s) {
      return d3_selectMatcher.call(n, s);
    };

    return _d3_selectMatches(n, s);
  };

  if (typeof Sizzle === "function") {
    d3_select = function d3_select(s, n) {
      return Sizzle(s, n)[0] || null;
    };

    d3_selectAll = Sizzle;
    _d3_selectMatches = Sizzle.matchesSelector;
  }

  d3.selection = function () {
    return d3.select(d3_document.documentElement);
  };

  var d3_selectionPrototype = d3.selection.prototype = [];

  d3_selectionPrototype.select = function (selector) {
    var subgroups = [],
        subgroup,
        subnode,
        group,
        node;
    selector = d3_selection_selector(selector);

    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;

      for (var i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }

    return d3_selection(subgroups);
  };

  function d3_selection_selector(selector) {
    return typeof selector === "function" ? selector : function () {
      return d3_select(selector, this);
    };
  }

  d3_selectionPrototype.selectAll = function (selector) {
    var subgroups = [],
        subgroup,
        node;
    selector = d3_selection_selectorAll(selector);

    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
          subgroup.parentNode = node;
        }
      }
    }

    return d3_selection(subgroups);
  };

  function d3_selection_selectorAll(selector) {
    return typeof selector === "function" ? selector : function () {
      return d3_selectAll(selector, this);
    };
  }

  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
  var d3_nsPrefix = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: d3_nsXhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  d3.ns = {
    prefix: d3_nsPrefix,
    qualify: function qualify(name) {
      var i = name.indexOf(":"),
          prefix = name;
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return d3_nsPrefix.hasOwnProperty(prefix) ? {
        space: d3_nsPrefix[prefix],
        local: name
      } : name;
    }
  };

  d3_selectionPrototype.attr = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node();
        name = d3.ns.qualify(name);
        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
      }

      for (value in name) {
        this.each(d3_selection_attr(value, name[value]));
      }

      return this;
    }

    return this.each(d3_selection_attr(name, value));
  };

  function d3_selection_attr(name, value) {
    name = d3.ns.qualify(name);

    function attrNull() {
      this.removeAttribute(name);
    }

    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }

    function attrConstant() {
      this.setAttribute(name, value);
    }

    function attrConstantNS() {
      this.setAttributeNS(name.space, name.local, value);
    }

    function attrFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttribute(name);else this.setAttribute(name, x);
    }

    function attrFunctionNS() {
      var x = value.apply(this, arguments);
      if (x == null) this.removeAttributeNS(name.space, name.local);else this.setAttributeNS(name.space, name.local, x);
    }

    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
  }

  function d3_collapse(s) {
    return s.trim().replace(/\s+/g, " ");
  }

  d3_selectionPrototype.classed = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") {
        var node = this.node(),
            n = (name = d3_selection_classes(name)).length,
            i = -1;

        if (value = node.classList) {
          while (++i < n) {
            if (!value.contains(name[i])) return false;
          }
        } else {
          value = node.getAttribute("class");

          while (++i < n) {
            if (!d3_selection_classedRe(name[i]).test(value)) return false;
          }
        }

        return true;
      }

      for (value in name) {
        this.each(d3_selection_classed(value, name[value]));
      }

      return this;
    }

    return this.each(d3_selection_classed(name, value));
  };

  function d3_selection_classedRe(name) {
    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
  }

  function d3_selection_classes(name) {
    return (name + "").trim().split(/^|\s+/);
  }

  function d3_selection_classed(name, value) {
    name = d3_selection_classes(name).map(d3_selection_classedName);
    var n = name.length;

    function classedConstant() {
      var i = -1;

      while (++i < n) {
        name[i](this, value);
      }
    }

    function classedFunction() {
      var i = -1,
          x = value.apply(this, arguments);

      while (++i < n) {
        name[i](this, x);
      }
    }

    return typeof value === "function" ? classedFunction : classedConstant;
  }

  function d3_selection_classedName(name) {
    var re = d3_selection_classedRe(name);
    return function (node, value) {
      if (c = node.classList) return value ? c.add(name) : c.remove(name);
      var c = node.getAttribute("class") || "";

      if (value) {
        re.lastIndex = 0;
        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
      } else {
        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
      }
    };
  }

  d3_selectionPrototype.style = function (name, value, priority) {
    var n = arguments.length;

    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";

        for (priority in name) {
          this.each(d3_selection_style(priority, name[priority], value));
        }

        return this;
      }

      if (n < 2) {
        var node = this.node();
        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
      }

      priority = "";
    }

    return this.each(d3_selection_style(name, value, priority));
  };

  function d3_selection_style(name, value, priority) {
    function styleNull() {
      this.style.removeProperty(name);
    }

    function styleConstant() {
      this.style.setProperty(name, value, priority);
    }

    function styleFunction() {
      var x = value.apply(this, arguments);
      if (x == null) this.style.removeProperty(name);else this.style.setProperty(name, x, priority);
    }

    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
  }

  d3_selectionPrototype.property = function (name, value) {
    if (arguments.length < 2) {
      if (typeof name === "string") return this.node()[name];

      for (value in name) {
        this.each(d3_selection_property(value, name[value]));
      }

      return this;
    }

    return this.each(d3_selection_property(name, value));
  };

  function d3_selection_property(name, value) {
    function propertyNull() {
      delete this[name];
    }

    function propertyConstant() {
      this[name] = value;
    }

    function propertyFunction() {
      var x = value.apply(this, arguments);
      if (x == null) delete this[name];else this[name] = x;
    }

    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
  }

  d3_selectionPrototype.text = function (value) {
    return arguments.length ? this.each(typeof value === "function" ? function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    } : value == null ? function () {
      this.textContent = "";
    } : function () {
      this.textContent = value;
    }) : this.node().textContent;
  };

  d3_selectionPrototype.html = function (value) {
    return arguments.length ? this.each(typeof value === "function" ? function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    } : value == null ? function () {
      this.innerHTML = "";
    } : function () {
      this.innerHTML = value;
    }) : this.node().innerHTML;
  };

  d3_selectionPrototype.append = function (name) {
    name = d3_selection_creator(name);
    return this.select(function () {
      return this.appendChild(name.apply(this, arguments));
    });
  };

  function d3_selection_creator(name) {
    function create() {
      var document = this.ownerDocument,
          namespace = this.namespaceURI;
      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
    }

    function createNS() {
      return this.ownerDocument.createElementNS(name.space, name.local);
    }

    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
  }

  d3_selectionPrototype.insert = function (name, before) {
    name = d3_selection_creator(name);
    before = d3_selection_selector(before);
    return this.select(function () {
      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
    });
  };

  d3_selectionPrototype.remove = function () {
    return this.each(d3_selectionRemove);
  };

  function d3_selectionRemove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  d3_selectionPrototype.data = function (value, key) {
    var i = -1,
        n = this.length,
        group,
        node;

    if (!arguments.length) {
      value = new Array(n = (group = this[0]).length);

      while (++i < n) {
        if (node = group[i]) {
          value[i] = node.__data__;
        }
      }

      return value;
    }

    function bind(group, groupData) {
      var i,
          n = group.length,
          m = groupData.length,
          n0 = Math.min(n, m),
          updateNodes = new Array(m),
          enterNodes = new Array(m),
          exitNodes = new Array(n),
          node,
          nodeData;

      if (key) {
        var nodeByKeyValue = new d3_Map(),
            keyValues = new Array(n),
            keyValue;

        for (i = -1; ++i < n;) {
          if (node = group[i]) {
            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
              exitNodes[i] = node;
            } else {
              nodeByKeyValue.set(keyValue, node);
            }

            keyValues[i] = keyValue;
          }
        }

        for (i = -1; ++i < m;) {
          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          } else if (node !== true) {
            updateNodes[i] = node;
            node.__data__ = nodeData;
          }

          nodeByKeyValue.set(keyValue, true);
        }

        for (i = -1; ++i < n;) {
          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
            exitNodes[i] = group[i];
          }
        }
      } else {
        for (i = -1; ++i < n0;) {
          node = group[i];
          nodeData = groupData[i];

          if (node) {
            node.__data__ = nodeData;
            updateNodes[i] = node;
          } else {
            enterNodes[i] = d3_selection_dataNode(nodeData);
          }
        }

        for (; i < m; ++i) {
          enterNodes[i] = d3_selection_dataNode(groupData[i]);
        }

        for (; i < n; ++i) {
          exitNodes[i] = group[i];
        }
      }

      enterNodes.update = updateNodes;
      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
      enter.push(enterNodes);
      update.push(updateNodes);
      exit.push(exitNodes);
    }

    var enter = d3_selection_enter([]),
        update = d3_selection([]),
        exit = d3_selection([]);

    if (typeof value === "function") {
      while (++i < n) {
        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
      }
    } else {
      while (++i < n) {
        bind(group = this[i], value);
      }
    }

    update.enter = function () {
      return enter;
    };

    update.exit = function () {
      return exit;
    };

    return update;
  };

  function d3_selection_dataNode(data) {
    return {
      __data__: data
    };
  }

  d3_selectionPrototype.datum = function (value) {
    return arguments.length ? this.property("__data__", value) : this.property("__data__");
  };

  d3_selectionPrototype.filter = function (filter) {
    var subgroups = [],
        subgroup,
        group,
        node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);

    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);
      subgroup.parentNode = (group = this[j]).parentNode;

      for (var i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }

    return d3_selection(subgroups);
  };

  function d3_selection_filter(selector) {
    return function () {
      return _d3_selectMatches(this, selector);
    };
  }

  d3_selectionPrototype.order = function () {
    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  };

  d3_selectionPrototype.sort = function (comparator) {
    comparator = d3_selection_sortComparator.apply(this, arguments);

    for (var j = -1, m = this.length; ++j < m;) {
      this[j].sort(comparator);
    }

    return this.order();
  };

  function d3_selection_sortComparator(comparator) {
    if (!arguments.length) comparator = d3_ascending;
    return function (a, b) {
      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
    };
  }

  d3_selectionPrototype.each = function (callback) {
    return d3_selection_each(this, function (node, i, j) {
      callback.call(node, node.__data__, i, j);
    });
  };

  function d3_selection_each(groups, callback) {
    for (var j = 0, m = groups.length; j < m; j++) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
        if (node = group[i]) callback(node, i, j);
      }
    }

    return groups;
  }

  d3_selectionPrototype.call = function (callback) {
    var args = d3_array(arguments);
    callback.apply(args[0] = this, args);
    return this;
  };

  d3_selectionPrototype.empty = function () {
    return !this.node();
  };

  d3_selectionPrototype.node = function () {
    for (var j = 0, m = this.length; j < m; j++) {
      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  };

  d3_selectionPrototype.size = function () {
    var n = 0;
    d3_selection_each(this, function () {
      ++n;
    });
    return n;
  };

  function d3_selection_enter(selection) {
    d3_subclass(selection, d3_selection_enterPrototype);
    return selection;
  }

  var d3_selection_enterPrototype = [];
  d3.selection.enter = d3_selection_enter;
  d3.selection.enter.prototype = d3_selection_enterPrototype;
  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
  d3_selection_enterPrototype.size = d3_selectionPrototype.size;

  d3_selection_enterPrototype.select = function (selector) {
    var subgroups = [],
        subgroup,
        subnode,
        upgroup,
        group,
        node;

    for (var j = -1, m = this.length; ++j < m;) {
      upgroup = (group = this[j]).update;
      subgroups.push(subgroup = []);
      subgroup.parentNode = group.parentNode;

      for (var i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
          subnode.__data__ = node.__data__;
        } else {
          subgroup.push(null);
        }
      }
    }

    return d3_selection(subgroups);
  };

  d3_selection_enterPrototype.insert = function (name, before) {
    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
    return d3_selectionPrototype.insert.call(this, name, before);
  };

  function d3_selection_enterInsertBefore(enter) {
    var i0, j0;
    return function (d, i, j) {
      var group = enter[j].update,
          n = group.length,
          node;
      if (j != j0) j0 = j, i0 = 0;
      if (i >= i0) i0 = i + 1;

      while (!(node = group[i0]) && ++i0 < n) {
        ;
      }

      return node;
    };
  }

  d3.select = function (node) {
    var group;

    if (typeof node === "string") {
      group = [d3_select(node, d3_document)];
      group.parentNode = d3_document.documentElement;
    } else {
      group = [node];
      group.parentNode = d3_documentElement(node);
    }

    return d3_selection([group]);
  };

  d3.selectAll = function (nodes) {
    var group;

    if (typeof nodes === "string") {
      group = d3_array(d3_selectAll(nodes, d3_document));
      group.parentNode = d3_document.documentElement;
    } else {
      group = d3_array(nodes);
      group.parentNode = null;
    }

    return d3_selection([group]);
  };

  d3_selectionPrototype.on = function (type, listener, capture) {
    var n = arguments.length;

    if (n < 3) {
      if (typeof type !== "string") {
        if (n < 2) listener = false;

        for (capture in type) {
          this.each(d3_selection_on(capture, type[capture], listener));
        }

        return this;
      }

      if (n < 2) return (n = this.node()["__on" + type]) && n._;
      capture = false;
    }

    return this.each(d3_selection_on(type, listener, capture));
  };

  function d3_selection_on(type, listener, capture) {
    var name = "__on" + type,
        i = type.indexOf("."),
        wrap = d3_selection_onListener;
    if (i > 0) type = type.slice(0, i);
    var filter = d3_selection_onFilters.get(type);
    if (filter) type = filter, wrap = d3_selection_onFilter;

    function onRemove() {
      var l = this[name];

      if (l) {
        this.removeEventListener(type, l, l.$);
        delete this[name];
      }
    }

    function onAdd() {
      var l = wrap(listener, d3_array(arguments));
      onRemove.call(this);
      this.addEventListener(type, this[name] = l, l.$ = capture);
      l._ = listener;
    }

    function removeAll() {
      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"),
          match;

      for (var name in this) {
        if (match = name.match(re)) {
          var l = this[name];
          this.removeEventListener(match[1], l, l.$);
          delete this[name];
        }
      }
    }

    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
  }

  var d3_selection_onFilters = d3.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });

  if (d3_document) {
    d3_selection_onFilters.forEach(function (k) {
      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
    });
  }

  function d3_selection_onListener(listener, argumentz) {
    return function (e) {
      var o = d3.event;
      d3.event = e;
      argumentz[0] = this.__data__;

      try {
        listener.apply(this, argumentz);
      } finally {
        d3.event = o;
      }
    };
  }

  function d3_selection_onFilter(listener, argumentz) {
    var l = d3_selection_onListener(listener, argumentz);
    return function (e) {
      var target = this,
          related = e.relatedTarget;

      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
        l.call(target, e);
      }
    };
  }

  var d3_event_dragSelect,
      d3_event_dragId = 0;

  function d3_event_dragSuppress(node) {
    var name = ".dragsuppress-" + ++d3_event_dragId,
        click = "click" + name,
        w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);

    if (d3_event_dragSelect == null) {
      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
    }

    if (d3_event_dragSelect) {
      var style = d3_documentElement(node).style,
          select = style[d3_event_dragSelect];
      style[d3_event_dragSelect] = "none";
    }

    return function (suppressClick) {
      w.on(name, null);
      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;

      if (suppressClick) {
        var off = function off() {
          w.on(click, null);
        };

        w.on(click, function () {
          d3_eventPreventDefault();
          off();
        }, true);
        setTimeout(off, 0);
      }
    };
  }

  d3.mouse = function (container) {
    return d3_mousePoint(container, d3_eventSource());
  };

  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

  function d3_mousePoint(container, e) {
    if (e.changedTouches) e = e.changedTouches[0];
    var svg = container.ownerSVGElement || container;

    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();

      if (d3_mouse_bug44083 < 0) {
        var window = d3_window(container);

        if (window.scrollX || window.scrollY) {
          svg = d3.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var ctm = svg[0][0].getScreenCTM();
          d3_mouse_bug44083 = !(ctm.f || ctm.e);
          svg.remove();
        }
      }

      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY;else point.x = e.clientX, point.y = e.clientY;
      point = point.matrixTransform(container.getScreenCTM().inverse());
      return [point.x, point.y];
    }

    var rect = container.getBoundingClientRect();
    return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
  }

  d3.touch = function (container, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
      if ((touch = touches[i]).identifier === identifier) {
        return d3_mousePoint(container, touch);
      }
    }
  };

  d3.behavior.drag = function () {
    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
        origin = null,
        mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"),
        touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");

    function drag() {
      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
    }

    function dragstart(id, position, subject, move, end) {
      return function () {
        var that = this,
            target = d3.event.target.correspondingElement || d3.event.target,
            parent = that.parentNode,
            dispatch = event.of(that, arguments),
            dragged = 0,
            dragId = id(),
            dragName = ".drag" + (dragId == null ? "" : "-" + dragId),
            dragOffset,
            dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
            dragRestore = d3_event_dragSuppress(target),
            position0 = position(parent, dragId);

        if (origin) {
          dragOffset = origin.apply(that, arguments);
          dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]];
        } else {
          dragOffset = [0, 0];
        }

        dispatch({
          type: "dragstart"
        });

        function moved() {
          var position1 = position(parent, dragId),
              dx,
              dy;
          if (!position1) return;
          dx = position1[0] - position0[0];
          dy = position1[1] - position0[1];
          dragged |= dx | dy;
          position0 = position1;
          dispatch({
            type: "drag",
            x: position1[0] + dragOffset[0],
            y: position1[1] + dragOffset[1],
            dx: dx,
            dy: dy
          });
        }

        function ended() {
          if (!position(parent, dragId)) return;
          dragSubject.on(move + dragName, null).on(end + dragName, null);
          dragRestore(dragged);
          dispatch({
            type: "dragend"
          });
        }
      };
    }

    drag.origin = function (x) {
      if (!arguments.length) return origin;
      origin = x;
      return drag;
    };

    return d3.rebind(drag, event, "on");
  };

  function d3_behavior_dragTouchId() {
    return d3.event.changedTouches[0].identifier;
  }

  d3.touches = function (container, touches) {
    if (arguments.length < 2) touches = d3_eventSource().touches;
    return touches ? d3_array(touches).map(function (touch) {
      var point = d3_mousePoint(container, touch);
      point.identifier = touch.identifier;
      return point;
    }) : [];
  };

  var ε = 1e-6,
      ε2 = ε * ε,
      π = Math.PI,
      τ = 2 * π,
      τε = τ - ε,
      halfπ = π / 2,
      d3_radians = π / 180,
      d3_degrees = 180 / π;

  function d3_sgn(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }

  function d3_cross2d(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  }

  function d3_acos(x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }

  function d3_asin(x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }

  function d3_sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }

  function d3_cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }

  function d3_tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }

  function d3_haversin(x) {
    return (x = Math.sin(x / 2)) * x;
  }

  var ρ = Math.SQRT2,
      ρ2 = 2,
      ρ4 = 4;

  d3.interpolateZoom = function (p0, p1) {
    var ux0 = p0[0],
        uy0 = p0[1],
        w0 = p0[2],
        ux1 = p1[0],
        uy1 = p1[1],
        w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    if (d2 < ε2) {
      S = Math.log(w1 / w0) / ρ;

      i = function i(t) {
        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S)];
      };
    } else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
          b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / ρ;

      i = function i(t) {
        var s = t * S,
            coshr0 = d3_cosh(r0),
            u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)];
      };
    }

    i.duration = S * 1e3;
    return i;
  };

  d3.behavior.zoom = function () {
    var view = {
      x: 0,
      y: 0,
      k: 1
    },
        translate0,
        center0,
        center,
        size = [960, 500],
        scaleExtent = d3_behavior_zoomInfinity,
        duration = 250,
        zooming = 0,
        mousedown = "mousedown.zoom",
        mousemove = "mousemove.zoom",
        mouseup = "mouseup.zoom",
        mousewheelTimer,
        touchstart = "touchstart.zoom",
        touchtime,
        event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"),
        x0,
        x1,
        y0,
        y1;

    if (!d3_behavior_zoomWheel) {
      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function d3_behavior_zoomDelta() {
        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function d3_behavior_zoomDelta() {
        return d3.event.wheelDelta;
      }, "mousewheel") : (d3_behavior_zoomDelta = function d3_behavior_zoomDelta() {
        return -d3.event.detail;
      }, "MozMousePixelScroll");
    }

    function zoom(g) {
      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
    }

    zoom.event = function (g) {
      g.each(function () {
        var dispatch = event.of(this, arguments),
            view1 = view;

        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.zoom", function () {
            view = this.__chart__ || {
              x: 0,
              y: 0,
              k: 1
            };
            zoomstarted(dispatch);
          }).tween("zoom:zoom", function () {
            var dx = size[0],
                dy = size[1],
                cx = center0 ? center0[0] : dx / 2,
                cy = center0 ? center0[1] : dy / 2,
                i = d3.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
            return function (t) {
              var l = i(t),
                  k = dx / l[2];
              this.__chart__ = view = {
                x: cx - l[0] * k,
                y: cy - l[1] * k,
                k: k
              };
              zoomed(dispatch);
            };
          }).each("interrupt.zoom", function () {
            zoomended(dispatch);
          }).each("end.zoom", function () {
            zoomended(dispatch);
          });
        } else {
          this.__chart__ = view;
          zoomstarted(dispatch);
          zoomed(dispatch);
          zoomended(dispatch);
        }
      });
    };

    zoom.translate = function (_) {
      if (!arguments.length) return [view.x, view.y];
      view = {
        x: +_[0],
        y: +_[1],
        k: view.k
      };
      rescale();
      return zoom;
    };

    zoom.scale = function (_) {
      if (!arguments.length) return view.k;
      view = {
        x: view.x,
        y: view.y,
        k: null
      };
      scaleTo(+_);
      rescale();
      return zoom;
    };

    zoom.scaleExtent = function (_) {
      if (!arguments.length) return scaleExtent;
      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [+_[0], +_[1]];
      return zoom;
    };

    zoom.center = function (_) {
      if (!arguments.length) return center;
      center = _ && [+_[0], +_[1]];
      return zoom;
    };

    zoom.size = function (_) {
      if (!arguments.length) return size;
      size = _ && [+_[0], +_[1]];
      return zoom;
    };

    zoom.duration = function (_) {
      if (!arguments.length) return duration;
      duration = +_;
      return zoom;
    };

    zoom.x = function (z) {
      if (!arguments.length) return x1;
      x1 = z;
      x0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };

    zoom.y = function (z) {
      if (!arguments.length) return y1;
      y1 = z;
      y0 = z.copy();
      view = {
        x: 0,
        y: 0,
        k: 1
      };
      return zoom;
    };

    function location(p) {
      return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k];
    }

    function point(l) {
      return [l[0] * view.k + view.x, l[1] * view.k + view.y];
    }

    function scaleTo(s) {
      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
    }

    function translateTo(p, l) {
      l = point(l);
      view.x += p[0] - l[0];
      view.y += p[1] - l[1];
    }

    function zoomTo(that, p, l, k) {
      that.__chart__ = {
        x: view.x,
        y: view.y,
        k: view.k
      };
      scaleTo(Math.pow(2, k));
      translateTo(center0 = p, l);
      that = d3.select(that);
      if (duration > 0) that = that.transition().duration(duration);
      that.call(zoom.event);
    }

    function rescale() {
      if (x1) x1.domain(x0.range().map(function (x) {
        return (x - view.x) / view.k;
      }).map(x0.invert));
      if (y1) y1.domain(y0.range().map(function (y) {
        return (y - view.y) / view.k;
      }).map(y0.invert));
    }

    function zoomstarted(dispatch) {
      if (!zooming++) dispatch({
        type: "zoomstart"
      });
    }

    function zoomed(dispatch) {
      rescale();
      dispatch({
        type: "zoom",
        scale: view.k,
        translate: [view.x, view.y]
      });
    }

    function zoomended(dispatch) {
      if (! --zooming) dispatch({
        type: "zoomend"
      }), center0 = null;
    }

    function mousedowned() {
      var that = this,
          dispatch = event.of(that, arguments),
          dragged = 0,
          subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended),
          location0 = location(d3.mouse(that)),
          dragRestore = d3_event_dragSuppress(that);
      d3_selection_interrupt.call(that);
      zoomstarted(dispatch);

      function moved() {
        dragged = 1;
        translateTo(d3.mouse(that), location0);
        zoomed(dispatch);
      }

      function ended() {
        subject.on(mousemove, null).on(mouseup, null);
        dragRestore(dragged);
        zoomended(dispatch);
      }
    }

    function touchstarted() {
      var that = this,
          dispatch = event.of(that, arguments),
          locations0 = {},
          distance0 = 0,
          scale0,
          zoomName = ".zoom-" + d3.event.changedTouches[0].identifier,
          touchmove = "touchmove" + zoomName,
          touchend = "touchend" + zoomName,
          targets = [],
          subject = d3.select(that),
          dragRestore = d3_event_dragSuppress(that);
      started();
      zoomstarted(dispatch);
      subject.on(mousedown, null).on(touchstart, started);

      function relocate() {
        var touches = d3.touches(that);
        scale0 = view.k;
        touches.forEach(function (t) {
          if (t.identifier in locations0) locations0[t.identifier] = location(t);
        });
        return touches;
      }

      function started() {
        var target = d3.event.target;
        d3.select(target).on(touchmove, moved).on(touchend, ended);
        targets.push(target);
        var changed = d3.event.changedTouches;

        for (var i = 0, n = changed.length; i < n; ++i) {
          locations0[changed[i].identifier] = null;
        }

        var touches = relocate(),
            now = Date.now();

        if (touches.length === 1) {
          if (now - touchtime < 500) {
            var p = touches[0];
            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
            d3_eventPreventDefault();
          }

          touchtime = now;
        } else if (touches.length > 1) {
          var p = touches[0],
              q = touches[1],
              dx = p[0] - q[0],
              dy = p[1] - q[1];
          distance0 = dx * dx + dy * dy;
        }
      }

      function moved() {
        var touches = d3.touches(that),
            p0,
            l0,
            p1,
            l1;
        d3_selection_interrupt.call(that);

        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
          p1 = touches[i];

          if (l1 = locations0[p1.identifier]) {
            if (l0) break;
            p0 = p1, l0 = l1;
          }
        }

        if (l1) {
          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1,
              scale1 = distance0 && Math.sqrt(distance1 / distance0);
          p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
          l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
          scaleTo(scale1 * scale0);
        }

        touchtime = null;
        translateTo(p0, l0);
        zoomed(dispatch);
      }

      function ended() {
        if (d3.event.touches.length) {
          var changed = d3.event.changedTouches;

          for (var i = 0, n = changed.length; i < n; ++i) {
            delete locations0[changed[i].identifier];
          }

          for (var identifier in locations0) {
            return void relocate();
          }
        }

        d3.selectAll(targets).on(zoomName, null);
        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
        dragRestore();
        zoomended(dispatch);
      }
    }

    function mousewheeled() {
      var dispatch = event.of(this, arguments);
      if (mousewheelTimer) clearTimeout(mousewheelTimer);else d3_selection_interrupt.call(this), translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
      mousewheelTimer = setTimeout(function () {
        mousewheelTimer = null;
        zoomended(dispatch);
      }, 50);
      d3_eventPreventDefault();
      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
      translateTo(center0, translate0);
      zoomed(dispatch);
    }

    function dblclicked() {
      var p = d3.mouse(this),
          k = Math.log(view.k) / Math.LN2;
      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
    }

    return d3.rebind(zoom, event, "on");
  };

  var d3_behavior_zoomInfinity = [0, Infinity],
      d3_behavior_zoomDelta,
      d3_behavior_zoomWheel;
  d3.color = d3_color;

  function d3_color() {}

  d3_color.prototype.toString = function () {
    return this.rgb() + "";
  };

  d3.hsl = d3_hsl;

  function d3_hsl(h, s, l) {
    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
  }

  var d3_hslPrototype = d3_hsl.prototype = new d3_color();

  d3_hslPrototype.brighter = function (k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, this.l / k);
  };

  d3_hslPrototype.darker = function (k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_hsl(this.h, this.s, k * this.l);
  };

  d3_hslPrototype.rgb = function () {
    return d3_hsl_rgb(this.h, this.s, this.l);
  };

  function d3_hsl_rgb(h, s, l) {
    var m1, m2;
    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
    l = l < 0 ? 0 : l > 1 ? 1 : l;
    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
    m1 = 2 * l - m2;

    function v(h) {
      if (h > 360) h -= 360;else if (h < 0) h += 360;
      if (h < 60) return m1 + (m2 - m1) * h / 60;
      if (h < 180) return m2;
      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
      return m1;
    }

    function vv(h) {
      return Math.round(v(h) * 255);
    }

    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
  }

  d3.hcl = d3_hcl;

  function d3_hcl(h, c, l) {
    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
  }

  var d3_hclPrototype = d3_hcl.prototype = new d3_color();

  d3_hclPrototype.brighter = function (k) {
    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
  };

  d3_hclPrototype.darker = function (k) {
    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
  };

  d3_hclPrototype.rgb = function () {
    return d3_hcl_lab(this.h, this.c, this.l).rgb();
  };

  function d3_hcl_lab(h, c, l) {
    if (isNaN(h)) h = 0;
    if (isNaN(c)) c = 0;
    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
  }

  d3.lab = d3_lab;

  function d3_lab(l, a, b) {
    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
  }

  var d3_lab_K = 18;
  var d3_lab_X = .95047,
      d3_lab_Y = 1,
      d3_lab_Z = 1.08883;
  var d3_labPrototype = d3_lab.prototype = new d3_color();

  d3_labPrototype.brighter = function (k) {
    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };

  d3_labPrototype.darker = function (k) {
    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
  };

  d3_labPrototype.rgb = function () {
    return d3_lab_rgb(this.l, this.a, this.b);
  };

  function d3_lab_rgb(l, a, b) {
    var y = (l + 16) / 116,
        x = y + a / 500,
        z = y - b / 200;
    x = d3_lab_xyz(x) * d3_lab_X;
    y = d3_lab_xyz(y) * d3_lab_Y;
    z = d3_lab_xyz(z) * d3_lab_Z;
    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
  }

  function d3_lab_hcl(l, a, b) {
    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
  }

  function d3_lab_xyz(x) {
    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
  }

  function d3_xyz_lab(x) {
    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
  }

  function d3_xyz_rgb(r) {
    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
  }

  d3.rgb = d3_rgb;

  function d3_rgb(r, g, b) {
    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
  }

  function d3_rgbNumber(value) {
    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
  }

  function d3_rgbString(value) {
    return d3_rgbNumber(value) + "";
  }

  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();

  d3_rgbPrototype.brighter = function (k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    var r = this.r,
        g = this.g,
        b = this.b,
        i = 30;
    if (!r && !g && !b) return new d3_rgb(i, i, i);
    if (r && r < i) r = i;
    if (g && g < i) g = i;
    if (b && b < i) b = i;
    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
  };

  d3_rgbPrototype.darker = function (k) {
    k = Math.pow(.7, arguments.length ? k : 1);
    return new d3_rgb(k * this.r, k * this.g, k * this.b);
  };

  d3_rgbPrototype.hsl = function () {
    return d3_rgb_hsl(this.r, this.g, this.b);
  };

  d3_rgbPrototype.toString = function () {
    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
  };

  function d3_rgb_hex(v) {
    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
  }

  function d3_rgb_parse(format, rgb, hsl) {
    var r = 0,
        g = 0,
        b = 0,
        m1,
        m2,
        color;
    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());

    if (m1) {
      m2 = m1[2].split(",");

      switch (m1[1]) {
        case "hsl":
          {
            return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
          }

        case "rgb":
          {
            return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
          }
      }
    }

    if (color = d3_rgb_names.get(format)) {
      return rgb(color.r, color.g, color.b);
    }

    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
      if (format.length === 4) {
        r = (color & 3840) >> 4;
        r = r >> 4 | r;
        g = color & 240;
        g = g >> 4 | g;
        b = color & 15;
        b = b << 4 | b;
      } else if (format.length === 7) {
        r = (color & 16711680) >> 16;
        g = (color & 65280) >> 8;
        b = color & 255;
      }
    }

    return rgb(r, g, b);
  }

  function d3_rgb_hsl(r, g, b) {
    var min = Math.min(r /= 255, g /= 255, b /= 255),
        max = Math.max(r, g, b),
        d = max - min,
        h,
        s,
        l = (max + min) / 2;

    if (d) {
      s = l < .5 ? d / (max + min) : d / (2 - max - min);
      if (r == max) h = (g - b) / d + (g < b ? 6 : 0);else if (g == max) h = (b - r) / d + 2;else h = (r - g) / d + 4;
      h *= 60;
    } else {
      h = NaN;
      s = l > 0 && l < 1 ? 0 : h;
    }

    return new d3_hsl(h, s, l);
  }

  function d3_rgb_lab(r, g, b) {
    r = d3_rgb_xyz(r);
    g = d3_rgb_xyz(g);
    b = d3_rgb_xyz(b);
    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X),
        y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y),
        z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
  }

  function d3_rgb_xyz(r) {
    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
  }

  function d3_rgb_parseNumber(c) {
    var f = parseFloat(c);
    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
  }

  var d3_rgb_names = d3.map({
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  });
  d3_rgb_names.forEach(function (key, value) {
    d3_rgb_names.set(key, d3_rgbNumber(value));
  });

  function d3_functor(v) {
    return typeof v === "function" ? v : function () {
      return v;
    };
  }

  d3.functor = d3_functor;
  d3.xhr = d3_xhrType(d3_identity);

  function d3_xhrType(response) {
    return function (url, mimeType, callback) {
      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, mimeType = null;
      return d3_xhr(url, mimeType, response, callback);
    };
  }

  function d3_xhr(url, mimeType, response, callback) {
    var xhr = {},
        dispatch = d3.dispatch("beforesend", "progress", "load", "error"),
        headers = {},
        request = new XMLHttpRequest(),
        responseType = null;
    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function () {
      request.readyState > 3 && respond();
    };

    function respond() {
      var status = request.status,
          result;

      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
        try {
          result = response.call(xhr, request);
        } catch (e) {
          dispatch.error.call(xhr, e);
          return;
        }

        dispatch.load.call(xhr, result);
      } else {
        dispatch.error.call(xhr, request);
      }
    }

    request.onprogress = function (event) {
      var o = d3.event;
      d3.event = event;

      try {
        dispatch.progress.call(xhr, request);
      } finally {
        d3.event = o;
      }
    };

    xhr.header = function (name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers[name];
      if (value == null) delete headers[name];else headers[name] = value + "";
      return xhr;
    };

    xhr.mimeType = function (value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return xhr;
    };

    xhr.responseType = function (value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return xhr;
    };

    xhr.response = function (value) {
      response = value;
      return xhr;
    };

    ["get", "post"].forEach(function (method) {
      xhr[method] = function () {
        return xhr.send.apply(xhr, [method].concat(d3_array(arguments)));
      };
    });

    xhr.send = function (method, data, callback) {
      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
      request.open(method, url, true);
      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
      if (request.setRequestHeader) for (var name in headers) {
        request.setRequestHeader(name, headers[name]);
      }
      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
      if (responseType != null) request.responseType = responseType;
      if (callback != null) xhr.on("error", callback).on("load", function (request) {
        callback(null, request);
      });
      dispatch.beforesend.call(xhr, request);
      request.send(data == null ? null : data);
      return xhr;
    };

    xhr.abort = function () {
      request.abort();
      return xhr;
    };

    d3.rebind(xhr, dispatch, "on");
    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
  }

  function d3_xhr_fixCallback(callback) {
    return callback.length === 1 ? function (error, request) {
      callback(error == null ? request : null);
    } : callback;
  }

  function d3_xhrHasResponse(request) {
    var type = request.responseType;
    return type && type !== "text" ? request.response : request.responseText;
  }

  d3.dsv = function (delimiter, mimeType) {
    var reFormat = new RegExp('["' + delimiter + "\n]"),
        delimiterCode = delimiter.charCodeAt(0);

    function dsv(url, row, callback) {
      if (arguments.length < 3) callback = row, row = null;
      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);

      xhr.row = function (_) {
        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
      };

      return xhr;
    }

    function response(request) {
      return dsv.parse(request.responseText);
    }

    function typedResponse(f) {
      return function (request) {
        return dsv.parse(request.responseText, f);
      };
    }

    dsv.parse = function (text, f) {
      var o;
      return dsv.parseRows(text, function (row, i) {
        if (o) return o(row, i - 1);
        var a = new Function("d", "return {" + row.map(function (name, i) {
          return JSON.stringify(name) + ": d[" + i + "]";
        }).join(",") + "}");
        o = f ? function (row, i) {
          return f(a(row), i);
        } : a;
      });
    };

    dsv.parseRows = function (text, f) {
      var EOL = {},
          EOF = {},
          rows = [],
          N = text.length,
          I = 0,
          n = 0,
          t,
          eol;

      function token() {
        if (I >= N) return EOF;
        if (eol) return eol = false, EOL;
        var j = I;

        if (text.charCodeAt(j) === 34) {
          var i = j;

          while (i++ < N) {
            if (text.charCodeAt(i) === 34) {
              if (text.charCodeAt(i + 1) !== 34) break;
              ++i;
            }
          }

          I = i + 2;
          var c = text.charCodeAt(i + 1);

          if (c === 13) {
            eol = true;
            if (text.charCodeAt(i + 2) === 10) ++I;
          } else if (c === 10) {
            eol = true;
          }

          return text.slice(j + 1, i).replace(/""/g, '"');
        }

        while (I < N) {
          var c = text.charCodeAt(I++),
              k = 1;
          if (c === 10) eol = true;else if (c === 13) {
            eol = true;
            if (text.charCodeAt(I) === 10) ++I, ++k;
          } else if (c !== delimiterCode) continue;
          return text.slice(j, I - k);
        }

        return text.slice(j);
      }

      while ((t = token()) !== EOF) {
        var a = [];

        while (t !== EOL && t !== EOF) {
          a.push(t);
          t = token();
        }

        if (f && (a = f(a, n++)) == null) continue;
        rows.push(a);
      }

      return rows;
    };

    dsv.format = function (rows) {
      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
      var fieldSet = new d3_Set(),
          fields = [];
      rows.forEach(function (row) {
        for (var field in row) {
          if (!fieldSet.has(field)) {
            fields.push(fieldSet.add(field));
          }
        }
      });
      return [fields.map(formatValue).join(delimiter)].concat(rows.map(function (row) {
        return fields.map(function (field) {
          return formatValue(row[field]);
        }).join(delimiter);
      })).join("\n");
    };

    dsv.formatRows = function (rows) {
      return rows.map(formatRow).join("\n");
    };

    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }

    function formatValue(text) {
      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
    }

    return dsv;
  };

  d3.csv = d3.dsv(",", "text/csv");
  d3.tsv = d3.dsv("	", "text/tab-separated-values");

  var d3_timer_queueHead,
      d3_timer_queueTail,
      d3_timer_interval,
      d3_timer_timeout,
      d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function (callback) {
    setTimeout(callback, 17);
  };

  d3.timer = function () {
    d3_timer.apply(this, arguments);
  };

  function d3_timer(callback, delay, then) {
    var n = arguments.length;
    if (n < 2) delay = 0;
    if (n < 3) then = Date.now();
    var time = then + delay,
        timer = {
      c: callback,
      t: time,
      n: null
    };
    if (d3_timer_queueTail) d3_timer_queueTail.n = timer;else d3_timer_queueHead = timer;
    d3_timer_queueTail = timer;

    if (!d3_timer_interval) {
      d3_timer_timeout = clearTimeout(d3_timer_timeout);
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }

    return timer;
  }

  function d3_timer_step() {
    var now = d3_timer_mark(),
        delay = d3_timer_sweep() - now;

    if (delay > 24) {
      if (isFinite(delay)) {
        clearTimeout(d3_timer_timeout);
        d3_timer_timeout = setTimeout(d3_timer_step, delay);
      }

      d3_timer_interval = 0;
    } else {
      d3_timer_interval = 1;
      d3_timer_frame(d3_timer_step);
    }
  }

  d3.timer.flush = function () {
    d3_timer_mark();
    d3_timer_sweep();
  };

  function d3_timer_mark() {
    var now = Date.now(),
        timer = d3_timer_queueHead;

    while (timer) {
      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
      timer = timer.n;
    }

    return now;
  }

  function d3_timer_sweep() {
    var t0,
        t1 = d3_timer_queueHead,
        time = Infinity;

    while (t1) {
      if (t1.c) {
        if (t1.t < time) time = t1.t;
        t1 = (t0 = t1).n;
      } else {
        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
      }
    }

    d3_timer_queueTail = t0;
    return time;
  }

  function d3_format_precision(x, p) {
    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
  }

  d3.round = function (x, n) {
    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
  };

  var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);

  d3.formatPrefix = function (value, precision) {
    var i = 0;

    if (value = +value) {
      if (value < 0) value *= -1;
      if (precision) value = d3.round(value, d3_format_precision(value, precision));
      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
    }

    return d3_formatPrefixes[8 + i / 3];
  };

  function d3_formatPrefix(d, i) {
    var k = Math.pow(10, abs(8 - i) * 3);
    return {
      scale: i > 8 ? function (d) {
        return d / k;
      } : function (d) {
        return d * k;
      },
      symbol: d
    };
  }

  function d3_locale_numberFormat(locale) {
    var locale_decimal = locale.decimal,
        locale_thousands = locale.thousands,
        locale_grouping = locale.grouping,
        locale_currency = locale.currency,
        formatGroup = locale_grouping && locale_thousands ? function (value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = locale_grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = locale_grouping[j = (j + 1) % locale_grouping.length];
      }

      return t.reverse().join(locale_thousands);
    } : d3_identity;
    return function (specifier) {
      var match = d3_format_re.exec(specifier),
          fill = match[1] || " ",
          align = match[2] || ">",
          sign = match[3] || "-",
          symbol = match[4] || "",
          zfill = match[5],
          width = +match[6],
          comma = match[7],
          precision = match[8],
          type = match[9],
          scale = 1,
          prefix = "",
          suffix = "",
          integer = false,
          exponent = true;
      if (precision) precision = +precision.substring(1);

      if (zfill || fill === "0" && align === "=") {
        zfill = fill = "0";
        align = "=";
      }

      switch (type) {
        case "n":
          comma = true;
          type = "g";
          break;

        case "%":
          scale = 100;
          suffix = "%";
          type = "f";
          break;

        case "p":
          scale = 100;
          suffix = "%";
          type = "r";
          break;

        case "b":
        case "o":
        case "x":
        case "X":
          if (symbol === "#") prefix = "0" + type.toLowerCase();

        case "c":
          exponent = false;

        case "d":
          integer = true;
          precision = 0;
          break;

        case "s":
          scale = -1;
          type = "r";
          break;
      }

      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
      if (type == "r" && !precision) type = "g";

      if (precision != null) {
        if (type == "g") precision = Math.max(1, Math.min(21, precision));else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
      }

      type = d3_format_types.get(type) || d3_format_typeDefault;
      var zcomma = zfill && comma;
      return function (value) {
        var fullSuffix = suffix;
        if (integer && value % 1) return "";
        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;

        if (scale < 0) {
          var unit = d3.formatPrefix(value, precision);
          value = unit.scale(value);
          fullSuffix = unit.symbol + suffix;
        } else {
          value *= scale;
        }

        value = type(value, precision);
        var i = value.lastIndexOf("."),
            before,
            after;

        if (i < 0) {
          var j = exponent ? value.lastIndexOf("e") : -1;
          if (j < 0) before = value, after = "";else before = value.substring(0, j), after = value.substring(j);
        } else {
          before = value.substring(0, i);
          after = locale_decimal + value.substring(i + 1);
        }

        if (!zfill && comma) before = formatGroup(before, Infinity);
        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length),
            padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
        negative += prefix;
        value = before + after;
        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
      };
    };
  }

  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
  var d3_format_types = d3.map({
    b: function b(x) {
      return x.toString(2);
    },
    c: function c(x) {
      return String.fromCharCode(x);
    },
    o: function o(x) {
      return x.toString(8);
    },
    x: function x(_x) {
      return _x.toString(16);
    },
    X: function X(x) {
      return x.toString(16).toUpperCase();
    },
    g: function g(x, p) {
      return x.toPrecision(p);
    },
    e: function e(x, p) {
      return x.toExponential(p);
    },
    f: function f(x, p) {
      return x.toFixed(p);
    },
    r: function r(x, p) {
      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
    }
  });

  function d3_format_typeDefault(x) {
    return x + "";
  }

  var d3_time = d3.time = {},
      d3_date = Date;

  function d3_date_utc() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }

  d3_date_utc.prototype = {
    getDate: function getDate() {
      return this._.getUTCDate();
    },
    getDay: function getDay() {
      return this._.getUTCDay();
    },
    getFullYear: function getFullYear() {
      return this._.getUTCFullYear();
    },
    getHours: function getHours() {
      return this._.getUTCHours();
    },
    getMilliseconds: function getMilliseconds() {
      return this._.getUTCMilliseconds();
    },
    getMinutes: function getMinutes() {
      return this._.getUTCMinutes();
    },
    getMonth: function getMonth() {
      return this._.getUTCMonth();
    },
    getSeconds: function getSeconds() {
      return this._.getUTCSeconds();
    },
    getTime: function getTime() {
      return this._.getTime();
    },
    getTimezoneOffset: function getTimezoneOffset() {
      return 0;
    },
    valueOf: function valueOf() {
      return this._.valueOf();
    },
    setDate: function setDate() {
      d3_time_prototype.setUTCDate.apply(this._, arguments);
    },
    setDay: function setDay() {
      d3_time_prototype.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function setFullYear() {
      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function setHours() {
      d3_time_prototype.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function setMilliseconds() {
      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function setMinutes() {
      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function setMonth() {
      d3_time_prototype.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function setSeconds() {
      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function setTime() {
      d3_time_prototype.setTime.apply(this._, arguments);
    }
  };
  var d3_time_prototype = Date.prototype;

  function d3_time_interval(local, step, number) {
    function round(date) {
      var d0 = local(date),
          d1 = offset(d0, 1);
      return date - d0 < d1 - date ? d0 : d1;
    }

    function ceil(date) {
      step(date = local(new d3_date(date - 1)), 1);
      return date;
    }

    function offset(date, k) {
      step(date = new d3_date(+date), k);
      return date;
    }

    function range(t0, t1, dt) {
      var time = ceil(t0),
          times = [];

      if (dt > 1) {
        while (time < t1) {
          if (!(number(time) % dt)) times.push(new Date(+time));
          step(time, 1);
        }
      } else {
        while (time < t1) {
          times.push(new Date(+time)), step(time, 1);
        }
      }

      return times;
    }

    function range_utc(t0, t1, dt) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = t0;
        return range(utc, t1, dt);
      } finally {
        d3_date = Date;
      }
    }

    local.floor = local;
    local.round = round;
    local.ceil = ceil;
    local.offset = offset;
    local.range = range;
    var utc = local.utc = d3_time_interval_utc(local);
    utc.floor = utc;
    utc.round = d3_time_interval_utc(round);
    utc.ceil = d3_time_interval_utc(ceil);
    utc.offset = d3_time_interval_utc(offset);
    utc.range = range_utc;
    return local;
  }

  function d3_time_interval_utc(method) {
    return function (date, k) {
      try {
        d3_date = d3_date_utc;
        var utc = new d3_date_utc();
        utc._ = date;
        return method(utc, k)._;
      } finally {
        d3_date = Date;
      }
    };
  }

  d3_time.year = d3_time_interval(function (date) {
    date = d3_time.day(date);
    date.setMonth(0, 1);
    return date;
  }, function (date, offset) {
    date.setFullYear(date.getFullYear() + offset);
  }, function (date) {
    return date.getFullYear();
  });
  d3_time.years = d3_time.year.range;
  d3_time.years.utc = d3_time.year.utc.range;
  d3_time.day = d3_time_interval(function (date) {
    var day = new d3_date(2e3, 0);
    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    return day;
  }, function (date, offset) {
    date.setDate(date.getDate() + offset);
  }, function (date) {
    return date.getDate() - 1;
  });
  d3_time.days = d3_time.day.range;
  d3_time.days.utc = d3_time.day.utc.range;

  d3_time.dayOfYear = function (date) {
    var year = d3_time.year(date);
    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
  };

  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (day, i) {
    i = 7 - i;
    var interval = d3_time[day] = d3_time_interval(function (date) {
      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
      return date;
    }, function (date, offset) {
      date.setDate(date.getDate() + Math.floor(offset) * 7);
    }, function (date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
    });
    d3_time[day + "s"] = interval.range;
    d3_time[day + "s"].utc = interval.utc.range;

    d3_time[day + "OfYear"] = function (date) {
      var day = d3_time.year(date).getDay();
      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
    };
  });
  d3_time.week = d3_time.sunday;
  d3_time.weeks = d3_time.sunday.range;
  d3_time.weeks.utc = d3_time.sunday.utc.range;
  d3_time.weekOfYear = d3_time.sundayOfYear;

  function d3_locale_timeFormat(locale) {
    var locale_dateTime = locale.dateTime,
        locale_date = locale.date,
        locale_time = locale.time,
        locale_periods = locale.periods,
        locale_days = locale.days,
        locale_shortDays = locale.shortDays,
        locale_months = locale.months,
        locale_shortMonths = locale.shortMonths;

    function d3_time_format(template) {
      var n = template.length;

      function format(date) {
        var string = [],
            i = -1,
            j = 0,
            c,
            p,
            f;

        while (++i < n) {
          if (template.charCodeAt(i) === 37) {
            string.push(template.slice(j, i));
            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
            string.push(c);
            j = i + 1;
          }
        }

        string.push(template.slice(j, i));
        return string.join("");
      }

      format.parse = function (string) {
        var d = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        },
            i = d3_time_parse(d, template, string, 0);
        if (i != string.length) return null;
        if ("p" in d) d.H = d.H % 12 + d.p * 12;
        var localZ = d.Z != null && d3_date !== d3_date_utc,
            date = new (localZ ? d3_date_utc : d3_date)();
        if ("j" in d) date.setFullYear(d.y, 0, d.j);else if ("W" in d || "U" in d) {
          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
          date.setFullYear(d.y, 0, 1);
          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
        } else date.setFullYear(d.y, d.m, d.d);
        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
        return localZ ? date._ : date;
      };

      format.toString = function () {
        return template;
      };

      return format;
    }

    function d3_time_parse(date, template, string, j) {
      var c,
          p,
          t,
          i = 0,
          n = template.length,
          m = string.length;

      while (i < n) {
        if (j >= m) return -1;
        c = template.charCodeAt(i++);

        if (c === 37) {
          t = template.charAt(i++);
          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
          if (!p || (j = p(date, string, j)) < 0) return -1;
        } else if (c != string.charCodeAt(j++)) {
          return -1;
        }
      }

      return j;
    }

    d3_time_format.utc = function (template) {
      var local = d3_time_format(template);

      function format(date) {
        try {
          d3_date = d3_date_utc;
          var utc = new d3_date();
          utc._ = date;
          return local(utc);
        } finally {
          d3_date = Date;
        }
      }

      format.parse = function (string) {
        try {
          d3_date = d3_date_utc;
          var date = local.parse(string);
          return date && date._;
        } finally {
          d3_date = Date;
        }
      };

      format.toString = local.toString;
      return format;
    };

    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
    var d3_time_periodLookup = d3.map(),
        d3_time_dayRe = d3_time_formatRe(locale_days),
        d3_time_dayLookup = d3_time_formatLookup(locale_days),
        d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays),
        d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays),
        d3_time_monthRe = d3_time_formatRe(locale_months),
        d3_time_monthLookup = d3_time_formatLookup(locale_months),
        d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths),
        d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
    locale_periods.forEach(function (p, i) {
      d3_time_periodLookup.set(p.toLowerCase(), i);
    });
    var d3_time_formats = {
      a: function a(d) {
        return locale_shortDays[d.getDay()];
      },
      A: function A(d) {
        return locale_days[d.getDay()];
      },
      b: function b(d) {
        return locale_shortMonths[d.getMonth()];
      },
      B: function B(d) {
        return locale_months[d.getMonth()];
      },
      c: d3_time_format(locale_dateTime),
      d: function d(_d, p) {
        return d3_time_formatPad(_d.getDate(), p, 2);
      },
      e: function e(d, p) {
        return d3_time_formatPad(d.getDate(), p, 2);
      },
      H: function H(d, p) {
        return d3_time_formatPad(d.getHours(), p, 2);
      },
      I: function I(d, p) {
        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
      },
      j: function j(d, p) {
        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
      },
      L: function L(d, p) {
        return d3_time_formatPad(d.getMilliseconds(), p, 3);
      },
      m: function m(d, p) {
        return d3_time_formatPad(d.getMonth() + 1, p, 2);
      },
      M: function M(d, p) {
        return d3_time_formatPad(d.getMinutes(), p, 2);
      },
      p: function p(d) {
        return locale_periods[+(d.getHours() >= 12)];
      },
      S: function S(d, p) {
        return d3_time_formatPad(d.getSeconds(), p, 2);
      },
      U: function U(d, p) {
        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
      },
      w: function w(d) {
        return d.getDay();
      },
      W: function W(d, p) {
        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
      },
      x: d3_time_format(locale_date),
      X: d3_time_format(locale_time),
      y: function y(d, p) {
        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
      },
      Y: function Y(d, p) {
        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
      },
      Z: d3_time_zone,
      "%": function _() {
        return "%";
      }
    };
    var d3_time_parsers = {
      a: d3_time_parseWeekdayAbbrev,
      A: d3_time_parseWeekday,
      b: d3_time_parseMonthAbbrev,
      B: d3_time_parseMonth,
      c: d3_time_parseLocaleFull,
      d: d3_time_parseDay,
      e: d3_time_parseDay,
      H: d3_time_parseHour24,
      I: d3_time_parseHour24,
      j: d3_time_parseDayOfYear,
      L: d3_time_parseMilliseconds,
      m: d3_time_parseMonthNumber,
      M: d3_time_parseMinutes,
      p: d3_time_parseAmPm,
      S: d3_time_parseSeconds,
      U: d3_time_parseWeekNumberSunday,
      w: d3_time_parseWeekdayNumber,
      W: d3_time_parseWeekNumberMonday,
      x: d3_time_parseLocaleDate,
      X: d3_time_parseLocaleTime,
      y: d3_time_parseYear,
      Y: d3_time_parseFullYear,
      Z: d3_time_parseZone,
      "%": d3_time_parseLiteralPercent
    };

    function d3_time_parseWeekdayAbbrev(date, string, i) {
      d3_time_dayAbbrevRe.lastIndex = 0;
      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }

    function d3_time_parseWeekday(date, string, i) {
      d3_time_dayRe.lastIndex = 0;
      var n = d3_time_dayRe.exec(string.slice(i));
      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }

    function d3_time_parseMonthAbbrev(date, string, i) {
      d3_time_monthAbbrevRe.lastIndex = 0;
      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }

    function d3_time_parseMonth(date, string, i) {
      d3_time_monthRe.lastIndex = 0;
      var n = d3_time_monthRe.exec(string.slice(i));
      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
    }

    function d3_time_parseLocaleFull(date, string, i) {
      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
    }

    function d3_time_parseLocaleDate(date, string, i) {
      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
    }

    function d3_time_parseLocaleTime(date, string, i) {
      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
    }

    function d3_time_parseAmPm(date, string, i) {
      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
      return n == null ? -1 : (date.p = n, i);
    }

    return d3_time_format;
  }

  var d3_time_formatPads = {
    "-": "",
    _: " ",
    "0": "0"
  },
      d3_time_numberRe = /^\s*\d+/,
      d3_time_percentRe = /^%/;

  function d3_time_formatPad(value, fill, width) {
    var sign = value < 0 ? "-" : "",
        string = (sign ? -value : value) + "",
        length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }

  function d3_time_formatRe(names) {
    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
  }

  function d3_time_formatLookup(names) {
    var map = new d3_Map(),
        i = -1,
        n = names.length;

    while (++i < n) {
      map.set(names[i].toLowerCase(), i);
    }

    return map;
  }

  function d3_time_parseWeekdayNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
    return n ? (date.w = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseWeekNumberSunday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.U = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseWeekNumberMonday(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i));
    return n ? (date.W = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseFullYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
    return n ? (date.y = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
  }

  function d3_time_parseZone(date, string, i) {
    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1;
  }

  function d3_time_expandYear(d) {
    return d + (d > 68 ? 1900 : 2e3);
  }

  function d3_time_parseMonthNumber(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
  }

  function d3_time_parseDay(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.d = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseDayOfYear(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.j = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseHour24(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.H = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseMinutes(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.M = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseSeconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
    return n ? (date.S = +n[0], i + n[0].length) : -1;
  }

  function d3_time_parseMilliseconds(date, string, i) {
    d3_time_numberRe.lastIndex = 0;
    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
    return n ? (date.L = +n[0], i + n[0].length) : -1;
  }

  function d3_time_zone(d) {
    var z = d.getTimezoneOffset(),
        zs = z > 0 ? "-" : "+",
        zh = abs(z) / 60 | 0,
        zm = abs(z) % 60;
    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
  }

  function d3_time_parseLiteralPercent(date, string, i) {
    d3_time_percentRe.lastIndex = 0;
    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }

  function d3_time_formatMulti(formats) {
    var n = formats.length,
        i = -1;

    while (++i < n) {
      formats[i][0] = this(formats[i][0]);
    }

    return function (date) {
      var i = 0,
          f = formats[i];

      while (!f[1](date)) {
        f = formats[++i];
      }

      return f[0](date);
    };
  }

  d3.locale = function (locale) {
    return {
      numberFormat: d3_locale_numberFormat(locale),
      timeFormat: d3_locale_timeFormat(locale)
    };
  };

  var d3_locale_enUS = d3.locale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    dateTime: "%a %b %e %X %Y",
    date: "%m/%d/%Y",
    time: "%H:%M:%S",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  d3.format = d3_locale_enUS.numberFormat;
  d3.geo = {};

  function d3_adder() {}

  d3_adder.prototype = {
    s: 0,
    t: 0,
    add: function add(y) {
      d3_adderSum(y, this.t, d3_adderTemp);
      d3_adderSum(d3_adderTemp.s, this.s, this);
      if (this.s) this.t += d3_adderTemp.t;else this.s = d3_adderTemp.t;
    },
    reset: function reset() {
      this.s = this.t = 0;
    },
    valueOf: function valueOf() {
      return this.s;
    }
  };
  var d3_adderTemp = new d3_adder();

  function d3_adderSum(a, b, o) {
    var x = o.s = a + b,
        bv = x - a,
        av = x - bv;
    o.t = a - av + (b - bv);
  }

  d3.geo.stream = function (object, listener) {
    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
      d3_geo_streamObjectType[object.type](object, listener);
    } else {
      d3_geo_streamGeometry(object, listener);
    }
  };

  function d3_geo_streamGeometry(geometry, listener) {
    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
      d3_geo_streamGeometryType[geometry.type](geometry, listener);
    }
  }

  var d3_geo_streamObjectType = {
    Feature: function Feature(feature, listener) {
      d3_geo_streamGeometry(feature.geometry, listener);
    },
    FeatureCollection: function FeatureCollection(object, listener) {
      var features = object.features,
          i = -1,
          n = features.length;

      while (++i < n) {
        d3_geo_streamGeometry(features[i].geometry, listener);
      }
    }
  };
  var d3_geo_streamGeometryType = {
    Sphere: function Sphere(object, listener) {
      listener.sphere();
    },
    Point: function Point(object, listener) {
      object = object.coordinates;
      listener.point(object[0], object[1], object[2]);
    },
    MultiPoint: function MultiPoint(object, listener) {
      var coordinates = object.coordinates,
          i = -1,
          n = coordinates.length;

      while (++i < n) {
        object = coordinates[i], listener.point(object[0], object[1], object[2]);
      }
    },
    LineString: function LineString(object, listener) {
      d3_geo_streamLine(object.coordinates, listener, 0);
    },
    MultiLineString: function MultiLineString(object, listener) {
      var coordinates = object.coordinates,
          i = -1,
          n = coordinates.length;

      while (++i < n) {
        d3_geo_streamLine(coordinates[i], listener, 0);
      }
    },
    Polygon: function Polygon(object, listener) {
      d3_geo_streamPolygon(object.coordinates, listener);
    },
    MultiPolygon: function MultiPolygon(object, listener) {
      var coordinates = object.coordinates,
          i = -1,
          n = coordinates.length;

      while (++i < n) {
        d3_geo_streamPolygon(coordinates[i], listener);
      }
    },
    GeometryCollection: function GeometryCollection(object, listener) {
      var geometries = object.geometries,
          i = -1,
          n = geometries.length;

      while (++i < n) {
        d3_geo_streamGeometry(geometries[i], listener);
      }
    }
  };

  function d3_geo_streamLine(coordinates, listener, closed) {
    var i = -1,
        n = coordinates.length - closed,
        coordinate;
    listener.lineStart();

    while (++i < n) {
      coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
    }

    listener.lineEnd();
  }

  function d3_geo_streamPolygon(coordinates, listener) {
    var i = -1,
        n = coordinates.length;
    listener.polygonStart();

    while (++i < n) {
      d3_geo_streamLine(coordinates[i], listener, 1);
    }

    listener.polygonEnd();
  }

  d3.geo.area = function (object) {
    d3_geo_areaSum = 0;
    d3.geo.stream(object, d3_geo_area);
    return d3_geo_areaSum;
  };

  var d3_geo_areaSum,
      d3_geo_areaRingSum = new d3_adder();
  var d3_geo_area = {
    sphere: function sphere() {
      d3_geo_areaSum += 4 * π;
    },
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function polygonStart() {
      d3_geo_areaRingSum.reset();
      d3_geo_area.lineStart = d3_geo_areaRingStart;
    },
    polygonEnd: function polygonEnd() {
      var area = 2 * d3_geo_areaRingSum;
      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
    }
  };

  function d3_geo_areaRingStart() {
    var λ00, φ00, λ0, cosφ0, sinφ0;

    d3_geo_area.point = function (λ, φ) {
      d3_geo_area.point = nextPoint;
      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), sinφ0 = Math.sin(φ);
    };

    function nextPoint(λ, φ) {
      λ *= d3_radians;
      φ = φ * d3_radians / 2 + π / 4;
      var dλ = λ - λ0,
          sdλ = dλ >= 0 ? 1 : -1,
          adλ = sdλ * dλ,
          cosφ = Math.cos(φ),
          sinφ = Math.sin(φ),
          k = sinφ0 * sinφ,
          u = cosφ0 * cosφ + k * Math.cos(adλ),
          v = k * sdλ * Math.sin(adλ);
      d3_geo_areaRingSum.add(Math.atan2(v, u));
      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
    }

    d3_geo_area.lineEnd = function () {
      nextPoint(λ00, φ00);
    };
  }

  function d3_geo_cartesian(spherical) {
    var λ = spherical[0],
        φ = spherical[1],
        cosφ = Math.cos(φ);
    return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)];
  }

  function d3_geo_cartesianDot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }

  function d3_geo_cartesianCross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  function d3_geo_cartesianAdd(a, b) {
    a[0] += b[0];
    a[1] += b[1];
    a[2] += b[2];
  }

  function d3_geo_cartesianScale(vector, k) {
    return [vector[0] * k, vector[1] * k, vector[2] * k];
  }

  function d3_geo_cartesianNormalize(d) {
    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l;
    d[1] /= l;
    d[2] /= l;
  }

  function d3_geo_spherical(cartesian) {
    return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])];
  }

  function d3_geo_sphericalEqual(a, b) {
    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
  }

  d3.geo.bounds = function () {
    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
    var bound = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function polygonStart() {
        bound.point = ringPoint;
        bound.lineStart = ringStart;
        bound.lineEnd = ringEnd;
        dλSum = 0;
        d3_geo_area.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        d3_geo_area.polygonEnd();
        bound.point = point;
        bound.lineStart = lineStart;
        bound.lineEnd = lineEnd;
        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90);else if (dλSum > ε) φ1 = 90;else if (dλSum < -ε) φ0 = -90;
        range[0] = λ0, range[1] = λ1;
      }
    };

    function point(λ, φ) {
      ranges.push(range = [λ0 = λ, λ1 = λ]);
      if (φ < φ0) φ0 = φ;
      if (φ > φ1) φ1 = φ;
    }

    function linePoint(λ, φ) {
      var p = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);

      if (p0) {
        var normal = d3_geo_cartesianCross(p0, p),
            equatorial = [normal[1], -normal[0], 0],
            inflection = d3_geo_cartesianCross(equatorial, normal);
        d3_geo_cartesianNormalize(inflection);
        inflection = d3_geo_spherical(inflection);
        var dλ = λ - λ_,
            s = dλ > 0 ? 1 : -1,
            λi = inflection[0] * d3_degrees * s,
            antimeridian = abs(dλ) > 180;

        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = inflection[1] * d3_degrees;
          if (φi > φ1) φ1 = φi;
        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
          var φi = -inflection[1] * d3_degrees;
          if (φi < φ0) φ0 = φi;
        } else {
          if (φ < φ0) φ0 = φ;
          if (φ > φ1) φ1 = φ;
        }

        if (antimeridian) {
          if (λ < λ_) {
            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
          } else {
            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
          }
        } else {
          if (λ1 >= λ0) {
            if (λ < λ0) λ0 = λ;
            if (λ > λ1) λ1 = λ;
          } else {
            if (λ > λ_) {
              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
            } else {
              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
            }
          }
        }
      } else {
        point(λ, φ);
      }

      p0 = p, λ_ = λ;
    }

    function lineStart() {
      bound.point = linePoint;
    }

    function lineEnd() {
      range[0] = λ0, range[1] = λ1;
      bound.point = point;
      p0 = null;
    }

    function ringPoint(λ, φ) {
      if (p0) {
        var dλ = λ - λ_;
        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
      } else λ__ = λ, φ__ = φ;

      d3_geo_area.point(λ, φ);
      linePoint(λ, φ);
    }

    function ringStart() {
      d3_geo_area.lineStart();
    }

    function ringEnd() {
      ringPoint(λ__, φ__);
      d3_geo_area.lineEnd();
      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
      range[0] = λ0, range[1] = λ1;
      p0 = null;
    }

    function angle(λ0, λ1) {
      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
    }

    function compareRanges(a, b) {
      return a[0] - b[0];
    }

    function withinRange(x, range) {
      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
    }

    return function (feature) {
      φ1 = λ1 = -(λ0 = φ0 = Infinity);
      ranges = [];
      d3.geo.stream(feature, bound);
      var n = ranges.length;

      if (n) {
        ranges.sort(compareRanges);

        for (var i = 1, a = ranges[0], b, merged = [a]; i < n; ++i) {
          b = ranges[i];

          if (withinRange(b[0], a) || withinRange(b[1], a)) {
            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
          } else {
            merged.push(a = b);
          }
        }

        var best = -Infinity,
            dλ;

        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
          b = merged[i];
          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
        }
      }

      ranges = range = null;
      return λ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]];
    };
  }();

  d3.geo.centroid = function (object) {
    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
    d3.geo.stream(object, d3_geo_centroid);
    var x = d3_geo_centroidX2,
        y = d3_geo_centroidY2,
        z = d3_geo_centroidZ2,
        m = x * x + y * y + z * z;

    if (m < ε2) {
      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
      m = x * x + y * y + z * z;
      if (m < ε2) return [NaN, NaN];
    }

    return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees];
  };

  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
  var d3_geo_centroid = {
    sphere: d3_noop,
    point: d3_geo_centroidPoint,
    lineStart: d3_geo_centroidLineStart,
    lineEnd: d3_geo_centroidLineEnd,
    polygonStart: function polygonStart() {
      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
    },
    polygonEnd: function polygonEnd() {
      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
    }
  };

  function d3_geo_centroidPoint(λ, φ) {
    λ *= d3_radians;
    var cosφ = Math.cos(φ *= d3_radians);
    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
  }

  function d3_geo_centroidPointXYZ(x, y, z) {
    ++d3_geo_centroidW0;
    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
  }

  function d3_geo_centroidLineStart() {
    var x0, y0, z0;

    d3_geo_centroid.point = function (λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroid.point = nextPoint;
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };

    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians),
          x = cosφ * Math.cos(λ),
          y = cosφ * Math.sin(λ),
          z = Math.sin(φ),
          w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }

  function d3_geo_centroidLineEnd() {
    d3_geo_centroid.point = d3_geo_centroidPoint;
  }

  function d3_geo_centroidRingStart() {
    var λ00, φ00, x0, y0, z0;

    d3_geo_centroid.point = function (λ, φ) {
      λ00 = λ, φ00 = φ;
      d3_geo_centroid.point = nextPoint;
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians);
      x0 = cosφ * Math.cos(λ);
      y0 = cosφ * Math.sin(λ);
      z0 = Math.sin(φ);
      d3_geo_centroidPointXYZ(x0, y0, z0);
    };

    d3_geo_centroid.lineEnd = function () {
      nextPoint(λ00, φ00);
      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
      d3_geo_centroid.point = d3_geo_centroidPoint;
    };

    function nextPoint(λ, φ) {
      λ *= d3_radians;
      var cosφ = Math.cos(φ *= d3_radians),
          x = cosφ * Math.cos(λ),
          y = cosφ * Math.sin(λ),
          z = Math.sin(φ),
          cx = y0 * z - z0 * y,
          cy = z0 * x - x0 * z,
          cz = x0 * y - y0 * x,
          m = Math.sqrt(cx * cx + cy * cy + cz * cz),
          u = x0 * x + y0 * y + z0 * z,
          v = m && -d3_acos(u) / m,
          w = Math.atan2(m, u);
      d3_geo_centroidX2 += v * cx;
      d3_geo_centroidY2 += v * cy;
      d3_geo_centroidZ2 += v * cz;
      d3_geo_centroidW1 += w;
      d3_geo_centroidX1 += w * (x0 + (x0 = x));
      d3_geo_centroidY1 += w * (y0 + (y0 = y));
      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
      d3_geo_centroidPointXYZ(x0, y0, z0);
    }
  }

  function d3_geo_compose(a, b) {
    function compose(x, y) {
      return x = a(x, y), b(x[0], x[1]);
    }

    if (a.invert && b.invert) compose.invert = function (x, y) {
      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
  }

  function d3_true() {
    return true;
  }

  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
    var subject = [],
        clip = [];
    segments.forEach(function (segment) {
      if ((n = segment.length - 1) <= 0) return;
      var n,
          p0 = segment[0],
          p1 = segment[n];

      if (d3_geo_sphericalEqual(p0, p1)) {
        listener.lineStart();

        for (var i = 0; i < n; ++i) {
          listener.point((p0 = segment[i])[0], p0[1]);
        }

        listener.lineEnd();
        return;
      }

      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true),
          b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
      a.o = b;
      subject.push(a);
      clip.push(b);
      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
      a.o = b;
      subject.push(a);
      clip.push(b);
    });
    clip.sort(compare);
    d3_geo_clipPolygonLinkCircular(subject);
    d3_geo_clipPolygonLinkCircular(clip);
    if (!subject.length) return;

    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
      clip[i].e = entry = !entry;
    }

    var start = subject[0],
        points,
        point;

    while (1) {
      var current = start,
          isSubject = true;

      while (current.v) {
        if ((current = current.n) === start) return;
      }

      points = current.z;
      listener.lineStart();

      do {
        current.v = current.o.v = true;

        if (current.e) {
          if (isSubject) {
            for (var i = 0, n = points.length; i < n; ++i) {
              listener.point((point = points[i])[0], point[1]);
            }
          } else {
            interpolate(current.x, current.n.x, 1, listener);
          }

          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;

            for (var i = points.length - 1; i >= 0; --i) {
              listener.point((point = points[i])[0], point[1]);
            }
          } else {
            interpolate(current.x, current.p.x, -1, listener);
          }

          current = current.p;
        }

        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);

      listener.lineEnd();
    }
  }

  function d3_geo_clipPolygonLinkCircular(array) {
    if (!(n = array.length)) return;
    var n,
        i = 0,
        a = array[0],
        b;

    while (++i < n) {
      a.n = b = array[i];
      b.p = a;
      a = b;
    }

    a.n = b = array[0];
    b.p = a;
  }

  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }

  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
    return function (rotate, listener) {
      var line = clipLine(listener),
          rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function polygonStart() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function polygonEnd() {
          clip.point = point;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = d3.merge(segments);
          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);

          if (segments.length) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
          } else if (clipStartInside) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();
            interpolate(null, null, 1, listener);
            listener.lineEnd();
          }

          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function sphere() {
          listener.polygonStart();
          listener.lineStart();
          interpolate(null, null, 1, listener);
          listener.lineEnd();
          listener.polygonEnd();
        }
      };

      function point(λ, φ) {
        var point = rotate(λ, φ);
        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
      }

      function pointLine(λ, φ) {
        var point = rotate(λ, φ);
        line.point(point[0], point[1]);
      }

      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }

      function lineEnd() {
        clip.point = point;
        line.lineEnd();
      }

      var segments;
      var buffer = d3_geo_clipBufferListener(),
          ringListener = clipLine(buffer),
          polygonStarted = false,
          polygon,
          ring;

      function pointRing(λ, φ) {
        ring.push([λ, φ]);
        var point = rotate(λ, φ);
        ringListener.point(point[0], point[1]);
      }

      function ringStart() {
        ringListener.lineStart();
        ring = [];
      }

      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringListener.lineEnd();
        var clean = ringListener.clean(),
            ringSegments = buffer.buffer(),
            segment,
            n = ringSegments.length;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n) return;

        if (clean & 1) {
          segment = ringSegments[0];
          var n = segment.length - 1,
              i = -1,
              point;

          if (n > 0) {
            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
            listener.lineStart();

            while (++i < n) {
              listener.point((point = segment[i])[0], point[1]);
            }

            listener.lineEnd();
          }

          return;
        }

        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
      }

      return clip;
    };
  }

  function d3_geo_clipSegmentLength1(segment) {
    return segment.length > 1;
  }

  function d3_geo_clipBufferListener() {
    var lines = [],
        line;
    return {
      lineStart: function lineStart() {
        lines.push(line = []);
      },
      point: function point(λ, φ) {
        line.push([λ, φ]);
      },
      lineEnd: d3_noop,
      buffer: function buffer() {
        var buffer = lines;
        lines = [];
        line = null;
        return buffer;
      },
      rejoin: function rejoin() {
        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
      }
    };
  }

  function d3_geo_clipSort(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
  }

  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [-π, -π / 2]);

  function d3_geo_clipAntimeridianLine(listener) {
    var λ0 = NaN,
        φ0 = NaN,
        sλ0 = NaN,
        _clean;

    return {
      lineStart: function lineStart() {
        listener.lineStart();
        _clean = 1;
      },
      point: function point(λ1, φ1) {
        var sλ1 = λ1 > 0 ? π : -π,
            dλ = abs(λ1 - λ0);

        if (abs(dλ - π) < ε) {
          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          listener.point(λ1, φ0);
          _clean = 0;
        } else if (sλ0 !== sλ1 && dλ >= π) {
          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
          listener.point(sλ0, φ0);
          listener.lineEnd();
          listener.lineStart();
          listener.point(sλ1, φ0);
          _clean = 0;
        }

        listener.point(λ0 = λ1, φ0 = φ1);
        sλ0 = sλ1;
      },
      lineEnd: function lineEnd() {
        listener.lineEnd();
        λ0 = φ0 = NaN;
      },
      clean: function clean() {
        return 2 - _clean;
      }
    };
  }

  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
    var cosφ0,
        cosφ1,
        sinλ0_λ1 = Math.sin(λ0 - λ1);
    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
  }

  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
    var φ;

    if (from == null) {
      φ = direction * halfπ;
      listener.point(-π, φ);
      listener.point(0, φ);
      listener.point(π, φ);
      listener.point(π, 0);
      listener.point(π, -φ);
      listener.point(0, -φ);
      listener.point(-π, -φ);
      listener.point(-π, 0);
      listener.point(-π, φ);
    } else if (abs(from[0] - to[0]) > ε) {
      var s = from[0] < to[0] ? π : -π;
      φ = direction * s / 2;
      listener.point(-s, φ);
      listener.point(0, φ);
      listener.point(s, φ);
    } else {
      listener.point(to[0], to[1]);
    }
  }

  function d3_geo_pointInPolygon(point, polygon) {
    var meridian = point[0],
        parallel = point[1],
        meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0],
        polarAngle = 0,
        winding = 0;
    d3_geo_areaRingSum.reset();

    for (var i = 0, n = polygon.length; i < n; ++i) {
      var ring = polygon[i],
          m = ring.length;
      if (!m) continue;
      var point0 = ring[0],
          λ0 = point0[0],
          φ0 = point0[1] / 2 + π / 4,
          sinφ0 = Math.sin(φ0),
          cosφ0 = Math.cos(φ0),
          j = 1;

      while (true) {
        if (j === m) j = 0;
        point = ring[j];
        var λ = point[0],
            φ = point[1] / 2 + π / 4,
            sinφ = Math.sin(φ),
            cosφ = Math.cos(φ),
            dλ = λ - λ0,
            sdλ = dλ >= 0 ? 1 : -1,
            adλ = sdλ * dλ,
            antimeridian = adλ > π,
            k = sinφ0 * sinφ;
        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;

        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
          d3_geo_cartesianNormalize(arc);
          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
          d3_geo_cartesianNormalize(intersection);
          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);

          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
          }
        }

        if (!j++) break;
        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
      }
    }

    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
  }

  function d3_geo_clipCircle(radius) {
    var cr = Math.cos(radius),
        smallRadius = cr > 0,
        notHemisphere = abs(cr) > ε,
        interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-π, radius - π]);

    function visible(λ, φ) {
      return Math.cos(λ) * Math.cos(φ) > cr;
    }

    function clipLine(listener) {
      var point0, c0, v0, v00, _clean2;

      return {
        lineStart: function lineStart() {
          v00 = v0 = false;
          _clean2 = 1;
        },
        point: function point(λ, φ) {
          var point1 = [λ, φ],
              point2,
              v = visible(λ, φ),
              c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
          if (!point0 && (v00 = v0 = v)) listener.lineStart();

          if (v !== v0) {
            point2 = intersect(point0, point1);

            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
              point1[0] += ε;
              point1[1] += ε;
              v = visible(point1[0], point1[1]);
            }
          }

          if (v !== v0) {
            _clean2 = 0;

            if (v) {
              listener.lineStart();
              point2 = intersect(point1, point0);
              listener.point(point2[0], point2[1]);
            } else {
              point2 = intersect(point0, point1);
              listener.point(point2[0], point2[1]);
              listener.lineEnd();
            }

            point0 = point2;
          } else if (notHemisphere && point0 && smallRadius ^ v) {
            var t;

            if (!(c & c0) && (t = intersect(point1, point0, true))) {
              _clean2 = 0;

              if (smallRadius) {
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
              } else {
                listener.point(t[1][0], t[1][1]);
                listener.lineEnd();
                listener.lineStart();
                listener.point(t[0][0], t[0][1]);
              }
            }
          }

          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
            listener.point(point1[0], point1[1]);
          }

          point0 = point1, v0 = v, c0 = c;
        },
        lineEnd: function lineEnd() {
          if (v0) listener.lineEnd();
          point0 = null;
        },
        clean: function clean() {
          return _clean2 | (v00 && v0) << 1;
        }
      };
    }

    function intersect(a, b, two) {
      var pa = d3_geo_cartesian(a),
          pb = d3_geo_cartesian(b);
      var n1 = [1, 0, 0],
          n2 = d3_geo_cartesianCross(pa, pb),
          n2n2 = d3_geo_cartesianDot(n2, n2),
          n1n2 = n2[0],
          determinant = n2n2 - n1n2 * n1n2;
      if (!determinant) return !two && a;
      var c1 = cr * n2n2 / determinant,
          c2 = -cr * n1n2 / determinant,
          n1xn2 = d3_geo_cartesianCross(n1, n2),
          A = d3_geo_cartesianScale(n1, c1),
          B = d3_geo_cartesianScale(n2, c2);
      d3_geo_cartesianAdd(A, B);
      var u = n1xn2,
          w = d3_geo_cartesianDot(A, u),
          uu = d3_geo_cartesianDot(u, u),
          t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
      if (t2 < 0) return;
      var t = Math.sqrt(t2),
          q = d3_geo_cartesianScale(u, (-w - t) / uu);
      d3_geo_cartesianAdd(q, A);
      q = d3_geo_spherical(q);
      if (!two) return q;
      var λ0 = a[0],
          λ1 = b[0],
          φ0 = a[1],
          φ1 = b[1],
          z;
      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
      var δλ = λ1 - λ0,
          polar = abs(δλ - π) < ε,
          meridian = polar || δλ < ε;
      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;

      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
        d3_geo_cartesianAdd(q1, A);
        return [q, d3_geo_spherical(q1)];
      }
    }

    function code(λ, φ) {
      var r = smallRadius ? radius : π - radius,
          code = 0;
      if (λ < -r) code |= 1;else if (λ > r) code |= 2;
      if (φ < -r) code |= 4;else if (φ > r) code |= 8;
      return code;
    }
  }

  function d3_geom_clipLine(x0, y0, x1, y1) {
    return function (line) {
      var a = line.a,
          b = line.b,
          ax = a.x,
          ay = a.y,
          bx = b.x,
          by = b.y,
          t0 = 0,
          t1 = 1,
          dx = bx - ax,
          dy = by - ay,
          r;
      r = x0 - ax;
      if (!dx && r > 0) return;
      r /= dx;

      if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }

      r = x1 - ax;
      if (!dx && r < 0) return;
      r /= dx;

      if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }

      r = y0 - ay;
      if (!dy && r > 0) return;
      r /= dy;

      if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      }

      r = y1 - ay;
      if (!dy && r < 0) return;
      r /= dy;

      if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
      } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
      }

      if (t0 > 0) line.a = {
        x: ax + t0 * dx,
        y: ay + t0 * dy
      };
      if (t1 < 1) line.b = {
        x: ax + t1 * dx,
        y: ay + t1 * dy
      };
      return line;
    };
  }

  var d3_geo_clipExtentMAX = 1e9;

  d3.geo.clipExtent = function () {
    var x0,
        y0,
        x1,
        y1,
        _stream,
        clip,
        clipExtent = {
      stream: function stream(output) {
        if (_stream) _stream.valid = false;
        _stream = clip(output);
        _stream.valid = true;
        return _stream;
      },
      extent: function extent(_) {
        if (!arguments.length) return [[x0, y0], [x1, y1]];
        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
        if (_stream) _stream.valid = false, _stream = null;
        return clipExtent;
      }
    };

    return clipExtent.extent([[0, 0], [960, 500]]);
  };

  function d3_geo_clipExtent(x0, y0, x1, y1) {
    return function (listener) {
      var listener_ = listener,
          bufferListener = d3_geo_clipBufferListener(),
          clipLine = d3_geom_clipLine(x0, y0, x1, y1),
          segments,
          polygon,
          ring;
      var clip = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function polygonStart() {
          listener = bufferListener;
          segments = [];
          polygon = [];
          clean = true;
        },
        polygonEnd: function polygonEnd() {
          listener = listener_;
          segments = d3.merge(segments);
          var clipStartInside = insidePolygon([x0, y1]),
              inside = clean && clipStartInside,
              visible = segments.length;

          if (inside || visible) {
            listener.polygonStart();

            if (inside) {
              listener.lineStart();
              interpolate(null, null, 1, listener);
              listener.lineEnd();
            }

            if (visible) {
              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
            }

            listener.polygonEnd();
          }

          segments = polygon = ring = null;
        }
      };

      function insidePolygon(p) {
        var wn = 0,
            n = polygon.length,
            y = p[1];

        for (var i = 0; i < n; ++i) {
          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
            b = v[j];

            if (a[1] <= y) {
              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
            } else {
              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
            }

            a = b;
          }
        }

        return wn !== 0;
      }

      function interpolate(from, to, direction, listener) {
        var a = 0,
            a1 = 0;

        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
          do {
            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
          } while ((a = (a + direction + 4) % 4) !== a1);
        } else {
          listener.point(to[0], to[1]);
        }
      }

      function pointVisible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
      }

      function point(x, y) {
        if (pointVisible(x, y)) listener.point(x, y);
      }

      var x__, y__, v__, x_, y_, v_, first, clean;

      function lineStart() {
        clip.point = linePoint;
        if (polygon) polygon.push(ring = []);
        first = true;
        v_ = false;
        x_ = y_ = NaN;
      }

      function lineEnd() {
        if (segments) {
          linePoint(x__, y__);
          if (v__ && v_) bufferListener.rejoin();
          segments.push(bufferListener.buffer());
        }

        clip.point = point;
        if (v_) listener.lineEnd();
      }

      function linePoint(x, y) {
        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
        var v = pointVisible(x, y);
        if (polygon) ring.push([x, y]);

        if (first) {
          x__ = x, y__ = y, v__ = v;
          first = false;

          if (v) {
            listener.lineStart();
            listener.point(x, y);
          }
        } else {
          if (v && v_) listener.point(x, y);else {
            var l = {
              a: {
                x: x_,
                y: y_
              },
              b: {
                x: x,
                y: y
              }
            };

            if (clipLine(l)) {
              if (!v_) {
                listener.lineStart();
                listener.point(l.a.x, l.a.y);
              }

              listener.point(l.b.x, l.b.y);
              if (!v) listener.lineEnd();
              clean = false;
            } else if (v) {
              listener.lineStart();
              listener.point(x, y);
              clean = false;
            }
          }
        }

        x_ = x, y_ = y, v_ = v;
      }

      return clip;
    };

    function corner(p, direction) {
      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
    }

    function compare(a, b) {
      return comparePoints(a.x, b.x);
    }

    function comparePoints(a, b) {
      var ca = corner(a, 1),
          cb = corner(b, 1);
      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
  }

  function d3_geo_conic(projectAt) {
    var φ0 = 0,
        φ1 = π / 3,
        m = d3_geo_projectionMutator(projectAt),
        p = m(φ0, φ1);

    p.parallels = function (_) {
      if (!arguments.length) return [φ0 / π * 180, φ1 / π * 180];
      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
    };

    return p;
  }

  function d3_geo_conicEqualArea(φ0, φ1) {
    var sinφ0 = Math.sin(φ0),
        n = (sinφ0 + Math.sin(φ1)) / 2,
        C = 1 + sinφ0 * (2 * n - sinφ0),
        ρ0 = Math.sqrt(C) / n;

    function forward(λ, φ) {
      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
      return [ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ)];
    }

    forward.invert = function (x, y) {
      var ρ0_y = ρ0 - y;
      return [Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))];
    };

    return forward;
  }

  (d3.geo.conicEqualArea = function () {
    return d3_geo_conic(d3_geo_conicEqualArea);
  }).raw = d3_geo_conicEqualArea;

  d3.geo.albers = function () {
    return d3.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  };

  d3.geo.albersUsa = function () {
    var lower48 = d3.geo.albers();
    var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]);
    var hawaii = d3.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]);

    var _point,
        pointStream = {
      point: function point(x, y) {
        _point = [x, y];
      }
    },
        lower48Point,
        alaskaPoint,
        hawaiiPoint;

    function albersUsa(coordinates) {
      var x = coordinates[0],
          y = coordinates[1];
      _point = null;
      (lower48Point(x, y), _point) || (alaskaPoint(x, y), _point) || hawaiiPoint(x, y);
      return _point;
    }

    albersUsa.invert = function (coordinates) {
      var k = lower48.scale(),
          t = lower48.translate(),
          x = (coordinates[0] - t[0]) / k,
          y = (coordinates[1] - t[1]) / k;
      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
    };

    albersUsa.stream = function (stream) {
      var lower48Stream = lower48.stream(stream),
          alaskaStream = alaska.stream(stream),
          hawaiiStream = hawaii.stream(stream);
      return {
        point: function point(x, y) {
          lower48Stream.point(x, y);
          alaskaStream.point(x, y);
          hawaiiStream.point(x, y);
        },
        sphere: function sphere() {
          lower48Stream.sphere();
          alaskaStream.sphere();
          hawaiiStream.sphere();
        },
        lineStart: function lineStart() {
          lower48Stream.lineStart();
          alaskaStream.lineStart();
          hawaiiStream.lineStart();
        },
        lineEnd: function lineEnd() {
          lower48Stream.lineEnd();
          alaskaStream.lineEnd();
          hawaiiStream.lineEnd();
        },
        polygonStart: function polygonStart() {
          lower48Stream.polygonStart();
          alaskaStream.polygonStart();
          hawaiiStream.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          lower48Stream.polygonEnd();
          alaskaStream.polygonEnd();
          hawaiiStream.polygonEnd();
        }
      };
    };

    albersUsa.precision = function (_) {
      if (!arguments.length) return lower48.precision();
      lower48.precision(_);
      alaska.precision(_);
      hawaii.precision(_);
      return albersUsa;
    };

    albersUsa.scale = function (_) {
      if (!arguments.length) return lower48.scale();
      lower48.scale(_);
      alaska.scale(_ * .35);
      hawaii.scale(_);
      return albersUsa.translate(lower48.translate());
    };

    albersUsa.translate = function (_) {
      if (!arguments.length) return lower48.translate();
      var k = lower48.scale(),
          x = +_[0],
          y = +_[1];
      lower48Point = lower48.translate(_).clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]]).stream(pointStream).point;
      alaskaPoint = alaska.translate([x - .307 * k, y + .201 * k]).clipExtent([[x - .425 * k + ε, y + .12 * k + ε], [x - .214 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
      hawaiiPoint = hawaii.translate([x - .205 * k, y + .212 * k]).clipExtent([[x - .214 * k + ε, y + .166 * k + ε], [x - .115 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
      return albersUsa;
    };

    return albersUsa.scale(1070);
  };

  var d3_geo_pathAreaSum,
      d3_geo_pathAreaPolygon,
      d3_geo_pathArea = {
    point: d3_noop,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: function polygonStart() {
      d3_geo_pathAreaPolygon = 0;
      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
    },
    polygonEnd: function polygonEnd() {
      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
    }
  };

  function d3_geo_pathAreaRingStart() {
    var x00, y00, x0, y0;

    d3_geo_pathArea.point = function (x, y) {
      d3_geo_pathArea.point = nextPoint;
      x00 = x0 = x, y00 = y0 = y;
    };

    function nextPoint(x, y) {
      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
      x0 = x, y0 = y;
    }

    d3_geo_pathArea.lineEnd = function () {
      nextPoint(x00, y00);
    };
  }

  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
  var d3_geo_pathBounds = {
    point: d3_geo_pathBoundsPoint,
    lineStart: d3_noop,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };

  function d3_geo_pathBoundsPoint(x, y) {
    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
  }

  function d3_geo_pathBuffer() {
    var pointCircle = d3_geo_pathBufferCircle(4.5),
        buffer = [];
    var stream = {
      point: point,
      lineStart: function lineStart() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function polygonStart() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function polygonEnd() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function pointRadius(_) {
        pointCircle = d3_geo_pathBufferCircle(_);
        return stream;
      },
      result: function result() {
        if (buffer.length) {
          var result = buffer.join("");
          buffer = [];
          return result;
        }
      }
    };

    function point(x, y) {
      buffer.push("M", x, ",", y, pointCircle);
    }

    function pointLineStart(x, y) {
      buffer.push("M", x, ",", y);
      stream.point = pointLine;
    }

    function pointLine(x, y) {
      buffer.push("L", x, ",", y);
    }

    function lineEnd() {
      stream.point = point;
    }

    function lineEndPolygon() {
      buffer.push("Z");
    }

    return stream;
  }

  function d3_geo_pathBufferCircle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }

  var d3_geo_pathCentroid = {
    point: d3_geo_pathCentroidPoint,
    lineStart: d3_geo_pathCentroidLineStart,
    lineEnd: d3_geo_pathCentroidLineEnd,
    polygonStart: function polygonStart() {
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
    },
    polygonEnd: function polygonEnd() {
      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
    }
  };

  function d3_geo_pathCentroidPoint(x, y) {
    d3_geo_centroidX0 += x;
    d3_geo_centroidY0 += y;
    ++d3_geo_centroidZ0;
  }

  function d3_geo_pathCentroidLineStart() {
    var x0, y0;

    d3_geo_pathCentroid.point = function (x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    };

    function nextPoint(x, y) {
      var dx = x - x0,
          dy = y - y0,
          z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }
  }

  function d3_geo_pathCentroidLineEnd() {
    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
  }

  function d3_geo_pathCentroidRingStart() {
    var x00, y00, x0, y0;

    d3_geo_pathCentroid.point = function (x, y) {
      d3_geo_pathCentroid.point = nextPoint;
      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
    };

    function nextPoint(x, y) {
      var dx = x - x0,
          dy = y - y0,
          z = Math.sqrt(dx * dx + dy * dy);
      d3_geo_centroidX1 += z * (x0 + x) / 2;
      d3_geo_centroidY1 += z * (y0 + y) / 2;
      d3_geo_centroidZ1 += z;
      z = y0 * x - x0 * y;
      d3_geo_centroidX2 += z * (x0 + x);
      d3_geo_centroidY2 += z * (y0 + y);
      d3_geo_centroidZ2 += z * 3;
      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
    }

    d3_geo_pathCentroid.lineEnd = function () {
      nextPoint(x00, y00);
    };
  }

  function d3_geo_pathContext(context) {
    var _pointRadius = 4.5;
    var stream = {
      point: point,
      lineStart: function lineStart() {
        stream.point = pointLineStart;
      },
      lineEnd: lineEnd,
      polygonStart: function polygonStart() {
        stream.lineEnd = lineEndPolygon;
      },
      polygonEnd: function polygonEnd() {
        stream.lineEnd = lineEnd;
        stream.point = point;
      },
      pointRadius: function pointRadius(_) {
        _pointRadius = _;
        return stream;
      },
      result: d3_noop
    };

    function point(x, y) {
      context.moveTo(x + _pointRadius, y);
      context.arc(x, y, _pointRadius, 0, τ);
    }

    function pointLineStart(x, y) {
      context.moveTo(x, y);
      stream.point = pointLine;
    }

    function pointLine(x, y) {
      context.lineTo(x, y);
    }

    function lineEnd() {
      stream.point = point;
    }

    function lineEndPolygon() {
      context.closePath();
    }

    return stream;
  }

  function d3_geo_resample(project) {
    var δ2 = .5,
        cosMinDistance = Math.cos(30 * d3_radians),
        maxDepth = 16;

    function resample(stream) {
      return (maxDepth ? resampleRecursive : resampleNone)(stream);
    }

    function resampleNone(stream) {
      return d3_geo_transformPoint(stream, function (x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      });
    }

    function resampleRecursive(stream) {
      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
      var resample = {
        point: point,
        lineStart: lineStart,
        lineEnd: lineEnd,
        polygonStart: function polygonStart() {
          stream.polygonStart();
          resample.lineStart = ringStart;
        },
        polygonEnd: function polygonEnd() {
          stream.polygonEnd();
          resample.lineStart = lineStart;
        }
      };

      function point(x, y) {
        x = project(x, y);
        stream.point(x[0], x[1]);
      }

      function lineStart() {
        x0 = NaN;
        resample.point = linePoint;
        stream.lineStart();
      }

      function linePoint(λ, φ) {
        var c = d3_geo_cartesian([λ, φ]),
            p = project(λ, φ);
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
        stream.point(x0, y0);
      }

      function lineEnd() {
        resample.point = point;
        stream.lineEnd();
      }

      function ringStart() {
        lineStart();
        resample.point = ringPoint;
        resample.lineEnd = ringEnd;
      }

      function ringPoint(λ, φ) {
        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
        resample.point = linePoint;
      }

      function ringEnd() {
        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
        resample.lineEnd = lineEnd;
        lineEnd();
      }

      return resample;
    }

    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
      var dx = x1 - x0,
          dy = y1 - y0,
          d2 = dx * dx + dy * dy;

      if (d2 > 4 * δ2 && depth--) {
        var a = a0 + a1,
            b = b0 + b1,
            c = c0 + c1,
            m = Math.sqrt(a * a + b * b + c * c),
            φ2 = Math.asin(c /= m),
            λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a),
            p = project(λ2, φ2),
            x2 = p[0],
            y2 = p[1],
            dx2 = x2 - x0,
            dy2 = y2 - y0,
            dz = dy * dx2 - dx * dy2;

        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
          stream.point(x2, y2);
          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
        }
      }
    }

    resample.precision = function (_) {
      if (!arguments.length) return Math.sqrt(δ2);
      maxDepth = (δ2 = _ * _) > 0 && 16;
      return resample;
    };

    return resample;
  }

  d3.geo.path = function () {
    var pointRadius = 4.5,
        projection,
        context,
        projectStream,
        contextStream,
        cacheStream;

    function path(object) {
      if (object) {
        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
        d3.geo.stream(object, cacheStream);
      }

      return contextStream.result();
    }

    path.area = function (object) {
      d3_geo_pathAreaSum = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathArea));
      return d3_geo_pathAreaSum;
    };

    path.centroid = function (object) {
      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
      return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN];
    };

    path.bounds = function (object) {
      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
      return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]];
    };

    path.projection = function (_) {
      if (!arguments.length) return projection;
      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
      return reset();
    };

    path.context = function (_) {
      if (!arguments.length) return context;
      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
      return reset();
    };

    path.pointRadius = function (_) {
      if (!arguments.length) return pointRadius;
      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
      return path;
    };

    function reset() {
      cacheStream = null;
      return path;
    }

    return path.projection(d3.geo.albersUsa()).context(null);
  };

  function d3_geo_pathProjectStream(project) {
    var resample = d3_geo_resample(function (x, y) {
      return project([x * d3_degrees, y * d3_degrees]);
    });
    return function (stream) {
      return d3_geo_projectionRadians(resample(stream));
    };
  }

  d3.geo.transform = function (methods) {
    return {
      stream: function stream(_stream2) {
        var transform = new d3_geo_transform(_stream2);

        for (var k in methods) {
          transform[k] = methods[k];
        }

        return transform;
      }
    };
  };

  function d3_geo_transform(stream) {
    this.stream = stream;
  }

  d3_geo_transform.prototype = {
    point: function point(x, y) {
      this.stream.point(x, y);
    },
    sphere: function sphere() {
      this.stream.sphere();
    },
    lineStart: function lineStart() {
      this.stream.lineStart();
    },
    lineEnd: function lineEnd() {
      this.stream.lineEnd();
    },
    polygonStart: function polygonStart() {
      this.stream.polygonStart();
    },
    polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    }
  };

  function d3_geo_transformPoint(stream, point) {
    return {
      point: point,
      sphere: function sphere() {
        stream.sphere();
      },
      lineStart: function lineStart() {
        stream.lineStart();
      },
      lineEnd: function lineEnd() {
        stream.lineEnd();
      },
      polygonStart: function polygonStart() {
        stream.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        stream.polygonEnd();
      }
    };
  }

  d3.geo.projection = d3_geo_projection;
  d3.geo.projectionMutator = d3_geo_projectionMutator;

  function d3_geo_projection(project) {
    return d3_geo_projectionMutator(function () {
      return project;
    })();
  }

  function d3_geo_projectionMutator(projectAt) {
    var project,
        rotate,
        projectRotate,
        projectResample = d3_geo_resample(function (x, y) {
      x = project(x, y);
      return [x[0] * k + δx, δy - x[1] * k];
    }),
        k = 150,
        x = 480,
        y = 250,
        λ = 0,
        φ = 0,
        δλ = 0,
        δφ = 0,
        δγ = 0,
        δx,
        δy,
        preclip = d3_geo_clipAntimeridian,
        postclip = d3_identity,
        clipAngle = null,
        clipExtent = null,
        stream;

    function projection(point) {
      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
      return [point[0] * k + δx, δy - point[1] * k];
    }

    function invert(point) {
      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
      return point && [point[0] * d3_degrees, point[1] * d3_degrees];
    }

    projection.stream = function (output) {
      if (stream) stream.valid = false;
      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
      stream.valid = true;
      return stream;
    };

    projection.clipAngle = function (_) {
      if (!arguments.length) return clipAngle;
      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
      return invalidate();
    };

    projection.clipExtent = function (_) {
      if (!arguments.length) return clipExtent;
      clipExtent = _;
      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
      return invalidate();
    };

    projection.scale = function (_) {
      if (!arguments.length) return k;
      k = +_;
      return reset();
    };

    projection.translate = function (_) {
      if (!arguments.length) return [x, y];
      x = +_[0];
      y = +_[1];
      return reset();
    };

    projection.center = function (_) {
      if (!arguments.length) return [λ * d3_degrees, φ * d3_degrees];
      λ = _[0] % 360 * d3_radians;
      φ = _[1] % 360 * d3_radians;
      return reset();
    };

    projection.rotate = function (_) {
      if (!arguments.length) return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];
      δλ = _[0] % 360 * d3_radians;
      δφ = _[1] % 360 * d3_radians;
      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
      return reset();
    };

    d3.rebind(projection, projectResample, "precision");

    function reset() {
      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
      var center = project(λ, φ);
      δx = x - center[0] * k;
      δy = y + center[1] * k;
      return invalidate();
    }

    function invalidate() {
      if (stream) stream.valid = false, stream = null;
      return projection;
    }

    return function () {
      project = projectAt.apply(this, arguments);
      projection.invert = project.invert && invert;
      return reset();
    };
  }

  function d3_geo_projectionRadians(stream) {
    return d3_geo_transformPoint(stream, function (x, y) {
      stream.point(x * d3_radians, y * d3_radians);
    });
  }

  function d3_geo_equirectangular(λ, φ) {
    return [λ, φ];
  }

  (d3.geo.equirectangular = function () {
    return d3_geo_projection(d3_geo_equirectangular);
  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;

  d3.geo.rotation = function (rotate) {
    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);

    function forward(coordinates) {
      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    }

    forward.invert = function (coordinates) {
      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
    };

    return forward;
  };

  function d3_geo_identityRotation(λ, φ) {
    return [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
  }

  d3_geo_identityRotation.invert = d3_geo_equirectangular;

  function d3_geo_rotation(δλ, δφ, δγ) {
    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
  }

  function d3_geo_forwardRotationλ(δλ) {
    return function (λ, φ) {
      return λ += δλ, [λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ];
    };
  }

  function d3_geo_rotationλ(δλ) {
    var rotation = d3_geo_forwardRotationλ(δλ);
    rotation.invert = d3_geo_forwardRotationλ(-δλ);
    return rotation;
  }

  function d3_geo_rotationφγ(δφ, δγ) {
    var cosδφ = Math.cos(δφ),
        sinδφ = Math.sin(δφ),
        cosδγ = Math.cos(δγ),
        sinδγ = Math.sin(δγ);

    function rotation(λ, φ) {
      var cosφ = Math.cos(φ),
          x = Math.cos(λ) * cosφ,
          y = Math.sin(λ) * cosφ,
          z = Math.sin(φ),
          k = z * cosδφ + x * sinδφ;
      return [Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ)];
    }

    rotation.invert = function (λ, φ) {
      var cosφ = Math.cos(φ),
          x = Math.cos(λ) * cosφ,
          y = Math.sin(λ) * cosφ,
          z = Math.sin(φ),
          k = z * cosδγ - y * sinδγ;
      return [Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ)];
    };

    return rotation;
  }

  d3.geo.circle = function () {
    var origin = [0, 0],
        angle,
        precision = 6,
        interpolate;

    function circle() {
      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin,
          rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert,
          ring = [];
      interpolate(null, null, 1, {
        point: function point(x, y) {
          ring.push(x = rotate(x, y));
          x[0] *= d3_degrees, x[1] *= d3_degrees;
        }
      });
      return {
        type: "Polygon",
        coordinates: [ring]
      };
    }

    circle.origin = function (x) {
      if (!arguments.length) return origin;
      origin = x;
      return circle;
    };

    circle.angle = function (x) {
      if (!arguments.length) return angle;
      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
      return circle;
    };

    circle.precision = function (_) {
      if (!arguments.length) return precision;
      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
      return circle;
    };

    return circle.angle(90);
  };

  function d3_geo_circleInterpolate(radius, precision) {
    var cr = Math.cos(radius),
        sr = Math.sin(radius);
    return function (from, to, direction, listener) {
      var step = direction * precision;

      if (from != null) {
        from = d3_geo_circleAngle(cr, from);
        to = d3_geo_circleAngle(cr, to);
        if (direction > 0 ? from < to : from > to) from += direction * τ;
      } else {
        from = radius + direction * τ;
        to = radius - .5 * step;
      }

      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
        listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1]);
      }
    };
  }

  function d3_geo_circleAngle(cr, point) {
    var a = d3_geo_cartesian(point);
    a[0] -= cr;
    d3_geo_cartesianNormalize(a);
    var angle = d3_acos(-a[1]);
    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
  }

  d3.geo.distance = function (a, b) {
    var Δλ = (b[0] - a[0]) * d3_radians,
        φ0 = a[1] * d3_radians,
        φ1 = b[1] * d3_radians,
        sinΔλ = Math.sin(Δλ),
        cosΔλ = Math.cos(Δλ),
        sinφ0 = Math.sin(φ0),
        cosφ0 = Math.cos(φ0),
        sinφ1 = Math.sin(φ1),
        cosφ1 = Math.cos(φ1),
        t;
    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
  };

  d3.geo.graticule = function () {
    var x1,
        x0,
        X1,
        X0,
        y1,
        y0,
        Y1,
        Y0,
        dx = 10,
        dy = dx,
        DX = 90,
        DY = 360,
        x,
        y,
        X,
        Y,
        precision = 2.5;

    function graticule() {
      return {
        type: "MultiLineString",
        coordinates: lines()
      };
    }

    function lines() {
      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function (x) {
        return abs(x % DX) > ε;
      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function (y) {
        return abs(y % DY) > ε;
      }).map(y));
    }

    graticule.lines = function () {
      return lines().map(function (coordinates) {
        return {
          type: "LineString",
          coordinates: coordinates
        };
      });
    };

    graticule.outline = function () {
      return {
        type: "Polygon",
        coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
      };
    };

    graticule.extent = function (_) {
      if (!arguments.length) return graticule.minorExtent();
      return graticule.majorExtent(_).minorExtent(_);
    };

    graticule.majorExtent = function (_) {
      if (!arguments.length) return [[X0, Y0], [X1, Y1]];
      X0 = +_[0][0], X1 = +_[1][0];
      Y0 = +_[0][1], Y1 = +_[1][1];
      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
      return graticule.precision(precision);
    };

    graticule.minorExtent = function (_) {
      if (!arguments.length) return [[x0, y0], [x1, y1]];
      x0 = +_[0][0], x1 = +_[1][0];
      y0 = +_[0][1], y1 = +_[1][1];
      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
      return graticule.precision(precision);
    };

    graticule.step = function (_) {
      if (!arguments.length) return graticule.minorStep();
      return graticule.majorStep(_).minorStep(_);
    };

    graticule.majorStep = function (_) {
      if (!arguments.length) return [DX, DY];
      DX = +_[0], DY = +_[1];
      return graticule;
    };

    graticule.minorStep = function (_) {
      if (!arguments.length) return [dx, dy];
      dx = +_[0], dy = +_[1];
      return graticule;
    };

    graticule.precision = function (_) {
      if (!arguments.length) return precision;
      precision = +_;
      x = d3_geo_graticuleX(y0, y1, 90);
      y = d3_geo_graticuleY(x0, x1, precision);
      X = d3_geo_graticuleX(Y0, Y1, 90);
      Y = d3_geo_graticuleY(X0, X1, precision);
      return graticule;
    };

    return graticule.majorExtent([[-180, -90 + ε], [180, 90 - ε]]).minorExtent([[-180, -80 - ε], [180, 80 + ε]]);
  };

  function d3_geo_graticuleX(y0, y1, dy) {
    var y = d3.range(y0, y1 - ε, dy).concat(y1);
    return function (x) {
      return y.map(function (y) {
        return [x, y];
      });
    };
  }

  function d3_geo_graticuleY(x0, x1, dx) {
    var x = d3.range(x0, x1 - ε, dx).concat(x1);
    return function (y) {
      return x.map(function (x) {
        return [x, y];
      });
    };
  }

  function d3_source(d) {
    return d.source;
  }

  function d3_target(d) {
    return d.target;
  }

  d3.geo.greatArc = function () {
    var source = d3_source,
        source_,
        target = d3_target,
        target_;

    function greatArc() {
      return {
        type: "LineString",
        coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
      };
    }

    greatArc.distance = function () {
      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
    };

    greatArc.source = function (_) {
      if (!arguments.length) return source;
      source = _, source_ = typeof _ === "function" ? null : _;
      return greatArc;
    };

    greatArc.target = function (_) {
      if (!arguments.length) return target;
      target = _, target_ = typeof _ === "function" ? null : _;
      return greatArc;
    };

    greatArc.precision = function () {
      return arguments.length ? greatArc : 0;
    };

    return greatArc;
  };

  d3.geo.interpolate = function (source, target) {
    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
  };

  function d3_geo_interpolate(x0, y0, x1, y1) {
    var cy0 = Math.cos(y0),
        sy0 = Math.sin(y0),
        cy1 = Math.cos(y1),
        sy1 = Math.sin(y1),
        kx0 = cy0 * Math.cos(x0),
        ky0 = cy0 * Math.sin(x0),
        kx1 = cy1 * Math.cos(x1),
        ky1 = cy1 * Math.sin(x1),
        d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))),
        k = 1 / Math.sin(d);
    var interpolate = d ? function (t) {
      var B = Math.sin(t *= d) * k,
          A = Math.sin(d - t) * k,
          x = A * kx0 + B * kx1,
          y = A * ky0 + B * ky1,
          z = A * sy0 + B * sy1;
      return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees];
    } : function () {
      return [x0 * d3_degrees, y0 * d3_degrees];
    };
    interpolate.distance = d;
    return interpolate;
  }

  d3.geo.length = function (object) {
    d3_geo_lengthSum = 0;
    d3.geo.stream(object, d3_geo_length);
    return d3_geo_lengthSum;
  };

  var d3_geo_lengthSum;
  var d3_geo_length = {
    sphere: d3_noop,
    point: d3_noop,
    lineStart: d3_geo_lengthLineStart,
    lineEnd: d3_noop,
    polygonStart: d3_noop,
    polygonEnd: d3_noop
  };

  function d3_geo_lengthLineStart() {
    var λ0, sinφ0, cosφ0;

    d3_geo_length.point = function (λ, φ) {
      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
      d3_geo_length.point = nextPoint;
    };

    d3_geo_length.lineEnd = function () {
      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
    };

    function nextPoint(λ, φ) {
      var sinφ = Math.sin(φ *= d3_radians),
          cosφ = Math.cos(φ),
          t = abs((λ *= d3_radians) - λ0),
          cosΔλ = Math.cos(t);
      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
    }
  }

  function d3_geo_azimuthal(scale, angle) {
    function azimuthal(λ, φ) {
      var cosλ = Math.cos(λ),
          cosφ = Math.cos(φ),
          k = scale(cosλ * cosφ);
      return [k * cosφ * Math.sin(λ), k * Math.sin(φ)];
    }

    azimuthal.invert = function (x, y) {
      var ρ = Math.sqrt(x * x + y * y),
          c = angle(ρ),
          sinc = Math.sin(c),
          cosc = Math.cos(c);
      return [Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ)];
    };

    return azimuthal;
  }

  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function (cosλcosφ) {
    return Math.sqrt(2 / (1 + cosλcosφ));
  }, function (ρ) {
    return 2 * Math.asin(ρ / 2);
  });
  (d3.geo.azimuthalEqualArea = function () {
    return d3_geo_projection(d3_geo_azimuthalEqualArea);
  }).raw = d3_geo_azimuthalEqualArea;
  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function (cosλcosφ) {
    var c = Math.acos(cosλcosφ);
    return c && c / Math.sin(c);
  }, d3_identity);
  (d3.geo.azimuthalEquidistant = function () {
    return d3_geo_projection(d3_geo_azimuthalEquidistant);
  }).raw = d3_geo_azimuthalEquidistant;

  function d3_geo_conicConformal(φ0, φ1) {
    var cosφ0 = Math.cos(φ0),
        t = function t(φ) {
      return Math.tan(π / 4 + φ / 2);
    },
        n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)),
        F = cosφ0 * Math.pow(t(φ0), n) / n;

    if (!n) return d3_geo_mercator;

    function forward(λ, φ) {
      if (F > 0) {
        if (φ < -halfπ + ε) φ = -halfπ + ε;
      } else {
        if (φ > halfπ - ε) φ = halfπ - ε;
      }

      var ρ = F / Math.pow(t(φ), n);
      return [ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ)];
    }

    forward.invert = function (x, y) {
      var ρ0_y = F - y,
          ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
      return [Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ];
    };

    return forward;
  }

  (d3.geo.conicConformal = function () {
    return d3_geo_conic(d3_geo_conicConformal);
  }).raw = d3_geo_conicConformal;

  function d3_geo_conicEquidistant(φ0, φ1) {
    var cosφ0 = Math.cos(φ0),
        n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0),
        G = cosφ0 / n + φ0;
    if (abs(n) < ε) return d3_geo_equirectangular;

    function forward(λ, φ) {
      var ρ = G - φ;
      return [ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ)];
    }

    forward.invert = function (x, y) {
      var ρ0_y = G - y;
      return [Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)];
    };

    return forward;
  }

  (d3.geo.conicEquidistant = function () {
    return d3_geo_conic(d3_geo_conicEquidistant);
  }).raw = d3_geo_conicEquidistant;
  var d3_geo_gnomonic = d3_geo_azimuthal(function (cosλcosφ) {
    return 1 / cosλcosφ;
  }, Math.atan);
  (d3.geo.gnomonic = function () {
    return d3_geo_projection(d3_geo_gnomonic);
  }).raw = d3_geo_gnomonic;

  function d3_geo_mercator(λ, φ) {
    return [λ, Math.log(Math.tan(π / 4 + φ / 2))];
  }

  d3_geo_mercator.invert = function (x, y) {
    return [x, 2 * Math.atan(Math.exp(y)) - halfπ];
  };

  function d3_geo_mercatorProjection(project) {
    var m = d3_geo_projection(project),
        scale = m.scale,
        translate = m.translate,
        clipExtent = m.clipExtent,
        clipAuto;

    m.scale = function () {
      var v = scale.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };

    m.translate = function () {
      var v = translate.apply(m, arguments);
      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
    };

    m.clipExtent = function (_) {
      var v = clipExtent.apply(m, arguments);

      if (v === m) {
        if (clipAuto = _ == null) {
          var k = π * scale(),
              t = translate();
          clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]]);
        }
      } else if (clipAuto) {
        v = null;
      }

      return v;
    };

    return m.clipExtent(null);
  }

  (d3.geo.mercator = function () {
    return d3_geo_mercatorProjection(d3_geo_mercator);
  }).raw = d3_geo_mercator;
  var d3_geo_orthographic = d3_geo_azimuthal(function () {
    return 1;
  }, Math.asin);
  (d3.geo.orthographic = function () {
    return d3_geo_projection(d3_geo_orthographic);
  }).raw = d3_geo_orthographic;
  var d3_geo_stereographic = d3_geo_azimuthal(function (cosλcosφ) {
    return 1 / (1 + cosλcosφ);
  }, function (ρ) {
    return 2 * Math.atan(ρ);
  });
  (d3.geo.stereographic = function () {
    return d3_geo_projection(d3_geo_stereographic);
  }).raw = d3_geo_stereographic;

  function d3_geo_transverseMercator(λ, φ) {
    return [Math.log(Math.tan(π / 4 + φ / 2)), -λ];
  }

  d3_geo_transverseMercator.invert = function (x, y) {
    return [-y, 2 * Math.atan(Math.exp(x)) - halfπ];
  };

  (d3.geo.transverseMercator = function () {
    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator),
        center = projection.center,
        rotate = projection.rotate;

    projection.center = function (_) {
      return _ ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
    };

    projection.rotate = function (_) {
      return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
    };

    return rotate([0, 0, 90]);
  }).raw = d3_geo_transverseMercator;
  d3.geom = {};

  function d3_geom_pointX(d) {
    return d[0];
  }

  function d3_geom_pointY(d) {
    return d[1];
  }

  d3.geom.hull = function (vertices) {
    var x = d3_geom_pointX,
        y = d3_geom_pointY;
    if (arguments.length) return hull(vertices);

    function hull(data) {
      if (data.length < 3) return [];
      var fx = d3_functor(x),
          fy = d3_functor(y),
          i,
          n = data.length,
          points = [],
          flippedPoints = [];

      for (i = 0; i < n; i++) {
        points.push([+fx.call(this, data[i], i), +fy.call(this, data[i], i), i]);
      }

      points.sort(d3_geom_hullOrder);

      for (i = 0; i < n; i++) {
        flippedPoints.push([points[i][0], -points[i][1]]);
      }

      var upper = d3_geom_hullUpper(points),
          lower = d3_geom_hullUpper(flippedPoints);
      var skipLeft = lower[0] === upper[0],
          skipRight = lower[lower.length - 1] === upper[upper.length - 1],
          polygon = [];

      for (i = upper.length - 1; i >= 0; --i) {
        polygon.push(data[points[upper[i]][2]]);
      }

      for (i = +skipLeft; i < lower.length - skipRight; ++i) {
        polygon.push(data[points[lower[i]][2]]);
      }

      return polygon;
    }

    hull.x = function (_) {
      return arguments.length ? (x = _, hull) : x;
    };

    hull.y = function (_) {
      return arguments.length ? (y = _, hull) : y;
    };

    return hull;
  };

  function d3_geom_hullUpper(points) {
    var n = points.length,
        hull = [0, 1],
        hs = 2;

    for (var i = 2; i < n; i++) {
      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) {
        --hs;
      }

      hull[hs++] = i;
    }

    return hull.slice(0, hs);
  }

  function d3_geom_hullOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
  }

  d3.geom.polygon = function (coordinates) {
    d3_subclass(coordinates, d3_geom_polygonPrototype);
    return coordinates;
  };

  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];

  d3_geom_polygonPrototype.area = function () {
    var i = -1,
        n = this.length,
        a,
        b = this[n - 1],
        area = 0;

    while (++i < n) {
      a = b;
      b = this[i];
      area += a[1] * b[0] - a[0] * b[1];
    }

    return area * .5;
  };

  d3_geom_polygonPrototype.centroid = function (k) {
    var i = -1,
        n = this.length,
        x = 0,
        y = 0,
        a,
        b = this[n - 1],
        c;
    if (!arguments.length) k = -1 / (6 * this.area());

    while (++i < n) {
      a = b;
      b = this[i];
      c = a[0] * b[1] - b[0] * a[1];
      x += (a[0] + b[0]) * c;
      y += (a[1] + b[1]) * c;
    }

    return [x * k, y * k];
  };

  d3_geom_polygonPrototype.clip = function (subject) {
    var input,
        closed = d3_geom_polygonClosed(subject),
        i = -1,
        n = this.length - d3_geom_polygonClosed(this),
        j,
        m,
        a = this[n - 1],
        b,
        c,
        d;

    while (++i < n) {
      input = subject.slice();
      subject.length = 0;
      b = this[i];
      c = input[(m = input.length - closed) - 1];
      j = -1;

      while (++j < m) {
        d = input[j];

        if (d3_geom_polygonInside(d, a, b)) {
          if (!d3_geom_polygonInside(c, a, b)) {
            subject.push(d3_geom_polygonIntersect(c, d, a, b));
          }

          subject.push(d);
        } else if (d3_geom_polygonInside(c, a, b)) {
          subject.push(d3_geom_polygonIntersect(c, d, a, b));
        }

        c = d;
      }

      if (closed) subject.push(subject[0]);
      a = b;
    }

    return subject;
  };

  function d3_geom_polygonInside(p, a, b) {
    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
  }

  function d3_geom_polygonIntersect(c, d, a, b) {
    var x1 = c[0],
        x3 = a[0],
        x21 = d[0] - x1,
        x43 = b[0] - x3,
        y1 = c[1],
        y3 = a[1],
        y21 = d[1] - y1,
        y43 = b[1] - y3,
        ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
    return [x1 + ua * x21, y1 + ua * y21];
  }

  function d3_geom_polygonClosed(coordinates) {
    var a = coordinates[0],
        b = coordinates[coordinates.length - 1];
    return !(a[0] - b[0] || a[1] - b[1]);
  }

  var d3_geom_voronoiEdges,
      d3_geom_voronoiCells,
      d3_geom_voronoiBeaches,
      d3_geom_voronoiBeachPool = [],
      d3_geom_voronoiFirstCircle,
      d3_geom_voronoiCircles,
      d3_geom_voronoiCirclePool = [];

  function d3_geom_voronoiBeach() {
    d3_geom_voronoiRedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }

  function d3_geom_voronoiCreateBeach(site) {
    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
    beach.site = site;
    return beach;
  }

  function d3_geom_voronoiDetachBeach(beach) {
    d3_geom_voronoiDetachCircle(beach);
    d3_geom_voronoiBeaches.remove(beach);
    d3_geom_voronoiBeachPool.push(beach);
    d3_geom_voronoiRedBlackNode(beach);
  }

  function d3_geom_voronoiRemoveBeach(beach) {
    var circle = beach.circle,
        x = circle.x,
        y = circle.cy,
        vertex = {
      x: x,
      y: y
    },
        previous = beach.P,
        next = beach.N,
        disappearing = [beach];
    d3_geom_voronoiDetachBeach(beach);
    var lArc = previous;

    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      d3_geom_voronoiDetachBeach(lArc);
      lArc = previous;
    }

    disappearing.unshift(lArc);
    d3_geom_voronoiDetachCircle(lArc);
    var rArc = next;

    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
      next = rArc.N;
      disappearing.push(rArc);
      d3_geom_voronoiDetachBeach(rArc);
      rArc = next;
    }

    disappearing.push(rArc);
    d3_geom_voronoiDetachCircle(rArc);
    var nArcs = disappearing.length,
        iArc;

    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }

    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }

  function d3_geom_voronoiAddBeach(site) {
    var x = site.x,
        directrix = site.y,
        lArc,
        rArc,
        dxl,
        dxr,
        node = d3_geom_voronoiBeaches._;

    while (node) {
      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
      if (dxl > ε) node = node.L;else {
        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);

        if (dxr > ε) {
          if (!node.R) {
            lArc = node;
            break;
          }

          node = node.R;
        } else {
          if (dxl > -ε) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -ε) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }

          break;
        }
      }
    }

    var newArc = d3_geom_voronoiCreateBeach(site);
    d3_geom_voronoiBeaches.insert(lArc, newArc);
    if (!lArc && !rArc) return;

    if (lArc === rArc) {
      d3_geom_voronoiDetachCircle(lArc);
      rArc = d3_geom_voronoiCreateBeach(lArc.site);
      d3_geom_voronoiBeaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      d3_geom_voronoiAttachCircle(lArc);
      d3_geom_voronoiAttachCircle(rArc);
      return;
    }

    if (!rArc) {
      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
      return;
    }

    d3_geom_voronoiDetachCircle(lArc);
    d3_geom_voronoiDetachCircle(rArc);
    var lSite = lArc.site,
        ax = lSite.x,
        ay = lSite.y,
        bx = site.x - ax,
        by = site.y - ay,
        rSite = rArc.site,
        cx = rSite.x - ax,
        cy = rSite.y - ay,
        d = 2 * (bx * cy - by * cx),
        hb = bx * bx + by * by,
        hc = cx * cx + cy * cy,
        vertex = {
      x: (cy * hb - by * hc) / d + ax,
      y: (bx * hc - cx * hb) / d + ay
    };
    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
    d3_geom_voronoiAttachCircle(lArc);
    d3_geom_voronoiAttachCircle(rArc);
  }

  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
    var site = arc.site,
        rfocx = site.x,
        rfocy = site.y,
        pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site.x,
        lfocy = site.y,
        plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx,
        aby2 = 1 / pby2 - 1 / plby2,
        b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }

  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site.y === directrix ? site.x : Infinity;
  }

  function d3_geom_voronoiCell(site) {
    this.site = site;
    this.edges = [];
  }

  d3_geom_voronoiCell.prototype.prepare = function () {
    var halfEdges = this.edges,
        iHalfEdge = halfEdges.length,
        edge;

    while (iHalfEdge--) {
      edge = halfEdges[iHalfEdge].edge;
      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
    }

    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
    return halfEdges.length;
  };

  function d3_geom_voronoiCloseCells(extent) {
    var x0 = extent[0][0],
        x1 = extent[1][0],
        y0 = extent[0][1],
        y1 = extent[1][1],
        x2,
        y2,
        x3,
        y3,
        cells = d3_geom_voronoiCells,
        iCell = cells.length,
        cell,
        iHalfEdge,
        halfEdges,
        nHalfEdges,
        start,
        end;

    while (iCell--) {
      cell = cells[iCell];
      if (!cell || !cell.prepare()) continue;
      halfEdges = cell.edges;
      nHalfEdges = halfEdges.length;
      iHalfEdge = 0;

      while (iHalfEdge < nHalfEdges) {
        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;

        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
            x: x0,
            y: abs(x2 - x0) < ε ? y2 : y1
          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
            x: abs(y2 - y1) < ε ? x2 : x1,
            y: y1
          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
            x: x1,
            y: abs(x2 - x1) < ε ? y2 : y0
          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
            x: abs(y2 - y0) < ε ? x2 : x0,
            y: y0
          } : null), cell.site, null));
          ++nHalfEdges;
        }
      }
    }
  }

  function d3_geom_voronoiHalfEdgeOrder(a, b) {
    return b.angle - a.angle;
  }

  function d3_geom_voronoiCircle() {
    d3_geom_voronoiRedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }

  function d3_geom_voronoiAttachCircle(arc) {
    var lArc = arc.P,
        rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site,
        cSite = arc.site,
        rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite.x,
        by = cSite.y,
        ax = lSite.x - bx,
        ay = lSite.y - by,
        cx = rSite.x - bx,
        cy = rSite.y - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -ε2) return;
    var ha = ax * ax + ay * ay,
        hc = cx * cx + cy * cy,
        x = (cy * ha - ay * hc) / d,
        y = (ax * hc - cx * ha) / d,
        cy = y + by;
    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = cy + Math.sqrt(x * x + y * y);
    circle.cy = cy;
    arc.circle = circle;
    var before = null,
        node = d3_geom_voronoiCircles._;

    while (node) {
      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
        if (node.L) node = node.L;else {
          before = node.P;
          break;
        }
      } else {
        if (node.R) node = node.R;else {
          before = node;
          break;
        }
      }
    }

    d3_geom_voronoiCircles.insert(before, circle);
    if (!before) d3_geom_voronoiFirstCircle = circle;
  }

  function d3_geom_voronoiDetachCircle(arc) {
    var circle = arc.circle;

    if (circle) {
      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
      d3_geom_voronoiCircles.remove(circle);
      d3_geom_voronoiCirclePool.push(circle);
      d3_geom_voronoiRedBlackNode(circle);
      arc.circle = null;
    }
  }

  function d3_geom_voronoiClipEdges(extent) {
    var edges = d3_geom_voronoiEdges,
        clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
        i = edges.length,
        e;

    while (i--) {
      e = edges[i];

      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
        e.a = e.b = null;
        edges.splice(i, 1);
      }
    }
  }

  function d3_geom_voronoiConnectEdge(edge, extent) {
    var vb = edge.b;
    if (vb) return true;
    var va = edge.a,
        x0 = extent[0][0],
        x1 = extent[1][0],
        y0 = extent[0][1],
        y1 = extent[1][1],
        lSite = edge.l,
        rSite = edge.r,
        lx = lSite.x,
        ly = lSite.y,
        rx = rSite.x,
        ry = rSite.y,
        fx = (lx + rx) / 2,
        fy = (ly + ry) / 2,
        fm,
        fb;

    if (ry === ly) {
      if (fx < x0 || fx >= x1) return;

      if (lx > rx) {
        if (!va) va = {
          x: fx,
          y: y0
        };else if (va.y >= y1) return;
        vb = {
          x: fx,
          y: y1
        };
      } else {
        if (!va) va = {
          x: fx,
          y: y1
        };else if (va.y < y0) return;
        vb = {
          x: fx,
          y: y0
        };
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;

      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!va) va = {
            x: (y0 - fb) / fm,
            y: y0
          };else if (va.y >= y1) return;
          vb = {
            x: (y1 - fb) / fm,
            y: y1
          };
        } else {
          if (!va) va = {
            x: (y1 - fb) / fm,
            y: y1
          };else if (va.y < y0) return;
          vb = {
            x: (y0 - fb) / fm,
            y: y0
          };
        }
      } else {
        if (ly < ry) {
          if (!va) va = {
            x: x0,
            y: fm * x0 + fb
          };else if (va.x >= x1) return;
          vb = {
            x: x1,
            y: fm * x1 + fb
          };
        } else {
          if (!va) va = {
            x: x1,
            y: fm * x1 + fb
          };else if (va.x < x0) return;
          vb = {
            x: x0,
            y: fm * x0 + fb
          };
        }
      }
    }

    edge.a = va;
    edge.b = vb;
    return true;
  }

  function d3_geom_voronoiEdge(lSite, rSite) {
    this.l = lSite;
    this.r = rSite;
    this.a = this.b = null;
  }

  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, rSite);
    d3_geom_voronoiEdges.push(edge);
    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
    return edge;
  }

  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
    var edge = new d3_geom_voronoiEdge(lSite, null);
    edge.a = va;
    edge.b = vb;
    d3_geom_voronoiEdges.push(edge);
    return edge;
  }

  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
    if (!edge.a && !edge.b) {
      edge.a = vertex;
      edge.l = lSite;
      edge.r = rSite;
    } else if (edge.l === rSite) {
      edge.b = vertex;
    } else {
      edge.a = vertex;
    }
  }

  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
    var va = edge.a,
        vb = edge.b;
    this.edge = edge;
    this.site = lSite;
    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
  }

  d3_geom_voronoiHalfEdge.prototype = {
    start: function start() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function end() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  };

  function d3_geom_voronoiRedBlackTree() {
    this._ = null;
  }

  function d3_geom_voronoiRedBlackNode(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null;
  }

  d3_geom_voronoiRedBlackTree.prototype = {
    insert: function insert(after, node) {
      var parent, grandpa, uncle;

      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N) after.N.P = node;
        after.N = node;

        if (after.R) {
          after = after.R;

          while (after.L) {
            after = after.L;
          }

          after.L = node;
        } else {
          after.R = node;
        }

        parent = after;
      } else if (this._) {
        after = d3_geom_voronoiRedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }

      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;

      while (parent && parent.C) {
        grandpa = parent.U;

        if (parent === grandpa.L) {
          uncle = grandpa.R;

          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              d3_geom_voronoiRedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }

            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;

          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              d3_geom_voronoiRedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }

            parent.C = false;
            grandpa.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
          }
        }

        parent = after.U;
      }

      this._.C = false;
    },
    remove: function remove(node) {
      if (node.N) node.N.P = node.P;
      if (node.P) node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U,
          sibling,
          left = node.L,
          right = node.R,
          next,
          red;
      if (!left) next = right;else if (!right) next = left;else next = d3_geom_voronoiRedBlackFirst(right);

      if (parent) {
        if (parent.L === node) parent.L = next;else parent.R = next;
      } else {
        this._ = next;
      }

      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;

        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }

      if (node) node.U = parent;
      if (red) return;

      if (node && node.C) {
        node.C = false;
        return;
      }

      do {
        if (node === this._) break;

        if (node === parent.L) {
          sibling = parent.R;

          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }

          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }

            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            d3_geom_voronoiRedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;

          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            sibling = parent.L;
          }

          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }

            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            d3_geom_voronoiRedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }

        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);

      if (node) node.C = false;
    }
  };

  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
    var p = node,
        q = node.R,
        parent = p.U;

    if (parent) {
      if (parent.L === p) parent.L = q;else parent.R = q;
    } else {
      tree._ = q;
    }

    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
  }

  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
    var p = node,
        q = node.L,
        parent = p.U;

    if (parent) {
      if (parent.L === p) parent.L = q;else parent.R = q;
    } else {
      tree._ = q;
    }

    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
  }

  function d3_geom_voronoiRedBlackFirst(node) {
    while (node.L) {
      node = node.L;
    }

    return node;
  }

  function d3_geom_voronoi(sites, bbox) {
    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
        x0,
        y0,
        circle;
    d3_geom_voronoiEdges = [];
    d3_geom_voronoiCells = new Array(sites.length);
    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();

    while (true) {
      circle = d3_geom_voronoiFirstCircle;

      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
        if (site.x !== x0 || site.y !== y0) {
          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
          d3_geom_voronoiAddBeach(site);
          x0 = site.x, y0 = site.y;
        }

        site = sites.pop();
      } else if (circle) {
        d3_geom_voronoiRemoveBeach(circle.arc);
      } else {
        break;
      }
    }

    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
    var diagram = {
      cells: d3_geom_voronoiCells,
      edges: d3_geom_voronoiEdges
    };
    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
    return diagram;
  }

  function d3_geom_voronoiVertexOrder(a, b) {
    return b.y - a.y || b.x - a.x;
  }

  d3.geom.voronoi = function (points) {
    var x = d3_geom_pointX,
        y = d3_geom_pointY,
        fx = x,
        fy = y,
        clipExtent = d3_geom_voronoiClipExtent;
    if (points) return voronoi(points);

    function voronoi(data) {
      var polygons = new Array(data.length),
          x0 = clipExtent[0][0],
          y0 = clipExtent[0][1],
          x1 = clipExtent[1][0],
          y1 = clipExtent[1][1];
      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function (cell, i) {
        var edges = cell.edges,
            site = cell.site,
            polygon = polygons[i] = edges.length ? edges.map(function (e) {
          var s = e.start();
          return [s.x, s.y];
        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
        polygon.point = data[i];
      });
      return polygons;
    }

    function sites(data) {
      return data.map(function (d, i) {
        return {
          x: Math.round(fx(d, i) / ε) * ε,
          y: Math.round(fy(d, i) / ε) * ε,
          i: i
        };
      });
    }

    voronoi.links = function (data) {
      return d3_geom_voronoi(sites(data)).edges.filter(function (edge) {
        return edge.l && edge.r;
      }).map(function (edge) {
        return {
          source: data[edge.l.i],
          target: data[edge.r.i]
        };
      });
    };

    voronoi.triangles = function (data) {
      var triangles = [];
      d3_geom_voronoi(sites(data)).cells.forEach(function (cell, i) {
        var site = cell.site,
            edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
            j = -1,
            m = edges.length,
            e0,
            s0,
            e1 = edges[m - 1].edge,
            s1 = e1.l === site ? e1.r : e1.l;

        while (++j < m) {
          e0 = e1;
          s0 = s1;
          e1 = edges[j].edge;
          s1 = e1.l === site ? e1.r : e1.l;

          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
            triangles.push([data[i], data[s0.i], data[s1.i]]);
          }
        }
      });
      return triangles;
    };

    voronoi.x = function (_) {
      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
    };

    voronoi.y = function (_) {
      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
    };

    voronoi.clipExtent = function (_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
      return voronoi;
    };

    voronoi.size = function (_) {
      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
      return voronoi.clipExtent(_ && [[0, 0], _]);
    };

    return voronoi;
  };

  var d3_geom_voronoiClipExtent = [[-1e6, -1e6], [1e6, 1e6]];

  function d3_geom_voronoiTriangleArea(a, b, c) {
    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
  }

  d3.geom.delaunay = function (vertices) {
    return d3.geom.voronoi().triangles(vertices);
  };

  d3.geom.quadtree = function (points, x1, y1, x2, y2) {
    var x = d3_geom_pointX,
        y = d3_geom_pointY,
        compat;

    if (compat = arguments.length) {
      x = d3_geom_quadtreeCompatX;
      y = d3_geom_quadtreeCompatY;

      if (compat === 3) {
        y2 = y1;
        x2 = x1;
        y1 = x1 = 0;
      }

      return quadtree(points);
    }

    function quadtree(data) {
      var d,
          fx = d3_functor(x),
          fy = d3_functor(y),
          xs,
          ys,
          i,
          n,
          x1_,
          y1_,
          x2_,
          y2_;

      if (x1 != null) {
        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
      } else {
        x2_ = y2_ = -(x1_ = y1_ = Infinity);
        xs = [], ys = [];
        n = data.length;
        if (compat) for (i = 0; i < n; ++i) {
          d = data[i];
          if (d.x < x1_) x1_ = d.x;
          if (d.y < y1_) y1_ = d.y;
          if (d.x > x2_) x2_ = d.x;
          if (d.y > y2_) y2_ = d.y;
          xs.push(d.x);
          ys.push(d.y);
        } else for (i = 0; i < n; ++i) {
          var x_ = +fx(d = data[i], i),
              y_ = +fy(d, i);
          if (x_ < x1_) x1_ = x_;
          if (y_ < y1_) y1_ = y_;
          if (x_ > x2_) x2_ = x_;
          if (y_ > y2_) y2_ = y_;
          xs.push(x_);
          ys.push(y_);
        }
      }

      var dx = x2_ - x1_,
          dy = y2_ - y1_;
      if (dx > dy) y2_ = y1_ + dx;else x2_ = x1_ + dy;

      function insert(n, d, x, y, x1, y1, x2, y2) {
        if (isNaN(x) || isNaN(y)) return;

        if (n.leaf) {
          var nx = n.x,
              ny = n.y;

          if (nx != null) {
            if (abs(nx - x) + abs(ny - y) < .01) {
              insertChild(n, d, x, y, x1, y1, x2, y2);
            } else {
              var nPoint = n.point;
              n.x = n.y = n.point = null;
              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
              insertChild(n, d, x, y, x1, y1, x2, y2);
            }
          } else {
            n.x = x, n.y = y, n.point = d;
          }
        } else {
          insertChild(n, d, x, y, x1, y1, x2, y2);
        }
      }

      function insertChild(n, d, x, y, x1, y1, x2, y2) {
        var xm = (x1 + x2) * .5,
            ym = (y1 + y2) * .5,
            right = x >= xm,
            below = y >= ym,
            i = below << 1 | right;
        n.leaf = false;
        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
        if (right) x1 = xm;else x2 = xm;
        if (below) y1 = ym;else y2 = ym;
        insert(n, d, x, y, x1, y1, x2, y2);
      }

      var root = d3_geom_quadtreeNode();

      root.add = function (d) {
        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
      };

      root.visit = function (f) {
        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
      };

      root.find = function (point) {
        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
      };

      i = -1;

      if (x1 == null) {
        while (++i < n) {
          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
        }

        --i;
      } else data.forEach(root.add);

      xs = ys = data = d = null;
      return root;
    }

    quadtree.x = function (_) {
      return arguments.length ? (x = _, quadtree) : x;
    };

    quadtree.y = function (_) {
      return arguments.length ? (y = _, quadtree) : y;
    };

    quadtree.extent = function (_) {
      if (!arguments.length) return x1 == null ? null : [[x1, y1], [x2, y2]];
      if (_ == null) x1 = y1 = x2 = y2 = null;else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], y2 = +_[1][1];
      return quadtree;
    };

    quadtree.size = function (_) {
      if (!arguments.length) return x1 == null ? null : [x2 - x1, y2 - y1];
      if (_ == null) x1 = y1 = x2 = y2 = null;else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
      return quadtree;
    };

    return quadtree;
  };

  function d3_geom_quadtreeCompatX(d) {
    return d.x;
  }

  function d3_geom_quadtreeCompatY(d) {
    return d.y;
  }

  function d3_geom_quadtreeNode() {
    return {
      leaf: true,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }

  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
    if (!f(node, x1, y1, x2, y2)) {
      var sx = (x1 + x2) * .5,
          sy = (y1 + y2) * .5,
          children = node.nodes;
      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
    }
  }

  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
    var minDistance2 = Infinity,
        closestPoint;

    (function find(node, x1, y1, x2, y2) {
      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;

      if (point = node.point) {
        var point,
            dx = x - node.x,
            dy = y - node.y,
            distance2 = dx * dx + dy * dy;

        if (distance2 < minDistance2) {
          var distance = Math.sqrt(minDistance2 = distance2);
          x0 = x - distance, y0 = y - distance;
          x3 = x + distance, y3 = y + distance;
          closestPoint = point;
        }
      }

      var children = node.nodes,
          xm = (x1 + x2) * .5,
          ym = (y1 + y2) * .5,
          right = x >= xm,
          below = y >= ym;

      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
        if (node = children[i & 3]) switch (i & 3) {
          case 0:
            find(node, x1, y1, xm, ym);
            break;

          case 1:
            find(node, xm, y1, x2, ym);
            break;

          case 2:
            find(node, x1, ym, xm, y2);
            break;

          case 3:
            find(node, xm, ym, x2, y2);
            break;
        }
      }
    })(root, x0, y0, x3, y3);

    return closestPoint;
  }

  d3.interpolateRgb = d3_interpolateRgb;

  function d3_interpolateRgb(a, b) {
    a = d3.rgb(a);
    b = d3.rgb(b);
    var ar = a.r,
        ag = a.g,
        ab = a.b,
        br = b.r - ar,
        bg = b.g - ag,
        bb = b.b - ab;
    return function (t) {
      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
    };
  }

  d3.interpolateObject = d3_interpolateObject;

  function d3_interpolateObject(a, b) {
    var i = {},
        c = {},
        k;

    for (k in a) {
      if (k in b) {
        i[k] = d3_interpolate(a[k], b[k]);
      } else {
        c[k] = a[k];
      }
    }

    for (k in b) {
      if (!(k in a)) {
        c[k] = b[k];
      }
    }

    return function (t) {
      for (k in i) {
        c[k] = i[k](t);
      }

      return c;
    };
  }

  d3.interpolateNumber = d3_interpolateNumber;

  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function (t) {
      return a * (1 - t) + b * t;
    };
  }

  d3.interpolateString = d3_interpolateString;

  function d3_interpolateString(a, b) {
    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0,
        am,
        bm,
        bs,
        i = -1,
        s = [],
        q = [];
    a = a + "", b = b + "";

    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs;else s[++i] = bs;
      }

      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i]) s[i] += bm;else s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({
          i: i,
          x: d3_interpolateNumber(am, bm)
        });
      }

      bi = d3_interpolate_numberB.lastIndex;
    }

    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs;else s[++i] = bs;
    }

    return s.length < 2 ? q[0] ? (b = q[0].x, function (t) {
      return b(t) + "";
    }) : function () {
      return b;
    } : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    });
  }

  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
  d3.interpolate = d3_interpolate;

  function d3_interpolate(a, b) {
    var i = d3.interpolators.length,
        f;

    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) {
      ;
    }

    return f;
  }

  d3.interpolators = [function (a, b) {
    var t = _typeof(b);

    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
  }];
  d3.interpolateArray = d3_interpolateArray;

  function d3_interpolateArray(a, b) {
    var x = [],
        c = [],
        na = a.length,
        nb = b.length,
        n0 = Math.min(a.length, b.length),
        i;

    for (i = 0; i < n0; ++i) {
      x.push(d3_interpolate(a[i], b[i]));
    }

    for (; i < na; ++i) {
      c[i] = a[i];
    }

    for (; i < nb; ++i) {
      c[i] = b[i];
    }

    return function (t) {
      for (i = 0; i < n0; ++i) {
        c[i] = x[i](t);
      }

      return c;
    };
  }

  var d3_ease_default = function d3_ease_default() {
    return d3_identity;
  };

  var d3_ease = d3.map({
    linear: d3_ease_default,
    poly: d3_ease_poly,
    quad: function quad() {
      return d3_ease_quad;
    },
    cubic: function cubic() {
      return d3_ease_cubic;
    },
    sin: function sin() {
      return d3_ease_sin;
    },
    exp: function exp() {
      return d3_ease_exp;
    },
    circle: function circle() {
      return d3_ease_circle;
    },
    elastic: d3_ease_elastic,
    back: d3_ease_back,
    bounce: function bounce() {
      return d3_ease_bounce;
    }
  });
  var d3_ease_mode = d3.map({
    "in": d3_identity,
    out: d3_ease_reverse,
    "in-out": d3_ease_reflect,
    "out-in": function outIn(f) {
      return d3_ease_reflect(d3_ease_reverse(f));
    }
  });

  d3.ease = function (name) {
    var i = name.indexOf("-"),
        t = i >= 0 ? name.slice(0, i) : name,
        m = i >= 0 ? name.slice(i + 1) : "in";
    t = d3_ease.get(t) || d3_ease_default;
    m = d3_ease_mode.get(m) || d3_identity;
    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
  };

  function d3_ease_clamp(f) {
    return function (t) {
      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
    };
  }

  function d3_ease_reverse(f) {
    return function (t) {
      return 1 - f(1 - t);
    };
  }

  function d3_ease_reflect(f) {
    return function (t) {
      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
    };
  }

  function d3_ease_quad(t) {
    return t * t;
  }

  function d3_ease_cubic(t) {
    return t * t * t;
  }

  function d3_ease_cubicInOut(t) {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    var t2 = t * t,
        t3 = t2 * t;
    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
  }

  function d3_ease_poly(e) {
    return function (t) {
      return Math.pow(t, e);
    };
  }

  function d3_ease_sin(t) {
    return 1 - Math.cos(t * halfπ);
  }

  function d3_ease_exp(t) {
    return Math.pow(2, 10 * (t - 1));
  }

  function d3_ease_circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  }

  function d3_ease_elastic(a, p) {
    var s;
    if (arguments.length < 2) p = .45;
    if (arguments.length) s = p / τ * Math.asin(1 / a);else a = 1, s = p / 4;
    return function (t) {
      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
    };
  }

  function d3_ease_back(s) {
    if (!s) s = 1.70158;
    return function (t) {
      return t * t * ((s + 1) * t - s);
    };
  }

  function d3_ease_bounce(t) {
    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
  }

  d3.interpolateHcl = d3_interpolateHcl;

  function d3_interpolateHcl(a, b) {
    a = d3.hcl(a);
    b = d3.hcl(b);
    var ah = a.h,
        ac = a.c,
        al = a.l,
        bh = b.h - ah,
        bc = b.c - ac,
        bl = b.l - al;
    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;else if (bh > 180) bh -= 360;else if (bh < -180) bh += 360;
    return function (t) {
      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
    };
  }

  d3.interpolateHsl = d3_interpolateHsl;

  function d3_interpolateHsl(a, b) {
    a = d3.hsl(a);
    b = d3.hsl(b);
    var ah = a.h,
        as = a.s,
        al = a.l,
        bh = b.h - ah,
        bs = b.s - as,
        bl = b.l - al;
    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah;else if (bh > 180) bh -= 360;else if (bh < -180) bh += 360;
    return function (t) {
      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
    };
  }

  d3.interpolateLab = d3_interpolateLab;

  function d3_interpolateLab(a, b) {
    a = d3.lab(a);
    b = d3.lab(b);
    var al = a.l,
        aa = a.a,
        ab = a.b,
        bl = b.l - al,
        ba = b.a - aa,
        bb = b.b - ab;
    return function (t) {
      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
    };
  }

  d3.interpolateRound = d3_interpolateRound;

  function d3_interpolateRound(a, b) {
    b -= a;
    return function (t) {
      return Math.round(a + b * t);
    };
  }

  d3.transform = function (string) {
    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
    return (d3.transform = function (string) {
      if (string != null) {
        g.setAttribute("transform", string);
        var t = g.transform.baseVal.consolidate();
      }

      return new d3_transform(t ? t.matrix : d3_transformIdentity);
    })(string);
  };

  function d3_transform(m) {
    var r0 = [m.a, m.b],
        r1 = [m.c, m.d],
        kx = d3_transformNormalize(r0),
        kz = d3_transformDot(r0, r1),
        ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;

    if (r0[0] * r1[1] < r1[0] * r0[1]) {
      r0[0] *= -1;
      r0[1] *= -1;
      kx *= -1;
      kz *= -1;
    }

    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
    this.translate = [m.e, m.f];
    this.scale = [kx, ky];
    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
  }

  d3_transform.prototype.toString = function () {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };

  function d3_transformDot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }

  function d3_transformNormalize(a) {
    var k = Math.sqrt(d3_transformDot(a, a));

    if (k) {
      a[0] /= k;
      a[1] /= k;
    }

    return k;
  }

  function d3_transformCombine(a, b, k) {
    a[0] += k * b[0];
    a[1] += k * b[1];
    return a;
  }

  var d3_transformIdentity = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  d3.interpolateTransform = d3_interpolateTransform;

  function d3_interpolateTransformPop(s) {
    return s.length ? s.pop() + "," : "";
  }

  function d3_interpolateTranslate(ta, tb, s, q) {
    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
      var i = s.push("translate(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ta[0], tb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ta[1], tb[1])
      });
    } else if (tb[0] || tb[1]) {
      s.push("translate(" + tb + ")");
    }
  }

  function d3_interpolateRotate(ra, rb, s, q) {
    if (ra !== rb) {
      if (ra - rb > 180) rb += 360;else if (rb - ra > 180) ra += 360;
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
        x: d3_interpolateNumber(ra, rb)
      });
    } else if (rb) {
      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
    }
  }

  function d3_interpolateSkew(wa, wb, s, q) {
    if (wa !== wb) {
      q.push({
        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
        x: d3_interpolateNumber(wa, wb)
      });
    } else if (wb) {
      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
    }
  }

  function d3_interpolateScale(ka, kb, s, q) {
    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
      q.push({
        i: i - 4,
        x: d3_interpolateNumber(ka[0], kb[0])
      }, {
        i: i - 2,
        x: d3_interpolateNumber(ka[1], kb[1])
      });
    } else if (kb[0] !== 1 || kb[1] !== 1) {
      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
    }
  }

  function d3_interpolateTransform(a, b) {
    var s = [],
        q = [];
    a = d3.transform(a), b = d3.transform(b);
    d3_interpolateTranslate(a.translate, b.translate, s, q);
    d3_interpolateRotate(a.rotate, b.rotate, s, q);
    d3_interpolateSkew(a.skew, b.skew, s, q);
    d3_interpolateScale(a.scale, b.scale, s, q);
    a = b = null;
    return function (t) {
      var i = -1,
          n = q.length,
          o;

      while (++i < n) {
        s[(o = q[i]).i] = o.x(t);
      }

      return s.join("");
    };
  }

  function d3_uninterpolateNumber(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function (x) {
      return (x - a) / b;
    };
  }

  function d3_uninterpolateClamp(a, b) {
    b = (b -= a = +a) || 1 / b;
    return function (x) {
      return Math.max(0, Math.min(1, (x - a) / b));
    };
  }

  d3.layout = {};

  d3.layout.bundle = function () {
    return function (links) {
      var paths = [],
          i = -1,
          n = links.length;

      while (++i < n) {
        paths.push(d3_layout_bundlePath(links[i]));
      }

      return paths;
    };
  };

  function d3_layout_bundlePath(link) {
    var start = link.source,
        end = link.target,
        lca = d3_layout_bundleLeastCommonAncestor(start, end),
        points = [start];

    while (start !== lca) {
      start = start.parent;
      points.push(start);
    }

    var k = points.length;

    while (end !== lca) {
      points.splice(k, 0, end);
      end = end.parent;
    }

    return points;
  }

  function d3_layout_bundleAncestors(node) {
    var ancestors = [],
        parent = node.parent;

    while (parent != null) {
      ancestors.push(node);
      node = parent;
      parent = parent.parent;
    }

    ancestors.push(node);
    return ancestors;
  }

  function d3_layout_bundleLeastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = d3_layout_bundleAncestors(a),
        bNodes = d3_layout_bundleAncestors(b),
        aNode = aNodes.pop(),
        bNode = bNodes.pop(),
        sharedNode = null;

    while (aNode === bNode) {
      sharedNode = aNode;
      aNode = aNodes.pop();
      bNode = bNodes.pop();
    }

    return sharedNode;
  }

  d3.layout.chord = function () {
    var chord = {},
        chords,
        groups,
        matrix,
        n,
        padding = 0,
        sortGroups,
        sortSubgroups,
        sortChords;

    function relayout() {
      var subgroups = {},
          groupSums = [],
          groupIndex = d3.range(n),
          subgroupIndex = [],
          k,
          x,
          x0,
          i,
          j;
      chords = [];
      groups = [];
      k = 0, i = -1;

      while (++i < n) {
        x = 0, j = -1;

        while (++j < n) {
          x += matrix[i][j];
        }

        groupSums.push(x);
        subgroupIndex.push(d3.range(n));
        k += x;
      }

      if (sortGroups) {
        groupIndex.sort(function (a, b) {
          return sortGroups(groupSums[a], groupSums[b]);
        });
      }

      if (sortSubgroups) {
        subgroupIndex.forEach(function (d, i) {
          d.sort(function (a, b) {
            return sortSubgroups(matrix[i][a], matrix[i][b]);
          });
        });
      }

      k = (τ - padding * n) / k;
      x = 0, i = -1;

      while (++i < n) {
        x0 = x, j = -1;

        while (++j < n) {
          var di = groupIndex[i],
              dj = subgroupIndex[di][j],
              v = matrix[di][dj],
              a0 = x,
              a1 = x += v * k;
          subgroups[di + "-" + dj] = {
            index: di,
            subindex: dj,
            startAngle: a0,
            endAngle: a1,
            value: v
          };
        }

        groups[di] = {
          index: di,
          startAngle: x0,
          endAngle: x,
          value: groupSums[di]
        };
        x += padding;
      }

      i = -1;

      while (++i < n) {
        j = i - 1;

        while (++j < n) {
          var source = subgroups[i + "-" + j],
              target = subgroups[j + "-" + i];

          if (source.value || target.value) {
            chords.push(source.value < target.value ? {
              source: target,
              target: source
            } : {
              source: source,
              target: target
            });
          }
        }
      }

      if (sortChords) resort();
    }

    function resort() {
      chords.sort(function (a, b) {
        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
      });
    }

    chord.matrix = function (x) {
      if (!arguments.length) return matrix;
      n = (matrix = x) && matrix.length;
      chords = groups = null;
      return chord;
    };

    chord.padding = function (x) {
      if (!arguments.length) return padding;
      padding = x;
      chords = groups = null;
      return chord;
    };

    chord.sortGroups = function (x) {
      if (!arguments.length) return sortGroups;
      sortGroups = x;
      chords = groups = null;
      return chord;
    };

    chord.sortSubgroups = function (x) {
      if (!arguments.length) return sortSubgroups;
      sortSubgroups = x;
      chords = null;
      return chord;
    };

    chord.sortChords = function (x) {
      if (!arguments.length) return sortChords;
      sortChords = x;
      if (chords) resort();
      return chord;
    };

    chord.chords = function () {
      if (!chords) relayout();
      return chords;
    };

    chord.groups = function () {
      if (!groups) relayout();
      return groups;
    };

    return chord;
  };

  d3.layout.force = function () {
    var force = {},
        event = d3.dispatch("start", "tick", "end"),
        timer,
        size = [1, 1],
        drag,
        alpha,
        friction = .9,
        linkDistance = d3_layout_forceLinkDistance,
        linkStrength = d3_layout_forceLinkStrength,
        charge = -30,
        chargeDistance2 = d3_layout_forceChargeDistance2,
        gravity = .1,
        theta2 = .64,
        nodes = [],
        links = [],
        distances,
        strengths,
        charges;

    function repulse(node) {
      return function (quad, x1, _, x2) {
        if (quad.point !== node) {
          var dx = quad.cx - node.x,
              dy = quad.cy - node.y,
              dw = x2 - x1,
              dn = dx * dx + dy * dy;

          if (dw * dw / theta2 < dn) {
            if (dn < chargeDistance2) {
              var k = quad.charge / dn;
              node.px -= dx * k;
              node.py -= dy * k;
            }

            return true;
          }

          if (quad.point && dn && dn < chargeDistance2) {
            var k = quad.pointCharge / dn;
            node.px -= dx * k;
            node.py -= dy * k;
          }
        }

        return !quad.charge;
      };
    }

    force.tick = function () {
      if ((alpha *= .99) < .005) {
        timer = null;
        event.end({
          type: "end",
          alpha: alpha = 0
        });
        return true;
      }

      var n = nodes.length,
          m = links.length,
          q,
          i,
          o,
          s,
          t,
          l,
          k,
          x,
          y;

      for (i = 0; i < m; ++i) {
        o = links[i];
        s = o.source;
        t = o.target;
        x = t.x - s.x;
        y = t.y - s.y;

        if (l = x * x + y * y) {
          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
          x *= l;
          y *= l;
          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
          t.y -= y * k;
          s.x += x * (k = 1 - k);
          s.y += y * k;
        }
      }

      if (k = alpha * gravity) {
        x = size[0] / 2;
        y = size[1] / 2;
        i = -1;
        if (k) while (++i < n) {
          o = nodes[i];
          o.x += (x - o.x) * k;
          o.y += (y - o.y) * k;
        }
      }

      if (charge) {
        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
        i = -1;

        while (++i < n) {
          if (!(o = nodes[i]).fixed) {
            q.visit(repulse(o));
          }
        }
      }

      i = -1;

      while (++i < n) {
        o = nodes[i];

        if (o.fixed) {
          o.x = o.px;
          o.y = o.py;
        } else {
          o.x -= (o.px - (o.px = o.x)) * friction;
          o.y -= (o.py - (o.py = o.y)) * friction;
        }
      }

      event.tick({
        type: "tick",
        alpha: alpha
      });
    };

    force.nodes = function (x) {
      if (!arguments.length) return nodes;
      nodes = x;
      return force;
    };

    force.links = function (x) {
      if (!arguments.length) return links;
      links = x;
      return force;
    };

    force.size = function (x) {
      if (!arguments.length) return size;
      size = x;
      return force;
    };

    force.linkDistance = function (x) {
      if (!arguments.length) return linkDistance;
      linkDistance = typeof x === "function" ? x : +x;
      return force;
    };

    force.distance = force.linkDistance;

    force.linkStrength = function (x) {
      if (!arguments.length) return linkStrength;
      linkStrength = typeof x === "function" ? x : +x;
      return force;
    };

    force.friction = function (x) {
      if (!arguments.length) return friction;
      friction = +x;
      return force;
    };

    force.charge = function (x) {
      if (!arguments.length) return charge;
      charge = typeof x === "function" ? x : +x;
      return force;
    };

    force.chargeDistance = function (x) {
      if (!arguments.length) return Math.sqrt(chargeDistance2);
      chargeDistance2 = x * x;
      return force;
    };

    force.gravity = function (x) {
      if (!arguments.length) return gravity;
      gravity = +x;
      return force;
    };

    force.theta = function (x) {
      if (!arguments.length) return Math.sqrt(theta2);
      theta2 = x * x;
      return force;
    };

    force.alpha = function (x) {
      if (!arguments.length) return alpha;
      x = +x;

      if (alpha) {
        if (x > 0) {
          alpha = x;
        } else {
          timer.c = null, timer.t = NaN, timer = null;
          event.end({
            type: "end",
            alpha: alpha = 0
          });
        }
      } else if (x > 0) {
        event.start({
          type: "start",
          alpha: alpha = x
        });
        timer = d3_timer(force.tick);
      }

      return force;
    };

    force.start = function () {
      var i,
          n = nodes.length,
          m = links.length,
          w = size[0],
          h = size[1],
          neighbors,
          o;

      for (i = 0; i < n; ++i) {
        (o = nodes[i]).index = i;
        o.weight = 0;
      }

      for (i = 0; i < m; ++i) {
        o = links[i];
        if (typeof o.source == "number") o.source = nodes[o.source];
        if (typeof o.target == "number") o.target = nodes[o.target];
        ++o.source.weight;
        ++o.target.weight;
      }

      for (i = 0; i < n; ++i) {
        o = nodes[i];
        if (isNaN(o.x)) o.x = position("x", w);
        if (isNaN(o.y)) o.y = position("y", h);
        if (isNaN(o.px)) o.px = o.x;
        if (isNaN(o.py)) o.py = o.y;
      }

      distances = [];
      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) {
        distances[i] = +linkDistance.call(this, links[i], i);
      } else for (i = 0; i < m; ++i) {
        distances[i] = linkDistance;
      }
      strengths = [];
      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) {
        strengths[i] = +linkStrength.call(this, links[i], i);
      } else for (i = 0; i < m; ++i) {
        strengths[i] = linkStrength;
      }
      charges = [];
      if (typeof charge === "function") for (i = 0; i < n; ++i) {
        charges[i] = +charge.call(this, nodes[i], i);
      } else for (i = 0; i < n; ++i) {
        charges[i] = charge;
      }

      function position(dimension, size) {
        if (!neighbors) {
          neighbors = new Array(n);

          for (j = 0; j < n; ++j) {
            neighbors[j] = [];
          }

          for (j = 0; j < m; ++j) {
            var o = links[j];
            neighbors[o.source.index].push(o.target);
            neighbors[o.target.index].push(o.source);
          }
        }

        var candidates = neighbors[i],
            j = -1,
            l = candidates.length,
            x;

        while (++j < l) {
          if (!isNaN(x = candidates[j][dimension])) return x;
        }

        return Math.random() * size;
      }

      return force.resume();
    };

    force.resume = function () {
      return force.alpha(.1);
    };

    force.stop = function () {
      return force.alpha(0);
    };

    force.drag = function () {
      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
      if (!arguments.length) return drag;
      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
    };

    function dragmove(d) {
      d.px = d3.event.x, d.py = d3.event.y;
      force.resume();
    }

    return d3.rebind(force, event, "on");
  };

  function d3_layout_forceDragstart(d) {
    d.fixed |= 2;
  }

  function d3_layout_forceDragend(d) {
    d.fixed &= ~6;
  }

  function d3_layout_forceMouseover(d) {
    d.fixed |= 4;
    d.px = d.x, d.py = d.y;
  }

  function d3_layout_forceMouseout(d) {
    d.fixed &= ~4;
  }

  function d3_layout_forceAccumulate(quad, alpha, charges) {
    var cx = 0,
        cy = 0;
    quad.charge = 0;

    if (!quad.leaf) {
      var nodes = quad.nodes,
          n = nodes.length,
          i = -1,
          c;

      while (++i < n) {
        c = nodes[i];
        if (c == null) continue;
        d3_layout_forceAccumulate(c, alpha, charges);
        quad.charge += c.charge;
        cx += c.charge * c.cx;
        cy += c.charge * c.cy;
      }
    }

    if (quad.point) {
      if (!quad.leaf) {
        quad.point.x += Math.random() - .5;
        quad.point.y += Math.random() - .5;
      }

      var k = alpha * charges[quad.point.index];
      quad.charge += quad.pointCharge = k;
      cx += k * quad.point.x;
      cy += k * quad.point.y;
    }

    quad.cx = cx / quad.charge;
    quad.cy = cy / quad.charge;
  }

  var d3_layout_forceLinkDistance = 20,
      d3_layout_forceLinkStrength = 1,
      d3_layout_forceChargeDistance2 = Infinity;

  d3.layout.hierarchy = function () {
    var sort = d3_layout_hierarchySort,
        children = d3_layout_hierarchyChildren,
        value = d3_layout_hierarchyValue;

    function hierarchy(root) {
      var stack = [root],
          nodes = [],
          node;
      root.depth = 0;

      while ((node = stack.pop()) != null) {
        nodes.push(node);

        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
          var n, childs, child;

          while (--n >= 0) {
            stack.push(child = childs[n]);
            child.parent = node;
            child.depth = node.depth + 1;
          }

          if (value) node.value = 0;
          node.children = childs;
        } else {
          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
          delete node.children;
        }
      }

      d3_layout_hierarchyVisitAfter(root, function (node) {
        var childs, parent;
        if (sort && (childs = node.children)) childs.sort(sort);
        if (value && (parent = node.parent)) parent.value += node.value;
      });
      return nodes;
    }

    hierarchy.sort = function (x) {
      if (!arguments.length) return sort;
      sort = x;
      return hierarchy;
    };

    hierarchy.children = function (x) {
      if (!arguments.length) return children;
      children = x;
      return hierarchy;
    };

    hierarchy.value = function (x) {
      if (!arguments.length) return value;
      value = x;
      return hierarchy;
    };

    hierarchy.revalue = function (root) {
      if (value) {
        d3_layout_hierarchyVisitBefore(root, function (node) {
          if (node.children) node.value = 0;
        });
        d3_layout_hierarchyVisitAfter(root, function (node) {
          var parent;
          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
          if (parent = node.parent) parent.value += node.value;
        });
      }

      return root;
    };

    return hierarchy;
  };

  function d3_layout_hierarchyRebind(object, hierarchy) {
    d3.rebind(object, hierarchy, "sort", "children", "value");
    object.nodes = object;
    object.links = d3_layout_hierarchyLinks;
    return object;
  }

  function d3_layout_hierarchyVisitBefore(node, callback) {
    var nodes = [node];

    while ((node = nodes.pop()) != null) {
      callback(node);

      if ((children = node.children) && (n = children.length)) {
        var n, children;

        while (--n >= 0) {
          nodes.push(children[n]);
        }
      }
    }
  }

  function d3_layout_hierarchyVisitAfter(node, callback) {
    var nodes = [node],
        nodes2 = [];

    while ((node = nodes.pop()) != null) {
      nodes2.push(node);

      if ((children = node.children) && (n = children.length)) {
        var i = -1,
            n,
            children;

        while (++i < n) {
          nodes.push(children[i]);
        }
      }
    }

    while ((node = nodes2.pop()) != null) {
      callback(node);
    }
  }

  function d3_layout_hierarchyChildren(d) {
    return d.children;
  }

  function d3_layout_hierarchyValue(d) {
    return d.value;
  }

  function d3_layout_hierarchySort(a, b) {
    return b.value - a.value;
  }

  function d3_layout_hierarchyLinks(nodes) {
    return d3.merge(nodes.map(function (parent) {
      return (parent.children || []).map(function (child) {
        return {
          source: parent,
          target: child
        };
      });
    }));
  }

  d3.layout.partition = function () {
    var hierarchy = d3.layout.hierarchy(),
        size = [1, 1];

    function position(node, x, dx, dy) {
      var children = node.children;
      node.x = x;
      node.y = node.depth * dy;
      node.dx = dx;
      node.dy = dy;

      if (children && (n = children.length)) {
        var i = -1,
            n,
            c,
            d;
        dx = node.value ? dx / node.value : 0;

        while (++i < n) {
          position(c = children[i], x, d = c.value * dx, dy);
          x += d;
        }
      }
    }

    function depth(node) {
      var children = node.children,
          d = 0;

      if (children && (n = children.length)) {
        var i = -1,
            n;

        while (++i < n) {
          d = Math.max(d, depth(children[i]));
        }
      }

      return 1 + d;
    }

    function partition(d, i) {
      var nodes = hierarchy.call(this, d, i);
      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
      return nodes;
    }

    partition.size = function (x) {
      if (!arguments.length) return size;
      size = x;
      return partition;
    };

    return d3_layout_hierarchyRebind(partition, hierarchy);
  };

  d3.layout.pie = function () {
    var value = Number,
        sort = d3_layout_pieSortByValue,
        startAngle = 0,
        endAngle = τ,
        padAngle = 0;

    function pie(data) {
      var n = data.length,
          values = data.map(function (d, i) {
        return +value.call(pie, d, i);
      }),
          a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle),
          da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a,
          p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)),
          pa = p * (da < 0 ? -1 : 1),
          sum = d3.sum(values),
          k = sum ? (da - n * pa) / sum : 0,
          index = d3.range(n),
          arcs = [],
          v;
      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function (i, j) {
        return values[j] - values[i];
      } : function (i, j) {
        return sort(data[i], data[j]);
      });
      index.forEach(function (i) {
        arcs[i] = {
          data: data[i],
          value: v = values[i],
          startAngle: a,
          endAngle: a += v * k + pa,
          padAngle: p
        };
      });
      return arcs;
    }

    pie.value = function (_) {
      if (!arguments.length) return value;
      value = _;
      return pie;
    };

    pie.sort = function (_) {
      if (!arguments.length) return sort;
      sort = _;
      return pie;
    };

    pie.startAngle = function (_) {
      if (!arguments.length) return startAngle;
      startAngle = _;
      return pie;
    };

    pie.endAngle = function (_) {
      if (!arguments.length) return endAngle;
      endAngle = _;
      return pie;
    };

    pie.padAngle = function (_) {
      if (!arguments.length) return padAngle;
      padAngle = _;
      return pie;
    };

    return pie;
  };

  var d3_layout_pieSortByValue = {};

  d3.layout.stack = function () {
    var values = d3_identity,
        order = d3_layout_stackOrderDefault,
        offset = d3_layout_stackOffsetZero,
        out = d3_layout_stackOut,
        x = d3_layout_stackX,
        y = d3_layout_stackY;

    function stack(data, index) {
      if (!(n = data.length)) return data;
      var series = data.map(function (d, i) {
        return values.call(stack, d, i);
      });
      var points = series.map(function (d) {
        return d.map(function (v, i) {
          return [x.call(stack, v, i), y.call(stack, v, i)];
        });
      });
      var orders = order.call(stack, points, index);
      series = d3.permute(series, orders);
      points = d3.permute(points, orders);
      var offsets = offset.call(stack, points, index);
      var m = series[0].length,
          n,
          i,
          j,
          o;

      for (j = 0; j < m; ++j) {
        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);

        for (i = 1; i < n; ++i) {
          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
        }
      }

      return data;
    }

    stack.values = function (x) {
      if (!arguments.length) return values;
      values = x;
      return stack;
    };

    stack.order = function (x) {
      if (!arguments.length) return order;
      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
      return stack;
    };

    stack.offset = function (x) {
      if (!arguments.length) return offset;
      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
      return stack;
    };

    stack.x = function (z) {
      if (!arguments.length) return x;
      x = z;
      return stack;
    };

    stack.y = function (z) {
      if (!arguments.length) return y;
      y = z;
      return stack;
    };

    stack.out = function (z) {
      if (!arguments.length) return out;
      out = z;
      return stack;
    };

    return stack;
  };

  function d3_layout_stackX(d) {
    return d.x;
  }

  function d3_layout_stackY(d) {
    return d.y;
  }

  function d3_layout_stackOut(d, y0, y) {
    d.y0 = y0;
    d.y = y;
  }

  var d3_layout_stackOrders = d3.map({
    "inside-out": function insideOut(data) {
      var n = data.length,
          i,
          j,
          max = data.map(d3_layout_stackMaxIndex),
          sums = data.map(d3_layout_stackReduceSum),
          index = d3.range(n).sort(function (a, b) {
        return max[a] - max[b];
      }),
          top = 0,
          bottom = 0,
          tops = [],
          bottoms = [];

      for (i = 0; i < n; ++i) {
        j = index[i];

        if (top < bottom) {
          top += sums[j];
          tops.push(j);
        } else {
          bottom += sums[j];
          bottoms.push(j);
        }
      }

      return bottoms.reverse().concat(tops);
    },
    reverse: function reverse(data) {
      return d3.range(data.length).reverse();
    },
    "default": d3_layout_stackOrderDefault
  });
  var d3_layout_stackOffsets = d3.map({
    silhouette: function silhouette(data) {
      var n = data.length,
          m = data[0].length,
          sums = [],
          max = 0,
          i,
          j,
          o,
          y0 = [];

      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) {
          o += data[i][j][1];
        }

        if (o > max) max = o;
        sums.push(o);
      }

      for (j = 0; j < m; ++j) {
        y0[j] = (max - sums[j]) / 2;
      }

      return y0;
    },
    wiggle: function wiggle(data) {
      var n = data.length,
          x = data[0],
          m = x.length,
          i,
          j,
          k,
          s1,
          s2,
          s3,
          dx,
          o,
          o0,
          y0 = [];
      y0[0] = o = o0 = 0;

      for (j = 1; j < m; ++j) {
        for (i = 0, s1 = 0; i < n; ++i) {
          s1 += data[i][j][1];
        }

        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
          }

          s2 += s3 * data[i][j][1];
        }

        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
        if (o < o0) o0 = o;
      }

      for (j = 0; j < m; ++j) {
        y0[j] -= o0;
      }

      return y0;
    },
    expand: function expand(data) {
      var n = data.length,
          m = data[0].length,
          k = 1 / n,
          i,
          j,
          o,
          y0 = [];

      for (j = 0; j < m; ++j) {
        for (i = 0, o = 0; i < n; i++) {
          o += data[i][j][1];
        }

        if (o) for (i = 0; i < n; i++) {
          data[i][j][1] /= o;
        } else for (i = 0; i < n; i++) {
          data[i][j][1] = k;
        }
      }

      for (j = 0; j < m; ++j) {
        y0[j] = 0;
      }

      return y0;
    },
    zero: d3_layout_stackOffsetZero
  });

  function d3_layout_stackOrderDefault(data) {
    return d3.range(data.length);
  }

  function d3_layout_stackOffsetZero(data) {
    var j = -1,
        m = data[0].length,
        y0 = [];

    while (++j < m) {
      y0[j] = 0;
    }

    return y0;
  }

  function d3_layout_stackMaxIndex(array) {
    var i = 1,
        j = 0,
        v = array[0][1],
        k,
        n = array.length;

    for (; i < n; ++i) {
      if ((k = array[i][1]) > v) {
        j = i;
        v = k;
      }
    }

    return j;
  }

  function d3_layout_stackReduceSum(d) {
    return d.reduce(d3_layout_stackSum, 0);
  }

  function d3_layout_stackSum(p, d) {
    return p + d[1];
  }

  d3.layout.histogram = function () {
    var frequency = true,
        valuer = Number,
        ranger = d3_layout_histogramRange,
        binner = d3_layout_histogramBinSturges;

    function histogram(data, i) {
      var bins = [],
          values = data.map(valuer, this),
          range = ranger.call(this, values, i),
          thresholds = binner.call(this, range, values, i),
          bin,
          i = -1,
          n = values.length,
          m = thresholds.length - 1,
          k = frequency ? 1 : 1 / n,
          x;

      while (++i < m) {
        bin = bins[i] = [];
        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
        bin.y = 0;
      }

      if (m > 0) {
        i = -1;

        while (++i < n) {
          x = values[i];

          if (x >= range[0] && x <= range[1]) {
            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
            bin.y += k;
            bin.push(data[i]);
          }
        }
      }

      return bins;
    }

    histogram.value = function (x) {
      if (!arguments.length) return valuer;
      valuer = x;
      return histogram;
    };

    histogram.range = function (x) {
      if (!arguments.length) return ranger;
      ranger = d3_functor(x);
      return histogram;
    };

    histogram.bins = function (x) {
      if (!arguments.length) return binner;
      binner = typeof x === "number" ? function (range) {
        return d3_layout_histogramBinFixed(range, x);
      } : d3_functor(x);
      return histogram;
    };

    histogram.frequency = function (x) {
      if (!arguments.length) return frequency;
      frequency = !!x;
      return histogram;
    };

    return histogram;
  };

  function d3_layout_histogramBinSturges(range, values) {
    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
  }

  function d3_layout_histogramBinFixed(range, n) {
    var x = -1,
        b = +range[0],
        m = (range[1] - b) / n,
        f = [];

    while (++x <= n) {
      f[x] = m * x + b;
    }

    return f;
  }

  function d3_layout_histogramRange(values) {
    return [d3.min(values), d3.max(values)];
  }

  d3.layout.pack = function () {
    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
        padding = 0,
        size = [1, 1],
        radius;

    function pack(d, i) {
      var nodes = hierarchy.call(this, d, i),
          root = nodes[0],
          w = size[0],
          h = size[1],
          r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function () {
        return radius;
      };
      root.x = root.y = 0;
      d3_layout_hierarchyVisitAfter(root, function (d) {
        d.r = +r(d.value);
      });
      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);

      if (padding) {
        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
        d3_layout_hierarchyVisitAfter(root, function (d) {
          d.r += dr;
        });
        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
        d3_layout_hierarchyVisitAfter(root, function (d) {
          d.r -= dr;
        });
      }

      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
      return nodes;
    }

    pack.size = function (_) {
      if (!arguments.length) return size;
      size = _;
      return pack;
    };

    pack.radius = function (_) {
      if (!arguments.length) return radius;
      radius = _ == null || typeof _ === "function" ? _ : +_;
      return pack;
    };

    pack.padding = function (_) {
      if (!arguments.length) return padding;
      padding = +_;
      return pack;
    };

    return d3_layout_hierarchyRebind(pack, hierarchy);
  };

  function d3_layout_packSort(a, b) {
    return a.value - b.value;
  }

  function d3_layout_packInsert(a, b) {
    var c = a._pack_next;
    a._pack_next = b;
    b._pack_prev = a;
    b._pack_next = c;
    c._pack_prev = b;
  }

  function d3_layout_packSplice(a, b) {
    a._pack_next = b;
    b._pack_prev = a;
  }

  function d3_layout_packIntersects(a, b) {
    var dx = b.x - a.x,
        dy = b.y - a.y,
        dr = a.r + b.r;
    return .999 * dr * dr > dx * dx + dy * dy;
  }

  function d3_layout_packSiblings(node) {
    if (!(nodes = node.children) || !(n = nodes.length)) return;
    var nodes,
        xMin = Infinity,
        xMax = -Infinity,
        yMin = Infinity,
        yMax = -Infinity,
        a,
        b,
        c,
        i,
        j,
        k,
        n;

    function bound(node) {
      xMin = Math.min(node.x - node.r, xMin);
      xMax = Math.max(node.x + node.r, xMax);
      yMin = Math.min(node.y - node.r, yMin);
      yMax = Math.max(node.y + node.r, yMax);
    }

    nodes.forEach(d3_layout_packLink);
    a = nodes[0];
    a.x = -a.r;
    a.y = 0;
    bound(a);

    if (n > 1) {
      b = nodes[1];
      b.x = b.r;
      b.y = 0;
      bound(b);

      if (n > 2) {
        c = nodes[2];
        d3_layout_packPlace(a, b, c);
        bound(c);
        d3_layout_packInsert(a, c);
        a._pack_prev = c;
        d3_layout_packInsert(c, b);
        b = a._pack_next;

        for (i = 3; i < n; i++) {
          d3_layout_packPlace(a, b, c = nodes[i]);
          var isect = 0,
              s1 = 1,
              s2 = 1;

          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
            if (d3_layout_packIntersects(j, c)) {
              isect = 1;
              break;
            }
          }

          if (isect == 1) {
            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
              if (d3_layout_packIntersects(k, c)) {
                break;
              }
            }
          }

          if (isect) {
            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j);else d3_layout_packSplice(a = k, b);
            i--;
          } else {
            d3_layout_packInsert(a, c);
            b = c;
            bound(c);
          }
        }
      }
    }

    var cx = (xMin + xMax) / 2,
        cy = (yMin + yMax) / 2,
        cr = 0;

    for (i = 0; i < n; i++) {
      c = nodes[i];
      c.x -= cx;
      c.y -= cy;
      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
    }

    node.r = cr;
    nodes.forEach(d3_layout_packUnlink);
  }

  function d3_layout_packLink(node) {
    node._pack_next = node._pack_prev = node;
  }

  function d3_layout_packUnlink(node) {
    delete node._pack_next;
    delete node._pack_prev;
  }

  function d3_layout_packTransform(node, x, y, k) {
    var children = node.children;
    node.x = x += k * node.x;
    node.y = y += k * node.y;
    node.r *= k;

    if (children) {
      var i = -1,
          n = children.length;

      while (++i < n) {
        d3_layout_packTransform(children[i], x, y, k);
      }
    }
  }

  function d3_layout_packPlace(a, b, c) {
    var db = a.r + c.r,
        dx = b.x - a.x,
        dy = b.y - a.y;

    if (db && (dx || dy)) {
      var da = b.r + c.r,
          dc = dx * dx + dy * dy;
      da *= da;
      db *= db;
      var x = .5 + (db - da) / (2 * dc),
          y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
      c.x = a.x + x * dx + y * dy;
      c.y = a.y + x * dy - y * dx;
    } else {
      c.x = a.x + db;
      c.y = a.y;
    }
  }

  d3.layout.tree = function () {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null),
        separation = d3_layout_treeSeparation,
        size = [1, 1],
        nodeSize = null;

    function tree(d, i) {
      var nodes = hierarchy.call(this, d, i),
          root0 = nodes[0],
          root1 = wrapTree(root0);
      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
      d3_layout_hierarchyVisitBefore(root1, secondWalk);
      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode);else {
        var left = root0,
            right = root0,
            bottom = root0;
        d3_layout_hierarchyVisitBefore(root0, function (node) {
          if (node.x < left.x) left = node;
          if (node.x > right.x) right = node;
          if (node.depth > bottom.depth) bottom = node;
        });
        var tx = separation(left, right) / 2 - left.x,
            kx = size[0] / (right.x + separation(right, left) / 2 + tx),
            ky = size[1] / (bottom.depth || 1);
        d3_layout_hierarchyVisitBefore(root0, function (node) {
          node.x = (node.x + tx) * kx;
          node.y = node.depth * ky;
        });
      }
      return nodes;
    }

    function wrapTree(root0) {
      var root1 = {
        A: null,
        children: [root0]
      },
          queue = [root1],
          node1;

      while ((node1 = queue.pop()) != null) {
        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
          queue.push((children[i] = child = {
            _: children[i],
            parent: node1,
            children: (child = children[i].children) && child.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: i
          }).a = child);
        }
      }

      return root1.children[0];
    }

    function firstWalk(v) {
      var children = v.children,
          siblings = v.parent.children,
          w = v.i ? siblings[v.i - 1] : null;

      if (children.length) {
        d3_layout_treeShift(v);
        var midpoint = (children[0].z + children[children.length - 1].z) / 2;

        if (w) {
          v.z = w.z + separation(v._, w._);
          v.m = v.z - midpoint;
        } else {
          v.z = midpoint;
        }
      } else if (w) {
        v.z = w.z + separation(v._, w._);
      }

      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }

    function secondWalk(v) {
      v._.x = v.z + v.parent.m;
      v.m += v.parent.m;
    }

    function apportion(v, w, ancestor) {
      if (w) {
        var vip = v,
            vop = v,
            vim = w,
            vom = vip.parent.children[0],
            sip = vip.m,
            sop = vop.m,
            sim = vim.m,
            som = vom.m,
            shift;

        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
          vom = d3_layout_treeLeft(vom);
          vop = d3_layout_treeRight(vop);
          vop.a = v;
          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);

          if (shift > 0) {
            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
            sip += shift;
            sop += shift;
          }

          sim += vim.m;
          sip += vip.m;
          som += vom.m;
          sop += vop.m;
        }

        if (vim && !d3_layout_treeRight(vop)) {
          vop.t = vim;
          vop.m += sim - sop;
        }

        if (vip && !d3_layout_treeLeft(vom)) {
          vom.t = vip;
          vom.m += sip - som;
          ancestor = v;
        }
      }

      return ancestor;
    }

    function sizeNode(node) {
      node.x *= size[0];
      node.y = node.depth * size[1];
    }

    tree.separation = function (x) {
      if (!arguments.length) return separation;
      separation = x;
      return tree;
    };

    tree.size = function (x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null ? sizeNode : null;
      return tree;
    };

    tree.nodeSize = function (x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) == null ? null : sizeNode;
      return tree;
    };

    return d3_layout_hierarchyRebind(tree, hierarchy);
  };

  function d3_layout_treeSeparation(a, b) {
    return a.parent == b.parent ? 1 : 2;
  }

  function d3_layout_treeLeft(v) {
    var children = v.children;
    return children.length ? children[0] : v.t;
  }

  function d3_layout_treeRight(v) {
    var children = v.children,
        n;
    return (n = children.length) ? children[n - 1] : v.t;
  }

  function d3_layout_treeMove(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
  }

  function d3_layout_treeShift(v) {
    var shift = 0,
        change = 0,
        children = v.children,
        i = children.length,
        w;

    while (--i >= 0) {
      w = children[i];
      w.z += shift;
      w.m += shift;
      shift += w.s + (change += w.c);
    }
  }

  function d3_layout_treeAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
  }

  d3.layout.cluster = function () {
    var hierarchy = d3.layout.hierarchy().sort(null).value(null),
        separation = d3_layout_treeSeparation,
        size = [1, 1],
        nodeSize = false;

    function cluster(d, i) {
      var nodes = hierarchy.call(this, d, i),
          root = nodes[0],
          previousNode,
          x = 0;
      d3_layout_hierarchyVisitAfter(root, function (node) {
        var children = node.children;

        if (children && children.length) {
          node.x = d3_layout_clusterX(children);
          node.y = d3_layout_clusterY(children);
        } else {
          node.x = previousNode ? x += separation(node, previousNode) : 0;
          node.y = 0;
          previousNode = node;
        }
      });
      var left = d3_layout_clusterLeft(root),
          right = d3_layout_clusterRight(root),
          x0 = left.x - separation(left, right) / 2,
          x1 = right.x + separation(right, left) / 2;
      d3_layout_hierarchyVisitAfter(root, nodeSize ? function (node) {
        node.x = (node.x - root.x) * size[0];
        node.y = (root.y - node.y) * size[1];
      } : function (node) {
        node.x = (node.x - x0) / (x1 - x0) * size[0];
        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
      });
      return nodes;
    }

    cluster.separation = function (x) {
      if (!arguments.length) return separation;
      separation = x;
      return cluster;
    };

    cluster.size = function (x) {
      if (!arguments.length) return nodeSize ? null : size;
      nodeSize = (size = x) == null;
      return cluster;
    };

    cluster.nodeSize = function (x) {
      if (!arguments.length) return nodeSize ? size : null;
      nodeSize = (size = x) != null;
      return cluster;
    };

    return d3_layout_hierarchyRebind(cluster, hierarchy);
  };

  function d3_layout_clusterY(children) {
    return 1 + d3.max(children, function (child) {
      return child.y;
    });
  }

  function d3_layout_clusterX(children) {
    return children.reduce(function (x, child) {
      return x + child.x;
    }, 0) / children.length;
  }

  function d3_layout_clusterLeft(node) {
    var children = node.children;
    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
  }

  function d3_layout_clusterRight(node) {
    var children = node.children,
        n;
    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
  }

  d3.layout.treemap = function () {
    var hierarchy = d3.layout.hierarchy(),
        round = Math.round,
        size = [1, 1],
        padding = null,
        pad = d3_layout_treemapPadNull,
        sticky = false,
        stickies,
        mode = "squarify",
        ratio = .5 * (1 + Math.sqrt(5));

    function scale(children, k) {
      var i = -1,
          n = children.length,
          child,
          area;

      while (++i < n) {
        area = (child = children[i]).value * (k < 0 ? 0 : k);
        child.area = isNaN(area) || area <= 0 ? 0 : area;
      }
    }

    function squarify(node) {
      var children = node.children;

      if (children && children.length) {
        var rect = pad(node),
            row = [],
            remaining = children.slice(),
            child,
            best = Infinity,
            score,
            u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy),
            n;
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;

        while ((n = remaining.length) > 0) {
          row.push(child = remaining[n - 1]);
          row.area += child.area;

          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
            remaining.pop();
            best = score;
          } else {
            row.area -= row.pop().area;
            position(row, u, rect, false);
            u = Math.min(rect.dx, rect.dy);
            row.length = row.area = 0;
            best = Infinity;
          }
        }

        if (row.length) {
          position(row, u, rect, true);
          row.length = row.area = 0;
        }

        children.forEach(squarify);
      }
    }

    function stickify(node) {
      var children = node.children;

      if (children && children.length) {
        var rect = pad(node),
            remaining = children.slice(),
            child,
            row = [];
        scale(remaining, rect.dx * rect.dy / node.value);
        row.area = 0;

        while (child = remaining.pop()) {
          row.push(child);
          row.area += child.area;

          if (child.z != null) {
            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
            row.length = row.area = 0;
          }
        }

        children.forEach(stickify);
      }
    }

    function worst(row, u) {
      var s = row.area,
          r,
          rmax = 0,
          rmin = Infinity,
          i = -1,
          n = row.length;

      while (++i < n) {
        if (!(r = row[i].area)) continue;
        if (r < rmin) rmin = r;
        if (r > rmax) rmax = r;
      }

      s *= s;
      u *= u;
      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
    }

    function position(row, u, rect, flush) {
      var i = -1,
          n = row.length,
          x = rect.x,
          y = rect.y,
          v = u ? round(row.area / u) : 0,
          o;

      if (u == rect.dx) {
        if (flush || v > rect.dy) v = rect.dy;

        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dy = v;
          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
        }

        o.z = true;
        o.dx += rect.x + rect.dx - x;
        rect.y += v;
        rect.dy -= v;
      } else {
        if (flush || v > rect.dx) v = rect.dx;

        while (++i < n) {
          o = row[i];
          o.x = x;
          o.y = y;
          o.dx = v;
          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
        }

        o.z = false;
        o.dy += rect.y + rect.dy - y;
        rect.x += v;
        rect.dx -= v;
      }
    }

    function treemap(d) {
      var nodes = stickies || hierarchy(d),
          root = nodes[0];
      root.x = root.y = 0;
      if (root.value) root.dx = size[0], root.dy = size[1];else root.dx = root.dy = 0;
      if (stickies) hierarchy.revalue(root);
      scale([root], root.dx * root.dy / root.value);
      (stickies ? stickify : squarify)(root);
      if (sticky) stickies = nodes;
      return nodes;
    }

    treemap.size = function (x) {
      if (!arguments.length) return size;
      size = x;
      return treemap;
    };

    treemap.padding = function (x) {
      if (!arguments.length) return padding;

      function padFunction(node) {
        var p = x.call(treemap, node, node.depth);
        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p);
      }

      function padConstant(node) {
        return d3_layout_treemapPad(node, x);
      }

      var type;
      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = _typeof(x)) === "function" ? padFunction : type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
      return treemap;
    };

    treemap.round = function (x) {
      if (!arguments.length) return round != Number;
      round = x ? Math.round : Number;
      return treemap;
    };

    treemap.sticky = function (x) {
      if (!arguments.length) return sticky;
      sticky = x;
      stickies = null;
      return treemap;
    };

    treemap.ratio = function (x) {
      if (!arguments.length) return ratio;
      ratio = x;
      return treemap;
    };

    treemap.mode = function (x) {
      if (!arguments.length) return mode;
      mode = x + "";
      return treemap;
    };

    return d3_layout_hierarchyRebind(treemap, hierarchy);
  };

  function d3_layout_treemapPadNull(node) {
    return {
      x: node.x,
      y: node.y,
      dx: node.dx,
      dy: node.dy
    };
  }

  function d3_layout_treemapPad(node, padding) {
    var x = node.x + padding[3],
        y = node.y + padding[0],
        dx = node.dx - padding[1] - padding[3],
        dy = node.dy - padding[0] - padding[2];

    if (dx < 0) {
      x += dx / 2;
      dx = 0;
    }

    if (dy < 0) {
      y += dy / 2;
      dy = 0;
    }

    return {
      x: x,
      y: y,
      dx: dx,
      dy: dy
    };
  }

  d3.random = {
    normal: function normal(µ, σ) {
      var n = arguments.length;
      if (n < 2) σ = 1;
      if (n < 1) µ = 0;
      return function () {
        var x, y, r;

        do {
          x = Math.random() * 2 - 1;
          y = Math.random() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);

        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
      };
    },
    logNormal: function logNormal() {
      var random = d3.random.normal.apply(d3, arguments);
      return function () {
        return Math.exp(random());
      };
    },
    bates: function bates(m) {
      var random = d3.random.irwinHall(m);
      return function () {
        return random() / m;
      };
    },
    irwinHall: function irwinHall(m) {
      return function () {
        for (var s = 0, j = 0; j < m; j++) {
          s += Math.random();
        }

        return s;
      };
    }
  };
  d3.scale = {};

  function d3_scaleExtent(domain) {
    var start = domain[0],
        stop = domain[domain.length - 1];
    return start < stop ? [start, stop] : [stop, start];
  }

  function d3_scaleRange(scale) {
    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
  }

  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
    var u = uninterpolate(domain[0], domain[1]),
        i = interpolate(range[0], range[1]);
    return function (x) {
      return i(u(x));
    };
  }

  function d3_scale_nice(domain, nice) {
    var i0 = 0,
        i1 = domain.length - 1,
        x0 = domain[i0],
        x1 = domain[i1],
        dx;

    if (x1 < x0) {
      dx = i0, i0 = i1, i1 = dx;
      dx = x0, x0 = x1, x1 = dx;
    }

    domain[i0] = nice.floor(x0);
    domain[i1] = nice.ceil(x1);
    return domain;
  }

  function d3_scale_niceStep(step) {
    return step ? {
      floor: function floor(x) {
        return Math.floor(x / step) * step;
      },
      ceil: function ceil(x) {
        return Math.ceil(x / step) * step;
      }
    } : d3_scale_niceIdentity;
  }

  var d3_scale_niceIdentity = {
    floor: d3_identity,
    ceil: d3_identity
  };

  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
    var u = [],
        i = [],
        j = 0,
        k = Math.min(domain.length, range.length) - 1;

    if (domain[k] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++j <= k) {
      u.push(uninterpolate(domain[j - 1], domain[j]));
      i.push(interpolate(range[j - 1], range[j]));
    }

    return function (x) {
      var j = d3.bisect(domain, x, 1, k) - 1;
      return i[j](u[j](x));
    };
  }

  d3.scale.linear = function () {
    return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false);
  };

  function d3_scale_linear(domain, range, interpolate, clamp) {
    var output, input;

    function rescale() {
      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear,
          uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
      output = linear(domain, range, uninterpolate, interpolate);
      input = linear(range, domain, uninterpolate, d3_interpolate);
      return scale;
    }

    function scale(x) {
      return output(x);
    }

    scale.invert = function (y) {
      return input(y);
    };

    scale.domain = function (x) {
      if (!arguments.length) return domain;
      domain = x.map(Number);
      return rescale();
    };

    scale.range = function (x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };

    scale.rangeRound = function (x) {
      return scale.range(x).interpolate(d3_interpolateRound);
    };

    scale.clamp = function (x) {
      if (!arguments.length) return clamp;
      clamp = x;
      return rescale();
    };

    scale.interpolate = function (x) {
      if (!arguments.length) return interpolate;
      interpolate = x;
      return rescale();
    };

    scale.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };

    scale.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };

    scale.nice = function (m) {
      d3_scale_linearNice(domain, m);
      return rescale();
    };

    scale.copy = function () {
      return d3_scale_linear(domain, range, interpolate, clamp);
    };

    return rescale();
  }

  function d3_scale_linearRebind(scale, linear) {
    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
  }

  function d3_scale_linearNice(domain, m) {
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
    return domain;
  }

  function d3_scale_linearTickRange(domain, m) {
    if (m == null) m = 10;
    var extent = d3_scaleExtent(domain),
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step;
    if (err <= .15) step *= 10;else if (err <= .35) step *= 5;else if (err <= .75) step *= 2;
    extent[0] = Math.ceil(extent[0] / step) * step;
    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
    extent[2] = step;
    return extent;
  }

  function d3_scale_linearTicks(domain, m) {
    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
  }

  function d3_scale_linearTickFormat(domain, m, format) {
    var range = d3_scale_linearTickRange(domain, m);

    if (format) {
      var match = d3_format_re.exec(format);
      match.shift();

      if (match[8] === "s") {
        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
        match[8] = "f";
        format = d3.format(match.join(""));
        return function (d) {
          return format(prefix.scale(d)) + prefix.symbol;
        };
      }

      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
      format = match.join("");
    } else {
      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
    }

    return d3.format(format);
  }

  var d3_scale_linearFormatSignificant = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };

  function d3_scale_linearPrecision(value) {
    return -Math.floor(Math.log(value) / Math.LN10 + .01);
  }

  function d3_scale_linearFormatPrecision(type, range) {
    var p = d3_scale_linearPrecision(range[2]);
    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
  }

  d3.scale.log = function () {
    return d3_scale_log(d3.scale.linear().domain([0, 1]), 10, true, [1, 10]);
  };

  function d3_scale_log(linear, base, positive, domain) {
    function log(x) {
      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
    }

    function pow(x) {
      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
    }

    function scale(x) {
      return linear(log(x));
    }

    scale.invert = function (x) {
      return pow(linear.invert(x));
    };

    scale.domain = function (x) {
      if (!arguments.length) return domain;
      positive = x[0] >= 0;
      linear.domain((domain = x.map(Number)).map(log));
      return scale;
    };

    scale.base = function (_) {
      if (!arguments.length) return base;
      base = +_;
      linear.domain(domain.map(log));
      return scale;
    };

    scale.nice = function () {
      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
      linear.domain(niced);
      domain = niced.map(pow);
      return scale;
    };

    scale.ticks = function () {
      var extent = d3_scaleExtent(domain),
          ticks = [],
          u = extent[0],
          v = extent[1],
          i = Math.floor(log(u)),
          j = Math.ceil(log(v)),
          n = base % 1 ? 2 : base;

      if (isFinite(j - i)) {
        if (positive) {
          for (; i < j; i++) {
            for (var k = 1; k < n; k++) {
              ticks.push(pow(i) * k);
            }
          }

          ticks.push(pow(i));
        } else {
          ticks.push(pow(i));

          for (; i++ < j;) {
            for (var k = n - 1; k > 0; k--) {
              ticks.push(pow(i) * k);
            }
          }
        }

        for (i = 0; ticks[i] < u; i++) {}

        for (j = ticks.length; ticks[j - 1] > v; j--) {}

        ticks = ticks.slice(i, j);
      }

      return ticks;
    };

    scale.tickFormat = function (n, format) {
      if (!arguments.length) return d3_scale_logFormat;
      if (arguments.length < 2) format = d3_scale_logFormat;else if (typeof format !== "function") format = d3.format(format);
      var k = Math.max(1, base * n / scale.ticks().length);
      return function (d) {
        var i = d / pow(Math.round(log(d)));
        if (i * base < base - .5) i *= base;
        return i <= k ? format(d) : "";
      };
    };

    scale.copy = function () {
      return d3_scale_log(linear.copy(), base, positive, domain);
    };

    return d3_scale_linearRebind(scale, linear);
  }

  var d3_scale_logFormat = d3.format(".0e"),
      d3_scale_logNiceNegative = {
    floor: function floor(x) {
      return -Math.ceil(-x);
    },
    ceil: function ceil(x) {
      return -Math.floor(-x);
    }
  };

  d3.scale.pow = function () {
    return d3_scale_pow(d3.scale.linear(), 1, [0, 1]);
  };

  function d3_scale_pow(linear, exponent, domain) {
    var powp = d3_scale_powPow(exponent),
        powb = d3_scale_powPow(1 / exponent);

    function scale(x) {
      return linear(powp(x));
    }

    scale.invert = function (x) {
      return powb(linear.invert(x));
    };

    scale.domain = function (x) {
      if (!arguments.length) return domain;
      linear.domain((domain = x.map(Number)).map(powp));
      return scale;
    };

    scale.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };

    scale.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };

    scale.nice = function (m) {
      return scale.domain(d3_scale_linearNice(domain, m));
    };

    scale.exponent = function (x) {
      if (!arguments.length) return exponent;
      powp = d3_scale_powPow(exponent = x);
      powb = d3_scale_powPow(1 / exponent);
      linear.domain(domain.map(powp));
      return scale;
    };

    scale.copy = function () {
      return d3_scale_pow(linear.copy(), exponent, domain);
    };

    return d3_scale_linearRebind(scale, linear);
  }

  function d3_scale_powPow(e) {
    return function (x) {
      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
    };
  }

  d3.scale.sqrt = function () {
    return d3.scale.pow().exponent(.5);
  };

  d3.scale.ordinal = function () {
    return d3_scale_ordinal([], {
      t: "range",
      a: [[]]
    });
  };

  function d3_scale_ordinal(domain, ranger) {
    var index, range, rangeBand;

    function scale(x) {
      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
    }

    function steps(start, step) {
      return d3.range(domain.length).map(function (i) {
        return start + step * i;
      });
    }

    scale.domain = function (x) {
      if (!arguments.length) return domain;
      domain = [];
      index = new d3_Map();
      var i = -1,
          n = x.length,
          xi;

      while (++i < n) {
        if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
      }

      return scale[ranger.t].apply(scale, ranger.a);
    };

    scale.range = function (x) {
      if (!arguments.length) return range;
      range = x;
      rangeBand = 0;
      ranger = {
        t: "range",
        a: arguments
      };
      return scale;
    };

    scale.rangePoints = function (x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0],
          stop = x[1],
          step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
      range = steps(start + step * padding / 2, step);
      rangeBand = 0;
      ranger = {
        t: "rangePoints",
        a: arguments
      };
      return scale;
    };

    scale.rangeRoundPoints = function (x, padding) {
      if (arguments.length < 2) padding = 0;
      var start = x[0],
          stop = x[1],
          step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
      rangeBand = 0;
      ranger = {
        t: "rangeRoundPoints",
        a: arguments
      };
      return scale;
    };

    scale.rangeBands = function (x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0],
          start = x[reverse - 0],
          stop = x[1 - reverse],
          step = (stop - start) / (domain.length - padding + 2 * outerPadding);
      range = steps(start + step * outerPadding, step);
      if (reverse) range.reverse();
      rangeBand = step * (1 - padding);
      ranger = {
        t: "rangeBands",
        a: arguments
      };
      return scale;
    };

    scale.rangeRoundBands = function (x, padding, outerPadding) {
      if (arguments.length < 2) padding = 0;
      if (arguments.length < 3) outerPadding = padding;
      var reverse = x[1] < x[0],
          start = x[reverse - 0],
          stop = x[1 - reverse],
          step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
      if (reverse) range.reverse();
      rangeBand = Math.round(step * (1 - padding));
      ranger = {
        t: "rangeRoundBands",
        a: arguments
      };
      return scale;
    };

    scale.rangeBand = function () {
      return rangeBand;
    };

    scale.rangeExtent = function () {
      return d3_scaleExtent(ranger.a[0]);
    };

    scale.copy = function () {
      return d3_scale_ordinal(domain, ranger);
    };

    return scale.domain(domain);
  }

  d3.scale.category10 = function () {
    return d3.scale.ordinal().range(d3_category10);
  };

  d3.scale.category20 = function () {
    return d3.scale.ordinal().range(d3_category20);
  };

  d3.scale.category20b = function () {
    return d3.scale.ordinal().range(d3_category20b);
  };

  d3.scale.category20c = function () {
    return d3.scale.ordinal().range(d3_category20c);
  };

  var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
  var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
  var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
  var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);

  d3.scale.quantile = function () {
    return d3_scale_quantile([], []);
  };

  function d3_scale_quantile(domain, range) {
    var thresholds;

    function rescale() {
      var k = 0,
          q = range.length;
      thresholds = [];

      while (++k < q) {
        thresholds[k - 1] = d3.quantile(domain, k / q);
      }

      return scale;
    }

    function scale(x) {
      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
    }

    scale.domain = function (x) {
      if (!arguments.length) return domain;
      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
      return rescale();
    };

    scale.range = function (x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };

    scale.quantiles = function () {
      return thresholds;
    };

    scale.invertExtent = function (y) {
      y = range.indexOf(y);
      return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]];
    };

    scale.copy = function () {
      return d3_scale_quantile(domain, range);
    };

    return rescale();
  }

  d3.scale.quantize = function () {
    return d3_scale_quantize(0, 1, [0, 1]);
  };

  function d3_scale_quantize(x0, x1, range) {
    var kx, i;

    function scale(x) {
      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
    }

    function rescale() {
      kx = range.length / (x1 - x0);
      i = range.length - 1;
      return scale;
    }

    scale.domain = function (x) {
      if (!arguments.length) return [x0, x1];
      x0 = +x[0];
      x1 = +x[x.length - 1];
      return rescale();
    };

    scale.range = function (x) {
      if (!arguments.length) return range;
      range = x;
      return rescale();
    };

    scale.invertExtent = function (y) {
      y = range.indexOf(y);
      y = y < 0 ? NaN : y / kx + x0;
      return [y, y + 1 / kx];
    };

    scale.copy = function () {
      return d3_scale_quantize(x0, x1, range);
    };

    return rescale();
  }

  d3.scale.threshold = function () {
    return d3_scale_threshold([.5], [0, 1]);
  };

  function d3_scale_threshold(domain, range) {
    function scale(x) {
      if (x <= x) return range[d3.bisect(domain, x)];
    }

    scale.domain = function (_) {
      if (!arguments.length) return domain;
      domain = _;
      return scale;
    };

    scale.range = function (_) {
      if (!arguments.length) return range;
      range = _;
      return scale;
    };

    scale.invertExtent = function (y) {
      y = range.indexOf(y);
      return [domain[y - 1], domain[y]];
    };

    scale.copy = function () {
      return d3_scale_threshold(domain, range);
    };

    return scale;
  }

  d3.scale.identity = function () {
    return d3_scale_identity([0, 1]);
  };

  function d3_scale_identity(domain) {
    function identity(x) {
      return +x;
    }

    identity.invert = identity;

    identity.domain = identity.range = function (x) {
      if (!arguments.length) return domain;
      domain = x.map(identity);
      return identity;
    };

    identity.ticks = function (m) {
      return d3_scale_linearTicks(domain, m);
    };

    identity.tickFormat = function (m, format) {
      return d3_scale_linearTickFormat(domain, m, format);
    };

    identity.copy = function () {
      return d3_scale_identity(domain);
    };

    return identity;
  }

  d3.svg = {};

  function d3_zero() {
    return 0;
  }

  d3.svg.arc = function () {
    var innerRadius = d3_svg_arcInnerRadius,
        outerRadius = d3_svg_arcOuterRadius,
        cornerRadius = d3_zero,
        padRadius = d3_svg_arcAuto,
        startAngle = d3_svg_arcStartAngle,
        endAngle = d3_svg_arcEndAngle,
        padAngle = d3_svg_arcPadAngle;

    function arc() {
      var r0 = Math.max(0, +innerRadius.apply(this, arguments)),
          r1 = Math.max(0, +outerRadius.apply(this, arguments)),
          a0 = startAngle.apply(this, arguments) - halfπ,
          a1 = endAngle.apply(this, arguments) - halfπ,
          da = Math.abs(a1 - a0),
          cw = a0 > a1 ? 0 : 1;
      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
      var rc,
          cr,
          rp,
          ap,
          p0 = 0,
          p1 = 0,
          x0,
          y0,
          x1,
          y1,
          x2,
          y2,
          x3,
          y3,
          path = [];

      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
        if (!cw) p1 *= -1;
        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
      }

      if (r1) {
        x0 = r1 * Math.cos(a0 + p1);
        y0 = r1 * Math.sin(a0 + p1);
        x1 = r1 * Math.cos(a1 - p1);
        y1 = r1 * Math.sin(a1 - p1);
        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;

        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
          var h1 = (a0 + a1) / 2;
          x0 = r1 * Math.cos(h1);
          y0 = r1 * Math.sin(h1);
          x1 = y1 = null;
        }
      } else {
        x0 = y0 = 0;
      }

      if (r0) {
        x2 = r0 * Math.cos(a1 - p0);
        y2 = r0 * Math.sin(a1 - p0);
        x3 = r0 * Math.cos(a0 + p0);
        y3 = r0 * Math.sin(a0 + p0);
        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;

        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
          var h0 = (a0 + a1) / 2;
          x2 = r0 * Math.cos(h0);
          y2 = r0 * Math.sin(h0);
          x3 = y3 = null;
        }
      } else {
        x2 = y2 = 0;
      }

      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
        cr = r0 < r1 ^ cw ? 0 : 1;
        var rc1 = rc,
            rc0 = rc;

        if (da < π) {
          var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]),
              ax = x0 - oc[0],
              ay = y0 - oc[1],
              bx = x1 - oc[0],
              by = y1 - oc[1],
              kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
              lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
        }

        if (x1 != null) {
          var t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw),
              t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);

          if (rc === rc1) {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
          } else {
            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
          }
        } else {
          path.push("M", x0, ",", y0);
        }

        if (x3 != null) {
          var t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw),
              t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);

          if (rc === rc0) {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          } else {
            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
          }
        } else {
          path.push("L", x2, ",", y2);
        }
      } else {
        path.push("M", x0, ",", y0);
        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
        path.push("L", x2, ",", y2);
        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
      }

      path.push("Z");
      return path.join("");
    }

    function circleSegment(r1, cw) {
      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
    }

    arc.innerRadius = function (v) {
      if (!arguments.length) return innerRadius;
      innerRadius = d3_functor(v);
      return arc;
    };

    arc.outerRadius = function (v) {
      if (!arguments.length) return outerRadius;
      outerRadius = d3_functor(v);
      return arc;
    };

    arc.cornerRadius = function (v) {
      if (!arguments.length) return cornerRadius;
      cornerRadius = d3_functor(v);
      return arc;
    };

    arc.padRadius = function (v) {
      if (!arguments.length) return padRadius;
      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
      return arc;
    };

    arc.startAngle = function (v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return arc;
    };

    arc.endAngle = function (v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return arc;
    };

    arc.padAngle = function (v) {
      if (!arguments.length) return padAngle;
      padAngle = d3_functor(v);
      return arc;
    };

    arc.centroid = function () {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
      return [Math.cos(a) * r, Math.sin(a) * r];
    };

    return arc;
  };

  var d3_svg_arcAuto = "auto";

  function d3_svg_arcInnerRadius(d) {
    return d.innerRadius;
  }

  function d3_svg_arcOuterRadius(d) {
    return d.outerRadius;
  }

  function d3_svg_arcStartAngle(d) {
    return d.startAngle;
  }

  function d3_svg_arcEndAngle(d) {
    return d.endAngle;
  }

  function d3_svg_arcPadAngle(d) {
    return d && d.padAngle;
  }

  function d3_svg_arcSweep(x0, y0, x1, y1) {
    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
  }

  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
    var x01 = p0[0] - p1[0],
        y01 = p0[1] - p1[1],
        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
        ox = lo * y01,
        oy = -lo * x01,
        x1 = p0[0] + ox,
        y1 = p0[1] + oy,
        x2 = p1[0] + ox,
        y2 = p1[1] + oy,
        x3 = (x1 + x2) / 2,
        y3 = (y1 + y2) / 2,
        dx = x2 - x1,
        dy = y2 - y1,
        d2 = dx * dx + dy * dy,
        r = r1 - rc,
        D = x1 * y2 - x2 * y1,
        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
        cx0 = (D * dy - dx * d) / d2,
        cy0 = (-D * dx - dy * d) / d2,
        cx1 = (D * dy + dx * d) / d2,
        cy1 = (-D * dx + dy * d) / d2,
        dx0 = cx0 - x3,
        dy0 = cy0 - y3,
        dx1 = cx1 - x3,
        dy1 = cy1 - y3;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]];
  }

  function d3_svg_line(projection) {
    var x = d3_geom_pointX,
        y = d3_geom_pointY,
        defined = d3_true,
        interpolate = d3_svg_lineLinear,
        interpolateKey = interpolate.key,
        tension = .7;

    function line(data) {
      var segments = [],
          points = [],
          i = -1,
          n = data.length,
          d,
          fx = d3_functor(x),
          fy = d3_functor(y);

      function segment() {
        segments.push("M", interpolate(projection(points), tension));
      }

      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points.push([+fx.call(this, d, i), +fy.call(this, d, i)]);
        } else if (points.length) {
          segment();
          points = [];
        }
      }

      if (points.length) segment();
      return segments.length ? segments.join("") : null;
    }

    line.x = function (_) {
      if (!arguments.length) return x;
      x = _;
      return line;
    };

    line.y = function (_) {
      if (!arguments.length) return y;
      y = _;
      return line;
    };

    line.defined = function (_) {
      if (!arguments.length) return defined;
      defined = _;
      return line;
    };

    line.interpolate = function (_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _;else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      return line;
    };

    line.tension = function (_) {
      if (!arguments.length) return tension;
      tension = _;
      return line;
    };

    return line;
  }

  d3.svg.line = function () {
    return d3_svg_line(d3_identity);
  };

  var d3_svg_lineInterpolators = d3.map({
    linear: d3_svg_lineLinear,
    "linear-closed": d3_svg_lineLinearClosed,
    step: d3_svg_lineStep,
    "step-before": d3_svg_lineStepBefore,
    "step-after": d3_svg_lineStepAfter,
    basis: d3_svg_lineBasis,
    "basis-open": d3_svg_lineBasisOpen,
    "basis-closed": d3_svg_lineBasisClosed,
    bundle: d3_svg_lineBundle,
    cardinal: d3_svg_lineCardinal,
    "cardinal-open": d3_svg_lineCardinalOpen,
    "cardinal-closed": d3_svg_lineCardinalClosed,
    monotone: d3_svg_lineMonotone
  });
  d3_svg_lineInterpolators.forEach(function (key, value) {
    value.key = key;
    value.closed = /-closed$/.test(key);
  });

  function d3_svg_lineLinear(points) {
    return points.length > 1 ? points.join("L") : points + "Z";
  }

  function d3_svg_lineLinearClosed(points) {
    return points.join("L") + "Z";
  }

  function d3_svg_lineStep(points) {
    var i = 0,
        n = points.length,
        p = points[0],
        path = [p[0], ",", p[1]];

    while (++i < n) {
      path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
    }

    if (n > 1) path.push("H", p[0]);
    return path.join("");
  }

  function d3_svg_lineStepBefore(points) {
    var i = 0,
        n = points.length,
        p = points[0],
        path = [p[0], ",", p[1]];

    while (++i < n) {
      path.push("V", (p = points[i])[1], "H", p[0]);
    }

    return path.join("");
  }

  function d3_svg_lineStepAfter(points) {
    var i = 0,
        n = points.length,
        p = points[0],
        path = [p[0], ",", p[1]];

    while (++i < n) {
      path.push("H", (p = points[i])[0], "V", p[1]);
    }

    return path.join("");
  }

  function d3_svg_lineCardinalOpen(points, tension) {
    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
  }

  function d3_svg_lineCardinalClosed(points, tension) {
    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension));
  }

  function d3_svg_lineCardinal(points, tension) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
  }

  function d3_svg_lineHermite(points, tangents) {
    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
      return d3_svg_lineLinear(points);
    }

    var quad = points.length != tangents.length,
        path = "",
        p0 = points[0],
        p = points[1],
        t0 = tangents[0],
        t = t0,
        pi = 1;

    if (quad) {
      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
      p0 = points[1];
      pi = 2;
    }

    if (tangents.length > 1) {
      t = tangents[1];
      p = points[pi];
      pi++;
      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];

      for (var i = 2; i < tangents.length; i++, pi++) {
        p = points[pi];
        t = tangents[i];
        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
      }
    }

    if (quad) {
      var lp = points[pi];
      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
    }

    return path;
  }

  function d3_svg_lineCardinalTangents(points, tension) {
    var tangents = [],
        a = (1 - tension) / 2,
        p0,
        p1 = points[0],
        p2 = points[1],
        i = 1,
        n = points.length;

    while (++i < n) {
      p0 = p1;
      p1 = p2;
      p2 = points[i];
      tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])]);
    }

    return tangents;
  }

  function d3_svg_lineBasis(points) {
    if (points.length < 3) return d3_svg_lineLinear(points);
    var i = 1,
        n = points.length,
        pi = points[0],
        x0 = pi[0],
        y0 = pi[1],
        px = [x0, x0, x0, (pi = points[1])[0]],
        py = [y0, y0, y0, pi[1]],
        path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
    points.push(points[n - 1]);

    while (++i <= n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }

    points.pop();
    path.push("L", pi);
    return path.join("");
  }

  function d3_svg_lineBasisOpen(points) {
    if (points.length < 4) return d3_svg_lineLinear(points);
    var path = [],
        i = -1,
        n = points.length,
        pi,
        px = [0],
        py = [0];

    while (++i < 3) {
      pi = points[i];
      px.push(pi[0]);
      py.push(pi[1]);
    }

    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
    --i;

    while (++i < n) {
      pi = points[i];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }

    return path.join("");
  }

  function d3_svg_lineBasisClosed(points) {
    var path,
        i = -1,
        n = points.length,
        m = n + 4,
        pi,
        px = [],
        py = [];

    while (++i < 4) {
      pi = points[i % n];
      px.push(pi[0]);
      py.push(pi[1]);
    }

    path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
    --i;

    while (++i < m) {
      pi = points[i % n];
      px.shift();
      px.push(pi[0]);
      py.shift();
      py.push(pi[1]);
      d3_svg_lineBasisBezier(path, px, py);
    }

    return path.join("");
  }

  function d3_svg_lineBundle(points, tension) {
    var n = points.length - 1;

    if (n) {
      var x0 = points[0][0],
          y0 = points[0][1],
          dx = points[n][0] - x0,
          dy = points[n][1] - y0,
          i = -1,
          p,
          t;

      while (++i <= n) {
        p = points[i];
        t = i / n;
        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
      }
    }

    return d3_svg_lineBasis(points);
  }

  function d3_svg_lineDot4(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
  }

  var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0],
      d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0],
      d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];

  function d3_svg_lineBasisBezier(path, x, y) {
    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
  }

  function d3_svg_lineSlope(p0, p1) {
    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
  }

  function d3_svg_lineFiniteDifferences(points) {
    var i = 0,
        j = points.length - 1,
        m = [],
        p0 = points[0],
        p1 = points[1],
        d = m[0] = d3_svg_lineSlope(p0, p1);

    while (++i < j) {
      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
    }

    m[i] = d;
    return m;
  }

  function d3_svg_lineMonotoneTangents(points) {
    var tangents = [],
        d,
        a,
        b,
        s,
        m = d3_svg_lineFiniteDifferences(points),
        i = -1,
        j = points.length - 1;

    while (++i < j) {
      d = d3_svg_lineSlope(points[i], points[i + 1]);

      if (abs(d) < ε) {
        m[i] = m[i + 1] = 0;
      } else {
        a = m[i] / d;
        b = m[i + 1] / d;
        s = a * a + b * b;

        if (s > 9) {
          s = d * 3 / Math.sqrt(s);
          m[i] = s * a;
          m[i + 1] = s * b;
        }
      }
    }

    i = -1;

    while (++i <= j) {
      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
      tangents.push([s || 0, m[i] * s || 0]);
    }

    return tangents;
  }

  function d3_svg_lineMonotone(points) {
    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
  }

  d3.svg.line.radial = function () {
    var line = d3_svg_line(d3_svg_lineRadial);
    line.radius = line.x, delete line.x;
    line.angle = line.y, delete line.y;
    return line;
  };

  function d3_svg_lineRadial(points) {
    var point,
        i = -1,
        n = points.length,
        r,
        a;

    while (++i < n) {
      point = points[i];
      r = point[0];
      a = point[1] - halfπ;
      point[0] = r * Math.cos(a);
      point[1] = r * Math.sin(a);
    }

    return points;
  }

  function d3_svg_area(projection) {
    var x0 = d3_geom_pointX,
        x1 = d3_geom_pointX,
        y0 = 0,
        y1 = d3_geom_pointY,
        defined = d3_true,
        interpolate = d3_svg_lineLinear,
        interpolateKey = interpolate.key,
        interpolateReverse = interpolate,
        L = "L",
        tension = .7;

    function area(data) {
      var segments = [],
          points0 = [],
          points1 = [],
          i = -1,
          n = data.length,
          d,
          fx0 = d3_functor(x0),
          fy0 = d3_functor(y0),
          fx1 = x0 === x1 ? function () {
        return x;
      } : d3_functor(x1),
          fy1 = y0 === y1 ? function () {
        return y;
      } : d3_functor(y1),
          x,
          y;

      function segment() {
        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
      }

      while (++i < n) {
        if (defined.call(this, d = data[i], i)) {
          points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
          points1.push([+fx1.call(this, d, i), +fy1.call(this, d, i)]);
        } else if (points0.length) {
          segment();
          points0 = [];
          points1 = [];
        }
      }

      if (points0.length) segment();
      return segments.length ? segments.join("") : null;
    }

    area.x = function (_) {
      if (!arguments.length) return x1;
      x0 = x1 = _;
      return area;
    };

    area.x0 = function (_) {
      if (!arguments.length) return x0;
      x0 = _;
      return area;
    };

    area.x1 = function (_) {
      if (!arguments.length) return x1;
      x1 = _;
      return area;
    };

    area.y = function (_) {
      if (!arguments.length) return y1;
      y0 = y1 = _;
      return area;
    };

    area.y0 = function (_) {
      if (!arguments.length) return y0;
      y0 = _;
      return area;
    };

    area.y1 = function (_) {
      if (!arguments.length) return y1;
      y1 = _;
      return area;
    };

    area.defined = function (_) {
      if (!arguments.length) return defined;
      defined = _;
      return area;
    };

    area.interpolate = function (_) {
      if (!arguments.length) return interpolateKey;
      if (typeof _ === "function") interpolateKey = interpolate = _;else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
      interpolateReverse = interpolate.reverse || interpolate;
      L = interpolate.closed ? "M" : "L";
      return area;
    };

    area.tension = function (_) {
      if (!arguments.length) return tension;
      tension = _;
      return area;
    };

    return area;
  }

  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;

  d3.svg.area = function () {
    return d3_svg_area(d3_identity);
  };

  d3.svg.area.radial = function () {
    var area = d3_svg_area(d3_svg_lineRadial);
    area.radius = area.x, delete area.x;
    area.innerRadius = area.x0, delete area.x0;
    area.outerRadius = area.x1, delete area.x1;
    area.angle = area.y, delete area.y;
    area.startAngle = area.y0, delete area.y0;
    area.endAngle = area.y1, delete area.y1;
    return area;
  };

  d3.svg.chord = function () {
    var source = d3_source,
        target = d3_target,
        radius = d3_svg_chordRadius,
        startAngle = d3_svg_arcStartAngle,
        endAngle = d3_svg_arcEndAngle;

    function chord(d, i) {
      var s = subgroup(this, source, d, i),
          t = subgroup(this, target, d, i);
      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
    }

    function subgroup(self, f, d, i) {
      var subgroup = f.call(self, d, i),
          r = radius.call(self, subgroup, i),
          a0 = startAngle.call(self, subgroup, i) - halfπ,
          a1 = endAngle.call(self, subgroup, i) - halfπ;
      return {
        r: r,
        a0: a0,
        a1: a1,
        p0: [r * Math.cos(a0), r * Math.sin(a0)],
        p1: [r * Math.cos(a1), r * Math.sin(a1)]
      };
    }

    function equals(a, b) {
      return a.a0 == b.a0 && a.a1 == b.a1;
    }

    function arc(r, p, a) {
      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
    }

    function curve(r0, p0, r1, p1) {
      return "Q 0,0 " + p1;
    }

    chord.radius = function (v) {
      if (!arguments.length) return radius;
      radius = d3_functor(v);
      return chord;
    };

    chord.source = function (v) {
      if (!arguments.length) return source;
      source = d3_functor(v);
      return chord;
    };

    chord.target = function (v) {
      if (!arguments.length) return target;
      target = d3_functor(v);
      return chord;
    };

    chord.startAngle = function (v) {
      if (!arguments.length) return startAngle;
      startAngle = d3_functor(v);
      return chord;
    };

    chord.endAngle = function (v) {
      if (!arguments.length) return endAngle;
      endAngle = d3_functor(v);
      return chord;
    };

    return chord;
  };

  function d3_svg_chordRadius(d) {
    return d.radius;
  }

  d3.svg.diagonal = function () {
    var source = d3_source,
        target = d3_target,
        projection = d3_svg_diagonalProjection;

    function diagonal(d, i) {
      var p0 = source.call(this, d, i),
          p3 = target.call(this, d, i),
          m = (p0.y + p3.y) / 2,
          p = [p0, {
        x: p0.x,
        y: m
      }, {
        x: p3.x,
        y: m
      }, p3];
      p = p.map(projection);
      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
    }

    diagonal.source = function (x) {
      if (!arguments.length) return source;
      source = d3_functor(x);
      return diagonal;
    };

    diagonal.target = function (x) {
      if (!arguments.length) return target;
      target = d3_functor(x);
      return diagonal;
    };

    diagonal.projection = function (x) {
      if (!arguments.length) return projection;
      projection = x;
      return diagonal;
    };

    return diagonal;
  };

  function d3_svg_diagonalProjection(d) {
    return [d.x, d.y];
  }

  d3.svg.diagonal.radial = function () {
    var diagonal = d3.svg.diagonal(),
        projection = d3_svg_diagonalProjection,
        projection_ = diagonal.projection;

    diagonal.projection = function (x) {
      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
    };

    return diagonal;
  };

  function d3_svg_diagonalRadialProjection(projection) {
    return function () {
      var d = projection.apply(this, arguments),
          r = d[0],
          a = d[1] - halfπ;
      return [r * Math.cos(a), r * Math.sin(a)];
    };
  }

  d3.svg.symbol = function () {
    var type = d3_svg_symbolType,
        size = d3_svg_symbolSize;

    function symbol(d, i) {
      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
    }

    symbol.type = function (x) {
      if (!arguments.length) return type;
      type = d3_functor(x);
      return symbol;
    };

    symbol.size = function (x) {
      if (!arguments.length) return size;
      size = d3_functor(x);
      return symbol;
    };

    return symbol;
  };

  function d3_svg_symbolSize() {
    return 64;
  }

  function d3_svg_symbolType() {
    return "circle";
  }

  function d3_svg_symbolCircle(size) {
    var r = Math.sqrt(size / π);
    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
  }

  var d3_svg_symbols = d3.map({
    circle: d3_svg_symbolCircle,
    cross: function cross(size) {
      var r = Math.sqrt(size / 5) / 2;
      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
    },
    diamond: function diamond(size) {
      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)),
          rx = ry * d3_svg_symbolTan30;
      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
    },
    square: function square(size) {
      var r = Math.sqrt(size) / 2;
      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
    },
    "triangle-down": function triangleDown(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
          ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
    },
    "triangle-up": function triangleUp(size) {
      var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
          ry = rx * d3_svg_symbolSqrt3 / 2;
      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
    }
  });
  d3.svg.symbolTypes = d3_svg_symbols.keys();
  var d3_svg_symbolSqrt3 = Math.sqrt(3),
      d3_svg_symbolTan30 = Math.tan(30 * d3_radians);

  d3_selectionPrototype.transition = function (name) {
    var id = d3_transitionInheritId || ++d3_transitionId,
        ns = d3_transitionNamespace(name),
        subgroups = [],
        subgroup,
        node,
        transition = d3_transitionInherit || {
      time: Date.now(),
      ease: d3_ease_cubicInOut,
      delay: 0,
      duration: 250
    };

    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);

      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
        subgroup.push(node);
      }
    }

    return d3_transition(subgroups, ns, id);
  };

  d3_selectionPrototype.interrupt = function (name) {
    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
  };

  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());

  function d3_selection_interruptNS(ns) {
    return function () {
      var lock, activeId, active;

      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
        active.timer.c = null;
        active.timer.t = NaN;
        if (--lock.count) delete lock[activeId];else delete this[ns];
        lock.active += .5;
        active.event && active.event.interrupt.call(this, this.__data__, active.index);
      }
    };
  }

  function d3_transition(groups, ns, id) {
    d3_subclass(groups, d3_transitionPrototype);
    groups.namespace = ns;
    groups.id = id;
    return groups;
  }

  var d3_transitionPrototype = [],
      d3_transitionId = 0,
      d3_transitionInheritId,
      d3_transitionInherit;
  d3_transitionPrototype.call = d3_selectionPrototype.call;
  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
  d3_transitionPrototype.node = d3_selectionPrototype.node;
  d3_transitionPrototype.size = d3_selectionPrototype.size;

  d3.transition = function (selection, name) {
    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
  };

  d3.transition.prototype = d3_transitionPrototype;

  d3_transitionPrototype.select = function (selector) {
    var id = this.id,
        ns = this.namespace,
        subgroups = [],
        subgroup,
        subnode,
        node;
    selector = d3_selection_selector(selector);

    for (var j = -1, m = this.length; ++j < m;) {
      subgroups.push(subgroup = []);

      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
          subgroup.push(subnode);
        } else {
          subgroup.push(null);
        }
      }
    }

    return d3_transition(subgroups, ns, id);
  };

  d3_transitionPrototype.selectAll = function (selector) {
    var id = this.id,
        ns = this.namespace,
        subgroups = [],
        subgroup,
        subnodes,
        node,
        subnode,
        transition;
    selector = d3_selection_selectorAll(selector);

    for (var j = -1, m = this.length; ++j < m;) {
      for (var group = this[j], i = -1, n = group.length; ++i < n;) {
        if (node = group[i]) {
          transition = node[ns][id];
          subnodes = selector.call(node, node.__data__, i, j);
          subgroups.push(subgroup = []);

          for (var k = -1, o = subnodes.length; ++k < o;) {
            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
            subgroup.push(subnode);
          }
        }
      }
    }

    return d3_transition(subgroups, ns, id);
  };

  d3_transitionPrototype.filter = function (filter) {
    var subgroups = [],
        subgroup,
        group,
        node;
    if (typeof filter !== "function") filter = d3_selection_filter(filter);

    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);

      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
          subgroup.push(node);
        }
      }
    }

    return d3_transition(subgroups, this.namespace, this.id);
  };

  d3_transitionPrototype.tween = function (name, tween) {
    var id = this.id,
        ns = this.namespace;
    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
    return d3_selection_each(this, tween == null ? function (node) {
      node[ns][id].tween.remove(name);
    } : function (node) {
      node[ns][id].tween.set(name, tween);
    });
  };

  function d3_transition_tween(groups, name, value, tween) {
    var id = groups.id,
        ns = groups.namespace;
    return d3_selection_each(groups, typeof value === "function" ? function (node, i, j) {
      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
    } : (value = tween(value), function (node) {
      node[ns][id].tween.set(name, value);
    }));
  }

  d3_transitionPrototype.attr = function (nameNS, value) {
    if (arguments.length < 2) {
      for (value in nameNS) {
        this.attr(value, nameNS[value]);
      }

      return this;
    }

    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate,
        name = d3.ns.qualify(nameNS);

    function attrNull() {
      this.removeAttribute(name);
    }

    function attrNullNS() {
      this.removeAttributeNS(name.space, name.local);
    }

    function attrTween(b) {
      return b == null ? attrNull : (b += "", function () {
        var a = this.getAttribute(name),
            i;
        return a !== b && (i = interpolate(a, b), function (t) {
          this.setAttribute(name, i(t));
        });
      });
    }

    function attrTweenNS(b) {
      return b == null ? attrNullNS : (b += "", function () {
        var a = this.getAttributeNS(name.space, name.local),
            i;
        return a !== b && (i = interpolate(a, b), function (t) {
          this.setAttributeNS(name.space, name.local, i(t));
        });
      });
    }

    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
  };

  d3_transitionPrototype.attrTween = function (nameNS, tween) {
    var name = d3.ns.qualify(nameNS);

    function attrTween(d, i) {
      var f = tween.call(this, d, i, this.getAttribute(name));
      return f && function (t) {
        this.setAttribute(name, f(t));
      };
    }

    function attrTweenNS(d, i) {
      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
      return f && function (t) {
        this.setAttributeNS(name.space, name.local, f(t));
      };
    }

    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
  };

  d3_transitionPrototype.style = function (name, value, priority) {
    var n = arguments.length;

    if (n < 3) {
      if (typeof name !== "string") {
        if (n < 2) value = "";

        for (priority in name) {
          this.style(priority, name[priority], value);
        }

        return this;
      }

      priority = "";
    }

    function styleNull() {
      this.style.removeProperty(name);
    }

    function styleString(b) {
      return b == null ? styleNull : (b += "", function () {
        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name),
            i;
        return a !== b && (i = d3_interpolate(a, b), function (t) {
          this.style.setProperty(name, i(t), priority);
        });
      });
    }

    return d3_transition_tween(this, "style." + name, value, styleString);
  };

  d3_transitionPrototype.styleTween = function (name, tween, priority) {
    if (arguments.length < 3) priority = "";

    function styleTween(d, i) {
      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
      return f && function (t) {
        this.style.setProperty(name, f(t), priority);
      };
    }

    return this.tween("style." + name, styleTween);
  };

  d3_transitionPrototype.text = function (value) {
    return d3_transition_tween(this, "text", value, d3_transition_text);
  };

  function d3_transition_text(b) {
    if (b == null) b = "";
    return function () {
      this.textContent = b;
    };
  }

  d3_transitionPrototype.remove = function () {
    var ns = this.namespace;
    return this.each("end.transition", function () {
      var p;
      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
    });
  };

  d3_transitionPrototype.ease = function (value) {
    var id = this.id,
        ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].ease;
    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
    return d3_selection_each(this, function (node) {
      node[ns][id].ease = value;
    });
  };

  d3_transitionPrototype.delay = function (value) {
    var id = this.id,
        ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].delay;
    return d3_selection_each(this, typeof value === "function" ? function (node, i, j) {
      node[ns][id].delay = +value.call(node, node.__data__, i, j);
    } : (value = +value, function (node) {
      node[ns][id].delay = value;
    }));
  };

  d3_transitionPrototype.duration = function (value) {
    var id = this.id,
        ns = this.namespace;
    if (arguments.length < 1) return this.node()[ns][id].duration;
    return d3_selection_each(this, typeof value === "function" ? function (node, i, j) {
      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
    } : (value = Math.max(1, value), function (node) {
      node[ns][id].duration = value;
    }));
  };

  d3_transitionPrototype.each = function (type, listener) {
    var id = this.id,
        ns = this.namespace;

    if (arguments.length < 2) {
      var inherit = d3_transitionInherit,
          inheritId = d3_transitionInheritId;

      try {
        d3_transitionInheritId = id;
        d3_selection_each(this, function (node, i, j) {
          d3_transitionInherit = node[ns][id];
          type.call(node, node.__data__, i, j);
        });
      } finally {
        d3_transitionInherit = inherit;
        d3_transitionInheritId = inheritId;
      }
    } else {
      d3_selection_each(this, function (node) {
        var transition = node[ns][id];
        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
      });
    }

    return this;
  };

  d3_transitionPrototype.transition = function () {
    var id0 = this.id,
        id1 = ++d3_transitionId,
        ns = this.namespace,
        subgroups = [],
        subgroup,
        group,
        node,
        transition;

    for (var j = 0, m = this.length; j < m; j++) {
      subgroups.push(subgroup = []);

      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
        if (node = group[i]) {
          transition = node[ns][id0];
          d3_transitionNode(node, i, ns, id1, {
            time: transition.time,
            ease: transition.ease,
            delay: transition.delay + transition.duration,
            duration: transition.duration
          });
        }

        subgroup.push(node);
      }
    }

    return d3_transition(subgroups, ns, id1);
  };

  function d3_transitionNamespace(name) {
    return name == null ? "__transition__" : "__transition_" + name + "__";
  }

  function d3_transitionNode(node, i, ns, id, inherit) {
    var lock = node[ns] || (node[ns] = {
      active: 0,
      count: 0
    }),
        transition = lock[id],
        time,
        timer,
        duration,
        ease,
        tweens;

    function schedule(elapsed) {
      var delay = transition.delay;
      timer.t = delay + time;
      if (delay <= elapsed) return start(elapsed - delay);
      timer.c = start;
    }

    function start(elapsed) {
      var activeId = lock.active,
          active = lock[activeId];

      if (active) {
        active.timer.c = null;
        active.timer.t = NaN;
        --lock.count;
        delete lock[activeId];
        active.event && active.event.interrupt.call(node, node.__data__, active.index);
      }

      for (var cancelId in lock) {
        if (+cancelId < id) {
          var cancel = lock[cancelId];
          cancel.timer.c = null;
          cancel.timer.t = NaN;
          --lock.count;
          delete lock[cancelId];
        }
      }

      timer.c = tick;
      d3_timer(function () {
        if (timer.c && tick(elapsed || 1)) {
          timer.c = null;
          timer.t = NaN;
        }

        return 1;
      }, 0, time);
      lock.active = id;
      transition.event && transition.event.start.call(node, node.__data__, i);
      tweens = [];
      transition.tween.forEach(function (key, value) {
        if (value = value.call(node, node.__data__, i)) {
          tweens.push(value);
        }
      });
      ease = transition.ease;
      duration = transition.duration;
    }

    function tick(elapsed) {
      var t = elapsed / duration,
          e = ease(t),
          n = tweens.length;

      while (n > 0) {
        tweens[--n].call(node, e);
      }

      if (t >= 1) {
        transition.event && transition.event.end.call(node, node.__data__, i);
        if (--lock.count) delete lock[id];else delete node[ns];
        return 1;
      }
    }

    if (!transition) {
      time = inherit.time;
      timer = d3_timer(schedule, 0, time);
      transition = lock[id] = {
        tween: new d3_Map(),
        time: time,
        timer: timer,
        delay: inherit.delay,
        duration: inherit.duration,
        ease: inherit.ease,
        index: i
      };
      inherit = null;
      ++lock.count;
    }
  }

  d3.svg.axis = function () {
    var scale = d3.scale.linear(),
        orient = d3_svg_axisDefaultOrient,
        innerTickSize = 6,
        outerTickSize = 6,
        tickPadding = 3,
        tickArguments_ = [10],
        tickValues = null,
        tickFormat_;

    function axis(g) {
      g.each(function () {
        var g = d3.select(this);
        var scale0 = this.__chart__ || scale,
            scale1 = this.__chart__ = scale.copy();
        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues,
            tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_,
            tick = g.selectAll(".tick").data(ticks, scale1),
            tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε),
            tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(),
            tickUpdate = d3.transition(tick.order()).style("opacity", 1),
            tickSpacing = Math.max(innerTickSize, 0) + tickPadding,
            tickTransform;
        var range = d3_scaleRange(scale1),
            path = g.selectAll(".domain").data([0]),
            pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
        tickEnter.append("line");
        tickEnter.append("text");
        var lineEnter = tickEnter.select("line"),
            lineUpdate = tickUpdate.select("line"),
            text = tick.select("text").text(tickFormat),
            textEnter = tickEnter.select("text"),
            textUpdate = tickUpdate.select("text"),
            sign = orient === "top" || orient === "left" ? -1 : 1,
            x1,
            x2,
            y1,
            y2;

        if (orient === "bottom" || orient === "top") {
          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
        } else {
          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
        }

        lineEnter.attr(y2, sign * innerTickSize);
        textEnter.attr(y1, sign * tickSpacing);
        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);

        if (scale1.rangeBand) {
          var x = scale1,
              dx = x.rangeBand() / 2;

          scale0 = scale1 = function scale1(d) {
            return x(d) + dx;
          };
        } else if (scale0.rangeBand) {
          scale0 = scale1;
        } else {
          tickExit.call(tickTransform, scale1, scale0);
        }

        tickEnter.call(tickTransform, scale0, scale1);
        tickUpdate.call(tickTransform, scale1, scale1);
      });
    }

    axis.scale = function (x) {
      if (!arguments.length) return scale;
      scale = x;
      return axis;
    };

    axis.orient = function (x) {
      if (!arguments.length) return orient;
      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
      return axis;
    };

    axis.ticks = function () {
      if (!arguments.length) return tickArguments_;
      tickArguments_ = d3_array(arguments);
      return axis;
    };

    axis.tickValues = function (x) {
      if (!arguments.length) return tickValues;
      tickValues = x;
      return axis;
    };

    axis.tickFormat = function (x) {
      if (!arguments.length) return tickFormat_;
      tickFormat_ = x;
      return axis;
    };

    axis.tickSize = function (x) {
      var n = arguments.length;
      if (!n) return innerTickSize;
      innerTickSize = +x;
      outerTickSize = +arguments[n - 1];
      return axis;
    };

    axis.innerTickSize = function (x) {
      if (!arguments.length) return innerTickSize;
      innerTickSize = +x;
      return axis;
    };

    axis.outerTickSize = function (x) {
      if (!arguments.length) return outerTickSize;
      outerTickSize = +x;
      return axis;
    };

    axis.tickPadding = function (x) {
      if (!arguments.length) return tickPadding;
      tickPadding = +x;
      return axis;
    };

    axis.tickSubdivide = function () {
      return arguments.length && axis;
    };

    return axis;
  };

  var d3_svg_axisDefaultOrient = "bottom",
      d3_svg_axisOrients = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };

  function d3_svg_axisX(selection, x0, x1) {
    selection.attr("transform", function (d) {
      var v0 = x0(d);
      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
    });
  }

  function d3_svg_axisY(selection, y0, y1) {
    selection.attr("transform", function (d) {
      var v0 = y0(d);
      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
    });
  }

  d3.svg.brush = function () {
    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"),
        x = null,
        y = null,
        xExtent = [0, 0],
        yExtent = [0, 0],
        xExtentDomain,
        yExtentDomain,
        xClamp = true,
        yClamp = true,
        resizes = d3_svg_brushResizes[0];

    function brush(g) {
      g.each(function () {
        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
        var background = g.selectAll(".background").data([0]);
        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
        g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var resize = g.selectAll(".resize").data(resizes, d3_identity);
        resize.exit().remove();
        resize.enter().append("g").attr("class", function (d) {
          return "resize " + d;
        }).style("cursor", function (d) {
          return d3_svg_brushCursor[d];
        }).append("rect").attr("x", function (d) {
          return /[ew]$/.test(d) ? -3 : null;
        }).attr("y", function (d) {
          return /^[ns]/.test(d) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
        resize.style("display", brush.empty() ? "none" : null);
        var gUpdate = d3.transition(g),
            backgroundUpdate = d3.transition(background),
            range;

        if (x) {
          range = d3_scaleRange(x);
          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
          redrawX(gUpdate);
        }

        if (y) {
          range = d3_scaleRange(y);
          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
          redrawY(gUpdate);
        }

        redraw(gUpdate);
      });
    }

    brush.event = function (g) {
      g.each(function () {
        var event_ = event.of(this, arguments),
            extent1 = {
          x: xExtent,
          y: yExtent,
          i: xExtentDomain,
          j: yExtentDomain
        },
            extent0 = this.__chart__ || extent1;
        this.__chart__ = extent1;

        if (d3_transitionInheritId) {
          d3.select(this).transition().each("start.brush", function () {
            xExtentDomain = extent0.i;
            yExtentDomain = extent0.j;
            xExtent = extent0.x;
            yExtent = extent0.y;
            event_({
              type: "brushstart"
            });
          }).tween("brush:brush", function () {
            var xi = d3_interpolateArray(xExtent, extent1.x),
                yi = d3_interpolateArray(yExtent, extent1.y);
            xExtentDomain = yExtentDomain = null;
            return function (t) {
              xExtent = extent1.x = xi(t);
              yExtent = extent1.y = yi(t);
              event_({
                type: "brush",
                mode: "resize"
              });
            };
          }).each("end.brush", function () {
            xExtentDomain = extent1.i;
            yExtentDomain = extent1.j;
            event_({
              type: "brush",
              mode: "resize"
            });
            event_({
              type: "brushend"
            });
          });
        } else {
          event_({
            type: "brushstart"
          });
          event_({
            type: "brush",
            mode: "resize"
          });
          event_({
            type: "brushend"
          });
        }
      });
    };

    function redraw(g) {
      g.selectAll(".resize").attr("transform", function (d) {
        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
      });
    }

    function redrawX(g) {
      g.select(".extent").attr("x", xExtent[0]);
      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
    }

    function redrawY(g) {
      g.select(".extent").attr("y", yExtent[0]);
      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
    }

    function brushstart() {
      var target = this,
          eventTarget = d3.select(d3.event.target),
          event_ = event.of(target, arguments),
          g = d3.select(target),
          resizing = eventTarget.datum(),
          resizingX = !/^(n|s)$/.test(resizing) && x,
          resizingY = !/^(e|w)$/.test(resizing) && y,
          dragging = eventTarget.classed("extent"),
          dragRestore = d3_event_dragSuppress(target),
          center,
          origin = d3.mouse(target),
          offset;
      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);

      if (d3.event.changedTouches) {
        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
      } else {
        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
      }

      g.interrupt().selectAll("*").interrupt();

      if (dragging) {
        origin[0] = xExtent[0] - origin[0];
        origin[1] = yExtent[0] - origin[1];
      } else if (resizing) {
        var ex = +/w$/.test(resizing),
            ey = +/^n/.test(resizing);
        offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
        origin[0] = xExtent[ex];
        origin[1] = yExtent[ey];
      } else if (d3.event.altKey) center = origin.slice();

      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
      d3.select("body").style("cursor", eventTarget.style("cursor"));
      event_({
        type: "brushstart"
      });
      brushmove();

      function keydown() {
        if (d3.event.keyCode == 32) {
          if (!dragging) {
            center = null;
            origin[0] -= xExtent[1];
            origin[1] -= yExtent[1];
            dragging = 2;
          }

          d3_eventPreventDefault();
        }
      }

      function keyup() {
        if (d3.event.keyCode == 32 && dragging == 2) {
          origin[0] += xExtent[1];
          origin[1] += yExtent[1];
          dragging = 0;
          d3_eventPreventDefault();
        }
      }

      function brushmove() {
        var point = d3.mouse(target),
            moved = false;

        if (offset) {
          point[0] += offset[0];
          point[1] += offset[1];
        }

        if (!dragging) {
          if (d3.event.altKey) {
            if (!center) center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
            origin[0] = xExtent[+(point[0] < center[0])];
            origin[1] = yExtent[+(point[1] < center[1])];
          } else center = null;
        }

        if (resizingX && move1(point, x, 0)) {
          redrawX(g);
          moved = true;
        }

        if (resizingY && move1(point, y, 1)) {
          redrawY(g);
          moved = true;
        }

        if (moved) {
          redraw(g);
          event_({
            type: "brush",
            mode: dragging ? "move" : "resize"
          });
        }
      }

      function move1(point, scale, i) {
        var range = d3_scaleRange(scale),
            r0 = range[0],
            r1 = range[1],
            position = origin[i],
            extent = i ? yExtent : xExtent,
            size = extent[1] - extent[0],
            min,
            max;

        if (dragging) {
          r0 -= position;
          r1 -= size + position;
        }

        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];

        if (dragging) {
          max = (min += position) + size;
        } else {
          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));

          if (position < min) {
            max = min;
            min = position;
          } else {
            max = position;
          }
        }

        if (extent[0] != min || extent[1] != max) {
          if (i) yExtentDomain = null;else xExtentDomain = null;
          extent[0] = min;
          extent[1] = max;
          return true;
        }
      }

      function brushend() {
        brushmove();
        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
        d3.select("body").style("cursor", null);
        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
        dragRestore();
        event_({
          type: "brushend"
        });
      }
    }

    brush.x = function (z) {
      if (!arguments.length) return x;
      x = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };

    brush.y = function (z) {
      if (!arguments.length) return y;
      y = z;
      resizes = d3_svg_brushResizes[!x << 1 | !y];
      return brush;
    };

    brush.clamp = function (z) {
      if (!arguments.length) return x && y ? [xClamp, yClamp] : x ? xClamp : y ? yClamp : null;
      if (x && y) xClamp = !!z[0], yClamp = !!z[1];else if (x) xClamp = !!z;else if (y) yClamp = !!z;
      return brush;
    };

    brush.extent = function (z) {
      var x0, x1, y0, y1, t;

      if (!arguments.length) {
        if (x) {
          if (xExtentDomain) {
            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
          } else {
            x0 = xExtent[0], x1 = xExtent[1];
            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
            if (x1 < x0) t = x0, x0 = x1, x1 = t;
          }
        }

        if (y) {
          if (yExtentDomain) {
            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
          } else {
            y0 = yExtent[0], y1 = yExtent[1];
            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
            if (y1 < y0) t = y0, y0 = y1, y1 = t;
          }
        }

        return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1];
      }

      if (x) {
        x0 = z[0], x1 = z[1];
        if (y) x0 = x0[0], x1 = x1[0];
        xExtentDomain = [x0, x1];
        if (x.invert) x0 = x(x0), x1 = x(x1);
        if (x1 < x0) t = x0, x0 = x1, x1 = t;
        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [x0, x1];
      }

      if (y) {
        y0 = z[0], y1 = z[1];
        if (x) y0 = y0[1], y1 = y1[1];
        yExtentDomain = [y0, y1];
        if (y.invert) y0 = y(y0), y1 = y(y1);
        if (y1 < y0) t = y0, y0 = y1, y1 = t;
        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [y0, y1];
      }

      return brush;
    };

    brush.clear = function () {
      if (!brush.empty()) {
        xExtent = [0, 0], yExtent = [0, 0];
        xExtentDomain = yExtentDomain = null;
      }

      return brush;
    };

    brush.empty = function () {
      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
    };

    return d3.rebind(brush, event, "on");
  };

  var d3_svg_brushCursor = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  };
  var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
  var d3_time_formatUtc = d3_time_format.utc;
  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;

  function d3_time_formatIsoNative(date) {
    return date.toISOString();
  }

  d3_time_formatIsoNative.parse = function (string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  };

  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
  d3_time.second = d3_time_interval(function (date) {
    return new d3_date(Math.floor(date / 1e3) * 1e3);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
  }, function (date) {
    return date.getSeconds();
  });
  d3_time.seconds = d3_time.second.range;
  d3_time.seconds.utc = d3_time.second.utc.range;
  d3_time.minute = d3_time_interval(function (date) {
    return new d3_date(Math.floor(date / 6e4) * 6e4);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
  }, function (date) {
    return date.getMinutes();
  });
  d3_time.minutes = d3_time.minute.range;
  d3_time.minutes.utc = d3_time.minute.utc.range;
  d3_time.hour = d3_time_interval(function (date) {
    var timezone = date.getTimezoneOffset() / 60;
    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
  }, function (date, offset) {
    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
  }, function (date) {
    return date.getHours();
  });
  d3_time.hours = d3_time.hour.range;
  d3_time.hours.utc = d3_time.hour.utc.range;
  d3_time.month = d3_time_interval(function (date) {
    date = d3_time.day(date);
    date.setDate(1);
    return date;
  }, function (date, offset) {
    date.setMonth(date.getMonth() + offset);
  }, function (date) {
    return date.getMonth();
  });
  d3_time.months = d3_time.month.range;
  d3_time.months.utc = d3_time.month.utc.range;

  function d3_time_scale(linear, methods, format) {
    function scale(x) {
      return linear(x);
    }

    scale.invert = function (x) {
      return d3_time_scaleDate(linear.invert(x));
    };

    scale.domain = function (x) {
      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
      linear.domain(x);
      return scale;
    };

    function tickMethod(extent, count) {
      var span = extent[1] - extent[0],
          target = span / count,
          i = d3.bisect(d3_time_scaleSteps, target);
      return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function (d) {
        return d / 31536e6;
      }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
    }

    scale.nice = function (interval, skip) {
      var domain = scale.domain(),
          extent = d3_scaleExtent(domain),
          method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
      if (method) interval = method[0], skip = method[1];

      function skipped(date) {
        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
      }

      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
        floor: function floor(date) {
          while (skipped(date = interval.floor(date))) {
            date = d3_time_scaleDate(date - 1);
          }

          return date;
        },
        ceil: function ceil(date) {
          while (skipped(date = interval.ceil(date))) {
            date = d3_time_scaleDate(+date + 1);
          }

          return date;
        }
      } : interval));
    };

    scale.ticks = function (interval, skip) {
      var extent = d3_scaleExtent(scale.domain()),
          method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{
        range: interval
      }, skip];
      if (method) interval = method[0], skip = method[1];
      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
    };

    scale.tickFormat = function () {
      return format;
    };

    scale.copy = function () {
      return d3_time_scale(linear.copy(), methods, format);
    };

    return d3_scale_linearRebind(scale, linear);
  }

  function d3_time_scaleDate(t) {
    return new Date(t);
  }

  var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
  var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
  var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L", function (d) {
    return d.getMilliseconds();
  }], [":%S", function (d) {
    return d.getSeconds();
  }], ["%I:%M", function (d) {
    return d.getMinutes();
  }], ["%I %p", function (d) {
    return d.getHours();
  }], ["%a %d", function (d) {
    return d.getDay() && d.getDate() != 1;
  }], ["%b %d", function (d) {
    return d.getDate() != 1;
  }], ["%B", function (d) {
    return d.getMonth();
  }], ["%Y", d3_true]]);
  var d3_time_scaleMilliseconds = {
    range: function range(start, stop, step) {
      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
    },
    floor: d3_identity,
    ceil: d3_identity
  };
  d3_time_scaleLocalMethods.year = d3_time.year;

  d3_time.scale = function () {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
  };

  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function (m) {
    return [m[0].utc, m[1]];
  });
  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L", function (d) {
    return d.getUTCMilliseconds();
  }], [":%S", function (d) {
    return d.getUTCSeconds();
  }], ["%I:%M", function (d) {
    return d.getUTCMinutes();
  }], ["%I %p", function (d) {
    return d.getUTCHours();
  }], ["%a %d", function (d) {
    return d.getUTCDay() && d.getUTCDate() != 1;
  }], ["%b %d", function (d) {
    return d.getUTCDate() != 1;
  }], ["%B", function (d) {
    return d.getUTCMonth();
  }], ["%Y", d3_true]]);
  d3_time_scaleUtcMethods.year = d3_time.year.utc;

  d3_time.scale.utc = function () {
    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
  };

  d3.text = d3_xhrType(function (request) {
    return request.responseText;
  });

  d3.json = function (url, callback) {
    return d3_xhr(url, "application/json", d3_json, callback);
  };

  function d3_json(request) {
    return JSON.parse(request.responseText);
  }

  d3.html = function (url, callback) {
    return d3_xhr(url, "text/html", d3_html, callback);
  };

  function d3_html(request) {
    var range = d3_document.createRange();
    range.selectNode(d3_document.body);
    return range.createContextualFragment(request.responseText);
  }

  d3.xml = d3_xhrType(function (request) {
    return request.responseXML;
  });
  if (typeof define === "function" && define.amd) this.d3 = d3, define(d3);else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) module.exports = d3;else this.d3 = d3;
}();
},{}],"../code/skeletons/BaseTree.jsx":[function(require,module,exports) {
var d3 = require("../../static_files/d3_v3");

module.exports = function (_ref) {
  var treeData = _ref.treeData,
      _ref$onNodeClick = _ref.onNodeClick,
      onNodeClick = _ref$onNodeClick === void 0 ? function () {} : _ref$onNodeClick;
  var container = /*#__PURE__*/React.createElement("div", null);
  var mainAccentColor = "red";
  var margin = {
    top: 30,
    right: 60,
    bottom: 30,
    left: 60
  },
      width = 300 - margin.right - margin.left,
      height = 280 - margin.top - margin.bottom,
      nodeWidth = 16,
      nodeHeight = 16;
  var i = 0;
  var tree = d3.layout.tree().size([height, width]).nodeSize([nodeWidth, nodeHeight]);
  var diagonal = d3.svg.diagonal().projection(function (d) {
    return [d.x, d.y];
  });
  var svg = d3.select(container).append("svg").attr("width", width + margin.right + margin.left).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + (width / 2 + margin.left) + "," + margin.top + ")");
  root = treeData;
  update(root);

  function update(source) {
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes); // Normalize for fixed-depth.

    nodes.forEach(function (d) {
      d.y = height - d.depth * 80;
    }); // Declare the nodes…

    var node = svg.selectAll("g.node").data(nodes, function (d) {
      return d.id || (d.id = ++i);
    }); // Enter the nodes.

    var nodeEnter = node.enter().append("g").attr("class", "node").attr("transform", function (d) {
      return "translate(" + d.x + "," + d.y + ")";
    }); // Red outlines on hover on nodes

    nodeEnter.filter(function (d) {
      return d.level === "red";
    }).insert("circle", ":first-child").classed("circleSelect", true).attr("r", 8).style("stroke", "#000").style("fill", "none").style("pointer-events", "none"); // Construction of basic nodes of tree

    nodeEnter.append("circle").attr("r", function (d) {
      if (d.level == "none") {
        return 0;
      } else {
        return 4;
      }
    }).attr("r", function (d) {
      if (d.level == "none") {
        return 0;
      } else {
        return 4;
      }
    }).classed("basicNode", function (d) {
      return d.level == "red";
    }).on("click", function (d) {
      if (d.level === "red") {
        // makes all other nodes execpt for focus become grey
        svg.selectAll("g.node circle.basicNode").classed("highlightCircle", true);
        d3.select(this).classed("highlightCircle", false);
        onNodeClick(d);

        if (d3.event.metaKey) {
          highlightOn(d);
        } else {
          highlightOff(d);
          highlightOn(d);
        }

        update(d);
      }
    }); // Declare the edges

    var link = svg.selectAll("path.link").data(links, function (d) {
      return d.target.id;
    }); // Enter the edges.

    link.enter().insert("path", "g").attr("class", "link").attr("d", diagonal).attr("class", function (d) {
      return "link source-" + d.source.name + " target-" + d.target.name;
    }); // Big circle on root node

    nodeEnter.filter(function (d) {
      return d.level === "black";
    }).append("circle").attr("r", 30).attr("fill", mainAccentColor).attr("opacity", 0.5).on("click", function (d) {
      // removed all highlighting
      svg.selectAll("g.node circle.basicNode").classed("highlightCircle", false);
      highlightOff(d);
      update(d);
    });
  } // Grey out other edges when focused on one node


  highlightOn = function highlightOn(d) {
    d3.selectAll("path.link").classed("highlight", true);

    var _parentLine;

    _parentLine = function parentLine(d) {
      if (d.parent) {
        _parentLine(d.parent);

        d3.selectAll("path.link.source-" + d.parent.name + ".target-" + d.name).classed("highlight", false);
      }
    };

    _parentLine(d);

    return update(d);
  };

  highlightOff = function highlightOff(d) {
    d3.selectAll("path.link").classed("highlight", false);
    return update(d);
  };

  return container;
};
},{"../../static_files/d3_v3":"../static_files/d3_v3.js"}],"../code/pages/ProductView.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require("@vue-reactivity/watch"),
    watch = _require.watch;

var router = require("quik-router");

var smartBackend = require("../systems/smart_backend");

var Positioner = require("../skeletons/Positioner");

var BaseTree = require("../skeletons/BaseTree"); // 
// 
// helpers 
// 
// 


var Title = function Title(_ref) {
  var main = _ref.main,
      secondary = _ref.secondary;
  return /*#__PURE__*/React.createElement("h4", {
    style: "font-size: 20pt; font-weight: 100;"
  }, /*#__PURE__*/React.createElement("span", {
    style: "text-decoration: underline;"
  }, "".concat(main)), " ", secondary ? ": ".concat(secondary) : "");
};

var SummaryTag = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var orgName, repoName, summaryData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            orgName = _ref2.orgName, repoName = _ref2.repoName;
            _context.next = 3;
            return smartBackend.getRepoSummaryDataFor(orgName, repoName);

          case 3:
            summaryData = _context.sent;
            console.debug("summaryData is:", summaryData);
            return _context.abrupt("return", /*#__PURE__*/React.createElement(Positioner, {
              verticalAlignment: "top",
              horizontalAlignment: "left",
              positionSelf: "relativeToParent",
              top: "1rem",
              left: "1rem"
            }, /*#__PURE__*/React.createElement(Title, {
              main: "Org",
              secondary: orgName
            }), /*#__PURE__*/React.createElement(Title, {
              main: "Repo",
              secondary: repoName
            })));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function SummaryTag(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var ChartCard = function ChartCard(_ref4) {
  var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    class: "centered our-weak-shadow animate",
    style: "width: 100%; height: fit-content; min-height: 8rem; margin-top: 1rem; background-color: white; border-radius: 1.5rem; padding: 1.5rem;"
  }, props), children);
};

var ChartList = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref5) {
    var orgName, repoName, commitData, vulnData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            orgName = _ref5.orgName, repoName = _ref5.repoName;
            _context2.next = 3;
            return smartBackend.getCommitDataFor(repoName);

          case 3:
            commitData = _context2.sent;
            _context2.next = 6;
            return smartBackend.getVulnDataFor(repoName);

          case 6:
            vulnData = _context2.sent;
            console.debug("vulnData is:", vulnData);
            console.debug("commitData is:", commitData);
            return _context2.abrupt("return", /*#__PURE__*/React.createElement("div", {
              style: "height: 100%; width: 100%; max-width: 50rem; padding: 2rem; box-sizing: border-box;"
            }, /*#__PURE__*/React.createElement(ChartCard, {
              name: "card-1:dummy-card"
            }, "I'm a Dummy Card 1, Replace me with an actual chart"), /*#__PURE__*/React.createElement(ChartCard, {
              name: "card-1:dummy-card"
            }, "I'm a Dummy Card 2, Replace me with an actual chart")));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function ChartList(_x2) {
    return _ref6.apply(this, arguments);
  };
}();

var RepoGraph = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref7) {
    var repoName, vulnData, maxNumberOfVulns, modifiedVulnData, branches;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            repoName = _ref7.repoName;
            _context3.next = 3;
            return smartBackend.getVulnDataFor(repoName);

          case 3:
            vulnData = _context3.sent;
            maxNumberOfVulns = 72; // FIXME: showing all of them makes the graph unusable

            modifiedVulnData = vulnData.map(function (each) {
              return _objectSpread(_objectSpread({}, each), {}, {
                name: each.cveId.replace(/cve-/i, ""),
                level: 'red'
              });
            }).slice(0, maxNumberOfVulns);
            branches = {
              mild: modifiedVulnData.filter(function (each) {
                return each.score <= 3.3333;
              }).map(function (each) {
                return _objectSpread(_objectSpread({}, each), {}, {
                  parent: 'mild'
                });
              }),
              notable: modifiedVulnData.filter(function (each) {
                return each.score > 3.3333 && each.score < 6.6666;
              }).map(function (each) {
                return _objectSpread(_objectSpread({}, each), {}, {
                  parent: 'notable'
                });
              }),
              major: modifiedVulnData.filter(function (each) {
                return each.score >= 6.6666;
              }).map(function (each) {
                return _objectSpread(_objectSpread({}, each), {}, {
                  parent: 'major'
                });
              })
            };
            return _context3.abrupt("return", /*#__PURE__*/React.createElement(BaseTree, {
              treeData: {
                name: "topLevel",
                parent: "null",
                level: "black",
                children: Object.entries(branches).map(function (_ref9) {
                  var _ref10 = _slicedToArray(_ref9, 2),
                      name = _ref10[0],
                      children = _ref10[1];

                  return {
                    parent: "topLevel",
                    level: "none",
                    name: name,
                    children: children
                  };
                })
              }
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function RepoGraph(_x3) {
    return _ref8.apply(this, arguments);
  };
}();

var LeftSideContainer = function LeftSideContainer(_ref11) {
  var children = _ref11.children;
  return /*#__PURE__*/React.createElement("div", {
    name: "left-side",
    class: "centered",
    style: "\n            width: 50%;\n            height: 100%;\n            position: relative;\n        "
  }, children);
};

var RightSideContainer = function RightSideContainer(_ref12) {
  var children = _ref12.children;
  return /*#__PURE__*/React.createElement("div", {
    name: "right-side",
    class: "centered",
    style: "\n            width: 50%;\n            height: 100%;\n            position: relative;\n            background: rgba(0, 0, 0, 0) radial-gradient(circle, rgb(243, 243, 243) 0%, rgba(236, 236, 236, 0.9) 100%) repeat scroll 0% 0%;\n        "
  }, children);
}; // 
// 
// Main
// 
// 


module.exports = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref13) {
    var properties, _router$pageInfo, repoName, orgName;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            properties = Object.assign({}, _ref13);
            _router$pageInfo = router.pageInfo, repoName = _router$pageInfo.repoName, orgName = _router$pageInfo.orgName;
            return _context4.abrupt("return", /*#__PURE__*/React.createElement("main", {
              name: "main-ProductView",
              class: "centered row",
              style: "width: 100%; height: 100%;"
            }, /*#__PURE__*/React.createElement(LeftSideContainer, null, /*#__PURE__*/React.createElement(SummaryTag, {
              orgName: orgName,
              repoName: repoName
            }), /*#__PURE__*/React.createElement(RepoGraph, {
              repoName: repoName
            })), /*#__PURE__*/React.createElement(RightSideContainer, null, /*#__PURE__*/React.createElement(ChartList, {
              orgName: orgName,
              repoName: repoName
            }))));

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x4) {
    return _ref14.apply(this, arguments);
  };
}();
},{"@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs","quik-router":"../../node_modules/quik-router/main/main.js","../systems/smart_backend":"../code/systems/smart_backend.js","../skeletons/Positioner":"../code/skeletons/Positioner.jsx","../skeletons/BaseTree":"../code/skeletons/BaseTree.jsx"}],"../code/atoms/Campsite.jsx":[function(require,module,exports) {
module.exports = function () {
  return /*#__PURE__*/React.createElement("svg", {
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:cc": "http://creativecommons.org/ns#",
    "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "xmlns:svg": "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
    "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",
    width: "1052.3622",
    height: "744.09448",
    version: "1.1",
    "inkscape:version": "0.91 r13725",
    "sodipodi:docname": "mountain.svg",
    "inkscape:export-filename": "D:\\ink\\mountain.png",
    "inkscape:export-xdpi": "90",
    "inkscape:export-ydpi": "90",
    style: "transform: scale(1.8)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "backgroundrect",
    width: "100%",
    height: "100%",
    x: "0",
    y: "0",
    fill: "none",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("defs", {
    id: "defs4"
  }), /*#__PURE__*/React.createElement("sodipodi:namedview", {
    id: "base",
    pagecolor: "#ffffff",
    bordercolor: "#666666",
    borderopacity: "1.0",
    "inkscape:pageopacity": "0.0",
    "inkscape:pageshadow": "2",
    "inkscape:zoom": "0.49497475",
    "inkscape:cx": "468.63738",
    "inkscape:cy": "357.80148",
    "inkscape:document-units": "px",
    "inkscape:current-layer": "layer1",
    showgrid: "false",
    "inkscape:window-width": "1366",
    "inkscape:window-height": "715",
    "inkscape:window-x": "-8",
    "inkscape:window-y": "22",
    "inkscape:window-maximized": "1"
  }), /*#__PURE__*/React.createElement("metadata", {
    id: "metadata7"
  }, /*#__PURE__*/React.createElement("rdf:RDF", null, /*#__PURE__*/React.createElement("cc:Work", {
    "rdf:about": ""
  }, /*#__PURE__*/React.createElement("dc:format", null, "image/svg+xml"), /*#__PURE__*/React.createElement("dc:type", {
    "rdf:resource": "http://purl.org/dc/dcmitype/StillImage"
  }), /*#__PURE__*/React.createElement("dc:title", null)))), /*#__PURE__*/React.createElement("g", {
    class: "currentLayer",
    style: ""
  }, /*#__PURE__*/React.createElement("title", null, "Layer 1"), /*#__PURE__*/React.createElement("ellipse", {
    ry: "123.10624975954825",
    rx: "123.96497957214173",
    style: "opacity:0.05100002;fill:#e9ddaf;fill-opacity:1;stroke:none;stroke-opacity:1",
    id: "ellipse5722",
    cx: "512.9146732804254",
    cy: "362.92005406819715",
    class: ""
  }), /*#__PURE__*/React.createElement("ellipse", {
    cy: "362.92005406819715",
    cx: "512.9146732804254",
    id: "circle4556",
    style: "opacity:0.05100002;fill:#decd87;fill-opacity:1;stroke:none;stroke-opacity:1",
    rx: "110.83483614024577",
    ry: "107.90292361095776",
    class: ""
  }), /*#__PURE__*/React.createElement("circle", {
    style: "opacity:1;fill:#decd87;fill-opacity:1;stroke:none;stroke-opacity:1",
    id: "path4508",
    cx: "512.9146732804254",
    cy: "362.92005406819715",
    r: "92.26594543457031",
    class: ""
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#d3bc5f;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m539.4164886474609,299.31556701660156 a5.300387859344482,5.300387859344482 0 0 0 -5.300260066986084,5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 5.300260066986084,5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 5.300630569458008,-5.300256252288818 a5.300387859344482,5.300387859344482 0 0 0 -5.300630569458008,-5.300256252288818 zm-86.96533966064453,16.882705688476562 a2.748349666595459,2.748349666595459 0 0 0 -2.748436689376831,2.7480578422546387 a2.748349666595459,2.748349666595459 0 0 0 2.748436689376831,2.7484323978424072 a2.748349666595459,2.748349666595459 0 0 0 2.7480578422546387,-2.7484323978424072 a2.748349666595459,2.748349666595459 0 0 0 -2.7480578422546387,-2.7480578422546387 zm27.67983055114746,2.3555850982666016 a4.122524261474609,4.515145778656006 0 0 0 -4.122847080230713,4.514931678771973 a4.122524261474609,4.515145778656006 0 0 0 4.122847080230713,4.515311241149902 a4.122524261474609,4.515145778656006 0 0 0 4.122463226318359,-4.515311241149902 a4.122524261474609,4.515145778656006 0 0 0 -4.122463226318359,-4.514931678771973 zm47.70343780517578,9.42271900177002 a3.1409707069396973,3.1409707069396973 0 0 0 -3.141284227371216,3.141284227371216 a3.1409707069396973,3.1409707069396973 0 0 0 3.141284227371216,3.140909433364868 a3.1409707069396973,3.1409707069396973 0 0 0 3.140909433364868,-3.140909433364868 a3.1409707069396973,3.1409707069396973 0 0 0 -3.140909433364868,-3.141284227371216 zm70.5540542602539,0.3442649245262146 c-6.596904754638672,22.542476654052734 -21.213539123535156,61.379417419433594 -48.174861907958984,84.06964111328125 c-24.433961868286133,20.563228607177734 -66.89801788330078,22.939098358154297 -95.90145874023438,21.734691619873047 A92.26602172851562,92.26602172851562 0 0 0 512.9148406982422,455.18614196777344 A92.26602172851562,92.26602172851562 0 0 0 605.1808013916016,362.92015075683594 A92.26602172851562,92.26602172851562 0 0 0 598.3884735107422,328.3208465576172 zM448.13206481933594,338.5774688720703 a7.852426052093506,7.852426052093506 0 0 0 -7.852458953857422,7.852458953857422 a7.852426052093506,7.852426052093506 0 0 0 7.852458953857422,7.852454662322998 a7.852426052093506,7.852426052093506 0 0 0 7.852454662322998,-7.852454662322998 a7.852426052093506,7.852426052093506 0 0 0 -7.852454662322998,-7.852458953857422 zm69.49392700195312,24.34269142150879 a3.5335919857025146,3.729902744293213 0 0 0 -3.5333776473999023,3.72961163520813 a3.5335919857025146,3.729902744293213 0 0 0 3.5333776473999023,3.7299952507019043 a3.5335919857025146,3.729902744293213 0 0 0 3.533756971359253,-3.7299952507019043 a3.5335919857025146,3.729902744293213 0 0 0 -3.533756971359253,-3.72961163520813 zm-63.80082321166992,27.87606430053711 a2.944659948348999,2.748349666595459 0 0 0 -2.944671154022217,2.7484323978424072 a2.944659948348999,2.748349666595459 0 0 0 2.944671154022217,2.7480578422546387 a2.944659948348999,2.748349666595459 0 0 0 2.944671154022217,-2.7480578422546387 a2.944659948348999,2.748349666595459 0 0 0 -2.944671154022217,-2.7484323978424072 zm54.5743408203125,10.208040237426758 a5.300387859344482,5.693008899688721 0 0 0 -5.300251483917236,5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 5.300251483917236,5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 5.300256252288818,-5.693108081817627 a5.300387859344482,5.693008899688721 0 0 0 -5.300256252288818,-5.693108081817627 z",
    id: "path4510",
    "inkscape:connector-curvature": "0",
    class: ""
  }), /*#__PURE__*/React.createElement("g", {
    id: "g4408",
    class: ""
  }, /*#__PURE__*/React.createElement("g", {
    id: "g4186",
    "stroke-width": "0"
  }, /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4176",
    d: "M439.550724029541,529.0165405273438 L501.82458877563477,412.63360595703125 L568.207706451416,528.454833984375 z",
    style: "fill:#455a57;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4178",
    d: "m501.5087013244629,413.22393798828125 l-61.95779037475586,115.79137420654297 l61.95779037475586,-0.2706800699234009 l0,-115.52069854736328 z",
    style: "fill:#384845;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4168",
    d: "M460.48682022094727,582.6151123046875 L572.4099769592285,373.4437255859375 L691.7187538146973,581.6045532226562 z",
    style: "fill:#6f918a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4180",
    d: "m501.82483291625977,412.63360595703125 l-18.87869644165039,35.28192138671875 l8.762750625610352,12.788825035095215 l5.690257549285889,-9.558053970336914 l6.954212665557861,14.336813926696777 l3.161118507385254,-12.650227546691895 l5.0576653480529785,8.433481216430664 l9.260268211364746,-13.7247953414917 l-20.007577896118164,-34.9079704284668 z",
    style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4170",
    d: "m571.8421669006348,374.5059814453125 l-111.35511779785156,208.10882568359375 l111.35511779785156,-0.48648801445961 l0,-207.62232971191406 z",
    style: "fill:#536c67;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4182",
    d: "m501.5087013244629,413.22393798828125 l-18.562705993652344,34.691646575927734 l8.762750625610352,12.788825035095215 l5.690257549285889,-9.558053970336914 l4.109696865081787,8.472615242004395 l0,-46.3950309753418 z",
    style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4172",
    d: "m572.4102210998535,373.4437255859375 l-33.93019485473633,63.41128921508789 l15.749063491821289,22.985023498535156 l10.22695541381836,-17.178443908691406 l12.498628616333008,25.767181396484375 l5.681398391723633,-22.735919952392578 l9.090009689331055,15.15727710723877 l16.64323616027832,-24.667219161987305 l-35.95909881591797,-62.73918533325195 z",
    style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#6f918a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "M351.999698638916,583.1788330078125 L440.3755226135254,418.015380859375 L534.5830116271973,582.3802490234375 z",
    id: "path4138",
    "inkscape:connector-curvature": "0",
    "sodipodi:nodetypes": "cccc",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    style: "fill:#536c67;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m439.92724990844727,418.8541259765625 l-87.92726135253906,164.32505798339844 l87.92726135253906,-0.38413676619529724 l0,-163.94093322753906 z",
    id: "path4150",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4174",
    d: "m571.8421669006348,374.5059814453125 l-33.36227035522461,62.35038757324219 l15.749063491821289,22.985023498535156 l10.22695541381836,-17.178443908691406 l7.386250019073486,15.22761344909668 l0,-83.38459014892578 z",
    style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m440.3757667541504,418.015380859375 l-26.791658401489258,50.07026290893555 l12.435637474060059,18.14923667907715 l8.075319290161133,-13.564294815063477 l9.869056701660156,20.346057891845703 l4.486096382141113,-17.952539443969727 l7.177572250366211,11.96835708618164 l13.141687393188477,-19.47751235961914 l-28.393705368041992,-49.53956985473633 z",
    id: "path4140",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    style: "fill:#b7c8be;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m439.92724990844727,418.8541259765625 l-26.34322166442871,49.23257064819336 l12.435637474060059,18.14923667907715 l8.075319290161133,-13.564294815063477 l5.8322672843933105,12.023898124694824 l0,-65.8414077758789 z",
    id: "path4152",
    "stroke-width": "0"
  })), /*#__PURE__*/React.createElement("rect", {
    ry: "30.33986473083496",
    y: "-334.43114471435524",
    x: "1835.7710399627686",
    height: "83.0354232788086",
    width: "669.0738525390625",
    id: "rect4200",
    style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cscscc",
    "inkscape:connector-curvature": "0",
    id: "path4215",
    d: "m321.10397720336914,610.015380859375 c0,0 37.72563552856445,42.82870101928711 80.26730346679688,59.24637222290039 c42.541664123535156,16.41766929626465 107.55818176269531,62.815433502197266 107.55818176269531,62.815433502197266 c0,0 93.11005401611328,-55.67731857299805 120.40094757080078,-62.8154411315918 c45.45944595336914,-11.89023494720459 84.28067016601562,-63.52924728393555 84.28067016601562,-63.52924728393555 z",
    style: "fill:#5a351c;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "opacity:1;fill:#3e2311;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m508.903018951416,607.9673461914062 l-187.79885864257812,2.0484447479248047 c0,0 37.72578811645508,42.82913589477539 80.26744842529297,59.246795654296875 c42.49297332763672,16.39887809753418 107.3828353881836,62.690208435058594 107.53137969970703,62.796199798583984 l0,-124.09144592285156 z",
    id: "rect4368",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("rect", {
    ry: "17.219924926757812",
    y: "-312.0754928588865",
    x: "1803.8343486785889",
    height: "67.06707000732422",
    width: "731.3504638671875",
    id: "rect4202",
    style: "opacity:1;fill:#668000;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "-366.16625213623024",
    x: "2491.74822807312",
    height: "77.78174591064453",
    width: "13.131982803344727",
    id: "rect4245",
    style: "opacity:1;fill:#784421;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4247",
    d: "m702.1624794006348,493.43365478515625 a29.230138778686523,24.732315063476562 0 0 0 -29.229368209838867,24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 0.1569305956363678,2.338292121887207 a29.230138778686523,24.732315063476562 0 0 0 -16.9011287689209,22.39333724975586 a29.230138778686523,24.732315063476562 0 0 0 29.230470657348633,24.732601165771484 a29.230138778686523,24.732315063476562 0 0 0 16.659696578979492,-4.445288181304932 a29.230138778686523,24.732315063476562 0 0 0 16.260242462158203,4.19350528717041 a29.230138778686523,24.732315063476562 0 0 0 29.229368209838867,-24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 -16.312915802001953,-22.15228843688965 a29.230138778686523,24.732315063476562 0 0 0 0.13717518746852875,-2.32755446434021 a29.230138778686523,24.732315063476562 0 0 0 -29.230470657348633,-24.73260498046875 z",
    style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "rect4271",
    d: "m702.1624794006348,493.43365478515625 a29.230138778686523,24.732315063476562 0 0 0 -29.229368209838867,24.73260498046875 a29.230138778686523,24.732315063476562 0 0 0 0.1569305956363678,2.338292121887207 a29.230138778686523,24.732315063476562 0 0 0 -16.9011287689209,22.39333724975586 a29.230138778686523,24.732315063476562 0 0 0 29.230470657348633,24.732601165771484 a29.230138778686523,24.732315063476562 0 0 0 16.659696578979492,-4.445288181304932 a29.230138778686523,24.732315063476562 0 0 0 0.9349871277809143,0.4752694368362427 l0,-70.20143127441406 a29.230138778686523,24.732315063476562 0 0 0 -0.8515886664390564,-0.025383148342370987 z",
    style: "opacity:1;fill:#668000;fill-opacity:1;stroke:none;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "-381.014579772949",
    x: "1841.2505474090576",
    height: "78.57142639160156",
    width: "14.285714149475098",
    id: "rect4276",
    style: "opacity:1;fill:#a05a2c;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4278",
    d: "m317.0906105041504,570.7548828125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
    style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "rect4280",
    d: "m337.15695571899414,542.5599975585938 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
    style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m317.0906105041504,570.7548828125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
    id: "path4295",
    "inkscape:connector-curvature": "0",
    "sodipodi:nodetypes": "cccc",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m337.15695571899414,542.5599975585938 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
    id: "path4297",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4303",
    d: "m317.0906105041504,563.9134521484375 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
    style: "fill:#abc837;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "path4305",
    d: "m337.15695571899414,535.716552734375 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
    style: "opacity:1;fill:#7c9128;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#afc941;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m317.0906105041504,553.745849609375 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
    id: "path4307",
    "inkscape:connector-curvature": "0",
    "sodipodi:nodetypes": "cccc",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "opacity:1;fill:#92aa2f;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m337.15695571899414,525.5509033203125 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
    id: "path4309",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4319",
    d: "m317.0906105041504,544.4093017578125 l40.53499221801758,0 l-20.46816635131836,-28.195560455322266 z",
    style: "fill:#b6d04f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "path4321",
    d: "m337.15695571899414,516.2124633789062 l-20.0660400390625,28.196125030517578 l20.46769142150879,0 l0,-27.642780303955078 l-0.40165355801582336,-0.5533425211906433 z",
    style: "opacity:1;fill:#a5c134;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "-383.68798065185524",
    x: "1949.6516704559326",
    height: "54.367774963378906",
    width: "9.885050773620605",
    id: "rect4276-0",
    style: "opacity:1;fill:#a05a2c;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4278-5",
    d: "m383.0668067932129,563.3727416992188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
    style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "rect4280-8",
    d: "m396.95178604125977,543.8629150390625 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
    style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#89a02c;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m383.0668067932129,563.3727416992188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
    id: "path4295-2",
    "inkscape:connector-curvature": "0",
    "sodipodi:nodetypes": "cccc",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "opacity:1;fill:#677821;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m396.95178604125977,543.8629150390625 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
    id: "path4297-6",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4303-8",
    d: "m383.0668067932129,558.6385498046875 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
    style: "fill:#abc837;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "path4305-6",
    d: "m396.95178604125977,539.1267700195312 l-13.884767532348633,19.510404586791992 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.38288575410842896 z",
    style: "opacity:1;fill:#7c9128;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#afc941;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m383.0668067932129,551.6022338867188 l28.048328399658203,0 l-14.163017272949219,-19.510021209716797 z",
    id: "path4307-5",
    "inkscape:connector-curvature": "0",
    "sodipodi:nodetypes": "cccc",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    style: "opacity:1;fill:#92aa2f;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m396.95178604125977,532.0924682617188 l-13.884767532348633,19.51041030883789 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.3828907608985901 z",
    id: "path4309-2",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "cccc",
    "inkscape:connector-curvature": "0",
    id: "path4319-9",
    d: "m383.0668067932129,545.1410522460938 l28.048328399658203,0 l-14.163017272949219,-19.510019302368164 z",
    style: "fill:#b6d04f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "path4321-3",
    d: "m396.95178604125977,525.6311645507812 l-13.884767532348633,19.510404586791992 l14.162691116333008,0 l0,-19.127519607543945 l-0.27792391180992126,-0.38288575410842896 z",
    style: "opacity:1;fill:#a5c134;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    id: "path4390",
    d: "m699.5636024475098,522.2152099609375 a21.27083396911621,17.981889724731445 0 0 0 -21.269887924194336,17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 21.269887924194336,17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 21.27099609375,-17.98219871520996 a21.27083396911621,17.981889724731445 0 0 0 -21.27099609375,-17.98219871520996 z",
    style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
    "inkscape:connector-curvature": "0",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "-402.236503601074",
    x: "2206.8574810028076",
    height: "84.79337310791016",
    width: "7.708488464355469",
    id: "rect4399",
    style: "opacity:1;fill:#784421;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("ellipse", {
    ry: "43.761871337890625",
    rx: "46.407936096191406",
    cy: "-419.05236053466774",
    cx: "2208.371030807495",
    id: "path4401",
    style: "opacity:1;fill:#aad400;fill-opacity:1;stroke:none;stroke-opacity:1",
    transform: "matrix(0.561871, 0, 0, 0.499668, -701, 741.506)",
    "stroke-width": "0"
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    id: "rect4403",
    d: "m539.8194007873535,510.253662109375 a26.075275421142578,21.866413116455078 0 0 0 -26.075023651123047,21.866104125976562 a26.075275421142578,21.866413116455078 0 0 0 26.075023651123047,21.866886138916016 a26.075275421142578,21.866413116455078 0 0 0 0.6863762140274048,-0.020436430349946022 l0,-43.683441162109375 a26.075275421142578,21.866413116455078 0 0 0 -0.6863762140274048,-0.02913065440952778 z",
    style: "opacity:1;fill:#88aa00;fill-opacity:1;stroke:none;stroke-opacity:1",
    "stroke-width": "0"
  })), /*#__PURE__*/React.createElement("path", {
    "sodipodi:nodetypes": "ccscscc",
    "inkscape:connector-curvature": "0",
    id: "path4469",
    d: "m393.1651611328125,322.6317596435547 l53.78911590576172,0 c0,0 -0.8710747361183167,-10.8884859085083 -12.195104598999023,-13.501727104187012 c-11.32402515411377,-2.6132330894470215 -15.897184371948242,5.226475238800049 -15.897184371948242,5.226475238800049 c0,0 -5.226475238800049,-3.266545057296753 -11.10626220703125,0.6533116698265076 c-5.8797783851623535,3.919856548309326 -4.79093074798584,5.662010192871094 -4.79093074798584,5.662010192871094 z",
    style: "fill:#b7c4c8;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    class: ""
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    style: "opacity:1;fill:#93a7ac;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m426.9194641113281,308.96275329589844 c-5.64824914932251,1.2665892839431763 -8.057548522949219,5.393733978271484 -8.057548522949219,5.393733978271484 c0,0 -5.226434707641602,-3.266580820083618 -11.10621166229248,0.6532710790634155 c-5.879782676696777,3.9198520183563232 -4.790998935699463,5.662159442901611 -4.790998935699463,5.662159442901611 l-9.79946231842041,1.9598084688186646 l33.75421905517578,0 l0,-13.668972969055176 z",
    id: "rect4476",
    class: ""
  }), /*#__PURE__*/React.createElement("path", {
    style: "fill:#dbe3de;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1",
    d: "m575.4722137451172,342.65003967285156 c0.8337307572364807,0 41.26947021484375,0 41.26947021484375,0 c0,0 1.4590232372283936,-8.33726692199707 -3.5433433055877686,-10.421582221984863 c-5.00234842300415,-2.084320068359375 -8.545687675476074,1.4590187072753906 -8.545687675476074,1.4590187072753906 c0,0 -3.5433433055877686,-6.461385250091553 -11.463747024536133,-6.461385250091553 c-7.920403003692627,0 -8.96255874633789,6.87824821472168 -8.96255874633789,6.87824821472168 c0,0 -2.7096123695373535,-6.669814586639404 -12.297468185424805,-3.75177264213562 c-9.587851524353027,2.918046474456787 -7.71196985244751,12.297472953796387 -7.71196985244751,12.297472953796387 z",
    id: "path4495",
    "inkscape:connector-curvature": "0",
    class: ""
  }), /*#__PURE__*/React.createElement("path", {
    "inkscape:connector-curvature": "0",
    style: "opacity:1;fill:#b7c8be;fill-opacity:1;stroke:none;stroke-opacity:1",
    d: "m593.1889801025391,327.2259979248047 c-7.920403003692627,0 -8.962550163269043,6.8784284591674805 -8.962550163269043,6.8784379959106445 c0,0 -2.7097434997558594,-6.669994354248047 -12.297595977783203,-3.751943826675415 c-9.58785629272461,2.918032646179199 -7.71183443069458,12.297591209411621 -7.71183443069458,12.297591209411621 l11.255228042602539,0 l19.592525482177734,0 l0,-15.297743797302246 c-0.5958198308944702,-0.0811285600066185 -1.2205075025558472,-0.126339390873909 -1.875773549079895,-0.126339390873909 z",
    id: "rect4497",
    class: ""
  })));
};
},{}],"../../node_modules/animejs/lib/anime.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
// Defaults
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) {
    return Array.isArray(a);
  },
  obj: function (a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function (a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function (a) {
    return a instanceof SVGElement;
  },
  inp: function (a) {
    return a instanceof HTMLInputElement;
  },
  dom: function (a) {
    return a.nodeType || is.svg(a);
  },
  str: function (a) {
    return typeof a === 'string';
  },
  fnc: function (a) {
    return typeof a === 'function';
  },
  und: function (a) {
    return typeof a === 'undefined';
  },
  nil: function (a) {
    return is.und(a) || a === null;
  },
  hex: function (a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function (a) {
    return /^rgb/.test(a);
  },
  hsl: function (a) {
    return /^hsl/.test(a);
  },
  col: function (a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function (a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function () {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function () {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function () {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function () {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function () {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function (amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function (i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop(i);

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function (t, p, v) {
    return t.style[p] = v;
  },
  attribute: function (t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function (t, p, v) {
    return t[p] = v;
  },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function (anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var _default = anime;
exports.default = _default;
},{}],"../code/components/NightSky.jsx":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Twinkling Night Sky by Sharna converted to regular JS by Jeff Hykin
var anime = require("animejs").default;

module.exports = function (_ref) {
  var _ref$numberOfStars = _ref.numberOfStars,
      numberOfStars = _ref$numberOfStars === void 0 ? 60 : _ref$numberOfStars,
      _ref$starScalingFacto = _ref.starScalingFactor,
      starScalingFactor = _ref$starScalingFacto === void 0 ? 115 : _ref$starScalingFacto;
  // declare sky so the interals can know when it's gone
  var sky; // 
  // 
  // regular stars
  // 
  // 
  // TODO: check to make sure it works okay with rectangle-shaped containers

  var regularStarContainer = /*#__PURE__*/React.createElement("svg", {
    height: "100%",
    width: "100%",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMin slice",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _toConsumableArray(Array(numberOfStars)).map(function (x, y) {
    return /*#__PURE__*/React.createElement("circle", {
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      randomRadiusSize: Math.random(),
      stroke: "none",
      strokeWidth: "0",
      fill: "white",
      key: y,
      class: "star",
      style: "opacity: 1;"
    });
  })); // 
  // animate the regular stars
  // 

  anime({
    targets: regularStarContainer.children,
    opacity: [{
      duration: 700,
      value: "0"
    }, {
      duration: 700,
      value: "1"
    }],
    easing: "linear",
    loop: true,
    delay: function delay(el, i) {
      return 50 * i;
    }
  }); // 
  // update radius when element size changes
  // 

  var computeRadius = function computeRadius(randomRadiusSize) {
    var clientWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    return (randomRadiusSize * 0.7 + 0.6) / (clientWidth / starScalingFactor);
  };

  var previousRegularStarContainerWidth = null;
  var regularStarIntervalId;
  regularStarIntervalId = setInterval(function () {
    if (!(sky && sky.parentElement)) {
      // kill this interval if the parent is deleted
      clearInterval(regularStarIntervalId);
    } else {
      // if the width of the parent changed pixel value
      if (regularStarContainer.clientWidth && regularStarContainer.clientWidth != previousRegularStarContainerWidth) {
        previousRegularStarContainerWidth = regularStarContainer.clientWidth; // update the radius

        var _iterator = _createForOfIteratorHelper(regularStarContainer.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var each = _step.value;
            each.setAttribute("r", computeRadius(each.randomRadiusSize, regularStarContainer.clientWidth));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, 250); // 
  // 
  // shooting stars
  // 
  // 

  var shootingStarContainer = /*#__PURE__*/React.createElement("div", null, _toConsumableArray(Array(numberOfStars)).map(function (x, y) {
    return /*#__PURE__*/React.createElement("div", {
      key: y,
      style: "\n                        height: 2px;\n                        top: 300px;\n                        width: 100px;\n                        margin: 0;\n                        opacity: 0;\n                        padding: 0;\n                        background-color: white;\n                        position: absolute;\n                        background: linear-gradient(-45deg, white, rgba(0, 0, 255, 0));\n                        filter: drop-shadow(0 0 6px white);\n                        overflow: hidden;\n                    ",
      randomYPosition: Math.random(),
      randomXPosition: Math.random()
    });
  }));
  shootingStarContainer.style = "\n        margin: 0px;\n        padding: 0px;\n        width: 200%;\n        height: 200%;\n        position: absolute;\n        overflow: hidden;\n        transform: scale(-1, 1) rotate(60deg) translateY(-0%) translateX(-50%);\n        top: 0;\n        left: 0;\n        transform-box: fill-box;\n        transform-origin: top left;\n    "; // 
  // update location when width of container changes
  // 

  var previousShootingStarContainerWidth = null;
  var shootingStartIntervalId;
  shootingStartIntervalId = setInterval(function () {
    if (!(sky && sky.parentElement)) {
      // kill this interval if the parent is deleted
      clearInterval(shootingStartIntervalId);
    } else {
      if (shootingStarContainer.clientWidth && shootingStarContainer.clientWidth != previousShootingStarContainerWidth) {
        previousShootingStarContainerWidth = shootingStarContainer.clientWidth;

        var _iterator2 = _createForOfIteratorHelper(shootingStarContainer.children),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var each = _step2.value;
            each.style.left = each.randomXPosition * shootingStarContainer.clientWidth;
            each.style.top = each.randomYPosition * shootingStarContainer.clientHeight;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, 250); // 
  // animate the shooting stars
  // 

  anime({
    targets: shootingStarContainer.children,
    easing: "linear",
    loop: true,
    delay: function delay(el, i) {
      return 1000 * i;
    },
    opacity: [{
      duration: 700,
      value: "1"
    }],
    width: [{
      value: "150px"
    }, {
      value: "0px"
    }],
    translateX: 350
  }); // 
  // 
  // sky
  // 
  // 

  sky = /*#__PURE__*/React.createElement("div", null, regularStarContainer, shootingStarContainer);
  sky.style = "\n        background: rgb(0,61,126);\n        background: radial-gradient(circle at 100%, rgba(0,61,126,1) 0%, rgba(2,0,36,1) 100%);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        z-index: -1;\n    ";
  return sky;
};
},{"animejs":"../../node_modules/animejs/lib/anime.es.js"}],"../code/pages/PageNotFound.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Campsite = require("../atoms/Campsite");

var NightSky = require("../components/NightSky");

module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("main", {
    class: "column centered",
    style: {
      overflow: "hidden",
      position: 'fixed',
      width: '100vw',
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement(NightSky, null), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: "white"
    }
  }, "404 Page Not Found \uD83D\uDE22"), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "scale(0.70) translateY(-15%)"
    }
  }, /*#__PURE__*/React.createElement(Campsite, null)));
};
},{"../atoms/Campsite":"../code/atoms/Campsite.jsx","../components/NightSky":"../code/components/NightSky.jsx"}],"../website.jsx":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// add CSS before everything else
require("css-baseline/css/3");

require("./global.scss");

require("./static_files/tailwind"); // libraries


var router = require("quik-router");

var Header = require("./code/skeletons/Header"); // 
// pages
// 


var OrgWaterfall = require("./code/pages/OrgWaterfall");

var RepoWaterfall = require("./code/pages/RepoWaterfall");

var ProductView = require("./code/pages/ProductView");

var PageNotFound = require("./code/pages/PageNotFound");

var homePage = "RepoWaterfall";
var pages = {
  OrgWaterfall: OrgWaterfall,
  RepoWaterfall: RepoWaterfall,
  ProductView: ProductView
}; // 
// every time something tries to change pages
// 

var previousPage = NaN; // NaN is just for init (makes comparision always not-equal)

function onRouteChange() {
  // if the page changes
  if (previousPage != router.pageInfo.page) {
    previousPage = router.pageInfo.page;
    var currentPage = router.pageInfo.page; // silently redirect to homePage

    if (currentPage == null) {
      currentPage = homePage;
      router.goSecretlyTo(_objectSpread({
        page: homePage
      }, router.pageInfo));
    } // 
    // create the new main element
    // 


    var getNewMain = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var Page, newMain;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Page = pages[currentPage] || PageNotFound;
                _context.next = 3;
                return Page({}, []);

              case 3:
                newMain = _context.sent;
                return _context.abrupt("return", newMain);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getNewMain() {
        return _ref.apply(this, arguments);
      };
    }(); // 
    // get the old main element
    // 


    var getMainElement = function getMainElement() {
      var main = document.querySelector("main");
      var mainExisted = main != null; // if somehow the page gets broken, reset it

      if (!mainExisted) {
        console.debug("main was null:");
        document.body = /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement(Header, null), main = /*#__PURE__*/React.createElement("main", null));
      }

      return [main, mainExisted];
    }; // 
    // animate fade between pages
    // 


    var _getMainElement = getMainElement(),
        _getMainElement2 = _slicedToArray(_getMainElement, 2),
        oldMain = _getMainElement2[0],
        mainExisted = _getMainElement2[1];

    var duration = 500; // miliseconds

    oldMain.style.transition = "all ".concat(duration, "ms ease-in-out 0s");
    oldMain.style.opacity = 0;
    setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _getMainElement3, _getMainElement4, oldMain, _, parent, dummy, newMainElement, originalTransitionProperty, originalOpacityProperty;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 
              // replace old main with a dummy
              // 
              _getMainElement3 = getMainElement(), _getMainElement4 = _slicedToArray(_getMainElement3, 2), oldMain = _getMainElement4[0], _ = _getMainElement4[1];
              parent = oldMain.parentNode;
              dummy = /*#__PURE__*/React.createElement("div", null);
              parent.insertBefore(dummy, oldMain);
              parent.removeChild(oldMain); // 
              // setup new main
              // 
              // (needs to be done after removing old main, cause two mains can't exist at the same time)

              _context2.next = 7;
              return getNewMain();

            case 7:
              newMainElement = _context2.sent;
              originalTransitionProperty = newMainElement.style.transition;
              originalOpacityProperty = newMainElement.style.opacity == "" ? 1 : newMainElement.style.opacity;
              newMainElement.style.opacity = 0;
              newMainElement.style.transition = "all ".concat(duration, "ms ease-in-out 0s"); // 
              // replace dummy with new main
              // 

              parent.insertBefore(newMainElement, dummy);
              parent.removeChild(dummy); // animate the new main

              setTimeout(function () {
                newMainElement.style.opacity = originalOpacityProperty; // restore the new main's transition property

                setTimeout(function () {
                  return newMainElement.style.transition = originalTransitionProperty;
                }, duration * 1.1);
              }, 0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), duration * 1.1 * mainExisted);
  }
}

router.addEventListener("go", onRouteChange);
onRouteChange(); // first time the page loads
},{"css-baseline/css/3":"../../node_modules/css-baseline/css/3.css","./global.scss":"../global.scss","./static_files/tailwind":"../static_files/tailwind.css","quik-router":"../../node_modules/quik-router/main/main.js","./code/skeletons/Header":"../code/skeletons/Header.jsx","./code/pages/OrgWaterfall":"../code/pages/OrgWaterfall.jsx","./code/pages/RepoWaterfall":"../code/pages/RepoWaterfall.jsx","./code/pages/ProductView":"../code/pages/ProductView.jsx","./code/pages/PageNotFound":"../code/pages/PageNotFound.jsx"}],"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62083" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../website.jsx"], null)
//# sourceMappingURL=/website.baea1d43.js.map