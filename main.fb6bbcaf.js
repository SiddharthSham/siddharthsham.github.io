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
})({"js/utils/Dom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bounds = exports.qsa = exports.qs = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var qs = function qs(s) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return o.querySelector(s);
};

exports.qs = qs;

var qsa = function qsa(s) {
  var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return _toConsumableArray(o.querySelectorAll(s));
};

exports.qsa = qsa;

var bounds = function bounds(el) {
  return el.getBoundingClientRect();
};

exports.bounds = bounds;
},{}],"js/utils/Check.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = exports.isUndefined = void 0;

var isUndefined = function isUndefined(o) {
  return o === undefined;
};

exports.isUndefined = isUndefined;

var isArray = function isArray(o) {
  return o.constructor === Array;
};

exports.isArray = isArray;
},{}],"js/utils/MathUtils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.damp = exports.invlerp = exports.round = exports.clamp = exports.map = exports.lerp = void 0;

var lerp = function lerp(a, b, n) {
  return (1 - n) * a + n * b;
};

exports.lerp = lerp;

var map = function map(val, a, b, c, d) {
  return (val - a) * (d - c) / (b - a) + c;
};

exports.map = map;

var clamp = function clamp(val, min, max) {
  return Math.min(Math.max(min, val), max);
};

exports.clamp = clamp;

var round = function round(val) {
  var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e2;
  return Math.round(val * p) / p;
};

exports.round = round;

var invlerp = function invlerp(a, b, n) {
  return clamp(0, (n - a) / (b - a), 1);
}; // frame delta aware verion of lerp
// lambda = Math.log(1 - r/15) ~approx


exports.invlerp = invlerp;

var damp = function damp(a, b, lambda, dt) {
  return lerp(a, b, 1 - Math.exp(lambda * dt));
};

exports.damp = damp;
},{}],"js/utils/BindAll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindAll = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// bindAll(this, ['bindFunction1', 'bindFunction2', 'bindFunction3'])
var bindAll = function bindAll(ctx, arr) {
  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var method = _step.value;
      ctx[method] = ctx[method].bind(ctx);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

exports.bindAll = bindAll;
},{}],"js/utils/Observer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observer = void 0;

var Observer = function Observer() {
  var create = function create(options) {
    var change = function change(entries, observer) {
      entries.forEach(function (entry) {
        var unobserve = function unobserve(node) {
          return observer.unobserve(node);
        };

        options.callback(entry.target, entry.isIntersecting, unobserve, entry);
      });
    };

    var observer = new IntersectionObserver(change, {
      root: null,
      rootMargin: "".concat(options.offset || 0),
      threshold: options.threshold || 0
    });
    return {
      observe: function observe(node) {
        return observer.observe(node);
      }
    };
  };

  return {
    create: create
  };
};

exports.Observer = Observer;
},{}],"js/utils/ImageLoader.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageLoader = void 0;

var ImageLoader = function ImageLoader(_ref) {
  var src = _ref.src,
      update = _ref.update,
      finalUpdate = _ref.finalUpdate;
  var loaded = 0;
  var n = src.length;
  var running = new Array(n);
  src.forEach(function (el, i) {
    var img = new Image();
    img.src = el.src;
    var promise = img.decode().catch(function (err) {
      console.warn("[IMG LOADER:]", err);
    }).finally(function () {
      update && update(el, i, ++loaded / n * 100);
      img = null;
    });
    running.push(promise);
  });
  Promise.all(running).then(function () {
    finalUpdate && finalUpdate();
  });
};
/**
 *
 *
 * Example usage
 *
 *
 */
// load({
//   src: document.querySelectorAll('[data-gl-image]`)
//   update: (img, progress) => {
//     console.log("Progress:", progress);
//   },
//   finalUpdate: () => {
//     console.log("All loaded!");
//   },
// });


exports.ImageLoader = ImageLoader;
},{}],"js/utils/Sniff.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sniff = void 0;
var Sniff = {
  get uA() {
    return navigator.userAgent.toLowerCase();
  },

  get safari() {
    return /^((?!chrome|android).)*safari/.test(this.uA);
  },

  get safariVersion() {
    return +(this.uA.match(/version\/[\d\.]+.*safari/) || ["-1"])[0].replace(/^version\//, "").replace(/ safari$/, "");
  },

  get firefox() {
    return this.uA.indexOf("firefox") > -1;
  },

  get chrome() {
    return /chrome/.test(this.uA);
  },

  get ie() {
    return /msie|trident/.test(this.uA);
  },

  get webkit() {
    return /webkit/.test(this.uA);
  },

  get edge() {
    return /edge\/\d./.test(this.uA);
  },

  get ios() {
    return /ip(hone|[ao]d)/.test(this.uA);
  },

  get mac() {
    return this.pf.indexOf("mac") > -1;
  },

  get windows() {
    return this.pf.indexOf("win") > -1;
  },

  get android() {
    return /android/.test(this.uA);
  },

  get androidMobile() {
    return /android.*mobile/.test(this.uA);
  },

  get mobile() {
    return this.androidMobile || this.ios || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
  },

  get touchDevice() {
    return "ontouchstart" in window;
  },

  get mutationObserver() {
    return "MutationObserver" in window;
  }

};
exports.Sniff = Sniff;
},{}],"js/utils/Ease.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ease = void 0;
var Ease = {
  linear: function linear(m) {
    return m;
  },
  i1: function i1(m) {
    return -Math.cos(m * (Math.PI / 2)) + 1;
  },
  o1: function o1(m) {
    return Math.sin(m * (Math.PI / 2));
  },
  io1: function io1(m) {
    return -0.5 * (Math.cos(Math.PI * m) - 1);
  },
  i2: function i2(m) {
    return m * m;
  },
  o2: function o2(m) {
    return m * (2 - m);
  },
  io2: function io2(m) {
    return m < 0.5 ? 2 * m * m : -1 + (4 - 2 * m) * m;
  },
  i3: function i3(m) {
    return m * m * m;
  },
  o3: function o3(m) {
    return --m * m * m + 1;
  },
  io3: function io3(m) {
    return m < 0.5 ? 4 * m * m * m : (m - 1) * (2 * m - 2) * (2 * m - 2) + 1;
  },
  i4: function i4(m) {
    return m * m * m * m;
  },
  o4: function o4(m) {
    return 1 - --m * m * m * m;
  },
  io4: function io4(m) {
    return m < 0.5 ? 8 * m * m * m * m : 1 - 8 * --m * m * m * m;
  },
  i5: function i5(m) {
    return m * m * m * m * m;
  },
  o5: function o5(m) {
    return 1 + --m * m * m * m * m;
  },
  io5: function io5(m) {
    return m < 0.5 ? 16 * m * m * m * m * m : 1 + 16 * --m * m * m * m * m;
  },
  i6: function i6(m) {
    return m === 0 ? 0 : Math.pow(2, 10 * (m - 1));
  },
  o6: function o6(m) {
    return m === 1 ? 1 : 1 - Math.pow(2, -10 * m);
  },
  io6: function io6(m) {
    if (m === 0) return 0;
    if (m === 1) return 1;
    if ((m /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (m - 1));
    return 0.5 * (-Math.pow(2, -10 * --m) + 2);
  }
};
exports.Ease = Ease;
},{}],"js/utils/Throttle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Throttle = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*

