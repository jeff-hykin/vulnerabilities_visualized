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
},{"@vue/reactivity":"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js","@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs"}],"../code/skeletons/GraphDisplay.jsx":[function(require,module,exports) {
var _excluded = ["children", "sizeOfNodeInPixels", "padding"];

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var numberOfSidesOfHexagon = 6;
var numberOfRadiansInACircle = Math.PI * 2;

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
} // (google "hexagonal tessellation" to see what this function is doing)
//    this creates an array of x,y pairs
//    each pair is a point creating a spiraling-outwards pattern
//    pattern:
//        1 center node 
//        6 surrounding nodes
//        12 nodes on the outside of the 6
//        18 nodes on the outside of the 12
//        ... etc
//    the x,y pair is at the center of each hexagon


function getHexagonLocations(numberOfHexagonsNeeded, diameterOfHexagon) {
  var locations = [[0, 0]];
  var ringIndex = 0;
  var availableSlots = 1; // the availableSlots will increase like this:
  //      1 (+6*1) -> 7 (+6*2) -> 19 (+6*3) -> 37 (+6*4) -> etc 

  while (true) {
    // if we fit all the hexagons in the last ring, then break
    if (numberOfHexagonsNeeded - 1 < availableSlots) {
      break;
    } // otherwise make another ring


    ringIndex += 1;
    var numberOfHexagonsInRing = numberOfSidesOfHexagon * ringIndex;
    var distanceFromCenter = diameterOfHexagon * ringIndex;
    availableSlots += numberOfHexagonsInRing;
    var radiansBetweenEachHexagon = numberOfRadiansInACircle / numberOfHexagonsInRing;
    var radians = -radiansBetweenEachHexagon;

    for (var each in _toConsumableArray(Array(numberOfHexagonsInRing))) {
      // increment by one angle
      radians += radiansBetweenEachHexagon;
      var xPosition = distanceFromCenter * Math.cos(radians);
      var yPosition = distanceFromCenter * Math.sin(radians);
      locations.push([xPosition, yPosition]);

      if (locations.length >= numberOfHexagonsNeeded) {
        break;
      }
    }
  }

  return locations;
}

module.exports = function (_ref) {
  var children = _ref.children,
      sizeOfNodeInPixels = _ref.sizeOfNodeInPixels,
      padding = _ref.padding,
      properties = _objectWithoutProperties(_ref, _excluded);

  var xyCenterLocations = getHexagonLocations(children.length, sizeOfNodeInPixels + padding);
  var max = Math.max.apply(Math, _toConsumableArray(xyCenterLocations.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        x = _ref3[0],
        y = _ref3[1];

    return x;
  }))); // create some wrappers to get everything lined up correctly

  var container = /*#__PURE__*/React.createElement("div", {
    class: "centered",
    style: {
      position: 'relative',
      minWidth: "".concat(2 * max, "px"),
      minHeight: "".concat(2 * max, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: "position: relative; overflow: visible; max-width: 0; min-width: 0; max-height: 0; min-height: 0;"
  })); // we want to show the container first, then slowly add each node

  function loadLater() {
    // load all the nodes in order
    var index = -1;

    var _iterator = _createForOfIteratorHelper(children),
        _step;

    try {
      var _loop = function _loop() {
        var eachChildElement = _step.value;
        index += 1;

        var _xyCenterLocations$in = _slicedToArray(xyCenterLocations[index], 2),
            x = _xyCenterLocations$in[0],
            y = _xyCenterLocations$in[1]; // have them start off invisible, then fade in


        var graphNode = /*#__PURE__*/React.createElement("div", {
          class: "circle centered shadow animate",
          style: "\n                    --size: ".concat(sizeOfNodeInPixels, "px ;\n                    color: white;\n                    background-color: var(--blue);\n                    opacity: 0;\n                    position: absolute;\n                    left: ").concat(x, "px;\n                    top: ").concat(y, "px;\n                    transform: translate(-50%, -50%);")
        }, eachChildElement);
        container.children[0].appendChild(graphNode); // have them fade in one after another

        setTimeout(function () {
          graphNode.style.opacity = 1;
        }, 500 * index); // half a second per index
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  setTimeout(loadLater(), 0);
  return container;
};
},{}],"../../node_modules/tiny-emitter/index.js":[function(require,module,exports) {
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;

},{}],"../../node_modules/virtual-scroll/src/support.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.support = void 0;
var support = {
  hasWheelEvent: 'onwheel' in document,
  hasMouseWheelEvent: 'onmousewheel' in document,
  hasTouch: 'ontouchstart' in document,
  hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
  hasPointer: !!window.navigator.msPointerEnabled,
  hasKeyDown: 'onkeydown' in document,
  isFirefox: navigator.userAgent.indexOf('Firefox') > -1
};
exports.support = support;
},{}],"../../node_modules/virtual-scroll/src/keycodes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyCodes = void 0;
var keyCodes = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32
};
exports.keyCodes = keyCodes;
},{}],"../../node_modules/virtual-scroll/src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));

