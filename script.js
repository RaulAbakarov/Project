!(function (h, C) {
  var t,
    n,
    v = typeof C,
    e = h.location,
    g = h.document,
    i = g.documentElement,
    o = h.jQuery,
    r = h.$,
    s = {},
    f = [],
    a = "1.10.0",
    m = f.concat,
    l = f.push,
    u = f.slice,
    c = f.indexOf,
    d = s.toString,
    y = s.hasOwnProperty,
    p = a.trim,
    ke = function (e, t) {
      return new ke.fn.init(e, t, n);
    },
    b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    k = /\S+/g,
    x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    T = /^[\],:{}\s]*$/,
    N = /(?:^|:|,)(?:\s*\[)+/g,
    E = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    S = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    D = /^-ms-/,
    P = /-([\da-z])/gi,
    A = function (e, t) {
      return t.toUpperCase();
    },
    L = function (e) {
      (g.addEventListener ||
        "load" === e.type ||
        "complete" === g.readyState) &&
        (j(), ke.ready());
    },
    j = function () {
      g.addEventListener
        ? (g.removeEventListener("DOMContentLoaded", L, !1),
          h.removeEventListener("load", L, !1))
        : (g.detachEvent("onreadystatechange", L), h.detachEvent("onload", L));
    };
  function H(e) {
    var t = e.length,
      n = ke.type(e);
    return (
      !ke.isWindow(e) &&
      (!(1 !== e.nodeType || !t) ||
        "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && 0 < t && t - 1 in e))))
    );
  }
  (ke.fn = ke.prototype =
    {
      jquery: a,
      constructor: ke,
      init: function (e, t, n) {
        var i, o;
        if (!e) return this;
        if ("string" != typeof e)
          return e.nodeType
            ? ((this.context = this[0] = e), (this.length = 1), this)
            : ke.isFunction(e)
            ? n.ready(e)
            : (e.selector !== C &&
                ((this.selector = e.selector), (this.context = e.context)),
              ke.makeArray(e, this));
        if (
          !(i =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            3 <= e.length
              ? [null, e, null]
              : _.exec(e)) ||
          (!i[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof ke ? t[0] : t),
            ke.merge(
              this,
              ke.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)
            ),
            w.test(i[1]) && ke.isPlainObject(t))
          )
            for (i in t)
              ke.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        if ((o = g.getElementById(i[2])) && o.parentNode) {
          if (o.id !== i[2]) return n.find(e);
          (this.length = 1), (this[0] = o);
        }
        return (this.context = g), (this.selector = e), this;
      },
      selector: "",
      length: 0,
      toArray: function () {
        return u.call(this);
      },
      get: function (e) {
        return null == e
          ? this.toArray()
          : e < 0
          ? this[this.length + e]
          : this[e];
      },
      pushStack: function (e) {
        var t = ke.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return ke.each(this, e, t);
      },
      ready: function (e) {
        return ke.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(u.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      map: function (n) {
        return this.pushStack(
          ke.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: l,
      sort: [].sort,
      splice: [].splice,
    }),
    (ke.fn.init.prototype = ke.fn),
    (ke.extend = ke.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          o,
          r,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (a = 2)),
            "object" == typeof s || ke.isFunction(s) || (s = {}),
            l === a && ((s = this), --a);
          a < l;
          a++
        )
          if (null != (o = arguments[a]))
            for (i in o)
              (e = s[i]),
                s !== (n = o[i]) &&
                  (c && n && (ke.isPlainObject(n) || (t = ke.isArray(n)))
                    ? ((r = t
                        ? ((t = !1), e && ke.isArray(e) ? e : [])
                        : e && ke.isPlainObject(e)
                        ? e
                        : {}),
                      (s[i] = ke.extend(c, r, n)))
                    : n !== C && (s[i] = n));
        return s;
      }),
    ke.extend({
      expando: "jQuery" + (a + Math.random()).replace(/\D/g, ""),
      noConflict: function (e) {
        return (
          h.$ === ke && (h.$ = r), e && h.jQuery === ke && (h.jQuery = o), ke
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ke.readyWait++ : ke.ready(!0);
      },
      ready: function (e) {
        if (!0 === e ? !--ke.readyWait : !ke.isReady) {
          if (!g.body) return setTimeout(ke.ready);
          ((ke.isReady = !0) !== e && 0 < --ke.readyWait) ||
            (t.resolveWith(g, [ke]),
            ke.fn.trigger && ke(g).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === ke.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === ke.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? s[d.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== ke.type(e) || e.nodeType || ke.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !y.call(e, "constructor") &&
            !y.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        if (ke.support.ownLast) for (t in e) return y.call(e, t);
        for (t in e);
        return t === C || y.call(e, t);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function (e) {
        throw Error(e);
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || g);
        var i = w.exec(e),
          o = !n && [];
        return i
          ? [t.createElement(i[1])]
          : ((i = ke.buildFragment([e], t, o)),
            o && ke(o).remove(),
            ke.merge([], i.childNodes));
      },
      parseJSON: function (e) {
        return h.JSON && h.JSON.parse
          ? h.JSON.parse(e)
          : null === e
          ? e
          : "string" == typeof e &&
            (e = ke.trim(e)) &&
            T.test(e.replace(E, "@").replace(S, "]").replace(N, ""))
          ? Function("return " + e)()
          : (ke.error("Invalid JSON: " + e), C);
      },
      parseXML: function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          h.DOMParser
            ? (t = new DOMParser().parseFromString(e, "text/xml"))
            : (((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
              t.loadXML(e));
        } catch (e) {
          t = C;
        }
        return (
          (t &&
            t.documentElement &&
            !t.getElementsByTagName("parsererror").length) ||
            ke.error("Invalid XML: " + e),
          t
        );
      },
      noop: function () {},
      globalEval: function (e) {
        e &&
          ke.trim(e) &&
          (
            h.execScript ||
            function (e) {
              h.eval.call(h, e);
            }
          )(e);
      },
      camelCase: function (e) {
        return e.replace(D, "ms-").replace(P, A);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var i = 0,
          o = e.length,
          r = H(e);
        if (n) {
          if (r) for (; i < o && !1 !== t.apply(e[i], n); i++);
          else for (i in e) if (!1 === t.apply(e[i], n)) break;
        } else if (r) for (; i < o && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim:
        p && !p.call("\ufeff ")
          ? function (e) {
              return null == e ? "" : p.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(x, "");
            },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (H(Object(e))
              ? ke.merge(n, "string" == typeof e ? [e] : e)
              : l.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var i;
        if (t) {
          if (c) return c.call(t, e, n);
          for (
            i = t.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0;
            n < i;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        var n = t.length,
          i = e.length,
          o = 0;
        if ("number" == typeof n) for (; o < n; o++) e[i++] = t[o];
        else for (; t[o] !== C; ) e[i++] = t[o++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        var i = [],
          o = 0,
          r = e.length;
        for (n = !!n; o < r; o++) n !== !!t(e[o], o) && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o = 0,
          r = e.length,
          s = [];
        if (H(e))
          for (; o < r; o++) null != (i = t(e[o], o, n)) && (s[s.length] = i);
        else for (o in e) null != (i = t(e[o], o, n)) && (s[s.length] = i);
        return m.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, o;
        return (
          "string" == typeof t && ((o = e[t]), (t = e), (e = o)),
          ke.isFunction(e)
            ? ((n = u.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, n.concat(u.call(arguments)));
              }).guid = e.guid =
                e.guid || ke.guid++),
              i)
            : C
        );
      },
      access: function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === ke.type(n))
          for (a in ((o = !0), n)) ke.access(e, t, a, n[a], !0, r, s);
        else if (
          i !== C &&
          ((o = !0),
          ke.isFunction(i) || (s = !0),
          c &&
            (t = s
              ? (t.call(e, i), null)
              : ((c = t),
                function (e, t, n) {
                  return c.call(ke(e), n);
                })),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
      now: function () {
        return new Date().getTime();
      },
      swap: function (e, t, n, i) {
        var o,
          r,
          s = {};
        for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
        return o;
      },
    }),
    (ke.ready.promise = function (e) {
      if (!t)
        if (((t = ke.Deferred()), "complete" === g.readyState))
          setTimeout(ke.ready);
        else if (g.addEventListener)
          g.addEventListener("DOMContentLoaded", L, !1),
            h.addEventListener("load", L, !1);
        else {
          g.attachEvent("onreadystatechange", L), h.attachEvent("onload", L);
          var n = !1;
          try {
            n = null == h.frameElement && g.documentElement;
          } catch (e) {}
          n &&
            n.doScroll &&
            (function t() {
              if (!ke.isReady) {
                try {
                  n.doScroll("left");
                } catch (e) {
                  return setTimeout(t, 50);
                }
                j(), ke.ready();
              }
            })();
        }
      return t.promise(e);
    }),
    ke.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        s["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (n = ke(g)),
    (function (n, o) {
      var e,
        h,
        _,
        w,
        r,
        t,
        g,
        C,
        c,
        m,
        k,
        i,
        v,
        y,
        s,
        a,
        b,
        T = "sizzle" + -new Date(),
        x = n.document,
        N = 0,
        f = 0,
        l = re(),
        u = re(),
        d = re(),
        p = !1,
        E = function () {
          return 0;
        },
        S = typeof o,
        D = {}.hasOwnProperty,
        P = [],
        A = P.pop,
        L = P.push,
        j = P.push,
        H = P.slice,
        O =
          P.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; t < n; t++)
              if (this[t] === e) return t;
            return -1;
          },
        M =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        F = W.replace("w", "w#"),
        q =
          "\\[" +
          I +
          "*(" +
          W +
          ")" +
          I +
          "*(?:([*^$|!~]?=)" +
          I +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          F +
          ")|)|)" +
          I +
          "*\\]",
        R =
          ":(" +
          W +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          q.replace(3, 8) +
          ")*)|.*)\\)|)",
        z = RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        B = RegExp("^" + I + "*," + I + "*"),
        $ = RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        U = RegExp(I + "*[+~]"),
        X = RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
        Y = RegExp(R),
        J = RegExp("^" + F + "$"),
        V = {
          ID: RegExp("^#(" + W + ")"),
          CLASS: RegExp("^\\.(" + W + ")"),
          TAG: RegExp("^(" + W.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + q),
          PSEUDO: RegExp("^" + R),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              I +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              I +
              "*(?:([+-]|)" +
              I +
              "*(\\d+)|))" +
              I +
              "*\\)|)",
            "i"
          ),
          bool: RegExp("^(?:" + M + ")$", "i"),
          needsContext: RegExp(
            "^" +
              I +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              I +
              "*((?:-\\d)?\\d*)" +
              I +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Q = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        G = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        ee = /'|\\/g,
        te = RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        ne = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i));
        };
      try {
        j.apply((P = H.call(x.childNodes)), x.childNodes),
          P[x.childNodes.length].nodeType;
      } catch (e) {
        j = {
          apply: P.length
            ? function (e, t) {
                L.apply(e, H.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      function ie(e, t, n, i) {
        var o, r, s, a, l, c, u, f, d, p;
        if (
          ((t ? t.ownerDocument || t : x) !== k && m(t),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (a = (t = t || k).nodeType) && 9 !== a) return [];
        if (v && !i) {
          if ((o = K.exec(e)))
            if ((s = o[1])) {
              if (9 === a) {
                if (!(r = t.getElementById(s)) || !r.parentNode) return n;
                if (r.id === s) return n.push(r), n;
              } else if (
                t.ownerDocument &&
                (r = t.ownerDocument.getElementById(s)) &&
                b(t, r) &&
                r.id === s
              )
                return n.push(r), n;
            } else {
              if (o[2]) return j.apply(n, t.getElementsByTagName(e)), n;
              if (
                (s = o[3]) &&
                h.getElementsByClassName &&
                t.getElementsByClassName
              )
                return j.apply(n, t.getElementsByClassName(s)), n;
            }
          if (h.qsa && (!y || !y.test(e))) {
            if (
              ((f = u = T),
              (d = t),
              (p = 9 === a && e),
              1 === a && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                c = me(e),
                  (u = t.getAttribute("id"))
                    ? (f = u.replace(ee, "\\$&"))
                    : t.setAttribute("id", f),
                  f = "[id='" + f + "'] ",
                  l = c.length;
                l--;

              )
                c[l] = f + ve(c[l]);
              (d = (U.test(e) && t.parentNode) || t), (p = c.join(","));
            }
            if (p)
              try {
                return j.apply(n, d.querySelectorAll(p)), n;
              } catch (e) {
              } finally {
                u || t.removeAttribute("id");
              }
          }
        }
        return (function (e, t, n, i) {
          var o,
            r,
            s,
            a,
            l,
            c = me(e);
          if (!i && 1 === c.length) {
            if (
              2 < (r = c[0] = c[0].slice(0)).length &&
              "ID" === (s = r[0]).type &&
              h.getById &&
              9 === t.nodeType &&
              v &&
              w.relative[r[1].type]
            ) {
              if (!(t = (w.find.ID(s.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              e = e.slice(r.shift().value.length);
            }
            for (
              o = V.needsContext.test(e) ? 0 : r.length;
              o-- && ((s = r[o]), !w.relative[(a = s.type)]);

            )
              if (
                (l = w.find[a]) &&
                (i = l(
                  s.matches[0].replace(te, ne),
                  (U.test(r[0].type) && t.parentNode) || t
                ))
              ) {
                if ((r.splice(o, 1), !(e = i.length && ve(r))))
                  return j.apply(n, i), n;
                break;
              }
          }
          return g(e, c)(i, t, !v, n, U.test(e)), n;
        })(e.replace(z, "$1"), t, n, i);
      }
      function oe(e) {
        return Q.test(e + "");
      }
      function re() {
        var i = [];
        return function e(t, n) {
          return (
            i.push((t += " ")) > w.cacheLength && delete e[i.shift()],
            (e[t] = n)
          );
        };
      }
      function se(e) {
        return (e[T] = !0), e;
      }
      function ae(e) {
        var t = k.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function le(e, t, n) {
        for (var i, o = (e = e.split("|")).length, r = n ? null : t; o--; )
          ((i = w.attrHandle[e[o]]) && i !== t) || (w.attrHandle[e[o]] = r);
      }
      function ce(e, t) {
        var n = e.getAttributeNode(t);
        return n && n.specified
          ? n.value
          : !0 === e[t]
          ? t.toLowerCase()
          : null;
      }
      function ue(e, t) {
        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }
      function fe(e) {
        return "input" === e.nodeName.toLowerCase() ? e.defaultValue : o;
      }
      function de(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function pe(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function he(n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        };
      }
      function ge(s) {
        return se(function (r) {
          return (
            (r = +r),
            se(function (e, t) {
              for (var n, i = s([], e.length, r), o = i.length; o--; )
                e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      for (e in ((t = ie.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (h = ie.support = {}),
      (m = ie.setDocument =
        function (e) {
          var l = e ? e.ownerDocument || e : x;
          return l !== k && 9 === l.nodeType && l.documentElement
            ? ((i = (k = l).documentElement),
              (v = !t(l)),
              (h.attributes = ae(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  le(
                    "type|href|height|width",
                    ue,
                    "#" === e.firstChild.getAttribute("href")
                  ),
                  le(M, ce, null == e.getAttribute("disabled")),
                  (e.className = "i"),
                  !e.getAttribute("className")
                );
              })),
              (h.input = ae(function (e) {
                return (
                  (e.innerHTML = "<input>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })),
              le("value", fe, h.attributes && h.input),
              (h.getElementsByTagName = ae(function (e) {
                return (
                  e.appendChild(l.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (h.getElementsByClassName = ae(function (e) {
                return (
                  (e.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (e.firstChild.className = "i"),
                  2 === e.getElementsByClassName("i").length
                );
              })),
              (h.getById = ae(function (e) {
                return (
                  (i.appendChild(e).id = T),
                  !l.getElementsByName || !l.getElementsByName(T).length
                );
              })),
              h.getById
                ? ((w.find.ID = function (e, t) {
                    if (typeof t.getElementById !== S && v) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (w.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete w.find.ID,
                  (w.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                      var t =
                        typeof e.getAttributeNode !== S &&
                        e.getAttributeNode("id");
                      return t && t.value === n;
                    };
                  })),
              (w.find.TAG = h.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== S
                      ? t.getElementsByTagName(e)
                      : o;
                  }
                : function (e, t) {
                    var n,
                      i = [],
                      o = 0,
                      r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }),
              (w.find.CLASS =
                h.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== S && v
                    ? t.getElementsByClassName(e)
                    : o;
                }),
              (s = []),
              (y = []),
              (h.qsa = oe(l.querySelectorAll)) &&
                (ae(function (e) {
                  (e.innerHTML =
                    "<select><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + I + "*(?:value|" + M + ")"),
                    e.querySelectorAll(":checked").length || y.push(":checked");
                }),
                ae(function (e) {
                  var t = l.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("t", ""),
                    e.querySelectorAll("[t^='']").length &&
                      y.push("[*^$]=" + I + "*(?:''|\"\")"),
                    e.querySelectorAll(":enabled").length ||
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (h.matchesSelector = oe(
                (a =
                  i.webkitMatchesSelector ||
                  i.mozMatchesSelector ||
                  i.oMatchesSelector ||
                  i.msMatchesSelector)
              )) &&
                ae(function (e) {
                  (h.disconnectedMatch = a.call(e, "div")),
                    a.call(e, "[s!='']:x"),
                    s.push("!=", R);
                }),
              (y = y.length && RegExp(y.join("|"))),
              (s = s.length && RegExp(s.join("|"))),
              (b =
                oe(i.contains) || i.compareDocumentPosition
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                      return (
                        e === i ||
                        !(
                          !i ||
                          1 !== i.nodeType ||
                          !(n.contains
                            ? n.contains(i)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(i))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (h.sortDetached = ae(function (e) {
                return 1 & e.compareDocumentPosition(l.createElement("div"));
              })),
              (E = i.compareDocumentPosition
                ? function (e, t) {
                    if (e === t) return (p = !0), 0;
                    var n =
                      t.compareDocumentPosition &&
                      e.compareDocumentPosition &&
                      e.compareDocumentPosition(t);
                    return n
                      ? 1 & n ||
                        (!h.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === l || b(x, e)
                          ? -1
                          : t === l || b(x, t)
                          ? 1
                          : c
                          ? O.call(c, e) - O.call(c, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1
                      : e.compareDocumentPosition
                      ? -1
                      : 1;
                  }
                : function (e, t) {
                    var n,
                      i = 0,
                      o = e.parentNode,
                      r = t.parentNode,
                      s = [e],
                      a = [t];
                    if (e === t) return (p = !0), 0;
                    if (!o || !r)
                      return e === l
                        ? -1
                        : t === l
                        ? 1
                        : o
                        ? -1
                        : r
                        ? 1
                        : c
                        ? O.call(c, e) - O.call(c, t)
                        : 0;
                    if (o === r) return de(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[i] === a[i]; ) i++;
                    return i
                      ? de(s[i], a[i])
                      : s[i] === x
                      ? -1
                      : a[i] === x
                      ? 1
                      : 0;
                  }),
              l)
            : k;
        }),
      (ie.matches = function (e, t) {
        return ie(e, null, null, t);
      }),
      (ie.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== k && m(e),
          (t = t.replace(X, "='$1']")),
          !(!h.matchesSelector || !v || (s && s.test(t)) || (y && y.test(t))))
        )
          try {
            var n = a.call(e, t);
            if (
              n ||
              h.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {}
        return 0 < ie(t, k, null, [e]).length;
      }),
      (ie.contains = function (e, t) {
        return (e.ownerDocument || e) !== k && m(e), b(e, t);
      }),
      (ie.attr = function (e, t) {
        (e.ownerDocument || e) !== k && m(e);
        var n = w.attrHandle[t.toLowerCase()],
          i = n && D.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !v) : o;
        return i === o
          ? h.attributes || !v
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null
          : i;
      }),
      (ie.error = function (e) {
        throw Error("Syntax error, unrecognized expression: " + e);
      }),
      (ie.uniqueSort = function (e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((p = !h.detectDuplicates),
          (c = !h.sortStable && e.slice(0)),
          e.sort(E),
          p)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return e;
      }),
      (r = ie.getText =
        function (e) {
          var t,
            n = "",
            i = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; (t = e[i]); i++) n += r(t);
          return n;
        }),
      (w = ie.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(te, ne)),
                (e[3] = (e[4] || e[5] || "").replace(te, ne)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || ie.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && ie.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[5] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3] && e[4] !== o
                    ? (e[2] = e[4])
                    : n &&
                      Y.test(n) &&
                      (t = me(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = l[e + " "];
              return (
                t ||
                ((t = RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) &&
                  l(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== S &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (n, i, o) {
              return function (e) {
                var t = ie.attr(e, n);
                return null == t
                  ? "!=" === i
                  : !i ||
                      ((t += ""),
                      "=" === i
                        ? t === o
                        : "!=" === i
                        ? t !== o
                        : "^=" === i
                        ? o && 0 === t.indexOf(o)
                        : "*=" === i
                        ? o && -1 < t.indexOf(o)
                        : "$=" === i
                        ? o && t.slice(-o.length) === o
                        : "~=" === i
                        ? -1 < (" " + t + " ").indexOf(o)
                        : "|=" === i &&
                          (t === o || t.slice(0, o.length + 1) === o + "-"));
              };
            },
            CHILD: function (p, e, t, h, g) {
              var m = "nth" !== p.slice(0, 3),
                v = "last" !== p.slice(-4),
                y = "of-type" === e;
              return 1 === h && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var i,
                      o,
                      r,
                      s,
                      a,
                      l,
                      c = m !== v ? "nextSibling" : "previousSibling",
                      u = e.parentNode,
                      f = y && e.nodeName.toLowerCase(),
                      d = !n && !y;
                    if (u) {
                      if (m) {
                        for (; c; ) {
                          for (r = e; (r = r[c]); )
                            if (
                              y
                                ? r.nodeName.toLowerCase() === f
                                : 1 === r.nodeType
                            )
                              return !1;
                          l = c = "only" === p && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (((l = [v ? u.firstChild : u.lastChild]), v && d)) {
                        for (
                          a =
                            (i = (o = u[T] || (u[T] = {}))[p] || [])[0] === N &&
                            i[1],
                            s = i[0] === N && i[2],
                            r = a && u.childNodes[a];
                          (r = (++a && r && r[c]) || (s = a = 0) || l.pop());

                        )
                          if (1 === r.nodeType && ++s && r === e) {
                            o[p] = [N, a, s];
                            break;
                          }
                      } else if (
                        d &&
                        (i = (e[T] || (e[T] = {}))[p]) &&
                        i[0] === N
                      )
                        s = i[1];
                      else
                        for (
                          ;
                          (r = (++a && r && r[c]) || (s = a = 0) || l.pop()) &&
                          ((y
                            ? r.nodeName.toLowerCase() !== f
                            : 1 !== r.nodeType) ||
                            !++s ||
                            (d && ((r[T] || (r[T] = {}))[p] = [N, s]),
                            r !== e));

                        );
                      return (s -= g) === h || (0 == s % h && 0 <= s / h);
                    }
                  };
            },
            PSEUDO: function (e, r) {
              var t,
                s =
                  w.pseudos[e] ||
                  w.setFilters[e.toLowerCase()] ||
                  ie.error("unsupported pseudo: " + e);
              return s[T]
                ? s(r)
                : 1 < s.length
                ? ((t = [e, e, "", r]),
                  w.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, t) {
                        for (var n, i = s(e, r), o = i.length; o--; )
                          e[(n = O.call(e, i[o]))] = !(t[n] = i[o]);
                      })
                    : function (e) {
                        return s(e, 0, t);
                      })
                : s;
            },
          },
          pseudos: {
            not: se(function (e) {
              var i = [],
                o = [],
                a = g(e.replace(z, "$1"));
              return a[T]
                ? se(function (e, t, n, i) {
                    for (var o, r = a(e, null, i, []), s = e.length; s--; )
                      (o = r[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, t, n) {
                    return (i[0] = e), a(i, null, n, o), !o.pop();
                  };
            }),
            has: se(function (t) {
              return function (e) {
                return 0 < ie(t, e).length;
              };
            }),
            contains: se(function (t) {
              return function (e) {
                return -1 < (e.textContent || e.innerText || r(e)).indexOf(t);
              };
            }),
            lang: se(function (n) {
              return (
                J.test(n || "") || ie.error("unsupported lang: " + n),
                (n = n.replace(te, ne).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = v
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === i;
            },
            focus: function (e) {
              return (
                e === k.activeElement &&
                (!k.hasFocus || k.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType)
                  return !1;
              return !0;
            },
            parent: function (e) {
              return !w.pseudos.empty(e);
            },
            header: function (e) {
              return Z.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  t.toLowerCase() === e.type)
              );
            },
            first: ge(function () {
              return [0];
            }),
            last: ge(function (e, t) {
              return [t - 1];
            }),
            eq: ge(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ge(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ge(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
              return e;
            }),
            gt: ge(function (e, t, n) {
              for (var i = n < 0 ? n + t : n; t > ++i; ) e.push(i);
              return e;
            }),
          },
        }),
      {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      }))
        w.pseudos[e] = pe(e);
      for (e in {
        submit: !0,
        reset: !0,
      })
        w.pseudos[e] = he(e);
      function me(e, t) {
        var n,
          i,
          o,
          r,
          s,
          a,
          l,
          c = u[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (s = e, a = [], l = w.preFilter; s; ) {
          for (r in ((!n || (i = B.exec(s))) &&
            (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
          (n = !1),
          (i = $.exec(s)) &&
            ((n = i.shift()),
            o.push({
              value: n,
              type: i[0].replace(z, " "),
            }),
            (s = s.slice(n.length))),
          w.filter))
            !(i = V[r].exec(s)) ||
              (l[r] && !(i = l[r](i))) ||
              ((n = i.shift()),
              o.push({
                value: n,
                type: r,
                matches: i,
              }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? ie.error(e) : u(e, a).slice(0);
      }
      function ve(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function ye(a, e, t) {
        var l = e.dir,
          c = t && "parentNode" === l,
          u = f++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[l]); ) if (1 === e.nodeType || c) return a(e, t, n);
            }
          : function (e, t, n) {
              var i,
                o,
                r,
                s = N + " " + u;
              if (n) {
                for (; (e = e[l]); )
                  if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
              } else
                for (; (e = e[l]); )
                  if (1 === e.nodeType || c)
                    if ((o = (r = e[T] || (e[T] = {}))[l]) && o[0] === s) {
                      if (!0 === (i = o[1]) || i === _) return !0 === i;
                    } else if (
                      (((o = r[l] = [s])[1] = a(e, t, n) || _), !0 === o[1])
                    )
                      return !0;
            };
      }
      function be(o) {
        return 1 < o.length
          ? function (e, t, n) {
              for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
              return !0;
            }
          : o[0];
      }
      function xe(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
          (r = e[a]) && (!n || n(r, i, o)) && (s.push(r), c && t.push(a));
        return s;
      }
      function _e(p, h, g, m, v, e) {
        return (
          m && !m[T] && (m = _e(m)),
          v && !v[T] && (v = _e(v, e)),
          se(function (e, t, n, i) {
            var o,
              r,
              s,
              a = [],
              l = [],
              c = t.length,
              u =
                e ||
                (function (e, t, n) {
                  for (var i = 0, o = t.length; i < o; i++) ie(e, t[i], n);
                  return n;
                })(h || "*", n.nodeType ? [n] : n, []),
              f = !p || (!e && h) ? u : xe(u, a, p, n, i),
              d = g ? (v || (e ? p : c || m) ? [] : t) : f;
            if ((g && g(f, d, n, i), m))
              for (o = xe(d, l), m(o, [], n, i), r = o.length; r--; )
                (s = o[r]) && (d[l[r]] = !(f[l[r]] = s));
            if (e) {
              if (v || p) {
                if (v) {
                  for (o = [], r = d.length; r--; )
                    (s = d[r]) && o.push((f[r] = s));
                  v(null, (d = []), o, i);
                }
                for (r = d.length; r--; )
                  (s = d[r]) &&
                    -1 < (o = v ? O.call(e, s) : a[r]) &&
                    (e[o] = !(t[o] = s));
              }
            } else (d = xe(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, i) : j.apply(t, d);
          })
        );
      }
      function we(e) {
        for (
          var i,
            t,
            n,
            o = e.length,
            r = w.relative[e[0].type],
            s = r || w.relative[" "],
            a = r ? 1 : 0,
            l = ye(
              function (e) {
                return e === i;
              },
              s,
              !0
            ),
            c = ye(
              function (e) {
                return -1 < O.call(i, e);
              },
              s,
              !0
            ),
            u = [
              function (e, t, n) {
                return (
                  (!r && (n || t !== C)) ||
                  ((i = t).nodeType ? l(e, t, n) : c(e, t, n))
                );
              },
            ];
          a < o;
          a++
        )
          if ((t = w.relative[e[a].type])) u = [ye(be(u), t)];
          else {
            if ((t = w.filter[e[a].type].apply(null, e[a].matches))[T]) {
              for (n = ++a; n < o && !w.relative[e[n].type]; n++);
              return _e(
                1 < a && be(u),
                1 < a &&
                  ve(
                    e.slice(0, a - 1).concat({
                      value: " " === e[a - 2].type ? "*" : "",
                    })
                  ).replace(z, "$1"),
                t,
                a < n && we(e.slice(a, n)),
                n < o && we((e = e.slice(n))),
                n < o && ve(e)
              );
            }
            u.push(t);
          }
        return be(u);
      }
      function Ce() {}
      (g = ie.compile =
        function (e, t) {
          var n,
            m,
            v,
            y,
            b,
            x,
            i,
            o = [],
            r = [],
            s = d[e + " "];
          if (!s) {
            for (t || (t = me(e)), n = t.length; n--; )
              (s = we(t[n]))[T] ? o.push(s) : r.push(s);
            s = d(
              e,
              ((m = r),
              (b = (y = 0) < (v = o).length),
              (x = 0 < m.length),
              (i = function (e, t, n, i, o) {
                var r,
                  s,
                  a,
                  l = [],
                  c = 0,
                  u = "0",
                  f = e && [],
                  d = null != o,
                  p = C,
                  h = e || (x && w.find.TAG("*", (o && t.parentNode) || t)),
                  g = (N += null == p ? 1 : Math.random() || 0.1);
                for (
                  d && ((C = t !== k && t), (_ = y));
                  null != (r = h[u]);
                  u++
                ) {
                  if (x && r) {
                    for (s = 0; (a = m[s++]); )
                      if (a(r, t, n)) {
                        i.push(r);
                        break;
                      }
                    d && ((N = g), (_ = ++y));
                  }
                  b && ((r = !a && r) && c--, e && f.push(r));
                }
                if (((c += u), b && u !== c)) {
                  for (s = 0; (a = v[s++]); ) a(f, l, t, n);
                  if (e) {
                    if (0 < c) for (; u--; ) f[u] || l[u] || (l[u] = A.call(i));
                    l = xe(l);
                  }
                  j.apply(i, l),
                    d &&
                      !e &&
                      0 < l.length &&
                      1 < c + v.length &&
                      ie.uniqueSort(i);
                }
                return d && ((N = g), (C = p)), f;
              }),
              b ? se(i) : i)
            );
          }
          return s;
        }),
        (w.pseudos.nth = w.pseudos.eq),
        (Ce.prototype = w.filters = w.pseudos),
        (w.setFilters = new Ce()),
        (h.sortStable = T.split("").sort(E).join("") === T),
        m(),
        [0, 0].sort(E),
        (h.detectDuplicates = p),
        (ke.find = ie),
        (ke.expr = ie.selectors),
        (ke.expr[":"] = ke.expr.pseudos),
        (ke.unique = ie.uniqueSort),
        (ke.text = ie.getText),
        (ke.isXMLDoc = ie.isXML),
        (ke.contains = ie.contains);
    })(h);
  var O = {};
  (ke.Callbacks = function (o) {
    var e, n;
    o =
      "string" == typeof o
        ? O[o] ||
          ((n = O[(e = o)] = {}),
          ke.each(e.match(k) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : ke.extend({}, o);
    var i,
      t,
      r,
      s,
      a,
      l,
      c = [],
      u = !o.once && [],
      f = function (e) {
        for (
          t = o.memory && e, r = !0, a = l || 0, l = 0, s = c.length, i = !0;
          c && a < s;
          a++
        )
          if (!1 === c[a].apply(e[0], e[1]) && o.stopOnFalse) {
            t = !1;
            break;
          }
        (i = !1),
          c && (u ? u.length && f(u.shift()) : t ? (c = []) : d.disable());
      },
      d = {
        add: function () {
          if (c) {
            var e = c.length;
            (function i(e) {
              ke.each(e, function (e, t) {
                var n = ke.type(t);
                "function" === n
                  ? (o.unique && d.has(t)) || c.push(t)
                  : t && t.length && "string" !== n && i(t);
              });
            })(arguments),
              i ? (s = c.length) : t && ((l = e), f(t));
          }
          return this;
        },
        remove: function () {
          return (
            c &&
              ke.each(arguments, function (e, t) {
                for (var n; -1 < (n = ke.inArray(t, c, n)); )
                  c.splice(n, 1), i && (n <= s && s--, n <= a && a--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < ke.inArray(e, c) : !(!c || !c.length);
        },
        empty: function () {
          return (c = []), (s = 0), this;
        },
        disable: function () {
          return (c = u = t = C), this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          return (u = C), t || d.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (e, t) {
          return (
            (t = [e, (t = t || []).slice ? t.slice() : t]),
            !c || (r && !u) || (i ? u.push(t) : f(t)),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return d;
  }),
    ke.extend({
      Deferred: function (e) {
        var s = [
            ["resolve", "done", ke.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ke.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ke.Callbacks("memory")],
          ],
          o = "pending",
          a = {
            state: function () {
              return o;
            },
            always: function () {
              return l.done(arguments).fail(arguments), this;
            },
            then: function () {
              var r = arguments;
              return ke
                .Deferred(function (o) {
                  ke.each(s, function (e, t) {
                    var n = t[0],
                      i = ke.isFunction(r[e]) && r[e];
                    l[t[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && ke.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(o.resolve)
                            .fail(o.reject)
                            .progress(o.notify)
                        : o[n + "With"](
                            this === a ? o.promise() : this,
                            i ? [e] : arguments
                          );
                    });
                  }),
                    (r = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ke.extend(e, a) : a;
            },
          },
          l = {};
        return (
          (a.pipe = a.then),
          ke.each(s, function (e, t) {
            var n = t[2],
              i = t[3];
            (a[t[1]] = n.add),
              i &&
                n.add(
                  function () {
                    o = i;
                  },
                  s[1 ^ e][2].disable,
                  s[2][2].lock
                ),
              (l[t[0]] = function () {
                return l[t[0] + "With"](this === l ? a : this, arguments), this;
              }),
              (l[t[0] + "With"] = n.fireWith);
          }),
          a.promise(l),
          e && e.call(l, l),
          l
        );
      },
      when: function (e) {
        var o,
          t,
          n,
          i = 0,
          r = u.call(arguments),
          s = r.length,
          a = 1 !== s || (e && ke.isFunction(e.promise)) ? s : 0,
          l = 1 === a ? e : ke.Deferred(),
          c = function (t, n, i) {
            return function (e) {
              (n[t] = this),
                (i[t] = 1 < arguments.length ? u.call(arguments) : e),
                i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
            };
          };
        if (1 < s)
          for (o = Array(s), t = Array(s), n = Array(s); i < s; i++)
            r[i] && ke.isFunction(r[i].promise)
              ? r[i]
                  .promise()
                  .done(c(i, n, r))
                  .fail(l.reject)
                  .progress(c(i, t, o))
              : --a;
        return a || l.resolveWith(n, r), l.promise();
      },
    }),
    (ke.support = (function (r) {
      var e,
        t,
        n,
        i,
        o,
        s,
        a,
        l,
        c,
        u = g.createElement("div");
      if (
        (u.setAttribute("className", "t"),
        (u.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (e = u.getElementsByTagName("*") || []),
        !(t = u.getElementsByTagName("a")[0]) || !t.style || !e.length)
      )
        return r;
      (s = (i = g.createElement("select")).appendChild(
        g.createElement("option")
      )),
        (n = u.getElementsByTagName("input")[0]),
        (t.style.cssText = "top:1px;float:left;opacity:.5"),
        (r.getSetAttribute = "t" !== u.className),
        (r.leadingWhitespace = 3 === u.firstChild.nodeType),
        (r.tbody = !u.getElementsByTagName("tbody").length),
        (r.htmlSerialize = !!u.getElementsByTagName("link").length),
        (r.style = /top/.test(t.getAttribute("style"))),
        (r.hrefNormalized = "/a" === t.getAttribute("href")),
        (r.opacity = /^0.5/.test(t.style.opacity)),
        (r.cssFloat = !!t.style.cssFloat),
        (r.checkOn = !!n.value),
        (r.optSelected = s.selected),
        (r.enctype = !!g.createElement("form").enctype),
        (r.html5Clone =
          "<:nav></:nav>" !== g.createElement("nav").cloneNode(!0).outerHTML),
        (r.inlineBlockNeedsLayout = !1),
        (r.shrinkWrapBlocks = !1),
        (r.pixelPosition = !1),
        (r.deleteExpando = !0),
        (r.noCloneEvent = !0),
        (r.reliableMarginRight = !0),
        (r.boxSizingReliable = !0),
        (n.checked = !0),
        (r.noCloneChecked = n.cloneNode(!0).checked),
        (i.disabled = !0),
        (r.optDisabled = !s.disabled);
      try {
        delete u.test;
      } catch (e) {
        r.deleteExpando = !1;
      }
      for (c in ((n = g.createElement("input")).setAttribute("value", ""),
      (r.input = "" === n.getAttribute("value")),
      (n.value = "t"),
      n.setAttribute("type", "radio"),
      (r.radioValue = "t" === n.value),
      n.setAttribute("checked", "t"),
      n.setAttribute("name", "t"),
      (o = g.createDocumentFragment()).appendChild(n),
      (r.appendChecked = n.checked),
      (r.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
      u.attachEvent &&
        (u.attachEvent("onclick", function () {
          r.noCloneEvent = !1;
        }),
        u.cloneNode(!0).click()),
      {
        submit: !0,
        change: !0,
        focusin: !0,
      }))
        u.setAttribute((a = "on" + c), "t"),
          (r[c + "Bubbles"] = a in h || !1 === u.attributes[a].expando);
      for (c in ((u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (r.clearCloneStyle = "content-box" === u.style.backgroundClip),
      ke(r)))
        break;
      return (
        (r.ownLast = "0" !== c),
        ke(function () {
          var e,
            t,
            n,
            i =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            o = g.getElementsByTagName("body")[0];
          o &&
            (((e = g.createElement("div")).style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            o.appendChild(e).appendChild(u),
            (u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            ((n = u.getElementsByTagName("td"))[0].style.cssText =
              "padding:0;margin:0;border:0;display:none"),
            (l = 0 === n[0].offsetHeight),
            (n[0].style.display = ""),
            (n[1].style.display = "none"),
            (r.reliableHiddenOffsets = l && 0 === n[0].offsetHeight),
            (u.innerHTML = ""),
            (u.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            ke.swap(
              o,
              null != o.style.zoom
                ? {
                    zoom: 1,
                  }
                : {},
              function () {
                r.boxSizing = 4 === u.offsetWidth;
              }
            ),
            h.getComputedStyle &&
              ((r.pixelPosition =
                "1%" !== (h.getComputedStyle(u, null) || {}).top),
              (r.boxSizingReliable =
                "4px" ===
                (
                  h.getComputedStyle(u, null) || {
                    width: "4px",
                  }
                ).width),
              ((t = u.appendChild(g.createElement("div"))).style.cssText =
                u.style.cssText =
                  i),
              (t.style.marginRight = t.style.width = "0"),
              (u.style.width = "1px"),
              (r.reliableMarginRight = !parseFloat(
                (h.getComputedStyle(t, null) || {}).marginRight
              ))),
            typeof u.style.zoom !== v &&
              ((u.innerHTML = ""),
              (u.style.cssText =
                i + "width:1px;padding:1px;display:inline;zoom:1"),
              (r.inlineBlockNeedsLayout = 3 === u.offsetWidth),
              (u.style.display = "block"),
              (u.innerHTML = "<div></div>"),
              (u.firstChild.style.width = "5px"),
              (r.shrinkWrapBlocks = 3 !== u.offsetWidth),
              r.inlineBlockNeedsLayout && (o.style.zoom = 1)),
            o.removeChild(e),
            (e = u = n = t = null));
        }),
        (e = i = o = s = t = n = null),
        r
      );
    })({}));
  var M = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g;
  function W(e, t, n, i) {
    if (ke.acceptData(e)) {
      var o,
        r,
        s = ke.expando,
        a = e.nodeType,
        l = a ? ke.cache : e,
        c = a ? e[s] : e[s] && s;
      if ((c && l[c] && (i || l[c].data)) || n !== C || "string" != typeof t)
        return (
          c || (c = a ? (e[s] = f.pop() || ke.guid++) : s),
          l[c] ||
            (l[c] = a
              ? {}
              : {
                  toJSON: ke.noop,
                }),
          ("object" == typeof t || "function" == typeof t) &&
            (i
              ? (l[c] = ke.extend(l[c], t))
              : (l[c].data = ke.extend(l[c].data, t))),
          (r = l[c]),
          i || (r.data || (r.data = {}), (r = r.data)),
          n !== C && (r[ke.camelCase(t)] = n),
          "string" == typeof t
            ? null == (o = r[t]) && (o = r[ke.camelCase(t)])
            : (o = r),
          o
        );
    }
  }
  function F(e, t, n) {
    if (ke.acceptData(e)) {
      var i,
        o,
        r = e.nodeType,
        s = r ? ke.cache : e,
        a = r ? e[ke.expando] : ke.expando;
      if (s[a]) {
        if (t && (i = n ? s[a] : s[a].data)) {
          o = (t = ke.isArray(t)
            ? t.concat(ke.map(t, ke.camelCase))
            : t in i
            ? [t]
            : (t = ke.camelCase(t)) in i
            ? [t]
            : t.split(" ")).length;
          for (; o--; ) delete i[t[o]];
          if (n ? !R(i) : !ke.isEmptyObject(i)) return;
        }
        (n || (delete s[a].data, R(s[a]))) &&
          (r
            ? ke.cleanData([e], !0)
            : ke.support.deleteExpando || s != s.window
            ? delete s[a]
            : (s[a] = null));
      }
    }
  }
  function q(e, t, n) {
    if (n === C && 1 === e.nodeType) {
      var i = "data-" + t.replace(I, "-$1").toLowerCase();
      if ("string" == typeof (n = e.getAttribute(i))) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : M.test(n)
                ? ke.parseJSON(n)
                : n));
        } catch (e) {}
        ke.data(e, t, n);
      } else n = C;
    }
    return n;
  }
  function R(e) {
    var t;
    for (t in e)
      if (("data" !== t || !ke.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  ke.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        !!(e = e.nodeType ? ke.cache[e[ke.expando]] : e[ke.expando]) && !R(e)
      );
    },
    data: function (e, t, n) {
      return W(e, t, n);
    },
    removeData: function (e, t) {
      return F(e, t);
    },
    _data: function (e, t, n) {
      return W(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return F(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && ke.noData[e.nodeName.toLowerCase()];
      return !t || (!0 !== t && e.getAttribute("classid") === t);
    },
  }),
    ke.fn.extend({
      data: function (e, t) {
        var n,
          i,
          o = null,
          r = 0,
          s = this[0];
        if (e !== C)
          return "object" == typeof e
            ? this.each(function () {
                ke.data(this, e);
              })
            : 1 < arguments.length
            ? this.each(function () {
                ke.data(this, e, t);
              })
            : s
            ? q(s, e, ke.data(s, e))
            : null;
        if (
          this.length &&
          ((o = ke.data(s)), 1 === s.nodeType && !ke._data(s, "parsedAttrs"))
        ) {
          for (n = s.attributes; n.length > r; r++)
            0 === (i = n[r].name).indexOf("data-") &&
              q(s, (i = ke.camelCase(i.slice(5))), o[i]);
          ke._data(s, "parsedAttrs", !0);
        }
        return o;
      },
      removeData: function (e) {
        return this.each(function () {
          ke.removeData(this, e);
        });
      },
    }),
    ke.extend({
      queue: function (e, t, n) {
        var i;
        return e
          ? ((t = (t || "fx") + "queue"),
            (i = ke._data(e, t)),
            n &&
              (!i || ke.isArray(n)
                ? (i = ke._data(e, t, ke.makeArray(n)))
                : i.push(n)),
            i || [])
          : C;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ke.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = ke._queueHooks(e, t);
        "inprogress" === o && ((o = n.shift()), i--),
          (r.cur = o) &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(
              e,
              function () {
                ke.dequeue(e, t);
              },
              r
            )),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ke._data(e, n) ||
          ke._data(e, n, {
            empty: ke.Callbacks("once memory").add(function () {
              ke._removeData(e, t + "queue"), ke._removeData(e, n);
            }),
          })
        );
      },
    }),
    ke.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          e > arguments.length
            ? ke.queue(this[0], t)
            : n === C
            ? this
            : this.each(function () {
                var e = ke.queue(this, t, n);
                ke._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ke.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ke.dequeue(this, e);
        });
      },
      delay: function (i, e) {
        return (
          (i = (ke.fx && ke.fx.speeds[i]) || i),
          (e = e || "fx"),
          this.queue(e, function (e, t) {
            var n = setTimeout(e, i);
            t.stop = function () {
              clearTimeout(n);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          o = ke.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r]);
          };
        for ("string" != typeof e && ((t = e), (e = C)), e = e || "fx"; s--; )
          (n = ke._data(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var z,
    B,
    $ = /[\t\r\n\f]/g,
    U = /\r/g,
    X = /^(?:input|select|textarea|button|object)$/i,
    Y = /^(?:a|area)$/i,
    J = /^(?:checked|selected)$/i,
    V = ke.support.getSetAttribute,
    Q = ke.support.input;
  ke.fn.extend({
    attr: function (e, t) {
      return ke.access(this, ke.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ke.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return ke.access(this, ke.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return (
        (e = ke.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = C), delete this[e];
          } catch (e) {}
        })
      );
    },
    addClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        s = 0,
        a = this.length,
        l = "string" == typeof t && t;
      if (ke.isFunction(t))
        return this.each(function (e) {
          ke(this).addClass(t.call(this, e, this.className));
        });
      if (l)
        for (e = (t || "").match(k) || []; s < a; s++)
          if (
            (i =
              1 === (n = this[s]).nodeType &&
              (n.className ? (" " + n.className + " ").replace($, " ") : " "))
          ) {
            for (r = 0; (o = e[r++]); )
              i.indexOf(" " + o + " ") < 0 && (i += o + " ");
            n.className = ke.trim(i);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        i,
        o,
        r,
        s = 0,
        a = this.length,
        l = 0 === arguments.length || ("string" == typeof t && t);
      if (ke.isFunction(t))
        return this.each(function (e) {
          ke(this).removeClass(t.call(this, e, this.className));
        });
      if (l)
        for (e = (t || "").match(k) || []; s < a; s++)
          if (
            (i =
              1 === (n = this[s]).nodeType &&
              (n.className ? (" " + n.className + " ").replace($, " ") : ""))
          ) {
            for (r = 0; (o = e[r++]); )
              for (; 0 <= i.indexOf(" " + o + " "); )
                i = i.replace(" " + o + " ", " ");
            n.className = t ? ke.trim(i) : "";
          }
      return this;
    },
    toggleClass: function (r, s) {
      var a = typeof r,
        l = "boolean" == typeof s;
      return ke.isFunction(r)
        ? this.each(function (e) {
            ke(this).toggleClass(r.call(this, e, this.className, s), s);
          })
        : this.each(function () {
            if ("string" === a)
              for (
                var e, t = 0, n = ke(this), i = s, o = r.match(k) || [];
                (e = o[t++]);

              )
                (i = l ? i : !n.hasClass(e)),
                  n[i ? "addClass" : "removeClass"](e);
            else
              (a === v || "boolean" === a) &&
                (this.className &&
                  ke._data(this, "__className__", this.className),
                (this.className =
                  this.className || !1 === r
                    ? ""
                    : ke._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace($, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
    val: function (n) {
      var e,
        i,
        o,
        t = this[0];
      return arguments.length
        ? ((o = ke.isFunction(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = o ? n.call(this, e, ke(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : ke.isArray(t) &&
                  (t = ke.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((i =
                ke.valHooks[this.type] ||
                ke.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in i &&
                i.set(this, t, "value") !== C) ||
                (this.value = t));
          }))
        : t
        ? (i = ke.valHooks[t.type] || ke.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in i &&
          (e = i.get(t, "value")) !== C
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(U, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    ke.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ke.find.attr(e, "value");
            return null != t ? t : e.text;
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                i = e.options,
                o = e.selectedIndex,
                r = "select-one" === e.type || o < 0,
                s = r ? null : [],
                a = r ? o + 1 : i.length,
                l = o < 0 ? a : r ? o : 0;
              l < a;
              l++
            )
              if (
                !(
                  (!(n = i[l]).selected && l !== o) ||
                  (ke.support.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    ke.nodeName(n.parentNode, "optgroup"))
                )
              ) {
                if (((t = ke(n).val()), r)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, i, o = e.options, r = ke.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected = 0 <= ke.inArray(ke(i).val(), r)) &&
                (n = !0);
            return n || (e.selectedIndex = -1), r;
          },
        },
      },
      attr: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return typeof e.getAttribute === v
            ? ke.prop(e, t, n)
            : ((1 === r && ke.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i = ke.attrHooks[t] || (ke.expr.match.bool.test(t) ? B : z))),
              n === C
                ? i && "get" in i && null !== (o = i.get(e, t))
                  ? o
                  : null == (o = ke.find.attr(e, t))
                  ? C
                  : o
                : null !== n
                ? i && "set" in i && (o = i.set(e, n, t)) !== C
                  ? o
                  : (e.setAttribute(t, n + ""), n)
                : (ke.removeAttr(e, t), C));
      },
      removeAttr: function (e, t) {
        var n,
          i,
          o = 0,
          r = t && t.match(k);
        if (r && 1 === e.nodeType)
          for (; (n = r[o++]); )
            (i = ke.propFix[n] || n),
              ke.expr.match.bool.test(n)
                ? (Q && V) || !J.test(n)
                  ? (e[i] = !1)
                  : (e[ke.camelCase("default-" + n)] = e[i] = !1)
                : ke.attr(e, n, ""),
              e.removeAttribute(V ? n : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !ke.support.radioValue &&
              "radio" === t &&
              ke.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
      prop: function (e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (e && 3 !== r && 8 !== r && 2 !== r)
          return (
            (1 !== r || !ke.isXMLDoc(e)) &&
              ((t = ke.propFix[t] || t), (o = ke.propHooks[t])),
            n !== C
              ? o && "set" in o && (i = o.set(e, n, t)) !== C
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ke.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : X.test(e.nodeName) || (Y.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    (B = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? ke.removeAttr(e, n)
            : (Q && V) || !J.test(n)
            ? e.setAttribute((!V && ke.propFix[n]) || n, n)
            : (e[ke.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    ke.each(ke.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var r = ke.expr.attrHandle[t] || ke.find.attr;
      ke.expr.attrHandle[t] =
        (Q && V) || !J.test(t)
          ? function (e, t, n) {
              var i = ke.expr.attrHandle[t],
                o = n
                  ? C
                  : (ke.expr.attrHandle[t] = C) != r(e, t, n)
                  ? t.toLowerCase()
                  : null;
              return (ke.expr.attrHandle[t] = i), o;
            }
          : function (e, t, n) {
              return n
                ? C
                : e[ke.camelCase("default-" + t)]
                ? t.toLowerCase()
                : null;
            };
    }),
    (Q && V) ||
      (ke.attrHooks.value = {
        set: function (e, t, n) {
          return ke.nodeName(e, "input")
            ? ((e.defaultValue = t), C)
            : z && z.set(e, t, n);
        },
      }),
    V ||
      ((z = {
        set: function (e, t, n) {
          var i = e.getAttributeNode(n);
          return (
            i || e.setAttributeNode((i = e.ownerDocument.createAttribute(n))),
            (i.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : C
          );
        },
      }),
      (ke.expr.attrHandle.id =
        ke.expr.attrHandle.name =
        ke.expr.attrHandle.coords =
          function (e, t, n) {
            var i;
            return n
              ? C
              : (i = e.getAttributeNode(t)) && "" !== i.value
              ? i.value
              : null;
          }),
      (ke.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : C;
        },
        set: z.set,
      }),
      (ke.attrHooks.contenteditable = {
        set: function (e, t, n) {
          z.set(e, "" !== t && t, n);
        },
      }),
      ke.each(["width", "height"], function (e, n) {
        ke.attrHooks[n] = {
          set: function (e, t) {
            return "" === t ? (e.setAttribute(n, "auto"), t) : C;
          },
        };
      })),
    ke.support.hrefNormalized ||
      ke.each(["href", "src"], function (e, t) {
        ke.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    ke.support.style ||
      (ke.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || C;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      }),
    ke.support.optSelected ||
      (ke.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      }),
    ke.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ke.propFix[this.toLowerCase()] = this;
      }
    ),
    ke.support.enctype || (ke.propFix.enctype = "encoding"),
    ke.each(["radio", "checkbox"], function () {
      (ke.valHooks[this] = {
        set: function (e, t) {
          return ke.isArray(t)
            ? (e.checked = 0 <= ke.inArray(ke(e).val(), t))
            : C;
        },
      }),
        ke.support.checkOn ||
          (ke.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var K = /^(?:input|select|textarea)$/i,
    G = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    ee = /^(?:focusinfocus|focusoutblur)$/,
    te = /^([^.]*)(?:\.(.+)|)$/;
  function ne() {
    return !0;
  }
  function ie() {
    return !1;
  }
  function oe() {
    try {
      return g.activeElement;
    } catch (e) {}
  }
  (ke.event = {
    global: {},
    add: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        g,
        m = ke._data(e);
      if (m) {
        for (
          n.handler && ((n = (l = n).handler), (o = l.selector)),
            n.guid || (n.guid = ke.guid++),
            (s = m.events) || (s = m.events = {}),
            (u = m.handle) ||
              ((u = m.handle =
                function (e) {
                  return typeof ke === v || (e && ke.event.triggered === e.type)
                    ? C
                    : ke.event.dispatch.apply(u.elem, arguments);
                }).elem = e),
            a = (t = (t || "").match(k) || [""]).length;
          a--;

        )
          (p = g = (r = te.exec(t[a]) || [])[1]),
            (h = (r[2] || "").split(".").sort()),
            p &&
              ((c = ke.event.special[p] || {}),
              (p = (o ? c.delegateType : c.bindType) || p),
              (c = ke.event.special[p] || {}),
              (f = ke.extend(
                {
                  type: p,
                  origType: g,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && ke.expr.match.needsContext.test(o),
                  namespace: h.join("."),
                },
                l
              )),
              (d = s[p]) ||
                (((d = s[p] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(e, i, h, u)) ||
                  (e.addEventListener
                    ? e.addEventListener(p, u, !1)
                    : e.attachEvent && e.attachEvent("on" + p, u))),
              c.add &&
                (c.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)),
              o ? d.splice(d.delegateCount++, 0, f) : d.push(f),
              (ke.event.global[p] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        u,
        f,
        d,
        p,
        h,
        g,
        m = ke.hasData(e) && ke._data(e);
      if (m && (u = m.events)) {
        for (c = (t = (t || "").match(k) || [""]).length; c--; )
          if (
            ((p = g = (a = te.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              f = ke.event.special[p] || {},
                d = u[(p = (i ? f.delegateType : f.bindType) || p)] || [],
                a =
                  a[2] &&
                  RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                l = r = d.length;
              r--;

            )
              (s = d[r]),
                (!o && g !== s.origType) ||
                  (n && n.guid !== s.guid) ||
                  (a && !a.test(s.namespace)) ||
                  (i && i !== s.selector && ("**" !== i || !s.selector)) ||
                  (d.splice(r, 1),
                  s.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, s));
            l &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                ke.removeEvent(e, p, m.handle),
              delete u[p]);
          } else for (p in u) ke.event.remove(e, p + t[c], n, i, !0);
        ke.isEmptyObject(u) && (delete m.handle, ke._removeData(e, "events"));
      }
    },
    trigger: function (e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        c,
        u,
        f = [n || g],
        d = y.call(e, "type") ? e.type : e,
        p = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((s = c = n = n || g),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !ee.test(d + ke.event.triggered) &&
          (0 <= d.indexOf(".") && ((d = (p = d.split(".")).shift()), p.sort()),
          (r = d.indexOf(":") < 0 && "on" + d),
          ((e = e[ke.expando]
            ? e
            : new ke.Event(d, "object" == typeof e && e)).isTrigger = i
            ? 2
            : 3),
          (e.namespace = p.join(".")),
          (e.namespace_re = e.namespace
            ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = C),
          e.target || (e.target = n),
          (t = null == t ? [e] : ke.makeArray(t, [e])),
          (l = ke.event.special[d] || {}),
          i || !l.trigger || !1 !== l.trigger.apply(n, t)))
      ) {
        if (!i && !l.noBubble && !ke.isWindow(n)) {
          for (
            a = l.delegateType || d, ee.test(a + d) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (c = s);
          c === (n.ownerDocument || g) &&
            f.push(c.defaultView || c.parentWindow || h);
        }
        for (u = 0; (s = f[u++]) && !e.isPropagationStopped(); )
          (e.type = 1 < u ? a : l.bindType || d),
            (o =
              (ke._data(s, "events") || {})[e.type] && ke._data(s, "handle")) &&
              o.apply(s, t),
            (o = r && s[r]) &&
              ke.acceptData(s) &&
              o.apply &&
              !1 === o.apply(s, t) &&
              e.preventDefault();
        if (
          ((e.type = d),
          !i &&
            !e.isDefaultPrevented() &&
            (!l._default || !1 === l._default.apply(f.pop(), t)) &&
            ke.acceptData(n) &&
            r &&
            n[d] &&
            !ke.isWindow(n))
        ) {
          (c = n[r]) && (n[r] = null), (ke.event.triggered = d);
          try {
            n[d]();
          } catch (e) {}
          (ke.event.triggered = C), c && (n[r] = c);
        }
        return e.result;
      }
    },
    dispatch: function (e) {
      e = ke.event.fix(e);
      var t,
        n,
        i,
        o,
        r,
        s = [],
        a = u.call(arguments),
        l = (ke._data(this, "events") || {})[e.type] || [],
        c = ke.event.special[e.type] || {};
      if (
        (((a[0] = e).delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          s = ke.event.handlers.call(this, e, l), t = 0;
          (o = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, r = 0;
            (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
              ((e.handleObj = i),
              (e.data = i.data),
              (n = (
                (ke.event.special[i.origType] || {}).handle || i.handler
              ).apply(o.elem, a)) !== C &&
                !1 === (e.result = n) &&
                (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        o,
        r,
        s = [],
        a = t.delegateCount,
        l = e.target;
      if (a && l.nodeType && (!e.button || "click" !== e.type))
        for (; l != this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
            for (o = [], r = 0; r < a; r++)
              o[(n = (i = t[r]).selector + " ")] === C &&
                (o[n] = i.needsContext
                  ? 0 <= ke(n, this).index(l)
                  : ke.find(n, this, null, [l]).length),
                o[n] && o.push(i);
            o.length &&
              s.push({
                elem: l,
                handlers: o,
              });
          }
      return (
        t.length > a &&
          s.push({
            elem: this,
            handlers: t.slice(a),
          }),
        s
      );
    },
    fix: function (e) {
      if (e[ke.expando]) return e;
      var t,
        n,
        i,
        o = e.type,
        r = e,
        s = this.fixHooks[o];
      for (
        s ||
          (this.fixHooks[o] = s =
            Z.test(o) ? this.mouseHooks : G.test(o) ? this.keyHooks : {}),
          i = s.props ? this.props.concat(s.props) : this.props,
          e = new ke.Event(r),
          t = i.length;
        t--;

      )
        e[(n = i[t])] = r[n];
      return (
        e.target || (e.target = r.srcElement || g),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        s.filter ? s.filter(e, r) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          i,
          o,
          r = t.button,
          s = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((o = (i = e.target.ownerDocument || g).documentElement),
            (n = i.body),
            (e.pageX =
              t.clientX +
              ((o && o.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((o && o.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((o && o.scrollTop) || (n && n.scrollTop) || 0) -
              ((o && o.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            s &&
            (e.relatedTarget = s === e.target ? t.toElement : s),
          e.which ||
            r === C ||
            (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          if (this !== oe() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === oe() && this.blur ? (this.blur(), !1) : C;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return ke.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : C;
        },
        _default: function (e) {
          return ke.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== C && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, i) {
      var o = ke.extend(new ke.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      i ? ke.event.trigger(o, null, t) : ke.event.dispatch.call(t, o),
        o.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (ke.removeEvent = g.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var i = "on" + t;
          e.detachEvent &&
            (typeof e[i] === v && (e[i] = null), e.detachEvent(i, n));
        }),
    (ke.Event = function (e, t) {
      return this instanceof ke.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                !1 === e.returnValue ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? ne
                  : ie))
            : (this.type = e),
          t && ke.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || ke.now()),
          (this[ke.expando] = !0),
          C)
        : new ke.Event(e, t);
    }),
    (ke.Event.prototype = {
      isDefaultPrevented: ie,
      isPropagationStopped: ie,
      isImmediatePropagationStopped: ie,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = ne),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = ne),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = ne), this.stopPropagation();
      },
    }),
    ke.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      },
      function (e, o) {
        ke.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              i = e.handleObj;
            return (
              (!n || (n !== this && !ke.contains(this, n))) &&
                ((e.type = i.origType),
                (t = i.handler.apply(this, arguments)),
                (e.type = o)),
              t
            );
          },
        };
      }
    ),
    ke.support.submitBubbles ||
      (ke.event.special.submit = {
        setup: function () {
          return (
            !ke.nodeName(this, "form") &&
            (ke.event.add(this, "click._submit keypress._submit", function (e) {
              var t = e.target,
                n =
                  ke.nodeName(t, "input") || ke.nodeName(t, "button")
                    ? t.form
                    : C;
              n &&
                !ke._data(n, "submitBubbles") &&
                (ke.event.add(n, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                ke._data(n, "submitBubbles", !0));
            }),
            C)
          );
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              ke.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return (
            !ke.nodeName(this, "form") && (ke.event.remove(this, "._submit"), C)
          );
        },
      }),
    ke.support.changeBubbles ||
      (ke.event.special.change = {
        setup: function () {
          return K.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ke.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ke.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    ke.event.simulate("change", this, e, !0);
                })),
              !1)
            : (ke.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                K.test(t.nodeName) &&
                  !ke._data(t, "changeBubbles") &&
                  (ke.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ke.event.simulate("change", this.parentNode, e, !0);
                  }),
                  ke._data(t, "changeBubbles", !0));
              }),
              C);
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : C;
        },
        teardown: function () {
          return ke.event.remove(this, "._change"), !K.test(this.nodeName);
        },
      }),
    ke.support.focusinBubbles ||
      ke.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (e, t) {
          var n = 0,
            i = function (e) {
              ke.event.simulate(t, e.target, ke.event.fix(e), !0);
            };
          ke.event.special[t] = {
            setup: function () {
              0 == n++ && g.addEventListener(e, i, !0);
            },
            teardown: function () {
              0 == --n && g.removeEventListener(e, i, !0);
            },
          };
        }
      ),
    ke.fn.extend({
      on: function (e, t, n, i, o) {
        var r, s;
        if ("object" == typeof e) {
          for (r in ("string" != typeof t && ((n = n || t), (t = C)), e))
            this.on(r, t, n, e[r], o);
          return this;
        }
        if (
          (null == n && null == i
            ? ((i = t), (n = t = C))
            : null == i &&
              ("string" == typeof t
                ? ((i = n), (n = C))
                : ((i = n), (n = t), (t = C))),
          !1 === i)
        )
          i = ie;
        else if (!i) return this;
        return (
          1 === o &&
            ((s = i),
            ((i = function (e) {
              return ke().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = ke.guid++))),
          this.each(function () {
            ke.event.add(this, e, i, n, t);
          })
        );
      },
      one: function (e, t, n, i) {
        return this.on(e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            ke(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 === t || "function" == typeof t) && ((n = t), (t = C)),
            !1 === n && (n = ie),
            this.each(function () {
              ke.event.remove(this, e, n, t);
            })
          );
        for (o in e) this.off(o, t, e[o]);
        return this;
      },
      trigger: function (e, t) {
        return this.each(function () {
          ke.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? ke.event.trigger(e, t, n, !0) : C;
      },
    });
  var re = /^.[^:#\[\.,]*$/,
    se = /^(?:parents|prev(?:Until|All))/,
    ae = ke.expr.match.needsContext,
    le = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  function ce(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function ue(e, n, i) {
    if (ke.isFunction(n))
      return ke.grep(e, function (e, t) {
        return !!n.call(e, t, e) !== i;
      });
    if (n.nodeType)
      return ke.grep(e, function (e) {
        return (e === n) !== i;
      });
    if ("string" == typeof n) {
      if (re.test(n)) return ke.filter(n, e, i);
      n = ke.filter(n, e);
    }
    return ke.grep(e, function (e) {
      return 0 <= ke.inArray(e, n) !== i;
    });
  }
  function fe(e) {
    var t = de.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  ke.fn.extend({
    find: function (e) {
      var t,
        n = [],
        i = this,
        o = i.length;
      if ("string" != typeof e)
        return this.pushStack(
          ke(e).filter(function () {
            for (t = 0; t < o; t++) if (ke.contains(i[t], this)) return !0;
          })
        );
      for (t = 0; t < o; t++) ke.find(e, i[t], n);
      return (
        ((n = this.pushStack(1 < o ? ke.unique(n) : n)).selector = this.selector
          ? this.selector + " " + e
          : e),
        n
      );
    },
    has: function (e) {
      var t,
        n = ke(e, this),
        i = n.length;
      return this.filter(function () {
        for (t = 0; t < i; t++) if (ke.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(ue(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(ue(this, e || [], !1));
    },
    is: function (e) {
      return !!ue(
        this,
        "string" == typeof e && ae.test(e) ? ke(e) : e || [],
        !1
      ).length;
    },
    closest: function (e, t) {
      for (
        var n,
          i = 0,
          o = this.length,
          r = [],
          s = ae.test(e) || "string" != typeof e ? ke(e, t || this.context) : 0;
        i < o;
        i++
      )
        for (n = this[i]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (s
              ? -1 < s.index(n)
              : 1 === n.nodeType && ke.find.matchesSelector(n, e))
          ) {
            n = r.push(n);
            break;
          }
      return this.pushStack(1 < r.length ? ke.unique(r) : r);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ke.inArray(this[0], ke(e))
          : ke.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? ke(e, t)
            : ke.makeArray(e && e.nodeType ? [e] : e),
        i = ke.merge(this.get(), n);
      return this.pushStack(ke.unique(i));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    ke.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ke.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ke.dir(e, "parentNode", n);
        },
        next: function (e) {
          return ce(e, "nextSibling");
        },
        prev: function (e) {
          return ce(e, "previousSibling");
        },
        nextAll: function (e) {
          return ke.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ke.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ke.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ke.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ke.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ke.sibling(e.firstChild);
        },
        contents: function (e) {
          return ke.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ke.merge([], e.childNodes);
        },
      },
      function (i, o) {
        ke.fn[i] = function (e, t) {
          var n = ke.map(this, o, e);
          return (
            "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = ke.filter(t, n)),
            1 < this.length &&
              (le[i] || (n = ke.unique(n)), se.test(i) && (n = n.reverse())),
            this.pushStack(n)
          );
        };
      }
    ),
    ke.extend({
      filter: function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? ke.find.matchesSelector(i, e)
              ? [i]
              : []
            : ke.find.matches(
                e,
                ke.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      },
      dir: function (e, t, n) {
        for (
          var i = [], o = e[t];
          o &&
          9 !== o.nodeType &&
          (n === C || 1 !== o.nodeType || !ke(o).is(n));

        )
          1 === o.nodeType && i.push(o), (o = o[t]);
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var de =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    pe = / jQuery\d+="(?:null|\d+)"/g,
    he = RegExp("<(?:" + de + ")[\\s/>]", "i"),
    ge = /^\s+/,
    me =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ve = /<([\w:]+)/,
    ye = /<tbody/i,
    be = /<|&#?\w+;/,
    xe = /<(?:script|style|link)/i,
    _e = /^(?:checkbox|radio)$/i,
    we = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ce = /^$|\/(?:java|ecma)script/i,
    Te = /^true\/(.*)/,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Ee = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ke.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    Se = fe(g).appendChild(g.createElement("div"));
  function De(e, t) {
    return ke.nodeName(e, "table") &&
      ke.nodeName(1 === t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function Pe(e) {
    return (e.type = (null !== ke.find.attr(e, "type")) + "/" + e.type), e;
  }
  function Ae(e) {
    var t = Te.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function Le(e, t) {
    for (var n, i = 0; null != (n = e[i]); i++)
      ke._data(n, "globalEval", !t || ke._data(t[i], "globalEval"));
  }
  function je(e, t) {
    if (1 === t.nodeType && ke.hasData(e)) {
      var n,
        i,
        o,
        r = ke._data(e),
        s = ke._data(t, r),
        a = r.events;
      if (a)
        for (n in (delete s.handle, (s.events = {}), a))
          for (i = 0, o = a[n].length; i < o; i++) ke.event.add(t, n, a[n][i]);
      s.data && (s.data = ke.extend({}, s.data));
    }
  }
  function He(e, t) {
    var n, i, o;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !ke.support.noCloneEvent && t[ke.expando])
      ) {
        for (i in (o = ke._data(t)).events) ke.removeEvent(t, i, o.handle);
        t.removeAttribute(ke.expando);
      }
      "script" === n && t.text !== e.text
        ? ((Pe(t).text = e.text), Ae(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ke.support.html5Clone &&
            e.innerHTML &&
            !ke.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && _e.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function Oe(e, t) {
    var n,
      i,
      o = 0,
      r =
        typeof e.getElementsByTagName !== v
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== v
          ? e.querySelectorAll(t || "*")
          : C;
    if (!r)
      for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)
        !t || ke.nodeName(i, t) ? r.push(i) : ke.merge(r, Oe(i, t));
    return t === C || (t && ke.nodeName(e, t)) ? ke.merge([e], r) : r;
  }
  function Me(e) {
    _e.test(e.type) && (e.defaultChecked = e.checked);
  }
  (Ee.optgroup = Ee.option),
    (Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead),
    (Ee.th = Ee.td),
    ke.fn.extend({
      text: function (e) {
        return ke.access(
          this,
          function (e) {
            return e === C
              ? ke.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || g).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = De(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, i = e ? ke.filter(e, this) : this, o = 0;
          null != (n = i[o]);
          o++
        )
          t || 1 !== n.nodeType || ke.cleanData(Oe(n)),
            n.parentNode &&
              (t && ke.contains(n.ownerDocument, n) && Le(Oe(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ke.cleanData(Oe(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && ke.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return ke.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ke.access(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (e === C)
              return 1 === t.nodeType ? t.innerHTML.replace(pe, "") : C;
            if (
              !(
                "string" != typeof e ||
                xe.test(e) ||
                (!ke.support.htmlSerialize && he.test(e)) ||
                (!ke.support.leadingWhitespace && ge.test(e)) ||
                Ee[(ve.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(me, "<$1></$2>");
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (ke.cleanData(Oe(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var i = ke.map(this, function (e) {
            return [e.nextSibling, e.parentNode];
          }),
          o = 0;
        return (
          this.domManip(
            arguments,
            function (e) {
              var t = i[o++],
                n = i[o++];
              n &&
                (t && t.parentNode !== n && (t = this.nextSibling),
                ke(this).remove(),
                n.insertBefore(e, t));
            },
            !0
          ),
          o ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, i, o) {
        n = m.apply([], n);
        var e,
          t,
          r,
          s,
          a,
          l,
          c = 0,
          u = this.length,
          f = this,
          d = u - 1,
          p = n[0],
          h = ke.isFunction(p);
        if (
          h ||
          (!(u <= 1 || "string" != typeof p || ke.support.checkClone) &&
            we.test(p))
        )
          return this.each(function (e) {
            var t = f.eq(e);
            h && (n[0] = p.call(this, e, t.html())), t.domManip(n, i, o);
          });
        if (
          u &&
          ((e = (l = ke.buildFragment(n, this[0].ownerDocument, !1, !o && this))
            .firstChild),
          1 === l.childNodes.length && (l = e),
          e)
        ) {
          for (r = (s = ke.map(Oe(l, "script"), Pe)).length; c < u; c++)
            (t = l),
              c !== d &&
                ((t = ke.clone(t, !0, !0)), r && ke.merge(s, Oe(t, "script"))),
              i.call(this[c], t, c);
          if (r)
            for (
              a = s[s.length - 1].ownerDocument, ke.map(s, Ae), c = 0;
              c < r;
              c++
            )
              (t = s[c]),
                Ce.test(t.type || "") &&
                  !ke._data(t, "globalEval") &&
                  ke.contains(a, t) &&
                  (t.src
                    ? ke._evalUrl(t.src)
                    : ke.globalEval(
                        (t.text || t.textContent || t.innerHTML || "").replace(
                          Ne,
                          ""
                        )
                      ));
          l = e = null;
        }
        return this;
      },
    }),
    ke.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, s) {
        ke.fn[e] = function (e) {
          for (var t, n = 0, i = [], o = ke(e), r = o.length - 1; n <= r; n++)
            (t = n === r ? this : this.clone(!0)),
              ke(o[n])[s](t),
              l.apply(i, t.get());
          return this.pushStack(i);
        };
      }
    ),
    ke.extend({
      clone: function (e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = ke.contains(e.ownerDocument, e);
        if (
          (ke.support.html5Clone ||
          ke.isXMLDoc(e) ||
          !he.test("<" + e.nodeName + ">")
            ? (r = e.cloneNode(!0))
            : ((Se.innerHTML = e.outerHTML),
              Se.removeChild((r = Se.firstChild))),
          !(
            (ke.support.noCloneEvent && ke.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ke.isXMLDoc(e)
          ))
        )
          for (i = Oe(r), a = Oe(e), s = 0; null != (o = a[s]); ++s)
            i[s] && He(o, i[s]);
        if (t)
          if (n)
            for (a = a || Oe(e), i = i || Oe(r), s = 0; null != (o = a[s]); s++)
              je(o, i[s]);
          else je(e, r);
        return (
          0 < (i = Oe(r, "script")).length && Le(i, !l && Oe(e, "script")),
          (i = a = o = null),
          r
        );
      },
      buildFragment: function (e, t, n, i) {
        for (
          var o, r, s, a, l, c, u, f = e.length, d = fe(t), p = [], h = 0;
          h < f;
          h++
        )
          if ((r = e[h]) || 0 === r)
            if ("object" === ke.type(r)) ke.merge(p, r.nodeType ? [r] : r);
            else if (be.test(r)) {
              for (
                a = a || d.appendChild(t.createElement("div")),
                  l = (ve.exec(r) || ["", ""])[1].toLowerCase(),
                  u = Ee[l] || Ee._default,
                  a.innerHTML = u[1] + r.replace(me, "<$1></$2>") + u[2],
                  o = u[0];
                o--;

              )
                a = a.lastChild;
              if (
                (!ke.support.leadingWhitespace &&
                  ge.test(r) &&
                  p.push(t.createTextNode(ge.exec(r)[0])),
                !ke.support.tbody)
              )
                for (
                  o =
                    (r =
                      "table" !== l || ye.test(r)
                        ? "<table>" !== u[1] || ye.test(r)
                          ? 0
                          : a
                        : a.firstChild) && r.childNodes.length;
                  o--;

                )
                  ke.nodeName((c = r.childNodes[o]), "tbody") &&
                    !c.childNodes.length &&
                    r.removeChild(c);
              for (
                ke.merge(p, a.childNodes), a.textContent = "";
                a.firstChild;

              )
                a.removeChild(a.firstChild);
              a = d.lastChild;
            } else p.push(t.createTextNode(r));
        for (
          a && d.removeChild(a),
            ke.support.appendChecked || ke.grep(Oe(p, "input"), Me),
            h = 0;
          (r = p[h++]);

        )
          if (
            (!i || -1 === ke.inArray(r, i)) &&
            ((s = ke.contains(r.ownerDocument, r)),
            (a = Oe(d.appendChild(r), "script")),
            s && Le(a),
            n)
          )
            for (o = 0; (r = a[o++]); ) Ce.test(r.type || "") && n.push(r);
        return (a = null), d;
      },
      cleanData: function (e, t) {
        for (
          var n,
            i,
            o,
            r,
            s = 0,
            a = ke.expando,
            l = ke.cache,
            c = ke.support.deleteExpando,
            u = ke.event.special;
          null != (n = e[s]);
          s++
        )
          if ((t || ke.acceptData(n)) && (r = (o = n[a]) && l[o])) {
            if (r.events)
              for (i in r.events)
                u[i] ? ke.event.remove(n, i) : ke.removeEvent(n, i, r.handle);
            l[o] &&
              (delete l[o],
              c
                ? delete n[a]
                : typeof n.removeAttribute !== v
                ? n.removeAttribute(a)
                : (n[a] = null),
              f.push(o));
          }
      },
      _evalUrl: function (e) {
        return ke.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      },
    }),
    ke.fn.extend({
      wrapAll: function (t) {
        if (ke.isFunction(t))
          return this.each(function (e) {
            ke(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = ke(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (n) {
        return ke.isFunction(n)
          ? this.each(function (e) {
              ke(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = ke(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = ke.isFunction(t);
        return this.each(function (e) {
          ke(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ke.nodeName(this, "body") || ke(this).replaceWith(this.childNodes);
          })
          .end();
      },
    });
  var Ie,
    We,
    Fe,
    qe = /alpha\([^)]*\)/i,
    Re = /opacity\s*=\s*([^)]*)/,
    ze = /^(top|right|bottom|left)$/,
    Be = /^(none|table(?!-c[ea]).+)/,
    $e = /^margin/,
    Ue = RegExp("^(" + b + ")(.*)$", "i"),
    Xe = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
    Ye = RegExp("^([+-])=(" + b + ")", "i"),
    Je = {
      BODY: "block",
    },
    Ve = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    Qe = {
      letterSpacing: 0,
      fontWeight: 400,
    },
    Ke = ["Top", "Right", "Bottom", "Left"],
    Ge = ["Webkit", "O", "Moz", "ms"];
  function Ze(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Ge.length;
      o--;

    )
      if ((t = Ge[o] + n) in e) return t;
    return i;
  }
  function et(e, t) {
    return (
      (e = t || e),
      "none" === ke.css(e, "display") || !ke.contains(e.ownerDocument, e)
    );
  }
  function tt(e, t) {
    for (var n, i, o, r = [], s = 0, a = e.length; s < a; s++)
      (i = e[s]).style &&
        ((r[s] = ke._data(i, "olddisplay")),
        (n = i.style.display),
        t
          ? (r[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display &&
              et(i) &&
              (r[s] = ke._data(i, "olddisplay", rt(i.nodeName))))
          : r[s] ||
            ((o = et(i)),
            ((n && "none" !== n) || !o) &&
              ke._data(i, "olddisplay", o ? n : ke.css(i, "display"))));
    for (s = 0; s < a; s++)
      (i = e[s]).style &&
        ((t && "none" !== i.style.display && "" !== i.style.display) ||
          (i.style.display = t ? r[s] || "" : "none"));
    return e;
  }
  function nt(e, t, n) {
    var i = Ue.exec(t);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t;
  }
  function it(e, t, n, i, o) {
    for (
      var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      r < 4;
      r += 2
    )
      "margin" === n && (s += ke.css(e, n + Ke[r], !0, o)),
        i
          ? ("content" === n && (s -= ke.css(e, "padding" + Ke[r], !0, o)),
            "margin" !== n &&
              (s -= ke.css(e, "border" + Ke[r] + "Width", !0, o)))
          : ((s += ke.css(e, "padding" + Ke[r], !0, o)),
            "padding" !== n &&
              (s += ke.css(e, "border" + Ke[r] + "Width", !0, o)));
    return s;
  }
  function ot(e, t, n) {
    var i = !0,
      o = "width" === t ? e.offsetWidth : e.offsetHeight,
      r = We(e),
      s =
        ke.support.boxSizing && "border-box" === ke.css(e, "boxSizing", !1, r);
    if (o <= 0 || null == o) {
      if (
        (((o = Fe(e, t, r)) < 0 || null == o) && (o = e.style[t]), Xe.test(o))
      )
        return o;
      (i = s && (ke.support.boxSizingReliable || o === e.style[t])),
        (o = parseFloat(o) || 0);
    }
    return o + it(e, t, n || (s ? "border" : "content"), i, r) + "px";
  }
  function rt(e) {
    var t = g,
      n = Je[e];
    return (
      n ||
        (("none" !== (n = st(e, t)) && n) ||
          ((t = (
            (Ie = (
              Ie ||
              ke("<iframe frameborder='0' width='0' height='0'/>").css(
                "cssText",
                "display:block !important"
              )
            ).appendTo(t.documentElement))[0].contentWindow ||
            Ie[0].contentDocument
          ).document).write("<!doctype html><html><body>"),
          t.close(),
          (n = st(e, t)),
          Ie.detach()),
        (Je[e] = n)),
      n
    );
  }
  function st(e, t) {
    var n = ke(t.createElement(e)).appendTo(t.body),
      i = ke.css(n[0], "display");
    return n.remove(), i;
  }
  ke.fn.extend({
    css: function (e, t) {
      return ke.access(
        this,
        function (e, t, n) {
          var i,
            o,
            r = {},
            s = 0;
          if (ke.isArray(t)) {
            for (o = We(e), i = t.length; s < i; s++)
              r[t[s]] = ke.css(e, t[s], !1, o);
            return r;
          }
          return n !== C ? ke.style(e, t, n) : ke.css(e, t);
        },
        e,
        t,
        1 < arguments.length
      );
    },
    show: function () {
      return tt(this, !0);
    },
    hide: function () {
      return tt(this);
    },
    toggle: function (e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : et(this)) ? ke(this).show() : ke(this).hide();
      });
    },
  }),
    ke.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Fe(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: ke.support.cssFloat ? "cssFloat" : "styleFloat",
      },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            s,
            a = ke.camelCase(t),
            l = e.style;
          if (
            ((t = ke.cssProps[a] || (ke.cssProps[a] = Ze(l, a))),
            (s = ke.cssHooks[t] || ke.cssHooks[a]),
            n === C)
          )
            return s && "get" in s && (o = s.get(e, !1, i)) !== C ? o : l[t];
          if (
            ("string" === (r = typeof n) &&
              (o = Ye.exec(n)) &&
              ((n = (o[1] + 1) * o[2] + parseFloat(ke.css(e, t))),
              (r = "number")),
            !(
              null == n ||
              ("number" === r && isNaN(n)) ||
              ("number" !== r || ke.cssNumber[a] || (n += "px"),
              ke.support.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (l[t] = "inherit"),
              s && "set" in s && (n = s.set(e, n, i)) === C)
            ))
          )
            try {
              l[t] = n;
            } catch (e) {}
        }
      },
      css: function (e, t, n, i) {
        var o,
          r,
          s,
          a = ke.camelCase(t);
        return (
          (t = ke.cssProps[a] || (ke.cssProps[a] = Ze(e.style, a))),
          (s = ke.cssHooks[t] || ke.cssHooks[a]) &&
            "get" in s &&
            (r = s.get(e, !0, n)),
          r === C && (r = Fe(e, t, i)),
          "normal" === r && t in Qe && (r = Qe[t]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || ke.isNumeric(o) ? o || 0 : r)
            : r
        );
      },
    }),
    h.getComputedStyle
      ? ((We = function (e) {
          return h.getComputedStyle(e, null);
        }),
        (Fe = function (e, t, n) {
          var i,
            o,
            r,
            s = n || We(e),
            a = s ? s.getPropertyValue(t) || s[t] : C,
            l = e.style;
          return (
            s &&
              ("" !== a ||
                ke.contains(e.ownerDocument, e) ||
                (a = ke.style(e, t)),
              Xe.test(a) &&
                $e.test(t) &&
                ((i = l.width),
                (o = l.minWidth),
                (r = l.maxWidth),
                (l.minWidth = l.maxWidth = l.width = a),
                (a = s.width),
                (l.width = i),
                (l.minWidth = o),
                (l.maxWidth = r))),
            a
          );
        }))
      : g.documentElement.currentStyle &&
        ((We = function (e) {
          return e.currentStyle;
        }),
        (Fe = function (e, t, n) {
          var i,
            o,
            r,
            s = n || We(e),
            a = s ? s[t] : C,
            l = e.style;
          return (
            null == a && l && l[t] && (a = l[t]),
            Xe.test(a) &&
              !ze.test(t) &&
              ((i = l.left),
              (r = (o = e.runtimeStyle) && o.left) &&
                (o.left = e.currentStyle.left),
              (l.left = "fontSize" === t ? "1em" : a),
              (a = l.pixelLeft + "px"),
              (l.left = i),
              r && (o.left = r)),
            "" === a ? "auto" : a
          );
        })),
    ke.each(["height", "width"], function (e, o) {
      ke.cssHooks[o] = {
        get: function (e, t, n) {
          return t
            ? 0 === e.offsetWidth && Be.test(ke.css(e, "display"))
              ? ke.swap(e, Ve, function () {
                  return ot(e, o, n);
                })
              : ot(e, o, n)
            : C;
        },
        set: function (e, t, n) {
          var i = n && We(e);
          return nt(
            0,
            t,
            n
              ? it(
                  e,
                  o,
                  n,
                  ke.support.boxSizing &&
                    "border-box" === ke.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    ke.support.opacity ||
      (ke.cssHooks.opacity = {
        get: function (e, t) {
          return Re.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            i = e.currentStyle,
            o = ke.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            r = (i && i.filter) || n.filter || "";
          (((n.zoom = 1) <= t || "" === t) &&
            "" === ke.trim(r.replace(qe, "")) &&
            n.removeAttribute &&
            (n.removeAttribute("filter"), "" === t || (i && !i.filter))) ||
            (n.filter = qe.test(r) ? r.replace(qe, o) : r + " " + o);
        },
      }),
    ke(function () {
      ke.support.reliableMarginRight ||
        (ke.cssHooks.marginRight = {
          get: function (e, t) {
            return t
              ? ke.swap(
                  e,
                  {
                    display: "inline-block",
                  },
                  Fe,
                  [e, "marginRight"]
                )
              : C;
          },
        }),
        !ke.support.pixelPosition &&
          ke.fn.position &&
          ke.each(["top", "left"], function (e, n) {
            ke.cssHooks[n] = {
              get: function (e, t) {
                return t
                  ? ((t = Fe(e, n)),
                    Xe.test(t) ? ke(e).position()[n] + "px" : t)
                  : C;
              },
            };
          });
    }),
    ke.expr &&
      ke.expr.filters &&
      ((ke.expr.filters.hidden = function (e) {
        return (
          (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
          (!ke.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || ke.css(e, "display")))
        );
      }),
      (ke.expr.filters.visible = function (e) {
        return !ke.expr.filters.hidden(e);
      })),
    ke.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (o, r) {
        (ke.cssHooks[o + r] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[o + Ke[t] + r] = i[t] || i[t - 2] || i[0];
            return n;
          },
        }),
          $e.test(o) || (ke.cssHooks[o + r].set = nt);
      }
    );
  var at = /%20/g,
    lt = /\[\]$/,
    ct = /\r?\n/g,
    ut = /^(?:submit|button|image|reset|file)$/i,
    ft = /^(?:input|select|textarea|keygen)/i;
  function dt(n, e, i, o) {
    var t;
    if (ke.isArray(e))
      ke.each(e, function (e, t) {
        i || lt.test(n)
          ? o(n, t)
          : dt(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, o);
      });
    else if (i || "object" !== ke.type(e)) o(n, e);
    else for (t in e) dt(n + "[" + t + "]", e[t], i, o);
  }
  ke.fn.extend({
    serialize: function () {
      return ke.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ke.prop(this, "elements");
        return e ? ke.makeArray(e) : this;
      })
        .filter(function () {
          var e = this.type;
          return (
            this.name &&
            !ke(this).is(":disabled") &&
            ft.test(this.nodeName) &&
            !ut.test(e) &&
            (this.checked || !_e.test(e))
          );
        })
        .map(function (e, t) {
          var n = ke(this).val();
          return null == n
            ? null
            : ke.isArray(n)
            ? ke.map(n, function (e) {
                return {
                  name: t.name,
                  value: e.replace(ct, "\r\n"),
                };
              })
            : {
                name: t.name,
                value: n.replace(ct, "\r\n"),
              };
        })
        .get();
    },
  }),
    (ke.param = function (e, t) {
      var n,
        i = [],
        o = function (e, t) {
          (t = ke.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (t === C && (t = ke.ajaxSettings && ke.ajaxSettings.traditional),
        ke.isArray(e) || (e.jquery && !ke.isPlainObject(e)))
      )
        ke.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) dt(n, e[n], t, o);
      return i.join("&").replace(at, "+");
    }),
    ke.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        ke.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    ke.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var pt,
    ht,
    gt = ke.now(),
    mt = /\?/,
    vt = /#.*$/,
    yt = /([?&])_=[^&]*/,
    bt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    xt = /^(?:GET|HEAD)$/,
    _t = /^\/\//,
    wt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Ct = ke.fn.load,
    kt = {},
    Tt = {},
    Nt = "*/".concat("*");
  try {
    ht = e.href;
  } catch (e) {
    ((ht = g.createElement("a")).href = ""), (ht = ht.href);
  }
  function Et(r) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        i = 0,
        o = e.toLowerCase().match(k) || [];
      if (ke.isFunction(t))
        for (; (n = o[i++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t))
            : (r[n] = r[n] || []).push(t);
    };
  }
  function St(t, o, r, s) {
    var a = {},
      l = t === Tt;
    function c(e) {
      var i;
      return (
        (a[e] = !0),
        ke.each(t[e] || [], function (e, t) {
          var n = t(o, r, s);
          return "string" != typeof n || l || a[n]
            ? l
              ? !(i = n)
              : C
            : (o.dataTypes.unshift(n), c(n), !1);
        }),
        i
      );
    }
    return c(o.dataTypes[0]) || (!a["*"] && c("*"));
  }
  function Dt(e, t) {
    var n,
      i,
      o = ke.ajaxSettings.flatOptions || {};
    for (i in t) t[i] !== C && ((o[i] ? e : n || (n = {}))[i] = t[i]);
    return n && ke.extend(!0, e, n), e;
  }
  (pt = wt.exec(ht.toLowerCase()) || []),
    (ke.fn.load = function (e, t, n) {
      if ("string" != typeof e && Ct) return Ct.apply(this, arguments);
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        0 <= a && ((i = e.slice(a, e.length)), (e = e.slice(0, a))),
        ke.isFunction(t)
          ? ((n = t), (t = C))
          : t && "object" == typeof t && (r = "POST"),
        0 < s.length &&
          ke
            .ajax({
              url: e,
              type: r,
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (o = arguments),
                s.html(i ? ke("<div>").append(ke.parseHTML(e)).find(i) : e);
            })
            .complete(
              n &&
                function (e, t) {
                  s.each(n, o || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    ke.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ke.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ke.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ht,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            pt[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ke.parseJSON,
          "text xml": ke.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (e, t) {
        return t ? Dt(Dt(e, ke.ajaxSettings), t) : Dt(ke.ajaxSettings, e);
      },
      ajaxPrefilter: Et(kt),
      ajaxTransport: Et(Tt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = C)), (t = t || {});
        var n,
          i,
          u,
          f,
          d,
          p,
          h,
          o,
          g = ke.ajaxSetup({}, t),
          m = g.context || g,
          v = g.context && (m.nodeType || m.jquery) ? ke(m) : ke.event,
          y = ke.Deferred(),
          b = ke.Callbacks("once memory"),
          x = g.statusCode || {},
          r = {},
          s = {},
          _ = 0,
          a = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === _) {
                if (!o)
                  for (o = {}; (t = bt.exec(f)); ) o[t[1].toLowerCase()] = t[2];
                t = o[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === _ ? f : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return _ || ((e = s[n] = s[n] || e), (r[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return _ || (g.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (_ < 2) for (t in e) x[t] = [x[t], e[t]];
                else w.always(e[w.status]);
              return this;
            },
            abort: function (e) {
              var t = e || a;
              return h && h.abort(t), l(0, t), this;
            },
          };
        if (
          ((y.promise(w).complete = b.add),
          (w.success = w.done),
          (w.error = w.fail),
          (g.url = ((e || g.url || ht) + "")
            .replace(vt, "")
            .replace(_t, pt[1] + "//")),
          (g.type = t.method || t.type || g.method || g.type),
          (g.dataTypes = ke
            .trim(g.dataType || "*")
            .toLowerCase()
            .match(k) || [""]),
          null == g.crossDomain &&
            ((n = wt.exec(g.url.toLowerCase())),
            (g.crossDomain = !(
              !n ||
              (n[1] === pt[1] &&
                n[2] === pt[2] &&
                (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                  (pt[3] || ("http:" === pt[1] ? "80" : "443")))
            ))),
          g.data &&
            g.processData &&
            "string" != typeof g.data &&
            (g.data = ke.param(g.data, g.traditional)),
          St(kt, g, t, w),
          2 === _)
        )
          return w;
        for (i in ((p = g.global) &&
          0 == ke.active++ &&
          ke.event.trigger("ajaxStart"),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !xt.test(g.type)),
        (u = g.url),
        g.hasContent ||
          (g.data &&
            ((u = g.url += (mt.test(u) ? "&" : "?") + g.data), delete g.data),
          !1 === g.cache &&
            (g.url = yt.test(u)
              ? u.replace(yt, "$1_=" + gt++)
              : u + (mt.test(u) ? "&" : "?") + "_=" + gt++)),
        g.ifModified &&
          (ke.lastModified[u] &&
            w.setRequestHeader("If-Modified-Since", ke.lastModified[u]),
          ke.etag[u] && w.setRequestHeader("If-None-Match", ke.etag[u])),
        ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
          w.setRequestHeader("Content-Type", g.contentType),
        w.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ("*" !== g.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
            : g.accepts["*"]
        ),
        g.headers))
          w.setRequestHeader(i, g.headers[i]);
        if (g.beforeSend && (!1 === g.beforeSend.call(m, w, g) || 2 === _))
          return w.abort();
        for (i in ((a = "abort"),
        {
          success: 1,
          error: 1,
          complete: 1,
        }))
          w[i](g[i]);
        if ((h = St(Tt, g, t, w))) {
          (w.readyState = 1),
            p && v.trigger("ajaxSend", [w, g]),
            g.async &&
              0 < g.timeout &&
              (d = setTimeout(function () {
                w.abort("timeout");
              }, g.timeout));
          try {
            (_ = 1), h.send(r, l);
          } catch (e) {
            if (!(_ < 2)) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, i) {
          var o,
            r,
            s,
            a,
            l,
            c = t;
          2 !== _ &&
            ((_ = 2),
            d && clearTimeout(d),
            (h = C),
            (f = i || ""),
            (w.readyState = 0 < e ? 4 : 0),
            (o = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                var i,
                  o,
                  r,
                  s,
                  a = e.contents,
                  l = e.dataTypes;
                for (; "*" === l[0]; )
                  l.shift(),
                    o === C &&
                      (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o)
                  for (s in a)
                    if (a[s] && a[s].test(o)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in n) r = l[0];
                else {
                  for (s in n) {
                    if (!l[0] || e.converters[s + " " + l[0]]) {
                      r = s;
                      break;
                    }
                    i || (i = s);
                  }
                  r = r || i;
                }
                return r ? (r !== l[0] && l.unshift(r), n[r]) : C;
              })(g, w, n)),
            (a = (function (e, t, n, i) {
              var o,
                r,
                s,
                a,
                l,
                c = {},
                u = e.dataTypes.slice();
              if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
              r = u.shift();
              for (; r; )
                if (
                  (e.responseFields[r] && (n[e.responseFields[r]] = t),
                  !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = r),
                  (r = u.shift()))
                )
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                    if (!(s = c[l + " " + r] || c["* " + r]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === r &&
                          (s = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = c[o])
                            : !0 !== c[o] && ((r = a[0]), u.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + l + " to " + r,
                          };
                        }
                  }
              return {
                state: "success",
                data: t,
              };
            })(g, a, w, o)),
            o
              ? (g.ifModified &&
                  ((l = w.getResponseHeader("Last-Modified")) &&
                    (ke.lastModified[u] = l),
                  (l = w.getResponseHeader("etag")) && (ke.etag[u] = l)),
                204 === e || "HEAD" === g.type
                  ? (c = "nocontent")
                  : 304 === e
                  ? (c = "notmodified")
                  : ((c = a.state), (r = a.data), (o = !(s = a.error))))
              : ((s = c), (e || !c) && ((c = "error"), e < 0 && (e = 0))),
            (w.status = e),
            (w.statusText = (t || c) + ""),
            o ? y.resolveWith(m, [r, c, w]) : y.rejectWith(m, [w, c, s]),
            w.statusCode(x),
            (x = C),
            p && v.trigger(o ? "ajaxSuccess" : "ajaxError", [w, g, o ? r : s]),
            b.fireWith(m, [w, c]),
            p &&
              (v.trigger("ajaxComplete", [w, g]),
              --ke.active || ke.event.trigger("ajaxStop")));
        }
        return w;
      },
      getJSON: function (e, t, n) {
        return ke.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return ke.get(e, C, t, "script");
      },
    }),
    ke.each(["get", "post"], function (e, o) {
      ke[o] = function (e, t, n, i) {
        return (
          ke.isFunction(t) && ((i = i || n), (n = t), (t = C)),
          ke.ajax({
            url: e,
            type: o,
            dataType: i,
            data: t,
            success: n,
          })
        );
      };
    }),
    ke.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /(?:java|ecma)script/,
      },
      converters: {
        "text script": function (e) {
          return ke.globalEval(e), e;
        },
      },
    }),
    ke.ajaxPrefilter("script", function (e) {
      e.cache === C && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    ke.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var i,
          o = g.head || ke("head")[0] || g.documentElement;
        return {
          send: function (e, n) {
            ((i = g.createElement("script")).async = !0),
              t.scriptCharset && (i.charset = t.scriptCharset),
              (i.src = t.url),
              (i.onload = i.onreadystatechange =
                function (e, t) {
                  (t ||
                    !i.readyState ||
                    /loaded|complete/.test(i.readyState)) &&
                    ((i.onload = i.onreadystatechange = null),
                    i.parentNode && i.parentNode.removeChild(i),
                    (i = null),
                    t || n(200, "success"));
                }),
              o.insertBefore(i, o.firstChild);
          },
          abort: function () {
            i && i.onload(C, !0);
          },
        };
      }
    });
  var Pt = [],
    At = /(=)\?(?=&|$)|\?\?/;
  ke.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Pt.pop() || ke.expando + "_" + gt++;
      return (this[e] = !0), e;
    },
  }),
    ke.ajaxPrefilter("json jsonp", function (e, t, n) {
      var i,
        o,
        r,
        s =
          !1 !== e.jsonp &&
          (At.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              At.test(e.data) &&
              "data");
      return s || "jsonp" === e.dataTypes[0]
        ? ((i = e.jsonpCallback =
            ke.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(At, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return r || ke.error(i + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = h[i]),
          (h[i] = function () {
            r = arguments;
          }),
          n.always(function () {
            (h[i] = o),
              e[i] && ((e.jsonpCallback = t.jsonpCallback), Pt.push(i)),
              r && ke.isFunction(o) && o(r[0]),
              (r = o = C);
          }),
          "script")
        : C;
    });
  var Lt,
    jt,
    Ht = 0,
    Ot =
      h.ActiveXObject &&
      function () {
        var e;
        for (e in Lt) Lt[e](C, !0);
      };
  function Mt() {
    try {
      return new h.XMLHttpRequest();
    } catch (e) {}
  }
  (ke.ajaxSettings.xhr = h.ActiveXObject
    ? function () {
        return (
          (!this.isLocal && Mt()) ||
          (function () {
            try {
              return new h.ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
          })()
        );
      }
    : Mt),
    (jt = ke.ajaxSettings.xhr()),
    (ke.support.cors = !!jt && "withCredentials" in jt),
    (jt = ke.support.ajax = !!jt) &&
      ke.ajaxTransport(function (c) {
        var u;
        if (!c.crossDomain || ke.support.cors)
          return {
            send: function (e, s) {
              var a,
                t,
                l = c.xhr();
              if (
                (c.username
                  ? l.open(c.type, c.url, c.async, c.username, c.password)
                  : l.open(c.type, c.url, c.async),
                c.xhrFields)
              )
                for (t in c.xhrFields) l[t] = c.xhrFields[t];
              c.mimeType &&
                l.overrideMimeType &&
                l.overrideMimeType(c.mimeType),
                c.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (t in e) l.setRequestHeader(t, e[t]);
              } catch (e) {}
              l.send((c.hasContent && c.data) || null),
                (u = function (e, t) {
                  var n, i, o, r;
                  try {
                    if (u && (t || 4 === l.readyState))
                      if (
                        ((u = C),
                        a &&
                          ((l.onreadystatechange = ke.noop),
                          Ot && delete Lt[a]),
                        t)
                      )
                        4 !== l.readyState && l.abort();
                      else {
                        (r = {}),
                          (n = l.status),
                          (i = l.getAllResponseHeaders()),
                          "string" == typeof l.responseText &&
                            (r.text = l.responseText);
                        try {
                          o = l.statusText;
                        } catch (e) {
                          o = "";
                        }
                        n || !c.isLocal || c.crossDomain
                          ? 1223 === n && (n = 204)
                          : (n = r.text ? 200 : 404);
                      }
                  } catch (e) {
                    t || s(-1, e);
                  }
                  r && s(n, o, r, i);
                }),
                c.async
                  ? 4 === l.readyState
                    ? setTimeout(u)
                    : ((a = ++Ht),
                      Ot && (Lt || ((Lt = {}), ke(h).unload(Ot)), (Lt[a] = u)),
                      (l.onreadystatechange = u))
                  : u();
            },
            abort: function () {
              u && u(C, !0);
            },
          };
      });
  var It,
    Wt,
    Ft = /^(?:toggle|show|hide)$/,
    qt = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
    Rt = /queueHooks$/,
    zt = [
      function (t, e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = this,
          u = {},
          f = t.style,
          d = t.nodeType && et(t),
          p = ke._data(t, "fxshow");
        for (i in (n.queue ||
          (null == (a = ke._queueHooks(t, "fx")).unqueued &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l();
            })),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--, ke.queue(t, "fx").length || a.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
          "inline" === ke.css(t, "display") &&
            "none" === ke.css(t, "float") &&
            (ke.support.inlineBlockNeedsLayout && "inline" !== rt(t.nodeName)
              ? (f.zoom = 1)
              : (f.display = "inline-block"))),
        n.overflow &&
          ((f.overflow = "hidden"),
          ke.support.shrinkWrapBlocks ||
            c.always(function () {
              (f.overflow = n.overflow[0]),
                (f.overflowX = n.overflow[1]),
                (f.overflowY = n.overflow[2]);
            })),
        e))
          if (((o = e[i]), Ft.exec(o))) {
            if (
              (delete e[i],
              (r = r || "toggle" === o),
              o === (d ? "hide" : "show"))
            )
              continue;
            u[i] = (p && p[i]) || ke.style(t, i);
          }
        if (!ke.isEmptyObject(u))
          for (i in (p
            ? "hidden" in p && (d = p.hidden)
            : (p = ke._data(t, "fxshow", {})),
          r && (p.hidden = !d),
          d
            ? ke(t).show()
            : c.done(function () {
                ke(t).hide();
              }),
          c.done(function () {
            var e;
            for (e in (ke._removeData(t, "fxshow"), u)) ke.style(t, e, u[e]);
          }),
          u))
            (s = Ut(d ? p[i] : 0, i, c)),
              i in p ||
                ((p[i] = s.start),
                d &&
                  ((s.end = s.start),
                  (s.start = "width" === i || "height" === i ? 1 : 0)));
      },
    ],
    Bt = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            i = n.cur(),
            o = qt.exec(t),
            r = (o && o[3]) || (ke.cssNumber[e] ? "" : "px"),
            s =
              (ke.cssNumber[e] || ("px" !== r && +i)) &&
              qt.exec(ke.css(n.elem, e)),
            a = 1,
            l = 20;
          if (s && s[3] !== r)
            for (
              r = r || s[3], o = o || [], s = +i || 1;
              (s /= a = a || ".5"),
                ke.style(n.elem, e, s + r),
                a !== (a = n.cur() / i) && 1 !== a && --l;

            );
          return (
            o &&
              ((n.unit = r),
              (n.start = +s || +i || 0),
              (n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2])),
            n
          );
        },
      ],
    };
  function $t() {
    return (
      setTimeout(function () {
        It = C;
      }),
      (It = ke.now())
    );
  }
  function Ut(e, t, n) {
    for (
      var i, o = (Bt[t] || []).concat(Bt["*"]), r = 0, s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function Xt(r, e, t) {
    var n,
      s,
      i = 0,
      o = zt.length,
      a = ke.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = It || $t(),
            t = Math.max(0, c.startTime + c.duration - e),
            n = 1 - (t / c.duration || 0),
            i = 0,
            o = c.tweens.length;
          i < o;
          i++
        )
          c.tweens[i].run(n);
        return (
          a.notifyWith(r, [c, n, t]),
          n < 1 && o ? t : (a.resolveWith(r, [c]), !1)
        );
      },
      c = a.promise({
        elem: r,
        props: ke.extend({}, e),
        opts: ke.extend(
          !0,
          {
            specialEasing: {},
          },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: It || $t(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = ke.Tween(
            r,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? c.tweens.length : 0;
          if (s) return this;
          for (s = !0; t < n; t++) c.tweens[t].run(1);
          return e ? a.resolveWith(r, [c, e]) : a.rejectWith(r, [c, e]), this;
        },
      }),
      u = c.props;
    for (
      (function (e, t) {
        var n, i, o, r, s;
        for (n in e)
          if (
            ((i = ke.camelCase(n)),
            (o = t[i]),
            (r = e[n]),
            ke.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
            n !== i && ((e[i] = r), delete e[n]),
            (s = ke.cssHooks[i]) && ("expand" in s))
          )
            for (n in ((r = s.expand(r)), delete e[i], r))
              (n in e) || ((e[n] = r[n]), (t[n] = o));
          else t[i] = o;
      })(u, c.opts.specialEasing);
      i < o;
      i++
    )
      if ((n = zt[i].call(c, r, u, c.opts))) return n;
    return (
      ke.map(u, Ut, c),
      ke.isFunction(c.opts.start) && c.opts.start.call(r, c),
      ke.fx.timer(
        ke.extend(l, {
          elem: r,
          anim: c,
          queue: c.opts.queue,
        })
      ),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    );
  }
  function Yt(e, t, n, i, o) {
    return new Yt.prototype.init(e, t, n, i, o);
  }
  function Jt(e, t) {
    var n,
      i = {
        height: e,
      },
      o = 0;
    for (t = t ? 1 : 0; o < 4; o += 2 - t)
      i["margin" + (n = Ke[o])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function Vt(e) {
    return ke.isWindow(e)
      ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  (ke.Animation = ke.extend(Xt, {
    tweener: function (e, t) {
      for (
        var n,
          i = 0,
          o = (e = ke.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length;
        i < o;
        i++
      )
        (n = e[i]), (Bt[n] = Bt[n] || []), Bt[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? zt.unshift(e) : zt.push(e);
    },
  })),
    (((ke.Tween = Yt).prototype = {
      constructor: Yt,
      init: function (e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (ke.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Yt.propHooks[this.prop];
        return e && e.get ? e.get(this) : Yt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Yt.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? ke.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Yt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Yt.prototype),
    ((Yt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = ke.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          ke.fx.step[e.prop]
            ? ke.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ke.cssProps[e.prop]] || ke.cssHooks[e.prop])
            ? ke.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }).scrollTop = Yt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    ke.each(["toggle", "show", "hide"], function (e, i) {
      var o = ke.fn[i];
      ke.fn[i] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? o.apply(this, arguments)
          : this.animate(Jt(i, !0), e, t, n);
      };
    }),
    ke.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(et).css("opacity", 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          i
        );
      },
      animate: function (t, e, n, i) {
        var o = ke.isEmptyObject(t),
          r = ke.speed(e, n, i),
          s = function () {
            var e = Xt(this, ke.extend({}, t), r);
            (s.finish = function () {
              e.stop(!0);
            }),
              (o || ke._data(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function (o, e, r) {
        var s = function (e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof o && ((r = e), (e = o), (o = C)),
          e && !1 !== o && this.queue(o || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != o && o + "queueHooks",
              n = ke.timers,
              i = ke._data(this);
            if (t) i[t] && i[t].stop && s(i[t]);
            else for (t in i) i[t] && i[t].stop && Rt.test(t) && s(i[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != o && n[t].queue !== o) ||
                (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
            (e || !r) && ke.dequeue(this, o);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = ke._data(this),
              n = t[s + "queue"],
              i = t[s + "queueHooks"],
              o = ke.timers,
              r = n ? n.length : 0;
            for (
              t.finish = !0,
                ke.queue(this, s, []),
                i && i.cur && i.cur.finish && i.cur.finish.call(this),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === s &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    ke.each(
      {
        slideDown: Jt("show"),
        slideUp: Jt("hide"),
        slideToggle: Jt("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (e, i) {
        ke.fn[e] = function (e, t, n) {
          return this.animate(i, e, t, n);
        };
      }
    ),
    (ke.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? ke.extend({}, e)
          : {
              complete: n || (!n && t) || (ke.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ke.isFunction(t) && t),
            };
      return (
        (i.duration = ke.fx.off
          ? 0
          : "number" == typeof i.duration
          ? i.duration
          : i.duration in ke.fx.speeds
          ? ke.fx.speeds[i.duration]
          : ke.fx.speeds._default),
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          ke.isFunction(i.old) && i.old.call(this),
            i.queue && ke.dequeue(this, i.queue);
        }),
        i
      );
    }),
    (ke.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ke.timers = []),
    (ke.fx = Yt.prototype.init),
    (ke.fx.tick = function () {
      var e,
        t = ke.timers,
        n = 0;
      for (It = ke.now(); t.length > n; n++)
        (e = t[n])() || t[n] !== e || t.splice(n--, 1);
      t.length || ke.fx.stop(), (It = C);
    }),
    (ke.fx.timer = function (e) {
      e() && ke.timers.push(e) && ke.fx.start();
    }),
    (ke.fx.interval = 13),
    (ke.fx.start = function () {
      Wt || (Wt = setInterval(ke.fx.tick, ke.fx.interval));
    }),
    (ke.fx.stop = function () {
      clearInterval(Wt), (Wt = null);
    }),
    (ke.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ke.fx.step = {}),
    ke.expr &&
      ke.expr.filters &&
      (ke.expr.filters.animated = function (t) {
        return ke.grep(ke.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
    (ke.fn.offset = function (t) {
      if (arguments.length)
        return t === C
          ? this
          : this.each(function (e) {
              ke.offset.setOffset(this, t, e);
            });
      var e,
        n,
        i = {
          top: 0,
          left: 0,
        },
        o = this[0],
        r = o && o.ownerDocument;
      return r
        ? ((e = r.documentElement),
          ke.contains(e, o)
            ? (typeof o.getBoundingClientRect !== v &&
                (i = o.getBoundingClientRect()),
              (n = Vt(r)),
              {
                top:
                  i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left:
                  i.left +
                  (n.pageXOffset || e.scrollLeft) -
                  (e.clientLeft || 0),
              })
            : i)
        : void 0;
    }),
    (ke.offset = {
      setOffset: function (e, t, n) {
        var i = ke.css(e, "position");
        "static" === i && (e.style.position = "relative");
        var o,
          r,
          s = ke(e),
          a = s.offset(),
          l = ke.css(e, "top"),
          c = ke.css(e, "left"),
          u = {},
          f = {};
        (r =
          ("absolute" === i || "fixed" === i) && -1 < ke.inArray("auto", [l, c])
            ? ((o = (f = s.position()).top), f.left)
            : ((o = parseFloat(l) || 0), parseFloat(c) || 0)),
          ke.isFunction(t) && (t = t.call(e, n, a)),
          null != t.top && (u.top = t.top - a.top + o),
          null != t.left && (u.left = t.left - a.left + r),
          "using" in t ? t.using.call(e, u) : s.css(u);
      },
    }),
    ke.fn.extend({
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = {
              top: 0,
              left: 0,
            },
            i = this[0];
          return (
            "fixed" === ke.css(i, "position")
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ke.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ke.css(e[0], "borderTopWidth", !0)),
                (n.left += ke.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ke.css(i, "marginTop", !0),
              left: t.left - n.left - ke.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || i;
            e && !ke.nodeName(e, "html") && "static" === ke.css(e, "position");

          )
            e = e.offsetParent;
          return e || i;
        });
      },
    }),
    ke.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, o) {
        var r = /Y/.test(o);
        ke.fn[t] = function (e) {
          return ke.access(
            this,
            function (e, t, n) {
              var i = Vt(e);
              return n === C
                ? i
                  ? o in i
                    ? i[o]
                    : i.document.documentElement[t]
                  : e[t]
                : (i
                    ? i.scrollTo(
                        r ? ke(i).scrollLeft() : n,
                        r ? n : ke(i).scrollTop()
                      )
                    : (e[t] = n),
                  C);
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    ke.each(
      {
        Height: "height",
        Width: "width",
      },
      function (r, s) {
        ke.each(
          {
            padding: "inner" + r,
            content: s,
            "": "outer" + r,
          },
          function (i, e) {
            ke.fn[e] = function (e, t) {
              var n = arguments.length && (i || "boolean" != typeof e),
                o = i || (!0 === e || !0 === t ? "margin" : "border");
              return ke.access(
                this,
                function (e, t, n) {
                  var i;
                  return ke.isWindow(e)
                    ? e.document.documentElement["client" + r]
                    : 9 === e.nodeType
                    ? ((i = e.documentElement),
                      Math.max(
                        e.body["scroll" + r],
                        i["scroll" + r],
                        e.body["offset" + r],
                        i["offset" + r],
                        i["client" + r]
                      ))
                    : n === C
                    ? ke.css(e, t, o)
                    : ke.style(e, t, n, o);
                },
                s,
                n ? e : C,
                n,
                null
              );
            };
          }
        );
      }
    ),
    (ke.fn.size = function () {
      return this.length;
    }),
    (ke.fn.andSelf = ke.fn.addBack),
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = ke)
      : ((h.jQuery = h.$ = ke),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return ke;
          }));
})(window),
  (function (a, e) {
    function i(e, t) {
      var n,
        i,
        o,
        r = e.nodeName.toLowerCase();
      return "area" === r
        ? ((i = (n = e.parentNode).name),
          !(!e.href || !i || "map" !== n.nodeName.toLowerCase()) &&
            !!(o = a("img[usemap=#" + i + "]")[0]) &&
            s(o))
        : (/input|select|textarea|button|object/.test(r)
            ? !e.disabled
            : ("a" === r && e.href) || t) && s(e);
    }
    function s(e) {
      return (
        a.expr.filters.visible(e) &&
        !a(e)
          .parents()
          .addBack()
          .filter(function () {
            return "hidden" === a.css(this, "visibility");
          }).length
      );
    }
    var t,
      o,
      n = 0,
      r = /^ui-id-\d+$/;
    (a.ui = a.ui || {}),
      a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          NUMPAD_ADD: 107,
          NUMPAD_DECIMAL: 110,
          NUMPAD_DIVIDE: 111,
          NUMPAD_ENTER: 108,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_SUBTRACT: 109,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      a.fn.extend({
        focus:
          ((o = a.fn.focus),
          function (t, n) {
            return "number" == typeof t
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    a(e).focus(), n && n.call(e);
                  }, t);
                })
              : o.apply(this, arguments);
          }),
        scrollParent: function () {
          var e;
          return (
            (e =
              (a.ui.ie && /(static|relative)/.test(this.css("position"))) ||
              /absolute/.test(this.css("position"))
                ? this.parents()
                    .filter(function () {
                      return (
                        /(relative|absolute|fixed)/.test(
                          a.css(this, "position")
                        ) &&
                        /(auto|scroll)/.test(
                          a.css(this, "overflow") +
                            a.css(this, "overflow-y") +
                            a.css(this, "overflow-x")
                        )
                      );
                    })
                    .eq(0)
                : this.parents()
                    .filter(function () {
                      return /(auto|scroll)/.test(
                        a.css(this, "overflow") +
                          a.css(this, "overflow-y") +
                          a.css(this, "overflow-x")
                      );
                    })
                    .eq(0)),
            /fixed/.test(this.css("position")) || !e.length ? a(document) : e
          );
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css("zIndex", e);
          if (this.length)
            for (var t, n, i = a(this[0]); i.length && i[0] !== document; ) {
              if (
                ("absolute" === (t = i.css("position")) ||
                  "relative" === t ||
                  "fixed" === t) &&
                ((n = parseInt(i.css("zIndex"), 10)), !isNaN(n) && 0 !== n)
              )
                return n;
              i = i.parent();
            }
          return 0;
        },
        uniqueId: function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++n);
          });
        },
        removeUniqueId: function () {
          return this.each(function () {
            r.test(this.id) && a(this).removeAttr("id");
          });
        },
      }),
      a.extend(a.expr[":"], {
        data: a.expr.createPseudo
          ? a.expr.createPseudo(function (t) {
              return function (e) {
                return !!a.data(e, t);
              };
            })
          : function (e, t, n) {
              return !!a.data(e, n[3]);
            },
        focusable: function (e) {
          return i(e, !isNaN(a.attr(e, "tabindex")));
        },
        tabbable: function (e) {
          var t = a.attr(e, "tabindex"),
            n = isNaN(t);
          return (n || 0 <= t) && i(e, !n);
        },
      }),
      a("<a>").outerWidth(1).jquery ||
        a.each(["Width", "Height"], function (e, n) {
          function i(e, t, n, i) {
            return (
              a.each(o, function () {
                (t -= parseFloat(a.css(e, "padding" + this)) || 0),
                  n &&
                    (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0),
                  i && (t -= parseFloat(a.css(e, "margin" + this)) || 0);
              }),
              t
            );
          }
          var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            s = {
              innerWidth: a.fn.innerWidth,
              innerHeight: a.fn.innerHeight,
              outerWidth: a.fn.outerWidth,
              outerHeight: a.fn.outerHeight,
            };
          (a.fn["inner" + n] = function (e) {
            return void 0 === e
              ? s["inner" + n].call(this)
              : this.each(function () {
                  a(this).css(r, i(this, e) + "px");
                });
          }),
            (a.fn["outer" + n] = function (e, t) {
              return "number" != typeof e
                ? s["outer" + n].call(this, e)
                : this.each(function () {
                    a(this).css(r, i(this, e, !0, t) + "px");
                  });
            });
        }),
      a.fn.addBack ||
        (a.fn.addBack = function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        }),
      a("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
        (a.fn.removeData =
          ((t = a.fn.removeData),
          function (e) {
            return arguments.length
              ? t.call(this, a.camelCase(e))
              : t.call(this);
          })),
      (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      (a.support.selectstart =
        "onselectstart" in document.createElement("div")),
      a.fn.extend({
        disableSelection: function () {
          return this.bind(
            (a.support.selectstart ? "selectstart" : "mousedown") +
              ".ui-disableSelection",
            function (e) {
              e.preventDefault();
            }
          );
        },
        enableSelection: function () {
          return this.unbind(".ui-disableSelection");
        },
      }),
      a.extend(a.ui, {
        plugin: {
          add: function (e, t, n) {
            var i,
              o = a.ui[e].prototype;
            for (i in n)
              (o.plugins[i] = o.plugins[i] || []), o.plugins[i].push([t, n[i]]);
          },
          call: function (e, t, n) {
            var i,
              o = e.plugins[t];
            if (
              o &&
              e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType
            )
              for (i = 0; o.length > i; i++)
                e.options[o[i][0]] && o[i][1].apply(e.element, n);
          },
        },
        hasScroll: function (e, t) {
          if ("hidden" === a(e).css("overflow")) return !1;
          var n = t && "left" === t ? "scrollLeft" : "scrollTop",
            i = !1;
          return 0 < e[n] || ((e[n] = 1), (i = 0 < e[n]), (e[n] = 0), i);
        },
      });
  })(jQuery),
  (function (u, f) {
    var n = 0,
      a = Array.prototype.slice,
      i = u.cleanData;
    (u.cleanData = function (e) {
      for (var t, n = 0; null != (t = e[n]); n++)
        try {
          u(t).triggerHandler("remove");
        } catch (e) {}
      i(e);
    }),
      (u.widget = function (e, n, t) {
        var i,
          o,
          r,
          s,
          a = {},
          l = e.split(".")[0];
        (e = e.split(".")[1]),
          (i = l + "-" + e),
          t || ((t = n), (n = u.Widget)),
          (u.expr[":"][i.toLowerCase()] = function (e) {
            return !!u.data(e, i);
          }),
          (u[l] = u[l] || {}),
          (o = u[l][e]),
          (r = u[l][e] =
            function (e, t) {
              return this._createWidget
                ? (arguments.length && this._createWidget(e, t), f)
                : new r(e, t);
            }),
          u.extend(r, o, {
            version: t.version,
            _proto: u.extend({}, t),
            _childConstructors: [],
          }),
          ((s = new n()).options = u.widget.extend({}, s.options)),
          u.each(t, function (t, i) {
            return (
              u.isFunction(i)
                ? (a[t] =
                    ((o = function () {
                      return n.prototype[t].apply(this, arguments);
                    }),
                    (r = function (e) {
                      return n.prototype[t].apply(this, e);
                    }),
                    function () {
                      var e,
                        t = this._super,
                        n = this._superApply;
                      return (
                        (this._super = o),
                        (this._superApply = r),
                        (e = i.apply(this, arguments)),
                        (this._super = t),
                        (this._superApply = n),
                        e
                      );
                    }))
                : (a[t] = i),
              f
            );
            var o, r;
          }),
          (r.prototype = u.widget.extend(
            s,
            {
              widgetEventPrefix: o ? s.widgetEventPrefix : e,
            },
            a,
            {
              constructor: r,
              namespace: l,
              widgetName: e,
              widgetFullName: i,
            }
          )),
          o
            ? (u.each(o._childConstructors, function (e, t) {
                var n = t.prototype;
                u.widget(n.namespace + "." + n.widgetName, r, t._proto);
              }),
              delete o._childConstructors)
            : n._childConstructors.push(r),
          u.widget.bridge(e, r);
      }),
      (u.widget.extend = function (e) {
        for (
          var t, n, i = a.call(arguments, 1), o = 0, r = i.length;
          o < r;
          o++
        )
          for (t in i[o])
            (n = i[o][t]),
              i[o].hasOwnProperty(t) &&
                n !== f &&
                (e[t] = u.isPlainObject(n)
                  ? u.isPlainObject(e[t])
                    ? u.widget.extend({}, e[t], n)
                    : u.widget.extend({}, n)
                  : n);
        return e;
      }),
      (u.widget.bridge = function (r, t) {
        var s = t.prototype.widgetFullName || r;
        u.fn[r] = function (n) {
          var e = "string" == typeof n,
            i = a.call(arguments, 1),
            o = this;
          return (
            (n =
              !e && i.length ? u.widget.extend.apply(null, [n].concat(i)) : n),
            e
              ? this.each(function () {
                  var e,
                    t = u.data(this, s);
                  return t
                    ? u.isFunction(t[n]) && "_" !== n.charAt(0)
                      ? (e = t[n].apply(t, i)) !== t && e !== f
                        ? ((o = e && e.jquery ? o.pushStack(e.get()) : e), !1)
                        : f
                      : u.error(
                          "no such method '" +
                            n +
                            "' for " +
                            r +
                            " widget instance"
                        )
                    : u.error(
                        "cannot call methods on " +
                          r +
                          " prior to initialization; attempted to call method '" +
                          n +
                          "'"
                      );
                })
              : this.each(function () {
                  var e = u.data(this, s);
                  e
                    ? e.option(n || {})._init()
                    : u.data(this, s, new t(n, this));
                }),
            o
          );
        };
      }),
      (u.Widget = function () {}),
      (u.Widget._childConstructors = []),
      (u.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          disabled: !1,
          create: null,
        },
        _createWidget: function (e, t) {
          (t = u(t || this.defaultElement || this)[0]),
            (this.element = u(t)),
            (this.uuid = n++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.options = u.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            (this.bindings = u()),
            (this.hoverable = u()),
            (this.focusable = u()),
            t !== this &&
              (u.data(t, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === t && this.destroy();
                },
              }),
              (this.document = u(t.style ? t.ownerDocument : t.document || t)),
              (this.window = u(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: u.noop,
        _getCreateEventData: u.noop,
        _create: u.noop,
        _init: u.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetName)
              .removeData(this.widgetFullName)
              .removeData(u.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: u.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, t) {
          var n,
            i,
            o,
            r = e;
          if (0 === arguments.length) return u.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (e = (n = e.split(".")).shift()), n.length)) {
              for (
                i = r[e] = u.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (i[n[o]] = i[n[o]] || {}), (i = i[n[o]]);
              if (((e = n.pop()), t === f)) return i[e] === f ? null : i[e];
              i[e] = t;
            } else {
              if (t === f)
                return this.options[e] === f ? null : this.options[e];
              r[e] = t;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function (e) {
          var t;
          for (t in e) this._setOption(t, e[t]);
          return this;
        },
        _setOption: function (e, t) {
          return (
            (this.options[e] = t),
            "disabled" === e &&
              (this.widget()
                .toggleClass(
                  this.widgetFullName + "-disabled ui-state-disabled",
                  !!t
                )
                .attr("aria-disabled", t),
              this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus")),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _on: function (s, a, e) {
          var l,
            c = this;
          "boolean" != typeof s && ((e = a), (a = s), (s = !1)),
            e
              ? ((a = l = u(a)), (this.bindings = this.bindings.add(a)))
              : ((e = a), (a = this.element), (l = this.widget())),
            u.each(e, function (e, t) {
              function n() {
                return s ||
                  (!0 !== c.options.disabled &&
                    !u(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof t ? c[t] : t).apply(c, arguments)
                  : f;
              }
              "string" != typeof t &&
                (n.guid = t.guid = t.guid || n.guid || u.guid++);
              var i = e.match(/^(\w+)\s*(.*)$/),
                o = i[1] + c.eventNamespace,
                r = i[2];
              r ? l.delegate(r, o, n) : a.bind(o, n);
            });
        },
        _off: function (e, t) {
          (t =
            (t || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.unbind(t).undelegate(t);
        },
        _delay: function (e, t) {
          var n = this;
          return setTimeout(function () {
            return ("string" == typeof e ? n[e] : e).apply(n, arguments);
          }, t || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                u(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                u(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                u(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                u(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, t, n) {
          var i,
            o,
            r = this.options[e];
          if (
            ((n = n || {}),
            ((t = u.Event(t)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (t.target = this.element[0]),
            (o = t.originalEvent))
          )
            for (i in o) i in t || (t[i] = o[i]);
          return (
            this.element.trigger(t, n),
            !(
              (u.isFunction(r) &&
                !1 === r.apply(this.element[0], [t].concat(n))) ||
              t.isDefaultPrevented()
            )
          );
        },
      }),
      u.each(
        {
          show: "fadeIn",
          hide: "fadeOut",
        },
        function (r, s) {
          u.Widget.prototype["_" + r] = function (t, e, n) {
            "string" == typeof e &&
              (e = {
                effect: e,
              });
            var i,
              o = e
                ? !0 === e || "number" == typeof e
                  ? s
                  : e.effect || s
                : r;
            "number" == typeof (e = e || {}) &&
              (e = {
                duration: e,
              }),
              (i = !u.isEmptyObject(e)),
              (e.complete = n),
              e.delay && t.delay(e.delay),
              i && u.effects && u.effects.effect[o]
                ? t[r](e)
                : o !== r && t[o]
                ? t[o](e.duration, e.easing, n)
                : t.queue(function (e) {
                    u(this)[r](), n && n.call(t[0]), e();
                  });
          };
        }
      );
  })(jQuery),
  (function (o) {
    var r = !1;
    o(document).mouseup(function () {
      r = !1;
    }),
      o.widget("ui.mouse", {
        version: "1.10.3",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var t = this;
          this.element
            .bind("mousedown." + this.widgetName, function (e) {
              return t._mouseDown(e);
            })
            .bind("click." + this.widgetName, function (e) {
              return !0 ===
                o.data(e.target, t.widgetName + ".preventClickEvent")
                ? (o.removeData(e.target, t.widgetName + ".preventClickEvent"),
                  e.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              o(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!r) {
            this._mouseStarted && this._mouseUp(e), (this._mouseDownEvent = e);
            var t = this,
              n = 1 === e.which,
              i =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && o(e.target).closest(this.options.cancel).length;
            return (
              n &&
                !i &&
                this._mouseCapture(e) &&
                ((this.mouseDelayMet = !this.options.delay),
                this.mouseDelayMet ||
                  (this._mouseDelayTimer = setTimeout(function () {
                    t.mouseDelayMet = !0;
                  }, this.options.delay)),
                this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted = !1 !== this._mouseStart(e)),
                !this._mouseStarted)
                  ? e.preventDefault()
                  : (!0 ===
                      o.data(
                        e.target,
                        this.widgetName + ".preventClickEvent"
                      ) &&
                      o.removeData(
                        e.target,
                        this.widgetName + ".preventClickEvent"
                      ),
                    (this._mouseMoveDelegate = function (e) {
                      return t._mouseMove(e);
                    }),
                    (this._mouseUpDelegate = function (e) {
                      return t._mouseUp(e);
                    }),
                    o(document)
                      .bind(
                        "mousemove." + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .bind(
                        "mouseup." + this.widgetName,
                        this._mouseUpDelegate
                      ),
                    e.preventDefault(),
                    (r = !0))),
              !0
            );
          }
        },
        _mouseMove: function (e) {
          return o.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !e.button
            ? this._mouseUp(e)
            : this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted);
        },
        _mouseUp: function (e) {
          return (
            o(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                o.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            !1
          );
        },
        _mouseDistanceMet: function (e) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - e.pageX),
              Math.abs(this._mouseDownEvent.pageY - e.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      });
  })(jQuery),
  (function (b) {
    b.widget("ui.draggable", b.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" !== this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative"),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._mouseInit();
      },
      _destroy: function () {
        this.element.removeClass(
          "ui-draggable ui-draggable-dragging ui-draggable-disabled"
        ),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var t = this.options;
        return (
          !(
            this.helper ||
            t.disabled ||
            0 < b(e.target).closest(".ui-resizable-handle").length
          ) &&
          ((this.handle = this._getHandle(e)),
          !!this.handle &&
            (b(!0 === t.iframeFix ? "iframe" : t.iframeFix).each(function () {
              b(
                "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
              )
                .css({
                  width: this.offsetWidth + "px",
                  height: this.offsetHeight + "px",
                  position: "absolute",
                  opacity: "0.001",
                  zIndex: 1e3,
                })
                .css(b(this).offset())
                .appendTo("body");
            }),
            !0))
        );
      },
      _mouseStart: function (e) {
        var t = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this.helper.addClass("ui-draggable-dragging"),
          this._cacheHelperProportions(),
          b.ui.ddmanager && (b.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offsetParent = this.helper.offsetParent()),
          (this.offsetParentCssPosition = this.offsetParent.css("position")),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          (this.offset.scroll = !1),
          b.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          t.cursorAt && this._adjustOffsetFromHelper(t.cursorAt),
          this._setContainment(),
          !1 === this._trigger("start", e)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              b.ui.ddmanager &&
                !t.dropBehaviour &&
                b.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              b.ui.ddmanager && b.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _mouseDrag: function (e, t) {
        if (
          ("fixed" === this.offsetParentCssPosition &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !t)
        ) {
          var n = this._uiHash();
          if (!1 === this._trigger("drag", e, n)) return this._mouseUp({}), !1;
          this.position = n.position;
        }
        return (
          (this.options.axis && "y" === this.options.axis) ||
            (this.helper[0].style.left = this.position.left + "px"),
          (this.options.axis && "x" === this.options.axis) ||
            (this.helper[0].style.top = this.position.top + "px"),
          b.ui.ddmanager && b.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var t = this,
          n = !1;
        return (
          b.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (n = b.ui.ddmanager.drop(this, e)),
          this.dropped && ((n = this.dropped), (this.dropped = !1)),
          ("original" !== this.options.helper ||
            b.contains(this.element[0].ownerDocument, this.element[0])) &&
            (("invalid" === this.options.revert && !n) ||
            ("valid" === this.options.revert && n) ||
            !0 === this.options.revert ||
            (b.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, n))
              ? b(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    !1 !== t._trigger("stop", e) && t._clear();
                  }
                )
              : !1 !== this._trigger("stop", e) && this._clear()),
          !1
        );
      },
      _mouseUp: function (e) {
        return (
          b("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this);
          }),
          b.ui.ddmanager && b.ui.ddmanager.dragStop(this, e),
          b.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return (
          !this.options.handle ||
          !!b(e.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _createHelper: function (e) {
        var t = this.options,
          n = b.isFunction(t.helper)
            ? b(t.helper.apply(this.element[0], [e]))
            : "clone" === t.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          n.parents("body").length ||
            n.appendTo(
              "parent" === t.appendTo ? this.element[0].parentNode : t.appendTo
            ),
          n[0] === this.element[0] ||
            /(fixed|absolute)/.test(n.css("position")) ||
            n.css("position", "absolute"),
          n
        );
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          b.isArray(e) &&
            (e = {
              left: +e[0],
              top: +e[1] || 0,
            }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== document &&
            b.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              "html" === this.offsetParent[0].tagName.toLowerCase() &&
              b.ui.ie)) &&
            (e = {
              top: 0,
              left: 0,
            }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" !== this.cssPosition)
          return {
            top: 0,
            left: 0,
          };
        var e = this.element.position();
        return {
          top:
            e.top -
            (parseInt(this.helper.css("top"), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            e.left -
            (parseInt(this.helper.css("left"), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          t,
          n,
          i = this.options;
        return i.containment
          ? "window" === i.containment
            ? void (this.containment = [
                b(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                b(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                b(window).scrollLeft() +
                  b(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                b(window).scrollTop() +
                  (b(window).height() ||
                    document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
            : "document" === i.containment
            ? void (this.containment = [
                0,
                0,
                b(document).width() -
                  this.helperProportions.width -
                  this.margins.left,
                (b(document).height() ||
                  document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
            : i.containment.constructor === Array
            ? void (this.containment = i.containment)
            : ("parent" === i.containment &&
                (i.containment = this.helper[0].parentNode),
              void (
                (n = (t = b(i.containment))[0]) &&
                ((e = "hidden" !== t.css("overflow")),
                (this.containment = [
                  (parseInt(t.css("borderLeftWidth"), 10) || 0) +
                    (parseInt(t.css("paddingLeft"), 10) || 0),
                  (parseInt(t.css("borderTopWidth"), 10) || 0) +
                    (parseInt(t.css("paddingTop"), 10) || 0),
                  (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) -
                    (parseInt(t.css("borderRightWidth"), 10) || 0) -
                    (parseInt(t.css("paddingRight"), 10) || 0) -
                    this.helperProportions.width -
                    this.margins.left -
                    this.margins.right,
                  (e
                    ? Math.max(n.scrollHeight, n.offsetHeight)
                    : n.offsetHeight) -
                    (parseInt(t.css("borderBottomWidth"), 10) || 0) -
                    (parseInt(t.css("paddingBottom"), 10) || 0) -
                    this.helperProportions.height -
                    this.margins.top -
                    this.margins.bottom,
                ]),
                (this.relative_container = t))
              ))
          : void (this.containment = null);
      },
      _convertPositionTo: function (e, t) {
        t || (t = this.position);
        var n = "absolute" === e ? 1 : -1,
          i =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              b.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent;
        return (
          this.offset.scroll ||
            (this.offset.scroll = {
              top: i.scrollTop(),
              left: i.scrollLeft(),
            }),
          {
            top:
              t.top +
              this.offset.relative.top * n +
              this.offset.parent.top * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top) *
                n,
            left:
              t.left +
              this.offset.relative.left * n +
              this.offset.parent.left * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left) *
                n,
          }
        );
      },
      _generatePosition: function (e) {
        var t,
          n,
          i,
          o,
          r = this.options,
          s =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              b.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          a = e.pageX,
          l = e.pageY;
        return (
          this.offset.scroll ||
            (this.offset.scroll = {
              top: s.scrollTop(),
              left: s.scrollLeft(),
            }),
          this.originalPosition &&
            (this.containment &&
              ((t = this.relative_container
                ? ((n = this.relative_container.offset()),
                  [
                    this.containment[0] + n.left,
                    this.containment[1] + n.top,
                    this.containment[2] + n.left,
                    this.containment[3] + n.top,
                  ])
                : this.containment),
              e.pageX - this.offset.click.left < t[0] &&
                (a = t[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < t[1] &&
                (l = t[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > t[2] &&
                (a = t[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > t[3] &&
                (l = t[3] + this.offset.click.top)),
            r.grid &&
              ((i = r.grid[1]
                ? this.originalPageY +
                  Math.round((l - this.originalPageY) / r.grid[1]) * r.grid[1]
                : this.originalPageY),
              (l = t
                ? i - this.offset.click.top >= t[1] ||
                  i - this.offset.click.top > t[3]
                  ? i
                  : i - this.offset.click.top >= t[1]
                  ? i - r.grid[1]
                  : i + r.grid[1]
                : i),
              (o = r.grid[0]
                ? this.originalPageX +
                  Math.round((a - this.originalPageX) / r.grid[0]) * r.grid[0]
                : this.originalPageX),
              (a = t
                ? o - this.offset.click.left >= t[0] ||
                  o - this.offset.click.left > t[2]
                  ? o
                  : o - this.offset.click.left >= t[0]
                  ? o - r.grid[0]
                  : o + r.grid[0]
                : o))),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top),
            left:
              a -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1);
      },
      _trigger: function (e, t, n) {
        return (
          (n = n || this._uiHash()),
          b.ui.plugin.call(this, e, [t, n]),
          "drag" === e &&
            (this.positionAbs = this._convertPositionTo("absolute")),
          b.Widget.prototype._trigger.call(this, e, t, n)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      b.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, e) {
          var n = b(this).data("ui-draggable"),
            i = n.options,
            o = b.extend({}, e, {
              item: n.element,
            });
          (n.sortables = []),
            b(i.connectToSortable).each(function () {
              var e = b.data(this, "ui-sortable");
              e &&
                !e.options.disabled &&
                (n.sortables.push({
                  instance: e,
                  shouldRevert: e.options.revert,
                }),
                e.refreshPositions(),
                e._trigger("activate", t, o));
            });
        },
        stop: function (e, t) {
          var n = b(this).data("ui-draggable"),
            i = b.extend({}, t, {
              item: n.element,
            });
          b.each(n.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (n.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert &&
                  (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(e),
                (this.instance.options.helper = this.instance.options._helper),
                "original" === n.options.helper &&
                  this.instance.currentItem.css({
                    top: "auto",
                    left: "auto",
                  }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger("deactivate", e, i));
          });
        },
        drag: function (n, i) {
          var o = b(this).data("ui-draggable"),
            r = this;
          b.each(o.sortables, function () {
            var e = !1,
              t = this;
            (this.instance.positionAbs = o.positionAbs),
              (this.instance.helperProportions = o.helperProportions),
              (this.instance.offset.click = o.offset.click),
              this.instance._intersectsWith(this.instance.containerCache) &&
                ((e = !0),
                b.each(o.sortables, function () {
                  return (
                    (this.instance.positionAbs = o.positionAbs),
                    (this.instance.helperProportions = o.helperProportions),
                    (this.instance.offset.click = o.offset.click),
                    this !== t &&
                      this.instance._intersectsWith(
                        this.instance.containerCache
                      ) &&
                      b.contains(
                        t.instance.element[0],
                        this.instance.element[0]
                      ) &&
                      (e = !1),
                    e
                  );
                })),
              e
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = b(r)
                      .clone()
                      .removeAttr("id")
                      .appendTo(this.instance.element)
                      .data("ui-sortable-item", !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return i.helper[0];
                    }),
                    (n.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(n, !0),
                    this.instance._mouseStart(n, !0, !0),
                    (this.instance.offset.click.top = o.offset.click.top),
                    (this.instance.offset.click.left = o.offset.click.left),
                    (this.instance.offset.parent.left -=
                      o.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      o.offset.parent.top - this.instance.offset.parent.top),
                    o._trigger("toSortable", n),
                    (o.dropped = this.instance.element),
                    (o.currentItem = o.element),
                    (this.instance.fromOutside = o)),
                  this.instance.currentItem && this.instance._mouseDrag(n))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    "out",
                    n,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(n, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  o._trigger("fromSortable", n),
                  (o.dropped = !1));
          });
        },
      }),
      b.ui.plugin.add("draggable", "cursor", {
        start: function () {
          var e = b("body"),
            t = b(this).data("ui-draggable").options;
          e.css("cursor") && (t._cursor = e.css("cursor")),
            e.css("cursor", t.cursor);
        },
        stop: function () {
          var e = b(this).data("ui-draggable").options;
          e._cursor && b("body").css("cursor", e._cursor);
        },
      }),
      b.ui.plugin.add("draggable", "opacity", {
        start: function (e, t) {
          var n = b(t.helper),
            i = b(this).data("ui-draggable").options;
          n.css("opacity") && (i._opacity = n.css("opacity")),
            n.css("opacity", i.opacity);
        },
        stop: function (e, t) {
          var n = b(this).data("ui-draggable").options;
          n._opacity && b(t.helper).css("opacity", n._opacity);
        },
      }),
      b.ui.plugin.add("draggable", "scroll", {
        start: function () {
          var e = b(this).data("ui-draggable");
          e.scrollParent[0] !== document &&
            "HTML" !== e.scrollParent[0].tagName &&
            (e.overflowOffset = e.scrollParent.offset());
        },
        drag: function (e) {
          var t = b(this).data("ui-draggable"),
            n = t.options,
            i = !1;
          t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName
            ? ((n.axis && "x" === n.axis) ||
                (t.overflowOffset.top +
                  t.scrollParent[0].offsetHeight -
                  e.pageY <
                n.scrollSensitivity
                  ? (t.scrollParent[0].scrollTop = i =
                      t.scrollParent[0].scrollTop + n.scrollSpeed)
                  : e.pageY - t.overflowOffset.top < n.scrollSensitivity &&
                    (t.scrollParent[0].scrollTop = i =
                      t.scrollParent[0].scrollTop - n.scrollSpeed)),
              (n.axis && "y" === n.axis) ||
                (t.overflowOffset.left +
                  t.scrollParent[0].offsetWidth -
                  e.pageX <
                n.scrollSensitivity
                  ? (t.scrollParent[0].scrollLeft = i =
                      t.scrollParent[0].scrollLeft + n.scrollSpeed)
                  : e.pageX - t.overflowOffset.left < n.scrollSensitivity &&
                    (t.scrollParent[0].scrollLeft = i =
                      t.scrollParent[0].scrollLeft - n.scrollSpeed)))
            : ((n.axis && "x" === n.axis) ||
                (e.pageY - b(document).scrollTop() < n.scrollSensitivity
                  ? (i = b(document).scrollTop(
                      b(document).scrollTop() - n.scrollSpeed
                    ))
                  : b(window).height() - (e.pageY - b(document).scrollTop()) <
                      n.scrollSensitivity &&
                    (i = b(document).scrollTop(
                      b(document).scrollTop() + n.scrollSpeed
                    ))),
              (n.axis && "y" === n.axis) ||
                (e.pageX - b(document).scrollLeft() < n.scrollSensitivity
                  ? (i = b(document).scrollLeft(
                      b(document).scrollLeft() - n.scrollSpeed
                    ))
                  : b(window).width() - (e.pageX - b(document).scrollLeft()) <
                      n.scrollSensitivity &&
                    (i = b(document).scrollLeft(
                      b(document).scrollLeft() + n.scrollSpeed
                    )))),
            !1 !== i &&
              b.ui.ddmanager &&
              !n.dropBehaviour &&
              b.ui.ddmanager.prepareOffsets(t, e);
        },
      }),
      b.ui.plugin.add("draggable", "snap", {
        start: function () {
          var n = b(this).data("ui-draggable"),
            e = n.options;
          (n.snapElements = []),
            b(
              e.snap.constructor !== String
                ? e.snap.items || ":data(ui-draggable)"
                : e.snap
            ).each(function () {
              var e = b(this),
                t = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: t.top,
                  left: t.left,
                });
            });
        },
        drag: function (e, t) {
          var n,
            i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            f,
            d = b(this).data("ui-draggable"),
            p = d.options,
            h = p.snapTolerance,
            g = t.offset.left,
            m = g + d.helperProportions.width,
            v = t.offset.top,
            y = v + d.helperProportions.height;
          for (u = d.snapElements.length - 1; 0 <= u; u--)
            (a = (s = d.snapElements[u].left) + d.snapElements[u].width),
              (c = (l = d.snapElements[u].top) + d.snapElements[u].height),
              m < s - h ||
              a + h < g ||
              y < l - h ||
              c + h < v ||
              !b.contains(
                d.snapElements[u].item.ownerDocument,
                d.snapElements[u].item
              )
                ? (d.snapElements[u].snapping &&
                    d.options.snap.release &&
                    d.options.snap.release.call(
                      d.element,
                      e,
                      b.extend(d._uiHash(), {
                        snapItem: d.snapElements[u].item,
                      })
                    ),
                  (d.snapElements[u].snapping = !1))
                : ("inner" !== p.snapMode &&
                    ((n = h >= Math.abs(l - y)),
                    (i = h >= Math.abs(c - v)),
                    (o = h >= Math.abs(s - m)),
                    (r = h >= Math.abs(a - g)),
                    n &&
                      (t.position.top =
                        d._convertPositionTo("relative", {
                          top: l - d.helperProportions.height,
                          left: 0,
                        }).top - d.margins.top),
                    i &&
                      (t.position.top =
                        d._convertPositionTo("relative", {
                          top: c,
                          left: 0,
                        }).top - d.margins.top),
                    o &&
                      (t.position.left =
                        d._convertPositionTo("relative", {
                          top: 0,
                          left: s - d.helperProportions.width,
                        }).left - d.margins.left),
                    r &&
                      (t.position.left =
                        d._convertPositionTo("relative", {
                          top: 0,
                          left: a,
                        }).left - d.margins.left)),
                  (f = n || i || o || r),
                  "outer" !== p.snapMode &&
                    ((n = h >= Math.abs(l - v)),
                    (i = h >= Math.abs(c - y)),
                    (o = h >= Math.abs(s - g)),
                    (r = h >= Math.abs(a - m)),
                    n &&
                      (t.position.top =
                        d._convertPositionTo("relative", {
                          top: l,
                          left: 0,
                        }).top - d.margins.top),
                    i &&
                      (t.position.top =
                        d._convertPositionTo("relative", {
                          top: c - d.helperProportions.height,
                          left: 0,
                        }).top - d.margins.top),
                    o &&
                      (t.position.left =
                        d._convertPositionTo("relative", {
                          top: 0,
                          left: s,
                        }).left - d.margins.left),
                    r &&
                      (t.position.left =
                        d._convertPositionTo("relative", {
                          top: 0,
                          left: a - d.helperProportions.width,
                        }).left - d.margins.left)),
                  !d.snapElements[u].snapping &&
                    (n || i || o || r || f) &&
                    d.options.snap.snap &&
                    d.options.snap.snap.call(
                      d.element,
                      e,
                      b.extend(d._uiHash(), {
                        snapItem: d.snapElements[u].item,
                      })
                    ),
                  (d.snapElements[u].snapping = n || i || o || r || f));
        },
      }),
      b.ui.plugin.add("draggable", "stack", {
        start: function () {
          var t,
            e = this.data("ui-draggable").options,
            n = b.makeArray(b(e.stack)).sort(function (e, t) {
              return (
                (parseInt(b(e).css("zIndex"), 10) || 0) -
                (parseInt(b(t).css("zIndex"), 10) || 0)
              );
            });
          n.length &&
            ((t = parseInt(b(n[0]).css("zIndex"), 10) || 0),
            b(n).each(function (e) {
              b(this).css("zIndex", t + e);
            }),
            this.css("zIndex", t + n.length));
        },
      }),
      b.ui.plugin.add("draggable", "zIndex", {
        start: function (e, t) {
          var n = b(t.helper),
            i = b(this).data("ui-draggable").options;
          n.css("zIndex") && (i._zIndex = n.css("zIndex")),
            n.css("zIndex", i.zIndex);
        },
        stop: function (e, t) {
          var n = b(this).data("ui-draggable").options;
          n._zIndex && b(t.helper).css("zIndex", n._zIndex);
        },
      });
  })(jQuery),
  (function (o) {
    o.fn.shake = function (e) {
      var t,
        n,
        i = {
          shakes: 2,
          distance: 4,
          duration: 250,
        };
      return (
        e && o.extend(i, e),
        this.each(function () {
          (n = o(this)),
            ((t = n.css("position")) && "static" !== t) ||
              n.css("position", "relative");
          for (var e = 1; e <= i.shakes; e++)
            n.animate(
              {
                left: -1 * i.distance,
              },
              i.duration / i.shakes / 4
            )
              .animate(
                {
                  left: i.distance,
                },
                i.duration / i.shakes / 2
              )
              .animate(
                {
                  left: 0,
                },
                i.duration / i.shakes / 4
              );
        })
      );
    };
  })(jQuery),
  (function (t) {
    if (((t.support.touch = "ontouchend" in document), t.support.touch)) {
      var n,
        e = t.ui.mouse.prototype,
        i = e._mouseInit;
      (e._touchStart = function (e) {
        !n &&
          this._mouseCapture(e.originalEvent.changedTouches[0]) &&
          ((n = !0),
          (this._touchMoved = !1),
          o(e, "mouseover"),
          o(e, "mousemove"),
          o(e, "mousedown"));
      }),
        (e._touchMove = function (e) {
          n && ((this._touchMoved = !0), o(e, "mousemove"));
        }),
        (e._touchEnd = function (e) {
          n &&
            (o(e, "mouseup"),
            o(e, "mouseout"),
            this._touchMoved || o(e, "click"),
            (n = !1));
        }),
        (e._mouseInit = function () {
          var e = this;
          e.element
            .bind("touchstart", t.proxy(e, "_touchStart"))
            .bind("touchmove", t.proxy(e, "_touchMove"))
            .bind("touchend", t.proxy(e, "_touchEnd")),
            i.call(e);
        });
    }
    function o(e, t) {
      if (!(1 < e.originalEvent.touches.length)) {
        e.preventDefault();
        var n = e.originalEvent.changedTouches[0],
          i = document.createEvent("MouseEvents");
        i.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          n.screenX,
          n.screenY,
          n.clientX,
          n.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          e.target.dispatchEvent(i);
      }
    }
  })(jQuery),
  (function (e) {
    "function" == typeof define && define.amd && define.amd.jQuery
      ? define(["jquery"], e)
      : e(jQuery);
  })(function (p) {
    var t = /\+/g;
    function h(e) {
      return e;
    }
    function g(e) {
      return decodeURIComponent(e.replace(t, " "));
    }
    function m(e) {
      0 === e.indexOf('"') &&
        (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return v.json ? JSON.parse(e) : e;
      } catch (e) {}
    }
    var v = (p.cookie = function (e, t, n) {
      if (void 0 !== t) {
        if ("number" == typeof (n = p.extend({}, v.defaults, n)).expires) {
          var i = n.expires,
            o = (n.expires = new Date());
          o.setDate(o.getDate() + i);
        }
        return (
          (t = v.json ? JSON.stringify(t) : String(t)),
          (document.cookie = [
            encodeURIComponent(e),
            "=",
            v.raw ? t : encodeURIComponent(t),
            n.expires ? "; expires=" + n.expires.toUTCString() : "",
            n.path ? "; path=" + n.path : "",
            n.domain ? "; domain=" + n.domain : "",
            n.secure ? "; secure" : "",
          ].join(""))
        );
      }
      for (
        var r = v.raw ? h : g,
          s = document.cookie.split("; "),
          a = e ? void 0 : {},
          l = 0,
          c = s.length;
        l < c;
        l++
      ) {
        var u = s[l].split("="),
          f = r(u.shift()),
          d = r(u.join("="));
        if (e && e === f) {
          a = m(d);
          break;
        }
        e || (a[f] = m(d));
      }
      return a;
    });
    (v.defaults = {}),
      (p.removeCookie = function (e, t) {
        return (
          void 0 !== p.cookie(e) &&
          (p.cookie(
            e,
            "",
            p.extend(t, {
              expires: -1,
            })
          ),
          !0)
        );
      });
  }),
  (function (e) {
    "console" in e ||
      (e.console = {
        error: function () {},
        warn: function () {},
        log: function () {},
      });
  })(window);
var sprintf = function (e) {
  if ("string" != typeof e) {
    for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
    return t.join(" ");
  }
  n = 1;
  var i = arguments,
    o = i.length;
  return String(e).replace(/%[sdj%]/g, function (e) {
    if ("%%" === e) return "%";
    if (o <= n) return e;
    switch (e) {
      case "%s":
        return String(i[n++]);
      case "%d":
        return Number(i[n++]);
      case "%j":
        try {
          return JSON.stringify(i[n++]);
        } catch (e) {
          return "[Circular]";
        }
      default:
        return e;
    }
  });
};
!(function (We, Fe, e) {
  var t = Fe.getElementsByTagName("script"),
    qe = JSON.parse(t[t.length - 1].innerHTML).i18n,
    Re = "battleship-game.org",
    ze = i(),
    Be = (function () {
      var e = i(),
        t = Fe.documentElement.getAttribute("lang");
      if (2 == e.length) t = e;
      else if ("https:" == We.location.protocol) {
        var n = Ke().split("/");
        2 <= n.length && 2 == n[1].length && (t = n[1]);
      }
      return t;
    })();
  We.adblock = void 0 === We.adblock || !1 !== We.adblock;
  var n,
    $e =
      (We.MozWebSocket && (We.WebSocket = We.MozWebSocket),
      !!("WebSocket" in We && 2 == WebSocket.CLOSING)),
    Ue = $e,
    Xe = (function () {
      try {
        new Date().toLocaleTimeString("i");
      } catch (e) {
        return "RangeError" == e.name;
      }
      return !1;
    })(),
    Ye =
      ((navigator.vibrate =
        navigator.vibrate ||
        navigator.webkitVibrate ||
        navigator.mozVibrate ||
        navigator.msVibrate),
      !!navigator.vibrate),
    Je =
      (((n = Fe.createElement("test")).style.cssText = "pointer-events:auto"),
      "auto" === n.style.pointerEvents),
    Ve = We.chrome,
    Qe = function (t, n) {
      n = n || {};
      var i = function () {
          return We.yaCounter20587900;
        },
        e = function () {
          var e = i();
          e && e.reachGoal(t, n);
        };
      i() ? e() : $(We).on("load", e);
    };
  function i() {
    var e = "",
      t = We.location.host.split(".");
    return 2 < t.length && (e = t[0]), e;
  }
  function Ke() {
    var e = We.location.pathname;
    return 0 != e.indexOf("/") && (e = "/" + e), e;
  }
  function Ge() {
    var e = "http";
    return "https:" == We.location.protocol && (e += "s"), e;
  }
  jQuery(function (h) {
    var u,
      f,
      d,
      t,
      n,
      p,
      i,
      r,
      s,
      g = "battleship__",
      a = {},
      o = 0,
      l = 10,
      m = 0,
      v = 5,
      c = {},
      y = !1,
      b = !0,
      x = [],
      _ = qe.title,
      w = !1,
      C = !1,
      k = !1,
      T = !1,
      N = h(".battlefield"),
      E = N.filter(".battlefield__self"),
      S = N.filter(".battlefield__rival"),
      D = {
        height: 10,
        width: 10,
      },
      P = {
        FREE: 0,
        BUSY: 1,
      },
      A = -1 != location.pathname.indexOf("/classic"),
      L = [
        {
          size: 4,
          count: 1,
        },
        {
          size: 3,
          count: 2,
        },
        {
          size: 2,
          count: 3,
        },
        {
          size: 1,
          count: 4,
        },
      ];
    A &&
      (L = [
        {
          size: 5,
          count: 1,
        },
        {
          size: 4,
          count: 1,
        },
        {
          size: 3,
          count: 2,
        },
        {
          size: 2,
          count: 1,
        },
      ]);
    var j,
      H,
      O = [],
      M = {
        HIDDEN: -1,
        WOUNDED: 0,
        KILLED: 1,
      },
      I = {
        INITIALIZED: -3,
        PROCESSED: -2,
        MISSED: -1,
        WOUNDED: 0,
        KILLED: 1,
      },
      W = {
        HIDDEN: 0,
        FOUNDED: 1,
      },
      F = [
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
      ],
      q = [
        [-1, 1],
        [1, 1],
        [1, -1],
        [-1, -1],
      ],
      R = qe.letters.split(","),
      z = [],
      B = [],
      $ = [],
      U = [],
      X = 0;
    function Y() {
      var e,
        t,
        n = [],
        i = [];
      ($ = []), N.find(".battlefield-table-placeholder").html("");
      for (var o = 0; o < D.height; o++, i = []) {
        (U[o] = []), (z[o] = []), (B[o] = []);
        for (var r = 0; r < D.width; r++)
          (t = "&#160;"),
            0 === r &&
              (t += '<div class="marker marker__row">' + (o + 1) + "</div>"),
            0 === o &&
              (t += '<div class="marker marker__col">' + R[r] + "</div>"),
            i.push(
              '<td class="battlefield-cell battlefield-cell__empty"><div class="battlefield-cell-content" data-y="' +
                o +
                '" data-x="' +
                r +
                '" ><span class="z"></span>' +
                t +
                "</div></td>"
            ),
            (U[o][r] = P.FREE),
            (z[o][r] = I.INITIALIZED),
            (B[o][r] = I.INITIALIZED);
        n.push('<tr class="battlefield-row">' + i.join("") + "</tr>");
      }
      (e = '<table class="battlefield-table">' + n.join("") + "</table>"),
        N.find(".battlefield-table-placeholder").html(e);
    }
    function J(e) {
      for (var t = [], n = 0; n < $.length; n++)
        if ($[n].id != e) t.push($[n]);
        else
          for (var i, o = $[n].coords, r = 0; r < o.length; r++)
            (i = o[r]), (U[i.y][i.x] = P.FREE);
      $ = t;
    }
    function V(e, t, n, i, o, r, s) {
      i = "h" == i ? "h" : "v";
      var a,
        l,
        c = e,
        u = t,
        f = 0;
      s = s || ne;
      for (
        var d = {
            id: r || Ie(),
            state: M.HIDDEN,
            y: e,
            x: t,
            len: n,
            pos: i,
            coords: [],
          },
          p = 0;
        p < n;
        p++
      )
        (l = "h" == i ? ((a = c), u + p) : ((a = c + p), u)),
          o && s(a, l) && f++,
          o ||
            ((U[a][l] = P.BUSY),
            d.coords.push({
              y: a,
              x: l,
              state: W.HIDDEN,
            }));
      return o ? (o ? f === n : void 0) : ($.push(d), d.id);
    }
    function Q() {
      O.length &&
        (function e(t) {
          t = parseInt(t, 10);
          var n = Me(0, D.height - 1),
            i = Me(0, D.width - 1),
            o = 0 === Me(0, 1) ? "h" : "v";
          V(n, i, t, o, !0) ? (V(n, i, t, o), Q()) : e(t);
        })(O.shift());
    }
    function K() {
      O = [];
      for (var e = 0; e < L.length; e++)
        for (var t = L[e], n = 0; n < t.count; n++) O.push(t.size);
      Q();
    }
    function G(e) {
      if (!e) {
        var t = "ships__" + (A ? "classic" : "default");
        "undefined" != typeof localStorage &&
          void 0 !== localStorage[t] &&
          "" != localStorage[t] &&
          (e = JSON.parse(localStorage[t]));
      }
      if (e) {
        if (
          !(function (e) {
            for (var t = {}, n = 0; n < L.length; n++) {
              var i = L[n];
              t[i.size] = i.count;
            }
            for (n = 0; n < e.length; n++) t[e[n].length]--;
            for (var o in t) if (0 != t[o]) return !1;
            return !0;
          })(e)
        )
          return void K();
        for (var n, i, o, r, s, a = 0; a < e.length; a++)
          (n = (s = e[a])[0].y),
            (i = s[0].x),
            (r = "h"),
            1 < (o = s.length) && s[0].x === s[1].x && (r = "v"),
            V(n, i, o, r);
      } else K();
    }
    function Z(e, t) {
      return !!U[e][t] == P.BUSY;
    }
    function ee(e, t) {
      return 0 <= e && e < D.height && 0 <= t && t < D.width;
    }
    function te(e, t) {
      return !(function (e, t) {
        var n, i;
        for (var o in F)
          if (ee((n = e + F[o][0]), (i = t + F[o][1])) && Z(n, i)) return !0;
        return !1;
      })(e, t);
    }
    function ne(e, t) {
      return ee(e, t) && ee((n = e), (i = t)) && !Z(n, i) && te(e, t);
      var n, i;
    }
    function ie(e, t, n, i) {
      if (Oe(a.shoothint)) {
        var o = n.find(
          "tr:nth-child(" + (e + 1) + ") td:nth-child(" + (t + 1) + ")"
        );
        return (
          !(!o.length || !o.is(".battlefield-cell__empty")) &&
          (o
            .removeClass("battlefield-cell__empty")
            .addClass("battlefield-cell__miss"),
          i && o.addClass("battlefield-cell__miss__auto"),
          o.find(".battlefield-cell-content").unbind("click", me),
          !0)
        );
      }
    }
    function oe(e, t, n, i) {
      !(function (e, t, n) {
        for (var i in q) ie(e + q[i][0], t + q[i][1], n, !0);
      })(e, t, i);
    }
    function re(e, t, a, l) {
      var c = [];
      a[e][t] === I.KILLED &&
        (function (e, t) {
          if (
            (c.push({
              y: e,
              x: t,
            }),
            (void 0 !== a[e][t - 1] && a[e][t - 1] > I.MISSED) ||
              (void 0 !== a[e][t + 1] && a[e][t + 1] > I.MISSED))
          )
            for (var n, i = 1, o = -1, r = !1; !r; i++)
              (n = t + o * i),
                "undefined" != a[e][n] && a[e][n] > I.MISSED
                  ? c.push({
                      y: e,
                      x: n,
                    })
                  : o < 0
                  ? ((o = 1), (i = 0))
                  : (r = !0);
          else if (
            (void 0 !== a[e - 1] &&
              void 0 !== a[e - 1][t] &&
              a[e - 1][t] > I.MISSED) ||
            (void 0 !== a[e + 1] &&
              void 0 !== a[e + 1][t] &&
              a[e + 1][t] > I.MISSED)
          ) {
            var s;
            for (i = 1, o = -1, r = !1; !r; i++)
              void 0 !== a[(s = e + o * i)] &&
              "undefined" != a[s][t] &&
              a[s][t] > I.MISSED
                ? c.push({
                    y: s,
                    x: t,
                  })
                : o < 0
                ? ((o = 1), (i = 0))
                : (r = !0);
          }
          !(function (e) {
            for (var t, n = 0; n < e.length; n++)
              (t = e[n]),
                l
                  .find(
                    "tr:nth-child(" +
                      (t.y + 1) +
                      ") td:nth-child(" +
                      (t.x + 1) +
                      ")"
                  )
                  .addClass("battlefield-cell__done");
            if (l.is(".battlefield__rival")) {
              var i = (function (e) {
                for (var t, n, i, o = {}, r = 0, s = 0; s < e.length; s++)
                  (i = e[s]),
                    void 0 === t && void 0 === n && ((t = i.y), (n = i.x)),
                    t > i.y && (t = i.y),
                    n > i.x && (n = i.x),
                    (r += i.y),
                    i.x;
                (o.y = t),
                  (o.x = n),
                  (o.coords = e),
                  (o.len = e.length),
                  r / o.len === o.y ? (o.pos = "h") : (o.pos = "v");
                return o;
              })(e);
              pe(i.y, i.x, i.len, i.pos, l);
            }
            (function (e, t) {
              for (var n, i = 0; i < e.length; i++)
                for (var o in ((n = e[i]), F))
                  ie(n.y + F[o][0], n.x + F[o][1], t, !0);
            })(e, l),
              (function (e, t) {
                for (var n, i = e.length, o = [], r = 0; r < i; r++)
                  o.push(e[r].y + "," + e[r].x);
                if (
                  ((n = o.join(";")),
                  t.find(".battlefield-stat .ship[data-coords='" + n + "']")
                    .length)
                )
                  return;
                t.find(".battlefield-stat .ship-type__len_" + i + " .ship")
                  .filter(":not(.ship__killed)")
                  .last()
                  .attr("data-coords", n)
                  .addClass("ship__killed");
              })(e, l);
          })(c);
        })(e, t);
    }
    function se(e, t) {
      for (var n = null, i = 0; i < e.length && (n = e[i]).id !== t; i++);
      return n;
    }
    function ae(e, t) {
      for (var n in e) le(e[n], t);
      _e();
    }
    function le(e, t) {
      var n = e.coords[0];
      pe(n.y, n.x, e.len, e.pos, t, e.id), fe(e, t);
    }
    function ce(e) {
      var t = se($, e);
      t && fe(t, E);
    }
    function ue(e) {
      var t = se($, e);
      t &&
        (function (e, t) {
          for (var n, i = e.coords, o = 0; o < i.length; o++)
            (n = i[o]),
              t
                .find(
                  "tr:nth-child(" +
                    (n.y + 1) +
                    ") td:nth-child(" +
                    (n.x + 1) +
                    ")"
                )
                .removeClass("battlefield-cell__busy")
                .addClass("battlefield-cell__empty");
        })(t, E);
    }
    function fe(e, t) {
      for (var n, i = e.coords, o = 0; o < i.length; o++)
        (n = i[o]),
          t
            .find(
              "tr:nth-child(" + (n.y + 1) + ") td:nth-child(" + (n.x + 1) + ")"
            )
            .removeClass("battlefield-cell__empty")
            .addClass("battlefield-cell__busy");
    }
    function de(e, t, n) {
      n = n || "";
      var i = 1,
        o = e,
        r = {
          right: 0,
          bottom: e - 1,
        };
      "h" == t && ((i = e), (o = 1), (r.right = e - 1), (r.bottom = 0));
      return h(
        '<div data-id="' +
          n +
          '" data-length="' +
          e +
          '" data-position="' +
          t +
          '" class="ship-box ship-box__' +
          t +
          '" style="width: ' +
          2 * i +
          "em; height: " +
          2 * o +
          "em; padding-right: " +
          r.right +
          "px; padding-bottom: " +
          r.bottom +
          'px;" />'
      );
    }
    function pe(e, t, n, i, o, r) {
      var s = de(n, i, r);
      return (
        o
          .find("tr:nth-child(" + (e + 1) + ") td:nth-child(" + (t + 1) + ")")
          .find(".battlefield-cell-content")
          .append(s),
        s
      );
    }
    function he(e, t) {
      var n,
        i,
        o = [];
      for (var r in e) {
        (i = e[r].coords), (n = []);
        for (var s = 0; s < i.length; s++) {
          var a = {
            y: i[s].y,
            x: i[s].x,
          };
          t && (a = [i[s].y, i[s].x]), n.push(a);
        }
        o.push(n);
      }
      return o;
    }
    function ge(e) {
      var t = new RegExp("^" + g + "[a-zA-Z0-9]{12}$"),
        n = new RegExp("^[a-zA-Z0-9]{12}$"),
        i = "";
      return (
        (i = (e = e || "").match(t) ? e : e.match(n) ? g + e : g + Ie()),
        (We.name = i)
      );
    }
    function me() {
      var e = h(this),
        t = e.attr("data-x"),
        n = e.attr("data-y");
      S.hasClass("battlefield__processed") ||
        (function (e, t, n) {
          (e = parseInt(e, 10)),
            (t = parseInt(t, 10)),
            void 0 !== B[e] &&
              "undefined" != B[e][t] &&
              B[e][t] === I.INITIALIZED &&
              ((B[e][t] = I.PROCESSED),
              (i = n),
              S.hasClass("battlefield__processed") ||
                (S.addClass("battlefield__processed"),
                i
                  .closest(".battlefield-cell")
                  .addClass("battlefield-cell__processed")));
          var i;
          Ce(
            {
              command: "register-shoot",
              shoot: {
                y: e,
                x: t,
              },
            },
            !0,
            function (e) {
              ve(), ke(e);
            },
            function (e) {
              ve(), Ne(e);
            }
          );
        })(n, t, e);
    }
    function ve() {
      S.removeClass("battlefield__processed"),
        S.find(".battlefield-cell__processed").removeClass(
          "battlefield-cell__processed"
        );
    }
    function ye(e) {
      var t = h(".chat-state__typing");
      e
        ? t.addClass("chat-state__invisible")
        : t.removeClass("chat-state__invisible");
    }
    function be() {
      (C = !0),
        h(".body").removeClass("body__game_freeze").addClass("body__game_over");
    }
    function xe() {
      S.find(".battlefield-cell-content").bind("click", me);
      var e = he($);
      _e(e), "off" === h.cookie("websocket") && (Ue = !1);
      var t = Ke().replace(/^\/[a-z]{2}\//, "/");
      Ce(
        {
          command: "create",
          connect: 0 === t.toLowerCase().indexOf("/id") ? t.substr(3) : "",
          ships: e,
          type: A ? "classic" : "default",
        },
        !0,
        function (e) {
          ge((n = e.id)),
            h(We).bind("beforeunload", function (e) {
              if (n && !C) {
                if (!T && !k) return h(".leave").attr("data-confirm");
                Ce(
                  {
                    command: "leave",
                  },
                  !1
                );
              }
            }),
            h(We).unload(function () {
              n &&
                (w
                  ? C ||
                    (Ce(
                      {
                        command: "leave",
                      },
                      !1
                    ),
                    Qe("leaveWhilePlaying", {
                      exit: T ? "click" : "close",
                    }))
                  : Qe("leaveWithoutPlaying", {
                      exit: T ? "click" : "close",
                    }));
            }),
            h(We).bind("online", function () {
              Qe("online"), h(".body").removeClass("body__offline");
            }),
            h(We).bind("offline", function () {
              h(".body").addClass("body__offline");
            }),
            ke(e);
        },
        Ne
      );
    }
    function _e(e) {
      if (((e = e || he($)), "undefined" != typeof localStorage))
        try {
          var t = "ships__" + (A ? "classic" : "default"),
            n = JSON.stringify(e);
          localStorage[t] = n;
        } catch (e) {}
    }
    function we() {
      void 0 !== f && Ce(f.obj, f.async, f.callback, f.fallback);
    }
    function Ce(e, t, n, i) {
      if (((n = n || function () {}), (i = i || function () {}), !C)) {
        var o = ge(We.name).substr(g.length);
        f = {
          obj: e,
          async: t,
          callback: n,
          fallback: i,
        };
        var r = JSON.stringify(e);
        if (Ue) {
          var s = (function () {
              "https:" == We.location.protocol && "s";
              return "wss";
            })(),
            a = Re;
          "ws" == s && (a = (ze || Be) + "." + a);
          var l = WebSocket.OPEN || 1,
            c = s + "://" + a + "/ws/" + o;
          if (u && u.socket && u.socket.readyState === l) {
            if (u.socket.url === c)
              return (u.callback = n), (u.fallback = i), void u.socket.send(r);
            try {
              (u.socket.onclose = null),
                (u.socket.onerror = null),
                u.socket && u.socket.readyState === l && u.socket.close();
            } catch (e) {}
          }
          ((u = {
            socket: new WebSocket(c),
            callback: n,
            fallback: i,
          }).socket.onopen = function (e) {
            this.send(r);
          }),
            (u.socket.onerror = function (e) {
              this.readyState === l && this.close(), Qe("webSocketError");
            }),
            (u.socket.onclose = function (e) {
              if (void 0 !== e.code && 1e3 != e.code) {
                if (void 0 !== navigator.onLine && !navigator.onLine)
                  return void this.fallback.call(We, {
                    status: 0,
                  });
                this.fallback.call(We, {
                  status: 502,
                }),
                  v <= ++m &&
                    ((Ue = !1),
                    h.cookie("websocket", "off", {
                      expires: 1,
                      path: "/",
                      domain: "." + Re,
                    }),
                    Qe("fromWebSocketToLongPolling")),
                  Qe("webSocketClose");
              }
            }.bind(u)),
            (u.socket.onmessage = function (e) {
              var t = JSON.parse(e.data);
              !(function e() {
                if ((clearTimeout(p), !C)) {
                  var t = 15e3;
                  void 0 === navigator.onLine || navigator.onLine || (t = 1e3),
                    (p = setTimeout(function () {
                      Ce(
                        {
                          command: "ping",
                        },
                        !0,
                        ke,
                        Ne
                      ),
                        e();
                    }, t));
                }
              })(),
                200 != t.status
                  ? this.fallback.call(We, t)
                  : this.callback.call(We, t);
            }.bind(u));
        } else
          (t = void 0 === t || !!t),
            u && 4 != u.readyState && u.abort && u.abort(),
            clearTimeout(d),
            (u = h.ajax({
              cache: !1,
              type: "post",
              dataType: "json",
              contentType: "application/json",
              url: "/api/" + o,
              data: r,
              async: t,
              error: i,
              success: n,
            })),
            (d = setTimeout(function () {
              u.abort(), we();
            }, 25e3));
      }
    }
    function ke(e) {
      var t = !1,
        n = (function (e, t) {
          var n,
            i,
            o,
            r = e.match(/%plural\([^%]+\)%/g);
          if (r && r.length)
            for (var s = 0; s < r.length; s++) {
              var a = r[s],
                l = a.match(/[^()|%\]]+/g),
                c = l[1],
                u = l.slice(2),
                f =
                  ((n = c),
                  (o = t),
                  (i = u) instanceof String && (i = i.split("|")),
                  i[
                    {
                      ca: function (e) {
                        return Number(1 != e);
                      },
                      cs: function (e) {
                        return Number(1 == e ? 0 : 2 <= e && e <= 4 ? 1 : 2);
                      },
                      da: function (e) {
                        return Number(1 != e);
                      },
                      de: function (e) {
                        return Number(1 != e);
                      },
                      el: function (e) {
                        return Number(1 != e);
                      },
                      en: function (e) {
                        return Number(1 != e);
                      },
                      es: function (e) {
                        return Number(1 != e);
                      },
                      fi: function (e) {
                        return Number(1 != e);
                      },
                      fr: function (e) {
                        return Number(1 < e);
                      },
                      hu: function (e) {
                        return Number(1 != e);
                      },
                      it: function (e) {
                        return Number(1 != e);
                      },
                      nl: function (e) {
                        return Number(1 != e);
                      },
                      pl: function (e) {
                        return Number(
                          1 == e
                            ? 0
                            : 2 <= e % 10 &&
                              e % 10 <= 4 &&
                              (e % 100 < 10 || 20 <= e % 100)
                            ? 1
                            : 2
                        );
                      },
                      pt: function (e) {
                        return Number(1 != e);
                      },
                      ru: function (e) {
                        return Number(
                          e % 10 == 1 && e % 100 != 11
                            ? 0
                            : 2 <= e % 10 &&
                              e % 10 <= 4 &&
                              (e % 100 < 10 || 20 <= e % 100)
                            ? 1
                            : 2
                        );
                      },
                      sr: function (e) {
                        return Number(
                          e % 10 == 1 && e % 100 != 11
                            ? 0
                            : 2 <= e % 10 &&
                              e % 10 <= 4 &&
                              (e % 100 < 10 || 20 <= e % 100)
                            ? 1
                            : 2
                        );
                      },
                      sv: function (e) {
                        return Number(1 != e);
                      },
                      uk: function (e) {
                        return Number(
                          e % 10 == 1 && e % 100 != 11
                            ? 0
                            : 2 <= e % 10 &&
                              e % 10 <= 4 &&
                              (e % 100 < 10 || 20 <= e % 100)
                            ? 1
                            : 2
                        );
                      },
                      zh: function (e) {
                        return 0;
                      },
                      ko: function (e) {
                        return Number(1 != e);
                      },
                      ja: function (e) {
                        return 0;
                      },
                      be: function (e) {
                        return Number(
                          e % 10 == 1 && e % 100 != 11
                            ? 0
                            : 2 <= e % 10 &&
                              e % 10 <= 4 &&
                              (e % 100 < 10 || 20 <= e % 100)
                            ? 1
                            : 2
                        );
                      },
                      lv: function (e) {
                        return Number(
                          e % 10 == 1 && e % 100 != 11 ? 0 : 0 != e ? 1 : 2
                        );
                      },
                      tr: function (e) {
                        return Number(1 < e);
                      },
                    }[o](n)
                  ]);
              e = e.replace(a, f);
            }
          return e;
        })(sprintf(qe.whoIsOnline, e.online, e.online), qe.lang);
      if ((e.online && h(".online_count").text(n), e.events)) {
        e.events.sort(function (e, t) {
          return e.id - t.id;
        });
        var i = e.events.shift();
        !(function (e) {
          var t = e.name + "," + e.id;
          if (void 0 !== c[t]) return;
          {
            if (
              ((c[t] = !1),
              (function e() {
                clearTimeout(r),
                  b
                    ? ((Fe.title = s.replace(/\s/g, " ")),
                      setTimeout(function () {
                        Fe.title = s;
                      }, 250))
                    : (w && (Fe.title = Fe.title == s ? "..." : s),
                      (r = setTimeout(e, 1e3)));
              })(),
              C)
            )
              return;
            h(".body__game_over").removeClass("body__game_over");
          }
          var n = e.name,
            i = e.payload,
            o = !0;
          switch (n) {
            case "rival-leave":
              Qe("rivalLeave"), be(), k && (o = !1);
              break;
            case "waiting-for-rival":
              h(".leave").removeClass("none"),
                h(".battlefield-start-hint").removeClass("none"),
                E.addClass("battlefield__wait");
              break;
            case "chat-message-typing":
              ye();
              break;
            case "chat-message-stop-typing":
              ye(!0);
              break;
            case "chat-message":
              "rival" == i.owner && (ye(!0), Ae("chat")),
                (function (e) {
                  var t,
                    n = h(".chat-message__holder");
                  if (Xe)
                    t = new Date(e.date).toLocaleTimeString(
                      navigator.language,
                      {
                        hour12: !1,
                      }
                    );
                  else {
                    var i = new Date(e.date).toLocaleTimeString();
                    i = i.toUpperCase();
                    var o = (t = i.match(/\d\d?:\d\d:\d\d/)[0]).split(":"),
                      r = o[0],
                      s = o[1],
                      a = o[2];
                    -1 != i.indexOf("AM") && 12 == r && (r = 0),
                      -1 != i.indexOf("PM") &&
                        r < 12 &&
                        (r = parseInt(r, 10) + 12),
                      r < 10 && (r = "0" + r),
                      (t = [r, s, a].join(":"));
                  }
                  h(
                    '<li class="chat-message chat-message__' +
                      e.owner +
                      '"><span class="chat-message-time">' +
                      t +
                      '</span> <span class="chat-message-text">' +
                      ((l = e.message), h("<div />").text(l).html()) +
                      "</span></li>"
                  ).insertAfter(n),
                    h(We).trigger("resize");
                  var l;
                })(i);
              break;
            case "game-started-move-off":
            case "game-started-move-on":
              Ae("game_started"),
                h(".chat-gap").removeClass("none"),
                h(".leave").removeClass("none"),
                h(".battlefield-start").addClass("none"),
                h(".battlefield-stat").removeClass("none"),
                S.removeClass("none"),
                (k = C = !(w = !0)),
                /-on$/.test(n)
                  ? (S.removeClass("battlefield__wait"),
                    E.addClass("battlefield__wait"))
                  : (S.addClass("battlefield__wait"),
                    E.removeClass("battlefield__wait")),
                (function () {
                  for (var e = [], t = 0; t < L.length; t++) {
                    for (var n = L[t], i = [], o = 0; o < n.count; o++) {
                      for (var r = [], s = 0; s < n.size; s++)
                        r.push('<span class="ship-part"></span>');
                      i.push('<span class="ship">' + r.join("") + "</span>");
                    }
                    e.push(
                      '<div class="ship-type ship-type__len_' +
                        n.size +
                        '">' +
                        i.join("") +
                        "</div>"
                    );
                  }
                  h(".battlefield-stat")
                    .html('<div class="ship-types">' + e.join("") + "</div>")
                    .removeClass("none");
                })();
              break;
            case "move-on":
              ve(),
                S.removeClass("battlefield__wait"),
                E.addClass("battlefield__wait"),
                De(i);
              break;
            case "move-off":
              S.addClass("battlefield__wait"),
                E.removeClass("battlefield__wait"),
                De(i);
              break;
            case "game-over-win":
              !(function () {
                if ("undefined" != typeof localStorage)
                  try {
                    var e =
                        "ships__" + (A ? "classic" : "default") + "__archive",
                      t = JSON.stringify(he($, !0)),
                      n = localStorage[e] ? JSON.parse(localStorage[e]) : [];
                    -1 == n.indexOf(t) && n.push(t),
                      (localStorage[e] = JSON.stringify(n));
                  } catch (e) {}
              })();
            case "game-over-lose":
              Ae(n.replace(/game-over-/, "")),
                De(i),
                (function (e) {
                  if (void 0 !== e)
                    for (var t, n, i = 0; i < e.length; i++)
                      (t = e[i].y),
                        (n = e[i].x),
                        S.find(
                          "tr:nth-child(" +
                            (t + 1) +
                            ") td:nth-child(" +
                            (n + 1) +
                            ")"
                        ).addClass("battlefield-cell__undiscovered");
                })(i.undiscovered),
                Qe("gameOver"),
                (k = !0),
                h(".body").addClass("body__game_freeze");
          }
          o && Se(n);
          c[t] = !0;
        })(i),
          Te(i),
          (t = !0);
      }
      t || Te();
    }
    function Te(e) {
      if (n && !C) {
        var t = {
          command: "waiting-for-event",
        };
        void 0 !== e && (t.reid = e.id), Ce(t, !0, ke, Ne);
      }
    }
    function Ne(e) {
      if (!C)
        switch (e.status) {
          case 0:
            setTimeout(function () {
              ((!Ue && 0 === u.readyState) ||
                (Ue && u.socket && u.socket.readyState == u.socket.CLOSED)) &&
                (Qe("reconnect"), we());
            }, 1e3);
            break;
          case 501:
            Qe("gameError"), Se("game-error"), be();
            break;
          case 502:
            clearTimeout(t),
              o < l
                ? (t = setTimeout(function () {
                    o++, we();
                  }, 500))
                : (Qe("serverError"), Se("server-error"), be());
            break;
          case 408:
          case 504:
            Te();
            break;
          default:
            Te();
        }
    }
    function Ee(e) {
      Ye && navigator.vibrate(e);
    }
    function Se(e, t) {
      var n = h(".notification__" + e);
      (n.length || t) &&
        (h(".notification").addClass("none"),
        n.removeClass("none"),
        (function (e) {
          if (!Oe(a.notifications)) return;
          if (!b && Notification && "granted" == Notification.permission) {
            var t = new Notification(_, {
              body: e,
            });
            x.push(t);
          }
        })(n.find(".notification-message").text()));
    }
    function De(e) {
      if (void 0 !== e) {
        var t = !1,
          n = E,
          i = z,
          o = e["register-self-shoot"] || e["register-rival-shoot"],
          r = "battlefield-cell__miss";
        if (
          (void 0 !== e["register-self-shoot"] && (t = !0),
          o && "undefined" != o.state)
        ) {
          if (
            (o.state >= I.WOUNDED && (r = "battlefield-cell__hit"),
            o.state === I.KILLED && (r += " battlefield-cell__done"),
            t && ((n = S), (i = B)),
            n
              .find(".battlefield-cell__last")
              .removeClass("battlefield-cell__last"),
            (r += " battlefield-cell__last"),
            i[o.y][o.x] >= I.MISSED)
          )
            return;
          i[o.y][o.x] = o.state;
          var s = n.find(
            "tr:nth-child(" + (o.y + 1) + ") td:nth-child(" + (o.x + 1) + ")"
          );
          s.removeClass("battlefield-cell__empty").addClass(r),
            t &&
              (s.find(".battlefield-cell-content").unbind("click", me), ve()),
            o.state === I.KILLED
              ? (re(o.y, o.x, i, n), Ee(250))
              : o.state === I.WOUNDED && (oe(o.y, o.x, 0, n), Ee(100)),
            Ae(
              "shoot_" +
                (function (e) {
                  for (var t in I) if (e === I[t]) return t;
                  return !1;
                })(o.state).toLowerCase()
            );
        }
      }
    }
    function Pe() {
      try {
        if ("undefined" == typeof Audio) return !1;
        for (
          var e, t = new Audio(), n = ["ogg", "mp3"], i = 0;
          i < n.length;
          i++
        )
          if (t.canPlayType("audio/" + n[i])) {
            e = n[i];
            break;
          }
        if (void 0 !== e) return e;
      } catch (e) {}
      return !1;
    }
    function Ae(e) {
      if (Oe(a.sound))
        try {
          var t,
            n = h(".sound__" + e),
            i = We.navigator.userAgent;
          (t = "game_started" == e || "chat" == e ? n : n.clone()),
            /(ipad|iphone)/i.test(i) ? n.get(0).play() : t.get(0).play();
        } catch (e) {}
    }
    function Le() {
      for (var e = 0; e < x.length; e++) x[e].close();
      x = [];
    }
    function je() {
      var e = h(this);
      if (!e.closest(".port").length) {
        var t = e.css("height"),
          n = e.css("width");
        if (t !== n) {
          var i = e.closest(".battlefield-cell-content"),
            o = parseInt(i.attr("data-y"), 10),
            r = parseInt(i.attr("data-x"), 10),
            s = parseInt(e.attr("data-length"), 10),
            a = e.attr("data-position"),
            l = "v" == a ? "h" : "v",
            c = e.attr("data-id");
          if ((ue(c), J(c), V(o, r, s, l, !0))) {
            var u = e.css("padding-right"),
              f = e.css("padding-bottom");
            e.css({
              height: n,
              width: t,
              paddingRight: f,
              paddingBottom: u,
            });
            var d = "v";
            parseInt(t, 10) > parseInt(n, 10) && (d = "h"),
              e
                .removeClass("ship-box__h ship-box__v")
                .addClass("ship-box__" + d),
              e.attr("data-position", d),
              V(o, r, s, l, !1, c),
              ce(c);
          } else {
            V(o, r, s, a, !1, c), ce(c);
            var p = {
              duration: 250,
            };
            (e = h(".ship-box[data-id=" + c + "]")).addClass(
              "ship-box__placeholder_error"
            ),
              clearTimeout(X),
              e.stop(!0).shake(p),
              (X = setTimeout(function () {
                e.removeClass("ship-box__placeholder_error");
              }, p.duration));
          }
        }
      }
    }
    function He() {
      function o(e) {
        var t = e.closest(".battlefield-cell-content");
        if (t.length) {
          var n = parseInt(t.attr("data-y"), 10),
            i = parseInt(t.attr("data-x"), 10),
            o = e.attr("data-id");
          V(
            n,
            i,
            parseInt(e.attr("data-length"), 10),
            e.attr("data-position"),
            !1,
            o
          ),
            ce(o);
        }
      }
      h(".ship-box:not(.ship-box__draggable)").draggable({
        create: function (e, t) {
          h(this).addClass("ship-box__draggable"), h(this).bind("click", je);
        },
        start: function (e, t) {
          var n = t.helper.attr("data-id");
          ue(n), J(n);
        },
        stop: function (e, t) {
          var n = t.helper;
          n.removeClass("ship-box__transparent");
          var i = h(".ship-box__placeholder");
          i.length
            ? (i.before(n),
              i.remove(),
              o(n),
              h(".placeships-variant__hands_inactive").removeClass(
                "placeships-variant__hands_inactive"
              ),
              setTimeout(function () {
                h(".port .ship-box").length ||
                  (h(".battlefields").removeClass("battlefields__handly"),
                  _e(),
                  h(".battlefield-start").removeClass("none"));
              }, 500))
            : o(n),
            n.css({
              left: 0,
              top: 0,
              margin: "-2px",
            });
        },
        drag: function (e, t) {
          var o = h(this),
            r = o.clone(!1);
          r.removeClass(
            "ui-draggable ui-draggable-dragging ship-box__transparent"
          )
            .addClass("ship-box__placeholder")
            .css({
              left: 0,
              top: 0,
              margin: "-2px",
            });
          var n = h(".battlefield__self .battlefield-cell-content");
          n.find(".ship-box__placeholder").remove();
          var i,
            s = {
              height: (i = h(".battlefield-cell-content").last()).height(),
              width: i.width(),
            },
            a = t.offset.top + s.height / 2,
            l = t.offset.left + s.width / 2;
          o.removeClass("ship-box__transparent"),
            n.each(function () {
              var e = h(this),
                t = e.offset(),
                n = e.width(),
                i = e.height();
              if (
                l >= t.left &&
                l <= t.left + n &&
                a >= t.top &&
                a <= t.top + i
              )
                return (
                  V(
                    parseInt(e.attr("data-y"), 10),
                    parseInt(e.attr("data-x"), 10),
                    parseInt(o.attr("data-length"), 10),
                    o.attr("data-position"),
                    !0,
                    void 0
                  ) && (e.append(r), o.addClass("ship-box__transparent")),
                  !1
                );
            });
        },
      });
    }
    function Oe(e) {
      return !/^(off|false|undefined|null|0)?$/i.test(e + "");
    }
    function Me(e, t) {
      return Math.floor((t - e + 1) * Math.random() + e);
    }
    function Ie() {
      for (
        var e,
          t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          n = "",
          i = 0;
        i < 12;
        i++
      )
        (e = Math.floor(Math.random() * t.length)),
          (n += t.substring(e, e + 1));
      return n;
    }
    !(function () {
      var e, t;
      function n() {
        $e &&
          (Qe("supportWebSocket"),
          "off" == h.cookie("websocket") && Qe("websocketOff")),
          Ye && Qe("supportVibrate");
      }
      Je && h(".body").addClass("body__with-pointerevents"),
        2 == Be.length &&
          h.cookie("lang", Be, {
            expires: 365,
            path: "/",
            domain: "." + Re,
          }),
        (function () {
          var e = "";
          "https" == Ge() && (e = "/" + Be);
          var t = Ke().replace(/^\/[a-z]{2}\//, "/"),
            n = h(".battlefield-start-choose_rival-variant-link");
          n.attr("href", e + "/");
          var i = h(".battlefield-start-choose_rival-variant-link__connect");
          0 === t.toLowerCase().indexOf("/id")
            ? i.attr("href", e + t)
            : i.attr("href", e + "/id" + Me(1e7, 99999999));
        })(),
        h(".battlefield-start-choose_rival-variant").removeClass(
          "battlefield-start-choose_rival-variant__active"
        ),
        h(".battlefield-start-choose_rival-variant-link").each(function () {
          if (
            h(this).attr("href") == Ke() &&
            (h(this)
              .closest(".battlefield-start-choose_rival-variant")
              .addClass("battlefield-start-choose_rival-variant__active"),
            h(this).is(".battlefield-start-choose_rival-variant-link__connect"))
          ) {
            var e = h(this)
              .closest(".battlefield-start-choose_rival-variant")
              .find(".battlefield-start-choose_rival-variant-url-input");
            e.val(location.href).attr("data-value", location.href),
              e.on("click", function () {
                h(this).trigger("select");
              }),
              e.on("keydown keyup", function (e) {
                var t = e.ctrlKey || e.metaKey;
                (t && 67 == e.keyCode) || e.preventDefault();
              }),
              e.on("touchstart", function (e) {
                h(this).trigger("focus"),
                  h(this).get(0).setSelectionRange(0, 9999);
              });
          }
        }),
        0 ==
          (e = Ke())
            .replace(/^\/[a-z]{2}\//, "/")
            .toLowerCase()
            .indexOf("/id") &&
          ((e = e.replace(/\/$/, "")),
          h(".battlefield-start-ships_types-gap").removeClass("none"),
          -1 != e.indexOf("/classic")
            ? (h(".battlefield-start-ships_type__classic").addClass(
                "battlefield-start-ships_type__active"
              ),
              h(".battlefield-start-ships_type-link").attr("href", e),
              h(
                ".battlefield-start-ships_type__default .battlefield-start-ships_type-link"
              ).attr("href", e.replace(/\/classic\/?/, "")))
            : (h(".battlefield-start-ships_type__default").addClass(
                "battlefield-start-ships_type__active"
              ),
              h(".battlefield-start-ships_type-link").attr("href", e),
              h(
                ".battlefield-start-ships_type__classic .battlefield-start-ships_type-link"
              ).attr("href", e + "/classic"))),
        h(".setting").each(function () {
          var t = h(this).attr("data-name"),
            n = "setting__" + t,
            i = !1,
            e = h("#" + n);
          h.cookie(n) && e.attr("checked", "on" == h.cookie(n)),
            e.click(function () {
              a[t] = h(this).is(":checked") ? "on" : "off";
              var e = "." + Re;
              "notifications" == t &&
                ("https" == Ge() ? ((e = Re), (i = !0)) : (e = ze + "." + Re)),
                h.cookie(n, a[t], {
                  expires: 365,
                  path: "/",
                  domain: e,
                  secure: i,
                }),
                "sound" == t && "on" == a[t] && Ae("click"),
                "notifications" == t &&
                  "on" == a[t] &&
                  Oe(a.notifications) &&
                  "denied" != Notification.permission &&
                  Notification.requestPermission(function (e) {
                    "permission" in Notification ||
                      (Notification.permission = e);
                  }),
                "compactchat" == t &&
                  ("on" == a[t]
                    ? h(".chat-gap").addClass("chat-gap__compact")
                    : h(".chat-gap").removeClass("chat-gap__compact"),
                  h(We).trigger("resize"));
            }),
            (a[t] = e.is(":checked"));
        }),
        Pe() && h(".setting__sound").removeClass("none"),
        Oe(a.compactchat) &&
          (h(".chat-gap").addClass("chat-gap__compact"),
          h(We).trigger("resize")),
        (function () {
          if ("Notification" in We) {
            var e = h(".setting__notifications");
            e.removeClass("none"),
              Notification &&
                "denied" == Notification.permission &&
                (e.find(".setting-input").prop("disabled", !0),
                e.attr("title", e.attr("data-title-blocked"))),
              Notification &&
                "default" == Notification.permission &&
                Oe(a.notifications) &&
                ((a.notifications = "off"),
                e.find(".setting-input").prop("checked", !1));
          }
        })(),
        (function () {
          function e(e) {
            Y(),
              e ? K() : G(),
              ae($, E),
              He(),
              h(".battlefields").removeClass("battlefields__handly"),
              h(".battlefield-start").removeClass("none");
          }
          function t() {
            Y(),
              h(".battlefields").addClass("battlefields__handly"),
              h(".battlefield-start").addClass("none"),
              (function () {
                var e = h(".port-lines");
                e.html("");
                for (var t = 0; t < L.length; t++) {
                  for (
                    var n = L[t],
                      i = h('<div class="port-line clearfix" />'),
                      o = 0;
                    o < n.count;
                    o++
                  ) {
                    var r = h('<div class="port-ship" />'),
                      s = de(n.size, "h", Ie());
                    r.attr("style", s.attr("style")).append(s), i.append(r);
                  }
                  e.append(i);
                }
              })(),
              He();
          }
          h(".placeships-variant__hands").click(function () {
            t(), h(this).addClass("placeships-variant__hands_inactive");
          }),
            h(".placeships-variant__randomly").click(function () {
              e(!0),
                h(".placeships-variant__hands_inactive").removeClass(
                  "placeships-variant__hands_inactive"
                );
            }),
            e(),
            h(".battlefield-start-button").on("click", function e() {
              var t;
              h(this).off("click", e),
                h(this).addClass("battlefield-start-button__disabled"),
                h(".placeships").addClass("none"),
                (t = h(".ship-box__draggable")).draggable("destroy"),
                t.unbind("click"),
                t.removeClass("ship-box__draggable"),
                Se("connect-to-server"),
                n(),
                xe();
            });
        })(),
        (t = h(".chat-teletype")).bind("keydown", function (e) {
          var t;
          13 == e.keyCode
            ? ((t = h(this).val()),
              "" != (t = h.trim(t)) &&
                (Qe("chatMessage"),
                Ce(
                  {
                    command: "chat-message",
                    message: t,
                  },
                  !(y = !1),
                  ke,
                  Ne
                ),
                1) &&
                h(this).val(""))
            : y ||
              Ce(
                {
                  command: "chat-message-typing",
                },
                (y = !0),
                ke,
                Ne
              );
        }),
        t.bind("keyup blur", function (e) {
          if (y) {
            var t = "blur" == e.type ? 0 : 3e3;
            13 != e.keyCode &&
              (clearTimeout(i),
              (i = setTimeout(function () {
                Ce(
                  {
                    command: "chat-message-stop-typing",
                  },
                  !(y = !1),
                  ke,
                  Ne
                );
              }, t)));
          }
        }),
        (s = Fe.title),
        (Fe.onfocusin = function (e) {
          void 0 === e && null == event.toElement && ((b = !0), Le());
        }),
        (Fe.onfocusout = function (e) {
          void 0 === e && null == event.toElement && (b = !1);
        }),
        h(We)
          .focus(function () {
            (b = !0), Le();
          })
          .blur(function () {
            b = !1;
          }),
        (function () {
          var e = A ? "ships__classic__archive" : "ships__default__archive";
          if (
            "undefined" != typeof localStorage &&
            void 0 !== localStorage[e] &&
            "" != localStorage[e]
          ) {
            var t = JSON.parse(localStorage[e]);
            if (t.length) {
              function n() {
                h(".dock").addClass("none"),
                  h(".placeships-variant__archive").removeClass(
                    "placeships-variant__archive_inactive"
                  );
              }
              h(".placeships-variant__archive").removeClass("none"),
                t.forEach(function (e, t) {
                  for (
                    var n = JSON.parse(e),
                      i = h(
                        '<table class="dock-table" data-coords="' +
                          e +
                          '"></table>'
                      ),
                      o = 0;
                    o < D.height;
                    o++
                  ) {
                    for (var r = h("<tr></tr>"), s = 0; s < D.width; s++) {
                      var a = h('<td class="dock-table-cell"></td>');
                      0 === o &&
                        0 === s &&
                        a.html(
                          '<span class="dock-table-cell-position-gap"><span class="dock-table-cell-position">' +
                            (t + 1) +
                            ")</span></span>"
                        ),
                        r.append(a);
                    }
                    i.append(r);
                  }
                  h(".dock-sets").append(i),
                    n.forEach(function (e) {
                      e.forEach(function (e) {
                        var t = i.find(
                          "tr:nth-child(" +
                            (e[0] + 1) +
                            ") td:nth-child(" +
                            (e[1] + 1) +
                            ")"
                        );
                        t.addClass("dock-table-cell__marked");
                      });
                    });
                }),
                h(".placeships-variant__archive .placeships-variant-link").on(
                  "click",
                  function () {
                    !(function () {
                      var n, i;
                      (n = JSON.stringify(he($, !0))),
                        (i = "dock-table__current"),
                        h(".dock-table").each(function () {
                          var e = h(this).attr("data-coords"),
                            t = e === n;
                          t ? h(this).addClass(i) : h(this).removeClass(i);
                        }),
                        h(".dock").removeClass("none"),
                        h(".placeships-variant__archive").addClass(
                          "placeships-variant__archive_inactive"
                        );
                      var e = h(".battlefields");
                      e.is(".battlefields__handly") &&
                        (e.removeClass("battlefields__handly"),
                        h(".placeships-variant__hands_inactive").removeClass(
                          "placeships-variant__hands_inactive"
                        ),
                        Y(),
                        G(),
                        ae($, E),
                        h(".battlefield-start").removeClass("none"));
                    })();
                  }
                ),
                h(Fe).on("click", function (e) {
                  (h(e.target).is(".dock-closer") ||
                    (!h(e.target).closest(".dock").length &&
                      !h(e.target).closest(".placeships-variant__archive")
                        .length)) &&
                    n();
                }),
                h(".dock-table").on("click", function () {
                  var e = JSON.parse(h(this).attr("data-coords"));
                  e.forEach(function (n, e) {
                    n.forEach(function (e, t) {
                      n[t] = {
                        y: e[0],
                        x: e[1],
                      };
                    });
                  }),
                    Y(),
                    G(e),
                    ae($, E),
                    He(),
                    n(),
                    Qe("chooseShipsFromArchive");
                });
            }
          }
        })(),
        h(".restart").click(function () {
          location.reload(!0);
        }),
        h(".leave-link")
          .attr("href", location.href)
          .on("click", function (e) {
            function t(e) {
              location.reload(!0);
            }
            e.preventDefault(),
              Ce(
                {
                  command: "leave",
                },
                !(T = !0),
                t,
                t
              );
          });
    })(),
      (function () {
        try {
          var t = !1,
            n = h(".sda");
          if (!n.length) return;
          var e = n.find(".sda-block"),
            i = n.height(),
            o = parseInt(e.css("padding-top"), 10);
          function r() {
            n.removeClass("sda__fixed");
            var e = n.offset().top + i + o;
            h(We).height() > e && n.addClass("sda__fixed"),
              t || (h(".sda__vh").removeClass("sda__vh"), (t = !0));
          }
          h(We).resize(r), r();
        } catch (e) {}
      })(),
      (function () {
        var e = We.navigator.userAgent;
        if (/(ipad|iphone)/i.test(e)) {
          h(Fe).on("touchstart", function e(t) {
            var n = h(".sound:not([data-inited])").first();
            n.length
              ? (n.on("canplay", function () {
                  h(this).attr("data-inited", "yes");
                }),
                n.get(0).play(),
                n.get(0).pause())
              : h(Fe).off("touchstart", e);
          });
        }
      })(),
      Ve && h(".copyright-link__chrome").removeClass("none"),
      "https:" == We.location.protocol && h(".body").addClass("body__ssl"),
      -1 != We.location.href.indexOf("vk.com") &&
        h(".body").addClass("body__vk"),
      h(".body-iframe a[href^='mailto:']").on("click", function () {
        return (We.top.location = h(this).attr("href")), !1;
      }),
      (function () {
        var i = h(".body"),
          o = "langs__opened",
          r = "body__with-" + o;
        h(".lang__selected .lang-link").on("click", function (e) {
          var t,
            n = h(e.target);
          e.preventDefault(),
            n.closest("." + o).length
              ? a()
              : (t = h(".langs")).is("." + o) || (t.addClass(o), i.addClass(r));
        });
        var e = (h("html").attr("data-accept-language") || "").split(",");
        if (e.length && e[0].length)
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              s = h(".lang__" + n);
            s.length && s.addClass("lang__priority");
          }
        function a() {
          var e = h("." + o);
          e.length && (e.removeClass(o).attr("style", ""), i.removeClass(r));
        }
        h(Fe).click(function (e) {
          h(e.target).closest(".langs").length || a();
        }),
          h(Fe).keyup(function (e) {
            27 == e.keyCode && a();
          });
      })(),
      (function () {
        function i(e) {
          var t = parseFloat(e, 10);
          return isNaN(t) ? 0 : t;
        }
        var e = i(h.cookie("visit"));
        if (
          (h.cookie("visit", e + 1, {
            expires: 3650,
            path: "/",
            domain: "." + Re,
          }),
          Ve &&
            50 < i(h.cookie("visit")) &&
            void 0 === h.cookie("review") &&
            !h(".body-iframe").length)
        ) {
          var t = h(".body"),
            n = h(".notification__init"),
            o = h(".notification__cws");
          o.find(".notification-submit__accept").on("click", function () {
            r("accept"), (location.href = h(this).attr("data-target"));
          }),
            o.find(".notification-submit__cancel").on("click", function () {
              r("cancel"),
                t.removeClass("body__game_over"),
                n.removeClass("none"),
                o.addClass("none");
            }),
            t.addClass("body__game_over"),
            n.addClass("none"),
            o.removeClass("none"),
            h(".body-sda").addClass("none");
        }
        function r(e) {
          var t = 3650;
          if ("cancel" == e) {
            var n = i(h.cookie("review-cancel-count")) + 1;
            h.cookie("review-cancel-count", n, {
              expires: 3650,
              path: "/",
              domain: "." + Re,
            }),
              (t = 30 * n);
          }
          h.cookie("review", e, {
            expires: t,
            path: "/",
            domain: "." + Re,
          });
        }
      })(),
      We.adblock && Qe("hasAdBlock"),
      (j = !1),
      (H = 0),
      Fe.addEventListener(
        "touchstart",
        function (e) {
          if (1 != e.touches.length) return !0;
          (H = e.touches[0].clientY), (j = 0 === We.pageYOffset);
        },
        !1
      ),
      Fe.addEventListener(
        "touchmove",
        function (e) {
          var t = e.touches[0].clientY,
            n = t - H;
          if (((H = t), j && ((j = !1), 0 < n))) return e.preventDefault(), !0;
        },
        !1
      );
  });
})(window, document);
