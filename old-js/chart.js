"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _get2() { return _get2 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get2.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n40 = 0, F = function F() {}; return { s: F, n: function n() { return _n40 >= r.length ? { done: !0 } : { done: !1, value: r[_n40++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/chart.js@4.4.2/dist/chart.umd.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
}(void 0, function () {
  "use strict";

  var _Class, _Class2, _Class3, _Class4, _Class5, _Class6, _Class7, _Class8, _Class9, _Class10, _Class11;
  var t = Object.freeze({
    __proto__: null,
    get Colors() {
      return Go;
    },
    get Decimation() {
      return Qo;
    },
    get Filler() {
      return ma;
    },
    get Legend() {
      return ya;
    },
    get SubTitle() {
      return ka;
    },
    get Title() {
      return Ma;
    },
    get Tooltip() {
      return Ba;
    }
  });
  function e() {}
  var i = function () {
    var t = 0;
    return function () {
      return t++;
    };
  }();
  function s(t) {
    return null == t;
  }
  function n(t) {
    if (Array.isArray && Array.isArray(t)) return !0;
    var e = Object.prototype.toString.call(t);
    return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
  }
  function o(t) {
    return null !== t && "[object Object]" === Object.prototype.toString.call(t);
  }
  function a(t) {
    return ("number" == typeof t || t instanceof Number) && isFinite(+t);
  }
  function r(t, e) {
    return a(t) ? t : e;
  }
  function l(t, e) {
    return void 0 === t ? e : t;
  }
  var h = function h(t, e) {
      return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e;
    },
    c = function c(t, e) {
      return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
    };
  function d(t, e, i) {
    if (t && "function" == typeof t.call) return t.apply(i, e);
  }
  function u(t, e, i, s) {
    var a, r, l;
    if (n(t)) {
      if (r = t.length, s) for (a = r - 1; a >= 0; a--) e.call(i, t[a], a);else for (a = 0; a < r; a++) e.call(i, t[a], a);
    } else if (o(t)) for (l = Object.keys(t), r = l.length, a = 0; a < r; a++) e.call(i, t[l[a]], l[a]);
  }
  function f(t, e) {
    var i, s, n, o;
    if (!t || !e || t.length !== e.length) return !1;
    for (i = 0, s = t.length; i < s; ++i) if (n = t[i], o = e[i], n.datasetIndex !== o.datasetIndex || n.index !== o.index) return !1;
    return !0;
  }
  function g(t) {
    if (n(t)) return t.map(g);
    if (o(t)) {
      var _e2 = Object.create(null),
        _i2 = Object.keys(t),
        _s2 = _i2.length;
      var _n2 = 0;
      for (; _n2 < _s2; ++_n2) _e2[_i2[_n2]] = g(t[_i2[_n2]]);
      return _e2;
    }
    return t;
  }
  function p(t) {
    return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
  }
  function m(t, e, i, s) {
    if (!p(t)) return;
    var n = e[t],
      a = i[t];
    o(n) && o(a) ? b(n, a, s) : e[t] = g(a);
  }
  function b(t, e, i) {
    var s = n(e) ? e : [e],
      a = s.length;
    if (!o(t)) return t;
    var r = (i = i || {}).merger || m;
    var l;
    for (var _e3 = 0; _e3 < a; ++_e3) {
      if (l = s[_e3], !o(l)) continue;
      var _n3 = Object.keys(l);
      for (var _e4 = 0, _s3 = _n3.length; _e4 < _s3; ++_e4) r(_n3[_e4], t, l, i);
    }
    return t;
  }
  function x(t, e) {
    return b(t, e, {
      merger: _
    });
  }
  function _(t, e, i) {
    if (!p(t)) return;
    var s = e[t],
      n = i[t];
    o(s) && o(n) ? x(s, n) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = g(n));
  }
  var y = {
    "": function _(t) {
      return t;
    },
    x: function x(t) {
      return t.x;
    },
    y: function y(t) {
      return t.y;
    }
  };
  function v(t) {
    var e = t.split("."),
      i = [];
    var s = "";
    var _iterator = _createForOfIteratorHelper(e),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _t2 = _step.value;
        s += _t2, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (i.push(s), s = "");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return i;
  }
  function M(t, e) {
    var i = y[e] || (y[e] = function (t) {
      var e = v(t);
      return function (t) {
        var _iterator2 = _createForOfIteratorHelper(e),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i3 = _step2.value;
            if ("" === _i3) break;
            t = t && t[_i3];
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return t;
      };
    }(e));
    return i(t);
  }
  function w(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  var k = function k(t) {
      return void 0 !== t;
    },
    S = function S(t) {
      return "function" == typeof t;
    },
    P = function P(t, e) {
      if (t.size !== e.size) return !1;
      var _iterator3 = _createForOfIteratorHelper(t),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _i4 = _step3.value;
          if (!e.has(_i4)) return !1;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return !0;
    };
  function D(t) {
    return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
  }
  var C = Math.PI,
    O = 2 * C,
    A = O + C,
    T = Number.POSITIVE_INFINITY,
    L = C / 180,
    E = C / 2,
    R = C / 4,
    I = 2 * C / 3,
    z = Math.log10,
    F = Math.sign;
  function V(t, e, i) {
    return Math.abs(t - e) < i;
  }
  function B(t) {
    var e = Math.round(t);
    t = V(t, e, t / 1e3) ? e : t;
    var i = Math.pow(10, Math.floor(z(t))),
      s = t / i;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
  }
  function W(t) {
    var e = [],
      i = Math.sqrt(t);
    var s;
    for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
    return i === (0 | i) && e.push(i), e.sort(function (t, e) {
      return t - e;
    }).pop(), e;
  }
  function N(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }
  function H(t, e) {
    var i = Math.round(t);
    return i - e <= t && i + e >= t;
  }
  function j(t, e, i) {
    var s, n, o;
    for (s = 0, n = t.length; s < n; s++) o = t[s][i], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o));
  }
  function $(t) {
    return t * (C / 180);
  }
  function Y(t) {
    return t * (180 / C);
  }
  function U(t) {
    if (!a(t)) return;
    var e = 1,
      i = 0;
    for (; Math.round(t * e) / e !== t;) e *= 10, i++;
    return i;
  }
  function X(t, e) {
    var i = e.x - t.x,
      s = e.y - t.y,
      n = Math.sqrt(i * i + s * s);
    var o = Math.atan2(s, i);
    return o < -.5 * C && (o += O), {
      angle: o,
      distance: n
    };
  }
  function q(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
  }
  function K(t, e) {
    return (t - e + A) % O - C;
  }
  function G(t) {
    return (t % O + O) % O;
  }
  function Z(t, e, i, s) {
    var n = G(t),
      o = G(e),
      a = G(i),
      r = G(o - n),
      l = G(a - n),
      h = G(n - o),
      c = G(n - a);
    return n === o || n === a || s && o === a || r > l && h < c;
  }
  function J(t, e, i) {
    return Math.max(e, Math.min(i, t));
  }
  function Q(t) {
    return J(t, -32768, 32767);
  }
  function tt(t, e, i) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
    return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
  }
  function et(t, e, i) {
    i = i || function (i) {
      return t[i] < e;
    };
    var s,
      n = t.length - 1,
      o = 0;
    for (; n - o > 1;) s = o + n >> 1, i(s) ? o = s : n = s;
    return {
      lo: o,
      hi: n
    };
  }
  var it = function it(t, e, i, s) {
      return et(t, i, s ? function (s) {
        var n = t[s][e];
        return n < i || n === i && t[s + 1][e] === i;
      } : function (s) {
        return t[s][e] < i;
      });
    },
    st = function st(t, e, i) {
      return et(t, i, function (s) {
        return t[s][e] >= i;
      });
    };
  function nt(t, e, i) {
    var s = 0,
      n = t.length;
    for (; s < n && t[s] < e;) s++;
    for (; n > s && t[n - 1] > i;) n--;
    return s > 0 || n < t.length ? t.slice(s, n) : t;
  }
  var ot = ["push", "pop", "shift", "splice", "unshift"];
  function at(t, e) {
    t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
      configurable: !0,
      enumerable: !1,
      value: {
        listeners: [e]
      }
    }), ot.forEach(function (e) {
      var i = "_onData" + w(e),
        s = t[e];
      Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !1,
        value: function value() {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }
          var n = s.apply(this, e);
          return t._chartjs.listeners.forEach(function (t) {
            "function" == typeof t[i] && t[i].apply(t, e);
          }), n;
        }
      });
    }));
  }
  function rt(t, e) {
    var i = t._chartjs;
    if (!i) return;
    var s = i.listeners,
      n = s.indexOf(e);
    -1 !== n && s.splice(n, 1), s.length > 0 || (ot.forEach(function (e) {
      delete t[e];
    }), delete t._chartjs);
  }
  function lt(t) {
    var e = new Set(t);
    return e.size === t.length ? t : Array.from(e);
  }
  var ht = "undefined" == typeof window ? function (t) {
    return t();
  } : window.requestAnimationFrame;
  function ct(t, e) {
    var i = [],
      s = !1;
    return function () {
      for (var _len2 = arguments.length, n = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        n[_key2] = arguments[_key2];
      }
      i = n, s || (s = !0, ht.call(window, function () {
        s = !1, t.apply(e, i);
      }));
    };
  }
  function dt(t, e) {
    var i;
    return function () {
      for (var _len3 = arguments.length, s = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        s[_key3] = arguments[_key3];
      }
      return e ? (clearTimeout(i), i = setTimeout(t, e, s)) : t.apply(this, s), e;
    };
  }
  var ut = function ut(t) {
      return "start" === t ? "left" : "end" === t ? "right" : "center";
    },
    ft = function ft(t, e, i) {
      return "start" === t ? e : "end" === t ? i : (e + i) / 2;
    },
    gt = function gt(t, e, i, s) {
      return t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
    };
  function pt(t, e, i) {
    var s = e.length;
    var n = 0,
      o = s;
    if (t._sorted) {
      var _a2 = t.iScale,
        _r = t._parsed,
        _l = _a2.axis,
        _a$getUserBounds = _a2.getUserBounds(),
        _h = _a$getUserBounds.min,
        _c = _a$getUserBounds.max,
        _d = _a$getUserBounds.minDefined,
        _u = _a$getUserBounds.maxDefined;
      _d && (n = J(Math.min(it(_r, _l, _h).lo, i ? s : it(e, _l, _a2.getPixelForValue(_h)).lo), 0, s - 1)), o = _u ? J(Math.max(it(_r, _a2.axis, _c, !0).hi + 1, i ? 0 : it(e, _l, _a2.getPixelForValue(_c), !0).hi + 1), n, s) - n : s - n;
    }
    return {
      start: n,
      count: o
    };
  }
  function mt(t) {
    var e = t.xScale,
      i = t.yScale,
      s = t._scaleRanges,
      n = {
        xmin: e.min,
        xmax: e.max,
        ymin: i.min,
        ymax: i.max
      };
    if (!s) return t._scaleRanges = n, !0;
    var o = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
    return Object.assign(s, n), o;
  }
  var bt = /*#__PURE__*/function () {
    function bt() {
      _classCallCheck(this, bt);
      this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
    }
    return _createClass(bt, [{
      key: "_notify",
      value: function _notify(t, e, i, s) {
        var n = e.listeners[s],
          o = e.duration;
        n.forEach(function (s) {
          return s({
            chart: t,
            initial: e.initial,
            numSteps: o,
            currentStep: Math.min(i - e.start, o)
          });
        });
      }
    }, {
      key: "_refresh",
      value: function _refresh() {
        var _this = this;
        this._request || (this._running = !0, this._request = ht.call(window, function () {
          _this._update(), _this._request = null, _this._running && _this._refresh();
        }));
      }
    }, {
      key: "_update",
      value: function _update() {
        var _this2 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var e = 0;
        this._charts.forEach(function (i, s) {
          if (!i.running || !i.items.length) return;
          var n = i.items;
          var o,
            a = n.length - 1,
            r = !1;
          for (; a >= 0; --a) o = n[a], o._active ? (o._total > i.duration && (i.duration = o._total), o.tick(t), r = !0) : (n[a] = n[n.length - 1], n.pop());
          r && (s.draw(), _this2._notify(s, i, t, "progress")), n.length || (i.running = !1, _this2._notify(s, i, t, "complete"), i.initial = !1), e += n.length;
        }), this._lastDate = t, 0 === e && (this._running = !1);
      }
    }, {
      key: "_getAnims",
      value: function _getAnims(t) {
        var e = this._charts;
        var i = e.get(t);
        return i || (i = {
          running: !1,
          initial: !0,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        }, e.set(t, i)), i;
      }
    }, {
      key: "listen",
      value: function listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i);
      }
    }, {
      key: "add",
      value: function add(t, e) {
        var _this$_getAnims$items;
        e && e.length && (_this$_getAnims$items = this._getAnims(t).items).push.apply(_this$_getAnims$items, _toConsumableArray(e));
      }
    }, {
      key: "has",
      value: function has(t) {
        return this._getAnims(t).items.length > 0;
      }
    }, {
      key: "start",
      value: function start(t) {
        var e = this._charts.get(t);
        e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(function (t, e) {
          return Math.max(t, e._duration);
        }, 0), this._refresh());
      }
    }, {
      key: "running",
      value: function running(t) {
        if (!this._running) return !1;
        var e = this._charts.get(t);
        return !!(e && e.running && e.items.length);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        var e = this._charts.get(t);
        if (!e || !e.items.length) return;
        var i = e.items;
        var s = i.length - 1;
        for (; s >= 0; --s) i[s].cancel();
        e.items = [], this._notify(t, e, Date.now(), "complete");
      }
    }, {
      key: "remove",
      value: function remove(t) {
        return this._charts["delete"](t);
      }
    }]);
  }();
  var xt = new bt();
  /*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   */
  function _t(t) {
    return t + .5 | 0;
  }
  var yt = function yt(t, e, i) {
    return Math.max(Math.min(t, i), e);
  };
  function vt(t) {
    return yt(_t(2.55 * t), 0, 255);
  }
  function Mt(t) {
    return yt(_t(255 * t), 0, 255);
  }
  function wt(t) {
    return yt(_t(t / 2.55) / 100, 0, 1);
  }
  function kt(t) {
    return yt(_t(100 * t), 0, 100);
  }
  var St = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15
    },
    Pt = _toConsumableArray("0123456789ABCDEF"),
    Dt = function Dt(t) {
      return Pt[15 & t];
    },
    Ct = function Ct(t) {
      return Pt[(240 & t) >> 4] + Pt[15 & t];
    },
    Ot = function Ot(t) {
      return (240 & t) >> 4 == (15 & t);
    };
  function At(t) {
    var e = function (t) {
      return Ot(t.r) && Ot(t.g) && Ot(t.b) && Ot(t.a);
    }(t) ? Dt : Ct;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + function (t, e) {
      return t < 255 ? e(t) : "";
    }(t.a, e) : void 0;
  }
  var Tt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function Lt(t, e, i) {
    var s = e * Math.min(i, 1 - i),
      n = function n(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (e + t / 30) % 12;
        return i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
      };
    return [n(0), n(8), n(4)];
  }
  function Et(t, e, i) {
    var s = function s(_s4) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_s4 + t / 60) % 6;
      return i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
    };
    return [s(5), s(3), s(1)];
  }
  function Rt(t, e, i) {
    var s = Lt(t, 1, .5);
    var n;
    for (e + i > 1 && (n = 1 / (e + i), e *= n, i *= n), n = 0; n < 3; n++) s[n] *= 1 - e - i, s[n] += e;
    return s;
  }
  function It(t) {
    var e = t.r / 255,
      i = t.g / 255,
      s = t.b / 255,
      n = Math.max(e, i, s),
      o = Math.min(e, i, s),
      a = (n + o) / 2;
    var r, l, h;
    return n !== o && (h = n - o, l = a > .5 ? h / (2 - n - o) : h / (n + o), r = function (t, e, i, s, n) {
      return t === n ? (e - i) / s + (e < i ? 6 : 0) : e === n ? (i - t) / s + 2 : (t - e) / s + 4;
    }(e, i, s, h, n), r = 60 * r + .5), [0 | r, l || 0, a];
  }
  function zt(t, e, i, s) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Mt);
  }
  function Ft(t, e, i) {
    return zt(Lt, t, e, i);
  }
  function Vt(t) {
    return (t % 360 + 360) % 360;
  }
  function Bt(t) {
    var e = Tt.exec(t);
    var i,
      s = 255;
    if (!e) return;
    e[5] !== i && (s = e[6] ? vt(+e[5]) : Mt(+e[5]));
    var n = Vt(+e[2]),
      o = +e[3] / 100,
      a = +e[4] / 100;
    return i = "hwb" === e[1] ? function (t, e, i) {
      return zt(Rt, t, e, i);
    }(n, o, a) : "hsv" === e[1] ? function (t, e, i) {
      return zt(Et, t, e, i);
    }(n, o, a) : Ft(n, o, a), {
      r: i[0],
      g: i[1],
      b: i[2],
      a: s
    };
  }
  var Wt = {
      x: "dark",
      Z: "light",
      Y: "re",
      X: "blu",
      W: "gr",
      V: "medium",
      U: "slate",
      A: "ee",
      T: "ol",
      S: "or",
      B: "ra",
      C: "lateg",
      D: "ights",
      R: "in",
      Q: "turquois",
      E: "hi",
      P: "ro",
      O: "al",
      N: "le",
      M: "de",
      L: "yello",
      F: "en",
      K: "ch",
      G: "arks",
      H: "ea",
      I: "ightg",
      J: "wh"
    },
    Nt = {
      OiceXe: "f0f8ff",
      antiquewEte: "faebd7",
      aqua: "ffff",
      aquamarRe: "7fffd4",
      azuY: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "0",
      blanKedOmond: "ffebcd",
      Xe: "ff",
      XeviTet: "8a2be2",
      bPwn: "a52a2a",
      burlywood: "deb887",
      caMtXe: "5f9ea0",
      KartYuse: "7fff00",
      KocTate: "d2691e",
      cSO: "ff7f50",
      cSnflowerXe: "6495ed",
      cSnsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "ffff",
      xXe: "8b",
      xcyan: "8b8b",
      xgTMnPd: "b8860b",
      xWay: "a9a9a9",
      xgYF: "6400",
      xgYy: "a9a9a9",
      xkhaki: "bdb76b",
      xmagFta: "8b008b",
      xTivegYF: "556b2f",
      xSange: "ff8c00",
      xScEd: "9932cc",
      xYd: "8b0000",
      xsOmon: "e9967a",
      xsHgYF: "8fbc8f",
      xUXe: "483d8b",
      xUWay: "2f4f4f",
      xUgYy: "2f4f4f",
      xQe: "ced1",
      xviTet: "9400d3",
      dAppRk: "ff1493",
      dApskyXe: "bfff",
      dimWay: "696969",
      dimgYy: "696969",
      dodgerXe: "1e90ff",
      fiYbrick: "b22222",
      flSOwEte: "fffaf0",
      foYstWAn: "228b22",
      fuKsia: "ff00ff",
      gaRsbSo: "dcdcdc",
      ghostwEte: "f8f8ff",
      gTd: "ffd700",
      gTMnPd: "daa520",
      Way: "808080",
      gYF: "8000",
      gYFLw: "adff2f",
      gYy: "808080",
      honeyMw: "f0fff0",
      hotpRk: "ff69b4",
      RdianYd: "cd5c5c",
      Rdigo: "4b0082",
      ivSy: "fffff0",
      khaki: "f0e68c",
      lavFMr: "e6e6fa",
      lavFMrXsh: "fff0f5",
      lawngYF: "7cfc00",
      NmoncEffon: "fffacd",
      ZXe: "add8e6",
      ZcSO: "f08080",
      Zcyan: "e0ffff",
      ZgTMnPdLw: "fafad2",
      ZWay: "d3d3d3",
      ZgYF: "90ee90",
      ZgYy: "d3d3d3",
      ZpRk: "ffb6c1",
      ZsOmon: "ffa07a",
      ZsHgYF: "20b2aa",
      ZskyXe: "87cefa",
      ZUWay: "778899",
      ZUgYy: "778899",
      ZstAlXe: "b0c4de",
      ZLw: "ffffe0",
      lime: "ff00",
      limegYF: "32cd32",
      lRF: "faf0e6",
      magFta: "ff00ff",
      maPon: "800000",
      VaquamarRe: "66cdaa",
      VXe: "cd",
      VScEd: "ba55d3",
      VpurpN: "9370db",
      VsHgYF: "3cb371",
      VUXe: "7b68ee",
      VsprRggYF: "fa9a",
      VQe: "48d1cc",
      VviTetYd: "c71585",
      midnightXe: "191970",
      mRtcYam: "f5fffa",
      mistyPse: "ffe4e1",
      moccasR: "ffe4b5",
      navajowEte: "ffdead",
      navy: "80",
      Tdlace: "fdf5e6",
      Tive: "808000",
      TivedBb: "6b8e23",
      Sange: "ffa500",
      SangeYd: "ff4500",
      ScEd: "da70d6",
      pOegTMnPd: "eee8aa",
      pOegYF: "98fb98",
      pOeQe: "afeeee",
      pOeviTetYd: "db7093",
      papayawEp: "ffefd5",
      pHKpuff: "ffdab9",
      peru: "cd853f",
      pRk: "ffc0cb",
      plum: "dda0dd",
      powMrXe: "b0e0e6",
      purpN: "800080",
      YbeccapurpN: "663399",
      Yd: "ff0000",
      Psybrown: "bc8f8f",
      PyOXe: "4169e1",
      saddNbPwn: "8b4513",
      sOmon: "fa8072",
      sandybPwn: "f4a460",
      sHgYF: "2e8b57",
      sHshell: "fff5ee",
      siFna: "a0522d",
      silver: "c0c0c0",
      skyXe: "87ceeb",
      UXe: "6a5acd",
      UWay: "708090",
      UgYy: "708090",
      snow: "fffafa",
      sprRggYF: "ff7f",
      stAlXe: "4682b4",
      tan: "d2b48c",
      teO: "8080",
      tEstN: "d8bfd8",
      tomato: "ff6347",
      Qe: "40e0d0",
      viTet: "ee82ee",
      JHt: "f5deb3",
      wEte: "ffffff",
      wEtesmoke: "f5f5f5",
      Lw: "ffff00",
      LwgYF: "9acd32"
    };
  var Ht;
  function jt(t) {
    Ht || (Ht = function () {
      var t = {},
        e = Object.keys(Nt),
        i = Object.keys(Wt);
      var s, n, o, a, r;
      for (s = 0; s < e.length; s++) {
        for (a = r = e[s], n = 0; n < i.length; n++) o = i[n], r = r.replace(o, Wt[o]);
        o = parseInt(Nt[a], 16), t[r] = [o >> 16 & 255, o >> 8 & 255, 255 & o];
      }
      return t;
    }(), Ht.transparent = [0, 0, 0, 0]);
    var e = Ht[t.toLowerCase()];
    return e && {
      r: e[0],
      g: e[1],
      b: e[2],
      a: 4 === e.length ? e[3] : 255
    };
  }
  var $t = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  var Yt = function Yt(t) {
      return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055;
    },
    Ut = function Ut(t) {
      return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    };
  function Xt(t, e, i) {
    if (t) {
      var _s5 = It(t);
      _s5[e] = Math.max(0, Math.min(_s5[e] + _s5[e] * i, 0 === e ? 360 : 1)), _s5 = Ft(_s5), t.r = _s5[0], t.g = _s5[1], t.b = _s5[2];
    }
  }
  function qt(t, e) {
    return t ? Object.assign(e || {}, t) : t;
  }
  function Kt(t) {
    var e = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
    };
    return Array.isArray(t) ? t.length >= 3 && (e = {
      r: t[0],
      g: t[1],
      b: t[2],
      a: 255
    }, t.length > 3 && (e.a = Mt(t[3]))) : (e = qt(t, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    })).a = Mt(e.a), e;
  }
  function Gt(t) {
    return "r" === t.charAt(0) ? function (t) {
      var e = $t.exec(t);
      var i,
        s,
        n,
        o = 255;
      if (e) {
        if (e[7] !== i) {
          var _t3 = +e[7];
          o = e[8] ? vt(_t3) : yt(255 * _t3, 0, 255);
        }
        return i = +e[1], s = +e[3], n = +e[5], i = 255 & (e[2] ? vt(i) : yt(i, 0, 255)), s = 255 & (e[4] ? vt(s) : yt(s, 0, 255)), n = 255 & (e[6] ? vt(n) : yt(n, 0, 255)), {
          r: i,
          g: s,
          b: n,
          a: o
        };
      }
    }(t) : Bt(t);
  }
  var Zt = /*#__PURE__*/function () {
    function Zt(t) {
      _classCallCheck(this, Zt);
      if (t instanceof Zt) return t;
      var e = _typeof(t);
      var i;
      var s, n, o;
      "object" === e ? i = Kt(t) : "string" === e && (o = (s = t).length, "#" === s[0] && (4 === o || 5 === o ? n = {
        r: 255 & 17 * St[s[1]],
        g: 255 & 17 * St[s[2]],
        b: 255 & 17 * St[s[3]],
        a: 5 === o ? 17 * St[s[4]] : 255
      } : 7 !== o && 9 !== o || (n = {
        r: St[s[1]] << 4 | St[s[2]],
        g: St[s[3]] << 4 | St[s[4]],
        b: St[s[5]] << 4 | St[s[6]],
        a: 9 === o ? St[s[7]] << 4 | St[s[8]] : 255
      })), i = n || jt(t) || Gt(t)), this._rgb = i, this._valid = !!i;
    }
    return _createClass(Zt, [{
      key: "valid",
      get: function get() {
        return this._valid;
      }
    }, {
      key: "rgb",
      get: function get() {
        var t = qt(this._rgb);
        return t && (t.a = wt(t.a)), t;
      },
      set: function set(t) {
        this._rgb = Kt(t);
      }
    }, {
      key: "rgbString",
      value: function rgbString() {
        return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(wt(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : void 0;
        var t;
      }
    }, {
      key: "hexString",
      value: function hexString() {
        return this._valid ? At(this._rgb) : void 0;
      }
    }, {
      key: "hslString",
      value: function hslString() {
        return this._valid ? function (t) {
          if (!t) return;
          var e = It(t),
            i = e[0],
            s = kt(e[1]),
            n = kt(e[2]);
          return t.a < 255 ? "hsla(".concat(i, ", ").concat(s, "%, ").concat(n, "%, ").concat(wt(t.a), ")") : "hsl(".concat(i, ", ").concat(s, "%, ").concat(n, "%)");
        }(this._rgb) : void 0;
      }
    }, {
      key: "mix",
      value: function mix(t, e) {
        if (t) {
          var _i5 = this.rgb,
            _s6 = t.rgb;
          var _n4;
          var _o2 = e === _n4 ? .5 : e,
            _a3 = 2 * _o2 - 1,
            _r2 = _i5.a - _s6.a,
            _l2 = ((_a3 * _r2 == -1 ? _a3 : (_a3 + _r2) / (1 + _a3 * _r2)) + 1) / 2;
          _n4 = 1 - _l2, _i5.r = 255 & _l2 * _i5.r + _n4 * _s6.r + .5, _i5.g = 255 & _l2 * _i5.g + _n4 * _s6.g + .5, _i5.b = 255 & _l2 * _i5.b + _n4 * _s6.b + .5, _i5.a = _o2 * _i5.a + (1 - _o2) * _s6.a, this.rgb = _i5;
        }
        return this;
      }
    }, {
      key: "interpolate",
      value: function interpolate(t, e) {
        return t && (this._rgb = function (t, e, i) {
          var s = Ut(wt(t.r)),
            n = Ut(wt(t.g)),
            o = Ut(wt(t.b));
          return {
            r: Mt(Yt(s + i * (Ut(wt(e.r)) - s))),
            g: Mt(Yt(n + i * (Ut(wt(e.g)) - n))),
            b: Mt(Yt(o + i * (Ut(wt(e.b)) - o))),
            a: t.a + i * (e.a - t.a)
          };
        }(this._rgb, t._rgb, e)), this;
      }
    }, {
      key: "clone",
      value: function clone() {
        return new Zt(this.rgb);
      }
    }, {
      key: "alpha",
      value: function alpha(t) {
        return this._rgb.a = Mt(t), this;
      }
    }, {
      key: "clearer",
      value: function clearer(t) {
        return this._rgb.a *= 1 - t, this;
      }
    }, {
      key: "greyscale",
      value: function greyscale() {
        var t = this._rgb,
          e = _t(.3 * t.r + .59 * t.g + .11 * t.b);
        return t.r = t.g = t.b = e, this;
      }
    }, {
      key: "opaquer",
      value: function opaquer(t) {
        return this._rgb.a *= 1 + t, this;
      }
    }, {
      key: "negate",
      value: function negate() {
        var t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
      }
    }, {
      key: "lighten",
      value: function lighten(t) {
        return Xt(this._rgb, 2, t), this;
      }
    }, {
      key: "darken",
      value: function darken(t) {
        return Xt(this._rgb, 2, -t), this;
      }
    }, {
      key: "saturate",
      value: function saturate(t) {
        return Xt(this._rgb, 1, t), this;
      }
    }, {
      key: "desaturate",
      value: function desaturate(t) {
        return Xt(this._rgb, 1, -t), this;
      }
    }, {
      key: "rotate",
      value: function rotate(t) {
        return function (t, e) {
          var i = It(t);
          i[0] = Vt(i[0] + e), i = Ft(i), t.r = i[0], t.g = i[1], t.b = i[2];
        }(this._rgb, t), this;
      }
    }]);
  }();
  function Jt(t) {
    if (t && "object" == _typeof(t)) {
      var _e5 = t.toString();
      return "[object CanvasPattern]" === _e5 || "[object CanvasGradient]" === _e5;
    }
    return !1;
  }
  function Qt(t) {
    return Jt(t) ? t : new Zt(t);
  }
  function te(t) {
    return Jt(t) ? t : new Zt(t).saturate(.5).darken(.1).hexString();
  }
  var ee = ["x", "y", "borderWidth", "radius", "tension"],
    ie = ["color", "borderColor", "backgroundColor"];
  var se = new Map();
  function ne(t, e, i) {
    return function (t, e) {
      e = e || {};
      var i = t + JSON.stringify(e);
      var s = se.get(i);
      return s || (s = new Intl.NumberFormat(t, e), se.set(i, s)), s;
    }(e, i).format(t);
  }
  var oe = {
    values: function values(t) {
      return n(t) ? t : "" + t;
    },
    numeric: function numeric(t, e, i) {
      if (0 === t) return "0";
      var s = this.chart.options.locale;
      var n,
        o = t;
      if (i.length > 1) {
        var _e6 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
        (_e6 < 1e-4 || _e6 > 1e15) && (n = "scientific"), o = function (t, e) {
          var i = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
          Math.abs(i) >= 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
          return i;
        }(t, i);
      }
      var a = z(Math.abs(o)),
        r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
        l = {
          notation: n,
          minimumFractionDigits: r,
          maximumFractionDigits: r
        };
      return Object.assign(l, this.options.ticks.format), ne(t, s, l);
    },
    logarithmic: function logarithmic(t, e, i) {
      if (0 === t) return "0";
      var s = i[e].significand || t / Math.pow(10, Math.floor(z(t)));
      return [1, 2, 3, 5, 10, 15].includes(s) || e > .8 * i.length ? oe.numeric.call(this, t, e, i) : "";
    }
  };
  var ae = {
    formatters: oe
  };
  var re = Object.create(null),
    le = Object.create(null);
  function he(t, e) {
    if (!e) return t;
    var i = e.split(".");
    for (var _e7 = 0, _s7 = i.length; _e7 < _s7; ++_e7) {
      var _s8 = i[_e7];
      t = t[_s8] || (t[_s8] = Object.create(null));
    }
    return t;
  }
  function ce(t, e, i) {
    return "string" == typeof e ? b(he(t, e), i) : b(he(t, ""), e);
  }
  var de = /*#__PURE__*/function () {
    function de(t, e) {
      _classCallCheck(this, de);
      this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function (t) {
        return t.chart.platform.getDevicePixelRatio();
      }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      }, this.hover = {}, this.hoverBackgroundColor = function (t, e) {
        return te(e.backgroundColor);
      }, this.hoverBorderColor = function (t, e) {
        return te(e.borderColor);
      }, this.hoverColor = function (t, e) {
        return te(e.color);
      }, this.indexAxis = "x", this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1
      }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
    }
    return _createClass(de, [{
      key: "set",
      value: function set(t, e) {
        return ce(this, t, e);
      }
    }, {
      key: "get",
      value: function get(t) {
        return he(this, t);
      }
    }, {
      key: "describe",
      value: function describe(t, e) {
        return ce(le, t, e);
      }
    }, {
      key: "override",
      value: function override(t, e) {
        return ce(re, t, e);
      }
    }, {
      key: "route",
      value: function route(t, e, i, s) {
        var n = he(this, t),
          a = he(this, i),
          r = "_" + e;
        Object.defineProperties(n, _defineProperty(_defineProperty({}, r, {
          value: n[e],
          writable: !0
        }), e, {
          enumerable: !0,
          get: function get() {
            var t = this[r],
              e = a[s];
            return o(t) ? Object.assign({}, e, t) : l(t, e);
          },
          set: function set(t) {
            this[r] = t;
          }
        }));
      }
    }, {
      key: "apply",
      value: function apply(t) {
        var _this3 = this;
        t.forEach(function (t) {
          return t(_this3);
        });
      }
    }]);
  }();
  var ue = new de({
    _scriptable: function _scriptable(t) {
      return !t.startsWith("on");
    },
    _indexable: function _indexable(t) {
      return "events" !== t;
    },
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: !1,
      _indexable: !1
    }
  }, [function (t) {
    t.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0
    }), t.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: function _scriptable(t) {
        return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
      }
    }), t.set("animations", {
      colors: {
        type: "color",
        properties: ie
      },
      numbers: {
        type: "number",
        properties: ee
      }
    }), t.describe("animations", {
      _fallback: "animation"
    }), t.set("transitions", {
      active: {
        animation: {
          duration: 400
        }
      },
      resize: {
        animation: {
          duration: 0
        }
      },
      show: {
        animations: {
          colors: {
            from: "transparent"
          },
          visible: {
            type: "boolean",
            duration: 0
          }
        }
      },
      hide: {
        animations: {
          colors: {
            to: "transparent"
          },
          visible: {
            type: "boolean",
            easing: "linear",
            fn: function fn(t) {
              return 0 | t;
            }
          }
        }
      }
    });
  }, function (t) {
    t.set("layout", {
      autoPadding: !0,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
  }, function (t) {
    t.set("scale", {
      display: !0,
      offset: !1,
      reverse: !1,
      beginAtZero: !1,
      bounds: "ticks",
      clip: !0,
      grace: 0,
      grid: {
        display: !0,
        lineWidth: 1,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickLength: 8,
        tickWidth: function tickWidth(t, e) {
          return e.lineWidth;
        },
        tickColor: function tickColor(t, e) {
          return e.color;
        },
        offset: !1
      },
      border: {
        display: !0,
        dash: [],
        dashOffset: 0,
        width: 1
      },
      title: {
        display: !1,
        text: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: ae.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: !1,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
      }
    }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
      _fallback: !1,
      _scriptable: function _scriptable(t) {
        return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t;
      },
      _indexable: function _indexable(t) {
        return "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t;
      }
    }), t.describe("scales", {
      _fallback: "scale"
    }), t.describe("scale.ticks", {
      _scriptable: function _scriptable(t) {
        return "backdropPadding" !== t && "callback" !== t;
      },
      _indexable: function _indexable(t) {
        return "backdropPadding" !== t;
      }
    });
  }]);
  function fe() {
    return "undefined" != typeof window && "undefined" != typeof document;
  }
  function ge(t) {
    var e = t.parentNode;
    return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
  }
  function pe(t, e, i) {
    var s;
    return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s;
  }
  var me = function me(t) {
    return t.ownerDocument.defaultView.getComputedStyle(t, null);
  };
  function be(t, e) {
    return me(t).getPropertyValue(e);
  }
  var xe = ["top", "right", "bottom", "left"];
  function _e(t, e, i) {
    var s = {};
    i = i ? "-" + i : "";
    for (var _n5 = 0; _n5 < 4; _n5++) {
      var _o3 = xe[_n5];
      s[_o3] = parseFloat(t[e + "-" + _o3 + i]) || 0;
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
  }
  var ye = function ye(t, e, i) {
    return (t > 0 || e > 0) && (!i || !i.shadowRoot);
  };
  function ve(t, e) {
    if ("native" in t) return t;
    var i = e.canvas,
      s = e.currentDevicePixelRatio,
      n = me(i),
      o = "border-box" === n.boxSizing,
      a = _e(n, "padding"),
      r = _e(n, "border", "width"),
      _ref = function (t, e) {
        var i = t.touches,
          s = i && i.length ? i[0] : t,
          n = s.offsetX,
          o = s.offsetY;
        var a,
          r,
          l = !1;
        if (ye(n, o, t.target)) a = n, r = o;else {
          var _t4 = e.getBoundingClientRect();
          a = s.clientX - _t4.left, r = s.clientY - _t4.top, l = !0;
        }
        return {
          x: a,
          y: r,
          box: l
        };
      }(t, i),
      l = _ref.x,
      h = _ref.y,
      c = _ref.box,
      d = a.left + (c && r.left),
      u = a.top + (c && r.top);
    var f = e.width,
      g = e.height;
    return o && (f -= a.width + r.width, g -= a.height + r.height), {
      x: Math.round((l - d) / f * i.width / s),
      y: Math.round((h - u) / g * i.height / s)
    };
  }
  var Me = function Me(t) {
    return Math.round(10 * t) / 10;
  };
  function we(t, e, i, s) {
    var n = me(t),
      o = _e(n, "margin"),
      a = pe(n.maxWidth, t, "clientWidth") || T,
      r = pe(n.maxHeight, t, "clientHeight") || T,
      l = function (t, e, i) {
        var s, n;
        if (void 0 === e || void 0 === i) {
          var _o4 = ge(t);
          if (_o4) {
            var _t5 = _o4.getBoundingClientRect(),
              _a4 = me(_o4),
              _r3 = _e(_a4, "border", "width"),
              _l3 = _e(_a4, "padding");
            e = _t5.width - _l3.width - _r3.width, i = _t5.height - _l3.height - _r3.height, s = pe(_a4.maxWidth, _o4, "clientWidth"), n = pe(_a4.maxHeight, _o4, "clientHeight");
          } else e = t.clientWidth, i = t.clientHeight;
        }
        return {
          width: e,
          height: i,
          maxWidth: s || T,
          maxHeight: n || T
        };
      }(t, e, i);
    var h = l.width,
      c = l.height;
    if ("content-box" === n.boxSizing) {
      var _t6 = _e(n, "border", "width"),
        _e8 = _e(n, "padding");
      h -= _e8.width + _t6.width, c -= _e8.height + _t6.height;
    }
    h = Math.max(0, h - o.width), c = Math.max(0, s ? h / s : c - o.height), h = Me(Math.min(h, a, l.maxWidth)), c = Me(Math.min(c, r, l.maxHeight)), h && !c && (c = Me(h / 2));
    return (void 0 !== e || void 0 !== i) && s && l.height && c > l.height && (c = l.height, h = Me(Math.floor(c * s))), {
      width: h,
      height: c
    };
  }
  function ke(t, e, i) {
    var s = e || 1,
      n = Math.floor(t.height * s),
      o = Math.floor(t.width * s);
    t.height = Math.floor(t.height), t.width = Math.floor(t.width);
    var a = t.canvas;
    return a.style && (i || !a.style.height && !a.style.width) && (a.style.height = "".concat(t.height, "px"), a.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== s || a.height !== n || a.width !== o) && (t.currentDevicePixelRatio = s, a.height = n, a.width = o, t.ctx.setTransform(s, 0, 0, s, 0, 0), !0);
  }
  var Se = function () {
    var t = !1;
    try {
      var _e9 = {
        get passive() {
          return t = !0, !1;
        }
      };
      fe() && (window.addEventListener("test", null, _e9), window.removeEventListener("test", null, _e9));
    } catch (t) {}
    return t;
  }();
  function Pe(t, e) {
    var i = be(t, e),
      s = i && i.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0;
  }
  function De(t) {
    return !t || s(t.size) || s(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
  }
  function Ce(t, e, i, s, n) {
    var o = e[n];
    return o || (o = e[n] = t.measureText(n).width, i.push(n)), o > s && (s = o), s;
  }
  function Oe(t, e, i, s) {
    var o = (s = s || {}).data = s.data || {},
      a = s.garbageCollect = s.garbageCollect || [];
    s.font !== e && (o = s.data = {}, a = s.garbageCollect = [], s.font = e), t.save(), t.font = e;
    var r = 0;
    var l = i.length;
    var h, c, d, u, f;
    for (h = 0; h < l; h++) if (u = i[h], null == u || n(u)) {
      if (n(u)) for (c = 0, d = u.length; c < d; c++) f = u[c], null == f || n(f) || (r = Ce(t, o, a, r, f));
    } else r = Ce(t, o, a, r, u);
    t.restore();
    var g = a.length / 2;
    if (g > i.length) {
      for (h = 0; h < g; h++) delete o[a[h]];
      a.splice(0, g);
    }
    return r;
  }
  function Ae(t, e, i) {
    var s = t.currentDevicePixelRatio,
      n = 0 !== i ? Math.max(i / 2, .5) : 0;
    return Math.round((e - n) * s) / s + n;
  }
  function Te(t, e) {
    (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
  }
  function Le(t, e, i, s) {
    Ee(t, e, i, s, null);
  }
  function Ee(t, e, i, s, n) {
    var o, a, r, l, h, c, d, u;
    var f = e.pointStyle,
      g = e.rotation,
      p = e.radius;
    var m = (g || 0) * L;
    if (f && "object" == _typeof(f) && (o = f.toString(), "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), void t.restore();
    if (!(isNaN(p) || p <= 0)) {
      switch (t.beginPath(), f) {
        default:
          n ? t.ellipse(i, s, n / 2, p, 0, 0, O) : t.arc(i, s, p, 0, O), t.closePath();
          break;
        case "triangle":
          c = n ? n / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += I, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
          break;
        case "rectRounded":
          h = .516 * p, l = p - h, a = Math.cos(m + R) * l, d = Math.cos(m + R) * (n ? n / 2 - h : l), r = Math.sin(m + R) * l, u = Math.sin(m + R) * (n ? n / 2 - h : l), t.arc(i - d, s - r, h, m - C, m - E), t.arc(i + u, s - a, h, m - E, m), t.arc(i + d, s + r, h, m, m + E), t.arc(i - u, s + a, h, m + E, m + C), t.closePath();
          break;
        case "rect":
          if (!g) {
            l = Math.SQRT1_2 * p, c = n ? n / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
            break;
          }
          m += R;
        case "rectRot":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - a), t.lineTo(i + d, s + r), t.lineTo(i - u, s + a), t.closePath();
          break;
        case "crossRot":
          m += R;
        case "cross":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
          break;
        case "star":
          d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a), m += R, d = Math.cos(m) * (n ? n / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (n ? n / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - a), t.lineTo(i - u, s + a);
          break;
        case "line":
          a = n ? n / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - a, s - r), t.lineTo(i + a, s + r);
          break;
        case "dash":
          t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (n ? n / 2 : p), s + Math.sin(m) * p);
          break;
        case !1:
          t.closePath();
      }
      t.fill(), e.borderWidth > 0 && t.stroke();
    }
  }
  function Re(t, e, i) {
    return i = i || .5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
  }
  function Ie(t, e) {
    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
  }
  function ze(t) {
    t.restore();
  }
  function Fe(t, e, i, s, n) {
    if (!e) return t.lineTo(i.x, i.y);
    if ("middle" === n) {
      var _s9 = (e.x + i.x) / 2;
      t.lineTo(_s9, e.y), t.lineTo(_s9, i.y);
    } else "after" === n != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
    t.lineTo(i.x, i.y);
  }
  function Ve(t, e, i, s) {
    if (!e) return t.lineTo(i.x, i.y);
    t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
  }
  function Be(t, e, i, s, n) {
    if (n.strikethrough || n.underline) {
      var _o5 = t.measureText(s),
        _a5 = e - _o5.actualBoundingBoxLeft,
        _r4 = e + _o5.actualBoundingBoxRight,
        _l4 = i - _o5.actualBoundingBoxAscent,
        _h2 = i + _o5.actualBoundingBoxDescent,
        _c2 = n.strikethrough ? (_l4 + _h2) / 2 : _h2;
      t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = n.decorationWidth || 2, t.moveTo(_a5, _c2), t.lineTo(_r4, _c2), t.stroke();
    }
  }
  function We(t, e) {
    var i = t.fillStyle;
    t.fillStyle = e.color, t.fillRect(e.left, e.top, e.width, e.height), t.fillStyle = i;
  }
  function Ne(t, e, i, o, a) {
    var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    var l = n(e) ? e : [e],
      h = r.strokeWidth > 0 && "" !== r.strokeColor;
    var c, d;
    for (t.save(), t.font = a.string, function (t, e) {
      e.translation && t.translate(e.translation[0], e.translation[1]), s(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline);
    }(t, r), c = 0; c < l.length; ++c) d = l[c], r.backdrop && We(t, r.backdrop), h && (r.strokeColor && (t.strokeStyle = r.strokeColor), s(r.strokeWidth) || (t.lineWidth = r.strokeWidth), t.strokeText(d, i, o, r.maxWidth)), t.fillText(d, i, o, r.maxWidth), Be(t, i, o, d, r), o += Number(a.lineHeight);
    t.restore();
  }
  function He(t, e) {
    var i = e.x,
      s = e.y,
      n = e.w,
      o = e.h,
      a = e.radius;
    t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * C, C, !0), t.lineTo(i, s + o - a.bottomLeft), t.arc(i + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, C, E, !0), t.lineTo(i + n - a.bottomRight, s + o), t.arc(i + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, E, 0, !0), t.lineTo(i + n, s + a.topRight), t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -E, !0), t.lineTo(i + a.topLeft, s);
  }
  function je(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
    var i = arguments.length > 2 ? arguments[2] : undefined;
    var s = arguments.length > 3 ? arguments[3] : undefined;
    var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
      return t[0];
    };
    var o = i || t;
    void 0 === s && (s = ti("_fallback", t));
    var a = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, "Object"), "_cacheable", !0), "_scopes", t), "_rootScopes", o), "_fallback", s), "_getTarget", n), "override", function override(i) {
      return je([i].concat(_toConsumableArray(t)), e, o, s);
    });
    return new Proxy(a, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete e._keys, delete t[0][i], !0;
      },
      get: function get(i, s) {
        return qe(i, s, function () {
          return function (t, e, i, s) {
            var n;
            var _iterator4 = _createForOfIteratorHelper(e),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _o6 = _step4.value;
                if (n = ti(Ue(_o6, t), i), void 0 !== n) return Xe(t, n) ? Je(i, s, t, n) : n;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }(s, e, t, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
        return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t[0]);
      },
      has: function has(t, e) {
        return ei(t).includes(e);
      },
      ownKeys: function ownKeys(t) {
        return ei(t);
      },
      set: function set(t, e, i) {
        var s = t._storage || (t._storage = n());
        return t[e] = s[e] = i, delete t._keys, !0;
      }
    });
  }
  function $e(t, e, i, s) {
    var a = {
      _cacheable: !1,
      _proxy: t,
      _context: e,
      _subProxy: i,
      _stack: new Set(),
      _descriptors: Ye(t, s),
      setContext: function setContext(e) {
        return $e(t, e, i, s);
      },
      override: function override(n) {
        return $e(t.override(n), e, i, s);
      }
    };
    return new Proxy(a, {
      deleteProperty: function deleteProperty(e, i) {
        return delete e[i], delete t[i], !0;
      },
      get: function get(t, e, i) {
        return qe(t, e, function () {
          return function (t, e, i) {
            var s = t._proxy,
              a = t._context,
              r = t._subProxy,
              l = t._descriptors;
            var h = s[e];
            S(h) && l.isScriptable(e) && (h = function (t, e, i, s) {
              var n = i._proxy,
                o = i._context,
                a = i._subProxy,
                r = i._stack;
              if (r.has(t)) throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + t);
              r.add(t);
              var l = e(o, a || s);
              r["delete"](t), Xe(t, l) && (l = Je(n._scopes, n, t, l));
              return l;
            }(e, h, t, i));
            n(h) && h.length && (h = function (t, e, i, s) {
              var n = i._proxy,
                a = i._context,
                r = i._subProxy,
                l = i._descriptors;
              if (void 0 !== a.index && s(t)) return e[a.index % e.length];
              if (o(e[0])) {
                var _i6 = e,
                  _s10 = n._scopes.filter(function (t) {
                    return t !== _i6;
                  });
                e = [];
                var _iterator5 = _createForOfIteratorHelper(_i6),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var _o7 = _step5.value;
                    var _i7 = Je(_s10, n, t, _o7);
                    e.push($e(_i7, a, r && r[t], l));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              return e;
            }(e, h, t, l.isIndexable));
            Xe(e, h) && (h = $e(h, a, r && r[e], l));
            return h;
          }(t, e, i);
        });
      },
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, i) {
        return e._descriptors.allKeys ? Reflect.has(t, i) ? {
          enumerable: !0,
          configurable: !0
        } : void 0 : Reflect.getOwnPropertyDescriptor(t, i);
      },
      getPrototypeOf: function getPrototypeOf() {
        return Reflect.getPrototypeOf(t);
      },
      has: function has(e, i) {
        return Reflect.has(t, i);
      },
      ownKeys: function ownKeys() {
        return Reflect.ownKeys(t);
      },
      set: function set(e, i, s) {
        return t[i] = s, delete e[i], !0;
      }
    });
  }
  function Ye(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      scriptable: !0,
      indexable: !0
    };
    var _t$_scriptable = t._scriptable,
      i = _t$_scriptable === void 0 ? e.scriptable : _t$_scriptable,
      _t$_indexable = t._indexable,
      s = _t$_indexable === void 0 ? e.indexable : _t$_indexable,
      _t$_allKeys = t._allKeys,
      n = _t$_allKeys === void 0 ? e.allKeys : _t$_allKeys;
    return {
      allKeys: n,
      scriptable: i,
      indexable: s,
      isScriptable: S(i) ? i : function () {
        return i;
      },
      isIndexable: S(s) ? s : function () {
        return s;
      }
    };
  }
  var Ue = function Ue(t, e) {
      return t ? t + w(e) : e;
    },
    Xe = function Xe(t, e) {
      return o(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
    };
  function qe(t, e, i) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
    var s = i();
    return t[e] = s, s;
  }
  function Ke(t, e, i) {
    return S(t) ? t(e, i) : t;
  }
  var Ge = function Ge(t, e) {
    return !0 === t ? e : "string" == typeof t ? M(e, t) : void 0;
  };
  function Ze(t, e, i, s, n) {
    var _iterator6 = _createForOfIteratorHelper(e),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _o8 = _step6.value;
        var _e10 = Ge(i, _o8);
        if (_e10) {
          t.add(_e10);
          var _o9 = Ke(_e10._fallback, i, n);
          if (void 0 !== _o9 && _o9 !== i && _o9 !== s) return _o9;
        } else if (!1 === _e10 && void 0 !== s && i !== s) return null;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return !1;
  }
  function Je(t, e, i, s) {
    var a = e._rootScopes,
      r = Ke(e._fallback, i, s),
      l = [].concat(_toConsumableArray(t), _toConsumableArray(a)),
      h = new Set();
    h.add(s);
    var c = Qe(h, l, i, r || i, s);
    return null !== c && (void 0 === r || r === i || (c = Qe(h, l, r, c, s), null !== c)) && je(Array.from(h), [""], a, r, function () {
      return function (t, e, i) {
        var s = t._getTarget();
        e in s || (s[e] = {});
        var a = s[e];
        if (n(a) && o(i)) return i;
        return a || {};
      }(e, i, s);
    });
  }
  function Qe(t, e, i, s, n) {
    for (; i;) i = Ze(t, e, i, s, n);
    return i;
  }
  function ti(t, e) {
    var _iterator7 = _createForOfIteratorHelper(e),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _i8 = _step7.value;
        if (!_i8) continue;
        var _e11 = _i8[t];
        if (void 0 !== _e11) return _e11;
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }
  function ei(t) {
    var e = t._keys;
    return e || (e = t._keys = function (t) {
      var e = new Set();
      var _iterator8 = _createForOfIteratorHelper(t),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _i9 = _step8.value;
          var _iterator9 = _createForOfIteratorHelper(Object.keys(_i9).filter(function (t) {
              return !t.startsWith("_");
            })),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _t7 = _step9.value;
              e.add(_t7);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return Array.from(e);
    }(t._scopes)), e;
  }
  function ii(t, e, i, s) {
    var n = t.iScale,
      _this$_parsing$key = this._parsing.key,
      o = _this$_parsing$key === void 0 ? "r" : _this$_parsing$key,
      a = new Array(s);
    var r, l, h, c;
    for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
      r: n.parse(M(c, o), h)
    };
    return a;
  }
  var si = Number.EPSILON || 1e-14,
    ni = function ni(t, e) {
      return e < t.length && !t[e].skip && t[e];
    },
    oi = function oi(t) {
      return "x" === t ? "y" : "x";
    };
  function ai(t, e, i, s) {
    var n = t.skip ? e : t,
      o = e,
      a = i.skip ? e : i,
      r = q(o, n),
      l = q(a, o);
    var h = r / (r + l),
      c = l / (r + l);
    h = isNaN(h) ? 0 : h, c = isNaN(c) ? 0 : c;
    var d = s * h,
      u = s * c;
    return {
      previous: {
        x: o.x - d * (a.x - n.x),
        y: o.y - d * (a.y - n.y)
      },
      next: {
        x: o.x + u * (a.x - n.x),
        y: o.y + u * (a.y - n.y)
      }
    };
  }
  function ri(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
    var i = oi(e),
      s = t.length,
      n = Array(s).fill(0),
      o = Array(s);
    var a,
      r,
      l,
      h = ni(t, 0);
    for (a = 0; a < s; ++a) if (r = l, l = h, h = ni(t, a + 1), l) {
      if (h) {
        var _t8 = h[e] - l[e];
        n[a] = 0 !== _t8 ? (h[i] - l[i]) / _t8 : 0;
      }
      o[a] = r ? h ? F(n[a - 1]) !== F(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a];
    }
    !function (t, e, i) {
      var s = t.length;
      var n,
        o,
        a,
        r,
        l,
        h = ni(t, 0);
      for (var _c3 = 0; _c3 < s - 1; ++_c3) l = h, h = ni(t, _c3 + 1), l && h && (V(e[_c3], 0, si) ? i[_c3] = i[_c3 + 1] = 0 : (n = i[_c3] / e[_c3], o = i[_c3 + 1] / e[_c3], r = Math.pow(n, 2) + Math.pow(o, 2), r <= 9 || (a = 3 / Math.sqrt(r), i[_c3] = n * a * e[_c3], i[_c3 + 1] = o * a * e[_c3])));
    }(t, n, o), function (t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "x";
      var s = oi(i),
        n = t.length;
      var o,
        a,
        r,
        l = ni(t, 0);
      for (var _h3 = 0; _h3 < n; ++_h3) {
        if (a = r, r = l, l = ni(t, _h3 + 1), !r) continue;
        var _n6 = r[i],
          _c4 = r[s];
        a && (o = (_n6 - a[i]) / 3, r["cp1".concat(i)] = _n6 - o, r["cp1".concat(s)] = _c4 - o * e[_h3]), l && (o = (l[i] - _n6) / 3, r["cp2".concat(i)] = _n6 + o, r["cp2".concat(s)] = _c4 + o * e[_h3]);
      }
    }(t, o, e);
  }
  function li(t, e, i) {
    return Math.max(Math.min(t, i), e);
  }
  function hi(t, e, i, s, n) {
    var o, a, r, l;
    if (e.spanGaps && (t = t.filter(function (t) {
      return !t.skip;
    })), "monotone" === e.cubicInterpolationMode) ri(t, n);else {
      var _i10 = s ? t[t.length - 1] : t[0];
      for (o = 0, a = t.length; o < a; ++o) r = t[o], l = ai(_i10, r, t[Math.min(o + 1, a - (s ? 0 : 1)) % a], e.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, _i10 = r;
    }
    e.capBezierPoints && function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r = Re(t[0], e);
      for (i = 0, s = t.length; i < s; ++i) a = o, o = r, r = i < s - 1 && Re(t[i + 1], e), o && (n = t[i], a && (n.cp1x = li(n.cp1x, e.left, e.right), n.cp1y = li(n.cp1y, e.top, e.bottom)), r && (n.cp2x = li(n.cp2x, e.left, e.right), n.cp2y = li(n.cp2y, e.top, e.bottom)));
    }(t, i);
  }
  var ci = function ci(t) {
      return 0 === t || 1 === t;
    },
    di = function di(t, e, i) {
      return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * O / i);
    },
    ui = function ui(t, e, i) {
      return Math.pow(2, -10 * t) * Math.sin((t - e) * O / i) + 1;
    },
    fi = {
      linear: function linear(t) {
        return t;
      },
      easeInQuad: function easeInQuad(t) {
        return t * t;
      },
      easeOutQuad: function easeOutQuad(t) {
        return -t * (t - 2);
      },
      easeInOutQuad: function easeInOutQuad(t) {
        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
      },
      easeInCubic: function easeInCubic(t) {
        return t * t * t;
      },
      easeOutCubic: function easeOutCubic(t) {
        return (t -= 1) * t * t + 1;
      },
      easeInOutCubic: function easeInOutCubic(t) {
        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
      },
      easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
      },
      easeOutQuart: function easeOutQuart(t) {
        return -((t -= 1) * t * t * t - 1);
      },
      easeInOutQuart: function easeInOutQuart(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
      },
      easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
      },
      easeOutQuint: function easeOutQuint(t) {
        return (t -= 1) * t * t * t * t + 1;
      },
      easeInOutQuint: function easeInOutQuint(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
      },
      easeInSine: function easeInSine(t) {
        return 1 - Math.cos(t * E);
      },
      easeOutSine: function easeOutSine(t) {
        return Math.sin(t * E);
      },
      easeInOutSine: function easeInOutSine(t) {
        return -.5 * (Math.cos(C * t) - 1);
      },
      easeInExpo: function easeInExpo(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      },
      easeOutExpo: function easeOutExpo(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      easeInOutExpo: function easeInOutExpo(t) {
        return ci(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
      },
      easeInCirc: function easeInCirc(t) {
        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
      },
      easeOutCirc: function easeOutCirc(t) {
        return Math.sqrt(1 - (t -= 1) * t);
      },
      easeInOutCirc: function easeInOutCirc(t) {
        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      easeInElastic: function easeInElastic(t) {
        return ci(t) ? t : di(t, .075, .3);
      },
      easeOutElastic: function easeOutElastic(t) {
        return ci(t) ? t : ui(t, .075, .3);
      },
      easeInOutElastic: function easeInOutElastic(t) {
        var e = .1125;
        return ci(t) ? t : t < .5 ? .5 * di(2 * t, e, .45) : .5 + .5 * ui(2 * t - 1, e, .45);
      },
      easeInBack: function easeInBack(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e);
      },
      easeOutBack: function easeOutBack(t) {
        var e = 1.70158;
        return (t -= 1) * t * ((e + 1) * t + e) + 1;
      },
      easeInOutBack: function easeInOutBack(t) {
        var e = 1.70158;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      },
      easeInBounce: function easeInBounce(t) {
        return 1 - fi.easeOutBounce(1 - t);
      },
      easeOutBounce: function easeOutBounce(t) {
        var e = 7.5625,
          i = 2.75;
        return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + .75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + .9375 : e * (t -= 2.625 / i) * t + .984375;
      },
      easeInOutBounce: function easeInOutBounce(t) {
        return t < .5 ? .5 * fi.easeInBounce(2 * t) : .5 * fi.easeOutBounce(2 * t - 1) + .5;
      }
    };
  function gi(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: t.y + i * (e.y - t.y)
    };
  }
  function pi(t, e, i, s) {
    return {
      x: t.x + i * (e.x - t.x),
      y: "middle" === s ? i < .5 ? t.y : e.y : "after" === s ? i < 1 ? t.y : e.y : i > 0 ? e.y : t.y
    };
  }
  function mi(t, e, i, s) {
    var n = {
        x: t.cp2x,
        y: t.cp2y
      },
      o = {
        x: e.cp1x,
        y: e.cp1y
      },
      a = gi(t, n, i),
      r = gi(n, o, i),
      l = gi(o, e, i),
      h = gi(a, r, i),
      c = gi(r, l, i);
    return gi(h, c, i);
  }
  var bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function _i(t, e) {
    var i = ("" + t).match(bi);
    if (!i || "normal" === i[1]) return 1.2 * e;
    switch (t = +i[2], i[3]) {
      case "px":
        return t;
      case "%":
        t /= 100;
    }
    return e * t;
  }
  var yi = function yi(t) {
    return +t || 0;
  };
  function vi(t, e) {
    var i = {},
      s = o(e),
      n = s ? Object.keys(e) : e,
      a = o(t) ? s ? function (i) {
        return l(t[i], t[e[i]]);
      } : function (e) {
        return t[e];
      } : function () {
        return t;
      };
    var _iterator10 = _createForOfIteratorHelper(n),
      _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
        var _t9 = _step10.value;
        i[_t9] = yi(a(_t9));
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return i;
  }
  function Mi(t) {
    return vi(t, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }
  function wi(t) {
    return vi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
  }
  function ki(t) {
    var e = Mi(t);
    return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
  }
  function Si(t, e) {
    t = t || {}, e = e || ue.font;
    var i = l(t.size, e.size);
    "string" == typeof i && (i = parseInt(i, 10));
    var s = l(t.style, e.style);
    s && !("" + s).match(xi) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
    var n = {
      family: l(t.family, e.family),
      lineHeight: _i(l(t.lineHeight, e.lineHeight), i),
      size: i,
      style: s,
      weight: l(t.weight, e.weight),
      string: ""
    };
    return n.string = De(n), n;
  }
  function Pi(t, e, i, s) {
    var o,
      a,
      r,
      l = !0;
    for (o = 0, a = t.length; o < a; ++o) if (r = t[o], void 0 !== r && (void 0 !== e && "function" == typeof r && (r = r(e), l = !1), void 0 !== i && n(r) && (r = r[i % r.length], l = !1), void 0 !== r)) return s && !l && (s.cacheable = !1), r;
  }
  function Di(t, e, i) {
    var s = t.min,
      n = t.max,
      o = c(e, (n - s) / 2),
      a = function a(t, e) {
        return i && 0 === t ? 0 : t + e;
      };
    return {
      min: a(s, -Math.abs(o)),
      max: a(n, o)
    };
  }
  function Ci(t, e) {
    return Object.assign(Object.create(t), e);
  }
  function Oi(t, e, i) {
    return t ? function (t, e) {
      return {
        x: function x(i) {
          return t + t + e - i;
        },
        setWidth: function setWidth(t) {
          e = t;
        },
        textAlign: function textAlign(t) {
          return "center" === t ? t : "right" === t ? "left" : "right";
        },
        xPlus: function xPlus(t, e) {
          return t - e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t - e;
        }
      };
    }(e, i) : {
      x: function x(t) {
        return t;
      },
      setWidth: function setWidth(t) {},
      textAlign: function textAlign(t) {
        return t;
      },
      xPlus: function xPlus(t, e) {
        return t + e;
      },
      leftForLtr: function leftForLtr(t, e) {
        return t;
      }
    };
  }
  function Ai(t, e) {
    var i, s;
    "ltr" !== e && "rtl" !== e || (i = t.canvas.style, s = [i.getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s);
  }
  function Ti(t, e) {
    void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
  }
  function Li(t) {
    return "angle" === t ? {
      between: Z,
      compare: K,
      normalize: G
    } : {
      between: tt,
      compare: function compare(t, e) {
        return t - e;
      },
      normalize: function normalize(t) {
        return t;
      }
    };
  }
  function Ei(_ref2) {
    var t = _ref2.start,
      e = _ref2.end,
      i = _ref2.count,
      s = _ref2.loop,
      n = _ref2.style;
    return {
      start: t % i,
      end: e % i,
      loop: s && (e - t + 1) % i == 0,
      style: n
    };
  }
  function Ri(t, e, i) {
    if (!i) return [t];
    var s = i.property,
      n = i.start,
      o = i.end,
      a = e.length,
      _Li = Li(s),
      r = _Li.compare,
      l = _Li.between,
      h = _Li.normalize,
      _ref3 = function (t, e, i) {
        var s = i.property,
          n = i.start,
          o = i.end,
          _Li2 = Li(s),
          a = _Li2.between,
          r = _Li2.normalize,
          l = e.length;
        var h,
          c,
          d = t.start,
          u = t.end,
          f = t.loop;
        if (f) {
          for (d += l, u += l, h = 0, c = l; h < c && a(r(e[d % l][s]), n, o); ++h) d--, u--;
          d %= l, u %= l;
        }
        return u < d && (u += l), {
          start: d,
          end: u,
          loop: f,
          style: t.style
        };
      }(t, e, i),
      c = _ref3.start,
      d = _ref3.end,
      u = _ref3.loop,
      f = _ref3.style,
      g = [];
    var p,
      m,
      b,
      x = !1,
      _ = null;
    var y = function y() {
        return x || l(n, b, p) && 0 !== r(n, b);
      },
      v = function v() {
        return !x || 0 === r(o, p) || l(o, b, p);
      };
    for (var _t10 = c, _i11 = c; _t10 <= d; ++_t10) m = e[_t10 % a], m.skip || (p = h(m[s]), p !== b && (x = l(p, n, o), null === _ && y() && (_ = 0 === r(p, n) ? _t10 : _i11), null !== _ && v() && (g.push(Ei({
      start: _,
      end: _t10,
      loop: u,
      count: a,
      style: f
    })), _ = null), _i11 = _t10, b = p));
    return null !== _ && g.push(Ei({
      start: _,
      end: d,
      loop: u,
      count: a,
      style: f
    })), g;
  }
  function Ii(t, e) {
    var i = [],
      s = t.segments;
    for (var _n7 = 0; _n7 < s.length; _n7++) {
      var _o10 = Ri(s[_n7], t.points, e);
      _o10.length && i.push.apply(i, _toConsumableArray(_o10));
    }
    return i;
  }
  function zi(t, e) {
    var i = t.points,
      s = t.options.spanGaps,
      n = i.length;
    if (!n) return [];
    var o = !!t._loop,
      _ref4 = function (t, e, i, s) {
        var n = 0,
          o = e - 1;
        if (i && !s) for (; n < e && !t[n].skip;) n++;
        for (; n < e && t[n].skip;) n++;
        for (n %= e, i && (o += n); o > n && t[o % e].skip;) o--;
        return o %= e, {
          start: n,
          end: o
        };
      }(i, n, o, s),
      a = _ref4.start,
      r = _ref4.end;
    if (!0 === s) return Fi(t, [{
      start: a,
      end: r,
      loop: o
    }], i, e);
    return Fi(t, function (t, e, i, s) {
      var n = t.length,
        o = [];
      var a,
        r = e,
        l = t[e];
      for (a = e + 1; a <= i; ++a) {
        var _i12 = t[a % n];
        _i12.skip || _i12.stop ? l.skip || (s = !1, o.push({
          start: e % n,
          end: (a - 1) % n,
          loop: s
        }), e = r = _i12.stop ? a : null) : (r = a, l.skip && (e = a)), l = _i12;
      }
      return null !== r && o.push({
        start: e % n,
        end: r % n,
        loop: s
      }), o;
    }(i, a, r < a ? r + n : r, !!t._fullLoop && 0 === a && r === n - 1), i, e);
  }
  function Fi(t, e, i, s) {
    return s && s.setContext && i ? function (t, e, i, s) {
      var n = t._chart.getContext(),
        o = Vi(t.options),
        a = t._datasetIndex,
        r = t.options.spanGaps,
        l = i.length,
        h = [];
      var c = o,
        d = e[0].start,
        u = d;
      function f(t, e, s, n) {
        var o = r ? -1 : 1;
        if (t !== e) {
          for (t += l; i[t % l].skip;) t -= o;
          for (; i[e % l].skip;) e += o;
          t % l != e % l && (h.push({
            start: t % l,
            end: e % l,
            loop: s,
            style: n
          }), c = n, d = e % l);
        }
      }
      var _iterator11 = _createForOfIteratorHelper(e),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _t11 = _step11.value;
          d = r ? d : _t11.start;
          var _e12 = void 0,
            _o11 = i[d % l];
          for (u = d + 1; u <= _t11.end; u++) {
            var _r5 = i[u % l];
            _e12 = Vi(s.setContext(Ci(n, {
              type: "segment",
              p0: _o11,
              p1: _r5,
              p0DataIndex: (u - 1) % l,
              p1DataIndex: u % l,
              datasetIndex: a
            }))), Bi(_e12, c) && f(d, u - 1, _t11.loop, c), _o11 = _r5, c = _e12;
          }
          d < u - 1 && f(d, u - 1, _t11.loop, c);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return h;
    }(t, e, i, s) : e;
  }
  function Vi(t) {
    return {
      backgroundColor: t.backgroundColor,
      borderCapStyle: t.borderCapStyle,
      borderDash: t.borderDash,
      borderDashOffset: t.borderDashOffset,
      borderJoinStyle: t.borderJoinStyle,
      borderWidth: t.borderWidth,
      borderColor: t.borderColor
    };
  }
  function Bi(t, e) {
    if (!e) return !1;
    var i = [],
      s = function s(t, e) {
        return Jt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
      };
    return JSON.stringify(t, s) !== JSON.stringify(e, s);
  }
  var Wi = Object.freeze({
    __proto__: null,
    HALF_PI: E,
    INFINITY: T,
    PI: C,
    PITAU: A,
    QUARTER_PI: R,
    RAD_PER_DEG: L,
    TAU: O,
    TWO_THIRDS_PI: I,
    _addGrace: Di,
    _alignPixel: Ae,
    _alignStartEnd: ft,
    _angleBetween: Z,
    _angleDiff: K,
    _arrayUnique: lt,
    _attachContext: $e,
    _bezierCurveTo: Ve,
    _bezierInterpolation: mi,
    _boundSegment: Ri,
    _boundSegments: Ii,
    _capitalize: w,
    _computeSegments: zi,
    _createResolver: je,
    _decimalPlaces: U,
    _deprecated: function _deprecated(t, e, i, s) {
      void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
    },
    _descriptors: Ye,
    _elementsEqual: f,
    _factorize: W,
    _filterBetween: nt,
    _getParentNode: ge,
    _getStartAndCountOfVisiblePoints: pt,
    _int16Range: Q,
    _isBetween: tt,
    _isClickEvent: D,
    _isDomSupported: fe,
    _isPointInArea: Re,
    _limitValue: J,
    _longestText: Oe,
    _lookup: et,
    _lookupByKey: it,
    _measureText: Ce,
    _merger: m,
    _mergerIf: _,
    _normalizeAngle: G,
    _parseObjectDataRadialScale: ii,
    _pointInLine: gi,
    _readValueToProps: vi,
    _rlookupByKey: st,
    _scaleRangesChanged: mt,
    _setMinAndMaxByKey: j,
    _splitKey: v,
    _steppedInterpolation: pi,
    _steppedLineTo: Fe,
    _textX: gt,
    _toLeftRightCenter: ut,
    _updateBezierControlPoints: hi,
    addRoundedRectPath: He,
    almostEquals: V,
    almostWhole: H,
    callback: d,
    clearCanvas: Te,
    clipArea: Ie,
    clone: g,
    color: Qt,
    createContext: Ci,
    debounce: dt,
    defined: k,
    distanceBetweenPoints: q,
    drawPoint: Le,
    drawPointLegend: Ee,
    each: u,
    easingEffects: fi,
    finiteOrDefault: r,
    fontString: function fontString(t, e, i) {
      return e + " " + t + "px " + i;
    },
    formatNumber: ne,
    getAngleFromPoint: X,
    getHoverColor: te,
    getMaximumSize: we,
    getRelativePosition: ve,
    getRtlAdapter: Oi,
    getStyle: be,
    isArray: n,
    isFinite: a,
    isFunction: S,
    isNullOrUndef: s,
    isNumber: N,
    isObject: o,
    isPatternOrGradient: Jt,
    listenArrayEvents: at,
    log10: z,
    merge: b,
    mergeIf: x,
    niceNum: B,
    noop: e,
    overrideTextDirection: Ai,
    readUsedSize: Pe,
    renderText: Ne,
    requestAnimFrame: ht,
    resolve: Pi,
    resolveObjectKey: M,
    restoreTextDirection: Ti,
    retinaScale: ke,
    setsEqual: P,
    sign: F,
    splineCurve: ai,
    splineCurveMonotone: ri,
    supportsEventListenerOptions: Se,
    throttled: ct,
    toDegrees: Y,
    toDimension: c,
    toFont: Si,
    toFontString: De,
    toLineHeight: _i,
    toPadding: ki,
    toPercentage: h,
    toRadians: $,
    toTRBL: Mi,
    toTRBLCorners: wi,
    uid: i,
    unclipArea: ze,
    unlistenArrayEvents: rt,
    valueOrDefault: l
  });
  function Ni(t, e, i, s) {
    var n = t.controller,
      o = t.data,
      a = t._sorted,
      r = n._cachedMeta.iScale;
    if (r && e === r.axis && "r" !== e && a && o.length) {
      var _t12 = r._reversePixels ? st : it;
      if (!s) return _t12(o, e, i);
      if (n._sharedOptions) {
        var _s11 = o[0],
          _n8 = "function" == typeof _s11.getRange && _s11.getRange(e);
        if (_n8) {
          var _s12 = _t12(o, e, i - _n8),
            _a7 = _t12(o, e, i + _n8);
          return {
            lo: _s12.lo,
            hi: _a7.hi
          };
        }
      }
    }
    return {
      lo: 0,
      hi: o.length - 1
    };
  }
  function Hi(t, e, i, s, n) {
    var o = t.getSortedVisibleDatasetMetas(),
      a = i[e];
    for (var _t13 = 0, _i13 = o.length; _t13 < _i13; ++_t13) {
      var _o$_t = o[_t13],
        _i14 = _o$_t.index,
        _r6 = _o$_t.data,
        _Ni = Ni(o[_t13], e, a, n),
        _l5 = _Ni.lo,
        _h4 = _Ni.hi;
      for (var _t14 = _l5; _t14 <= _h4; ++_t14) {
        var _e13 = _r6[_t14];
        _e13.skip || s(_e13, _i14, _t14);
      }
    }
  }
  function ji(t, e, i, s, n) {
    var o = [];
    if (!n && !t.isPointInArea(e)) return o;
    return Hi(t, i, e, function (i, a, r) {
      (n || Re(i, t.chartArea, 0)) && i.inRange(e.x, e.y, s) && o.push({
        element: i,
        datasetIndex: a,
        index: r
      });
    }, !0), o;
  }
  function $i(t, e, i, s, n, o) {
    var a = [];
    var r = function (t) {
      var e = -1 !== t.indexOf("x"),
        i = -1 !== t.indexOf("y");
      return function (t, s) {
        var n = e ? Math.abs(t.x - s.x) : 0,
          o = i ? Math.abs(t.y - s.y) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
      };
    }(i);
    var l = Number.POSITIVE_INFINITY;
    return Hi(t, i, e, function (i, h, c) {
      var d = i.inRange(e.x, e.y, n);
      if (s && !d) return;
      var u = i.getCenterPoint(n);
      if (!(!!o || t.isPointInArea(u)) && !d) return;
      var f = r(e, u);
      f < l ? (a = [{
        element: i,
        datasetIndex: h,
        index: c
      }], l = f) : f === l && a.push({
        element: i,
        datasetIndex: h,
        index: c
      });
    }), a;
  }
  function Yi(t, e, i, s, n, o) {
    return o || t.isPointInArea(e) ? "r" !== i || s ? $i(t, e, i, s, n, o) : function (t, e, i, s) {
      var n = [];
      return Hi(t, i, e, function (t, i, o) {
        var _t$getProps = t.getProps(["startAngle", "endAngle"], s),
          a = _t$getProps.startAngle,
          r = _t$getProps.endAngle,
          _X = X(t, {
            x: e.x,
            y: e.y
          }),
          l = _X.angle;
        Z(l, a, r) && n.push({
          element: t,
          datasetIndex: i,
          index: o
        });
      }), n;
    }(t, e, i, n) : [];
  }
  function Ui(t, e, i, s, n) {
    var o = [],
      a = "x" === i ? "inXRange" : "inYRange";
    var r = !1;
    return Hi(t, i, e, function (t, s, l) {
      t[a](e[i], n) && (o.push({
        element: t,
        datasetIndex: s,
        index: l
      }), r = r || t.inRange(e.x, e.y, n));
    }), s && !r ? [] : o;
  }
  var Xi = {
    evaluateInteractionItems: Hi,
    modes: {
      index: function index(t, e, i, s) {
        var n = ve(e, t),
          o = i.axis || "x",
          a = i.includeInvisible || !1,
          r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a),
          l = [];
        return r.length ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
          var e = r[0].index,
            i = t.data[e];
          i && !i.skip && l.push({
            element: i,
            datasetIndex: t.index,
            index: e
          });
        }), l) : [];
      },
      dataset: function dataset(t, e, i, s) {
        var n = ve(e, t),
          o = i.axis || "xy",
          a = i.includeInvisible || !1;
        var r = i.intersect ? ji(t, n, o, s, a) : Yi(t, n, o, !1, s, a);
        if (r.length > 0) {
          var _e14 = r[0].datasetIndex,
            _i15 = t.getDatasetMeta(_e14).data;
          r = [];
          for (var _t15 = 0; _t15 < _i15.length; ++_t15) r.push({
            element: _i15[_t15],
            datasetIndex: _e14,
            index: _t15
          });
        }
        return r;
      },
      point: function point(t, e, i, s) {
        return ji(t, ve(e, t), i.axis || "xy", s, i.includeInvisible || !1);
      },
      nearest: function nearest(t, e, i, s) {
        var n = ve(e, t),
          o = i.axis || "xy",
          a = i.includeInvisible || !1;
        return Yi(t, n, o, i.intersect, s, a);
      },
      x: function x(t, e, i, s) {
        return Ui(t, ve(e, t), "x", i.intersect, s);
      },
      y: function y(t, e, i, s) {
        return Ui(t, ve(e, t), "y", i.intersect, s);
      }
    }
  };
  var qi = ["left", "top", "right", "bottom"];
  function Ki(t, e) {
    return t.filter(function (t) {
      return t.pos === e;
    });
  }
  function Gi(t, e) {
    return t.filter(function (t) {
      return -1 === qi.indexOf(t.pos) && t.box.axis === e;
    });
  }
  function Zi(t, e) {
    return t.sort(function (t, i) {
      var s = e ? i : t,
        n = e ? t : i;
      return s.weight === n.weight ? s.index - n.index : s.weight - n.weight;
    });
  }
  function Ji(t, e) {
    var i = function (t) {
        var e = {};
        var _iterator12 = _createForOfIteratorHelper(t),
          _step12;
        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var _i16 = _step12.value;
            var _t16 = _i16.stack,
              _s13 = _i16.pos,
              _n9 = _i16.stackWeight;
            if (!_t16 || !qi.includes(_s13)) continue;
            var _o12 = e[_t16] || (e[_t16] = {
              count: 0,
              placed: 0,
              weight: 0,
              size: 0
            });
            _o12.count++, _o12.weight += _n9;
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
        return e;
      }(t),
      s = e.vBoxMaxWidth,
      n = e.hBoxMaxHeight;
    var o, a, r;
    for (o = 0, a = t.length; o < a; ++o) {
      r = t[o];
      var _a8 = r.box.fullSize,
        _l6 = i[r.stack],
        _h5 = _l6 && r.stackWeight / _l6.weight;
      r.horizontal ? (r.width = _h5 ? _h5 * s : _a8 && e.availableWidth, r.height = n) : (r.width = s, r.height = _h5 ? _h5 * n : _a8 && e.availableHeight);
    }
    return i;
  }
  function Qi(t, e, i, s) {
    return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
  }
  function ts(t, e) {
    t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
  }
  function es(t, e, i, s) {
    var n = i.pos,
      a = i.box,
      r = t.maxPadding;
    if (!o(n)) {
      i.size && (t[n] -= i.size);
      var _e15 = s[i.stack] || {
        size: 0,
        count: 1
      };
      _e15.size = Math.max(_e15.size, i.horizontal ? a.height : a.width), i.size = _e15.size / _e15.count, t[n] += i.size;
    }
    a.getPadding && ts(r, a.getPadding());
    var l = Math.max(0, e.outerWidth - Qi(r, t, "left", "right")),
      h = Math.max(0, e.outerHeight - Qi(r, t, "top", "bottom")),
      c = l !== t.w,
      d = h !== t.h;
    return t.w = l, t.h = h, i.horizontal ? {
      same: c,
      other: d
    } : {
      same: d,
      other: c
    };
  }
  function is(t, e) {
    var i = e.maxPadding;
    function s(t) {
      var s = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      return t.forEach(function (t) {
        s[t] = Math.max(e[t], i[t]);
      }), s;
    }
    return s(t ? ["left", "right"] : ["top", "bottom"]);
  }
  function ss(t, e, i, s) {
    var n = [];
    var o, a, r, l, h, c;
    for (o = 0, a = t.length, h = 0; o < a; ++o) {
      r = t[o], l = r.box, l.update(r.width || e.w, r.height || e.h, is(r.horizontal, e));
      var _es = es(e, i, r, s),
        _a9 = _es.same,
        _d2 = _es.other;
      h |= _a9 && n.length, c = c || _d2, l.fullSize || n.push(r);
    }
    return h && ss(n, e, i, s) || c;
  }
  function ns(t, e, i, s, n) {
    t.top = i, t.left = e, t.right = e + s, t.bottom = i + n, t.width = s, t.height = n;
  }
  function os(t, e, i, s) {
    var n = i.padding;
    var o = e.x,
      a = e.y;
    var _iterator13 = _createForOfIteratorHelper(t),
      _step13;
    try {
      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
        var _r7 = _step13.value;
        var _t17 = _r7.box,
          _l7 = s[_r7.stack] || {
            count: 1,
            placed: 0,
            weight: 1
          },
          _h6 = _r7.stackWeight / _l7.weight || 1;
        if (_r7.horizontal) {
          var _s14 = e.w * _h6,
            _o13 = _l7.size || _t17.height;
          k(_l7.start) && (a = _l7.start), _t17.fullSize ? ns(_t17, n.left, a, i.outerWidth - n.right - n.left, _o13) : ns(_t17, e.left + _l7.placed, a, _s14, _o13), _l7.start = a, _l7.placed += _s14, a = _t17.bottom;
        } else {
          var _s15 = e.h * _h6,
            _a10 = _l7.size || _t17.width;
          k(_l7.start) && (o = _l7.start), _t17.fullSize ? ns(_t17, o, n.top, _a10, i.outerHeight - n.bottom - n.top) : ns(_t17, o, e.top + _l7.placed, _a10, _s15), _l7.start = o, _l7.placed += _s15, o = _t17.right;
        }
      }
    } catch (err) {
      _iterator13.e(err);
    } finally {
      _iterator13.f();
    }
    e.x = o, e.y = a;
  }
  var as = {
    addBox: function addBox(t, e) {
      t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
        return [{
          z: 0,
          draw: function draw(t) {
            e.draw(t);
          }
        }];
      }, t.boxes.push(e);
    },
    removeBox: function removeBox(t, e) {
      var i = t.boxes ? t.boxes.indexOf(e) : -1;
      -1 !== i && t.boxes.splice(i, 1);
    },
    configure: function configure(t, e, i) {
      e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
    },
    update: function update(t, e, i, s) {
      if (!t) return;
      var n = ki(t.options.layout.padding),
        o = Math.max(e - n.width, 0),
        a = Math.max(i - n.height, 0),
        r = function (t) {
          var e = function (t) {
              var e = [];
              var i, s, n, o, a, r;
              for (i = 0, s = (t || []).length; i < s; ++i) {
                var _n10, _n10$options, _n10$options$stackWei;
                n = t[i], (_n10 = n, o = _n10.position, _n10$options = _n10.options, a = _n10$options.stack, _n10$options$stackWei = _n10$options.stackWeight, r = _n10$options$stackWei === void 0 ? 1 : _n10$options$stackWei), e.push({
                  index: i,
                  box: n,
                  pos: o,
                  horizontal: n.isHorizontal(),
                  weight: n.weight,
                  stack: a && o + a,
                  stackWeight: r
                });
              }
              return e;
            }(t),
            i = Zi(e.filter(function (t) {
              return t.box.fullSize;
            }), !0),
            s = Zi(Ki(e, "left"), !0),
            n = Zi(Ki(e, "right")),
            o = Zi(Ki(e, "top"), !0),
            a = Zi(Ki(e, "bottom")),
            r = Gi(e, "x"),
            l = Gi(e, "y");
          return {
            fullSize: i,
            leftAndTop: s.concat(o),
            rightAndBottom: n.concat(l).concat(a).concat(r),
            chartArea: Ki(e, "chartArea"),
            vertical: s.concat(n).concat(l),
            horizontal: o.concat(a).concat(r)
          };
        }(t.boxes),
        l = r.vertical,
        h = r.horizontal;
      u(t.boxes, function (t) {
        "function" == typeof t.beforeLayout && t.beforeLayout();
      });
      var c = l.reduce(function (t, e) {
          return e.box.options && !1 === e.box.options.display ? t : t + 1;
        }, 0) || 1,
        d = Object.freeze({
          outerWidth: e,
          outerHeight: i,
          padding: n,
          availableWidth: o,
          availableHeight: a,
          vBoxMaxWidth: o / 2 / c,
          hBoxMaxHeight: a / 2
        }),
        f = Object.assign({}, n);
      ts(f, ki(s));
      var g = Object.assign({
          maxPadding: f,
          w: o,
          h: a,
          x: n.left,
          y: n.top
        }, n),
        p = Ji(l.concat(h), d);
      ss(r.fullSize, g, d, p), ss(l, g, d, p), ss(h, g, d, p) && ss(l, g, d, p), function (t) {
        var e = t.maxPadding;
        function i(i) {
          var s = Math.max(e[i] - t[i], 0);
          return t[i] += s, s;
        }
        t.y += i("top"), t.x += i("left"), i("right"), i("bottom");
      }(g), os(r.leftAndTop, g, d, p), g.x += g.w, g.y += g.h, os(r.rightAndBottom, g, d, p), t.chartArea = {
        left: g.left,
        top: g.top,
        right: g.left + g.w,
        bottom: g.top + g.h,
        height: g.h,
        width: g.w
      }, u(r.chartArea, function (e) {
        var i = e.box;
        Object.assign(i, t.chartArea), i.update(g.w, g.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };
  var rs = /*#__PURE__*/function () {
    function rs() {
      _classCallCheck(this, rs);
    }
    return _createClass(rs, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {}
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        return !1;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {}
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e, i) {}
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return 1;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, s) {
        return e = Math.max(0, e || t.width), i = i || t.height, {
          width: e,
          height: Math.max(0, s ? Math.floor(e / s) : i)
        };
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        return !0;
      }
    }, {
      key: "updateConfig",
      value: function updateConfig(t) {}
    }]);
  }();
  var ls = /*#__PURE__*/function (_rs) {
    function ls() {
      _classCallCheck(this, ls);
      return _callSuper(this, ls, arguments);
    }
    _inherits(ls, _rs);
    return _createClass(ls, [{
      key: "acquireContext",
      value: function acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null;
      }
    }, {
      key: "updateConfig",
      value: function updateConfig(t) {
        t.options.animation = !1;
      }
    }]);
  }(rs);
  var hs = "$chartjs",
    cs = {
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup",
      pointerenter: "mouseenter",
      pointerdown: "mousedown",
      pointermove: "mousemove",
      pointerup: "mouseup",
      pointerleave: "mouseout",
      pointerout: "mouseout"
    },
    ds = function ds(t) {
      return null === t || "" === t;
    };
  var us = !!Se && {
    passive: !0
  };
  function fs(t, e, i) {
    t && t.canvas && t.canvas.removeEventListener(e, i, us);
  }
  function gs(t, e) {
    var _iterator14 = _createForOfIteratorHelper(t),
      _step14;
    try {
      for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
        var _i17 = _step14.value;
        if (_i17 === e || _i17.contains(e)) return !0;
      }
    } catch (err) {
      _iterator14.e(err);
    } finally {
      _iterator14.f();
    }
  }
  function ps(t, e, i) {
    var s = t.canvas,
      n = new MutationObserver(function (t) {
        var e = !1;
        var _iterator15 = _createForOfIteratorHelper(t),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _i18 = _step15.value;
            e = e || gs(_i18.addedNodes, s), e = e && !gs(_i18.removedNodes, s);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        e && i();
      });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }
  function ms(t, e, i) {
    var s = t.canvas,
      n = new MutationObserver(function (t) {
        var e = !1;
        var _iterator16 = _createForOfIteratorHelper(t),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _i19 = _step16.value;
            e = e || gs(_i19.removedNodes, s), e = e && !gs(_i19.addedNodes, s);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        e && i();
      });
    return n.observe(document, {
      childList: !0,
      subtree: !0
    }), n;
  }
  var bs = new Map();
  var xs = 0;
  function _s() {
    var t = window.devicePixelRatio;
    t !== xs && (xs = t, bs.forEach(function (e, i) {
      i.currentDevicePixelRatio !== t && e();
    }));
  }
  function ys(t, e, i) {
    var s = t.canvas,
      n = s && ge(s);
    if (true || !n) return;
    var o = ct(function (t, e) {
        var s = n.clientWidth;
        i(t, e), s < n.clientWidth && i();
      }, window),
      a = new ResizeObserver(function (t) {
        var e = t[0],
          i = e.contentRect.width,
          s = e.contentRect.height;
        0 === i && 0 === s || o(i, s);
      });
    return a.observe(n), function (t, e) {
      bs.size || window.addEventListener("resize", _s), bs.set(t, e);
    }(t, o), a;
  }
  function vs(t, e, i) {
    i && i.disconnect(), "resize" === e && function (t) {
      bs["delete"](t), bs.size || window.removeEventListener("resize", _s);
    }(t);
  }
  function Ms(t, e, i) {
    var s = t.canvas,
      n = ct(function (e) {
        null !== t.ctx && i(function (t, e) {
          var i = cs[t.type] || t.type,
            _ve = ve(t, e),
            s = _ve.x,
            n = _ve.y;
          return {
            type: i,
            chart: e,
            "native": t,
            x: void 0 !== s ? s : null,
            y: void 0 !== n ? n : null
          };
        }(e, t));
      }, t);
    return function (t, e, i) {
      t && t.addEventListener(e, i, us);
    }(s, e, n), n;
  }
  var ws = /*#__PURE__*/function (_rs2) {
    function ws() {
      _classCallCheck(this, ws);
      return _callSuper(this, ws, arguments);
    }
    _inherits(ws, _rs2);
    return _createClass(ws, [{
      key: "acquireContext",
      value: function acquireContext(t, e) {
        var i = t && t.getContext && t.getContext("2d");
        return i && i.canvas === t ? (function (t, e) {
          var i = t.style,
            s = t.getAttribute("height"),
            n = t.getAttribute("width");
          if (t[hs] = {
            initial: {
              height: s,
              width: n,
              style: {
                display: i.display,
                height: i.height,
                width: i.width
              }
            }
          }, i.display = i.display || "block", i.boxSizing = i.boxSizing || "border-box", ds(n)) {
            var _e16 = Pe(t, "width");
            void 0 !== _e16 && (t.width = _e16);
          }
          if (ds(s)) if ("" === t.style.height) t.height = t.width / (e || 2);else {
            var _e17 = Pe(t, "height");
            void 0 !== _e17 && (t.height = _e17);
          }
        }(t, e), i) : null;
      }
    }, {
      key: "releaseContext",
      value: function releaseContext(t) {
        var e = t.canvas;
        if (!e[hs]) return !1;
        var i = e[hs].initial;
        ["height", "width"].forEach(function (t) {
          var n = i[t];
          s(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
        });
        var n = i.style || {};
        return Object.keys(n).forEach(function (t) {
          e.style[t] = n[t];
        }), e.width = e.width, delete e[hs], !0;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        var s = t.$proxies || (t.$proxies = {}),
          n = {
            attach: ps,
            detach: ms,
            resize: ys
          }[e] || Ms;
        s[e] = n(t, e, i);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e) {
        var i = t.$proxies || (t.$proxies = {}),
          s = i[e];
        if (!s) return;
        (({
          attach: vs,
          detach: vs,
          resize: vs
        })[e] || fs)(t, e, s), i[e] = void 0;
      }
    }, {
      key: "getDevicePixelRatio",
      value: function getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
    }, {
      key: "getMaximumSize",
      value: function getMaximumSize(t, e, i, s) {
        return we(t, e, i, s);
      }
    }, {
      key: "isAttached",
      value: function isAttached(t) {
        var e = ge(t);
        return !(!e || !e.isConnected);
      }
    }]);
  }(rs);
  function ks(t) {
    return !fe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? ls : ws;
  }
  var Ss = Object.freeze({
    __proto__: null,
    BasePlatform: rs,
    BasicPlatform: ls,
    DomPlatform: ws,
    _detectPlatform: ks
  });
  var Ps = "transparent",
    Ds = {
      "boolean": function boolean(t, e, i) {
        return i > .5 ? e : t;
      },
      color: function color(t, e, i) {
        var s = Qt(t || Ps),
          n = s.valid && Qt(e || Ps);
        return n && n.valid ? n.mix(s, i).hexString() : e;
      },
      number: function number(t, e, i) {
        return t + (e - t) * i;
      }
    };
  var Cs = /*#__PURE__*/function () {
    function Cs(t, e, i, s) {
      _classCallCheck(this, Cs);
      var n = e[i];
      s = Pi([t.to, s, n, t.from]);
      var o = Pi([t.from, n, s]);
      this._active = !0, this._fn = t.fn || Ds[t.type || _typeof(o)], this._easing = fi[t.easing] || fi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = o, this._to = s, this._promises = void 0;
    }
    return _createClass(Cs, [{
      key: "active",
      value: function active() {
        return this._active;
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        if (this._active) {
          this._notify(!1);
          var _s16 = this._target[this._prop],
            _n11 = i - this._start,
            _o14 = this._duration - _n11;
          this._start = i, this._duration = Math.floor(Math.max(_o14, t.duration)), this._total += _n11, this._loop = !!t.loop, this._to = Pi([t.to, e, _s16, t.from]), this._from = Pi([t.from, _s16, e]);
        }
      }
    }, {
      key: "cancel",
      value: function cancel() {
        this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
      }
    }, {
      key: "tick",
      value: function tick(t) {
        var e = t - this._start,
          i = this._duration,
          s = this._prop,
          n = this._from,
          o = this._loop,
          a = this._to;
        var r;
        if (this._active = n !== a && (o || e < i), !this._active) return this._target[s] = a, void this._notify(!0);
        e < 0 ? this._target[s] = n : (r = e / i % 2, r = o && r > 1 ? 2 - r : r, r = this._easing(Math.min(1, Math.max(0, r))), this._target[s] = this._fn(n, a, r));
      }
    }, {
      key: "wait",
      value: function wait() {
        var t = this._promises || (this._promises = []);
        return new Promise(function (e, i) {
          t.push({
            res: e,
            rej: i
          });
        });
      }
    }, {
      key: "_notify",
      value: function _notify(t) {
        var e = t ? "res" : "rej",
          i = this._promises || [];
        for (var _t18 = 0; _t18 < i.length; _t18++) i[_t18][e]();
      }
    }]);
  }();
  var Os = /*#__PURE__*/function () {
    function Os(t, e) {
      _classCallCheck(this, Os);
      this._chart = t, this._properties = new Map(), this.configure(e);
    }
    return _createClass(Os, [{
      key: "configure",
      value: function configure(t) {
        if (!o(t)) return;
        var e = Object.keys(ue.animation),
          i = this._properties;
        Object.getOwnPropertyNames(t).forEach(function (s) {
          var a = t[s];
          if (!o(a)) return;
          var r = {};
          for (var _i20 = 0, _e18 = e; _i20 < _e18.length; _i20++) {
            var _t19 = _e18[_i20];
            r[_t19] = a[_t19];
          }
          (n(a.properties) && a.properties || [s]).forEach(function (t) {
            t !== s && i.has(t) || i.set(t, r);
          });
        });
      }
    }, {
      key: "_animateOptions",
      value: function _animateOptions(t, e) {
        var i = e.options,
          s = function (t, e) {
            if (!e) return;
            var i = t.options;
            if (!i) return void (t.options = e);
            i.$shared && (t.options = i = Object.assign({}, i, {
              $shared: !1,
              $animations: {}
            }));
            return i;
          }(t, i);
        if (!s) return [];
        var n = this._createAnimations(s, i);
        return i.$shared && function (t, e) {
          var i = [],
            s = Object.keys(e);
          for (var _e19 = 0; _e19 < s.length; _e19++) {
            var _n12 = t[s[_e19]];
            _n12 && _n12.active() && i.push(_n12.wait());
          }
          return Promise.all(i);
        }(t.options.$animations, i).then(function () {
          t.options = i;
        }, function () {}), n;
      }
    }, {
      key: "_createAnimations",
      value: function _createAnimations(t, e) {
        var i = this._properties,
          s = [],
          n = t.$animations || (t.$animations = {}),
          o = Object.keys(e),
          a = Date.now();
        var r;
        for (r = o.length - 1; r >= 0; --r) {
          var _l8 = o[r];
          if ("$" === _l8.charAt(0)) continue;
          if ("options" === _l8) {
            s.push.apply(s, _toConsumableArray(this._animateOptions(t, e)));
            continue;
          }
          var _h7 = e[_l8];
          var _c5 = n[_l8];
          var _d3 = i.get(_l8);
          if (_c5) {
            if (_d3 && _c5.active()) {
              _c5.update(_d3, _h7, a);
              continue;
            }
            _c5.cancel();
          }
          _d3 && _d3.duration ? (n[_l8] = _c5 = new Cs(_d3, t, _l8, _h7), s.push(_c5)) : t[_l8] = _h7;
        }
        return s;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        if (0 === this._properties.size) return void Object.assign(t, e);
        var i = this._createAnimations(t, e);
        return i.length ? (xt.add(this._chart, i), !0) : void 0;
      }
    }]);
  }();
  function As(t, e) {
    var i = t && t.options || {},
      s = i.reverse,
      n = void 0 === i.min ? e : 0,
      o = void 0 === i.max ? e : 0;
    return {
      start: s ? o : n,
      end: s ? n : o
    };
  }
  function Ts(t, e) {
    var i = [],
      s = t._getSortedDatasetMetas(e);
    var n, o;
    for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
    return i;
  }
  function Ls(t, e, i) {
    var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var n = t.keys,
      o = "single" === s.mode;
    var r, l, h, c;
    if (null !== e) {
      for (r = 0, l = n.length; r < l; ++r) {
        if (h = +n[r], h === i) {
          if (s.all) continue;
          break;
        }
        c = t.values[h], a(c) && (o || 0 === e || F(e) === F(c)) && (e += c);
      }
      return e;
    }
  }
  function Es(t, e) {
    var i = t && t.options.stacked;
    return i || void 0 === i && void 0 !== e.stack;
  }
  function Rs(t, e, i) {
    var s = t[e] || (t[e] = {});
    return s[i] || (s[i] = {});
  }
  function Is(t, e, i, s) {
    var _iterator17 = _createForOfIteratorHelper(e.getMatchingVisibleMetas(s).reverse()),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _n13 = _step17.value;
        var _e20 = t[_n13.index];
        if (i && _e20 > 0 || !i && _e20 < 0) return _n13.index;
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
    return null;
  }
  function zs(t, e) {
    var i = t.chart,
      s = t._cachedMeta,
      n = i._stacks || (i._stacks = {}),
      o = s.iScale,
      a = s.vScale,
      r = s.index,
      l = o.axis,
      h = a.axis,
      c = function (t, e, i) {
        return "".concat(t.id, ".").concat(e.id, ".").concat(i.stack || i.type);
      }(o, a, s),
      d = e.length;
    var u;
    for (var _t20 = 0; _t20 < d; ++_t20) {
      var _i21 = e[_t20],
        _o15 = _i21[l],
        _d4 = _i21[h];
      u = (_i21._stacks || (_i21._stacks = {}))[h] = Rs(n, c, _o15), u[r] = _d4, u._top = Is(u, a, !0, s.type), u._bottom = Is(u, a, !1, s.type);
      (u._visualValues || (u._visualValues = {}))[r] = _d4;
    }
  }
  function Fs(t, e) {
    var i = t.scales;
    return Object.keys(i).filter(function (t) {
      return i[t].axis === e;
    }).shift();
  }
  function Vs(t, e) {
    var i = t.controller.index,
      s = t.vScale && t.vScale.axis;
    if (s) {
      e = e || t._parsed;
      var _iterator18 = _createForOfIteratorHelper(e),
        _step18;
      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var _t21 = _step18.value;
          var _e21 = _t21._stacks;
          if (!_e21 || void 0 === _e21[s] || void 0 === _e21[s][i]) return;
          delete _e21[s][i], void 0 !== _e21[s]._visualValues && void 0 !== _e21[s]._visualValues[i] && delete _e21[s]._visualValues[i];
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }
    }
  }
  var Bs = function Bs(t) {
      return "reset" === t || "none" === t;
    },
    Ws = function Ws(t, e) {
      return e ? t : Object.assign({}, t);
    };
  var Ns = /*#__PURE__*/function () {
    function Ns(t, e) {
      _classCallCheck(this, Ns);
      this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = (this instanceof Ns ? this.constructor : void 0).datasetElementType, this.dataElementType = (this instanceof Ns ? this.constructor : void 0).dataElementType, this.initialize();
    }
    return _createClass(Ns, [{
      key: "initialize",
      value: function initialize() {
        var t = this._cachedMeta;
        this.configure(), this.linkScales(), t._stacked = Es(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
    }, {
      key: "updateIndex",
      value: function updateIndex(t) {
        this.index !== t && Vs(this._cachedMeta), this.index = t;
      }
    }, {
      key: "linkScales",
      value: function linkScales() {
        var t = this.chart,
          e = this._cachedMeta,
          i = this.getDataset(),
          s = function s(t, e, i, _s17) {
            return "x" === t ? e : "r" === t ? _s17 : i;
          },
          n = e.xAxisID = l(i.xAxisID, Fs(t, "x")),
          o = e.yAxisID = l(i.yAxisID, Fs(t, "y")),
          a = e.rAxisID = l(i.rAxisID, Fs(t, "r")),
          r = e.indexAxis,
          h = e.iAxisID = s(r, n, o, a),
          c = e.vAxisID = s(r, o, n, a);
        e.xScale = this.getScaleForId(n), e.yScale = this.getScaleForId(o), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(h), e.vScale = this.getScaleForId(c);
      }
    }, {
      key: "getDataset",
      value: function getDataset() {
        return this.chart.data.datasets[this.index];
      }
    }, {
      key: "getMeta",
      value: function getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
    }, {
      key: "getScaleForId",
      value: function getScaleForId(t) {
        return this.chart.scales[t];
      }
    }, {
      key: "_getOtherScale",
      value: function _getOtherScale(t) {
        var e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._update("reset");
      }
    }, {
      key: "_destroy",
      value: function _destroy() {
        var t = this._cachedMeta;
        this._data && rt(this._data, this), t._stacked && Vs(t);
      }
    }, {
      key: "_dataCheck",
      value: function _dataCheck() {
        var t = this.getDataset(),
          e = t.data || (t.data = []),
          i = this._data;
        if (o(e)) this._data = function (t) {
          var e = Object.keys(t),
            i = new Array(e.length);
          var s, n, o;
          for (s = 0, n = e.length; s < n; ++s) o = e[s], i[s] = {
            x: o,
            y: t[o]
          };
          return i;
        }(e);else if (i !== e) {
          if (i) {
            rt(i, this);
            var _t22 = this._cachedMeta;
            Vs(_t22), _t22._parsed = [];
          }
          e && Object.isExtensible(e) && at(e, this), this._syncList = [], this._data = e;
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var t = this._cachedMeta;
        this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
      }
    }, {
      key: "buildOrUpdateElements",
      value: function buildOrUpdateElements(t) {
        var e = this._cachedMeta,
          i = this.getDataset();
        var s = !1;
        this._dataCheck();
        var n = e._stacked;
        e._stacked = Es(e.vScale, e), e.stack !== i.stack && (s = !0, Vs(e), e.stack = i.stack), this._resyncElements(t), (s || n !== e._stacked) && zs(this, e._parsed);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.chart.config,
          e = t.datasetScopeKeys(this._type),
          i = t.getOptionScopes(this.getDataset(), e, !0);
        this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this._cachedMeta,
          s = this._data,
          a = i.iScale,
          r = i._stacked,
          l = a.axis;
        var h,
          c,
          d,
          u = 0 === t && e === s.length || i._sorted,
          f = t > 0 && i._parsed[t - 1];
        if (!1 === this._parsing) i._parsed = s, i._sorted = !0, d = s;else {
          d = n(s[t]) ? this.parseArrayData(i, s, t, e) : o(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
          var _a11 = function _a11() {
            return null === c[l] || f && c[l] < f[l];
          };
          for (h = 0; h < e; ++h) i._parsed[h + t] = c = d[h], u && (_a11() && (u = !1), f = c);
          i._sorted = u;
        }
        r && zs(this, d);
      }
    }, {
      key: "parsePrimitiveData",
      value: function parsePrimitiveData(t, e, i, s) {
        var n = t.iScale,
          o = t.vScale,
          a = n.axis,
          r = o.axis,
          l = n.getLabels(),
          h = n === o,
          c = new Array(s);
        var d, u, f;
        for (d = 0, u = s; d < u; ++d) f = d + i, c[d] = _defineProperty(_defineProperty({}, a, h || n.parse(l[f], f)), r, o.parse(e[f], f));
        return c;
      }
    }, {
      key: "parseArrayData",
      value: function parseArrayData(t, e, i, s) {
        var n = t.xScale,
          o = t.yScale,
          a = new Array(s);
        var r, l, h, c;
        for (r = 0, l = s; r < l; ++r) h = r + i, c = e[h], a[r] = {
          x: n.parse(c[0], h),
          y: o.parse(c[1], h)
        };
        return a;
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        var n = t.xScale,
          o = t.yScale,
          _this$_parsing = this._parsing,
          _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
          a = _this$_parsing$xAxisK === void 0 ? "x" : _this$_parsing$xAxisK,
          _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
          r = _this$_parsing$yAxisK === void 0 ? "y" : _this$_parsing$yAxisK,
          l = new Array(s);
        var h, c, d, u;
        for (h = 0, c = s; h < c; ++h) d = h + i, u = e[d], l[h] = {
          x: n.parse(M(u, a), d),
          y: o.parse(M(u, r), d)
        };
        return l;
      }
    }, {
      key: "getParsed",
      value: function getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
    }, {
      key: "getDataElement",
      value: function getDataElement(t) {
        return this._cachedMeta.data[t];
      }
    }, {
      key: "applyStack",
      value: function applyStack(t, e, i) {
        var s = this.chart,
          n = this._cachedMeta,
          o = e[t.axis];
        return Ls({
          keys: Ts(s, !0),
          values: e._stacks[t.axis]._visualValues
        }, o, n.index, {
          mode: i
        });
      }
    }, {
      key: "updateRangeFromParsed",
      value: function updateRangeFromParsed(t, e, i, s) {
        var n = i[e.axis];
        var o = null === n ? NaN : n;
        var a = s && i._stacks[e.axis];
        s && a && (s.values = a, o = Ls(s, n, this._cachedMeta.index)), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t, e) {
        var i = this._cachedMeta,
          s = i._parsed,
          n = i._sorted && t === i.iScale,
          o = s.length,
          r = this._getOtherScale(t),
          l = function (t, e, i) {
            return t && !e.hidden && e._stacked && {
              keys: Ts(i, !0),
              values: null
            };
          }(e, i, this.chart),
          h = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
          },
          _ref5 = function (t) {
            var _t$getUserBounds = t.getUserBounds(),
              e = _t$getUserBounds.min,
              i = _t$getUserBounds.max,
              s = _t$getUserBounds.minDefined,
              n = _t$getUserBounds.maxDefined;
            return {
              min: s ? e : Number.NEGATIVE_INFINITY,
              max: n ? i : Number.POSITIVE_INFINITY
            };
          }(r),
          c = _ref5.min,
          d = _ref5.max;
        var u, f;
        function g() {
          f = s[u];
          var e = f[r.axis];
          return !a(f[t.axis]) || c > e || d < e;
        }
        for (u = 0; u < o && (g() || (this.updateRangeFromParsed(h, t, f, l), !n)); ++u);
        if (n) for (u = o - 1; u >= 0; --u) if (!g()) {
          this.updateRangeFromParsed(h, t, f, l);
          break;
        }
        return h;
      }
    }, {
      key: "getAllParsedValues",
      value: function getAllParsedValues(t) {
        var e = this._cachedMeta._parsed,
          i = [];
        var s, n, o;
        for (s = 0, n = e.length; s < n; ++s) o = e[s][t.axis], a(o) && i.push(o);
        return i;
      }
    }, {
      key: "getMaxOverflow",
      value: function getMaxOverflow() {
        return !1;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
          i = e.iScale,
          s = e.vScale,
          n = this.getParsed(t);
        return {
          label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
          value: s ? "" + s.getLabelForValue(n[s.axis]) : ""
        };
      }
    }, {
      key: "_update",
      value: function _update(t) {
        var e = this._cachedMeta;
        this.update(t || "default"), e._clip = function (t) {
          var e, i, s, n;
          return o(t) ? (e = t.top, i = t.right, s = t.bottom, n = t.left) : e = i = s = n = t, {
            top: e,
            right: i,
            bottom: s,
            left: n,
            disabled: !1 === t
          };
        }(l(this.options.clip, function (t, e, i) {
          if (!1 === i) return !1;
          var s = As(t, i),
            n = As(e, i);
          return {
            top: n.end,
            right: s.end,
            bottom: n.start,
            left: s.start
          };
        }(e.xScale, e.yScale, this.getMaxOverflow())));
      }
    }, {
      key: "update",
      value: function update(t) {}
    }, {
      key: "draw",
      value: function draw() {
        var t = this._ctx,
          e = this.chart,
          i = this._cachedMeta,
          s = i.data || [],
          n = e.chartArea,
          o = [],
          a = this._drawStart || 0,
          r = this._drawCount || s.length - a,
          l = this.options.drawActiveElementsOnTop;
        var h;
        for (i.dataset && i.dataset.draw(t, n, a, r), h = a; h < a + r; ++h) {
          var _e22 = s[h];
          _e22.hidden || (_e22.active && l ? o.push(_e22) : _e22.draw(t, n));
        }
        for (h = 0; h < o.length; ++h) o[h].draw(t, n);
      }
    }, {
      key: "getStyle",
      value: function getStyle(t, e) {
        var i = e ? "active" : "default";
        return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
      }
    }, {
      key: "getContext",
      value: function getContext(t, e, i) {
        var s = this.getDataset();
        var n;
        if (t >= 0 && t < this._cachedMeta.data.length) {
          var _e23 = this._cachedMeta.data[t];
          n = _e23.$context || (_e23.$context = function (t, e, i) {
            return Ci(t, {
              active: !1,
              dataIndex: e,
              parsed: void 0,
              raw: void 0,
              element: i,
              index: e,
              mode: "default",
              type: "data"
            });
          }(this.getContext(), t, _e23)), n.parsed = this.getParsed(t), n.raw = s.data[t], n.index = n.dataIndex = t;
        } else n = this.$context || (this.$context = function (t, e) {
          return Ci(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: e,
            index: e,
            mode: "default",
            type: "dataset"
          });
        }(this.chart.getContext(), this.index)), n.dataset = s, n.index = n.datasetIndex = this.index;
        return n.active = !!e, n.mode = i, n;
      }
    }, {
      key: "resolveDatasetElementOptions",
      value: function resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
    }, {
      key: "resolveDataElementOptions",
      value: function resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
    }, {
      key: "_resolveElementOptions",
      value: function _resolveElementOptions(t) {
        var _this4 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        var s = "active" === e,
          n = this._cachedDataOpts,
          o = t + "-" + e,
          a = n[o],
          r = this.enableOptionSharing && k(i);
        if (a) return Ws(a, r);
        var l = this.chart.config,
          h = l.datasetElementScopeKeys(this._type, t),
          c = s ? ["".concat(t, "Hover"), "hover", t, ""] : [t, ""],
          d = l.getOptionScopes(this.getDataset(), h),
          u = Object.keys(ue.elements[t]),
          f = l.resolveNamedOptions(d, u, function () {
            return _this4.getContext(i, s, e);
          }, c);
        return f.$shared && (f.$shared = r, n[o] = Object.freeze(Ws(f, r))), f;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations(t, e, i) {
        var s = this.chart,
          n = this._cachedDataOpts,
          o = "animation-".concat(e),
          a = n[o];
        if (a) return a;
        var r;
        if (!1 !== s.options.animation) {
          var _s18 = this.chart.config,
            _n14 = _s18.datasetAnimationScopeKeys(this._type, e),
            _o16 = _s18.getOptionScopes(this.getDataset(), _n14);
          r = _s18.createResolver(_o16, this.getContext(t, i, e));
        }
        var l = new Os(s, r && r.animations);
        return r && r._cacheable && (n[o] = Object.freeze(l)), l;
      }
    }, {
      key: "getSharedOptions",
      value: function getSharedOptions(t) {
        if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
      }
    }, {
      key: "includeOptions",
      value: function includeOptions(t, e) {
        return !e || Bs(t) || this.chart._animationsDisabled;
      }
    }, {
      key: "_getSharedOptions",
      value: function _getSharedOptions(t, e) {
        var i = this.resolveDataElementOptions(t, e),
          s = this._sharedOptions,
          n = this.getSharedOptions(i),
          o = this.includeOptions(e, n) || n !== s;
        return this.updateSharedOptions(n, e, i), {
          sharedOptions: n,
          includeOptions: o
        };
      }
    }, {
      key: "updateElement",
      value: function updateElement(t, e, i, s) {
        Bs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
      }
    }, {
      key: "updateSharedOptions",
      value: function updateSharedOptions(t, e, i) {
        t && !Bs(e) && this._resolveAnimations(void 0, e).update(t, i);
      }
    }, {
      key: "_setStyle",
      value: function _setStyle(t, e, i, s) {
        t.active = s;
        var n = this.getStyle(e, s);
        this._resolveAnimations(e, i, s).update(t, {
          options: !s && this.getSharedOptions(n) || n
        });
      }
    }, {
      key: "removeHoverStyle",
      value: function removeHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !1);
      }
    }, {
      key: "setHoverStyle",
      value: function setHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !0);
      }
    }, {
      key: "_removeDatasetHoverStyle",
      value: function _removeDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
      }
    }, {
      key: "_setDatasetHoverStyle",
      value: function _setDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
      }
    }, {
      key: "_resyncElements",
      value: function _resyncElements(t) {
        var e = this._data,
          i = this._cachedMeta.data;
        var _iterator19 = _createForOfIteratorHelper(this._syncList),
          _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var _step19$value = _slicedToArray(_step19.value, 3),
              _t23 = _step19$value[0],
              _e24 = _step19$value[1],
              _i22 = _step19$value[2];
            this[_t23](_e24, _i22);
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
        this._syncList = [];
        var s = i.length,
          n = e.length,
          o = Math.min(n, s);
        o && this.parse(0, o), n > s ? this._insertElements(s, n - s, t) : n < s && this._removeElements(n, s - n);
      }
    }, {
      key: "_insertElements",
      value: function _insertElements(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        var s = this._cachedMeta,
          n = s.data,
          o = t + e;
        var a;
        var r = function r(t) {
          for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
        };
        for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
        this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(n, t, e, "reset");
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {}
    }, {
      key: "_removeElements",
      value: function _removeElements(t, e) {
        var i = this._cachedMeta;
        if (this._parsing) {
          var _s19 = i._parsed.splice(t, e);
          i._stacked && Vs(i, _s19);
        }
        i.data.splice(t, e);
      }
    }, {
      key: "_sync",
      value: function _sync(t) {
        if (this._parsing) this._syncList.push(t);else {
          var _t24 = _slicedToArray(t, 3),
            _e25 = _t24[0],
            _i23 = _t24[1],
            _s20 = _t24[2];
          this[_e25](_i23, _s20);
        }
        this.chart._dataChanges.push([this.index].concat(_toConsumableArray(t)));
      }
    }, {
      key: "_onDataPush",
      value: function _onDataPush() {
        var t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t]);
      }
    }, {
      key: "_onDataPop",
      value: function _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
    }, {
      key: "_onDataShift",
      value: function _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
      }
    }, {
      key: "_onDataSplice",
      value: function _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        var i = arguments.length - 2;
        i && this._sync(["_insertElements", t, i]);
      }
    }, {
      key: "_onDataUnshift",
      value: function _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    }]);
  }();
  _defineProperty(Ns, "defaults", {});
  _defineProperty(Ns, "datasetElementType", null);
  _defineProperty(Ns, "dataElementType", null);
  var Hs = /*#__PURE__*/function () {
    function Hs() {
      _classCallCheck(this, Hs);
      _defineProperty(this, "x", void 0);
      _defineProperty(this, "y", void 0);
      _defineProperty(this, "active", !1);
      _defineProperty(this, "options", void 0);
      _defineProperty(this, "$animations", void 0);
    }
    return _createClass(Hs, [{
      key: "tooltipPosition",
      value: function tooltipPosition(t) {
        var _this$getProps = this.getProps(["x", "y"], t),
          e = _this$getProps.x,
          i = _this$getProps.y;
        return {
          x: e,
          y: i
        };
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        return N(this.x) && N(this.y);
      }
    }, {
      key: "getProps",
      value: function getProps(t, e) {
        var _this5 = this;
        var i = this.$animations;
        if (!e || !i) return this;
        var s = {};
        return t.forEach(function (t) {
          s[t] = i[t] && i[t].active() ? i[t]._to : _this5[t];
        }), s;
      }
    }]);
  }();
  _defineProperty(Hs, "defaults", {});
  _defineProperty(Hs, "defaultRoutes", void 0);
  function js(t, e) {
    var i = t.options.ticks,
      n = function (t) {
        var e = t.options.offset,
          i = t._tickSize(),
          s = t._length / i + (e ? 0 : 1),
          n = t._maxLength / i;
        return Math.floor(Math.min(s, n));
      }(t),
      o = Math.min(i.maxTicksLimit || n, n),
      a = i.major.enabled ? function (t) {
        var e = [];
        var i, s;
        for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
        return e;
      }(e) : [],
      r = a.length,
      l = a[0],
      h = a[r - 1],
      c = [];
    if (r > o) return function (t, e, i, s) {
      var n,
        o = 0,
        a = i[0];
      for (s = Math.ceil(s), n = 0; n < t.length; n++) n === a && (e.push(t[n]), o++, a = i[o * s]);
    }(e, c, a, r / o), c;
    var d = function (t, e, i) {
      var s = function (t) {
          var e = t.length;
          var i, s;
          if (e < 2) return !1;
          for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
          return s;
        }(t),
        n = e.length / i;
      if (!s) return Math.max(n, 1);
      var o = W(s);
      for (var _t25 = 0, _e26 = o.length - 1; _t25 < _e26; _t25++) {
        var _e27 = o[_t25];
        if (_e27 > n) return _e27;
      }
      return Math.max(n, 1);
    }(a, e, o);
    if (r > 0) {
      var _t26, _i24;
      var _n15 = r > 1 ? Math.round((h - l) / (r - 1)) : null;
      for ($s(e, c, d, s(_n15) ? 0 : l - _n15, l), _t26 = 0, _i24 = r - 1; _t26 < _i24; _t26++) $s(e, c, d, a[_t26], a[_t26 + 1]);
      return $s(e, c, d, h, s(_n15) ? e.length : h + _n15), c;
    }
    return $s(e, c, d), c;
  }
  function $s(t, e, i, s, n) {
    var o = l(s, 0),
      a = Math.min(l(n, t.length), t.length);
    var r,
      h,
      c,
      d = 0;
    for (i = Math.ceil(i), n && (r = n - s, i = r / Math.floor(r / i)), c = o; c < 0;) d++, c = Math.round(o + d * i);
    for (h = Math.max(o, 0); h < a; h++) h === c && (e.push(t[h]), d++, c = Math.round(o + d * i));
  }
  var Ys = function Ys(t, e, i) {
      return "top" === e || "left" === e ? t[e] + i : t[e] - i;
    },
    Us = function Us(t, e) {
      return Math.min(e || t, t);
    };
  function Xs(t, e) {
    var i = [],
      s = t.length / e,
      n = t.length;
    var o = 0;
    for (; o < n; o += s) i.push(t[Math.floor(o)]);
    return i;
  }
  function qs(t, e, i) {
    var s = t.ticks.length,
      n = Math.min(e, s - 1),
      o = t._startPixel,
      a = t._endPixel,
      r = 1e-6;
    var l,
      h = t.getPixelForTick(n);
    if (!(i && (l = 1 === s ? Math.max(h - o, a - h) : 0 === e ? (t.getPixelForTick(1) - h) / 2 : (h - t.getPixelForTick(n - 1)) / 2, h += n < e ? l : -l, h < o - r || h > a + r))) return h;
  }
  function Ks(t) {
    return t.drawTicks ? t.tickLength : 0;
  }
  function Gs(t, e) {
    if (!t.display) return 0;
    var i = Si(t.font, e),
      s = ki(t.padding);
    return (n(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
  }
  function Zs(t, e, i) {
    var s = ut(t);
    return (i && "right" !== e || !i && "right" === e) && (s = function (t) {
      return "left" === t ? "right" : "right" === t ? "left" : t;
    }(s)), s;
  }
  var Js = /*#__PURE__*/function (_Hs2) {
    function Js(t) {
      var _this6;
      _classCallCheck(this, Js);
      _this6 = _callSuper(this, Js), _this6.id = t.id, _this6.type = t.type, _this6.options = void 0, _this6.ctx = t.ctx, _this6.chart = t.chart, _this6.top = void 0, _this6.bottom = void 0, _this6.left = void 0, _this6.right = void 0, _this6.width = void 0, _this6.height = void 0, _this6._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, _this6.maxWidth = void 0, _this6.maxHeight = void 0, _this6.paddingTop = void 0, _this6.paddingBottom = void 0, _this6.paddingLeft = void 0, _this6.paddingRight = void 0, _this6.axis = void 0, _this6.labelRotation = void 0, _this6.min = void 0, _this6.max = void 0, _this6._range = void 0, _this6.ticks = [], _this6._gridLineItems = null, _this6._labelItems = null, _this6._labelSizes = null, _this6._length = 0, _this6._maxLength = 0, _this6._longestTextCache = {}, _this6._startPixel = void 0, _this6._endPixel = void 0, _this6._reversePixels = !1, _this6._userMax = void 0, _this6._userMin = void 0, _this6._suggestedMax = void 0, _this6._suggestedMin = void 0, _this6._ticksLength = 0, _this6._borderValue = 0, _this6._cache = {}, _this6._dataLimitsCached = !1, _this6.$context = void 0;
      return _this6;
    }
    _inherits(Js, _Hs2);
    return _createClass(Js, [{
      key: "init",
      value: function init(t) {
        this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return t;
      }
    }, {
      key: "getUserBounds",
      value: function getUserBounds() {
        var t = this._userMin,
          e = this._userMax,
          i = this._suggestedMin,
          s = this._suggestedMax;
        return t = r(t, Number.POSITIVE_INFINITY), e = r(e, Number.NEGATIVE_INFINITY), i = r(i, Number.POSITIVE_INFINITY), s = r(s, Number.NEGATIVE_INFINITY), {
          min: r(t, i),
          max: r(e, s),
          minDefined: a(t),
          maxDefined: a(e)
        };
      }
    }, {
      key: "getMinMax",
      value: function getMinMax(t) {
        var e,
          _this$getUserBounds = this.getUserBounds(),
          i = _this$getUserBounds.min,
          s = _this$getUserBounds.max,
          n = _this$getUserBounds.minDefined,
          o = _this$getUserBounds.maxDefined;
        if (n && o) return {
          min: i,
          max: s
        };
        var a = this.getMatchingVisibleMetas();
        for (var _r8 = 0, _l9 = a.length; _r8 < _l9; ++_r8) e = a[_r8].controller.getMinMax(this, t), n || (i = Math.min(i, e.min)), o || (s = Math.max(s, e.max));
        return i = o && i > s ? s : i, s = n && i > s ? i : s, {
          min: r(i, r(s, i)),
          max: r(s, r(i, s))
        };
      }
    }, {
      key: "getPadding",
      value: function getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0
        };
      }
    }, {
      key: "getTicks",
      value: function getTicks() {
        return this.ticks;
      }
    }, {
      key: "getLabels",
      value: function getLabels() {
        var t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
      }
    }, {
      key: "getLabelItems",
      value: function getLabelItems() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.chart.chartArea;
        return this._labelItems || (this._labelItems = this._computeLabelItems(t));
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        this._cache = {}, this._dataLimitsCached = !1;
      }
    }, {
      key: "beforeUpdate",
      value: function beforeUpdate() {
        d(this.options.beforeUpdate, [this]);
      }
    }, {
      key: "update",
      value: function update(t, e, i) {
        var _this$options = this.options,
          s = _this$options.beginAtZero,
          n = _this$options.grace,
          o = _this$options.ticks,
          a = o.sampleSize;
        this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Di(this, n, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
        var r = a < this.ticks.length;
        this._convertTicksToLabels(r ? Xs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (this.ticks = js(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), r && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
      }
    }, {
      key: "configure",
      value: function configure() {
        var t,
          e,
          i = this.options.reverse;
        this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels;
      }
    }, {
      key: "afterUpdate",
      value: function afterUpdate() {
        d(this.options.afterUpdate, [this]);
      }
    }, {
      key: "beforeSetDimensions",
      value: function beforeSetDimensions() {
        d(this.options.beforeSetDimensions, [this]);
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
      }
    }, {
      key: "afterSetDimensions",
      value: function afterSetDimensions() {
        d(this.options.afterSetDimensions, [this]);
      }
    }, {
      key: "_callHooks",
      value: function _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this]);
      }
    }, {
      key: "beforeDataLimits",
      value: function beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {}
    }, {
      key: "afterDataLimits",
      value: function afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
    }, {
      key: "beforeBuildTicks",
      value: function beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        return [];
      }
    }, {
      key: "afterBuildTicks",
      value: function afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
    }, {
      key: "beforeTickToLabelConversion",
      value: function beforeTickToLabelConversion() {
        d(this.options.beforeTickToLabelConversion, [this]);
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e = this.options.ticks;
        var i, s, n;
        for (i = 0, s = t.length; i < s; i++) n = t[i], n.label = d(e.callback, [n.value, i, t], this);
      }
    }, {
      key: "afterTickToLabelConversion",
      value: function afterTickToLabelConversion() {
        d(this.options.afterTickToLabelConversion, [this]);
      }
    }, {
      key: "beforeCalculateLabelRotation",
      value: function beforeCalculateLabelRotation() {
        d(this.options.beforeCalculateLabelRotation, [this]);
      }
    }, {
      key: "calculateLabelRotation",
      value: function calculateLabelRotation() {
        var t = this.options,
          e = t.ticks,
          i = Us(this.ticks.length, t.ticks.maxTicksLimit),
          s = e.minRotation || 0,
          n = e.maxRotation;
        var o,
          a,
          r,
          l = s;
        if (!this._isVisible() || !e.display || s >= n || i <= 1 || !this.isHorizontal()) return void (this.labelRotation = s);
        var h = this._getLabelSizes(),
          c = h.widest.width,
          d = h.highest.height,
          u = J(this.chart.width - c, 0, this.maxWidth);
        o = t.offset ? this.maxWidth / i : u / (i - 1), c + 6 > o && (o = u / (i - (t.offset ? .5 : 1)), a = this.maxHeight - Ks(t.grid) - e.padding - Gs(t.title, this.chart.options.font), r = Math.sqrt(c * c + d * d), l = Y(Math.min(Math.asin(J((h.highest.height + 6) / o, -1, 1)), Math.asin(J(a / r, -1, 1)) - Math.asin(J(d / r, -1, 1)))), l = Math.max(s, Math.min(n, l))), this.labelRotation = l;
      }
    }, {
      key: "afterCalculateLabelRotation",
      value: function afterCalculateLabelRotation() {
        d(this.options.afterCalculateLabelRotation, [this]);
      }
    }, {
      key: "afterAutoSkip",
      value: function afterAutoSkip() {}
    }, {
      key: "beforeFit",
      value: function beforeFit() {
        d(this.options.beforeFit, [this]);
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = {
            width: 0,
            height: 0
          },
          e = this.chart,
          _this$options2 = this.options,
          i = _this$options2.ticks,
          s = _this$options2.title,
          n = _this$options2.grid,
          o = this._isVisible(),
          a = this.isHorizontal();
        if (o) {
          var _o17 = Gs(s, e.options.font);
          if (a ? (t.width = this.maxWidth, t.height = Ks(n) + _o17) : (t.height = this.maxHeight, t.width = Ks(n) + _o17), i.display && this.ticks.length) {
            var _this$_getLabelSizes = this._getLabelSizes(),
              _e28 = _this$_getLabelSizes.first,
              _s21 = _this$_getLabelSizes.last,
              _n16 = _this$_getLabelSizes.widest,
              _o18 = _this$_getLabelSizes.highest,
              _r9 = 2 * i.padding,
              _l10 = $(this.labelRotation),
              _h8 = Math.cos(_l10),
              _c6 = Math.sin(_l10);
            if (a) {
              var _e29 = i.mirror ? 0 : _c6 * _n16.width + _h8 * _o18.height;
              t.height = Math.min(this.maxHeight, t.height + _e29 + _r9);
            } else {
              var _e30 = i.mirror ? 0 : _h8 * _n16.width + _c6 * _o18.height;
              t.width = Math.min(this.maxWidth, t.width + _e30 + _r9);
            }
            this._calculatePadding(_e28, _s21, _c6, _h8);
          }
        }
        this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
      }
    }, {
      key: "_calculatePadding",
      value: function _calculatePadding(t, e, i, s) {
        var _this$options3 = this.options,
          _this$options3$ticks = _this$options3.ticks,
          n = _this$options3$ticks.align,
          o = _this$options3$ticks.padding,
          a = _this$options3.position,
          r = 0 !== this.labelRotation,
          l = "top" !== a && "x" === this.axis;
        if (this.isHorizontal()) {
          var _a12 = this.getPixelForTick(0) - this.left,
            _h9 = this.right - this.getPixelForTick(this.ticks.length - 1);
          var _c7 = 0,
            _d5 = 0;
          r ? l ? (_c7 = s * t.width, _d5 = i * e.height) : (_c7 = i * t.height, _d5 = s * e.width) : "start" === n ? _d5 = e.width : "end" === n ? _c7 = t.width : "inner" !== n && (_c7 = t.width / 2, _d5 = e.width / 2), this.paddingLeft = Math.max((_c7 - _a12 + o) * this.width / (this.width - _a12), 0), this.paddingRight = Math.max((_d5 - _h9 + o) * this.width / (this.width - _h9), 0);
        } else {
          var _i25 = e.height / 2,
            _s22 = t.height / 2;
          "start" === n ? (_i25 = 0, _s22 = t.height) : "end" === n && (_i25 = e.height, _s22 = 0), this.paddingTop = _i25 + o, this.paddingBottom = _s22 + o;
        }
      }
    }, {
      key: "_handleMargins",
      value: function _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
      }
    }, {
      key: "afterFit",
      value: function afterFit() {
        d(this.options.afterFit, [this]);
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var _this$options4 = this.options,
          t = _this$options4.axis,
          e = _this$options4.position;
        return "top" === e || "bottom" === e || "x" === t;
      }
    }, {
      key: "isFullSize",
      value: function isFullSize() {
        return this.options.fullSize;
      }
    }, {
      key: "_convertTicksToLabels",
      value: function _convertTicksToLabels(t) {
        var e, i;
        for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) s(t[e].label) && (t.splice(e, 1), i--, e--);
        this.afterTickToLabelConversion();
      }
    }, {
      key: "_getLabelSizes",
      value: function _getLabelSizes() {
        var t = this._labelSizes;
        if (!t) {
          var _e31 = this.options.ticks.sampleSize;
          var _i26 = this.ticks;
          _e31 < _i26.length && (_i26 = Xs(_i26, _e31)), this._labelSizes = t = this._computeLabelSizes(_i26, _i26.length, this.options.ticks.maxTicksLimit);
        }
        return t;
      }
    }, {
      key: "_computeLabelSizes",
      value: function _computeLabelSizes(t, e, i) {
        var o = this.ctx,
          a = this._longestTextCache,
          r = [],
          l = [],
          h = Math.floor(e / Us(e, i));
        var c,
          d,
          f,
          g,
          p,
          m,
          b,
          x,
          _,
          y,
          v,
          M = 0,
          w = 0;
        for (c = 0; c < e; c += h) {
          if (g = t[c].label, p = this._resolveTickFontOptions(c), o.font = m = p.string, b = a[m] = a[m] || {
            data: {},
            gc: []
          }, x = p.lineHeight, _ = y = 0, s(g) || n(g)) {
            if (n(g)) for (d = 0, f = g.length; d < f; ++d) v = g[d], s(v) || n(v) || (_ = Ce(o, b.data, b.gc, _, v), y += x);
          } else _ = Ce(o, b.data, b.gc, _, g), y = x;
          r.push(_), l.push(y), M = Math.max(_, M), w = Math.max(y, w);
        }
        !function (t, e) {
          u(t, function (t) {
            var i = t.gc,
              s = i.length / 2;
            var n;
            if (s > e) {
              for (n = 0; n < s; ++n) delete t.data[i[n]];
              i.splice(0, s);
            }
          });
        }(a, e);
        var k = r.indexOf(M),
          S = l.indexOf(w),
          P = function P(t) {
            return {
              width: r[t] || 0,
              height: l[t] || 0
            };
          };
        return {
          first: P(0),
          last: P(e - 1),
          widest: P(k),
          highest: P(S),
          widths: r,
          heights: l
        };
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return t;
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t, e) {
        return NaN;
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {}
    }, {
      key: "getPixelForTick",
      value: function getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
      }
    }, {
      key: "getPixelForDecimal",
      value: function getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        var e = this._startPixel + t * this._length;
        return Q(this._alignToPixels ? Ae(this.chart, e, 0) : e);
      }
    }, {
      key: "getDecimalForPixel",
      value: function getDecimalForPixel(t) {
        var e = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - e : e;
      }
    }, {
      key: "getBasePixel",
      value: function getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
    }, {
      key: "getBaseValue",
      value: function getBaseValue() {
        var t = this.min,
          e = this.max;
        return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
      }
    }, {
      key: "getContext",
      value: function getContext(t) {
        var e = this.ticks || [];
        if (t >= 0 && t < e.length) {
          var _i27 = e[t];
          return _i27.$context || (_i27.$context = function (t, e, i) {
            return Ci(t, {
              tick: i,
              index: e,
              type: "tick"
            });
          }(this.getContext(), t, _i27));
        }
        return this.$context || (this.$context = Ci(this.chart.getContext(), {
          scale: this,
          type: "scale"
        }));
      }
    }, {
      key: "_tickSize",
      value: function _tickSize() {
        var t = this.options.ticks,
          e = $(this.labelRotation),
          i = Math.abs(Math.cos(e)),
          s = Math.abs(Math.sin(e)),
          n = this._getLabelSizes(),
          o = t.autoSkipPadding || 0,
          a = n ? n.widest.width + o : 0,
          r = n ? n.highest.height + o : 0;
        return this.isHorizontal() ? r * i > a * s ? a / i : r / s : r * s < a * i ? r / i : a / s;
      }
    }, {
      key: "_isVisible",
      value: function _isVisible() {
        var t = this.options.display;
        return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
      }
    }, {
      key: "_computeGridLineItems",
      value: function _computeGridLineItems(t) {
        var e = this.axis,
          i = this.chart,
          s = this.options,
          n = s.grid,
          a = s.position,
          r = s.border,
          h = n.offset,
          c = this.isHorizontal(),
          d = this.ticks.length + (h ? 1 : 0),
          u = Ks(n),
          f = [],
          g = r.setContext(this.getContext()),
          p = g.display ? g.width : 0,
          m = p / 2,
          b = function b(t) {
            return Ae(i, t, p);
          };
        var x, _, y, v, M, w, k, S, P, D, C, O;
        if ("top" === a) x = b(this.bottom), w = this.bottom - u, S = x - m, D = b(t.top) + m, O = t.bottom;else if ("bottom" === a) x = b(this.top), D = t.top, O = b(t.bottom) - m, w = x + m, S = this.top + u;else if ("left" === a) x = b(this.right), M = this.right - u, k = x - m, P = b(t.left) + m, C = t.right;else if ("right" === a) x = b(this.left), P = t.left, C = b(t.right) - m, M = x + m, k = this.left + u;else if ("x" === e) {
          if ("center" === a) x = b((t.top + t.bottom) / 2 + .5);else if (o(a)) {
            var _t27 = Object.keys(a)[0],
              _e32 = a[_t27];
            x = b(this.chart.scales[_t27].getPixelForValue(_e32));
          }
          D = t.top, O = t.bottom, w = x + m, S = w + u;
        } else if ("y" === e) {
          if ("center" === a) x = b((t.left + t.right) / 2);else if (o(a)) {
            var _t28 = Object.keys(a)[0],
              _e33 = a[_t28];
            x = b(this.chart.scales[_t28].getPixelForValue(_e33));
          }
          M = x - m, k = M - u, P = t.left, C = t.right;
        }
        var A = l(s.ticks.maxTicksLimit, d),
          T = Math.max(1, Math.ceil(d / A));
        for (_ = 0; _ < d; _ += T) {
          var _t29 = this.getContext(_),
            _e34 = n.setContext(_t29),
            _s23 = r.setContext(_t29),
            _o19 = _e34.lineWidth,
            _a13 = _e34.color,
            _l11 = _s23.dash || [],
            _d6 = _s23.dashOffset,
            _u2 = _e34.tickWidth,
            _g = _e34.tickColor,
            _p = _e34.tickBorderDash || [],
            _m = _e34.tickBorderDashOffset;
          y = qs(this, _, h), void 0 !== y && (v = Ae(i, y, _o19), c ? M = k = P = C = v : w = S = D = O = v, f.push({
            tx1: M,
            ty1: w,
            tx2: k,
            ty2: S,
            x1: P,
            y1: D,
            x2: C,
            y2: O,
            width: _o19,
            color: _a13,
            borderDash: _l11,
            borderDashOffset: _d6,
            tickWidth: _u2,
            tickColor: _g,
            tickBorderDash: _p,
            tickBorderDashOffset: _m
          }));
        }
        return this._ticksLength = d, this._borderValue = x, f;
      }
    }, {
      key: "_computeLabelItems",
      value: function _computeLabelItems(t) {
        var e = this.axis,
          i = this.options,
          s = i.position,
          a = i.ticks,
          r = this.isHorizontal(),
          l = this.ticks,
          h = a.align,
          c = a.crossAlign,
          d = a.padding,
          u = a.mirror,
          f = Ks(i.grid),
          g = f + d,
          p = u ? -d : g,
          m = -$(this.labelRotation),
          b = [];
        var x,
          _,
          y,
          v,
          M,
          w,
          k,
          S,
          P,
          D,
          C,
          O,
          A = "middle";
        if ("top" === s) w = this.bottom - p, k = this._getXAxisLabelAlignment();else if ("bottom" === s) w = this.top + p, k = this._getXAxisLabelAlignment();else if ("left" === s) {
          var _t30 = this._getYAxisLabelAlignment(f);
          k = _t30.textAlign, M = _t30.x;
        } else if ("right" === s) {
          var _t31 = this._getYAxisLabelAlignment(f);
          k = _t31.textAlign, M = _t31.x;
        } else if ("x" === e) {
          if ("center" === s) w = (t.top + t.bottom) / 2 + g;else if (o(s)) {
            var _t32 = Object.keys(s)[0],
              _e35 = s[_t32];
            w = this.chart.scales[_t32].getPixelForValue(_e35) + g;
          }
          k = this._getXAxisLabelAlignment();
        } else if ("y" === e) {
          if ("center" === s) M = (t.left + t.right) / 2 - g;else if (o(s)) {
            var _t33 = Object.keys(s)[0],
              _e36 = s[_t33];
            M = this.chart.scales[_t33].getPixelForValue(_e36);
          }
          k = this._getYAxisLabelAlignment(f).textAlign;
        }
        "y" === e && ("start" === h ? A = "top" : "end" === h && (A = "bottom"));
        var T = this._getLabelSizes();
        for (x = 0, _ = l.length; x < _; ++x) {
          y = l[x], v = y.label;
          var _t34 = a.setContext(this.getContext(x));
          S = this.getPixelForTick(x) + a.labelOffset, P = this._resolveTickFontOptions(x), D = P.lineHeight, C = n(v) ? v.length : 1;
          var _e37 = C / 2,
            _i28 = _t34.color,
            _o20 = _t34.textStrokeColor,
            _h10 = _t34.textStrokeWidth;
          var _d7 = void 0,
            _f = k;
          if (r ? (M = S, "inner" === k && (_f = x === _ - 1 ? this.options.reverse ? "left" : "right" : 0 === x ? this.options.reverse ? "right" : "left" : "center"), O = "top" === s ? "near" === c || 0 !== m ? -C * D + D / 2 : "center" === c ? -T.highest.height / 2 - _e37 * D + D : -T.highest.height + D / 2 : "near" === c || 0 !== m ? D / 2 : "center" === c ? T.highest.height / 2 - _e37 * D : T.highest.height - C * D, u && (O *= -1), 0 === m || _t34.showLabelBackdrop || (M += D / 2 * Math.sin(m))) : (w = S, O = (1 - C) * D / 2), _t34.showLabelBackdrop) {
            var _e38 = ki(_t34.backdropPadding),
              _i29 = T.heights[x],
              _s24 = T.widths[x];
            var _n17 = O - _e38.top,
              _o21 = 0 - _e38.left;
            switch (A) {
              case "middle":
                _n17 -= _i29 / 2;
                break;
              case "bottom":
                _n17 -= _i29;
            }
            switch (k) {
              case "center":
                _o21 -= _s24 / 2;
                break;
              case "right":
                _o21 -= _s24;
                break;
              case "inner":
                x === _ - 1 ? _o21 -= _s24 : x > 0 && (_o21 -= _s24 / 2);
            }
            _d7 = {
              left: _o21,
              top: _n17,
              width: _s24 + _e38.width,
              height: _i29 + _e38.height,
              color: _t34.backdropColor
            };
          }
          b.push({
            label: v,
            font: P,
            textOffset: O,
            options: {
              rotation: m,
              color: _i28,
              strokeColor: _o20,
              strokeWidth: _h10,
              textAlign: _f,
              textBaseline: A,
              translation: [M, w],
              backdrop: _d7
            }
          });
        }
        return b;
      }
    }, {
      key: "_getXAxisLabelAlignment",
      value: function _getXAxisLabelAlignment() {
        var _this$options5 = this.options,
          t = _this$options5.position,
          e = _this$options5.ticks;
        if (-$(this.labelRotation)) return "top" === t ? "left" : "right";
        var i = "center";
        return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i;
      }
    }, {
      key: "_getYAxisLabelAlignment",
      value: function _getYAxisLabelAlignment(t) {
        var _this$options6 = this.options,
          e = _this$options6.position,
          _this$options6$ticks = _this$options6.ticks,
          i = _this$options6$ticks.crossAlign,
          s = _this$options6$ticks.mirror,
          n = _this$options6$ticks.padding,
          o = t + n,
          a = this._getLabelSizes().widest.width;
        var r, l;
        return "left" === e ? s ? (l = this.right + n, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l += a)) : (l = this.right - o, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l = this.left)) : "right" === e ? s ? (l = this.left + n, "near" === i ? r = "right" : "center" === i ? (r = "center", l -= a / 2) : (r = "left", l -= a)) : (l = this.left + o, "near" === i ? r = "left" : "center" === i ? (r = "center", l += a / 2) : (r = "right", l = this.right)) : r = "right", {
          textAlign: r,
          x: l
        };
      }
    }, {
      key: "_computeLabelArea",
      value: function _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        var t = this.chart,
          e = this.options.position;
        return "left" === e || "right" === e ? {
          top: 0,
          left: this.left,
          bottom: t.height,
          right: this.right
        } : "top" === e || "bottom" === e ? {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: t.width
        } : void 0;
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var t = this.ctx,
          e = this.options.backgroundColor,
          i = this.left,
          s = this.top,
          n = this.width,
          o = this.height;
        e && (t.save(), t.fillStyle = e, t.fillRect(i, s, n, o), t.restore());
      }
    }, {
      key: "getLineWidthForValue",
      value: function getLineWidthForValue(t) {
        var e = this.options.grid;
        if (!this._isVisible() || !e.display) return 0;
        var i = this.ticks.findIndex(function (e) {
          return e.value === t;
        });
        if (i >= 0) {
          return e.setContext(this.getContext(i)).lineWidth;
        }
        return 0;
      }
    }, {
      key: "drawGrid",
      value: function drawGrid(t) {
        var e = this.options.grid,
          i = this.ctx,
          s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        var n, o;
        var a = function a(t, e, s) {
          s.width && s.color && (i.save(), i.lineWidth = s.width, i.strokeStyle = s.color, i.setLineDash(s.borderDash || []), i.lineDashOffset = s.borderDashOffset, i.beginPath(), i.moveTo(t.x, t.y), i.lineTo(e.x, e.y), i.stroke(), i.restore());
        };
        if (e.display) for (n = 0, o = s.length; n < o; ++n) {
          var _t35 = s[n];
          e.drawOnChartArea && a({
            x: _t35.x1,
            y: _t35.y1
          }, {
            x: _t35.x2,
            y: _t35.y2
          }, _t35), e.drawTicks && a({
            x: _t35.tx1,
            y: _t35.ty1
          }, {
            x: _t35.tx2,
            y: _t35.ty2
          }, {
            color: _t35.tickColor,
            width: _t35.tickWidth,
            borderDash: _t35.tickBorderDash,
            borderDashOffset: _t35.tickBorderDashOffset
          });
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {
        var t = this.chart,
          e = this.ctx,
          _this$options7 = this.options,
          i = _this$options7.border,
          s = _this$options7.grid,
          n = i.setContext(this.getContext()),
          o = i.display ? n.width : 0;
        if (!o) return;
        var a = s.setContext(this.getContext(0)).lineWidth,
          r = this._borderValue;
        var l, h, c, d;
        this.isHorizontal() ? (l = Ae(t, this.left, o) - o / 2, h = Ae(t, this.right, a) + a / 2, c = d = r) : (c = Ae(t, this.top, o) - o / 2, d = Ae(t, this.bottom, a) + a / 2, l = h = r), e.save(), e.lineWidth = n.width, e.strokeStyle = n.color, e.beginPath(), e.moveTo(l, c), e.lineTo(h, d), e.stroke(), e.restore();
      }
    }, {
      key: "drawLabels",
      value: function drawLabels(t) {
        if (!this.options.ticks.display) return;
        var e = this.ctx,
          i = this._computeLabelArea();
        i && Ie(e, i);
        var s = this.getLabelItems(t);
        var _iterator20 = _createForOfIteratorHelper(s),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _t36 = _step20.value;
            var _i30 = _t36.options,
              _s25 = _t36.font;
            Ne(e, _t36.label, 0, _t36.textOffset, _s25, _i30);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
        i && ze(e);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this.ctx,
          _this$options8 = this.options,
          e = _this$options8.position,
          i = _this$options8.title,
          s = _this$options8.reverse;
        if (!i.display) return;
        var a = Si(i.font),
          r = ki(i.padding),
          l = i.align;
        var h = a.lineHeight / 2;
        "bottom" === e || "center" === e || o(e) ? (h += r.bottom, n(i.text) && (h += a.lineHeight * (i.text.length - 1))) : h += r.top;
        var _ref6 = function (t, e, i, s) {
            var n = t.top,
              a = t.left,
              r = t.bottom,
              l = t.right,
              h = t.chart,
              c = h.chartArea,
              d = h.scales;
            var u,
              f,
              g,
              p = 0;
            var m = r - n,
              b = l - a;
            if (t.isHorizontal()) {
              if (f = ft(s, a, l), o(i)) {
                var _t37 = Object.keys(i)[0],
                  _s26 = i[_t37];
                g = d[_t37].getPixelForValue(_s26) + m - e;
              } else g = "center" === i ? (c.bottom + c.top) / 2 + m - e : Ys(t, i, e);
              u = l - a;
            } else {
              if (o(i)) {
                var _t38 = Object.keys(i)[0],
                  _s27 = i[_t38];
                f = d[_t38].getPixelForValue(_s27) - b + e;
              } else f = "center" === i ? (c.left + c.right) / 2 - b + e : Ys(t, i, e);
              g = ft(s, r, n), p = "left" === i ? -E : E;
            }
            return {
              titleX: f,
              titleY: g,
              maxWidth: u,
              rotation: p
            };
          }(this, h, e, l),
          c = _ref6.titleX,
          d = _ref6.titleY,
          u = _ref6.maxWidth,
          f = _ref6.rotation;
        Ne(t, i.text, 0, 0, a, {
          color: i.color,
          maxWidth: u,
          rotation: f,
          textAlign: Zs(l, e, s),
          textBaseline: "middle",
          translation: [c, d]
        });
      }
    }, {
      key: "draw",
      value: function draw(t) {
        this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
      }
    }, {
      key: "_layers",
      value: function _layers() {
        var _this7 = this;
        var t = this.options,
          e = t.ticks && t.ticks.z || 0,
          i = l(t.grid && t.grid.z, -1),
          s = l(t.border && t.border.z, 0);
        return this._isVisible() && this.draw === Js.prototype.draw ? [{
          z: i,
          draw: function draw(t) {
            _this7.drawBackground(), _this7.drawGrid(t), _this7.drawTitle();
          }
        }, {
          z: s,
          draw: function draw() {
            _this7.drawBorder();
          }
        }, {
          z: e,
          draw: function draw(t) {
            _this7.drawLabels(t);
          }
        }] : [{
          z: e,
          draw: function draw(t) {
            _this7.draw(t);
          }
        }];
      }
    }, {
      key: "getMatchingVisibleMetas",
      value: function getMatchingVisibleMetas(t) {
        var e = this.chart.getSortedVisibleDatasetMetas(),
          i = this.axis + "AxisID",
          s = [];
        var n, o;
        for (n = 0, o = e.length; n < o; ++n) {
          var _o22 = e[n];
          _o22[i] !== this.id || t && _o22.type !== t || s.push(_o22);
        }
        return s;
      }
    }, {
      key: "_resolveTickFontOptions",
      value: function _resolveTickFontOptions(t) {
        return Si(this.options.ticks.setContext(this.getContext(t)).font);
      }
    }, {
      key: "_maxDigits",
      value: function _maxDigits() {
        var t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    }]);
  }(Hs);
  var Qs = /*#__PURE__*/function () {
    function Qs(t, e, i) {
      _classCallCheck(this, Qs);
      this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
    }
    return _createClass(Qs, [{
      key: "isForType",
      value: function isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
      }
    }, {
      key: "register",
      value: function register(t) {
        var e = Object.getPrototypeOf(t);
        var i;
        (function (t) {
          return "id" in t && "defaults" in t;
        })(e) && (i = this.register(e));
        var s = this.items,
          n = t.id,
          o = this.scope + "." + n;
        if (!n) throw new Error("class does not have id: " + t);
        return n in s || (s[n] = t, function (t, e, i) {
          var s = b(Object.create(null), [i ? ue.get(i) : {}, ue.get(e), t.defaults]);
          ue.set(e, s), t.defaultRoutes && function (t, e) {
            Object.keys(e).forEach(function (i) {
              var s = i.split("."),
                n = s.pop(),
                o = [t].concat(s).join("."),
                a = e[i].split("."),
                r = a.pop(),
                l = a.join(".");
              ue.route(o, n, l, r);
            });
          }(e, t.defaultRoutes);
          t.descriptors && ue.describe(e, t.descriptors);
        }(t, o, i), this.override && ue.override(t.id, t.overrides)), o;
      }
    }, {
      key: "get",
      value: function get(t) {
        return this.items[t];
      }
    }, {
      key: "unregister",
      value: function unregister(t) {
        var e = this.items,
          i = t.id,
          s = this.scope;
        i in e && delete e[i], s && i in ue[s] && (delete ue[s][i], this.override && delete re[i]);
      }
    }]);
  }();
  var tn = /*#__PURE__*/function () {
    function tn() {
      _classCallCheck(this, tn);
      this.controllers = new Qs(Ns, "datasets", !0), this.elements = new Qs(Hs, "elements"), this.plugins = new Qs(Object, "plugins"), this.scales = new Qs(Js, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
    }
    return _createClass(tn, [{
      key: "add",
      value: function add() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }
        this._each("register", t);
      }
    }, {
      key: "remove",
      value: function remove() {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }
        this._each("unregister", t);
      }
    }, {
      key: "addControllers",
      value: function addControllers() {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }
        this._each("register", t, this.controllers);
      }
    }, {
      key: "addElements",
      value: function addElements() {
        for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          t[_key7] = arguments[_key7];
        }
        this._each("register", t, this.elements);
      }
    }, {
      key: "addPlugins",
      value: function addPlugins() {
        for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          t[_key8] = arguments[_key8];
        }
        this._each("register", t, this.plugins);
      }
    }, {
      key: "addScales",
      value: function addScales() {
        for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          t[_key9] = arguments[_key9];
        }
        this._each("register", t, this.scales);
      }
    }, {
      key: "getController",
      value: function getController(t) {
        return this._get(t, this.controllers, "controller");
      }
    }, {
      key: "getElement",
      value: function getElement(t) {
        return this._get(t, this.elements, "element");
      }
    }, {
      key: "getPlugin",
      value: function getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
    }, {
      key: "getScale",
      value: function getScale(t) {
        return this._get(t, this.scales, "scale");
      }
    }, {
      key: "removeControllers",
      value: function removeControllers() {
        for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
          t[_key10] = arguments[_key10];
        }
        this._each("unregister", t, this.controllers);
      }
    }, {
      key: "removeElements",
      value: function removeElements() {
        for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
          t[_key11] = arguments[_key11];
        }
        this._each("unregister", t, this.elements);
      }
    }, {
      key: "removePlugins",
      value: function removePlugins() {
        for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
          t[_key12] = arguments[_key12];
        }
        this._each("unregister", t, this.plugins);
      }
    }, {
      key: "removeScales",
      value: function removeScales() {
        for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          t[_key13] = arguments[_key13];
        }
        this._each("unregister", t, this.scales);
      }
    }, {
      key: "_each",
      value: function _each(t, e, i) {
        var _this8 = this;
        _toConsumableArray(e).forEach(function (e) {
          var s = i || _this8._getRegistryForType(e);
          i || s.isForType(e) || s === _this8.plugins && e.id ? _this8._exec(t, s, e) : u(e, function (e) {
            var s = i || _this8._getRegistryForType(e);
            _this8._exec(t, s, e);
          });
        });
      }
    }, {
      key: "_exec",
      value: function _exec(t, e, i) {
        var s = w(t);
        d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
      }
    }, {
      key: "_getRegistryForType",
      value: function _getRegistryForType(t) {
        for (var _e39 = 0; _e39 < this._typedRegistries.length; _e39++) {
          var _i31 = this._typedRegistries[_e39];
          if (_i31.isForType(t)) return _i31;
        }
        return this.plugins;
      }
    }, {
      key: "_get",
      value: function _get(t, e, i) {
        var s = e.get(t);
        if (void 0 === s) throw new Error('"' + t + '" is not a registered ' + i + ".");
        return s;
      }
    }]);
  }();
  var en = new tn();
  var sn = /*#__PURE__*/function () {
    function sn() {
      _classCallCheck(this, sn);
      this._init = [];
    }
    return _createClass(sn, [{
      key: "notify",
      value: function notify(t, e, i, s) {
        "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
        var n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
          o = this._notify(n, t, e, i);
        return "afterDestroy" === e && (this._notify(n, t, "stop"), this._notify(this._init, t, "uninstall")), o;
      }
    }, {
      key: "_notify",
      value: function _notify(t, e, i, s) {
        s = s || {};
        var _iterator21 = _createForOfIteratorHelper(t),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _n18 = _step21.value;
            var _t39 = _n18.plugin;
            if (!1 === d(_t39[i], [e, s, _n18.options], _t39) && s.cancelable) return !1;
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        return !0;
      }
    }, {
      key: "invalidate",
      value: function invalidate() {
        s(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
      }
    }, {
      key: "_descriptors",
      value: function _descriptors(t) {
        if (this._cache) return this._cache;
        var e = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t), e;
      }
    }, {
      key: "_createDescriptors",
      value: function _createDescriptors(t, e) {
        var i = t && t.config,
          s = l(i.options && i.options.plugins, {}),
          n = function (t) {
            var e = {},
              i = [],
              s = Object.keys(en.plugins.items);
            for (var _t40 = 0; _t40 < s.length; _t40++) i.push(en.getPlugin(s[_t40]));
            var n = t.plugins || [];
            for (var _t41 = 0; _t41 < n.length; _t41++) {
              var _s28 = n[_t41];
              -1 === i.indexOf(_s28) && (i.push(_s28), e[_s28.id] = !0);
            }
            return {
              plugins: i,
              localIds: e
            };
          }(i);
        return !1 !== s || e ? function (t, _ref7, s, n) {
          var e = _ref7.plugins,
            i = _ref7.localIds;
          var o = [],
            a = t.getContext();
          var _iterator22 = _createForOfIteratorHelper(e),
            _step22;
          try {
            for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
              var _r10 = _step22.value;
              var _e40 = _r10.id,
                _l12 = nn(s[_e40], n);
              null !== _l12 && o.push({
                plugin: _r10,
                options: on(t.config, {
                  plugin: _r10,
                  local: i[_e40]
                }, _l12, a)
              });
            }
          } catch (err) {
            _iterator22.e(err);
          } finally {
            _iterator22.f();
          }
          return o;
        }(t, n, s, e) : [];
      }
    }, {
      key: "_notifyStateChanges",
      value: function _notifyStateChanges(t) {
        var e = this._oldCache || [],
          i = this._cache,
          s = function s(t, e) {
            return t.filter(function (t) {
              return !e.some(function (e) {
                return t.plugin.id === e.plugin.id;
              });
            });
          };
        this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
      }
    }]);
  }();
  function nn(t, e) {
    return e || !1 !== t ? !0 === t ? {} : t : null;
  }
  function on(t, _ref8, s, n) {
    var e = _ref8.plugin,
      i = _ref8.local;
    var o = t.pluginScopeKeys(e),
      a = t.getOptionScopes(s, o);
    return i && e.defaults && a.push(e.defaults), t.createResolver(a, n, [""], {
      scriptable: !1,
      indexable: !1,
      allKeys: !0
    });
  }
  function an(t, e) {
    var i = ue.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
  }
  function rn(t) {
    if ("x" === t || "y" === t || "r" === t) return t;
  }
  function ln(t) {
    if (rn(t)) return t;
    for (var _len14 = arguments.length, e = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
      e[_key14 - 1] = arguments[_key14];
    }
    for (var _i32 = 0, _e41 = e; _i32 < _e41.length; _i32++) {
      var _s29 = _e41[_i32];
      var _e42 = _s29.axis || ("top" === (i = _s29.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || t.length > 1 && rn(t[0].toLowerCase());
      if (_e42) return _e42;
    }
    var i;
    throw new Error("Cannot determine type of '".concat(t, "' axis. Please provide 'axis' or 'position' option."));
  }
  function hn(t, e, i) {
    if (i[e + "AxisID"] === t) return {
      axis: e
    };
  }
  function cn(t, e) {
    var i = re[t.type] || {
        scales: {}
      },
      s = e.scales || {},
      n = an(t.type, e),
      a = Object.create(null);
    return Object.keys(s).forEach(function (e) {
      var r = s[e];
      if (!o(r)) return console.error("Invalid scale configuration for scale: ".concat(e));
      if (r._proxy) return console.warn("Ignoring resolver passed as options for scale: ".concat(e));
      var l = ln(e, r, function (t, e) {
          if (e.data && e.data.datasets) {
            var _i33 = e.data.datasets.filter(function (e) {
              return e.xAxisID === t || e.yAxisID === t;
            });
            if (_i33.length) return hn(t, "x", _i33[0]) || hn(t, "y", _i33[0]);
          }
          return {};
        }(e, t), ue.scales[r.type]),
        h = function (t, e) {
          return t === e ? "_index_" : "_value_";
        }(l, n),
        c = i.scales || {};
      a[e] = x(Object.create(null), [{
        axis: l
      }, r, c[l], c[h]]);
    }), t.data.datasets.forEach(function (i) {
      var n = i.type || t.type,
        o = i.indexAxis || an(n, e),
        r = (re[n] || {}).scales || {};
      Object.keys(r).forEach(function (t) {
        var e = function (t, e) {
            var i = t;
            return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
          }(t, o),
          n = i[e + "AxisID"] || e;
        a[n] = a[n] || Object.create(null), x(a[n], [{
          axis: e
        }, s[n], r[t]]);
      });
    }), Object.keys(a).forEach(function (t) {
      var e = a[t];
      x(e, [ue.scales[e.type], ue.scale]);
    }), a;
  }
  function dn(t) {
    var e = t.options || (t.options = {});
    e.plugins = l(e.plugins, {}), e.scales = cn(t, e);
  }
  function un(t) {
    return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
  }
  var fn = new Map(),
    gn = new Set();
  function pn(t, e) {
    var i = fn.get(t);
    return i || (i = e(), fn.set(t, i), gn.add(i)), i;
  }
  var mn = function mn(t, e, i) {
    var s = M(e, i);
    void 0 !== s && t.add(s);
  };
  var bn = /*#__PURE__*/function () {
    function bn(t) {
      _classCallCheck(this, bn);
      this._config = function (t) {
        return (t = t || {}).data = un(t.data), dn(t), t;
      }(t), this._scopeCache = new Map(), this._resolverCache = new Map();
    }
    return _createClass(bn, [{
      key: "platform",
      get: function get() {
        return this._config.platform;
      }
    }, {
      key: "type",
      get: function get() {
        return this._config.type;
      },
      set: function set(t) {
        this._config.type = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this._config.data;
      },
      set: function set(t) {
        this._config.data = un(t);
      }
    }, {
      key: "options",
      get: function get() {
        return this._config.options;
      },
      set: function set(t) {
        this._config.options = t;
      }
    }, {
      key: "plugins",
      get: function get() {
        return this._config.plugins;
      }
    }, {
      key: "update",
      value: function update() {
        var t = this._config;
        this.clearCache(), dn(t);
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
    }, {
      key: "datasetScopeKeys",
      value: function datasetScopeKeys(t) {
        return pn(t, function () {
          return [["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetAnimationScopeKeys",
      value: function datasetAnimationScopeKeys(t, e) {
        return pn("".concat(t, ".transition.").concat(e), function () {
          return [["datasets.".concat(t, ".transitions.").concat(e), "transitions.".concat(e)], ["datasets.".concat(t), ""]];
        });
      }
    }, {
      key: "datasetElementScopeKeys",
      value: function datasetElementScopeKeys(t, e) {
        return pn("".concat(t, "-").concat(e), function () {
          return [["datasets.".concat(t, ".elements.").concat(e), "datasets.".concat(t), "elements.".concat(e), ""]];
        });
      }
    }, {
      key: "pluginScopeKeys",
      value: function pluginScopeKeys(t) {
        var e = t.id;
        return pn("".concat(this.type, "-plugin-").concat(e), function () {
          return [["plugins.".concat(e)].concat(_toConsumableArray(t.additionalOptionScopes || []))];
        });
      }
    }, {
      key: "_cachedScopes",
      value: function _cachedScopes(t, e) {
        var i = this._scopeCache;
        var s = i.get(t);
        return s && !e || (s = new Map(), i.set(t, s)), s;
      }
    }, {
      key: "getOptionScopes",
      value: function getOptionScopes(t, e, i) {
        var s = this.options,
          n = this.type,
          o = this._cachedScopes(t, i),
          a = o.get(e);
        if (a) return a;
        var r = new Set();
        e.forEach(function (e) {
          t && (r.add(t), e.forEach(function (e) {
            return mn(r, t, e);
          })), e.forEach(function (t) {
            return mn(r, s, t);
          }), e.forEach(function (t) {
            return mn(r, re[n] || {}, t);
          }), e.forEach(function (t) {
            return mn(r, ue, t);
          }), e.forEach(function (t) {
            return mn(r, le, t);
          });
        });
        var l = Array.from(r);
        return 0 === l.length && l.push(Object.create(null)), gn.has(e) && o.set(e, l), l;
      }
    }, {
      key: "chartOptionScopes",
      value: function chartOptionScopes() {
        var t = this.options,
          e = this.type;
        return [t, re[e] || {}, ue.datasets[e] || {}, {
          type: e
        }, ue, le];
      }
    }, {
      key: "resolveNamedOptions",
      value: function resolveNamedOptions(t, e, i) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [""];
        var o = {
            $shared: !0
          },
          _xn = xn(this._resolverCache, t, s),
          a = _xn.resolver,
          r = _xn.subPrefixes;
        var l = a;
        if (function (t, e) {
          var _Ye = Ye(t),
            i = _Ye.isScriptable,
            s = _Ye.isIndexable;
          var _iterator23 = _createForOfIteratorHelper(e),
            _step23;
          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var _o23 = _step23.value;
              var _e43 = i(_o23),
                _a14 = s(_o23),
                _r11 = (_a14 || _e43) && t[_o23];
              if (_e43 && (S(_r11) || _n(_r11)) || _a14 && n(_r11)) return !0;
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
          }
          return !1;
        }(a, e)) {
          o.$shared = !1;
          l = $e(a, i = S(i) ? i() : i, this.createResolver(t, i, r));
        }
        var _iterator24 = _createForOfIteratorHelper(e),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _t42 = _step24.value;
            o[_t42] = l[_t42];
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
        return o;
      }
    }, {
      key: "createResolver",
      value: function createResolver(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
        var s = arguments.length > 3 ? arguments[3] : undefined;
        var _xn2 = xn(this._resolverCache, t, i),
          n = _xn2.resolver;
        return o(e) ? $e(n, e, void 0, s) : n;
      }
    }]);
  }();
  function xn(t, e, i) {
    var s = t.get(e);
    s || (s = new Map(), t.set(e, s));
    var n = i.join();
    var o = s.get(n);
    if (!o) {
      o = {
        resolver: je(e, i),
        subPrefixes: i.filter(function (t) {
          return !t.toLowerCase().includes("hover");
        })
      }, s.set(n, o);
    }
    return o;
  }
  var _n = function _n(t) {
    return o(t) && Object.getOwnPropertyNames(t).some(function (e) {
      return S(t[e]);
    });
  };
  var yn = ["top", "bottom", "left", "right", "chartArea"];
  function vn(t, e) {
    return "top" === t || "bottom" === t || -1 === yn.indexOf(t) && "x" === e;
  }
  function Mn(t, e) {
    return function (i, s) {
      return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
    };
  }
  function wn(t) {
    var e = t.chart,
      i = e.options.animation;
    e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e);
  }
  function kn(t) {
    var e = t.chart,
      i = e.options.animation;
    d(i && i.onProgress, [t], e);
  }
  function Sn(t) {
    return fe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t;
  }
  var Pn = {},
    Dn = function Dn(t) {
      var e = Sn(t);
      return Object.values(Pn).filter(function (t) {
        return t.canvas === e;
      }).pop();
    };
  function Cn(t, e, i) {
    var s = Object.keys(t);
    for (var _i34 = 0, _s30 = s; _i34 < _s30.length; _i34++) {
      var _n19 = _s30[_i34];
      var _s31 = +_n19;
      if (_s31 >= e) {
        var _o24 = t[_n19];
        delete t[_n19], (i > 0 || _s31 > e) && (t[_s31 + i] = _o24);
      }
    }
  }
  function On(t, e, i) {
    return t.options.clip ? t[i] : e[i];
  }
  var An = /*#__PURE__*/function () {
    function An(t, e) {
      var _this9 = this;
      _classCallCheck(this, An);
      var s = this.config = new bn(e),
        n = Sn(t),
        o = Dn(n);
      if (o) throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
      var a = s.createResolver(s.chartOptionScopes(), this.getContext());
      this.platform = new (s.platform || ks(n))(), this.platform.updateConfig(s);
      var r = this.platform.acquireContext(n, a.aspectRatio),
        l = r && r.canvas,
        h = l && l.height,
        c = l && l.width;
      this.id = i(), this.ctx = r, this.canvas = l, this.width = c, this.height = h, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new sn(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = dt(function (t) {
        return _this9.update(t);
      }, a.resizeDelay || 0), this._dataChanges = [], Pn[this.id] = this, r && l ? (xt.listen(this, "complete", wn), xt.listen(this, "progress", kn), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
    }
    return _createClass(An, [{
      key: "aspectRatio",
      get: function get() {
        var _this$options9 = this.options,
          t = _this$options9.aspectRatio,
          e = _this$options9.maintainAspectRatio,
          i = this.width,
          n = this.height,
          o = this._aspectRatio;
        return s(t) ? e && o ? o : n ? i / n : null : t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.config.data;
      },
      set: function set(t) {
        this.config.data = t;
      }
    }, {
      key: "options",
      get: function get() {
        return this._options;
      },
      set: function set(t) {
        this.config.options = t;
      }
    }, {
      key: "registry",
      get: function get() {
        return en;
      }
    }, {
      key: "_initialize",
      value: function _initialize() {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ke(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
      }
    }, {
      key: "clear",
      value: function clear() {
        return Te(this.canvas, this.ctx), this;
      }
    }, {
      key: "stop",
      value: function stop() {
        return xt.stop(this), this;
      }
    }, {
      key: "resize",
      value: function resize(t, e) {
        xt.running(this) ? this._resizeBeforeDraw = {
          width: t,
          height: e
        } : this._resize(t, e);
      }
    }, {
      key: "_resize",
      value: function _resize(t, e) {
        var i = this.options,
          s = this.canvas,
          n = i.maintainAspectRatio && this.aspectRatio,
          o = this.platform.getMaximumSize(s, t, e, n),
          a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          r = this.width ? "resize" : "attach";
        this.width = o.width, this.height = o.height, this._aspectRatio = this.aspectRatio, ke(this, a, !0) && (this.notifyPlugins("resize", {
          size: o
        }), d(i.onResize, [this, o], this), this.attached && this._doResize(r) && this.render());
      }
    }, {
      key: "ensureScalesHaveIDs",
      value: function ensureScalesHaveIDs() {
        u(this.options.scales || {}, function (t, e) {
          t.id = e;
        });
      }
    }, {
      key: "buildOrUpdateScales",
      value: function buildOrUpdateScales() {
        var _this10 = this;
        var t = this.options,
          e = t.scales,
          i = this.scales,
          s = Object.keys(i).reduce(function (t, e) {
            return t[e] = !1, t;
          }, {});
        var n = [];
        e && (n = n.concat(Object.keys(e).map(function (t) {
          var i = e[t],
            s = ln(t, i),
            n = "r" === s,
            o = "x" === s;
          return {
            options: i,
            dposition: n ? "chartArea" : o ? "bottom" : "left",
            dtype: n ? "radialLinear" : o ? "category" : "linear"
          };
        }))), u(n, function (e) {
          var n = e.options,
            o = n.id,
            a = ln(o, n),
            r = l(n.type, e.dtype);
          void 0 !== n.position && vn(n.position, a) === vn(e.dposition) || (n.position = e.dposition), s[o] = !0;
          var h = null;
          if (o in i && i[o].type === r) h = i[o];else {
            h = new (en.getScale(r))({
              id: o,
              type: r,
              ctx: _this10.ctx,
              chart: _this10
            }), i[h.id] = h;
          }
          h.init(n, t);
        }), u(s, function (t, e) {
          t || delete i[e];
        }), u(i, function (t) {
          as.configure(_this10, t, t.options), as.addBox(_this10, t);
        });
      }
    }, {
      key: "_updateMetasets",
      value: function _updateMetasets() {
        var t = this._metasets,
          e = this.data.datasets.length,
          i = t.length;
        if (t.sort(function (t, e) {
          return t.index - e.index;
        }), i > e) {
          for (var _t43 = e; _t43 < i; ++_t43) this._destroyDatasetMeta(_t43);
          t.splice(e, i - e);
        }
        this._sortedMetasets = t.slice(0).sort(Mn("order", "index"));
      }
    }, {
      key: "_removeUnreferencedMetasets",
      value: function _removeUnreferencedMetasets() {
        var _this11 = this;
        var t = this._metasets,
          e = this.data.datasets;
        t.length > e.length && delete this._stacks, t.forEach(function (t, i) {
          0 === e.filter(function (e) {
            return e === t._dataset;
          }).length && _this11._destroyDatasetMeta(i);
        });
      }
    }, {
      key: "buildOrUpdateControllers",
      value: function buildOrUpdateControllers() {
        var t = [],
          e = this.data.datasets;
        var i, s;
        for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
          var _s32 = e[i];
          var _n20 = this.getDatasetMeta(i);
          var _o25 = _s32.type || this.config.type;
          if (_n20.type && _n20.type !== _o25 && (this._destroyDatasetMeta(i), _n20 = this.getDatasetMeta(i)), _n20.type = _o25, _n20.indexAxis = _s32.indexAxis || an(_o25, this.options), _n20.order = _s32.order || 0, _n20.index = i, _n20.label = "" + _s32.label, _n20.visible = this.isDatasetVisible(i), _n20.controller) _n20.controller.updateIndex(i), _n20.controller.linkScales();else {
            var _e44 = en.getController(_o25),
              _ue$datasets$_o = ue.datasets[_o25],
              _s33 = _ue$datasets$_o.datasetElementType,
              _a15 = _ue$datasets$_o.dataElementType;
            Object.assign(_e44, {
              dataElementType: en.getElement(_a15),
              datasetElementType: _s33 && en.getElement(_s33)
            }), _n20.controller = new _e44(this, i), t.push(_n20.controller);
          }
        }
        return this._updateMetasets(), t;
      }
    }, {
      key: "_resetElements",
      value: function _resetElements() {
        var _this12 = this;
        u(this.data.datasets, function (t, e) {
          _this12.getDatasetMeta(e).controller.reset();
        }, this);
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.config;
        e.update();
        var i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
          s = this._animationsDisabled = !i.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", {
          mode: t,
          cancelable: !0
        })) return;
        var n = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        var o = 0;
        for (var _t44 = 0, _e45 = this.data.datasets.length; _t44 < _e45; _t44++) {
          var _this$getDatasetMeta = this.getDatasetMeta(_t44),
            _e46 = _this$getDatasetMeta.controller,
            _i35 = !s && -1 === n.indexOf(_e46);
          _e46.buildOrUpdateElements(_i35), o = Math.max(+_e46.getMaxOverflow(), o);
        }
        o = this._minPadding = i.layout.autoPadding ? o : 0, this._updateLayout(o), s || u(n, function (t) {
          t.reset();
        }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
          mode: t
        }), this._layers.sort(Mn("z", "_idx"));
        var a = this._active,
          r = this._lastEvent;
        r ? this._eventHandler(r, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
      }
    }, {
      key: "_updateScales",
      value: function _updateScales() {
        var _this13 = this;
        u(this.scales, function (t) {
          as.removeBox(_this13, t);
        }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
      }
    }, {
      key: "_checkEventBindings",
      value: function _checkEventBindings() {
        var t = this.options,
          e = new Set(Object.keys(this._listeners)),
          i = new Set(t.events);
        P(e, i) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents());
      }
    }, {
      key: "_updateHiddenIndices",
      value: function _updateHiddenIndices() {
        var t = this._hiddenIndices,
          e = this._getUniformDataChanges() || [];
        var _iterator25 = _createForOfIteratorHelper(e),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _step25$value = _step25.value,
              _i36 = _step25$value.method,
              _s34 = _step25$value.start,
              _n21 = _step25$value.count;
            Cn(t, _s34, "_removeElements" === _i36 ? -_n21 : _n21);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_getUniformDataChanges",
      value: function _getUniformDataChanges() {
        var t = this._dataChanges;
        if (!t || !t.length) return;
        this._dataChanges = [];
        var e = this.data.datasets.length,
          i = function i(e) {
            return new Set(t.filter(function (t) {
              return t[0] === e;
            }).map(function (t, e) {
              return e + "," + t.splice(1).join(",");
            }));
          },
          s = i(0);
        for (var _t45 = 1; _t45 < e; _t45++) if (!P(s, i(_t45))) return;
        return Array.from(s).map(function (t) {
          return t.split(",");
        }).map(function (t) {
          return {
            method: t[1],
            start: +t[2],
            count: +t[3]
          };
        });
      }
    }, {
      key: "_updateLayout",
      value: function _updateLayout(t) {
        var _this14 = this;
        if (!1 === this.notifyPlugins("beforeLayout", {
          cancelable: !0
        })) return;
        as.update(this, this.width, this.height, t);
        var e = this.chartArea,
          i = e.width <= 0 || e.height <= 0;
        this._layers = [], u(this.boxes, function (t) {
          var _this14$_layers;
          i && "chartArea" === t.position || (t.configure && t.configure(), (_this14$_layers = _this14._layers).push.apply(_this14$_layers, _toConsumableArray(t._layers())));
        }, this), this._layers.forEach(function (t, e) {
          t._idx = e;
        }), this.notifyPlugins("afterLayout");
      }
    }, {
      key: "_updateDatasets",
      value: function _updateDatasets(t) {
        if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0
        })) {
          for (var _t46 = 0, _e47 = this.data.datasets.length; _t46 < _e47; ++_t46) this.getDatasetMeta(_t46).controller.configure();
          for (var _e48 = 0, _i37 = this.data.datasets.length; _e48 < _i37; ++_e48) this._updateDataset(_e48, S(t) ? t({
            datasetIndex: _e48
          }) : t);
          this.notifyPlugins("afterDatasetsUpdate", {
            mode: t
          });
        }
      }
    }, {
      key: "_updateDataset",
      value: function _updateDataset(t, e) {
        var i = this.getDatasetMeta(t),
          s = {
            meta: i,
            index: t,
            mode: e,
            cancelable: !0
          };
        !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
      }
    }, {
      key: "render",
      value: function render() {
        !1 !== this.notifyPlugins("beforeRender", {
          cancelable: !0
        }) && (xt.has(this) ? this.attached && !xt.running(this) && xt.start(this) : (this.draw(), wn({
          chart: this
        })));
      }
    }, {
      key: "draw",
      value: function draw() {
        var t;
        if (this._resizeBeforeDraw) {
          var _this$_resizeBeforeDr = this._resizeBeforeDraw,
            _t47 = _this$_resizeBeforeDr.width,
            _e49 = _this$_resizeBeforeDr.height;
          this._resize(_t47, _e49), this._resizeBeforeDraw = null;
        }
        if (this.clear(), this.width <= 0 || this.height <= 0) return;
        if (!1 === this.notifyPlugins("beforeDraw", {
          cancelable: !0
        })) return;
        var e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t) e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t) e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw");
      }
    }, {
      key: "_getSortedDatasetMetas",
      value: function _getSortedDatasetMetas(t) {
        var e = this._sortedMetasets,
          i = [];
        var s, n;
        for (s = 0, n = e.length; s < n; ++s) {
          var _n22 = e[s];
          t && !_n22.visible || i.push(_n22);
        }
        return i;
      }
    }, {
      key: "getSortedVisibleDatasetMetas",
      value: function getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
    }, {
      key: "_drawDatasets",
      value: function _drawDatasets() {
        if (!1 === this.notifyPlugins("beforeDatasetsDraw", {
          cancelable: !0
        })) return;
        var t = this.getSortedVisibleDatasetMetas();
        for (var _e50 = t.length - 1; _e50 >= 0; --_e50) this._drawDataset(t[_e50]);
        this.notifyPlugins("afterDatasetsDraw");
      }
    }, {
      key: "_drawDataset",
      value: function _drawDataset(t) {
        var e = this.ctx,
          i = t._clip,
          s = !i.disabled,
          n = function (t, e) {
            var i = t.xScale,
              s = t.yScale;
            return i && s ? {
              left: On(i, e, "left"),
              right: On(i, e, "right"),
              top: On(s, e, "top"),
              bottom: On(s, e, "bottom")
            } : e;
          }(t, this.chartArea),
          o = {
            meta: t,
            index: t.index,
            cancelable: !0
          };
        !1 !== this.notifyPlugins("beforeDatasetDraw", o) && (s && Ie(e, {
          left: !1 === i.left ? 0 : n.left - i.left,
          right: !1 === i.right ? this.width : n.right + i.right,
          top: !1 === i.top ? 0 : n.top - i.top,
          bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom
        }), t.controller.draw(), s && ze(e), o.cancelable = !1, this.notifyPlugins("afterDatasetDraw", o));
      }
    }, {
      key: "isPointInArea",
      value: function isPointInArea(t) {
        return Re(t, this.chartArea, this._minPadding);
      }
    }, {
      key: "getElementsAtEventForMode",
      value: function getElementsAtEventForMode(t, e, i, s) {
        var n = Xi.modes[e];
        return "function" == typeof n ? n(this, t, i, s) : [];
      }
    }, {
      key: "getDatasetMeta",
      value: function getDatasetMeta(t) {
        var e = this.data.datasets[t],
          i = this._metasets;
        var s = i.filter(function (t) {
          return t && t._dataset === e;
        }).pop();
        return s || (s = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: e && e.order || 0,
          index: t,
          _dataset: e,
          _parsed: [],
          _sorted: !1
        }, i.push(s)), s;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = Ci(null, {
          chart: this,
          type: "chart"
        }));
      }
    }, {
      key: "getVisibleDatasetCount",
      value: function getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
    }, {
      key: "isDatasetVisible",
      value: function isDatasetVisible(t) {
        var e = this.data.datasets[t];
        if (!e) return !1;
        var i = this.getDatasetMeta(t);
        return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
      }
    }, {
      key: "setDatasetVisibility",
      value: function setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
    }, {
      key: "toggleDataVisibility",
      value: function toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
    }, {
      key: "getDataVisibility",
      value: function getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
    }, {
      key: "_updateVisibility",
      value: function _updateVisibility(t, e, i) {
        var s = i ? "show" : "hide",
          n = this.getDatasetMeta(t),
          o = n.controller._resolveAnimations(void 0, s);
        k(e) ? (n.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), o.update(n, {
          visible: i
        }), this.update(function (e) {
          return e.datasetIndex === t ? s : void 0;
        }));
      }
    }, {
      key: "hide",
      value: function hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
    }, {
      key: "show",
      value: function show(t, e) {
        this._updateVisibility(t, e, !0);
      }
    }, {
      key: "_destroyDatasetMeta",
      value: function _destroyDatasetMeta(t) {
        var e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
    }, {
      key: "_stop",
      value: function _stop() {
        var t, e;
        for (this.stop(), xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.notifyPlugins("beforeDestroy");
        var t = this.canvas,
          e = this.ctx;
        this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Te(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Pn[this.id], this.notifyPlugins("afterDestroy");
      }
    }, {
      key: "toBase64Image",
      value: function toBase64Image() {
        var _this$canvas;
        return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
      }
    }, {
      key: "bindEvents",
      value: function bindEvents() {
        this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
      }
    }, {
      key: "bindUserEvents",
      value: function bindUserEvents() {
        var _this15 = this;
        var t = this._listeners,
          e = this.platform,
          i = function i(_i38, s) {
            e.addEventListener(_this15, _i38, s), t[_i38] = s;
          },
          s = function s(t, e, i) {
            t.offsetX = e, t.offsetY = i, _this15._eventHandler(t);
          };
        u(this.options.events, function (t) {
          return i(t, s);
        });
      }
    }, {
      key: "bindResponsiveEvents",
      value: function bindResponsiveEvents() {
        var _this16 = this;
        this._responsiveListeners || (this._responsiveListeners = {});
        var t = this._responsiveListeners,
          e = this.platform,
          i = function i(_i39, s) {
            e.addEventListener(_this16, _i39, s), t[_i39] = s;
          },
          s = function s(i, _s35) {
            t[i] && (e.removeEventListener(_this16, i, _s35), delete t[i]);
          },
          n = function n(t, e) {
            _this16.canvas && _this16.resize(t, e);
          };
        var o;
        var a = function a() {
          s("attach", a), _this16.attached = !0, _this16.resize(), i("resize", n), i("detach", o);
        };
        o = function o() {
          _this16.attached = !1, s("resize", n), _this16._stop(), _this16._resize(0, 0), i("attach", a);
        }, e.isAttached(this.canvas) ? a() : o();
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this17 = this;
        u(this._listeners, function (t, e) {
          _this17.platform.removeEventListener(_this17, e, t);
        }), this._listeners = {}, u(this._responsiveListeners, function (t, e) {
          _this17.platform.removeEventListener(_this17, e, t);
        }), this._responsiveListeners = void 0;
      }
    }, {
      key: "updateHoverStyle",
      value: function updateHoverStyle(t, e, i) {
        var s = i ? "set" : "remove";
        var n, o, a, r;
        for ("dataset" === e && (n = this.getDatasetMeta(t[0].datasetIndex), n.controller["_" + s + "DatasetHoverStyle"]()), a = 0, r = t.length; a < r; ++a) {
          o = t[a];
          var _e51 = o && this.getDatasetMeta(o.datasetIndex).controller;
          _e51 && _e51[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
        }
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t) {
        var _this18 = this;
        var e = this._active || [],
          i = t.map(function (_ref9) {
            var t = _ref9.datasetIndex,
              e = _ref9.index;
            var i = _this18.getDatasetMeta(t);
            if (!i) throw new Error("No dataset found at index " + t);
            return {
              datasetIndex: t,
              element: i.data[e],
              index: e
            };
          });
        !f(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
      }
    }, {
      key: "notifyPlugins",
      value: function notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
    }, {
      key: "isPluginEnabled",
      value: function isPluginEnabled(t) {
        return 1 === this._plugins._cache.filter(function (e) {
          return e.plugin.id === t;
        }).length;
      }
    }, {
      key: "_updateHoverStyles",
      value: function _updateHoverStyles(t, e, i) {
        var s = this.options.hover,
          n = function n(t, e) {
            return t.filter(function (t) {
              return !e.some(function (e) {
                return t.datasetIndex === e.datasetIndex && t.index === e.index;
              });
            });
          },
          o = n(e, t),
          a = i ? t : n(t, e);
        o.length && this.updateHoverStyle(o, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
      }
    }, {
      key: "_eventHandler",
      value: function _eventHandler(t, e) {
        var _this19 = this;
        var i = {
            event: t,
            replay: e,
            cancelable: !0,
            inChartArea: this.isPointInArea(t)
          },
          s = function s(e) {
            return (e.options.events || _this19.options.events).includes(t["native"].type);
          };
        if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
        var n = this._handleEvent(t, e, i.inChartArea);
        return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (n || i.changed) && this.render(), this;
      }
    }, {
      key: "_handleEvent",
      value: function _handleEvent(t, e, i) {
        var _this$_active = this._active,
          s = _this$_active === void 0 ? [] : _this$_active,
          n = this.options,
          o = e,
          a = this._getActiveElements(t, s, i, o),
          r = D(t),
          l = function (t, e, i, s) {
            return i && "mouseout" !== t.type ? s ? e : t : null;
          }(t, this._lastEvent, i, r);
        i && (this._lastEvent = null, d(n.onHover, [t, a, this], this), r && d(n.onClick, [t, a, this], this));
        var h = !f(a, s);
        return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = l, h;
      }
    }, {
      key: "_getActiveElements",
      value: function _getActiveElements(t, e, i, s) {
        if ("mouseout" === t.type) return [];
        if (!i) return e;
        var n = this.options.hover;
        return this.getElementsAtEventForMode(t, n.mode, n, s);
      }
    }], [{
      key: "register",
      value: function register() {
        en.add.apply(en, arguments), Tn();
      }
    }, {
      key: "unregister",
      value: function unregister() {
        en.remove.apply(en, arguments), Tn();
      }
    }]);
  }();
  _defineProperty(An, "defaults", ue);
  _defineProperty(An, "instances", Pn);
  _defineProperty(An, "overrides", re);
  _defineProperty(An, "registry", en);
  _defineProperty(An, "version", "4.4.2");
  _defineProperty(An, "getChart", Dn);
  function Tn() {
    return u(An.instances, function (t) {
      return t._plugins.invalidate();
    });
  }
  function Ln() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  var En = /*#__PURE__*/function () {
    function En(t) {
      _classCallCheck(this, En);
      _defineProperty(this, "options", void 0);
      this.options = t || {};
    }
    return _createClass(En, [{
      key: "init",
      value: function init() {}
    }, {
      key: "formats",
      value: function formats() {
        return Ln();
      }
    }, {
      key: "parse",
      value: function parse() {
        return Ln();
      }
    }, {
      key: "format",
      value: function format() {
        return Ln();
      }
    }, {
      key: "add",
      value: function add() {
        return Ln();
      }
    }, {
      key: "diff",
      value: function diff() {
        return Ln();
      }
    }, {
      key: "startOf",
      value: function startOf() {
        return Ln();
      }
    }, {
      key: "endOf",
      value: function endOf() {
        return Ln();
      }
    }], [{
      key: "override",
      value: function override(t) {
        Object.assign(En.prototype, t);
      }
    }]);
  }();
  var Rn = {
    _date: En
  };
  function In(t) {
    var e = t.iScale,
      i = function (t, e) {
        if (!t._cache.$bar) {
          var _i40 = t.getMatchingVisibleMetas(e);
          var _s36 = [];
          for (var _e52 = 0, _n23 = _i40.length; _e52 < _n23; _e52++) _s36 = _s36.concat(_i40[_e52].controller.getAllParsedValues(t));
          t._cache.$bar = lt(_s36.sort(function (t, e) {
            return t - e;
          }));
        }
        return t._cache.$bar;
      }(e, t.type);
    var s,
      n,
      o,
      a,
      r = e._length;
    var l = function l() {
      32767 !== o && -32768 !== o && (k(a) && (r = Math.min(r, Math.abs(o - a) || r)), a = o);
    };
    for (s = 0, n = i.length; s < n; ++s) o = e.getPixelForValue(i[s]), l();
    for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s) o = e.getPixelForTick(s), l();
    return r;
  }
  function zn(t, e, i, s) {
    return n(t) ? function (t, e, i, s) {
      var n = i.parse(t[0], s),
        o = i.parse(t[1], s),
        a = Math.min(n, o),
        r = Math.max(n, o);
      var l = a,
        h = r;
      Math.abs(a) > Math.abs(r) && (l = r, h = a), e[i.axis] = h, e._custom = {
        barStart: l,
        barEnd: h,
        start: n,
        end: o,
        min: a,
        max: r
      };
    }(t, e, i, s) : e[i.axis] = i.parse(t, s), e;
  }
  function Fn(t, e, i, s) {
    var n = t.iScale,
      o = t.vScale,
      a = n.getLabels(),
      r = n === o,
      l = [];
    var h, c, d, u;
    for (h = i, c = i + s; h < c; ++h) u = e[h], d = {}, d[n.axis] = r || n.parse(a[h], h), l.push(zn(u, d, o, h));
    return l;
  }
  function Vn(t) {
    return t && void 0 !== t.barStart && void 0 !== t.barEnd;
  }
  function Bn(t, e, i, s) {
    var n = e.borderSkipped;
    var o = {};
    if (!n) return void (t.borderSkipped = o);
    if (!0 === n) return void (t.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    });
    var _ref10 = function (t) {
        var e, i, s, n, o;
        return t.horizontal ? (e = t.base > t.x, i = "left", s = "right") : (e = t.base < t.y, i = "bottom", s = "top"), e ? (n = "end", o = "start") : (n = "start", o = "end"), {
          start: i,
          end: s,
          reverse: e,
          top: n,
          bottom: o
        };
      }(t),
      a = _ref10.start,
      r = _ref10.end,
      l = _ref10.reverse,
      h = _ref10.top,
      c = _ref10.bottom;
    "middle" === n && i && (t.enableBorderRadius = !0, (i._top || 0) === s ? n = h : (i._bottom || 0) === s ? n = c : (o[Wn(c, a, r, l)] = !0, n = h)), o[Wn(n, a, r, l)] = !0, t.borderSkipped = o;
  }
  function Wn(t, e, i, s) {
    var n, o, a;
    return s ? (a = i, t = Nn(t = (n = t) === (o = e) ? a : n === a ? o : n, i, e)) : t = Nn(t, e, i), t;
  }
  function Nn(t, e, i) {
    return "start" === t ? e : "end" === t ? i : t;
  }
  function Hn(t, _ref11, i) {
    var e = _ref11.inflateAmount;
    t.inflateAmount = "auto" === e ? 1 === i ? .33 : 0 : e;
  }
  var jn = /*#__PURE__*/function (_Ns2) {
    function jn(t, e) {
      var _this20;
      _classCallCheck(this, jn);
      _this20 = _callSuper(this, jn, [t, e]), _this20.enableOptionSharing = !0, _this20.innerRadius = void 0, _this20.outerRadius = void 0, _this20.offsetX = void 0, _this20.offsetY = void 0;
      return _this20;
    }
    _inherits(jn, _Ns2);
    return _createClass(jn, [{
      key: "linkScales",
      value: function linkScales() {}
    }, {
      key: "parse",
      value: function parse(t, e) {
        var i = this.getDataset().data,
          s = this._cachedMeta;
        if (!1 === this._parsing) s._parsed = i;else {
          var _n24,
            _a16,
            _r12 = function _r12(t) {
              return +i[t];
            };
          if (o(i[t])) {
            var _this$_parsing$key2 = this._parsing.key,
              _t48 = _this$_parsing$key2 === void 0 ? "value" : _this$_parsing$key2;
            _r12 = function _r12(e) {
              return +M(i[e], _t48);
            };
          }
          for (_n24 = t, _a16 = t + e; _n24 < _a16; ++_n24) s._parsed[_n24] = _r12(_n24);
        }
      }
    }, {
      key: "_getRotation",
      value: function _getRotation() {
        return $(this.options.rotation - 90);
      }
    }, {
      key: "_getCircumference",
      value: function _getCircumference() {
        return $(this.options.circumference);
      }
    }, {
      key: "_getRotationExtents",
      value: function _getRotationExtents() {
        var t = O,
          e = -O;
        for (var _i41 = 0; _i41 < this.chart.data.datasets.length; ++_i41) if (this.chart.isDatasetVisible(_i41) && this.chart.getDatasetMeta(_i41).type === this._type) {
          var _s37 = this.chart.getDatasetMeta(_i41).controller,
            _n25 = _s37._getRotation(),
            _o26 = _s37._getCircumference();
          t = Math.min(t, _n25), e = Math.max(e, _n25 + _o26);
        }
        return {
          rotation: t,
          circumference: e - t
        };
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this.chart,
          i = e.chartArea,
          s = this._cachedMeta,
          n = s.data,
          o = this.getMaxBorderWidth() + this.getMaxOffset(n) + this.options.spacing,
          a = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
          r = Math.min(h(this.options.cutout, a), 1),
          l = this._getRingWeight(this.index),
          _this$_getRotationExt = this._getRotationExtents(),
          d = _this$_getRotationExt.circumference,
          u = _this$_getRotationExt.rotation,
          _ref12 = function (t, e, i) {
            var s = 1,
              n = 1,
              o = 0,
              a = 0;
            if (e < O) {
              var _r13 = t,
                _l13 = _r13 + e,
                _h11 = Math.cos(_r13),
                _c8 = Math.sin(_r13),
                _d8 = Math.cos(_l13),
                _u3 = Math.sin(_l13),
                _f2 = function _f2(t, e, s) {
                  return Z(t, _r13, _l13, !0) ? 1 : Math.max(e, e * i, s, s * i);
                },
                _g2 = function _g2(t, e, s) {
                  return Z(t, _r13, _l13, !0) ? -1 : Math.min(e, e * i, s, s * i);
                },
                _p2 = _f2(0, _h11, _d8),
                _m2 = _f2(E, _c8, _u3),
                _b = _g2(C, _h11, _d8),
                _x = _g2(C + E, _c8, _u3);
              s = (_p2 - _b) / 2, n = (_m2 - _x) / 2, o = -(_p2 + _b) / 2, a = -(_m2 + _x) / 2;
            }
            return {
              ratioX: s,
              ratioY: n,
              offsetX: o,
              offsetY: a
            };
          }(u, d, r),
          f = _ref12.ratioX,
          g = _ref12.ratioY,
          p = _ref12.offsetX,
          m = _ref12.offsetY,
          b = (i.width - o) / f,
          x = (i.height - o) / g,
          _ = Math.max(Math.min(b, x) / 2, 0),
          y = c(this.options.radius, _),
          v = (y - Math.max(y * r, 0)) / this._getVisibleDatasetWeightTotal();
        this.offsetX = p * y, this.offsetY = m * y, s.total = this.calculateTotal(), this.outerRadius = y - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(n, 0, n.length, t);
      }
    }, {
      key: "_circumference",
      value: function _circumference(t, e) {
        var i = this.options,
          s = this._cachedMeta,
          n = this._getCircumference();
        return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * n / O);
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = "reset" === s,
          o = this.chart,
          a = o.chartArea,
          r = o.options.animation,
          l = (a.left + a.right) / 2,
          h = (a.top + a.bottom) / 2,
          c = n && r.animateScale,
          d = c ? 0 : this.innerRadius,
          u = c ? 0 : this.outerRadius,
          _this$_getSharedOptio = this._getSharedOptions(e, s),
          f = _this$_getSharedOptio.sharedOptions,
          g = _this$_getSharedOptio.includeOptions;
        var p,
          m = this._getRotation();
        for (p = 0; p < e; ++p) m += this._circumference(p, n);
        for (p = e; p < e + i; ++p) {
          var _e53 = this._circumference(p, n),
            _i42 = t[p],
            _o27 = {
              x: l + this.offsetX,
              y: h + this.offsetY,
              startAngle: m,
              endAngle: m + _e53,
              circumference: _e53,
              outerRadius: u,
              innerRadius: d
            };
          g && (_o27.options = f || this.resolveDataElementOptions(p, _i42.active ? "active" : s)), m += _e53, this.updateElement(_i42, p, _o27, s);
        }
      }
    }, {
      key: "calculateTotal",
      value: function calculateTotal() {
        var t = this._cachedMeta,
          e = t.data;
        var i,
          s = 0;
        for (i = 0; i < e.length; i++) {
          var _n26 = t._parsed[i];
          null === _n26 || isNaN(_n26) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(_n26));
        }
        return s;
      }
    }, {
      key: "calculateCircumference",
      value: function calculateCircumference(t) {
        var e = this._cachedMeta.total;
        return e > 0 && !isNaN(t) ? O * (Math.abs(t) / e) : 0;
      }
    }, {
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
          i = this.chart,
          s = i.data.labels || [],
          n = ne(e._parsed[t], i.options.locale);
        return {
          label: s[t] || "",
          value: n
        };
      }
    }, {
      key: "getMaxBorderWidth",
      value: function getMaxBorderWidth(t) {
        var e = 0;
        var i = this.chart;
        var s, n, o, a, r;
        if (!t) for (s = 0, n = i.data.datasets.length; s < n; ++s) if (i.isDatasetVisible(s)) {
          o = i.getDatasetMeta(s), t = o.data, a = o.controller;
          break;
        }
        if (!t) return 0;
        for (s = 0, n = t.length; s < n; ++s) r = a.resolveDataElementOptions(s), "inner" !== r.borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
        return e;
      }
    }, {
      key: "getMaxOffset",
      value: function getMaxOffset(t) {
        var e = 0;
        for (var _i43 = 0, _s38 = t.length; _i43 < _s38; ++_i43) {
          var _t49 = this.resolveDataElementOptions(_i43);
          e = Math.max(e, _t49.offset || 0, _t49.hoverOffset || 0);
        }
        return e;
      }
    }, {
      key: "_getRingWeightOffset",
      value: function _getRingWeightOffset(t) {
        var e = 0;
        for (var _i44 = 0; _i44 < t; ++_i44) this.chart.isDatasetVisible(_i44) && (e += this._getRingWeight(_i44));
        return e;
      }
    }, {
      key: "_getRingWeight",
      value: function _getRingWeight(t) {
        return Math.max(l(this.chart.data.datasets[t].weight, 1), 0);
      }
    }, {
      key: "_getVisibleDatasetWeightTotal",
      value: function _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }]);
  }(Ns);
  _defineProperty(jn, "id", "doughnut");
  _defineProperty(jn, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  });
  _defineProperty(jn, "descriptors", {
    _scriptable: function _scriptable(t) {
      return "spacing" !== t;
    },
    _indexable: function _indexable(t) {
      return "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash");
    }
  });
  _defineProperty(jn, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;
            if (e.labels.length && e.datasets.length) {
              var _t$legend$options$lab2 = t.legend.options.labels,
                _i77 = _t$legend$options$lab2.pointStyle,
                _s59 = _t$legend$options$lab2.color;
              return e.labels.map(function (e, n) {
                var o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  fontColor: _s59,
                  lineWidth: o.borderWidth,
                  pointStyle: _i77,
                  hidden: !t.getDataVisibility(n),
                  index: n
                };
              });
            }
            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    }
  });
  var $n = /*#__PURE__*/function (_Ns3) {
    function $n(t, e) {
      var _this21;
      _classCallCheck(this, $n);
      _this21 = _callSuper(this, $n, [t, e]), _this21.innerRadius = void 0, _this21.outerRadius = void 0;
      return _this21;
    }
    _inherits($n, _Ns3);
    return _createClass($n, [{
      key: "getLabelAndValue",
      value: function getLabelAndValue(t) {
        var e = this._cachedMeta,
          i = this.chart,
          s = i.data.labels || [],
          n = ne(e._parsed[t].r, i.options.locale);
        return {
          label: s[t] || "",
          value: n
        };
      }
    }, {
      key: "parseObjectData",
      value: function parseObjectData(t, e, i, s) {
        return ii.bind(this)(t, e, i, s);
      }
    }, {
      key: "update",
      value: function update(t) {
        var e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
    }, {
      key: "getMinMax",
      value: function getMinMax() {
        var _this22 = this;
        var t = this._cachedMeta,
          e = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
          };
        return t.data.forEach(function (t, i) {
          var s = _this22.getParsed(i).r;
          !isNaN(s) && _this22.chart.getDataVisibility(i) && (s < e.min && (e.min = s), s > e.max && (e.max = s));
        }), e;
      }
    }, {
      key: "_updateRadius",
      value: function _updateRadius() {
        var t = this.chart,
          e = t.chartArea,
          i = t.options,
          s = Math.min(e.right - e.left, e.bottom - e.top),
          n = Math.max(s / 2, 0),
          o = (n - Math.max(i.cutoutPercentage ? n / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
        this.outerRadius = n - o * this.index, this.innerRadius = this.outerRadius - o;
      }
    }, {
      key: "updateElements",
      value: function updateElements(t, e, i, s) {
        var n = "reset" === s,
          o = this.chart,
          a = o.options.animation,
          r = this._cachedMeta.rScale,
          l = r.xCenter,
          h = r.yCenter,
          c = r.getIndexAngle(0) - .5 * C;
        var d,
          u = c;
        var f = 360 / this.countVisibleElements();
        for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
        for (d = e; d < e + i; d++) {
          var _e54 = t[d];
          var _i45 = u,
            _g3 = u + this._computeAngle(d, s, f),
            _p3 = o.getDataVisibility(d) ? r.getDistanceFromCenterForValue(this.getParsed(d).r) : 0;
          u = _g3, n && (a.animateScale && (_p3 = 0), a.animateRotate && (_i45 = _g3 = c));
          var _m3 = {
            x: l,
            y: h,
            innerRadius: 0,
            outerRadius: _p3,
            startAngle: _i45,
            endAngle: _g3,
            options: this.resolveDataElementOptions(d, _e54.active ? "active" : s)
          };
          this.updateElement(_e54, d, _m3, s);
        }
      }
    }, {
      key: "countVisibleElements",
      value: function countVisibleElements() {
        var _this23 = this;
        var t = this._cachedMeta;
        var e = 0;
        return t.data.forEach(function (t, i) {
          !isNaN(_this23.getParsed(i).r) && _this23.chart.getDataVisibility(i) && e++;
        }), e;
      }
    }, {
      key: "_computeAngle",
      value: function _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t) ? $(this.resolveDataElementOptions(t, e).angle || i) : 0;
      }
    }]);
  }(Ns);
  _defineProperty($n, "id", "polarArea");
  _defineProperty($n, "defaults", {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
      }
    },
    indexAxis: "r",
    startAngle: 0
  });
  _defineProperty($n, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels: function generateLabels(t) {
            var e = t.data;
            if (e.labels.length && e.datasets.length) {
              var _t$legend$options$lab3 = t.legend.options.labels,
                _i78 = _t$legend$options$lab3.pointStyle,
                _s60 = _t$legend$options$lab3.color;
              return e.labels.map(function (e, n) {
                var o = t.getDatasetMeta(0).controller.getStyle(n);
                return {
                  text: e,
                  fillStyle: o.backgroundColor,
                  strokeStyle: o.borderColor,
                  fontColor: _s60,
                  lineWidth: o.borderWidth,
                  pointStyle: _i78,
                  hidden: !t.getDataVisibility(n),
                  index: n
                };
              });
            }
            return [];
          }
        },
        onClick: function onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  });
  var Yn = Object.freeze({
    __proto__: null,
    BarController: (_Class = /*#__PURE__*/function (_Ns4) {
      function BarController() {
        _classCallCheck(this, BarController);
        return _callSuper(this, BarController, arguments);
      }
      _inherits(BarController, _Ns4);
      return _createClass(BarController, [{
        key: "parsePrimitiveData",
        value: function parsePrimitiveData(t, e, i, s) {
          return Fn(t, e, i, s);
        }
      }, {
        key: "parseArrayData",
        value: function parseArrayData(t, e, i, s) {
          return Fn(t, e, i, s);
        }
      }, {
        key: "parseObjectData",
        value: function parseObjectData(t, e, i, s) {
          var n = t.iScale,
            o = t.vScale,
            _this$_parsing2 = this._parsing,
            _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
            a = _this$_parsing2$xAxis === void 0 ? "x" : _this$_parsing2$xAxis,
            _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
            r = _this$_parsing2$yAxis === void 0 ? "y" : _this$_parsing2$yAxis,
            l = "x" === n.axis ? a : r,
            h = "x" === o.axis ? a : r,
            c = [];
          var d, u, f, g;
          for (d = i, u = i + s; d < u; ++d) g = e[d], f = {}, f[n.axis] = n.parse(M(g, l), d), c.push(zn(M(g, h), f, o, d));
          return c;
        }
      }, {
        key: "updateRangeFromParsed",
        value: function updateRangeFromParsed(t, e, i, s) {
          _get2(_getPrototypeOf(BarController.prototype), "updateRangeFromParsed", this).call(this, t, e, i, s);
          var n = i._custom;
          n && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, n.min), t.max = Math.max(t.max, n.max));
        }
      }, {
        key: "getMaxOverflow",
        value: function getMaxOverflow() {
          return 0;
        }
      }, {
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t),
            o = n._custom,
            a = Vn(o) ? "[" + o.start + ", " + o.end + "]" : "" + s.getLabelForValue(n[s.axis]);
          return {
            label: "" + i.getLabelForValue(n[i.axis]),
            value: a
          };
        }
      }, {
        key: "initialize",
        value: function initialize() {
          this.enableOptionSharing = !0, _get2(_getPrototypeOf(BarController.prototype), "initialize", this).call(this);
          this._cachedMeta.stack = this.getDataset().stack;
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, n) {
          var o = "reset" === n,
            a = this.index,
            r = this._cachedMeta.vScale,
            l = r.getBasePixel(),
            h = r.isHorizontal(),
            c = this._getRuler(),
            _this$_getSharedOptio2 = this._getSharedOptions(e, n),
            d = _this$_getSharedOptio2.sharedOptions,
            u = _this$_getSharedOptio2.includeOptions;
          for (var _f3 = e; _f3 < e + i; _f3++) {
            var _e55 = this.getParsed(_f3),
              _i46 = o || s(_e55[r.axis]) ? {
                base: l,
                head: l
              } : this._calculateBarValuePixels(_f3),
              _g4 = this._calculateBarIndexPixels(_f3, c),
              _p4 = (_e55._stacks || {})[r.axis],
              _m4 = {
                horizontal: h,
                base: _i46.base,
                enableBorderRadius: !_p4 || Vn(_e55._custom) || a === _p4._top || a === _p4._bottom,
                x: h ? _i46.head : _g4.center,
                y: h ? _g4.center : _i46.head,
                height: h ? _g4.size : Math.abs(_i46.size),
                width: h ? Math.abs(_i46.size) : _g4.size
              };
            u && (_m4.options = d || this.resolveDataElementOptions(_f3, t[_f3].active ? "active" : n));
            var _b2 = _m4.options || t[_f3].options;
            Bn(_m4, _b2, _p4, a), Hn(_m4, _b2, c.ratio), this.updateElement(t[_f3], _f3, _m4, n);
          }
        }
      }, {
        key: "_getStacks",
        value: function _getStacks(t, e) {
          var i = this._cachedMeta.iScale,
            n = i.getMatchingVisibleMetas(this._type).filter(function (t) {
              return t.controller.options.grouped;
            }),
            o = i.options.stacked,
            a = [],
            r = function r(t) {
              var i = t.controller.getParsed(e),
                n = i && i[t.vScale.axis];
              if (s(n) || isNaN(n)) return !0;
            };
          var _iterator26 = _createForOfIteratorHelper(n),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _i47 = _step26.value;
              if ((void 0 === e || !r(_i47)) && ((!1 === o || -1 === a.indexOf(_i47.stack) || void 0 === o && void 0 === _i47.stack) && a.push(_i47.stack), _i47.index === t)) break;
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          return a.length || a.push(void 0), a;
        }
      }, {
        key: "_getStackCount",
        value: function _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
      }, {
        key: "_getStackIndex",
        value: function _getStackIndex(t, e, i) {
          var s = this._getStacks(t, i),
            n = void 0 !== e ? s.indexOf(e) : -1;
          return -1 === n ? s.length - 1 : n;
        }
      }, {
        key: "_getRuler",
        value: function _getRuler() {
          var t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            s = [];
          var n, o;
          for (n = 0, o = e.data.length; n < o; ++n) s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
          var a = t.barThickness;
          return {
            min: a || In(e),
            pixels: s,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage
          };
        }
      }, {
        key: "_calculateBarValuePixels",
        value: function _calculateBarValuePixels(t) {
          var _this$_cachedMeta = this._cachedMeta,
            e = _this$_cachedMeta.vScale,
            i = _this$_cachedMeta._stacked,
            n = _this$_cachedMeta.index,
            _this$options10 = this.options,
            o = _this$options10.base,
            a = _this$options10.minBarLength,
            r = o || 0,
            l = this.getParsed(t),
            h = l._custom,
            c = Vn(h);
          var d,
            u,
            f = l[e.axis],
            g = 0,
            p = i ? this.applyStack(e, l, i) : f;
          p !== f && (g = p - f, p = f), c && (f = h.barStart, p = h.barEnd - h.barStart, 0 !== f && F(f) !== F(h.barEnd) && (g = 0), g += f);
          var m = s(o) || c ? g : o;
          var b = e.getPixelForValue(m);
          if (d = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + p) : b, u = d - b, Math.abs(u) < a) {
            u = function (t, e, i) {
              return 0 !== t ? F(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
            }(u, e, r) * a, f === r && (b -= u / 2);
            var _t50 = e.getPixelForDecimal(0),
              _s39 = e.getPixelForDecimal(1),
              _o28 = Math.min(_t50, _s39),
              _h12 = Math.max(_t50, _s39);
            b = Math.max(Math.min(b, _h12), _o28), d = b + u, i && !c && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(d) - e.getValueForPixel(b));
          }
          if (b === e.getPixelForValue(r)) {
            var _t51 = F(u) * e.getLineWidthForValue(r) / 2;
            b += _t51, u -= _t51;
          }
          return {
            size: u,
            base: b,
            head: d,
            center: d + u / 2
          };
        }
      }, {
        key: "_calculateBarIndexPixels",
        value: function _calculateBarIndexPixels(t, e) {
          var i = e.scale,
            n = this.options,
            o = n.skipNull,
            a = l(n.maxBarThickness, 1 / 0);
          var r, h;
          if (e.grouped) {
            var _i48 = o ? this._getStackCount(t) : e.stackCount,
              _l14 = "flex" === n.barThickness ? function (t, e, i, s) {
                var n = e.pixels,
                  o = n[t];
                var a = t > 0 ? n[t - 1] : null,
                  r = t < n.length - 1 ? n[t + 1] : null;
                var l = i.categoryPercentage;
                null === a && (a = o - (null === r ? e.end - e.start : r - o)), null === r && (r = o + o - a);
                var h = o - (o - Math.min(a, r)) / 2 * l;
                return {
                  chunk: Math.abs(r - a) / 2 * l / s,
                  ratio: i.barPercentage,
                  start: h
                };
              }(t, e, n, _i48) : function (t, e, i, n) {
                var o = i.barThickness;
                var a, r;
                return s(o) ? (a = e.min * i.categoryPercentage, r = i.barPercentage) : (a = o * n, r = 1), {
                  chunk: a / n,
                  ratio: r,
                  start: e.pixels[t] - a / 2
                };
              }(t, e, n, _i48),
              _c9 = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
            r = _l14.start + _l14.chunk * _c9 + _l14.chunk / 2, h = Math.min(a, _l14.chunk * _l14.ratio);
          } else r = i.getPixelForValue(this.getParsed(t)[i.axis], t), h = Math.min(a, e.min * e.ratio);
          return {
            base: r - h / 2,
            head: r + h / 2,
            center: r,
            size: h
          };
        }
      }, {
        key: "draw",
        value: function draw() {
          var t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            s = i.length;
          var n = 0;
          for (; n < s; ++n) null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
        }
      }]);
    }(Ns), _defineProperty(_Class, "id", "bar"), _defineProperty(_Class, "defaults", {
      datasetElementType: !1,
      dataElementType: "bar",
      categoryPercentage: .8,
      barPercentage: .9,
      grouped: !0,
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "base", "width", "height"]
        }
      }
    }), _defineProperty(_Class, "overrides", {
      scales: {
        _index_: {
          type: "category",
          offset: !0,
          grid: {
            offset: !0
          }
        },
        _value_: {
          type: "linear",
          beginAtZero: !0
        }
      }
    }), _Class),
    BubbleController: (_Class2 = /*#__PURE__*/function (_Ns5) {
      function BubbleController() {
        _classCallCheck(this, BubbleController);
        return _callSuper(this, BubbleController, arguments);
      }
      _inherits(BubbleController, _Ns5);
      return _createClass(BubbleController, [{
        key: "initialize",
        value: function initialize() {
          this.enableOptionSharing = !0, _get2(_getPrototypeOf(BubbleController.prototype), "initialize", this).call(this);
        }
      }, {
        key: "parsePrimitiveData",
        value: function parsePrimitiveData(t, e, i, s) {
          var n = _get2(_getPrototypeOf(BubbleController.prototype), "parsePrimitiveData", this).call(this, t, e, i, s);
          for (var _t52 = 0; _t52 < n.length; _t52++) n[_t52]._custom = this.resolveDataElementOptions(_t52 + i).radius;
          return n;
        }
      }, {
        key: "parseArrayData",
        value: function parseArrayData(t, e, i, s) {
          var n = _get2(_getPrototypeOf(BubbleController.prototype), "parseArrayData", this).call(this, t, e, i, s);
          for (var _t53 = 0; _t53 < n.length; _t53++) {
            var _s40 = e[i + _t53];
            n[_t53]._custom = l(_s40[2], this.resolveDataElementOptions(_t53 + i).radius);
          }
          return n;
        }
      }, {
        key: "parseObjectData",
        value: function parseObjectData(t, e, i, s) {
          var n = _get2(_getPrototypeOf(BubbleController.prototype), "parseObjectData", this).call(this, t, e, i, s);
          for (var _t54 = 0; _t54 < n.length; _t54++) {
            var _s41 = e[i + _t54];
            n[_t54]._custom = l(_s41 && _s41.r && +_s41.r, this.resolveDataElementOptions(_t54 + i).radius);
          }
          return n;
        }
      }, {
        key: "getMaxOverflow",
        value: function getMaxOverflow() {
          var t = this._cachedMeta.data;
          var e = 0;
          for (var _i49 = t.length - 1; _i49 >= 0; --_i49) e = Math.max(e, t[_i49].size(this.resolveDataElementOptions(_i49)) / 2);
          return e > 0 && e;
        }
      }, {
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = this.chart.data.labels || [],
            s = e.xScale,
            n = e.yScale,
            o = this.getParsed(t),
            a = s.getLabelForValue(o.x),
            r = n.getLabelForValue(o.y),
            l = o._custom;
          return {
            label: i[t] || "",
            value: "(" + a + ", " + r + (l ? ", " + l : "") + ")"
          };
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, s) {
          var n = "reset" === s,
            _this$_cachedMeta2 = this._cachedMeta,
            o = _this$_cachedMeta2.iScale,
            a = _this$_cachedMeta2.vScale,
            _this$_getSharedOptio3 = this._getSharedOptions(e, s),
            r = _this$_getSharedOptio3.sharedOptions,
            l = _this$_getSharedOptio3.includeOptions,
            h = o.axis,
            c = a.axis;
          for (var _d9 = e; _d9 < e + i; _d9++) {
            var _e56 = t[_d9],
              _i50 = !n && this.getParsed(_d9),
              _u4 = {},
              _f4 = _u4[h] = n ? o.getPixelForDecimal(.5) : o.getPixelForValue(_i50[h]),
              _g5 = _u4[c] = n ? a.getBasePixel() : a.getPixelForValue(_i50[c]);
            _u4.skip = isNaN(_f4) || isNaN(_g5), l && (_u4.options = r || this.resolveDataElementOptions(_d9, _e56.active ? "active" : s), n && (_u4.options.radius = 0)), this.updateElement(_e56, _d9, _u4, s);
          }
        }
      }, {
        key: "resolveDataElementOptions",
        value: function resolveDataElementOptions(t, e) {
          var i = this.getParsed(t);
          var s = _get2(_getPrototypeOf(BubbleController.prototype), "resolveDataElementOptions", this).call(this, t, e);
          s.$shared && (s = Object.assign({}, s, {
            $shared: !1
          }));
          var n = s.radius;
          return "active" !== e && (s.radius = 0), s.radius += l(i && i._custom, n), s;
        }
      }]);
    }(Ns), _defineProperty(_Class2, "id", "bubble"), _defineProperty(_Class2, "defaults", {
      datasetElementType: !1,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "borderWidth", "radius"]
        }
      }
    }), _defineProperty(_Class2, "overrides", {
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    }), _Class2),
    DoughnutController: jn,
    LineController: (_Class3 = /*#__PURE__*/function (_Ns6) {
      function LineController() {
        _classCallCheck(this, LineController);
        return _callSuper(this, LineController, arguments);
      }
      _inherits(LineController, _Ns6);
      return _createClass(LineController, [{
        key: "initialize",
        value: function initialize() {
          this.enableOptionSharing = !0, this.supportsDecimation = !0, _get2(_getPrototypeOf(LineController.prototype), "initialize", this).call(this);
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta,
            i = e.dataset,
            _e$data = e.data,
            s = _e$data === void 0 ? [] : _e$data,
            n = e._dataset,
            o = this.chart._animationsDisabled;
          var _pt = pt(e, s, o),
            a = _pt.start,
            r = _pt.count;
          this._drawStart = a, this._drawCount = r, mt(e) && (a = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!n._decimated, i.points = s;
          var l = this.resolveDatasetElementOptions(t);
          this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
            animated: !o,
            options: l
          }, t), this.updateElements(s, a, r, t);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, n) {
          var o = "reset" === n,
            _this$_cachedMeta3 = this._cachedMeta,
            a = _this$_cachedMeta3.iScale,
            r = _this$_cachedMeta3.vScale,
            l = _this$_cachedMeta3._stacked,
            h = _this$_cachedMeta3._dataset,
            _this$_getSharedOptio4 = this._getSharedOptions(e, n),
            c = _this$_getSharedOptio4.sharedOptions,
            d = _this$_getSharedOptio4.includeOptions,
            u = a.axis,
            f = r.axis,
            _this$options11 = this.options,
            g = _this$options11.spanGaps,
            p = _this$options11.segment,
            m = N(g) ? g : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || o || "none" === n,
            x = e + i,
            _ = t.length;
          var y = e > 0 && this.getParsed(e - 1);
          for (var _i51 = 0; _i51 < _; ++_i51) {
            var _g6 = t[_i51],
              _2 = b ? _g6 : {};
            if (_i51 < e || _i51 >= x) {
              _2.skip = !0;
              continue;
            }
            var _v = this.getParsed(_i51),
              _M = s(_v[f]),
              _w = _2[u] = a.getPixelForValue(_v[u], _i51),
              _k = _2[f] = o || _M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, _v, l) : _v[f], _i51);
            _2.skip = isNaN(_w) || isNaN(_k) || _M, _2.stop = _i51 > 0 && Math.abs(_v[u] - y[u]) > m, p && (_2.parsed = _v, _2.raw = h.data[_i51]), d && (_2.options = c || this.resolveDataElementOptions(_i51, _g6.active ? "active" : n)), b || this.updateElement(_g6, _i51, _2, n), y = _v;
          }
        }
      }, {
        key: "getMaxOverflow",
        value: function getMaxOverflow() {
          var t = this._cachedMeta,
            e = t.dataset,
            i = e.options && e.options.borderWidth || 0,
            s = t.data || [];
          if (!s.length) return i;
          var n = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
          return Math.max(i, n, o) / 2;
        }
      }, {
        key: "draw",
        value: function draw() {
          var t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), _get2(_getPrototypeOf(LineController.prototype), "draw", this).call(this);
        }
      }]);
    }(Ns), _defineProperty(_Class3, "id", "line"), _defineProperty(_Class3, "defaults", {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: !0,
      spanGaps: !1
    }), _defineProperty(_Class3, "overrides", {
      scales: {
        _index_: {
          type: "category"
        },
        _value_: {
          type: "linear"
        }
      }
    }), _Class3),
    PieController: (_Class4 = /*#__PURE__*/function (_jn2) {
      function PieController() {
        _classCallCheck(this, PieController);
        return _callSuper(this, PieController, arguments);
      }
      _inherits(PieController, _jn2);
      return _createClass(PieController);
    }(jn), _defineProperty(_Class4, "id", "pie"), _defineProperty(_Class4, "defaults", {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%"
    }), _Class4),
    PolarAreaController: $n,
    RadarController: (_Class5 = /*#__PURE__*/function (_Ns7) {
      function RadarController() {
        _classCallCheck(this, RadarController);
        return _callSuper(this, RadarController, arguments);
      }
      _inherits(RadarController, _Ns7);
      return _createClass(RadarController, [{
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta.vScale,
            i = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(i[e.axis])
          };
        }
      }, {
        key: "parseObjectData",
        value: function parseObjectData(t, e, i, s) {
          return ii.bind(this)(t, e, i, s);
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta,
            i = e.dataset,
            s = e.data || [],
            n = e.iScale.getLabels();
          if (i.points = s, "resize" !== t) {
            var _e57 = this.resolveDatasetElementOptions(t);
            this.options.showLine || (_e57.borderWidth = 0);
            var _o29 = {
              _loop: !0,
              _fullLoop: n.length === s.length,
              options: _e57
            };
            this.updateElement(i, void 0, _o29, t);
          }
          this.updateElements(s, 0, s.length, t);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, s) {
          var n = this._cachedMeta.rScale,
            o = "reset" === s;
          for (var _a17 = e; _a17 < e + i; _a17++) {
            var _e58 = t[_a17],
              _i52 = this.resolveDataElementOptions(_a17, _e58.active ? "active" : s),
              _r14 = n.getPointPositionForValue(_a17, this.getParsed(_a17).r),
              _l15 = o ? n.xCenter : _r14.x,
              _h13 = o ? n.yCenter : _r14.y,
              _c10 = {
                x: _l15,
                y: _h13,
                angle: _r14.angle,
                skip: isNaN(_l15) || isNaN(_h13),
                options: _i52
              };
            this.updateElement(_e58, _a17, _c10, s);
          }
        }
      }]);
    }(Ns), _defineProperty(_Class5, "id", "radar"), _defineProperty(_Class5, "defaults", {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: !0,
      elements: {
        line: {
          fill: "start"
        }
      }
    }), _defineProperty(_Class5, "overrides", {
      aspectRatio: 1,
      scales: {
        r: {
          type: "radialLinear"
        }
      }
    }), _Class5),
    ScatterController: (_Class6 = /*#__PURE__*/function (_Ns8) {
      function ScatterController() {
        _classCallCheck(this, ScatterController);
        return _callSuper(this, ScatterController, arguments);
      }
      _inherits(ScatterController, _Ns8);
      return _createClass(ScatterController, [{
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = this.chart.data.labels || [],
            s = e.xScale,
            n = e.yScale,
            o = this.getParsed(t),
            a = s.getLabelForValue(o.x),
            r = n.getLabelForValue(o.y);
          return {
            label: i[t] || "",
            value: "(" + a + ", " + r + ")"
          };
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta,
            _e$data2 = e.data,
            i = _e$data2 === void 0 ? [] : _e$data2,
            s = this.chart._animationsDisabled;
          var _pt2 = pt(e, i, s),
            n = _pt2.start,
            o = _pt2.count;
          if (this._drawStart = n, this._drawCount = o, mt(e) && (n = 0, o = i.length), this.options.showLine) {
            this.datasetElementType || this.addElements();
            var _n27 = e.dataset,
              _o30 = e._dataset;
            _n27._chart = this.chart, _n27._datasetIndex = this.index, _n27._decimated = !!_o30._decimated, _n27.points = i;
            var _a18 = this.resolveDatasetElementOptions(t);
            _a18.segment = this.options.segment, this.updateElement(_n27, void 0, {
              animated: !s,
              options: _a18
            }, t);
          } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
          this.updateElements(i, n, o, t);
        }
      }, {
        key: "addElements",
        value: function addElements() {
          var t = this.options.showLine;
          !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), _get2(_getPrototypeOf(ScatterController.prototype), "addElements", this).call(this);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, n) {
          var o = "reset" === n,
            _this$_cachedMeta4 = this._cachedMeta,
            a = _this$_cachedMeta4.iScale,
            r = _this$_cachedMeta4.vScale,
            l = _this$_cachedMeta4._stacked,
            h = _this$_cachedMeta4._dataset,
            c = this.resolveDataElementOptions(e, n),
            d = this.getSharedOptions(c),
            u = this.includeOptions(n, d),
            f = a.axis,
            g = r.axis,
            _this$options12 = this.options,
            p = _this$options12.spanGaps,
            m = _this$options12.segment,
            b = N(p) ? p : Number.POSITIVE_INFINITY,
            x = this.chart._animationsDisabled || o || "none" === n;
          var _ = e > 0 && this.getParsed(e - 1);
          for (var _c11 = e; _c11 < e + i; ++_c11) {
            var _e59 = t[_c11],
              _i53 = this.getParsed(_c11),
              _p5 = x ? _e59 : {},
              _y = s(_i53[g]),
              _v2 = _p5[f] = a.getPixelForValue(_i53[f], _c11),
              _M2 = _p5[g] = o || _y ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, _i53, l) : _i53[g], _c11);
            _p5.skip = isNaN(_v2) || isNaN(_M2) || _y, _p5.stop = _c11 > 0 && Math.abs(_i53[f] - _[f]) > b, m && (_p5.parsed = _i53, _p5.raw = h.data[_c11]), u && (_p5.options = d || this.resolveDataElementOptions(_c11, _e59.active ? "active" : n)), x || this.updateElement(_e59, _c11, _p5, n), _ = _i53;
          }
          this.updateSharedOptions(d, n, c);
        }
      }, {
        key: "getMaxOverflow",
        value: function getMaxOverflow() {
          var t = this._cachedMeta,
            e = t.data || [];
          if (!this.options.showLine) {
            var _t55 = 0;
            for (var _i54 = e.length - 1; _i54 >= 0; --_i54) _t55 = Math.max(_t55, e[_i54].size(this.resolveDataElementOptions(_i54)) / 2);
            return _t55 > 0 && _t55;
          }
          var i = t.dataset,
            s = i.options && i.options.borderWidth || 0;
          if (!e.length) return s;
          var n = e[0].size(this.resolveDataElementOptions(0)),
            o = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
          return Math.max(s, n, o) / 2;
        }
      }]);
    }(Ns), _defineProperty(_Class6, "id", "scatter"), _defineProperty(_Class6, "defaults", {
      datasetElementType: !1,
      dataElementType: "point",
      showLine: !1,
      fill: !1
    }), _defineProperty(_Class6, "overrides", {
      interaction: {
        mode: "point"
      },
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    }), _Class6)
  });
  function Un(t, e, i, s) {
    var n = vi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
    var o = (i - e) / 2,
      a = Math.min(o, s * e / 2),
      r = function r(t) {
        var e = (i - Math.min(o, t)) * s / 2;
        return J(t, 0, Math.min(o, e));
      };
    return {
      outerStart: r(n.outerStart),
      outerEnd: r(n.outerEnd),
      innerStart: J(n.innerStart, 0, a),
      innerEnd: J(n.innerEnd, 0, a)
    };
  }
  function Xn(t, e, i, s) {
    return {
      x: i + t * Math.cos(e),
      y: s + t * Math.sin(e)
    };
  }
  function qn(t, e, i, s, n, o) {
    var a = e.x,
      r = e.y,
      l = e.startAngle,
      h = e.pixelMargin,
      c = e.innerRadius,
      d = Math.max(e.outerRadius + s + i - h, 0),
      u = c > 0 ? c + s + i + h : 0;
    var f = 0;
    var g = n - l;
    if (s) {
      var _t56 = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
      f = (g - (0 !== _t56 ? g * _t56 / (_t56 + s) : g)) / 2;
    }
    var p = (g - Math.max(.001, g * d - i / C) / d) / 2,
      m = l + p + f,
      b = n - p - f,
      _Un = Un(e, u, d, b - m),
      x = _Un.outerStart,
      _ = _Un.outerEnd,
      y = _Un.innerStart,
      v = _Un.innerEnd,
      M = d - x,
      w = d - _,
      k = m + x / M,
      S = b - _ / w,
      P = u + y,
      D = u + v,
      O = m + y / P,
      A = b - v / D;
    if (t.beginPath(), o) {
      var _e60 = (k + S) / 2;
      if (t.arc(a, r, d, k, _e60), t.arc(a, r, d, _e60, S), _ > 0) {
        var _e61 = Xn(w, S, a, r);
        t.arc(_e61.x, _e61.y, _, S, b + E);
      }
      var _i55 = Xn(D, b, a, r);
      if (t.lineTo(_i55.x, _i55.y), v > 0) {
        var _e62 = Xn(D, A, a, r);
        t.arc(_e62.x, _e62.y, v, b + E, A + Math.PI);
      }
      var _s42 = (b - v / u + (m + y / u)) / 2;
      if (t.arc(a, r, u, b - v / u, _s42, !0), t.arc(a, r, u, _s42, m + y / u, !0), y > 0) {
        var _e63 = Xn(P, O, a, r);
        t.arc(_e63.x, _e63.y, y, O + Math.PI, m - E);
      }
      var _n28 = Xn(M, m, a, r);
      if (t.lineTo(_n28.x, _n28.y), x > 0) {
        var _e64 = Xn(M, k, a, r);
        t.arc(_e64.x, _e64.y, x, m - E, k);
      }
    } else {
      t.moveTo(a, r);
      var _e65 = Math.cos(k) * d + a,
        _i56 = Math.sin(k) * d + r;
      t.lineTo(_e65, _i56);
      var _s43 = Math.cos(S) * d + a,
        _n29 = Math.sin(S) * d + r;
      t.lineTo(_s43, _n29);
    }
    t.closePath();
  }
  function Kn(t, e, i, s, n) {
    var o = e.fullCircles,
      a = e.startAngle,
      r = e.circumference,
      l = e.options,
      h = l.borderWidth,
      c = l.borderJoinStyle,
      d = l.borderDash,
      u = l.borderDashOffset,
      f = "inner" === l.borderAlign;
    if (!h) return;
    t.setLineDash(d || []), t.lineDashOffset = u, f ? (t.lineWidth = 2 * h, t.lineJoin = c || "round") : (t.lineWidth = h, t.lineJoin = c || "bevel");
    var g = e.endAngle;
    if (o) {
      qn(t, e, i, s, g, n);
      for (var _e66 = 0; _e66 < o; ++_e66) t.stroke();
      isNaN(r) || (g = a + (r % O || O));
    }
    f && function (t, e, i) {
      var s = e.startAngle,
        n = e.pixelMargin,
        o = e.x,
        a = e.y,
        r = e.outerRadius,
        l = e.innerRadius;
      var h = n / r;
      t.beginPath(), t.arc(o, a, r, s - h, i + h), l > n ? (h = n / l, t.arc(o, a, l, i + h, s - h, !0)) : t.arc(o, a, n, i + E, s - E), t.closePath(), t.clip();
    }(t, e, g), o || (qn(t, e, i, s, g, n), t.stroke());
  }
  function Gn(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
    t.lineCap = l(i.borderCapStyle, e.borderCapStyle), t.setLineDash(l(i.borderDash, e.borderDash)), t.lineDashOffset = l(i.borderDashOffset, e.borderDashOffset), t.lineJoin = l(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = l(i.borderWidth, e.borderWidth), t.strokeStyle = l(i.borderColor, e.borderColor);
  }
  function Zn(t, e, i) {
    t.lineTo(i.x, i.y);
  }
  function Jn(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s = t.length,
      _i$start = i.start,
      n = _i$start === void 0 ? 0 : _i$start,
      _i$end = i.end,
      o = _i$end === void 0 ? s - 1 : _i$end,
      a = e.start,
      r = e.end,
      l = Math.max(n, a),
      h = Math.min(o, r),
      c = n < a && o < a || n > r && o > r;
    return {
      count: s,
      start: l,
      loop: e.loop,
      ilen: h < l && !c ? s + h - l : h - l
    };
  }
  function Qn(t, e, i, s) {
    var n = e.points,
      o = e.options,
      _Jn = Jn(n, i, s),
      a = _Jn.count,
      r = _Jn.start,
      l = _Jn.loop,
      h = _Jn.ilen,
      c = function (t) {
        return t.stepped ? Fe : t.tension || "monotone" === t.cubicInterpolationMode ? Ve : Zn;
      }(o);
    var d,
      u,
      f,
      _ref13 = s || {},
      _ref13$move = _ref13.move,
      g = _ref13$move === void 0 ? !0 : _ref13$move,
      p = _ref13.reverse;
    for (d = 0; d <= h; ++d) u = n[(r + (p ? h - d : d)) % a], u.skip || (g ? (t.moveTo(u.x, u.y), g = !1) : c(t, f, u, p, o.stepped), f = u);
    return l && (u = n[(r + (p ? h : 0)) % a], c(t, f, u, p, o.stepped)), !!l;
  }
  function to(t, e, i, s) {
    var n = e.points,
      _Jn2 = Jn(n, i, s),
      o = _Jn2.count,
      a = _Jn2.start,
      r = _Jn2.ilen,
      _ref14 = s || {},
      _ref14$move = _ref14.move,
      l = _ref14$move === void 0 ? !0 : _ref14$move,
      h = _ref14.reverse;
    var c,
      d,
      u,
      f,
      g,
      p,
      m = 0,
      b = 0;
    var x = function x(t) {
        return (a + (h ? r - t : t)) % o;
      },
      _ = function _() {
        f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
      };
    for (l && (d = n[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
      if (d = n[x(c)], d.skip) continue;
      var _e67 = d.x,
        _i57 = d.y,
        _s44 = 0 | _e67;
      _s44 === u ? (_i57 < f ? f = _i57 : _i57 > g && (g = _i57), m = (b * m + _e67) / ++b) : (_(), t.lineTo(_e67, _i57), u = _s44, b = 0, f = g = _i57), p = _i57;
    }
    _();
  }
  function eo(t) {
    var e = t.options,
      i = e.borderDash && e.borderDash.length;
    return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i) ? to : Qn;
  }
  var io = "function" == typeof Path2D;
  function so(t, e, i, s) {
    io && !e.options.segment ? function (t, e, i, s) {
      var n = e._path;
      n || (n = e._path = new Path2D(), e.path(n, i, s) && n.closePath()), Gn(t, e.options), t.stroke(n);
    }(t, e, i, s) : function (t, e, i, s) {
      var n = e.segments,
        o = e.options,
        a = eo(e);
      var _iterator27 = _createForOfIteratorHelper(n),
        _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
          var _r15 = _step27.value;
          Gn(t, o, _r15.style), t.beginPath(), a(t, e, _r15, {
            start: i,
            end: i + s - 1
          }) && t.closePath(), t.stroke();
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
    }(t, e, i, s);
  }
  var no = /*#__PURE__*/function (_Hs3) {
    function no(t) {
      var _this24;
      _classCallCheck(this, no);
      _this24 = _callSuper(this, no), _this24.animated = !0, _this24.options = void 0, _this24._chart = void 0, _this24._loop = void 0, _this24._fullLoop = void 0, _this24._path = void 0, _this24._points = void 0, _this24._segments = void 0, _this24._decimated = !1, _this24._pointsUpdated = !1, _this24._datasetIndex = void 0, t && Object.assign(_assertThisInitialized(_this24), t);
      return _this24;
    }
    _inherits(no, _Hs3);
    return _createClass(no, [{
      key: "updateControlPoints",
      value: function updateControlPoints(t, e) {
        var i = this.options;
        if ((i.tension || "monotone" === i.cubicInterpolationMode) && !i.stepped && !this._pointsUpdated) {
          var _s45 = i.spanGaps ? this._loop : this._fullLoop;
          hi(this._points, i, t, _s45, e), this._pointsUpdated = !0;
        }
      }
    }, {
      key: "points",
      get: function get() {
        return this._points;
      },
      set: function set(t) {
        this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
      }
    }, {
      key: "segments",
      get: function get() {
        return this._segments || (this._segments = zi(this, this.options.segment));
      }
    }, {
      key: "first",
      value: function first() {
        var t = this.segments,
          e = this.points;
        return t.length && e[t[0].start];
      }
    }, {
      key: "last",
      value: function last() {
        var t = this.segments,
          e = this.points,
          i = t.length;
        return i && e[t[i - 1].end];
      }
    }, {
      key: "interpolate",
      value: function interpolate(t, e) {
        var i = this.options,
          s = t[e],
          n = this.points,
          o = Ii(this, {
            property: e,
            start: s,
            end: s
          });
        if (!o.length) return;
        var a = [],
          r = function (t) {
            return t.stepped ? pi : t.tension || "monotone" === t.cubicInterpolationMode ? mi : gi;
          }(i);
        var l, h;
        for (l = 0, h = o.length; l < h; ++l) {
          var _o$l = o[l],
            _h14 = _o$l.start,
            _c12 = _o$l.end,
            _d10 = n[_h14],
            _u5 = n[_c12];
          if (_d10 === _u5) {
            a.push(_d10);
            continue;
          }
          var _f5 = r(_d10, _u5, Math.abs((s - _d10[e]) / (_u5[e] - _d10[e])), i.stepped);
          _f5[e] = t[e], a.push(_f5);
        }
        return 1 === a.length ? a[0] : a;
      }
    }, {
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        return eo(this)(t, this, e, i);
      }
    }, {
      key: "path",
      value: function path(t, e, i) {
        var s = this.segments,
          n = eo(this);
        var o = this._loop;
        e = e || 0, i = i || this.points.length - e;
        var _iterator28 = _createForOfIteratorHelper(s),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _a19 = _step28.value;
            o &= n(t, this, _a19, {
              start: e,
              end: e + i - 1
            });
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
        return !!o;
      }
    }, {
      key: "draw",
      value: function draw(t, e, i, s) {
        var n = this.options || {};
        (this.points || []).length && n.borderWidth && (t.save(), so(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
      }
    }]);
  }(Hs);
  _defineProperty(no, "id", "line");
  _defineProperty(no, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  });
  _defineProperty(no, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  });
  _defineProperty(no, "descriptors", {
    _scriptable: !0,
    _indexable: function _indexable(t) {
      return "borderDash" !== t && "fill" !== t;
    }
  });
  function oo(t, e, i, s) {
    var n = t.options,
      _t$getProps2 = t.getProps([i], s),
      o = _t$getProps2[i];
    return Math.abs(e - o) < n.radius + n.hitRadius;
  }
  function ao(t, e) {
    var _t$getProps3 = t.getProps(["x", "y", "base", "width", "height"], e),
      i = _t$getProps3.x,
      s = _t$getProps3.y,
      n = _t$getProps3.base,
      o = _t$getProps3.width,
      a = _t$getProps3.height;
    var r, l, h, c, d;
    return t.horizontal ? (d = a / 2, r = Math.min(i, n), l = Math.max(i, n), h = s - d, c = s + d) : (d = o / 2, r = i - d, l = i + d, h = Math.min(s, n), c = Math.max(s, n)), {
      left: r,
      top: h,
      right: l,
      bottom: c
    };
  }
  function ro(t, e, i, s) {
    return t ? 0 : J(e, i, s);
  }
  function lo(t) {
    var e = ao(t),
      i = e.right - e.left,
      s = e.bottom - e.top,
      n = function (t, e, i) {
        var s = t.options.borderWidth,
          n = t.borderSkipped,
          o = Mi(s);
        return {
          t: ro(n.top, o.top, 0, i),
          r: ro(n.right, o.right, 0, e),
          b: ro(n.bottom, o.bottom, 0, i),
          l: ro(n.left, o.left, 0, e)
        };
      }(t, i / 2, s / 2),
      a = function (t, e, i) {
        var _t$getProps4 = t.getProps(["enableBorderRadius"]),
          s = _t$getProps4.enableBorderRadius,
          n = t.options.borderRadius,
          a = wi(n),
          r = Math.min(e, i),
          l = t.borderSkipped,
          h = s || o(n);
        return {
          topLeft: ro(!h || l.top || l.left, a.topLeft, 0, r),
          topRight: ro(!h || l.top || l.right, a.topRight, 0, r),
          bottomLeft: ro(!h || l.bottom || l.left, a.bottomLeft, 0, r),
          bottomRight: ro(!h || l.bottom || l.right, a.bottomRight, 0, r)
        };
      }(t, i / 2, s / 2);
    return {
      outer: {
        x: e.left,
        y: e.top,
        w: i,
        h: s,
        radius: a
      },
      inner: {
        x: e.left + n.l,
        y: e.top + n.t,
        w: i - n.l - n.r,
        h: s - n.t - n.b,
        radius: {
          topLeft: Math.max(0, a.topLeft - Math.max(n.t, n.l)),
          topRight: Math.max(0, a.topRight - Math.max(n.t, n.r)),
          bottomLeft: Math.max(0, a.bottomLeft - Math.max(n.b, n.l)),
          bottomRight: Math.max(0, a.bottomRight - Math.max(n.b, n.r))
        }
      }
    };
  }
  function ho(t, e, i, s) {
    var n = null === e,
      o = null === i,
      a = t && !(n && o) && ao(t, s);
    return a && (n || tt(e, a.left, a.right)) && (o || tt(i, a.top, a.bottom));
  }
  function co(t, e) {
    t.rect(e.x, e.y, e.w, e.h);
  }
  function uo(t, e) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var s = t.x !== i.x ? -e : 0,
      n = t.y !== i.y ? -e : 0,
      o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
      a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
    return {
      x: t.x + s,
      y: t.y + n,
      w: t.w + o,
      h: t.h + a,
      radius: t.radius
    };
  }
  var fo = Object.freeze({
    __proto__: null,
    ArcElement: (_Class7 = /*#__PURE__*/function (_Hs4) {
      function ArcElement(t) {
        var _this25;
        _classCallCheck(this, ArcElement);
        (_this25 = _callSuper(this, ArcElement), _defineProperty(_assertThisInitialized(_this25), "circumference", void 0), _defineProperty(_assertThisInitialized(_this25), "endAngle", void 0), _defineProperty(_assertThisInitialized(_this25), "fullCircles", void 0), _defineProperty(_assertThisInitialized(_this25), "innerRadius", void 0), _defineProperty(_assertThisInitialized(_this25), "outerRadius", void 0), _defineProperty(_assertThisInitialized(_this25), "pixelMargin", void 0), _defineProperty(_assertThisInitialized(_this25), "startAngle", void 0)), _this25.options = void 0, _this25.circumference = void 0, _this25.startAngle = void 0, _this25.endAngle = void 0, _this25.innerRadius = void 0, _this25.outerRadius = void 0, _this25.pixelMargin = 0, _this25.fullCircles = 0, t && Object.assign(_assertThisInitialized(_this25), t);
        return _this25;
      }
      _inherits(ArcElement, _Hs4);
      return _createClass(ArcElement, [{
        key: "inRange",
        value: function inRange(t, e, i) {
          var s = this.getProps(["x", "y"], i),
            _X2 = X(s, {
              x: t,
              y: e
            }),
            n = _X2.angle,
            o = _X2.distance,
            _this$getProps2 = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
            a = _this$getProps2.startAngle,
            r = _this$getProps2.endAngle,
            h = _this$getProps2.innerRadius,
            c = _this$getProps2.outerRadius,
            d = _this$getProps2.circumference,
            u = (this.options.spacing + this.options.borderWidth) / 2,
            f = l(d, r - a) >= O || Z(n, a, r),
            g = tt(o, h + u, c + u);
          return f && g;
        }
      }, {
        key: "getCenterPoint",
        value: function getCenterPoint(t) {
          var _this$getProps3 = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t),
            e = _this$getProps3.x,
            i = _this$getProps3.y,
            s = _this$getProps3.startAngle,
            n = _this$getProps3.endAngle,
            o = _this$getProps3.innerRadius,
            a = _this$getProps3.outerRadius,
            _this$options13 = this.options,
            r = _this$options13.offset,
            l = _this$options13.spacing,
            h = (s + n) / 2,
            c = (o + a + l + r) / 2;
          return {
            x: e + Math.cos(h) * c,
            y: i + Math.sin(h) * c
          };
        }
      }, {
        key: "tooltipPosition",
        value: function tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
      }, {
        key: "draw",
        value: function draw(t) {
          var e = this.options,
            i = this.circumference,
            s = (e.offset || 0) / 4,
            n = (e.spacing || 0) / 2,
            o = e.circular;
          if (this.pixelMargin = "inner" === e.borderAlign ? .33 : 0, this.fullCircles = i > O ? Math.floor(i / O) : 0, 0 === i || this.innerRadius < 0 || this.outerRadius < 0) return;
          t.save();
          var a = (this.startAngle + this.endAngle) / 2;
          t.translate(Math.cos(a) * s, Math.sin(a) * s);
          var r = s * (1 - Math.sin(Math.min(C, i || 0)));
          t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, function (t, e, i, s, n) {
            var o = e.fullCircles,
              a = e.startAngle,
              r = e.circumference;
            var l = e.endAngle;
            if (o) {
              qn(t, e, i, s, l, n);
              for (var _e68 = 0; _e68 < o; ++_e68) t.fill();
              isNaN(r) || (l = a + (r % O || O));
            }
            qn(t, e, i, s, l, n), t.fill();
          }(t, this, r, n, o), Kn(t, this, r, n, o), t.restore();
        }
      }]);
    }(Hs), _defineProperty(_Class7, "id", "arc"), _defineProperty(_Class7, "defaults", {
      borderAlign: "center",
      borderColor: "#fff",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: !0
    }), _defineProperty(_Class7, "defaultRoutes", {
      backgroundColor: "backgroundColor"
    }), _defineProperty(_Class7, "descriptors", {
      _scriptable: !0,
      _indexable: function _indexable(t) {
        return "borderDash" !== t;
      }
    }), _Class7),
    BarElement: (_Class8 = /*#__PURE__*/function (_Hs5) {
      function BarElement(t) {
        var _this26;
        _classCallCheck(this, BarElement);
        _this26 = _callSuper(this, BarElement), _this26.options = void 0, _this26.horizontal = void 0, _this26.base = void 0, _this26.width = void 0, _this26.height = void 0, _this26.inflateAmount = void 0, t && Object.assign(_assertThisInitialized(_this26), t);
        return _this26;
      }
      _inherits(BarElement, _Hs5);
      return _createClass(BarElement, [{
        key: "draw",
        value: function draw(t) {
          var e = this.inflateAmount,
            _this$options14 = this.options,
            i = _this$options14.borderColor,
            s = _this$options14.backgroundColor,
            _lo = lo(this),
            n = _lo.inner,
            o = _lo.outer,
            a = (r = o.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? He : co;
          var r;
          t.save(), o.w === n.w && o.h === n.h || (t.beginPath(), a(t, uo(o, e, n)), t.clip(), a(t, uo(n, -e, o)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, uo(n, e)), t.fillStyle = s, t.fill(), t.restore();
        }
      }, {
        key: "inRange",
        value: function inRange(t, e, i) {
          return ho(this, t, e, i);
        }
      }, {
        key: "inXRange",
        value: function inXRange(t, e) {
          return ho(this, t, null, e);
        }
      }, {
        key: "inYRange",
        value: function inYRange(t, e) {
          return ho(this, null, t, e);
        }
      }, {
        key: "getCenterPoint",
        value: function getCenterPoint(t) {
          var _this$getProps4 = this.getProps(["x", "y", "base", "horizontal"], t),
            e = _this$getProps4.x,
            i = _this$getProps4.y,
            s = _this$getProps4.base,
            n = _this$getProps4.horizontal;
          return {
            x: n ? (e + s) / 2 : e,
            y: n ? i : (i + s) / 2
          };
        }
      }, {
        key: "getRange",
        value: function getRange(t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        }
      }]);
    }(Hs), _defineProperty(_Class8, "id", "bar"), _defineProperty(_Class8, "defaults", {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: "auto",
      pointStyle: void 0
    }), _defineProperty(_Class8, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    }), _Class8),
    LineElement: no,
    PointElement: (_Class9 = /*#__PURE__*/function (_Hs6) {
      function PointElement(t) {
        var _this27;
        _classCallCheck(this, PointElement);
        (_this27 = _callSuper(this, PointElement), _defineProperty(_assertThisInitialized(_this27), "parsed", void 0), _defineProperty(_assertThisInitialized(_this27), "skip", void 0), _defineProperty(_assertThisInitialized(_this27), "stop", void 0), _assertThisInitialized(_this27)), _this27.options = void 0, _this27.parsed = void 0, _this27.skip = void 0, _this27.stop = void 0, t && Object.assign(_assertThisInitialized(_this27), t);
        return _this27;
      }
      _inherits(PointElement, _Hs6);
      return _createClass(PointElement, [{
        key: "inRange",
        value: function inRange(t, e, i) {
          var s = this.options,
            _this$getProps5 = this.getProps(["x", "y"], i),
            n = _this$getProps5.x,
            o = _this$getProps5.y;
          return Math.pow(t - n, 2) + Math.pow(e - o, 2) < Math.pow(s.hitRadius + s.radius, 2);
        }
      }, {
        key: "inXRange",
        value: function inXRange(t, e) {
          return oo(this, t, "x", e);
        }
      }, {
        key: "inYRange",
        value: function inYRange(t, e) {
          return oo(this, t, "y", e);
        }
      }, {
        key: "getCenterPoint",
        value: function getCenterPoint(t) {
          var _this$getProps6 = this.getProps(["x", "y"], t),
            e = _this$getProps6.x,
            i = _this$getProps6.y;
          return {
            x: e,
            y: i
          };
        }
      }, {
        key: "size",
        value: function size(t) {
          var e = (t = t || this.options || {}).radius || 0;
          e = Math.max(e, e && t.hoverRadius || 0);
          return 2 * (e + (e && t.borderWidth || 0));
        }
      }, {
        key: "draw",
        value: function draw(t, e) {
          var i = this.options;
          this.skip || i.radius < .1 || !Re(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Le(t, i, this.x, this.y));
        }
      }, {
        key: "getRange",
        value: function getRange() {
          var t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }]);
    }(Hs), _defineProperty(_Class9, "id", "point"), _defineProperty(_Class9, "defaults", {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0
    }), _defineProperty(_Class9, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    }), _Class9)
  });
  function go(t, e, i, s) {
    var n = t.indexOf(e);
    if (-1 === n) return function (t, e, i, s) {
      return "string" == typeof e ? (i = t.push(e) - 1, s.unshift({
        index: i,
        label: e
      })) : isNaN(e) && (i = null), i;
    }(t, e, i, s);
    return n !== t.lastIndexOf(e) ? i : n;
  }
  function po(t) {
    var e = this.getLabels();
    return t >= 0 && t < e.length ? e[t] : t;
  }
  function mo(t, e, _ref15) {
    var i = _ref15.horizontal,
      s = _ref15.minRotation;
    var n = $(s),
      o = (i ? Math.sin(n) : Math.cos(n)) || .001,
      a = .75 * e * ("" + t).length;
    return Math.min(e / o, a);
  }
  var bo = /*#__PURE__*/function (_Js) {
    function bo(t) {
      var _this28;
      _classCallCheck(this, bo);
      _this28 = _callSuper(this, bo, [t]), _this28.start = void 0, _this28.end = void 0, _this28._startValue = void 0, _this28._endValue = void 0, _this28._valueRange = 0;
      return _this28;
    }
    _inherits(bo, _Js);
    return _createClass(bo, [{
      key: "parse",
      value: function parse(t, e) {
        return s(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var t = this.options.beginAtZero,
          _this$getUserBounds2 = this.getUserBounds(),
          e = _this$getUserBounds2.minDefined,
          i = _this$getUserBounds2.maxDefined;
        var s = this.min,
          n = this.max;
        var o = function o(t) {
            return s = e ? s : t;
          },
          a = function a(t) {
            return n = i ? n : t;
          };
        if (t) {
          var _t57 = F(s),
            _e69 = F(n);
          _t57 < 0 && _e69 < 0 ? a(0) : _t57 > 0 && _e69 > 0 && o(0);
        }
        if (s === n) {
          var _e70 = 0 === n ? 1 : Math.abs(.05 * n);
          a(n + _e70), t || o(s - _e70);
        }
        this.min = s, this.max = n;
      }
    }, {
      key: "getTickLimit",
      value: function getTickLimit() {
        var t = this.options.ticks;
        var e,
          i = t.maxTicksLimit,
          s = t.stepSize;
        return s ? (e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, e > 1e3 && (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(s, " would result generating up to ").concat(e, " ticks. Limiting to 1000.")), e = 1e3)) : (e = this.computeTickLimit(), i = i || 11), i && (e = Math.min(i, e)), e;
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
          e = t.ticks;
        var i = this.getTickLimit();
        i = Math.max(2, i);
        var n = function (t, e) {
          var i = [],
            n = t.bounds,
            o = t.step,
            a = t.min,
            r = t.max,
            l = t.precision,
            h = t.count,
            c = t.maxTicks,
            d = t.maxDigits,
            u = t.includeBounds,
            f = o || 1,
            g = c - 1,
            p = e.min,
            m = e.max,
            b = !s(a),
            x = !s(r),
            _ = !s(h),
            y = (m - p) / (d + 1);
          var v,
            M,
            w,
            k,
            S = B((m - p) / g / f) * f;
          if (S < 1e-14 && !b && !x) return [{
            value: p
          }, {
            value: m
          }];
          k = Math.ceil(m / S) - Math.floor(p / S), k > g && (S = B(k * S / g / f) * f), s(l) || (v = Math.pow(10, l), S = Math.ceil(S * v) / v), "ticks" === n ? (M = Math.floor(p / S) * S, w = Math.ceil(m / S) * S) : (M = p, w = m), b && x && o && H((r - a) / o, S / 1e3) ? (k = Math.round(Math.min((r - a) / S, c)), S = (r - a) / k, M = a, w = r) : _ ? (M = b ? a : M, w = x ? r : w, k = h - 1, S = (w - M) / k) : (k = (w - M) / S, k = V(k, Math.round(k), S / 1e3) ? Math.round(k) : Math.ceil(k));
          var P = Math.max(U(S), U(M));
          v = Math.pow(10, s(l) ? P : l), M = Math.round(M * v) / v, w = Math.round(w * v) / v;
          var D = 0;
          for (b && (u && M !== a ? (i.push({
            value: a
          }), M < a && D++, V(Math.round((M + D * S) * v) / v, a, mo(a, y, t)) && D++) : M < a && D++); D < k; ++D) {
            var _t58 = Math.round((M + D * S) * v) / v;
            if (x && _t58 > r) break;
            i.push({
              value: _t58
            });
          }
          return x && u && w !== r ? i.length && V(i[i.length - 1].value, r, mo(r, y, t)) ? i[i.length - 1].value = r : i.push({
            value: r
          }) : x && w !== r || i.push({
            value: w
          }), i;
        }({
          maxTicks: i,
          bounds: t.bounds,
          min: t.min,
          max: t.max,
          precision: e.precision,
          step: e.stepSize,
          count: e.count,
          maxDigits: this._maxDigits(),
          horizontal: this.isHorizontal(),
          minRotation: e.minRotation || 0,
          includeBounds: !1 !== e.includeBounds
        }, this._range || this);
        return "ticks" === t.bounds && j(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.ticks;
        var e = this.min,
          i = this.max;
        if (_get2(_getPrototypeOf(bo.prototype), "configure", this).call(this), this.options.offset && t.length) {
          var _s46 = (i - e) / Math.max(t.length - 1, 1) / 2;
          e -= _s46, i += _s46;
        }
        this._startValue = e, this._endValue = i, this._valueRange = i - e;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return ne(t, this.chart.options.locale, this.options.ticks.format);
      }
    }]);
  }(Js);
  var xo = /*#__PURE__*/function (_bo) {
    function xo() {
      _classCallCheck(this, xo);
      return _callSuper(this, xo, arguments);
    }
    _inherits(xo, _bo);
    return _createClass(xo, [{
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax = this.getMinMax(!0),
          t = _this$getMinMax.min,
          e = _this$getMinMax.max;
        this.min = a(t) ? t : 0, this.max = a(e) ? e : 1, this.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        var t = this.isHorizontal(),
          e = t ? this.width : this.height,
          i = $(this.options.ticks.minRotation),
          s = (t ? Math.sin(i) : Math.cos(i)) || .001,
          n = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, n.lineHeight / s));
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }]);
  }(bo);
  _defineProperty(xo, "id", "linear");
  _defineProperty(xo, "defaults", {
    ticks: {
      callback: ae.formatters.numeric
    }
  });
  var _o = function _o(t) {
      return Math.floor(z(t));
    },
    yo = function yo(t, e) {
      return Math.pow(10, _o(t) + e);
    };
  function vo(t) {
    return 1 === t / Math.pow(10, _o(t));
  }
  function Mo(t, e, i) {
    var s = Math.pow(10, i),
      n = Math.floor(t / s);
    return Math.ceil(e / s) - n;
  }
  function wo(t, _ref16) {
    var e = _ref16.min,
      i = _ref16.max;
    e = r(t.min, e);
    var s = [],
      n = _o(e);
    var o = function (t, e) {
        var i = _o(e - t);
        for (; Mo(t, e, i) > 10;) i++;
        for (; Mo(t, e, i) < 10;) i--;
        return Math.min(i, _o(t));
      }(e, i),
      a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
    var l = Math.pow(10, o),
      h = n > o ? Math.pow(10, n) : 0,
      c = Math.round((e - h) * a) / a,
      d = Math.floor((e - h) / l / 10) * l * 10;
    var u = Math.floor((c - d) / Math.pow(10, o)),
      f = r(t.min, Math.round((h + d + u * Math.pow(10, o)) * a) / a);
    for (; f < i;) s.push({
      value: f,
      major: vo(f),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), f = Math.round((h + d + u * Math.pow(10, o)) * a) / a;
    var g = r(t.max, f);
    return s.push({
      value: g,
      major: vo(g),
      significand: u
    }), s;
  }
  var ko = /*#__PURE__*/function (_Js2) {
    function ko(t) {
      var _this29;
      _classCallCheck(this, ko);
      _this29 = _callSuper(this, ko, [t]), _this29.start = void 0, _this29.end = void 0, _this29._startValue = void 0, _this29._valueRange = 0;
      return _this29;
    }
    _inherits(ko, _Js2);
    return _createClass(ko, [{
      key: "parse",
      value: function parse(t, e) {
        var i = bo.prototype.parse.apply(this, [t, e]);
        if (0 !== i) return a(i) && i > 0 ? i : null;
        this._zero = !0;
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax2 = this.getMinMax(!0),
          t = _this$getMinMax2.min,
          e = _this$getMinMax2.max;
        this.min = a(t) ? Math.max(0, t) : null, this.max = a(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !a(this._userMin) && (this.min = t === yo(this.min, 0) ? yo(this.min, -1) : yo(this.min, 0)), this.handleTickRangeOptions();
      }
    }, {
      key: "handleTickRangeOptions",
      value: function handleTickRangeOptions() {
        var _this$getUserBounds3 = this.getUserBounds(),
          t = _this$getUserBounds3.minDefined,
          e = _this$getUserBounds3.maxDefined;
        var i = this.min,
          s = this.max;
        var n = function n(e) {
            return i = t ? i : e;
          },
          o = function o(t) {
            return s = e ? s : t;
          };
        i === s && (i <= 0 ? (n(1), o(10)) : (n(yo(i, -1)), o(yo(s, 1)))), i <= 0 && n(yo(s, -1)), s <= 0 && o(yo(i, 1)), this.min = i, this.max = s;
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
          e = wo({
            min: this._userMin,
            max: this._userMax
          }, this);
        return "ticks" === t.bounds && j(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e;
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        return void 0 === t ? "0" : ne(t, this.chart.options.locale, this.options.ticks.format);
      }
    }, {
      key: "configure",
      value: function configure() {
        var t = this.min;
        _get2(_getPrototypeOf(ko.prototype), "configure", this).call(this), this._startValue = z(t), this._valueRange = z(this.max) - z(t);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        return void 0 !== t && 0 !== t || (t = this.min), null === t || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (z(t) - this._startValue) / this._valueRange);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange);
      }
    }]);
  }(Js);
  _defineProperty(ko, "id", "logarithmic");
  _defineProperty(ko, "defaults", {
    ticks: {
      callback: ae.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  });
  function So(t) {
    var e = t.ticks;
    if (e.display && t.display) {
      var _t59 = ki(e.backdropPadding);
      return l(e.font && e.font.size, ue.font.size) + _t59.height;
    }
    return 0;
  }
  function Po(t, e, i, s, n) {
    return t === s || t === n ? {
      start: e - i / 2,
      end: e + i / 2
    } : t < s || t > n ? {
      start: e - i,
      end: e
    } : {
      start: e,
      end: e + i
    };
  }
  function Do(t) {
    var e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom
      },
      i = Object.assign({}, e),
      s = [],
      o = [],
      a = t._pointLabels.length,
      r = t.options.pointLabels,
      l = r.centerPointLabels ? C / a : 0;
    for (var _u6 = 0; _u6 < a; _u6++) {
      var _a20 = r.setContext(t.getPointLabelContext(_u6));
      o[_u6] = _a20.padding;
      var _f6 = t.getPointPosition(_u6, t.drawingArea + o[_u6], l),
        _g7 = Si(_a20.font),
        _p6 = (h = t.ctx, c = _g7, d = n(d = t._pointLabels[_u6]) ? d : [d], {
          w: Oe(h, c.string, d),
          h: d.length * c.lineHeight
        });
      s[_u6] = _p6;
      var _m5 = G(t.getIndexAngle(_u6) + l),
        _b3 = Math.round(Y(_m5));
      Co(i, e, _m5, Po(_b3, _f6.x, _p6.w, 0, 180), Po(_b3, _f6.y, _p6.h, 90, 270));
    }
    var h, c, d;
    t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b), t._pointLabelItems = function (t, e, i) {
      var s = [],
        n = t._pointLabels.length,
        o = t.options,
        _o$pointLabels = o.pointLabels,
        a = _o$pointLabels.centerPointLabels,
        r = _o$pointLabels.display,
        l = {
          extra: So(o) / 2,
          additionalAngle: a ? C / n : 0
        };
      var h;
      for (var _o31 = 0; _o31 < n; _o31++) {
        l.padding = i[_o31], l.size = e[_o31];
        var _n30 = Oo(t, _o31, l);
        s.push(_n30), "auto" === r && (_n30.visible = Ao(_n30, h), _n30.visible && (h = _n30));
      }
      return s;
    }(t, s, o);
  }
  function Co(t, e, i, s, n) {
    var o = Math.abs(Math.sin(i)),
      a = Math.abs(Math.cos(i));
    var r = 0,
      l = 0;
    s.start < e.l ? (r = (e.l - s.start) / o, t.l = Math.min(t.l, e.l - r)) : s.end > e.r && (r = (s.end - e.r) / o, t.r = Math.max(t.r, e.r + r)), n.start < e.t ? (l = (e.t - n.start) / a, t.t = Math.min(t.t, e.t - l)) : n.end > e.b && (l = (n.end - e.b) / a, t.b = Math.max(t.b, e.b + l));
  }
  function Oo(t, e, i) {
    var s = t.drawingArea,
      n = i.extra,
      o = i.additionalAngle,
      a = i.padding,
      r = i.size,
      l = t.getPointPosition(e, s + n + a, o),
      h = Math.round(Y(G(l.angle + E))),
      c = function (t, e, i) {
        90 === i || 270 === i ? t -= e / 2 : (i > 270 || i < 90) && (t -= e);
        return t;
      }(l.y, r.h, h),
      d = function (t) {
        if (0 === t || 180 === t) return "center";
        if (t < 180) return "left";
        return "right";
      }(h),
      u = function (t, e, i) {
        "right" === i ? t -= e : "center" === i && (t -= e / 2);
        return t;
      }(l.x, r.w, d);
    return {
      visible: !0,
      x: l.x,
      y: c,
      textAlign: d,
      left: u,
      top: c,
      right: u + r.w,
      bottom: c + r.h
    };
  }
  function Ao(t, e) {
    if (!e) return !0;
    var i = t.left,
      s = t.top,
      n = t.right,
      o = t.bottom;
    return !(Re({
      x: i,
      y: s
    }, e) || Re({
      x: i,
      y: o
    }, e) || Re({
      x: n,
      y: s
    }, e) || Re({
      x: n,
      y: o
    }, e));
  }
  function To(t, e, i) {
    var n = i.left,
      o = i.top,
      a = i.right,
      r = i.bottom,
      l = e.backdropColor;
    if (!s(l)) {
      var _i58 = wi(e.borderRadius),
        _s47 = ki(e.backdropPadding);
      t.fillStyle = l;
      var _h15 = n - _s47.left,
        _c13 = o - _s47.top,
        _d11 = a - n + _s47.width,
        _u7 = r - o + _s47.height;
      Object.values(_i58).some(function (t) {
        return 0 !== t;
      }) ? (t.beginPath(), He(t, {
        x: _h15,
        y: _c13,
        w: _d11,
        h: _u7,
        radius: _i58
      }), t.fill()) : t.fillRect(_h15, _c13, _d11, _u7);
    }
  }
  function Lo(t, e, i, s) {
    var n = t.ctx;
    if (i) n.arc(t.xCenter, t.yCenter, e, 0, O);else {
      var _i59 = t.getPointPosition(0, e);
      n.moveTo(_i59.x, _i59.y);
      for (var _o32 = 1; _o32 < s; _o32++) _i59 = t.getPointPosition(_o32, e), n.lineTo(_i59.x, _i59.y);
    }
  }
  var Eo = /*#__PURE__*/function (_bo2) {
    function Eo(t) {
      var _this30;
      _classCallCheck(this, Eo);
      _this30 = _callSuper(this, Eo, [t]), _this30.xCenter = void 0, _this30.yCenter = void 0, _this30.drawingArea = void 0, _this30._pointLabels = [], _this30._pointLabelItems = [];
      return _this30;
    }
    _inherits(Eo, _bo2);
    return _createClass(Eo, [{
      key: "setDimensions",
      value: function setDimensions() {
        var t = this._padding = ki(So(this.options) / 2),
          e = this.width = this.maxWidth - t.width,
          i = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var _this$getMinMax3 = this.getMinMax(!1),
          t = _this$getMinMax3.min,
          e = _this$getMinMax3.max;
        this.min = a(t) && !isNaN(t) ? t : 0, this.max = a(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
      }
    }, {
      key: "computeTickLimit",
      value: function computeTickLimit() {
        return Math.ceil(this.drawingArea / So(this.options));
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var _this31 = this;
        bo.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(function (t, e) {
          var i = d(_this31.options.pointLabels.callback, [t, e], _this31);
          return i || 0 === i ? i : "";
        }).filter(function (t, e) {
          return _this31.chart.getDataVisibility(e);
        });
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this.options;
        t.display && t.pointLabels.display ? Do(this) : this.setCenterPoint(0, 0, 0, 0);
      }
    }, {
      key: "setCenterPoint",
      value: function setCenterPoint(t, e, i, s) {
        this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
      }
    }, {
      key: "getIndexAngle",
      value: function getIndexAngle(t) {
        return G(t * (O / (this._pointLabels.length || 1)) + $(this.options.startAngle || 0));
      }
    }, {
      key: "getDistanceFromCenterForValue",
      value: function getDistanceFromCenterForValue(t) {
        if (s(t)) return NaN;
        var e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
    }, {
      key: "getValueForDistanceFromCenter",
      value: function getValueForDistanceFromCenter(t) {
        if (s(t)) return NaN;
        var e = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - e : this.min + e;
      }
    }, {
      key: "getPointLabelContext",
      value: function getPointLabelContext(t) {
        var e = this._pointLabels || [];
        if (t >= 0 && t < e.length) {
          var _i60 = e[t];
          return function (t, e, i) {
            return Ci(t, {
              label: i,
              index: e,
              type: "pointLabel"
            });
          }(this.getContext(), t, _i60);
        }
      }
    }, {
      key: "getPointPosition",
      value: function getPointPosition(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = this.getIndexAngle(t) - E + i;
        return {
          x: Math.cos(s) * e + this.xCenter,
          y: Math.sin(s) * e + this.yCenter,
          angle: s
        };
      }
    }, {
      key: "getPointPositionForValue",
      value: function getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
    }, {
      key: "getBasePosition",
      value: function getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
    }, {
      key: "getPointLabelPosition",
      value: function getPointLabelPosition(t) {
        var _this$_pointLabelItem = this._pointLabelItems[t],
          e = _this$_pointLabelItem.left,
          i = _this$_pointLabelItem.top,
          s = _this$_pointLabelItem.right,
          n = _this$_pointLabelItem.bottom;
        return {
          left: e,
          top: i,
          right: s,
          bottom: n
        };
      }
    }, {
      key: "drawBackground",
      value: function drawBackground() {
        var _this$options15 = this.options,
          t = _this$options15.backgroundColor,
          e = _this$options15.grid.circular;
        if (t) {
          var _i61 = this.ctx;
          _i61.save(), _i61.beginPath(), Lo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), _i61.closePath(), _i61.fillStyle = t, _i61.fill(), _i61.restore();
        }
      }
    }, {
      key: "drawGrid",
      value: function drawGrid() {
        var _this32 = this;
        var t = this.ctx,
          e = this.options,
          i = e.angleLines,
          s = e.grid,
          n = e.border,
          o = this._pointLabels.length;
        var a, r, l;
        if (e.pointLabels.display && function (t, e) {
          var i = t.ctx,
            s = t.options.pointLabels;
          for (var _n31 = e - 1; _n31 >= 0; _n31--) {
            var _e71 = t._pointLabelItems[_n31];
            if (!_e71.visible) continue;
            var _o33 = s.setContext(t.getPointLabelContext(_n31));
            To(i, _o33, _e71);
            var _a21 = Si(_o33.font),
              _r16 = _e71.x,
              _l16 = _e71.y,
              _h16 = _e71.textAlign;
            Ne(i, t._pointLabels[_n31], _r16, _l16 + _a21.lineHeight / 2, _a21, {
              color: _o33.color,
              textAlign: _h16,
              textBaseline: "middle"
            });
          }
        }(this, o), s.display && this.ticks.forEach(function (t, e) {
          if (0 !== e || 0 === e && _this32.min < 0) {
            r = _this32.getDistanceFromCenterForValue(t.value);
            var _i62 = _this32.getContext(e),
              _a22 = s.setContext(_i62),
              _l17 = n.setContext(_i62);
            !function (t, e, i, s, n) {
              var o = t.ctx,
                a = e.circular,
                r = e.color,
                l = e.lineWidth;
              !a && !s || !r || !l || i < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Lo(t, i, a, s), o.closePath(), o.stroke(), o.restore());
            }(_this32, _a22, r, o, _l17);
          }
        }), i.display) {
          for (t.save(), a = o - 1; a >= 0; a--) {
            var _s48 = i.setContext(this.getPointLabelContext(a)),
              _n32 = _s48.color,
              _o34 = _s48.lineWidth;
            _o34 && _n32 && (t.lineWidth = _o34, t.strokeStyle = _n32, t.setLineDash(_s48.borderDash), t.lineDashOffset = _s48.borderDashOffset, r = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), l = this.getPointPosition(a, r), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(l.x, l.y), t.stroke());
          }
          t.restore();
        }
      }
    }, {
      key: "drawBorder",
      value: function drawBorder() {}
    }, {
      key: "drawLabels",
      value: function drawLabels() {
        var _this33 = this;
        var t = this.ctx,
          e = this.options,
          i = e.ticks;
        if (!i.display) return;
        var s = this.getIndexAngle(0);
        var n, o;
        t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach(function (s, a) {
          if (0 === a && _this33.min >= 0 && !e.reverse) return;
          var r = i.setContext(_this33.getContext(a)),
            l = Si(r.font);
          if (n = _this33.getDistanceFromCenterForValue(_this33.ticks[a].value), r.showLabelBackdrop) {
            t.font = l.string, o = t.measureText(s.label).width, t.fillStyle = r.backdropColor;
            var _e72 = ki(r.backdropPadding);
            t.fillRect(-o / 2 - _e72.left, -n - l.size / 2 - _e72.top, o + _e72.width, l.size + _e72.height);
          }
          Ne(t, s.label, 0, -n, l, {
            color: r.color,
            strokeColor: r.textStrokeColor,
            strokeWidth: r.textStrokeWidth
          });
        }), t.restore();
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {}
    }]);
  }(bo);
  _defineProperty(Eo, "id", "radialLinear");
  _defineProperty(Eo, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: ae.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback: function callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  });
  _defineProperty(Eo, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  });
  _defineProperty(Eo, "descriptors", {
    angleLines: {
      _fallback: "grid"
    }
  });
  var Ro = {
      millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
      },
      second: {
        common: !0,
        size: 1e3,
        steps: 60
      },
      minute: {
        common: !0,
        size: 6e4,
        steps: 60
      },
      hour: {
        common: !0,
        size: 36e5,
        steps: 24
      },
      day: {
        common: !0,
        size: 864e5,
        steps: 30
      },
      week: {
        common: !1,
        size: 6048e5,
        steps: 4
      },
      month: {
        common: !0,
        size: 2628e6,
        steps: 12
      },
      quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
      },
      year: {
        common: !0,
        size: 3154e7
      }
    },
    Io = Object.keys(Ro);
  function zo(t, e) {
    return t - e;
  }
  function Fo(t, e) {
    if (s(e)) return null;
    var i = t._adapter,
      _t$_parseOpts = t._parseOpts,
      n = _t$_parseOpts.parser,
      o = _t$_parseOpts.round,
      r = _t$_parseOpts.isoWeekday;
    var l = e;
    return "function" == typeof n && (l = n(l)), a(l) || (l = "string" == typeof n ? i.parse(l, n) : i.parse(l)), null === l ? null : (o && (l = "week" !== o || !N(r) && !0 !== r ? i.startOf(l, o) : i.startOf(l, "isoWeek", r)), +l);
  }
  function Vo(t, e, i, s) {
    var n = Io.length;
    for (var _o35 = Io.indexOf(t); _o35 < n - 1; ++_o35) {
      var _t60 = Ro[Io[_o35]],
        _n33 = _t60.steps ? _t60.steps : Number.MAX_SAFE_INTEGER;
      if (_t60.common && Math.ceil((i - e) / (_n33 * _t60.size)) <= s) return Io[_o35];
    }
    return Io[n - 1];
  }
  function Bo(t, e, i) {
    if (i) {
      if (i.length) {
        var _et = et(i, e),
          _s49 = _et.lo,
          _n34 = _et.hi;
        t[i[_s49] >= e ? i[_s49] : i[_n34]] = !0;
      }
    } else t[e] = !0;
  }
  function Wo(t, e, i) {
    var s = [],
      n = {},
      o = e.length;
    var a, r;
    for (a = 0; a < o; ++a) r = e[a], n[r] = a, s.push({
      value: r,
      major: !1
    });
    return 0 !== o && i ? function (t, e, i, s) {
      var n = t._adapter,
        o = +n.startOf(e[0].value, s),
        a = e[e.length - 1].value;
      var r, l;
      for (r = o; r <= a; r = +n.add(r, 1, s)) l = i[r], l >= 0 && (e[l].major = !0);
      return e;
    }(t, s, n, i) : s;
  }
  var No = /*#__PURE__*/function (_Js3) {
    function No(t) {
      var _this34;
      _classCallCheck(this, No);
      _this34 = _callSuper(this, No, [t]), _this34._cache = {
        data: [],
        labels: [],
        all: []
      }, _this34._unit = "day", _this34._majorUnit = void 0, _this34._offsets = {}, _this34._normalized = !1, _this34._parseOpts = void 0;
      return _this34;
    }
    _inherits(No, _Js3);
    return _createClass(No, [{
      key: "init",
      value: function init(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var i = t.time || (t.time = {}),
          s = this._adapter = new Rn._date(t.adapters.date);
        s.init(e), x(i.displayFormats, s.formats()), this._parseOpts = {
          parser: i.parser,
          round: i.round,
          isoWeekday: i.isoWeekday
        }, _get2(_getPrototypeOf(No.prototype), "init", this).call(this, t), this._normalized = e.normalized;
      }
    }, {
      key: "parse",
      value: function parse(t, e) {
        return void 0 === t ? null : Fo(this, t);
      }
    }, {
      key: "beforeLayout",
      value: function beforeLayout() {
        _get2(_getPrototypeOf(No.prototype), "beforeLayout", this).call(this), this._cache = {
          data: [],
          labels: [],
          all: []
        };
      }
    }, {
      key: "determineDataLimits",
      value: function determineDataLimits() {
        var t = this.options,
          e = this._adapter,
          i = t.time.unit || "day";
        var _this$getUserBounds4 = this.getUserBounds(),
          s = _this$getUserBounds4.min,
          n = _this$getUserBounds4.max,
          o = _this$getUserBounds4.minDefined,
          r = _this$getUserBounds4.maxDefined;
        function l(t) {
          o || isNaN(t.min) || (s = Math.min(s, t.min)), r || isNaN(t.max) || (n = Math.max(n, t.max));
        }
        o && r || (l(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || l(this.getMinMax(!1))), s = a(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), n = a(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, n - 1), this.max = Math.max(s + 1, n);
      }
    }, {
      key: "_getLabelBounds",
      value: function _getLabelBounds() {
        var t = this.getLabelTimestamps();
        var e = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], i = t[t.length - 1]), {
          min: e,
          max: i
        };
      }
    }, {
      key: "buildTicks",
      value: function buildTicks() {
        var t = this.options,
          e = t.time,
          i = t.ticks,
          s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
        "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
        var n = this.min,
          o = nt(s, n, this.max);
        return this._unit = e.unit || (i.autoSkip ? Vo(e.minUnit, this.min, this.max, this._getLabelCapacity(n)) : function (t, e, i, s, n) {
          for (var _o36 = Io.length - 1; _o36 >= Io.indexOf(i); _o36--) {
            var _i63 = Io[_o36];
            if (Ro[_i63].common && t._adapter.diff(n, s, _i63) >= e - 1) return _i63;
          }
          return Io[i ? Io.indexOf(i) : 0];
        }(this, o.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (t) {
          for (var _e73 = Io.indexOf(t) + 1, _i64 = Io.length; _e73 < _i64; ++_e73) if (Ro[Io[_e73]].common) return Io[_e73];
        }(this._unit) : void 0, this.initOffsets(s), t.reverse && o.reverse(), Wo(this, o, this._majorUnit);
      }
    }, {
      key: "afterAutoSkip",
      value: function afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(function (t) {
          return +t.value;
        }));
      }
    }, {
      key: "initOffsets",
      value: function initOffsets() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e,
          i,
          s = 0,
          n = 0;
        this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), n = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
        var o = t.length < 3 ? .5 : .25;
        s = J(s, 0, o), n = J(n, 0, o), this._offsets = {
          start: s,
          end: n,
          factor: 1 / (s + 1 + n)
        };
      }
    }, {
      key: "_generate",
      value: function _generate() {
        var t = this._adapter,
          e = this.min,
          i = this.max,
          s = this.options,
          n = s.time,
          o = n.unit || Vo(n.minUnit, e, i, this._getLabelCapacity(e)),
          a = l(s.ticks.stepSize, 1),
          r = "week" === o && n.isoWeekday,
          h = N(r) || !0 === r,
          c = {};
        var d,
          u,
          f = e;
        if (h && (f = +t.startOf(f, "isoWeek", r)), f = +t.startOf(f, h ? "day" : o), t.diff(i, e, o) > 1e5 * a) throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + o);
        var g = "data" === s.ticks.source && this.getDataTimestamps();
        for (d = f, u = 0; d < i; d = +t.add(d, a, o), u++) Bo(c, d, g);
        return d !== i && "ticks" !== s.bounds && 1 !== u || Bo(c, d, g), Object.keys(c).sort(zo).map(function (t) {
          return +t;
        });
      }
    }, {
      key: "getLabelForValue",
      value: function getLabelForValue(t) {
        var e = this._adapter,
          i = this.options.time;
        return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
      }
    }, {
      key: "format",
      value: function format(t, e) {
        var i = this.options.time.displayFormats,
          s = this._unit,
          n = e || i[s];
        return this._adapter.format(t, n);
      }
    }, {
      key: "_tickFormatFunction",
      value: function _tickFormatFunction(t, e, i, s) {
        var n = this.options,
          o = n.ticks.callback;
        if (o) return d(o, [t, e, i], this);
        var a = n.time.displayFormats,
          r = this._unit,
          l = this._majorUnit,
          h = r && a[r],
          c = l && a[l],
          u = i[e],
          f = l && c && u && u.major;
        return this._adapter.format(t, s || (f ? c : h));
      }
    }, {
      key: "generateTickLabels",
      value: function generateTickLabels(t) {
        var e, i, s;
        for (e = 0, i = t.length; e < i; ++e) s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
      }
    }, {
      key: "getDecimalForValue",
      value: function getDecimalForValue(t) {
        return null === t ? NaN : (t - this.min) / (this.max - this.min);
      }
    }, {
      key: "getPixelForValue",
      value: function getPixelForValue(t) {
        var e = this._offsets,
          i = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + i) * e.factor);
      }
    }, {
      key: "getValueForPixel",
      value: function getValueForPixel(t) {
        var e = this._offsets,
          i = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + i * (this.max - this.min);
      }
    }, {
      key: "_getLabelSize",
      value: function _getLabelSize(t) {
        var e = this.options.ticks,
          i = this.ctx.measureText(t).width,
          s = $(this.isHorizontal() ? e.maxRotation : e.minRotation),
          n = Math.cos(s),
          o = Math.sin(s),
          a = this._resolveTickFontOptions(0).size;
        return {
          w: i * n + a * o,
          h: i * o + a * n
        };
      }
    }, {
      key: "_getLabelCapacity",
      value: function _getLabelCapacity(t) {
        var e = this.options.time,
          i = e.displayFormats,
          s = i[e.unit] || i.millisecond,
          n = this._tickFormatFunction(t, 0, Wo(this, [t], this._majorUnit), s),
          o = this._getLabelSize(n),
          a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
        return a > 0 ? a : 1;
      }
    }, {
      key: "getDataTimestamps",
      value: function getDataTimestamps() {
        var t,
          e,
          i = this._cache.data || [];
        if (i.length) return i;
        var s = this.getMatchingVisibleMetas();
        if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
        for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(i);
      }
    }, {
      key: "getLabelTimestamps",
      value: function getLabelTimestamps() {
        var t = this._cache.labels || [];
        var e, i;
        if (t.length) return t;
        var s = this.getLabels();
        for (e = 0, i = s.length; e < i; ++e) t.push(Fo(this, s[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t);
      }
    }, {
      key: "normalize",
      value: function normalize(t) {
        return lt(t.sort(zo));
      }
    }]);
  }(Js);
  _defineProperty(No, "id", "time");
  _defineProperty(No, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  });
  function Ho(t, e, i) {
    var _it, _t$r, _t$l, _it2, _t$r2, _t$l2;
    var s,
      n,
      o,
      a,
      r = 0,
      l = t.length - 1;
    i ? (e >= t[r].pos && e <= t[l].pos && (_it = it(t, "pos", e), r = _it.lo, l = _it.hi, _it), (_t$r = t[r], s = _t$r.pos, o = _t$r.time), (_t$l = t[l], n = _t$l.pos, a = _t$l.time)) : (e >= t[r].time && e <= t[l].time && (_it2 = it(t, "time", e), r = _it2.lo, l = _it2.hi, _it2), (_t$r2 = t[r], s = _t$r2.time, o = _t$r2.pos), (_t$l2 = t[l], n = _t$l2.time, a = _t$l2.pos));
    var h = n - s;
    return h ? o + (a - o) * (e - s) / h : o;
  }
  var jo = Object.freeze({
    __proto__: null,
    CategoryScale: (_Class10 = /*#__PURE__*/function (_Js4) {
      function CategoryScale(t) {
        var _this35;
        _classCallCheck(this, CategoryScale);
        _this35 = _callSuper(this, CategoryScale, [t]), _this35._startValue = void 0, _this35._valueRange = 0, _this35._addedLabels = [];
        return _this35;
      }
      _inherits(CategoryScale, _Js4);
      return _createClass(CategoryScale, [{
        key: "init",
        value: function init(t) {
          var e = this._addedLabels;
          if (e.length) {
            var _t61 = this.getLabels();
            var _iterator29 = _createForOfIteratorHelper(e),
              _step29;
            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _step29$value = _step29.value,
                  _i65 = _step29$value.index,
                  _s50 = _step29$value.label;
                _t61[_i65] === _s50 && _t61.splice(_i65, 1);
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
            this._addedLabels = [];
          }
          _get2(_getPrototypeOf(CategoryScale.prototype), "init", this).call(this, t);
        }
      }, {
        key: "parse",
        value: function parse(t, e) {
          if (s(t)) return null;
          var i = this.getLabels();
          return function (t, e) {
            return null === t ? null : J(Math.round(t), 0, e);
          }(e = isFinite(e) && i[e] === t ? e : go(i, t, l(e, t), this._addedLabels), i.length - 1);
        }
      }, {
        key: "determineDataLimits",
        value: function determineDataLimits() {
          var _this$getUserBounds5 = this.getUserBounds(),
            t = _this$getUserBounds5.minDefined,
            e = _this$getUserBounds5.maxDefined;
          var _this$getMinMax4 = this.getMinMax(!0),
            i = _this$getMinMax4.min,
            s = _this$getMinMax4.max;
          "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
        }
      }, {
        key: "buildTicks",
        value: function buildTicks() {
          var t = this.min,
            e = this.max,
            i = this.options.offset,
            s = [];
          var n = this.getLabels();
          n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1), this._valueRange = Math.max(n.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? .5 : 0);
          for (var _i66 = t; _i66 <= e; _i66++) s.push({
            value: _i66
          });
          return s;
        }
      }, {
        key: "getLabelForValue",
        value: function getLabelForValue(t) {
          return po.call(this, t);
        }
      }, {
        key: "configure",
        value: function configure() {
          _get2(_getPrototypeOf(CategoryScale.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
      }, {
        key: "getPixelForValue",
        value: function getPixelForValue(t) {
          return "number" != typeof t && (t = this.parse(t)), null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
      }, {
        key: "getPixelForTick",
        value: function getPixelForTick(t) {
          var e = this.ticks;
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {
          return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
        }
      }, {
        key: "getBasePixel",
        value: function getBasePixel() {
          return this.bottom;
        }
      }]);
    }(Js), _defineProperty(_Class10, "id", "category"), _defineProperty(_Class10, "defaults", {
      ticks: {
        callback: po
      }
    }), _Class10),
    LinearScale: xo,
    LogarithmicScale: ko,
    RadialLinearScale: Eo,
    TimeScale: No,
    TimeSeriesScale: (_Class11 = /*#__PURE__*/function (_No2) {
      function TimeSeriesScale(t) {
        var _this36;
        _classCallCheck(this, TimeSeriesScale);
        _this36 = _callSuper(this, TimeSeriesScale, [t]), _this36._table = [], _this36._minPos = void 0, _this36._tableRange = void 0;
        return _this36;
      }
      _inherits(TimeSeriesScale, _No2);
      return _createClass(TimeSeriesScale, [{
        key: "initOffsets",
        value: function initOffsets() {
          var t = this._getTimestampsForTable(),
            e = this._table = this.buildLookupTable(t);
          this._minPos = Ho(e, this.min), this._tableRange = Ho(e, this.max) - this._minPos, _get2(_getPrototypeOf(TimeSeriesScale.prototype), "initOffsets", this).call(this, t);
        }
      }, {
        key: "buildLookupTable",
        value: function buildLookupTable(t) {
          var e = this.min,
            i = this.max,
            s = [],
            n = [];
          var o, a, r, l, h;
          for (o = 0, a = t.length; o < a; ++o) l = t[o], l >= e && l <= i && s.push(l);
          if (s.length < 2) return [{
            time: e,
            pos: 0
          }, {
            time: i,
            pos: 1
          }];
          for (o = 0, a = s.length; o < a; ++o) h = s[o + 1], r = s[o - 1], l = s[o], Math.round((h + r) / 2) !== l && n.push({
            time: l,
            pos: o / (a - 1)
          });
          return n;
        }
      }, {
        key: "_generate",
        value: function _generate() {
          var t = this.min,
            e = this.max;
          var i = _get2(_getPrototypeOf(TimeSeriesScale.prototype), "getDataTimestamps", this).call(this);
          return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort(function (t, e) {
            return t - e;
          });
        }
      }, {
        key: "_getTimestampsForTable",
        value: function _getTimestampsForTable() {
          var t = this._cache.all || [];
          if (t.length) return t;
          var e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t, t;
        }
      }, {
        key: "getDecimalForValue",
        value: function getDecimalForValue(t) {
          return (Ho(this._table, t) - this._minPos) / this._tableRange;
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {
          var e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return Ho(this._table, i * this._tableRange + this._minPos, !0);
        }
      }]);
    }(No), _defineProperty(_Class11, "id", "timeseries"), _defineProperty(_Class11, "defaults", No.defaults), _Class11)
  });
  var $o = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
    Yo = $o.map(function (t) {
      return t.replace("rgb(", "rgba(").replace(")", ", 0.5)");
    });
  function Uo(t) {
    return $o[t % $o.length];
  }
  function Xo(t) {
    return Yo[t % Yo.length];
  }
  function qo(t) {
    var e = 0;
    return function (i, s) {
      var n = t.getDatasetMeta(s).controller;
      n instanceof jn ? e = function (t, e) {
        return t.backgroundColor = t.data.map(function () {
          return Uo(e++);
        }), e;
      }(i, e) : n instanceof $n ? e = function (t, e) {
        return t.backgroundColor = t.data.map(function () {
          return Xo(e++);
        }), e;
      }(i, e) : n && (e = function (t, e) {
        return t.borderColor = Uo(e), t.backgroundColor = Xo(e), ++e;
      }(i, e));
    };
  }
  function Ko(t) {
    var e;
    for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
    return !1;
  }
  var Go = {
    id: "colors",
    defaults: {
      enabled: !0,
      forceOverride: !1
    },
    beforeLayout: function beforeLayout(t, e, i) {
      if (!i.enabled) return;
      var _t$config = t.config,
        s = _t$config.data.datasets,
        n = _t$config.options,
        o = n.elements;
      if (!i.forceOverride && (Ko(s) || (a = n) && (a.borderColor || a.backgroundColor) || o && Ko(o))) return;
      var a;
      var r = qo(t);
      s.forEach(r);
    }
  };
  function Zo(t) {
    if (t._decimated) {
      var _e74 = t._data;
      delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: _e74
      });
    }
  }
  function Jo(t) {
    t.data.datasets.forEach(function (t) {
      Zo(t);
    });
  }
  var Qo = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: !1
    },
    beforeElementsUpdate: function beforeElementsUpdate(t, e, i) {
      if (!i.enabled) return void Jo(t);
      var n = t.width;
      t.data.datasets.forEach(function (e, o) {
        var a = e._data,
          r = e.indexAxis,
          l = t.getDatasetMeta(o),
          h = a || e.data;
        if ("y" === Pi([r, t.options.indexAxis])) return;
        if (!l.controller.supportsDecimation) return;
        var c = t.scales[l.xAxisID];
        if ("linear" !== c.type && "time" !== c.type) return;
        if (t.options.parsing) return;
        var _ref17 = function (t, e) {
            var i = e.length;
            var s,
              n = 0;
            var o = t.iScale,
              _o$getUserBounds = o.getUserBounds(),
              a = _o$getUserBounds.min,
              r = _o$getUserBounds.max,
              l = _o$getUserBounds.minDefined,
              h = _o$getUserBounds.maxDefined;
            return l && (n = J(it(e, o.axis, a).lo, 0, i - 1)), s = h ? J(it(e, o.axis, r).hi + 1, n, i) - n : i - n, {
              start: n,
              count: s
            };
          }(l, h),
          d = _ref17.start,
          u = _ref17.count;
        if (u <= (i.threshold || 4 * n)) return void Zo(e);
        var f;
        switch (s(a) && (e._data = h, delete e.data, Object.defineProperty(e, "data", {
          configurable: !0,
          enumerable: !0,
          get: function get() {
            return this._decimated;
          },
          set: function set(t) {
            this._data = t;
          }
        })), i.algorithm) {
          case "lttb":
            f = function (t, e, i, s, n) {
              var o = n.samples || s;
              if (o >= i) return t.slice(e, e + i);
              var a = [],
                r = (i - 2) / (o - 2);
              var l = 0;
              var h = e + i - 1;
              var c,
                d,
                u,
                f,
                g,
                p = e;
              for (a[l++] = t[p], c = 0; c < o - 2; c++) {
                var _s51 = void 0,
                  _n35 = 0,
                  _o37 = 0;
                var _h17 = Math.floor((c + 1) * r) + 1 + e,
                  _m6 = Math.min(Math.floor((c + 2) * r) + 1, i) + e,
                  _b4 = _m6 - _h17;
                for (_s51 = _h17; _s51 < _m6; _s51++) _n35 += t[_s51].x, _o37 += t[_s51].y;
                _n35 /= _b4, _o37 /= _b4;
                var _x2 = Math.floor(c * r) + 1 + e,
                  _3 = Math.min(Math.floor((c + 1) * r) + 1, i) + e,
                  _t$p = t[p],
                  _y2 = _t$p.x,
                  _v3 = _t$p.y;
                for (u = f = -1, _s51 = _x2; _s51 < _3; _s51++) f = .5 * Math.abs((_y2 - _n35) * (t[_s51].y - _v3) - (_y2 - t[_s51].x) * (_o37 - _v3)), f > u && (u = f, d = t[_s51], g = _s51);
                a[l++] = d, p = g;
              }
              return a[l++] = t[h], a;
            }(h, d, u, n, i);
            break;
          case "min-max":
            f = function (t, e, i, n) {
              var o,
                a,
                r,
                l,
                h,
                c,
                d,
                u,
                f,
                g,
                p = 0,
                m = 0;
              var b = [],
                x = e + i - 1,
                _ = t[e].x,
                y = t[x].x - _;
              for (o = e; o < e + i; ++o) {
                a = t[o], r = (a.x - _) / y * n, l = a.y;
                var _e75 = 0 | r;
                if (_e75 === h) l < f ? (f = l, c = o) : l > g && (g = l, d = o), p = (m * p + a.x) / ++m;else {
                  var _i67 = o - 1;
                  if (!s(c) && !s(d)) {
                    var _e76 = Math.min(c, d),
                      _s52 = Math.max(c, d);
                    _e76 !== u && _e76 !== _i67 && b.push(_objectSpread(_objectSpread({}, t[_e76]), {}, {
                      x: p
                    })), _s52 !== u && _s52 !== _i67 && b.push(_objectSpread(_objectSpread({}, t[_s52]), {}, {
                      x: p
                    }));
                  }
                  o > 0 && _i67 !== u && b.push(t[_i67]), b.push(a), h = _e75, m = 0, f = g = l, c = d = u = o;
                }
              }
              return b;
            }(h, d, u, n);
            break;
          default:
            throw new Error("Unsupported decimation algorithm '".concat(i.algorithm, "'"));
        }
        e._decimated = f;
      });
    },
    destroy: function destroy(t) {
      Jo(t);
    }
  };
  function ta(t, e, i, s) {
    if (s) return;
    var n = e[t],
      o = i[t];
    return "angle" === t && (n = G(n), o = G(o)), {
      property: t,
      start: n,
      end: o
    };
  }
  function ea(t, e, i) {
    for (; e > t; e--) {
      var _t62 = i[e];
      if (!isNaN(_t62.x) && !isNaN(_t62.y)) break;
    }
    return e;
  }
  function ia(t, e, i, s) {
    return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
  }
  function sa(t, e) {
    var i = [],
      s = !1;
    return n(t) ? (s = !0, i = t) : i = function (t, e) {
      var _ref18 = t || {},
        _ref18$x = _ref18.x,
        i = _ref18$x === void 0 ? null : _ref18$x,
        _ref18$y = _ref18.y,
        s = _ref18$y === void 0 ? null : _ref18$y,
        n = e.points,
        o = [];
      return e.segments.forEach(function (_ref19) {
        var t = _ref19.start,
          e = _ref19.end;
        e = ea(t, e, n);
        var a = n[t],
          r = n[e];
        null !== s ? (o.push({
          x: a.x,
          y: s
        }), o.push({
          x: r.x,
          y: s
        })) : null !== i && (o.push({
          x: i,
          y: a.y
        }), o.push({
          x: i,
          y: r.y
        }));
      }), o;
    }(t, e), i.length ? new no({
      points: i,
      options: {
        tension: 0
      },
      _loop: s,
      _fullLoop: s
    }) : null;
  }
  function na(t) {
    return t && !1 !== t.fill;
  }
  function oa(t, e, i) {
    var s = t[e].fill;
    var n = [e];
    var o;
    if (!i) return s;
    for (; !1 !== s && -1 === n.indexOf(s);) {
      if (!a(s)) return s;
      if (o = t[s], !o) return !1;
      if (o.visible) return s;
      n.push(s), s = o.fill;
    }
    return !1;
  }
  function aa(t, e, i) {
    var s = function (t) {
      var e = t.options,
        i = e.fill;
      var s = l(i && i.target, i);
      void 0 === s && (s = !!e.backgroundColor);
      if (!1 === s || null === s) return !1;
      if (!0 === s) return "origin";
      return s;
    }(t);
    if (o(s)) return !isNaN(s.value) && s;
    var n = parseFloat(s);
    return a(n) && Math.floor(n) === n ? function (t, e, i, s) {
      "-" !== t && "+" !== t || (i = e + i);
      if (i === e || i < 0 || i >= s) return !1;
      return i;
    }(s[0], e, n, i) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
  }
  function ra(t, e, i) {
    var s = [];
    for (var _n36 = 0; _n36 < i.length; _n36++) {
      var _o38 = i[_n36],
        _la = la(_o38, e, "x"),
        _a23 = _la.first,
        _r17 = _la.last,
        _l18 = _la.point;
      if (!(!_l18 || _a23 && _r17)) if (_a23) s.unshift(_l18);else if (t.push(_l18), !_r17) break;
    }
    t.push.apply(t, s);
  }
  function la(t, e, i) {
    var s = t.interpolate(e, i);
    if (!s) return {};
    var n = s[i],
      o = t.segments,
      a = t.points;
    var r = !1,
      l = !1;
    for (var _t63 = 0; _t63 < o.length; _t63++) {
      var _e77 = o[_t63],
        _s53 = a[_e77.start][i],
        _h18 = a[_e77.end][i];
      if (tt(n, _s53, _h18)) {
        r = n === _s53, l = n === _h18;
        break;
      }
    }
    return {
      first: r,
      last: l,
      point: s
    };
  }
  var ha = /*#__PURE__*/function () {
    function ha(t) {
      _classCallCheck(this, ha);
      this.x = t.x, this.y = t.y, this.radius = t.radius;
    }
    return _createClass(ha, [{
      key: "pathSegment",
      value: function pathSegment(t, e, i) {
        var s = this.x,
          n = this.y,
          o = this.radius;
        return e = e || {
          start: 0,
          end: O
        }, t.arc(s, n, o, e.end, e.start, !0), !i.bounds;
      }
    }, {
      key: "interpolate",
      value: function interpolate(t) {
        var e = this.x,
          i = this.y,
          s = this.radius,
          n = t.angle;
        return {
          x: e + Math.cos(n) * s,
          y: i + Math.sin(n) * s,
          angle: n
        };
      }
    }]);
  }();
  function ca(t) {
    var e = t.chart,
      i = t.fill,
      s = t.line;
    if (a(i)) return function (t, e) {
      var i = t.getDatasetMeta(e),
        s = i && t.isDatasetVisible(e);
      return s ? i.dataset : null;
    }(e, i);
    if ("stack" === i) return function (t) {
      var e = t.scale,
        i = t.index,
        s = t.line,
        n = [],
        o = s.segments,
        a = s.points,
        r = function (t, e) {
          var i = [],
            s = t.getMatchingVisibleMetas("line");
          for (var _t64 = 0; _t64 < s.length; _t64++) {
            var _n37 = s[_t64];
            if (_n37.index === e) break;
            _n37.hidden || i.unshift(_n37.dataset);
          }
          return i;
        }(e, i);
      r.push(sa({
        x: null,
        y: e.bottom
      }, s));
      for (var _t65 = 0; _t65 < o.length; _t65++) {
        var _e78 = o[_t65];
        for (var _t66 = _e78.start; _t66 <= _e78.end; _t66++) ra(n, a[_t66], r);
      }
      return new no({
        points: n,
        options: {}
      });
    }(t);
    if ("shape" === i) return !0;
    var n = function (t) {
      var e = t.scale || {};
      if (e.getPointPositionForValue) return function (t) {
        var e = t.scale,
          i = t.fill,
          s = e.options,
          n = e.getLabels().length,
          a = s.reverse ? e.max : e.min,
          r = function (t, e, i) {
            var s;
            return s = "start" === t ? i : "end" === t ? e.options.reverse ? e.min : e.max : o(t) ? t.value : e.getBaseValue(), s;
          }(i, e, a),
          l = [];
        if (s.grid.circular) {
          var _t67 = e.getPointPositionForValue(0, a);
          return new ha({
            x: _t67.x,
            y: _t67.y,
            radius: e.getDistanceFromCenterForValue(r)
          });
        }
        for (var _t68 = 0; _t68 < n; ++_t68) l.push(e.getPointPositionForValue(_t68, r));
        return l;
      }(t);
      return function (t) {
        var _t$scale = t.scale,
          e = _t$scale === void 0 ? {} : _t$scale,
          i = t.fill,
          s = function (t, e) {
            var i = null;
            return "start" === t ? i = e.bottom : "end" === t ? i = e.top : o(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i;
          }(i, e);
        if (a(s)) {
          var _t69 = e.isHorizontal();
          return {
            x: _t69 ? s : null,
            y: _t69 ? null : s
          };
        }
        return null;
      }(t);
    }(t);
    return n instanceof ha ? n : sa(n, s);
  }
  function da(t, e, i) {
    var s = ca(e),
      n = e.line,
      o = e.scale,
      a = e.axis,
      r = n.options,
      l = r.fill,
      h = r.backgroundColor,
      _ref20 = l || {},
      _ref20$above = _ref20.above,
      c = _ref20$above === void 0 ? h : _ref20$above,
      _ref20$below = _ref20.below,
      d = _ref20$below === void 0 ? h : _ref20$below;
    s && n.points.length && (Ie(t, i), function (t, e) {
      var i = e.line,
        s = e.target,
        n = e.above,
        o = e.below,
        a = e.area,
        r = e.scale,
        l = i._loop ? "angle" : e.axis;
      t.save(), "x" === l && o !== n && (ua(t, s, a.top), fa(t, {
        line: i,
        target: s,
        color: n,
        scale: r,
        property: l
      }), t.restore(), t.save(), ua(t, s, a.bottom));
      fa(t, {
        line: i,
        target: s,
        color: o,
        scale: r,
        property: l
      }), t.restore();
    }(t, {
      line: n,
      target: s,
      above: c,
      below: d,
      area: i,
      scale: o,
      axis: a
    }), ze(t));
  }
  function ua(t, e, i) {
    var s = e.segments,
      n = e.points;
    var o = !0,
      a = !1;
    t.beginPath();
    var _iterator30 = _createForOfIteratorHelper(s),
      _step30;
    try {
      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
        var _r18 = _step30.value;
        var _s54 = _r18.start,
          _l19 = _r18.end,
          _h19 = n[_s54],
          _c14 = n[ea(_s54, _l19, n)];
        o ? (t.moveTo(_h19.x, _h19.y), o = !1) : (t.lineTo(_h19.x, i), t.lineTo(_h19.x, _h19.y)), a = !!e.pathSegment(t, _r18, {
          move: a
        }), a ? t.closePath() : t.lineTo(_c14.x, i);
      }
    } catch (err) {
      _iterator30.e(err);
    } finally {
      _iterator30.f();
    }
    t.lineTo(e.first().x, i), t.closePath(), t.clip();
  }
  function fa(t, e) {
    var i = e.line,
      s = e.target,
      n = e.property,
      o = e.color,
      a = e.scale,
      r = function (t, e, i) {
        var s = t.segments,
          n = t.points,
          o = e.points,
          a = [];
        var _iterator31 = _createForOfIteratorHelper(s),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _t70 = _step31.value;
            var _s55 = _t70.start,
              _r19 = _t70.end;
            _r19 = ea(_s55, _r19, n);
            var _l20 = ta(i, n[_s55], n[_r19], _t70.loop);
            if (!e.segments) {
              a.push({
                source: _t70,
                target: _l20,
                start: n[_s55],
                end: n[_r19]
              });
              continue;
            }
            var _h20 = Ii(e, _l20);
            var _iterator32 = _createForOfIteratorHelper(_h20),
              _step32;
            try {
              for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                var _e79 = _step32.value;
                var _s56 = ta(i, o[_e79.start], o[_e79.end], _e79.loop),
                  _r20 = Ri(_t70, n, _s56);
                var _iterator33 = _createForOfIteratorHelper(_r20),
                  _step33;
                try {
                  for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var _t71 = _step33.value;
                    a.push({
                      source: _t71,
                      target: _e79,
                      start: _defineProperty({}, i, ia(_l20, _s56, "start", Math.max)),
                      end: _defineProperty({}, i, ia(_l20, _s56, "end", Math.min))
                    });
                  }
                } catch (err) {
                  _iterator33.e(err);
                } finally {
                  _iterator33.f();
                }
              }
            } catch (err) {
              _iterator32.e(err);
            } finally {
              _iterator32.f();
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        return a;
      }(i, s, n);
    var _iterator34 = _createForOfIteratorHelper(r),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var _step34$value = _step34.value,
          _e80 = _step34$value.source,
          _l21 = _step34$value.target,
          _h21 = _step34$value.start,
          _c15 = _step34$value.end;
        var _e80$style = _e80.style,
          _e80$style2 = _e80$style === void 0 ? {} : _e80$style,
          _e80$style2$backgroun = _e80$style2.backgroundColor,
          _r21 = _e80$style2$backgroun === void 0 ? o : _e80$style2$backgroun,
          _d12 = !0 !== s;
        t.save(), t.fillStyle = _r21, ga(t, a, _d12 && ta(n, _h21, _c15)), t.beginPath();
        var _u8 = !!i.pathSegment(t, _e80);
        var _f7 = void 0;
        if (_d12) {
          _u8 ? t.closePath() : pa(t, s, _c15, n);
          var _e81 = !!s.pathSegment(t, _l21, {
            move: _u8,
            reverse: !0
          });
          _f7 = _u8 && _e81, _f7 || pa(t, s, _h21, n);
        }
        t.closePath(), t.fill(_f7 ? "evenodd" : "nonzero"), t.restore();
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
  }
  function ga(t, e, i) {
    var _e$chart$chartArea = e.chart.chartArea,
      s = _e$chart$chartArea.top,
      n = _e$chart$chartArea.bottom,
      _ref21 = i || {},
      o = _ref21.property,
      a = _ref21.start,
      r = _ref21.end;
    "x" === o && (t.beginPath(), t.rect(a, s, r - a, n - s), t.clip());
  }
  function pa(t, e, i, s) {
    var n = e.interpolate(i, s);
    n && t.lineTo(n.x, n.y);
  }
  var ma = {
    id: "filler",
    afterDatasetsUpdate: function afterDatasetsUpdate(t, e, i) {
      var s = (t.data.datasets || []).length,
        n = [];
      var o, a, r, l;
      for (a = 0; a < s; ++a) o = t.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof no && (l = {
        visible: t.isDatasetVisible(a),
        index: a,
        fill: aa(r, a, s),
        chart: t,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, n.push(l);
      for (a = 0; a < s; ++a) l = n[a], l && !1 !== l.fill && (l.fill = oa(n, a, i.propagate));
    },
    beforeDraw: function beforeDraw(t, e, i) {
      var s = "beforeDraw" === i.drawTime,
        n = t.getSortedVisibleDatasetMetas(),
        o = t.chartArea;
      for (var _e82 = n.length - 1; _e82 >= 0; --_e82) {
        var _i68 = n[_e82].$filler;
        _i68 && (_i68.line.updateControlPoints(o, _i68.axis), s && _i68.fill && da(t.ctx, _i68, o));
      }
    },
    beforeDatasetsDraw: function beforeDatasetsDraw(t, e, i) {
      if ("beforeDatasetsDraw" !== i.drawTime) return;
      var s = t.getSortedVisibleDatasetMetas();
      for (var _e83 = s.length - 1; _e83 >= 0; --_e83) {
        var _i69 = s[_e83].$filler;
        na(_i69) && da(t.ctx, _i69, t.chartArea);
      }
    },
    beforeDatasetDraw: function beforeDatasetDraw(t, e, i) {
      var s = e.meta.$filler;
      na(s) && "beforeDatasetDraw" === i.drawTime && da(t.ctx, s, t.chartArea);
    },
    defaults: {
      propagate: !0,
      drawTime: "beforeDatasetDraw"
    }
  };
  var ba = function ba(t, e) {
    var _t$boxHeight = t.boxHeight,
      i = _t$boxHeight === void 0 ? e : _t$boxHeight,
      _t$boxWidth = t.boxWidth,
      s = _t$boxWidth === void 0 ? e : _t$boxWidth;
    return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
      boxWidth: s,
      boxHeight: i,
      itemHeight: Math.max(e, i)
    };
  };
  var xa = /*#__PURE__*/function (_Hs7) {
    function xa(t) {
      var _this37;
      _classCallCheck(this, xa);
      _this37 = _callSuper(this, xa), _this37._added = !1, _this37.legendHitBoxes = [], _this37._hoveredItem = null, _this37.doughnutMode = !1, _this37.chart = t.chart, _this37.options = t.options, _this37.ctx = t.ctx, _this37.legendItems = void 0, _this37.columnSizes = void 0, _this37.lineWidths = void 0, _this37.maxHeight = void 0, _this37.maxWidth = void 0, _this37.top = void 0, _this37.bottom = void 0, _this37.left = void 0, _this37.right = void 0, _this37.height = void 0, _this37.width = void 0, _this37._margins = void 0, _this37.position = void 0, _this37.weight = void 0, _this37.fullSize = void 0;
      return _this37;
    }
    _inherits(xa, _Hs7);
    return _createClass(xa, [{
      key: "update",
      value: function update(t, e, i) {
        this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
      }
    }, {
      key: "setDimensions",
      value: function setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
      }
    }, {
      key: "buildLabels",
      value: function buildLabels() {
        var _this38 = this;
        var t = this.options.labels || {};
        var e = d(t.generateLabels, [this.chart], this) || [];
        t.filter && (e = e.filter(function (e) {
          return t.filter(e, _this38.chart.data);
        })), t.sort && (e = e.sort(function (e, i) {
          return t.sort(e, i, _this38.chart.data);
        })), this.options.reverse && e.reverse(), this.legendItems = e;
      }
    }, {
      key: "fit",
      value: function fit() {
        var t = this.options,
          e = this.ctx;
        if (!t.display) return void (this.width = this.height = 0);
        var i = t.labels,
          s = Si(i.font),
          n = s.size,
          o = this._computeTitleHeight(),
          _ba = ba(i, n),
          a = _ba.boxWidth,
          r = _ba.itemHeight;
        var l, h;
        e.font = s.string, this.isHorizontal() ? (l = this.maxWidth, h = this._fitRows(o, n, a, r) + 10) : (h = this.maxHeight, l = this._fitCols(o, s, a, r) + 10), this.width = Math.min(l, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
      }
    }, {
      key: "_fitRows",
      value: function _fitRows(t, e, i, s) {
        var n = this.ctx,
          o = this.maxWidth,
          a = this.options.labels.padding,
          r = this.legendHitBoxes = [],
          l = this.lineWidths = [0],
          h = s + a;
        var c = t;
        n.textAlign = "left", n.textBaseline = "middle";
        var d = -1,
          u = -h;
        return this.legendItems.forEach(function (t, f) {
          var g = i + e / 2 + n.measureText(t.text).width;
          (0 === f || l[l.length - 1] + g + 2 * a > o) && (c += h, l[l.length - (f > 0 ? 0 : 1)] = 0, u += h, d++), r[f] = {
            left: 0,
            top: u,
            row: d,
            width: g,
            height: s
          }, l[l.length - 1] += g + a;
        }), c;
      }
    }, {
      key: "_fitCols",
      value: function _fitCols(t, e, i, s) {
        var n = this.ctx,
          o = this.maxHeight,
          a = this.options.labels.padding,
          r = this.legendHitBoxes = [],
          l = this.columnSizes = [],
          h = o - t;
        var c = a,
          d = 0,
          u = 0,
          f = 0,
          g = 0;
        return this.legendItems.forEach(function (t, o) {
          var _ref22 = function (t, e, i, s, n) {
              var o = function (t, e, i, s) {
                  var n = t.text;
                  n && "string" != typeof n && (n = n.reduce(function (t, e) {
                    return t.length > e.length ? t : e;
                  }));
                  return e + i.size / 2 + s.measureText(n).width;
                }(s, t, e, i),
                a = function (t, e, i) {
                  var s = t;
                  "string" != typeof e.text && (s = _a(e, i));
                  return s;
                }(n, s, e.lineHeight);
              return {
                itemWidth: o,
                itemHeight: a
              };
            }(i, e, n, t, s),
            p = _ref22.itemWidth,
            m = _ref22.itemHeight;
          o > 0 && u + m + 2 * a > h && (c += d + a, l.push({
            width: d,
            height: u
          }), f += d + a, g++, d = u = 0), r[o] = {
            left: f,
            top: u,
            col: g,
            width: p,
            height: m
          }, d = Math.max(d, p), u += m + a;
        }), c += d, l.push({
          width: d,
          height: u
        }), c;
      }
    }, {
      key: "adjustHitBoxes",
      value: function adjustHitBoxes() {
        if (!this.options.display) return;
        var t = this._computeTitleHeight(),
          e = this.legendHitBoxes,
          _this$options16 = this.options,
          i = _this$options16.align,
          s = _this$options16.labels.padding,
          n = _this$options16.rtl,
          o = Oi(n, this.left, this.width);
        if (this.isHorizontal()) {
          var _n38 = 0,
            _a24 = ft(i, this.left + s, this.right - this.lineWidths[_n38]);
          var _iterator35 = _createForOfIteratorHelper(e),
            _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var _r22 = _step35.value;
              _n38 !== _r22.row && (_n38 = _r22.row, _a24 = ft(i, this.left + s, this.right - this.lineWidths[_n38])), _r22.top += this.top + t + s, _r22.left = o.leftForLtr(o.x(_a24), _r22.width), _a24 += _r22.width + s;
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
        } else {
          var _n39 = 0,
            _a25 = ft(i, this.top + t + s, this.bottom - this.columnSizes[_n39].height);
          var _iterator36 = _createForOfIteratorHelper(e),
            _step36;
          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var _r23 = _step36.value;
              _r23.col !== _n39 && (_n39 = _r23.col, _a25 = ft(i, this.top + t + s, this.bottom - this.columnSizes[_n39].height)), _r23.top = _a25, _r23.left += this.left + s, _r23.left = o.leftForLtr(o.x(_r23.left), _r23.width), _a25 += _r23.height + s;
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
        }
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        return "top" === this.options.position || "bottom" === this.options.position;
      }
    }, {
      key: "draw",
      value: function draw() {
        if (this.options.display) {
          var _t72 = this.ctx;
          Ie(_t72, this), this._draw(), ze(_t72);
        }
      }
    }, {
      key: "_draw",
      value: function _draw() {
        var _this39 = this;
        var t = this.options,
          e = this.columnSizes,
          i = this.lineWidths,
          s = this.ctx,
          n = t.align,
          o = t.labels,
          a = ue.color,
          r = Oi(t.rtl, this.left, this.width),
          h = Si(o.font),
          c = o.padding,
          d = h.size,
          u = d / 2;
        var f;
        this.drawTitle(), s.textAlign = r.textAlign("left"), s.textBaseline = "middle", s.lineWidth = .5, s.font = h.string;
        var _ba2 = ba(o, d),
          g = _ba2.boxWidth,
          p = _ba2.boxHeight,
          m = _ba2.itemHeight,
          b = this.isHorizontal(),
          x = this._computeTitleHeight();
        f = b ? {
          x: ft(n, this.left + c, this.right - i[0]),
          y: this.top + c + x,
          line: 0
        } : {
          x: this.left + c,
          y: ft(n, this.top + x + c, this.bottom - e[0].height),
          line: 0
        }, Ai(this.ctx, t.textDirection);
        var _ = m + c;
        this.legendItems.forEach(function (y, v) {
          s.strokeStyle = y.fontColor, s.fillStyle = y.fontColor;
          var M = s.measureText(y.text).width,
            w = r.textAlign(y.textAlign || (y.textAlign = o.textAlign)),
            k = g + u + M;
          var S = f.x,
            P = f.y;
          r.setWidth(_this39.width), b ? v > 0 && S + k + c > _this39.right && (P = f.y += _, f.line++, S = f.x = ft(n, _this39.left + c, _this39.right - i[f.line])) : v > 0 && P + _ > _this39.bottom && (S = f.x = S + e[f.line].width + c, f.line++, P = f.y = ft(n, _this39.top + x + c, _this39.bottom - e[f.line].height));
          if (function (t, e, i) {
            if (isNaN(g) || g <= 0 || isNaN(p) || p < 0) return;
            s.save();
            var n = l(i.lineWidth, 1);
            if (s.fillStyle = l(i.fillStyle, a), s.lineCap = l(i.lineCap, "butt"), s.lineDashOffset = l(i.lineDashOffset, 0), s.lineJoin = l(i.lineJoin, "miter"), s.lineWidth = n, s.strokeStyle = l(i.strokeStyle, a), s.setLineDash(l(i.lineDash, [])), o.usePointStyle) {
              var _a26 = {
                  radius: p * Math.SQRT2 / 2,
                  pointStyle: i.pointStyle,
                  rotation: i.rotation,
                  borderWidth: n
                },
                _l22 = r.xPlus(t, g / 2);
              Ee(s, _a26, _l22, e + u, o.pointStyleWidth && g);
            } else {
              var _o39 = e + Math.max((d - p) / 2, 0),
                _a27 = r.leftForLtr(t, g),
                _l23 = wi(i.borderRadius);
              s.beginPath(), Object.values(_l23).some(function (t) {
                return 0 !== t;
              }) ? He(s, {
                x: _a27,
                y: _o39,
                w: g,
                h: p,
                radius: _l23
              }) : s.rect(_a27, _o39, g, p), s.fill(), 0 !== n && s.stroke();
            }
            s.restore();
          }(r.x(S), P, y), S = gt(w, S + g + u, b ? S + k : _this39.right, t.rtl), function (t, e, i) {
            Ne(s, i.text, t, e + m / 2, h, {
              strikethrough: i.hidden,
              textAlign: r.textAlign(i.textAlign)
            });
          }(r.x(S), P, y), b) f.x += k + c;else if ("string" != typeof y.text) {
            var _t73 = h.lineHeight;
            f.y += _a(y, _t73) + c;
          } else f.y += _;
        }), Ti(this.ctx, t.textDirection);
      }
    }, {
      key: "drawTitle",
      value: function drawTitle() {
        var t = this.options,
          e = t.title,
          i = Si(e.font),
          s = ki(e.padding);
        if (!e.display) return;
        var n = Oi(t.rtl, this.left, this.width),
          o = this.ctx,
          a = e.position,
          r = i.size / 2,
          l = s.top + r;
        var h,
          c = this.left,
          d = this.width;
        if (this.isHorizontal()) d = Math.max.apply(Math, _toConsumableArray(this.lineWidths)), h = this.top + l, c = ft(t.align, c, this.right - d);else {
          var _e84 = this.columnSizes.reduce(function (t, e) {
            return Math.max(t, e.height);
          }, 0);
          h = l + ft(t.align, this.top, this.bottom - _e84 - t.labels.padding - this._computeTitleHeight());
        }
        var u = ft(a, c, c + d);
        o.textAlign = n.textAlign(ut(a)), o.textBaseline = "middle", o.strokeStyle = e.color, o.fillStyle = e.color, o.font = i.string, Ne(o, e.text, u, h, i);
      }
    }, {
      key: "_computeTitleHeight",
      value: function _computeTitleHeight() {
        var t = this.options.title,
          e = Si(t.font),
          i = ki(t.padding);
        return t.display ? e.lineHeight + i.height : 0;
      }
    }, {
      key: "_getLegendItemAt",
      value: function _getLegendItemAt(t, e) {
        var i, s, n;
        if (tt(t, this.left, this.right) && tt(e, this.top, this.bottom)) for (n = this.legendHitBoxes, i = 0; i < n.length; ++i) if (s = n[i], tt(t, s.left, s.left + s.width) && tt(e, s.top, s.top + s.height)) return this.legendItems[i];
        return null;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t) {
        var e = this.options;
        if (!function (t, e) {
          if (("mousemove" === t || "mouseout" === t) && (e.onHover || e.onLeave)) return !0;
          if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
          return !1;
        }(t.type, e)) return;
        var i = this._getLegendItemAt(t.x, t.y);
        if ("mousemove" === t.type || "mouseout" === t.type) {
          var _o40 = this._hoveredItem,
            _a28 = (n = i, null !== (s = _o40) && null !== n && s.datasetIndex === n.datasetIndex && s.index === n.index);
          _o40 && !_a28 && d(e.onLeave, [t, _o40, this], this), this._hoveredItem = i, i && !_a28 && d(e.onHover, [t, i, this], this);
        } else i && d(e.onClick, [t, i, this], this);
        var s, n;
      }
    }]);
  }(Hs);
  function _a(t, e) {
    return e * (t.text ? t.text.length : 0);
  }
  var ya = {
    id: "legend",
    _element: xa,
    start: function start(t, e, i) {
      var s = t.legend = new xa({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      as.configure(t, s, i), as.addBox(t, s);
    },
    stop: function stop(t) {
      as.removeBox(t, t.legend), delete t.legend;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = t.legend;
      as.configure(t, s, i), s.options = i;
    },
    afterUpdate: function afterUpdate(t) {
      var e = t.legend;
      e.buildLabels(), e.adjustHitBoxes();
    },
    afterEvent: function afterEvent(t, e) {
      e.replay || t.legend.handleEvent(e.event);
    },
    defaults: {
      display: !0,
      position: "top",
      align: "center",
      fullSize: !0,
      reverse: !1,
      weight: 1e3,
      onClick: function onClick(t, e, i) {
        var s = e.datasetIndex,
          n = i.chart;
        n.isDatasetVisible(s) ? (n.hide(s), e.hidden = !0) : (n.show(s), e.hidden = !1);
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: function color(t) {
          return t.chart.options.color;
        },
        boxWidth: 40,
        padding: 10,
        generateLabels: function generateLabels(t) {
          var e = t.data.datasets,
            _t$legend$options$lab = t.legend.options.labels,
            i = _t$legend$options$lab.usePointStyle,
            s = _t$legend$options$lab.pointStyle,
            n = _t$legend$options$lab.textAlign,
            o = _t$legend$options$lab.color,
            a = _t$legend$options$lab.useBorderRadius,
            r = _t$legend$options$lab.borderRadius;
          return t._getSortedDatasetMetas().map(function (t) {
            var l = t.controller.getStyle(i ? 0 : void 0),
              h = ki(l.borderWidth);
            return {
              text: e[t.index].label,
              fillStyle: l.backgroundColor,
              fontColor: o,
              hidden: !t.visible,
              lineCap: l.borderCapStyle,
              lineDash: l.borderDash,
              lineDashOffset: l.borderDashOffset,
              lineJoin: l.borderJoinStyle,
              lineWidth: (h.width + h.height) / 4,
              strokeStyle: l.borderColor,
              pointStyle: s || l.pointStyle,
              rotation: l.rotation,
              textAlign: n || l.textAlign,
              borderRadius: a && (r || l.borderRadius),
              datasetIndex: t.index
            };
          }, this);
        }
      },
      title: {
        color: function color(t) {
          return t.chart.options.color;
        },
        display: !1,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return !t.startsWith("on");
      },
      labels: {
        _scriptable: function _scriptable(t) {
          return !["generateLabels", "filter", "sort"].includes(t);
        }
      }
    }
  };
  var va = /*#__PURE__*/function (_Hs8) {
    function va(t) {
      var _this40;
      _classCallCheck(this, va);
      _this40 = _callSuper(this, va), _this40.chart = t.chart, _this40.options = t.options, _this40.ctx = t.ctx, _this40._padding = void 0, _this40.top = void 0, _this40.bottom = void 0, _this40.left = void 0, _this40.right = void 0, _this40.width = void 0, _this40.height = void 0, _this40.position = void 0, _this40.weight = void 0, _this40.fullSize = void 0;
      return _this40;
    }
    _inherits(va, _Hs8);
    return _createClass(va, [{
      key: "update",
      value: function update(t, e) {
        var i = this.options;
        if (this.left = 0, this.top = 0, !i.display) return void (this.width = this.height = this.right = this.bottom = 0);
        this.width = this.right = t, this.height = this.bottom = e;
        var s = n(i.text) ? i.text.length : 1;
        this._padding = ki(i.padding);
        var o = s * Si(i.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = o : this.width = o;
      }
    }, {
      key: "isHorizontal",
      value: function isHorizontal() {
        var t = this.options.position;
        return "top" === t || "bottom" === t;
      }
    }, {
      key: "_drawArgs",
      value: function _drawArgs(t) {
        var e = this.top,
          i = this.left,
          s = this.bottom,
          n = this.right,
          o = this.options,
          a = o.align;
        var r,
          l,
          h,
          c = 0;
        return this.isHorizontal() ? (l = ft(a, i, n), h = e + t, r = n - i) : ("left" === o.position ? (l = i + t, h = ft(a, s, e), c = -.5 * C) : (l = n - t, h = ft(a, e, s), c = .5 * C), r = s - e), {
          titleX: l,
          titleY: h,
          maxWidth: r,
          rotation: c
        };
      }
    }, {
      key: "draw",
      value: function draw() {
        var t = this.ctx,
          e = this.options;
        if (!e.display) return;
        var i = Si(e.font),
          s = i.lineHeight / 2 + this._padding.top,
          _this$_drawArgs = this._drawArgs(s),
          n = _this$_drawArgs.titleX,
          o = _this$_drawArgs.titleY,
          a = _this$_drawArgs.maxWidth,
          r = _this$_drawArgs.rotation;
        Ne(t, e.text, 0, 0, i, {
          color: e.color,
          maxWidth: a,
          rotation: r,
          textAlign: ut(e.align),
          textBaseline: "middle",
          translation: [n, o]
        });
      }
    }]);
  }(Hs);
  var Ma = {
    id: "title",
    _element: va,
    start: function start(t, e, i) {
      !function (t, e) {
        var i = new va({
          ctx: t.ctx,
          options: e,
          chart: t
        });
        as.configure(t, i, e), as.addBox(t, i), t.titleBlock = i;
      }(t, i);
    },
    stop: function stop(t) {
      var e = t.titleBlock;
      as.removeBox(t, e), delete t.titleBlock;
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = t.titleBlock;
      as.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "bold"
      },
      fullSize: !0,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var wa = new WeakMap();
  var ka = {
    id: "subtitle",
    start: function start(t, e, i) {
      var s = new va({
        ctx: t.ctx,
        options: i,
        chart: t
      });
      as.configure(t, s, i), as.addBox(t, s), wa.set(t, s);
    },
    stop: function stop(t) {
      as.removeBox(t, wa.get(t)), wa["delete"](t);
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      var s = wa.get(t);
      as.configure(t, s, i), s.options = i;
    },
    defaults: {
      align: "center",
      display: !1,
      font: {
        weight: "normal"
      },
      fullSize: !0,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: !0,
      _indexable: !1
    }
  };
  var Sa = {
    average: function average(t) {
      if (!t.length) return !1;
      var e,
        i,
        s = new Set(),
        n = 0,
        o = 0;
      for (e = 0, i = t.length; e < i; ++e) {
        var _i70 = t[e].element;
        if (_i70 && _i70.hasValue()) {
          var _t74 = _i70.tooltipPosition();
          s.add(_t74.x), n += _t74.y, ++o;
        }
      }
      return {
        x: _toConsumableArray(s).reduce(function (t, e) {
          return t + e;
        }) / s.size,
        y: n / o
      };
    },
    nearest: function nearest(t, e) {
      if (!t.length) return !1;
      var i,
        s,
        n,
        o = e.x,
        a = e.y,
        r = Number.POSITIVE_INFINITY;
      for (i = 0, s = t.length; i < s; ++i) {
        var _s57 = t[i].element;
        if (_s57 && _s57.hasValue()) {
          var _t75 = q(e, _s57.getCenterPoint());
          _t75 < r && (r = _t75, n = _s57);
        }
      }
      if (n) {
        var _t76 = n.tooltipPosition();
        o = _t76.x, a = _t76.y;
      }
      return {
        x: o,
        y: a
      };
    }
  };
  function Pa(t, e) {
    return e && (n(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
  }
  function Da(t) {
    return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t;
  }
  function Ca(t, e) {
    var i = e.element,
      s = e.datasetIndex,
      n = e.index,
      o = t.getDatasetMeta(s).controller,
      _o$getLabelAndValue = o.getLabelAndValue(n),
      a = _o$getLabelAndValue.label,
      r = _o$getLabelAndValue.value;
    return {
      chart: t,
      label: a,
      parsed: o.getParsed(n),
      raw: t.data.datasets[s].data[n],
      formattedValue: r,
      dataset: o.getDataset(),
      dataIndex: n,
      datasetIndex: s,
      element: i
    };
  }
  function Oa(t, e) {
    var i = t.chart.ctx,
      s = t.body,
      n = t.footer,
      o = t.title,
      a = e.boxWidth,
      r = e.boxHeight,
      l = Si(e.bodyFont),
      h = Si(e.titleFont),
      c = Si(e.footerFont),
      d = o.length,
      f = n.length,
      g = s.length,
      p = ki(e.padding);
    var m = p.height,
      b = 0,
      x = s.reduce(function (t, e) {
        return t + e.before.length + e.lines.length + e.after.length;
      }, 0);
    if (x += t.beforeBody.length + t.afterBody.length, d && (m += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), x) {
      m += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (x - g) * l.lineHeight + (x - 1) * e.bodySpacing;
    }
    f && (m += e.footerMarginTop + f * c.lineHeight + (f - 1) * e.footerSpacing);
    var _ = 0;
    var y = function y(t) {
      b = Math.max(b, i.measureText(t).width + _);
    };
    return i.save(), i.font = h.string, u(t.title, y), i.font = l.string, u(t.beforeBody.concat(t.afterBody), y), _ = e.displayColors ? a + 2 + e.boxPadding : 0, u(s, function (t) {
      u(t.before, y), u(t.lines, y), u(t.after, y);
    }), _ = 0, i.font = c.string, u(t.footer, y), i.restore(), b += p.width, {
      width: b,
      height: m
    };
  }
  function Aa(t, e, i, s) {
    var n = i.x,
      o = i.width,
      a = t.width,
      _t$chartArea = t.chartArea,
      r = _t$chartArea.left,
      l = _t$chartArea.right;
    var h = "center";
    return "center" === s ? h = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? h = "left" : n >= a - o / 2 && (h = "right"), function (t, e, i, s) {
      var n = s.x,
        o = s.width,
        a = i.caretSize + i.caretPadding;
      return "left" === t && n + o + a > e.width || "right" === t && n - o - a < 0 || void 0;
    }(h, t, e, i) && (h = "center"), h;
  }
  function Ta(t, e, i) {
    var s = i.yAlign || e.yAlign || function (t, e) {
      var i = e.y,
        s = e.height;
      return i < s / 2 ? "top" : i > t.height - s / 2 ? "bottom" : "center";
    }(t, i);
    return {
      xAlign: i.xAlign || e.xAlign || Aa(t, e, i, s),
      yAlign: s
    };
  }
  function La(t, e, i, s) {
    var n = t.caretSize,
      o = t.caretPadding,
      a = t.cornerRadius,
      r = i.xAlign,
      l = i.yAlign,
      h = n + o,
      _wi = wi(a),
      c = _wi.topLeft,
      d = _wi.topRight,
      u = _wi.bottomLeft,
      f = _wi.bottomRight;
    var g = function (t, e) {
      var i = t.x,
        s = t.width;
      return "right" === e ? i -= s : "center" === e && (i -= s / 2), i;
    }(e, r);
    var p = function (t, e, i) {
      var s = t.y,
        n = t.height;
      return "top" === e ? s += i : s -= "bottom" === e ? n + i : n / 2, s;
    }(e, l, h);
    return "center" === l ? "left" === r ? g += h : "right" === r && (g -= h) : "left" === r ? g -= Math.max(c, u) + n : "right" === r && (g += Math.max(d, f) + n), {
      x: J(g, 0, s.width - e.width),
      y: J(p, 0, s.height - e.height)
    };
  }
  function Ea(t, e, i) {
    var s = ki(i.padding);
    return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - s.right : t.x + s.left;
  }
  function Ra(t) {
    return Pa([], Da(t));
  }
  function Ia(t, e) {
    var i = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return i ? t.override(i) : t;
  }
  var za = {
    beforeTitle: e,
    title: function title(t) {
      if (t.length > 0) {
        var _e85 = t[0],
          _i71 = _e85.chart.data.labels,
          _s58 = _i71 ? _i71.length : 0;
        if (this && this.options && "dataset" === this.options.mode) return _e85.dataset.label || "";
        if (_e85.label) return _e85.label;
        if (_s58 > 0 && _e85.dataIndex < _s58) return _i71[_e85.dataIndex];
      }
      return "";
    },
    afterTitle: e,
    beforeBody: e,
    beforeLabel: e,
    label: function label(t) {
      if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
      var e = t.dataset.label || "";
      e && (e += ": ");
      var i = t.formattedValue;
      return s(i) || (e += i), e;
    },
    labelColor: function labelColor(t) {
      var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return {
        borderColor: e.borderColor,
        backgroundColor: e.backgroundColor,
        borderWidth: e.borderWidth,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderRadius: 0
      };
    },
    labelTextColor: function labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle: function labelPointStyle(t) {
      var e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
      return {
        pointStyle: e.pointStyle,
        rotation: e.rotation
      };
    },
    afterLabel: e,
    afterBody: e,
    beforeFooter: e,
    footer: e,
    afterFooter: e
  };
  function Fa(t, e, i, s) {
    var n = t[e].call(i, s);
    return void 0 === n ? za[e].call(i, s) : n;
  }
  var Va = /*#__PURE__*/function (_Hs9) {
    function Va(t) {
      var _this41;
      _classCallCheck(this, Va);
      _this41 = _callSuper(this, Va), _this41.opacity = 0, _this41._active = [], _this41._eventPosition = void 0, _this41._size = void 0, _this41._cachedAnimations = void 0, _this41._tooltipItems = [], _this41.$animations = void 0, _this41.$context = void 0, _this41.chart = t.chart, _this41.options = t.options, _this41.dataPoints = void 0, _this41.title = void 0, _this41.beforeBody = void 0, _this41.body = void 0, _this41.afterBody = void 0, _this41.footer = void 0, _this41.xAlign = void 0, _this41.yAlign = void 0, _this41.x = void 0, _this41.y = void 0, _this41.height = void 0, _this41.width = void 0, _this41.caretX = void 0, _this41.caretY = void 0, _this41.labelColors = void 0, _this41.labelPointStyles = void 0, _this41.labelTextColors = void 0;
      return _this41;
    }
    _inherits(Va, _Hs9);
    return _createClass(Va, [{
      key: "initialize",
      value: function initialize(t) {
        this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
      }
    }, {
      key: "_resolveAnimations",
      value: function _resolveAnimations() {
        var t = this._cachedAnimations;
        if (t) return t;
        var e = this.chart,
          i = this.options.setContext(this.getContext()),
          s = i.enabled && e.options.animation && i.animations,
          n = new Os(this.chart, s);
        return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
      }
    }, {
      key: "getContext",
      value: function getContext() {
        return this.$context || (this.$context = (t = this.chart.getContext(), e = this, i = this._tooltipItems, Ci(t, {
          tooltip: e,
          tooltipItems: i,
          type: "tooltip"
        })));
        var t, e, i;
      }
    }, {
      key: "getTitle",
      value: function getTitle(t, e) {
        var i = e.callbacks,
          s = Fa(i, "beforeTitle", this, t),
          n = Fa(i, "title", this, t),
          o = Fa(i, "afterTitle", this, t);
        var a = [];
        return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a;
      }
    }, {
      key: "getBeforeBody",
      value: function getBeforeBody(t, e) {
        return Ra(Fa(e.callbacks, "beforeBody", this, t));
      }
    }, {
      key: "getBody",
      value: function getBody(t, e) {
        var _this42 = this;
        var i = e.callbacks,
          s = [];
        return u(t, function (t) {
          var e = {
              before: [],
              lines: [],
              after: []
            },
            n = Ia(i, t);
          Pa(e.before, Da(Fa(n, "beforeLabel", _this42, t))), Pa(e.lines, Fa(n, "label", _this42, t)), Pa(e.after, Da(Fa(n, "afterLabel", _this42, t))), s.push(e);
        }), s;
      }
    }, {
      key: "getAfterBody",
      value: function getAfterBody(t, e) {
        return Ra(Fa(e.callbacks, "afterBody", this, t));
      }
    }, {
      key: "getFooter",
      value: function getFooter(t, e) {
        var i = e.callbacks,
          s = Fa(i, "beforeFooter", this, t),
          n = Fa(i, "footer", this, t),
          o = Fa(i, "afterFooter", this, t);
        var a = [];
        return a = Pa(a, Da(s)), a = Pa(a, Da(n)), a = Pa(a, Da(o)), a;
      }
    }, {
      key: "_createItems",
      value: function _createItems(t) {
        var _this43 = this;
        var e = this._active,
          i = this.chart.data,
          s = [],
          n = [],
          o = [];
        var a,
          r,
          l = [];
        for (a = 0, r = e.length; a < r; ++a) l.push(Ca(this.chart, e[a]));
        return t.filter && (l = l.filter(function (e, s, n) {
          return t.filter(e, s, n, i);
        })), t.itemSort && (l = l.sort(function (e, s) {
          return t.itemSort(e, s, i);
        })), u(l, function (e) {
          var i = Ia(t.callbacks, e);
          s.push(Fa(i, "labelColor", _this43, e)), n.push(Fa(i, "labelPointStyle", _this43, e)), o.push(Fa(i, "labelTextColor", _this43, e));
        }), this.labelColors = s, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l, l;
      }
    }, {
      key: "update",
      value: function update(t, e) {
        var i = this.options.setContext(this.getContext()),
          s = this._active;
        var n,
          o = [];
        if (s.length) {
          var _t77 = Sa[i.position].call(this, s, this._eventPosition);
          o = this._createItems(i), this.title = this.getTitle(o, i), this.beforeBody = this.getBeforeBody(o, i), this.body = this.getBody(o, i), this.afterBody = this.getAfterBody(o, i), this.footer = this.getFooter(o, i);
          var _e86 = this._size = Oa(this, i),
            _a29 = Object.assign({}, _t77, _e86),
            _r24 = Ta(this.chart, i, _a29),
            _l24 = La(i, _a29, _r24, this.chart);
          this.xAlign = _r24.xAlign, this.yAlign = _r24.yAlign, n = {
            opacity: 1,
            x: _l24.x,
            y: _l24.y,
            width: _e86.width,
            height: _e86.height,
            caretX: _t77.x,
            caretY: _t77.y
          };
        } else 0 !== this.opacity && (n = {
          opacity: 0
        });
        this._tooltipItems = o, this.$context = void 0, n && this._resolveAnimations().update(this, n), t && i.external && i.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay: e
        });
      }
    }, {
      key: "drawCaret",
      value: function drawCaret(t, e, i, s) {
        var n = this.getCaretPosition(t, i, s);
        e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
      }
    }, {
      key: "getCaretPosition",
      value: function getCaretPosition(t, e, i) {
        var s = this.xAlign,
          n = this.yAlign,
          o = i.caretSize,
          a = i.cornerRadius,
          _wi2 = wi(a),
          r = _wi2.topLeft,
          l = _wi2.topRight,
          h = _wi2.bottomLeft,
          c = _wi2.bottomRight,
          d = t.x,
          u = t.y,
          f = e.width,
          g = e.height;
        var p, m, b, x, _, y;
        return "center" === n ? (_ = u + g / 2, "left" === s ? (p = d, m = p - o, x = _ + o, y = _ - o) : (p = d + f, m = p + o, x = _ - o, y = _ + o), b = p) : (m = "left" === s ? d + Math.max(r, h) + o : "right" === s ? d + f - Math.max(l, c) - o : this.caretX, "top" === n ? (x = u, _ = x - o, p = m - o, b = m + o) : (x = u + g, _ = x + o, p = m + o, b = m - o), y = x), {
          x1: p,
          x2: m,
          x3: b,
          y1: x,
          y2: _,
          y3: y
        };
      }
    }, {
      key: "drawTitle",
      value: function drawTitle(t, e, i) {
        var s = this.title,
          n = s.length;
        var o, a, r;
        if (n) {
          var _l25 = Oi(i.rtl, this.x, this.width);
          for (t.x = Ea(this, i.titleAlign, i), e.textAlign = _l25.textAlign(i.titleAlign), e.textBaseline = "middle", o = Si(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = o.string, r = 0; r < n; ++r) e.fillText(s[r], _l25.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + a, r + 1 === n && (t.y += i.titleMarginBottom - a);
        }
      }
    }, {
      key: "_drawColorBox",
      value: function _drawColorBox(t, e, i, s, n) {
        var a = this.labelColors[i],
          r = this.labelPointStyles[i],
          l = n.boxHeight,
          h = n.boxWidth,
          c = Si(n.bodyFont),
          d = Ea(this, "left", n),
          u = s.x(d),
          f = l < c.lineHeight ? (c.lineHeight - l) / 2 : 0,
          g = e.y + f;
        if (n.usePointStyle) {
          var _e87 = {
              radius: Math.min(h, l) / 2,
              pointStyle: r.pointStyle,
              rotation: r.rotation,
              borderWidth: 1
            },
            _i72 = s.leftForLtr(u, h) + h / 2,
            _o41 = g + l / 2;
          t.strokeStyle = n.multiKeyBackground, t.fillStyle = n.multiKeyBackground, Le(t, _e87, _i72, _o41), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Le(t, _e87, _i72, _o41);
        } else {
          t.lineWidth = o(a.borderWidth) ? Math.max.apply(Math, _toConsumableArray(Object.values(a.borderWidth))) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
          var _e88 = s.leftForLtr(u, h),
            _i73 = s.leftForLtr(s.xPlus(u, 1), h - 2),
            _r25 = wi(a.borderRadius);
          Object.values(_r25).some(function (t) {
            return 0 !== t;
          }) ? (t.beginPath(), t.fillStyle = n.multiKeyBackground, He(t, {
            x: _e88,
            y: g,
            w: h,
            h: l,
            radius: _r25
          }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), He(t, {
            x: _i73,
            y: g + 1,
            w: h - 2,
            h: l - 2,
            radius: _r25
          }), t.fill()) : (t.fillStyle = n.multiKeyBackground, t.fillRect(_e88, g, h, l), t.strokeRect(_e88, g, h, l), t.fillStyle = a.backgroundColor, t.fillRect(_i73, g + 1, h - 2, l - 2));
        }
        t.fillStyle = this.labelTextColors[i];
      }
    }, {
      key: "drawBody",
      value: function drawBody(t, e, i) {
        var s = this.body,
          n = i.bodySpacing,
          o = i.bodyAlign,
          a = i.displayColors,
          r = i.boxHeight,
          l = i.boxWidth,
          h = i.boxPadding,
          c = Si(i.bodyFont);
        var d = c.lineHeight,
          f = 0;
        var g = Oi(i.rtl, this.x, this.width),
          p = function p(i) {
            e.fillText(i, g.x(t.x + f), t.y + d / 2), t.y += d + n;
          },
          m = g.textAlign(o);
        var b, x, _, y, v, M, w;
        for (e.textAlign = o, e.textBaseline = "middle", e.font = c.string, t.x = Ea(this, m, i), e.fillStyle = i.bodyColor, u(this.beforeBody, p), f = a && "right" !== m ? "center" === o ? l / 2 + h : l + 2 + h : 0, y = 0, M = s.length; y < M; ++y) {
          for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, u(b.before, p), _ = b.lines, a && _.length && (this._drawColorBox(e, t, y, g, i), d = Math.max(c.lineHeight, r)), v = 0, w = _.length; v < w; ++v) p(_[v]), d = c.lineHeight;
          u(b.after, p);
        }
        f = 0, d = c.lineHeight, u(this.afterBody, p), t.y -= n;
      }
    }, {
      key: "drawFooter",
      value: function drawFooter(t, e, i) {
        var s = this.footer,
          n = s.length;
        var o, a;
        if (n) {
          var _r26 = Oi(i.rtl, this.x, this.width);
          for (t.x = Ea(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = _r26.textAlign(i.footerAlign), e.textBaseline = "middle", o = Si(i.footerFont), e.fillStyle = i.footerColor, e.font = o.string, a = 0; a < n; ++a) e.fillText(s[a], _r26.x(t.x), t.y + o.lineHeight / 2), t.y += o.lineHeight + i.footerSpacing;
        }
      }
    }, {
      key: "drawBackground",
      value: function drawBackground(t, e, i, s) {
        var n = this.xAlign,
          o = this.yAlign,
          a = t.x,
          r = t.y,
          l = i.width,
          h = i.height,
          _wi3 = wi(s.cornerRadius),
          c = _wi3.topLeft,
          d = _wi3.topRight,
          u = _wi3.bottomLeft,
          f = _wi3.bottomRight;
        e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + c, r), "top" === o && this.drawCaret(t, e, i, s), e.lineTo(a + l - d, r), e.quadraticCurveTo(a + l, r, a + l, r + d), "center" === o && "right" === n && this.drawCaret(t, e, i, s), e.lineTo(a + l, r + h - f), e.quadraticCurveTo(a + l, r + h, a + l - f, r + h), "bottom" === o && this.drawCaret(t, e, i, s), e.lineTo(a + u, r + h), e.quadraticCurveTo(a, r + h, a, r + h - u), "center" === o && "left" === n && this.drawCaret(t, e, i, s), e.lineTo(a, r + c), e.quadraticCurveTo(a, r, a + c, r), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
      }
    }, {
      key: "_updateAnimationTarget",
      value: function _updateAnimationTarget(t) {
        var e = this.chart,
          i = this.$animations,
          s = i && i.x,
          n = i && i.y;
        if (s || n) {
          var _i74 = Sa[t.position].call(this, this._active, this._eventPosition);
          if (!_i74) return;
          var _o42 = this._size = Oa(this, t),
            _a30 = Object.assign({}, _i74, this._size),
            _r27 = Ta(e, t, _a30),
            _l26 = La(t, _a30, _r27, e);
          s._to === _l26.x && n._to === _l26.y || (this.xAlign = _r27.xAlign, this.yAlign = _r27.yAlign, this.width = _o42.width, this.height = _o42.height, this.caretX = _i74.x, this.caretY = _i74.y, this._resolveAnimations().update(this, _l26));
        }
      }
    }, {
      key: "_willRender",
      value: function _willRender() {
        return !!this.opacity;
      }
    }, {
      key: "draw",
      value: function draw(t) {
        var e = this.options.setContext(this.getContext());
        var i = this.opacity;
        if (!i) return;
        this._updateAnimationTarget(e);
        var s = {
            width: this.width,
            height: this.height
          },
          n = {
            x: this.x,
            y: this.y
          };
        i = Math.abs(i) < .001 ? 0 : i;
        var o = ki(e.padding),
          a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(n, t, s, e), Ai(t, e.textDirection), n.y += o.top, this.drawTitle(n, t, e), this.drawBody(n, t, e), this.drawFooter(n, t, e), Ti(t, e.textDirection), t.restore());
      }
    }, {
      key: "getActiveElements",
      value: function getActiveElements() {
        return this._active || [];
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements(t, e) {
        var _this44 = this;
        var i = this._active,
          s = t.map(function (_ref23) {
            var t = _ref23.datasetIndex,
              e = _ref23.index;
            var i = _this44.chart.getDatasetMeta(t);
            if (!i) throw new Error("Cannot find a dataset at index " + t);
            return {
              datasetIndex: t,
              element: i.data[e],
              index: e
            };
          }),
          n = !f(i, s),
          o = this._positionChanged(s, e);
        (n || o) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(t, e) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        var s = this.options,
          n = this._active || [],
          o = this._getActiveElements(t, n, e, i),
          a = this._positionChanged(o, t),
          r = e || !f(o, n) || a;
        return r && (this._active = o, (s.enabled || s.external) && (this._eventPosition = {
          x: t.x,
          y: t.y
        }, this.update(!0, e))), r;
      }
    }, {
      key: "_getActiveElements",
      value: function _getActiveElements(t, e, i, s) {
        var _this45 = this;
        var n = this.options;
        if ("mouseout" === t.type) return [];
        if (!s) return e.filter(function (t) {
          return _this45.chart.data.datasets[t.datasetIndex] && void 0 !== _this45.chart.getDatasetMeta(t.datasetIndex).controller.getParsed(t.index);
        });
        var o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
        return n.reverse && o.reverse(), o;
      }
    }, {
      key: "_positionChanged",
      value: function _positionChanged(t, e) {
        var i = this.caretX,
          s = this.caretY,
          n = this.options,
          o = Sa[n.position].call(this, t, e);
        return !1 !== o && (i !== o.x || s !== o.y);
      }
    }]);
  }(Hs);
  _defineProperty(Va, "positioners", Sa);
  var Ba = {
    id: "tooltip",
    _element: Va,
    positioners: Sa,
    afterInit: function afterInit(t, e, i) {
      i && (t.tooltip = new Va({
        chart: t,
        options: i
      }));
    },
    beforeUpdate: function beforeUpdate(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    reset: function reset(t, e, i) {
      t.tooltip && t.tooltip.initialize(i);
    },
    afterDraw: function afterDraw(t) {
      var e = t.tooltip;
      if (e && e._willRender()) {
        var _i75 = {
          tooltip: e
        };
        if (!1 === t.notifyPlugins("beforeTooltipDraw", _objectSpread(_objectSpread({}, _i75), {}, {
          cancelable: !0
        }))) return;
        e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", _i75);
      }
    },
    afterEvent: function afterEvent(t, e) {
      if (t.tooltip) {
        var _i76 = e.replay;
        t.tooltip.handleEvent(e.event, _i76, e.inChartArea) && (e.changed = !0);
      }
    },
    defaults: {
      enabled: !0,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: function boxHeight(t, e) {
        return e.bodyFont.size;
      },
      boxWidth: function boxWidth(t, e) {
        return e.bodyFont.size;
      },
      multiKeyBackground: "#fff",
      displayColors: !0,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "width", "height", "caretX", "caretY"]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: za
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: function _scriptable(t) {
        return "filter" !== t && "itemSort" !== t && "external" !== t;
      },
      _indexable: !1,
      callbacks: {
        _scriptable: !1,
        _indexable: !1
      },
      animation: {
        _fallback: !1
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: ["interaction"]
  };
  return An.register(Yn, jo, fo, t), An.helpers = _objectSpread({}, Wi), An._adapters = Rn, An.Animation = Cs, An.Animations = Os, An.animator = xt, An.controllers = en.controllers.items, An.DatasetController = Ns, An.Element = Hs, An.elements = fo, An.Interaction = Xi, An.layouts = as, An.platforms = Ss, An.Scale = Js, An.Ticks = ae, Object.assign(An, Yn, jo, fo, t, Ss), An.Chart = An, "undefined" != typeof window && (window.Chart = An), An;
});