var _support = require("./support");

var _keycodes = require("./keycodes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var EVT_ID = 'virtualscroll';

var _options = /*#__PURE__*/new WeakMap();

var _el = /*#__PURE__*/new WeakMap();

var _emitter = /*#__PURE__*/new WeakMap();

var _event = /*#__PURE__*/new WeakMap();

var _touchStart = /*#__PURE__*/new WeakMap();

var _bodyTouchAction = /*#__PURE__*/new WeakMap();

var VirtualScroll = /*#__PURE__*/function () {
  function VirtualScroll(options) {
    _classCallCheck(this, VirtualScroll);

    _classPrivateFieldInitSpec(this, _options, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _el, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _emitter, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _event, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _touchStart, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _bodyTouchAction, {
      writable: true,
      value: void 0
    });

    // Make sure these events listeners have the proper context (for both .addEventListener and .removeEventListener)
    bindThis(['_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown'], this);

    _classPrivateFieldSet(this, _el, window);

    if (options && options.el) {
      _classPrivateFieldSet(this, _el, options.el);

      delete options.el;
    }

    _classPrivateFieldSet(this, _options, Object.assign({
      mouseMultiplier: 1,
      touchMultiplier: 2,
      firefoxMultiplier: 15,
      keyStep: 120,
      preventTouch: false,
      unpreventTouchClass: 'vs-touchmove-allowed',
      useKeyboard: true,
      useTouch: true
    }, options));

    _classPrivateFieldSet(this, _emitter, new _tinyEmitter.default());

    _classPrivateFieldSet(this, _event, {
      y: 0,
      x: 0,
      deltaX: 0,
      deltaY: 0
    });

    _classPrivateFieldSet(this, _touchStart, {
      x: null,
      y: null
    });

    _classPrivateFieldSet(this, _bodyTouchAction, null);

    if (_classPrivateFieldGet(this, _options).passive !== undefined) {
      this.listenerOptions = {
        passive: _classPrivateFieldGet(this, _options).passive
      };
    }
  }

  _createClass(VirtualScroll, [{
    key: "_notify",
    value: function _notify(e) {
      var evt = _classPrivateFieldGet(this, _event);

      evt.x += evt.deltaX;
      evt.y += evt.deltaY;

      _classPrivateFieldGet(this, _emitter).emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
      });
    }
  }, {
    key: "_onWheel",
    value: function _onWheel(e) {
      var options = _classPrivateFieldGet(this, _options);

      var evt = _classPrivateFieldGet(this, _event); // In Chrome and in Firefox (at least the new one)


      evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
      evt.deltaY = e.wheelDeltaY || e.deltaY * -1; // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
      // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes

      if (_support.support.isFirefox && e.deltaMode === 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
      }

      evt.deltaX *= options.mouseMultiplier;
      evt.deltaY *= options.mouseMultiplier;

      this._notify(e);
    }
  }, {
    key: "_onMouseWheel",
    value: function _onMouseWheel(e) {
      var evt = _classPrivateFieldGet(this, _event); // In Safari, IE and in Chrome if 'wheel' isn't defined


      evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
      evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

      this._notify(e);
    }
  }, {
    key: "_onTouchStart",
    value: function _onTouchStart(e) {
      var t = e.targetTouches ? e.targetTouches[0] : e;
      _classPrivateFieldGet(this, _touchStart).x = t.pageX;
      _classPrivateFieldGet(this, _touchStart).y = t.pageY;
    }
  }, {
    key: "_onTouchMove",
    value: function _onTouchMove(e) {
      var options = _classPrivateFieldGet(this, _options);

      if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
      }

      var evt = _classPrivateFieldGet(this, _event);

      var t = e.targetTouches ? e.targetTouches[0] : e;
      evt.deltaX = (t.pageX - _classPrivateFieldGet(this, _touchStart).x) * options.touchMultiplier;
      evt.deltaY = (t.pageY - _classPrivateFieldGet(this, _touchStart).y) * options.touchMultiplier;
      _classPrivateFieldGet(this, _touchStart).x = t.pageX;
      _classPrivateFieldGet(this, _touchStart).y = t.pageY;

      this._notify(e);
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(e) {
      var evt = _classPrivateFieldGet(this, _event);

      evt.deltaX = evt.deltaY = 0;
      var windowHeight = window.innerHeight - 40;

      switch (e.keyCode) {
        case _keycodes.keyCodes.LEFT:
        case _keycodes.keyCodes.UP:
          evt.deltaY = _classPrivateFieldGet(this, _options).keyStep;
          break;

        case _keycodes.keyCodes.RIGHT:
        case _keycodes.keyCodes.DOWN:
          evt.deltaY = -_classPrivateFieldGet(this, _options).keyStep;
          break;

        case _keycodes.keyCodes.SPACE:
          evt.deltaY = windowHeight * (e.shiftKey ? 1 : -1);
          break;

        default:
          return;
      }

      this._notify(e);
    }
  }, {
    key: "_bind",
    value: function _bind() {
      if (_support.support.hasWheelEvent) {
        _classPrivateFieldGet(this, _el).addEventListener('wheel', this._onWheel, this.listenerOptions);
      }

      if (_support.support.hasMouseWheelEvent) {
        _classPrivateFieldGet(this, _el).addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
      }

      if (_support.support.hasTouch && _classPrivateFieldGet(this, _options).useTouch) {
        _classPrivateFieldGet(this, _el).addEventListener('touchstart', this._onTouchStart, this.listenerOptions);

        _classPrivateFieldGet(this, _el).addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
      }

      if (_support.support.hasPointer && _support.support.hasTouchWin) {
        _classPrivateFieldSet(this, _bodyTouchAction, document.body.style.msTouchAction);

        document.body.style.msTouchAction = 'none';

        _classPrivateFieldGet(this, _el).addEventListener('MSPointerDown', this._onTouchStart, true);

        _classPrivateFieldGet(this, _el).addEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if (_support.support.hasKeyDown && _classPrivateFieldGet(this, _options).useKeyboard) {
        document.addEventListener('keydown', this._onKeyDown);
      }
    }
  }, {
    key: "_unbind",
    value: function _unbind() {
      if (_support.support.hasWheelEvent) {
        _classPrivateFieldGet(this, _el).removeEventListener('wheel', this._onWheel);
      }

      if (_support.support.hasMouseWheelEvent) {
        _classPrivateFieldGet(this, _el).removeEventListener('mousewheel', this._onMouseWheel);
      }

      if (_support.support.hasTouch) {
        _classPrivateFieldGet(this, _el).removeEventListener('touchstart', this._onTouchStart);

        _classPrivateFieldGet(this, _el).removeEventListener('touchmove', this._onTouchMove);
      }

      if (_support.support.hasPointer && _support.support.hasTouchWin) {
        document.body.style.msTouchAction = _classPrivateFieldGet(this, _bodyTouchAction);

        _classPrivateFieldGet(this, _el).removeEventListener('MSPointerDown', this._onTouchStart, true);

        _classPrivateFieldGet(this, _el).removeEventListener('MSPointerMove', this._onTouchMove, true);
      }

      if (_support.support.hasKeyDown && _classPrivateFieldGet(this, _options).useKeyboard) {
        document.removeEventListener('keydown', this._onKeyDown);
      }
    }
  }, {
    key: "on",
    value: function on(cb, ctx) {
      _classPrivateFieldGet(this, _emitter).on(EVT_ID, cb, ctx);

      var events = _classPrivateFieldGet(this, _emitter).e;

      if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
    }
  }, {
    key: "off",
    value: function off(cb, ctx) {
      _classPrivateFieldGet(this, _emitter).off(EVT_ID, cb, ctx);

      var events = _classPrivateFieldGet(this, _emitter).e;

      if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _classPrivateFieldGet(this, _emitter).off();

      this._unbind();
    }
  }]);

  return VirtualScroll;
}();

