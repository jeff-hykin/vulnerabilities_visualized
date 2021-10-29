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
},{"@vue/reactivity":"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js","@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs"}],"../code/tools/silent_require.js":[function(require,module,exports) {
// 
// just like require but silences messages
// 
var realConsole = globalThis.console;
var originalThing = console;
var proxyObject = new Proxy(originalThing, {
  get: function get(originalThing, key) {
    // basically prevent logging and debugging of stuff
    if (key == "log" || key == "debug") {
      return function () {
        return 0;
      };
    }

    return originalThing[key];
  },
  set: function set(originalThing, key, newValue) {
    if (key == "log" || key == "debug") {
      return;
    }

    return originalThing[key] = newValue;
  }
});

var silentRequire = function silentRequire() {
  globalThis.console = silentRequire.silentConsole;

  var output = require.apply(void 0, arguments);

  globalThis.console = realConsole;
  return output;
};

silentRequire.silentConsole = proxyObject;
silentRequire.realConsole = console;
module.exports = silentRequire;
},{}],"../../node_modules/gun/gun.js":[function(require,module,exports) {
;

(function () {
  /* UNBUILD */
  function USE(arg, req) {
    return req ? require(arg) : arg.slice ? USE[R(arg)] : function (mod, path) {
      arg(mod = {
        exports: {}
      });
      USE[R(path)] = mod.exports;
    };

    function R(p) {
      return p.split('/').slice(-1).toString().replace('.js', '');
    }
  }

  if (typeof module !== "undefined") {
    var MODULE = module;
  }
  /* UNBUILD */


  ;
  USE(function (module) {
    // Shim for generic javascript utilities.
    String.random = function (l, c) {
      var s = '';
      l = l || 24; // you are not going to make a 0 length random number, so no need to check type

      c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';

      while (l-- > 0) {
        s += c.charAt(Math.floor(Math.random() * c.length));
      }

      return s;
    };

    String.match = function (t, o) {
      var tmp, u;

      if ('string' !== typeof t) {
        return false;
      }

      if ('string' == typeof o) {
        o = {
          '=': o
        };
      }

      o = o || {};
      tmp = o['='] || o['*'] || o['>'] || o['<'];

      if (t === tmp) {
        return true;
      }

      if (u !== o['=']) {
        return false;
      }

      tmp = o['*'] || o['>'];

      if (t.slice(0, (tmp || '').length) === tmp) {
        return true;
      }

      if (u !== o['*']) {
        return false;
      }

      if (u !== o['>'] && u !== o['<']) {
        return t >= o['>'] && t <= o['<'] ? true : false;
      }

      if (u !== o['>'] && t >= o['>']) {
        return true;
      }

      if (u !== o['<'] && t <= o['<']) {
        return true;
      }

      return false;
    };

    String.hash = function (s, c) {
      // via SO
      if (typeof s !== 'string') {
        return;
      }

      c = c || 0; // CPU schedule hashing by

      if (!s.length) {
        return c;
      }

      for (var i = 0, l = s.length, n; i < l; ++i) {
        n = s.charCodeAt(i);
        c = (c << 5) - c + n;
        c |= 0;
      }

      return c;
    };

    var has = Object.prototype.hasOwnProperty;

    Object.plain = function (o) {
      return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false;
    };

    Object.empty = function (o, n) {
      for (var k in o) {
        if (has.call(o, k) && (!n || -1 == n.indexOf(k))) {
          return false;
        }
      }

      return true;
    };

    Object.keys = Object.keys || function (o) {
      var l = [];

      for (var k in o) {
        if (has.call(o, k)) {
          l.push(k);
        }
      }

      return l;
    };

    (function () {
      // max ~1ms or before stack overflow 
      var u,
          sT = setTimeout,
          l = 0,
          c = 0,
          sI = typeof setImmediate !== '' + u && setImmediate || sT; // queueMicrotask faster but blocks UI

      sT.poll = sT.poll || function (f) {
        //f(); return; // for testing
        if (1 >= +new Date() - l && c++ < 3333) {
          f();
          return;
        }

        sI(function () {
          l = +new Date();
          f();
        }, c = 0);
      };
    })();

    ;

    (function () {
      // Too many polls block, this "threads" them in turns over a single thread in time.
      var sT = setTimeout,
          t = sT.turn = sT.turn || function (f) {
        1 == s.push(f) && p(T);
      },
          s = t.s = [],
          p = sT.poll,
          i = 0,
          f,
          T = function () {
        if (f = s[i++]) {
          f();
        }

        if (i == s.length || 99 == i) {
          s = t.s = s.slice(i);
          i = 0;
        }

        if (s.length) {
          p(T);
        }
      };
    })();

    ;

    (function () {
      var u,
          sT = setTimeout,
          T = sT.turn;
      (sT.each = sT.each || function (l, f, e, S) {
        S = S || 9;

        (function t(s, L, r) {
          if (L = (s = (l || []).splice(0, S)).length) {
            for (var i = 0; i < L; i++) {
              if (u !== (r = f(s[i]))) {
                break;
              }
            }

            if (u === r) {
              T(t);
              return;
            }
          }

          e && e(r);
        })();
      })();
    })();
  })(USE, './shim');
  ;
  USE(function (module) {
    // On event emitter generic javascript utility.
    module.exports = function onto(tag, arg, as) {
      if (!tag) {
        return {
          to: onto
        };
      }

      var u,
          f = 'function' == typeof arg,
          tag = (this.tag || (this.tag = {}))[tag] || f && (this.tag[tag] = {
        tag: tag,
        to: onto._ = {
          next: function (arg) {
            var tmp;

            if (tmp = this.to) {
              tmp.next(arg);
            }
          }
        }
      });

      if (f) {
        var be = {
          off: onto.off || (onto.off = function () {
            if (this.next === onto._.next) {
              return !0;
            }

            if (this === this.the.last) {
              this.the.last = this.back;
            }

            this.to.back = this.back;
            this.next = onto._.next;
            this.back.to = this.to;

            if (this.the.last === this.the) {
              delete this.on.tag[this.the.tag];
            }
          }),
          to: onto._,
          next: arg,
          the: tag,
          on: this,
          as: as
        };
        (be.back = tag.last || tag).to = be;
        return tag.last = be;
      }

      if ((tag = tag.to) && u !== arg) {
        tag.next(arg);
      }

      return tag;
    };
  })(USE, './onto');
  ;
  USE(function (module) {
    USE('./shim');

    module.exports = function (v) {
      // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
      if (v === undefined) {
        return false;
      }

      if (v === null) {
        return true;
      } // "deletes", nulling out keys.


      if (v === Infinity) {
        return false;
      } // we want this to be, but JSON does not support it, sad face.


      if (v !== v) {
        return false;
      } // can you guess what this checks for? ;)


      if ('string' == typeof v // text!
      || 'boolean' == typeof v || 'number' == typeof v) {
        return true; // simple values are valid.
      }

      if (v && 'string' == typeof (v['#'] || 0) && Object.empty(v, ['#'])) {
        return v['#'];
      } // is link


      return false; // If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
    };
  })(USE, './valid');
  ;
  USE(function (module) {
    USE('./shim');

    function State() {
      var t = +new Date();

      if (last < t) {
        return N = 0, last = t + State.drift;
      }

      return last = t + (N += 1) / D + State.drift;
    }

    State.drift = 0;
    var NI = -Infinity,
        N = 0,
        D = 999,
        last = NI,
        u; // WARNING! In the future, on machines that are D times faster than 2016AD machines, you will want to increase D by another several orders of magnitude so the processing speed never out paces the decimal resolution (increasing an integer effects the state accuracy).

    State.is = function (n, k, o) {
      // convenience function to get the state on a key on a node and return it.
      var tmp = k && n && n._ && n._['>'] || o;

      if (!tmp) {
        return;
      }

      return 'number' == typeof (tmp = tmp[k]) ? tmp : NI;
    };

    State.ify = function (n, k, s, v, soul) {
      // put a key's state on a node.
      (n = n || {})._ = n._ || {}; // safety check or init.

      if (soul) {
        n._['#'] = soul;
      } // set a soul if specified.


      var tmp = n._['>'] || (n._['>'] = {}); // grab the states data.

      if (u !== k && k !== '_') {
        if ('number' == typeof s) {
          tmp[k] = s;
        } // add the valid state.


        if (u !== v) {
          n[k] = v;
        } // Note: Not its job to check for valid values!

      }

      return n;
    };

    module.exports = State;
  })(USE, './state');
  ;
  USE(function (module) {
    USE('./shim');

    function Dup(opt) {
      var dup = {
        s: {}
      },
          s = dup.s;
      opt = opt || {
        max: 999,
        age: 1000 * 9
      }; //*/ 1000 * 9 * 3};

      dup.check = function (id) {
        if (!s[id]) {
          return false;
        }

        return dt(id);
      };

      var dt = dup.track = function (id) {
        var it = s[id] || (s[id] = {});
        it.was = dup.now = +new Date();

        if (!dup.to) {
          dup.to = setTimeout(dup.drop, opt.age + 9);
        }

        return it;
      };

      dup.drop = function (age) {
        dup.to = null;
        dup.now = +new Date();
        var l = Object.keys(s);
        console.STAT && console.STAT(dup.now, +new Date() - dup.now, 'dup drop keys'); // prev ~20% CPU 7% RAM 300MB // now ~25% CPU 7% RAM 500MB

        setTimeout.each(l, function (id) {
          var it = s[id]; // TODO: .keys( is slow?

          if (it && (age || opt.age) > dup.now - it.was) {
            return;
          }

          delete s[id];
        }, 0, 99);
      };

      return dup;
    }

    module.exports = Dup;
  })(USE, './dup');
  ;
  USE(function (module) {
    // request / response module, for asking and acking messages.
    USE('./onto'); // depends upon onto!

    module.exports = function ask(cb, as) {
      if (!this.on) {
        return;
      }

      var lack = (this.opt || {}).lack || 9000;

      if (!('function' == typeof cb)) {
        if (!cb) {
          return;
        }

        var id = cb['#'] || cb,
            tmp = (this.tag || '')[id];

        if (!tmp) {
          return;
        }

        if (as) {
          tmp = this.on(id, as);
          clearTimeout(tmp.err);
          tmp.err = setTimeout(function () {
            tmp.off();
          }, lack);
        }

        return true;
      }

      var id = as && as['#'] || random(9);

      if (!cb) {
        return id;
      }

      var to = this.on(id, cb, as);
      to.err = to.err || setTimeout(function () {
        to.off();
        to.next({
          err: "Error: No ACK yet.",
          lack: true
        });
      }, lack);
      return id;
    };

    var random = String.random || function () {
      return Math.random().toString(36).slice(2);
    };
  })(USE, './ask');
  ;
  USE(function (module) {
    function Gun(o) {
      if (o instanceof Gun) {
        return (this._ = {
          $: this
        }).$;
      }

      if (!(this instanceof Gun)) {
        return new Gun(o);
      }

      return Gun.create(this._ = {
        $: this,
        opt: o
      });
    }

    Gun.is = function ($) {
      return $ instanceof Gun || $ && $._ && $ === $._.$ || false;
    };

    Gun.version = 0.2020;
    Gun.chain = Gun.prototype;

    Gun.chain.toJSON = function () {};

    USE('./shim');
    Gun.valid = USE('./valid');
    Gun.state = USE('./state');
    Gun.on = USE('./onto');
    Gun.dup = USE('./dup');
    Gun.ask = USE('./ask');
    ;

    (function () {
      Gun.create = function (at) {
        at.root = at.root || at;
        at.graph = at.graph || {};
        at.on = at.on || Gun.on;
        at.ask = at.ask || Gun.ask;
        at.dup = at.dup || Gun.dup();
        var gun = at.$.opt(at.opt);

        if (!at.once) {
          at.on('in', universe, at);
          at.on('out', universe, at);
          at.on('put', map, at);
          Gun.on('create', at);
          at.on('create', at);
        }

        at.once = 1;
        return gun;
      };

      function universe(msg) {
        //if(!F){ var eve = this; setTimeout(function(){ universe.call(eve, msg,1) },Math.random() * 100);return; } // ADD F TO PARAMS!
        if (!msg) {
          return;
        }

        if (msg.out === universe) {
          this.to.next(msg);
          return;
        }

        var eve = this,
            as = eve.as,
            at = as.at || as,
            gun = at.$,
            dup = at.dup,
            tmp,
            DBG = msg.DBG;
        (tmp = msg['#']) || (tmp = msg['#'] = text_rand(9));

        if (dup.check(tmp)) {
          return;
        }

        dup.track(tmp);
        tmp = msg._;
        msg._ = 'function' == typeof tmp ? tmp : function () {};
        msg.$ && msg.$ === (msg.$._ || '').$ || (msg.$ = gun);

        if (msg['@'] && !msg.put) {
          ack(msg);
        }

        if (!at.ask(msg['@'], msg)) {
          // is this machine listening for an ack?
          DBG && (DBG.u = +new Date());

          if (msg.put) {
            put(msg);
            return;
          } else if (msg.get) {
            Gun.on.get(msg, gun);
          }
        }

        DBG && (DBG.uc = +new Date());
        eve.to.next(msg);
        DBG && (DBG.ua = +new Date());

        if (msg.nts || msg.NTS) {
          return;
        } // TODO: This shouldn't be in core, but fast way to prevent NTS spread. Delete this line after all peers have upgraded to newer versions.


        msg.out = universe;
        at.on('out', msg);
        DBG && (DBG.ue = +new Date());
      }

      function put(msg) {
        if (!msg) {
          return;
        }

        var ctx = msg._ || '',
            root = ctx.root = ((ctx.$ = msg.$ || '')._ || '').root;

        if (msg['@'] && ctx.faith && !ctx.miss) {
          // TODO: AXE may split/route based on 'put' what should we do here? Detect @ in AXE? I think we don't have to worry, as DAM will route it on @.
          msg.out = universe;
          root.on('out', msg);
          return;
        }

        ctx.latch = root.hatch;
        ctx.match = root.hatch = [];
        var put = msg.put;
        var DBG = ctx.DBG = msg.DBG,
            S = +new Date();

        if (put['#'] && put['.']) {
          /*root && root.on('put', msg);*/
          return;
        } // TODO: BUG! This needs to call HAM instead.


        DBG && (DBG.p = S);
        ctx['#'] = msg['#'];
        ctx.msg = msg;
        ctx.all = 0;
        ctx.stun = 1;
        var nl = Object.keys(put); //.sort(); // TODO: This is unbounded operation, large graphs will be slower. Write our own CPU scheduled sort? Or somehow do it in below? Keys itself is not O(1) either, create ES5 shim over ?weak map? or custom which is constant.

        console.STAT && console.STAT(S, ((DBG || ctx).pk = +new Date()) - S, 'put sort');
        var ni = 0,
            nj,
            kl,
            soul,
            node,
            states,
            err,
            tmp;

        (function pop(o) {
          if (nj != ni) {
            nj = ni;

            if (!(soul = nl[ni])) {
              console.STAT && console.STAT(S, ((DBG || ctx).pd = +new Date()) - S, 'put');
              fire(ctx);
              return;
            }

            if (!(node = put[soul])) {
              err = ERR + cut(soul) + "no node.";
            } else if (!(tmp = node._)) {
              err = ERR + cut(soul) + "no meta.";
            } else if (soul !== tmp['#']) {
              err = ERR + cut(soul) + "soul not same.";
            } else if (!(states = tmp['>'])) {
              err = ERR + cut(soul) + "no state.";
            }

            kl = Object.keys(node || {}); // TODO: .keys( is slow
          }

          if (err) {
            msg.err = ctx.err = err; // invalid data should error and stun the message.

            fire(ctx); //console.log("handle error!", err) // handle!

            return;
          }

          var i = 0,
              key;
          o = o || 0;

          while (o++ < 9 && (key = kl[i++])) {
            if ('_' === key) {
              continue;
            }

            var val = node[key],
                state = states[key];

            if (u === state) {
              err = ERR + cut(key) + "on" + cut(soul) + "no state.";
              break;
            }

            if (!valid(val)) {
              err = ERR + cut(key) + "on" + cut(soul) + "bad " + typeof val + cut(val);
              break;
            } //ctx.all++; //ctx.ack[soul+key] = '';


            ham(val, key, soul, state, msg);
          }

          if ((kl = kl.slice(i)).length) {
            turn(pop);
            return;
          }

          ++ni;
          kl = null;
          pop(o);
        })();
      }

      Gun.on.put = put; // TODO: MARK!!! clock below, reconnect sync, SEA certify wire merge, User.auth taking multiple times, // msg put, put, say ack, hear loop...
      // WASIS BUG! first .once( undef 2nd good. .off othe rpeople: .open

      function ham(val, key, soul, state, msg) {
        var ctx = msg._ || '',
            root = ctx.root,
            graph = root.graph,
            lot,
            tmp;
        var vertex = graph[soul] || empty,
            was = state_is(vertex, key, 1),
            known = vertex[key];
        var DBG = ctx.DBG;

        if (tmp = console.STAT) {
          if (!graph[soul] || !known) {
            tmp.has = (tmp.has || 0) + 1;
          }
        }

        var now = State(),
            u;

        if (state > now) {
          setTimeout(function () {
            ham(val, key, soul, state, msg);
          }, (tmp = state - now) > MD ? MD : tmp); // Max Defer 32bit. :(

          console.STAT && console.STAT((DBG || ctx).Hf = +new Date(), tmp, 'future');
          return;
        }

        if (state < was) {
          /*old;*/
          if (!ctx.miss) {
            return;
          }
        } // but some chains have a cache miss that need to re-fire. // TODO: Improve in future. // for AXE this would reduce rebroadcast, but GUN does it on message forwarding.


        if (!ctx.faith) {
          // TODO: BUG? Can this be used for cache miss as well? // Yes this was a bug, need to check cache miss for RAD tests, but should we care about the faith check now? Probably not.
          if (state === was && (val === known || L(val) <= L(known))) {
            /*console.log("same");*/

            /*same;*/
            if (!ctx.miss) {
              return;
            }
          } // same

        }

        ctx.stun++; // TODO: 'forget' feature in SEA tied to this, bad approach, but hacked in for now. Any changes here must update there.

        var aid = msg['#'] + ctx.all++,
            id = {
          toString: function () {
            return aid;
          },
          _: ctx
        };
        id.toJSON = id.toString; // this *trick* makes it compatible between old & new versions.

        DBG && (DBG.ph = DBG.ph || +new Date());
        root.on('put', {
          '#': id,
          '@': msg['@'],
          put: {
            '#': soul,
            '.': key,
            ':': val,
            '>': state
          },
          _: ctx
        });
      }

      function map(msg) {
        var DBG;

        if (DBG = (msg._ || '').DBG) {
          DBG.pa = +new Date();
          DBG.pm = DBG.pm || +new Date();
        }

        var eve = this,
            root = eve.as,
            graph = root.graph,
            ctx = msg._,
            put = msg.put,
            soul = put['#'],
            key = put['.'],
            val = put[':'],
            state = put['>'],
            id = msg['#'],
            tmp;

        if ((tmp = ctx.msg) && (tmp = tmp.put) && (tmp = tmp[soul])) {
          state_ify(tmp, key, state, val, soul);
        } // necessary! or else out messages do not get SEA transforms.


        graph[soul] = state_ify(graph[soul], key, state, val, soul);

        if (tmp = (root.next || '')[soul]) {
          tmp.on('in', msg);
        }

        fire(ctx);
        eve.to.next(msg);
      }

      function fire(ctx, msg) {
        var root;

        if (ctx.stop) {
          return;
        }

        if (!ctx.err && 0 < --ctx.stun) {
          return;
        } // TODO: 'forget' feature in SEA tied to this, bad approach, but hacked in for now. Any changes here must update there.


        ctx.stop = 1;

        if (!(root = ctx.root)) {
          return;
        }

        var tmp = ctx.match;
        tmp.end = 1;

        if (tmp === root.hatch) {
          if (!(tmp = ctx.latch) || tmp.end) {
            delete root.hatch;
          } else {
            root.hatch = tmp;
          }
        }

        ctx.hatch && ctx.hatch(); // TODO: rename/rework how put & this interact.

        setTimeout.each(ctx.match, function (cb) {
          cb && cb();
        });

        if (!(msg = ctx.msg) || ctx.err || msg.err) {
          return;
        }

        msg.out = universe;
        ctx.root.on('out', msg);
      }

      function ack(msg) {
        // aggregate ACKs.
        var id = msg['@'] || '',
            ctx;

        if (!(ctx = id._)) {
          return;
        }

        ctx.acks = (ctx.acks || 0) + 1;

        if (ctx.err = msg.err) {
          msg['@'] = ctx['#'];
          fire(ctx); // TODO: BUG? How it skips/stops propagation of msg if any 1 item is error, this would assume a whole batch/resync has same malicious intent.
        }

        if (!ctx.stop && !ctx.crack) {
          ctx.crack = ctx.match && ctx.match.push(function () {
            back(ctx);
          });
        } // handle synchronous acks


        back(ctx);
      }

      function back(ctx) {
        if (!ctx || !ctx.root) {
          return;
        }

        if (ctx.stun || ctx.acks !== ctx.all) {
          return;
        }

        ctx.root.on('in', {
          '@': ctx['#'],
          err: ctx.err,
          ok: ctx.err ? u : {
            '': 1
          }
        });
      }

      var ERR = "Error: Invalid graph!";

      var cut = function (s) {
        return " '" + ('' + s).slice(0, 9) + "...' ";
      };

      var L = JSON.stringify,
          MD = 2147483647,
          State = Gun.state;
    })();

    ;

    (function () {
      Gun.on.get = function (msg, gun) {
        var root = gun._,
            get = msg.get,
            soul = get['#'],
            node = root.graph[soul],
            has = get['.'];
        var next = root.next || (root.next = {}),
            at = next[soul]; // queue concurrent GETs?
        // TODO: consider tagging original message into dup for DAM.
        // TODO: ^ above? In chat app, 12 messages resulted in same peer asking for `#user.pub` 12 times. (same with #user GET too, yipes!) // DAM note: This also resulted in 12 replies from 1 peer which all had same ##hash but none of them deduped because each get was different.
        // TODO: Moving quick hacks fixing these things to axe for now.
        // TODO: a lot of GET #foo then GET #foo."" happening, why?
        // TODO: DAM's ## hash check, on same get ACK, producing multiple replies still, maybe JSON vs YSON?
        // TMP note for now: viMZq1slG was chat LEX query #.

        /*if(gun !== (tmp = msg.$) && (tmp = (tmp||'')._)){
        	if(tmp.Q){ tmp.Q[msg['#']] = ''; return } // chain does not need to ask for it again.
        	tmp.Q = {};
        }*/

        /*if(u === has){
        	if(at.Q){
        		//at.Q[msg['#']] = '';
        		//return;
        	}
        	at.Q = {};
        }*/

        var ctx = msg._ || {},
            DBG = ctx.DBG = msg.DBG;
        DBG && (DBG.g = +new Date()); //console.log("GET:", get, node, has);

        if (!node) {
          return root.on('get', msg);
        }

        if (has) {
          if ('string' != typeof has || u === node[has]) {
            return root.on('get', msg);
          }

          node = state_ify({}, has, state_is(node, has), node[has], soul); // If we have a key in-memory, do we really need to fetch?
          // Maybe... in case the in-memory key we have is a local write
          // we still need to trigger a pull/merge from peers.
        } //Gun.window? Gun.obj.copy(node) : node; // HNPERF: If !browser bump Performance? Is this too dangerous to reference root graph? Copy / shallow copy too expensive for big nodes. Gun.obj.to(node); // 1 layer deep copy // Gun.obj.copy(node); // too slow on big nodes


        node && ack(msg, node);
        root.on('get', msg); // send GET to storage adapters.
      };

      function ack(msg, node) {
        var S = +new Date(),
            ctx = msg._ || {},
            DBG = ctx.DBG = msg.DBG;
        var to = msg['#'],
            id = text_rand(9),
            keys = Object.keys(node || '').sort(),
            soul = ((node || '')._ || '')['#'],
            kl = keys.length,
            j = 0,
            root = msg.$._.root,
            F = node === root.graph[soul];
        console.STAT && console.STAT(S, ((DBG || ctx).gk = +new Date()) - S, 'got keys'); // PERF: Consider commenting this out to force disk-only reads for perf testing? // TODO: .keys( is slow

        node && function go() {
          S = +new Date();
          var i = 0,
              k,
              put = {},
              tmp;

          while (i < 9 && (k = keys[i++])) {
            state_ify(put, k, state_is(node, k), node[k], soul);
          }

          keys = keys.slice(i);
          (tmp = {})[soul] = put;
          put = tmp;
          var faith;

          if (F) {
            faith = function () {};

            faith.ram = faith.faith = true;
          } // HNPERF: We're testing performance improvement by skipping going through security again, but this should be audited.


          tmp = keys.length;
          console.STAT && console.STAT(S, -(S - (S = +new Date())), 'got copied some');
          DBG && (DBG.ga = +new Date());
          root.on('in', {
            '@': to,
            '#': id,
            put: put,
            '%': tmp ? id = text_rand(9) : u,
            $: root.$,
            _: faith,
            DBG: DBG
          });
          console.STAT && console.STAT(S, +new Date() - S, 'got in');

          if (!tmp) {
            return;
          }

          setTimeout.turn(go);
        }();

        if (!node) {
          root.on('in', {
            '@': msg['#']
          });
        } // TODO: I don't think I like this, the default lS adapter uses this but "not found" is a sensitive issue, so should probably be handled more carefully/individually.

      }

      Gun.on.get.ack = ack;
    })();

    ;

    (function () {
      Gun.chain.opt = function (opt) {
        opt = opt || {};
        var gun = this,
            at = gun._,
            tmp = opt.peers || opt;

        if (!Object.plain(opt)) {
          opt = {};
        }

        if (!Object.plain(at.opt)) {
          at.opt = opt;
        }

        if ('string' == typeof tmp) {
          tmp = [tmp];
        }

        if (tmp instanceof Array) {
          if (!Object.plain(at.opt.peers)) {
            at.opt.peers = {};
          }

          tmp.forEach(function (url) {
            var p = {};
            p.id = p.url = url;
            at.opt.peers[url] = at.opt.peers[url] || p;
          });
        }

        at.opt.peers = at.opt.peers || {};
        obj_each(opt, function each(k) {
          var v = this[k];

          if (this && this.hasOwnProperty(k) || 'string' == typeof v || Object.empty(v)) {
            this[k] = v;
            return;
          }

          if (v && v.constructor !== Object && !(v instanceof Array)) {
            return;
          }

          obj_each(v, each);
        });
        Gun.on('opt', at);

        at.opt.uuid = at.opt.uuid || function uuid(l) {
          return Gun.state().toString(36).replace('.', '') + String.random(l || 12);
        };

        return gun;
      };
    })();

    var obj_each = function (o, f) {
      Object.keys(o).forEach(f, o);
    },
        text_rand = String.random,
        turn = setTimeout.turn,
        valid = Gun.valid,
        state_is = Gun.state.is,
        state_ify = Gun.state.ify,
        u,
        empty = {},
        C;

    Gun.log = function () {
      return !Gun.log.off && C.log.apply(C, arguments), [].slice.call(arguments).join(' ');
    };

    Gun.log.once = function (w, s, o) {
      return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s);
    };

    if (typeof window !== "undefined") {
      (window.GUN = window.Gun = Gun).window = window;
    }

    try {
      if (typeof MODULE !== "undefined") {
        MODULE.exports = Gun;
      }
    } catch (e) {}

    module.exports = Gun;
    (Gun.window || {}).console = (Gun.window || {}).console || {
      log: function () {}
    };

    (C = console).only = function (i, s) {
      return C.only.i && i === C.only.i && C.only.i++ && (C.log.apply(C, arguments) || s);
    };

    ;
    "Please do not remove welcome log unless you are paying for a monthly sponsorship, thanks!";
    Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!");
  })(USE, './root');
  ;
  USE(function (module) {
    var Gun = USE('./root');

    Gun.chain.back = function (n, opt) {
      var tmp;
      n = n || 1;

      if (-1 === n || Infinity === n) {
        return this._.root.$;
      } else if (1 === n) {
        return (this._.back || this._).$;
      }

      var gun = this,
          at = gun._;

      if (typeof n === 'string') {
        n = n.split('.');
      }

      if (n instanceof Array) {
        var i = 0,
            l = n.length,
            tmp = at;

        for (i; i < l; i++) {
          tmp = (tmp || empty)[n[i]];
        }

        if (u !== tmp) {
          return opt ? gun : tmp;
        } else if (tmp = at.back) {
          return tmp.$.back(n, opt);
        }

        return;
      }

      if ('function' == typeof n) {
        var yes,
            tmp = {
          back: at
        };

        while ((tmp = tmp.back) && u === (yes = n(tmp, opt))) {}

        return yes;
      }

      if ('number' == typeof n) {
        return (at.back || at).$.back(n - 1);
      }

      return this;
    };

    var empty = {},
        u;
  })(USE, './back');
  ;
  USE(function (module) {
    // WARNING: GUN is very simple, but the JavaScript chaining API around GUN
    // is complicated and was extremely hard to build. If you port GUN to another
    // language, consider implementing an easier API to build.
    var Gun = USE('./root');

    Gun.chain.chain = function (sub) {
      var gun = this,
          at = gun._,
          chain = new (sub || gun).constructor(gun),
          cat = chain._,
          root;
      cat.root = root = at.root;
      cat.id = ++root.once;
      cat.back = gun._;
      cat.on = Gun.on;
      cat.on('in', Gun.on.in, cat); // For 'in' if I add my own listeners to each then I MUST do it before in gets called. If I listen globally for all incoming data instead though, regardless of individual listeners, I can transform the data there and then as well.

      cat.on('out', Gun.on.out, cat); // However for output, there isn't really the global option. I must listen by adding my own listener individually BEFORE this one is ever called.

      return chain;
    };

    function output(msg) {
      var put,
          get,
          at = this.as,
          back = at.back,
          root = at.root,
          tmp;

      if (!msg.$) {
        msg.$ = at.$;
      }

      this.to.next(msg);

      if (at.err) {
        at.on('in', {
          put: at.put = u,
          $: at.$
        });
        return;
      }

      if (get = msg.get) {
        /*if(u !== at.put){
        	at.on('in', at);
        	return;
        }*/
        if (root.pass) {
          root.pass[at.id] = at;
        } // will this make for buggy behavior elsewhere?


        if (at.lex) {
          Object.keys(at.lex).forEach(function (k) {
            tmp[k] = at.lex[k];
          }, tmp = msg.get = msg.get || {});
        }

        if (get['#'] || at.soul) {
          get['#'] = get['#'] || at.soul;
          msg['#'] || (msg['#'] = text_rand(9)); // A3120 ?

          back = root.$.get(get['#'])._;

          if (!(get = get['.'])) {
            // soul
            tmp = back.ask && back.ask['']; // check if we have already asked for the full node

            (back.ask || (back.ask = {}))[''] = back; // add a flag that we are now.

            if (u !== back.put) {
              // if we already have data,
              back.on('in', back); // send what is cached down the chain

              if (tmp) {
                return;
              } // and don't ask for it again.

            }

            msg.$ = back.$;
          } else if (obj_has(back.put, get)) {
            // TODO: support #LEX !
            tmp = back.ask && back.ask[get];
            (back.ask || (back.ask = {}))[get] = back.$.get(get)._;
            back.on('in', {
              get: get,
              put: {
                '#': back.soul,
                '.': get,
                ':': back.put[get],
                '>': state_is(root.graph[back.soul], get)
              }
            });

            if (tmp) {
              return;
            }
          }
          /*put = (back.$.get(get)._);
          if(!(tmp = put.ack)){ put.ack = -1 }
          back.on('in', {
          	$: back.$,
          	put: Gun.state.ify({}, get, Gun.state(back.put, get), back.put[get]),
          	get: back.get
          });
          if(tmp){ return }
          } else
          if('string' != typeof get){
          var put = {}, meta = (back.put||{})._;
          Gun.obj.map(back.put, function(v,k){
          	if(!Gun.text.match(k, get)){ return }
          	put[k] = v;
          })
          if(!Gun.obj.empty(put)){
          	put._ = meta;
          	back.on('in', {$: back.$, put: put, get: back.get})
          }
          if(tmp = at.lex){
          	tmp = (tmp._) || (tmp._ = function(){});
          	if(back.ack < tmp.ask){ tmp.ask = back.ack }
          	if(tmp.ask){ return }
          	tmp.ask = 1;
          }
          }
          */


          root.ask(ack, msg); // A3120 ?

          return root.on('in', msg);
        } //if(root.now){ root.now[at.id] = root.now[at.id] || true; at.pass = {} }


        if (get['.']) {
          if (at.get) {
            msg = {
              get: {
                '.': at.get
              },
              $: at.$
            };
            (back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?

            return back.on('out', msg);
          }

          msg = {
            get: at.lex ? msg.get : {},
            $: at.$
          };
          return back.on('out', msg);
        }

        (at.ask || (at.ask = {}))[''] = at; //at.ack = at.ack || -1;

        if (at.get) {
          get['.'] = at.get;
          (back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?

          return back.on('out', msg);
        }
      }

      return back.on('out', msg);
    }

    ;
    Gun.on.out = output;

    function input(msg, cat) {
      cat = cat || this.as; // TODO: V8 may not be able to optimize functions with different parameter calls, so try to do benchmark to see if there is any actual difference.

      var root = cat.root,
          gun = msg.$ || (msg.$ = cat.$),
          at = (gun || '')._ || empty,
          tmp = msg.put || '',
          soul = tmp['#'],
          key = tmp['.'],
          change = u !== tmp['='] ? tmp['='] : tmp[':'],
          state = tmp['>'] || -Infinity,
          sat; // eve = event, at = data at, cat = chain at, sat = sub at (children chains).

      if (u !== msg.put && (u === tmp['#'] || u === tmp['.'] || u === tmp[':'] && u === tmp['='] || u === tmp['>'])) {
        // convert from old format
        if (!valid(tmp)) {
          if (!(soul = ((tmp || '')._ || '')['#'])) {
            console.log("chain not yet supported for", tmp, '...', msg, cat);
            return;
          }

          gun = cat.root.$.get(soul);
          return setTimeout.each(Object.keys(tmp).sort(), function (k) {
            // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync?
            if ('_' == k || u === (state = state_is(tmp, k))) {
              return;
            }

            cat.on('in', {
              $: gun,
              put: {
                '#': soul,
                '.': k,
                '=': tmp[k],
                '>': state
              },
              VIA: msg
            });
          });
        }

        cat.on('in', {
          $: at.back.$,
          put: {
            '#': soul = at.back.soul,
            '.': key = at.has || at.get,
            '=': tmp,
            '>': state_is(at.back.put, key)
          },
          via: msg
        }); // TODO: This could be buggy! It assumes/approxes data, other stuff could have corrupted it.

        return;
      }

      if ((msg.seen || '')[cat.id]) {
        return;
      }

      (msg.seen || (msg.seen = function () {}))[cat.id] = cat; // help stop some infinite loops

      if (cat !== at) {
        // don't worry about this when first understanding the code, it handles changing contexts on a message. A soul chain will never have a different context.
        Object.keys(msg).forEach(function (k) {
          tmp[k] = msg[k];
        }, tmp = {}); // make copy of message

        tmp.get = cat.get || tmp.get;

        if (!cat.soul && !cat.has) {
          // if we do not recognize the chain type
          tmp.$$$ = tmp.$$$ || cat.$; // make a reference to wherever it came from.
        } else if (at.soul) {
          // a has (property) chain will have a different context sometimes if it is linked (to a soul chain). Anything that is not a soul or has chain, will always have different contexts.
          tmp.$ = cat.$;
          tmp.$$ = tmp.$$ || at.$;
        }

        msg = tmp; // use the message with the new context instead;
      }

      unlink(msg, cat);

      if ((cat.soul
      /* && (cat.ask||'')['']*/
      || msg.$$) && state >= state_is(root.graph[soul], key)) {
        // The root has an in-memory cache of the graph, but if our peer has asked for the data then we want a per deduplicated chain copy of the data that might have local edits on it.
        (tmp = root.$.get(soul)._).put = state_ify(tmp.put, key, state, change, soul);
      }

      if (!at.soul
      /*&& (at.ask||'')['']*/
      && state >= state_is(root.graph[soul], key) && (sat = (root.$.get(soul)._.next || '')[key])) {
        // Same as above here, but for other types of chains. // TODO: Improve perf by preventing echoes recaching.
        sat.put = change; // update cache

        if ('string' == typeof (tmp = valid(change))) {
          sat.put = root.$.get(tmp)._.put || change; // share same cache as what we're linked to.
        }
      }

      this.to && this.to.next(msg); // 1st API job is to call all chain listeners.
      // TODO: Make input more reusable by only doing these (some?) calls if we are a chain we recognize? This means each input listener would be responsible for when listeners need to be called, which makes sense, as they might want to filter.

      cat.any && setTimeout.each(Object.keys(cat.any), function (any) {
        (any = cat.any[any]) && any(msg);
      }, 0, 99); // 1st API job is to call all chain listeners. // TODO: .keys( is slow // BUG: Some re-in logic may depend on this being sync.

      cat.echo && setTimeout.each(Object.keys(cat.echo), function (lat) {
        (lat = cat.echo[lat]) && lat.on('in', msg);
      }, 0, 99); // & linked at chains // TODO: .keys( is slow // BUG: Some re-in logic may depend on this being sync.

      if (((msg.$$ || '')._ || at).soul) {
        // comments are linear, but this line of code is non-linear, so if I were to comment what it does, you'd have to read 42 other comments first... but you can't read any of those comments until you first read this comment. What!? // shouldn't this match link's check?
        // is there cases where it is a $$ that we do NOT want to do the following? 
        if ((sat = cat.next) && (sat = sat[key])) {
          // TODO: possible trick? Maybe have `ionmap` code set a sat? // TODO: Maybe we should do `cat.ask` instead? I guess does not matter.
          tmp = {};
          Object.keys(msg).forEach(function (k) {
            tmp[k] = msg[k];
          });
          tmp.$ = (msg.$$ || msg.$).get(tmp.get = key);
          delete tmp.$$;
          delete tmp.$$$;
          sat.on('in', tmp);
        }
      }

      link(msg, cat);
    }

    ;
    Gun.on.in = input;

    function link(msg, cat) {
      cat = cat || this.as || msg.$._;

      if (msg.$$ && this !== Gun.on) {
        return;
      } // $$ means we came from a link, so we are at the wrong level, thus ignore it unless overruled manually by being called directly.


      if (!msg.put || cat.soul) {
        return;
      } // But you cannot overrule being linked to nothing, or trying to link a soul chain - that must never happen.


      var put = msg.put || '',
          link = put['='] || put[':'],
          tmp;

      var root = cat.root,
          tat = root.$.get(put['#']).get(put['.'])._;

      if ('string' != typeof (link = valid(link))) {
        if (this === Gun.on) {
          (tat.echo || (tat.echo = {}))[cat.id] = cat;
        } // allow some chain to explicitly force linking to simple data.


        return; // by default do not link to data that is not a link.
      }

      if ((tat.echo || (tat.echo = {}))[cat.id] // we've already linked ourselves so we do not need to do it again. Except... (annoying implementation details)
      && !(root.pass || '')[cat.id]) {
        return;
      } // if a new event listener was added, we need to make a pass through for it. The pass will be on the chain, not always the chain passed down. 


      if (tmp = root.pass) {
        if (tmp[link + cat.id]) {
          return;
        }

        tmp[link + cat.id] = 1;
      } // But the above edge case may "pass through" on a circular graph causing infinite passes, so we hackily add a temporary check for that.


      (tat.echo || (tat.echo = {}))[cat.id] = cat; // set ourself up for the echo! // TODO: BUG? Echo to self no longer causes problems? Confirm.

      if (cat.has) {
        cat.link = link;
      }

      var sat = root.$.get(tat.link = link)._; // grab what we're linking to.


      (sat.echo || (sat.echo = {}))[tat.id] = tat; // link it.

      var tmp = cat.ask || ''; // ask the chain for what needs to be loaded next!

      if (tmp[''] || cat.lex) {
        // we might need to load the whole thing // TODO: cat.lex probably has edge case bugs to it, need more test coverage.
        sat.on('out', {
          get: {
            '#': link
          }
        });
      }

      setTimeout.each(Object.keys(tmp), function (get, sat) {
        // if sub chains are asking for data. // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync?
        if (!get || !(sat = tmp[get])) {
          return;
        }

        sat.on('out', {
          get: {
            '#': link,
            '.': get
          }
        }); // go get it.
      }, 0, 99);
    }

    ;
    Gun.on.link = link;

    function unlink(msg, cat) {
      // ugh, so much code for seemingly edge case behavior.
      var put = msg.put || '',
          change = u !== put['='] ? put['='] : put[':'],
          root = cat.root,
          link,
          tmp;

      if (u === change) {
        // 1st edge case: If we have a brand new database, no data will be found.
        // TODO: BUG! because emptying cache could be async from below, make sure we are not emptying a newer cache. So maybe pass an Async ID to check against?
        // TODO: BUG! What if this is a map? // Warning! Clearing things out needs to be robust against sync/async ops, or else you'll see `map val get put` test catastrophically fail because map attempts to link when parent graph is streamed before child value gets set. Need to differentiate between lack acks and force clearing.
        if (cat.soul && u !== cat.put) {
          return;
        } // data may not be found on a soul, but if a soul already has data, then nothing can clear the soul as a whole.
        //if(!cat.has){ return }


        tmp = (msg.$$ || msg.$ || '')._ || '';

        if (msg['@'] && (u !== tmp.put || u !== cat.put)) {
          return;
        } // a "not found" from other peers should not clear out data if we have already found it.
        //if(cat.has && u === cat.put && !(root.pass||'')[cat.id]){ return } // if we are already unlinked, do not call again, unless edge case. // TODO: BUG! This line should be deleted for "unlink deeply nested".


        if (link = cat.link || msg.linked) {
          delete (root.$.get(link)._.echo || '')[cat.id];
        }

        if (cat.has) {
          // TODO: Empty out links, maps, echos, acks/asks, etc.?
          cat.link = null;
        }

        cat.put = u; // empty out the cache if, for example, alice's car's color no longer exists (relative to alice) if alice no longer has a car.
        // TODO: BUG! For maps, proxy this so the individual sub is triggered, not all subs.

        setTimeout.each(Object.keys(cat.next || ''), function (get, sat) {
          // empty out all sub chains. // TODO: .keys( is slow // BUG? ?Some re-in logic may depend on this being sync? // TODO: BUG? This will trigger deeper put first, does put logic depend on nested order? // TODO: BUG! For map, this needs to be the isolated child, not all of them.
          if (!(sat = cat.next[get])) {
            return;
          } //if(cat.has && u === sat.put && !(root.pass||'')[sat.id]){ return } // if we are already unlinked, do not call again, unless edge case. // TODO: BUG! This line should be deleted for "unlink deeply nested".


          if (link) {
            delete (root.$.get(link).get(get)._.echo || '')[sat.id];
          }

          sat.on('in', {
            get: get,
            put: u,
            $: sat.$
          }); // TODO: BUG? Add recursive seen check?
        }, 0, 99);
        return;
      }

      if (cat.soul) {
        return;
      } // a soul cannot unlink itself.


      if (msg.$$) {
        return;
      } // a linked chain does not do the unlinking, the sub chain does. // TODO: BUG? Will this cancel maps?


      link = valid(change); // need to unlink anytime we are not the same link, though only do this once per unlink (and not on init).

      tmp = msg.$._ || '';

      if (link === tmp.link || cat.has && !tmp.link) {
        if ((root.pass || '')[cat.id] && 'string' !== typeof link) {} else {
          return;
        }
      }

      delete (tmp.echo || '')[cat.id];
      unlink({
        get: cat.get,
        put: u,
        $: msg.$,
        linked: msg.linked = msg.linked || tmp.link
      }, cat); // unlink our sub chains.
    }

    ;
    Gun.on.unlink = unlink;

    function ack(msg, ev) {
      //if(!msg['%'] && (this||'').off){ this.off() } // do NOT memory leak, turn off listeners! Now handled by .ask itself
      // manhattan:
      var as = this.as,
          at = as.$._,
          root = at.root,
          get = as.get || '',
          tmp = (msg.put || '')[get['#']] || '';

      if (!msg.put || 'string' == typeof get['.'] && u === tmp[get['.']]) {
        if (u !== at.put) {
          return;
        }

        if (!at.soul && !at.has) {
          return;
        } // TODO: BUG? For now, only core-chains will handle not-founds, because bugs creep in if non-core chains are used as $ but we can revisit this later for more powerful extensions.


        at.ack = (at.ack || 0) + 1;
        at.on('in', {
          get: at.get,
          put: at.put = u,
          $: at.$,
          '@': msg['@']
        });
        /*(tmp = at.Q) && setTimeout.each(Object.keys(tmp), function(id){ // TODO: Temporary testing, not integrated or being used, probably delete.
        	Object.keys(msg).forEach(function(k){ tmp[k] = msg[k] }, tmp = {}); tmp['@'] = id; // copy message
        	root.on('in', tmp);
        }); delete at.Q;*/

        return;
      }

      (msg._ || {}).miss = 1;
      Gun.on.put(msg);
      return; // eom
    }

    var empty = {},
        u,
        text_rand = String.random,
        valid = Gun.valid,
        obj_has = function (o, k) {
      return o && Object.prototype.hasOwnProperty.call(o, k);
    },
        state = Gun.state,
        state_is = state.is,
        state_ify = state.ify;
  })(USE, './chain');
  ;
  USE(function (module) {
    var Gun = USE('./root');

    Gun.chain.get = function (key, cb, as) {
      var gun, tmp;

      if (typeof key === 'string') {
        if (key.length == 0) {
          (gun = this.chain())._.err = {
            err: Gun.log('0 length key!', key)
          };

          if (cb) {
            cb.call(gun, gun._.err);
          }

          return gun;
        }

        var back = this,
            cat = back._;
        var next = cat.next || empty;

        if (!(gun = next[key])) {
          gun = key && cache(key, back);
        }

        gun = gun && gun.$;
      } else if ('function' == typeof key) {
        if (true === cb) {
          return soul(this, key, cb, as), this;
        }

        gun = this;
        var cat = gun._,
            opt = cb || {},
            root = cat.root,
            id;
        opt.at = cat;
        opt.ok = key;
        var wait = {}; // can we assign this to the at instead, like in once?
        //var path = []; cat.$.back(at => { at.get && path.push(at.get.slice(0,9))}); path = path.reverse().join('.');

        function any(msg, eve, f) {
          if (any.stun) {
            return;
          }

          if ((tmp = root.pass) && !tmp[id]) {
            return;
          }

          var at = msg.$._,
              sat = (msg.$$ || '')._,
              data = (sat || at).put,
              odd = !at.has && !at.soul,
              test = {},
              link,
              tmp;

          if (odd || u === data) {
            // handles non-core
            data = u === ((tmp = msg.put) || '')['='] ? u === (tmp || '')[':'] ? tmp : tmp[':'] : tmp['='];
          }

          if (link = 'string' == typeof (tmp = Gun.valid(data))) {
            data = u === (tmp = root.$.get(tmp)._.put) ? opt.not ? u : data : tmp;
          }

          if (opt.not && u === data) {
            return;
          }

          if (u === opt.stun) {
            if ((tmp = root.stun) && tmp.on) {
              cat.$.back(function (a) {
                // our chain stunned?
                tmp.on('' + a.id, test = {});

                if ((test.run || 0) < any.id) {
                  return test;
                } // if there is an earlier stun on gapless parents/self.

              });
              !test.run && tmp.on('' + at.id, test = {}); // this node stunned?

              !test.run && sat && tmp.on('' + sat.id, test = {}); // linked node stunned?

              if (any.id > test.run) {
                if (!test.stun || test.stun.end) {
                  test.stun = tmp.on('stun');
                  test.stun = test.stun && test.stun.last;
                }

                if (test.stun && !test.stun.end) {
                  //if(odd && u === data){ return }
                  //if(u === msg.put){ return } // "not found" acks will be found if there is stun, so ignore these.
                  (test.stun.add || (test.stun.add = {}))[id] = function () {
                    any(msg, eve, 1);
                  }; // add ourself to the stun callback list that is called at end of the write.


                  return;
                }
              }
            }

            if (
            /*odd &&*/
            u === data) {
              f = 0;
            } // if data not found, keep waiting/trying.

            /*if(f && u === data){
            	cat.on('out', opt.out);
            	return;
            }*/


            if ((tmp = root.hatch) && !tmp.end && u === opt.hatch && !f) {
              // quick hack! // What's going on here? Because data is streamed, we get things one by one, but a lot of developers would rather get a callback after each batch instead, so this does that by creating a wait list per chain id that is then called at the end of the batch by the hatch code in the root put listener.
              if (wait[at.$._.id]) {
                return;
              }

              wait[at.$._.id] = 1;
              tmp.push(function () {
                any(msg, eve, 1);
              });
              return;
            }

            ;
            wait = {}; // end quick hack.
          } // call:


          if (root.pass) {
            if (root.pass[id + at.id]) {
              return;
            }

            root.pass[id + at.id] = 1;
          }

          if (opt.on) {
            opt.ok.call(at.$, data, at.get, msg, eve || any);
            return;
          } // TODO: Also consider breaking `this` since a lot of people do `=>` these days and `.call(` has slower performance.


          if (opt.v2020) {
            opt.ok(msg, eve || any);
            return;
          }

          Object.keys(msg).forEach(function (k) {
            tmp[k] = msg[k];
          }, tmp = {});
          msg = tmp;
          msg.put = data; // 2019 COMPATIBILITY! TODO: GET RID OF THIS!

          opt.ok.call(opt.as, msg, eve || any); // is this the right
        }

        ;
        any.at = cat; //(cat.any||(cat.any=function(msg){ setTimeout.each(Object.keys(cat.any||''), function(act){ (act = cat.any[act]) && act(msg) },0,99) }))[id = String.random(7)] = any; // maybe switch to this in future?

        (cat.any || (cat.any = {}))[id = String.random(7)] = any;

        any.off = function () {
          any.stun = 1;

          if (!cat.any) {
            return;
          }

          delete cat.any[id];
        };

        any.rid = rid; // logic from old version, can we clean it up now?

        any.id = opt.run || ++root.once; // used in callback to check if we are earlier than a write. // will this ever cause an integer overflow?

        tmp = root.pass;
        (root.pass = {})[id] = 1; // Explanation: test trade-offs want to prevent recursion so we add/remove pass flag as it gets fulfilled to not repeat, however map map needs many pass flags - how do we reconcile?

        opt.out = opt.out || {
          get: {}
        };
        cat.on('out', opt.out);
        root.pass = tmp;
        return gun;
      } else if ('number' == typeof key) {
        return this.get('' + key, cb, as);
      } else if ('string' == typeof (tmp = valid(key))) {
        return this.get(tmp, cb, as);
      } else if (tmp = this.get.next) {
        gun = tmp(this, key);
      }

      if (!gun) {
        (gun = this.chain())._.err = {
          err: Gun.log('Invalid get request!', key)
        }; // CLEAN UP

        if (cb) {
          cb.call(gun, gun._.err);
        }

        return gun;
      }

      if (cb && 'function' == typeof cb) {
        gun.get(cb, as);
      }

      return gun;
    };

    function cache(key, back) {
      var cat = back._,
          next = cat.next,
          gun = back.chain(),
          at = gun._;

      if (!next) {
        next = cat.next = {};
      }

      next[at.get = key] = at;

      if (back === cat.root.$) {
        at.soul = key;
      } else if (cat.soul || cat.has) {
        at.has = key; //if(obj_has(cat.put, key)){
        //at.put = cat.put[key];
        //}
      }

      return at;
    }

    function soul(gun, cb, opt, as) {
      var cat = gun._,
          acks = 0,
          tmp;

      if (tmp = cat.soul || cat.link) {
        return cb(tmp, as, cat);
      }

      if (cat.jam) {
        return cat.jam.push([cb, as]);
      }

      cat.jam = [[cb, as]];
      gun.get(function go(msg, eve) {
        if (u === msg.put && !cat.root.opt.super && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks <= tmp) {
          // TODO: super should not be in core code, bring AXE up into core instead to fix? // TODO: .keys( is slow
          return;
        }

        eve.rid(msg);
        var at = (at = msg.$) && at._ || {},
            i = 0,
            as;
        tmp = cat.jam;
        delete cat.jam; // tmp = cat.jam.splice(0, 100);
        //if(tmp.length){ process.nextTick(function(){ go(msg, eve) }) }

        while (as = tmp[i++]) {
          //Gun.obj.map(tmp, function(as, cb){
          var cb = as[0],
              id;
          as = as[1];
          cb && cb(id = at.link || at.soul || Gun.valid(msg.put) || ((msg.put || {})._ || {})['#'], as, msg, eve);
        } //);

      }, {
        out: {
          get: {
            '.': true
          }
        }
      });
      return gun;
    }

    function rid(at) {
      var cat = this.at || this.on;

      if (!at || cat.soul || cat.has) {
        return this.off();
      }

      if (!(at = (at = (at = at.$ || at)._ || at).id)) {
        return;
      }

      var map = cat.map,
          tmp,
          seen; //if(!map || !(tmp = map[at]) || !(tmp = tmp.at)){ return }

      if (tmp = (seen = this.seen || (this.seen = {}))[at]) {
        return true;
      }

      seen[at] = true;
      return; //tmp.echo[cat.id] = {}; // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
      //obj.del(map, at); // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.

      return;
    }

    var empty = {},
        valid = Gun.valid,
        u;
  })(USE, './get');
  ;
  USE(function (module) {
    var Gun = USE('./root');

    Gun.chain.put = function (data, cb, as) {
      // I rewrote it :)
      var gun = this,
          at = gun._,
          root = at.root;
      as = as || {};
      as.root = at.root;
      as.run || (as.run = root.once);
      stun(as, at.id); // set a flag for reads to check if this chain is writing.

      as.ack = as.ack || cb;
      as.via = as.via || gun;
      as.data = as.data || data;
      as.soul || (as.soul = at.soul || 'string' == typeof cb && cb);
      var s = as.state = as.state || Gun.state();

      if ('function' == typeof data) {
        data(function (d) {
          as.data = d;
          gun.put(u, u, as);
        });
        return gun;
      }

      if (!as.soul) {
        return get(as), gun;
      }

      as.$ = root.$.get(as.soul); // TODO: This may not allow user chaining and similar?

      as.todo = [{
        it: as.data,
        ref: as.$
      }];
      as.turn = as.turn || turn;
      as.ran = as.ran || ran; //var path = []; as.via.back(at => { at.get && path.push(at.get.slice(0,9)) }); path = path.reverse().join('.');
      // TODO: Perf! We only need to stun chains that are being modified, not necessarily written to.

      (function walk() {
        var to = as.todo,
            at = to.pop(),
            d = at.it,
            cid = at.ref && at.ref._.id,
            v,
            k,
            cat,
            tmp,
            g;
        stun(as, at.ref);

        if (tmp = at.todo) {
          k = tmp.pop();
          d = d[k];

          if (tmp.length) {
            to.push(at);
          }
        }

        k && (to.path || (to.path = [])).push(k);

        if (!(v = valid(d)) && !(g = Gun.is(d))) {
          if (!Object.plain(d)) {
            (as.ack || noop).call(as, as.out = {
              err: as.err = Gun.log("Invalid data: " + (d && (tmp = d.constructor) && tmp.name || typeof d) + " at " + (as.via.back(function (at) {
                at.get && tmp.push(at.get);
              }, tmp = []) || tmp.join('.')) + '.' + (to.path || []).join('.'))
            });
            as.ran(as);
            return;
          }

          var seen = as.seen || (as.seen = []),
              i = seen.length;

          while (i--) {
            if (d === (tmp = seen[i]).it) {
              v = d = tmp.link;
              break;
            }
          }
        }

        if (k && v) {
          at.node = state_ify(at.node, k, s, d);
        } // handle soul later.
        else {
          as.seen.push(cat = {
            it: d,
            link: {},
            todo: g ? [] : Object.keys(d).sort().reverse(),
            path: (to.path || []).slice(),
            up: at
          }); // Any perf reasons to CPU schedule this .keys( ?

          at.node = state_ify(at.node, k, s, cat.link);
          !g && cat.todo.length && to.push(cat); // ---------------

          var id = as.seen.length;
          (as.wait || (as.wait = {}))[id] = '';
          tmp = (cat.ref = g ? d : k ? at.ref.get(k) : at.ref)._;
          (tmp = d && (d._ || '')['#'] || tmp.soul || tmp.link) ? resolve({
            soul: tmp
          }) : cat.ref.get(resolve, {
            run: as.run,

            /*hatch: 0,*/
            v2020: 1,
            out: {
              get: {
                '.': ' '
              }
            }
          }); // TODO: BUG! This should be resolve ONLY soul to prevent full data from being loaded. // Fixed now?
          //setTimeout(function(){ if(F){ return } console.log("I HAVE NOT BEEN CALLED!", path, id, cat.ref._.id, k) }, 9000); var F; // MAKE SURE TO ADD F = 1 below!

          function resolve(msg, eve) {
            var end = cat.link['#'];

            if (eve) {
              eve.off();
              eve.rid(msg);
            } // TODO: Too early! Check all peers ack not found.
            // TODO: BUG maybe? Make sure this does not pick up a link change wipe, that it uses the changign link instead.


            var soul = end || msg.soul || (tmp = (msg.$$ || msg.$)._ || '').soul || tmp.link || ((tmp = tmp.put || '')._ || '')['#'] || tmp['#'] || ((tmp = msg.put || '') && msg.$$ ? tmp['#'] : (tmp['='] || tmp[':'] || '')['#']);
            !end && stun(as, msg.$);

            if (!soul && !at.link['#']) {
              // check soul link above us
              (at.wait || (at.wait = [])).push(function () {
                resolve(msg, eve);
              }); // wait

              return;
            }

            if (!soul) {
              soul = [];
              (msg.$$ || msg.$).back(function (at) {
                if (tmp = at.soul || at.link) {
                  return soul.push(tmp);
                }

                soul.push(at.get);
              });
              soul = soul.reverse().join('/');
            }

            cat.link['#'] = soul;
            !g && (((as.graph || (as.graph = {}))[soul] = cat.node || (cat.node = {
              _: {}
            }))._['#'] = soul);
            delete as.wait[id];
            cat.wait && setTimeout.each(cat.wait, function (cb) {
              cb && cb();
            });
            as.ran(as);
          }

          ; // ---------------
        }

        if (!to.length) {
          return as.ran(as);
        }

        as.turn(walk);
      })();

      return gun;
    };

    function stun(as, id) {
      if (!id) {
        return;
      }

      id = (id._ || '').id || id;
      var run = as.root.stun || (as.root.stun = {
        on: Gun.on
      }),
          test = {},
          tmp;
      as.stun || (as.stun = run.on('stun', function () {}));

      if (tmp = run.on('' + id)) {
        tmp.the.last.next(test);
      }

      if (test.run >= as.run) {
        return;
      }

      run.on('' + id, function (test) {
        if (as.stun.end) {
          this.off();
          this.to.next(test);
          return;
        }

        test.run = test.run || as.run;
        test.stun = test.stun || as.stun;
        return;

        if (this.to.to) {
          this.the.last.next(test);
          return;
        }

        test.stun = as.stun;
      });
    }

    function ran(as) {
      if (as.err) {
        ran.end(as.stun, as.root);
        return;
      } // move log handle here.


      if (as.todo.length || as.end || !Object.empty(as.wait)) {
        return;
      }

      as.end = 1;

      var cat = as.$.back(-1)._,
          root = cat.root,
          ask = cat.ask(function (ack) {
        root.on('ack', ack);

        if (ack.err) {
          Gun.log(ack);
        }

        if (++acks > (as.acks || 0)) {
          this.off();
        } // Adjustable ACKs! Only 1 by default.


        if (!as.ack) {
          return;
        }

        as.ack(ack, this);
      }, as.opt),
          acks = 0,
          stun = as.stun,
          tmp;

      (tmp = function () {
        // this is not official yet, but quick solution to hack in for now.
        if (!stun) {
          return;
        }

        ran.end(stun, root);
        setTimeout.each(Object.keys(stun = stun.add || ''), function (cb) {
          if (cb = stun[cb]) {
            cb();
          }
        }); // resume the stunned reads // Any perf reasons to CPU schedule this .keys( ?
      }).hatch = tmp; // this is not official yet ^
      //console.log(1, "PUT", as.run, as.graph);

      as.via._.on('out', {
        put: as.out = as.graph,
        opt: as.opt,
        '#': ask,
        _: tmp
      });
    }

    ;

    ran.end = function (stun, root) {
      stun.end = noop; // like with the earlier id, cheaper to make this flag a function so below callbacks do not have to do an extra type check.

      if (stun.the.to === stun && stun === stun.the.last) {
        delete root.stun;
      }

      stun.off();
    };

    function get(as) {
      var at = as.via._,
          tmp;
      as.via = as.via.back(function (at) {
        if (at.soul || !at.get) {
          return at.$;
        }

        tmp = as.data;
        (as.data = {})[at.get] = tmp;
      });

      if (!as.via || !as.via._.soul) {
        as.via = at.root.$.get(((as.data || '')._ || '')['#'] || at.$.back('opt.uuid')());
      }

      as.via.put(as.data, as.ack, as);
      return;

      if (at.get && at.back.soul) {
        tmp = as.data;
        as.via = at.back.$;
        (as.data = {})[at.get] = tmp;
        as.via.put(as.data, as.ack, as);
        return;
      }
    }

    var u,
        empty = {},
        noop = function () {},
        turn = setTimeout.turn,
        valid = Gun.valid,
        state_ify = Gun.state.ify;

    var iife = function (fn, as) {
      fn.call(as || empty);
    };
  })(USE, './put');
  ;
  USE(function (module) {
    var Gun = USE('./root');
    USE('./chain');
    USE('./back');
    USE('./put');
    USE('./get');
    module.exports = Gun;
  })(USE, './index');
  ;
  USE(function (module) {
    var Gun = USE('./index');

    Gun.chain.on = function (tag, arg, eas, as) {
      // don't rewrite!
      var gun = this,
          cat = gun._,
          root = cat.root,
          act,
          off,
          id,
          tmp;

      if (typeof tag === 'string') {
        if (!arg) {
          return cat.on(tag);
        }

        act = cat.on(tag, arg, eas || cat, as);

        if (eas && eas.$) {
          (eas.subs || (eas.subs = [])).push(act);
        }

        return gun;
      }

      var opt = arg;
      (opt = true === opt ? {
        change: true
      } : opt || {}).not = 1;
      opt.on = 1; //opt.at = cat;
      //opt.ok = tag;
      //opt.last = {};

      var wait = {}; // can we assign this to the at instead, like in once?

      gun.get(tag, opt);
      /*gun.get(function on(data,key,msg,eve){ var $ = this;
      	if(tmp = root.hatch){ // quick hack!
      		if(wait[$._.id]){ return } wait[$._.id] = 1;
      		tmp.push(function(){on.call($, data,key,msg,eve)});
      		return;
      	}; wait = {}; // end quick hack.
      	tag.call($, data,key,msg,eve);
      }, opt); // TODO: PERF! Event listener leak!!!?*/

      /*
      function one(msg, eve){
      	if(one.stun){ return }
      	var at = msg.$._, data = at.put, tmp;
      	if(tmp = at.link){ data = root.$.get(tmp)._.put }
      	if(opt.not===u && u === data){ return }
      	if(opt.stun===u && (tmp = root.stun) && (tmp = tmp[at.id] || tmp[at.back.id]) && !tmp.end){ // Remember! If you port this into `.get(cb` make sure you allow stun:0 skip option for `.put(`.
      		tmp[id] = function(){one(msg,eve)};
      		return;
      	}
      	//tmp = one.wait || (one.wait = {}); console.log(tmp[at.id] === ''); if(tmp[at.id] !== ''){ tmp[at.id] = tmp[at.id] || setTimeout(function(){tmp[at.id]='';one(msg,eve)},1); return } delete tmp[at.id];
      	// call:
      	if(opt.as){
      		opt.ok.call(opt.as, msg, eve || one);
      	} else {
      		opt.ok.call(at.$, data, msg.get || at.get, msg, eve || one);
      	}
      };
      one.at = cat;
      (cat.act||(cat.act={}))[id = String.random(7)] = one;
      one.off = function(){ one.stun = 1; if(!cat.act){ return } delete cat.act[id] }
      cat.on('out', {get: {}});*/

      return gun;
    }; // Rules:
    // 1. If cached, should be fast, but not read while write.
    // 2. Should not retrigger other listeners, should get triggered even if nothing found.
    // 3. If the same callback passed to many different once chains, each should resolve - an unsubscribe from the same callback should not effect the state of the other resolving chains, if you do want to cancel them all early you should mutate the callback itself with a flag & check for it at top of callback


    Gun.chain.once = function (cb, opt) {
      opt = opt || {}; // avoid rewriting

      if (!cb) {
        return none(this, opt);
      }

      var gun = this,
          cat = gun._,
          root = cat.root,
          data = cat.put,
          id = String.random(7),
          one,
          tmp;
      gun.get(function (data, key, msg, eve) {
        var $ = this,
            at = $._,
            one = at.one || (at.one = {});

        if (eve.stun) {
          return;
        }

        if ('' === one[id]) {
          return;
        }

        if (true === (tmp = Gun.valid(data))) {
          once();
          return;
        }

        if ('string' == typeof tmp) {
          return;
        } // TODO: BUG? Will this always load?


        clearTimeout((cat.one || '')[id]); // clear "not found" since they only get set on cat.

        clearTimeout(one[id]);
        one[id] = setTimeout(once, opt.wait || 99); // TODO: Bug? This doesn't handle plural chains.

        function once() {
          if (!at.has && !at.soul) {
            at = {
              put: data,
              get: key
            };
          } // handles non-core messages.


          if (u === (tmp = at.put)) {
            tmp = ((msg.$$ || '')._ || '').put;
          }

          if ('string' == typeof Gun.valid(tmp)) {
            tmp = root.$.get(tmp)._.put;

            if (tmp === u) {
              return;
            }
          }

          if (eve.stun) {
            return;
          }

          if ('' === one[id]) {
            return;
          }

          one[id] = '';

          if (cat.soul || cat.has) {
            eve.off();
          } // TODO: Plural chains? // else { ?.off() } // better than one check?


          cb.call($, tmp, at.get);
        }

        ;
      }, {
        on: 1
      });
      return gun;
    };

    function none(gun, opt, chain) {
      Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
      (chain = gun.chain())._.nix = gun.once(function (data, key) {
        chain._.on('in', this._);
      });
      chain._.lex = gun._.lex; // TODO: Better approach in future? This is quick for now.

      return chain;
    }

    Gun.chain.off = function () {
      // make off more aggressive. Warning, it might backfire!
      var gun = this,
          at = gun._,
          tmp;
      var cat = at.back;

      if (!cat) {
        return;
      }

      at.ack = 0; // so can resubscribe.

      if (tmp = cat.next) {
        if (tmp[at.get]) {
          delete tmp[at.get];
        } else {}
      } // TODO: delete cat.one[map.id]?


      if (tmp = cat.ask) {
        delete tmp[at.get];
      }

      if (tmp = cat.put) {
        delete tmp[at.get];
      }

      if (tmp = at.soul) {
        delete cat.root.graph[tmp];
      }

      if (tmp = at.map) {
        Object.keys(tmp).forEach(function (i, at) {
          at = tmp[i]; //obj_map(tmp, function(at){

          if (at.link) {
            cat.root.$.get(at.link).off();
          }
        });
      }

      if (tmp = at.next) {
        Object.keys(tmp).forEach(function (i, neat) {
          neat = tmp[i]; //obj_map(tmp, function(neat){

          neat.$.off();
        });
      }

      at.on('off', {});
      return gun;
    };

    var empty = {},
        noop = function () {},
        u;
  })(USE, './on');
  ;
  USE(function (module) {
    var Gun = USE('./index'),
        next = Gun.chain.get.next;

    Gun.chain.get.next = function (gun, lex) {
      var tmp;

      if (!Object.plain(lex)) {
        return (next || noop)(gun, lex);
      }

      if (tmp = ((tmp = lex['#']) || '')['='] || tmp) {
        return gun.get(tmp);
      }

      (tmp = gun.chain()._).lex = lex; // LEX!

      gun.on('in', function (eve) {
        if (String.match(eve.get || (eve.put || '')['.'], lex['.'] || lex['#'] || lex)) {
          tmp.on('in', eve);
        }

        this.to.next(eve);
      });
      return tmp.$;
    };

    Gun.chain.map = function (cb, opt, t) {
      var gun = this,
          cat = gun._,
          lex,
          chain;

      if (Object.plain(cb)) {
        lex = cb['.'] ? cb : {
          '.': cb
        };
        cb = u;
      }

      if (!cb) {
        if (chain = cat.each) {
          return chain;
        }

        (cat.each = chain = gun.chain())._.lex = lex || chain._.lex || cat.lex;
        chain._.nix = gun.back('nix');
        gun.on('in', map, chain._);
        return chain;
      }

      Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
      chain = gun.chain();
      gun.map().on(function (data, key, msg, eve) {
        var next = (cb || noop).call(this, data, key, msg, eve);

        if (u === next) {
          return;
        }

        if (data === next) {
          return chain._.on('in', msg);
        }

        if (Gun.is(next)) {
          return chain._.on('in', next._);
        }

        var tmp = {};
        Object.keys(msg.put).forEach(function (k) {
          tmp[k] = msg.put[k];
        }, tmp);
        tmp['='] = next;

        chain._.on('in', {
          get: key,
          put: tmp
        });
      });
      return chain;
    };

    function map(msg) {
      this.to.next(msg);
      var cat = this.as,
          gun = msg.$,
          at = gun._,
          put = msg.put,
          tmp;

      if (!at.soul && !msg.$$) {
        return;
      } // this line took hundreds of tries to figure out. It only works if core checks to filter out above chains during link tho. This says "only bother to map on a node" for this layer of the chain. If something is not a node, map should not work.


      if ((tmp = cat.lex) && !String.match(msg.get || (put || '')['.'], tmp['.'] || tmp['#'] || tmp)) {
        return;
      }

      Gun.on.link(msg, cat);
    }

    var noop = function () {},
        event = {
      stun: noop,
      off: noop
    },
        u;
  })(USE, './map');
  ;
  USE(function (module) {
    var Gun = USE('./index');

    Gun.chain.set = function (item, cb, opt) {
      var gun = this,
          root = gun.back(-1),
          soul,
          tmp;

      cb = cb || function () {};

      opt = opt || {};
      opt.item = opt.item || item;

      if (soul = ((item || '')._ || '')['#']) {
        (item = {})['#'] = soul;
      } // check if node, make link.


      if ('string' == typeof (tmp = Gun.valid(item))) {
        return gun.get(soul = tmp).put(item, cb, opt);
      } // check if link


      if (!Gun.is(item)) {
        if (Object.plain(item)) {
          item = root.get(soul = gun.back('opt.uuid')()).put(item);
        }

        return gun.get(soul || root.back('opt.uuid')(7)).put(item, cb, opt);
      }

      gun.put(function (go) {
        item.get(function (soul, o, msg) {
          // TODO: BUG! We no longer have this option? & go error not handled?
          if (!soul) {
            return cb.call(gun, {
              err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')
            });
          }

          (tmp = {})[soul] = {
            '#': soul
          };
          go(tmp);
        }, true);
      });
      return item;
    };
  })(USE, './set');
  ;
  USE(function (module) {
    USE('./shim');

    function Mesh(root) {
      var mesh = function () {};

      var opt = root.opt || {};
      opt.log = opt.log || console.log;
      opt.gap = opt.gap || opt.wait || 0;
      opt.max = opt.max || (opt.memory ? opt.memory * 999 * 999 : 300000000) * 0.3;
      opt.pack = opt.pack || opt.max * 0.01 * 0.01;
      opt.puff = opt.puff || 9; // IDEA: do a start/end benchmark, divide ops/result.

      var puff = setTimeout.turn || setTimeout;

      var parse = JSON.parseAsync || function (t, cb, r) {
        var u;

        try {
          cb(u, JSON.parse(t, r));
        } catch (e) {
          cb(e);
        }
      };

      var json = JSON.stringifyAsync || function (v, cb, r, s) {
        var u;

        try {
          cb(u, JSON.stringify(v, r, s));
        } catch (e) {
          cb(e);
        }
      };

      var dup = root.dup,
          dup_check = dup.check,
          dup_track = dup.track;
      var ST = +new Date(),
          LT = ST;

      var hear = mesh.hear = function (raw, peer) {
        if (!raw) {
          return;
        }

        if (opt.max <= raw.length) {
          return mesh.say({
            dam: '!',
            err: "Message too big!"
          }, peer);
        }

        if (mesh === this) {
          /*if('string' == typeof raw){ try{
          	var stat = console.STAT || {};
          	//console.log('HEAR:', peer.id, (raw||'').slice(0,250), ((raw||'').length / 1024 / 1024).toFixed(4));
          	
          	//console.log(setTimeout.turn.s.length, 'stacks', parseFloat((-(LT - (LT = +new Date))/1000).toFixed(3)), 'sec', parseFloat(((LT-ST)/1000 / 60).toFixed(1)), 'up', stat.peers||0, 'peers', stat.has||0, 'has', stat.memhused||0, stat.memused||0, stat.memax||0, 'heap mem max');
          }catch(e){ console.log('DBG err', e) }}*/
          hear.d += raw.length || 0;
          ++hear.c;
        } // STATS!


        var S = peer.SH = +new Date();
        var tmp = raw[0],
            msg; //raw && raw.slice && console.log("hear:", ((peer.wire||'').headers||'').origin, raw.length, raw.slice && raw.slice(0,50)); //tc-iamunique-tc-package-ds1

        if ('[' === tmp) {
          parse(raw, function (err, msg) {
            if (err || !msg) {
              return mesh.say({
                dam: '!',
                err: "DAM JSON parse error."
              }, peer);
            }

            console.STAT && console.STAT(+new Date(), msg.length, '# on hear batch');
            var P = opt.puff;

            (function go() {
              var S = +new Date();
              var i = 0,
                  m;

              while (i < P && (m = msg[i++])) {
                hear(m, peer);
              }

              msg = msg.slice(i); // slicing after is faster than shifting during.

              console.STAT && console.STAT(S, +new Date() - S, 'hear loop');
              flush(peer); // force send all synchronously batched acks.

              if (!msg.length) {
                return;
              }

              puff(go, 0);
            })();
          });
          raw = ''; // 

          return;
        }

        if ('{' === tmp || (raw['#'] || Object.plain(raw)) && (msg = raw)) {
          if (msg) {
            return hear.one(msg, peer, S);
          }

          parse(raw, function (err, msg) {
            if (err || !msg) {
              return mesh.say({
                dam: '!',
                err: "DAM JSON parse error."
              }, peer);
            }

            hear.one(msg, peer, S);
          });
          return;
        }
      };

      hear.one = function (msg, peer, S) {
        // S here is temporary! Undo.
        var id, hash, tmp, ash, DBG;

        if (msg.DBG) {
          msg.DBG = DBG = {
            DBG: msg.DBG
          };
        }

        DBG && (DBG.h = S);
        DBG && (DBG.hp = +new Date());

        if (!(id = msg['#'])) {
          id = msg['#'] = String.random(9);
        }

        if (tmp = dup_check(id)) {
          return;
        } // DAM logic:


        if (!(hash = msg['##']) && false && u !== msg.put) {
          /*hash = msg['##'] = Type.obj.hash(msg.put)*/
        } // disable hashing for now // TODO: impose warning/penalty instead (?)


        if (hash && (tmp = msg['@'] || msg.get && id) && dup.check(ash = tmp + hash)) {
          return;
        } // Imagine A <-> B <=> (C & D), C & D reply with same ACK but have different IDs, B can use hash to dedup. Or if a GET has a hash already, we shouldn't ACK if same.


        (msg._ = function () {}).via = mesh.leap = peer;

        if ((tmp = msg['><']) && 'string' == typeof tmp) {
          tmp.slice(0, 99).split(',').forEach(function (k) {
            this[k] = 1;
          }, msg._.yo = {});
        } // Peers already sent to, do not resend.
        // DAM ^


        if (tmp = msg.dam) {
          if (tmp = mesh.hear[tmp]) {
            tmp(msg, peer, root);
          }

          dup_track(id);
          return;
        }

        var S = +new Date();
        DBG && (DBG.is = S);
        peer.SI = id;
        root.on('in', mesh.last = msg); //ECHO = msg.put || ECHO; !(msg.ok !== -3740) && mesh.say({ok: -3740, put: ECHO, '@': msg['#']}, peer);

        DBG && (DBG.hd = +new Date());
        console.STAT && console.STAT(S, +new Date() - S, msg.get ? 'msg get' : msg.put ? 'msg put' : 'msg');
        (tmp = dup_track(id)).via = peer; // don't dedup message ID till after, cause GUN has internal dedup check.

        if (msg.get) {
          tmp.it = msg;
        }

        if (ash) {
          dup_track(ash);
        } //dup.track(tmp+hash, true).it = it(msg);


        mesh.leap = mesh.last = null; // warning! mesh.leap could be buggy.
      };

      var tomap = function (k, i, m) {
        m(k, true);
      };

      var noop = function () {};

      hear.c = hear.d = 0;
      ;

      (function () {
        var SMIA = 0;
        var loop;

        mesh.hash = function (msg, peer) {
          var h, s, t;
          var S = +new Date();
          json(msg.put, function hash(err, text) {
            var ss = (s || (s = t = text || '')).slice(0, 32768); // 1024 * 32

            h = String.hash(ss, h);
            s = s.slice(32768);

            if (s) {
              puff(hash, 0);
              return;
            }

            console.STAT && console.STAT(S, +new Date() - S, 'say json+hash');
            msg._.$put = t;
            msg['##'] = h;
            say(msg, peer);
            delete msg._.$put;
          }, sort);
        };

        function sort(k, v) {
          var tmp;

          if (!(v instanceof Object)) {
            return v;
          }

          Object.keys(v).sort().forEach(sorta, {
            to: tmp = {},
            on: v
          });
          return tmp;
        }

        function sorta(k) {
          this.to[k] = this.on[k];
        }

        var say = mesh.say = function (msg, peer) {
          var tmp;

          if ((tmp = this) && (tmp = tmp.to) && tmp.next) {
            tmp.next(msg);
          } // compatible with middleware adapters.


          if (!msg) {
            return false;
          }

          var id,
              hash,
              raw,
              ack = msg['@']; //if(opt.super && (!ack || !msg.put)){ return } // TODO: MANHATTAN STUB //OBVIOUSLY BUG! But squelch relay. // :( get only is 100%+ CPU usage :(

          var meta = msg._ || (msg._ = function () {});

          var DBG = msg.DBG,
              S = +new Date();
          meta.y = meta.y || S;

          if (!peer) {
            DBG && (DBG.y = S);
          }

          if (!(id = msg['#'])) {
            id = msg['#'] = String.random(9);
          }

          !loop && dup_track(id); //.it = it(msg); // track for 9 seconds, default. Earth<->Mars would need more! // always track, maybe move this to the 'after' logic if we split function.

          if (msg.put && (msg.err || (dup.s[id] || '').err)) {
            return false;
          } // TODO: in theory we should not be able to stun a message, but for now going to check if it can help network performance preventing invalid data to relay.


          if (!(hash = msg['##']) && u !== msg.put && !meta.via && ack) {
            mesh.hash(msg, peer);
            return;
          } // TODO: Should broadcasts be hashed?


          if (!peer && ack) {
            peer = (tmp = dup.s[ack]) && (tmp.via || (tmp = tmp.it) && (tmp = tmp._) && tmp.via) || (tmp = mesh.last) && ack === tmp['#'] && mesh.leap;
          } // warning! mesh.leap could be buggy! mesh last check reduces this.


          if (!peer && ack) {
            // still no peer, then ack daisy chain lost.
            if (dup.s[ack]) {
              return;
            } // in dups but no peer hints that this was ack to self, ignore.


            console.STAT && console.STAT(+new Date(), ++SMIA, 'total no peer to ack to');
            return false;
          } // TODO: Temporary? If ack via trace has been lost, acks will go to all peers, which trashes browser bandwidth. Not relaying the ack will force sender to ask for ack again. Note, this is technically wrong for mesh behavior.


          if (!peer && mesh.way) {
            return mesh.way(msg);
          }

          DBG && (DBG.yh = +new Date());

          if (!(raw = meta.raw)) {
            mesh.raw(msg, peer);
            return;
          }

          DBG && (DBG.yr = +new Date());

          if (!peer || !peer.id) {
            if (!Object.plain(peer || opt.peers)) {
              return false;
            }

            var S = +new Date();
            var P = opt.puff,
                ps = opt.peers,
                pl = Object.keys(peer || opt.peers || {}); // TODO: .keys( is slow

            console.STAT && console.STAT(S, +new Date() - S, 'peer keys');
            ;

            (function go() {
              var S = +new Date(); //Type.obj.map(peer || opt.peers, each); // in case peer is a peer list.

              loop = 1;
              var wr = meta.raw;
              meta.raw = raw; // quick perf hack

              var i = 0,
                  p;

              while (i < 9 && (p = (pl || '')[i++])) {
                if (!(p = ps[p])) {
                  continue;
                }

                say(msg, p);
              }

              meta.raw = wr;
              loop = 0;
              pl = pl.slice(i); // slicing after is faster than shifting during.

              console.STAT && console.STAT(S, +new Date() - S, 'say loop');

              if (!pl.length) {
                return;
              }

              puff(go, 0);
              ack && dup_track(ack); // keep for later
            })();

            return;
          } // TODO: PERF: consider splitting function here, so say loops do less work.


          if (!peer.wire && mesh.wire) {
            mesh.wire(peer);
          }

          if (id === peer.last) {
            return;
          }

          peer.last = id; // was it just sent?

          if (peer === meta.via) {
            return false;
          } // don't send back to self.


          if ((tmp = meta.yo) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id])
          /*&& !o*/
          ) {
            return false;
          }

          console.STAT && console.STAT(S, ((DBG || meta).yp = +new Date()) - (meta.y || S), 'say prep');
          !loop && ack && dup_track(ack); // streaming long responses needs to keep alive the ack.

          if (peer.batch) {
            peer.tail = (tmp = peer.tail || 0) + raw.length;

            if (peer.tail <= opt.pack) {
              peer.batch += (tmp ? ',' : '') + raw;
              return;
            }

            flush(peer);
          }

          peer.batch = '['; // Prevents double JSON!

          var ST = +new Date();
          setTimeout(function () {
            console.STAT && console.STAT(ST, +new Date() - ST, '0ms TO');
            flush(peer);
          }, opt.gap); // TODO: queuing/batching might be bad for low-latency video game performance! Allow opt out?

          send(raw, peer);
          console.STAT && ack === peer.SI && console.STAT(S, +new Date() - peer.SH, 'say ack');
        };

        mesh.say.c = mesh.say.d = 0; // TODO: this caused a out-of-memory crash!

        mesh.raw = function (msg, peer) {
          // TODO: Clean this up / delete it / move logic out!
          if (!msg) {
            return '';
          }

          var meta = msg._ || {},
              put,
              tmp;

          if (tmp = meta.raw) {
            return tmp;
          }

          if ('string' == typeof msg) {
            return msg;
          }

          var hash = msg['##'],
              ack = msg['@'];

          if (hash && ack) {
            if (!meta.via && dup_check(ack + hash)) {
              return false;
            } // for our own out messages, memory & storage may ack the same thing, so dedup that. Tho if via another peer, we already tracked it upon hearing, so this will always trigger false positives, so don't do that!


            if ((tmp = (dup.s[ack] || '').it) || (tmp = mesh.last) && ack === tmp['#']) {
              if (hash === tmp['##']) {
                return false;
              } // if ask has a matching hash, acking is optional.


              if (!tmp['##']) {
                tmp['##'] = hash;
              } // if none, add our hash to ask so anyone we relay to can dedup. // NOTE: May only check against 1st ack chunk, 2nd+ won't know and still stream back to relaying peers which may then dedup. Any way to fix this wasted bandwidth? I guess force rate limiting breaking change, that asking peer has to ask for next lexical chunk.

            }
          }

          if (!msg.dam) {
            var i = 0,
                to = [];
            tmp = opt.peers;

            for (var k in tmp) {
              var p = tmp[k]; // TODO: Make it up peers instead!

              to.push(p.url || p.pid || p.id);

              if (++i > 6) {
                break;
              }
            }

            if (i > 1) {
              msg['><'] = to.join();
            } // TODO: BUG! This gets set regardless of peers sent to! Detect?

          }

          if (put = meta.$put) {
            tmp = {};
            Object.keys(msg).forEach(function (k) {
              tmp[k] = msg[k];
            });
            tmp.put = ':])([:';
            json(tmp, function (err, raw) {
              if (err) {
                return;
              } // TODO: Handle!!


              var S = +new Date();
              tmp = raw.indexOf('"put":":])([:"');
              res(u, raw = raw.slice(0, tmp + 6) + put + raw.slice(tmp + 14));
              console.STAT && console.STAT(S, +new Date() - S, 'say slice');
            });
            return;
          }

          json(msg, res);

          function res(err, raw) {
            if (err) {
              return;
            } // TODO: Handle!!


            meta.raw = raw; //if(meta && (raw||'').length < (999 * 99)){ meta.raw = raw } // HNPERF: If string too big, don't keep in memory.

            say(msg, peer);
          }
        };
      })();

      function flush(peer) {
        var tmp = peer.batch,
            t = 'string' == typeof tmp,
            l;

        if (t) {
          tmp += ']';
        } // TODO: Prevent double JSON!


        peer.batch = peer.tail = null;

        if (!tmp) {
          return;
        }

        if (t ? 3 > tmp.length : !tmp.length) {
          return;
        } // TODO: ^


        if (!t) {
          try {
            tmp = 1 === tmp.length ? tmp[0] : JSON.stringify(tmp);
          } catch (e) {
            return opt.log('DAM JSON stringify error', e);
          }
        }

        if (!tmp) {
          return;
        }

        send(tmp, peer);
      } // for now - find better place later.


      function send(raw, peer) {
        try {
          //console.log('SAY:', peer.id, (raw||'').slice(0,250), ((raw||'').length / 1024 / 1024).toFixed(4));
          var wire = peer.wire;

          if (peer.say) {
            peer.say(raw);
          } else if (wire.send) {
            wire.send(raw);
          }

          mesh.say.d += raw.length || 0;
          ++mesh.say.c; // STATS!
        } catch (e) {
          (peer.queue = peer.queue || []).push(raw);
        }
      }

      mesh.hi = function (peer) {
        var tmp = peer.wire || {};

        if (peer.id) {
          opt.peers[peer.url || peer.id] = peer;
        } else {
          tmp = peer.id = peer.id || String.random(9);
          mesh.say({
            dam: '?',
            pid: root.opt.pid
          }, opt.peers[tmp] = peer);
          delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
        }

        peer.met = peer.met || +new Date();

        if (!tmp.hied) {
          root.on(tmp.hied = 'hi', peer);
        } // @rogowski I need this here by default for now to fix go1dfish's bug


        tmp = peer.queue;
        peer.queue = [];
        setTimeout.each(tmp || [], function (msg) {
          send(msg, peer);
        }, 0, 9); //Type.obj.native && Type.obj.native(); // dirty place to check if other JS polluted.
      };

      mesh.bye = function (peer) {
        root.on('bye', peer);
        var tmp = +new Date();
        tmp = tmp - (peer.met || tmp);
        mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
      };

      mesh.hear['!'] = function (msg, peer) {
        opt.log('Error:', msg.err);
      };

      mesh.hear['?'] = function (msg, peer) {
        if (msg.pid) {
          if (!peer.pid) {
            peer.pid = msg.pid;
          }

          if (msg['@']) {
            return;
          }
        }

        mesh.say({
          dam: '?',
          pid: opt.pid,
          '@': msg['#']
        }, peer);
        delete dup.s[peer.last]; // IMPORTANT: see https://gun.eco/docs/DAM#self
      };

      root.on('create', function (root) {
        root.opt.pid = root.opt.pid || String.random(9);
        this.to.next(root);
        root.on('out', mesh.say);
      });
      root.on('bye', function (peer, tmp) {
        peer = opt.peers[peer.id || peer] || peer;
        this.to.next(peer);
        peer.bye ? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
        delete opt.peers[peer.id];
        peer.wire = null;
      });
      var gets = {};
      root.on('bye', function (peer, tmp) {
        this.to.next(peer);

        if (tmp = console.STAT) {
          tmp.peers = (tmp.peers || 0) - 1;
        }

        if (!(tmp = peer.url)) {
          return;
        }

        gets[tmp] = true;
        setTimeout(function () {
          delete gets[tmp];
        }, opt.lack || 9000);
      });
      root.on('hi', function (peer, tmp) {
        this.to.next(peer);

        if (tmp = console.STAT) {
          tmp.peers = (tmp.peers || 0) + 1;
        }

        if (!(tmp = peer.url) || !gets[tmp]) {
          return;
        }

        delete gets[tmp];

        if (opt.super) {
          return;
        } // temporary (?) until we have better fix/solution?


        setTimeout.each(Object.keys(root.next), function (soul) {
          var node = root.next[soul]; // TODO: .keys( is slow

          tmp = {};
          tmp[soul] = root.graph[soul];
          tmp = String.hash(tmp); // TODO: BUG! This is broken.

          mesh.say({
            '##': tmp,
            get: {
              '#': soul
            }
          }, peer);
        });
      });
      return mesh;
    }

    var empty = {},
        ok = true,
        u;

    try {
      module.exports = Mesh;
    } catch (e) {}
  })(USE, './mesh');
  ;
  USE(function (module) {
    var Gun = USE('../index');
    Gun.Mesh = USE('./mesh'); // TODO: resync upon reconnect online/offline
    //window.ononline = window.onoffline = function(){ console.log('online?', navigator.onLine) }

    Gun.on('opt', function (root) {
      this.to.next(root);

      if (root.once) {
        return;
      }

      var opt = root.opt;

      if (false === opt.WebSocket) {
        return;
      }

      var env = Gun.window || {};
      var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;

      if (!websocket) {
        return;
      }

      opt.WebSocket = websocket;
      var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);
      var wire = mesh.wire || opt.wire;
      mesh.wire = opt.wire = open;

      function open(peer) {
        try {
          if (!peer || !peer.url) {
            return wire && wire(peer);
          }

          var url = peer.url.replace(/^http/, 'ws');
          var wire = peer.wire = new opt.WebSocket(url);

          wire.onclose = function () {
            opt.mesh.bye(peer);
            reconnect(peer);
          };

          wire.onerror = function (error) {
            reconnect(peer);
          };

          wire.onopen = function () {
            opt.mesh.hi(peer);
          };

          wire.onmessage = function (msg) {
            if (!msg) {
              return;
            }

            opt.mesh.hear(msg.data || msg, peer);
          };

          return wire;
        } catch (e) {}
      }

      setTimeout(function () {
        !opt.super && root.on('out', {
          dam: 'hi'
        });
      }, 1); // it can take a while to open a socket, so maybe no longer lazy load for perf reasons?

      var wait = 2 * 999;

      function reconnect(peer) {
        clearTimeout(peer.defer);

        if (doc && peer.retry <= 0) {
          return;
        }

        peer.retry = (peer.retry || opt.retry + 1 || 60) - (-peer.tried + (peer.tried = +new Date()) < wait * 4 ? 1 : 0);
        peer.defer = setTimeout(function to() {
          if (doc && doc.hidden) {
            return setTimeout(to, wait);
          }

          open(peer);
        }, wait);
      }

      var doc = '' + u !== typeof document && document;
    });

    var noop = function () {},
        u;
  })(USE, './websocket');
  ;
  USE(function (module) {
    if (typeof Gun === 'undefined') {
      return;
    }

    var noop = function () {},
        store,
        u;

    try {
      store = (Gun.window || noop).localStorage;
    } catch (e) {}

    if (!store) {
      Gun.log("Warning: No localStorage exists to persist data to!");
      store = {
        setItem: function (k, v) {
          this[k] = v;
        },
        removeItem: function (k) {
          delete this[k];
        },
        getItem: function (k) {
          return this[k];
        }
      };
    }

    Gun.on('create', function lg(root) {
      this.to.next(root);
      var opt = root.opt,
          graph = root.graph,
          acks = [],
          disk,
          to;

      if (false === opt.localStorage) {
        return;
      }

      opt.prefix = opt.file || 'gun/';

      try {
        disk = lg[opt.prefix] = lg[opt.prefix] || JSON.parse(store.getItem(opt.prefix)) || {}; // TODO: Perf! This will block, should we care, since limited to 5MB anyways?
      } catch (e) {
        disk = lg[opt.prefix] = {};
      }

      root.on('get', function (msg) {
        this.to.next(msg);
        var lex = msg.get,
            soul,
            data,
            tmp,
            u;

        if (!lex || !(soul = lex['#'])) {
          return;
        }

        data = disk[soul] || u;

        if (data && (tmp = lex['.']) && !Object.plain(tmp)) {
          // pluck!
          data = Gun.state.ify({}, tmp, Gun.state.is(data, tmp), data[tmp], soul);
        } //if(data){ (tmp = {})[soul] = data } // back into a graph.
        //setTimeout(function(){


        Gun.on.get.ack(msg, data); //root.on('in', {'@': msg['#'], put: tmp, lS:1});// || root.$});
        //}, Math.random() * 10); // FOR TESTING PURPOSES!
      });
      root.on('put', function (msg) {
        this.to.next(msg); // remember to call next middleware adapter

        var put = msg.put,
            soul = put['#'],
            key = put['.'],
            tmp; // pull data off wire envelope

        disk[soul] = Gun.state.ify(disk[soul], key, put['>'], put[':'], soul); // merge into disk object

        if (!msg['@']) {
          acks.push(msg['#']);
        } // then ack any non-ack write. // TODO: use batch id.


        if (to) {
          return;
        } //flush();return;


        to = setTimeout(flush, opt.wait || 1); // that gets saved as a whole to disk every 1ms
      });

      function flush() {
        var err,
            ack = acks;
        clearTimeout(to);
        to = false;
        acks = [];

        try {
          store.setItem(opt.prefix, JSON.stringify(disk));
        } catch (e) {
          Gun.log((err = e || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
          root.on('localStorage:error', {
            err: err,
            get: opt.prefix,
            put: disk
          });
        }

        if (!err && !Object.empty(opt.peers)) {
          return;
        } // only ack if there are no peers. // Switch this to probabilistic mode


        setTimeout.each(ack, function (id) {
          root.on('in', {
            '@': id,
            err: err,
            ok: 0
          }); // localStorage isn't reliable, so make its `ok` code be a low number.
        });
      }
    });
  })(USE, './localStorage');
})();
/* BELOW IS TEMPORARY FOR OLD INTERNAL COMPATIBILITY, THEY ARE IMMEDIATELY DEPRECATED AND WILL BE REMOVED IN NEXT VERSION */


;

(function () {
  var u;

  if ('' + u == typeof Gun) {
    return;
  }

  var DEP = function (n) {
    console.log("Warning! Deprecated internal utility will break in next version:", n);
  }; // Generic javascript utilities.


  var Type = Gun; //Type.fns = Type.fn = {is: function(fn){ return (!!fn && fn instanceof Function) }}

  Type.fn = Type.fn || {
    is: function (fn) {
      DEP('fn');
      return !!fn && 'function' == typeof fn;
    }
  };
  Type.bi = Type.bi || {
    is: function (b) {
      DEP('bi');
      return b instanceof Boolean || typeof b == 'boolean';
    }
  };
  Type.num = Type.num || {
    is: function (n) {
      DEP('num');
      return !list_is(n) && (n - parseFloat(n) + 1 >= 0 || Infinity === n || -Infinity === n);
    }
  };
  Type.text = Type.text || {
    is: function (t) {
      DEP('text');
      return typeof t == 'string';
    }
  };

  Type.text.ify = Type.text.ify || function (t) {
    DEP('text.ify');

    if (Type.text.is(t)) {
      return t;
    }

    if (typeof JSON !== "undefined") {
      return JSON.stringify(t);
    }

    return t && t.toString ? t.toString() : t;
  };

  Type.text.random = Type.text.random || function (l, c) {
    DEP('text.random');
    var s = '';
    l = l || 24; // you are not going to make a 0 length random number, so no need to check type

    c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';

    while (l > 0) {
      s += c.charAt(Math.floor(Math.random() * c.length));
      l--;
    }

    return s;
  };

  Type.text.match = Type.text.match || function (t, o) {
    var tmp, u;
    DEP('text.match');

    if ('string' !== typeof t) {
      return false;
    }

    if ('string' == typeof o) {
      o = {
        '=': o
      };
    }

    o = o || {};
    tmp = o['='] || o['*'] || o['>'] || o['<'];

    if (t === tmp) {
      return true;
    }

    if (u !== o['=']) {
      return false;
    }

    tmp = o['*'] || o['>'] || o['<'];

    if (t.slice(0, (tmp || '').length) === tmp) {
      return true;
    }

    if (u !== o['*']) {
      return false;
    }

    if (u !== o['>'] && u !== o['<']) {
      return t >= o['>'] && t <= o['<'] ? true : false;
    }

    if (u !== o['>'] && t >= o['>']) {
      return true;
    }

    if (u !== o['<'] && t <= o['<']) {
      return true;
    }

    return false;
  };

  Type.text.hash = Type.text.hash || function (s, c) {
    // via SO
    DEP('text.hash');

    if (typeof s !== 'string') {
      return;
    }

    c = c || 0;

    if (!s.length) {
      return c;
    }

    for (var i = 0, l = s.length, n; i < l; ++i) {
      n = s.charCodeAt(i);
      c = (c << 5) - c + n;
      c |= 0;
    }

    return c;
  };

  Type.list = Type.list || {
    is: function (l) {
      DEP('list');
      return l instanceof Array;
    }
  };
  Type.list.slit = Type.list.slit || Array.prototype.slice;

  Type.list.sort = Type.list.sort || function (k) {
    // creates a new sort function based off some key
    DEP('list.sort');
    return function (A, B) {
      if (!A || !B) {
        return 0;
      }

      A = A[k];
      B = B[k];

      if (A < B) {
        return -1;
      } else if (A > B) {
        return 1;
      } else {
        return 0;
      }
    };
  };

  Type.list.map = Type.list.map || function (l, c, _) {
    DEP('list.map');
    return obj_map(l, c, _);
  };

  Type.list.index = 1; // change this to 0 if you want non-logical, non-mathematical, non-matrix, non-convenient array notation

  Type.obj = Type.boj || {
    is: function (o) {
      DEP('obj');
      return o ? o instanceof Object && o.constructor === Object || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false;
    }
  };

  Type.obj.put = Type.obj.put || function (o, k, v) {
    DEP('obj.put');
    return (o || {})[k] = v, o;
  };

  Type.obj.has = Type.obj.has || function (o, k) {
    DEP('obj.has');
    return o && Object.prototype.hasOwnProperty.call(o, k);
  };

  Type.obj.del = Type.obj.del || function (o, k) {
    DEP('obj.del');

    if (!o) {
      return;
    }

    o[k] = null;
    delete o[k];
    return o;
  };

  Type.obj.as = Type.obj.as || function (o, k, v, u) {
    DEP('obj.as');
    return o[k] = o[k] || (u === v ? {} : v);
  };

  Type.obj.ify = Type.obj.ify || function (o) {
    DEP('obj.ify');

    if (obj_is(o)) {
      return o;
    }

    try {
      o = JSON.parse(o);
    } catch (e) {
      o = {};
    }

    ;
    return o;
  };

  (function () {
    var u;

    function map(v, k) {
      if (obj_has(this, k) && u !== this[k]) {
        return;
      }

      this[k] = v;
    }

    Type.obj.to = Type.obj.to || function (from, to) {
      DEP('obj.to');
      to = to || {};
      obj_map(from, map, to);
      return to;
    };
  })();

  Type.obj.copy = Type.obj.copy || function (o) {
    DEP('obj.copy'); // because http://web.archive.org/web/20140328224025/http://jsperf.com/cloning-an-object/2

    return !o ? o : JSON.parse(JSON.stringify(o)); // is shockingly faster than anything else, and our data has to be a subset of JSON anyways!
  };

  (function () {
    function empty(v, i) {
      var n = this.n,
          u;

      if (n && (i === n || obj_is(n) && obj_has(n, i))) {
        return;
      }

      if (u !== i) {
        return true;
      }
    }

    Type.obj.empty = Type.obj.empty || function (o, n) {
      DEP('obj.empty');

      if (!o) {
        return true;
      }

      return obj_map(o, empty, {
        n: n
      }) ? false : true;
    };
  })();

  ;

  (function () {
    function t(k, v) {
      if (2 === arguments.length) {
        t.r = t.r || {};
        t.r[k] = v;
        return;
      }

      t.r = t.r || [];
      t.r.push(k);
    }

    ;
    var keys = Object.keys,
        map,
        u;

    Object.keys = Object.keys || function (o) {
      return map(o, function (v, k, t) {
        t(k);
      });
    };

    Type.obj.map = map = Type.obj.map || function (l, c, _) {
      DEP('obj.map');
      var u,
          i = 0,
          x,
          r,
          ll,
          lle,
          f = 'function' == typeof c;
      t.r = u;

      if (keys && obj_is(l)) {
        ll = keys(l);
        lle = true;
      }

      _ = _ || {};

      if (list_is(l) || ll) {
        x = (ll || l).length;

        for (; i < x; i++) {
          var ii = i + Type.list.index;

          if (f) {
            r = lle ? c.call(_, l[ll[i]], ll[i], t) : c.call(_, l[i], ii, t);

            if (r !== u) {
              return r;
            }
          } else {
            //if(Type.test.is(c,l[i])){ return ii } // should implement deep equality testing!
            if (c === l[lle ? ll[i] : i]) {
              return ll ? ll[i] : ii;
            } // use this for now

          }
        }
      } else {
        for (i in l) {
          if (f) {
            if (obj_has(l, i)) {
              r = _ ? c.call(_, l[i], i, t) : c(l[i], i, t);

              if (r !== u) {
                return r;
              }
            }
          } else {
            //if(a.test.is(c,l[i])){ return i } // should implement deep equality testing!
            if (c === l[i]) {
              return i;
            } // use this for now

          }
        }
      }

      return f ? t.r : Type.list.index ? 0 : -1;
    };
  })();

  Type.time = Type.time || {};

  Type.time.is = Type.time.is || function (t) {
    DEP('time');
    return t ? t instanceof Date : +new Date().getTime();
  };

  var fn_is = Type.fn.is;
  var list_is = Type.list.is;
  var obj = Type.obj,
      obj_is = obj.is,
      obj_has = obj.has,
      obj_map = obj.map;
  var Val = {};

  Val.is = function (v) {
    DEP('val.is'); // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.

    if (v === u) {
      return false;
    }

    if (v === null) {
      return true;
    } // "deletes", nulling out keys.


    if (v === Infinity) {
      return false;
    } // we want this to be, but JSON does not support it, sad face.


    if (text_is(v) // by "text" we mean strings.
    || bi_is(v) // by "binary" we mean boolean.
    || num_is(v)) {
      // by "number" we mean integers or decimals.
      return true; // simple values are valid.
    }

    return Val.link.is(v) || false; // is the value a soul relation? Then it is valid and return it. If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
  };

  Val.link = Val.rel = {
    _: '#'
  };
  ;

  (function () {
    Val.link.is = function (v) {
      DEP('val.link.is'); // this defines whether an object is a soul relation or not, they look like this: {'#': 'UUID'}

      if (v && v[rel_] && !v._ && obj_is(v)) {
        // must be an object.
        var o = {};
        obj_map(v, map, o);

        if (o.id) {
          // a valid id was found.
          return o.id; // yay! Return it.
        }
      }

      return false; // the value was not a valid soul relation.
    };

    function map(s, k) {
      var o = this; // map over the object...

      if (o.id) {
        return o.id = false;
      } // if ID is already defined AND we're still looping through the object, it is considered invalid.


      if (k == rel_ && text_is(s)) {
        // the key should be '#' and have a text value.
        o.id = s; // we found the soul!
      } else {
        return o.id = false; // if there exists anything else on the object that isn't the soul, then it is considered invalid.
      }
    }
  })();

  Val.link.ify = function (t) {
    DEP('val.link.ify');
    return obj_put({}, rel_, t);
  }; // convert a soul into a relation and return it.


  Type.obj.has._ = '.';
  var rel_ = Val.link._,
      u;
  var bi_is = Type.bi.is;
  var num_is = Type.num.is;
  var text_is = Type.text.is;
  var obj = Type.obj,
      obj_is = obj.is,
      obj_put = obj.put,
      obj_map = obj.map;
  Type.val = Type.val || Val;
  var Node = {
    _: '_'
  };

  Node.soul = function (n, o) {
    DEP('node.soul');
    return n && n._ && n._[o || soul_];
  }; // convenience function to check to see if there is a soul on a node and return it.


  Node.soul.ify = function (n, o) {
    DEP('node.soul.ify'); // put a soul on an object.

    o = typeof o === 'string' ? {
      soul: o
    } : o || {};
    n = n || {}; // make sure it exists.

    n._ = n._ || {}; // make sure meta exists.

    n._[soul_] = o.soul || n._[soul_] || text_random(); // put the soul on it.

    return n;
  };

  Node.soul._ = Val.link._;
  ;

  (function () {
    Node.is = function (n, cb, as) {
      DEP('node.is');
      var s; // checks to see if an object is a valid node.

      if (!obj_is(n)) {
        return false;
      } // must be an object.


      if (s = Node.soul(n)) {
        // must have a soul on it.
        return !obj_map(n, map, {
          as: as,
          cb: cb,
          s: s,
          n: n
        });
      }

      return false; // nope! This was not a valid node.
    };

    function map(v, k) {
      // we invert this because the way we check for this is via a negation.
      if (k === Node._) {
        return;
      } // skip over the metadata.


      if (!Val.is(v)) {
        return true;
      } // it is true that this is an invalid node.


      if (this.cb) {
        this.cb.call(this.as, v, k, this.n, this.s);
      } // optionally callback each key/value.

    }
  })();

  ;

  (function () {
    Node.ify = function (obj, o, as) {
      DEP('node.ify'); // returns a node from a shallow object.

      if (!o) {
        o = {};
      } else if (typeof o === 'string') {
        o = {
          soul: o
        };
      } else if ('function' == typeof o) {
        o = {
          map: o
        };
      }

      if (o.map) {
        o.node = o.map.call(as, obj, u, o.node || {});
      }

      if (o.node = Node.soul.ify(o.node || {}, o)) {
        obj_map(obj, map, {
          o: o,
          as: as
        });
      }

      return o.node; // This will only be a valid node if the object wasn't already deep!
    };

    function map(v, k) {
      var o = this.o,
          tmp,
          u; // iterate over each key/value.

      if (o.map) {
        tmp = o.map.call(this.as, v, '' + k, o.node);

        if (u === tmp) {
          obj_del(o.node, k);
        } else if (o.node) {
          o.node[k] = tmp;
        }

        return;
      }

      if (Val.is(v)) {
        o.node[k] = v;
      }
    }
  })();

  var obj = Type.obj,
      obj_is = obj.is,
      obj_del = obj.del,
      obj_map = obj.map;
  var text = Type.text,
      text_random = text.random;
  var soul_ = Node.soul._;
  var u;
  Type.node = Type.node || Node;
  var State = Type.state;

  State.lex = function () {
    DEP('state.lex');
    return State().toString(36).replace('.', '');
  };

  State.to = function (from, k, to) {
    DEP('state.to');
    var val = (from || {})[k];

    if (obj_is(val)) {
      val = obj_copy(val);
    }

    return State.ify(to, k, State.is(from, k), val, Node.soul(from));
  };

  (function () {
    State.map = function (cb, s, as) {
      DEP('state.map');
      var u; // for use with Node.ify

      var o = obj_is(o = cb || s) ? o : null;
      cb = fn_is(cb = cb || s) ? cb : null;

      if (o && !cb) {
        s = num_is(s) ? s : State();
        o[N_] = o[N_] || {};
        obj_map(o, map, {
          o: o,
          s: s
        });
        return o;
      }

      as = as || obj_is(s) ? s : u;
      s = num_is(s) ? s : State();
      return function (v, k, o, opt) {
        if (!cb) {
          map.call({
            o: o,
            s: s
          }, v, k);
          return v;
        }

        cb.call(as || this || {}, v, k, o, opt);

        if (obj_has(o, k) && u === o[k]) {
          return;
        }

        map.call({
          o: o,
          s: s
        }, v, k);
      };
    };

    function map(v, k) {
      if (N_ === k) {
        return;
      }

      State.ify(this.o, k, this.s);
    }
  })();

  var obj = Type.obj,
      obj_as = obj.as,
      obj_has = obj.has,
      obj_is = obj.is,
      obj_map = obj.map,
      obj_copy = obj.copy;
  var num = Type.num,
      num_is = num.is;
  var fn = Type.fn,
      fn_is = fn.is;
  var N_ = Node._,
      u;
  var Graph = {};
  ;

  (function () {
    Graph.is = function (g, cb, fn, as) {
      DEP('graph.is'); // checks to see if an object is a valid graph.

      if (!g || !obj_is(g) || obj_empty(g)) {
        return false;
      } // must be an object.


      return !obj_map(g, map, {
        cb: cb,
        fn: fn,
        as: as
      }); // makes sure it wasn't an empty object.
    };

    function map(n, s) {
      // we invert this because the way'? we check for this is via a negation.
      if (!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)) {
        return true;
      } // it is true that this is an invalid graph.


      if (!this.cb) {
        return;
      }

      nf.n = n;
      nf.as = this.as; // sequential race conditions aren't races.

      this.cb.call(nf.as, n, s, nf);
    }

    function nf(fn) {
      // optional callback for each node.
      if (fn) {
        Node.is(nf.n, fn, nf.as);
      } // where we then have an optional callback for each key/value.

    }
  })();

  ;

  (function () {
    Graph.ify = function (obj, env, as) {
      DEP('graph.ify');
      var at = {
        path: [],
        obj: obj
      };

      if (!env) {
        env = {};
      } else if (typeof env === 'string') {
        env = {
          soul: env
        };
      } else if ('function' == typeof env) {
        env.map = env;
      }

      if (typeof as === 'string') {
        env.soul = env.soul || as;
        as = u;
      }

      if (env.soul) {
        at.link = Val.link.ify(env.soul);
      }

      env.shell = (as || {}).shell;
      env.graph = env.graph || {};
      env.seen = env.seen || [];
      env.as = env.as || as;
      node(env, at);
      env.root = at.node;
      return env.graph;
    };

    function node(env, at) {
      var tmp;

      if (tmp = seen(env, at)) {
        return tmp;
      }

      at.env = env;
      at.soul = soul;

      if (Node.ify(at.obj, map, at)) {
        at.link = at.link || Val.link.ify(Node.soul(at.node));

        if (at.obj !== env.shell) {
          env.graph[Val.link.is(at.link)] = at.node;
        }
      }

      return at;
    }

    function map(v, k, n) {
      var at = this,
          env = at.env,
          is,
          tmp;

      if (Node._ === k && obj_has(v, Val.link._)) {
        return n._; // TODO: Bug?
      }

      if (!(is = valid(v, k, n, at, env))) {
        return;
      }

      if (!k) {
        at.node = at.node || n || {};

        if (obj_has(v, Node._) && Node.soul(v)) {
          // ? for safety ?
          at.node._ = obj_copy(v._);
        }

        at.node = Node.soul.ify(at.node, Val.link.is(at.link));
        at.link = at.link || Val.link.ify(Node.soul(at.node));
      }

      if (tmp = env.map) {
        tmp.call(env.as || {}, v, k, n, at);

        if (obj_has(n, k)) {
          v = n[k];

          if (u === v) {
            obj_del(n, k);
            return;
          }

          if (!(is = valid(v, k, n, at, env))) {
            return;
          }
        }
      }

      if (!k) {
        return at.node;
      }

      if (true === is) {
        return v;
      }

      tmp = node(env, {
        obj: v,
        path: at.path.concat(k)
      });

      if (!tmp.node) {
        return;
      }

      return tmp.link; //{'#': Node.soul(tmp.node)};
    }

    function soul(id) {
      var at = this;
      var prev = Val.link.is(at.link),
          graph = at.env.graph;
      at.link = at.link || Val.link.ify(id);
      at.link[Val.link._] = id;

      if (at.node && at.node[Node._]) {
        at.node[Node._][Val.link._] = id;
      }

      if (obj_has(graph, prev)) {
        graph[id] = graph[prev];
        obj_del(graph, prev);
      }
    }

    function valid(v, k, n, at, env) {
      var tmp;

      if (Val.is(v)) {
        return true;
      }

      if (obj_is(v)) {
        return 1;
      }

      if (tmp = env.invalid) {
        v = tmp.call(env.as || {}, v, k, n);
        return valid(v, k, n, at, env);
      }

      env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";

      if (Type.list.is(v)) {
        env.err += " Use `.set(item)` instead of an Array.";
      }
    }

    function seen(env, at) {
      var arr = env.seen,
          i = arr.length,
          has;

      while (i--) {
        has = arr[i];

        if (at.obj === has.obj) {
          return has;
        }
      }

      arr.push(at);
    }
  })();

  Graph.node = function (node) {
    DEP('graph.node');
    var soul = Node.soul(node);

    if (!soul) {
      return;
    }

    return obj_put({}, soul, node);
  };

  (function () {
    Graph.to = function (graph, root, opt) {
      DEP('graph.to');

      if (!graph) {
        return;
      }

      var obj = {};
      opt = opt || {
        seen: {}
      };
      obj_map(graph[root], map, {
        obj: obj,
        graph: graph,
        opt: opt
      });
      return obj;
    };

    function map(v, k) {
      var tmp, obj;

      if (Node._ === k) {
        if (obj_empty(v, Val.link._)) {
          return;
        }

        this.obj[k] = obj_copy(v);
        return;
      }

      if (!(tmp = Val.link.is(v))) {
        this.obj[k] = v;
        return;
      }

      if (obj = this.opt.seen[tmp]) {
        this.obj[k] = obj;
        return;
      }

      this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
    }
  })();

  var fn_is = Type.fn.is;
  var obj = Type.obj,
      obj_is = obj.is,
      obj_del = obj.del,
      obj_has = obj.has,
      obj_empty = obj.empty,
      obj_put = obj.put,
      obj_map = obj.map,
      obj_copy = obj.copy;
  var u;
  Type.graph = Type.graph || Graph;
})();
},{}],"../code/tools/gun.js":[function(require,module,exports) {
var _require = require("./silent_require"),
    silentConsole = _require.silentConsole,
    realConsole = _require.realConsole; // just a workaround for keeping gun quiet


globalThis.console = silentConsole;

var Gun = require('gun/gun');

globalThis.console = realConsole;
module.exports = Gun;
},{"./silent_require":"../code/tools/silent_require.js","gun/gun":"../../node_modules/gun/gun.js"}],"../../node_modules/quik-client/index.js":[function(require,module,exports) {
// get the quik symbol
let quikUniqueKey = Symbol.for("quik")
// if the quik-window doesnt exist, then create it
window[quikUniqueKey] || (window[quikUniqueKey] = {})
// return the window-quik object
module.exports = window[quikUniqueKey]

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
},{"tiny-emitter":"../../node_modules/tiny-emitter/index.js","./support":"../../node_modules/virtual-scroll/src/support.js","./keycodes":"../../node_modules/virtual-scroll/src/keycodes.js"}],"../code/systems/scroll_toggle.js":[function(require,module,exports) {
// From: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    e.preventDefault();
    return false;
  }
} // modern Chrome requires { passive: false } when adding event


var supportsPassive = false;

try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
    get: function get() {
      supportsPassive = true;
    }
  }));
} catch (e) {}

var wheelOpt = supportsPassive ? {
  passive: false
} : false;
var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel"; // call this to Disable

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF

  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop

  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile

  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
} // call this to Enable


function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

module.exports = {
  disableScroll: disableScroll,
  enableScroll: enableScroll
};
},{}],"../code/systems/on_scroll.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VirtualScroll = require('virtual-scroll').default;

var scrollToggle = require("./scroll_toggle");

var scroller = new VirtualScroll();
var shouldBubbleSymbol = Symbol("scrollInfo");
var relatedScrollEventThreshold = 50;
var updateActiveElement = null;
var alreadyActiveElement = null;
var mouseX, mouseY;
window.addEventListener("mouseover", function (e) {
  return mouseX = e.clientX, mouseY = e.clientY;
}); // add a listener to keep the time up to date

scroller.on(function (scrollData) {
  clearTimeout(updateActiveElement);
  alreadyActiveElement = alreadyActiveElement || document.elementFromPoint(mouseX, mouseY);
  var event = scrollData.originalEvent;
  event.stopPropagation();
  var customEvent = new CustomEvent("scroll", _objectSpread(_objectSpread({}, event), {}, {
    bubbles: false,
    cancelable: false
  }));
  Object.assign(customEvent, scrollData);
  var actualStopPropogation = event.stopPropagation.bind(event);

  customEvent.stopPropagation = function () {
    return event[shouldBubbleSymbol] = true;
  };

  customEvent.preventDefault = function () {
    // TODO: even for built-in events prevent default doesn't 
    // work for scrolling (ex: its part of the spec for it to be non-cancelable)
    // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
    // However there might be some clever workarounds, ex: always prevent and then add a window level listener that mannually scrolls (scrollTop, scrollLeft) whenever not prevented 
    console.error("Sadly calling .preventDefault() on a scroll event doesn't work\nsee: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily");
  };

  var runningElement = alreadyActiveElement;

  while (runningElement && !event[shouldBubbleSymbol]) {
    runningElement.dispatchEvent(customEvent);
    var style = {};

    try {
      style = getComputedStyle(runningElement);
    } catch (error) {}

    var elementHasScrollProperties = ["auto", "scroll"].includes(style.overflowX) || ["auto", "scroll"].includes(style.overflowY); // console.debug(`elementHasScrollProperties is:`,  elementHasScrollProperties, "overflowX", style.overflowX, "overflowY", style.overflowY,  `runningElement is:`,runningElement)
    // check if child should capture scroll event

    if (elementHasScrollProperties) {
      var deltaX = customEvent.deltaX,
          deltaY = customEvent.deltaY;
      var _runningElement = runningElement,
          scrollTop = _runningElement.scrollTop,
          scrollTopMax = _runningElement.scrollTopMax,
          scrollLeft = _runningElement.scrollLeft,
          scrollLeftMax = _runningElement.scrollLeftMax;
      var biggerDirectionIsY = Math.abs(deltaY) >= Math.abs(deltaX); // TODO: confirm that deltaX is behaving correctly
      // console.debug(`customEvent.deltaX is:`,customEvent.deltaX)
      // console.debug(`customEvent.deltaY is:`,customEvent.deltaY)
      // console.debug(`runningElement.scrollTop is:`,runningElement.scrollTop)
      // console.debug(`runningElement.scrollLeft is:`,runningElement.scrollLeft)
      // console.debug(`runningElement.scrollTopMax is:`,runningElement.scrollTopMax)
      // console.debug(`runningElement.scrollLeftMax is:`,runningElement.scrollLeftMax)

      var hasScrolledAsFarAsPossible = false; // FIXME check if already scrolled to bottom/top leftMost/rightMost

      if (biggerDirectionIsY) {
        // if scrolling down
        if (deltaY < 0) {
          // has scrolled to the bottom
          hasScrolledAsFarAsPossible = scrollTop >= scrollTopMax; // if scrolling up
        } else {
          // has scrolled to the top
          hasScrolledAsFarAsPossible = scrollTop <= 0;
        }
      } else {
        // if scrolling left
        if (customEvent.delta < 0) {
          // has scrolled all the way left
          hasScrolledAsFarAsPossible = scrollLeft >= scrollLeftMax; // if scrolling right
        } else {
          // has scrolled all the way right
          hasScrolledAsFarAsPossible = scrollLeft <= 0;
        }
      }

      if (!hasScrolledAsFarAsPossible) {
        // let this element capture it (don't bubble)
        break;
      }
    }

    runningElement = runningElement.parentElement;
  } // restore scroll encase preventDefault() was called


  updateActiveElement = setTimeout(function () {
    alreadyActiveElement = document.elementFromPoint(mouseX, mouseY);
  }, relatedScrollEventThreshold);
}); // TODO: disable all scroll events
// manually scroll each element using 
// scrollLeft
// scrollTop
// if it doesn't update or is maxed out, then bubble up the event and repeat
// stop bubbling when executed 
// stop bubbling if preventDefault is ever called
// module.exports = {
//     relatedScrollEventThreshold: 200, // miliseconds
//     onScroll: (element, callback)=>{
//         const scrollInfo = {
//             isHovered: false,
//             lastScrollTime: NaN,
//         }
//         let wasSetup = false
//         const tryInit = ()=>{
//             if (!wasSetup && element instanceof Object) {
//                 element.addEventListener("mouseover" , ()=>scrollInfo.isHovered = true)
//                 element.addEventListener("mouseenter", ()=>scrollInfo.isHovered = true)
//                 element.addEventListener("mouseleave", ()=>scrollInfo.isHovered = false)
//                 wasSetup = true
//             }
//         }
//         tryInit() // sometimes have to wait for object to be created
//         scroller.on((...args)=>{
//             tryInit()
//             if (element instanceof Object) {
//                 const relatedScrollEvent = (timeOfPrevScrollEvent - scrollInfo.lastScrollTime) < relatedScrollEventThreshold
//                 // call the callback
//                 if (scrollInfo.isHovered || relatedScrollEvent) {
//                     // update the scroll time for next time
//                     scrollInfo.lastScrollTime = lastScrollTime
//                     callback(...args)
//                 }
//             }
//         })
//     },
// }
},{"virtual-scroll":"../../node_modules/virtual-scroll/src/index.js","./scroll_toggle":"../code/systems/scroll_toggle.js"}],"../../node_modules/wheel/index.js":[function(require,module,exports) {
/**
 * This module used to unify mouse wheel behavior between different browsers in 2014
 * Now it's just a wrapper around addEventListener('wheel');
 *
 * Usage:
 *  var addWheelListener = require('wheel').addWheelListener;
 *  var removeWheelListener = require('wheel').removeWheelListener;
 *  addWheelListener(domElement, function (e) {
 *    // mouse wheel event
 *  });
 *  removeWheelListener(domElement, function);
 */

module.exports = addWheelListener;

// But also expose "advanced" api with unsubscribe:
module.exports.addWheelListener = addWheelListener;
module.exports.removeWheelListener = removeWheelListener;


function addWheelListener(element, listener, useCapture) {
  element.addEventListener('wheel', listener, useCapture);
}

function removeWheelListener( element, listener, useCapture ) {
  element.removeEventListener('wheel', listener, useCapture);
}
},{}],"../../node_modules/bezier-easing/src/index.js":[function(require,module,exports) {
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

},{}],"../../node_modules/amator/index.js":[function(require,module,exports) {
var BezierEasing = require('bezier-easing')

// Predefined set of animations. Similar to CSS easing functions
var animations = {
  ease:  BezierEasing(0.25, 0.1, 0.25, 1),
  easeIn: BezierEasing(0.42, 0, 1, 1),
  easeOut: BezierEasing(0, 0, 0.58, 1),
  easeInOut: BezierEasing(0.42, 0, 0.58, 1),
  linear: BezierEasing(0, 0, 1, 1)
}


module.exports = animate;
module.exports.makeAggregateRaf = makeAggregateRaf;
module.exports.sharedScheduler = makeAggregateRaf();


function animate(source, target, options) {
  var start = Object.create(null)
  var diff = Object.create(null)
  options = options || {}
  // We let clients specify their own easing function
  var easing = (typeof options.easing === 'function') ? options.easing : animations[options.easing]

  // if nothing is specified, default to ease (similar to CSS animations)
  if (!easing) {
    if (options.easing) {
      console.warn('Unknown easing function in amator: ' + options.easing);
    }
    easing = animations.ease
  }

  var step = typeof options.step === 'function' ? options.step : noop
  var done = typeof options.done === 'function' ? options.done : noop

  var scheduler = getScheduler(options.scheduler)

  var keys = Object.keys(target)
  keys.forEach(function(key) {
    start[key] = source[key]
    diff[key] = target[key] - source[key]
  })

  var durationInMs = typeof options.duration === 'number' ? options.duration : 400
  var durationInFrames = Math.max(1, durationInMs * 0.06) // 0.06 because 60 frames pers 1,000 ms
  var previousAnimationId
  var frame = 0

  previousAnimationId = scheduler.next(loop)

  return {
    cancel: cancel
  }

  function cancel() {
    scheduler.cancel(previousAnimationId)
    previousAnimationId = 0
  }

  function loop() {
    var t = easing(frame/durationInFrames)
    frame += 1
    setValues(t)
    if (frame <= durationInFrames) {
      previousAnimationId = scheduler.next(loop)
      step(source)
    } else {
      previousAnimationId = 0
      setTimeout(function() { done(source) }, 0)
    }
  }

  function setValues(t) {
    keys.forEach(function(key) {
      source[key] = diff[key] * t + start[key]
    })
  }
}

function noop() { }

function getScheduler(scheduler) {
  if (!scheduler) {
    var canRaf = typeof window !== 'undefined' && window.requestAnimationFrame
    return canRaf ? rafScheduler() : timeoutScheduler()
  }
  if (typeof scheduler.next !== 'function') throw new Error('Scheduler is supposed to have next(cb) function')
  if (typeof scheduler.cancel !== 'function') throw new Error('Scheduler is supposed to have cancel(handle) function')

  return scheduler
}

function rafScheduler() {
  return {
    next: window.requestAnimationFrame.bind(window),
    cancel: window.cancelAnimationFrame.bind(window)
  }
}

function timeoutScheduler() {
  return {
    next: function(cb) {
      return setTimeout(cb, 1000/60)
    },
    cancel: function (id) {
      return clearTimeout(id)
    }
  }
}

function makeAggregateRaf() {
  var frontBuffer = new Set();
  var backBuffer = new Set();
  var frameToken = 0;

  return {
    next: next,
    cancel: next,
    clearAll: clearAll
  }

  function clearAll() {
    frontBuffer.clear();
    backBuffer.clear();
    cancelAnimationFrame(frameToken);
    frameToken = 0;
  }

  function next(callback) {
    backBuffer.add(callback);
    renderNextFrame();
  }

  function renderNextFrame() {
    if (!frameToken) frameToken = requestAnimationFrame(renderFrame);
  }

  function renderFrame() {
    frameToken = 0;

    var t = backBuffer;
    backBuffer = frontBuffer;
    frontBuffer = t;

    frontBuffer.forEach(function(callback) {
      callback();
    });
    frontBuffer.clear();
  }

  function cancel(callback) {
    backBuffer.delete(callback);
  }
}

},{"bezier-easing":"../../node_modules/bezier-easing/src/index.js"}],"../../node_modules/ngraph.events/index.js":[function(require,module,exports) {
module.exports = function eventify(subject) {
  validateSubject(subject);

  var eventsStorage = createEventsStorage(subject);
  subject.on = eventsStorage.on;
  subject.off = eventsStorage.off;
  subject.fire = eventsStorage.fire;
  return subject;
};

function createEventsStorage(subject) {
  // Store all event listeners to this hash. Key is event name, value is array
  // of callback records.
  //
  // A callback record consists of callback function and its optional context:
  // { 'eventName' => [{callback: function, ctx: object}] }
  var registeredEvents = Object.create(null);

  return {
    on: function (eventName, callback, ctx) {
      if (typeof callback !== 'function') {
        throw new Error('callback is expected to be a function');
      }
      var handlers = registeredEvents[eventName];
      if (!handlers) {
        handlers = registeredEvents[eventName] = [];
      }
      handlers.push({callback: callback, ctx: ctx});

      return subject;
    },

    off: function (eventName, callback) {
      var wantToRemoveAll = (typeof eventName === 'undefined');
      if (wantToRemoveAll) {
        // Killing old events storage should be enough in this case:
        registeredEvents = Object.create(null);
        return subject;
      }

      if (registeredEvents[eventName]) {
        var deleteAllCallbacksForEvent = (typeof callback !== 'function');
        if (deleteAllCallbacksForEvent) {
          delete registeredEvents[eventName];
        } else {
          var callbacks = registeredEvents[eventName];
          for (var i = 0; i < callbacks.length; ++i) {
            if (callbacks[i].callback === callback) {
              callbacks.splice(i, 1);
            }
          }
        }
      }

      return subject;
    },

    fire: function (eventName) {
      var callbacks = registeredEvents[eventName];
      if (!callbacks) {
        return subject;
      }

      var fireArguments;
      if (arguments.length > 1) {
        fireArguments = Array.prototype.splice.call(arguments, 1);
      }
      for(var i = 0; i < callbacks.length; ++i) {
        var callbackInfo = callbacks[i];
        callbackInfo.callback.apply(callbackInfo.ctx, fireArguments);
      }

      return subject;
    }
  };
}

function validateSubject(subject) {
  if (!subject) {
    throw new Error('Eventify cannot use falsy object as events subject');
  }
  var reservedWords = ['on', 'fire', 'off'];
  for (var i = 0; i < reservedWords.length; ++i) {
    if (subject.hasOwnProperty(reservedWords[i])) {
      throw new Error("Subject cannot be eventified, since it already has property '" + reservedWords[i] + "'");
    }
  }
}

},{}],"../../node_modules/panzoom/lib/kinetic.js":[function(require,module,exports) {
/**
 * Allows smooth kinetic scrolling of the surface
 */
module.exports = kinetic;

function kinetic(getPoint, scroll, settings) {
  if (typeof settings !== 'object') {
    // setting could come as boolean, we should ignore it, and use an object.
    settings = {};
  }

  var minVelocity = typeof settings.minVelocity === 'number' ? settings.minVelocity : 5;
  var amplitude = typeof settings.amplitude === 'number' ? settings.amplitude : 0.25;
  var cancelAnimationFrame = typeof settings.cancelAnimationFrame === 'function' ? settings.cancelAnimationFrame : getCancelAnimationFrame();
  var requestAnimationFrame = typeof settings.requestAnimationFrame === 'function' ? settings.requestAnimationFrame : getRequestAnimationFrame();

  var lastPoint;
  var timestamp;
  var timeConstant = 342;

  var ticker;
  var vx, targetX, ax;
  var vy, targetY, ay;

  var raf;

  return {
    start: start,
    stop: stop,
    cancel: dispose
  };

  function dispose() {
    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);
  }

  function start() {
    lastPoint = getPoint();

    ax = ay = vx = vy = 0;
    timestamp = new Date();

    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);

    // we start polling the point position to accumulate velocity
    // Once we stop(), we will use accumulated velocity to keep scrolling
    // an object.
    ticker = requestAnimationFrame(track);
  }

  function track() {
    var now = Date.now();
    var elapsed = now - timestamp;
    timestamp = now;

    var currentPoint = getPoint();

    var dx = currentPoint.x - lastPoint.x;
    var dy = currentPoint.y - lastPoint.y;

    lastPoint = currentPoint;

    var dt = 1000 / (1 + elapsed);

    // moving average
    vx = 0.8 * dx * dt + 0.2 * vx;
    vy = 0.8 * dy * dt + 0.2 * vy;

    ticker = requestAnimationFrame(track);
  }

  function stop() {
    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);

    var currentPoint = getPoint();

    targetX = currentPoint.x;
    targetY = currentPoint.y;
    timestamp = Date.now();

    if (vx < -minVelocity || vx > minVelocity) {
      ax = amplitude * vx;
      targetX += ax;
    }

    if (vy < -minVelocity || vy > minVelocity) {
      ay = amplitude * vy;
      targetY += ay;
    }

    raf = requestAnimationFrame(autoScroll);
  }

  function autoScroll() {
    var elapsed = Date.now() - timestamp;

    var moving = false;
    var dx = 0;
    var dy = 0;

    if (ax) {
      dx = -ax * Math.exp(-elapsed / timeConstant);

      if (dx > 0.5 || dx < -0.5) moving = true;
      else dx = ax = 0;
    }

    if (ay) {
      dy = -ay * Math.exp(-elapsed / timeConstant);

      if (dy > 0.5 || dy < -0.5) moving = true;
      else dy = ay = 0;
    }

    if (moving) {
      scroll(targetX + dx, targetY + dy);
      raf = requestAnimationFrame(autoScroll);
    }
  }
}

function getCancelAnimationFrame() {
  if (typeof cancelAnimationFrame === 'function') return cancelAnimationFrame;
  return clearTimeout;
}

function getRequestAnimationFrame() {
  if (typeof requestAnimationFrame === 'function') return requestAnimationFrame;

  return function (handler) {
    return setTimeout(handler, 16);
  };
}
},{}],"../../node_modules/panzoom/lib/createTextSelectionInterceptor.js":[function(require,module,exports) {
/**
 * Disallows selecting text.
 */
module.exports = createTextSelectionInterceptor;

function createTextSelectionInterceptor(useFake) {
  if (useFake) {
    return {
      capture: noop,
      release: noop
    };
  }

  var dragObject;
  var prevSelectStart;
  var prevDragStart;
  var wasCaptured = false;

  return {
    capture: capture,
    release: release
  };

  function capture(domObject) {
    wasCaptured = true;
    prevSelectStart = window.document.onselectstart;
    prevDragStart = window.document.ondragstart;

    window.document.onselectstart = disabled;

    dragObject = domObject;
    dragObject.ondragstart = disabled;
  }

  function release() {
    if (!wasCaptured) return;
    
    wasCaptured = false;
    window.document.onselectstart = prevSelectStart;
    if (dragObject) dragObject.ondragstart = prevDragStart;
  }
}

function disabled(e) {
  e.stopPropagation();
  return false;
}

function noop() {}

},{}],"../../node_modules/panzoom/lib/transform.js":[function(require,module,exports) {
module.exports = Transform;

function Transform() {
  this.x = 0;
  this.y = 0;
  this.scale = 1;
}

},{}],"../../node_modules/panzoom/lib/svgController.js":[function(require,module,exports) {
module.exports = makeSvgController;
module.exports.canAttach = isSVGElement;

function makeSvgController(svgElement, options) {
  if (!isSVGElement(svgElement)) {
    throw new Error('svg element is required for svg.panzoom to work');
  }

  var owner = svgElement.ownerSVGElement;
  if (!owner) {
    throw new Error(
      'Do not apply panzoom to the root <svg> element. ' +
      'Use its child instead (e.g. <g></g>). ' +
      'As of March 2016 only FireFox supported transform on the root element');
  }

  if (!options.disableKeyboardInteraction) {
    owner.setAttribute('tabindex', 0);
  }

  var api = {
    getBBox: getBBox,
    getScreenCTM: getScreenCTM,
    getOwner: getOwner,
    applyTransform: applyTransform,
    initTransform: initTransform
  };
  
  return api;

  function getOwner() {
    return owner;
  }

  function getBBox() {
    var bbox =  svgElement.getBBox();
    return {
      left: bbox.x,
      top: bbox.y,
      width: bbox.width,
      height: bbox.height,
    };
  }

  function getScreenCTM() {
    var ctm = owner.getCTM();
    if (!ctm) {
      // This is likely firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=873106
      // The code below is not entirely correct, but still better than nothing
      return owner.getScreenCTM();
    }
    return ctm;
  }

  function initTransform(transform) {
    var screenCTM = svgElement.getCTM();

    // The above line returns null on Firefox
    if (screenCTM === null) {
      screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
    }

    transform.x = screenCTM.e;
    transform.y = screenCTM.f;
    transform.scale = screenCTM.a;
    owner.removeAttributeNS(null, 'viewBox');
  }

  function applyTransform(transform) {
    svgElement.setAttribute('transform', 'matrix(' +
      transform.scale + ' 0 0 ' +
      transform.scale + ' ' +
      transform.x + ' ' + transform.y + ')');
  }
}

function isSVGElement(element) {
  return element && element.ownerSVGElement && element.getCTM;
}
},{}],"../../node_modules/panzoom/lib/domController.js":[function(require,module,exports) {
module.exports = makeDomController;

module.exports.canAttach = isDomElement;

function makeDomController(domElement, options) {
  var elementValid = isDomElement(domElement); 
  if (!elementValid) {
    throw new Error('panzoom requires DOM element to be attached to the DOM tree');
  }

  var owner = domElement.parentElement;
  domElement.scrollTop = 0;
  
  if (!options.disableKeyboardInteraction) {
    owner.setAttribute('tabindex', 0);
  }

  var api = {
    getBBox: getBBox,
    getOwner: getOwner,
    applyTransform: applyTransform,
  };
  
  return api;

  function getOwner() {
    return owner;
  }

  function getBBox() {
    // TODO: We should probably cache this?
    return  {
      left: 0,
      top: 0,
      width: domElement.clientWidth,
      height: domElement.clientHeight
    };
  }

  function applyTransform(transform) {
    // TODO: Should we cache this?
    domElement.style.transformOrigin = '0 0 0';
    domElement.style.transform = 'matrix(' +
      transform.scale + ', 0, 0, ' +
      transform.scale + ', ' +
      transform.x + ', ' + transform.y + ')';
  }
}

function isDomElement(element) {
  return element && element.parentElement && element.style;
}

},{}],"../../node_modules/panzoom/index.js":[function(require,module,exports) {
'use strict';
/**
 * Allows to drag and zoom svg elements
 */
var wheel = require('wheel');
var animate = require('amator');
var eventify = require('ngraph.events');
var kinetic = require('./lib/kinetic.js');
var createTextSelectionInterceptor = require('./lib/createTextSelectionInterceptor.js');
var domTextSelectionInterceptor = createTextSelectionInterceptor();
var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
var Transform = require('./lib/transform.js');
var makeSvgController = require('./lib/svgController.js');
var makeDomController = require('./lib/domController.js');

var defaultZoomSpeed = 1;
var defaultDoubleTapZoomSpeed = 1.75;
var doubleTapSpeedInMS = 300;

module.exports = createPanZoom;

/**
 * Creates a new instance of panzoom, so that an object can be panned and zoomed
 *
 * @param {DOMElement} domElement where panzoom should be attached.
 * @param {Object} options that configure behavior.
 */
function createPanZoom(domElement, options) {
  options = options || {};

  var panController = options.controller;

  if (!panController) {
    if (makeSvgController.canAttach(domElement)) {
      panController = makeSvgController(domElement, options);
    } else if (makeDomController.canAttach(domElement)) {
      panController = makeDomController(domElement, options);
    }
  }

  if (!panController) {
    throw new Error(
      'Cannot create panzoom for the current type of dom element'
    );
  }
  var owner = panController.getOwner();
  // just to avoid GC pressure, every time we do intermediate transform
  // we return this object. For internal use only. Never give it back to the consumer of this library
  var storedCTMResult = { x: 0, y: 0 };

  var isDirty = false;
  var transform = new Transform();

  if (panController.initTransform) {
    panController.initTransform(transform);
  }

  var filterKey = typeof options.filterKey === 'function' ? options.filterKey : noop;
  // TODO: likely need to unite pinchSpeed with zoomSpeed
  var pinchSpeed = typeof options.pinchSpeed === 'number' ? options.pinchSpeed : 1;
  var bounds = options.bounds;
  var maxZoom = typeof options.maxZoom === 'number' ? options.maxZoom : Number.POSITIVE_INFINITY;
  var minZoom = typeof options.minZoom === 'number' ? options.minZoom : 0;

  var boundsPadding = typeof options.boundsPadding === 'number' ? options.boundsPadding : 0.05;
  var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === 'number' ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
  var beforeWheel = options.beforeWheel || noop;
  var beforeMouseDown = options.beforeMouseDown || noop;
  var speed = typeof options.zoomSpeed === 'number' ? options.zoomSpeed : defaultZoomSpeed;
  var transformOrigin = parseTransformOrigin(options.transformOrigin);
  var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;

  validateBounds(bounds);

  if (options.autocenter) {
    autocenter();
  }

  var frameAnimation;
  var lastTouchEndTime = 0;
  var lastSingleFingerOffset;
  var touchInProgress = false;

  // We only need to fire panstart when actual move happens
  var panstartFired = false;

  // cache mouse coordinates here
  var mouseX;
  var mouseY;

  var pinchZoomLength;

  var smoothScroll;
  if ('smoothScroll' in options && !options.smoothScroll) {
    // If user explicitly asked us not to use smooth scrolling, we obey
    smoothScroll = rigidScroll();
  } else {
    // otherwise we use forward smoothScroll settings to kinetic API
    // which makes scroll smoothing.
    smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
  }

  var moveByAnimation;
  var zoomToAnimation;

  var multiTouch;
  var paused = false;

  listenForEvents();

  var api = {
    dispose: dispose,
    moveBy: internalMoveBy,
    moveTo: moveTo,
    smoothMoveTo: smoothMoveTo, 
    centerOn: centerOn,
    zoomTo: publicZoomTo,
    zoomAbs: zoomAbs,
    smoothZoom: smoothZoom,
    smoothZoomAbs: smoothZoomAbs,
    showRectangle: showRectangle,

    pause: pause,
    resume: resume,
    isPaused: isPaused,

    getTransform: getTransformModel,

    getMinZoom: getMinZoom,
    setMinZoom: setMinZoom,

    getMaxZoom: getMaxZoom,
    setMaxZoom: setMaxZoom,

    getTransformOrigin: getTransformOrigin,
    setTransformOrigin: setTransformOrigin,

    getZoomSpeed: getZoomSpeed,
    setZoomSpeed: setZoomSpeed
  };

  eventify(api);
  
  var initialX = typeof options.initialX === 'number' ? options.initialX : transform.x;
  var initialY = typeof options.initialY === 'number' ? options.initialY : transform.y;
  var initialZoom = typeof options.initialZoom === 'number' ? options.initialZoom : transform.scale;

  if(initialX != transform.x || initialY != transform.y || initialZoom != transform.scale){
    zoomAbs(initialX, initialY, initialZoom);
  }

  return api;

  function pause() {
    releaseEvents();
    paused = true;
  }

  function resume() {
    if (paused) {
      listenForEvents();
      paused = false;
    }
  }

  function isPaused() {
    return paused;
  }

  function showRectangle(rect) {
    // TODO: this duplicates autocenter. I think autocenter should go.
    var clientRect = owner.getBoundingClientRect();
    var size = transformToScreen(clientRect.width, clientRect.height);

    var rectWidth = rect.right - rect.left;
    var rectHeight = rect.bottom - rect.top;
    if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
      throw new Error('Invalid rectangle');
    }

    var dw = size.x / rectWidth;
    var dh = size.y / rectHeight;
    var scale = Math.min(dw, dh);
    transform.x = -(rect.left + rectWidth / 2) * scale + size.x / 2;
    transform.y = -(rect.top + rectHeight / 2) * scale + size.y / 2;
    transform.scale = scale;
  }

  function transformToScreen(x, y) {
    if (panController.getScreenCTM) {
      var parentCTM = panController.getScreenCTM();
      var parentScaleX = parentCTM.a;
      var parentScaleY = parentCTM.d;
      var parentOffsetX = parentCTM.e;
      var parentOffsetY = parentCTM.f;
      storedCTMResult.x = x * parentScaleX - parentOffsetX;
      storedCTMResult.y = y * parentScaleY - parentOffsetY;
    } else {
      storedCTMResult.x = x;
      storedCTMResult.y = y;
    }

    return storedCTMResult;
  }

  function autocenter() {
    var w; // width of the parent
    var h; // height of the parent
    var left = 0;
    var top = 0;
    var sceneBoundingBox = getBoundingBox();
    if (sceneBoundingBox) {
      // If we have bounding box - use it.
      left = sceneBoundingBox.left;
      top = sceneBoundingBox.top;
      w = sceneBoundingBox.right - sceneBoundingBox.left;
      h = sceneBoundingBox.bottom - sceneBoundingBox.top;
    } else {
      // otherwise just use whatever space we have
      var ownerRect = owner.getBoundingClientRect();
      w = ownerRect.width;
      h = ownerRect.height;
    }
    var bbox = panController.getBBox();
    if (bbox.width === 0 || bbox.height === 0) {
      // we probably do not have any elements in the SVG
      // just bail out;
      return;
    }
    var dh = h / bbox.height;
    var dw = w / bbox.width;
    var scale = Math.min(dw, dh);
    transform.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
    transform.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
    transform.scale = scale;
  }

  function getTransformModel() {
    // TODO: should this be read only?
    return transform;
  }

  function getMinZoom() {
    return minZoom;
  }

  function setMinZoom(newMinZoom) {
    minZoom = newMinZoom;
  }

  function getMaxZoom() {
    return maxZoom;
  }

  function setMaxZoom(newMaxZoom) {
    maxZoom = newMaxZoom;
  }

  function getTransformOrigin() {
    return transformOrigin;
  }

  function setTransformOrigin(newTransformOrigin) {
    transformOrigin = parseTransformOrigin(newTransformOrigin);
  }

  function getZoomSpeed() {
    return speed;
  }

  function setZoomSpeed(newSpeed) {
    if (!Number.isFinite(newSpeed)) {
      throw new Error('Zoom speed should be a number');
    }
    speed = newSpeed;
  }

  function getPoint() {
    return {
      x: transform.x,
      y: transform.y
    };
  }

  function moveTo(x, y) {
    transform.x = x;
    transform.y = y;

    keepTransformInsideBounds();

    triggerEvent('pan');
    makeDirty();
  }

  function moveBy(dx, dy) {
    moveTo(transform.x + dx, transform.y + dy);
  }

  function keepTransformInsideBounds() {
    var boundingBox = getBoundingBox();
    if (!boundingBox) return;

    var adjusted = false;
    var clientRect = getClientRect();

    var diff = boundingBox.left - clientRect.right;
    if (diff > 0) {
      transform.x += diff;
      adjusted = true;
    }
    // check the other side:
    diff = boundingBox.right - clientRect.left;
    if (diff < 0) {
      transform.x += diff;
      adjusted = true;
    }

    // y axis:
    diff = boundingBox.top - clientRect.bottom;
    if (diff > 0) {
      // we adjust transform, so that it matches exactly our bounding box:
      // transform.y = boundingBox.top - (boundingBox.height + boundingBox.y) * transform.scale =>
      // transform.y = boundingBox.top - (clientRect.bottom - transform.y) =>
      // transform.y = diff + transform.y =>
      transform.y += diff;
      adjusted = true;
    }

    diff = boundingBox.bottom - clientRect.top;
    if (diff < 0) {
      transform.y += diff;
      adjusted = true;
    }
    return adjusted;
  }

  /**
   * Returns bounding box that should be used to restrict scene movement.
   */
  function getBoundingBox() {
    if (!bounds) return; // client does not want to restrict movement

    if (typeof bounds === 'boolean') {
      // for boolean type we use parent container bounds
      var ownerRect = owner.getBoundingClientRect();
      var sceneWidth = ownerRect.width;
      var sceneHeight = ownerRect.height;

      return {
        left: sceneWidth * boundsPadding,
        top: sceneHeight * boundsPadding,
        right: sceneWidth * (1 - boundsPadding),
        bottom: sceneHeight * (1 - boundsPadding)
      };
    }

    return bounds;
  }

  function getClientRect() {
    var bbox = panController.getBBox();
    var leftTop = client(bbox.left, bbox.top);

    return {
      left: leftTop.x,
      top: leftTop.y,
      right: bbox.width * transform.scale + leftTop.x,
      bottom: bbox.height * transform.scale + leftTop.y
    };
  }

  function client(x, y) {
    return {
      x: x * transform.scale + transform.x,
      y: y * transform.scale + transform.y
    };
  }

  function makeDirty() {
    isDirty = true;
    frameAnimation = window.requestAnimationFrame(frame);
  }

  function zoomByRatio(clientX, clientY, ratio) {
    if (isNaN(clientX) || isNaN(clientY) || isNaN(ratio)) {
      throw new Error('zoom requires valid numbers');
    }

    var newScale = transform.scale * ratio;

    if (newScale < minZoom) {
      if (transform.scale === minZoom) return;

      ratio = minZoom / transform.scale;
    }
    if (newScale > maxZoom) {
      if (transform.scale === maxZoom) return;

      ratio = maxZoom / transform.scale;
    }

    var size = transformToScreen(clientX, clientY);

    transform.x = size.x - ratio * (size.x - transform.x);
    transform.y = size.y - ratio * (size.y - transform.y);

    // TODO: https://github.com/anvaka/panzoom/issues/112
    if (bounds && boundsPadding === 1 && minZoom === 1) {
      transform.scale *= ratio;
      keepTransformInsideBounds();
    } else {
      var transformAdjusted = keepTransformInsideBounds();
      if (!transformAdjusted) transform.scale *= ratio;
    }

    triggerEvent('zoom');

    makeDirty();
  }

  function zoomAbs(clientX, clientY, zoomLevel) {
    var ratio = zoomLevel / transform.scale;
    zoomByRatio(clientX, clientY, ratio);
  }

  function centerOn(ui) {
    var parent = ui.ownerSVGElement;
    if (!parent)
      throw new Error('ui element is required to be within the scene');

    // TODO: should i use controller's screen CTM?
    var clientRect = ui.getBoundingClientRect();
    var cx = clientRect.left + clientRect.width / 2;
    var cy = clientRect.top + clientRect.height / 2;

    var container = parent.getBoundingClientRect();
    var dx = container.width / 2 - cx;
    var dy = container.height / 2 - cy;

    internalMoveBy(dx, dy, true);
  }

  function smoothMoveTo(x, y){
    internalMoveBy(x - transform.x, y - transform.y, true);
  }

  function internalMoveBy(dx, dy, smooth) {
    if (!smooth) {
      return moveBy(dx, dy);
    }

    if (moveByAnimation) moveByAnimation.cancel();

    var from = { x: 0, y: 0 };
    var to = { x: dx, y: dy };
    var lastX = 0;
    var lastY = 0;

    moveByAnimation = animate(from, to, {
      step: function (v) {
        moveBy(v.x - lastX, v.y - lastY);

        lastX = v.x;
        lastY = v.y;
      }
    });
  }

  function scroll(x, y) {
    cancelZoomAnimation();
    moveTo(x, y);
  }

  function dispose() {
    releaseEvents();
  }

  function listenForEvents() {
    owner.addEventListener('mousedown', onMouseDown, { passive: false });
    owner.addEventListener('dblclick', onDoubleClick, { passive: false });
    owner.addEventListener('touchstart', onTouch, { passive: false });
    owner.addEventListener('keydown', onKeyDown, { passive: false });

    // Need to listen on the owner container, so that we are not limited
    // by the size of the scrollable domElement
    wheel.addWheelListener(owner, onMouseWheel, { passive: false });

    makeDirty();
  }

  function releaseEvents() {
    wheel.removeWheelListener(owner, onMouseWheel);
    owner.removeEventListener('mousedown', onMouseDown);
    owner.removeEventListener('keydown', onKeyDown);
    owner.removeEventListener('dblclick', onDoubleClick);
    owner.removeEventListener('touchstart', onTouch);

    if (frameAnimation) {
      window.cancelAnimationFrame(frameAnimation);
      frameAnimation = 0;
    }

    smoothScroll.cancel();

    releaseDocumentMouse();
    releaseTouches();
    textSelection.release();

    triggerPanEnd();
  }

  function frame() {
    if (isDirty) applyTransform();
  }

  function applyTransform() {
    isDirty = false;

    // TODO: Should I allow to cancel this?
    panController.applyTransform(transform);

    triggerEvent('transform');
    frameAnimation = 0;
  }

  function onKeyDown(e) {
    var x = 0,
      y = 0,
      z = 0;
    if (e.keyCode === 38) {
      y = 1; // up
    } else if (e.keyCode === 40) {
      y = -1; // down
    } else if (e.keyCode === 37) {
      x = 1; // left
    } else if (e.keyCode === 39) {
      x = -1; // right
    } else if (e.keyCode === 189 || e.keyCode === 109) {
      // DASH or SUBTRACT
      z = 1; // `-` -  zoom out
    } else if (e.keyCode === 187 || e.keyCode === 107) {
      // EQUAL SIGN or ADD
      z = -1; // `=` - zoom in (equal sign on US layout is under `+`)
    }

    if (filterKey(e, x, y, z)) {
      // They don't want us to handle the key: https://github.com/anvaka/panzoom/issues/45
      return;
    }

    if (x || y) {
      e.preventDefault();
      e.stopPropagation();

      var clientRect = owner.getBoundingClientRect();
      // movement speed should be the same in both X and Y direction:
      var offset = Math.min(clientRect.width, clientRect.height);
      var moveSpeedRatio = 0.05;
      var dx = offset * moveSpeedRatio * x;
      var dy = offset * moveSpeedRatio * y;

      // TODO: currently we do not animate this. It could be better to have animation
      internalMoveBy(dx, dy);
    }

    if (z) {
      var scaleMultiplier = getScaleMultiplier(z * 100);
      var offset = transformOrigin ? getTransformOriginOffset() : midPoint();
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
    }
  }

  function midPoint() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width / 2,
      y: ownerRect.height / 2
    };
  }

  function onTouch(e) {
    // let the override the touch behavior
    beforeTouch(e);

    if (e.touches.length === 1) {
      return handleSingleFingerTouch(e, e.touches[0]);
    } else if (e.touches.length === 2) {
      // handleTouchMove() will care about pinch zoom.
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      multiTouch = true;
      startTouchListenerIfNeeded();
    }
  }

  function beforeTouch(e) {
    // TODO: Need to unify this filtering names. E.g. use `beforeTouch`
    if (options.onTouch && !options.onTouch(e)) {
      // if they return `false` from onTouch, we don't want to stop
      // events propagation. Fixes https://github.com/anvaka/panzoom/issues/12
      return;
    }

    e.stopPropagation();
    e.preventDefault();
  }

  function beforeDoubleClick(e) {
    // TODO: Need to unify this filtering names. E.g. use `beforeDoubleClick``
    if (options.onDoubleClick && !options.onDoubleClick(e)) {
      // if they return `false` from onTouch, we don't want to stop
      // events propagation. Fixes https://github.com/anvaka/panzoom/issues/46
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  }

  function handleSingleFingerTouch(e) {
    var touch = e.touches[0];
    var offset = getOffsetXY(touch);
    lastSingleFingerOffset = offset;
    var point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;

    smoothScroll.cancel();
    startTouchListenerIfNeeded();
  }

  function startTouchListenerIfNeeded() {
    if (touchInProgress) {
      // no need to do anything, as we already listen to events;
      return;
    }

    touchInProgress = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
  }

  function handleTouchMove(e) {
    if (e.touches.length === 1) {
      e.stopPropagation();
      var touch = e.touches[0];

      var offset = getOffsetXY(touch);
      var point = transformToScreen(offset.x, offset.y);

      var dx = point.x - mouseX;
      var dy = point.y - mouseY;

      if (dx !== 0 && dy !== 0) {
        triggerPanStart();
      }
      mouseX = point.x;
      mouseY = point.y;
      internalMoveBy(dx, dy);
    } else if (e.touches.length === 2) {
      // it's a zoom, let's find direction
      multiTouch = true;
      var t1 = e.touches[0];
      var t2 = e.touches[1];
      var currentPinchLength = getPinchZoomLength(t1, t2);

      // since the zoom speed is always based on distance from 1, we need to apply
      // pinch speed only on that distance from 1:
      var scaleMultiplier =
        1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;

      var firstTouchPoint = getOffsetXY(t1);
      var secondTouchPoint = getOffsetXY(t2);
      mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
      mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
      if (transformOrigin) {
        var offset = getTransformOriginOffset();
        mouseX = offset.x;
        mouseY = offset.y;
      }

      publicZoomTo(mouseX, mouseY, scaleMultiplier);

      pinchZoomLength = currentPinchLength;
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function handleTouchEnd(e) {
    if (e.touches.length > 0) {
      var offset = getOffsetXY(e.touches[0]);
      var point = transformToScreen(offset.x, offset.y);
      mouseX = point.x;
      mouseY = point.y;
    } else {
      var now = new Date();
      if (now - lastTouchEndTime < doubleTapSpeedInMS) {
        if (transformOrigin) {
          var offset = getTransformOriginOffset();
          smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
        } else {
          // We want untransformed x/y here.
          smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
        }
      }

      lastTouchEndTime = now;

      triggerPanEnd();
      releaseTouches();
    }
  }

  function getPinchZoomLength(finger1, finger2) {
    var dx = finger1.clientX - finger2.clientX;
    var dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onDoubleClick(e) {
    beforeDoubleClick(e);
    var offset = getOffsetXY(e);
    if (transformOrigin) {
      // TODO: looks like this is duplicated in the file.
      // Need to refactor
      offset = getTransformOriginOffset();
    }
    smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
  }

  function onMouseDown(e) {
    // if client does not want to handle this event - just ignore the call
    if (beforeMouseDown(e)) return;

    if (touchInProgress) {
      // modern browsers will fire mousedown for touch events too
      // we do not want this: touch is handled separately.
      e.stopPropagation();
      return false;
    }
    // for IE, left click == 1
    // for Firefox, left click == 0
    var isLeftButton =
      (e.button === 1 && window.event !== null) || e.button === 0;
    if (!isLeftButton) return;

    smoothScroll.cancel();

    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;

    // We need to listen on document itself, since mouse can go outside of the
    // window, and we will loose it
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    textSelection.capture(e.target || e.srcElement);

    return false;
  }

  function onMouseMove(e) {
    // no need to worry about mouse events when touch is happening
    if (touchInProgress) return;

    triggerPanStart();

    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    var dx = point.x - mouseX;
    var dy = point.y - mouseY;

    mouseX = point.x;
    mouseY = point.y;

    internalMoveBy(dx, dy);
  }

  function onMouseUp() {
    textSelection.release();
    triggerPanEnd();
    releaseDocumentMouse();
  }

  function releaseDocumentMouse() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    panstartFired = false;
  }

  function releaseTouches() {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchcancel', handleTouchEnd);
    panstartFired = false;
    multiTouch = false;
    touchInProgress = false;
  }

  function onMouseWheel(e) {
    // if client does not want to handle this event - just ignore the call
    if (beforeWheel(e)) return;

    smoothScroll.cancel();

    var delta = e.deltaY;
    if (e.deltaMode > 0) delta *= 100;

    var scaleMultiplier = getScaleMultiplier(delta);

    if (scaleMultiplier !== 1) {
      var offset = transformOrigin
        ? getTransformOriginOffset()
        : getOffsetXY(e);
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
      e.preventDefault();
    }
  }

  function getOffsetXY(e) {
    var offsetX, offsetY;
    // I tried using e.offsetX, but that gives wrong results for svg, when user clicks on a path.
    var ownerRect = owner.getBoundingClientRect();
    offsetX = e.clientX - ownerRect.left;
    offsetY = e.clientY - ownerRect.top;

    return { x: offsetX, y: offsetY };
  }

  function smoothZoom(clientX, clientY, scaleMultiplier) {
    var fromValue = transform.scale;
    var from = { scale: fromValue };
    var to = { scale: scaleMultiplier * fromValue };

    smoothScroll.cancel();
    cancelZoomAnimation();

    zoomToAnimation = animate(from, to, {
      step: function (v) {
        zoomAbs(clientX, clientY, v.scale);
      },
      done: triggerZoomEnd
    });
  }

  function smoothZoomAbs(clientX, clientY, toScaleValue) {
    var fromValue = transform.scale;
    var from = { scale: fromValue };
    var to = { scale: toScaleValue };

    smoothScroll.cancel();
    cancelZoomAnimation();

    zoomToAnimation = animate(from, to, {
      step: function (v) {
        zoomAbs(clientX, clientY, v.scale);
      }
    });
  }

  function getTransformOriginOffset() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width * transformOrigin.x,
      y: ownerRect.height * transformOrigin.y
    };
  }

  function publicZoomTo(clientX, clientY, scaleMultiplier) {
    smoothScroll.cancel();
    cancelZoomAnimation();
    return zoomByRatio(clientX, clientY, scaleMultiplier);
  }

  function cancelZoomAnimation() {
    if (zoomToAnimation) {
      zoomToAnimation.cancel();
      zoomToAnimation = null;
    }
  }

  function getScaleMultiplier(delta) {
    var sign = Math.sign(delta);
    var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
    return 1 - sign * deltaAdjustedSpeed;
  }

  function triggerPanStart() {
    if (!panstartFired) {
      triggerEvent('panstart');
      panstartFired = true;
      smoothScroll.start();
    }
  }

  function triggerPanEnd() {
    if (panstartFired) {
      // we should never run smooth scrolling if it was multiTouch (pinch zoom animation):
      if (!multiTouch) smoothScroll.stop();
      triggerEvent('panend');
    }
  }

  function triggerZoomEnd() {
    triggerEvent('zoomend');
  }

  function triggerEvent(name) {
    api.fire(name, api);
  }
}

function parseTransformOrigin(options) {
  if (!options) return;
  if (typeof options === 'object') {
    if (!isNumber(options.x) || !isNumber(options.y))
      failTransformOrigin(options);
    return options;
  }

  failTransformOrigin();
}

function failTransformOrigin(options) {
  console.error(options);
  throw new Error(
    [
      'Cannot parse transform origin.',
      'Some good examples:',
      '  "center center" can be achieved with {x: 0.5, y: 0.5}',
      '  "top center" can be achieved with {x: 0.5, y: 0}',
      '  "bottom right" can be achieved with {x: 1, y: 1}'
    ].join('\n')
  );
}

function noop() { }

function validateBounds(bounds) {
  var boundsType = typeof bounds;
  if (boundsType === 'undefined' || boundsType === 'boolean') return; // this is okay
  // otherwise need to be more thorough:
  var validBounds =
    isNumber(bounds.left) &&
    isNumber(bounds.top) &&
    isNumber(bounds.bottom) &&
    isNumber(bounds.right);

  if (!validBounds)
    throw new Error(
      'Bounds object is not valid. It can be: ' +
      'undefined, boolean (true|false) or an object {left, top, right, bottom}'
    );
}

function isNumber(x) {
  return Number.isFinite(x);
}

// IE 11 does not support isNaN:
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  return value !== value;
}

function rigidScroll() {
  return {
    start: noop,
    stop: noop,
    cancel: noop
  };
}

function autoRun() {
  if (typeof document === 'undefined') return;

  var scripts = document.getElementsByTagName('script');
  if (!scripts) return;
  var panzoomScript;

  for (var i = 0; i < scripts.length; ++i) {
    var x = scripts[i];
    if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
      panzoomScript = x;
      break;
    }
  }

  if (!panzoomScript) return;

  var query = panzoomScript.getAttribute('query');
  if (!query) return;

  var globalName = panzoomScript.getAttribute('name') || 'pz';
  var started = Date.now();

  tryAttach();

  function tryAttach() {
    var el = document.querySelector(query);
    if (!el) {
      var now = Date.now();
      var elapsed = now - started;
      if (elapsed < 2000) {
        // Let's wait a bit
        setTimeout(tryAttach, 100);
        return;
      }
      // If we don't attach within 2 seconds to the target element, consider it a failure
      console.error('Cannot find the panzoom element', globalName);
      return;
    }
    var options = collectOptions(panzoomScript);
    console.log(options);
    window[globalName] = createPanZoom(el, options);
  }

  function collectOptions(script) {
    var attrs = script.attributes;
    var options = {};
    for (var j = 0; j < attrs.length; ++j) {
      var attr = attrs[j];
      var nameValue = getPanzoomAttributeNameValue(attr);
      if (nameValue) {
        options[nameValue.name] = nameValue.value;
      }
    }

    return options;
  }

  function getPanzoomAttributeNameValue(attr) {
    if (!attr.name) return;
    var isPanZoomAttribute =
      attr.name[0] === 'p' && attr.name[1] === 'z' && attr.name[2] === '-';

    if (!isPanZoomAttribute) return;

    var name = attr.name.substr(3);
    var value = JSON.parse(attr.value);
    return { name: name, value: value };
  }
}

autoRun();
	
},{"wheel":"../../node_modules/wheel/index.js","amator":"../../node_modules/amator/index.js","ngraph.events":"../../node_modules/ngraph.events/index.js","./lib/kinetic.js":"../../node_modules/panzoom/lib/kinetic.js","./lib/createTextSelectionInterceptor.js":"../../node_modules/panzoom/lib/createTextSelectionInterceptor.js","./lib/transform.js":"../../node_modules/panzoom/lib/transform.js","./lib/svgController.js":"../../node_modules/panzoom/lib/svgController.js","./lib/domController.js":"../../node_modules/panzoom/lib/domController.js"}],"../code/systems/zoom_controls.js":[function(require,module,exports) {
var panzoom = require('panzoom');

module.exports = {
  addControls: function addControls(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var connect = function connect() {
      // by default all zoom operations will happen based on the center of the screen
      panzoom(element, Object.assign({
        transformOrigin: {
          x: 0,
          y: 0
        } // beforeWheel: function(e) {
        //     // TODO: detect when something else is being scrolled (with the virtual scroller)
        //     // allow wheel-zoom only if altKey is down. Otherwise - ignore
        //     var shouldIgnore = !e.altKey;
        //     return shouldIgnore;
        // },

      }, options));
    }; // if its on the dom just attach it


    if (element.parentElement) {
      connect(); // otherwise wait for it to get attached
    } else {
      var observer = new MutationObserver(function (mutationList, observer) {
        mutationList.forEach(function (mutation) {
          switch (mutation.type) {
            case 'childList':
              if (element.parentElement) {
                connect();
              }

              break;
          }
        });
      });
      observer.observe(element, {
        childList: true,
        attributes: true,
        subtree: true
      });
    }
  }
};
},{"panzoom":"../../node_modules/panzoom/index.js"}],"../code/skeletons/GraphDisplay.jsx":[function(require,module,exports) {
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

var _require = require("../systems/zoom_controls"),
    addControls = _require.addControls;

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
    // add the controls after too
    addControls(container.children[0]); // load all the nodes in order

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
          style: "\n                    --size: ".concat(sizeOfNodeInPixels, "px ;\n                    color: white;\n                    background-color: var(--blue);\n                    opacity: 0;\n                    position: absolute;\n                    left: ").concat(x, "px;\n                    top: ").concat(y, "px;\n                    transform: translate(-50%, -50%);\n                ")
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
},{"../systems/zoom_controls":"../code/systems/zoom_controls.js"}],"../static_files/d3.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  function n(n) {
    return n && (n.ownerDocument || n.document || n).documentElement;
  }

  function t(n) {
    return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView);
  }

  function e(n, t) {
    return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }

  function r(n) {
    return null === n ? NaN : +n;
  }

  function i(n) {
    return !isNaN(n);
  }

  function u(n) {
    return {
      left: function left(t, e, r, i) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
          var u = r + i >>> 1;
          n(t[u], e) < 0 ? r = u + 1 : i = u;
        }

        return r;
      },
      right: function right(t, e, r, i) {
        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
          var u = r + i >>> 1;
          n(t[u], e) > 0 ? i = u : r = u + 1;
        }

        return r;
      }
    };
  }

  function o(n) {
    return n.length;
  }

  function a(n) {
    for (var t = 1; n * t % 1;) {
      t *= 10;
    }

    return t;
  }

  function l(n, t) {
    for (var e in t) {
      Object.defineProperty(n.prototype, e, {
        value: t[e],
        enumerable: !1
      });
    }
  }

  function c() {
    this._ = Object.create(null);
  }

  function f(n) {
    return (n += "") === bo || n[0] === _o ? _o + n : n;
  }

  function s(n) {
    return (n += "")[0] === _o ? n.slice(1) : n;
  }

  function h(n) {
    return f(n) in this._;
  }

  function p(n) {
    return (n = f(n)) in this._ && delete this._[n];
  }

  function g() {
    var n = [];

    for (var t in this._) {
      n.push(s(t));
    }

    return n;
  }

  function v() {
    var n = 0;

    for (var t in this._) {
      ++n;
    }

    return n;
  }

  function d() {
    for (var n in this._) {
      return !1;
    }

    return !0;
  }

  function y() {
    this._ = Object.create(null);
  }

  function m(n) {
    return n;
  }

  function M(n, t, e) {
    return function () {
      var r = e.apply(t, arguments);
      return r === t ? n : r;
    };
  }

  function x(n, t) {
    if (t in n) return t;
    t = t.charAt(0).toUpperCase() + t.slice(1);

    for (var e = 0, r = wo.length; r > e; ++e) {
      var i = wo[e] + t;
      if (i in n) return i;
    }
  }

  function b() {}

  function _() {}

  function w(n) {
    function t() {
      for (var t, r = e, i = -1, u = r.length; ++i < u;) {
        (t = r[i].on) && t.apply(this, arguments);
      }

      return n;
    }

    var e = [],
        r = new c();
    return t.on = function (t, i) {
      var u,
          o = r.get(t);
      return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, u = e.indexOf(o)).concat(e.slice(u + 1)), r.remove(t)), i && e.push(r.set(t, {
        on: i
      })), n);
    }, t;
  }

  function S() {
    ao.event.preventDefault();
  }

  function k() {
    for (var n, t = ao.event; n = t.sourceEvent;) {
      t = n;
    }

    return t;
  }

  function N(n) {
    for (var t = new _(), e = 0, r = arguments.length; ++e < r;) {
      t[arguments[e]] = w(t);
    }

    return t.of = function (e, r) {
      return function (i) {
        try {
          var u = i.sourceEvent = ao.event;
          i.target = n, ao.event = i, t[i.type].apply(e, r);
        } finally {
          ao.event = u;
        }
      };
    }, t;
  }

  function E(n) {
    return ko(n, Co), n;
  }

  function A(n) {
    return "function" == typeof n ? n : function () {
      return No(n, this);
    };
  }

  function C(n) {
    return "function" == typeof n ? n : function () {
      return Eo(n, this);
    };
  }

  function z(n, t) {
    function e() {
      this.removeAttribute(n);
    }

    function r() {
      this.removeAttributeNS(n.space, n.local);
    }

    function i() {
      this.setAttribute(n, t);
    }

    function u() {
      this.setAttributeNS(n.space, n.local, t);
    }

    function o() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    }

    function a() {
      var e = t.apply(this, arguments);
      null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    }

    return n = ao.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? u : i;
  }

  function L(n) {
    return n.trim().replace(/\s+/g, " ");
  }

  function q(n) {
    return new RegExp("(?:^|\\s+)" + ao.requote(n) + "(?:\\s+|$)", "g");
  }

  function T(n) {
    return (n + "").trim().split(/^|\s+/);
  }

  function R(n, t) {
    function e() {
      for (var e = -1; ++e < i;) {
        n[e](this, t);
      }
    }

    function r() {
      for (var e = -1, r = t.apply(this, arguments); ++e < i;) {
        n[e](this, r);
      }
    }

    n = T(n).map(D);
    var i = n.length;
    return "function" == typeof t ? r : e;
  }

  function D(n) {
    var t = q(n);
    return function (e, r) {
      if (i = e.classList) return r ? i.add(n) : i.remove(n);
      var i = e.getAttribute("class") || "";
      r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", L(i + " " + n))) : e.setAttribute("class", L(i.replace(t, " ")));
    };
  }

  function P(n, t, e) {
    function r() {
      this.style.removeProperty(n);
    }

    function i() {
      this.style.setProperty(n, t, e);
    }

    function u() {
      var r = t.apply(this, arguments);
      null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    }

    return null == t ? r : "function" == typeof t ? u : i;
  }

  function U(n, t) {
    function e() {
      delete this[n];
    }

    function r() {
      this[n] = t;
    }

    function i() {
      var e = t.apply(this, arguments);
      null == e ? delete this[n] : this[n] = e;
    }

    return null == t ? e : "function" == typeof t ? i : r;
  }

  function j(n) {
    function t() {
      var t = this.ownerDocument,
          e = this.namespaceURI;
      return e === zo && t.documentElement.namespaceURI === zo ? t.createElement(n) : t.createElementNS(e, n);
    }

    function e() {
      return this.ownerDocument.createElementNS(n.space, n.local);
    }

    return "function" == typeof n ? n : (n = ao.ns.qualify(n)).local ? e : t;
  }

  function F() {
    var n = this.parentNode;
    n && n.removeChild(this);
  }

  function H(n) {
    return {
      __data__: n
    };
  }

  function O(n) {
    return function () {
      return _Ao(this, n);
    };
  }

  function I(n) {
    return arguments.length || (n = e), function (t, e) {
      return t && e ? n(t.__data__, e.__data__) : !t - !e;
    };
  }

  function Y(n, t) {
    for (var e = 0, r = n.length; r > e; e++) {
      for (var i, u = n[e], o = 0, a = u.length; a > o; o++) {
        (i = u[o]) && t(i, o, e);
      }
    }

    return n;
  }

  function Z(n) {
    return ko(n, qo), n;
  }

  function V(n) {
    var t, e;
    return function (r, i, u) {
      var o,
          a = n[u].update,
          l = a.length;

      for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(o = a[t]) && ++t < l;) {
        ;
      }

      return o;
    };
  }

  function X(n, t, e) {
    function r() {
      var t = this[o];
      t && (this.removeEventListener(n, t, t.$), delete this[o]);
    }

    function i() {
      var i = l(t, co(arguments));
      r.call(this), this.addEventListener(n, this[o] = i, i.$ = e), i._ = t;
    }

    function u() {
      var t,
          e = new RegExp("^__on([^.]+)" + ao.requote(n) + "$");

      for (var r in this) {
        if (t = r.match(e)) {
          var i = this[r];
          this.removeEventListener(t[1], i, i.$), delete this[r];
        }
      }
    }

    var o = "__on" + n,
        a = n.indexOf("."),
        l = $;
    a > 0 && (n = n.slice(0, a));
    var c = To.get(n);
    return c && (n = c, l = B), a ? t ? i : r : t ? b : u;
  }

  function $(n, t) {
    return function (e) {
      var r = ao.event;
      ao.event = e, t[0] = this.__data__;

      try {
        n.apply(this, t);
      } finally {
        ao.event = r;
      }
    };
  }

  function B(n, t) {
    var e = $(n, t);
    return function (n) {
      var t = this,
          r = n.relatedTarget;
      r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n);
    };
  }

  function W(e) {
    var r = ".dragsuppress-" + ++Do,
        i = "click" + r,
        u = ao.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S);

    if (null == Ro && (Ro = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ro) {
      var o = n(e).style,
          a = o[Ro];
      o[Ro] = "none";
    }

    return function (n) {
      if (u.on(r, null), Ro && (o[Ro] = a), n) {
        var t = function t() {
          u.on(i, null);
        };

        u.on(i, function () {
          S(), t();
        }, !0), setTimeout(t, 0);
      }
    };
  }

  function J(n, e) {
    e.changedTouches && (e = e.changedTouches[0]);
    var r = n.ownerSVGElement || n;

    if (r.createSVGPoint) {
      var i = r.createSVGPoint();

      if (0 > Po) {
        var u = t(n);

        if (u.scrollX || u.scrollY) {
          r = ao.select("body").append("svg").style({
            position: "absolute",
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            border: "none"
          }, "important");
          var o = r[0][0].getScreenCTM();
          Po = !(o.f || o.e), r.remove();
        }
      }

      return Po ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y];
    }

    var a = n.getBoundingClientRect();
    return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop];
  }

  function G() {
    return ao.event.changedTouches[0].identifier;
  }

  function K(n) {
    return n > 0 ? 1 : 0 > n ? -1 : 0;
  }

  function Q(n, t, e) {
    return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]);
  }

  function nn(n) {
    return n > 1 ? 0 : -1 > n ? Fo : Math.acos(n);
  }

  function tn(n) {
    return n > 1 ? Io : -1 > n ? -Io : Math.asin(n);
  }

  function en(n) {
    return ((n = Math.exp(n)) - 1 / n) / 2;
  }

  function rn(n) {
    return ((n = Math.exp(n)) + 1 / n) / 2;
  }

  function un(n) {
    return ((n = Math.exp(2 * n)) - 1) / (n + 1);
  }

  function on(n) {
    return (n = Math.sin(n / 2)) * n;
  }

  function an() {}

  function ln(n, t, e) {
    return this instanceof ln ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof ln ? new ln(n.h, n.s, n.l) : _n("" + n, wn, ln) : new ln(n, t, e);
  }

  function cn(n, t, e) {
    function r(n) {
      return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? u + (o - u) * n / 60 : 180 > n ? o : 240 > n ? u + (o - u) * (240 - n) / 60 : u;
    }

    function i(n) {
      return Math.round(255 * r(n));
    }

    var u, o;
    return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, u = 2 * e - o, new mn(i(n + 120), i(n), i(n - 120));
  }

  function fn(n, t, e) {
    return this instanceof fn ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof fn ? new fn(n.h, n.c, n.l) : n instanceof hn ? gn(n.l, n.a, n.b) : gn((n = Sn((n = ao.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new fn(n, t, e);
  }

  function sn(n, t, e) {
    return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new hn(e, Math.cos(n *= Yo) * t, Math.sin(n) * t);
  }

  function hn(n, t, e) {
    return this instanceof hn ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof hn ? new hn(n.l, n.a, n.b) : n instanceof fn ? sn(n.h, n.c, n.l) : Sn((n = mn(n)).r, n.g, n.b) : new hn(n, t, e);
  }

  function pn(n, t, e) {
    var r = (n + 16) / 116,
        i = r + t / 500,
        u = r - e / 200;
    return i = vn(i) * na, r = vn(r) * ta, u = vn(u) * ea, new mn(yn(3.2404542 * i - 1.5371385 * r - .4985314 * u), yn(-.969266 * i + 1.8760108 * r + .041556 * u), yn(.0556434 * i - .2040259 * r + 1.0572252 * u));
  }

  function gn(n, t, e) {
    return n > 0 ? new fn(Math.atan2(e, t) * Zo, Math.sqrt(t * t + e * e), n) : new fn(NaN, NaN, n);
  }

  function vn(n) {
    return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037;
  }

  function dn(n) {
    return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29;
  }

  function yn(n) {
    return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055));
  }

  function mn(n, t, e) {
    return this instanceof mn ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof mn ? new mn(n.r, n.g, n.b) : _n("" + n, mn, cn) : new mn(n, t, e);
  }

  function Mn(n) {
    return new mn(n >> 16, n >> 8 & 255, 255 & n);
  }

  function xn(n) {
    return Mn(n) + "";
  }

  function bn(n) {
    return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16);
  }

  function _n(n, t, e) {
    var r,
        i,
        u,
        o = 0,
        a = 0,
        l = 0;
    if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase())) switch (i = r[2].split(","), r[1]) {
      case "hsl":
        return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);

      case "rgb":
        return t(Nn(i[0]), Nn(i[1]), Nn(i[2]));
    }
    return (u = ua.get(n)) ? t(u.r, u.g, u.b) : (null == n || "#" !== n.charAt(0) || isNaN(u = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & u) >> 4, o = o >> 4 | o, a = 240 & u, a = a >> 4 | a, l = 15 & u, l = l << 4 | l) : 7 === n.length && (o = (16711680 & u) >> 16, a = (65280 & u) >> 8, l = 255 & u)), t(o, a, l));
  }

  function wn(n, t, e) {
    var r,
        i,
        u = Math.min(n /= 255, t /= 255, e /= 255),
        o = Math.max(n, t, e),
        a = o - u,
        l = (o + u) / 2;
    return a ? (i = .5 > l ? a / (o + u) : a / (2 - o - u), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = l > 0 && 1 > l ? 0 : r), new ln(r, i, l);
  }

  function Sn(n, t, e) {
    n = kn(n), t = kn(t), e = kn(e);
    var r = dn((.4124564 * n + .3575761 * t + .1804375 * e) / na),
        i = dn((.2126729 * n + .7151522 * t + .072175 * e) / ta),
        u = dn((.0193339 * n + .119192 * t + .9503041 * e) / ea);
    return hn(116 * i - 16, 500 * (r - i), 200 * (i - u));
  }

  function kn(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
  }

  function Nn(n) {
    var t = parseFloat(n);
    return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t;
  }

  function En(n) {
    return "function" == typeof n ? n : function () {
      return n;
    };
  }

  function An(n) {
    return function (t, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Cn(t, e, n, r);
    };
  }

  function Cn(n, t, e, r) {
    function i() {
      var n,
          t = l.status;

      if (!t && Ln(l) || t >= 200 && 300 > t || 304 === t) {
        try {
          n = e.call(u, l);
        } catch (r) {
          return void o.error.call(u, r);
        }

        o.load.call(u, n);
      } else o.error.call(u, l);
    }

    var u = {},
        o = ao.dispatch("beforesend", "progress", "load", "error"),
        a = {},
        l = new XMLHttpRequest(),
        c = null;
    return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(n) || (l = new XDomainRequest()), "onload" in l ? l.onload = l.onerror = i : l.onreadystatechange = function () {
      l.readyState > 3 && i();
    }, l.onprogress = function (n) {
      var t = ao.event;
      ao.event = n;

      try {
        o.progress.call(u, l);
      } finally {
        ao.event = t;
      }
    }, u.header = function (n, t) {
      return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", u);
    }, u.mimeType = function (n) {
      return arguments.length ? (t = null == n ? null : n + "", u) : t;
    }, u.responseType = function (n) {
      return arguments.length ? (c = n, u) : c;
    }, u.response = function (n) {
      return e = n, u;
    }, ["get", "post"].forEach(function (n) {
      u[n] = function () {
        return u.send.apply(u, [n].concat(co(arguments)));
      };
    }), u.send = function (e, r, i) {
      if (2 === arguments.length && "function" == typeof r && (i = r, r = null), l.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), l.setRequestHeader) for (var f in a) {
        l.setRequestHeader(f, a[f]);
      }
      return null != t && l.overrideMimeType && l.overrideMimeType(t), null != c && (l.responseType = c), null != i && u.on("error", i).on("load", function (n) {
        i(null, n);
      }), o.beforesend.call(u, l), l.send(null == r ? null : r), u;
    }, u.abort = function () {
      return l.abort(), u;
    }, ao.rebind(u, o, "on"), null == r ? u : u.get(zn(r));
  }

  function zn(n) {
    return 1 === n.length ? function (t, e) {
      n(null == t ? e : null);
    } : n;
  }

  function Ln(n) {
    var t = n.responseType;
    return t && "text" !== t ? n.response : n.responseText;
  }

  function qn(n, t, e) {
    var r = arguments.length;
    2 > r && (t = 0), 3 > r && (e = Date.now());
    var i = e + t,
        u = {
      c: n,
      t: i,
      n: null
    };
    return aa ? aa.n = u : oa = u, aa = u, la || (ca = clearTimeout(ca), la = 1, fa(Tn)), u;
  }

  function Tn() {
    var n = Rn(),
        t = Dn() - n;
    t > 24 ? (isFinite(t) && (clearTimeout(ca), ca = setTimeout(Tn, t)), la = 0) : (la = 1, fa(Tn));
  }

  function Rn() {
    for (var n = Date.now(), t = oa; t;) {
      n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n;
    }

    return n;
  }

  function Dn() {
    for (var n, t = oa, e = 1 / 0; t;) {
      t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : oa = t.n;
    }

    return aa = n, e;
  }

  function Pn(n, t) {
    return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1);
  }

  function Un(n, t) {
    var e = Math.pow(10, 3 * xo(8 - t));
    return {
      scale: t > 8 ? function (n) {
        return n / e;
      } : function (n) {
        return n * e;
      },
      symbol: n
    };
  }

  function jn(n) {
    var t = n.decimal,
        e = n.thousands,
        r = n.grouping,
        i = n.currency,
        u = r && e ? function (n, t) {
      for (var i = n.length, u = [], o = 0, a = r[0], l = 0; i > 0 && a > 0 && (l + a + 1 > t && (a = Math.max(1, t - l)), u.push(n.substring(i -= a, i + a)), !((l += a + 1) > t));) {
        a = r[o = (o + 1) % r.length];
      }

      return u.reverse().join(e);
    } : m;
    return function (n) {
      var e = ha.exec(n),
          r = e[1] || " ",
          o = e[2] || ">",
          a = e[3] || "-",
          l = e[4] || "",
          c = e[5],
          f = +e[6],
          s = e[7],
          h = e[8],
          p = e[9],
          g = 1,
          v = "",
          d = "",
          y = !1,
          m = !0;

      switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === o) && (c = r = "0", o = "="), p) {
        case "n":
          s = !0, p = "g";
          break;

        case "%":
          g = 100, d = "%", p = "f";
          break;

        case "p":
          g = 100, d = "%", p = "r";
          break;

        case "b":
        case "o":
        case "x":
        case "X":
          "#" === l && (v = "0" + p.toLowerCase());

        case "c":
          m = !1;

        case "d":
          y = !0, h = 0;
          break;

        case "s":
          g = -1, p = "r";
      }

      "$" === l && (v = i[0], d = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = pa.get(p) || Fn;
      var M = c && s;
      return function (n) {
        var e = d;
        if (y && n % 1) return "";
        var i = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a;

        if (0 > g) {
          var l = ao.formatPrefix(n, h);
          n = l.scale(n), e = l.symbol + d;
        } else n *= g;

        n = p(n, h);

        var x,
            b,
            _ = n.lastIndexOf(".");

        if (0 > _) {
          var w = m ? n.lastIndexOf("e") : -1;
          0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w));
        } else x = n.substring(0, _), b = t + n.substring(_ + 1);

        !c && s && (x = u(x, 1 / 0));
        var S = v.length + x.length + b.length + (M ? 0 : i.length),
            k = f > S ? new Array(S = f - S + 1).join(r) : "";
        return M && (x = u(k + x, k.length ? f - b.length : 1 / 0)), i += v, n = x + b, ("<" === o ? i + n + k : ">" === o ? k + i + n : "^" === o ? k.substring(0, S >>= 1) + i + n + k.substring(S) : i + (M ? n : k + n)) + e;
      };
    };
  }

  function Fn(n) {
    return n + "";
  }

  function Hn() {
    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
  }

  function On(n, t, e) {
    function r(t) {
      var e = n(t),
          r = u(e, 1);
      return r - t > t - e ? e : r;
    }

    function i(e) {
      return t(e = n(new va(e - 1)), 1), e;
    }

    function u(n, e) {
      return t(n = new va(+n), e), n;
    }

    function o(n, r, u) {
      var o = i(n),
          a = [];
      if (u > 1) for (; r > o;) {
        e(o) % u || a.push(new Date(+o)), t(o, 1);
      } else for (; r > o;) {
        a.push(new Date(+o)), t(o, 1);
      }
      return a;
    }

    function a(n, t, e) {
      try {
        va = Hn;
        var r = new Hn();
        return r._ = n, o(r, t, e);
      } finally {
        va = Date;
      }
    }

    n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = o;
    var l = n.utc = In(n);
    return l.floor = l, l.round = In(r), l.ceil = In(i), l.offset = In(u), l.range = a, n;
  }

  function In(n) {
    return function (t, e) {
      try {
        va = Hn;
        var r = new Hn();
        return r._ = t, n(r, e)._;
      } finally {
        va = Date;
      }
    };
  }

  function Yn(n) {
    function t(n) {
      function t(t) {
        for (var e, i, u, o = [], a = -1, l = 0; ++a < r;) {
          37 === n.charCodeAt(a) && (o.push(n.slice(l, a)), null != (i = ya[e = n.charAt(++a)]) && (e = n.charAt(++a)), (u = A[e]) && (e = u(t, null == i ? "e" === e ? " " : "0" : i)), o.push(e), l = a + 1);
        }

        return o.push(n.slice(l, a)), o.join("");
      }

      var r = n.length;
      return t.parse = function (t) {
        var r = {
          y: 1900,
          m: 0,
          d: 1,
          H: 0,
          M: 0,
          S: 0,
          L: 0,
          Z: null
        },
            i = e(r, n, t, 0);
        if (i != t.length) return null;
        "p" in r && (r.H = r.H % 12 + 12 * r.p);
        var u = null != r.Z && va !== Hn,
            o = new (u ? Hn : va)();
        return "j" in r ? o.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), u ? o._ : o;
      }, t.toString = function () {
        return n;
      }, t;
    }

    function e(n, t, e, r) {
      for (var i, u, o, a = 0, l = t.length, c = e.length; l > a;) {
        if (r >= c) return -1;

        if (i = t.charCodeAt(a++), 37 === i) {
          if (o = t.charAt(a++), u = C[o in ya ? t.charAt(a++) : o], !u || (r = u(n, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }

      return r;
    }

    function r(n, t, e) {
      _.lastIndex = 0;

      var r = _.exec(t.slice(e));

      return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }

    function i(n, t, e) {
      x.lastIndex = 0;
      var r = x.exec(t.slice(e));
      return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }

    function u(n, t, e) {
      N.lastIndex = 0;
      var r = N.exec(t.slice(e));
      return r ? (n.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }

    function o(n, t, e) {
      S.lastIndex = 0;
      var r = S.exec(t.slice(e));
      return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1;
    }

    function a(n, t, r) {
      return e(n, A.c.toString(), t, r);
    }

    function l(n, t, r) {
      return e(n, A.x.toString(), t, r);
    }

    function c(n, t, r) {
      return e(n, A.X.toString(), t, r);
    }

    function f(n, t, e) {
      var r = M.get(t.slice(e, e += 2).toLowerCase());
      return null == r ? -1 : (n.p = r, e);
    }

    var s = n.dateTime,
        h = n.date,
        p = n.time,
        g = n.periods,
        v = n.days,
        d = n.shortDays,
        y = n.months,
        m = n.shortMonths;
    t.utc = function (n) {
      function e(n) {
        try {
          va = Hn;
          var t = new va();
          return t._ = n, r(t);
        } finally {
          va = Date;
        }
      }

      var r = t(n);
      return e.parse = function (n) {
        try {
          va = Hn;
          var t = r.parse(n);
          return t && t._;
        } finally {
          va = Date;
        }
      }, e.toString = r.toString, e;
    }, t.multi = t.utc.multi = ct;

    var M = ao.map(),
        x = Vn(v),
        b = Xn(v),
        _ = Vn(d),
        w = Xn(d),
        S = Vn(y),
        k = Xn(y),
        N = Vn(m),
        E = Xn(m);

    g.forEach(function (n, t) {
      M.set(n.toLowerCase(), t);
    });
    var A = {
      a: function a(n) {
        return d[n.getDay()];
      },
      A: function A(n) {
        return v[n.getDay()];
      },
      b: function b(n) {
        return m[n.getMonth()];
      },
      B: function B(n) {
        return y[n.getMonth()];
      },
      c: t(s),
      d: function d(n, t) {
        return Zn(n.getDate(), t, 2);
      },
      e: function e(n, t) {
        return Zn(n.getDate(), t, 2);
      },
      H: function H(n, t) {
        return Zn(n.getHours(), t, 2);
      },
      I: function I(n, t) {
        return Zn(n.getHours() % 12 || 12, t, 2);
      },
      j: function j(n, t) {
        return Zn(1 + ga.dayOfYear(n), t, 3);
      },
      L: function L(n, t) {
        return Zn(n.getMilliseconds(), t, 3);
      },
      m: function m(n, t) {
        return Zn(n.getMonth() + 1, t, 2);
      },
      M: function M(n, t) {
        return Zn(n.getMinutes(), t, 2);
      },
      p: function p(n) {
        return g[+(n.getHours() >= 12)];
      },
      S: function S(n, t) {
        return Zn(n.getSeconds(), t, 2);
      },
      U: function U(n, t) {
        return Zn(ga.sundayOfYear(n), t, 2);
      },
      w: function w(n) {
        return n.getDay();
      },
      W: function W(n, t) {
        return Zn(ga.mondayOfYear(n), t, 2);
      },
      x: t(h),
      X: t(p),
      y: function y(n, t) {
        return Zn(n.getFullYear() % 100, t, 2);
      },
      Y: function Y(n, t) {
        return Zn(n.getFullYear() % 1e4, t, 4);
      },
      Z: at,
      "%": function _() {
        return "%";
      }
    },
        C = {
      a: r,
      A: i,
      b: u,
      B: o,
      c: a,
      d: tt,
      e: tt,
      H: rt,
      I: rt,
      j: et,
      L: ot,
      m: nt,
      M: it,
      p: f,
      S: ut,
      U: Bn,
      w: $n,
      W: Wn,
      x: l,
      X: c,
      y: Gn,
      Y: Jn,
      Z: Kn,
      "%": lt
    };
    return t;
  }

  function Zn(n, t, e) {
    var r = 0 > n ? "-" : "",
        i = (r ? -n : n) + "",
        u = i.length;
    return r + (e > u ? new Array(e - u + 1).join(t) + i : i);
  }

  function Vn(n) {
    return new RegExp("^(?:" + n.map(ao.requote).join("|") + ")", "i");
  }

  function Xn(n) {
    for (var t = new c(), e = -1, r = n.length; ++e < r;) {
      t.set(n[e].toLowerCase(), e);
    }

    return t;
  }

  function $n(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 1));
    return r ? (n.w = +r[0], e + r[0].length) : -1;
  }

  function Bn(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e));
    return r ? (n.U = +r[0], e + r[0].length) : -1;
  }

  function Wn(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e));
    return r ? (n.W = +r[0], e + r[0].length) : -1;
  }

  function Jn(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 4));
    return r ? (n.y = +r[0], e + r[0].length) : -1;
  }

  function Gn(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.y = Qn(+r[0]), e + r[0].length) : -1;
  }

  function Kn(n, t, e) {
    return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1;
  }

  function Qn(n) {
    return n + (n > 68 ? 1900 : 2e3);
  }

  function nt(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
  }

  function tt(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.d = +r[0], e + r[0].length) : -1;
  }

  function et(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 3));
    return r ? (n.j = +r[0], e + r[0].length) : -1;
  }

  function rt(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.H = +r[0], e + r[0].length) : -1;
  }

  function it(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.M = +r[0], e + r[0].length) : -1;
  }

  function ut(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 2));
    return r ? (n.S = +r[0], e + r[0].length) : -1;
  }

  function ot(n, t, e) {
    ma.lastIndex = 0;
    var r = ma.exec(t.slice(e, e + 3));
    return r ? (n.L = +r[0], e + r[0].length) : -1;
  }

  function at(n) {
    var t = n.getTimezoneOffset(),
        e = t > 0 ? "-" : "+",
        r = xo(t) / 60 | 0,
        i = xo(t) % 60;
    return e + Zn(r, "0", 2) + Zn(i, "0", 2);
  }

  function lt(n, t, e) {
    Ma.lastIndex = 0;
    var r = Ma.exec(t.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }

  function ct(n) {
    for (var t = n.length, e = -1; ++e < t;) {
      n[e][0] = this(n[e][0]);
    }

    return function (t) {
      for (var e = 0, r = n[e]; !r[1](t);) {
        r = n[++e];
      }

      return r[0](t);
    };
  }

  function ft() {}

  function st(n, t, e) {
    var r = e.s = n + t,
        i = r - n,
        u = r - i;
    e.t = n - u + (t - i);
  }

  function ht(n, t) {
    n && wa.hasOwnProperty(n.type) && wa[n.type](n, t);
  }

  function pt(n, t, e) {
    var r,
        i = -1,
        u = n.length - e;

    for (t.lineStart(); ++i < u;) {
      r = n[i], t.point(r[0], r[1], r[2]);
    }

    t.lineEnd();
  }

  function gt(n, t) {
    var e = -1,
        r = n.length;

    for (t.polygonStart(); ++e < r;) {
      pt(n[e], t, 1);
    }

    t.polygonEnd();
  }

  function vt() {
    function n(n, t) {
      n *= Yo, t = t * Yo / 2 + Fo / 4;
      var e = n - r,
          o = e >= 0 ? 1 : -1,
          a = o * e,
          l = Math.cos(t),
          c = Math.sin(t),
          f = u * c,
          s = i * l + f * Math.cos(a),
          h = f * o * Math.sin(a);
      ka.add(Math.atan2(h, s)), r = n, i = l, u = c;
    }

    var t, e, r, i, u;
    Na.point = function (o, a) {
      Na.point = n, r = (t = o) * Yo, i = Math.cos(a = (e = a) * Yo / 2 + Fo / 4), u = Math.sin(a);
    }, Na.lineEnd = function () {
      n(t, e);
    };
  }

  function dt(n) {
    var t = n[0],
        e = n[1],
        r = Math.cos(e);
    return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)];
  }

  function yt(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
  }

  function mt(n, t) {
    return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
  }

  function Mt(n, t) {
    n[0] += t[0], n[1] += t[1], n[2] += t[2];
  }

  function xt(n, t) {
    return [n[0] * t, n[1] * t, n[2] * t];
  }

  function bt(n) {
    var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
    n[0] /= t, n[1] /= t, n[2] /= t;
  }

  function _t(n) {
    return [Math.atan2(n[1], n[0]), tn(n[2])];
  }

  function wt(n, t) {
    return xo(n[0] - t[0]) < Uo && xo(n[1] - t[1]) < Uo;
  }

  function St(n, t) {
    n *= Yo;
    var e = Math.cos(t *= Yo);
    kt(e * Math.cos(n), e * Math.sin(n), Math.sin(t));
  }

  function kt(n, t, e) {
    ++Ea, Ca += (n - Ca) / Ea, za += (t - za) / Ea, La += (e - La) / Ea;
  }

  function Nt() {
    function n(n, i) {
      n *= Yo;
      var u = Math.cos(i *= Yo),
          o = u * Math.cos(n),
          a = u * Math.sin(n),
          l = Math.sin(i),
          c = Math.atan2(Math.sqrt((c = e * l - r * a) * c + (c = r * o - t * l) * c + (c = t * a - e * o) * c), t * o + e * a + r * l);
      Aa += c, qa += c * (t + (t = o)), Ta += c * (e + (e = a)), Ra += c * (r + (r = l)), kt(t, e, r);
    }

    var t, e, r;

    ja.point = function (i, u) {
      i *= Yo;
      var o = Math.cos(u *= Yo);
      t = o * Math.cos(i), e = o * Math.sin(i), r = Math.sin(u), ja.point = n, kt(t, e, r);
    };
  }

  function Et() {
    ja.point = St;
  }

  function At() {
    function n(n, t) {
      n *= Yo;
      var e = Math.cos(t *= Yo),
          o = e * Math.cos(n),
          a = e * Math.sin(n),
          l = Math.sin(t),
          c = i * l - u * a,
          f = u * o - r * l,
          s = r * a - i * o,
          h = Math.sqrt(c * c + f * f + s * s),
          p = r * o + i * a + u * l,
          g = h && -nn(p) / h,
          v = Math.atan2(h, p);
      Da += g * c, Pa += g * f, Ua += g * s, Aa += v, qa += v * (r + (r = o)), Ta += v * (i + (i = a)), Ra += v * (u + (u = l)), kt(r, i, u);
    }

    var t, e, r, i, u;
    ja.point = function (o, a) {
      t = o, e = a, ja.point = n, o *= Yo;
      var l = Math.cos(a *= Yo);
      r = l * Math.cos(o), i = l * Math.sin(o), u = Math.sin(a), kt(r, i, u);
    }, ja.lineEnd = function () {
      n(t, e), ja.lineEnd = Et, ja.point = St;
    };
  }

  function Ct(n, t) {
    function e(e, r) {
      return e = n(e, r), t(e[0], e[1]);
    }

    return n.invert && t.invert && (e.invert = function (e, r) {
      return e = t.invert(e, r), e && n.invert(e[0], e[1]);
    }), e;
  }

  function zt() {
    return !0;
  }

  function Lt(n, t, e, r, i) {
    var u = [],
        o = [];

    if (n.forEach(function (n) {
      if (!((t = n.length - 1) <= 0)) {
        var t,
            e = n[0],
            r = n[t];

        if (wt(e, r)) {
          i.lineStart();

          for (var a = 0; t > a; ++a) {
            i.point((e = n[a])[0], e[1]);
          }

          return void i.lineEnd();
        }

        var l = new Tt(e, n, null, !0),
            c = new Tt(e, null, l, !1);
        l.o = c, u.push(l), o.push(c), l = new Tt(r, n, null, !1), c = new Tt(r, null, l, !0), l.o = c, u.push(l), o.push(c);
      }
    }), o.sort(t), qt(u), qt(o), u.length) {
      for (var a = 0, l = e, c = o.length; c > a; ++a) {
        o[a].e = l = !l;
      }

      for (var f, s, h = u[0];;) {
        for (var p = h, g = !0; p.v;) {
          if ((p = p.n) === h) return;
        }

        f = p.z, i.lineStart();

        do {
          if (p.v = p.o.v = !0, p.e) {
            if (g) for (var a = 0, c = f.length; c > a; ++a) {
              i.point((s = f[a])[0], s[1]);
            } else r(p.x, p.n.x, 1, i);
            p = p.n;
          } else {
            if (g) {
              f = p.p.z;

              for (var a = f.length - 1; a >= 0; --a) {
                i.point((s = f[a])[0], s[1]);
              }
            } else r(p.x, p.p.x, -1, i);

            p = p.p;
          }

          p = p.o, f = p.z, g = !g;
        } while (!p.v);

        i.lineEnd();
      }
    }
  }

  function qt(n) {
    if (t = n.length) {
      for (var t, e, r = 0, i = n[0]; ++r < t;) {
        i.n = e = n[r], e.p = i, i = e;
      }

      i.n = e = n[0], e.p = i;
    }
  }

  function Tt(n, t, e, r) {
    this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }

  function Rt(n, t, e, r) {
    return function (i, u) {
      function o(t, e) {
        var r = i(t, e);
        n(t = r[0], e = r[1]) && u.point(t, e);
      }

      function a(n, t) {
        var e = i(n, t);
        d.point(e[0], e[1]);
      }

      function l() {
        m.point = a, d.lineStart();
      }

      function c() {
        m.point = o, d.lineEnd();
      }

      function f(n, t) {
        v.push([n, t]);
        var e = i(n, t);
        x.point(e[0], e[1]);
      }

      function s() {
        x.lineStart(), v = [];
      }

      function h() {
        f(v[0][0], v[0][1]), x.lineEnd();
        var n,
            t = x.clean(),
            e = M.buffer(),
            r = e.length;
        if (v.pop(), g.push(v), v = null, r) if (1 & t) {
          n = e[0];
          var i,
              r = n.length - 1,
              o = -1;

          if (r > 0) {
            for (b || (u.polygonStart(), b = !0), u.lineStart(); ++o < r;) {
              u.point((i = n[o])[0], i[1]);
            }

            u.lineEnd();
          }
        } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), p.push(e.filter(Dt));
      }

      var p,
          g,
          v,
          d = t(u),
          y = i.invert(r[0], r[1]),
          m = {
        point: o,
        lineStart: l,
        lineEnd: c,
        polygonStart: function polygonStart() {
          m.point = f, m.lineStart = s, m.lineEnd = h, p = [], g = [];
        },
        polygonEnd: function polygonEnd() {
          m.point = o, m.lineStart = l, m.lineEnd = c, p = ao.merge(p);
          var n = Ot(y, g);
          p.length ? (b || (u.polygonStart(), b = !0), Lt(p, Ut, n, e, u)) : n && (b || (u.polygonStart(), b = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), b && (u.polygonEnd(), b = !1), p = g = null;
        },
        sphere: function sphere() {
          u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd();
        }
      },
          M = Pt(),
          x = t(M),
          b = !1;
      return m;
    };
  }

  function Dt(n) {
    return n.length > 1;
  }

  function Pt() {
    var n,
        t = [];
    return {
      lineStart: function lineStart() {
        t.push(n = []);
      },
      point: function point(t, e) {
        n.push([t, e]);
      },
      lineEnd: b,
      buffer: function buffer() {
        var e = t;
        return t = [], n = null, e;
      },
      rejoin: function rejoin() {
        t.length > 1 && t.push(t.pop().concat(t.shift()));
      }
    };
  }

  function Ut(n, t) {
    return ((n = n.x)[0] < 0 ? n[1] - Io - Uo : Io - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Io - Uo : Io - t[1]);
  }

  function jt(n) {
    var t,
        e = NaN,
        r = NaN,
        i = NaN;
    return {
      lineStart: function lineStart() {
        n.lineStart(), t = 1;
      },
      point: function point(u, o) {
        var a = u > 0 ? Fo : -Fo,
            l = xo(u - e);
        xo(l - Fo) < Uo ? (n.point(e, r = (r + o) / 2 > 0 ? Io : -Io), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(u, r), t = 0) : i !== a && l >= Fo && (xo(e - i) < Uo && (e -= i * Uo), xo(u - a) < Uo && (u -= a * Uo), r = Ft(e, r, u, o), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = u, r = o), i = a;
      },
      lineEnd: function lineEnd() {
        n.lineEnd(), e = r = NaN;
      },
      clean: function clean() {
        return 2 - t;
      }
    };
  }

  function Ft(n, t, e, r) {
    var i,
        u,
        o = Math.sin(n - e);
    return xo(o) > Uo ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * o)) : (t + r) / 2;
  }

  function Ht(n, t, e, r) {
    var i;
    if (null == n) i = e * Io, r.point(-Fo, i), r.point(0, i), r.point(Fo, i), r.point(Fo, 0), r.point(Fo, -i), r.point(0, -i), r.point(-Fo, -i), r.point(-Fo, 0), r.point(-Fo, i);else if (xo(n[0] - t[0]) > Uo) {
      var u = n[0] < t[0] ? Fo : -Fo;
      i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i);
    } else r.point(t[0], t[1]);
  }

  function Ot(n, t) {
    var e = n[0],
        r = n[1],
        i = [Math.sin(e), -Math.cos(e), 0],
        u = 0,
        o = 0;
    ka.reset();

    for (var a = 0, l = t.length; l > a; ++a) {
      var c = t[a],
          f = c.length;
      if (f) for (var s = c[0], h = s[0], p = s[1] / 2 + Fo / 4, g = Math.sin(p), v = Math.cos(p), d = 1;;) {
        d === f && (d = 0), n = c[d];

        var y = n[0],
            m = n[1] / 2 + Fo / 4,
            M = Math.sin(m),
            x = Math.cos(m),
            b = y - h,
            _ = b >= 0 ? 1 : -1,
            w = _ * b,
            S = w > Fo,
            k = g * M;

        if (ka.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), u += S ? b + _ * Ho : b, S ^ h >= e ^ y >= e) {
          var N = mt(dt(s), dt(n));
          bt(N);
          var E = mt(i, N);
          bt(E);
          var A = (S ^ b >= 0 ? -1 : 1) * tn(E[2]);
          (r > A || r === A && (N[0] || N[1])) && (o += S ^ b >= 0 ? 1 : -1);
        }

        if (!d++) break;
        h = y, g = M, v = x, s = n;
      }
    }

    return (-Uo > u || Uo > u && -Uo > ka) ^ 1 & o;
  }

  function It(n) {
    function t(n, t) {
      return Math.cos(n) * Math.cos(t) > u;
    }

    function e(n) {
      var e, u, l, c, f;
      return {
        lineStart: function lineStart() {
          c = l = !1, f = 1;
        },
        point: function point(s, h) {
          var p,
              g = [s, h],
              v = t(s, h),
              d = o ? v ? 0 : i(s, h) : v ? i(s + (0 > s ? Fo : -Fo), h) : 0;
          if (!e && (c = l = v) && n.lineStart(), v !== l && (p = r(e, g), (wt(e, p) || wt(g, p)) && (g[0] += Uo, g[1] += Uo, v = t(g[0], g[1]))), v !== l) f = 0, v ? (n.lineStart(), p = r(g, e), n.point(p[0], p[1])) : (p = r(e, g), n.point(p[0], p[1]), n.lineEnd()), e = p;else if (a && e && o ^ v) {
            var y;
            d & u || !(y = r(g, e, !0)) || (f = 0, o ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])));
          }
          !v || e && wt(e, g) || n.point(g[0], g[1]), e = g, l = v, u = d;
        },
        lineEnd: function lineEnd() {
          l && n.lineEnd(), e = null;
        },
        clean: function clean() {
          return f | (c && l) << 1;
        }
      };
    }

    function r(n, t, e) {
      var r = dt(n),
          i = dt(t),
          o = [1, 0, 0],
          a = mt(r, i),
          l = yt(a, a),
          c = a[0],
          f = l - c * c;
      if (!f) return !e && n;
      var s = u * l / f,
          h = -u * c / f,
          p = mt(o, a),
          g = xt(o, s),
          v = xt(a, h);
      Mt(g, v);
      var d = p,
          y = yt(g, d),
          m = yt(d, d),
          M = y * y - m * (yt(g, g) - 1);

      if (!(0 > M)) {
        var x = Math.sqrt(M),
            b = xt(d, (-y - x) / m);
        if (Mt(b, g), b = _t(b), !e) return b;

        var _,
            w = n[0],
            S = t[0],
            k = n[1],
            N = t[1];

        w > S && (_ = w, w = S, S = _);
        var E = S - w,
            A = xo(E - Fo) < Uo,
            C = A || Uo > E;

        if (!A && k > N && (_ = k, k = N, N = _), C ? A ? k + N > 0 ^ b[1] < (xo(b[0] - w) < Uo ? k : N) : k <= b[1] && b[1] <= N : E > Fo ^ (w <= b[0] && b[0] <= S)) {
          var z = xt(d, (-y + x) / m);
          return Mt(z, g), [b, _t(z)];
        }
      }
    }

    function i(t, e) {
      var r = o ? n : Fo - n,
          i = 0;
      return -r > t ? i |= 1 : t > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i;
    }

    var u = Math.cos(n),
        o = u > 0,
        a = xo(u) > Uo,
        l = ve(n, 6 * Yo);
    return Rt(t, e, l, o ? [0, -n] : [-Fo, n - Fo]);
  }

  function Yt(n, t, e, r) {
    return function (i) {
      var u,
          o = i.a,
          a = i.b,
          l = o.x,
          c = o.y,
          f = a.x,
          s = a.y,
          h = 0,
          p = 1,
          g = f - l,
          v = s - c;

      if (u = n - l, g || !(u > 0)) {
        if (u /= g, 0 > g) {
          if (h > u) return;
          p > u && (p = u);
        } else if (g > 0) {
          if (u > p) return;
          u > h && (h = u);
        }

        if (u = e - l, g || !(0 > u)) {
          if (u /= g, 0 > g) {
            if (u > p) return;
            u > h && (h = u);
          } else if (g > 0) {
            if (h > u) return;
            p > u && (p = u);
          }

          if (u = t - c, v || !(u > 0)) {
            if (u /= v, 0 > v) {
              if (h > u) return;
              p > u && (p = u);
            } else if (v > 0) {
              if (u > p) return;
              u > h && (h = u);
            }

            if (u = r - c, v || !(0 > u)) {
              if (u /= v, 0 > v) {
                if (u > p) return;
                u > h && (h = u);
              } else if (v > 0) {
                if (h > u) return;
                p > u && (p = u);
              }

              return h > 0 && (i.a = {
                x: l + h * g,
                y: c + h * v
              }), 1 > p && (i.b = {
                x: l + p * g,
                y: c + p * v
              }), i;
            }
          }
        }
      }
    };
  }

  function Zt(n, t, e, r) {
    function i(r, i) {
      return xo(r[0] - n) < Uo ? i > 0 ? 0 : 3 : xo(r[0] - e) < Uo ? i > 0 ? 2 : 1 : xo(r[1] - t) < Uo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }

    function u(n, t) {
      return o(n.x, t.x);
    }

    function o(n, t) {
      var e = i(n, 1),
          r = i(t, 1);
      return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0];
    }

    return function (a) {
      function l(n) {
        for (var t = 0, e = d.length, r = n[1], i = 0; e > i; ++i) {
          for (var u, o = 1, a = d[i], l = a.length, c = a[0]; l > o; ++o) {
            u = a[o], c[1] <= r ? u[1] > r && Q(c, u, n) > 0 && ++t : u[1] <= r && Q(c, u, n) < 0 && --t, c = u;
          }
        }

        return 0 !== t;
      }

      function c(u, a, l, c) {
        var f = 0,
            s = 0;

        if (null == u || (f = i(u, l)) !== (s = i(a, l)) || o(u, a) < 0 ^ l > 0) {
          do {
            c.point(0 === f || 3 === f ? n : e, f > 1 ? r : t);
          } while ((f = (f + l + 4) % 4) !== s);
        } else c.point(a[0], a[1]);
      }

      function f(i, u) {
        return i >= n && e >= i && u >= t && r >= u;
      }

      function s(n, t) {
        f(n, t) && a.point(n, t);
      }

      function h() {
        C.point = g, d && d.push(y = []), S = !0, w = !1, b = _ = NaN;
      }

      function p() {
        v && (g(m, M), x && w && E.rejoin(), v.push(E.buffer())), C.point = s, w && a.lineEnd();
      }

      function g(n, t) {
        n = Math.max(-Ha, Math.min(Ha, n)), t = Math.max(-Ha, Math.min(Ha, t));
        var e = f(n, t);
        if (d && y.push([n, t]), S) m = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));else if (e && w) a.point(n, t);else {
          var r = {
            a: {
              x: b,
              y: _
            },
            b: {
              x: n,
              y: t
            }
          };
          A(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
        }
        b = n, _ = t, w = e;
      }

      var v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S,
          k,
          N = a,
          E = Pt(),
          A = Yt(n, t, e, r),
          C = {
        point: s,
        lineStart: h,
        lineEnd: p,
        polygonStart: function polygonStart() {
          a = E, v = [], d = [], k = !0;
        },
        polygonEnd: function polygonEnd() {
          a = N, v = ao.merge(v);
          var t = l([n, r]),
              e = k && t,
              i = v.length;
          (e || i) && (a.polygonStart(), e && (a.lineStart(), c(null, null, 1, a), a.lineEnd()), i && Lt(v, u, t, c, a), a.polygonEnd()), v = d = y = null;
        }
      };

      return C;
    };
  }

  function Vt(n) {
    var t = 0,
        e = Fo / 3,
        r = ae(n),
        i = r(t, e);
    return i.parallels = function (n) {
      return arguments.length ? r(t = n[0] * Fo / 180, e = n[1] * Fo / 180) : [t / Fo * 180, e / Fo * 180];
    }, i;
  }

  function Xt(n, t) {
    function e(n, t) {
      var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i;
      return [e * Math.sin(n *= i), o - e * Math.cos(n)];
    }

    var r = Math.sin(n),
        i = (r + Math.sin(t)) / 2,
        u = 1 + r * (2 * i - r),
        o = Math.sqrt(u) / i;
    return e.invert = function (n, t) {
      var e = o - t;
      return [Math.atan2(n, e) / i, tn((u - (n * n + e * e) * i * i) / (2 * i))];
    }, e;
  }

  function $t() {
    function n(n, t) {
      Ia += i * n - r * t, r = n, i = t;
    }

    var t, e, r, i;
    $a.point = function (u, o) {
      $a.point = n, t = r = u, e = i = o;
    }, $a.lineEnd = function () {
      n(t, e);
    };
  }

  function Bt(n, t) {
    Ya > n && (Ya = n), n > Va && (Va = n), Za > t && (Za = t), t > Xa && (Xa = t);
  }

  function Wt() {
    function n(n, t) {
      o.push("M", n, ",", t, u);
    }

    function t(n, t) {
      o.push("M", n, ",", t), a.point = e;
    }

    function e(n, t) {
      o.push("L", n, ",", t);
    }

    function r() {
      a.point = n;
    }

    function i() {
      o.push("Z");
    }

    var u = Jt(4.5),
        o = [],
        a = {
      point: n,
      lineStart: function lineStart() {
        a.point = t;
      },
      lineEnd: r,
      polygonStart: function polygonStart() {
        a.lineEnd = i;
      },
      polygonEnd: function polygonEnd() {
        a.lineEnd = r, a.point = n;
      },
      pointRadius: function pointRadius(n) {
        return u = Jt(n), a;
      },
      result: function result() {
        if (o.length) {
          var n = o.join("");
          return o = [], n;
        }
      }
    };
    return a;
  }

  function Jt(n) {
    return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z";
  }

  function Gt(n, t) {
    Ca += n, za += t, ++La;
  }

  function Kt() {
    function n(n, r) {
      var i = n - t,
          u = r - e,
          o = Math.sqrt(i * i + u * u);
      qa += o * (t + n) / 2, Ta += o * (e + r) / 2, Ra += o, Gt(t = n, e = r);
    }

    var t, e;

    Wa.point = function (r, i) {
      Wa.point = n, Gt(t = r, e = i);
    };
  }

  function Qt() {
    Wa.point = Gt;
  }

  function ne() {
    function n(n, t) {
      var e = n - r,
          u = t - i,
          o = Math.sqrt(e * e + u * u);
      qa += o * (r + n) / 2, Ta += o * (i + t) / 2, Ra += o, o = i * n - r * t, Da += o * (r + n), Pa += o * (i + t), Ua += 3 * o, Gt(r = n, i = t);
    }

    var t, e, r, i;
    Wa.point = function (u, o) {
      Wa.point = n, Gt(t = r = u, e = i = o);
    }, Wa.lineEnd = function () {
      n(t, e);
    };
  }

  function te(n) {
    function t(t, e) {
      n.moveTo(t + o, e), n.arc(t, e, o, 0, Ho);
    }

    function e(t, e) {
      n.moveTo(t, e), a.point = r;
    }

    function r(t, e) {
      n.lineTo(t, e);
    }

    function i() {
      a.point = t;
    }

    function u() {
      n.closePath();
    }

    var o = 4.5,
        a = {
      point: t,
      lineStart: function lineStart() {
        a.point = e;
      },
      lineEnd: i,
      polygonStart: function polygonStart() {
        a.lineEnd = u;
      },
      polygonEnd: function polygonEnd() {
        a.lineEnd = i, a.point = t;
      },
      pointRadius: function pointRadius(n) {
        return o = n, a;
      },
      result: b
    };
    return a;
  }

  function ee(n) {
    function t(n) {
      return (a ? r : e)(n);
    }

    function e(t) {
      return ue(t, function (e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      });
    }

    function r(t) {
      function e(e, r) {
        e = n(e, r), t.point(e[0], e[1]);
      }

      function r() {
        M = NaN, S.point = u, t.lineStart();
      }

      function u(e, r) {
        var u = dt([e, r]),
            o = n(e, r);
        i(M, x, m, b, _, w, M = o[0], x = o[1], m = e, b = u[0], _ = u[1], w = u[2], a, t), t.point(M, x);
      }

      function o() {
        S.point = e, t.lineEnd();
      }

      function l() {
        r(), S.point = c, S.lineEnd = f;
      }

      function c(n, t) {
        u(s = n, h = t), p = M, g = x, v = b, d = _, y = w, S.point = u;
      }

      function f() {
        i(M, x, m, b, _, w, p, g, s, v, d, y, a, t), S.lineEnd = o, o();
      }

      var s,
          h,
          p,
          g,
          v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S = {
        point: e,
        lineStart: r,
        lineEnd: o,
        polygonStart: function polygonStart() {
          t.polygonStart(), S.lineStart = l;
        },
        polygonEnd: function polygonEnd() {
          t.polygonEnd(), S.lineStart = r;
        }
      };

      return S;
    }

    function i(t, e, r, a, l, c, f, s, h, p, g, v, d, y) {
      var m = f - t,
          M = s - e,
          x = m * m + M * M;

      if (x > 4 * u && d--) {
        var b = a + p,
            _ = l + g,
            w = c + v,
            S = Math.sqrt(b * b + _ * _ + w * w),
            k = Math.asin(w /= S),
            N = xo(xo(w) - 1) < Uo || xo(r - h) < Uo ? (r + h) / 2 : Math.atan2(_, b),
            E = n(N, k),
            A = E[0],
            C = E[1],
            z = A - t,
            L = C - e,
            q = M * z - m * L;

        (q * q / x > u || xo((m * z + M * L) / x - .5) > .3 || o > a * p + l * g + c * v) && (i(t, e, r, a, l, c, A, C, N, b /= S, _ /= S, w, d, y), y.point(A, C), i(A, C, N, b, _, w, f, s, h, p, g, v, d, y));
      }
    }

    var u = .5,
        o = Math.cos(30 * Yo),
        a = 16;
    return t.precision = function (n) {
      return arguments.length ? (a = (u = n * n) > 0 && 16, t) : Math.sqrt(u);
    }, t;
  }

  function re(n) {
    var t = ee(function (t, e) {
      return n([t * Zo, e * Zo]);
    });
    return function (n) {
      return le(t(n));
    };
  }

  function ie(n) {
    this.stream = n;
  }

  function ue(n, t) {
    return {
      point: t,
      sphere: function sphere() {
        n.sphere();
      },
      lineStart: function lineStart() {
        n.lineStart();
      },
      lineEnd: function lineEnd() {
        n.lineEnd();
      },
      polygonStart: function polygonStart() {
        n.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        n.polygonEnd();
      }
    };
  }

  function oe(n) {
    return ae(function () {
      return n;
    })();
  }

  function ae(n) {
    function t(n) {
      return n = a(n[0] * Yo, n[1] * Yo), [n[0] * h + l, c - n[1] * h];
    }

    function e(n) {
      return n = a.invert((n[0] - l) / h, (c - n[1]) / h), n && [n[0] * Zo, n[1] * Zo];
    }

    function r() {
      a = Ct(o = se(y, M, x), u);
      var n = u(v, d);
      return l = p - n[0] * h, c = g + n[1] * h, i();
    }

    function i() {
      return f && (f.valid = !1, f = null), t;
    }

    var u,
        o,
        a,
        l,
        c,
        f,
        s = ee(function (n, t) {
      return n = u(n, t), [n[0] * h + l, c - n[1] * h];
    }),
        h = 150,
        p = 480,
        g = 250,
        v = 0,
        d = 0,
        y = 0,
        M = 0,
        x = 0,
        b = Fa,
        _ = m,
        w = null,
        S = null;
    return t.stream = function (n) {
      return f && (f.valid = !1), f = le(b(o, s(_(n)))), f.valid = !0, f;
    }, t.clipAngle = function (n) {
      return arguments.length ? (b = null == n ? (w = n, Fa) : It((w = +n) * Yo), i()) : w;
    }, t.clipExtent = function (n) {
      return arguments.length ? (S = n, _ = n ? Zt(n[0][0], n[0][1], n[1][0], n[1][1]) : m, i()) : S;
    }, t.scale = function (n) {
      return arguments.length ? (h = +n, r()) : h;
    }, t.translate = function (n) {
      return arguments.length ? (p = +n[0], g = +n[1], r()) : [p, g];
    }, t.center = function (n) {
      return arguments.length ? (v = n[0] % 360 * Yo, d = n[1] % 360 * Yo, r()) : [v * Zo, d * Zo];
    }, t.rotate = function (n) {
      return arguments.length ? (y = n[0] % 360 * Yo, M = n[1] % 360 * Yo, x = n.length > 2 ? n[2] % 360 * Yo : 0, r()) : [y * Zo, M * Zo, x * Zo];
    }, ao.rebind(t, s, "precision"), function () {
      return u = n.apply(this, arguments), t.invert = u.invert && e, r();
    };
  }

  function le(n) {
    return ue(n, function (t, e) {
      n.point(t * Yo, e * Yo);
    });
  }

  function ce(n, t) {
    return [n, t];
  }

  function fe(n, t) {
    return [n > Fo ? n - Ho : -Fo > n ? n + Ho : n, t];
  }

  function se(n, t, e) {
    return n ? t || e ? Ct(pe(n), ge(t, e)) : pe(n) : t || e ? ge(t, e) : fe;
  }

  function he(n) {
    return function (t, e) {
      return t += n, [t > Fo ? t - Ho : -Fo > t ? t + Ho : t, e];
    };
  }

  function pe(n) {
    var t = he(n);
    return t.invert = he(-n), t;
  }

  function ge(n, t) {
    function e(n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          l = Math.sin(n) * e,
          c = Math.sin(t),
          f = c * r + a * i;
      return [Math.atan2(l * u - f * o, a * r - c * i), tn(f * u + l * o)];
    }

    var r = Math.cos(n),
        i = Math.sin(n),
        u = Math.cos(t),
        o = Math.sin(t);
    return e.invert = function (n, t) {
      var e = Math.cos(t),
          a = Math.cos(n) * e,
          l = Math.sin(n) * e,
          c = Math.sin(t),
          f = c * u - l * o;
      return [Math.atan2(l * u + c * o, a * r + f * i), tn(f * r - a * i)];
    }, e;
  }

  function ve(n, t) {
    var e = Math.cos(n),
        r = Math.sin(n);
    return function (i, u, o, a) {
      var l = o * t;
      null != i ? (i = de(e, i), u = de(e, u), (o > 0 ? u > i : i > u) && (i += o * Ho)) : (i = n + o * Ho, u = n - .5 * l);

      for (var c, f = i; o > 0 ? f > u : u > f; f -= l) {
        a.point((c = _t([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1]);
      }
    };
  }

  function de(n, t) {
    var e = dt(t);
    e[0] -= n, bt(e);
    var r = nn(-e[1]);
    return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Uo) % (2 * Math.PI);
  }

  function ye(n, t, e) {
    var r = ao.range(n, t - Uo, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [n, t];
      });
    };
  }

  function me(n, t, e) {
    var r = ao.range(n, t - Uo, e).concat(t);
    return function (n) {
      return r.map(function (t) {
        return [t, n];
      });
    };
  }

  function Me(n) {
    return n.source;
  }

  function xe(n) {
    return n.target;
  }

  function be(n, t, e, r) {
    var i = Math.cos(t),
        u = Math.sin(t),
        o = Math.cos(r),
        a = Math.sin(r),
        l = i * Math.cos(n),
        c = i * Math.sin(n),
        f = o * Math.cos(e),
        s = o * Math.sin(e),
        h = 2 * Math.asin(Math.sqrt(on(r - t) + i * o * on(e - n))),
        p = 1 / Math.sin(h),
        g = h ? function (n) {
      var t = Math.sin(n *= h) * p,
          e = Math.sin(h - n) * p,
          r = e * l + t * f,
          i = e * c + t * s,
          o = e * u + t * a;
      return [Math.atan2(i, r) * Zo, Math.atan2(o, Math.sqrt(r * r + i * i)) * Zo];
    } : function () {
      return [n * Zo, t * Zo];
    };
    return g.distance = h, g;
  }

  function _e() {
    function n(n, i) {
      var u = Math.sin(i *= Yo),
          o = Math.cos(i),
          a = xo((n *= Yo) - t),
          l = Math.cos(a);
      Ja += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * u - e * o * l) * a), e * u + r * o * l), t = n, e = u, r = o;
    }

    var t, e, r;
    Ga.point = function (i, u) {
      t = i * Yo, e = Math.sin(u *= Yo), r = Math.cos(u), Ga.point = n;
    }, Ga.lineEnd = function () {
      Ga.point = Ga.lineEnd = b;
    };
  }

  function we(n, t) {
    function e(t, e) {
      var r = Math.cos(t),
          i = Math.cos(e),
          u = n(r * i);
      return [u * i * Math.sin(t), u * Math.sin(e)];
    }

    return e.invert = function (n, e) {
      var r = Math.sqrt(n * n + e * e),
          i = t(r),
          u = Math.sin(i),
          o = Math.cos(i);
      return [Math.atan2(n * u, r * o), Math.asin(r && e * u / r)];
    }, e;
  }

  function Se(n, t) {
    function e(n, t) {
      o > 0 ? -Io + Uo > t && (t = -Io + Uo) : t > Io - Uo && (t = Io - Uo);
      var e = o / Math.pow(i(t), u);
      return [e * Math.sin(u * n), o - e * Math.cos(u * n)];
    }

    var r = Math.cos(n),
        i = function i(n) {
      return Math.tan(Fo / 4 + n / 2);
    },
        u = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n)),
        o = r * Math.pow(i(n), u) / u;

    return u ? (e.invert = function (n, t) {
      var e = o - t,
          r = K(u) * Math.sqrt(n * n + e * e);
      return [Math.atan2(n, e) / u, 2 * Math.atan(Math.pow(o / r, 1 / u)) - Io];
    }, e) : Ne;
  }

  function ke(n, t) {
    function e(n, t) {
      var e = u - t;
      return [e * Math.sin(i * n), u - e * Math.cos(i * n)];
    }

    var r = Math.cos(n),
        i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
        u = r / i + n;
    return xo(i) < Uo ? ce : (e.invert = function (n, t) {
      var e = u - t;
      return [Math.atan2(n, e) / i, u - K(i) * Math.sqrt(n * n + e * e)];
    }, e);
  }

  function Ne(n, t) {
    return [n, Math.log(Math.tan(Fo / 4 + t / 2))];
  }

  function Ee(n) {
    var t,
        e = oe(n),
        r = e.scale,
        i = e.translate,
        u = e.clipExtent;
    return e.scale = function () {
      var n = r.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.translate = function () {
      var n = i.apply(e, arguments);
      return n === e ? t ? e.clipExtent(null) : e : n;
    }, e.clipExtent = function (n) {
      var o = u.apply(e, arguments);

      if (o === e) {
        if (t = null == n) {
          var a = Fo * r(),
              l = i();
          u([[l[0] - a, l[1] - a], [l[0] + a, l[1] + a]]);
        }
      } else t && (o = null);

      return o;
    }, e.clipExtent(null);
  }

  function Ae(n, t) {
    return [Math.log(Math.tan(Fo / 4 + t / 2)), -n];
  }

  function Ce(n) {
    return n[0];
  }

  function ze(n) {
    return n[1];
  }

  function Le(n) {
    for (var t = n.length, e = [0, 1], r = 2, i = 2; t > i; i++) {
      for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;) {
        --r;
      }

      e[r++] = i;
    }

    return e.slice(0, r);
  }

  function qe(n, t) {
    return n[0] - t[0] || n[1] - t[1];
  }

  function Te(n, t, e) {
    return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]);
  }

  function Re(n, t, e, r) {
    var i = n[0],
        u = e[0],
        o = t[0] - i,
        a = r[0] - u,
        l = n[1],
        c = e[1],
        f = t[1] - l,
        s = r[1] - c,
        h = (a * (l - c) - s * (i - u)) / (s * o - a * f);
    return [i + h * o, l + h * f];
  }

  function De(n) {
    var t = n[0],
        e = n[n.length - 1];
    return !(t[0] - e[0] || t[1] - e[1]);
  }

  function Pe() {
    rr(this), this.edge = this.site = this.circle = null;
  }

  function Ue(n) {
    var t = cl.pop() || new Pe();
    return t.site = n, t;
  }

  function je(n) {
    Be(n), ol.remove(n), cl.push(n), rr(n);
  }

  function Fe(n) {
    var t = n.circle,
        e = t.x,
        r = t.cy,
        i = {
      x: e,
      y: r
    },
        u = n.P,
        o = n.N,
        a = [n];
    je(n);

    for (var l = u; l.circle && xo(e - l.circle.x) < Uo && xo(r - l.circle.cy) < Uo;) {
      u = l.P, a.unshift(l), je(l), l = u;
    }

    a.unshift(l), Be(l);

    for (var c = o; c.circle && xo(e - c.circle.x) < Uo && xo(r - c.circle.cy) < Uo;) {
      o = c.N, a.push(c), je(c), c = o;
    }

    a.push(c), Be(c);
    var f,
        s = a.length;

    for (f = 1; s > f; ++f) {
      c = a[f], l = a[f - 1], nr(c.edge, l.site, c.site, i);
    }

    l = a[0], c = a[s - 1], c.edge = Ke(l.site, c.site, null, i), $e(l), $e(c);
  }

  function He(n) {
    for (var t, e, r, i, u = n.x, o = n.y, a = ol._; a;) {
      if (r = Oe(a, o) - u, r > Uo) a = a.L;else {
        if (i = u - Ie(a, o), !(i > Uo)) {
          r > -Uo ? (t = a.P, e = a) : i > -Uo ? (t = a, e = a.N) : t = e = a;
          break;
        }

        if (!a.R) {
          t = a;
          break;
        }

        a = a.R;
      }
    }

    var l = Ue(n);

    if (ol.insert(t, l), t || e) {
      if (t === e) return Be(t), e = Ue(t.site), ol.insert(l, e), l.edge = e.edge = Ke(t.site, l.site), $e(t), void $e(e);
      if (!e) return void (l.edge = Ke(t.site, l.site));
      Be(t), Be(e);
      var c = t.site,
          f = c.x,
          s = c.y,
          h = n.x - f,
          p = n.y - s,
          g = e.site,
          v = g.x - f,
          d = g.y - s,
          y = 2 * (h * d - p * v),
          m = h * h + p * p,
          M = v * v + d * d,
          x = {
        x: (d * m - p * M) / y + f,
        y: (h * M - v * m) / y + s
      };
      nr(e.edge, c, g, x), l.edge = Ke(c, n, null, x), e.edge = Ke(n, g, null, x), $e(t), $e(e);
    }
  }

  function Oe(n, t) {
    var e = n.site,
        r = e.x,
        i = e.y,
        u = i - t;
    if (!u) return r;
    var o = n.P;
    if (!o) return -(1 / 0);
    e = o.site;
    var a = e.x,
        l = e.y,
        c = l - t;
    if (!c) return a;
    var f = a - r,
        s = 1 / u - 1 / c,
        h = f / c;
    return s ? (-h + Math.sqrt(h * h - 2 * s * (f * f / (-2 * c) - l + c / 2 + i - u / 2))) / s + r : (r + a) / 2;
  }

  function Ie(n, t) {
    var e = n.N;
    if (e) return Oe(e, t);
    var r = n.site;
    return r.y === t ? r.x : 1 / 0;
  }

  function Ye(n) {
    this.site = n, this.edges = [];
  }

  function Ze(n) {
    for (var t, e, r, i, u, o, a, l, c, f, s = n[0][0], h = n[1][0], p = n[0][1], g = n[1][1], v = ul, d = v.length; d--;) {
      if (u = v[d], u && u.prepare()) for (a = u.edges, l = a.length, o = 0; l > o;) {
        f = a[o].end(), r = f.x, i = f.y, c = a[++o % l].start(), t = c.x, e = c.y, (xo(r - t) > Uo || xo(i - e) > Uo) && (a.splice(o, 0, new tr(Qe(u.site, f, xo(r - s) < Uo && g - i > Uo ? {
          x: s,
          y: xo(t - s) < Uo ? e : g
        } : xo(i - g) < Uo && h - r > Uo ? {
          x: xo(e - g) < Uo ? t : h,
          y: g
        } : xo(r - h) < Uo && i - p > Uo ? {
          x: h,
          y: xo(t - h) < Uo ? e : p
        } : xo(i - p) < Uo && r - s > Uo ? {
          x: xo(e - p) < Uo ? t : s,
          y: p
        } : null), u.site, null)), ++l);
      }
    }
  }

  function Ve(n, t) {
    return t.angle - n.angle;
  }

  function Xe() {
    rr(this), this.x = this.y = this.arc = this.site = this.cy = null;
  }

  function $e(n) {
    var t = n.P,
        e = n.N;

    if (t && e) {
      var r = t.site,
          i = n.site,
          u = e.site;

      if (r !== u) {
        var o = i.x,
            a = i.y,
            l = r.x - o,
            c = r.y - a,
            f = u.x - o,
            s = u.y - a,
            h = 2 * (l * s - c * f);

        if (!(h >= -jo)) {
          var p = l * l + c * c,
              g = f * f + s * s,
              v = (s * p - c * g) / h,
              d = (l * g - f * p) / h,
              s = d + a,
              y = fl.pop() || new Xe();
          y.arc = n, y.site = i, y.x = v + o, y.y = s + Math.sqrt(v * v + d * d), y.cy = s, n.circle = y;

          for (var m = null, M = ll._; M;) {
            if (y.y < M.y || y.y === M.y && y.x <= M.x) {
              if (!M.L) {
                m = M.P;
                break;
              }

              M = M.L;
            } else {
              if (!M.R) {
                m = M;
                break;
              }

              M = M.R;
            }
          }

          ll.insert(m, y), m || (al = y);
        }
      }
    }
  }

  function Be(n) {
    var t = n.circle;
    t && (t.P || (al = t.N), ll.remove(t), fl.push(t), rr(t), n.circle = null);
  }

  function We(n) {
    for (var t, e = il, r = Yt(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;) {
      t = e[i], (!Je(t, n) || !r(t) || xo(t.a.x - t.b.x) < Uo && xo(t.a.y - t.b.y) < Uo) && (t.a = t.b = null, e.splice(i, 1));
    }
  }

  function Je(n, t) {
    var e = n.b;
    if (e) return !0;
    var r,
        i,
        u = n.a,
        o = t[0][0],
        a = t[1][0],
        l = t[0][1],
        c = t[1][1],
        f = n.l,
        s = n.r,
        h = f.x,
        p = f.y,
        g = s.x,
        v = s.y,
        d = (h + g) / 2,
        y = (p + v) / 2;

    if (v === p) {
      if (o > d || d >= a) return;

      if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = {
          x: d,
          y: l
        };

        e = {
          x: d,
          y: c
        };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = {
          x: d,
          y: c
        };

        e = {
          x: d,
          y: l
        };
      }
    } else if (r = (h - g) / (v - p), i = y - r * d, -1 > r || r > 1) {
      if (h > g) {
        if (u) {
          if (u.y >= c) return;
        } else u = {
          x: (l - i) / r,
          y: l
        };

        e = {
          x: (c - i) / r,
          y: c
        };
      } else {
        if (u) {
          if (u.y < l) return;
        } else u = {
          x: (c - i) / r,
          y: c
        };

        e = {
          x: (l - i) / r,
          y: l
        };
      }
    } else if (v > p) {
      if (u) {
        if (u.x >= a) return;
      } else u = {
        x: o,
        y: r * o + i
      };

      e = {
        x: a,
        y: r * a + i
      };
    } else {
      if (u) {
        if (u.x < o) return;
      } else u = {
        x: a,
        y: r * a + i
      };

      e = {
        x: o,
        y: r * o + i
      };
    }

    return n.a = u, n.b = e, !0;
  }

  function Ge(n, t) {
    this.l = n, this.r = t, this.a = this.b = null;
  }

  function Ke(n, t, e, r) {
    var i = new Ge(n, t);
    return il.push(i), e && nr(i, n, t, e), r && nr(i, t, n, r), ul[n.i].edges.push(new tr(i, n, t)), ul[t.i].edges.push(new tr(i, t, n)), i;
  }

  function Qe(n, t, e) {
    var r = new Ge(n, null);
    return r.a = t, r.b = e, il.push(r), r;
  }

  function nr(n, t, e, r) {
    n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e);
  }

  function tr(n, t, e) {
    var r = n.a,
        i = n.b;
    this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y);
  }

  function er() {
    this._ = null;
  }

  function rr(n) {
    n.U = n.C = n.L = n.R = n.P = n.N = null;
  }

  function ir(n, t) {
    var e = t,
        r = t.R,
        i = e.U;
    i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }

  function ur(n, t) {
    var e = t,
        r = t.L,
        i = e.U;
    i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }

  function or(n) {
    for (; n.L;) {
      n = n.L;
    }

    return n;
  }

  function ar(n, t) {
    var e,
        r,
        i,
        u = n.sort(lr).pop();

    for (il = [], ul = new Array(n.length), ol = new er(), ll = new er();;) {
      if (i = al, u && (!i || u.y < i.y || u.y === i.y && u.x < i.x)) u.x === e && u.y === r || (ul[u.i] = new Ye(u), He(u), e = u.x, r = u.y), u = n.pop();else {
        if (!i) break;
        Fe(i.arc);
      }
    }

    t && (We(t), Ze(t));
    var o = {
      cells: ul,
      edges: il
    };
    return ol = ll = il = ul = null, o;
  }

  function lr(n, t) {
    return t.y - n.y || t.x - n.x;
  }

  function cr(n, t, e) {
    return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y);
  }

  function fr(n) {
    return n.x;
  }

  function sr(n) {
    return n.y;
  }

  function hr() {
    return {
      leaf: !0,
      nodes: [],
      point: null,
      x: null,
      y: null
    };
  }

  function pr(n, t, e, r, i, u) {
    if (!n(t, e, r, i, u)) {
      var o = .5 * (e + i),
          a = .5 * (r + u),
          l = t.nodes;
      l[0] && pr(n, l[0], e, r, o, a), l[1] && pr(n, l[1], o, r, i, a), l[2] && pr(n, l[2], e, a, o, u), l[3] && pr(n, l[3], o, a, i, u);
    }
  }

  function gr(n, t, e, r, i, u, o) {
    var a,
        l = 1 / 0;
    return function c(n, f, s, h, p) {
      if (!(f > u || s > o || r > h || i > p)) {
        if (g = n.point) {
          var g,
              v = t - n.x,
              d = e - n.y,
              y = v * v + d * d;

          if (l > y) {
            var m = Math.sqrt(l = y);
            r = t - m, i = e - m, u = t + m, o = e + m, a = g;
          }
        }

        for (var M = n.nodes, x = .5 * (f + h), b = .5 * (s + p), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S) {
          if (n = M[3 & S]) switch (3 & S) {
            case 0:
              c(n, f, s, x, b);
              break;

            case 1:
              c(n, x, s, h, b);
              break;

            case 2:
              c(n, f, b, x, p);
              break;

            case 3:
              c(n, x, b, h, p);
          }
        }
      }
    }(n, r, i, u, o), a;
  }

  function vr(n, t) {
    n = ao.rgb(n), t = ao.rgb(t);
    var e = n.r,
        r = n.g,
        i = n.b,
        u = t.r - e,
        o = t.g - r,
        a = t.b - i;
    return function (n) {
      return "#" + bn(Math.round(e + u * n)) + bn(Math.round(r + o * n)) + bn(Math.round(i + a * n));
    };
  }

  function dr(n, t) {
    var e,
        r = {},
        i = {};

    for (e in n) {
      e in t ? r[e] = Mr(n[e], t[e]) : i[e] = n[e];
    }

    for (e in t) {
      e in n || (i[e] = t[e]);
    }

    return function (n) {
      for (e in r) {
        i[e] = r[e](n);
      }

      return i;
    };
  }

  function yr(n, t) {
    return n = +n, t = +t, function (e) {
      return n * (1 - e) + t * e;
    };
  }

  function mr(n, t) {
    var e,
        r,
        i,
        u = hl.lastIndex = pl.lastIndex = 0,
        o = -1,
        a = [],
        l = [];

    for (n += "", t += ""; (e = hl.exec(n)) && (r = pl.exec(t));) {
      (i = r.index) > u && (i = t.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({
        i: o,
        x: yr(e, r)
      })), u = pl.lastIndex;
    }

    return u < t.length && (i = t.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? l[0] ? (t = l[0].x, function (n) {
      return t(n) + "";
    }) : function () {
      return t;
    } : (t = l.length, function (n) {
      for (var e, r = 0; t > r; ++r) {
        a[(e = l[r]).i] = e.x(n);
      }

      return a.join("");
    });
  }

  function Mr(n, t) {
    for (var e, r = ao.interpolators.length; --r >= 0 && !(e = ao.interpolators[r](n, t));) {
      ;
    }

    return e;
  }

  function xr(n, t) {
    var e,
        r = [],
        i = [],
        u = n.length,
        o = t.length,
        a = Math.min(n.length, t.length);

    for (e = 0; a > e; ++e) {
      r.push(Mr(n[e], t[e]));
    }

    for (; u > e; ++e) {
      i[e] = n[e];
    }

    for (; o > e; ++e) {
      i[e] = t[e];
    }

    return function (n) {
      for (e = 0; a > e; ++e) {
        i[e] = r[e](n);
      }

      return i;
    };
  }

  function br(n) {
    return function (t) {
      return 0 >= t ? 0 : t >= 1 ? 1 : n(t);
    };
  }

  function _r(n) {
    return function (t) {
      return 1 - n(1 - t);
    };
  }

  function wr(n) {
    return function (t) {
      return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t));
    };
  }

  function Sr(n) {
    return n * n;
  }

  function kr(n) {
    return n * n * n;
  }

  function Nr(n) {
    if (0 >= n) return 0;
    if (n >= 1) return 1;
    var t = n * n,
        e = t * n;
    return 4 * (.5 > n ? e : 3 * (n - t) + e - .75);
  }

  function Er(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  }

  function Ar(n) {
    return 1 - Math.cos(n * Io);
  }

  function Cr(n) {
    return Math.pow(2, 10 * (n - 1));
  }

  function zr(n) {
    return 1 - Math.sqrt(1 - n * n);
  }

  function Lr(n, t) {
    var e;
    return arguments.length < 2 && (t = .45), arguments.length ? e = t / Ho * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) {
      return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Ho / t);
    };
  }

  function qr(n) {
    return n || (n = 1.70158), function (t) {
      return t * t * ((n + 1) * t - n);
    };
  }

  function Tr(n) {
    return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375;
  }

  function Rr(n, t) {
    n = ao.hcl(n), t = ao.hcl(t);
    var e = n.h,
        r = n.c,
        i = n.l,
        u = t.h - e,
        o = t.c - r,
        a = t.l - i;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) {
      return sn(e + u * n, r + o * n, i + a * n) + "";
    };
  }

  function Dr(n, t) {
    n = ao.hsl(n), t = ao.hsl(t);
    var e = n.h,
        r = n.s,
        i = n.l,
        u = t.h - e,
        o = t.s - r,
        a = t.l - i;
    return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) {
      return cn(e + u * n, r + o * n, i + a * n) + "";
    };
  }

  function Pr(n, t) {
    n = ao.lab(n), t = ao.lab(t);
    var e = n.l,
        r = n.a,
        i = n.b,
        u = t.l - e,
        o = t.a - r,
        a = t.b - i;
    return function (n) {
      return pn(e + u * n, r + o * n, i + a * n) + "";
    };
  }

  function Ur(n, t) {
    return t -= n, function (e) {
      return Math.round(n + t * e);
    };
  }

  function jr(n) {
    var t = [n.a, n.b],
        e = [n.c, n.d],
        r = Hr(t),
        i = Fr(t, e),
        u = Hr(Or(e, t, -i)) || 0;
    t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Zo, this.translate = [n.e, n.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Zo : 0;
  }

  function Fr(n, t) {
    return n[0] * t[0] + n[1] * t[1];
  }

  function Hr(n) {
    var t = Math.sqrt(Fr(n, n));
    return t && (n[0] /= t, n[1] /= t), t;
  }

  function Or(n, t, e) {
    return n[0] += e * t[0], n[1] += e * t[1], n;
  }

  function Ir(n) {
    return n.length ? n.pop() + "," : "";
  }

  function Yr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var i = e.push("translate(", null, ",", null, ")");
      r.push({
        i: i - 4,
        x: yr(n[0], t[0])
      }, {
        i: i - 2,
        x: yr(n[1], t[1])
      });
    } else (t[0] || t[1]) && e.push("translate(" + t + ")");
  }

  function Zr(n, t, e, r) {
    n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({
      i: e.push(Ir(e) + "rotate(", null, ")") - 2,
      x: yr(n, t)
    })) : t && e.push(Ir(e) + "rotate(" + t + ")");
  }

  function Vr(n, t, e, r) {
    n !== t ? r.push({
      i: e.push(Ir(e) + "skewX(", null, ")") - 2,
      x: yr(n, t)
    }) : t && e.push(Ir(e) + "skewX(" + t + ")");
  }

  function Xr(n, t, e, r) {
    if (n[0] !== t[0] || n[1] !== t[1]) {
      var i = e.push(Ir(e) + "scale(", null, ",", null, ")");
      r.push({
        i: i - 4,
        x: yr(n[0], t[0])
      }, {
        i: i - 2,
        x: yr(n[1], t[1])
      });
    } else 1 === t[0] && 1 === t[1] || e.push(Ir(e) + "scale(" + t + ")");
  }

  function $r(n, t) {
    var e = [],
        r = [];
    return n = ao.transform(n), t = ao.transform(t), Yr(n.translate, t.translate, e, r), Zr(n.rotate, t.rotate, e, r), Vr(n.skew, t.skew, e, r), Xr(n.scale, t.scale, e, r), n = t = null, function (n) {
      for (var t, i = -1, u = r.length; ++i < u;) {
        e[(t = r[i]).i] = t.x(n);
      }

      return e.join("");
    };
  }

  function Br(n, t) {
    return t = (t -= n = +n) || 1 / t, function (e) {
      return (e - n) / t;
    };
  }

  function Wr(n, t) {
    return t = (t -= n = +n) || 1 / t, function (e) {
      return Math.max(0, Math.min(1, (e - n) / t));
    };
  }

  function Jr(n) {
    for (var t = n.source, e = n.target, r = Kr(t, e), i = [t]; t !== r;) {
      t = t.parent, i.push(t);
    }

    for (var u = i.length; e !== r;) {
      i.splice(u, 0, e), e = e.parent;
    }

    return i;
  }

  function Gr(n) {
    for (var t = [], e = n.parent; null != e;) {
      t.push(n), n = e, e = e.parent;
    }

    return t.push(n), t;
  }

  function Kr(n, t) {
    if (n === t) return n;

    for (var e = Gr(n), r = Gr(t), i = e.pop(), u = r.pop(), o = null; i === u;) {
      o = i, i = e.pop(), u = r.pop();
    }

    return o;
  }

  function Qr(n) {
    n.fixed |= 2;
  }

  function ni(n) {
    n.fixed &= -7;
  }

  function ti(n) {
    n.fixed |= 4, n.px = n.x, n.py = n.y;
  }

  function ei(n) {
    n.fixed &= -5;
  }

  function ri(n, t, e) {
    var r = 0,
        i = 0;
    if (n.charge = 0, !n.leaf) for (var u, o = n.nodes, a = o.length, l = -1; ++l < a;) {
      u = o[l], null != u && (ri(u, t, e), n.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy);
    }

    if (n.point) {
      n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
      var c = t * e[n.point.index];
      n.charge += n.pointCharge = c, r += c * n.point.x, i += c * n.point.y;
    }

    n.cx = r / n.charge, n.cy = i / n.charge;
  }

  function ii(n, t) {
    return ao.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = fi, n;
  }

  function ui(n, t) {
    for (var e = [n]; null != (n = e.pop());) {
      if (t(n), (i = n.children) && (r = i.length)) for (var r, i; --r >= 0;) {
        e.push(i[r]);
      }
    }
  }

  function oi(n, t) {
    for (var e = [n], r = []; null != (n = e.pop());) {
      if (r.push(n), (u = n.children) && (i = u.length)) for (var i, u, o = -1; ++o < i;) {
        e.push(u[o]);
      }
    }

    for (; null != (n = r.pop());) {
      t(n);
    }
  }

  function ai(n) {
    return n.children;
  }

  function li(n) {
    return n.value;
  }

  function ci(n, t) {
    return t.value - n.value;
  }

  function fi(n) {
    return ao.merge(n.map(function (n) {
      return (n.children || []).map(function (t) {
        return {
          source: n,
          target: t
        };
      });
    }));
  }

  function si(n) {
    return n.x;
  }

  function hi(n) {
    return n.y;
  }

  function pi(n, t, e) {
    n.y0 = t, n.y = e;
  }

  function gi(n) {
    return ao.range(n.length);
  }

  function vi(n) {
    for (var t = -1, e = n[0].length, r = []; ++t < e;) {
      r[t] = 0;
    }

    return r;
  }

  function di(n) {
    for (var t, e = 1, r = 0, i = n[0][1], u = n.length; u > e; ++e) {
      (t = n[e][1]) > i && (r = e, i = t);
    }

    return r;
  }

  function yi(n) {
    return n.reduce(mi, 0);
  }

  function mi(n, t) {
    return n + t[1];
  }

  function Mi(n, t) {
    return xi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1));
  }

  function xi(n, t) {
    for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;) {
      u[e] = i * e + r;
    }

    return u;
  }

  function bi(n) {
    return [ao.min(n), ao.max(n)];
  }

  function _i(n, t) {
    return n.value - t.value;
  }

  function wi(n, t) {
    var e = n._pack_next;
    n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t;
  }

  function Si(n, t) {
    n._pack_next = t, t._pack_prev = n;
  }

  function ki(n, t) {
    var e = t.x - n.x,
        r = t.y - n.y,
        i = n.r + t.r;
    return .999 * i * i > e * e + r * r;
  }

  function Ni(n) {
    function t(n) {
      f = Math.min(n.x - n.r, f), s = Math.max(n.x + n.r, s), h = Math.min(n.y - n.r, h), p = Math.max(n.y + n.r, p);
    }

    if ((e = n.children) && (c = e.length)) {
      var e,
          r,
          i,
          u,
          o,
          a,
          l,
          c,
          f = 1 / 0,
          s = -(1 / 0),
          h = 1 / 0,
          p = -(1 / 0);
      if (e.forEach(Ei), r = e[0], r.x = -r.r, r.y = 0, t(r), c > 1 && (i = e[1], i.x = i.r, i.y = 0, t(i), c > 2)) for (u = e[2], zi(r, i, u), t(u), wi(r, u), r._pack_prev = u, wi(u, i), i = r._pack_next, o = 3; c > o; o++) {
        zi(r, i, u = e[o]);
        var g = 0,
            v = 1,
            d = 1;

        for (a = i._pack_next; a !== i; a = a._pack_next, v++) {
          if (ki(a, u)) {
            g = 1;
            break;
          }
        }

        if (1 == g) for (l = r._pack_prev; l !== a._pack_prev && !ki(l, u); l = l._pack_prev, d++) {
          ;
        }
        g ? (d > v || v == d && i.r < r.r ? Si(r, i = a) : Si(r = l, i), o--) : (wi(r, u), i = u, t(u));
      }
      var y = (f + s) / 2,
          m = (h + p) / 2,
          M = 0;

      for (o = 0; c > o; o++) {
        u = e[o], u.x -= y, u.y -= m, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
      }

      n.r = M, e.forEach(Ai);
    }
  }

  function Ei(n) {
    n._pack_next = n._pack_prev = n;
  }

  function Ai(n) {
    delete n._pack_next, delete n._pack_prev;
  }

  function Ci(n, t, e, r) {
    var i = n.children;
    if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, i) for (var u = -1, o = i.length; ++u < o;) {
      Ci(i[u], t, e, r);
    }
  }

  function zi(n, t, e) {
    var r = n.r + e.r,
        i = t.x - n.x,
        u = t.y - n.y;

    if (r && (i || u)) {
      var o = t.r + e.r,
          a = i * i + u * u;
      o *= o, r *= r;
      var l = .5 + (r - o) / (2 * a),
          c = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
      e.x = n.x + l * i + c * u, e.y = n.y + l * u - c * i;
    } else e.x = n.x + r, e.y = n.y;
  }

  function Li(n, t) {
    return n.parent == t.parent ? 1 : 2;
  }

  function qi(n) {
    var t = n.children;
    return t.length ? t[0] : n.t;
  }

  function Ti(n) {
    var t,
        e = n.children;
    return (t = e.length) ? e[t - 1] : n.t;
  }

  function Ri(n, t, e) {
    var r = e / (t.i - n.i);
    t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e;
  }

  function Di(n) {
    for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0;) {
      t = i[u], t.z += e, t.m += e, e += t.s + (r += t.c);
    }
  }

  function Pi(n, t, e) {
    return n.a.parent === t.parent ? n.a : e;
  }

  function Ui(n) {
    return 1 + ao.max(n, function (n) {
      return n.y;
    });
  }

  function ji(n) {
    return n.reduce(function (n, t) {
      return n + t.x;
    }, 0) / n.length;
  }

  function Fi(n) {
    var t = n.children;
    return t && t.length ? Fi(t[0]) : n;
  }

  function Hi(n) {
    var t,
        e = n.children;
    return e && (t = e.length) ? Hi(e[t - 1]) : n;
  }

  function Oi(n) {
    return {
      x: n.x,
      y: n.y,
      dx: n.dx,
      dy: n.dy
    };
  }

  function Ii(n, t) {
    var e = n.x + t[3],
        r = n.y + t[0],
        i = n.dx - t[1] - t[3],
        u = n.dy - t[0] - t[2];
    return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), {
      x: e,
      y: r,
      dx: i,
      dy: u
    };
  }

  function Yi(n) {
    var t = n[0],
        e = n[n.length - 1];
    return e > t ? [t, e] : [e, t];
  }

  function Zi(n) {
    return n.rangeExtent ? n.rangeExtent() : Yi(n.range());
  }

  function Vi(n, t, e, r) {
    var i = e(n[0], n[1]),
        u = r(t[0], t[1]);
    return function (n) {
      return u(i(n));
    };
  }

  function Xi(n, t) {
    var e,
        r = 0,
        i = n.length - 1,
        u = n[r],
        o = n[i];
    return u > o && (e = r, r = i, i = e, e = u, u = o, o = e), n[r] = t.floor(u), n[i] = t.ceil(o), n;
  }

  function $i(n) {
    return n ? {
      floor: function floor(t) {
        return Math.floor(t / n) * n;
      },
      ceil: function ceil(t) {
        return Math.ceil(t / n) * n;
      }
    } : Sl;
  }

  function Bi(n, t, e, r) {
    var i = [],
        u = [],
        o = 0,
        a = Math.min(n.length, t.length) - 1;

    for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) {
      i.push(e(n[o - 1], n[o])), u.push(r(t[o - 1], t[o]));
    }

    return function (t) {
      var e = ao.bisect(n, t, 1, a) - 1;
      return u[e](i[e](t));
    };
  }

  function Wi(n, t, e, r) {
    function i() {
      var i = Math.min(n.length, t.length) > 2 ? Bi : Vi,
          l = r ? Wr : Br;
      return o = i(n, t, l, e), a = i(t, n, l, Mr), u;
    }

    function u(n) {
      return o(n);
    }

    var o, a;
    return u.invert = function (n) {
      return a(n);
    }, u.domain = function (t) {
      return arguments.length ? (n = t.map(Number), i()) : n;
    }, u.range = function (n) {
      return arguments.length ? (t = n, i()) : t;
    }, u.rangeRound = function (n) {
      return u.range(n).interpolate(Ur);
    }, u.clamp = function (n) {
      return arguments.length ? (r = n, i()) : r;
    }, u.interpolate = function (n) {
      return arguments.length ? (e = n, i()) : e;
    }, u.ticks = function (t) {
      return Qi(n, t);
    }, u.tickFormat = function (t, e) {
      return nu(n, t, e);
    }, u.nice = function (t) {
      return Gi(n, t), i();
    }, u.copy = function () {
      return Wi(n, t, e, r);
    }, i();
  }

  function Ji(n, t) {
    return ao.rebind(n, t, "range", "rangeRound", "interpolate", "clamp");
  }

  function Gi(n, t) {
    return Xi(n, $i(Ki(n, t)[2])), Xi(n, $i(Ki(n, t)[2])), n;
  }

  function Ki(n, t) {
    null == t && (t = 10);
    var e = Yi(n),
        r = e[1] - e[0],
        i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
        u = t / r * i;
    return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e;
  }

  function Qi(n, t) {
    return ao.range.apply(ao, Ki(n, t));
  }

  function nu(n, t, e) {
    var r = Ki(n, t);

    if (e) {
      var i = ha.exec(e);

      if (i.shift(), "s" === i[8]) {
        var u = ao.formatPrefix(Math.max(xo(r[0]), xo(r[1])));
        return i[7] || (i[7] = "." + tu(u.scale(r[2]))), i[8] = "f", e = ao.format(i.join("")), function (n) {
          return e(u.scale(n)) + u.symbol;
        };
      }

      i[7] || (i[7] = "." + eu(i[8], r)), e = i.join("");
    } else e = ",." + tu(r[2]) + "f";

    return ao.format(e);
  }

  function tu(n) {
    return -Math.floor(Math.log(n) / Math.LN10 + .01);
  }

  function eu(n, t) {
    var e = tu(t[2]);
    return n in kl ? Math.abs(e - tu(Math.max(xo(t[0]), xo(t[1])))) + +("e" !== n) : e - 2 * ("%" === n);
  }

  function ru(n, t, e, r) {
    function i(n) {
      return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t);
    }

    function u(n) {
      return e ? Math.pow(t, n) : -Math.pow(t, -n);
    }

    function o(t) {
      return n(i(t));
    }

    return o.invert = function (t) {
      return u(n.invert(t));
    }, o.domain = function (t) {
      return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(i)), o) : r;
    }, o.base = function (e) {
      return arguments.length ? (t = +e, n.domain(r.map(i)), o) : t;
    }, o.nice = function () {
      var t = Xi(r.map(i), e ? Math : El);
      return n.domain(t), r = t.map(u), o;
    }, o.ticks = function () {
      var n = Yi(r),
          o = [],
          a = n[0],
          l = n[1],
          c = Math.floor(i(a)),
          f = Math.ceil(i(l)),
          s = t % 1 ? 2 : t;

      if (isFinite(f - c)) {
        if (e) {
          for (; f > c; c++) {
            for (var h = 1; s > h; h++) {
              o.push(u(c) * h);
            }
          }

          o.push(u(c));
        } else for (o.push(u(c)); c++ < f;) {
          for (var h = s - 1; h > 0; h--) {
            o.push(u(c) * h);
          }
        }

        for (c = 0; o[c] < a; c++) {
          ;
        }

        for (f = o.length; o[f - 1] > l; f--) {
          ;
        }

        o = o.slice(c, f);
      }

      return o;
    }, o.tickFormat = function (n, e) {
      if (!arguments.length) return Nl;
      arguments.length < 2 ? e = Nl : "function" != typeof e && (e = ao.format(e));
      var r = Math.max(1, t * n / o.ticks().length);
      return function (n) {
        var o = n / u(Math.round(i(n)));
        return t - .5 > o * t && (o *= t), r >= o ? e(n) : "";
      };
    }, o.copy = function () {
      return ru(n.copy(), t, e, r);
    }, Ji(o, n);
  }

  function iu(n, t, e) {
    function r(t) {
      return n(i(t));
    }

    var i = uu(t),
        u = uu(1 / t);
    return r.invert = function (t) {
      return u(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e;
    }, r.ticks = function (n) {
      return Qi(e, n);
    }, r.tickFormat = function (n, t) {
      return nu(e, n, t);
    }, r.nice = function (n) {
      return r.domain(Gi(e, n));
    }, r.exponent = function (o) {
      return arguments.length ? (i = uu(t = o), u = uu(1 / t), n.domain(e.map(i)), r) : t;
    }, r.copy = function () {
      return iu(n.copy(), t, e);
    }, Ji(r, n);
  }

  function uu(n) {
    return function (t) {
      return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n);
    };
  }

  function ou(n, t) {
    function e(e) {
      return u[((i.get(e) || ("range" === t.t ? i.set(e, n.push(e)) : NaN)) - 1) % u.length];
    }

    function r(t, e) {
      return ao.range(n.length).map(function (n) {
        return t + e * n;
      });
    }

    var i, u, o;
    return e.domain = function (r) {
      if (!arguments.length) return n;
      n = [], i = new c();

      for (var u, o = -1, a = r.length; ++o < a;) {
        i.has(u = r[o]) || i.set(u, n.push(u));
      }

      return e[t.t].apply(e, t.a);
    }, e.range = function (n) {
      return arguments.length ? (u = n, o = 0, t = {
        t: "range",
        a: arguments
      }, e) : u;
    }, e.rangePoints = function (i, a) {
      arguments.length < 2 && (a = 0);
      var l = i[0],
          c = i[1],
          f = n.length < 2 ? (l = (l + c) / 2, 0) : (c - l) / (n.length - 1 + a);
      return u = r(l + f * a / 2, f), o = 0, t = {
        t: "rangePoints",
        a: arguments
      }, e;
    }, e.rangeRoundPoints = function (i, a) {
      arguments.length < 2 && (a = 0);
      var l = i[0],
          c = i[1],
          f = n.length < 2 ? (l = c = Math.round((l + c) / 2), 0) : (c - l) / (n.length - 1 + a) | 0;
      return u = r(l + Math.round(f * a / 2 + (c - l - (n.length - 1 + a) * f) / 2), f), o = 0, t = {
        t: "rangeRoundPoints",
        a: arguments
      }, e;
    }, e.rangeBands = function (i, a, l) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);
      var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = (s - f) / (n.length - a + 2 * l);
      return u = r(f + h * l, h), c && u.reverse(), o = h * (1 - a), t = {
        t: "rangeBands",
        a: arguments
      }, e;
    }, e.rangeRoundBands = function (i, a, l) {
      arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a);
      var c = i[1] < i[0],
          f = i[c - 0],
          s = i[1 - c],
          h = Math.floor((s - f) / (n.length - a + 2 * l));
      return u = r(f + Math.round((s - f - (n.length - a) * h) / 2), h), c && u.reverse(), o = Math.round(h * (1 - a)), t = {
        t: "rangeRoundBands",
        a: arguments
      }, e;
    }, e.rangeBand = function () {
      return o;
    }, e.rangeExtent = function () {
      return Yi(t.a[0]);
    }, e.copy = function () {
      return ou(n, t);
    }, e.domain(n);
  }

  function au(n, t) {
    function u() {
      var e = 0,
          r = t.length;

      for (a = []; ++e < r;) {
        a[e - 1] = ao.quantile(n, e / r);
      }

      return o;
    }

    function o(n) {
      return isNaN(n = +n) ? void 0 : t[ao.bisect(a, n)];
    }

    var a;
    return o.domain = function (t) {
      return arguments.length ? (n = t.map(r).filter(i).sort(e), u()) : n;
    }, o.range = function (n) {
      return arguments.length ? (t = n, u()) : t;
    }, o.quantiles = function () {
      return a;
    }, o.invertExtent = function (e) {
      return e = t.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]];
    }, o.copy = function () {
      return au(n, t);
    }, u();
  }

  function lu(n, t, e) {
    function r(t) {
      return e[Math.max(0, Math.min(o, Math.floor(u * (t - n))))];
    }

    function i() {
      return u = e.length / (t - n), o = e.length - 1, r;
    }

    var u, o;
    return r.domain = function (e) {
      return arguments.length ? (n = +e[0], t = +e[e.length - 1], i()) : [n, t];
    }, r.range = function (n) {
      return arguments.length ? (e = n, i()) : e;
    }, r.invertExtent = function (t) {
      return t = e.indexOf(t), t = 0 > t ? NaN : t / u + n, [t, t + 1 / u];
    }, r.copy = function () {
      return lu(n, t, e);
    }, i();
  }

  function cu(n, t) {
    function e(e) {
      return e >= e ? t[ao.bisect(n, e)] : void 0;
    }

    return e.domain = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.range = function (n) {
      return arguments.length ? (t = n, e) : t;
    }, e.invertExtent = function (e) {
      return e = t.indexOf(e), [n[e - 1], n[e]];
    }, e.copy = function () {
      return cu(n, t);
    }, e;
  }

  function fu(n) {
    function t(n) {
      return +n;
    }

    return t.invert = t, t.domain = t.range = function (e) {
      return arguments.length ? (n = e.map(t), t) : n;
    }, t.ticks = function (t) {
      return Qi(n, t);
    }, t.tickFormat = function (t, e) {
      return nu(n, t, e);
    }, t.copy = function () {
      return fu(n);
    }, t;
  }

  function su() {
    return 0;
  }

  function hu(n) {
    return n.innerRadius;
  }

  function pu(n) {
    return n.outerRadius;
  }

  function gu(n) {
    return n.startAngle;
  }

  function vu(n) {
    return n.endAngle;
  }

  function du(n) {
    return n && n.padAngle;
  }

  function yu(n, t, e, r) {
    return (n - e) * t - (t - r) * n > 0 ? 0 : 1;
  }

  function mu(n, t, e, r, i) {
    var u = n[0] - t[0],
        o = n[1] - t[1],
        a = (i ? r : -r) / Math.sqrt(u * u + o * o),
        l = a * o,
        c = -a * u,
        f = n[0] + l,
        s = n[1] + c,
        h = t[0] + l,
        p = t[1] + c,
        g = (f + h) / 2,
        v = (s + p) / 2,
        d = h - f,
        y = p - s,
        m = d * d + y * y,
        M = e - r,
        x = f * p - h * s,
        b = (0 > y ? -1 : 1) * Math.sqrt(Math.max(0, M * M * m - x * x)),
        _ = (x * y - d * b) / m,
        w = (-x * d - y * b) / m,
        S = (x * y + d * b) / m,
        k = (-x * d + y * b) / m,
        N = _ - g,
        E = w - v,
        A = S - g,
        C = k - v;

    return N * N + E * E > A * A + C * C && (_ = S, w = k), [[_ - l, w - c], [_ * e / M, w * e / M]];
  }

  function Mu(n) {
    function t(t) {
      function o() {
        c.push("M", u(n(f), a));
      }

      for (var l, c = [], f = [], s = -1, h = t.length, p = En(e), g = En(r); ++s < h;) {
        i.call(this, l = t[s], s) ? f.push([+p.call(this, l, s), +g.call(this, l, s)]) : f.length && (o(), f = []);
      }

      return f.length && o(), c.length ? c.join("") : null;
    }

    var e = Ce,
        r = ze,
        i = zt,
        u = xu,
        o = u.key,
        a = .7;
    return t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.defined = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.interpolate = function (n) {
      return arguments.length ? (o = "function" == typeof n ? u = n : (u = Tl.get(n) || xu).key, t) : o;
    }, t.tension = function (n) {
      return arguments.length ? (a = n, t) : a;
    }, t;
  }

  function xu(n) {
    return n.length > 1 ? n.join("L") : n + "Z";
  }

  function bu(n) {
    return n.join("L") + "Z";
  }

  function _u(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
    }

    return e > 1 && i.push("H", r[0]), i.join("");
  }

  function wu(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("V", (r = n[t])[1], "H", r[0]);
    }

    return i.join("");
  }

  function Su(n) {
    for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;) {
      i.push("H", (r = n[t])[0], "V", r[1]);
    }

    return i.join("");
  }

  function ku(n, t) {
    return n.length < 4 ? xu(n) : n[1] + Au(n.slice(1, -1), Cu(n, t));
  }

  function Nu(n, t) {
    return n.length < 3 ? bu(n) : n[0] + Au((n.push(n[0]), n), Cu([n[n.length - 2]].concat(n, [n[1]]), t));
  }

  function Eu(n, t) {
    return n.length < 3 ? xu(n) : n[0] + Au(n, Cu(n, t));
  }

  function Au(n, t) {
    if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return xu(n);
    var e = n.length != t.length,
        r = "",
        i = n[0],
        u = n[1],
        o = t[0],
        a = o,
        l = 1;

    if (e && (r += "Q" + (u[0] - 2 * o[0] / 3) + "," + (u[1] - 2 * o[1] / 3) + "," + u[0] + "," + u[1], i = n[1], l = 2), t.length > 1) {
      a = t[1], u = n[l], l++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];

      for (var c = 2; c < t.length; c++, l++) {
        u = n[l], a = t[c], r += "S" + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
      }
    }

    if (e) {
      var f = n[l];
      r += "Q" + (u[0] + 2 * a[0] / 3) + "," + (u[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1];
    }

    return r;
  }

  function Cu(n, t) {
    for (var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, l = n.length; ++a < l;) {
      e = u, u = o, o = n[a], r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]);
    }

    return r;
  }

  function zu(n) {
    if (n.length < 3) return xu(n);
    var t = 1,
        e = n.length,
        r = n[0],
        i = r[0],
        u = r[1],
        o = [i, i, i, (r = n[1])[0]],
        a = [u, u, u, r[1]],
        l = [i, ",", u, "L", Ru(Pl, o), ",", Ru(Pl, a)];

    for (n.push(n[e - 1]); ++t <= e;) {
      r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Du(l, o, a);
    }

    return n.pop(), l.push("L", r), l.join("");
  }

  function Lu(n) {
    if (n.length < 4) return xu(n);

    for (var t, e = [], r = -1, i = n.length, u = [0], o = [0]; ++r < 3;) {
      t = n[r], u.push(t[0]), o.push(t[1]);
    }

    for (e.push(Ru(Pl, u) + "," + Ru(Pl, o)), --r; ++r < i;) {
      t = n[r], u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), Du(e, u, o);
    }

    return e.join("");
  }

  function qu(n) {
    for (var t, e, r = -1, i = n.length, u = i + 4, o = [], a = []; ++r < 4;) {
      e = n[r % i], o.push(e[0]), a.push(e[1]);
    }

    for (t = [Ru(Pl, o), ",", Ru(Pl, a)], --r; ++r < u;) {
      e = n[r % i], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Du(t, o, a);
    }

    return t.join("");
  }

  function Tu(n, t) {
    var e = n.length - 1;
    if (e) for (var r, i, u = n[0][0], o = n[0][1], a = n[e][0] - u, l = n[e][1] - o, c = -1; ++c <= e;) {
      r = n[c], i = c / e, r[0] = t * r[0] + (1 - t) * (u + i * a), r[1] = t * r[1] + (1 - t) * (o + i * l);
    }
    return zu(n);
  }

  function Ru(n, t) {
    return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3];
  }

  function Du(n, t, e) {
    n.push("C", Ru(Rl, t), ",", Ru(Rl, e), ",", Ru(Dl, t), ",", Ru(Dl, e), ",", Ru(Pl, t), ",", Ru(Pl, e));
  }

  function Pu(n, t) {
    return (t[1] - n[1]) / (t[0] - n[0]);
  }

  function Uu(n) {
    for (var t = 0, e = n.length - 1, r = [], i = n[0], u = n[1], o = r[0] = Pu(i, u); ++t < e;) {
      r[t] = (o + (o = Pu(i = u, u = n[t + 1]))) / 2;
    }

    return r[t] = o, r;
  }

  function ju(n) {
    for (var t, e, r, i, u = [], o = Uu(n), a = -1, l = n.length - 1; ++a < l;) {
      t = Pu(n[a], n[a + 1]), xo(t) < Uo ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, i = e * e + r * r, i > 9 && (i = 3 * t / Math.sqrt(i), o[a] = i * e, o[a + 1] = i * r));
    }

    for (a = -1; ++a <= l;) {
      i = (n[Math.min(l, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), u.push([i || 0, o[a] * i || 0]);
    }

    return u;
  }

  function Fu(n) {
    return n.length < 3 ? xu(n) : n[0] + Au(n, ju(n));
  }

  function Hu(n) {
    for (var t, e, r, i = -1, u = n.length; ++i < u;) {
      t = n[i], e = t[0], r = t[1] - Io, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
    }

    return n;
  }

  function Ou(n) {
    function t(t) {
      function l() {
        v.push("M", a(n(y), s), f, c(n(d.reverse()), s), "Z");
      }

      for (var h, p, g, v = [], d = [], y = [], m = -1, M = t.length, x = En(e), b = En(i), _ = e === r ? function () {
        return p;
      } : En(r), w = i === u ? function () {
        return g;
      } : En(u); ++m < M;) {
        o.call(this, h = t[m], m) ? (d.push([p = +x.call(this, h, m), g = +b.call(this, h, m)]), y.push([+_.call(this, h, m), +w.call(this, h, m)])) : d.length && (l(), d = [], y = []);
      }

      return d.length && l(), v.length ? v.join("") : null;
    }

    var e = Ce,
        r = Ce,
        i = 0,
        u = ze,
        o = zt,
        a = xu,
        l = a.key,
        c = a,
        f = "L",
        s = .7;
    return t.x = function (n) {
      return arguments.length ? (e = r = n, t) : r;
    }, t.x0 = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.x1 = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.y = function (n) {
      return arguments.length ? (i = u = n, t) : u;
    }, t.y0 = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.y1 = function (n) {
      return arguments.length ? (u = n, t) : u;
    }, t.defined = function (n) {
      return arguments.length ? (o = n, t) : o;
    }, t.interpolate = function (n) {
      return arguments.length ? (l = "function" == typeof n ? a = n : (a = Tl.get(n) || xu).key, c = a.reverse || a, f = a.closed ? "M" : "L", t) : l;
    }, t.tension = function (n) {
      return arguments.length ? (s = n, t) : s;
    }, t;
  }

  function Iu(n) {
    return n.radius;
  }

  function Yu(n) {
    return [n.x, n.y];
  }

  function Zu(n) {
    return function () {
      var t = n.apply(this, arguments),
          e = t[0],
          r = t[1] - Io;
      return [e * Math.cos(r), e * Math.sin(r)];
    };
  }

  function Vu() {
    return 64;
  }

  function Xu() {
    return "circle";
  }

  function $u(n) {
    var t = Math.sqrt(n / Fo);
    return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z";
  }

  function Bu(n) {
    return function () {
      var t, e, r;
      (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index));
    };
  }

  function Wu(n, t, e) {
    return ko(n, Yl), n.namespace = t, n.id = e, n;
  }

  function Ju(n, t, e, r) {
    var i = n.id,
        u = n.namespace;
    return Y(n, "function" == typeof e ? function (n, o, a) {
      n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a)));
    } : (e = r(e), function (n) {
      n[u][i].tween.set(t, e);
    }));
  }

  function Gu(n) {
    return null == n && (n = ""), function () {
      this.textContent = n;
    };
  }

  function Ku(n) {
    return null == n ? "__transition__" : "__transition_" + n + "__";
  }

  function Qu(n, t, e, r, i) {
    function u(n) {
      var t = v.delay;
      return f.t = t + l, n >= t ? o(n - t) : void (f.c = o);
    }

    function o(e) {
      var i = g.active,
          u = g[i];
      u && (u.timer.c = null, u.timer.t = NaN, --g.count, delete g[i], u.event && u.event.interrupt.call(n, n.__data__, u.index));

      for (var o in g) {
        if (r > +o) {
          var c = g[o];
          c.timer.c = null, c.timer.t = NaN, --g.count, delete g[o];
        }
      }

      f.c = a, qn(function () {
        return f.c && a(e || 1) && (f.c = null, f.t = NaN), 1;
      }, 0, l), g.active = r, v.event && v.event.start.call(n, n.__data__, t), p = [], v.tween.forEach(function (e, r) {
        (r = r.call(n, n.__data__, t)) && p.push(r);
      }), h = v.ease, s = v.duration;
    }

    function a(i) {
      for (var u = i / s, o = h(u), a = p.length; a > 0;) {
        p[--a].call(n, o);
      }

      return u >= 1 ? (v.event && v.event.end.call(n, n.__data__, t), --g.count ? delete g[r] : delete n[e], 1) : void 0;
    }

    var l,
        f,
        s,
        h,
        p,
        g = n[e] || (n[e] = {
      active: 0,
      count: 0
    }),
        v = g[r];
    v || (l = i.time, f = qn(u, 0, l), v = g[r] = {
      tween: new c(),
      time: l,
      timer: f,
      delay: i.delay,
      duration: i.duration,
      ease: i.ease,
      index: t
    }, i = null, ++g.count);
  }

  function no(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);
      return "translate(" + (isFinite(r) ? r : e(n)) + ",0)";
    });
  }

  function to(n, t, e) {
    n.attr("transform", function (n) {
      var r = t(n);
      return "translate(0," + (isFinite(r) ? r : e(n)) + ")";
    });
  }

  function eo(n) {
    return n.toISOString();
  }

  function ro(n, t, e) {
    function r(t) {
      return n(t);
    }

    function i(n, e) {
      var r = n[1] - n[0],
          i = r / e,
          u = ao.bisect(Kl, i);
      return u == Kl.length ? [t.year, Ki(n.map(function (n) {
        return n / 31536e6;
      }), e)[2]] : u ? t[i / Kl[u - 1] < Kl[u] / i ? u - 1 : u] : [tc, Ki(n, e)[2]];
    }

    return r.invert = function (t) {
      return io(n.invert(t));
    }, r.domain = function (t) {
      return arguments.length ? (n.domain(t), r) : n.domain().map(io);
    }, r.nice = function (n, t) {
      function e(e) {
        return !isNaN(e) && !n.range(e, io(+e + 1), t).length;
      }

      var u = r.domain(),
          o = Yi(u),
          a = null == n ? i(o, 10) : "number" == typeof n && i(o, n);
      return a && (n = a[0], t = a[1]), r.domain(Xi(u, t > 1 ? {
        floor: function floor(t) {
          for (; e(t = n.floor(t));) {
            t = io(t - 1);
          }

          return t;
        },
        ceil: function ceil(t) {
          for (; e(t = n.ceil(t));) {
            t = io(+t + 1);
          }

          return t;
        }
      } : n));
    }, r.ticks = function (n, t) {
      var e = Yi(r.domain()),
          u = null == n ? i(e, 10) : "number" == typeof n ? i(e, n) : !n.range && [{
        range: n
      }, t];
      return u && (n = u[0], t = u[1]), n.range(e[0], io(+e[1] + 1), 1 > t ? 1 : t);
    }, r.tickFormat = function () {
      return e;
    }, r.copy = function () {
      return ro(n.copy(), t, e);
    }, Ji(r, n);
  }

  function io(n) {
    return new Date(n);
  }

  function uo(n) {
    return JSON.parse(n.responseText);
  }

  function oo(n) {
    var t = fo.createRange();
    return t.selectNode(fo.body), t.createContextualFragment(n.responseText);
  }

  var ao = {
    version: "3.5.17"
  },
      lo = [].slice,
      co = function co(n) {
    return lo.call(n);
  },
      fo = this.document;

  if (fo) try {
    co(fo.documentElement.childNodes)[0].nodeType;
  } catch (so) {
    co = function co(n) {
      for (var t = n.length, e = new Array(t); t--;) {
        e[t] = n[t];
      }

      return e;
    };
  }
  if (Date.now || (Date.now = function () {
    return +new Date();
  }), fo) try {
    fo.createElement("DIV").style.setProperty("opacity", 0, "");
  } catch (ho) {
    var po = this.Element.prototype,
        go = po.setAttribute,
        vo = po.setAttributeNS,
        yo = this.CSSStyleDeclaration.prototype,
        mo = yo.setProperty;
    po.setAttribute = function (n, t) {
      go.call(this, n, t + "");
    }, po.setAttributeNS = function (n, t, e) {
      vo.call(this, n, t, e + "");
    }, yo.setProperty = function (n, t, e) {
      mo.call(this, n, t + "", e);
    };
  }
  ao.ascending = e, ao.descending = function (n, t) {
    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }, ao.min = function (n, t) {
    var e,
        r,
        i = -1,
        u = n.length;

    if (1 === arguments.length) {
      for (; ++i < u;) {
        if (null != (r = n[i]) && r >= r) {
          e = r;
          break;
        }
      }

      for (; ++i < u;) {
        null != (r = n[i]) && e > r && (e = r);
      }
    } else {
      for (; ++i < u;) {
        if (null != (r = t.call(n, n[i], i)) && r >= r) {
          e = r;
          break;
        }
      }

      for (; ++i < u;) {
        null != (r = t.call(n, n[i], i)) && e > r && (e = r);
      }
    }

    return e;
  }, ao.max = function (n, t) {
    var e,
        r,
        i = -1,
        u = n.length;

    if (1 === arguments.length) {
      for (; ++i < u;) {
        if (null != (r = n[i]) && r >= r) {
          e = r;
          break;
        }
      }

      for (; ++i < u;) {
        null != (r = n[i]) && r > e && (e = r);
      }
    } else {
      for (; ++i < u;) {
        if (null != (r = t.call(n, n[i], i)) && r >= r) {
          e = r;
          break;
        }
      }

      for (; ++i < u;) {
        null != (r = t.call(n, n[i], i)) && r > e && (e = r);
      }
    }

    return e;
  }, ao.extent = function (n, t) {
    var e,
        r,
        i,
        u = -1,
        o = n.length;

    if (1 === arguments.length) {
      for (; ++u < o;) {
        if (null != (r = n[u]) && r >= r) {
          e = i = r;
          break;
        }
      }

      for (; ++u < o;) {
        null != (r = n[u]) && (e > r && (e = r), r > i && (i = r));
      }
    } else {
      for (; ++u < o;) {
        if (null != (r = t.call(n, n[u], u)) && r >= r) {
          e = i = r;
          break;
        }
      }

      for (; ++u < o;) {
        null != (r = t.call(n, n[u], u)) && (e > r && (e = r), r > i && (i = r));
      }
    }

    return [e, i];
  }, ao.sum = function (n, t) {
    var e,
        r = 0,
        u = n.length,
        o = -1;
    if (1 === arguments.length) for (; ++o < u;) {
      i(e = +n[o]) && (r += e);
    } else for (; ++o < u;) {
      i(e = +t.call(n, n[o], o)) && (r += e);
    }
    return r;
  }, ao.mean = function (n, t) {
    var e,
        u = 0,
        o = n.length,
        a = -1,
        l = o;
    if (1 === arguments.length) for (; ++a < o;) {
      i(e = r(n[a])) ? u += e : --l;
    } else for (; ++a < o;) {
      i(e = r(t.call(n, n[a], a))) ? u += e : --l;
    }
    return l ? u / l : void 0;
  }, ao.quantile = function (n, t) {
    var e = (n.length - 1) * t + 1,
        r = Math.floor(e),
        i = +n[r - 1],
        u = e - r;
    return u ? i + u * (n[r] - i) : i;
  }, ao.median = function (n, t) {
    var u,
        o = [],
        a = n.length,
        l = -1;
    if (1 === arguments.length) for (; ++l < a;) {
      i(u = r(n[l])) && o.push(u);
    } else for (; ++l < a;) {
      i(u = r(t.call(n, n[l], l))) && o.push(u);
    }
    return o.length ? ao.quantile(o.sort(e), .5) : void 0;
  }, ao.variance = function (n, t) {
    var e,
        u,
        o = n.length,
        a = 0,
        l = 0,
        c = -1,
        f = 0;
    if (1 === arguments.length) for (; ++c < o;) {
      i(e = r(n[c])) && (u = e - a, a += u / ++f, l += u * (e - a));
    } else for (; ++c < o;) {
      i(e = r(t.call(n, n[c], c))) && (u = e - a, a += u / ++f, l += u * (e - a));
    }
    return f > 1 ? l / (f - 1) : void 0;
  }, ao.deviation = function () {
    var n = ao.variance.apply(this, arguments);
    return n ? Math.sqrt(n) : n;
  };
  var Mo = u(e);
  ao.bisectLeft = Mo.left, ao.bisect = ao.bisectRight = Mo.right, ao.bisector = function (n) {
    return u(1 === n.length ? function (t, r) {
      return e(n(t), r);
    } : n);
  }, ao.shuffle = function (n, t, e) {
    (u = arguments.length) < 3 && (e = n.length, 2 > u && (t = 0));

    for (var r, i, u = e - t; u;) {
      i = Math.random() * u-- | 0, r = n[u + t], n[u + t] = n[i + t], n[i + t] = r;
    }

    return n;
  }, ao.permute = function (n, t) {
    for (var e = t.length, r = new Array(e); e--;) {
      r[e] = n[t[e]];
    }

    return r;
  }, ao.pairs = function (n) {
    for (var t, e = 0, r = n.length - 1, i = n[0], u = new Array(0 > r ? 0 : r); r > e;) {
      u[e] = [t = i, i = n[++e]];
    }

    return u;
  }, ao.transpose = function (n) {
    if (!(i = n.length)) return [];

    for (var t = -1, e = ao.min(n, o), r = new Array(e); ++t < e;) {
      for (var i, u = -1, a = r[t] = new Array(i); ++u < i;) {
        a[u] = n[u][t];
      }
    }

    return r;
  }, ao.zip = function () {
    return ao.transpose(arguments);
  }, ao.keys = function (n) {
    var t = [];

    for (var e in n) {
      t.push(e);
    }

    return t;
  }, ao.values = function (n) {
    var t = [];

    for (var e in n) {
      t.push(n[e]);
    }

    return t;
  }, ao.entries = function (n) {
    var t = [];

    for (var e in n) {
      t.push({
        key: e,
        value: n[e]
      });
    }

    return t;
  }, ao.merge = function (n) {
    for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i;) {
      o += n[u].length;
    }

    for (e = new Array(o); --i >= 0;) {
      for (r = n[i], t = r.length; --t >= 0;) {
        e[--o] = r[t];
      }
    }

    return e;
  };
  var xo = Math.abs;
  ao.range = function (n, t, e) {
    if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0) throw new Error("infinite range");
    var r,
        i = [],
        u = a(xo(e)),
        o = -1;
    if (n *= u, t *= u, e *= u, 0 > e) for (; (r = n + e * ++o) > t;) {
      i.push(r / u);
    } else for (; (r = n + e * ++o) < t;) {
      i.push(r / u);
    }
    return i;
  }, ao.map = function (n, t) {
    var e = new c();
    if (n instanceof c) n.forEach(function (n, t) {
      e.set(n, t);
    });else if (Array.isArray(n)) {
      var r,
          i = -1,
          u = n.length;
      if (1 === arguments.length) for (; ++i < u;) {
        e.set(i, n[i]);
      } else for (; ++i < u;) {
        e.set(t.call(n, r = n[i], i), r);
      }
    } else for (var o in n) {
      e.set(o, n[o]);
    }
    return e;
  };
  var bo = "__proto__",
      _o = "\x00";
  l(c, {
    has: h,
    get: function get(n) {
      return this._[f(n)];
    },
    set: function set(n, t) {
      return this._[f(n)] = t;
    },
    remove: p,
    keys: g,
    values: function values() {
      var n = [];

      for (var t in this._) {
        n.push(this._[t]);
      }

      return n;
    },
    entries: function entries() {
      var n = [];

      for (var t in this._) {
        n.push({
          key: s(t),
          value: this._[t]
        });
      }

      return n;
    },
    size: v,
    empty: d,
    forEach: function forEach(n) {
      for (var t in this._) {
        n.call(this, s(t), this._[t]);
      }
    }
  }), ao.nest = function () {
    function n(t, o, a) {
      if (a >= u.length) return r ? r.call(i, o) : e ? o.sort(e) : o;

      for (var l, f, s, h, p = -1, g = o.length, v = u[a++], d = new c(); ++p < g;) {
        (h = d.get(l = v(f = o[p]))) ? h.push(f) : d.set(l, [f]);
      }

      return t ? (f = t(), s = function s(e, r) {
        f.set(e, n(t, r, a));
      }) : (f = {}, s = function s(e, r) {
        f[e] = n(t, r, a);
      }), d.forEach(s), f;
    }

    function t(n, e) {
      if (e >= u.length) return n;
      var r = [],
          i = o[e++];
      return n.forEach(function (n, i) {
        r.push({
          key: n,
          values: t(i, e)
        });
      }), i ? r.sort(function (n, t) {
        return i(n.key, t.key);
      }) : r;
    }

    var e,
        r,
        i = {},
        u = [],
        o = [];
    return i.map = function (t, e) {
      return n(e, t, 0);
    }, i.entries = function (e) {
      return t(n(ao.map, e, 0), 0);
    }, i.key = function (n) {
      return u.push(n), i;
    }, i.sortKeys = function (n) {
      return o[u.length - 1] = n, i;
    }, i.sortValues = function (n) {
      return e = n, i;
    }, i.rollup = function (n) {
      return r = n, i;
    }, i;
  }, ao.set = function (n) {
    var t = new y();
    if (n) for (var e = 0, r = n.length; r > e; ++e) {
      t.add(n[e]);
    }
    return t;
  }, l(y, {
    has: h,
    add: function add(n) {
      return this._[f(n += "")] = !0, n;
    },
    remove: p,
    values: g,
    size: v,
    empty: d,
    forEach: function forEach(n) {
      for (var t in this._) {
        n.call(this, s(t));
      }
    }
  }), ao.behavior = {}, ao.rebind = function (n, t) {
    for (var e, r = 1, i = arguments.length; ++r < i;) {
      n[e = arguments[r]] = M(n, t, t[e]);
    }

    return n;
  };
  var wo = ["webkit", "ms", "moz", "Moz", "o", "O"];
  ao.dispatch = function () {
    for (var n = new _(), t = -1, e = arguments.length; ++t < e;) {
      n[arguments[t]] = w(n);
    }

    return n;
  }, _.prototype.on = function (n, t) {
    var e = n.indexOf("."),
        r = "";
    if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);

    if (2 === arguments.length) {
      if (null == t) for (n in this) {
        this.hasOwnProperty(n) && this[n].on(r, null);
      }
      return this;
    }
  }, ao.event = null, ao.requote = function (n) {
    return n.replace(So, "\\$&");
  };

  var So = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
      ko = {}.__proto__ ? function (n, t) {
    n.__proto__ = t;
  } : function (n, t) {
    for (var e in t) {
      n[e] = t[e];
    }
  },
      No = function No(n, t) {
    return t.querySelector(n);
  },
      Eo = function Eo(n, t) {
    return t.querySelectorAll(n);
  },
      _Ao = function Ao(n, t) {
    var e = n.matches || n[x(n, "matchesSelector")];
    return (_Ao = function Ao(n, t) {
      return e.call(n, t);
    })(n, t);
  };

  "function" == typeof Sizzle && (No = function No(n, t) {
    return Sizzle(n, t)[0] || null;
  }, Eo = Sizzle, _Ao = Sizzle.matchesSelector), ao.selection = function () {
    return ao.select(fo.documentElement);
  };
  var Co = ao.selection.prototype = [];
  Co.select = function (n) {
    var t,
        e,
        r,
        i,
        u = [];
    n = A(n);

    for (var o = -1, a = this.length; ++o < a;) {
      u.push(t = []), t.parentNode = (r = this[o]).parentNode;

      for (var l = -1, c = r.length; ++l < c;) {
        (i = r[l]) ? (t.push(e = n.call(i, i.__data__, l, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null);
      }
    }

    return E(u);
  }, Co.selectAll = function (n) {
    var t,
        e,
        r = [];
    n = C(n);

    for (var i = -1, u = this.length; ++i < u;) {
      for (var o = this[i], a = -1, l = o.length; ++a < l;) {
        (e = o[a]) && (r.push(t = co(n.call(e, e.__data__, a, i))), t.parentNode = e);
      }
    }

    return E(r);
  };
  var zo = "http://www.w3.org/1999/xhtml",
      Lo = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: zo,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  ao.ns = {
    prefix: Lo,
    qualify: function qualify(n) {
      var t = n.indexOf(":"),
          e = n;
      return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), Lo.hasOwnProperty(e) ? {
        space: Lo[e],
        local: n
      } : n;
    }
  }, Co.attr = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node();
        return n = ao.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
      }

      for (t in n) {
        this.each(z(t, n[t]));
      }

      return this;
    }

    return this.each(z(n, t));
  }, Co.classed = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) {
        var e = this.node(),
            r = (n = T(n)).length,
            i = -1;

        if (t = e.classList) {
          for (; ++i < r;) {
            if (!t.contains(n[i])) return !1;
          }
        } else for (t = e.getAttribute("class"); ++i < r;) {
          if (!q(n[i]).test(t)) return !1;
        }

        return !0;
      }

      for (t in n) {
        this.each(R(t, n[t]));
      }

      return this;
    }

    return this.each(R(n, t));
  }, Co.style = function (n, e, r) {
    var i = arguments.length;

    if (3 > i) {
      if ("string" != typeof n) {
        2 > i && (e = "");

        for (r in n) {
          this.each(P(r, n[r], e));
        }

        return this;
      }

      if (2 > i) {
        var u = this.node();
        return t(u).getComputedStyle(u, null).getPropertyValue(n);
      }

      r = "";
    }

    return this.each(P(n, e, r));
  }, Co.property = function (n, t) {
    if (arguments.length < 2) {
      if ("string" == typeof n) return this.node()[n];

      for (t in n) {
        this.each(U(t, n[t]));
      }

      return this;
    }

    return this.each(U(n, t));
  }, Co.text = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);
      this.textContent = null == t ? "" : t;
    } : null == n ? function () {
      this.textContent = "";
    } : function () {
      this.textContent = n;
    }) : this.node().textContent;
  }, Co.html = function (n) {
    return arguments.length ? this.each("function" == typeof n ? function () {
      var t = n.apply(this, arguments);
      this.innerHTML = null == t ? "" : t;
    } : null == n ? function () {
      this.innerHTML = "";
    } : function () {
      this.innerHTML = n;
    }) : this.node().innerHTML;
  }, Co.append = function (n) {
    return n = j(n), this.select(function () {
      return this.appendChild(n.apply(this, arguments));
    });
  }, Co.insert = function (n, t) {
    return n = j(n), t = A(t), this.select(function () {
      return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null);
    });
  }, Co.remove = function () {
    return this.each(F);
  }, Co.data = function (n, t) {
    function e(n, e) {
      var r,
          i,
          u,
          o = n.length,
          s = e.length,
          h = Math.min(o, s),
          p = new Array(s),
          g = new Array(s),
          v = new Array(o);

      if (t) {
        var d,
            y = new c(),
            m = new Array(o);

        for (r = -1; ++r < o;) {
          (i = n[r]) && (y.has(d = t.call(i, i.__data__, r)) ? v[r] = i : y.set(d, i), m[r] = d);
        }

        for (r = -1; ++r < s;) {
          (i = y.get(d = t.call(e, u = e[r], r))) ? i !== !0 && (p[r] = i, i.__data__ = u) : g[r] = H(u), y.set(d, !0);
        }

        for (r = -1; ++r < o;) {
          r in m && y.get(m[r]) !== !0 && (v[r] = n[r]);
        }
      } else {
        for (r = -1; ++r < h;) {
          i = n[r], u = e[r], i ? (i.__data__ = u, p[r] = i) : g[r] = H(u);
        }

        for (; s > r; ++r) {
          g[r] = H(e[r]);
        }

        for (; o > r; ++r) {
          v[r] = n[r];
        }
      }

      g.update = p, g.parentNode = p.parentNode = v.parentNode = n.parentNode, a.push(g), l.push(p), f.push(v);
    }

    var r,
        i,
        u = -1,
        o = this.length;

    if (!arguments.length) {
      for (n = new Array(o = (r = this[0]).length); ++u < o;) {
        (i = r[u]) && (n[u] = i.__data__);
      }

      return n;
    }

    var a = Z([]),
        l = E([]),
        f = E([]);
    if ("function" == typeof n) for (; ++u < o;) {
      e(r = this[u], n.call(r, r.parentNode.__data__, u));
    } else for (; ++u < o;) {
      e(r = this[u], n);
    }
    return l.enter = function () {
      return a;
    }, l.exit = function () {
      return f;
    }, l;
  }, Co.datum = function (n) {
    return arguments.length ? this.property("__data__", n) : this.property("__data__");
  }, Co.filter = function (n) {
    var t,
        e,
        r,
        i = [];
    "function" != typeof n && (n = O(n));

    for (var u = 0, o = this.length; o > u; u++) {
      i.push(t = []), t.parentNode = (e = this[u]).parentNode;

      for (var a = 0, l = e.length; l > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
    }

    return E(i);
  }, Co.order = function () {
    for (var n = -1, t = this.length; ++n < t;) {
      for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;) {
        (e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e);
      }
    }

    return this;
  }, Co.sort = function (n) {
    n = I.apply(this, arguments);

    for (var t = -1, e = this.length; ++t < e;) {
      this[t].sort(n);
    }

    return this.order();
  }, Co.each = function (n) {
    return Y(this, function (t, e, r) {
      n.call(t, t.__data__, e, r);
    });
  }, Co.call = function (n) {
    var t = co(arguments);
    return n.apply(t[0] = this, t), this;
  }, Co.empty = function () {
    return !this.node();
  }, Co.node = function () {
    for (var n = 0, t = this.length; t > n; n++) {
      for (var e = this[n], r = 0, i = e.length; i > r; r++) {
        var u = e[r];
        if (u) return u;
      }
    }

    return null;
  }, Co.size = function () {
    var n = 0;
    return Y(this, function () {
      ++n;
    }), n;
  };
  var qo = [];
  ao.selection.enter = Z, ao.selection.enter.prototype = qo, qo.append = Co.append, qo.empty = Co.empty, qo.node = Co.node, qo.call = Co.call, qo.size = Co.size, qo.select = function (n) {
    for (var t, e, r, i, u, o = [], a = -1, l = this.length; ++a < l;) {
      r = (i = this[a]).update, o.push(t = []), t.parentNode = i.parentNode;

      for (var c = -1, f = i.length; ++c < f;) {
        (u = i[c]) ? (t.push(r[c] = e = n.call(i.parentNode, u.__data__, c, a)), e.__data__ = u.__data__) : t.push(null);
      }
    }

    return E(o);
  }, qo.insert = function (n, t) {
    return arguments.length < 2 && (t = V(this)), Co.insert.call(this, n, t);
  }, ao.select = function (t) {
    var e;
    return "string" == typeof t ? (e = [No(t, fo)], e.parentNode = fo.documentElement) : (e = [t], e.parentNode = n(t)), E([e]);
  }, ao.selectAll = function (n) {
    var t;
    return "string" == typeof n ? (t = co(Eo(n, fo)), t.parentNode = fo.documentElement) : (t = co(n), t.parentNode = null), E([t]);
  }, Co.on = function (n, t, e) {
    var r = arguments.length;

    if (3 > r) {
      if ("string" != typeof n) {
        2 > r && (t = !1);

        for (e in n) {
          this.each(X(e, n[e], t));
        }

        return this;
      }

      if (2 > r) return (r = this.node()["__on" + n]) && r._;
      e = !1;
    }

    return this.each(X(n, t, e));
  };
  var To = ao.map({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  });
  fo && To.forEach(function (n) {
    "on" + n in fo && To.remove(n);
  });
  var Ro,
      Do = 0;

  ao.mouse = function (n) {
    return J(n, k());
  };

  var Po = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
  ao.touch = function (n, t, e) {
    if (arguments.length < 3 && (e = t, t = k().changedTouches), t) for (var r, i = 0, u = t.length; u > i; ++i) {
      if ((r = t[i]).identifier === e) return J(n, r);
    }
  }, ao.behavior.drag = function () {
    function n() {
      this.on("mousedown.drag", u).on("touchstart.drag", o);
    }

    function e(n, t, e, u, o) {
      return function () {
        function a() {
          var n,
              e,
              r = t(h, v);
          r && (n = r[0] - M[0], e = r[1] - M[1], g |= n | e, M = r, p({
            type: "drag",
            x: r[0] + c[0],
            y: r[1] + c[1],
            dx: n,
            dy: e
          }));
        }

        function l() {
          t(h, v) && (y.on(u + d, null).on(o + d, null), m(g), p({
            type: "dragend"
          }));
        }

        var c,
            f = this,
            s = ao.event.target.correspondingElement || ao.event.target,
            h = f.parentNode,
            p = r.of(f, arguments),
            g = 0,
            v = n(),
            d = ".drag" + (null == v ? "" : "-" + v),
            y = ao.select(e(s)).on(u + d, a).on(o + d, l),
            m = W(s),
            M = t(h, v);
        i ? (c = i.apply(f, arguments), c = [c.x - M[0], c.y - M[1]]) : c = [0, 0], p({
          type: "dragstart"
        });
      };
    }

    var r = N(n, "drag", "dragstart", "dragend"),
        i = null,
        u = e(b, ao.mouse, t, "mousemove", "mouseup"),
        o = e(G, ao.touch, m, "touchmove", "touchend");
    return n.origin = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, ao.rebind(n, r, "on");
  }, ao.touches = function (n, t) {
    return arguments.length < 2 && (t = k().touches), t ? co(t).map(function (t) {
      var e = J(n, t);
      return e.identifier = t.identifier, e;
    }) : [];
  };
  var Uo = 1e-6,
      jo = Uo * Uo,
      Fo = Math.PI,
      Ho = 2 * Fo,
      Oo = Ho - Uo,
      Io = Fo / 2,
      Yo = Fo / 180,
      Zo = 180 / Fo,
      Vo = Math.SQRT2,
      Xo = 2,
      $o = 4;
  ao.interpolateZoom = function (n, t) {
    var e,
        r,
        i = n[0],
        u = n[1],
        o = n[2],
        a = t[0],
        l = t[1],
        c = t[2],
        f = a - i,
        s = l - u,
        h = f * f + s * s;
    if (jo > h) r = Math.log(c / o) / Vo, e = function e(n) {
      return [i + n * f, u + n * s, o * Math.exp(Vo * n * r)];
    };else {
      var p = Math.sqrt(h),
          g = (c * c - o * o + $o * h) / (2 * o * Xo * p),
          v = (c * c - o * o - $o * h) / (2 * c * Xo * p),
          d = Math.log(Math.sqrt(g * g + 1) - g),
          y = Math.log(Math.sqrt(v * v + 1) - v);
      r = (y - d) / Vo, e = function e(n) {
        var t = n * r,
            e = rn(d),
            a = o / (Xo * p) * (e * un(Vo * t + d) - en(d));
        return [i + a * f, u + a * s, o * e / rn(Vo * t + d)];
      };
    }
    return e.duration = 1e3 * r, e;
  }, ao.behavior.zoom = function () {
    function n(n) {
      n.on(L, s).on(Wo + ".zoom", p).on("dblclick.zoom", g).on(R, h);
    }

    function e(n) {
      return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k];
    }

    function r(n) {
      return [n[0] * k.k + k.x, n[1] * k.k + k.y];
    }

    function i(n) {
      k.k = Math.max(A[0], Math.min(A[1], n));
    }

    function u(n, t) {
      t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1];
    }

    function o(t, e, r, o) {
      t.__chart__ = {
        x: k.x,
        y: k.y,
        k: k.k
      }, i(Math.pow(2, o)), u(d = e, r), t = ao.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event);
    }

    function a() {
      b && b.domain(x.range().map(function (n) {
        return (n - k.x) / k.k;
      }).map(x.invert)), w && w.domain(_.range().map(function (n) {
        return (n - k.y) / k.k;
      }).map(_.invert));
    }

    function l(n) {
      z++ || n({
        type: "zoomstart"
      });
    }

    function c(n) {
      a(), n({
        type: "zoom",
        scale: k.k,
        translate: [k.x, k.y]
      });
    }

    function f(n) {
      --z || (n({
        type: "zoomend"
      }), d = null);
    }

    function s() {
      function n() {
        a = 1, u(ao.mouse(i), h), c(o);
      }

      function r() {
        s.on(q, null).on(T, null), p(a), f(o);
      }

      var i = this,
          o = D.of(i, arguments),
          a = 0,
          s = ao.select(t(i)).on(q, n).on(T, r),
          h = e(ao.mouse(i)),
          p = W(i);
      Il.call(i), l(o);
    }

    function h() {
      function n() {
        var n = ao.touches(g);
        return p = k.k, n.forEach(function (n) {
          n.identifier in d && (d[n.identifier] = e(n));
        }), n;
      }

      function t() {
        var t = ao.event.target;
        ao.select(t).on(x, r).on(b, a), _.push(t);

        for (var e = ao.event.changedTouches, i = 0, u = e.length; u > i; ++i) {
          d[e[i].identifier] = null;
        }

        var l = n(),
            c = Date.now();

        if (1 === l.length) {
          if (500 > c - M) {
            var f = l[0];
            o(g, f, d[f.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S();
          }

          M = c;
        } else if (l.length > 1) {
          var f = l[0],
              s = l[1],
              h = f[0] - s[0],
              p = f[1] - s[1];
          y = h * h + p * p;
        }
      }

      function r() {
        var n,
            t,
            e,
            r,
            o = ao.touches(g);
        Il.call(g);

        for (var a = 0, l = o.length; l > a; ++a, r = null) {
          if (e = o[a], r = d[e.identifier]) {
            if (t) break;
            n = e, t = r;
          }
        }

        if (r) {
          var f = (f = e[0] - n[0]) * f + (f = e[1] - n[1]) * f,
              s = y && Math.sqrt(f / y);
          n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], i(s * p);
        }

        M = null, u(n, t), c(v);
      }

      function a() {
        if (ao.event.touches.length) {
          for (var t = ao.event.changedTouches, e = 0, r = t.length; r > e; ++e) {
            delete d[t[e].identifier];
          }

          for (var i in d) {
            return void n();
          }
        }

        ao.selectAll(_).on(m, null), w.on(L, s).on(R, h), N(), f(v);
      }

      var p,
          g = this,
          v = D.of(g, arguments),
          d = {},
          y = 0,
          m = ".zoom-" + ao.event.changedTouches[0].identifier,
          x = "touchmove" + m,
          b = "touchend" + m,
          _ = [],
          w = ao.select(g),
          N = W(g);
      t(), l(v), w.on(L, null).on(R, t);
    }

    function p() {
      var n = D.of(this, arguments);
      m ? clearTimeout(m) : (Il.call(this), v = e(d = y || ao.mouse(this)), l(n)), m = setTimeout(function () {
        m = null, f(n);
      }, 50), S(), i(Math.pow(2, .002 * Bo()) * k.k), u(d, v), c(n);
    }

    function g() {
      var n = ao.mouse(this),
          t = Math.log(k.k) / Math.LN2;
      o(this, n, e(n), ao.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1);
    }

    var v,
        d,
        y,
        m,
        M,
        x,
        b,
        _,
        w,
        k = {
      x: 0,
      y: 0,
      k: 1
    },
        E = [960, 500],
        A = Jo,
        C = 250,
        z = 0,
        L = "mousedown.zoom",
        q = "mousemove.zoom",
        T = "mouseup.zoom",
        R = "touchstart.zoom",
        D = N(n, "zoomstart", "zoom", "zoomend");

    return Wo || (Wo = "onwheel" in fo ? (Bo = function Bo() {
      return -ao.event.deltaY * (ao.event.deltaMode ? 120 : 1);
    }, "wheel") : "onmousewheel" in fo ? (Bo = function Bo() {
      return ao.event.wheelDelta;
    }, "mousewheel") : (Bo = function Bo() {
      return -ao.event.detail;
    }, "MozMousePixelScroll")), n.event = function (n) {
      n.each(function () {
        var n = D.of(this, arguments),
            t = k;
        Hl ? ao.select(this).transition().each("start.zoom", function () {
          k = this.__chart__ || {
            x: 0,
            y: 0,
            k: 1
          }, l(n);
        }).tween("zoom:zoom", function () {
          var e = E[0],
              r = E[1],
              i = d ? d[0] : e / 2,
              u = d ? d[1] : r / 2,
              o = ao.interpolateZoom([(i - k.x) / k.k, (u - k.y) / k.k, e / k.k], [(i - t.x) / t.k, (u - t.y) / t.k, e / t.k]);
          return function (t) {
            var r = o(t),
                a = e / r[2];
            this.__chart__ = k = {
              x: i - r[0] * a,
              y: u - r[1] * a,
              k: a
            }, c(n);
          };
        }).each("interrupt.zoom", function () {
          f(n);
        }).each("end.zoom", function () {
          f(n);
        }) : (this.__chart__ = k, l(n), c(n), f(n));
      });
    }, n.translate = function (t) {
      return arguments.length ? (k = {
        x: +t[0],
        y: +t[1],
        k: k.k
      }, a(), n) : [k.x, k.y];
    }, n.scale = function (t) {
      return arguments.length ? (k = {
        x: k.x,
        y: k.y,
        k: null
      }, i(+t), a(), n) : k.k;
    }, n.scaleExtent = function (t) {
      return arguments.length ? (A = null == t ? Jo : [+t[0], +t[1]], n) : A;
    }, n.center = function (t) {
      return arguments.length ? (y = t && [+t[0], +t[1]], n) : y;
    }, n.size = function (t) {
      return arguments.length ? (E = t && [+t[0], +t[1]], n) : E;
    }, n.duration = function (t) {
      return arguments.length ? (C = +t, n) : C;
    }, n.x = function (t) {
      return arguments.length ? (b = t, x = t.copy(), k = {
        x: 0,
        y: 0,
        k: 1
      }, n) : b;
    }, n.y = function (t) {
      return arguments.length ? (w = t, _ = t.copy(), k = {
        x: 0,
        y: 0,
        k: 1
      }, n) : w;
    }, ao.rebind(n, D, "on");
  };
  var Bo,
      Wo,
      Jo = [0, 1 / 0];
  ao.color = an, an.prototype.toString = function () {
    return this.rgb() + "";
  }, ao.hsl = ln;
  var Go = ln.prototype = new an();
  Go.brighter = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, this.l / n);
  }, Go.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, n * this.l);
  }, Go.rgb = function () {
    return cn(this.h, this.s, this.l);
  }, ao.hcl = fn;
  var Ko = fn.prototype = new an();
  Ko.brighter = function (n) {
    return new fn(this.h, this.c, Math.min(100, this.l + Qo * (arguments.length ? n : 1)));
  }, Ko.darker = function (n) {
    return new fn(this.h, this.c, Math.max(0, this.l - Qo * (arguments.length ? n : 1)));
  }, Ko.rgb = function () {
    return sn(this.h, this.c, this.l).rgb();
  }, ao.lab = hn;
  var Qo = 18,
      na = .95047,
      ta = 1,
      ea = 1.08883,
      ra = hn.prototype = new an();
  ra.brighter = function (n) {
    return new hn(Math.min(100, this.l + Qo * (arguments.length ? n : 1)), this.a, this.b);
  }, ra.darker = function (n) {
    return new hn(Math.max(0, this.l - Qo * (arguments.length ? n : 1)), this.a, this.b);
  }, ra.rgb = function () {
    return pn(this.l, this.a, this.b);
  }, ao.rgb = mn;
  var ia = mn.prototype = new an();
  ia.brighter = function (n) {
    n = Math.pow(.7, arguments.length ? n : 1);
    var t = this.r,
        e = this.g,
        r = this.b,
        i = 30;
    return t || e || r ? (t && i > t && (t = i), e && i > e && (e = i), r && i > r && (r = i), new mn(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new mn(i, i, i);
  }, ia.darker = function (n) {
    return n = Math.pow(.7, arguments.length ? n : 1), new mn(n * this.r, n * this.g, n * this.b);
  }, ia.hsl = function () {
    return wn(this.r, this.g, this.b);
  }, ia.toString = function () {
    return "#" + bn(this.r) + bn(this.g) + bn(this.b);
  };
  var ua = ao.map({
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
  ua.forEach(function (n, t) {
    ua.set(n, Mn(t));
  }), ao.functor = En, ao.xhr = An(m), ao.dsv = function (n, t) {
    function e(n, e, u) {
      arguments.length < 3 && (u = e, e = null);
      var o = Cn(n, t, null == e ? r : i(e), u);
      return o.row = function (n) {
        return arguments.length ? o.response(null == (e = n) ? r : i(n)) : e;
      }, o;
    }

    function r(n) {
      return e.parse(n.responseText);
    }

    function i(n) {
      return function (t) {
        return e.parse(t.responseText, n);
      };
    }

    function u(t) {
      return t.map(o).join(n);
    }

    function o(n) {
      return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }

    var a = new RegExp('["' + n + "\n]"),
        l = n.charCodeAt(0);
    return e.parse = function (n, t) {
      var r;
      return e.parseRows(n, function (n, e) {
        if (r) return r(n, e - 1);
        var i = new Function("d", "return {" + n.map(function (n, t) {
          return JSON.stringify(n) + ": d[" + t + "]";
        }).join(",") + "}");
        r = t ? function (n, e) {
          return t(i(n), e);
        } : i;
      });
    }, e.parseRows = function (n, t) {
      function e() {
        if (f >= c) return o;
        if (i) return i = !1, u;
        var t = f;

        if (34 === n.charCodeAt(t)) {
          for (var e = t; e++ < c;) {
            if (34 === n.charCodeAt(e)) {
              if (34 !== n.charCodeAt(e + 1)) break;
              ++e;
            }
          }

          f = e + 2;
          var r = n.charCodeAt(e + 1);
          return 13 === r ? (i = !0, 10 === n.charCodeAt(e + 2) && ++f) : 10 === r && (i = !0), n.slice(t + 1, e).replace(/""/g, '"');
        }

        for (; c > f;) {
          var r = n.charCodeAt(f++),
              a = 1;
          if (10 === r) i = !0;else if (13 === r) i = !0, 10 === n.charCodeAt(f) && (++f, ++a);else if (r !== l) continue;
          return n.slice(t, f - a);
        }

        return n.slice(t);
      }

      for (var r, i, u = {}, o = {}, a = [], c = n.length, f = 0, s = 0; (r = e()) !== o;) {
        for (var h = []; r !== u && r !== o;) {
          h.push(r), r = e();
        }

        t && null == (h = t(h, s++)) || a.push(h);
      }

      return a;
    }, e.format = function (t) {
      if (Array.isArray(t[0])) return e.formatRows(t);
      var r = new y(),
          i = [];
      return t.forEach(function (n) {
        for (var t in n) {
          r.has(t) || i.push(r.add(t));
        }
      }), [i.map(o).join(n)].concat(t.map(function (t) {
        return i.map(function (n) {
          return o(t[n]);
        }).join(n);
      })).join("\n");
    }, e.formatRows = function (n) {
      return n.map(u).join("\n");
    }, e;
  }, ao.csv = ao.dsv(",", "text/csv"), ao.tsv = ao.dsv("	", "text/tab-separated-values");

  var oa,
      aa,
      la,
      ca,
      fa = this[x(this, "requestAnimationFrame")] || function (n) {
    setTimeout(n, 17);
  };

  ao.timer = function () {
    qn.apply(this, arguments);
  }, ao.timer.flush = function () {
    Rn(), Dn();
  }, ao.round = function (n, t) {
    return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n);
  };
  var sa = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);

  ao.formatPrefix = function (n, t) {
    var e = 0;
    return (n = +n) && (0 > n && (n *= -1), t && (n = ao.round(n, Pn(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), sa[8 + e / 3];
  };

  var ha = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
      pa = ao.map({
    b: function b(n) {
      return n.toString(2);
    },
    c: function c(n) {
      return String.fromCharCode(n);
    },
    o: function o(n) {
      return n.toString(8);
    },
    x: function x(n) {
      return n.toString(16);
    },
    X: function X(n) {
      return n.toString(16).toUpperCase();
    },
    g: function g(n, t) {
      return n.toPrecision(t);
    },
    e: function e(n, t) {
      return n.toExponential(t);
    },
    f: function f(n, t) {
      return n.toFixed(t);
    },
    r: function r(n, t) {
      return (n = ao.round(n, Pn(n, t))).toFixed(Math.max(0, Math.min(20, Pn(n * (1 + 1e-15), t))));
    }
  }),
      ga = ao.time = {},
      va = Date;
  Hn.prototype = {
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
      da.setUTCDate.apply(this._, arguments);
    },
    setDay: function setDay() {
      da.setUTCDay.apply(this._, arguments);
    },
    setFullYear: function setFullYear() {
      da.setUTCFullYear.apply(this._, arguments);
    },
    setHours: function setHours() {
      da.setUTCHours.apply(this._, arguments);
    },
    setMilliseconds: function setMilliseconds() {
      da.setUTCMilliseconds.apply(this._, arguments);
    },
    setMinutes: function setMinutes() {
      da.setUTCMinutes.apply(this._, arguments);
    },
    setMonth: function setMonth() {
      da.setUTCMonth.apply(this._, arguments);
    },
    setSeconds: function setSeconds() {
      da.setUTCSeconds.apply(this._, arguments);
    },
    setTime: function setTime() {
      da.setTime.apply(this._, arguments);
    }
  };
  var da = Date.prototype;
  ga.year = On(function (n) {
    return n = ga.day(n), n.setMonth(0, 1), n;
  }, function (n, t) {
    n.setFullYear(n.getFullYear() + t);
  }, function (n) {
    return n.getFullYear();
  }), ga.years = ga.year.range, ga.years.utc = ga.year.utc.range, ga.day = On(function (n) {
    var t = new va(2e3, 0);
    return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t;
  }, function (n, t) {
    n.setDate(n.getDate() + t);
  }, function (n) {
    return n.getDate() - 1;
  }), ga.days = ga.day.range, ga.days.utc = ga.day.utc.range, ga.dayOfYear = function (n) {
    var t = ga.year(n);
    return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5);
  }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) {
    t = 7 - t;
    var e = ga[n] = On(function (n) {
      return (n = ga.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n;
    }, function (n, t) {
      n.setDate(n.getDate() + 7 * Math.floor(t));
    }, function (n) {
      var e = ga.year(n).getDay();
      return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t);
    });
    ga[n + "s"] = e.range, ga[n + "s"].utc = e.utc.range, ga[n + "OfYear"] = function (n) {
      var e = ga.year(n).getDay();
      return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7);
    };
  }), ga.week = ga.sunday, ga.weeks = ga.sunday.range, ga.weeks.utc = ga.sunday.utc.range, ga.weekOfYear = ga.sundayOfYear;
  var ya = {
    "-": "",
    _: " ",
    0: "0"
  },
      ma = /^\s*\d+/,
      Ma = /^%/;

  ao.locale = function (n) {
    return {
      numberFormat: jn(n),
      timeFormat: Yn(n)
    };
  };

  var xa = ao.locale({
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
  ao.format = xa.numberFormat, ao.geo = {}, ft.prototype = {
    s: 0,
    t: 0,
    add: function add(n) {
      st(n, this.t, ba), st(ba.s, this.s, this), this.s ? this.t += ba.t : this.s = ba.t;
    },
    reset: function reset() {
      this.s = this.t = 0;
    },
    valueOf: function valueOf() {
      return this.s;
    }
  };
  var ba = new ft();

  ao.geo.stream = function (n, t) {
    n && _a.hasOwnProperty(n.type) ? _a[n.type](n, t) : ht(n, t);
  };

  var _a = {
    Feature: function Feature(n, t) {
      ht(n.geometry, t);
    },
    FeatureCollection: function FeatureCollection(n, t) {
      for (var e = n.features, r = -1, i = e.length; ++r < i;) {
        ht(e[r].geometry, t);
      }
    }
  },
      wa = {
    Sphere: function Sphere(n, t) {
      t.sphere();
    },
    Point: function Point(n, t) {
      n = n.coordinates, t.point(n[0], n[1], n[2]);
    },
    MultiPoint: function MultiPoint(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        n = e[r], t.point(n[0], n[1], n[2]);
      }
    },
    LineString: function LineString(n, t) {
      pt(n.coordinates, t, 0);
    },
    MultiLineString: function MultiLineString(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        pt(e[r], t, 0);
      }
    },
    Polygon: function Polygon(n, t) {
      gt(n.coordinates, t);
    },
    MultiPolygon: function MultiPolygon(n, t) {
      for (var e = n.coordinates, r = -1, i = e.length; ++r < i;) {
        gt(e[r], t);
      }
    },
    GeometryCollection: function GeometryCollection(n, t) {
      for (var e = n.geometries, r = -1, i = e.length; ++r < i;) {
        ht(e[r], t);
      }
    }
  };

  ao.geo.area = function (n) {
    return Sa = 0, ao.geo.stream(n, Na), Sa;
  };

  var Sa,
      ka = new ft(),
      Na = {
    sphere: function sphere() {
      Sa += 4 * Fo;
    },
    point: b,
    lineStart: b,
    lineEnd: b,
    polygonStart: function polygonStart() {
      ka.reset(), Na.lineStart = vt;
    },
    polygonEnd: function polygonEnd() {
      var n = 2 * ka;
      Sa += 0 > n ? 4 * Fo + n : n, Na.lineStart = Na.lineEnd = Na.point = b;
    }
  };
  ao.geo.bounds = function () {
    function n(n, t) {
      M.push(x = [f = n, h = n]), s > t && (s = t), t > p && (p = t);
    }

    function t(t, e) {
      var r = dt([t * Yo, e * Yo]);

      if (y) {
        var i = mt(y, r),
            u = [i[1], -i[0], 0],
            o = mt(u, i);
        bt(o), o = _t(o);
        var l = t - g,
            c = l > 0 ? 1 : -1,
            v = o[0] * Zo * c,
            d = xo(l) > 180;

        if (d ^ (v > c * g && c * t > v)) {
          var m = o[1] * Zo;
          m > p && (p = m);
        } else if (v = (v + 360) % 360 - 180, d ^ (v > c * g && c * t > v)) {
          var m = -o[1] * Zo;
          s > m && (s = m);
        } else s > e && (s = e), e > p && (p = e);

        d ? g > t ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t) : h >= f ? (f > t && (f = t), t > h && (h = t)) : t > g ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t);
      } else n(t, e);

      y = r, g = t;
    }

    function e() {
      b.point = t;
    }

    function r() {
      x[0] = f, x[1] = h, b.point = n, y = null;
    }

    function i(n, e) {
      if (y) {
        var r = n - g;
        m += xo(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
      } else v = n, d = e;

      Na.point(n, e), t(n, e);
    }

    function u() {
      Na.lineStart();
    }

    function o() {
      i(v, d), Na.lineEnd(), xo(m) > Uo && (f = -(h = 180)), x[0] = f, x[1] = h, y = null;
    }

    function a(n, t) {
      return (t -= n) < 0 ? t + 360 : t;
    }

    function l(n, t) {
      return n[0] - t[0];
    }

    function c(n, t) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }

    var f,
        s,
        h,
        p,
        g,
        v,
        d,
        y,
        m,
        M,
        x,
        b = {
      point: n,
      lineStart: e,
      lineEnd: r,
      polygonStart: function polygonStart() {
        b.point = i, b.lineStart = u, b.lineEnd = o, m = 0, Na.polygonStart();
      },
      polygonEnd: function polygonEnd() {
        Na.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > ka ? (f = -(h = 180), s = -(p = 90)) : m > Uo ? p = 90 : -Uo > m && (s = -90), x[0] = f, x[1] = h;
      }
    };
    return function (n) {
      p = h = -(f = s = 1 / 0), M = [], ao.geo.stream(n, b);
      var t = M.length;

      if (t) {
        M.sort(l);

        for (var e, r = 1, i = M[0], u = [i]; t > r; ++r) {
          e = M[r], c(e[0], i) || c(e[1], i) ? (a(i[0], e[1]) > a(i[0], i[1]) && (i[1] = e[1]), a(e[0], i[1]) > a(i[0], i[1]) && (i[0] = e[0])) : u.push(i = e);
        }

        for (var o, e, g = -(1 / 0), t = u.length - 1, r = 0, i = u[t]; t >= r; i = e, ++r) {
          e = u[r], (o = a(i[1], e[0])) > g && (g = o, f = e[0], h = i[1]);
        }
      }

      return M = x = null, f === 1 / 0 || s === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[f, s], [h, p]];
    };
  }(), ao.geo.centroid = function (n) {
    Ea = Aa = Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, ja);
    var t = Da,
        e = Pa,
        r = Ua,
        i = t * t + e * e + r * r;
    return jo > i && (t = qa, e = Ta, r = Ra, Uo > Aa && (t = Ca, e = za, r = La), i = t * t + e * e + r * r, jo > i) ? [NaN, NaN] : [Math.atan2(e, t) * Zo, tn(r / Math.sqrt(i)) * Zo];
  };
  var Ea,
      Aa,
      Ca,
      za,
      La,
      qa,
      Ta,
      Ra,
      Da,
      Pa,
      Ua,
      ja = {
    sphere: b,
    point: St,
    lineStart: Nt,
    lineEnd: Et,
    polygonStart: function polygonStart() {
      ja.lineStart = At;
    },
    polygonEnd: function polygonEnd() {
      ja.lineStart = Nt;
    }
  },
      Fa = Rt(zt, jt, Ht, [-Fo, -Fo / 2]),
      Ha = 1e9;
  ao.geo.clipExtent = function () {
    var n,
        t,
        e,
        r,
        i,
        u,
        o = {
      stream: function stream(n) {
        return i && (i.valid = !1), i = u(n), i.valid = !0, i;
      },
      extent: function extent(a) {
        return arguments.length ? (u = Zt(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), o) : [[n, t], [e, r]];
      }
    };
    return o.extent([[0, 0], [960, 500]]);
  }, (ao.geo.conicEqualArea = function () {
    return Vt(Xt);
  }).raw = Xt, ao.geo.albers = function () {
    return ao.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
  }, ao.geo.albersUsa = function () {
    function n(n) {
      var u = n[0],
          o = n[1];
      return t = null, e(u, o), t || (r(u, o), t) || i(u, o), t;
    }

    var t,
        e,
        r,
        i,
        u = ao.geo.albers(),
        o = ao.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        a = ao.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        l = {
      point: function point(n, e) {
        t = [n, e];
      }
    };
    return n.invert = function (n) {
      var t = u.scale(),
          e = u.translate(),
          r = (n[0] - e[0]) / t,
          i = (n[1] - e[1]) / t;
      return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? o : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? a : u).invert(n);
    }, n.stream = function (n) {
      var t = u.stream(n),
          e = o.stream(n),
          r = a.stream(n);
      return {
        point: function point(n, i) {
          t.point(n, i), e.point(n, i), r.point(n, i);
        },
        sphere: function sphere() {
          t.sphere(), e.sphere(), r.sphere();
        },
        lineStart: function lineStart() {
          t.lineStart(), e.lineStart(), r.lineStart();
        },
        lineEnd: function lineEnd() {
          t.lineEnd(), e.lineEnd(), r.lineEnd();
        },
        polygonStart: function polygonStart() {
          t.polygonStart(), e.polygonStart(), r.polygonStart();
        },
        polygonEnd: function polygonEnd() {
          t.polygonEnd(), e.polygonEnd(), r.polygonEnd();
        }
      };
    }, n.precision = function (t) {
      return arguments.length ? (u.precision(t), o.precision(t), a.precision(t), n) : u.precision();
    }, n.scale = function (t) {
      return arguments.length ? (u.scale(t), o.scale(.35 * t), a.scale(t), n.translate(u.translate())) : u.scale();
    }, n.translate = function (t) {
      if (!arguments.length) return u.translate();
      var c = u.scale(),
          f = +t[0],
          s = +t[1];
      return e = u.translate(t).clipExtent([[f - .455 * c, s - .238 * c], [f + .455 * c, s + .238 * c]]).stream(l).point, r = o.translate([f - .307 * c, s + .201 * c]).clipExtent([[f - .425 * c + Uo, s + .12 * c + Uo], [f - .214 * c - Uo, s + .234 * c - Uo]]).stream(l).point, i = a.translate([f - .205 * c, s + .212 * c]).clipExtent([[f - .214 * c + Uo, s + .166 * c + Uo], [f - .115 * c - Uo, s + .234 * c - Uo]]).stream(l).point, n;
    }, n.scale(1070);
  };
  var Oa,
      Ia,
      Ya,
      Za,
      Va,
      Xa,
      $a = {
    point: b,
    lineStart: b,
    lineEnd: b,
    polygonStart: function polygonStart() {
      Ia = 0, $a.lineStart = $t;
    },
    polygonEnd: function polygonEnd() {
      $a.lineStart = $a.lineEnd = $a.point = b, Oa += xo(Ia / 2);
    }
  },
      Ba = {
    point: Bt,
    lineStart: b,
    lineEnd: b,
    polygonStart: b,
    polygonEnd: b
  },
      Wa = {
    point: Gt,
    lineStart: Kt,
    lineEnd: Qt,
    polygonStart: function polygonStart() {
      Wa.lineStart = ne;
    },
    polygonEnd: function polygonEnd() {
      Wa.point = Gt, Wa.lineStart = Kt, Wa.lineEnd = Qt;
    }
  };
  ao.geo.path = function () {
    function n(n) {
      return n && ("function" == typeof a && u.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = i(u)), ao.geo.stream(n, o)), u.result();
    }

    function t() {
      return o = null, n;
    }

    var e,
        r,
        i,
        u,
        o,
        a = 4.5;
    return n.area = function (n) {
      return Oa = 0, ao.geo.stream(n, i($a)), Oa;
    }, n.centroid = function (n) {
      return Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, i(Wa)), Ua ? [Da / Ua, Pa / Ua] : Ra ? [qa / Ra, Ta / Ra] : La ? [Ca / La, za / La] : [NaN, NaN];
    }, n.bounds = function (n) {
      return Va = Xa = -(Ya = Za = 1 / 0), ao.geo.stream(n, i(Ba)), [[Ya, Za], [Va, Xa]];
    }, n.projection = function (n) {
      return arguments.length ? (i = (e = n) ? n.stream || re(n) : m, t()) : e;
    }, n.context = function (n) {
      return arguments.length ? (u = null == (r = n) ? new Wt() : new te(n), "function" != typeof a && u.pointRadius(a), t()) : r;
    }, n.pointRadius = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : (u.pointRadius(+t), +t), n) : a;
    }, n.projection(ao.geo.albersUsa()).context(null);
  }, ao.geo.transform = function (n) {
    return {
      stream: function stream(t) {
        var e = new ie(t);

        for (var r in n) {
          e[r] = n[r];
        }

        return e;
      }
    };
  }, ie.prototype = {
    point: function point(n, t) {
      this.stream.point(n, t);
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
  }, ao.geo.projection = oe, ao.geo.projectionMutator = ae, (ao.geo.equirectangular = function () {
    return oe(ce);
  }).raw = ce.invert = ce, ao.geo.rotation = function (n) {
    function t(t) {
      return t = n(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t;
    }

    return n = se(n[0] % 360 * Yo, n[1] * Yo, n.length > 2 ? n[2] * Yo : 0), t.invert = function (t) {
      return t = n.invert(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t;
    }, t;
  }, fe.invert = ce, ao.geo.circle = function () {
    function n() {
      var n = "function" == typeof r ? r.apply(this, arguments) : r,
          t = se(-n[0] * Yo, -n[1] * Yo, 0).invert,
          i = [];
      return e(null, null, 1, {
        point: function point(n, e) {
          i.push(n = t(n, e)), n[0] *= Zo, n[1] *= Zo;
        }
      }), {
        type: "Polygon",
        coordinates: [i]
      };
    }

    var t,
        e,
        r = [0, 0],
        i = 6;
    return n.origin = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.angle = function (r) {
      return arguments.length ? (e = ve((t = +r) * Yo, i * Yo), n) : t;
    }, n.precision = function (r) {
      return arguments.length ? (e = ve(t * Yo, (i = +r) * Yo), n) : i;
    }, n.angle(90);
  }, ao.geo.distance = function (n, t) {
    var e,
        r = (t[0] - n[0]) * Yo,
        i = n[1] * Yo,
        u = t[1] * Yo,
        o = Math.sin(r),
        a = Math.cos(r),
        l = Math.sin(i),
        c = Math.cos(i),
        f = Math.sin(u),
        s = Math.cos(u);
    return Math.atan2(Math.sqrt((e = s * o) * e + (e = c * f - l * s * a) * e), l * f + c * s * a);
  }, ao.geo.graticule = function () {
    function n() {
      return {
        type: "MultiLineString",
        coordinates: t()
      };
    }

    function t() {
      return ao.range(Math.ceil(u / d) * d, i, d).map(h).concat(ao.range(Math.ceil(c / y) * y, l, y).map(p)).concat(ao.range(Math.ceil(r / g) * g, e, g).filter(function (n) {
        return xo(n % d) > Uo;
      }).map(f)).concat(ao.range(Math.ceil(a / v) * v, o, v).filter(function (n) {
        return xo(n % y) > Uo;
      }).map(s));
    }

    var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c,
        f,
        s,
        h,
        p,
        g = 10,
        v = g,
        d = 90,
        y = 360,
        m = 2.5;
    return n.lines = function () {
      return t().map(function (n) {
        return {
          type: "LineString",
          coordinates: n
        };
      });
    }, n.outline = function () {
      return {
        type: "Polygon",
        coordinates: [h(u).concat(p(l).slice(1), h(i).reverse().slice(1), p(c).reverse().slice(1))]
      };
    }, n.extent = function (t) {
      return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent();
    }, n.majorExtent = function (t) {
      return arguments.length ? (u = +t[0][0], i = +t[1][0], c = +t[0][1], l = +t[1][1], u > i && (t = u, u = i, i = t), c > l && (t = c, c = l, l = t), n.precision(m)) : [[u, c], [i, l]];
    }, n.minorExtent = function (t) {
      return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(m)) : [[r, a], [e, o]];
    }, n.step = function (t) {
      return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep();
    }, n.majorStep = function (t) {
      return arguments.length ? (d = +t[0], y = +t[1], n) : [d, y];
    }, n.minorStep = function (t) {
      return arguments.length ? (g = +t[0], v = +t[1], n) : [g, v];
    }, n.precision = function (t) {
      return arguments.length ? (m = +t, f = ye(a, o, 90), s = me(r, e, m), h = ye(c, l, 90), p = me(u, i, m), n) : m;
    }, n.majorExtent([[-180, -90 + Uo], [180, 90 - Uo]]).minorExtent([[-180, -80 - Uo], [180, 80 + Uo]]);
  }, ao.geo.greatArc = function () {
    function n() {
      return {
        type: "LineString",
        coordinates: [t || r.apply(this, arguments), e || i.apply(this, arguments)]
      };
    }

    var t,
        e,
        r = Me,
        i = xe;
    return n.distance = function () {
      return ao.geo.distance(t || r.apply(this, arguments), e || i.apply(this, arguments));
    }, n.source = function (e) {
      return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r;
    }, n.target = function (t) {
      return arguments.length ? (i = t, e = "function" == typeof t ? null : t, n) : i;
    }, n.precision = function () {
      return arguments.length ? n : 0;
    }, n;
  }, ao.geo.interpolate = function (n, t) {
    return be(n[0] * Yo, n[1] * Yo, t[0] * Yo, t[1] * Yo);
  }, ao.geo.length = function (n) {
    return Ja = 0, ao.geo.stream(n, Ga), Ja;
  };
  var Ja,
      Ga = {
    sphere: b,
    point: b,
    lineStart: _e,
    lineEnd: b,
    polygonStart: b,
    polygonEnd: b
  },
      Ka = we(function (n) {
    return Math.sqrt(2 / (1 + n));
  }, function (n) {
    return 2 * Math.asin(n / 2);
  });
  (ao.geo.azimuthalEqualArea = function () {
    return oe(Ka);
  }).raw = Ka;
  var Qa = we(function (n) {
    var t = Math.acos(n);
    return t && t / Math.sin(t);
  }, m);
  (ao.geo.azimuthalEquidistant = function () {
    return oe(Qa);
  }).raw = Qa, (ao.geo.conicConformal = function () {
    return Vt(Se);
  }).raw = Se, (ao.geo.conicEquidistant = function () {
    return Vt(ke);
  }).raw = ke;
  var nl = we(function (n) {
    return 1 / n;
  }, Math.atan);
  (ao.geo.gnomonic = function () {
    return oe(nl);
  }).raw = nl, Ne.invert = function (n, t) {
    return [n, 2 * Math.atan(Math.exp(t)) - Io];
  }, (ao.geo.mercator = function () {
    return Ee(Ne);
  }).raw = Ne;
  var tl = we(function () {
    return 1;
  }, Math.asin);
  (ao.geo.orthographic = function () {
    return oe(tl);
  }).raw = tl;
  var el = we(function (n) {
    return 1 / (1 + n);
  }, function (n) {
    return 2 * Math.atan(n);
  });
  (ao.geo.stereographic = function () {
    return oe(el);
  }).raw = el, Ae.invert = function (n, t) {
    return [-t, 2 * Math.atan(Math.exp(n)) - Io];
  }, (ao.geo.transverseMercator = function () {
    var n = Ee(Ae),
        t = n.center,
        e = n.rotate;
    return n.center = function (n) {
      return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]]);
    }, n.rotate = function (n) {
      return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]);
    }, e([0, 0, 90]);
  }).raw = Ae, ao.geom = {}, ao.geom.hull = function (n) {
    function t(n) {
      if (n.length < 3) return [];
      var t,
          i = En(e),
          u = En(r),
          o = n.length,
          a = [],
          l = [];

      for (t = 0; o > t; t++) {
        a.push([+i.call(this, n[t], t), +u.call(this, n[t], t), t]);
      }

      for (a.sort(qe), t = 0; o > t; t++) {
        l.push([a[t][0], -a[t][1]]);
      }

      var c = Le(a),
          f = Le(l),
          s = f[0] === c[0],
          h = f[f.length - 1] === c[c.length - 1],
          p = [];

      for (t = c.length - 1; t >= 0; --t) {
        p.push(n[a[c[t]][2]]);
      }

      for (t = +s; t < f.length - h; ++t) {
        p.push(n[a[f[t]][2]]);
      }

      return p;
    }

    var e = Ce,
        r = ze;
    return arguments.length ? t(n) : (t.x = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.y = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t);
  }, ao.geom.polygon = function (n) {
    return ko(n, rl), n;
  };
  var rl = ao.geom.polygon.prototype = [];
  rl.area = function () {
    for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;) {
      n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1];
    }

    return .5 * i;
  }, rl.centroid = function (n) {
    var t,
        e,
        r = -1,
        i = this.length,
        u = 0,
        o = 0,
        a = this[i - 1];

    for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;) {
      t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], u += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
    }

    return [u * n, o * n];
  }, rl.clip = function (n) {
    for (var t, e, r, i, u, o, a = De(n), l = -1, c = this.length - De(this), f = this[c - 1]; ++l < c;) {
      for (t = n.slice(), n.length = 0, i = this[l], u = t[(r = t.length - a) - 1], e = -1; ++e < r;) {
        o = t[e], Te(o, f, i) ? (Te(u, f, i) || n.push(Re(u, o, f, i)), n.push(o)) : Te(u, f, i) && n.push(Re(u, o, f, i)), u = o;
      }

      a && n.push(n[0]), f = i;
    }

    return n;
  };
  var il,
      ul,
      ol,
      al,
      ll,
      cl = [],
      fl = [];
  Ye.prototype.prepare = function () {
    for (var n, t = this.edges, e = t.length; e--;) {
      n = t[e].edge, n.b && n.a || t.splice(e, 1);
    }

    return t.sort(Ve), t.length;
  }, tr.prototype = {
    start: function start() {
      return this.edge.l === this.site ? this.edge.a : this.edge.b;
    },
    end: function end() {
      return this.edge.l === this.site ? this.edge.b : this.edge.a;
    }
  }, er.prototype = {
    insert: function insert(n, t) {
      var e, r, i;

      if (n) {
        if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
          for (n = n.R; n.L;) {
            n = n.L;
          }

          n.L = t;
        } else n.R = t;

        e = n;
      } else this._ ? (n = or(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);

      for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) {
        r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && (ir(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ur(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (ur(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ir(this, r))), e = n.U;
      }

      this._.C = !1;
    },
    remove: function remove(n) {
      n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
      var t,
          e,
          r,
          i = n.U,
          u = n.L,
          o = n.R;

      if (e = u ? o ? or(o) : u : o, i ? i.L === n ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = n.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = o, o.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r) {
        if (n && n.C) return void (n.C = !1);

        do {
          if (n === this._) break;

          if (n === i.L) {
            if (t = i.R, t.C && (t.C = !1, i.C = !0, ir(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
              t.R && t.R.C || (t.L.C = !1, t.C = !0, ur(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, ir(this, i), n = this._;
              break;
            }
          } else if (t = i.L, t.C && (t.C = !1, i.C = !0, ur(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
            t.L && t.L.C || (t.R.C = !1, t.C = !0, ir(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, ur(this, i), n = this._;
            break;
          }

          t.C = !0, n = i, i = i.U;
        } while (!n.C);

        n && (n.C = !1);
      }
    }
  }, ao.geom.voronoi = function (n) {
    function t(n) {
      var t = new Array(n.length),
          r = a[0][0],
          i = a[0][1],
          u = a[1][0],
          o = a[1][1];
      return ar(e(n), a).cells.forEach(function (e, a) {
        var l = e.edges,
            c = e.site,
            f = t[a] = l.length ? l.map(function (n) {
          var t = n.start();
          return [t.x, t.y];
        }) : c.x >= r && c.x <= u && c.y >= i && c.y <= o ? [[r, o], [u, o], [u, i], [r, i]] : [];
        f.point = n[a];
      }), t;
    }

    function e(n) {
      return n.map(function (n, t) {
        return {
          x: Math.round(u(n, t) / Uo) * Uo,
          y: Math.round(o(n, t) / Uo) * Uo,
          i: t
        };
      });
    }

    var r = Ce,
        i = ze,
        u = r,
        o = i,
        a = sl;
    return n ? t(n) : (t.links = function (n) {
      return ar(e(n)).edges.filter(function (n) {
        return n.l && n.r;
      }).map(function (t) {
        return {
          source: n[t.l.i],
          target: n[t.r.i]
        };
      });
    }, t.triangles = function (n) {
      var t = [];
      return ar(e(n)).cells.forEach(function (e, r) {
        for (var i, u, o = e.site, a = e.edges.sort(Ve), l = -1, c = a.length, f = a[c - 1].edge, s = f.l === o ? f.r : f.l; ++l < c;) {
          i = f, u = s, f = a[l].edge, s = f.l === o ? f.r : f.l, r < u.i && r < s.i && cr(o, u, s) < 0 && t.push([n[r], n[u.i], n[s.i]]);
        }
      }), t;
    }, t.x = function (n) {
      return arguments.length ? (u = En(r = n), t) : r;
    }, t.y = function (n) {
      return arguments.length ? (o = En(i = n), t) : i;
    }, t.clipExtent = function (n) {
      return arguments.length ? (a = null == n ? sl : n, t) : a === sl ? null : a;
    }, t.size = function (n) {
      return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === sl ? null : a && a[1];
    }, t);
  };
  var sl = [[-1e6, -1e6], [1e6, 1e6]];
  ao.geom.delaunay = function (n) {
    return ao.geom.voronoi().triangles(n);
  }, ao.geom.quadtree = function (n, t, e, r, i) {
    function u(n) {
      function u(n, t, e, r, i, u, o, a) {
        if (!isNaN(e) && !isNaN(r)) if (n.leaf) {
          var l = n.x,
              f = n.y;
          if (null != l) {
            if (xo(l - e) + xo(f - r) < .01) c(n, t, e, r, i, u, o, a);else {
              var s = n.point;
              n.x = n.y = n.point = null, c(n, s, l, f, i, u, o, a), c(n, t, e, r, i, u, o, a);
            }
          } else n.x = e, n.y = r, n.point = t;
        } else c(n, t, e, r, i, u, o, a);
      }

      function c(n, t, e, r, i, o, a, l) {
        var c = .5 * (i + a),
            f = .5 * (o + l),
            s = e >= c,
            h = r >= f,
            p = h << 1 | s;
        n.leaf = !1, n = n.nodes[p] || (n.nodes[p] = hr()), s ? i = c : a = c, h ? o = f : l = f, u(n, t, e, r, i, o, a, l);
      }

      var f,
          s,
          h,
          p,
          g,
          v,
          d,
          y,
          m,
          M = En(a),
          x = En(l);
      if (null != t) v = t, d = e, y = r, m = i;else if (y = m = -(v = d = 1 / 0), s = [], h = [], g = n.length, o) for (p = 0; g > p; ++p) {
        f = n[p], f.x < v && (v = f.x), f.y < d && (d = f.y), f.x > y && (y = f.x), f.y > m && (m = f.y), s.push(f.x), h.push(f.y);
      } else for (p = 0; g > p; ++p) {
        var b = +M(f = n[p], p),
            _ = +x(f, p);

        v > b && (v = b), d > _ && (d = _), b > y && (y = b), _ > m && (m = _), s.push(b), h.push(_);
      }
      var w = y - v,
          S = m - d;
      w > S ? m = d + w : y = v + S;
      var k = hr();

      if (k.add = function (n) {
        u(k, n, +M(n, ++p), +x(n, p), v, d, y, m);
      }, k.visit = function (n) {
        pr(n, k, v, d, y, m);
      }, k.find = function (n) {
        return gr(k, n[0], n[1], v, d, y, m);
      }, p = -1, null == t) {
        for (; ++p < g;) {
          u(k, n[p], s[p], h[p], v, d, y, m);
        }

        --p;
      } else n.forEach(k.add);

      return s = h = n = f = null, k;
    }

    var o,
        a = Ce,
        l = ze;
    return (o = arguments.length) ? (a = fr, l = sr, 3 === o && (i = e, r = t, e = t = 0), u(n)) : (u.x = function (n) {
      return arguments.length ? (a = n, u) : a;
    }, u.y = function (n) {
      return arguments.length ? (l = n, u) : l;
    }, u.extent = function (n) {
      return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), u) : null == t ? null : [[t, e], [r, i]];
    }, u.size = function (n) {
      return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), u) : null == t ? null : [r - t, i - e];
    }, u);
  }, ao.interpolateRgb = vr, ao.interpolateObject = dr, ao.interpolateNumber = yr, ao.interpolateString = mr;
  var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      pl = new RegExp(hl.source, "g");
  ao.interpolate = Mr, ao.interpolators = [function (n, t) {
    var e = _typeof(t);

    return ("string" === e ? ua.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? vr : mr : t instanceof an ? vr : Array.isArray(t) ? xr : "object" === e && isNaN(t) ? dr : yr)(n, t);
  }], ao.interpolateArray = xr;

  var gl = function gl() {
    return m;
  },
      vl = ao.map({
    linear: gl,
    poly: Er,
    quad: function quad() {
      return Sr;
    },
    cubic: function cubic() {
      return kr;
    },
    sin: function sin() {
      return Ar;
    },
    exp: function exp() {
      return Cr;
    },
    circle: function circle() {
      return zr;
    },
    elastic: Lr,
    back: qr,
    bounce: function bounce() {
      return Tr;
    }
  }),
      dl = ao.map({
    "in": m,
    out: _r,
    "in-out": wr,
    "out-in": function outIn(n) {
      return wr(_r(n));
    }
  });

  ao.ease = function (n) {
    var t = n.indexOf("-"),
        e = t >= 0 ? n.slice(0, t) : n,
        r = t >= 0 ? n.slice(t + 1) : "in";
    return e = vl.get(e) || gl, r = dl.get(r) || m, br(r(e.apply(null, lo.call(arguments, 1))));
  }, ao.interpolateHcl = Rr, ao.interpolateHsl = Dr, ao.interpolateLab = Pr, ao.interpolateRound = Ur, ao.transform = function (n) {
    var t = fo.createElementNS(ao.ns.prefix.svg, "g");
    return (ao.transform = function (n) {
      if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate();
      }

      return new jr(e ? e.matrix : yl);
    })(n);
  }, jr.prototype.toString = function () {
    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
  };
  var yl = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  };
  ao.interpolateTransform = $r, ao.layout = {}, ao.layout.bundle = function () {
    return function (n) {
      for (var t = [], e = -1, r = n.length; ++e < r;) {
        t.push(Jr(n[e]));
      }

      return t;
    };
  }, ao.layout.chord = function () {
    function n() {
      var n,
          c,
          s,
          h,
          p,
          g = {},
          v = [],
          d = ao.range(u),
          y = [];

      for (e = [], r = [], n = 0, h = -1; ++h < u;) {
        for (c = 0, p = -1; ++p < u;) {
          c += i[h][p];
        }

        v.push(c), y.push(ao.range(u)), n += c;
      }

      for (o && d.sort(function (n, t) {
        return o(v[n], v[t]);
      }), a && y.forEach(function (n, t) {
        n.sort(function (n, e) {
          return a(i[t][n], i[t][e]);
        });
      }), n = (Ho - f * u) / n, c = 0, h = -1; ++h < u;) {
        for (s = c, p = -1; ++p < u;) {
          var m = d[h],
              M = y[m][p],
              x = i[m][M],
              b = c,
              _ = c += x * n;

          g[m + "-" + M] = {
            index: m,
            subindex: M,
            startAngle: b,
            endAngle: _,
            value: x
          };
        }

        r[m] = {
          index: m,
          startAngle: s,
          endAngle: c,
          value: v[m]
        }, c += f;
      }

      for (h = -1; ++h < u;) {
        for (p = h - 1; ++p < u;) {
          var w = g[h + "-" + p],
              S = g[p + "-" + h];
          (w.value || S.value) && e.push(w.value < S.value ? {
            source: S,
            target: w
          } : {
            source: w,
            target: S
          });
        }
      }

      l && t();
    }

    function t() {
      e.sort(function (n, t) {
        return l((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2);
      });
    }

    var e,
        r,
        i,
        u,
        o,
        a,
        l,
        c = {},
        f = 0;
    return c.matrix = function (n) {
      return arguments.length ? (u = (i = n) && i.length, e = r = null, c) : i;
    }, c.padding = function (n) {
      return arguments.length ? (f = n, e = r = null, c) : f;
    }, c.sortGroups = function (n) {
      return arguments.length ? (o = n, e = r = null, c) : o;
    }, c.sortSubgroups = function (n) {
      return arguments.length ? (a = n, e = null, c) : a;
    }, c.sortChords = function (n) {
      return arguments.length ? (l = n, e && t(), c) : l;
    }, c.chords = function () {
      return e || n(), e;
    }, c.groups = function () {
      return r || n(), r;
    }, c;
  }, ao.layout.force = function () {
    function n(n) {
      return function (t, e, r, i) {
        if (t.point !== n) {
          var u = t.cx - n.x,
              o = t.cy - n.y,
              a = i - e,
              l = u * u + o * o;

          if (l > a * a / y) {
            if (v > l) {
              var c = t.charge / l;
              n.px -= u * c, n.py -= o * c;
            }

            return !0;
          }

          if (t.point && l && v > l) {
            var c = t.pointCharge / l;
            n.px -= u * c, n.py -= o * c;
          }
        }

        return !t.charge;
      };
    }

    function t(n) {
      n.px = ao.event.x, n.py = ao.event.y, l.resume();
    }

    var e,
        r,
        i,
        u,
        o,
        a,
        l = {},
        c = ao.dispatch("start", "tick", "end"),
        f = [1, 1],
        s = .9,
        h = ml,
        p = Ml,
        g = -30,
        v = xl,
        d = .1,
        y = .64,
        M = [],
        x = [];
    return l.tick = function () {
      if ((i *= .99) < .005) return e = null, c.end({
        type: "end",
        alpha: i = 0
      }), !0;
      var t,
          r,
          l,
          h,
          p,
          v,
          y,
          m,
          b,
          _ = M.length,
          w = x.length;

      for (r = 0; w > r; ++r) {
        l = x[r], h = l.source, p = l.target, m = p.x - h.x, b = p.y - h.y, (v = m * m + b * b) && (v = i * o[r] * ((v = Math.sqrt(v)) - u[r]) / v, m *= v, b *= v, p.x -= m * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= b * y, h.x += m * (y = 1 - y), h.y += b * y);
      }

      if ((y = i * d) && (m = f[0] / 2, b = f[1] / 2, r = -1, y)) for (; ++r < _;) {
        l = M[r], l.x += (m - l.x) * y, l.y += (b - l.y) * y;
      }
      if (g) for (ri(t = ao.geom.quadtree(M), i, a), r = -1; ++r < _;) {
        (l = M[r]).fixed || t.visit(n(l));
      }

      for (r = -1; ++r < _;) {
        l = M[r], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * s, l.y -= (l.py - (l.py = l.y)) * s);
      }

      c.tick({
        type: "tick",
        alpha: i
      });
    }, l.nodes = function (n) {
      return arguments.length ? (M = n, l) : M;
    }, l.links = function (n) {
      return arguments.length ? (x = n, l) : x;
    }, l.size = function (n) {
      return arguments.length ? (f = n, l) : f;
    }, l.linkDistance = function (n) {
      return arguments.length ? (h = "function" == typeof n ? n : +n, l) : h;
    }, l.distance = l.linkDistance, l.linkStrength = function (n) {
      return arguments.length ? (p = "function" == typeof n ? n : +n, l) : p;
    }, l.friction = function (n) {
      return arguments.length ? (s = +n, l) : s;
    }, l.charge = function (n) {
      return arguments.length ? (g = "function" == typeof n ? n : +n, l) : g;
    }, l.chargeDistance = function (n) {
      return arguments.length ? (v = n * n, l) : Math.sqrt(v);
    }, l.gravity = function (n) {
      return arguments.length ? (d = +n, l) : d;
    }, l.theta = function (n) {
      return arguments.length ? (y = n * n, l) : Math.sqrt(y);
    }, l.alpha = function (n) {
      return arguments.length ? (n = +n, i ? n > 0 ? i = n : (e.c = null, e.t = NaN, e = null, c.end({
        type: "end",
        alpha: i = 0
      })) : n > 0 && (c.start({
        type: "start",
        alpha: i = n
      }), e = qn(l.tick)), l) : i;
    }, l.start = function () {
      function n(n, r) {
        if (!e) {
          for (e = new Array(i), l = 0; i > l; ++l) {
            e[l] = [];
          }

          for (l = 0; c > l; ++l) {
            var u = x[l];
            e[u.source.index].push(u.target), e[u.target.index].push(u.source);
          }
        }

        for (var o, a = e[t], l = -1, f = a.length; ++l < f;) {
          if (!isNaN(o = a[l][n])) return o;
        }

        return Math.random() * r;
      }

      var t,
          e,
          r,
          i = M.length,
          c = x.length,
          s = f[0],
          v = f[1];

      for (t = 0; i > t; ++t) {
        (r = M[t]).index = t, r.weight = 0;
      }

      for (t = 0; c > t; ++t) {
        r = x[t], "number" == typeof r.source && (r.source = M[r.source]), "number" == typeof r.target && (r.target = M[r.target]), ++r.source.weight, ++r.target.weight;
      }

      for (t = 0; i > t; ++t) {
        r = M[t], isNaN(r.x) && (r.x = n("x", s)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
      }

      if (u = [], "function" == typeof h) for (t = 0; c > t; ++t) {
        u[t] = +h.call(this, x[t], t);
      } else for (t = 0; c > t; ++t) {
        u[t] = h;
      }
      if (o = [], "function" == typeof p) for (t = 0; c > t; ++t) {
        o[t] = +p.call(this, x[t], t);
      } else for (t = 0; c > t; ++t) {
        o[t] = p;
      }
      if (a = [], "function" == typeof g) for (t = 0; i > t; ++t) {
        a[t] = +g.call(this, M[t], t);
      } else for (t = 0; i > t; ++t) {
        a[t] = g;
      }
      return l.resume();
    }, l.resume = function () {
      return l.alpha(.1);
    }, l.stop = function () {
      return l.alpha(0);
    }, l.drag = function () {
      return r || (r = ao.behavior.drag().origin(m).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", ni)), arguments.length ? void this.on("mouseover.force", ti).on("mouseout.force", ei).call(r) : r;
    }, ao.rebind(l, c, "on");
  };
  var ml = 20,
      Ml = 1,
      xl = 1 / 0;
  ao.layout.hierarchy = function () {
    function n(i) {
      var u,
          o = [i],
          a = [];

      for (i.depth = 0; null != (u = o.pop());) {
        if (a.push(u), (c = e.call(n, u, u.depth)) && (l = c.length)) {
          for (var l, c, f; --l >= 0;) {
            o.push(f = c[l]), f.parent = u, f.depth = u.depth + 1;
          }

          r && (u.value = 0), u.children = c;
        } else r && (u.value = +r.call(n, u, u.depth) || 0), delete u.children;
      }

      return oi(i, function (n) {
        var e, i;
        t && (e = n.children) && e.sort(t), r && (i = n.parent) && (i.value += n.value);
      }), a;
    }

    var t = ci,
        e = ai,
        r = li;
    return n.sort = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.children = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.value = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.revalue = function (t) {
      return r && (ui(t, function (n) {
        n.children && (n.value = 0);
      }), oi(t, function (t) {
        var e;
        t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value);
      })), t;
    }, n;
  }, ao.layout.partition = function () {
    function n(t, e, r, i) {
      var u = t.children;

      if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (o = u.length)) {
        var o,
            a,
            l,
            c = -1;

        for (r = t.value ? r / t.value : 0; ++c < o;) {
          n(a = u[c], e, l = a.value * r, i), e += l;
        }
      }
    }

    function t(n) {
      var e = n.children,
          r = 0;
      if (e && (i = e.length)) for (var i, u = -1; ++u < i;) {
        r = Math.max(r, t(e[u]));
      }
      return 1 + r;
    }

    function e(e, u) {
      var o = r.call(this, e, u);
      return n(o[0], 0, i[0], i[1] / t(o[0])), o;
    }

    var r = ao.layout.hierarchy(),
        i = [1, 1];
    return e.size = function (n) {
      return arguments.length ? (i = n, e) : i;
    }, ii(e, r);
  }, ao.layout.pie = function () {
    function n(o) {
      var a,
          l = o.length,
          c = o.map(function (e, r) {
        return +t.call(n, e, r);
      }),
          f = +("function" == typeof r ? r.apply(this, arguments) : r),
          s = ("function" == typeof i ? i.apply(this, arguments) : i) - f,
          h = Math.min(Math.abs(s) / l, +("function" == typeof u ? u.apply(this, arguments) : u)),
          p = h * (0 > s ? -1 : 1),
          g = ao.sum(c),
          v = g ? (s - l * p) / g : 0,
          d = ao.range(l),
          y = [];
      return null != e && d.sort(e === bl ? function (n, t) {
        return c[t] - c[n];
      } : function (n, t) {
        return e(o[n], o[t]);
      }), d.forEach(function (n) {
        y[n] = {
          data: o[n],
          value: a = c[n],
          startAngle: f,
          endAngle: f += a * v + p,
          padAngle: h
        };
      }), y;
    }

    var t = Number,
        e = bl,
        r = 0,
        i = Ho,
        u = 0;
    return n.value = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.sort = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.startAngle = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.endAngle = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.padAngle = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n;
  };
  var bl = {};

  ao.layout.stack = function () {
    function n(a, l) {
      if (!(h = a.length)) return a;
      var c = a.map(function (e, r) {
        return t.call(n, e, r);
      }),
          f = c.map(function (t) {
        return t.map(function (t, e) {
          return [u.call(n, t, e), o.call(n, t, e)];
        });
      }),
          s = e.call(n, f, l);
      c = ao.permute(c, s), f = ao.permute(f, s);
      var h,
          p,
          g,
          v,
          d = r.call(n, f, l),
          y = c[0].length;

      for (g = 0; y > g; ++g) {
        for (i.call(n, c[0][g], v = d[g], f[0][g][1]), p = 1; h > p; ++p) {
          i.call(n, c[p][g], v += f[p - 1][g][1], f[p][g][1]);
        }
      }

      return a;
    }

    var t = m,
        e = gi,
        r = vi,
        i = pi,
        u = si,
        o = hi;
    return n.values = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.order = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : _l.get(t) || gi, n) : e;
    }, n.offset = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : wl.get(t) || vi, n) : r;
    }, n.x = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n.y = function (t) {
      return arguments.length ? (o = t, n) : o;
    }, n.out = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n;
  };

  var _l = ao.map({
    "inside-out": function insideOut(n) {
      var t,
          e,
          r = n.length,
          i = n.map(di),
          u = n.map(yi),
          o = ao.range(r).sort(function (n, t) {
        return i[n] - i[t];
      }),
          a = 0,
          l = 0,
          c = [],
          f = [];

      for (t = 0; r > t; ++t) {
        e = o[t], l > a ? (a += u[e], c.push(e)) : (l += u[e], f.push(e));
      }

      return f.reverse().concat(c);
    },
    reverse: function reverse(n) {
      return ao.range(n.length).reverse();
    },
    "default": gi
  }),
      wl = ao.map({
    silhouette: function silhouette(n) {
      var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = [],
          a = 0,
          l = [];

      for (e = 0; u > e; ++e) {
        for (t = 0, r = 0; i > t; t++) {
          r += n[t][e][1];
        }

        r > a && (a = r), o.push(r);
      }

      for (e = 0; u > e; ++e) {
        l[e] = (a - o[e]) / 2;
      }

      return l;
    },
    wiggle: function wiggle(n) {
      var t,
          e,
          r,
          i,
          u,
          o,
          a,
          l,
          c,
          f = n.length,
          s = n[0],
          h = s.length,
          p = [];

      for (p[0] = l = c = 0, e = 1; h > e; ++e) {
        for (t = 0, i = 0; f > t; ++t) {
          i += n[t][e][1];
        }

        for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; f > t; ++t) {
          for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) {
            o += (n[r][e][1] - n[r][e - 1][1]) / a;
          }

          u += o * n[t][e][1];
        }

        p[e] = l -= i ? u / i * a : 0, c > l && (c = l);
      }

      for (e = 0; h > e; ++e) {
        p[e] -= c;
      }

      return p;
    },
    expand: function expand(n) {
      var t,
          e,
          r,
          i = n.length,
          u = n[0].length,
          o = 1 / i,
          a = [];

      for (e = 0; u > e; ++e) {
        for (t = 0, r = 0; i > t; t++) {
          r += n[t][e][1];
        }

        if (r) for (t = 0; i > t; t++) {
          n[t][e][1] /= r;
        } else for (t = 0; i > t; t++) {
          n[t][e][1] = o;
        }
      }

      for (e = 0; u > e; ++e) {
        a[e] = 0;
      }

      return a;
    },
    zero: vi
  });

  ao.layout.histogram = function () {
    function n(n, u) {
      for (var o, a, l = [], c = n.map(e, this), f = r.call(this, c, u), s = i.call(this, f, c, u), u = -1, h = c.length, p = s.length - 1, g = t ? 1 : 1 / h; ++u < p;) {
        o = l[u] = [], o.dx = s[u + 1] - (o.x = s[u]), o.y = 0;
      }

      if (p > 0) for (u = -1; ++u < h;) {
        a = c[u], a >= f[0] && a <= f[1] && (o = l[ao.bisect(s, a, 1, p) - 1], o.y += g, o.push(n[u]));
      }
      return l;
    }

    var t = !0,
        e = Number,
        r = bi,
        i = Mi;
    return n.value = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.range = function (t) {
      return arguments.length ? (r = En(t), n) : r;
    }, n.bins = function (t) {
      return arguments.length ? (i = "number" == typeof t ? function (n) {
        return xi(n, t);
      } : En(t), n) : i;
    }, n.frequency = function (e) {
      return arguments.length ? (t = !!e, n) : t;
    }, n;
  }, ao.layout.pack = function () {
    function n(n, u) {
      var o = e.call(this, n, u),
          a = o[0],
          l = i[0],
          c = i[1],
          f = null == t ? Math.sqrt : "function" == typeof t ? t : function () {
        return t;
      };

      if (a.x = a.y = 0, oi(a, function (n) {
        n.r = +f(n.value);
      }), oi(a, Ni), r) {
        var s = r * (t ? 1 : Math.max(2 * a.r / l, 2 * a.r / c)) / 2;
        oi(a, function (n) {
          n.r += s;
        }), oi(a, Ni), oi(a, function (n) {
          n.r -= s;
        });
      }

      return Ci(a, l / 2, c / 2, t ? 1 : 1 / Math.max(2 * a.r / l, 2 * a.r / c)), o;
    }

    var t,
        e = ao.layout.hierarchy().sort(_i),
        r = 0,
        i = [1, 1];
    return n.size = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.radius = function (e) {
      return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t;
    }, n.padding = function (t) {
      return arguments.length ? (r = +t, n) : r;
    }, ii(n, e);
  }, ao.layout.tree = function () {
    function n(n, i) {
      var f = o.call(this, n, i),
          s = f[0],
          h = t(s);
      if (oi(h, e), h.parent.m = -h.z, ui(h, r), c) ui(s, u);else {
        var p = s,
            g = s,
            v = s;
        ui(s, function (n) {
          n.x < p.x && (p = n), n.x > g.x && (g = n), n.depth > v.depth && (v = n);
        });
        var d = a(p, g) / 2 - p.x,
            y = l[0] / (g.x + a(g, p) / 2 + d),
            m = l[1] / (v.depth || 1);
        ui(s, function (n) {
          n.x = (n.x + d) * y, n.y = n.depth * m;
        });
      }
      return f;
    }

    function t(n) {
      for (var t, e = {
        A: null,
        children: [n]
      }, r = [e]; null != (t = r.pop());) {
        for (var i, u = t.children, o = 0, a = u.length; a > o; ++o) {
          r.push((u[o] = i = {
            _: u[o],
            parent: t,
            children: (i = u[o].children) && i.slice() || [],
            A: null,
            a: null,
            z: 0,
            m: 0,
            c: 0,
            s: 0,
            t: null,
            i: o
          }).a = i);
        }
      }

      return e.children[0];
    }

    function e(n) {
      var t = n.children,
          e = n.parent.children,
          r = n.i ? e[n.i - 1] : null;

      if (t.length) {
        Di(n);
        var u = (t[0].z + t[t.length - 1].z) / 2;
        r ? (n.z = r.z + a(n._, r._), n.m = n.z - u) : n.z = u;
      } else r && (n.z = r.z + a(n._, r._));

      n.parent.A = i(n, r, n.parent.A || e[0]);
    }

    function r(n) {
      n._.x = n.z + n.parent.m, n.m += n.parent.m;
    }

    function i(n, t, e) {
      if (t) {
        for (var r, i = n, u = n, o = t, l = i.parent.children[0], c = i.m, f = u.m, s = o.m, h = l.m; o = Ti(o), i = qi(i), o && i;) {
          l = qi(l), u = Ti(u), u.a = n, r = o.z + s - i.z - c + a(o._, i._), r > 0 && (Ri(Pi(o, n, e), n, r), c += r, f += r), s += o.m, c += i.m, h += l.m, f += u.m;
        }

        o && !Ti(u) && (u.t = o, u.m += s - f), i && !qi(l) && (l.t = i, l.m += c - h, e = n);
      }

      return e;
    }

    function u(n) {
      n.x *= l[0], n.y = n.depth * l[1];
    }

    var o = ao.layout.hierarchy().sort(null).value(null),
        a = Li,
        l = [1, 1],
        c = null;
    return n.separation = function (t) {
      return arguments.length ? (a = t, n) : a;
    }, n.size = function (t) {
      return arguments.length ? (c = null == (l = t) ? u : null, n) : c ? null : l;
    }, n.nodeSize = function (t) {
      return arguments.length ? (c = null == (l = t) ? null : u, n) : c ? l : null;
    }, ii(n, o);
  }, ao.layout.cluster = function () {
    function n(n, u) {
      var o,
          a = t.call(this, n, u),
          l = a[0],
          c = 0;
      oi(l, function (n) {
        var t = n.children;
        t && t.length ? (n.x = ji(t), n.y = Ui(t)) : (n.x = o ? c += e(n, o) : 0, n.y = 0, o = n);
      });
      var f = Fi(l),
          s = Hi(l),
          h = f.x - e(f, s) / 2,
          p = s.x + e(s, f) / 2;
      return oi(l, i ? function (n) {
        n.x = (n.x - l.x) * r[0], n.y = (l.y - n.y) * r[1];
      } : function (n) {
        n.x = (n.x - h) / (p - h) * r[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1];
      }), a;
    }

    var t = ao.layout.hierarchy().sort(null).value(null),
        e = Li,
        r = [1, 1],
        i = !1;
    return n.separation = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.size = function (t) {
      return arguments.length ? (i = null == (r = t), n) : i ? null : r;
    }, n.nodeSize = function (t) {
      return arguments.length ? (i = null != (r = t), n) : i ? r : null;
    }, ii(n, t);
  }, ao.layout.treemap = function () {
    function n(n, t) {
      for (var e, r, i = -1, u = n.length; ++i < u;) {
        r = (e = n[i]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r;
      }
    }

    function t(e) {
      var u = e.children;

      if (u && u.length) {
        var o,
            a,
            l,
            c = s(e),
            f = [],
            h = u.slice(),
            g = 1 / 0,
            v = "slice" === p ? c.dx : "dice" === p ? c.dy : "slice-dice" === p ? 1 & e.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);

        for (n(h, c.dx * c.dy / e.value), f.area = 0; (l = h.length) > 0;) {
          f.push(o = h[l - 1]), f.area += o.area, "squarify" !== p || (a = r(f, v)) <= g ? (h.pop(), g = a) : (f.area -= f.pop().area, i(f, v, c, !1), v = Math.min(c.dx, c.dy), f.length = f.area = 0, g = 1 / 0);
        }

        f.length && (i(f, v, c, !0), f.length = f.area = 0), u.forEach(t);
      }
    }

    function e(t) {
      var r = t.children;

      if (r && r.length) {
        var u,
            o = s(t),
            a = r.slice(),
            l = [];

        for (n(a, o.dx * o.dy / t.value), l.area = 0; u = a.pop();) {
          l.push(u), l.area += u.area, null != u.z && (i(l, u.z ? o.dx : o.dy, o, !a.length), l.length = l.area = 0);
        }

        r.forEach(e);
      }
    }

    function r(n, t) {
      for (var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length; ++o < a;) {
        (e = n[o].area) && (u > e && (u = e), e > i && (i = e));
      }

      return r *= r, t *= t, r ? Math.max(t * i * g / r, r / (t * u * g)) : 1 / 0;
    }

    function i(n, t, e, r) {
      var i,
          u = -1,
          o = n.length,
          a = e.x,
          c = e.y,
          f = t ? l(n.area / t) : 0;

      if (t == e.dx) {
        for ((r || f > e.dy) && (f = e.dy); ++u < o;) {
          i = n[u], i.x = a, i.y = c, i.dy = f, a += i.dx = Math.min(e.x + e.dx - a, f ? l(i.area / f) : 0);
        }

        i.z = !0, i.dx += e.x + e.dx - a, e.y += f, e.dy -= f;
      } else {
        for ((r || f > e.dx) && (f = e.dx); ++u < o;) {
          i = n[u], i.x = a, i.y = c, i.dx = f, c += i.dy = Math.min(e.y + e.dy - c, f ? l(i.area / f) : 0);
        }

        i.z = !1, i.dy += e.y + e.dy - c, e.x += f, e.dx -= f;
      }
    }

    function u(r) {
      var i = o || a(r),
          u = i[0];
      return u.x = u.y = 0, u.value ? (u.dx = c[0], u.dy = c[1]) : u.dx = u.dy = 0, o && a.revalue(u), n([u], u.dx * u.dy / u.value), (o ? e : t)(u), h && (o = i), i;
    }

    var o,
        a = ao.layout.hierarchy(),
        l = Math.round,
        c = [1, 1],
        f = null,
        s = Oi,
        h = !1,
        p = "squarify",
        g = .5 * (1 + Math.sqrt(5));
    return u.size = function (n) {
      return arguments.length ? (c = n, u) : c;
    }, u.padding = function (n) {
      function t(t) {
        var e = n.call(u, t, t.depth);
        return null == e ? Oi(t) : Ii(t, "number" == typeof e ? [e, e, e, e] : e);
      }

      function e(t) {
        return Ii(t, n);
      }

      if (!arguments.length) return f;
      var r;
      return s = null == (f = n) ? Oi : "function" == (r = _typeof(n)) ? t : "number" === r ? (n = [n, n, n, n], e) : e, u;
    }, u.round = function (n) {
      return arguments.length ? (l = n ? Math.round : Number, u) : l != Number;
    }, u.sticky = function (n) {
      return arguments.length ? (h = n, o = null, u) : h;
    }, u.ratio = function (n) {
      return arguments.length ? (g = n, u) : g;
    }, u.mode = function (n) {
      return arguments.length ? (p = n + "", u) : p;
    }, ii(u, a);
  }, ao.random = {
    normal: function normal(n, t) {
      var e = arguments.length;
      return 2 > e && (t = 1), 1 > e && (n = 0), function () {
        var e, r, i;

        do {
          e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r;
        } while (!i || i > 1);

        return n + t * e * Math.sqrt(-2 * Math.log(i) / i);
      };
    },
    logNormal: function logNormal() {
      var n = ao.random.normal.apply(ao, arguments);
      return function () {
        return Math.exp(n());
      };
    },
    bates: function bates(n) {
      var t = ao.random.irwinHall(n);
      return function () {
        return t() / n;
      };
    },
    irwinHall: function irwinHall(n) {
      return function () {
        for (var t = 0, e = 0; n > e; e++) {
          t += Math.random();
        }

        return t;
      };
    }
  }, ao.scale = {};
  var Sl = {
    floor: m,
    ceil: m
  };

  ao.scale.linear = function () {
    return Wi([0, 1], [0, 1], Mr, !1);
  };

  var kl = {
    s: 1,
    g: 1,
    p: 1,
    r: 1,
    e: 1
  };

  ao.scale.log = function () {
    return ru(ao.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
  };

  var Nl = ao.format(".0e"),
      El = {
    floor: function floor(n) {
      return -Math.ceil(-n);
    },
    ceil: function ceil(n) {
      return -Math.floor(-n);
    }
  };
  ao.scale.pow = function () {
    return iu(ao.scale.linear(), 1, [0, 1]);
  }, ao.scale.sqrt = function () {
    return ao.scale.pow().exponent(.5);
  }, ao.scale.ordinal = function () {
    return ou([], {
      t: "range",
      a: [[]]
    });
  }, ao.scale.category10 = function () {
    return ao.scale.ordinal().range(Al);
  }, ao.scale.category20 = function () {
    return ao.scale.ordinal().range(Cl);
  }, ao.scale.category20b = function () {
    return ao.scale.ordinal().range(zl);
  }, ao.scale.category20c = function () {
    return ao.scale.ordinal().range(Ll);
  };
  var Al = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(xn),
      Cl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(xn),
      zl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(xn),
      Ll = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(xn);
  ao.scale.quantile = function () {
    return au([], []);
  }, ao.scale.quantize = function () {
    return lu(0, 1, [0, 1]);
  }, ao.scale.threshold = function () {
    return cu([.5], [0, 1]);
  }, ao.scale.identity = function () {
    return fu([0, 1]);
  }, ao.svg = {}, ao.svg.arc = function () {
    function n() {
      var n = Math.max(0, +e.apply(this, arguments)),
          c = Math.max(0, +r.apply(this, arguments)),
          f = o.apply(this, arguments) - Io,
          s = a.apply(this, arguments) - Io,
          h = Math.abs(s - f),
          p = f > s ? 0 : 1;
      if (n > c && (g = c, c = n, n = g), h >= Oo) return t(c, p) + (n ? t(n, 1 - p) : "") + "Z";

      var g,
          v,
          d,
          y,
          m,
          M,
          x,
          b,
          _,
          w,
          S,
          k,
          N = 0,
          E = 0,
          A = [];

      if ((y = (+l.apply(this, arguments) || 0) / 2) && (d = u === ql ? Math.sqrt(n * n + c * c) : +u.apply(this, arguments), p || (E *= -1), c && (E = tn(d / c * Math.sin(y))), n && (N = tn(d / n * Math.sin(y)))), c) {
        m = c * Math.cos(f + E), M = c * Math.sin(f + E), x = c * Math.cos(s - E), b = c * Math.sin(s - E);
        var C = Math.abs(s - f - 2 * E) <= Fo ? 0 : 1;

        if (E && yu(m, M, x, b) === p ^ C) {
          var z = (f + s) / 2;
          m = c * Math.cos(z), M = c * Math.sin(z), x = b = null;
        }
      } else m = M = 0;

      if (n) {
        _ = n * Math.cos(s - N), w = n * Math.sin(s - N), S = n * Math.cos(f + N), k = n * Math.sin(f + N);
        var L = Math.abs(f - s + 2 * N) <= Fo ? 0 : 1;

        if (N && yu(_, w, S, k) === 1 - p ^ L) {
          var q = (f + s) / 2;
          _ = n * Math.cos(q), w = n * Math.sin(q), S = k = null;
        }
      } else _ = w = 0;

      if (h > Uo && (g = Math.min(Math.abs(c - n) / 2, +i.apply(this, arguments))) > .001) {
        v = c > n ^ p ? 0 : 1;
        var T = g,
            R = g;

        if (Fo > h) {
          var D = null == S ? [_, w] : null == x ? [m, M] : Re([m, M], [S, k], [x, b], [_, w]),
              P = m - D[0],
              U = M - D[1],
              j = x - D[0],
              F = b - D[1],
              H = 1 / Math.sin(Math.acos((P * j + U * F) / (Math.sqrt(P * P + U * U) * Math.sqrt(j * j + F * F))) / 2),
              O = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
          R = Math.min(g, (n - O) / (H - 1)), T = Math.min(g, (c - O) / (H + 1));
        }

        if (null != x) {
          var I = mu(null == S ? [_, w] : [S, k], [m, M], c, T, p),
              Y = mu([x, b], [_, w], c, T, p);
          g === T ? A.push("M", I[0], "A", T, ",", T, " 0 0,", v, " ", I[1], "A", c, ",", c, " 0 ", 1 - p ^ yu(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", T, ",", T, " 0 0,", v, " ", Y[0]) : A.push("M", I[0], "A", T, ",", T, " 0 1,", v, " ", Y[0]);
        } else A.push("M", m, ",", M);

        if (null != S) {
          var Z = mu([m, M], [S, k], n, -R, p),
              V = mu([_, w], null == x ? [m, M] : [x, b], n, -R, p);
          g === R ? A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", p ^ yu(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - p, " ", Z[1], "A", R, ",", R, " 0 0,", v, " ", Z[0]) : A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", Z[0]);
        } else A.push("L", _, ",", w);
      } else A.push("M", m, ",", M), null != x && A.push("A", c, ",", c, " 0 ", C, ",", p, " ", x, ",", b), A.push("L", _, ",", w), null != S && A.push("A", n, ",", n, " 0 ", L, ",", 1 - p, " ", S, ",", k);

      return A.push("Z"), A.join("");
    }

    function t(n, t) {
      return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n;
    }

    var e = hu,
        r = pu,
        i = su,
        u = ql,
        o = gu,
        a = vu,
        l = du;
    return n.innerRadius = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n.outerRadius = function (t) {
      return arguments.length ? (r = En(t), n) : r;
    }, n.cornerRadius = function (t) {
      return arguments.length ? (i = En(t), n) : i;
    }, n.padRadius = function (t) {
      return arguments.length ? (u = t == ql ? ql : En(t), n) : u;
    }, n.startAngle = function (t) {
      return arguments.length ? (o = En(t), n) : o;
    }, n.endAngle = function (t) {
      return arguments.length ? (a = En(t), n) : a;
    }, n.padAngle = function (t) {
      return arguments.length ? (l = En(t), n) : l;
    }, n.centroid = function () {
      var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
          t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Io;
      return [Math.cos(t) * n, Math.sin(t) * n];
    }, n;
  };
  var ql = "auto";

  ao.svg.line = function () {
    return Mu(m);
  };

  var Tl = ao.map({
    linear: xu,
    "linear-closed": bu,
    step: _u,
    "step-before": wu,
    "step-after": Su,
    basis: zu,
    "basis-open": Lu,
    "basis-closed": qu,
    bundle: Tu,
    cardinal: Eu,
    "cardinal-open": ku,
    "cardinal-closed": Nu,
    monotone: Fu
  });
  Tl.forEach(function (n, t) {
    t.key = n, t.closed = /-closed$/.test(n);
  });
  var Rl = [0, 2 / 3, 1 / 3, 0],
      Dl = [0, 1 / 3, 2 / 3, 0],
      Pl = [0, 1 / 6, 2 / 3, 1 / 6];
  ao.svg.line.radial = function () {
    var n = Mu(Hu);
    return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n;
  }, wu.reverse = Su, Su.reverse = wu, ao.svg.area = function () {
    return Ou(m);
  }, ao.svg.area.radial = function () {
    var n = Ou(Hu);
    return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n;
  }, ao.svg.chord = function () {
    function n(n, a) {
      var l = t(this, u, n, a),
          c = t(this, o, n, a);
      return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (e(l, c) ? i(l.r, l.p1, l.r, l.p0) : i(l.r, l.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + i(c.r, c.p1, l.r, l.p0)) + "Z";
    }

    function t(n, t, e, r) {
      var i = t.call(n, e, r),
          u = a.call(n, i, r),
          o = l.call(n, i, r) - Io,
          f = c.call(n, i, r) - Io;
      return {
        r: u,
        a0: o,
        a1: f,
        p0: [u * Math.cos(o), u * Math.sin(o)],
        p1: [u * Math.cos(f), u * Math.sin(f)]
      };
    }

    function e(n, t) {
      return n.a0 == t.a0 && n.a1 == t.a1;
    }

    function r(n, t, e) {
      return "A" + n + "," + n + " 0 " + +(e > Fo) + ",1 " + t;
    }

    function i(n, t, e, r) {
      return "Q 0,0 " + r;
    }

    var u = Me,
        o = xe,
        a = Iu,
        l = gu,
        c = vu;
    return n.radius = function (t) {
      return arguments.length ? (a = En(t), n) : a;
    }, n.source = function (t) {
      return arguments.length ? (u = En(t), n) : u;
    }, n.target = function (t) {
      return arguments.length ? (o = En(t), n) : o;
    }, n.startAngle = function (t) {
      return arguments.length ? (l = En(t), n) : l;
    }, n.endAngle = function (t) {
      return arguments.length ? (c = En(t), n) : c;
    }, n;
  }, ao.svg.diagonal = function () {
    function n(n, i) {
      var u = t.call(this, n, i),
          o = e.call(this, n, i),
          a = (u.y + o.y) / 2,
          l = [u, {
        x: u.x,
        y: a
      }, {
        x: o.x,
        y: a
      }, o];
      return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3];
    }

    var t = Me,
        e = xe,
        r = Yu;
    return n.source = function (e) {
      return arguments.length ? (t = En(e), n) : t;
    }, n.target = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n.projection = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n;
  }, ao.svg.diagonal.radial = function () {
    var n = ao.svg.diagonal(),
        t = Yu,
        e = n.projection;
    return n.projection = function (n) {
      return arguments.length ? e(Zu(t = n)) : t;
    }, n;
  }, ao.svg.symbol = function () {
    function n(n, r) {
      return (Ul.get(t.call(this, n, r)) || $u)(e.call(this, n, r));
    }

    var t = Xu,
        e = Vu;
    return n.type = function (e) {
      return arguments.length ? (t = En(e), n) : t;
    }, n.size = function (t) {
      return arguments.length ? (e = En(t), n) : e;
    }, n;
  };
  var Ul = ao.map({
    circle: $u,
    cross: function cross(n) {
      var t = Math.sqrt(n / 5) / 2;
      return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z";
    },
    diamond: function diamond(n) {
      var t = Math.sqrt(n / (2 * Fl)),
          e = t * Fl;
      return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z";
    },
    square: function square(n) {
      var t = Math.sqrt(n) / 2;
      return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z";
    },
    "triangle-down": function triangleDown(n) {
      var t = Math.sqrt(n / jl),
          e = t * jl / 2;
      return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z";
    },
    "triangle-up": function triangleUp(n) {
      var t = Math.sqrt(n / jl),
          e = t * jl / 2;
      return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z";
    }
  });
  ao.svg.symbolTypes = Ul.keys();
  var jl = Math.sqrt(3),
      Fl = Math.tan(30 * Yo);
  Co.transition = function (n) {
    for (var t, e, r = Hl || ++Zl, i = Ku(n), u = [], o = Ol || {
      time: Date.now(),
      ease: Nr,
      delay: 0,
      duration: 250
    }, a = -1, l = this.length; ++a < l;) {
      u.push(t = []);

      for (var c = this[a], f = -1, s = c.length; ++f < s;) {
        (e = c[f]) && Qu(e, f, i, r, o), t.push(e);
      }
    }

    return Wu(u, i, r);
  }, Co.interrupt = function (n) {
    return this.each(null == n ? Il : Bu(Ku(n)));
  };
  var Hl,
      Ol,
      Il = Bu(Ku()),
      Yl = [],
      Zl = 0;
  Yl.call = Co.call, Yl.empty = Co.empty, Yl.node = Co.node, Yl.size = Co.size, ao.transition = function (n, t) {
    return n && n.transition ? Hl ? n.transition(t) : n : ao.selection().transition(n);
  }, ao.transition.prototype = Yl, Yl.select = function (n) {
    var t,
        e,
        r,
        i = this.id,
        u = this.namespace,
        o = [];
    n = A(n);

    for (var a = -1, l = this.length; ++a < l;) {
      o.push(t = []);

      for (var c = this[a], f = -1, s = c.length; ++f < s;) {
        (r = c[f]) && (e = n.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Qu(e, f, u, i, r[u][i]), t.push(e)) : t.push(null);
      }
    }

    return Wu(o, u, i);
  }, Yl.selectAll = function (n) {
    var t,
        e,
        r,
        i,
        u,
        o = this.id,
        a = this.namespace,
        l = [];
    n = C(n);

    for (var c = -1, f = this.length; ++c < f;) {
      for (var s = this[c], h = -1, p = s.length; ++h < p;) {
        if (r = s[h]) {
          u = r[a][o], e = n.call(r, r.__data__, h, c), l.push(t = []);

          for (var g = -1, v = e.length; ++g < v;) {
            (i = e[g]) && Qu(i, g, a, o, u), t.push(i);
          }
        }
      }
    }

    return Wu(l, a, o);
  }, Yl.filter = function (n) {
    var t,
        e,
        r,
        i = [];
    "function" != typeof n && (n = O(n));

    for (var u = 0, o = this.length; o > u; u++) {
      i.push(t = []);

      for (var e = this[u], a = 0, l = e.length; l > a; a++) {
        (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
      }
    }

    return Wu(i, this.namespace, this.id);
  }, Yl.tween = function (n, t) {
    var e = this.id,
        r = this.namespace;
    return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ? function (t) {
      t[r][e].tween.remove(n);
    } : function (i) {
      i[r][e].tween.set(n, t);
    });
  }, Yl.attr = function (n, t) {
    function e() {
      this.removeAttribute(a);
    }

    function r() {
      this.removeAttributeNS(a.space, a.local);
    }

    function i(n) {
      return null == n ? e : (n += "", function () {
        var t,
            e = this.getAttribute(a);
        return e !== n && (t = o(e, n), function (n) {
          this.setAttribute(a, t(n));
        });
      });
    }

    function u(n) {
      return null == n ? r : (n += "", function () {
        var t,
            e = this.getAttributeNS(a.space, a.local);
        return e !== n && (t = o(e, n), function (n) {
          this.setAttributeNS(a.space, a.local, t(n));
        });
      });
    }

    if (arguments.length < 2) {
      for (t in n) {
        this.attr(t, n[t]);
      }

      return this;
    }

    var o = "transform" == n ? $r : Mr,
        a = ao.ns.qualify(n);
    return Ju(this, "attr." + n, t, a.local ? u : i);
  }, Yl.attrTween = function (n, t) {
    function e(n, e) {
      var r = t.call(this, n, e, this.getAttribute(i));
      return r && function (n) {
        this.setAttribute(i, r(n));
      };
    }

    function r(n, e) {
      var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local));
      return r && function (n) {
        this.setAttributeNS(i.space, i.local, r(n));
      };
    }

    var i = ao.ns.qualify(n);
    return this.tween("attr." + n, i.local ? r : e);
  }, Yl.style = function (n, e, r) {
    function i() {
      this.style.removeProperty(n);
    }

    function u(e) {
      return null == e ? i : (e += "", function () {
        var i,
            u = t(this).getComputedStyle(this, null).getPropertyValue(n);
        return u !== e && (i = Mr(u, e), function (t) {
          this.style.setProperty(n, i(t), r);
        });
      });
    }

    var o = arguments.length;

    if (3 > o) {
      if ("string" != typeof n) {
        2 > o && (e = "");

        for (r in n) {
          this.style(r, n[r], e);
        }

        return this;
      }

      r = "";
    }

    return Ju(this, "style." + n, e, u);
  }, Yl.styleTween = function (n, e, r) {
    function i(i, u) {
      var o = e.call(this, i, u, t(this).getComputedStyle(this, null).getPropertyValue(n));
      return o && function (t) {
        this.style.setProperty(n, o(t), r);
      };
    }

    return arguments.length < 3 && (r = ""), this.tween("style." + n, i);
  }, Yl.text = function (n) {
    return Ju(this, "text", n, Gu);
  }, Yl.remove = function () {
    var n = this.namespace;
    return this.each("end.transition", function () {
      var t;
      this[n].count < 2 && (t = this.parentNode) && t.removeChild(this);
    });
  }, Yl.ease = function (n) {
    var t = this.id,
        e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ao.ease.apply(ao, arguments)), Y(this, function (r) {
      r[e][t].ease = n;
    }));
  }, Yl.delay = function (n) {
    var t = this.id,
        e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ? function (r, i, u) {
      r[e][t].delay = +n.call(r, r.__data__, i, u);
    } : (n = +n, function (r) {
      r[e][t].delay = n;
    }));
  }, Yl.duration = function (n) {
    var t = this.id,
        e = this.namespace;
    return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ? function (r, i, u) {
      r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u));
    } : (n = Math.max(1, n), function (r) {
      r[e][t].duration = n;
    }));
  }, Yl.each = function (n, t) {
    var e = this.id,
        r = this.namespace;

    if (arguments.length < 2) {
      var i = Ol,
          u = Hl;

      try {
        Hl = e, Y(this, function (t, i, u) {
          Ol = t[r][e], n.call(t, t.__data__, i, u);
        });
      } finally {
        Ol = i, Hl = u;
      }
    } else Y(this, function (i) {
      var u = i[r][e];
      (u.event || (u.event = ao.dispatch("start", "end", "interrupt"))).on(n, t);
    });

    return this;
  }, Yl.transition = function () {
    for (var n, t, e, r, i = this.id, u = ++Zl, o = this.namespace, a = [], l = 0, c = this.length; c > l; l++) {
      a.push(n = []);

      for (var t = this[l], f = 0, s = t.length; s > f; f++) {
        (e = t[f]) && (r = e[o][i], Qu(e, f, o, u, {
          time: r.time,
          ease: r.ease,
          delay: r.delay + r.duration,
          duration: r.duration
        })), n.push(e);
      }
    }

    return Wu(a, o, u);
  }, ao.svg.axis = function () {
    function n(n) {
      n.each(function () {
        var n,
            c = ao.select(this),
            f = this.__chart__ || e,
            s = this.__chart__ = e.copy(),
            h = null == l ? s.ticks ? s.ticks.apply(s, a) : s.domain() : l,
            p = null == t ? s.tickFormat ? s.tickFormat.apply(s, a) : m : t,
            g = c.selectAll(".tick").data(h, s),
            v = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Uo),
            d = ao.transition(g.exit()).style("opacity", Uo).remove(),
            y = ao.transition(g.order()).style("opacity", 1),
            M = Math.max(i, 0) + o,
            x = Zi(s),
            b = c.selectAll(".domain").data([0]),
            _ = (b.enter().append("path").attr("class", "domain"), ao.transition(b));

        v.append("line"), v.append("text");
        var w,
            S,
            k,
            N,
            E = v.select("line"),
            A = y.select("line"),
            C = g.select("text").text(p),
            z = v.select("text"),
            L = y.select("text"),
            q = "top" === r || "left" === r ? -1 : 1;

        if ("bottom" === r || "top" === r ? (n = no, w = "x", k = "y", S = "x2", N = "y2", C.attr("dy", 0 > q ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + q * u + "V0H" + x[1] + "V" + q * u)) : (n = to, w = "y", k = "x", S = "y2", N = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > q ? "end" : "start"), _.attr("d", "M" + q * u + "," + x[0] + "H0V" + x[1] + "H" + q * u)), E.attr(N, q * i), z.attr(k, q * M), A.attr(S, 0).attr(N, q * i), L.attr(w, 0).attr(k, q * M), s.rangeBand) {
          var T = s,
              R = T.rangeBand() / 2;

          f = s = function s(n) {
            return T(n) + R;
          };
        } else f.rangeBand ? f = s : d.call(n, s, f);

        v.call(n, f, s), y.call(n, s, s);
      });
    }

    var t,
        e = ao.scale.linear(),
        r = Vl,
        i = 6,
        u = 6,
        o = 3,
        a = [10],
        l = null;
    return n.scale = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.orient = function (t) {
      return arguments.length ? (r = t in Xl ? t + "" : Vl, n) : r;
    }, n.ticks = function () {
      return arguments.length ? (a = co(arguments), n) : a;
    }, n.tickValues = function (t) {
      return arguments.length ? (l = t, n) : l;
    }, n.tickFormat = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.tickSize = function (t) {
      var e = arguments.length;
      return e ? (i = +t, u = +arguments[e - 1], n) : i;
    }, n.innerTickSize = function (t) {
      return arguments.length ? (i = +t, n) : i;
    }, n.outerTickSize = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.tickPadding = function (t) {
      return arguments.length ? (o = +t, n) : o;
    }, n.tickSubdivide = function () {
      return arguments.length && n;
    }, n;
  };
  var Vl = "bottom",
      Xl = {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  };

  ao.svg.brush = function () {
    function n(t) {
      t.each(function () {
        var t = ao.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
            o = t.selectAll(".background").data([0]);
        o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
        var a = t.selectAll(".resize").data(v, m);
        a.exit().remove(), a.enter().append("g").attr("class", function (n) {
          return "resize " + n;
        }).style("cursor", function (n) {
          return $l[n];
        }).append("rect").attr("x", function (n) {
          return /[ew]$/.test(n) ? -3 : null;
        }).attr("y", function (n) {
          return /^[ns]/.test(n) ? -3 : null;
        }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
        var l,
            s = ao.transition(t),
            h = ao.transition(o);
        c && (l = Zi(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), r(s)), f && (l = Zi(f), h.attr("y", l[0]).attr("height", l[1] - l[0]), i(s)), e(s);
      });
    }

    function e(n) {
      n.selectAll(".resize").attr("transform", function (n) {
        return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")";
      });
    }

    function r(n) {
      n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0]);
    }

    function i(n) {
      n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]);
    }

    function u() {
      function u() {
        32 == ao.event.keyCode && (C || (M = null, L[0] -= s[1], L[1] -= h[1], C = 2), S());
      }

      function v() {
        32 == ao.event.keyCode && 2 == C && (L[0] += s[1], L[1] += h[1], C = 0, S());
      }

      function d() {
        var n = ao.mouse(b),
            t = !1;
        x && (n[0] += x[0], n[1] += x[1]), C || (ao.event.altKey ? (M || (M = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]), L[0] = s[+(n[0] < M[0])], L[1] = h[+(n[1] < M[1])]) : M = null), E && y(n, c, 0) && (r(k), t = !0), A && y(n, f, 1) && (i(k), t = !0), t && (e(k), w({
          type: "brush",
          mode: C ? "move" : "resize"
        }));
      }

      function y(n, t, e) {
        var r,
            i,
            u = Zi(t),
            l = u[0],
            c = u[1],
            f = L[e],
            v = e ? h : s,
            d = v[1] - v[0];
        return C && (l -= f, c -= d + f), r = (e ? g : p) ? Math.max(l, Math.min(c, n[e])) : n[e], C ? i = (r += f) + d : (M && (f = Math.max(l, Math.min(c, 2 * M[e] - r))), r > f ? (i = r, r = f) : i = f), v[0] != r || v[1] != i ? (e ? a = null : o = null, v[0] = r, v[1] = i, !0) : void 0;
      }

      function m() {
        d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ao.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({
          type: "brushend"
        });
      }

      var M,
          x,
          b = this,
          _ = ao.select(ao.event.target),
          w = l.of(b, arguments),
          k = ao.select(b),
          N = _.datum(),
          E = !/^(n|s)$/.test(N) && c,
          A = !/^(e|w)$/.test(N) && f,
          C = _.classed("extent"),
          z = W(b),
          L = ao.mouse(b),
          q = ao.select(t(b)).on("keydown.brush", u).on("keyup.brush", v);

      if (ao.event.changedTouches ? q.on("touchmove.brush", d).on("touchend.brush", m) : q.on("mousemove.brush", d).on("mouseup.brush", m), k.interrupt().selectAll("*").interrupt(), C) L[0] = s[0] - L[0], L[1] = h[0] - L[1];else if (N) {
        var T = +/w$/.test(N),
            R = +/^n/.test(N);
        x = [s[1 - T] - L[0], h[1 - R] - L[1]], L[0] = s[T], L[1] = h[R];
      } else ao.event.altKey && (M = L.slice());
      k.style("pointer-events", "none").selectAll(".resize").style("display", null), ao.select("body").style("cursor", _.style("cursor")), w({
        type: "brushstart"
      }), d();
    }

    var o,
        a,
        l = N(n, "brushstart", "brush", "brushend"),
        c = null,
        f = null,
        s = [0, 0],
        h = [0, 0],
        p = !0,
        g = !0,
        v = Bl[0];
    return n.event = function (n) {
      n.each(function () {
        var n = l.of(this, arguments),
            t = {
          x: s,
          y: h,
          i: o,
          j: a
        },
            e = this.__chart__ || t;
        this.__chart__ = t, Hl ? ao.select(this).transition().each("start.brush", function () {
          o = e.i, a = e.j, s = e.x, h = e.y, n({
            type: "brushstart"
          });
        }).tween("brush:brush", function () {
          var e = xr(s, t.x),
              r = xr(h, t.y);
          return o = a = null, function (i) {
            s = t.x = e(i), h = t.y = r(i), n({
              type: "brush",
              mode: "resize"
            });
          };
        }).each("end.brush", function () {
          o = t.i, a = t.j, n({
            type: "brush",
            mode: "resize"
          }), n({
            type: "brushend"
          });
        }) : (n({
          type: "brushstart"
        }), n({
          type: "brush",
          mode: "resize"
        }), n({
          type: "brushend"
        }));
      });
    }, n.x = function (t) {
      return arguments.length ? (c = t, v = Bl[!c << 1 | !f], n) : c;
    }, n.y = function (t) {
      return arguments.length ? (f = t, v = Bl[!c << 1 | !f], n) : f;
    }, n.clamp = function (t) {
      return arguments.length ? (c && f ? (p = !!t[0], g = !!t[1]) : c ? p = !!t : f && (g = !!t), n) : c && f ? [p, g] : c ? p : f ? g : null;
    }, n.extent = function (t) {
      var e, r, i, u, l;
      return arguments.length ? (c && (e = t[0], r = t[1], f && (e = e[0], r = r[0]), o = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (l = e, e = r, r = l), e == s[0] && r == s[1] || (s = [e, r])), f && (i = t[0], u = t[1], c && (i = i[1], u = u[1]), a = [i, u], f.invert && (i = f(i), u = f(u)), i > u && (l = i, i = u, u = l), i == h[0] && u == h[1] || (h = [i, u])), n) : (c && (o ? (e = o[0], r = o[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (l = e, e = r, r = l))), f && (a ? (i = a[0], u = a[1]) : (i = h[0], u = h[1], f.invert && (i = f.invert(i), u = f.invert(u)), i > u && (l = i, i = u, u = l))), c && f ? [[e, i], [r, u]] : c ? [e, r] : f && [i, u]);
    }, n.clear = function () {
      return n.empty() || (s = [0, 0], h = [0, 0], o = a = null), n;
    }, n.empty = function () {
      return !!c && s[0] == s[1] || !!f && h[0] == h[1];
    }, ao.rebind(n, l, "on");
  };

  var $l = {
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
  },
      Bl = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []],
      Wl = ga.format = xa.timeFormat,
      Jl = Wl.utc,
      Gl = Jl("%Y-%m-%dT%H:%M:%S.%LZ");
  Wl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? eo : Gl, eo.parse = function (n) {
    var t = new Date(n);
    return isNaN(t) ? null : t;
  }, eo.toString = Gl.toString, ga.second = On(function (n) {
    return new va(1e3 * Math.floor(n / 1e3));
  }, function (n, t) {
    n.setTime(n.getTime() + 1e3 * Math.floor(t));
  }, function (n) {
    return n.getSeconds();
  }), ga.seconds = ga.second.range, ga.seconds.utc = ga.second.utc.range, ga.minute = On(function (n) {
    return new va(6e4 * Math.floor(n / 6e4));
  }, function (n, t) {
    n.setTime(n.getTime() + 6e4 * Math.floor(t));
  }, function (n) {
    return n.getMinutes();
  }), ga.minutes = ga.minute.range, ga.minutes.utc = ga.minute.utc.range, ga.hour = On(function (n) {
    var t = n.getTimezoneOffset() / 60;
    return new va(36e5 * (Math.floor(n / 36e5 - t) + t));
  }, function (n, t) {
    n.setTime(n.getTime() + 36e5 * Math.floor(t));
  }, function (n) {
    return n.getHours();
  }), ga.hours = ga.hour.range, ga.hours.utc = ga.hour.utc.range, ga.month = On(function (n) {
    return n = ga.day(n), n.setDate(1), n;
  }, function (n, t) {
    n.setMonth(n.getMonth() + t);
  }, function (n) {
    return n.getMonth();
  }), ga.months = ga.month.range, ga.months.utc = ga.month.utc.range;
  var Kl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
      Ql = [[ga.second, 1], [ga.second, 5], [ga.second, 15], [ga.second, 30], [ga.minute, 1], [ga.minute, 5], [ga.minute, 15], [ga.minute, 30], [ga.hour, 1], [ga.hour, 3], [ga.hour, 6], [ga.hour, 12], [ga.day, 1], [ga.day, 2], [ga.week, 1], [ga.month, 1], [ga.month, 3], [ga.year, 1]],
      nc = Wl.multi([[".%L", function (n) {
    return n.getMilliseconds();
  }], [":%S", function (n) {
    return n.getSeconds();
  }], ["%I:%M", function (n) {
    return n.getMinutes();
  }], ["%I %p", function (n) {
    return n.getHours();
  }], ["%a %d", function (n) {
    return n.getDay() && 1 != n.getDate();
  }], ["%b %d", function (n) {
    return 1 != n.getDate();
  }], ["%B", function (n) {
    return n.getMonth();
  }], ["%Y", zt]]),
      tc = {
    range: function range(n, t, e) {
      return ao.range(Math.ceil(n / e) * e, +t, e).map(io);
    },
    floor: m,
    ceil: m
  };
  Ql.year = ga.year, ga.scale = function () {
    return ro(ao.scale.linear(), Ql, nc);
  };
  var ec = Ql.map(function (n) {
    return [n[0].utc, n[1]];
  }),
      rc = Jl.multi([[".%L", function (n) {
    return n.getUTCMilliseconds();
  }], [":%S", function (n) {
    return n.getUTCSeconds();
  }], ["%I:%M", function (n) {
    return n.getUTCMinutes();
  }], ["%I %p", function (n) {
    return n.getUTCHours();
  }], ["%a %d", function (n) {
    return n.getUTCDay() && 1 != n.getUTCDate();
  }], ["%b %d", function (n) {
    return 1 != n.getUTCDate();
  }], ["%B", function (n) {
    return n.getUTCMonth();
  }], ["%Y", zt]]);
  ec.year = ga.year.utc, ga.scale.utc = function () {
    return ro(ao.scale.linear(), ec, rc);
  }, ao.text = An(function (n) {
    return n.responseText;
  }), ao.json = function (n, t) {
    return Cn(n, "application/json", uo, t);
  }, ao.html = function (n, t) {
    return Cn(n, "text/html", oo, t);
  }, ao.xml = An(function (n) {
    return n.responseXML;
  }), "function" == typeof define && define.amd ? (this.d3 = ao, define(ao)) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = ao : this.d3 = ao;
}();
},{}],"../code/skeletons/BaseTree.jsx":[function(require,module,exports) {
var d3 = require("../../static_files/d3.js");

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
      width = 400 - margin.right - margin.left,
      height = 300 - margin.top - margin.bottom,
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
    svg.selectAll("path.link").classed("highlight", true);

    var _parentLine;

    _parentLine = function parentLine(d) {
      if (d.parent) {
        _parentLine(d.parent);

        svg.selectAll("path.link.source-" + d.parent.name + ".target-" + d.name).classed("highlight", false);
      }
    };

    _parentLine(d);

    return update(d);
  };

  highlightOff = function highlightOff(d) {
    svg.selectAll("path.link").classed("highlight", false);
    return update(d);
  };

  return container;
};
},{"../../static_files/d3.js":"../static_files/d3.js"}],"../code/skeletons/InfoGraphic.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

require("../systems/on_scroll");

module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  var wrapper;
  var isHovered = false;
  return wrapper = /*#__PURE__*/React.createElement("div", {
    name: "info-graphic",
    style: "--scroll-top: 0; position: absolute; bottom: 0; transform: translateY(calc(100% - calc(var(--scroll-top) * 1px))); width: 100%; z-index: 999;",
    onscroll: function onscroll(event) {
      // TODO: change this to a wrapped function/helper
      var currentValue = wrapper.style.getPropertyValue("--scroll-top") - 0;
      var nextValue = currentValue - event.deltaY; // dont scroll past 0

      if (nextValue < 0) {
        wrapper.style.setProperty('--scroll-top', '0'); // dont scroll over 100%
      } else if (nextValue > wrapper.clientHeight) {
        wrapper.style.setProperty('--scroll-top', "".concat(wrapper.clientHeight));
      } else {
        wrapper.style.setProperty('--scroll-top', "".concat(nextValue));
      }

      event.stopPropagation(); // helps be a bit more efficient
    }
  }, /*#__PURE__*/React.createElement("div", {
    name: "tab",
    style: "height: 6rem; width: 100%; overflow: visible; position: absolute; top: 0; transform: translateY(-100%); z-index: -1;"
  }, /*#__PURE__*/React.createElement("div", {
    class: "circle",
    style: "--size: 100vw; background-color: var(--green); transform: scaleX(200%)"
  })), /*#__PURE__*/React.createElement("div", {
    style: "width: 100%; height: fit-content;"
  }, children));
};
},{"../systems/on_scroll":"../code/systems/on_scroll.js"}],"../code/components/OrgBubble.jsx":[function(require,module,exports) {
var BaseTree = require("../skeletons/BaseTree");

var _require = require("@vue-reactivity/watch"),
    watch = _require.watch;

module.exports = function (_ref) {
  var org = _ref.org,
      selector = _ref.selector,
      orgIndex = _ref.orgIndex;
  // 
  // create elements
  // 
  var thisComponent = /*#__PURE__*/React.createElement("div", {
    class: "orgBubble",
    onclick: function onclick() {
      return selector.selectedOrgIndex = orgIndex, selector.selectedRepoIndex = null;
    }
  });
  var repoElements = org.map(function (tree, index) {
    return /*#__PURE__*/React.createElement("div", {
      onclick: function onclick(eventObject) {
        // don't let it activate the outer onclick
        eventObject.stopPropagation(); // update the data

        Object.assign(selector, {
          selectedOrgIndex: orgIndex,
          selectedRepoIndex: index
        });
      },
      style: {
        position: "absolute",
        transform: "translate(".concat(index * 100 / org.length, "%,").concat(index % 2 * -50, "px)")
      }
    }, /*#__PURE__*/React.createElement(BaseTree, {
      treeData: tree
    }));
  });
  thisComponent.children = repoElements; // 
  // make them reactive
  // 

  watch(selector, function () {
    // 
    // when unselected do:
    // 
    if (selector.selectedOrgIndex != orgIndex) {
      thisComponent.class = "orgBubble";
      thisComponent.children = repoElements; // reset/enable the pointer events

      delete thisComponent.style.pointerEvents; // 
      // when selected do:
      // 
    } else {
      // if repo selected
      if (selector.selectedRepoIndex) {
        // remove all of them except the selected repo
        thisComponent.children = [repoElements[selector.selectedRepoIndex]]; // remove the bubble's class to focus on the repo

        thisComponent.class = "orgBubbleRepoFocus"; // if whole bubble selected
      } else {
        // (not sure what the desired behavor is)
        thisComponent.class = "orgBubbleFocused";
        thisComponent.children = repoElements;
      }
    }
  });
  return thisComponent;
};
},{"../skeletons/BaseTree":"../code/skeletons/BaseTree.jsx","@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs"}],"../code/components/BubbleManager.jsx":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OrgBubble = require("../components/OrgBubble");

var _require = require("@vue/reactivity"),
    reactive = _require.reactive;

var _require2 = require("@vue-reactivity/watch"),
    watch = _require2.watch;

var router = require("quik-router");

var repoData = {
  name: "topLevel",
  parent: "null",
  blurb: 10,
  type: "black",
  level: "black",
  children: [{
    name: "midLevel",
    parent: "topLevel",
    blurb: 5,
    type: "black",
    level: "none",
    children: [{
      name: "lowA",
      parent: "midLevel",
      blurb: 5,
      type: "Type of bug",
      level: "red"
    }, {
      name: "lowB",
      parent: "midLevel",
      blurb: 18,
      type: "Type of vulnerability",
      level: "red"
    }]
  }, {
    name: "midLevelB",
    parent: "topLevel",
    blurb: 10,
    type: "grey",
    level: "none",
    children: [{
      name: "lowC",
      parent: "midLevelB",
      blurb: 5,
      type: "Type of vulnerability",
      level: "red"
    }, {
      name: "lowD",
      parent: "midLevelB",
      blurb: 18,
      type: "Type of vulnerability",
      level: "red"
    }]
  }]
};
var orgs = [// org1
[repoData, repoData], [repoData, repoData]];

module.exports = function () {
  // create state for children
  var state = reactive({
    selectedOrgIndex: null,
    selectedRepoIndex: null
  }); // 
  // when the state changes update the route so that the back button works
  // 

  watch(state, function () {
    // if there was a real change
    if (JSON.stringify(router.pageInfo.bubbleInfo) != JSON.stringify(state)) {
      // add it to the page history
      router.goTo(_objectSpread(_objectSpread({}, router.pageInfo), {}, {
        bubbleInfo: state
      }));
    }
  }); // 
  // route changes update the state
  // 

  router.addEventListener("go", function () {
    // update if something actually changed
    if (JSON.stringify(router.pageInfo.bubbleInfo) != JSON.stringify(state)) {
      Object.assign(state, {
        selectedOrgIndex: null,
        selectedRepoIndex: null
      });
      Object.assign(state, router.pageInfo.bubbleInfo);
    }
  }); // give children the ability to change state 

  return orgs.map(function (eachOrgData, index) {
    return /*#__PURE__*/React.createElement(OrgBubble, {
      org: eachOrgData,
      selector: state,
      orgIndex: index
    });
  });
};
},{"../components/OrgBubble":"../code/components/OrgBubble.jsx","@vue/reactivity":"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js","@vue-reactivity/watch":"../../node_modules/@vue-reactivity/watch/dist/index.mjs","quik-router":"../../node_modules/quik-router/main/main.js"}],"../code/pages/Home.jsx":[function(require,module,exports) {
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

require("../systems/on_scroll");

var GraphDisplay = require("../skeletons/GraphDisplay");

var BaseTree = require("../skeletons/BaseTree");

var InfoGraphic = require("../skeletons/InfoGraphic");

var BubbleManager = require("../components/BubbleManager");

var _require = require("quik-client"),
    backend = _require.backend; // the content below would load the data... if it were big enough to fit in a javascript string
// window.data.vulerabilities = require("../../../data/vulnerabilities_array.json")
// window.data.repos.atom = require("../../../data/commit_logs/atom.json")


module.exports = function (_ref) {
  var children = _ref.children,
      properties = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("body", {
    class: "column centered",
    style: "height: 100vh; overflow: hidden;"
  }, /*#__PURE__*/React.createElement(BubbleManager, null), /*#__PURE__*/React.createElement(InfoGraphic, null, /*#__PURE__*/React.createElement("div", {
    style: "min-height: 10rem"
  }, /*#__PURE__*/React.createElement("h3", null, "Test Data")), /*#__PURE__*/React.createElement("div", {
    style: "min-height: 10rem"
  }, /*#__PURE__*/React.createElement("h3", null, "Test Data")), /*#__PURE__*/React.createElement("div", {
    style: "min-height: 10rem"
  }, /*#__PURE__*/React.createElement("h3", null, "Test Data")), /*#__PURE__*/React.createElement("div", {
    style: "min-height: 10rem"
  }, /*#__PURE__*/React.createElement("h3", null, "Test Data"))));
};
},{"../systems/on_scroll":"../code/systems/on_scroll.js","../skeletons/GraphDisplay":"../code/skeletons/GraphDisplay.jsx","../skeletons/BaseTree":"../code/skeletons/BaseTree.jsx","../skeletons/InfoGraphic":"../code/skeletons/InfoGraphic.jsx","../components/BubbleManager":"../code/components/BubbleManager.jsx","quik-client":"../../node_modules/quik-client/index.js"}],"../code/pages/ProductView.jsx":[function(require,module,exports) {
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


var router = require("quik-router");

var Gun = require("./code/tools/gun"); // globals


window.quik = require("quik-client");
window.gun = Gun({
  peers: ['http://localhost:8765/gun']
}); // 
// pages
// 

var Home = require("./code/pages/Home");

var ProductView = require("./code/pages/ProductView");

var PageNotFound = require("./code/pages/PageNotFound"); // 
// every time something tries to change pages
// 


var previousPage = NaN; // NaN is just for init (makes comparision always not-equal)

function onRouteChange() {
  // if the page changes
  if (previousPage != router.pageInfo.page) {
    previousPage = router.pageInfo.page; // silently redirect to home page

    if (previousPage == null) {
      previousPage = "home";
    } // 
    // load page
    // 


    if (previousPage == "home") {
      document.body = /*#__PURE__*/React.createElement(Home, null);
    } else if (previousPage == "product-view") {
      document.body = /*#__PURE__*/React.createElement(ProductView, null);
    } else {
      document.body = /*#__PURE__*/React.createElement(PageNotFound, null);
    }
  }
}

router.addEventListener("go", onRouteChange);
onRouteChange(); // first time the page loads
},{"css-baseline/css/3":"../../node_modules/css-baseline/css/3.css","./global.scss":"../global.scss","quik-router":"../../node_modules/quik-router/main/main.js","./code/tools/gun":"../code/tools/gun.js","quik-client":"../../node_modules/quik-client/index.js","./code/pages/Home":"../code/pages/Home.jsx","./code/pages/ProductView":"../code/pages/ProductView.jsx","./code/pages/PageNotFound":"../code/pages/PageNotFound.jsx"}],"../../node_modules/.pnpm/parcel-bundler@1.12.5/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56155" + '/');

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