const throttledCallback = new Throttle({
    delay: 200,
    onlyAtEnd: true,
    cb: callback
})
throttledCallback.run()

*/
var Throttle = /*#__PURE__*/function () {
  function Throttle(o) {
    _classCallCheck(this, Throttle);

    this.del = o.delay;
    this.onlyAtEnd = o.onlyAtEnd;
    this.cb = o.cb;
    this.last = 0;
    this.t = 0;
  }

  _createClass(Throttle, [{
    key: "run",
    value: function run() {
      var _this = this;

      var firstTime = true;
      var now = Performance.now();

      if (this.last && now < this.last + this.del || firstTime) {
        firstTime = false;
        clearTimeout(this.t);
        this.t = setTimeout(function () {
          _this.last = now;

          _this.cb();
        }, this.del);
      } else {
        this.last = now;

        if (!this.onlyAtEnd) {
          firstTime = false;
          this.cb();
        }
      }
    }
  }]);

  return Throttle;
}();

exports.Throttle = Throttle;
},{}],"js/core/ticker.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticker = void 0;

var _Sniff = require("../utils/Sniff");

var _BindAll = require("../utils/BindAll");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * Global ticker to reduce
 * memory overhead
 *
 * TODO:
 * Update to use Array instead of Set
 */
var Ticker = /*#__PURE__*/function () {
  function Ticker() {
    _classCallCheck(this, Ticker);

    this.train = new Set();
    this.once = [];
    this.instance = {
      lastFrameTime: 0,
      nextFrame: null,
      targetFPS: 60
    };
    this.targetDelta = 1000 / this.instance.targetFPS;
    this.maxDelta = this.targetDelta * 2;
    this.listeners();
    (0, _BindAll.bindAll)(this, ["run", "play", "pause"]);
    this.paused = true;
  }

  _createClass(Ticker, [{
    key: "add",
    value: function add(_ref) {
      var name = _ref.name,
          update = _ref.update,
          begin = _ref.begin,
          end = _ref.end;
      this.train.add({
        name: name,
        update: update,
        begin: begin,
        end: end
      });
      return this.ref(name);
    }
  }, {
    key: "nextFrame",
    value: function nextFrame(update) {
      this.once.push(update);
    }
  }, {
    key: "remove",
    value: function remove(name) {
      var _iterator = _createForOfIteratorHelper(this.train),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var o = _step.value;

          if (o.name === name) {
            return this.train.delete(o);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "ref",
    value: function ref(name) {
      var _iterator2 = _createForOfIteratorHelper(this.train),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var o = _step2.value;

          if (o.name === name) {
            return o.animation;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  }, {
    key: "run",
    value: function run() {
      var elapsedTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var delta = elapsedTime - (this.instance.lastFrameTime || 0);
      this.instance.nextFrame = requestAnimationFrame(this.run);
      this.instance.lastFrameTime = elapsedTime;
      delta = Math.min(delta, this.targetDelta);

      var _iterator3 = _createForOfIteratorHelper(this.train),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var o = _step3.value;
          o.begin && o.begin();
          o.update(delta, elapsedTime);
          o.end && o.end();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var _iterator4 = _createForOfIteratorHelper(this.once),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var update = _step4.value;
          update(delta, elapsedTime);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.once = [];
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.paused) return;
      cancelAnimationFrame(this.instance.nextFrame);
      this.paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.paused) return;
      this.paused = false;
      this.instance.lastFrameTime = performance.now();
      requestAnimationFrame(this.run);
    }
  }, {
    key: "listeners",
    value: function listeners() {
      var _this = this;

      document.addEventListener("visibilitychange", function (e) {
        document.visibilityState === "hidden" ? _this.pause() : _this.play();
      });
      !_Sniff.Sniff.safari && window.addEventListener("pagehide", function (e) {
        _this.pause();
      });
    }
  }]);

  return Ticker;
}(); // Global ticker


var ticker = new Ticker();
exports.ticker = ticker;
ticker.play();
},{"../utils/Sniff":"js/utils/Sniff.js","../utils/BindAll":"js/utils/BindAll.js"}],"js/utils/Delay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Delay = void 0;

