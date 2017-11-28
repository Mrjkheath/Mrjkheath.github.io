//
// ChemDoodle Web Components 8.0.0
//
// http://web.chemdoodle.com
//
// Copyright 2009-2017 iChemLabs, LLC.  All rights reserved.
//
// The ChemDoodle Web Components library is licensed under version 3
// of the GNU GENERAL PUBLIC LICENSE.
//
// You may redistribute it and/or modify it under the terms of the
// GNU General Public License as published by the Free Software Foundation,
// either version 3 of the License, or (at your option) any later version.
//
// As an exception to the GPL, you may distribute this packed form of
// the code without the copy of the GPL license normally required,
// provided you include this license notice and a URL through which
// recipients can access the corresponding unpacked source code.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// ChemDoodle Web Components employs 3rd party libraries under the MIT
// license. For a full list with links to the original source, go to:
// https://web.chemdoodle.com/installation/download/#libraries
//
// Please contact iChemLabs <http://www.ichemlabs.com/contact-us> for
// alternate licensing options.
//
var ChemDoodle = function() {
    var c = {
        iChemLabs: {},
        informatics: {},
        io: {},
        lib: {},
        notations: {},
        structures: {}
    };
    c.structures.d2 = {};
    c.structures.d3 = {};
    c.getVersion = function() {
        return "8.0.0"
    };
    return c
}();
(function(c, n, p) {
    (function(c, g) {
        "object" === typeof module && "object" === typeof module.exports ? module.exports = c.document ? g(c, !0) : function(c) {
            if (!c.document) throw Error("jQuery requires a window with a document");
            return g(c)
        } : g(c)
    })("undefined" !== typeof c ? c : this, function(c, g) {
        function k(e) {
            var a = !!e && "length" in e && e.length,
                b = t.type(e);
            return "function" === b || t.isWindow(e) ? !1 : "array" === b || 0 === a || "number" === typeof a && 0 < a && a - 1 in e
        }

        function d(e, a, b) {
            if (t.isFunction(a)) return t.grep(e, function(e, d) {
                return !!a.call(e,
                    d, e) !== b
            });
            if (a.nodeType) return t.grep(e, function(e) {
                return e === a !== b
            });
            if ("string" === typeof a) {
                if (nb.test(a)) return t.filter(a, e, b);
                a = t.filter(a, e)
            }
            return t.grep(e, function(e) {
                return -1 < Ba.call(a, e) !== b
            })
        }

        function f(e, a) {
            for (;
                (e = e[a]) && 1 !== e.nodeType;);
            return e
        }

        function b(e) {
            var a = {};
            t.each(e.match(fa) || [], function(e, b) {
                a[b] = !0
            });
            return a
        }

        function a() {
            P.removeEventListener("DOMContentLoaded", a);
            c.removeEventListener("load", a);
            t.ready()
        }

        function h() {
            this.expando = t.expando + h.uid++
        }

        function r(e, a, b) {
            if (void 0 ===
                b && 1 === e.nodeType)
                if (b = "data-" + a.replace(Sa, "-$\x26").toLowerCase(), b = e.getAttribute(b), "string" === typeof b) {
                    try {
                        b = "true" === b ? !0 : "false" === b ? !1 : "null" === b ? null : +b + "" === b ? +b : ob.test(b) ? t.parseJSON(b) : b
                    } catch (dc) {}
                    aa.set(e, a, b)
                } else b = void 0;
            return b
        }

        function w(e, a, b, d) {
            var l = 1,
                h = 20,
                f = d ? function() {
                    return d.cur()
                } : function() {
                    return t.css(e, a, "")
                },
                r = f(),
                c = b && b[3] || (t.cssNumber[a] ? "" : "px"),
                L = (t.cssNumber[a] || "px" !== c && +r) && ma.exec(t.css(e, a));
            if (L && L[3] !== c) {
                c = c || L[3];
                b = b || [];
                L = +r || 1;
                do l = l || ".5", L /= l,
                    t.style(e, a, L + c); while (l !== (l = f() / r) && 1 !== l && --h)
            }
            if (b) {
                L = +L || +r || 0;
                var g = b[1] ? L + (b[1] + 1) * b[2] : +b[2];
                d && (d.unit = c, d.start = L, d.end = g)
            }
            return g
        }

        function q(e, a) {
            var b = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(a || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(a || "*") : [];
            return void 0 === a || a && t.nodeName(e, a) ? t.merge([e], b) : b
        }

        function m(e, a) {
            for (var b = 0, d = e.length; b < d; b++) M.set(e[b], "globalEval", !a || M.get(a[b], "globalEval"))
        }

        function C(e, a, b, d, l) {
            for (var h, f, r,
                    c = a.createDocumentFragment(), L = [], g = 0, w = e.length; g < w; g++)
                if ((h = e[g]) || 0 === h)
                    if ("object" === t.type(h)) t.merge(L, h.nodeType ? [h] : h);
                    else if (rb.test(h)) {
                f = f || c.appendChild(a.createElement("div"));
                r = (Ta.exec(h) || ["", ""])[1].toLowerCase();
                r = ia[r] || ia._default;
                f.innerHTML = r[1] + t.htmlPrefilter(h) + r[2];
                for (r = r[0]; r--;) f = f.lastChild;
                t.merge(L, f.childNodes);
                f = c.firstChild;
                f.textContent = ""
            } else L.push(a.createTextNode(h));
            c.textContent = "";
            for (g = 0; h = L[g++];)
                if (d && -1 < t.inArray(h, d)) l && l.push(h);
                else if (e = t.contains(h.ownerDocument,
                    h), f = q(c.appendChild(h), "script"), e && m(f), b)
                for (r = 0; h = f[r++];) Ua.test(h.type || "") && b.push(h);
            return c
        }

        function u() {
            return !0
        }

        function y() {
            return !1
        }

        function p() {
            try {
                return P.activeElement
            } catch (L) {}
        }

        function e(a, b, d, l, h, f) {
            var r;
            if ("object" === typeof b) {
                "string" !== typeof d && (l = l || d, d = void 0);
                for (r in b) e(a, r, d, l, b[r], f);
                return a
            }
            null == l && null == h ? (h = d, l = d = void 0) : null == h && ("string" === typeof d ? (h = l, l = void 0) : (h = l, l = d, d = void 0));
            if (!1 === h) h = y;
            else if (!h) return a;
            if (1 === f) {
                var c = h;
                h = function(e) {
                    t().off(e);
                    return c.apply(this, arguments)
                };
                h.guid = c.guid || (c.guid = t.guid++)
            }
            return a.each(function() {
                t.event.add(this, b, h, l, d)
            })
        }

        function l(e, a) {
            return t.nodeName(e, "table") && t.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function x(e) {
            e.type = (null !== e.getAttribute("type")) + "/" + e.type;
            return e
        }

        function A(e) {
            var a = sb.exec(e.type);
            a ? e.type = a[1] : e.removeAttribute("type");
            return e
        }

        function z(e, a) {
            var b;
            if (1 === a.nodeType) {
                if (M.hasData(e)) {
                    var d =
                        M.access(e);
                    var l = M.set(a, d);
                    if (d = d.events)
                        for (h in delete l.handle, l.events = {}, d)
                            for (l = 0, b = d[h].length; l < b; l++) t.event.add(a, h, d[h][l])
                }
                if (aa.hasData(e)) {
                    var h = aa.access(e);
                    h = t.extend({}, h);
                    aa.set(a, h)
                }
            }
        }

        function n(e, a, b, d) {
            a = Va.apply([], a);
            var l, h = 0,
                f = e.length,
                r = f - 1,
                c = a[0],
                g = t.isFunction(c);
            if (g || 1 < f && "string" === typeof c && !V.checkClone && tb.test(c)) return e.each(function(l) {
                var h = e.eq(l);
                g && (a[0] = c.call(this, l, h.html()));
                n(h, a, b, d)
            });
            if (f) {
                var L = C(a, e[0].ownerDocument, !1, e, d);
                var w = L.firstChild;
                1 === L.childNodes.length && (L = w);
                if (w || d) {
                    w = t.map(q(L, "script"), x);
                    for (l = w.length; h < f; h++) {
                        var k = L;
                        h !== r && (k = t.clone(k, !0, !0), l && t.merge(w, q(k, "script")));
                        b.call(e[h], k, h)
                    }
                    if (l)
                        for (L = w[w.length - 1].ownerDocument, t.map(w, A), h = 0; h < l; h++) k = w[h], Ua.test(k.type || "") && !M.access(k, "globalEval") && t.contains(L, k) && (k.src ? t._evalUrl && t._evalUrl(k.src) : t.globalEval(k.textContent.replace(ub, "")))
                }
            }
            return e
        }

        function E(e, a, b) {
            for (var d = a ? t.filter(a, e) : e, l = 0; null != (a = d[l]); l++) b || 1 !== a.nodeType || t.cleanData(q(a)),
                a.parentNode && (b && t.contains(a.ownerDocument, a) && m(q(a, "script")), a.parentNode.removeChild(a));
            return e
        }

        function G(e, a) {
            var b = t(a.createElement(e)).appendTo(a.body),
                d = t.css(b[0], "display");
            b.detach();
            return d
        }

        function F(e) {
            var a = P,
                b = Wa[e];
            b || (b = G(e, a), "none" !== b && b || (Ca = (Ca || t("\x3ciframe frameborder\x3d'0' width\x3d'0' height\x3d'0'/\x3e")).appendTo(a.documentElement), a = Ca[0].contentDocument, a.write(), a.close(), b = G(e, a), Ca.detach()), Wa[e] = b);
            return b
        }

        function H(e, a, b) {
            var d = e.style;
            var l = (b = b || Da(e)) ?
                b.getPropertyValue(a) || b[a] : void 0;
            "" !== l && void 0 !== l || t.contains(e.ownerDocument, e) || (l = t.style(e, a));
            if (b && !V.pixelMarginRight() && Ia.test(l) && Xa.test(a)) {
                e = d.width;
                a = d.minWidth;
                var h = d.maxWidth;
                d.minWidth = d.maxWidth = d.width = l;
                l = b.width;
                d.width = e;
                d.minWidth = a;
                d.maxWidth = h
            }
            return void 0 !== l ? l + "" : l
        }

        function K(e, a) {
            return {
                get: function() {
                    if (e()) delete this.get;
                    else return (this.get = a).apply(this, arguments)
                }
            }
        }

        function I(e) {
            if (e in Ya) return e;
            for (var a = e[0].toUpperCase() + e.slice(1), b = Za.length; b--;)
                if (e =
                    Za[b] + a, e in Ya) return e
        }

        function J(e, a, b) {
            return (e = ma.exec(a)) ? Math.max(0, e[2] - (b || 0)) + (e[3] || "px") : a
        }

        function N(e, a, b, d, l) {
            a = b === (d ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
            for (var h = 0; 4 > a; a += 2) "margin" === b && (h += t.css(e, b + oa[a], !0, l)), d ? ("content" === b && (h -= t.css(e, "padding" + oa[a], !0, l)), "margin" !== b && (h -= t.css(e, "border" + oa[a] + "Width", !0, l))) : (h += t.css(e, "padding" + oa[a], !0, l), "padding" !== b && (h += t.css(e, "border" + oa[a] + "Width", !0, l)));
            return h
        }

        function W(e, a, b) {
            var d = !0,
                l = "width" === a ? e.offsetWidth : e.offsetHeight,
                h = Da(e),
                f = "border-box" === t.css(e, "boxSizing", !1, h);
            if (0 >= l || null == l) {
                l = H(e, a, h);
                if (0 > l || null == l) l = e.style[a];
                if (Ia.test(l)) return l;
                d = f && (V.boxSizingReliable() || l === e.style[a]);
                l = parseFloat(l) || 0
            }
            return l + N(e, a, b || (f ? "border" : "content"), d, h) + "px"
        }

        function O(e, a) {
            for (var b, d, l, h = [], f = 0, r = e.length; f < r; f++) d = e[f], d.style && (h[f] = M.get(d, "olddisplay"), b = d.style.display, a ? (h[f] || "none" !== b || (d.style.display = ""), "" === d.style.display && sa(d) && (h[f] = M.access(d, "olddisplay", F(d.nodeName)))) : (l = sa(d), "none" ===
                b && l || M.set(d, "olddisplay", l ? b : t.css(d, "display"))));
            for (f = 0; f < r; f++) d = e[f], !d.style || a && "none" !== d.style.display && "" !== d.style.display || (d.style.display = a ? h[f] || "" : "none");
            return e
        }

        function S(e, a, b, d, l) {
            return new S.prototype.init(e, a, b, d, l)
        }

        function Q() {
            c.setTimeout(function() {
                pa = void 0
            });
            return pa = t.now()
        }

        function R(e, a) {
            var b = 0,
                d = {
                    height: e
                };
            for (a = a ? 1 : 0; 4 > b; b += 2 - a) {
                var l = oa[b];
                d["margin" + l] = d["padding" + l] = e
            }
            a && (d.opacity = d.width = e);
            return d
        }

        function ja(e, a, b) {
            for (var d, l = (X.tweeners[a] || []).concat(X.tweeners["*"]),
                    h = 0, f = l.length; h < f; h++)
                if (d = l[h].call(b, a, e)) return d
        }

        function ca(e, a) {
            var b, d;
            for (b in e) {
                var l = t.camelCase(b);
                var h = a[l];
                var f = e[b];
                t.isArray(f) && (h = f[1], f = e[b] = f[0]);
                b !== l && (e[l] = f, delete e[b]);
                if ((d = t.cssHooks[l]) && "expand" in d)
                    for (b in f = d.expand(f), delete e[l], f) b in e || (e[b] = f[b], a[b] = h);
                else a[l] = h
            }
        }

        function X(e, a, b) {
            var d, l = 0,
                h = X.prefilters.length,
                f = t.Deferred().always(function() {
                    delete r.elem
                }),
                r = function() {
                    if (d) return !1;
                    for (var a = pa || Q(), a = Math.max(0, c.startTime + c.duration - a), b = 1 - (a / c.duration ||
                            0), l = 0, h = c.tweens.length; l < h; l++) c.tweens[l].run(b);
                    f.notifyWith(e, [c, b, a]);
                    if (1 > b && h) return a;
                    f.resolveWith(e, [c]);
                    return !1
                },
                c = f.promise({
                    elem: e,
                    props: t.extend({}, a),
                    opts: t.extend(!0, {
                        specialEasing: {},
                        easing: t.easing._default
                    }, b),
                    originalProperties: a,
                    originalOptions: b,
                    startTime: pa || Q(),
                    duration: b.duration,
                    tweens: [],
                    createTween: function(a, b) {
                        var d = t.Tween(e, c.opts, a, b, c.opts.specialEasing[a] || c.opts.easing);
                        c.tweens.push(d);
                        return d
                    },
                    stop: function(a) {
                        var b = 0,
                            l = a ? c.tweens.length : 0;
                        if (d) return this;
                        for (d = !0; b < l; b++) c.tweens[b].run(1);
                        a ? (f.notifyWith(e, [c, 1, 0]), f.resolveWith(e, [c, a])) : f.rejectWith(e, [c, a]);
                        return this
                    }
                });
            b = c.props;
            for (ca(b, c.opts.specialEasing); l < h; l++)
                if (a = X.prefilters[l].call(c, e, b, c.opts)) return t.isFunction(a.stop) && (t._queueHooks(c.elem, c.opts.queue).stop = t.proxy(a.stop, a)), a;
            t.map(b, ja, c);
            t.isFunction(c.opts.start) && c.opts.start.call(e, c);
            t.fx.timer(t.extend(r, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            }));
            return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function da(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function ea(e) {
            return function(a, b) {
                "string" !== typeof a && (b = a, a = "*");
                var d, l = 0,
                    h = a.toLowerCase().match(fa) || [];
                if (t.isFunction(b))
                    for (; d = h[l++];) "+" === d[0] ? (d = d.slice(1) || "*", (e[d] = e[d] || []).unshift(b)) : (e[d] = e[d] || []).push(b)
            }
        }

        function Z(e, a, b, d) {
            function l(c) {
                var r;
                h[c] = !0;
                t.each(e[c] || [], function(e, c) {
                    var g = c(a, b, d);
                    if ("string" === typeof g && !f && !h[g]) return a.dataTypes.unshift(g), l(g), !1;
                    if (f) return !(r = g)
                });
                return r
            }
            var h = {},
                f = e ===
                Ja;
            return l(a.dataTypes[0]) || !h["*"] && l("*")
        }

        function ga(e, a) {
            var b, d, l = t.ajaxSettings.flatOptions || {};
            for (b in a) void 0 !== a[b] && ((l[b] ? e : d || (d = {}))[b] = a[b]);
            d && t.extend(!0, e, d);
            return e
        }

        function ba(e, a, b, d) {
            var l;
            if (t.isArray(a)) t.each(a, function(a, l) {
                b || vb.test(e) ? d(e, l) : ba(e + "[" + ("object" === typeof l && null != l ? a : "") + "]", l, b, d)
            });
            else if (b || "object" !== t.type(a)) d(e, a);
            else
                for (l in a) ba(e + "[" + l + "]", a[l], b, d)
        }

        function ka(e) {
            return t.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ha = [],
            P = c.document,
            T = ha.slice,
            Va = ha.concat,
            Ka = ha.push,
            Ba = ha.indexOf,
            Ea = {},
            wb = Ea.toString,
            ua = Ea.hasOwnProperty,
            V = {},
            t = function(e, a) {
                return new t.fn.init(e, a)
            },
            xb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            yb = /^-ms-/,
            zb = /-([\da-z])/gi,
            Ab = function(e, a) {
                return a.toUpperCase()
            };
        t.fn = t.prototype = {
            jquery: "2.2.4",
            constructor: t,
            selector: "",
            length: 0,
            toArray: function() {
                return T.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : T.call(this)
            },
            pushStack: function(e) {
                e = t.merge(this.constructor(), e);
                e.prevObject =
                    this;
                e.context = this.context;
                return e
            },
            each: function(e) {
                return t.each(this, e)
            },
            map: function(e) {
                return this.pushStack(t.map(this, function(a, b) {
                    return e.call(a, b, a)
                }))
            },
            slice: function() {
                return this.pushStack(T.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var a = this.length;
                e = +e + (0 > e ? a : 0);
                return this.pushStack(0 <= e && e < a ? [this[e]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: Ka,
            sort: ha.sort,
            splice: ha.splice
        };
        t.extend =
            t.fn.extend = function() {
                var e, a, b, d = arguments[0] || {},
                    l = 1,
                    h = arguments.length,
                    f = !1;
                "boolean" === typeof d && (f = d, d = arguments[l] || {}, l++);
                "object" === typeof d || t.isFunction(d) || (d = {});
                l === h && (d = this, l--);
                for (; l < h; l++)
                    if (null != (e = arguments[l]))
                        for (a in e) {
                            var c = d[a];
                            var r = e[a];
                            d !== r && (f && r && (t.isPlainObject(r) || (b = t.isArray(r))) ? (b ? (b = !1, c = c && t.isArray(c) ? c : []) : c = c && t.isPlainObject(c) ? c : {}, d[a] = t.extend(f, c, r)) : void 0 !== r && (d[a] = r))
                        }
                return d
            };
        t.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g,
                ""),
            isReady: !0,
            error: function(e) {
                throw Error(e);
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === t.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var a = e && e.toString();
                return !t.isArray(e) && 0 <= a - parseFloat(a) + 1
            },
            isPlainObject: function(e) {
                var a;
                if ("object" !== t.type(e) || e.nodeType || t.isWindow(e) || e.constructor && !ua.call(e, "constructor") && !ua.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (a in e);
                return void 0 === a ||
                    ua.call(e, a)
            },
            isEmptyObject: function(e) {
                for (var a in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? Ea[wb.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var a = eval;
                if (e = t.trim(e)) 1 === e.indexOf("use strict") ? (a = P.createElement("script"), a.text = e, P.head.appendChild(a).parentNode.removeChild(a)) : a(e)
            },
            camelCase: function(e) {
                return e.replace(yb, "ms-").replace(zb, Ab)
            },
            nodeName: function(e, a) {
                return e.nodeName && e.nodeName.toLowerCase() === a.toLowerCase()
            },
            each: function(e, a) {
                var b, d = 0;
                if (k(e))
                    for (b = e.length; d < b && !1 !== a.call(e[d], d, e[d]); d++);
                else
                    for (d in e)
                        if (!1 === a.call(e[d], d, e[d])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(xb, "")
            },
            makeArray: function(e, a) {
                var b = a || [];
                null != e && (k(Object(e)) ? t.merge(b, "string" === typeof e ? [e] : e) : Ka.call(b, e));
                return b
            },
            inArray: function(e, a, b) {
                return null == a ? -1 : Ba.call(a, e, b)
            },
            merge: function(e, a) {
                for (var b = +a.length, d = 0, l = e.length; d < b; d++) e[l++] = a[d];
                e.length = l;
                return e
            },
            grep: function(e, a, b) {
                for (var d = [], l = 0, h = e.length, f = !b; l < h; l++) b = !a(e[l], l), b !== f && d.push(e[l]);
                return d
            },
            map: function(e, a, b) {
                var d, l = 0,
                    h = [];
                if (k(e))
                    for (d = e.length; l < d; l++) {
                        var f = a(e[l], l, b);
                        null != f && h.push(f)
                    } else
                        for (l in e) f = a(e[l], l, b), null != f && h.push(f);
                return Va.apply([], h)
            },
            guid: 1,
            proxy: function(e, a) {
                if ("string" === typeof a) {
                    var b = e[a];
                    a = e;
                    e = b
                }
                if (t.isFunction(e)) {
                    var d = T.call(arguments, 2);
                    b = function() {
                        return e.apply(a || this, d.concat(T.call(arguments)))
                    };
                    b.guid = e.guid = e.guid || t.guid++;
                    return b
                }
            },
            now: Date.now,
            support: V
        });
        "function" ===
        typeof Symbol && (t.fn[Symbol.iterator] = ha[Symbol.iterator]);
        t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, a) {
            Ea["[object " + a + "]"] = a.toLowerCase()
        });
        var ta = function(e) {
            function a(e, a, b, d) {
                var l, h, f, c, r = a && a.ownerDocument,
                    g = a ? a.nodeType : 9;
                b = b || [];
                if ("string" !== typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return b;
                if (!d && ((a ? a.ownerDocument || a : K) !== z && va(a), a = a || z, n)) {
                    if (11 !== g && (c = la.exec(e)))
                        if (l = c[1])
                            if (9 === g)
                                if (h = a.getElementById(l)) {
                                    if (h.id === l) return b.push(h),
                                        b
                                } else return b;
                    else {
                        if (r && (h = r.getElementById(l)) && F(a, h) && h.id === l) return b.push(h), b
                    } else {
                        if (c[2]) return ca.apply(b, a.getElementsByTagName(e)), b;
                        if ((l = c[3]) && Y.getElementsByClassName && a.getElementsByClassName) return ca.apply(b, a.getElementsByClassName(l)), b
                    }
                    if (!(!Y.qsa || S[e + " "] || E && E.test(e))) {
                        if (1 !== g) {
                            r = a;
                            var w = e
                        } else if ("object" !== a.nodeName.toLowerCase()) {
                            (f = a.getAttribute("id")) ? f = f.replace(oa, "\\$\x26"): a.setAttribute("id", f = H);
                            c = ma(e);
                            l = c.length;
                            for (h = ga.test(f) ? "#" + f : "[id\x3d'" + f + "']"; l--;) c[l] =
                                h + " " + k(c[l]);
                            w = c.join(",");
                            r = ka.test(e) && q(a.parentNode) || a
                        }
                        if (w) try {
                            return ca.apply(b, r.querySelectorAll(w)), b
                        } catch (ic) {} finally {
                            f === H && a.removeAttribute("id")
                        }
                    }
                }
                return ua(e.replace(T, "$1"), a, b, d)
            }

            function b() {
                function e(b, d) {
                    a.push(b + " ") > U.cacheLength && delete e[a.shift()];
                    return e[b + " "] = d
                }
                var a = [];
                return e
            }

            function d(e) {
                e[H] = !0;
                return e
            }

            function l(e) {
                var a = z.createElement("div");
                try {
                    return !!e(a)
                } catch (gc) {
                    return !1
                } finally {
                    a.parentNode && a.parentNode.removeChild(a)
                }
            }

            function h(e, a) {
                for (var b =
                        e.split("|"), d = b.length; d--;) U.attrHandle[b[d]] = a
            }

            function f(e, a) {
                var b = a && e,
                    d = b && 1 === e.nodeType && 1 === a.nodeType && (~a.sourceIndex || -2147483648) - (~e.sourceIndex || -2147483648);
                if (d) return d;
                if (b)
                    for (; b = b.nextSibling;)
                        if (b === a) return -1;
                return e ? 1 : -1
            }

            function c(e) {
                return function(a) {
                    return "input" === a.nodeName.toLowerCase() && a.type === e
                }
            }

            function r(e) {
                return function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && a.type === e
                }
            }

            function g(e) {
                return d(function(a) {
                    a = +a;
                    return d(function(b,
                        d) {
                        for (var l, h = e([], b.length, a), f = h.length; f--;) b[l = h[f]] && (b[l] = !(d[l] = b[l]))
                    })
                })
            }

            function q(e) {
                return e && "undefined" !== typeof e.getElementsByTagName && e
            }

            function w() {}

            function k(e) {
                for (var a = 0, b = e.length, d = ""; a < b; a++) d += e[a].value;
                return d
            }

            function x(e, a, b) {
                var d = a.dir,
                    l = b && "parentNode" === d,
                    h = J++;
                return a.first ? function(a, b, h) {
                    for (; a = a[d];)
                        if (1 === a.nodeType || l) return e(a, b, h)
                } : function(a, b, f) {
                    var c, r = [I, h];
                    if (f)
                        for (; a = a[d];) {
                            if ((1 === a.nodeType || l) && e(a, b, f)) return !0
                        } else
                            for (; a = a[d];)
                                if (1 === a.nodeType ||
                                    l) {
                                    var g = a[H] || (a[H] = {});
                                    g = g[a.uniqueID] || (g[a.uniqueID] = {});
                                    if ((c = g[d]) && c[0] === I && c[1] === h) return r[2] = c[2];
                                    g[d] = r;
                                    if (r[2] = e(a, b, f)) return !0
                                }
                }
            }

            function L(e) {
                return 1 < e.length ? function(a, b, d) {
                    for (var l = e.length; l--;)
                        if (!e[l](a, b, d)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, a, b, d, l) {
                for (var h, f = [], c = 0, r = e.length, g = null != a; c < r; c++)
                    if (h = e[c])
                        if (!b || b(h, d, l)) f.push(h), g && a.push(c);
                return f
            }

            function v(e, b, l, h, f, c) {
                h && !h[H] && (h = v(h));
                f && !f[H] && (f = v(f, c));
                return d(function(d, c, r, g) {
                    var q, w = [],
                        k = [],
                        x = c.length,
                        L;
                    if (!(L = d)) {
                        L = b || "*";
                        for (var v = r.nodeType ? [r] : r, u = [], A = 0, C = v.length; A < C; A++) a(L, v[A], u);
                        L = u
                    }
                    L = !e || !d && b ? L : m(L, w, e, r, g);
                    v = l ? f || (d ? e : x || h) ? [] : c : L;
                    l && l(L, v, r, g);
                    if (h) {
                        var y = m(v, k);
                        h(y, [], r, g);
                        for (r = y.length; r--;)
                            if (q = y[r]) v[k[r]] = !(L[k[r]] = q)
                    }
                    if (d) {
                        if (f || e) {
                            if (f) {
                                y = [];
                                for (r = v.length; r--;)(q = v[r]) && y.push(L[r] = q);
                                f(null, v = [], y, g)
                            }
                            for (r = v.length; r--;)(q = v[r]) && -1 < (y = f ? M(d, q) : w[r]) && (d[y] = !(c[y] = q))
                        }
                    } else v = m(v === c ? v.splice(x, v.length) : v), f ? f(null, c, v, g) : ca.apply(c, v)
                })
            }

            function u(e) {
                var a, b, d = e.length,
                    l = U.relative[e[0].type];
                var h = l || U.relative[" "];
                for (var f = l ? 1 : 0, c = x(function(e) {
                        return e === a
                    }, h, !0), r = x(function(e) {
                        return -1 < M(a, e)
                    }, h, !0), g = [function(e, b, d) {
                        e = !l && (d || b !== y) || ((a = b).nodeType ? c(e, b, d) : r(e, b, d));
                        a = null;
                        return e
                    }]; f < d; f++)
                    if (h = U.relative[e[f].type]) g = [x(L(g), h)];
                    else {
                        h = U.filter[e[f].type].apply(null, e[f].matches);
                        if (h[H]) {
                            for (b = ++f; b < d && !U.relative[e[b].type]; b++);
                            return v(1 < f && L(g), 1 < f && k(e.slice(0, f - 1).concat({
                                value: " " === e[f - 2].type ? "*" : ""
                            })).replace(T, "$1"), h, f < b && u(e.slice(f,
                                b)), b < d && u(e = e.slice(b)), b < d && k(e))
                        }
                        g.push(h)
                    }
                return L(g)
            }

            function A(e, b) {
                var l = 0 < b.length,
                    h = 0 < e.length,
                    f = function(d, f, c, r, g) {
                        var q, w, k = 0,
                            x = "0",
                            L = d && [],
                            v = [],
                            u = y,
                            A = d || h && U.find.TAG("*", g),
                            C = I += null == u ? 1 : Math.random() || .1,
                            t = A.length;
                        for (g && (y = f === z || f || g); x !== t && null != (q = A[x]); x++) {
                            if (h && q) {
                                var Ha = 0;
                                f || q.ownerDocument === z || (va(q), c = !n);
                                for (; w = e[Ha++];)
                                    if (w(q, f || z, c)) {
                                        r.push(q);
                                        break
                                    }
                                g && (I = C)
                            }
                            l && ((q = !w && q) && k--, d && L.push(q))
                        }
                        k += x;
                        if (l && x !== k) {
                            for (Ha = 0; w = b[Ha++];) w(L, v, f, c);
                            if (d) {
                                if (0 < k)
                                    for (; x--;) L[x] ||
                                        v[x] || (v[x] = ja.call(r));
                                v = m(v)
                            }
                            ca.apply(r, v);
                            g && !d && 0 < v.length && 1 < k + b.length && a.uniqueSort(r)
                        }
                        g && (I = C, y = u);
                        return L
                    };
                return l ? d(f) : f
            }
            var C, y, t, p, z, B, n, E, D, G, F, H = "sizzle" + 1 * new Date,
                K = e.document,
                I = 0,
                J = 0,
                N = b(),
                W = b(),
                S = b(),
                O = function(e, a) {
                    e === a && (p = !0);
                    return 0
                },
                Q = {}.hasOwnProperty,
                R = [],
                ja = R.pop,
                X = R.push,
                ca = R.push,
                P = R.slice,
                M = function(e, a) {
                    for (var b = 0, d = e.length; b < d; b++)
                        if (e[b] === a) return b;
                    return -1
                },
                da = RegExp("[\\x20\\t\\r\\n\\f]+", "g"),
                T = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                    "g"),
                V = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                Z = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                aa = RegExp("\x3d[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                ea = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                ga = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
                ba = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
                    ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                    PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                    bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                    needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                },
                ha = /^(?:input|select|textarea|button)$/i,
                ia = /^h\d$/i,
                fa =
                /^[^{]+\{\s*\[native \w/,
                la = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ka = /[+~]/,
                oa = /'|\\/g,
                qa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
                ra = function(e, a, b) {
                    e = "0x" + a - 65536;
                    return e !== e || b ? a : 0 > e ? String.fromCharCode(e + 65536) : String.fromCharCode(e >> 10 | 55296, e & 1023 | 56320)
                },
                pa = function() {
                    va()
                };
            try {
                ca.apply(R = P.call(K.childNodes), K.childNodes), R[K.childNodes.length].nodeType
            } catch (fc) {
                ca = {
                    apply: R.length ? function(e, a) {
                        X.apply(e, P.call(a))
                    } : function(e, a) {
                        for (var b = e.length, d = 0; e[b++] =
                            a[d++];);
                        e.length = b - 1
                    }
                }
            }
            var Y = a.support = {};
            var ta = a.isXML = function(e) {
                return (e = e && (e.ownerDocument || e).documentElement) ? "HTML" !== e.nodeName : !1
            };
            var va = a.setDocument = function(e) {
                var a;
                e = e ? e.ownerDocument || e : K;
                if (e === z || 9 !== e.nodeType || !e.documentElement) return z;
                z = e;
                B = z.documentElement;
                n = !ta(z);
                (a = z.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", pa, !1) : a.attachEvent && a.attachEvent("onunload", pa));
                Y.attributes = l(function(e) {
                    e.className = "i";
                    return !e.getAttribute("className")
                });
                Y.getElementsByTagName = l(function(e) {
                    e.appendChild(z.createComment(""));
                    return !e.getElementsByTagName("*").length
                });
                Y.getElementsByClassName = fa.test(z.getElementsByClassName);
                Y.getById = l(function(e) {
                    B.appendChild(e).id = H;
                    return !z.getElementsByName || !z.getElementsByName(H).length
                });
                Y.getById ? (U.find.ID = function(e, a) {
                    if ("undefined" !== typeof a.getElementById && n) {
                        var b = a.getElementById(e);
                        return b ? [b] : []
                    }
                }, U.filter.ID = function(e) {
                    var a = e.replace(qa, ra);
                    return function(e) {
                        return e.getAttribute("id") ===
                            a
                    }
                }) : (delete U.find.ID, U.filter.ID = function(e) {
                    var a = e.replace(qa, ra);
                    return function(e) {
                        return (e = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id")) && e.value === a
                    }
                });
                U.find.TAG = Y.getElementsByTagName ? function(e, a) {
                    if ("undefined" !== typeof a.getElementsByTagName) return a.getElementsByTagName(e);
                    if (Y.qsa) return a.querySelectorAll(e)
                } : function(e, a) {
                    var b, d = [],
                        l = 0,
                        h = a.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; b = h[l++];) 1 === b.nodeType && d.push(b);
                        return d
                    }
                    return h
                };
                U.find.CLASS = Y.getElementsByClassName &&
                    function(e, a) {
                        if ("undefined" !== typeof a.getElementsByClassName && n) return a.getElementsByClassName(e)
                    };
                D = [];
                E = [];
                if (Y.qsa = fa.test(z.querySelectorAll)) l(function(e) {
                    B.appendChild(e).innerHTML = "\x3ca id\x3d'" + H + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + H + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
                    e.querySelectorAll("[msallowcapture^\x3d'']").length && E.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    e.querySelectorAll("[selected]").length || E.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    e.querySelectorAll("[id~\x3d" + H + "-]").length || E.push("~\x3d");
                    e.querySelectorAll(":checked").length || E.push(":checked");
                    e.querySelectorAll("a#" + H + "+*").length || E.push(".#.+[+~]")
                }), l(function(e) {
                    var a = z.createElement("input");
                    a.setAttribute("type", "hidden");
                    e.appendChild(a).setAttribute("name", "D");
                    e.querySelectorAll("[name\x3dd]").length && E.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
                    e.querySelectorAll(":enabled").length || E.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    E.push(",.*:")
                });
                (Y.matchesSelector = fa.test(G = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && l(function(e) {
                    Y.disconnectedMatch = G.call(e, "div");
                    G.call(e, "[s!\x3d'']:x");
                    D.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                });
                E = E.length && new RegExp(E.join("|"));
                D = D.length && new RegExp(D.join("|"));
                F = (a = fa.test(B.compareDocumentPosition)) || fa.test(B.contains) ? function(e, a) {
                    var b = 9 === e.nodeType ? e.documentElement : e,
                        d = a && a.parentNode;
                    return e === d || !!(d && 1 === d.nodeType && (b.contains ? b.contains(d) : e.compareDocumentPosition && e.compareDocumentPosition(d) & 16))
                } : function(e, a) {
                    if (a)
                        for (; a = a.parentNode;)
                            if (a === e) return !0;
                    return !1
                };
                O = a ? function(e, a) {
                    if (e === a) return p = !0, 0;
                    var b = !e.compareDocumentPosition - !a.compareDocumentPosition;
                    if (b) return b;
                    b = (e.ownerDocument || e) === (a.ownerDocument || a) ? e.compareDocumentPosition(a) : 1;
                    return b & 1 || !Y.sortDetached && a.compareDocumentPosition(e) === b ? e === z || e.ownerDocument === K && F(K, e) ? -1 : a === z || a.ownerDocument === K && F(K, a) ? 1 : t ? M(t, e) - M(t, a) : 0 : b & 4 ? -1 : 1
                } : function(e, a) {
                    if (e === a) return p = !0, 0;
                    var b = 0;
                    var d = e.parentNode;
                    var l = a.parentNode,
                        h = [e],
                        c = [a];
                    if (!d || !l) return e === z ? -1 : a === z ? 1 : d ? -1 : l ? 1 : t ? M(t, e) - M(t, a) : 0;
                    if (d === l) return f(e, a);
                    for (d = e; d = d.parentNode;) h.unshift(d);
                    for (d = a; d = d.parentNode;) c.unshift(d);
                    for (; h[b] ===
                        c[b];) b++;
                    return b ? f(h[b], c[b]) : h[b] === K ? -1 : c[b] === K ? 1 : 0
                };
                return z
            };
            a.matches = function(e, b) {
                return a(e, null, null, b)
            };
            a.matchesSelector = function(e, b) {
                (e.ownerDocument || e) !== z && va(e);
                b = b.replace(aa, "\x3d'$1']");
                if (!(!Y.matchesSelector || !n || S[b + " "] || D && D.test(b) || E && E.test(b))) try {
                    var d = G.call(e, b);
                    if (d || Y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return d
                } catch (hc) {}
                return 0 < a(b, z, null, [e]).length
            };
            a.contains = function(e, a) {
                (e.ownerDocument || e) !== z && va(e);
                return F(e, a)
            };
            a.attr = function(e,
                a) {
                (e.ownerDocument || e) !== z && va(e);
                var b = U.attrHandle[a.toLowerCase()],
                    b = b && Q.call(U.attrHandle, a.toLowerCase()) ? b(e, a, !n) : void 0;
                return void 0 !== b ? b : Y.attributes || !n ? e.getAttribute(a) : (b = e.getAttributeNode(a)) && b.specified ? b.value : null
            };
            a.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e);
            };
            a.uniqueSort = function(e) {
                var a, b = [],
                    d = 0,
                    l = 0;
                p = !Y.detectDuplicates;
                t = !Y.sortStable && e.slice(0);
                e.sort(O);
                if (p) {
                    for (; a = e[l++];) a === e[l] && (d = b.push(l));
                    for (; d--;) e.splice(b[d], 1)
                }
                t = null;
                return e
            };
            var na = a.getText = function(e) {
                var a = "",
                    b = 0;
                var d = e.nodeType;
                if (!d)
                    for (; d = e[b++];) a += na(d);
                else if (1 === d || 9 === d || 11 === d) {
                    if ("string" === typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) a += na(e)
                } else if (3 === d || 4 === d) return e.nodeValue;
                return a
            };
            var U = a.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: ba,
                attrHandle: {},
                find: {},
                relative: {
                    "\x3e": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        e[1] =
                            e[1].replace(qa, ra);
                        e[3] = (e[3] || e[4] || e[5] || "").replace(qa, ra);
                        "~\x3d" === e[2] && (e[3] = " " + e[3] + " ");
                        return e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        e[1] = e[1].toLowerCase();
                        "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]);
                        return e
                    },
                    PSEUDO: function(e) {
                        var a, b = !e[6] && e[2];
                        if (ba.CHILD.test(e[0])) return null;
                        e[3] ? e[2] = e[4] || e[5] || "" : b && ea.test(b) && (a = ma(b, !0)) && (a = b.indexOf(")", b.length - a) - b.length) && (e[0] =
                            e[0].slice(0, a), e[2] = b.slice(0, a));
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    TAG: function(e) {
                        var a = e.replace(qa, ra).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === a
                        }
                    },
                    CLASS: function(e) {
                        var a = N[e + " "];
                        return a || (a = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)"), N(e, function(e) {
                            return a.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                        }))
                    },
                    ATTR: function(e, b, d) {
                        return function(l) {
                            l =
                                a.attr(l, e);
                            if (null == l) return "!\x3d" === b;
                            if (!b) return !0;
                            l += "";
                            return "\x3d" === b ? l === d : "!\x3d" === b ? l !== d : "^\x3d" === b ? d && 0 === l.indexOf(d) : "*\x3d" === b ? d && -1 < l.indexOf(d) : "$\x3d" === b ? d && l.slice(-d.length) === d : "~\x3d" === b ? -1 < (" " + l.replace(da, " ") + " ").indexOf(d) : "|\x3d" === b ? l === d || l.slice(0, d.length + 1) === d + "-" : !1
                        }
                    },
                    CHILD: function(e, a, b, d, l) {
                        var h = "nth" !== e.slice(0, 3),
                            f = "last" !== e.slice(-4),
                            c = "of-type" === a;
                        return 1 === d && 0 === l ? function(e) {
                            return !!e.parentNode
                        } : function(a, b, r) {
                            var g, q;
                            b = h !== f ? "nextSibling" :
                                "previousSibling";
                            var w = a.parentNode,
                                k = c && a.nodeName.toLowerCase();
                            r = !r && !c;
                            var x = !1;
                            if (w) {
                                if (h) {
                                    for (; b;) {
                                        for (g = a; g = g[b];)
                                            if (c ? g.nodeName.toLowerCase() === k : 1 === g.nodeType) return !1;
                                        var L = b = "only" === e && !L && "nextSibling"
                                    }
                                    return !0
                                }
                                L = [f ? w.firstChild : w.lastChild];
                                if (f && r) {
                                    g = w;
                                    var m = g[H] || (g[H] = {});
                                    m = m[g.uniqueID] || (m[g.uniqueID] = {});
                                    x = m[e] || [];
                                    x = (q = x[0] === I && x[1]) && x[2];
                                    for (g = q && w.childNodes[q]; g = ++q && g && g[b] || (x = q = 0) || L.pop();)
                                        if (1 === g.nodeType && ++x && g === a) {
                                            m[e] = [I, q, x];
                                            break
                                        }
                                } else if (r && (g = a, m = g[H] ||
                                        (g[H] = {}), m = m[g.uniqueID] || (m[g.uniqueID] = {}), x = m[e] || [], x = q = x[0] === I && x[1]), !1 === x)
                                    for (;
                                        (g = ++q && g && g[b] || (x = q = 0) || L.pop()) && ((c ? g.nodeName.toLowerCase() !== k : 1 !== g.nodeType) || !++x || (r && (m = g[H] || (g[H] = {}), m = m[g.uniqueID] || (m[g.uniqueID] = {}), m[e] = [I, x]), g !== a)););
                                x -= l;
                                return x === d || 0 === x % d && 0 <= x / d
                            }
                        }
                    },
                    PSEUDO: function(e, b) {
                        var l = U.pseudos[e] || U.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                        if (l[H]) return l(b);
                        if (1 < l.length) {
                            var h = [e, e, "", b];
                            return U.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                d(function(e, a) {
                                    for (var d, h = l(e, b), f = h.length; f--;) d = M(e, h[f]), e[d] = !(a[d] = h[f])
                                }) : function(e) {
                                    return l(e, 0, h)
                                }
                        }
                        return l
                    }
                },
                pseudos: {
                    not: d(function(e) {
                        var a = [],
                            b = [],
                            l = sa(e.replace(T, "$1"));
                        return l[H] ? d(function(e, a, b, d) {
                            d = l(e, null, d, []);
                            for (var h = e.length; h--;)
                                if (b = d[h]) e[h] = !(a[h] = b)
                        }) : function(e, d, h) {
                            a[0] = e;
                            l(a, null, h, b);
                            a[0] = null;
                            return !b.pop()
                        }
                    }),
                    has: d(function(e) {
                        return function(b) {
                            return 0 < a(e, b).length
                        }
                    }),
                    contains: d(function(e) {
                        e = e.replace(qa, ra);
                        return function(a) {
                            return -1 < (a.textContent ||
                                a.innerText || na(a)).indexOf(e)
                        }
                    }),
                    lang: d(function(e) {
                        ga.test(e || "") || a.error("unsupported lang: " + e);
                        e = e.replace(qa, ra).toLowerCase();
                        return function(a) {
                            var b;
                            do
                                if (b = n ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) return b = b.toLowerCase(), b === e || 0 === b.indexOf(e + "-");
                            while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                    }),
                    target: function(a) {
                        var b = e.location && e.location.hash;
                        return b && b.slice(1) === a.id
                    },
                    root: function(e) {
                        return e === B
                    },
                    focus: function(e) {
                        return e === z.activeElement && (!z.hasFocus ||
                            z.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var a = e.nodeName.toLowerCase();
                        return "input" === a && !!e.checked || "option" === a && !!e.selected
                    },
                    selected: function(e) {
                        e.parentNode && e.parentNode.selectedIndex;
                        return !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (6 > e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !U.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ia.test(e.nodeName)
                    },
                    input: function(e) {
                        return ha.test(e.nodeName)
                    },
                    button: function(e) {
                        var a = e.nodeName.toLowerCase();
                        return "input" === a && "button" === e.type || "button" === a
                    },
                    text: function(e) {
                        var a;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (a = e.getAttribute("type")) || "text" === a.toLowerCase())
                    },
                    first: g(function() {
                        return [0]
                    }),
                    last: g(function(e, a) {
                        return [a - 1]
                    }),
                    eq: g(function(e, a, b) {
                        return [0 > b ? b + a : b]
                    }),
                    even: g(function(e, a) {
                        for (var b = 0; b < a; b += 2) e.push(b);
                        return e
                    }),
                    odd: g(function(e, a) {
                        for (var b = 1; b < a; b +=
                            2) e.push(b);
                        return e
                    }),
                    lt: g(function(e, a, b) {
                        for (a = 0 > b ? b + a : b; 0 <= --a;) e.push(a);
                        return e
                    }),
                    gt: g(function(e, a, b) {
                        for (b = 0 > b ? b + a : b; ++b < a;) e.push(b);
                        return e
                    })
                }
            };
            U.pseudos.nth = U.pseudos.eq;
            for (C in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) U.pseudos[C] = c(C);
            for (C in {
                    submit: !0,
                    reset: !0
                }) U.pseudos[C] = r(C);
            w.prototype = U.filters = U.pseudos;
            U.setFilters = new w;
            var ma = a.tokenize = function(e, b) {
                var d, l, h, f, c;
                if (f = W[e + " "]) return b ? 0 : f.slice(0);
                f = e;
                var r = [];
                for (c = U.preFilter; f;) {
                    if (!g || (d = V.exec(f))) d && (f =
                        f.slice(d[0].length) || f), r.push(l = []);
                    var g = !1;
                    if (d = Z.exec(f)) g = d.shift(), l.push({
                        value: g,
                        type: d[0].replace(T, " ")
                    }), f = f.slice(g.length);
                    for (h in U.filter) !(d = ba[h].exec(f)) || c[h] && !(d = c[h](d)) || (g = d.shift(), l.push({
                        value: g,
                        type: h,
                        matches: d
                    }), f = f.slice(g.length));
                    if (!g) break
                }
                return b ? f.length : f ? a.error(e) : W(e, r).slice(0)
            };
            var sa = a.compile = function(e, a) {
                var b, d = [],
                    l = [],
                    h = S[e + " "];
                if (!h) {
                    a || (a = ma(e));
                    for (b = a.length; b--;) h = u(a[b]), h[H] ? d.push(h) : l.push(h);
                    h = S(e, A(l, d));
                    h.selector = e
                }
                return h
            };
            var ua =
                a.select = function(e, a, b, d) {
                    var l, h, f, c = "function" === typeof e && e,
                        r = !d && ma(e = c.selector || e);
                    b = b || [];
                    if (1 === r.length) {
                        var g = r[0] = r[0].slice(0);
                        if (2 < g.length && "ID" === (h = g[0]).type && Y.getById && 9 === a.nodeType && n && U.relative[g[1].type]) {
                            a = (U.find.ID(h.matches[0].replace(qa, ra), a) || [])[0];
                            if (!a) return b;
                            c && (a = a.parentNode);
                            e = e.slice(g.shift().value.length)
                        }
                        for (l = ba.needsContext.test(e) ? 0 : g.length; l--;) {
                            h = g[l];
                            if (U.relative[f = h.type]) break;
                            if (f = U.find[f])
                                if (d = f(h.matches[0].replace(qa, ra), ka.test(g[0].type) &&
                                        q(a.parentNode) || a)) {
                                    g.splice(l, 1);
                                    e = d.length && k(g);
                                    if (!e) return ca.apply(b, d), b;
                                    break
                                }
                        }
                    }(c || sa(e, r))(d, a, !n, b, !a || ka.test(e) && q(a.parentNode) || a);
                    return b
                };
            Y.sortStable = H.split("").sort(O).join("") === H;
            Y.detectDuplicates = !!p;
            va();
            Y.sortDetached = l(function(e) {
                return e.compareDocumentPosition(z.createElement("div")) & 1
            });
            l(function(e) {
                e.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
                return "#" === e.firstChild.getAttribute("href")
            }) || h("type|href|height|width", function(e, a, b) {
                if (!b) return e.getAttribute(a,
                    "type" === a.toLowerCase() ? 1 : 2)
            });
            Y.attributes && l(function(e) {
                e.innerHTML = "\x3cinput/\x3e";
                e.firstChild.setAttribute("value", "");
                return "" === e.firstChild.getAttribute("value")
            }) || h("value", function(e, a, b) {
                if (!b && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            });
            l(function(e) {
                return null == e.getAttribute("disabled")
            }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(e, a, b) {
                var d;
                if (!b) return !0 === e[a] ? a.toLowerCase() :
                    (d = e.getAttributeNode(a)) && d.specified ? d.value : null
            });
            return a
        }(c);
        t.find = ta;
        t.expr = ta.selectors;
        t.expr[":"] = t.expr.pseudos;
        t.uniqueSort = t.unique = ta.uniqueSort;
        t.text = ta.getText;
        t.isXMLDoc = ta.isXML;
        t.contains = ta.contains;
        var na = function(e, a, b) {
                for (var d = [], l = void 0 !== b;
                    (e = e[a]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (l && t(e).is(b)) break;
                        d.push(e)
                    }
                return d
            },
            $a = function(e, a) {
                for (var b = []; e; e = e.nextSibling) 1 === e.nodeType && e !== a && b.push(e);
                return b
            },
            ab = t.expr.match.needsContext,
            bb = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            nb = /^.[^:#\[\.,]*$/;
        t.filter = function(e, a, b) {
            var d = a[0];
            b && (e = ":not(" + e + ")");
            return 1 === a.length && 1 === d.nodeType ? t.find.matchesSelector(d, e) ? [d] : [] : t.find.matches(e, t.grep(a, function(e) {
                return 1 === e.nodeType
            }))
        };
        t.fn.extend({
            find: function(e) {
                var a, b = this.length,
                    d = [],
                    l = this;
                if ("string" !== typeof e) return this.pushStack(t(e).filter(function() {
                    for (a = 0; a < b; a++)
                        if (t.contains(l[a], this)) return !0
                }));
                for (a = 0; a < b; a++) t.find(e, l[a], d);
                d = this.pushStack(1 < b ? t.unique(d) : d);
                d.selector = this.selector ? this.selector +
                    " " + e : e;
                return d
            },
            filter: function(e) {
                return this.pushStack(d(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(d(this, e || [], !0))
            },
            is: function(e) {
                return !!d(this, "string" === typeof e && ab.test(e) ? t(e) : e || [], !1).length
            }
        });
        var Cb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (t.fn.init = function(e, a, b) {
            if (!e) return this;
            b = b || Db;
            if ("string" === typeof e) {
                var d = "\x3c" === e[0] && "\x3e" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Cb.exec(e);
                if (!d || !d[1] && a) return !a || a.jquery ? (a || b).find(e) : this.constructor(a).find(e);
                if (d[1]) {
                    if (a = a instanceof t ? a[0] : a, t.merge(this, t.parseHTML(d[1], a && a.nodeType ? a.ownerDocument || a : P, !0)), bb.test(d[1]) && t.isPlainObject(a))
                        for (d in a)
                            if (t.isFunction(this[d])) this[d](a[d]);
                            else this.attr(d, a[d])
                } else(a = P.getElementById(d[2])) && a.parentNode && (this.length = 1, this[0] = a), this.context = P, this.selector = e;
                return this
            }
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (t.isFunction(e)) return void 0 !== b.ready ? b.ready(e) : e(t);
            void 0 !== e.selector && (this.selector = e.selector, this.context =
                e.context);
            return t.makeArray(e, this)
        }).prototype = t.fn;
        var Db = t(P);
        var Eb = /^(?:parents|prev(?:Until|All))/,
            Fb = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        t.fn.extend({
            has: function(e) {
                var a = t(e, this),
                    b = a.length;
                return this.filter(function() {
                    for (var e = 0; e < b; e++)
                        if (t.contains(this, a[e])) return !0
                })
            },
            closest: function(e, a) {
                for (var b, d = 0, l = this.length, h = [], f = ab.test(e) || "string" !== typeof e ? t(e, a || this.context) : 0; d < l; d++)
                    for (b = this[d]; b && b !== a; b = b.parentNode)
                        if (11 > b.nodeType && (f ? -1 < f.index(b) : 1 === b.nodeType &&
                                t.find.matchesSelector(b, e))) {
                            h.push(b);
                            break
                        }
                return this.pushStack(1 < h.length ? t.uniqueSort(h) : h)
            },
            index: function(e) {
                return e ? "string" === typeof e ? Ba.call(t(e), this[0]) : Ba.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, a) {
                return this.pushStack(t.uniqueSort(t.merge(this.get(), t(e, a))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        });
        t.each({
            parent: function(e) {
                return (e = e.parentNode) && 11 !== e.nodeType ? e :
                    null
            },
            parents: function(e) {
                return na(e, "parentNode")
            },
            parentsUntil: function(e, a, b) {
                return na(e, "parentNode", b)
            },
            next: function(e) {
                return f(e, "nextSibling")
            },
            prev: function(e) {
                return f(e, "previousSibling")
            },
            nextAll: function(e) {
                return na(e, "nextSibling")
            },
            prevAll: function(e) {
                return na(e, "previousSibling")
            },
            nextUntil: function(e, a, b) {
                return na(e, "nextSibling", b)
            },
            prevUntil: function(e, a, b) {
                return na(e, "previousSibling", b)
            },
            siblings: function(e) {
                return $a((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return $a(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || t.merge([], e.childNodes)
            }
        }, function(e, a) {
            t.fn[e] = function(b, d) {
                var l = t.map(this, a, b);
                "Until" !== e.slice(-5) && (d = b);
                d && "string" === typeof d && (l = t.filter(d, l));
                1 < this.length && (Fb[e] || t.uniqueSort(l), Eb.test(e) && l.reverse());
                return this.pushStack(l)
            }
        });
        var fa = /\S+/g;
        t.Callbacks = function(e) {
            e = "string" === typeof e ? b(e) : t.extend({}, e);
            var a, d, l, h, f = [],
                c = [],
                r = -1,
                g = function() {
                    h = e.once;
                    for (l = a = !0; c.length; r = -1)
                        for (d = c.shift(); ++r < f.length;) !1 === f[r].apply(d[0], d[1]) &&
                            e.stopOnFalse && (r = f.length, d = !1);
                    e.memory || (d = !1);
                    a = !1;
                    h && (f = d ? [] : "")
                },
                q = {
                    add: function() {
                        f && (d && !a && (r = f.length - 1, c.push(d)), function qb(a) {
                            t.each(a, function(a, b) {
                                t.isFunction(b) ? e.unique && q.has(b) || f.push(b) : b && b.length && "string" !== t.type(b) && qb(b)
                            })
                        }(arguments), d && !a && g());
                        return this
                    },
                    remove: function() {
                        t.each(arguments, function(e, a) {
                            for (var b; - 1 < (b = t.inArray(a, f, b));) f.splice(b, 1), b <= r && r--
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? -1 < t.inArray(e, f) : 0 < f.length
                    },
                    empty: function() {
                        f && (f = []);
                        return this
                    },
                    disable: function() {
                        h = c = [];
                        f = d = "";
                        return this
                    },
                    disabled: function() {
                        return !f
                    },
                    lock: function() {
                        h = c = [];
                        d || (f = d = "");
                        return this
                    },
                    locked: function() {
                        return !!h
                    },
                    fireWith: function(e, b) {
                        h || (b = b || [], b = [e, b.slice ? b.slice() : b], c.push(b), a || g());
                        return this
                    },
                    fire: function() {
                        q.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!l
                    }
                };
            return q
        };
        t.extend({
            Deferred: function(e) {
                var a = [
                        ["resolve", "done", t.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", t.Callbacks("once memory"), "rejected"],
                        ["notify",
                            "progress", t.Callbacks("memory")
                        ]
                    ],
                    b = "pending",
                    d = {
                        state: function() {
                            return b
                        },
                        always: function() {
                            l.done(arguments).fail(arguments);
                            return this
                        },
                        then: function() {
                            var e = arguments;
                            return t.Deferred(function(b) {
                                t.each(a, function(a, h) {
                                    var f = t.isFunction(e[a]) && e[a];
                                    l[h[1]](function() {
                                        var e = f && f.apply(this, arguments);
                                        if (e && t.isFunction(e.promise)) e.promise().progress(b.notify).done(b.resolve).fail(b.reject);
                                        else b[h[0] + "With"](this === d ? b.promise() : this, f ? [e] : arguments)
                                    })
                                });
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null !=
                                e ? t.extend(e, d) : d
                        }
                    },
                    l = {};
                d.pipe = d.then;
                t.each(a, function(e, h) {
                    var f = h[2],
                        c = h[3];
                    d[h[1]] = f.add;
                    c && f.add(function() {
                        b = c
                    }, a[e ^ 1][2].disable, a[2][2].lock);
                    l[h[0]] = function() {
                        l[h[0] + "With"](this === l ? d : this, arguments);
                        return this
                    };
                    l[h[0] + "With"] = f.fireWith
                });
                d.promise(l);
                e && e.call(l, l);
                return l
            },
            when: function(e) {
                var a = 0,
                    b = T.call(arguments),
                    d = b.length,
                    l = 1 !== d || e && t.isFunction(e.promise) ? d : 0,
                    h = 1 === l ? e : t.Deferred(),
                    f = function(e, a, b) {
                        return function(d) {
                            a[e] = this;
                            b[e] = 1 < arguments.length ? T.call(arguments) : d;
                            b === r ? h.notifyWith(a, b) : --l || h.resolveWith(a, b)
                        }
                    },
                    c;
                if (1 < d) {
                    var r = Array(d);
                    var g = Array(d);
                    for (c = Array(d); a < d; a++) b[a] && t.isFunction(b[a].promise) ? b[a].promise().progress(f(a, g, r)).done(f(a, c, b)).fail(h.reject) : --l
                }
                l || h.resolveWith(c, b);
                return h.promise()
            }
        });
        var Fa;
        t.fn.ready = function(e) {
            t.ready.promise().done(e);
            return this
        };
        t.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? t.readyWait++ : t.ready(!0)
            },
            ready: function(e) {
                (!0 === e ? --t.readyWait : t.isReady) || (t.isReady = !0, !0 !== e && 0 < --t.readyWait ||
                    (Fa.resolveWith(P, [t]), t.fn.triggerHandler && (t(P).triggerHandler("ready"), t(P).off("ready"))))
            }
        });
        t.ready.promise = function(e) {
            Fa || (Fa = t.Deferred(), "complete" === P.readyState || "loading" !== P.readyState && !P.documentElement.doScroll ? c.setTimeout(t.ready) : (P.addEventListener("DOMContentLoaded", a), c.addEventListener("load", a)));
            return Fa.promise(e)
        };
        t.ready.promise();
        var la = function(e, a, b, d, l, h, f) {
                var c = 0,
                    r = e.length,
                    g = null == b;
                if ("object" === t.type(b))
                    for (c in l = !0, b) la(e, a, c, b[c], !0, h, f);
                else if (void 0 !==
                    d && (l = !0, t.isFunction(d) || (f = !0), g && (f ? (a.call(e, d), a = null) : (g = a, a = function(e, a, b) {
                        return g.call(t(e), b)
                    })), a))
                    for (; c < r; c++) a(e[c], b, f ? d : d.call(e[c], c, a(e[c], b)));
                return l ? e : g ? a.call(e) : r ? a(e[0], b) : h
            },
            wa = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        h.uid = 1;
        h.prototype = {
            register: function(e, a) {
                var b = a || {};
                e.nodeType ? e[this.expando] = b : Object.defineProperty(e, this.expando, {
                    value: b,
                    writable: !0,
                    configurable: !0
                });
                return e[this.expando]
            },
            cache: function(e) {
                if (!wa(e)) return {};
                var a = e[this.expando];
                a || (a = {}, wa(e) && (e.nodeType ? e[this.expando] = a : Object.defineProperty(e, this.expando, {
                    value: a,
                    configurable: !0
                })));
                return a
            },
            set: function(e, a, b) {
                var d;
                e = this.cache(e);
                if ("string" === typeof a) e[a] = b;
                else
                    for (d in a) e[d] = a[d];
                return e
            },
            get: function(e, a) {
                return void 0 === a ? this.cache(e) : e[this.expando] && e[this.expando][a]
            },
            access: function(e, a, b) {
                if (void 0 === a || a && "string" === typeof a && void 0 === b) return b = this.get(e, a), void 0 !== b ? b : this.get(e, t.camelCase(a));
                this.set(e, a, b);
                return void 0 !== b ? b : a
            },
            remove: function(e,
                a) {
                var b = e[this.expando];
                if (void 0 !== b) {
                    if (void 0 === a) this.register(e);
                    else {
                        if (t.isArray(a)) var d = a.concat(a.map(t.camelCase));
                        else {
                            var l = t.camelCase(a);
                            a in b ? d = [a, l] : (d = l, d = d in b ? [d] : d.match(fa) || [])
                        }
                        for (l = d.length; l--;) delete b[d[l]]
                    }
                    if (void 0 === a || t.isEmptyObject(b)) e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]
                }
            },
            hasData: function(e) {
                e = e[this.expando];
                return void 0 !== e && !t.isEmptyObject(e)
            }
        };
        var M = new h,
            aa = new h,
            ob = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Sa = /[A-Z]/g;
        t.extend({
            hasData: function(e) {
                return aa.hasData(e) ||
                    M.hasData(e)
            },
            data: function(e, a, b) {
                return aa.access(e, a, b)
            },
            removeData: function(e, a) {
                aa.remove(e, a)
            },
            _data: function(e, a, b) {
                return M.access(e, a, b)
            },
            _removeData: function(e, a) {
                M.remove(e, a)
            }
        });
        t.fn.extend({
            data: function(e, a) {
                var b, d = this[0],
                    l = d && d.attributes;
                if (void 0 === e) {
                    if (this.length) {
                        var h = aa.get(d);
                        if (1 === d.nodeType && !M.get(d, "hasDataAttrs")) {
                            for (b = l.length; b--;)
                                if (l[b]) {
                                    var f = l[b].name;
                                    0 === f.indexOf("data-") && (f = t.camelCase(f.slice(5)), r(d, f, h[f]))
                                }
                            M.set(d, "hasDataAttrs", !0)
                        }
                    }
                    return h
                }
                return "object" ===
                    typeof e ? this.each(function() {
                        aa.set(this, e)
                    }) : la(this, function(a) {
                        if (d && void 0 === a) {
                            var b = aa.get(d, e) || aa.get(d, e.replace(Sa, "-$\x26").toLowerCase());
                            if (void 0 !== b) return b;
                            var l = t.camelCase(e);
                            b = aa.get(d, l);
                            if (void 0 !== b) return b;
                            b = r(d, l, void 0);
                            if (void 0 !== b) return b
                        } else l = t.camelCase(e), this.each(function() {
                            var b = aa.get(this, l);
                            aa.set(this, l, a); - 1 < e.indexOf("-") && void 0 !== b && aa.set(this, e, a)
                        })
                    }, null, a, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    aa.remove(this,
                        e)
                })
            }
        });
        t.extend({
            queue: function(e, a, b) {
                if (e) {
                    a = (a || "fx") + "queue";
                    var d = M.get(e, a);
                    b && (!d || t.isArray(b) ? d = M.access(e, a, t.makeArray(b)) : d.push(b));
                    return d || []
                }
            },
            dequeue: function(e, a) {
                a = a || "fx";
                var b = t.queue(e, a),
                    d = b.length,
                    l = b.shift(),
                    h = t._queueHooks(e, a),
                    f = function() {
                        t.dequeue(e, a)
                    };
                "inprogress" === l && (l = b.shift(), d--);
                l && ("fx" === a && b.unshift("inprogress"), delete h.stop, l.call(e, f, h));
                !d && h && h.empty.fire()
            },
            _queueHooks: function(e, a) {
                var b = a + "queueHooks";
                return M.get(e, b) || M.access(e, b, {
                    empty: t.Callbacks("once memory").add(function() {
                        M.remove(e, [a + "queue", b])
                    })
                })
            }
        });
        t.fn.extend({
            queue: function(e, a) {
                var b = 2;
                "string" !== typeof e && (a = e, e = "fx", b--);
                return arguments.length < b ? t.queue(this[0], e) : void 0 === a ? this : this.each(function() {
                    var b = t.queue(this, e, a);
                    t._queueHooks(this, e);
                    "fx" === e && "inprogress" !== b[0] && t.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    t.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, a) {
                var b, d = 1,
                    l = t.Deferred(),
                    h = this,
                    f = this.length,
                    c = function() {
                        --d || l.resolveWith(h, [h])
                    };
                "string" !== typeof e && (a = e, e = void 0);
                for (e = e || "fx"; f--;)(b = M.get(h[f], e + "queueHooks")) && b.empty && (d++, b.empty.add(c));
                c();
                return l.promise(a)
            }
        });
        var cb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ma = new RegExp("^(?:([+-])\x3d|)(" + cb + ")([a-z%]*)$", "i"),
            oa = ["Top", "Right", "Bottom", "Left"],
            sa = function(e, a) {
                e = a || e;
                return "none" === t.css(e, "display") || !t.contains(e.ownerDocument, e)
            },
            db = /^(?:checkbox|radio)$/i,
            Ta = /<([\w:-]+)/,
            Ua = /^$|\/(?:java|ecma)script/i,
            ia = {
                option: [1, "\x3cselect multiple\x3d'multiple'\x3e",
                    "\x3c/select\x3e"
                ],
                thead: [1, "\x3ctable\x3e", "\x3c/table\x3e"],
                col: [2, "\x3ctable\x3e\x3ccolgroup\x3e", "\x3c/colgroup\x3e\x3c/table\x3e"],
                tr: [2, "\x3ctable\x3e\x3ctbody\x3e", "\x3c/tbody\x3e\x3c/table\x3e"],
                td: [3, "\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e", "\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e"],
                _default: [0, "", ""]
            };
        ia.optgroup = ia.option;
        ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead;
        ia.th = ia.td;
        var rb = /<|&#?\w+;/;
        (function() {
            var e = P.createDocumentFragment().appendChild(P.createElement("div")),
                a = P.createElement("input");
            a.setAttribute("type", "radio");
            a.setAttribute("checked", "checked");
            a.setAttribute("name", "t");
            e.appendChild(a);
            V.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
            e.innerHTML = "\x3ctextarea\x3ex\x3c/textarea\x3e";
            V.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        })();
        var Gb = /^key/,
            Hb = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            eb = /^([^.]*)(?:\.(.+)|)/;
        t.event = {
            global: {},
            add: function(e, a, b, d, l) {
                var h, f, c, r, g;
                if (c = M.get(e)) {
                    if (b.handler) {
                        var q = b;
                        b = q.handler;
                        l = q.selector
                    }
                    b.guid ||
                        (b.guid = t.guid++);
                    (f = c.events) || (f = c.events = {});
                    (h = c.handle) || (h = c.handle = function(a) {
                        return "undefined" !== typeof t && t.event.triggered !== a.type ? t.event.dispatch.apply(e, arguments) : void 0
                    });
                    a = (a || "").match(fa) || [""];
                    for (c = a.length; c--;) {
                        var w = eb.exec(a[c]) || [];
                        var k = r = w[1];
                        var x = (w[2] || "").split(".").sort();
                        k && (w = t.event.special[k] || {}, k = (l ? w.delegateType : w.bindType) || k, w = t.event.special[k] || {}, r = t.extend({
                            type: k,
                            origType: r,
                            data: d,
                            handler: b,
                            guid: b.guid,
                            selector: l,
                            needsContext: l && t.expr.match.needsContext.test(l),
                            namespace: x.join(".")
                        }, q), (g = f[k]) || (g = f[k] = [], g.delegateCount = 0, w.setup && !1 !== w.setup.call(e, d, x, h) || e.addEventListener && e.addEventListener(k, h)), w.add && (w.add.call(e, r), r.handler.guid || (r.handler.guid = b.guid)), l ? g.splice(g.delegateCount++, 0, r) : g.push(r), t.event.global[k] = !0)
                    }
                }
            },
            remove: function(e, a, b, d, l) {
                var h, f, c, r, g, q = M.hasData(e) && M.get(e);
                if (q && (c = q.events)) {
                    a = (a || "").match(fa) || [""];
                    for (r = a.length; r--;) {
                        var w = eb.exec(a[r]) || [];
                        var k = g = w[1];
                        var x = (w[2] || "").split(".").sort();
                        if (k) {
                            var m = t.event.special[k] || {};
                            k = (d ? m.delegateType : m.bindType) || k;
                            var v = c[k] || [];
                            w = w[2] && new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            for (f = h = v.length; h--;) {
                                var u = v[h];
                                !l && g !== u.origType || b && b.guid !== u.guid || w && !w.test(u.namespace) || d && d !== u.selector && ("**" !== d || !u.selector) || (v.splice(h, 1), u.selector && v.delegateCount--, m.remove && m.remove.call(e, u))
                            }
                            f && !v.length && (m.teardown && !1 !== m.teardown.call(e, x, q.handle) || t.removeEvent(e, k, q.handle), delete c[k])
                        } else
                            for (k in c) t.event.remove(e, k + a[r], b, d, !0)
                    }
                    t.isEmptyObject(c) &&
                        M.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = t.event.fix(e);
                var a, b, d, l = T.call(arguments);
                var h = (M.get(this, "events") || {})[e.type] || [];
                var f = t.event.special[e.type] || {};
                l[0] = e;
                e.delegateTarget = this;
                if (!f.preDispatch || !1 !== f.preDispatch.call(this, e)) {
                    var c = t.event.handlers.call(this, e, h);
                    for (h = 0;
                        (d = c[h++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = d.elem, a = 0;
                            (b = d.handlers[a++]) && !e.isImmediatePropagationStopped();)
                            if (!e.rnamespace || e.rnamespace.test(b.namespace)) e.handleObj = b, e.data =
                                b.data, b = ((t.event.special[b.origType] || {}).handle || b.handler).apply(d.elem, l), void 0 !== b && !1 === (e.result = b) && (e.preventDefault(), e.stopPropagation());
                    f.postDispatch && f.postDispatch.call(this, e);
                    return e.result
                }
            },
            handlers: function(e, a) {
                var b, d = [],
                    l = a.delegateCount,
                    h = e.target;
                if (l && h.nodeType && ("click" !== e.type || isNaN(e.button) || 1 > e.button))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && (!0 !== h.disabled || "click" !== e.type)) {
                            var f = [];
                            for (b = 0; b < l; b++) {
                                var c = a[b];
                                var r = c.selector + " ";
                                void 0 === f[r] &&
                                    (f[r] = c.needsContext ? -1 < t(r, this).index(h) : t.find(r, this, null, [h]).length);
                                f[r] && f.push(c)
                            }
                            f.length && d.push({
                                elem: h,
                                handlers: f
                            })
                        }
                l < a.length && d.push({
                    elem: this,
                    handlers: a.slice(l)
                });
                return d
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: ["char", "charCode", "key", "keyCode"],
                filter: function(e, a) {
                    null == e.which && (e.which = null != a.charCode ? a.charCode : a.keyCode);
                    return e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, a) {
                    var b = a.button;
                    if (null == e.pageX && null != a.clientX) {
                        var d = e.target.ownerDocument || P;
                        var l = d.documentElement;
                        d = d.body;
                        e.pageX = a.clientX + (l && l.scrollLeft || d && d.scrollLeft || 0) - (l && l.clientLeft || d && d.clientLeft || 0);
                        e.pageY = a.clientY + (l && l.scrollTop || d && d.scrollTop || 0) - (l && l.clientTop || d && d.clientTop || 0)
                    }
                    e.which || void 0 === b || (e.which = b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0);
                    return e
                }
            },
            fix: function(e) {
                if (e[t.expando]) return e;
                var a = e.type;
                var b = e,
                    d = this.fixHooks[a];
                d || (this.fixHooks[a] = d = Hb.test(a) ? this.mouseHooks :
                    Gb.test(a) ? this.keyHooks : {});
                var l = d.props ? this.props.concat(d.props) : this.props;
                e = new t.Event(b);
                for (a = l.length; a--;) {
                    var h = l[a];
                    e[h] = b[h]
                }
                e.target || (e.target = P);
                3 === e.target.nodeType && (e.target = e.target.parentNode);
                return d.filter ? d.filter(e, b) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === p() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" ===
                            this.type && this.click && t.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return t.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        };
        t.removeEvent = function(e, a, b) {
            e.removeEventListener && e.removeEventListener(a, b)
        };
        t.Event = function(e, a) {
            if (!(this instanceof t.Event)) return new t.Event(e, a);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 ===
                e.defaultPrevented && !1 === e.returnValue ? u : y) : this.type = e;
            a && t.extend(this, a);
            this.timeStamp = e && e.timeStamp || t.now();
            this[t.expando] = !0
        };
        t.Event.prototype = {
            constructor: t.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = u;
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = u;
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = u;
                e && !this.isSimulated && e.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        t.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, a) {
            t.event.special[e] = {
                delegateType: a,
                bindType: a,
                handle: function(e) {
                    var b = e.relatedTarget,
                        d = e.handleObj;
                    if (!b || b !== this && !t.contains(this, b)) {
                        e.type = d.origType;
                        var l = d.handler.apply(this, arguments);
                        e.type = a
                    }
                    return l
                }
            }
        });
        t.fn.extend({
            on: function(a, b, d, l) {
                return e(this, a, b, d, l)
            },
            one: function(a, b, d, l) {
                return e(this, a, b, d, l, 1)
            },
            off: function(e, a, b) {
                if (e && e.preventDefault && e.handleObj) {
                    var d = e.handleObj;
                    t(e.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
                    return this
                }
                if ("object" === typeof e) {
                    for (d in e) this.off(d, a, e[d]);
                    return this
                }
                if (!1 === a || "function" === typeof a) b = a, a = void 0;
                !1 === b && (b = y);
                return this.each(function() {
                    t.event.remove(this, e, b, a)
                })
            }
        });
        var Ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Jb = /<script|<style|<link/i,
            tb = /checked\s*(?:[^=]|=\s*.checked.)/i,
            sb = /^true\/(.*)/,
            ub = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        t.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ib, "\x3c$1\x3e\x3c/$2\x3e")
            },
            clone: function(e, a, b) {
                var d, l = e.cloneNode(!0),
                    h = t.contains(e.ownerDocument, e);
                if (!(V.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || t.isXMLDoc(e))) {
                    var f = q(l);
                    var c = q(e);
                    var r = 0;
                    for (d = c.length; r < d; r++) {
                        var g = c[r],
                            w = f[r],
                            k = w.nodeName.toLowerCase();
                        if ("input" === k && db.test(g.type)) w.checked =
                            g.checked;
                        else if ("input" === k || "textarea" === k) w.defaultValue = g.defaultValue
                    }
                }
                if (a)
                    if (b)
                        for (c = c || q(e), f = f || q(l), r = 0, d = c.length; r < d; r++) z(c[r], f[r]);
                    else z(e, l);
                f = q(l, "script");
                0 < f.length && m(f, !h && q(e, "script"));
                return l
            },
            cleanData: function(e) {
                for (var a, b, d, l = t.event.special, h = 0; void 0 !== (b = e[h]); h++)
                    if (wa(b)) {
                        if (a = b[M.expando]) {
                            if (a.events)
                                for (d in a.events) l[d] ? t.event.remove(b, d) : t.removeEvent(b, d, a.handle);
                            b[M.expando] = void 0
                        }
                        b[aa.expando] && (b[aa.expando] = void 0)
                    }
            }
        });
        t.fn.extend({
            domManip: n,
            detach: function(e) {
                return E(this,
                    e, !0)
            },
            remove: function(e) {
                return E(this, e)
            },
            text: function(e) {
                return la(this, function(e) {
                    return void 0 === e ? t.text(this) : this.empty().each(function() {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = e
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return n(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || l(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return n(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var a =
                            l(this, e);
                        a.insertBefore(e, a.firstChild)
                    }
                })
            },
            before: function() {
                return n(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return n(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, a = 0; null != (e = this[a]); a++) 1 === e.nodeType && (t.cleanData(q(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, a) {
                e = null == e ? !1 : e;
                a = null == a ? e : a;
                return this.map(function() {
                    return t.clone(this, e, a)
                })
            },
            html: function(e) {
                return la(this, function(e) {
                    var a = this[0] || {},
                        b = 0,
                        d = this.length;
                    if (void 0 === e && 1 === a.nodeType) return a.innerHTML;
                    if ("string" === typeof e && !Jb.test(e) && !ia[(Ta.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = t.htmlPrefilter(e);
                        try {
                            for (; b < d; b++) a = this[b] || {}, 1 === a.nodeType && (t.cleanData(q(a, !1)), a.innerHTML = e);
                            a = 0
                        } catch (ec) {}
                    }
                    a && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return n(this, arguments, function(a) {
                    var b = this.parentNode;
                    0 > t.inArray(this, e) && (t.cleanData(q(this)),
                        b && b.replaceChild(a, this))
                }, e)
            }
        });
        t.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            t.fn[e] = function(e) {
                for (var b = [], d = t(e), l = d.length - 1, h = 0; h <= l; h++) e = h === l ? this : this.clone(!0), t(d[h])[a](e), Ka.apply(b, e.get());
                return this.pushStack(b)
            }
        });
        var Ca, Wa = {
                HTML: "block",
                BODY: "block"
            },
            Xa = /^margin/,
            Ia = new RegExp("^(" + cb + ")(?!px)[a-z%]+$", "i"),
            Da = function(e) {
                var a = e.ownerDocument.defaultView;
                a && a.opener || (a = c);
                return a.getComputedStyle(e)
            },
            Ma = function(e, a, b, d) {
                var l, h = {};
                for (l in a) h[l] = e.style[l], e.style[l] = a[l];
                b = b.apply(e, d || []);
                for (l in a) e.style[l] = h[l];
                return b
            },
            xa = P.documentElement;
        (function() {
            function e() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                f.innerHTML = "";
                xa.appendChild(h);
                var e = c.getComputedStyle(f);
                a = "1%" !== e.top;
                l = "2px" === e.marginLeft;
                b = "4px" === e.width;
                f.style.marginRight = "50%";
                d = "4px" === e.marginRight;
                xa.removeChild(h)
            }
            var a, b, d, l, h = P.createElement("div"),
                f = P.createElement("div");
            f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", V.clearCloneStyle = "content-box" === f.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(f), t.extend(V, {
                pixelPosition: function() {
                    e();
                    return a
                },
                boxSizingReliable: function() {
                    null == b && e();
                    return b
                },
                pixelMarginRight: function() {
                    null ==
                        b && e();
                    return d
                },
                reliableMarginLeft: function() {
                    null == b && e();
                    return l
                },
                reliableMarginRight: function() {
                    var e = f.appendChild(P.createElement("div"));
                    e.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    e.style.marginRight = e.style.width = "0";
                    f.style.width = "1px";
                    xa.appendChild(h);
                    var a = !parseFloat(c.getComputedStyle(e).marginRight);
                    xa.removeChild(h);
                    f.removeChild(e);
                    return a
                }
            }))
        })();
        var Kb = /^(none|table(?!-c[ea]).+)/,
            Lb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Za = ["Webkit", "O", "Moz", "ms"],
            Ya = P.createElement("div").style;
        t.extend({
            cssHooks: {
                opacity: {
                    get: function(e, a) {
                        if (a) {
                            var b = H(e, "opacity");
                            return "" === b ? "1" : b
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, a, b, d) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType &&
                    e.style) {
                    var l, h = t.camelCase(a),
                        f = e.style;
                    a = t.cssProps[h] || (t.cssProps[h] = I(h) || h);
                    var c = t.cssHooks[a] || t.cssHooks[h];
                    if (void 0 !== b) {
                        var r = typeof b;
                        "string" === r && (l = ma.exec(b)) && l[1] && (b = w(e, a, l), r = "number");
                        null != b && b === b && ("number" === r && (b += l && l[3] || (t.cssNumber[h] ? "" : "px")), V.clearCloneStyle || "" !== b || 0 !== a.indexOf("background") || (f[a] = "inherit"), c && "set" in c && void 0 === (b = c.set(e, b, d)) || (f[a] = b))
                    } else return c && "get" in c && void 0 !== (l = c.get(e, !1, d)) ? l : f[a]
                }
            },
            css: function(e, a, b, d) {
                var l;
                var h = t.camelCase(a);
                a = t.cssProps[h] || (t.cssProps[h] = I(h) || h);
                (h = t.cssHooks[a] || t.cssHooks[h]) && "get" in h && (l = h.get(e, !0, b));
                void 0 === l && (l = H(e, a, d));
                "normal" === l && a in fb && (l = fb[a]);
                return "" === b || b ? (e = parseFloat(l), !0 === b || isFinite(e) ? e || 0 : l) : l
            }
        });
        t.each(["height", "width"], function(e, a) {
            t.cssHooks[a] = {
                get: function(e, b, d) {
                    if (b) return Kb.test(t.css(e, "display")) && 0 === e.offsetWidth ? Ma(e, Lb, function() {
                        return W(e, a, d)
                    }) : W(e, a, d)
                },
                set: function(e, b, d) {
                    var l, h = d && Da(e);
                    (d = d && N(e, a, d, "border-box" === t.css(e, "boxSizing", !1, h),
                        h)) && (l = ma.exec(b)) && "px" !== (l[3] || "px") && (e.style[a] = b, b = t.css(e, a));
                    return J(e, b, d)
                }
            }
        });
        t.cssHooks.marginLeft = K(V.reliableMarginLeft, function(e, a) {
            if (a) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - Ma(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        });
        t.cssHooks.marginRight = K(V.reliableMarginRight, function(e, a) {
            if (a) return Ma(e, {
                display: "inline-block"
            }, H, [e, "marginRight"])
        });
        t.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, a) {
            t.cssHooks[e + a] = {
                expand: function(b) {
                    var d = 0,
                        l = {};
                    for (b = "string" === typeof b ? b.split(" ") : [b]; 4 > d; d++) l[e + oa[d] + a] = b[d] || b[d - 2] || b[0];
                    return l
                }
            };
            Xa.test(e) || (t.cssHooks[e + a].set = J)
        });
        t.fn.extend({
            css: function(e, a) {
                return la(this, function(e, a, b) {
                    var d, l = {},
                        h = 0;
                    if (t.isArray(a)) {
                        b = Da(e);
                        for (d = a.length; h < d; h++) l[a[h]] = t.css(e, a[h], !1, b);
                        return l
                    }
                    return void 0 !== b ? t.style(e, a, b) : t.css(e, a)
                }, e, a, 1 < arguments.length)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(e) {
                return "boolean" === typeof e ?
                    e ? this.show() : this.hide() : this.each(function() {
                        sa(this) ? t(this).show() : t(this).hide()
                    })
            }
        });
        t.Tween = S;
        S.prototype = {
            constructor: S,
            init: function(e, a, b, d, l, h) {
                this.elem = e;
                this.prop = b;
                this.easing = l || t.easing._default;
                this.options = a;
                this.start = this.now = this.cur();
                this.end = d;
                this.unit = h || (t.cssNumber[b] ? "" : "px")
            },
            cur: function() {
                var e = S.propHooks[this.prop];
                return e && e.get ? e.get(this) : S.propHooks._default.get(this)
            },
            run: function(e) {
                var a, b = S.propHooks[this.prop];
                this.pos = this.options.duration ? a = t.easing[this.easing](e,
                    this.options.duration * e, 0, 1, this.options.duration) : a = e;
                this.now = (this.end - this.start) * a + this.start;
                this.options.step && this.options.step.call(this.elem, this.now, this);
                b && b.set ? b.set(this) : S.propHooks._default.set(this);
                return this
            }
        };
        S.prototype.init.prototype = S.prototype;
        S.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = t.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    if (t.fx.step[e.prop]) t.fx.step[e.prop](e);
                    else 1 !== e.elem.nodeType || null == e.elem.style[t.cssProps[e.prop]] && !t.cssHooks[e.prop] ? e.elem[e.prop] = e.now : t.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        };
        S.propHooks.scrollTop = S.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        };
        t.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        };
        t.fx = S.prototype.init;
        t.fx.step = {};
        var pa, Ga, Mb = /^(?:toggle|show|hide)$/,
            Nb = /queueHooks$/;
        t.Animation = t.extend(X, {
            tweeners: {
                "*": [function(e,
                    a) {
                    var b = this.createTween(e, a);
                    w(b.elem, e, ma.exec(a), b);
                    return b
                }]
            },
            tweener: function(e, a) {
                t.isFunction(e) ? (a = e, e = ["*"]) : e = e.match(fa);
                for (var b, d = 0, l = e.length; d < l; d++) b = e[d], X.tweeners[b] = X.tweeners[b] || [], X.tweeners[b].unshift(a)
            },
            prefilters: [function(e, a, b) {
                var d, l = this,
                    h = {},
                    f = e.style,
                    c = e.nodeType && sa(e),
                    r = M.get(e, "fxshow");
                if (!b.queue) {
                    var g = t._queueHooks(e, "fx");
                    if (null == g.unqueued) {
                        g.unqueued = 0;
                        var q = g.empty.fire;
                        g.empty.fire = function() {
                            g.unqueued || q()
                        }
                    }
                    g.unqueued++;
                    l.always(function() {
                        l.always(function() {
                            g.unqueued--;
                            t.queue(e, "fx").length || g.empty.fire()
                        })
                    })
                }
                if (1 === e.nodeType && ("height" in a || "width" in a)) {
                    b.overflow = [f.overflow, f.overflowX, f.overflowY];
                    var w = t.css(e, "display");
                    var k = "none" === w ? M.get(e, "olddisplay") || F(e.nodeName) : w;
                    "inline" === k && "none" === t.css(e, "float") && (f.display = "inline-block")
                }
                b.overflow && (f.overflow = "hidden", l.always(function() {
                    f.overflow = b.overflow[0];
                    f.overflowX = b.overflow[1];
                    f.overflowY = b.overflow[2]
                }));
                for (d in a)
                    if (k = a[d], Mb.exec(k)) {
                        delete a[d];
                        var x = x || "toggle" === k;
                        if (k === (c ? "hide" :
                                "show"))
                            if ("show" === k && r && void 0 !== r[d]) c = !0;
                            else continue;
                        h[d] = r && r[d] || t.style(e, d)
                    } else w = void 0;
                if (t.isEmptyObject(h)) "inline" === ("none" === w ? F(e.nodeName) : w) && (f.display = w);
                else
                    for (d in r ? "hidden" in r && (c = r.hidden) : r = M.access(e, "fxshow", {}), x && (r.hidden = !c), c ? t(e).show() : l.done(function() {
                            t(e).hide()
                        }), l.done(function() {
                            var a;
                            M.remove(e, "fxshow");
                            for (a in h) t.style(e, a, h[a])
                        }), h) a = ja(c ? r[d] : 0, d, l), d in r || (r[d] = a.start, c && (a.end = a.start, a.start = "width" === d || "height" === d ? 1 : 0))
            }],
            prefilter: function(e,
                a) {
                a ? X.prefilters.unshift(e) : X.prefilters.push(e)
            }
        });
        t.speed = function(e, a, b) {
            var d = e && "object" === typeof e ? t.extend({}, e) : {
                complete: b || !b && a || t.isFunction(e) && e,
                duration: e,
                easing: b && a || a && !t.isFunction(a) && a
            };
            d.duration = t.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in t.fx.speeds ? t.fx.speeds[d.duration] : t.fx.speeds._default;
            if (null == d.queue || !0 === d.queue) d.queue = "fx";
            d.old = d.complete;
            d.complete = function() {
                t.isFunction(d.old) && d.old.call(this);
                d.queue && t.dequeue(this, d.queue)
            };
            return d
        };
        t.fn.extend({
            fadeTo: function(e, a, b, d) {
                return this.filter(sa).css("opacity", 0).show().end().animate({
                    opacity: a
                }, e, b, d)
            },
            animate: function(e, a, b, d) {
                var l = t.isEmptyObject(e),
                    h = t.speed(a, b, d);
                a = function() {
                    var a = X(this, t.extend({}, e), h);
                    (l || M.get(this, "finish")) && a.stop(!0)
                };
                a.finish = a;
                return l || !1 === h.queue ? this.each(a) : this.queue(h.queue, a)
            },
            stop: function(e, a, b) {
                var d = function(e) {
                    var a = e.stop;
                    delete e.stop;
                    a(b)
                };
                "string" !== typeof e && (b = a, a = e, e = void 0);
                a && !1 !== e && this.queue(e || "fx", []);
                return this.each(function() {
                    var a = !0,
                        l = null != e && e + "queueHooks",
                        h = t.timers,
                        f = M.get(this);
                    if (l) f[l] && f[l].stop && d(f[l]);
                    else
                        for (l in f) f[l] && f[l].stop && Nb.test(l) && d(f[l]);
                    for (l = h.length; l--;) h[l].elem !== this || null != e && h[l].queue !== e || (h[l].anim.stop(b), a = !1, h.splice(l, 1));
                    !a && b || t.dequeue(this, e)
                })
            },
            finish: function(e) {
                !1 !== e && (e = e || "fx");
                return this.each(function() {
                    var a = M.get(this),
                        b = a[e + "queue"];
                    var d = a[e + "queueHooks"];
                    var l = t.timers,
                        h = b ? b.length : 0;
                    a.finish = !0;
                    t.queue(this, e, []);
                    d && d.stop && d.stop.call(this, !0);
                    for (d = l.length; d--;) l[d].elem ===
                        this && l[d].queue === e && (l[d].anim.stop(!0), l.splice(d, 1));
                    for (d = 0; d < h; d++) b[d] && b[d].finish && b[d].finish.call(this);
                    delete a.finish
                })
            }
        });
        t.each(["toggle", "show", "hide"], function(e, a) {
            var b = t.fn[a];
            t.fn[a] = function(e, d, l) {
                return null == e || "boolean" === typeof e ? b.apply(this, arguments) : this.animate(R(a, !0), e, d, l)
            }
        });
        t.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, a) {
            t.fn[e] = function(e, b, d) {
                return this.animate(a,
                    e, b, d)
            }
        });
        t.timers = [];
        t.fx.tick = function() {
            var e = 0,
                a = t.timers;
            for (pa = t.now(); e < a.length; e++) {
                var b = a[e];
                b() || a[e] !== b || a.splice(e--, 1)
            }
            a.length || t.fx.stop();
            pa = void 0
        };
        t.fx.timer = function(e) {
            t.timers.push(e);
            e() ? t.fx.start() : t.timers.pop()
        };
        t.fx.interval = 13;
        t.fx.start = function() {
            Ga || (Ga = c.setInterval(t.fx.tick, t.fx.interval))
        };
        t.fx.stop = function() {
            c.clearInterval(Ga);
            Ga = null
        };
        t.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        t.fn.delay = function(e, a) {
            e = t.fx ? t.fx.speeds[e] || e : e;
            return this.queue(a || "fx",
                function(a, b) {
                    var d = c.setTimeout(a, e);
                    b.stop = function() {
                        c.clearTimeout(d)
                    }
                })
        };
        (function() {
            var e = P.createElement("input"),
                a = P.createElement("select"),
                b = a.appendChild(P.createElement("option"));
            e.type = "checkbox";
            V.checkOn = "" !== e.value;
            V.optSelected = b.selected;
            a.disabled = !0;
            V.optDisabled = !b.disabled;
            e = P.createElement("input");
            e.value = "t";
            e.type = "radio";
            V.radioValue = "t" === e.value
        })();
        var ya = t.expr.attrHandle;
        t.fn.extend({
            attr: function(e, a) {
                return la(this, t.attr, e, a, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    t.removeAttr(this,
                        e)
                })
            }
        });
        t.extend({
            attr: function(e, a, b) {
                var d, l = e.nodeType;
                if (3 !== l && 8 !== l && 2 !== l) {
                    if ("undefined" === typeof e.getAttribute) return t.prop(e, a, b);
                    if (1 !== l || !t.isXMLDoc(e)) {
                        a = a.toLowerCase();
                        var h = t.attrHooks[a] || (t.expr.match.bool.test(a) ? Ob : void 0)
                    }
                    if (void 0 !== b) {
                        if (null === b) {
                            t.removeAttr(e, a);
                            return
                        }
                        if (h && "set" in h && void 0 !== (d = h.set(e, b, a))) return d;
                        e.setAttribute(a, b + "");
                        return b
                    }
                    if (h && "get" in h && null !== (d = h.get(e, a))) return d;
                    d = t.find.attr(e, a);
                    return null == d ? void 0 : d
                }
            },
            attrHooks: {
                type: {
                    set: function(e,
                        a) {
                        if (!V.radioValue && "radio" === a && t.nodeName(e, "input")) {
                            var b = e.value;
                            e.setAttribute("type", a);
                            b && (e.value = b);
                            return a
                        }
                    }
                }
            },
            removeAttr: function(e, a) {
                var b, d = 0,
                    l = a && a.match(fa);
                if (l && 1 === e.nodeType)
                    for (; b = l[d++];) {
                        var h = t.propFix[b] || b;
                        t.expr.match.bool.test(b) && (e[h] = !1);
                        e.removeAttribute(b)
                    }
            }
        });
        var Ob = {
            set: function(e, a, b) {
                !1 === a ? t.removeAttr(e, b) : e.setAttribute(b, b);
                return b
            }
        };
        t.each(t.expr.match.bool.source.match(/\w+/g), function(e, a) {
            var b = ya[a] || t.find.attr;
            ya[a] = function(e, a, d) {
                if (!d) {
                    var l =
                        ya[a];
                    ya[a] = h;
                    var h = null != b(e, a, d) ? a.toLowerCase() : null;
                    ya[a] = l
                }
                return h
            }
        });
        var Pb = /^(?:input|select|textarea|button)$/i,
            Qb = /^(?:a|area)$/i;
        t.fn.extend({
            prop: function(e, a) {
                return la(this, t.prop, e, a, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[t.propFix[e] || e]
                })
            }
        });
        t.extend({
            prop: function(e, a, b) {
                var d, l = e.nodeType;
                if (3 !== l && 8 !== l && 2 !== l) {
                    if (1 !== l || !t.isXMLDoc(e)) {
                        a = t.propFix[a] || a;
                        var h = t.propHooks[a]
                    }
                    return void 0 !== b ? h && "set" in h && void 0 !== (d = h.set(e, b, a)) ?
                        d : e[a] = b : h && "get" in h && null !== (d = h.get(e, a)) ? d : e[a]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var a = t.find.attr(e, "tabindex");
                        return a ? parseInt(a, 10) : Pb.test(e.nodeName) || Qb.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        V.optSelected || (t.propHooks.selected = {
            get: function(e) {
                (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex;
                return null
            },
            set: function(e) {
                if (e = e.parentNode) e.selectedIndex, e.parentNode && e.parentNode.selectedIndex
            }
        });
        t.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
            function() {
                t.propFix[this.toLowerCase()] = this
            });
        var Na = /[\t\r\n\f]/g;
        t.fn.extend({
            addClass: function(e) {
                var a, b, d, l, h, f = 0;
                if (t.isFunction(e)) return this.each(function(a) {
                    t(this).addClass(e.call(this, a, da(this)))
                });
                if ("string" === typeof e && e)
                    for (a = e.match(fa) || []; b = this[f++];) {
                        var c = da(b);
                        if (d = 1 === b.nodeType && (" " + c + " ").replace(Na, " ")) {
                            for (h = 0; l = a[h++];) 0 > d.indexOf(" " + l + " ") && (d += l + " ");
                            d = t.trim(d);
                            c !== d && b.setAttribute("class", d)
                        }
                    }
                return this
            },
            removeClass: function(e) {
                var a, b, d, l, h, f = 0;
                if (t.isFunction(e)) return this.each(function(a) {
                    t(this).removeClass(e.call(this,
                        a, da(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" === typeof e && e)
                    for (a = e.match(fa) || []; b = this[f++];) {
                        var c = da(b);
                        if (d = 1 === b.nodeType && (" " + c + " ").replace(Na, " ")) {
                            for (h = 0; l = a[h++];)
                                for (; - 1 < d.indexOf(" " + l + " ");) d = d.replace(" " + l + " ", " ");
                            d = t.trim(d);
                            c !== d && b.setAttribute("class", d)
                        }
                    }
                return this
            },
            toggleClass: function(e, a) {
                var b = typeof e;
                return "boolean" === typeof a && "string" === b ? a ? this.addClass(e) : this.removeClass(e) : t.isFunction(e) ? this.each(function(b) {
                    t(this).toggleClass(e.call(this,
                        b, da(this), a), a)
                }) : this.each(function() {
                    var a, d;
                    if ("string" === b) {
                        var l = 0;
                        var h = t(this);
                        for (d = e.match(fa) || []; a = d[l++];) h.hasClass(a) ? h.removeClass(a) : h.addClass(a)
                    } else if (void 0 === e || "boolean" === b)(a = da(this)) && M.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || !1 === e ? "" : M.get(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                var a, b = 0;
                for (e = " " + e + " "; a = this[b++];)
                    if (1 === a.nodeType && -1 < (" " + da(a) + " ").replace(Na, " ").indexOf(e)) return !0;
                return !1
            }
        });
        var Rb = /\r/g,
            Sb = /[\x20\t\r\n\f]+/g;
        t.fn.extend({
            val: function(e) {
                var a, b, d = this[0];
                if (arguments.length) {
                    var l = t.isFunction(e);
                    return this.each(function(b) {
                        1 === this.nodeType && (b = l ? e.call(this, b, t(this).val()) : e, null == b ? b = "" : "number" === typeof b ? b += "" : t.isArray(b) && (b = t.map(b, function(e) {
                            return null == e ? "" : e + ""
                        })), a = t.valHooks[this.type] || t.valHooks[this.nodeName.toLowerCase()], a && "set" in a && void 0 !== a.set(this, b, "value") || (this.value = b))
                    })
                }
                if (d) {
                    if ((a = t.valHooks[d.type] || t.valHooks[d.nodeName.toLowerCase()]) && "get" in a && void 0 !== (b = a.get(d,
                            "value"))) return b;
                    b = d.value;
                    return "string" === typeof b ? b.replace(Rb, "") : null == b ? "" : b
                }
            }
        });
        t.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var a = t.find.attr(e, "value");
                        return null != a ? a : t.trim(t.text(e)).replace(Sb, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var a, b = e.options, d = e.selectedIndex, l = (e = "select-one" === e.type || 0 > d) ? null : [], h = e ? d + 1 : b.length, f = 0 > d ? h : e ? d : 0; f < h; f++)
                            if (a = b[f], !(!a.selected && f !== d || (V.optDisabled ? a.disabled : null !== a.getAttribute("disabled")) || a.parentNode.disabled && t.nodeName(a.parentNode, "optgroup"))) {
                                a =
                                    t(a).val();
                                if (e) return a;
                                l.push(a)
                            }
                        return l
                    },
                    set: function(e, a) {
                        for (var b, d, l = e.options, h = t.makeArray(a), f = l.length; f--;)
                            if (d = l[f], d.selected = -1 < t.inArray(t.valHooks.option.get(d), h)) b = !0;
                        b || (e.selectedIndex = -1);
                        return h
                    }
                }
            }
        });
        t.each(["radio", "checkbox"], function() {
            t.valHooks[this] = {
                set: function(e, a) {
                    if (t.isArray(a)) return e.checked = -1 < t.inArray(t(e).val(), a)
                }
            };
            V.checkOn || (t.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var gb = /^(?:focusinfocus|focusoutblur)$/;
        t.extend(t.event, {
            trigger: function(e, a, b, d) {
                var l, h, f = [b || P],
                    r = ua.call(e, "type") ? e.type : e;
                var g = ua.call(e, "namespace") ? e.namespace.split(".") : [];
                var q = l = b = b || P;
                if (3 !== b.nodeType && 8 !== b.nodeType && !gb.test(r + t.event.triggered)) {
                    -1 < r.indexOf(".") && (g = r.split("."), r = g.shift(), g.sort());
                    var w = 0 > r.indexOf(":") && "on" + r;
                    e = e[t.expando] ? e : new t.Event(r, "object" === typeof e && e);
                    e.isTrigger = d ? 2 : 3;
                    e.namespace = g.join(".");
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    e.result =
                        void 0;
                    e.target || (e.target = b);
                    a = null == a ? [e] : t.makeArray(a, [e]);
                    g = t.event.special[r] || {};
                    if (d || !g.trigger || !1 !== g.trigger.apply(b, a)) {
                        if (!d && !g.noBubble && !t.isWindow(b)) {
                            var k = g.delegateType || r;
                            gb.test(k + r) || (q = q.parentNode);
                            for (; q; q = q.parentNode) f.push(q), l = q;
                            l === (b.ownerDocument || P) && f.push(l.defaultView || l.parentWindow || c)
                        }
                        for (l = 0;
                            (q = f[l++]) && !e.isPropagationStopped();) e.type = 1 < l ? k : g.bindType || r, (h = (M.get(q, "events") || {})[e.type] && M.get(q, "handle")) && h.apply(q, a), (h = w && q[w]) && h.apply && wa(q) && (e.result =
                            h.apply(q, a), !1 === e.result && e.preventDefault());
                        e.type = r;
                        d || e.isDefaultPrevented() || g._default && !1 !== g._default.apply(f.pop(), a) || !wa(b) || !w || !t.isFunction(b[r]) || t.isWindow(b) || ((l = b[w]) && (b[w] = null), t.event.triggered = r, b[r](), t.event.triggered = void 0, l && (b[w] = l));
                        return e.result
                    }
                }
            },
            simulate: function(e, a, b) {
                e = t.extend(new t.Event, b, {
                    type: e,
                    isSimulated: !0
                });
                t.event.trigger(e, null, a)
            }
        });
        t.fn.extend({
            trigger: function(e, a) {
                return this.each(function() {
                    t.event.trigger(e, a, this)
                })
            },
            triggerHandler: function(e,
                a) {
                var b = this[0];
                if (b) return t.event.trigger(e, a, b, !0)
            }
        });
        t.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, a) {
            t.fn[a] = function(e, b) {
                return 0 < arguments.length ? this.on(a, null, e, b) : this.trigger(a)
            }
        });
        t.fn.extend({
            hover: function(e, a) {
                return this.mouseenter(e).mouseleave(a || e)
            }
        });
        V.focusin = "onfocusin" in c;
        V.focusin || t.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, a) {
            var b = function(e) {
                t.event.simulate(a, e.target, t.event.fix(e))
            };
            t.event.special[a] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        l = M.access(d, a);
                    l || d.addEventListener(e, b, !0);
                    M.access(d, a, (l || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        l = M.access(d, a) - 1;
                    l ? M.access(d, a, l) : (d.removeEventListener(e, b, !0), M.remove(d, a))
                }
            }
        });
        var za = c.location,
            Oa = t.now(),
            Pa = /\?/;
        t.parseJSON = function(e) {
            return JSON.parse(e + "")
        };
        t.parseXML = function(e) {
            if (!e || "string" !== typeof e) return null;
            try {
                var a = (new c.DOMParser).parseFromString(e, "text/xml")
            } catch (cc) {
                a = void 0
            }
            a && !a.getElementsByTagName("parsererror").length || t.error("Invalid XML: " + e);
            return a
        };
        var Tb = /#.*$/,
            hb = /([?&])_=[^&]*/,
            Ub = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            Vb = /^(?:GET|HEAD)$/,
            Wb = /^\/\//,
            ib = {},
            Ja = {},
            jb = "*/".concat("*"),
            Qa = P.createElement("a");
        Qa.href = za.href;
        t.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: za.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset\x3dUTF-8",
                accepts: {
                    "*": jb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": t.parseJSON,
                    "text xml": t.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, a) {
                return a ?
                    ga(ga(e, t.ajaxSettings), a) : ga(t.ajaxSettings, e)
            },
            ajaxPrefilter: ea(ib),
            ajaxTransport: ea(Ja),
            ajax: function(e, a) {
                function b(e, a, b, h) {
                    var g = a;
                    if (2 !== C) {
                        C = 2;
                        f && c.clearTimeout(f);
                        d = void 0;
                        l = h || "";
                        z.readyState = 0 < e ? 4 : 0;
                        h = 200 <= e && 300 > e || 304 === e;
                        if (b) {
                            var u = q;
                            for (var A = z, y, p, n, E, D = u.contents, G = u.dataTypes;
                                "*" === G[0];) G.shift(), void 0 === y && (y = u.mimeType || A.getResponseHeader("Content-Type"));
                            if (y)
                                for (p in D)
                                    if (D[p] && D[p].test(y)) {
                                        G.unshift(p);
                                        break
                                    }
                            if (G[0] in b) n = G[0];
                            else {
                                for (p in b) {
                                    if (!G[0] || u.converters[p +
                                            " " + G[0]]) {
                                        n = p;
                                        break
                                    }
                                    E || (E = p)
                                }
                                n = n || E
                            }
                            n ? (n !== G[0] && G.unshift(n), u = b[n]) : u = void 0
                        }
                        a: {
                            b = q;
                            y = u;
                            p = z;
                            n = h;
                            var F, A = {},
                                D = b.dataTypes.slice();
                            if (D[1])
                                for (H in b.converters) A[H.toLowerCase()] = b.converters[H];
                            for (E = D.shift(); E;) {
                                b.responseFields[E] && (p[b.responseFields[E]] = y);
                                !L && n && b.dataFilter && (y = b.dataFilter(y, b.dataType));
                                var L = E;
                                if (E = D.shift())
                                    if ("*" === E) E = L;
                                    else if ("*" !== L && L !== E) {
                                    var H = A[L + " " + E] || A["* " + E];
                                    if (!H)
                                        for (F in A)
                                            if (u = F.split(" "), u[1] === E && (H = A[L + " " + u[0]] || A["* " + u[0]])) {
                                                !0 === H ? H = A[F] : !0 !==
                                                    A[F] && (E = u[0], D.unshift(u[1]));
                                                break
                                            }
                                    if (!0 !== H)
                                        if (H && b.throws) y = H(y);
                                        else try {
                                            y = H(y)
                                        } catch (Bb) {
                                            u = {
                                                state: "parsererror",
                                                error: H ? Bb : "No conversion from " + L + " to " + E
                                            };
                                            break a
                                        }
                                }
                            }
                            u = {
                                state: "success",
                                data: y
                            }
                        }
                        if (h)
                            if (q.ifModified && ((g = z.getResponseHeader("Last-Modified")) && (t.lastModified[B] = g), (g = z.getResponseHeader("etag")) && (t.etag[B] = g)), 204 === e || "HEAD" === q.type) g = "nocontent";
                            else if (304 === e) g = "notmodified";
                        else {
                            g = u.state;
                            var K = u.data;
                            var I = u.error;
                            h = !I
                        } else if (I = g, e || !g) g = "error", 0 > e && (e = 0);
                        z.status =
                            e;
                        z.statusText = (a || g) + "";
                        h ? x.resolveWith(w, [K, g, z]) : x.rejectWith(w, [z, g, I]);
                        z.statusCode(v);
                        v = void 0;
                        r && k.trigger(h ? "ajaxSuccess" : "ajaxError", [z, q, h ? K : I]);
                        m.fireWith(w, [z, g]);
                        r && (k.trigger("ajaxComplete", [z, q]), --t.active || t.event.trigger("ajaxStop"))
                    }
                }
                "object" === typeof e && (a = e, e = void 0);
                a = a || {};
                var d, l, h, f, r, g, q = t.ajaxSetup({}, a),
                    w = q.context || q,
                    k = q.context && (w.nodeType || w.jquery) ? t(w) : t.event,
                    x = t.Deferred(),
                    m = t.Callbacks("once memory"),
                    v = q.statusCode || {},
                    u = {},
                    A = {},
                    C = 0,
                    y = "canceled",
                    z = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var a;
                            if (2 === C) {
                                if (!h)
                                    for (h = {}; a = Ub.exec(l);) h[a[1].toLowerCase()] = a[2];
                                a = h[e.toLowerCase()]
                            }
                            return null == a ? null : a
                        },
                        getAllResponseHeaders: function() {
                            return 2 === C ? l : null
                        },
                        setRequestHeader: function(e, a) {
                            var b = e.toLowerCase();
                            C || (e = A[b] = A[b] || e, u[e] = a);
                            return this
                        },
                        overrideMimeType: function(e) {
                            C || (q.mimeType = e);
                            return this
                        },
                        statusCode: function(e) {
                            var a;
                            if (e)
                                if (2 > C)
                                    for (a in e) v[a] = [v[a], e[a]];
                                else z.always(e[z.status]);
                            return this
                        },
                        abort: function(e) {
                            e = e || y;
                            d && d.abort(e);
                            b(0, e);
                            return this
                        }
                    };
                x.promise(z).complete = m.add;
                z.success = z.done;
                z.error = z.fail;
                q.url = ((e || q.url || za.href) + "").replace(Tb, "").replace(Wb, za.protocol + "//");
                q.type = a.method || a.type || q.method || q.type;
                q.dataTypes = t.trim(q.dataType || "*").toLowerCase().match(fa) || [""];
                if (null == q.crossDomain) {
                    var p = P.createElement("a");
                    try {
                        p.href = q.url, p.href = p.href, q.crossDomain = Qa.protocol + "//" + Qa.host !== p.protocol + "//" + p.host
                    } catch (La) {
                        q.crossDomain = !0
                    }
                }
                q.data && q.processData && "string" !== typeof q.data && (q.data = t.param(q.data,
                    q.traditional));
                Z(ib, q, a, z);
                if (2 === C) return z;
                (r = t.event && q.global) && 0 === t.active++ && t.event.trigger("ajaxStart");
                q.type = q.type.toUpperCase();
                q.hasContent = !Vb.test(q.type);
                var B = q.url;
                q.hasContent || (q.data && (B = q.url += (Pa.test(B) ? "\x26" : "?") + q.data, delete q.data), !1 === q.cache && (q.url = hb.test(B) ? B.replace(hb, "$1_\x3d" + Oa++) : B + (Pa.test(B) ? "\x26" : "?") + "_\x3d" + Oa++));
                q.ifModified && (t.lastModified[B] && z.setRequestHeader("If-Modified-Since", t.lastModified[B]), t.etag[B] && z.setRequestHeader("If-None-Match",
                    t.etag[B]));
                (q.data && q.hasContent && !1 !== q.contentType || a.contentType) && z.setRequestHeader("Content-Type", q.contentType);
                z.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + jb + "; q\x3d0.01" : "") : q.accepts["*"]);
                for (g in q.headers) z.setRequestHeader(g, q.headers[g]);
                if (q.beforeSend && (!1 === q.beforeSend.call(w, z, q) || 2 === C)) return z.abort();
                y = "abort";
                for (g in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) z[g](q[g]);
                if (d = Z(Ja, q, a, z)) {
                    z.readyState = 1;
                    r &&
                        k.trigger("ajaxSend", [z, q]);
                    if (2 === C) return z;
                    q.async && 0 < q.timeout && (f = c.setTimeout(function() {
                        z.abort("timeout")
                    }, q.timeout));
                    try {
                        C = 1, d.send(u, b)
                    } catch (La) {
                        if (2 > C) b(-1, La);
                        else throw La;
                    }
                } else b(-1, "No Transport");
                return z
            },
            getJSON: function(e, a, b) {
                return t.get(e, a, b, "json")
            },
            getScript: function(e, a) {
                return t.get(e, void 0, a, "script")
            }
        });
        t.each(["get", "post"], function(e, a) {
            t[a] = function(e, b, d, l) {
                t.isFunction(b) && (l = l || d, d = b, b = void 0);
                return t.ajax(t.extend({
                        url: e,
                        type: a,
                        dataType: l,
                        data: b,
                        success: d
                    },
                    t.isPlainObject(e) && e))
            }
        });
        t._evalUrl = function(e) {
            return t.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        };
        t.fn.extend({
            wrapAll: function(e) {
                if (t.isFunction(e)) return this.each(function(a) {
                    t(this).wrapAll(e.call(this, a))
                });
                if (this[0]) {
                    var a = t(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && a.insertBefore(this[0]);
                    a.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return t.isFunction(e) ?
                    this.each(function(a) {
                        t(this).wrapInner(e.call(this, a))
                    }) : this.each(function() {
                        var a = t(this),
                            b = a.contents();
                        b.length ? b.wrapAll(e) : a.append(e)
                    })
            },
            wrap: function(e) {
                var a = t.isFunction(e);
                return this.each(function(b) {
                    t(this).wrapAll(a ? e.call(this, b) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    t.nodeName(this, "body") || t(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        t.expr.filters.hidden = function(e) {
            return !t.expr.filters.visible(e)
        };
        t.expr.filters.visible = function(e) {
            return 0 < e.offsetWidth ||
                0 < e.offsetHeight || 0 < e.getClientRects().length
        };
        var Xb = /%20/g,
            vb = /\[\]$/,
            kb = /\r?\n/g,
            Yb = /^(?:submit|button|image|reset|file)$/i,
            Zb = /^(?:input|select|textarea|keygen)/i;
        t.param = function(e, a) {
            var b, d = [],
                l = function(e, a) {
                    a = t.isFunction(a) ? a() : null == a ? "" : a;
                    d[d.length] = encodeURIComponent(e) + "\x3d" + encodeURIComponent(a)
                };
            void 0 === a && (a = t.ajaxSettings && t.ajaxSettings.traditional);
            if (t.isArray(e) || e.jquery && !t.isPlainObject(e)) t.each(e, function() {
                l(this.name, this.value)
            });
            else
                for (b in e) ba(b, e[b], a, l);
            return d.join("\x26").replace(Xb,
                "+")
        };
        t.fn.extend({
            serialize: function() {
                return t.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = t.prop(this, "elements");
                    return e ? t.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !t(this).is(":disabled") && Zb.test(this.nodeName) && !Yb.test(e) && (this.checked || !db.test(e))
                }).map(function(e, a) {
                    var b = t(this).val();
                    return null == b ? null : t.isArray(b) ? t.map(b, function(e) {
                        return {
                            name: a.name,
                            value: e.replace(kb, "\r\n")
                        }
                    }) : {
                        name: a.name,
                        value: b.replace(kb,
                            "\r\n")
                    }
                }).get()
            }
        });
        t.ajaxSettings.xhr = function() {
            try {
                return new c.XMLHttpRequest
            } catch (L) {}
        };
        var $b = {
                0: 200,
                1223: 204
            },
            Aa = t.ajaxSettings.xhr();
        V.cors = !!Aa && "withCredentials" in Aa;
        V.ajax = Aa = !!Aa;
        t.ajaxTransport(function(e) {
            var a, b;
            if (V.cors || Aa && !e.crossDomain) return {
                send: function(d, l) {
                    var h, f = e.xhr();
                    f.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (h in e.xhrFields) f[h] = e.xhrFields[h];
                    e.mimeType && f.overrideMimeType && f.overrideMimeType(e.mimeType);
                    e.crossDomain || d["X-Requested-With"] ||
                        (d["X-Requested-With"] = "XMLHttpRequest");
                    for (h in d) f.setRequestHeader(h, d[h]);
                    a = function(e) {
                        return function() {
                            a && (a = b = f.onload = f.onerror = f.onabort = f.onreadystatechange = null, "abort" === e ? f.abort() : "error" === e ? "number" !== typeof f.status ? l(0, "error") : l(f.status, f.statusText) : l($b[f.status] || f.status, f.statusText, "text" !== (f.responseType || "text") || "string" !== typeof f.responseText ? {
                                binary: f.response
                            } : {
                                text: f.responseText
                            }, f.getAllResponseHeaders()))
                        }
                    };
                    f.onload = a();
                    b = f.onerror = a("error");
                    void 0 !== f.onabort ?
                        f.onabort = b : f.onreadystatechange = function() {
                            4 === f.readyState && c.setTimeout(function() {
                                a && b()
                            })
                        };
                    a = a("abort");
                    try {
                        f.send(e.hasContent && e.data || null)
                    } catch (pb) {
                        if (a) throw pb;
                    }
                },
                abort: function() {
                    a && a()
                }
            }
        });
        t.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    t.globalEval(e);
                    return e
                }
            }
        });
        t.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1);
            e.crossDomain && (e.type = "GET")
        });
        t.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var a, b;
                return {
                    send: function(d, l) {
                        a = t("\x3cscript\x3e").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", b = function(e) {
                            a.remove();
                            b = null;
                            e && l("error" === e.type ? 404 : 200, e.type)
                        });
                        P.head.appendChild(a[0])
                    },
                    abort: function() {
                        b && b()
                    }
                }
            }
        });
        var lb = [],
            Ra = /(=)\?(?=&|$)|\?\?/;
        t.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = lb.pop() || t.expando + "_" + Oa++;
                this[e] = !0;
                return e
            }
        });
        t.ajaxPrefilter("json jsonp",
            function(e, a, b) {
                var d, l = !1 !== e.jsonp && (Ra.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ra.test(e.data) && "data");
                if (l || "jsonp" === e.dataTypes[0]) {
                    var h = e.jsonpCallback = t.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                    l ? e[l] = e[l].replace(Ra, "$1" + h) : !1 !== e.jsonp && (e.url += (Pa.test(e.url) ? "\x26" : "?") + e.jsonp + "\x3d" + h);
                    e.converters["script json"] = function() {
                        d || t.error(h + " was not called");
                        return d[0]
                    };
                    e.dataTypes[0] = "json";
                    var f = c[h];
                    c[h] = function() {
                        d = arguments
                    };
                    b.always(function() {
                        void 0 === f ? t(c).removeProp(h) : c[h] = f;
                        e[h] && (e.jsonpCallback = a.jsonpCallback, lb.push(h));
                        d && t.isFunction(f) && f(d[0]);
                        d = f = void 0
                    });
                    return "script"
                }
            });
        t.parseHTML = function(e, a, b) {
            if (!e || "string" !== typeof e) return null;
            "boolean" === typeof a && (b = a, a = !1);
            a = a || P;
            var d = bb.exec(e);
            b = !b && [];
            if (d) return [a.createElement(d[1])];
            d = C([e], a, b);
            b && b.length && t(b).remove();
            return t.merge([], d.childNodes)
        };
        var mb = t.fn.load;
        t.fn.load = function(e, a, b) {
            if ("string" !==
                typeof e && mb) return mb.apply(this, arguments);
            var d, l, h = this,
                f = e.indexOf(" ");
            if (-1 < f) {
                var c = t.trim(e.slice(f));
                e = e.slice(0, f)
            }
            t.isFunction(a) ? (b = a, a = void 0) : a && "object" === typeof a && (d = "POST");
            0 < h.length && t.ajax({
                url: e,
                type: d || "GET",
                dataType: "html",
                data: a
            }).done(function(e) {
                l = arguments;
                h.html(c ? t("\x3cdiv\x3e").append(t.parseHTML(e)).find(c) : e)
            }).always(b && function(e, a) {
                h.each(function() {
                    b.apply(this, l || [e.responseText, a, e])
                })
            });
            return this
        };
        t.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
            function(e, a) {
                t.fn[a] = function(e) {
                    return this.on(a, e)
                }
            });
        t.expr.filters.animated = function(e) {
            return t.grep(t.timers, function(a) {
                return e === a.elem
            }).length
        };
        t.offset = {
            setOffset: function(e, a, b) {
                var d = t.css(e, "position"),
                    l = t(e),
                    h = {};
                "static" === d && (e.style.position = "relative");
                var f = l.offset();
                var c = t.css(e, "top");
                var r = t.css(e, "left");
                ("absolute" === d || "fixed" === d) && -1 < (c + r).indexOf("auto") ? (r = l.position(), c = r.top, r = r.left) : (c = parseFloat(c) || 0, r = parseFloat(r) || 0);
                t.isFunction(a) && (a = a.call(e, b, t.extend({},
                    f)));
                null != a.top && (h.top = a.top - f.top + c);
                null != a.left && (h.left = a.left - f.left + r);
                "using" in a ? a.using.call(e, h) : l.css(h)
            }
        };
        t.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(a) {
                    t.offset.setOffset(this, e, a)
                });
                var a = this[0];
                var b = {
                        top: 0,
                        left: 0
                    },
                    d = a && a.ownerDocument;
                if (d) {
                    var l = d.documentElement;
                    if (!t.contains(l, a)) return b;
                    b = a.getBoundingClientRect();
                    a = ka(d);
                    return {
                        top: b.top + a.pageYOffset - l.clientTop,
                        left: b.left + a.pageXOffset - l.clientLeft
                    }
                }
            },
            position: function() {
                if (this[0]) {
                    var e =
                        this[0],
                        a = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === t.css(e, "position")) var b = e.getBoundingClientRect();
                    else {
                        var d = this.offsetParent();
                        b = this.offset();
                        t.nodeName(d[0], "html") || (a = d.offset());
                        a.top += t.css(d[0], "borderTopWidth", !0);
                        a.left += t.css(d[0], "borderLeftWidth", !0)
                    }
                    return {
                        top: b.top - a.top - t.css(e, "marginTop", !0),
                        left: b.left - a.left - t.css(e, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === t.css(e, "position");) e = e.offsetParent;
                    return e || xa
                })
            }
        });
        t.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, a) {
            var b = "pageYOffset" === a;
            t.fn[e] = function(d) {
                return la(this, function(e, d, l) {
                    var h = ka(e);
                    if (void 0 === l) return h ? h[a] : e[d];
                    h ? h.scrollTo(b ? h.pageXOffset : l, b ? l : h.pageYOffset) : e[d] = l
                }, e, d, arguments.length)
            }
        });
        t.each(["top", "left"], function(e, a) {
            t.cssHooks[a] = K(V.pixelPosition, function(e, b) {
                if (b) return b = H(e, a), Ia.test(b) ? t(e).position()[a] + "px" : b
            })
        });
        t.each({
            Height: "height",
            Width: "width"
        }, function(e, a) {
            t.each({
                padding: "inner" + e,
                content: a,
                "": "outer" + e
            }, function(b, d) {
                t.fn[d] =
                    function(d, l) {
                        var h = arguments.length && (b || "boolean" !== typeof d),
                            f = b || (!0 === d || !0 === l ? "margin" : "border");
                        return la(this, function(a, b, d) {
                            return t.isWindow(a) ? a.document.documentElement["client" + e] : 9 === a.nodeType ? (b = a.documentElement, Math.max(a.body["scroll" + e], b["scroll" + e], a.body["offset" + e], b["offset" + e], b["client" + e])) : void 0 === d ? t.css(a, b, f) : t.style(a, b, d, f)
                        }, a, h ? d : void 0, h, null)
                    }
            })
        });
        t.fn.extend({
            bind: function(e, a, b) {
                return this.on(e, null, a, b)
            },
            unbind: function(e, a) {
                return this.off(e, null, a)
            },
            delegate: function(e,
                a, b, d) {
                return this.on(a, e, b, d)
            },
            undelegate: function(e, a, b) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(a, e || "**", b)
            },
            size: function() {
                return this.length
            }
        });
        t.fn.andSelf = t.fn.addBack;
        "function" === typeof define && define.amd && define("jquery", [], function() {
            return t
        });
        var ac = c.jQuery,
            bc = c.$;
        t.noConflict = function(e) {
            c.$ === t && (c.$ = bc);
            e && c.jQuery === t && (c.jQuery = ac);
            return t
        };
        g || (c.jQuery = c.$ = t);
        return t
    });
    n.jQuery = jQuery;
    jQuery.noConflict(!0)
})(window, ChemDoodle.lib);
(function(c) {
    "function" === typeof define && define.amd ? define(["jquery"], c) : "object" === typeof exports ? module.exports = c : c(ChemDoodle.lib.jQuery)
})(function(c) {
    function n(b) {
        var h = b || window.event,
            g = k.call(arguments, 1),
            q = 0,
            m = 0,
            C = 0,
            u = 0;
        b = c.event.fix(h);
        b.type = "mousewheel";
        "detail" in h && (m = -1 * h.detail);
        "wheelDelta" in h && (m = h.wheelDelta);
        "wheelDeltaY" in h && (m = h.wheelDeltaY);
        "wheelDeltaX" in h && (q = -1 * h.wheelDeltaX);
        "axis" in h && h.axis === h.HORIZONTAL_AXIS && (q = -1 * m, m = 0);
        var y = 0 === m ? q : m;
        "deltaY" in h && (y = m = -1 * h.deltaY);
        "deltaX" in h && (q = h.deltaX, 0 === m && (y = -1 * q));
        if (0 !== m || 0 !== q) {
            if (1 === h.deltaMode) {
                var B = c.data(this, "mousewheel-line-height");
                y *= B;
                m *= B;
                q *= B
            } else 2 === h.deltaMode && (B = c.data(this, "mousewheel-page-height"), y *= B, m *= B, q *= B);
            B = Math.max(Math.abs(m), Math.abs(q));
            if (!f || B < f) f = B, a.settings.adjustOldDeltas && "mousewheel" === h.type && 0 === B % 120 && (f /= 40);
            a.settings.adjustOldDeltas && "mousewheel" === h.type && 0 === B % 120 && (y /= 40, q /= 40, m /= 40);
            y = Math[1 <= y ? "floor" : "ceil"](y / f);
            q = Math[1 <= q ? "floor" : "ceil"](q / f);
            m = Math[1 <= m ? "floor" :
                "ceil"](m / f);
            a.settings.normalizeOffset && this.getBoundingClientRect && (h = this.getBoundingClientRect(), C = b.clientX - h.left, u = b.clientY - h.top);
            b.deltaX = q;
            b.deltaY = m;
            b.deltaFactor = f;
            b.offsetX = C;
            b.offsetY = u;
            b.deltaMode = 0;
            g.unshift(b, y, q, m);
            d && clearTimeout(d);
            d = setTimeout(p, 200);
            return (c.event.dispatch || c.event.handle).apply(this, g)
        }
    }

    function p() {
        f = null
    }
    var m = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        g = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll",
            "MozMousePixelScroll"
        ],
        k = Array.prototype.slice,
        d, f;
    if (c.event.fixHooks)
        for (var b = m.length; b;) c.event.fixHooks[m[--b]] = c.event.mouseHooks;
    var a = c.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var b = g.length; b;) this.addEventListener(g[--b], n, !1);
            else this.onmousewheel = n;
            c.data(this, "mousewheel-line-height", a.getLineHeight(this));
            c.data(this, "mousewheel-page-height", a.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = g.length; a;) this.removeEventListener(g[--a],
                    n, !1);
            else this.onmousewheel = null;
            c.removeData(this, "mousewheel-line-height");
            c.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(a) {
            a = c(a);
            var b = a["offsetParent" in c.fn ? "offsetParent" : "parent"]();
            b.length || (b = c("body"));
            return parseInt(b.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
        },
        getPageHeight: function(a) {
            return c(a).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    c.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
(function(c, n) {
    "object" === typeof exports ? module.exports = n(global) : "function" === typeof define && define.amd ? define([], function() {
        return n(c)
    }) : n(c)
})(ChemDoodle.lib, function(c) {
    function n(e) {
        return g = e
    }

    function p() {
        return g = "undefined" !== typeof Float32Array ? Float32Array : Array
    }
    var m = {};
    (function() {
        if ("undefined" != typeof Float32Array) {
            var e = new Float32Array(1),
                a = new Int32Array(e.buffer);
            m.invsqrt = function(b) {
                e[0] = b;
                a[0] = 1597463007 - (a[0] >> 1);
                var d = e[0];
                return d * (1.5 - .5 * b * d * d)
            }
        } else m.invsqrt = function(e) {
            return 1 /
                Math.sqrt(e)
        }
    })();
    var g = null;
    p();
    var k = {
            create: function(e) {
                var a = new g(3);
                e ? (a[0] = e[0], a[1] = e[1], a[2] = e[2]) : a[0] = a[1] = a[2] = 0;
                return a
            },
            createFrom: function(e, a, b) {
                var d = new g(3);
                d[0] = e;
                d[1] = a;
                d[2] = b;
                return d
            },
            set: function(e, a) {
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                return a
            },
            equal: function(e, a) {
                return e === a || 1E-6 > Math.abs(e[0] - a[0]) && 1E-6 > Math.abs(e[1] - a[1]) && 1E-6 > Math.abs(e[2] - a[2])
            },
            add: function(e, a, b) {
                if (!b || e === b) return e[0] += a[0], e[1] += a[1], e[2] += a[2], e;
                b[0] = e[0] + a[0];
                b[1] = e[1] + a[1];
                b[2] = e[2] + a[2];
                return b
            },
            subtract: function(e, a, b) {
                if (!b || e === b) return e[0] -= a[0], e[1] -= a[1], e[2] -= a[2], e;
                b[0] = e[0] - a[0];
                b[1] = e[1] - a[1];
                b[2] = e[2] - a[2];
                return b
            },
            multiply: function(e, a, b) {
                if (!b || e === b) return e[0] *= a[0], e[1] *= a[1], e[2] *= a[2], e;
                b[0] = e[0] * a[0];
                b[1] = e[1] * a[1];
                b[2] = e[2] * a[2];
                return b
            },
            negate: function(e, a) {
                a || (a = e);
                a[0] = -e[0];
                a[1] = -e[1];
                a[2] = -e[2];
                return a
            },
            scale: function(e, a, b) {
                if (!b || e === b) return e[0] *= a, e[1] *= a, e[2] *= a, e;
                b[0] = e[0] * a;
                b[1] = e[1] * a;
                b[2] = e[2] * a;
                return b
            },
            normalize: function(e, a) {
                a || (a = e);
                var b = e[0],
                    d = e[1],
                    l = e[2],
                    h = Math.sqrt(b * b + d * d + l * l);
                if (!h) return a[0] = 0, a[1] = 0, a[2] = 0, a;
                if (1 === h) return a[0] = b, a[1] = d, a[2] = l, a;
                h = 1 / h;
                a[0] = b * h;
                a[1] = d * h;
                a[2] = l * h;
                return a
            },
            cross: function(e, a, b) {
                b || (b = e);
                var d = e[0],
                    l = e[1];
                e = e[2];
                var h = a[0],
                    f = a[1];
                a = a[2];
                b[0] = l * a - e * f;
                b[1] = e * h - d * a;
                b[2] = d * f - l * h;
                return b
            },
            length: function(e) {
                var a = e[0],
                    b = e[1];
                e = e[2];
                return Math.sqrt(a * a + b * b + e * e)
            },
            squaredLength: function(e) {
                var a = e[0],
                    b = e[1];
                e = e[2];
                return a * a + b * b + e * e
            },
            dot: function(e, a) {
                return e[0] * a[0] + e[1] * a[1] + e[2] * a[2]
            },
            direction: function(e,
                a, b) {
                b || (b = e);
                var d = e[0] - a[0],
                    l = e[1] - a[1];
                e = e[2] - a[2];
                a = Math.sqrt(d * d + l * l + e * e);
                if (!a) return b[0] = 0, b[1] = 0, b[2] = 0, b;
                a = 1 / a;
                b[0] = d * a;
                b[1] = l * a;
                b[2] = e * a;
                return b
            },
            lerp: function(e, a, b, d) {
                d || (d = e);
                d[0] = e[0] + b * (a[0] - e[0]);
                d[1] = e[1] + b * (a[1] - e[1]);
                d[2] = e[2] + b * (a[2] - e[2]);
                return d
            },
            dist: function(e, a) {
                var b = a[0] - e[0],
                    d = a[1] - e[1],
                    l = a[2] - e[2];
                return Math.sqrt(b * b + d * d + l * l)
            }
        },
        d = null,
        f = new g(4);
    k.unproject = function(e, a, b, h, c) {
        c || (c = e);
        d || (d = q.create());
        var l = d;
        f[0] = 2 * (e[0] - h[0]) / h[2] - 1;
        f[1] = 2 * (e[1] - h[1]) / h[3] - 1;
        f[2] =
            2 * e[2] - 1;
        f[3] = 1;
        q.multiply(b, a, l);
        if (!q.inverse(l)) return null;
        q.multiplyVec4(l, f);
        if (0 === f[3]) return null;
        c[0] = f[0] / f[3];
        c[1] = f[1] / f[3];
        c[2] = f[2] / f[3];
        return c
    };
    var b = k.createFrom(1, 0, 0),
        a = k.createFrom(0, 1, 0),
        h = k.createFrom(0, 0, 1),
        r = k.create();
    k.rotationTo = function(e, d, f) {
        f || (f = v.create());
        var l = k.dot(e, d);
        if (1 <= l) v.set(C, f);
        else if (-.999999 > l) k.cross(b, e, r), 1E-6 > k.length(r) && k.cross(a, e, r), 1E-6 > k.length(r) && k.cross(h, e, r), k.normalize(r), v.fromAngleAxis(Math.PI, r, f);
        else {
            var l = Math.sqrt(2 * (1 + l)),
                c = 1 / l;
            k.cross(e, d, r);
            f[0] = r[0] * c;
            f[1] = r[1] * c;
            f[2] = r[2] * c;
            f[3] = .5 * l;
            v.normalize(f)
        }
        1 < f[3] ? f[3] = 1 : -1 > f[3] && (f[3] = -1);
        return f
    };
    k.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + "]"
    };
    var w = {
            create: function(e) {
                var a = new g(9);
                e ? (a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3], a[4] = e[4], a[5] = e[5], a[6] = e[6], a[7] = e[7], a[8] = e[8]) : a[0] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = 0;
                return a
            },
            createFrom: function(e, a, b, d, h, f, c, r, q) {
                var l = new g(9);
                l[0] = e;
                l[1] = a;
                l[2] = b;
                l[3] = d;
                l[4] = h;
                l[5] = f;
                l[6] = c;
                l[7] = r;
                l[8] = q;
                return l
            },
            determinant: function(e) {
                var a = e[3],
                    b = e[4],
                    d = e[5],
                    h = e[6],
                    f = e[7],
                    c = e[8];
                return e[0] * (c * b - d * f) + e[1] * (-c * a + d * h) + e[2] * (f * a - b * h)
            },
            inverse: function(e, a) {
                var b = e[0],
                    d = e[1],
                    l = e[2],
                    h = e[3],
                    f = e[4],
                    c = e[5],
                    r = e[6],
                    g = e[7],
                    q = e[8],
                    k = q * f - c * g,
                    m = -q * h + c * r,
                    v = g * h - f * r,
                    u = b * k + d * m + l * v;
                if (!u) return null;
                u = 1 / u;
                a || (a = w.create());
                a[0] = k * u;
                a[1] = (-q * d + l * g) * u;
                a[2] = (c * d - l * f) * u;
                a[3] = m * u;
                a[4] = (q * b - l * r) * u;
                a[5] = (-c * b + l * h) * u;
                a[6] = v * u;
                a[7] = (-g * b + d * r) * u;
                a[8] = (f * b - d * h) * u;
                return a
            },
            multiply: function(e, a, b) {
                b || (b = e);
                var d = e[0],
                    h = e[1],
                    l = e[2],
                    f = e[3],
                    c = e[4],
                    r = e[5],
                    g = e[6],
                    q = e[7];
                e = e[8];
                var w = a[0],
                    k = a[1],
                    m = a[2],
                    x = a[3],
                    v = a[4],
                    u = a[5],
                    C = a[6],
                    y = a[7];
                a = a[8];
                b[0] = w * d + k * f + m * g;
                b[1] = w * h + k * c + m * q;
                b[2] = w * l + k * r + m * e;
                b[3] = x * d + v * f + u * g;
                b[4] = x * h + v * c + u * q;
                b[5] = x * l + v * r + u * e;
                b[6] = C * d + y * f + a * g;
                b[7] = C * h + y * c + a * q;
                b[8] = C * l + y * r + a * e;
                return b
            },
            multiplyVec2: function(e, a, b) {
                b || (b = a);
                var d = a[0];
                a = a[1];
                b[0] = d * e[0] + a * e[3] + e[6];
                b[1] = d * e[1] + a * e[4] + e[7];
                return b
            },
            multiplyVec3: function(e, a, b) {
                b || (b = a);
                var d = a[0],
                    h = a[1];
                a = a[2];
                b[0] = d * e[0] + h * e[3] + a * e[6];
                b[1] = d * e[1] + h * e[4] + a * e[7];
                b[2] = d * e[2] + h * e[5] + a * e[8];
                return b
            },
            set: function(e, a) {
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                a[3] = e[3];
                a[4] = e[4];
                a[5] = e[5];
                a[6] = e[6];
                a[7] = e[7];
                a[8] = e[8];
                return a
            },
            equal: function(e, a) {
                return e === a || 1E-6 > Math.abs(e[0] - a[0]) && 1E-6 > Math.abs(e[1] - a[1]) && 1E-6 > Math.abs(e[2] - a[2]) && 1E-6 > Math.abs(e[3] - a[3]) && 1E-6 > Math.abs(e[4] - a[4]) && 1E-6 > Math.abs(e[5] - a[5]) && 1E-6 > Math.abs(e[6] - a[6]) && 1E-6 > Math.abs(e[7] - a[7]) && 1E-6 > Math.abs(e[8] - a[8])
            },
            identity: function(e) {
                e || (e = w.create());
                e[0] = 1;
                e[1] = 0;
                e[2] = 0;
                e[3] = 0;
                e[4] = 1;
                e[5] =
                    0;
                e[6] = 0;
                e[7] = 0;
                e[8] = 1;
                return e
            },
            transpose: function(e, a) {
                if (!a || e === a) {
                    var b = e[1],
                        d = e[2],
                        h = e[5];
                    e[1] = e[3];
                    e[2] = e[6];
                    e[3] = b;
                    e[5] = e[7];
                    e[6] = d;
                    e[7] = h;
                    return e
                }
                a[0] = e[0];
                a[1] = e[3];
                a[2] = e[6];
                a[3] = e[1];
                a[4] = e[4];
                a[5] = e[7];
                a[6] = e[2];
                a[7] = e[5];
                a[8] = e[8];
                return a
            },
            toMat4: function(e, a) {
                a || (a = q.create());
                a[15] = 1;
                a[14] = 0;
                a[13] = 0;
                a[12] = 0;
                a[11] = 0;
                a[10] = e[8];
                a[9] = e[7];
                a[8] = e[6];
                a[7] = 0;
                a[6] = e[5];
                a[5] = e[4];
                a[4] = e[3];
                a[3] = 0;
                a[2] = e[2];
                a[1] = e[1];
                a[0] = e[0];
                return a
            },
            str: function(e) {
                return "[" + e[0] + ", " + e[1] + ", " + e[2] +
                    ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + "]"
            }
        },
        q = {
            create: function(e) {
                var a = new g(16);
                e && (a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3], a[4] = e[4], a[5] = e[5], a[6] = e[6], a[7] = e[7], a[8] = e[8], a[9] = e[9], a[10] = e[10], a[11] = e[11], a[12] = e[12], a[13] = e[13], a[14] = e[14], a[15] = e[15]);
                return a
            },
            createFrom: function(e, a, b, d, h, f, c, r, q, w, k, m, v, u, C, y) {
                var l = new g(16);
                l[0] = e;
                l[1] = a;
                l[2] = b;
                l[3] = d;
                l[4] = h;
                l[5] = f;
                l[6] = c;
                l[7] = r;
                l[8] = q;
                l[9] = w;
                l[10] = k;
                l[11] = m;
                l[12] = v;
                l[13] = u;
                l[14] = C;
                l[15] = y;
                return l
            },
            set: function(e,
                a) {
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                a[3] = e[3];
                a[4] = e[4];
                a[5] = e[5];
                a[6] = e[6];
                a[7] = e[7];
                a[8] = e[8];
                a[9] = e[9];
                a[10] = e[10];
                a[11] = e[11];
                a[12] = e[12];
                a[13] = e[13];
                a[14] = e[14];
                a[15] = e[15];
                return a
            },
            equal: function(e, a) {
                return e === a || 1E-6 > Math.abs(e[0] - a[0]) && 1E-6 > Math.abs(e[1] - a[1]) && 1E-6 > Math.abs(e[2] - a[2]) && 1E-6 > Math.abs(e[3] - a[3]) && 1E-6 > Math.abs(e[4] - a[4]) && 1E-6 > Math.abs(e[5] - a[5]) && 1E-6 > Math.abs(e[6] - a[6]) && 1E-6 > Math.abs(e[7] - a[7]) && 1E-6 > Math.abs(e[8] - a[8]) && 1E-6 > Math.abs(e[9] - a[9]) && 1E-6 > Math.abs(e[10] - a[10]) &&
                    1E-6 > Math.abs(e[11] - a[11]) && 1E-6 > Math.abs(e[12] - a[12]) && 1E-6 > Math.abs(e[13] - a[13]) && 1E-6 > Math.abs(e[14] - a[14]) && 1E-6 > Math.abs(e[15] - a[15])
            },
            identity: function(e) {
                e || (e = q.create());
                e[0] = 1;
                e[1] = 0;
                e[2] = 0;
                e[3] = 0;
                e[4] = 0;
                e[5] = 1;
                e[6] = 0;
                e[7] = 0;
                e[8] = 0;
                e[9] = 0;
                e[10] = 1;
                e[11] = 0;
                e[12] = 0;
                e[13] = 0;
                e[14] = 0;
                e[15] = 1;
                return e
            },
            transpose: function(e, a) {
                if (!a || e === a) {
                    var b = e[1],
                        d = e[2],
                        h = e[3],
                        f = e[6],
                        l = e[7],
                        c = e[11];
                    e[1] = e[4];
                    e[2] = e[8];
                    e[3] = e[12];
                    e[4] = b;
                    e[6] = e[9];
                    e[7] = e[13];
                    e[8] = d;
                    e[9] = f;
                    e[11] = e[14];
                    e[12] = h;
                    e[13] = l;
                    e[14] = c;
                    return e
                }
                a[0] = e[0];
                a[1] = e[4];
                a[2] = e[8];
                a[3] = e[12];
                a[4] = e[1];
                a[5] = e[5];
                a[6] = e[9];
                a[7] = e[13];
                a[8] = e[2];
                a[9] = e[6];
                a[10] = e[10];
                a[11] = e[14];
                a[12] = e[3];
                a[13] = e[7];
                a[14] = e[11];
                a[15] = e[15];
                return a
            },
            determinant: function(e) {
                var a = e[0],
                    b = e[1],
                    d = e[2],
                    h = e[3],
                    f = e[4],
                    c = e[5],
                    r = e[6],
                    g = e[7],
                    q = e[8],
                    w = e[9],
                    k = e[10],
                    m = e[11],
                    v = e[12],
                    u = e[13],
                    C = e[14];
                e = e[15];
                return v * w * r * h - q * u * r * h - v * c * k * h + f * u * k * h + q * c * C * h - f * w * C * h - v * w * d * g + q * u * d * g + v * b * k * g - a * u * k * g - q * b * C * g + a * w * C * g + v * c * d * m - f * u * d * m - v * b * r * m + a * u * r * m + f * b * C * m - a * c * C * m - q * c * d * e + f * w * d *
                    e + q * b * r * e - a * w * r * e - f * b * k * e + a * c * k * e
            },
            inverse: function(e, a) {
                a || (a = e);
                var b = e[0],
                    d = e[1],
                    h = e[2],
                    f = e[3],
                    l = e[4],
                    c = e[5],
                    r = e[6],
                    g = e[7],
                    q = e[8],
                    w = e[9],
                    k = e[10],
                    m = e[11],
                    v = e[12],
                    u = e[13],
                    C = e[14],
                    y = e[15],
                    p = b * c - d * l,
                    B = b * r - h * l,
                    n = b * g - f * l,
                    X = d * r - h * c,
                    da = d * g - f * c,
                    ea = h * g - f * r,
                    Z = q * u - w * v,
                    ga = q * C - k * v,
                    ba = q * y - m * v,
                    ka = w * C - k * u,
                    ha = w * y - m * u,
                    P = k * y - m * C,
                    T = p * P - B * ha + n * ka + X * ba - da * ga + ea * Z;
                if (!T) return null;
                T = 1 / T;
                a[0] = (c * P - r * ha + g * ka) * T;
                a[1] = (-d * P + h * ha - f * ka) * T;
                a[2] = (u * ea - C * da + y * X) * T;
                a[3] = (-w * ea + k * da - m * X) * T;
                a[4] = (-l * P + r * ba - g * ga) * T;
                a[5] = (b * P - h * ba +
                    f * ga) * T;
                a[6] = (-v * ea + C * n - y * B) * T;
                a[7] = (q * ea - k * n + m * B) * T;
                a[8] = (l * ha - c * ba + g * Z) * T;
                a[9] = (-b * ha + d * ba - f * Z) * T;
                a[10] = (v * da - u * n + y * p) * T;
                a[11] = (-q * da + w * n - m * p) * T;
                a[12] = (-l * ka + c * ga - r * Z) * T;
                a[13] = (b * ka - d * ga + h * Z) * T;
                a[14] = (-v * X + u * B - C * p) * T;
                a[15] = (q * X - w * B + k * p) * T;
                return a
            },
            toRotationMat: function(e, a) {
                a || (a = q.create());
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                a[3] = e[3];
                a[4] = e[4];
                a[5] = e[5];
                a[6] = e[6];
                a[7] = e[7];
                a[8] = e[8];
                a[9] = e[9];
                a[10] = e[10];
                a[11] = e[11];
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            },
            toMat3: function(e, a) {
                a || (a = w.create());
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                a[3] = e[4];
                a[4] = e[5];
                a[5] = e[6];
                a[6] = e[8];
                a[7] = e[9];
                a[8] = e[10];
                return a
            },
            toInverseMat3: function(e, a) {
                var b = e[0],
                    d = e[1],
                    h = e[2],
                    f = e[4],
                    l = e[5],
                    c = e[6],
                    r = e[8],
                    g = e[9],
                    q = e[10],
                    k = q * l - c * g,
                    m = -q * f + c * r,
                    v = g * f - l * r,
                    u = b * k + d * m + h * v;
                if (!u) return null;
                u = 1 / u;
                a || (a = w.create());
                a[0] = k * u;
                a[1] = (-q * d + h * g) * u;
                a[2] = (c * d - h * l) * u;
                a[3] = m * u;
                a[4] = (q * b - h * r) * u;
                a[5] = (-c * b + h * f) * u;
                a[6] = v * u;
                a[7] = (-g * b + d * r) * u;
                a[8] = (l * b - d * f) * u;
                return a
            },
            multiply: function(e, a, b) {
                b || (b = e);
                var d = e[0],
                    h = e[1],
                    f = e[2],
                    l = e[3],
                    c = e[4],
                    r =
                    e[5],
                    g = e[6],
                    q = e[7],
                    w = e[8],
                    k = e[9],
                    m = e[10],
                    v = e[11],
                    x = e[12],
                    u = e[13],
                    C = e[14];
                e = e[15];
                var y = a[0],
                    p = a[1],
                    B = a[2],
                    n = a[3];
                b[0] = y * d + p * c + B * w + n * x;
                b[1] = y * h + p * r + B * k + n * u;
                b[2] = y * f + p * g + B * m + n * C;
                b[3] = y * l + p * q + B * v + n * e;
                y = a[4];
                p = a[5];
                B = a[6];
                n = a[7];
                b[4] = y * d + p * c + B * w + n * x;
                b[5] = y * h + p * r + B * k + n * u;
                b[6] = y * f + p * g + B * m + n * C;
                b[7] = y * l + p * q + B * v + n * e;
                y = a[8];
                p = a[9];
                B = a[10];
                n = a[11];
                b[8] = y * d + p * c + B * w + n * x;
                b[9] = y * h + p * r + B * k + n * u;
                b[10] = y * f + p * g + B * m + n * C;
                b[11] = y * l + p * q + B * v + n * e;
                y = a[12];
                p = a[13];
                B = a[14];
                n = a[15];
                b[12] = y * d + p * c + B * w + n * x;
                b[13] = y * h + p * r + B * k + n * u;
                b[14] = y * f + p * g + B * m + n * C;
                b[15] = y * l + p * q + B * v + n * e;
                return b
            },
            multiplyVec3: function(e, a, b) {
                b || (b = a);
                var d = a[0],
                    h = a[1];
                a = a[2];
                b[0] = e[0] * d + e[4] * h + e[8] * a + e[12];
                b[1] = e[1] * d + e[5] * h + e[9] * a + e[13];
                b[2] = e[2] * d + e[6] * h + e[10] * a + e[14];
                return b
            },
            multiplyVec4: function(e, a, b) {
                b || (b = a);
                var d = a[0],
                    h = a[1],
                    f = a[2];
                a = a[3];
                b[0] = e[0] * d + e[4] * h + e[8] * f + e[12] * a;
                b[1] = e[1] * d + e[5] * h + e[9] * f + e[13] * a;
                b[2] = e[2] * d + e[6] * h + e[10] * f + e[14] * a;
                b[3] = e[3] * d + e[7] * h + e[11] * f + e[15] * a;
                return b
            },
            translate: function(e, a, b) {
                var d = a[0],
                    h = a[1];
                a = a[2];
                if (!b || e ===
                    b) return e[12] = e[0] * d + e[4] * h + e[8] * a + e[12], e[13] = e[1] * d + e[5] * h + e[9] * a + e[13], e[14] = e[2] * d + e[6] * h + e[10] * a + e[14], e[15] = e[3] * d + e[7] * h + e[11] * a + e[15], e;
                var f = e[0];
                var l = e[1];
                var c = e[2];
                var r = e[3];
                var g = e[4];
                var q = e[5];
                var w = e[6];
                var k = e[7];
                var m = e[8];
                var v = e[9];
                var u = e[10];
                var x = e[11];
                b[0] = f;
                b[1] = l;
                b[2] = c;
                b[3] = r;
                b[4] = g;
                b[5] = q;
                b[6] = w;
                b[7] = k;
                b[8] = m;
                b[9] = v;
                b[10] = u;
                b[11] = x;
                b[12] = f * d + g * h + m * a + e[12];
                b[13] = l * d + q * h + v * a + e[13];
                b[14] = c * d + w * h + u * a + e[14];
                b[15] = r * d + k * h + x * a + e[15];
                return b
            },
            scale: function(e, a, b) {
                var d = a[0],
                    h = a[1];
                a = a[2];
                if (!b || e === b) return e[0] *= d, e[1] *= d, e[2] *= d, e[3] *= d, e[4] *= h, e[5] *= h, e[6] *= h, e[7] *= h, e[8] *= a, e[9] *= a, e[10] *= a, e[11] *= a, e;
                b[0] = e[0] * d;
                b[1] = e[1] * d;
                b[2] = e[2] * d;
                b[3] = e[3] * d;
                b[4] = e[4] * h;
                b[5] = e[5] * h;
                b[6] = e[6] * h;
                b[7] = e[7] * h;
                b[8] = e[8] * a;
                b[9] = e[9] * a;
                b[10] = e[10] * a;
                b[11] = e[11] * a;
                b[12] = e[12];
                b[13] = e[13];
                b[14] = e[14];
                b[15] = e[15];
                return b
            },
            rotate: function(e, a, b, d) {
                var h = b[0],
                    f = b[1];
                b = b[2];
                var l = Math.sqrt(h * h + f * f + b * b);
                if (!l) return null;
                1 !== l && (l = 1 / l, h *= l, f *= l, b *= l);
                var c = Math.sin(a);
                var r = Math.cos(a);
                var g = 1 - r;
                a = e[0];
                l = e[1];
                var q = e[2];
                var w = e[3];
                var k = e[4];
                var m = e[5];
                var v = e[6];
                var u = e[7];
                var x = e[8];
                var C = e[9];
                var y = e[10];
                var p = e[11];
                var B = h * h * g + r;
                var n = f * h * g + b * c;
                var A = b * h * g - f * c;
                var ea = h * f * g - b * c;
                var Z = f * f * g + r;
                var ga = b * f * g + h * c;
                var ba = h * b * g + f * c;
                h = f * b * g - h * c;
                f = b * b * g + r;
                d ? e !== d && (d[12] = e[12], d[13] = e[13], d[14] = e[14], d[15] = e[15]) : d = e;
                d[0] = a * B + k * n + x * A;
                d[1] = l * B + m * n + C * A;
                d[2] = q * B + v * n + y * A;
                d[3] = w * B + u * n + p * A;
                d[4] = a * ea + k * Z + x * ga;
                d[5] = l * ea + m * Z + C * ga;
                d[6] = q * ea + v * Z + y * ga;
                d[7] = w * ea + u * Z + p * ga;
                d[8] = a * ba + k * h + x * f;
                d[9] = l *
                    ba + m * h + C * f;
                d[10] = q * ba + v * h + y * f;
                d[11] = w * ba + u * h + p * f;
                return d
            },
            rotateX: function(e, a, b) {
                var d = Math.sin(a);
                a = Math.cos(a);
                var h = e[4],
                    f = e[5],
                    l = e[6],
                    c = e[7],
                    r = e[8],
                    g = e[9],
                    q = e[10],
                    w = e[11];
                b ? e !== b && (b[0] = e[0], b[1] = e[1], b[2] = e[2], b[3] = e[3], b[12] = e[12], b[13] = e[13], b[14] = e[14], b[15] = e[15]) : b = e;
                b[4] = h * a + r * d;
                b[5] = f * a + g * d;
                b[6] = l * a + q * d;
                b[7] = c * a + w * d;
                b[8] = h * -d + r * a;
                b[9] = f * -d + g * a;
                b[10] = l * -d + q * a;
                b[11] = c * -d + w * a;
                return b
            },
            rotateY: function(e, a, b) {
                var d = Math.sin(a);
                a = Math.cos(a);
                var h = e[0],
                    f = e[1],
                    l = e[2],
                    c = e[3],
                    r = e[8],
                    g = e[9],
                    q = e[10],
                    w = e[11];
                b ? e !== b && (b[4] = e[4], b[5] = e[5], b[6] = e[6], b[7] = e[7], b[12] = e[12], b[13] = e[13], b[14] = e[14], b[15] = e[15]) : b = e;
                b[0] = h * a + r * -d;
                b[1] = f * a + g * -d;
                b[2] = l * a + q * -d;
                b[3] = c * a + w * -d;
                b[8] = h * d + r * a;
                b[9] = f * d + g * a;
                b[10] = l * d + q * a;
                b[11] = c * d + w * a;
                return b
            },
            rotateZ: function(e, a, b) {
                var d = Math.sin(a);
                a = Math.cos(a);
                var h = e[0],
                    f = e[1],
                    c = e[2],
                    l = e[3],
                    r = e[4],
                    g = e[5],
                    q = e[6],
                    w = e[7];
                b ? e !== b && (b[8] = e[8], b[9] = e[9], b[10] = e[10], b[11] = e[11], b[12] = e[12], b[13] = e[13], b[14] = e[14], b[15] = e[15]) : b = e;
                b[0] = h * a + r * d;
                b[1] = f * a + g * d;
                b[2] = c * a + q * d;
                b[3] = l * a + w * d;
                b[4] = h * -d + r * a;
                b[5] = f * -d + g * a;
                b[6] = c * -d + q * a;
                b[7] = l * -d + w * a;
                return b
            },
            frustum: function(e, a, b, d, h, f, c) {
                c || (c = q.create());
                var l = a - e,
                    r = d - b,
                    g = f - h;
                c[0] = 2 * h / l;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 0;
                c[5] = 2 * h / r;
                c[6] = 0;
                c[7] = 0;
                c[8] = (a + e) / l;
                c[9] = (d + b) / r;
                c[10] = -(f + h) / g;
                c[11] = -1;
                c[12] = 0;
                c[13] = 0;
                c[14] = -(f * h * 2) / g;
                c[15] = 0;
                return c
            },
            perspective: function(e, a, b, d, h) {
                e = b * Math.tan(e * Math.PI / 360);
                a *= e;
                return q.frustum(-a, a, -e, e, b, d, h)
            },
            ortho: function(e, a, b, d, h, f, c) {
                c || (c = q.create());
                var l = a - e,
                    r = d - b,
                    g = f - h;
                c[0] = 2 / l;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 0;
                c[5] = 2 / r;
                c[6] = 0;
                c[7] = 0;
                c[8] = 0;
                c[9] = 0;
                c[10] = -2 / g;
                c[11] = 0;
                c[12] = -(e + a) / l;
                c[13] = -(d + b) / r;
                c[14] = -(f + h) / g;
                c[15] = 1;
                return c
            },
            lookAt: function(e, a, b, d) {
                d || (d = q.create());
                var h = e[0],
                    f = e[1];
                e = e[2];
                var c = b[0];
                var l = b[1];
                var r = b[2];
                var g = a[0];
                b = a[1];
                var w = a[2];
                if (h === g && f === b && e === w) return q.identity(d);
                a = h - g;
                b = f - b;
                g = e - w;
                var k = 1 / Math.sqrt(a * a + b * b + g * g);
                a *= k;
                b *= k;
                g *= k;
                w = l * g - r * b;
                r = r * a - c * g;
                c = c * b - l * a;
                (k = Math.sqrt(w * w + r * r + c * c)) ? (k = 1 / k, w *= k, r *= k, c *= k) : c = r = w = 0;
                l = b * c - g * r;
                var m = g * w - a * c;
                var v = a * r - b *
                    w;
                (k = Math.sqrt(l * l + m * m + v * v)) ? (k = 1 / k, l *= k, m *= k, v *= k) : v = m = l = 0;
                d[0] = w;
                d[1] = l;
                d[2] = a;
                d[3] = 0;
                d[4] = r;
                d[5] = m;
                d[6] = b;
                d[7] = 0;
                d[8] = c;
                d[9] = v;
                d[10] = g;
                d[11] = 0;
                d[12] = -(w * h + r * f + c * e);
                d[13] = -(l * h + m * f + v * e);
                d[14] = -(a * h + b * f + g * e);
                d[15] = 1;
                return d
            },
            fromRotationTranslation: function(e, a, b) {
                b || (b = q.create());
                var d = e[0],
                    h = e[1],
                    f = e[2],
                    c = e[3],
                    l = d + d,
                    r = h + h,
                    g = f + f;
                e = d * l;
                var w = d * r,
                    d = d * g,
                    k = h * r,
                    h = h * g,
                    f = f * g,
                    l = c * l,
                    r = c * r,
                    c = c * g;
                b[0] = 1 - (k + f);
                b[1] = w + c;
                b[2] = d - r;
                b[3] = 0;
                b[4] = w - c;
                b[5] = 1 - (e + f);
                b[6] = h + l;
                b[7] = 0;
                b[8] = d + r;
                b[9] = h - l;
                b[10] = 1 - (e + k);
                b[11] = 0;
                b[12] = a[0];
                b[13] = a[1];
                b[14] = a[2];
                b[15] = 1;
                return b
            },
            str: function(e) {
                return "[" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + "]"
            }
        },
        v = {
            create: function(e) {
                var a = new g(4);
                e ? (a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3]) : a[0] = a[1] = a[2] = a[3] = 0;
                return a
            },
            createFrom: function(e, a, b, d) {
                var h = new g(4);
                h[0] = e;
                h[1] = a;
                h[2] = b;
                h[3] = d;
                return h
            },
            set: function(e, a) {
                a[0] = e[0];
                a[1] = e[1];
                a[2] = e[2];
                a[3] = e[3];
                return a
            },
            equal: function(e, a) {
                return e === a || 1E-6 > Math.abs(e[0] - a[0]) && 1E-6 > Math.abs(e[1] - a[1]) && 1E-6 > Math.abs(e[2] - a[2]) && 1E-6 > Math.abs(e[3] - a[3])
            },
            identity: function(e) {
                e || (e = v.create());
                e[0] = 0;
                e[1] = 0;
                e[2] = 0;
                e[3] = 1;
                return e
            }
        },
        C = v.identity();
    v.calculateW = function(e, a) {
        var b = e[0],
            d = e[1],
            h = e[2];
        if (!a || e === a) return e[3] = -Math.sqrt(Math.abs(1 - b * b - d * d - h * h)), e;
        a[0] = b;
        a[1] = d;
        a[2] = h;
        a[3] = -Math.sqrt(Math.abs(1 - b * b - d * d - h * h));
        return a
    };
    v.dot = function(e, a) {
        return e[0] * a[0] + e[1] * a[1] + e[2] * a[2] + e[3] * a[3]
    };
    v.inverse =
        function(e, a) {
            var b = e[0],
                d = e[1],
                h = e[2],
                f = e[3],
                b = (b = b * b + d * d + h * h + f * f) ? 1 / b : 0;
            if (!a || e === a) return e[0] *= -b, e[1] *= -b, e[2] *= -b, e[3] *= b, e;
            a[0] = -e[0] * b;
            a[1] = -e[1] * b;
            a[2] = -e[2] * b;
            a[3] = e[3] * b;
            return a
        };
    v.conjugate = function(e, a) {
        if (!a || e === a) return e[0] *= -1, e[1] *= -1, e[2] *= -1, e;
        a[0] = -e[0];
        a[1] = -e[1];
        a[2] = -e[2];
        a[3] = e[3];
        return a
    };
    v.length = function(e) {
        var a = e[0],
            b = e[1],
            d = e[2];
        e = e[3];
        return Math.sqrt(a * a + b * b + d * d + e * e)
    };
    v.normalize = function(e, a) {
        a || (a = e);
        var b = e[0],
            d = e[1],
            h = e[2],
            f = e[3],
            c = Math.sqrt(b * b + d * d + h * h + f *
                f);
        if (0 === c) return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a;
        c = 1 / c;
        a[0] = b * c;
        a[1] = d * c;
        a[2] = h * c;
        a[3] = f * c;
        return a
    };
    v.add = function(e, a, b) {
        if (!b || e === b) return e[0] += a[0], e[1] += a[1], e[2] += a[2], e[3] += a[3], e;
        b[0] = e[0] + a[0];
        b[1] = e[1] + a[1];
        b[2] = e[2] + a[2];
        b[3] = e[3] + a[3];
        return b
    };
    v.multiply = function(e, a, b) {
        b || (b = e);
        var d = e[0],
            h = e[1],
            f = e[2];
        e = e[3];
        var c = a[0],
            r = a[1],
            g = a[2];
        a = a[3];
        b[0] = d * a + e * c + h * g - f * r;
        b[1] = h * a + e * r + f * c - d * g;
        b[2] = f * a + e * g + d * r - h * c;
        b[3] = e * a - d * c - h * r - f * g;
        return b
    };
    v.multiplyVec3 = function(e, a, b) {
        b || (b = a);
        var d = a[0],
            h = a[1],
            f = a[2];
        a = e[0];
        var c = e[1],
            r = e[2];
        e = e[3];
        var g = e * d + c * f - r * h,
            l = e * h + r * d - a * f,
            q = e * f + a * h - c * d,
            d = -a * d - c * h - r * f;
        b[0] = g * e + d * -a + l * -r - q * -c;
        b[1] = l * e + d * -c + q * -a - g * -r;
        b[2] = q * e + d * -r + g * -c - l * -a;
        return b
    };
    v.scale = function(e, a, b) {
        if (!b || e === b) return e[0] *= a, e[1] *= a, e[2] *= a, e[3] *= a, e;
        b[0] = e[0] * a;
        b[1] = e[1] * a;
        b[2] = e[2] * a;
        b[3] = e[3] * a;
        return b
    };
    v.toMat3 = function(e, a) {
        a || (a = w.create());
        var b = e[0],
            d = e[1],
            h = e[2],
            f = e[3],
            c = b + b,
            r = d + d,
            g = h + h,
            l = b * c,
            q = b * r,
            b = b * g,
            k = d * r,
            d = d * g,
            h = h * g,
            c = f * c,
            r = f * r,
            f = f * g;
        a[0] = 1 - (k + h);
        a[1] = q + f;
        a[2] = b - r;
        a[3] = q - f;
        a[4] = 1 - (l + h);
        a[5] = d + c;
        a[6] = b + r;
        a[7] = d - c;
        a[8] = 1 - (l + k);
        return a
    };
    v.toMat4 = function(e, a) {
        a || (a = q.create());
        var b = e[0],
            d = e[1],
            h = e[2],
            f = e[3],
            c = b + b,
            r = d + d,
            g = h + h,
            l = b * c,
            w = b * r,
            b = b * g,
            k = d * r,
            d = d * g,
            h = h * g,
            c = f * c,
            r = f * r,
            f = f * g;
        a[0] = 1 - (k + h);
        a[1] = w + f;
        a[2] = b - r;
        a[3] = 0;
        a[4] = w - f;
        a[5] = 1 - (l + h);
        a[6] = d + c;
        a[7] = 0;
        a[8] = b + r;
        a[9] = d - c;
        a[10] = 1 - (l + k);
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1;
        return a
    };
    v.slerp = function(e, a, b, d) {
        d || (d = e);
        var h = e[0] * a[0] + e[1] * a[1] + e[2] * a[2] + e[3] * a[3];
        if (1 <= Math.abs(h)) return d !== e && (d[0] = e[0], d[1] =
            e[1], d[2] = e[2], d[3] = e[3]), d;
        var f = Math.acos(h);
        var c = Math.sqrt(1 - h * h);
        if (.001 > Math.abs(c)) return d[0] = .5 * e[0] + .5 * a[0], d[1] = .5 * e[1] + .5 * a[1], d[2] = .5 * e[2] + .5 * a[2], d[3] = .5 * e[3] + .5 * a[3], d;
        h = Math.sin((1 - b) * f) / c;
        b = Math.sin(b * f) / c;
        d[0] = e[0] * h + a[0] * b;
        d[1] = e[1] * h + a[1] * b;
        d[2] = e[2] * h + a[2] * b;
        d[3] = e[3] * h + a[3] * b;
        return d
    };
    v.fromRotationMatrix = function(e, a) {
        a || (a = v.create());
        var b = e[0] + e[4] + e[8];
        if (0 < b) {
            var d = Math.sqrt(b + 1);
            a[3] = .5 * d;
            d = .5 / d;
            a[0] = (e[7] - e[5]) * d;
            a[1] = (e[2] - e[6]) * d;
            a[2] = (e[3] - e[1]) * d
        } else {
            d = v.fromRotationMatrix.s_iNext =
                v.fromRotationMatrix.s_iNext || [1, 2, 0];
            b = 0;
            e[4] > e[0] && (b = 1);
            e[8] > e[3 * b + b] && (b = 2);
            var h = d[b],
                f = d[h];
            d = Math.sqrt(e[3 * b + b] - e[3 * h + h] - e[3 * f + f] + 1);
            a[b] = .5 * d;
            d = .5 / d;
            a[3] = (e[3 * f + h] - e[3 * h + f]) * d;
            a[h] = (e[3 * h + b] + e[3 * b + h]) * d;
            a[f] = (e[3 * f + b] + e[3 * b + f]) * d
        }
        return a
    };
    w.toQuat4 = v.fromRotationMatrix;
    (function() {
        var e = w.create();
        v.fromAxes = function(a, b, d, h) {
            e[0] = b[0];
            e[3] = b[1];
            e[6] = b[2];
            e[1] = d[0];
            e[4] = d[1];
            e[7] = d[2];
            e[2] = a[0];
            e[5] = a[1];
            e[8] = a[2];
            return v.fromRotationMatrix(e, h)
        }
    })();
    v.identity = function(e) {
        e || (e = v.create());
        e[0] = 0;
        e[1] = 0;
        e[2] = 0;
        e[3] = 1;
        return e
    };
    v.fromAngleAxis = function(e, a, b) {
        b || (b = v.create());
        e *= .5;
        var d = Math.sin(e);
        b[3] = Math.cos(e);
        b[0] = d * a[0];
        b[1] = d * a[1];
        b[2] = d * a[2];
        return b
    };
    v.toAngleAxis = function(e, a) {
        a || (a = e);
        var b = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
        0 < b ? (a[3] = 2 * Math.acos(e[3]), b = m.invsqrt(b), a[0] = e[0] * b, a[1] = e[1] * b, a[2] = e[2] * b) : (a[3] = 0, a[0] = 1, a[1] = 0, a[2] = 0);
        return a
    };
    v.str = function(e) {
        return "[" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + "]"
    };
    var u = {
            create: function(e) {
                var a = new g(2);
                e ? (a[0] = e[0], a[1] = e[1]) :
                    (a[0] = 0, a[1] = 0);
                return a
            },
            createFrom: function(e, a) {
                var b = new g(2);
                b[0] = e;
                b[1] = a;
                return b
            },
            add: function(e, a, b) {
                b || (b = a);
                b[0] = e[0] + a[0];
                b[1] = e[1] + a[1];
                return b
            },
            subtract: function(e, a, b) {
                b || (b = a);
                b[0] = e[0] - a[0];
                b[1] = e[1] - a[1];
                return b
            },
            multiply: function(e, a, b) {
                b || (b = a);
                b[0] = e[0] * a[0];
                b[1] = e[1] * a[1];
                return b
            },
            divide: function(e, a, b) {
                b || (b = a);
                b[0] = e[0] / a[0];
                b[1] = e[1] / a[1];
                return b
            },
            scale: function(e, a, b) {
                b || (b = e);
                b[0] = e[0] * a;
                b[1] = e[1] * a;
                return b
            },
            dist: function(e, a) {
                var b = a[0] - e[0],
                    d = a[1] - e[1];
                return Math.sqrt(b *
                    b + d * d)
            },
            set: function(e, a) {
                a[0] = e[0];
                a[1] = e[1];
                return a
            },
            equal: function(e, a) {
                return e === a || 1E-6 > Math.abs(e[0] - a[0]) && 1E-6 > Math.abs(e[1] - a[1])
            },
            negate: function(e, a) {
                a || (a = e);
                a[0] = -e[0];
                a[1] = -e[1];
                return a
            },
            normalize: function(e, a) {
                a || (a = e);
                var b = e[0] * e[0] + e[1] * e[1];
                0 < b ? (b = Math.sqrt(b), a[0] = e[0] / b, a[1] = e[1] / b) : a[0] = a[1] = 0;
                return a
            },
            cross: function(e, a, b) {
                e = e[0] * a[1] - e[1] * a[0];
                if (!b) return e;
                b[0] = b[1] = 0;
                b[2] = e;
                return b
            },
            length: function(e) {
                var a = e[0];
                e = e[1];
                return Math.sqrt(a * a + e * e)
            },
            squaredLength: function(e) {
                var a =
                    e[0];
                e = e[1];
                return a * a + e * e
            },
            dot: function(e, a) {
                return e[0] * a[0] + e[1] * a[1]
            },
            direction: function(e, a, b) {
                b || (b = e);
                var d = e[0] - a[0];
                e = e[1] - a[1];
                a = d * d + e * e;
                if (!a) return b[0] = 0, b[1] = 0, b[2] = 0, b;
                a = 1 / Math.sqrt(a);
                b[0] = d * a;
                b[1] = e * a;
                return b
            },
            lerp: function(e, a, b, d) {
                d || (d = e);
                d[0] = e[0] + b * (a[0] - e[0]);
                d[1] = e[1] + b * (a[1] - e[1]);
                return d
            },
            str: function(e) {
                return "[" + e[0] + ", " + e[1] + "]"
            }
        },
        y = {
            create: function(e) {
                var a = new g(4);
                e ? (a[0] = e[0], a[1] = e[1], a[2] = e[2], a[3] = e[3]) : a[0] = a[1] = a[2] = a[3] = 0;
                return a
            },
            createFrom: function(a, b,
                d, h) {
                var e = new g(4);
                e[0] = a;
                e[1] = b;
                e[2] = d;
                e[3] = h;
                return e
            },
            set: function(a, b) {
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                return b
            },
            equal: function(a, b) {
                return a === b || 1E-6 > Math.abs(a[0] - b[0]) && 1E-6 > Math.abs(a[1] - b[1]) && 1E-6 > Math.abs(a[2] - b[2]) && 1E-6 > Math.abs(a[3] - b[3])
            },
            identity: function(a) {
                a || (a = y.create());
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 1;
                return a
            },
            transpose: function(a, b) {
                if (!b || a === b) {
                    var e = a[1];
                    a[1] = a[2];
                    a[2] = e;
                    return a
                }
                b[0] = a[0];
                b[1] = a[2];
                b[2] = a[1];
                b[3] = a[3];
                return b
            },
            determinant: function(a) {
                return a[0] *
                    a[3] - a[2] * a[1]
            },
            inverse: function(a, b) {
                b || (b = a);
                var e = a[0],
                    d = a[1],
                    h = a[2],
                    f = a[3],
                    c = e * f - h * d;
                if (!c) return null;
                c = 1 / c;
                b[0] = f * c;
                b[1] = -d * c;
                b[2] = -h * c;
                b[3] = e * c;
                return b
            },
            multiply: function(a, b, d) {
                d || (d = a);
                var e = a[0],
                    h = a[1],
                    f = a[2];
                a = a[3];
                d[0] = e * b[0] + h * b[2];
                d[1] = e * b[1] + h * b[3];
                d[2] = f * b[0] + a * b[2];
                d[3] = f * b[1] + a * b[3];
                return d
            },
            rotate: function(a, b, d) {
                d || (d = a);
                var e = a[0],
                    h = a[1],
                    f = a[2];
                a = a[3];
                var c = Math.sin(b);
                b = Math.cos(b);
                d[0] = e * b + h * c;
                d[1] = e * -c + h * b;
                d[2] = f * b + a * c;
                d[3] = f * -c + a * b;
                return d
            },
            multiplyVec2: function(a, b, d) {
                d ||
                    (d = b);
                var e = b[0];
                b = b[1];
                d[0] = e * a[0] + b * a[1];
                d[1] = e * a[2] + b * a[3];
                return d
            },
            scale: function(a, b, d) {
                d || (d = a);
                var e = a[1],
                    h = a[2],
                    f = a[3],
                    c = b[0];
                b = b[1];
                d[0] = a[0] * c;
                d[1] = e * b;
                d[2] = h * c;
                d[3] = f * b;
                return d
            },
            str: function(a) {
                return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
            }
        },
        B = {
            create: function(a) {
                var e = new g(4);
                a ? (e[0] = a[0], e[1] = a[1], e[2] = a[2], e[3] = a[3]) : (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0);
                return e
            },
            createFrom: function(a, b, d, h) {
                var e = new g(4);
                e[0] = a;
                e[1] = b;
                e[2] = d;
                e[3] = h;
                return e
            },
            add: function(a, b, d) {
                d || (d = b);
                d[0] = a[0] + b[0];
                d[1] = a[1] + b[1];
                d[2] = a[2] + b[2];
                d[3] = a[3] + b[3];
                return d
            },
            subtract: function(a, b, d) {
                d || (d = b);
                d[0] = a[0] - b[0];
                d[1] = a[1] - b[1];
                d[2] = a[2] - b[2];
                d[3] = a[3] - b[3];
                return d
            },
            multiply: function(a, b, d) {
                d || (d = b);
                d[0] = a[0] * b[0];
                d[1] = a[1] * b[1];
                d[2] = a[2] * b[2];
                d[3] = a[3] * b[3];
                return d
            },
            divide: function(a, b, d) {
                d || (d = b);
                d[0] = a[0] / b[0];
                d[1] = a[1] / b[1];
                d[2] = a[2] / b[2];
                d[3] = a[3] / b[3];
                return d
            },
            scale: function(a, b, d) {
                d || (d = a);
                d[0] = a[0] * b;
                d[1] = a[1] * b;
                d[2] = a[2] * b;
                d[3] = a[3] * b;
                return d
            },
            set: function(a, b) {
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                return b
            },
            equal: function(a, b) {
                return a === b || 1E-6 > Math.abs(a[0] - b[0]) && 1E-6 > Math.abs(a[1] - b[1]) && 1E-6 > Math.abs(a[2] - b[2]) && 1E-6 > Math.abs(a[3] - b[3])
            },
            negate: function(a, b) {
                b || (b = a);
                b[0] = -a[0];
                b[1] = -a[1];
                b[2] = -a[2];
                b[3] = -a[3];
                return b
            },
            length: function(a) {
                var e = a[0],
                    b = a[1],
                    d = a[2];
                a = a[3];
                return Math.sqrt(e * e + b * b + d * d + a * a)
            },
            squaredLength: function(a) {
                var e = a[0],
                    b = a[1],
                    d = a[2];
                a = a[3];
                return e * e + b * b + d * d + a * a
            },
            lerp: function(a, b, d, h) {
                h || (h = a);
                h[0] = a[0] + d * (b[0] - a[0]);
                h[1] = a[1] + d * (b[1] - a[1]);
                h[2] = a[2] + d *
                    (b[2] - a[2]);
                h[3] = a[3] + d * (b[3] - a[3]);
                return h
            },
            str: function(a) {
                return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
            }
        };
    c && (c.glMatrixArrayType = g, c.MatrixArray = g, c.setMatrixArrayType = n, c.determineMatrixArrayType = p, c.glMath = m, c.vec2 = u, c.vec3 = k, c.vec4 = B, c.mat2 = y, c.mat3 = w, c.mat4 = q, c.quat4 = v);
    return {
        glMatrixArrayType: g,
        MatrixArray: g,
        setMatrixArrayType: n,
        determineMatrixArrayType: p,
        glMath: m,
        vec2: u,
        vec3: k,
        vec4: B,
        mat2: y,
        mat3: w,
        mat4: q,
        quat4: v
    }
});
(function(c) {
    function n(a) {
        return 0 == a ? 0 : 0 < a ? 1 : -1
    }
    var p = {
            subtract: function(a, b) {
                return {
                    x: a.x - b.x,
                    y: a.y - b.y
                }
            },
            dotProduct: function(a, b) {
                return a.x * b.x + a.y * b.y
            },
            square: function(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y)
            },
            scale: function(a, b) {
                return {
                    x: a.x * b,
                    y: a.y * b
                }
            }
        },
        m = Math.pow(2, -65),
        g = function(a, b) {
            var h = [],
                f = b.length - 1;
            var c = 2 * f - 1;
            for (var r = [], e = [], g = [], q = [], w = [
                    [1, .6, .3, .1],
                    [.4, .6, .6, .4],
                    [.1, .3, .6, 1]
                ], m = 0; m <= f; m++) r[m] = p.subtract(b[m], a);
            for (m = 0; m <= f - 1; m++) e[m] = p.subtract(b[m + 1], b[m]), e[m] = p.scale(e[m],
                3);
            for (m = 0; m <= f - 1; m++)
                for (var v = 0; v <= f; v++) g[m] || (g[m] = []), g[m][v] = p.dotProduct(e[m], r[v]);
            for (m = 0; m <= c; m++) q[m] || (q[m] = []), q[m].y = 0, q[m].x = parseFloat(m) / c;
            c = f - 1;
            for (r = 0; r <= f + c; r++)
                for (e = Math.min(r, f), m = Math.max(0, r - c); m <= e; m++) v = r - m, q[m + v].y += g[v][m] * w[v][m];
            f = b.length - 1;
            q = k(q, 2 * f - 1, h, 0);
            c = p.subtract(a, b[0]);
            g = p.square(c);
            for (m = w = 0; m < q; m++) c = p.subtract(a, d(b, f, h[m], null, null)), c = p.square(c), c < g && (g = c, w = h[m]);
            c = p.subtract(a, b[f]);
            c = p.square(c);
            c < g && (g = c, w = 1);
            return {
                location: w,
                distance: g
            }
        },
        k = function(a,
            b, h, f) {
            var c = [],
                r = [],
                e = [],
                g = [],
                q = 0;
            var w = n(a[0].y);
            for (var v = 1; v <= b; v++) {
                var u = n(a[v].y);
                u != w && q++;
                w = u
            }
            switch (q) {
                case 0:
                    return 0;
                case 1:
                    if (64 <= f) return h[0] = (a[0].x + a[b].x) / 2, 1;
                    var C, p, q = a[0].y - a[b].y;
                    u = a[b].x - a[0].x;
                    w = a[0].x * a[b].y - a[b].x * a[0].y;
                    v = C = 0;
                    for (p = 1; p < b; p++) {
                        var F = q * a[p].x + u * a[p].y + w;
                        F > C ? C = F : F < v && (v = F)
                    }
                    p = u;
                    C = 1 / (0 * p - 1 * q) * (1 * (w - C) - 0 * p);
                    p = u;
                    q = 1 / (0 * p - 1 * q) * (1 * (w - v) - 0 * p);
                    if (Math.max(C, q) - Math.min(C, q) < m) return e = a[b].x - a[0].x, g = a[b].y - a[0].y, h[0] = 0 + 1 / (0 * e - 1 * g) * 1 * (e * (a[0].y - 0) - g * (a[0].x - 0)), 1
            }
            d(a,
                b, .5, c, r);
            a = k(c, b, e, f + 1);
            b = k(r, b, g, f + 1);
            for (f = 0; f < a; f++) h[f] = e[f];
            for (f = 0; f < b; f++) h[f + a] = g[f];
            return a + b
        },
        d = function(a, b, d, h, f) {
            for (var c = [
                    []
                ], e = 0; e <= b; e++) c[0][e] = a[e];
            for (a = 1; a <= b; a++)
                for (e = 0; e <= b - a; e++) c[a] || (c[a] = []), c[a][e] || (c[a][e] = {}), c[a][e].x = (1 - d) * c[a - 1][e].x + d * c[a - 1][e + 1].x, c[a][e].y = (1 - d) * c[a - 1][e].y + d * c[a - 1][e + 1].y;
            if (null != h)
                for (e = 0; e <= b; e++) h[e] = c[e][0];
            if (null != f)
                for (e = 0; e <= b; e++) f[e] = c[b - e][e];
            return c[b][0]
        },
        f = {},
        b = function(a) {
            var b = f[a];
            if (!b) {
                var b = [],
                    d = function(a) {
                        return function(e) {
                            return a
                        }
                    },
                    h = function() {
                        return function(a) {
                            return a
                        }
                    },
                    c = function() {
                        return function(a) {
                            return 1 - a
                        }
                    },
                    r = function(a) {
                        return function(e) {
                            for (var b = 1, d = 0; d < a.length; d++) b *= a[d](e);
                            return b
                        }
                    };
                b.push(new function() {
                    return function(e) {
                        return Math.pow(e, a)
                    }
                });
                for (var e = 1; e < a; e++) {
                    for (var g = [new d(a)], q = 0; q < a - e; q++) g.push(new h);
                    for (q = 0; q < e; q++) g.push(new c);
                    b.push(new r(g))
                }
                b.push(new function() {
                    return function(e) {
                        return Math.pow(1 - e, a)
                    }
                });
                f[a] = b
            }
            return b
        },
        a = function(a, d) {
            for (var h = b(a.length - 1), f = 0, c = 0, r = 0; r < a.length; r++) f +=
                a[r].x * h[r](d), c += a[r].y * h[r](d);
            return {
                x: f,
                y: c
            }
        },
        h = function(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
        },
        r = function(b, d, f) {
            for (var c = a(b, d), r = 0, g = 0 < f ? 1 : -1, e = null; r < Math.abs(f);) d += .005 * g, e = a(b, d), r += h(e, c), c = e;
            return {
                point: e,
                location: d
            }
        },
        w = function(b, d) {
            var h = a(b, d),
                f = a(b.slice(0, b.length - 1), d),
                c = f.y - h.y,
                h = f.x - h.x;
            return 0 == c ? Infinity : Math.atan(c / h)
        };
    ChemDoodle.lib.jsBezier = {
        distanceFromCurve: g,
        gradientAtPoint: w,
        gradientAtPointAlongCurveFrom: function(a, b, d) {
            b = r(a, b, d);
            1 < b.location &&
                (b.location = 1);
            0 > b.location && (b.location = 0);
            return w(a, b.location)
        },
        nearestPointOnCurve: function(a, b) {
            var h = g(a, b);
            return {
                point: d(b, b.length - 1, h.location, null, null),
                location: h.location
            }
        },
        pointOnCurve: a,
        pointAlongCurveFrom: function(a, b, d) {
            return r(a, b, d).point
        },
        perpendicularToCurveAt: function(a, b, d, h) {
            b = r(a, b, null == h ? 0 : h);
            a = w(a, b.location);
            h = Math.atan(-1 / a);
            a = d / 2 * Math.sin(h);
            d = d / 2 * Math.cos(h);
            return [{
                x: b.point.x + d,
                y: b.point.y + a
            }, {
                x: b.point.x - d,
                y: b.point.y - a
            }]
        },
        locationAlongCurveFrom: function(a, b, d) {
            return r(a,
                b, d).location
        },
        getLength: function(b) {
            for (var d = a(b, 0), f = 0, c = 0, r; 1 > c;) c += .005, r = a(b, c), f += h(r, d), d = r;
            return f
        }
    }
})(ChemDoodle.lib);
ChemDoodle.lib.MarchingCubes = function() {
    var c = new Uint32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554,
            2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725,
            2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0
        ]),
        n = [
            [],
            [0, 8, 3],
            [0, 1, 9],
            [1, 8, 3, 9, 8, 1],
            [1, 2, 10],
            [0, 8, 3, 1, 2, 10],
            [9, 2, 10, 0, 2, 9],
            [2, 8, 3, 2, 10, 8, 10, 9, 8],
            [3, 11, 2],
            [0, 11, 2, 8, 11, 0],
            [1, 9, 0, 2, 3, 11],
            [1, 11, 2, 1, 9, 11, 9, 8, 11],
            [3, 10, 1, 11, 10, 3],
            [0, 10, 1, 0, 8, 10, 8, 11, 10],
            [3, 9, 0, 3, 11, 9, 11, 10, 9],
            [9, 8, 10, 10,
                8, 11
            ],
            [4, 7, 8],
            [4, 3, 0, 7, 3, 4],
            [0, 1, 9, 8, 4, 7],
            [4, 1, 9, 4, 7, 1, 7, 3, 1],
            [1, 2, 10, 8, 4, 7],
            [3, 4, 7, 3, 0, 4, 1, 2, 10],
            [9, 2, 10, 9, 0, 2, 8, 4, 7],
            [2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4],
            [8, 4, 7, 3, 11, 2],
            [11, 4, 7, 11, 2, 4, 2, 0, 4],
            [9, 0, 1, 8, 4, 7, 2, 3, 11],
            [4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1],
            [3, 10, 1, 3, 11, 10, 7, 8, 4],
            [1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4],
            [4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3],
            [4, 7, 11, 4, 11, 9, 9, 11, 10],
            [9, 5, 4],
            [9, 5, 4, 0, 8, 3],
            [0, 5, 4, 1, 5, 0],
            [8, 5, 4, 8, 3, 5, 3, 1, 5],
            [1, 2, 10, 9, 5, 4],
            [3, 0, 8, 1, 2, 10, 4, 9, 5],
            [5, 2, 10, 5, 4, 2, 4, 0, 2],
            [2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8],
            [9, 5, 4, 2, 3, 11],
            [0, 11,
                2, 0, 8, 11, 4, 9, 5
            ],
            [0, 5, 4, 0, 1, 5, 2, 3, 11],
            [2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5],
            [10, 3, 11, 10, 1, 3, 9, 5, 4],
            [4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10],
            [5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3],
            [5, 4, 8, 5, 8, 10, 10, 8, 11],
            [9, 7, 8, 5, 7, 9],
            [9, 3, 0, 9, 5, 3, 5, 7, 3],
            [0, 7, 8, 0, 1, 7, 1, 5, 7],
            [1, 5, 3, 3, 5, 7],
            [9, 7, 8, 9, 5, 7, 10, 1, 2],
            [10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3],
            [8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2],
            [2, 10, 5, 2, 5, 3, 3, 5, 7],
            [7, 9, 5, 7, 8, 9, 3, 11, 2],
            [9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11],
            [2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7],
            [11, 2, 1, 11, 1, 7, 7, 1, 5],
            [9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11],
            [5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0],
            [11, 10,
                0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0
            ],
            [11, 10, 5, 7, 11, 5],
            [10, 6, 5],
            [0, 8, 3, 5, 10, 6],
            [9, 0, 1, 5, 10, 6],
            [1, 8, 3, 1, 9, 8, 5, 10, 6],
            [1, 6, 5, 2, 6, 1],
            [1, 6, 5, 1, 2, 6, 3, 0, 8],
            [9, 6, 5, 9, 0, 6, 0, 2, 6],
            [5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8],
            [2, 3, 11, 10, 6, 5],
            [11, 0, 8, 11, 2, 0, 10, 6, 5],
            [0, 1, 9, 2, 3, 11, 5, 10, 6],
            [5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11],
            [6, 3, 11, 6, 5, 3, 5, 1, 3],
            [0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6],
            [3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9],
            [6, 5, 9, 6, 9, 11, 11, 9, 8],
            [5, 10, 6, 4, 7, 8],
            [4, 3, 0, 4, 7, 3, 6, 5, 10],
            [1, 9, 0, 5, 10, 6, 8, 4, 7],
            [10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4],
            [6, 1, 2, 6, 5, 1, 4, 7, 8],
            [1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4,
                7
            ],
            [8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6],
            [7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9],
            [3, 11, 2, 7, 8, 4, 10, 6, 5],
            [5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11],
            [0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6],
            [9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6],
            [8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6],
            [5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11],
            [0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7],
            [6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9],
            [10, 4, 9, 6, 4, 10],
            [4, 10, 6, 4, 9, 10, 0, 8, 3],
            [10, 0, 1, 10, 6, 0, 6, 4, 0],
            [8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10],
            [1, 4, 9, 1, 2, 4, 2, 6, 4],
            [3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4],
            [0, 2, 4, 4, 2, 6],
            [8, 3, 2, 8, 2, 4, 4, 2, 6],
            [10, 4, 9, 10, 6, 4, 11, 2, 3],
            [0, 8, 2, 2, 8,
                11, 4, 9, 10, 4, 10, 6
            ],
            [3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10],
            [6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1],
            [9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3],
            [8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1],
            [3, 11, 6, 3, 6, 0, 0, 6, 4],
            [6, 4, 8, 11, 6, 8],
            [7, 10, 6, 7, 8, 10, 8, 9, 10],
            [0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10],
            [10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0],
            [10, 6, 7, 10, 7, 1, 1, 7, 3],
            [1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7],
            [2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9],
            [7, 8, 0, 7, 0, 6, 6, 0, 2],
            [7, 3, 2, 6, 7, 2],
            [2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7],
            [2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7],
            [1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11],
            [11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1],
            [8,
                9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6
            ],
            [0, 9, 1, 11, 6, 7],
            [7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0],
            [7, 11, 6],
            [7, 6, 11],
            [3, 0, 8, 11, 7, 6],
            [0, 1, 9, 11, 7, 6],
            [8, 1, 9, 8, 3, 1, 11, 7, 6],
            [10, 1, 2, 6, 11, 7],
            [1, 2, 10, 3, 0, 8, 6, 11, 7],
            [2, 9, 0, 2, 10, 9, 6, 11, 7],
            [6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8],
            [7, 2, 3, 6, 2, 7],
            [7, 0, 8, 7, 6, 0, 6, 2, 0],
            [2, 7, 6, 2, 3, 7, 0, 1, 9],
            [1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6],
            [10, 7, 6, 10, 1, 7, 1, 3, 7],
            [10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8],
            [0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7],
            [7, 6, 10, 7, 10, 8, 8, 10, 9],
            [6, 8, 4, 11, 8, 6],
            [3, 6, 11, 3, 0, 6, 0, 4, 6],
            [8, 6, 11, 8, 4, 6, 9, 0, 1],
            [9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6],
            [6,
                8, 4, 6, 11, 8, 2, 10, 1
            ],
            [1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6],
            [4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9],
            [10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3],
            [8, 2, 3, 8, 4, 2, 4, 6, 2],
            [0, 4, 2, 4, 6, 2],
            [1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8],
            [1, 9, 4, 1, 4, 2, 2, 4, 6],
            [8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1],
            [10, 1, 0, 10, 0, 6, 6, 0, 4],
            [4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3],
            [10, 9, 4, 6, 10, 4],
            [4, 9, 5, 7, 6, 11],
            [0, 8, 3, 4, 9, 5, 11, 7, 6],
            [5, 0, 1, 5, 4, 0, 7, 6, 11],
            [11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5],
            [9, 5, 4, 10, 1, 2, 7, 6, 11],
            [6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5],
            [7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2],
            [3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6],
            [7, 2, 3, 7, 6, 2,
                5, 4, 9
            ],
            [9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7],
            [3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0],
            [6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8],
            [9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7],
            [1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4],
            [4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10],
            [7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10],
            [6, 9, 5, 6, 11, 9, 11, 8, 9],
            [3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5],
            [0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11],
            [6, 11, 3, 6, 3, 5, 5, 3, 1],
            [1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6],
            [0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10],
            [11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5],
            [6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3],
            [5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2],
            [9, 5, 6, 9, 6, 0, 0, 6, 2],
            [1, 5, 8, 1,
                8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8
            ],
            [1, 5, 6, 2, 1, 6],
            [1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6],
            [10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0],
            [0, 3, 8, 5, 6, 10],
            [10, 5, 6],
            [11, 5, 10, 7, 5, 11],
            [11, 5, 10, 11, 7, 5, 8, 3, 0],
            [5, 11, 7, 5, 10, 11, 1, 9, 0],
            [10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1],
            [11, 1, 2, 11, 7, 1, 7, 5, 1],
            [0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11],
            [9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7],
            [7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2],
            [2, 5, 10, 2, 3, 5, 3, 7, 5],
            [8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5],
            [9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2],
            [9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2],
            [1, 3, 5, 3, 7, 5],
            [0, 8, 7, 0, 7, 1, 1, 7, 5],
            [9, 0, 3, 9, 3, 5, 5, 3, 7],
            [9, 8, 7, 5, 9, 7],
            [5,
                8, 4, 5, 10, 8, 10, 11, 8
            ],
            [5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0],
            [0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5],
            [10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4],
            [2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8],
            [0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11],
            [0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5],
            [9, 4, 5, 2, 11, 3],
            [2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4],
            [5, 10, 2, 5, 2, 4, 4, 2, 0],
            [3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9],
            [5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2],
            [8, 4, 5, 8, 5, 3, 3, 5, 1],
            [0, 4, 5, 1, 0, 5],
            [8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5],
            [9, 4, 5],
            [4, 11, 7, 4, 9, 11, 9, 10, 11],
            [0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11],
            [1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11],
            [3, 1, 4, 3, 4, 8,
                1, 10, 4, 7, 4, 11, 10, 11, 4
            ],
            [4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2],
            [9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3],
            [11, 7, 4, 11, 4, 2, 2, 4, 0],
            [11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4],
            [2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9],
            [9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7],
            [3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10],
            [1, 10, 2, 8, 7, 4],
            [4, 9, 1, 4, 1, 7, 7, 1, 3],
            [4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1],
            [4, 0, 3, 7, 4, 3],
            [4, 8, 7],
            [9, 10, 8, 10, 11, 8],
            [3, 0, 9, 3, 9, 11, 11, 9, 10],
            [0, 1, 10, 0, 10, 8, 8, 10, 11],
            [3, 1, 10, 11, 3, 10],
            [1, 2, 11, 1, 11, 9, 9, 11, 8],
            [3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9],
            [0, 2, 11, 8, 0, 11],
            [3, 2, 11],
            [2, 3, 8, 2, 8, 10, 10, 8, 9],
            [9, 10,
                2, 0, 9, 2
            ],
            [2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8],
            [1, 10, 2],
            [1, 3, 8, 9, 1, 8],
            [0, 9, 1],
            [0, 3, 8],
            []
        ],
        p = [
            [0, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
            [0, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 1, 1]
        ],
        m = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 4],
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7]
        ];
    return function(g, k) {
        var d = [],
            f = [],
            b = 0,
            a = new Float32Array(8),
            h = new Int32Array(12),
            r = new Int32Array(3);
        for (r[2] = 0; r[2] < k[2] - 1; ++r[2], b += k[0])
            for (r[1] = 0; r[1] < k[1] - 1; ++r[1], ++b)
                for (r[0] = 0; r[0] < k[0] - 1; ++r[0], ++b) {
                    for (var w = 0, q = 0; 8 > q; ++q) {
                        var v = p[q],
                            v = g[b + v[0] + k[0] * (v[1] + k[1] * v[2])];
                        a[q] = v;
                        w |= 0 < v ? 1 << q : 0
                    }
                    v = c[w];
                    if (0 !== v) {
                        for (q = 0; 12 > q; ++q)
                            if (0 !== (v & 1 << q)) {
                                h[q] = d.length;
                                var C = [0, 0, 0],
                                    u = m[q],
                                    y = p[u[0]],
                                    B = p[u[1]],
                                    e = a[u[0]],
                                    l = e - a[u[1]],
                                    u = 0;
                                1E-6 < Math.abs(l) && (u = e / l);
                                for (e = 0; 3 > e; ++e) C[e] = r[e] + y[e] + u * (B[e] - y[e]);
                                d.push(C)
                            }
                        w = n[w];
                        for (q = 0; q < w.length; q += 3) f.push([h[w[q]], h[w[q + 1]], h[w[q + 2]]])
                    }
                }
        return {
            vertices: d,
            faces: f
        }
    }
}();
ChemDoodle.animations = function(c, n) {
    var p = {};
    c.requestAnimFrame = function() {
        return c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame || function(m, g) {
            c.setTimeout(m, 1E3 / 60)
        }
    }();
    p.requestInterval = function(m, g) {
        function k() {
            (new Date).getTime() - d >= g && (m.call(), d = (new Date).getTime());
            f.value = c.requestAnimFrame(k)
        }
        if (!(c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame && c.mozCancelRequestAnimationFrame ||
                c.oRequestAnimationFrame || c.msRequestAnimationFrame)) return c.setInterval(m, g);
        var d = (new Date).getTime(),
            f = {};
        f.value = c.requestAnimFrame(k);
        return f
    };
    p.clearRequestInterval = function(m) {
        c.cancelAnimationFrame ? c.cancelAnimationFrame(m.value) : c.webkitCancelAnimationFrame ? c.webkitCancelAnimationFrame(m.value) : c.webkitCancelRequestAnimationFrame ? c.webkitCancelRequestAnimationFrame(m.value) : c.mozCancelRequestAnimationFrame ? c.mozCancelRequestAnimationFrame(m.value) : c.oCancelRequestAnimationFrame ? c.oCancelRequestAnimationFrame(m.value) :
            c.msCancelRequestAnimationFrame ? c.msCancelRequestAnimationFrame(m.value) : clearInterval(m)
    };
    p.requestTimeout = function(m, g) {
        function k() {
            (new Date).getTime() - d >= g ? m.call() : f.value = c.requestAnimFrame(k)
        }
        if (!(c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame && c.mozCancelRequestAnimationFrame || c.oRequestAnimationFrame || c.msRequestAnimationFrame)) return c.setTimeout(m, g);
        var d = (new Date).getTime(),
            f = {};
        f.value = c.requestAnimFrame(k);
        return f
    };
    p.clearRequestTimeout = function(m) {
        c.cancelAnimationFrame ?
            c.cancelAnimationFrame(m.value) : c.webkitCancelAnimationFrame ? c.webkitCancelAnimationFrame(m.value) : c.webkitCancelRequestAnimationFrame ? c.webkitCancelRequestAnimationFrame(m.value) : c.mozCancelRequestAnimationFrame ? c.mozCancelRequestAnimationFrame(m.value) : c.oCancelRequestAnimationFrame ? c.oCancelRequestAnimationFrame(m.value) : c.msCancelRequestAnimationFrame ? c.msCancelRequestAnimationFrame(m.value) : clearTimeout(m)
    };
    return p
}(window);
ChemDoodle.extensions = function(c, n, p, m) {
    return {
        stringStartsWith: function(c, k) {
            return c.slice(0, k.length) === k
        },
        vec3AngleFrom: function(c, k) {
            var d = n.length(c),
                f = n.length(k),
                b = n.dot(c, k);
            return p.acos(b / d / f)
        },
        contextRoundRect: function(c, k, d, f, b, a) {
            c.beginPath();
            c.moveTo(k + a, d);
            c.lineTo(k + f - a, d);
            c.quadraticCurveTo(k + f, d, k + f, d + a);
            c.lineTo(k + f, d + b - a);
            c.quadraticCurveTo(k + f, d + b, k + f - a, d + b);
            c.lineTo(k + a, d + b);
            c.quadraticCurveTo(k, d + b, k, d + b - a);
            c.lineTo(k, d + a);
            c.quadraticCurveTo(k, d, k + a, d);
            c.closePath()
        },
        contextEllipse: function(c,
            k, d, f, b) {
            var a = f / 2 * .5522848,
                h = b / 2 * .5522848,
                r = k + f,
                g = d + b;
            f = k + f / 2;
            b = d + b / 2;
            c.beginPath();
            c.moveTo(k, b);
            c.bezierCurveTo(k, b - h, f - a, d, f, d);
            c.bezierCurveTo(f + a, d, r, b - h, r, b);
            c.bezierCurveTo(r, b + h, f + a, g, f, g);
            c.bezierCurveTo(f - a, g, k, b + h, k, b);
            c.closePath()
        },
        getFontString: function(c, k, d, f) {
            var b = [];
            d && b.push("bold ");
            f && b.push("italic ");
            b.push(c + "px ");
            c = 0;
            for (d = k.length; c < d; c++) f = k[c], -1 !== f.indexOf(" ") && (f = '"' + f + '"'), b.push((0 !== c ? "," : "") + f);
            return b.join("")
        }
    }
}(ChemDoodle.structures, ChemDoodle.lib.vec3, Math);
ChemDoodle.math = function(c, n, p, m, g, k) {
    var d = {},
        f = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            "indigo ": "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
    d.angleBetweenLargest = function(b) {
        if (0 === b.length) return {
            angle: 0,
            largest: 2 * g.PI
        };
        if (1 === b.length) return {
            angle: b[0] + g.PI,
            largest: 2 * g.PI
        };
        for (var a = 0, d = 0, f = 0, c = b.length - 1; f < c; f++) {
            var q = b[f + 1] - b[f];
            q > a && (a = q, d = (b[f + 1] + b[f]) / 2)
        }
        f = b[0] + 2 * g.PI - b[b.length - 1];
        f > a && (d = b[0] - f / 2, a = f, 0 > d && (d += 2 * g.PI));
        return {
            angle: d,
            largest: a
        }
    };
    d.isBetween = function(b, a, d) {
        if (a > d) {
            var h = a;
            a = d;
            d = h
        }
        return b >= a && b <= d
    };
    m(document).ready(function() {
        c && c.iChemLabs && c.iChemLabs.checkForUpdates && c.iChemLabs.checkForUpdates({})
    });
    d.getRGB = function(b, a) {
        var d = [0, 0, 0];
        f[b.toLowerCase()] && (b = f[b.toLowerCase()]);
        if ("#" === b.charAt(0)) return 4 === b.length && (b = "#" + b.charAt(1) + b.charAt(1) + b.charAt(2) + b.charAt(2) + b.charAt(3) + b.charAt(3)), [parseInt(b.substring(1, 3), 16) / 255 * a, parseInt(b.substring(3, 5), 16) / 255 * a, parseInt(b.substring(5, 7), 16) / 255 * a];
        if (n.stringStartsWith(b, "rgb")) {
            var c = b.replace(/rgb\(|\)/g, "").split(",");
            return 3 !== c.length ? d : [parseInt(c[0]) / 255 * a, parseInt(c[1]) / 255 * a, parseInt(c[2]) / 255 * a]
        }
        return d
    };
    d.hsl2rgb = function(b, a, d) {
        var h = function(a, b, d) {
            0 > d ? d += 1 : 1 < d && --d;
            return d < 1 / 6 ? a + 6 * (b - a) * d : .5 > d ? b : d < 2 / 3 ? a + (b - a) * (2 / 3 - d) * 6 : a
        };
        if (0 === a) d = a = b = d;
        else {
            var f = .5 > d ? d * (1 + a) : d + a - d * a,
                c = 2 * d - f;
            d = h(c, f, b + 1 / 3);
            a = h(c, f, b);
            b = h(c, f, b - 1 /
                3)
        }
        return [255 * d, 255 * a, 255 * b]
    };
    d.idx2color = function(b) {
        b = b.toString(16);
        for (var a = 0, d = 6 - b.length; a < d; a++) b = "0" + b;
        return "#" + b
    };
    d.distanceFromPointToLineInclusive = function(b, a, h, f) {
        var c = a.distance(h);
        h = a.angle(h);
        h = g.PI / 2 - h;
        h = a.angle(b) + h;
        b = a.distance(b);
        b = new p.Point(b * g.cos(h), -b * g.sin(h));
        f = f ? f : 0;
        return d.isBetween(-b.y, f, c - f) ? g.abs(b.x) : -1
    };
    d.calculateDistanceInterior = function(b, a, d) {
        if (this.isBetween(a.x, d.x, d.x + d.w) && this.isBetween(a.y, d.y, d.y + d.h)) return b.distance(a);
        var h = [];
        h.push({
            x1: d.x,
            y1: d.y,
            x2: d.x + d.w,
            y2: d.y
        });
        h.push({
            x1: d.x,
            y1: d.y + d.h,
            x2: d.x + d.w,
            y2: d.y + d.h
        });
        h.push({
            x1: d.x,
            y1: d.y,
            x2: d.x,
            y2: d.y + d.h
        });
        h.push({
            x1: d.x + d.w,
            y1: d.y,
            x2: d.x + d.w,
            y2: d.y + d.h
        });
        d = [];
        for (var f = 0; 4 > f; f++) {
            var c = h[f];
            (c = this.intersectLines(a.x, a.y, b.x, b.y, c.x1, c.y1, c.x2, c.y2)) && d.push(c)
        }
        if (0 === d.length) return 0;
        f = a = 0;
        for (h = d.length; f < h; f++) {
            c = d[f];
            var k = b.x - c.x;
            c = b.y - c.y;
            a = g.max(a, g.sqrt(k * k + c * c))
        }
        return a
    };
    d.intersectLines = function(b, a, d, f, c, g, k, m) {
        d -= b;
        f -= a;
        k -= c;
        m -= g;
        var h = f * k - d * m;
        if (0 === h) return !1;
        k = (m *
            (b - c) - k * (a - g)) / h;
        c = (f * (b - c) - d * (a - g)) / h;
        return 0 <= c && 1 >= c && 0 <= k && 1 >= k ? {
            x: b + k * d,
            y: a + k * f
        } : !1
    };
    d.clamp = function(b, a, d) {
        return b < a ? a : b > d ? d : b
    };
    d.rainbowAt = function(b, a, h) {
        1 > h.length ? h.push("#000000", "#FFFFFF") : 2 > h.length && h.push("#FFFFFF");
        var f = a / (h.length - 1);
        a = g.floor(b / f);
        b = (b - a * f) / f;
        f = d.getRGB(h[a], 1);
        h = d.getRGB(h[a + 1], 1);
        return "rgb(" + [255 * (f[0] + (h[0] - f[0]) * b), 255 * (f[1] + (h[1] - f[1]) * b), 255 * (f[2] + (h[2] - f[2]) * b)].join() + ")"
    };
    d.angleBounds = function(b, a, d) {
        for (var h = 2 * g.PI; 0 > b;) b += h;
        for (; b > h;) b -= h;
        d && b >
            g.PI && (b = 2 * g.PI - b);
        a && (b = 180 * b / g.PI);
        return b
    };
    d.isPointInPoly = function(b, a) {
        for (var d = !1, f = -1, c = b.length, g = c - 1; ++f < c; g = f)(b[f].y <= a.y && a.y < b[g].y || b[g].y <= a.y && a.y < b[f].y) && a.x < (b[g].x - b[f].x) * (a.y - b[f].y) / (b[g].y - b[f].y) + b[f].x && (d = !d);
        return d
    };
    return d
}(ChemDoodle, ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.lib.jQuery, Math);
(function(c, n, p) {
    c.Bounds = function() {};
    var m = c.Bounds.prototype;
    m.minX = m.minY = m.minZ = Infinity;
    m.maxX = m.maxY = m.maxZ = -Infinity;
    m.expand = function(g, k, d, f) {
        g instanceof c.Bounds ? (this.minX = n.min(this.minX, g.minX), this.minY = n.min(this.minY, g.minY), this.maxX = n.max(this.maxX, g.maxX), this.maxY = n.max(this.maxY, g.maxY), Infinity !== g.maxZ && (this.minZ = n.min(this.minZ, g.minZ), this.maxZ = n.max(this.maxZ, g.maxZ))) : (this.minX = n.min(this.minX, g), this.maxX = n.max(this.maxX, g), this.minY = n.min(this.minY, k), this.maxY = n.max(this.maxY,
            k), d !== p && f !== p && (this.minX = n.min(this.minX, d), this.maxX = n.max(this.maxX, d), this.minY = n.min(this.minY, f), this.maxY = n.max(this.maxY, f)))
    };
    m.expand3D = function(c, k, d, f, b, a) {
        this.minX = n.min(this.minX, c);
        this.maxX = n.max(this.maxX, c);
        this.minY = n.min(this.minY, k);
        this.maxY = n.max(this.maxY, k);
        this.minZ = n.min(this.minZ, d);
        this.maxZ = n.max(this.maxZ, d);
        f !== p && b !== p && a !== p && (this.minX = n.min(this.minX, f), this.maxX = n.max(this.maxX, f), this.minY = n.min(this.minY, b), this.maxY = n.max(this.maxY, b), this.minZ = n.min(this.minZ,
            a), this.maxZ = n.max(this.maxZ, a))
    }
})(ChemDoodle.math, Math);
ChemDoodle.featureDetection = function(c, n, p, m, g) {
    var k = {
        supports_canvas: function() {
            return !!p.createElement("canvas").getContext
        },
        supports_canvas_text: function() {
            return k.supports_canvas() ? "function" === typeof p.createElement("canvas").getContext("2d").fillText : !1
        },
        supports_webgl: function() {
            var d = p.createElement("canvas");
            try {
                if (d.getContext("webgl") || d.getContext("experimental-webgl")) return !0
            } catch (f) {}
            return !1
        },
        supports_xhr2: function() {
            return n.support.cors
        },
        supports_touch: function() {
            return "ontouchstart" in
                m && !!navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|BB10/i)
        },
        supports_gesture: function() {
            return "ongesturestart" in m
        }
    };
    return k
}(ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document, window);
ChemDoodle.SYMBOLS = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(" ");
ChemDoodle.ELEMENT = function(c, n) {
    function p(c, k, d, f, b, a, h, r, w, z) {
        this.symbol = c;
        this.name = k;
        this.atomicNumber = d;
        this.addH = f;
        this.jmolColor = this.pymolColor = b;
        this.covalentRadius = a;
        this.vdWRadius = h;
        this.valency = r;
        this.mass = w
        this.molarMass = z;
    }
    var m = [];
    m.H = new p("H", "Hydrogen", 1, !1, "#FFFFFF", .31, 1.1, 1, 1, 1.008);
    m.He = new p("He", "Helium", 2, !1, "#D9FFFF", .28, 1.4, 0, 4, 4.0026);
    m.Li = new p("Li", "Lithium", 3, !1, "#CC80FF", 1.28, 1.82, 1, 7, 6.94);
    m.Be = new p("Be", "Beryllium", 4, !1, "#C2FF00", .96, 1.53, 2, 9, 9.0122);
    m.B = new p("B", "Boron", 5, !0, "#FFB5B5", .84, 1.92, 3, 11, 10.81);
    m.C =
        new p("C", "Carbon", 6, !0, "#909090", .76, 1.7, 4, 12, 12.011);
    m.N = new p("N", "Nitrogen", 7, !0, "#3050F8", .71, 1.55, 3, 14, 14.007);
    m.O = new p("O", "Oxygen", 8, !0, "#FF0D0D", .66, 1.52, 2, 16, 15.999);
    m.F = new p("F", "Fluorine", 9, !0, "#90E050", .57, 1.47, 1, 19, 18.998);
    m.Ne = new p("Ne", "Neon", 10, !1, "#B3E3F5", .58, 1.54, 0, 20, 20.180);
    m.Na = new p("Na", "Sodium", 11, !1, "#AB5CF2", 1.66, 2.27, 1, 23, 22.990);
    m.Mg = new p("Mg", "Magnesium", 12, !1, "#8AFF00", 1.41, 1.73, 0, 24, 24.305);
    m.Al = new p("Al", "Aluminum", 13, !1, "#BFA6A6", 1.21, 1.84, 0, 27, 26.982);
    m.Si = new p("Si", "Silicon", 14, !0, "#F0C8A0", 1.11, 2.1, 4, 28, 28.085);
    m.P = new p("P", "Phosphorus", 15, !0, "#FF8000", 1.07, 1.8, 3, 31, 30.974);
    m.S = new p("S", "Sulfur", 16, !0, "#FFFF30", 1.05, 1.8, 2, 32, 32.06);
    m.Cl = new p("Cl", "Chlorine", 17, !0, "#1FF01F", 1.02, 1.75, 1, 35, 35.45);
    m.Ar = new p("Ar", "Argon", 18, !1, "#80D1E3", 1.06, 1.88, 0, 40, 39.948);
    m.K = new p("K", "Potassium", 19, !1, "#8F40D4", 2.03, 2.75, 0, 39, 39.098);
    m.Ca = new p("Ca", "Calcium", 20, !1, "#3DFF00", 1.76, 2.31, 0, 40, 40.078);
    m.Sc = new p("Sc", "Scandium", 21, !1, "#E6E6E6", 1.7, 0, 0, 45, 44.956);
    m.Ti = new p("Ti", "Titanium", 22, !1, "#BFC2C7", 1.6, 0, 1, 48, 47.867);
    m.V = new p("V", "Vanadium", 23, !1, "#A6A6AB", 1.53, 0, 1, 51, 50.942);
    m.Cr = new p("Cr", "Chromium", 24, !1, "#8A99C7", 1.39, 0, 2, 52, 51.996);
    m.Mn = new p("Mn", "Manganese", 25, !1, "#9C7AC7", 1.39, 0, 3, 55, 54.938);
    m.Fe = new p("Fe", "Iron", 26, !1, "#E06633", 1.32, 0, 2, 56, 55.845);
    m.Co = new p("Co", "Cobalt", 27, !1, "#F090A0", 1.26, 0, 1, 59, 58.693);
    m.Ni = new p("Ni", "Nickel", 28, !1, "#50D050", 1.24, 1.63, 1, 58, 58.693);
    m.Cu = new p("Cu", "Copper", 29, !1, "#C88033", 1.32, 1.4, 0, 63, 63.546);
    m.Zn = new p("Zn", "Zinc", 30, !1, "#7D80B0", 1.22, 1.39, 0, 64, 65.38);
    m.Ga = new p("Ga", "Gallium", 31, !1, "#C28F8F", 1.22, 1.87, 0, 69, 69.723);
    m.Ge = new p("Ge", "Germanium", 32, !1, "#668F8F", 1.2, 2.11, 4, 74, 72.630);
    m.As = new p("As", "Arsenic", 33, !0, "#BD80E3", 1.19, 1.85, 3, 75, 74.922);
    m.Se = new p("Se", "Selenium", 34, !0, "#FFA100", 1.2, 1.9, 2, 80, 78.971);
    m.Br = new p("Br", "Bromine", 35, !0, "#A62929", 1.2, 1.85, 1, 79, 79.904);
    m.Kr = new p("Kr", "Krypton", 36, !1, "#5CB8D1", 1.16, 2.02, 0, 84, 83.798);
    m.Rb = new p("Rb", "Rubidium", 37, !1, "#702EB0", 2.2, 3.03, 0, 85, 85.468);
    m.Sr = new p("Sr", "Strontium", 38, !1, "#00FF00", 1.95, 2.49, 0, 88, 87.62);
    m.Y = new p("Y", "Yttrium", 39, !1, "#94FFFF", 1.9, 0, 0, 89, 88.906);
    m.Zr = new p("Zr", "Zirconium", 40, !1, "#94E0E0", 1.75, 0, 0, 90, 91.224);
    m.Nb = new p("Nb", "Niobium", 41, !1, "#73C2C9", 1.64, 0, 1, 93, 92.906);
    m.Mo = new p("Mo", "Molybdenum", 42, !1, "#54B5B5", 1.54, 0, 2, 98, 95.95);
    m.Tc = new p("Tc", "Technetium", 43, !1, "#3B9E9E", 1.47, 0, 3, 0, 98);
    m.Ru = new p("Ru", "Ruthenium", 44, !1, "#248F8F", 1.46, 0, 2, 102, 101.07);
    m.Rh = new p("Rh", "Rhodium", 45, !1, "#0A7D8C", 1.42, 0, 1, 103, 102.91);
    m.Pd = new p("Pd", "Palladium", 46, !1, "#006985", 1.39, 1.63, 0, 106, 106.42);
    m.Ag = new p("Ag", "Silver", 47, !1, "#C0C0C0", 1.45, 1.72, 0, 107, 107.87);
    m.Cd = new p("Cd", "Cadmium", 48, !1, "#FFD98F", 1.44, 1.58, 0, 114, 112.41);
    m.In = new p("In", "Indium", 49, !1, "#A67573", 1.42, 1.93, 0, 115, 114.82);
    m.Sn = new p("Sn", "Tin", 50, !1, "#668080", 1.39, 2.17, 4, 120, 118.71);
    m.Sb = new p("Sb", "Antimony", 51, !1, "#9E63B5", 1.39, 2.06, 3, 121, 121.76);
    m.Te = new p("Te", "Tellurium", 52, !0, "#D47A00", 1.38, 2.06, 2, 130, 127.60);
    m.I = new p("I", "Iodine", 53, !0, "#940094", 1.39, 1.98, 1, 127, 126.90);
    m.Xe = new p("Xe", "Xenon", 54, !1, "#429EB0", 1.4, 2.16, 0, 132, 131.29);
    m.Cs = new p("Cs", "Cesium", 55, !1, "#57178F", 2.44, 3.43, 0, 133, 132.91);
    m.Ba = new p("Ba", "Barium", 56, !1, "#00C900", 2.15, 2.68, 0, 138, 137.33);
    m.La = new p("La", "Lanthanum", 57, !1, "#70D4FF", 2.07, 0, 0, 139, 138.91);
    m.Ce = new p("Ce", "Cerium", 58, !1, "#FFFFC7", 2.04, 0, 0, 140, 140.12);
    m.Pr = new p("Pr", "Praseodymium", 59, !1, "#D9FFC7", 2.03, 0, 0, 141, 140.91);
    m.Nd = new p("Nd", "Neodymium", 60, !1, "#C7FFC7", 2.01, 0, 0, 142, 144.24);
    m.Pm = new p("Pm", "Promethium", 61, !1, "#A3FFC7", 1.99, 0, 0, 0, 145);
    m.Sm = new p("Sm", "Samarium", 62, !1, "#8FFFC7", 1.98, 0, 0, 152, 150.36);
    m.Eu = new p("Eu", "Europium", 63, !1, "#61FFC7", 1.98, 0, 0, 153, 151.25);
    m.Gd = new p("Gd", "Gadolinium", 64, !1, "#45FFC7", 1.96, 0, 0, 158, 157.25);
    m.Tb = new p("Tb", "Terbium", 65, !1, "#30FFC7", 1.94, 0, 0, 159, 158.93);
    m.Dy = new p("Dy", "Dysprosium", 66, !1, "#1FFFC7", 1.92, 0, 0, 164, 162.50);
    m.Ho = new p("Ho", "Holmium", 67, !1, "#00FF9C", 1.92, 0, 0, 165, 164.93);
    m.Er = new p("Er", "Erbium", 68, !1, "#00E675", 1.89, 0, 0, 166, 167.26);
    m.Tm = new p("Tm", "Thulium", 69, !1, "#00D452", 1.9, 0, 0, 169, 168.93);
    m.Yb = new p("Yb", "Ytterbium", 70, !1, "#00BF38", 1.87, 0, 0, 174, 173.05);
    m.Lu = new p("Lu", "Lutetium", 71, !1, "#00AB24", 1.87, 0, 0, 175, 174.97);
    m.Hf = new p("Hf", "Hafnium", 72, !1, "#4DC2FF", 1.75, 0, 0, 180, 178.49);
    m.Ta = new p("Ta", "Tantalum", 73, !1, "#4DA6FF", 1.7, 0, 1, 181, 180.95);
    m.W = new p("W", "Tungsten", 74, !1, "#2194D6", 1.62, 0, 2, 184, 183.84);
    m.Re = new p("Re", "Rhenium", 75, !1, "#267DAB", 1.51, 0, 3, 187, 186.21);
    m.Os = new p("Os", "Osmium", 76, !1, "#266696", 1.44, 0, 2, 192, 190.23);
    m.Ir = new p("Ir", "Iridium", 77, !1, "#175487", 1.41, 0, 3, 193, 192.22);
    m.Pt = new p("Pt", "Platinum", 78, !1, "#D0D0E0", 1.36, 1.75, 0, 195, 195.08);
    m.Au = new p("Au", "Gold", 79, !1, "#FFD123", 1.36, 1.66, 1, 197, 196.97);
    m.Hg = new p("Hg", "Mercury", 80, !1, "#B8B8D0", 1.32, 1.55, 0, 202, 200.59);
    m.Tl = new p("Tl", "Thallium", 81, !1, "#A6544D", 1.45, 1.96, 0, 205, 204.38);
    m.Pb = new p("Pb", "Lead", 82, !1, "#575961", 1.46, 2.02, 4, 208, 207.2);
    m.Bi = new p("Bi", "Bismuth", 83, !1, "#9E4FB5", 1.48, 2.07, 3, 209, 208.98);
    m.Po = new p("Po", "Polonium", 84, !1, "#AB5C00", 1.4, 1.97, 2, 0, 209);
    m.At = new p("At", "Astatine", 85, !0, "#754F45", 1.5, 2.02, 1, 0, 210);
    m.Rn = new p("Rn", "Radon", 86, !1, "#428296", 1.5, 2.2, 0, 0, 222);
    m.Fr = new p("Fr", "Francium", 87, !1, "#420066", 2.6, 3.48, 0, 0, 223);
    m.Ra = new p("Ra", "Radium", 88, !1, "#007D00", 2.21, 2.83, 0, 0, 226);
    m.Ac = new p("Ac", "Actinium", 89, !1, "#70ABFA", 2.15, 0, 0, 0, 227);
    m.Th = new p("Th", "Thorium", 90, !1, "#00BAFF", 2.06, 0, 0, 232, 232.04);
    m.Pa = new p("Pa", "Protactinium", 91, !1, "#00A1FF", 2, 0, 0, 231, 231.04);
    m.U = new p("U", "Uranium", 92, !1, "#008FFF", 1.96, 1.86, 0, 238, 237);
    m.Np = new p("Np", "Neptunium", 93, !1, "#0080FF", 1.9, 0, 0, 0, 237);
    m.Pu = new p("Pu", "Plutonium", 94, !1, "#006BFF", 1.87, 0, 0, 0, 244);
    m.Am = new p("Am", "Americium", 95, !1, "#545CF2", 1.8, 0, 0, 0, 243);
    m.Cm = new p("Cm", "Curium", 96, !1, "#785CE3", 1.69, 0, 0, 0, 247);
    m.Bk = new p("Bk", "Berkelium", 97, !1, "#8A4FE3", 0, 0, 0, 0, 247);
    m.Cf = new p("Cf", "Californium", 98, !1, "#A136D4", 0, 0, 0, 0, 251);
    m.Es = new p("Es", "Einsteinium", 99, !1, "#B31FD4", 0, 0, 0, 0, 252);
    m.Fm = new p("Fm", "Fermium", 100, !1, "#B31FBA", 0, 0, 0, 0, 257);
    m.Md = new p("Md", "Mendelevium", 101, !1, "#B30DA6", 0, 0, 0, 0, 258);
    m.No = new p("No", "Nobelium", 102, !1, "#BD0D87", 0, 0, 0, 0, 259);
    m.Lr = new p("Lr", "Lawrencium", 103, !1, "#C70066", 0, 0, 0, 0, 266);
    m.Rf = new p("Rf", "Rutherfordium", 104, !1, "#CC0059", 0, 0, 0, 0, 267);
    m.Db = new p("Db", "Dubnium", 105, !1, "#D1004F", 0, 0, 0, 0, 268);
    m.Sg = new p("Sg", "Seaborgium", 106, !1, "#D90045", 0, 0, 0, 0, 269);
    m.Bh = new p("Bh", "Bohrium", 107, !1, "#E00038", 0, 0, 0, 0, 270);
    m.Hs = new p("Hs", "Hassium", 108, !1, "#E6002E", 0, 0, 0, 0, 277);
    m.Mt = new p("Mt", "Meitnerium", 109, !1, "#EB0026", 0, 0, 0, 0, 278);
    m.Ds = new p("Ds", "Darmstadtium", 110, !1, "#000000", 0, 0, 0, 0, 281);
    m.Rg = new p("Rg", "Roentgenium", 111, !1, "#000000", 0, 0, 0, 0, 282);
    m.Cn = new p("Cn", "Copernicium", 112, !1, "#000000", 0, 0, 0, 0, 285);
    m.Nh = new p("Nh", "Nihonium", 113, !1, "#000000", 0, 0, 0, 0, 286);
    m.Fl = new p("Fl", "Flerovium", 114, !1, "#000000", 0, 0, 0, 0, 289);
    m.Mc = new p("Mc", "Moscovium", 115, !1, "#000000", 0, 0, 0, 0, 290);
    m.Lv = new p("Lv", "Livermorium", 116, !1, "#000000", 0, 0, 0, 0, 293);
    m.Ts = new p("Ts", "Tennessine", 117, !1, "#000000", 0, 0, 0, 0, 294);
    m.Og = new p("Og", "Oganesson", 118, !1, "#000000", 0, 0, 0, 0, 294);
    m.H.pymolColor = "#E6E6E6";
    m.C.pymolColor = "#33FF33";
    m.N.pymolColor = "#3333FF";
    m.O.pymolColor = "#FF4D4D";
    m.F.pymolColor = "#B3FFFF";
    m.S.pymolColor = "#E6C640";
    return m
}(ChemDoodle.SYMBOLS);
ChemDoodle.RESIDUE = function(c) {
    function n(c, m, g, k, d, f) {
        this.symbol = c;
        this.name = m;
        this.polar = g;
        this.aminoColor = k;
        this.shapelyColor = d;
        this.acidity = f
    }
    c = [];
    c.Ala = new n("Ala", "Alanine", !1, "#C8C8C8", "#8CFF8C", 0);
    c.Arg = new n("Arg", "Arginine", !0, "#145AFF", "#00007C", 1);
    c.Asn = new n("Asn", "Asparagine", !0, "#00DCDC", "#FF7C70", 0);
    c.Asp = new n("Asp", "Aspartic Acid", !0, "#E60A0A", "#A00042", -1);
    c.Cys = new n("Cys", "Cysteine", !0, "#E6E600", "#FFFF70", 0);
    c.Gln = new n("Gln", "Glutamine", !0, "#00DCDC", "#FF4C4C", 0);
    c.Glu = new n("Glu", "Glutamic Acid", !0, "#E60A0A", "#660000", -1);
    c.Gly = new n("Gly", "Glycine", !1, "#EBEBEB", "#FFFFFF", 0);
    c.His = new n("His", "Histidine", !0, "#8282D2", "#7070FF", 1);
    c.Ile = new n("Ile", "Isoleucine", !1, "#0F820F", "#004C00", 0);
    c.Leu = new n("Leu", "Leucine", !1, "#0F820F", "#455E45", 0);
    c.Lys = new n("Lys", "Lysine", !0, "#145AFF", "#4747B8", 1);
    c.Met = new n("Met", "Methionine", !1, "#E6E600", "#B8A042", 0);
    c.Phe = new n("Phe", "Phenylalanine", !1, "#3232AA", "#534C52", 0);
    c.Pro = new n("Pro", "Proline", !1, "#DC9682", "#525252", 0);
    c.Ser = new n("Ser", "Serine", !0, "#FA9600", "#FF7042", 0);
    c.Thr = new n("Thr", "Threonine", !0, "#FA9600", "#B84C00", 0);
    c.Trp = new n("Trp", "Tryptophan", !0, "#B45AB4", "#4F4600", 0);
    c.Tyr = new n("Tyr", "Tyrosine", !0, "#3232AA", "#8C704C", 0);
    c.Val = new n("Val", "Valine", !1, "#0F820F", "#FF8CFF", 0);
    c.Asx = new n("Asx", "Asparagine/Aspartic Acid", !0, "#FF69B4", "#FF00FF", 0);
    c.Glx = new n("Glx", "Glutamine/Glutamic Acid", !0, "#FF69B4", "#FF00FF", 0);
    c["*"] = new n("*", "Other", !1, "#BEA06E", "#FF00FF", 0);
    c.A = new n("A", "Adenine", !1, "#BEA06E", "#A0A0FF", 0);
    c.G = new n("G", "Guanine", !1, "#BEA06E", "#FF7070", 0);
    c.I = new n("I", "", !1, "#BEA06E", "#80FFFF", 0);
    c.C = new n("C", "Cytosine", !1, "#BEA06E", "#FF8C4B", 0);
    c.T = new n("T", "Thymine", !1, "#BEA06E", "#A0FFA0", 0);
    c.U = new n("U", "Uracil", !1, "#BEA06E", "#FF8080", 0);
    return c
}();
(function(c, n) {
    c.Queue = function() {
        this.queue = []
    };
    var p = c.Queue.prototype;
    p.queueSpace = 0;
    p.getSize = function() {
        return this.queue.length - this.queueSpace
    };
    p.isEmpty = function() {
        return 0 === this.queue.length
    };
    p.enqueue = function(c) {
        this.queue.push(c)
    };
    p.dequeue = function() {
        if (this.queue.length) {
            var c = this.queue[this.queueSpace];
            2 * ++this.queueSpace >= this.queue.length && (this.queue = this.queue.slice(this.queueSpace), this.queueSpace = 0)
        }
        return c
    };
    p.getOldestElement = function() {
        var c;
        this.queue.length && (c = this.queue[this.queueSpace]);
        return c
    }
})(ChemDoodle.structures);
(function(c, n, p) {
    c.Point = function(c, g) {
        this.x = c ? c : 0;
        this.y = g ? g : 0
    };
    c = c.Point.prototype;
    c.sub = function(c) {
        this.x -= c.x;
        this.y -= c.y
    };
    c.add = function(c) {
        this.x += c.x;
        this.y += c.y
    };
    c.distance = function(c) {
        var g = c.x - this.x;
        c = c.y - this.y;
        return n.sqrt(g * g + c * c)
    };
    c.angleForStupidCanvasArcs = function(c) {
        var g = c.x - this.x;
        c = c.y - this.y;
        for (g = 0 === g ? 0 === c ? 0 : 0 < c ? n.PI / 2 : 3 * n.PI / 2 : 0 === c ? 0 < g ? 0 : n.PI : 0 > g ? n.atan(c / g) + n.PI : 0 > c ? n.atan(c / g) + 2 * n.PI : n.atan(c / g); 0 > g;) g += 2 * n.PI;
        return g %= 2 * n.PI
    };
    c.angle = function(c) {
        var g = c.x - this.x;
        c = this.y - c.y;
        for (g = 0 === g ? 0 === c ? 0 : 0 < c ? n.PI / 2 : 3 * n.PI / 2 : 0 === c ? 0 < g ? 0 : n.PI : 0 > g ? n.atan(c / g) + n.PI : 0 > c ? n.atan(c / g) + 2 * n.PI : n.atan(c / g); 0 > g;) g += 2 * n.PI;
        return g %= 2 * n.PI
    }
})(ChemDoodle.structures, Math);
(function(c, n, p, m) {
    var g = /[ ,]+/,
        k = /\-+/,
        d = ["Helvetica", "Arial", "Dialog"];
    n.Query = function(d) {
        this.type = d;
        this.elements = {
            v: [],
            not: !1
        };
        this.saturation = this.hydrogens = this.connectivityNoH = this.connectivity = this.chirality = this.charge = m;
        this.orders = {
            v: [],
            not: !1
        };
        this.cache = this.ringCount = this.aromatic = this.stereo = m
    };
    n.Query.TYPE_ATOM = 0;
    n.Query.TYPE_BOND = 1;
    p = n.Query.prototype;
    p.parseRange = function(d) {
        var b = [];
        d = d.split(g);
        for (var a = 0, h = d.length; a < h; a++) {
            var f = d[a],
                c = !1,
                q = !1;
            "-" === f.charAt(0) && (c = !0, f =
                f.substring(1)); - 1 != f.indexOf("--") && (q = !0); - 1 != f.indexOf("-") ? (f = f.split(k), c = {
                x: parseInt(f[0]) * (c ? -1 : 1),
                y: parseInt(f[1]) * (q ? -1 : 1)
            }, c.y < c.x && (q = c.y, c.y = c.x, c.x = q), b.push(c)) : b.push({
                x: parseInt(f) * (c ? -1 : 1)
            })
        }
        return b
    };
    p.draw = function(f, b, a) {
        this.cache || (this.cache = this.toString());
        var h = this.cache,
            g = m,
            w = h.indexOf("("); - 1 != w && (h = this.cache.substring(0, w), g = this.cache.substring(w, this.cache.length));
        f.textAlign = "center";
        f.textBaseline = "middle";
        f.font = c.getFontString(12, d, !0, !1);
        w = f.measureText(h).width;
        f.fillStyle = b.backgroundColor;
        f.fillRect(a.x - w / 2, a.y - 6, w, 12);
        f.fillStyle = "black";
        f.fillText(h, a.x, a.y);
        g && (f.font = c.getFontString(10, d, !1, !0), w = f.measureText(g).width, f.fillStyle = b.backgroundColor, f.fillRect(a.x - w / 2, a.y + 6, w, 11), f.fillStyle = "black", f.fillText(g, a.x, a.y + 11))
    };
    p.outputRange = function(d) {
        for (var b = !1, a = [], h = 0, f = d.length; h < f; h++) {
            b && a.push(",");
            var b = !0,
                c = d[h];
            c.y ? (a.push(c.x), a.push("-"), a.push(c.y)) : a.push(c.x)
        }
        return a.join("")
    };
    p.toString = function() {
        var d = [],
            b = [];
        this.type === n.Query.TYPE_ATOM ?
            (this.elements && 0 !== this.elements.v.length ? (this.elements.not && d.push("!"), d.push("["), d.push(this.elements.v.join(",")), d.push("]")) : d.push("[a]"), this.chirality && b.push((this.chirality.not ? "!" : "") + "@\x3d" + this.chirality.v), this.aromatic && b.push((this.aromatic.not ? "!" : "") + "A"), this.charge && b.push((this.charge.not ? "!" : "") + "C\x3d" + this.outputRange(this.charge.v)), this.hydrogens && b.push((this.hydrogens.not ? "!" : "") + "H\x3d" + this.outputRange(this.hydrogens.v)), this.ringCount && b.push((this.ringCount.not ?
                "!" : "") + "R\x3d" + this.outputRange(this.ringCount.v)), this.saturation && b.push((this.saturation.not ? "!" : "") + "S"), this.connectivity && b.push((this.connectivity.not ? "!" : "") + "X\x3d" + this.outputRange(this.connectivity.v)), this.connectivityNoH && b.push((this.connectivityNoH.not ? "!" : "") + "x\x3d" + this.outputRange(this.connectivityNoH.v))) : this.type === n.Query.TYPE_BOND && (this.orders && 0 !== this.orders.v.length ? (this.orders.not && d.push("!"), d.push("["), d.push(this.orders.v.join(",")), d.push("]")) : d.push("[a]"), this.stereo &&
                b.push((this.stereo.not ? "!" : "") + "@\x3d" + this.stereo.v), this.aromatic && b.push((this.aromatic.not ? "!" : "") + "A"), this.ringCount && b.push((this.ringCount.not ? "!" : "") + "R\x3d" + this.outputRange(this.ringCount.v)));
        0 < b.length && (d.push("("), d.push(b.join(",")), d.push(")"));
        return d.join("")
    }
})(ChemDoodle.extensions, ChemDoodle.structures, Math);
(function(c, n, p, m, g, k, d) {
    m.Atom = function(b, a, d, f) {
        this.label = b ? b.replace(/\s/g, "") : "C";
        this.x = a ? a : 0;
        this.y = d ? d : 0;
        this.z = f ? f : 0
    };
    var f = m.Atom.prototype = new m.Point(0, 0);
    f.charge = 0;
    f.numLonePair = 0;
    f.numRadical = 0;
    f.mass = -1;
    f.implicitH = -1;
    f.coordinationNumber = 0;
    f.bondNumber = 0;
    f.angleOfLeastInterference = 0;
    f.isHidden = !1;
    f.altLabel = d;
    f.isLone = !1;
    f.isHover = !1;
    f.isSelected = !1;
    f.add3D = function(b) {
        this.x += b.x;
        this.y += b.y;
        this.z += b.z
    };
    f.sub3D = function(b) {
        this.x -= b.x;
        this.y -= b.y;
        this.z -= b.z
    };
    f.distance3D = function(b) {
        var a =
            b.x - this.x,
            d = b.y - this.y;
        b = b.z - this.z;
        return g.sqrt(a * a + d * d + b * b)
    };
    f.draw = function(b, a) {
        if (!this.dontDraw) {
            if (this.isLassoed) {
                var h = b.createRadialGradient(this.x - 1, this.y - 1, 0, this.x, this.y, 7);
                h.addColorStop(0, "rgba(212, 99, 0, 0)");
                h.addColorStop(.7, "rgba(212, 99, 0, 0.8)");
                b.fillStyle = h;
                b.beginPath();
                b.arc(this.x, this.y, 5, 0, 2 * g.PI, !1);
                b.fill()
            }
            if (!this.query) {
                this.textBounds = [];
                this.specs && (a = this.specs);
                h = n.getFontString(a.atoms_font_size_2D, a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                b.font = h;
                b.fillStyle = this.getElementColor(a.atoms_useJMOLColors, a.atoms_usePYMOLColors, a.atoms_color, 2);
                "H" === this.label && a.atoms_HBlack_2D && (b.fillStyle = "black");
                this.error && (b.fillStyle = a.colorError);
                var f = this.isLabelVisible(a);
                if (this.isLone && !f || a.atoms_circles_2D) this.isLone && (b.fillStyle = "#909090"), b.beginPath(), b.arc(this.x, this.y, a.atoms_circleDiameter_2D / 2, 0, 2 * g.PI, !1), b.fill(), 0 < a.atoms_circleBorderWidth_2D && (b.lineWidth = a.atoms_circleBorderWidth_2D, b.strokeStyle = "black", b.stroke());
                else if (f)
                    if (b.textAlign =
                        "center", b.textBaseline = "middle", this.altLabel !== d) {
                        b.fillText(this.altLabel, this.x, this.y);
                        var k = b.measureText(this.altLabel).width;
                        this.textBounds.push({
                            x: this.x - k / 2,
                            y: this.y - a.atoms_font_size_2D / 2 + 1,
                            w: k,
                            h: a.atoms_font_size_2D - 2
                        })
                    } else if (c[this.label]) {
                    b.fillText(this.label, this.x, this.y);
                    k = b.measureText(this.label).width;
                    this.textBounds.push({
                        x: this.x - k / 2,
                        y: this.y - a.atoms_font_size_2D / 2 + 1,
                        w: k,
                        h: a.atoms_font_size_2D - 2
                    });
                    var q = 0; - 1 !== this.mass && (f = b.font, b.font = n.getFontString(.7 * a.atoms_font_size_2D,
                        a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D), q = b.measureText(this.mass).width, b.fillText(this.mass, this.x - q - .5, this.y - a.atoms_font_size_2D / 2 + 1), this.textBounds.push({
                        x: this.x - k / 2 - q - .5,
                        y: this.y - 1.7 * a.atoms_font_size_2D / 2 + 1,
                        w: q,
                        h: a.atoms_font_size_2D / 2 - 1
                    }), b.font = f);
                    var f = k / 2,
                        v = this.getImplicitHydrogenCount();
                    if (a.atoms_implicitHydrogens_2D && 0 < v) {
                        var C = 0;
                        var u = b.measureText("H").width,
                            y = !0;
                        if (1 < v) {
                            var B = k / 2 + u / 2;
                            var e = 0;
                            var l = n.getFontString(.8 * a.atoms_font_size_2D, a.atoms_font_families_2D,
                                a.atoms_font_bold_2D, a.atoms_font_italic_2D);
                            b.font = l;
                            var x = b.measureText(v).width;
                            1 === this.bondNumber ? this.angleOfLeastInterference > g.PI / 2 && this.angleOfLeastInterference < 3 * g.PI / 2 && (B = -k / 2 - x - u / 2 - q / 2, y = !1, C = g.PI) : this.angleOfLeastInterference <= g.PI / 4 || (this.angleOfLeastInterference < 3 * g.PI / 4 ? (B = 0, e = .9 * -a.atoms_font_size_2D, 0 !== this.charge && (e -= .3 * a.atoms_font_size_2D), y = !1, C = g.PI / 2) : this.angleOfLeastInterference <= 5 * g.PI / 4 ? (B = -k / 2 - x - u / 2 - q / 2, y = !1, C = g.PI) : this.angleOfLeastInterference < 7 * g.PI / 4 && (B = 0, e =
                                .9 * a.atoms_font_size_2D, y = !1, C = 3 * g.PI / 2));
                            b.font = h;
                            b.fillText("H", this.x + B, this.y + e);
                            b.font = l;
                            b.fillText(v, this.x + B + u / 2 + x / 2, this.y + e + .3 * a.atoms_font_size_2D);
                            this.textBounds.push({
                                x: this.x + B - u / 2,
                                y: this.y + e - a.atoms_font_size_2D / 2 + 1,
                                w: u,
                                h: a.atoms_font_size_2D - 2
                            });
                            this.textBounds.push({
                                x: this.x + B + u / 2,
                                y: this.y + e + .3 * a.atoms_font_size_2D - a.atoms_font_size_2D / 2 + 1,
                                w: x,
                                h: .8 * a.atoms_font_size_2D - 2
                            })
                        } else B = k / 2 + u / 2, e = 0, 1 === this.bondNumber ? this.angleOfLeastInterference > g.PI / 2 && this.angleOfLeastInterference < 3 *
                            g.PI / 2 && (B = -k / 2 - u / 2 - q / 2, y = !1, C = g.PI) : this.angleOfLeastInterference <= g.PI / 4 || (this.angleOfLeastInterference < 3 * g.PI / 4 ? (B = 0, e = .9 * -a.atoms_font_size_2D, y = !1, C = g.PI / 2) : this.angleOfLeastInterference <= 5 * g.PI / 4 ? (B = -k / 2 - u / 2 - q / 2, y = !1, C = g.PI) : this.angleOfLeastInterference < 7 * g.PI / 4 && (B = 0, e = .9 * a.atoms_font_size_2D, y = !1, C = 3 * g.PI / 2)), b.fillText("H", this.x + B, this.y + e), this.textBounds.push({
                                x: this.x + B - u / 2,
                                y: this.y + e - a.atoms_font_size_2D / 2 + 1,
                                w: u,
                                h: a.atoms_font_size_2D - 2
                            });
                        y && (f += u)
                    }
                    0 !== this.charge && (h = this.charge.toFixed(0),
                        h = "1" === h ? "+" : "-1" === h ? "\u2013" : n.stringStartsWith(h, "-") ? h.substring(1) + "\u2013" : h + "+", k = b.measureText(h).width, f += k / 2, b.textAlign = "center", b.textBaseline = "middle", b.font = n.getFontString(g.floor(.8 * a.atoms_font_size_2D), a.atoms_font_families_2D, a.atoms_font_bold_2D, a.atoms_font_italic_2D), b.fillText(h, this.x + f - 1, this.y - a.atoms_font_size_2D / 2 + 1), this.textBounds.push({
                            x: this.x + f - k / 2 - 1,
                            y: this.y - 1.8 * a.atoms_font_size_2D / 2 + 5,
                            w: k,
                            h: a.atoms_font_size_2D / 2 - 1
                        }))
                } else m.CondensedLabel ? (this.condensed && this.condensed.text ===
                    this.label || (this.condensed = new m.CondensedLabel(this, this.label)), this.condensed.draw(b, a)) : (b.fillText(this.label, this.x, this.y), k = b.measureText(this.label).width, this.textBounds.push({
                    x: this.x - k / 2,
                    y: this.y - a.atoms_font_size_2D / 2 + 1,
                    w: k,
                    h: a.atoms_font_size_2D - 2
                }));
                if (0 < this.numLonePair || 0 < this.numRadical) {
                    b.fillStyle = "black";
                    e = this.angles.slice(0);
                    h = this.angleOfLeastInterference;
                    f = this.largestAngle;
                    C !== d && (e.push(C), e.sort(function(a, e) {
                            return a - e
                        }), f = p.angleBetweenLargest(e), h = f.angle % (2 * g.PI),
                        f = f.largest);
                    k = [];
                    for (q = 0; q < this.numLonePair; q++) k.push({
                        t: 2
                    });
                    for (q = 0; q < this.numRadical; q++) k.push({
                        t: 1
                    });
                    if (C === d && g.abs(f - 2 * g.PI / e.length) < g.PI / 60)
                        for (e = g.ceil(k.length / e.length), q = 0, B = k.length; q < B; q += e, h += f) this.drawElectrons(b, a, k.slice(q, g.min(k.length, q + e)), h, f, C);
                    else this.drawElectrons(b, a, k, h, f, C)
                }
            }
        }
    };
    f.drawElectrons = function(b, a, h, f, c, q) {
        q = c / (h.length + (0 === this.bonds.length && q === d ? 0 : 1));
        c = f - c / 2 + q;
        for (var r = 0; r < h.length; r++) {
            var k = h[r];
            f = c + r * q;
            var w = this.x + Math.cos(f) * a.atoms_lonePairDistance_2D,
                m = this.y - Math.sin(f) * a.atoms_lonePairDistance_2D;
            2 === k.t ? (k = f + Math.PI / 2, f = Math.cos(k) * a.atoms_lonePairSpread_2D / 2, k = -Math.sin(k) * a.atoms_lonePairSpread_2D / 2, b.beginPath(), b.arc(w + f, m + k, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), b.fill(), b.beginPath(), b.arc(w - f, m - k, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), b.fill()) : 1 === k.t && (b.beginPath(), b.arc(w, m, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1), b.fill())
        }
    };
    f.drawDecorations = function(b, a) {
        if (this.isHover || this.isSelected) b.strokeStyle = this.isHover ? a.colorHover :
            a.colorSelect, b.lineWidth = 1.2, b.beginPath(), b.arc(this.x, this.y, this.isHover ? 7 : 15, 0, 2 * g.PI, !1), b.stroke();
        this.isOverlap && (b.strokeStyle = a.colorError, b.lineWidth = 1.2, b.beginPath(), b.arc(this.x, this.y, 7, 0, 2 * g.PI, !1), b.stroke())
    };
    f.render = function(b, a, d) {
        this.specs && (a = this.specs);
        var h = k.translate(k.identity(), [this.x, this.y, this.z]),
            f = a.atoms_useVDWDiameters_3D ? c[this.label].vdWRadius * a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D / 2;
        0 === f && (f = 1);
        k.scale(h, [f, f, f]);
        d || (d = a.atoms_color, a.atoms_useJMOLColors ?
            d = c[this.label].jmolColor : a.atoms_usePYMOLColors && (d = c[this.label].pymolColor), b.material.setDiffuseColor(b, d));
        b.shader.setMatrixUniforms(b, h);
        b.drawElements(b.TRIANGLES, (this.renderAsStar ? b.starBuffer : b.sphereBuffer).vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
    };
    f.renderHighlight = function(b, a) {
        if (this.isSelected || this.isHover) {
            this.specs && (a = this.specs);
            var d = k.translate(k.identity(), [this.x, this.y, this.z]),
                f = a.atoms_useVDWDiameters_3D ? c[this.label].vdWRadius * a.atoms_vdwMultiplier_3D : a.atoms_sphereDiameter_3D /
                2;
            0 === f && (f = 1);
            f *= 1.3;
            k.scale(d, [f, f, f]);
            b.shader.setMatrixUniforms(b, d);
            b.material.setDiffuseColor(b, this.isHover ? a.colorHover : a.colorSelect);
            b.drawElements(b.TRIANGLES, (this.renderAsStar ? b.starBuffer : b.sphereBuffer).vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
        }
    };
    f.isLabelVisible = function(b) {
        return b.atoms_displayAllCarbonLabels_2D || "C" !== this.label || this.altLabel || !c[this.label] || -1 !== this.mass || -1 !== this.implicitH || 0 !== this.charge || b.atoms_showAttributedCarbons_2D && (0 !== this.numRadical || 0 !==
            this.numLonePair) || this.isHidden && b.atoms_showHiddenCarbons_2D || b.atoms_displayTerminalCarbonLabels_2D && 1 === this.bondNumber ? !0 : !1
    };
    f.getImplicitHydrogenCount = function() {
        if (!c[this.label] || !c[this.label].addH) return 0;
        if (-1 !== this.implicitH) return this.implicitH;
        if ("H" === this.label) return 0;
        var b = c[this.label].valency,
            a = b - this.coordinationNumber;
        0 < this.numRadical && (a = g.max(0, a - this.numRadical));
        0 < this.charge ? (b = 4 - b, a = this.charge <= b ? a + this.charge : 4 - this.coordinationNumber - this.charge + b) : a += this.charge;
        return 0 > a ? 0 : g.floor(a)
    };
    f.getBounds = function() {
        var b = new p.Bounds;
        b.expand(this.x, this.y);
        if (this.textBounds)
            for (var a = 0, d = this.textBounds.length; a < d; a++) {
                var f = this.textBounds[a];
                b.expand(f.x, f.y, f.x + f.w, f.y + f.h)
            }
        return b
    };
    f.getBounds3D = function() {
        var b = new p.Bounds;
        b.expand3D(this.x, this.y, this.z);
        return b
    };
    f.getElementColor = function(b, a, d) {
        if (!c[this.label]) return "#000";
        b ? d = c[this.label].jmolColor : a && (d = c[this.label].pymolColor);
        return d
    }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.math,
    ChemDoodle.structures, Math, ChemDoodle.lib.mat4);
(function(c, n, p, m, g, k, d, f) {
    p.Bond = function(b, a, d) {
        this.a1 = b;
        this.a2 = a;
        this.bondOrder = d !== f ? d : 1
    };
    p.Bond.STEREO_NONE = "none";
    p.Bond.STEREO_PROTRUDING = "protruding";
    p.Bond.STEREO_RECESSED = "recessed";
    p.Bond.STEREO_AMBIGUOUS = "ambiguous";
    c = p.Bond.prototype;
    c.stereo = p.Bond.STEREO_NONE;
    c.isHover = !1;
    c.ring = f;
    c.getCenter = function() {
        return new p.Point((this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2)
    };
    c.getLength = function() {
        return this.a1.distance(this.a2)
    };
    c.getLength3D = function() {
        return this.a1.distance3D(this.a2)
    };
    c.contains = function(b) {
        return b === this.a1 || b === this.a2
    };
    c.getNeighbor = function(b) {
        return b === this.a1 ? this.a2 : b === this.a2 ? this.a1 : f
    };
    c.draw = function(b, a) {
        if (this.a1.x !== this.a2.x || this.a1.y !== this.a2.y) {
            this.specs && (a = this.specs);
            var d = this.a1.x;
            var f = this.a2.x;
            var c = this.a1.y;
            var k = this.a2.y;
            var v = this.a1.distance(this.a2);
            var C = f - d,
                u = k - c;
            if (this.a1.isLassoed && this.a2.isLassoed) {
                var y = b.createLinearGradient(d, c, f, k);
                y.addColorStop(0, "rgba(212, 99, 0, 0)");
                y.addColorStop(.5, "rgba(212, 99, 0, 0.8)");
                y.addColorStop(1, "rgba(212, 99, 0, 0)");
                var n = 2.5;
                var e = this.a1.angle(this.a2) + g.PI / 2;
                var l = g.cos(e);
                e = g.sin(e);
                var x = d - l * n;
                var A = c + e * n;
                var z = d + l * n;
                var D = c - e * n;
                var E = f + l * n;
                var G = k - e * n;
                l = f - l * n;
                e = k + e * n;
                b.fillStyle = y;
                b.beginPath();
                b.moveTo(x, A);
                b.lineTo(z, D);
                b.lineTo(E, G);
                b.lineTo(l, e);
                b.closePath();
                b.fill()
            }
            if (a.atoms_display && !a.atoms_circles_2D && this.a1.isLabelVisible(a) && this.a1.textBounds) {
                n = e = 0;
                for (A = this.a1.textBounds.length; n < A; n++) e = Math.max(e, m.calculateDistanceInterior(this.a1, this.a2, this.a1.textBounds[n]));
                e += a.bonds_atomLabelBuffer_2D;
                e /= v;
                d += C * e;
                c += u * e
            }
            if (a.atoms_display && !a.atoms_circles_2D && this.a2.isLabelVisible(a) && this.a2.textBounds) {
                n = e = 0;
                for (A = this.a2.textBounds.length; n < A; n++) e = Math.max(e, m.calculateDistanceInterior(this.a2, this.a1, this.a2.textBounds[n]));
                e += a.bonds_atomLabelBuffer_2D;
                e /= v;
                f -= C * e;
                k -= u * e
            }
            a.bonds_clearOverlaps_2D && (e = d + .15 * C, l = c + .15 * u, n = f - .15 * C, v = k - .15 * u, b.strokeStyle = a.backgroundColor, b.lineWidth = a.bonds_width_2D + 2 * a.bonds_overlapClearWidth_2D, b.lineCap = "round", b.beginPath(),
                b.moveTo(e, l), b.lineTo(n, v), b.closePath(), b.stroke());
            b.strokeStyle = this.error ? a.colorError : a.bonds_color;
            b.fillStyle = this.error ? a.colorError : a.bonds_color;
            b.lineWidth = a.bonds_width_2D;
            b.lineCap = a.bonds_ends_2D;
            a.bonds_splitColor && (e = b.createLinearGradient(d, c, f, k), n = this.a1.specs ? this.a1.specs : a, l = this.a2.specs ? this.a2.specs : a, n = this.a1.getElementColor(n.atoms_useJMOLColors, n.atoms_usePYMOLColors, n.atoms_color, 2), l = this.a2.getElementColor(l.atoms_useJMOLColors, l.atoms_usePYMOLColors, l.atoms_color,
                2), e.addColorStop(0, n), a.bonds_colorGradient || (e.addColorStop(.5, n), e.addColorStop(.51, l)), e.addColorStop(1, l), b.strokeStyle = e, b.fillStyle = e);
            if (a.bonds_lewisStyle_2D && 0 === this.bondOrder % 1) this.drawLewisStyle(b, a, d, c, f, k);
            else switch (this.query ? 1 : this.bondOrder) {
                case 0:
                    f -= d;
                    k -= c;
                    f = g.sqrt(f * f + k * k);
                    k = g.floor(f / a.bonds_dotSize_2D);
                    f = (f - (k - 1) * a.bonds_dotSize_2D) / 2;
                    1 === k % 2 ? f += a.bonds_dotSize_2D / 4 : (f -= a.bonds_dotSize_2D / 4, k += 2);
                    k /= 2;
                    u = this.a1.angle(this.a2);
                    e = d + f * Math.cos(u);
                    l = c - f * Math.sin(u);
                    b.beginPath();
                    for (n = 0; n < k; n++) b.arc(e, l, a.bonds_dotSize_2D / 2, 0, 2 * g.PI, !1), e += 2 * a.bonds_dotSize_2D * Math.cos(u), l -= 2 * a.bonds_dotSize_2D * Math.sin(u);
                    b.fill();
                    break;
                case .5:
                    b.beginPath();
                    b.moveTo(d, c);
                    b.lineTo(f, k);
                    b.setLineDash([a.bonds_hashSpacing_2D, a.bonds_hashSpacing_2D]);
                    b.stroke();
                    b.setLineDash([]);
                    break;
                case 1:
                    if (this.query || this.stereo !== p.Bond.STEREO_PROTRUDING && this.stereo !== p.Bond.STEREO_RECESSED)
                        if (this.query || this.stereo !== p.Bond.STEREO_AMBIGUOUS) b.beginPath(), b.moveTo(d, c), b.lineTo(f, k), b.stroke(), this.query &&
                            this.query.draw(b, a, this.getCenter());
                        else {
                            b.beginPath();
                            b.moveTo(d, c);
                            f = g.floor(g.sqrt(C * C + u * u) / a.bonds_wavyLength_2D);
                            e = this.a1.angle(this.a2) + g.PI / 2;
                            l = g.cos(e);
                            e = g.sin(e);
                            k = C / f;
                            u /= f;
                            n = 0;
                            for (A = f; n < A; n++) d += k, c += u, f = a.bonds_wavyLength_2D * l + d - .5 * k, v = a.bonds_wavyLength_2D * -e + c - .5 * u, C = a.bonds_wavyLength_2D * -l + d - .5 * k, x = a.bonds_wavyLength_2D * e + c - .5 * u, 0 === n % 2 ? b.quadraticCurveTo(f, v, d, c) : b.quadraticCurveTo(C, x, d, c);
                            b.stroke()
                        } else u = a.bonds_width_2D / 2, n = a.bonds_wedgeThickness_2D / 2, e = this.a1.angle(this.a2) +
                        g.PI / 2, l = g.cos(e), e = g.sin(e), x = d - l * u, A = c + e * u, z = d + l * u, D = c - e * u, E = f + l * n, G = k - e * n, l = f - l * n, e = k + e * n, b.beginPath(), b.moveTo(x, A), b.lineTo(z, D), b.lineTo(E, G), b.lineTo(l, e), b.closePath(), this.stereo === p.Bond.STEREO_PROTRUDING ? b.fill() : (b.save(), b.clip(), b.lineWidth = 2 * n, b.lineCap = "butt", b.beginPath(), b.moveTo(d, c), b.lineTo(f + 5 * (f - d), k + 5 * (k - c)), b.setLineDash([a.bonds_hashWidth_2D, a.bonds_hashSpacing_2D]), b.stroke(), b.setLineDash([]), b.restore());
                    break;
                case 1.5:
                case 2:
                    u = this.a1.angle(this.a2);
                    e = u + g.PI / 2;
                    l = g.cos(e);
                    e = g.sin(e);
                    v = this.a1.distance(this.a2);
                    n = a.bonds_useAbsoluteSaturationWidths_2D ? a.bonds_saturationWidthAbs_2D / 2 : v * a.bonds_saturationWidth_2D / 2;
                    this.stereo === p.Bond.STEREO_AMBIGUOUS ? (x = d - l * n, A = c + e * n, z = d + l * n, D = c - e * n, E = f + l * n, G = k - e * n, l = f - l * n, e = k + e * n, b.beginPath(), b.moveTo(x, A), b.lineTo(E, G), b.moveTo(z, D), b.lineTo(l, e), b.stroke()) : !a.bonds_symmetrical_2D && (this.ring || "C" === this.a1.label && "C" === this.a2.label) ? (b.beginPath(), b.moveTo(d, c), b.lineTo(f, k), b.stroke(), C = 0, n *= 2, A = a.bonds_saturationAngle_2D, A <
                        g.PI / 2 && (C = -(n / g.tan(A))), g.abs(C) < v / 2 && (v = d - g.cos(u) * C, d = f + g.cos(u) * C, f = c + g.sin(u) * C, c = k - g.sin(u) * C, x = v - l * n, A = f + e * n, z = v + l * n, D = f - e * n, E = d - l * n, G = c + e * n, l = d + l * n, e = c - e * n, c = !this.ring || this.ring.center.angle(this.a1) > this.ring.center.angle(this.a2) && !(this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) > g.PI) || this.ring.center.angle(this.a1) - this.ring.center.angle(this.a2) < -g.PI, b.beginPath(), c ? (b.moveTo(x, A), b.lineTo(E, G)) : (b.moveTo(z, D), b.lineTo(l, e)), 2 !== this.bondOrder && b.setLineDash([a.bonds_hashSpacing_2D,
                            a.bonds_hashSpacing_2D
                        ]), b.stroke(), b.setLineDash([]))) : (x = d - l * n, A = c + e * n, z = d + l * n, D = c - e * n, E = f + l * n, G = k - e * n, l = f - l * n, e = k + e * n, b.beginPath(), b.moveTo(x, A), b.lineTo(l, e), b.stroke(), b.beginPath(), b.moveTo(z, D), b.lineTo(E, G), 2 !== this.bondOrder && b.setLineDash([a.bonds_hashWidth_2D, a.bonds_hashSpacing_2D]), b.stroke(), b.setLineDash([]));
                    break;
                case 3:
                    n = a.bonds_useAbsoluteSaturationWidths_2D ? a.bonds_saturationWidthAbs_2D : this.a1.distance(this.a2) * a.bonds_saturationWidth_2D, e = this.a1.angle(this.a2) + g.PI / 2, l = g.cos(e),
                        e = g.sin(e), x = d - l * n, A = c + e * n, z = d + l * n, D = c - e * n, E = f + l * n, G = k - e * n, l = f - l * n, e = k + e * n, b.beginPath(), b.moveTo(x, A), b.lineTo(l, e), b.moveTo(z, D), b.lineTo(E, G), b.moveTo(d, c), b.lineTo(f, k), b.stroke()
            }
        }
    };
    c.drawDecorations = function(b, a) {
        if (this.isHover || this.isSelected) {
            var d = 2 * g.PI,
                f = (this.a1.angleForStupidCanvasArcs(this.a2) + g.PI / 2) % d;
            b.strokeStyle = this.isHover ? a.colorHover : a.colorSelect;
            b.lineWidth = 1.2;
            b.beginPath();
            var c = (f + g.PI) % d,
                c = c % (2 * g.PI);
            b.arc(this.a1.x, this.a1.y, 7, f, c, !1);
            b.stroke();
            b.beginPath();
            f += g.PI;
            c = (f + g.PI) % d;
            b.arc(this.a2.x, this.a2.y, 7, f, c, !1);
            b.stroke()
        }
    };
    c.drawLewisStyle = function(b, a, d, f, c, k) {
        var h = this.a1.angle(this.a2),
            r = h + g.PI / 2;
        c -= d;
        k -= f;
        c = g.sqrt(c * c + k * k) / (this.bondOrder + 1);
        k = c * g.cos(h);
        h = -c * g.sin(h);
        d += k;
        f += h;
        for (c = 0; c < this.bondOrder; c++) {
            var q = a.atoms_lonePairSpread_2D / 2,
                m = d - g.cos(r) * q,
                w = f + g.sin(r) * q,
                e = d + g.cos(r) * q,
                q = f - g.sin(r) * q;
            b.beginPath();
            b.arc(m - a.atoms_lonePairDiameter_2D / 2, w - a.atoms_lonePairDiameter_2D / 2, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1);
            b.fill();
            b.beginPath();
            b.arc(e -
                a.atoms_lonePairDiameter_2D / 2, q - a.atoms_lonePairDiameter_2D / 2, a.atoms_lonePairDiameter_2D, 0, 2 * g.PI, !1);
            b.fill();
            d += k;
            f += h
        }
    };
    c.render = function(b, a, f) {
        this.specs && (a = this.specs);
        var h = this.a1.distance3D(this.a2);
        if (0 !== h) {
            var c = a.bonds_cylinderDiameter_3D / 2,
                q = a.bonds_color,
                m = k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
                C, u = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                y = [0, 1, 0],
                p = 0;
            this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (y = [0, 0, 1], this.a2.y < this.a1.y && (p = g.PI)) : (p =
                n.vec3AngleFrom(y, u), y = d.cross(y, u, []));
            if (a.bonds_splitColor) {
                q = this.a1.specs ? this.a1.specs : a;
                var e = this.a2.specs ? this.a2.specs : a;
                q = this.a1.getElementColor(q.atoms_useJMOLColors, q.atoms_usePYMOLColors, q.atoms_color);
                e = this.a2.getElementColor(e.atoms_useJMOLColors, e.atoms_usePYMOLColors, e.atoms_color);
                q != e && (C = k.translate(k.identity(), [this.a2.x, this.a2.y, this.a2.z]))
            }
            var l = [0];
            if (f) {
                if (a.bonds_showBondOrders_3D && 1 < this.bondOrder) {
                    l = [a.bonds_cylinderDiameter_3D];
                    f = [0, 0, 1];
                    var x = k.inverse(b.rotationMatrix, []);
                    k.multiplyVec3(x, f);
                    x = d.cross(u, f, []);
                    d.normalize(x)
                }
                var c = 1,
                    A = a.bonds_pillSpacing_3D,
                    u = a.bonds_pillHeight_3D;
                0 == this.bondOrder && (a.bonds_renderAsLines_3D ? u = A : (u = a.bonds_pillDiameter_3D, u < a.bonds_cylinderDiameter_3D && (u /= 2), c = u / 2, h /= c, A /= c / 2));
                f = u + A;
                var z = g.floor(h / f),
                    D = (A + a.bonds_pillDiameter_3D + (h - f * z)) / 2,
                    E = z;
                C && (E = g.floor(z / 2));
                for (var A = 0, G = l.length; A < G; A++) {
                    h = k.set(m, []);
                    0 !== l[A] && k.translate(h, d.scale(x, l[A], []));
                    0 !== p && k.rotate(h, p, y);
                    1 != c && k.scale(h, [c, c, c]);
                    q && b.material.setDiffuseColor(b,
                        q);
                    k.translate(h, [0, D, 0]);
                    for (var F = 0; F < E; F++) a.bonds_renderAsLines_3D ? 0 == this.bondOrder ? (b.shader.setMatrixUniforms(b, h), b.drawArrays(b.POINTS, 0, 1)) : (k.scale(h, [1, u, 1]), b.shader.setMatrixUniforms(b, h), b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems), k.scale(h, [1, 1 / u, 1])) : (b.shader.setMatrixUniforms(b, h), 0 == this.bondOrder ? b.drawElements(b.TRIANGLES, b.sphereBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0) : b.drawElements(b.TRIANGLES, b.pillBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT,
                        0)), k.translate(h, [0, f, 0]);
                    if (C) {
                        if (a.bonds_renderAsLines_3D) {
                            var H = u;
                            H /= 2;
                            var K = 0
                        } else H = 2 / 3, K = (1 - H) / 2;
                        0 != z % 2 && (k.scale(h, [1, H, 1]), b.shader.setMatrixUniforms(b, h), a.bonds_renderAsLines_3D ? 0 == this.bondOrder ? b.drawArrays(b.POINTS, 0, 1) : b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems) : 0 == this.bondOrder ? b.drawElements(b.TRIANGLES, b.sphereBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0) : b.drawElements(b.TRIANGLES, b.pillBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0), k.translate(h, [0, f * (1 + K), 0]), k.scale(h, [1, 1 / H, 1]));
                        k.set(C, h);
                        0 !== l[A] && k.translate(h, d.scale(x, l[A], []));
                        k.rotate(h, p + g.PI, y);
                        1 != c && k.scale(h, [c, c, c]);
                        e && b.material.setDiffuseColor(b, e);
                        k.translate(h, [0, D, 0]);
                        for (F = 0; F < E; F++) a.bonds_renderAsLines_3D ? 0 == this.bondOrder ? (b.shader.setMatrixUniforms(b, h), b.drawArrays(b.POINTS, 0, 1)) : (k.scale(h, [1, u, 1]), b.shader.setMatrixUniforms(b, h), b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems), k.scale(h, [1, 1 / u, 1])) : (b.shader.setMatrixUniforms(b, h), 0 == this.bondOrder ?
                            b.drawElements(b.TRIANGLES, b.sphereBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0) : b.drawElements(b.TRIANGLES, b.pillBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)), k.translate(h, [0, f, 0]);
                        0 != z % 2 && (k.scale(h, [1, H, 1]), b.shader.setMatrixUniforms(b, h), a.bonds_renderAsLines_3D ? 0 == this.bondOrder ? b.drawArrays(b.POINTS, 0, 1) : b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems) : 0 == this.bondOrder ? b.drawElements(b.TRIANGLES, b.sphereBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT,
                            0) : b.drawElements(b.TRIANGLES, b.pillBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0), k.translate(h, [0, f * (1 + K), 0]), k.scale(h, [1, 1 / H, 1]))
                    }
                }
            } else {
                if (a.bonds_showBondOrders_3D) {
                    switch (this.bondOrder) {
                        case 1.5:
                            l = [-a.bonds_cylinderDiameter_3D];
                            break;
                        case 2:
                            l = [-a.bonds_cylinderDiameter_3D, a.bonds_cylinderDiameter_3D];
                            break;
                        case 3:
                            l = [-1.2 * a.bonds_cylinderDiameter_3D, 0, 1.2 * a.bonds_cylinderDiameter_3D]
                    }
                    1 < this.bondOrder && (f = [0, 0, 1], x = k.inverse(b.rotationMatrix, []), k.multiplyVec3(x, f), x = d.cross(u, f, []),
                        d.normalize(x))
                } else switch (this.bondOrder) {
                    case 0:
                        c *= .25;
                        break;
                    case .5:
                    case 1.5:
                        c *= .5
                }
                C && (h /= 2);
                c = [c, h, c];
                A = 0;
                for (G = l.length; A < G; A++) h = k.set(m, []), 0 !== l[A] && k.translate(h, d.scale(x, l[A], [])), 0 !== p && k.rotate(h, p, y), k.scale(h, c), q && b.material.setDiffuseColor(b, q), b.shader.setMatrixUniforms(b, h), a.bonds_renderAsLines_3D ? b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems) : b.drawArrays(b.TRIANGLE_STRIP, 0, b.cylinderBuffer.vertexPositionBuffer.numItems), C && (k.set(C, h), 0 !== l[A] && k.translate(h,
                    d.scale(x, l[A], [])), k.rotate(h, p + g.PI, y), k.scale(h, c), e && b.material.setDiffuseColor(b, e), b.shader.setMatrixUniforms(b, h), a.bonds_renderAsLines_3D ? b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems) : b.drawArrays(b.TRIANGLE_STRIP, 0, b.cylinderBuffer.vertexPositionBuffer.numItems))
            }
        }
    };
    c.renderHighlight = function(b, a) {
        if (this.isSelected || this.isHover) {
            this.specs && (a = this.specs);
            this.specs && (a = this.specs);
            var f = this.a1.distance3D(this.a2);
            if (0 !== f) {
                var c = a.bonds_cylinderDiameter_3D / 1.2,
                    m =
                    k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
                    q = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                    v = [0, 1, 0],
                    C = 0;
                this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (q = [0, 0, 1], this.a2.y < this.a1.y && (C = g.PI)) : (C = n.vec3AngleFrom(v, q), q = d.cross(v, q, []));
                f = [c, f, c];
                0 !== C && k.rotate(m, C, q);
                k.scale(m, f);
                b.shader.setMatrixUniforms(b, m);
                b.material.setDiffuseColor(b, this.isHover ? a.colorHover : a.colorSelect);
                b.drawArrays(b.TRIANGLE_STRIP, 0, b.cylinderBuffer.vertexPositionBuffer.numItems)
            }
        }
    };
    c.renderPicker =
        function(b, a) {
            this.specs && (a = this.specs);
            var f = this.a1.distance3D(this.a2);
            if (0 !== f) {
                var c = a.bonds_cylinderDiameter_3D / 2,
                    m = k.translate(k.identity(), [this.a1.x, this.a1.y, this.a1.z]),
                    q = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
                    v = [0, 1, 0],
                    C = 0;
                this.a1.x === this.a2.x && this.a1.z === this.a2.z ? (v = [0, 0, 1], this.a2.y < this.a1.y && (C = g.PI)) : (C = n.vec3AngleFrom(v, q), v = d.cross(v, q, []));
                var u = [0];
                if (a.bonds_showBondOrders_3D)
                    if (a.bonds_renderAsLines_3D) {
                        switch (this.bondOrder) {
                            case 1.5:
                            case 2:
                                u = [-a.bonds_cylinderDiameter_3D,
                                    a.bonds_cylinderDiameter_3D
                                ];
                                break;
                            case 3:
                                u = [-1.2 * a.bonds_cylinderDiameter_3D, 0, 1.2 * a.bonds_cylinderDiameter_3D]
                        }
                        if (1 < this.bondOrder) {
                            var y = [0, 0, 1];
                            var p = k.inverse(b.rotationMatrix, []);
                            k.multiplyVec3(p, y);
                            y = d.cross(q, y, []);
                            d.normalize(y)
                        }
                    } else switch (this.bondOrder) {
                        case 1.5:
                        case 2:
                            c *= 3;
                            break;
                        case 3:
                            c *= 3.4
                    } else switch (this.bondOrder) {
                        case 0:
                            c *= .25;
                            break;
                        case .5:
                        case 1.5:
                            c *= .5
                    }
                f = [c, f, c];
                c = 0;
                for (q = u.length; c < q; c++) p = k.set(m, []), 0 !== u[c] && k.translate(p, d.scale(y, u[c], [])), 0 !== C && k.rotate(p, C, v), k.scale(p,
                    f), b.shader.setMatrixUniforms(b, p), a.bonds_renderAsLines_3D ? b.drawArrays(b.LINES, 0, b.lineBuffer.vertexPositionBuffer.numItems) : b.drawArrays(b.TRIANGLE_STRIP, 0, b.cylinderBuffer.vertexPositionBuffer.numItems)
            }
        }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(c, n, p) {
    c.Ring = function() {
        this.atoms = [];
        this.bonds = []
    };
    var m = c.Ring.prototype;
    m.center = p;
    m.setupBonds = function() {
        for (var c = 0, k = this.bonds.length; c < k; c++) this.bonds[c].ring = this;
        this.center = this.getCenter()
    };
    m.getCenter = function() {
        for (var g = Infinity, k = Infinity, d = -Infinity, f = -Infinity, b = 0, a = this.atoms.length; b < a; b++) g = n.min(this.atoms[b].x, g), k = n.min(this.atoms[b].y, k), d = n.max(this.atoms[b].x, d), f = n.max(this.atoms[b].y, f);
        return new c.Point((d + g) / 2, (f + k) / 2)
    }
})(ChemDoodle.structures, Math);
(function(c, n, p, m, g, k) {
    p.Molecule = function() {
        this.atoms = [];
        this.bonds = [];
        this.rings = []
    };
    var d = p.Molecule.prototype;
    d.findRings = !0;
    d.draw = function(d, b) {
        this.specs && (b = this.specs);
        if (b.atoms_display && !b.atoms_circles_2D)
            for (var a = 0, f = this.atoms.length; a < f; a++) this.atoms[a].draw(d, b);
        if (b.bonds_display)
            for (a = 0, f = this.bonds.length; a < f; a++) this.bonds[a].draw(d, b);
        if (b.atoms_display)
            for (a = 0, f = this.atoms.length; a < f; a++) {
                var c = this.atoms[a];
                b.atoms_circles_2D && c.draw(d, b);
                c.query && c.query.draw(d, b, c)
            }
    };
    d.render =
        function(d, b) {
            this.specs && (b = this.specs);
            var a = 0 < this.atoms.length && this.atoms[0].hetatm !== k;
            if (a) {
                if (b.macro_displayBonds) {
                    0 < this.bonds.length && (b.bonds_renderAsLines_3D && !this.residueSpecs || this.residueSpecs && this.residueSpecs.bonds_renderAsLines_3D ? (d.lineWidth(this.residueSpecs ? this.residueSpecs.bonds_width_2D : b.bonds_width_2D), d.lineBuffer.bindBuffers(d)) : d.cylinderBuffer.bindBuffers(d), d.material.setTempColors(d, b.bonds_materialAmbientColor_3D, k, b.bonds_materialSpecularColor_3D, b.bonds_materialShininess_3D));
                    for (var f = 0, c = this.bonds.length; f < c; f++) {
                        var g = this.bonds[f];
                        !g.a1.hetatm && (-1 === b.macro_atomToLigandDistance || g.a1.closestDistance !== k && b.macro_atomToLigandDistance >= g.a1.closestDistance && b.macro_atomToLigandDistance >= g.a2.closestDistance) && g.render(d, this.residueSpecs ? this.residueSpecs : b)
                    }
                }
                if (b.macro_displayAtoms)
                    for (0 < this.atoms.length && (d.sphereBuffer.bindBuffers(d), d.material.setTempColors(d, b.atoms_materialAmbientColor_3D, k, b.atoms_materialSpecularColor_3D, b.atoms_materialShininess_3D)), f = 0,
                        c = this.atoms.length; f < c; f++) g = this.atoms[f], !g.hetatm && (-1 === b.macro_atomToLigandDistance || g.closestDistance !== k && b.macro_atomToLigandDistance >= g.closestDistance) && g.render(d, this.residueSpecs ? this.residueSpecs : b)
            }
            if (b.bonds_display) {
                var q = [],
                    v = [];
                0 < this.bonds.length && (b.bonds_renderAsLines_3D ? (d.lineWidth(b.bonds_width_2D), d.lineBuffer.bindBuffers(d)) : d.cylinderBuffer.bindBuffers(d), d.material.setTempColors(d, b.bonds_materialAmbientColor_3D, k, b.bonds_materialSpecularColor_3D, b.bonds_materialShininess_3D));
                f = 0;
                for (c = this.bonds.length; f < c; f++)
                    if (g = this.bonds[f], !a || g.a1.hetatm) b.bonds_showBondOrders_3D ? 0 == g.bondOrder ? v.push(g) : .5 == g.bondOrder ? q.push(g) : (1.5 == g.bondOrder && q.push(g), g.render(d, b)) : g.render(d, b);
                if (0 < q.length)
                    for (b.bonds_renderAsLines_3D || d.pillBuffer.bindBuffers(d), f = 0, c = q.length; f < c; f++) q[f].render(d, b, !0);
                if (0 < v.length)
                    for (b.bonds_renderAsLines_3D || d.sphereBuffer.bindBuffers(d), f = 0, c = v.length; f < c; f++) v[f].render(d, b, !0)
            }
            if (b.atoms_display) {
                f = 0;
                for (c = this.atoms.length; f < c; f++) g = this.atoms[f],
                    g.bondNumber = 0, g.renderAsStar = !1;
                f = 0;
                for (c = this.bonds.length; f < c; f++) g = this.bonds[f], g.a1.bondNumber++, g.a2.bondNumber++;
                0 < this.atoms.length && (d.sphereBuffer.bindBuffers(d), d.material.setTempColors(d, b.atoms_materialAmbientColor_3D, k, b.atoms_materialSpecularColor_3D, b.atoms_materialShininess_3D));
                q = [];
                f = 0;
                for (c = this.atoms.length; f < c; f++)
                    if (g = this.atoms[f], !a || g.hetatm && (b.macro_showWater || !g.isWater)) b.atoms_nonBondedAsStars_3D && 0 === g.bondNumber ? (g.renderAsStar = !0, q.push(g)) : g.render(d, b);
                if (0 < q.length)
                    for (d.starBuffer.bindBuffers(d),
                        f = 0, c = q.length; f < c; f++) q[f].render(d, b)
            }
            if (this.chains) {
                d.shader.setMatrixUniforms(d);
                if (b.proteins_displayRibbon)
                    for (d.material.setTempColors(d, b.proteins_materialAmbientColor_3D, k, b.proteins_materialSpecularColor_3D, b.proteins_materialShininess_3D), v = b.proteins_ribbonCartoonize ? this.cartoons : this.ribbons, a = 0, q = v.length; a < q; a++)
                        if (g = v[a], "none" !== b.proteins_residueColor) {
                            g.front.bindBuffers(d);
                            for (var C = "rainbow" === b.proteins_residueColor, f = 0, c = g.front.segments.length; f < c; f++) C && d.material.setDiffuseColor(d,
                                n.rainbowAt(f, c, b.macro_rainbowColors)), g.front.segments[f].render(d, b);
                            g.back.bindBuffers(d);
                            f = 0;
                            for (c = g.back.segments.length; f < c; f++) C && d.material.setDiffuseColor(d, n.rainbowAt(f, c, b.macro_rainbowColors)), g.back.segments[f].render(d, b)
                        } else g.front.render(d, b), g.back.render(d, b);
                if (b.proteins_displayPipePlank)
                    for (a = 0, q = this.pipePlanks.length; a < q; a++) this.pipePlanks[a].render(d, b);
                if (b.proteins_displayBackbone) {
                    if (!this.alphaCarbonTrace)
                        for (this.alphaCarbonTrace = {
                                nodes: [],
                                edges: []
                            }, a = 0, q = this.chains.length; a <
                            q; a++)
                            if (v = this.chains[a], !(2 < v.length && m[v[2].name] && "#BEA06E" === m[v[2].name].aminoColor) && 0 < v.length)
                                for (f = 0, c = v.length - 2; f < c; f++) g = v[f].cp1, g.chainColor = v.chainColor, this.alphaCarbonTrace.nodes.push(g), g = new p.Bond(v[f].cp1, v[f + 1].cp1), g.residueName = v[f].name, g.chainColor = v.chainColor, this.alphaCarbonTrace.edges.push(g), f === v.length - 3 && (g = v[f + 1].cp1, g.chainColor = v.chainColor, this.alphaCarbonTrace.nodes.push(g));
                    if (0 < this.alphaCarbonTrace.nodes.length) {
                        a = new p.VisualSpecifications;
                        a.atoms_display = !0;
                        a.bonds_display = !0;
                        a.atoms_sphereDiameter_3D = b.proteins_backboneThickness;
                        a.bonds_cylinderDiameter_3D = b.proteins_backboneThickness;
                        a.bonds_splitColor = !1;
                        a.atoms_color = b.proteins_backboneColor;
                        a.bonds_color = b.proteins_backboneColor;
                        a.atoms_useVDWDiameters_3D = !1;
                        d.material.setTempColors(d, b.proteins_materialAmbientColor_3D, k, b.proteins_materialSpecularColor_3D, b.proteins_materialShininess_3D);
                        d.material.setDiffuseColor(d, b.proteins_backboneColor);
                        f = 0;
                        for (c = this.alphaCarbonTrace.nodes.length; f < c; f++) g =
                            this.alphaCarbonTrace.nodes[f], b.macro_colorByChain && (a.atoms_color = g.chainColor), d.sphereBuffer.bindBuffers(d), g.render(d, a);
                        f = 0;
                        for (c = this.alphaCarbonTrace.edges.length; f < c; f++) {
                            g = this.alphaCarbonTrace.edges[f];
                            var u, q = m[g.residueName] ? m[g.residueName] : m["*"];
                            b.macro_colorByChain ? u = g.chainColor : "shapely" === b.proteins_residueColor ? u = q.shapelyColor : "amino" === b.proteins_residueColor ? u = q.aminoColor : "polarity" === b.proteins_residueColor ? u = q.polar ? "#C10000" : "#FFFFFF" : "acidity" === b.proteins_residueColor ?
                                u = 1 === q.acidity ? "#0000FF" : -1 === q.acidity ? "#FF0000" : q.polar ? "#FFFFFF" : "#773300" : "rainbow" === b.proteins_residueColor && (u = n.rainbowAt(f, c, b.macro_rainbowColors));
                            u && (a.bonds_color = u);
                            d.cylinderBuffer.bindBuffers(d);
                            g.render(d, a)
                        }
                    }
                }
                if (b.nucleics_display)
                    for (d.material.setTempColors(d, b.nucleics_materialAmbientColor_3D, k, b.nucleics_materialSpecularColor_3D, b.nucleics_materialShininess_3D), a = 0, q = this.tubes.length; a < q; a++) d.shader.setMatrixUniforms(d), g = this.tubes[a], g.render(d, b)
            }
            if (b.atoms_display) {
                u = !1;
                f = 0;
                for (c = this.atoms.length; f < c; f++)
                    if (g = this.atoms[f], g.isHover || g.isSelected) {
                        u = !0;
                        break
                    }
                if (!u)
                    for (f = 0, c = this.bonds.length; f < c; f++)
                        if (g = this.bonds[f], g.isHover || g.isSelected) {
                            u = !0;
                            break
                        }
                if (u) {
                    d.sphereBuffer.bindBuffers(d);
                    d.blendFunc(d.SRC_ALPHA, d.ONE);
                    d.material.setTempColors(d, b.atoms_materialAmbientColor_3D, k, "#000000", 0);
                    d.enable(d.BLEND);
                    d.depthMask(!1);
                    d.material.setAlpha(d, .4);
                    d.sphereBuffer.bindBuffers(d);
                    f = 0;
                    for (c = this.atoms.length; f < c; f++) g = this.atoms[f], (g.isHover || g.isSelected) &&
                        g.renderHighlight(d, b);
                    d.cylinderBuffer.bindBuffers(d);
                    f = 0;
                    for (c = this.bonds.length; f < c; f++) g = this.bonds[f], (g.isHover || g.isSelected) && g.renderHighlight(d, b);
                    d.depthMask(!0);
                    d.disable(d.BLEND);
                    d.blendFuncSeparate(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA, d.ONE, d.ONE_MINUS_SRC_ALPHA)
                }
            }
        };
    d.renderPickFrame = function(d, b, a, c, g) {
        this.specs && (b = this.specs);
        var f = 0 < this.atoms.length && this.atoms[0].hetatm !== k;
        if (g && b.bonds_display) {
            0 < this.bonds.length && (b.bonds_renderAsLines_3D ? (d.lineWidth(b.bonds_width_2D), d.lineBuffer.bindBuffers(d)) :
                d.cylinderBuffer.bindBuffers(d));
            g = 0;
            for (var h = this.bonds.length; g < h; g++) {
                var r = this.bonds[g];
                if (!f || r.a1.hetatm) d.material.setDiffuseColor(d, n.idx2color(a.length)), r.renderPicker(d, b), a.push(r)
            }
        }
        if (c && b.atoms_display) {
            g = 0;
            for (h = this.atoms.length; g < h; g++) c = this.atoms[g], c.bondNumber = 0, c.renderAsStar = !1;
            g = 0;
            for (h = this.bonds.length; g < h; g++) r = this.bonds[g], r.a1.bondNumber++, r.a2.bondNumber++;
            0 < this.atoms.length && d.sphereBuffer.bindBuffers(d);
            r = [];
            g = 0;
            for (h = this.atoms.length; g < h; g++)
                if (c = this.atoms[g], !f || c.hetatm && (b.macro_showWater || !c.isWater)) b.atoms_nonBondedAsStars_3D && 0 === c.bondNumber ? (c.renderAsStar = !0, r.push(c)) : (d.material.setDiffuseColor(d, n.idx2color(a.length)), c.render(d, b, !0), a.push(c));
            if (0 < r.length)
                for (d.starBuffer.bindBuffers(d), g = 0, h = r.length; g < h; g++) c = r[g], d.material.setDiffuseColor(d, n.idx2color(a.length)), c.render(d, b, !0), a.push(c)
        }
    };
    d.getCenter3D = function() {
        if (1 === this.atoms.length) return new p.Atom("C", this.atoms[0].x, this.atoms[0].y, this.atoms[0].z);
        var d = Infinity,
            b = Infinity,
            a = Infinity,
            c = -Infinity,
            r = -Infinity,
            k = -Infinity;
        if (this.chains)
            for (var q = 0, m = this.chains.length; q < m; q++)
                for (var C = this.chains[q], u = 0, y = C.length; u < y; u++) var n = C[u],
                    d = g.min(n.cp1.x, n.cp2.x, d),
                    b = g.min(n.cp1.y, n.cp2.y, b),
                    a = g.min(n.cp1.z, n.cp2.z, a),
                    c = g.max(n.cp1.x, n.cp2.x, c),
                    r = g.max(n.cp1.y, n.cp2.y, r),
                    k = g.max(n.cp1.z, n.cp2.z, k);
        q = 0;
        for (m = this.atoms.length; q < m; q++) d = g.min(this.atoms[q].x, d), b = g.min(this.atoms[q].y, b), a = g.min(this.atoms[q].z, a), c = g.max(this.atoms[q].x, c), r = g.max(this.atoms[q].y, r), k = g.max(this.atoms[q].z,
            k);
        return new p.Atom("C", (c + d) / 2, (r + b) / 2, (k + a) / 2)
    };
    d.getCenter = function() {
        if (1 === this.atoms.length) return new p.Point(this.atoms[0].x, this.atoms[0].y);
        for (var d = Infinity, b = Infinity, a = -Infinity, c = -Infinity, r = 0, k = this.atoms.length; r < k; r++) d = g.min(this.atoms[r].x, d), b = g.min(this.atoms[r].y, b), a = g.max(this.atoms[r].x, a), c = g.max(this.atoms[r].y, c);
        return new p.Point((a + d) / 2, (c + b) / 2)
    };
    d.getDimension = function() {
        if (1 === this.atoms.length) return new p.Point(0, 0);
        var d = Infinity,
            b = Infinity,
            a = -Infinity,
            c = -Infinity;
        if (this.chains) {
            for (var r = 0, k = this.chains.length; r < k; r++)
                for (var q = this.chains[r], m = 0, n = q.length; m < n; m++) var u = q[m],
                    d = g.min(u.cp1.x, u.cp2.x, d),
                    b = g.min(u.cp1.y, u.cp2.y, b),
                    a = g.max(u.cp1.x, u.cp2.x, a),
                    c = g.max(u.cp1.y, u.cp2.y, c);
            d -= 30;
            b -= 30;
            a += 30;
            c += 30
        }
        r = 0;
        for (k = this.atoms.length; r < k; r++) d = g.min(this.atoms[r].x, d), b = g.min(this.atoms[r].y, b), a = g.max(this.atoms[r].x, a), c = g.max(this.atoms[r].y, c);
        return new p.Point(a - d, c - b)
    };
    d.check = function(d) {
        if (d && this.doChecks) {
            if (this.findRings)
                if (this.bonds.length -
                    this.atoms.length !== this.fjNumCache) {
                    this.rings = (new c.informatics.SSSRFinder(this)).rings;
                    for (var b = 0, a = this.bonds.length; b < a; b++) this.bonds[b].ring = k;
                    b = 0;
                    for (a = this.rings.length; b < a; b++) this.rings[b].setupBonds()
                } else
                    for (b = 0, a = this.rings.length; b < a; b++) {
                        var f = this.rings[b];
                        f.center = f.getCenter()
                    }
            b = 0;
            for (a = this.atoms.length; b < a; b++)
                if (this.atoms[b].isLone = !1, "C" === this.atoms[b].label) {
                    for (var g = f = 0, m = this.bonds.length; g < m; g++) this.bonds[g].a1 !== this.atoms[b] && this.bonds[g].a2 !== this.atoms[b] || f++;
                    0 === f && (this.atoms[b].isLone = !0)
                }
            f = !1;
            b = 0;
            for (a = this.atoms.length; b < a; b++) 0 !== this.atoms[b].z && (f = !0);
            f && (this.sortAtomsByZ(), this.sortBondsByZ());
            this.setupMetaData();
            this.atomNumCache = this.atoms.length;
            this.bondNumCache = this.bonds.length;
            this.fjNumCache = this.bonds.length - this.atoms.length
        }
        this.doChecks = !d
    };
    d.getAngles = function(d) {
        for (var b = [], a = 0, c = this.bonds.length; a < c; a++) this.bonds[a].contains(d) && b.push(d.angle(this.bonds[a].getNeighbor(d)));
        b.sort(function(a, b) {
            return a - b
        });
        return b
    };
    d.getCoordinationNumber =
        function(d) {
            for (var b = 0, a = 0, c = d.length; a < c; a++) b += d[a].bondOrder;
            return b
        };
    d.getBonds = function(d) {
        for (var b = [], a = 0, c = this.bonds.length; a < c; a++) this.bonds[a].contains(d) && b.push(this.bonds[a]);
        return b
    };
    d.sortAtomsByZ = function() {
        for (var d = 1, b = this.atoms.length; d < b; d++)
            for (var a = d; 0 < a && this.atoms[a].z < this.atoms[a - 1].z;) {
                var c = this.atoms[a];
                this.atoms[a] = this.atoms[a - 1];
                this.atoms[a - 1] = c;
                a--
            }
    };
    d.sortBondsByZ = function() {
        for (var d = 1, b = this.bonds.length; d < b; d++)
            for (var a = d; 0 < a && this.bonds[a].a1.z + this.bonds[a].a2.z <
                this.bonds[a - 1].a1.z + this.bonds[a - 1].a2.z;) {
                var c = this.bonds[a];
                this.bonds[a] = this.bonds[a - 1];
                this.bonds[a - 1] = c;
                a--
            }
    };
    d.setupMetaData = function() {
        for (var d = this.getCenter(), b = 0, a = this.atoms.length; b < a; b++) {
            var c = this.atoms[b];
            c.bonds = this.getBonds(c);
            c.angles = this.getAngles(c);
            c.isHidden = 2 === c.bonds.length && g.abs(g.abs(c.angles[1] - c.angles[0]) - g.PI) < g.PI / 30 && c.bonds[0].bondOrder === c.bonds[1].bondOrder;
            var k = n.angleBetweenLargest(c.angles);
            c.angleOfLeastInterference = k.angle % (2 * g.PI);
            c.largestAngle =
                k.largest;
            c.coordinationNumber = this.getCoordinationNumber(c.bonds);
            c.bondNumber = c.bonds.length;
            c.molCenter = d
        }
        b = 0;
        for (a = this.bonds.length; b < a; b++) this.bonds[b].molCenter = d
    };
    d.scaleToAverageBondLength = function(d) {
        var b = this.getAverageBondLength();
        if (0 !== b) {
            d /= b;
            for (var b = 0, a = this.atoms.length; b < a; b++) this.atoms[b].x *= d, this.atoms[b].y *= d
        }
    };
    d.getAverageBondLength = function() {
        if (0 === this.bonds.length) return 0;
        for (var d = 0, b = 0, a = this.bonds.length; b < a; b++) d += this.bonds[b].getLength();
        return d /= this.bonds.length
    };
    d.getBounds = function() {
        for (var d = new n.Bounds, b = 0, a = this.atoms.length; b < a; b++) d.expand(this.atoms[b].getBounds());
        if (this.chains) {
            b = 0;
            for (a = this.chains.length; b < a; b++)
                for (var c = this.chains[b], g = 0, k = c.length; g < k; g++) {
                    var q = c[g];
                    d.expand(q.cp1.x, q.cp1.y);
                    d.expand(q.cp2.x, q.cp2.y)
                }
            d.minX -= 30;
            d.minY -= 30;
            d.maxX += 30;
            d.maxY += 30
        }
        return d
    };
    d.getBounds3D = function() {
        for (var d = new n.Bounds, b = 0, a = this.atoms.length; b < a; b++) d.expand(this.atoms[b].getBounds3D());
        if (this.chains)
            for (b = 0, a = this.chains.length; b < a; b++)
                for (var c =
                        this.chains[b], g = 0, k = c.length; g < k; g++) {
                    var q = c[g];
                    d.expand3D(q.cp1.x, q.cp1.y, q.cp1.z);
                    d.expand3D(q.cp2.x, q.cp2.y, q.cp2.z)
                }
        return d
    };
    d.getAtomGroup = function(d) {
        for (var b, a = !1, c = 0, f = this.atoms.length; c < f; c++) this.atoms[c].visited = !1;
        c = 0;
        for (f = this.bonds.length; c < f; c++) b = this.bonds[c], !a && b.contains(d) && b.ring !== k && (a = !0);
        if (!a) return k;
        var g = [d];
        d.visited = !0;
        var q = new p.Queue;
        for (q.enqueue(d); !q.isEmpty();)
            for (d = q.dequeue(), c = 0, f = this.bonds.length; c < f; c++) b = this.bonds[c], b.contains(d) && a === (b.ring !==
                k) && (b = b.getNeighbor(d), b.visited || (b.visited = !0, g.push(b), q.enqueue(b)));
        return g
    };
    d.getBondGroup = function(d) {
        for (var b = d.ring !== k, a = !1, c = 0, f = this.bonds.length; c < f; c++) {
            var g = this.bonds[c];
            g === d && (a = !0);
            g.visited = !1
        }
        if (!a) return k;
        a = [d];
        d.visited = !0;
        g = new p.Queue;
        for (g.enqueue(d); !g.isEmpty();)
            for (d = g.dequeue(), c = 0, f = this.bonds.length; c < f; c++) {
                var q = this.bonds[c];
                q.visited || q.a1 !== d.a1 && q.a2 !== d.a1 && q.a1 !== d.a2 && q.a2 !== d.a2 || q.ring !== k !== b || (q.visited = !0, a.push(q), g.enqueue(q))
            }
        return a
    }
})(ChemDoodle,
    ChemDoodle.math, ChemDoodle.structures, ChemDoodle.RESIDUE, Math);
(function(c, n, p, m, g) {
    var k, d = -1;
    c.Residue = function(d) {
        this.resSeq = d
    };
    g = c.Residue.prototype;
    g.setup = function(d, b) {
        this.horizontalResolution = b;
        var a = [d.x - this.cp1.x, d.y - this.cp1.y, d.z - this.cp1.z],
            f = m.cross(a, [this.cp2.x - this.cp1.x, this.cp2.y - this.cp1.y, this.cp2.z - this.cp1.z], []);
        this.D = m.cross(f, a, []);
        m.normalize(f);
        m.normalize(this.D);
        this.guidePointsSmall = [];
        this.guidePointsLarge = [];
        a = [(d.x + this.cp1.x) / 2, (d.y + this.cp1.y) / 2, (d.z + this.cp1.z) / 2];
        this.helix && (m.scale(f, 1.5), m.add(a, f));
        this.guidePointsSmall[0] =
            new c.Atom("", a[0] - this.D[0] / 2, a[1] - this.D[1] / 2, a[2] - this.D[2] / 2);
        for (f = 1; f < b; f++) this.guidePointsSmall[f] = new c.Atom("", this.guidePointsSmall[0].x + this.D[0] * f / b, this.guidePointsSmall[0].y + this.D[1] * f / b, this.guidePointsSmall[0].z + this.D[2] * f / b);
        m.scale(this.D, 4);
        this.guidePointsLarge[0] = new c.Atom("", a[0] - this.D[0] / 2, a[1] - this.D[1] / 2, a[2] - this.D[2] / 2);
        for (f = 1; f < b; f++) this.guidePointsLarge[f] = new c.Atom("", this.guidePointsLarge[0].x + this.D[0] * f / b, this.guidePointsLarge[0].y + this.D[1] * f / b, this.guidePointsLarge[0].z +
            this.D[2] * f / b)
    };
    g.getGuidePointSet = function(d) {
        if (0 === d) return this.helix || this.sheet ? this.guidePointsLarge : this.guidePointsSmall;
        if (1 === d) return this.guidePointsSmall;
        if (2 === d) return this.guidePointsLarge
    };
    g.computeLineSegments = function(d, b, a, c, g) {
        this.setVerticalResolution(g);
        this.split = a.helix !== this.helix || a.sheet !== this.sheet;
        this.lineSegments = this.innerCompute(0, d, b, a, !1, g);
        c && (this.lineSegmentsCartoon = this.innerCompute(this.helix || this.sheet ? 2 : 1, d, b, a, !0, g))
    };
    g.innerCompute = function(d, b, a,
        h, g, w) {
        var f = [],
            r = this.getGuidePointSet(d);
        b = b.getGuidePointSet(d);
        a = a.getGuidePointSet(d);
        for (var C = h.getGuidePointSet(d), u = 0, y = r.length; u < y; u++) {
            for (var B = p.multiply([b[u].x, b[u].y, b[u].z, 1, a[u].x, a[u].y, a[u].z, 1, r[u].x, r[u].y, r[u].z, 1, C[u].x, C[u].y, C[u].z, 1], k, []), e = [], l = 0; l < w; l++) {
                for (d = 3; 0 < d; d--)
                    for (h = 0; 4 > h; h++) B[4 * d + h] += B[4 * (d - 1) + h];
                e[l] = new c.Atom("", B[12] / B[15], B[13] / B[15], B[14] / B[15])
            }
            f[u] = e
        }
        if (g && this.arrow)
            for (d = 0; d < w; d++)
                for (g = 1.5 - 1.3 * d / w, r = n.floor(this.horizontalResolution / 2), b = f[r],
                    h = 0, a = f.length; h < a; h++) h !== r && (C = b[d], u = f[h][d], y = [u.x - C.x, u.y - C.y, u.z - C.z], m.scale(y, g), u.x = C.x + y[0], u.y = C.y + y[1], u.z = C.z + y[2]);
        return f
    };
    g.setVerticalResolution = function(c) {
        if (c !== d) {
            var b = c * c,
                a = c * c * c;
            k = p.multiply([-1 / 6, .5, -.5, 1 / 6, .5, -1, .5, 0, -.5, 0, .5, 0, 1 / 6, 2 / 3, 1 / 6, 0], [6 / a, 0, 0, 0, 6 / a, 2 / b, 0, 0, 1 / a, 1 / b, 1 / c, 0, 0, 0, 0, 1], []);
            d = c
        }
    }
})(ChemDoodle.structures, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(c, n, p, m, g, k) {
    n.Spectrum = function() {
        this.data = [];
        this.metadata = [];
        this.dataDisplay = [];
        this.memory = {
            offsetTop: 0,
            offsetLeft: 0,
            offsetBottom: 0,
            flipXAxis: !1,
            scale: 1,
            width: 0,
            height: 0
        }
    };
    m = n.Spectrum.prototype;
    m.title = k;
    m.xUnit = k;
    m.yUnit = k;
    m.continuous = !0;
    m.integrationSensitivity = .01;
    m.draw = function(d, f, b, a) {
        this.specs && (f = this.specs);
        var h = 5,
            k = 0,
            m = 0;
        d.fillStyle = f.text_color;
        d.textAlign = "center";
        d.textBaseline = "alphabetic";
        d.font = c.getFontString(f.text_font_size, f.text_font_families);
        this.xUnit &&
            (m += f.text_font_size, d.fillText(this.xUnit, b / 2, a - 2));
        this.yUnit && f.plots_showYAxis && (k += f.text_font_size, d.save(), d.translate(f.text_font_size, a / 2), d.rotate(-g.PI / 2), d.fillText(this.yUnit, 0, 0), d.restore());
        this.title && (h += f.text_font_size, d.fillText(this.title, b / 2, f.text_font_size));
        d.lineCap = "square";
        m += 5 + f.text_font_size;
        f.plots_showYAxis && (k += 5 + d.measureText("1000").width);
        f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth = f.plots_gridLineWidth, d.strokeRect(k, h, b - k, a - m - h));
        d.textAlign =
            "center";
        d.textBaseline = "top";
        var q = this.maxX - this.minX;
        var v = q / 100;
        for (var n = .001; n < v || 25 < q / n;) n *= 10;
        for (var u = 0, y = f.plots_flipXAxis ? b : 0, q = g.round(this.minX / n) * n; q <= this.maxX; q += n / 2) {
            var p = this.getTransformedX(q, f, b, k);
            if (p > k)
                if (d.strokeStyle = "black", d.lineWidth = 1, 0 === u % 2) {
                    d.beginPath();
                    d.moveTo(p, a - m);
                    d.lineTo(p, a - m + 2);
                    d.stroke();
                    for (v = q.toFixed(5);
                        "0" === v.charAt(v.length - 1);) v = v.substring(0, v.length - 1);
                    "." === v.charAt(v.length - 1) && (v = v.substring(0, v.length - 1));
                    var e = d.measureText(v).width;
                    f.plots_flipXAxis &&
                        (e *= -1);
                    var l = p - e / 2;
                    if (f.plots_flipXAxis ? l < y : l > y) d.fillText(v, p, a - m + 2), y = p + e / 2;
                    f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth = f.plots_gridLineWidth, d.beginPath(), d.moveTo(p, a - m), d.lineTo(p, h), d.stroke())
                } else d.beginPath(), d.moveTo(p, a - m), d.lineTo(p, a - m + 2), d.stroke();
            u++
        }
        if (f.plots_showYAxis || f.plots_showGrid)
            for (n = 1 / f.scale, d.textAlign = "right", d.textBaseline = "middle", q = 0; 10 >= q; q++)
                if (v = n / 10 * q, u = h + (a - m - h) * (1 - v * f.scale), f.plots_showGrid && (d.strokeStyle = f.plots_gridColor, d.lineWidth =
                        f.plots_gridLineWidth, d.beginPath(), d.moveTo(k, u), d.lineTo(b, u), d.stroke()), f.plots_showYAxis) {
                    d.strokeStyle = "black";
                    d.lineWidth = 1;
                    d.beginPath();
                    d.moveTo(k, u);
                    d.lineTo(k - 3, u);
                    d.stroke();
                    v *= 100;
                    y = g.max(0, 3 - g.floor(v).toString().length);
                    v = v.toFixed(y);
                    if (0 < y)
                        for (;
                            "0" === v.charAt(v.length - 1);) v = v.substring(0, v.length - 1);
                    "." === v.charAt(v.length - 1) && (v = v.substring(0, v.length - 1));
                    d.fillText(v, k - 3, u)
                }
        d.strokeStyle = "black";
        d.lineWidth = 1;
        d.beginPath();
        d.moveTo(b, a - m);
        d.lineTo(k, a - m);
        f.plots_showYAxis && d.lineTo(k,
            h);
        d.stroke();
        if (0 < this.dataDisplay.length)
            for (d.textAlign = "left", d.textBaseline = "top", q = v = 0, n = this.dataDisplay.length; q < n; q++)
                if (this.dataDisplay[q].value) d.fillText([this.dataDisplay[q].display, ": ", this.dataDisplay[q].value].join(""), k + 10, h + 10 + v * (f.text_font_size + 5)), v++;
                else if (this.dataDisplay[q].tag)
            for (u = 0, y = this.metadata.length; u < y; u++)
                if (c.stringStartsWith(this.metadata[u], this.dataDisplay[q].tag)) {
                    y = this.metadata[u];
                    this.dataDisplay[q].display && (y = this.metadata[u].indexOf("\x3d"), y = [this.dataDisplay[q].display,
                        ": ", -1 < y ? this.metadata[u].substring(y + 2) : this.metadata[u]
                    ].join(""));
                    d.fillText(y, k + 10, h + 10 + v * (f.text_font_size + 5));
                    v++;
                    break
                }
        this.drawPlot(d, f, b, a, h, k, m);
        this.memory.offsetTop = h;
        this.memory.offsetLeft = k;
        this.memory.offsetBottom = m;
        this.memory.flipXAxis = f.plots_flipXAxis;
        this.memory.scale = f.scale;
        this.memory.width = b;
        this.memory.height = a
    };
    m.drawPlot = function(d, c, b, a, h, r, m) {
        this.specs && (c = this.specs);
        d.strokeStyle = c.plots_color;
        d.lineWidth = c.plots_width;
        var f = [];
        d.save();
        d.rect(r, h, b - r, a - m - h);
        d.clip();
        d.beginPath();
        if (this.continuous)
            for (var w = !1, p = 0, u = !1, y = 0, B = this.data.length; y < B; y++) {
                var e = this.getTransformedX(this.data[y].x, c, b, r);
                var l;
                y < B && !w && this.data[y + 1] && (l = this.getTransformedX(this.data[y + 1].x, c, b, r));
                if (e >= r && e < b || l !== k && l >= r && l < b) {
                    var x = this.getTransformedY(this.data[y].y, c, a, m, h);
                    c.plots_showIntegration && g.abs(this.data[y].y) > this.integrationSensitivity && f.push(new n.Point(this.data[y].x, this.data[y].y));
                    w || (d.moveTo(e, x), w = !0);
                    d.lineTo(e, x);
                    p++;
                    0 === p % 1E3 && (d.stroke(), d.beginPath(),
                        d.moveTo(e, x));
                    if (u) break
                } else w && (u = !0)
            } else
                for (y = 0, B = this.data.length; y < B; y++) e = this.getTransformedX(this.data[y].x, c, b, r), e >= r && e < b && (d.moveTo(e, a - m), d.lineTo(e, this.getTransformedY(this.data[y].y, c, a, m, h)));
        d.stroke();
        if (c.plots_showIntegration && 1 < f.length) {
            d.strokeStyle = c.plots_integrationColor;
            d.lineWidth = c.plots_integrationLineWidth;
            d.beginPath();
            x = f[1].x > f[0].x;
            if (this.flipXAxis && !x || !this.flipXAxis && x) {
                for (y = f.length - 2; 0 <= y; y--) f[y].y += f[y + 1].y;
                w = f[0].y
            } else {
                y = 1;
                for (B = f.length; y < B; y++) f[y].y +=
                    f[y - 1].y;
                w = f[f.length - 1].y
            }
            y = 0;
            for (B = f.length; y < B; y++) e = this.getTransformedX(f[y].x, c, b, r), x = this.getTransformedY(f[y].y / c.scale / w, c, a, m, h), 0 === y ? d.moveTo(e, x) : d.lineTo(e, x);
            d.stroke()
        }
        d.restore()
    };
    m.getTransformedY = function(d, c, b, a, h) {
        return h + (b - a - h) * (1 - d * c.scale)
    };
    m.getInverseTransformedY = function(d) {
        return (1 - (d - this.memory.offsetTop) / (this.memory.height - this.memory.offsetBottom - this.memory.offsetTop)) / this.memory.scale * 100
    };
    m.getTransformedX = function(d, c, b, a) {
        d = a + (d - this.minX) / (this.maxX - this.minX) *
            (b - a);
        c.plots_flipXAxis && (d = b + a - d);
        return d
    };
    m.getInverseTransformedX = function(d) {
        this.memory.flipXAxis && (d = this.memory.width + this.memory.offsetLeft - d);
        return (d - this.memory.offsetLeft) * (this.maxX - this.minX) / (this.memory.width - this.memory.offsetLeft) + this.minX
    };
    m.setup = function() {
        for (var d = Number.MAX_VALUE, c = Number.MIN_VALUE, b = Number.MIN_VALUE, a = 0, h = this.data.length; a < h; a++) d = g.min(d, this.data[a].x), c = g.max(c, this.data[a].x), b = g.max(b, this.data[a].y);
        this.continuous ? (this.minX = d, this.maxX = c) : (this.minX =
            d - 1, this.maxX = c + 1);
        a = 0;
        for (h = this.data.length; a < h; a++) this.data[a].y /= b
    };
    m.zoom = function(d, c, b, a) {
        d = this.getInverseTransformedX(d);
        c = this.getInverseTransformedX(c);
        this.minX = g.min(d, c);
        this.maxX = g.max(d, c);
        if (a) {
            a = Number.MIN_VALUE;
            c = 0;
            for (d = this.data.length; c < d; c++) p.isBetween(this.data[c].x, this.minX, this.maxX) && (a = g.max(a, this.data[c].y));
            return 1 / a
        }
    };
    m.translate = function(d, c) {
        var b = d / (c - this.memory.offsetLeft) * (this.maxX - this.minX) * (this.memory.flipXAxis ? 1 : -1);
        this.minX += b;
        this.maxX += b
    };
    m.alertMetadata =
        function() {
            alert(this.metadata.join("\n"))
        };
    m.getInternalCoordinates = function(d, c) {
        return new ChemDoodle.structures.Point(this.getInverseTransformedX(d), this.getInverseTransformedY(c))
    };
    m.getClosestPlotInternalCoordinates = function(d) {
        var c = this.getInverseTransformedX(d - 1);
        d = this.getInverseTransformedX(d + 1);
        if (c > d) {
            var b = c;
            c = d;
            d = b
        }
        for (var a = -1, h = -Infinity, g = !1, m = 0, q = this.data.length; m < q; m++)
            if (b = this.data[m], p.isBetween(b.x, c, d)) b.y > h && (g = !0, h = b.y, a = m);
            else if (g) break;
        if (-1 === a) return k;
        b = this.data[a];
        return new ChemDoodle.structures.Point(b.x, 100 * b.y)
    };
    m.getClosestPeakInternalCoordinates = function(d) {
        var c = this.getInverseTransformedX(d);
        d = 0;
        for (var b = Infinity, a = 0, h = this.data.length; a < h; a++) {
            var k = g.abs(this.data[a].x - c);
            if (k <= b) b = k, d = a;
            else break
        }
        for (var b = c = d, k = this.data[d].y, m = this.data[d].y, a = d + 1, h = this.data.length; a < h; a++)
            if (this.data[a].y + .05 > m) m = this.data[a].y, b = a;
            else break;
        for (a = d - 1; 0 <= a; a--)
            if (this.data[a].y + .05 > k) k = this.data[a].y, c = a;
            else break;
        d = this.data[c - d > b - d ? b : c];
        return new ChemDoodle.structures.Point(d.x,
            100 * d.y)
    }
})(ChemDoodle.extensions, ChemDoodle.structures, ChemDoodle.math, ChemDoodle.lib.jQuery, Math);
(function(c, n, p, m) {
    n._Shape = function() {};
    n = n._Shape.prototype;
    n.drawDecorations = function(c, k) {
        if (this.isHover)
            for (var d = this.getPoints(), f = 0, b = d.length; f < b; f++) {
                var a = d[f];
                this.drawAnchor(c, k, a, a === this.hoverPoint)
            }
    };
    n.getBounds = function() {
        for (var g = new c.Bounds, k = this.getPoints(), d = 0, f = k.length; d < f; d++) {
            var b = k[d];
            g.expand(b.x, b.y)
        }
        return g
    };
    n.drawAnchor = function(c, k, d, f) {
        c.save();
        c.translate(d.x, d.y);
        c.rotate(p.PI / 4);
        c.scale(1 / k.scale, 1 / k.scale);
        c.beginPath();
        c.moveTo(-4, -4);
        c.lineTo(4, -4);
        c.lineTo(4,
            4);
        c.lineTo(-4, 4);
        c.closePath();
        c.fillStyle = f ? k.colorHover : "white";
        c.fill();
        c.beginPath();
        c.moveTo(-4, -2);
        c.lineTo(-4, -4);
        c.lineTo(-2, -4);
        c.moveTo(2, -4);
        c.lineTo(4, -4);
        c.lineTo(4, -2);
        c.moveTo(4, 2);
        c.lineTo(4, 4);
        c.lineTo(2, 4);
        c.moveTo(-2, 4);
        c.lineTo(-4, 4);
        c.lineTo(-4, 2);
        c.moveTo(-4, -2);
        c.strokeStyle = "rgba(0,0,0,.2)";
        c.lineWidth = 5;
        c.stroke();
        c.strokeStyle = "blue";
        c.lineWidth = 1;
        c.stroke();
        c.restore()
    }
})(ChemDoodle.math, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g, k) {
    m.AtomMapping = function(d, c) {
        this.o1 = d;
        this.o2 = c;
        this.label = "0";
        this.error = !1
    };
    n = m.AtomMapping.prototype = new m._Shape;
    n.drawDecorations = function(d, c) {
        if (this.isHover || this.isSelected) d.strokeStyle = this.isHover ? c.colorHover : c.colorSelect, d.lineWidth = 1, d.beginPath(), d.moveTo(this.o1.x, this.o1.y), d.lineTo(this.o2.x, this.o2.y), d.setLineDash([2]), d.stroke(), d.setLineDash([])
    };
    n.draw = function(d, f) {
        if (this.o1 && this.o2) {
            this.x1 = this.o1.x + 14 * g.cos(this.o1.angleOfLeastInterference);
            this.y1 =
                this.o1.y - 14 * g.sin(this.o1.angleOfLeastInterference);
            this.x2 = this.o2.x + 14 * g.cos(this.o2.angleOfLeastInterference);
            this.y2 = this.o2.y - 14 * g.sin(this.o2.angleOfLeastInterference);
            d.font = c.getFontString(f.text_font_size, f.text_font_families, f.text_font_bold, f.text_font_italic);
            var b = this.label,
                a = d.measureText(b).width;
            this.isLassoed && (d.fillStyle = f.colorHover, d.fillRect(this.x1 - a / 2 - 3, this.y1 - f.text_font_size / 2 - 3, a + 6, f.text_font_size + 6), d.fillRect(this.x2 - a / 2 - 3, this.y2 - f.text_font_size / 2 - 3, a + 6, f.text_font_size +
                6));
            var h = this.error ? f.colorError : f.shapes_color;
            if (this.isHover || this.isSelected) h = this.isHover ? f.colorHover : f.colorSelect;
            d.fillStyle = h;
            d.fillRect(this.x1 - a / 2 - 1, this.y1 - f.text_font_size / 2 - 1, a + 2, f.text_font_size + 2);
            d.fillRect(this.x2 - a / 2 - 1, this.y2 - f.text_font_size / 2 - 1, a + 2, f.text_font_size + 2);
            d.textAlign = "center";
            d.textBaseline = "middle";
            d.fillStyle = f.backgroundColor;
            d.fillText(b, this.x1, this.y1);
            d.fillText(b, this.x2, this.y2)
        }
    };
    n.getPoints = function() {
        return [new p.Point(this.x1, this.y1), new p.Point(this.x2,
            this.y2)]
    };
    n.isOver = function(d, c) {
        return this.x1 ? d.distance({
            x: this.x1,
            y: this.y1
        }) < c || d.distance({
            x: this.x2,
            y: this.y2
        }) < c : !1
    }
})(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g, k) {
    m.Bracket = function(d, c) {
        this.p1 = d ? d : new p.Point;
        this.p2 = c ? c : new p.Point
    };
    m = m.Bracket.prototype = new m._Shape;
    m.charge = 0;
    m.mult = 0;
    m.repeat = 0;
    m.draw = function(d, f) {
        var b = g.min(this.p1.x, this.p2.x),
            a = g.max(this.p1.x, this.p2.x),
            h = g.min(this.p1.y, this.p2.y),
            k = g.max(this.p1.y, this.p2.y),
            m = k - h;
        var q = m / 10;
        d.beginPath();
        d.moveTo(b + q, h);
        d.lineTo(b, h);
        d.lineTo(b, k);
        d.lineTo(b + q, k);
        d.moveTo(a - q, k);
        d.lineTo(a, k);
        d.lineTo(a, h);
        d.lineTo(a - q, h);
        this.isLassoed && (q = d.createLinearGradient(this.p1.x,
            this.p1.y, this.p2.x, this.p2.y), q.addColorStop(0, "rgba(212, 99, 0, 0)"), q.addColorStop(.5, "rgba(212, 99, 0, 0.8)"), q.addColorStop(1, "rgba(212, 99, 0, 0)"), d.lineWidth = f.shapes_lineWidth + 5, d.strokeStyle = q, d.lineJoin = "miter", d.lineCap = "square", d.stroke());
        d.strokeStyle = f.shapes_color;
        d.lineWidth = f.shapes_lineWidth;
        d.lineJoin = "miter";
        d.lineCap = "butt";
        d.stroke();
        0 !== this.charge && (d.fillStyle = f.text_color, d.textAlign = "left", d.textBaseline = "alphabetic", d.font = c.getFontString(f.text_font_size, f.text_font_families),
            q = this.charge.toFixed(0), q = "1" === q ? "+" : "-1" === q ? "\u2013" : c.stringStartsWith(q, "-") ? q.substring(1) + "\u2013" : q + "+", d.fillText(q, a + 5, h + 5));
        0 !== this.mult && (d.fillStyle = f.text_color, d.textAlign = "right", d.textBaseline = "middle", d.font = c.getFontString(f.text_font_size, f.text_font_families), d.fillText(this.mult.toFixed(0), b - 5, h + m / 2));
        0 !== this.repeat && (d.fillStyle = f.text_color, d.textAlign = "left", d.textBaseline = "top", d.font = c.getFontString(f.text_font_size, f.text_font_families), q = this.repeat.toFixed(0), d.fillText(q,
            a + 5, k - 5))
    };
    m.getPoints = function() {
        return [this.p1, this.p2]
    };
    m.isOver = function(d, c) {
        return n.isBetween(d.x, this.p1.x, this.p2.x) && n.isBetween(d.y, this.p1.y, this.p2.y)
    }
})(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g, k, d) {
    g.DynamicBracket = function(b, a) {
        this.b1 = b;
        this.b2 = a;
        this.n1 = 1;
        this.n2 = 4;
        this.contents = [];
        this.ps = []
    };
    n = g.DynamicBracket.prototype = new g._Shape;
    n.drawDecorations = function(b, a) {
        if (this.isHover)
            for (var d = 0, c = this.contents.length; d < c; d++) {
                var f = this.contents[d],
                    g = b.createRadialGradient(f.x - 1, f.y - 1, 0, f.x, f.y, 7);
                g.addColorStop(0, "rgba(212, 99, 0, 0)");
                g.addColorStop(.7, "rgba(212, 99, 0, 0.8)");
                b.fillStyle = g;
                b.beginPath();
                b.arc(f.x, f.y, 5, 0, 2 * k.PI, !1);
                b.fill()
            }
    };
    var f = function(b, a,
        d, c, f) {
        a = [];
        var h = 0 < f.length ? -1 === f.indexOf(d.a1) ? d.a2 : d.a1 : d.a1.distance(c.getCenter()) < d.a2.distance(c.getCenter()) ? d.a1 : d.a2;
        c = h.angle(d.getNeighbor(h));
        var g = c + k.PI / 2;
        d = d.getLength() / (1 < f.length ? 4 : 2);
        f = h.x + d * k.cos(c);
        var h = h.y - d * k.sin(c),
            r = 10 * k.cos(g),
            w = 10 * k.sin(g),
            g = f + r;
        d = h - w;
        f -= r;
        var h = h + w,
            w = -4 * k.cos(c),
            n = -4 * k.sin(c);
        c = g + w;
        r = d - n;
        w = f + w;
        n = h - n;
        b.beginPath();
        b.moveTo(c, r);
        b.lineTo(g, d);
        b.lineTo(f, h);
        b.lineTo(w, n);
        b.stroke();
        a.push(new m.Point(g, d));
        a.push(new m.Point(f, h));
        return a
    };
    n.draw = function(b,
        a) {
        if (this.b1 && this.b2) {
            var d = this.error ? a.colorError : a.shapes_color;
            if (this.isHover || this.isSelected) d = this.isHover ? a.colorHover : a.colorSelect;
            b.strokeStyle = d;
            b.fillStyle = b.strokeStyle;
            b.lineWidth = a.shapes_lineWidth;
            b.lineJoin = "miter";
            b.lineCap = "butt";
            var d = f(b, a, this.b1, this.b2, this.contents),
                g = f(b, a, this.b2, this.b1, this.contents);
            this.ps = d.concat(g);
            this.b1.getCenter().x > this.b2.getCenter().x ? this.textPos = this.ps[0].x > this.ps[1].x + 5 ? this.ps[0] : this.ps[1] : this.textPos = this.ps[2].x > this.ps[3].x +
                5 ? this.ps[2] : this.ps[3];
            !this.error && 0 < this.contents.length && (b.font = c.getFontString(a.text_font_size, a.text_font_families, a.text_font_bold, a.text_font_italic), b.fillStyle = this.isHover ? a.colorHover : a.text_color, b.textAlign = "left", b.textBaseline = "bottom", b.fillText(this.n1 + "-" + this.n2, this.textPos.x + 2, this.textPos.y + 2))
        }
    };
    n.getPoints = function() {
        return this.ps
    };
    n.isOver = function(b, a) {
        return !1
    };
    n.setContents = function(b) {
        this.contents = [];
        var a = b.getMoleculeByAtom(this.b1.a1);
        b = b.getMoleculeByAtom(this.b2.a1);
        if (a && a === b) {
            var c = 0,
                f = 0;
            b = 0;
            for (var g = a.rings.length; b < g; b++)
                for (var k = a.rings[b], v = 0, n = k.bonds.length; v < n; v++) {
                    var u = k.bonds[v];
                    u === this.b1 ? c++ : u === this.b2 && f++
                }
            c = 1 === c && 1 === f && this.b1.ring === this.b2.ring;
            this.contents.flippable = c;
            if (this.b1.ring === d && this.b2.ring === d || c)
                for (b = 0, g = a.atoms.length; b < g; b++) {
                    u = k = f = !1;
                    v = 0;
                    for (n = a.bonds.length; v < n; v++) a.bonds[v].visited = !1;
                    var p = new m.Queue,
                        B = a.atoms[b];
                    for (p.enqueue(B); !(p.isEmpty() || f && k);) {
                        var e = p.dequeue();
                        c && (!this.flip && e === this.b1.a1 || this.flip &&
                            e === this.b1.a2) && (u = !0);
                        v = 0;
                        for (n = a.bonds.length; v < n; v++) {
                            var l = a.bonds[v];
                            if (l.a1 === e || l.a2 === e) l === this.b1 ? f = !0 : l === this.b2 ? k = !0 : l.visited || (l.visited = !0, p.enqueue(l.getNeighbor(e)))
                        }
                    }
                    f && k && (!c || u) && this.contents.push(B)
                }
        }
    }
})(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.lib.jsBezier, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g, k) {
    m.Line = function(d, b) {
        this.p1 = d ? d : new p.Point;
        this.p2 = b ? b : new p.Point
    };
    m.Line.ARROW_SYNTHETIC = "synthetic";
    m.Line.ARROW_RETROSYNTHETIC = "retrosynthetic";
    m.Line.ARROW_RESONANCE = "resonance";
    m.Line.ARROW_EQUILIBRIUM = "equilibrium";
    var d = m.Line.prototype = new m._Shape;
    d.arrowType = k;
    d.topText = k;
    d.bottomText = k;
    d.draw = function(d, b) {
        if (this.isLassoed) {
            var a = d.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
            a.addColorStop(0, "rgba(212, 99, 0, 0)");
            a.addColorStop(.5, "rgba(212, 99, 0, 0.8)");
            a.addColorStop(1, "rgba(212, 99, 0, 0)");
            var f = 2.5;
            var k = this.p1.angle(this.p2) + g.PI / 2;
            var w = g.cos(k);
            k = g.sin(k);
            var q = this.p1.x - w * f;
            var v = this.p1.y + k * f;
            var n = this.p1.x + w * f;
            var u = this.p1.y - k * f;
            var p = this.p2.x + w * f;
            var B = this.p2.y - k * f;
            var e = this.p2.x - w * f;
            var l = this.p2.y + k * f;
            d.fillStyle = a;
            d.beginPath();
            d.moveTo(q, v);
            d.lineTo(n, u);
            d.lineTo(p, B);
            d.lineTo(e, l);
            d.closePath();
            d.fill()
        }
        d.strokeStyle = b.shapes_color;
        d.fillStyle = b.shapes_color;
        d.lineWidth = b.shapes_lineWidth;
        d.lineJoin = "miter";
        d.lineCap = "butt";
        if (this.p1.x !== this.p2.x || this.p1.y !== this.p2.y) {
            if (this.arrowType === m.Line.ARROW_RETROSYNTHETIC) {
                a = 2 * g.sqrt(2);
                f = b.shapes_arrowLength_2D / a;
                w = this.p1.angle(this.p2);
                k = w + g.PI / 2;
                var x = b.shapes_arrowLength_2D / a;
                a = g.cos(w);
                var A = g.sin(w);
                w = g.cos(k);
                k = g.sin(k);
                q = this.p1.x - w * f;
                v = this.p1.y + k * f;
                n = this.p1.x + w * f;
                u = this.p1.y - k * f;
                p = this.p2.x + w * f - a * x;
                B = this.p2.y - k * f + A * x;
                e = this.p2.x - w * f - a * x;
                l = this.p2.y + k * f + A * x;
                var z = this.p2.x + w * f * 2 - a * x * 2;
                var D = this.p2.y - k * f * 2 + A * x * 2;
                var E = this.p2.x - w * f * 2 - a * x * 2;
                f = this.p2.y + k * f * 2 +
                    A * x * 2;
                d.beginPath();
                d.moveTo(n, u);
                d.lineTo(p, B);
                d.moveTo(z, D);
                d.lineTo(this.p2.x, this.p2.y);
                d.lineTo(E, f);
                d.moveTo(e, l);
                d.lineTo(q, v)
            } else this.arrowType === m.Line.ARROW_EQUILIBRIUM ? (a = 2 * g.sqrt(2), f = b.shapes_arrowLength_2D / a / 2, w = this.p1.angle(this.p2), k = w + g.PI / 2, x = 2 * b.shapes_arrowLength_2D / g.sqrt(3), a = g.cos(w), A = g.sin(w), w = g.cos(k), k = g.sin(k), q = this.p1.x - w * f, v = this.p1.y + k * f, n = this.p1.x + w * f, u = this.p1.y - k * f, p = this.p2.x + w * f, B = this.p2.y - k * f, e = this.p2.x - w * f, l = this.p2.y + k * f, d.beginPath(), d.moveTo(n, u), d.lineTo(p,
                    B), d.moveTo(e, l), d.lineTo(q, v), d.stroke(), e = p - a * x * .8, l = B + A * x * .8, z = p + w * b.shapes_arrowLength_2D / 3 - a * x, D = B - k * b.shapes_arrowLength_2D / 3 + A * x, d.beginPath(), d.moveTo(p, B), d.lineTo(z, D), d.lineTo(e, l), d.closePath(), d.fill(), d.stroke(), e = q + a * x * .8, l = v - A * x * .8, z = q - w * b.shapes_arrowLength_2D / 3 + a * x, D = v + k * b.shapes_arrowLength_2D / 3 - A * x, d.beginPath(), d.moveTo(q, v), d.lineTo(z, D), d.lineTo(e, l), d.closePath(), d.fill()) : this.arrowType === m.Line.ARROW_SYNTHETIC ? (w = this.p1.angle(this.p2), k = w + g.PI / 2, x = 2 * b.shapes_arrowLength_2D /
                    g.sqrt(3), a = g.cos(w), A = g.sin(w), w = g.cos(k), k = g.sin(k), d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(this.p2.x - a * x / 2, this.p2.y + A * x / 2), d.stroke(), e = this.p2.x - a * x * .8, l = this.p2.y + A * x * .8, z = this.p2.x + w * b.shapes_arrowLength_2D / 3 - a * x, D = this.p2.y - k * b.shapes_arrowLength_2D / 3 + A * x, E = this.p2.x - w * b.shapes_arrowLength_2D / 3 - a * x, f = this.p2.y + k * b.shapes_arrowLength_2D / 3 + A * x, d.beginPath(), d.moveTo(this.p2.x, this.p2.y), d.lineTo(E, f), d.lineTo(e, l), d.lineTo(z, D), d.closePath(), d.fill()) : this.arrowType === m.Line.ARROW_RESONANCE ?
                (w = this.p1.angle(this.p2), k = w + g.PI / 2, x = 2 * b.shapes_arrowLength_2D / g.sqrt(3), a = g.cos(w), A = g.sin(w), w = g.cos(k), k = g.sin(k), d.beginPath(), d.moveTo(this.p1.x + a * x / 2, this.p1.y - A * x / 2), d.lineTo(this.p2.x - a * x / 2, this.p2.y + A * x / 2), d.stroke(), e = this.p2.x - a * x * .8, l = this.p2.y + A * x * .8, z = this.p2.x + w * b.shapes_arrowLength_2D / 3 - a * x, D = this.p2.y - k * b.shapes_arrowLength_2D / 3 + A * x, E = this.p2.x - w * b.shapes_arrowLength_2D / 3 - a * x, f = this.p2.y + k * b.shapes_arrowLength_2D / 3 + A * x, d.beginPath(), d.moveTo(this.p2.x, this.p2.y), d.lineTo(E, f), d.lineTo(e,
                    l), d.lineTo(z, D), d.closePath(), d.fill(), d.stroke(), e = this.p1.x + a * x * .8, l = this.p1.y - A * x * .8, z = this.p1.x - w * b.shapes_arrowLength_2D / 3 + a * x, D = this.p1.y + k * b.shapes_arrowLength_2D / 3 - A * x, E = this.p1.x + w * b.shapes_arrowLength_2D / 3 + a * x, f = this.p1.y - k * b.shapes_arrowLength_2D / 3 - A * x, d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(E, f), d.lineTo(e, l), d.lineTo(z, D), d.closePath(), d.fill()) : (d.beginPath(), d.moveTo(this.p1.x, this.p1.y), d.lineTo(this.p2.x, this.p2.y));
            d.stroke();
            if (this.topText || this.bottomText) d.font =
                c.getFontString(b.text_font_size, b.text_font_families, b.text_font_bold, b.text_font_italic), d.fillStyle = b.text_color;
            this.topText && (d.textAlign = "center", d.textBaseline = "bottom", d.fillText(this.topText, (this.p1.x + this.p2.x) / 2, this.p1.y - 5));
            this.bottomText && (d.textAlign = "center", d.textBaseline = "top", d.fillText(this.bottomText, (this.p1.x + this.p2.x) / 2, this.p1.y + 5))
        }
    };
    d.getPoints = function() {
        return [this.p1, this.p2]
    };
    d.isOver = function(d, b) {
        var a = n.distanceFromPointToLineInclusive(d, this.p1, this.p2);
        return -1 !==
            a && a < b
    }
})(ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g, k) {
    var d = function(a) {
            var b = [];
            if (a instanceof p.Atom)
                if (0 === a.bondNumber) b.push(g.PI);
                else {
                    if (a.angles) {
                        if (1 === a.angles.length) b.push(a.angles[0] + g.PI);
                        else {
                            for (var d = 1, c = a.angles.length; d < c; d++) b.push(a.angles[d - 1] + (a.angles[d] - a.angles[d - 1]) / 2);
                            d = a.angles[a.angles.length - 1];
                            b.push(d + (a.angles[0] + 2 * g.PI - d) / 2)
                        }
                        a.largestAngle > g.PI && (b = [a.angleOfLeastInterference]);
                        if (a.bonds)
                            for (d = 0, c = a.bonds.length; d < c; d++) {
                                var f = a.bonds[d];
                                if (2 === f.bondOrder && (f = f.getNeighbor(a), "O" === f.label)) {
                                    b = [f.angle(a)];
                                    break
                                }
                            }
                    }
                } else a = a.a1.angle(a.a2), b.push(a + g.PI / 2), b.push(a + 3 * g.PI / 2);
            d = 0;
            for (c = b.length; d < c; d++) {
                for (; b[d] > 2 * g.PI;) b[d] -= 2 * g.PI;
                for (; 0 > b[d];) b[d] += 2 * g.PI
            }
            return b
        },
        f = function(a, b) {
            var d = 3;
            if (a instanceof p.Atom) {
                if (a.isLabelVisible(b) && (d = 8), 0 !== a.charge || 0 !== a.numRadical || 0 !== a.numLonePair) d = 13
            } else a instanceof p.Point ? d = 0 : 1 < a.bondOrder && (d = 5);
            return d
        },
        b = function(a, b, d, c, k, m, n, u, y, B) {
            var e = m.angle(k),
                h = n.angle(u),
                r = g.cos(e),
                e = g.sin(e),
                q = f(d, b);
            k.x -= r * q;
            k.y += e * q;
            q = h + g.PI / 2;
            d = 2 * b.shapes_arrowLength_2D /
                g.sqrt(3);
            var r = g.cos(h),
                e = g.sin(h),
                w = g.cos(q),
                v = g.sin(q);
            u.x -= 5 * r;
            u.y += 5 * e;
            h = new p.Point(u.x, u.y);
            q = f(c, b) / 3;
            h.x -= r * q;
            h.y += e * q;
            u.x -= r * (.8 * d + q);
            u.y += e * (.8 * d + q);
            c = h.x - r * d * .8;
            var q = h.y + e * d * .8,
                C = new p.Point(h.x + w * b.shapes_arrowLength_2D / 3 - r * d, h.y - v * b.shapes_arrowLength_2D / 3 + e * d);
            b = new p.Point(h.x - w * b.shapes_arrowLength_2D / 3 - r * d, h.y + v * b.shapes_arrowLength_2D / 3 + e * d);
            e = r = !0;
            1 === y && (C.distance(m) > b.distance(m) ? e = !1 : r = !1);
            a.beginPath();
            a.moveTo(h.x, h.y);
            e && a.lineTo(b.x, b.y);
            a.lineTo(c, q);
            r && a.lineTo(C.x,
                C.y);
            a.closePath();
            a.fill();
            a.stroke();
            a.beginPath();
            a.moveTo(k.x, k.y);
            a.bezierCurveTo(m.x, m.y, n.x, n.y, u.x, u.y);
            a.stroke();
            B.push([k, m, n, u])
        };
    m.Pusher = function(a, b, d) {
        this.o1 = a;
        this.o2 = b;
        this.numElectron = d ? d : 1
    };
    m = m.Pusher.prototype = new m._Shape;
    m.drawDecorations = function(a, b) {
        if (this.isHover)
            for (var d = this.o1 instanceof p.Atom ? new p.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), c = this.o2 instanceof p.Atom ? new p.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), d = [d, c], c = 0, f = d.length; c < f; c++) {
                var h =
                    d[c];
                this.drawAnchor(a, b, h, h === this.hoverPoint)
            }
    };
    m.draw = function(a, f) {
        if (this.o1 && this.o2) {
            a.strokeStyle = f.shapes_color;
            a.fillStyle = f.shapes_color;
            a.lineWidth = f.shapes_lineWidth;
            a.lineJoin = "miter";
            a.lineCap = "butt";
            for (var h = this.o1 instanceof p.Atom ? new p.Point(this.o1.x, this.o1.y) : this.o1.getCenter(), k = this.o2 instanceof p.Atom ? new p.Point(this.o2.x, this.o2.y) : this.o2.getCenter(), m = d(this.o1), v = d(this.o2), n, u, y = Infinity, B = 0, e = m.length; B < e; B++)
                for (var l = 0, x = v.length; l < x; l++) {
                    var A = new p.Point(h.x +
                            35 * g.cos(m[B]), h.y - 35 * g.sin(m[B])),
                        z = new p.Point(k.x + 35 * g.cos(v[l]), k.y - 35 * g.sin(v[l])),
                        D = A.distance(z);
                    D < y && (y = D, n = A, u = z)
                }
            this.caches = []; - 1 === this.numElectron ? (B = h.distance(k) / 2, v = h.angle(k), m = v + g.PI / 2, e = g.cos(v), l = g.sin(v), v = new p.Point(h.x + (B - 1) * e, h.y - (B - 1) * l), y = new p.Point(v.x + 35 * g.cos(m + g.PI / 6), v.y - 35 * g.sin(m + g.PI / 6)), B = new p.Point(h.x + (B + 1) * e, h.y - (B + 1) * l), m = new p.Point(B.x + 35 * g.cos(m - g.PI / 6), B.y - 35 * g.sin(m - g.PI / 6)), b(a, f, this.o1, v, h, n, y, v, 1, this.caches), b(a, f, this.o2, B, k, u, m, B, 1, this.caches)) :
                (c.intersectLines(h.x, h.y, n.x, n.y, k.x, k.y, u.x, u.y) && (m = n, n = u, u = m), m = n.angle(h), v = u.angle(k), y = g.max(m, v) - g.min(m, v), .001 > g.abs(y - g.PI) && this.o1.molCenter === this.o2.molCenter && (m += g.PI / 2, v -= g.PI / 2, n.x = h.x + 35 * g.cos(m + g.PI), n.y = h.y - 35 * g.sin(m + g.PI), u.x = k.x + 35 * g.cos(v + g.PI), u.y = k.y - 35 * g.sin(v + g.PI)), b(a, f, this.o1, this.o2, h, n, u, k, this.numElectron, this.caches))
        }
    };
    m.getPoints = function() {
        return []
    };
    m.isOver = function(a, b) {
        for (var d = 0, c = this.caches.length; d < c; d++)
            if (n.distanceFromCurve(a, this.caches[d]).distance <
                b) return !0;
        return !1
    }
})(ChemDoodle.math, ChemDoodle.lib.jsBezier, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p, m, g) {
    var k = new n.Bond;
    p.VAP = function(d, c) {
        this.asterisk = new n.Atom("O", d, c);
        this.substituent;
        this.bondType = 1;
        this.attachments = []
    };
    c = p.VAP.prototype = new p._Shape;
    c.drawDecorations = function(d, c) {
        if (this.isHover || this.isSelected) {
            d.strokeStyle = this.isHover ? c.colorHover : c.colorSelect;
            d.lineWidth = 1.2;
            if (this.hoverBond) {
                var b = 2 * m.PI,
                    a = (this.asterisk.angleForStupidCanvasArcs(this.hoverBond) + m.PI / 2) % b;
                d.strokeStyle = this.isHover ? c.colorHover : c.colorSelect;
                d.beginPath();
                var f = (a + m.PI) % b,
                    f = f %
                    (2 * m.PI);
                d.arc(this.asterisk.x, this.asterisk.y, 7, a, f, !1);
                d.stroke();
                d.beginPath();
                a += m.PI;
                f = (a + m.PI) % b;
                d.arc(this.hoverBond.x, this.hoverBond.y, 7, a, f, !1)
            } else d.beginPath(), d.arc(this.asterisk.x, this.asterisk.y, 7, 0, 2 * m.PI, !1);
            d.stroke()
        }
    };
    c.draw = function(d, c) {
        d.strokeStyle = this.error ? c.colorError : c.shapes_color;
        d.lineWidth = 1;
        var b = m.sqrt(3) / 2;
        d.beginPath();
        d.moveTo(this.asterisk.x, this.asterisk.y - 4);
        d.lineTo(this.asterisk.x, this.asterisk.y + 4);
        d.moveTo(this.asterisk.x - 4 * b, this.asterisk.y - 2);
        d.lineTo(this.asterisk.x +
            4 * b, this.asterisk.y + 2);
        d.moveTo(this.asterisk.x - 4 * b, this.asterisk.y + 2);
        d.lineTo(this.asterisk.x + 4 * b, this.asterisk.y - 2);
        d.stroke();
        this.asterisk.textBounds = [];
        this.asterisk.textBounds.push({
            x: this.asterisk.x - 4,
            y: this.asterisk.y - 4,
            w: 8,
            h: 8
        });
        b = c.bonds_color;
        this.error && (c.bonds_color = c.colorError);
        k.a1 = this.asterisk;
        this.substituent && (k.a2 = this.substituent, k.bondOrder = this.bondType, k.draw(d, c));
        k.bondOrder = 0;
        this.error || (c.bonds_color = c.shapes_color);
        for (var a = 0, f = this.attachments.length; a < f; a++) k.a2 =
            this.attachments[a], k.draw(d, c);
        c.bonds_color = b
    };
    c.getPoints = function() {
        return [this.asterisk]
    };
    c.isOver = function(d, c) {
        return !1
    }
})(ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d2, Math);
(function(c, n, p) {
    c._Mesh = function() {};
    c = c._Mesh.prototype;
    c.storeData = function(c, g, k) {
        this.positionData = c;
        this.normalData = g;
        this.indexData = k
    };
    c.setupBuffers = function(c) {
        this.vertexPositionBuffer = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexPositionBuffer);
        c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.positionData), c.STATIC_DRAW);
        this.vertexPositionBuffer.itemSize = 3;
        this.vertexPositionBuffer.numItems = this.positionData.length / 3;
        this.vertexNormalBuffer = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER,
            this.vertexNormalBuffer);
        c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.normalData), c.STATIC_DRAW);
        this.vertexNormalBuffer.itemSize = 3;
        this.vertexNormalBuffer.numItems = this.normalData.length / 3;
        this.indexData && (this.vertexIndexBuffer = c.createBuffer(), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexData), c.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexData.length);
        if (this.partitions)
            for (var g =
                    0, k = this.partitions.length; g < k; g++) {
                var d = this.partitions[g],
                    f = this.generateBuffers(c, d.positionData, d.normalData, d.indexData);
                d.vertexPositionBuffer = f[0];
                d.vertexNormalBuffer = f[1];
                d.vertexIndexBuffer = f[2]
            }
    };
    c.generateBuffers = function(c, g, k, d) {
        var f = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, f);
        c.bufferData(c.ARRAY_BUFFER, new Float32Array(g), c.STATIC_DRAW);
        f.itemSize = 3;
        f.numItems = g.length / 3;
        g = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, g);
        c.bufferData(c.ARRAY_BUFFER, new Float32Array(k), c.STATIC_DRAW);
        g.itemSize = 3;
        g.numItems = k.length / 3;
        if (d) {
            var b = c.createBuffer();
            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b);
            c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(d), c.STATIC_DRAW);
            b.itemSize = 1;
            b.numItems = d.length
        }
        return [f, g, b]
    };
    c.bindBuffers = function(c) {
        this.vertexPositionBuffer || this.setupBuffers(c);
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexPositionBuffer);
        c.vertexAttribPointer(c.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, c.FLOAT, !1, 0, 0);
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexNormalBuffer);
        c.vertexAttribPointer(c.shader.vertexNormalAttribute, this.vertexNormalBuffer.itemSize, c.FLOAT, !1, 0, 0);
        this.vertexIndexBuffer && c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer)
    }
})(ChemDoodle.structures.d3, Math);
(function(c, n) {
    c._Measurement = function() {};
    var p = c._Measurement.prototype = new c._Mesh;
    p.render = function(c, g) {
        c.shader.setMatrixUniforms(c);
        g.measurement_update_3D && (this.text = this.vertexPositionBuffer = n);
        this.vertexPositionBuffer || this.calculateData(g);
        this.bindBuffers(c);
        c.material.setDiffuseColor(c, g.shapes_color);
        c.lineWidth(g.shapes_lineWidth);
        c.drawElements(c.LINES, this.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
    };
    p.renderText = function(c, g) {
        c.shader.setMatrixUniforms(c);
        this.text || (this.text =
            this.getText(g));
        var k = {
            position: [],
            texCoord: [],
            translation: []
        };
        c.textImage.pushVertexData(this.text.value, this.text.pos, 1, k);
        c.textMesh.storeData(c, k.position, k.texCoord, k.translation);
        c.textImage.useTexture(c);
        c.textMesh.render(c)
    }
})(ChemDoodle.structures.d3);
(function(c, n, p, m, g, k, d, f) {
    p.Angle = function(b, a, d) {
        this.a1 = b;
        this.a2 = a;
        this.a3 = d
    };
    c = p.Angle.prototype = new p._Measurement;
    c.calculateData = function(b) {
        var a = [],
            c = [],
            f = [],
            k = this.a2.distance3D(this.a1),
            m = this.a2.distance3D(this.a3);
        this.distUse = g.min(k, m) / 2;
        this.vec1 = d.normalize([this.a1.x - this.a2.x, this.a1.y - this.a2.y, this.a1.z - this.a2.z]);
        this.vec2 = d.normalize([this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z]);
        this.angle = n.vec3AngleFrom(this.vec1, this.vec2);
        k = d.normalize(d.cross(this.vec1,
            this.vec2, []));
        k = d.normalize(d.cross(k, this.vec1, []));
        b = b.measurement_angleBands_3D;
        for (m = 0; m <= b; ++m) {
            var v = this.angle * m / b,
                p = d.scale(this.vec1, g.cos(v), []),
                v = d.scale(k, g.sin(v), []),
                p = d.scale(d.normalize(d.add(p, v, [])), this.distUse);
            a.push(this.a2.x + p[0], this.a2.y + p[1], this.a2.z + p[2]);
            c.push(0, 0, 0);
            m < b && f.push(m, m + 1)
        }
        this.storeData(a, c, f)
    };
    c.getText = function(b) {
        b = d.scale(d.normalize(d.add(this.vec1, this.vec2, [])), this.distUse + .3);
        return {
            pos: [this.a2.x + b[0], this.a2.y + b[1], this.a2.z + b[2]],
            value: [m.angleBounds(this.angle, !0).toFixed(2), " \u00b0"].join("")
        }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.extensions, ChemDoodle.structures.d3, ChemDoodle.math, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(c, n, p) {
    c.Arrow = function(c, g) {
        for (var k = [], d = [], f = 0; f <= g; f++) {
            var b = 2 * f * n.PI / g,
                a = n.sin(b),
                b = n.cos(b);
            d.push(0, 0, -1, 0, 0, -1, b, a, 0, b, a, 0, 0, 0, -1, 0, 0, -1, b, a, 1, b, a, 1);
            k.push(0, 0, 0, c * b, c * a, 0, c * b, c * a, 0, c * b, c * a, 2, c * b, c * a, 2, c * b * 2, c * a * 2, 2, c * b * 2, c * a * 2, 2, 0, 0, 3)
        }
        f = [];
        for (a = 0; a < g; a++)
            for (var b = 8 * a, h = 0; 7 > h; h++) {
                var m = h + b,
                    w = m + 7 + 2;
                f.push(m, w, m + 1, w, m, w - 1)
            }
        this.storeData(k, d, f)
    };
    c.Arrow.prototype = new c._Mesh
})(ChemDoodle.structures.d3, Math);
(function(c, n, p) {
    c.Box = function(c, g, k) {
        c /= 2;
        k /= 2;
        var d = [],
            f = [];
        d.push(c, g, -k);
        d.push(c, g, -k);
        d.push(-c, g, -k);
        d.push(c, g, k);
        d.push(-c, g, k);
        d.push(-c, g, k);
        for (var b = 6; b--; f.push(0, 1, 0));
        d.push(-c, g, k);
        d.push(-c, g, k);
        d.push(-c, 0, k);
        d.push(c, g, k);
        d.push(c, 0, k);
        d.push(c, 0, k);
        for (b = 6; b--; f.push(0, 0, 1));
        d.push(c, g, k);
        d.push(c, g, k);
        d.push(c, 0, k);
        d.push(c, g, -k);
        d.push(c, 0, -k);
        d.push(c, 0, -k);
        for (b = 6; b--; f.push(1, 0, 0));
        d.push(c, g, -k);
        d.push(c, g, -k);
        d.push(c, 0, -k);
        d.push(-c, g, -k);
        d.push(-c, 0, -k);
        d.push(-c, 0, -k);
        for (b = 6; b--; f.push(0, 0, -1));
        d.push(-c, g, -k);
        d.push(-c, g, -k);
        d.push(-c, 0, -k);
        d.push(-c, g, k);
        d.push(-c, 0, k);
        d.push(-c, 0, k);
        for (b = 6; b--; f.push(-1, 0, 0));
        d.push(-c, 0, k);
        d.push(-c, 0, k);
        d.push(-c, 0, -k);
        d.push(c, 0, k);
        d.push(c, 0, -k);
        d.push(c, 0, -k);
        for (b = 6; b--; f.push(0, -1, 0));
        this.storeData(d, f)
    };
    c.Box.prototype = new c._Mesh
})(ChemDoodle.structures.d3, Math);
(function(c, n, p, m, g, k) {
    n.Camera = function() {
        this.fieldOfView = 45;
        this.aspect = 1;
        this.near = .1;
        this.far = 1E4;
        this.zoom = 1;
        this.viewMatrix = m.identity([]);
        this.projectionMatrix = m.identity([])
    };
    c = n.Camera.prototype;
    c.perspectiveProjectionMatrix = function() {
        var d = g.tan(this.fieldOfView / 360 * g.PI) * this.near * this.zoom,
            c = this.aspect * d;
        return m.frustum(-c, c, -d, d, this.near, this.far, this.projectionMatrix)
    };
    c.orthogonalProjectionMatrix = function() {
        var d = g.tan(this.fieldOfView / 360 * g.PI) * ((this.far - this.near) / 2 + this.near) *
            this.zoom,
            c = this.aspect * d;
        return m.ortho(-c, c, -d, d, this.near, this.far, this.projectionMatrix)
    };
    c.updateProjectionMatrix = function(d) {
        return d ? this.perspectiveProjectionMatrix() : this.orthogonalProjectionMatrix()
    };
    c.focalLength = function() {
        return (this.far - this.near) / 2 + this.near
    };
    c.zoomIn = function() {
        this.zoom = g.min(1.25 * this.zoom, 200)
    };
    c.zoomOut = function() {
        this.zoom = g.max(this.zoom / 1.25, .0025)
    }
})(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3, ChemDoodle.lib.mat4, Math);
(function(c, n, p, m) {
    c.LineArrow = function() {
        this.storeData([0, 0, -3, .1, 0, -2.8, 0, 0, -3, -.1, 0, -2.8, 0, 0, -3, 0, 0, 3, 0, 0, 3, .1, 0, 2.8, 0, 0, 3, -.1, 0, 2.8], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    c.LineArrow.prototype = new c._Mesh;
    c.Compass = function(g, d) {
        this.textImage = new c.TextImage;
        this.textImage.init(g);
        this.textImage.updateFont(g, d.text_font_size, d.text_font_families, d.text_font_bold, d.text_font_italic, d.text_font_stroke_3D);
        this.textMesh = new c.TextMesh;
        this.textMesh.init(g);
        var f = 3 / (d.compass_size_3D /
                g.canvas.clientHeight),
            b = n.tan(d.projectionPerspectiveVerticalFieldOfView_3D / 360 * n.PI),
            a = f / b,
            h = n.max(a - f, .1),
            k = g.canvas.clientWidth / g.canvas.clientHeight;
        if (d.projectionPerspective_3D) {
            var m = h;
            var q = p.frustum
        } else m = a, q = p.ortho;
        var v = m / g.canvas.clientHeight * 2 * b,
            b = b * m;
        m = -b;
        var C = k * m,
            k = k * b;
        if (0 === d.compass_type_3D) {
            var u = (-(g.canvas.clientWidth - d.compass_size_3D) / 2 + this.textImage.charHeight) * v,
                v = (-(g.canvas.clientHeight - d.compass_size_3D) / 2 + this.textImage.charHeight) * v,
                C = C - u,
                k = k - u;
            m -= v;
            b -= v
        }
        this.projectionMatrix =
            q(C, k, m, b, h, a + f);
        this.translationMatrix = p.translate(p.identity([]), [0, 0, -a]);
        f = {
            position: [],
            texCoord: [],
            translation: []
        };
        this.textImage.pushVertexData("X", [3.5, 0, 0], 0, f);
        this.textImage.pushVertexData("Y", [0, 3.5, 0], 0, f);
        this.textImage.pushVertexData("Z", [0, 0, 3.5], 0, f);
        this.textMesh.storeData(g, f.position, f.texCoord, f.translation)
    };
    var g = c.Compass.prototype;
    g.renderArrow = function(c, d, f, b) {
        c.material.setDiffuseColor(c, f);
        c.shader.setModelViewMatrix(c, b);
        1 === d ? c.drawArrays(c.LINES, 0, c.lineArrowBuffer.vertexPositionBuffer.numItems) :
            c.drawElements(c.TRIANGLES, c.arrowBuffer.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
    };
    g.render = function(c, d) {
        c.shader.setProjectionMatrix(c, this.projectionMatrix);
        1 === d.compass_type_3D ? c.lineArrowBuffer.bindBuffers(c) : c.arrowBuffer.bindBuffers(c);
        c.material.setTempColors(c, d.bonds_materialAmbientColor_3D, m, d.bonds_materialSpecularColor_3D, d.bonds_materialShininess_3D);
        var f = p.multiply(this.translationMatrix, c.rotationMatrix, []),
            b = n.PI / 2;
        this.renderArrow(c, d.compass_type_3D, d.compass_axisXColor_3D,
            p.rotateY(f, b, []));
        this.renderArrow(c, d.compass_type_3D, d.compass_axisYColor_3D, p.rotateX(f, -b, []));
        this.renderArrow(c, d.compass_type_3D, d.compass_axisZColor_3D, f)
    };
    g.renderAxis = function(c) {
        c.shader.setProjectionMatrix(c, this.projectionMatrix);
        var d = p.multiply(this.translationMatrix, c.rotationMatrix, []);
        c.shader.setModelViewMatrix(c, d);
        this.textImage.useTexture(c);
        this.textMesh.render(c)
    }
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4);
(function(c, n, p) {
    c.Cylinder = function(c, g, k, d) {
        var f = [],
            b = [];
        if (d) {
            for (var a = 0; a <= k; a++) {
                var h = a % k * 2 * n.PI / k;
                d = n.cos(h);
                h = n.sin(h);
                b.push(0, -1, 0);
                f.push(0, 0, 0);
                b.push(0, -1, 0);
                f.push(c * d, 0, c * h)
            }
            for (a = 0; a <= k; a++) h = a % k * 2 * n.PI / k, d = n.cos(h), h = n.sin(h), b.push(d, 0, h), f.push(c * d, 0, c * h), b.push(d, 0, h), f.push(c * d, g, c * h);
            for (a = 0; a <= k; a++) h = a % k * 2 * n.PI / k, d = n.cos(h), h = n.sin(h), b.push(0, 1, 0), f.push(c * d, g, c * h), b.push(0, 1, 0), f.push(0, g, 0)
        } else {
            for (a = 0; a < k; a++) h = 2 * a * n.PI / k, d = n.cos(h), h = n.sin(h), b.push(d, 0, h), f.push(c *
                d, 0, c * h), b.push(d, 0, h), f.push(c * d, g, c * h);
            b.push(1, 0, 0);
            f.push(c, 0, 0);
            b.push(1, 0, 0);
            f.push(c, g, 0)
        }
        this.storeData(f, b)
    };
    c.Cylinder.prototype = new c._Mesh
})(ChemDoodle.structures.d3, Math);
(function(c, n, p, m, g) {
    n.Distance = function(c, d, f, b) {
        this.a1 = c;
        this.a2 = d;
        this.node = f;
        this.offset = b ? b : 0
    };
    n = n.Distance.prototype = new n._Measurement;
    n.calculateData = function(g) {
        var d = [this.a1.x, this.a1.y, this.a1.z, this.a2.x, this.a2.y, this.a2.z];
        this.node && (this.move = this.offset + p.max(g.atoms_useVDWDiameters_3D ? c[this.a1.label].vdWRadius * g.atoms_vdwMultiplier_3D : g.atoms_sphereDiameter_3D / 2, g.atoms_useVDWDiameters_3D ? c[this.a2.label].vdWRadius * g.atoms_vdwMultiplier_3D : g.atoms_sphereDiameter_3D / 2), this.displacement = [(this.a1.x + this.a2.x) / 2 - this.node.x, (this.a1.y + this.a2.y) / 2 - this.node.y, (this.a1.z + this.a2.z) / 2 - this.node.z], m.normalize(this.displacement), g = m.scale(this.displacement, this.move, []), d[0] += g[0], d[1] += g[1], d[2] += g[2], d[3] += g[0], d[4] += g[1], d[5] += g[2]);
        this.storeData(d, [0, 0, 0, 0, 0, 0], [0, 1])
    };
    n.getText = function(c) {
        c = this.a1.distance3D(this.a2);
        var d = [(this.a1.x + this.a2.x) / 2, (this.a1.y + this.a2.y) / 2, (this.a1.z + this.a2.z) / 2];
        if (this.node) {
            var f = m.scale(this.displacement, this.move + .1, []);
            d[0] += f[0];
            d[1] +=
                f[1];
            d[2] += f[2]
        }
        return {
            pos: d,
            value: [c.toFixed(2), " \u212b"].join("")
        }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(c, n, p, m) {
    n.Fog = function(c, k, d, f) {
        this.fogScene(c, k, d, f)
    };
    n.Fog.prototype.fogScene = function(g, k, d, f) {
        this.colorRGB = c.getRGB(g, 1);
        this.fogStart = k;
        this.fogEnd = d;
        this.density = f
    }
})(ChemDoodle.math, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(c, n, p) {
    n.Label = function(c) {};
    n = n.Label.prototype;
    n.updateVerticesBuffer = function(m, g, k) {
        for (var d, f = 0, b = g.length; f < b; f++) {
            for (var a = g[f], h = a.labelMesh, r = a.atoms, w = {
                    position: [],
                    texCoord: [],
                    translation: []
                }, q = 0 < r.length && r[0].hetatm != p, v = 0, n = r.length; v < n; v++) {
                d = r[v];
                var u = d.label,
                    y = .05;
                k.atoms_useVDWDiameters_3D ? (u = c[u].vdWRadius * k.atoms_vdwMultiplier_3D, 0 === u && (u = 1), y += u) : k.atoms_sphereDiameter_3D && (y += k.atoms_sphereDiameter_3D / 2 * 1.5);
                if (q)
                    if (!d.hetatm) {
                        if (!k.macro_displayAtoms) continue
                    } else if (d.isWater &&
                    !k.macro_showWaters) continue;
                m.textImage.pushVertexData(d.altLabel ? d.altLabel : d.label, [d.x, d.y, d.z], y, w)
            }
            if ((a = a.chains) && (k.proteins_displayRibbon || k.proteins_displayBackbone))
                for (v = 0, n = a.length; v < n; v++)
                    for (r = a[v], q = 0, y = r.length; q < y; q++) u = r[q], u.name && (d = u.cp1, m.textImage.pushVertexData(u.name, [d.x, d.y, d.z], 2, w));
            h.storeData(m, w.position, w.texCoord, w.translation, w.zDepth)
        }
    };
    n.render = function(c, g, k) {
        c.shader.setMatrixUniforms(c);
        c.textImage.useTexture(c);
        g = 0;
        for (var d = k.length; g < d; g++) k[g].labelMesh &&
            k[g].labelMesh.render(c)
    }
})(ChemDoodle.ELEMENT, ChemDoodle.structures.d3);
(function(c, n, p) {
    c.Sphere = function(c, g, k) {
        for (var d = [], f = [], b = 0; b <= g; b++)
            for (var a = b * n.PI / g, h = n.sin(a), r = n.cos(a), a = 0; a <= k; a++) {
                var m = 2 * a * n.PI / k,
                    q = n.sin(m),
                    m = n.cos(m) * h,
                    v = r,
                    q = q * h;
                f.push(m, v, q);
                d.push(c * m, c * v, c * q)
            }
        c = [];
        k += 1;
        for (b = 0; b < g; b++)
            for (a = 0; a < k; a++) h = b * k + a % k, r = h + k, c.push(h, h + 1, r), a < k - 1 && c.push(r, h + 1, r + 1);
        this.storeData(d, f, c)
    };
    c.Sphere.prototype = new c._Mesh
})(ChemDoodle.structures.d3, Math);
(function(c, n, p, m, g) {
    function k(d, b, a, c) {
        this.entire = d;
        this.name = b;
        this.indexes = a;
        this.pi = c
    }
    var d = k.prototype;
    d.getColor = function(d) {
        return d.macro_colorByChain ? this.entire.chainColor : this.name ? this.getResidueColor(c[this.name] ? this.name : "*", d) : this.helix ? this.entire.front ? d.proteins_ribbonCartoonHelixPrimaryColor : d.proteins_ribbonCartoonHelixSecondaryColor : this.sheet ? d.proteins_ribbonCartoonSheetColor : this.entire.front ? d.proteins_primaryColor : d.proteins_secondaryColor
    };
    d.getResidueColor = function(d,
        b) {
        var a = c[d];
        if ("shapely" === b.proteins_residueColor) return a.shapelyColor;
        if ("amino" === b.proteins_residueColor) return a.aminoColor;
        if ("polarity" === b.proteins_residueColor) {
            if (a.polar) return "#C10000"
        } else if ("acidity" === b.proteins_residueColor) {
            if (1 === a.acidity) return "#0000FF";
            if (-1 === a.acidity) return "#FF0000";
            if (!a.polar) return "#773300"
        }
        return "#FFFFFF"
    };
    d.render = function(d, b, a) {
        if (this.entire.partitions && this.pi !== this.entire.partitions.lastRender) {
            var c = this.entire.partitions[this.pi];
            d.bindBuffer(d.ARRAY_BUFFER,
                c.vertexPositionBuffer);
            d.vertexAttribPointer(d.shader.vertexPositionAttribute, c.vertexPositionBuffer.itemSize, d.FLOAT, !1, 0, 0);
            d.bindBuffer(d.ARRAY_BUFFER, c.vertexNormalBuffer);
            d.vertexAttribPointer(d.shader.vertexNormalAttribute, c.vertexNormalBuffer.itemSize, d.FLOAT, !1, 0, 0);
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, c.vertexIndexBuffer);
            this.entire.partitions.lastRender = this.pi
        }
        this.vertexIndexBuffer || (this.vertexIndexBuffer = d.createBuffer(), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer), d.bufferData(d.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(this.indexes), d.STATIC_DRAW), this.vertexIndexBuffer.itemSize = 1, this.vertexIndexBuffer.numItems = this.indexes.length);
        d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, this.vertexIndexBuffer);
        a || "rainbow" === b.proteins_residueColor || d.material.setDiffuseColor(d, this.getColor(b));
        d.drawElements(d.TRIANGLES, this.vertexIndexBuffer.numItems, d.UNSIGNED_SHORT, 0)
    };
    n.Ribbon = function(d, b, a) {
        var c, f = d[0].lineSegments.length,
            w = d[0].lineSegments[0].length;
        this.partitions = [];
        this.partitions.lastRender = 0;
        this.front =
            0 < b;
        for (var q = 0, v = d.length; q < v; q++) {
            if (!n || 65E3 < n.positionData.length) {
                0 < this.partitions.length && q--;
                var n = {
                    count: 0,
                    positionData: [],
                    normalData: []
                };
                this.partitions.push(n)
            }
            var u = d[q];
            n.count++;
            for (c = 0; c < f; c++)
                for (var y = a ? u.lineSegmentsCartoon[c] : u.lineSegments[c], B = 0 === c, e = !1, l = 0; l < w; l++) {
                    var x = y[l],
                        A = q,
                        z = l + 1;
                    q === d.length - 1 && l === w - 1 ? z-- : l === w - 1 && (A++, z = 0);
                    var z = a ? d[A].lineSegmentsCartoon[c][z] : d[A].lineSegments[c][z],
                        A = !1,
                        D = c + 1;
                    c === f - 1 && (D -= 2, A = !0);
                    var D = a ? u.lineSegmentsCartoon[D][l] : u.lineSegments[D][l],
                        z = [z.x - x.x, z.y - x.y, z.z - x.z],
                        D = [D.x - x.x, D.y - x.y, D.z - x.z],
                        E = m.cross(z, D, []);
                    0 === l && (m.normalize(z), m.scale(z, -1), n.normalData.push(z[0], z[1], z[2]), n.positionData.push(x.x, x.y, x.z));
                    B || e ? (m.normalize(D), m.scale(D, -1), n.normalData.push(D[0], D[1], D[2]), n.positionData.push(x.x, x.y, x.z), B && l === w - 1 && (B = !1, l = -1)) : (m.normalize(E), (A && !this.front || !A && this.front) && m.scale(E, -1), n.normalData.push(E[0], E[1], E[2]), m.scale(E, p.abs(b)), n.positionData.push(x.x + E[0], x.y + E[1], x.z + E[2]), c === f - 1 && l === w - 1 && (e = !0, l = -1));
                    if (-1 === l || l === w - 1) m.normalize(z), n.normalData.push(z[0], z[1], z[2]), n.positionData.push(x.x, x.y, x.z)
                }
        }
        f += 2;
        w += 2;
        this.segments = [];
        this.partitionSegments = [];
        b = 0;
        for (u = this.partitions.length; b < u; b++) {
            n = this.partitions[b];
            y = [];
            q = 0;
            for (v = n.count - 1; q < v; q++) {
                var G = q;
                for (c = 0; c < b; c++) G += this.partitions[c].count - 1;
                G = d[G];
                e = q * f * w;
                B = [];
                c = 0;
                for (x = f - 1; c < x; c++)
                    for (A = e + c * w, l = 0; l < w - 1; l++) z = 1, q === v && (z = 0), z = [A + l, A + w + l, A + w + l + z, A + l, A + l + z, A + w + l + z], l !== w - 1 && (this.front ? B.push(z[0], z[1], z[2], z[3], z[5], z[4]) : B.push(z[0],
                        z[2], z[1], z[3], z[4], z[5])), l !== w - 2 || q === n.count - 2 && b === this.partitions.length - 1 || (D = f * w - l, z[2] += D, z[4] += D, z[5] += D), this.front ? y.push(z[0], z[1], z[2], z[3], z[5], z[4]) : y.push(z[0], z[2], z[1], z[3], z[4], z[5]);
                a && G.split && (c = new k(this, g, y, b), c.helix = G.helix, c.sheet = G.sheet, this.partitionSegments.push(c), y = []);
                this.segments.push(new k(this, G.name, B, b))
            }
            c = new k(this, g, y, b);
            c.helix = G.helix;
            c.sheet = G.sheet;
            this.partitionSegments.push(c)
        }
        this.storeData(this.partitions[0].positionData, this.partitions[0].normalData);
        1 === this.partitions.length && (this.partitions = g)
    };
    (n.Ribbon.prototype = new n._Mesh).render = function(d, b) {
        this.bindBuffers(d);
        var a = b.macro_colorByChain ? this.chainColor : g;
        a || (a = this.front ? b.proteins_primaryColor : b.proteins_secondaryColor);
        d.material.setDiffuseColor(d, a);
        for (var a = 0, c = this.partitionSegments.length; a < c; a++) this.partitionSegments[a].render(d, b, !b.proteins_ribbonCartoonize)
    }
})(ChemDoodle.RESIDUE, ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(c, n, p, m, g) {
    n.Light = function(c, d, f) {
        this.camera = new n.Camera;
        this.lightScene(c, d, f)
    };
    g = n.Light.prototype;
    g.lightScene = function(g, d, f) {
        this.diffuseRGB = c.getRGB(g, 1);
        this.specularRGB = c.getRGB(d, 1);
        this.direction = f;
        this.updateView()
    };
    g.updateView = function() {
        var c = p.normalize(this.direction, []),
            d = p.scale(c, (this.camera.near - this.camera.far) / 2 - this.camera.near, []),
            c = p.equal(c, [0, 1, 0]) ? [0, 0, 1] : [0, 1, 0];
        m.lookAt(d, [0, 0, 0], c, this.camera.viewMatrix);
        this.camera.orthogonalProjectionMatrix()
    }
})(ChemDoodle.math,
    ChemDoodle.structures.d3, ChemDoodle.lib.vec3, ChemDoodle.lib.mat4);
(function(c, n) {
    c.Line = function() {
        this.storeData([0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0])
    };
    c.Line.prototype = new c._Mesh
})(ChemDoodle.structures.d3);
(function(c, n, p) {
    n.Material = function() {};
    n = n.Material.prototype;
    n.setTempColors = function(m, g, k, d, f) {
        g && m.shader.setMaterialAmbientColor(m, c.getRGB(g, 1));
        k && m.shader.setMaterialDiffuseColor(m, c.getRGB(k, 1));
        d && m.shader.setMaterialSpecularColor(m, c.getRGB(d, 1));
        m.shader.setMaterialShininess(m, f);
        m.shader.setMaterialAlpha(m, 1)
    };
    n.setDiffuseColor = function(m, g) {
        m.shader.setMaterialDiffuseColor(m, c.getRGB(g, 1))
    };
    n.setAlpha = function(c, g) {
        c.shader.setMaterialAlpha(c, g)
    }
})(ChemDoodle.math, ChemDoodle.structures.d3);
(function(c, n, p, m) {
    c.Picker = function() {};
    c = c.Picker.prototype;
    c.init = function(c) {
        this.framebuffer = c.createFramebuffer();
        var g = c.createTexture(),
            d = c.createRenderbuffer();
        c.bindTexture(c.TEXTURE_2D, g);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
        c.bindRenderbuffer(c.RENDERBUFFER, d);
        c.bindFramebuffer(c.FRAMEBUFFER,
            this.framebuffer);
        c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, g, 0);
        c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, d);
        c.bindTexture(c.TEXTURE_2D, null);
        c.bindRenderbuffer(c.RENDERBUFFER, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    };
    c.setDimension = function(c, k, d) {
        c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer);
        var f = c.getFramebufferAttachmentParameter(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME);
        c.isRenderbuffer(f) && (c.bindRenderbuffer(c.RENDERBUFFER,
            f), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, k, d), c.bindRenderbuffer(c.RENDERBUFFER, null));
        f = c.getFramebufferAttachmentParameter(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME);
        c.isTexture(f) && (c.bindTexture(c.TEXTURE_2D, f), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, k, d, 0, c.RGBA, c.UNSIGNED_BYTE, null), c.bindTexture(c.TEXTURE_2D, null));
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    }
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function(c, n, p) {
    c.Pill = function(c, g, k, d) {
        var f = 1,
            b = 2 * c;
        g -= b;
        0 > g ? (f = 0, g += b) : g < b && (f = g / b, g = b);
        for (var b = [], a = [], h = 0; h <= k; h++)
            for (var r = h * n.PI / k, m = n.sin(r), q = n.cos(r) * f, r = 0; r <= d; r++) {
                var v = 2 * r * n.PI / d,
                    p = n.sin(v),
                    v = n.cos(v) * m,
                    u = q,
                    p = p * m;
                a.push(v, u, p);
                b.push(c * v, c * u + (h < k / 2 ? g : 0), c * p)
            }
        c = [];
        d += 1;
        for (h = 0; h < k; h++)
            for (r = 0; r < d; r++) g = h * d + r % d, f = g + d, c.push(g, g + 1, f), r < d - 1 && c.push(f, g + 1, f + 1);
        this.storeData(b, a, c)
    };
    c.Pill.prototype = new c._Mesh
})(ChemDoodle.structures.d3, Math);
(function(c, n, p, m, g, k, d, f, b) {
    function a(a, b, d) {
        var c = new p.Residue(-1);
        c.cp1 = c.cp2 = new p.Atom("", a, b, d);
        return c
    }

    function h(a, b) {
        this.a1 = a;
        this.a2 = b
    }

    function r(a, b, d) {
        this.a1 = a;
        this.a2 = b;
        this.vx = d
    }
    n = h.prototype;
    n.render = function(a, b) {
        var f = this.a1,
            h = this.a2,
            q = 1.001 * f.distance3D(h),
            r = b.proteins_cylinderHelixDiameter / 2,
            q = [r, q, r],
            r = k.translate(k.identity(), [f.x, f.y, f.z]),
            m = [0, 1, 0],
            e = 0;
        f.x === h.x && f.z === h.z ? (m = [0, 0, 1], h.y < f.y && (e = g.PI)) : (f = [h.x - f.x, h.y - f.y, h.z - f.z], e = c.vec3AngleFrom(m, f), m = d.cross(m, f, []));
        0 !== e && k.rotate(r, e, m);
        k.scale(r, q);
        a.shader.setMatrixUniforms(a, r);
        a.drawArrays(a.TRIANGLE_STRIP, 0, a.cylinderClosedBuffer.vertexPositionBuffer.numItems)
    };
    n = r.prototype;
    n.render = function(a, b) {
        this.specs && (b = this.specs);
        var c = 1.001 * this.a1.distance3D(this.a2),
            f = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
            h = d.cross(f, this.vx, []),
            g = d.cross(h, f, []);
        d.normalize(g);
        d.normalize(f);
        d.normalize(h);
        f = [g[0], g[1], g[2], 0, f[0], f[1], f[2], 0, h[0], h[1], h[2], 0, this.a1.x, this.a1.y, this.a1.z, 1];
        k.scale(f, [b.proteins_plankSheetWidth, c, b.proteins_tubeThickness]);
        a.shader.setMatrixUniforms(a, f);
        a.drawArrays(a.TRIANGLE_STRIP, 0, a.boxBuffer.vertexPositionBuffer.numItems)
    };
    m.PipePlank = function(b, c) {
        this.tubes = [];
        this.helixCylinders = [];
        this.sheetPlanks = [];
        this.chainColor = b.chainColor;
        var f = [],
            k = [],
            q = [],
            w = [];
        if (1 < b.length) {
            var n = b[0],
                e = b[1];
            e.helix ? q.push(n) : e.sheet ? w.push(n) : k.push(n)
        }
        n = 1;
        for (e = b.length - 1; n <= e; n++) {
            var l = b[n];
            if (l.helix) {
                if (q.push(l), l.arrow) {
                    var x = d.create();
                    var A = d.create();
                    if (2 ==
                        q.length) x = [q[0].cp1.x, q[0].cp1.y, q[0].cp1.z], A = [q[1].cp1.x, q[1].cp1.y, q[1].cp1.z];
                    else {
                        3 == q.length && q.unshift(b[g.max(n - 3, 0)]);
                        var z = [];
                        var D = [];
                        var E = 1;
                        for (var G = q.length - 1; E < G; E++) {
                            var F = [q[E].cp1.x, q[E].cp1.y, q[E].cp1.z],
                                H = [q[E - 1].cp1.x, q[E - 1].cp1.y, q[E - 1].cp1.z],
                                K = [q[E + 1].cp1.x, q[E + 1].cp1.y, q[E + 1].cp1.z];
                            d.subtract(H, F);
                            d.subtract(K, F);
                            var I = d.scale(H, d.length(K), []),
                                H = d.scale(K, d.length(H), []),
                                I = d.normalize(d.add(I, H, []));
                            z.push(F);
                            D.push(I)
                        }
                        q = [];
                        E = 0;
                        for (G = z.length - 1; E < G; E++) {
                            var H = z[E],
                                K = D[E],
                                F = z[E + 1],
                                I = D[E + 1],
                                J = d.normalize(d.cross(K, I, [])),
                                N = d.subtract(F, H, []),
                                W = d.dot(N, J),
                                J = d.scale(J, W, []),
                                J = d.length(J),
                                N = d.length(N),
                                N = -(J * J - N * N) / (2 * d.dot(d.subtract(H, F, []), I)),
                                H = d.add(H, d.scale(K, N, []), []),
                                F = d.add(F, d.scale(I, N, []), []);
                            q.push([H, F])
                        }
                        E = q[0][0];
                        G = q[0][1];
                        G = d.subtract(E, G, []);
                        d.add(E, G, x);
                        E = q[q.length - 1][1];
                        G = q[q.length - 1][0];
                        G = d.subtract(E, G, []);
                        d.add(E, G, A)
                    }
                    E = new p.Atom("", x[0], x[1], x[2]);
                    G = new p.Atom("", A[0], A[1], A[2]);
                    this.helixCylinders.push(new h(E, G));
                    q = [];
                    G = d.subtract(x, A, []);
                    d.normalize(G);
                    d.scale(G, .5);
                    0 < k.length && (E = d.add(x, G, []), z = k[k.length - 1].cp1, z = d.subtract([z.x, z.y, z.z], E, []), d.normalize(z), d.scale(z, .5), d.add(E, z), z = new p.Residue(-1), z.cp1 = z.cp2 = new p.Atom("", E[0], E[1], E[2]), k.push(z), z = a(x[0], x[1], x[2]), k.push(z), f.push(k));
                    k = [];
                    n < e && (z = a(A[0], A[1], A[2]), k.push(z), x = b[n + 1], x.sheet ? (k.push(l), k.push(l), f.push(k), k = [], w.push(l)) : (d.scale(G, -1), E = d.add(A, G, []), l = x.cp1, l = d.subtract([l.x, l.y, l.z], E, []), d.normalize(l), d.scale(l, .5), d.add(E, l), z = a(E[0], E[1], E[2]),
                        k.push(z)))
                }
            } else if (l.sheet) {
                if (w.push(l), l.arrow) {
                    A = [0, 0, 0];
                    x = [0, 0, 0];
                    E = 0;
                    for (G = w.length; E < G; E++) D = w[E].guidePointsLarge, z = D[0], D = D[D.length - 1], d.add(A, [z.x, z.y, z.z]), d.add(x, [D.x, D.y, D.z]);
                    d.scale(A, 1 / G);
                    d.scale(x, 1 / G);
                    x = d.subtract(A, x);
                    A = w[w.length - 1].guidePointsSmall[0];
                    this.sheetPlanks.push(new r(w[0].guidePointsSmall[0], A, x));
                    w = [];
                    n < e && (x = b[n + 1], x.sheet ? w.push(l) : (z = a(A.x, A.y, A.z), k.push(z)))
                }
            } else k.push(l), n < e && (x = b[n + 1], x.sheet && (D = l.guidePointsSmall[0], z = a(D.x, D.y, D.z), k.push(z), f.push(k),
                k = [], w.push(l)))
        }
        1 < k.length && (2 == k.length && k.push(k[k.length - 1]), f.push(k));
        k = [];
        w = 0;
        for (l = f.length; w < l; w++) {
            A = f[w];
            x = [];
            n = 0;
            for (e = A.length - 1; n <= e; n++) x.push(A[n].cp1);
            k.push(x)
        }
        n = 0;
        for (e = k.length; n < e; n++) f = new m.CatmullTube(k[n], c.proteins_tubeThickness, c.proteins_tubeResolution_3D, c.proteins_horizontalResolution), f.chainColor = b.chainColor, this.tubes.push(f)
    };
    n = m.PipePlank.prototype = new m._Mesh;
    n.render = function(a, d) {
        a.material.setTempColors(a, d.proteins_materialAmbientColor_3D, b, d.proteins_materialSpecularColor_3D,
            d.proteins_materialShininess_3D);
        a.material.setDiffuseColor(a, d.macro_colorByChain ? this.chainColor : d.proteins_tubeColor);
        for (var c = 0, f = this.tubes.length; c < f; c++) a.shader.setMatrixUniforms(a), this.tubes[c].render(a, d);
        d.macro_colorByChain || a.material.setDiffuseColor(a, d.proteins_ribbonCartoonHelixSecondaryColor);
        a.cylinderClosedBuffer.bindBuffers(a);
        c = 0;
        for (f = this.helixCylinders.length; c < f; c++) this.helixCylinders[c].render(a, d);
        d.macro_colorByChain || a.material.setDiffuseColor(a, d.proteins_ribbonCartoonSheetColor);
        a.boxBuffer.bindBuffers(a);
        c = 0;
        for (f = this.sheetPlanks.length; c < f; c++) this.sheetPlanks[c].render(a, d)
    }
})(ChemDoodle.extensions, ChemDoodle.RESIDUE, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3, ChemDoodle.math);
(function(c, n) {
    c.Quad = function() {
        this.storeData([-1, 1, 0, -1, -1, 0, 1, 1, 0, 1, -1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    };
    c.Quad.prototype = new c._Mesh
})(ChemDoodle.structures.d3);
(function(c, n, p, m) {
    n.Shape = function(g, k) {
        for (var d = g.length, f = [], b = [], a = new c.Point, h = 0, r = d; h < r; h++) {
            var m = h + 1;
            h === r - 1 && (m = 0);
            for (var q = g[h], m = g[m], n = p.cross([0, 0, 1], [m.x - q.x, m.y - q.y, 0]), C = 0; 2 > C; C++) f.push(q.x, q.y, k / 2), f.push(q.x, q.y, -k / 2), f.push(m.x, m.y, k / 2), f.push(m.x, m.y, -k / 2);
            for (C = 0; 4 > C; C++) b.push(n[0], n[1], n[2]);
            b.push(0, 0, 1);
            b.push(0, 0, -1);
            b.push(0, 0, 1);
            b.push(0, 0, -1);
            a.add(q)
        }
        a.x /= d;
        a.y /= d;
        b.push(0, 0, 1);
        f.push(a.x, a.y, k / 2);
        b.push(0, 0, -1);
        f.push(a.x, a.y, -k / 2);
        a = [];
        q = 8 * d;
        h = 0;
        for (r = d; h < r; h++) d =
            8 * h, a.push(d), a.push(d + 3), a.push(d + 1), a.push(d), a.push(d + 2), a.push(d + 3), a.push(d + 4), a.push(q), a.push(d + 6), a.push(d + 5), a.push(d + 7), a.push(q + 1);
        this.storeData(f, b, a)
    };
    n.Shape.prototype = new n._Mesh
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(c, n, p, m) {
    c.Star = function() {
        for (var c = [.8944, .4472, 0, .2764, .4472, .8506, .2764, .4472, -.8506, -.7236, .4472, .5257, -.7236, .4472, -.5257, -.3416, .4472, 0, -.1056, .4472, .3249, -.1056, .4472, -.3249, .2764, .4472, .2008, .2764, .4472, -.2008, -.8944, -.4472, 0, -.2764, -.4472, .8506, -.2764, -.4472, -.8506, .7236, -.4472, .5257, .7236, -.4472, -.5257, .3416, -.4472, 0, .1056, -.4472, .3249, .1056, -.4472, -.3249, -.2764, -.4472, .2008, -.2764, -.4472, -.2008, -.5527, .1058, 0, -.1708, .1058, .5527, -.1708, .1058, -.5527, .4471, .1058, .3249, .4471, .1058, -.3249, .5527, -.1058, 0, .1708, -.1058, .5527, .1708, -.1058, -.5527, -.4471, -.1058, .3249, -.4471, -.1058, -.3249, 0, 1, 0, 0, -1, 0], k = [0, 9, 8, 2, 7, 9, 4, 5, 7, 3, 6, 5, 1, 8, 6, 0, 8, 23, 30, 6, 8, 3, 21, 6, 11, 26, 21, 13, 23, 26, 2, 9, 24, 30, 8, 9, 1, 23, 8, 13, 25, 23, 14, 24, 25, 4, 7, 22, 30, 9, 7, 0, 24, 9, 14, 27, 24, 12, 22, 27, 3, 5, 20, 30, 7, 5, 2, 22, 7, 12, 29, 22, 10, 20, 29, 1, 6, 21, 30, 5, 6, 4, 20, 5, 10, 28, 20, 11, 21, 28, 10, 19, 18, 12, 17, 19, 14, 15, 17, 13, 16, 15, 11, 18, 16, 31, 19, 17, 14, 17, 27, 2, 27, 22, 4, 22, 29, 10, 29, 19, 31, 18, 19, 12, 19, 29, 4, 29, 20, 3, 20, 28, 11, 28, 18, 31, 16, 18, 10, 18, 28, 3, 28, 21,
                1, 21, 26, 13, 26, 16, 31, 15, 16, 11, 16, 26, 1, 26, 23, 0, 23, 25, 14, 25, 15, 31, 17, 15, 13, 15, 25, 0, 25, 24, 2, 24, 27, 12, 27, 17
            ], d = [], f = [], b = [], a = 0, h = k.length; a < h; a += 3) {
            var r = 3 * k[a],
                m = 3 * k[a + 1],
                q = 3 * k[a + 2],
                r = [c[r], c[r + 1], c[r + 2]],
                m = [c[m], c[m + 1], c[m + 2]],
                q = [c[q], c[q + 1], c[q + 2]],
                n = p.cross([q[0] - m[0], q[1] - m[1], q[2] - m[2]], [r[0] - m[0], r[1] - m[1], r[2] - m[2]], []);
            p.normalize(n);
            d.push(r[0], r[1], r[2], m[0], m[1], m[2], q[0], q[1], q[2]);
            f.push(n[0], n[1], n[2], n[0], n[1], n[2], n[0], n[1], n[2]);
            b.push(a, a + 1, a + 2)
        }
        this.storeData(d, f, b)
    };
    c.Star.prototype =
        new c._Mesh
})(ChemDoodle.structures.d3, Math, ChemDoodle.lib.vec3);
(function(c, n, p, m, g) {
    var k = 1;
    m.devicePixelRatio && (k = m.devicePixelRatio);
    c.TextImage = function() {
        this.ctx = p.createElement("canvas").getContext("2d");
        this.data = [];
        this.text = "";
        this.charHeight = 0
    };
    c = c.TextImage.prototype;
    c.init = function(d) {
        this.textureImage = d.createTexture();
        d.bindTexture(d.TEXTURE_2D, this.textureImage);
        d.pixelStorei(d.UNPACK_FLIP_Y_WEBGL, !1);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE);
        d.texParameteri(d.TEXTURE_2D,
            d.TEXTURE_MIN_FILTER, d.NEAREST);
        d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST);
        d.bindTexture(d.TEXTURE_2D, null);
        this.updateFont(d, 12, ["Sans-serif"], !1, !1, !1)
    };
    c.charData = function(d) {
        d = this.text.indexOf(d);
        return 0 <= d ? this.data[d] : null
    };
    c.updateFont = function(d, c, b, a, h, g) {
        var f = this.ctx,
            q = this.ctx.canvas,
            r = [],
            m = "";
        c *= k;
        var u = n.getFontString(c, b, a, h);
        f.font = u;
        f.save();
        h = 0;
        c *= 1.5;
        b = 32;
        for (a = 127; b < a; b++) {
            var p = String.fromCharCode(b);
            var B = f.measureText(p).width;
            r.push({
                text: p,
                width: B,
                height: c
            });
            h += 2 * B
        }
        var e = ["\u00b0", "\u212b", "\u00ae"];
        b = 0;
        for (a = e.length; b < a; b++) p = e[b], B = f.measureText(p).width, r.push({
            text: p,
            width: B,
            height: c
        }), h += 2 * B;
        b = Math.ceil(Math.sqrt(h * c) / c);
        h = Math.ceil(h / (b - 1));
        q.width = h;
        q.height = b * c;
        f.font = u;
        f.textAlign = "left";
        f.textBaseline = "middle";
        f.strokeStyle = "#000";
        f.lineWidth = 1.4;
        f.fillStyle = "#fff";
        b = B = u = 0;
        for (a = r.length; b < a; b++) {
            p = r[b];
            e = 2 * p.width;
            c = p.height;
            var l = p.text;
            B + e > h && (u++, B = 0);
            var x = u * c;
            g && f.strokeText(l, B, x + c / 2);
            f.fillText(l, B, x + c / 2);
            p.x = B;
            p.y = x;
            m += l;
            B += e
        }
        this.text =
            m;
        this.data = r;
        this.charHeight = c;
        d.bindTexture(d.TEXTURE_2D, this.textureImage);
        d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, d.RGBA, d.UNSIGNED_BYTE, q);
        d.bindTexture(d.TEXTURE_2D, null)
    };
    c.pushVertexData = function(d, c, b, a) {
        var f = d.toString().split(""),
            g = this.getHeight(),
            m = this.getWidth();
        d = -this.textWidth(d) / 2 / k;
        for (var q = -this.charHeight / 2 / k, n = 0, p = f.length; n < p; n++) {
            var u = this.charData(f[n]),
                y = u.width,
                B = u.x / m,
                e = B + 1.8 * u.width / m,
                l = u.y / g,
                u = l + u.height / g,
                x = d + 1.8 * y / k,
                A = this.charHeight / 2 / k;
            a.position.push(c[0], c[1], c[2],
                c[0], c[1], c[2], c[0], c[1], c[2], c[0], c[1], c[2], c[0], c[1], c[2], c[0], c[1], c[2]);
            a.texCoord.push(B, l, e, u, e, l, B, l, B, u, e, u);
            a.translation.push(d, A, b, x, q, b, x, A, b, d, A, b, d, q, b, x, q, b);
            d = x + (y - 1.8 * y) / k
        }
    };
    c.getCanvas = function() {
        return this.ctx.canvas
    };
    c.getHeight = function() {
        return this.getCanvas().height
    };
    c.getWidth = function() {
        return this.getCanvas().width
    };
    c.textWidth = function(d) {
        return this.ctx.measureText(d).width
    };
    c.test = function() {
        p.body.appendChild(this.getCanvas())
    };
    c.useTexture = function(d) {
        d.bindTexture(d.TEXTURE_2D,
            this.textureImage)
    }
})(ChemDoodle.structures.d3, ChemDoodle.extensions, document, window);
(function(c, n, p) {
    c.TextMesh = function() {};
    c = c.TextMesh.prototype;
    c.init = function(c) {
        this.vertexPositionBuffer = c.createBuffer();
        this.vertexTexCoordBuffer = c.createBuffer();
        this.vertexTranslationBuffer = c.createBuffer()
    };
    c.setVertexData = function(c, g, k, d) {
        c.bindBuffer(c.ARRAY_BUFFER, g);
        c.bufferData(c.ARRAY_BUFFER, new Float32Array(k), c.STATIC_DRAW);
        g.itemSize = d;
        g.numItems = k.length / d
    };
    c.storeData = function(c, g, k, d) {
        this.setVertexData(c, this.vertexPositionBuffer, g, 3);
        this.setVertexData(c, this.vertexTexCoordBuffer,
            k, 2);
        this.setVertexData(c, this.vertexTranslationBuffer, d, 3)
    };
    c.bindBuffers = function(c) {
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexPositionBuffer);
        c.vertexAttribPointer(c.shader.vertexPositionAttribute, this.vertexPositionBuffer.itemSize, c.FLOAT, !1, 0, 0);
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexTexCoordBuffer);
        c.vertexAttribPointer(c.shader.vertexTexCoordAttribute, this.vertexTexCoordBuffer.itemSize, c.FLOAT, !1, 0, 0);
        c.bindBuffer(c.ARRAY_BUFFER, this.vertexTranslationBuffer);
        c.vertexAttribPointer(c.shader.vertexNormalAttribute,
            this.vertexTranslationBuffer.itemSize, c.FLOAT, !1, 0, 0)
    };
    c.render = function(c) {
        var g = this.vertexPositionBuffer.numItems;
        g && (this.bindBuffers(c), c.drawArrays(c.TRIANGLES, 0, g))
    }
})(ChemDoodle.structures.d3, Math);
(function(c, n, p, m, g, k, d) {
    p.Torsion = function(d, b, a, c) {
        this.a1 = d;
        this.a2 = b;
        this.a3 = a;
        this.a4 = c
    };
    c = p.Torsion.prototype = new p._Measurement;
    c.calculateData = function(d) {
        var b = [],
            a = [],
            c = [],
            f = this.a2.distance3D(this.a1),
            g = this.a2.distance3D(this.a3);
        this.distUse = m.min(f, g) / 2;
        var g = [this.a2.x - this.a1.x, this.a2.y - this.a1.y, this.a2.z - this.a1.z],
            f = [this.a3.x - this.a2.x, this.a3.y - this.a2.y, this.a3.z - this.a2.z],
            q = [this.a4.x - this.a3.x, this.a4.y - this.a3.y, this.a4.z - this.a3.z],
            n = k.cross(g, f, []),
            q = k.cross(f, q, []);
        k.scale(g,
            k.length(f));
        this.torsion = m.atan2(k.dot(g, q), k.dot(n, q));
        g = k.normalize(k.cross(n, f, []));
        n = k.normalize(k.cross(f, g, []));
        this.pos = k.add([this.a2.x, this.a2.y, this.a2.z], k.scale(k.normalize(f, []), this.distUse));
        var q = [],
            p = d.measurement_angleBands_3D;
        for (d = 0; d <= p; ++d) {
            var u = this.torsion * d / p;
            var y = k.scale(g, m.cos(u), []);
            u = k.scale(n, m.sin(u), []);
            y = k.scale(k.normalize(k.add(y, u, [])), this.distUse);
            0 == d && (q = y);
            b.push(this.pos[0] + y[0], this.pos[1] + y[1], this.pos[2] + y[2]);
            a.push(0, 0, 0);
            d < p && c.push(d, d + 1)
        }
        this.vecText =
            k.normalize(k.add(q, y, []));
        f = k.normalize(f, []);
        k.scale(f, .0625);
        u = this.torsion - 2 * m.asin(.125) * this.torsion / m.abs(this.torsion);
        y = k.scale(g, m.cos(u), []);
        u = k.scale(n, m.sin(u), []);
        y = k.scale(k.normalize(k.add(y, u, [])), this.distUse);
        b.push(this.pos[0] + f[0] + y[0], this.pos[1] + f[1] + y[1], this.pos[2] + f[2] + y[2]);
        a.push(0, 0, 0);
        b.push(this.pos[0] - f[0] + y[0], this.pos[1] - f[1] + y[1], this.pos[2] - f[2] + y[2]);
        a.push(0, 0, 0);
        c.push(--d, d + 1, d, d + 2);
        this.storeData(b, a, c)
    };
    c.getText = function(d) {
        k.add(this.pos, k.scale(this.vecText,
            this.distUse + .3, []));
        return {
            pos: this.pos,
            value: [n.angleBounds(this.torsion, !0, !0).toFixed(2), " \u00b0"].join("")
        }
    }
})(ChemDoodle.ELEMENT, ChemDoodle.math, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(c, n, p, m, g, k, d, f, b) {
    var a = function(a, b) {
            a.bindBuffer(a.ARRAY_BUFFER, b.vertexPositionBuffer);
            a.vertexAttribPointer(a.shader.vertexPositionAttribute, b.vertexPositionBuffer.itemSize, a.FLOAT, !1, 0, 0);
            a.bindBuffer(a.ARRAY_BUFFER, b.vertexNormalBuffer);
            a.vertexAttribPointer(a.shader.vertexNormalAttribute, b.vertexNormalBuffer.itemSize, a.FLOAT, !1, 0, 0);
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, b.vertexIndexBuffer)
        },
        h = function(a, b, d) {
            var c = g.sqrt(b[1] * b[1] + b[2] * b[2]),
                f = [1, 0, 0, 0, 0, b[2] / c, -b[1] / c, 0, 0, b[1] / c,
                    b[2] / c, 0, 0, 0, 0, 1
                ],
                h = [1, 0, 0, 0, 0, b[2] / c, b[1] / c, 0, 0, -b[1] / c, b[2] / c, 0, 0, 0, 0, 1],
                q = [c, 0, -b[0], 0, 0, 1, 0, 0, b[0], 0, c, 0, 0, 0, 0, 1];
            b = [c, 0, b[0], 0, 0, 1, 0, 0, -b[0], 0, c, 0, 0, 0, 0, 1];
            d = [g.cos(d), -g.sin(d), 0, 0, g.sin(d), g.cos(d), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            var r = k.multiply(f, k.multiply(q, k.multiply(d, k.multiply(b, h, []))));
            this.rotate = function() {
                return k.multiplyVec3(r, a)
            }
        };
    m.Tube = function(b, m, q) {
        var r = b[0].lineSegments[0].length;
        this.partitions = [];
        this.ends = [];
        this.ends.push(b[0].lineSegments[0][0]);
        this.ends.push(b[b.length - 1].lineSegments[0][0]);
        for (var w = [1, 0, 0], u = 0, y = b.length; u < y; u++) {
            if (!B || 65E3 < B.positionData.length) {
                0 < this.partitions.length && u--;
                var B = {
                    count: 0,
                    positionData: [],
                    normalData: [],
                    indexData: []
                };
                this.partitions.push(B)
            }
            var e = b[u];
            B.count++;
            for (var l = Infinity, x = new p.Atom("", b[u].cp1.x, b[u].cp1.y, b[u].cp1.z), A = 0; A < r; A++) {
                var z = e.lineSegments[0][A];
                var D = A === r - 1 ? u === b.length - 1 ? e.lineSegments[0][A - 1] : b[u + 1].lineSegments[0][0] : e.lineSegments[0][A + 1];
                D = [D.x - z.x, D.y - z.y, D.z - z.z];
                d.normalize(D);
                u === b.length - 1 && A === r - 1 && d.scale(D, -1);
                var E = d.cross(D, w, []);
                d.normalize(E);
                d.scale(E, m / 2);
                E = new h(E, D, 2 * Math.PI / q);
                D = 0;
                for (var G = q; D < G; D++) {
                    var F = E.rotate();
                    D === g.floor(q / 4) && (w = [F[0], F[1], F[2]]);
                    B.normalData.push(F[0], F[1], F[2]);
                    B.positionData.push(z.x + F[0], z.y + F[1], z.z + F[2])
                }
                x && (D = z.distance3D(x), D < l && (l = D, b[u].pPoint = z))
            }
        }
        w = 0;
        for (e = this.partitions.length; w < e; w++)
            for (B = this.partitions[w], u = 0, y = B.count - 1; u < y; u++)
                for (l = u * r * q, A = 0, x = r; A < x; A++)
                    for (z = l + A * q, D = 0; D < q; D++) E = z + D, B.indexData.push(E), B.indexData.push(E + q), B.indexData.push(E + q + 1),
                        B.indexData.push(E), B.indexData.push(E + q + 1), B.indexData.push(E + 1);
        this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData);
        q = [new p.Point(2, 0)];
        for (u = 0; 60 > u; u++) B = u / 60 * g.PI, q.push(new p.Point(2 * g.cos(B), -2 * g.sin(B)));
        q.push(new p.Point(-2, 0), new p.Point(-2, 4), new p.Point(2, 4));
        var H = new p.d3.Shape(q, 1);
        this.render = function(e, h) {
            this.bindBuffers(e);
            e.material.setDiffuseColor(e, h.macro_colorByChain ? this.chainColor : h.nucleics_tubeColor);
            e.drawElements(e.TRIANGLES,
                this.vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0);
            if (this.partitions)
                for (var q = 1, l = this.partitions.length; q < l; q++) {
                    var r = this.partitions[q];
                    a(e, r);
                    e.drawElements(e.TRIANGLES, r.vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0)
                }
            e.sphereBuffer.bindBuffers(e);
            for (q = 0; 2 > q; q++) r = this.ends[q], r = k.translate(k.identity(), [r.x, r.y, r.z]), l = m / 2, k.scale(r, [l, l, l]), e.shader.setMatrixUniforms(e, r), e.drawElements(e.TRIANGLES, e.sphereBuffer.vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0);
            e.cylinderBuffer.bindBuffers(e);
            q = 0;
            for (l = b.length - 1; q < l; q++) {
                var u = b[q];
                var w = u.pPoint;
                var v = new p.Atom("", u.cp2.x, u.cp2.y, u.cp2.z);
                r = 1.001 * w.distance3D(v);
                u = [m / 4, r, m / 4];
                r = k.translate(k.identity(), [w.x, w.y, w.z]);
                var y = [0, 1, 0];
                var C = 0;
                var B = [v.x - w.x, v.y - w.y, v.z - w.z];
                w.x === v.x && w.z === v.z ? (y = [0, 0, 1], w.y < w.y && (C = g.PI)) : (C = c.vec3AngleFrom(y, B), y = d.cross(y, B, []));
                0 !== C && k.rotate(r, C, y);
                k.scale(r, u);
                e.shader.setMatrixUniforms(e, r);
                e.drawArrays(e.TRIANGLE_STRIP, 0, e.cylinderBuffer.vertexPositionBuffer.numItems)
            }
            H.bindBuffers(e);
            "none" !==
            h.nucleics_residueColor || h.macro_colorByChain || e.material.setDiffuseColor(e, h.nucleics_baseColor);
            q = 0;
            for (l = b.length - 1; q < l; q++)
                if (u = b[q], v = u.cp2, r = k.translate(k.identity(), [v.x, v.y, v.z]), y = [0, 1, 0], C = 0, w = u.cp3) {
                    B = [w.x - v.x, w.y - v.y, w.z - v.z];
                    v.x === w.x && v.z === w.z ? (y = [0, 0, 1], v.y < v.y && (C = g.PI)) : (C = c.vec3AngleFrom(y, B), y = d.cross(y, B, []));
                    0 !== C && k.rotate(r, C, y);
                    v = [1, 0, 0];
                    C = k.rotate(k.identity([]), C, y);
                    k.multiplyVec3(C, v);
                    C = u.cp4;
                    w = u.cp5;
                    if (C.y !== w.y || C.z !== w.z) C = [w.x - C.x, w.y - C.y, w.z - C.z], w = c.vec3AngleFrom(v,
                        C), 0 > d.dot(B, d.cross(v, C)) && (w *= -1), k.rotateY(r, w);
                    h.macro_colorByChain || ("shapely" === h.nucleics_residueColor ? n[u.name] ? e.material.setDiffuseColor(e, n[u.name].shapelyColor) : e.material.setDiffuseColor(e, n["*"].shapelyColor) : "rainbow" === h.nucleics_residueColor && e.material.setDiffuseColor(e, f.rainbowAt(q, l, h.macro_rainbowColors)));
                    e.shader.setMatrixUniforms(e, r);
                    e.drawElements(e.TRIANGLES, H.vertexIndexBuffer.numItems, e.UNSIGNED_SHORT, 0)
                }
        }
    };
    m.Tube.prototype = new m._Mesh;
    m.CatmullTube = function(a, b, c, f) {
        var k = [];
        a.push(a[a.length - 1]);
        for (var q = 0, m = a.length - 2; q <= m; q++) {
            for (var r = a[0 == q ? 0 : q - 1], e = a[q + 0], l = a[q + 1], n = a[q == m ? q + 1 : q + 2], w = [], v = 0; v < f; v++) {
                var D = v / f;
                q == m && (D = v / (f - 1));
                D = new p.Atom("C", .5 * (2 * e.x + (l.x - r.x) * D + (2 * r.x - 5 * e.x + 4 * l.x - n.x) * D * D + (3 * e.x - r.x - 3 * l.x + n.x) * D * D * D), .5 * (2 * e.y + (l.y - r.y) * D + (2 * r.y - 5 * e.y + 4 * l.y - n.y) * D * D + (3 * e.y - r.y - 3 * l.y + n.y) * D * D * D), .5 * (2 * e.z + (l.z - r.z) * D + (2 * r.z - 5 * e.z + 4 * l.z - n.z) * D * D + (3 * e.z - r.z - 3 * l.z + n.z) * D * D * D));
                w.push(D)
            }
            k.push(w)
        }
        a = k[0].length;
        this.partitions = [];
        this.ends = [];
        this.ends.push(k[0][0]);
        this.ends.push(k[k.length - 1][0]);
        r = [1, 0, 0];
        q = 0;
        for (m = k.length; q < m; q++) {
            if (!E || 65E3 < E.positionData.length) {
                0 < this.partitions.length && q--;
                var E = {
                    count: 0,
                    positionData: [],
                    normalData: [],
                    indexData: []
                };
                this.partitions.push(E)
            }
            e = k[q];
            E.count++;
            for (v = 0; v < a; v++)
                for (l = e[v], f = v === a - 1 ? q === k.length - 1 ? e[v - 1] : k[q + 1][0] : e[v + 1], f = [f.x - l.x, f.y - l.y, f.z - l.z], d.normalize(f), q === k.length - 1 && v === a - 1 && d.scale(f, -1), n = d.cross(f, r, []), d.normalize(n), d.scale(n, b / 2), n = new h(n, f, 2 * Math.PI / c), f = 0, w = c; f < w; f++) D = n.rotate(), f === g.floor(c /
                    4) && (r = [D[0], D[1], D[2]]), E.normalData.push(D[0], D[1], D[2]), E.positionData.push(l.x + D[0], l.y + D[1], l.z + D[2])
        }
        b = 0;
        for (k = this.partitions.length; b < k; b++)
            for (E = this.partitions[b], q = 0, m = E.count - 1; q < m; q++)
                for (r = q * a * c, v = 0, e = a; v < e; v++)
                    for (l = r + v * c, f = 0; f <= c; f++) n = l + f % c, E.indexData.push(n, n + c);
        this.storeData(this.partitions[0].positionData, this.partitions[0].normalData, this.partitions[0].indexData)
    };
    (m.CatmullTube.prototype = new m._Mesh).render = function(b, d) {
        this.bindBuffers(b);
        for (var c = 0, f = this.partitions.length; c <
            f; c++) {
            var h = this.partitions[c];
            a(b, h);
            b.drawElements(b.TRIANGLE_STRIP, h.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
        }
        b.sphereBuffer.bindBuffers(b);
        for (c = 0; 2 > c; c++) h = this.ends[c], h = k.translate(k.identity(), [h.x, h.y, h.z]), f = d.proteins_tubeThickness / 2, k.scale(h, [f, f, f]), b.shader.setMatrixUniforms(b, h), b.drawElements(b.TRIANGLES, b.sphereBuffer.vertexIndexBuffer.numItems, b.UNSIGNED_SHORT, 0)
    }
})(ChemDoodle.extensions, ChemDoodle.RESIDUE, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4,
    ChemDoodle.lib.vec3, ChemDoodle.math);
(function(c, n, p) {
    c.UnitCell = function(c) {
        this.unitCell = c;
        var g = [],
            k = [],
            d = function(b, a, d, c) {
                g.push(b[0], b[1], b[2]);
                g.push(a[0], a[1], a[2]);
                g.push(d[0], d[1], d[2]);
                g.push(c[0], c[1], c[2]);
                for (b = 0; 4 > b; b++) k.push(0, 0, 0)
            };
        d(c.o, c.x, c.xy, c.y);
        d(c.o, c.y, c.yz, c.z);
        d(c.o, c.z, c.xz, c.x);
        d(c.yz, c.y, c.xy, c.xyz);
        d(c.xyz, c.xz, c.z, c.yz);
        d(c.xy, c.x, c.xz, c.xyz);
        c = [];
        for (d = 0; 6 > d; d++) {
            var f = 4 * d;
            c.push(f, f + 1, f + 1, f + 2, f + 2, f + 3, f + 3, f)
        }
        this.storeData(g, k, c)
    };
    (c.UnitCell.prototype = new c._Mesh).render = function(c, g) {
        c.shader.setMatrixUniforms(c);
        this.bindBuffers(c);
        c.material.setDiffuseColor(c, g.shapes_color);
        c.lineWidth(g.shapes_lineWidth);
        c.drawElements(c.LINES, this.vertexIndexBuffer.numItems, c.UNSIGNED_SHORT, 0)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.vec3);
(function(c, n, p, m) {
    c.Framebuffer = function() {};
    c = c.Framebuffer.prototype;
    c.init = function(c) {
        this.framebuffer = c.createFramebuffer()
    };
    c.setColorTexture = function(c, k, d) {
        d = d === m ? 0 : d;
        c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer);
        c.bindTexture(c.TEXTURE_2D, k);
        c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0 + d, c.TEXTURE_2D, k, 0);
        c.bindTexture(c.TEXTURE_2D, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    };
    c.setColorRenderbuffer = function(c, k, d) {
        d = d === m ? 0 : d;
        c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer);
        c.bindRenderbuffer(c.RENDERBUFFER, k);
        c.framebufferRenderbuffer(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0 + d, c.RENDERBUFFER, k);
        c.bindRenderbuffer(c.RENDERBUFFER, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    };
    c.setDepthTexture = function(c, k) {
        c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer);
        c.bindTexture(c.TEXTURE_2D, k);
        c.framebufferTexture2D(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.TEXTURE_2D, k, 0);
        c.bindTexture(c.TEXTURE_2D, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    };
    c.setDepthRenderbuffer = function(c, k) {
        c.bindFramebuffer(c.FRAMEBUFFER,
            this.framebuffer);
        c.bindRenderbuffer(c.RENDERBUFFER, k);
        c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, k);
        c.bindRenderbuffer(c.RENDERBUFFER, null);
        c.bindFramebuffer(c.FRAMEBUFFER, null)
    };
    c.bind = function(c, k, d) {
        c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffer);
        c.viewport(0, 0, k, d)
    }
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function(c, n, p, m) {
    c.Renderbuffer = function() {};
    c = c.Renderbuffer.prototype;
    c.init = function(c, k) {
        this.renderbuffer = c.createRenderbuffer();
        this.format = k
    };
    c.setParameter = function(c, k, d) {
        this.width = k;
        this.height = d;
        c.bindRenderbuffer(c.RENDERBUFFER, this.renderbuffer);
        c.renderbufferStorage(c.RENDERBUFFER, this.format, this.width, this.height);
        c.bindRenderbuffer(c.RENDERBUFFER, null)
    }
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function(c, n, p, m) {
    n.SSAO = function() {};
    c = n.SSAO.prototype;
    c.initSampleKernel = function(c) {
        for (var g = [], d = 0; d < c; d++) {
            var f = 2 * p.random() - 1,
                b = 2 * p.random() - 1,
                a = 2 * p.random() - 1,
                h = d / c,
                h = .1 + h * h * .9,
                f = f * h,
                b = b * h,
                a = a * h;
            g.push(f, b, a)
        }
        this.sampleKernel = new Float32Array(g)
    };
    c.initNoiseTexture = function(c) {
        for (var g = [], d = 0; 16 > d; d++) g.push(2 * p.random() - 1), g.push(2 * p.random() - 1), g.push(0);
        this.noiseTexture = c.createTexture();
        c.bindTexture(c.TEXTURE_2D, this.noiseTexture);
        c.texImage2D(c.TEXTURE_2D, 0, c.RGB, 4, 4, 0, c.RGB, c.FLOAT,
            new Float32Array(g));
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT);
        c.bindTexture(c.TEXTURE_2D, null)
    }
})(ChemDoodle.math, ChemDoodle.structures.d3, Math);
(function(c, n, p, m) {
    c.Texture = function() {};
    c = c.Texture.prototype;
    c.init = function(c, k, d, f) {
        this.texture = c.createTexture();
        this.type = k;
        this.internalFormat = d;
        this.format = f !== m ? f : d;
        c.bindTexture(c.TEXTURE_2D, this.texture);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
        c.bindTexture(c.TEXTURE_2D, null)
    };
    c.setParameter =
        function(c, k, d) {
            this.width = k;
            this.height = d;
            c.bindTexture(c.TEXTURE_2D, this.texture);
            c.texImage2D(c.TEXTURE_2D, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            c.bindTexture(c.TEXTURE_2D, null)
        }
})(ChemDoodle.structures.d3, ChemDoodle.math, document);
(function(c, n, p, m, g) {
    c._Shader = function() {};
    c = c._Shader.prototype;
    c.useShaderProgram = function(c) {
        c.useProgram(this.gProgram);
        c.shader = this
    };
    c.init = function(c) {
        var d = this.getShader(c, "vertex-shader");
        d || (d = this.loadDefaultVertexShader(c));
        var f = this.getShader(c, "fragment-shader");
        f || (f = this.loadDefaultFragmentShader(c));
        this.gProgram = c.createProgram();
        c.attachShader(this.gProgram, d);
        c.attachShader(this.gProgram, f);
        this.onShaderAttached(c);
        c.linkProgram(this.gProgram);
        c.getProgramParameter(this.gProgram,
            c.LINK_STATUS) || alert("Could not initialize shaders: " + c.getProgramInfoLog(this.gProgram));
        c.useProgram(this.gProgram);
        this.initUniformLocations(c);
        c.useProgram(null)
    };
    c.onShaderAttached = function(c) {
        this.vertexPositionAttribute = 0;
        this.vertexNormalAttribute = 1;
        c.bindAttribLocation(this.gProgram, this.vertexPositionAttribute, "a_vertex_position");
        c.bindAttribLocation(this.gProgram, this.vertexNormalAttribute, "a_vertex_normal")
    };
    c.getShaderFromStr = function(c, d, f) {
        d = c.createShader(d);
        c.shaderSource(d, f);
        c.compileShader(d);
        return c.getShaderParameter(d, c.COMPILE_STATUS) ? d : (alert(shaderScript.type + " " + c.getShaderInfoLog(d)), c.deleteShader(d), g)
    };
    c.enableAttribsArray = function(c) {
        c.enableVertexAttribArray(this.vertexPositionAttribute)
    };
    c.disableAttribsArray = function(c) {
        c.disableVertexAttribArray(this.vertexPositionAttribute)
    };
    c.getShader = function(c, d) {
        var f = m.getElementById(d);
        if (!f) return g;
        for (var b = [], a = f.firstChild; a;) 3 === a.nodeType && b.push(a.textContent), a = a.nextSibling;
        b = b.join("");
        if ("x-shader/x-fragment" ===
            f.type) f = this.getShaderFromStr(c, c.FRAGMENT_SHADER, b);
        else if ("x-shader/x-vertex" === f.type) f = this.getShaderFromStr(c, c.VERTEX_SHADER, b);
        else return g;
        return f
    };
    c.initUniformLocations = function(c) {
        this.modelViewMatrixUniform = c.getUniformLocation(this.gProgram, "u_model_view_matrix");
        this.projectionMatrixUniform = c.getUniformLocation(this.gProgram, "u_projection_matrix")
    };
    c.loadDefaultVertexShader = function(c) {};
    c.loadDefaultFragmentShader = function(c) {};
    c.setMatrixUniforms = function(c, d) {
        d === g ? this.setModelViewMatrix(c,
            c.modelViewMatrix) : this.setModelViewMatrix(c, p.multiply(c.modelViewMatrix, d, []))
    };
    c.setProjectionMatrix = function(c, d) {
        c.uniformMatrix4fv(this.projectionMatrixUniform, !1, d)
    };
    c.setModelViewMatrix = function(c, d) {
        c.uniformMatrix4fv(this.modelViewMatrixUniform, !1, d)
    };
    c.setMaterialAmbientColor = function(c, d) {};
    c.setMaterialDiffuseColor = function(c, d) {};
    c.setMaterialSpecularColor = function(c, d) {};
    c.setMaterialShininess = function(c, d) {};
    c.setMaterialAlpha = function(c, d) {}
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3,
    ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.FXAAShader = function() {};
    var k = c._Shader.prototype;
    c = c.FXAAShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.buffersizeUniform = d.getUniformLocation(this.gProgram, "u_buffersize");
        this.antialiasUniform = d.getUniformLocation(this.gProgram, "u_antialias");
        this.edgeThresholdUniform = d.getUniformLocation(this.gProgram, "u_edge_threshold");
        this.edgeThresholdMinUniform = d.getUniformLocation(this.gProgram, "u_edge_threshold_min");
        this.searchStepsUniform =
            d.getUniformLocation(this.gProgram, "u_search_steps");
        this.searchThresholdUniform = d.getUniformLocation(this.gProgram, "u_search_threshold");
        this.subpixCapUniform = d.getUniformLocation(this.gProgram, "u_subpix_cap");
        this.subpixTrimUniform = d.getUniformLocation(this.gProgram, "u_subpix_trim")
    };
    c.setBuffersize = function(d, c, b) {
        d.uniform2f(this.buffersizeUniform, c, b)
    };
    c.setAntialias = function(d, c) {
        d.uniform1f(this.antialiasUniform, c)
    };
    c.setEdgeThreshold = function(d, c) {
        d.uniform1f(this.edgeThresholdUniform, c)
    };
    c.setEdgeThresholdMin = function(d, c) {
        d.uniform1f(this.edgeThresholdMinUniform, c)
    };
    c.setSearchSteps = function(d, c) {
        d.uniform1i(this.searchStepsUniform, c)
    };
    c.setSearchThreshold = function(d, c) {
        d.uniform1f(this.searchThresholdUniform, c)
    };
    c.setSubpixCap = function(d, c) {
        d.uniform1f(this.subpixCapUniform, c)
    };
    c.setSubpixTrim = function(d, c) {
        d.uniform1f(this.subpixTrimUniform, c)
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        return this.getShaderFromStr(d, d.FRAGMENT_SHADER, "precision mediump float;\nconst int fxaaMaxSearchSteps \x3d 128;\nuniform float u_edge_threshold;\nuniform float u_edge_threshold_min;\nuniform int u_search_steps;\nuniform float u_search_threshold;\nuniform float u_subpix_cap;\nuniform float u_subpix_trim;\nuniform sampler2D u_sampler0;\nuniform vec2 u_buffersize;\nuniform bool u_antialias;\nvarying vec2 v_texcoord;\nfloat FxaaLuma(vec3 rgb) {\nreturn rgb.y * (0.587/0.299) + rgb.x;\n}\nvec3 FxaaLerp3(vec3 a, vec3 b, float amountOfA) {\nreturn (vec3(-amountOfA) * b) + ((a * vec3(amountOfA)) + b);\n}\nvec4 FxaaTexOff(sampler2D tex, vec2 pos, vec2 off, vec2 rcpFrame) {\nreturn texture2D(tex, pos + off * rcpFrame);\n}\nvec3 FxaaPixelShader(vec2 pos, sampler2D tex, vec2 rcpFrame) {\nfloat subpix_trim_scale \x3d (1.0/(1.0 - u_subpix_trim));\nvec3 rgbN \x3d FxaaTexOff(tex, pos.xy, vec2( 0.,-1.), rcpFrame).xyz;\nvec3 rgbW \x3d FxaaTexOff(tex, pos.xy, vec2(-1., 0.), rcpFrame).xyz;\nvec3 rgbM \x3d FxaaTexOff(tex, pos.xy, vec2( 0., 0.), rcpFrame).xyz;\nvec3 rgbE \x3d FxaaTexOff(tex, pos.xy, vec2( 1., 0.), rcpFrame).xyz;\nvec3 rgbS \x3d FxaaTexOff(tex, pos.xy, vec2( 0., 1.), rcpFrame).xyz;\nfloat lumaN \x3d FxaaLuma(rgbN);\nfloat lumaW \x3d FxaaLuma(rgbW);\nfloat lumaM \x3d FxaaLuma(rgbM);\nfloat lumaE \x3d FxaaLuma(rgbE);\nfloat lumaS \x3d FxaaLuma(rgbS);\nfloat rangeMin \x3d min(lumaM, min(min(lumaN, lumaW), min(lumaS, lumaE)));\nfloat rangeMax \x3d max(lumaM, max(max(lumaN, lumaW), max(lumaS, lumaE)));\nfloat range \x3d rangeMax - rangeMin;\nif(range \x3c max(u_edge_threshold_min, rangeMax * u_edge_threshold)) {\nreturn rgbM;\n}\nvec3 rgbL \x3d rgbN + rgbW + rgbM + rgbE + rgbS;\nfloat lumaL \x3d (lumaN + lumaW + lumaE + lumaS) * 0.25;\nfloat rangeL \x3d abs(lumaL - lumaM);\nfloat blendL \x3d max(0.0, (rangeL / range) - u_subpix_trim) * subpix_trim_scale;\nblendL \x3d min(u_subpix_cap, blendL);\nvec3 rgbNW \x3d FxaaTexOff(tex, pos.xy, vec2(-1.,-1.), rcpFrame).xyz;\nvec3 rgbNE \x3d FxaaTexOff(tex, pos.xy, vec2( 1.,-1.), rcpFrame).xyz;\nvec3 rgbSW \x3d FxaaTexOff(tex, pos.xy, vec2(-1., 1.), rcpFrame).xyz;\nvec3 rgbSE \x3d FxaaTexOff(tex, pos.xy, vec2( 1., 1.), rcpFrame).xyz;\nrgbL +\x3d (rgbNW + rgbNE + rgbSW + rgbSE);\nrgbL *\x3d vec3(1.0/9.0);\nfloat lumaNW \x3d FxaaLuma(rgbNW);\nfloat lumaNE \x3d FxaaLuma(rgbNE);\nfloat lumaSW \x3d FxaaLuma(rgbSW);\nfloat lumaSE \x3d FxaaLuma(rgbSE);\nfloat edgeVert \x3d\nabs((0.25 * lumaNW) + (-0.5 * lumaN) + (0.25 * lumaNE)) +\nabs((0.50 * lumaW ) + (-1.0 * lumaM) + (0.50 * lumaE )) +\nabs((0.25 * lumaSW) + (-0.5 * lumaS) + (0.25 * lumaSE));\nfloat edgeHorz \x3d\nabs((0.25 * lumaNW) + (-0.5 * lumaW) + (0.25 * lumaSW)) +\nabs((0.50 * lumaN ) + (-1.0 * lumaM) + (0.50 * lumaS )) +\nabs((0.25 * lumaNE) + (-0.5 * lumaE) + (0.25 * lumaSE));\nbool horzSpan \x3d edgeHorz \x3e\x3d edgeVert;\nfloat lengthSign \x3d horzSpan ? -rcpFrame.y : -rcpFrame.x;\nif(!horzSpan) {\nlumaN \x3d lumaW;\nlumaS \x3d lumaE;\n}\nfloat gradientN \x3d abs(lumaN - lumaM);\nfloat gradientS \x3d abs(lumaS - lumaM);\nlumaN \x3d (lumaN + lumaM) * 0.5;\nlumaS \x3d (lumaS + lumaM) * 0.5;\nif (gradientN \x3c gradientS) {\nlumaN \x3d lumaS;\nlumaN \x3d lumaS;\ngradientN \x3d gradientS;\nlengthSign *\x3d -1.0;\n}\nvec2 posN;\nposN.x \x3d pos.x + (horzSpan ? 0.0 : lengthSign * 0.5);\nposN.y \x3d pos.y + (horzSpan ? lengthSign * 0.5 : 0.0);\ngradientN *\x3d u_search_threshold;\nvec2 posP \x3d posN;\nvec2 offNP \x3d horzSpan ? vec2(rcpFrame.x, 0.0) : vec2(0.0, rcpFrame.y);\nfloat lumaEndN \x3d lumaN;\nfloat lumaEndP \x3d lumaN;\nbool doneN \x3d false;\nbool doneP \x3d false;\nposN +\x3d offNP * vec2(-1.0, -1.0);\nposP +\x3d offNP * vec2( 1.0,  1.0);\nfor(int i \x3d 0; i \x3c fxaaMaxSearchSteps; i++) {\nif(i \x3e\x3d u_search_steps) break;\nif(!doneN) {\nlumaEndN \x3d FxaaLuma(texture2D(tex, posN.xy).xyz);\n}\nif(!doneP) {\nlumaEndP \x3d FxaaLuma(texture2D(tex, posP.xy).xyz);\n}\ndoneN \x3d doneN || (abs(lumaEndN - lumaN) \x3e\x3d gradientN);\ndoneP \x3d doneP || (abs(lumaEndP - lumaN) \x3e\x3d gradientN);\nif(doneN \x26\x26 doneP) {\nbreak;\n}\nif(!doneN) {\nposN -\x3d offNP;\n}\nif(!doneP) {\nposP +\x3d offNP;\n}\n}\nfloat dstN \x3d horzSpan ? pos.x - posN.x : pos.y - posN.y;\nfloat dstP \x3d horzSpan ? posP.x - pos.x : posP.y - pos.y;\nbool directionN \x3d dstN \x3c dstP;\nlumaEndN \x3d directionN ? lumaEndN : lumaEndP;\nif(((lumaM - lumaN) \x3c 0.0) \x3d\x3d ((lumaEndN - lumaN) \x3c 0.0)) {\nlengthSign \x3d 0.0;\n}\nfloat spanLength \x3d (dstP + dstN);\ndstN \x3d directionN ? dstN : dstP;\nfloat subPixelOffset \x3d (0.5 + (dstN * (-1.0/spanLength))) * lengthSign;\nvec3 rgbF \x3d texture2D(tex, vec2(\npos.x + (horzSpan ? 0.0 : subPixelOffset),\npos.y + (horzSpan ? subPixelOffset : 0.0))).xyz;\nreturn FxaaLerp3(rgbL, rgbF, blendL);\n}\nvoid main() {\ngl_FragColor \x3d texture2D(u_sampler0, v_texcoord);\nif(u_antialias) {\ngl_FragColor.xyz \x3d FxaaPixelShader(v_texcoord, u_sampler0, 1. / u_buffersize).xyz;\n}\n}")
    }
})(ChemDoodle.structures.d3,
    ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.LabelShader = function() {};
    var k = c._Shader.prototype;
    c = c.LabelShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.dimensionUniform = d.getUniformLocation(this.gProgram, "u_dimension")
    };
    c.onShaderAttached = function(d) {
        k.onShaderAttached.call(this, d);
        this.vertexTexCoordAttribute = 2;
        d.bindAttribLocation(this.gProgram, this.vertexTexCoordAttribute, "a_vertex_texcoord")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d,
            d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;attribute vec2 a_vertex_texcoord;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform vec2 u_dimension;varying vec2 v_texcoord;void main() {gl_Position \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);vec4 depth_pos \x3d vec4(gl_Position);depth_pos.z +\x3d a_vertex_normal.z;gl_Position \x3d u_projection_matrix * gl_Position;depth_pos \x3d u_projection_matrix * depth_pos;gl_Position /\x3d gl_Position.w;gl_Position.xy +\x3d a_vertex_normal.xy / u_dimension * 2.;gl_Position.z \x3d depth_pos.z / depth_pos.w;v_texcoord \x3d a_vertex_texcoord;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        var c = [d.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "", "precision mediump float;uniform sampler2D u_image;varying vec2 v_texcoord;void main(void) {gl_FragColor \x3d texture2D(u_image, v_texcoord);}"].join("");
        return this.getShaderFromStr(d, d.FRAGMENT_SHADER, c)
    };
    c.enableAttribsArray = function(d) {
        k.enableAttribsArray.call(this, d);
        d.enableVertexAttribArray(this.vertexNormalAttribute);
        d.enableVertexAttribArray(this.vertexTexCoordAttribute)
    };
    c.disableAttribsArray =
        function(d) {
            k.disableAttribsArray.call(this, d);
            d.disableVertexAttribArray(this.vertexNormalAttribute);
            d.disableVertexAttribArray(this.vertexTexCoordAttribute)
        };
    c.setDimension = function(d, c, b) {
        d.uniform2f(this.dimensionUniform, c, b)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.LightingShader = function() {};
    var k = c._Shader.prototype;
    c = c.LightingShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.positionSampleUniform = d.getUniformLocation(this.gProgram, "u_position_sample");
        this.colorSampleUniform = d.getUniformLocation(this.gProgram, "u_color_sample");
        this.ssaoSampleUniform = d.getUniformLocation(this.gProgram, "u_ssao_sample");
        this.outlineSampleUniform = d.getUniformLocation(this.gProgram, "u_outline_sample")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        return this.getShaderFromStr(d, d.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D u_position_sample;uniform sampler2D u_color_sample;uniform sampler2D u_ssao_sample;uniform sampler2D u_outline_sample;varying vec2 v_texcoord;void main() {vec4 position \x3d texture2D(u_position_sample, v_texcoord);vec4 color \x3d texture2D(u_color_sample, v_texcoord);vec4 ao \x3d texture2D(u_ssao_sample, v_texcoord);float outline \x3d texture2D(u_outline_sample, v_texcoord).r;if(position.w \x3d\x3d 0. \x26\x26 outline \x3d\x3d 1.) {return;}gl_FragColor \x3d vec4(color.rgb * ao.r * outline, 1.);}")
    }
})(ChemDoodle.structures.d3,
    ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.NormalShader = function() {};
    var k = c._Shader.prototype;
    c = c.NormalShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.normalMatrixUniform = d.getUniformLocation(this.gProgram, "u_normal_matrix")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;varying vec3 v_normal;void main() {v_normal \x3d length(a_vertex_normal)\x3d\x3d0. ? a_vertex_normal : u_normal_matrix * a_vertex_normal;gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.);}")
    };
    c.loadDefaultFragmentShader =
        function(d) {
            return this.getShaderFromStr(d, d.FRAGMENT_SHADER, "precision mediump float;varying vec3 v_normal;void main(void) {vec3 normal \x3d length(v_normal)\x3d\x3d0. ? vec3(0., 0., 1.) : normalize(v_normal);gl_FragColor \x3d vec4(normal, 0.);}")
        };
    c.enableAttribsArray = function(d) {
        k.enableAttribsArray.call(this, d);
        d.enableVertexAttribArray(this.vertexNormalAttribute)
    };
    c.disableAttribsArray = function(d) {
        k.disableAttribsArray.call(this, d);
        d.disableVertexAttribArray(this.vertexNormalAttribute)
    };
    c.setModelViewMatrix =
        function(d, c) {
            k.setModelViewMatrix.call(this, d, c);
            var b = n.transpose(p.toInverseMat3(c, []));
            d.uniformMatrix3fv(this.normalMatrixUniform, !1, b)
        }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.OutlineShader = function() {};
    var k = c._Shader.prototype;
    c = c.OutlineShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.normalSampleUniform = d.getUniformLocation(this.gProgram, "u_normal_sample");
        this.depthSampleUniform = d.getUniformLocation(this.gProgram, "u_depth_sample");
        this.gbufferTextureSizeUniform = d.getUniformLocation(this.gProgram, "u_gbuffer_texture_size");
        this.normalThresholdUniform = d.getUniformLocation(this.gProgram, "u_normal_threshold");
        this.depthThresholdUniform = d.getUniformLocation(this.gProgram, "u_depth_threshold");
        this.thicknessUniform = d.getUniformLocation(this.gProgram, "u_thickness")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        return this.getShaderFromStr(d,
            d.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D u_normal_sample;uniform sampler2D u_depth_sample;uniform float u_normal_threshold;uniform float u_depth_threshold;uniform float u_thickness;uniform vec2 u_gbuffer_texture_size;varying vec2 v_texcoord;void main() {vec3 normal \x3d texture2D(u_normal_sample, v_texcoord).xyz;float depth \x3d texture2D(u_depth_sample, v_texcoord).r;vec2 texelSize \x3d u_thickness/u_gbuffer_texture_size * .5;vec2 offsets[8];offsets[0] \x3d vec2(-texelSize.x, -texelSize.y);offsets[1] \x3d vec2(-texelSize.x, 0);offsets[2] \x3d vec2(-texelSize.x, texelSize.y);offsets[3] \x3d vec2(0, -texelSize.y);offsets[4] \x3d vec2(0,  texelSize.y);offsets[5] \x3d vec2(texelSize.x, -texelSize.y);offsets[6] \x3d vec2(texelSize.x, 0);offsets[7] \x3d vec2(texelSize.x, texelSize.y);float edge \x3d 0.;for (int i \x3d 0; i \x3c 8; i++) {vec3 sampleNorm \x3d texture2D(u_normal_sample, v_texcoord + offsets[i]).xyz;if(normal \x3d\x3d vec3(.0, .0, .0)) {if(sampleNorm !\x3d vec3(.0, .0, .0)) {edge \x3d 1.0;break;}continue;}if (dot(sampleNorm, normal) \x3c u_normal_threshold) {edge \x3d 1.0;break;}float sampleDepth \x3d texture2D(u_depth_sample, v_texcoord + offsets[i]).r;if (abs(sampleDepth - depth) \x3e u_depth_threshold) {edge \x3d 1.0;break;}}edge \x3d 1. - edge;gl_FragColor \x3d vec4(edge, edge, edge, 1.);}")
    };
    c.setGbufferTextureSize = function(d, c, b) {
        d.uniform2f(this.gbufferTextureSizeUniform, c, b)
    };
    c.setNormalThreshold = function(d, c) {
        d.uniform1f(this.normalThresholdUniform, c)
    };
    c.setDepthThreshold = function(d, c) {
        d.uniform1f(this.depthThresholdUniform, c)
    };
    c.setThickness = function(d, c) {
        d.uniform1f(this.thicknessUniform, c)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.PhongShader = function() {};
    var k = c._Shader.prototype;
    c = c.PhongShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.shadowUniform = d.getUniformLocation(this.gProgram, "u_shadow");
        this.flatColorUniform = d.getUniformLocation(this.gProgram, "u_flat_color");
        this.normalMatrixUniform = d.getUniformLocation(this.gProgram, "u_normal_matrix");
        this.lightModelViewMatrixUniform = d.getUniformLocation(this.gProgram, "u_light_model_view_matrix");
        this.lightProjectionMatrixUniform =
            d.getUniformLocation(this.gProgram, "u_light_projection_matrix");
        this.lightDiffuseColorUniform = d.getUniformLocation(this.gProgram, "u_light_diffuse_color");
        this.lightSpecularColorUniform = d.getUniformLocation(this.gProgram, "u_light_specular_color");
        this.lightDirectionUniform = d.getUniformLocation(this.gProgram, "u_light_direction");
        this.materialAmbientColorUniform = d.getUniformLocation(this.gProgram, "u_material_ambient_color");
        this.materialDiffuseColorUniform = d.getUniformLocation(this.gProgram, "u_material_diffuse_color");
        this.materialSpecularColorUniform = d.getUniformLocation(this.gProgram, "u_material_specular_color");
        this.materialShininessUniform = d.getUniformLocation(this.gProgram, "u_material_shininess");
        this.materialAlphaUniform = d.getUniformLocation(this.gProgram, "u_material_alpha");
        this.fogModeUniform = d.getUniformLocation(this.gProgram, "u_fog_mode");
        this.fogColorUniform = d.getUniformLocation(this.gProgram, "u_fog_color");
        this.fogStartUniform = d.getUniformLocation(this.gProgram, "u_fog_start");
        this.fogEndUniform = d.getUniformLocation(this.gProgram,
            "u_fog_end");
        this.fogDensityUniform = d.getUniformLocation(this.gProgram, "u_fog_density");
        this.shadowDepthSampleUniform = d.getUniformLocation(this.gProgram, "u_shadow_depth_sample");
        this.shadowTextureSizeUniform = d.getUniformLocation(this.gProgram, "u_shadow_texture_size");
        this.shadowIntensityUniform = d.getUniformLocation(this.gProgram, "u_shadow_intensity");
        this.gammaCorrectionUniform = d.getUniformLocation(this.gProgram, "u_gamma_inverted");
        this.pointSizeUniform = d.getUniformLocation(this.gProgram, "u_point_size")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;attribute vec3 a_vertex_normal;uniform vec3 u_light_diffuse_color;uniform vec3 u_material_ambient_color;uniform vec3 u_material_diffuse_color;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;uniform mat3 u_normal_matrix;uniform mat4 u_light_model_view_matrix;uniform mat4 u_light_projection_matrix;uniform bool u_shadow;varying vec3 v_viewpos;varying vec4 v_shadcoord;varying vec3 v_diffuse;varying vec3 v_ambient;varying vec3 v_normal;uniform float u_point_size;void main() {v_normal \x3d length(a_vertex_normal)\x3d\x3d0. ? a_vertex_normal : u_normal_matrix * a_vertex_normal;v_ambient \x3d u_material_ambient_color;v_diffuse \x3d u_material_diffuse_color * u_light_diffuse_color;if(u_shadow) {v_shadcoord \x3d u_light_projection_matrix * u_light_model_view_matrix * vec4(a_vertex_position, 1.);v_shadcoord /\x3d v_shadcoord.w;}vec4 viewPos \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);v_viewpos \x3d viewPos.xyz / viewPos.w;gl_Position \x3d u_projection_matrix * viewPos;gl_Position /\x3d gl_Position.w;gl_PointSize \x3d u_point_size;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        var c = [d.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "", "precision mediump float;uniform vec3 u_light_specular_color;uniform vec3 u_light_direction;uniform vec3 u_material_specular_color;uniform float u_material_shininess;uniform float u_material_alpha;uniform int u_fog_mode;uniform vec3 u_fog_color;uniform float u_fog_density;uniform float u_fog_start;uniform float u_fog_end;uniform bool u_shadow;uniform float u_shadow_intensity;uniform bool u_flat_color;uniform float u_gamma_inverted;uniform sampler2D u_shadow_depth_sample;uniform vec2 u_shadow_texture_size;varying vec3 v_viewpos;varying vec4 v_shadcoord;varying vec3 v_diffuse;varying vec3 v_ambient;varying vec3 v_normal;\n#ifndef CWC_DEPTH_TEX\nfloat unpack (vec4 colour) {const vec4 bitShifts \x3d vec4(1.,1. / 255.,1. / (255. * 255.),1. / (255. * 255. * 255.));return dot(colour, bitShifts);}\n#endif\nfloat shadowMapDepth(vec4 shadowMapColor) {float zShadowMap;\n#ifdef CWC_DEPTH_TEX\nzShadowMap \x3d shadowMapColor.r;\n#else\nzShadowMap \x3d unpack(shadowMapColor);\n#endif\nreturn zShadowMap;}void main(void) {vec3 color \x3d v_diffuse;if(length(v_normal)!\x3d0.){vec3 normal \x3d normalize(v_normal);vec3 lightDir \x3d normalize(-u_light_direction);float nDotL \x3d dot(normal, lightDir);float shadow \x3d 0.0;if(u_shadow) {vec3 depthCoord \x3d .5 + v_shadcoord.xyz / v_shadcoord.w * .5;if(depthCoord.z \x3c\x3d 1. \x26\x26 depthCoord.z \x3e\x3d 0.) {float bias \x3d max(.05 * (1. - nDotL), .005);vec2 texelSize \x3d 1. / u_shadow_texture_size;for(int x \x3d -1; x \x3c\x3d 1; ++x) {for(int y \x3d -1; y \x3c\x3d 1; ++y)  {vec4 shadowMapColor \x3d texture2D(u_shadow_depth_sample, depthCoord.xy + vec2(x, y) * texelSize);float zShadowMap \x3d shadowMapDepth(shadowMapColor);shadow +\x3d zShadowMap + bias \x3c depthCoord.z ? 1. : 0.;}}shadow /\x3d 9.;shadow *\x3d u_shadow_intensity;}}if(!u_flat_color) {vec3 viewDir \x3d normalize(-v_viewpos);vec3 halfDir \x3d normalize(lightDir + viewDir);float nDotHV \x3d max(dot(halfDir, normal), 0.);vec3 specular \x3d u_material_specular_color * u_light_specular_color;color*\x3dmax(nDotL, 0.);color+\x3dspecular * pow(nDotHV, u_material_shininess);}color \x3d (1.-shadow)*color+v_ambient;}gl_FragColor \x3d vec4(pow(color, vec3(u_gamma_inverted)), u_material_alpha);if(u_fog_mode !\x3d 0){float fogCoord \x3d 1.-clamp((u_fog_end - gl_FragCoord.z/gl_FragCoord.w) / (u_fog_end - u_fog_start), 0., 1.);float fogFactor \x3d 1.;if(u_fog_mode \x3d\x3d 1){fogFactor \x3d 1.-fogCoord;}else if(u_fog_mode \x3d\x3d 2) {fogFactor \x3d clamp(exp(-u_fog_density*fogCoord), 0., 1.);}else if(u_fog_mode \x3d\x3d 3) {fogFactor \x3d clamp(exp(-pow(u_fog_density*fogCoord, 2.)), 0., 1.);}gl_FragColor \x3d mix(vec4(u_fog_color, 1.), gl_FragColor, fogFactor);}}"].join("");
        return this.getShaderFromStr(d, d.FRAGMENT_SHADER, c)
    };
    c.enableAttribsArray = function(d) {
        k.enableAttribsArray.call(this, d);
        d.enableVertexAttribArray(this.vertexNormalAttribute)
    };
    c.disableAttribsArray = function(d) {
        k.disableAttribsArray.call(this, d);
        d.disableVertexAttribArray(this.vertexNormalAttribute)
    };
    c.setMatrixUniforms = function(d, c) {
        if (c === g) this.setModelViewMatrix(d, d.modelViewMatrix), this.setLightModelViewMatrix(d, d.lightViewMatrix);
        else {
            var b = p.multiply(d.modelViewMatrix, c, []),
                a = p.multiply(d.lightViewMatrix,
                    c, []);
            this.setModelViewMatrix(d, b);
            this.setLightModelViewMatrix(d, a)
        }
    };
    c.setModelViewMatrix = function(d, c) {
        k.setModelViewMatrix.call(this, d, c);
        var b = n.transpose(p.toInverseMat3(c, []));
        d.uniformMatrix3fv(this.normalMatrixUniform, !1, b)
    };
    c.setFlatColor = function(d, c) {
        d.uniform1i(this.flatColorUniform, c)
    };
    c.setShadow = function(d, c) {
        d.uniform1i(this.shadowUniform, c)
    };
    c.setFogMode = function(d, c) {
        d.uniform1i(this.fogModeUniform, c)
    };
    c.setFogColor = function(d, c) {
        d.uniform3fv(this.fogColorUniform, c)
    };
    c.setFogStart =
        function(d, c) {
            d.uniform1f(this.fogStartUniform, c)
        };
    c.setFogEnd = function(d, c) {
        d.uniform1f(this.fogEndUniform, c)
    };
    c.setFogDensity = function(d, c) {
        d.uniform1f(this.fogDensityUniform, c)
    };
    c.setMaterialAmbientColor = function(d, c) {
        d.uniform3fv(this.materialAmbientColorUniform, c)
    };
    c.setMaterialDiffuseColor = function(d, c) {
        d.uniform3fv(this.materialDiffuseColorUniform, c)
    };
    c.setMaterialSpecularColor = function(d, c) {
        d.uniform3fv(this.materialSpecularColorUniform, c)
    };
    c.setMaterialShininess = function(d, c) {
        d.uniform1f(this.materialShininessUniform,
            c)
    };
    c.setMaterialAlpha = function(d, c) {
        d.uniform1f(this.materialAlphaUniform, c)
    };
    c.setLightDiffuseColor = function(d, c) {
        d.uniform3fv(this.lightDiffuseColorUniform, c)
    };
    c.setLightSpecularColor = function(d, c) {
        d.uniform3fv(this.lightSpecularColorUniform, c)
    };
    c.setLightDirection = function(d, c) {
        d.uniform3fv(this.lightDirectionUniform, c)
    };
    c.setLightModelViewMatrix = function(d, c) {
        d.uniformMatrix4fv(this.lightModelViewMatrixUniform, !1, c)
    };
    c.setLightProjectionMatrix = function(d, c) {
        d.uniformMatrix4fv(this.lightProjectionMatrixUniform, !1, c)
    };
    c.setShadowTextureSize = function(d, c, b) {
        d.uniform2f(this.shadowTextureSizeUniform, c, b)
    };
    c.setShadowIntensity = function(d, c) {
        d.uniform1f(this.shadowIntensityUniform, c)
    };
    c.setGammaCorrection = function(d, c) {
        d.uniform1f(this.gammaCorrectionUniform, 1 / c)
    };
    c.setPointSize = function(d, c) {
        d.uniform1f(this.pointSizeUniform, c)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.PickShader = function() {};
    var k = c._Shader.prototype;
    c = c.PickShader.prototype = new c._Shader;
    c.initUniformLocations = function(d) {
        k.initUniformLocations.call(this, d);
        this.materialDiffuseColorUniform = d.getUniformLocation(this.gProgram, "u_material_diffuse_color")
    };
    c.loadDefaultVertexShader = function(d) {
        return this.getShaderFromStr(d, d.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;void main() {gl_Position \x3d u_projection_matrix * u_model_view_matrix * vec4(a_vertex_position, 1.);gl_Position /\x3d gl_Position.w;}")
    };
    c.loadDefaultFragmentShader = function(d) {
        var c = [d.depthTextureExt ? "#define CWC_DEPTH_TEX\n" : "", "precision mediump float;uniform vec3 u_material_diffuse_color;void main(void) {gl_FragColor \x3d vec4(u_material_diffuse_color, 1.);}"].join("");
        return this.getShaderFromStr(d, d.FRAGMENT_SHADER, c)
    };
    c.setMaterialDiffuseColor = function(d, c) {
        d.uniform3fv(this.materialDiffuseColorUniform, c)
    }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.PositionShader = function() {};
    c = c.PositionShader.prototype = new c._Shader;
    c.loadDefaultVertexShader = function(c) {
        return this.getShaderFromStr(c, c.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;uniform mat4 u_model_view_matrix;uniform mat4 u_projection_matrix;varying vec4 v_position;void main() {vec4 viewPos \x3d u_model_view_matrix * vec4(a_vertex_position, 1.);gl_Position \x3d u_projection_matrix * viewPos;v_position \x3d viewPos / viewPos.w;}")
    };
    c.loadDefaultFragmentShader =
        function(c) {
            return this.getShaderFromStr(c, c.FRAGMENT_SHADER, "precision mediump float;varying vec4 v_position;void main(void) {gl_FragColor \x3d v_position;}")
        }
})(ChemDoodle.structures.d3, ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g) {
    c.QuadShader = function() {};
    c = c.QuadShader.prototype = new c._Shader;
    c.loadDefaultVertexShader = function(c) {
        return this.getShaderFromStr(c, c.VERTEX_SHADER, "precision mediump float;attribute vec3 a_vertex_position;varying vec2 v_texcoord;void main() {gl_Position \x3d vec4(a_vertex_position, 1.);v_texcoord \x3d a_vertex_position.xy * .5 + .5;}")
    };
    c.loadDefaultFragmentShader = function(c) {
        return this.getShaderFromStr(c, c.FRAGMENT_SHADER, "precision mediump float;uniform sampler2D u_image;varying vec2 v_texcoord;void main() {gl_FragColor \x3d texture2D(u_image, v_texcoord);}")
    }
})(ChemDoodle.structures.d3,
    ChemDoodle.lib.mat3, ChemDoodle.lib.mat4, document);
(function(c, n, p, m, g, k, d) {
    function f(a, b, d, f, g, m) {
        d = a[0] * m + d - m;
        f = a[1] * m + f - m;
        a = a[2] * m + g - m;
        g = -1;
        m = 0;
        for (var h = b.length; m < h; m++) {
            var q = b[m];
            if (.001 > k.abs(q.x - d) && .001 > k.abs(q.y - f) && .001 > k.abs(q.z - a)) {
                g = m;
                break
            }
        } - 1 == g && (g = b.length, b.push(new c.Atom("C", d, f, a)));
        return g
    }
    var b = function(a, b, d) {
        this.i1 = a;
        this.i2 = b;
        this.i3 = d
    };
    n._Surface = function() {};
    n = n._Surface.prototype = new n._Mesh;
    n.generate = function(a, b, d, c, f, g, k, m) {
        a = [];
        b = f[4] - c;
        for (d = 0; d < m; d++) {
            for (var h = f[2] - c, q = 0; q < k; q++) {
                for (var e = f[0] - c, l = 0; l < g; l++) a.push(this.calculate(e,
                    h, b)), e += c;
                h += c
            }
            b += c
        }
        return a
    };
    n.build = function(a, d, r) {
        var h = [],
            q = [],
            n = [],
            p = [Infinity, -Infinity, Infinity, -Infinity, Infinity, -Infinity];
        d += 2;
        for (var u = 0, y = a.length; u < y; u++) {
            var B = a[u];
            p[0] = k.min(p[0], B.x - d);
            p[1] = k.max(p[1], B.x + d);
            p[2] = k.min(p[2], B.y - d);
            p[3] = k.max(p[3], B.y + d);
            p[4] = k.min(p[4], B.z - d);
            p[5] = k.max(p[5], B.z + d)
        }
        a = p[1] - p[0];
        d = p[3] - p[2];
        y = p[5] - p[4];
        u = k.min(a, k.min(d, y)) / r;
        r = 2 + k.ceil(a / u);
        B = 2 + k.ceil(d / u);
        var e = 2 + k.ceil(y / u);
        a = this.generate(a, d, y, u, p, r, B, e);
        y = m(a, [r, B, e]);
        d = [];
        B = [];
        r = 0;
        for (a =
            y.vertices.length; r < a; r++) B.push(f(y.vertices[r], d, p[0], p[2], p[4], u));
        p = [];
        r = 0;
        for (a = y.faces.length; r < a; r++) {
            var l = y.faces[r];
            u = B[l[0]];
            e = B[l[1]];
            l = B[l[2]];
            p.push(new b(u, e, l));
            n.push(u, e, l)
        }
        u = [];
        r = 0;
        for (a = d.length; r < a; r++) {
            l = [];
            y = 0;
            for (B = p.length; y < B; y++)
                if (e = p[y], e.i1 === r || e.i2 === r || e.i3 === r) e.i1 != r && -1 === l.indexOf(e.i1) && l.push(e.i1), e.i2 != r && -1 === l.indexOf(e.i2) && l.push(e.i2), e.i3 != r && -1 === l.indexOf(e.i3) && l.push(e.i3);
            u.push(l)
        }
        e = [];
        r = 0;
        for (a = d.length; r < a; r++) {
            var x = d[r];
            l = u[r];
            var A = new c.Atom;
            if (3 > l.length) A.x = x.x, A.y = x.y, A.z = x.z;
            else {
                var z = 1;
                5 > l.length && (z = .5);
                y = 0;
                for (B = l.length; y < B; y++) {
                    var D = d[l[y]];
                    A.x += D.x;
                    A.y += D.y;
                    A.z += D.z
                }
                A.x += x.x * z;
                A.y += x.y * z;
                A.z += x.z * z;
                y = 1 / (z + l.length);
                A.x *= y;
                A.y *= y;
                A.z *= y
            }
            e.push(A)
        }
        d = e;
        r = 0;
        for (a = d.length; r < a; r++) x = d[r], h.push(x.x, x.y, x.z);
        r = 0;
        for (a = p.length; r < a; r++) e = p[r], u = d[e.i1], B = d[e.i2], y = d[e.i3], B = [B.x - u.x, B.y - u.y, B.z - u.z], g.cross(B, [y.x - u.x, y.y - u.y, y.z - u.z]), isNaN(B[0]) && (B = [0, 0, 0]), e.normal = B;
        r = 0;
        for (a = d.length; r < a; r++) {
            d = [0, 0, 0];
            y = 0;
            for (B = p.length; y <
                B; y++)
                if (e = p[y], e.i1 === r || e.i2 === r || e.i3 === r) d[0] += e.normal[0], d[1] += e.normal[1], d[2] += e.normal[2];
            g.normalize(d);
            q.push(d[0], d[1], d[2])
        }
        this.storeData(h, q, n)
    };
    n.render = function(a, b) {
        this.specs && (b = this.specs);
        b.surfaces_display && (a.shader.setMatrixUniforms(a), this.bindBuffers(a), a.material.setTempColors(a, b.surfaces_materialAmbientColor_3D, b.surfaces_color, b.surfaces_materialSpecularColor_3D, b.surfaces_materialShininess_3D), a.material.setAlpha(a, b.surfaces_alpha), "Dots" === b.surfaces_style ? (a.shader.setPointSize(a,
            b.shapes_pointSize), a.drawElements(a.POINTS, this.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)) : "Mesh" === b.surfaces_style ? (a.lineWidth(b.shapes_lineWidth), a.drawElements(a.LINES, this.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0)) : a.drawElements(a.TRIANGLES, this.vertexIndexBuffer.numItems, a.UNSIGNED_SHORT, 0))
    }
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, ChemDoodle.lib.MarchingCubes, ChemDoodle.lib.vec3, Math);
(function(c, n, p, m, g) {
    n.SASSurface = function(c, d, f) {
        this.atoms = c;
        this.probeRadius = d;
        this.resolution = f;
        this.build(c, d, f)
    };
    (n.SASSurface.prototype = new n._Surface).calculate = function(g, d, f) {
        var b = Infinity;
        g = new c.Atom("C", g, d, f);
        d = 0;
        for (f = this.atoms.length; d < f; d++) var a = this.atoms[d],
            h = p[a.label] && 0 !== p[a.label].vdWRadius ? p[a.label].vdWRadius : 2,
            a = a.distance3D(g) - this.probeRadius - h,
            b = m.min(b, a);
        return b
    }
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function(c, n, p, m, g) {
    n.VDWSurface = function(c, d) {
        this.atoms = c;
        this.probeRadius = 0;
        this.resolution = d;
        this.build(c, 0, d)
    };
    (n.VDWSurface.prototype = new n._Surface).calculate = function(g, d, f) {
        var b = Infinity;
        g = new c.Atom("C", g, d, f);
        d = 0;
        for (f = this.atoms.length; d < f; d++) var a = this.atoms[d],
            h = p[a.label] && 0 !== p[a.label].vdWRadius ? p[a.label].vdWRadius : 2,
            a = a.distance3D(g) - h,
            b = m.min(b, a);
        return b
    }
})(ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.ELEMENT, Math);
(function(c, n, p, m) {
    c.Plate = function(c) {
        this.lanes = Array(c);
        i = 0;
        for (ii = c; i < ii; i++) this.lanes[i] = []
    };
    m = c.Plate.prototype;
    m.sort = function() {
        i = 0;
        for (ii = this.lanes.length; i < ii; i++) this.lanes[i].sort(function(c, k) {
            return c - k
        })
    };
    m.draw = function(c, k) {
        var d = c.canvas.width,
            f = c.canvas.height;
        this.origin = 9 * f / 10;
        this.front = f / 10;
        this.laneLength = this.origin - this.front;
        c.strokeStyle = "#000000";
        c.beginPath();
        c.moveTo(0, this.front);
        c.lineTo(d, this.front);
        c.setLineDash([3]);
        c.stroke();
        c.setLineDash([]);
        c.beginPath();
        c.moveTo(0, this.origin);
        c.lineTo(d, this.origin);
        c.closePath();
        c.stroke();
        i = 0;
        for (ii = this.lanes.length; i < ii; i++)
            for (f = (i + 1) * d / (ii + 1), c.beginPath(), c.moveTo(f, this.origin), c.lineTo(f, this.origin + 3), c.closePath(), c.stroke(), s = 0, ss = this.lanes[i].length; s < ss; s++) {
                var b = this.origin - this.laneLength * this.lanes[i][s].rf;
                switch (this.lanes[i][s].type) {
                    case "compact":
                        c.beginPath();
                        c.arc(f, b, 3, 0, 2 * p.PI, !1);
                        c.closePath();
                        break;
                    case "expanded":
                        c.beginPath();
                        c.arc(f, b, 7, 0, 2 * p.PI, !1);
                        c.closePath();
                        break;
                    case "widened":
                        n.contextEllipse(c,
                            f - 18, b - 10, 36, 10);
                        break;
                    case "cresent":
                        c.beginPath(), c.arc(f, b, 9, 0, p.PI, !0), c.closePath()
                }
                switch (this.lanes[i][s].style) {
                    case "solid":
                        c.fillStyle = "#000000";
                        c.fill();
                        break;
                    case "transparent":
                        c.stroke()
                }
            }
    };
    c.Plate.Spot = function(c, k, d) {
        this.type = c;
        this.rf = k;
        this.style = d ? d : "solid"
    }
})(ChemDoodle.structures, ChemDoodle.extensions, Math);
(function(c, n, p, m, g) {
    c.default_backgroundColor = "#FFFFFF";
    c.default_scale = 1;
    c.default_rotateAngle = 0;
    c.default_bondLength_2D = 20;
    c.default_angstromsPerBondLength = 1.25;
    c.default_lightDirection_3D = [-.1, -.1, -1];
    c.default_lightDiffuseColor_3D = "#FFFFFF";
    c.default_lightSpecularColor_3D = "#FFFFFF";
    c.default_projectionPerspective_3D = !0;
    c.default_projectionPerspectiveVerticalFieldOfView_3D = 45;
    c.default_projectionOrthoWidth_3D = 40;
    c.default_projectionWidthHeightRatio_3D = g;
    c.default_projectionFrontCulling_3D = .1;
    c.default_projectionBackCulling_3D = 1E4;
    c.default_cullBackFace_3D = !0;
    c.default_fog_mode_3D = 0;
    c.default_fog_color_3D = "#000000";
    c.default_fog_start_3D = 0;
    c.default_fog_end_3D = 1;
    c.default_fog_density_3D = 1;
    c.default_shadow_3D = !1;
    c.default_shadow_intensity_3D = .85;
    c.default_flat_color_3D = !1;
    c.default_antialias_3D = !0;
    c.default_gammaCorrection_3D = 2.2;
    c.default_colorHover = "#885110";
    c.default_colorSelect = "#0060B2";
    c.default_colorError = "#c10000";
    c.default_colorPreview = "#00FF00";
    c.default_ssao_3D = !1;
    c.default_ssao_kernel_radius =
        17;
    c.default_ssao_kernel_samples = 32;
    c.default_ssao_power = 1;
    c.default_outline_3D = !1;
    c.default_outline_thickness = 1;
    c.default_outline_normal_threshold = .85;
    c.default_outline_depth_threshold = .1;
    c.default_fxaa_edgeThreshold = .0625;
    c.default_fxaa_edgeThresholdMin = 1 / 12;
    c.default_fxaa_searchSteps = 64;
    c.default_fxaa_searchThreshold = .25;
    c.default_fxaa_subpixCap = 1;
    c.default_fxaa_subpixTrim = 0;
    c.default_atoms_display = !0;
    c.default_atoms_color = "#000000";
    c.default_atoms_font_size_2D = 12;
    c.default_atoms_font_families_2D = ["Helvetica", "Arial", "Dialog"];
    c.default_atoms_font_bold_2D = !1;
    c.default_atoms_font_italic_2D = !1;
    c.default_atoms_circles_2D = !1;
    c.default_atoms_circleDiameter_2D = 10;
    c.default_atoms_circleBorderWidth_2D = 1;
    c.default_atoms_lonePairDistance_2D = 8;
    c.default_atoms_lonePairSpread_2D = 4;
    c.default_atoms_lonePairDiameter_2D = 1;
    c.default_atoms_useJMOLColors = !1;
    c.default_atoms_usePYMOLColors = !1;
    c.default_atoms_HBlack_2D = !0;
    c.default_atoms_implicitHydrogens_2D = !0;
    c.default_atoms_displayTerminalCarbonLabels_2D = !1;
    c.default_atoms_showHiddenCarbons_2D = !0;
    c.default_atoms_showAttributedCarbons_2D = !0;
    c.default_atoms_displayAllCarbonLabels_2D = !1;
    c.default_atoms_resolution_3D = 30;
    c.default_atoms_sphereDiameter_3D = .8;
    c.default_atoms_useVDWDiameters_3D = !1;
    c.default_atoms_vdwMultiplier_3D = 1;
    c.default_atoms_materialAmbientColor_3D = "#000000";
    c.default_atoms_materialSpecularColor_3D = "#555555";
    c.default_atoms_materialShininess_3D = 32;
    c.default_atoms_nonBondedAsStars_3D = !1;
    c.default_atoms_displayLabels_3D = !1;
    c.default_bonds_display = !0;
    c.default_bonds_color = "#000000";
    c.default_bonds_width_2D = 1;
    c.default_bonds_useAbsoluteSaturationWidths_2D = !0;
    c.default_bonds_saturationWidth_2D = .2;
    c.default_bonds_saturationWidthAbs_2D = 5;
    c.default_bonds_ends_2D = "round";
    c.default_bonds_splitColor = !1;
    c.default_bonds_colorGradient = !1;
    c.default_bonds_saturationAngle_2D = p.PI / 3;
    c.default_bonds_symmetrical_2D = !1;
    c.default_bonds_clearOverlaps_2D = !1;
    c.default_bonds_overlapClearWidth_2D = .5;
    c.default_bonds_atomLabelBuffer_2D = 1;
    c.default_bonds_wedgeThickness_2D =
        6;
    c.default_bonds_wavyLength_2D = 4;
    c.default_bonds_hashWidth_2D = 1;
    c.default_bonds_hashSpacing_2D = 2.5;
    c.default_bonds_dotSize_2D = 2;
    c.default_bonds_lewisStyle_2D = !1;
    c.default_bonds_showBondOrders_3D = !1;
    c.default_bonds_resolution_3D = 30;
    c.default_bonds_renderAsLines_3D = !1;
    c.default_bonds_cylinderDiameter_3D = .3;
    c.default_bonds_pillLatitudeResolution_3D = 10;
    c.default_bonds_pillLongitudeResolution_3D = 20;
    c.default_bonds_pillHeight_3D = .3;
    c.default_bonds_pillSpacing_3D = .1;
    c.default_bonds_pillDiameter_3D = .3;
    c.default_bonds_materialAmbientColor_3D =
        "#000000";
    c.default_bonds_materialSpecularColor_3D = "#555555";
    c.default_bonds_materialShininess_3D = 32;
    c.default_proteins_displayRibbon = !0;
    c.default_proteins_displayBackbone = !1;
    c.default_proteins_backboneThickness = 1.5;
    c.default_proteins_backboneColor = "#CCCCCC";
    c.default_proteins_ribbonCartoonize = !1;
    c.default_proteins_displayPipePlank = !1;
    c.default_proteins_residueColor = "none";
    c.default_proteins_primaryColor = "#FF0D0D";
    c.default_proteins_secondaryColor = "#FFFF30";
    c.default_proteins_ribbonCartoonHelixPrimaryColor =
        "#00E740";
    c.default_proteins_ribbonCartoonHelixSecondaryColor = "#9905FF";
    c.default_proteins_ribbonCartoonSheetColor = "#E8BB99";
    c.default_proteins_tubeColor = "#FF0D0D";
    c.default_proteins_tubeResolution_3D = 15;
    c.default_proteins_ribbonThickness = .2;
    c.default_proteins_tubeThickness = .5;
    c.default_proteins_plankSheetWidth = 3.5;
    c.default_proteins_cylinderHelixDiameter = 4;
    c.default_proteins_verticalResolution = 8;
    c.default_proteins_horizontalResolution = 8;
    c.default_proteins_materialAmbientColor_3D = "#000000";
    c.default_proteins_materialSpecularColor_3D =
        "#555555";
    c.default_proteins_materialShininess_3D = 32;
    c.default_nucleics_display = !0;
    c.default_nucleics_tubeColor = "#CCCCCC";
    c.default_nucleics_baseColor = "#C10000";
    c.default_nucleics_residueColor = "none";
    c.default_nucleics_tubeThickness = 1.5;
    c.default_nucleics_tubeResolution_3D = 15;
    c.default_nucleics_verticalResolution = 8;
    c.default_nucleics_materialAmbientColor_3D = "#000000";
    c.default_nucleics_materialSpecularColor_3D = "#555555";
    c.default_nucleics_materialShininess_3D = 32;
    c.default_macro_displayAtoms = !1;
    c.default_macro_displayBonds = !1;
    c.default_macro_atomToLigandDistance = -1;
    c.default_macro_showWater = !1;
    c.default_macro_colorByChain = !1;
    c.default_macro_rainbowColors = ["#0000FF", "#00FFFF", "#00FF00", "#FFFF00", "#FF0000"];
    c.default_surfaces_display = !0;
    c.default_surfaces_alpha = .5;
    c.default_surfaces_style = "Solid";
    c.default_surfaces_color = "white";
    c.default_surfaces_materialAmbientColor_3D = "#000000";
    c.default_surfaces_materialSpecularColor_3D = "#000000";
    c.default_surfaces_materialShininess_3D = 32;
    c.default_plots_color = "#000000";
    c.default_plots_width =
        1;
    c.default_plots_showIntegration = !1;
    c.default_plots_integrationColor = "#c10000";
    c.default_plots_integrationLineWidth = 1;
    c.default_plots_showGrid = !1;
    c.default_plots_gridColor = "gray";
    c.default_plots_gridLineWidth = .5;
    c.default_plots_showYAxis = !0;
    c.default_plots_flipXAxis = !1;
    c.default_text_font_size = 12;
    c.default_text_font_families = ["Helvetica", "Arial", "Dialog"];
    c.default_text_font_bold = !0;
    c.default_text_font_italic = !1;
    c.default_text_font_stroke_3D = !0;
    c.default_text_color = "#000000";
    c.default_shapes_color =
        "#000000";
    c.default_shapes_lineWidth = 1;
    c.default_shapes_pointSize = 2;
    c.default_shapes_arrowLength_2D = 8;
    c.default_compass_display = !1;
    c.default_compass_axisXColor_3D = "#FF0000";
    c.default_compass_axisYColor_3D = "#00FF00";
    c.default_compass_axisZColor_3D = "#0000FF";
    c.default_compass_size_3D = 50;
    c.default_compass_resolution_3D = 10;
    c.default_compass_displayText_3D = !0;
    c.default_compass_type_3D = 0;
    c.default_measurement_update_3D = !1;
    c.default_measurement_angleBands_3D = 10;
    c.default_measurement_displayText_3D = !0;
    n.VisualSpecifications =
        function() {
            this.backgroundColor = c.default_backgroundColor;
            this.scale = c.default_scale;
            this.rotateAngle = c.default_rotateAngle;
            this.bondLength_2D = c.default_bondLength_2D;
            this.angstromsPerBondLength = c.default_angstromsPerBondLength;
            this.lightDirection_3D = c.default_lightDirection_3D.slice(0);
            this.lightDiffuseColor_3D = c.default_lightDiffuseColor_3D;
            this.lightSpecularColor_3D = c.default_lightSpecularColor_3D;
            this.projectionPerspective_3D = c.default_projectionPerspective_3D;
            this.projectionPerspectiveVerticalFieldOfView_3D =
                c.default_projectionPerspectiveVerticalFieldOfView_3D;
            this.projectionOrthoWidth_3D = c.default_projectionOrthoWidth_3D;
            this.projectionWidthHeightRatio_3D = c.default_projectionWidthHeightRatio_3D;
            this.projectionFrontCulling_3D = c.default_projectionFrontCulling_3D;
            this.projectionBackCulling_3D = c.default_projectionBackCulling_3D;
            this.cullBackFace_3D = c.default_cullBackFace_3D;
            this.fog_mode_3D = c.default_fog_mode_3D;
            this.fog_color_3D = c.default_fog_color_3D;
            this.fog_start_3D = c.default_fog_start_3D;
            this.fog_end_3D =
                c.default_fog_end_3D;
            this.fog_density_3D = c.default_fog_density_3D;
            this.shadow_3D = c.default_shadow_3D;
            this.shadow_intensity_3D = c.default_shadow_intensity_3D;
            this.flat_color_3D = c.default_flat_color_3D;
            this.antialias_3D = c.default_antialias_3D;
            this.gammaCorrection_3D = c.default_gammaCorrection_3D;
            this.colorHover = c.default_colorHover;
            this.colorSelect = c.default_colorSelect;
            this.colorError = c.default_colorError;
            this.colorPreview = c.default_colorPreview;
            this.ssao_3D = c.default_ssao_3D;
            this.ssao_kernel_radius =
                c.default_ssao_kernel_radius;
            this.ssao_kernel_samples = c.default_ssao_kernel_samples;
            this.ssao_power = c.default_ssao_power;
            this.outline_3D = c.default_outline_3D;
            this.outline_normal_threshold = c.default_outline_normal_threshold;
            this.outline_depth_threshold = c.default_outline_depth_threshold;
            this.outline_thickness = c.default_outline_thickness;
            this.fxaa_edgeThreshold = c.default_fxaa_edgeThreshold;
            this.fxaa_edgeThresholdMin = c.default_fxaa_edgeThresholdMin;
            this.fxaa_searchSteps = c.default_fxaa_searchSteps;
            this.fxaa_searchThreshold =
                c.default_fxaa_searchThreshold;
            this.fxaa_subpixCap = c.default_fxaa_subpixCap;
            this.fxaa_subpixTrim = c.default_fxaa_subpixTrim;
            this.atoms_display = c.default_atoms_display;
            this.atoms_color = c.default_atoms_color;
            this.atoms_font_size_2D = c.default_atoms_font_size_2D;
            this.atoms_font_families_2D = c.default_atoms_font_families_2D.slice(0);
            this.atoms_font_bold_2D = c.default_atoms_font_bold_2D;
            this.atoms_font_italic_2D = c.default_atoms_font_italic_2D;
            this.atoms_circles_2D = c.default_atoms_circles_2D;
            this.atoms_circleDiameter_2D =
                c.default_atoms_circleDiameter_2D;
            this.atoms_circleBorderWidth_2D = c.default_atoms_circleBorderWidth_2D;
            this.atoms_lonePairDistance_2D = c.default_atoms_lonePairDistance_2D;
            this.atoms_lonePairSpread_2D = c.default_atoms_lonePairSpread_2D;
            this.atoms_lonePairDiameter_2D = c.default_atoms_lonePairDiameter_2D;
            this.atoms_useJMOLColors = c.default_atoms_useJMOLColors;
            this.atoms_usePYMOLColors = c.default_atoms_usePYMOLColors;
            this.atoms_HBlack_2D = c.default_atoms_HBlack_2D;
            this.atoms_implicitHydrogens_2D = c.default_atoms_implicitHydrogens_2D;
            this.atoms_displayTerminalCarbonLabels_2D = c.default_atoms_displayTerminalCarbonLabels_2D;
            this.atoms_showHiddenCarbons_2D = c.default_atoms_showHiddenCarbons_2D;
            this.atoms_showAttributedCarbons_2D = c.default_atoms_showAttributedCarbons_2D;
            this.atoms_displayAllCarbonLabels_2D = c.default_atoms_displayAllCarbonLabels_2D;
            this.atoms_resolution_3D = c.default_atoms_resolution_3D;
            this.atoms_sphereDiameter_3D = c.default_atoms_sphereDiameter_3D;
            this.atoms_useVDWDiameters_3D = c.default_atoms_useVDWDiameters_3D;
            this.atoms_vdwMultiplier_3D =
                c.default_atoms_vdwMultiplier_3D;
            this.atoms_materialAmbientColor_3D = c.default_atoms_materialAmbientColor_3D;
            this.atoms_materialSpecularColor_3D = c.default_atoms_materialSpecularColor_3D;
            this.atoms_materialShininess_3D = c.default_atoms_materialShininess_3D;
            this.atoms_nonBondedAsStars_3D = c.default_atoms_nonBondedAsStars_3D;
            this.atoms_displayLabels_3D = c.default_atoms_displayLabels_3D;
            this.bonds_display = c.default_bonds_display;
            this.bonds_color = c.default_bonds_color;
            this.bonds_width_2D = c.default_bonds_width_2D;
            this.bonds_useAbsoluteSaturationWidths_2D = c.default_bonds_useAbsoluteSaturationWidths_2D;
            this.bonds_saturationWidth_2D = c.default_bonds_saturationWidth_2D;
            this.bonds_saturationWidthAbs_2D = c.default_bonds_saturationWidthAbs_2D;
            this.bonds_ends_2D = c.default_bonds_ends_2D;
            this.bonds_splitColor = c.default_bonds_splitColor;
            this.bonds_colorGradient = c.default_bonds_colorGradient;
            this.bonds_saturationAngle_2D = c.default_bonds_saturationAngle_2D;
            this.bonds_symmetrical_2D = c.default_bonds_symmetrical_2D;
            this.bonds_clearOverlaps_2D =
                c.default_bonds_clearOverlaps_2D;
            this.bonds_overlapClearWidth_2D = c.default_bonds_overlapClearWidth_2D;
            this.bonds_atomLabelBuffer_2D = c.default_bonds_atomLabelBuffer_2D;
            this.bonds_wedgeThickness_2D = c.default_bonds_wedgeThickness_2D;
            this.bonds_wavyLength_2D = c.default_bonds_wavyLength_2D;
            this.bonds_hashWidth_2D = c.default_bonds_hashWidth_2D;
            this.bonds_hashSpacing_2D = c.default_bonds_hashSpacing_2D;
            this.bonds_dotSize_2D = c.default_bonds_dotSize_2D;
            this.bonds_lewisStyle_2D = c.default_bonds_lewisStyle_2D;
            this.bonds_showBondOrders_3D =
                c.default_bonds_showBondOrders_3D;
            this.bonds_resolution_3D = c.default_bonds_resolution_3D;
            this.bonds_renderAsLines_3D = c.default_bonds_renderAsLines_3D;
            this.bonds_cylinderDiameter_3D = c.default_bonds_cylinderDiameter_3D;
            this.bonds_pillHeight_3D = c.default_bonds_pillHeight_3D;
            this.bonds_pillLatitudeResolution_3D = c.default_bonds_pillLatitudeResolution_3D;
            this.bonds_pillLongitudeResolution_3D = c.default_bonds_pillLongitudeResolution_3D;
            this.bonds_pillSpacing_3D = c.default_bonds_pillSpacing_3D;
            this.bonds_pillDiameter_3D =
                c.default_bonds_pillDiameter_3D;
            this.bonds_materialAmbientColor_3D = c.default_bonds_materialAmbientColor_3D;
            this.bonds_materialSpecularColor_3D = c.default_bonds_materialSpecularColor_3D;
            this.bonds_materialShininess_3D = c.default_bonds_materialShininess_3D;
            this.proteins_displayRibbon = c.default_proteins_displayRibbon;
            this.proteins_displayBackbone = c.default_proteins_displayBackbone;
            this.proteins_backboneThickness = c.default_proteins_backboneThickness;
            this.proteins_backboneColor = c.default_proteins_backboneColor;
            this.proteins_ribbonCartoonize = c.default_proteins_ribbonCartoonize;
            this.proteins_residueColor = c.default_proteins_residueColor;
            this.proteins_primaryColor = c.default_proteins_primaryColor;
            this.proteins_secondaryColor = c.default_proteins_secondaryColor;
            this.proteins_ribbonCartoonHelixPrimaryColor = c.default_proteins_ribbonCartoonHelixPrimaryColor;
            this.proteins_ribbonCartoonHelixSecondaryColor = c.default_proteins_ribbonCartoonHelixSecondaryColor;
            this.proteins_tubeColor = c.default_proteins_tubeColor;
            this.proteins_tubeResolution_3D =
                c.default_proteins_tubeResolution_3D;
            this.proteins_displayPipePlank = c.default_proteins_displayPipePlank;
            this.proteins_ribbonCartoonSheetColor = c.default_proteins_ribbonCartoonSheetColor;
            this.proteins_ribbonThickness = c.default_proteins_ribbonThickness;
            this.proteins_tubeThickness = c.default_proteins_tubeThickness;
            this.proteins_plankSheetWidth = c.default_proteins_plankSheetWidth;
            this.proteins_cylinderHelixDiameter = c.default_proteins_cylinderHelixDiameter;
            this.proteins_verticalResolution = c.default_proteins_verticalResolution;
            this.proteins_horizontalResolution = c.default_proteins_horizontalResolution;
            this.proteins_materialAmbientColor_3D = c.default_proteins_materialAmbientColor_3D;
            this.proteins_materialSpecularColor_3D = c.default_proteins_materialSpecularColor_3D;
            this.proteins_materialShininess_3D = c.default_proteins_materialShininess_3D;
            this.macro_displayAtoms = c.default_macro_displayAtoms;
            this.macro_displayBonds = c.default_macro_displayBonds;
            this.macro_atomToLigandDistance = c.default_macro_atomToLigandDistance;
            this.nucleics_display =
                c.default_nucleics_display;
            this.nucleics_tubeColor = c.default_nucleics_tubeColor;
            this.nucleics_baseColor = c.default_nucleics_baseColor;
            this.nucleics_residueColor = c.default_nucleics_residueColor;
            this.nucleics_tubeThickness = c.default_nucleics_tubeThickness;
            this.nucleics_tubeResolution_3D = c.default_nucleics_tubeResolution_3D;
            this.nucleics_verticalResolution = c.default_nucleics_verticalResolution;
            this.nucleics_materialAmbientColor_3D = c.default_nucleics_materialAmbientColor_3D;
            this.nucleics_materialSpecularColor_3D =
                c.default_nucleics_materialSpecularColor_3D;
            this.nucleics_materialShininess_3D = c.default_nucleics_materialShininess_3D;
            this.macro_showWater = c.default_macro_showWater;
            this.macro_colorByChain = c.default_macro_colorByChain;
            this.macro_rainbowColors = c.default_macro_rainbowColors.slice(0);
            this.surfaces_display = c.default_surfaces_display;
            this.surfaces_alpha = c.default_surfaces_alpha;
            this.surfaces_style = c.default_surfaces_style;
            this.surfaces_color = c.default_surfaces_color;
            this.surfaces_materialAmbientColor_3D =
                c.default_surfaces_materialAmbientColor_3D;
            this.surfaces_materialSpecularColor_3D = c.default_surfaces_materialSpecularColor_3D;
            this.surfaces_materialShininess_3D = c.default_surfaces_materialShininess_3D;
            this.plots_color = c.default_plots_color;
            this.plots_width = c.default_plots_width;
            this.plots_showIntegration = c.default_plots_showIntegration;
            this.plots_integrationColor = c.default_plots_integrationColor;
            this.plots_integrationLineWidth = c.default_plots_integrationLineWidth;
            this.plots_showGrid = c.default_plots_showGrid;
            this.plots_gridColor = c.default_plots_gridColor;
            this.plots_gridLineWidth = c.default_plots_gridLineWidth;
            this.plots_showYAxis = c.default_plots_showYAxis;
            this.plots_flipXAxis = c.default_plots_flipXAxis;
            this.text_font_size = c.default_text_font_size;
            this.text_font_families = c.default_text_font_families.slice(0);
            this.text_font_bold = c.default_text_font_bold;
            this.text_font_italic = c.default_text_font_italic;
            this.text_font_stroke_3D = c.default_text_font_stroke_3D;
            this.text_color = c.default_text_color;
            this.shapes_color =
                c.default_shapes_color;
            this.shapes_lineWidth = c.default_shapes_lineWidth;
            this.shapes_pointSize = c.default_shapes_pointSize;
            this.shapes_arrowLength_2D = c.default_shapes_arrowLength_2D;
            this.compass_display = c.default_compass_display;
            this.compass_axisXColor_3D = c.default_compass_axisXColor_3D;
            this.compass_axisYColor_3D = c.default_compass_axisYColor_3D;
            this.compass_axisZColor_3D = c.default_compass_axisZColor_3D;
            this.compass_size_3D = c.default_compass_size_3D;
            this.compass_resolution_3D = c.default_compass_resolution_3D;
            this.compass_displayText_3D = c.default_compass_displayText_3D;
            this.compass_type_3D = c.default_compass_type_3D;
            this.measurement_update_3D = c.default_measurement_update_3D;
            this.measurement_angleBands_3D = c.default_measurement_angleBands_3D;
            this.measurement_displayText_3D = c.default_measurement_displayText_3D
        };
    var k = n.VisualSpecifications.prototype;
    k.set3DRepresentation = function(d) {
        this.bonds_display = this.atoms_display = !0;
        this.bonds_color = "#777777";
        this.bonds_showBondOrders_3D = this.bonds_splitColor = this.atoms_useJMOLColors =
            this.atoms_useVDWDiameters_3D = !0;
        this.bonds_renderAsLines_3D = !1;
        "Ball and Stick" === d ? (this.atoms_vdwMultiplier_3D = .3, this.bonds_splitColor = !1, this.bonds_cylinderDiameter_3D = .3, this.bonds_materialAmbientColor_3D = c.default_atoms_materialAmbientColor_3D, this.bonds_pillDiameter_3D = .15) : "van der Waals Spheres" === d ? (this.bonds_display = !1, this.atoms_vdwMultiplier_3D = 1) : "Stick" === d ? (this.bonds_showBondOrders_3D = this.atoms_useVDWDiameters_3D = !1, this.bonds_cylinderDiameter_3D = this.atoms_sphereDiameter_3D = .8,
            this.bonds_materialAmbientColor_3D = this.atoms_materialAmbientColor_3D) : "Wireframe" === d ? (this.atoms_useVDWDiameters_3D = !1, this.bonds_cylinderDiameter_3D = this.bonds_pillDiameter_3D = .05, this.atoms_sphereDiameter_3D = .15, this.bonds_materialAmbientColor_3D = c.default_atoms_materialAmbientColor_3D) : "Line" === d ? (this.atoms_display = !1, this.bonds_renderAsLines_3D = !0, this.bonds_width_2D = 1, this.bonds_cylinderDiameter_3D = .05) : alert('"' + d + '" is not recognized. Use one of the following strings:\n\n1. Ball and Stick\n2. van der Waals Spheres\n3. Stick\n4. Wireframe\n5. Line\n')
    };
    k.copy = function() {
        var d = m.parse(m.stringify(this));
        d.set3DRepresentation = k.set3DRepresentation;
        return d
    }
})(ChemDoodle, ChemDoodle.structures, Math, JSON);
(function(c, n, p, m, g) {
    p.getPointsPerAngstrom = function() {
        return c.default_bondLength_2D / c.default_angstromsPerBondLength
    };
    p.BondDeducer = function() {};
    g = p.BondDeducer.prototype;
    g.margin = 1.1;
    g.deduceCovalentBonds = function(c, d) {
        var f = p.getPointsPerAngstrom();
        d && (f = d);
        for (var b = 0, a = c.atoms.length; b < a; b++)
            for (var h = b + 1; h < a; h++) {
                var g = c.atoms[b],
                    k = c.atoms[h];
                g.distance3D(k) < (n[g.label].covalentRadius + n[k.label].covalentRadius) * f * this.margin && c.bonds.push(new m.Bond(g, k, 1))
            }
    }
})(ChemDoodle, ChemDoodle.ELEMENT,
    ChemDoodle.informatics, ChemDoodle.structures);
(function(c, n, p) {
    c.HydrogenDeducer = function() {};
    c.HydrogenDeducer.prototype.removeHydrogens = function(c, g) {
        for (var k = [], d = [], f = 0, b = c.bonds.length; f < b; f++) {
            var a = c.bonds[f],
                h = "H" !== a.a1.label && "H" !== a.a2.label;
            h || g || a.stereo === n.Bond.STEREO_NONE || (h = !0);
            h ? (a.a1.tag = !0, d.push(a)) : ("H" === a.a1.label && (a.a1.remove = !0), "H" === a.a2.label && (a.a2.remove = !0))
        }
        f = 0;
        for (b = c.atoms.length; f < b; f++) a = c.atoms[f], a.remove ? a.remove = p : k.push(a);
        c.atoms = k;
        c.bonds = d
    }
})(ChemDoodle.informatics, ChemDoodle.structures);
(function(c, n, p) {
    c.Splitter = function() {};
    c.Splitter.prototype.split = function(c) {
        for (var g = [], k = 0, d = c.atoms.length; k < d; k++) c.atoms[k].visited = !1;
        k = 0;
        for (d = c.bonds.length; k < d; k++) c.bonds[k].visited = !1;
        k = 0;
        for (d = c.atoms.length; k < d; k++) {
            var f = c.atoms[k];
            if (!f.visited) {
                var b = new n.Molecule;
                b.atoms.push(f);
                f.visited = !0;
                var a = new n.Queue;
                for (a.enqueue(f); !a.isEmpty();)
                    for (var f = a.dequeue(), h = 0, r = c.bonds.length; h < r; h++) {
                        var m = c.bonds[h];
                        m.contains(f) && !m.visited && (m.visited = !0, b.bonds.push(m), m = m.getNeighbor(f),
                            m.visited || (m.visited = !0, b.atoms.push(m), a.enqueue(m)))
                    }
                g.push(b)
            }
        }
        return g
    }
})(ChemDoodle.informatics, ChemDoodle.structures);
(function(c, n, p, m) {
    c.StructureBuilder = function() {};
    c.StructureBuilder.prototype.copy = function(c) {
        var g = new n.JSONInterpreter;
        return g.molFrom(g.molTo(c))
    }
})(ChemDoodle.informatics, ChemDoodle.io, ChemDoodle.structures);
(function(c, n) {
    c._Counter = function() {};
    var p = c._Counter.prototype;
    p.value = 0;
    p.molecule = n;
    p.setMolecule = function(c) {
        this.value = 0;
        this.molecule = c;
        this.innerCalculate && this.innerCalculate()
    }
})(ChemDoodle.informatics);
(function(c, n) {
    c.FrerejacqueNumberCounter = function(c) {
        this.setMolecule(c)
    };
    (c.FrerejacqueNumberCounter.prototype = new c._Counter).innerCalculate = function() {
        this.value = this.molecule.bonds.length - this.molecule.atoms.length + (new c.NumberOfMoleculesCounter(this.molecule)).value
    }
})(ChemDoodle.informatics);
(function(c, n, p) {
    n.NumberOfMoleculesCounter = function(c) {
        this.setMolecule(c)
    };
    (n.NumberOfMoleculesCounter.prototype = new n._Counter).innerCalculate = function() {
        for (var m = 0, g = this.molecule.atoms.length; m < g; m++) this.molecule.atoms[m].visited = !1;
        m = 0;
        for (g = this.molecule.atoms.length; m < g; m++)
            if (!this.molecule.atoms[m].visited) {
                this.value++;
                var k = new c.Queue;
                this.molecule.atoms[m].visited = !0;
                for (k.enqueue(this.molecule.atoms[m]); !k.isEmpty();)
                    for (var d = k.dequeue(), f = 0, b = this.molecule.bonds.length; f < b; f++) {
                        var a =
                            this.molecule.bonds[f];
                        a.contains(d) && (a = a.getNeighbor(d), a.visited || (a.visited = !0, k.enqueue(a)))
                    }
            }
    }
})(ChemDoodle.structures, ChemDoodle.informatics);
(function(c, n) {
    c._RingFinder = function() {};
    var p = c._RingFinder.prototype;
    p.atoms = n;
    p.bonds = n;
    p.rings = n;
    p.reduce = function(c) {
        for (var g = 0, k = c.atoms.length; g < k; g++) c.atoms[g].visited = !1;
        g = 0;
        for (k = c.bonds.length; g < k; g++) c.bonds[g].visited = !1;
        for (var d = !0; d;)
            for (d = !1, g = 0, k = c.atoms.length; g < k; g++) {
                for (var f = 0, b, a = 0, h = c.bonds.length; a < h; a++)
                    if (c.bonds[a].contains(c.atoms[g]) && !c.bonds[a].visited) {
                        f++;
                        if (2 === f) break;
                        b = c.bonds[a]
                    }
                1 === f && (d = !0, b.visited = !0, c.atoms[g].visited = !0)
            }
        g = 0;
        for (k = c.atoms.length; g < k; g++) c.atoms[g].visited ||
            this.atoms.push(c.atoms[g]);
        g = 0;
        for (k = c.bonds.length; g < k; g++) c.bonds[g].visited || this.bonds.push(c.bonds[g]);
        0 === this.bonds.length && 0 !== this.atoms.length && (this.atoms = [])
    };
    p.setMolecule = function(c) {
        this.atoms = [];
        this.bonds = [];
        this.rings = [];
        this.reduce(c);
        2 < this.atoms.length && this.innerGetRings && this.innerGetRings()
    };
    p.fuse = function() {
        for (var c = 0, g = this.rings.length; c < g; c++)
            for (var k = 0, d = this.bonds.length; k < d; k++) - 1 !== this.rings[c].atoms.indexOf(this.bonds[k].a1) && -1 !== this.rings[c].atoms.indexOf(this.bonds[k].a2) &&
                this.rings[c].bonds.push(this.bonds[k])
    }
})(ChemDoodle.informatics);
(function(c, n, p) {
    function m(c, d) {
        this.atoms = [];
        if (d)
            for (var f = 0, b = d.atoms.length; f < b; f++) this.atoms[f] = d.atoms[f];
        this.atoms.push(c)
    }
    var g = m.prototype;
    g.grow = function(c, d) {
        for (var f = this.atoms[this.atoms.length - 1], b = [], a = 0, h = c.length; a < h; a++)
            if (c[a].contains(f)) {
                var g = c[a].getNeighbor(f); - 1 === d.indexOf(g) && b.push(g)
            }
        f = [];
        a = 0;
        for (h = b.length; a < h; a++) f.push(new m(b[a], this));
        return f
    };
    g.check = function(c, d, f) {
        for (var b = 0, a = d.atoms.length - 1; b < a; b++)
            if (-1 !== this.atoms.indexOf(d.atoms[b])) return p;
        if (d.atoms[d.atoms.length -
                1] === this.atoms[this.atoms.length - 1]) {
            var h = new n.Ring;
            h.atoms[0] = f;
            b = 0;
            for (a = this.atoms.length; b < a; b++) h.atoms.push(this.atoms[b]);
            for (b = d.atoms.length - 2; 0 <= b; b--) h.atoms.push(d.atoms[b])
        } else {
            for (var g = [], b = 0, a = c.length; b < a; b++) c[b].contains(d.atoms[d.atoms.length - 1]) && g.push(c[b]);
            b = 0;
            for (a = g.length; b < a; b++)
                if ((1 === d.atoms.length || !g[b].contains(d.atoms[d.atoms.length - 2])) && g[b].contains(this.atoms[this.atoms.length - 1])) {
                    h = new n.Ring;
                    h.atoms[0] = f;
                    c = 0;
                    for (f = this.atoms.length; c < f; c++) h.atoms.push(this.atoms[c]);
                    for (c = d.atoms.length - 1; 0 <= c; c--) h.atoms.push(d.atoms[c]);
                    break
                }
        }
        return h
    };
    c.EulerFacetRingFinder = function(c) {
        this.setMolecule(c)
    };
    c = c.EulerFacetRingFinder.prototype = new c._RingFinder;
    c.fingerBreak = 5;
    c.innerGetRings = function() {
        for (var c, d = 0, f = this.atoms.length; d < f; d++) {
            c = [];
            for (var b = 0, a = this.bonds.length; b < a; b++) this.bonds[b].contains(this.atoms[d]) && c.push(this.bonds[b].getNeighbor(this.atoms[d]));
            b = 0;
            for (a = c.length; b < a; b++)
                for (var h = b + 1; h < c.length; h++) {
                    var g = [];
                    g[0] = new m(c[b]);
                    g[1] = new m(c[h]);
                    var n = [];
                    n[0] = this.atoms[d];
                    for (var q = 0, v = c.length; q < v; q++) q !== b && q !== h && n.push(c[q]);
                    var C = [];
                    for ((q = g[0].check(this.bonds, g[1], this.atoms[d])) && (C[0] = q); 0 === C.length && 0 < g.length && g[0].atoms.length < this.fingerBreak;) {
                        for (var u = [], q = 0, v = g.length; q < v; q++)
                            for (var y = g[q].grow(this.bonds, n), B = 0, e = y.length; B < e; B++) u.push(y[B]);
                        g = u;
                        q = 0;
                        for (v = g.length; q < v; q++)
                            for (B = q + 1; B < v; B++)(e = g[q].check(this.bonds, g[B], this.atoms[d])) && C.push(e);
                        if (0 === C.length) {
                            u = [];
                            q = 0;
                            for (v = n.length; q < v; q++)
                                for (B = 0, e = this.bonds.length; B <
                                    e; B++) this.bonds[B].contains(n[q]) && (c = this.bonds[B].getNeighbor(n[q]), -1 === n.indexOf(c) && -1 === u.indexOf(c) && u.push(c));
                            q = 0;
                            for (v = u.length; q < v; q++) n.push(u[q])
                        }
                    }
                    if (0 < C.length) {
                        g = p;
                        q = 0;
                        for (v = C.length; q < v; q++)
                            if (!g || g.atoms.length > C[q].atoms.length) g = C[q];
                        C = !1;
                        q = 0;
                        for (v = this.rings.length; q < v; q++) {
                            n = !0;
                            B = 0;
                            for (e = g.atoms.length; B < e; B++)
                                if (-1 === this.rings[q].atoms.indexOf(g.atoms[B])) {
                                    n = !1;
                                    break
                                }
                            if (n) {
                                C = !0;
                                break
                            }
                        }
                        C || this.rings.push(g)
                    }
                }
        }
        this.fuse()
    }
})(ChemDoodle.informatics, ChemDoodle.structures);
(function(c, n) {
    c.SSSRFinder = function(n) {
        this.rings = [];
        if (0 < n.atoms.length) {
            var m = (new c.FrerejacqueNumberCounter(n)).value,
                g = (new c.EulerFacetRingFinder(n)).rings;
            g.sort(function(a, b) {
                return a.atoms.length - b.atoms.length
            });
            for (var k = 0, d = n.bonds.length; k < d; k++) n.bonds[k].visited = !1;
            k = 0;
            for (d = g.length; k < d; k++) {
                n = !1;
                for (var f = 0, b = g[k].bonds.length; f < b; f++)
                    if (!g[k].bonds[f].visited) {
                        n = !0;
                        break
                    }
                if (n) {
                    f = 0;
                    for (b = g[k].bonds.length; f < b; f++) g[k].bonds[f].visited = !0;
                    this.rings.push(g[k])
                }
                if (this.rings.length ===
                    m) break
            }
        }
    }
})(ChemDoodle.informatics);
(function(c, n) {
    c._Interpreter = function() {};
    c._Interpreter.prototype.fit = function(c, m, g) {
        for (var k = c.length, d = [], f = 0; f < m - k; f++) d.push(" ");
        return g ? c + d.join("") : d.join("") + c
    }
})(ChemDoodle.io);
(function(c, n, p, m, g, k, d, f, b) {
    var a = /\s+/g,
        h = /\(|\)|\s+/g,
        r = /\'|\s+/g,
        w = /,|\'|\s+/g,
        q = /^\s+/,
        v = /[0-9]/g,
        C = /[0-9]|\+|\-/g,
        u = function(a) {
            return 0 !== a.length
        },
        y = {
            P: [],
            A: [
                [0, .5, .5]
            ],
            B: [
                [.5, 0, .5]
            ],
            C: [
                [.5, .5, 0]
            ],
            I: [
                [.5, .5, .5]
            ],
            R: [
                [2 / 3, 1 / 3, 1 / 3],
                [1 / 3, 2 / 3, 2 / 3]
            ],
            S: [
                [1 / 3, 1 / 3, 2 / 3],
                [2 / 3, 2 / 3, 1 / 3]
            ],
            T: [
                [1 / 3, 2 / 3, 1 / 3],
                [2 / 3, 1 / 3, 2 / 3]
            ],
            F: [
                [0, .5, .5],
                [.5, 0, .5],
                [.5, .5, 0]
            ]
        },
        B = function(a) {
            var e = 0,
                b = 0,
                d = 0,
                c = 0,
                f = a.indexOf("x"),
                h = a.indexOf("y"),
                g = a.indexOf("z"); - 1 !== f && (b++, 0 < f && "+" !== a.charAt(f - 1) && (b *= -1)); - 1 !== h && (d++, 0 < h &&
                "+" !== a.charAt(h - 1) && (d *= -1)); - 1 !== g && (c++, 0 < g && "+" !== a.charAt(g - 1) && (c *= -1));
            if (2 < a.length)
                for (f = "+", h = 0, g = a.length; h < g; h++) {
                    var k = a.charAt(h);
                    "-" !== k && "/" !== k || h !== a.length - 1 && !a.charAt(h + 1).match(v) || (f = k);
                    k.match(v) && ("+" === f ? e += parseInt(k) : "-" === f ? e -= parseInt(k) : "/" === f && (e /= parseInt(k)))
                }
            return [e, b, d, c]
        };
    p.CIFInterpreter = function() {};
    (p.CIFInterpreter.prototype = new p._Interpreter).read = function(e, f, p, v) {
        var l, x;
        f = f ? f : 1;
        p = p ? p : 1;
        v = v ? v : 1;
        var z = new m.Molecule;
        if (!e) return z;
        for (var A = e.split("\n"),
                H = 0, K = l = 0, I = e = 0, J = 0, N = "P", W, O, S, Q = !0; 0 < A.length;)
            if (Q ? x = A.shift() : Q = !0, 0 < x.length)
                if (n.stringStartsWith(x, "_cell_length_a")) H = parseFloat(x.split(h)[1]);
                else if (n.stringStartsWith(x, "_cell_length_b")) l = parseFloat(x.split(h)[1]);
        else if (n.stringStartsWith(x, "_cell_length_c")) K = parseFloat(x.split(h)[1]);
        else if (n.stringStartsWith(x, "_cell_angle_alpha")) e = k.PI * parseFloat(x.split(h)[1]) / 180;
        else if (n.stringStartsWith(x, "_cell_angle_beta")) I = k.PI * parseFloat(x.split(h)[1]) / 180;
        else if (n.stringStartsWith(x,
                "_cell_angle_gamma")) J = k.PI * parseFloat(x.split(h)[1]) / 180;
        else if (n.stringStartsWith(x, "_symmetry_space_group_name_H-M")) N = x.split(r)[1];
        else if (n.stringStartsWith(x, "loop_")) {
            for (var R = {
                    fields: [],
                    lines: []
                }, ja = !1;
                (x = A.shift()) !== b && !n.stringStartsWith(x = x.replace(q, ""), "loop_") && 0 < x.length;)
                if (n.stringStartsWith(x, "_")) {
                    if (ja) break;
                    R.fields = R.fields.concat(x.split(a).filter(u))
                } else ja = !0, R.lines.push(x);
            0 !== A.length && (n.stringStartsWith(x, "loop_") || n.stringStartsWith(x, "_")) && (Q = !1); - 1 !== R.fields.indexOf("_symmetry_equiv_pos_as_xyz") ||
                -1 !== R.fields.indexOf("_space_group_symop_operation_xyz") ? W = R : -1 !== R.fields.indexOf("_atom_site_label") ? O = R : -1 !== R.fields.indexOf("_geom_bond_atom_site_label_1") && (S = R)
        }
        x = H;
        e = (k.cos(e) - k.cos(J) * k.cos(I)) / k.sin(J);
        e = [x, 0, 0, 0, l * k.cos(J), l * k.sin(J), 0, 0, K * k.cos(I), K * e, K * k.sqrt(1 - k.pow(k.cos(I), 2) - e * e), 0, 0, 0, 0, 1];
        if (O) {
            R = Q = H = A = K = -1;
            J = 0;
            for (I = O.fields.length; J < I; J++) x = O.fields[J], "_atom_site_type_symbol" === x ? K = J : "_atom_site_label" === x ? A = J : "_atom_site_fract_x" === x ? H = J : "_atom_site_fract_y" === x ? Q = J : "_atom_site_fract_z" ===
                x && (R = J);
            J = 0;
            for (I = O.lines.length; J < I; J++) x = O.lines[J], l = x.split(a).filter(u), x = new m.Atom(l[-1 === K ? A : K].split(C)[0], parseFloat(l[H]), parseFloat(l[Q]), parseFloat(l[R])), z.atoms.push(x), -1 !== A && (x.cifId = l[A], x.cifPart = 0)
        }
        if (W && !S) {
            J = l = 0;
            for (I = W.fields.length; J < I; J++)
                if (x = W.fields[J], "_symmetry_equiv_pos_as_xyz" === x || "_space_group_symop_operation_xyz" === x) l = J;
            Q = y[N];
            A = [];
            J = 0;
            for (I = W.lines.length; J < I; J++) {
                x = W.lines[J].split(w).filter(u);
                for (var R = B(x[l]), ja = B(x[l + 1]), ca = B(x[l + 2]), N = 0, H = z.atoms.length; N <
                    H; N++) {
                    x = z.atoms[N];
                    var X = x.x * R[1] + x.y * R[2] + x.z * R[3] + R[0],
                        da = x.x * ja[1] + x.y * ja[2] + x.z * ja[3] + ja[0],
                        ea = x.x * ca[1] + x.y * ca[2] + x.z * ca[3] + ca[0];
                    O = new m.Atom(x.label, X, da, ea);
                    A.push(O);
                    x.cifId !== b && (O.cifId = x.cifId, O.cifPart = J + 1);
                    if (Q)
                        for (O = 0, K = Q.length; O < K; O++) {
                            var Z = Q[O],
                                Z = new m.Atom(x.label, X + Z[0], da + Z[1], ea + Z[2]);
                            A.push(Z);
                            x.cifId !== b && (Z.cifId = x.cifId, Z.cifPart = J + 1)
                        }
                }
            }
            J = 0;
            for (I = A.length; J < I; J++) {
                for (x = A[J]; 1 <= x.x;) x.x--;
                for (; 0 > x.x;) x.x++;
                for (; 1 <= x.y;) x.y--;
                for (; 0 > x.y;) x.y++;
                for (; 1 <= x.z;) x.z--;
                for (; 0 >
                    x.z;) x.z++
            }
            O = [];
            J = 0;
            for (I = A.length; J < I; J++) {
                K = !1;
                x = A[J];
                N = 0;
                for (H = z.atoms.length; N < H; N++)
                    if (1E-4 > z.atoms[N].distance3D(x)) {
                        K = !0;
                        break
                    }
                if (!K) {
                    N = 0;
                    for (H = O.length; N < H; N++)
                        if (1E-4 > O[N].distance3D(x)) {
                            K = !0;
                            break
                        }
                    K || O.push(x)
                }
            }
            z.atoms = z.atoms.concat(O)
        }
        I = [];
        for (J = 0; J < f; J++)
            for (N = 0; N < p; N++)
                for (O = 0; O < v; O++)
                    if (0 !== J || 0 !== N || 0 !== O)
                        for (K = 0, l = z.atoms.length; K < l; K++) x = z.atoms[K], A = new m.Atom(x.label, x.x + J, x.y + N, x.z + O), I.push(A), x.cifId !== b && (A.cifId = x.cifId, A.cifPart = x.cifPart + (W ? W.lines.length : 0) + J + 10 * N + 100 *
                            O);
        z.atoms = z.atoms.concat(I);
        J = 0;
        for (I = z.atoms.length; J < I; J++) x = z.atoms[J], W = d.multiplyVec3(e, [x.x, x.y, x.z]), x.x = W[0], x.y = W[1], x.z = W[2];
        if (S) {
            A = W = -1;
            J = 0;
            for (I = S.fields.length; J < I; J++) x = S.fields[J], "_geom_bond_atom_site_label_1" === x ? W = J : "_geom_bond_atom_site_label_2" === x && (A = J);
            O = 0;
            for (K = S.lines.length; O < K; O++)
                for (l = S.lines[O].split(a).filter(u), x = l[W], l = l[A], J = 0, I = z.atoms.length; J < I; J++)
                    for (N = J + 1; N < I; N++) {
                        H = z.atoms[J];
                        Q = z.atoms[N];
                        if (H.cifPart !== Q.cifPart) break;
                        (H.cifId === x && Q.cifId === l || H.cifId ===
                            l && Q.cifId === x) && z.bonds.push(new m.Bond(H, Q))
                    }
        } else(new c.informatics.BondDeducer).deduceCovalentBonds(z, 1);
        f = [-f / 2, -p / 2, -v / 2];
        f = {
            o: d.multiplyVec3(e, f, []),
            x: d.multiplyVec3(e, [f[0] + 1, f[1], f[2]]),
            y: d.multiplyVec3(e, [f[0], f[1] + 1, f[2]]),
            z: d.multiplyVec3(e, [f[0], f[1], f[2] + 1]),
            xy: d.multiplyVec3(e, [f[0] + 1, f[1] + 1, f[2]]),
            xz: d.multiplyVec3(e, [f[0] + 1, f[1], f[2] + 1]),
            yz: d.multiplyVec3(e, [f[0], f[1] + 1, f[2] + 1]),
            xyz: d.multiplyVec3(e, [f[0] + 1, f[1] + 1, f[2] + 1])
        };
        return {
            molecule: z,
            unitCell: new g.UnitCell(f)
        }
    };
    var e = new p.CIFInterpreter;
    c.readCIF = function(a, b, d, c) {
        return e.read(a, b, d, c)
    }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.structures.d3, Math, ChemDoodle.lib.mat4, ChemDoodle.lib.vec3);
(function(c, n, p, m, g) {
    n.CMLInterpreter = function() {};
    var k = n.CMLInterpreter.prototype = new n._Interpreter;
    k.read = function(d) {
        var b = [];
        d = m.parseXML(d);
        d = m(d).find("cml");
        for (var a = 0, c = d.length; a < c; a++)
            for (var f = m(d[a]).find("molecule"), k = 0, q = f.length; k < q; k++) {
                for (var n = b[k] = new p.Molecule, C = [], u = m(f[k]).find("atom"), y = 0, B = u.length; y < B; y++) {
                    var e = m(u[y]),
                        l = e.attr("elementType");
                    if (e.attr("x2") == g) {
                        var x = e.attr("x3");
                        var A = e.attr("y3");
                        var z = e.attr("z3")
                    } else x = e.attr("x2"), A = e.attr("y2"), z = 0;
                    l = b[k].atoms[y] =
                        new p.Atom(l, x, A, z);
                    C[y] = e.attr("id");
                    e.attr("formalCharge") != g && (l.charge = e.attr("formalCharge"))
                }
                u = m(f[k]).find("bond");
                y = 0;
                for (B = u.length; y < B; y++) {
                    e = m(u[y]);
                    x = e.attr("atomRefs2").split(" ");
                    l = n.atoms[m.inArray(x[0], C)];
                    x = n.atoms[m.inArray(x[1], C)];
                    switch (e.attr("order")) {
                        case "2":
                        case "D":
                            A = 2;
                            break;
                        case "3":
                        case "T":
                            A = 3;
                            break;
                        case "A":
                            A = 1.5;
                            break;
                        default:
                            A = 1
                    }
                    l = b[k].bonds[y] = new p.Bond(l, x, A);
                    switch (e.find("bondStereo").text()) {
                        case "W":
                            l.stereo = p.Bond.STEREO_PROTRUDING;
                            break;
                        case "H":
                            l.stereo =
                                p.Bond.STEREO_RECESSED
                    }
                }
            }
        return b
    };
    k.write = function(d) {
        var b = [];
        b.push('\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\n');
        b.push('\x3ccml convention\x3d"conventions:molecular" xmlns\x3d"http://www.xml-cml.org/schema" xmlns:conventions\x3d"http://www.xml-cml.org/convention/" xmlns:dc\x3d"http://purl.org/dc/elements/1.1/"\x3e\n');
        for (var a = 0, c = d.length; a < c; a++) {
            b.push('\x3cmolecule id\x3d"m');
            b.push(a);
            b.push('"\x3e');
            b.push("\x3catomArray\x3e");
            for (var f = 0, g = d[a].atoms.length; f < g; f++) {
                var k = d[a].atoms[f];
                b.push('\x3catom elementType\x3d"');
                b.push(k.label);
                b.push('" id\x3d"a');
                b.push(f);
                b.push('" ');
                b.push('x3\x3d"');
                b.push(k.x);
                b.push('" y3\x3d"');
                b.push(k.y);
                b.push('" z3\x3d"');
                b.push(k.z);
                b.push('" ');
                0 != k.charge && (b.push('formalCharge\x3d"'), b.push(k.charge), b.push('" '));
                b.push("/\x3e")
            }
            b.push("\x3c/atomArray\x3e");
            b.push("\x3cbondArray\x3e");
            f = 0;
            for (g = d[a].bonds.length; f < g; f++) {
                k = d[a].bonds[f];
                b.push('\x3cbond atomRefs2\x3d"a');
                b.push(d[a].atoms.indexOf(k.a1));
                b.push(" a");
                b.push(d[a].atoms.indexOf(k.a2));
                b.push('" order\x3d"');
                switch (k.bondOrder) {
                    case 1.5:
                        b.push("A");
                        break;
                    case 1:
                    case 2:
                    case 3:
                        b.push(k.bondOrder);
                        break;
                    default:
                        b.push("S")
                }
                b.push('"/\x3e')
            }
            b.push("\x3c/bondArray\x3e");
            b.push("\x3c/molecule\x3e")
        }
        b.push("\x3c/cml\x3e");
        return b.join("")
    };
    var d = new n.CMLInterpreter;
    c.readCML = function(c) {
        return d.read(c)
    };
    c.writeCML = function(c) {
        return d.write(c)
    }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function(c, n, p, m, g) {
    p.MOLInterpreter = function() {};
    g = p.MOLInterpreter.prototype = new p._Interpreter;
    g.read = function(d, f) {
        f || (f = c.default_bondLength_2D);
        var b = new m.Molecule;
        if (!d) return b;
        for (var a = d.split("\n"), h = a[3], g = parseInt(h.substring(0, 3)), h = parseInt(h.substring(3, 6)), k = 0; k < g; k++) {
            var q = a[4 + k];
            b.atoms[k] = new m.Atom(q.substring(31, 34), parseFloat(q.substring(0, 10)) * f, (1 === f ? 1 : -1) * parseFloat(q.substring(10, 20)) * f, parseFloat(q.substring(20, 30)) * f);
            var p = parseInt(q.substring(34, 36));
            0 !== p && n[b.atoms[k].label] &&
                (b.atoms[k].mass = n[b.atoms[k].label].mass + p);
            switch (parseInt(q.substring(36, 39))) {
                case 1:
                    b.atoms[k].charge = 3;
                    break;
                case 2:
                    b.atoms[k].charge = 2;
                    break;
                case 3:
                    b.atoms[k].charge = 1;
                    break;
                case 5:
                    b.atoms[k].charge = -1;
                    break;
                case 6:
                    b.atoms[k].charge = -2;
                    break;
                case 7:
                    b.atoms[k].charge = -3
            }
        }
        for (k = 0; k < h; k++) {
            q = a[4 + g + k];
            var C = parseInt(q.substring(6, 9)),
                p = parseInt(q.substring(9, 12));
            if (3 < C) switch (C) {
                case 4:
                    C = 1.5;
                    break;
                default:
                    C = 1
            }
            q = new m.Bond(b.atoms[parseInt(q.substring(0, 3)) - 1], b.atoms[parseInt(q.substring(3, 6)) -
                1], C);
            switch (p) {
                case 3:
                    q.stereo = m.Bond.STEREO_AMBIGUOUS;
                    break;
                case 1:
                    q.stereo = m.Bond.STEREO_PROTRUDING;
                    break;
                case 6:
                    q.stereo = m.Bond.STEREO_RECESSED
            }
            b.bonds[k] = q
        }
        return b
    };
    g.write = function(d) {
        var f = [];
        f.push("Molecule from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n");
        f.push(this.fit(d.atoms.length.toString(), 3));
        f.push(this.fit(d.bonds.length.toString(), 3));
        f.push("  0  0  0  0            999 V2000\n");
        for (var b = d.getCenter(), a = 0, h = d.atoms.length; a < h; a++) {
            var g = d.atoms[a],
                k = " 0";
            if (-1 !==
                g.mass && n[g.label]) {
                var q = g.mass - n[g.label].mass;
                5 > q && -4 < q && (k = (-1 < q ? " " : "") + q)
            }
            q = "  0";
            if (0 !== g.charge) switch (g.charge) {
                case 3:
                    q = "  1";
                    break;
                case 2:
                    q = "  2";
                    break;
                case 1:
                    q = "  3";
                    break;
                case -1:
                    q = "  5";
                    break;
                case -2:
                    q = "  6";
                    break;
                case -3:
                    q = "  7"
            }
            f.push(this.fit(((g.x - b.x) / c.default_bondLength_2D).toFixed(4), 10));
            f.push(this.fit((-(g.y - b.y) / c.default_bondLength_2D).toFixed(4), 10));
            f.push(this.fit((g.z / c.default_bondLength_2D).toFixed(4), 10));
            f.push(" ");
            f.push(this.fit(g.label, 3, !0));
            f.push(k);
            f.push(q);
            f.push("  0  0  0  0\n")
        }
        a = 0;
        for (h = d.bonds.length; a < h; a++) {
            g = d.bonds[a];
            b = 0;
            g.stereo === m.Bond.STEREO_AMBIGUOUS ? b = 3 : g.stereo === m.Bond.STEREO_PROTRUDING ? b = 1 : g.stereo === m.Bond.STEREO_RECESSED && (b = 6);
            f.push(this.fit((d.atoms.indexOf(g.a1) + 1).toString(), 3));
            f.push(this.fit((d.atoms.indexOf(g.a2) + 1).toString(), 3));
            g = g.bondOrder;
            if (1.5 == g) g = 4;
            else if (3 < g || 0 != g % 1) g = 1;
            f.push(this.fit(g.toString(), 3));
            f.push("  ");
            f.push(b);
            f.push("  0  0  0\n")
        }
        f.push("M  END");
        return f.join("")
    };
    var k = new p.MOLInterpreter;
    c.readMOL = function(d, c) {
        return k.read(d, c)
    };
    c.writeMOL = function(d) {
        return k.write(d)
    }
})(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.io, ChemDoodle.structures);
(function(c, n, p, m, g, k, d, f) {
    function b(a, b, d, c, f) {
        for (var h = 0, g = b.length; h < g; h++) {
            var k = b[h];
            if (k.id === d && c >= k.start && c <= k.end) {
                f ? a.helix = !0 : a.sheet = !0;
                c === k.end && (a.arrow = !0);
                break
            }
        }
    }
    p.PDBInterpreter = function() {};
    f = p.PDBInterpreter.prototype = new p._Interpreter;
    f.calculateRibbonDistances = !1;
    f.deduceResidueBonds = !1;
    f.read = function(a, f) {
        var h = new m.Molecule;
        h.chains = [];
        if (!a) return h;
        var q = a.split("\n");
        f || (f = 1);
        for (var r = [], p = [], u, y = [], B = [], e = [], l = 0, x = q.length; l < x; l++) {
            var A = q[l];
            if (n.stringStartsWith(A,
                    "HELIX")) r.push({
                id: A.substring(19, 20),
                start: parseInt(A.substring(21, 25)),
                end: parseInt(A.substring(33, 37))
            });
            else if (n.stringStartsWith(A, "SHEET")) p.push({
                id: A.substring(21, 22),
                start: parseInt(A.substring(22, 26)),
                end: parseInt(A.substring(33, 37))
            });
            else if (n.stringStartsWith(A, "ATOM")) {
                var z = A.substring(16, 17);
                if (" " === z || "A" === z) {
                    z = k(A.substring(76, 78));
                    if (0 === z.length) {
                        var D = k(A.substring(12, 14));
                        "HD" === D ? z = "H" : 0 < D.length && (z = 1 < D.length ? D.charAt(0) + D.substring(1).toLowerCase() : D)
                    }
                    D = new m.Atom(z, parseFloat(A.substring(30,
                        38)) * f, parseFloat(A.substring(38, 46)) * f, parseFloat(A.substring(46, 54)) * f);
                    D.hetatm = !1;
                    B.push(D);
                    var E = parseInt(A.substring(22, 26));
                    if (0 === y.length)
                        for (z = 0; 3 > z; z++) {
                            var G = new m.Residue(-1);
                            G.cp1 = D;
                            G.cp2 = D;
                            y.push(G)
                        }
                    E !== Number.NaN && y[y.length - 1].resSeq !== E && (z = new m.Residue(E), z.name = k(A.substring(17, 20)), 3 === z.name.length ? z.name = z.name.substring(0, 1) + z.name.substring(1).toLowerCase() : 2 === z.name.length && "D" === z.name.charAt(0) && (z.name = z.name.substring(1)), y.push(z), G = A.substring(21, 22), b(z, r, G, E, !0),
                        b(z, p, G, E, !1));
                    A = k(A.substring(12, 16));
                    z = y[y.length - 1];
                    if ("CA" === A || "P" === A || "O5'" === A) z.cp1 || (z.cp1 = D);
                    else if ("N3" === A && ("C" === z.name || "U" === z.name || "T" === z.name) || "N1" === A && ("A" === z.name || "G" === z.name)) z.cp3 = D;
                    else if ("C2" === A) z.cp4 = D;
                    else if ("C4" === A && ("C" === z.name || "U" === z.name || "T" === z.name) || "C6" === A && ("A" === z.name || "G" === z.name)) z.cp5 = D;
                    else if ("O" === A || "C6" === A && ("C" === z.name || "U" === z.name || "T" === z.name) || "N9" === A) {
                        if (!y[y.length - 1].cp2) {
                            if ("C6" === A || "N9" === A) u = D;
                            z.cp2 = D
                        }
                    } else "C" === A && (u =
                        D)
                }
            } else if (n.stringStartsWith(A, "HETATM")) z = k(A.substring(76, 78)), 0 === z.length && (z = k(A.substring(12, 16))), 1 < z.length && (z = z.substring(0, 1) + z.substring(1).toLowerCase()), z = new m.Atom(z, parseFloat(A.substring(30, 38)) * f, parseFloat(A.substring(38, 46)) * f, parseFloat(A.substring(46, 54)) * f), z.hetatm = !0, "HOH" === k(A.substring(17, 20)) && (z.isWater = !0), h.atoms.push(z), e[parseInt(k(A.substring(6, 11)))] = z;
            else if (n.stringStartsWith(A, "CONECT")) {
                if (z = parseInt(k(A.substring(6, 11))), e[z])
                    for (D = e[z], E = 0; 4 > E; E++)
                        if (z =
                            k(A.substring(11 + 5 * E, 16 + 5 * E)), 0 !== z.length && (z = parseInt(z), e[z])) {
                            for (var G = e[z], F = !1, z = 0, H = h.bonds.length; z < H; z++) {
                                var K = h.bonds[z];
                                if (K.a1 === D && K.a2 === G || K.a1 === G && K.a2 === D) {
                                    F = !0;
                                    break
                                }
                            }
                            F || h.bonds.push(new m.Bond(D, G))
                        }
            } else if (n.stringStartsWith(A, "TER")) this.endChain(h, y, u, B), y = [];
            else if (n.stringStartsWith(A, "ENDMDL")) break
        }
        this.endChain(h, y, u, B);
        0 === h.bonds.size && (new c.informatics.BondDeducer).deduceCovalentBonds(h, f);
        if (this.deduceResidueBonds)
            for (l = 0, x = B.length; l < x; l++)
                for (q = d.min(x, l + 20),
                    z = l + 1; z < q; z++) r = B[l], p = B[z], r.distance3D(p) < 1.1 * (g[r.label].covalentRadius + g[p.label].covalentRadius) && h.bonds.push(new m.Bond(r, p, 1));
        h.atoms = h.atoms.concat(B);
        this.calculateRibbonDistances && this.calculateDistances(h, B);
        return h
    };
    f.endChain = function(a, b, d, c) {
        if (0 < b.length) {
            var f = b[b.length - 1];
            f.cp1 || (f.cp1 = c[c.length - 2]);
            f.cp2 || (f.cp2 = c[c.length - 1]);
            for (c = 0; 4 > c; c++) f = new m.Residue(-1), f.cp1 = d, f.cp2 = b[b.length - 1].cp2, b.push(f);
            a.chains.push(b)
        }
    };
    f.calculateDistances = function(a, b) {
        for (var d, c = [], f =
                0, h = a.atoms.length; f < h; f++) d = a.atoms[f], d.hetatm && (d.isWater || c.push(d));
        f = 0;
        for (h = b.length; f < h; f++)
            if (d = b[f], d.closestDistance = Number.POSITIVE_INFINITY, 0 === c.length) d.closestDistance = 0;
            else
                for (var g = 0, k = c.length; g < k; g++) d.closestDistance = Math.min(d.closestDistance, d.distance3D(c[g]))
    };
    var a = new p.PDBInterpreter;
    c.readPDB = function(b, d) {
        return a.read(b, d)
    }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.ELEMENT, ChemDoodle.lib.jQuery.trim, Math);
(function(c, n, p, m, g, k) {
    var d = {
            "@": 0,
            A: 1,
            B: 2,
            C: 3,
            D: 4,
            E: 5,
            F: 6,
            G: 7,
            H: 8,
            I: 9,
            a: -1,
            b: -2,
            c: -3,
            d: -4,
            e: -5,
            f: -6,
            g: -7,
            h: -8,
            i: -9
        },
        f = {
            "%": 0,
            J: 1,
            K: 2,
            L: 3,
            M: 4,
            N: 5,
            O: 6,
            P: 7,
            Q: 8,
            R: 9,
            j: -1,
            k: -2,
            l: -3,
            m: -4,
            n: -5,
            o: -6,
            p: -7,
            q: -8,
            r: -9
        },
        b = {
            S: 1,
            T: 2,
            U: 3,
            V: 4,
            W: 5,
            X: 6,
            Y: 7,
            Z: 8,
            s: 9
        };
    p.JCAMPInterpreter = function() {};
    g = p.JCAMPInterpreter.prototype = new p._Interpreter;
    g.convertHZ2PPM = !1;
    g.read = function(a) {
        this.isBreak = function(a) {
            return d[a] !== k || f[a] !== k || b[a] !== k || " " === a || "-" === a || "+" === a
        };
        this.getValue = function(a, e) {
            var b = a.charAt(0),
                c = a.substring(1);
            return d[b] !== k ? parseFloat(d[b] + c) : f[b] !== k ? parseFloat(f[b] + c) + e : parseFloat(c)
        };
        var c = new m.Spectrum;
        if (a === k || 0 === a.length) return c;
        var h = a.split("\n");
        a = [];
        for (var g, p, C, u, y = 1, B = 1, e = 1, l = -1, x = -1, A = !0, z = !1, D = 0, E = h.length; D < E; D++) {
            var G = h[D].trim();
            var F = G.indexOf("$$"); - 1 !== F && (G = G.substring(0, F));
            if (0 !== a.length && n.stringStartsWith(h[D], "##"))
                if (F = a.join(""), A && 100 > F.length && c.metadata.push(F), a = [G], n.stringStartsWith(F, "##TITLE\x3d")) c.title = F.substring(8).trim();
                else if (n.stringStartsWith(F,
                    "##XUNITS\x3d")) c.xUnit = F.substring(9).trim(), this.convertHZ2PPM && "HZ" === c.xUnit.toUpperCase() && (c.xUnit = "PPM", z = !0);
            else if (n.stringStartsWith(F, "##YUNITS\x3d")) c.yUnit = F.substring(9).trim();
            else {
                if (!n.stringStartsWith(F, "##XYPAIRS\x3d"))
                    if (n.stringStartsWith(F, "##FIRSTX\x3d")) p = parseFloat(F.substring(9).trim());
                    else if (n.stringStartsWith(F, "##LASTX\x3d")) g = parseFloat(F.substring(8).trim());
                else if (n.stringStartsWith(F, "##FIRSTY\x3d")) C = parseFloat(F.substring(9).trim());
                else if (n.stringStartsWith(F,
                        "##NPOINTS\x3d")) u = parseFloat(F.substring(10).trim());
                else if (n.stringStartsWith(F, "##XFACTOR\x3d")) y = parseFloat(F.substring(10).trim());
                else if (n.stringStartsWith(F, "##YFACTOR\x3d")) B = parseFloat(F.substring(10).trim());
                else if (n.stringStartsWith(F, "##DELTAX\x3d")) parseFloat(F.substring(9).trim());
                else if (n.stringStartsWith(F, "##.OBSERVE FREQUENCY\x3d")) this.convertHZ2PPM && (e = parseFloat(F.substring(21).trim()));
                else if (n.stringStartsWith(F, "##.SHIFT REFERENCE\x3d")) this.convertHZ2PPM && (x = F.substring(19).split(","),
                    l = parseInt(x[2].trim()), x = parseFloat(x[3].trim()));
                else if (n.stringStartsWith(F, "##XYDATA\x3d")) {
                    z || (e = 1);
                    var H = A = !1;
                    G = F.split("\n");
                    var K = (g - p) / (u - 1);
                    var I = p - K;
                    for (var J = C, N = 0, W, F = 1, O = G.length; F < O; F++) {
                        var S = [];
                        I = G[F].trim();
                        a = [];
                        for (var Q = 0, R = I.length; Q < R; Q++) this.isBreak(I.charAt(Q)) ? (0 < a.length && (1 !== a.length || " " !== a[0]) && S.push(a.join("")), a = [I.charAt(Q)]) : a.push(I.charAt(Q));
                        S.push(a.join(""));
                        I = parseFloat(S[0]) * y - K;
                        Q = 1;
                        for (R = S.length; Q < R; Q++)
                            if (J = S[Q], b[J.charAt(0)] !== k)
                                for (var ja = parseInt(b[J.charAt(0)] +
                                        J.substring(1)) - 1, ca = 0; ca < ja; ca++) I += K, N = this.getValue(W, N), J = N * B, X++, c.data[c.data.length - 1] = new m.Point(I / e, J);
                            else d[J.charAt(0)] !== k && H ? J = this.getValue(J, N) * B : (H = f[J.charAt(0)] !== k, W = J, I += K, N = this.getValue(J, N), J = N * B, X++, c.data.push(new m.Point(I / e, J)))
                    }
                    if (-1 !== l)
                        for (G = x - c.data[l - 1].x, D = 0, E = c.data.length; D < E; D++) c.data[D].x += G
                } else if (n.stringStartsWith(F, "##PEAK TABLE\x3d")) {
                    A = !1;
                    c.continuous = !1;
                    G = F.split("\n");
                    var X = 0;
                    H = /[\s,]+/;
                    F = 1;
                    for (O = G.length; F < O; F++)
                        for (I = G[F].split(H), X += I.length / 2, Q =
                            0, R = I.length; Q + 1 < R; Q += 2) c.data.push(new m.Point(parseFloat(I[Q].trim()), parseFloat(I[Q + 1].trim())))
                } else if (n.stringStartsWith(F, "##ATOMLIST\x3d"))
                    for (c.molecule = new m.Molecule, G = F.split("\n"), H = /[\s]+/, F = 1, O = G.length; F < O; F++) I = G[F].split(H), c.molecule.atoms.push(new m.Atom(I[1]));
                else if (n.stringStartsWith(F, "##BONDLIST\x3d"))
                    for (G = F.split("\n"), H = /[\s]+/, F = 1, O = G.length; F < O; F++) I = G[F].split(H), Q = 1, "D" === I[2] ? Q = 2 : "T" === I[2] && (Q = 3), c.molecule.bonds.push(new m.Bond(c.molecule.atoms[parseInt(I[0]) - 1],
                        c.molecule.atoms[parseInt(I[1]) - 1], Q));
                else if (c.molecule && n.stringStartsWith(F, "##XY_RASTER\x3d")) {
                    G = F.split("\n");
                    H = /[\s]+/;
                    F = 1;
                    for (O = G.length; F < O; F++) I = G[F].split(H), K = c.molecule.atoms[parseInt(I[0]) - 1], K.x = parseInt(I[1]), K.y = parseInt(I[2]), 4 == I.length && (K.z = parseInt(I[3]));
                    c.molecule.scaleToAverageBondLength(20)
                } else if (n.stringStartsWith(F, "##PEAK ASSIGNMENTS\x3d"))
                    for (G = F.split("\n"), H = /[\s,()<>]+/, c.assignments = [], F = 1, O = G.length; F < O; F++) {
                        I = G[F].split(H);
                        N = parseFloat(I[1]);
                        S = parseFloat(I[2]);
                        K = c.molecule.atoms[parseInt(I[3]) - 1];
                        J = !1;
                        Q = 0;
                        for (R = c.assignments.length; Q < R; Q++)
                            if (I = c.assignments[Q], I.x === N) {
                                I.as.push(K);
                                K.assigned = I;
                                J = !0;
                                break
                            }
                        J || (I = {
                            x: N,
                            y: S,
                            as: [K]
                        }, K.assigned = I, c.assignments.push(I))
                    }
            } else G = G.trim(), 0 !== a.length && 0 !== G.length && a.push("\n"), a.push(G)
        }
        c.setup();
        return c
    };
    g.makeStructureSpectrumSet = function(a, b) {
        this.convertHZ2PPM = !0;
        var d = this.read(b),
            f = new c.ViewerCanvas(a + "_molecule", 200, 200);
        f.specs.atoms_displayTerminalCarbonLabels_2D = !0;
        f.specs.atoms_displayImplicitHydrogens_2D = !0;
        f.mouseout = function(a) {
            if (0 !== this.molecules.length) {
                a = 0;
                for (var b = this.molecules[0].atoms.length; a < b; a++) this.molecules[0].atoms[a].isHover = !1;
                d.hovered = k;
                this.repaint();
                h.repaint()
            }
        };
        f.touchend = f.mouseout;
        f.mousemove = function(a) {
            if (0 !== this.molecules.length) {
                for (var b = k, c = 0, f = this.molecules[0].atoms.length; c < f; c++) {
                    var e = this.molecules[0].atoms[c];
                    e.isHover = !1;
                    e.assigned && (b === k || a.p.distance(e) < a.p.distance(b)) && (b = e)
                }
                d.hovered = k;
                if (20 > a.p.distance(b)) {
                    c = 0;
                    for (f = b.assigned.as.length; c < f; c++) b.assigned.as[c].isHover = !0;
                    h.spectrum.hovered = b.assigned
                }
                this.repaint();
                h.repaint()
            }
        };
        f.touchmove = f.mousemove;
        f.drawChildExtras = function(a, b) {
            if (0 !== this.molecules.length)
                for (var d = 0, c = this.molecules[0].atoms.length; d < c; d++) this.molecules[0].atoms[d].drawDecorations(a, b)
        };
        var h = new c.ObserverCanvas(a + "_spectrum", 400, 200);
        h.specs.plots_showYAxis = !1;
        h.specs.plots_flipXAxis = !0;
        h.mouseout = function(a) {
            if (this.spectrum && this.spectrum.assignments) {
                a = 0;
                for (var b = f.molecules[0].atoms.length; a < b; a++) f.molecules[0].atoms[a].isHover = !1;
                this.spectrum.hovered = k;
                f.repaint();
                this.repaint()
            }
        };
        h.touchend = h.mouseout;
        h.mousemove = function(a) {
            if (this.spectrum && this.spectrum.assignments) {
                for (var b = k, d = 0, c = f.molecules[0].atoms.length; d < c; d++) f.molecules[0].atoms[d].isHover = !1;
                this.spectrum.hovered = k;
                d = 0;
                for (c = this.spectrum.assignments.length; d < c; d++) {
                    var e = this.spectrum.assignments[d];
                    if (b === k || Math.abs(this.spectrum.getTransformedX(e.x, this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x) < Math.abs(this.spectrum.getTransformedX(b.x,
                            this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x)) b = e
                }
                if (20 > Math.abs(this.spectrum.getTransformedX(b.x, this.specs, this.spectrum.memory.width, this.spectrum.memory.offsetLeft) - a.p.x)) {
                    d = 0;
                    for (c = b.as.length; d < c; d++) b.as[d].isHover = !0;
                    this.spectrum.hovered = b
                }
                f.repaint();
                this.repaint()
            }
        };
        h.touchmove = h.mousemove;
        h.drawChildExtras = function(a) {
            if (this.spectrum && this.spectrum.hovered) {
                var b = this.spectrum.getTransformedX(this.spectrum.hovered.x, h.specs, this.spectrum.memory.width,
                    this.spectrum.memory.offsetLeft);
                b >= this.spectrum.memory.offsetLeft && b < this.spectrum.memory.width && (a.save(), a.strokeStyle = "#885110", a.lineWidth = 3, a.beginPath(), a.moveTo(b, this.spectrum.memory.height - this.spectrum.memory.offsetBottom), a.lineTo(b, this.spectrum.getTransformedY(this.spectrum.hovered.y, h.specs, this.spectrum.memory.height, this.spectrum.memory.offsetBottom, this.spectrum.memory.offsetTop)), a.stroke(), a.restore())
            }
        };
        d && (h.loadSpectrum(d), d.molecule && f.loadMolecule(d.molecule));
        return [f, h]
    };
    var a = new p.JCAMPInterpreter;
    a.convertHZ2PPM = !0;
    c.readJCAMP = function(b) {
        return a.read(b)
    }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery);
(function(c, n, p, m, g, k, d) {
    n.JSONInterpreter = function() {};
    var f = n.JSONInterpreter.prototype;
    f.contentTo = function(a, b) {
        a || (a = []);
        b || (b = []);
        for (var c = 0, f = 0, h = 0, g = a.length; h < g; h++) {
            var k = a[h];
            for (var m = 0, n = k.atoms.length; m < n; m++) k.atoms[m].tmpid = "a" + c++;
            m = 0;
            for (n = k.bonds.length; m < n; m++) k.bonds[m].tmpid = "b" + f++
        }
        h = c = 0;
        for (g = b.length; h < g; h++) b[h].tmpid = "s" + c++;
        c = {};
        if (a && 0 < a.length)
            for (c.m = [], h = 0, g = a.length; h < g; h++) c.m.push(this.molTo(a[h]));
        if (b && 0 < b.length)
            for (c.s = [], h = 0, g = b.length; h < g; h++) c.s.push(this.shapeTo(b[h]));
        h = 0;
        for (g = a.length; h < g; h++) {
            k = a[h];
            m = 0;
            for (n = k.atoms.length; m < n; m++) k.atoms[m].tmpid = d;
            m = 0;
            for (n = k.bonds.length; m < n; m++) k.bonds[m].tmpid = d
        }
        h = 0;
        for (g = b.length; h < g; h++) b[h].tmpid = d;
        return c
    };
    f.contentFrom = function(a) {
        var b = {
            molecules: [],
            shapes: []
        };
        if (a.m)
            for (var c = 0, f = a.m.length; c < f; c++) b.molecules.push(this.molFrom(a.m[c]));
        if (a.s)
            for (c = 0, f = a.s.length; c < f; c++) b.shapes.push(this.shapeFrom(a.s[c], b.molecules));
        c = 0;
        for (f = b.molecules.length; c < f; c++) {
            a = b.molecules[c];
            for (var g = 0, k = a.atoms.length; g < k; g++) a.atoms[g].tmpid =
                d;
            g = 0;
            for (k = a.bonds.length; g < k; g++) a.bonds[g].tmpid = d
        }
        c = 0;
        for (f = b.shapes.length; c < f; c++) b.shapes[c].tmpid = d;
        return b
    };
    f.queryTo = function(a) {
        var b = {},
            d = function(b, d, c, f) {
                d && (b[c] = {
                    v: f ? a.outputRange(d.v) : d.v,
                    n: d.not
                })
            };
        a.type === p.Query.TYPE_ATOM ? (d(b, a.elements, "as"), d(b, a.chirality, "@"), d(b, a.aromatic, "A"), d(b, a.charge, "C", !0), d(b, a.hydrogens, "H", !0), d(b, a.ringCount, "R", !0), d(b, a.saturation, "S"), d(b, a.connectivity, "X", !0), d(b, a.connectivityNoH, "x", !0)) : (d(b, a.orders, "bs"), d(b, a.stereo, "@"), d(b, a.aromatic,
            "A"), d(b, a.ringCount, "R", !0));
        return b
    };
    f.molTo = function(a) {
        for (var b = {
                a: []
            }, d = 0, c = a.atoms.length; d < c; d++) {
            var f = a.atoms[d],
                g = {
                    x: f.x,
                    y: f.y
                };
            f.tmpid && (g.i = f.tmpid);
            "C" !== f.label && (g.l = f.label);
            0 !== f.z && (g.z = f.z);
            0 !== f.charge && (g.c = f.charge); - 1 !== f.mass && (g.m = f.mass); - 1 !== f.implicitH && (g.h = f.implicitH);
            0 !== f.numRadical && (g.r = f.numRadical);
            0 !== f.numLonePair && (g.p = f.numLonePair);
            f.query && (g.q = this.queryTo(f.query));
            b.a.push(g)
        }
        if (0 < a.bonds.length)
            for (b.b = [], d = 0, c = a.bonds.length; d < c; d++) f = a.bonds[d], g = {
                b: a.atoms.indexOf(f.a1),
                e: a.atoms.indexOf(f.a2)
            }, f.tmpid && (g.i = f.tmpid), 1 !== f.bondOrder && (g.o = f.bondOrder), f.stereo !== p.Bond.STEREO_NONE && (g.s = f.stereo), f.query && (g.q = this.queryTo(f.query)), b.b.push(g);
        return b
    };
    f.queryFrom = function(a) {
        var b = new p.Query(a.as ? p.Query.TYPE_ATOM : p.Query.TYPE_BOND),
            d = function(a, b, d, c) {
                b && (a[d] = {}, a[d].v = c ? a.parseRange(b.v) : b.v, b.n && (a[d].not = !0))
            };
        b.type === p.Query.TYPE_ATOM ? (d(b, a.as, "elements"), d(b, a["@"], "chirality"), d(b, a.A, "aromatic"), d(b, a.C, "charge", !0), d(b, a.H,
            "hydrogens", !0), d(b, a.R, "ringCount", !0), d(b, a.S, "saturation"), d(b, a.X, "connectivity", !0), d(b, a.x, "connectivityNoH", !0)) : (d(b, a.bs, "orders"), d(b, a["@"], "stereo"), d(b, a.A, "aromatic"), d(b, a.R, "ringCount", !0));
        return b
    };
    f.molFrom = function(a) {
        for (var b, c = new p.Molecule, f = 0, g = a.a.length; f < g; f++) {
            b = a.a[f];
            var k = new p.Atom(b.l ? b.l : "C", b.x, b.y);
            b.i && (k.tmpid = b.i);
            b.z && (k.z = b.z);
            b.c && (k.charge = b.c);
            b.m && (k.mass = b.m);
            b.h && (k.implicitH = b.h);
            b.r && (k.numRadical = b.r);
            b.p && (k.numLonePair = b.p);
            b.q && (k.query = this.queryFrom(b.q));
            b.p_h !== d && (k.hetatm = b.p_h);
            b.p_w !== d && (k.isWater = b.p_w);
            b.p_d !== d && (k.closestDistance = b.p_d);
            c.atoms.push(k)
        }
        if (a.b)
            for (f = 0, g = a.b.length; f < g; f++) b = a.b[f], k = new p.Bond(c.atoms[b.b], c.atoms[b.e], b.o === d ? 1 : b.o), b.i && (k.tmpid = b.i), b.s && (k.stereo = b.s), b.q && (k.query = this.queryFrom(b.q)), c.bonds.push(k);
        return c
    };
    f.shapeTo = function(a) {
        var b = {};
        a.tmpid && (b.i = a.tmpid);
        if (a instanceof m.Line) b.t = "Line", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, b.a = a.arrowType;
        else if (a instanceof m.Pusher) b.t = "Pusher",
            b.o1 = a.o1.tmpid, b.o2 = a.o2.tmpid, 1 !== a.numElectron && (b.e = a.numElectron);
        else if (a instanceof m.AtomMapping) b.t = "AtomMapping", b.a1 = a.o1.tmpid, b.a2 = a.o2.tmpid;
        else if (a instanceof m.Bracket) b.t = "Bracket", b.x1 = a.p1.x, b.y1 = a.p1.y, b.x2 = a.p2.x, b.y2 = a.p2.y, 0 !== a.charge && (b.c = a.charge), 0 !== a.mult && (b.m = a.mult), 0 !== a.repeat && (b.r = a.repeat);
        else if (a instanceof m.DynamicBracket) b.t = "DynamicBracket", b.b1 = a.b1.tmpid, b.b2 = a.b2.tmpid, b.n1 = a.n1, b.n2 = a.n2, !0 === a.flip && (b.f = !0);
        else if (a instanceof m.VAP) {
            b.t = "VAP";
            b.x = a.asterisk.x;
            b.y = a.asterisk.y;
            1 !== a.bondType && (b.o = a.bondType);
            a.substituent && (b.s = a.substituent.tmpid);
            b.a = [];
            for (var d = 0, c = a.attachments.length; d < c; d++) b.a.push(a.attachments[d].tmpid)
        } else if (a instanceof g.Distance) b.t = "Distance", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, a.node && (b.n = a.node, b.o = a.offset);
        else if (a instanceof g.Angle) b.t = "Angle", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid;
        else if (a instanceof g.Torsion) b.t = "Torsion", b.a1 = a.a1.tmpid, b.a2 = a.a2.tmpid, b.a3 = a.a3.tmpid, b.a4 = a.a4.tmpid;
        else if (a instanceof g._Surface) {
            b.t = "Surface";
            b.a = [];
            d = 0;
            for (c = a.atoms.length; d < c; d++) b.a.push(a.atoms[d].tmpid);
            a instanceof g.VDWSurface || (b.p = a.probeRadius);
            b.r = a.resolution;
            d = "vdw";
            a instanceof g.SASSurface ? d = "sas" : g.SESSurface && a instanceof g.SESSurface && (d = "ses");
            b.f = d
        } else if (a instanceof g.UnitCell)
            for (d in b.t = "UnitCell", a.unitCell) b[d] = a.unitCell[d];
        return b
    };
    f.shapeFrom = function(a, b) {
        var c, f, h;
        if ("Line" === a.t) {
            var k = new m.Line(new p.Point(a.x1, a.y1), new p.Point(a.x2, a.y2));
            k.arrowType =
                a.a
        } else if ("Pusher" === a.t) {
            for (var n, u, y = 0, B = b.length; y < B; y++) {
                var e = b[y];
                for (var l = 0, x = e.atoms.length; l < x; l++) {
                    var A = e.atoms[l];
                    A.tmpid === a.o1 ? n = A : A.tmpid === a.o2 && (u = A)
                }
                l = 0;
                for (x = e.bonds.length; l < x; l++) k = e.bonds[l], k.tmpid === a.o1 ? n = k : k.tmpid === a.o2 && (u = k)
            }
            k = new m.Pusher(n, u);
            a.e && (k.numElectron = a.e)
        } else if ("AtomMapping" === a.t) {
            y = 0;
            for (B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++) A = e.atoms[l], A.tmpid === a.a1 ? h = A : A.tmpid === a.a2 && (f = A);
            k = new m.AtomMapping(h, f)
        } else if ("Bracket" === a.t) k =
            new m.Bracket(new p.Point(a.x1, a.y1), new p.Point(a.x2, a.y2)), a.c !== d && (k.charge = a.c), a.m !== d && (k.mult = a.m), a.r !== d && (k.repeat = a.r);
        else if ("DynamicBracket" === a.t) {
            for (var z, y = 0, B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.bonds.length; l < x; l++) k = e.bonds[l], k.tmpid === a.b1 ? A = k : k.tmpid === a.b2 && (z = k);
            k = new m.DynamicBracket(A, z);
            k.n1 = a.n1;
            k.n2 = a.n2;
            a.f && (k.flip = !0)
        } else if ("VAP" === a.t)
            for (k = new m.VAP(a.x, a.y), a.o && (k.bondType = a.o), y = 0, B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++)
                    if (A = e.atoms[l],
                        A.tmpid === a.s) k.substituent = A;
                    else
                        for (u = 0, c = a.a.length; u < c; u++) A.tmpid === a.a[u] && k.attachments.push(A);
        else if ("Distance" === a.t) {
            y = 0;
            for (B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++) A = e.atoms[l], A.tmpid === a.a1 ? h = A : A.tmpid === a.a2 && (f = A);
            k = new g.Distance(h, f, a.n, a.o)
        } else if ("Angle" === a.t) {
            y = 0;
            for (B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++) A = e.atoms[l], A.tmpid === a.a1 ? h = A : A.tmpid === a.a2 ? f = A : A.tmpid === a.a3 && (c = A);
            k = new g.Angle(h, f, c)
        } else if ("Torsion" === a.t) {
            for (var D, y =
                    0, B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++) A = e.atoms[l], A.tmpid === a.a1 ? h = A : A.tmpid === a.a2 ? f = A : A.tmpid === a.a3 ? c = A : A.tmpid === a.a4 && (D = A);
            k = new g.Torsion(h, f, c, D)
        } else if ("Surface" === a.t) {
            n = [];
            y = 0;
            for (B = b.length; y < B; y++)
                for (e = b[y], l = 0, x = e.atoms.length; l < x; l++)
                    for (A = e.atoms[l], u = 0, c = a.a.length; u < c; u++) A.tmpid === a.a[u] && n.push(A);
            e = a.p ? a.p : 1.4;
            y = a.r ? a.r : 30;
            "vdw" === a.f ? k = new g.VDWSurface(n, y) : "sas" === a.f ? k = new g.SASSurface(n, e, y) : "ses" === a.f && (k = new g.SESSurface(n, e, y))
        } else if ("UnitCell" ===
            a.t) {
            k = {};
            for (e in a) k[e] = a[e];
            k = new g.UnitCell(k)
        }
        return k
    };
    f.pdbFrom = function(a) {
        var b = this.molFrom(a.mol);
        b.findRings = !1;
        b.fromJSON = !0;
        b.chains = this.chainsFrom(a.ribbons);
        return b
    };
    f.chainsFrom = function(a) {
        for (var b = [], d = 0, c = a.cs.length; d < c; d++) {
            for (var f = a.cs[d], g = [], k = 0, m = f.length; k < m; k++) {
                var n = f[k],
                    B = new p.Residue;
                B.name = n.n;
                B.cp1 = new p.Atom("", n.x1, n.y1, n.z1);
                B.cp2 = new p.Atom("", n.x2, n.y2, n.z2);
                n.x3 && (B.cp3 = new p.Atom("", n.x3, n.y3, n.z3), B.cp4 = new p.Atom("", n.x4, n.y4, n.z4), B.cp5 = new p.Atom("",
                    n.x5, n.y5, n.z5));
                B.helix = n.h;
                B.sheet = n.s;
                B.arrow = 0 < k && f[k - 1].a;
                g.push(B)
            }
            b.push(g)
        }
        return b
    };
    var b = new n.JSONInterpreter;
    c.readJSON = function(a) {
        try {
            var c = k.parse(a)
        } catch (r) {
            return d
        }
        return c ? c.m || c.s ? b.contentFrom(c) : c.a ? {
            molecules: [b.molFrom(c)],
            shapes: []
        } : {
            molecules: [],
            shapes: []
        } : d
    };
    c.writeJSON = function(a, d) {
        return k.stringify(b.contentTo(a, d))
    }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.structures.d2, ChemDoodle.structures.d3, JSON);
(function(c, n, p, m) {
    n.RXNInterpreter = function() {};
    var g = n.RXNInterpreter.prototype = new n._Interpreter;
    g.read = function(d, f) {
        f || (f = c.default_bondLength_2D);
        var b = [],
            a;
        if (d) {
            var g = d.split("$MOL\n");
            var k = g[0].split("\n")[4],
                m = parseInt(k.substring(0, 3)),
                k = parseInt(k.substring(3, 6));
            var q = 1;
            for (var n = 0, C = 0, u = m + k; C < u; C++) {
                b[C] = c.readMOL(g[q], f);
                var y = b[C].getBounds();
                y = y.maxX - y.minX;
                n -= y + 40;
                q++
            }
            C = 0;
            for (u = m; C < u; C++) {
                y = b[C].getBounds();
                y = y.maxX - y.minX;
                q = b[C].getCenter();
                var B = 0;
                for (a = b[C].atoms.length; B < a; B++) g =
                    b[C].atoms[B], g.x += n + y / 2 - q.x, g.y -= q.y;
                n += y + 40
            }
            a = new p.d2.Line(new p.Point(n, 0), new p.Point(n + 40, 0));
            n += 80;
            C = m;
            for (u = m + k; C < u; C++) {
                y = b[C].getBounds();
                y = y.maxX - y.minX;
                q = b[C].getCenter();
                for (B = 0; B < b[C].atoms.length; B++) g = b[C].atoms[B], g.x += n + y / 2 - q.x, g.y -= q.y;
                n += y + 40
            }
        } else b.push(new p.Molecule), a = new p.d2.Line(new p.Point(-20, 0), new p.Point(20, 0));
        a.arrowType = p.d2.Line.ARROW_SYNTHETIC;
        return {
            molecules: b,
            shapes: [a]
        }
    };
    g.write = function(d, f) {
        var b = [
                [],
                []
            ],
            a = m;
        if (d && f) {
            g = 0;
            for (k = f.length; g < k; g++)
                if (f[g] instanceof p.d2.Line) {
                    a = f[g].getPoints();
                    break
                }
            if (!a) return "";
            for (var g = 0, k = d.length; g < k; g++) d[g].getCenter().x < a[1].x ? b[0].push(d[g]) : b[1].push(d[g]);
            a = [];
            a.push("$RXN\nReaction from ChemDoodle Web Components\n\nhttp://www.ichemlabs.com\n");
            a.push(this.fit(b[0].length.toString(), 3));
            a.push(this.fit(b[1].length.toString(), 3));
            a.push("\n");
            for (g = 0; 2 > g; g++)
                for (var k = 0, n = b[g].length; k < n; k++) a.push("$MOL\n"), a.push(c.writeMOL(b[g][k])), a.push("\n");
            return a.join("")
        }
    };
    var k = new n.RXNInterpreter;
    c.readRXN = function(d,
        c) {
        return k.read(d, c)
    };
    c.writeRXN = function(d, c) {
        return k.write(d, c)
    }
})(ChemDoodle, ChemDoodle.io, ChemDoodle.structures);
(function(c, n, p, m, g, k, d) {
    m.XYZInterpreter = function() {};
    n = m.XYZInterpreter.prototype = new m._Interpreter;
    n.deduceCovalentBonds = !0;
    n.read = function(b) {
        var a = new g.Molecule;
        if (!b) return a;
        b = b.split("\n");
        for (var d = parseInt(k(b[0])), f = 0; f < d; f++) {
            var m = b[f + 2].split(/\s+/g);
            a.atoms[f] = new g.Atom(isNaN(m[0]) ? m[0] : p[parseInt(m[0]) - 1], parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]))
        }
        this.deduceCovalentBonds && (new c.informatics.BondDeducer).deduceCovalentBonds(a, 1);
        return a
    };
    var f = new m.XYZInterpreter;
    c.readXYZ =
        function(b) {
            return f.read(b)
        }
})(ChemDoodle, ChemDoodle.ELEMENT, ChemDoodle.SYMBOLS, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery.trim);
ChemDoodle.monitor = function(c, n, p, m) {
    var g = {};
    g.CANVAS_DRAGGING = m;
    g.CANVAS_OVER = m;
    g.ALT = !1;
    g.SHIFT = !1;
    g.META = !1;
    c.supports_touch() || n(p).ready(function() {
        n(p).mousemove(function(c) {
            g.CANVAS_DRAGGING && g.CANVAS_DRAGGING.drag && (g.CANVAS_DRAGGING.prehandleEvent(c), g.CANVAS_DRAGGING.drag(c))
        });
        n(p).mouseup(function(c) {
            g.CANVAS_DRAGGING && g.CANVAS_DRAGGING !== g.CANVAS_OVER && g.CANVAS_DRAGGING.mouseup && (g.CANVAS_DRAGGING.prehandleEvent(c), g.CANVAS_DRAGGING.mouseup(c));
            g.CANVAS_DRAGGING = m
        });
        n(p).keydown(function(c) {
            g.SHIFT =
                c.shiftKey;
            g.ALT = c.altKey;
            g.META = c.metaKey || c.ctrlKey;
            var d = g.CANVAS_OVER;
            g.CANVAS_DRAGGING && (d = g.CANVAS_DRAGGING);
            d && d.keydown && (d.prehandleEvent(c), d.keydown(c))
        });
        n(p).keypress(function(c) {
            var d = g.CANVAS_OVER;
            g.CANVAS_DRAGGING && (d = g.CANVAS_DRAGGING);
            d && d.keypress && (d.prehandleEvent(c), d.keypress(c))
        });
        n(p).keyup(function(c) {
            g.SHIFT = c.shiftKey;
            g.ALT = c.altKey;
            g.META = c.metaKey || c.ctrlKey;
            var d = g.CANVAS_OVER;
            g.CANVAS_DRAGGING && (d = g.CANVAS_DRAGGING);
            d && d.keyup && (d.prehandleEvent(c), d.keyup(c))
        })
    });
    return g
}(ChemDoodle.featureDetection, ChemDoodle.lib.jQuery, document);
(function(c, n, p, m, g, k, d, f, b, a, h) {
    c._Canvas = function() {};
    var r = c._Canvas.prototype;
    r.molecules = h;
    r.shapes = h;
    r.emptyMessage = h;
    r.image = h;
    r.repaint = function() {
        if (!this.test) {
            var a = f.getElementById(this.id);
            if (a.getContext) {
                var b = a.getContext("2d");
                1 !== this.pixelRatio && a.width === this.width && (a.width = this.width * this.pixelRatio, a.height = this.height * this.pixelRatio, b.scale(this.pixelRatio, this.pixelRatio));
                this.image ? b.drawImage(this.image, 0, 0) : (this.specs.backgroundColor && this.bgCache !== a.style.backgroundColor &&
                    (a.style.backgroundColor = this.specs.backgroundColor, this.bgCache = a.style.backgroundColor), b.fillStyle = this.specs.backgroundColor, b.fillRect(0, 0, this.width, this.height));
                if (this.innerRepaint) this.innerRepaint(b);
                else if (0 !== this.molecules.length || 0 !== this.shapes.length) {
                    b.save();
                    b.translate(this.width / 2, this.height / 2);
                    b.rotate(this.specs.rotateAngle);
                    b.scale(this.specs.scale, this.specs.scale);
                    b.translate(-this.width / 2, -this.height / 2);
                    for (var a = 0, d = this.molecules.length; a < d; a++) this.molecules[a].check(!0),
                        this.molecules[a].draw(b, this.specs);
                    this.checksOnAction && this.checksOnAction(!0);
                    a = 0;
                    for (d = this.shapes.length; a < d; a++) this.shapes[a].draw(b, this.specs);
                    b.restore()
                } else this.emptyMessage && (b.fillStyle = "#737683", b.textAlign = "center", b.textBaseline = "middle", b.font = "18px Helvetica, Verdana, Arial, Sans-serif", b.fillText(this.emptyMessage, this.width / 2, this.height / 2));
                this.drawChildExtras && this.drawChildExtras(b, this.specs)
            }
        }
    };
    r.resize = function(a, b) {
        var d = k("#" + this.id);
        d.attr({
            width: a,
            height: b
        });
        d.css("width",
            a);
        d.css("height", b);
        this.width = a;
        this.height = b;
        if (c._Canvas3D && this instanceof c._Canvas3D) {
            var d = a,
                f = b;
            1 !== this.pixelRatio && (d *= this.pixelRatio, f *= this.pixelRatio, this.gl.canvas.width = d, this.gl.canvas.height = f);
            this.gl.viewport(0, 0, d, f);
            this.afterLoadContent()
        } else if (0 < this.molecules.length)
            for (this.center(), d = 0, f = this.molecules.length; d < f; d++) this.molecules[d].check();
        this.repaint()
    };
    r.setBackgroundImage = function(a) {
        this.image = new Image;
        var b = this;
        this.image.onload = function() {
            b.repaint()
        };
        this.image.src =
            a
    };
    r.loadMolecule = function(a) {
        this.clear();
        this.molecules.push(a);
        for (var b = 0; 2 > b; b++) this.center(), c._Canvas3D && this instanceof c._Canvas3D || a.check(), this.afterLoadContent && this.afterLoadContent(), this.repaint()
    };
    r.loadContent = function(a, b) {
        this.molecules = a ? a : [];
        this.shapes = b ? b : [];
        for (var d = 0; 2 > d; d++) {
            this.center();
            if (!(c._Canvas3D && this instanceof c._Canvas3D))
                for (var d = 0, f = this.molecules.length; d < f; d++) this.molecules[d].check();
            this.afterLoadContent && this.afterLoadContent();
            this.repaint()
        }
    };
    r.addMolecule =
        function(a) {
            this.molecules.push(a);
            c._Canvas3D && this instanceof c._Canvas3D || a.check();
            this.repaint()
        };
    r.removeMolecule = function(a) {
        this.molecules = k.grep(this.molecules, function(b) {
            return b !== a
        });
        this.repaint()
    };
    r.getMolecule = function() {
        return 0 < this.molecules.length ? this.molecules[0] : h
    };
    r.getMolecules = function() {
        return this.molecules
    };
    r.addShape = function(a) {
        this.shapes.push(a);
        this.repaint()
    };
    r.removeShape = function(a) {
        this.shapes = k.grep(this.shapes, function(b) {
            return b !== a
        });
        this.repaint()
    };
    r.getShapes =
        function() {
            return this.shapes
        };
    r.clear = function() {
        this.molecules = [];
        this.shapes = [];
        this.specs.scale = 1;
        this.repaint()
    };
    r.center = function() {
        for (var a = this.getContentBounds(), b = new g.Point((this.width - a.minX - a.maxX) / 2, (this.height - a.minY - a.maxY) / 2), c = 0, f = this.molecules.length; c < f; c++)
            for (var h = this.molecules[c], k = 0, m = h.atoms.length; k < m; k++) h.atoms[k].add(b);
        c = 0;
        for (f = this.shapes.length; c < f; c++)
            for (h = this.shapes[c].getPoints(), k = 0, m = h.length; k < m; k++) h[k].add(b);
        this.specs.scale = 1;
        b = a.maxX - a.minX;
        a = a.maxY -
            a.minY;
        if (b > this.width - 20 || a > this.height - 20) this.specs.scale = .85 * d.min(this.width / b, this.height / a)
    };
    r.bondExists = function(a, b) {
        for (var d = 0, c = this.molecules.length; d < c; d++)
            for (var f = this.molecules[d], g = 0, h = f.bonds.length; g < h; g++) {
                var e = f.bonds[g];
                if (e.contains(a) && e.contains(b)) return !0
            }
        return !1
    };
    r.getBond = function(a, b) {
        for (var d = 0, c = this.molecules.length; d < c; d++)
            for (var f = this.molecules[d], g = 0, k = f.bonds.length; g < k; g++) {
                var e = f.bonds[g];
                if (e.contains(a) && e.contains(b)) return e
            }
        return h
    };
    r.getMoleculeByAtom =
        function(a) {
            for (var b = 0, d = this.molecules.length; b < d; b++) {
                var c = this.molecules[b];
                if (-1 !== c.atoms.indexOf(a)) return c
            }
            return h
        };
    r.getAllAtoms = function() {
        for (var a = [], b = 0, d = this.molecules.length; b < d; b++) a = a.concat(this.molecules[b].atoms);
        return a
    };
    r.getAllBonds = function() {
        for (var a = [], b = 0, d = this.molecules.length; b < d; b++) a = a.concat(this.molecules[b].bonds);
        return a
    };
    r.getAllPoints = function() {
        for (var a = [], b = 0, d = this.molecules.length; b < d; b++) a = a.concat(this.molecules[b].atoms);
        b = 0;
        for (d = this.shapes.length; b <
            d; b++) a = a.concat(this.shapes[b].getPoints());
        return a
    };
    r.getContentBounds = function() {
        for (var a = new p.Bounds, b = 0, d = this.molecules.length; b < d; b++) a.expand(this.molecules[b].getBounds());
        b = 0;
        for (d = this.shapes.length; b < d; b++) a.expand(this.shapes[b].getBounds());
        return a
    };
    r.create = function(p, q, r) {
        this.id = p;
        this.width = q;
        this.height = r;
        this.molecules = [];
        this.shapes = [];
        if (f.getElementById(p)) {
            var v = k("#" + p);
            q ? v.attr("width", q) : this.width = v.attr("width");
            r ? v.attr("height", r) : this.height = v.attr("height");
            v.attr("class",
                "ChemDoodleWebComponent")
        } else if (c.featureDetection.supports_canvas_text() || -1 == a.indexOf("MSIE")) f.writeln('\x3ccanvas class\x3d"ChemDoodleWebComponent" id\x3d"' + p + '" width\x3d"' + q + '" height\x3d"' + r + '" alt\x3d"ChemDoodle Web Component"\x3eThis browser does not support HTML5/Canvas.\x3c/canvas\x3e');
        else {
            f.writeln('\x3cdiv style\x3d"border: 1px solid black;" width\x3d"' + q + '" height\x3d"' + r + '"\x3ePlease install \x3ca href\x3d"http://code.google.com/chrome/chromeframe/"\x3eGoogle Chrome Frame\x3c/a\x3e, then restart Internet Explorer.\x3c/div\x3e');
            return
        }
        p = k("#" + p);
        p.css("width", this.width);
        p.css("height", this.height);
        this.pixelRatio = b.devicePixelRatio ? b.devicePixelRatio : 1;
        this.specs = new g.VisualSpecifications;
        var u = this;
        n.supports_touch() ? (p.bind("touchstart", function(a) {
            var b = (new Date).getTime();
            if (!n.supports_gesture() && 2 === a.originalEvent.touches.length) {
                var e = a.originalEvent.touches,
                    d = new g.Point(e[0].pageX, e[0].pageY),
                    e = new g.Point(e[1].pageX, e[1].pageY);
                u.implementedGestureDist = d.distance(e);
                u.implementedGestureAngle = d.angle(e);
                u.gesturestart &&
                    (u.prehandleEvent(a), u.gesturestart(a))
            }
            u.lastTouch && 1 === a.originalEvent.touches.length && 500 > b - u.lastTouch ? u.dbltap ? (u.prehandleEvent(a), u.dbltap(a)) : u.dblclick ? (u.prehandleEvent(a), u.dblclick(a)) : u.touchstart ? (u.prehandleEvent(a), u.touchstart(a)) : u.mousedown && (u.prehandleEvent(a), u.mousedown(a)) : u.touchstart ? (u.prehandleEvent(a), u.touchstart(a), this.hold && clearTimeout(this.hold), this.touchhold && (this.hold = setTimeout(function() {
                u.touchhold(a)
            }, 1E3))) : u.mousedown && (u.prehandleEvent(a), u.mousedown(a));
            u.lastTouch = b
        }), p.bind("touchmove", function(a) {
            this.hold && (clearTimeout(this.hold), this.hold = h);
            if (!n.supports_gesture() && 2 === a.originalEvent.touches.length && u.gesturechange) {
                var b = a.originalEvent.touches,
                    e = new g.Point(b[0].pageX, b[0].pageY),
                    c = new g.Point(b[1].pageX, b[1].pageY),
                    b = e.distance(c),
                    e = e.angle(c);
                a.originalEvent.scale = b / u.implementedGestureDist;
                a.originalEvent.rotation = 180 * (u.implementedGestureAngle - e) / d.PI;
                u.prehandleEvent(a);
                u.gesturechange(a)
            }
            if (1 < a.originalEvent.touches.length && u.multitouchmove) {
                e =
                    a.originalEvent.touches.length;
                u.prehandleEvent(a);
                b = new g.Point(-a.offset.left * e, -a.offset.top * e);
                for (c = 0; c < e; c++) b.x += a.originalEvent.changedTouches[c].pageX, b.y += a.originalEvent.changedTouches[c].pageY;
                b.x /= e;
                b.y /= e;
                a.p = b;
                u.multitouchmove(a, e)
            } else u.touchmove ? (u.prehandleEvent(a), u.touchmove(a)) : u.drag && (u.prehandleEvent(a), u.drag(a))
        }), p.bind("touchend", function(a) {
            this.hold && (clearTimeout(this.hold), this.hold = h);
            !n.supports_gesture() && u.implementedGestureDist && (u.implementedGestureDist = h, u.implementedGestureAngle =
                h, u.gestureend && (u.prehandleEvent(a), u.gestureend(a)));
            u.touchend ? (u.prehandleEvent(a), u.touchend(a)) : u.mouseup && (u.prehandleEvent(a), u.mouseup(a));
            250 > (new Date).getTime() - u.lastTouch && (u.tap ? (u.prehandleEvent(a), u.tap(a)) : u.click && (u.prehandleEvent(a), u.click(a)))
        }), p.bind("gesturestart", function(a) {
            u.gesturestart && (u.prehandleEvent(a), u.gesturestart(a))
        }), p.bind("gesturechange", function(a) {
            u.gesturechange && (u.prehandleEvent(a), u.gesturechange(a))
        }), p.bind("gestureend", function(a) {
            u.gestureend &&
                (u.prehandleEvent(a), u.gestureend(a))
        })) : (p.click(function(a) {
            switch (a.which) {
                case 1:
                    u.click && (u.prehandleEvent(a), u.click(a));
                    break;
                case 2:
                    u.middleclick && (u.prehandleEvent(a), u.middleclick(a));
                    break;
                case 3:
                    u.rightclick && (u.prehandleEvent(a), u.rightclick(a))
            }
        }), p.dblclick(function(a) {
            u.dblclick && (u.prehandleEvent(a), u.dblclick(a))
        }), p.mousedown(function(a) {
            switch (a.which) {
                case 1:
                    m.CANVAS_DRAGGING = u;
                    u.mousedown && (u.prehandleEvent(a), u.mousedown(a));
                    break;
                case 2:
                    u.middlemousedown && (u.prehandleEvent(a),
                        u.middlemousedown(a));
                    break;
                case 3:
                    u.rightmousedown && (u.prehandleEvent(a), u.rightmousedown(a))
            }
        }), p.mousemove(function(a) {
            !m.CANVAS_DRAGGING && u.mousemove && (u.prehandleEvent(a), u.mousemove(a))
        }), p.mouseout(function(a) {
            m.CANVAS_OVER = h;
            u.mouseout && (u.prehandleEvent(a), u.mouseout(a))
        }), p.mouseover(function(a) {
            m.CANVAS_OVER = u;
            u.mouseover && (u.prehandleEvent(a), u.mouseover(a))
        }), p.mouseup(function(a) {
            switch (a.which) {
                case 1:
                    u.mouseup && (u.prehandleEvent(a), u.mouseup(a));
                    break;
                case 2:
                    u.middlemouseup && (u.prehandleEvent(a),
                        u.middlemouseup(a));
                    break;
                case 3:
                    u.rightmouseup && (u.prehandleEvent(a), u.rightmouseup(a))
            }
        }), p.mousewheel(function(a, b) {
            u.mousewheel && (u.prehandleEvent(a), u.mousewheel(a, b))
        }));
        this.subCreate && this.subCreate()
    };
    r.prehandleEvent = function(a) {
        a.originalEvent.changedTouches && (a.pageX = a.originalEvent.changedTouches[0].pageX, a.pageY = a.originalEvent.changedTouches[0].pageY);
        this.doEventDefault || (a.preventDefault(), a.returnValue = !1);
        a.offset = k("#" + this.id).offset();
        a.p = new g.Point(a.pageX - a.offset.left, a.pageY -
            a.offset.top)
    }
})(ChemDoodle, ChemDoodle.featureDetection, ChemDoodle.math, ChemDoodle.monitor, ChemDoodle.structures, ChemDoodle.lib.jQuery, Math, document, window, navigator.userAgent);
(function(c, n, p) {
    c._AnimatorCanvas = function(c, g, k) {
        c && this.create(c, g, k)
    };
    c = c._AnimatorCanvas.prototype = new c._Canvas;
    c.timeout = 33;
    c.startAnimation = function() {
        this.stopAnimation();
        this.lastTime = (new Date).getTime();
        var c = this;
        this.nextFrame && (this.handle = n.requestInterval(function() {
            var g = (new Date).getTime();
            c.nextFrame(g - c.lastTime);
            c.repaint();
            c.lastTime = g
        }, this.timeout))
    };
    c.stopAnimation = function() {
        this.handle && (n.clearRequestInterval(this.handle), this.handle = p)
    };
    c.isRunning = function() {
        return this.handle !==
            p
    }
})(ChemDoodle, ChemDoodle.animations);
(function(c, n, p) {
    c.FileCanvas = function(c, g, k, d) {
        c && this.create(c, g, k);
        n.writeln('\x3cbr\x3e\x3cform name\x3d"FileForm" enctype\x3d"multipart/form-data" method\x3d"POST" action\x3d"' + d + '" target\x3d"HiddenFileFrame"\x3e\x3cinput type\x3d"file" name\x3d"f" /\x3e\x3cinput type\x3d"submit" name\x3d"submitbutton" value\x3d"Show File" /\x3e\x3c/form\x3e\x3ciframe id\x3d"HFF-' + c + '" name\x3d"HiddenFileFrame" height\x3d"0" width\x3d"0" style\x3d"display:none;" onLoad\x3d"GetMolFromFrame(\'HFF-' + c + "', " + c +
            ')"\x3e\x3c/iframe\x3e');
        this.emptyMessage = "Click below to load file";
        this.repaint()
    };
    c.FileCanvas.prototype = new c._Canvas
})(ChemDoodle, document);
(function(c, n) {
    c.HyperlinkCanvas = function(c, g, k, d, f, b) {
        c && this.create(c, g, k);
        this.urlOrFunction = d;
        this.color = f ? f : "blue";
        this.size = b ? b : 2
    };
    var p = c.HyperlinkCanvas.prototype = new c._Canvas;
    p.openInNewWindow = !0;
    p.hoverImage = n;
    p.drawChildExtras = function(c) {
        this.e && (this.hoverImage ? c.drawImage(this.hoverImage, 0, 0) : (c.strokeStyle = this.color, c.lineWidth = 2 * this.size, c.strokeRect(0, 0, this.width, this.height)))
    };
    p.setHoverImage = function(c) {
        this.hoverImage = new Image;
        this.hoverImage.src = c
    };
    p.click = function(c) {
        this.e =
            n;
        this.repaint();
        this.urlOrFunction instanceof Function ? this.urlOrFunction() : this.openInNewWindow ? window.open(this.urlOrFunction) : location.href = this.urlOrFunction
    };
    p.mouseout = function(c) {
        this.e = n;
        this.repaint()
    };
    p.mouseover = function(c) {
        this.e = c;
        this.repaint()
    }
})(ChemDoodle);
(function(c, n, p, m, g) {
    c.MolGrabberCanvas = function(c, d, f) {
        c && this.create(c, d, f);
        d = [];
        d.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
        d.push(c);
        d.push('_query" size\x3d"32" value\x3d"" /\x3e');
        d.push(this.getInputFields());
        m.getElementById(c);
        p("#" + c).after(d.join(""));
        var b = this;
        p("#" + c + "_submit").click(function() {
            b.search()
        });
        p("#" + c + "_query").keypress(function(a) {
            13 === a.which && b.search()
        });
        this.emptyMessage = "Enter search term below";
        this.repaint()
    };
    c = c.MolGrabberCanvas.prototype = new c._Canvas;
    c.setSearchTerm = function(c) {
        p("#" + this.id + "_query").val(c);
        this.search()
    };
    c.getInputFields = function() {
        var c = [];
        c.push("\x3cbr\x3e\x3cnobr\x3e");
        c.push('\x3cselect id\x3d"');
        c.push(this.id);
        c.push('_select"\x3e');
        c.push('\x3coption value\x3d"chemexper"\x3eChemExper');
        c.push('\x3coption value\x3d"chemspider"\x3eChemSpider');
        c.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
        c.push("\x3c/select\x3e");
        c.push('\x3cbutton id\x3d"');
        c.push(this.id);
        c.push('_submit"\x3eShow Molecule\x3c/button\x3e');
        c.push("\x3c/nobr\x3e");
        return c.join("")
    };
    c.search = function() {
        this.emptyMessage = "Searching...";
        this.clear();
        var c = this;
        n.getMoleculeFromDatabase(p("#" + this.id + "_query").val(), {
            database: p("#" + this.id + "_select").val()
        }, function(d) {
            c.loadMolecule(d)
        })
    }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function(c, n, p, m) {
    var g = [],
        k = [1, 0, 0],
        d = [0, 1, 0],
        f = [0, 0, 1];
    c.RotatorCanvas = function(b, a, d, c) {
        b && this.create(b, a, d);
        this.rotate3D = c
    };
    c = c.RotatorCanvas.prototype = new c._AnimatorCanvas;
    n = n.PI / 15;
    c.xIncrement = n;
    c.yIncrement = n;
    c.zIncrement = n;
    c.nextFrame = function(b) {
        if (0 === this.molecules.length && 0 === this.shapes.length) this.stopAnimation();
        else if (b /= 1E3, this.rotate3D) {
            p.identity(g);
            p.rotate(g, this.xIncrement * b, k);
            p.rotate(g, this.yIncrement * b, d);
            p.rotate(g, this.zIncrement * b, f);
            for (var a = 0, c = this.molecules.length; a <
                c; a++) {
                for (var m = this.molecules[a], n = 0, q = m.atoms.length; n < q; n++) {
                    var v = m.atoms[n];
                    b = [v.x - this.width / 2, v.y - this.height / 2, v.z];
                    p.multiplyVec3(g, b);
                    v.x = b[0] + this.width / 2;
                    v.y = b[1] + this.height / 2;
                    v.z = b[2]
                }
                n = 0;
                for (q = m.rings.length; n < q; n++) m.rings[n].center = m.rings[n].getCenter();
                this.specs.atoms_display && this.specs.atoms_circles_2D && m.sortAtomsByZ();
                this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && m.sortBondsByZ()
            }
            a = 0;
            for (c = this.shapes.length; a < c; a++)
                for (m = this.shapes[a].getPoints(), n = 0, q = m.length; n <
                    q; n++) v = m[n], b = [v.x - this.width / 2, v.y - this.height / 2, 0], p.multiplyVec3(g, b), v.x = b[0] + this.width / 2, v.y = b[1] + this.height / 2
        } else this.specs.rotateAngle += this.zIncrement * b
    };
    c.dblclick = function(b) {
        this.isRunning() ? this.stopAnimation() : this.startAnimation()
    }
})(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function(c, n, p, m) {
    c.SlideshowCanvas = function(c, k, d) {
        c && this.create(c, k, d)
    };
    c = c.SlideshowCanvas.prototype = new c._AnimatorCanvas;
    c.frames = [];
    c.curIndex = 0;
    c.timeout = 5E3;
    c.alpha = 0;
    c.innerHandle = m;
    c.phase = 0;
    c.drawChildExtras = function(c) {
        var g = p.getRGB(this.specs.backgroundColor, 255);
        c.fillStyle = "rgba(" + g[0] + ", " + g[1] + ", " + g[2] + ", " + this.alpha + ")";
        c.fillRect(0, 0, this.width, this.height)
    };
    c.nextFrame = function(c) {
        if (0 === this.frames.length) this.stopAnimation();
        else {
            this.phase = 0;
            var g = this,
                d = 1;
            this.innerHandle =
                setInterval(function() {
                    g.alpha = d / 15;
                    g.repaint();
                    15 === d && g.breakInnerHandle();
                    d++
                }, 33)
        }
    };
    c.breakInnerHandle = function() {
        this.innerHandle && (clearInterval(this.innerHandle), this.innerHandle = m);
        if (0 === this.phase) {
            this.curIndex++;
            this.curIndex > this.frames.length - 1 && (this.curIndex = 0);
            this.alpha = 1;
            var c = this.frames[this.curIndex];
            this.loadContent(c.mols, c.shapes);
            this.phase = 1;
            var k = this,
                d = 1;
            this.innerHandle = setInterval(function() {
                k.alpha = (15 - d) / 15;
                k.repaint();
                15 === d && k.breakInnerHandle();
                d++
            }, 33)
        } else 1 ===
            this.phase && (this.alpha = 0, this.repaint())
    };
    c.addFrame = function(c, k) {
        0 === this.frames.length && this.loadContent(c, k);
        this.frames.push({
            mols: c,
            shapes: k
        })
    }
})(ChemDoodle, ChemDoodle.animations, ChemDoodle.math);
(function(c, n, p, m, g, k) {
    c.TransformCanvas = function(d, c, b, a) {
        d && this.create(d, c, b);
        this.rotate3D = a
    };
    c = c.TransformCanvas.prototype = new c._Canvas;
    c.lastPoint = k;
    c.rotationMultMod = 1.3;
    c.lastPinchScale = 1;
    c.lastGestureRotate = 0;
    c.mousedown = function(d) {
        this.lastPoint = d.p
    };
    c.dblclick = function(d) {
        this.center();
        this.repaint()
    };
    c.drag = function(d) {
        if (!this.lastPoint.multi) {
            if (n.ALT) {
                var c = new p.Point(d.p.x, d.p.y);
                c.sub(this.lastPoint);
                for (var b = 0, a = this.molecules.length; b < a; b++) {
                    var h = this.molecules[b];
                    for (var k =
                            0, w = h.atoms.length; k < w; k++) h.atoms[k].add(c);
                    h.check()
                }
                b = 0;
                for (a = this.shapes.length; b < a; b++)
                    for (h = this.shapes[b].getPoints(), k = 0, w = h.length; k < w; k++) h[k].add(c);
                this.lastPoint = d.p
            } else if (!0 === this.rotate3D)
                for (w = m.max(this.width / 4, this.height / 4), k = (d.p.x - this.lastPoint.x) / w * this.rotationMultMod, w = -(d.p.y - this.lastPoint.y) / w * this.rotationMultMod, c = [], g.identity(c), g.rotate(c, w, [1, 0, 0]), g.rotate(c, k, [0, 1, 0]), b = 0, a = this.molecules.length; b < a; b++) {
                    h = this.molecules[b];
                    k = 0;
                    for (w = h.atoms.length; k < w; k++) b =
                        h.atoms[k], a = [b.x - this.width / 2, b.y - this.height / 2, b.z], g.multiplyVec3(c, a), b.x = a[0] + this.width / 2, b.y = a[1] + this.height / 2, b.z = a[2];
                    b = 0;
                    for (a = h.rings.length; b < a; b++) h.rings[b].center = h.rings[b].getCenter();
                    this.lastPoint = d.p;
                    this.specs.atoms_display && this.specs.atoms_circles_2D && h.sortAtomsByZ();
                    this.specs.bonds_display && this.specs.bonds_clearOverlaps_2D && h.sortBondsByZ()
                } else w = new p.Point(this.width / 2, this.height / 2), k = w.angle(this.lastPoint), w = w.angle(d.p), this.specs.rotateAngle -= w - k, this.lastPoint =
                    d.p;
            this.repaint()
        }
    };
    c.mousewheel = function(d, c) {
        this.specs.scale += c / 50;
        .01 > this.specs.scale && (this.specs.scale = .01);
        this.repaint()
    };
    c.multitouchmove = function(d, c) {
        if (2 === c)
            if (this.lastPoint.multi) {
                var b = new p.Point(d.p.x, d.p.y);
                b.sub(this.lastPoint);
                for (var a = 0, f = this.molecules.length; a < f; a++) {
                    for (var g = this.molecules[a], k = 0, m = g.atoms.length; k < m; k++) g.atoms[k].add(b);
                    g.check()
                }
                a = 0;
                for (f = this.shapes.length; a < f; a++)
                    for (g = this.shapes[a].getPoints(), k = 0, m = g.length; k < m; k++) g[k].add(b);
                this.lastPoint = d.p;
                this.lastPoint.multi = !0;
                this.repaint()
            } else this.lastPoint = d.p, this.lastPoint.multi = !0
    };
    c.gesturechange = function(d) {
        0 !== d.originalEvent.scale - this.lastPinchScale && (this.specs.scale *= d.originalEvent.scale / this.lastPinchScale, .01 > this.specs.scale && (this.specs.scale = .01), this.lastPinchScale = d.originalEvent.scale);
        if (0 !== this.lastGestureRotate - d.originalEvent.rotation) {
            for (var c = (this.lastGestureRotate - d.originalEvent.rotation) / 180 * m.PI, b = new p.Point(this.width / 2, this.height / 2), a = 0, g = this.molecules.length; a <
                g; a++) {
                for (var k = this.molecules[a], n = 0, q = k.atoms.length; n < q; n++) {
                    var v = k.atoms[n],
                        C = b.distance(v),
                        u = b.angle(v) + c;
                    v.x = b.x + C * m.cos(u);
                    v.y = b.y - C * m.sin(u)
                }
                k.check()
            }
            this.lastGestureRotate = d.originalEvent.rotation
        }
        this.repaint()
    };
    c.gestureend = function(d) {
        this.lastPinchScale = 1;
        this.lastGestureRotate = 0
    }
})(ChemDoodle, ChemDoodle.monitor, ChemDoodle.structures, Math, ChemDoodle.lib.mat4);
(function(c, n) {
    c.ViewerCanvas = function(c, m, g) {
        c && this.create(c, m, g)
    };
    c.ViewerCanvas.prototype = new c._Canvas
})(ChemDoodle);
(function(c, n, p) {
    c._SpectrumCanvas = function(c, g, k) {
        c && this.create(c, g, k)
    };
    c = c._SpectrumCanvas.prototype = new c._Canvas;
    c.spectrum = p;
    c.emptyMessage = "No Spectrum Loaded or Recognized";
    c.loadMolecule = p;
    c.getMolecule = p;
    c.innerRepaint = function(c) {
        this.spectrum && 0 < this.spectrum.data.length ? this.spectrum.draw(c, this.specs, this.width, this.height) : this.emptyMessage && (c.fillStyle = "#737683", c.textAlign = "center", c.textBaseline = "middle", c.font = "18px Helvetica, Verdana, Arial, Sans-serif", c.fillText(this.emptyMessage,
            this.width / 2, this.height / 2))
    };
    c.loadSpectrum = function(c) {
        this.spectrum = c;
        this.repaint()
    };
    c.getSpectrum = function() {
        return this.spectrum
    };
    c.getSpectrumCoordinates = function(c, g) {
        return spectrum.getInternalCoordinates(c, g, this.width, this.height)
    }
})(ChemDoodle, document);
(function(c, n) {
    c.ObserverCanvas = function(c, m, g) {
        c && this.create(c, m, g)
    };
    c.ObserverCanvas.prototype = new c._SpectrumCanvas
})(ChemDoodle);
(function(c, n) {
    c.OverlayCanvas = function(c, g, k) {
        c && this.create(c, g, k)
    };
    var p = c.OverlayCanvas.prototype = new c._SpectrumCanvas;
    p.overlaySpectra = [];
    p.superRepaint = p.innerRepaint;
    p.innerRepaint = function(c) {
        this.superRepaint(c);
        if (this.spectrum && 0 < this.spectrum.data.length)
            for (var g = 0, k = this.overlaySpectra.length; g < k; g++) {
                var d = this.overlaySpectra[g];
                d && 0 < d.data.length && (d.minX = this.spectrum.minX, d.maxX = this.spectrum.maxX, d.drawPlot(c, this.specs, this.width, this.height, this.spectrum.memory.offsetTop, this.spectrum.memory.offsetLeft,
                    this.spectrum.memory.offsetBottom))
            }
    };
    p.addSpectrum = function(c) {
        this.spectrum ? this.overlaySpectra.push(c) : this.spectrum = c
    }
})(ChemDoodle);
(function(c, n, p, m) {
    c.PerspectiveCanvas = function(c, d, f) {
        c && this.create(c, d, f)
    };
    var g = c.PerspectiveCanvas.prototype = new c._SpectrumCanvas;
    g.dragRange = m;
    g.rescaleYAxisOnZoom = !0;
    g.lastPinchScale = 1;
    g.mousedown = function(g) {
        this.dragRange = new c.structures.Point(g.p.x, g.p.x)
    };
    g.mouseup = function(c) {
        this.dragRange && this.dragRange.x !== this.dragRange.y && (this.dragRange.multi || (c = this.spectrum.zoom(this.dragRange.x, c.p.x, this.width, this.rescaleYAxisOnZoom), this.rescaleYAxisOnZoom && (this.specs.scale = c)), this.dragRange =
            m, this.repaint())
    };
    g.drag = function(c) {
        this.dragRange && (this.dragRange.multi ? this.dragRange = m : (n.SHIFT && (this.spectrum.translate(c.p.x - this.dragRange.x, this.width), this.dragRange.x = c.p.x), this.dragRange.y = c.p.x), this.repaint())
    };
    g.drawChildExtras = function(c) {
        if (this.dragRange) {
            var d = p.min(this.dragRange.x, this.dragRange.y),
                f = p.max(this.dragRange.x, this.dragRange.y);
            c.strokeStyle = "gray";
            c.lineStyle = 1;
            c.beginPath();
            for (c.moveTo(d, this.height / 2); d <= f; d++) 5 > d % 10 ? c.lineTo(d, p.round(this.height / 2)) : c.moveTo(d,
                p.round(this.height / 2));
            c.stroke()
        }
    };
    g.mousewheel = function(c, d) {
        this.specs.scale += d / 10;
        .01 > this.specs.scale && (this.specs.scale = .01);
        this.repaint()
    };
    g.dblclick = function(c) {
        this.spectrum.setup();
        this.specs.scale = 1;
        this.repaint()
    };
    g.multitouchmove = function(g, d) {
        2 === d && (this.dragRange && this.dragRange.multi ? (this.spectrum.translate(g.p.x - this.dragRange.x, this.width), this.dragRange.x = g.p.x, this.dragRange.y = g.p.x, this.repaint()) : (this.dragRange = new c.structures.Point(g.p.x, g.p.x), this.dragRange.multi = !0))
    };
    g.gesturechange = function(c) {
        this.specs.scale *= c.originalEvent.scale / this.lastPinchScale;
        .01 > this.specs.scale && (this.specs.scale = .01);
        this.lastPinchScale = c.originalEvent.scale;
        this.repaint()
    };
    g.gestureend = function(c) {
        this.lastPinchScale = 1
    }
})(ChemDoodle, ChemDoodle.monitor, Math);
(function(c, n, p, m) {
    c.SeekerCanvas = function(c, d, f, b) {
        c && this.create(c, d, f);
        this.seekType = b
    };
    var g = c.SeekerCanvas.prototype = new c._SpectrumCanvas;
    g.superRepaint = g.innerRepaint;
    g.innerRepaint = function(g) {
        this.superRepaint(g);
        if (this.spectrum && 0 < this.spectrum.data.length && this.p) {
            if (this.seekType === c.SeekerCanvas.SEEK_POINTER) {
                var d = this.p;
                var f = this.spectrum.getInternalCoordinates(d.x, d.y)
            } else if (this.seekType === c.SeekerCanvas.SEEK_PLOT || this.seekType === c.SeekerCanvas.SEEK_PEAK) {
                f = this.seekType === c.SeekerCanvas.SEEK_PLOT ?
                    this.spectrum.getClosestPlotInternalCoordinates(this.p.x) : this.spectrum.getClosestPeakInternalCoordinates(this.p.x);
                if (!f) return;
                d = {
                    x: this.spectrum.getTransformedX(f.x, this.specs, this.width, this.spectrum.memory.offsetLeft),
                    y: this.spectrum.getTransformedY(f.y / 100, this.specs, this.height, this.spectrum.memory.offsetBottom, this.spectrum.memory.offsetTop)
                }
            }
            g.fillStyle = "white";
            g.strokeStyle = this.specs.plots_color;
            g.lineWidth = this.specs.plots_width;
            g.beginPath();
            g.arc(d.x, d.y, 3, 0, 2 * p.PI, !1);
            g.fill();
            g.stroke();
            g.font = n.getFontString(this.specs.text_font_size, this.specs.text_font_families);
            g.textAlign = "left";
            g.textBaseline = "bottom";
            f = "x:" + f.x.toFixed(3) + ", y:" + f.y.toFixed(3);
            var b = d.x + 3,
                a = g.measureText(f).width;
            b + a > this.width - 2 && (b -= 6 + a);
            d = d.y;
            0 > d - this.specs.text_font_size - 2 && (d += this.specs.text_font_size);
            g.fillRect(b, d - this.specs.text_font_size, a, this.specs.text_font_size);
            g.fillStyle = "black";
            g.fillText(f, b, d)
        }
    };
    g.mouseout = function(c) {
        this.p = m;
        this.repaint()
    };
    g.mousemove = function(c) {
        this.p = {
            x: c.p.x - 2,
            y: c.p.y - 3
        };
        this.repaint()
    };
    g.touchstart = function(c) {
        this.mousemove(c)
    };
    g.touchmove = function(c) {
        this.mousemove(c)
    };
    g.touchend = function(c) {
        this.mouseout(c)
    };
    c.SeekerCanvas.SEEK_POINTER = "pointer";
    c.SeekerCanvas.SEEK_PLOT = "plot";
    c.SeekerCanvas.SEEK_PEAK = "peak"
})(ChemDoodle, ChemDoodle.extensions, Math);
(function(c, n, p, m, g, k, d, f, b, a, h, r, w, q) {
    c._Canvas3D = function(a, b, c) {
        a && this.create(a, b, c)
    };
    a = c._Canvas3D.prototype = new c._Canvas;
    var v = c._Canvas.prototype;
    a.rotationMatrix = q;
    a.lastPoint = q;
    a.emptyMessage = "WebGL is Unavailable!";
    a.lastPinchScale = 1;
    a.lastGestureRotate = 0;
    a.afterLoadContent = function() {
        for (var a = new p.Bounds, c = 0, f = this.molecules.length; c < f; c++) a.expand(this.molecules[c].getBounds3D());
        f = h.dist([a.maxX, a.maxY, a.maxZ], [a.minX, a.minY, a.minZ]) / 2 + 1.5;
        Infinity === f && (f = 10);
        this.maxDimension = d.max(a.maxX -
            a.minX, a.maxY - a.minY);
        var a = d.min(179.9, d.max(this.specs.projectionPerspectiveVerticalFieldOfView_3D, .1)),
            c = a / 360 * d.PI,
            g = d.tan(c) / .8,
            g = f / g,
            e = this.width / this.height;
        this.camera.fieldOfView = a;
        this.camera.near = g - f;
        this.camera.far = g + f;
        this.camera.aspect = e;
        b.translate(b.identity(this.camera.viewMatrix), [0, 0, -g]);
        c = f / d.tan(c);
        this.lighting.camera.fieldOfView = a;
        this.lighting.camera.near = c - f;
        this.lighting.camera.far = c + f;
        this.lighting.updateView();
        this.setupScene()
    };
    a.renderDepthMap = function() {
        if (this.specs.shadow_3D &&
            g.DepthShader) {
            var a = this.gl.isEnabled(this.gl.CULL_FACE);
            a || this.gl.enable(this.gl.CULL_FACE);
            this.depthShader.useShaderProgram(this.gl);
            var b = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
            this.gl.clearColor(1, 1, 1, 0);
            this.lightDepthMapFramebuffer.bind(this.gl, this.shadowTextureSize, this.shadowTextureSize);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.depthShader.setProjectionMatrix(this.gl, this.lighting.camera.projectionMatrix);
            this.depthShader.enableAttribsArray(this.gl);
            for (var c = 0, d = this.molecules.length; c < d; c++) this.molecules[c].render(this.gl, this.specs);
            this.gl.flush();
            this.depthShader.disableAttribsArray(this.gl);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.clearColor(b[0], b[1], b[2], b[3]);
            a || this.gl.disable(this.gl.CULL_FACE)
        }
    };
    a.renderExtras = function() {
        this.phongShader.useShaderProgram(this.gl);
        this.phongShader.enableAttribsArray(this.gl);
        for (var a = [], b = 0, c = this.shapes.length; b < c; b++) {
            var d = this.shapes[b];
            d instanceof g._Surface && (!d.specs && 1 !==
                this.specs.surfaces_alpha || d.specs && 1 !== d.specs.surfaces_alpha) ? a.push(d) : d.render(this.gl, this.specs)
        }
        if (0 !== a.length) {
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            this.gl.enable(this.gl.BLEND);
            this.gl.depthMask(!1);
            b = 0;
            for (c = a.length; b < c; b++) d = a[b], d.render(this.gl, this.specs);
            this.gl.depthMask(!0);
            this.gl.disable(this.gl.BLEND);
            this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }
        this.phongShader.setShadow(this.gl, !1);
        this.phongShader.setFogMode(this.gl, 0);
        this.phongShader.setFlatColor(this.gl, !1);
        this.specs.compass_display && (this.phongShader.setLightDirection(this.gl, [0, 0, -1]), this.compass.render(this.gl, this.specs));
        this.phongShader.disableAttribsArray(this.gl);
        this.gl.flush();
        this.gl.enable(this.gl.BLEND);
        this.gl.depthMask(!1);
        this.labelShader.useShaderProgram(this.gl);
        this.labelShader.setMatrixUniforms(this.gl, this.gl.modelViewMatrix);
        this.labelShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
        this.labelShader.setDimension(this.gl, this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);
        this.labelShader.enableAttribsArray(this.gl);
        this.specs.atoms_displayLabels_3D && this.label3D.render(this.gl, this.specs, this.getMolecules());
        if (this.specs.measurement_displayText_3D)
            for (b = 0, c = this.shapes.length; b < c; b++) d = this.shapes[b], d.renderText && d.renderText(this.gl, this.specs);
        this.specs.compass_display && this.specs.compass_displayText_3D && this.compass.renderAxis(this.gl);
        this.labelShader.disableAttribsArray(this.gl);
        this.gl.disable(this.gl.BLEND);
        this.gl.depthMask(!0);
        this.gl.flush();
        this.drawChildExtras && this.drawChildExtras(this.gl);
        this.gl.flush()
    };
    a.renderColor = function() {
        this.phongShader.useShaderProgram(this.gl);
        this.gl.uniform1i(this.phongShader.shadowDepthSampleUniform, 0);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.lightDepthMapTexture.texture);
        this.phongShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
        this.phongShader.setShadow(this.gl, this.specs.shadow_3D);
        this.phongShader.setFlatColor(this.gl, this.specs.flat_color_3D);
        this.phongShader.setGammaCorrection(this.gl, this.specs.gammaCorrection_3D);
        this.phongShader.setShadowTextureSize(this.gl, this.shadowTextureSize, this.shadowTextureSize);
        this.phongShader.setShadowIntensity(this.gl, this.specs.shadow_intensity_3D);
        this.phongShader.setFogMode(this.gl, this.specs.fog_mode_3D);
        this.phongShader.setFogColor(this.gl, this.fogging.colorRGB);
        this.phongShader.setFogStart(this.gl, this.fogging.fogStart);
        this.phongShader.setFogEnd(this.gl,
            this.fogging.fogEnd);
        this.phongShader.setFogDensity(this.gl, this.fogging.density);
        this.phongShader.setLightProjectionMatrix(this.gl, this.lighting.camera.projectionMatrix);
        this.phongShader.setLightDiffuseColor(this.gl, this.lighting.diffuseRGB);
        this.phongShader.setLightSpecularColor(this.gl, this.lighting.specularRGB);
        this.phongShader.setLightDirection(this.gl, this.lighting.direction);
        this.phongShader.enableAttribsArray(this.gl);
        for (var a = 0, b = this.molecules.length; a < b; a++) this.molecules[a].render(this.gl,
            this.specs);
        this.phongShader.disableAttribsArray(this.gl);
        this.gl.flush()
    };
    a.renderPosition = function() {
        this.positionShader.useShaderProgram(this.gl);
        this.positionShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
        this.positionShader.enableAttribsArray(this.gl);
        for (var a = 0, b = this.molecules.length; a < b; a++) this.molecules[a].render(this.gl, this.specs);
        this.positionShader.disableAttribsArray(this.gl);
        this.gl.flush()
    };
    a.renderNormal = function() {
        this.normalShader.useShaderProgram(this.gl);
        this.normalShader.setProjectionMatrix(this.gl,
            this.camera.projectionMatrix);
        this.normalShader.enableAttribsArray(this.gl);
        for (var a = 0, b = this.molecules.length; a < b; a++) this.molecules[a].render(this.gl, this.specs);
        this.normalShader.disableAttribsArray(this.gl);
        this.gl.flush()
    };
    a.renderSSAO = function() {
        this.ssaoShader.useShaderProgram(this.gl);
        this.ssaoShader.setProjectionMatrix(this.gl, this.camera.projectionMatrix);
        this.ssaoShader.setSampleKernel(this.gl, this.ssao.sampleKernel);
        this.ssaoShader.setKernelRadius(this.gl, this.specs.ssao_kernel_radius);
        this.ssaoShader.setPower(this.gl, this.specs.ssao_power);
        this.ssaoShader.setGbufferTextureSize(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.uniform1i(this.ssaoShader.positionSampleUniform, 0);
        this.gl.uniform1i(this.ssaoShader.normalSampleUniform, 1);
        this.gl.uniform1i(this.ssaoShader.noiseSampleUniform, 2);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.positionTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D,
            this.normalTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE2);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.ssao.noiseTexture);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.ssaoShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.ssaoShader.disableAttribsArray(this.gl);
        this.gl.flush();
        this.ssaoFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.ssaoBlurShader.useShaderProgram(this.gl);
        this.ssaoBlurShader.setGbufferTextureSize(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.uniform1i(this.ssaoBlurShader.aoSampleUniform, 0);
        this.gl.uniform1i(this.ssaoBlurShader.depthSampleUniform, 1);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.depthTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.ssaoBlurShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.ssaoBlurShader.disableAttribsArray(this.gl);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.flush()
    };
    a.renderOutline = function() {
        this.outlineShader.useShaderProgram(this.gl);
        this.outlineShader.setGbufferTextureSize(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.outlineShader.setNormalThreshold(this.gl,
            this.specs.outline_normal_threshold);
        this.outlineShader.setDepthThreshold(this.gl, this.specs.outline_depth_threshold);
        this.outlineShader.setThickness(this.gl, this.specs.outline_thickness);
        this.gl.uniform1i(this.outlineShader.normalSampleUniform, 0);
        this.gl.uniform1i(this.outlineShader.depthSampleUniform, 1);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.normalTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.depthTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.outlineShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.outlineShader.disableAttribsArray(this.gl);
        this.gl.flush()
    };
    a.deferredRender = function() {
        var a = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
        this.gl.clearColor(0, 0, 0, 0);
        this.colorFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT |
            this.gl.DEPTH_BUFFER_BIT);
        this.renderColor();
        this.positionFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.renderPosition();
        this.normalFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.renderNormal();
        this.specs.ssao_3D && g.SSAOShader ? (this.quadFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight),
            this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.renderSSAO()) : (this.ssaoFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT));
        this.outlineFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clearColor(1, 1, 1, 1);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.specs.outline_3D && this.renderOutline();
        this.gl.clearColor(a[0], a[1], a[2], a[3]);
        this.quadFramebuffer.bind(this.gl, this.gl.drawingBufferWidth,
            this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.lightingShader.useShaderProgram(this.gl);
        this.gl.uniform1i(this.lightingShader.positionSampleUniform, 0);
        this.gl.uniform1i(this.lightingShader.colorSampleUniform, 1);
        this.gl.uniform1i(this.lightingShader.ssaoSampleUniform, 2);
        this.gl.uniform1i(this.lightingShader.outlineSampleUniform, 3);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.positionTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.colorTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE2);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.ssaoTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE3);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.outlineTexture.texture);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.lightingShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.lightingShader.disableAttribsArray(this.gl);
        this.gl.flush();
        this.fxaaFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.imageTexture.texture);
        this.fxaaShader.useShaderProgram(this.gl);
        this.fxaaShader.setBuffersize(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.fxaaShader.setAntialias(this.gl,
            this.specs.antialias_3D);
        this.fxaaShader.setEdgeThreshold(this.gl, this.specs.fxaa_edgeThreshold);
        this.fxaaShader.setEdgeThresholdMin(this.gl, this.specs.fxaa_edgeThresholdMin);
        this.fxaaShader.setSearchSteps(this.gl, this.specs.fxaa_searchSteps);
        this.fxaaShader.setSearchThreshold(this.gl, this.specs.fxaa_searchThreshold);
        this.fxaaShader.setSubpixCap(this.gl, this.specs.fxaa_subpixCap);
        this.fxaaShader.setSubpixTrim(this.gl, this.specs.fxaa_subpixTrim);
        this.fxaaShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.fxaaShader.disableAttribsArray(this.gl);
        this.gl.flush();
        this.finalFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.renderExtras();
        this.gl.clearColor(a[0], a[1], a[2], a[3]);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.bindTexture(this.gl.TEXTURE_2D,
            this.fxaaTexture.texture);
        this.quadShader.useShaderProgram(this.gl);
        this.quadShader.enableAttribsArray(this.gl);
        this.gl.quadBuffer.bindBuffers(this.gl);
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.gl.quadBuffer.vertexPositionBuffer.numItems);
        this.quadShader.disableAttribsArray(this.gl);
        this.gl.flush()
    };
    a.forwardRender = function() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.renderColor();
        this.renderExtras()
    };
    a.repaint = function() {
        this.gl && (this.gl.lightViewMatrix = b.multiply(this.lighting.camera.viewMatrix, this.rotationMatrix, []), this.gl.rotationMatrix = this.rotationMatrix, this.gl.modelViewMatrix = this.gl.lightViewMatrix, this.renderDepthMap(), this.gl.modelViewMatrix = b.multiply(this.camera.viewMatrix, this.rotationMatrix, []), this.isSupportDeferred() && (this.specs.ssao_3D || this.specs.outline_3D) ? this.deferredRender() : this.forwardRender())
    };
    a.pick = function(a, c, d, f) {
        if (this.gl) {
            var e =
                this.height - c;
            1 !== this.pixelRatio && (a *= this.pixelRatio, e *= this.pixelRatio);
            b.multiply(this.camera.viewMatrix, this.rotationMatrix, this.gl.modelViewMatrix);
            this.gl.rotationMatrix = this.rotationMatrix;
            this.pickShader.useShaderProgram(this.gl);
            c = this.gl.getParameter(this.gl.COLOR_CLEAR_VALUE);
            this.gl.clearColor(1, 1, 1, 0);
            this.pickerFramebuffer.bind(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.pickShader.setProjectionMatrix(this.gl,
                this.camera.projectionMatrix);
            this.pickShader.enableAttribsArray(this.gl);
            for (var g = [], h = 0, k = this.molecules.length; h < k; h++) this.molecules[h].renderPickFrame(this.gl, this.specs, g, d, f);
            this.pickShader.disableAttribsArray(this.gl);
            this.gl.flush();
            d = new Uint8Array(4);
            this.gl.readPixels(a - 2, e + 2, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, d);
            f = q;
            0 < d[3] && (f = g[d[2] | d[1] << 8 | d[0] << 16]);
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            this.gl.clearColor(c[0], c[1], c[2], c[3]);
            return f
        }
        return q
    };
    a.center = function() {
        for (var a,
                b = new m.Atom, c = 0, d = this.molecules.length; c < d; c++) a = this.molecules[c], b.add3D(a.getCenter3D());
        b.x /= this.molecules.length;
        b.y /= this.molecules.length;
        c = 0;
        for (d = this.molecules.length; c < d; c++) {
            a = this.molecules[c];
            for (var e = 0, f = a.atoms.length; e < f; e++) a.atoms[e].sub3D(b);
            if (a.chains && a.fromJSON)
                for (e = 0, f = a.chains.length; e < f; e++)
                    for (var g = a.chains[e], h = 0, k = g.length; h < k; h++) {
                        var n = g[h];
                        n.cp1.sub3D(b);
                        n.cp2.sub3D(b);
                        n.cp3 && (n.cp3.sub3D(b), n.cp4.sub3D(b), n.cp5.sub3D(b))
                    }
        }
    };
    a.isSupportDeferred = function() {
        return this.gl.textureFloatExt &&
            this.gl.depthTextureExt
    };
    a.create = function(a, c, d) {
        v.create.call(this, a, c, d);
        try {
            var h = f.getElementById(this.id);
            this.gl = h.getContext("webgl");
            this.gl || (this.gl = h.getContext("experimental-webgl"))
        } catch (e) {}
        this.gl ? (1 !== this.pixelRatio && this.gl.canvas.width === this.width && (this.gl.canvas.style.width = this.width + "px", this.gl.canvas.style.height = this.height + "px", this.gl.canvas.width = this.width * this.pixelRatio, this.gl.canvas.height = this.height * this.pixelRatio), this.gl.enable(this.gl.DEPTH_TEST), this.gl.depthFunc(this.gl.LEQUAL),
            this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.clearDepth(1), this.shadowTextureSize = 1024, this.rotationMatrix = b.identity([]), this.camera = new g.Camera, this.label3D = new g.Label, this.lighting = new g.Light(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D, this.specs.lightDirection_3D), this.fogging = new g.Fog(this.specs.fog_color_3D || this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D),
            this.gl.depthTextureExt = this.gl.getExtension("WEBGL_depth_texture") || this.gl.getExtension("WEBKIT_WEBGL_depth_texture") || this.gl.getExtension("MOZ_WEBGL_depth_texture"), this.gl.textureFloatExt = this.gl.getExtension("OES_texture_float") || this.gl.getExtension("WEBKIT_OES_texture_float") || this.gl.getExtension("MOZ_OES_texture_float"), this.ssao = new g.SSAO, this.pickerColorTexture = new g.Texture, this.pickerColorTexture.init(this.gl, this.gl.UNSIGNED_BYTE, this.gl.RGBA, this.gl.RGBA), this.pickerDepthRenderbuffer =
            new g.Renderbuffer, this.pickerDepthRenderbuffer.init(this.gl, this.gl.DEPTH_COMPONENT16), this.pickerFramebuffer = new g.Framebuffer, this.pickerFramebuffer.init(this.gl), this.pickerFramebuffer.setColorTexture(this.gl, this.pickerColorTexture.texture), this.pickerFramebuffer.setDepthRenderbuffer(this.gl, this.pickerDepthRenderbuffer.renderbuffer), this.lightDepthMapTexture = new g.Texture, this.lightDepthMapRenderbuffer = new g.Renderbuffer, this.lightDepthMapFramebuffer = new g.Framebuffer, this.lightDepthMapFramebuffer.init(this.gl),
            this.gl.depthTextureExt ? (this.lightDepthMapTexture.init(this.gl, this.gl.UNSIGNED_SHORT, this.gl.DEPTH_COMPONENT), this.lightDepthMapRenderbuffer.init(this.gl, this.gl.RGBA4), this.lightDepthMapFramebuffer.setColorRenderbuffer(this.gl, this.lightDepthMapRenderbuffer.renderbuffer), this.lightDepthMapFramebuffer.setDepthTexture(this.gl, this.lightDepthMapTexture.texture)) : (this.lightDepthMapTexture.init(this.gl, this.gl.UNSIGNED_BYTE, this.gl.RGBA, this.gl.RGBA), this.lightDepthMapRenderbuffer.init(this.gl, this.gl.DEPTH_COMPONENT16),
                this.lightDepthMapFramebuffer.setColorTexture(this.gl, this.lightDepthMapTexture.texture), this.lightDepthMapFramebuffer.setDepthRenderbuffer(this.gl, this.lightDepthMapRenderbuffer.renderbuffer)), this.isSupportDeferred() && (this.depthTexture = new g.Texture, this.depthTexture.init(this.gl, this.gl.UNSIGNED_SHORT, this.gl.DEPTH_COMPONENT), this.colorTexture = new g.Texture, this.colorTexture.init(this.gl, this.gl.UNSIGNED_BYTE, this.gl.RGBA), this.positionTexture = new g.Texture, this.positionTexture.init(this.gl, this.gl.FLOAT,
                    this.gl.RGBA), this.normalTexture = new g.Texture, this.normalTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA), this.ssaoTexture = new g.Texture, this.ssaoTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA), this.outlineTexture = new g.Texture, this.outlineTexture.init(this.gl, this.gl.UNSIGNED_BYTE, this.gl.RGBA), this.fxaaTexture = new g.Texture, this.fxaaTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA), this.imageTexture = new g.Texture, this.imageTexture.init(this.gl, this.gl.FLOAT, this.gl.RGBA), this.colorFramebuffer =
                new g.Framebuffer, this.colorFramebuffer.init(this.gl), this.colorFramebuffer.setColorTexture(this.gl, this.colorTexture.texture), this.colorFramebuffer.setDepthTexture(this.gl, this.depthTexture.texture), this.normalFramebuffer = new g.Framebuffer, this.normalFramebuffer.init(this.gl), this.normalFramebuffer.setColorTexture(this.gl, this.normalTexture.texture), this.normalFramebuffer.setDepthTexture(this.gl, this.depthTexture.texture), this.positionFramebuffer = new g.Framebuffer, this.positionFramebuffer.init(this.gl),
                this.positionFramebuffer.setColorTexture(this.gl, this.positionTexture.texture), this.positionFramebuffer.setDepthTexture(this.gl, this.depthTexture.texture), this.ssaoFramebuffer = new g.Framebuffer, this.ssaoFramebuffer.init(this.gl), this.ssaoFramebuffer.setColorTexture(this.gl, this.ssaoTexture.texture), this.outlineFramebuffer = new g.Framebuffer, this.outlineFramebuffer.init(this.gl), this.outlineFramebuffer.setColorTexture(this.gl, this.outlineTexture.texture), this.fxaaFramebuffer = new g.Framebuffer, this.fxaaFramebuffer.init(this.gl),
                this.fxaaFramebuffer.setColorTexture(this.gl, this.fxaaTexture.texture), this.quadFramebuffer = new g.Framebuffer, this.quadFramebuffer.init(this.gl), this.quadFramebuffer.setColorTexture(this.gl, this.imageTexture.texture), this.finalFramebuffer = new g.Framebuffer, this.finalFramebuffer.init(this.gl), this.finalFramebuffer.setColorTexture(this.gl, this.fxaaTexture.texture), this.finalFramebuffer.setDepthTexture(this.gl, this.depthTexture.texture), this.normalShader = new g.NormalShader, this.normalShader.init(this.gl),
                this.positionShader = new g.PositionShader, this.positionShader.init(this.gl), g.SSAOShader && (this.ssaoShader = new g.SSAOShader, this.ssaoShader.init(this.gl), this.ssaoBlurShader = new g.SSAOBlurShader, this.ssaoBlurShader.init(this.gl)), this.outlineShader = new g.OutlineShader, this.outlineShader.init(this.gl), this.lightingShader = new g.LightingShader, this.lightingShader.init(this.gl), this.fxaaShader = new g.FXAAShader, this.fxaaShader.init(this.gl), this.quadShader = new g.QuadShader, this.quadShader.init(this.gl)),
            this.labelShader = new g.LabelShader, this.labelShader.init(this.gl), this.pickShader = new g.PickShader, this.pickShader.init(this.gl), this.phongShader = new g.PhongShader, this.phongShader.init(this.gl), g.DepthShader && (this.depthShader = new g.DepthShader, this.depthShader.init(this.gl)), this.textTextImage = new g.TextImage, this.textTextImage.init(this.gl), this.gl.textImage = new g.TextImage, this.gl.textImage.init(this.gl), this.gl.textMesh = new g.TextMesh, this.gl.textMesh.init(this.gl), this.gl.material = new g.Material,
            this.setupScene()) : this.displayMessage()
    };
    a.displayMessage = function() {
        var a = f.getElementById(this.id);
        a.getContext && (a = a.getContext("2d"), this.specs.backgroundColor && (a.fillStyle = this.specs.backgroundColor, a.fillRect(0, 0, this.width, this.height)), this.emptyMessage && (a.fillStyle = "#737683", a.textAlign = "center", a.textBaseline = "middle", a.font = "18px Helvetica, Verdana, Arial, Sans-serif", a.fillText(this.emptyMessage, this.width / 2, this.height / 2)))
    };
    a.renderText = function(a, b) {
        var c = {
            position: [],
            texCoord: [],
            translation: []
        };
        this.textTextImage.pushVertexData(a, b, 0, c);
        this.gl.textMesh.storeData(this.gl, c.position, c.texCoord, c.translation);
        this.textTextImage.useTexture(this.gl);
        this.gl.textMesh.render(this.gl)
    };
    a.setupScene = function() {
        if (this.gl) {
            r("#" + this.id).css("background-color", this.specs.backgroundColor);
            var a = p.getRGB(this.specs.backgroundColor, 1);
            this.gl.clearColor(a[0], a[1], a[2], 1);
            this.specs.cullBackFace_3D ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE);
            this.gl.sphereBuffer =
                new g.Sphere(1, this.specs.atoms_resolution_3D, this.specs.atoms_resolution_3D);
            this.gl.starBuffer = new g.Star;
            this.gl.cylinderBuffer = new g.Cylinder(1, 1, this.specs.bonds_resolution_3D);
            this.gl.cylinderClosedBuffer = new g.Cylinder(1, 1, this.specs.bonds_resolution_3D, !0);
            this.gl.boxBuffer = new g.Box(1, 1, 1);
            this.gl.pillBuffer = new g.Pill(this.specs.bonds_pillDiameter_3D / 2, this.specs.bonds_pillHeight_3D, this.specs.bonds_pillLatitudeResolution_3D, this.specs.bonds_pillLongitudeResolution_3D);
            this.gl.lineBuffer =
                new g.Line;
            this.gl.lineArrowBuffer = new g.LineArrow;
            this.gl.arrowBuffer = new g.Arrow(.3, this.specs.compass_resolution_3D);
            this.gl.quadBuffer = new g.Quad;
            this.gl.textImage.updateFont(this.gl, this.specs.text_font_size, this.specs.text_font_families, this.specs.text_font_bold, this.specs.text_font_italic, this.specs.text_font_stroke_3D);
            this.lighting.lightScene(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D, this.specs.lightDirection_3D);
            this.fogging.fogScene(this.specs.fog_color_3D || this.specs.backgroundColor,
                this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D);
            this.compass = new g.Compass(this.gl, this.specs);
            this.lightDepthMapTexture.setParameter(this.gl, this.shadowTextureSize, this.shadowTextureSize);
            this.lightDepthMapRenderbuffer.setParameter(this.gl, this.shadowTextureSize, this.shadowTextureSize);
            this.pickerColorTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            this.pickerDepthRenderbuffer.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
            this.isSupportDeferred() && (this.depthTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.colorTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.imageTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.positionTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.normalTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight),
                this.ssaoTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.outlineTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.fxaaTexture.setParameter(this.gl, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight), this.ssao.initSampleKernel(this.specs.ssao_kernel_samples), this.ssao.initNoiseTexture(this.gl));
            this.camera.updateProjectionMatrix(this.specs.projectionPerspective_3D);
            for (var b = 0, f = this.molecules.length; b < f; b++)
                if (a =
                    this.molecules[b], a.labelMesh instanceof g.TextMesh || (a.labelMesh = new g.TextMesh, a.labelMesh.init(this.gl)), a.chains) {
                    a.ribbons = [];
                    a.cartoons = [];
                    a.tubes = [];
                    a.pipePlanks = [];
                    for (var q = 0, e = a.chains.length; q < e; q++) {
                        for (var l = a.chains[q], v = 0, w = l.length - 1; v < w; v++) l[v].Test = v;
                        var z = 3 < l.length && k[l[3].name] && "#BEA06E" === k[l[3].name].aminoColor;
                        if (0 < l.length && !l[0].lineSegments) {
                            v = 0;
                            for (w = l.length - 1; v < w; v++) l[v].setup(l[v + 1].cp1, z ? 1 : this.specs.proteins_horizontalResolution);
                            if (!z)
                                for (v = 1, w = l.length - 1; v < w; v++) n.vec3AngleFrom(l[v -
                                    1].D, l[v].D) > d.PI / 2 && (l[v].guidePointsSmall.reverse(), l[v].guidePointsLarge.reverse(), h.scale(l[v].D, -1));
                            v = 2;
                            for (w = l.length - 3; v < w; v++) l[v].computeLineSegments(l[v - 2], l[v - 1], l[v + 1], !z, z ? this.specs.nucleics_verticalResolution : this.specs.proteins_verticalResolution);
                            l.pop();
                            l.pop();
                            l.pop();
                            l.shift();
                            l.shift()
                        }
                        v = p.hsl2rgb(1 === e ? .5 : q / e, 1, .5);
                        v = "rgb(" + v[0] + "," + v[1] + "," + v[2] + ")";
                        l.chainColor = v;
                        z ? (z = new g.Tube(l, this.specs.nucleics_tubeThickness, this.specs.nucleics_tubeResolution_3D), z.chainColor = v, a.tubes.push(z)) :
                            (z = new g.PipePlank(l, this.specs), a.pipePlanks.push(z), z = l.shift(), w = {
                                front: new g.Ribbon(l, this.specs.proteins_ribbonThickness, !1),
                                back: new g.Ribbon(l, -this.specs.proteins_ribbonThickness, !1)
                            }, w.front.chainColor = v, w.back.chainColor = v, a.ribbons.push(w), w = {
                                front: new g.Ribbon(l, this.specs.proteins_ribbonThickness, !0),
                                back: new g.Ribbon(l, -this.specs.proteins_ribbonThickness, !0)
                            }, w.front.chainColor = v, w.back.chainColor = v, a.cartoons.push(w), l.unshift(z))
                    }
                }
            this.label3D.updateVerticesBuffer(this.gl, this.getMolecules(),
                this.specs);
            if (this instanceof c.MovieCanvas3D && this.frames)
                for (v = 0, w = this.frames.length; v < w; v++) {
                    b = this.frames[v];
                    q = 0;
                    for (e = b.mols.length; q < e; q++) a = b.mols[q], a.labelMesh instanceof m.d3.TextMesh || (a.labelMesh = new m.d3.TextMesh, a.labelMesh.init(this.gl));
                    this.label3D.updateVerticesBuffer(this.gl, b.mols, this.specs)
                }
        }
    };
    a.updateScene = function() {
        this.camera.updateProjectionMatrix(this.specs.projectionPerspective_3D);
        this.lighting.lightScene(this.specs.lightDiffuseColor_3D, this.specs.lightSpecularColor_3D,
            this.specs.lightDirection_3D);
        this.fogging.fogScene(this.specs.fog_color_3D || this.specs.backgroundColor, this.specs.fog_start_3D, this.specs.fog_end_3D, this.specs.fog_density_3D);
        this.repaint()
    };
    a.mousedown = function(a) {
        this.lastPoint = a.p
    };
    a.mouseup = function(a) {
        this.lastPoint = q
    };
    a.rightmousedown = function(a) {
        this.lastPoint = a.p
    };
    a.drag = function(a) {
        if (this.lastPoint) {
            if (c.monitor.ALT) {
                var f = new m.Point(a.p.x, a.p.y);
                f.sub(this.lastPoint);
                var g = d.tan(this.camera.fieldOfView / 360 * d.PI),
                    g = this.height / 2 / this.camera.zoom /
                    g,
                    g = this.camera.focalLength() / g;
                b.translate(this.camera.viewMatrix, [f.x * g, -f.y * g, 0])
            } else g = a.p.x - this.lastPoint.x, f = a.p.y - this.lastPoint.y, g = b.rotate(b.identity([]), g * d.PI / 180, [0, 1, 0]), b.rotate(g, f * d.PI / 180, [1, 0, 0]), this.rotationMatrix = b.multiply(g, this.rotationMatrix);
            this.lastPoint = a.p;
            this.repaint()
        }
    };
    a.mousewheel = function(a, b) {
        0 < b ? this.camera.zoomIn() : this.camera.zoomOut();
        this.updateScene()
    };
    a.multitouchmove = function(a, c) {
        if (2 === c)
            if (this.lastPoint && this.lastPoint.multi) {
                var f = new m.Point(a.p.x,
                    a.p.y);
                f.sub(this.lastPoint);
                var g = d.tan(this.camera.fieldOfView / 360 * d.PI),
                    g = this.height / 2 / this.camera.zoom / g,
                    g = this.camera.focalLength() / g;
                b.translate(this.camera.viewMatrix, [f.x * g, -f.y * g, 0]);
                this.lastPoint = a.p;
                this.repaint()
            } else this.lastPoint = a.p, this.lastPoint.multi = !0
    };
    a.gesturechange = function(a) {
        if (0 !== a.originalEvent.scale - this.lastPinchScale) {
            var b = 30 * -(a.originalEvent.scale / this.lastPinchScale - 1);
            if (isNaN(b)) return;
            0 < b ? this.camera.zoomIn() : this.camera.zoomOut();
            this.updateScene();
            this.lastPinchScale =
                a.originalEvent.scale
        }
        this.repaint()
    };
    a.gestureend = function(a) {
        this.lastPinchScale = 1;
        this.lastGestureRotate = 0
    }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, ChemDoodle.structures, ChemDoodle.structures.d3, ChemDoodle.RESIDUE, Math, document, ChemDoodle.lib.mat4, ChemDoodle.lib.mat3, ChemDoodle.lib.vec3, ChemDoodle.lib.jQuery, window);
(function(c, n, p, m, g) {
    c.MolGrabberCanvas3D = function(c, d, f) {
        c && this.create(c, d, f);
        d = [];
        d.push('\x3cbr\x3e\x3cinput type\x3d"text" id\x3d"');
        d.push(c);
        d.push('_query" size\x3d"32" value\x3d"" /\x3e');
        d.push("\x3cbr\x3e\x3cnobr\x3e");
        d.push('\x3cselect id\x3d"');
        d.push(c);
        d.push('_select"\x3e');
        d.push('\x3coption value\x3d"pubchem" selected\x3ePubChem');
        d.push("\x3c/select\x3e");
        d.push('\x3cbutton id\x3d"');
        d.push(c);
        d.push('_submit"\x3eShow Molecule\x3c/button\x3e');
        d.push("\x3c/nobr\x3e");
        m.writeln(d.join(""));
        var b = this;
        p("#" + c + "_submit").click(function() {
            b.search()
        });
        p("#" + c + "_query").keypress(function(a) {
            13 === a.which && b.search()
        })
    };
    c = c.MolGrabberCanvas3D.prototype = new c._Canvas3D;
    c.setSearchTerm = function(c) {
        p("#" + this.id + "_query").val(c);
        this.search()
    };
    c.search = function() {
        var c = this;
        n.getMoleculeFromDatabase(p("#" + this.id + "_query").val(), {
            database: p("#" + this.id + "_select").val(),
            dimension: 3
        }, function(d) {
            c.loadMolecule(d)
        })
    }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.lib.jQuery, document);
(function(c, n, p) {
    c.MovieCanvas3D = function(c, g, k) {
        c && this.create(c, g, k);
        this.frames = []
    };
    c.MovieCanvas3D.PLAY_ONCE = 0;
    c.MovieCanvas3D.PLAY_LOOP = 1;
    c.MovieCanvas3D.PLAY_SPRING = 2;
    p = c.MovieCanvas3D.prototype = new c._Canvas3D;
    p.timeout = 50;
    p.frameNumber = 0;
    p.playMode = 2;
    p.reverse = !1;
    p.startAnimation = c._AnimatorCanvas.prototype.startAnimation;
    p.stopAnimation = c._AnimatorCanvas.prototype.stopAnimation;
    p.isRunning = c._AnimatorCanvas.prototype.isRunning;
    p.dblclick = c.RotatorCanvas.prototype.dblclick;
    p.nextFrame = function(c) {
        c =
            this.frames[this.frameNumber];
        this.molecules = c.mols;
        this.shapes = c.shapes;
        2 === this.playMode && this.reverse ? (this.frameNumber--, 0 > this.frameNumber && (this.frameNumber = 1, this.reverse = !1)) : (this.frameNumber++, this.frameNumber >= this.frames.length && (2 === this.playMode ? (this.frameNumber -= 2, this.reverse = !0) : (this.frameNumber = 0, 0 === this.playMode && this.stopAnimation())))
    };
    p.center = function() {
        for (var c = new n.Atom, g = this.frames[0], k = 0, d = g.mols.length; k < d; k++) c.add3D(g.mols[k].getCenter3D());
        c.x /= g.mols.length;
        c.y /=
            g.mols.length;
        g = new n.Atom;
        g.sub3D(c);
        for (var c = 0, f = this.frames.length; c < f; c++)
            for (var b = this.frames[c], k = 0, d = b.mols.length; k < d; k++)
                for (var a = b.mols[k], h = 0, p = a.atoms.length; h < p; h++) a.atoms[h].add3D(g)
    };
    p.addFrame = function(c, g) {
        this.frames.push({
            mols: c,
            shapes: g
        })
    }
})(ChemDoodle, ChemDoodle.structures);
(function(c, n, p, m) {
    var g = [],
        k = [1, 0, 0],
        d = [0, 1, 0],
        f = [0, 0, 1];
    c.RotatorCanvas3D = function(a, b, c) {
        a && this.create(a, b, c)
    };
    var b = c.RotatorCanvas3D.prototype = new c._Canvas3D;
    b.timeout = 33;
    n = n.PI / 15;
    b.xIncrement = n;
    b.yIncrement = n;
    b.zIncrement = n;
    b.startAnimation = c._AnimatorCanvas.prototype.startAnimation;
    b.stopAnimation = c._AnimatorCanvas.prototype.stopAnimation;
    b.isRunning = c._AnimatorCanvas.prototype.isRunning;
    b.dblclick = c.RotatorCanvas.prototype.dblclick;
    b.mousedown = m;
    b.rightmousedown = m;
    b.drag = m;
    b.mousewheel =
        m;
    b.nextFrame = function(a) {
        0 === this.molecules.length && 0 === this.shapes.length ? this.stopAnimation() : (p.identity(g), a /= 1E3, p.rotate(g, this.xIncrement * a, k), p.rotate(g, this.yIncrement * a, d), p.rotate(g, this.zIncrement * a, f), p.multiply(this.rotationMatrix, g))
    }
})(ChemDoodle, Math, ChemDoodle.lib.mat4);
(function(c, n) {
    c.TransformCanvas3D = function(c, m, g) {
        c && this.create(c, m, g)
    };
    c.TransformCanvas3D.prototype = new c._Canvas3D
})(ChemDoodle);
(function(c, n) {
    c.ViewerCanvas3D = function(c, g, k) {
        c && this.create(c, g, k)
    };
    var p = c.ViewerCanvas3D.prototype = new c._Canvas3D;
    p.mousedown = n;
    p.rightmousedown = n;
    p.drag = n;
    p.mousewheel = n
})(ChemDoodle);
(function(c, n, p, m, g) {
    function k(c, f, b, a) {
        this.element = c;
        this.x = f;
        this.y = b;
        this.dimension = a;
        this.allowMultipleSelections = !1
    }
    c.PeriodicTableCanvas = function(c, f) {
        this.padding = 5;
        c && this.create(c, 18 * f + 2 * this.padding, 10 * f + 2 * this.padding);
        this.cellDimension = f ? f : 20;
        this.setupTable();
        this.repaint()
    };
    m = c.PeriodicTableCanvas.prototype = new c._Canvas;
    m.loadMolecule = g;
    m.getMolecule = g;
    m.getHoveredElement = function() {
        return this.hovered ? this.hovered.element : g
    };
    m.innerRepaint = function(c) {
        for (var d = 0, b = this.cells.length; d <
            b; d++) this.drawCell(c, this.specs, this.cells[d]);
        this.hovered && this.drawCell(c, this.specs, this.hovered);
        this.selected && this.drawCell(c, this.specs, this.selected)
    };
    m.setupTable = function() {
        this.cells = [];
        for (var d = this.padding, f = this.padding, b = 0, a = 0, g = c.SYMBOLS.length; a < g; a++) {
            18 === b && (b = 0, f += this.cellDimension, d = this.padding);
            var m = c.ELEMENT[c.SYMBOLS[a]];
            if (2 === m.atomicNumber) d += 16 * this.cellDimension, b += 16;
            else if (5 === m.atomicNumber || 13 === m.atomicNumber) d += 10 * this.cellDimension, b += 10;
            (58 > m.atomicNumber ||
                71 < m.atomicNumber && 90 > m.atomicNumber || 103 < m.atomicNumber) && 118 >= m.atomicNumber && (this.cells.push(new k(m, d, f, this.cellDimension)), d += this.cellDimension, b++)
        }
        f += 2 * this.cellDimension;
        d = 3 * this.cellDimension + this.padding;
        for (a = 57; 104 > a; a++)
            if (m = c.ELEMENT[c.SYMBOLS[a]], 90 === m.atomicNumber && (f += this.cellDimension, d = 3 * this.cellDimension + this.padding), 58 <= m.atomicNumber && 71 >= m.atomicNumber || 90 <= m.atomicNumber && 103 >= m.atomicNumber) this.cells.push(new k(m, d, f, this.cellDimension)), d += this.cellDimension
    };
    m.drawCell =
        function(c, f, b) {
            var a = c.createRadialGradient(b.x + b.dimension / 3, b.y + b.dimension / 3, 1.5 * b.dimension, b.x + b.dimension / 3, b.y + b.dimension / 3, b.dimension / 10);
            a.addColorStop(0, "#000000");
            a.addColorStop(.7, b.element.jmolColor);
            a.addColorStop(1, "#FFFFFF");
            c.fillStyle = a;
            n.contextRoundRect(c, b.x, b.y, b.dimension, b.dimension, b.dimension / 8);
            if (b === this.hovered || b === this.selected || b.selected) c.lineWidth = 2, c.strokeStyle = "#c10000", c.stroke(), c.fillStyle = "white";
            c.fill();
            c.font = n.getFontString(f.text_font_size, f.text_font_families);
            c.fillStyle = f.text_color;
            c.textAlign = "center";
            c.textBaseline = "middle";
            c.fillText(b.element.symbol, b.x + b.dimension / 2, b.y + b.dimension / 2)
            c.fillText(b.element.name, b.x + b.dimension / 2, b.y + b.dimension / 3)
            c.fillText(b.element.molarMass, b.x + b.dimension / 2, b.y + b.dimension / 1.4)
        };
    m.click = function(c) {
        this.hovered && (this.allowMultipleSelections ? this.hovered.selected = !this.hovered.selected : this.selected = this.hovered, this.repaint())
    };
    m.touchstart = function(c) {
        this.mousemove(c)
    };
    m.mousemove = function(c) {
        var d = c.p.x;
        c = c.p.y;
        this.hovered = g;
        for (var b = 0, a = this.cells.length; b < a; b++) {
            var h = this.cells[b];
            if (p.isBetween(d, h.x, h.x + h.dimension) && p.isBetween(c,
                    h.y, h.y + h.dimension)) {
                this.hovered = h;
                break
            }
        }
        this.repaint()
    };
    m.mouseout = function(c) {
        this.hovered = g;
        this.repaint()
    }
})(ChemDoodle, ChemDoodle.extensions, ChemDoodle.math, document);
(function(c, n, p, m) {
    c.png = {};
    c.png.string = function(c) {
        return n.getElementById(c.id).toDataURL("image/png")
    };
    c.png.open = function(c) {
        p.open(this.string(c))
    }
})(ChemDoodle.io, document, window);
(function(c, n, p) {
    c.file = {};
    c.file.content = function(c, g) {
        n.get(c, "", g)
    }
})(ChemDoodle.io, ChemDoodle.lib.jQuery);
(function(c, n, p, m, g, k, d) {
    n.SERVER_URL = "https://ichemlabs.cloud.chemdoodle.com/icl_cdc_v070001/WebHQ";
    n.inRelay = !1;
    n.asynchronous = !0;
    n.INFO = {
        userAgent: navigator.userAgent,
        v_cwc: c.getVersion(),
        v_jQuery: g.fn.jquery,
        v_jQuery_ui: g.ui ? g.ui.version : "N/A"
    };
    var f = new p.JSONInterpreter,
        b = new m.Queue;
    n._contactServer = function(a, c, d, f, k) {
        this.inRelay ? b.enqueue({
            call: a,
            content: c,
            options: d,
            callback: f,
            errorback: k
        }) : (n.inRelay = !0, g.ajax({
            dataType: "text",
            type: "POST",
            data: JSON.stringify({
                call: a,
                content: c,
                options: d,
                info: n.INFO
            }),
            url: this.SERVER_URL,
            success: function(a) {
                a = JSON.parse(a);
                a.message && alert(a.message);
                n.inRelay = !1;
                f && a.content && !a.stop && f(a.content);
                a.stop && k && k();
                b.isEmpty() || (a = b.dequeue(), n._contactServer(a.call, a.content, a.options, a.callback, a.errorback))
            },
            error: function(c, d, f) {
                "checkForUpdates" != a && alert("Call failed. Please try again. If you continue to see this message, please contact iChemLabs customer support.");
                n.inRelay = !1;
                k && k();
                b.isEmpty() || (c = b.dequeue(), n._contactServer(c.call, c.content,
                    c.options, c.callback, c.errorback))
            },
            xhrFields: {
                withCredentials: !0
            },
            async: n.asynchronous
        }))
    };
    n.authenticate = function(a, b, c, d) {
        this._contactServer("authenticate", {
            credential: a
        }, b, function(a) {
            c(a)
        }, d)
    };
    n.calculate = function(a, b, c, d) {
        this._contactServer("calculate", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(a)
        }, d)
    };
    n.createLewisDotStructure = function(a, b, c, d) {
        this._contactServer("createLewisDot", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(f.molFrom(a.mol))
        }, d)
    };
    n.generateImage = function(a, b, c, d) {
        this._contactServer("generateImage", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(a.link)
        }, d)
    };
    n.generateIUPACName = function(a, b, c, d) {
        this._contactServer("generateIUPACName", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(a.iupac)
        }, d)
    };
    n.getAd = function(a, b) {
        this._contactServer("getAd", {}, {}, function(b) {
            a(b.image_url, b.target_url)
        }, b)
    };
    n.getMoleculeFromContent = function(a, b, c, d) {
        this._contactServer("getMoleculeFromContent", {
            content: a
        }, b, function(a) {
            for (var b = !1, d = 0, g = a.mol.a.length; d < g; d++)
                if (0 !== a.mol.a[d].z) {
                    b = !0;
                    break
                }
            if (b)
                for (d = 0, g = a.mol.a.length; d < g; d++) a.mol.a[d].x /=
                    20, a.mol.a[d].y /= 20, a.mol.a[d].z /= 20;
            c(f.molFrom(a.mol))
        }, d)
    };
    n.getMoleculeFromDatabase = function(a, b, c, d) {
        this._contactServer("getMoleculeFromDatabase", {
            query: a
        }, b, function(a) {
            if (3 === b.dimension)
                for (var d = 0, g = a.mol.a.length; d < g; d++) a.mol.a[d].x /= 20, a.mol.a[d].y /= -20, a.mol.a[d].z /= 20;
            c(f.molFrom(a.mol))
        }, d)
    };
    n.getOptimizedPDBStructure = function(a, b, c, d) {
        this._contactServer("getOptimizedPDBStructure", {
            id: a
        }, b, function(a) {
            var b = a.mol ? f.molFrom(a.mol) : new m.Molecule;
            b.chains = f.chainsFrom(a.ribbons);
            b.fromJSON = !0;
            c(b)
        }, d)
    };
    n.getZeoliteFromIZA = function(a, b, c, d) {
        this._contactServer("getZeoliteFromIZA", {
            query: a
        }, b, function(a) {
            c(ChemDoodle.readCIF(a.cif, b.xSuper, b.ySuper, b.zSuper))
        }, d)
    };
    n.isGraphIsomorphism = function(a, b, c, d, g) {
        this._contactServer("isGraphIsomorphism", {
            arrow: f.molTo(a),
            target: f.molTo(b)
        }, c, function(a) {
            d(a.value)
        }, g)
    };
    n.isSubgraphIsomorphism = function(a, b, c, d, g) {
        this._contactServer("isSubgraphIsomorphism", {
            arrow: f.molTo(a),
            target: f.molTo(b)
        }, c, function(a) {
            d(a.value)
        }, g)
    };
    n.isSupergraphIsomorphism =
        function(a, b, c, d, g) {
            this._contactServer("isSupergraphIsomorphism", {
                arrow: f.molTo(a),
                target: f.molTo(b)
            }, c, function(a) {
                d(a.value)
            }, g)
        };
    n.getSimilarityMeasure = function(a, b, c, d, g) {
        this._contactServer("getSimilarityMeasure", {
            first: f.molTo(a),
            second: f.molTo(b)
        }, c, function(a) {
            d(a.value)
        }, g)
    };
    n.kekulize = function(a, b, c, d) {
        this._contactServer("kekulize", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(f.molFrom(a.mol))
        }, d)
    };
    n.mechanismMatch = function(a, b, c, d, f) {
        this._contactServer("matchMechanism", {
                arrow: a,
                targets: b
            }, c, function(a) {
                d(a)
            },
            f)
    };
    n.optimize = function(a, b, c, d) {
        this._contactServer("optimize", {
            mol: f.molTo(a)
        }, b, function(d) {
            d = f.molFrom(d.mol);
            if (2 === b.dimension) {
                for (var g = 0, h = d.atoms.length; g < h; g++) a.atoms[g].x = d.atoms[g].x, a.atoms[g].y = d.atoms[g].y;
                c()
            } else if (3 === b.dimension) {
                g = 0;
                for (h = d.atoms.length; g < h; g++) d.atoms[g].x /= 20, d.atoms[g].y /= -20, d.atoms[g].z /= 20;
                c(d)
            }
        }, d)
    };
    n.readIUPACName = function(a, b, c, d) {
        this._contactServer("readIUPACName", {
            iupac: a
        }, b, function(a) {
            c(f.molFrom(a.mol))
        }, d)
    };
    n.readSMILES = function(a, b, c, d) {
        this._contactServer("readSMILES", {
            smiles: a
        }, b, function(a) {
            c(f.molFrom(a.mol))
        }, d)
    };
    n.saveFile = function(a, b, c, d) {
        this._contactServer("saveFile", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(a.link)
        }, d)
    };
    n.simulate13CNMR = function(a, b, d, g) {
        b.nucleus = "C";
        b.isotope = 13;
        this._contactServer("simulateNMR", {
            mol: f.molTo(a)
        }, b, function(a) {
            d(c.readJCAMP(a.jcamp))
        }, g)
    };
    n.simulate1HNMR = function(a, b, d, g) {
        b.nucleus = "H";
        b.isotope = 1;
        this._contactServer("simulateNMR", {
            mol: f.molTo(a)
        }, b, function(a) {
            d(c.readJCAMP(a.jcamp))
        }, g)
    };
    n.simulateMassParentPeak = function(a,
        b, d, g) {
        this._contactServer("simulateMassParentPeak", {
            mol: f.molTo(a)
        }, b, function(a) {
            d(c.readJCAMP(a.jcamp))
        }, g)
    };
    n.writeSMILES = function(a, b, c, d) {
        this._contactServer("writeSMILES", {
            mol: f.molTo(a)
        }, b, function(a) {
            c(a.smiles)
        }, d)
    };
    n.version = function(a, b, c) {
        this._contactServer("version", {}, a, function(a) {
            b(a.value)
        }, c)
    };
    n.checkForUpdates = function(a) {
        this._contactServer("checkForUpdates", {
            value: k.href
        }, a, function(a) {}, function() {})
    }
})(ChemDoodle, ChemDoodle.iChemLabs, ChemDoodle.io, ChemDoodle.structures, ChemDoodle.lib.jQuery,
    location);