exports.default = VirtualScroll;

function bindThis(fns, ctx) {
  fns.forEach(function (fn) {
    ctx[fn] = ctx[fn].bind(ctx);
  });
}
},{"tiny-emitter":"../../node_modules/tiny-emitter/index.js","./support":"../../node_modules/virtual-scroll/src/support.js","./keycodes":"../../node_modules/virtual-scroll/src/keycodes.js"}],"../code/systems/on_scroll.js":[function(require,module,exports) {
var VirtualScroll = require('virtual-scroll').default;

var scroller = new VirtualScroll();
module.exports = {
  onScroll: function onScroll() {
    return scroller.on.apply(scroller, arguments);
  }
};
},{"virtual-scroll":"../../node_modules/virtual-scroll/src/index.js"}],"../code/skeletons/InfoGraphic.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _require = require("../systems/on_scroll"),
    onScroll = _require.onScroll;

module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  var wrapper;
  var isHovered = false;
  onScroll(function (event) {
    if (wrapper && wrapper.isHovered) {
      console.log("wrapper.style.bottom is:", wrapper.style.bottom);
      window.wrapper = wrapper;
      wrapper.style.bottom = -event.deltaY + (wrapper.style.bottom.replace(/px/, "") - 0);
    }
  });
  return wrapper = /*#__PURE__*/React.createElement("div", {
    name: "info-graphic" // class="animate"
    ,
    style: "position: absolute; bottom: 0; transform: translateY(-100%); width: 100%; z-index: 999; transition: all 0.01s ease-in-out 0s;",
    onscroll: function onscroll(e) {
      return console.log(e);
    },
    onmouseover: function onmouseover() {
      return wrapper.isHovered = true;
    },
    onmouseenter: function onmouseenter() {
      return wrapper.isHovered = true;
    },
    onmouseleave: function onmouseleave() {
      return wrapper.isHovered = false;
    }
  }, /*#__PURE__*/React.createElement("div", {
    name: "tab",
    style: "height: 6rem; width: 100%; overflow: hidden; position: absolute; top: 0; transform: translateY(-100%);"
  }, /*#__PURE__*/React.createElement("div", {
    class: "circle",
    style: "--size: 100vw; background-color: var(--green); transform: scaleX(200%)"
  })), /*#__PURE__*/React.createElement("div", {
    style: "width: 100%; height: fit-content;"
  }, children));
};
},{"../systems/on_scroll":"../code/systems/on_scroll.js"}],"../code/pages/Home.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var GraphDisplay = require("../skeletons/GraphDisplay");