var _ticker = require("../core/ticker");

var _BindAll = require("./BindAll");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 *
 * Utility to run callbacks after set delay
 *
 *
 */
var id = 0;
var delayTrain = [];

_ticker.ticker.add({
  name: "delay",
  update: function update(delta) {
    delayTrain.forEach(function (o) {
      return o.update(delta);
    });
  }
});

var Delay = /*#__PURE__*/function () {
  function Delay(update, duration) {
    _classCallCheck(this, Delay);

    this.update = update;
    this.duration = duration;
    this.elapsed = 0;
    this.paused = false;
    (0, _BindAll.bindAll)(this, ["run", "play", "pause", "destroy"]);
    this.init();
  }

  _createClass(Delay, [{
    key: "init",
    value: function init() {
      this.id = id++;
      delayTrain.push({
        id: this.id,
        update: this.run
      });
    }
  }, {
    key: "run",
    value: function run(delta) {
      if (this.paused) return;
      this.elapsed += delta;

      if (this.elapsed >= this.duration) {
        this.update();
        this.destroy();
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      delayTrain = delayTrain.filter(function (el) {
        return el.id !== _this.id;
      });
      return null;
    }
  }]);

  return Delay;
}();

exports.Delay = Delay;
},{"../core/ticker":"js/core/ticker.js","./BindAll":"js/utils/BindAll.js"}],"js/utils/GridOverlay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gridOverlay = void 0;

var gridOverlay = function gridOverlay(_ref) {
  var _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? 12 : _ref$cols,
      _ref$startVisible = _ref.startVisible,
      startVisible = _ref$startVisible === void 0 ? true : _ref$startVisible;
  var grid = document.querySelector("grid-overlay");
  var toggle = document.querySelector("grid-toggle");

  if (toggle !== null && grid !== null) {
    var frag = document.createDocumentFragment();

    for (var i = 0; i < cols; i++) {
      var el = document.createElement("div");
      frag.appendChild(el);
    }

    grid.innerHTML = null;
    grid.appendChild(frag);
    var state = startVisible;
    grid.style.opacity = state ? 1 : 0;
    state = !state;
    toggle.addEventListener("click", function () {
      grid.style.opacity = state ? 1 : 0;
      state = !state;
    });
  }
};

exports.gridOverlay = gridOverlay;
},{}],"js/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "qs", {
  enumerable: true,
  get: function () {
    return _Dom.qs;
  }
});
Object.defineProperty(exports, "qsa", {
  enumerable: true,
  get: function () {
    return _Dom.qsa;
  }
});
Object.defineProperty(exports, "bounds", {
  enumerable: true,
  get: function () {
    return _Dom.bounds;
  }
});
Object.defineProperty(exports, "isUndefined", {
  enumerable: true,
  get: function () {
    return _Check.isUndefined;
  }
});
Object.defineProperty(exports, "isArray", {
  enumerable: true,
  get: function () {
    return _Check.isArray;
  }
});
Object.defineProperty(exports, "lerp", {
  enumerable: true,
  get: function () {
    return _MathUtils.lerp;
  }
});
Object.defineProperty(exports, "round", {
  enumerable: true,
  get: function () {
    return _MathUtils.round;
  }
});
Object.defineProperty(exports, "clamp", {
  enumerable: true,
  get: function () {
    return _MathUtils.clamp;
  }
});
Object.defineProperty(exports, "invlerp", {
  enumerable: true,
  get: function () {
    return _MathUtils.invlerp;
  }
});
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function () {
    return _MathUtils.map;
  }
});
Object.defineProperty(exports, "damp", {
  enumerable: true,
  get: function () {
    return _MathUtils.damp;
  }
});
Object.defineProperty(exports, "bindAll", {
  enumerable: true,
  get: function () {
    return _BindAll.bindAll;
  }
});
Object.defineProperty(exports, "Observer", {
  enumerable: true,
  get: function () {
    return _Observer.Observer;
  }
});
Object.defineProperty(exports, "ImageLoader", {
  enumerable: true,
  get: function () {
    return _ImageLoader.ImageLoader;
  }
});
Object.defineProperty(exports, "Sniff", {
  enumerable: true,
  get: function () {
    return _Sniff.Sniff;
  }
});
Object.defineProperty(exports, "Ease", {
  enumerable: true,
  get: function () {
    return _Ease.Ease;
  }
});
Object.defineProperty(exports, "Throttle", {
  enumerable: true,
  get: function () {
    return _Throttle.Throttle;
  }
});
Object.defineProperty(exports, "Delay", {
  enumerable: true,
  get: function () {
    return _Delay.Delay;
  }
});
Object.defineProperty(exports, "gridOverlay", {
  enumerable: true,
  get: function () {
    return _GridOverlay.gridOverlay;
  }
});

var _Dom = require("./Dom");

var _Check = require("./Check");

var _MathUtils = require("./MathUtils");

var _BindAll = require("./BindAll");

var _Observer = require("./Observer");

var _ImageLoader = require("./ImageLoader");

var _Sniff = require("./Sniff");

var _Ease = require("./Ease.js");

var _Throttle = require("./Throttle");

var _Delay = require("./Delay");

