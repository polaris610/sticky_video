/*
 * Copyright 2016 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function () {
	function aa(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}
	
	function ba(a, b, c) {
		if (!a) throw Error();
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
	}
	
	function p(a, b, c) {
		p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
		return p.apply(null, arguments)
	}
	
	var q = Date.now || function () {
		return +new Date
	};
	
	function ca(a, b) {
		this.a = a;
		this.m = b || a;
		this.c = this.m.document
	}
	
	var da = !!window.FontFace;
	
	function t(a, b, c, d) {
		b = a.c.createElement(b);
		if (c) for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
		d && b.appendChild(a.c.createTextNode(d));
		return b
	}
	
	function u(a, b, c) {
		a = a.c.getElementsByTagName(b)[0];
		a || (a = document.documentElement);
		a.insertBefore(c, a.lastChild)
	}
	
	function v(a) {
		a.parentNode && a.parentNode.removeChild(a)
	}
	
	function w(a, b, c) {
		b = b || [];
		c = c || [];
		for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
			for (var f = !1, g = 0; g < d.length; g += 1) if (b[e] === d[g]) {
				f = !0;
				break
			}
			f || d.push(b[e])
		}
		b = [];
		for (e = 0; e < d.length; e += 1) {
			f = !1;
			for (g = 0; g < c.length; g += 1) if (d[e] === c[g]) {
				f = !0;
				break
			}
			f || b.push(d[e])
		}
		a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
	}
	
	function y(a, b) {
		for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) if (c[d] == b) return !0;
		return !1
	}
	
	function z(a) {
		if ("string" === typeof a.f) return a.f;
		var b = a.m.location.protocol;
		"about:" == b && (b = a.a.location.protocol);
		return "https:" == b ? "https:" : "http:"
	}
	
	function ea(a) {
		return a.m.location.hostname || a.a.location.hostname
	}
	
	function A(a, b, c) {
		function d() {
			k && e && f && (k(g), k = null)
		}
		
		b = t(a, "link", {rel: "stylesheet", href: b, media: "all"});
		var e = !1, f = !0, g = null, k = c || null;
		da ? (b.onload = function () {
			e = !0;
			d()
		}, b.onerror = function () {
			e = !0;
			g = Error("Stylesheet failed to load");
			d()
		}) : setTimeout(function () {
			e = !0;
			d()
		}, 0);
		u(a, "head", b)
	}
	
	function B(a, b, c, d) {
		var e = a.c.getElementsByTagName("head")[0];
		if (e) {
			var f = t(a, "script", {src: b}), g = !1;
			f.onload = f.onreadystatechange = function () {
				g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
			};
			e.appendChild(f);
			setTimeout(function () {
				g || (g = !0, c && c(Error("Script load timeout")))
			}, d || 5E3);
			return f
		}
		return null
	};
	
	function C() {
		this.a = 0;
		this.c = null
	}
	
	function D(a) {
		a.a++;
		return function () {
			a.a--;
			E(a)
		}
	}
	
	function F(a, b) {
		a.c = b;
		E(a)
	}
	
	function E(a) {
		0 == a.a && a.c && (a.c(), a.c = null)
	};
	
	function G(a) {
		this.a = a || "-"
	}
	
	G.prototype.c = function (a) {
		for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
		return b.join(this.a)
	};
	
	function H(a, b) {
		this.c = a;
		this.f = 4;
		this.a = "n";
		var c = (b || "n4").match(/^([nio])([1-9])$/i);
		c && (this.a = c[1], this.f = parseInt(c[2], 10))
	}
	
	function fa(a) {
		return I(a) + " " + (a.f + "00") + " 300px " + J(a.c)
	}
	
	function J(a) {
		var b = [];
		a = a.split(/,\s*/);
		for (var c = 0; c < a.length; c++) {
			var d = a[c].replace(/['"]/g, "");
			-1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
		}
		return b.join(",")
	}
	
	function K(a) {
		return a.a + a.f
	}
	
	function I(a) {
		var b = "normal";
		"o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
		return b
	}
	
	function ga(a) {
		var b = 4, c = "n", d = null;
		a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
		return c + b
	};
	
	function ha(a, b) {
		this.c = a;
		this.f = a.m.document.documentElement;
		this.h = b;
		this.a = new G("-");
		this.j = !1 !== b.events;
		this.g = !1 !== b.classes
	}
	
	function ia(a) {
		a.g && w(a.f, [a.a.c("wf", "loading")]);
		L(a, "loading")
	}
	
	function M(a) {
		if (a.g) {
			var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
			b || c.push(a.a.c("wf", "inactive"));
			w(a.f, c, d)
		}
		L(a, "inactive")
	}
	
	function L(a, b, c) {
		if (a.j && a.h[b]) if (c) a.h[b](c.c, K(c)); else a.h[b]()
	};
	
	function ja() {
		this.c = {}
	}
	
	function ka(a, b, c) {
		var d = [], e;
		for (e in b) if (b.hasOwnProperty(e)) {
			var f = a.c[e];
			f && d.push(f(b[e], c))
		}
		return d
	};
	
	function N(a, b) {
		this.c = a;
		this.f = b;
		this.a = t(this.c, "span", {"aria-hidden": "true"}, this.f)
	}
	
	function O(a) {
		u(a.c, "body", a.a)
	}
	
	function P(a) {
		return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";")
	};
	
	function Q(a, b, c, d, e, f) {
		this.g = a;
		this.j = b;
		this.a = d;
		this.c = c;
		this.f = e || 3E3;
		this.h = f || void 0
	}
	
	Q.prototype.start = function () {
		var a = this.c.m.document, b = this, c = q(), d = new Promise(function (d, e) {
			function k() {
				q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
					1 <= a.length ? d() : setTimeout(k, 25)
				}, function () {
					e()
				})
			}
			
			k()
		}), e = new Promise(function (a, d) {
			setTimeout(d, b.f)
		});
		Promise.race([e, d]).then(function () {
			b.g(b.a)
		}, function () {
			b.j(b.a)
		})
	};
	
	function R(a, b, c, d, e, f, g) {
		this.v = a;
		this.B = b;
		this.c = c;
		this.a = d;
		this.s = g || "BESbswy";
		this.f = {};
		this.w = e || 3E3;
		this.u = f || null;
		this.o = this.j = this.h = this.g = null;
		this.g = new N(this.c, this.s);
		this.h = new N(this.c, this.s);
		this.j = new N(this.c, this.s);
		this.o = new N(this.c, this.s);
		a = new H(this.a.c + ",serif", K(this.a));
		a = P(a);
		this.g.a.style.cssText = a;
		a = new H(this.a.c + ",sans-serif", K(this.a));
		a = P(a);
		this.h.a.style.cssText = a;
		a = new H("serif", K(this.a));
		a = P(a);
		this.j.a.style.cssText = a;
		a = new H("sans-serif", K(this.a));
		a =
			P(a);
		this.o.a.style.cssText = a;
		O(this.g);
		O(this.h);
		O(this.j);
		O(this.o)
	}
	
	var S = {D: "serif", C: "sans-serif"}, T = null;
	
	function U() {
		if (null === T) {
			var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
			T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
		}
		return T
	}
	
	R.prototype.start = function () {
		this.f.serif = this.j.a.offsetWidth;
		this.f["sans-serif"] = this.o.a.offsetWidth;
		this.A = q();
		la(this)
	};
	
	function ma(a, b, c) {
		for (var d in S) if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]]) return !0;
		return !1
	}
	
	function la(a) {
		var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
		(d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));
		d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v)
	}
	
	function na(a) {
		setTimeout(p(function () {
			la(this)
		}, a), 50)
	}
	
	function V(a, b) {
		setTimeout(p(function () {
			v(this.g.a);
			v(this.h.a);
			v(this.j.a);
			v(this.o.a);
			b(this.a)
		}, a), 0)
	};
	
	function W(a, b, c) {
		this.c = a;
		this.a = b;
		this.f = 0;
		this.o = this.j = !1;
		this.s = c
	}
	
	var X = null;
	W.prototype.g = function (a) {
		var b = this.a;
		b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);
		L(b, "fontactive", a);
		this.o = !0;
		oa(this)
	};
	W.prototype.h = function (a) {
		var b = this.a;
		if (b.g) {
			var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
			c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));
			w(b.f, d, e)
		}
		L(b, "fontinactive", a);
		oa(this)
	};
	
	function oa(a) {
		0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a))
	};
	
	function pa(a) {
		this.j = a;
		this.a = new ja;
		this.h = 0;
		this.f = this.g = !0
	}
	
	pa.prototype.load = function (a) {
		this.c = new ca(this.j, a.context || this.j);
		this.g = !1 !== a.events;
		this.f = !1 !== a.classes;
		qa(this, new ha(this.c, a), a)
	};
	
	function ra(a, b, c, d, e) {
		var f = 0 == --a.h;
		(a.f || a.g) && setTimeout(function () {
			var a = e || null, k = d || null || {};
			if (0 === c.length && f) M(b.a); else {
				b.f += c.length;
				f && (b.j = f);
				var h, m = [];
				for (h = 0; h < c.length; h++) {
					var l = c[h], n = k[l.c], r = b.a, x = l;
					r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);
					L(r, "fontloading", x);
					r = null;
					null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);
					X ? r = new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : r = new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a,
						n);
					m.push(r)
				}
				for (h = 0; h < m.length; h++) m[h].start()
			}
		}, 0)
	}
	
	function qa(a, b, c) {
		var d = [], e = c.timeout;
		ia(b);
		var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
		a.h = d.length;
		b = 0;
		for (c = d.length; b < c; b++) d[b].load(function (b, d, c) {
			ra(a, f, b, d, c)
		})
	};
	
	function sa(a, b) {
		this.c = a;
		this.a = b
	}
	
	function ta(a, b, c) {
		var d = z(a.c);
		a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
		return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "")
	}
	
	sa.prototype.load = function (a) {
		function b() {
			if (f["__mti_fntLst" + d]) {
				var c = f["__mti_fntLst" + d](), e = [], h;
				if (c) for (var m = 0; m < c.length; m++) {
					var l = c[m].fontfamily;
					void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l))
				}
				a(e)
			} else setTimeout(function () {
				b()
			}, 50)
		}
		
		var c = this, d = c.a.projectId, e = c.a.version;
		if (d) {
			var f = c.c.m;
			B(this.c, ta(c, d, e), function (e) {
				e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
					return c.a
				}, b())
			}).id = "__MonotypeAPIScript__" +
				d
		} else a([])
	};
	
	function ua(a, b) {
		this.c = a;
		this.a = b
	}
	
	ua.prototype.load = function (a) {
		var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new C;
		b = 0;
		for (c = d.length; b < c; b++) A(this.c, d[b], D(g));
		var k = [];
		b = 0;
		for (c = e.length; b < c; b++) if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), m = 0; m < h.length; m += 1) k.push(new H(d[0], h[m])); else k.push(new H(d[0]));
		F(g, function () {
			a(k, f)
		})
	};
	
	function va(a, b, c) {
		a ? this.c = a : this.c = b + wa;
		this.a = [];
		this.f = [];
		this.g = c || ""
	}
	
	var wa = "//fonts.googleapis.com/css";
	
	function xa(a, b) {
		for (var c = b.length, d = 0; d < c; d++) {
			var e = b[d].split(":");
			3 == e.length && a.f.push(e.pop());
			var f = "";
			2 == e.length && "" != e[1] && (f = ":");
			a.a.push(e.join(f))
		}
	}
	
	function ya(a) {
		if (0 == a.a.length) throw Error("No fonts to load!");
		if (-1 != a.c.indexOf("kit=")) return a.c;
		for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+"));
		b = a.c + "?family=" + c.join("%7C");
		0 < a.f.length && (b += "&subset=" + a.f.join(","));
		0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
		return b
	};
	
	function za(a) {
		this.f = a;
		this.a = [];
		this.c = {}
	}
	
	var Aa = {latin: "BESbswy", "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f", cyrillic: "\u0439\u044f\u0416", greek: "\u03b1\u03b2\u03a3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782"},
		Ba = {
			thin: "1",
			extralight: "2",
			"extra-light": "2",
			ultralight: "2",
			"ultra-light": "2",
			light: "3",
			regular: "4",
			book: "4",
			medium: "5",
			"semi-bold": "6",
			semibold: "6",
			"demi-bold": "6",
			demibold: "6",
			bold: "7",
			"extra-bold": "8",
			extrabold: "8",
			"ultra-bold": "8",
			ultrabold: "8",
			black: "9",
			heavy: "9",
			l: "3",
			r: "4",
			b: "7"
		}, Ca = {i: "i", italic: "i", n: "n", normal: "n"},
		Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
	
	function Ea(a) {
		for (var b = a.f.length, c = 0; c < b; c++) {
			var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
			if (2 <= d.length) {
				var g;
				var k = d[1];
				g = [];
				if (k) for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
					var l;
					l = k[m];
					if (l.match(/^[\w-]+$/)) {
						var n = Da.exec(l.toLowerCase());
						if (null == n) l = ""; else {
							l = n[2];
							l = null == l || "" == l ? "n" : Ca[l];
							n = n[1];
							if (null == n || "" == n) n = "4"; else var r = Ba[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
							l = [l, n].join("")
						}
					} else l = "";
					l && g.push(l)
				}
				0 < g.length && (f = g);
				3 == d.length && (d = d[2], g = [], d = d ? d.split(",") :
					g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d))
			}
			a.c[e] || (d = Aa[e]) && (a.c[e] = d);
			for (d = 0; d < f.length; d += 1) a.a.push(new H(e, f[d]))
		}
	};
	
	function Fa(a, b) {
		this.c = a;
		this.a = b
	}
	
	var Ga = {Arimo: !0, Cousine: !0, Tinos: !0};
	Fa.prototype.load = function (a) {
		var b = new C, c = this.c, d = new va(this.a.api, z(c), this.a.text), e = this.a.families;
		xa(d, e);
		var f = new za(e);
		Ea(f);
		A(c, ya(d), D(b));
		F(b, function () {
			a(f.a, f.c, Ga)
		})
	};
	
	function Ha(a, b) {
		this.c = a;
		this.a = b
	}
	
	Ha.prototype.load = function (a) {
		var b = this.a.id, c = this.c.m;
		b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
			if (b) a([]); else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
				b = c.Typekit.config.fn;
				for (var e = [], f = 0; f < b.length; f += 2) for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++) e.push(new H(g, k[h]));
				try {
					c.Typekit.load({events: !1, classes: !1, async: !0})
				} catch (m) {
				}
				a(e)
			}
		}, 2E3) : a([])
	};
	
	function Ia(a, b) {
		this.c = a;
		this.f = b;
		this.a = []
	}
	
	Ia.prototype.load = function (a) {
		var b = this.f.id, c = this.c.m, d = this;
		b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
			for (var g = 0, k = c.fonts.length; g < k; ++g) {
				var h = c.fonts[g];
				d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
			}
			a(d.a)
		}, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
			b && a([])
		})) : a([])
	};
	var Y = new pa(window);
	Y.a.c.custom = function (a, b) {
		return new ua(b, a)
	};
	Y.a.c.fontdeck = function (a, b) {
		return new Ia(b, a)
	};
	Y.a.c.monotype = function (a, b) {
		return new sa(b, a)
	};
	Y.a.c.typekit = function (a, b) {
		return new Ha(b, a)
	};
	Y.a.c.google = function (a, b) {
		return new Fa(b, a)
	};
	var Z = {load: p(Y.load, Y)};
	"function" === typeof define && define.amd ? define(function () {
		return Z
	}) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
}());
(function () {
	var DOM_video, DOM_videoTag, DOM_placeholder, DOM_player,
		DOM_rootOuterContainer,
		topOffsetTrigger,
		originalVideoTagWidthAttr, originalVideoTagHeightAttr, originalVideoTagStyleAttr,
		originalMejsStyleAttr,
		showVid = true,
		videoType = 'none', playerHandler = null,
		supportedPlayersQuerySelector = '', player_i,
		_emptyFunction = function () {
		}, _returnFalseFunction = function () {
			return false;
		},
		currentWindowWidth = document.documentElement.clientWidth,
		currentWindowHeight = window.innerHeight || document.documentElement.clientHeight,
		isMobileMQ = (currentWindowWidth <= window.cornerVideo.params['mobile-breakpoint']),
		cornerVideoFinalWidth = window.cornerVideo.params['video-width' + (isMobileMQ ? '-mobile' : '')],
		videoComputedStyle = null,
		originalOuterWidth = 0,
		originalOuterHeight = 0,
		originalInnerWidth = 0,
		originalInnerHeight = 0,
		cornerVideoFinalHeight = 100,
		cornerVideoVerticalOffset = window.cornerVideo.params['position-vertical-offset' + (isMobileMQ ? '-mobile' : '')],
		cornerVideoSideOffset = window.cornerVideo.params['position-side-offset' + (isMobileMQ ? '-mobile' : '')],
		originalWidthAttr = '',
		originalHeightAttr = '',
		originalStyleAttr = '',
		isStickyNow = false,
		clickedClose = false;
	// window.cornerVideo.params['enable-close-button'] = true;
	if (window.cornerVideo.params['enable-cta'] === undefined) {
		window.cornerVideo.params['enable-cta'] = false;//true
		// window.cornerVideo.params['enable-cta'] = true;//true
		window.cornerVideo.params['cta-color'] = '#000000';
		window.cornerVideo.params['cta-text-color'] = '#ffffff';
		window.cornerVideo.params['cta-border-radius'] = 6;
		window.cornerVideo.params['cta-border-width'] = 0;
		window.cornerVideo.params['cta-border-line'] = 'solid';
		window.cornerVideo.params['cta-border-color'] = 'black';
		window.cornerVideo.params['cta-box-shadow-x'] = 0;
		window.cornerVideo.params['cta-box-shadow-y'] = 0;
		window.cornerVideo.params['cta-box-shadow-blur'] = 16;
		window.cornerVideo.params['cta-box-shadow-color'] = '#000088';
		window.cornerVideo.params['cta-text'] = 'Buy Now';
		window.cornerVideo.params['cta-url'] = 'https://clickperfect.com';
		window.cornerVideo.params['cta-target'] = 'new-window';//none
		window.cornerVideo.params['cta-font-size'] = 24;//none
		window.cornerVideo.params['cta-padding'] = 16;//none
		window.cornerVideo.params['cta-margin'] = 0;//none
		window.cornerVideo.params['cta-close-margin'] = 4;//none
		window.cornerVideo.params['cta-font'] = 'Poppins';//none
		window.cornerVideo.params['cta-color2'] = '#0398d3';//none
	}
	
	if (window.cornerVideo.params['hide-powered-by'] === undefined) {
		window.cornerVideo.params['hide-powered-by'] = false;//true
		window.cornerVideo.params['powered-by-link'] = 'cornervideos.com';//false
	}
	
	var dom_matches =
		document.body.matches ? 'matches' :
			document.body.webkitMatchesSelector ? 'webkitMatchesSelector' :
				document.body.mozMatchesSelector ? 'mozMatchesSelector' :
					document.body.msMatchesSelector ? 'msMatchesSelector' :
						null;
	
	//------------------------------------------------------------
	// Supported <iframe> sources
	//------------------------------------------------------------
	
	var iframeEmbedServ = {
		youtube: /^(http[s]?:\/\/|\/\/)?(www\.)?youtube\.com\/embed\//,
		vimeo: /^(http[s]?:\/\/|\/\/)?player\.vimeo\.com\/video\//,
		facebook: /^(http[s]?:\/\/|\/\/)?(www\.)?facebook\.com\/plugins\/video\.php/,
		twitch: /^(http[s]?:\/\/|\/\/)?player\.twitch\.tv\//,
		brightcove: /^(http[s]?:\/\/|\/\/)?players\.brightcove\.net\//,
		jwplatform: /^(http[s]?:\/\/|\/\/)?content\.jwplatform\.com\/players\//,
		dailymotion: /^(http[s]?:\/\/|\/\/)?(www\.)?dailymotion\.com\/embed\/video\//,
		youku: /^(http[s]?:\/\/|\/\/)?(player\.)?youku\.com\/embed\//,
		tudou: /^(http[s]?:\/\/|\/\/)?(www\.)?tudou\.com\/programs\/view\/html5embed/,
		wistia: /^(http[s]?:\/\/|\/\/)?(fast\.|www\.)?wistia\.(net|com)\/embed\/iframe\//,
		schooltube: /^(http[s]?:\/\/|\/\/)?(www\.)?schooltube\.com\/embed_force\//,
		break: /^(http[s]?:\/\/|\/\/)?(www\.)?break\.com\/embed\//,
		metacafe: /^(http[s]?:\/\/|\/\/)?(www\.)?metacafe\.com\/embed\//,
		liveleak: /^(http[s]?:\/\/|\/\/)?(www\.)?liveleak\.com\/ll_embed\?/,
		archive: /^(http[s]?:\/\/|\/\/)?(www\.)?archive\.org\/embed\//
	};
	
	//------------------------------------------------------------
	// Supported players
	//------------------------------------------------------------
	
	var playerHandlers = {
		wpVideo: {
			selector: '.wp-video',
			init: function () {
				DOM_videoTag = DOM_video.querySelector('video');
				DOM_player = DOM_video.querySelector('.mejs-video');
			},
			preStickyness: function () {
				originalVideoTagWidthAttr = DOM_videoTag.getAttribute('width');
				originalVideoTagHeightAttr = DOM_videoTag.getAttribute('height');
				originalVideoTagStyleAttr = DOM_videoTag.getAttribute('style');
				if (DOM_player) { // do not remove, in certain cases mejs is not used
					originalMejsStyleAttr = DOM_player.getAttribute('style');
				}
			},
			preFinalPositioning: function () {
				DOM_videoTag.removeAttribute('width');
				DOM_videoTag.removeAttribute('height');
				DOM_videoTag.style.setProperty('max-width', '100%', 'important');
			},
			preTransitioning: function () {
				if (DOM_player) { // do not remove, in certain cases mejs is not used
					mejs.players[DOM_player.id].setPlayerSize(cornerVideoFinalWidth, cornerVideoFinalHeight);
					mejs.players[DOM_player.id].setControlsSize();
				}
			},
			resetStickyness: function () {
				DOM_videoTag.setAttribute('style', originalVideoTagStyleAttr);
				DOM_videoTag.setAttribute('width', originalVideoTagWidthAttr);
				DOM_videoTag.setAttribute('height', originalVideoTagHeightAttr);
			},
			preResetTransitioning: function () {
				if (DOM_player) { // do not remove, in certain cases mejs is not used
					mejs.players[DOM_player.id].setPlayerSize();
					mejs.players[DOM_player.id].setControlsSize();
				}
			},
			isVideoPaused: function () {
				return DOM_videoTag.paused;
			}
		},
		
		jwplayer: {
			selector: '.jwplayer',
			init: _emptyFunction,
			preStickyness: _emptyFunction,
			preFinalPositioning: _emptyFunction,
			preTransitioning: _emptyFunction,
			resetStickyness: _emptyFunction,
			preResetTransitioning: _emptyFunction,
			isVideoPaused: _returnFalseFunction // no support yet
		},
		
		wistia: { // https://wistia.com/doc/player-api
			selector: '.wistia_embed',
			init: _emptyFunction,
			preStickyness: function () {
				// Note: better keep this initialization here, and not inside "init", cuz at the time
				// init executes the video might not have been initialized (due to async)
				// Also note that "!DOM_player" prevents multiple initializations
				if (!DOM_player && Wistia && Wistia.api) DOM_player = Wistia.api(DOM_video.id);
			},
			preFinalPositioning: _emptyFunction,
			preTransitioning: function () {
				if (DOM_player) {
					DOM_player.videoHeight(cornerVideoFinalHeight);
					DOM_player.videoWidth(cornerVideoFinalWidth);
				}
			},
			resetStickyness: _emptyFunction,
			preResetTransitioning: function () {
				if (DOM_player) {
					DOM_player.videoHeight(originalOuterHeight);
					DOM_player.videoWidth(originalOuterWidth);
				}
			},
			isVideoPaused: function () {
				if (!DOM_player && Wistia && Wistia.api) DOM_player = Wistia.api(DOM_video.id);
				return DOM_player && DOM_player.state() !== 'playing';
			}
		},
		html5: {
			selector: 'video',
			init: _emptyFunction,
			preStickyness: _emptyFunction,
			preFinalPositioning: function () {
				DOM_video.style.setProperty('max-width', '100%', 'important');
			},
			preTransitioning: _emptyFunction,
			resetStickyness: _emptyFunction,
			preResetTransitioning: _emptyFunction,
			isVideoPaused: function () {
				return DOM_video.paused;
			}
		}
		
	};
	
	function getDomVideo() {
		DOM_placeholder = document.getElementById('sticky-video--placeholder');
		for (player_i in playerHandlers) {
			supportedPlayersQuerySelector += playerHandlers[player_i].selector + (player_i === 'html5' ? '' : ',');
		}
		if (typeof window.cornerVideo.params['forced-selector'] == 'string') {
			DOM_video = document.querySelector(window.cornerVideo.params['forced-selector']);
			if (DOM_video) {
				videoType = 'forced';
				return;
			}
		}
		// --------- Select the targeted video --------- //
		DOM_rootOuterContainer = document.body; // default value, used by the "auto-select" method later on
		if (window.cornerVideo.params['selecting-method'] === 'class') {
			DOM_video = document.querySelector('.forced-sticky-video'); // special forced case
			if (DOM_video) {
				videoType = 'forced';
				return;
			}
			DOM_video = document.querySelector('.sticky-video');
			if (!DOM_video) {
				DOM_rootOuterContainer = document.querySelector('.contains-sticky-video');
				if (!DOM_rootOuterContainer) return; // no sticky classes have been found at all, do not proceed
			}
		}
		
		if (!DOM_video) {
			DOM_video = DOM_rootOuterContainer.querySelector(supportedPlayersQuerySelector);
			if (!DOM_video) DOM_video = DOM_rootOuterContainer.getElementsByTagName('iframe');
			if (!DOM_video || DOM_video.length === 0) return; // no sticky-video have been detected at all
		}
		
		// Player embed
		if (typeof DOM_video.tagName === 'string' && DOM_video.tagName.toLowerCase() !== 'iframe') {
			for (player_i in playerHandlers) {
				if (DOM_video[dom_matches](playerHandlers[player_i].selector)) {
					videoType = 'player';
					playerHandler = playerHandlers[player_i];
					playerHandler.init();
					return; // == break
				}
			}
		} else {
			if (typeof DOM_video.tagName === 'string' && DOM_video.tagName.toLowerCase() === 'iframe')
				DOM_video = [DOM_video];
			var src, i;
			for (i = 0; i < DOM_video.length; i++) {
				src = DOM_video[i].getAttribute('src');
				if (typeof src !== 'string') continue;
				for (var serviceID in iframeEmbedServ) {
					if (iframeEmbedServ[serviceID].test(src)) {
						videoType = 'iframe';
						DOM_video = DOM_video[i];
						return;
					}
				}
			}
		}
		
		if (DOM_video === null) {
			var videoWrapper = document.querySelector(".video_wrapper.widescreen");
			if (videoWrapper && videoWrapper !== null) {
				var childNode = videoWrapper.childNodes;
				DOM_video = document.querySelector(".video_wrapper.widescreen>iframe");
				for (i = 0; i < childNode.length; i++) {
					if (childNode[i].tagName === 'IFRAME') {
						DOM_video = childNode[i];
					}
				}
			}
		}
	}
	
	if (window.cornerVideo.params['cta-font'] !== 'Arial' && window.cornerVideo.params['cta-font'] !== 'Fantasy') {
		if (WebFont) {
			WebFont.load({
				google: {
					families: [window.cornerVideo.params['cta-font']]
				}
			});
		}
	}
	
	var _initCloseButton = function () {
		var closeBtn = document.createElement('button');
		closeBtn.setAttribute('id', 'sticky_close__btn');
		closeBtn.style.setProperty('width', '40px');
		closeBtn.style.setProperty('cursor', 'pointer');
		closeBtn.style.setProperty('height', 30 + window.cornerVideo.params['cta-padding'] * 2 + 'px');
		closeBtn.style.setProperty('position', 'absolute');
		closeBtn.style.setProperty('z-index', '999999999');
		closeBtn.style.setProperty('top', (-1) * (30 + window.cornerVideo.params['cta-padding'] * 2) + 'px');
		closeBtn.style.setProperty('left', '0');
		closeBtn.style.setProperty('bottom', 'auto');
		closeBtn.style.setProperty('right', 'auto');
		closeBtn.style.setProperty('opacity', '0');
		closeBtn.style.setProperty('font-size', window.cornerVideo.params['cta-font-size'] + 'px');
		closeBtn.style.setProperty('padding', window.cornerVideo.params['cta-padding'] + 'px 0px');
		closeBtn.style.setProperty('margin', window.cornerVideo.params['cta-margin'] + 'px 0px');
		closeBtn.style.setProperty('will-change', 'opacity, transform, position');
		if (!window.cornerVideo.params['cta-color2'] || window.cornerVideo.params['cta-color2'] === 'none') {
			closeBtn.style.setProperty('background-color', window.cornerVideo.params['cta-color']);
		} else {
			closeBtn.style.setProperty('background-image', 'linear-gradient(' + window.cornerVideo.params['cta-color'] + ', ' + window.cornerVideo.params['cta-color2'] + ')');
		}
		closeBtn.style.setProperty('color', window.cornerVideo.params['cta-text-color']);
		closeBtn.style.setProperty('border-radius', window.cornerVideo.params['cta-border-radius'] + 'px', 'important');
		closeBtn.style.setProperty('border',
			window.cornerVideo.params['cta-border-width'] + 'px ' + window.cornerVideo.params['cta-border-line'] + ' ' + window.cornerVideo.params['cta-border-color']);
		closeBtn.style.setProperty('box-shadow',
			window.cornerVideo.params['cta-box-shadow-x'] + 'px ' + window.cornerVideo.params['cta-box-shadow-y'] + 'px ' + window.cornerVideo.params['cta-box-shadow-blur'] + 'px ' + window.cornerVideo.params['cta-box-shadow-color']);
		closeBtn.innerHTML = '&times;';
		closeBtn.addEventListener('click', function () {
			clickedClose = true;
			window.localStorage.setItem('clickedClose', 'true');
			closeBtn.style.setProperty('opacity', '0', 'important');
			DOM_video.setAttribute('style', originalStyleAttr);
			DOM_video.setAttribute('width', originalWidthAttr);
			DOM_video.setAttribute('height', originalHeightAttr);
			var _ctaBtn = document.querySelector('#sticky_cta__btn');
			if (_ctaBtn) _ctaBtn.style.setProperty('opacity', '0', 'important');
			var _powerLink = document.querySelector('#sticky_power_by__link');
			if (_powerLink) _powerLink.style.setProperty('opacity', '0', 'important');
		});
		
		return closeBtn;
	};
	
	var _initCTAButton = function () {
		var ctaButton = document.createElement('button');
		ctaButton.setAttribute('id', 'sticky_cta__btn');
		ctaButton.style.setProperty('min-width', '100px');
		ctaButton.style.setProperty('cursor', 'pointer');
		ctaButton.style.setProperty('width', (cornerVideoFinalWidth - (window.cornerVideo.params['enable-close-button'] ? (40 + window.cornerVideo.params['cta-close-margin']) : 0)) + 'px');
		ctaButton.style.setProperty('max-width', (cornerVideoFinalWidth - (window.cornerVideo.params['enable-close-button'] ? (40 + window.cornerVideo.params['cta-close-margin']) : 0)) + 'px');
		ctaButton.style.setProperty('height', 30 + window.cornerVideo.params['cta-padding'] * 2 + 'px');
		ctaButton.style.setProperty('position', 'absolute');
		ctaButton.style.setProperty('z-index', '999999999');
		ctaButton.style.setProperty('top', (-1) * (30 + window.cornerVideo.params['cta-padding'] * 2) + 'px');
		ctaButton.style.setProperty('left', '0');
		ctaButton.style.setProperty('bottom', 'auto');
		ctaButton.style.setProperty('right', 'auto');
		ctaButton.style.setProperty('opacity', '0');
		ctaButton.style.setProperty('will-change', 'opacity, transform, position');
		ctaButton.style.setProperty('font-family', window.cornerVideo.params['cta-font'], 'important');
		ctaButton.style.setProperty('font-size', window.cornerVideo.params['cta-font-size'] + 'px');
		ctaButton.style.setProperty('padding', window.cornerVideo.params['cta-padding'] + 'px 0px');
		ctaButton.style.setProperty('margin', window.cornerVideo.params['cta-margin'] + 'px ' + (window.cornerVideo.params['enable-close-button'] ? window.cornerVideo.params['cta-close-margin'] : 0) + 'px ' + window.cornerVideo.params['cta-margin'] + 'px 0px');
		ctaButton.innerHTML = window.cornerVideo.params['cta-text'];
		if (!window.cornerVideo.params['cta-color2'] || window.cornerVideo.params['cta-color2'] === 'none') {
			ctaButton.style.setProperty('background-color', window.cornerVideo.params['cta-color']);
		} else {
			ctaButton.style.setProperty('background-image', 'linear-gradient(' + window.cornerVideo.params['cta-color'] + ', ' + window.cornerVideo.params['cta-color2'] + ')');
		}
		ctaButton.style.setProperty('color', window.cornerVideo.params['cta-text-color']);
		ctaButton.style.setProperty('border-radius', window.cornerVideo.params['cta-border-radius'] + 'px', 'important');
		ctaButton.style.setProperty('border',
			window.cornerVideo.params['cta-border-width'] + 'px ' + window.cornerVideo.params['cta-border-line'] + ' ' + window.cornerVideo.params['cta-border-color']);
		ctaButton.style.setProperty('box-shadow',
			window.cornerVideo.params['cta-box-shadow-x'] + 'px ' + window.cornerVideo.params['cta-box-shadow-y'] + 'px ' + window.cornerVideo.params['cta-box-shadow-blur'] + 'px ' + window.cornerVideo.params['cta-box-shadow-color']);
		ctaButton.addEventListener('click', function () {
			window.open(window.cornerVideo.params['cta-url'], window.cornerVideo.params['cta-target'] === 'none' ? '_self' : '_blank');
		});
		
		return ctaButton;
	};
	
	var _initPowerByLink = function () {
		var powerByLink = document.createElement('div');
		powerByLink.setAttribute('id', 'sticky_power_by__link');
		powerByLink.style.setProperty('width', cornerVideoFinalWidth + 'px');
		powerByLink.style.setProperty('height', '17px');
		powerByLink.style.setProperty('padding-top', '2px');
		powerByLink.style.setProperty('line-height', '14px');
		powerByLink.style.setProperty('font-size', '14px');
		powerByLink.style.setProperty('font-family', 'Arial, sans-serif');
		powerByLink.style.setProperty('color', 'darkgrey');
		powerByLink.style.setProperty('text-align', 'center');
		powerByLink.style.setProperty('text-decoration', 'none', 'important');
		powerByLink.style.setProperty('opacity', '0');
		powerByLink.style.setProperty('will-change', 'opacity, transform, position');
		powerByLink.style.setProperty('position', 'absolute');
		powerByLink.style.setProperty('z-index', '99999999999');
		powerByLink.style.setProperty('top', '0px');
		powerByLink.style.setProperty('right', 'auto');
		powerByLink.style.setProperty('bottom', 'auto');
		powerByLink.style.setProperty('left', '0px');
		powerByLink.style.setProperty('cursor', 'pointer');
		powerByLink.innerHTML = 'powered by <a style="color: #3f83f2;font-weight: bold;text-decoration: none !important;" href="' + window.cornerVideo.params['powered-by-link'] + '" target="_blank">' + window.cornerVideo.params['powered-by-link'].replace(/(^\w+:|^)\/\//, '') + '</a>';
		
		return powerByLink;
	};
	
	var _onWindowResize = function () {
		currentWindowWidth = document.documentElement.clientWidth;
		currentWindowHeight = window.innerHeight || document.documentElement.clientHeight;
		isMobileMQ = (currentWindowWidth <= window.cornerVideo.params['mobile-breakpoint']);
		cornerVideoFinalWidth = window.cornerVideo.params['video-width' + (isMobileMQ ? '-mobile' : '')];
		cornerVideoVerticalOffset = window.cornerVideo.params['position-vertical-offset' + (isMobileMQ ? '-mobile' : '')];
		cornerVideoSideOffset = window.cornerVideo.params['position-side-offset' + (isMobileMQ ? '-mobile' : '')];
		getDomVideo();
		if (DOM_video !== null) {
			videoComputedStyle = window.getComputedStyle(DOM_video);
			originalOuterWidth = parseInt(videoComputedStyle.getPropertyValue('width'));
			originalOuterHeight = parseInt(videoComputedStyle.getPropertyValue('height'));
			cornerVideoFinalHeight = (cornerVideoFinalWidth / originalOuterWidth) * originalOuterHeight;
			var _ctaBtn = document.querySelector('#sticky_cta__btn');
			if (_ctaBtn) _ctaBtn.style.setProperty('width',
				(cornerVideoFinalWidth - (window.cornerVideo.params['enable-close-button'] ? (40 + window.cornerVideo.params['cta-close-margin']) : 0)) + 'px');
			var powerByLink = document.querySelector('#sticky_power_by__link');
			if (powerByLink) powerByLink.style.setProperty('width', cornerVideoFinalWidth + 'px');
			if (isStickyNow) {
				switch (window.cornerVideo.params["video-position"]) {
					case 'top':
						DOM_video.style.setProperty('top', cornerVideoVerticalOffset + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
						break;
					case 'bottom':
						DOM_video.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight - cornerVideoVerticalOffset)) + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
						break;
					case 'right':
						DOM_video.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 20 + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
						break;
					case 'left':
						DOM_video.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 20 + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left', cornerVideoSideOffset + 'px', 'important');
						break;
					case 'middle':
						DOM_video.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 20 + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
						break;
					case 'top-left':
					case 'top-right':
						DOM_video.style.setProperty('top', cornerVideoVerticalOffset + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left',
							window.cornerVideo.params['video-position'].indexOf('-left') !== -1 ?
								cornerVideoSideOffset + 'px' : Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
						break;
					case 'bottom-left':
					case 'bottom-right':
						DOM_video.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight - cornerVideoVerticalOffset)) + 'px', 'important');
						DOM_video.style.setProperty('right', 'auto', 'important');
						DOM_video.style.setProperty('bottom', 'auto', 'important');
						DOM_video.style.setProperty('left',
							window.cornerVideo.params['video-position'].indexOf('-left') !== -1 ?
								cornerVideoSideOffset + 'px' : Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
						break;
				}
				setTimeout(__showBtnCta, 500);
				setTimeout(__showBtnCls, 500);
				setTimeout(__showPowerLink, 500);
			}
		}
	};
	
	var _wait2;
	var fn_checkStickynessOnResize = function () {
		clearTimeout(_wait2);
		_wait2 = setTimeout(_onWindowResize, 100);
	};
	
	window.onload = function () {
		window.localStorage.setItem('clickedClose', 'false');
		if (!window.cornerVideo.params["transition-type"] || window.cornerVideo.params["transition-type"] === undefined) {
			window.cornerVideo.params["transition-type"] = "none";
		}
		if (!window.cornerVideo.params["transition-duration"] || window.cornerVideo.params["transition-duration"] === undefined) {
			window.cornerVideo.params["transition-duration"] = 500;
		}
		getDomVideo();
		if (DOM_video !== null) {
			var videoWrapper = DOM_video.parentNode;
			if (videoWrapper && videoWrapper !== null) {
				// Close button created
				videoWrapper.appendChild(_initCloseButton());
				videoWrapper.appendChild(_initCTAButton());
				videoWrapper.appendChild(_initPowerByLink());
				
				if (videoWrapper.parentNode.tagName !== "BODY") {
					reSetZIndex(videoWrapper, videoWrapper.parentNode.parentNode, videoWrapper.parentNode);
				} else {
					videoWrapper.style.setProperty("z-index", "99999999999", "important");
				}
			}
			originalWidthAttr = DOM_video.getAttribute('width');
			originalHeightAttr = DOM_video.getAttribute('height');
			originalStyleAttr = DOM_video.getAttribute('style');
			fn_checkStickynessOnResize();
			fn_checkStickynessOnScroll();
		}
	};
	
	function __showBtnCta() {
		if (!window.cornerVideo.params['enable-cta']) {
			return;
		}
		if (isStickyNow) {
			var _ctaBtn = document.querySelector('#sticky_cta__btn');
			var closeBtn = document.querySelector('#sticky_close__btn');
			_ctaBtn.style.setProperty('opacity', '1', 'important');
			_ctaBtn.style.setProperty('position', 'fixed', 'important');
			if (window.cornerVideo.params['video-position'].indexOf('top') > -1) {
				_ctaBtn.style.setProperty('top', cornerVideoFinalHeight + cornerVideoVerticalOffset + 1 + 'px', 'important');
				_ctaBtn.style.setProperty('bottom', 'auto', 'important');
				if (window.cornerVideo.params['video-position'].indexOf('-left') > -1) {
					_ctaBtn.style.setProperty('left',
						(window.cornerVideo.params['enable-close-button'] && closeBtn) ? (cornerVideoSideOffset + 40 + 'px') : cornerVideoSideOffset + 'px', 'important');
					_ctaBtn.style.setProperty('right', 'auto', 'important');
				} else {
					_ctaBtn.style.setProperty('left', 'auto', 'important');
					_ctaBtn.style.setProperty('right',
						(window.cornerVideo.params['enable-close-button'] && closeBtn) ? (cornerVideoSideOffset + 40 + 'px') : cornerVideoSideOffset + 'px', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'top') {
					var _left_val = Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2);
					_ctaBtn.style.setProperty('left', _left_val + 'px', 'important');
					_ctaBtn.style.setProperty('right', 'auto', 'important');
				}
			} else {
				_ctaBtn.style.setProperty('top', 'auto', 'important');
				_ctaBtn.style.setProperty('bottom', cornerVideoFinalHeight + cornerVideoVerticalOffset + 1 + 'px', 'important');
				if (window.cornerVideo.params['video-position'].indexOf('left') > -1) {
					_ctaBtn.style.setProperty('left',
						(window.cornerVideo.params['enable-close-button'] && closeBtn) ? (cornerVideoSideOffset + 40) + 'px' : cornerVideoSideOffset + 'px', 'important');
					_ctaBtn.style.setProperty('right', 'auto', 'important');
				} else {
					_ctaBtn.style.setProperty('left', 'auto', 'important');
					_ctaBtn.style.setProperty('right',
						(window.cornerVideo.params['enable-close-button'] && closeBtn) ? (cornerVideoSideOffset + 40) + 'px' : cornerVideoSideOffset + 'px', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'bottom' || window.cornerVideo.params['video-position'] === 'middle') {
					_ctaBtn.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
					_ctaBtn.style.setProperty('right', 'auto', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'left' || window.cornerVideo.params['video-position'] === 'right' || window.cornerVideo.params['video-position'] === 'middle') {
					_ctaBtn.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) + cornerVideoFinalHeight - 20 + 'px', 'important');
					_ctaBtn.style.setProperty('bottom', 'auto', 'important');
				}
			}
		}
	}
	
	function __showBtnCls() {
		if (!window.cornerVideo.params['enable-close-button']) {
			return;
		}
		if (isStickyNow) {
			var closeBtn = document.querySelector('#sticky_close__btn');
			closeBtn.style.setProperty('opacity', '1', 'important');
			closeBtn.style.setProperty('position', 'fixed', 'important');
			if (window.cornerVideo.params['video-position'].indexOf('top') > -1) {
				closeBtn.style.setProperty('top', cornerVideoFinalHeight + cornerVideoVerticalOffset + 1 + 'px', 'important');
				closeBtn.style.setProperty('bottom', 'auto', 'important');
				if (window.cornerVideo.params['video-position'].indexOf('-left') > -1) {
					closeBtn.style.setProperty('left', cornerVideoSideOffset + 'px', 'important');
					closeBtn.style.setProperty('right', 'auto', 'important');
				} else {
					closeBtn.style.setProperty('left', 'auto', 'important');
					closeBtn.style.setProperty('right', cornerVideoSideOffset + 'px', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'top') {
					var left_val = Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + cornerVideoFinalWidth - 40;
					closeBtn.style.setProperty('left', left_val + 'px', 'important');
					closeBtn.style.setProperty('right', 'auto', 'important');
				}
			} else {
				closeBtn.style.setProperty('top', 'auto', 'important');
				closeBtn.style.setProperty('bottom', cornerVideoFinalHeight + cornerVideoVerticalOffset + 1 + 'px', 'important');
				if (window.cornerVideo.params['video-position'].indexOf('left') > -1) {
					closeBtn.style.setProperty('left', cornerVideoSideOffset + 'px', 'important');
					closeBtn.style.setProperty('right', 'auto', 'important');
				} else {
					closeBtn.style.setProperty('left', 'auto', 'important');
					closeBtn.style.setProperty('right', cornerVideoSideOffset + 'px', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'bottom' || window.cornerVideo.params['video-position'] === 'middle') {
					var b_left_val = Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + cornerVideoFinalWidth - 40;
					closeBtn.style.setProperty('left', b_left_val + 'px', 'important');
					closeBtn.style.setProperty('right', 'auto', 'important');
				}
				if (window.cornerVideo.params['video-position'] === 'left' || window.cornerVideo.params['video-position'] === 'right' || window.cornerVideo.params['video-position'] === 'middle') {
					closeBtn.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) + cornerVideoFinalHeight - 20 + 'px', 'important');
					closeBtn.style.setProperty('bottom', 'auto', 'important');
				}
			}
		}
	}
	
	function __showPowerLink() {
		if (window.cornerVideo.params['hide-powered-by']) {
			return;
		}
		
		if (isStickyNow) {
			var _powerLink = document.querySelector('#sticky_power_by__link');
			_powerLink.style.setProperty('opacity', '1', 'important');
			_powerLink.style.setProperty('position', 'fixed', 'important');
			switch (window.cornerVideo.params["video-position"]) {
				case 'top':
					_powerLink.style.setProperty('top',
						(window.cornerVideo.params['enable-cta'] ? cornerVideoVerticalOffset - 15 : (cornerVideoFinalHeight + cornerVideoVerticalOffset + 2)) + 'px', 'important');
					_powerLink.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
					break;
				case 'bottom':
					_powerLink.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoVerticalOffset)) + 'px', 'important');
					_powerLink.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
					break;
				case 'right':
					_powerLink.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 37 + 'px', 'important');
					_powerLink.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
					break;
				case 'left':
					_powerLink.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 37 + 'px', 'important');
					_powerLink.style.setProperty('left', cornerVideoSideOffset + 'px', 'important');
					break;
				case 'middle':
					_powerLink.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoFinalHeight) / 2) - 37 + 'px', 'important');
					_powerLink.style.setProperty('left', Math.round((currentWindowWidth - cornerVideoFinalWidth) / 2) + 'px', 'important');
					break;
				case 'top-left':
				case 'top-right':
					_powerLink.style.setProperty('top',
						(window.cornerVideo.params['enable-cta'] ? cornerVideoVerticalOffset - 15 : (cornerVideoFinalHeight + cornerVideoVerticalOffset + 2)) + 'px', 'important');
					_powerLink.style.setProperty('left',
						window.cornerVideo.params['video-position'].indexOf('-left') !== -1 ?
							cornerVideoSideOffset + 'px' : Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
					break;
				case 'bottom-left':
				case 'bottom-right':
					_powerLink.style.setProperty('top', Math.round((currentWindowHeight - cornerVideoVerticalOffset)) + 'px', 'important');
					_powerLink.style.setProperty('left',
						window.cornerVideo.params['video-position'].indexOf('-left') !== -1 ?
							cornerVideoSideOffset + 'px' : Math.round((currentWindowWidth - cornerVideoFinalWidth - cornerVideoSideOffset)) + 'px', 'important');
					break;
			}
		}
	}
	
	function resetCVWrapper(closeBtn, _ctaBtn, _powerLink) {
		isStickyNow = false;
		DOM_video.style.setProperty('border', '0px', 'important');
		DOM_video.style.setProperty('box-shadow', 'none', 'important');
		setTimeout(function () {
			DOM_video.style.setProperty('border', '0px', 'important');
			DOM_video.style.setProperty('box-shadow', 'none', 'important');
		}, Math.round(window.cornerVideo.params["transition-duration"] / 10));
		if (closeBtn) {
			closeBtn.style.setProperty('opacity', '0', 'important');
			closeBtn.style.setProperty('position', 'absolute', 'important');
			var clsInterval = setInterval(function () {
				if (closeBtn.style.getPropertyValue('opacity') === '0') {
					clearInterval(clsInterval);
				} else {
					closeBtn.style.setProperty('opacity', '0', 'important');
					closeBtn.style.setProperty('position', 'absolute', 'important');
				}
			}, Math.round(window.cornerVideo.params["transition-duration"]));
		}
		if (_ctaBtn) {
			_ctaBtn.style.setProperty('opacity', '0', 'important');
			_ctaBtn.style.setProperty('position', 'absolute', 'important');
			var clsInterval1 = setInterval(function () {
				if (_ctaBtn.style.getPropertyValue('opacity') === '0') {
					clearInterval(clsInterval1);
				} else {
					_ctaBtn.style.setProperty('opacity', '0', 'important');
					_ctaBtn.style.setProperty('position', 'absolute', 'important');
				}
			}, Math.round(window.cornerVideo.params["transition-duration"]));
		}
		
		if (_powerLink) {
			_powerLink.style.setProperty('opacity', '0', 'important');
			_powerLink.style.setProperty('position', 'absolute', 'important');
			var clsPowerInterval1 = setInterval(function () {
				if (_powerLink.style.getPropertyValue('opacity') === '0') {
					clearInterval(clsPowerInterval1);
				} else {
					_powerLink.style.setProperty('opacity', '0', 'important');
					_powerLink.style.setProperty('position', 'absolute', 'important');
				}
			}, Math.round(window.cornerVideo.params["transition-duration"]));
		}
		showVid = false;
		if (window.cornerVideo.params["transition-type"] === 'fade' || window.cornerVideo.params["transition-type"] === 'fadein') {
			DOM_video.style.setProperty('-webkit-transition-property', 'opacity, transform, position');
			DOM_video.style.setProperty('transition-property', 'opacity, transform, position');
			DOM_video.style.setProperty('-webkit-transition-duration', '0s', 'important');
			DOM_video.style.setProperty('transition-duration', '0s', 'important');
			setTimeout(function () {
				DOM_video.style.setProperty('opacity', '1', 'important');
			}, 50);
		}
		if (window.cornerVideo.params["transition-type"] === 'motion' || window.cornerVideo.params["transition-type"] === 'slidein') {
			DOM_video.style.setProperty('-webkit-transition', 'top ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, right ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, bottom ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, left ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s');
			DOM_video.style.setProperty('transition', 'top ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, right ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, bottom ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s, left ' + (
				Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
			) + 's ease 0s');
			setTimeout(function () {
				DOM_video.style.setProperty('top', '0px', 'important');
				DOM_video.style.setProperty('right', '0px', 'important');
				DOM_video.style.setProperty('bottom', '0px', 'important');
				DOM_video.style.setProperty('left', '0px', 'important');
			}, 50);
		}
	}
	
	function setVideoStyle() {
		getDomVideo();
		var videoWrapper = document.querySelector('.video_wrapper') || DOM_video.parentNode;
		var closeBtn = document.querySelector('#sticky_close__btn');
		var _ctaBtn = document.querySelector('#sticky_cta__btn');
		var _powerLink = document.querySelector('#sticky_power_by__link');
		if (window.cornerVideo.params['enable-close-button']) {
			if (closeBtn === null) {
				setTimeout(function () {
					setVideoStyle();
				}, 400);
				return;
			}
		}
		if (DOM_video !== null) {
			originalInnerWidth = DOM_video.clientWidth;
			originalInnerHeight = DOM_video.clientHeight;
			if (clickedClose) {
				if (closeBtn) closeBtn.style.setProperty('opacity', '0', 'important');
				if (_ctaBtn) _ctaBtn.style.setProperty('opacity', '0', 'important');
				if (_powerLink) _powerLink.style.setProperty('opacity', '0', 'important');
				DOM_video.setAttribute('style', originalStyleAttr);
				DOM_video.setAttribute('width', originalWidthAttr);
				DOM_video.setAttribute('height', originalHeightAttr);
				return;
			}
			videoComputedStyle = window.getComputedStyle(DOM_video);
			originalOuterWidth = parseInt(videoComputedStyle.getPropertyValue('width'));
			originalOuterHeight = parseInt(videoComputedStyle.getPropertyValue('height'));
			cornerVideoFinalHeight = (cornerVideoFinalWidth / originalOuterWidth) * originalOuterHeight;
			
			if ((window.scrollY || window.pageYOffset) === 0) {
				resetCVWrapper(closeBtn, _ctaBtn, _powerLink);
				videoWrapper.style.setProperty('overflow', 'hidden', 'important');
			} else {
				videoWrapper.style.setProperty('overflow', 'visible', 'important');
				var boundingClientRect = videoWrapper.getBoundingClientRect();
				topOffsetTrigger = boundingClientRect.top + (window.scrollY || window.pageYOffset);
				if ((window.scrollY || window.pageYOffset) > topOffsetTrigger && topOffsetTrigger !== 0) {
					isStickyNow = true;
					DOM_video.style.transition = 'none';
					DOM_video.style.border = window.cornerVideo.params['border-width'] + 'px ' + window.cornerVideo.params['border-line'] + ' ' + window.cornerVideo.params['border-color'];
					DOM_video.style['box-shadow'] = window.cornerVideo.params['box-shadow-x'] + 'px ' + window.cornerVideo.params['box-shadow-y'] + 'px ' + window.cornerVideo.params['box-shadow-blur'] + 'px ' + window.cornerVideo.params['box-shadow-color'];
					if (window.cornerVideo.params["transition-type"] === 'fade' || window.cornerVideo.params["transition-type"] === 'fadein') {
						DOM_video.style.setProperty('-webkit-transition-duration', '0s', 'important');
						DOM_video.style.setProperty('transition-duration', '0s', 'important');
						DOM_video.style.setProperty('-webkit-transition-property', 'opacity, transform');
						DOM_video.style.setProperty('transition-property', 'opacity, transform');
						if (!showVid) {
							DOM_video.style.setProperty('opacity', '0');
							setTimeout(function () {
								DOM_video.style.setProperty('-webkit-transition-duration', Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100 + 's');
								DOM_video.style.setProperty('transition-duration', Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100 + 's');
								DOM_video.style.setProperty('opacity', '1');
							}, Math.round(window.cornerVideo.params["transition-duration"] / 10));
						} else {
							DOM_video.style.setProperty('opacity', '1', 'important');
						}
					}
					if (window.cornerVideo.params["transition-type"] === 'motion' || window.cornerVideo.params["transition-type"] === 'slidein') {
						DOM_video.style.setProperty('-webkit-transition', 'top ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, right ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, bottom ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, left ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s');
						DOM_video.style.setProperty('transition', 'top ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, right ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, bottom ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s, left ' + (
							Math.round((window.cornerVideo.params["transition-duration"] / 1000) * 100) / 100
						) + 's ease 0s');
					}
					
					// Close button setting
					if (!showVid && (window.cornerVideo.params["transition-type"] !== 'grow' && window.cornerVideo.params["transition-type"] !== 'scale')) {
						if (window.cornerVideo.params['enable-close-button'] && closeBtn) {
							setTimeout(__showBtnCls, window.cornerVideo.params["transition-duration"] + 5000);
						}
						if (window.cornerVideo.params['enable-cta'] && _ctaBtn) {
							setTimeout(__showBtnCta, window.cornerVideo.params["transition-duration"] + 5000);
						}
						if (!window.cornerVideo.params['hide-powered-by'] && _powerLink) {
							setTimeout(__showPowerLink, window.cornerVideo.params["transition-duration"]);
						}
						showVid = true;
					} else {
						if (window.cornerVideo.params['enable-close-button'] && closeBtn) {
							setTimeout(__showBtnCls, 5000);
						}
						if (window.cornerVideo.params['enable-cta'] && _ctaBtn) {
							setTimeout(__showBtnCta, 5000);
						}
						if (!window.cornerVideo.params['hide-powered-by'] && _powerLink) {
							setTimeout(__showPowerLink, 500);
						}
						showVid = false;
					}
				} else {
					resetCVWrapper(closeBtn, _ctaBtn, _powerLink);
					videoWrapper.style.setProperty('overflow', 'hidden', 'important');
				}
			}
		}
	}
	
	window.addEventListener('resize', fn_checkStickynessOnResize);
	
	var _wait3;
	var fn_checkStickynessOnScroll = function () {
		if (clickedClose) {
			var closeBtn = document.querySelector('#sticky_close__btn');
			if (closeBtn) closeBtn.style.setProperty('opacity', '0', 'important');
			var _ctaBtn = document.querySelector('#sticky_cta__btn');
			if (_ctaBtn) _ctaBtn.style.setProperty('opacity', '0', 'important');
			var _powerLink = document.querySelector('#sticky_power_by__link');
			if (_powerLink) _powerLink.style.setProperty('opacity', '0', 'important');
			DOM_video.setAttribute('style', originalStyleAttr);
			DOM_video.setAttribute('width', originalWidthAttr);
			DOM_video.setAttribute('height', originalHeightAttr);
			return;
		}
		clearTimeout(_wait3);
		_wait3 = setTimeout(setVideoStyle, 20);
	};
	window.addEventListener('scroll', fn_checkStickynessOnScroll);
	
	function reSetZIndex(el, tl, e_tl) {
		if (tl.tagName === "BODY") {
			el.style.setProperty("z-index", "999999999", "important");
		} else {
			reSetZIndex(e_tl, tl.parentNode, e_tl.parentNode);
		}
	}
})();