var InfoGraphic = require("../skeletons/InfoGraphic");

module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("body", {
    class: "column centered",
    style: "height: 100vh; overflow: hidden;"
  }, /*#__PURE__*/React.createElement(GraphDisplay, {
    sizeOfNodeInPixels: 300,
    padding: 200
  }, /*#__PURE__*/React.createElement("h4", null, "Howdy1"), /*#__PURE__*/React.createElement("h4", null, "Howdy2"), /*#__PURE__*/React.createElement("h4", null, "Howdy3"), /*#__PURE__*/React.createElement("h4", null, "Howdy4"), /*#__PURE__*/React.createElement("h4", null, "Howdy5"), /*#__PURE__*/React.createElement("h4", null, "Howdy6"), /*#__PURE__*/React.createElement("h4", null, "Howdy7"), /*#__PURE__*/React.createElement("h4", null, "Howdy8")), /*#__PURE__*/React.createElement(InfoGraphic, null));
};
},{"../skeletons/GraphDisplay":"../code/skeletons/GraphDisplay.jsx","../skeletons/InfoGraphic":"../code/skeletons/InfoGraphic.jsx"}],"../code/pages/ProductView.jsx":[function(require,module,exports) {
var _excluded = ["children", "title", "actions"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

module.exports = function (_ref) {
  var children = _ref.children,
      title = _ref.title,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    class: "row"
  }, /*#__PURE__*/React.createElement("div", {
    class: "col s12 m7"
  }, /*#__PURE__*/React.createElement("div", _extends({
    class: "card"
  }, properties), /*#__PURE__*/React.createElement("div", {
    class: "card-content"
  }, title && /*#__PURE__*/React.createElement("span", {
    class: "card-title"
  }, title), children), actions.map(function (each) {
    return /*#__PURE__*/React.createElement("div", {
      class: "card-action"
    }, each);
  }))));
};
},{}],"../code/atoms/Campsite.jsx":[function(require,module,exports) {
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

  return /*#__PURE__*/React.createElement("body", {
    class: "column centered",
    style: {
      overflow: "hidden"
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
// add CSS before everything else
require("css-baseline/css/3");

require("./global.scss"); // libraries


var router = require("quik-router"); // pages


var Home = require("./code/pages/Home");

var ProductView = require("./code/pages/ProductView");

var PageNotFound = require("./code/pages/PageNotFound"); // every time something tries to change pages


router.addEventListener("navigate", onRouteChange); // first time the page loads

onRouteChange();

function onRouteChange() {
  var pageInfo = router.pageInfo; // silently redirect to home page

  if (pageInfo.name == null) {
    pageInfo.name = "home";
  } // 
  // load page
  // 


  if (pageInfo.name == "home") {
    document.body = /*#__PURE__*/React.createElement(Home, null);
  } else if (pageInfo.name == "product-view") {
    document.body = /*#__PURE__*/React.createElement(ProductView, null);
  } else {
    document.body = /*#__PURE__*/React.createElement(PageNotFound, null);
  }
}
},{"css-baseline/css/3":"../../node_modules/css-baseline/css/3.css","./global.scss":"../global.scss","quik-router":"../../node_modules/quik-router/main/main.js","./code/pages/Home":"../code/pages/Home.jsx","./code/pages/ProductView":"../code/pages/ProductView.jsx","./code/pages/PageNotFound":"../code/pages/PageNotFound.jsx"}],"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51500" + '/');

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