var _GridOverlay = require("./GridOverlay");
},{"./Dom":"js/utils/Dom.js","./Check":"js/utils/Check.js","./MathUtils":"js/utils/MathUtils.js","./BindAll":"js/utils/BindAll.js","./Observer":"js/utils/Observer.js","./ImageLoader":"js/utils/ImageLoader.js","./Sniff":"js/utils/Sniff.js","./Ease.js":"js/utils/Ease.js","./Throttle":"js/utils/Throttle.js","./Delay":"js/utils/Delay.js","./GridOverlay":"js/utils/GridOverlay.js"}],"js/core/ro.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ro = void 0;

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RO = /*#__PURE__*/function () {
  function RO() {
    _classCallCheck(this, RO);

    this.train = new Set();
    this.listen();
  }

  _createClass(RO, [{
    key: "add",
    value: function add(_ref) {
      var name = _ref.name,
          update = _ref.update;
      this.train.add({
        name: name,
        update: update
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      var event = _utils.Sniff.mobile ? "orientationchange" : "resize";
      window.addEventListener(event, function () {
        var bounds = {
          vw: window.innerWidth,
          vh: window.innerHeight
        };

        _this.train.forEach(function (o) {
          o.update(bounds);
        });
      });
    }
  }]);

  return RO;
}();

var ro = new RO();
exports.ro = ro;
},{"../utils":"js/utils/index.js"}],"js/core/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ticker", {
  enumerable: true,
  get: function () {
    return _ticker.ticker;
  }
});
Object.defineProperty(exports, "ro", {
  enumerable: true,
  get: function () {
    return _ro.ro;
  }
});

var _ticker = require("./ticker");

var _ro = require("./ro");
},{"./ticker":"js/core/ticker.js","./ro":"js/core/ro.js"}],"js/vau/vau.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Vau = void 0;

var _utils = require("../utils");

var _core = require("../core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 *
 * TODO:
 *
 * 1) Decouple timer/progress and
 * DOM update callbacks
 *
 * 3) Add reverse direction
 *
 * 5) Unset transform on complete?
 */

/**
 *
 * Target API:
 *
 * new Vau({
 *   targets: [el],
 *   easing: "io3",
 *   duration: 1000,
 *   transform: {
 *     tx: [0, 100, "%"], // from, to, unit
 *     ty: 300, // take default 0 + px, else from previous animation in timeline
 *     sx: [1, 2], // scale
 *     rz: 90, // rotate3d, default unit - degrees
 *   },
 *   opacity: [1, 1],
 *   reverse: true
 * });
 *
 *
 */
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------
// -------------------------------------------------------------

/**
 *
 *
 * Global animation train
 *
 *
 */
var id = 0;
var vauTrain = [];

_core.ticker.add({
  name: "vau",
  update: function update(delta) {
    vauTrain.forEach(function (o) {
      return o.update(delta);
    });
  }
}); // convert into matrix?


var createTransform = function createTransform(_ref) {
  var _ref$tx = _ref.tx,
      tx = _ref$tx === void 0 ? null : _ref$tx,
      _ref$ty = _ref.ty,
      ty = _ref$ty === void 0 ? null : _ref$ty,
      _ref$sx = _ref.sx,
      sx = _ref$sx === void 0 ? null : _ref$sx,
      _ref$sy = _ref.sy,
      sy = _ref$sy === void 0 ? null : _ref$sy,
      _ref$rx = _ref.rx,
      rx = _ref$rx === void 0 ? null : _ref$rx,
      _ref$ry = _ref.ry,
      ry = _ref$ry === void 0 ? null : _ref$ry,
      _ref$rz = _ref.rz,
      rz = _ref$rz === void 0 ? null : _ref$rz;
  var t = "";

  if (tx || ty || tx === 0 || ty === 0) {
    !tx && tx !== 0 && (tx = [0, "px"]);
    !ty && ty !== 0 && (ty = [0, "px"]);
    t += "translate3d(".concat(tx[0]).concat(tx[1], ", ").concat(ty[0]).concat(ty[1], ", 0) ");
  }

  if (sx || sy || sx === 0 || sy === 0) {
    !sx && sx !== 0 && (sx = 1);
    !sy && sy !== 0 && (sy = 1);
    t += "scale3d(".concat(sx, ", ").concat(sy, ", 1) ");
  }

  if (rx || ry || rz || rx === 0 || ry === 0 || rz === 0) {
    !rx && rx !== 0 && (rx = 0);
    !ry && ry !== 0 && (ry = 0);
    !rz && rz !== 0 && (rz = 0);
    t += "rotate3d(".concat(rx, ", ").concat(ry, ", ").concat(rz, ", ").concat(rx + ry + rz, "deg)");
  } // console.log(t);


  return t;
};

var transform = function transform(el, props, units) {
  props.tx = [props.tx, units[0]];
  props.ty = [props.ty, units[1]];
  el.style.transform = createTransform(props);
};
/**
 *
 *
 * Vau animations
 *
 *
 */


