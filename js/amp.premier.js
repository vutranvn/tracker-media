! function(e) {
    var r = e.babelHelpers = {};
    r.typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r.jsx = function() {
        var e = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        return function(r, t, n, o) {
            var i = r && r.defaultProps,
                u = arguments.length - 3;
            if (t || 0 === u || (t = {}), t && i)
                for (var a in i) void 0 === t[a] && (t[a] = i[a]);
            else t || (t = i || {});
            if (1 === u) t.children = o;
            else if (u > 1) {
                for (var f = Array(u), l = 0; l < u; l++) f[l] = arguments[l + 3];
                t.children = f
            }
            return {
                $$typeof: e,
                type: r,
                key: void 0 === n ? null : "" + n,
                ref: null,
                props: t,
                _owner: null
            }
        }
    }(), r.asyncIterator = function(e) {
        if ("function" == typeof Symbol) {
            if (Symbol.asyncIterator) {
                var r = e[Symbol.asyncIterator];
                if (null != r) return r.call(e)
            }
            if (Symbol.iterator) return e[Symbol.iterator]()
        }
        throw new TypeError("Object is not async iterable")
    }, r.asyncGenerator = function() {
        function e(e) {
            this.value = e
        }

        function r(r) {
            function t(e, r) {
                return new Promise(function(t, o) {
                    var a = {
                        key: e,
                        arg: r,
                        resolve: t,
                        reject: o,
                        next: null
                    };
                    u ? u = u.next = a : (i = u = a, n(e, r))
                })
            }

            function n(t, i) {
                try {
                    var u = r[t](i),
                        a = u.value;
                    a instanceof e ? Promise.resolve(a.value).then(function(e) {
                        n("next", e)
                    }, function(e) {
                        n("throw", e)
                    }) : o(u.done ? "return" : "normal", u.value)
                } catch (e) {
                    o("throw", e)
                }
            }

            function o(e, r) {
                switch (e) {
                    case "return":
                        i.resolve({
                            value: r,
                            done: !0
                        });
                        break;
                    case "throw":
                        i.reject(r);
                        break;
                    default:
                        i.resolve({
                            value: r,
                            done: !1
                        })
                }
                i = i.next, i ? n(i.key, i.arg) : u = null
            }
            var i, u;
            this._invoke = t, "function" != typeof r.return && (this.return = void 0)
        }
        return "function" == typeof Symbol && Symbol.asyncIterator && (r.prototype[Symbol.asyncIterator] = function() {
            return this
        }), r.prototype.next = function(e) {
            return this._invoke("next", e)
        }, r.prototype.throw = function(e) {
            return this._invoke("throw", e)
        }, r.prototype.return = function(e) {
            return this._invoke("return", e)
        }, {
            wrap: function(e) {
                return function() {
                    return new r(e.apply(this, arguments))
                }
            },
            await: function(r) {
                return new e(r)
            }
        }
    }(), r.asyncGeneratorDelegate = function(e, r) {
        function t(t, n) {
            return o = !0, n = new Promise(function(r) {
                r(e[t](n))
            }), {
                done: !1,
                value: r(n)
            }
        }
        var n = {},
            o = !1;
        return "function" == typeof Symbol && Symbol.iterator && (n[Symbol.iterator] = function() {
            return this
        }), n.next = function(e) {
            return o ? (o = !1, e) : t("next", e)
        }, "function" == typeof e.throw && (n.throw = function(e) {
            if (o) throw o = !1, e;
            return t("throw", e)
        }), "function" == typeof e.return && (n.return = function(e) {
            return t("return", e)
        }), n
    }, r.asyncToGenerator = function(e) {
        return function() {
            var r = e.apply(this, arguments);
            return new Promise(function(e, t) {
                function n(o, i) {
                    try {
                        var u = r[o](i),
                            a = u.value
                    } catch (e) {
                        return void t(e)
                    }
                    return u.done ? void e(a) : Promise.resolve(a).then(function(e) {
                        n("next", e)
                    }, function(e) {
                        n("throw", e)
                    })
                }
                return n("next")
            })
        }
    }, r.classCallCheck = function(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
    }, r.createClass = function() {
        function e(e, r) {
            for (var t = 0; t < r.length; t++) {
                var n = r[t];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(r, t, n) {
            return t && e(r.prototype, t), n && e(r, n), r
        }
    }(), r.defineEnumerableProperties = function(e, r) {
        for (var t in r) {
            var n = r[t];
            n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n)
        }
        return e
    }, r.defaults = function(e, r) {
        for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
            var o = t[n],
                i = Object.getOwnPropertyDescriptor(r, o);
            i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i)
        }
        return e
    }, r.defineProperty = function(e, r, t) {
        return r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }, r.extends = Object.assign || function(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
        }, r.get = function e(r, t, n) {
        null === r && (r = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(r, t);
        if (void 0 === o) {
            var i = Object.getPrototypeOf(r);
            return null === i ? void 0 : e(i, t, n)
        }
        if ("value" in o) return o.value;
        var u = o.get;
        if (void 0 !== u) return u.call(n)
    }, r.inherits = function(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r)
    }, r.instanceof = function(e, r) {
        return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r
    }, r.interopRequireDefault = function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }, r.interopRequireWildcard = function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
        return r.default = e, r
    }, r.newArrowCheck = function(e, r) {
        if (e !== r) throw new TypeError("Cannot instantiate an arrow function")
    }, r.objectDestructuringEmpty = function(e) {
        if (null == e) throw new TypeError("Cannot destructure undefined")
    }, r.objectWithoutProperties = function(e, r) {
        var t = {};
        for (var n in e) r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t
    }, r.possibleConstructorReturn = function(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || "object" != typeof r && "function" != typeof r ? e : r
    }, r.selfGlobal = "undefined" == typeof e ? self : e, r.set = function e(r, t, n, o) {
        var i = Object.getOwnPropertyDescriptor(r, t);
        if (void 0 === i) {
            var u = Object.getPrototypeOf(r);
            null !== u && e(u, t, n, o)
        } else if ("value" in i && i.writable) i.value = n;
        else {
            var a = i.set;
            void 0 !== a && a.call(o, n)
        }
        return n
    }, r.slicedToArray = function() {
        function e(e, r) {
            var t = [],
                n = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, a = e[Symbol.iterator](); !(n = (u = a.next()).done) && (t.push(u.value), !r || t.length !== r); n = !0);
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (o) throw i
                }
            }
            return t
        }
        return function(r, t) {
            if (Array.isArray(r)) return r;
            if (Symbol.iterator in Object(r)) return e(r, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(), r.slicedToArrayLoose = function(e, r) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) {
            for (var t, n = [], o = e[Symbol.iterator](); !(t = o.next()).done && (n.push(t.value), !r || n.length !== r););
            return n
        }
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }, r.taggedTemplateLiteral = function(e, r) {
        return Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(r)
            }
        }))
    }, r.taggedTemplateLiteralLoose = function(e, r) {
        return e.raw = r, e
    }, r.temporalRef = function(e, r, t) {
        if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");
        return e
    }, r.temporalUndefined = {}, r.toArray = function(e) {
        return Array.isArray(e) ? e : Array.from(e)
    }, r.toConsumableArray = function(e) {
        if (Array.isArray(e)) {
            for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r];
            return t
        }
        return Array.from(e)
    }
}("undefined" == typeof global ? self : global);
try {
    var ce = new window.CustomEvent("test");
    ce.preventDefault();
    if (!0 !== ce.defaultPrevented) throw Error("Could not prevent default");
} catch (e) {
    var CustomEvent = function(d, a) {
        var b, c;
        a = a || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
        b = document.createEvent("CustomEvent");
        b.initCustomEvent(d, a.bubbles, a.cancelable, a.detail);
        c = b.preventDefault;
        b.preventDefault = function() {
            c.call(this);
            try {
                Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                })
            } catch (f) {
                this.defaultPrevented = !0
            }
        };
        return b
    };
    CustomEvent.prototype =
        window.Event.prototype;
    window.CustomEvent = CustomEvent
};
! function(t, e) {
    if (!t.ES6Promise) {
        t.ES6Promise = e();
        t.ES6Promise.polyfill()
    }
}(this, function() {
    "use strict";

    function t(t) {
        return "function" == typeof t || "object" == typeof t && null !== t
    }

    function e(t) {
        return "function" == typeof t
    }

    function n(t) {
        I = t
    }

    function r(t) {
        J = t
    }

    function o() {
        return function() {
            return process.nextTick(a)
        }
    }

    function i() {
        return "undefined" != typeof H ? function() {
            H(a)
        } : c()
    }

    function s() {
        var t = 0,
            e = new V(a),
            n = document.createTextNode("");
        return e.observe(n, {
            characterData: !0
        }),
            function() {
                n.data = t = ++t % 2
            }
    }

    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
            function() {
                return t.port2.postMessage(0)
            }
    }

    function c() {
        var t = setTimeout;
        return function() {
            return t(a, 1)
        }
    }

    function a() {
        for (var t = 0; t < G; t += 2) {
            var e = $[t],
                n = $[t + 1];
            e(n), $[t] = void 0, $[t + 1] = void 0
        }
        G = 0
    }

    function f() {
        try {
            var t = require,
                e = t("vertx");
            return H = e.runOnLoop || e.runOnContext, i()
        } catch (n) {
            return c()
        }
    }

    function l(t, e) {
        var n = arguments,
            r = this,
            o = new this.constructor(p);
        void 0 === o[et] && k(o);
        var i = r._state;
        return i ? ! function() {
            var t = n[i - 1];
            J(function() {
                return x(i, o, t, r._result)
            })
        }() : E(r, o, t, e), o
    }

    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) return t;
        var n = new e(p);
        return g(n, t), n
    }

    function p() {}

    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function _(t) {
        try {
            return t.then
        } catch (e) {
            return it.error = e, it
        }
    }

    function y(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }

    function m(t, e, n) {
        J(function(t) {
            var r = !1,
                o = y(n, e, function(n) {
                    r || (r = !0, e !== n ? g(t, n) : S(t, n))
                }, function(e) {
                    r || (r = !0, j(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, j(t, o))
        }, t)
    }

    function b(t, e) {
        e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function(e) {
            return g(t, e)
        }, function(e) {
            return j(t, e)
        })
    }

    function w(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? j(t, it.error) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n)
    }

    function g(e, n) {
        e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n)
    }

    function A(t) {
        t._onerror && t._onerror(t._result), P(t)
    }

    function S(t, e) {
        t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(P, t))
    }

    function j(t, e) {
        t._state === nt && (t._state = ot, t._result = e, J(A, t))
    }

    function E(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(P, t)
    }

    function P(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }

    function T() {
        this.error = null
    }

    function M(t, e) {
        try {
            return t(e)
        } catch (n) {
            return st.error = n, st
        }
    }

    function x(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = void 0,
            a = void 0;
        if (i) {
            if (s = M(r, o), s === st ? (a = !0, u = s.error, s = null) : c = !0, n === s) return void j(n, d())
        } else s = o, c = !0;
        n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s))
    }

    function C(t, e) {
        try {
            e(function(e) {
                g(t, e)
            }, function(e) {
                j(t, e)
            })
        } catch (n) {
            j(t, n)
        }
    }

    function O() {
        return ut++
    }

    function k(t) {
        t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = []
    }

    function Y(t, e) {
        this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q())
    }

    function q() {
        return new Error("Array Methods must be provided an Array")
    }

    function F(t) {
        return new Y(this, t).promise
    }

    function D(t) {
        var e = this;
        return new e(B(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
        })
    }

    function K(t) {
        var e = this,
            n = new e(p);
        return j(n, t), n
    }

    function L() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function U(t) {
        this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N())
    }

    function W() {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else try {
                t = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
        }
        t.Promise = U
    }
    var z = void 0;
    z = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    var B = z,
        G = 0,
        H = void 0,
        I = void 0,
        J = function(t, e) {
            $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt())
        },
        Q = "undefined" != typeof window ? window : void 0,
        R = Q || {},
        V = R.MutationObserver || R.WebKitMutationObserver,
        X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        $ = new Array(1e3),
        tt = void 0;
    tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == typeof require ? f() : c();
    var et = Math.random().toString(36).substring(16),
        nt = void 0,
        rt = 1,
        ot = 2,
        it = new T,
        st = new T,
        ut = 0;
    return Y.prototype._enumerate = function() {
        for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++) this._eachEntry(e[n], n)
    }, Y.prototype._eachEntry = function(t, e) {
        var n = this._instanceConstructor,
            r = n.resolve;
        if (r === h) {
            var o = _(t);
            if (o === l && t._state !== nt) this._settledAt(t._state, e, t._result);
            else if ("function" != typeof o) this._remaining--, this._result[e] = t;
            else if (n === U) {
                var i = new n(p);
                w(i, t, o), this._willSettleAt(i, e)
            } else this._willSettleAt(new n(function(e) {
                return e(t)
            }), e)
        } else this._willSettleAt(r(t), e)
    }, Y.prototype._settledAt = function(t, e, n) {
        var r = this.promise;
        r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result)
    }, Y.prototype._willSettleAt = function(t, e) {
        var n = this;
        E(t, void 0, function(t) {
            return n._settledAt(rt, e, t)
        }, function(t) {
            return n._settledAt(ot, e, t)
        })
    }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = {
        constructor: U,
        then: l,
        "catch": function(t) {
            return this.then(null, t)
        }
    }, U.polyfill = W, U.Promise = U, U
});
(function(n) {
    function i(a, d) {
        this.setNotifyMethod(a);
        this.setNotifyContext(d)
    }

    function j(a, d, b) {
        this.name = a;
        this.body = d;
        this.type = b
    }

    function k() {}

    function m() {}

    function l() {
        this.subCommands = [];
        this.initializeMacroCommand()
    }

    function g(a, d) {
        this.mediatorName = a || this.constructor.NAME;
        this.viewComponent = d
    }

    function h(a, d) {
        this.proxyName = a || this.constructor.NAME;
        null != d && this.setData(d)
    }

    function b(a) {
        if (null != b.instanceMap[a]) throw Error(b.MULTITON_MSG);
        this.initializeNotifier(a);
        b.instanceMap[a] = this;
        this.initializeFacade()
    }

    function c(a) {
        if (null != c.instanceMap[a]) throw Error(c.MULTITON_MSG);
        this.multitonKey = a;
        c.instanceMap[this.multitonKey] = this;
        this.mediatorMap = [];
        this.observerMap = [];
        this.initializeView()
    }

    function e(a) {
        if (e.instanceMap[a]) throw Error(e.MULTITON_MSG);
        this.multitonKey = a;
        e.instanceMap[a] = this;
        this.proxyMap = [];
        this.initializeModel()
    }

    function f(a) {
        if (null != f.instanceMap[a]) throw Error(f.MULTITON_MSG);
        this.multitonKey = a;
        f.instanceMap[this.multitonKey] = this;
        this.commandMap = [];
        this.initializeController()
    }

    function p(a, d, b) {
        for (var a = a.split("."), b = b || o.global, c, e, f = 0, g = a.length; f < g; f++) c = b, e = a[f], b = null == b[e] ? b[e] = {} : b[e];
        return null == d ? b : c[e] = d
    }
    null == n && (n = window);
    if (!n.puremvc) {
        i.prototype.setNotifyMethod = function(a) {
            this.notify = a
        };
        i.prototype.setNotifyContext = function(a) {
            this.context = a
        };
        i.prototype.getNotifyMethod = function() {
            return this.notify
        };
        i.prototype.getNotifyContext = function() {
            return this.context
        };
        i.prototype.notifyObserver = function(a) {
            this.getNotifyMethod().call(this.getNotifyContext(),
                a)
        };
        i.prototype.compareNotifyContext = function(a) {
            return a === this.context
        };
        i.prototype.notify = null;
        i.prototype.context = null;
        j.prototype.getName = function() {
            return this.name
        };
        j.prototype.setBody = function(a) {
            this.body = a
        };
        j.prototype.getBody = function() {
            return this.body
        };
        j.prototype.setType = function(a) {
            this.type = a
        };
        j.prototype.getType = function() {
            return this.type
        };
        j.prototype.toString = function() {
            var a = "Notification Name: " + this.getName(),
                a = a + ("\nBody:" + (null == this.body ? "null" : this.body.toString()));
            return a +=
                "\nType:" + (null == this.type ? "null" : this.type)
        };
        j.prototype.name = null;
        j.prototype.type = null;
        j.prototype.body = null;
        k.prototype.sendNotification = function(a, d, b) {
            var c = this.getFacade();
            c && c.sendNotification(a, d, b)
        };
        k.prototype.initializeNotifier = function(a) {
            this.multitonKey = "" + a;
            this.facade = this.getFacade()
        };
        k.prototype.getFacade = function() {
            if (null == this.multitonKey) throw Error(k.MULTITON_MSG);
            return b.getInstance(this.multitonKey)
        };
        k.prototype.multitonKey = null;
        k.MULTITON_MSG = "multitonKey for this Notifier not yet initialized!";
        m.prototype = new k;
        m.prototype.constructor = m;
        m.prototype.execute = function() {};
        l.prototype = new k;
        l.prototype.constructor = l;
        l.prototype.subCommands = null;
        l.prototype.initializeMacroCommand = function() {};
        l.prototype.addSubCommand = function(a) {
            this.subCommands.push(a)
        };
        l.prototype.execute = function(a) {
            for (; 0 < this.subCommands.length;) {
                var d = new(this.subCommands.shift());
                d.initializeNotifier(this.multitonKey);
                d.execute(a)
            }
        };
        g.NAME = "Mediator";
        g.prototype = new k;
        g.prototype.constructor = g;
        g.prototype.getMediatorName =
            function() {
                return this.mediatorName
            };
        g.prototype.setViewComponent = function(a) {
            this.viewComponent = a
        };
        g.prototype.getViewComponent = function() {
            return this.viewComponent
        };
        g.prototype.listNotificationInterests = function() {
            return []
        };
        g.prototype.handleNotification = function() {};
        g.prototype.onRegister = function() {};
        g.prototype.onRemove = function() {};
        g.prototype.mediatorName = null;
        g.prototype.viewComponent = null;
        h.NAME = "Proxy";
        h.prototype = new k;
        h.prototype.constructor = h;
        h.prototype.getProxyName = function() {
            return this.proxyName
        };
        h.prototype.setData = function(a) {
            this.data = a
        };
        h.prototype.getData = function() {
            return this.data
        };
        h.prototype.onRegister = function() {};
        h.prototype.onRemove = function() {};
        h.prototype.proxyName = null;
        h.prototype.data = null;
        b.prototype.initializeFacade = function() {
            this.initializeModel();
            this.initializeController();
            this.initializeView()
        };
        b.getInstance = function(a) {
            if (null == a) return null;
            null == b.instanceMap[a] && (b.instanceMap[a] = new b(a));
            return b.instanceMap[a]
        };
        b.prototype.initializeController = function() {
            if (null ==
                this.controller) this.controller = f.getInstance(this.multitonKey)
        };
        b.prototype.initializeModel = function() {
            if (null == this.model) this.model = e.getInstance(this.multitonKey)
        };
        b.prototype.initializeView = function() {
            if (null == this.view) this.view = c.getInstance(this.multitonKey)
        };
        b.prototype.registerCommand = function(a, d) {
            this.controller.registerCommand(a, d)
        };
        b.prototype.removeCommand = function(a) {
            this.controller.removeCommand(a)
        };
        b.prototype.hasCommand = function(a) {
            return this.controller.hasCommand(a)
        };
        b.prototype.registerProxy =
            function(a) {
                this.model.registerProxy(a)
            };
        b.prototype.retrieveProxy = function(a) {
            return this.model.retrieveProxy(a)
        };
        b.prototype.removeProxy = function(a) {
            var d = null;
            null != this.model && (d = this.model.removeProxy(a));
            return d
        };
        b.prototype.hasProxy = function(a) {
            return this.model.hasProxy(a)
        };
        b.prototype.registerMediator = function(a) {
            null != this.view && this.view.registerMediator(a)
        };
        b.prototype.retrieveMediator = function(a) {
            return this.view.retrieveMediator(a)
        };
        b.prototype.removeMediator = function(a) {
            var d = null;
            null != this.view && (d = this.view.removeMediator(a));
            return d
        };
        b.prototype.hasMediator = function(a) {
            return this.view.hasMediator(a)
        };
        b.prototype.sendNotification = function(a, d, b) {
            this.notifyObservers(new j(a, d, b))
        };
        b.prototype.notifyObservers = function(a) {
            null != this.view && this.view.notifyObservers(a)
        };
        b.prototype.initializeNotifier = function(a) {
            this.multitonKey = a
        };
        b.hasCore = function(a) {
            return null != b.instanceMap[a]
        };
        b.removeCore = function(a) {
            null != b.instanceMap[a] && (e.removeModel(a), c.removeView(a), f.removeController(a),
                delete b.instanceMap[a])
        };
        b.prototype.controller = null;
        b.prototype.model = null;
        b.prototype.view = null;
        b.prototype.multitonKey = null;
        b.instanceMap = [];
        b.MULTITON_MSG = "Facade instance for this Multiton key already constructed!";
        c.prototype.initializeView = function() {};
        c.getInstance = function(a) {
            if (null == a) return null;
            null == c.instanceMap[a] && (c.instanceMap[a] = new c(a));
            return c.instanceMap[a]
        };
        c.prototype.registerObserver = function(a, d) {
            null != this.observerMap[a] ? this.observerMap[a].push(d) : this.observerMap[a] = [d]
        };
        c.prototype.notifyObservers = function(a) {
            if (null != this.observerMap[a.getName()]) {
                for (var d = this.observerMap[a.getName()], b = [], c, e = 0; e < d.length; e++) c = d[e], b.push(c);
                for (e = 0; e < b.length; e++) c = b[e], c.notifyObserver(a)
            }
        };
        c.prototype.removeObserver = function(a, d) {
            for (var b = this.observerMap[a], c = 0; c < b.length; c++)
                if (!0 == b[c].compareNotifyContext(d)) {
                    b.splice(c, 1);
                    break
                }
            0 == b.length && delete this.observerMap[a]
        };
        c.prototype.registerMediator = function(a) {
            if (null == this.mediatorMap[a.getMediatorName()]) {
                a.initializeNotifier(this.multitonKey);
                this.mediatorMap[a.getMediatorName()] = a;
                var d = a.listNotificationInterests();
                if (0 < d.length)
                    for (var b = new i(a.handleNotification, a), c = 0; c < d.length; c++) this.registerObserver(d[c], b);
                a.onRegister()
            }
        };
        c.prototype.retrieveMediator = function(a) {
            return this.mediatorMap[a]
        };
        c.prototype.removeMediator = function(a) {
            var d = this.mediatorMap[a];
            if (d) {
                for (var b = d.listNotificationInterests(), c = 0; c < b.length; c++) this.removeObserver(b[c], d);
                delete this.mediatorMap[a];
                d.onRemove()
            }
            return d
        };
        c.prototype.hasMediator = function(a) {
            return null !=
                this.mediatorMap[a]
        };
        c.removeView = function(a) {
            delete c.instanceMap[a]
        };
        c.prototype.mediatorMap = null;
        c.prototype.observerMap = null;
        c.instanceMap = [];
        c.prototype.multitonKey = null;
        c.MULTITON_MSG = "View instance for this Multiton key already constructed!";
        e.prototype.initializeModel = function() {};
        e.getInstance = function(a) {
            if (null == a) return null;
            null == e.instanceMap[a] && (e.instanceMap[a] = new e(a));
            return e.instanceMap[a]
        };
        e.prototype.registerProxy = function(a) {
            a.initializeNotifier(this.multitonKey);
            this.proxyMap[a.getProxyName()] =
                a;
            a.onRegister()
        };
        e.prototype.retrieveProxy = function(a) {
            return this.proxyMap[a]
        };
        e.prototype.hasProxy = function(a) {
            return null != this.proxyMap[a]
        };
        e.prototype.removeProxy = function(a) {
            var b = this.proxyMap[a];
            b && (this.proxyMap[a] = null, b.onRemove());
            return b
        };
        e.removeModel = function(a) {
            delete e.instanceMap[a]
        };
        e.prototype.proxyMap = null;
        e.instanceMap = [];
        e.MULTITON_MSG = "Model instance for this Multiton key already constructed!";
        f.prototype.initializeController = function() {
            this.view = c.getInstance(this.multitonKey)
        };
        f.getInstance = function(a) {
            if (null == a) return null;
            null == this.instanceMap[a] && (this.instanceMap[a] = new this(a));
            return this.instanceMap[a]
        };
        f.prototype.executeCommand = function(a) {
            var b = this.commandMap[a.getName()];
            null != b && (b = new b, b.initializeNotifier(this.multitonKey), b.execute(a))
        };
        f.prototype.registerCommand = function(a, b) {
            null == this.commandMap[a] && this.view.registerObserver(a, new i(this.executeCommand, this));
            this.commandMap[a] = b
        };
        f.prototype.hasCommand = function(a) {
            return null != this.commandMap[a]
        };
        f.prototype.removeCommand = function(a) {
            this.hasCommand(a) && (this.view.removeObserver(a, this), this.commandMap[a] = null)
        };
        f.removeController = function(a) {
            delete this.instanceMap[a]
        };
        f.prototype.view = null;
        f.prototype.commandMap = null;
        f.prototype.multitonKey = null;
        f.instanceMap = [];
        f.MULTITON_MSG = "controller key for this Multiton key already constructed";
        var o = {
            global: function() {
                return this
            }(),
            extend: function(a, b) {
                if ("function" !== typeof a) throw new TypeError("#extend- child should be Function");
                if ("function" !==
                    typeof b) throw new TypeError("#extend- parent should be Function");
                if (b !== a) {
                    var c = new Function;
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    return a.prototype.constructor = a
                }
            },
            decorate: function(a, b) {
                for (var c in b) a[c] = b[c];
                return a
            }
        };
        n.puremvc = {
            View: c,
            Model: e,
            Controller: f,
            SimpleCommand: m,
            MacroCommand: l,
            Facade: b,
            Mediator: g,
            Observer: i,
            Notification: j,
            Notifier: k,
            Proxy: h,
            define: function(a, b, c) {
                a || (a = {});
                var e = a.name,
                    f = a.parent,
                    g = "function" === typeof f,
                    h = a.scope || null;
                if ("parent" in a && !g) throw new TypeError("Class parent must be Function");
                if (a.hasOwnProperty("constructor")) {
                    if (a = a.constructor, "function" !== typeof a) throw new TypeError("Class constructor must be Function");
                } else a = g ? function() {
                    f.apply(this, arguments)
                } : new Function;
                g && o.extend(a, f);
                if (b) g = a.prototype, o.decorate(g, b), g.constructor = a;
                c && o.decorate(a, c);
                if (e) {
                    if ("string" !== typeof e) throw new TypeError("Class name must be primitive string");
                    p(e, a, h)
                }
                return a
            },
            declare: p
        }
    }
})(this);

(function() {
    function zi() {
        var a, b, c, e = this;
        b = null;
        this.getSDK = function() {
            return b
        };
        this.setSDK = function(c) {
            var e;
            b = c;
            a();
            for (e in b) c = b[e], window[e] = c;
            return b
        };
        this.saveSDK = function(a, b) {
            var e, d;
            if (null != b && null != a && "" !== a) {
                if (null == b.main)
                    for (e in b)
                        if (d = b[e], (null != d ? d.VERSION : void 0) === a) {
                            b.main = d;
                            break
                        }
                null == b.version && (b.version = a);
                c.push(b);
                return this[a] = b
            }
        };
        c = [];
        this.getVersions = function() {
            return c.slice()
        };
        this.getVersion = function(a) {
            return this[a]
        };
        this.setVersion = function(a) {
            b = this.getVersion(a);
            if (null == b) return null;
            this.setSDK(b);
            return b
        };
        this.revert = function() {
            return this.setSDK(c[0])
        };
        this.noConflict = function() {
            var a;
            a = this.getSDK();
            this.revert();
            return a
        };
        this.create = function() {
            var a;
            a = function(a, b) {
                this.prototype = a.prototype;
                return a.apply(this, b)
            };
            return function(c) {
                return new a(b.main, arguments)
            }
        }();
        a = function() {
            var a, c, d;
            if (null != (c = window.com) && null != (d = c.akamai) && d.amp)
                for (a in window)
                    if (c = window[a], (c === window.AMP || c === window.AMPremier) && null != (null != c ? c.VERSION : void 0) && "" !==
                        c.VERSION && c.VERSION !== (null != b ? b.version : void 0) && null == e[c.VERSION]) {
                        a = {};
                        a.main = c;
                        a.com = window.com;
                        window.AMP && (a.AMP = window.AMP);
                        window.AMPPremier && (a.AMPremier = window.AMPPremier);
                        window.Utils && (a.Utils = window.Utils);
                        window.QueryString && (a.QueryString = window.QueryString);
                        window.QueryParams && (a.QueryParams = window.QueryParams);
                        e.saveSDK(c.VERSION, a);
                        break
                    }
        };
        a()
    }
    var qi;
    null == window.AKAMAI_MEDIA_PLAYER && (window.AKAMAI_MEDIA_PLAYER = new zi);
    if (null == window.AKAMAI_MEDIA_PLAYER["AMP Premier v2.71.18"]) {
        qi =
            window.AKAMAI_MEDIA_PLAYER["AMP Premier v2.71.18"] = {};
        var Ai = function(a) {
                return {}.hasOwnProperty(a)
            },
            f = function(a, b) {
                function c() {
                    this.constructor = a
                }
                for (var e in b) Ai.call(b, e) && (a[e] = b[e]);
                c.prototype = b.prototype;
                a.prototype = new c;
                a.__super__ = b.prototype;
                return a
            },
            ve = function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (b in this && this[b] === a) return b;
                return -1
            },
            Bi = function(a, b) {
                return function() {
                    return a.apply(b, arguments)
                }
            },
            wc = function() {};
        wc.construct = function() {
            var a, b, c;
            c = this.deserialize(window.location.search);
            for (a in c) b = c[a], wc[a] = b;
            return !0
        };
        wc.serialize = function(a, b) {
            var c, e, n, d;
            n = [];
            for (e in a) d = a[e], null != d && (c = b ? b + "[" + e + "]" : e, n.push("object" === typeof d ? this.serialize(d, c) : encodeURIComponent(c) + "\x3d" + encodeURIComponent(d)));
            return n.join("\x26")
        };
        wc.deserialize = function(a) {
            var b;
            null != a && (b = {}, a = a.replace(/^[^?]*\?/, ""), a.replace(/([^?=&]+)(=([^&]*))?/g, function(a, e, n, d) {
                b[decodeURIComponent(e)] = decodeURIComponent(d)
            }));
            return b
        };
        wc.constructed = wc.construct();
        var x = function(a, b) {
            this.config = a;
            x.__super__.constructor.call(this,
                b)
        };
        f(x, puremvc.Proxy);
        x.NAME = "ModuleProxy";
        x.prototype.defaults = null;
        x.prototype.config = null;
        x.prototype.initializeNotifier = function(a) {
            x.__super__.initializeNotifier.call(this, a);
            this.createData()
        };
        x.prototype.createData = function() {
            this.setData(this.config)
        };
        x.prototype.getDefaults = function() {
            return this.defaults || {}
        };
        x.prototype.setData = function(a) {
            var b, c, e, n;
            null == a && (a = {});
            e = {};
            n = this.getDefaults();
            for (c in n) b = n[c], b = c in a ? a[c] : b, e[c] = b;
            x.__super__.setData.call(this, e);
            return a
        };
        x.prototype.destroy =
            function() {};
        var N = function(a) {
            this.viewComponent = a;
            this.performance = {
                init: Date.now()
            };
            N.__super__.constructor.call(this, this.getModuleName() + "-" + Date.now());
            this.dispatcher = new ib(this);
            this.logger = ia;
            this.moduleMap = {}
        };
        f(N, puremvc.Facade);
        N.prototype.logger = null;
        N.prototype.config = null;
        N.prototype.moduleName = null;
        N.prototype.moduleMap = null;
        N.prototype.viewComponent = null;
        N.prototype.dispatcher = null;
        N.prototype.oninitialized = null;
        N.prototype.onerror = null;
        N.prototype.parentModule = null;
        N.prototype.performance =
            null;
        N.prototype.initialize = function(a, b) {
            this.config = a;
            this.parentModule = b;
            this.loadModuleResources()
        };
        N.prototype.loadModuleResources = function() {
            var a, b, c, e;
            if (0 < !(null != (a = this.config.resources) && a.length)) this.resourcesLoaded();
            else {
                e = this.config.resources;
                b = 0;
                for (c = e.length; b < c; b++) a = e[b], a.src = this.evaluatePaths(a.src), null != a.debug && (a.debug = this.evaluatePaths(a.debug));
                l.addResources(this.config.resources, this.resourcesLoaded.bind(this), this.resourcesError.bind(this))
            }
        };
        N.prototype.evaluatePaths =
            function(a) {
                var b, c, e;
                if (null != a) return b = this.config.paths || (null != (c = this.parentModule) ? null != (e = c.config) ? e.paths : void 0 : void 0), null != b && (a = a.replace(/#{paths\.[^}]*}/g, function(a) {
                    return Rb.eval(a, null, null, null, b)
                })), a
            };
        N.prototype.resourcesError = function(a) {
            if ("function" === typeof this.onerror) this.onerror(this)
        };
        N.prototype.resourcesLoaded = function() {
            this.createFramework();
            if ("function" === typeof this.oninitialized) this.oninitialized(this)
        };
        N.prototype.createFramework = function() {
            this.createModel();
            this.createController();
            this.createView()
        };
        N.prototype.createModel = function() {
            this.registerProxy(new x(this.config))
        };
        N.prototype.createView = function() {};
        N.prototype.createController = function() {
            this.registerCommand(d.DISPATCH_EVENT, we)
        };
        N.prototype.getModuleName = function() {
            return this.moduleName
        };
        N.prototype.getConfig = function() {
            return this.config
        };
        N.prototype.hasModule = function(a) {
            return null != this.moduleMap[a]
        };
        N.prototype.getModules = function() {
            var a, b, c, e;
            b = {};
            e = this.moduleMap;
            for (a in e) c = e[a],
                b[a] = c.module;
            return b
        };
        N.prototype.registerModule = function(a) {
            var b, c;
            c = a.getModuleName();
            null != a && null == this.moduleMap[c] && (b = new bc(a), this.moduleMap[c] = b, this.registerMediator(b), a.onRegister())
        };
        N.prototype.retrieveModule = function(a) {
            return this.moduleMap[a].module
        };
        N.prototype.removeModule = function(a) {
            var b;
            b = this.moduleMap[a];
            if (null != b) return delete this.moduleMap[a], this.removeMediator(a), a = b.module, a.onRemove.call(a), a
        };
        N.prototype.listNotificationInterests = function() {
            return []
        };
        N.prototype.listNotificationPublications =
            function() {
                return []
            };
        N.prototype.getViewComponent = function() {
            return this.viewComponent
        };
        N.prototype.setViewComponent = function(a) {
            return this.viewComponent = a
        };
        N.prototype.onRegister = function() {};
        N.prototype.onRemove = function() {};
        N.prototype.destroy = function() {
            var a, b, c, e;
            if (null != this.getModules())
                for (a in c = this.getModules(), c) b = c[a], this.removeModule(a), b.destroy();
            null != (e = this.retrieveProxy(x.NAME)) && "function" === typeof e.destroy && e.destroy();
            puremvc.Facade.removeCore(this.multitonKey);
            null != this.viewComponent &&
            (this.viewComponent.innerHTML = "", this.viewComponent.className = "");
            for (a in this) {
                try {
                    this[a] = null
                } catch (n) {}
                delete this[a]
            }
        };
        N.prototype.addEventListener = function(a, b) {
            this.dispatcher.addEventListener(a, b)
        };
        N.prototype.once = function(a, b) {
            this.dispatcher.once(a, b)
        };
        N.prototype.logEvent = function(a) {
            var b;
            !0 !== /(timeupdate|progress)/.test(a.type) && (b = this.getModuleName().toUpperCase(), a.dispatcher && (b += " " + a.dispatcher), this.logger.log("[" + b + " EVENT] " + a.type, a))
        };
        N.prototype.dispatchEvent = function(a) {
            this.logEvent(a);
            this.dispatcher.dispatchEvent(a)
        };
        N.prototype.removeEventListener = function(a, b) {
            this.dispatcher.removeEventListener(a, b)
        };
        var ib = function(a) {
            this._target = null != a ? a : this;
            this._listenerMap = {}
        };
        ib.prototype.addEventListener = function(a, b, c) {
            null != b && null != a && (null == this._listenerMap[a] && (this._listenerMap[a] = []), -1 === this._listenerMap[a].indexOf(b) && this._listenerMap[a].push(b))
        };
        ib.prototype.once = function(a, b) {
            b.once = !0;
            this.addEventListener(a, b)
        };
        ib.prototype.dispatchEvent = function(a) {
            var b, c, e, n, d;
            c = this._listenerMap[a.type];
            b = this._target["on" + a.type];
            a.target = this._target;
            e = null;
            null != b && b.apply(this._target, [a]);
            if (null != c) {
                n = 0;
                for (d = c.length; n < d; n++) b = c[n], b.apply(this._target, [a]), !0 === b.once && (null == e && (e = []), e.push(b));
                if (0 < (null != e ? e.length : void 0))
                    for (a = 0, n = e.length; a < n; a++) b = e[a], c.splice(c.indexOf(b), 1)
            }
        };
        ib.prototype.removeEventListener = function(a, b, c) {
            if (null != b && null != a && (a = this._listenerMap[a], null != a && (b = null != a ? a.indexOf(b) : void 0, -1 !== b))) return a.splice(b, 1)
        };
        var jb = function(a) {
            this.list =
                null != a ? a : [];
            jb.__super__.constructor.call(this);
            this.handlers = {
                change: this.changeHandler.bind(this)
            }
        };
        f(jb, ib);
        jb.prototype.onchange = null;
        jb.prototype.list = null;
        jb.prototype.changeHandler = function(a) {
            this.dispatchEvent(a)
        };
        jb.prototype.add = function(a, b) {
            null == b && (b = !0);
            this.list.push(a);
            a.addEventListener("change", this.handlers.change);
            !0 === b && this.dispatchEvent({
                type: "addtrack"
            })
        };
        jb.prototype.set = function(a) {
            var b, c, e, n;
            this.clear();
            if (null != a && 0 !== a.length) {
                b = e = 0;
                for (n = a.length; e < n; b = ++e) c = a[b],
                    this.add(c, !1), this[b] = null, delete this[b];
                this.dispatchEvent({
                    type: "addtrack"
                })
            }
        };
        jb.prototype.item = function(a) {
            return this.list[a]
        };
        jb.prototype.remove = function(a, b) {
            var c;
            null == b && (b = !0);
            if (0 <= ve.call(this, a)) return c = this.list.splice(a, 1), c.removeEventListener("change", this.handlers.change), !0 === b && this.dispatchEvent({
                type: "removetrack"
            }), c
        };
        jb.prototype.clear = function() {
            var a, b, c, e;
            if (0 !== this.list.length) {
                a = c = 0;
                for (e = this.length; c < e; a = ++c) b = this[a], this.remove(b, !1), this.list[a] = null, delete this.list[a];
                this.dispatchEvent({
                    type: "removetrack"
                })
            }
        };
        jb.prototype.forEach = function(a, b) {
            var c, e, n, d, h;
            if (null != a)
                for (h = this.list, c = n = 0, d = h.length; n < d; c = ++n) e = h[c], a.call(b, e, c, this.list)
        };
        jb.prototype.getTrackById = function(a) {
            var b, c, e, n;
            n = this.list;
            c = 0;
            for (e = n.length; c < e; c++)
                if (b = n[c], b.id === a) return b
        };
        jb.prototype.getLength = function() {
            return this.list.length
        };
        var ri = function(a) {
            a.className = cc.PREFIX + "player";
            a = $a.create("install-flash", a);
            $a.create(null, a, "p", "To view this page ensure that Adobe Flash Player version 10.2.0 or greater is installed.");
            a = $a.create(null, a, "a");
            a.href = "http://www.adobe.com/go/getflashplayer";
            a = $a.create(null, a, "img");
            a.src = "//www.adobe.com/images/shared/download_buttons/get_flash_player.gif";
            a.alt = "Get Adobe Flash player"
        };
        ri.prototype.initialize = function() {};
        ri.prototype.getModules = function() {
            return []
        };
        var xe = function() {
            this.map = {}
        };
        xe.prototype.map = null;
        xe.prototype.add = function(a, b) {
            this.map[a] = b
        };
        xe.prototype.item = function(a) {
            return this.map[a]
        };
        xe.prototype.remove = function(a) {
            var b;
            b = this.map[a];
            null != b && (this.map[a] =
                null, delete this.map[a]);
            return b
        };
        var Jf = function(a, b, c) {
            this.key = a;
            this.token = b;
            this.expiration = c
        };
        Jf.prototype.key = null;
        Jf.prototype.token = null;
        Jf.prototype.expiration = null;
        var yd = function() {
            yd.__super__.constructor.call(this)
        };
        f(yd, xe);
        yd.prototype.add = function(a, b, c) {
            var e, n;
            n = ia.enabled && null != a.debug ? a.debug : a.src;
            e = this.item(n);
            !1 === a.enabled || !0 === (null != e ? e.loaded : void 0) ? b() : !1 === (null != e ? e.loaded : void 0) ? e.callbacks.push(b) : (a.loaded = !1, a.callbacks = [b], b = this.resourceLoaded.bind(a), yd.__super__.add.call(this,
                n, a), a.type === g.mimeTypes.js || /javascript/.test(a.type) ? g.loadScript(n, b, document.body, c) : (a.type === g.mimeTypes.css && g.loadStyleSheet(n), b()))
        };
        yd.prototype.resourceLoaded = function() {
            var a, b, c, e;
            this.loaded = !0;
            b = this.callbacks;
            this.callbacks = null;
            delete this.callbacks;
            c = 0;
            for (e = b.length; c < e; c++) a = b[c], a()
        };
        yd.prototype.addResources = function(a, b, c) {
            var e, n, d, h = this;
            0 < !(null != a && a.length) ? b() : (n = 0, d = function() {
                h.add(a[n], e, c)
            }, e = function() {
                n++;
                n >= a.length ? b() : d()
            }, d())
        };
        var ye = function() {
            ye.__super__.constructor.call(this)
        };
        f(ye, puremvc.SimpleCommand);
        ye.prototype.execute = function(a) {
            var b;
            this.facade.performance.ready = Date.now();
            this.sendNotification(d.READY, this.facade.config);
            a = null != (b = this.facade.config) ? b.media : void 0;
            null != a && setTimeout(this.sendNotification.bind(this, d.SET_MEDIA, a), 0)
        };
        var L = function() {
            L.__super__.constructor.call(this)
        };
        f(L, puremvc.SimpleCommand);
        L.prototype.applicationState = null;
        L.prototype.media = null;
        L.prototype.player = null;
        L.prototype.playback = null;
        L.prototype.config = null;
        L.prototype.logger =
            null;
        L.prototype.bindings = null;
        L.prototype.params = null;
        L.prototype.playerCore = null;
        L.prototype.security = null;
        L.prototype.tracks = null;
        L.prototype.initializeNotifier = function(a) {
            var b;
            L.__super__.initializeNotifier.call(this, a);
            this.player = this.facade.player || this.facade;
            this.applicationState = this.player.appState;
            this.media = this.player.mediaProxy;
            this.config = this.player.configuration;
            this.logger = this.player.logger;
            this.bindings = this.player.bindings;
            this.params = this.player.params;
            this.playerCore = this.player.playerCore;
            this.security = this.player.security;
            this.tracks = this.player.tracks;
            this.playback = (null != (b = this.player.playerCore) ? b.getActivePlaybackCore() : void 0) || this.player.playback
        };
        var ze = function() {
            ze.__super__.constructor.call(this)
        };
        f(ze, L);
        ze.prototype.execute = function(a) {
            var b;
            if (!this.applicationState.getSeeking()) {
                switch (this.applicationState.getPlayState()) {
                    case U.ENDED:
                        b = d.REPLAY;
                        break;
                    case U.PAUSED:
                    case U.READY:
                        b = d.PLAY;
                        break;
                    case U.PLAYING:
                        b = d.PAUSE
                }
                this.applicationState.getWaiting() && !0 === this.facade.getMediaElement().paused &&
                (b = d.PLAY);
                this.sendNotification(b, !0)
            }
        };
        var Kf = function() {
            Kf.__super__.constructor.call(this)
        };
        f(Kf, L);
        Kf.prototype.execute = function(a) {
            a = this.applicationState.getDisplayState() === ja.FULL_SCREEN ? ja.NORMAL : ja.FULL_SCREEN;
            this.sendNotification(d.CHANGE_DISPLAY_STATE, a)
        };
        var F = function() {
            F.__super__.constructor.call(this)
        };
        f(F, L);
        F.prototype.dispatchEvent = function(a, b) {
            var c;
            "string" !== typeof a && (b = null != a.getBody() ? a.getBody() : {}, a = a.getName());
            c = new V(a, b);
            this.sendNotification(d.DISPATCH_EVENT, c)
        };
        F.prototype.dispatchEventAfterCommand = function(a, b) {
            setTimeout(this.dispatchEvent.bind(this, a, b), 0)
        };
        F.prototype.execute = function(a) {
            this.dispatchEvent(a)
        };
        var Ae = function() {
            Ae.__super__.constructor.call(this)
        };
        f(Ae, F);
        Ae.prototype.execute = function(a) {
            !0 !== this.applicationState.getIsUserActive() && (0 === this.facade.getMediaElement().currentTime && !1 === this.media.started && !1 === this.applicationState.getSeeking() && (this.media.started = !0, this.sendNotification(d.MEDIA_SEQUENCE_STARTED)), this.applicationState.getPlayState() ===
            U.PLAYING ? Ae.__super__.execute.call(this, a) : this.sendNotification(d.CHANGE_PLAY_STATE, U.PLAYING))
        };
        var zd = function() {
            zd.__super__.constructor.call(this)
        };
        f(zd, F);
        zd.prototype.execute = function(a) {
            this.playback.pause();
            this.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE);
            zd.__super__.execute.call(this, a)
        };
        var Lf = function() {
            Lf.__super__.constructor.call(this)
        };
        f(Lf, L);
        Lf.prototype.execute = function(a) {
            this.config.setAutoplay(a.getBody())
        };
        var Mf = function() {
            Mf.__super__.constructor.call(this)
        };
        f(Mf,
            L);
        Mf.prototype.execute = function(a) {
            this.config.setLoop(a.getBody())
        };
        var Nf = function() {
            Nf.__super__.constructor.call(this)
        };
        f(Nf, L);
        Nf.prototype.execute = function(a) {
            this.playback.setVolume(a.getBody())
        };
        var Be = function() {
            Be.__super__.constructor.call(this)
        };
        f(Be, L);
        Be.prototype.execute = function(a) {
            var b, c, e, n, v = this;
            a = a.getBody();
            c = this.facade.getMediaElement();
            this.sendNotification(d.MEDIA_CHANGE, a);
            a = !1 === this.applicationState.getLocked() && !0 === this.facade.getAutoplay();
            e = this.config.getPlaysInline();
            null != e && (c.playsInline = e);
            c = this.config.getMuted();
            null != c && this.playback.setMuted(c);
            a && c && (b = this.facade.getContainer(), n = function() {
                v.facade.setMuted(!1);
                b.removeEventListener("click", n)
            }, b.addEventListener("click", n));
            a && setTimeout(this.sendNotification.bind(this, d.PLAY, !0), 0)
        };
        var Ce = function() {
            Ce.__super__.constructor.call(this)
        };
        f(Ce, L);
        Ce.prototype.execute = function(a) {
            var b, c = this;
            b = a.getBody();
            0 === b && this.media.getType() === g.mimeTypes.m3u8 && (b = 0.25);
            if (b !== this.playback.getCurrentTime())
                if (this.sendNotification(d.WAITING),
                        this.sendNotification(d.DISPLAY_TIME, {
                            currentTime: b,
                            duration: this.playback.getDuration()
                        }), this.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE), a = this.facade.getMediaElement(), this.applicationState.pausedBeforeSeek = a.paused, 0 === a.readyState) a.once("loadedmetadata", function(a) {
                    c.playback.setCurrentTime(b)
                });
                else this.playback.setCurrentTime(b)
        };
        var De = function() {
            De.__super__.constructor.call(this)
        };
        f(De, F);
        De.prototype.execute = function(a) {
            !0 === this.applicationState.getSeeking() ? this.applicationState.setSeekRequested(!0) :
                (this.applicationState.getEnded() && this.applicationState.setEnded(!1), 0 === this.facade.getMediaElement().currentTime && (this.media.started = !1), this.applicationState.setSeeking(!0), De.__super__.execute.call(this, a))
        };
        var Of = function() {
            Of.__super__.constructor.call(this)
        };
        f(Of, F);
        Of.prototype.execute = function(a) {
            var b = this;
            !0 === this.applicationState.getIsUserActive() ? setTimeout(this.sendNotification.bind(this, a.getName(), a.getBody()), 100) : setTimeout(function() {
                var c;
                b.applicationState.setSeeking(!1);
                b.dispatchEvent(a);
                b.sendNotification($.SEEKED, a.getBody());
                b.applicationState.setSeekRequested(!1);
                c = !0 === b.applicationState.pausedBeforeSeek || !0 === b.facade.retrieveProxy(s.NAME).getPaused() ? U.PAUSED : U.PLAYING;
                "full-screen" === b.applicationState.displayState && "ipad" === b.applicationState.device && b.facade.retrieveProxy(s.NAME).getPaused() !== b.facade.getMediaElement().paused && (c = !0 === b.facade.getMediaElement().paused ? U.PAUSED : U.PLAYING);
                b.sendNotification(d.CHANGE_PLAY_STATE, c)
            }, 1)
        };
        var Pf = function() {
            Pf.__super__.constructor.call(this)
        };
        f(Pf, L);
        Pf.prototype.execute = function(a) {
            "function" === typeof this.playback.replay ? this.playback.replay() : this.sendNotification(d.SET_MEDIA, this.media.getData())
        };
        var Qf = function() {
            Qf.__super__.constructor.call(this)
        };
        f(Qf, L);
        Qf.prototype.execute = function(a) {
            this.applicationState.getEnded() || (this.playback.setEnabled(!1), this.playback.pause(), this.playback.seek(this.playback.getDuration()).then(this.sendNotification.bind(this, d.ENDED)))
        };
        var Td = function() {
            Td.__super__.constructor.call(this)
        };
        f(Td,
            F);
        Td.prototype.execute = function(a) {
            this.applicationState.getEnded() || (this.applicationState.setEnded(!0), Td.__super__.execute.call(this, a), !0 === this.config.getLoop() ? this.sendNotification(d.REPLAY) : !1 === this.applicationState.getHasPostContent() && this.sendNotification(d.MEDIA_SEQUENCE_ENDED))
        };
        var Ee = function() {
            Ee.__super__.constructor.call(this)
        };
        f(Ee, L);
        Ee.prototype.execute = function(a) {
            this.sendNotification(d.PLAY_REQUEST);
            this.sendNotification(d.DISPLAY_TIME, {
                currentTime: 0,
                duration: this.media.getDuration()
            });
            this.sendNotification(d.STARTED, a.getBody())
        };
        var Rf = function() {
            Rf.__super__.constructor.call(this)
        };
        f(Rf, L);
        Rf.prototype.execute = function(a) {
            this.applicationState.setIsUserActive(a.getBody())
        };
        var Fe = function() {
            Fe.__super__.constructor.call(this)
        };
        f(Fe, F);
        Fe.prototype.execute = function(a) {
            this.applicationState.getWaiting() || (this.applicationState.setWaiting(!0), Fe.__super__.execute.call(this, a))
        };
        var Sf = function() {
            Sf.__super__.constructor.call(this)
        };
        f(Sf, L);
        Sf.prototype.execute = function(a) {
            this.playback.setMuted(a.getBody())
        };
        var Ge = function() {
            Ge.__super__.constructor.call(this)
        };
        f(Ge, F);
        Ge.prototype.execute = function(a) {
            null == this.security.getSession() && (this.security.setSession($a.createUID()), this.sendNotification(d.MEDIA_VALIDATED, this.media.getData()), Ge.__super__.execute.call(this, a))
        };
        var Tf = function() {
            Tf.__super__.constructor.call(this)
        };
        f(Tf, L);
        Tf.prototype.execute = function(a) {
            this.playback.initialized = !0
        };
        var Uf = function() {
            Uf.__super__.constructor.call(this)
        };
        f(Uf, L);
        Uf.prototype.execute = function(a) {
            this.playerCore.registerPlaybackCore(a.getBody())
        };
        var Vf = function() {
            Vf.__super__.constructor.call(this)
        };
        f(Vf, L);
        Vf.prototype.execute = function(a) {
            a = a.getBody();
            this.sendNotification(d.CHANGE_CONTENT, {
                from: this.media.getData(),
                to: a
            });
            this.media.updateData(a);
            this.sendNotification(d.UPDATE_DATA_BINDINGS);
            this.sendNotification(d.CHANGE_CONTENT, this.media.getData())
        };
        var He = function() {
            He.__super__.constructor.call(this)
        };
        f(He, F);
        He.prototype.execute = function(a) {
            this.sendNotification(d.DISPLAY_TIME, {
                currentTime: this.playback.getCurrentTime(),
                duration: this.playback.getDuration()
            });
            He.__super__.execute.call(this, a)
        };
        var Wf = function() {
            Wf.__super__.constructor.call(this)
        };
        f(Wf, L);
        Wf.prototype.execute = function(a) {
            this.playback.setMuted(!this.playback.getMuted())
        };
        var Ie = function() {
            Ie.__super__.constructor.call(this)
        };
        f(Ie, F);
        Ie.prototype.execute = function(a) {
            !0 !== this.media.started && (this.media.started = !0, Ie.__super__.execute.call(this, a), this.sendNotification(d.WAITING), this.sendNotification(d.MEDIA_SEQUENCE_STARTED))
        };
        var Xf = function() {
            Xf.__super__.constructor.call(this)
        };
        f(Xf,
            L);
        Xf.prototype.execute = function(a) {
            var b, c, e, n;
            c = this.player.getMediaElement();
            b = a.getBody();
            e = 0;
            for (n = b.length; e < n; e++) a = b[e], c.addEventListener(a, this.playback.handlers[a])
        };
        var Yf = function() {
            Yf.__super__.constructor.call(this)
        };
        f(Yf, L);
        Yf.prototype.execute = function(a) {
            var b, c, e, n;
            c = this.player.getMediaElement();
            b = a.getBody();
            e = 0;
            for (n = b.length; e < n; e++) a = b[e], c.removeEventListener(a, this.playback.handlers[a])
        };
        var Je = function() {
            Je.__super__.constructor.call(this)
        };
        f(Je, F);
        Je.prototype.execute =
            function(a) {
                this.applicationState.setVolume(a.getBody());
                Je.__super__.execute.call(this, a)
            };
        var Zf = function() {
            Zf.__super__.constructor.call(this)
        };
        f(Zf, L);
        Zf.prototype.execute = function(a) {
            this.applicationState.setHasPostContent(a.getBody())
        };
        var Ud = function() {
            Ud.__super__.constructor.call(this)
        };
        f(Ud, F);
        Ud.prototype.execute = function(a) {
            !0 === this.config.getLoop() ? (Ud.__super__.execute.call(this, a), this.sendNotification(d.REPLAY)) : (this.sendNotification(d.CHANGE_PLAY_STATE, U.ENDED), this.sendNotification(d.CHANGE_ACTIVE_STATE,
                kb.ACTIVE), Ud.__super__.execute.call(this, a))
        };
        var $f = function() {
            $f.__super__.constructor.call(this)
        };
        f($f, L);
        $f.prototype.execute = function(a) {
            a = a.getBody();
            this.sendNotification(a ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE, "locked");
            this.applicationState.setLocked(a)
        };
        var ag = function() {
            ag.__super__.constructor.call(this)
        };
        f(ag, L);
        ag.prototype.execute = function(a) {
            a = "persistent" !== this.config.getControls().mode ? a.getBody() : kb.ACTIVE;
            this.applicationState.setActiveState(a)
        };
        var Sb = function() {
            Sb.__super__.constructor.call(this);
            this.keyHandler = this.keypress.bind(this)
        };
        f(Sb, F);
        Sb.interval = null;
        Sb.keyHandler = null;
        Sb.prototype.keypress = function(a) {
            switch (a.keyCode || a.which || a.charCode) {
                case 32:
                    this.facade.getEnded() || (this.facade.getPaused() ? this.facade.play() : this.facade.pause())
            }
        };
        Sb.prototype.execute = function(a) {
            var b, c, e, n = this;
            a = a.getBody();
            a !== this.applicationState.getDisplayState() && (this.applicationState.setDisplayState(a), "external" !== this.config.getFullscreen().mode && (b = this.facade.getMediaElement(), e = this.facade.getViewComponent(),
                c = g.getFullScreenApi(e, b), a === ja.FULL_SCREEN ? (null != c.event ? null != e.mozRequestFullScreen ? document[c.event] = function(a) {
                if (!document.mozFullScreen) return n.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL)
            } : e[c.event] = function(a) {
                if (null == document[c.element]) return n.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL)
            } : (clearInterval(Sb.interval), Sb.interval = setInterval(function() {
                    !0 !== b.webkitDisplayingFullscreen && (n.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL), clearInterval(Sb.interval))
                },
                100)), null != c.error && document.addEventListener(c.error, this.facade.logger.error.bind(this.facade.logger)), c.enter(), this.playback.keyHandler = this.keypress.bind(this), window.addEventListener("keypress", this.playback.keyHandler)) : a === ja.NORMAL && (window.removeEventListener("keypress", this.playback.keyHandler), this.playback.keyHandler = null, null != c && "function" === typeof c.exit && c.exit(), b[c.event] = null, clearInterval(Sb.interval))), this.sendNotifications(a))
        };
        Sb.prototype.sendNotifications = function(a) {
            setTimeout(this.sendNotification.bind(this,
                d.FULL_SCREEN_CHANGE, a), 100);
            this.dispatchEvent("fullscreenchange", a === ja.FULL_SCREEN)
        };
        var Ad = function() {
            Ad.__super__.constructor.call(this)
        };
        f(Ad, F);
        Ad.prototype.execute = function(a) {
            var b;
            !0 !== this.applicationState.getLocked() && ((b = a.getBody()) && !0 !== this.playback.initialized && this.sendNotification(d.INITIALIZED), !0 === this.playback.initialized && (this.media.getSrc() || this.media.getSource()) && (this.playback.getStarted() || this.sendNotification(d.START), this.playback.play(), Ad.__super__.execute.call(this,
                a)))
        };
        var bg = function() {
            bg.__super__.constructor.call(this)
        };
        f(bg, L);
        bg.prototype.execute = function(a) {
            a = this.applicationState.getActiveState() === kb.ACTIVE ? kb.INACTIVE : kb.ACTIVE;
            this.sendNotification(d.CHANGE_ACTIVE_STATE, a)
        };
        var dc = function(a) {
            this.data = null != a ? a : {};
            dc.__super__.constructor.call(this)
        };
        f(dc, ib);
        dc.prototype.getKind = function() {
            return this.data.kind
        };
        dc.prototype.getLabel = function() {
            return this.data.label
        };
        dc.prototype.getLanguage = function() {
            return this.data.language
        };
        dc.prototype.getId =
            function() {
                return this.data.id
            };
        dc.prototype.setEnabled = function(a) {
            a !== this.data.enabled && (this.data.enabled = a, this.changeEnabled(a), this.dispatchEvent("change"))
        };
        dc.prototype.changeEnabled = function(a) {};
        dc.prototype.getEnabled = function() {
            return this.data.enabled
        };
        var fa = function() {};
        fa.createTextContent = function(a, b) {
            return /[\&<>]/.test(b) ? a.createCDATASection(b) : a.createTextNode(b)
        };
        fa.updateTextContent = function(a, b) {
            var c;
            c = fa.createTextContent(a.ownerDocument, b);
            a.removeChild(a.childNodes[0]);
            a.appendChild(c);
            return a
        };
        fa.serialize = function(a) {
            var b;
            if (null != a) {
                if ("string" === typeof a) return a;
                try {
                    return b = new XMLSerializer, b.serializeToString(a)
                } catch (c) {
                    try {
                        return document.implementation.createLSSerializer(), xmlSerializer.writeToString(a)
                    } catch (e) {
                        try {
                            return a.xml
                        } catch (n) {}
                    }
                }
            }
        };
        fa.parse = function(a) {
            var b;
            window.DOMParser ? (b = new DOMParser, b = b.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a));
            return b
        };
        var xc = function() {
            xc.__super__.constructor.call(this,
                null, {});
            this.data.audioTracks = new jb;
            this.data.videoTracks = new jb;
            this.data.textTracks = new jb
        };
        f(xc, puremvc.Proxy);
        xc.NAME = "TracksProxy";
        xc.prototype.clear = function() {
            this.data.audioTracks.clear();
            this.data.videoTracks.clear();
            this.data.textTracks.clear()
        };
        xc.prototype.getAudioTracks = function() {
            return this.data.audioTracks
        };
        xc.prototype.getVideoTracks = function() {
            return this.data.videoTracks
        };
        xc.prototype.getTextTracks = function() {
            return this.data.textTracks
        };
        var u = function(a) {
            u.__super__.constructor.call(this,
                a)
        };
        f(u, N);
        u.prototype.moduleName = "amp";
        u.prototype.playerType = null;
        u.prototype.hidden = !1;
        u.prototype.l10n = null;
        u.prototype.appState = null;
        u.prototype.mediaProxy = null;
        u.prototype.bindings = null;
        u.prototype.configuration = null;
        u.prototype.params = null;
        u.prototype.security = null;
        u.prototype.createModel = function() {
            this.appState = new B;
            this.registerProxy(this.appState);
            this.bindings = new Ja;
            this.registerProxy(this.bindings);
            this.security = new va;
            this.registerProxy(this.security);
            this.mediaProxy = new t;
            this.registerProxy(this.mediaProxy);
            this.params = new Rc(this.config.params);
            this.registerProxy(this.params);
            this.configuration = new ca(this.config);
            this.registerProxy(this.configuration)
        };
        u.prototype.setViewComponent = function(a) {
            a.amp = this;
            return u.__super__.setViewComponent.call(this, a)
        };
        u.prototype.getPlayerType = function() {
            return this.playerType
        };
        u.prototype.getVersion = function() {
            return l.getVersion()
        };
        u.prototype.createPlugins = function() {
            this.sendNotification(pb.REGISTER_PLUGINS, this.config)
        };
        u.prototype.createMediaElement = function() {
            return null
        };
        u.prototype.createFramework = function() {
            u.__super__.createFramework.call(this);
            this.setMediaElement(this.createMediaElement());
            this.createPlugins()
        };
        u.prototype.getLanguage = function() {
            return this.retrieveProxy(ra.NAME).getLanguage()
        };
        u.prototype.setLanguage = function(a) {
            this.retrieveProxy(ra.NAME).setLanguage(a);
            return a
        };
        u.prototype.getMediaElement = function() {
            return this.appState.getMediaElement()
        };
        u.prototype.setMediaElement = function(a) {
            this.appState.setMediaElement(a);
            null == a.once && (a.once = function(a,
                                                 c) {
                var e;
                e = g.createUID();
                this[e] = function(a, b, c, e) {
                    this.removeEventListener(b, this[a]);
                    delete this[a];
                    c(e)
                }.bind(this, e, a, c);
                this.addEventListener(a, this[e])
            }, a.once = a.once.bind(a));
            return a
        };
        u.prototype.getContainer = function() {
            return this.getViewComponent()
        };
        u.prototype.getAudioTracks = function() {};
        u.prototype.evaluateBinding = function(a) {};
        u.prototype.evaluateBindings = function(a, b) {
            return l.evaluateBindings(a, this.bindings.data, b)
        };
        u.prototype.canPlayType = function(a) {};
        u.prototype.load = function() {};
        u.prototype.play = function() {};
        u.prototype.replay = function() {};
        u.prototype.pause = function() {};
        u.prototype.end = function() {};
        u.prototype.setParams = function(a) {};
        u.prototype.getParams = function() {};
        u.prototype.setAutoplay = function(a) {};
        u.prototype.getAutoplay = function() {};
        u.prototype.setLoop = function(a) {};
        u.prototype.getLoop = function() {};
        u.prototype.setMuted = function(a) {};
        u.prototype.getMuted = function() {};
        u.prototype.mute = function() {
            return this.setMuted(!0)
        };
        u.prototype.unmute = function() {
            return this.setMuted(!1)
        };
        u.prototype.setMedia = function(a) {
            var b, c, e;
            b = a.src;
            a = null != (c = a.source) ? null != (e = c[0]) ? e.src : void 0 : void 0;
            if (!(null != b && "" !== b || null != a && "" !== a)) throw Error("[AMP ERROR] Invalid Media");
        };
        u.prototype.getMedia = function() {};
        u.prototype.setCurrentTime = function(a) {};
        u.prototype.getCurrentTime = function() {};
        u.prototype.getCurrentTimeUTC = function() {};
        u.prototype.getDuration = function() {};
        u.prototype.setSrc = function(a) {};
        u.prototype.getSrc = function() {};
        u.prototype.setSource = function(a) {};
        u.prototype.getSource =
            function() {};
        u.prototype.setVolume = function(a) {};
        u.prototype.getVolume = function() {};
        u.prototype.getSeeking = function() {};
        u.prototype.getPaused = function() {};
        u.prototype.getEnded = function() {};
        u.prototype.setDisplayState = function(a) {};
        u.prototype.getDisplayState = function() {};
        u.prototype.getError = function() {};
        u.prototype.enterFullScreen = function() {};
        u.prototype.exitFullScreen = function() {};
        u.prototype.setHidden = function(a) {
            var b;
            a !== this.appState.getHidden() && (this.appState.setHidden(a), b = this.viewComponent.style, !0 === a ? (this.hiddenData = {
                width: b.width,
                height: b.height,
                paused: this.getPaused()
            }, b.width = b.height = "0px", !1 === this.hiddenData.paused && this.pause()) : (b.width = this.hiddenData.width, b.height = this.hiddenData.height, !1 === this.hiddenData.paused && this.play(), this.hiddenData = null))
        };
        u.prototype.getHidden = function() {
            return this.appState.getHidden()
        };
        u.prototype.recordContentChange = function(a) {};
        u.prototype.setPlaybackRate = function() {};
        u.prototype.getPlaybackRate = function() {};
        u.prototype.getPlaystate = function() {};
        u.prototype.getMediaTransforms = function() {
            return this.mediaProxy.getTransforms()
        };
        u.prototype.authorize = function(a) {
            return this.security.authorize(a)
        };
        var C = function(a) {
            C.__super__.constructor.call(this, a)
        };
        f(C, u);
        C.prototype.playerType = "html";
        C.prototype.playerCore = null;
        C.prototype.tracks = null;
        C.prototype.mediator = null;
        C.prototype.createMediaElement = function() {
            var a;
            this.mediator = new ec("html5", "video");
            this.sendNotification(d.PLAYBACK_CORE_CHANGE, this.mediator);
            a = this.mediator.getViewComponent();
            null == a.dataset && (a.dataset = {});
            return a
        };
        C.prototype.createModel = function() {
            var a;
            C.__super__.createModel.call(this);
            this.registerProxy(new ra(this.config));
            a = new ya;
            this.registerProxy(a);
            this.playerCore = new da(a, this.config.getPlaybackOrder);
            this.registerProxy(this.playerCore);
            this.tracks = new xc;
            this.registerProxy(this.tracks);
            this.appState.setRenderMode(wi.HTML);
            this.bindings.initialize()
        };
        C.prototype.createView = function() {
            this.registerMediator(new Xa("html5", this.getViewComponent()));
            this.registerMediator(new qb);
            this.registerMediator(new Sc);
            this.registerMediator(new fc)
        };
        C.prototype.createController = function() {
            C.__super__.createController.call(this);
            this.registerCommand(pb.PLUGINS_INITIALIZED, ye);
            this.registerCommand(d.PLAY, Ad);
            this.registerCommand(d.PLAYING, Ae);
            this.registerCommand(d.PAUSE, zd);
            this.registerCommand(d.CHANGE_PLAY_STATE, Vd);
            this.registerCommand(d.TOGGLE_FULL_SCREEN, Kf);
            this.registerCommand(d.CHANGE_DISPLAY_STATE, Sb);
            this.registerCommand(d.TOGGLE_ACTIVE, bg);
            this.registerCommand(d.CHANGE_ACTIVE_STATE,
                ag);
            this.registerCommand(d.SET_MEDIA, Ke);
            this.registerCommand(d.CHANGE_MEDIA, Le);
            this.registerCommand(d.MEDIA_VALIDATED, Be);
            this.registerCommand(d.MEDIA_CHANGE, Wd);
            this.registerCommand(d.UPDATE_DATA_BINDINGS, Xd);
            this.registerCommand(d.START, Ee);
            this.registerCommand(d.SEEK, Ce);
            this.registerCommand(d.SEEKING, De);
            this.registerCommand(d.SEEKED, Of);
            this.registerCommand(d.CHANGE_VOLUME, Nf);
            this.registerCommand(d.CHANGE_MUTED, Sf);
            this.registerCommand(d.CHANGE_AUTOPLAY, Lf);
            this.registerCommand(d.CHANGE_LOOP,
                Mf);
            this.registerCommand(d.END, Qf);
            this.registerCommand(d.ENDED, Td);
            this.registerCommand(d.REPLAY, Pf);
            this.registerCommand(d.ERROR, Yd);
            this.registerCommand(d.READY, Me);
            this.registerCommand(d.WAITING, Fe);
            this.registerCommand(d.CHANGE_DURATION, Ne);
            this.registerCommand(d.CHANGE_PARAMS, Oe);
            this.registerCommand(d.IS_USER_ACTIVE, Rf);
            this.registerCommand(xa.AUTHORIZED, Ge);
            this.registerCommand(d.INITIALIZED, Tf);
            this.registerCommand(d.REGISTER_PLAYBACK_CORE, Uf);
            this.registerCommand($.TOGGLE_PLAY_PAUSE, ze);
            this.registerCommand($.SEEK, Ce);
            this.registerCommand(d.CHANGE_PLAYBACK_TARGET, Pe);
            this.registerCommand(d.PLAYBACK_TARGET_CHANGE, Zd);
            this.registerCommand(d.RECORD_CONTENT_CHANGE, Vf);
            this.registerCommand(d.TIME_UPDATE, He);
            this.registerCommand(d.TOGGLE_MUTED, Wf);
            this.registerCommand(d.VOLUME_CHANGE, Je);
            this.registerCommand(d.PLAY_REQUEST, Ie);
            this.registerCommand(d.HAS_POST_CONTENT, Zf);
            this.registerCommand(d.LOCK, $f);
            this.registerCommand(d.PLAY_STATE_CHANGE, F);
            this.registerCommand(d.PROGRESS, F);
            this.registerCommand(d.CAN_PLAY,
                F);
            this.registerCommand(d.CAN_PLAY_THROUGH, F);
            this.registerCommand(d.LOAD_START, F);
            this.registerCommand(d.STARTED, F);
            this.registerCommand(d.LOADED_METADATA, F);
            this.registerCommand(d.DURATION_CHANGE, F);
            this.registerCommand(d.MEDIUM_CHANGE, F);
            this.registerCommand(d.TEMPORAL_TYPE_CHANGE, F);
            this.registerCommand(d.LANGUAGE_CHANGE, F);
            this.registerCommand(d.PLAYBACK_TARGET_AVAILABLE, F);
            this.registerCommand(xa.AUTHORIZE, F);
            this.registerCommand(xa.AUTHORIZATION_FAILED, F);
            this.registerCommand(d.FAIL_OVER_ATTEMPT,
                F);
            this.registerCommand(d.IS_LIVE, F);
            this.registerCommand(d.TIMED_METADATA, F);
            this.registerCommand(d.PAUSED, F);
            this.registerCommand(d.STALLED, F);
            this.registerCommand(d.BITRATE_CHANGE, F);
            this.registerCommand(d.BITRATE_CHANGING, F);
            this.registerCommand(d.BITRATE_LEVELS_LOADED, F);
            this.registerCommand(d.MUTE_CHANGE, F);
            this.registerCommand(d.RESUME, F);
            this.registerCommand(d.MEDIA_SEQUENCE_STARTED, F);
            this.registerCommand(d.MEDIA_SEQUENCE_ENDED, Ud);
            this.registerCommand(d.ENABLE_VIDEO_EVENTS, Xf);
            this.registerCommand(d.DISABLE_VIDEO_EVENTS,
                Yf)
        };
        C.prototype.setMediaElement = function(a) {
            var b;
            b = this.getMediaElement();
            null != b && b.removeEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
            a.addEventListener("webkitpresentationmodechanged", this.presentationModeChanged);
            C.__super__.setMediaElement.call(this, a);
            return a
        };
        C.prototype.presentationModeChanged = function(a) {
            "inline" === a.target.webkitPresentationMode && (a.target.controls = !1)
        };
        C.prototype.evaluateBinding = function(a) {
            return this.bindings.evaluateBinding(a)
        };
        C.prototype.recordContentChange =
            function(a) {
                this.sendNotification(d.RECORD_CONTENT_CHANGE, a)
            };
        C.prototype.canPlayType = function(a) {
            return this.retrieveProxy(s.NAME).canPlayType(a)
        };
        C.prototype.getAudioTracks = function() {
            return this.retrieveProxy(xc.NAME).getAudioTracks()
        };
        C.prototype.load = function() {
            this.sendNotification(d.LOAD)
        };
        C.prototype.play = function() {
            this.sendNotification(d.PLAY, !0)
        };
        C.prototype.replay = function() {
            this.sendNotification(d.REPLAY)
        };
        C.prototype.pause = function() {
            this.sendNotification(d.PAUSE)
        };
        C.prototype.end = function() {
            this.sendNotification(d.END)
        };
        C.prototype.setParams = function(a) {
            this.sendNotification(d.CHANGE_PARAMS, a);
            return a
        };
        C.prototype.getParams = function() {
            return this.params.getData()
        };
        C.prototype.setAutoplay = function(a) {
            this.sendNotification(d.CHANGE_AUTOPLAY, a);
            return a
        };
        C.prototype.getAutoplay = function() {
            var a, b;
            a = this.retrieveProxy(s.NAME);
            return (this.configuration.getMuted() || a.initialized) && (this.configuration.getAutoplay() || !0 === (null != (b = this.getMedia()) ? b.autoplay : void 0))
        };
        C.prototype.setLoop = function(a) {
            this.sendNotification(d.CHANGE_LOOP,
                a);
            return a
        };
        C.prototype.getLoop = function() {
            return this.configuration.getLoop()
        };
        C.prototype.setMuted = function(a) {
            this.sendNotification(d.CHANGE_MUTED, a);
            return a
        };
        C.prototype.getMuted = function() {
            return this.retrieveProxy(s.NAME).getMuted()
        };
        C.prototype.setMedia = function(a) {
            C.__super__.setMedia.call(this, a);
            this.sendNotification(d.SET_MEDIA, a);
            return a
        };
        C.prototype.getMedia = function() {
            return this.mediaProxy.getData()
        };
        C.prototype.setCurrentTime = function(a) {
            this.sendNotification(d.SEEK, a);
            return a
        };
        C.prototype.getCurrentTime = function() {
            return this.retrieveProxy(s.NAME).getCurrentTime()
        };
        C.prototype.getDuration = function() {
            return this.mediaProxy.getDuration()
        };
        C.prototype.setSrc = function(a) {
            this.sendNotification(d.SET_MEDIA, {
                src: a
            });
            return a
        };
        C.prototype.getSrc = function() {
            return this.mediaProxy.getSrc()
        };
        C.prototype.setSource = function(a) {
            this.sendNotification(d.SET_MEDIA, {
                source: a
            });
            return a
        };
        C.prototype.getSource = function() {
            return this.mediaProxy.getSource()
        };
        C.prototype.setVolume = function(a) {
            this.sendNotification(d.CHANGE_VOLUME,
                a);
            return a
        };
        C.prototype.getVolume = function() {
            return this.retrieveProxy(s.NAME).getVolume()
        };
        C.prototype.getSeeking = function() {
            return this.retrieveProxy(s.NAME).getSeeking()
        };
        C.prototype.getPaused = function() {
            return this.retrieveProxy(s.NAME).getPaused()
        };
        C.prototype.getEnded = function() {
            return this.appState.getEnded()
        };
        C.prototype.getWaiting = function() {
            return this.appState.getWaiting()
        };
        C.prototype.getError = function() {
            return this.getMediaElement().error
        };
        C.prototype.setDisplayState = function(a) {
            this.sendNotification(d.CHANGE_DISPLAY_STATE,
                a)
        };
        C.prototype.getDisplayState = function(a) {
            return this.appState.getDisplayState()
        };
        C.prototype.enterFullScreen = function() {
            this.sendNotification(d.CHANGE_DISPLAY_STATE, ja.FULL_SCREEN)
        };
        C.prototype.exitFullScreen = function() {
            this.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL)
        };
        C.prototype.setPlaybackRate = function(a) {
            this.getMediaElement().playbackRate = a
        };
        C.prototype.getPlaybackRate = function() {
            return this.getMediaElement().playbackRate
        };
        C.prototype.getQualityLevels = function() {
            return this.retrieveProxy(s.NAME).getQualityLevels()
        };
        C.prototype.setQuality = function(a) {
            return this.retrieveProxy(s.NAME).setQuality(a)
        };
        C.prototype.getQuality = function() {
            return this.retrieveProxy(s.NAME).getQuality()
        };
        C.prototype.getPlayState = function() {
            return this.appState.getPlayState()
        };
        C.prototype.destroy = function() {
            var a, b;
            null != (a = this.retrieveProxy(da.NAME)) && null != (b = a.activePlaybackCore) && "function" === typeof b.destroy && b.destroy();
            C.__super__.destroy.call(this)
        };
        var q = {
                READY: "jsApiReady",
                RESET: "mediaPlayerReset",
                LOADING: "mediaPlayerLoading",
                PLAYER_ERROR: "mediaPlayerError",
                MEDIA_ERROR: "mediaError",
                ERROR_STREAM_NOT_FOUND: "mediaPlayerErrorStreamNotFound",
                CAPABILITY_CHANGE: "mediaPlayerCapabilityChange",
                PLAYBACK_OPEN: "mediaPlayerPlaybackOpen",
                PLAYBACK_CLOSE: "mediaPlayerPlaybackClose",
                PLAYING: "mediaPlayerPlaying",
                ENDED: "mediaPlayerPlaybackClose",
                MEDIA_SEQUENCE_ENDED: "mediaPlayerPlaybackSequenceComplete",
                PAUSED: "mediaPlayerPaused",
                BUFFERING: "mediaPlayerBuffering",
                DURATION_CHANGE: "mediaPlayerDurationChange",
                TIME_UPDATE: "mediaPlayerPlayheadUpdate",
                SEEKING_CHANGE: "mediaPlayerSeekingChange",
                ERROR: "error",
                VOLUME_CHANGE: "mediaPlayerVolumeChanged",
                PLAY_STATE_CHANGE: "mediaPlayerPlayStateChange",
                STATE_CHANGE: "mediaPlayerStateChange",
                CAPTION_DATA_CHANGE: "mediaPlayerCaptiondataChange",
                FAIL_OVER_ATTEMPT: "mediaPlayerFailoverAttempt",
                ELEMENT_EVENT: "mediaPlayerElementEvent",
                PLAY: "mediaPlayerResumeOrPausePlayback",
                APPLICATION_STATE_CHANGE: "mediaPlayerApplicationStateChange",
                INITIALIZED: "mediaPlayerInitialized",
                FULLSCREEN_CHANGE: "mediaPlayerFullscreenChange",
                AUTHORIZE: "mediaPlayerAuthenticate",
                CAPTIONING_REQUEST: "mediaPlayerCaptioningRequest",
                CAPTION_LANG_CHANGE: "mediaPlayerCaptionLangChange",
                RECOMMENDATIONS_LOADED: "mediaPlayerRecommendationsLoaded",
                RECOMMENDATION_SELECTED: "mediaPlayerRecommendationSelected",
                SHARE: "mediaPlayerShare",
                SHARE_REQUEST: "mediaPlayerShareRequest",
                AUTO_ADVANCE: "mediaPlayerAutoAdvance",
                CREATE_FLASH_VARS: "createFlashVars",
                CREATE_XML: "createXML",
                FLASH_CREATED: "flashCreated",
                PLAY_REQUEST: "mediaPlayerPlaybackSequenceInitiated",
                LOAD_FEED: "mediaPlayerDataFeedRequested",
                FEED_UPDATED: "mediaPlayerDataFeedUpdated",
                FEED_LOADED: "mediaPlayerFeedLoaded",
                TIMED_METADATA: "mediaPlayerSendCuePoint",
                MEDIA_PLAYER_ID3_UPDATED: "mediaPlayerID3Updated"
            },
            s = function() {
                s.__super__.constructor.call(this, s.NAME);
                this.data = {
                    core: null,
                    muted: !1,
                    started: !1,
                    volume: 1,
                    currentTime: 0,
                    duration: 0,
                    src: null,
                    ended: !1,
                    paused: !1,
                    seeking: !1,
                    loading: !1,
                    waiting: !1
                };
                "desktop" === g.getDevice() && (this.initialized = !0);
                this.handlers = {
                    timeupdate: this.ontimeupdate.bind(this),
                    durationchange: this.ondurationchange.bind(this),
                    play: this.onplay.bind(this),
                    playing: this.onplaying.bind(this),
                    pause: this.onpause.bind(this),
                    loadeddata: this.onloadeddata.bind(this),
                    waiting: this.onwaiting.bind(this),
                    seeking: this.onseeking.bind(this),
                    seeked: this.onseeked.bind(this),
                    ended: this.onended.bind(this),
                    progress: this.onprogress.bind(this),
                    error: this.onerror.bind(this),
                    loadstart: this.onloadstart.bind(this),
                    canplay: this.oncanplay.bind(this),
                    canplaythrough: this.oncanplaythrough.bind(this),
                    loadedmetadata: this.onloadedmetadata.bind(this),
                    stalled: this.onstalled.bind(this)
                };
                this.resume = {
                    event: -1 === g.getIEVersion() ? "loadedmetadata" : "canplaythrough",
                    listener: this.resumestart.bind(this)
                };
                this.textTrackHandlers = {
                    addtrack: this.onaddtrack.bind(this)
                }
            };
        f(s, puremvc.Proxy);
        s.NAME = "PlaybackProxy";
        s.prototype.data = null;
        s.prototype.initialized = !1;
        s.prototype.enabled = null;
        s.prototype.handlers = null;
        s.prototype.resume = null;
        s.prototype.playWhenLoaded = !1;
        s.prototype.metadataloaded = !1;
        s.prototype.activeCuesIndex = 0;
        s.prototype.id3CueType = null;
        s.prototype.getEnabled = function() {
            return this.enabled
        };
        s.prototype.setEnabled = function(a) {
            if (a !== this.enabled) return this.enabled = a, !0 === this.enabled ? this.load() : this.applyHandlers(!1), a
        };
        s.prototype.applyHandlers = function(a) {
            var b, c, e, n;
            null == a && (a = !0);
            e = this.getMediaElement();
            a = a ? "addEventListener" : "removeEventListener";
            n = this.handlers;
            for (c in n) b = n[c], e[a](c, b)
        };
        s.prototype.resumestart = function(a) {
            var b = this;
            this.getMediaElement();
            this.handlers.durationchange(a);
            0 < this.data.currentTime ? setTimeout(function() {
                    b.seek(b.data.currentTime).then(b.resumecomplete.bind(b))
                },
                50) : this.resumecomplete()
        };
        s.prototype.resumecomplete = function() {
            this.data.loading = !1;
            this.applyHandlers(!0);
            !0 === this.playWhenLoaded && setTimeout(this.play.bind(this), 1)
        };
        s.prototype.onaddtrack = function(a) {
            var b = this;
            a = a.track;
            "metadata" === a.kind && (a.mode = "hidden", this.id3CueType = window.VTTCue ? "VTTCue" : "textTrackCue", a.addEventListener("cuechange", function(a) {
                var e, n, v, h, f, r;
                if (null != (h = a.target) && null != (r = h.activeCues) && r.length)
                    for (r = a.target.activeCues, n = 0, h = r.length; n < h; n++) a = r[n], null == a.value &&
                    null != a.text && (a.value = JSON.parse(a.text)), e = {
                        startTime: a.startTime,
                        endTime: a.endTime,
                        key: null != (v = a.value) ? v.key : void 0,
                        info: null != (f = a.value) ? f.info : void 0,
                        data: a.value
                    };
                else if ("hls" === b.playbackCoreName && "VTTCue" === b.id3CueType)
                    for (h = a.target.cues, v = 0, f = h.length; v < f && !(a = h[v], Math.round(a.startTime) <= (n = Math.round(b.getMediaElement().currentTime)) && n <= Math.ceil(a.endTime) && (e = JSON.parse(a.text))); v++);
                if (null != e) return b.sendNotification(d.TIMED_METADATA, e)
            }))
        };
        s.prototype.ontimeupdate = function(a) {
            var b;
            !0 !== (null != (b = this.facade.ads) ? b.getInProgress() : void 0) && (this.data.currentTime = a.target.currentTime, this.sendNotification(d.TIME_UPDATE, this.data.currentTime))
        };
        s.prototype.ondurationchange = function(a) {
            a = a.target.duration;
            a === this.data.duration || 0 === a || isNaN(a) || (this.data.duration = a, /Android [4-7]/.test(navigator.userAgent) && -1 !== this.getMediaElement().src.indexOf(".m3u8") && Infinity === a || this.sendNotification(d.CHANGE_DURATION, a))
        };
        s.prototype.onplay = function(a) {
            this.data.paused = !1
        };
        s.prototype.onplaying =
            function(a) {
                this.data.paused = !1;
                this.data.seeking = !1;
                this.data.waiting = !1;
                this.sendNotification(d.PLAYING)
            };
        s.prototype.onpause = function(a) {
            !0 === this.getMediaElement().ended || !0 === this.data.waiting && "hls" === this.playbackCoreName || (this.data.paused = !0, 0 < a.target.readyState && (this.sendNotification(d.PAUSED), this.sendNotification(d.CHANGE_PLAY_STATE, U.PAUSED)))
        };
        s.prototype.onloadeddata = function(a) {
            this.sendNotification(d.LOADED_DATA)
        };
        s.prototype.onwaiting = function(a) {
            this.data.waiting = !0;
            this.sendNotification(d.WAITING)
        };
        s.prototype.onstalled = function(a) {
            this.sendNotification(d.STALLED)
        };
        s.prototype.onseeking = function(a) {
            this.getMediaElement().removeEventListener("timeupdate", this.handlers.timeupdate);
            this.data.seeking = !0;
            this.sendNotification(d.SEEKING)
        };
        s.prototype.onseeked = function(a) {
            this.data.seeking = !1;
            this.sendNotification(d.SEEKED, a.target.currentTime);
            this.getMediaElement().addEventListener("timeupdate", this.handlers.timeupdate)
        };
        s.prototype.onended = function(a) {
            this.data.ended = !0;
            this.sendNotification(d.ENDED)
        };
        s.prototype.onprogress = function(a) {
            var b, c;
            try {
                c = this.getMediaElement(), b = c.buffered, this.sendNotification(d.PROGRESS, b.end(b.length - 1) / c.duration)
            } catch (e) {}
        };
        s.prototype.onerror = function(a) {
            this.sendNotification(d.ERROR, this.getMediaElement().error)
        };
        s.prototype.onloadstart = function(a) {
            this.sendNotification(d.LOAD_START)
        };
        s.prototype.oncanplay = function(a) {
            this.sendNotification(d.CAN_PLAY)
        };
        s.prototype.oncanplaythrough = function(a) {
            this.sendNotification(d.CAN_PLAY_THROUGH);
            this.sendNotification(d.PROGRESS,
                this.getDuration())
        };
        s.prototype.onloadedmetadata = function(a) {
            this.metadataloaded = !0;
            this.createTracks();
            this.sendNotification(d.ENABLE_FULL_SCREEN);
            this.sendNotification(d.LOADED_METADATA);
            this.applyTextTrackHandlers(!0)
        };
        s.prototype.applyTextTrackHandlers = function(a) {
            var b;
            a = !0 === a ? "addEventListener" : "removeEventListener";
            if (null != (b = this.getMediaElement().textTracks)) b[a]("addtrack", this.textTrackHandlers.addtrack)
        };
        s.prototype.createTracks = function() {
            var a, b, c, e, n, d, h;
            a = this.getMediaElement().audioTracks;
            n = this.facade.retrieveProxy(xc.NAME).getAudioTracks();
            if (null != a)
                for (b = a.length || 0, c = d = 0, h = a.length; d < h; c = ++d) e = a[c], n.add(new dc(e), c + 1 === b)
        };
        s.prototype.reset = function() {
            this.data.currentTime = 0;
            this.data.duration = 0;
            this.data.src = null;
            this.data.ended = !1;
            this.data.paused = !1;
            this.data.seeking = !1;
            this.data.started = !1;
            this.data.loading = !1;
            this.applyTextTrackHandlers(!1)
        };
        s.prototype.getStarted = function() {
            return this.data.started
        };
        s.prototype.getMediaElement = function() {
            return this.facade.getMediaElement()
        };
        s.prototype.canPlayMedium = function(a) {
            return "video" === a
        };
        s.prototype.canPlayTemporalType = function(a) {
            return "dvr" !== a
        };
        s.prototype.canPlayType = function(a) {
            var b;
            b = document.createElement("video").canPlayType(a) || "";
            (/Android (4\.[1-9]|[5-6])/.test(navigator.userAgent) || /Silk\/3/.test(navigator.userAgent)) && a === g.mimeTypes.m3u8 && (b = "maybe");
            "probably" === b && /video\/f4m|x-flv/.test(a) && /UCBrowser/.test(navigator.userAgent) && (b = "");
            return b
        };
        s.prototype.getPaused = function() {
            return this.data.paused
        };
        s.prototype.getSeeking =
            function() {
                return this.data.seeking
            };
        s.prototype.getCurrentTime = function() {
            return this.data.currentTime
        };
        s.prototype.setCurrentTime = function(a) {
            if (a !== this.data.currentTime) return this.data.currentTime = a, this.getStarted() && this.seek(a), a
        };
        s.prototype.seek = function(a) {
            var b = this;
            null == a && (a = this.data.currentTime);
            return new Promise(function(c, e) {
                var n, d, h;
                try {
                    h = b.getMediaElement(), h.once("seeked", function() {
                        setTimeout(c, 10)
                    }), h.currentTime = a, d = navigator.userAgent, /Android.*Chrome/.test(d) && (n = setInterval(function() {
                        Math.round(h.currentTime) ===
                        Math.round(a) && (clearInterval(n), h.dispatchEvent(new CustomEvent("seeked")))
                    }, 10))
                } catch (f) {
                    e(f)
                }
            })
        };
        s.prototype.getVolume = function() {
            return this.getMediaElement().volume
        };
        s.prototype.setVolume = function(a) {
            this.getMuted() && 0 < a ? this.setMuted(!1) : this.getMuted() || 0 !== a || this.setMuted(!0);
            0 <= a && 1 >= a && a !== this.getMediaElement().volume && this.sendNotification(d.VOLUME_CHANGE, this.getMediaElement().volume = a);
            return a
        };
        s.prototype.getMuted = function() {
            return this.data.muted
        };
        s.prototype.setMuted = function(a) {
            var b;
            if (this.data.muted !== a) return this.data.muted = a, this.getMediaElement().muted = a, !0 === this.data.muted ? (this.data.volume = this.getVolume(), b = 0) : b = this.data.volume, this.sendNotification(d.CHANGE_VOLUME, b), this.sendNotification(d.MUTE_CHANGE, this.data.muted), a
        };
        s.prototype.getDuration = function() {
            return this.data.duration
        };
        s.prototype.play = function() {
            if (!0 !== this.data.started) {
                if (this.data.started = !0, this.setEnabled(!0), this.playWhenLoaded = !0, !1 === this.metadataloaded) return
            } else if (!0 === this.data.loading) {
                this.playWhenLoaded = !0;
                return
            }
            this.getPaused() && this.sendNotification(d.RESUME);
            this.getMediaElement().play()
        };
        s.prototype.pause = function() {
            this.data.paused = !0;
            this.getMediaElement().pause()
        };
        s.prototype.getSrc = function() {
            return this.facade.mediaProxy.getSrc()
        };
        s.prototype.load = function() {
            var a;
            this.sendNotification(d.WAITING);
            this.data.loading = !0;
            this.metadataloaded = this.playWhenLoaded = !1;
            a = this.getMediaElement();
            a.once(this.resume.event, this.resume.listener);
            a.addEventListener("loadedmetadata", this.handlers.loadedmetadata);
            a.addEventListener("durationchange", this.handlers.durationchange);
            a.addEventListener("canplaythrough", this.handlers.canplaythrough);
            a.addEventListener("error", this.handlers.error);
            this.applySrc()
        };
        s.prototype.applySrc = function() {
            var a, b, c;
            b = this.getSrc();
            null != b && "" !== b || this.sendNotification(d.ERROR, "The value of src is not supported: " + value);
            a = this.getMediaElement();
            a.src = b;
            !0 === a.muted && (this.data.muted = !0);
            g.isIPad() && 8 > (null != (c = g.getIOSversion()) ? c[0] : void 0) ? setTimeout(a.load.bind(a), 100) :
                a.load()
        };
        s.prototype.setQuality = function(a) {};
        s.prototype.getQuality = function() {};
        s.prototype.getQualityLevels = function() {
            return []
        };
        s.prototype.destroy = function() {
            var a, b, c, e;
            a = this.getMediaElement();
            e = this.handlers;
            for (b in e) c = e[b], a.removeEventListener(b, c);
            a.removeEventListener(this.resume.event, this.resume.listener)
        };
        var cg = function() {
            cg.__super__.constructor.call(this)
        };
        f(cg, puremvc.SimpleCommand);
        cg.prototype.execute = function(a) {
            setTimeout(this.facade.pluginsinitialized.bind(this.facade),
                0)
        };
        var dg = function() {
            dg.__super__.constructor.call(this)
        };
        f(dg, L);
        dg.prototype.execute = function(a) {
            this.player.started = !0;
            this.sendNotification(d.STARTED, a.getBody());
            this.sendNotification(d.PLAY, a.getBody())
        };
        var Pe = function() {
            Pe.__super__.constructor.call(this)
        };
        f(Pe, L);
        Pe.prototype.execute = function(a) {
            a = a.getBody();
            this.applicationState.setPlaybackTarget(a);
            "amp" !== a ? this.applicationState.getPlayState() !== U.PAUSED && this.facade.pause() : this.applicationState.getPlayState() === U.PLAYING && this.facade.play()
        };
        var gc = function(a, b) {
            this.player = a;
            this.config = b;
            gc.__super__.constructor.call(this, this.constructor.NAME);
            this.proxy = new ra(this.config);
            this.player.registerProxy(this.proxy)
        };
        f(gc, puremvc.Mediator);
        gc.prototype.player = null;
        gc.prototype.config = null;
        gc.prototype.proxy = null;
        gc.NAME = "LocalizationWrapper";
        gc.prototype.getString = function(a) {
            return this.proxy.getString(a)
        };
        gc.prototype.listNotificationInterests = function() {
            return [q.CREATE_FLASH_VARS, q.CREATE_XML]
        };
        gc.prototype.handleNotification = function(a) {
            var b,
                c, e, n, d, h, f, r;
            gc.__super__.handleNotification.call(this, a);
            d = a.getName();
            a = a.getBody();
            switch (d) {
                case q.CREATE_FLASH_VARS:
                    c = a.flashvars;
                    c.locale_setting = this.proxy.getLocaleId();
                    break;
                case q.CREATE_XML:
                    for (e in a = a.xml, b = a.firstChild, d = a.getElementsByTagName("locales")[0], null == d && (d = a.createElement("locales"), b.appendChild(d)), r = this.proxy.getLocales(), r)
                        for (c in n = r[e], b = a.createElement("locale"), b.setAttribute("id", e), d.appendChild(b), n) f = n[c], h = a.createElement("property"), h.setAttribute("key",
                            c), f = fa.createTextContent(a, f), h.appendChild(f), b.appendChild(h)
            }
        };
        var hd = function(a) {
            null == this.cssPrefix && (this.cssPrefix = cc.PREFIX);
            hd.__super__.constructor.call(this, this.mediatorName, a)
        };
        f(hd, puremvc.Mediator);
        hd.prototype.config = null;
        hd.prototype.cssPrefix = null;
        hd.prototype.classList = null;
        hd.prototype.initializeNotifier = function(a) {
            hd.__super__.initializeNotifier.call(this, a);
            this.config = (this.facade.player || this.facade).retrieveProxy(x.NAME);
            this.classList = this.classList = new za(this.viewComponent)
        };
        var Bd = function(a) {
            Bd.__super__.constructor.call(this, a)
        };
        f(Bd, hd);
        Bd.prototype.localizationManager = null;
        Bd.prototype.initializeNotifier = function(a) {
            Bd.__super__.initializeNotifier.call(this, a);
            this.localizationManager = (this.facade.player || this.facade).retrieveProxy(ra.NAME)
        };
        var ba = function(a, b, c, e) {
            this.componentName = null != a ? a : this.componentName;
            this.componentType = null != b ? b : this.componentType;
            this.parent = c;
            this.element = e;
            null == this.mediatorName && (this.mediatorName = this.createMediatorName());
            ba.__super__.constructor.call(this,
                this.viewComponent)
        };
        f(ba, Bd);
        ba.prototype.componentName = null;
        ba.prototype.componentType = null;
        ba.prototype.parent = null;
        ba.prototype.element = null;
        ba.prototype.classList = null;
        ba.prototype.state = null;
        ba.prototype.disabled = !1;
        ba.prototype.onRegister = function() {
            this.viewComponent = this.createViewComponent(this.parent, this.element);
            this.classList = this.viewComponent._classList;
            $a.bindEvents(this.viewComponent, this)
        };
        ba.prototype.createViewComponent = function(a, b) {
            var c;
            c = this.getTypeList();
            return $a.create(c,
                a, b)
        };
        ba.prototype.createMediatorName = function() {
            var a;
            a = this.getTypeList();
            a.push("mediator");
            a.push($a.createUID());
            return a.join("-")
        };
        ba.prototype.getTypeList = function() {
            var a;
            a = [];
            null != this.componentName && a.push(this.componentName);
            null != this.componentType && (a = a.concat(this.componentType));
            return a
        };
        ba.prototype.create = function(a, b, c, e) {
            null == b && (b = this);
            !1 === b && (b = null);
            return $a.create(a, b, c, e)
        };
        ba.prototype.createText = function(a, b, c, e) {
            null == c && (c = this);
            return $a.create(a, c, e, b)
        };
        ba.prototype.setState =
            function(a) {
                if (a !== this.state) return null != this.state && this.classList.remove(this.state), this.state = a, null != this.state && this.classList.add(this.state), a
            };
        ba.prototype.getState = function() {
            return this.state
        };
        ba.prototype.setDisabled = function(a) {
            if (a !== this.disabled) return (this.disabled = a) ? this.classList.add("disabled") : this.classList.remove("disabled"), a
        };
        ba.prototype.getDisabled = function() {
            return this.disabled
        };
        var ec = function(a, b) {
            this.mediatorName = "" + this.componentType + "-mediator";
            ec.__super__.constructor.call(this,
                a, null, null, b)
        };
        f(ec, ba);
        ec.prototype.componentType = "media-element";
        ec.prototype.created = !1;
        ec.prototype.onRegister = function() {
            !0 !== this.created && (this.created = !0, ec.__super__.onRegister.call(this))
        };
        var Ib = function() {
            Ib.__super__.constructor.call(this)
        };
        f(Ib, ba);
        Ib.prototype.componentType = "layer";
        Ib.prototype.onRegister = function() {
            Ib.__super__.onRegister.call(this);
            this.registerLayer()
        };
        Ib.prototype.onRemove = function() {
            Ib.__super__.onRemove.call(this);
            this.removeLayer()
        };
        Ib.prototype.registerLayer =
            function() {
                this.sendNotification(d.ADD_LAYER, this.viewComponent)
            };
        Ib.prototype.removeLayer = function() {
            this.sendNotification(d.REMOVE_LAYER, this.viewComponent)
        };
        var Sc = function() {
            Sc.__super__.constructor.call(this)
        };
        f(Sc, Ib);
        Sc.prototype.componentName = "video";
        Sc.prototype.listNotificationInterests = function() {
            return [d.PLAYBACK_CORE_CHANGE]
        };
        Sc.prototype.mediator = null;
        Sc.prototype.mediaElement = null;
        Sc.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.PLAYBACK_CORE_CHANGE:
                    null !=
                    this.mediaElement && this.viewComponent.removeChild(this.mediaElement), null != this.mediator && this.facade.removeMediator(this.mediator.getMediatorName()), (b = null != (null != a ? a.getViewComponent : void 0)) ? (this.facade.registerMediator(a), this.mediator = a, this.mediaElement = this.mediator.getViewComponent()) : (this.mediator = null, this.mediaElement = a), null != this.mediaElement && this.viewComponent.appendChild(this.mediaElement)
            }
        };
        var Xa = function(a, b) {
            this.componentName = a;
            this.layers = [];
            Xa.__super__.constructor.call(this,
                null, null, null, b)
        };
        f(Xa, ba);
        Xa.prototype.componentType = "player";
        Xa.prototype.core = null;
        Xa.prototype.medium = null;
        Xa.prototype.layers = null;
        Xa.prototype.ready = !1;
        Xa.prototype.onRegister = function() {
            var a;
            Xa.__super__.onRegister.call(this);
            a = g.getDevice();
            null != a && this.classList.add(a);
            g.isTouchDevice() && this.classList.add("touch")
        };
        Xa.prototype.listNotificationInterests = function() {
            return [d.DISPLAY_STATE_CHANGE, d.ACTIVE_STATE_CHANGE, d.PLAY_STATE_CHANGE, d.ADD_APPLICATION_STATE, d.REMOVE_APPLICATION_STATE,
                d.MEDIUM_CHANGE, d.DURATION_CHANGE, d.TEMPORAL_TYPE_CHANGE, d.IS_LIVE, d.ADD_LAYER, d.REMOVE_LAYER, d.READY
            ]
        };
        Xa.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.ACTIVE_STATE_CHANGE:
                case d.PLAY_STATE_CHANGE:
                case d.DISPLAY_STATE_CHANGE:
                case d.MEDIUM_CHANGE:
                    b = a.value;
                    a = a.previous;
                    null != a && this.classList.contains(a) && this.classList.remove(a);
                    null != b && this.classList.add(b);
                    break;
                case d.ADD_APPLICATION_STATE:
                    this.classList.add(a);
                    break;
                case d.REMOVE_APPLICATION_STATE:
                    this.classList.remove(a);
                    break;
                case d.TEMPORAL_TYPE_CHANGE:
                    a.previous && this.sendNotification(d.REMOVE_APPLICATION_STATE, a.previous);
                    a.value && this.sendNotification(d.ADD_APPLICATION_STATE, a.value);
                    break;
                case d.IS_LIVE:
                    !0 === a ? this.sendNotification(d.ADD_APPLICATION_STATE, "is-live") : this.sendNotification(d.REMOVE_APPLICATION_STATE, "is-live");
                    break;
                case d.DURATION_CHANGE:
                    3600 < a ? this.sendNotification(d.ADD_APPLICATION_STATE, "long-form") : this.sendNotification(d.REMOVE_APPLICATION_STATE, "long-form");
                    break;
                case d.ADD_LAYER:
                    this.addLayer(a);
                    break;
                case d.REMOVE_LAYER:
                    this.removeLayer(a);
                    break;
                case d.READY:
                    this.initialize(), this.viewCreated()
            }
        };
        Xa.prototype.initialize = function() {
            var a, b, c, e;
            this.ready = !0;
            e = this.layers;
            b = 0;
            for (c = e.length; b < c; b++) a = e[b], this.viewComponent.contains(a) || this.viewComponent.appendChild(a)
        };
        Xa.prototype.viewCreated = function() {
            this.sendNotification(d.VIEW_CREATED)
        };
        Xa.prototype.addLayer = function(a) {
            this.layers.push(a);
            this.ready && this.viewComponent.appendChild(a)
        };
        Xa.prototype.removeLayer = function(a) {
            this.viewComponent.contains(a) &&
            this.viewComponent.removeChild(a);
            a = this.layers.indexOf(a);
            0 <= a && this.layers.splice(a, 1)
        };
        var Tc = function(a) {
            Tc.__super__.constructor.call(this, this.type, a)
        };
        f(Tc, Xa);
        Tc.NAME = "FlashPlayerMediator";
        Tc.prototype.type = "flash";
        Tc.prototype.listNotificationInterests = function() {
            return Tc.__super__.listNotificationInterests.call(this).concat([pb.PLUGINS_INITIALIZED])
        };
        Tc.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a.getBody();
            switch (b) {
                case d.READY:
                    this.viewCreated();
                    return;
                case pb.PLUGINS_INITIALIZED:
                    this.initialize();
                    return
            }
            Tc.__super__.handleNotification.call(this, a)
        };
        var Zd = function() {
            Zd.__super__.constructor.call(this)
        };
        f(Zd, F);
        Zd.prototype.execute = function(a) {
            var b;
            b = "amp" === a.getBody().value ? d.REMOVE_APPLICATION_STATE : d.ADD_APPLICATION_STATE;
            this.sendNotification(b, "remote-playback");
            Zd.__super__.execute.call(this, a)
        };
        var Qe = function() {
            Qe.__super__.constructor.call(this)
        };
        f(Qe, F);
        Qe.prototype.execute = function(a) {
            Qe.__super__.execute.call(this, a); - 1 === (this.media.getData().src || "").indexOf(".smil") ? this.facade.loadAuthorized() :
                this.facade.getMediaElement().authenticationComplete({
                    media: this.media.getData()
                })
        };
        var ya = function(a, b) {
            this.supportedTypes = null != a ? a : this.supportedTypes;
            this.config = b;
            ya.__super__.constructor.call(this);
            this.temporalTypes = ["vod", "live", "ondemand"]
        };
        f(ya, s);
        ya.prototype.temporalTypes = null;
        ya.prototype.supportedTypes = null;
        ya.prototype.playbackCoreName = "default";
        ya.prototype.config = null;
        ya.prototype.onRegister = function() {
            this.mediaProxy = this.facade.retrieveProxy(t.NAME)
        };
        ya.prototype.getPlaybackCoreName =
            function() {
                return this.playbackCoreName
            };
        ya.prototype.getSupportedTypes = function() {
            return this.supportedTypes || []
        };
        ya.prototype.setSupportedTypes = function(a) {
            return this.supportedTypes = a
        };
        ya.prototype.getTemporalTypes = function() {
            return this.temporalTypes || []
        };
        ya.prototype.setTemporalTypes = function(a) {
            return this.temporalTypes = a
        };
        ya.prototype.canPlayTemporalType = function(a) {
            return -1 !== this.getTemporalTypes().indexOf(a)
        };
        ya.prototype.canPlayType = function(a) {
            return null != this.supportedTypes ? -1 !== this.getSupportedTypes().indexOf(a) ?
                "maybe" : "" : ya.__super__.canPlayType.call(this, a)
        };
        var Aa = function(a) {
            this.player = a;
            Aa.__super__.constructor.call(this)
        };
        f(Aa, ya);
        Aa.NAME = s.NAME;
        Aa.prototype.player = null;
        Aa.prototype.initialized = !0;
        Aa.prototype.playbackCoreName = "flash";
        Aa.prototype.supportedTypes = ["video/mp4", "video/x-flv", "video/f4m", "application/smil", "application/smil+xml"];
        Aa.prototype.getPaused = function() {
            return this.player.getPaused()
        };
        Aa.prototype.getEnded = function() {
            return this.player.getEnded()
        };
        Aa.prototype.getSeeking = function() {
            return this.player.getSeeking()
        };
        Aa.prototype.getCurrentTime = function() {
            return this.player.getCurrentTime()
        };
        Aa.prototype.setCurrentTime = function(a) {
            this.player.setCurrentTime(a);
            return a
        };
        Aa.prototype.getSrc = function() {
            return this.player.getSrc()
        };
        Aa.prototype.setSrc = function(a) {
            this.player.setSrc(a);
            return a
        };
        Aa.prototype.getVolume = function() {
            return this.player.getVolume()
        };
        Aa.prototype.setVolume = function(a) {
            this.player.setVolume(a);
            return a
        };
        Aa.prototype.getMuted = function() {
            return this.player.getMuted()
        };
        Aa.prototype.setMuted =
            function(a) {
                this.player.setMuted(a);
                return a
            };
        Aa.prototype.getDuration = function(a) {
            return this.player.getDuration()
        };
        Aa.prototype.play = function() {
            this.player.play()
        };
        Aa.prototype.pause = function() {
            this.player.pause()
        };
        Aa.prototype.load = function() {
            this.player.load()
        };
        var p = function(a) {
            var b = this;
            this.flashObjectID += Date.now();
            this.plugins = {};
            this._displayState = ja.NORMAL;
            this.debug = /debug\=true/.test(location.search);
            p.__super__.constructor.call(this, a);
            this.addEventListener("mediachange", function(a) {
                var e,
                    n, d, h, f;
                d = a.detail.track;
                n = b.getMediaElement();
                a = n.textTracks = [];
                if (null != d)
                    for (h = 0, f = d.length; h < f; h++) e = d[h], e = {
                        kind: e.kind,
                        label: e.label,
                        language: e.srclang,
                        _mode: e.mode
                    }, Object.defineProperty(e, "mode", {
                        get: function() {
                            return this._mode
                        },
                        set: function(a) {
                            this._mode = a;
                            (a = "showing" === a) && n.setTrackByLanguage(this.language);
                            n.setPlayerProperty("captionDisplay", {
                                visible: a
                            })
                        },
                        enumerable: !0,
                        configurable: !1
                    }), a.push(e)
            })
        };
        f(p, u);
        p.prototype.initialize = function(a, b) {
            var c, e;
            this.config = a;
            this.parentModule =
                b;
            this.createDefaults();
            this.logEvents = !0 === (null != (c = this.config.flash) ? c.logEvents : void 0) || "true" === (null != (e = wc["amp-flash-log"]) ? e.toLowerCase() : void 0);
            p.__super__.initialize.call(this, this.config, this.parentModule)
        };
        p.prototype.pluginsinitialized = function() {
            var a, b, c, e;
            b = this.config.flash || {};
            a = !0 === (null != (c = b["static"]) ? c.enabled : void 0) ? b["static"] : b;
            e = this.debug && null != a.debug ? a.debug : a.swf || "amp.swf";
            this.evaluatePaths(b.expressInstallSWF);
            c = this.createParams(b);
            a = this.createAttributes(b);
            this.flashvars = this.createFlashVars(b);
            null == this.flashvars.settings_url && (b = this.createXML(this.config), null != b && (this.flashvars.settings_xml = b));
            a.data = this.evaluatePaths(e);
            this.createdHandler(g.createFlashObject({
                params: c,
                attributes: a,
                vars: this.flashvars
            }, this.getMediaElement().parentNode))
        };
        p.prototype.playerType = "flash";
        p.prototype.flashObjectID = "flashObject";
        p.prototype.loaded = !1;
        p.prototype.flashvars = null;
        p.prototype._paused = !1;
        p.prototype._ended = !1;
        p.prototype._muted = !1;
        p.prototype.plugins =
            null;
        p.prototype.debug = !1;
        p.prototype.started = !1;
        p.prototype._displayState = null;
        p.prototype.logEvents = !1;
        p.prototype._loop = !1;
        p.prototype.playback = null;
        p.prototype.flashPlugins = [{
            id: "AkamaiAdvancedStreamingPlugin",
            src: "http://players.edgesuite.net/flash/plugins/osmf/advanced-streaming-plugin/v3.10/osmf2.0/AkamaiAdvancedStreamingPlugin.swf",
            absolute: !0,
            host: "osmf",
            main: "com.akamai.osmf.AkamaiAdvancedStreamingPluginInfo",
            type: "application/x-shockwave-flash"
        }, {
            id: "ErrorMessagingPlugin",
            src: "#{paths.resources}plugins/ErrorMessagingPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "ErrorMessagingPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "VideoMetricsViewPlugin",
            src: "#{paths.resources}plugins/VideoMetricsViewPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "VideoMetricsViewPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "VideoStatsInfoOverlayPlugin",
            src: "#{paths.resources}plugins/VideoStatsInfoOverlayPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "VideoStatsInfoOverlayPlugin",
            type: "application/x-shockwave-flash"
        }];
        p.prototype.flashView = null;
        p.prototype.createModel =
            function() {
                p.__super__.createModel.call(this);
                this.playback = new Aa(this);
                this.registerProxy(this.playback);
                this.appState.setRenderMode(wi.FLASH);
                this.bindings.initialize()
            };
        p.prototype.createView = function() {
            this.registerMediator(new Tc(this.getViewComponent()));
            this.registerMediator(new Sc);
            this.registerMediator(new fc);
            this.registerMediator(new gc(this, this.config))
        };
        p.prototype.createController = function() {
            p.__super__.createController.call(this);
            this.registerCommand(pb.PLUGINS_INITIALIZED, cg);
            this.registerCommand(xa.AUTHORIZE,
                F);
            this.registerCommand(xa.AUTHORIZED, Qe);
            this.registerCommand(d.CHANGE_PLAY_STATE, Vd);
            this.registerCommand(d.PLAY_STATE_CHANGE, F);
            this.registerCommand(d.START, dg);
            this.registerCommand(d.STARTED, F);
            this.registerCommand(d.PLAY, F);
            this.registerCommand(d.PLAY_REQUEST, F);
            this.registerCommand(q.FLASH_CREATED, F);
            this.registerCommand(d.CHANGE_PLAYBACK_TARGET, Pe);
            this.registerCommand(d.PLAYBACK_TARGET_CHANGE, Zd);
            this.registerCommand(d.UPDATE_DATA_BINDINGS, Xd)
        };
        p.prototype.createMediaElement = function() {
            var a;
            a = new ec("flash", "div");
            this.sendNotification(d.PLAYBACK_CORE_CHANGE, a);
            a = a.getViewComponent();
            a.id = a.name = this.flashObjectID;
            return a
        };
        p.prototype.createDefaults = function() {
            var a, b, c, e, n, d;
            if (!(0 < !(null != (b = this.flashPlugins) && b.length))) {
                b = this.config.resources || [];
                null != (null != (c = this.config.flash) ? c.resources : void 0) && (b = b.concat(this.config.flash.resources));
                c = g.mimeTypes.swf;
                d = this.flashPlugins;
                e = 0;
                for (n = d.length; e < n; e++) a = d[e], null != a && 0 === b.filter(function(b) {
                    return b.id === a.id
                }).length &&
                (null == a.type && (a.type = c), b.push(a));
                this.config.resources = b
            }
        };
        p.prototype.createParams = function(a) {
            var b;
            b = {
                allowFullScreen: !0,
                allowScriptAccess: "always",
                wmode: "direct",
                bgColor: "#000000"
            };
            null != a.params && (null != a.params.allowFullScreen && (b.allowFullScreen = a.params.allowFullScreen), null != a.params.allowScriptAccess && (b.allowScriptAccess = a.params.allowScriptAccess), null != a.params.wmode && (b.wmode = a.params.wmode), null != a.params.bgColor && (b.bgColor = a.params.bgColor));
            "direct" === b.wmode && /MSIE/.test(navigator.userAgent) &&
            (b.wmode = "transparent");
            return b
        };
        p.prototype.getModules = function() {
            return this.plugins
        };
        p.prototype.createPlugins = function() {
            var a, b, c, e, n, d, h, f, r = this;
            h = this.getPlayerType();
            f = l.plugins;
            for (e in f)
                if (d = f[e], e in this.config && null != this.config[e] && !1 !== this.config[e].enabled)
                    if (a = d[h], null == a) this.logger.debug("[AMP] Plugin could not be found: " + e);
                    else try {
                        n = this[e] = this.plugins[e] = new a(this, this.config[e]), this.registerMediator(this.plugins[e]), b = "function" === typeof n.getFeatureName ? n.getFeatureName() :
                            void 0, null != b && (this[b] = n), null != n.flashView && (this.flashView = g.override(this.flashView, n.flashView)), this.logger.debug("[AMP] Plugin registered: " + e)
                    } catch (k) {
                        this.logger.error("[AMP] Plugin could not be created: " + e + ". " + k)
                    }
            b = this.config.plugins || {};
            d = [];
            for (e in b) c = b[e], null != c && !1 !== c.enabled && (n = function(b, e, n) {
                return l.loadResources(c.resources).then(function() {
                    a = l.plugins[n][h];
                    if (null == a) throw Error("[AMP] Plugin could not be found: " + n);
                    return a(b, e, n).then(function(a) {
                        r.logger.debug("[AMP] Plugin registered: " +
                            n);
                        return {
                            key: n,
                            value: a
                        }
                    })
                })["catch"](function(a) {
                    return r.logger.error("[AMP] Plugin could not be created: " + n + ". " + a)
                })
            }, d.push(n.bind(null, this, c, e)));
            d = d.map(function(a) {
                return a()
            });
            Promise.all(d).then(function(a) {
                var b, c, e;
                null != r.config.flash.view && (r.flashView = g.override(r.flashView, r.config.flash.view));
                c = 0;
                for (e = a.length; c < e; c++) b = a[c], r[b.key] = b.value, r.plugins[b.key] = b.value;
                return r.sendNotification(pb.PLUGINS_INITIALIZED, r.plugins)
            })["catch"](function(a) {
                return r.logger.error(a)
            })
        };
        p.prototype.createAttributes = function(a) {
            var b;
            b = {
                id: this.flashObjectID,
                name: this.flashObjectID
            };
            null != a.attributes && (null != a.attributes.id && (b.id = a.attributes.id), null != a.attributes.name && (b.name = a.attributes.name));
            return b
        };
        p.prototype.createFlashJSON = function(a, b) {
            var c, e;
            null == a && (a = this.config);
            a = JSON.stringify(a);
            a = this.evaluatePaths(a);
            a = JSON.parse(a);
            e = function(a, b, e) {
                switch (typeof e) {
                    case "string":
                        a[b] = escape(e);
                        break;
                    case "object":
                        c(e)
                }
            };
            c = function(a) {
                var b, c, d, f;
                if (a instanceof Array)
                    for (b =
                             d = 0, f = a.length; d < f; b = ++d) c = a[b], e(a, b, c);
                else if ("object" === typeof a)
                    for (b in a) c = a[b], e(a, b, c)
            };
            c(a);
            return encodeURIComponent(JSON.stringify(a, null, b))
        };
        p.prototype.createFlashVars = function(a) {
            var b, c, e, n, d, h, f, r, k, m;
            b = {};
            c = JSON.parse(JSON.stringify(this.config));
            c.flash = null;
            delete c.flash;
            c.locales = null;
            delete c.locales;
            c.params = null;
            delete c.params;
            c.rules = null;
            delete c.rules;
            b.settings_json = this.createFlashJSON(c);
            null != this.config.autoplay && (b.auto_play = this.config.autoplay);
            null != this.config.rules &&
            g.mergeRules(this.config.rules);
            b.hinting_rules = escape(JSON.stringify(g.rules));
            null != this.config.volume && (b.volume = g.clamp(this.config.volume, 0, 1));
            null != this.config.target && (b.external_target = this.config.target);
            null != this.config.name && (b.core_player_name = this.config.name);
            null != this.config.domain && (b.embed_domain = b.domain = this.config.domain);
            this._loop = b.auto_replay = !0 === this.config.loop;
            null != this.config.fullscreen && (b.fullscreen_enabled = !1 !== this.config.fullscreen.enabled && "external" !== this.config.fullscreen.mode);
            null != this.config.titlebar && (b.titlebar_enabled = !1 !== this.config.titlebar.enabled);
            null != this.config.params && (b.params = escape(JSON.stringify(this.config.params)));
            null != this.config.version && (b.context_menu_label = this.config.version);
            null != (null != (n = this.config.controls) ? n.displaySceneMarkers : void 0) && (b.displaySceneMarkers = this.config.controls.displaySceneMarkers);
            null != this.config.media && (this.mediaProxy.setData(this.config.media), null != this.config.media.src && (this.setSrc(this.config.media.src),
                b.video_url = escape(this.config.media.src)), null != this.config.media.source && 0 < this.config.media.source.length && (this.setSource(this.config.media.source), b.video_url = escape(this.mediaProxy.getSrc())), null != this.config.media.medium && (this.setMedium(this.config.media.medium), b.medium = this.config.media.medium), null != this.config.media.title && (b.title = encodeURIComponent(this.config.media.title)), null != this.config.media.poster && (b.poster = escape(this.config.media.poster)), null != this.config.media.temporalType &&
            (b.temporalType = this.config.media.temporalType));
            "audio" === this.getMedium() && (b.controls = !0, b.auto_hide = -1);
            null != (null != (d = this.config.ima) ? null != (h = d.overlay) ? h.delay : void 0 : void 0) && (b.overlay_ad_delay = this.config.ima.overlay.delay);
            null != this.config.ticker && !1 !== this.config.ticker.enabled && (null != this.config.ticker.url && (b.ticker_text_url = this.config.ticker.url), null != this.config.ticker.interval && (b.ticker_polling_interval = this.config.ticker.interval), null != this.config.ticker.speed && (b.ticker_speed =
                this.config.ticker.speed));
            b.show_play_button_overlay = !1;
            b.auto_play_list = !1;
            b.next_video_timer = 0;
            null == b.context_menu_mode && (b.context_menu_mode = !0 === this.debug ? "long" : "short");
            if (null != (null != (f = this.config.flash) ? null != (r = f.view) ? null != (k = r.elements) ? null != (m = k.loadingView) ? m.attributes : void 0 : void 0 : void 0 : void 0)) {
                c = "";
                for (e in this.config.flash.view.elements.loadingView.attributes) c += e + ":" + this.config.flash.view.elements.loadingView.attributes[e] + " ";
                b.loadingView = c
            }
            this.sendNotification(q.CREATE_FLASH_VARS, {
                flashvars: b,
                config: this.config
            });
            return b = g.override(b, a.vars)
        };
        p.prototype.createXML = function(a) {
            var b, c, e, n, d, h, f, r, k, m, l, p, t;
            null == (null != a ? null != (r = a.flash) ? r.xml : void 0 : void 0) && (null == a.flash && (a.flash = {}), a.flash.xml = "\x3capplication\x3e\x3c/application\x3e");
            l = fa.parse(a.flash.xml);
            1 < l.childNodes.length && l.removeChild(l.firstChild);
            this.sendNotification(q.CREATE_XML, {
                config: a,
                xml: l
            });
            d = function(a) {
                var b, c, n, h, f, K;
                h = a.resources;
                c = [];
                if (h instanceof Array && 0 < (null != h ? h.length : void 0))
                    for (f =
                             0, K = h.length; f < K; f++) n = h[f], n.type === k && (n = g.clone(n), !0 === e ? null != n.main && "" !== n.main ? (n.src = n.main, n.type = "static") : n.type = "dynamic" : null != n.src && "" !== n.src ? n.type = "dynamic" : (n.src = n.main, n.type = "static"), delete n.main, c.push(n));
                for (b in a) n = a[b], "flash" !== b && null != (h = null != n ? n.resources : void 0) && h instanceof Array && 0 < h.length && (c = c.concat(d(n)));
                return c
            };
            k = g.mimeTypes.swf;
            r = d(this.config);
            e = !0 === (null != (n = a.flash["static"]) ? n.enabled : void 0);
            if (0 < (null != r ? r.length : void 0))
                for (n = l.getElementsByTagName("plugins"),
                         1 > n.length ? (n = l.createElement("plugins"), l.firstChild.appendChild(n)) : n = n[0], p = 0, t = r.length; p < t; p++)
                    if (f = r[p], !1 !== f.enabled) {
                        a = l.createElement("plugin");
                        for (c in f) m = f[c], "loaded" !== c && ("src" !== c ? a.setAttribute(c, "" + m) : ("id" === c && "AkamaiAdvancedStreamingPlugin" === m && !0 === this.debug && (m = m.replace("AkamaiAdvancedStreamingPlugin.swf", "AkamaiAdvancedStreamingPlugin-logging.swf")), a.appendChild(fa.createTextContent(l, m))));
                        n.appendChild(a)
                    }
            h = function(a, b) {
                var c, e, n, d;
                if (null != a.attributes)
                    for (e in c =
                        a.attributes, c) n = c[e], b.setAttribute(e, "" + n);
                if (null != a.elements)
                    for (e in d = a.elements, d) n = d[e], null != n && (c = l.createElement("element"), c.setAttribute("id", e), "state" !== c.id && (h(n, c), b.appendChild(c)));
                if (null != a.state) {
                    c = l.createElement("state");
                    if (a.state.attributes)
                        for (e in d = a.state.attributes, d) n = d[e], null != n && c.setAttribute(e, "" + n);
                    b.appendChild(c)
                }
                return b
            };
            c = l.getElementsByTagName("view")[0];
            null == c && (c = l.createElement("view"), l.firstChild.appendChild(c));
            h(this.flashView, c);
            if (null != (null !=
                (b = this.config.fullscreen) ? b.mode : void 0))
                for (c = l.getElementsByTagName("element"), r = 0, a = c.length; r < a; r++) b = c[r], "fullscreenBtn" === b.getAttribute("id") && b.setAttribute("action", "external");
            b = fa.serialize(l);
            b = b.match(/<application>[\w\W\s\S\d\D]*<\/application>/)[0] || b;
            b = b.replace(/[\n\r\t]/g, "");
            b = this.evaluatePaths(b);
            return encodeURIComponent(b)
        };
        p.prototype.createdHandler = function(a) {
            var b = this;
            a = this.getMediaElement().id;
            a = document.getElementById(a);
            this.setMediaElement(a);
            a.className = cc.PREFIX +
                ec.prototype.componentType;
            a.eventHandler = function(a, e) {
                return b.eventHandler(a, e)
            };
            this.sendNotification(q.FLASH_CREATED);
            null != this.getMedium() && this.setMedium(this.getMedium())
        };
        p.prototype.eventHandler = function(a, b) {
            var c, e, n, v, h, f, r, g, k, l, m;
            this.logEvents && !this.excludedFlashEvents.test(a) && this.logger.log("[AMP FLASH EVENT] " + a, b);
            try {
                switch (a) {
                    case q.INITIALIZED:
                        f = h = "ready";
                        break;
                    case q.RESET:
                        null == b && (h = "ready");
                        this.started = !1;
                        break;
                    case q.LOADING:
                        f = "loadstart";
                        break;
                    case q.PLAYER_ERROR:
                        f =
                            h = "error";
                        break;
                    case q.MEDIA_ERROR:
                        f = h = "error";
                        break;
                    case q.FEED_LOADED:
                        b = JSON.parse(b);
                        n = new Uc;
                        v = null != (g = n.createFeed(b)) ? null != (k = g.item) ? k[0] : void 0 : void 0;
                        null != v && this.mediaProxy.setData(v);
                        break;
                    case q.FEED_UPDATED:
                        f = "mediachange";
                        b = this.getMedia();
                        r = !0;
                        break;
                    case q.ERROR_STREAM_NOT_FOUND:
                        f = h = "error";
                        break;
                    case q.CAPABILITY_CHANGE:
                        e = b.type;
                        "canPlayChange" === e && !0 === b.enabled ? (f = "canplay", this.loaded = !0) : "canSeekChange" === e && !0 === b.enabled ? f = "canplaythrough" : "temporalChange" === e && !0 === b.enabled &&
                            (f = "loadedmetadata", this.started || this.sendNotification(d.START, b));
                        break;
                    case q.PLAYING:
                        this.started || this.sendNotification(d.START, b);
                        f = h = "playing";
                        this._paused = this._ended = !1;
                        !0 === this.appState.getSeeking() && (this.appState.setSeeking(!1), this.sendNotification(d.SEEKED), this.sendNotification(d.DISPATCH_EVENT, new V("seeked")));
                        break;
                    case q.ELEMENT_EVENT:
                        "fullscreenBtn" === b.element && "click" === b.type && "external" === (null != (l = this.config) ? null != (m = l.fullscreen) ? m.mode : void 0 : void 0) && (h = this.getDisplayState() ===
                        ja.FULL_SCREEN ? ja.NORMAL : ja.FULL_SCREEN, this.setDisplayState(h));
                        break;
                    case q.PLAY_REQUEST:
                        this.sendNotification(d.PLAY_REQUEST);
                        f = d.MEDIA_SEQUENCE_STARTED;
                        this.loaded = !0;
                        this._ended = !1;
                        break;
                    case q.PLAY:
                        "paused" !== this.getPlayState() && this.started && this.sendNotification(d.PLAY, b);
                        break;
                    case q.ENDED:
                        f = h = d.ENDED;
                        this._ended = !0;
                        break;
                    case q.MEDIA_SEQUENCE_ENDED:
                        f = d.MEDIA_SEQUENCE_ENDED;
                        break;
                    case q.PAUSED:
                        f = "pause";
                        h = "paused";
                        this._paused = !0;
                        break;
                    case q.BUFFERING:
                        "ended" !== this.className && (f = h = "waiting");
                        break;
                    case q.DURATION_CHANGE:
                        isNaN(b.time) || (0 === b.time && this.sendNotification(d.MEDIA_SEQUENCE_ABORTED), f = "durationchange", b = b.time);
                        break;
                    case q.VOLUME_CHANGE:
                        f = "volumechange";
                        break;
                    case q.TIME_UPDATE:
                        f = "timeupdate";
                        break;
                    case q.SEEKING_CHANGE:
                        if (!1 === this.appState.getSeeking() && !1 === b.seeking) return;
                        f = b.seeking ? "seeking" : "seeked";
                        this.appState.setSeeking(b.seeking);
                        b.seeking && (h = "seeking");
                        break;
                    case q.FULLSCREEN_CHANGE:
                        f = "fullscreenchange";
                        b = "fullScreen" === b.displayState;
                        this.applyDisplayState(b ?
                            ja.FULL_SCREEN : ja.NORMAL);
                        break;
                    case q.FAIL_OVER_ATTEMPT:
                        f = "failoverattempt";
                        break;
                    case q.ERROR:
                        a = null;
                        break;
                    case q.AUTHORIZE:
                        f = xa.AUTHORIZE;
                        break;
                    case q.TIMED_METADATA:
                        f = d.TIMED_METADATA;
                        b = {
                            startTime: b.time,
                            endTime: b.time,
                            data: b
                        };
                        break;
                    case q.MEDIA_PLAYER_ID3_UPDATED:
                        f = d.TIMED_METADATA, b = {
                            startTime: b.time,
                            endTime: b.time,
                            data: window.atob(b)
                        }
                }
                null != a && a !== f && (e = new V(a, b), e.dispatcher = "FLASH", this.sendNotification(d.DISPATCH_EVENT, e), this.sendNotification(a, b));
                null != f && ("error" === f && (c = b.error || b,
                    this.logError("Flash Error", c)), this.sendNotification(f, b), this.sendNotification(d.DISPATCH_EVENT, new V(f, b)));
                null != r && this.sendNotification(d.UPDATE_DATA_BINDINGS);
                null != h && this.setPlayState(h)
            } catch (p) {
                this.logError("Event Error: " + a, p)
            }
        };
        p.prototype.logError = function(a, b) {
            this.logger.error("[AMP FLASH ERROR]", a, b)
        };
        p.prototype.excludedFlashEvents = /(mediaPlayerPlayheadUpdate|mediaPlayerElementEvent|adComponentPlaybackProgress)/;
        p.prototype.logFlashEvents = !1;
        p.prototype.logEvent = function(a) {
            "FLASH" ===
            a.dispatcher && !1 === this.logFlashEvents || !0 === this.excludedFlashEvents.test(a.type) || p.__super__.logEvent.call(this, a)
        };
        p.prototype.setPlayState = function(a) {
            this.sendNotification(d.CHANGE_PLAY_STATE, a);
            return a
        };
        p.prototype.getPlayState = function() {
            return this.appState.getPlayState()
        };
        p.prototype.setMedia = function(a) {
            var b = this;
            p.__super__.setMedia.call(this, a);
            null != this.getPlayState() && this.setPlayState("ready");
            this.mediaProxy.transform(a).then(function(c) {
                a = c;
                b.mediaProxy.setData(a);
                null != a.src &&
                b.setSrc(a.src);
                null != a.source && 0 < a.source.length && b.setSource(a.source);
                b.sendNotification(d.MEDIA_CHANGE, a);
                return b.load(b.mediaProxy.getData())
            })["catch"](function(a) {
                return b.sendNotification(d.ERROR, a)
            });
            return a
        };
        p.prototype.getMedia = function() {
            return this.mediaProxy.getData()
        };
        p.prototype.load = function(a) {
            var b;
            null == a && (a = {});
            b = this.mediaProxy.getData();
            null == a.autoplay && (a.autoplay = this.config.autoplay);
            this.loadAuthorized = this._loadAuthorized.bind(this, b, a);
            this.security.setMedia(b);
            this.security.getAuthorized() ?
                this.loadAuthorized(a) : this.sendNotification(xa.AUTHORIZE, {
                media: b,
                data: a
            })
        };
        p.prototype._loadAuthorized = function(a, b) {
            this.loaded = !0;
            this.getMediaElement().loadURL(this.mediaProxy.getSrc(), b)
        };
        p.prototype.play = function() {
            this.loaded || this.load();
            this.getMediaElement().unpause()
        };
        p.prototype.setMuted = function(a) {
            this._muted = a;
            try {
                !0 === a ? this.getMediaElement().mute() : this.getMediaElement().unmute()
            } catch (b) {
                this.logError("Flash muted error", b)
            }
            return a
        };
        p.prototype.getMuted = function() {
            return this._muted
        };
        p.prototype.getLoop = function() {
            return this._loop
        };
        p.prototype.getSrc = function(a) {
            return this.getMediaElement().getURL()
        };
        p.prototype.setSrc = function(a) {
            this.mediaProxy.setSrc(a);
            this.loaded = !1;
            this.setMedium(g.getMimeType(a));
            return a
        };
        p.prototype.setAutoplay = function(a) {
            this.getMediaElement().setPlayerProperty("autoplay", a);
            return a
        };
        p.prototype.getAutoplay = function() {
            return this.getMediaElement().getPlayerProperty("autoplay")
        };
        p.prototype.getMedium = function() {
            return this.mediaProxy.getData().medium
        };
        p.prototype.setMedium = function(a) {
            var b, c;
            b = this.mediaProxy.getData();
            if (a !== b.medium) return null != b.medium && (c = "medium-" + b.medium), b.medium = /audio/.test(a) ? "audio" : "video", this.sendNotification(d.MEDIUM_CHANGE, {
                value: "medium-" + b.medium,
                previous: c
            }), a
        };
        p.prototype.setSource = function(a) {
            var b, c = this;
            if (!(null == a || 1 > a.length)) {
                b = this.mediaProxy.getData();
                b.source = a;
                this.loaded = !1;
                b = g.selectSource(a, function(a) {
                    return c.canPlayType(a)
                });
                if (null != (null != b ? b.src : void 0) && "" !== b.src) this.setSrc(b.src),
                "undefined" !== typeof type && null !== type && this.setMedium(type);
                else throw Error("No valid source could be found");
                return a
            }
        };
        p.prototype.getSource = function() {
            return this.mediaProxy.getData().source
        };
        p.prototype.getSeeking = function() {
            return this.appState.getSeeking()
        };
        p.prototype.getPaused = function() {
            return this._paused
        };
        p.prototype.getEnded = function() {
            return this._ended
        };
        p.prototype.getFlashXML = function() {
            var a, b;
            b = decodeURIComponent(this.flashvars.settings_xml);
            a = fa.parse(b);
            try {
                a.toString = function() {
                    return b
                }
            } catch (c) {}
            return a
        };
        p.prototype.getFlashVars = function() {
            return this.flashvars
        };
        p.prototype.getFlashJSON = function() {
            return JSON.parse(decodeURIComponent(this.flashvars.settings_json))
        };
        p.prototype.evaluateBinding = function(a) {
            a = this.getMediaElement().evaluateBinding(a);
            if (null != a) try {
                a = JSON.parse(a)
            } catch (b) {}
            return a
        };
        p.prototype.canPlayType = function(a) {
            return 0 <= ve.call(g.flashTypes, a) ? "maybe" : ""
        };
        p.prototype.replay = function() {
            this.getMediaElement().replay()
        };
        p.prototype.pause = function() {
            this.getMediaElement().pause()
        };
        p.prototype.end = function() {
            this.getMediaElement().stopPlayer()
        };
        p.prototype.getCurrentTime = function() {
            var a;
            return "function" === typeof(a = this.getMediaElement()).getCurrentTime ? a.getCurrentTime() : void 0
        };
        p.prototype.setCurrentTime = function(a) {
            this.getMediaElement().jumpToTime(a);
            return a
        };
        p.prototype.getParams = function() {
            return this.getMediaElement().getParams()
        };
        p.prototype.setParams = function(a) {
            this.getMediaElement().setParams(a);
            return a
        };
        p.prototype.getVolume = function() {
            var a;
            return (null != (a = this.getMediaElement()) ?
                    "function" === typeof a.getVolume ? a.getVolume() : void 0 : void 0) || 0
        };
        p.prototype.setVolume = function(a, b) {
            this.getMediaElement().setVolume(a, b || "");
            return a
        };
        p.prototype.getDuration = function() {
            var a;
            return "function" === typeof(a = this.getMediaElement()).getDuration ? a.getDuration() : void 0
        };
        p.prototype.getDisplayState = function() {
            return this._displayState
        };
        p.prototype.setDisplayState = function(a) {
            var b;
            if (a !== this._displayState && (this.applyDisplayState(a), "external" !== (null != (b = this.config.fullscreen) ? b.mode :
                    void 0))) return this._displayState === ja.FULL_SCREEN ? this.getMediaElement().enterFullScreen() : this.getMediaElement().exitFullScreen(), a
        };
        p.prototype.applyDisplayState = function(a) {
            var b;
            a !== this._displayState && (b = {
                value: a,
                previous: this._displayState
            }, this._displayState = a, this.sendNotification(d.DISPLAY_STATE_CHANGE, b), this.sendNotification(d.DISPATCH_EVENT, new V("fullscreenchange", this._displayState === ja.FULL_SCREEN)))
        };
        p.prototype.enterFullScreen = function() {
            this.setDisplayState(ja.FULL_SCREEN)
        };
        p.prototype.exitFullScreen =
            function() {
                this.setDisplayState(ja.NORMAL)
            };
        p.prototype.recordContentChange = function(a) {
            this.getMediaElement().recordContentChange(a)
        };
        p.prototype.setQuality = function(a) {
            return this.getMediaElement().setQuality(a)
        };
        p.prototype.getQuality = function() {
            return this.getMediaElement().getQuality()
        };
        p.prototype.getQualityLevels = function() {
            return this.getMediaElement().getQualityLevels()
        };
        Events = {
            LOADED_METADATA: "loadedmetadata",
            READY: "ready",
            ERROR: "error",
            ENDED: "ended",
            STARTED: "started",
            DURATION_CHANGE: "durationchange",
            SEEKING: "seeking",
            SEEKED: "seeked",
            TIME_UPDATE: "timeupdate",
            LOAD_START: "loadstart",
            LOADED_DATA: "loadeddata",
            CAN_PLAY: "canplay",
            CAN_PLAY_THROUGH: "canplaythrough",
            PROGRESS: "progress",
            MEDIA_CHANGE: "mediachange",
            WAITING: "waiting",
            STALLED: "stalled",
            PLAY: "play",
            PLAYING: "playing",
            PAUSE: "pause",
            PAUSED: "paused",
            PLAY_REQUEST: "playrequest",
            MEDIUM_CHANGE: "mediumchange",
            TEMPORAL_TYPE_CHANGE: "temporaltypechange",
            VOLUME_CHANGE: "volumechange",
            FAIL_OVER_ATTEMPT: "failoverattempt",
            PLAYBACK_TARGET_CHANGE: "playbacktargetchange",
            PLAYBACK_TARGET_AVAILABLE: "playbacktargetavailable",
            RECORD_CONTENT_CHANGE: "recordcontentchange",
            IS_LIVE: "islive",
            CONTENT_CHANGED: "contentchanged",
            BITRATE_CHANGE: "bitratechange",
            BITRATE_CHANGING: "bitratechanging",
            BITRATE_LEVELS_LOADED: "bitratelevelsloaded",
            MEDIA_SEQUENCE_STARTED: "mediasequencestarted",
            MEDIA_SEQUENCE_ENDED: "mediasequenceended",
            MEDIA_SEQUENCE_ABORTED: "mediasequenceaborted",
            LANGUAGE_CHANGE: "languagechange",
            TIMED_METADATA: "timedmetadata",
            VIEW_CREATED: "viewcreated",
            MUTE_CHANGE: "mutechange",
            RESUME: "resume",
            PLAY_STATE_CHANGE: "playstatechange",
            FULL_SCREEN_CHANGE: "fullscreenchange",
            init: function() {
                var a, b;
                this.values = [];
                for (a in this) b = this[a], "values" !== a && "init" !== a && this.values.push(b)
            }
        };
        Events.init();
        var bc = function(a) {
            this.module = a;
            bc.__super__.constructor.call(this, a.getModuleName(), this)
        };
        f(bc, puremvc.Mediator);
        bc.prototype.module = null;
        bc.prototype.mediator = null;
        bc.prototype.initializeNotifier = function(a) {
            var b, c = this;
            bc.__super__.initializeNotifier.call(this, a);
            b = this.module.listNotificationPublications();
            null != b && (this.mediator = new puremvc.Mediator(this.facade.getModuleName()), this.mediator.listNotificationInterests = function() {
                return b
            }, this.mediator.handleNotification = function(a) {
                c.facade.sendNotification(a.getName(), a.getBody(), a.getType())
            })
        };
        bc.prototype.onRegister = function() {
            null != this.mediator && this.module.registerMediator(this.mediator)
        };
        bc.prototype.onRemove = function() {
            null != this.mediator && this.module.removeMediator(this.mediator)
        };
        bc.prototype.listNotificationInterests = function() {
            return this.module.listNotificationInterests()
        };
        bc.prototype.handleNotification = function(a) {
            this.module.sendNotification(a.getName(), a.getBody(), a.getType())
        };
        var Rb = function() {};
        Rb.SINGLE = /^\s*#{([^#{}]+)}\s*$/;
        Rb.TOKEN = /#{([^#}]*)}/g;
        Rb.RETURN = "return ";
        Rb.EVENT = "event";
        Rb.ELEMENT = "element";
        Rb.PATHS = "paths";
        Rb.eval = function(a, b, c, e, n) {
            var d, h;
            if (null == a) return a;
            d = null != (h = this.SINGLE.exec(a)) ? h[1] : null;
            return null != d ? this.evalBinding(d, b, c, e, n) : this.evalString(a, b, c, e, n)
        };
        Rb.evalString = function(a, b, c, e, n) {
            return a.replace(this.TOKEN, this.replaceBinding.bind(this,
                b, c, e, n))
        };
        Rb.replaceBinding = function(a, b, c, e, n, d, h, f) {
            return this.evalBinding(d, a, b, c, e)
        };
        Rb.evalBinding = function(a, b, c, e, n) {
            var d;
            try {
                d = this.exec(a, b, c, e, n)
            } catch (h) {
                d = "#{" + a + "}"
            }
            return d
        };
        Rb.exec = function(a, b, c, e, n) {
            return (new Function(this.EVENT, this.ELEMENT, this.PATHS, this.RETURN + a)).bind(b)(c, e, n)
        };
        var we = function() {
            we.__super__.constructor.call(this)
        };
        f(we, puremvc.SimpleCommand);
        we.prototype.execute = function(a) {
            a = a.getBody();
            a.player = this.facade.player || this.facade;
            this.facade.dispatchEvent(a)
        };
        var d = {
            STARTUP: "startup",
            LOAD: "load",
            PAUSE_REQUEST: "pauserequest",
            TOGGLE_PLAY_PAUSE: "togglePlayPause",
            CHANGE_PLAY_STATE: "chageplaystate",
            MEDIA_ELEMENT_CHANGE: "mediaelementchange",
            HIDDEN_CHANGE: "hiddenchange",
            TOGGLE_FULL_SCREEN: "toggleFullScreen",
            CHANGE_DISPLAY_STATE: "chageDisplayState",
            DISPLAY_STATE_CHANGE: "displayStateChange",
            DISABLE_FULL_SCREEN: "disableFullScreen",
            ENABLE_FULL_SCREEN: "enableFullScreen",
            TOGGLE_ACTIVE: "toggleActive",
            CHANGE_ACTIVE_STATE: "changeactivestate",
            ACTIVE_STATE_CHANGE: "activestatechange",
            CHANGE_MEDIA: "changeMedia",
            SET_MEDIA: "setmedia",
            MEDIA_VALIDATED: "mediavalidated",
            UPDATE_DATA_BINDINGS: "updatedatabindings",
            CHANGE_VOLUME: "changevolume",
            CHANGE_MUTED: "changemuted",
            TOGGLE_MUTED: "togglemuted",
            SEEK: "seek",
            CHANGE_DURATION: "changeduration",
            CHANGE_AUTOPLAY: "changeAutoplay",
            CHANGE_LOOP: "changeLoop",
            PLAYBACK_CORE_CHANGE: "playbackCoreChange",
            START: "start",
            END: "end",
            REPLAY: "replay",
            REGISTER_PLUGIN: "registerPlugin",
            REGISTER_PLUGINS: "registerPlugins",
            PLUGIN_REGISTERED: "pluginRegistered",
            ADD_LAYER: "addLayer",
            REMOVE_LAYER: "removeLayer",
            ADD_OVERLAY: "addOverlay",
            REMOVE_OVERLAY: "removeOverlay",
            ADD_CONTROL: "addControl",
            REMOVE_CONTROL: "removeControl",
            ADD_CONTROL_STATE: "addControlState",
            REMOVE_CONTROL_STATE: "removeControlState",
            ADD_APPLICATION_STATE: "addApplicationState",
            REMOVE_APPLICATION_STATE: "removeApplicationState",
            DISPATCH_EVENT: "dispatchEvent",
            CHANGE_PARAMS: "changeParams",
            ADD_CUE_POINTS: "addCuePoints",
            REMOVE_CUE_POINTS: "removeCuePoints",
            INITIALIZED: "initialized",
            REGISTER_PLAYBACK_CORE: "registerPlaybackCore",
            REMOVE_PLAYBACK_CORE: "removePlaybackCore",
            DISPLAY_TIME: "displaytime",
            IS_USER_ACTIVE: "isUserActive",
            CHANGE_PLAYBACK_TARGET: "changeplaybacktarget",
            LOCK: "lock",
            FRAGMENT_LOAD_START: "fragmentloadstart",
            FRAGMENT_LOADED: "fragmentloaded",
            CHANGE_CONTENT: "changecontent",
            ENABLE_VIDEO_EVENTS: "enablevideoevents",
            DISABLE_VIDEO_EVENTS: "disablevideoevents",
            HAS_POST_CONTENT: "haspostcontent",
            init: function() {
                var a, b;
                for (a in Events) b = Events[a], "values" !== a && "init" !== a && (this[a] = b)
            }
        };
        d.init();
        var yc = function(a) {
            var b,
                c;
            null == a && (a = {});
            a = g.override(yc.defaults, a);
            !0 === /amp\-debug\=true/.test(location.search.toLowerCase()) && (a.debug = !0);
            a.mode = g.getPlaybackMode(a.mode);
            a.version = l.getVersion();
            for (b in a) c = a[b], this[b] = c
        };
        yc.create = function(a) {
            return new yc(a)
        };
        yc.defaults = {
            paths: {
                player: "../amp.premier/",
                resources: "../resources/"
            },
            resources: [{
                src: "#{paths.player}amp.premier.css",
                type: "text/css"
            }],
            rules: {
                android_4_gets_m3u8: {
                    regexp: "Android 4"
                }
            },
            attributes: {},
            autoplay: !0,
            loop: !1,
            playsinline: null,
            muted: null,
            target: "_blank",
            domain: "akamai.com",
            fullscreen: {},
            controls: {},
            contextmenu: {},
            volumepanel: {
                direction: "vertical"
            },
            captioning: {},
            playoverlay: {},
            hls: {
                resources: [{
                    type: "text/javascript",
                    src: "#{paths.resources}js/hls.min.js",
                    debug: "#{paths.resources}js/hls.js"
                }],
                quality: {
                    startLevel: -1
                },
                data: {
                    enableWorker: !0,
                    enableSoftwareAES: !0
                }
            },
            dash: {
                resources: [{
                    type: "text/javascript",
                    src: "//cdn.dashjs.org/v2.4.1/dash.all.min.js",
                    debug: "//cdn.dashjs.org/v2.4.1/dash.all.debug.js"
                }],
                buffer: 1
            },
            flash: {
                swf: "#{paths.player}AkamaiPremierPlayer.swf",
                debug: "#{paths.player}AkamaiPremierPlayer-debug.swf",
                expressInstallSWF: "#{paths.player}playerProductInstall.swf",
                "static": {
                    enabled: !1,
                    swf: "#{paths.player}AkamaiPremierPlayer-static.swf",
                    debug: "#{paths.player}AkamaiPremierPlayer-static-debug.swf"
                },
                vars: {
                    core_player_name: "amp.premier",
                    mbr_starting_index: 2,
                    use_last_known_bitrate: !1,
                    use_netsession_client: !1,
                    netsession_install_prompt_frequency_secs: -1,
                    ad_server_timeout: 20,
                    ad_control_enabled: !0,
                    dvr_enabled: 1,
                    branding_preload: "none",
                    hds_live_low_latency: !0,
                    fullscreen_enabled: !0,
                    show_feature_bar: !1,
                    suppress_events: "mediaPlayerViewInitialized",
                    hds_fragment_retry_data_gap_threshold: 20
                },
                view: {
                    attributes: {
                        skin: "#{paths.player}premier.assets.swf"
                    },
                    elements: {
                        infoOverlay: {
                            attributes: {
                                style: "top: 0px;"
                            }
                        },
                        adOptions: {
                            attributes: {
                                style: "backgroundColor: 'rgba(0, 0, 0, 1)'"
                            },
                            elements: {
                                adChoices: {
                                    attributes: {
                                        target: "http://www.akamai.com/"
                                    }
                                },
                                adCountdown: {},
                                adCount: {}
                            }
                        },
                        endSlate: {
                            attributes: {
                                enabled: "true",
                                hideElements: "brandingLogo|viewAll"
                            }
                        },
                        replayView: {},
                        bufferingView: {}
                    }
                }
            },
            locales: {
                en: {
                    MSG_TIME_SEPARATOR: " / ",
                    MSG_EMAIL_TO: "To",
                    MSG_EMAIL_FROM: "From",
                    MSG_EMAIL_VIDEO: "Email this video",
                    MSG_EMAIL_MESSAGE_DEFAULT: "Check out this video from xxx",
                    MSG_EMAIL_MESSAGE: "Message",
                    MSG_EMAIL_ADDRESS_INVALID: "Invalid Email Address",
                    MSG_EMAIL_MESSAGE_INVALID: "Please limit your message to 500 characters or less.",
                    MSG_EMAIL_CHARACTERS_REMAINING_TEXT: " characters left",
                    MSG_EMAIL_SEND_FAILURE: "Message could not be sent.",
                    MSG_EMAIL_SEND_SUCCESS_MESSAGE: "Your email has been sent!",
                    MSG_SHARE_VIDEO_TEXT: "Share this video...",
                    MSG_POST_TEXT: "Post",
                    MSG_EMBED_TEXT: "Embed",
                    MSG_LINK_TEXT: "Link",
                    MSG_SHARE_CONNECT_FAILURE: "Unable to connect. Please try again.",
                    MSG_SHARE_CONTENT_DISABLED: "Share and embed are disabled.",
                    MSG_VERSION_TEXT: "Version",
                    MSG_BUFFERING_TEXT: "buffering",
                    MSG_CUSTOMIZE_CLIP_POINTS: "Customize the start and end point of the video.",
                    MSG_PAUSE: "Pause",
                    MSG_PLAY: "Play",
                    MSG_REWIND: "Rewind",
                    MSG_PLAYBACK_RATE: "Playback Rate",
                    MSG_FULLSCREEN: "Fullscreen",
                    MSG_ENTER_FULLSCREEN: "Enter Fullscreen",
                    MSG_EXIT_FULLSCREEN: "Exit Fullscreen",
                    MSG_MUTE: "Mute",
                    MSG_JUMP_BACK: "Jump Back",
                    MSG_JUMP_AHEAD: "Jump Ahead",
                    MSG_VOLUME: "Volume",
                    MSG_REPLAY: "Replay",
                    MSG_SETTINGS: "Settings",
                    MSG_SHARE: "Share",
                    MSG_CLOSED_CAPTIONING: "Closed Captioning",
                    MSG_SLIDER: "Slider",
                    MSG_SEEK: "Seek",
                    MSG_OF: "of",
                    MSG_AD: "Ad",
                    MSG_PREVIEW: "Preview",
                    MSG_CURRENT: "Current",
                    MSG_SEEK_TO: "Seek to",
                    MSG_LIVE: "LIVE",
                    MSG_DEFAULT_ERROR_MESSAGE: "Sorry, we were unable to play the media you selected. Please try again, or select alternate media.",
                    MSG_ERROR_PREFIX: "Error encountered:",
                    MSG_STREAM_NOT_FOUND: "Stream not found",
                    MSG_CURRENT_WORKING_BANDWIDTH: "Current working bandwidth",
                    MSG_CURRENT_BITRATE_PLAYING: "Current bitrate playing",
                    MSG_MAX_BITRATE_AVAILABLE: "Max bitrate available",
                    MSG_NOT_AVAILABLE: "Not Available",
                    MSG_GO_LIVE: "GO LIVE",
                    MSG_NEXT_VIDEO: "Video starts in: ",
                    MSG_RECOMMENDED: "Recommended",
                    MSG_VIEW_ALL: "View all ",
                    MSG_VIDEO: " videos",
                    MSG_CC: "CC",
                    MSG_CC_TITLE: "Caption",
                    MSG_CC_LANGUAGE: "Track :",
                    MSG_CC_PRESETS: "Presets :",
                    MSG_CC_FONT: "Font :",
                    MSG_CC_EDGE: "Edge :",
                    MSG_CC_SIZE: "Size :",
                    MSG_CC_SCROLL: "Scroll :",
                    MSG_CC_COLOR: "Color :",
                    MSG_CC_BACKGROUND: "Background :",
                    MSG_CC_WINDOW: "Window :",
                    MSG_CC_OPACITY: "Opacity :",
                    MSG_CC_SHOW_ADVANCED: "Show Advanced Settings",
                    MSG_CC_HIDE_ADVANCED: "Hide Advanced Settings",
                    MSG_NEXT_AD: "Next ad starts in: ",
                    MSG_CC_RESET: "Default",
                    MSG_CC_CANCEL: "Cancel",
                    MSG_CC_APPLY: "Apply",
                    MSG_CC_PREVIEW_TEXT: "Lorem ipsum dolor sit amet..",
                    MSG_EN: "English",
                    MSG_ES: "Spanish",
                    MSG_DE: "German",
                    MSG_FR: "French",
                    MSG_IT: "Italian",
                    MSG_RU: "Russian",
                    MSG_ZH: "Chinese",
                    MSG_CHROMECAST_MESSAGE: "Video playing on another screen",
                    MSG_RETRY_MESSAGE: "Content not yet available, retrying in",
                    MSG_SECONDS: "seconds",
                    MSG_RETRY_FAILED: "Retry failed",
                    MSG_RECOMMENDATIONS_TITLE: "Recommended",
                    MSG_VIEWER_ID: "Viewer ID: "
                },
                es: {
                    MSG_TIME_SEPARATOR: " / ",
                    MSG_EMAIL_TO: "a",
                    MSG_EMAIL_FROM: "de",
                    MSG_EMAIL_VIDEO: "Enviar este v\u00eddeo",
                    MSG_EMAIL_MESSAGE_DEFAULT: "Echa un vistazo a este video de xxx",
                    MSG_EMAIL_MESSAGE: "mensaje",
                    MSG_EMAIL_ADDRESS_INVALID: "Direcci\u00f3n de correo electr\u00f3nico no v\u00e1lida",
                    MSG_EMAIL_MESSAGE_INVALID: "Por favor limite su mensaje a 500 caracteres o menos.",
                    MSG_EMAIL_CHARACTERS_REMAINING_TEXT: "personajes de la izquierda",
                    MSG_EMAIL_SEND_FAILURE: "El mensaje no pudo ser enviado.",
                    MSG_EMAIL_SEND_SUCCESS_MESSAGE: "Tu email ha sido enviado!",
                    MSG_SHARE_VIDEO_TEXT: "Comparte este v\u00eddeo...",
                    MSG_POST_TEXT: "enviar",
                    MSG_EMBED_TEXT: "incrustar",
                    MSG_LINK_TEXT: "enlace",
                    MSG_SHARE_CONNECT_FAILURE: "No se puede conectar. Por favor, int\u00e9ntelo de nuevo.",
                    MSG_SHARE_CONTENT_DISABLED: "Compartir e incrustar est\u00e1n desactivados.",
                    MSG_VERSION_TEXT: "versi\u00f3n",
                    MSG_BUFFERING_TEXT: "el almacenamiento en b\u00fafer",
                    MSG_CUSTOMIZE_CLIP_POINTS: "Personalizar el inicio y el punto final del video.",
                    MSG_PAUSE: "Pausa",
                    MSG_PLAY: "Reproducir",
                    MSG_REWIND: "Retroceder",
                    MSG_PLAYBACK_RATE: "Playback Rate",
                    MSG_FULLSCREEN: "Pantalla completa",
                    MSG_ENTER_FULLSCREEN: "Ir a pantalla completa",
                    MSG_EXIT_FULLSCREEN: "Exit Fullscreen",
                    MSG_MUTE: "Silencio",
                    MSG_JUMP_BACK: "Jump Back",
                    MSG_JUMP_AHEAD: "Jump Ahead",
                    MSG_VOLUME: "Volumen",
                    MSG_REPLAY: "Reproducir de nuevo",
                    MSG_SETTINGS: "Configuraciones",
                    MSG_SHARE: "Compartir",
                    MSG_CLOSED_CAPTIONING: "Closed Captioning",
                    MSG_SLIDER: "Slider",
                    MSG_SEEK: "Tratar",
                    MSG_OF: "de",
                    MSG_AD: "Ad",
                    MSG_PREVIEW: "vista previa",
                    MSG_CURRENT: "corriente",
                    MSG_SEEK_TO: "Tratar de",
                    MSG_LIVE: "EN VIVO",
                    MSG_DEFAULT_ERROR_MESSAGE: "Lo sentimos, no hemos podido jugar los medios de comunicaci\u00f3n seleccionados. Por favor, int\u00e9ntelo de nuevo, o seleccionar los medios de comunicaci\u00f3n alternativos.",
                    MSG_ERROR_PREFIX: "Se produjo un error:",
                    MSG_STREAM_NOT_FOUND: "Stream que no se encuentra",
                    MSG_CURRENT_WORKING_BANDWIDTH: "Ancho de banda actual de trabajo",
                    MSG_CURRENT_BITRATE_PLAYING: "Tasa de bits de reproducci\u00f3n actual",
                    MSG_MAX_BITRATE_AVAILABLE: "Tasa de bits m\u00e1xima disponible",
                    MSG_NOT_AVAILABLE: "No est\u00e1 disponible",
                    MSG_GO_LIVE: "IR A VIVIR",
                    MSG_NEXT_VIDEO: "El pr\u00f3ximo video comienza en: ",
                    MSG_RECOMMENDED: "Recomendado",
                    MSG_CC: "CC",
                    MSG_VIEW_ALL: "ver todo ",
                    MSG_VIDEO: " v\u00eddeos.",
                    MSG_EN: "Ingl\u00e9s",
                    MSG_ES: "Espa\u00f1ol",
                    MSG_DE: "Alem\u00e1n",
                    MSG_FR: "Franc\u00e9s",
                    MSG_IT: "Italiano",
                    MSG_RU: "Ruso",
                    MSG_ZH: "Chino",
                    MSG_RETRY_MESSAGE: "Content not yet available, retrying in",
                    MSG_SECONDS: "seconds",
                    MSG_RETRY_FAILED: "Retry failed",
                    MSG_RECOMMENDATIONS_TITLE: "Recomendado",
                    MSG_VIEWER_ID: "Viewer ID: "
                }
            }
        };
        var Cd = function() {};
        Cd.prototype.data = null;
        Cd.prototype.value = null;
        Cd.prototype.source = null;
        Cd.prototype.parse = function(a) {};
        Cd.prototype.compile = function(a, b) {};
        var zc = function(a) {
            null != a && this.parse(a)
        };
        f(zc, Cd);
        zc.prototype.data = null;
        zc.prototype.value = null;
        zc.prototype.source =
            null;
        zc.prototype.parse = function(a) {
            return a instanceof Array ? new $d(a) : a instanceof Object ? new id(a) : new Ac(a)
        };
        var xa = {
                AUTHORIZATION_FAILED: "authorizationfailed",
                AUTHORIZE: "authorize",
                AUTHORIZED: "authorized"
            },
            m = function(a, b, c) {
                var e;
                this.target = a;
                this.type = b;
                this.handler = c;
                this.trigger = Bi(this.trigger, this);
                m.instances.push(this);
                this.types = [];
                (e = this.type, 0 <= ve.call(m.EVENTS, e)) ? g.isTouchDevice() ? (this.types.push(m.TOUCH_EVENTS[this.type]), this.type === m.TOUCH_EVENTS[1] && this.types.push(m.TOUCH_EVENTS[4])) :
                    this.types.push(m.MOUSE_EVENTS[this.type]): this.type instanceof Array ? this.types = this.type : this.types.push(this.type);
                this.bind()
            };
        m.PRESS = 0;
        m.RELEASE = 1;
        m.MOVE = 2;
        m.CLICK = 3;
        m.CONTEXTMENU = 4;
        m.HOVER = 5;
        m.HOVEROUT = 6;
        m.EVENTS = [m.PRESS, m.RELEASE, m.MOVE, m.CLICK, m.CONTEXTMENU, m.HOVER, m.HOVEROUT];
        m.MOUSE_EVENTS = "mousedown mouseup mousemove click contextmenu mouseover mouseout".split(" ");
        m.TOUCH_EVENTS = ["touchstart", "touchend", "touchmove", "click", "touchcancel"];
        m.instances = [];
        m.create = function(a, b, c) {
            return new m(a,
                b, c)
        };
        m.bind = function(a, b) {
            var c, e, n, d;
            d = m.instances;
            c = e = 0;
            for (n = d.length; e < n; c = ++e) c = d[c], c.target === a && (null != b && c.type !== b || c.bind())
        };
        m.unbind = function(a, b) {
            var c, e, n, d;
            d = m.instances;
            c = e = 0;
            for (n = d.length; e < n; c = ++e) c = d[c], c.target === a && (null != b && c.type !== b || c.unbind())
        };
        m.clear = function(a, b) {
            var c, e, n, d, h;
            h = m.instances;
            c = n = 0;
            for (d = h.length; n < d; c = ++n) e = h[c], (null != e ? e.target : void 0) !== a || null != b && e.type !== b || (e.clear(), m.instances.splice(c, 1))
        };
        m.prototype.types = null;
        m.prototype.bind = function() {
            var a,
                b, c, e;
            e = this.types;
            b = 0;
            for (c = e.length; b < c; b++) a = e[b], null != this.target.addEventListener ? this.target.addEventListener(a, this.trigger, !1) : null != this.target.attachEvent && this.target.attachEvent("on" + a, this.trigger)
        };
        m.prototype.unbind = function() {
            var a, b, c, e;
            e = this.types;
            b = 0;
            for (c = e.length; b < c; b++) a = e[b], null != this.target.removeEventListener ? this.target.removeEventListener(a, this.trigger) : null != this.target.attachEvent && this.target.removeEvent("on" + a, this.trigger)
        };
        m.prototype.clear = function() {
            this.unbind();
            this.types = this.type = this.handler = this.target = null
        };
        m.prototype.trigger = function(a) {
            this.handler(a)
        };
        var ca = function(a) {
            this.defaults = yc.defaults;
            ca.__super__.constructor.call(this, a)
        };
        f(ca, x);
        ca.NAME = x.NAME;
        ca.prototype.getContextName = function() {
            return "paths"
        };
        ca.prototype.getContextData = function() {
            return this.getPaths()
        };
        ca.prototype.onRegister = function() {
            this.facade.retrieveProxy(Ja.NAME).registerContext(this)
        };
        ca.prototype.setData = function(a) {
            null != a.rules && g.mergeRules(a.rules);
            ca.__super__.setData.call(this,
                a);
            return a
        };
        ca.prototype.getPlaysInline = function() {
            return this.data.playsinline
        };
        ca.prototype.getMuted = function() {
            return this.data.muted
        };
        ca.prototype.getAutoplay = function() {
            return this.data.autoplay
        };
        ca.prototype.setAutoplay = function(a) {
            return this.data.autoplay = a
        };
        ca.prototype.getLoop = function() {
            return this.data.loop
        };
        ca.prototype.setLoop = function(a) {
            return this.data.loop = a
        };
        ca.prototype.getEndSlate = function() {
            return this.data.endslate
        };
        ca.prototype.setEndSlate = function(a) {
            return this.data.endslate =
                a
        };
        ca.prototype.getDomain = function() {
            return this.data.domain
        };
        ca.prototype.setDomain = function(a) {
            return this.data.domain = a
        };
        ca.prototype.getTarget = function() {
            return this.data.target
        };
        ca.prototype.setTarget = function(a) {
            return this.data.target = a
        };
        ca.prototype.getName = function() {
            return this.data.name
        };
        ca.prototype.setName = function(a) {
            return this.data.name = a
        };
        ca.prototype.getPaths = function() {
            return this.data.paths
        };
        ca.prototype.setPaths = function(a) {
            return this.data.paths = a
        };
        ca.prototype.getVersion = function() {
            return this.data.version
        };
        ca.prototype.getControls = function() {
            return this.data.controls
        };
        ca.prototype.setControls = function(a) {
            return this.data.controls = a
        };
        ca.prototype.getFullscreen = function() {
            return this.data.fullscreen || {}
        };
        ca.prototype.setFullscreen = function(a) {
            return this.data.fullscreen = a
        };
        var jd = function() {
            jd.__super__.constructor.call(this)
        };
        f(jd, ya);
        jd.prototype.playbackCoreName = "audio";
        jd.prototype.onRegister = function() {
            var a;
            a = new ec("html5", "audio");
            this.sendNotification(d.PLAYBACK_CORE_CHANGE, a)
        };
        jd.prototype.onRemove =
            function() {
                this.facade.createMediaElement()
            };
        jd.prototype.canPlayMedium = function(a) {
            return "audio" === a
        };
        jd.prototype.canPlayType = function(a) {
            return /audio/.test(a) ? "maybe" : ""
        };
        var $d = function(a) {
            $d.__super__.constructor.call(this, a)
        };
        f($d, zc);
        $d.prototype.parse = function(a) {
            var b, c, e, n;
            this.data = [];
            b = e = 0;
            for (n = a.length; e < n; b = ++e) c = a[b], this.data[b] = $d.__super__.parse.call(this, c);
            return this.data
        };
        $d.prototype.compile = function(a, b) {
            var c, e, n, d, h;
            null == a && (a = {});
            null == b && (b = !1);
            this.value = [];
            h = this.data;
            c = n = 0;
            for (d = h.length; n < d; c = ++n) {
                e = h[c];
                try {
                    this.value[c] = e.compile(a, b)
                } catch (f) {
                    this.value[c] = null, b || ia.error(f)
                }
            }
            return this.value
        };
        var Ta = function() {
            Ta.__super__.constructor.call(this)
        };
        f(Ta, ya);
        Ta.prototype.playbackCoreName = "dvr";
        Ta.prototype.interval = null;
        Ta.prototype.ondurationchange = function(a) {
            this.updateDuration()
        };
        Ta.prototype.ontimeupdate = function(a) {
            this.updateCurrentTime()
        };
        Ta.prototype.onplay = function(a) {
            this.stopTimer();
            Ta.__super__.onplay.call(this, a)
        };
        Ta.prototype.onplaying = function(a) {
            this.stopTimer();
            Ta.__super__.onplaying.call(this, a)
        };
        Ta.prototype.onpause = function(a) {
            this.startTimer();
            Ta.__super__.onpause.call(this, a)
        };
        Ta.prototype.canPlayTemporalType = function(a) {
            return "dvr" === a
        };
        Ta.prototype.seek = function(a) {
            null == a && (a = this.data.currentTime);
            this.getMediaElement().currentTime = a + this.getMediaElement().seekable.start(0)
        };
        Ta.prototype.updateCurrentTime = function() {
            var a, b;
            b = this.getMediaElement().seekable;
            0 !== b.length && (a = this.getMediaElement().currentTime, this.data.currentTime = a - b.start(0), this.sendNotification(d.TIME_UPDATE,
                this.data.currentTime), this.mediaProxy.setIsLive(a >= b.end(0)))
        };
        Ta.prototype.updateDuration = function() {
            var a;
            a = this.getMediaElement().seekable;
            0 !== a.length && (this.data.duration = a.end(0) - a.start(0), this.sendNotification(d.CHANGE_DURATION, this.data.duration))
        };
        Ta.prototype.startTimer = function() {
            this.interval = setInterval(this.updateCurrentTime.bind(this), 1E3)
        };
        Ta.prototype.stopTimer = function() {
            null != this.interval && (clearInterval(this.interval), this.interval = null, this.updateCurrentTime())
        };
        var Bc = function() {
            Bc.__super__.constructor.call(this);
            null == this.contextName && (this.contextName = this.constructor.NAME)
        };
        f(Bc, puremvc.Proxy);
        Bc.prototype.contextName = null;
        Bc.prototype.contextData = null;
        Bc.prototype.onRegister = function() {
            var a;
            null != this.getContextName() && (a = this.facade.player || this.facade, a = a.retrieveProxy(Ja.NAME), a.registerContext(this))
        };
        Bc.prototype.getContextName = function() {
            return this.contextName
        };
        Bc.prototype.getContextData = function() {
            return this.contextData
        };
        var da = function(a, b) {
            this.defaultPlaybackCore = a;
            this.getPlaybackOrder =
                b;
            da.__super__.constructor.call(this);
            this.playbackCoreMap = [];
            null == this.getPlaybackOrder && (this.getPlaybackOrder = function(a) {
                if (/Edge|Android/.test(navigator.userAgent)) return ["hls", "dash", "dvr", "default", "audio"]
            })
        };
        f(da, Bc);
        da.NAME = "PlayerProxy";
        da.prototype.contextName = "player";
        da.prototype.getPlaybackOrder = null;
        da.prototype.playbackCoreMap = null;
        da.prototype.defaultPlaybackCore = null;
        da.prototype.activePlaybackCore = null;
        da.prototype.onRegister = function() {
            da.__super__.onRegister.call(this);
            this.registerPlaybackCore(new Ta);
            this.registerPlaybackCore(this.defaultPlaybackCore);
            this.registerPlaybackCore(new jd);
            this.activePlaybackCore = this.defaultPlaybackCore
        };
        da.prototype.ready = function() {
            var a;
            a = "function" === typeof this.getPlaybackOrder ? this.getPlaybackOrder(this.playbackCoreMap.map(function(a) {
                return a.getPlaybackCoreName()
            })) : void 0;
            null != a && (this.playbackCoreMap = this.playbackCoreMap.sort(function(b, c) {
                b = a.indexOf(b.getPlaybackCoreName());
                c = a.indexOf(c.getPlaybackCoreName());
                return b === c ? 0 : -1 === b && -1 !== c ? 1 : -1 !== b &&
                -1 === c ? -1 : b - c
            }))
        };
        da.prototype.getActivePlaybackCore = function() {
            return this.activePlaybackCore
        };
        da.prototype.registerPlaybackCore = function(a) {
            var b;
            b = a.getPlaybackCoreName();
            null == a || this.playbackCoreMap.some(function(a) {
                return a.getPlaybackCoreName() === b
            }) || this.playbackCoreMap.push(a)
        };
        da.prototype.retrievePlaybackCore = function(a) {
            var b, c, e, n;
            n = this.playbackCoreMap;
            c = 0;
            for (e = n.length; c < e; c++)
                if (b = n[c], b.getPlaybackCoreName() === a) return b
        };
        da.prototype.removePlaybackCore = function(a) {
            var b;
            a = this.retrievePlaybackCore(a);
            if (null == a) return null;
            b = this.playbackCoreMap.indexOf(a);
            this.playbackCoreMap.splice(b, 1);
            return a
        };
        da.prototype.setPlaybackCore = function(a) {
            var b, c, e, n, d;
            d = this.playbackCoreMap;
            e = 0;
            for (n = d.length; e < n; e++)
                if (b = d[e], !0 === b.canPlayMedium(a.medium) && !0 === b.canPlayTemporalType(a.temporalType) && "" !== b.canPlayType(a.type)) {
                    c = b;
                    break
                }
            b = this.facade.retrieveProxy(s.NAME);
            b !== c && ("function" === typeof b.destroy && b.destroy(), this.facade.removeProxy(s.NAME), this.facade.registerProxy(c), c.setData(b.getData()));
            this.activePlaybackCore = c;
            return a
        };
        da.prototype.canPlayType = function(a) {
            var b, c, e, n;
            n = this.playbackCoreMap;
            c = 0;
            for (e = n.length; c < e; c++)
                if (b = n[c], b = b.canPlayType(a), "" !== b) return b;
            return ""
        };
        da.prototype.getContextData = function() {
            var a, b, c, e;
            a = this.facade.retrieveProxy(ca.NAME);
            e = this.facade.retrieveProxy(s.NAME);
            c = this.facade.retrieveProxy(t.NAME);
            b = this.facade.getViewComponent();
            return {
                width: b.offsetWidth,
                height: b.offsetHeight,
                mode: "html5",
                autoplay: a.getAutoplay(),
                domain: a.getDomain(),
                name: a.getName(),
                currentTime: e.getCurrentTime(),
                duration: e.getDuration(),
                version: a.getVersion(),
                timecode: {
                    duration: g.formatTimecode(c.getDuration()),
                    currentTime: g.formatTimecode(e.getCurrentTime())
                }
            }
        };
        var t = function() {
            this.data = {
                metadata: {}
            };
            this.transforms = [this.defaultMediaTranform.bind(this)];
            t.__super__.constructor.call(this)
        };
        f(t, Bc);
        t.NAME = "MediaProxy";
        t.prototype.contextName = "media";
        t.prototype.data = null;
        t.prototype.value = null;
        t.prototype.started = !1;
        t.prototype.authorized = !0;
        t.prototype.transforms = null;
        t.prototype.getContextData =
            function() {
                return this.data
            };
        t.prototype.setData = function(a) {
            this.data && this.facade.getCurrentTime() < this.facade.getDuration() && this.sendNotification(d.MEDIA_SEQUENCE_ABORTED);
            this.started = !1;
            this.setAutoplay(a.autoplay);
            this.setType(a.type);
            this.setIsLive(a.isLive);
            this.setTemporalType(a.temporalType);
            null != a.source && this.setSource(a.source);
            null != a.src && this.setSrc(a.src);
            this.setTitle(a.title);
            null != a.duration && this.setDuration(a.duration);
            this.setPoster(a.poster);
            this.setGUID(a.guid);
            this.setLink(a.link);
            this.setEmbed(a.embed);
            this.setWidth(a.width);
            this.setHeight(a.height);
            this.setCategory(a.category);
            this.setStartTime(a.startTime);
            this.setDescription(a.description);
            this.setStatus(a.status);
            this.setCategory(a.category);
            this.setMetadata(a.metadata);
            this.setAuthorization(a.authorization);
            this.setMedium(a.medium);
            this.setPubDate(a.pubDate);
            this.setTrack(a.track);
            this.setScenes(a.scenes);
            this.setKeys(a.keys);
            return this.data
        };
        t.prototype.defaultMediaTranform = function(a) {
            var b, c, e, n, d, h, f;
            if (null == a.src &&
                0 < (null != (e = a.source) ? e.length : void 0))
                if (c = this.facade.retrieveProxy(da.NAME) || this.facade, null != c && (b = g.selectSource(a.source, function(a) {
                        return c.canPlayType(a)
                    })), null != (null != b ? b.src : void 0) && "" !== b.src) a.src = b.src, a.type = b.type;
                else throw Error("No valid source could be found");
            null == a.type && (a.type = g.getMimeType(a.src));
            null == a.medium && (a.medium = /audio/.test(a.type) ? "audio" : "video");
            null == a.temporalType && (a.temporalType = "vod");
            a.isLive = "live" === a.temporalType || "dvr" === a.temporalType;
            if (null !=
                a.scenes)
                for (f = a.scenes, b = d = 0, h = f.length; d < h; b = ++d) e = f[b], e.start = isNaN(n = g.flattenTimecode(e.sceneStartTime)) ? 0 : n, e.end = isNaN(n = g.flattenTimecode(e.sceneEndTime)) ? 0 : n, e.title = e.sceneTitle || "", e.description = e.sceneDescription || "", e.position = b + 1;
            a.startTime = 0;
            null == a.status && (a.status = {});
            null == a.metadata && (a.metadata = {});
            a.originalSrc = a.src;
            return Promise.resolve(a)
        };
        t.prototype.transform = function(a) {
            return g.chain(this.transforms, a)
        };
        t.prototype.updateData = function(a) {
            var b, c;
            for (b in a) c = a[b], b in
            this.data && (this.data[b] = c)
        };
        t.prototype.getGUID = function() {
            return this.data.guid
        };
        t.prototype.setGUID = function(a) {
            return this.data.guid = a
        };
        t.prototype.getLink = function() {
            return this.data.link
        };
        t.prototype.setLink = function(a) {
            return this.data.link = a
        };
        t.prototype.getStartTime = function() {
            return this.data.startTime
        };
        t.prototype.setStartTime = function(a) {
            return this.data.startTime = a
        };
        t.prototype.getEmbed = function() {
            return this.data.embed
        };
        t.prototype.setEmbed = function(a) {
            return this.data.embed = a
        };
        t.prototype.getAutoplay =
            function() {
                return this.data.autoplay
            };
        t.prototype.setAutoplay = function(a) {
            return this.data.autoplay = a
        };
        t.prototype.getPubDate = function() {
            return this.data.pubDate
        };
        t.prototype.setPubDate = function(a) {
            return this.data.pubDate = a
        };
        t.prototype.getCategory = function() {
            return this.data.category
        };
        t.prototype.setCategory = function(a) {
            return this.data.category = a
        };
        t.prototype.getStatus = function() {
            return this.data.status
        };
        t.prototype.setStatus = function(a) {
            return this.data.status = a
        };
        t.prototype.getSrc = function() {
            return this.facade.security.createURL(this.data.src)
        };
        t.prototype.setSrc = function(a) {
            return this.data.src = a
        };
        t.prototype.getType = function() {
            return this.data.type
        };
        t.prototype.setType = function(a) {
            return this.data.type = a
        };
        t.prototype.getMedium = function() {
            return this.data.medium
        };
        t.prototype.setMedium = function(a) {
            if (a !== this.data.medium) return this.data.medium = a, this.facade.retrieveProxy(B.NAME).setMedium(a)
        };
        t.prototype.getMetadata = function() {
            return this.data.metadata
        };
        t.prototype.setMetadata = function(a) {
            return this.data.metadata = a
        };
        t.prototype.getSource =
            function() {
                return this.data.source
            };
        t.prototype.setSource = function(a) {
            return this.data.source = a
        };
        t.prototype.getTrack = function() {
            return this.data.track
        };
        t.prototype.setTrack = function(a) {
            return this.data.track = a
        };
        t.prototype.getTitle = function() {
            return this.data.title
        };
        t.prototype.setTitle = function(a) {
            return this.data.title = a
        };
        t.prototype.getWidth = function() {
            return this.data.width
        };
        t.prototype.setWidth = function(a) {
            return this.data.width = a
        };
        t.prototype.getHeight = function() {
            return this.data.height
        };
        t.prototype.setHeight =
            function(a) {
                return this.data.height = a
            };
        t.prototype.getDescription = function() {
            return this.data.description
        };
        t.prototype.setDescription = function(a) {
            return this.data.description = a
        };
        t.prototype.getCategory = function() {
            return this.data.category
        };
        t.prototype.setCategory = function(a) {
            return this.data.category = a
        };
        t.prototype.getDuration = function(a) {
            return this.data.duration
        };
        t.prototype.setDuration = function(a) {
            var b;
            if (0 !== a && "live" !== this.data.temporalType && (b = navigator.userAgent, 1 !== a || !/Android/.test(b) ||
                /Android.*Chrome/.test(b))) return a !== this.data.duration && (this.data.duration = a, this.sendNotification(d.DURATION_CHANGE, a)), Infinity === a && this.setTemporalType("live"), a
        };
        t.prototype.getPoster = function(a) {
            return this.data.poster
        };
        t.prototype.setPoster = function(a) {
            this.data.poster = a
        };
        t.prototype.getIsLive = function() {
            return this.data.isLive
        };
        t.prototype.setIsLive = function(a) {
            if (a !== this.data.isLive) return this.data.isLive = a, this.sendNotification(d.IS_LIVE, a), a
        };
        t.prototype.getTemporalType = function() {
            return this.data.temporalType ||
                "vod"
        };
        t.prototype.setTemporalType = function(a) {
            var b;
            a !== this.data.temporalType && (b = this.data.temporalType, this.data.temporalType = a, this.sendNotification(d.TEMPORAL_TYPE_CHANGE, {
                previous: b,
                value: a
            }))
        };
        t.prototype.getScenes = function() {
            return this.data.scenes
        };
        t.prototype.setScenes = function(a) {
            return this.data.scenes = a
        };
        t.prototype.getScene = function(a) {
            var b, c, e, n;
            if (null != this.data.scenes)
                for (n = this.data.scenes, b = c = 0, e = n.length; c < e; b = ++c)
                    if (b = n[b], b.start <= a && a < b.end) return b
        };
        t.prototype.getKeys =
            function() {
                return this.data.keys
            };
        t.prototype.setKeys = function(a) {
            this.data.keys = a
        };
        t.prototype.getAuthorization = function() {
            return this.data.authorization
        };
        t.prototype.setAuthorization = function(a) {
            this.data.authorization = a
        };
        t.prototype.getTransforms = function() {
            return this.transforms
        };
        var va = function() {
            va.__super__.constructor.call(this, this.constructor.NAME, {});
            this.setupHDN1()
        };
        f(va, puremvc.Proxy);
        va.NAME = "SecurityProxy";
        va.prototype.authorized = !0;
        va.prototype.timeout = null;
        va.prototype.setupHDN1 =
            function() {
                var a = this;
                return window.retrieveToken = function(b, c) {
                    var e;
                    try {
                        a.facade.logger.debug("[AMP AUTH] HDN1: Token Requested", b, c), e = a.getToken(), null != e ? a.facade.getMediaElement().tokenRetrievalSuccess("\x26primaryToken\x3d" + e) : a.sendNotification(xa.AUTHORIZE)
                    } catch (n) {
                        a.facade.logger.error("[AMP AUTH ERROR]: Token Retrival Error", n)
                    }
                    return !0
                }
            };
        va.prototype.setMedia = function(a) {
            this.setSession(null);
            this.setAuthorized("blocked" !== a.status.state);
            this.setAuthorization(a.authorization)
        };
        va.prototype.authorize =
            function(a) {
                this.setAuthorization(a);
                this.sendNotification(xa.AUTHORIZED, a)
            };
        va.prototype.getAuthorization = function() {
            return this.data
        };
        va.prototype.setAuthorization = function(a) {
            this.data = a || {};
            null != this.data.expiration && this.setExpiration(this.data.expiration);
            return a
        };
        va.prototype.getKey = function() {
            return this.data.key
        };
        va.prototype.setKey = function(a) {
            return this.data.key = a
        };
        va.prototype.getToken = function() {
            return this.data.token
        };
        va.prototype.setToken = function(a) {
            return this.data.token = a
        };
        va.prototype.getExpiration =
            function() {
                return this.data.expiration
            };
        va.prototype.setExpiration = function(a) {
            this.data.expiration = a;
            this.data.expiration > Date.now() && this.startTimeout();
            return a
        };
        va.prototype.startTimeout = function() {
            var a = this;
            this.timeout = setTimeout(function() {
                a.sendNotification(xa.AUTHORIZE, {
                    media: a.facade.getMedia()
                })
            }, this.getExpiration() - Date.now())
        };
        va.prototype.stopTimeout = function() {
            clearTimeout(this.timeout)
        };
        va.prototype.getSecret = function() {
            var a;
            if (null == this.data.token) return null;
            a = "";
            null != this.data.token &&
            (a = "" + this.data.token);
            null != this.data.key && (a = "" + this.data.key + "\x3d" + a);
            return a
        };
        va.prototype.createURL = function(a) {
            var b;
            b = this.getSecret();
            null != b && (a += /\?/.test(a) ? "\x26" : "?", a += b);
            return a
        };
        va.prototype.getAuthorized = function() {
            return this.authorized
        };
        va.prototype.setAuthorized = function(a) {
            this.stopTimeout();
            return this.authorized = a
        };
        va.prototype.getSession = function() {
            return this.session
        };
        va.prototype.setSession = function(a) {
            return this.session = a
        };
        var Re = function(a) {
            this.message = Re.MESSAGE +
                a
        };
        f(Re, Error);
        Re.MESSAGE = "Tokenization Error: Could not find token value for: ";
        var ae = function(a) {
            ae.__super__.constructor.call(this, a)
        };
        f(ae, zc);
        ae.prototype.parse = function(a) {
            return this.source = this.data = this.value = a
        };
        ae.prototype.compile = function(a, b) {
            return this.value
        };
        var be = function(a) {
            be.__super__.constructor.call(this, a)
        };
        f(be, zc);
        be.prototype.exec = null;
        be.prototype.parse = function(a) {
            this.source = this.data = a;
            this.exec = new Function("context", "var value; with(context){value \x3d " + this.data +
                ";}return value;");
            return this.data
        };
        be.prototype.compile = function(a, b) {
            null == a && (a = {});
            null == b && (b = !1);
            if (null == this.exec) return this.value;
            try {
                this.value = this.exec(a)
            } catch (c) {
                if (this.value = null, !b) throw new Re(this.data);
            }
            return this.value
        };
        var Ac = function(a) {
            this.token = RegExp(this.tokenStart.source + "([^#]*)" + this.tokenEnd.source, "g");
            Ac.__super__.constructor.call(this, a)
        };
        f(Ac, zc);
        Ac.prototype.exec = null;
        Ac.prototype.tokenStart = /#{/;
        Ac.prototype.tokenEnd = /}/;
        Ac.prototype.token = null;
        Ac.prototype.parse =
            function(a) {
                var b, c, e, n, d, h;
                this.source = a;
                this.data = [];
                if (this.token.test(this.source)) {
                    n = [];
                    c = null;
                    a = this.source.replace(this.token, function(a, b, e, d) {
                        n.push(b);
                        c = "\x3c\x3c\x3e\x3e";
                        0 < e && e < d.length - a.length && (c += "\x3c\x3c\x3e\x3e");
                        return c
                    });
                    b = a.split("\x3c\x3c\x3e\x3e");
                    d = e = 0;
                    for (h = b.length; d < h; d++) a = b[d], "" === a && n[e] ? (this.data.push(new be(n[e])), e++) : "" !== a && this.data.push(new ae(a));
                    1 === this.data.length && (this.data = this.data[0])
                } else this.data = new ae(a);
                return this.data
            };
        Ac.prototype.compile =
            function(a, b) {
                var c, e, d, v;
                null == a && (a = {});
                null == b && (b = !1);
                if (null == this.data) return this.value;
                try {
                    if (this.data instanceof Cd) this.value = this.data.compile(a, b);
                    else
                        for (this.value = "", v = this.data, e = 0, d = v.length; e < d; e++) c = v[e], this.value += c.compile(a, b)
                } catch (h) {
                    if (this.value = null, !b) throw new Re(this.source);
                }
                return this.value
            };
        var id = function(a) {
            id.__super__.constructor.call(this, a)
        };
        f(id, zc);
        id.prototype.parse = function(a) {
            var b, c;
            this.source = a;
            this.data = {};
            for (b in a) c = a[b], this.data[b] = id.__super__.parse.call(this,
                c);
            return this.data
        };
        id.prototype.compile = function(a, b) {
            var c, e, d;
            null == a && (a = {});
            null == b && (b = !1);
            this.value = {};
            d = this.data;
            for (c in d) {
                e = d[c];
                try {
                    this.value[c] = e.compile(a, b)
                } catch (v) {
                    this.value[c] = null, ia.error(v)
                }
            }
            return this.value
        };
        var ja = {
                NORMAL: "normal",
                FULL_SCREEN: "full-screen"
            },
            Ba = function(a) {
                Ba.__super__.constructor.call(this, a)
            };
        f(Ba, x);
        Ba.NAME = x.NAME;
        Ba.prototype.bindings = null;
        Ba.prototype.configurationName = null;
        Ba.prototype.configurationData = null;
        Ba.prototype.contextName = null;
        Ba.prototype.contextData =
            null;
        Ba.prototype.value = null;
        Ba.prototype.getConfigurationName = function() {
            return this.configurationName
        };
        Ba.prototype.getConfigurationData = function() {
            return this.configurationData.value || {}
        };
        Ba.prototype.getContextName = function() {
            return this.contextName
        };
        Ba.prototype.getContextData = function() {
            return this.contextData
        };
        Ba.prototype.onRegister = function() {
            var a;
            a = this.facade.player || this.facade;
            null == this.getConfigurationName() && (this.configurationName = this.facade.moduleName);
            this.bindings = a.retrieveProxy(Ja.NAME);
            this.bindings.registerConfiguration(this);
            null != this.getContextName() && this.bindings.registerContext(this)
        };
        Ba.prototype.setData = function(a) {
            var b, c, e;
            null == a && (a = {});
            this.data = {};
            e = this.getDefaults();
            for (b in e) c = e[b], this.data[b] = b in a ? a[b] : c;
            this.configurationData = new id(this.data);
            return this.data
        };
        Ba.prototype.getValue = function(a) {
            var b;
            this.bindings.update();
            this.value[a] = null != (b = this.configurationData.data[a]) ? b.compile(this.bindings.getData()) : void 0;
            return this.value[a]
        };
        Ba.prototype.compile =
            function(a, b) {
                null == b && (b = !1);
                if (null == this.configurationData) return null;
                null == a && (a = this.bindings.getData());
                null != this.contextName && null != this.contextData && (a = g.clone(a), a[this.contextName] = this.contextData);
                this.configurationData.compile(a, b);
                return this.value = this.configurationData.value
            };
        var Rc = function(a) {
            Rc.__super__.constructor.call(this, a)
        };
        f(Rc, Ba);
        Rc.NAME = "ParamsProxy";
        Rc.prototype.defaults = {};
        Rc.prototype.configurationName = "params";
        Rc.prototype.setData = function(a) {
            var b, c;
            this.data = (null !=
                (c = this.configurationData) ? c.source : void 0) || {};
            for (b in a) this.data[b] = a[b];
            this.configurationData = new id(this.data);
            return this.data
        };
        var U = {
                READY: "ready",
                PLAYING: "playing",
                PAUSED: "paused",
                ENDED: "ended",
                LOADING: "loading",
                WAITING: "waiting",
                ERROR: "error"
            },
            Ja = function() {
                Ja.__super__.constructor.call(this, this.constructor.NAME, {});
                this.data = {};
                this.contextMap = {};
                this.configurationMap = {}
            };
        f(Ja, puremvc.Proxy);
        Ja.NAME = "DataBindingProxy";
        Ja.prototype.contextMap = null;
        Ja.prototype.configurationMap = null;
        Ja.prototype.paramsProxy =
            null;
        Ja.prototype.initialize = function() {
            this.paramsProxy = this.facade.retrieveProxy(Rc.NAME);
            this.update()
        };
        Ja.prototype.registerContext = function(a) {
            null != a && (this.contextMap[a.getContextName()] = a)
        };
        Ja.prototype.retrieveContext = function(a) {
            return this.contextMap[a]
        };
        Ja.prototype.removeContext = function(a) {
            var b;
            b = this.contextMap[a];
            delete this.contextMap[a];
            return b
        };
        Ja.prototype.registerConfiguration = function(a) {
            null != a && (this.configurationMap[a.getConfigurationName()] = a, a.compile(this.context, !0))
        };
        Ja.prototype.retrieveConfiguration = function(a) {
            return this.configurationMap[a]
        };
        Ja.prototype.removeConfiguration = function(a) {
            var b;
            b = this.configurationMap[a];
            delete this.configurationMap[a];
            return b
        };
        Ja.prototype.evaluateBinding = function(a) {
            this.update();
            a = new Ac(a);
            a.compile(this.data);
            return a.value
        };
        Ja.prototype.update = function(a) {
            var b, c, e, d;
            this.data.now = Date.now();
            d = this.contextMap;
            for (e in d) b = d[e], -1 !== (null != a ? "function" === typeof a.indexOf ? a.indexOf(e) : void 0 : void 0) && (this.data[e] = b.getContextData());
            this.paramsProxy.compile(this.data);
            b = this.paramsProxy.value;
            for (c in b) a = b[c], this.data[c] = a;
            return this.data
        };
        Ja.prototype.compile = function(a, b) {
            var c, e, d, v, h;
            null == b && (b = !1);
            this.update(a);
            e = g.clone(this.data);
            v = this.paramsProxy.getConfigurationName();
            h = this.configurationMap;
            for (d in h) c = h[d], d !== v && c.compile(e, b)
        };
        var wi = {
                FLASH: "flash",
                HTML: "html"
            },
            kb = {
                ACTIVE: "active",
                INACTIVE: "inactive"
            },
            pb = {
                REGISTER_PLUGINS: "registerPlugins",
                PLUGIN_REGISTERED: "pluginRegistered",
                PLUGINS_INITIALIZED: "pluginsinitialized"
            },
            B = function() {
                B.__super__.constructor.call(this);
                this.device = g.getDevice()
            };
        f(B, puremvc.Proxy);
        B.NAME = "ApplicationStateProxy";
        B.prototype.displayState = null;
        B.prototype.playState = null;
        B.prototype.renderMode = null;
        B.prototype.activeState = null;
        B.prototype.seeking = !1;
        B.prototype.seekrequested = !1;
        B.prototype.waiting = !1;
        B.prototype.isUserActive = !1;
        B.prototype.device = null;
        B.prototype.volume = 1;
        B.prototype.playbackTarget = "amp";
        B.prototype.hasPostContent = !1;
        B.prototype.locked = !1;
        B.prototype.mediaElement = null;
        B.prototype.hidden = !1;
        B.prototype.pausedBeforeSeek = !1;
        B.prototype.ended = !1;
        B.prototype.getHasPostContent = function() {
            return this.hasPostContent
        };
        B.prototype.setHasPostContent = function(a) {
            this.hasPostContent = a
        };
        B.prototype.getEnded = function() {
            return this.ended
        };
        B.prototype.setEnded = function(a) {
            this.ended = a;
            !0 === this.ended && !0 === this.seeking && (this.seeking = !1)
        };
        B.prototype.getDisplayState = function() {
            return this.displayState
        };
        B.prototype.setDisplayState = function(a) {
            var b;
            a !== this.displayState && (b = this.displayState,
                this.displayState = a, this.sendNotification(d.DISPLAY_STATE_CHANGE, {
                previous: b,
                value: this.displayState
            }))
        };
        B.prototype.getPlayState = function() {
            return this.playState
        };
        B.prototype.setPlayState = function(a) {
            var b;
            if (a !== this.playState) switch (b = this.playState, this.playState = a, this.sendNotification(d.PLAY_STATE_CHANGE, {
                previous: b,
                value: this.playState
            }), a) {
                case U.PLAYING:
                    this.sendNotification(d.DISPATCH_EVENT, new V("playing"));
                    break;
                case U.ENDED:
                    this.pausedBeforeSeek = !1
            }
        };
        B.prototype.getDevice = function() {
            return this.device
        };
        B.prototype.getSeeking = function() {
            return this.seeking
        };
        B.prototype.setSeeking = function(a) {
            a !== this.seeking && (this.seeking = a, !1 === this.seeking && this.playState === U.PAUSED && !0 === this.getWaiting() && this.setWaiting(!1))
        };
        B.prototype.getSeekRequested = function() {
            return this.seekrequested
        };
        B.prototype.setSeekRequested = function(a) {
            a !== this.seekrequested && (this.seekrequested = a)
        };
        B.prototype.getWaiting = function() {
            return this.waiting
        };
        B.prototype.setWaiting = function(a) {
            var b, c = this;
            a !== this.waiting && (this.waiting =
                a, a = !0 === this.waiting ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE, this.sendNotification(a, U.WAITING), !0 === this.waiting && (this.facade.getMediaElement(), b = function(a) {
                c.facade.removeEventListener("playing", b);
                c.facade.removeEventListener("timeupdate", b);
                c.facade.removeEventListener("ended", b);
                c.setWaiting(!1)
            }, this.facade.addEventListener("playing", b), this.facade.addEventListener("timeupdate", b), this.facade.addEventListener("ended", b)))
        };
        B.prototype.getLocked = function() {
            return this.locked
        };
        B.prototype.setLocked =
            function(a) {
                this.locked = a
            };
        B.prototype.getIsUserActive = function() {
            return this.isUserActive
        };
        B.prototype.setIsUserActive = function(a) {
            a !== this.isUserActive && (this.isUserActive = a)
        };
        B.prototype.getRenderMode = function() {
            return this.renderMode
        };
        B.prototype.setRenderMode = function(a) {
            a !== this.renderMode && (this.renderMode = a)
        };
        B.prototype.getMedium = function() {
            return this.medium
        };
        B.prototype.setMedium = function(a) {
            var b;
            a !== this.medium && (b = null != this.medium ? "medium-" + this.medium : this.medium, this.medium = a, this.sendNotification(d.MEDIUM_CHANGE, {
                previous: b,
                value: "medium-" + this.medium
            }))
        };
        B.prototype.getVolume = function() {
            return this.volume
        };
        B.prototype.setVolume = function(a) {
            if (a !== this.volume) return this.volume = a
        };
        B.prototype.getPlaybackTarget = function() {
            return this.playbackTarget
        };
        B.prototype.setPlaybackTarget = function(a) {
            var b;
            a !== this.playbackTarget && (b = this.playbackTarget, this.playbackTarget = a, this.sendNotification(d.PLAYBACK_TARGET_CHANGE, {
                previous: b,
                value: this.playbackTarget
            }))
        };
        B.prototype.getActiveState = function() {
            return this.activeState
        };
        B.prototype.setActiveState = function(a) {
            var b;
            a !== this.activeState && (b = this.activeState, this.activeState = a, this.sendNotification(d.ACTIVE_STATE_CHANGE, {
                previous: b,
                value: this.activeState
            }))
        };
        B.prototype.getMediaElement = function() {
            return this.mediaElement
        };
        B.prototype.setMediaElement = function(a) {
            var b;
            a !== this.mediaElement && (b = this.mediaElement, this.mediaElement = a, this.sendNotification(d.MEDIA_ELEMENT_CHANGE, {
                previous: b,
                value: this.mediaElement
            }))
        };
        B.prototype.getHidden = function() {
            return this.hidden
        };
        B.prototype.setHidden = function(a) {
            var b;
            a !== this.hidden && (b = this.hidden, this.hidden = a, this.sendNotification(d.HIDDEN_CHANGE, {
                previous: b,
                value: this.hidden
            }))
        };
        var Se = function() {
            Se.__super__.constructor.call(this)
        };
        f(Se, t);
        Se.NAME = "MediaProxy";
        Se.prototype.setSource = function(a) {
            if (!(null == a || 1 > a.length)) return a = a.filter(function(a) {
                return "external" === a.type
            }), Se.__super__.setSource.call(this, a)
        };
        var ab = function() {
            ab.__super__.constructor.call(this)
        };
        f(ab, puremvc.Proxy);
        ab.NAME = "PlaybackProxy";
        ab.prototype.src =
            null;
        ab.prototype.getPlaybackCoreName = function() {
            return "external"
        };
        ab.prototype.canPlayType = function(a) {
            return "external" === a
        };
        ab.prototype.canPlayTemporalType = function(a) {
            return !0
        };
        ab.prototype.getSrc = function() {
            return this.facade.mediaProxy.getSrc()
        };
        ab.prototype.play = function() {
            window.open(this.getSrc(), "_blank")
        };
        ab.prototype.load = function() {};
        ab.prototype.setVolume = function() {};
        ab.prototype.pause = function() {};
        ab.prototype.setEnabled = function() {};
        ab.prototype.getCurrentTime = function() {
            return 0
        };
        ab.prototype.setCurrentTime = function(a) {};
        ab.prototype.getDuration = function() {
            return 0
        };
        var $ = {
                TOGGLE_PLAY_PAUSE: "usertogglePlayPause",
                PLAY: "userplay",
                PAUSE: "userpause",
                SEEK: "userseek",
                SEEKED: "userseeked"
            },
            R = function(a) {
                R.__super__.constructor.call(this, a)
            };
        f(R, Ba);
        R.NAME = x.NAME;
        R.prototype.enabled = !0;
        R.prototype.plugin = null;
        R.prototype.appState = null;
        R.prototype.getDefaults = function() {
            var a;
            a = R.__super__.getDefaults.call(this);
            null == a.debug && (a.debug = null);
            return a
        };
        R.prototype.initializeNotifier =
            function(a) {
                R.__super__.initializeNotifier.call(this, a);
                this.appState = this.facade.player.appState
            };
        R.prototype.getMediaElement = function() {
            return this.facade.player.getMediaElement()
        };
        R.prototype.setEnabled = function(a) {
            return this.enabled = a
        };
        R.prototype.getEnabled = function() {
            return this.enabled
        };
        R.prototype.getDebug = function() {
            return null != this.value.debug ? this.value.debug : !0 === this.facade.player.getConfig().debug
        };
        R.prototype.createPlugin = function() {};
        R.prototype.initialize = function() {
            this.plugin =
                this.createPlugin()
        };
        R.prototype.error = function(a) {
            this.facade.logger.error("[AMP " + this.facade.getModuleName().toUpperCase() + " Error]", a)
        };
        var cc = {
                PREFIX: "akamai-"
            },
            M = function() {
                M.__super__.constructor.call(this)
            };
        f(M, N);
        M.prototype.player = null;
        M.prototype.proxy = null;
        M.prototype.initialize = function(a, b) {
            this.player = b;
            this.logger = this.player.logger;
            M.__super__.initialize.call(this, a, b)
        };
        M.prototype.isAvailable = function() {
            return !0
        };
        M.prototype.loadModuleResources = function() {
            this.isAvailable() ? M.__super__.loadModuleResources.call(this) :
                this.resourcesLoaded()
        };
        M.prototype.resourcesLoaded = function() {
            if ("function" === typeof this.oninitialized) this.oninitialized(this)
        };
        M.prototype.onRegister = function() {
            var a;
            this.isAvailable() && (this.createFramework(), null != (a = this.retrieveProxy(R.NAME)) && "function" === typeof a.initialize && a.initialize());
            this.performance.ready = Date.now();
            this.sendNotification(pb.PLUGIN_REGISTERED, this)
        };
        M.prototype.logEvent = function(a) {
            var b;
            !0 !== /(timeupdate|timeremaining)/.test(a.type) && (b = this.player.getModuleName().toUpperCase() +
                " " + this.getModuleName().toUpperCase(), null != a.dispatcher && (b += " " + a.dispatcher), this.logger.log("[" + b + " EVENT] " + a.type, a))
        };
        M.prototype.listNotificationPublications = function() {
            var a, b;
            return [d.ADD_LAYER, d.REMOVE_LAYER, d.ADD_OVERLAY, d.REMOVE_OVERLAY, d.ADD_APPLICATION_STATE, d.REMOVE_APPLICATION_STATE, d.IS_USER_ACTIVE, d.PLAYBACK_CORE_CHANGE].concat(function() {
                var c;
                c = [];
                for (a in pb) b = pb[a], c.push(b);
                return c
            }())
        };
        var Vd = function() {
            Vd.__super__.constructor.call(this)
        };
        f(Vd, L);
        Vd.prototype.execute = function(a) {
            this.applicationState.setPlayState(a.getBody())
        };
        var Le = function() {
            Le.__super__.constructor.call(this)
        };
        f(Le, L);
        Le.prototype.execute = function(a) {
            try {
                this.media.setData(a.getBody())
            } catch (b) {
                this.sendNotification(d.ERROR, b.message);
                return
            }
            this.sendNotification(d.UPDATE_DATA_BINDINGS);
            a = this.media.getData();
            this.security.setMedia(a);
            this.security.getAuthorized() ? this.sendNotification(xa.AUTHORIZED, this.security.getAuthorization()) : this.sendNotification(xa.AUTHORIZE, {
                media: a
            })
        };
        var Ke = function() {
            Ke.__super__.constructor.call(this)
        };
        f(Ke, L);
        Ke.prototype.execute =
            function(a) {
                var b = this;
                a = a.getBody();
                this.applicationState.setEnded(!1);
                this.playback.setEnabled(!1);
                this.playback.pause();
                this.sendNotification(d.HAS_POST_CONTENT, !1);
                this.sendNotification(d.CHANGE_PLAY_STATE, U.READY);
                this.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE);
                this.media.transform(a).then(function(a) {
                    return b.sendNotification(d.CHANGE_MEDIA, a)
                })["catch"](function(a) {
                    return b.sendNotification(d.ERROR, a)
                })
            };
        var Ne = function() {
            Ne.__super__.constructor.call(this)
        };
        f(Ne, L);
        Ne.prototype.execute =
            function(a) {
                a = a.getBody();
                this.media.getDuration() !== a && this.media.setDuration(a)
            };
        var Yd = function() {
            Yd.__super__.constructor.call(this)
        };
        f(Yd, F);
        Yd.prototype.execute = function(a) {
            var b;
            this.playback.destroy();
            b = this.playback.getMediaElement();
            m.clear(b);
            this.logger.error("[AMP ERROR]", a.getBody());
            this.sendNotification(d.CHANGE_PLAY_STATE, U.ERROR);
            Yd.__super__.execute.call(this, a)
        };
        var Me = function() {
            Me.__super__.constructor.call(this)
        };
        f(Me, F);
        Me.prototype.execute = function(a) {
            var b, c;
            b = null != (c = this.facade.config) ?
                c.volume : void 0;
            null != b && this.sendNotification(d.CHANGE_VOLUME, b);
            this.playerCore.ready();
            !0 === this.facade.config.autoplay && this.sendNotification(d.ADD_APPLICATION_STATE, "autoplay");
            this.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL);
            this.sendNotification(d.CHANGE_PLAY_STATE, U.READY);
            this.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE);
            this.dispatchEventAfterCommand(a)
        };
        var Xd = function() {
            Xd.__super__.constructor.call(this)
        };
        f(Xd, L);
        Xd.prototype.execute = function(a) {
            a = a.getBody() || {};
            this.bindings.compile(a.contexts,
                a.suppressErrors)
        };
        var Oe = function() {
            Oe.__super__.constructor.call(this)
        };
        f(Oe, L);
        Oe.prototype.execute = function(a) {
            this.params.setData(a.getBody());
            this.sendNotification(d.UPDATE_DATA_BINDINGS, {
                suppressErrors: !0
            })
        };
        var Wd = function() {
            Wd.__super__.constructor.call(this)
        };
        f(Wd, F);
        Wd.prototype.execute = function(a) {
            var b;
            b = a.getBody();
            this.playerCore.setPlaybackCore(b);
            this.playback.reset();
            this.playback.setCurrentTime(b.startTime || 0);
            Wd.__super__.execute.call(this, a)
        };
        var fc = function() {
            fc.__super__.constructor.call(this)
        };
        f(fc, Ib);
        fc.prototype.componentName = "overlays";
        fc.NAME = "OverlayLayerMediator";
        fc.prototype.createMediatorName = function() {
            return fc.NAME
        };
        fc.prototype.listNotificationInterests = function() {
            return [d.ADD_OVERLAY, d.REMOVE_OVERLAY]
        };
        fc.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.ADD_OVERLAY:
                    this.viewComponent.appendChild(a);
                    break;
                case d.REMOVE_OVERLAY:
                    this.viewComponent.removeChild(a)
            }
        };
        var qb = function() {
            this.plugins = [];
            this.registered = 0;
            qb.__super__.constructor.call(this,
                this.constructor.NAME, {})
        };
        f(qb, puremvc.Mediator);
        qb.NAME = "PluginAdapter";
        qb.prototype.plugins = null;
        qb.prototype.registered = null;
        qb.prototype.onRegister = function() {
            return qb.__super__.onRegister.call(this)
        };
        qb.prototype.listNotificationInterests = function() {
            return [pb.REGISTER_PLUGINS, pb.PLUGIN_REGISTERED]
        };
        qb.prototype.handleNotification = function(a) {
            var b, c, e, d, v, h, f, r;
            e = a.getName();
            a = a.getBody();
            switch (e) {
                case pb.REGISTER_PLUGINS:
                    h = this.facade.getPlayerType();
                    r = l.plugins;
                    for (d in r)
                        if (f = r[d], d in
                            a && (e = a[d], null != e && !1 !== e.enabled))
                            if (b = f[h], null == b) this.facade.logger.debug("[AMP] Plugin could not be found: " + d);
                            else try {
                                v = new b, v.oninitialized = this.onplugininitialized.bind(this, d), v.onerror = this.onpluginerror.bind(this, d), c = v.initialize.bind(v, e, this.facade), this.plugins.push(c)
                            } catch (g) {
                                this.logger.error("[AMP] Plugin could not be created: " + d + ". " + g)
                            }
                    a = a.plugins || {};
                    for (d in a) e = a[d], null != e && !1 !== e.enabled && (c = function(a, c, e, d, n) {
                        return l.loadResources(c.resources).then(function() {
                            b = l.plugins[e][h];
                            null == b && n("[AMP] Plugin could not be found: " + e);
                            return b(a, c, e)
                        }).then(d)["catch"](n)
                    }, this.plugins.push(c.bind(null, this.facade, e, d, this.onpluginregistered.bind(this, d), this.onpluginerror.bind(this, d))));
                    this.plugins.forEach(function(a) {
                        return a()
                    });
                    break;
                case pb.PLUGIN_REGISTERED:
                    c = "function" === typeof a.getFeatureName ? a.getFeatureName() : void 0, null != c && (this.facade[c] = a), this.onpluginregistered(a.getModuleName(), a)
            }
        };
        qb.prototype.initializedCheck = function() {
            this.registered === this.plugins.length &&
            this.sendNotification(pb.PLUGINS_INITIALIZED, this.plugins)
        };
        qb.prototype.onplugininitialized = function(a, b) {
            b.oninitialized = null;
            b.onerror = null;
            this.facade.registerModule(b)
        };
        qb.prototype.onpluginerror = function(a, b) {
            this.registered++;
            this.facade.logger.error("[AMP] Plugin could not be registered: " + a);
            this.facade.logger.error(b);
            this.initializedCheck()
        };
        qb.prototype.onpluginregistered = function(a, b) {
            this.registered++;
            this.facade.logger.debug("[AMP] Plugin registered: " + a);
            this.facade[a] = b;
            this.initializedCheck()
        };
        var za = function(a) {
            this.element = a
        };
        za.prototype.element = null;
        za.prototype.prefix = cc.PREFIX;
        za.prototype.contains = function(a) {
            return this.constructor.contains(a, this.element, this.prefix)
        };
        za.prototype.add = function(a) {
            this.constructor.add(a, this.element, this.prefix)
        };
        za.prototype.remove = function(a) {
            this.constructor.remove(a, this.element, this.prefix)
        };
        za.prototype.toggle = function(a) {
            return this.constructor.contains(a, this.element, this.prefix)
        };
        za.contains = function(a, b, c) {
            var e;
            null == c && (c = "");
            a = c + a;
            return null != (null != (e = b.classList) ? e.contains : void 0) ? b.classList.contains(a) : -1 !== b.className.indexOf(a)
        };
        za.add = function(a, b, c) {
            var e;
            null == c && (c = "");
            c += a;
            null != (null != (e = b.classList) ? e.add : void 0) ? b.classList.add(c) : this.contains(a, b) || (b.className = "" !== b.className ? b.className + (" " + c) : c)
        };
        za.remove = function(a, b, c) {
            var e;
            null == c && (c = "");
            c += a;
            null != (null != (e = b.classList) ? e.remove : void 0) ? b.classList.remove(c) : this.contains(a, b) && (a = RegExp(" ?" + c), b.className = b.className.replace(a, ""))
        };
        za.toggle =
            function(a, b, c) {
                var e;
                null != (null != (e = b.classList) ? e.toggle : void 0) ? b.classList.toggle(this.prefix + a) : this.contains(a, b) ? this.remome(a, b) : this.add(a, b)
            };
        var ra = function(a) {
            var b, c;
            ra.__super__.constructor.call(this);
            this.data = {
                language: navigator.language || navigator.browserLanguage,
                locales: yc.defaults.locales
            };
            if (null != a && (null != a.language && (this.data.language = a.language), null != a.locales))
                for (c in a.locales)
                    if (null != this.data.locales[c])
                        for (b in a.locales[c]) this.data.locales[c][b] = a.locales[c][b];
                    else this.data.locales[c] = a.locales[c]
        };
        f(ra, Bc);
        ra.NAME = "LocalizationProxy";
        ra.prototype.contextName = "l10n";
        ra.prototype.locale = null;
        ra.prototype.localeId = null;
        ra.prototype.onRegister = function() {
            ra.__super__.onRegister.call(this);
            this.setLocale(this.data.language)
        };
        ra.prototype.getContextData = function() {
            return this.locale
        };
        ra.prototype.getLanguage = function() {
            return this.data.language
        };
        ra.prototype.setLanguage = function(a) {
            this.data.language = a;
            this.setLocale(a);
            this.sendNotification(d.LANGUAGE_CHANGE,
                a);
            return a
        };
        ra.prototype.setLocale = function(a) {
            this.localeId = a;
            this.locale = this.data.locales[this.localeId];
            null == this.locale && (this.localeId = a.substring(0, 2), this.locale = this.data.locales[this.localeId]);
            this.facade.l10n = this.locale;
            return a
        };
        ra.prototype.getLocaleId = function() {
            return this.localeId
        };
        ra.prototype.getLocales = function() {
            return this.data.locales
        };
        ra.prototype.setLocales = function(a) {
            return this.data.locales = a
        };
        ra.prototype.getString = function(a) {
            return (this.locale || this.data.locales.en)[a] ||
                ""
        };
        ra.prototype.getLanguageString = function(a) {
            var b;
            if ("string" !== typeof a || null == a || "" === a) return "";
            b = "MSG_" + a.toUpperCase();
            b = this.getString(b);
            "" === b && (a = a.split("-").shift(), b = "MSG_" + a.toUpperCase(), b = this.getString(b));
            return b
        };
        var $a = function() {};
        $a.create = function(a, b, c, e) {
            var d, v, h, f, r;
            null == c && (c = "div");
            "string" === typeof c && (c = document.createElement(c));
            d = new za(c);
            if (null != a)
                for ("string" === typeof a && (a = [a]), f = 0, r = a.length; f < r; f++) v = a[f], d.add(v);
            c._classList = d;
            null != e && (null != c.innerText ?
                c.innerText = e : c.textContent = e);
            null != b && (null != b.getViewComponent && (h = b.getViewComponent()), null != h && (b = h), b.appendChild(c));
            return c
        };
        $a.bindEvents = function(a, b, c) {
            var e, d;
            null == c && (c = ["onRemove", "onRegister"]);
            for (e in b) d = b[e], 0 <= ve.call(c, e) || !/^on/.test(e) || null == (null != d ? d.bind : void 0) || (a[e] = d.bind(b))
        };
        $a.createUID = function(a) {
            var b, c;
            null == a && (a = 16);
            b = Date.now();
            c = 2 * a - 1;
            return (Math.round(Math.random() * c + a).toString(16) + b.toString(16)).toUpperCase()
        };
        var ce = function() {
            ce.__super__.constructor.call(this)
        };
        f(ce, F);
        ce.prototype.execute = function(a) {
            this.sendNotification(d.PLAY_REQUEST);
            this.playback.play();
            ce.__super__.execute.call(this, a)
        };
        var aa = function(a, b, c) {
            aa.__super__.constructor.call(this, a, b, c)
        };
        f(aa, u);
        aa.prototype.playerType = "external";
        aa.prototype.createModel = function() {
            var a;
            aa.__super__.createModel.call(this);
            this.registerProxy(new ra(this.config));
            a = new ab;
            this.registerProxy(a);
            this.playerCore = new da(a);
            this.registerProxy(this.playerCore);
            this.bindings.initialize()
        };
        aa.prototype.createView =
            function() {
                var a, b = this;
                this.registerMediator(new Xa("external", this.getViewComponent()));
                this.registerMediator(new qb);
                a = new fc;
                this.registerMediator(a);
                m.create(a.viewComponent, m.CLICK, function() {
                    return b.sendNotification(d.TOGGLE_ACTIVE)
                })
            };
        aa.prototype.createController = function() {
            aa.__super__.createController.call(this);
            this.registerCommand(d.UPDATE_DATA_BINDINGS, Xd);
            this.registerCommand($.TOGGLE_PLAY_PAUSE, ce);
            this.registerCommand(d.PLAY, ce);
            this.registerCommand(d.CHANGE_PLAY_STATE, Vd);
            this.registerCommand(d.SET_MEDIA,
                Ke);
            this.registerCommand(d.CHANGE_MEDIA, Le);
            this.registerCommand(d.MEDIA_CHANGE, Wd);
            this.registerCommand(d.MEDIA_VALIDATED, Be);
            this.registerCommand(d.ERROR, Yd);
            this.registerCommand(pb.PLUGINS_INITIALIZED, ye);
            this.registerCommand(d.READY, Me);
            this.registerCommand(d.CHANGE_PARAMS, Oe)
        };
        aa.prototype.createMediaElement = function() {
            return document.createElement("div")
        };
        aa.prototype.evaluateBinding = function(a) {
            var b;
            return null != (b = this.retrieveProxy(Ja.NAME)) ? b.evaluateBinding(a) : void 0
        };
        aa.prototype.canPlayType =
            function(a) {
                return "maybe"
            };
        aa.prototype.play = function() {
            this.sendNotification(d.PLAY)
        };
        aa.prototype.setParams = function(a) {
            this.sendNotification(d.CHANGE_PARAMS, a);
            return a
        };
        aa.prototype.getParams = function() {
            return this.retrieveProxy(Rc.NAME).getData()
        };
        aa.prototype.setAutoplay = function(a) {
            return !1
        };
        aa.prototype.getAutoplay = function() {
            return !1
        };
        aa.prototype.setLoop = function(a) {
            return !1
        };
        aa.prototype.getLoop = function() {
            return !1
        };
        aa.prototype.setMuted = function(a) {
            return !1
        };
        aa.prototype.getMuted = function() {
            return !1
        };
        aa.prototype.setMedia = function(a) {
            this.sendNotification(d.SET_MEDIA, a);
            return a
        };
        aa.prototype.getMedia = function(a) {
            var b;
            return null != (b = this.retrieveProxy(t.NAME)) ? b.getData() : void 0
        };
        aa.prototype.setCurrentTime = function(a) {
            return 0
        };
        aa.prototype.getCurrentTime = function(a) {
            return 0
        };
        aa.prototype.getDuration = function(a) {
            return this.retrieveProxy(t.NAME).getDuration()
        };
        aa.prototype.setSrc = function(a) {
            this.sendNotification(d.SET_MEDIA, {
                src: a
            });
            return a
        };
        aa.prototype.getSrc = function(a) {
            return this.retrieveProxy(t.NAME).getSrc()
        };
        aa.prototype.setSource = function(a) {
            this.sendNotification(d.SET_MEDIA, {
                source: a
            });
            return a
        };
        aa.prototype.getSource = function() {
            return this.retrieveProxy(t.NAME).getSource()
        };
        aa.prototype.setVolume = function(a) {
            return a
        };
        aa.prototype.getVolume = function(a) {
            return 1
        };
        aa.prototype.getSeeking = function() {
            return !1
        };
        aa.prototype.getPaused = function() {
            return !1
        };
        aa.prototype.getEnded = function() {
            return !1
        };
        var Cc = function() {
            this.item = [];
            this.metadata = {}
        };
        Cc.prototype.title = null;
        Cc.prototype.link = null;
        Cc.prototype.description =
            null;
        Cc.prototype.category = null;
        Cc.prototype.pubDate = null;
        Cc.prototype.language = null;
        Cc.prototype.ttl = null;
        Cc.prototype.item = null;
        Cc.prototype.metadata = null;
        var de = function() {
            this.metadata = {}
        };
        de.prototype.src = null;
        de.prototype.debug = null;
        de.prototype.type = null;
        de.prototype.metadata = null;
        var rb = {
                AUTO: "auto",
                HTML: "html",
                FLASH: "flash",
                EXTERNAL: "external",
                NONE: "none",
                HTML_AUTO: "html-auto"
            },
            Ka = function() {
                return Ka.__super__.constructor.apply(this, arguments)
            };
        f(Ka, de);
        Ka.prototype.source = null;
        Ka.prototype.title =
            null;
        Ka.prototype.description = null;
        Ka.prototype.link = null;
        Ka.prototype.guid = null;
        Ka.prototype.pubDate = null;
        Ka.prototype.poster = null;
        Ka.prototype.thumbnail = null;
        Ka.prototype.embed = null;
        Ka.prototype.category = null;
        Ka.prototype.type = null;
        Ka.prototype.medium = null;
        Ka.prototype.duration = null;
        Ka.prototype.track = null;
        Ka.prototype.metadata = null;
        Ka.prototype.scenes = null;
        Ka.prototype.startTime = null;
        var V = function(a, b) {
            this.type = a;
            null != b && (this.detail = this.data = b)
        };
        V.prototype.type = null;
        V.prototype.target = null;
        V.prototype.detail = null;
        var Uc = function() {};
        Uc.prototype.getFeed = function(a, b, c) {
            return g.getJson(a, b, c)
        };
        Uc.prototype.getMediaNode = function(a, b, c) {
            var e, d, v, f;
            null == c && (c = !0);
            v = "media-" + b;
            e = a["media-group"] || a;
            d = e["media-content"];
            null != d && null != d[v] ? f = d[v] : null != e[v] ? f = e[v] : null != a[v] ? f = a[v] : null != a[b] && c && (f = a[b]);
            return f
        };
        Uc.prototype.createEmbed = function(a) {
            var b, c, e, d, v, f;
            try {
                b = this.getMediaNode(a, "embed");
                if (null == b) return c;
                c = {};
                c.url = b["@attributes"].url;
                c.width = b["@attributes"].width;
                c.height =
                    b["@attributes"].height;
                c.params = {};
                b["media-param"] instanceof Array || (b["media-param"] = [b["media-param"]]);
                f = b["media-param"];
                d = 0;
                for (v = f.length; d < v; d++) e = f[d], c.params[e["@attributes"].name] = e["#text"]
            } catch (K) {
                ia.error("[AMP Feed Parse Error] embed parse error: " + K.message, K)
            }
            return c
        };
        Uc.prototype.createFeed = function(a) {
            var b, c, e, d, v, f, K, r, g;
            try {
                if (b = a.channel, c = new Cc, null != b) {
                    c.title = b.title;
                    c.description = b.description;
                    c.language = b.language;
                    c.category = b.category;
                    c.pubDate = new Date(Date.parse(b.pubDate));
                    c.ttl = b.ttl;
                    d = b.item instanceof Array ? b.item : [b.item];
                    r = 0;
                    for (g = d.length; r < g; r++) e = d[r], f = this.createMedia(e), c.item.push(f);
                    for (v in b) K = b[v], v in c || (c.metadata[v] = K)
                }
            } catch (k) {
                ia.error("[AMP Feed Parse Error] feed parse error: " + k.message, k)
            }
            return c
        };
        Uc.prototype.createMedia = function(a) {
            var b, c, e, d, v, f, K, r, g, k, l, m, p, q, t, s, u, w, x, y;
            try {
                K = new Ka;
                f = this.getMediaNode(a, "content");
                if (f instanceof Array)
                    for (K.source = [], m = 0, t = f.length; m < t; m++) e = f[m], g = {
                        src: e["@attributes"].url,
                        type: e["@attributes"].type
                    },
                        c = e["media-category"], null != c && (b = c["@attributes"], "http://mrss.akamai.com/user_agent_hint" === b.schema && (v = b.label || c["#text"], null != v && "" !== v && (null == g.rules && (g.rules = []), g.rules.push(v)))), K.source.push(g), K.medium = e["@attributes"].medium, K.duration = parseFloat(e["@attributes"].duration);
                else K.type = f["@attributes"].type, K.src = f["@attributes"].url, K.medium = f["@attributes"].medium, K.duration = parseFloat(f["@attributes"].duration);
                K.guid = a.guid;
                K.title = this.getMediaNode(a, "title");
                K.link = a.link;
                K.description =
                    this.getMediaNode(a, "description");
                K.pubDate = new Date(Date.parse(a.pubDate));
                K.thumbnail = K.poster = null != (w = this.getMediaNode(a, "thumbnail")) ? null != (x = w["@attributes"]) ? x.url : void 0 : void 0;
                K.embed = this.createEmbed(a);
                K.scenes = null != (y = this.getMediaNode(a, "scenes")) ? y["media-scene"] : void 0;
                r = this.getMediaNode(a, "status", !1);
                null != r && (K.status = {
                    state: r["@attributes"].state,
                    reason: r["@attributes"].reason
                });
                K.category = a.category;
                K.category instanceof Array || (K.category = [K.category]);
                r = this.getMediaNode(a,
                    "category", !1);
                if (null != r)
                    for (p = 0, s = r.length; p < s; p++) c = r[p], null != c["#text"] && "" !== c["#text"] && K.category.push(c["#text"]);
                null != K.category && K.category.sort(function(a, b) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    return a > b ? 1 : a < b ? -1 : 0
                });
                r = this.getMediaNode(a, "subTitle");
                if (null != r)
                    for (null == K.track && (K.track = []), r instanceof Array || (r = [r]), q = 0, u = r.length; q < u; q++) k = r[q], null != k["@attributes"] && K.track.push({
                        src: k["@attributes"].href,
                        type: k["@attributes"].type,
                        kind: "captions",
                        srclang: k["@attributes"].lang ||
                        "en"
                    });
                c = a.category;
                c instanceof Array || (c = [c]);
                K.isLive = "live" === a.temporalType || null != c && -1 !== c.join(",").indexOf("live_stream");
                K.temporalType = K.isLive ? "live" : "vod";
                for (d in a) l = a[d], d in K || (K.metadata[d] = l)
            } catch (z) {
                ia.error("[AMP Feed Parse Error] media parse error: " + z.message, z)
            }
            return K
        };
        var ia = function() {};
        ia.enabled = !1;
        ia.enable = function(a) {
            null == a && (a = /debug\=true/.test(location.search.toLowerCase()));
            this.enabled = a;
            this.enabled || (this.log = this.trace = this.debug = this.info = this.warn = this.error =
                this.fatal = function() {});
            return a
        };
        ia.log = function() {
            try {
                1 < arguments.length && null != arguments[1] ? console.log.apply(console, arguments) : console.log(arguments[0])
            } catch (a) {}
        };
        ia.trace = function() {
            try {
                console.trace.apply(console, arguments)
            } catch (a) {}
        };
        ia.debug = function() {
            try {
                console.log.apply(console, arguments)
            } catch (a) {
                this.log.apply(this, arguments)
            }
        };
        ia.info = function() {
            try {
                console.info.apply(console, arguments)
            } catch (a) {}
        };
        ia.warn = function() {
            try {
                console.warn.apply(console, arguments)
            } catch (a) {}
        };
        ia.error =
            function() {
                try {
                    console.error.apply(console, arguments)
                } catch (a) {
                    this.log.apply(this, arguments)
                }
            };
        ia.fatal = function() {
            try {
                console.fatal.apply(console, arguments)
            } catch (a) {}
        };
        var La = function() {
            La.__super__.constructor.call(this)
        };
        f(La, ib);
        La.prototype.xhr = null;
        La.prototype.headers = null;
        La.prototype.response = null;
        La.prototype.responseXML = null;
        La.prototype.responseText = null;
        La.prototype.responseType = null;
        La.prototype.withCredentials = !1;
        La.prototype.readyState = 0;
        La.prototype.status = null;
        La.prototype.open =
            function(a, b) {
                var c, e, d = this;
                try {
                    e = new XMLHttpRequest
                } catch (v) {
                    e = new window.ActiveXObject("Microsoft.XMLHTTP")
                }
                if (La.isCORS(b))
                    if (Object.prototype.hasOwnProperty.call(e, "withCredentials")) try {
                        e.withCredentials = this.withCredentials
                    } catch (f) {
                        ia.warn("[AMP XHR WARNING]", "withCredentials not properly supported in this browser.", f)
                    } else "undefined" !== typeof XDomainRequest && (c = !0, e = new XDomainRequest);
                if (null != e) {
                    c && (e.onprogress = function() {}, e.ontimeout = function() {}, e.onerror = function() {}, e.onload = function(a) {
                        "function" ===
                        typeof e.onreadystatechange && (e.readyState = 4, e.status = 200, e.contentType.match(/\/xml/) && (e.responseXML = new ActiveXObject("Microsoft.XMLDOM"), e.responseXML.async = !1, e.responseXML.loadXML(e.responseText)), e.onreadystatechange.call(e, a, !1))
                    });
                    e.onreadystatechange = function(a) {
                        var b, c;
                        d.readyState = e.readyState;
                        d.dispatchEvent(new V("readystatechange", e));
                        if (4 === e.readyState)
                            if (d.status = e.status, 199 < (b = d.status) && 400 > b || 0 === d.status) {
                                null == e.responseText && (e.responseText = e.text);
                                d.responseText = e.responseText;
                                if (null != e.responseXML && 0 < (null != (c = e.responseXML.childNodes) ? c.length : void 0)) d.response = d.responseXML = e.responseXML, d.responseType = "document";
                                else try {
                                    d.response = JSON.parse(e.responseText), d.responseType = "json"
                                } catch (v) {
                                    d.response = e.responseText, d.responseType = "text"
                                }
                                d.dispatchEvent(new V("load", d))
                            } else 0 !== d.status && d.dispatchEvent(new V("error", d))
                    };
                    try {
                        "undefined" !== typeof e.onerror && (e.onerror = function(a) {
                            d.dispatchEvent(new V("error", d))
                        })
                    } catch (g) {}
                    e.open(a, b)
                }
                this.xhr = e
            };
        La.prototype.send =
            function(a) {
                var b, c, e, d = this;
                if (null != this.headers)
                    for (b in e = this.headers, e) c = e[b], null != b && null != c && this.xhr.setRequestHeader(b, c);
                setTimeout(function() {
                    d.xhr.send(a)
                }, 0)
            };
        La.prototype.setRequestHeader = function(a, b) {
            null != a && null != b && (null == this.headers && (this.headers = {}), this.headers[a] = b)
        };
        La.prototype.setRequestHeaders = function(a) {
            return this.headers = a
        };
        La.prototype.getResponseHeader = function(a) {
            var b;
            return null != (b = this.xhr) ? "function" === typeof b.getResponseHeader ? b.getResponseHeader(a) : void 0 :
                void 0
        };
        La.prototype.getAllResponseHeaders = function() {
            var a;
            return null != (a = this.xhr) ? "function" === typeof a.getAllResponseHeaders ? a.getAllResponseHeaders() : void 0 : void 0
        };
        La.isCORS = function(a) {
            var b, c;
            b = document.createElement("a");
            b.href = a;
            a = "" !== b.hostname ? b.hostname : location.hostname;
            c = "0" !== b.port ? b.port : location.port;
            return location.protocol !== (":" !== b.protocol ? b.protocol : location.protocol) || location.hostname !== a || location.port !== c && !("" === location.port && "80" === c)
        };
        var g = function() {};
        g.blankImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI2QkJDQTBCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI2QkJDQTFCMzQ4MTFFMUFERDJBRkRGQUQwNTcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowODg4NjdFQkIzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowODg4NjdFQ0IzNDgxMUUxQUREMkFGREZBRDA1NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu0++ecAAAAGUExURf///wAAAFXC034AAAABdFJOUwBA5thmAAAADElEQVR42mJgAAgwAAACAAFPbVnhAAAAAElFTkSuQmCC";
        g.mimeTypes = {
            mp4: "video/mp4",
            flv: "video/x-flv",
            f4m: "video/f4m",
            smil: "application/smil",
            smilxml: "application/smil+xml",
            m3u8: "application/x-mpegURL",
            mp3: "audio/mpeg",
            json: "application/json",
            txt: "text/plain",
            xml: "application/xml",
            ogv: "video/ogg",
            webm: "video/webm",
            mpd: "application/dash+xml",
            ism: "application/vnd.ms-sstr+xml",
            js: "text/javascript",
            css: "text/css",
            swf: "application/x-shockwave-flash",
            vtt: "text/vtt",
            ttml: "application/ttml+xml",
            srt: "application/x-subrip",
            cea608: "text/cea-608",
            cea708: "text/cea-708"
        };
        g.flashTypes = [g.mimeTypes.mp4, g.mimeTypes.flv, g.mimeTypes.f4m, g.mimeTypes.smil, g.mimeTypes.smilxml];
        g.rules = {
            flashTablets: {
                label: "Android 2 \x26 3 or Kindle Fire 1",
                regexp: "Android [23]|Silk/1"
            },
            html5Phones: {
                label: "iPhone",
                regexp: "iPhone"
            },
            html5Tablets: {
                label: "HTML5 Tablets",
                regexp: "iPad|Android [4-9]|Silk/2"
            },
            desktop: {
                label: "Desktop",
                regexp: "^((?!iPad|iPhone|Android|BlackBerry|PlayBook|Silk).)*$"
            }
        };
        g.getPlaybackMode = function(a) {
            var b, c, e;
            null == a && (a = (null != (c = wc["amp-mode"]) ? c.toLowerCase() : void 0) ||
                rb.HTML_AUTO);
            c = !1;
            for (b in rb)
                if (e = rb[b], e === a) {
                    c = !0;
                    break
                }
            c || (a = rb.AUTO);
            a === rb.HTML_AUTO && (a = this.isHTMLFirst() ? rb.HTML : rb.AUTO);
            if (a !== rb.AUTO) return a !== rb.FLASH || this.hasFlash() || (a = rb.NONE), a;
            this.hasFlash() || (a = this.supportsHTML5Video() ? rb.HTML : rb.NONE);
            a === rb.AUTO && (a = this.isHTML5() ? rb.HTML : rb.FLASH);
            return a
        };
        g.getIEVersion = function() {
            var a, b, c;
            b = -1;
            c = navigator.userAgent;
            "Microsoft Internet Explorer" === navigator.appName ? a = /MSIE ([0-9]{1,}[.0-9]{0,})/ : "Netscape" === navigator.appName ? a = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/ :
                /Edge\/[0-9\.]+$/.test(c) && (a = /Edge\/([0-9\.]+)/);
            null != (null != a ? a.exec(c) : void 0) && (b = parseFloat(RegExp.$1));
            return b
        };
        g.getFFVersion = function() {
            var a;
            a = -1;
            /Firefox\/([0-9\.]+)$/.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1));
            return a
        };
        g.getSafariVersion = function() {
            var a, b;
            a = -1;
            b = navigator.userAgent;
            /Safari\/[0-9\.]+$/.test(b) && null != /Version\/([0-9])/.exec(b) && (a = parseFloat(RegExp.$1));
            return a
        };
        g.isChrome = function() {
            return /Chrom(e|ium)/.test(navigator.userAgent)
        };
        g.isHTMLFirst = function() {
            return null !=
                window.MediaSource
        };
        g.mergeRules = function(a) {
            var b, c, e;
            e = [];
            for (b in a) c = a[b], e.push(g.rules[b] = c);
            return e
        };
        g.checkRules = function(a) {
            var b, c, e;
            if (null != a && 0 < a.length)
                for (c = 0, e = a.length; c < e; c++)
                    if (b = a[c], b = g.rules[b])
                        if (b = RegExp(b.regexp), b.test(navigator.userAgent)) return !0;
            return !1
        };
        g.selectSource = function(a, b) {
            var c, e, d;
            e = 0;
            for (d = a.length; e < d; e++)
                if (c = a[e], g.checkRules(c.rules)) return c;
            e = 0;
            for (d = a.length; e < d; e++)
                if (c = a[e], "" !== b(c.type || g.getMimeType(c.src))) return c;
            return null
        };
        g.getMimeType =
            function(a) {
                return this.mimeTypes[g.getFileExtension(a)]
            };
        g.selectTrack = function(a, b) {
            var c, e, d, v;
            d = 0;
            for (v = a.length; d < v; d++)
                if (c = a[d], c.kind === b) {
                    e = c;
                    break
                }
            return e
        };
        g.isIPhone = function() {
            return /iPhone/.test(navigator.platform) || /iPhone/.test(navigator.userAgent)
        };
        g.isIPad = function() {
            return /iPad/.test(navigator.platform) || /iPad/.test(navigator.userAgent)
        };
        g.isAndroid = function() {
            return /Android [4-9]/.test(navigator.userAgent)
        };
        g.isKindleFireHD = function() {
            return /Silk\/2/.test(navigator.userAgent)
        };
        g.isKindleFire = function() {
            return /Silk\/1/.test(navigator.userAgent)
        };
        g.isBlackBerry = function() {
            return /BlackBerry;|PlayBook|BB10/.test(navigator.userAgent)
        };
        g.isFirefoxOS = function() {
            return /\(Mobile;.*Firefox\//.test(navigator.userAgent)
        };
        g.supportsHTML5Video = function() {
            return null != document.createElement("video").canPlayType
        };
        g.isHTML5 = function() {
            return this.isIOS() || this.isAndroid() || this.isKindleFireHD() || this.isBlackBerry() || this.isFirefoxOS()
        };
        g.isIOS = function() {
            var a;
            a = /iPad|iPhone|iPod/i;
            return a.test(navigator.platform) ||
                a.test(navigator.userAgent)
        };
        g.getIOSversion = function() {
            var a;
            if (/iP(hone|od|ad)/.test(navigator.platform)) return a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
        };
        g.hasFlash = function() {
            var a;
            try {
                a = Boolean(new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
            } catch (b) {
                a = "undefined" !== typeof navigator.mimeTypes["application/x-shockwave-flash"]
            }
            return a
        };
        g.isFullscreenDevice = function() {
            return this.isKindleFireHD() || this.isIPhone()
        };
        g.getDevice =
            function() {
                var a;
                a = "desktop";
                this.isIPhone() ? a = "iphone" : this.isIPad() ? a = "ipad" : /Android/.test(navigator.userAgent) ? a = "android" : this.isKindleFireHD() ? a = "kindlefirehd" : this.isKindleFire() && (a = "kindlefire");
                return a
            };
        g.xmlToJson = function(a) {
            var b, c, e, d, v;
            e = {};
            9 === a.nodeType && (a = a.firstChild);
            if (1 === a.nodeType) {
                if (0 < a.attributes.length)
                    for (e["@attributes"] = {}, c = a.attributes, b = d = 0, v = c.length; d < v; b = ++d) b = c[b], e["@attributes"][b.nodeName] = b.nodeValue
            } else if (3 === a.nodeType || 4 === a.nodeType) e = a.nodeValue;
            if (a.hasChildNodes())
                for (v = a.childNodes, b = a = 0, d = v.length; a < d; b = ++a)
                    if (c = v[b], 3 !== c.nodeType || /\S/.test(c.nodeValue)) b = c.nodeName.replace(/:/, "-"), c = this.xmlToJson(c), null == c["@attributes"] && null != c["#text"] && (c = c["#text"]), null == e[b] ? e[b] = c : (e[b] instanceof Array || (e[b] = [e[b]]), e[b].push(c));
            return e
        };
        g.getXHR = function() {
            return new La
        };
        g.get = function(a, b, c) {
            var e;
            null == b && (b = {});
            null == c && (c = null);
            e = g.getXHR();
            null != b && (null != b.withCredentials && (e.withCredentials = b.withCredentials), null != b.onload &&
            (e.onload = b.onload), null != b.onerror && (e.onerror = b.onerror));
            e.open("GET", a);
            null != c && e.setRequestHeaders(c);
            e.send();
            return e
        };
        g.getUTC = function(a, b) {
            var c;
            if ("function" === typeof a) try {
                c = {
                    onload: function(b) {
                        a(1E3 * parseInt(b.target.responseText))
                    },
                    onerror: b
                }, this.get("//time.akamai.com", c)
            } catch (e) {
                b(e)
            }
        };
        g.send = function(a, b, c, e) {
            var d;
            null == c && (c = {});
            null == e && (e = {
                "Content-Type": "String"
            });
            d = g.getXHR();
            null != c.onload && (d.onload = c.onload);
            null != c.onerror && (d.onerror = c.onerror);
            d.open("POST", a);
            null !=
            e && d.setRequestHeaders(e);
            d.send(b);
            return d
        };
        g.request = function(a) {
            null == a && (a = {});
            return new Promise(function(b, c) {
                var e;
                "string" === typeof a && (a = {
                    url: a
                });
                null == a.method && (a.method = "GET");
                e = g.getXHR();
                e.withCredentials = a.withCredentials;
                e.onload = function() {
                    return b(e)
                };
                e.onerror = c;
                e.open(a.method, a.url);
                null != a.headers && e.setRequestHeaders(a.headers);
                return e.send(a.data)
            })
        };
        g.loadScript = function(a, b, c, e) {
            var d;
            c = c || document.getElementsByTagName("head")[0];
            d = document.createElement("script");
            d.type =
                "text/javascript";
            null != b && (d.addEventListener ? (d.onload = b, null != e && (d.onerror = e)) : d.readyState && (d.onreadystatechange = function(a) {
                    if ("loaded" === this.readyState || "complete" === this.readyState) this.onreadystatechange = null, b()
                }));
            d.src = a;
            c.appendChild(d);
            return d
        };
        g.loadStyleSheet = function(a) {
            var b, c;
            b = document.getElementsByTagName("head")[0];
            c = document.createElement("link");
            c.rel = "stylesheet";
            c.type = "text/css";
            c.href = a;
            return b.appendChild(c)
        };
        g.read = function(a, b, c, e) {
            var d, v;
            null == b && (b = {});
            null ==
            c && (c = "");
            null == e && (e = []);
            try {
                return v = this.get(a, b, e), d = v.responseText || v.text, c === g.mimeTypes.json ? JSON.parse(d) : c === g.mimeTypes.xml && null != v.responseXML ? v.responseXML : d
            } catch (f) {
                return "undefined" !== typeof console && null !== console && "function" === typeof console.error && console.error("Read Error: ", f), null
            }
        };
        g.getFileExtension = function(a) {
            return a.replace(/\?.*/, "").split(".").pop()
        };
        g.getResponseHeader = function(a, b, c) {
            var e;
            null == c && (c = {});
            e = g.getXHR();
            null != c.onerror && (e.onerror = c.onerror);
            e.open("HEAD",
                a, !1);
            e.send();
            return e.getResponseHeader(b)
        };
        g.getResponseHeaders = function(a, b, c) {
            var e, d, v;
            null == c && (c = {});
            e = g.getXHR();
            null != c.onerror && (e.onerror = c.onerror);
            e.open("HEAD", a, !1);
            e.send();
            c = {};
            if (null == b) return e.getAllResponseHeaders();
            d = 0;
            for (v = b.length; d < v; d++) a = b[d], c[a] = e.getResponseHeader(a);
            return c
        };
        g.isTouch = null;
        g.isTouchDevice = function() {
            if (null == this.isTouch) try {
                document.createEvent("TouchEvent"), this.isTouch = !0
            } catch (a) {
                this.isTouch = !1
            }
            return this.isTouch
        };
        g.clamp = function(a, b, c) {
            a <
            b && (a = b);
            a > c && (a = c);
            return a
        };
        g.beacon = function(a, b) {
            var c;
            null == b && (b = "beaconId");
            c = document.getElementById(b);
            null == c && (c = document.createElement("img"), c.setAttribute("id", b), c.setAttribute("height", 0), c.setAttribute("width", 0), document.body.appendChild(c), c.style.display = "none");
            c.setAttribute("src", a);
            return c
        };
        g.getElementOffset = function(a, b) {
            var c, e, d, v, f, g;
            null == b && (b = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement);
            f = e = 0;
            g = a.offsetWidth;
            for (c = a.offsetHeight; a &&
            a !== b;) "BODY" === a.tagName ? (d = a.scrollLeft || document.documentElement.scrollLeft, v = a.scrollTop || document.documentElement.scrollTop, e += a.offsetLeft - d + a.clientLeft, f += a.offsetTop - v + a.clientTop) : (e += a.offsetLeft - a.scrollLeft + a.clientLeft, f += a.offsetTop - a.scrollTop + a.clientTop), a = a.offsetParent;
            return {
                left: e,
                top: f,
                width: g,
                height: c
            }
        };
        g.override = function(a, b, c) {
            var e;
            null == c && (c = !0);
            if (null == a) return b;
            if (null == b) return a;
            !0 === c && (a = g.clone(a), b = g.clone(b));
            for (e in b) c = b[e], "object" === typeof c && null !== c ?
                (null == a[e] && (a[e] = c instanceof Array ? [] : {}), a[e] = g.override(a[e], c, !1)) : a[e] = c;
            return a
        };
        g.clone = function(a, b) {
            var c, e, d, v, f, g, r;
            null == b && (b = !0);
            if (null == a) return a;
            if ("object" !== typeof a) c = a;
            else
                for (v in c = a instanceof Array ? [] : {}, a)
                    if (f = a[v], "object" === typeof f && null !== f && !0 === b)
                        if (f instanceof Array)
                            for (c[v] = [], g = 0, r = f.length; g < r; g++) e = f[g], c[v].push(this.clone(e));
                        else
                            for (d in c[v] = {}, f) e = f[d], c[v][d] = this.clone(e);
                    else c[v] = f;
            return c
        };
        g.formatTimecode = function(a, b) {
            var c;
            a = parseInt(a);
            if (isNaN(a)) return "00:00";
            c = g.formatZeroFill(a % 60);
            a = parseInt(a / 60);
            c = g.formatZeroFill(a % 60) + ":" + c;
            a = parseInt(a / 60);
            0 < a && (c = g.formatZeroFill(a) + ":" + c);
            3600 <= b && 5 === c.length && (c = "00:" + c);
            return c
        };
        g.formatZeroFill = function(a) {
            var b;
            b = a.toString();
            10 > a && (b = "0" + b);
            return b
        };
        g.flattenTimecode = function(a, b) {
            var c, e, d;
            null == b && (b = 30);
            if (null == a || "" === a) return NaN;
            d = a.split(":");
            c = 0;
            4 === d.length ? c = parseInt(d.pop()) / b : 3 === d.length && (d[2] = d[2].replace(",", "."), -1 !== d[2].indexOf(".") && (e = d[2].split(".")), 1 < (null != e ? e.length : void 0) &&
                (d[2] = e[0], c = parseInt(e[1]) / 1E3));
            for (e = parseInt(d.pop()); 0 < d.length;) e += Math.pow(60, d.length) * parseInt(d.shift());
            return e + c
        };
        g.cacheBust = function(a, b, c) {
            var e;
            null == b && (b = "cacheBust");
            null == c && (c = Date.now());
            e = -1 === a.indexOf("?") ? "?" : "\x26";
            return a + e + b + "\x3d" + c
        };
        g.formatStyleName = function(a) {
            return a.replace(/([A-Z])/, "-$1").toLowerCase()
        };
        g.trim = function(a) {
            return a.replace(/^\s*(.*)/, "$1").replace(/(.*)\s*$/, "$1")
        };
        g.getJson = function(a, b, c) {
            var e;
            e = g.getXHR();
            e.open("GET", a);
            e.onload = function(a) {
                a =
                    "document" === e.responseType ? g.xmlToJson(e.responseXML) : e.response;
                "function" === typeof b && b(a)
            };
            e.onerror = function(a) {
                "function" === typeof c && c(a)
            };
            e.send();
            return e
        };
        g.getSource = function(a, b, c) {
            var e;
            e = g.getPlaybackMode();
            g.getJson(a, function(a) {
                var c, d;
                a = (new Uc).createFeed(a);
                0 < (null != a ? null != (d = a.item) ? d.length : void 0 : void 0) && (c = function(a) {
                    return "flash" === e && -1 !== g.flashTypes.indexOf(a) || "html" === e && -1 === g.flashTypes.indexOf(a) ? "maybe" : ""
                }, c = g.selectSource(a.item[0].source, c));
                "function" === typeof b &&
                b(c)
            }, c)
        };
        g.trackMouse = function() {
            try {
                null != document.addEventListener ? document.addEventListener("mousemove", this.mouseTracker) : null != document.attachEvent && document.attachEvent("mousemove", this.mouseTracker)
            } catch (a) {}
        };
        g.clientX = 0;
        g.clientY = 0;
        g.pageX = 0;
        g.pageY = 0;
        g.mouseTracker = function(a) {
            g.clientX = a.clientX;
            g.clientY = a.clientY;
            g.pageX = a.pageX;
            g.pageY = a.pageY
        };
        g.isMouseOverElement = function(a) {
            var b;
            b = !1;
            if (null == a) return b;
            try {
                b = a.contains(document.elementFromPoint(g.clientX, g.clientY))
            } catch (c) {
                b = !1
            }
            return b
        };
        g.trackMouse();
        g.getActualSize = function(a, b) {
            var c, e, d;
            null == b && (b = !0);
            d = a.offsetWidth;
            c = a.offsetHeight;
            !0 === b && (e = getComputedStyle(a), d += parseInt(e.marginLeft) + parseInt(e.marginRight), c += parseInt(e.marginTop) + parseInt(e.marginBottom));
            return {
                width: d,
                height: c
            }
        };
        g.isVolumeSettable = function() {
            var a, b;
            b = navigator.userAgent.toLowerCase();
            a = /ipad|iphone|ipod|android|blackberry|windows ce|windows phone|webos|playbook/.exec(b);
            return null == a || "android" === a[0] && /Firefox/.test(b) ? !0 : !1
        };
        g.createFlashObject =
            function(a, b) {
                var c, e, d, f, h, K;
                if (null != a) {
                    h = {
                        allowFullScreen: !0,
                        allowScriptAccess: "always",
                        wmode: "direct",
                        bgColor: "#000000"
                    };
                    g.override(h, a.params, !1);
                    if (null != a.vars) {
                        d = [];
                        K = a.vars;
                        for (f in K) e = K[f], d.push("" + f + "\x3d" + e);
                        h.flashvars = d.join("\x26")
                    }
                    e = (null != (c = a.attributes) ? c.id : void 0) || this.createUID();
                    c = {
                        id: e,
                        name: e,
                        width: "100%",
                        height: "100%",
                        type: "application/x-shockwave-flash"
                    };
                    g.override(c, a.attributes, !1); - 1 !== this.getIEVersion() && "direct" === h.wmode && (h.wmode = "transparent");
                    d = "\x3cobject ";
                    for (f in c) e = c[f], d += "" + f + '\x3d"' + e + '" ';
                    d += "\x3e\n";
                    for (f in h) e = h[f], d += '\x3cparam name\x3d"' + f + '" value\x3d"' + e + '" /\x3e\n';
                    b.innerHTML = d + "\x3c/object\x3e"
                }
            };
        g.createUID = function(a) {
            var b, c;
            null == a && (a = 16);
            b = Date.now();
            c = 2 * a - 1;
            return (Math.round(Math.random() * c + a).toString(16) + b.toString(16)).toUpperCase()
        };
        g.chain = function(a, b) {
            var c, e, d, f;
            c = Promise.resolve(b);
            d = 0;
            for (f = a.length; d < f; d++) e = a[d], c = c.then(e);
            return c
        };
        g.arrayBufferToString = function(a) {
            return String.fromCharCode.apply(null, new Uint8Array(a))
        };
        g.getFullScreenApi = function(a, b) {
            var c;
            c = {};
            null != a.webkitRequestFullScreen ? (c.enter = a.webkitRequestFullScreen.bind(a), c.exit = null != document.webkitExitFullscreen ? document.webkitExitFullscreen.bind(document) : document.webkitCancelFullScreen.bind(document), c.event = "onwebkitfullscreenchange", c.element = "webkitFullscreenElement", c.error = "webkitfullscreenerror") : null != a.requestFullscreen ? (c.enter = a.requestFullscreen.bind(a), c.exit = null != document.exitFullscreen ? document.exitFullscreen.bind(document) : document.cancelFullscreen.bind(document),
                c.event = "onfullscreenchange", c.element = "fullscreenElement", c.error = "fullscreenerror") : null != a.mozRequestFullScreen ? (c.enter = a.mozRequestFullScreen.bind(a), c.exit = document.mozCancelFullScreen.bind(document), c.event = "onmozfullscreenchange", c.element = "mozFullscreenElement", c.error = "mozfullscreenerror") : null != a.msRequestFullscreen ? (c.enter = a.msRequestFullscreen.bind(a), c.exit = document.msExitFullscreen.bind(document), c.event = "MSFullscreenChange", c.element = "msFullscreenElement", c.error = "MSFullscreenError") :
                null != b.webkitEnterFullscreen && (c.enter = b.webkitEnterFullscreen.bind(b), c.exit = b.webkitExitFullscreen.bind(b), c.event = null, c.error = null);
            return c
        };
        var Ca = function() {
            Ca.__super__.constructor.call(this, this, !1)
        };
        f(Ca, ib);
        Ca.UNINITIALIZED = 0;
        Ca.LOADING = 1;
        Ca.LOADED = 2;
        Ca.parseModule = function(a) {
            var b, c, e, d;
            c = {};
            a = a.childNodes;
            e = 0;
            for (d = a.length; e < d; e++) b = a[e], 1 === (null != b ? b.nodeType : void 0) && (c[b.nodeName] = this.parseItem(b));
            return c
        };
        Ca.parseItem = function(a) {
            var b, c, e, d;
            b = ("" + a.getAttribute("type")).toLowerCase();
            c = a.textContent || a.text || a.innerText;
            if ("object" !== b && "array" !== b && /#\{.*\}/.test(c)) return c;
            switch (b) {
                case "object":
                    c = this.parseModule(a);
                    break;
                case "array":
                    c = [];
                    b = a.childNodes;
                    e = 0;
                    for (d = b.length; e < d; e++) a = b[e], 1 === a.nodeType && c.push(this.parseItem(a));
                    break;
                case "boolean":
                    c = "true" === c.toLowerCase();
                    break;
                case "number":
                    c = parseFloat(c)
            }
            return c
        };
        Ca.prototype.url = null;
        Ca.prototype.data = null;
        Ca.prototype.xml = null;
        Ca.prototype.readyState = Ca.UNINITIALIZED;
        Ca.prototype.loaded = !1;
        Ca.prototype.flash = {
            PlaybackMetricsPlugin: {
                src: "#{paths.resources}plugins/PlaybackMetricsPlugin.swf",
                blocking: !1,
                host: "akamai",
                main: "PlaybackMetricsPlugin"
            },
            SubclipMonitorPlugin: {
                src: "#{paths.resources}plugins/SubclipMonitorPlugin.swf",
                blocking: !1,
                host: "akamai",
                main: "SubclipMonitorPlugin"
            },
            NetSessionClientPlugin: {
                src: "#{paths.resources}plugins/NetSessionClientPlugin.swf",
                blocking: !1,
                host: "akamai",
                main: "NetSessionClientPlugin"
            }
        };
        Ca.prototype.loadURL = function(a, b) {
            var c = this;
            null == b && (b = !1);
            this.url = a;
            this.setReadyState(Ca.LOADING);
            g.get(a, {
                withCredentials: b,
                onload: function(a) {
                    a = a.detail;
                    "document" ===
                    a.responseType ? (c.xml = a.responseXML, a = 7 !== c.xml.firstChild.nodeType ? c.xml.firstChild : c.xml.childNodes[1], a = Ca.parseModule(a)) : (a = a.response, "string" === typeof a && (a = JSON.parse(a)));
                    c.loadData(a)
                },
                onerror: function(a) {
                    c.dispatchEvent(new V("error", a));
                    ia.error(a)
                }
            })
        };
        Ca.prototype.loadData = function(a) {
            yc.defaults = a;
            this.setReadyState(Ca.LOADED)
        };
        Ca.prototype.load = function(a, b) {
            null == b && (b = !1);
            switch (typeof a) {
                case "object":
                    this.loadData(a);
                    break;
                case "string":
                    this.loadURL(a, b);
                    break;
                default:
                    throw Error("[AMP ERROR] Invalid default configuration resource");
            }
        };
        Ca.prototype.setReadyState = function(a) {
            this.readyState = a;
            this.dispatchEvent(new V("readystatechange", a));
            a !== Ca.LOADED || this.loaded || (this.loaded = !0, this.dispatchEvent(new V("load", this.data)))
        };
        var na = function() {
            na.__super__.constructor.call(this, null, null, null, null)
        };
        f(na, ba);
        na.prototype.componentType = "overlay";
        na.prototype.onRegister = function() {
            na.__super__.onRegister.call(this);
            this.registerOverlay()
        };
        na.prototype.onRemove = function() {
            na.__super__.onRemove.call(this);
            this.removeOverlay()
        };
        na.prototype.registerOverlay = function() {
            this.sendNotification(d.ADD_OVERLAY, this.viewComponent)
        };
        na.prototype.removeOverlay = function() {
            this.sendNotification(d.REMOVE_OVERLAY, this.viewComponent)
        };
        var sb = function(a, b) {
            this.element = a;
            this.timeout = b;
            sb.__super__.constructor.call(this);
            this.resetHandler = this.reset.bind(this)
        };
        f(sb, ib);
        sb.prototype.events = "mousemove mousedown keypress DOMMouseScroll mousewheel touchmove MSPointerMove".split(" ");
        sb.prototype.resetHandler = null;
        sb.prototype.element = null;
        sb.prototype.timeout = null;
        sb.prototype.active = !0;
        sb.prototype.timeoutId = null;
        sb.prototype.applyListeners = function(a) {
            var b, c, e, d;
            null == a && (a = "add");
            d = this.events;
            c = 0;
            for (e = d.length; c < e; c++) b = d[c], this.element["" + a + "EventListener"](b, this.resetHandler)
        };
        sb.prototype.start = function(a) {
            null != a && (this.timeout = a);
            this.stop();
            this.applyListeners("add");
            this.timeoutId = setTimeout(this.setActive.bind(this, !1), this.timeout)
        };
        sb.prototype.stop = function() {
            this.applyListeners("remove");
            clearTimeout(this.timeoutId)
        };
        sb.prototype.reset = function() {
            this.setActive(!0);
            this.start()
        };
        sb.prototype.setActive = function(a) {
            if (a !== this.active) return this.active = a, this.dispatchEvent(new V("activechange", {
                active: this.active
            })), a
        };
        sb.prototype.getActive = function() {
            return this.active
        };
        var D = function() {};
        D.MSG_LIVE = "MSG_LIVE";
        D.MSG_REPLAY = "MSG_REPLAY";
        D.MSG_BUFFERING = "MSG_BUFFERING_TEXT";
        D.MSG_CC = "MSG_CC";
        D.MSG_CC_TITLE = "MSG_CC_TITLE";
        D.MSG_CC_LANGUAGE = "MSG_CC_LANGUAGE";
        D.MSG_CC_PRESETS = "MSG_CC_PRESETS";
        D.MSG_CC_FONT = "MSG_CC_FONT";
        D.MSG_CC_EDGE = "MSG_CC_EDGE";
        D.MSG_CC_SIZE = "MSG_CC_SIZE";
        D.MSG_CC_SCROLL = "MSG_CC_SCROLL";
        D.MSG_CC_COLOR = "MSG_CC_COLOR";
        D.MSG_CC_BACKGROUND = "MSG_CC_BACKGROUND";
        D.MSG_CC_EDGE = "MSG_CC_EDGE";
        D.MSG_CC_WINDOW = "MSG_CC_WINDOW";
        D.MSG_CC_OPACITY = "MSG_CC_OPACITY";
        D.MSG_CC_SHOW_ADVANCED = "MSG_CC_SHOW_ADVANCED";
        D.MSG_CC_HIDE_ADVANCED = "MSG_CC_HIDE_ADVANCED";
        D.MSG_CC_RESET = "MSG_CC_RESET";
        D.MSG_CC_CANCEL = "MSG_CC_CANCEL";
        D.MSG_CC_APPLY = "MSG_CC_APPLY";
        D.MSG_CC_PREVIEW_TEXT = "MSG_CC_PREVIEW_TEXT";
        D.MSG_SECONDS = "MSG_SECONDS";
        D.MSG_RECOMMENDATIONS_TITLE = "MSG_RECOMMENDATIONS_TITLE";
        D.MSG_NEXT_VIDEO = "MSG_NEXT_VIDEO";
        D.MSG_NEXT_AD = "MSG_NEXT_AD";
        D.MSG_TIME_SEPARATOR = "MSG_TIME_SEPARATOR";
        D.MSG_VIEW_ALL = "MSG_VIEW_ALL";
        D.MSG_VIDEO = "MSG_VIDEO";
        var I = function(a, b) {
            this.player = a;
            this.config = b;
            I.__super__.constructor.call(this);
            this.dispatcher = new ib(this);
            this.createDefaults()
        };
        f(I, puremvc.Mediator);
        I.NAME = "PluginWrapper";
        I.prototype.player = null;
        I.prototype.config = null;
        I.prototype.dispatcher = null;
        I.prototype.flashPlugins = null;
        I.prototype.createFlashVars =
            null;
        I.prototype.createXML = null;
        I.prototype.createDefaults = function() {
            this.player.createDefaults.call(this)
        };
        I.prototype.addEventListener = function(a, b) {
            this.dispatcher.addEventListener(a, b)
        };
        I.prototype.logEvent = function(a) {};
        I.prototype.dispatchEvent = function(a) {
            "timeupdate" !== a.type && "timeremaining" !== a.type && this.player.logger.log("[AMP " + this.constructor.NAME.replace("Wrapper", "").toUpperCase() + " EVENT] " + a.type, a);
            a.player = this.player;
            this.dispatcher.dispatchEvent(a)
        };
        I.prototype.removeEventListener =
            function(a, b) {
                this.dispatcher.removeEventListener(a, b)
            };
        I.prototype.createElement = function(a, b, c) {
            var e;
            e = a.createElement("element");
            e.setAttribute("id", b);
            null == c && (c = this.getControls(a).controls);
            null != c && c.appendChild(e);
            return e
        };
        I.prototype.createProperty = function(a, b, c, e) {
            var d;
            d = a.createElement("property");
            d.setAttribute("key", b);
            null != e && e.appendChild(d);
            if (null != c)
                if ("object" !== typeof c || c instanceof Array) a = fa.createTextContent(a, c.toString()), d.appendChild(a);
                else
                    for (b in c) e = c[b], this.createProperty(a,
                        b, e, d);
            return d
        };
        I.prototype.listNotificationInterests = function() {
            return [q.CREATE_FLASH_VARS, q.CREATE_XML]
        };
        I.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.CREATE_FLASH_VARS:
                    "function" === typeof this.createFlashVars && this.createFlashVars(a.flashvars);
                    break;
                case q.CREATE_XML:
                    "function" === typeof this.createXML && this.createXML(a.xml)
            }
        };
        I.prototype.destroy = function() {};
        var eg = function() {
            eg.__super__.constructor.call(this)
        };
        f(eg, puremvc.SimpleCommand);
        eg.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(ma.NAME).start()
            };
        var fg = function() {
            fg.__super__.constructor.call(this)
        };
        f(fg, puremvc.SimpleCommand);
        fg.prototype.execute = function(a) {
            this.facade.retrieveProxy(ma.NAME).stop()
        };
        var gg = function() {
            gg.__super__.constructor.call(this)
        };
        f(gg, puremvc.SimpleCommand);
        gg.prototype.execute = function(a) {
            var b, c;
            c = this.facade.retrieveProxy(ma.NAME);
            b = this.facade.player.retrieveProxy(B.NAME);
            a.getBody().value === kb.ACTIVE && b.getPlayState() !== U.READY && "desktop" !== g.getDevice() &&
            c.start()
        };
        var A = function() {
            A.__super__.constructor.call(this)
        };
        f(A, L);
        A.prototype.plugin = null;
        A.prototype.proxy = null;
        A.prototype.initializeNotifier = function(a) {
            A.__super__.initializeNotifier.call(this, a);
            this.proxy = this.facade.retrieveProxy(x.NAME);
            this.plugin = this.facade
        };
        var Te = function() {
            Te.__super__.constructor.call(this)
        };
        f(Te, A);
        Te.prototype.execute = function(a) {
            !0 === this.plugin.config["native"] ? this.player.getMediaElement().controls = !0 : this.proxy.adBreakEnd()
        };
        var hg = function() {
            hg.__super__.constructor.call(this)
        };
        f(hg, puremvc.SimpleCommand);
        hg.prototype.execute = function(a) {
            var b, c;
            b = a.getBody();
            c = b.poster;
            a = this.facade.player.getMediaElement();
            null != c && "" !== c && (a.poster = c);
            a.src = b.src;
            !0 !== this.facade.player.getAutoplay() && this.facade.applyClickHandler()
        };
        var ig = function() {
            ig.__super__.constructor.call(this)
        };
        f(ig, puremvc.SimpleCommand);
        ig.prototype.execute = function(a) {
            this.facade.applyClickHandler(!1)
        };
        var jg = function() {
            jg.__super__.constructor.call(this)
        };
        f(jg, puremvc.SimpleCommand);
        jg.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(ma.NAME).start()
            };
        var Ue = function() {
            Ue.__super__.constructor.call(this)
        };
        f(Ue, A);
        Ue.prototype.execute = function(a) {
            !0 === this.plugin.config["native"] ? this.player.getMediaElement().controls = !1 : this.proxy.adBreakStart()
        };
        var lb = function(a, b) {
            lb.__super__.constructor.call(this, a, b)
        };
        f(lb, I);
        lb.NAME = "ControlsWrapper";
        lb.prototype.mode = "auto";
        lb.prototype.autoHide = 5;
        lb.prototype.flashView = {
            elements: {
                controls: {
                    attributes: {
                        height: "28",
                        itemMargin: "5",
                        scrubPosition: "inline"
                    },
                    elements: {
                        replayBtn: {},
                        playPauseBtn: {},
                        streamTimeIndicator: {
                            attributes: {
                                exclude: "live"
                            },
                            elements: {
                                streamTime: {},
                                streamDuration: {}
                            }
                        },
                        rewindBtn: {},
                        scrubBar: {
                            attributes: {
                                style: "height: 18px;"
                            }
                        },
                        progressBar: {
                            attributes: {
                                style: "background: linear-gradient(90deg, #FF0000, #1B1B1B);"
                            }
                        },
                        loadedBar: {
                            attributes: {
                                style: "background: linear-gradient(90deg, #00FF00, #1B1B1B);"
                            }
                        },
                        liveIndicator: {},
                        timeLocationIndicator: {},
                        goLiveBtn: {},
                        statsBtn: {},
                        volumeBar: {
                            attributes: {
                                color: "#CA2127"
                            }
                        },
                        volumeBtn: {},
                        fullscreenBtn: {}
                    }
                }
            }
        };
        lb.prototype.listNotificationInterests = function() {
            return lb.__super__.listNotificationInterests.apply(this, arguments).concat([d.MEDIUM_CHANGE])
        };
        lb.prototype.handleNotification = function(a) {
            var b;
            lb.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.MEDIUM_CHANGE:
                    b = /audio/.test(a) ? "persistent" : this.mode, this.setMode(b)
            }
        };
        lb.prototype.createFlashVars = function(a) {
            null != this.config.mode && (this.mode = a.controls_mode = this.config.mode);
            null != this.config.admode && this.config.admode !==
            this.config.mode && (a.ads_auto_fit = !0);
            return a
        };
        lb.prototype.createXML = function(a) {
            var b, c, e;
            b = null != (c = this.player.flashView) ? null != (e = c.elements) ? e.controls : void 0 : void 0;
            if (null != b) return null != b.attributes.autoHideDelay ? this.autoHide = b.attributes.autoHideDelay : null != this.config.autoHide && (this.autoHide = this.config.autoHide, b.attributes.autoHideDelay = this.config.autoHide), a
        };
        lb.prototype.getMode = function() {
            return this.mode
        };
        lb.prototype.setMode = function(a) {
            if (a !== this.mode) {
                try {
                    this.mode = a, this.player.mediaElement.setPlayerProperty("controlsMode",
                        a)
                } catch (b) {
                    this.facade.logger.error("[AMP CONTROLS ERROR]", b)
                }
                return a
            }
        };
        lb.prototype.getAutoHide = function() {
            return this.autoHide
        };
        var ma = function(a) {
            ma.__super__.constructor.call(this, a)
        };
        f(ma, x);
        ma.NAME = x.NAME;
        ma.prototype.defaults = {
            mode: "auto",
            autoHide: 3,
            admode: null
        };
        ma.prototype.timeout = null;
        ma.prototype.appState = null;
        ma.prototype.controls = null;
        ma.prototype.interactiveElement = null;
        ma.prototype.idleUtil = null;
        ma.prototype.initializeNotifier = function(a) {
            ma.__super__.initializeNotifier.call(this,
                a);
            this.appState = this.facade.player.retrieveProxy(B.NAME);
            this.controls = this.facade.retrieveMediator(B.NAME)
        };
        ma.prototype.onRegister = function() {
            var a = this;
            ma.__super__.onRegister.call(this);
            null != this.config.mode && this.changeMode(this.config.mode);
            this.interactiveElement = this.facade.player.getContainer();
            "desktop" === g.getDevice() ? (m.create(this.interactiveElement, "mouseenter", function() {
                a.stop();
                a.appState.activeState !== kb.ACTIVE && a.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE)
            }), m.create(this.interactiveElement,
                "mouseleave",
                function() {
                    a.start()
                }), this.idleUtil = new sb(this.facade.player.getViewComponent(), 1E3 * this.data.autoHide), this.idleUtil.addEventListener("activechange", function(b) {
                a.sendNotification(d.CHANGE_ACTIVE_STATE, !0 !== b.detail.active ? kb.INACTIVE : kb.ACTIVE)
            }), this.idleUtil.start(), m.create(this.facade.player.getMediaElement(), "click", function() {
                a.sendNotification($.TOGGLE_PLAY_PAUSE)
            })) : m.create(this.interactiveElement, m.CLICK, function() {
                a.sendNotification(d.TOGGLE_ACTIVE)
            })
        };
        ma.prototype.setMode =
            function(a) {
                if (this.data.mode === a) return a;
                this.changeMode(a);
                return a
            };
        ma.prototype.changeMode = function(a) {
            "auto" === this.data.mode && this.stop();
            this.facade.sendNotification(d.REMOVE_APPLICATION_STATE, "controls-" + this.data.mode);
            this.data.mode = a;
            this.facade.sendNotification(d.ADD_APPLICATION_STATE, "controls-" + this.data.mode)
        };
        ma.prototype.getMode = function() {
            return this.data.mode
        };
        ma.prototype.setAutoHide = function(a) {
            return this.data.autoHide = a
        };
        ma.prototype.getAutoHide = function() {
            return this.data.autoHide
        };
        ma.prototype.adBreakStart = function() {
            null != this.data.admode && (this.config.mode = this.getMode(), this.setMode(this.data.admode))
        };
        ma.prototype.adBreakEnd = function() {
            null != this.data.admode && this.setMode(this.config.mode)
        };
        ma.prototype.start = function() {
            this.stop();
            "auto" === this.data.mode && (this.timeout = setTimeout(this.hide.bind(this), 1E3 * this.data.autoHide))
        };
        ma.prototype.stop = function() {
            clearTimeout(this.timeout);
            this.timeout = null
        };
        ma.prototype.hide = function() {
            "auto" === this.data.mode && (!0 !== this.appState.getIsUserActive() &&
            !g.isMouseOverElement(this.facade.viewComponent) || this.appState.getDisplayState() === ja.FULL_SCREEN ? this.facade.sendNotification(d.CHANGE_ACTIVE_STATE, kb.INACTIVE) : this.start())
        };
        var Dc = function() {
            Dc.__super__.constructor.call(this)
        };
        f(Dc, na);
        Dc.prototype.componentName = "title-bar";
        Dc.prototype.title = null;
        Dc.prototype.description = null;
        Dc.prototype.onRegister = function() {
            Dc.__super__.onRegister.call(this);
            this.title = this.create("title-text");
            this.description = this.create("description-text")
        };
        Dc.prototype.listNotificationInterests =
            function() {
                return [d.CHANGE_MEDIA]
            };
        Dc.prototype.handleNotification = function(a) {
            var b;
            switch (a.getName()) {
                case d.CHANGE_MEDIA:
                    a = a.getBody(), b = this.facade.player.evaluateBinding(a.title), null == b || "" === b || "undefined" === b ? this.classList.add("hidden") : (this.title.innerHTML = b, this.description.innerHTML = a.description ? a.description : "", this.classList.remove("hidden"))
            }
        };
        var Vc = function() {
            Vc.__super__.constructor.call(this)
        };
        f(Vc, Ib);
        Vc.prototype.message = null;
        Vc.prototype.componentName = "error";
        Vc.prototype.onRegister =
            function() {
                Vc.__super__.onRegister.call(this);
                this.message = this.create("error-message")
            };
        Vc.prototype.listNotificationInterests = function() {
            return [d.ERROR]
        };
        Vc.prototype.handleNotification = function(a) {
            var b;
            switch (a.getName()) {
                case d.ERROR:
                    a = a.getBody();
                    b = "Error: ";
                    switch (a.code) {
                        case MediaError.MEDIA_ERR_ABORTED:
                            b += "Media was aborted.";
                            break;
                        case MediaError.MEDIA_ERR_DECODE:
                            b += "Decode Error.";
                            break;
                        case MediaError.MEDIA_ERR_NETWORK:
                            b += "Network Error.";
                            break;
                        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            b +=
                                "Source not supported.";
                            break;
                        default:
                            b += a
                    }
                    this.message.textContent = b
            }
        };
        var kg = function() {
            kg.__super__.constructor.call(this)
        };
        f(kg, na);
        kg.prototype.componentName = "loading";
        var kd = function() {
            kd.__super__.constructor.call(this)
        };
        f(kd, na);
        kd.prototype.componentName = "waiting";
        kd.prototype.bar = null;
        kd.prototype.text = null;
        kd.prototype.onRegister = function() {
            kd.__super__.onRegister.call(this);
            this.bar = this.create("waiting-bar");
            this.text = this.createText("waiting-text", this.localizationManager.getString(D.MSG_BUFFERING))
        };
        var hc = function() {
            hc.__super__.constructor.call(this)
        };
        f(hc, na);
        hc.prototype.componentName = "poster";
        hc.prototype.poster = null;
        hc.prototype.clickHandler = null;
        hc.prototype.onRegister = function() {
            hc.__super__.onRegister.call(this);
            this.poster = this.create("poster-content");
            this.poster.onclick = this.onclick.bind(this)
        };
        hc.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            a.preventDefault();
            this.sendNotification($.TOGGLE_PLAY_PAUSE, !0);
            return !1
        };
        hc.prototype.listNotificationInterests = function() {
            return [d.CHANGE_MEDIA]
        };
        hc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case d.CHANGE_MEDIA:
                    a = a.getBody().poster, a = null != a && "" !== a ? '\x3cimg src\x3d"' + a + '" class\x3d"' + this.cssPrefix + 'poster-image" /\x3e' : "", this.poster.innerHTML = a
            }
        };
        var ld = function() {
            ld.__super__.constructor.call(this)
        };
        f(ld, na);
        ld.prototype.componentName = "end-slate";
        ld.prototype.onRegister = function() {
            null != this.config.getEndSlate() && ld.__super__.onRegister.call(this)
        };
        ld.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE]
        };
        ld.prototype.handleNotification = function(a) {
            var b, c, e;
            switch (a.getName()) {
                case d.MEDIA_CHANGE:
                    c = a.getBody(), b = this.config.getEndSlate(), e = this.getViewComponent(), a = "", null != b && (b = !0 === b.usePoster ? c.poster : b.url, null != b && "" !== b && (a = '\x3cimg src\x3d"' + b + '" class\x3d"end-slate-image" /\x3e')), null != e && (e.innerHTML = a)
            }
        };
        var Da = function(a, b, c, e, d) {
            this.labelText = a;
            this.onclick = null != d ? d : this.onclick;
            Da.__super__.constructor.call(this, e, null, b, c)
        };
        f(Da, ba);
        Da.prototype.componentType = "button";
        Da.prototype.icon =
            null;
        Da.prototype.label = null;
        Da.prototype.onclick = null;
        Da.prototype.labelText = null;
        Da.prototype.onRegister = function() {
            Da.__super__.onRegister.call(this);
            this.icon = this.create("icon");
            this.createLabel(this.labelText)
        };
        Da.prototype.createLabel = function(a) {
            null != a && (this.label = this.createText("label", a))
        };
        Da.prototype.setLabel = function(a) {
            null == this.label ? this.createLabel(a) : this.label.textContent = a;
            return a
        };
        Da.prototype.getLabel = function() {
            var a;
            return null != (a = this.label) ? a.textContent : void 0
        };
        var md =
            function(a) {
                md.__super__.constructor.call(this, null, null, a)
            };
        f(md, ba);
        md.prototype.componentName = "logo";
        md.prototype.url = null;
        md.prototype.onRegister = function() {
            md.__super__.onRegister.call(this);
            this.sendNotification(d.ADD_CONTROL_STATE, this.componentName + "-enabled")
        };
        md.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification(d.DISPATCH_EVENT, new V("controlsLogoClicked"));
            return !1
        };
        var Ec = function(a) {
            Ec.__super__.constructor.call(this, null, a)
        };
        f(Ec, Da);
        Ec.prototype.componentName =
            "full-screen";
        Ec.prototype.onRegister = function() {
            Ec.__super__.onRegister.call(this);
            this.sendNotification(d.ADD_CONTROL_STATE, this.componentName + "-enabled")
        };
        Ec.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification(d.TOGGLE_FULL_SCREEN);
            return !1
        };
        Ec.prototype.listNotificationInterests = function() {
            return [d.DISABLE_FULL_SCREEN, d.ENABLE_FULL_SCREEN]
        };
        Ec.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a.getBody();
            switch (b) {
                case d.DISABLE_FULL_SCREEN:
                    this.setDisabled(!0);
                    break;
                case d.ENABLE_FULL_SCREEN:
                    this.setDisabled(!1)
            }
        };
        var S = function(a, b) {
            this.direction = null != b ? b : this.direction;
            S.__super__.constructor.call(this, null, null, a)
        };
        f(S, ba);
        S.prototype.componentType = "slider";
        S.prototype.trackView = null;
        S.prototype.handleView = null;
        S.prototype.valueView = null;
        S.prototype.startCapView = null;
        S.prototype.endCapView = null;
        S.prototype.clickView = null;
        S.prototype.min = 0;
        S.prototype.max = 1;
        S.prototype.value = 0;
        S.prototype.draggable = !1;
        S.prototype.dragging = !1;
        S.prototype.draggingInterval =
            null;
        S.prototype.draggingDelay = 250;
        S.prototype.direction = "vertical";
        S.prototype.pressHandler = null;
        S.prototype.releaseHandler = null;
        S.prototype.moveHandler = null;
        S.prototype.clickHandler = null;
        S.prototype.onRegister = function() {
            S.__super__.onRegister.call(this);
            this.startCapView = this.create("start-cap");
            this.endCapView = this.create("end-cap");
            this.trackView = this.create("track");
            this.valueView = this.create("value", this.trackView);
            this.clickView = this.create("click", this.trackView);
            this.handleView = this.create("handle",
                this.trackView);
            this.pressHandler = m.create(this.handleView, m.PRESS, this.handlePressHandler.bind(this));
            this.releaseHandler = m.create(window, m.RELEASE, this.handleReleaseHandler.bind(this));
            this.releaseHandler.unbind();
            this.moveHandler = m.create(window, m.MOVE, this.updateHandler.bind(this, this.draggable));
            this.moveHandler.unbind();
            this.clickHandler = m.create(this.clickView, m.CLICK, this.updateHandler.bind(this, !0))
        };
        S.prototype.setDirection = function(a) {
            return this.direction = a
        };
        S.prototype.getDirection = function() {
            return this.direction
        };
        S.prototype.setValue = function(a) {
            this.updateValue(a);
            this.valueChanged();
            return a
        };
        S.prototype.getValue = function() {
            return this.value
        };
        S.prototype.setDragging = function(a) {
            if (a !== this.dragging) return this.dragging = a, this.sendNotification(d.IS_USER_ACTIVE, this.dragging), !0 === this.dragging ? this.draggingInterval = setInterval(this.valueChanged.bind(this), this.draggingDelay) : (clearInterval(this.draggingInterval), this.valueChanged()), this.dragging
        };
        S.prototype.getDragging = function() {
            return this.dragging
        };
        S.prototype.setDraggable = function(a) {
            if (a !== this.draggable) return this.draggable = a
        };
        S.prototype.getDraggable = function() {
            return this.draggable
        };
        S.prototype.updateValue = function(a) {
            var b;
            a !== this.value && (this.value = g.clamp(a, this.min, this.max), "vertical" === this.direction ? (a = "height", b = "bottom") : (a = "width", b = "left"), this.valueView.style[a] = this.handleView.style[b] = "" + 100 * this.value + "%")
        };
        S.prototype.calculateValue = function(a) {
            var b, c;
            b = a.clientX || a.targetTouches[0].clientX;
            a = a.clientY || a.targetTouches[0].clientY;
            c = g.getElementOffset(this.viewComponent);
            b = "vertical" === this.getDirection() ? 1 - (a - c.top) / c.height : (b - c.left) / c.width;
            return g.clamp(b, 0, 1)
        };
        S.prototype.handlePressHandler = function(a) {
            this.moveHandler.bind();
            this.releaseHandler.bind();
            this.clickHandler.unbind();
            this.setDragging(!0);
            null != a && a.stopImmediatePropagation();
            return !1
        };
        S.prototype.handleReleaseHandler = function(a) {
            this.moveHandler.unbind();
            this.releaseHandler.unbind();
            this.clickHandler.bind();
            this.setDragging(!1);
            null != a && a.stopImmediatePropagation();
            return !1
        };
        S.prototype.updateHandler = function(a, b) {
            var c;
            null != b && b.stopImmediatePropagation();
            c = this.calculateValue(b);
            !0 === a ? this.setValue(c) : this.updateValue(c);
            return !1
        };
        S.prototype.valueChanged = function() {};
        var bb = {
                ADD_PANEL: "addPanel",
                REMOVE_PANEL: "removePanel",
                OPEN_PANEL: "openPanel",
                CLOSE_PANEL: "closePanel",
                TOGGLE_PANEL: "togglePanel",
                CLOSE_ALL_PANELS: "closeAllPanels"
            },
            tb = function(a) {
                tb.__super__.constructor.call(this, null, null, a)
            };
        f(tb, ba);
        tb.prototype.componentName = "time-display";
        tb.prototype.duration =
            null;
        tb.prototype.currentTimeDisplay = null;
        tb.prototype.separatorDisplay = null;
        tb.prototype.durationDisplay = null;
        tb.prototype.liveDisplay = null;
        tb.prototype.onRegister = function() {
            tb.__super__.onRegister.call(this);
            this.liveDisplay = this.createText("live-display", this.localizationManager.getString(D.MSG_LIVE));
            this.currentTimeDisplay = this.createText("current-time-display", "00:00", this, "span");
            this.separatorDisplay = this.createText("separator-display", this.localizationManager.getString(D.MSG_TIME_SEPARATOR),
                this, "span");
            this.durationDisplay = this.createText("duration-display", "00:00", this, "span")
        };
        tb.prototype.listNotificationInterests = function() {
            return [d.PLAY, d.DURATION_CHANGE, d.ENDED, d.DISPLAY_TIME]
        };
        tb.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.PLAY:
                    this.updateDuration();
                    break;
                case d.DURATION_CHANGE:
                    this.duration = a;
                    this.updateCurrentTime();
                    this.updateDuration();
                    break;
                case d.ENDED:
                    this.updateCurrentTime(this.duration);
                    this.updateDuration();
                    break;
                case d.DISPLAY_TIME:
                    this.updateCurrentTime(a.currentTime,
                        a.duration), this.updateDuration(a.duration)
            }
        };
        tb.prototype.updateCurrentTime = function(a, b) {
            null == a && (a = this.currentTime);
            null == b && (b = this.duration);
            this.currentTimeDisplay.textContent = g.formatTimecode(a, b)
        };
        tb.prototype.updateDuration = function(a) {
            null == a && (a = this.duration);
            this.durationDisplay.textContent = g.formatTimecode(a)
        };
        var Wc = function(a) {
            Wc.__super__.constructor.call(this, null, a)
        };
        f(Wc, Da);
        Wc.prototype.componentName = "go-live";
        Wc.prototype.onRegister = function() {
            Wc.__super__.onRegister.call(this);
            this.createLabel(this.localizationManager.getString("MSG_LIVE"))
        };
        Wc.prototype.listNotificationInterests = function() {
            return [d.IS_LIVE]
        };
        Wc.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.IS_LIVE:
                    this.setLabel(!0 === a ? this.localizationManager.getString("MSG_LIVE") : this.localizationManager.getString("MSG_GO_LIVE"))
            }
        };
        Wc.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            a.preventDefault();
            return !1
        };
        var mb = function(a) {
            this.panels = [];
            this.closeHandler =
                this.mouseupHandler.bind(this);
            mb.__super__.constructor.call(this, null, null, a)
        };
        f(mb, ba);
        mb.prototype.componentName = "panels";
        mb.prototype.activePanel = null;
        mb.prototype.panels = null;
        mb.prototype.closeHandler = null;
        mb.prototype.listNotificationInterests = function() {
            var a, b, c;
            c = [];
            for (a in bb) b = bb[a], c.push(b);
            return c.concat([])
        };
        mb.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case bb.ADD_PANEL:
                    this.addPanel(a);
                    break;
                case bb.REMOVE_PANEL:
                    this.removePanel(a);
                    break;
                case bb.OPEN_PANEL:
                    this.openPanel(a);
                    break;
                case bb.CLOSE_PANEL:
                    this.closePanel(a);
                    break;
                case bb.CLOSE_ALL_PANELS:
                    this.closeAllPanels(a);
                    break;
                case bb.TOGGLE_PANEL:
                    this.togglePanel(a)
            }
        };
        mb.prototype.addPanel = function(a) {
            this.panels.push(a);
            this.viewComponent.appendChild(a.getViewComponent())
        };
        mb.prototype.removePanel = function(a) {
            this.panels.splice(this.panels.indexOf(a), 1);
            this.viewComponent.removeChild(a.getViewComponent())
        };
        mb.prototype.openPanel = function(a) {
            a !== this.activePanel && null != a && (this.closeAllPanels(),
                this.activePanel = a, this.activePanel.classList.add("active"), "desktop" !== g.getDevice() && this.sendNotification(d.IS_USER_ACTIVE, !0), document.addEventListener("mouseup", this.closeHandler))
        };
        mb.prototype.closePanel = function(a) {
            a.classList.remove("active");
            null != this.activePanel && (this.activePanel = null, "desktop" !== g.getDevice() && this.sendNotification(d.IS_USER_ACTIVE, !1), document.removeEventListener("mouseup", this.closeHandler))
        };
        mb.prototype.togglePanel = function(a) {
            a === this.activePanel ? this.closePanel(a) :
                this.openPanel(a)
        };
        mb.prototype.closeAllPanels = function() {
            var a, b, c, e;
            e = this.panels;
            b = 0;
            for (c = e.length; b < c; b++) a = e[b], this.closePanel(a)
        };
        mb.prototype.mouseupHandler = function(a) {
            var b, c;
            b = document.elementFromPoint(a.clientX, a.clientY);
            c = this.activePanel.getViewComponent();
            a = this.activePanel.control.getViewComponent();
            b !== c && !1 === c.contains(b) && b !== a && !1 === a.contains(b) && this.closeAllPanels()
        };
        var P = function(a) {
            P.__super__.constructor.call(this, a, "horizontal")
        };
        f(P, S);
        P.prototype.componentName = "progress";
        P.prototype.bufferValue = null;
        P.prototype.scrubTime = null;
        P.prototype.scrubTimeSeparator = null;
        P.prototype.cuePoints = null;
        P.prototype.cues = null;
        P.prototype.duration = 0;
        P.prototype.isLive = !1;
        P.prototype.seeking = !1;
        P.prototype.previewData = {
            src: null,
            previewWidth: null,
            previewHeight: null,
            imgWidth: null,
            imgHeight: null,
            count: null
        };
        P.prototype.hoverHandler = null;
        P.prototype.mouseoutHandler = null;
        P.prototype.mouseMoveHandler = null;
        P.prototype.previewMoveHandler = null;
        P.prototype.onRegister = function() {
            P.__super__.onRegister.call(this);
            this.bufferValue = this.create("buffer-value", !1);
            this.trackView.insertBefore(this.bufferValue, this.trackView.lastChild);
            this.cuePoints = this.create("cue-points", this.trackView);
            this.scrubTimeSeparator = this.create("scrub-time-separator");
            this.scrubTime = this.create("scrub-time");
            this.thumbPreview = this.create("thumb-preview", this.trackView);
            this.previewMoveHandler = m.create(this.clickView, m.MOVE, this.updatePreviewHandler.bind(this));
            this.previewMoveHandler.unbind();
            this.hoverHandler = m.create(this.clickView,
                m.HOVER, this.handlehoverHandler.bind(this));
            this.mouseoutHandler = m.create(this.clickView, m.HOVEROUT, this.handlemouseoutHandler.bind(this));
            this.mouseoutHandler.unbind();
            m.create(this.clickView, m.HOVER, this.mouseOverHandler.bind(this));
            m.create(this.clickView, m.HOVEROUT, this.mouseOutHandler.bind(this));
            this.mouseMoveBinding = m.create(document, m.MOVE, this.mouseMoveHandler.bind(this));
            this.mouseMoveBinding.unbind()
        };
        P.prototype.listNotificationInterests = function() {
            return [d.ENDED, d.MEDIA_CHANGE, d.DURATION_CHANGE,
                d.PROGRESS, d.ADD_CUE_POINTS, d.REMOVE_CUE_POINTS, d.DISPLAY_TIME
            ]
        };
        P.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.MEDIA_CHANGE:
                    this.isLive = "live" === a.temporalType;
                    this.updateValue(0);
                    this.bufferValue.style.width = "0%";
                    this.updatePreview(a.metadata);
                    break;
                case d.PROGRESS:
                    b = g.clamp(100 * (a / this.duration), 0, 100);
                    this.bufferValue.style.width = b + "%";
                    break;
                case d.DURATION_CHANGE:
                    this.duration = a;
                    this.updateCuePoints();
                    break;
                case d.ENDED:
                    this.updateValue(1);
                    break;
                case d.ADD_CUE_POINTS:
                    this.cues = a;
                    this.updateCuePoints();
                    break;
                case d.REMOVE_CUE_POINTS:
                    this.removeCuePoints();
                    break;
                case d.DISPLAY_TIME:
                    !1 === this.dragging && this.updateValue(a.currentTime / a.duration, a.duration)
            }
        };
        P.prototype.updateCuePoints = function() {
            var a, b, c, e, d;
            if (null != this.cues && 0 !== this.cues.length && (null == (null != (a = this.facade.player.config) ? null != (b = a.controls) ? b.displaySceneMarkers : void 0 : void 0) || !1 !== this.facade.player.config.controls.displaySceneMarkers))
                for (this.removeCuePoints(), d =
                    this.cues, c = 0, e = d.length; c < e; c++) a = d[c], 0 !== a && -1 !== a && (b = this.create("cue-point", this.cuePoints), b.style.left = 100 * (a / this.duration) + "%")
        };
        P.prototype.preloadPreviewImages = function(a) {
            var b, c;
            for (b = 1; b < a.previewThumbnailCount;) c = new Image, c.src = a.previewThumbnailSrc + "out" + b + ".png", b++
        };
        P.prototype.updatePreview = function(a) {
            this.preloadPreviewImages(a);
            this.previewData.src = a.previewThumbnailSrc;
            this.previewData.previewHeight = a.previewThumbnailHeight;
            this.previewData.previewWidth = a.previewThumbnailWidth;
            this.previewData.count = a.previewThumbnailCount;
            void 0 === this.previewData.src && this.hoverHandler.unbind()
        };
        P.prototype.handlehoverHandler = function(a) {
            this.previewMoveHandler.bind();
            this.mouseoutHandler.bind();
            this.hoverHandler.unbind();
            this.updatePreviewHandler(a);
            a.stopImmediatePropagation();
            return !1
        };
        P.prototype.handlemouseoutHandler = function(a) {
            this.previewMoveHandler.unbind();
            this.mouseoutHandler.unbind();
            this.hoverHandler.bind();
            a.stopImmediatePropagation();
            return !1
        };
        P.prototype.mouseOverHandler =
            function(a) {
                this.mouseOver = !0;
                this.classList.add("active");
                this.mouseMoveBinding.bind()
            };
        P.prototype.mouseOutHandler = function(a) {
            this.mouseOver = !1;
            !0 !== this.getDragging() && (this.classList.remove("active"), this.mouseMoveBinding.unbind())
        };
        P.prototype.mouseMoveHandler = function(a) {
            a = this.calculateValue(a);
            this.scrubTime.textContent = g.formatTimecode(Math.round(a * this.duration));
            this.scrubTime.style.left = this.scrubTimeSeparator.style.left = "" + (100 * a).toFixed(2) + "%"
        };
        P.prototype.updatePreviewHandler = function(a) {
            a =
                this.calculateValue(a);
            this.previewInterval = this.duration / this.previewData.count;
            this.previewImgIndex = Math.floor(a * this.duration / this.previewInterval);
            this.previewData.src && (this.thumbPreview.style.backgroundImage = "url(" + this.previewData.src + "out" + (this.previewImgIndex + 1) + ".png)");
            this.thumbPreview.style.width = this.previewData.previewWidth + "px";
            this.thumbPreview.style.height = this.previewData.previewHeight + "px";
            a = g.clamp((100 * a - 10).toFixed(2), 1, 80);
            this.thumbPreview.style.left = "" + a + "%"
        };
        P.prototype.removeCuePoints =
            function() {
                null != this.cuePoints && (this.cuePoints.innerHTML = "")
            };
        P.prototype.valueChanged = function() {
            this.sendNotification($.SEEK, this.value * this.facade.player.retrieveProxy(t.NAME).getDuration())
        };
        P.prototype.updateValue = function(a) {
            a !== this.value && (!0 === this.isLive && (a = 1), !0 === isNaN(a) && (a = 0), P.__super__.updateValue.call(this, a), this.getDragging() && this.value >= this.max && (this.handleReleaseHandler(), this.sendNotification(d.END)))
        };
        P.prototype.updateHandler = function(a, b) {
            P.__super__.updateHandler.call(this,
                a, b);
            this.mouseMoveHandler(b)
        };
        P.prototype.handlePressHandler = function(a) {
            P.__super__.handlePressHandler.call(this, a);
            this.classList.add("scrubbing")
        };
        P.prototype.handleReleaseHandler = function(a) {
            P.__super__.handleReleaseHandler.call(this, a);
            this.classList.remove("scrubbing");
            !1 === this.mouseOver && this.mouseOutHandler()
        };
        var Ve = function(a) {
            Ve.__super__.constructor.call(this, null, a)
        };
        f(Ve, Da);
        Ve.prototype.componentName = "play-pause";
        Ve.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            a.preventDefault();
            this.sendNotification($.TOGGLE_PLAY_PAUSE);
            return !1
        };
        var Fc = function() {
            Fc.__super__.constructor.call(this)
        };
        f(Fc, na);
        Fc.prototype.componentName = "replay";
        Fc.prototype.replay = null;
        Fc.prototype.icon = null;
        Fc.prototype.label = null;
        Fc.prototype.onRegister = function() {
            Fc.__super__.onRegister.call(this);
            this.replay = this.create("replay-button");
            this.replay.onclick = this.onclick.bind(this);
            this.icon = this.create("replay-icon", this.replay);
            this.label = this.createText("replay-label", this.localizationManager.getString(D.MSG_REPLAY),
                this.replay)
        };
        Fc.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification(d.REPLAY);
            return !1
        };
        var Xc = function() {
            Xc.__super__.constructor.call(this)
        };
        f(Xc, na);
        Xc.prototype.componentName = "context-menu";
        Xc.prototype.contextMenu = null;
        Xc.prototype.onRegister = function() {
            var a = this;
            Xc.__super__.onRegister.call(this);
            m.create(this.facade.player.viewComponent, m.CONTEXTMENU, function(b) {
                b.preventDefault();
                a.contextMenuHandler(b);
                return !1
            })
        };
        Xc.prototype.contextMenuHandler = function(a) {
            var b,
                c, e = this;
            this.contextMenu && this.removeContextMenu();
            this.contextMenu = $a.create("context-menu", document.body, "ul");
            $a.create("context-item", this.contextMenu, "li", this.facade.player.getVersion());
            "undefined" !== typeof akamaiGetViewerId && null !== akamaiGetViewerId && (b = akamaiGetViewerId(), c = $a.create("context-item", this.contextMenu, "li", "" + (this.localizationManager.getString("MSG_VIEWER_ID") || "Viewer ID: ")), $a.create("selectable", c, "span", "" + (null != b ? b : "N/A")));
            this.contextMenu.style.top = a.pageY + "px";
            this.contextMenu.style.left =
                a.pageX + "px";
            m.create(document.body, m.CLICK, function(a) {
                if (/selectable/.test(a.target.className)) return !1;
                e.removeContextMenu(a);
                return !1
            })
        };
        Xc.prototype.removeContextMenu = function(a) {
            try {
                m.clear(document.body, m.CLICK), document.body.removeChild(this.contextMenu), this.contextMenu = null
            } catch (b) {}
        };
        var k = {
                BREAK_START: "adsbreakstart",
                BREAK_END: "adsbreakend",
                BREAK_SKIPPED: "adsbreakskipped",
                AD_CONTAINER_CREATED: "adscontainercreated",
                AD_LOADED: "adsloaded",
                AD_MANAGER_LOADED: "adsmanagerloaded",
                AD_STARTED: "adsstarted",
                AD_TIME_UPDATE: "adstimeupdate",
                AD_TIME_REMAINING: "adstimeremaining",
                AD_DURATION_CHANGE: "adsdurationchange",
                AD_ENDED: "adsended",
                AD_ERROR: "adserror",
                AD_PLAY: "adsplay",
                AD_PAUSE: "adspause",
                AD_PAUSED: "adspaused",
                AD_RESUME: "adsresume",
                AD_CLICKED: "adclicked",
                AD_COMPANION: "adscompanion",
                FIRST_QUARTILE: "adsfirstquartile",
                MIDPOINT: "adsmidpoint",
                THIRD_QUARTILE: "adsthirdquartile",
                COMPLETE: "adscomplete",
                LOG: "adslog",
                REQUEST: "adsrequest",
                REQUEST_COMPLETE: "adsrequestcomplete",
                RESPONSE: "adsresponse",
                SKIPPED: "adsskipped",
                IMPRESSION: "adsimpression"
            },
            Tb = function() {
                Tb.__super__.constructor.call(this)
            };
        f(Tb, Ib);
        Tb.prototype.componentName = "controls";
        Tb.prototype.activeControlPanel = null;
        Tb.prototype.controlBar = null;
        Tb.prototype.panels = null;
        Tb.prototype.onRegister = function() {
            var a;
            this.facade.registerMediator(new Vc);
            !0 !== this.facade.player.config.debug && this.facade.player.config.contextmenu && !1 !== this.facade.player.config.contextmenu.enabled && this.facade.registerMediator(new Xc);
            Tb.__super__.onRegister.call(this);
            this.facade.viewComponent =
                this.viewComponent;
            this.facade.registerMediator(new hc);
            this.facade.registerMediator(new kg);
            this.facade.registerMediator(new kd);
            this.facade.registerMediator(new Fc);
            this.facade.registerMediator(new ld);
            !1 !== (null != (a = this.config.titlebar) ? a.enabled : void 0) && this.facade.registerMediator(new Dc);
            this.controlBar = this.create("control-bar");
            this.facade.registerMediator(new mb(this.viewComponent));
            this.facade.registerMediator(new Ve(this.controlBar));
            this.facade.registerMediator(new tb(this.controlBar));
            this.facade.registerMediator(new P(this.controlBar));
            null != this.facade.config.logo && this.facade.registerMediator(new md(this.controlBar));
            this.facade.registerMediator(new Wc(this.controlBar));
            this.create("separator", this.controlBar)
        };
        Tb.prototype.listNotificationInterests = function() {
            return [d.READY, d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE]
        };
        Tb.prototype.handleNotification = function(a) {
            var b, c;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.READY:
                    !1 !== (null != (c = a.fullscreen) ?
                        c.enabled : void 0) && this.facade.registerMediator(new Ec(this.controlBar));
                    break;
                case d.ADD_CONTROL_STATE:
                    this.classList.add(a);
                    break;
                case d.REMOVE_CONTROL_STATE:
                    this.classList.remove(a);
                    break;
                case d.ADD_CONTROL:
                    this.controlBar.appendChild(a);
                    break;
                case d.REMOVE_CONTROL:
                    this.controlBar.contains(a) && this.controlBar.removeChild(a)
            }
        };
        var l = function() {};
        l.create = function(a, b, c) {
            var e, d, f;
            d = Date.now();
            "string" === typeof a ? (e = document.getElementById(a), null == e && (e = document.querySelector(a))) : e = a;
            if (null ==
                e) throw Error("[AMP ERROR] Invalid container. Could not find DOM element: " + a);
            b = b instanceof yc ? b : yc.create(b);
            ia.enable(b.debug);
            a = this.getVersion();
            null == e.dataset && (e.dataset = {});
            e.dataset["amp.version"] = a;
            ia.log("[AMP] " + a);
            f = this.createPlayer(b, e);
            f.initTime = d;
            try {
                Object.defineProperties(f, {
                    src: {
                        get: f.getSrc,
                        set: f.setSrc,
                        enumerable: !0,
                        configurable: !1
                    },
                    media: {
                        get: f.getMedia,
                        set: f.setMedia,
                        enumerable: !0,
                        configurable: !1
                    },
                    currentTime: {
                        get: f.getCurrentTime,
                        set: f.setCurrentTime,
                        enumerable: !0,
                        configurable: !1
                    },
                    autoplay: {
                        get: f.getAutoplay,
                        set: f.setAutoplay,
                        enumerable: !0,
                        configurable: !1
                    },
                    duration: {
                        get: f.getDuration,
                        enumerable: !0,
                        configurable: !1
                    },
                    playState: {
                        get: f.getPlayState,
                        enumerable: !0,
                        configurable: !1
                    },
                    seeking: {
                        get: f.getSeeking,
                        enumerable: !0,
                        configurable: !1
                    },
                    paused: {
                        get: f.getPaused,
                        enumerable: !0,
                        configurable: !1
                    },
                    ended: {
                        get: f.getEnded,
                        enumerable: !0,
                        configurable: !1
                    },
                    volume: {
                        get: f.getVolume,
                        set: f.setVolume,
                        enumerable: !0,
                        configurable: !1
                    },
                    muted: {
                        get: f.getMuted,
                        set: f.setMuted,
                        enumerable: !0,
                        configurable: !1
                    },
                    mediaElement: {
                        get: f.getMediaElement,
                        enumerable: !0,
                        configurable: !1
                    },
                    textTracks: {
                        get: function() {
                            return f.getMediaElement().textTracks
                        },
                        enumerable: !0,
                        configurable: !1
                    },
                    container: {
                        get: f.getContainer,
                        enumerable: !0,
                        configurable: !1
                    },
                    loop: {
                        get: f.getLoop,
                        set: f.setLoop,
                        enumerable: !0,
                        configurable: !1
                    },
                    displayState: {
                        get: f.getDisplayState,
                        set: f.setDisplayState,
                        enumerable: !0,
                        configurable: !1
                    },
                    playbackRate: {
                        get: f.getPlaybackRate,
                        set: f.setPlaybackRate,
                        enumerable: !0,
                        configurable: !1
                    },
                    language: {
                        get: f.getLanguage,
                        set: f.setLanguage,
                        enumerable: !0,
                        configurable: !1
                    },
                    localization: {
                        get: function() {
                            return f.retrieveProxy(ra.NAME)
                        },
                        enumerable: !0,
                        configurable: !1
                    },
                    version: {
                        get: f.getVersion,
                        enumerable: !0,
                        configurable: !1
                    },
                    error: {
                        get: f.getError,
                        enumerable: !0,
                        configurable: !1
                    },
                    hidden: {
                        get: f.getHidden,
                        set: f.setHidden,
                        enumerable: !0,
                        configurable: !1
                    },
                    mediaTransforms: {
                        get: f.getMediaTransforms,
                        enumerable: !0,
                        configurable: !1
                    },
                    waiting: {
                        get: f.getWaiting,
                        enumerable: !0,
                        configurable: !1
                    }
                })
            } catch (h) {
                console.error(h)
            }
            e.amp = f;
            f.request = this.request.bind(this);
            f.loadResources = this.loadResources.bind(this);
            f.onready = c;
            f.initialize(b);
            return f
        };
        l.createPlayer = function(a, b) {
            var c;
            c = this.players[a.mode];
            null != c && (c = new c(b));
            return c
        };
        l.getVersion = function() {
            return this.VERSION
        };
        l.VERSION = "AMP Premier v2.71.18";
        l.defaults = new Ca;
        l.plugins = [];
        l.players = {};
        l.loadDefaults = function(a, b, c, e) {
            null == e && (e = !1);
            null != b && this.defaults.addEventListener("load", b);
            null != c && this.defaults.addEventListener("error", c);
            this.defaults.load(a, e)
        };
        l.getPlaybackMode =
            function() {
                return g.getPlaybackMode()
            };
        l.registerPlayer = function(a, b) {
            this.players[a] = b
        };
        l.registerPlugin = function(a, b, c) {
            var e, d, f;
            null == (e = this.plugins)[a] && (e[a] = {});
            "function" === typeof b && (c = [c, b], b = c[0], c = c[1]);
            "string" === typeof b && (b = [b]);
            null == b && (b = ["html", "flash"]);
            d = 0;
            for (f = b.length; d < f; d++) e = b[d], this.plugins[a][e] = c
        };
        l.resourceManager = null;
        l.getResourceManager = function() {
            null == this.resourceManager && (this.resourceManager = new yd);
            return this.resourceManager
        };
        l.addResource = function(a, b, c) {
            return this.getResourceManager().add(a,
                b, c)
        };
        l.addResources = function(a, b, c) {
            return this.getResourceManager().addResources(a, b, c)
        };
        l.loadResources = function(a) {
            var b = this;
            return new Promise(function(c, e) {
                return b.addResources(a, c, e)
            })
        };
        l.request = function(a) {
            return g.request(a)
        };
        l.getResource = function(a) {
            return this.getResourceManager().item(a)
        };
        l.removeResource = function(a) {
            return this.getResourceManager().remove(a)
        };
        l.evaluateBindings = function(a, b, c, e) {
            var d, f = this;
            null == e && (e = !0);
            if (null != a) {
                if ("object" === typeof a) {
                    e = !0 === e ? JSON.parse(JSON.stringify(a)) :
                        a;
                    if (a instanceof Array) return e.map(function(a) {
                        return f.evaluateBindings(a, b, c, !1)
                    });
                    a = {};
                    for (d in e) a[d] = this.evaluateBindings(e[d], b, c, !1);
                    return a
                }
                return a.replace(/(#|\$){([^#\$]*)}/g, function(e, d, n) {
                    try {
                        return (new Function("params", "with (this) { return " + n + " }")).bind(b)(c)
                    } catch (f) {
                        return a
                    }
                })
            }
        };
        l.registerPlayer("html", C);
        l.registerPlayer("flash", p);
        l.registerPlayer("none", ri);
        l.registerPlayer("external", aa);
        var We = function() {
            return We.__super__.constructor.apply(this, arguments)
        };
        f(We, I);
        We.NAME = "PlayOverlayWrapper";
        We.prototype.createFlashVars = function(a) {
            a.show_play_button_overlay = null != this.config.enabled ? this.config.enabled : !0;
            return a
        };
        l.registerPlugin("playoverlay", "flash", We);
        var Xe = function() {
            Xe.__super__.constructor.call(this)
        };
        f(Xe, na);
        Xe.prototype.componentName = "play";
        Xe.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            a.preventDefault();
            this.sendNotification($.TOGGLE_PLAY_PAUSE);
            return !1
        };
        var Na = function() {
            Na.__super__.constructor.call(this)
        };
        f(Na, M);
        Na.prototype.moduleName =
            "controls";
        Na.prototype.createFramework = function() {
            !0 === this.config["native"] ? (this.player.getMediaElement().controls = !0, this.player.sendNotification(d.ADD_APPLICATION_STATE, "controls-native"), this.registerCommand(d.MEDIA_VALIDATED, hg), this.registerCommand(k.BREAK_START, Ue), this.registerCommand(k.BREAK_END, Te), this.registerCommand(d.PLAY_REQUEST, ig), this.createView = function() {}) : Na.__super__.createFramework.call(this)
        };
        Na.prototype.applyClickHandler = function(a) {
            null == a && (a = !0);
            this.player.getMediaElement().onclick =
                a ? this.clickHandler.bind(this) : null;
            this.player.getMediaElement().onplay = a ? this.clickHandler.bind(this) : null
        };
        Na.prototype.clickHandler = function(a) {
            this.sendNotification($.TOGGLE_PLAY_PAUSE, !0)
        };
        Na.prototype.createController = function() {
            Na.__super__.createController.call(this);
            this.registerCommand(d.START, jg);
            this.registerCommand(d.PLAY, eg);
            this.registerCommand(d.PAUSE, fg);
            this.registerCommand(d.ACTIVE_STATE_CHANGE, gg);
            this.registerCommand(k.BREAK_START, Ue);
            this.registerCommand(k.BREAK_END, Te)
        };
        Na.prototype.createModel =
            function() {
                this.proxy = new ma(this.config);
                this.registerProxy(this.proxy)
            };
        Na.prototype.createView = function() {
            this.registerMediator(new Tb)
        };
        Na.prototype.listNotificationInterests = function() {
            var a, b, c;
            c = [];
            for (a in bb) b = bb[a], c.push(b);
            return c.concat([d.MEDIA_CHANGE, d.TIME_UPDATE, d.DURATION_CHANGE, d.PROGRESS, d.ENDED, d.ADD_CUE_POINTS, d.REMOVE_CUE_POINTS, d.DISABLE_FULL_SCREEN, d.ENABLE_FULL_SCREEN, d.READY, d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE, d.ACTIVE_STATE_CHANGE,
                d.START, d.PLAY, d.PAUSE, d.ERROR, k.BREAK_START, k.BREAK_END, d.CHANGE_MEDIA, d.DISPLAY_TIME, d.MEDIA_VALIDATED, d.STARTED, d.PLAY_REQUEST, d.IS_LIVE
            ])
        };
        Na.prototype.listNotificationPublications = function() {
            return Na.__super__.listNotificationPublications.call(this).concat([d.CHANGE_ACTIVE_STATE, d.TOGGLE_FULL_SCREEN, $.SEEK, d.TOGGLE_ACTIVE, $.TOGGLE_PLAY_PAUSE, d.END, d.REPLAY])
        };
        Na.prototype.setMode = function(a) {
            this.proxy.setMode(a);
            return a
        };
        Na.prototype.getMode = function() {
            return this.proxy.getMode()
        };
        Na.prototype.setAutoHide =
            function(a) {
                this.proxy.setAutoHide(a);
                return a
            };
        Na.prototype.getAutoHide = function() {
            return this.proxy.getAutoHide()
        };
        l.registerPlugin("controls", "html", Na);
        l.registerPlugin("controls", "flash", lb);
        l.registerPlugin("controls", "external", Na);
        var ub = function(a) {
            ub.__super__.constructor.call(this, a)
        };
        f(ub, R);
        ub.NAME = x.NAME;
        ub.prototype.defaults = {
            config: null,
            dimensions: null
        };
        ub.prototype.ready = function() {
            try {
                !0 === this.getDebug() && (window.AkamaiAnalytics_debug = 1), window.akamaiSetVideoObject(this.facade.player.getMediaElement())
            } catch (a) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]",
                    "Could not set video tag", a)
            }
        };
        ub.prototype.setDimensions = function(a) {
            var b, c, e;
            b = this.configurationData.source.dimensions;
            for (c in a) e = a[c], null != e && (b[c] = e);
            this.configurationData.parse(this.configurationData.source);
            this.applyDimensions(b);
            return a
        };
        ub.prototype.applyDimensions = function(a) {
            var b, c;
            if (null != window.setAkamaiMediaAnalyticsData) try {
                for (b in a) c = a[b], setAkamaiMediaAnalyticsData(b, c)
            } catch (e) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", "Could not set dimensions:", e)
            }
        };
        ub.prototype.setMedia =
            function(a) {
                var b, c;
                "function" === typeof akamaiSetStreamURL && akamaiSetStreamURL(a.src, !1);
                b = this.value.viewerId || this.value.viewerID || this.value["std:viewerId"];
                null != b && akamaiSetViewerId(b);
                b = null != (null != (c = a.mediaanalytics) ? c.dimensions : void 0) ? g.override(this.value.dimensions, a.mediaanalytics.dimensions) : this.value.dimensions;
                akamaiHandleStreamSwitch();
                this.applyDimensions(b);
                return a
            };
        ub.prototype.udpateMedia = function(a) {
            "function" === typeof akamaiHandleTitleSwitch && akamaiHandleTitleSwitch(a);
            return a
        };
        ub.prototype.fragmentLoadStart = function(a) {
            "function" === typeof fragmentDownloadStarted && fragmentDownloadStarted(a)
        };
        ub.prototype.fragmentLoaded = function(a) {
            "function" === typeof fragmentDownloadCompleted && fragmentDownloadCompleted(a)
        };
        ub.prototype.bitrateSwitch = function(a) {
            "function" === typeof akamaiHandleBitRateSwitch && akamaiHandleBitRateSwitch(a.bitrate)
        };
        var lg = function() {
            lg.__super__.constructor.call(this)
        };
        f(lg, puremvc.SimpleCommand);
        lg.prototype.execute = function(a) {
            this.facade.retrieveProxy(ub.NAME).ready()
        };
        var mg = function() {
            mg.__super__.constructor.call(this)
        };
        f(mg, A);
        mg.prototype.execute = function(a) {
            this.proxy.setMedia(a.getBody())
        };
        var ng = function() {
            ng.__super__.constructor.call(this)
        };
        f(ng, puremvc.SimpleCommand);
        ng.prototype.execute = function(a) {
            this.facade.player.getMediaElement().dataset.isad = !0
        };
        var og = function() {
            og.__super__.constructor.call(this)
        };
        f(og, puremvc.SimpleCommand);
        og.prototype.execute = function(a) {
            this.facade.player.getMediaElement().dataset.isad = !1
        };
        var pg = function() {
            pg.__super__.constructor.call(this)
        };
        f(pg, puremvc.SimpleCommand);
        pg.prototype.execute = function(a) {
            var b, c;
            try {
                c = a.getBody(), b = {
                    adDuration: c.duration,
                    adPartnerId: c.partner,
                    adTitle: c.title,
                    adId: c.id
                }, "function" === typeof akamaiHandleAdLoaded && akamaiHandleAdLoaded(b)
            } catch (e) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", e)
            }
        };
        var qg = function() {
            qg.__super__.constructor.call(this)
        };
        f(qg, A);
        qg.prototype.execute = function(a) {
            try {
                "function" === typeof akamaiHandleAdStarted && akamaiHandleAdStarted()
            } catch (b) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]",
                    b)
            }
        };
        var rg = function() {
            rg.__super__.constructor.call(this)
        };
        f(rg, A);
        rg.prototype.execute = function(a) {
            a = a.getBody();
            a = Math.round(100 * (a.currentTime / a.duration));
            try {
                25 <= a && 25 > this.proxy.percent ? (this.facade.logger.debug("MediaAnalytics: First Quartile"), "function" === typeof akamaiHandleAdFirstQuartile && akamaiHandleAdFirstQuartile()) : 50 <= a && 50 > this.proxy.percent ? (this.facade.logger.debug("MediaAnalytics: Second Quartile"), "function" === typeof akamaiHandleAdMidpoint && akamaiHandleAdMidpoint()) : 75 <= a && 75 >
                    this.proxy.percent && (this.facade.logger.debug("MediaAnalytics: Third Quartile"), "function" === typeof akamaiHandleAdThirdQuartile && akamaiHandleAdThirdQuartile())
            } catch (b) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]", b)
            }
            this.proxy.percent = a
        };
        var sg = function() {
            sg.__super__.constructor.call(this)
        };
        f(sg, puremvc.SimpleCommand);
        sg.prototype.execute = function(a) {
            try {
                "function" === typeof akamaiHandleAdCompleted && akamaiHandleAdCompleted()
            } catch (b) {
                this.facade.logger.error("[AMP MEDIA ANALYTICS ERROR]",
                    b)
            }
            this.facade.player.getMediaElement().dataset.isad = !0
        };
        var tg = function() {
            tg.__super__.constructor.call(this)
        };
        f(tg, A);
        tg.prototype.execute = function(a) {
            a = a.getBody();
            this.proxy.setDimensions(a)
        };
        var ug = function() {
            ug.__super__.constructor.call(this)
        };
        f(ug, A);
        ug.prototype.execute = function(a) {
            this.proxy.updatedMedia(a.getBody())
        };
        var vg = function() {
            vg.__super__.constructor.call(this)
        };
        f(vg, A);
        vg.prototype.execute = function(a) {
            this.proxy.fragmentLoadStart(a.getBody())
        };
        var wg = function() {
            wg.__super__.constructor.call(this)
        };
        f(wg, A);
        wg.prototype.execute = function(a) {
            this.proxy.fragmentLoaded(a.getBody())
        };
        var xg = function() {
            xg.__super__.constructor.call(this)
        };
        f(xg, A);
        xg.prototype.execute = function(a) {
            this.proxy.bitrateSwitch(a.getBody())
        };
        var Ub = function(a, b) {
            Ub.__super__.constructor.call(this, a, b)
        };
        f(Ub, I);
        Ub.NAME = "MediaAnalyticsWrapper";
        Ub.prototype.flashPlugins = [{
            id: "OSMFCSMALoader",
            host: "osmf",
            main: "com.akamai.playeranalytics.osmf.OSMFCSMALoaderInfo",
            type: "application/x-shockwave-flash"
        }];
        Ub.prototype.listNotificationInterests =
            function() {
                return Ub.__super__.listNotificationInterests.call(this).concat([d.MEDIA_CHANGE, "mediaanalytics:setDimensions"])
            };
        Ub.prototype.createFlashVars = function(a) {
            var b, c, e, d;
            b = null != (e = this.player.config) ? null != (d = e.media) ? d.mediaanalytics : void 0 : void 0;
            if (null != b)
                for (c in b) e = b[c], a["report_" + c] = e;
            return a
        };
        Ub.prototype.createXML = function(a) {
            var b, c, e, d, f;
            b = a.firstChild;
            e = a.getElementsByTagName("metrics")[0];
            null == e && (e = a.createElement("metrics"), b.appendChild(e));
            b = a.createElement("vendor");
            b.setAttribute("id", "akamai");
            e.appendChild(b);
            null != this.config.config && (e = a.createElement("property"), e.setAttribute("key", "MEDIA_ANALYTICS_BEACON"), e.appendChild(fa.createTextContent(a, this.config.config)), b.appendChild(e), f = (null != (c = this.config.plugin) ? c.swf : void 0) || "http://79423.analytics.edgesuite.net/csma/plugin/csma.swf", e = a.createElement("property"), e.setAttribute("key", "MEDIA_ANALYTICS_PLUGIN_PATH"), e.appendChild(fa.createTextContent(a, f)), b.appendChild(e));
            if (null != this.config.dimensions)
                for (d in c =
                    a.createElement("property"), c.setAttribute("key", "dimensions"), b.appendChild(c), f = this.config.dimensions, f) b = f[d], e = a.createElement("property"), e.setAttribute("key", d), e.appendChild(fa.createTextContent(a, b)), c.appendChild(e);
            return a
        };
        Ub.prototype.handleNotification = function(a) {
            var b, c, e;
            Ub.__super__.handleNotification.call(this, a);
            c = a.getName();
            a = a.getBody();
            switch (c) {
                case d.MEDIA_CHANGE:
                    if (null != (null != (e = a.mediaanalytics) ? e.dimensions : void 0))
                        for (b in a.dimensions = [], e = a.mediaanalytics.dimensions,
                            e) c = e[b], a.dimensions.push({
                            key: b,
                            value: c
                        });
                    break;
                case "mediaanalytics:setDimensions":
                    this.setDimensions(a)
            }
        };
        Ub.prototype.setDimensions = function(a) {
            this.player.mediaElement.setPlayerProperty("maDimensions", a);
            return a
        };
        var Yc = function() {
            Yc.__super__.constructor.call(this)
        };
        f(Yc, M);
        Yc.prototype.moduleName = "playoverlay";
        Yc.prototype.createModel = function() {};
        Yc.prototype.createView = function() {
            this.registerMediator(new Xe)
        };
        Yc.prototype.listNotificationPublications = function() {
            return Yc.__super__.listNotificationPublications.call(this).concat([$.TOGGLE_PLAY_PAUSE])
        };
        l.registerPlugin("playoverlay", "html", Yc);
        l.registerPlugin("playoverlay", "external", Yc);
        var Ea = function(a, b, c, e) {
            this.url = a;
            this.interval = null != b ? b : 1E4;
            this.type = null != c ? c : null;
            this.headers = null != e ? e : null;
            Ea.__super__.constructor.call(this)
        };
        f(Ea, ib);
        Ea.prototype.timeout = null;
        Ea.prototype.interval = null;
        Ea.prototype.url = null;
        Ea.prototype.lastModified = null;
        Ea.prototype.contentLenght = null;
        Ea.prototype.data = null;
        Ea.prototype.text = null;
        Ea.prototype.type = null;
        Ea.prototype.headers = null;
        Ea.prototype.useHeadRequest = !0;
        Ea.prototype.xhr = null;
        Ea.prototype.start = function() {
            null != this.url && "" !== this.url && this.poll()
        };
        Ea.prototype.poll = function() {
            var a, b = this;
            a = g.getXHR();
            this.useHeadRequest ? (a.onload = function(c) {
                var e;
                304 === a.status ? b.invoke() : (e = a.getResponseHeader("Last-Modified"), c = a.getResponseHeader("Content-Length"), null == e && null == c || null != e && e !== b.lastModified || null != c && c !== b.contentLength ? (b.lastModified = e, b.contentLength = c, b.updateData()) : b.invoke())
            }, a.onerror = function(a) {
                b.error(a)
            }, a.open("HEAD", g.cacheBust(this.url), !1), this.applyHeaders(), null != this.lastModified && a.setRequestHeader("If-Modified-Since", this.lastModified), a.send()) : this.updateData()
        };
        Ea.prototype.applyHeaders = function() {
            null != this.headers && this.xhr.setRequestHeaders(this.headers)
        };
        Ea.prototype.updateData = function() {
            var a, b = this;
            a = g.getXHR();
            a.open("GET", g.cacheBust(this.url), !0);
            a.onload = function(c) {
                b.setText(a.responseText);
                b.invoke()
            };
            a.onerror = function(a) {
                b.error(a)
            };
            this.applyHeaders();
            return a.send()
        };
        Ea.prototype.setText = function(a) {
            var b;
            if (a !== this.text) {
                b = this.text = a;
                if (this.type === g.mimeTypes.json) try {
                    b = this.xhr.response
                } catch (c) {
                    b = this.text
                }
                this.setData(b)
            }
            return a
        };
        Ea.prototype.setData = function(a) {
            a !== this.data && (this.data = a, this.dispatchEvent(new V("datachanged", this.data)));
            return a
        };
        Ea.prototype.error = function(a) {
            ia.error(event);
            this.stop()
        };
        Ea.prototype.invoke = function() {
            var a = this;
            this.stop();
            this.timeout = setTimeout(function() {
                a.poll()
            }, this.interval)
        };
        Ea.prototype.stop = function() {
            clearTimeout(this.timeout)
        };
        var ee = function() {
            return ee.__super__.constructor.apply(this,
                arguments)
        };
        f(ee, I);
        ee.NAME = "EventManagementWrapper";
        ee.prototype.createFlashVars = function(a) {
            null != this.config.enabled && (a.eventmanagementstates_enabled = this.config.enabled);
            null != this.config.url && (a.eventmanagementstates_status_url = this.config.url);
            null != this.config.interval && (a.eventmanagementstates_status_interval = this.config.interval);
            return a
        };
        ee.prototype.createXML = function(a) {
            var b, c, e, d, f, h, g;
            b = a.firstChild;
            c = a.getElementsByTagName("eventmanagementstates");
            null == c || 0 === c.length ? (c = a.createElement("eventmanagementstates"),
                b.appendChild(c)) : c = c[0];
            b = a.createElement("states");
            c.appendChild(b);
            g = this.config.states;
            f = 0;
            for (h = g.length; f < h; f++) d = g[f], c = a.createElement("state"), b.appendChild(c), e = a.createElement("property"), e.setAttribute("key", "ID"), e.appendChild(fa.createTextContent(a, d.id)), c.appendChild(e), e = a.createElement("property"), e.setAttribute("key", "POSTER_SRC"), e.appendChild(fa.createTextContent(a, d.poster)), c.appendChild(e), null != d.url && (e = a.createElement("property"), e.setAttribute("key", "URL"), e.appendChild(fa.createTextContent(a,
                d.url)), c.appendChild(e));
            return a
        };
        var Zc = function() {
            Zc.__super__.constructor.call(this)
        };
        f(Zc, na);
        Zc.prototype.componentName = "event-management";
        Zc.prototype.poster = null;
        Zc.prototype.onRegister = function() {
            Zc.__super__.onRegister.call(this);
            this.classList.add("hidden");
            this.poster = this.create("event-poster", !1, "img")
        };
        Zc.prototype.listNotificationInterests = function() {
            return ["eventStateChanged"]
        };
        Zc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case "eventStateChanged":
                    a = a.getBody(),
                        "on" !== a.id ? (null != a.poster && (this.poster.src = a.poster, this.viewComponent.appendChild(this.poster)), this.classList.remove("hidden"), this.sendNotification(d.PAUSE), this.sendNotification(d.CHANGE_DISPLAY_STATE, ja.NORMAL)) : (this.viewComponent.contains(this.poster) && this.viewComponent.removeChild(this.poster), this.classList.add("hidden"))
            }
        };
        var y = function() {
            y.__super__.constructor.call(this)
        };
        f(y, A);
        y.prototype.dispatchEvent = function(a, b) {
            var c, e;
            "string" !== typeof a && (b = a.getBody(), null == b && (b = {}), a =
                a.getName());
            c = "function" === typeof(e = this.plugin).getFeatureName ? e.getFeatureName() : void 0;
            null != c && (a = a.replace(RegExp("^(" + c + ")"), ""));
            c = this.plugin.getModuleName();
            a = a.replace(RegExp("^(" + c + ")"), "");
            c = new V(a, b);
            this.sendNotification(d.DISPATCH_EVENT, c)
        };
        y.prototype.dispatchEventAfterCommand = function(a, b) {
            setTimeout(this.dispatchEvent.bind(this, a, b), 0)
        };
        y.prototype.execute = function(a) {
            this.dispatchEvent(a)
        };
        var Ye = function() {
            Ye.__super__.constructor.call(this)
        };
        f(Ye, y);
        Ye.prototype.execute = function(a) {
            var b;
            b = a.getBody().id !== cb.ON.id;
            this.sendNotification(d.LOCK, b);
            Ye.__super__.execute.call(this, a);
            !1 === b && !0 === this.facade.player.getAutoplay() && this.sendNotification(d.PLAY)
        };
        var cb = function(a) {
            var b = this;
            cb.__super__.constructor.call(this, a);
            this.poller = new Ea;
            this.poller.ondatachanged = function(a) {
                var e, d, f, h;
                a = a.detail;
                if ("on" === a) e = cb.ON;
                else
                    for (h = b.data.states, d = 0, f = h.length; d < f && (e = h[d], e.id !== a); d++);
                if (null != e) return b.setState(e)
            }
        };
        f(cb, x);
        cb.NAME = x.NAME;
        cb.ON = {
            id: "on"
        };
        cb.prototype.defaults = {
            url: null,
            interval: null,
            states: null,
            enabled: !1
        };
        cb.prototype.poller = null;
        cb.prototype.state = null;
        cb.prototype.initialize = function() {
            !0 === this.data.enabled && (this.setURL(this.data.url), this.setInterval(this.data.interval), this.poller.start())
        };
        cb.prototype.setURL = function(a) {
            return this.data.url = this.poller.url = a
        };
        cb.prototype.getURL = function() {
            return this.data.url
        };
        cb.prototype.getInterval = function() {
            return this.data.interval
        };
        cb.prototype.setInterval = function(a) {
            this.data.interval = this.poller.interval =
                1E3 * a;
            return a
        };
        cb.prototype.setState = function(a) {
            this.state = a;
            this.sendNotification("eventStateChanged", a);
            return a
        };
        cb.prototype.getState = function() {
            return this.state
        };
        var ic = function() {
            ic.__super__.constructor.call(this)
        };
        f(ic, M);
        ic.prototype.moduleName = "mediaanalytics";
        ic.prototype.initialize = function(a, b) {
            window.AKAMAI_MEDIA_ANALYTICS_CONFIG_FILE_PATH = a.config;
            ic.__super__.initialize.call(this, a, b)
        };
        ic.prototype.createModel = function() {
            this.proxy = new ub(this.config);
            this.registerProxy(this.proxy)
        };
        ic.prototype.createController = function() {
            ic.__super__.createController.call(this);
            this.registerCommand(d.READY, lg);
            this.registerCommand(d.MEDIA_CHANGE, mg);
            this.registerCommand(k.BREAK_START, ng);
            this.registerCommand(k.BREAK_END, og);
            this.registerCommand(k.AD_LOADED, pg);
            this.registerCommand(k.AD_STARTED, qg);
            this.registerCommand(k.AD_TIME_UPDATE, rg);
            this.registerCommand(k.AD_ENDED, sg);
            this.registerCommand("mediaanalytics:setDimensions", tg);
            this.registerCommand(d.CONTENT_CHANGED, ug);
            this.registerCommand(d.FRAGMENT_LOAD_START,
                vg);
            this.registerCommand(d.FRAGMENT_LOADED, wg);
            this.registerCommand(d.BITRATE_CHANGE, xg)
        };
        ic.prototype.listNotificationInterests = function() {
            return [d.READY, d.MEDIA_CHANGE, k.BREAK_START, k.BREAK_END, k.AD_LOADED, k.AD_STARTED, k.AD_TIME_UPDATE, k.AD_ENDED, "mediaanalytics:setDimensions", d.CONTENT_CHANGED, d.FRAGMENT_LOAD_START, d.FRAGMENT_LOADED, d.BITRATE_CHANGE]
        };
        ic.prototype.setDimensions = function(a) {
            this.retrieveProxy(ub.NAME).setDimensions(a);
            return a
        };
        l.registerPlugin("mediaanalytics", "html", ic);
        l.registerPlugin("mediaanalytics",
            "flash", Ub);
        var Dd = function() {
            return Dd.__super__.constructor.apply(this, arguments)
        };
        f(Dd, I);
        Dd.NAME = "BrandingWrapper";
        Dd.prototype.flashView = {
            elements: {
                logoOverlay: {
                    attributes: {
                        style: "width: 150px; height: 53px; right: 15px; top: 15px; opacity: 0.5;"
                    }
                }
            }
        };
        Dd.prototype.createFlashVars = function(a) {
            null != this.config.id && (a.branding = this.config.id);
            return a
        };
        Dd.prototype.createXML = function(a) {
            var b, c, e, d, f;
            e = this.player.flashView;
            null != (null != (b = this.config) ? b.logo : void 0) && null != e && (b = "background-image: url('" +
                this.config.logo + "');", c = (null != (d = e.elements.logoOverlay) ? null != (f = d.attributes) ? f.style : void 0 : void 0) || "", c = -1 !== c.indexOf("background-image:") ? c.replace(/background-image: [A-Za-z0-9_\-\.\/\\;\(\)"'#{}]+/, b) : b + c, e.elements.logoOverlay.attributes.style = c);
            return a
        };
        var jc = function() {
            jc.__super__.constructor.call(this)
        };
        f(jc, na);
        jc.prototype.componentName = "branding";
        jc.prototype.logo = null;
        jc.prototype.text = null;
        jc.prototype.container = null;
        jc.prototype.onRegister = function() {
            jc.__super__.onRegister.call(this);
            this.container = this.create("branding-container");
            this.logo = this.create(["branding-image", "hidden"], this.container, "img");
            this.text = this.create("branding-text", this.container)
        };
        jc.prototype.listNotificationInterests = function() {
            return [d.READY]
        };
        jc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case d.READY:
                    a = a.getBody().branding;
                    if (null == a) break;
                    null != a.logo ? (this.logo.src = this.facade.evaluatePaths(a.logo), za.remove("hidden", this.logo, cc.PREFIX)) : za.add("hidden", this.logo, cc.PREFIX);
                    a =
                        this.config.getDomain();
                    null != a && 0 !== a.indexOf("http") && (a = location.protocol + "//" + a, this.text.innerHTML = "\x3cspan\x3e" + this.localizationManager.getString(D.MSG_VIEW_ALL) + '\x3ca href\x3d"' + a + '" target\x3d"' + this.config.getTarget() + '"\x3e' + this.config.getDomain() + "\x3c/a\x3e " + this.localizationManager.getString(D.MSG_VIDEO) + ".")
            }
        };
        var vb = function(a) {
            vb.__super__.constructor.call(this, a)
        };
        f(vb, x);
        vb.NAME = x.NAME;
        vb.prototype.defaults = {
            id: null,
            title: null,
            link: null,
            logo: null,
            target: null
        };
        vb.prototype.getID =
            function() {
                return this.data.id
            };
        vb.prototype.setID = function(a) {
            return this.data.id = a
        };
        vb.prototype.getTarget = function() {
            return this.data.target
        };
        vb.prototype.setTarget = function(a) {
            return this.data.target = a
        };
        vb.prototype.getTitle = function() {
            return this.data.title
        };
        vb.prototype.setTitle = function(a) {
            return this.data.title = a
        };
        vb.prototype.getLink = function() {
            return this.data.link
        };
        vb.prototype.setLink = function(a) {
            return this.data.link = a
        };
        vb.prototype.getLogo = function() {
            return this.data.logo
        };
        vb.prototype.setLogo =
            function(a) {
                return this.data.logo = a
            };
        var Oa = {
                LOAD_FEED: "loadfeed",
                FEED_CHANGED: "feedchanged",
                FEED_LOADED: "feedloaded",
                FEED_ERROR: "feederror"
            },
            Gc = function() {
                Gc.__super__.constructor.call(this)
            };
        f(Gc, M);
        Gc.prototype.moduleName = "eventmanagement";
        Gc.prototype.createModel = function() {
            this.registerProxy(new cb(this.config))
        };
        Gc.prototype.createController = function() {
            Gc.__super__.createController.call(this);
            this.registerCommand("eventStateChanged", Ye)
        };
        Gc.prototype.createView = function() {
            this.registerMediator(new Zc)
        };
        Gc.prototype.listNotificationPublications = function() {
            return Gc.__super__.listNotificationPublications.call(this).concat([d.CHANGE_DISPLAY_STATE, d.PLAY, d.PAUSE, d.LOCK, "eventStateChanged"])
        };
        l.registerPlugin("eventmanagement", "html", Gc);
        l.registerPlugin("eventmanagement", "flash", ee);
        var wb = function(a) {
            wb.__super__.constructor.call(this, a);
            this.helper = new Uc
        };
        f(wb, x);
        wb.NAME = x.NAME;
        wb.prototype.defaults = {
            url: null,
            data: null
        };
        wb.prototype.feed = null;
        wb.prototype.helper = null;
        wb.prototype.setURL = function(a) {
            var b =
                this;
            this.data.url = this.facade.evaluatePaths(a);
            this.sendNotification(d.DISPATCH_EVENT, new V("request", this.data.url));
            this.helper.getFeed(this.data.url, function(a) {
                b.sendNotification(Oa.FEED_LOADED, a);
                b.sendNotification(Oa.CHANGE_FEED, a)
            }, function(c) {
                b.sendNotification(Oa.FEED_ERROR, {
                    error: c,
                    url: a
                });
                ia.error("[AMP Feed Load Error]", b.data.url, c)
            });
            return a
        };
        wb.prototype.getURL = function() {
            return this.data.url
        };
        wb.prototype.setFeedData = function(a) {
            this.data.data = a;
            this.feed = this.helper.createFeed(a);
            this.sendNotification(Oa.FEED_CHANGED, this.feed);
            return a
        };
        wb.prototype.getFeedData = function() {
            return this.data.data
        };
        wb.prototype.invoke = function() {
            null != this.data.url && "" !== this.data.url ? this.sendNotification(Oa.LOAD_FEED, this.data.url) : null != this.data.data && setTimeout(this.sendNotification.bind(this, Oa.CHANGE_FEED, this.data.data), 1)
        };
        var yg = function() {
            yg.__super__.constructor.call(this)
        };
        f(yg, puremvc.SimpleCommand);
        yg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wb.NAME).setURL(a.getBody())
        };
        var zg = function() {
            zg.__super__.constructor.call(this)
        };
        f(zg, puremvc.SimpleCommand);
        zg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wb.NAME).setFeedData(a.getBody())
        };
        var Ze = function() {
            Ze.__super__.constructor.call(this)
        };
        f(Ze, y);
        Ze.prototype.execute = function(a) {
            Ze.__super__.execute.call(this, a);
            this.player.sendNotification(d.CHANGE_PLAY_STATE, U.READY);
            a = a.getBody().item[0];
            this.player.sendNotification(d.SET_MEDIA, a)
        };
        var Ag = function() {
            Ag.__super__.constructor.call(this)
        };
        f(Ag, puremvc.SimpleCommand);
        Ag.prototype.execute = function(a) {
            this.facade.retrieveProxy(wb.NAME).invoke()
        };
        var nb = function(a, b) {
            null == b && (b = {});
            nb.__super__.constructor.call(this, a, b);
            null != b.url && (this.url = b.url);
            null != b.data && (this.data = b.data);
            this.player.load = function() {}
        };
        f(nb, I);
        nb.NAME = "FeedWrapper";
        nb.prototype.url = null;
        nb.prototype.data = null;
        nb.prototype.updateData = !0;
        nb.prototype.createFlashVars = function(a) {
            null != this.url && "" !== this.url && (a.data_feed_url = escape(this.facade.evaluatePaths(this.url)))
        };
        nb.prototype.listNotificationInterests =
            function() {
                return nb.__super__.listNotificationInterests.apply(this, arguments).concat([q.READY, q.FEED_LOADED, q.LOAD_FEED])
            };
        nb.prototype.handleNotification = function(a) {
            var b, c, e = this;
            nb.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.FEED_LOADED:
                    this.sendNotification(Oa.FEED_CHANGED, this.data);
                    break;
                case q.LOAD_FEED:
                    c = "request";
                    break;
                case q.READY:
                    null != this.data ? setTimeout(function() {
                        e.setData(e.data)
                    }, 25) : null != this.url && "" !== this.url && this.sendNotification(Oa.LOAD_FEED,
                            this.url)
            }
            null != c && this.dispatchEvent(new V(c, a))
        };
        nb.prototype.setURL = function(a) {
            null != a && "" !== a && (this.url = a, this.player.mediaElement.playFile(this.url, this.player.getAutoplay()), this.sendNotification(Oa.LOAD_FEED, this.url));
            return a
        };
        nb.prototype.getURL = function() {
            return this.url
        };
        nb.prototype.setData = function(a) {
            this.data = a;
            this.updateData = !1;
            this.player.mediaElement.playFile(this.data, this.player.getAutoplay());
            return a
        };
        nb.prototype.getData = function() {
            return this.data
        };
        var kc = function() {
            kc.__super__.constructor.call(this)
        };
        f(kc, M);
        kc.NAME = "BrandingPlugin";
        kc.prototype.moduleName = "branding";
        kc.prototype.createModel = function() {
            this.registerProxy(new vb(this.config))
        };
        kc.prototype.createView = function() {
            this.registerMediator(new jc)
        };
        kc.prototype.onRegister = function() {
            null != this.config.id && this.sendNotification(d.ADD_APPLICATION_STATE, "branding-" + this.config.id);
            kc.__super__.onRegister.call(this)
        };
        kc.prototype.listNotificationInterests = function() {
            return [d.READY]
        };
        l.registerPlugin("branding", "html", kc);
        l.registerPlugin("branding",
            "flash", Dd);
        l.registerPlugin("branding", "external", kc);
        var Hc = {
                TIME_UPDATE: "autoadvancetimeupdate",
                START: "autoadvancestart",
                STOP: "autoadvancestop",
                ADVANCE: "autoadvanceadvance"
            },
            Vb = function(a, b) {
                null == b && (b = {});
                Vb.__super__.constructor.call(this, a, b);
                null != b.interval && (this.interval = b.interval);
                null != b.handler && (this.handler = b.handler)
            };
        f(Vb, I);
        Vb.NAME = "AutoAdvanceWrapper";
        Vb.prototype.interval = null;
        Vb.prototype.handler = null;
        Vb.prototype.getInterval = function() {
            return this.interval
        };
        Vb.prototype.setInterval =
            function(a) {
                return this.interval = a
            };
        Vb.prototype.getHandler = function() {
            return this.handler
        };
        Vb.prototype.setHandler = function(a) {
            return this.handler = a
        };
        Vb.prototype.listNotificationInterests = function() {
            return [q.CREATE_FLASH_VARS, q.AUTO_ADVANCE]
        };
        Vb.prototype.handleNotification = function(a) {
            var b, c, e;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.CREATE_FLASH_VARS:
                    b = a.flashvars;
                    null != this.interval && (b.next_video_timer = this.interval, b.auto_play_list = !0);
                    break;
                case q.AUTO_ADVANCE:
                    "function" === typeof(e = this.config).handler &&
                    e.handler(), c = "advance"
            }
            null != c && this.dispatchEvent(new V(c))
        };
        var Ic = function(a) {
            Ic.__super__.constructor.call(this, a)
        };
        f(Ic, x);
        Ic.NAME = x.NAME;
        Ic.prototype.defaults = {
            interval: 15,
            handler: null
        };
        Ic.prototype.currentTime = 0;
        Ic.prototype.timeout = null;
        Ic.prototype.start = function() {
            var a = this;
            this.currentTime = this.data.interval;
            this.timeout = setInterval(function() {
                a.updateTime()
            }, 1E3);
            this.sendNotification(Hc.TIME_UPDATE, this.currentTime)
        };
        Ic.prototype.stop = function() {
            clearInterval(this.timeout)
        };
        Ic.prototype.updateTime =
            function() {
                this.currentTime--;
                this.sendNotification(Hc.TIME_UPDATE, this.currentTime);
                0 >= this.currentTime && (this.stop(), this.sendNotification(Hc.ADVANCE, this.data.handler))
            };
        var $e = function() {
            $e.__super__.constructor.call(this)
        };
        f($e, y);
        $e.prototype.execute = function(a) {
            this.sendNotification(d.ADD_APPLICATION_STATE, "autoadvance-mode");
            this.proxy.start();
            $e.__super__.execute.call(this, a)
        };
        var af = function() {
            af.__super__.constructor.call(this)
        };
        f(af, y);
        af.prototype.execute = function(a) {
            var b;
            b = a.getBody();
            null != b && ("string" === typeof b ? eval("" + b + "()") : "function" === typeof b && b());
            this.sendNotification(d.REMOVE_APPLICATION_STATE, "autoadvance-mode");
            af.__super__.execute.call(this, a)
        };
        var Bg = function() {
            Bg.__super__.constructor.call(this)
        };
        f(Bg, A);
        Bg.prototype.execute = function(a) {
            null != this.proxy.getData().interval && this.sendNotification(Hc.START, a.getBody())
        };
        var $c = function() {
            $c.__super__.constructor.call(this)
        };
        f($c, A);
        $c.prototype.execute = function(a) {
            this.proxy.stop()
        };
        var ad = function() {
            ad.__super__.constructor.call(this)
        };
        f(ad, na);
        ad.prototype.componentName = "autoadvance";
        ad.prototype.text = null;
        ad.prototype.onRegister = function() {
            ad.__super__.onRegister.call(this);
            this.text = this.create("autoadvance-text")
        };
        ad.prototype.listNotificationInterests = function() {
            return [Hc.TIME_UPDATE]
        };
        ad.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case Hc.TIME_UPDATE:
                    a = a.getBody(), this.text.textContent = "" + this.localizationManager.getString("MSG_NEXT_VIDEO") + " " + a + " " + this.localizationManager.getString("MSG_SECONDS")
            }
        };
        var xb =
            function() {
                xb.__super__.constructor.call(this)
            };
        f(xb, M);
        xb.prototype.moduleName = "feed";
        xb.prototype.createModel = function() {
            this.proxy = new wb(this.config);
            this.registerProxy(this.proxy)
        };
        xb.prototype.createController = function() {
            xb.__super__.createController.call(this);
            this.registerCommand(d.READY, Ag);
            this.registerCommand(Oa.LOAD_FEED, yg);
            this.registerCommand(Oa.CHANGE_FEED, zg);
            this.registerCommand(Oa.FEED_CHANGED, Ze);
            this.registerCommand(Oa.FEED_LOADED, y);
            this.registerCommand(Oa.FEED_ERROR, y)
        };
        xb.prototype.listNotificationInterests =
            function() {
                return xb.__super__.listNotificationInterests.call(this).concat([d.READY])
            };
        xb.prototype.listNotificationPublications = function() {
            var a, b;
            return xb.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in Oa) b = Oa[a], c.push(b);
                return c
            }())
        };
        xb.prototype.setURL = function(a) {
            this.sendNotification(Oa.LOAD_FEED, a);
            return a
        };
        xb.prototype.getURL = function() {
            return this.proxy.getURL()
        };
        xb.prototype.setData = function(a) {
            this.sendNotification(Oa.CHANGE_FEED, a);
            return a
        };
        xb.prototype.getData = function() {
            return this.proxy.getFeedData()
        };
        l.registerPlugin("feed", "html", xb);
        l.registerPlugin("feed", "flash", nb);
        var Wb = function() {
            Wb.__super__.constructor.call(this)
        };
        f(Wb, M);
        Wb.NAME = "AutoAdvancePlugin";
        Wb.prototype.moduleName = "autoadvance";
        Wb.prototype.createController = function() {
            Wb.__super__.createController.call(this);
            this.registerCommand(Hc.START, $e);
            this.registerCommand(Hc.ADVANCE, af);
            this.registerCommand(d.MEDIA_SEQUENCE_ENDED, Bg);
            this.registerCommand(d.CHANGE_MEDIA,
                $c);
            this.registerCommand(d.PLAY, $c);
            this.registerCommand(d.PLAYING, $c);
            this.registerCommand(d.REPLAY, $c);
            this.registerCommand(d.SEEK, $c);
            this.registerCommand($.SEEK, $c);
            this.registerCommand(d.TIME_UPDATE, y);
            this.registerCommand(d.STOP, y)
        };
        Wb.prototype.createModel = function() {
            this.registerProxy(new Ic(this.config))
        };
        Wb.prototype.createView = function() {
            this.registerMediator(new ad)
        };
        Wb.prototype.listNotificationInterests = function() {
            return [d.CHANGE_MEDIA, d.PLAY, d.PLAYING, d.REPLAY, d.MEDIA_SEQUENCE_ENDED,
                d.SEEK, $.SEEK
            ]
        };
        Wb.prototype.listNotificationPublications = function() {
            var a, b;
            return Wb.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in Hc) b = Hc[a], c.push(b);
                return c
            }())
        };
        l.registerPlugin("autoadvance", "html", Wb);
        l.registerPlugin("autoadvance", "flash", Vb);
        var Ab = {
                RECOMMENDATIONS_LOADED: "recommendationsloaded",
                RECOMMENDATION_SELECTED: "recommendationsselected"
            },
            lc = function(a, b, c, e, d, f, h, g, r) {
                this.guid = a;
                this.link = b;
                this.title = c;
                this.description = e;
                this.thumbnail =
                    d;
                this.duration = f;
                this.pubDate = h;
                this.target = g;
                this.metadata = null != r ? r : {}
            };
        lc.prototype.guid = null;
        lc.prototype.link = null;
        lc.prototype.title = null;
        lc.prototype.description = null;
        lc.prototype.thumbnail = null;
        lc.prototype.duration = null;
        lc.prototype.pubDate = null;
        lc.prototype.target = null;
        lc.prototype.metadata = null;
        var Ga = function(a, b) {
            null == b && (b = {});
            Ga.__super__.constructor.call(this, a, b);
            null != b.url && (this.url = b.url);
            null != b.target && (this.target = b.target)
        };
        f(Ga, I);
        Ga.NAME = "RecommendationsWrapper";
        Ga.prototype.flashPlugins = [{
            id: "RecommendationsPlugin",
            src: "#{paths.resources}plugins/RecommendationsPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "RecommendationsPlugin",
            type: "application/x-shockwave-flash"
        }];
        Ga.prototype.flashView = {
            elements: {
                recommendationSlate: {
                    attributes: {
                        items: "5",
                        viewMode: "grid"
                    }
                }
            }
        };
        Ga.prototype.url = null;
        Ga.prototype.target = null;
        Ga.prototype.recommendations = null;
        Ga.prototype.getFeatureName = function() {
            return "recommendations"
        };
        Ga.prototype.getData = function() {
            return this.recommendations
        };
        Ga.prototype.setData =
            function(a) {
                return this.recommendations = a
            };
        Ga.prototype.getTarget = function() {
            var a, b;
            return this.target || (null != (a = this.player) ? null != (b = a.config) ? b.target : void 0 : void 0)
        };
        Ga.prototype.getURL = function() {
            return this.url
        };
        Ga.prototype.createFlashVars = function(a) {
            a.recommendations_partner = "mrss";
            null != this.config.target && (a.external_target = this.config.target)
        };
        Ga.prototype.createXML = function(a) {
            var b, c;
            b = a.firstChild;
            c = a.getElementsByTagName("recommendations")[0];
            null == c && (c = a.createElement("recommendations"),
                b.appendChild(c));
            b = a.createElement("vendor");
            b.setAttribute("id", "mrss");
            c.appendChild(b);
            this.createProperty(a, "RECOMMENDATIONS_MRSS_URL", this.url, b)
        };
        Ga.prototype.listNotificationInterests = function() {
            return Ga.__super__.listNotificationInterests.apply(this, arguments).concat([q.RECOMMENDATION_SELECTED, q.RECOMMENDATIONS_LOADED])
        };
        Ga.prototype.handleNotification = function(a) {
            var b, c;
            Ga.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.RECOMMENDATIONS_LOADED:
                    c = "loaded";
                    this.recommendations = a;
                    break;
                case q.RECOMMENDATION_SELECTED:
                    c = "selected"
            }
            null != c && this.dispatchEvent(new V(c, a))
        };
        var bf = function() {
            bf.__super__.constructor.call(this)
        };
        f(bf, y);
        bf.prototype.execute = function(a) {
            bf.__super__.execute.call(this, a);
            a = a.getBody();
            "none" !== a.target && "player" !== a.target && window.open(a.link, a.target)
        };
        var Cg = function() {
            Cg.__super__.constructor.call(this)
        };
        f(Cg, A);
        Cg.prototype.execute = function(a) {
            this.proxy.invoke()
        };
        var Dg = function() {
            Dg.__super__.constructor.call(this)
        };
        f(Dg,
            A);
        Dg.prototype.execute = function(a) {
            var b;
            b = this.proxy.getRecommendations();
            a = a.getBody();
            a.value === U.ENDED ? 0 < (null != b ? b.length : void 0) && this.sendNotification(d.ADD_APPLICATION_STATE, "recommendations-mode") : a.previous === U.ENDED && 0 < (null != b ? b.length : void 0) && this.sendNotification(d.REMOVE_APPLICATION_STATE, "recommendations-mode")
        };
        var Ua = function(a) {
            Ua.__super__.constructor.call(this, a);
            this.helper = new Uc
        };
        f(Ua, R);
        Ua.NAME = x.NAME;
        Ua.prototype.defaults = {
            url: null,
            target: "_blank"
        };
        Ua.prototype.loaded = !0;
        Ua.prototype.recommendations = null;
        Ua.prototype.helper = null;
        Ua.prototype.getRecommendations = function() {
            return this.recommendations
        };
        Ua.prototype.setRecommendations = function(a) {
            this.recommendations = a;
            this.sendNotification(Ab.RECOMMENDATIONS_LOADED, this.recommendations);
            return a
        };
        Ua.prototype.getURL = function() {
            return this.getConfigurationData().url
        };
        Ua.prototype.setURL = function(a) {
            this.data.url = a;
            this.invoke();
            return a
        };
        Ua.prototype.getTarget = function() {
            return this.getConfigurationData().target ||
                this.facade.player.retrieveProxy(ca.NAME).getTarget()
        };
        Ua.prototype.setTarget = function(a) {
            return this.data.target = a
        };
        Ua.prototype.invoke = function() {
            var a;
            a = this.getURL();
            null == a || "" === a ? this.facade.logger.error("[AMP RECOMMENDATIONS ERROR]", "Load Error: No url provided") : g.getJson(a, this.onload.bind(this), this.onerror.bind(this))
        };
        Ua.prototype.onload = function(a) {
            a = this.createRecommendations(a);
            this.setRecommendations(a)
        };
        Ua.prototype.onerror = function(a) {
            this.facade.logger.error("[AMP RECOMMENDATIONS ERROR]",
                "Load Error:", a)
        };
        Ua.prototype.createRecommendations = function(a) {
            var b, c, e, d;
            a = this.helper.createFeed(a);
            c = [];
            d = a.item;
            a = 0;
            for (e = d.length; a < e; a++) b = d[a], b = new lc(b.guid, b.link, b.title, b.description, b.thumbnail, b.duration, b.pubDate, this.getTarget(), b), c.push(b);
            return c
        };
        var Jc = function() {
            Jc.__super__.constructor.call(this)
        };
        f(Jc, na);
        Jc.prototype.componentName = "recommendations";
        Jc.prototype.listArea = null;
        Jc.prototype.onRegister = function() {
            Jc.__super__.onRegister.call(this);
            this.createText("recommendations-label",
                "Recommended");
            this.listArea = this.create("recommendations-list-area")
        };
        Jc.prototype.listNotificationInterests = function() {
            return [Ab.RECOMMENDATIONS_LOADED]
        };
        Jc.prototype.handleNotification = function(a) {
            var b, c, e;
            switch (a.getName()) {
                case Ab.RECOMMENDATIONS_LOADED:
                    if (this.listArea.innerHTML = "", b = a.getBody(), null != b && 0 < b.length)
                        for (c = 0, e = b.length; c < e; c++) a = b[c], this.addElement(a)
            }
        };
        Jc.prototype.addElement = function(a) {
            var b, c = this;
            b = this.create("recommendation", this.listArea);
            null == b.dataset && (b.dataset = {});
            b.dataset.link = a.link;
            b.dataset.target = a.target;
            b.innerHTML = "\x3cimg src\x3d'" + a.thumbnail + "' class\x3d'" + this.cssPrefix + "recommendation-thumbnail' /\x3e \x3cspan class\x3d'" + this.cssPrefix + "recommendation-text'\x3e" + a.description + "\x3c/span\x3e";
            b.onclick = function(a) {
                a.stopImmediatePropagation();
                c.sendNotification(Ab.RECOMMENDATION_SELECTED, a.currentTarget.dataset);
                return !1
            }
        };
        var yb = function() {
            yb.__super__.constructor.call(this)
        };
        f(yb, M);
        yb.NAME = "Feature";
        yb.prototype.featureName = null;
        yb.prototype.getFeatureName =
            function() {
                return this.featureName
            };
        yb.prototype.registerFeature = function() {
            null != this.getFeatureName() && this.player.sendNotification("registerfeature", this)
        };
        yb.prototype.onRegister = function() {
            this.registerFeature();
            yb.__super__.onRegister.call(this)
        };
        yb.prototype.listNotificationPublications = function() {
            return yb.__super__.listNotificationPublications.call(this).concat(["registerfeature"])
        };
        var Kc = function() {
            Kc.__super__.constructor.call(this)
        };
        f(Kc, na);
        Kc.prototype.componentName = "recommendations-grid";
        Kc.prototype.grid = null;
        Kc.prototype.onRegister = function() {
            Kc.__super__.onRegister.call(this);
            this.createText("recommendations-grid-label", this.localizationManager.getString(D.MSG_RECOMMENDATIONS_TITLE));
            this.grid = this.create("recommendations-grid-table-grid", this, "table")
        };
        Kc.prototype.listNotificationInterests = function() {
            return [Ab.RECOMMENDATIONS_LOADED]
        };
        Kc.prototype.handleNotification = function(a) {
            var b, c, e;
            switch (a.getName()) {
                case Ab.RECOMMENDATIONS_LOADED:
                    if (this.grid.innerHTML = "", this.create("recommendations-grid-row",
                            this.grid, "tr"), this.create("recommendations-grid-row", this.grid, "tr"), b = a.getBody(), null != b && 0 < b.length)
                        for (c = 0, e = b.length; c < e; c++) a = b[c], this.addElement(a, c)
            }
        };
        Kc.prototype.addElement = function(a, b) {
            var c, e = this;
            c = this.create("recommendations-grid-item", this.grid.childNodes[2 > b % 4 ? 0 : 1], "td");
            null == c.dataset && (c.dataset = {});
            c.dataset.link = a.link;
            c.dataset.target = this.config.getTarget();
            c.innerHTML = "\x3cimg src\x3d'" + a.thumbnail + "' class\x3d'" + this.cssPrefix + "recommendations-grid-thumbnail' /\x3e \x3cspan class\x3d'" +
                this.cssPrefix + "recommendations-grid-text'\x3e" + a.description + "\x3c/span\x3e";
            c.onclick = function(a) {
                a.stopImmediatePropagation();
                e.sendNotification(Ab.RECOMMENDATION_SELECTED, a.currentTarget.dataset);
                return !1
            }
        };
        var Bb = function() {
            Bb.__super__.constructor.call(this)
        };
        f(Bb, na);
        Bb.prototype.componentName = "recommendations-fluid-grid";
        Bb.prototype.grid = null;
        Bb.prototype.timeout = null;
        Bb.prototype.gridBounds = {
            width: 0,
            height: 0
        };
        Bb.prototype.onRegister = function() {
            Bb.__super__.onRegister.call(this);
            this.grid =
                this.viewComponent;
            window.addEventListener("orientationchange", this.delayedResizeGridHanlder.bind(this))
        };
        Bb.prototype.listNotificationInterests = function() {
            return [Ab.RECOMMENDATIONS_LOADED, d.ENDED, d.CHANGE_MEDIA, d.PLAY, d.PLAYING, d.REPLAY]
        };
        Bb.prototype.delayedResizeGridHanlder = function(a) {
            try {
                clearTimeout(this.timeout)
            } catch (b) {}
            this.timeout = setTimeout(this.resizeGridHandler.bind(this, !0), 100)
        };
        Bb.prototype.resizeGridHandler = function(a) {
            var b, c, e;
            null == a && (a = !1);
            b = this.grid.getBoundingClientRect();
            if (this.gridBounds.width !== b.width || this.gridBounds.height !== b.height || a) {
                this.grid.setAttribute("style", "align-content:flex-start; -webkit-align-content:flex-start; -ms-flex-align: flex-start;opacity:0;");
                this.gridBounds = b;
                e = this.grid.childNodes;
                b = 0;
                for (c = e.length; b < c; b++) a = e[b], a.style.display = "block";
                e = this.grid.childNodes;
                b = 0;
                for (c = e.length; b < c; b++) a = e[b], a.getBoundingClientRect().bottom > this.gridBounds.bottom && (a.style.display = "none");
                this.grid.setAttribute("style", "align-content:center; -webkit-align-content:center; -ms-flex-align: center;opacity:1;")
            }
        };
        Bb.prototype.handleNotification = function(a) {
            var b, c, e, n = this;
            switch (a.getName()) {
                case d.CHANGE_MEDIA:
                case d.PLAY:
                case d.PLAYING:
                case d.REPLAY:
                    try {
                        clearInterval(this.timeout)
                    } catch (f) {}
                    break;
                case d.ENDED:
                    this.timeout = setInterval(function() {
                        n.resizeGridHandler()
                    }, 500);
                    break;
                case Ab.RECOMMENDATIONS_LOADED:
                    if (this.grid.innerHTML = "", b = a.getBody(), null != b && 0 < b.length)
                        for (c = 0, e = b.length; c < e; c++) a = b[c], this.addElement(a, c)
            }
        };
        Bb.prototype.addElement = function(a, b) {
            var c, e, d, f = this;
            c = this.create("recommendations-fluid-grid-tile",
                this.grid);
            c.style.backgroundImage = "url(" + a.thumbnail + ")";
            null != (null != (e = this.facade.getConfig().responsive) ? e.rows : void 0) && (c.style.height = "calc(" + 100 / this.facade.getConfig().responsive.rows + "%)");
            null != (null != (d = this.facade.getConfig().responsive) ? d.column : void 0) && (c.style.width = "calc(" + 100 / this.facade.getConfig().responsive.columns + "%)");
            c.dataset.link = a.link;
            c.dataset.target = this.facade.getConfig().target;
            m.create(c, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                f.sendNotification(Ab.RECOMMENDATION_SELECTED,
                    a.currentTarget.dataset);
                return !1
            });
            this.create("recommendations-fluid-grid-tile-caption", c, "span", a.description)
        };
        var Pa = function() {
            Pa.__super__.constructor.call(this)
        };
        f(Pa, yb);
        Pa.prototype.featureName = "recommendations";
        Pa.prototype.moduleName = "recommendations";
        Pa.prototype.createController = function() {
            Pa.__super__.createController.call(this);
            this.registerCommand(Ab.RECOMMENDATION_SELECTED, bf);
            this.registerCommand(d.START, Cg);
            this.registerCommand(d.PLAY_STATE_CHANGE, Dg);
            this.registerCommand(Ab.RECOMMENDATIONS_LOADED,
                y)
        };
        Pa.prototype.createModel = function() {
            this.proxy = new Ua(this.config);
            this.registerProxy(this.proxy)
        };
        Pa.prototype.createView = function() {
            this.registerMediator(new Jc)
        };
        Pa.prototype.listNotificationInterests = function() {
            return [d.START, d.PLAY_STATE_CHANGE]
        };
        Pa.prototype.listNotificationPublications = function() {
            var a, b;
            return Pa.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in Ab) b = Ab[a], c.push(b);
                return c
            }())
        };
        Pa.prototype.setURL = function(a) {
            this.proxy.set(a)
        };
        Pa.prototype.getURL = function() {
            return this.proxy.getURL()
        };
        Pa.prototype.getData = function() {
            return this.proxy.getData()
        };
        Pa.prototype.setData = function(a) {
            this.proxy.setData(a)
        };
        Pa.prototype.getTarget = function() {
            return this.proxy.getTarget()
        };
        Pa.prototype.setTarget = function(a) {
            this.proxy.setTarget(a)
        };
        l.registerPlugin("recommendations", "html", Pa);
        l.registerPlugin("recommendations", "flash", Ga);
        var db = function(a) {
            db.__super__.constructor.call(this, a)
        };
        f(db, Ba);
        db.prototype.configurationName = "nielsen";
        db.NAME = x.NAME;
        db.cg = "OnDemand";
        db.url = "http://secure-us.imrworldwide.com/cgi-bin/m";
        db.prototype.defaults = {
            url: null,
            data: {
                ci: null,
                c6: null,
                cg: null,
                tl: null
            },
            events: null
        };
        db.prototype.getTitle = function() {
            return this.title
        };
        db.prototype.setTitle = function(a) {
            return this.title = a
        };
        db.prototype.start = function() {
            var a;
            a = this.constructURL("video", "started");
            g.beacon(a, "nielsenBeacon")
        };
        db.prototype.end = function() {
            var a;
            a = this.constructURL("video", "ended");
            g.beacon(a, "nielsenBeacon")
        };
        db.prototype.constructURL =
            function(a, b) {
                var c, e, d, f, h, g, r, k, l, m;
                g = this.url || db.url;
                d = null != (h = this.value.events) ? h[a] : void 0;
                if (null != d)
                    for (r = 0, k = d.length; r < k; r++) h = d[r], h.type === b && (f = h);
                d = (null != f ? null != (c = f.data) ? c.ci : void 0 : void 0) || this.value.data.ci;
                c = (null != f ? null != (e = f.data) ? e.c6 : void 0 : void 0) || this.value.data.c6;
                e = (null != f ? null != (l = f.data) ? l.cg : void 0 : void 0) || this.value.data.cg || db.cg;
                f = (null != f ? null != (m = f.data) ? m.tl : void 0 : void 0) || this.value.data.tl;
                return "" + g + "?ci\x3d" + d + "\x26c6\x3d" + c + "\x26cc\x3d1\x26tl\x3d" +
                    f + "\x26cg\x3d" + e + "\x26rnd\x3d" + Date.now()
            };
        var fe = function() {
            return fe.__super__.constructor.apply(this, arguments)
        };
        f(fe, I);
        fe.NAME = "NielsenWrapper";
        fe.prototype.flashPlugins = [{
            id: "NielsenPlugin",
            src: "#{paths.resources}plugins/NielsenPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "NielsenPlugin",
            type: "application/x-shockwave-flash"
        }];
        fe.prototype.createXML = function(a) {
            var b, c, e, d, f, h, g, r, k, l, m, p, q, t, s, u, w;
            if (null != (null != (b = this.config) ? b.events : void 0)) {
                b = a.firstChild;
                f = a.getElementsByTagName("metrics")[0];
                null == f && (f = a.createElement("metrics"), b.appendChild(f));
                b = a.createElement("vendor");
                b.setAttribute("id", "nielsen");
                f.appendChild(b);
                f = {
                    ads: {
                        started: "adStart",
                        ended: "adComplete"
                    },
                    video: {
                        started: "videoStart",
                        ended: "videoComplete"
                    }
                };
                r = [{
                    value: "ci",
                    key: "NIELSEN_CI"
                }, {
                    value: "cg",
                    key: "NIELSEN_CG"
                }, {
                    value: "tl",
                    key: "NIELSEN_TL"
                }, {
                    value: "c6",
                    key: "NIELSEN_C6"
                }];
                null != this.config.url && (e = a.createElement("property"), e.setAttribute("key", "serviceURL"), c = fa.createTextContent(a, this.config.url.toString()), e.appendChild(c),
                    b.appendChild(e));
                s = this.config.events;
                for (l in s)
                    if (d = s[l], null != d && 0 < d.length)
                        for (m = 0, q = d.length; m < q; m++)
                            for (e = d[m], h = a.createElement("property"), h.setAttribute("key", f[l][e.type]), b.appendChild(h), p = 0, t = r.length; p < t; p++) g = r[p], k = (null != (u = e.data) ? u[g.value] : void 0) || (null != (w = this.config.data) ? w[g.value] : void 0), null != k && "" !== k && (c = a.createElement("property"), c.setAttribute("key", g.key), k = fa.createTextContent(a, k), c.appendChild(k), h.appendChild(c));
                return a
            }
        };
        var cf = function() {
            cf.__super__.constructor.call(this)
        };
        f(cf, puremvc.SimpleCommand);
        cf.prototype.execute = function(a) {
            this.facade.retrieveProxy(db.NAME).end()
        };
        var df = function() {
            df.__super__.constructor.call(this)
        };
        f(df, puremvc.SimpleCommand);
        df.prototype.execute = function(a) {
            this.facade.retrieveProxy(db.NAME).start()
        };
        var Ed = function() {
            Ed.__super__.constructor.call(this)
        };
        f(Ed, Pa);
        Ed.prototype.moduleName = "recommendationsgrid";
        Ed.prototype.createView = function() {
            "tile" === this.config.view ? this.registerMediator(new Bb) : this.registerMediator(new Kc)
        };
        Ed.prototype.listNotificationInterests =
            function() {
                return Ed.__super__.listNotificationInterests.call(this).concat([d.ENDED, d.CHANGE_MEDIA, d.PLAY, d.PLAYING, d.REPLAY])
            };
        l.registerPlugin("recommendationsgrid", "html", Ed);
        l.registerPlugin("recommendationsgrid", "flash", Ga);
        var ge = function() {
            return ge.__super__.constructor.apply(this, arguments)
        };
        f(ge, I);
        ge.NAME = "NielsensdkWrapper";
        ge.prototype.flashPlugins = [{
            id: "NielsenSDKPlugin",
            src: "#{paths.resources}plugins/NielsenSDKPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "NielsenSDKPlugin"
        }];
        ge.prototype.createXML =
            function(a) {
                var b, c, e, d, f, h, g, r, k, l, m, p, q, t, s, u, w;
                if (null != (null != (b = this.config) ? b.events : void 0)) {
                    b = a.firstChild;
                    f = a.getElementsByTagName("metrics")[0];
                    null == f && (f = a.createElement("metrics"), b.appendChild(f));
                    b = a.createElement("vendor");
                    b.setAttribute("id", "nielsenSDK");
                    f.appendChild(b);
                    f = {
                        ads: {
                            started: "adStart",
                            ended: "adComplete"
                        },
                        video: {
                            started: "videoStart",
                            resume: "videoResume",
                            ended: "videoComplete"
                        }
                    };
                    r = [{
                        value: "censusCategory",
                        key: "NIELSEN_CENSUS_CATEGORY"
                    }, {
                        value: "category",
                        key: "NIELSEN_CATEGORY"
                    }, {
                        value: "episodeTitle",
                        key: "NIELSEN_EPISODE_TITLE"
                    }, {
                        value: "videoType",
                        key: "NIELSEN_VIDEO_TYPE"
                    }, {
                        value: "length",
                        key: "NIELSEN_LENGTH"
                    }, {
                        value: "assetId",
                        key: "NIELSEN_ASSET_ID"
                    }, {
                        value: "dprFlag",
                        key: "NIELSEN_DPR_FLAG"
                    }];
                    e = [{
                        value: "apid",
                        key: "NIELSEN_APID"
                    }, {
                        value: "sfcode",
                        key: "NIELSEN_SF_CODE"
                    }, {
                        value: "apn",
                        key: "NIELSEN_APN"
                    }, {
                        value: "fbTag",
                        key: "NIELSEN_FBTAG"
                    }];
                    d = 0;
                    for (h = e.length; d < h; d++) c = e[d], null != this.config.data[c.value] && this.createProperty(a, c.key, this.config.data[c.value], b);
                    s = this.config.events;
                    for (l in s)
                        if (d = s[l], null != d && 0 < d.length)
                            for (m = 0, q = d.length; m < q; m++)
                                for (e = d[m], h = a.createElement("property"), h.setAttribute("key", f[l][e.type]), b.appendChild(h), p = 0, t = r.length; p < t; p++) g = r[p], k = (null != (u = e.data) ? u[g.value] : void 0) || (null != (w = this.config.data) ? w[g.value] : void 0), null != k && "" !== k && (c = a.createElement("property"), c.setAttribute("key", g.key), k = fa.createTextContent(a, k), c.appendChild(k), h.appendChild(c));
                    return a
                }
            };
        var wa = function(a) {
            wa.__super__.constructor.call(this, a)
        };
        f(wa, R);
        wa.NAME =
            x.NAME;
        wa.prototype.defaults = {
            data: null,
            events: null,
            plugin: {
                js: "http://secure-us.imrworldwide.com/novms/js/2/ggcmb400.js"
            }
        };
        wa.prototype.nielsensdkSDK = null;
        wa.prototype.cur_position = 0;
        wa.prototype.timer = null;
        wa.prototype.queryInterval = 2;
        wa.prototype.isLive = null;
        wa.prototype.initialize = function() {
            wa.__super__.initialize.call(this);
            this.nielsensdkSDK = new NOLCMB.ggInitialize(this.value.data)
        };
        wa.prototype.generateNielsenVO = function(a, b) {
            var c, e, d, f, h, g, r, k;
            null == a && (a = null);
            null == b && (b = null);
            h = {};
            c =
                this.facade.player.getMedia();
            this.isLive = c.isLive;
            h.assetid = c.guid;
            h.category = c.category;
            h.censuscategory = c.category;
            h.dprflag = "true";
            h.episodetitle = c.title ? c.title : episode_url;
            h.length = null != a ? a.duration : "NaN" === String(c.duration.toFixed(1)) ? 86400 : String(c.duration.toFixed(1));
            h.videotype = null != a ? a.type : "content";
            k = this.value.events;
            for (f in k)
                if (e = k[f], null != b && null != e && 0 < e.length)
                    for (g = 0, r = e.length; g < r; g++)
                        if (c = e[g], (null != c ? c.type : void 0) === b)
                            for (d in c.data) h[d.toLowerCase()] = c.data[d];
            return h
        };
        wa.prototype.metaLoad = function() {
            this.nielsensdkSDK.ggPM("15", this.generateNielsenVO());
            this.facade.logger.log("[AMP Nielsensdk Event] : loadMetadata")
        };
        wa.prototype.adStart = function(a) {
            "midroll" === (null != a ? a.type : void 0) && (this.nielsensdkSDK.ggPM("7", this.generateNielsenVO()), this.facade.logger.log("[AMP Nielsensdk Event] : stop"));
            this.nielsensdkSDK.ggPM("15", this.generateNielsenVO(a));
            this.facade.logger.log("[AMP Nielsensdk Event] : Ad Start")
        };
        wa.prototype.adEnd = function(a) {
            this.nielsensdkSDK.ggPM("7",
                this.generateNielsenVO(a));
            this.facade.logger.log("[AMP Nielsensdk Event] : Ad End");
            "midroll" === (null != a ? a.type : void 0) && (this.nielsensdkSDK.ggPM("15", this.generateNielsenVO()), this.facade.logger.log("[AMP Nielsensdk Event] : Video Resume"))
        };
        wa.prototype.start = function(a) {
            null == a && (a = null);
            "midroll" === (null != a ? a.type : void 0) ? (this.nielsensdkSDK.ggPM("15", this.generateNielsenVO(a, "resume")), this.facade.logger.log("[AMP Nielsensdk Event] : Content Resume")) : (this.nielsensdkSDK.ggPM("15", this.generateNielsenVO(null,
                "started")), this.facade.logger.log("[AMP Nielsensdk Event] : Content Play"))
        };
        wa.prototype.end = function() {
            var a;
            a = this.facade.player.getCurrentTime().toFixed(1);
            this.nielsensdkSDK.ggPM("57", a);
            this.facade.logger.log("[AMP Nielsensdk Event] : Video Ended");
            this.cur_position = 0
        };
        wa.prototype.timeupdate = function() {
            this.isLive ? (this.nielsensdkSDK.ggPM("49", Math.floor(Date.now() / 1E3)), this.facade.logger.log("[AMP nielsensdk Event] : timeupdate Live")) : (this.cur_position = this.facade.player.getCurrentTime().toFixed(1),
            Math.abs(this.timer - this.cur_position) > this.queryInterval && (this.timer = this.cur_position, this.nielsensdkSDK.ggPM("49", this.cur_position), this.facade.logger.log("[AMP Nielsensdk Event] : timeupdate", this.cur_position)))
        };
        var Eg = function() {
            Eg.__super__.constructor.call(this)
        };
        f(Eg, puremvc.SimpleCommand);
        Eg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).start()
        };
        var Fg = function() {
            Fg.__super__.constructor.call(this)
        };
        f(Fg, puremvc.SimpleCommand);
        Fg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).adStart(a.body)
        };
        var Gg = function() {
            Gg.__super__.constructor.call(this)
        };
        f(Gg, puremvc.SimpleCommand);
        Gg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).adEnd(a.body)
        };
        var Hg = function() {
            Hg.__super__.constructor.call(this)
        };
        f(Hg, puremvc.SimpleCommand);
        Hg.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).end()
        };
        var si = function() {
            si.__super__.constructor.call(this)
        };
        f(si, puremvc.SimpleCommand);
        si.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).metaLoad()
        };
        var ef = function() {
            ef.__super__.constructor.call(this)
        };
        f(ef, puremvc.SimpleCommand);
        ef.prototype.execute = function(a) {
            this.facade.retrieveProxy(wa.NAME).timeupdate()
        };
        var nd = function() {
            nd.__super__.constructor.call(this)
        };
        f(nd, M);
        nd.prototype.moduleName = "nielsen";
        nd.prototype.createController = function() {
            var a, b, c, e;
            nd.__super__.createController.call(this);
            b = null != (a = this.config) ? null != (c = a.events) ? c.video : void 0 : void 0;
            if (null != b)
                for (c = 0, e = b.length; c < e; c++) a = b[c], "started" === a.type && (this.registerCommand(d.STARTED, df), this.registerCommand(d.CONTENT_CHANGED,
                    df)), "ended" === a.type && (this.registerCommand(d.ENDED, cf), this.registerCommand(d.CHANGE_CONTENT, cf))
        };
        nd.prototype.createModel = function() {
            this.registerProxy(new db(this.config))
        };
        nd.prototype.listNotificationInterests = function() {
            return [d.STARTED, d.ENDED, d.CONTENT_CHANGED, d.CHANGE_CONTENT]
        };
        l.registerPlugin("nielsen", "html", nd);
        l.registerPlugin("nielsen", "flash", fe);
        var he = function() {
            return he.__super__.constructor.apply(this, arguments)
        };
        f(he, I);
        he.NAME = "ComscoreStreamsenseWrapper";
        he.prototype.flashPlugins = [{
            id: "ComscoreStreamSensePlugin",
            src: "#{paths.resources}plugins/ComscoreStreamSensePlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "ComscoreStreamSensePlugin"
        }];
        he.prototype.createXML = function(a) {
            var b, c, e, d, f;
            b = a.firstChild;
            c = a.getElementsByTagName("metrics")[0];
            null == c && (c = a.createElement("metrics"), b.appendChild(c));
            b = a.createElement("vendor");
            b.setAttribute("id", "comscoreStreamSense");
            c.appendChild(b);
            e = [{
                value: this.config.data.clientId,
                key: "C2"
            }, {
                value: this.config.data.publisherSecret,
                key: "PUBLISHER_SECRET"
            }, {
                value: this.config.data.appVersion,
                key: "APP_VERSION"
            }, {
                value: this.config.data.metadata,
                key: "metadata"
            }];
            d = 0;
            for (f = e.length; d < f; d++) c = e[d], null != c.value && this.createProperty(a, c.key, c.value, b);
            return a
        };
        var Ha = function(a) {
            Ha.__super__.constructor.call(this, a)
        };
        f(Ha, R);
        Ha.NAME = x.NAME;
        Ha.prototype.defaults = {
            plugin: {
                js: null
            },
            data: {
                clientId: null,
                publisherSecret: null,
                appVersion: null,
                metadata: null
            }
        };
        Ha.prototype.myStreamingTag = null;
        Ha.prototype.sdk = null;
        Ha.prototype.getScript = function() {
            return this.config.plugin.js
        };
        Ha.prototype.initialize = function() {
            Ha.__super__.initialize.call(this);
            this.sdk = akamai.amp.ns_;
            null != this.sdk && null === this.myStreamingTag && (this.myStreamingTag = new this.sdk.StreamingTag({
                customerC2: this.value.data.clientId
            }))
        };
        Ha.prototype.mediaChange = function() {
            null != this.myStreamingTag && this.myStreamingTag.stop();
            this.myStreamingTag = null;
            this.myStreamingTag = new this.sdk.StreamingTag({
                customerC2: this.value.data.clientId
            });
            this.facade.logger.log("[AMP ComscoreStreamsense Event] : Media Change, StreamTag ReInitialize")
        };
        Ha.prototype.adStart = function(a) {
            this.myStreamingTag.playVideoAdvertisement(this.getMetaData(!0));
            this.facade.logger.log("[AMP ComscoreStreamsense Event] : Ad Start")
        };
        Ha.prototype.start = function(a) {
            var b;
            null != (b = this.facade.player.ads) && b.getInProgress() || (this.myStreamingTag.playVideoContentPart(this.getMetaData()), this.facade.logger.log("[AMP ComscoreStreamsense Event] : Content Play"))
        };
        Ha.prototype.stop = function() {
            this.myStreamingTag.stop();
            this.facade.logger.log("[AMP ComscoreStreamsense Event] : Stop")
        };
        Ha.prototype.ended = function() {
            this.myStreamingTag.stop();
            this.facade.logger.log("[AMP ComscoreStreamsense Event] : End");
            this.myStreamingTag = null;
            this.myStreamingTag = new this.sdk.StreamingTag({
                customerC2: this.value.data.clientId
            })
        };
        Ha.prototype.getMetaData = function(a) {
            var b, c, e;
            null == a && (a = !1);
            c = {};
            a = a ? this.value.data.metadata.ads : this.value.data.metadata.video;
            for (b in a) e = a[b], "null" !== e && (c[b] = e);
            return c
        };
        var Ig = function() {
            Ig.__super__.constructor.call(this)
        };
        f(Ig, puremvc.SimpleCommand);
        Ig.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(Ha.NAME).start(a.body)
            };
        var Jg = function() {
            Jg.__super__.constructor.call(this)
        };
        f(Jg, puremvc.SimpleCommand);
        Jg.prototype.execute = function(a) {
            this.facade.retrieveProxy(Ha.NAME).adStart(a.body)
        };
        var ie = function() {
            ie.__super__.constructor.call(this)
        };
        f(ie, puremvc.SimpleCommand);
        ie.prototype.execute = function(a) {
            this.facade.retrieveProxy(Ha.NAME).stop(a.body)
        };
        var Kg = function() {
            Kg.__super__.constructor.call(this)
        };
        f(Kg, puremvc.SimpleCommand);
        Kg.prototype.execute = function(a) {
            var b;
            b = this.facade.retrieveProxy(Ha.NAME);
            b.adStart(a.body);
            b.stop(a.body)
        };
        var Lg = function() {
            Lg.__super__.constructor.call(this)
        };
        f(Lg, puremvc.SimpleCommand);
        Lg.prototype.execute = function(a) {
            this.facade.retrieveProxy(Ha.NAME).mediaChange()
        };
        var Mg = function() {
            Mg.__super__.constructor.call(this)
        };
        f(Mg, puremvc.SimpleCommand);
        Mg.prototype.execute = function(a) {
            this.facade.retrieveProxy(Ha.NAME).ended()
        };
        var od = function() {
            od.__super__.constructor.call(this)
        };
        f(od, M);
        od.prototype.moduleName = "nielsensdk";
        od.prototype.createModel =
            function() {
                this.registerProxy(new wa(this.config))
            };
        od.prototype.createController = function() {
            od.__super__.createController.call(this);
            this.registerCommand(k.BREAK_END, Gg);
            this.registerCommand(k.AD_STARTED, Fg);
            this.registerCommand(d.STARTED, Eg);
            this.registerCommand(d.ENDED, Hg);
            this.registerCommand(d.TIME_UPDATE, ef);
            this.registerCommand(k.AD_TIME_REMAINING, ef)
        };
        od.prototype.listNotificationInterests = function() {
            return [k.AD_STARTED, k.BREAK_END, d.STARTED, d.ENDED, d.LOADED_METADATA, d.TIME_UPDATE, d.CONTENT_CHANGED,
                d.CHANGE_CONTENT, k.AD_TIME_REMAINING
            ]
        };
        l.registerPlugin("nielsensdk", "html", od);
        l.registerPlugin("nielsensdk", "flash", ge);
        var mc = function(a) {
            mc.__super__.constructor.call(this, a)
        };
        f(mc, Ba);
        mc.prototype.configurationName = "comscore";
        mc.NAME = x.NAME;
        mc.prototype.defaults = {
            url: "http://b.scorecardresearch.com/b",
            events: {
                ads: null,
                video: null
            },
            data: {
                c1: null,
                c2: null,
                c3: null,
                c4: null,
                c5: null,
                c6: null,
                c7: null,
                c8: null,
                c9: null,
                c10: null,
                c14: null
            }
        };
        mc.prototype.adStart = function() {
            var a;
            a = this.constructURL("ads", "started");
            g.beacon(a)
        };
        mc.prototype.videoStart = function() {
            var a;
            a = this.constructURL("video", "started");
            g.beacon(a)
        };
        mc.prototype.constructURL = function(a, b) {
            var c, e, d, f, h, g, r, k;
            c = {};
            d = null != (f = this.value.events) ? f[a] : void 0;
            if (null != d)
                for (r = 0, k = d.length; r < k; r++) f = d[r], f.type === b && (e = f);
            f = this.value.data;
            for (h in f) d = f[h], c[h] = (null != e ? null != (g = e.data) ? g[h] : void 0 : void 0) || d;
            null == c.c7 && (c.c7 = document.location.href.substr(0, 512));
            null == c.c8 && (c.c8 = document.referrer.substr(0, 512));
            null == c.c9 && (c.c9 = document.title);
            null == c.cv && (c.cv = "2.0");
            c.rn = Date.now();
            g = this.value.url;
            e = [];
            for (h in c) d = c[h], null != d && "" !== d && e.push(h + "\x3d" + escape(d));
            0 < e.length && (g += "?" + e.join("\x26"));
            return g.substr(0, 2080)
        };
        var je = function() {
            return je.__super__.constructor.apply(this, arguments)
        };
        f(je, I);
        je.NAME = "ComscoreWrapper";
        je.prototype.flashPlugins = [{
            id: "ComscorePlugin",
            src: "#{paths.resources}plugins/ComscorePlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "ComscorePlugin",
            type: "application/x-shockwave-flash"
        }];
        je.prototype.createXML =
            function(a) {
                var b, c, e, d, f, h, g, r, k, m, l, p, q, t, s, u, w;
                b = a.firstChild;
                c = a.getElementsByTagName("metrics")[0];
                null == c && (c = a.createElement("metrics"), b.appendChild(c));
                b = a.createElement("vendor");
                b.setAttribute("id", "comscore");
                c.appendChild(b);
                f = {
                    ads: {
                        started: "adStart",
                        ended: "adComplete"
                    },
                    video: {
                        started: "videoStart",
                        ended: "videoComplete"
                    }
                };
                r = [{
                    value: "c1",
                    key: "COMSCORE_CSC1"
                }, {
                    value: "c2",
                    key: "COMSCORE_CSC2"
                }, {
                    value: "c3",
                    key: "COMSCORE_CSC3"
                }, {
                    value: "c4",
                    key: "COMSCORE_CSC4"
                }, {
                    value: "c5",
                    key: "COMSCORE_CSC5"
                }, {
                    value: "c6",
                    key: "COMSCORE_CSC6"
                }, {
                    value: "c7",
                    key: "COMSCORE_CSC7"
                }, {
                    value: "c8",
                    key: "COMSCORE_CSC8"
                }, {
                    value: "c9",
                    key: "COMSCORE_CSC9"
                }, {
                    value: "c10",
                    key: "COMSCORE_CSC10"
                }, {
                    value: "c11",
                    key: "COMSCORE_CSC14"
                }];
                s = this.config.events;
                for (m in s)
                    if (d = s[m], null != d && 0 < d.length)
                        for (l = 0, q = d.length; l < q; l++)
                            for (e = d[l], h = a.createElement("property"), h.setAttribute("key", f[m][e.type]), b.appendChild(h), c = a.createElement("property"), c.setAttribute("key", "COMSCORE_CSURL"), k = fa.createTextContent(a, this.config.url), c.appendChild(k),
                                     h.appendChild(c), p = 0, t = r.length; p < t; p++) g = r[p], k = (null != (u = e.data) ? u[g.value] : void 0) || (null != (w = this.config.data) ? w[g.value] : void 0), null != k && "" !== k && (c = a.createElement("property"), c.setAttribute("key", g.key), k = fa.createTextContent(a, k), c.appendChild(k), h.appendChild(c));
                return a
            };
        var Ng = function() {
            Ng.__super__.constructor.call(this)
        };
        f(Ng, puremvc.SimpleCommand);
        Ng.prototype.execute = function(a) {
            this.facade.retrieveProxy(mc.NAME).adStart()
        };
        var ff = function() {
            ff.__super__.constructor.call(this)
        };
        f(ff,
            puremvc.SimpleCommand);
        ff.prototype.execute = function(a) {
            this.facade.retrieveProxy(mc.NAME).videoStart()
        };
        var pd = function() {
            pd.__super__.constructor.call(this)
        };
        f(pd, M);
        pd.prototype.moduleName = "comscorestreamsense";
        pd.prototype.createModel = function() {
            this.registerProxy(new Ha(this.config))
        };
        pd.prototype.createController = function() {
            pd.__super__.createController.call(this);
            this.registerCommand(d.MEDIA_CHANGE, Lg);
            this.registerCommand(k.AD_STARTED, Jg);
            this.registerCommand(k.AD_ENDED, ie);
            this.registerCommand(k.SKIPPED,
                ie);
            this.registerCommand(k.AD_ERROR, Kg);
            this.registerCommand(d.PLAYING, Ig);
            this.registerCommand(d.PAUSED, ie);
            this.registerCommand(d.ENDED, Mg)
        };
        pd.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE, k.AD_STARTED, k.AD_ENDED, k.AD_ERROR, k.SKIPPED, d.ENDED, d.PAUSED, d.PLAYING]
        };
        l.registerPlugin("comscorestreamsense", "html", pd);
        l.registerPlugin("comscorestreamsense", "flash", he);
        var ke = function(a, b) {
            if (!0 === b.heartbeat.enabled || !0 === b.useJS) this.createXML = function() {}, this.flashPlugins = [],
                this.plugin = new qd, this.plugin.oninitialized = a.registerModule.bind(a, this.plugin), this.plugin.initialize(b, a);
            ke.__super__.constructor.call(this, a, b)
        };
        f(ke, I);
        ke.NAME = "OmnitureWrapper";
        ke.prototype.flashPlugins = [{
            id: "OmniturePlugin",
            src: "#{paths.resources}plugins/OmniturePlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "OmniturePlugin"
        }];
        ke.prototype.createXML = function(a) {
            var b, c, e, d, f, h, g, r, k, l, m, p;
            if (!0 !== this.config.useJS) {
                b = a.firstChild;
                h = a.getElementsByTagName("metrics")[0];
                null == h && (h = a.createElement("metrics"),
                    b.appendChild(h));
                b = a.createElement("vendor");
                b.setAttribute("id", "omniture");
                h.appendChild(b);
                g = [{
                    value: this.config.channel,
                    key: "OMNITURE_CHANNEL"
                }, {
                    value: this.config.account,
                    key: "OMNITURE_ACCOUNT"
                }, {
                    value: this.config.debugTracking,
                    key: "OMNITURE_DEBUG_TRACKING"
                }, {
                    value: this.config.trackLocal,
                    key: "OMNITURE_TRACK_LOCAL"
                }, {
                    value: this.config.visitorNamespace,
                    key: "OMNITURE_VISITOR_NAMESPACE"
                }, {
                    value: this.config.trackingServer,
                    key: "OMNITURE_TRACKING_SERVER"
                }, {
                    value: this.config.trackingServerSecure,
                    key: "OMNITURE_TRACKING_SERVER_SECURE"
                }, {
                    value: this.config.currencyCode,
                    key: "OMNITURE_CURRENCY_CODE"
                }, {
                    value: this.config.trackWhilePlaying,
                    key: "OMNITURE_TRACK_WHILE_PLAYING"
                }, {
                    value: this.config.trackMediaMethods,
                    key: "OMNITURE_TRACK_MEDIA_METHODS"
                }, {
                    value: this.config.mediaName,
                    key: "OMNITURE_MEDIA_NAME"
                }, {
                    value: this.config.playerName,
                    key: "OMNITURE_PLAYER_NAME"
                }];
                c = 0;
                for (e = g.length; c < e; c++) h = g[c], null != h.value && this.createProperty(a, h.key, h.value, b);
                c = this.config.Media;
                if (null != c) {
                    g = [{
                        value: c.autoTrack,
                        key: "OMNITURE_AUTO_TRACK"
                    }, {
                        value: c.segmentByMilestones,
                        key: "OMNITURE_SEGMENT_MILESTONES"
                    }, {
                        value: c.trackVars,
                        key: "OMNITURE_TRACKVARS"
                    }, {
                        value: c.trackEvents,
                        key: "OMNITURE_TRACKEVENTS"
                    }, {
                        value: c.trackUsingContextData,
                        key: "OMNITURE_TRACK_CONTEXT_DATA"
                    }, {
                        value: c.trackSecondIntervals,
                        key: "OMNITURE_TRACKSECOND_INTERVALS"
                    }];
                    e = 0;
                    for (r = g.length; e < r; e++) h = g[e], null != h.value && this.createProperty(a, h.key, h.value, b);
                    if (null != c.trackMilestones)
                        for (k = this.createProperty(a, "OMNITURE_TRACK_MILESTONES", null, b), e = c.trackMilestones, l = 0, m = e.length; l < m; l++)
                            for (f in h = e[l],
                                r = this.createProperty(a, h.percent, null, k), h) g = h[f], "percent" !== f && this.createProperty(a, f, g, r);
                    e = c.contextDataMapping;
                    if (null != e)
                        for (f in c = this.createProperty(a, "OMNITURE_CONTEXT_DATA", null, b), e)
                            if (g = e[f], "string" === typeof g && this.createProperty(a, f, g, c), g instanceof Array)
                                for (r = this.createProperty(a, f, null, c), k = 0, l = g.length; k < l; k++) h = g[k], this.createProperty(a, h.percent, h.events, r)
                }
                e = this.config.customLinkTracking;
                if (null != e)
                    for (f in r = this.createProperty(a, "OMNITURE_CUSTOM_LINK_TRACKING", null,
                        b), e)
                        if ("intervalReached" === f)
                            for (g = this.createProperty(a, f, null, r), m = e[f], l = 0, k = m.length; l < k; l++)
                                for (f in c = m[l], h = this.createProperty(a, c.interval, null, g), c) "interval" !== f && this.createProperty(a, f, c[f], h);
                        else this.createProperty(a, f, e[f], r);
                f = null != (d = this.config.events) ? d.video : void 0;
                if (null != f)
                    for (c = 0, g = f.length; c < g; c++) {
                        d = f[c];
                        switch (d.type) {
                            case "started":
                                h = "videoStart";
                                break;
                            case "ended":
                                h = "videoComplete";
                                break;
                            case "play":
                                h = "videoResume";
                                break;
                            case "pause":
                                h = "videoPause";
                                break;
                            default:
                                h =
                                    d.type
                        }
                        this.createProperty(a, h, d.data, b)
                    }
                f = null != (p = this.config.events) ? p.ads : void 0;
                if (null != f)
                    for (g = 0, p = f.length; g < p; g++) d = f[g], h = "started" === d.type ? "adStart" : "ended" === d.type ? "adComplete" : d.type, this.createProperty(a, h, d.data, b)
            }
        };
        var ea = function(a) {
            ea.__super__.constructor.call(this, a)
        };
        f(ea, R);
        ea.NAME = x.NAME;
        ea.prototype.defaults = {
            main: "s",
            heartbeat: null,
            account: null,
            playerName: null,
            mediaName: null,
            trackingServer: null,
            visitorNamespace: null,
            visitor: null,
            visitorID: null,
            pageName: null
        };
        ea.prototype.media =
            null;
        ea.prototype.started = !1;
        ea.prototype.ad = null;
        ea.prototype.adCurrentTime = null;
        ea.prototype.adStarted = !1;
        ea.prototype.adsEnabled = !1;
        ea.prototype.getMediaName = function() {
            return this.getConfigurationData().mediaName || this.media.getTitle()
        };
        ea.prototype.getPlayerName = function() {
            var a;
            return this.getConfigurationData().playerName || (null != (a = this.facade.player.retrieveProxy(ca.NAME)) ? a.getName() : void 0) || this.facade.player.config.name || "amp"
        };
        ea.prototype.getPlaybackCore = function() {
            var a;
            return (null !=
                (a = this.facade.player.retrieveProxy(da.NAME)) ? a.getActivePlaybackCore() : void 0) || this.facade.player.playback
        };
        ea.prototype.initialize = function() {
            var a, b;
            ea.__super__.initialize.call(this);
            this.media = this.facade.player.retrieveProxy(t.NAME);
            this.adsEnabled = null != (a = this.facade.player.ads) ? a.getEnabled() : void 0;
            if (null != this.plugin) {
                try {
                    null == this.plugin.Media && this.plugin.loadModule("Media")
                } catch (c) {
                    this.error("initialize", c)
                }
                null == (null != (b = this.plugin.Media) ? b.openAd : void 0) && (this.adStart = this.adEnded =
                    this.adPlay = this.adPause = this.adCurrentTime = function() {})
            }
        };
        ea.prototype.createPlugin = function() {
            return window[this.getConfigurationData().main]
        };
        ea.prototype.mediaChange = function() {
            var a;
            this.started = !1;
            this.adsEnabled = null != (a = this.facade.player.ads) ? a.getEnabled() : void 0
        };
        ea.prototype.start = function() {
            if (!0 !== this.started) {
                try {
                    this.started = !0, this.plugin.Media.open(this.getMediaName(), this.media.getDuration(), this.getPlayerName())
                } catch (a) {
                    this.error(a)
                }!0 !== this.adsEnabled && this.play()
            }
        };
        ea.prototype.play =
            function() {
                if (!0 !== this.started) this.start();
                else if (!0 !== this.adStarted) try {
                    this.plugin.Media.play(this.getMediaName(), this.getPlaybackCore().getCurrentTime() || 0)
                } catch (a) {
                    this.error(a)
                }
            };
        ea.prototype.pause = function() {
            if (!0 !== this.adStarted) try {
                this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime())
            } catch (a) {
                this.error(a)
            }
        };
        ea.prototype.seeking = function() {
            try {
                this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime())
            } catch (a) {
                this.error(a)
            }
        };
        ea.prototype.seeked =
            function() {
                try {
                    this.plugin.Media.play(this.getMediaName(), this.getPlaybackCore().getCurrentTime())
                } catch (a) {
                    this.error(a)
                }
            };
        ea.prototype.ended = function() {
            try {
                this.plugin.Media.stop(this.getMediaName(), this.getPlaybackCore().getCurrentTime()), this.plugin.Media.close(this.getMediaName()), this.started = !1
            } catch (a) {
                this.error(a)
            }
        };
        ea.prototype.getAd = function() {
            return this.ad
        };
        ea.prototype.setAd = function(a) {
            this.adStarted = !1;
            this.adCurrentTime = 0;
            return this.ad = a
        };
        ea.prototype.adStart = function() {
            try {
                this.adStarted = !0, this.plugin.Media.openAd(this.ad.title, this.ad.duration, this.getPlayerName(), this.getMediaName(), this.ad.type, this.ad.position, this.ad.cpm), this.adPlay()
            } catch (a) {
                this.error("ad start", a)
            }
        };
        ea.prototype.adPlay = function() {
            !0 !== this.adStarted && this.adStart();
            try {
                this.plugin.Media.play(this.ad.title, this.adCurrentTime || 0)
            } catch (a) {
                this.error("ad play", a)
            }
        };
        ea.prototype.adPause = function() {
            try {
                this.plugin.Media.stop(this.ad.title, this.adCurrentTime)
            } catch (a) {
                this.error("ad pause", a)
            }
        };
        ea.prototype.adCurrentTime =
            function(a) {
                this.adCurrentTime = a
            };
        ea.prototype.adEnded = function() {
            if (!1 !== this.adStarted) {
                try {
                    this.adStarted = !1, this.plugin.Media.stop(this.ad.title, this.ad.duration), this.plugin.Media.close(this.ad.title)
                } catch (a) {
                    this.error("ad end", a)
                }
                this.play()
            }
        };
        var sa = function(a) {
            sa.__super__.constructor.call(this, a)
        };
        f(sa, ea);
        sa.NAME = x.NAME;
        sa.prototype.aaPlugin = null;
        sa.prototype.playerPlugin = null;
        sa.prototype.heartbeat = null;
        sa.prototype.resumed = !1;
        sa.prototype.liveLinear = null;
        sa.prototype.initialize = function() {
            var a,
                b, c, e = this;
            sa.__super__.initialize.call(this);
            b = this.getConfigurationData();
            null != b.heartbeat.liveLinear && this.calculateLiveLinear();
            "undefined" !== typeof Visitor && null !== Visitor && (c = new Visitor(b.visitor.marketingCloudOrgId), c.trackingServer = b.visitor.trackingServer);
            a = new AppMeasurement;
            a.account = b.account;
            a.trackingServer = b.trackingServer;
            a.visitor = c;
            a.pageName = b.pageName;
            a.charSet = "UTF-8";
            a.visitorID = b.visitorID;
            c = this.createDelegate();
            this.playerPlugin = new ADB.va.plugins.videoplayer.VideoPlayerPlugin(c);
            c = new ADB.va.plugins.videoplayer.VideoPlayerPluginConfig;
            c.debugLogging = this.getDebug();
            this.playerPlugin.configure(c);
            c = new ADB.va.plugins.aa.AdobeAnalyticsPluginDelegate;
            c.onError = function(a) {
                e.facade.logger.error("AdobeAnalyticsPlugin error: " + a.getMessage() + " | " + a.getDetails())
            };
            this.aaPlugin = new ADB.va.plugins.aa.AdobeAnalyticsPlugin(a, c);
            c = new ADB.va.plugins.aa.AdobeAnalyticsPluginConfig;
            c.channel = b.heartbeat.channel;
            c.debugLogging = this.getDebug();
            this.aaPlugin.configure(c);
            c = new ADB.va.plugins.ah.AdobeHeartbeatPluginDelegate;
            c.onError = function(a) {
                e.facade.logger.error("AdobeHeartbeatPlugin error: " + a.getMessage() + " | " + a.getDetails())
            };
            a = new ADB.va.plugins.ah.AdobeHeartbeatPlugin(c);
            c = new ADB.va.plugins.ah.AdobeHeartbeatPluginConfig(b.heartbeat.trackingServer, b.heartbeat.publisher);
            c.ovp = b.heartbeat.ovp;
            c.sdk = b.heartbeat.sdk;
            c.ssl = !0 === b.heartbeat.ssl;
            c.debugLogging = this.getDebug();
            a.configure(c);
            b = [this.playerPlugin, this.aaPlugin, a];
            c = new ADB.va.HeartbeatDelegate;
            c.onError = function(a) {
                e.facade.logger.error("Heartbeat error: " +
                    a.getMessage() + " | " + a.getDetails())
            };
            this.heartbeat = new ADB.va.Heartbeat(c, b);
            c = new ADB.va.HeartbeatConfig;
            c.debugLogging = this.getDebug();
            this.heartbeat.configure(c)
        };
        sa.prototype.calculateLiveLinear = function() {
            var a, b, c = this;
            null == this.liveLinear && (this.liveLinear = {});
            !0 !== this.liveLinear.updating && (this.liveLinear.updating = !0, a = {
                updating: !1
            }, b = Date.now(), g.getUTC(function(e) {
                var d, f, h, g;
                h = Date.now();
                d = new Date(e);
                f = d.toJSON().replace(/([^T]+T).+/, "$1");
                g = c.getConfigurationData().heartbeat.liveLinear.timezone ||
                    "Z";
                a.utc = e;
                d = new Date(b + (h - b) / 2);
                a.client = d.getTime();
                a.offset = a.client - e;
                d = new Date(f + "00:00:00.000" + g);
                a.start = d.getTime();
                d = new Date(f + "23:59:59.999" + g);
                a.end = d.getTime();
                a.duration = Math.round((a.end - a.start) / 1E3);
                c.liveLinear = a
            }))
        };
        sa.prototype.calculateLiveLinearTime = function() {
            var a;
            a = Date.now() - this.liveLinear.offset;
            a = Math.round((a - this.liveLinear.start) / 1E3);
            a > this.liveLinear.duration && (a -= this.liveLinear.duration, this.calculateLiveLinear());
            return a
        };
        sa.prototype.createDelegate = function() {
            var a,
                b = this;
            a = new ADB.va.plugins.videoplayer.VideoPlayerPluginDelegate;
            a.getVideoInfo = function() {
                var a, e;
                a = b.getPlaybackCore();
                e = new ADB.va.plugins.videoplayer.VideoInfo;
                e.id = b.media.getGUID() || b.media.getTitle();
                e.playerName = b.getPlayerName();
                e.name = b.getMediaName();
                e.resumed = b.resumed;
                !0 === b.getConfigurationData().heartbeat.liveLinear.enabled ? (e.length = b.liveLinear.duration, e.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_LIVE, e.playhead = b.calculateLiveLinearTime()) : "live" === b.media.getTemporalType() ?
                    (e.length = -1, e.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_LIVE, e.playhead = 0) : (e.length = b.media.getDuration(), e.streamType = ADB.va.plugins.videoplayer.AssetType.ASSET_TYPE_VOD, a = null != a ? "function" === typeof a.getCurrentTime ? a.getCurrentTime() : void 0 : void 0, e.playhead = null == a || isNaN(a) ? 0 : a);
                return e
            };
            a.getAdInfo = function() {
                var a, e;
                a = new ADB.va.plugins.videoplayer.AdInfo;
                if (null == b.ad) return null;
                a.id = b.ad.id;
                e = b.ad.duration;
                a.length = isNaN(e) || 0 === e ? -1 : e;
                a.position = b.ad.position;
                a.name =
                    b.ad.title;
                return a
            };
            a.getAdBreakInfo = function() {
                var a;
                a = new ADB.va.plugins.videoplayer.AdBreakInfo;
                if (null == b.ad) return null;
                a.name = b.ad.type;
                a.position = b.ad.position;
                a.playerName = b.getPlayerName();
                a.startTime = b.getPlaybackCore().getCurrentTime();
                return a
            };
            a.getChapterInfo = function() {
                var a, e;
                e = b.media.getScene(b.getPlaybackCore().getCurrentTime());
                if (null == e) return null;
                a = new ADB.va.plugins.videoplayer.ChapterInfo;
                a.name = e.title;
                a.length = e.end - e.start;
                a.position = e.position;
                a.startTime = e.start;
                return a
            };
            a.onError = function(a) {
                b.facade.logger.error("Heartbeat Error:", a)
            };
            a.getQoSInfo = function() {
                new ADB.va.plugins.videoplayer.QoSInfo;
                return null
            };
            return a
        };
        sa.prototype.mediaChange = function() {
            var a, b;
            sa.__super__.mediaChange.call(this);
            this.resumed = !1;
            a = null != (b = this.getValue("heartbeat").metadata) ? b.video : void 0;
            null != a && this.aaPlugin.setVideoMetadata(a)
        };
        sa.prototype.start = function() {
            if (!0 !== this.started) {
                try {
                    this.playerPlugin.trackVideoLoad(), this.started = !0
                } catch (a) {
                    this.error(a)
                }
                this.play()
            }
        };
        sa.prototype.play =
            function() {
                !0 !== this.started && this.start();
                try {
                    this.playerPlugin.trackPlay()
                } catch (a) {
                    this.error(a)
                }
            };
        sa.prototype.pause = function() {
            try {
                this.playerPlugin.trackPause(), this.resumed = !0
            } catch (a) {
                this.error(a)
            }
        };
        sa.prototype.seeking = function() {
            try {
                this.playerPlugin.trackSeekStart()
            } catch (a) {
                this.error(a)
            }
        };
        sa.prototype.seeked = function() {
            try {
                this.playerPlugin.trackSeekComplete()
            } catch (a) {
                this.error(a)
            }
        };
        sa.prototype.ended = function() {
            try {
                this.playerPlugin.trackComplete(), this.playerPlugin.trackVideoUnload(),
                    this.started = !1, this.aaPlugin.setVideoMetadata(null)
            } catch (a) {
                this.error(a)
            }
        };
        sa.prototype.adStart = function() {
            var a, b;
            if (!0 !== this.started) a = null != (b = this.getValue("heartbeat").metadata) ? b.ad : void 0, null != a && this.aaPlugin.setAdMetadata(a), this.start(), setTimeout(this.adStart.bind(this), 0);
            else try {
                this.playerPlugin.trackAdStart()
            } catch (c) {
                this.error(c)
            }
        };
        sa.prototype.adEnded = function() {
            try {
                this.playerPlugin.trackAdComplete(), this.aaPlugin.setAdMetadata(null)
            } catch (a) {
                this.error(a)
            }
        };
        sa.prototype.adPlay =
            function() {};
        sa.prototype.adPause = function() {};
        var Og = function() {
            Og.__super__.constructor.call(this)
        };
        f(Og, A);
        Og.prototype.execute = function(a) {
            this.proxy.start()
        };
        var Pg = function() {
            Pg.__super__.constructor.call(this)
        };
        f(Pg, A);
        Pg.prototype.execute = function(a) {
            this.proxy.play()
        };
        var Qg = function() {
            Qg.__super__.constructor.call(this)
        };
        f(Qg, A);
        Qg.prototype.execute = function(a) {
            this.proxy.pause()
        };
        var Rg = function() {
            Rg.__super__.constructor.call(this)
        };
        f(Rg, A);
        Rg.prototype.execute = function(a) {
            this.proxy.seeking()
        };
        var Sg = function() {
            Sg.__super__.constructor.call(this)
        };
        f(Sg, A);
        Sg.prototype.execute = function(a) {
            this.proxy.seeked()
        };
        var gf = function() {
            gf.__super__.constructor.call(this)
        };
        f(gf, A);
        gf.prototype.execute = function(a) {
            this.proxy.ended()
        };
        var Tg = function() {
            Tg.__super__.constructor.call(this)
        };
        f(Tg, A);
        Tg.prototype.execute = function(a) {
            this.proxy.setMedia(a.getBody());
            this.proxy.start()
        };
        var Ug = function() {
            Ug.__super__.constructor.call(this)
        };
        f(Ug, A);
        Ug.prototype.execute = function(a) {
            this.proxy.setAd(a.getBody())
        };
        var Vg = function() {
            Vg.__super__.constructor.call(this)
        };
        f(Vg, A);
        Vg.prototype.execute = function(a) {
            this.proxy.adStart()
        };
        var Wg = function() {
            Wg.__super__.constructor.call(this)
        };
        f(Wg, A);
        Wg.prototype.execute = function(a) {
            this.proxy.adPlay()
        };
        var Xg = function() {
            Xg.__super__.constructor.call(this)
        };
        f(Xg, A);
        Xg.prototype.execute = function(a) {
            this.proxy.adPause()
        };
        var Yg = function() {
            Yg.__super__.constructor.call(this)
        };
        f(Yg, A);
        Yg.prototype.execute = function(a) {
            this.proxy.adEnded();
            this.proxy.setAd(null)
        };
        var Zg =
            function() {
                Zg.__super__.constructor.call(this)
            };
        f(Zg, A);
        Zg.prototype.execute = function(a) {
            this.proxy.adCurrentTime(a.getBody())
        };
        var $g = function() {
            $g.__super__.constructor.call(this)
        };
        f($g, A);
        $g.prototype.execute = function(a) {
            this.proxy.mediaChange()
        };
        var Lc = function(a, b, c) {
            this.startTime = a;
            this.endTime = b;
            this.id = c
        };
        Lc.prototype.id = null;
        Lc.prototype.startTime = null;
        Lc.prototype.endTime = null;
        Lc.prototype.text = null;
        Lc.prototype.html = null;
        Lc.prototype.align = null;
        var rd = function() {
            rd.__super__.constructor.call(this)
        };
        f(rd, M);
        rd.prototype.moduleName = "comscore";
        rd.prototype.createController = function() {
            rd.__super__.createController.call(this);
            this.registerCommand(d.STARTED, ff);
            this.registerCommand(d.CONTENT_CHANGED, ff);
            this.registerCommand(k.AD_STARTED, Ng)
        };
        rd.prototype.createModel = function() {
            this.registerProxy(new mc(this.config))
        };
        rd.prototype.listNotificationInterests = function() {
            return [d.STARTED, k.AD_STARTED, d.CONTENT_CHANGED]
        };
        l.registerPlugin("comscore", "html", rd);
        l.registerPlugin("comscore", "flash", je);
        var xi =
            function() {};
        xi.prototype.parse = function(a, b) {
            var c, e, d, f, h, k, r, l, m;
            b = b.replace(/\r/g, "");
            e = b.split("\n\n");
            l = 0;
            for (m = e.length; l < m; l++) {
                c = e[l];
                c = c.split("\n");
                try {
                    f = c[0], r = c[1].match(/([0-9:\,]+)\s*--\x3e\s*([0-9:\,]+)/).slice(1), h = g.flattenTimecode(r[0]), d = g.flattenTimecode(r[1]), k = c.slice(2)
                } catch (p) {
                    ia.warn("SRT Parsing Warning")
                }
                c = new Lc(h, d, "cue_" + f);
                c.html = "\x3cp\x3e" + k.join("\x3cbr /\x3e") + "\x3c/p\x3e";
                c.text = k.join("\n");
                a.cues.push(c)
            }
            return a
        };
        var yi = function() {};
        yi.prototype.parse = function(a,
                                      b) {
            var c, e, d, f, h, k, r, l, m, p, q;
            b = b.replace(/\r/g, "");
            e = b.split("\n\n");
            h = 0;
            /^WEBVTT/.test(e[0]) && e.shift();
            p = 0;
            for (q = e.length; p < q; p++)
                if (c = e[p], "" !== c) {
                    c = c.split("\n");
                    try {
                        h = /^[0-9]+$/.test(c[0]) ? c.shift() : ++h, m = c[0].match(/([0-9:\.]+)\s*--\x3e\s*([0-9:\.]+)([^\n]*)/).slice(1), k = m[2], r = g.flattenTimecode(m[0]), f = g.flattenTimecode(m[1]), l = c.slice(1)
                    } catch (t) {
                        ia.error("WebVTT Parse Error")
                    }
                    d = new Lc(r, f, "cue_" + h);
                    d.html = "\x3cp\x3e" + l.join("\x3cbr /\x3e") + "\x3c/p\x3e";
                    d.text = l.join("\n");
                    null != k && k.replace(/\s*([A-Za-z]+)\s*:\s*([\w\-\%]+)/g,
                        function(a, b, c) {
                            d[b] = c;
                            return ""
                        });
                    a.cues.push(d)
                }
            return a
        };
        var ti = function() {};
        ti.prototype.parse = function(a, b) {
            var c, e;
            "string" === typeof b && (b = fa.parse(b));
            Array.prototype.slice.call(b.querySelectorAll("styling style")).forEach(function(b, c, e) {
                var d;
                d = "";
                c = b.getAttribute("id") || b.getAttribute("xml:id");
                Array.prototype.slice.call(b.attributes).forEach(function(a, b, c) {
                    if ("tts" === a.prefix) return d += g.formatStyleName(a.localName) + ":" + a.nodeValue + ";"
                });
                a.styles[c] = d
            });
            Array.prototype.slice.call(b.querySelectorAll("body [style]")).forEach(function(b,
                                                                                            c, e) {
                c = b.getAttribute("style");
                b.setAttribute("style", a.styles[c])
            });
            e = b.querySelector("tt");
            e = e.getAttribute("lang") || e.getAttribute("xml:lang");
            if (void 0 === a.language || null === a.language) a.language = e;
            c = Array.prototype.slice.call(b.querySelectorAll("body p[begin]"));
            c.forEach(function(b, e, d) {
                var f;
                d = b.getAttribute("begin");
                b.removeAttribute("begin");
                null != b.getAttribute("end") ? (f = b.getAttribute("end"), b.removeAttribute("end")) : null != c[e + 1] && (f = c[e + 1].getAttribute("begin"));
                e = new Lc(g.flattenTimecode(d),
                    g.flattenTimecode(f), "cue_" + e);
                f = b.getAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign");
                null != f && (e.align = "center" === f ? "middle" : f, b.removeAttributeNS("http://www.w3.org/ns/ttml#styling", "textAlign"));
                b = fa.serialize(b);
                b = b.replace(/\s*xmlns="[^"]*"/, "");
                e.html = b;
                b = b.replace(/^<p[^>]*>/, "");
                b = b.replace(/<\/p>$/, "");
                b = b.replace(/<br\/>/, "\n");
                b = b.replace(/<span style="([^"]*)"/, "\x3cc.$1");
                b = b.replace(/<\/span>/, "\x3c/c\x3e");
                e.text = b;
                a.cues.push(e)
            });
            return a
        };
        var eb = function() {
            var a, b = this;
            this.captions = [];
            this.head = document.getElementsByTagName("head")[0];
            a = window.com || {};
            a.akamai = a.akamai || {};
            a.akamai.amp = a.akamai.amp || {};
            a.akamai.amp.plugins = a.akamai.amp.plugins || {};
            a.akamai.amp.plugins.subply = a.akamai.amp.plugins.subply || {};
            a.akamai.amp.plugins.subply.response = function(a) {
                b.parse(a);
                b.poll()
            };
            null == window.com && (window.com = a);
            eb.__super__.constructor.call(this, this.constructor.NAME)
        };
        f(eb, puremvc.Proxy);
        eb.NAME = "LiveCaptionProxy";
        eb.prototype.data = {
            base: "http://test.plymedia.com.s3.amazonaws.com/online/Akamai_",
            interval: 1E3
        };
        eb.prototype.caption = null;
        eb.prototype.head = null;
        eb.prototype.script = null;
        eb.prototype.timeout = null;
        eb.prototype.getURL = function() {
            return this.data.url
        };
        eb.prototype.setURL = function(a) {
            return this.data.url = a
        };
        eb.prototype.start = function() {
            this.send()
        };
        eb.prototype.poll = function() {
            var a = this;
            setTimeout(function() {
                a.send()
            }, this.data.interval || 1E3)
        };
        eb.prototype.send = function() {
            null != this.script && this.head.removeChild(this.script);
            this.script = g.loadScript(this.data.base + this.data.url +
                ".js?nocache\x3d" + Date.now())
        };
        eb.prototype.stop = function() {
            clearTimeout(timeout)
        };
        eb.prototype.parse = function(a) {
            var b, c, e, d;
            if (a.Stream === this.data.url && !(null != this.caption && this.caption.id >= a.Ticks)) {
                this.caption = new Lc(g.flattenTimecode(a.From), g.flattenTimecode(a.To), a.Ticks);
                this.caption.text = a.Text;
                b = "";
                d = a.Text.split("\n");
                c = 0;
                for (e = d.length; c < e; c++) a = d[c], "" !== b && (b += "\x3cbr /\x3e"), b += "\x3cspan\x3e" + a + "\x3c/span\x3e";
                this.caption.html = "\x3cp\x3e" + b + "\x3c/p\x3e";
                this.sendNotification(G.CUE_CHANGE, [this.caption]);
                return this.caption
            }
        };
        var Qa = function(a, b) {
            Qa.__super__.constructor.call(this, a, b)
        };
        f(Qa, I);
        Qa.NAME = "CaptioningWrapper";
        Qa.prototype.flashPlugins = [{
            id: "AdobeCaptionPlugin",
            src: "#{paths.resources}plugins/AdobeCaptionPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "AdobeCaptionPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "AMPCaptionPlugin",
            src: "#{paths.resources}plugins/AMPCaptionPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "AMPCaptionPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "CaptionSettingsPlugin",
            src: "#{paths.resources}plugins/CaptionSettingsPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "CaptionSettingsPlugin",
            type: "application/x-shockwave-flash"
        }];
        Qa.prototype.flashView = {
            elements: {
                captionDisplay: {
                    attributes: {
                        defaultMessage: "Sorry! No captions available for this stream",
                        initState: "cookie",
                        position: "relative",
                        settingsEnabled: "true",
                        style: "bottom: 0px; windowColor :0x000000; windowOpacity: 0; font: Monospaced Serif; fontColor: 0xffffff; fontOpacity: 1; fontBGColor: 0x000000; fontBGOpacity: 0; edgeType: none; edgeColor: 0x000000; edgeOpacity: 1; scroll: Pop-Out; fontSize: 12;"
                    }
                },
                controls: {
                    elements: {
                        captionBtn: {}
                    }
                }
            }
        };
        Qa.prototype.hidden = !0;
        Qa.prototype.createXML = function(a) {
            var b, c, e, d;
            e = null != (d = this.config.flash) ? d.subply : void 0;
            if (null != e) try {
                null != e.timeMethod && (c = a.getElementsByTagName("player")[0], c.setAttribute("subply_time_method", e.timeMethod)), null != e.plugin && (b = a.firstChild, e = a.getElementsByTagName("subply")[0], null == e && (e = a.createElement("subply"), b.appendChild(e)), this.createProperty(a, "SUBPLY_URL", this.config.flash.subply.plugin, e))
            } catch (f) {
                this.facade.logger.error("[AMP CAPTIONING ERROR]",
                    f)
            }
        };
        Qa.prototype.createFlashVars = function(a) {
            var b, c, e, d, f, h;
            e = this.player.config;
            if (null != (null != (b = e.media) ? b.track : void 0)) {
                d = g.selectTrack(e.media.track, "captions");
                null != d.src && "" !== d.src && (a.caption_url = d.src);
                if (0 < e.media.track.length) {
                    c = [];
                    b = [];
                    h = e.media.track;
                    e = 0;
                    for (f = h.length; e < f; e++) d = h[e], c.push(d.src), b.push(d.srclang);
                    a.caption_url = c.join(",");
                    a.caption_language = b.join(",")
                }
                a.caption_type = null != d.type ? encodeURIComponent(d.type) : "application/ttml+xml"
            }
            null == a.caption_language && (a.caption_language =
                "en-us")
        };
        Qa.prototype.listNotificationInterests = function() {
            return Qa.__super__.listNotificationInterests.apply(this, arguments).concat([d.MEDIA_CHANGE, q.CAPTIONING_REQUEST, q.CAPTION_LANG_CHANGE, q.INITIALIZED])
        };
        Qa.prototype.handleNotification = function(a) {
            var b, c, e;
            Qa.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.CAPTION_LANG_CHANGE:
                    e = "";
                    break;
                case q.CAPTIONING_REQUEST:
                    e = "visibilitychange";
                    a = a.enabled;
                    this.hidden = !a;
                    break;
                case d.MEDIA_CHANGE:
                    b = a;
                    if (null != b.track) {
                        c =
                            g.selectTrack(b.track, "captions");
                        if (null == c) return;
                        null != c.src && "" !== c.src && (b.captioningUrl = c.src);
                        null != c.type && (b.captioningType = c.type || "application/ttml+xml")
                    }
                    break;
                case q.INITIALIZED:
                    this.hidden = !this.player.getMediaElement().getPlayerProperty("isCaptionVisible")
            }
            null != e && "" !== e && this.dispatchEvent(new V(e, a))
        };
        Qa.prototype.getHidden = function() {
            return this.hidden
        };
        Qa.prototype.setHidden = function(a) {
            this.hidden = a;
            this.facade.getMediaElement().setPlayerProperty("captionDisplay", {
                visible: !a
            });
            return a
        };
        Qa.prototype.selectTrackByIndex = function(a) {};
        Qa.prototype.selectTrackByLanguage = function(a) {
            this.facade.getMediaElement().setTrackByLanguage(a)
        };
        Qa.prototype.changeSettings = function(a) {
            if (null != (null != a ? a.fontFamily : void 0) && "object" === typeof a.fontFamily) return this.facade.getMediaElement().setPlayerProperty("captionSettingsUI", a);
            this.hidden = !a.visible;
            this.facade.getMediaElement().setPlayerProperty("captionDisplay", {
                visible: a.visible,
                style: this.parseObject(a)
            })
        };
        Qa.prototype.parseObject =
            function(a) {
                var b, c, e, d;
                b = {};
                try {
                    for (e in a) switch (e) {
                        case "fontFamily":
                            b.font = a[e];
                            break;
                        case "fontColor":
                        case "backgroundColor":
                        case "edgeColor":
                        case "windowColor":
                            c = "fontColor" === e ? "font" : "backgroundColor" === e ? "fontBG" : "edgeColor" === e ? "edge" : "window"; - 1 !== (null != (d = a[e]) ? d.indexOf("rgba") : void 0) && (b[c + "Color"] = this.parseRGBA(a[e]), b[c + "Opacity"] = a[e].replace(/^.*,(.+)\)/, "$1"));
                            break;
                        default:
                            b[e] = a[e]
                    }
                    delete b.visible
                } catch (f) {
                    this.facade.logger.error("Captioning Settings Parse Error", f)
                }
                return b
            };
        Qa.prototype.parseRGBA = function(a) {
            return (a = a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === a.length ? "0x" + ("0" + parseInt(a[1], 10).toString(16)).slice(-2) + ("0" + parseInt(a[2], 10).toString(16)).slice(-2) + ("0" + parseInt(a[3], 10).toString(16)).slice(-2) : ""
        };
        l.registerPlugin("captioning", "flash", Qa);
        var ah = function() {
            ah.__super__.constructor.call(this)
        };
        f(ah, A);
        ah.prototype.execute = function(a) {
            var b, c, e, d, f, h;
            d = a.getBody();
            b = this.proxy.getTrack();
            if (null != b) {
                a = b.activeCues;
                e = b.cues;
                b = !1;
                f = 0;
                for (h = e.length; f < h; f++) c = e[f], d >= c.startTime && d < c.endTime ? 0 <= ve.call(a, c) || (a.push(c), b = !0) : (c = a.indexOf(c), -1 !== c && (a.splice(c, 1), b = !0));
                !0 === b && this.sendNotification(G.CUE_CHANGE, a)
            }
        };
        var bh = function() {
            bh.__super__.constructor.call(this)
        };
        f(bh, A);
        bh.prototype.execute = function(a) {
            var b;
            b = a.getBody();
            a = a.getBody().track;
            this.proxy.setTracks(a);
            null == a ? this.sendNotification(G.ENABLED, !1) : (this.proxy.selectRenderer(b), this.sendNotification(G.ENABLED, !0))
        };
        var hf = function() {
            hf.__super__.constructor.call(this)
        };
        f(hf, y);
        hf.prototype.execute = function(a) {
            this.proxy.setHidden(!a.getBody());
            hf.__super__.execute.call(this, a)
        };
        var ch = function() {
            ch.__super__.constructor.call(this)
        };
        f(ch, puremvc.SimpleCommand);
        ch.prototype.execute = function(a) {
            var b, c;
            a = this.facade.retrieveProxy(W.NAME);
            b = a.getTrack();
            null == b && 0 < (null != (c = a.getTracks()) ? c.length : void 0) && (b = a.autoSelectTrack());
            !0 === (null != b ? b.isLive : void 0) && (this.facade.removeCommand(d.TIME_UPDATE), a = this.facade.retrieveProxy(eb.NAME), null == a && (a = new eb, this.facade.registerProxy(a)),
                a.setURL(b.src), a.start())
        };
        CaptionParsers = {
            "application/ttml+xml": new ti,
            "application/x-subrip": new xi,
            "text/vtt": new yi,
            undefined: new ti
        };
        var G = {
                VISIBILITY_CHANGE: "captioningvisibilitychange",
                ENABLED: "captioningenabled",
                TRACKS_LOADED: "captioningtracksloaded",
                TRACK_SELECTED: "captioningtrackselected",
                CUE_CHANGE: "captioningcuechange",
                SETTINGS_VISIBILITY_CHANGE: "captioningsettingsvisibility",
                TOGGLE_SETTINGS_VISIBILITY: "togglesettingsvisibility",
                SETTINGS_CHANGE: "captioningsettingschange"
            },
            Mc = function(a,
                          b) {
                var c, e = this;
                this.kind = a.kind;
                this.type = a.type;
                this.src = a.src;
                this.language = a.srclang;
                this.label = a.label || this.srclang || this.kind;
                this.cues = a.cues || [];
                this.styles = a.styles || {};
                this.activeCues = [];
                this.isLive = /live-subply/.test(this.type);
                null == this.src || "" === this.src || this.isLive ? setTimeout(b, 1) : c = g.get(this.src, {
                    onload: function() {
                        try {
                            CaptionParsers[e.type].parse(e, c.response)
                        } catch (a) {
                            ia.error("Could not parse caption track: " + e.src);
                            return
                        }
                        "function" === typeof b && b()
                    },
                    onerror: function() {
                        ia.error("Could not load caption track: " +
                            e.src)
                    }
                })
            };
        Mc.prototype.kind = null;
        Mc.prototype.src = null;
        Mc.prototype.language = null;
        Mc.prototype.cues = null;
        Mc.prototype.label = null;
        Mc.prototype.activeCues = null;
        Mc.prototype.type = null;
        Mc.prototype.styles = null;
        Mc.prototype.isLive = !1;
        var le = function(a, b, c, e) {
            le.__super__.constructor.call(this, a, b, c, e)
        };
        f(le, ba);
        le.prototype.initializeNotifier = function(a) {
            le.__super__.initializeNotifier.call(this, a);
            this.plugin = this.facade.retrieveProxy(x.NAME);
            this.media = this.facade.player.retrieveProxy(t.NAME)
        };
        var W =
            function(a) {
                this.activeCaptions = [];
                this.providers = {};
                this.tracks = [];
                this.rendererMap = [];
                this.settings = {};
                W.__super__.constructor.call(this, a)
            };
        f(W, R);
        W.NAME = x.NAME;
        W.TEXT_TRACK_RENDERER = "caption-text";
        W.prototype.defaults = {
            useNative: !1,
            crossorigin: null
        };
        W.prototype.hidden = !0;
        W.prototype.tracks = null;
        W.prototype.track = null;
        W.prototype.activeCaptions = null;
        W.prototype.captions = null;
        W.prototype.loaded = !0;
        W.prototype.rendererMap = null;
        W.prototype.settings = null;
        W.prototype.getSettings = function() {
            return this.settings
        };
        W.prototype.setSettings = function(a) {
            this.settings = a
        };
        W.prototype.getUseNative = function() {
            return this.getValue("useNative")
        };
        W.prototype.getCrossOrigin = function() {
            return this.getValue("crossorigin")
        };
        W.prototype.getTracks = function() {
            return this.tracks
        };
        W.prototype.setTracks = function(a) {
            var b, c, e, d, f, h, g = this;
            this.tracks = [];
            this.track = null;
            if (null != a) {
                b = a.length;
                e = 0;
                d = function() {
                    e++;
                    e === b && (g.sendNotification(G.TRACKS_LOADED, g.tracks), g.autoSelectTrack())
                };
                f = 0;
                for (h = a.length; f < h; f++) c = a[f], c = new Mc(c,
                    d), this.tracks.push(c);
                return a
            }
        };
        W.prototype.registerRenderer = function(a) {
            null != a && (a.proxy = this, this.rendererMap.push(a))
        };
        W.prototype.retrieveRenderer = function(a) {
            var b, c, e, d;
            d = this.rendererMap;
            c = 0;
            for (e = d.length; c < e; c++)
                if (b = d[c], b.getRendererName() === a) return b
        };
        W.prototype.removeRenderer = function(a) {
            var b;
            b = this.retrieveRenderer(a);
            b.proxy = null;
            if (null == b) return null;
            a = this.rendererMap.indexOf(b);
            this.rendererMap.splice(a, 1);
            return b
        };
        W.prototype.getRenderer = function() {
            return this.renderer
        };
        W.prototype.setRenderer = function(a) {
            if (a === this.renderer) return a;
            null != this.renderer && this.facade.removeMediator(W.TEXT_TRACK_RENDERER);
            this.renderer = a;
            null != this.renderer && this.facade.registerMediator(this.renderer);
            return a
        };
        W.prototype.selectRenderer = function(a) {
            var b, c, e, d, f, h, g, k;
            b = null;
            e = a.track;
            if (null != e) {
                d = 0;
                for (h = e.length; d < h; d++) {
                    c = e[d];
                    k = this.rendererMap;
                    f = 0;
                    for (g = k.length; f < g; f++)
                        if (a = k[f], !0 === a.canUseResource(c)) {
                            b = a;
                            break
                        }
                    if (null != b) break
                }
                this.setRenderer(b);
                return b
            }
        };
        W.prototype.getTrack =
            function() {
                return this.track
            };
        W.prototype.setTrack = function(a) {
            this.track = a;
            this.captions = this.track.cues;
            this.activeCaptions = [];
            this.sendNotification(G.TRACK_SELECTED, this.track);
            return a
        };
        W.prototype.selectTrackByIndex = function(a) {
            var b;
            0 <= a && a < this.tracks.length && (b = this.tracks[a], this.setTrack(b));
            return b
        };
        W.prototype.selectTrackByLanguage = function(a) {
            var b, c, e, d, f;
            f = this.tracks;
            e = 0;
            for (d = f.length; e < d; e++)
                if (b = f[e], b.language === a) {
                    c = b;
                    break
                }
            null != c && this.setTrack(c);
            return c
        };
        W.prototype.getHidden =
            function() {
                return this.hidden
            };
        W.prototype.setHidden = function(a) {
            this.hidden = a;
            try {
                localStorage.setItem(cc.PREFIX + "caption-enabled", !this.hidden)
            } catch (b) {
                this.facade.logger.error("LocalStorage Not Supported on this Browser", b)
            }
            return a
        };
        W.prototype.autoSelectTrack = function() {
            var a, b, c;
            a = null != (c = this.facade.player.retrieveProxy(ra.NAME)) ? c.getLanguage() : void 0;
            null != a && (a = a.split("-").shift(), b = this.selectTrackByLanguage(a));
            null == b && (b = this.tracks[0], this.setTrack(b));
            return b
        };
        var nc = function(a) {
            nc.__super__.constructor.call(this,
                null, null, a, null)
        };
        f(nc, le);
        nc.prototype.componentName = W.TEXT_TRACK_RENDERER;
        nc.prototype.captionText = null;
        nc.prototype.getRendererName = function() {
            return "html"
        };
        nc.prototype.canUseResource = function(a) {
            return null == a ? !1 : -1 !== [g.mimeTypes.srt, g.mimeTypes.ttml, g.mimeTypes.vtt].indexOf(a.type)
        };
        nc.prototype.getCaptionDisplayHeight = function() {
            var a, b, c;
            a = 0;
            for (b = c = this.viewComponent.childNodes.length; b;) {
                --b;
                if (3 === c && 0 === b) break;
                a += g.getActualSize(this.viewComponent.childNodes[b]).height
            }
            return a + "px"
        };
        nc.prototype.scrollCaptions = function(a, b, c) {
            var e, d, f = this;
            null == a && (a = this.viewComponent.scrollHeight);
            null == b && (b = this.viewComponent.scrollTop);
            null == c && (c = 20);
            d = (a - b) / c;
            e = function() {
                var c;
                if (b < a) return f.viewComponent.scrollTop = b += d, setTimeout(e, 20);
                for (c = []; 2 < f.viewComponent.childNodes.length;) c.push(f.viewComponent.removeChild(f.viewComponent.firstChild));
                return c
            };
            e()
        };
        nc.prototype.listNotificationInterests = function() {
            return [G.CUE_CHANGE, d.CHANGE_MEDIA]
        };
        nc.prototype.handleNotification = function(a) {
            var b,
                c, e, f;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.CHANGE_MEDIA:
                    this.viewComponent.innerHTML = "";
                    break;
                case G.CUE_CHANGE:
                    b = "";
                    c = 0;
                    for (f = a.length; c < f; c++) e = a[c], b += e.html;
                    switch (this.plugin.getSettings().scroll) {
                        case "popout":
                            this.viewComponent.innerHTML = b;
                            break;
                        case "rollon":
                        case "painton":
                            a = document.createElement("div");
                            a.innerHTML = b;
                            e = a.childNodes;
                            c = a = 0;
                            for (b = e.length; a < b; c = ++a) c = e[c], this.viewComponent.appendChild(c);
                            this.viewComponent.style.maxHeight = this.getCaptionDisplayHeight();
                            this.scrollCaptions()
                    }
            }
        };
        var Ia = function(a) {
            Ia.__super__.constructor.call(this, a)
        };
        f(Ia, Bd);
        Ia.prototype.video = null;
        Ia.prototype.index = -1;
        Ia.prototype.plugin = null;
        Ia.prototype.parallelement = null;
        Ia.prototype.paralleltimer = null;
        Ia.prototype.lineheight = null;
        Ia.prototype.paddingvalue = 6;
        Ia.prototype.cueChangeListener = null;
        Ia.NAME = W.TEXT_TRACK_RENDERER;
        Ia.prototype.getRendererName = function() {
            return "native"
        };
        Ia.prototype.canUseResource = function(a) {
            var b, c;
            if (null == a || null == document.createElement("video").textTracks) return !1;
            c = [g.mimeTypes.vtt, g.mimeTypes.cea608, g.mimeTypes.cea708];
            b = a.type;
            return b === c[1] || b === c[2] ? !0 : /iphone|ipad/.test(g.getDevice()) || this.proxy.getUseNative() ? -1 !== c.indexOf(a.type) : !1
        };
        Ia.prototype.onRegister = function() {
            this.plugin = this.facade.retrieveProxy(W.NAME);
            this.cueChangeListener = this.cueChange.bind(this);
            this.facade.player.getMediaElement().textTracks.addEventListener("addtrack", this.updateTrack.bind(this));
            this.facade.player.getMediaElement().textTracks.addEventListener("cuechange", this.cueChangeListener)
        };
        Ia.prototype.listNotificationInterests = function() {
            return [G.VISIBILITY_CHANGE, G.TRACK_SELECTED, G.TRACKS_LOADED, d.LOADED_METADATA, d.CAN_PLAY_THROUGH]
        };
        Ia.prototype.handleNotification = function(a) {
            var b, c, e, f, v;
            b = a.getBody();
            switch (a.getName()) {
                case G.TRACKS_LOADED:
                    this.tracks = b;
                    break;
                case G.TRACK_SELECTED:
                    this.facade.player.getMediaElement().textTracks.length && (c = this.facade.player.getMediaElement().textTracks[this.index]);
                    null != c && (c.mode = "hidden");
                    this.index = this.plugin.getTracks().indexOf(b);
                    this.lang =
                        b.language;
                    this.updateTrack();
                    break;
                case G.VISIBILITY_CHANGE:
                case d.CAN_PLAY_THROUGH:
                    this.updateTrack();
                    break;
                case d.LOADED_METADATA:
                    if (null == this.tracks) break;
                    a = this.facade.player.getMediaElement();
                    c = this.plugin.getCrossOrigin();
                    null != c && a.setAttribute("crossorigin", c);
                    v = this.tracks;
                    e = 0;
                    for (f = v.length; e < f; e++) c = v[e], c.type === g.mimeTypes.vtt && (b = document.createElement("track"), b.src = c.src, null != c.kind && (b.kind = c.kind), null != c.language && (b.srclang = c.language), null != c.label && (b.label = c.label), b["default"] =
                        "default" in c, a.appendChild(b));
                    this.tracks = null
            }
        };
        Ia.prototype.updateTrack = function(a) {
            var b, c, e, d, f, h, g;
            f = this.facade.player.getMediaElement().textTracks;
            b = e = 0;
            for (d = f.length; e < d; b = ++e)
                if (c = f[b], /subtitles|captions/.test(c.kind) && (c.language === this.lang || !c.language.length)) {
                    if (null == c) return;
                    this.index = b;
                    c.mode = this.plugin.getHidden() ? "hidden" : "showing"
                }
            a && "metadata" !== (null != (h = a.track) ? h.kind : void 0) && null != (g = this.plugin) && g.config.useparallelrendering && !this.parallelement && (this.createParallelement(),
                this.useParallelRendering(!0, a.track))
        };
        Ia.prototype.createParallelement = function() {
            if (!this.parallelement) return this.parallelement = document.createElement("div"), this.parallelement.className = "akamai-caption-container", this.viewComponent.appendChild(this.parallelement), this.lineheight = window.getComputedStyle(this.parallelement).lineHeight.replace("px", ""), this.parallelement
        };
        Ia.prototype.useParallelRendering = function(a, b) {
            var c;
            null != (c = this.plugin) && (c.config.useparallelrendering = a);
            b || (b = this.facade.player.getMediaElement().textTracks[this.index]);
            return !0 === a ? b.addEventListener("cuechange", this.cueChangeListener) : b.removeEventListener("cuechange", this.cueChangeListener)
        };
        Ia.prototype.cueChange = function(a) {
            var b, c, e, d, f;
            this.paralleltimer && (clearTimeout(this.paralleltimer), this.paralleltimer = null);
            this.parallelement.innerHTML = "";
            c = [];
            for (e = 0; e < a.target.activeCues.length;) c[e] = document.createElement("div"), c[e].className = "akamai-caption-text", d = -1 !== navigator.userAgent.indexOf("Firefox") ? a.target.activeCues[e].position - 50 + "%" : a.target.activeCues[e].position +
                "%", f = null != a.target.activeCues[e].snapToLines && !0 === a.target.activeCues[e].snapToLines ? a.target.activeCues[e].line * this.lineheight : 10 * (this.facade.player.getMediaElement().getBoundingClientRect().height / 100) * a.target.activeCues[e].line, 0 < e && f && (b = document.getElementsByClassName("akamai-caption-container")[0].childNodes[0].offsetHeight - this.lineheight, f += b * e), f += "px", c[e].style.left = d, c[e].style.top = f, c[e].style.textAlign = "left", c[e].style.position = "absolute", c[e].style.bottom = "auto", c[e].style.display =
                "inline", c[e].style.padding = this.paddingvalue + "px", c[e].style.width = "auto", c[e].style["min-height"] = "0px", document.getElementsByClassName("akamai-caption-container")[0].appendChild(c[e]), b = document.createElement("p"), b.innerHTML = a.target.activeCues[e].text, b.style.margin = "0px", b.style.display = "block", c[e].appendChild(b), e === a.target.activeCues.length - 1 && (b = a.target.activeCues[e].endTime ? a.target.activeCues[e].endTime : 0, d = a.target.activeCues[e].startTime ? a.target.activeCues[e].startTime : 0, b = 1E3 * (b -
                d), 500 < b && (this.paralleltimer = setTimeout(this.timeout.bind(this), b))), e++
        };
        Ia.prototype.timeout = function() {
            this.paralleltimer && (clearTimeout(this.paralleltimer), this.paralleltimer = null, this.parallelement.innerHTML = "")
        };
        var Fa = function(a) {
            this.list = {
                font: null,
                language: null,
                edge: null,
                size: null,
                scroll: null
            };
            this.picker = {
                color: null,
                background: null,
                edge: null,
                window: null
            };
            this.toggle = {
                ON: null,
                OFF: null,
                disabled: !1
            };
            this.captioningObject = {
                "default": {
                    fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
                    size: "small",
                    scroll: "popout",
                    fontColor: "rgba(255,255,255,1)",
                    edgeType: "text-shadow: 0px 0px 0px",
                    edgeColor: "rgba(0, 0, 0, 0)",
                    backgroundColor: "rgba(0,0,0,0)",
                    windowColor: "rgba(0,0,0,0.5)"
                },
                appliedStyleText: "",
                selected: {
                    fontFamily: null,
                    size: null,
                    fontColor: null,
                    edgeType: null,
                    edgeColor: null,
                    backgroundColor: null,
                    windowColor: null
                },
                preset1: {
                    fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
                    size: "medium",
                    fontColor: "rgba(255,255,255,1)",
                    edgeType: "text-shadow: 0px 0px 0px",
                    edgeColor: "rgba(0, 0, 0, 0)",
                    backgroundColor: "rgba(0,0,0,0)",
                    windowColor: "rgba(0,0,0,0)"
                },
                preset2: {
                    fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
                    size: "medium",
                    fontColor: "rgba(255,255,0,1)",
                    edgeType: "text-shadow: 0px 0px 0px",
                    edgeColor: "rgba(0, 0, 0, 0)",
                    backgroundColor: "rgba(0,0,0,0)",
                    windowColor: "rgba(0,0,0,0)"
                },
                preset3: {
                    fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
                    size: "medium",
                    fontColor: "rgba(255,255,255,1)",
                    edgeType: "text-shadow: 0px 0px 0px",
                    edgeColor: "rgba(0, 0, 0, 0)",
                    backgroundColor: "rgba(0,0,0,1)",
                    windowColor: "rgba(0,0,0,0)"
                },
                preset4: {
                    fontFamily: "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace",
                    size: "medium",
                    fontColor: "rgba(255,255,0,1)",
                    edgeType: "text-shadow: 0px 0px 0px",
                    edgeColor: "rgba(0, 0, 0, 1)",
                    backgroundColor: "rgba(0,0,0,0)",
                    windowColor: "rgba(0,0,0,0.5)"
                },
                instance: null
            };
            Fa.__super__.constructor.call(this, null, null, a, null)
        };
        f(Fa, le);
        Fa.prototype.componentName = "captioning-settings";
        Fa.prototype.settingsUiVisible = !1;
        Fa.prototype.captionningStyle =
            null;
        Fa.prototype.swatchColorCurr = null;
        Fa.prototype.swatchOpacityCurr = null;
        Fa.prototype.colorPicker = null;
        Fa.prototype.colorPickerOpacity = null;
        Fa.prototype.advancedSettingContainer = null;
        Fa.prototype.scroll = {
            type: "popout",
            typeSpeed: 5,
            lines: 2,
            scrollTimer: [],
            speed: 10,
            popout: null,
            rollup: null,
            painton: null
        };
        Fa.prototype.onRegister = function() {
            var a, b, c, e, d, f, h = this;
            Fa.__super__.onRegister.call(this);
            c = this.create("captioning-titlebar");
            this.create("captioning-title", c, "span", this.localizationManager.getString(D.MSG_CC_TITLE));
            this.toggle.OFF = this.create("captioning-toggle-btn", c, "div", "OFF");
            this.toggle.ON = this.create("captioning-toggle-btn", c, "div", "ON");
            m.create(this.toggle.ON, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.toggle.disabled || h.toggleButtonHandler(!0);
                return !1
            });
            this.toggle.disabled || za.add("captioning-floater-btnselected", this.toggle.OFF, this.classList.prefix);
            m.create(this.toggle.OFF, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.toggle.disabled || h.toggleButtonHandler(!1);
                return !1
            });
            c = this.create("captioning-row");
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_LANGUAGE));
            this.list.language = this.create("captioning-dropdown", c, "select");
            this.languageListPopulate();
            m.create(this.list.language, "change", function(a) {
                var b;
                a.stopImmediatePropagation();
                b = "None" !== a.target.selectedValue;
                h.sendNotification(G.VISIBILITY_CHANGE, b);
                b && h.facade.setTrack(h.facade.selectTrackByIndex(a.target.selectedIndex));
                return !1
            });
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_PRESETS));
            a = this.create(["captioning-preset", "captioning-preset1"], c, null, "Aa");
            b = this.create(["captioning-preset", "captioning-preset2"], c, null, "Aa");
            f = this.create(["captioning-preset", "captioning-preset3"], c, null, "Aa");
            c = this.create(["captioning-preset", "captioning-preset4"], c, null, "Aa");
            m.create(a, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected = h.cloneObject(h.captioningObject.preset1);
                h.applyCaptioningStyle();
                return !1
            });
            m.create(b, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected = h.cloneObject(h.captioningObject.preset2);
                h.applyCaptioningStyle();
                return !1
            });
            m.create(f, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected = h.cloneObject(h.captioningObject.preset3);
                h.applyCaptioningStyle();
                return !1
            });
            m.create(c, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected = h.cloneObject(h.captioningObject.preset4);
                h.applyCaptioningStyle();
                return !1
            });
            this.advancedSettingContainer = this.create("captioning-advanced-container");
            c = this.create("captioning-row", this.advancedSettingContainer);
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_FONT));
            this.list.font = this.create("captioning-dropdown", c, "select");
            this.create(null, this.list.font, "option", "Monospaced Serif").value = "'Courier New', Courier, 'Nimbus Mono L', 'Cutive Mono', monospace";
            this.create(null, this.list.font, "option", "Proportional Serif").value = "'Times New Roman', Times, Georgia, Cambria, 'PT Serif Caption', serif";
            this.create(null,
                this.list.font, "option", "Monospaced Sans-Serif").value = "'Deja Vu Sans Mono', 'Lucida Console', Monaco, Consolas, 'PT Mono', monospace";
            this.create(null, this.list.font, "option", "Proportional Sans-Serif").value = "Roboto, 'Arial Unicode Ms', Arial, Helvetica, Verdana, 'PT Sans Caption', sans-serif";
            this.create(null, this.list.font, "option", "Casual").value = "'Comic Sans MS', Impact, Handlee, fantasy";
            this.create(null, this.list.font, "option", "Cursive").value = "'Monotype Corsiva', 'URW Chancery L', 'Apple Chancery', 'Dancing Script', cursive";
            this.create(null, this.list.font, "option", "Small Capitals").value = "'Arial Unicode Ms', Arial, Helvetica, Verdana, 'Marcellus SC', sans-serif; font-variant: small-caps";
            m.create(this.list.font, "change", function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected.fontFamily = a.target.value;
                h.applyCaptioningStyle(!1);
                return !1
            });
            c.appendChild(this.list.font);
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_EDGE));
            this.list.edge = this.create("captioning-dropdown",
                c, "select");
            this.create(null, this.list.edge, "option", "None").value = "text-shadow: 0px 0px 0px";
            this.create(null, this.list.edge, "option", "Depressed").value = "text-shadow: 0px 1px 0px";
            this.create(null, this.list.edge, "option", "Left Drop Shadow").value = "text-shadow: -3px 3px 2px";
            this.create(null, this.list.edge, "option", "Raised").value = "text-shadow: 0px 1px 1px";
            this.create(null, this.list.edge, "option", "Right Drop Shadow").value = "text-shadow: 3px 3px 2px";
            this.create(null, this.list.edge, "option", "Uniform").value =
                "text-shadow: 0px 0px 4px";
            m.create(this.list.edge, "change", function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected.edgeType = a.target.value;
                h.applyCaptioningStyle(!1);
                return !1
            });
            c = this.create("captioning-row", this.advancedSettingContainer);
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_SIZE));
            this.list.size = this.create("captioning-dropdown", c, "select");
            this.create(null, this.list.size, "option", "Extra Small").value = "x-small";
            this.create(null, this.list.size,
                "option", "Small").value = "small";
            this.create(null, this.list.size, "option", "Medium").value = "medium";
            this.create(null, this.list.size, "option", "Large").value = "large";
            this.create(null, this.list.size, "option", "Extra Large").value = "x-large";
            this.list.size.selectedIndex = 1;
            m.create(this.list.size, "change", function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected.size = a.target.value;
                h.applyCaptioningStyle(!1);
                return !1
            });
            this.create("captioning-label", c, "span", this.localizationManager.getString(D.MSG_CC_SCROLL));
            this.list.scroll = this.create("captioning-dropdown", c, "select");
            this.create(null, this.list.scroll, "option", "Pop-Out").value = "popout";
            this.create(null, this.list.scroll, "option", "Roll-On").value = "rollon";
            this.create(null, this.list.scroll, "option", "Paint-On").value = "painton";
            m.create(this.list.scroll, "change", function(a) {
                a.stopImmediatePropagation();
                h.captioningObject.selected.scroll = h.scroll.type = a.target.value;
                return !1
            });
            c = this.create("captioning-row", this.advancedSettingContainer);
            this.create("captioning-label-small",
                c, "span", this.localizationManager.getString(D.MSG_CC_COLOR));
            this.picker.color = this.create("captioning-color-picker", c);
            this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor;
            m.create(this.picker.color, m.CLICK, function(a) {
                var b;
                a.stopImmediatePropagation();
                h.colorPickerHandler();
                h.colorPicker.style.display = "block" === h.colorPicker.style.display ? "none" : "block";
                "block" === h.colorPicker.style.display && (null != (a = h.swatchColorCurr) && (a.style.borderColor = "rgba(0,0,0,0.3)"), h.colorPicker.style.left =
                    "152px", h.colorPicker.name = "fontColor", h.captioningObject.instance = h.picker.color, -1 !== h.picker.color.style.backgroundColor.indexOf("rgba") && (b = h.picker.color.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, "").split(",")[3]), h.colorPickerOpacity.value = null != b ? b : 1);
                return !1
            });
            this.create("captioning-label-small", c, "span", this.localizationManager.getString(D.MSG_CC_BACKGROUND));
            this.picker.background = this.create("captioning-color-picker", c);
            this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor;
            m.create(this.picker.background, m.CLICK, function(a) {
                var b;
                a.stopImmediatePropagation();
                h.colorPickerHandler();
                h.colorPicker.style.display = "block" === h.colorPicker.style.display ? "none" : "block";
                "block" === h.colorPicker.style.display && (null != (a = h.swatchColorCurr) && (a.style.borderColor = "rgba(0,0,0,0.3)"), h.colorPicker.style.left = "264px", h.colorPicker.name = "backgroundColor", h.captioningObject.instance = h.picker.background, -1 !== h.picker.background.style.backgroundColor.indexOf("rgba") && (b = h.picker.background.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g,
                    "").split(",")[3]), h.colorPickerOpacity.value = null != b ? b : 1);
                return !1
            });
            this.create("captioning-label-small", c, "span", this.localizationManager.getString(D.MSG_CC_EDGE));
            this.picker.edge = this.create("captioning-color-picker", c);
            this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor;
            m.create(this.picker.edge, m.CLICK, function(a) {
                var b;
                a.stopImmediatePropagation();
                h.colorPickerHandler();
                h.colorPicker.style.display = "block" === h.colorPicker.style.display ? "none" : "block";
                "block" ===
                h.colorPicker.style.display && (null != (a = h.swatchColorCurr) && (a.style.borderColor = "rgba(0,0,0,0.3)"), h.colorPicker.style.left = "212px", h.colorPicker.name = "edgeColor", h.captioningObject.instance = h.picker.edge, -1 !== h.picker.edge.style.backgroundColor.indexOf("rgba") && (b = h.picker.edge.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, "").split(",")[3]), h.colorPickerOpacity.value = null != b ? b : 1);
                return !1
            });
            this.create("captioning-label-small", c, "span", this.localizationManager.getString(D.MSG_CC_WINDOW));
            this.picker.window =
                this.create("captioning-color-picker", c);
            this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor;
            m.create(this.picker.window, m.CLICK, function(a) {
                var b;
                a.stopImmediatePropagation();
                h.colorPickerHandler();
                h.colorPicker.style.display = "block" === h.colorPicker.style.display ? "none" : "block";
                "block" === h.colorPicker.style.display && (null != (a = h.swatchColorCurr) && (a.style.borderColor = "rgba(0,0,0,0.3)"), h.colorPicker.style.left = "300px", h.colorPicker.name = "windowColor", h.captioningObject.instance =
                    h.picker.window, -1 !== h.picker.window.style.backgroundColor.indexOf("rgba") && (b = h.picker.window.style.backgroundColor.replace(/^rgba?\(|\s+|\)$/g, "").split(",")[3]), h.colorPickerOpacity.value = null != b ? b : 1);
                return !1
            });
            c = this.create(["caption-text", "caption-text-preview"]);
            this.create(null, c, "p", this.localizationManager.getString(D.MSG_CC_PREVIEW_TEXT));
            c = this.create("captioning-footer-container");
            a = this.create("captioning-footer-button", c, "div", this.localizationManager.getString(D.MSG_CC_APPLY));
            b = this.create("captioning-footer-button",
                c, "div", this.localizationManager.getString(D.MSG_CC_CANCEL));
            f = this.create("captioning-footer-button", c, "div", this.localizationManager.getString(D.MSG_CC_RESET));
            0 <= this.facade.getViewComponent().clientWidth && (c = this.create("captioning-advanced-button", c, "div", this.localizationManager.getString(D.MSG_CC_SHOW_ADVANCED)), m.create(c, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                "block" === h.advancedSettingContainer.style.display ? (a.target.innerHTML = h.localizationManager.getString(D.MSG_CC_SHOW_ADVANCED),
                    h.advancedSettingContainer.style.display = "none", h.colorPicker.style.display = "none") : (a.target.innerHTML = h.localizationManager.getString(D.MSG_CC_HIDE_ADVANCED), h.advancedSettingContainer.style.display = "block");
                return !1
            }));
            m.create(a, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.sendNotification(G.SETTINGS_VISIBILITY_CHANGE, h.settingsUiVisible);
                h.applyCaptioningStyle(!1, !0);
                h.sendNotification(G.SETTINGS_CHANGE, h.captioningObject.selected);
                return !1
            });
            m.create(b, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.sendNotification(G.SETTINGS_VISIBILITY_CHANGE, h.settingsUiVisible);
                return !1
            });
            m.create(f, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                h.colorPicker.style.display = "none";
                h.applyCaptioningStyle(!0);
                return !1
            });
            this.captionningStyle = this.create(null, document.getElementsByTagName("head")[0], "style");
            this.captionningStyle.type = "text/css";
            c = "#000000 #660000 #990000 #ff0000 #000066 #660066 #990066 #ff0066 #006600 #666600 #996600 #ff6600 #006666 #666666 #996666 #ff6666 #009900 #669966 #999900 #ff9900 #009966 #669966 #999966 #ff9966 #00ff00 #66ff00 #99ff00 #ffff00 #00ff66 #66ff66 #99ff66 #ffff66 #000099 #660099 #990099 #ff0099 #0000ff #6600ff #9900ff #ff00ff #006699 #666699 #996699 #ff6699 #0066ff #6666ff #9966ff #ff66ff #009999 #669999 #999999 #ff9999 #0099ff #6699ff #9999ff #ff99ff #0099ff #66ff99 #99ff99 #ffff99 #00ffff #66ffff #99ffff #ffffff".split(" ");
            this.colorPicker = this.create("colorpicker-palette", this.viewComponent.parentElement);
            a = this.create("colorpicker-swatch", !1, null, "\x26nbsp;");
            b = 0;
            for (f = c.length; b < f; b++) e = c[b], a.style.backgroundColor = e, e = a.cloneNode(), m.create(e, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                null !== h.swatchColorCurr && (h.swatchColorCurr.style.borderColor = "rgba(0,0,0,0.3)");
                h.swatchColorCurr = a.target;
                h.swatchColorCurr.style.borderColor = "rgba(255, 50, 50, 1)";
                h.captioningObject.instance.style.backgroundColor = h.captioningObject.selected[h.colorPicker.name] =
                    h.toRGBA(a.target.style.backgroundColor);
                h.applyCaptioningStyle(!1);
                return !1
            }), this.colorPicker.appendChild(e);
            this.create("opacity-label", this.colorPicker, "span", this.localizationManager.getString(D.MSG_CC_OPACITY));
            this.colorPickerOpacity = this.create("colorpicker-slider", this.colorPicker, "input");
            this.colorPickerOpacity.type = "range";
            this.colorPickerOpacity.min = 0;
            this.colorPickerOpacity.max = 1;
            this.colorPickerOpacity.step = 0.1;
            this.colorPickerOpacity.value = 1;
            m.create(this.colorPickerOpacity, "change",
                function(a) {
                    a.stopImmediatePropagation();
                    h.captioningObject.instance.style.backgroundColor = h.captioningObject.selected[h.colorPicker.name] = h.toRGBA(h.captioningObject.instance.style.backgroundColor);
                    h.applyCaptioningStyle(!1);
                    return !1
                });
            this.swatchOpacityCurr = this.colorPickerOpacity;
            try {
                null != localStorage.getItem(cc.PREFIX + "captioningDefault") ? (this.captioningObject.selected = JSON.parse(localStorage.getItem(cc.PREFIX + "captioningDefault")), this.applyCaptioningStyle(!1, !this.facade.getHidden())) : (d = !(null != this.facade.config.style || "undefined" !== this.facade.config.style), d || (this.captioningObject.selected = this.cloneObject(this.facade.config.style)), this.applyCaptioningStyle(d))
            } catch (g) {}
            this.plugin.setSettings(0 < Object.keys(this.captioningObject.selected).length ? this.captioningObject.selected : this.captioningObject["default"]);
            this.toggleButtonHandler(!this.facade.getHidden(), !1)
        };
        Fa.prototype.toRGBA = function(a) {
            a = a.replace(/^rgba?\(|\s+|\)$/g, "").split(",");
            return "rgba(" + a[0] + "," + a[1] + "," +
                a[2] + "," + this.swatchOpacityCurr.value + ")"
        };
        Fa.prototype.onScrollListChange = function(a) {
            var b;
            null != a && (this.captioningObject.selected.scroll = this.scroll.type = a);
            this.plugin.setSettings({
                scroll: this.scroll.type
            });
            try {
                null != (null != (b = this.facade.proxy.renderer) ? b.viewComponent : void 0) && ("painton" === this.scroll.type ? za.add("akamai-captioning-typed", this.facade.proxy.renderer.viewComponent) : za.remove("akamai-captioning-typed", this.facade.proxy.renderer.viewComponent))
            } catch (c) {
                this.facade.logger.error("AMP Captioning Error",
                    c)
            }
        };
        Fa.prototype.languageListPopulate = function() {
            var a, b, c, e, d, f;
            c = this.facade.getTracks();
            if (null != c) {
                this.list.language.innerHTML = "";
                e = 0;
                for (d = c.length; e < d; e++) b = c[e], a = b.language, a = this.facade.player.retrieveProxy(ra.NAME).getLanguageString(a), null != a && "" !== a && (this.create(null, this.list.language, "option", a).value = b.language);
                this.toggle.disabled = 0 === this.list.language.childElementCount;
                this.toggle.disabled && this.create(null, this.list.language, "option", "None");
                this.list.language.value = null != (f =
                    this.facade.getTrack()) ? f.language : void 0
            }
        };
        Fa.prototype.colorPickerHandler = function(a) {
            var b = this;
            null == a && (a = !1);
            if (a) return m.unbind(document, m.CLICK);
            m.create(document, m.CLICK, function(a) {
                a.stopImmediatePropagation();
                b.colorPickerHandler(!0);
                "akamai-colorpicker-palette" !== a.target.className && "akamai-opacity-label" !== a.target.className && "akamai-colorpicker-slider" !== a.target.className && "none" !== b.colorPicker.style.display && (b.colorPicker.style.display = "none");
                return !1
            })
        };
        Fa.prototype.cloneObject =
            function(a) {
                var b, c;
                b = {};
                for (c in a) b[c] = a[c];
                return b
            };
        Fa.prototype.applyCaptioningStyle = function(a, b, c) {
            var e, d, f, h, g, k, l, m;
            null == a && (a = !1);
            null == b && (b = !1);
            null == c && (c = !1);
            a ? (this.captioningObject.selected = this.cloneObject(this.captioningObject["default"]), this.list.font.value = this.captioningObject["default"].fontFamily, this.list.edge.value = null != this.captioningObject["default"].edgeType ? this.captioningObject["default"].edgeType : "text-shadow: 0px 0px 0px", this.list.size.value = this.captioningObject["default"].size,
                this.list.scroll.value = this.captioningObject["default"].scroll, this.picker.color.style.backgroundColor = this.captioningObject["default"].fontColor, this.picker.background.style.backgroundColor = this.captioningObject["default"].backgroundColor, this.picker.edge.style.backgroundColor = this.captioningObject["default"].edgeColor, this.picker.window.style.backgroundColor = this.captioningObject["default"].windowColor) : (null == this.captioningObject.selected.fontFamily || c || (this.list.font.value = this.captioningObject.selected.fontFamily),
                this.list.edge.value = null != this.captioningObject.selected.edgeType ? this.captioningObject.selected.edgeType : "text-shadow: 0px 0px 0px", null != this.captioningObject.selected.size && (this.list.size.value = this.captioningObject.selected.size), null != this.captioningObject.selected.scroll ? this.list.scroll.value = this.captioningObject.selected.scroll : this.captioningObject.selected.scroll = this.list.scroll.value, this.picker.color.style.backgroundColor = this.captioningObject.selected.fontColor, null != this.captioningObject.selected.backgroundColor &&
            (this.picker.background.style.backgroundColor = this.captioningObject.selected.backgroundColor), null != this.captioningObject.selected.edgeColor && (this.picker.edge.style.backgroundColor = this.captioningObject.selected.edgeColor), null != this.captioningObject.selected.windowColor && (this.picker.window.style.backgroundColor = this.captioningObject.selected.windowColor));
            g = "font-family: " + (a ? this.captioningObject["default"].fontFamily : c ? this.captioningObject.selected.fontFamily : this.list.font.value) + " !important;";
            h = (a ? this.captioningObject["default"].edgeType + this.captioningObject["default"].edgeColor : this.list.edge.value + " " + this.picker.edge.style.backgroundColor) + " !important;";
            k = "font-size: " + (a ? this.captioningObject["default"].size : this.list.size.value) + " !important;";
            d = "color: " + (a ? this.captioningObject["default"].fontColor : this.picker.color.style.backgroundColor) + " !important;";
            e = "background-color: " + (a ? this.captioningObject["default"].backgroundColor : this.picker.background.style.backgroundColor) + " !important;";
            l = "background-color: " + (a ? this.captioningObject["default"].windowColor : this.picker.window.style.backgroundColor) + " !important;";
            f = "line-height:1.7em;";
            m = l.match(/rgba\([^)]+\)/g);
            null != m && m instanceof Array && 0 < m.length && (f = 0 === Number(m[0].replace(/^.*, (.+)\)/, "$1")) ? "" : f);
            if (b) {
                this.onScrollListChange();
                this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText = "#" + this.facade.player.viewComponent.id + " .akamai-caption-text { " + g + k + h + l + " } #" + this.facade.player.viewComponent.id + " .akamai-caption-text p { " +
                    d + e + " } video::-webkit-media-text-track-display { " + l + " } video::-webkit-media-text-track-display span { " + g + k + h + e + " } video::-webkit-media-text-track-display { " + l + " } video::cue { " + d + g + k + h + e + " } video::-webkit-media-text-track-container {" + f + "}";
                try {
                    !1 !== a || c || localStorage.setItem(cc.PREFIX + "captioningDefault", JSON.stringify(this.captioningObject.selected))
                } catch (p) {
                    this.facade.logger.error("LocalStorage Not Supported on this Browser", p)
                }
            } else this.captionningStyle.innerHTML = this.captioningObject.appliedStyleText +
                "#" + this.facade.player.viewComponent.id + " .akamai-caption-text.akamai-caption-text-preview { " + g + k + h + l + " } #" + this.facade.player.viewComponent.id + " .akamai-caption-text.akamai-caption-text-preview p { " + d + e + " }"
        };
        Fa.prototype.toggleButtonHandler = function(a, b) {
            null == a && (a = !1);
            null == b && (b = !0);
            a ? (za.add("captioning-floater-btnselected", this.toggle.ON, this.classList.prefix), za.remove("captioning-floater-btnselected", this.toggle.OFF, this.classList.prefix)) : (za.add("captioning-floater-btnselected", this.toggle.OFF,
                this.classList.prefix), za.remove("captioning-floater-btnselected", this.toggle.ON, this.classList.prefix));
            b && this.sendNotification(G.VISIBILITY_CHANGE, a);
            this.sendNotification("updatesettings", {
                captioning: {
                    hidden: !a
                }
            })
        };
        Fa.prototype.listNotificationInterests = function() {
            return [G.SETTINGS_VISIBILITY_CHANGE, G.TOGGLE_SETTINGS_VISIBILITY, G.SETTINGS_CHANGE, G.TRACK_SELECTED, G.VISIBILITY_CHANGE]
        };
        Fa.prototype.handleNotification = function(a) {
            var b, c, e, f, g, h, k, l, m, p;
            g = a.getName();
            b = a.getBody();
            switch (g) {
                case G.SETTINGS_VISIBILITY_CHANGE:
                case G.TOGGLE_SETTINGS_VISIBILITY:
                    this.settingsUiVisible &&
                    (this.colorPicker.style.display = "none");
                    (this.settingsUiVisible = !this.settingsUiVisible) && 1 === this.list.language.length && this.languageListPopulate();
                    b = this.settingsUiVisible ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE;
                    this.sendNotification(b, "cc-setting-active");
                    break;
                case G.SETTINGS_CHANGE:
                    a = !1;
                    for (f in b) switch (k = b[f], f) {
                        case "fontFamily":
                        case "fontSize":
                        case "scroll":
                        case "edgeType":
                            g = "fontFamily" === f ? "font" : "fontSize" === f ? "size" : "edgeType" === f ? "edge" : "scroll";
                            p = this.list[g].options;
                            e = l =
                                0;
                            for (m = p.length; l < m; e = ++l)
                                if (h = p[e], "fontFamily" === f && "object" === typeof k)
                                    for (c in k) e = k[c], "default" === c && (this.captioningObject.selected.fontFamily = e, a = !0), RegExp(c, "i").test(h.label) && (RegExp("^" + e).test(h.value) || (h.value = e + "," + h.value), h.selected && (this.captioningObject.selected.fontFamily = h.value));
                                else if (RegExp("^" + k + "$", "i").test(h.label) && (this.list[g].selectedIndex = e, "fontSize" === f && (f = "size"), this.captioningObject.selected[f] = h.value, "scroll" === f)) {
                                    this.scroll.type = this.captioningObject.selected.scroll =
                                        h.value;
                                    this.plugin.setSettings({
                                        scroll: this.scroll.type
                                    });
                                    try {
                                        "painton" === h.value ? za.add("akamai-captioning-typed", this.facade.proxy.renderer.viewComponent) : za.remove("akamai-captioning-typed", this.facade.proxy.renderer.viewComponent)
                                    } catch (q) {
                                        this.facade.logger.error("AMP Captioning Error", q)
                                    }
                                }
                            break;
                        case "backgroundColor":
                        case "edgeColor":
                        case "fontColor":
                        case "windowColor":
                            this.captioningObject.selected[f] = k
                    }
                    this.applyCaptioningStyle(!1, !0, a);
                    null != b.visible && b.visible !== !this.facade.getHidden() &&
                    this.facade.setHidden(!b.visible);
                    break;
                case G.TRACK_SELECTED:
                    this.list.language.value = a.body.language;
                    this.onScrollListChange(this.captioningObject.selected.scroll);
                    break;
                case G.VISIBILITY_CHANGE:
                    this.toggleButtonHandler(b, !1)
            }
        };
        var zb = function() {
            zb.__super__.constructor.call(this)
        };
        f(zb, na);
        zb.prototype.initializeNotifier = function(a) {
            zb.__super__.initializeNotifier.call(this, a);
            this.plugin = this.facade.retrieveProxy(x.NAME);
            this.media = this.facade.player.retrieveProxy(t.NAME)
        };
        zb.prototype.onRegister =
            function() {
                zb.__super__.onRegister.call(this);
                this.facade.viewComponent = this.viewComponent
            };
        var Nc = function(a) {
            Nc.__super__.constructor.call(this, a)
        };
        f(Nc, zb);
        Nc.prototype.componentName = "captioning";
        Nc.prototype.captionButton = null;
        Nc.prototype.onRegister = function() {
            var a;
            a = new Da(this.localizationManager.getString(D.MSG_CC), this.viewComponent, null, "caption", this.onclick.bind(this));
            this.facade.registerMediator(a);
            this.captionButton = a.getViewComponent();
            this.sendNotification(d.ADD_CONTROL, this.captionButton);
            Nc.__super__.onRegister.call(this);
            try {
                "true" === ("undefined" !== typeof localStorage && null !== localStorage ? localStorage.getItem(cc.PREFIX + "caption-enabled") : void 0) && this.facade.setHidden(!1)
            } catch (b) {}
        };
        Nc.prototype.onclick = function(a) {
            var b;
            a.stopImmediatePropagation();
            "embedded" === (null != (b = this.plugin.getTrack()) ? b.type : void 0) ? this.sendNotification(G.VISIBILITY_CHANGE, this.plugin.getHidden()): a.currentTarget === this.captionButton && this.sendNotification(G.SETTINGS_VISIBILITY_CHANGE, this.plugin.getHidden());
            return !1
        };
        Nc.prototype.listNotificationInterests = function() {
            return [G.VISIBILITY_CHANGE, G.ENABLED, G.TRACK_SELECTED]
        };
        Nc.prototype.handleNotification = function(a) {
            var b, c, e;
            c = (b = a.getBody()) ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE;
            switch (a.getName()) {
                case G.TRACK_SELECTED:
                    e = "cc-embedded";
                    c = "embedded" === b.type ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE;
                    break;
                case G.VISIBILITY_CHANGE:
                    e = "cc-active";
                    break;
                case G.ENABLED:
                    c = b ? d.ADD_CONTROL_STATE : d.REMOVE_CONTROL_STATE, e = "cc-enabled", b ||
                    this.sendNotification(d.REMOVE_APPLICATION_STATE, "cc-active")
            }
            this.sendNotification(c, e)
        };
        var qd = function() {
            qd.__super__.constructor.call(this)
        };
        f(qd, M);
        qd.prototype.moduleName = "omniture";
        qd.prototype.createController = function() {
            this.registerCommand(d.MEDIA_CHANGE, $g);
            this.registerCommand(d.ENDED, gf);
            this.registerCommand(d.STARTED, Og);
            this.registerCommand(d.PLAY, Pg);
            this.registerCommand(d.PAUSE, Qg);
            this.registerCommand(d.SEEKING, Rg);
            this.registerCommand(d.SEEKED, Sg);
            this.registerCommand(d.CHANGE_CONTENT,
                gf);
            this.registerCommand(d.CONTENT_CHANGED, Tg);
            this.registerCommand(k.AD_LOADED, Ug);
            this.registerCommand(k.AD_STARTED, Vg);
            this.registerCommand(k.AD_PLAY, Wg);
            this.registerCommand(k.AD_PAUSE, Xg);
            this.registerCommand(k.AD_TIME_UPDATE, Zg);
            this.registerCommand(k.BREAK_END, Yg)
        };
        qd.prototype.createModel = function() {
            var a;
            !0 === (null != (a = this.config.heartbeat) ? a.enabled : void 0) ? this.registerProxy(new sa(this.config)) : this.registerProxy(new ea(this.config))
        };
        qd.prototype.listNotificationInterests = function() {
            return [d.CHANGE_MEDIA,
                d.MEDIA_CHANGE, d.CHANGE_CONTENT, d.CONTENT_CHANGED, d.TIME_UPDATE, d.ENDED, d.STARTED, d.PLAY, d.PAUSE, d.SEEKING, d.SEEKED, k.AD_LOADED, k.AD_STARTED, k.AD_PLAY, k.AD_PAUSE, k.AD_TIME_REMAINING, k.BREAK_START, k.BREAK_END
            ]
        };
        l.registerPlugin("omniture", "html", qd);
        l.registerPlugin("omniture", "flash", ke);
        var me = function(a, b) {
            null == b && (b = {});
            me.__super__.constructor.call(this, a, b)
        };
        f(me, I);
        me.NAME = "InfoWrapper";
        me.prototype.listNotificationInterests = function() {
            return [q.CREATE_FLASH_VARS, q.CREATE_XML, q.SHARE, q.SHARE_REQUEST]
        };
        me.prototype.handleNotification = function(a) {
            var b, c, e, d, f, h, g, k;
            d = a.getName();
            a = a.getBody();
            switch (d) {
                case q.CREATE_XML:
                    d = a.xml;
                    f = d.getElementsByTagName("view")[0];
                    c = d.getElementsByTagName("element");
                    g = 0;
                    for (k = c.length; g < k; g++)
                        if (b = c[g], "infoOverlayAdvanced" === b.getAttribute("id")) {
                            e = b;
                            break
                        }
                    if (null == f) return;
                    null == e && (e = d.createElement("element"), e.setAttribute("id", "infoOverlayAdvanced"), e.setAttribute("displayStates", "preplay,paused,ns,fs,mouseover"), f.insertBefore(e, f.childNodes[0]));
                    b = d.createElement("data");
                    e.appendChild(b);
                    null != this.config.title && (e = d.createElement("property"), e.setAttribute("key", "title"), f = fa.createTextContent(d, this.config.title), e.appendChild(f), b.appendChild(e));
                    null != this.config.description && (e = d.createElement("property"), e.setAttribute("key", "description"), f = fa.createTextContent(d, this.config.description), e.appendChild(f), b.appendChild(e));
                    null != this.config.more && (e = d.createElement("property"), e.setAttribute("key", "more"), f = fa.createTextContent(d, this.config.more), e.appendChild(f),
                        b.appendChild(e));
                    null != this.config.less && (e = d.createElement("property"), e.setAttribute("key", "less"), f = fa.createTextContent(d, this.config.less), e.appendChild(f), b.appendChild(e));
                    null != this.config.provider && (c = d.createElement("property"), c.setAttribute("key", "provider"), b.appendChild(c), null != this.config.provider.name && (e = d.createElement("property"), e.setAttribute("key", "name"), f = fa.createTextContent(d, this.config.provider.name), e.appendChild(f), c.appendChild(e)), null != this.config.provider.image &&
                    (e = d.createElement("property"), e.setAttribute("key", "image"), f = fa.createTextContent(d, this.config.provider.image), e.appendChild(f), c.appendChild(e)));
                    break;
                case q.SHARE:
                case q.SHARE_REQUEST:
                    h = "share"
            }
            if (null != h) return this.dispatchEvent(new V(h, a))
        };
        l.registerPlugin("info", "flash", me);
        var ob = function() {
            ob.__super__.constructor.call(this)
        };
        f(ob, zb);
        ob.prototype.componentName = "info";
        ob.prototype.title = null;
        ob.prototype.shortDescription = null;
        ob.prototype.icon = null;
        ob.prototype.provider = null;
        ob.prototype.onRegister =
            function() {
                ob.__super__.onRegister.call(this);
                this.title = this.create("info-title");
                this.provider = this.create("info-provider");
                this.shortDescription = this.create("info-short-description");
                this.icon = this.create("info-icon", this, "img");
                this.dataChangedHandler()
            };
        ob.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE]
        };
        ob.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a.getBody();
            switch (b) {
                case d.MEDIA_CHANGE:
                    this.dataChangedHandler()
            }
        };
        ob.prototype.moreClicked = function(a) {
            return this.classList.add("open")
        };
        ob.prototype.closeClicked = function(a) {
            return this.classList.remove("open")
        };
        ob.prototype.dataChangedHandler = function() {
            var a;
            null != this.plugin.value.title && (this.title.textContent = this.plugin.value.title);
            null != (null != (a = this.plugin.value.provider) ? a.image : void 0) && (this.icon.src = this.plugin.value.provider.image);
            a = getComputedStyle(this.title);
            this.title.clientHeight > parseInt(a.lineHeight) ? (this.classList.add("info-small"), this.shortDescription.innerHTML = this.provider.innerHTML = "") : (this.classList.remove("info-small"),
                this.truncateDescription(this.plugin.value.description, this.plugin.value.more), this.provider.textContent = null != this.plugin.value.provider.name ? "" + this.plugin.value.provider.name : "")
        };
        ob.prototype.truncateDescription = function(a) {
            var b, c, e, d, f;
            c = "";
            e = this.shortDescription;
            e.textContent = "";
            if (null != a)
                for (b = d = 0, f = a.length; d < f; b = ++d)
                    if (b = a[b], e.textContent = c + b + "...", e.scrollHeight > e.clientHeight) {
                        e.textContent = c + "...";
                        break
                    } else c += b
        };
        var ne = function(a) {
            ne.__super__.constructor.call(this, a)
        };
        f(ne, Ba);
        ne.prototype.configurationName = "info";
        ne.NAME = x.NAME;
        ne.prototype.defaults = {
            title: "#{media.title}",
            description: "#{media.description}",
            provider: {},
            more: "read more",
            less: "less"
        };
        var Ma = function() {
            Ma.__super__.constructor.call(this)
        };
        f(Ma, yb);
        Ma.prototype.featureName = "captioning";
        Ma.prototype.moduleName = "captioning";
        Ma.prototype.createController = function() {
            Ma.__super__.createController.call(this);
            this.registerCommand(d.CHANGE_MEDIA, bh);
            this.registerCommand(d.STARTED, ch);
            this.registerCommand(d.TIME_UPDATE,
                ah);
            this.registerCommand(G.VISIBILITY_CHANGE, hf);
            this.registerCommand(G.ENABLED, y);
            this.registerCommand(G.TRACK_SELECTED, y);
            this.registerCommand(G.TRACKS_LOADED, y);
            this.registerCommand(G.CUE_CHANGE, y)
        };
        Ma.prototype.createModel = function() {
            this.proxy = new W(this.config);
            this.registerProxy(this.proxy)
        };
        Ma.prototype.createView = function() {
            var a;
            a = new Nc;
            this.registerMediator(a);
            a = a.viewComponent;
            this.registerMediator(new Fa(a));
            this.proxy.registerRenderer(new Ia(a));
            this.proxy.registerRenderer(new nc(a))
        };
        Ma.prototype.listNotificationInterests = function() {
            return [d.LOADED_METADATA, d.CAN_PLAY_THROUGH, d.CHANGE_MEDIA, d.STARTED, d.TIME_UPDATE, G.TOGGLE_SETTINGS_VISIBILITY]
        };
        Ma.prototype.listNotificationPublications = function() {
            var a, b;
            return Ma.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in G) b = G[a], b !== G.TOGGLE_SETTINGS_VISIBILITY && c.push(b);
                return c
            }()).concat([d.ADD_CONTROL, d.REMOVE_CONTROL, "updatesettings", d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE])
        };
        Ma.prototype.getHidden =
            function() {
                return this.proxy.getHidden()
            };
        Ma.prototype.setHidden = function(a) {
            this.sendNotification(G.VISIBILITY_CHANGE, !a);
            return a
        };
        Ma.prototype.getTracks = function() {
            return this.proxy.getTracks()
        };
        Ma.prototype.getTrack = function() {
            return this.proxy.getTrack()
        };
        Ma.prototype.setTrack = function(a) {
            this.proxy.setTrack(a);
            return a
        };
        Ma.prototype.selectTrackByIndex = function(a) {
            return this.proxy.selectTrackByIndex(a)
        };
        Ma.prototype.selectTrackByLanguage = function(a) {
            return this.proxy.selectTrackByLanguage(a)
        };
        Ma.prototype.changeSettings = function(a) {
            this.sendNotification(G.SETTINGS_CHANGE, a);
            return a
        };
        Ma.prototype.useParallelRendering = function(a) {
            var b;
            (b = this.proxy.getRenderer()) && b.useParallelRendering(a);
            return a
        };
        l.registerPlugin("captioning", "html", Ma);
        var dh = function() {
            dh.__super__.constructor.call(this)
        };
        f(dh, A);
        dh.prototype.execute = function(a) {
            this.proxy.contentStarted()
        };
        var eh = function() {
            eh.__super__.constructor.call(this)
        };
        f(eh, A);
        eh.prototype.execute = function(a) {
            this.proxy.contentEnded()
        };
        var fh =
            function() {
                fh.__super__.constructor.call(this)
            };
        f(fh, A);
        fh.prototype.execute = function(a) {
            !1 !== this.proxy.getEnabled() && this.proxy.engage(a.getBody())
        };
        var jf = function() {
            jf.__super__.constructor.call(this)
        };
        f(jf, y);
        jf.prototype.execute = function(a) {
            this.sendNotification(d.UPDATE_DATA_BINDINGS, {
                contexts: [this.proxy.getContextName()]
            });
            jf.__super__.execute.call(this, a)
        };
        var kf = function() {
            kf.__super__.constructor.call(this)
        };
        f(kf, y);
        kf.prototype.execute = function(a) {
            this.player.sendNotification(d.ADD_APPLICATION_STATE,
                "ad-mode");
            kf.__super__.execute.call(this, a);
            this.proxy.breakStart()
        };
        var lf = function() {
            lf.__super__.constructor.call(this)
        };
        f(lf, y);
        lf.prototype.execute = function(a) {
            lf.__super__.execute.call(this, a);
            this.proxy.breakEnd();
            this.player.sendNotification(d.REMOVE_APPLICATION_STATE, "ad-mode");
            this.applicationState.getEnded() && !0 === this.applicationState.getHasPostContent() && this.sendNotification(d.MEDIA_SEQUENCE_ENDED)
        };
        var gh = function() {
            gh.__super__.constructor.call(this)
        };
        f(gh, A);
        gh.prototype.execute =
            function(a) {
                this.proxy.contentSeek(a.getBody())
            };
        var mf = function() {
            mf.__super__.constructor.call(this)
        };
        f(mf, y);
        mf.prototype.execute = function(a) {
            this.proxy.container = a.getBody();
            mf.__super__.execute.call(this, a)
        };
        var hh = function() {
            hh.__super__.constructor.call(this)
        };
        f(hh, A);
        hh.prototype.execute = function(a) {
            "function" === typeof this.proxy.replay && !1 === this.facade.player.getAutoplay() && this.proxy.replay()
        };
        var Va = function(a, b, c, e, d, f, h, g, k, l, m, p) {
            this.id = a;
            this.title = b;
            this.duration = c;
            this.position =
                e;
            this.type = d;
            this.partner = f;
            this.advertiser = h;
            this.companions = g;
            this.request = k;
            this.metadata = l;
            this.totalAds = m;
            this.time = p
        };
        Va.prototype.id = null;
        Va.prototype.title = null;
        Va.prototype.duration = NaN;
        Va.prototype.position = NaN;
        Va.prototype.totalAds = NaN;
        Va.prototype.type = null;
        Va.prototype.partner = null;
        Va.prototype.advertiser = null;
        Va.prototype.companions = null;
        Va.prototype.metadata = null;
        Va.prototype.request = null;
        Va.prototype.error = null;
        Va.prototype.time = null;
        var nf = function() {
            nf.__super__.constructor.call(this)
        };
        f(nf, y);
        nf.prototype.execute = function(a) {
            this.sendNotification(d.PLAY_REQUEST);
            !1 === this.playback.initialized && this.player.sendNotification(d.INITIALIZED);
            this.proxy.start();
            nf.__super__.execute.call(this, a)
        };
        var of = function() {
            of.__super__.constructor.call(this)
        };
        f(of, A);
        of.prototype.execute = function(a) {
            !0 !== this.applicationState.getLocked() && (this.sendNotification(d.PLAY_REQUEST), !1 === this.proxy.getStarted() ? this.sendNotification(d.START, !0) : (this.proxy.play(), this.facade.player.sendNotification(d.CHANGE_PLAY_STATE,
                U.PLAYING)))
        };
        var pf = function() {
            pf.__super__.constructor.call(this)
        };
        f(pf, A);
        pf.prototype.execute = function(a) {
            this.proxy.pause();
            this.player.sendNotification(d.CHANGE_PLAY_STATE, U.PAUSED)
        };
        var ih = function() {
            ih.__super__.constructor.call(this)
        };
        f(ih, y);
        ih.prototype.execute = function(a) {
            a = this.proxy.getPaused() || !1 === this.proxy.getStarted() ? d.PLAY : d.PAUSE;
            this.sendNotification(a, !0)
        };
        var qf = function() {
            qf.__super__.constructor.call(this)
        };
        f(qf, y);
        qf.prototype.execute = function(a) {
            this.proxy.setVolume(a.getBody());
            qf.__super__.execute.call(this, a)
        };
        var jh = function() {
            jh.__super__.constructor.call(this)
        };
        f(jh, y);
        jh.prototype.execute = function(a) {
            "playing" === a.getBody().value && this.dispatchEvent("playing", this.proxy.adVO)
        };
        var Ya = function() {
            Ya.__super__.constructor.call(this)
        };
        f(Ya, na);
        Ya.prototype.duration = null;
        Ya.prototype.currentTime = null;
        Ya.prototype.container = null;
        Ya.prototype.banner = null;
        Ya.prototype.text = null;
        Ya.prototype.adText = null;
        Ya.prototype.bg = null;
        Ya.prototype.totalAds = null;
        Ya.prototype.adPosition =
            null;
        Ya.prototype.adContainerRequired = !0;
        Ya.prototype.componentName = "ads";
        Ya.prototype.onRegister = function() {
            Ya.__super__.onRegister.call(this);
            this.adContainerRequired && (this.container = this.create("ad-container"));
            this.banner = this.create("ad-banner");
            this.bg = this.create("ad-text-bg", this.banner);
            this.adText = this.create("ad-text-title", this.banner);
            this.text = this.create("ad-text", this.banner);
            this.adContainerRequired && (this.viewComponent.container = this.container);
            this.sendNotification(k.AD_CONTAINER_CREATED,
                this.viewComponent);
            this.facade.setViewComponent(this.viewComponent)
        };
        Ya.prototype.listNotificationInterests = function() {
            return [k.BREAK_START, k.BREAK_END, k.AD_TIME_REMAINING, k.AD_STARTED]
        };
        Ya.prototype.handleNotification = function(a) {
            var b;
            switch (a.getName()) {
                case k.BREAK_END:
                    this.text.textContent = "";
                    this.adText.textContent = "";
                    break;
                case k.AD_TIME_REMAINING:
                    a = Math.round(a.getBody());
                    b = null != this.totalAds && 0 < this.totalAds && null != this.adPosition && this.adPosition !== this.totalAds ? 0 < a ? "" + this.localizationManager.getString(D.MSG_NEXT_AD) +
                        a + " " + this.localizationManager.getString(D.MSG_SECONDS) : "" : 0 < a ? "" + this.localizationManager.getString(D.MSG_NEXT_VIDEO) + a + " " + this.localizationManager.getString(D.MSG_SECONDS) : "";
                    this.text.textContent = b;
                    break;
                case k.AD_STARTED:
                    a = a.getBody(), this.totalAds = a.totalAds, this.adPosition = a.position, b = "Ad " + a.position + " of " + a.totalAds, null != a.position && null != a.totalAds && 1 <= a.totalAds && (this.adText.textContent = b)
            }
        };
        var J = function(a) {
            J.__super__.constructor.call(this, a);
            this.pods = []
        };
        f(J, R);
        J.NAME = R.NAME;
        J.prototype.inProgress = !1;
        J.prototype.paused = !1;
        J.prototype.started = !1;
        J.prototype.adVO = null;
        J.prototype.contextName = "ad";
        J.prototype.container = null;
        J.prototype.partner = null;
        J.prototype.pods = null;
        J.prototype.createDefaultAdVO = function() {
            return new Va(null, null, null, null, null, this.partner, null, null, null, null, null)
        };
        J.prototype.getContextData = function() {
            return this.adVO || {}
        };
        J.prototype.setCompanions = function(a) {
            this.adVO.companions = a;
            this.sendNotification(k.AD_COMPANION, this.adVO);
            return a
        };
        J.prototype.getCompanions = function() {
            var a;
            return null != (a = this.adVO) ? a.companions : void 0
        };
        J.prototype.getInProgress = function() {
            return this.inProgress
        };
        J.prototype.setInProgress = function(a) {
            return this.inProgress = a
        };
        J.prototype.getStarted = function() {
            return this.started
        };
        J.prototype.setStarted = function(a) {
            return this.started = a
        };
        J.prototype.getPaused = function() {
            return this.paused
        };
        J.prototype.setPaused = function(a) {
            return this.paused = a
        };
        J.prototype.play = function() {
            this.setPaused(!1);
            this.sendNotification(k.AD_PLAY, this.adVO)
        };
        J.prototype.pause =
            function() {
                this.setPaused(!0);
                this.sendNotification(k.AD_PAUSE, this.adVO)
            };
        J.prototype.breakStart = function() {
            this.setInProgress(!0)
        };
        J.prototype.breakEnd = function() {
            this.setInProgress(!1);
            this.reset()
        };
        J.prototype.error = function(a, b) {
            var c;
            null == b && (b = !0);
            c = ("function" === typeof a.getMessage ? a.getMessage() : void 0) || a.message;
            this.facade.logger.error("[AMP AD ERROR]", "" + c + " Skipping ad content.", a);
            null == this.adVO && (this.adVO = {});
            this.adVO.error = a;
            this.sendNotification(k.AD_ERROR, this.adVO);
            !0 === b &&
            this.endBreak()
        };
        J.prototype.engage = function(a) {
            !1 !== this.getEnabled() && (this.setStarted(!1), this.getInProgress() && (this.reset(), this.facade.player.sendNotification(d.REMOVE_APPLICATION_STATE, "ad-mode")), this.engageAds())
        };
        J.prototype.engageAds = function() {
            this.facade.player.removeCommand(d.START);
            this.facade.player.removeCommand(d.PLAY);
            this.facade.player.removeCommand(d.PAUSE);
            this.facade.player.removeCommand(d.ENDED);
            this.facade.player.removeCommand($.PLAY);
            this.facade.player.removeCommand($.PAUSE);
            this.facade.player.removeCommand($.TOGGLE_PLAY_PAUSE);
            this.facade.isFullscreenDevice() && this.facade.player.removeCommand(d.CHANGE_DURATION);
            this.facade.removeCommand(d.STARTED);
            this.facade.removeCommand(d.ENDED);
            this.facade.registerCommand(d.START, nf);
            this.facade.registerCommand(d.PLAY, of);
            this.facade.registerCommand(d.PAUSE, pf);
            this.facade.registerCommand($.PLAY, of);
            this.facade.registerCommand($.PAUSE, pf);
            this.facade.registerCommand($.TOGGLE_PLAY_PAUSE, ih);
            this.facade.registerCommand(d.VOLUME_CHANGE,
                qf);
            this.facade.registerCommand(d.PLAY_STATE_CHANGE, jh)
        };
        J.prototype.reset = function() {
            this.facade.removeCommand(d.START);
            this.facade.removeCommand(d.PLAY);
            this.facade.removeCommand(d.PAUSE);
            this.facade.removeCommand($.PLAY);
            this.facade.removeCommand($.PAUSE);
            this.facade.removeCommand($.TOGGLE_PLAY_PAUSE);
            this.facade.removeCommand(d.VOLUME_CHANGE);
            this.facade.removeCommand(d.PLAY_STATE_CHANGE);
            this.facade.player.registerCommand(d.START, Ee);
            this.facade.player.registerCommand(d.PLAY, Ad);
            this.facade.player.registerCommand(d.PAUSE,
                zd);
            this.facade.player.registerCommand(d.ENDED, Td);
            this.facade.player.registerCommand($.PLAY, Ad);
            this.facade.player.registerCommand($.PAUSE, zd);
            this.facade.player.registerCommand($.TOGGLE_PLAY_PAUSE, ze);
            this.facade.isFullscreenDevice() && this.facade.player.registerCommand(d.CHANGE_DURATION, Ne);
            this.facade.registerCommand(d.STARTED, dh);
            this.facade.registerCommand(d.ENDED, eh)
        };
        J.prototype.requestAd = function() {
            this.sendNotification(k.REQUEST, this.adVO)
        };
        J.prototype.getPodById = function(a) {
            var b, c, e, d;
            d = this.pods;
            c = 0;
            for (e = d.length; c < e; c++)
                if (b = d[c], b.id === a) return b
        };
        J.prototype.setPodLocks = function(a) {
            var b, c, e, d;
            c = 0;
            for (e = a.length; c < e; c++) b = a[c], null != (d = this.getPodById(b.id)) && (d.locked = b.locked)
        };
        J.prototype.startBreak = function(a) {
            null != a && (this.adVO = a);
            this.setStarted(!0);
            this.sendNotification(k.BREAK_START, this.adVO);
            return !1 === this.getEnabled() ? (this.endBreak(), !1) : !0
        };
        J.prototype.endBreak = function() {
            this.sendNotification(k.BREAK_END, this.adVO)
        };
        J.prototype.start = function() {
            this.startBreak()
        };
        J.prototype.contentPlay = function() {
            this.facade.player.sendNotification(d.PLAY, !0)
        };
        J.prototype.contentPause = function() {
            var a;
            a = this.facade.player.mediaElement;
            if (!0 === a.seeking) a.once("seeked", function() {
                a.pause()
            });
            else a.pause()
        };
        J.prototype.contentStarted = function() {};
        J.prototype.contentSeek = function(a) {};
        J.prototype.contentEnded = function() {};
        J.prototype.setVolume = function(a) {};
        J.prototype.getVolume = function() {};
        J.prototype.terminateAd = function() {};
        J.prototype.terminateAllAds = function() {};
        var sd =
            function() {
                sd.__super__.constructor.call(this)
            };
        f(sd, M);
        sd.prototype.moduleName = "info";
        sd.prototype.createModel = function() {
            this.registerProxy(new ne(this.config))
        };
        sd.prototype.createView = function() {
            this.registerMediator(new ob)
        };
        sd.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE]
        };
        l.registerPlugin("info", "html", sd);
        l.registerPlugin("info", "external", sd);
        var ka = {
                BREAK_START: "adComponentBreakInitiated",
                BREAK_END: "adComponentBreakComplete",
                BREAK_SKIPPED: "adComponentBreakSkipped",
                AD_LOADED: "adComponentLoaded",
                AD_STARTED: "adComponentAdBegin",
                AD_TIME_UPDATE: "adComponentPlaybackProgress",
                AD_TIME_REMAINING: "adComponentTimeElapsed",
                AD_DURATION_CHANGE: "addurationchange",
                AD_ENDED: "adComponentImpressionEnd",
                COMPLETE: "adComponentAdComplete",
                AD_ERROR: "adComponentInitFailed",
                AD_PLAY: "adComponentPlaybackResumed",
                AD_PAUSE: "adComponentPlaybackPaused",
                AD_LOG: "adComponentLog",
                AD_COMPANION: "adComponentCompanion",
                AD_PLAYBACK_FAILED: "adComponentPlaybackFailed",
                AD_PLAYBACK_TERMINATED: "adComponentPlaybackTerminated",
                AD_MEDIA_LOADED: "adComponentMediaLoaded",
                AD_CLICKED: "adComponentClicked",
                AD_FIRST_QUARTILE: "adComponentFirstQuartile",
                AD_MIDPOINT: "adComponentMidpoint",
                AD_THIRD_QUARTILE: "adComponentThirdQuartile",
                AD_REQUEST: "adComponentAdsRequest",
                AD_REQUEST_COMPLETE: "adComponentAdsRequestComplete",
                AD_SKIPPED: "adComponentAdSkipped",
                AD_IMPRESSION: "adComponentImpression"
            },
            fb = function(a) {
                fb.__super__.constructor.call(this, a)
            };
        f(fb, Ba);
        fb.prototype.configurationName = "imaoverlay";
        fb.NAME = "IMAOveralyProxy";
        fb.prototype.defaults = {
            adTagUrl: null,
            duration: 15,
            interval: 30,
            delay: 30
        };
        fb.prototype.durationTimer = null;
        fb.prototype.intervalTimer = null;
        fb.prototype.delayTimer = null;
        fb.prototype.stop = function() {
            clearTimeout(this.durationTimer);
            clearTimeout(this.delayTimer);
            clearTimeout(this.intervalTimer)
        };
        fb.prototype.play = function() {
            var a = this;
            this.stop();
            this.delayTimer = setTimeout(function() {
                return a.requestAd()
            }, 1E3 * this.value.delay)
        };
        fb.prototype.requestAd = function() {
            var a;
            a = this.getValue("adTagUrl");
            null != a && (a = a.replace("[timestamp]", (new Date).getTime()), a = a.replace("__random-number__", (new Date).getTime()));
            g.get(a, {
                withCredentials: !0,
                onload: this.vastLoadHandler.bind(this),
                onerror: this.error.bind(this)
            }, !1)
        };
        fb.prototype.vastLoadHandler = function(a) {
            var b, c, e, d, f;
            a = a.target.responseXML;
            if (null != a) try {
                b = a.querySelector("NonLinear"), null != b ? (f = null != a.querySelector("Impression") ? a.querySelector("Impression").textContent : "", e = null != a.querySelector("Tracking[event\x3dcreativeView]") ? a.querySelector("Tracking[event\x3dcreativeView]").textContent :
                    "", c = null != b.querySelector("NonLinearClickThrough") ? b.querySelector("NonLinearClickThrough").textContent : "", d = {
                    src: b.querySelector("StaticResource").textContent,
                    width: b.getAttribute("width"),
                    height: b.getAttribute("height"),
                    tracking: [f, e],
                    href: c
                }, this.displayAd(d)) : this.error("No overlay was returned")
            } catch (h) {
                this.error(h)
            }
        };
        fb.prototype.error = function(a) {
            this.facade.logger.error("[AMP IMA OVERLAY ERROR]", a);
            this.stop()
        };
        fb.prototype.displayAd = function(a) {
            var b = this;
            this.sendNotification(td.ADD_OVERLAY,
                a);
            this.durationTimer = setTimeout(function() {
                b.sendNotification(td.REMOVE_OVERLAY);
                return b.intervalTimer = setTimeout(function() {
                    return b.requestAd()
                }, 1E3 * b.value.interval)
            }, 1E3 * this.value.duration)
        };
        var td = {
                INITIALIZED: "ima/initialize",
                ADD_OVERLAY: "ima/addOverlay",
                REMOVE_OVERLAY: "ima/removeOverlay"
            },
            w = function(a) {
                w.__super__.constructor.call(this, a);
                this.intervals = [];
                this.loadedmetadata = this.onLoadedMetadata.bind(this);
                this.adVO = this.createDefaultAdVO()
            };
        f(w, J);
        w.NAME = J.NAME;
        w.prototype.defaults = {
            adTagUrl: null,
            overlay: null,
            width: null,
            height: null,
            maxBitrate: -1,
            ppid: null,
            companions: null,
            logEventsEnabled: !1
        };
        w.prototype.partner = "ima";
        w.prototype.key = "ima";
        w.prototype.intervals = null;
        w.prototype.adDisplayContainer = null;
        w.prototype.adDisplayContainerInitialized = !1;
        w.prototype.adsLoader = null;
        w.prototype.adsRenderingSettings = null;
        w.prototype.adsManagerLoaded = !1;
        w.prototype.adsManager = null;
        w.prototype.cuepoints = null;
        w.prototype.adLoaded = !1;
        w.prototype.playWhenLoaded = !1;
        w.prototype.contentHasEnded = !1;
        w.prototype.adTagUrl =
            null;
        w.prototype.viewMode = null;
        w.prototype.playbackCore = null;
        w.prototype.loadedmetadata = null;
        w.prototype.setEnabled = function(a) {
            var b;
            w.__super__.setEnabled.call(this, a);
            !1 === a && (null != (b = this.adsManager) && "function" === typeof b.destroy && b.destroy(), this.getInProgress() && this.contentPlay());
            return a
        };
        w.prototype.onLoadedMetadata = function(a) {
            this.canPlay() && !0 === this.playWhenLoaded && this.startAd()
        };
        w.prototype.initialize = function() {};
        w.prototype.ready = function() {
            var a;
            this.viewMode = google.ima.ViewMode.NORMAL;
            window.addEventListener("resize", this.resize.bind(this));
            null != this.config.vpaidAllowed && google.ima.settings.setVpaidAllowed(this.config.vpaidAllowed);
            null != this.config.vpaidMode && null != (a = google.ima.ImaSdkSettings.VpaidMode[this.config.vpaidMode.toUpperCase()]) && google.ima.settings.setVpaidMode(a);
            null != this.config.disableFlashAds && google.ima.settings.setDisableFlashAds(this.config.disableFlashAds);
            this.adDisplayContainer = this.createPlugin();
            this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
            this.adsRenderingSettings = new google.ima.AdsRenderingSettings;
            this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1);
            this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this), !1)
        };
        w.prototype.createPlugin = function() {
            return new google.ima.AdDisplayContainer(this.facade.getViewComponent().container)
        };
        w.prototype.engage = function(a) {
            var b, c;
            !1 !== this.getEnabled() && (w.__super__.engage.call(this), (!0 === this.adsManagerLoaded && !1 === this.contentHasEnded || !0 === this.contentHasEnded && "postroll" === (null != (b = this.adVO) ? b.type : void 0)) && null != (c = this.adsManager) && "function" === typeof c.destroy && c.destroy(), this.playWhenLoaded = this.adsManagerLoaded = this.contentHasEnded = this.adsManagerLoaded = !1)
        };
        w.prototype.setVolume = function(a) {
            var b;
            null != (b = this.adsManager) && b.setVolume(a);
            return a
        };
        w.prototype.getVolume = function() {
            var a;
            return null != (a = this.adsManager) ? a.getVolume() : void 0
        };
        w.prototype.requestAd =
            function() {
                var a, b, c, e, d, f;
                w.__super__.requestAd.call(this);
                a = this.getDimensions();
                e = a.clientWidth;
                c = a.clientHeight;
                a = new google.ima.AdsRequest;
                this.adTagUrl = this.getValue("adTagUrl");
                b = this.getValue("adsResponse");
                null != b && "" !== b ? a.adsResponse = g.read(b, null, g.mimeTypes.txt) : a.adTagUrl = this.adTagUrl;
                if (null == a.adsResponse && null == a.adTagUrl) this.onAdError("No valid adTagUrl or adsResponse provided.");
                else a.linearAdSlotWidth = e, a.linearAdSlotHeight = c, a.nonLinearAdSlotWidth = (null != (d = this.value.overlay) ?
                        d.width : void 0) || e, a.nonLinearAdSlotHeight = (null != (f = this.value.overlay) ? f.height : void 0) || c, e = this.adsLoader.getSettings(), null != this.config.ppid && e.setPpid(this.getValue("ppid")), this.adsLoader.requestAds(a)
            };
        w.prototype.requestOverlay = function() {
            var a, b;
            b = this.value.overlay;
            null != b && (a = new google.ima.AdsRequest, a.adTagUrl = b.adTagUrl, a.nonLinearAdSlotWidth = b.width || 300, a.nonLinearAdSlotHeight = b.height || 50, this.adsLoader.requestAds(a))
        };
        w.prototype.start = function(a) {
            var b;
            null == a && (a = !0);
            !0 === a ?
                (this.playbackCore = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore(), b = this.getMediaElement(), b.once("loadedmetadata", this.loadedmetadata), this.playbackCore.setEnabled(!1), this.playbackCore.load()) : this.engage();
            if (!1 === w.__super__.start.call(this)) return !1;
            this.isLiveMidroll = !1 === a && "live" === this.facade.player.retrieveProxy(t.NAME).getTemporalType();
            !0 !== this.adDisplayContainerInitialized && (this.adDisplayContainer.initialize(), this.adDisplayContainerInitialized = !0);
            !0 === this.canPlay() &&
            !0 === a ? this.startAd() : (this.playWhenLoaded = !0, this.requestAd())
        };
        w.prototype.canPlay = function() {
            return !0 === this.adsManagerLoaded
        };
        w.prototype.startAd = function() {
            this.playWhenLoaded = !1;
            try {
                null == this.viewMode && (this.viewMode = google.ima.ViewMode.NORMAL), this.adsManager.init(this.facade.player.getViewComponent().clientWidth, this.facade.player.getViewComponent().clientHeight, this.viewMode), this.adsManager.start()
            } catch (a) {
                this.error(a)
            }
        };
        w.prototype.resize = function(a, b) {
            var c;
            null == b && (b = this.getDimensions());
            if (null == this.dimensions || this.dimensions.width !== b.width || this.dimensions.height !== b.height) this.dimensions = b, null != a && (this.viewMode = a === ja.FULL_SCREEN ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL), null != (c = this.adsManager) && c.resize(this.dimensions.width, this.dimensions.height, this.viewMode)
        };
        w.prototype.onAdsManagerLoaded = function(a) {
            var b;
            this.adsRenderingSettings.bitrate = this.getValue("maxBitrate");
            this.adsRenderingSettings.autoAlign = !0;
            this.adsRenderingSettings.useStyledNonLinearAds = !0;
            null != (b = this.adsManager) && "function" === typeof b.destroy && b.destroy();
            this.adsManager = a.getAdsManager(this.facade.player.mediaElement, this.adsRenderingSettings);
            this.facade.player.sendNotification(k.AD_MANAGER_LOADED, {
                adManager: this.adsManager,
                viewMode: google.ima.ViewMode.NORMAL,
                adContainer: this.facade.getViewComponent()
            });
            this.adsManagerLoaded = !0;
            this.cuePoints = this.adsManager.getCuePoints();
            this.sendNotification(d.ADD_CUE_POINTS, this.cuePoints); - 1 !== this.cuePoints.indexOf(-1) && this.sendNotification(d.HAS_POST_CONTENT, !0);
            b = this.onAdEvent.bind(this);
            this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.contentPause.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.contentPlay.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED,
                b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this.onAdResumed.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this.onAdPaused.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, this.onAdClick.bind(this));
            this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT,
                b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, b);
            this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, b);
            !0 === this.getValue("logEventsEnabled") && this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, b);
            this.sendNotification(k.REQUEST_COMPLETE, {
                pods: this.cuePoints
            });
            this.sendNotification(k.RESPONSE, {
                pods: this.cuePoints,
                response: a,
                adsManager: this.adsManager
            });
            this.canPlay() && !0 === this.playWhenLoaded && this.startAd()
        };
        w.prototype.onAdClick = function(a) {
            !1 ===
            (null != a ? a.getAd().isLinear() : void 0) ? this.facade.player.sendNotification(d.PAUSE) : (this.getPaused() || this.pause(), this.sendNotification(k.AD_CLICKED, this.adVO))
        };
        w.prototype.onAdPaused = function(a) {
            this.setPaused(!0);
            this.facade.player.sendNotification(d.CHANGE_PLAY_STATE, U.PAUSED);
            this.facade.player.sendNotification(d.CHANGE_ACTIVE_STATE, kb.ACTIVE);
            this.facade.player.sendNotification(k.AD_PAUSED, this.adVO)
        };
        w.prototype.onAdResumed = function(a) {
            this.setPaused(!1);
            this.facade.player.sendNotification(d.CHANGE_PLAY_STATE,
                U.PLAYING)
        };
        w.prototype.onAdEvent = function(a) {
            var b, c, e, f, g, h, l;
            b = a.getAd();
            null != this.adVO && (null != b && (b.wrapperAdIds = "function" === typeof b.getWrapperAdIds ? b.getWrapperAdIds() : void 0, b.wrapperAdSystems = "function" === typeof b.getWrapperAdSystems ? b.getWrapperAdSystems() : void 0), this.adVO.metadata = b);
            switch (a.type) {
                case google.ima.AdEvent.Type.IMPRESSION:
                    this.sendNotification(k.IMPRESSION, this.adVO);
                    break;
                case google.ima.AdEvent.Type.LOADED:
                    if (b.isLinear()) {
                        a = b.getAdPodInfo().getPodIndex();
                        c = 0 === a ? "preroll" :
                            -1 === a ? "postroll" : "midroll";
                        this.adVO = new Va(b.getAdId(), b.getAdId(), b.getDuration(), a, c, "ima", null, null, this.adTagUrl, b, b.getAdPodInfo().getTotalAds());
                        if (!this.getInProgress() && "midroll" === c || "postroll" === c) this.startBreak(), this.engageAds();
                        this.resize();
                        this.sendNotification(k.AD_LOADED, this.adVO);
                        this.sendNotification(k.AD_DURATION_CHANGE, this.adVO);
                        this.setVolume(this.facade.player.getVolume())
                    } else this.facade.player.sendNotification(d.ADD_APPLICATION_STATE, "ad-overlaymode"), this.contentPlay();
                    break;
                case google.ima.AdEvent.Type.STARTED:
                    b.isLinear() && (this.adVO.position = b.getAdPodInfo().getAdPosition(), this.sendNotification(k.AD_STARTED, this.adVO), this.intervals.push(setInterval(this.onAdTimeUpdate.bind(this), 67)), this.facade.player.sendNotification(d.CHANGE_PLAY_STATE, U.PLAYING), this.sendNotification(k.AD_PLAY, this.adVO));
                    try {
                        e = [];
                        f = ("function" === typeof this.getConfigurationData ? null != (l = this.getConfigurationData()) ? l.companions : void 0 : void 0) || [];
                        g = 0;
                        for (h = f.length; g < h; g++) c = f[g], e = e.concat(b.getCompanionAds(c.width,
                            c.height));
                        0 < (null != e ? e.length : void 0) && this.setCompanions(e)
                    } catch (m) {
                        this.facade.logger.error("[AMP IMA ERROR]", "Could not retrieve companion ads:", m)
                    }
                    break;
                case google.ima.AdEvent.Type.COMPLETE:
                    b.isLinear() && this.sendNotification(k.AD_ENDED, this.adVO);
                    break;
                case google.ima.AdEvent.Type.FIRST_QUARTILE:
                    this.sendNotification(k.FIRST_QUARTILE, this.adVO);
                    break;
                case google.ima.AdEvent.Type.MIDPOINT:
                    this.sendNotification(k.MIDPOINT, this.adVO);
                    break;
                case google.ima.AdEvent.Type.THIRD_QUARTILE:
                    this.sendNotification(k.THIRD_QUARTILE,
                        this.adVO);
                    break;
                case google.ima.AdEvent.Type.LOG:
                    this.sendNotification(k.LOG, this.adVO);
                    break;
                case google.ima.AdEvent.Type.SKIPPED:
                    this.sendNotification(k.SKIPPED, this.adVO);
                    break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                    !0 === this.getInProgress() && this.endBreak()
            }
        };
        w.prototype.getDimensions = function() {
            var a;
            a = this.facade.player.getViewComponent();
            return {
                width: a.clientWidth,
                height: a.clientHeight
            }
        };
        w.prototype.onAdTimeUpdate = function(a) {
            this.resize();
            a = this.adsManager.getRemainingTime();
            this.sendNotification(k.AD_TIME_UPDATE,
                this.adVO.duration - a);
            this.sendNotification(k.AD_TIME_REMAINING, a)
        };
        w.prototype.onAdError = function(a) {
            a = (null != a ? "function" === typeof a.getError ? a.getError() : void 0 : void 0) || a;
            this.error(a);
            this.contentPlay()
        };
        w.prototype.play = function() {
            var a;
            w.__super__.play.call(this);
            try {
                null != (a = this.adsManager) && a.resume(), this.sendNotification(k.AD_RESUME)
            } catch (b) {
                this.facade.logger.error("[AMP IMA ERROR]", "resume", b)
            }
        };
        w.prototype.pause = function() {
            w.__super__.pause.call(this);
            if (null != this.adsManager) try {
                this.adsManager.pause()
            } catch (a) {
                this.facade.logger.error("[AMP IMA ERROR]",
                    "pause", a)
            } else this.playWhenLoaded = !1
        };
        w.prototype.clearIntervals = function() {
            var a, b;
            b = this.intervals;
            a = 0;
            for (b = b.length; a < b; a++) clearInterval(this.intervals.pop())
        };
        w.prototype.breakEnd = function() {
            var a;
            this.clearIntervals();
            w.__super__.breakEnd.call(this);
            a = this.facade.retrieveProxy(fb.NAME);
            null != a && a.play()
        };
        w.prototype.setCompanions = function(a) {
            var b, c, e, d, f;
            c = [];
            e = 0;
            for (d = a.length; e < d; e++) b = a[e], c.push({
                data: b.getContent(),
                type: null != (f = b.getContentType()) ? f.toLowerCase() : void 0,
                width: b.getWidth(),
                height: b.getHeight(),
                metadata: b
            });
            w.__super__.setCompanions.call(this, c);
            return a
        };
        w.prototype.contentPause = function() {
            var a, b = this;
            a = "pause waiting playing ended durationchange error".split(" ");
            if (!1 === this.facade.player.retrieveProxy(B.NAME).getSeeking()) a.push("seeked");
            else this.getMediaElement().once("seeked", function() {
                b.sendNotification(d.DISABLE_VIDEO_EVENTS, ["seeked"])
            });
            this.sendNotification(d.DISABLE_VIDEO_EVENTS, a);
            !0 === this.isLiveMidroll ? this.getMediaElement().volume = 0 : w.__super__.contentPause.call(this)
        };
        w.prototype.contentPlay = function() {
            var a, b;
            !0 === this.getInProgress() && this.endBreak();
            this.sendNotification(d.ENABLE_VIDEO_EVENTS, "pause seeked waiting playing ended durationchange error".split(" "));
            if ("postroll" !== (null != (a = this.adVO) ? a.type : void 0)) {
                if (!0 === this.isLiveMidroll)
                    if (this.getMediaElement().volume = this.facade.player.retrieveProxy(B.NAME).getVolume(), "ipad" === g.getDevice()) this.getMediaElement().load();
                    else return;
                w.__super__.contentPlay.call(this);
                "midroll" === (null != (b = this.adVO) ? b.type :
                    void 0) && "desktop" === g.getDevice() && this.facade.player.setCurrentTime(Math.floor(this.facade.player.getCurrentTime()))
            }
        };
        w.prototype.contentEnded = function() {
            var a;
            this.contentHasEnded = !0;
            try {
                null != (a = this.adsLoader) && "function" === typeof a.contentComplete && a.contentComplete()
            } catch (b) {
                this.facade.logger.error("[AMP IMA ERROR]", "contentComplete", b)
            }
        };
        w.prototype.terminateAd = function() {
            var a;
            try {
                null != (a = this.adsManager) && a.stop()
            } catch (b) {
                this.facade.logger.error("[AMP IMA ERROR]", "terminateAd", b)
            }
            "postrol" ===
            this.adVO.type && this.sendNotification(d.HAS_POST_CONTENT, !1);
            this.endBreak();
            this.contentPlay()
        };
        w.prototype.terminateAllAds = function() {
            var a;
            try {
                null != (a = this.adsManager) && a.destroy()
            } catch (b) {
                this.facade.logger.error("[AMP IMA ERROR]", "terminateAllAds", b)
            }
            this.sendNotification(d.HAS_POST_CONTENT, !1);
            this.endBreak();
            this.contentPlay()
        };
        w.prototype.destroy = function() {
            var a;
            this.clearIntervals();
            null != (a = this.adsManager) && "function" === typeof a.destroy && a.destroy()
        };
        var kh = function() {
            kh.__super__.constructor.call(this)
        };
        f(kh, puremvc.SimpleCommand);
        kh.prototype.execute = function(a) {
            this.facade.sendNotification(d.ADD_APPLICATION_STATE, "ad-overlay-mode")
        };
        var lh = function() {
            lh.__super__.constructor.call(this)
        };
        f(lh, puremvc.SimpleCommand);
        lh.prototype.execute = function(a) {
            this.facade.retrieveProxy(fb.NAME).stop();
            this.facade.player.sendNotification(d.REMOVE_APPLICATION_STATE, "ad-overlay-mode")
        };
        var Cb = function() {
            Cb.__super__.constructor.call(this)
        };
        f(Cb, na);
        Cb.prototype.componentName = "ad-overlay";
        Cb.prototype.anchor = null;
        Cb.prototype.image = null;
        Cb.prototype.tracker = null;
        Cb.prototype.tracker2 = null;
        Cb.prototype.closeButton = null;
        Cb.prototype.closeText = null;
        Cb.prototype.onRegister = function() {
            var a = this;
            Cb.__super__.onRegister.call(this);
            this.anchor = this.create("ad-overlay-anchor");
            this.anchor.target = "_blank";
            this.image = this.create("ad-overlay-img", this.anchor, "img");
            this.tracker = this.create();
            this.tracker.width = 0;
            this.tracker.height = 0;
            this.tracker2 = this.create(null, this, "img");
            this.tracker2.width = 0;
            this.tracker2.height =
                0;
            this.closeButton = this.create("ad-close-button", this.anchor);
            this.closeButton.onclick = function(b) {
                b.stopImmediatePropagation();
                a.sendNotification(td.REMOVE_OVERLAY);
                return !1
            };
            this.closeText = this.createText("ad-close-text", "x", this.closeButton)
        };
        Cb.prototype.listNotificationInterests = function() {
            return [td.ADD_OVERLAY, td.REMOVE_OVERLAY]
        };
        Cb.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case td.ADD_OVERLAY:
                    a = a.getBody(), this.image.src = a.src, this.anchor.href = a.href, this.tracker.src = a.tracking[0],
                        this.tracker2.src = a.tracking[1]
            }
        };
        var mh = function() {
            mh.__super__.constructor.call(this)
        };
        f(mh, puremvc.SimpleCommand);
        mh.prototype.execute = function(a) {
            this.facade.retrieveProxy(w.NAME).ready()
        };
        var nh = function() {
            nh.__super__.constructor.call(this)
        };
        f(nh, puremvc.SimpleCommand);
        nh.prototype.execute = function(a) {
            this.facade.retrieveProxy(w.NAME).resize(a.getBody())
        };
        var oh = function() {
            oh.__super__.constructor.call(this)
        };
        f(oh, puremvc.SimpleCommand);
        oh.prototype.execute = function(a) {
            this.facade.retrieveProxy(w.NAME).resize(a.getBody())
        };
        var Xb = function(a) {
            Xb.__super__.constructor.call(this, a)
        };
        f(Xb, w);
        Xb.NAME = w.NAME;
        Xb.prototype.createPlugin = function() {
            return new google.ima.AdDisplayContainer(this.facade.getViewComponent().container, this.facade.player.getMediaElement(), this.facade.getViewComponent().container)
        };
        Xb.prototype.engage = function(a) {
            Xb.__super__.engage.call(this, a);
            this.sendNotification(d.DISABLE_VIDEO_EVENTS, ["paused", "ended", "durationchange", "error"])
        };
        Xb.prototype.reset = function(a) {
            Xb.__super__.reset.call(this, a);
            this.sendNotification(d.ENABLE_VIDEO_EVENTS, ["paused", "ended", "durationchange", "error"])
        };
        Xb.prototype.breakStart = function() {
            this.playbackCore = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore();
            this.playbackCore.setEnabled(!1);
            this.setInProgress(!0)
        };
        Xb.prototype.breakEnd = function() {
            Xb.__super__.breakEnd.call(this);
            this.playbackCore.setEnabled(!0)
        };
        var la = function(a, b) {
            la.__super__.constructor.call(this, a, b)
        };
        f(la, I);
        la.NAME = "AdWrapper";
        la.prototype.enabled = !0;
        la.prototype.paused = !1;
        la.prototype.started = !1;
        la.prototype.adVO =
            null;
        la.prototype.partner = null;
        la.prototype.getFeatureName = function() {
            return "ads"
        };
        la.prototype.getInProgress = function() {
            return this.player.mediaElement.getPlayerProperty("adInProgress")
        };
        la.prototype.getStarted = function() {
            return this.started
        };
        la.prototype.getPaused = function() {
            return this.paused
        };
        la.prototype.getCompanions = function() {
            var a;
            return null != (a = this.adVO) ? a.companions : void 0
        };
        la.prototype.setEnabled = function(a) {
            this.enabled = a;
            this.player.mediaElement.setPlayerProperty("adsEnabled", a);
            return a
        };
        la.prototype.getEnabled = function() {
            return this.enabled
        };
        la.prototype.enable = function() {
            this.setEnabled(!0)
        };
        la.prototype.disable = function() {
            this.setEnabled(!1)
        };
        la.prototype.createFlashVars = function(a) {
            a.core_ads_enabled = !0;
            return a
        };
        la.prototype.listNotificationInterests = function() {
            var a, b;
            return la.__super__.listNotificationInterests.call(this).concat(function() {
                var c;
                c = [];
                for (a in ka) b = ka[a], c.push(b);
                return c
            }())
        };
        la.prototype.handleNotification = function(a) {
            var b, c, e, f, g, h, l;
            la.__super__.handleNotification.call(this,
                a);
            b = a.getName();
            a = a.getBody();
            this.adVO = this.createAdVO(a);
            f = this;
            switch (b) {
                case ka.BREAK_START:
                    g = k.BREAK_START;
                    break;
                case ka.BREAK_END:
                    g = k.BREAK_END;
                    break;
                case ka.BREAK_SKIPPED:
                    g = k.BREAK_SKIPPED;
                    break;
                case ka.AD_MEDIA_LOADED:
                    g = k.AD_LOADED;
                    this.start = !1;
                    break;
                case ka.AD_STARTED:
                    g = k.AD_STARTED;
                    this.started = !0;
                    this.sendNotification(d.ADD_APPLICATION_STATE, "ad-mode");
                    break;
                case ka.AD_TIME_UPDATE:
                    g = k.AD_TIME_UPDATE;
                    break;
                case ka.AD_TIME_REMAINING:
                    g = k.AD_TIME_REMAINING;
                    break;
                case ka.AD_ERROR:
                case ka.AD_PLAYBACK_FAILED:
                    g =
                        k.AD_ERROR;
                    this.start = !1;
                    this.sendNotification(d.REMOVE_APPLICATION_STATE, "ad-mode");
                    break;
                case ka.COMPLETE:
                    g = k.COMPLETE;
                    break;
                case ka.AD_ENDED:
                case ka.AD_PLAYBACK_TERMINATED:
                    g = k.AD_ENDED;
                    this.sendNotification(d.REMOVE_APPLICATION_STATE, "ad-mode");
                    break;
                case ka.AD_CLICKED:
                    g = k.AD_CLICKED;
                    break;
                case ka.AD_COMPANION:
                    g = k.AD_COMPANION;
                    null != this.adVO && null != a && (this.adVO.companions = a);
                    break;
                case ka.AD_PAUSE:
                    g = k.AD_PAUSE;
                    f = this.player;
                    this.paused = !0;
                    this.player.setPlayState("paused");
                    break;
                case ka.AD_PLAY:
                    g =
                        k.AD_PLAY;
                    this.paused = !1;
                    this.player.setPlayState("playing");
                    break;
                case ka.AD_LOG:
                    g = k.AD_LOG;
                    break;
                case ka.AD_FIRST_QUARTILE:
                    g = k.FIRST_QUARTILE;
                    break;
                case ka.AD_MIDPOINT:
                    g = k.MIDPOINT;
                    break;
                case ka.AD_THIRD_QUARTILE:
                    g = k.THIRD_QUARTILE;
                    break;
                case ka.AD_REQUEST:
                    g = k.REQUEST;
                    break;
                case ka.AD_REQUEST_COMPLETE:
                    g = k.REQUEST_COMPLETE;
                    c = [];
                    b = a.cuePoints || [];
                    h = 0;
                    for (l = b.length; h < l; h++) e = b[h], c.push(new Va(e.sceneId, e.sceneTitle, e.sceneDuration, e.scenePodIndex, e.scenePodPosition, this.partner, null, null, null, {},
                        e.sceneSubCount, e.sceneEndSeconds));
                    this.adVO = {
                        pods: c
                    };
                    b = new V("response", this.adVO);
                    b.player = this.player;
                    f.dispatchEvent(b);
                    break;
                case ka.AD_SKIPPED:
                    g = k.SKIPPED;
                    break;
                case ka.AD_IMPRESSION:
                    g = k.IMPRESSION
            }
            null != g && (this.sendNotification(g, this.adVO), b = g === k.AD_TIME_REMAINING ? new V(g.replace(/^ads/, ""), a.timeElapsed) : new V(g.replace(/^ads/, ""), this.adVO), b.player = this.player, f.dispatchEvent(b))
        };
        la.prototype.createAdVO = function(a) {
            return null == a ? null : new Va(a.id, a.title, a.duration, a.adIndex, a.podPosition,
                a.adPlatform, null, null, a.requestURL, a.metadata, a.totalAds, a.currentTime)
        };
        la.prototype.setPodLocks = function(a) {
            var b, c, d, f;
            c = [];
            d = 0;
            for (f = a.length; d < f; d++) b = a[d], c.push({
                sceneId: b.id,
                sceneLocked: b.locked,
                sceneTitle: b.title,
                sceneStartSeconds: b.time,
                sceneEndSeconds: b.duration + b.time,
                scenePodIndex: b.position,
                scenePodPosition: b.type
            });
            this.player.mediaElement.setAdPodLocks(c)
        };
        la.prototype.terminateAd = function() {
            this.player.mediaElement.terminateAd()
        };
        la.prototype.terminateAllAds = function() {
            this.player.mediaElement.terminateAllAds()
        };
        la.prototype.requestAd = function() {
            this.player.mediaElement.triggerAd()
        };
        var Fd = function() {
            return Fd.__super__.constructor.apply(this, arguments)
        };
        f(Fd, la);
        Fd.NAME = "IMAWrapper";
        Fd.prototype.partner = "ima";
        Fd.prototype.flashPlugins = [{
            id: "GoogleIMAPlugin",
            src: "#{paths.resources}plugins/GoogleIMAPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "GoogleIMAPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "IMAOverlayAdPlugin",
            src: "#{paths.resources}plugins/IMAOverlayAdPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "IMAOverlayAdPlugin",
            type: "application/x-shockwave-flash"
        }, {
            id: "AdOptionsPlugin",
            src: "#{paths.resources}plugins/AdOptionsPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "AdOptionsPlugin",
            type: "application/x-shockwave-flash"
        }];
        Fd.prototype.createXML = function(a) {
            var b, c, d, f, g, h, k, l, m;
            c = a.firstChild;
            b = a.getElementsByTagName("admedia")[0];
            null == b && (b = a.createElement("admedia"), c.appendChild(b));
            c = a.createElement("vendor");
            c.setAttribute("id", "dfp");
            b.appendChild(c);
            f = [{
                value: this.config.adTagUrl,
                key: "DFP_AD_TAG_URL"
            }, {
                value: this.config.maxBitrate,
                key: "DFP_MAX_BITRATE"
            }, {
                value: this.config.sceneMarkers,
                key: "displaySceneMarkers"
            }, {
                value: this.config.ppid,
                key: "DFP_PPID"
            }];
            g = 0;
            for (k = f.length; g < k; g++) d = f[g], null != d.value && this.createProperty(a, d.key, d.value, c);
            null != this.config.position && c.setAttribute("position", this.config.position);
            null != this.config.params && (null != this.config.params.adTag && this.createProperty(a, "DFP_AD_TAG_PARAMS", this.config.params.adTag, c), null != this.config.params.manual && this.createProperty(a, "DFP_MANUAL_PARAMS", this.config.params.manual,
                c));
            if (null != this.config.companions) {
                f = [];
                g = [];
                m = this.config.companions;
                k = 0;
                for (l = m.length; k < l; k++) d = m[k], f.push(d.width + "x" + d.height), g.push(d.id);
                this.createProperty(a, "DFP_SIZE", f.join(","), c);
                this.createProperty(a, "COMPANION_ID", g.join(","), c)
            }
            null != this.config.disableCompanionAds && this.createProperty(a, "disableCompanionAds", this.config.disableCompanionAds, c);
            if (null != this.config.overlay)
                for (!0 === this.config.overlay.enabled && (h = a.createElement("overlay"), b.appendChild(h)), f = [{
                    value: "dfp",
                    key: "OVERLAY_AD_PARTNER"
                }, {
                    value: this.config.overlay.adTagUrl,
                    key: "OVERLAY_AD_BASE_URL"
                }, {
                    value: this.config.overlay.delay,
                    key: "OVERLAY_AD_DELAY"
                }, {
                    value: this.config.overlay.interval,
                    key: "OVERLAY_AD_INTERVAL"
                }, {
                    value: this.config.overlay.duration,
                    key: "OVERLAY_AD_DURATION"
                }, {
                    value: "" + this.config.overlay.width + "x" + this.config.overlay.height,
                    key: "OVERLAY_AD_SIZE"
                }], b = 0, c = f.length; b < c; b++) d = f[b], null != d.value && this.createProperty(a, d.key, d.value, h);
            return a
        };
        var oa = function() {
            oa.__super__.constructor.call(this)
        };
        f(oa, yb);
        oa.NAME =
            "AdPlugin";
        oa.prototype.container = null;
        oa.prototype.featureName = "ads";
        oa.prototype.createModel = function() {
            this.proxy = this.isFullscreenDevice() ? this.createFullscreenProxy() : this.createProxy();
            this.registerProxy(this.proxy)
        };
        oa.prototype.createController = function() {
            oa.__super__.createController.call(this);
            this.registerCommand(d.MEDIA_CHANGE, fh);
            this.registerCommand(k.BREAK_START, kf);
            this.registerCommand(k.AD_LOADED, jf);
            this.registerCommand(k.BREAK_END, lf);
            this.registerCommand($.SEEKED, gh);
            this.registerCommand(k.AD_CONTAINER_CREATED,
                mf);
            this.registerCommand(d.REPLAY, hh);
            this.registerCommand(k.AD_STARTED, y);
            this.registerCommand(k.SKIPPED, y);
            this.registerCommand(k.AD_MANAGER_LOADED, y);
            this.registerCommand(k.AD_TIME_UPDATE, y);
            this.registerCommand(k.AD_TIME_REMAINING, y);
            this.registerCommand(k.AD_DURATION_CHANGE, y);
            this.registerCommand(k.AD_ENDED, y);
            this.registerCommand(k.AD_ERROR, y);
            this.registerCommand(k.AD_COMPANION, y);
            this.registerCommand(k.FIRST_QUARTILE, y);
            this.registerCommand(k.MIDPOINT, y);
            this.registerCommand(k.THIRD_QUARTILE,
                y);
            this.registerCommand(k.COMPLETE, y);
            this.registerCommand(k.LOG, y);
            this.registerCommand(k.REQUEST, y);
            this.registerCommand(k.AD_RESUME, y);
            this.registerCommand(k.AD_PLAY, y);
            this.registerCommand(k.AD_PAUSE, y);
            this.registerCommand(k.AD_PAUSED, y);
            this.registerCommand(k.IMPRESSION, y);
            this.registerCommand(k.AD_CLICKED, y);
            this.registerCommand(k.REQUEST_COMPLETE, y);
            this.registerCommand(k.RESPONSE, y);
            this.registerCommand(k.BREAK_SKIPPED, y)
        };
        oa.prototype.createView = function() {
            return this.registerMediator(new Ya)
        };
        oa.prototype.isFullscreenDevice = function() {
            return g.isFullscreenDevice()
        };
        oa.prototype.createProxy = function() {};
        oa.prototype.createFullscreenProxy = function() {};
        oa.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE, d.REPLAY, d.PLAY, d.PAUSE, d.PAUSED, d.START, d.STARTED, d.ENDED, d.READY, d.VOLUME_CHANGE, d.FULL_SCREEN_CHANGE, d.CHANGE_ACTIVE_STATE, d.PLAY_STATE_CHANGE, $.PLAY, $.PAUSE, $.SEEKED, $.TOGGLE_PLAY_PAUSE]
        };
        oa.prototype.listNotificationPublications = function() {
            var a, b;
            return oa.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in k) b = k[a], c.push(b);
                return c
            }()).concat([d.PLAY_REQUEST, d.UPDATE_DATA_BINDINGS, d.DISPLAY_TIME, d.ADD_CUE_POINTS, d.DISABLE_FULL_SCREEN, d.ENABLE_VIDEO_EVENTS, d.DISABLE_VIDEO_EVENTS, d.HAS_POST_CONTENT, d.MEDIA_SEQUENCE_ENDED, d.CHANGE_PLAY_STATE])
        };
        oa.prototype.setEnabled = function(a) {
            this.proxy.setEnabled(a)
        };
        oa.prototype.getEnabled = function() {
            return this.proxy.getEnabled()
        };
        oa.prototype.getInProgress = function() {
            return this.proxy.getInProgress()
        };
        oa.prototype.getStarted = function() {
            return this.proxy.getStarted()
        };
        oa.prototype.getPaused = function() {
            return this.proxy.getPaused()
        };
        oa.prototype.getCompanions = function() {
            return this.proxy.getCompanions()
        };
        oa.prototype.setPodLocks = function(a) {
            this.proxy.setPodLocks(a)
        };
        oa.prototype.terminateAd = function() {
            this.proxy.terminateAd()
        };
        oa.prototype.terminateAllAds = function() {
            this.proxy.terminateAllAds()
        };
        oa.prototype.requestAd = function() {
            this.proxy.start(!1)
        };
        var Jb = function(a, b) {
            null == b && (b = {});
            Jb.__super__.constructor.call(this, a, b)
        };
        f(Jb, I);
        Jb.NAME = "ShareWrapper";
        Jb.prototype.controls = ["share", "facebook", "twitter"];
        Jb.prototype.flashView = {
            elements: {
                controls: {
                    elements: {
                        shareBtn: {}
                    }
                }
            }
        };
        Jb.prototype.getFeatureName = function() {
            return "share"
        };
        Jb.prototype.createFlashVars = function(a) {
            null == a.share_mode && (a.share_mode = 2);
            return a
        };
        Jb.prototype.createXML = function(a) {
            var b, c, d, f, g;
            b = null != (c = this.player.config) ? null != (d = c.flash) ? null != (f = d.view) ? null != (g = f.elements) ? g.controls : void 0 : void 0 : void 0 : void 0;
            if (null != b) {
                null == b.elements && (b.elements = {});
                g = this.controls;
                d = 0;
                for (f = g.length; d <
                f; d++) c = g[d], !0 === this.config[c] && null == b.elements[c + "Btn"] && (b.elements[c + "Btn"] = {});
                return a
            }
        };
        Jb.prototype.listNotificationInterests = function() {
            return Jb.__super__.listNotificationInterests.call(this).concat([q.SHARE, q.SHARE_REQUEST])
        };
        Jb.prototype.handleNotification = function(a) {
            var b, c;
            Jb.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.SHARE:
                case q.SHARE_REQUEST:
                    c = "share"
            }
            null != c && this.dispatchEvent(new V(c, a))
        };
        l.registerPlugin("share", "flash", Jb);
        var Kb =
            function() {
                Kb.__super__.constructor.call(this)
            };
        f(Kb, zb);
        Kb.prototype.componentName = "share";
        Kb.prototype.shareControl = null;
        Kb.prototype.shareSeparator = null;
        Kb.prototype.embed = null;
        Kb.prototype.onRegister = function() {
            this.sendNotification(d.ADD_CONTROL_STATE, "share-enabled");
            this.shareControl = this.create(["share", "control"], !1);
            this.shareSeparator = this.create(["share", "separator"], this.shareControl);
            this.createButton("share");
            !0 === this.plugin.getFacebook() && this.createButton("facebook");
            !0 === this.plugin.getTwitter() &&
            this.createButton("twitter");
            this.sendNotification(d.ADD_CONTROL, this.shareControl);
            Kb.__super__.onRegister.call(this)
        };
        Kb.prototype.createButton = function(a) {
            a = new Da(null, this.shareControl, null, a, this.clickHandler.bind(this, a));
            this.facade.registerMediator(a)
        };
        Kb.prototype.clickHandler = function(a, b) {
            b.stopImmediatePropagation();
            this.sendNotification(d.DISPATCH_EVENT, new V("share", {
                provider: a,
                link: this.plugin.getLink(),
                embed: this.plugin.getEmbed()
            }));
            return !1
        };
        Kb.prototype.listNotificationInterests =
            function() {
                return [d.MEDIA_CHANGE]
            };
        Kb.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.MEDIA_CHANGE:
                    null != a.embed ? this.sendNotification(d.ADD_CONTROL_STATE, "share-enabled") : this.sendNotification(d.REMOVE_CONTROL_STATE, "share-enabled")
            }
        };
        var gb = function(a) {
            gb.__super__.constructor.call(this, a)
        };
        f(gb, R);
        gb.NAME = x.NAME;
        gb.prototype.defaults = {
            facebook: !1,
            twitter: !1
        };
        gb.prototype.loaded = !0;
        gb.prototype.link = null;
        gb.prototype.embed = null;
        gb.prototype.getEmbed = function() {
            return this.embed
        };
        gb.prototype.setEmbed = function(a) {
            return this.embed = a
        };
        gb.prototype.getLink = function() {
            return this.link
        };
        gb.prototype.setLink = function(a) {
            return this.link = a
        };
        gb.prototype.getFacebook = function() {
            return this.getConfigurationData().facebook
        };
        gb.prototype.setFacebook = function(a) {
            return this.data.facebook = a
        };
        gb.prototype.getTwitter = function() {
            return this.getConfigurationData().twitter
        };
        gb.prototype.setTwitter = function(a) {
            return this.data.twitter = a
        };
        var ph = function() {
            ph.__super__.constructor.call(this)
        };
        f(ph, puremvc.SimpleCommand);
        ph.prototype.execute = function(a) {
            var b;
            a = a.getBody();
            b = this.facade.retrieveProxy(gb.NAME);
            b.setEmbed(a.embed);
            b.setLink(a.link)
        };
        var Lb = function() {
            Lb.__super__.constructor.call(this)
        };
        f(Lb, oa);
        Lb.prototype.moduleName = "ima";
        Lb.prototype.createFullscreenProxy = function() {
            return new Xb(this.config)
        };
        Lb.prototype.createProxy = function() {
            return new w(this.config)
        };
        Lb.prototype.isFullscreenDevice = function() {
            var a;
            a = navigator.userAgent;
            return g.isFullscreenDevice() || /Android 4\.[0-1]/.test(a) ||
                /CrKey/.test(a)
        };
        Lb.prototype.createModel = function() {
            Lb.__super__.createModel.call(this);
            null != this.config.overlay && this.registerProxy(new fb(this.config.overlay))
        };
        Lb.prototype.createController = function() {
            Lb.__super__.createController.call(this);
            null != this.config.overlay && (this.registerCommand(td.ADD_OVERLAY, kh), this.registerCommand(td.REMOVE_OVERLAY, lh));
            this.registerCommand(d.READY, mh);
            this.registerCommand(d.FULL_SCREEN_CHANGE, nh);
            this.registerCommand(d.CHANGE_ACTIVE_STATE, oh)
        };
        Lb.prototype.createView =
            function() {
                Lb.__super__.createView.call(this);
                null != this.config.overlay && this.registerMediator(new Cb)
            };
        l.registerPlugin("ima", "html", Lb);
        l.registerPlugin("ima", "flash", Fd);
        var Yb = function(a) {
            Yb.__super__.constructor.call(this, a)
        };
        f(Yb, x);
        Yb.NAME = x.NAME;
        Yb.prototype.defaults = {
            url: null
        };
        Yb.prototype.hidden = !0;
        Yb.prototype.getURL = function() {
            return this.data.url
        };
        Yb.prototype.setURL = function(a) {
            return this.data.url = a
        };
        Yb.prototype.getHidden = function() {
            return this.hidden
        };
        Yb.prototype.setHidden = function(a) {
            return this.hidden =
                a
        };
        Yb.prototype.invoke = function() {
            var a, b = this;
            if (null != this.data.url) return a = g.get(this.data.url, {
                onload: function() {
                    null != a.response && b.sendNotification("bitratesUpdate", a.response)
                },
                onerror: function(a) {
                    return b.sendNotification("bitratesUpdate", null)
                }
            })
        };
        var qh = function() {
            qh.__super__.constructor.call(this)
        };
        f(qh, puremvc.SimpleCommand);
        qh.prototype.execute = function(a) {
            var b;
            b = this.facade.retrieveProxy(Yb.NAME);
            b.setHidden(a.getBody());
            b.setURL("" + this.facade.player.getSrc());
            !1 === a.getBody() &&
            b.invoke()
        };
        var hb = function() {
            hb.__super__.constructor.call(this)
        };
        f(hb, zb);
        hb.prototype.componentName = "stats";
        hb.prototype.container = null;
        hb.prototype.statsText = null;
        hb.prototype.statsButton = null;
        hb.prototype.bitrateText = null;
        hb.prototype.bitrateArr = null;
        hb.prototype.onRegister = function() {
            var a = this;
            hb.__super__.onRegister.call(this);
            this.sendNotification(d.ADD_CONTROL_STATE, "stats-enabled");
            this.classList.add("hidden");
            this.statsFormat = this.create("stats-text");
            this.statsQuality = this.create("stats-text");
            this.statsBitRate = this.create("stats-text");
            this.statsPlayBack = this.create("stats-text");
            this.statsAnalytics = this.create("stats-text");
            this.statsButton = this.create("stats-button", !1);
            m.create(this.statsButton, m.CLICK, function(b) {
                b.stopImmediatePropagation();
                a.sendNotification("statsvisibilitychange", !a.facade.getHidden());
                return !1
            });
            this.sendNotification(d.ADD_CONTROL, this.statsButton)
        };
        hb.prototype.listNotificationInterests = function() {
            return ["statsvisibilitychange", d.PLAYING, d.TIME_UPDATE]
        };
        hb.prototype.handleNotification =
            function(a) {
                var b;
                b = a.getName();
                a.getBody();
                switch (b) {
                    case "statsvisibilitychange":
                        this.plugin.getHidden() ? this.classList.add("hidden") : (this.classList.remove("hidden"), this.statsBitRate.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eAdaptive Bitrate Renditions\x3c/b\x3e\x3c/p\x3e\x3cp\x3eLoading...\x3c/p\x3e", this.renderStats());
                        break;
                    case d.TIME_UPDATE:
                        this.renderQuality();
                        break;
                    case d.PLAYING:
                        a = this.facade.player.getQualityLevels(), 0 < (null != a ? a.length : void 0) ? this.constructBitrateText(a) :
                            this.statsBitRate.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eAdaptive Bitrate Renditions\x3c/b\x3e\x3c/p\x3e\x3cp\x3eNot Available\x3c/p\x3e"
                }
            };
        hb.prototype.renderQuality = function() {
            var a;
            a = this.facade.player.getQuality();
            this.quality !== a && (this.statsQuality.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eQuality\x3c/b\x3e\x3c/p\x3e\x3cp\x3e" + this.createBitrateText(this.facade.player.getQualityLevels()[a], a) + "\x3c/p\x3e")
        };
        hb.prototype.renderStats =
            function() {
                var a, b, c, d, f, k, h, l;
                try {
                    k = this.facade.player, c = void 0 === k.getMedia() ? "Not Available" : k.getMedia().type, h = "" === k.getSrc() || null === k.getSrc() ? "Not Available" : k.getSrc(), b = g.getDevice(), null == b && (b = ""), f = "" !== this.facade.player.getConfig().mode && null !== this.facade.player.getConfig().mode && -1 !== this.facade.player.getConfig().mode.indexOf("html") ? this.facade.player.getVersion() + ", HTML5 Video: " + b : "Not Available", d = null != (l = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore()) ?
                        l.proxyName.indexOf("dash") : void 0, -1 < d && (f += ", dash.js"), a = void 0 === this.facade.player.getConfig().mediaanalytics || "" === this.facade.player.getConfig().mediaanalytics.config || null === this.facade.player.getConfig().mediaanalytics.config ? "Not Available" : this.facade.player.getConfig().mediaanalytics.config, this.statsFormat.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eStream\x3c/b\x3e\x3c/p\x3e\x3cp\x3eFormat: " + c + "\x3c/p\x3e\x3cp\x3eURL: " + h + "\x3c/p\x3e", this.statsPlayBack.innerHTML =
                        "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3ePlayback\x3c/b\x3e\x3c/p\x3e" + f, this.statsAnalytics.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eAnalytics\x3c/b\x3e\x3c/p\x3e" + a
                } catch (m) {
                    this.facade.logger.error("[AMP Stats Render Error]:", m)
                }
            };
        hb.prototype.constructBitrateText = function(a) {
            var b, c, d, f;
            this.bitrateArr = a;
            this.bitrateText = "";
            this.bitrateArr.sort(function(a, b) {
                var c, d;
                c = parseInt(a.bitrate);
                d = parseInt(b.bitrate);
                return c < d ? -1 : c > d ? 1 :
                    0
            });
            f = this.bitrateArr;
            a = c = 0;
            for (d = f.length; c < d; a = ++c) b = f[a], this.bitrateText += this.createBitrateText(b, a);
            "" === this.bitrateText && (this.bitrateText = "\x3cp\x3eNot Available\x3c/p\x3e");
            this.statsBitRate.innerHTML = "\x3cp\x3e\x3cb class\x3d'" + this.classList.prefix + "stats-header'\x3eAdaptive Bitrate Renditions\x3c/b\x3e\x3c/p\x3e" + this.bitrateText
        };
        hb.prototype.createBitrateText = function(a, b) {
            return "\x3cp\x3e" + (b + 1) + ". " + (a.bitrate / 1E3).toFixed(0) + " kbps " + a.width + "x" + a.height + "\x3c/p\x3e"
        };
        var Q = {
                START_AUTHENTICATION: "aisauthenticationstarted",
                AUTHENTICATED: "aisauthenticated",
                AUTHENTICATING: "aisauthenticating",
                AUTHENTICATION_COMPLETE: "aisauthenticationcomplete",
                CHOOSE_AUTH_PROVIDER: "aischooseprovider",
                CHOOSE_PLAY_OPTIONS: "aischooseplayoptions",
                LAUNCH_IDP_LOGIN: "aislaunchidplogin"
            },
            oe = function() {
                oe.__super__.constructor.call(this)
            };
        f(oe, y);
        oe.prototype.execute = function(a) {
            oe.__super__.execute.call(this, a);
            this.proxy.launchIDPLogin(a.getBody())
        };
        var Db = function(a) {
            Db.__super__.constructor.call(this, null, null, a)
        };
        f(Db, ba);
        Db.prototype.componentName =
            "ais-chooser";
        Db.prototype.menu = null;
        Db.prototype.label = null;
        Db.prototype.grid = null;
        Db.prototype.select = null;
        Db.prototype.login = null;
        Db.prototype.title = null;
        Db.prototype.onRegister = function() {
            var a = this;
            Db.__super__.onRegister.call(this);
            this.classList.add("hidden");
            this.title = this.createText("ais-chooser-title", "Choose your provider");
            this.grid = this.create("ais-chooser-grid");
            this.menu = this.create("ais-chooser-menu");
            this.label = this.createText("ais-chooser-label", "Providers: ", this.menu);
            this.select =
                this.create("ais-chooser-select", this.menu, "select");
            this.login = this.create("ais-chooser-login", !1, "input");
            this.login.type = "button";
            this.login.value = "Login";
            m.create(this.login, m.CLICK, function(b) {
                "function" === typeof b.stopImmediatePropagation && b.stopImmediatePropagation();
                a.sendNotification(Q.LAUNCH_IDP_LOGIN, a.select.options[a.select.selectedIndex].value);
                return !1
            });
            this.menu.appendChild(this.login)
        };
        Db.prototype.listNotificationInterests = function() {
            return [Q.CHOOSE_AUTH_PROVIDER, Q.AUTHENTICATING]
        };
        Db.prototype.handleNotification = function(a) {
            var b, c, d, f, g, h, k, l, m, p, q, t, s, u = this;
            switch (a.getName()) {
                case Q.CHOOSE_AUTH_PROVIDER:
                    b = a.getBody();
                    a = b.possible_idps;
                    f = b.footprints || [];
                    h = b.grouped_idps || [];
                    b = this.facade.retrieveProxy(x.NAME);
                    m = b.value.logos;
                    b = null != m ? m.base : void 0;
                    this.grid.innerHTML = "";
                    if (null != h && null != (null != m ? m.group : void 0)) {
                        s = 0;
                        for (c = h.length; s < c; s++)
                            if (g = h[s], g.name === m.group) {
                                d = g;
                                break
                            }
                        if (null != d)
                            for (s = d.members, c = h = 0, g = s.length; h < g; c = ++h) p = s[c], d = a[p], c = this.create(["ais-chooser-grid-item",
                                "ais-chooser-grid-index-" + (c + 1)
                            ], this.grid), null == c.dataset && (c.dataset = {}), c.dataset.key = p, c.onclick = function(a) {
                                "function" === typeof a.stopImmediatePropagation && a.stopImmediatePropagation();
                                u.sendNotification(Q.LAUNCH_IDP_LOGIN, (null != a.currentTarget ? a.currentTarget : a.srcElement).dataset.key);
                                return !1
                            }, null != (null != (q = a[p].logos) ? q[m.key] : void 0) && (k = this.create("ais-chooser-grid-cell-img", c, "img"), k.alt = d.display_name, t = d.logos[m.key], -1 === t.indexOf("http") && (t = b + t), k.src = t, null == k.dataset && (k.dataset = {}), k.dataset.key = p, c = this.create("ais-chooser-grid-cell-label", c, "span")), c.innerHTML = d.display_name
                    }
                    "" !== this.grid.innerHTML && (this.classList.add("ais-chooser-featured"), this.label.textContent = "Other ");
                    q = this.select.options;
                    c = b = 0;
                    for (m = q.length; b < m; c = ++b) this.select.options.remove(c);
                    if (0 < f.length)
                        for (b = 0, m = f.length; b < m; b++) l = f[b], q[q.length] = new Option("" + a[l].display_name, "" + l);
                    for (l in a) f = a[l], q[q.length] = new Option("" + f.display_name, "" + l);
                    this.classList.remove("hidden");
                    break;
                case Q.AUTHENTICATING:
                    this.classList.add("hidden")
            }
        };
        var Mb = function(a) {
            Mb.__super__.constructor.call(this, null, null, a)
        };
        f(Mb, ba);
        Mb.prototype.componentName = "ais-play";
        Mb.prototype.menu = null;
        Mb.prototype.restart = null;
        Mb.prototype.resume = null;
        Mb.prototype.resumeTime = null;
        Mb.prototype.onRegister = function() {
            var a = this;
            Mb.__super__.onRegister.call(this);
            this.classList.add("hidden");
            this.menu = this.create("ais-play-menu");
            this.restart = this.create("ais-play-restart", this.menu);
            this.restart.type = "button";
            this.restart.textContent = "Restart";
            this.restart.onclick =
                function(b) {
                    "function" === typeof b.stopImmediatePropagation && b.stopImmediatePropagation();
                    a.play();
                    return !1
                };
            this.resume = this.create("ais-play-resume", this.menu);
            this.resume.type = "button";
            this.resume.value = "Resume";
            this.restart.onclick = function(b) {
                "function" === typeof b.stopImmediatePropagation && b.stopImmediatePropagation();
                a.play(a.resumeTime);
                return !1
            }
        };
        Mb.prototype.play = function(a) {
            this.facade.retrieveProxy(X.NAME).play(a)
        };
        Mb.prototype.listNotificationInterests = function() {
            return [Q.CHOOSE_PLAY_OPTIONS]
        };
        Mb.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case Q.CHOOSE_PLAY_OPTIONS:
                    this.resumeTime = a.getBody(), this.classList.remove("hidden")
            }
        };
        var rh = function() {
            rh.__super__.constructor.call(this)
        };
        f(rh, A);
        rh.prototype.execute = function(a) {
            a = this.media.getData().status.reason;
            "ais" !== a && "token" !== a || this.proxy.authorize()
        };
        var Oc = function(a) {
            Oc.__super__.constructor.call(this, null, null, a)
        };
        f(Oc, ba);
        Oc.prototype.componentName = "ais-authenticating";
        Oc.prototype.retry = null;
        Oc.prototype.onRegister =
            function() {
                Oc.__super__.onRegister.call(this);
                this.classList.add("hidden");
                this.retry = this.create("ais-authenticating-button");
                this.retry.type = "button";
                this.retry.value = "Back to Providers";
                this.retry.onclick = this.onclick.bind(this)
            };
        Oc.prototype.onclick = function(a) {
            "function" === typeof a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.classList.add("hidden");
            this.sendNotification(Q.START_AUTHENTICATION);
            return !1
        };
        Oc.prototype.listNotificationInterests = function() {
            return [Q.AUTHENTICATING]
        };
        Oc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case Q.AUTHENTICATING:
                    !0 === a.getBody() ? this.classList.remove("hidden") : this.classList.add("hidden")
            }
        };
        var pe = function() {
            pe.__super__.constructor.call(this)
        };
        f(pe, y);
        pe.prototype.execute = function(a) {
            this.proxy.bounce();
            pe.__super__.execute.call(this, a)
        };
        var oc = function() {
            oc.__super__.constructor.call(this)
        };
        f(oc, na);
        oc.prototype.componentName = "ais";
        oc.prototype.chooser = null;
        oc.prototype.auth = null;
        oc.prototype.play = null;
        oc.prototype.onRegister =
            function() {
                var a = this;
                oc.__super__.onRegister.call(this);
                this.classList.add("hidden");
                setTimeout(function() {
                    a.chooser = new Db(a);
                    a.facade.registerMediator(a.chooser);
                    a.auth = new Oc(a);
                    a.facade.registerMediator(a.auth);
                    a.play = new Mb(a);
                    return a.facade.registerMediator(a.play)
                }, 20)
            };
        oc.prototype.listNotificationInterests = function() {
            return [Q.START_AUTHENTICATION, Q.AUTHENTICATION_COMPLETE, Q.CHOOSE_PLAY_OPTIONS, d.MEDIA_CHANGE]
        };
        oc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case Q.CHOOSE_PLAY_OPTIONS:
                case Q.START_AUTHENTICATION:
                    this.classList.remove("hidden");
                    break;
                case Q.AUTHENTICATION_COMPLETE:
                case d.MEDIA_CHANGE:
                    this.classList.add("hidden"), this.facade.player.sendNotification(d.REMOVE_APPLICATION_STATE, "authenticating")
            }
        };
        var Ra = function() {
            Ra.__super__.constructor.call(this)
        };
        f(Ra, yb);
        Ra.NAME = "AISPlugin";
        Ra.prototype.moduleName = "ais";
        Ra.prototype.featureName = "auth";
        Ra.prototype.idps = null;
        Ra.prototype.createController = function() {
            Ra.__super__.createController.call(this);
            this.registerCommand(xa.AUTHORIZE, rh);
            this.registerCommand(Q.LAUNCH_IDP_LOGIN, oe);
            this.registerCommand(Q.START_AUTHENTICATION, pe);
            this.registerCommand(Q.AUTHENTICATED, y);
            this.registerCommand(Q.AUTHENTICATING, y);
            this.registerCommand(Q.AUTHENTICATION_COMPLETE, y);
            this.registerCommand(Q.CHOOSE_AUTH_PROVIDER, y);
            this.registerCommand(Q.CHOOSE_PLAY_OPTIONS, y);
            this.registerCommand(xa.AUTHORIZATION_FAILED, y)
        };
        Ra.prototype.createModel = function() {
            this.proxy = new X(this.config);
            this.registerProxy(this.proxy)
        };
        Ra.prototype.createView = function() {
            this.registerMediator(new oc)
        };
        Ra.prototype.createNotificationEvent =
            function(a, b, c) {
                a = N.prototype.createNotificationEvent.call(this, a, b, c);
                if (null != a) return a.type = a.type.replace(RegExp("^" + this.getModuleName()), ""), a
            };
        Ra.prototype.listNotificationInterests = function() {
            return Ra.__super__.listNotificationInterests.call(this).concat([d.MEDIA_CHANGE, xa.AUTHORIZE])
        };
        Ra.prototype.listNotificationPublications = function() {
            return Ra.__super__.listNotificationPublications.call(this).concat([xa.AUTHORIZED, xa.AUTHORIZATION_FAILED, d.INITIALIZED, d.PLAY, d.SEEK])
        };
        Ra.prototype.authorize =
            function(a) {
                this.proxy.authorize(a);
                return a
            };
        Ra.prototype.logout = function() {
            this.proxy.logout()
        };
        Ra.prototype.getIdps = function() {
            return this.idps
        };
        l.registerPlugin("ais", "html", Ra);
        var bd = function() {
            bd.__super__.constructor.call(this)
        };
        f(bd, Ra);
        bd.NAME = "AISFlashPlugin";
        bd.prototype.proxy = null;
        bd.prototype.startTime = null;
        bd.prototype.createController = function() {
            this.registerCommand(d.DISPATCH_EVENT, we);
            this.registerCommand(Q.LAUNCH_IDP_LOGIN, oe);
            this.registerCommand(Q.START_AUTHENTICATION, pe);
            this.registerCommand(Q.AUTHENTICATED,
                y);
            this.registerCommand(Q.AUTHENTICATING, y);
            this.registerCommand(Q.AUTHENTICATION_COMPLETE, y);
            this.registerCommand(Q.CHOOSE_AUTH_PROVIDER, y);
            this.registerCommand(Q.CHOOSE_PLAY_OPTIONS, y);
            this.registerCommand(xa.AUTHORIZATION_FAILED, y)
        };
        bd.prototype.setData = function(a) {
            var b;
            b = this.retrieveProxy(X.NAME);
            b.data.platformID = a.platformID;
            b.data.resourceID = a.resourceID;
            b.data.contentID = a.contentID
        };
        bd.prototype.authorize = function(a) {
            this.retrieveProxy(X.NAME).authorize(a)
        };
        var sh = function() {
            sh.__super__.constructor.call(this)
        };
        f(sh, A);
        sh.prototype.execute = function(a) {
            a = Math.floor(a.getBody());
            0 !== a && 0 === a % 30 && a !== this.proxy.currentTime && this.proxy.vcsSet(a);
            this.proxy.currentTime = a
        };
        var Eb = function(a, b) {
            var c, d, f;
            Eb.__super__.constructor.call(this, a, b);
            this.plugin = new bd;
            c = this.dispatcher.dispatchEvent.bind(this.dispatcher);
            for (d in Q) f = Q[d], this.plugin.addEventListener(f.replace(/^(ais)/, ""), c);
            for (d in xa) f = xa[d], this.plugin.addEventListener(f.replace(/^(auth)/, ""), c);
            this.plugin.oninitialized = this.player.registerModule.bind(this.player,
                this.plugin);
            this.plugin.initialize(b, this.player)
        };
        f(Eb, I);
        Eb.NAME = "AISWrapper";
        Eb.prototype.plugin = null;
        Eb.prototype.getFeatureName = function() {
            return "auth"
        };
        Eb.prototype.createXML = function(a) {
            var b, c, d, f, g, h;
            b = a.firstChild;
            c = a.getElementsByTagName("authentication");
            null == c || 0 === c.length ? (c = a.createElement("authentication"), b.appendChild(c)) : c = c[0];
            b = a.createElement("vendor");
            b.setAttribute("id", "ais");
            c.appendChild(b);
            f = [{
                value: this.config.platformID,
                key: "platformID"
            }, {
                value: this.config.resourceID,
                key: "resourceID"
            }, {
                value: this.config.contentID,
                key: "contentID"
            }];
            g = 0;
            for (h = f.length; g < h; g++) d = f[g], null != d.value && (c = a.createElement("property"), c.setAttribute("key", d.key), d = fa.createTextContent(a, d.value), c.appendChild(d), b.appendChild(c));
            return a
        };
        Eb.prototype.listNotificationInterests = function() {
            return Eb.__super__.listNotificationInterests.apply(this, arguments).concat([xa.AUTHORIZE, q.TIME_UPDATE, q.ENDED, q.PAUSED, q.CAPABILITY_CHANGE, q.RESET])
        };
        Eb.prototype.handleNotification = function(a) {
            var b;
            Eb.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case xa.AUTHORIZE:
                    this.plugin.startTime = null;
                    this.plugin.setData(a);
                    b = this.player.retrieveProxy(t.NAME);
                    null == b.getSrc() && b.setSrc(a.media.src);
                    this.plugin.authorize();
                    break;
                case q.TIME_UPDATE:
                    this.plugin.sendNotification(d.TIME_UPDATE, a);
                    break;
                case q.ENDED:
                    this.plugin.sendNotification(d.ENDED, a);
                    break;
                case q.PAUSED:
                    this.plugin.sendNotification(d.PAUSE, a);
                    break;
                case q.RESET:
                    this.plugin.sendNotification(d.MEDIA_CHANGE,
                        a);
                    break;
                case q.CAPABILITY_CHANGE:
                    null != this.plugin.startTime && "canSeekChange" === a.type && a.enabled && this.player.setCurrentTime(this.plugin.startTime)
            }
        };
        Eb.prototype.authorize = function(a) {
            this.plugin.authorize(a);
            return a
        };
        Eb.prototype.logout = function() {
            this.plugin.logout()
        };
        Eb.prototype.getIdps = function() {
            return this.plugin.getIdps()
        };
        l.registerPlugin("ais", "flash", Eb);
        var th = function() {
            th.__super__.constructor.call(this)
        };
        f(th, A);
        th.prototype.execute = function(a) {
            this.proxy.vcsSet(this.proxy.currentTime)
        };
        var uh = function() {
            uh.__super__.constructor.call(this)
        };
        f(uh, A);
        uh.prototype.execute = function(a) {
            this.proxy.vcsSet(0)
        };
        var vh = function() {};
        vh.setCookie = function(a, b, c, d, f) {
            var g;
            b = escape(b);
            null != c && (g = new Date, g.setDate(g.getDate() + c), b += "; expires\x3d" + g.toUTCString());
            null != f && (b += "; domain\x3d" + f);
            null != d && (b += "; path\x3d" + d);
            return document.cookie = a + "\x3d" + b
        };
        vh.getCookie = function(a) {
            var b, c, d, f, g, h;
            c = document.cookie.split(";");
            g = 0;
            for (h = c.length; g < h; g++)
                if (b = c[g], d = b.indexOf("\x3d"), f = b.substr(0,
                        d).replace(/^\s+|\s+$/g, ""), b = unescape(b.substr(d + 1)), f === a) return b
        };
        vh.deleteCookie = function(a) {
            return this.setCookie(a, "", -1)
        };
        var Nb = function() {
            Nb.__super__.constructor.call(this)
        };
        f(Nb, yb);
        Nb.prototype.moduleName = "share";
        Nb.prototype.featureName = "share";
        Nb.prototype.createModel = function() {
            this.registerProxy(new gb(this.config))
        };
        Nb.prototype.createController = function() {
            Nb.__super__.createController.call(this);
            this.registerCommand(d.MEDIA_CHANGE, ph)
        };
        Nb.prototype.createView = function() {
            this.registerMediator(new Kb)
        };
        Nb.prototype.listNotificationInterests = function() {
            return [d.MEDIA_CHANGE]
        };
        Nb.prototype.listNotificationPublications = function() {
            return Nb.__super__.listNotificationPublications.apply(this, arguments).concat([d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE])
        };
        l.registerPlugin("share", "html", Nb);
        l.registerPlugin("share", "external", Nb);
        var wh = function() {
            wh.__super__.constructor.call(this)
        };
        f(wh, A);
        wh.prototype.execute = function(a) {
            this.facade.retrieveProxy(J.NAME).contentPaused()
        };
        var X = function(a) {
            X.__super__.constructor.call(this, a)
        };
        f(X, R);
        X.NAME = x.NAME;
        X.prototype.client = null;
        X.prototype.currentTime = null;
        X.prototype.idps = null;
        X.prototype.idp = null;
        X.prototype.token = null;
        X.prototype.authz = null;
        X.prototype.defaults = {
            platformID: null,
            resourceID: null,
            contentID: null,
            responseTargets: null,
            query: "hdnts",
            vcs: !1,
            logos: {
                base: null,
                group: null,
                key: "full"
            }
        };
        X.prototype.getScript = function() {
            return this.value.plugin
        };
        X.prototype.initialize = function() {
            this.client = window.ais_client;
            this.client.setLogging(this.facade.logger.enabled);
            this.client.setPlatformId(this.value.platformID);
            this.client.setUseCache(!/MSIE [7-8]/.test(navigator.userAgent));
            this.client.assignhandler("bounce", this.bounceHandler.bind(this));
            this.client.assignhandler("chooser", this.chooserHandler.bind(this));
            this.client.assignhandler("init", this.initHandler.bind(this));
            this.client.assignhandler("authz_query", this.authz_queryHandler.bind(this));
            this.client.assignhandler("identity", this.identityHandler.bind(this));
            this.client.assignhandler("logout_result", this.logoutHandler.bind(this));
            this.client.assignhandler("vcs", this.vcsHandler.bind(this));
            window.onunload = function() {}
        };
        X.prototype.authorize = function() {
            this.token = this.authz = null;
            this.disengage();
            this.sendNotification(Q.START_AUTHENTICATION)
        };
        X.prototype.authorized = function(a) {
            null == a && (a = this.token);
            this.engage();
            this.sendNotification(Q.AUTHENTICATION_COMPLETE);
            this.sendNotification(xa.AUTHORIZED, a)
        };
        X.prototype.play = function(a) {
            this.sendNotification(d.INITIALIZED);
            this.sendNotification(d.PLAY);
            if (null != a) return this.sendNotification(d.SEEK,
                a)
        };
        X.prototype.engage = function() {
            this.facade.registerCommand(d.TIME_UPDATE, sh);
            this.facade.registerCommand(d.PAUSE, th);
            this.facade.registerCommand(d.ENDED, uh)
        };
        X.prototype.disengage = function() {
            this.facade.removeCommand(d.TIME_UPDATE);
            this.facade.removeCommand(d.PAUSE);
            this.facade.removeCommand(d.ENDED)
        };
        X.prototype.logout = function() {
            var a, b, c;
            a = (null != (b = this.idp.window_display) ? b.method : void 0) || "redirect";
            b = this.getTarget(a);
            this.setRedirect(a);
            switch (a) {
                case "redirect":
                    window.open(this.client.logoutFormat(b),
                        "_top");
                    break;
                case "popup":
                    c = this.idp.window_display.width || 320, a = this.idp.window_display.height || 240, window.open(this.client.logoutFormat(b), "ais_popup", "width\x3d" + c + ",height\x3d" + a)
            }
        };
        X.prototype.bounce = function(a) {
            this.client.bounce()
        };
        X.prototype.init = function(a) {
            this.client.init()
        };
        X.prototype.choose = function() {
            this.client.chooser()
        };
        X.prototype.resourceAccess = function(a) {
            null == a && (a = this.value.resourceID);
            this.client.resourceAccess(a)
        };
        X.prototype.vcsSet = function(a) {
            a = g.formatTimecode(a);
            this.client.vcsSet(this.value.contentID,
                a)
        };
        X.prototype.bounceHandler = function(a, b) {
            var c;
            c = "true" === b.authenticated.toString();
            !1 === c ? (this.sendNotification(d.DISPATCH_EVENT, new V("authenticationfailed")), this.choose()) : !0 === c && this.init()
        };
        X.prototype.initHandler = function(a, b) {
            var c, e, f, g;
            this.idp = b.idps;
            this.facade.idps = {};
            f = b.idps;
            for (c in f) {
                f = f[c];
                this.facade.idps.key = c;
                for (e in f) g = f[e], this.facade.idps[e] = g;
                break
            }
            for (c in b) f = b[c], "idps" !== c && null != f && (this.facade[c] = f);
            null != this.value.logos && null != this.facade.idps.logos && (this.facade.idps.logo =
                this.value.logos.base + this.facade.idps.logos[this.value.logos.key]);
            this.facade.player.sendNotification(d.REMOVE_APPLICATION_STATE, "authenticating");
            this.sendNotification(Q.AUTHENTICATED, this.facade.idps);
            this.resourceAccess(this.value.resourceID)
        };
        X.prototype.chooserHandler = function(a, b) {
            this.facade.sendNotification(d.ADD_APPLICATION_STATE, "authenticating");
            b.possible_idps = this.idps = this.sort(b.possible_idps, "value", "display_name");
            this.sendNotification(Q.CHOOSE_AUTH_PROVIDER, b)
        };
        X.prototype.launchIDPLogin =
            function(a) {
                var b, c, d;
                this.sendNotification(Q.AUTHENTICATING, !0);
                b = this.idps[a];
                c = (null != (d = b.window_display) ? d.method : void 0) || "redirect";
                d = this.getTarget(c);
                this.setRedirect(c);
                switch (c) {
                    case "redirect":
                        window.open(this.client.loginFormat(a, d), "_top");
                        break;
                    case "popup":
                        c = b.window_display.width || 320, b = b.window_display.height || 240, window.open(this.client.loginFormat(a, d), "ais_popup", "width\x3d" + c + ",height\x3d" + b)
                }
            };
        X.prototype.identityHandler = function(a, b) {};
        X.prototype.authz_queryHandler = function(a,
                                                  b) {
            var c;
            c = "true" === b.authorization.toString();
            !1 === c ? this.sendNotification(xa.AUTHORIZATION_FAILED, b) : !0 === c && (this.authz = b, c = {
                    mvpdName: this.facade.idps.name,
                    viewerId: this.client.aisuid,
                    "std:viewerId": this.client.aisuid
                }, this.facade.player.setParams({
                    mvpdname: c.mvpdName
                }), this.facade.player.sendNotification("mediaanalytics:setDimensions", c), this.facade.viewerId = this.client.aisuid, c = b.resource, null != c && (this.facade.resource = c), c = this.facade.player.security, c.setKey(this.value.query || this.getDefaults().query),
                    c.setToken(b.security_token), this.token = c.getSecret(), this.sendNotification(Q.AUTHENTICATING, !1), !0 === this.value.vcs && null != this.value.contentID ? this.client.vcsGet(this.value.contentID) : this.authorized(this.token))
        };
        X.prototype.logoutHandler = function(a, b) {
            top.location.href = top.location.href
        };
        X.prototype.vcsHandler = function(a, b) {
            "get" === b.operation && ("00:00:00" === b.ph_pos || "00:00" === b.ph_pos ? (this.client.vcsSet(this.value.contentID, b.ph_pos), this.authorized(this.token)) : this.sendNotification(Q.CHOOSE_PLAY_OPTIONS,
                g.flattenTimecode(b.ph_pos)))
        };
        X.prototype.sort = function(a, b, c) {
            var d, f, g, h, k;
            h = {};
            d = [];
            f = 0;
            for (g in a) k = a[g], d[f] = {
                key: g,
                value: k[c]
            }, f++;
            d.sort(function(a, c) {
                var d, e, f, h, g;
                d = "value" === b ? null != (e = a.value) ? e.toLowerCase() : void 0 : null != (f = a.key) ? f.toLowercase() : void 0;
                e = "value" === b ? null != (h = c.value) ? h.toLowerCase() : void 0 : null != (g = c.key) ? g.toLowercase() : void 0;
                return d < e ? -1 : d > e ? 1 : 0
            });
            f = c = 0;
            for (g = d.length; c < g; f = ++c) f = d[f], h[f.key] = a[f.key];
            return h
        };
        X.prototype.setRedirect = function(a) {
            var b, c, d;
            try {
                b =
                    /\/dev\./, d = window.top.location.href || window.top.location, c = b.test(d) ? d.replace(b, "/") : null, vh.setCookie(this.getTarget(a), d, 1, "/", c)
            } catch (f) {}
        };
        X.prototype.getTarget = function(a) {
            null == a && (a = "redirect");
            return this.value.responseTargets[a]
        };
        var Gd = function() {
            return Gd.__super__.constructor.apply(this, arguments)
        };
        f(Gd, la);
        Gd.NAME = "FreeWheelWrapper";
        Gd.prototype.partner = "freewheel";
        Gd.prototype.flashPlugins = [{
            id: "FreewheelPlugin",
            src: "#{paths.resources}plugins/FreewheelPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "FreewheelPlugin"
        }, {
            id: "AdOptionsPlugin",
            src: "#{paths.resources}plugins/AdOptionsPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "AdOptionsPlugin",
            type: "application/x-shockwave-flash"
        }];
        Gd.prototype.createXML = function(a) {
            var b, c, d, f, g, h;
            c = a.firstChild;
            b = a.getElementsByTagName("admedia")[0];
            null == b && (b = a.createElement("admedia"), c.appendChild(b));
            c = a.createElement("vendor");
            c.setAttribute("id", "freewheel");
            b.appendChild(c);
            f = [{
                value: this.config.plugin.swf,
                key: "FREEWHEEL_AD_MANAGER_URL"
            }, {
                value: this.config.serverUrl,
                key: "FREEWHEEL_SERVER_URL"
            }, {
                value: this.config.networkId,
                key: "FREEWHEEL_NETWORK_ID"
            }, {
                value: this.config.profileId,
                key: "FREEWHEEL_PROFILE"
            }, {
                value: this.config.siteSectionId,
                key: "FREEWHEEL_SITE_SECTION_ID"
            }, {
                value: this.config.siteSectionFallbackId,
                key: "FREEWHEEL_SITE_SECTION_FALLBACK_ID"
            }, {
                value: this.config.prerollSlotId,
                key: "FREEWHEEL_PREROLL_SLOT_ID"
            }, {
                value: this.config.midrollSlotId,
                key: "FREEWHEEL_MIDROLL_SLOT_ID"
            }, {
                value: this.config.postrollSlotId,
                key: "FREEWHEEL_POSTROLL_SLOT_ID"
            }, {
                value: this.config.videoAssetId,
                key: "FREEWHEEL_VIDEO_ASSET_ID"
            }, {
                value: this.config.videoAssetFallbackId,
                key: "FREEWHEEL_VIDEO_ASSET_FALLBACK_ID"
            }, {
                value: this.config.videoAssetVideoPlayRandom,
                key: "FREEWHEEL_VIDEO_ASSET_VIDEO_PLAY_RANDOM"
            }, {
                value: this.config.visitorId,
                key: "FREEWHEEL_VISITOR_ID"
            }, {
                value: this.config.keyValuesString,
                key: "FREEWHEEL_KEY_VALUES_STRING"
            }, {
                value: this.config,
                key: "FREEWHEEL_SITE_SECTION_PAGE_VIEW_RANDOM"
            }, {
                value: "EXACT",
                key: "FREEWHEEL_VIDEO_ASSET_DURATION_TYPE"
            }, {
                value: this.config.visitorHeader,
                key: "FREEWHEEL_VISITOR_HTTP_HEADER_KEY_VALUE"
            }, {
                value: this.config.synchronizeMultipleRequests,
                key: "FREEWHEEL_SYNCHRONIZE_MULTIPLE_REQUESTS"
            }, {
                value: this.config.subsessionToken,
                key: "FREEWHEEL_SUBSESSION_TOKEN"
            }];
            g = 0;
            for (h = f.length; g < h; g++) b = f[g], null != b.value && this.createProperty(a, b.key, b.value, c);
            null != this.config.position && c.setAttribute("position", this.config.position);
            if (null != this.config.keyValues) {
                b = a.createElement("property");
                b.setAttribute("key", "FREEWHEEL_KEY_VALUE");
                g = this.config.keyValues;
                for (d in g) f = g[d], null != f && this.createProperty(a,
                    d, f, b);
                c.appendChild(b)
            }
        };
        var z = function(a) {
            this.media = {};
            this.handlers = {
                onRequestComplete: this.onRequestComplete.bind(this),
                onSlotStarted: this.onSlotStarted.bind(this),
                onSlotEnded: this.onSlotEnded.bind(this),
                onAdImpression: this.onAdImpression.bind(this),
                onAdImpressionEnd: this.onAdImpressionEnd.bind(this),
                onAdClick: this.onAdClick.bind(this),
                onResume: this.onResume.bind(this),
                adtimeupdate: this.adTimeupdate.bind(this),
                timeupdate: this.midrollCheck.bind(this),
                seekupdate: this.seekingHandler.bind(this),
                onAdEvent: this.onAdEvent.bind(this)
            };
            z.__super__.constructor.call(this, a);
            this.adVO = this.createDefaultAdVO()
        };
        f(z, J);
        z.NAME = J.NAME;
        z.prototype.partner = "freewheel";
        z.prototype.context = null;
        z.prototype.prerollSlots = null;
        z.prototype.midrollSlots = null;
        z.prototype.postrollSlots = null;
        z.prototype.initialized = !1;
        z.prototype.playWhenLoaded = !1;
        z.prototype.handlers = null;
        z.prototype.slot = null;
        z.prototype.playbackCore = null;
        z.prototype.nextMidroll = null;
        z.prototype.midrollEngaged = !1;
        z.prototype.timeout = null;
        z.prototype.curTime =
            0;
        z.prototype.mediator = null;
        z.prototype.adPosition = 1;
        z.prototype.currentAd = null;
        z.prototype.defaults = {
            networkId: "96749",
            serverUrl: "http://demo.v.fwmrm.net/ad/g/1",
            profileId: "global-js",
            siteSectionId: "DemoSiteGroup.01",
            siteSectionFallbackId: null,
            siteSectionPageViewRandom: null,
            videoAssetId: "#{media.guid}",
            videoAssetFallbackId: null,
            videoAssetVideoPlayRandom: null,
            prerollSlotId: null,
            midrollSlotId: null,
            postrollSlotId: null,
            visitorId: null,
            keyValues: null,
            keyValuesString: null,
            renderers: null,
            synchronizeMultipleRequests: null,
            subsessionToken: null,
            creativeParameters: null,
            parameters: null
        };
        z.prototype.initialize = function() {
            var a;
            a = this.getDebug();
            switch (!0) {
                case !0 === a:
                    a = tv.freewheel.SDK.LOG_LEVEL_INFO;
                    break;
                case "number" === typeof a:
                    break;
                default:
                    a = tv.freewheel.SDK.LOG_LEVEL_QUIET
            }
            tv.freewheel.SDK.setLogLevel(a);
            this.plugin = this.createPlugin();
            this.plugin.setNetwork(this.value.networkId);
            this.plugin.setServer(this.value.serverUrl)
        };
        z.prototype.createPlugin = function() {
            return new tv.freewheel.SDK.AdManager
        };
        z.prototype.engage =
            function(a) {
                this.media = a;
                z.__super__.engage.call(this, a);
                this.requestAd()
            };
        z.prototype.requestAd = function() {
            var a, b, c, e, f, k;
            this.terminateAllAds(!0);
            this.context = this.plugin.newContext();
            null != this.value.synchronizeMultipleRequests && this.context.setCapability("sync", this.value.synchronizeMultipleRequests ? tv.freewheel.SDK.CAPABILITY_STATUS_ON : tv.freewheel.SDK.CAPABILITY_STATUS_OFF);
            this.context.registerVideoDisplayBase(this.facade.player.viewComponent.id);
            "video" !== this.getMediaElement().nodeName.toLowerCase() &&
            (this.sendNotification(d.PLAYBACK_CORE_CHANGE, this.facade.player.mediator), this.mediator = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore().mediator);
            this.context.setContentVideoElement(this.getMediaElement());
            this.context.setProfile(this.value.profileId);
            this.context.setVideoAsset(this.value.videoAssetId, this.media.duration, this.value.networkId, null, null, this.value.videoAssetVideoPlayRandom, null, this.value.videoAssetFallbackId);
            this.context.setSiteSection(this.value.siteSectionId,
                this.value.networkId, this.value.siteSectionPageViewRandom, null, this.value.siteSectionFallbackId);
            null != this.value.subsessionToken && this.context.startSubsession(this.value.subsessionToken);
            null != this.value.visitorId && this.context.setVisitor(this.value.visitorId);
            if (null != this.value.keyValues)
                for (c in k = this.value.keyValues, k) f = k[c], null != f && this.context.addKeyValue(c, f);
            if (null != this.value.keyValuesString)
                for (c = this.value.keyValuesString.split("\x26"), f = 0, k = c.length; f < k; f++) b = c[f], "" !== b && (b = b.split("\x3d"),
                    this.context.addKeyValue(b[0], b[1]));
            this.context.addEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.handlers.onRequestComplete);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.handlers.onSlotStarted);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.handlers.onSlotEnded);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION, this.handlers.onAdImpression);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, this.handlers.onAdImpressionEnd);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_AD_CLICK, this.handlers.onAdClick);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_AD, this.handlers.onAdEvent);
            this.context.addEventListener(tv.freewheel.SDK.EVENT_ERROR, this.handlers.onAdEvent);
            this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT, 1E4, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT, 1E4, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            this.context.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE, !1, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            this.context.setParameter(tv.freewheel.SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, !1, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            this.context.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE, !1, tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            if (null != this.value.parameters)
                for (b = this.value.parameters, f = 0, k = b.length; f < k; f++) c =
                    b[f], this.context.setParameter(c.key, c.value, c.level || tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);
            null != this.value.prerollSlotId && this.context.addTemporalSlot(this.value.prerollSlotId, tv.freewheel.SDK.ADUNIT_PREROLL, 0);
            if (0 < (null != (a = this.media.scenes) ? a.length : void 0) && null != this.value.midrollSlotId) {
                a = [];
                k = this.media.scenes;
                b = c = 0;
                for (f = k.length; c < f; b = ++c) e = k[b], 0 < b && (b = g.flattenTimecode(e.sceneStartTime), a.push(b), this.context.addTemporalSlot(this.value.midrollSlotId, tv.freewheel.SDK.ADUNIT_MIDROLL,
                    b));
                this.facade.player.sendNotification(d.ADD_CUE_POINTS, a)
            }
            null != this.value.postrollSlotId && this.context.addTemporalSlot(this.value.postrollSlotId, tv.freewheel.SDK.ADUNIT_POSTROLL, this.media.duration);
            c = this.value.renderers;
            if (0 < (null != c ? c.length : void 0))
                for (f = 0, k = c.length; f < k; f++) a = c[f], this.context.addRenderer(a.url, a.baseUnit, a.contentType, a.slotType, a.soAdUnit, a.creativeApi, a.parameters);
            this.initialized = !1;
            z.__super__.requestAd.call(this);
            this.context.submitRequest();
            this.facade.getViewComponent().container.style.pointerEvents =
                "none"
        };
        z.prototype.reset = function() {
            z.__super__.reset.call(this);
            null != this.mediator && (this.sendNotification(d.PLAYBACK_CORE_CHANGE, this.mediator), this.mediator = null);
            this.facade.registerCommand(d.PAUSED, wh)
        };
        z.prototype.onRequestComplete = function(a) {
            var b, c, e, f, g, h;
            c = [];
            this.pods = [];
            b = function(a) {
                return new Va(a.getCustomId(), a.getCustomId(), a.getTotalDuration(), 0, a.getTimePositionClass().toLowerCase(), "freewheel", null, null, null, a, a.getAdCount(), a.getTimePosition())
            };
            if (a.success)
                for (f = this.context.getTemporalSlots(),
                         g = 0, h = f.length; g < h; g++) switch (e = f[g], e.getTimePositionClass()) {
                    case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
                        null != this.value.prerollSlotId && (this.pods.push(b(e)), this.prerollSlots.push(e));
                        break;
                    case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
                        null != this.value.midrollSlotId && (this.pods.push(b(e)), c.push(e.getTimePosition()), this.midrollSlots.push(e));
                        break;
                    case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
                        null != this.value.postrollSlotId && (this.pods.push(b(e)), this.postrollSlots.push(e))
                }
            0 <
            c.length && this.sendNotification(d.ADD_CUE_POINTS, c);
            0 < this.postrollSlots.length && this.sendNotification(d.HAS_POST_CONTENT, !0);
            this.initialized = !0;
            this.pods.sort(function(a, b) {
                return a.time - b.time
            });
            this.pods.forEach(function(a, b) {
                return a.position = b
            });
            this.sendNotification(k.REQUEST_COMPLETE, {
                pods: this.pods
            });
            this.sendNotification(k.RESPONSE, {
                pods: this.pods,
                response: a,
                context: this.context
            });
            !0 === this.playWhenLoaded && this.startAd()
        };
        z.prototype.breakStart = function() {
            var a;
            z.__super__.breakStart.call(this);
            this.adPosition = 1;
            this.playbackCore = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore();
            this.playbackCore.setEnabled(!1);
            this.getMediaElement().removeEventListener("playing", this.handlers.onResume);
            a = this.getMediaElement();
            a.addEventListener("playing", this.playbackCore.handlers.playing);
            a.addEventListener("pause", this.playbackCore.handlers.pause);
            a.addEventListener("waiting", this.playbackCore.handlers.waiting);
            a.addEventListener("seeking", this.handlers.seekupdate);
            this.timeout = setInterval(function() {
                return this.curTime =
                    a.currentTime
            }, 500);
            "midroll" === this.adVO.type && this.contentPause()
        };
        z.prototype.seekingHandler = function(a) {
            a.target.currentTime > this.curTime && (a.target.currentTime = this.curTime)
        };
        z.prototype.onAdImpression = function(a) {
            var b, c, d, f, g;
            if ((null != (d = a.adInstance) ? "function" === typeof d.getSlot ? "function" === typeof(b = d.getSlot()).getTimePositionClass ? b.getTimePositionClass() : void 0 : void 0 : void 0) !== tv.freewheel.SDK.TIME_POSITION_CLASS_DISPLAY) {
                this.currentAd = a.adInstance;
                this.adVO.position = this.adPosition++;
                this.adVO.id = this.currentAd.getAdId();
                this.adVO.duration = null != (f = a.adInstance) ? f.getDuration() : void 0;
                b = this.value.creativeParameters;
                if (null != b) try {
                    c = a.adInstance.getAdId(), this.adVO.metadata.creativeparameters[c] = this.getCreativeParameters(a.adInstance)
                } catch (h) {}
                a = null != (g = this.currentAd) ? g.getActiveCreativeRendition() : void 0;
                null != a && (this.adVO.metadata.adwidth = a.getWidth(), this.adVO.metadata.adheight = a.getHeight());
                this.sendNotification(k.IMPRESSION, this.adVO);
                this.sendNotification(k.AD_STARTED,
                    this.adVO)
            }
        };
        z.prototype.onAdEvent = function(a) {
            switch (a.subType) {
                case tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE:
                    this.sendNotification(k.FIRST_QUARTILE, this.adVO);
                    break;
                case tv.freewheel.SDK.EVENT_AD_MIDPOINT:
                    this.sendNotification(k.MIDPOINT, this.adVO);
                    break;
                case tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE:
                    this.sendNotification(k.THIRD_QUARTILE, this.adVO);
                    break;
                case tv.freewheel.SDK.EVENT_AD_COMPLETE:
                    this.sendNotification(k.COMPLETE, this.adVO);
                    break;
                case tv.freewheel.SDK.EVENT_ERROR:
                    this.adVO.error = {},
                        this.adVO.error.errorcode = a.errorCode, this.adVO.error.errorinfo = a.errorInfo, this.adVO.error.errormodule = a.errorModule, this.facade.sendNotification(d.DISPATCH_EVENT, new V("error", this.adVO))
            }
        };
        z.prototype.onAdImpressionEnd = function(a) {
            this.sendNotification(k.AD_ENDED, this.adVO)
        };
        z.prototype.onAdClick = function(a) {
            !1 === this.getMediaElement().paused && this.pause();
            this.sendNotification(k.AD_CLICKED, this.adVO)
        };
        z.prototype.onResume = function(a) {
            this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING);
            this.getMediaElement().removeEventListener("playing", this.handlers.onResume)
        };
        z.prototype.adTimeupdate = function(a) {
            try {
                null != this.slot && (this.currentAd = this.slot.getCurrentAdInstance(), null != this.currentAd && (this.adVO.duration = this.currentAd.getDuration(), this.sendNotification(k.AD_TIME_UPDATE, this.currentAd.getPlayheadTime()), this.sendNotification(k.AD_TIME_REMAINING, this.currentAd.getDuration() - this.currentAd.getPlayheadTime())))
            } catch (b) {
                this.facade.logger.error("[AMP FREEWHEEL ERROR]", b)
            }
        };
        z.prototype.onSlotStarted =
            function(a) {
                a = a.slot;
                "temporal" === a.getType() && (this.slot = a, this.getMediaElement().addEventListener("timeupdate", this.handlers.adtimeupdate))
            };
        z.prototype.onSlotEnded = function(a) {
            var b, c;
            b = a.slot;
            a = !0 === a.skipped ? this.sendNotification.bind(this, k.BREAK_SKIPPED, b) : this.endBreak.bind(this);
            if ("temporal" === b.getType()) switch (this.getMediaElement().removeEventListener("timeupdate", this.handlers.adtimeupdate), c = b.getTimePositionClass(), b = this.getPodById(b.getCustomId()), b.locked = !0, this.slot = null, c) {
                case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:
                    this.prerollSlots.length &&
                    (this.prerollSlots.shift(), this.prerollSlots.length ? this.playAd(this.prerollSlots[0]) : a());
                    break;
                case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:
                    b = this.midrollSlots.indexOf(this.nextMidroll); - 1 < b && this.midrollSlots.splice(b, 1);
                    this.nextMidroll = null;
                    a();
                    break;
                case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:
                    this.postrollSlots.length && (this.postrollSlots.shift(), this.postrollSlots.length ? this.playAd(this.postrollSlots[0]) : a())
            }
        };
        z.prototype.playAd = function(a) {
            var b, c, d, f, g, h, l, m;
            d = this.getPodById(a.getCustomId());
            if (!0 === (null != d ? d.locked : void 0)) this.onSlotEnded({
                slot: d.metadata,
                skipped: !0
            });
            else {
                g = {
                    adtype: a.getType()
                };
                d = null != a ? null != (b = a.getAdInstances()) ? b[0] : void 0 : void 0;
                if (null != d && (c = d.getAdId(), g.adunit = d.getSoAdUnit(), b = d.getActiveCreativeRendition(), null != b)) {
                    for (f in b) h = b[f], 0 === f.indexOf("get") && "function" === typeof h && (g[f.substring(3).toLowerCase()] = h());
                    g.baseunit = b.getBaseUnit();
                    f = this.value.creativeParameters;
                    if (null != f)
                        for (g.creativeparameters = {}, m = a.getAdInstances(), h = 0, l = m.length; h < l; h++) b =
                            m[h], f = b.getAdId(), g.creativeparameters[f] = this.getCreativeParameters(b)
                }
                null == c && (c = a.getCustomId());
                this.adVO = new Va(c, a.getCustomId(), null != d ? d.getDuration() : NaN, this.adPosition, a.getTimePositionClass().toLowerCase(), "freewheel", null, null, null, g, a.getAdCount());
                this.sendNotification(k.AD_LOADED, this.adVO);
                this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED);
                this.getMediaElement().load();
                a.play()
            }
        };
        z.prototype.start = function() {
            !0 === this.canPlay() ? this.startAd() : this.playWhenLoaded = !0;
            return !0
        };
        z.prototype.canPlay = function() {
            return !0 === this.initialized
        };
        z.prototype.startAd = function() {
            var a, b, c, d, f, g;
            this.playWhenLoaded = !1;
            if (this.prerollSlots.length)
                for (a = !1, f = this.prerollSlots, c = 0, d = f.length; c < d; c++) b = f[c], b = b.getCustomId(), !0 === (null != (g = this.getPodById(b)) ? g.locked : void 0) && (a = !0), a ? this.breakEnd() : (b = this.prerollSlots[0], this.startBreak(this.getPodById(b.getCustomId())), this.playAd(b));
            else this.endBreak()
        };
        z.prototype.play = function() {
            var a;
            z.__super__.play.call(this);
            this.getMediaElement().play();
            null != (a = this.slot) && a.resume();
            !0 === this.terminateAdOnPlay && (this.terminateAdOnPlay = !1, this.terminateAd())
        };
        z.prototype.pause = function() {
            var a, b;
            z.__super__.pause.call(this);
            a = this.getMediaElement();
            a.pause();
            null != (b = this.slot) && b.pause();
            setTimeout(function() {
                return a.controls = !1
            }, 0)
        };
        z.prototype.breakEnd = function() {
            var a, b = this;
            z.__super__.breakEnd.call(this);
            null == this.playbackCore && (this.playbackCore = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore());
            a = this.getMediaElement();
            a.removeEventListener("playing", this.playbackCore.handlers.playing);
            a.removeEventListener("pause", this.playbackCore.handlers.pause);
            a.removeEventListener("waiting", this.playbackCore.handlers.waiting);
            a.removeEventListener("seeking", this.handlers.seekupdate);
            clearInterval(this.timeout);
            this.appState.getEnded() ? this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED) : (this.playbackCore.setEnabled(!0), setTimeout(function() {
                    b.contentPlay();
                    b.getMediaElement().addEventListener("playing", b.handlers.onResume)
                },
                1), setTimeout(function() {
                b.engageMidrollCheck()
            }, 500))
        };
        z.prototype.contentStarted = function() {
            this.engageMidrollCheck()
        };
        z.prototype.contentSeek = function(a) {
            !0 !== this.appState.getSeekRequested() && (this.nextMidroll = this.getPreviousMidroll(a), null == this.nextMidroll ? this.nextMidroll = this.getNextMidroll(a) : this.midrollEngaged || this.engageMidrollCheck())
        };
        z.prototype.contentEnded = function() {
            var a, b = this;
            this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED);
            null != (a = this.postrollSlots) && a.length ?
                setTimeout(function() {
                    var a;
                    a = b.postrollSlots[0];
                    b.startBreak(b.getPodById(a.getCustomId()));
                    b.playAd(a)
                }, 0) : this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED)
        };
        z.prototype.engageMidrollCheck = function() {
            var a;
            0 !== (null != (a = this.midrollSlots) ? a.length : void 0) && !0 !== this.midrollEngaged && (this.midrollEngaged = !0, this.getMediaElement().addEventListener("timeupdate", this.handlers.timeupdate))
        };
        z.prototype.disengageMidrollCheck = function() {
            this.midrollEngaged = !1;
            this.getMediaElement().removeEventListener("timeupdate",
                this.handlers.timeupdate)
        };
        z.prototype.midrollCheck = function(a) {
            var b;
            if (!this.getMediaElement().paused && !0 !== this.appState.getSeeking() && !0 !== this.appState.getSeekRequested())
                if (null == this.nextMidroll) this.nextMidroll = this.getNextMidroll(this.playbackCore.getCurrentTime());
                else if (!(this.playbackCore.getCurrentTime() < this.nextMidroll.getTimePosition()) && (a = "function" === typeof(b = this.nextMidroll).getAdCount ? b.getAdCount() : void 0, null != a))
                    if (0 === a) this.onSlotEnded({
                        slot: this.nextMidroll,
                        skipped: !0
                    });
                    else this.disengageMidrollCheck(), this.adVO.type = "midroll", this.startBreak(this.getPodById(this.nextMidroll.getCustomId())), this.engageAds(), this.playAd(this.nextMidroll)
        };
        z.prototype.getNextMidroll = function(a) {
            var b, c, d, f;
            a = 0 <= a ? a : 0;
            f = this.midrollSlots;
            c = 0;
            for (d = f.length; c < d; c++)
                if (b = f[c], a < b.getTimePosition()) return b
        };
        z.prototype.getPreviousMidroll = function(a) {
            var b, c, d, f, g;
            d = this.pods.slice().reverse();
            f = 0;
            for (g = d.length; f < g; f++)
                if (c = d[f], "midroll" === c.type && (b = c.metadata, a > b.getTimePosition())) return !0 !==
                c.locked ? b : null
        };
        z.prototype.terminateAd = function() {
            var a;
            !0 === this.started && !0 === this.getMediaElement().paused ? this.terminateAdOnPlay = !0 : null != this.slot && (this.slot.getTimePositionClass() === tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL && this.sendNotification(d.HAS_POST_CONTENT, !1), "function" === typeof(a = this.slot).stop && a.stop())
        };
        z.prototype.terminateAllAds = function(a) {
            !0 === a && null != this.context && (this.context.removeEventListener(tv.freewheel.SDK.EVENT_REQUEST_COMPLETE, this.handlers.onRequestComplete),
                this.context.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_STARTED, this.handlers.onSlotStarted), this.context.removeEventListener(tv.freewheel.SDK.EVENT_SLOT_ENDED, this.handlers.onSlotEnded), this.context.removeEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION, this.handlers.onAdImpression), this.context.removeEventListener(tv.freewheel.SDK.EVENT_AD_IMPRESSION_END, this.handlers.onAdImpressionEnd), this.context.removeEventListener(tv.freewheel.SDK.EVENT_ERROR, this.handlers.onAdEvent));
            this.terminateAd();
            this.prerollSlots = [];
            this.midrollSlots = [];
            this.postrollSlots = [];
            this.nextMidroll = null;
            this.disengageMidrollCheck();
            this.sendNotification(d.HAS_POST_CONTENT, !1)
        };
        z.prototype.getCreativeParameters = function(a) {
            var b, c, d, f, g, h;
            if (this.config.creativeParameters && a)
                for (c = {}, h = this.config.creativeParameters, f = 0, g = h.length; f < g; f++) {
                    b = h[f];
                    d = null;
                    try {
                        d = a.getActiveCreativeRendition().getParameter(b)
                    } catch (k) {
                        this.facade.logger.warn("[AMP FREEWHEEL WARNING]", "Could not retrieve Freewheel creative parameter: " +
                            b, k)
                    } finally {
                        d && (c[b] = d)
                    }
                }
            return c
        };
        z.prototype.contentPaused = function() {
            this.getInProgress() || (this.context.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED), this.getMediaElement().addEventListener("playing", this.handlers.onResume))
        };
        z.prototype.setVolume = function(a) {
            var b;
            null != (b = this.context) && b.setAdVolume(a);
            return a
        };
        z.prototype.destroy = function() {
            this.terminateAllAds(!0)
        };
        z.prototype.replay = function() {
            this.playWhenLoaded = !0
        };
        var Ob = function() {
            Ob.__super__.constructor.call(this)
        };
        f(Ob, M);
        Ob.prototype.moduleName = "stats";
        Ob.prototype.createModel = function() {
            this.proxy = new Yb(this.config);
            this.registerProxy(this.proxy)
        };
        Ob.prototype.createController = function() {
            Ob.__super__.createController.call(this);
            this.registerCommand("statsvisibilitychange", qh)
        };
        Ob.prototype.createView = function() {
            this.registerMediator(new hb)
        };
        Ob.prototype.listNotificationInterests = function() {
            return [d.PLAYING, d.TIME_UPDATE]
        };
        Ob.prototype.listNotificationPublications = function() {
            return Ob.__super__.listNotificationPublications.call(this).concat([d.ADD_CONTROL,
                d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE, "statsvisibilitychange"
            ])
        };
        Ob.prototype.getHidden = function() {
            return this.proxy.getHidden()
        };
        Ob.prototype.setHidden = function(a) {
            this.sendNotification("statsvisibilitychange", a);
            return a
        };
        l.registerPlugin("stats", "html", Ob);
        var Hd = function(a) {
            Hd.__super__.constructor.call(this, a)
        };
        f(Hd, R);
        Hd.NAME = x.NAME;
        Hd.prototype.defaults = {
            data: {
                partnerCode: null
            }
        };
        Hd.prototype.initSDK = function(a) {
            var b, c;
            "undefined" !== typeof initMoatTracking && null !== initMoatTracking &&
            (b = null != (c = this.getConfigurationData()) ? c.data : void 0, initMoatTracking(a.adManager, {
                partnerCode: b.partnerCode,
                viewMode: a.viewMode,
                slicer1: b.slicer1,
                slicer2: b.slicer2
            }, a.adContainer))
        };
        var qe = function() {
            return qe.__super__.constructor.apply(this, arguments)
        };
        f(qe, I);
        qe.NAME = "MOATWrapper";
        qe.prototype.flashPlugins = [{
            id: "MOATAnalyticsPlugin",
            src: "#{paths.resources}plugins/MOATAnalyticsPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "MOATAnalyticsPlugin"
        }];
        qe.prototype.createXML = function(a) {
            var b, c, d, f, g;
            b = a.firstChild;
            c = a.getElementsByTagName("metrics")[0];
            null == c && (c = a.createElement("metrics"), b.appendChild(c));
            b = a.createElement("vendor");
            b.setAttribute("id", "moat");
            c.appendChild(b);
            d = [{
                value: this.config.data.partnerCode,
                key: "partnerCode"
            }, {
                value: this.config.data.slicer1,
                key: "slicer1"
            }, {
                value: this.config.data.slicer2,
                key: "slicer2"
            }];
            f = 0;
            for (g = d.length; f < g; f++) c = d[f], null != c.value && this.createProperty(a, c.key, c.value, b);
            return a
        };
        var xh = function() {
            xh.__super__.constructor.call(this)
        };
        f(xh, puremvc.SimpleCommand);
        xh.prototype.execute = function(a) {
            var b;
            b = this.facade.retrieveProxy(Hd.NAME);
            a.getBody() && b.initSDK(a.getBody())
        };
        var Id = function() {
            Id.__super__.constructor.call(this)
        };
        f(Id, oa);
        Id.prototype.moduleName = "freewheel";
        Id.prototype.featureName = "ads";
        Id.prototype.createProxy = function() {
            return new z(this.config)
        };
        Id.prototype.isFullscreenDevice = function() {
            return !1
        };
        l.registerPlugin("freewheel", "html", Id);
        l.registerPlugin("freewheel", "flash", Gd);
        var ta = function(a) {
            ta.__super__.constructor.call(this, a.types,
                a);
            this.buffer = a.buffer;
            this.temporalTypes = ["vod", "live", "dvr"]
        };
        f(ta, ya);
        ta.prototype.playbackCoreName = "dash";
        ta.prototype.context = null;
        ta.prototype.player = null;
        ta.prototype.buffer = null;
        ta.prototype.resumecomplete = function() {
            var a, b, c;
            try {
                b = null != (c = this.facade.getMediaElement()) ? c.textTracks : void 0, 0 !== (null != b ? b.length : void 0) && (a = b[0], null != a && (a.mode = "hidden"))
            } catch (d) {}
            ta.__super__.resumecomplete.call(this)
        };
        ta.prototype.onerror = function() {};
        ta.prototype.createTracks = function() {
            var a, b, c, d,
                f, g, h, k;
            a = this.player.getTracksFor("audio");
            c = this.player.getCurrentTrackFor("audio");
            g = this.facade.tracks.getAudioTracks();
            b = a.length;
            d = h = 0;
            for (k = a.length; h < k; d = ++h) f = a[d], g.add(new dc({
                kind: f.roles.join(" "),
                label: f.id,
                language: f.lang,
                id: f.id,
                enabled: f === c
            }), d + 1 === b)
        };
        ta.prototype.load = function() {
            var a, b;
            null == this.player && ((a = !1 !== (null != (b = this.config.mae) ? b.enabled : void 0) && "undefined" !== typeof MediaAccelerationDashJsWrapper && null !== MediaAccelerationDashJsWrapper) ? (a = this.config.mae, a = new MediaAccelerationDashJsWrapper(a),
                this.player = a.getPlayer()) : this.player = dashjs.MediaPlayer().create(), this.player.enableBufferOccupancyABR(!0), this.player.on("error", this.onError.bind(this)), this.player.on("fragmentLoadingStarted", this.onFragmentLoadStart.bind(this)), this.player.on("fragmentLoadingCompleted", this.onFragmentLoaded.bind(this)), this.player.getDebug().setLogToBrowserConsole(this.facade.logger.enabled), this.player.initialize(this.getMediaElement(), null, !1));
            ta.__super__.load.call(this)
        };
        ta.prototype.applySrc = function() {
            var a;
            a = this.facade.getMedia().keys;
            null != a && this.player.setProtectionData(a);
            this.player.attachSource(this.getSrc());
            this.getMediaElement().load()
        };
        ta.prototype.seek = function(a) {
            return Promise.resolve(this.player.seek(a))
        };
        ta.prototype.getCurrentTime = function() {
            var a;
            return (null != (a = this.player) ? a.time() : void 0) || 0
        };
        ta.prototype.getDuration = function() {
            var a;
            return (null != (a = this.player) ? a.duration() : void 0) || 0
        };
        ta.prototype.getStats = function() {
            return {}
        };
        ta.prototype.onFragmentLoadStart = function(a) {
            this.sendNotification(d.FRAGMENT_LOAD_START,
                a.request.mediaInfo.bitrateList[a.request.quality].bandwidth)
        };
        ta.prototype.onFragmentLoaded = function(a) {
            this.sendNotification(d.FRAGMENT_LOADED, a.request.mediaInfo.bitrateList[a.request.quality].bandwidth)
        };
        ta.prototype.onError = function(a) {
            this.facade.logger.error("DASH JS Playback Error:", a)
        };
        ta.prototype.setQuality = function(a) {
            var b;
            return null != (b = this.player) ? b.setQualityFor("video", a) : void 0
        };
        ta.prototype.getQuality = function() {
            var a;
            return null != (a = this.player) ? a.getQualityFor("video") : void 0
        };
        ta.prototype.getQualityLevels = function() {
            var a;
            return (null != (a = this.player) ? a.getBitrateInfoListFor("video") : void 0) || ta.__super__.getQualityLevels.call(this)
        };
        ta.prototype.destroy = function() {
            var a;
            null != (a = this.player) && a.reset()
        };
        var yh = function() {
            yh.__super__.constructor.call(this)
        };
        f(yh, puremvc.SimpleCommand);
        yh.prototype.execute = function(a) {
            var b, c, e, f, g = this;
            e = a.getBody();
            this.facade.retrieveProxy(s.NAME);
            a = this.facade.getMediaElement();
            null != a && a.webkitSupportsFullscreen && (c = this.facade.retrieveProxy(B.NAME),
                c.setDisplayState(e), b = {}, f = this.facade.viewComponent, null != f.requestFullscreen ? (b.enter = function() {
                return f.requestFullscreen()
            }, b.exit = function() {
                return document.cancelFullscreen()
            }, b.event = "onfullscreenchange", b.element = "fullscreenElement") : null != f.webkitRequestFullScreen ? (b.enter = function() {
                return f.webkitRequestFullScreen()
            }, b.exit = function() {
                return document.webkitCancelFullScreen()
            }, b.event = "onwebkitfullscreenchange", b.element = "webkitFullscreenElement") : null != f.mozRequestFullScreen ? (b.enter =
                function() {
                    return f.mozRequestFullscreen()
                }, b.exit = function() {
                return document.mozCancelFullScreen()
            }, b.event = "onmozfullscreenchange", b.element = "mozFullscreenElement") : null != f.msRequestFullScreen && (b.enter = function() {
                    return f.msRequestFullscreen()
                }, b.exit = function() {
                    return document.msCancelFullScreen()
                }, b.event = "onmozfullscreenchange", b.element = "mozFullscreenElement"), e === ja.FULL_SCREEN ? (b.enter(), null != b.event && (a[b.event] = function(a) {
                if (null == document[b.element]) return g.sendNotification(d.CHANGE_DISPLAY_STATE,
                    ja.NORMAL)
            })) : e === ja.NORMAL && (b.exit(), a[b.event] = null), this.facade.dispatchEvent(new V("fullscreenchange", e === ja.FULL_SCREEN)))
        };
        var cd = function(a) {
            cd.__super__.constructor.call(this, a)
        };
        f(cd, R);
        cd.NAME = x.NAME;
        cd.prototype.playbackProxy = null;
        cd.prototype.createPlaybackProxy = function() {};
        cd.prototype.initialize = function() {
            var a;
            this.playbackProxy = this.createPlaybackProxy();
            null != this.playbackProxy && (this.sendNotification(d.INITIALIZED), a = this.facade.player.retrieveProxy(da.NAME), a.registerPlaybackCore(this.playbackProxy))
        };
        cd.prototype.destroy = function() {
            var a;
            null != (a = this.playbackProxy) && a.destroy()
        };
        var re = function(a) {
            re.__super__.constructor.call(this, a)
        };
        f(re, cd);
        re.NAME = x.NAME;
        re.prototype.defaults = {
            types: ["application/dash+xml"],
            buffer: null,
            mae: null
        };
        re.prototype.createPlaybackProxy = function() {
            if (null != (window.MediaSource || window.WebKitMediaSource)) return new ta(this.getConfigurationData())
        };
        var T = function(a) {
            var b, c, d;
            this.shim = a;
            T.__super__.constructor.call(this);
            this.state = cast.receiver.media.PlayerState.IDLE;
            try {
                d = document.createElement("style"), d.type = "text/css", d.appendChild(document.createTextNode("")), document.head.appendChild(d), c = d.sheet, b = c.insertRule(".akamai-html5.akamai-video::cue {color: #FFFFFF; background: #000000; visibility: hidden;}", 0), this.cssRule = c.rules[b]
            } catch (f) {
                ia.error(f)
            }
        };
        f(T, ib);
        T.prototype.player = null;
        T.prototype.callbackMap = null;
        T.prototype.state = null;
        T.prototype.activeTrackId = null;
        T.prototype.cssRule = null;
        T.prototype.textTrackStyle = null;
        T.prototype.ccHandler = null;
        T.prototype.feed =
            null;
        T.prototype.media = null;
        T.prototype.tracks = null;
        T.prototype.registerPlayer = function(a) {
            var b, c = this;
            this.player = a;
            b = this.dispatchEvent.bind(this);
            ["loadedmetadata", "ended", "error"].forEach(function(c) {
                return a.addEventListener(c, b)
            });
            this.player.once("ready", function() {
                c.applyMedia();
                c.applyFeed();
                c.applyClassName()
            });
            this.player.addEventListener("playing", this.setState.bind(this, cast.receiver.media.PlayerState.PLAYING));
            this.player.addEventListener("pause", this.setState.bind(this, cast.receiver.media.PlayerState.PAUSED));
            this.player.addEventListener("waiting", this.setState.bind(this, cast.receiver.media.PlayerState.BUFFERING))
        };
        T.prototype.setState = function(a) {
            if (a !== this.state) return this.state = a, this.shim.mediaManager.broadcastStatus(!0), a
        };
        T.prototype.registerErrorCallback = function(a) {
            this.onerror = a
        };
        T.prototype.registerEndedCallback = function(a) {
            this.onended = a
        };
        T.prototype.registerLoadCallback = function(a) {
            this.onloadedmetadata = a
        };
        T.prototype.unregisterErrorCallback = function() {
            this.onerror = null
        };
        T.prototype.unregisterEndedCallback =
            function() {
                this.onended = null
            };
        T.prototype.unregisterLoadCallback = function() {
            this.onloadedmetadata = null
        };
        T.prototype.load = function(a, b, c, d) {
            var f, g, h, k, l, m, p;
            g = this.shim.mediaManager.getMediaInformation();
            f = g.customData || {};
            k = g.metadata || {};
            null != d ? this.editTracksInfo(d) : this.activeTrackId = null;
            if (null != f.feed && null != (null != (l = this.player) ? l.feed : void 0)) this.feed = f.feed, this.media = null, this.applyFeed();
            else {
                this.feed = null;
                a = {
                    src: a,
                    type: g.contentType,
                    title: k.title,
                    poster: null != (m = k.images) ? m.url : void 0,
                    description: k.subtitle,
                    pubDate: new Date(g.releaseDate),
                    metadata: f,
                    duration: g.duration,
                    startTime: c || (null != (p = f.media) ? p.startTime : void 0),
                    autoplay: b
                };
                if (null != f.media)
                    for (h in m = f.media, m) f = m[h], null == a[h] && (a[h] = f);
                this.tracks = g.tracks;
                this.media = a;
                this.applyMedia()
            }
        };
        T.prototype.applyMedia = function() {
            null != this.player && null != this.media && (this.player.once("loadedmetadata", this.loadTracks.bind(this, this.tracks)), this.player.setMedia(this.media), this.setState(cast.receiver.media.PlayerState.BUFFERING))
        };
        T.prototype.loadTracks = function(a, b) {
            var c, d, f;
            0 < (null != a ? a.length : void 0) && (d = this.getTrack(0), null != d && (f = /ttml/.test(d.trackContentType) ? "ttml" : d.trackContentType, c = this.player.retrieveProxy("PlayerProxy").getActivePlaybackCore(), c.player.enableCaptions(!0, f, d.trackContentId)))
        };
        T.prototype.applyFeed = function() {
            null != this.player && null != this.feed && (this.player.once("mediachange", this.mediachangeHandler.bind(this)), null != this.feed.data ? this.player.feed.setData(this.feed.data) : null != feed.url && this.player.feed.setURL(this.feed.url))
        };
        T.prototype.mediachangeHandler = function(a) {
            var b;
            a = this.player.getMedia();
            b = new cast.receiver.media.MediaInformation;
            b.contentId = a.src;
            b.contentType = a.type;
            b.customData = a.metadata;
            b.duration = a.duration;
            b.metadata = {
                title: a.title,
                subtitle: a.description,
                images: [{
                    url: a.poster
                }],
                releaseDate: a.pubDate.toISOString()
            };
            this.media = a;
            this.shim.mediaManager.setMediaInformation(b, !0)
        };
        T.prototype.reset = function() {};
        T.prototype.play = function() {
            this.player.play()
        };
        T.prototype.seek = function(a, b) {
            this.player.setCurrentTime(a);
            switch (b) {
                case cast.receiver.media.SeekResumeState.PLAYBACK_PAUSE:
                    this.player.pause();
                    break;
                case cast.receiver.media.SeekResumeState.PLAYBACK_START:
                    this.player.play()
            }
        };
        T.prototype.pause = function() {
            return this.player.pause()
        };
        T.prototype.getState = function() {
            return this.state
        };
        T.prototype.getCurrentTimeSec = function() {
            return null != this.player ? this.player.getCurrentTime() : 0
        };
        T.prototype.getDurationSec = function() {
            return null != this.player ? this.player.getDuration() : 0
        };
        T.prototype.getVolume = function() {
            var a;
            a = new cast.receiver.media.Volume;
            a.level = this.player.getVolume();
            a.muted = this.player.getMuted();
            return a
        };
        T.prototype.setVolume = function(a) {
            null != a.level && this.player.setVolume(a.level);
            !0 === a.muted ? this.player.setMuted(!0) : !0 === this.player.getMuted() && this.player.setMuted(!1);
            return a
        };
        T.prototype.editTracksInfo = function(a) {
            var b;
            null != a.activeTrackIds && (b = a.activeTrackIds[0], this.activeTrackId !== b && (this.activeTrackId = b, this.applyClassName()));
            a = a.textTrackStyle;
            null != a && null != this.cssRule && (this.textTrackStyle =
                a, null != a.foregroundColor && (this.cssRule.style.color = this.hexToRgba(a.foregroundColor)), null != a.backgroundColor && (this.cssRule.style.backgroundColor = this.hexToRgba(a.backgroundColor)), a.windowType === cast.receiver.media.TextTrackWindowType.ROUNDED_CORNERS && (this.cssRule.style.borderRadius = a.windowRoundedCornerRadius + "px"), null != a.fontScale && (this.cssRule.style.fontSize = a.fontScale + "em"), null != a.fontFamily && (this.cssRule.style.fontFamily = a.fontFamily))
        };
        T.prototype.applyClassName = function(a) {
            null !=
            this.player && (a = this.player.getMediaElement().classList, null != this.activeTrackId ? a.add("akamai-cc") : a.remove("akamai-cc"))
        };
        T.prototype.hexToRgba = function(a) {
            var b, c, d;
            if (!/^#[A-Fa-f0-9]{6}([A-Fa-f0-9]{2})?$/.test(a)) return a;
            d = parseInt(a.substring(1, 3), 16);
            c = parseInt(a.substring(3, 5), 16);
            b = parseInt(a.substring(5, 7), 16);
            a = 9 === a.length ? parseInt(a.substring(7, 9), 16) / 256 : 1;
            return "rgba(" + d + "," + c + "," + b + "," + a + ")"
        };
        T.prototype.getTrack = function(a) {
            var b;
            null == a && (a = this.activeTrackId);
            b = this.tracks.filter(function(b) {
                return b.trackId ===
                    a
            })[0];
            null != b && null == b.trackContentType && (b.trackContentType = cast.player.api.CaptionsType.CEA608);
            return b
        };
        var Ci = [g.mimeTypes.m3u8, g.mimeTypes.mp4, g.mimeTypes.mpd, g.mimeTypes.ism, g.mimeTypes.webm, g.mimeTypes.mp3],
            H = function(a) {
                this.messageBus = a.messageBus || "urn:x-cast:com.akamai.amp.cast";
                H.__super__.constructor.call(this, a.sender)
            };
        f(H, R);
        H.NAME = x.NAME;
        H.prototype.defaults = {
            applicationID: "CC1AD845"
        };
        H.prototype.session = null;
        H.prototype.media = null;
        H.prototype.messageBus = null;
        H.prototype.feed = null;
        H.prototype.currentTime = null;
        H.prototype.duration = null;
        H.prototype.receiverAvailable = !1;
        H.prototype.currentTime = 0;
        H.prototype.duration = 0;
        H.prototype.playerState = null;
        H.prototype.displayTimeTimeout = null;
        H.prototype.initialize = function() {
            var a, b = this;
            "undefined" !== typeof chrome && null !== chrome && null != (a = chrome.cast) && a.isAvailable ? this.initializeCastApi() : window.__onGCastApiAvailable = function(a, d) {
                !0 === a ? b.initializeCastApi() : b.logError("cast load error", d)
            }
        };
        H.prototype.initializeCastApi = function() {
            var a;
            a = this.getConfigurationData().applicationID;
            a = new chrome.cast.SessionRequest(a);
            a = new chrome.cast.ApiConfig(a, this.sessionListener.bind(this), this.receiverListener.bind(this), chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
            chrome.cast.initialize(a, this.onInitSuccess.bind(this), this.onInitError.bind(this))
        };
        H.prototype.onInitSuccess = function(a) {
            this.logEvent("init success", a)
        };
        H.prototype.onInitError = function(a) {
            this.logError("init error", a)
        };
        H.prototype.receiverListener = function(a) {
            this.receiverAvailable =
                "available" === a;
            this.sendNotification(pc.AVAILABILITY_CHANGE, this.receiverAvailable);
            this.logEvent("receiver " + (this.receiverAvailable ? "found" : "list empty"))
        };
        H.prototype.sessionListener = function(a) {
            this.logEvent("session listener", a);
            if (0 !== a.media.length) this.onMediaDiscovered(a.media[0]);
            else this.onRequestSessionSuccess(a)
        };
        H.prototype.launch = function() {
            chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this), this.onLaunchError.bind(this))
        };
        H.prototype.send = function(a) {
            var b;
            null != (b =
                this.session) && "function" === typeof b.sendMessage && b.sendMessage(this.messageBus, a, this.onMessageSuccess.bind(this), this.onMessageError.bind(this))
        };
        H.prototype.onLaunchError = function(a) {
            this.logError("launch error.", a)
        };
        H.prototype.onRequestSessionSuccess = function(a) {
            this.logEvent("request session success.", a);
            this.session = a;
            this.session.addMessageListener(this.messageBus, this.onMessage.bind(this));
            this.session.addUpdateListener(this.onUpdate.bind(this));
            this.session.sendMessage(this.messageBus, {
                type: "createPlayer",
                config: this.facade.player.getConfig()
            }, this.onCreateSucess.bind(this), this.onMessageError.bind(this));
            a = this.facade.player.retrieveProxy(s.NAME);
            0 === this.session.media.length && this.loadMedia(a.getCurrentTime())
        };
        H.prototype.onUpdate = function(a) {
            a || (this.sendNotification(d.CHANGE_PLAYBACK_TARGET, "amp"), this.stopDisplayTimeUpdate())
        };
        H.prototype.onCreateSucess = function(a) {
            this.logEvent("MPL created", a);
            this.sendNotification(d.CHANGE_PLAYBACK_TARGET, "chromecast")
        };
        H.prototype.onMessageSuccess = function(a) {
            this.logEvent("message sent",
                a)
        };
        H.prototype.onMessageError = function(a) {
            this.logError("message error", a)
        };
        H.prototype.onMessage = function(a, b) {
            var c, e;
            b = JSON.parse(b);
            e = b.type;
            c = b.detail || {};
            switch (e) {
                case "dispatchevent":
                    e = "player" === c.target ? this.facade.player : this.facade.player[c.target], null != e && e.dispatchEvent(c.event)
            }
            this.sendNotification(d.DISPATCH_EVENT, {
                type: "message",
                message: b
            })
        };
        H.prototype.onStop = function(a) {
            this.logEvent("stop");
            this.session.stop(this.onStopSuccess.bind(this), this.onStopError.bind(this))
        };
        H.prototype.onStopSuccess =
            function(a) {
                this.logEvent("stop success", a)
            };
        H.prototype.onStopError = function(a) {
            this.logError("stop error", a)
        };
        H.prototype.logEvent = function(a, b) {
            null == a && (a = b.type || "");
            this.facade.logger.log("[AMP CHROMECAST] " + a, b)
        };
        H.prototype.logError = function(a, b) {
            this.facade.logger.error("[AMP CHROMECAST ERROR] " + a, b)
        };
        H.prototype.loadMedia = function(a) {
            var b, c, d, f, k;
            null == a && (a = 0);
            d = this.facade.player.retrieveProxy(t.NAME).getData();
            null != d && (b = function(a) {
                return -1 < Ci.indexOf(a) ? "maybe" : ""
            }, f = g.selectSource(d.source,
                b), null != f && (b = {
                media: d
            }, c = null != (k = this.facade.player.getModules()) ? k.feed : void 0, null != c && (b.feed = {
                data: c.getData(),
                url: c.getURL()
            }), a = this.mediaToLoadRequest(d, f, a, b), this.session.loadMedia(a, this.onMediaDiscovered.bind(this), this.onMediaError.bind(this))))
        };
        H.prototype.mediaToLoadRequest = function(a, b, c, d) {
            var f, g, h;
            g = new chrome.cast.media.GenericMediaMetadata;
            g.title = a.title;
            g.subtitle = a.description;
            g.image = [new chrome.cast.Image(a.poster)];
            g.releaseDate = null != (f = a.pubDate) ? "function" === typeof f.toISOString ?
                f.toISOString() : void 0 : void 0;
            b = new chrome.cast.media.MediaInfo(b.src, b.type);
            b.duration = a.duration;
            b.customData = d;
            b.metadata = g;
            if (0 < (null != (h = a.track) ? h.length : void 0))
                for (b.tracks = [], h = a.track, f = d = 0, g = h.length; d < g; f = ++d) a = h[f], f = new chrome.cast.media.Track(f, chrome.cast.media.TrackType.TEXT), f.subtype = chrome.cast.media.TextTrackType.CAPTIONS, f.name = "Closed Captions", f.language = a.srclang, f.customData = a, f.trackContentId = a.src, f.trackContentType = a.type, b.tracks.push(f);
            b = new chrome.cast.media.LoadRequest(b);
            b.currentTime = c;
            return b
        };
        H.prototype.onMediaDiscovered = function(a) {
            null != this.media && this.media.removeUpdateListener(this.mediaStatusUpdate);
            this.media = a;
            this.mediaStatusUpdate = this.onMediaStatusUpdate.bind(this);
            this.media.addUpdateListener(this.mediaStatusUpdate);
            this.sendNotification(d.CHANGE_PLAYBACK_TARGET, "chromecast")
        };
        H.prototype.onMediaStatusUpdate = function(a) {
            this.logEvent("mediastatusupdate", a);
            this.updatePlayerState(this.media.playerState);
            this.updateDisplayTime();
            !1 === a && this.stopDisplayTimeUpdate()
        };
        H.prototype.updatePlayerState = function(a) {
            var b;
            if (a !== this.playerState) {
                this.playerState = a;
                switch (this.playerState) {
                    case chrome.cast.media.PlayerState.BUFFERING:
                        b = U.WAITING;
                        break;
                    case chrome.cast.media.PlayerState.PLAYING:
                        b = U.PLAYING;
                        break;
                    case chrome.cast.media.PlayerState.PAUSED:
                        b = U.PAUSED
                }
                this.sendNotification(d.CHANGE_PLAY_STATE, b);
                this.playerState === chrome.cast.media.PlayerState.PLAYING ? this.startDisplayTimeUpdate() : this.stopDisplayTimeUpdate()
            }
        };
        H.prototype.startDisplayTimeUpdate = function() {
            this.stopDisplayTimeUpdate();
            this.displayTimeTimeout = setInterval(this.updateDisplayTime.bind(this), 100)
        };
        H.prototype.stopDisplayTimeUpdate = function() {
            clearInterval(this.displayTimeTimeout);
            this.displayTimeTimeout = null
        };
        H.prototype.updateDisplayTime = function() {
            var a, b, c;
            a = this.media.getEstimatedTime() || 0;
            b = (null != (c = this.media.media) ? c.duration : void 0) || a;
            b !== this.duration ? (this.duration = b, this.sendNotification(d.CHANGE_DURATION, this.duration)) : a !== this.currentTime && (this.currentTime = a, this.sendNotification(d.DISPLAY_TIME, {
                    currentTime: this.currentTime,
                    duration: this.duration
                }))
        };
        H.prototype.onMediaError = function(a) {
            this.logError("media error", a);
            this.stopDisplayTimeUpdate()
        };
        H.prototype.play = function() {
            this.media.play()
        };
        H.prototype.pause = function() {
            this.media.pause()
        };
        H.prototype.setCurrentTime = function(a) {
            var b;
            b = new chrome.cast.media.SeekRequest;
            b.currentTime = a;
            this.media.seek(b)
        };
        H.prototype.getCurrentTime = function() {
            return this.currentTime
        };
        H.prototype.isReceiverAvailable = function() {
            return this.receiverAvailable
        };
        var rf = function() {
            rf.__super__.constructor.call(this)
        };
        f(rf, A);
        rf.prototype.execute = function(a) {
            this.proxy.launch()
        };
        var zh = function() {
            zh.__super__.constructor.call(this)
        };
        f(zh, A);
        zh.prototype.execute = function(a) {
            this.proxy.send({
                type: "captioning.visibilitychange",
                detail: {
                    visibility: a.getBody()
                }
            })
        };
        var Ah = function() {
            Ah.__super__.constructor.call(this)
        };
        f(Ah, A);
        Ah.prototype.execute = function(a) {
            this.proxy.send({
                type: "captioning.settingschange",
                detail: a.getBody()
            })
        };
        var Bh = function() {
            Bh.__super__.constructor.call(this)
        };
        f(Bh, A);
        Bh.prototype.execute = function(a) {
            this.facade.player.getViewComponent().hidden = !1;
            this.proxy.ready()
        };
        var Ch = function() {
            Ch.__super__.constructor.call(this)
        };
        f(Ch, A);
        Ch.prototype.execute = function(a) {
            this.facade.logger.debug("ChromeCastBreakStartCommand");
            a = this.facade.player.retrieveProxy(da.NAME).getActivePlaybackCore();
            "chromecast" === a.getPlaybackCoreName() && (a.unload(), a.src = null)
        };
        var Wa = function(a, b) {
            this.receiver = b;
            Wa.__super__.constructor.call(this, a)
        };
        f(Wa, ya);
        Wa.prototype.initialized = !0;
        Wa.prototype.player = null;
        Wa.prototype.host = null;
        Wa.prototype.protocol = null;
        Wa.prototype.playbackCoreName =
            "chromecast";
        Wa.prototype.manifest = null;
        Wa.prototype.xhr = null;
        Wa.prototype.trackInfo = null;
        Wa.prototype.receiver = null;
        Wa.prototype.reset = function() {
            Wa.__super__.reset.call(this);
            this.manifest = this.xhr = null
        };
        Wa.prototype.unload = function() {
            null != this.player && (this.trackInfo = {
                activeTrackIds: [this.receiver.chromecastPlayer.activeTrackId],
                textTrackStyle: this.receiver.chromecastPlayer.textTrackStyle
            }, this.receiver.chromecastPlayer.activeTrackId = null, this.receiver.chromecastPlayer.textTrackStyle = null, this.player.unload(),
                this.player = null)
        };
        Wa.prototype.load = function() {
            var a = this;
            null != this.xhr ? null != this.manifest && this.loadMediaPlayer() : (this.xhr = new XMLHttpRequest, this.xhr.onload = function(b) {
                200 === a.xhr.status && (a.manifest = a.xhr.responseText, a.loadMediaPlayer())
            }, this.xhr.onerror = function(b) {
                a.facade.logger.error(b);
                a.player.unload()
            }, this.xhr.open("GET", this.getSrc()), this.xhr.send())
        };
        Wa.prototype.loadMediaPlayer = function() {
            var a, b, c = this;
            this.playWhenLoaded = this.data.loading = !0;
            this.unload();
            a = this.facade.getMediaElement();
            a.addEventListener("loadedmetadata", this.resumeHandlers.loadedmetadata);
            a.addEventListener("loadedmetadata", this.handlers.loadedmetadata);
            a.addEventListener("durationchange", this.handlers.durationchange);
            a.addEventListener("canplaythrough", this.handlers.canplaythrough);
            null != a.src && (a.src = null);
            !0 === ia.enabled && cast.player.api.setLoggerLevel(cast.player.api.LoggerLevel.DEBUG);
            this.host = new cast.player.api.Host({
                mediaElement: a,
                url: this.getSrc()
            });
            this.host.updateManifestRequestInfo = function(a) {
                a.url ===
                c.getSrc() && (a.skipRequest = !0, a.setResponse(c.manifest))
            };
            this.host.onError = function(a) {
                c.facade.logger.error("Google Media Player Fatal Error - " + a);
                c.player.unload()
            };
            a = this.facade.retrieveProxy(t.NAME).getType();
            b = g.mimeTypes;
            switch (a) {
                case b.m3u8:
                    this.protocol = cast.player.api.CreateHlsStreamingProtocol(this.host);
                    break;
                case b.mpd:
                    this.protocol = cast.player.api.CreateDashStreamingProtocol(this.host);
                    break;
                case b.ism:
                    this.protocol = cast.player.api.CreateSmoothStreamingProtocol(this.host)
            }
            null != this.protocol ?
                (this.player = new cast.player.api.Player(this.host), this.player.load(this.protocol, 0)) : this.facade.logger.error("Google Media Player Error: Could not create protocol")
        };
        Wa.prototype.resumecomplete = function() {
            Wa.__super__.resumecomplete.call(this)
        };
        var Dh = function() {
            Dh.__super__.constructor.call(this)
        };
        f(Dh, A);
        Dh.prototype.execute = function(a) {
            "chromecast" === this.applicationState.getPlaybackTarget() && (this.facade.logger.debug("ChromeCastMediaChangeCommand"), this.proxy.loadMedia())
        };
        var sf = function() {
            sf.__super__.constructor.call(this)
        };
        f(sf, zb);
        sf.prototype.onRegister = function() {
            sf.__super__.onRegister.call(this);
            this.sendNotification(d.ADD_APPLICATION_STATE, "chromecast-receiver")
        };
        var qc = function() {
            qc.__super__.constructor.call(this)
        };
        f(qc, zb);
        qc.prototype.componentName = "chromecast";
        qc.prototype.controls = null;
        qc.prototype.onRegister = function() {
            qc.__super__.onRegister.call(this);
            this.controls = new rc
        };
        qc.prototype.registerOverlay = function() {};
        qc.prototype.listNotificationInterests = function() {
            return [d.PLAYBACK_TARGET_CHANGE, d.CHANGE_PLAY_STATE]
        };
        qc.prototype.handleNotification = function(a) {
            var b;
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case d.PLAYBACK_TARGET_CHANGE:
                    b = a.value;
                    "chromecast" === b ? this.facade.registerMediator(this.controls) : this.facade.removeMediator(this.controls.getMediatorName());
                    break;
                case d.CHANGE_PLAY_STATE:
                    this.controls.setState(a)
            }
        };
        var Pc = function() {
            Pc.__super__.constructor.call(this)
        };
        f(Pc, qc);
        Pc.prototype.chromeCastButton = null;
        Pc.prototype.onRegister = function() {
            Pc.__super__.onRegister.call(this);
            this.chromeCastButton = new se;
            this.facade.registerMediator(this.chromeCastButton)
        };
        Pc.prototype.listNotificationInterests = function() {
            return Pc.__super__.listNotificationInterests.call(this).concat([pc.AVAILABILITY_CHANGE])
        };
        Pc.prototype.handleNotification = function(a) {
            var b;
            Pc.__super__.handleNotification.call(this, a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case pc.AVAILABILITY_CHANGE:
                    !0 === a ? (this.sendNotification(d.ADD_CONTROL_STATE, "chromecast"), this.facade.player.sendNotification(d.ADD_CONTROL, this.chromeCastButton.getViewComponent())) :
                        (this.sendNotification(d.REMOVE_CONTROL_STATE, "chromecast"), this.facade.player.sendNotification(d.REMOVE_CONTROL, this.chromeCastButton.getViewComponent()))
            }
        };
        var ha = function(a) {
            this.messageBus = a.messageBus || "urn:x-cast:com.akamai.amp.cast";
            ha.__super__.constructor.call(this, a.receiver)
        };
        f(ha, R);
        ha.NAME = x.NAME;
        ha.prototype.defaults = {
            shim: null,
            types: ["application/x-mpegURL", "application/dash+xml", "application/vnd.ms-sstr+xml"]
        };
        ha.prototype.messageBus = null;
        ha.prototype.castReceiverManager = null;
        ha.prototype.castMessageBus =
            null;
        ha.prototype.startTime = 0;
        ha.prototype.currentTime = 0;
        ha.prototype.boundHandler = null;
        ha.prototype.amp = null;
        ha.prototype.mediaManager = null;
        ha.prototype.playbackCore = null;
        ha.prototype.teardownTimeout = null;
        ha.prototype.chromecastPlayer = null;
        ha.prototype.initialize = function() {
            var a;
            ha.__super__.initialize.call(this);
            this.sendNotification(d.INITIALIZED);
            a = new Wa(this.getConfigurationData().types, this);
            this.facade.player.retrieveProxy(da.NAME).registerPlaybackCore(a)
        };
        ha.prototype.ready = function() {
            !0 ===
            this.facade.logger.enabled && cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);
            this.shim = Fb.getInstance();
            this.castReceiverManager = this.shim.castReceiverManager;
            this.castReceiverManager.onReady = this.castReceiverManager.onSystemVolumeChanged = this.castReceiverManager.onVisibilityChanged = this.logEvent.bind(this);
            this.castReceiverManager.onSenderConnected = this.onSenderConnected.bind(this);
            this.castReceiverManager.onSenderDisconnected = this.onSenderDisconnected.bind(this);
            this.amp = this.facade.player;
            this.chromecastPlayer = this.shim.player;
            this.chromecastPlayer.registerPlayer(this.amp);
            this.mediaManager = this.shim.mediaManager;
            this.castMessageBus = this.shim.castMessageBuses[this.messageBus];
            this.castMessageBus.onMessage = this.onMessage.bind(this);
            this.amp.addEventListener("seeking", this.eventHandler.bind(this));
            this.amp.addEventListener("seeked", this.eventHandler.bind(this));
            this.amp.addEventListener("pause", this.startTeardownTimeout.bind(this, 1200));
            this.amp.addEventListener("ended", this.startTeardownTimeout.bind(this,
                300));
            this.amp.addEventListener("error", this.startTeardownTimeout.bind(this, 300));
            this.amp.addEventListener("playing", this.stopTeardownTimeout.bind(this));
            this.amp.addEventListener("loadedmetadata", this.stopTeardownTimeout.bind(this));
            null != this.amp.ads && (this.amp.ads.addEventListener("breakstart", this.dispatchEvent.bind(this, "ads")), this.amp.ads.addEventListener("breakend", this.onBreakEnd.bind(this)), this.amp.ads.addEventListener("started", this.dispatchEvent.bind(this, "ads")), this.amp.ads.addEventListener("ended",
                this.dispatchEvent.bind(this, "ads")), this.amp.ads.addEventListener("companion", this.dispatchEvent.bind(this, "ads")));
            this.startTeardownTimeout(300)
        };
        ha.prototype.onBreakEnd = function(a) {
            this.dispatchEvent("ads", a);
            !0 === this.amp.getEnded() && this.startTeardownTimeout(300)
        };
        ha.prototype.logEvent = function(a, b) {
            null == a ? a = b.type || "" : null == b && (b = a.data, a = b.type);
            this.facade.logger.log("[CHROMECAST] ", a, b)
        };
        ha.prototype.onSenderConnected = function(a) {
            this.logEvent("senderconnected", a);
            setTimeout(this.sendNotification.bind(this,
                d.DISPATCH_EVENT, new V("senderconnected", a)), 0)
        };
        ha.prototype.onSenderDisconnected = function(a) {
            this.logEvent("sender disconnected", a);
            0 === this.castReceiverManager.getSenders().length && a.reason === cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER && this.teardown();
            setTimeout(this.sendNotification.bind(this, d.DISPATCH_EVENT, new V("senderdisconnected", a)), 0)
        };
        ha.prototype.onMessage = function(a) {
            var b, c, e, f, g;
            this.logEvent("message from sender", a);
            try {
                if (e = a.data || a.message, null != e && (g = e.type, b =
                        e.detail, "string" === typeof b && (b = JSON.parse(b)), null != b)) {
                    switch (g) {
                        case "captioning.visibilitychange":
                            c = [];
                            !0 === b.visibility && c.push(0);
                            this.chromecastPlayer.editTracksInfo({
                                activeTrackIds: c
                            });
                            break;
                        case "captioning.settingschange":
                            f = new cast.receiver.media.TextTrackStyle;
                            f.foregroundColor = b.fontColor;
                            f.backgroundColor = b.backgroundColor;
                            f.fontScale = b.size;
                            f.windowColor = b.windowColor;
                            f.fontFamily = b.fontFamily;
                            f.edgeColor = b.edgeColor;
                            f.edgeType = b.edgeType;
                            this.chromecastPlayer.editTracksInfo({
                                textTrackStyle: f
                            });
                            break;
                        case "stats.visibilitychange":
                            this.amp.stats.setHidden(!b.visibility)
                    }
                    this.sendNotification(d.DISPATCH_EVENT, a)
                }
            } catch (h) {
                this.error(h)
            }
        };
        ha.prototype.onClose = function(a) {
            this.logEvent("message channel closed", a)
        };
        ha.prototype.eventHandler = function(a) {
            var b;
            b = {
                type: a.type
            };
            null != a.detail && (b.detail = a.detail);
            this.send(b)
        };
        ha.prototype.dispatchEvent = function(a, b) {
            this.send({
                type: "dispatchevent",
                detail: {
                    target: a,
                    event: {
                        type: b.type,
                        detail: b.detail
                    }
                }
            })
        };
        ha.prototype.send = function(a) {
            this.castMessageBus.broadcast(a)
        };
        ha.prototype.startTeardownTimeout = function(a) {
            this.stopTeardownTimeout();
            this.teardownTimeout = setTimeout(this.teardown.bind(this), 1E3 * a)
        };
        ha.prototype.stopTeardownTimeout = function() {
            clearTimeout(this.teardownTimeout)
        };
        ha.prototype.teardown = function() {
            window.close()
        };
        var Eh = function() {
            Eh.__super__.constructor.call(this)
        };
        f(Eh, A);
        Eh.prototype.execute = function(a) {
            var b;
            "function" === typeof(b = this.proxy).setFeed && b.setFeed(a.getBody())
        };
        var tf = function() {
            tf.__super__.constructor.call(this)
        };
        f(tf, A);
        tf.prototype.execute =
            function(a) {
                this.facade.logger.debug("ChromeCastSeekCommand");
                this.plugin.setCurrentTime(a.getBody())
            };
        var se = function() {
            se.__super__.constructor.call(this)
        };
        f(se, Da);
        se.prototype.componentName = "chromecast";
        se.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification(pc.LAUNCH);
            return !1
        };
        var uf = function() {
            uf.__super__.constructor.call(this)
        };
        f(uf, A);
        uf.prototype.execute = function(a) {
            switch (this.applicationState.getPlayState()) {
                case U.ENDED:
                    this.plugin.setCurrentTime(0);
                    this.plugin.play();
                    break;
                case U.PAUSED:
                case U.READY:
                    this.plugin.play();
                    break;
                case U.PLAYING:
                case U.WAITING:
                    this.plugin.pause()
            }
        };
        var rc = function() {
            rc.__super__.constructor.call(this)
        };
        f(rc, Tb);
        rc.prototype.componentName = "chromecast-controls";
        rc.prototype.message = null;
        rc.prototype.messageContainer = null;
        rc.prototype.button = null;
        rc.prototype.captioningActive = !1;
        rc.prototype.onRegister = function() {
            var a, b, c;
            rc.__super__.onRegister.call(this);
            this.messageContainer = this.create("chromecast-message-container");
            this.message =
                this.createText("chromecast-message", this.localizationManager.getString("MSG_CHROMECAST_MESSAGE"), this.messageContainer);
            this.button = new se;
            this.facade.registerMediator(this.button);
            a = new Ec(this.controlBar);
            this.facade.registerMediator(a);
            a.setDisabled(!0);
            this.sendNotification(d.ADD_CONTROL, this.button.getViewComponent());
            this.viewComponent.getElementsByClassName("akamai-caption akamai-button").length || !0 !== (null != (b = this.facade.player.captioning) ? null != (c = b.config) ? c.enabled : void 0 : void 0) || (a =
                new Da(this.localizationManager.getString(D.MSG_CC), this.viewComponent.getElementsByClassName("akamai-control-bar")[0], null, "caption", this.captionButtonClick.bind(this)), this.facade.registerMediator(a), this.captionButton = a.getViewComponent(), this.sendNotification(d.ADD_CONTROL, this.captionButton), this.sendNotification(d.ADD_CONTROL_STATE, "cc-enabled"))
        };
        rc.prototype.captionButtonClick = function() {
            this.captioningActive = !this.captioningActive;
            try {
                this.facade.player.parent.chromecast.postMessage({
                    type: "captioning.visibilitychange",
                    detail: {
                        visibility: this.captioningActive
                    }
                })
            } catch (a) {
                this.facade.logger.error("[AMP Chromecast Captioning Error]", a)
            }
            this.sendNotification(this.captioningActive ? d.ADD_APPLICATION_STATE : d.REMOVE_APPLICATION_STATE, "cc-active")
        };
        var vf = function() {
            vf.__super__.constructor.call(this)
        };
        f(vf, A);
        vf.prototype.execute = function(a) {
            var b, c = this;
            a = a.getBody().target;
            "chromecast" === a ? this.player.pause() : "amp" === a && (a = this.proxy.getCurrentTime(), b = this.player.getDuration(), 0 !== a && (a !== b && (this.seekedHandler = this.seeked.bind(this),
                    this.player.once("seeked", function(a) {
                        c.player.play()
                    })), this.player.setCurrentTime(a)))
        };
        var pa = function() {
            pa.__super__.constructor.call(this)
        };
        f(pa, M);
        pa.prototype.moduleName = "chromecast";
        pa.prototype.isAvailable = function() {
            return this.isSender() || this.isReceiver()
        };
        pa.prototype.createModel = function() {
            this.proxy = this.isSender() ? new H(this.config) : new ha(this.config);
            this.registerProxy(this.proxy)
        };
        pa.prototype.createController = function() {
            pa.__super__.createController.call(this);
            this.isSender() ?
                (this.registerCommand(d.PLAYBACK_TARGET_CHANGE, vf), this.registerCommand(pc.LAUNCH, rf), this.registerCommand($.TOGGLE_PLAY_PAUSE, uf), this.registerCommand($.SEEK, tf), this.registerCommand(G.VISIBILITY_CHANGE, zh), this.registerCommand(G.SETTINGS_CHANGE, Ah), this.registerCommand(d.MEDIA_CHANGE, Dh), this.registerCommand(pc.AVAILABILITY_CHANGE, y)) : this.isReceiver() && (this.registerCommand(d.READY, Bh), this.registerCommand(k.BREAK_START, Ch))
        };
        pa.prototype.createView = function() {
            this.isSender() ? this.registerMediator(new Pc) :
                this.isReceiver() && this.registerMediator(new sf)
        };
        pa.prototype.isSender = function() {
            return !pa.prototype.isReceiver() && /Chrome/.test(navigator.userAgent)
        };
        pa.prototype.isReceiver = function() {
            return /CrKey/.test(navigator.userAgent)
        };
        pa.prototype.listNotificationInterests = function() {
            return [d.READY, G.VISIBILITY_CHANGE, G.SETTINGS_CHANGE, k.BREAK_START, d.PLAYBACK_TARGET_CHANGE, d.MEDIA_CHANGE]
        };
        pa.prototype.listNotificationPublications = function() {
            return pa.__super__.listNotificationPublications.apply(this,
                arguments).concat([d.INITIALIZED, d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE, d.CHANGE_PLAYBACK_TARGET, pc.AVAILABILITY_CHANGE, d.CHANGE_PLAY_STATE, d.CHANGE_DURATION, d.DISPLAY_TIME])
        };
        pa.prototype.play = function() {
            var a;
            "function" === typeof(a = this.proxy).play && a.play()
        };
        pa.prototype.pause = function() {
            var a;
            "function" === typeof(a = this.proxy).pause && a.pause()
        };
        pa.prototype.setCurrentTime = function(a) {
            this.proxy.setCurrentTime(a);
            return a
        };
        pa.prototype.isReceiverAvailable = function() {
            var a;
            return (null != (a = this.proxy) ? "function" === typeof a.isReceiverAvailable ? a.isReceiverAvailable() : void 0 : void 0) || !1
        };
        pa.prototype.getMedia = function() {
            return this.proxy.media
        };
        pa.prototype.getSession = function() {
            return this.proxy.session
        };
        pa.prototype.getMediaManager = function() {
            return this.proxy.mediaManager
        };
        pa.prototype.getCastReceiverManager = function() {
            return this.proxy.castReceiverManager
        };
        pa.prototype.getCastMessageBus = function() {
            return this.proxy.shim.castMessageBuses[this.proxy.messageBus]
        };
        pa.prototype.postMessage =
            function(a) {
                this.proxy.send(a)
            };
        l.registerPlugin("chromecast", "html", pa);
        var dd = function() {
            dd.__super__.constructor.call(this)
        };
        f(dd, pa);
        dd.NAME = "ChromeCastFlashPlugin";
        dd.prototype.createModel = function() {
            this.proxy = new H(this.config);
            this.registerProxy(this.proxy)
        };
        dd.prototype.createController = function() {
            dd.__super__.createController.call(this);
            this.registerCommand(d.PLAYBACK_TARGET_CHANGE, vf);
            this.registerCommand(pc.LAUNCH, rf);
            this.registerCommand(Oa.FEED_CHANGED, Eh);
            this.registerCommand($.TOGGLE_PLAY_PAUSE,
                uf);
            this.registerCommand($.SEEK, tf)
        };
        dd.prototype.createView = function() {
            this.registerMediator(new qc)
        };
        dd.prototype.listNotificationInterests = function() {
            return [Oa.FEED_CHANGED, d.CHANGE_MEDIA, d.PLAYBACK_TARGET_CHANGE]
        };
        var pc = {
                LAUNCH: "launch",
                AVAILABILITY_CHANGE: "availabilitychange"
            },
            Sa = function(a, b) {
                if (!pa.prototype.isSender()) throw Error("Chromecast not supported on this platform. Skipping plugin initialization.");
                Sa.__super__.constructor.call(this, a, b);
                this.plugin = new dd;
                this.plugin.initialize(b,
                    this.player);
                a.registerModule(this.plugin)
            };
        f(Sa, I);
        Sa.NAME = "ChromeCastWrapper";
        Sa.prototype.buttonId = "chromecastBtn";
        Sa.prototype.plugin = null;
        Sa.prototype.flashView = {
            elements: {
                controls: {
                    elements: {
                        chromecastBtn: {}
                    }
                }
            }
        };
        Sa.prototype.listNotificationInterests = function() {
            return Sa.__super__.listNotificationInterests.call(this).concat([q.ELEMENT_EVENT, q.LOAD_STATE_READY, q.LOAD_STATE_LOADING, q.APPLICATION_STATE_CHANGE, pc.AVAILABILITY_CHANGE])
        };
        Sa.prototype.handleNotification = function(a) {
            var b, c;
            Sa.__super__.handleNotification.call(this,
                a);
            b = a.getName();
            a = a.getBody();
            switch (b) {
                case q.ELEMENT_EVENT:
                    "click" === a.type && a.element === this.buttonId && this.plugin.sendNotification(pc.LAUNCH);
                    break;
                case pc.AVAILABILITY_CHANGE:
                    null != (null != (c = this.player.mediaElement) ? c.setPlayerProperty : void 0) && this.player.mediaElement.setPlayerProperty(this.buttonId, {
                        visible: a
                    });
                    break;
                case q.APPLICATION_STATE_CHANGE:
                case q.LOAD_STATE_READY:
                case q.LOAD_STATE_LOADING:
                    (b = this.plugin.isReceiverAvailable()) && this.player.mediaElement.setPlayerProperty(this.buttonId, {
                        state: 1
                    }), this.player.mediaElement.setPlayerProperty(this.buttonId, {
                        visible: b
                    })
            }
        };
        Sa.prototype.play = function() {
            this.plugin.play()
        };
        Sa.prototype.pause = function() {
            this.plugin.pause()
        };
        Sa.prototype.setCurrentTime = function(a) {
            this.plugin.setCurrentTime(a);
            return a
        };
        Sa.prototype.getMedia = function() {
            return this.plugin.getMedia()
        };
        Sa.prototype.getSession = function() {
            return this.plugin.getSession()
        };
        Sa.prototype.getMediaManager = function() {
            return this.plugin.getMediaManager()
        };
        Sa.prototype.getCastReceiverManager =
            function() {
                return this.plugin.getCastReceiverManager()
            };
        Sa.prototype.getCastMessageBus = function() {
            return this.plugin.getCastMessageBuses()
        };
        Sa.prototype.postMessage = function(a) {
            this.plugin.postMessage(a)
        };
        l.registerPlugin("chromecast", "flash", Sa);
        var ud = function() {
            ud.__super__.constructor.call(this)
        };
        f(ud, M);
        ud.prototype.moduleName = "moat";
        ud.prototype.createModel = function() {
            this.proxy = new Hd(this.config);
            this.registerProxy(this.proxy)
        };
        ud.prototype.createController = function() {
            ud.__super__.createController.call(this);
            return this.registerCommand(k.AD_MANAGER_LOADED, xh)
        };
        ud.prototype.listNotificationInterests = function() {
            return [k.AD_MANAGER_LOADED]
        };
        l.registerPlugin("moat", "html", ud);
        l.registerPlugin("moat", "flash", qe);
        var Fb = function(a, b) {
            var c, d;
            if (/CrKey/.test(navigator.userAgent) && "undefined" !== typeof cast && null !== cast) {
                Fb.__super__.constructor.call(this);
                this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
                this.castReceiverManager.onReady = this.dispatchEvent.bind(this, {
                    type: "ready"
                });
                this.castReceiverManager.onSenderConnected =
                    this.dispatchEvent.bind(this, {
                        type: "senderconnected"
                    });
                this.castReceiverManager.onSenderDisconnected = this.dispatchEvent.bind(this, {
                    type: "senderdisconnected"
                });
                this.castReceiverManager.onShutdown = this.dispatchEvent.bind(this, {
                    type: "shutdown"
                });
                this.castReceiverManager.onStandbyChanged = this.dispatchEvent.bind(this, {
                    type: "standbychange"
                });
                this.castReceiverManager.onSystemVolumeChanged = this.dispatchEvent.bind(this, {
                    type: "systemvolumechanged"
                });
                this.castReceiverManager.onVisibilityChanged = this.dispatchEvent.bind(this, {
                    type: "visibilitychanged"
                });
                this.player = new T(this);
                this.mediaManager = new cast.receiver.MediaManager(this.player);
                null == b && (b = {});
                b["urn:x-cast:com.akamai.amp.cast"] = cast.receiver.CastMessageBus.MessageType.JSON;
                this.castMessageBuses = {};
                for (c in b) d = b[c], this.castMessageBuses[c] = this.castReceiverManager.getCastMessageBus(c, d), this.castMessageBuses[c].addEventListener("message", this.dispatchEvent.bind(this));
                this.castReceiverManager.start(a)
            }
        };
        f(Fb, ib);
        Fb.prototype.castReceiverManager = null;
        Fb.prototype.mediaManager =
            null;
        Fb.prototype.castMessageBuses = null;
        Fb.prototype.player = null;
        Fb.prototype.isSender = function() {
            return !this.isReceiver() && /Chrome/.test(navigator.userAgent)
        };
        Fb.prototype.isReceiver = function() {
            return /CrKey/.test(navigator.userAgent)
        };
        Fb.getInstance = function() {
            return this.instance
        };
        Fb.instance = new Fb;
        var sc = function() {
            sc.__super__.constructor.call(this)
        };
        f(sc, M);
        sc.prototype.moduleName = "dash";
        sc.prototype.createModel = function() {
            this.registerProxy(new re(this.config))
        };
        sc.prototype.getPlaybackProxy =
            function() {
                return this.proxy.playbackProxy
            };
        sc.prototype.getInstance = function() {
            return this.getPlaybackProxy().player
        };
        sc.prototype.registered = function() {
            this.player.registerCommand(d.CHANGE_DISPLAY_STATE, yh);
            sc.__super__.registered.call(this)
        };
        sc.prototype.listNotificationPublications = function() {
            return sc.__super__.listNotificationPublications.call(this).concat([d.FRAGMENT_LOAD_START, d.FRAGMENT_LOADED])
        };
        l.registerPlugin("dash", "html", sc);
        var wf = function() {
            wf.__super__.constructor.call(this)
        };
        f(wf,
            M);
        wf.prototype.listNotificationPublications = function() {
            return wf.__super__.listNotificationPublications.apply(this, arguments).concat([d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE])
        };
        var Gb = function(a) {
            Gb.__super__.constructor.call(this, null, null, null, a, onclick)
        };
        f(Gb, Da);
        Gb.prototype.panel = null;
        Gb.prototype.timeout = null;
        Gb.prototype.closePanelDelayed = null;
        Gb.prototype.onRegister = function() {
            this.closePanelDelayed = this.delayedClosePanel.bind(this);
            "desktop" === g.getDevice() ?
                (this.onmouseleave = this.closePanelDelayed, this.onmouseenter = this.openPanel, this.onclick = this.clickHandler) : this.onclick = this.togglePanel;
            Gb.__super__.onRegister.call(this);
            this.sendNotification(d.ADD_CONTROL_STATE, "" + this.componentName + "-enabled");
            this.sendNotification(d.ADD_CONTROL, this.viewComponent)
        };
        Gb.prototype.openPanel = function() {
            clearTimeout(this.timeout);
            this.sendNotification(bb.OPEN_PANEL, this.panel);
            this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed)
        };
        Gb.prototype.closePanel =
            function() {
                g.isMouseOverElement(this.panel.viewComponent) || g.isMouseOverElement(this.viewComponent) || this.facade.player.retrieveProxy(B.NAME).getIsUserActive() || (this.panel.viewComponent.addEventListener("mouseleave", this.closePanelDelayed), this.sendNotification(bb.CLOSE_PANEL, this.panel))
            };
        Gb.prototype.delayedClosePanel = function() {
            this.timeout = setTimeout(this.closePanel.bind(this), 350)
        };
        Gb.prototype.togglePanel = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification(bb.TOGGLE_PANEL, this.panel)
        };
        Gb.prototype.clickPanel = function() {};
        var Jd = function(a) {
            Jd.__super__.constructor.call(this, a, null, null, null)
        };
        f(Jd, ba);
        Jd.prototype.componentType = "panel";
        Jd.prototype.control = null;
        Jd.prototype.onRegister = function() {
            Jd.__super__.onRegister.call(this);
            this.sendNotification(bb.ADD_PANEL, this)
        };
        var vd = function(a) {
            vd.__super__.constructor.call(this, a)
        };
        f(vd, R);
        vd.NAME = x.NAME;
        vd.prototype.loaded = !0;
        vd.prototype.controlName = null;
        vd.prototype.getControlName = function() {
            return this.controlName
        };
        vd.prototype.setControlName =
            function(a) {
                return this.controlName = a
            };
        var Kd = function(a) {
            Kd.__super__.constructor.call(this, a)
        };
        f(Kd, vd);
        Kd.NAME = x.NAME;
        Kd.prototype.hidden = !0;
        Kd.prototype.getHidden = function() {
            return this.hidden
        };
        Kd.prototype.setHidden = function(a) {
            return this.hidden = a
        };
        var Ld = function(a) {
            Ld.__super__.constructor.call(this, a)
        };
        f(Ld, Kd);
        Ld.NAME = x.NAME;
        Ld.prototype.controlName = "volume";
        Ld.prototype.defaults = {
            direction: "vertical"
        };
        Ld.prototype.getDirection = function() {
            return this.data.direction
        };
        var Fh = function(a, b) {
            null ==
            b && (b = {});
            Fh.__super__.constructor.call(this, a, b)
        };
        f(Fh, I);
        Fh.NAME = "VolumePanelWrapper";
        l.registerPlugin("volumepanel", "flash", Fh);
        var Gh = function(a) {
            Gh.__super__.constructor.call(this, a)
        };
        f(Gh, Gb);
        Gh.prototype.clickHandler = function() {
            this.sendNotification(d.TOGGLE_MUTED)
        };
        var wd = function(a, b) {
            wd.__super__.constructor.call(this, a, b)
        };
        f(wd, S);
        wd.prototype.componentName = "volume";
        wd.prototype.draggable = !0;
        wd.prototype.valueChanged = function() {
            this.sendNotification(d.CHANGE_VOLUME, this.value);
            this.sendNotification("updatesettings", {
                volume: this.value
            })
        };
        wd.prototype.listNotificationInterests = function() {
            return [d.VOLUME_CHANGE, d.READY]
        };
        wd.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case d.READY:
                    this.updateValue(this.facade.player.retrieveProxy(s.NAME).getVolume());
                    break;
                case d.VOLUME_CHANGE:
                    this.updateValue(a.getBody())
            }
        };
        var Za = function() {
            Za.__super__.constructor.call(this);
            this.controls = {}
        };
        f(Za, zb);
        Za.prototype.panel = null;
        Za.prototype.control = null;
        Za.prototype.separator = null;
        Za.prototype.controls = null;
        Za.prototype.labels =
            null;
        Za.prototype.closed = !0;
        Za.prototype.panelClass = Jd;
        Za.prototype.controlClass = Gb;
        Za.prototype.onRegister = function() {
            this.panel = this.createPanel(this.componentName);
            this.control = this.createControl(this.componentName);
            this.separator = this.createSeparator(this.componentName);
            this.panel.control = this.control;
            this.control.panel = this.panel;
            null == this.labels && (this.labels = {});
            this.createPanelControls(name)
        };
        Za.prototype.createControl = function(a) {
            a = new this.controlClass(a);
            this.facade.registerMediator(a);
            return a
        };
        Za.prototype.createPanel = function(a) {
            a = new this.panelClass(a);
            this.facade.registerMediator(a);
            return a
        };
        Za.prototype.createSeparator = function(a) {
            return this.create(["separator", "icon"], this.panel)
        };
        Za.prototype.createPanelControls = function(a) {
            var b, c, d;
            a = this.plugin.getConfigurationData();
            for (b in a) c = a[b], !0 === c && (this.controls[b] = this.addPanelControl(new Da(this.localizationManager.getString(this.labels[b]), null, null, b, null != (d = this.panelButtonClickHandler) ? "function" === typeof d.bind ?
                d.bind(this, b) : void 0 : void 0)))
        };
        Za.prototype.addPanelControl = function(a) {
            this.facade.registerMediator(a);
            this.panel.getViewComponent().appendChild(a.getViewComponent());
            return a
        };
        Za.prototype.panelButtonClickHandler = function() {
            this.sendNotification(bb.CLOSE_PANEL, this.panel)
        };
        var Hb = function() {
            Hb.__super__.constructor.call(this)
        };
        f(Hb, Za);
        Hb.prototype.componentName = "volume";
        Hb.prototype.slider = null;
        Hb.prototype.level = null;
        Hb.prototype.controlClass = Gh;
        Hb.prototype.onRegister = function() {
            Hb.__super__.onRegister.call(this);
            this.slider = new wd(this.panel, this.plugin.getDirection());
            this.facade.registerMediator(this.slider)
        };
        Hb.prototype.updateVolumeButton = function(a) {
            a = Math.ceil(10 * a);
            a !== this.level && (null != this.level && this.sendNotification(d.REMOVE_CONTROL_STATE, "volume-" + this.level), this.level = a, this.sendNotification(d.ADD_CONTROL_STATE, "volume-" + this.level))
        };
        Hb.prototype.listNotificationInterests = function() {
            return Hb.__super__.listNotificationInterests.apply(this, arguments).concat([d.VOLUME_CHANGE])
        };
        Hb.prototype.handleNotification =
            function(a) {
                Hb.__super__.handleNotification.call(this, a);
                switch (a.getName()) {
                    case d.VOLUME_CHANGE:
                        this.updateVolumeButton(a.body)
                }
            };
        var xf = function() {
            xf.__super__.constructor.call(this)
        };
        f(xf, wf);
        xf.prototype.listNotificationPublications = function() {
            var a, b;
            return xf.__super__.listNotificationPublications.call(this).concat(function() {
                var c;
                c = [];
                for (a in bb) b = bb[a], c.push(b);
                return c
            }())
        };
        var xd = function(a) {
            xd.__super__.constructor.call(this, a)
        };
        f(xd, zb);
        xd.prototype.componentName = "playlist";
        xd.prototype.playlistButton =
            null;
        xd.prototype.onRegister = function() {
            var a;
            a = new Da(null, this.viewComponent, null, "playlist", this.playlistOnClick.bind(this));
            this.facade.registerMediator(a);
            this.playlistButton = a.getViewComponent();
            this.sendNotification(d.ADD_CONTROL, this.playlistButton);
            this.sendNotification(d.ADD_CONTROL_STATE, "playlist-enabled");
            xd.__super__.onRegister.call(this)
        };
        xd.prototype.playlistOnClick = function(a) {
            this.facade.logger.debug("AMP Event: Playlist Clicked")
        };
        var Zb = function() {
            Zb.__super__.constructor.call(this)
        };
        f(Zb, xf);
        Zb.prototype.moduleName = "volumepanel";
        Zb.prototype.createFramework = function() {
            g.isVolumeSettable() && Zb.__super__.createFramework.call(this)
        };
        Zb.prototype.createModel = function() {
            this.registerProxy(new Ld(this.config))
        };
        Zb.prototype.createView = function() {
            g.isVolumeSettable() && this.registerMediator(new Hb)
        };
        Zb.prototype.listNotificationPublications = function() {
            return Zb.__super__.listNotificationPublications.apply(this, arguments).concat([d.CHANGE_VOLUME, d.TOGGLE_MUTED, "updatesettings"])
        };
        Zb.prototype.listNotificationInterests =
            function() {
                return Zb.__super__.listNotificationInterests.apply(this, arguments).concat([d.VOLUME_CHANGE, d.READY])
            };
        l.registerPlugin("volumepanel", "html", Zb);
        var Md = function(a) {
            Md.__super__.constructor.call(this, a)
        };
        f(Md, Ua);
        Md.NAME = x.NAME;
        Md.prototype.data = {
            url: null,
            target: null,
            apiKey: null,
            jsWidgetId: null
        };
        Md.prototype.createRecommendations = function(a) {
            var b, c, d, f;
            c = [];
            f = a.documents.doc;
            a = 0;
            for (d = f.length; a < d; a++) b = f[a], b = new lc(b.video.id, b.url, b.video.title, b.video.title, b.thumbnail.url, 0, null, this.getTarget(),
                b), c.push(b);
            return c
        };
        Md.prototype.getURL = function() {
            var a, b, c;
            c = encodeURIComponent(this.data.jsWidgetId);
            b = encodeURIComponent(this.data.apiKey);
            a = encodeURIComponent(document.location.href);
            return this.data.url + "?format\x3djson\x26widgetJSId\x3d" + c + "\x26settings\x3dfalse\x26url\x3d" + a + "\x26idx\x3d0\x26key\x3d" + b + "\x26rand\x3d" + Date.now() + "\x26recs\x3dtrue"
        };
        var Nd = function(a, b) {
            null == b && (b = {});
            Nd.__super__.constructor.call(this, a, b)
        };
        f(Nd, Ga);
        Nd.NAME = "OutbrainWrapper";
        Nd.prototype.createFlashVars =
            function(a) {
                Nd.__super__.createFlashVars.call(this, a);
                a.recommendations_partner = "outbrain";
                return a
            };
        Nd.prototype.createXML = function(a) {
            var b, c, d, f, g;
            b = a.firstChild;
            c = a.getElementsByTagName("recommendations")[0];
            null == c && (c = a.createElement("recommendations"), b.appendChild(c));
            b = a.createElement("vendor");
            b.setAttribute("id", "outbrain");
            c.appendChild(b);
            d = [{
                value: this.config.url,
                key: "OUTBRAIN_BASE_URL"
            }, {
                value: this.config.apiKey,
                key: "OUTBRAIN_API_KEY"
            }, {
                value: this.config.jsWidgetId,
                key: "OUTBRAIN_WIDGET_JS_ID"
            }, {
                value: this.config.mode,
                key: "OUTBRAIN_MODE"
            }, {
                value: this.config.playerSrcId,
                key: "OUTBRAIN_PLAYER_SRC_ID"
            }, {
                value: "internal",
                key: "OUTBRAIN_VIEW_PROVIDER"
            }, {
                value: this.config.videoData,
                key: "videoData"
            }];
            f = 0;
            for (g = d.length; f < g; f++) c = d[f], null != c.value && this.createProperty(a, c.key, c.value, b);
            return a
        };
        var Od = function() {
            Od.__super__.constructor.call(this)
        };
        f(Od, M);
        Od.prototype.moduleName = "playlist";
        Od.prototype.createView = function() {
            this.registerMediator(new xd)
        };
        Od.prototype.listNotificationPublications =
            function() {
                return Od.__super__.listNotificationPublications.call(this).concat([d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE])
            };
        l.registerPlugin("playlist", "html", Od);
        var yf = function() {
            return yf.__super__.constructor.apply(this, arguments)
        };
        f(yf, I);
        yf.NAME = "AdChoicesWrapper";
        yf.prototype.flashView = {
            elements: {
                adOptions: {
                    elements: {
                        adChoices: {
                            attributes: {
                                target: "http://www.akamai.com/"
                            }
                        }
                    }
                }
            }
        };
        var tc = function() {
            tc.__super__.constructor.call(this)
        };
        f(tc, ba);
        tc.prototype.componentName =
            "ad-choices";
        tc.prototype.icon = null;
        tc.prototype.text = null;
        tc.prototype.container = null;
        tc.prototype.onRegister = function() {
            var a;
            tc.__super__.onRegister.call(this);
            a = this.facade.retrieveProxy(x.NAME);
            this.container = this.create("ad-choices-link", this, "a");
            this.container.target = "_blank";
            this.container.href = a.getTarget();
            this.text = this.createText("ad-choices-text", "AdChoices", this.container);
            this.icon = this.create("ad-choices-icon", this.container)
        };
        tc.prototype.listNotificationInterests = function() {
            return [k.AD_CONTAINER_CREATED]
        };
        tc.prototype.handleNotification = function(a) {
            switch (a.getName()) {
                case k.AD_CONTAINER_CREATED:
                    a = a.getBody(), null != a && a.appendChild(this.viewComponent)
            }
        };
        var Pd = function(a) {
            Pd.__super__.constructor.call(this, a)
        };
        f(Pd, x);
        Pd.NAME = x.NAME;
        Pd.prototype.defaults = {
            target: null
        };
        Pd.prototype.getTarget = function() {
            return this.data.target
        };
        Pd.prototype.setTarget = function(a) {
            return this.data.target = a
        };
        var te = function() {
            te.__super__.constructor.call(this)
        };
        f(te, Pa);
        te.prototype.moduleName = "outbrain";
        te.prototype.createModel =
            function() {
                te.__super__.createModel.call(this);
                this.registerProxy(new Md(this.config))
            };
        l.registerPlugin("outbrain", "html", te);
        l.registerPlugin("outbrain", "flash", Nd);
        var zf = function(a, b) {
            zf.__super__.constructor.call(this, a, b)
        };
        f(zf, I);
        zf.NAME = "UplynkWrapper";
        zf.prototype.flashPlugins = [{
            id: "UplynkStreamingPlugin",
            src: "#{paths.resources}plugins/latest_upLynkOsmfPlugin.swf",
            host: "osmf",
            main: "#{paths.resources}plugins/latest_upLynkOsmfPlugin.swf",
            type: "application/x-shockwave-flash"
        }];
        var Qd = function() {
            Qd.__super__.constructor.call(this)
        };
        f(Qd, M);
        Qd.prototype.moduleName = "adchoices";
        Qd.prototype.createModel = function() {
            this.registerProxy(new Pd(this.config))
        };
        Qd.prototype.createView = function() {
            this.registerMediator(new tc)
        };
        Qd.prototype.listNotificationInterests = function() {
            return [k.AD_CONTAINER_CREATED]
        };
        l.registerPlugin("adchoices", "html", Qd);
        l.registerPlugin("adchoices", "flash", yf);
        var Af = function(a, b) {
            Af.__super__.constructor.call(this, a, b)
        };
        f(Af, I);
        Af.NAME = "OctoshapeWrapper";
        Af.prototype.flashPlugins = [{
            id: "OctoShapeStreamingPlugin",
            src: "#{paths.resources}plugins/infinitehd-osmf-plugin-1511180@v330-OSMF_1_6_MA.swf",
            host: "osmf",
            main: "com.octoshape.osmf.streamingplugin.OctoshapeStreamingPluginInfo"
        }];
        l.registerPlugin("octoshape", "flash", Af);
        var Hh = function() {
            Hh.__super__.constructor.call(this)
        };
        f(Hh, M);
        Hh.prototype.moduleName = "uplynk";
        l.registerPlugin("uplynk", "html", Hh);
        l.registerPlugin("uplynk", "flash", zf);
        var Bf = function(a, b) {
            Bf.__super__.constructor.call(this, a, b)
        };
        f(Bf, I);
        Bf.NAME = "CustomAuthWrapper";
        Bf.prototype.flashPlugins = [{
            id: "AuthenticationSamplePlugin",
            src: "#{paths.resources}plugins/AuthenticationSamplePlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "AuthenticationSamplePlugin",
            type: "application/x-shockwave-flash"
        }];
        l.registerPlugin("customauth", "flash", Bf);
        var Ih = function() {
            Ih.__super__.constructor.call(this)
        };
        f(Ih, M);
        Ih.prototype.moduleName = "octoshape";
        l.registerPlugin("octoshape", "html", Ih);
        var Cf = function(a, b) {
            null == b && (b = {});
            Cf.__super__.constructor.call(this, a, b)
        };
        f(Cf, I);
        Cf.NAME = "LinkedMenuWrapper";
        Cf.prototype.flashPlugins = [{
            id: "LinkedMenuPlugin",
            src: "#{paths.resources}plugins/LinkedMenuPlugin.swf",
            blocking: !1,
            host: "akamai",
            main: "LinkedMenuPlugin"
        }];
        l.registerPlugin("linkedmenu", "flash", Cf);
        var Jh = function() {
            Jh.__super__.constructor.call(this)
        };
        f(Jh, M);
        Jh.prototype.moduleName = "customauth";
        l.registerPlugin("customauth", "html", Jh);
        var uc = function(a) {
            this.name = this.playbackCoreName + "-" + Date.now();
            uc.__super__.constructor.call(this, a.types)
        };
        f(uc, ya);
        uc.prototype.playbackCoreName = "rapt";
        uc.prototype.mediaElement = null;
        uc.prototype.mediator =
            null;
        uc.prototype.getMediaElement = function() {
            return this.mediaElement
        };
        uc.prototype.onRegister = function() {
            var a;
            null == this.mediator && (this.mediator = new ec("rapt", "iframe"), this.mediator.onRegister(), a = this.mediator.getViewComponent(), a.player = this.facade, a.name = this.name, a.setAttribute("allowfullscreen", "true"), a.setAttribute("webkitallowfullscreen", "true"), a.setAttribute("mozallowfullscreen", "true"), a.setAttribute("scrolling", "no"), a.setAttribute("frameborder", "0"), a.setAttribute("marginwidth", "0"),
                a.setAttribute("marginheight", "0"), this.sendNotification(d.PLAYBACK_CORE_CHANGE, this.mediator), this.mediaElement = new $b(this.name), this.mediaElement.addEventListener("interactivebreakstart", this.oninteractivebreakstart.bind(this)), this.mediaElement.addEventListener("interactivebreakend", this.oninteractivebreakend.bind(this)), this.initialized = !0)
        };
        uc.prototype.replay = function() {
            this.mediaElement.replay()
        };
        uc.prototype.oninteractivebreakstart = function() {
            this.sendNotification(d.ADD_APPLICATION_STATE,
                "interactive")
        };
        uc.prototype.oninteractivebreakend = function() {
            this.sendNotification(d.REMOVE_APPLICATION_STATE, "interactive")
        };
        var $b = function(a) {
            var b = this;
            this.name = a;
            this.data = {
                paused: !1,
                ended: !1,
                error: null,
                duration: 0,
                currentTime: 0,
                src: null
            };
            this.startNode = null;
            this.iframe = document.querySelector("iframe[name\x3d" + this.name + "]");
            this.iframe.video = this;
            this.iframe.onload = function() {
                raptor.api.init(b.iframe)
            };
            raptor.api.on("ready", function(a, d) {
                raptor.settings("defaultIFrame", b.name);
                raptor.api.load()
            });
            raptor.api.on("play", function(a, d) {
                d.frameName === b.name && (b.data.paused = !1, b.dispatchEvent("play"), b.dispatchEvent("playing"))
            });
            raptor.api.on("pause", function(a, d) {
                d.frameName === b.name && (b.updateData(), b.data.paused = !0, b.dispatchEvent("pause"))
            });
            raptor.api.on("error", function(a, d) {
                d.frameName === b.name && (b.data.error = d, b.dispatchEvent("error"))
            });
            raptor.api.on("inboundReady", function(a, d) {
                d && d.frameName !== b.name || (b.updateData(), b.dispatchEvent("loadedmetadata"), b.dispatchEvent("canplaythrough"))
            });
            raptor.api.on("timeUpdate", function(a, d) {
                d && d.frameName !== b.name || b.updateData(d)
            });
            raptor.api.on("clipEnd", function(a, d) {
                d && d.frameName !== b.name || b.dispatchEvent("interactivebreakstart")
            });
            raptor.api.on("clipStart", function(a, d) {
                d && d.frameName !== b.name || ("true" === d.isStart && (b.startNode = raptor.api.nodes(b.name)[d.clipname]), b.dispatchEvent("interactivebreakend"))
            });
            raptor.api.on("projectEnd", function(a, d) {
                d && d.frameName !== b.name || (b.data.ended = !0, b.dispatchEvent("ended"))
            });
            a = function(a, b) {
                console.log("RAPT: ",
                    a.type, a, b)
            };
            raptor.api.on("inboundReady", a);
            raptor.api.on("play", a);
            raptor.api.on("pause", a);
            raptor.api.on("error", a);
            raptor.api.on("clipStart", a);
            raptor.api.on("clipEnd", a);
            raptor.api.on("clipSwitch", a);
            raptor.api.on("projectStart", a);
            raptor.api.on("projectEnd", a);
            raptor.api.on("progress", a);
            raptor.api.on("button", a);
            raptor.api.on("windowed", a);
            raptor.api.on("userTimed", a);
            raptor.api.on("fullscreen", a);
            raptor.api.on("volume", a);
            raptor.api.on("mute", a);
            raptor.api.on("unmute", a)
        };
        $b.prototype.updateData =
            function(a) {
                var b;
                null == a && (a = raptor.api.state(this.name));
                null != a && (b = parseFloat(a.duration), b !== this.data.duration && (this.data.duration = b, this.dispatchEvent("durationchange")), b = parseFloat(a.time || a.progressTime), b !== this.data.currentTime && (this.data.currentTime = b, this.dispatchEvent("timeupdate")))
            };
        $b.prototype.load = function() {
            this.iframe.src = this.src
        };
        $b.prototype.play = function() {
            raptor.api.play(this.name)
        };
        $b.prototype.pause = function() {
            raptor.api.pause(this.name);
            this.updateData()
        };
        $b.prototype.replay =
            function() {
                raptor.api.setNode(this.startNode, this.name)
            };
        $b.prototype.canPlayType = function(a) {
            return "application/rapt" === a ? "maybe" : ""
        };
        $b.prototype.addEventListener = function(a, b, c) {
            this.iframe.addEventListener(a, b, c)
        };
        $b.prototype.once = function(a, b) {
            this.iframe.once(a, b)
        };
        $b.prototype.dispatchEvent = function(a) {
            "string" === typeof a && (a = new CustomEvent(a));
            return this.iframe.dispatchEvent(a)
        };
        $b.prototype.removeEventListener = function(a, b, c) {
            this.iframe.removeEventListener(a, b, c)
        };
        null != Object.defineProperties &&
        Object.defineProperties($b.prototype, {
            src: {
                set: function(a) {
                    this.data.src = a
                },
                get: function() {
                    return this.data.src
                }
            },
            currentTime: {
                set: function(a) {
                    raptor.api.setTime(a, this.name)
                },
                get: function() {
                    return this.data.currentTime
                }
            },
            duration: {
                get: function() {
                    return this.data.duration
                }
            },
            paused: {
                get: function() {
                    return this.data.paused
                }
            },
            ended: {
                get: function() {
                    return this.data.ended
                }
            },
            error: {
                get: function() {
                    return this.data.error
                }
            },
            readyState: {
                get: function() {
                    return 1
                }
            }
        });
        var Rd = function(a) {
            Rd.__super__.constructor.call(this,
                a)
        };
        f(Rd, R);
        Rd.NAME = x.NAME;
        Rd.prototype.defaults = {
            types: ["application/rapt"]
        };
        Rd.prototype.player = null;
        Rd.prototype.initialize = function() {
            this.sendNotification(d.INITIALIZED);
            this.player = new uc(this.getConfigurationData());
            this.facade.player.retrieveProxy(da.NAME).registerPlaybackCore(this.player)
        };
        var Kh = function() {
            Kh.__super__.constructor.call(this)
        };
        f(Kh, M);
        Kh.prototype.moduleName = "linkedmenu";
        l.registerPlugin("linkedmenu", "html", Kh);
        var Y = function(a, b) {
            this.plugin = b;
            Y.__super__.constructor.call(this,
                a.types, a);
            this.temporalTypes = ["vod", "live", "dvr"]
        };
        f(Y, ya);
        Y.prototype.playbackCoreName = "hls";
        Y.prototype.player = null;
        Y.prototype.hlsConfig = null;
        Y.prototype.fragErrorTime = 0;
        Y.prototype.timedMedatadata = null;
        Y.prototype.currentMedatadata = null;
        Y.prototype.id3Track = null;
        Y.prototype.manifestParsed = !1;
        Y.prototype.getConfig = function() {
            var a;
            a = g.clone(this.config.data);
            !0 === a.withCredentials && (a.xhrSetup = function(a, c) {
                a.withCredentials = !0
            });
            return a
        };
        Y.prototype.load = function() {
            var a, b, c, d, f, g = this;
            null !=
            this.player && this.destroy();
            this.manifestParsed = !1;
            c = !1 !== (null != (a = this.config.mae) ? a.enabled : void 0) && "undefined" !== typeof MediaAccelerationHlsJsWrapper && null !== MediaAccelerationHlsJsWrapper;
            a = this.getConfig();
            c ? (c = this.config.mae, a = new MediaAccelerationHlsJsWrapper(c, a), a = a.getPlayer()) : a = new Hls(a);
            a.attachMedia(this.getMediaElement());
            c = Hls.Events;
            for (b in c) d = c[b], a.on(d, function(a, b) {
                g.plugin.dispatcher.dispatchEvent(new V(a, b))
            });
            a.on(Hls.Events.MANIFEST_PARSED, this.onManifestParsed.bind(this));
            a.on(Hls.Events.ERROR, this.onError.bind(this));
            a.on(Hls.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata.bind(this));
            a.on(Hls.Events.LEVEL_LOADED, this.onLevelLoaded.bind(this));
            a.on(Hls.Events.LEVEL_SWITCH, this.onLevelSwitch.bind(this));
            a.on(Hls.Events.FRAG_LOADING, this.onFragmentLoadStart.bind(this));
            a.on(Hls.Events.FRAG_LOADED, this.onFragmentLoaded.bind(this));
            try {
                for (b in f = this.config.quality, f) d = f[b], a[b] = d
            } catch (h) {}
            this.player = a;
            Y.__super__.load.call(this)
        };
        Y.prototype.applyTextTrackHandlers =
            function(a) {
                if (null == this.id3Track || !a) {
                    Y.__super__.applyTextTrackHandlers.call(this, a);
                    if (!1 === a) return this.id3Track = null;
                    this.addMTextTrack()
                }
            };
        Y.prototype.addMTextTrack = function() {
            null != this.getMediaElement().addTextTrack && null == this.id3Track && (this.id3Track = this.getMediaElement().addTextTrack("metadata"))
        };
        Y.prototype.applySrc = function() {
            this.currentMedatadata = null;
            this.player.loadSource(this.getSrc());
            this.getMediaElement().load()
        };
        Y.prototype.onManifestParsed = function(a, b) {
            this.manifestParsed = !0;
            this.sendNotification(d.BITRATE_LEVELS_LOADED, b);
            this.player.loadLevel = -1
        };
        Y.prototype.onLevelLoaded = function(a, b) {
            this.player.levels[b.level].level = b.level;
            this.sendNotification(d.BITRATE_CHANGE, this.player.levels[b.level]);
            !0 === b.details.live && this.facade.mediaProxy.setTemporalType("live")
        };
        Y.prototype.onLevelSwitch = function(a, b) {
            this.sendNotification(d.BITRATE_CHANGING, this.player.levels[b.level])
        };
        Y.prototype.onFragParsingMetadata = function(a, b) {
            var c, d, f, g, h, k, l;
            null == this.id3Track && this.applyTextTrackHandlers(!0);
            k = b.samples;
            g = 0;
            for (h = k.length; g < h; g++)
                if (b = k[g], f = b.dts, null != (null != b ? b.data : void 0)) {
                    d = String.fromCharCode.apply(null, b.data.subarray(0, -1));
                    d = d.replace(/\0/g, "");
                    d = {
                        startTime: f,
                        endTime: f,
                        key: d.replace(/(\S*)\{.*/, "$1").split(" ")[1],
                        info: d.replace(/[^\{]+\{/, ""),
                        data: b
                    };
                    try {
                        c = window.VTTCue || window.TextTrackCue, window.TextTrackCue === c && (d.endTime += 0.5), null != (l = this.id3Track) && l.addCue(new c(d.startTime, d.endTime, JSON.stringify(d)))
                    } catch (m) {}
                }
        };
        Y.prototype.onFragmentLoadStart = function(a, b) {
            this.sendNotification(d.FRAGMENT_LOAD_START,
                this.player.levels[b.frag.level].bitrate)
        };
        Y.prototype.onFragmentLoaded = function(a, b) {
            this.sendNotification(d.FRAGMENT_LOADED, this.player.levels[b.frag.level].bitrate)
        };
        Y.prototype.seek = function(a) {
            return Y.__super__.seek.call(this, a + this.getStartTime())
        };
        Y.prototype.getCurrentTime = function() {
            return this.getMediaElement().currentTime - this.getStartTime()
        };
        Y.prototype.getDuration = function() {
            var a, b, c, d;
            return (null != (a = this.player) ? null != (b = a.levels) ? null != (c = b[this.player.currentLevel]) ? null != (d = c.details) ?
                    d.totalduration : void 0 : void 0 : void 0 : void 0) || this.getMediaElement().duration
        };
        Y.prototype.getStartTime = function() {
            return this.getMediaElement().duration - this.getDuration()
        };
        Y.prototype.onplaying = function(a) {
            Y.__super__.onplaying.call(this);
            this.retried = !1
        };
        Y.prototype.onError = function(a, b) {
            this.plugin.sendNotification(d.DISPATCH_EVENT, new V("error", b));
            if (!1 === this.config.retryOnError || !0 === this.retried) this.retried = !1, this.error(b);
            else if (b.fatal) switch (b.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    this.retried = !0;
                    this.manifestParsed ? this.player.startLoad() : this.player.loadSource(this.getSrc());
                    this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", a);
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    this.retried = !0;
                    this.player.recoverMediaError();
                    this.facade.logger.error("[AMP HLS] Playback Error trying to recover:", a);
                    break;
                default:
                    this.facade.logger.error("[AMP HLS] Playback Error:", a), this.error(b)
            } else b.details === Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR && (this.fragErrorTime === this.getMediaElement().currentTime ?
                (this.getMediaElement().currentTime++, this.facade.logger.error("[AMP HLS] Frag Loop Load Error, Seeking to :", this.getMediaElement().currentTime)) : this.fragErrorTime = this.getMediaElement().currentTime)
        };
        Y.prototype.error = function(a) {
            switch (a.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    a.code = MediaError.MEDIA_ERR_NETWORK;
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    a.code = MediaError.MEDIA_ERR_DECODE;
                    break;
                default:
                    a.toString = function() {
                        return a.details
                    }
            }
            this.sendNotification(d.ERROR, a)
        };
        Y.prototype.setQuality =
            function(a) {
                var b;
                return null != (b = this.player) ? b.currentLevel = a : void 0
            };
        Y.prototype.getQuality = function() {
            var a;
            return null != (a = this.player) ? a.currentLevel : void 0
        };
        Y.prototype.getQualityLevels = function() {
            var a;
            return (null != (a = this.player) ? a.levels : void 0) || Y.__super__.getQualityLevels.call(this)
        };
        Y.prototype.destroy = function() {
            null != this.player && (this.player.destroy(), this.player = null)
        };
        var Df = function(a, b) {
            Df.__super__.constructor.call(this, a, b);
            g.flashTypes.push(g.mimeTypes.m3u8)
        };
        f(Df, I);
        Df.NAME =
            "HLSWrapper";
        Df.prototype.flashPlugins = [{
            id: "flashlsOSMF",
            src: "#{paths.resources}plugins/flashlsOSMF.swf",
            host: "osmf",
            type: "application/x-shockwave-flash"
        }];
        l.registerPlugin("hls", "flash", Df);
        var Lh = function() {
            Lh.__super__.constructor.call(this)
        };
        f(Lh, A);
        Lh.prototype.execute = function(a) {
            var b;
            "freewheel" === (null != (b = a.getBody()) ? b.partner : void 0) && this.proxy.destroy()
        };
        var ue = function(a) {
            ue.__super__.constructor.call(this, a)
        };
        f(ue, cd);
        ue.NAME = x.NAME;
        ue.prototype.defaults = {
            types: ["application/x-mpegURL"],
            data: {
                enableWorker: !0,
                enableSoftwareAES: !0,
                enableCEA708Captions: !0
            },
            mae: null,
            buffer: null,
            quality: null,
            withCredentials: null
        };
        ue.prototype.createPlaybackProxy = function() {
            if (null != (window.MediaSource || window.WebKitMediaSource) && Hls.isSupported()) return new Y(this.getConfigurationData(), this.facade)
        };
        var Ef = function() {
            Ef.__super__.constructor.call(this)
        };
        f(Ef, M);
        Ef.prototype.moduleName = "rapt";
        Ef.prototype.createModel = function() {
            this.registerProxy(new Rd(this.config))
        };
        l.registerPlugin("rapt", "html", Ef);
        var Z = function(a) {
            Z.__super__.constructor.call(this, a)
        };
        f(Z, R);
        Z.NAME = x.NAME;
        Z.prototype.defaults = {
            data: null,
            events: null,
            plugin: {
                js: "//secure-dcr-cert.imrworldwide.com/novms/js/2/ggcmb500.js"
            }
        };
        Z.prototype.nielsendcrSDK = null;
        Z.prototype.end_flag = !1;
        Z.prototype.mediaChange_flag = !1;
        Z.prototype.adVO = null;
        Z.prototype.cur_position = 0;
        Z.prototype.timer = null;
        Z.prototype.isLive = null;
        Z.prototype.isFlash = !1;
        Z.prototype.isDTVR = !1;
        Z.prototype.initialize = function() {
            var a;
            Z.__super__.initialize.call(this);
            this.nielsendcrSDK =
                window.NOLCMB.getInstance();
            this.isDTVR = !0 === (null != (a = this.value.data) ? a.dtvr : void 0);
            this.nielsendcrSDK.ggInitialize(this.value.data);
            this.facade.logger.log("[AMP Nielsen DCR Event] : SDKInitialize");
            this.isFlash = "flash" === this.facade.player.playerType;
            this.bindBeforeUnload()
        };
        Z.prototype.generateNielsenVO = function(a) {
            var b;
            b = {};
            switch (a) {
                case "content":
                    null != this.value.events.video && (b = this.value.events.video);
                    break;
                case "static":
                    b = this.value.events["static"];
                    break;
                default:
                    b = this.value.events.ad,
                        b.type = a
            }
            return b
        };
        Z.prototype.fireBeacon = function(a, b) {
            var c;
            switch (a) {
                case "loadmetadata":
                    c = 15;
                    break;
                case "play":
                    c = 5;
                    break;
                case "stop":
                    c = 7;
                    break;
                case "timeupdate":
                    c = 49;
                    break;
                case "end":
                    c = 57;
                    break;
                case "sendID3":
                    c = 55
            }
            this.facade.logger.log("[AMP Nielsen DCR Event] : Event - " + a, b);
            this.nielsendcrSDK.ggPM(c, b)
        };
        Z.prototype.bindBeforeUnload = function() {
            window.addEventListener("beforeunload", function() {
                return this.fireBeacon("end", this.cur_position.toFixed(0))
            })
        };
        Z.prototype.adStart = function(a) {
            this.adVO =
                a;
            "midroll" === this.adVO.type && 1 === this.adVO.position && this.fireBeacon("stop", this.cur_position.toFixed(0));
            "preroll" === this.adVO.type && this.fireBeacon("loadmetadata", this.generateNielsenVO("content"));
            null != this.adVO && ("postroll" === this.adVO.type && this.isFlash && this.end(), this.fireBeacon("loadmetadata", this.generateNielsenVO(a.type)))
        };
        Z.prototype.adEnd = function(a) {
            this.fireBeacon("stop", this.cur_position.toFixed(0));
            "midroll" === (null != a ? a.type : void 0) && a.totalAds === a.position && this.fireBeacon("loadmetadata",
                this.generateNielsenVO("content"))
        };
        Z.prototype.staticStart = function() {};
        Z.prototype.start = function(a) {
            var b;
            "midroll" === (null != (b = this.adVO) ? b.type : void 0) ? this.fireBeacon("stop", this.generateNielsenVO(this.adVO.type)): (this.fireBeacon("loadmetadata", this.generateNielsenVO("content")), this.end_flag = this.mediaChange_flag = !0)
        };
        Z.prototype.end = function() {
            this.end_flag && this.fireBeacon("end", this.cur_position.toFixed(0));
            this.end_flag = !1
        };
        Z.prototype.mediaChange = function() {
            this.mediaChange_flag && this.fireBeacon("end",
                this.cur_position.toFixed(0))
        };
        Z.prototype.id3Update = function(a) {
            this.isDTVR && this.fireBeacon("sendID3", a.body.info)
        };
        Z.prototype.timeupdate = function(a) {
            var b;
            this.isFlash ? (b = a.body.currentTime, a = a.name === ka.AD_TIME_UPDATE) : (b = a.body, a = a.name === k.AD_TIME_REMAINING);
            this.isLive() && !a ? this.fireBeacon("timeupdate", Math.floor(Date.now() / 1E3)) : (this.cur_position = a && !this.isFlash ? this.adVO.duration - b : b, this.timer === this.cur_position.toFixed(0) || a && (this.cur_position > this.adVO.duration || 1 > this.cur_position) ||
            (this.timer = this.cur_position.toFixed(0), this.fireBeacon("timeupdate", this.timer)))
        };
        Z.prototype.getPlayheadPosition = function() {
            return this.isLive() ? Math.floor(Date.now() / 1E3) : this.facade.player.getCurrentTime().toFixed(1)
        };
        Z.prototype.isLive = function() {
            return this.facade.player.getMedia().isLive
        };
        var Mh = function() {
            Mh.__super__.constructor.call(this)
        };
        f(Mh, puremvc.SimpleCommand);
        Mh.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).adStart(a.body)
        };
        var Nh = function() {
            Nh.__super__.constructor.call(this)
        };
        f(Nh, puremvc.SimpleCommand);
        Nh.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).adEnd(a.body)
        };
        var ui = function() {
            ui.__super__.constructor.call(this)
        };
        f(ui, puremvc.SimpleCommand);
        ui.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).staticStart()
        };
        var Oh = function() {
            Oh.__super__.constructor.call(this)
        };
        f(Oh, puremvc.SimpleCommand);
        Oh.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).start()
        };
        var Ph = function() {
            Ph.__super__.constructor.call(this)
        };
        f(Ph, puremvc.SimpleCommand);
        Ph.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).end()
        };
        var Sd = function() {
            Sd.__super__.constructor.call(this)
        };
        f(Sd, puremvc.SimpleCommand);
        Sd.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).timeupdate(a)
        };
        var Ff = function() {
            Ff.__super__.constructor.call(this)
        };
        f(Ff, puremvc.SimpleCommand);
        Ff.prototype.execute = function(a) {
            this.facade.retrieveProxy(Z.NAME).mediaChange()
        };
        var Qh = function() {
            Qh.__super__.constructor.call(this)
        };
        f(Qh, puremvc.SimpleCommand);
        Qh.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(Z.NAME).id3Update(a)
            };
        var Rh = function(a, b) {
            this.plugin = new ed;
            this.plugin.oninitialized = a.registerModule.bind(a, this.plugin);
            this.plugin.initialize(b, a);
            Rh.__super__.constructor.call(this, a, b)
        };
        f(Rh, I);
        Rh.NAME = "NielsendcrWrapper";
        var Gf = function() {
            Gf.__super__.constructor.call(this)
        };
        f(Gf, Da);
        Gf.prototype.componentName = "airplay";
        Gf.prototype.onclick = function(a) {
            a.stopImmediatePropagation();
            this.sendNotification("launch");
            return !1
        };
        var Sh = function() {
            Sh.__super__.constructor.call(this)
        };
        f(Sh, A);
        Sh.prototype.execute = function(a) {
            this.proxy.ready()
        };
        var Th = function() {
            Th.__super__.constructor.call(this)
        };
        f(Th, A);
        Th.prototype.execute = function(a) {
            this.proxy.launch()
        };
        var vc = function(a) {
            vc.__super__.constructor.call(this, a);
            this.handlers = {
                availabilitychanged: this.availabilitychanged.bind(this),
                playbacktargetchanged: this.playbacktargetchanged.bind(this)
            }
        };
        f(vc, R);
        vc.NAME = x.NAME;
        vc.prototype.handlers = null;
        vc.prototype.ready = function() {
            var a;
            a = this.getVideo();
            a.setAttribute("x-webkit-airplay",
                "allow");
            a.addEventListener("webkitplaybacktargetavailabilitychanged", this.handlers.availabilitychanged);
            a.addEventListener("webkitcurrentplaybacktargetiswireless", this.handlers.playbacktargetchanged)
        };
        vc.prototype.destroy = function() {
            video.removeEventListener("webkitplaybacktargetavailabilitychanged", this.handlers.availabilitychanged);
            video.removeEventListener("webkitcurrentplaybacktargetiswireless", this.handlers.playbacktargetchanged)
        };
        vc.prototype.availabilitychanged = function(a) {
            this.sendNotification("availabilitychange",
                "available" === a.availability)
        };
        vc.prototype.playbacktargetchanged = function(a) {
            console.log(this.getVideo().webkitCurrentPlaybackTargetIsWireless)
        };
        vc.prototype.getVideo = function() {
            return this.facade.player.getMediaElement()
        };
        vc.prototype.launch = function() {
            this.getVideo().webkitShowPlaybackTargetPicker()
        };
        var Pb = function() {
            Pb.__super__.constructor.call(this)
        };
        f(Pb, M);
        Pb.prototype.moduleName = "hls";
        Pb.prototype.createModel = function() {
            this.proxy = new ue(this.config);
            this.registerProxy(this.proxy)
        };
        Pb.prototype.createController =
            function() {
                this.registerCommand(k.BREAK_START, Lh);
                Pb.__super__.createController.call(this)
            };
        Pb.prototype.getPlaybackProxy = function() {
            return this.proxy.playbackProxy
        };
        Pb.prototype.getInstance = function() {
            return this.getPlaybackProxy().player
        };
        Pb.prototype.listNotificationInterests = function() {
            return Pb.__super__.listNotificationInterests.call(this).concat([k.BREAK_START])
        };
        Pb.prototype.listNotificationPublications = function() {
            return Pb.__super__.listNotificationPublications.call(this).concat([d.TIMED_METADATA,
                d.BITRATE_LEVELS_LOADED, d.BITRATE_CHANGE, d.BITRATE_CHANGING, d.FRAGMENT_LOAD_START, d.FRAGMENT_LOADED
            ])
        };
        l.registerPlugin("hls", "html", Pb);
        var Qc = function() {
            Qc.__super__.constructor.call(this)
        };
        f(Qc, zb);
        Qc.prototype.button = null;
        Qc.prototype.onRegister = function() {
            Qc.__super__.onRegister.call(this);
            this.button = new Gf;
            this.facade.registerMediator(this.button)
        };
        Qc.prototype.listNotificationInterests = function() {
            return Qc.__super__.listNotificationInterests.call(this).concat(["availabilitychange"])
        };
        Qc.prototype.handleNotification =
            function(a) {
                var b;
                Qc.__super__.handleNotification.call(this, a);
                b = a.getName();
                a = a.getBody();
                switch (b) {
                    case "availabilitychange":
                        !0 === a ? (this.sendNotification(d.ADD_CONTROL_STATE, "airplay"), this.facade.player.sendNotification(d.ADD_CONTROL, this.button.getViewComponent())) : (this.sendNotification(d.REMOVE_CONTROL_STATE, "airplay"), this.facade.player.sendNotification(d.REMOVE_CONTROL, this.button.getViewComponent()))
                }
            };
        var ed = function() {
            ed.__super__.constructor.call(this)
        };
        f(ed, M);
        ed.prototype.moduleName =
            "nielsendcr";
        ed.prototype.createModel = function() {
            this.registerProxy(new Z(this.config))
        };
        ed.prototype.createController = function() {
            ed.__super__.createController.call(this);
            this.registerCommand(k.AD_STARTED, Mh);
            this.registerCommand(k.AD_ENDED, Nh);
            this.registerCommand(d.STARTED, Oh);
            this.registerCommand(d.ENDED, Ph);
            this.registerCommand(d.TIME_UPDATE, Sd);
            this.registerCommand(k.AD_TIME_REMAINING, Sd);
            this.registerCommand(q.TIME_UPDATE, Sd);
            this.registerCommand(ka.AD_TIME_UPDATE, Sd);
            this.registerCommand(d.MEDIA_CHANGE,
                Ff);
            this.registerCommand(q.FEED_LOADED, Ff);
            this.registerCommand(d.TIMED_METADATA, Qh)
        };
        ed.prototype.listNotificationInterests = function() {
            return [k.AD_STARTED, k.AD_ENDED, k.BREAK_START, d.MEDIA_CHANGE, d.STARTED, d.ENDED, d.TIME_UPDATE, k.AD_TIME_REMAINING, q.FEED_LOADED, q.TIME_UPDATE, ka.AD_TIME_UPDATE, d.TIMED_METADATA]
        };
        l.registerPlugin("nielsendcr", "html", ed);
        l.registerPlugin("nielsendcr", "flash", Rh);
        var Hf, ua = function(a) {
            ua.__super__.constructor.call(this, a)
        };
        f(ua, R);
        ua.NAME = x.NAME;
        ua.prototype.defaults = {
            data: null
        };
        ua.prototype.googleanalyticsSDK = null;
        ua.prototype.isLive = null;
        ua.prototype.config = null;
        ua.prototype.started = !1;
        ua.prototype.timeViewed = 0;
        ua.prototype.currentTime = 0;
        ua.prototype.onRegister = function() {
            ua.__super__.onRegister.call(this);
            this.config = this.facade.getConfig();
            (function(a, b, c, d, f, g, h) {
                a.GoogleAnalyticsObject = f;
                a[f] = a[f] || function() {
                        (a[f].q = a[f].q || []).push(arguments)
                    };
                a[f].l = 1 * new Date;
                g = b.createElement(c);
                h = b.getElementsByTagName(c)[0];
                g.async = 1;
                g.src = d;
                h.parentNode.insertBefore(g,
                    h)
            })(window, document, "script", this.config.resources.src, "ga")
        };
        ua.prototype.initialize = function() {
            ga("create", this.config.plugin.trackingId, "auto");
            ga("send", "pageview")
        };
        ua.prototype.generateGoogleAnalyticsVO = function(a, b) {
            var c, d, f, g, h, k, l, m, p, q, s;
            null == b && (b = null);
            m = {};
            c = this.facade.player.getMedia();
            this.facade.player.getMediaElement();
            this.isLive = c.isLive;
            g = !1;
            c = {};
            m.trackingid = this.config.plugin.trackingId;
            s = this.config.events;
            for (l in s)
                if (h = s[l], null != b && null != h && 0 < h.length)
                    for (p = 0, q = h.length; p <
                    q; p++)
                        if (f = h[p], (null != f ? f.type : void 0) === b)
                            for (k in g = !0, f.data)
                                if ("customDimension" === k) {
                                    for (d in f.data.customDimension) "viewDuration" === f.data.customDimension[d] ? (ga("set", d, this.timeViewed), c[d] = this.timeViewed) : (ga("set", d, this.facade.player.evaluateBinding(f.data.customDimension[d])), c[d] = this.facade.player.evaluateBinding(f.data.customDimension[d]));
                                    m.customDimension = c
                                } else m[k.toLowerCase()] = this.facade.player.evaluateBinding(f.data[k]);
            return !0 === g ? m : null
        };
        Hf = function(a) {
            var b;
            if (a && (ga("send",
                    "event", a.eventcategory, a.eventaction, a.eventlabel, a.eventvalue), a.customDimension))
                for (b in a.customDimension) ga("set", b, null)
        };
        ua.prototype.adStart = function(a) {
            Hf(this.generateGoogleAnalyticsVO(a, "adStarted"))
        };
        ua.prototype.adEnd = function(a) {
            Hf(this.generateGoogleAnalyticsVO(a, "adEnded"))
        };
        ua.prototype.start = function() {
            this.started = !0;
            this.timeViewed = this.currentTime = 0;
            Hf(this.generateGoogleAnalyticsVO(null, "started"))
        };
        ua.prototype.end = function() {
            !0 === this.started && (this.started = !1, Hf(this.generateGoogleAnalyticsVO(null,
                "ended")))
        };
        ua.prototype.timeUpdate = function(a) {
            a = isNaN(a) && !isNaN(a.currentTime) ? a.currentTime : a;
            Math.round(a) > this.currentTime && (this.timeViewed++, this.currentTime = Math.round(a))
        };
        var Uh = function() {
            Uh.__super__.constructor.call(this)
        };
        f(Uh, puremvc.SimpleCommand);
        Uh.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).start()
        };
        var If = function() {
            If.__super__.constructor.call(this)
        };
        f(If, puremvc.SimpleCommand);
        If.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).end()
        };
        var Vh =
            function(a, b) {
                this.plugin = new fd;
                this.plugin.oninitialized = a.registerModule.bind(a, this.plugin);
                this.plugin.initialize(b, a);
                Vh.__super__.constructor.call(this, a, b)
            };
        f(Vh, I);
        Vh.NAME = "GoogleAnalyticsWrapper";
        var vi = function() {
            vi.__super__.constructor.call(this)
        };
        f(vi, puremvc.SimpleCommand);
        vi.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).end()
        };
        var Wh = function() {
            Wh.__super__.constructor.call(this)
        };
        f(Wh, puremvc.SimpleCommand);
        Wh.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).adStart(a.body)
        };
        var Xh = function() {
            Xh.__super__.constructor.call(this)
        };
        f(Xh, puremvc.SimpleCommand);
        Xh.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).timeUpdate(a.body)
        };
        var Yh = function() {
            Yh.__super__.constructor.call(this)
        };
        f(Yh, puremvc.SimpleCommand);
        Yh.prototype.execute = function(a) {
            this.facade.retrieveProxy(ua.NAME).adEnd(a.body)
        };
        var Qb = function() {
            Qb.__super__.constructor.call(this)
        };
        f(Qb, M);
        Qb.prototype.moduleName = "airplay";
        Qb.prototype.isAvailable = function() {
            return null !== window.WebKitPlaybackTargetAvailabilityEvent
        };
        Qb.prototype.createModel = function() {
            Qb.__super__.createModel.call(this);
            this.registerProxy(new vc(this.config))
        };
        Qb.prototype.createController = function() {
            Qb.__super__.createController.call(this);
            this.registerCommand(d.READY, Sh);
            this.registerCommand("launch", Th)
        };
        Qb.prototype.createView = function() {
            this.registerMediator(new Qc)
        };
        Qb.prototype.listNotificationInterests = function() {
            return [d.READY]
        };
        Qb.prototype.listNotificationPublications = function() {
            return Qb.__super__.listNotificationPublications.apply(this,
                arguments).concat([d.ADD_CONTROL, d.REMOVE_CONTROL, d.ADD_CONTROL_STATE, d.REMOVE_CONTROL_STATE, d.CHANGE_PLAYBACK_TARGET])
        };
        l.registerPlugin("airplay", "html", Qb);
        var O = function(a) {
            O.__super__.constructor.call(this, a)
        };
        f(O, R);
        O.NAME = x.NAME;
        O.prototype.defaults = {
            data: null,
            events: null,
            plugin: {
                js: "../resources/js/conviva-core-sdk-2.119.0.32091.min.js"
            },
            conviva: null
        };
        O.prototype.convivaVideoSession = null;
        O.prototype.serviceURL = null;
        O.prototype.customerKey = null;
        O.prototype.media = null;
        O.prototype.mediaElement =
            null;
        O.prototype.systemSettings = null;
        O.prototype.systemInterface = null;
        O.prototype.systemFactory = null;
        O.prototype.clientSettings = null;
        O.prototype.client = null;
        O.prototype.playerStateManager = null;
        O.prototype.sessionKey = null;
        O.prototype.html5PlayerInterface = null;
        O.prototype.contentMetadata = null;
        O.prototype.initialize = function() {
            var a, b, c, d;
            O.__super__.initialize.call(this);
            this.customerKey = null != (a = this.value) ? null != (b = a.data) ? b.customerKey : void 0 : void 0;
            this.serviceURL = null != (c = this.value) ? null != (d =
                c.data) ? d.serviceUrl : void 0 : void 0;
            "undefined" !== typeof Conviva && null !== Conviva && (this.systemSettings = new Conviva.SystemSettings, this.systemInterface = (new Html5SystemInterfaceFactory).build(), this.systemFactory = new Conviva.SystemFactory(this.systemInterface, this.systemSettings), this.clientSettings = new Conviva.ClientSettings(this.customerKey), this.clientSettings.gatewayUrl = this.serviceURL, this.client = new Conviva.Client(this.clientSettings, this.systemFactory), this.playerStateManager = this.client.getPlayerStateManager())
        };
        O.prototype.contentChanged = function() {
            "undefined" !== typeof Conviva && null !== Conviva && (this.mediaElement = null, this.media = this.facade.player.getMedia(), this.mediaElement = this.facade.player.getMediaElement(), this.contentMetadata = this.generateConvivaSessionMetadata(), null != this.client && null != this.sessionKey && this.client.cleanupSession(this.sessionKey), this.sessionKey = this.client.createSession(this.contentMetadata), this.html5PlayerInterface = new Html5PlayerInterface(this.playerStateManager, this.mediaElement),
                this.client.attachPlayer(this.sessionKey, this.playerStateManager))
        };
        O.prototype.error = function(a) {
            var b;
            b = "Error: ";
            switch (a.code) {
                case MediaError.MEDIA_ERR_ABORTED:
                    b += "Media was aborted.";
                    break;
                case MediaError.MEDIA_ERR_DECODE:
                    b += "Decode Error.";
                    break;
                case MediaError.MEDIA_ERR_NETWORK:
                    b += "Network Error.";
                    break;
                case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    b += "Source not supported.";
                    break;
                default:
                    b += "Unknown Error"
            }
            this.reportError(b);
            return this.cleanupSession()
        };
        O.prototype.cleanupSession = function() {
            return this.client.cleanupSession(this.sessionKey)
        };
        O.prototype.generateConvivaSessionMetadata = function() {
            var a, b, c;
            "undefined" !== typeof Conviva && null !== Conviva && (b = new Conviva.ContentMetadata, b.assetName = this.media.guid, b.streamUrl = this.media.src, b.streamType = this.media.isLive ? Conviva.ContentMetadata.StreamType.LIVE : Conviva.ContentMetadata.StreamType.VOD, b.duration = this.media.duration, a = null != (c = this.value) ? c.data : void 0, null != a && this.getMetadataFromConfig(b));
            return b
        };
        O.prototype.getMetadataFromConfig = function(a) {
            var b, c, d, f;
            b = null != (d = this.value) ?
                null != (f = d.data) ? f.metadata : void 0 : void 0;
            if (null != b)
                for (c in b) d = b[c], "null" !== d && (a.hasOwnProperty(c) || this.facade.logger.warn("[AMP Conviva] : ''" + c + "'' is not an eplicit property of convivaMetadata obejct"), a[c] = d)
        };
        O.prototype.adStart = function(a) {
            "undefined" !== typeof Conviva && null !== Conviva && null != this.client && null != this.sessionKey && ("preroll" === (null != a ? a.type : void 0) ? this.client.adStart(this.sessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.PREROLL) :
                this.client.detachStreamer(this.sessionKey))
        };
        O.prototype.adEnd = function(a) {
            "undefined" !== typeof Conviva && null !== Conviva && null != this.sessionKey && this.client && ("preroll" === (null != a ? a.type : void 0) ? this.client.adEnd(this.sessionKey) : "midroll" === (null != a ? a.type : void 0) ? this.client.attachPlayer(this.sessionKey, this.playerStateManager) : "postroll" === (null != a ? a.type : void 0) && this.client.cleanupSession(this.sessionKey))
        };
        O.prototype.end = function(a) {
            this.cleanupSession()
        };
        O.prototype.bitrateSwitch = function(a) {
            this.playerStateManager.setBitrateKbps(a.bitrate /
                1E3)
        };
        O.prototype.seekStart = function(a) {
            a = 1E3 * this.facade.player.getCurrentTime();
            this.playerStateManager.setPlayerSeekStart(a)
        };
        O.prototype.seekEnd = function(a) {
            this.playerStateManager.setPlayerSeekEnd()
        };
        O.prototype.reportError = function(a) {
            "undefined" !== typeof Conviva && null !== Conviva && this.client && null != a && this.client.reportError(this.sessionKey, a, Conviva.Client.ErrorSeverity.FATAL)
        };
        var Zh = function() {
            Zh.__super__.constructor.call(this)
        };
        f(Zh, puremvc.SimpleCommand);
        Zh.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME)
        };
        var $h = function() {
            $h.__super__.constructor.call(this)
        };
        f($h, puremvc.SimpleCommand);
        $h.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).adStart(a.body)
        };
        var ai = function() {
            ai.__super__.constructor.call(this)
        };
        f(ai, puremvc.SimpleCommand);
        ai.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).adEnd(a.body)
        };
        var bi = function() {
            bi.__super__.constructor.call(this)
        };
        f(bi, puremvc.SimpleCommand);
        bi.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).end()
        };
        var ci = function() {
            ci.__super__.constructor.call(this)
        };
        f(ci, puremvc.SimpleCommand);
        ci.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).contentChanged(a.body)
        };
        var di = function() {
            di.__super__.constructor.call(this)
        };
        f(di, A);
        di.prototype.execute = function(a) {
            this.proxy.bitrateSwitch(a.getBody())
        };
        var ei = function() {
            ei.__super__.constructor.call(this)
        };
        f(ei, A);
        ei.prototype.execute = function(a) {
            this.proxy.error(a.getBody())
        };
        var fi = function() {
            fi.__super__.constructor.call(this)
        };
        f(fi, puremvc.SimpleCommand);
        fi.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).seekStart(a.body)
        };
        var gi = function() {
            gi.__super__.constructor.call(this)
        };
        f(gi, puremvc.SimpleCommand);
        gi.prototype.execute = function(a) {
            this.facade.retrieveProxy(O.NAME).seekEnd(a.body)
        };
        var E = function(a) {
            this._player = a
        };
        E.prototype.ContentType = {
            AD: "ad",
            CONTENT: "ct"
        };
        E.prototype.AdPosition = {
            PREROLL: "a1",
            MIDROLL: "a2",
            POSTROLL: "a3",
            OVERLAY: "a4",
            SPECIAL: "a5"
        };
        E.prototype.VideoState = {
            UNPLAYED: "s1",
            PLAYED: "s2",
            STOPPED: "s3",
            COMPLETED: "s4"
        };
        E.prototype.media = null;
        E.prototype.facade = null;
        E.prototype.cur_position = 0;
        E.prototype.queryInterval =
            2;
        E.prototype.timer = null;
        E.prototype.isPlayerReady = !1;
        E.prototype._player = null;
        E.prototype.contentType = null;
        E.prototype.adType = "";
        E.prototype.playbackState = E.prototype.VideoState.UNPLAYED;
        E.prototype.videoStartTime = null;
        E.prototype.isReady = function() {
            return this.isPlayerReady
        };
        E.prototype.getTitle = function() {
            var a;
            return null != (a = this.media) ? a.title : void 0
        };
        E.prototype.getVideoPath = function() {
            var a;
            return null != (a = this.media) ? a.src : void 0
        };
        E.prototype.getContentType = function() {
            return this.contentType
        };
        E.prototype.getAdPosition = function() {
            return this.adType
        };
        E.prototype.getTotalDuration = function() {
            var a;
            return 1E3 * (null != (a = this.media) ? a.duration : NaN)
        };
        E.prototype.getState = function() {
            return this.playbackState
        };
        E.prototype.getCurrentPlayTime = function() {
            this.media.isLive ? this.cur_position = Math.floor(Date.now() / 1E3) : (this.cur_position = this.facade.player.getCurrentTime().toFixed(1), Math.abs(this.timer - this.cur_position) > this.queryInterval && (this.timer = this.cur_position));
            return this.cur_position
        };
        E.prototype.getBitrate =
            function() {
                var a;
                a = NaN;
                try {
                    a = this.facade.player.getQuality()
                } catch (b) {}
                return a
            };
        E.prototype.getThumbnailPath = function() {
            return this.facade.player.getMedia().poster
        };
        E.prototype.getViewStartTime = function() {
            return null != this.videoStartTime ? Math.round((new Date).getTime() - this.videoStartTime) : 0
        };
        E.verify = function(a) {
            return !0
        };
        E.prototype.onVideoStart = function() {
            this.videoStartTime = (new Date).getTime()
        };
        E.prototype.onVideoEnd = function() {
            this.videoStartTime = null
        };
        var fd = function() {
            fd.__super__.constructor.call(this)
        };
        f(fd, M);
        fd.prototype.moduleName = "googleanalytics";
        fd.prototype.createModel = function() {
            this.registerProxy(new ua(this.config))
        };
        fd.prototype.createController = function() {
            fd.__super__.createController.call(this);
            this.registerCommand(d.STARTED, Uh);
            this.registerCommand(d.MEDIA_SEQUENCE_ABORTED, If);
            this.registerCommand(d.ENDED, If);
            this.registerCommand(k.AD_STARTED, Wh);
            this.registerCommand(d.TIME_UPDATE, Xh);
            this.registerCommand(k.AD_ENDED, Yh)
        };
        fd.prototype.listNotificationInterests = function() {
            return [k.AD_STARTED,
                k.AD_ENDED, k.BREAK_END, d.STARTED, d.ENDED, d.LOADED_METADATA, d.TIME_UPDATE, d.CONTENT_CHANGED, d.MEDIA_CHANGE, d.CHANGE_CONTENT, k.AD_TIME_REMAINING, d.MEDIA_SEQUENCE_ABORTED
            ]
        };
        l.registerPlugin("googleanalytics", "html", fd);
        l.registerPlugin("googleanalytics", "flash", Vh);
        var hi = function() {
            hi.__super__.constructor.call(this)
        };
        f(hi, puremvc.SimpleCommand);
        hi.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).start()
        };
        var ii = function() {
            ii.__super__.constructor.call(this)
        };
        f(ii, puremvc.SimpleCommand);
        ii.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).adStart(a.body)
        };
        var ji = function() {
            ji.__super__.constructor.call(this)
        };
        f(ji, puremvc.SimpleCommand);
        ji.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).adEnd(a.body)
        };
        var ki = function() {
            ki.__super__.constructor.call(this)
        };
        f(ki, puremvc.SimpleCommand);
        ki.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).end()
        };
        var li = function() {
            li.__super__.constructor.call(this)
        };
        f(li, puremvc.SimpleCommand);
        li.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(qa.NAME).contentChanged(a.body)
            };
        var mi = function() {
            mi.__super__.constructor.call(this)
        };
        f(mi, puremvc.SimpleCommand);
        mi.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).paused()
        };
        var ni = function() {
            ni.__super__.constructor.call(this)
        };
        f(ni, puremvc.SimpleCommand);
        ni.prototype.execute = function(a) {
            this.facade.retrieveProxy(qa.NAME).canPlay(a.body)
        };
        var oi = function() {
            oi.__super__.constructor.call(this)
        };
        f(oi, puremvc.SimpleCommand);
        oi.prototype.execute =
            function(a) {
                this.facade.retrieveProxy(qa.NAME).playing()
            };
        var pi = function(a, b) {
            this.plugin = new ac;
            this.plugin.oninitialized = a.registerModule.bind(a, this.plugin);
            this.plugin.initialize(b, a);
            pi.__super__.constructor.call(this, a, b)
        };
        f(pi, I);
        pi.NAME = "ChartbeatAnalyticsWrapper";
        var qa = function(a) {
            qa.__super__.constructor.call(this, a)
        };
        f(qa, R);
        qa.NAME = x.NAME;
        qa.prototype.defaults = {
            data: null,
            events: null,
            plugin: {
                js: "//static.chartbeat.com/js/chartbeat_video.js"
            }
        };
        qa.prototype.media = null;
        qa.prototype.initialize =
            function() {
                var a, b;
                try {
                    a = this.facade.player.getMediaElement(), E.prototype._player = a, E.prototype.facade = this.facade, window._cbv_strategies = window._cbv_strategies || [], window._cbv_strategies.push(E), b = window._cbv || (window._cbv = []), b.push(a), this.setConfigMetadata()
                } catch (c) {}
                l.addResources(this.facade.pluginResources, this.resourcesLoaded.bind(this), this.resourcesError.bind(this));
                qa.__super__.initialize.call(this)
            };
        qa.prototype.setConfigMetadata = function() {
            var a, b, c, d;
            d = window._sf_async_config = {};
            a =
                null != (c = this.value) ? c.data : void 0;
            if (null != a)
                for (b in a) c = a[b], "null" !== c && (d[b] = c)
        };
        qa.prototype.resourcesLoaded = function() {};
        qa.prototype.resourcesError = function() {};
        qa.prototype.contentChanged = function() {
            this.media = this.facade.player.getMedia();
            this.setConfigMetadata();
            E.prototype.media = this.media;
            E.prototype.playbackState = E.prototype.VideoState.UNPLAYED;
            E.prototype.isPlayerReady = !0
        };
        qa.prototype.adStart = function(a) {
            E.prototype.contentType = E.prototype.ContentType.AD;
            "preroll" === (null != a ? a.type :
                void 0) && (E.prototype.adType = E.prototype.AdPosition.PREROLL);
            "midroll" === (null != a ? a.type : void 0) && (E.prototype.adType = E.prototype.AdPosition.MIDROLL);
            "postroll" === (null != a ? a.type : void 0) && (E.prototype.adType = E.prototype.AdPosition.POSTROLL)
        };
        qa.prototype.adEnd = function(a) {
            "postroll" === (null != a ? a.type : void 0) && (E.prototype.contentType = E.prototype.ContentType.CONTENT)
        };
        qa.prototype.start = function(a) {
            E.prototype.contentType = E.prototype.ContentType.CONTENT;
            E.prototype.onVideoStart()
        };
        qa.prototype.playing =
            function(a) {
                E.prototype.contentType = E.prototype.ContentType.CONTENT;
                E.prototype.playbackState = E.prototype.VideoState.PLAYED
            };
        qa.prototype.end = function(a) {
            E.prototype.playbackState = E.prototype.VideoState.COMPLETED;
            E.prototype.onVideoEnd()
        };
        qa.prototype.paused = function(a) {
            E.prototype.playbackState = E.prototype.VideoState.STOPPED
        };
        qa.prototype.canPlay = function(a) {
            E.prototype.playbackReady = !0
        };
        var gd = function() {
            gd.__super__.constructor.call(this)
        };
        f(gd, M);
        gd.prototype.moduleName = "conviva";
        gd.prototype.createModel =
            function() {
                this.registerProxy(new O(this.config))
            };
        gd.prototype.createController = function() {
            gd.__super__.createController.call(this);
            this.registerCommand(k.BREAK_END, ai);
            this.registerCommand(k.AD_STARTED, $h);
            this.registerCommand(d.STARTED, Zh);
            this.registerCommand(d.ENDED, bi);
            this.registerCommand(d.MEDIA_CHANGE, ci);
            this.registerCommand(d.BITRATE_CHANGING, di);
            this.registerCommand(d.ERROR, ei);
            this.registerCommand(d.SEEKING, fi);
            this.registerCommand(d.SEEKED, gi)
        };
        gd.prototype.listNotificationInterests =
            function() {
                return [k.AD_STARTED, k.BREAK_END, d.STARTED, d.ENDED, d.MEDIA_CHANGE, d.BITRATE_CHANGING, d.ERROR, d.SEEKING, d.SEEKED]
            };
        gd.prototype.reportError = function(a) {
            this.convivaProxy = this.model.retrieveProxy(O.NAME);
            null != this.convivaProxy && null != a && this.convivaProxy.reportError(a)
        };
        l.registerPlugin("conviva", "html", gd);
        var ac = function() {
            ac.__super__.constructor.call(this)
        };
        f(ac, M);
        ac.prototype.moduleName = "chartbeatanalytics";
        ac.prototype.pluginResources = null;
        ac.prototype.createModel = function() {
            this.registerProxy(new qa(this.config))
        };
        ac.prototype.loadModuleResources = function() {
            var a;
            this.pluginResources = null != (a = this.config) ? a.resources : void 0;
            this.config.resources = null;
            ac.__super__.loadModuleResources.call(this)
        };
        ac.prototype.createController = function() {
            ac.__super__.createController.call(this);
            this.registerCommand(k.BREAK_END, ji);
            this.registerCommand(k.AD_STARTED, ii);
            this.registerCommand(d.ENDED, ki);
            this.registerCommand(d.MEDIA_CHANGE, li);
            this.registerCommand(d.CAN_PLAY_THROUGH, ni);
            this.registerCommand(d.STARTED, hi);
            this.registerCommand(d.PLAYING,
                oi);
            this.registerCommand(d.PAUSED, mi)
        };
        ac.prototype.listNotificationInterests = function() {
            return [k.AD_STARTED, k.BREAK_END, d.STARTED, d.ENDED, d.MEDIA_CHANGE, d.PLAYING, d.PAUSED, d.CAN_PLAY_THROUGH]
        };
        l.registerPlugin("chartbeatanalytics", "html", ac);
        l.registerPlugin("chartbeatanalytics", "flash", pi);
        qi.akamai = {
            amp: {
                AMP: l,
                utils: {
                    Utils: g,
                    QueryString: wc,
                    Logger: ia
                },
                Utils: g,
                QueryString: wc,
                Logger: ia,
                Config: yc,
                chromecast: {
                    ChromeCastShim: "undefined" != typeof Fb ? Fb.getInstance() : null
                },
                XHR: La,
                Resource: de,
                Media: Ka,
                Authorization: Jf,
                Events: Events,
                AdEvents: function() {
                    var a, b, c = {
                        values: []
                    };
                    for (a in k) b = k[a].replace(/^ads/, ""), c[a.replace(/^AD_/, "")] = b, c.values.push(b);
                    return c
                }(),
                EventDispatcher: ib,
                Plugin: function(a) {
                    function b(c, d) {
                        babelHelpers.classCallCheck(this, b);
                        var f = babelHelpers.possibleConstructorReturn(this, a.call(this));
                        f.player = c;
                        f.config = d;
                        var g = void 0;
                        Events.values.forEach(function(a) {
                            g = f["on" + a];
                            null != g && "function" == typeof g && (g = f["on" + a] = g.bind(f), f.player.addEventListener(a, g))
                        });
                        return f
                    }
                    babelHelpers.inherits(b,
                        a);
                    b.create = function(a, b) {
                        var d = this;
                        return new Promise(function(f, g) {
                            try {
                                var k = new d(a, b);
                                f(k)
                            } catch (l) {
                                g(l)
                            }
                        })
                    };
                    babelHelpers.createClass(b, null, [{
                        key: "factory",
                        get: function() {
                            return this.create.bind(this)
                        }
                    }]);
                    return b
                }(ib)
            }
        };
        window.AKAMAI_MEDIA_PLAYER.saveSDK("AMP Premier v2.71.18", qi)
    }
    window.AKAMAI_MEDIA_PLAYER.setVersion("AMP Premier v2.71.18")
})();