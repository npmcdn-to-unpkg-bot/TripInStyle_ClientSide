var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
    var aa = function (a, b, c) {
        return a.call.apply(a.bind, arguments)
    }, ba = function (a, b, c) {
        if (!a)throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }, ca = function (a, b, c) {
        ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return ca.apply(null, arguments)
    };
    var n = window, p = document, r = n.location, da = function () {
    }, ea = /\[native code\]/, v = function (a, b, c) {
        return a[b] = a[b] || c
    }, fa = function (a) {
        for (var b = 0; b < this.length; b++)if (this[b] === a)return b;
        return -1
    }, ga = function (a) {
        a = a.sort();
        for (var b = [], c = void 0, d = 0; d < a.length; d++) {
            var e = a[d];
            e != c && b.push(e);
            c = e
        }
        return b
    }, ha = /&/g, ia = /</g, ja = />/g, ka = /"/g, la = /'/g, ma = function (a) {
        return String(a).replace(ha, "&amp;").replace(ia, "&lt;").replace(ja, "&gt;").replace(ka, "&quot;").replace(la, "&#39;")
    }, w = function () {
        var a;
        if ((a = Object.create) &&
            ea.test(a))a = a(null); else {
            a = {};
            for (var b in a)a[b] = void 0
        }
        return a
    }, y = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }, z = function (a) {
        if (ea.test(Object.keys))return Object.keys(a);
        var b = [], c;
        for (c in a)y(a, c) && b.push(c);
        return b
    }, A = function (a, b) {
        a = a || {};
        for (var c in a)y(a, c) && (b[c] = a[c])
    }, na = function (a) {
        return function () {
            n.setTimeout(a, 0)
        }
    }, B = function (a, b) {
        if (!a)throw Error(b || "");
    }, C = v(n, "gapi", {});
    var D = function (a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if (a = a && (d.exec(a) || b.exec(a)))try {
            c = decodeURIComponent(a[2])
        } catch (e) {
        }
        return c
    }, oa = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/, qa = function (a) {
        a = a.match(oa);
        var b = w();
        b.J = a[1];
        b.query = a[3] ? [a[3]] : [];
        b.o = a[5] ? [a[5]] : [];
        return b
    }, ra = function (a) {
        return a.J + (0 < a.query.length ? "?" + a.query.join("&") : "") + (0 < a.o.length ? "#" + a.o.join("&") : "")
    }, sa = function (a, b) {
        var c = [];
        if (a)for (var d in a)if (y(a,
                d) && null != a[d]) {
            var e = b ? b(a[d]) : a[d];
            c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
        }
        return c
    }, ta = function (a, b, c, d) {
        a = qa(a);
        a.query.push.apply(a.query, sa(b, d));
        a.o.push.apply(a.o, sa(c, d));
        return ra(a)
    }, ua = function (a, b) {
        var c = "";
        2E3 < b.length && (c = b.substring(2E3), b = b.substring(0, 2E3));
        var d = a.createElement("div"), e = a.createElement("a");
        e.href = b;
        d.appendChild(e);
        d.innerHTML = d.innerHTML;
        b = String(d.firstChild.href);
        d.parentNode && d.parentNode.removeChild(d);
        return b + c
    }, va = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var E = function (a, b, c, d) {
        if (n[c + "EventListener"])n[c + "EventListener"](a, b, !1); else if (n[d + "tachEvent"])n[d + "tachEvent"]("on" + a, b)
    }, wa = function () {
        var a = p.readyState;
        return "complete" === a || "interactive" === a && -1 == navigator.userAgent.indexOf("MSIE")
    }, za = function (a) {
        var b = xa;
        if (!wa())try {
            b()
        } catch (c) {
        }
        ya(a)
    }, ya = function (a) {
        if (wa())a(); else {
            var b = !1, c = function () {
                if (!b)return b = !0, a.apply(this, arguments)
            };
            n.addEventListener ? (n.addEventListener("load", c, !1), n.addEventListener("DOMContentLoaded", c, !1)) : n.attachEvent &&
            (n.attachEvent("onreadystatechange", function () {
                wa() && c.apply(this, arguments)
            }), n.attachEvent("onload", c))
        }
    }, Aa = function (a) {
        for (; a.firstChild;)a.removeChild(a.firstChild)
    }, Ba = {button: !0, div: !0, span: !0};
    var H;
    H = v(n, "___jsl", w());
    v(H, "I", 0);
    v(H, "hel", 10);
    var I = function (a) {
        return H.dpo ? H.h : D(a, "jsh", H.h)
    }, Ca = function (a) {
        var b = v(H, "sws", []);
        b.push.apply(b, a)
    }, Da = function (a) {
        return v(H, "watt", w())[a]
    }, Ea = function (a) {
        var b = v(H, "PQ", []);
        H.PQ = [];
        var c = b.length;
        if (0 === c)a(); else for (var d = 0, e = function () {
            ++d === c && a()
        }, f = 0; f < c; f++)b[f](e)
    }, Fa = function (a) {
        return v(v(H, "H", w()), a, w())
    };
    var J = v(H, "perf", w()), Ga = v(J, "g", w()), Ha = v(J, "i", w());
    v(J, "r", []);
    w();
    w();
    var Ia = function (a, b, c) {
        var d = J.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c])
    }, K = function (a, b, c) {
        Ga[a] = !b && Ga[a] || c || (new Date).getTime();
        Ia(a)
    }, L = function (a, b, c) {
        b && 0 < b.length && (b = Ja(b), c && 0 < c.length && (b += "___" + Ja(c)), 28 < b.length && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = v(Ha, "_p", w()), v(b, c, w())[a] = (new Date).getTime(), Ia(a, "_p", c))
    }, Ja = function (a) {
        return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/\,/g, "_")
    };
    var Ka = w(), M = [], N = function (a) {
        throw Error("Bad hint" + (a ? ": " + a : ""));
    };
    M.push(["jsl", function (a) {
        for (var b in a)if (y(a, b)) {
            var c = a[b];
            "object" == typeof c ? H[b] = v(H, b, []).concat(c) : v(H, b, c)
        }
        if (b = a.u)a = v(H, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var La = /^(\/[a-zA-Z0-9_\-]+)+$/, Ma = /^[a-zA-Z0-9\-_\.,!]+$/, Na = /^gapi\.loaded_[0-9]+$/, Oa = /^[a-zA-Z0-9,._-]+$/, Sa = function (a, b, c, d) {
            var e = a.split(";"), f = e.shift(), g = Ka[f], k = null;
            g ? k = g(e, b, c, d) : N("no hint processor for: " + f);
            k || N("failed to generate load url");
            b = k;
            c = b.match(Pa);
            (d = b.match(Qa)) && 1 === d.length && Ra.test(b) && c && 1 === c.length || N("failed sanity: " + a);
            return k
        }, Va = function (a, b, c, d) {
            a = Ta(a);
            Na.test(c) || N("invalid_callback");
            b = Ua(b);
            d = d && d.length ? Ua(d) : null;
            var e = function (a) {
                return encodeURIComponent(a).replace(/%2C/g,
                    ",")
            };
            return [encodeURIComponent(a.Z).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=", e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.H ? "/am=" + e(a.H) : "", a.S ? "/rs=" + e(a.S) : "", a.U ? "/t=" + e(a.U) : "", "/cb=", e(c)].join("")
        }, Ta = function (a) {
            "/" !== a.charAt(0) && N("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || 0 == a.indexOf("."))N("empty/relative directory"); else if (0 < a.indexOf("=")) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f =
                    b[d].split("="), g = decodeURIComponent(f[0]), k = decodeURIComponent(f[1]);
                2 == f.length && g && k && (a[g] = a[g] || k)
            }
            b = "/" + c.join("/");
            La.test(b) || N("invalid_prefix");
            c = O(a, "k", !0);
            d = O(a, "am");
            e = O(a, "rs");
            a = O(a, "t");
            return {Z: b, version: c, H: d, S: e, U: a}
        }, Ua = function (a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                Oa.test(e) && b.push(e)
            }
            return b.join(",")
        }, O = function (a, b, c) {
            a = a[b];
            !a && c && N("missing: " + b);
            if (a) {
                if (Ma.test(a))return a;
                N("invalid: " + b)
            }
            return null
        }, Ra = /^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        Qa = /\/cb=/g, Pa = /\/\//g, Wa = function () {
            var a = I(r.href);
            if (!a)throw Error("Bad hint");
            return a
        };
    Ka.m = function (a, b, c, d) {
        (a = a[0]) || N("missing_hint");
        return "https://apis.google.com" + Va(a, b, c, d)
    };
    var Xa = decodeURI("%73cript"), Ya = function (a, b) {
        for (var c = [], d = 0; d < a.length; ++d) {
            var e = a[d];
            e && 0 > fa.call(b, e) && c.push(e)
        }
        return c
    }, $a = function (a) {
        "loading" != p.readyState ? Za(a) : p.write("<" + Xa + ' src="' + encodeURI(a) + '"></' + Xa + ">")
    }, Za = function (a) {
        var b = p.createElement(Xa);
        b.setAttribute("src", a);
        b.async = "true";
        (a = p.getElementsByTagName(Xa)[0]) ? a.parentNode.insertBefore(b, a) : (p.head || p.body || p.documentElement).appendChild(b)
    }, ab = function (a, b) {
        var c = b && b._c;
        if (c)for (var d = 0; d < M.length; d++) {
            var e = M[d][0],
                f = M[d][1];
            f && y(c, e) && f(c[e], a, b)
        }
    }, cb = function (a, b, c) {
        bb(function () {
            var c;
            c = b === I(r.href) ? v(C, "_", w()) : w();
            c = v(Fa(b), "_", c);
            a(c)
        }, c)
    }, P = function (a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c.callback = b);
        ab(a, c);
        var d = a ? a.split(":") : [], e = c.h || Wa(), f = v(H, "ah", w());
        if (f["::"] && d.length) {
            for (var g = [], k = null; k = d.shift();) {
                var h = k.split("."), h = f[k] || f[h[1] && "ns:" + h[0] || ""] || e, l = g.length && g[g.length - 1] || null, m = l;
                l && l.hint == h || (m = {hint: h, M: []}, g.push(m));
                m.M.push(k)
            }
            var q = g.length;
            if (1 < q) {
                var u = c.callback;
                u && (c.callback = function () {
                    0 == --q && u()
                })
            }
            for (; d = g.shift();)db(d.M, c, d.hint)
        } else db(d || [], c, e)
    }, db = function (a, b, c) {
        a = ga(a) || [];
        var d = b.callback, e = b.config, f = b.timeout, g = b.ontimeout, k = b.onerror, h = void 0;
        "function" == typeof k && (h = k);
        var l = null, m = !1;
        if (f && !g || !f && g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var k = v(Fa(c), "r", []).sort(), q = v(Fa(c), "L", []).sort(), u = [].concat(k), t = function (a, b) {
            if (m)return 0;
            n.clearTimeout(l);
            q.push.apply(q, x);
            var d = ((C || {}).config ||
            {}).update;
            d ? d(e) : e && v(H, "cu", []).push(e);
            if (b) {
                L("me0", a, u);
                try {
                    cb(b, c, h)
                } finally {
                    L("me1", a, u)
                }
            }
            return 1
        };
        0 < f && (l = n.setTimeout(function () {
            m = !0;
            g()
        }, f));
        var x = Ya(a, q);
        if (x.length) {
            var x = Ya(a, k), F = v(H, "CP", []), G = F.length;
            F[G] = function (a) {
                if (!a)return 0;
                L("ml1", x, u);
                var b = function (b) {
                    F[G] = null;
                    t(x, a) && Ea(function () {
                        d && d();
                        b()
                    })
                }, c = function () {
                    var a = F[G + 1];
                    a && a()
                };
                0 < G && F[G - 1] ? F[G] = function () {
                    b(c)
                } : b(c)
            };
            if (x.length) {
                var pa = "loaded_" + H.I++;
                C[pa] = function (a) {
                    F[G](a);
                    C[pa] = null
                };
                a = Sa(c, x, "gapi." + pa, k);
                k.push.apply(k,
                    x);
                L("ml0", x, u);
                b.sync || n.___gapisync ? $a(a) : Za(a)
            } else F[G](da)
        } else t(x) && d && d()
    };
    var bb = function (a, b) {
        if (H.hee && 0 < H.hel)try {
            return a()
        } catch (c) {
            b && b(c), H.hel--, P("debug_error", function () {
                try {
                    window.___jsl.hefn(c)
                } catch (a) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    C.load = function (a, b) {
        return bb(function () {
            return P(a, b)
        })
    };
    var Q = function (a) {
        var b = window.___jsl = window.___jsl || {};
        b[a] = b[a] || [];
        return b[a]
    }, R = function (a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }, eb = function (a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    }, S = function (a, b) {
        if (b)for (var c in b)b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !eb(a[c]) && !eb(b[c]) ? S(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = eb(b[c]) ? [] : {}, S(a[c], b[c])) : a[c] = b[c])
    }, fb = function (a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 ==
                   a.charCodeAt(a.length - 1);)a = a.substring(0, a.length - 1);
            var b;
            try {
                b = window.JSON.parse(a)
            } catch (c) {
            }
            if ("object" === typeof b)return b;
            try {
                b = (new Function("return (" + a + "\n)"))()
            } catch (c) {
            }
            if ("object" === typeof b)return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {
            }
            return "object" === typeof b ? b : {}
        }
    }, gb = function (a) {
        R(!0);
        var b = window.___gcfg, c = Q("cu");
        if (b && b !== window.___gu) {
            var d = {};
            S(d, b);
            c.push(d);
            window.___gu = b
        }
        var b = Q("cu"), e = document.scripts || document.getElementsByTagName("script") || [], d = [],
            f = [];
        f.push.apply(f, Q("us"));
        for (var g = 0; g < e.length; ++g)for (var k = e[g], h = 0; h < f.length; ++h)k.src && 0 == k.src.indexOf(f[h]) && d.push(k);
        0 == d.length && 0 < e.length && e[e.length - 1].src && d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = 3 == g || 4 == g ? f.nodeValue : f.textContent || f.innerText || f.innerHTML || "") : f = void 0, (f = fb(f)) && b.push(f));
        a && (d = {}, S(d, a), c.push(d));
        d = Q("cd");
        a = 0;
        for (b = d.length; a < b; ++a)S(R(), d[a]);
        d = Q("ci");
        a = 0;
        for (b = d.length; a < b; ++a)S(R(), d[a]);
        a = 0;
        for (b = c.length; a < b; ++a)S(R(), c[a])
    }, T = function (a) {
        if (!a)return R();
        a = a.split("/");
        for (var b = R(), c = 0, d = a.length; b && "object" === typeof b && c < d; ++c)b = b[a[c]];
        return c === a.length && void 0 !== b ? b : void 0
    }, hb = function (a, b) {
        var c = a;
        if ("string" === typeof a) {
            for (var d = c = {}, e = a.split("/"), f = 0, g = e.length; f < g - 1; ++f)var k = {}, d = d[e[f]] = k;
            d[e[f]] = b
        }
        gb(c)
    };
    var ib = function () {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), v(H, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var jb = {
            apppackagename: 1,
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        }, kb = !1, lb = w(), mb = function () {
            if (!kb) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (0 == c.lastIndexOf("google-signin-", 0)) {
                        var c = c.substring(14), d = a[b].content;
                        jb[c] && d && (lb[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    var a = document.location.toString(), e;
                    for (e in jb)0 < jb[e] && (b = D(a, e, "")) && (lb[e] = b)
                }
                kb = !0
            }
            e = w();
            A(lb, e);
            return e
        },
        nb = function (a) {
            return !!(a.clientid && a.scope && a.callback)
        };
    var ob = window.console, pb = function (a) {
        ob && ob.log && ob.log(a)
    };
    var qb = function () {
        return !!H.oa
    }, rb = function () {
    };
    var U = v(H, "rw", w()), sb = function (a) {
        for (var b in U)a(U[b])
    }, tb = function (a, b) {
        var c = U[a];
        c && c.state < b && (c.state = b)
    };
    var ub;
    var vb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//, wb = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//, xb = function (a) {
        var b = T("googleapis.config/sessionIndex");
        null == b && (b = window.__X_GOOG_AUTHUSER);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser)
        }
        null == b && (a = a || window.location.href, b = D(a, "authuser") || null, null == b && (b = (b = a.match(vb)) ? b[1] : null));
        return null == b ? null : String(b)
    }, yb = function (a) {
        var b = T("googleapis.config/sessionDelegate");
        null == b && (b = (a = (a || window.location.href).match(wb)) ? a[1] : null);
        return null == b ? null : String(b)
    };
    var zb = function () {
        this.g = -1
    };
    var V = function () {
        this.g = 64;
        this.b = [];
        this.B = [];
        this.V = [];
        this.v = [];
        this.v[0] = 128;
        for (var a = 1; a < this.g; ++a)this.v[a] = 0;
        this.w = this.j = 0;
        this.reset()
    };
    (function () {
        function a() {
        }

        a.prototype = zb.prototype;
        V.fa = zb.prototype;
        V.prototype = new a;
        V.J = function (a, c, d) {
            for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++)e[f - 2] = arguments[f];
            return zb.prototype[c].apply(a, e)
        }
    })();
    V.prototype.reset = function () {
        this.b[0] = 1732584193;
        this.b[1] = 4023233417;
        this.b[2] = 2562383102;
        this.b[3] = 271733878;
        this.b[4] = 3285377520;
        this.w = this.j = 0
    };
    var Ab = function (a, b, c) {
        c || (c = 0);
        var d = a.V;
        if ("string" == typeof b)for (var e = 0; 16 > e; e++)d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4; else for (e = 0; 16 > e; e++)d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.b[0];
        c = a.b[1];
        for (var g = a.b[2], k = a.b[3], h = a.b[4], l, e = 0; 80 > e; e++)40 > e ? 20 > e ? (f = k ^ c & (g ^ k), l = 1518500249) : (f = c ^ g ^ k, l = 1859775393) : 60 > e ? (f = c & g | k & (c | g), l = 2400959708) : (f = c ^ g ^ k,
            l = 3395469782), f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295, h = k, k = g, g = (c << 30 | c >>> 2) & 4294967295, c = b, b = f;
        a.b[0] = a.b[0] + b & 4294967295;
        a.b[1] = a.b[1] + c & 4294967295;
        a.b[2] = a.b[2] + g & 4294967295;
        a.b[3] = a.b[3] + k & 4294967295;
        a.b[4] = a.b[4] + h & 4294967295
    };
    V.prototype.update = function (a, b) {
        if (null != a) {
            void 0 === b && (b = a.length);
            for (var c = b - this.g, d = 0, e = this.B, f = this.j; d < b;) {
                if (0 == f)for (; d <= c;)Ab(this, a, d), d += this.g;
                if ("string" == typeof a)for (; d < b;) {
                    if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.g) {
                        Ab(this, e);
                        f = 0;
                        break
                    }
                } else for (; d < b;)if (e[f] = a[d], ++f, ++d, f == this.g) {
                    Ab(this, e);
                    f = 0;
                    break
                }
            }
            this.j = f;
            this.w += b
        }
    };
    V.prototype.digest = function () {
        var a = [], b = 8 * this.w;
        56 > this.j ? this.update(this.v, 56 - this.j) : this.update(this.v, this.g - (this.j - 56));
        for (var c = this.g - 1; 56 <= c; c--)this.B[c] = b & 255, b /= 256;
        Ab(this, this.B);
        for (c = b = 0; 5 > c; c++)for (var d = 24; 0 <= d; d -= 8)a[b] = this.b[c] >> d & 255, ++b;
        return a
    };
    var Bb = function () {
        this.F = new V
    };
    Bb.prototype.reset = function () {
        this.F.reset()
    };
    var Cb = n.crypto, Db = !1, Eb = 0, Fb = 0, Gb = 1, Hb = 0, Ib = "", Jb = function (a) {
        a = a || n.event;
        var b = a.screenX + a.clientX << 16, b = b + (a.screenY + a.clientY), b = (new Date).getTime() % 1E6 * b;
        Gb = Gb * b % Hb;
        0 < Eb && ++Fb == Eb && E("mousemove", Jb, "remove", "de")
    }, Kb = function (a) {
        var b = new Bb;
        a = unescape(encodeURIComponent(a));
        for (var c = [], d = 0, e = a.length; d < e; ++d)c.push(a.charCodeAt(d));
        b.F.update(c);
        b = b.F.digest();
        a = "";
        for (c = 0; c < b.length; c++)a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
        return a
    }, Db = !!Cb &&
        "function" == typeof Cb.getRandomValues;
    Db || (Hb = 1E6 * (screen.width * screen.width + screen.height), Ib = Kb(p.cookie + "|" + p.location + "|" + (new Date).getTime() + "|" + Math.random()), Eb = T("random/maxObserveMousemove") || 0, 0 != Eb && E("mousemove", Jb, "add", "at"));
    var Lb = function () {
        var a = Gb, a = a + parseInt(Ib.substr(0, 20), 16);
        Ib = Kb(Ib);
        return a / (Hb + Math.pow(16, 20))
    }, Mb = function () {
        var a = new n.Uint32Array(1);
        Cb.getRandomValues(a);
        return Number("0." + a[0])
    };
    var Nb = function () {
        var a = H.onl;
        if (!a) {
            a = w();
            H.onl = a;
            var b = w();
            a.e = function (a) {
                var d = b[a];
                d && (delete b[a], d())
            };
            a.a = function (a, d) {
                b[a] = d
            };
            a.r = function (a) {
                delete b[a]
            }
        }
        return a
    }, Ob = function (a, b) {
        var c = b.onload;
        return "function" === typeof c ? (Nb().a(a, c), c) : null
    }, Pb = function (a) {
        B(/^\w+$/.test(a), "Unsupported id - " + a);
        Nb();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
    }, Qb = function (a) {
        Nb().r(a)
    };
    var Rb = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    }, Sb = {allowtransparency: !0, onload: !0}, Tb = 0, Ub = function (a) {
        B(!a || va.test(a), "Illegal url for new iframe - " + a)
    }, Vb = function (a, b, c, d, e) {
        Ub(c.src);
        var f, g = Ob(d, c), k = g ? Pb(d) : "";
        try {
            document.all && (f = a.createElement('<iframe frameborder="' + ma(String(c.frameborder)) + '" scrolling="' + ma(String(c.scrolling)) + '" ' + k + ' name="' + ma(String(c.name)) + '"/>'))
        } catch (l) {
        } finally {
            f ||
            (f = a.createElement("iframe"), g && (f.onload = function () {
                f.onload = null;
                g.call(this)
            }, Qb(d)))
        }
        for (var h in c)a = c[h], "style" === h && "object" === typeof a ? A(a, f.style) : Sb[h] || f.setAttribute(h, String(a));
        (h = e && e.beforeNode || null) || e && e.dontclear || Aa(b);
        b.insertBefore(f, h);
        f = h ? h.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f
    };
    var Wb = /^:[\w]+$/, Xb = /:([a-zA-Z_]+):/g, Yb = function () {
        var a = xb() || "0", b = yb(), c;
        c = xb(void 0) || a;
        var d = yb(void 0), e = "";
        c && (e += "u/" + c + "/");
        d && (e += "b/" + d + "/");
        c = e || null;
        (e = (d = !1 === T("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = T("iframes/:socialhost:"), g = T("iframes/:im_socialhost:");
        return ub = {
            socialhost: f,
            ctx_socialhost: d ? g : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        }
    }, Zb = function (a, b) {
        return Yb()[b] || ""
    }, $b = function (a) {
        return function (b, c) {
            return a ? Yb()[c] || a[c] || "" : Yb()[c] || ""
        }
    };
    var ac = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, bc = function (a) {
            var b, c, d;
            b = /[\"\\\x00-\x1f\x7f-\x9f]/g;
            if (void 0 !== a) {
                switch (typeof a) {
                    case "string":
                        return b.test(a) ? '"' + a.replace(b, function (a) {
                            var b = ac[a];
                            if (b)return b;
                            b = a.charCodeAt();
                            return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
                        }) + '"' : '"' + a + '"';
                    case "number":
                        return isFinite(a) ? String(a) : "null";
                    case "boolean":
                    case "null":
                        return String(a);
                    case "object":
                        if (!a)return "null";
                        b = [];
                        if ("number" === typeof a.length && !a.propertyIsEnumerable("length")) {
                            d = a.length;
                            for (c = 0; c < d; c += 1)b.push(bc(a[c]) || "null");
                            return "[" + b.join(",") + "]"
                        }
                        for (c in a)!/___$/.test(c) && y(a, c) && "string" === typeof c && (d = bc(a[c])) && b.push(bc(c) + ":" + d);
                        return "{" + b.join(",") + "}"
                }
                return ""
            }
        }, cc = function (a) {
            if (!a)return !1;
            if (/^[\],:{}\s]*$/.test(a.replace(/\\["\\\/b-u]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))try {
                return eval("(" + a + ")")
            } catch (b) {
            }
            return !1
        },
        dc = !1;
    try {
        dc = !!window.JSON && '["a"]' === window.JSON.stringify(["a"]) && "a" === window.JSON.parse('["a"]')[0]
    } catch (a) {
    }
    var ec = function (a) {
        try {
            return window.JSON.parse(a)
        } catch (b) {
            return !1
        }
    }, fc = dc ? window.JSON.stringify : bc, gc = dc ? ec : cc;
    var hc = function (a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        return ua(document, b ? b : a)
    }, ic = function (a) {
        a = a || "canonical";
        for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
            var e = b[c], f = e.getAttribute("rel");
            if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = hc(e)) && null != e.match(/^https?:\/\/[\w\-\_\.]+/i))return e
        }
        return window.location.href
    };
    var jc = {se: "0"}, kc = {post: !0}, lc = {style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"}, mc = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "), nc = v(H, "WI", w()), oc = function (a, b, c) {
        var d, e;
        d = {};
        var f = e = a;
        "plus" == a && b.action && (e = a + "_" + b.action, f = a + "/" + b.action);
        (e = T("iframes/" + e + "/url")) || (e = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
        for (var g in jc)d[g] = g + "/" + (b[g] || jc[g]) + "/";
        d = ua(p, e.replace(Xb,
            $b(d)));
        g = "iframes/" + a + "/params/";
        f = {};
        A(b, f);
        (e = T("lang") || T("gwidget/lang")) && (f.hl = e);
        kc[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
        f.exp = T(g + "exp");
        if (g = T(g + "location"))for (e = 0; e < g.length; e++) {
            var k = g[e];
            f[k] = n.location[k]
        }
        switch (a) {
            case "plus":
            case "follow":
                g = f.href;
                e = b.action ? void 0 : "publisher";
                g = (g = "string" == typeof g ? g : void 0) ? hc(g) : ic(e);
                f.url = g;
                delete f.href;
                break;
            case "plusone":
                g = (g = b.href) ? hc(g) : ic();
                f.url = g;
                g = b.db;
                e = T();
                null == g && e && (g = e.db,
                null == g && (g = e.gwidget && e.gwidget.db));
                f.db = g || void 0;
                g = b.ecp;
                e = T();
                null == g && e && (g = e.ecp, null == g && (g = e.gwidget && e.gwidget.ecp));
                f.ecp = g || void 0;
                delete f.href;
                break;
            case "signin":
                f.url = ic()
        }
        H.ILI && (f.iloader = "1");
        delete f["data-onload"];
        delete f.rd;
        for (var h in jc)f[h] && delete f[h];
        f.gsrc = T("iframes/:source:");
        h = T("inline/css");
        "undefined" !== typeof h && 0 < c && h >= c && (f.ic = "1");
        h = /^#|^fr-/;
        c = {};
        for (var l in f)y(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
        l = "q" == T("iframes/" + a + "/params/si") ? f :
            c;
        h = mb();
        for (var m in h)!y(h, m) || y(f, m) || y(c, m) || (l[m] = h[m]);
        m = [].concat(mc);
        (l = T("iframes/" + a + "/methods")) && "object" === typeof l && ea.test(l.push) && (m = m.concat(l));
        for (var q in b)y(b, q) && /^on/.test(q) && ("plus" != a || "onconnect" != q) && (m.push(q), delete f[q]);
        delete f.callback;
        c._methods = m.join(",");
        return ta(d, f, c)
    }, pc = ["style", "data-gapiscan"], rc = function (a) {
        for (var b = w(), c = 0 != a.nodeName.toLowerCase().indexOf("g:"), d = 0, e = a.attributes.length; d < e; d++) {
            var f = a.attributes[d], g = f.name, k = f.value;
            0 <= fa.call(pc,
                g) || c && 0 != g.indexOf("data-") || "null" === k || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
        }
        a = a.style;
        (c = qc(a && a.height)) && (b.height = String(c));
        (a = qc(a && a.width)) && (b.width = String(a));
        return b
    }, qc = function (a) {
        var b = void 0;
        "number" === typeof a ? b = a : "string" === typeof a && (b = parseInt(a, 10));
        return b
    }, tc = function () {
        var a = H.drw;
        sb(function (b) {
            if (a !== b.id && 4 != b.state && "share" != b.type) {
                var c = b.id, d = b.type, e = b.url;
                b = b.userParams;
                var f = p.getElementById(c);
                if (f) {
                    var g = oc(d, b, 0);
                    g ? (f = f.parentNode,
                    e.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") !== g.replace(/\#.*/, "").replace(/(\?|&)ic=1/, "") && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, sc(f, b), (d = U[f.lastChild.id]) && (d.oid = c), tb(c, 4))) : delete U[c]
                } else delete U[c]
            }
        })
    };
    var W, X, Y, uc, vc, wc = /(?:^|\s)g-((\S)*)(?:$|\s)/, xc = {
        plusone: !0,
        autocomplete: !0,
        profile: !0,
        signin: !0,
        signin2: !0
    };
    W = v(H, "SW", w());
    X = v(H, "SA", w());
    Y = v(H, "SM", w());
    uc = v(H, "FW", []);
    vc = null;
    var zc = function (a, b) {
        yc(void 0, !1, a, b)
    }, yc = function (a, b, c, d) {
        K("ps0", !0);
        c = ("string" === typeof c ? document.getElementById(c) : c) || p;
        var e;
        e = p.documentMode;
        if (c.querySelectorAll && (!e || 8 < e)) {
            e = d ? [d] : z(W).concat(z(X)).concat(z(Y));
            for (var f = [], g = 0; g < e.length; g++) {
                var k = e[g];
                f.push(".g-" + k, "g\\:" + k)
            }
            e = c.querySelectorAll(f.join(","))
        } else e = c.getElementsByTagName("*");
        c = w();
        for (f = 0; f < e.length; f++) {
            g = e[f];
            var h = g, k = d, l = h.nodeName.toLowerCase(), m = void 0;
            h.getAttribute("data-gapiscan") ? k = null : (0 == l.indexOf("g:") ?
                m = l.substr(2) : (h = (h = String(h.className || h.getAttribute("class"))) && wc.exec(h)) && (m = h[1]), k = !m || !(W[m] || X[m] || Y[m]) || k && m !== k ? null : m);
            k && (xc[k] || 0 == g.nodeName.toLowerCase().indexOf("g:") || 0 != z(rc(g)).length) && (g.setAttribute("data-gapiscan", !0), v(c, k, []).push(g))
        }
        if (b)for (var q in c)for (b = c[q], d = 0; d < b.length; d++)b[d].setAttribute("data-onload", !0);
        for (var u in c)uc.push(u);
        K("ps1", !0);
        if ((q = uc.join(":")) || a)try {
            C.load(q, a)
        } catch (x) {
            pb(x);
            return
        }
        if (Ac(vc || {}))for (var t in c) {
            a = c[t];
            u = 0;
            for (b = a.length; u <
            b; u++)a[u].removeAttribute("data-gapiscan");
            Bc(t)
        } else {
            d = [];
            for (t in c)for (a = c[t], u = 0, b = a.length; u < b; u++)e = a[u], Cc(t, e, rc(e), d, b);
            Dc(q, d)
        }
    }, Ec = function (a) {
        var b = v(C, a, {});
        b.go || (b.go = function (b) {
            return zc(b, a)
        }, b.render = function (b, d) {
            var e = d || {};
            e.type = a;
            return sc(b, e)
        })
    }, Fc = function (a) {
        W[a] = !0
    }, Gc = function (a) {
        X[a] = !0
    }, Hc = function (a) {
        Y[a] = !0
    };
    var Bc = function (a, b) {
        var c = Da(a);
        b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : C.load(a, function () {
            var c = Da(a), e = b && b.iframeNode, f = b && b.userParams;
            e && c ? (c(b), e.setAttribute("data-gapiattached", !0)) : (c = C[a].go, "signin2" == a ? c(e, f) : c(e && e.parentNode, f))
        })
    }, Ac = function () {
        return !1
    }, Dc = function () {
    }, Cc = function (a, b, c, d, e, f, g) {
        switch (Ic(b, a, f)) {
            case 0:
                a = Y[a] ? a + "_annotation" : a;
                d = {};
                d.iframeNode = b;
                d.userParams = c;
                Bc(a, d);
                break;
            case 1:
                var k;
                if (b.parentNode) {
                    for (var h in c) {
                        if (f = y(c, h))f =
                            c[h], f = !!f && "object" === typeof f && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                        if (f)try {
                            c[h] = fc(c[h])
                        } catch (F) {
                            delete c[h]
                        }
                    }
                    f = !0;
                    c.dontclear && (f = !1);
                    delete c.dontclear;
                    rb();
                    h = oc(a, c, e);
                    e = g || {};
                    e.allowPost = 1;
                    e.attributes = lc;
                    e.dontclear = !f;
                    g = {};
                    g.userParams = c;
                    g.url = h;
                    g.type = a;
                    var l;
                    c.rd ? l = b : (l = document.createElement("div"), b.setAttribute("data-gapistub", !0), l.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(l, b));
                    g.siteElement =
                        l;
                    l.id || (b = l, v(nc, a, 0), f = "___" + a + "_" + nc[a]++, b.id = f);
                    b = w();
                    b[">type"] = a;
                    A(c, b);
                    f = h;
                    c = l;
                    h = e || {};
                    b = h.attributes || {};
                    B(!h.allowPost || !b.onload, "onload is not supported by post iframe");
                    e = b = f;
                    Wb.test(b) && (e = T("iframes/" + e.substring(1) + "/url"), B(!!e, "Unknown iframe url config for - " + b));
                    f = ua(p, e.replace(Xb, Zb));
                    b = c.ownerDocument || p;
                    l = 0;
                    do e = h.id || ["I", Tb++, "_", (new Date).getTime()].join(""); while (b.getElementById(e) && 5 > ++l);
                    B(5 > l, "Error creating iframe id");
                    l = {};
                    var m = {};
                    b.documentMode && 9 > b.documentMode &&
                    (l.hostiemode = b.documentMode);
                    A(h.queryParams || {}, l);
                    A(h.fragmentParams || {}, m);
                    var q = h.connectWithQueryParams ? l : m, u = h.pfname, t = w();
                    t.id = e;
                    t.parent = b.location.protocol + "//" + b.location.host;
                    var x = D(b.location.href, "parent"), u = u || "";
                    !u && x && (x = D(b.location.href, "id", ""), u = D(b.location.href, "pfname", ""), u = x ? u + "/" + x : "");
                    t.pfname = u;
                    A(t, q);
                    (t = D(f, "rpctoken") || l.rpctoken || m.rpctoken) || (t = q.rpctoken = h.rpctoken || String(Math.round(1E8 * (Db ? Mb() : Lb()))));
                    h.rpctoken = t;
                    t = b.location.href;
                    q = w();
                    (x = D(t, "_bsh", H.bsh)) &&
                    (q._bsh = x);
                    (t = I(t)) && (q.jsh = t);
                    h.hintInFragment ? A(q, m) : A(q, l);
                    f = ta(f, l, m, h.paramsSerializer);
                    m = w();
                    A(Rb, m);
                    A(h.attributes, m);
                    m.name = m.id = e;
                    m.src = f;
                    h.eurl = f;
                    if ((h || {}).allowPost && 2E3 < f.length) {
                        l = qa(f);
                        m.src = "";
                        m["data-postorigin"] = f;
                        f = Vb(b, c, m, e);
                        -1 != navigator.userAgent.indexOf("WebKit") && (k = f.contentWindow.document, k.open(), m = k.createElement("div"), q = {}, t = e + "_inner", q.name = t, q.src = "", q.style = "display:none", Vb(b, m, q, t, h));
                        m = (h = l.query[0]) ? h.split("&") : [];
                        h = [];
                        for (q = 0; q < m.length; q++)t = m[q].split("=",
                            2), h.push([decodeURIComponent(t[0]), decodeURIComponent(t[1])]);
                        l.query = [];
                        m = ra(l);
                        B(va.test(m), "Invalid URL: " + m);
                        l = b.createElement("form");
                        l.action = m;
                        l.method = "POST";
                        l.target = e;
                        l.style.display = "none";
                        for (e = 0; e < h.length; e++)m = b.createElement("input"), m.type = "hidden", m.name = h[e][0], m.value = h[e][1], l.appendChild(m);
                        c.appendChild(l);
                        l.submit();
                        l.parentNode.removeChild(l);
                        k && k.close();
                        k = f
                    } else k = Vb(b, c, m, e, h);
                    g.iframeNode = k;
                    g.id = k.getAttribute("id");
                    k = g.id;
                    c = w();
                    c.id = k;
                    c.userParams = g.userParams;
                    c.url =
                        g.url;
                    c.type = g.type;
                    c.state = 1;
                    U[k] = c;
                    k = g
                } else k = null;
                k && ((g = k.id) && d.push(g), Bc(a, k))
        }
    }, Ic = function (a, b, c) {
        if (a && 1 === a.nodeType && b) {
            if (c)return 1;
            if (Y[b]) {
                if (Ba[a.nodeName.toLowerCase()])return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
            } else {
                if (X[b])return 0;
                if (W[b])return 1
            }
        }
        return null
    }, sc = function (a, b) {
        var c = b.type;
        delete b.type;
        var d = ("string" === typeof a ? document.getElementById(a) : a) || void 0;
        if (d) {
            var e = {}, f;
            for (f in b)y(b, f) && (e[f.toLowerCase()] = b[f]);
            e.rd = 1;
            (f = !!e.ri) && delete e.ri;
            var g = [];
            Cc(c, d, e, g, 0, f, void 0);
            Dc(c, g)
        } else pb("string" === "gapi." + c + ".render: missing element " + typeof a ? a : "")
    };
    v(C, "platform", {}).go = zc;
    var Ac = function (a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++)a = a[b[c]];
        b = I(r.href);
        return !a || 0 != a.indexOf("n;") && 0 != b.indexOf("n;") && a !== b
    }, Dc = function (a, b) {
        Jc(a, b)
    }, xa = function (a) {
        yc(a, !0)
    }, Kc = function (a, b) {
        for (var c = b || [], d = 0; d < c.length; ++d)a(c[d]);
        for (d = 0; d < c.length; d++)Ec(c[d])
    };
    M.push(["platform", function (a, b, c) {
        vc = c;
        b && uc.push(b);
        Kc(Fc, a);
        Kc(Gc, c._c.annotation);
        Kc(Hc, c._c.bimodal);
        ib();
        gb();
        if ("explicit" != T("parsetags")) {
            Ca(a);
            nb(mb()) && !T("disableRealtimeCallback") && rb();
            var d;
            c && (a = c.callback) && (d = na(a), delete c.callback);
            za(function () {
                xa(d)
            })
        }
    }]);
    C._pl = !0;
    var Lc = function (a) {
        a = (a = U[a]) ? a.oid : void 0;
        if (a) {
            var b = p.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete U[a];
            Lc(a)
        }
    };
    var Mc = /^\{h\:'/, Nc = /^!_/, Oc = "", Jc = function (a, b) {
        function c() {
            E("message", d, "remove", "de")
        }

        function d(d) {
            var g = d.data, k = d.origin;
            if (Pc(g, b)) {
                var h = e;
                e = !1;
                h && K("rqe");
                Qc(a, function () {
                    h && K("rqd");
                    c();
                    for (var a = v(H, "RPMQ", []), b = 0; b < a.length; b++)a[b]({data: g, origin: k})
                })
            }
        }

        if (0 !== b.length) {
            Oc = D(r.href, "pfname", "");
            var e = !0;
            E("message", d, "add", "at");
            P(a, c)
        }
    }, Pc = function (a, b) {
        a = String(a);
        if (Mc.test(a))return !0;
        var c = !1;
        Nc.test(a) && (c = !0, a = a.substr(2));
        if (!/^\{/.test(a))return !1;
        var d = gc(a);
        if (!d)return !1;
        var e = d.f;
        if (d.s && e && -1 != fa.call(b, e)) {
            if ("_renderstart" === d.s || d.s === Oc + "/" + e + "::_renderstart") {
                var f = d.a && d.a[c ? 0 : 1], c = p.getElementById(e);
                tb(e, 2);
                if (f && c && f.width && f.height) {
                    a:{
                        d = c.parentNode;
                        e = f || {};
                        if (qb()) {
                            var g = c.id;
                            if (g) {
                                f = (f = U[g]) ? f.state : void 0;
                                if (1 === f || 4 === f)break a;
                                Lc(g)
                            }
                        }
                        (f = d.nextSibling) && f.getAttribute && f.getAttribute("data-gapistub") && (d.parentNode.removeChild(f), d.style.cssText = "");
                        var f = e.width, k = e.height, h = d.style;
                        h.textIndent = "0";
                        h.margin = "0";
                        h.padding = "0";
                        h.background = "transparent";
                        h.borderStyle = "none";
                        h.cssFloat = "none";
                        h.styleFloat = "none";
                        h.lineHeight = "normal";
                        h.fontSize = "1px";
                        h.verticalAlign = "baseline";
                        d = d.style;
                        d.display = "inline-block";
                        h = c.style;
                        h.position = "static";
                        h.left = "0";
                        h.top = "0";
                        h.visibility = "visible";
                        f && (d.width = h.width = f + "px");
                        k && (d.height = h.height = k + "px");
                        e.verticalAlign && (d.verticalAlign = e.verticalAlign);
                        g && tb(g, 3)
                    }
                    c["data-csi-wdt"] = (new Date).getTime()
                }
            }
            return !0
        }
        return !1
    }, Qc = function (a, b) {
        P(a, b)
    };
    var Rc = function (a, b) {
        this.O = a;
        var c = b || {};
        this.Y = Number(c.maxAge) || 0;
        this.L = c.domain;
        this.P = c.path;
        this.$ = !!c.secure
    }, Sc = /^[-+/_=.:|%&a-zA-Z0-9@]*$/, Tc = /^[A-Z_][A-Z0-9_]{0,63}$/;
    Rc.prototype.write = function (a, b) {
        if (!Tc.test(this.O))throw"Invalid cookie name";
        if (!Sc.test(a))throw"Invalid cookie value";
        var c = this.O + "=" + a;
        this.L && (c += ";domain=" + this.L);
        this.P && (c += ";path=" + this.P);
        var d = "number" === typeof b ? b : this.Y;
        if (0 <= d) {
            var e = new Date;
            e.setSeconds(e.getSeconds() + d);
            c += ";expires=" + e.toUTCString()
        }
        this.$ && (c += ";secure");
        document.cookie = c;
        return !0
    };
    Rc.iterate = function (a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="), e = d.shift();
            a(e, d.join("="))
        }
    };
    var Uc = function (a) {
        this.X = a
    }, Vc = {};
    Uc.prototype.write = function (a) {
        Vc[this.X] = a;
        return !0
    };
    Uc.iterate = function (a) {
        for (var b in Vc)Vc.hasOwnProperty(b) && a(b, Vc[b])
    };
    var Wc = "https:" === window.location.protocol, Xc = Wc || "http:" === window.location.protocol ? Rc : Uc, Yc = function (a) {
        var b = a.substr(1), c = "", d = window.location.hostname;
        if ("" !== b) {
            c = parseInt(b, 10);
            if (isNaN(c))return null;
            b = d.split(".");
            if (b.length < c - 1)return null;
            b.length == c - 1 && (d = "." + d)
        } else d = "";
        return {c: "S" == a.charAt(0), domain: d, i: c}
    }, Zc = function () {
        var a, b = null;
        Xc.iterate(function (c, d) {
            if (0 === c.indexOf("G_AUTHUSER_")) {
                var e = Yc(c.substring(11));
                if (!a || e.c && !a.c || e.c == a.c && e.i > a.i)a = e, b = d
            }
        });
        return {W: a, A: b}
    };
    var $c = function (a) {
        if (0 !== a.indexOf("GCSC"))return null;
        var b = {N: !1};
        a = a.substr(4);
        if (!a)return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (-1 == d)return b;
        var e = Yc(a.substr(d + 1));
        if (null == e)return b;
        a = a.substring(0, d);
        if ("_" !== a.charAt(0))return b;
        d = "E" === c && e.c;
        return !d && ("U" !== c || e.c) || d && !Wc ? b : {N: !0, c: d, ca: a.substr(1), domain: e.domain, i: e.i}
    }, ad = function (a) {
        if (!a)return [];
        a = a.split("=");
        return a[1] ? a[1].split("|") : []
    }, bd = function (a) {
        a = a.split(":");
        return {
            C: a[0].split("=")[1], ba: ad(a[1]),
            ea: ad(a[2]), da: ad(a[3])
        }
    }, cd = function () {
        var a = Zc(), b = a.W, a = a.A;
        if (null !== a) {
            var c;
            Xc.iterate(function (a, d) {
                var e = $c(a);
                e && e.N && e.c == b.c && e.i == b.i && (c = d)
            });
            if (c) {
                var d = bd(c), e = d && d.ba[Number(a)], d = d && d.C;
                if (e)return {A: a, aa: e, C: d}
            }
        }
        return null
    };
    var Z = function (a) {
        this.K = a
    };
    Z.prototype.l = 0;
    Z.prototype.G = 2;
    Z.prototype.K = null;
    Z.prototype.D = !1;
    Z.prototype.T = function () {
        this.D || (this.l = 0, this.D = !0, this.R())
    };
    Z.prototype.R = function () {
        this.D && (this.K() ? this.l = this.G : this.l = Math.min(2 * (this.l || this.G), 120), window.setTimeout(ca(this.R, this), 1E3 * this.l))
    };
    for (var dd = 0; 64 > dd; ++dd);
    var ed = null, qb = function () {
        return H.oa = !0
    }, rb = function () {
        H.oa = !0;
        var a = cd();
        (a = a && a.A) && hb("googleapis.config/sessionIndex", a);
        ed || (ed = v(H, "ss", new Z(fd)));
        a = ed;
        a.T && a.T()
    }, fd = function () {
        var a = cd(), b = a && a.aa || null, c = a && a.C;
        P("auth", {
            callback: function () {
                var a = n.gapi.auth, e = {client_id: c, session_state: b};
                a.checkSessionState(e, function (b) {
                    var c = e.session_state, k = T("isLoggedIn");
                    b = T("debug/forceIm") ? !1 : c && b || !c && !b;
                    if (k = k != b)hb("isLoggedIn", b), rb(), tc(), b || ((b = a.signOut) ? b() : (b = a.setToken) && b(null));
                    b =
                        mb();
                    var h = T("savedUserState"), c = a._guss(b.cookiepolicy), h = h != c && "undefined" != typeof h;
                    hb("savedUserState", c);
                    (k || h) && nb(b) && !T("disableRealtimeCallback") && a._pimf(b, !0)
                })
            }
        });
        return !0
    };
    K("bs0", !0, window.gapi._bs);
    K("bs1", !0);
    delete window.gapi._bs;
})();
gapi.load("client", {
    callback: window["startApp"],
    _c: {
        "jsl": {
            "ci": {
                "deviceType": "desktop",
                "oauth-flow": {
                    "authUrl": "https://accounts.google.com/o/oauth2/auth",
                    "proxyUrl": "https://accounts.google.com/o/oauth2/postmessageRelay",
                    "disableOpt": true,
                    "idpIframeUrl": "https://accounts.google.com/o/oauth2/iframe",
                    "usegapi": false
                },
                "debug": {
                    "reportExceptionRate": 0.05,
                    "forceIm": false,
                    "rethrowException": false,
                    "host": "https://apis.google.com"
                },
                "lexps": [81, 97, 99, 122, 123, 30, 79, 127],
                "enableMultilogin": true,
                "googleapis.config": {"auth": {"useFirstPartyAuthV2": true}},
                "isPlusUser": true,
                "inline": {"css": 1},
                "disableRealtimeCallback": false,
                "drive_share": {"skipInitCommand": true},
                "csi": {"rate": 0.01},
                "report": {
                    "apiRate": {"gapi\\.signin\\..*": 0.05, "gapi\\.signin2\\..*": 0.05},
                    "apis": ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.auth\\..*", "gapi\\.client\\..*"],
                    "rate": 0.001,
                    "host": "https://apis.google.com"
                },
                "client": {
                    "headers": {
                        "request": ["Accept", "Accept-Language", "Authorization", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "GData-Version", "Host", "If-Match", "If-Modified-Since", "If-None-Match", "If-Unmodified-Since", "Origin", "OriginToken", "Pragma", "Range", "Slug", "Transfer-Encoding", "Want-Digest", "X-ClientDetails", "X-GData-Client", "X-GData-Key", "X-Goog-AuthUser", "X-Goog-PageId", "X-Goog-Encode-Response-If-Executable", "X-Goog-Correlation-Id", "X-Goog-Request-Info", "X-Goog-Experiments", "x-goog-iam-authority-selector", "x-goog-iam-authorization-token", "X-Goog-Spatula", "X-Goog-Upload-Command", "X-Goog-Upload-Content-Disposition", "X-Goog-Upload-Content-Length", "X-Goog-Upload-Content-Type", "X-Goog-Upload-File-Name", "X-Goog-Upload-Offset", "X-Goog-Upload-Protocol", "X-Goog-Visitor-Id", "X-HTTP-Method-Override", "X-JavaScript-User-Agent", "X-Pan-Versionid", "X-Origin", "X-Referer", "X-Upload-Content-Length", "X-Upload-Content-Type", "X-Use-HTTP-Status-Code-Override", "X-Ios-Bundle-Identifier", "X-Android-Package", "X-YouTube-VVT", "X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"],
                        "response": ["Digest", "Cache-Control", "Content-Disposition", "Content-Encoding", "Content-Language", "Content-Length", "Content-MD5", "Content-Range", "Content-Type", "Date", "ETag", "Expires", "Last-Modified", "Location", "Pragma", "Range", "Server", "Transfer-Encoding", "WWW-Authenticate", "Vary", "Unzipped-Content-MD5", "X-Goog-Generation", "X-Goog-Metageneration", "X-Goog-Safety-Content-Type", "X-Goog-Safety-Encoding", "X-Google-Trace", "X-Goog-Upload-Chunk-Granularity", "X-Goog-Upload-Control-URL", "X-Goog-Upload-Size-Received", "X-Goog-Upload-Status", "X-Goog-Upload-URL", "X-Goog-Diff-Download-Range", "X-Goog-Hash", "X-Goog-Updated-Authorization", "X-Server-Object-Version", "X-Guploader-Customer", "X-Guploader-Upload-Result", "X-Guploader-Uploadid", "X-Google-Gfe-Backend-Request-Cost"]
                    }, "rms": "migrated", "cors": false
                },
                "isLoggedIn": true,
                "signInDeprecation": {"rate": 0.0},
                "include_granted_scopes": true,
                "llang": "fr",
                "plus_layer": {"isEnabled": false},
                "iframes": {
                    "youtube": {
                        "params": {"location": ["search", "hash"]},
                        "url": ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "ytsubscribe": {"url": "https://www.youtube.com/subscribe_embed?usegapi\u003d1"},
                    "plus_circle": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1"
                    },
                    "plus_share": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1"
                    },
                    "rbr_s": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                    },
                    "udc_webconsentflow": {
                        "params": {"url": ""},
                        "url": "https://www.google.com/settings/webconsent?usegapi\u003d1"
                    },
                    ":source:": "3p",
                    "blogger": {
                        "params": {"location": ["search", "hash"]},
                        "url": ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    "evwidget": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1"
                    },
                    "partnersbadge": {"url": "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1"},
                    ":socialhost:": "https://apis.google.com",
                    "shortlists": {"url": ""},
                    "hangout": {"url": "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},
                    "plus_followers": {
                        "params": {"url": ""},
                        "url": ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1"
                    },
                    "post": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1"
                    },
                    ":gplus_url:": "https://plus.google.com",
                    "signin": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
                        "methods": ["onauth"]
                    },
                    "rbr_i": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                    },
                    "share": {"url": ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1"},
                    "plusone": {
                        "params": {"count": "", "size": "", "url": ""},
                        "url": ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1"
                    },
                    "comments": {
                        "params": {"location": ["search", "hash"]},
                        "url": ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
                        "methods": ["scroll", "openwindow"]
                    },
                    ":im_socialhost:": "https://plus.googleapis.com",
                    "backdrop": {"url": "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1"},
                    "visibility": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1"
                    },
                    "autocomplete": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                    },
                    "additnow": {
                        "url": "https://apis.google.com/additnow/additnow.html?usegapi\u003d1",
                        "methods": ["launchurl"]
                    },
                    ":signuphost:": "https://plus.google.com",
                    "appcirclepicker": {"url": ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},
                    "follow": {"url": ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1"},
                    "community": {"url": ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1"},
                    "sharetoclassroom": {"url": "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1"},
                    "ytshare": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1"
                    },
                    "plus": {"url": ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1"},
                    "family_creation": {
                        "params": {"url": ""},
                        "url": "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1"
                    },
                    "reportabuse": {
                        "params": {"url": ""},
                        "url": ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi\u003d1"
                    },
                    "commentcount": {"url": ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1"},
                    "configurator": {"url": ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1"},
                    "zoomableimage": {"url": "https://ssl.gstatic.com/microscope/embed/"},
                    "savetowallet": {"url": "https://clients5.google.com/s2w/o/savetowallet"},
                    "person": {"url": ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1"},
                    "savetodrive": {
                        "url": "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
                        "methods": ["save"]
                    },
                    "page": {"url": ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1"},
                    "card": {"url": ":socialhost:/:session_prefix:_/hovercard/card"}
                }
            },
            "h": "m;/_/scs/apps-static/_/js/k\u003doz.gapi.fr.eSqlK4m4O4U.O/m\u003d__features__/am\u003dAQ/rt\u003dj/d\u003d1/rs\u003dAGLTcCMsGXJBDcTB18eH5TCba-IRiO2TAA",
            "u": "https://apis.google.com/js/client:platform.js?onload\u003dstartApp",
            "hee": true,
            "fp": "28fc131b7caf5f0a36ed5c153c37d629258e88a3",
            "dpo": false
        },
        "platform": ["additnow", "backdrop", "blogger", "comments", "commentcount", "community", "family_creation", "follow", "page", "partnersbadge", "person", "playreview", "plus", "plusone", "post", "reportabuse", "savetodrive", "savetowallet", "shortlists", "signin2", "udc_webconsentflow", "visibility", "youtube", "ytsubscribe", "zoomableimage", "hangout", "sharetoclassroom"],
        "fp": "28fc131b7caf5f0a36ed5c153c37d629258e88a3",
        "annotation": ["interactivepost", "recobar", "signin2", "autocomplete", "profile"],
        "bimodal": ["signin", "share"]
    }
});