var Vau = /*#__PURE__*/function () {
  function Vau(_ref2) {
    var _ref2$targets = _ref2.targets,
        targets = _ref2$targets === void 0 ? null : _ref2$targets,
        _ref2$generic = _ref2.generic,
        generic = _ref2$generic === void 0 ? null : _ref2$generic,
        _ref2$transform = _ref2.transform,
        transform = _ref2$transform === void 0 ? null : _ref2$transform,
        _ref2$opacity = _ref2.opacity,
        opacity = _ref2$opacity === void 0 ? null : _ref2$opacity,
        _ref2$duration = _ref2.duration,
        duration = _ref2$duration === void 0 ? 0 : _ref2$duration,
        _ref2$delay = _ref2.delay,
        delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
        _ref2$easing = _ref2.easing,
        easing = _ref2$easing === void 0 ? "linear" : _ref2$easing,
        _ref2$begin = _ref2.begin,
        begin = _ref2$begin === void 0 ? null : _ref2$begin,
        _ref2$complete = _ref2.complete,
        complete = _ref2$complete === void 0 ? null : _ref2$complete,
        _ref2$update = _ref2.update,
        update = _ref2$update === void 0 ? null : _ref2$update,
        _ref2$autoplay = _ref2.autoplay,
        autoplay = _ref2$autoplay === void 0 ? true : _ref2$autoplay;

    _classCallCheck(this, Vau);

    // check if targets exist
    var t;

    if (_typeof(targets) === _typeof("")) {
      t = (0, _utils.qsa)(targets);
    } else if (targets && (0, _utils.isArray)(targets)) {
      t = targets;
    } else {
      t = false;
    } // default values for update flags


    this.updateOpacity = false;
    this.updateTransform = false;

    if (t) {
      // check if opacity needs updates
      opacity && (this.updateOpacity = true); // check if transform needs updates

      transform && (this.updateTransform = true);
    }

    this.callbacks = {
      begin: begin,
      complete: complete,
      update: update
    };
    this.config = {
      duration: duration,
      delay: delay,
      easing: _utils.Ease[easing]
    };
    this.state = {
      targets: t,
      elapsed: 0,
      easeProgress: 0,
      dom: {
        transform: {},
        opacity: []
      },
      generic: []
    };
    var txs = Object.assign({
      tx: null,
      ty: null,
      sx: null,
      sy: null,
      rx: null,
      ry: null,
      rz: null
    }, transform);

    if (this.updateTransform) {
      !txs.tx && (txs.tx = ["", "", "px"]);
      !txs.ty && (txs.ty = ["", "", "px"]);
      txs.tx && !txs.tx[2] && (txs.tx[2] = "px");
      txs.ty && !txs.ty[2] && (txs.ty[2] = "px");
    }

    var nco = this.updateOpacity && (0, _utils.isArray)(opacity) ? opacity : [1, opacity]; // internal props array for tweening

    this.DOMprops = {
      transform: txs,
      opacity: nco
    };
    this.genericProps = generic ? generic : []; // set current values to initial values
    // if (this.updateTransform) {
    //   for (const name in txs) {
    //     const el = txs[name];
    //     el && (this.state.dom.transform[name] = el[0]);
    //   }
    // }
    // this.updateOpacity && (this.state.dom.opacity = nco[0]);
    // this.state.generic = this.genericProps.map((el) => el[0]);

    this.progress = 0;
    this.paused = !autoplay;
    (0, _utils.bindAll)(this, ["update", "destroy", "pause", "play", "restart"]);
    this.init();
    txs = null;
    nco = null;
  }

  _createClass(Vau, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.id = id++;
      this.delay = new _utils.Delay(function () {
        vauTrain.push({
          id: _this.id,
          update: _this.update
        });
        _this.callbacks.begin && _this.callbacks.begin(_this.state);
      }, this.config.delay);
    } // pass in delta time since last frame

  }, {
    key: "update",
    value: function update() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 / 60;
      // check play status
      if (this.paused) return; // final update

      if (this.state.elapsed > this.config.duration) {
        this.destroy();
        this.callbacks.complete && this.callbacks.complete();
        return;
      }

      this.state.elapsed += t;
      this.progress = (0, _utils.clamp)(this.state.elapsed / this.config.duration, 0, 1);
      this.state.easeProgress = this.config.easing(this.progress);
      /**
       *
       *
       * TODO: Combine lerps into one loop
       *
       */
      //  update transform

      if (this.updateTransform) {
        for (var propName in this.DOMprops.transform) {
          var val = this.DOMprops.transform[propName];

          if (val) {
            this.state.dom.transform[propName] = (0, _utils.lerp)(val[0], val[1], this.state.easeProgress);
          }
        }
      } // update opacity


      if (this.updateOpacity) {
        this.state.dom.opacity = (0, _utils.lerp)(this.DOMprops.opacity[0], this.DOMprops.opacity[1], this.state.easeProgress);
      } // update generic


      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.genericProps),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var prop = _step.value;
          this.state.generic[i++] = (0, _utils.lerp)(prop[0], prop[1], this.state.easeProgress);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.callbacks.update && this.callbacks.update(this.state);
      this.state.targets && this.setDOM(this.state.dom);
    }
  }, {
    key: "setDOM",
    value: function setDOM(props) {
      var _iterator2 = _createForOfIteratorHelper(this.state.targets),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var target = _step2.value;
          this.updateTransform && transform(target, props.transform, [this.DOMprops.transform.tx[2], this.DOMprops.transform.ty[2]]);
          this.updateOpacity && props.opacity >= 0 && (target.style.opacity = props.opacity);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      this.delay && this.delay.pause();
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
      this.delay && this.delay.play();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.pause();
      this.destroy();
      this.state.elapsed = 0;
      this.init();
      this.play();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      vauTrain = vauTrain.filter(function (el) {
        return el.id !== _this2.id;
      });
      this.delay && (this.delay = this.delay.destroy());
    }
  }]);

  return Vau;
}();
/**
 *
 *
 * Timeline Animations
 *
 *
 */


exports.Vau = Vau;

var Timeline = /*#__PURE__*/function () {
  function Timeline(o) {
    _classCallCheck(this, Timeline);

    this.train = [];
    this.delay = 0;
    this.defaults = o;
    (0, _utils.bindAll)(this, ["play", "pause", "restart"]);
  }

  _createClass(Timeline, [{
    key: "add",
    value: function add(o) {
      o = _objectSpread(_objectSpread({}, this.defaults), o); // combine delays to create timeline

      this.delay += o.delay || 0;
      o.delay = this.delay;
      this.train.push(new Vau(o));
      this.delay += o.duration || 0;
      return this;
    }
  }, {
    key: "play",
    value: function play() {
      this.train.forEach(function (o) {
        return o.play();
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      this.train.forEach(function (o) {
        return o.pause();
      });
    }
  }, {
    key: "restart",
    value: function restart() {
      this.train.forEach(function (o) {
        return o.restart();
      });
    }
  }]);

  return Timeline;
}();

exports.Timeline = Timeline;
},{"../utils":"js/utils/index.js","../core":"js/core/index.js"}],"js/vau/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Vau", {
  enumerable: true,
  get: function () {
    return _vau.Vau;
  }
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: function () {
    return _vau.Timeline;
  }
});

var _vau = require("./vau");
},{"./vau":"js/vau/vau.js"}],"js/animations/nscroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scroller = void 0;

var _utils = require("../utils");

var _core = require("../core");

var _vau = require("../vau");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scroller = /*#__PURE__*/function () {
  function Scroller(opts) {
    _classCallCheck(this, Scroller);

    this.settings = _objectSpread({
      inertia: 0.1,
      dragSpeed: 2
    }, opts); // convert inertia to log scale

    this.settings.inertia = Math.log(1 - this.settings.inertia / 30);
    this.docEl = document.scrollingElement || document.documentElement;
    this.bounds = {
      vh: window.innerHeight,
      vw: window.innerWidth
    };
    window.scrollTo(0, 0);
    this.syncTrain = [];
    (0, _utils.bindAll)(this, ["resize", "update", "init"]);
    this.init();
    this.listeners();
    this.anchors();

    _core.ticker.add({
      name: "scroller",
      update: this.update
    });

    _core.ro.add({
      name: "scroller",
      update: this.resize
    });
  }

  _createClass(Scroller, [{
    key: "init",
    value: function init() {
      this.scrollContent = (0, _utils.qs)("[data-scroll-content]", this.docEl);
      this.scrollSections = (0, _utils.qsa)("[data-scroll-section]", this.scrollContent);
      this.scrollSections = this.scrollSections.length === 0 ? [this.scrollContent] : this.scrollSections;
      this.instance = {
        cur: 0,
        target: 0,
        inertia: this.settings.inertia
      };
      this.drag = {
        isDragging: false,
        snap: {
          x: 0,
          y: 0
        },
        cur: {
          x: 0,
          y: 0
        },
        lastScroll: 0
      };
      this.resize();
      this.style();
      this.unlock();
      this.shouldAnimate = true;
      this.update();
    }
  }, {
    key: "listeners",
    value: function listeners() {
      var _this = this;

      var deltaNorm = 1;
      _utils.Sniff.firefox && (deltaNorm *= 20);

      var setCurrent = function setCurrent(y) {
        _this.instance.cur = (0, _utils.clamp)(0, y, _this.scrollHeight);
      };

      window.addEventListener("wheel", function (e) {
        if (_this.drag.isDragging || _this.locked) return;
        setCurrent(_this.instance.cur + e.deltaY * deltaNorm);
        _this.shouldAnimate = true;
      }, {
        passive: true
      });
      var shiftDir = 1;
      var spaceGap = this.bounds.vh - 40;
      document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          setCurrent(_this.instance.cur + 100);
        } else if (e.key === "ArrowUp") {
          setCurrent(_this.instance.cur - 100);
        } else if (e.code == "Space" && e.target.nodeName !== "INPUT" && e.target.nodeName !== "TEXTAREA") {
          shiftDir = e.shiftKey ? -1 : 1;
          setCurrent(_this.instance.cur + spaceGap * shiftDir);
        } else if (e.key === "PageDown") {
          setCurrent(_this.instance.cur + _this.bounds.vh);
        } else if (e.key === "PageUp") {
          setCurrent(_this.instance.cur - _this.bounds.vh);
        }
      });
      var start = "start";
      var end = "end";
      var pointer = "touch";
      var isTouch = true;

      if (!_utils.Sniff.touchDevice) {
        pointer = window.PointerEvent ? "pointer" : "mouse";
        start = "down";
        end = "up";
        isTouch = false;
      }

      window.addEventListener("".concat(pointer).concat(start), function (e) {
        _this.drag.isDragging = true;
        _this.drag.snap.y = isTouch ? e.changedTouches[0].clientY : e.clientY;
        _this.drag.lastScroll = _this.instance.cur;
      }, {
        passive: true
      });
      window.addEventListener("".concat(pointer, "move"), function (e) {
        if (!_this.drag.isDragging) return;
        _this.drag.cur.y = isTouch ? e.changedTouches[0].clientY : e.clientY;
        var diff = (_this.drag.cur.y - _this.drag.snap.y) * _this.settings.dragSpeed;
        if (Math.abs(diff) < 15) return;
        setCurrent(_this.drag.lastScroll - diff);
        _this.shouldAnimate = true;
      }, {
        passive: true
      });
      window.addEventListener("".concat(pointer).concat(end), function (e) {
        if (!_this.drag.isDragging) return;
        _this.drag.isDragging = false;
      }, {
        passive: true
      });
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(y) {
      var _this2 = this;

      new _vau.Vau({
        duration: 750,
        easing: "io4",
        generic: [[this.instance.cur, y]],
        update: function update(ctx) {
          _this2.instance.cur = ctx.generic[0];
        }
      });
    }
  }, {
    key: "anchors",
    value: function anchors() {
      var _this3 = this;

      (0, _utils.qs)("[data-scroll-top]").addEventListener("click", function () {
        _this3.scrollTo(0);
      });
      (0, _utils.qsa)("[data-scroll-to]").forEach(function (el) {
        var target = (0, _utils.bounds)((0, _utils.qs)(el.dataset.scrollTo)).top - 25;
        el.addEventListener("click", function () {
          _this3.scrollTo(target);
        });
      });
    }
  }, {
    key: "style",
    value: function style() {
      this.scrollContent.style = "width: 100vw; min-height: 100vh; position:fixed;"; // this.scrollSections.forEach((section) => {
      //   section.style.contain = "content";
      // });
    }
  }, {
    key: "resize",
    value: function resize() {
      var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        vw: window.innerWidth,
        vh: window.innerHeight
      };
      this.bounds = o;
      this.scrollHeight = Math.max(this.scrollContent.scrollHeight, this.bounds.vh) - this.bounds.vh;
      document.body.style.overscrollBehavior = "none";
      this.cache = [];

      var _iterator = _createForOfIteratorHelper(this.scrollSections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var section = _step.value;
          var top = section.offsetTop;
          var speed = 1;

          if (section.dataset.scrollSpeed !== undefined) {
            speed = parseFloat(section.dataset.scrollSpeed);
          }

          this.cache.push({
            visible: true,
            top: top - this.bounds.vh,
            bottom: top + section.scrollHeight
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.shouldAnimate = true;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this4 = this;

      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 / 60;
      if (!this.shouldAnimate && this.animComplete || this.locked) return;
      this.instance.target = (0, _utils.damp)(this.instance.target, this.instance.cur, this.instance.inertia, delta);
      this.scrollSections.forEach(function (section, i) {
        var el = _this4.cache[i];
        var y = _this4.instance.target;

        if (y > el.top && y <= el.bottom) {
          if (!el.visible) {
            el.visible = true;
            section.style.pointerEvents = "all";
            section.style.opacity = 1;
          }

          section.style.transform = "translate3d(0, ".concat(-y, "px, 0)");
        } else if (el.visible) {
          section.style.pointerEvents = "none";
          section.style.opacity = 0;
          section.style.transform = "none";
          el.visible = false;
        }
      });

      var _iterator2 = _createForOfIteratorHelper(this.syncTrain),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var update = _step2.value;
          update(this.instance.target);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.shouldAnimate = false;
    }
  }, {
    key: "sync",
    value: function sync(update) {
      this.syncTrain.push(update);
    }
  }, {
    key: "lock",
    value: function lock() {
      this.locked = true; // lock position too?
    }
  }, {
    key: "unlock",
    value: function unlock() {
      this.locked = false;
    }
  }, {
    key: "getScroll",
    get: function get() {
      return window.pageYOffset;
    }
  }, {
    key: "animComplete",
    get: function get() {
      return (0, _utils.round)(this.instance.cur) === (0, _utils.round)(this.instance.target);
    }
  }]);

  return Scroller;
}();

exports.Scroller = Scroller;
},{"../utils":"js/utils/index.js","../core":"js/core/index.js","../vau":"js/vau/index.js"}],"js/animations/tablehover.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHover = void 0;

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableHover = /*#__PURE__*/function () {
  function TableHover() {
    _classCallCheck(this, TableHover);

    this.table = document.getElementById("table-container");
    this.rows = document.querySelectorAll(".hover-line");
    this.activeRow = null;
    this.currentDelay = null;
    this.listen();
  }

  _createClass(TableHover, [{
    key: "enterStyle",
    value: function enterStyle() {
      var _this = this;

      this.currentDelay = new _utils.Delay(function () {
        _this.table.querySelectorAll(".inactive").forEach(function (el) {
          el.style.opacity = 0;
        });
      }, 200);
    }
  }, {
    key: "leaveStyle",
    value: function leaveStyle() {
      this.currentDelay.destroy();
      this.rows.forEach(function (row) {
        row.style.opacity = 1;
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.rows.forEach(function (row) {
        row.classList.add("inactive");
        row.addEventListener("pointerenter", function () {
          row.classList.remove("inactive");
          _this2.activeRow = row;

          _this2.enterStyle();
        });
        row.addEventListener("pointerleave", function () {
          row.classList.add("inactive");

          _this2.leaveStyle();
        });
      });
    }
  }]);

  return TableHover;
}();

exports.TableHover = TableHover;
},{"../utils":"js/utils/index.js"}],"js/animations/observerEffect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObserverEffect = void 0;

var _utils = require("../utils");

var _core = require("../core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObserverEffect = /*#__PURE__*/function () {
  function ObserverEffect() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ObserverEffect);

    this.once = options.once || true;
    this.ismobile = options.ismobile || false;
    this.limit = options.limit || 10;
    this.observers = {};
    this.control = true;
    this.toVisible = [];
    this.toHidden = [];
    this.lock = false;
    this.update = this.update.bind(this);
    this.init();
  }

  _createClass(ObserverEffect, [{
    key: "init",
    value: function init() {
      this.splitter();
      this.create({
        name: "lines",
        wrapperSelector: ".l-capture",
        targetSelector: ".l-line",
        visibleClass: "l-visible"
      }); // this.create({
      //   name: "hr",
      //   wrapperSelector: "hr",
      //   visibleClass: "hr-visible",
      // });

      _core.ticker.add({
        name: "reveal",
        update: this.update
      });
    }
  }, {
    key: "splitter",
    value: function splitter() {
      var paras = document.querySelectorAll(".l-capture");
      if (paras.length === 0) return;
      var canvasEl = document.createElement("canvas");
      var ghost = "OffscreenCanvas" in window ? canvasEl.transferControlToOffscreen() : canvasEl;
      var context = ghost.getContext("2d");
      paras.forEach(function (para) {
        // console.log(para);
        var content = para.querySelector(".l-content");
        var words = content.textContent.split(" ");
        var lines = [];
        var curline = [];
        var compStyle = getComputedStyle(para); // const sz = compStyle.getPropertyValue("font-size");
        // const fm = compStyle.getPropertyValue("font-family");
        // const fs = compStyle.getPropertyValue("font-style");
        // context.font = `${fs} ${sz} ${fm}`;

        context.font = compStyle.getPropertyValue("font");

        if (compStyle.getPropertyValue("text-transform") === "uppercase") {
          words = words.map(function (word) {
            return word.toUpperCase();
          });
        }

        var maxwidth = parseFloat(compStyle.getPropertyValue("width")) - parseFloat(compStyle.getPropertyValue("padding-left")) - parseFloat(compStyle.getPropertyValue("padding-right"));
        var num_words = words.length;

        for (var i = 0; i < num_words; i++) {
          var curword = words[i].trim();
          if (curword.length === 0) continue;
          curline.push(curword);
          var line = curline.join(" ");

          if (context.measureText(line).width > maxwidth) {
            // break when line length extends
            var cache = curline.pop();
            lines.push(curline.join(" "));
            curline = [cache];
          }
        }

        lines.push(curline.join(" "));
        para.innerHTML = null;
        var paraFrag = document.createDocumentFragment();
        lines.forEach(function (line) {
          var wrapperEl = document.createElement("span");
          wrapperEl.classList.add("l-wrapper");
          var lineEl = document.createElement("span");
          lineEl.classList.add("l-line");
          lineEl.innerText = line;
          wrapperEl.appendChild(lineEl);
          paraFrag.appendChild(wrapperEl);
        });
        para.appendChild(paraFrag);
        para.style.opacity = 1;
        return lines;
      });
    }
  }, {
    key: "sync",
    value: function sync(control) {
      this.control = control;
    }
  }, {
    key: "onEntry",
    value: function onEntry() {
      this.toVisible.forEach(function (node) {
        node.el.classList.add(node.visibleClass);
        setTimeout(function () {
          node.el.classList.remove("l-line");
        }, 1500);
      });
      this.toVisible = [];
    }
  }, {
    key: "onExit",
    value: function onExit() {
      this.toHidden.forEach(function (node) {
        node.el.classList.remove(node.visibleClass);
      });
      this.toHidden = [];
    }
  }, {
    key: "update",
    value: function update() {
      this.toVisible.length !== 0 && this.onEntry();
      this.toHidden.length !== 0 && this.onExit();
    }
  }, {
    key: "create",
    value: function create(_ref) {
      var _this = this;

      var name = _ref.name,
          wrapperSelector = _ref.wrapperSelector,
          targetSelector = _ref.targetSelector,
          visibleClass = _ref.visibleClass;
      var cache = {};

      var callback = function callback(node, isIntersecting, unobserve) {
        if (!_this.control) return;
        var els = cache[node.dataset.revealId];
        var delay = parseFloat(node.dataset.revealDelay) || 75;

        if (isIntersecting) {
          if (_this.once) {
            unobserve(node);
          }

          els.forEach(function (el, i) {
            setTimeout(function () {
              _this.toVisible.push({
                el: el,
                visibleClass: visibleClass
              });
            }, delay * i);
          });
        } else if (!_this.once) {
          els.forEach(function (el) {
            _this.toHidden.push({
              el: el,
              visibleClass: visibleClass
            });
          });
        }
      };

      var o = (0, _utils.Observer)().create({
        callback: callback,
        offset: "-5px",
        threshold: 0.9
      });
      this.observers[name] = o;
      document.querySelectorAll(wrapperSelector).forEach(function (el, i) {
        el.dataset.revealId = i;
        cache[i] = el.querySelectorAll(targetSelector);
        o.observe(el);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var observer in this.observer) {
        observer.disconnect();
      }

      this.observers = {};
      this.toVisible = [];
      this.toHidden = [];
    }
  }]);

  return ObserverEffect;
}();

exports.ObserverEffect = ObserverEffect;
},{"../utils":"js/utils/index.js","../core":"js/core/index.js"}],"js/animations/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Scroller", {
  enumerable: true,
  get: function () {
    return _nscroller.Scroller;
  }
});
Object.defineProperty(exports, "TableHover", {
  enumerable: true,
  get: function () {
    return _tablehover.TableHover;
  }
});
Object.defineProperty(exports, "ObserverEffect", {
  enumerable: true,
  get: function () {
    return _observerEffect.ObserverEffect;
  }
});

var _nscroller = require("./nscroller");

var _tablehover = require("./tablehover");

var _observerEffect = require("./observerEffect");
},{"./nscroller":"js/animations/nscroller.js","./tablehover":"js/animations/tablehover.js","./observerEffect":"js/animations/observerEffect.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _animations = require("./animations");

var _utils = require("./utils");

var _vau = require("./vau");

window.scrollTo(0, 0);
window.addEventListener("load", function () {
  var s, t;
  var o = new _animations.ObserverEffect();

  if (!_utils.Sniff.mobile) {
    t = new _animations.TableHover();
    s = new _animations.Scroller({
      inertia: 0.125
    });
    s.lock();
  }

  new _vau.Vau({
    targets: "#loader",
    opacity: [1, 0],
    easing: "i4",
    duration: 1250,
    delay: _utils.Sniff.mobile ? 0 : 1500,
    complete: function complete() {
      document.getElementById("loader").remove();
      !_utils.Sniff.mobile && s.unlock();
    }
  });
});
var palette = {
  blue: "rgb(28,180,228)",
  orange: "rgb(252,100,4)",
  light: "rgb(230, 230, 230)"
};
},{"./animations":"js/animations/index.js","./utils":"js/utils/index.js","./vau":"js/vau/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57410" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map