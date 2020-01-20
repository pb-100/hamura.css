PB100 = {};
(function(dd, n, q, v, ha, Eb, A, Fb, Gb, ed, Va, Bc, Y, fd) {
  function Wa(d, a) {
    var r = A(d.split(a)[1]);
    return 0 <= r ? r : 0;
  }
  function g(d, a) {
    return 0 <= d.indexOf(a);
  }
  function c(d, a) {
    var b = "", r = -1, c;
    if (d = d.split(a)[1]) {
      for (; c = d.charCodeAt(++r);) {
        if (48 <= c && 57 >= c || 46 === c) {
          b += d.charAt(r);
        } else {
          break;
        }
      }
      for (r = b.length; r;) {
        if (46 === b.charCodeAt(--r)) {
          b = b.substr(0, r);
        } else {
          break;
        }
      }
    }
    return b;
  }
  function Ib(d, a) {
    var b = 0, r;
    d = d.split(".");
    a = a.split(".");
    for (r = Math.min(d.length, a.length); b < r; ++b) {
      var c = A(d[b]), e = A(a[b]);
      if (c !== e) {
        return c > e ? 1 : -1;
      }
    }
    return d.length === a.length ? 0 : d.length > a.length ? 1 : -1;
  }
  function Jb() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > Ib(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function za(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Aa(d) {
    return d === d + "" ? A(d) : d;
  }
  function u() {
  }
  function la() {
    for (var d, a = 0, b = new Y - 0; a < Q.length;) {
      b < Q[0].t ? ++a : (d = Q.splice(a, 1)[0], d.f(d.p));
    }
    ma = Q.length ? Va(la, 64) : 0;
  }
  function Cc() {
    ma && (Bc(ma), ma = Va(la, 64));
  }
  function Z(d, a) {
    for (var b = 0, r = d.length; b < r; ++b) {
      d[b](a);
    }
  }
  function Za(d) {
    var a = 0, b = na.length, c;
    for ($a && (c = $a(d)); a < b; ++a) {
      na[a](d);
    }
    onload = Kb;
    na = Za = $a = onload = null;
    return c;
  }
  function ia() {
    var d = v.defaultView;
    d = d ? d.getComputedStyle(oa, null) : oa.currentStyle;
    if (d = (d && d.color || "").split(" ").join("")) {
      return d = "#123456" !== d && "rgb(18,52,86)" !== d, Lb !== d && Z(Mb, Lb = d), !0;
    }
  }
  function Dc() {
    Z(ab, !0);
  }
  function Ec() {
    Z(ab, !1);
  }
  function Ba(d) {
    var a = a || v;
    return Nb ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function K(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function bb(d, a) {
    var b = v.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function L(d, a, b, c, e) {
    function r(a, d) {
      for (var b in d) {
        switch(b) {
          case "class":
          case "className":
            Ca(a, d[b]);
            break;
          default:
            a.setAttribute(b, d[b]);
        }
      }
    }
    function f(d, a) {
      var b = d.style, c;
      for (c in a) {
        b[c] = a[c];
      }
    }
    if ("style" === a) {
      var g = !0;
      a = bb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = bb(a);
    }
    Da ? (2 === Da && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Da = 0;
    b && r(a, b);
    c && f(a, c);
    e && !g && a.appendChild(v.createTextNode(e));
    return a;
  }
  function Ob(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function aa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Ca(a, b) {
    var d;
    if (!aa(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function Pb(a, b) {
    var d = L(pa, "style", {type:"text/css", media:b}, 0, a);
    cb[b] = d.sheet || d.styleSheet;
  }
  function Ea(a, b) {
    for (var d = b || "all", c = cb[d], r, e, f = "", g; a.length;) {
      r = a.shift(), e = a.shift(), g = r + "{" + e + "}", c ? c.addRule ? c.addRule(r, e) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && Pb(f, d);
  }
  function db(a) {
    if (void 0 !== Fa) {
      if (7 > x) {
        z(a, !1);
      } else {
        u("[dataUriTest]");
        var d = new Image;
        d.onerror = function() {
          u("[dataUriTest] no DATA URI!");
          a(Fa = !1);
        };
        d.onload = function() {
          u("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          a(Fa = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    } else {
      z(a, Fa);
    }
  }
  function Qb(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      u("[webFontTest] testByNativeFontLoaderAPI start.");
      v.fonts.load(d).then(function(c) {
        u("[webFontTest] fonts.check() : " + v.fonts.check(d, "i") + ", fonts.length : " + c.length);
        Xa(b) ? z(a, t) : (u("[webFontTest] mesureWebFont() : false"), db(Ya));
      }, function(a) {
        u("[webFontTest] fonts.load() rejected! " + a);
        db(Ya);
      });
    }
    function r(a) {
      return v.hidden || v.msHidden || v.mozHidden || v.webkitHidden ? !1 : a < new Y - p;
    }
    function h(d) {
      d && (u("[webFontTest] testWebFont start."), p = new Y - 0);
      Xa(b) ? (u("[webFontTest] testWebFont mesurement success!"), a(t)) : r(m) ? (u("[webFontTest] testWebFont timeout!"), Hb ? a(0) : 9 > x ? z(a, 0) : db(Ya)) : z(h);
    }
    function l() {
      var a = -1, d;
      l = null;
      eb = ["sans-serif", "serif"];
      M = L(T, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (fb = {}; d = eb[++a];) {
        M.style.fontFamily = d, fb[d] = M.offsetWidth;
      }
    }
    function Xa(a) {
      var d = 0, b = -1, c, e, r = 0;
      l && l();
      for (T.appendChild(M); c = eb[++b];) {
        if (M.style.fontFamily = '"' + a + '",' + c, M.offsetWidth !== fb[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (M.innerHTML = e, a = M.offsetWidth, M.innerHTML = f[e], r = a === M.offsetWidth ? 1 : 0, !r) {
            break;
          }
        }
      }
      K(M);
      return t = d + r;
    }
    function Ya(d) {
      (Hb = d) ? k(!0) : a(0);
    }
    function k(d) {
      d && (p = new Y - 0);
      for (b in c) {
        if (Xa(b)) {
          u("[webFontTest] success! " + b);
          Ga = L(T, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = cb.all, f = Rb.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : Pb('@import "' + d + '"', "all");
          Rb.all = ++f;
          z(q, !0);
        } else {
          r(100) ? (u("[webFontTest] timeout! " + b), delete c[b], z(k, !0)) : z(k);
        }
        return;
      }
      a(0);
    }
    function q(d) {
      d && (u("[webFontTest] testImportedCssReady start!"), u("[webFontTest] targetWebFontName : " + b), p = new Y - 0);
      1 < Ga.offsetWidth ? (u("[webFontTest] testImportedCssReady ended."), K(Ga), m = 100, z(h, !0)) : r(m) ? (u("[webFontTest] testImportedCssReady timeout!"), K(Ga), a(0)) : z(q);
    }
    var m = g || 5000, p, Hb, M, Ga, eb, fb, t;
    b = Fc + b;
    u("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var a;
      if (n.MeeGo || 2.2 > n.AOSP || n.WebOS || n.UCWEB || 10 > n.TridentMobile || n.NDS || n.NDSi || n.N3DS) {
        return !1;
      }
      if (6 > x) {
        return !0;
      }
      var d = L(pa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      K(d);
      return a;
    })() ? (u("[webFontTest] maybeCanWebFont() : true"), !v.fonts || 603 > n.WebKit ? (u("[webFontTest] No native font loader."), h(!0)) : (u("[webFontTest] Use Native font loader."), d())) : (u("[webFontTest] maybeCanWebFont() : false"), z(a, 0));
  }
  function Sb() {
    gb = !gb;
    for (var a = -1, b; b = Ha[++a];) {
      b.style.visibility = gb ? "" : "hidden";
    }
  }
  function Gc(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), hb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Ia() {
    Ia = null;
    Hc(ib, "PB-100", {"PB-100_canTTF":B + "pbFont/ttf.css", "PB-100_canWOFF":B + "pbFont/woff.css", "PB-100_canEOT":B + "pbFont/eot.css", "PB-100_canSVG":B + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Ja}, 5000);
  }
  function ib(a) {
    qa = a;
    u("[pbList] WebFont test result : " + !!a);
    qa ? Tb() : Ic();
  }
  function Jc(a) {
    a && (u("[pbList] Fallback start!"), Ca(T, "pbList-noWebFont"), Ea([".pbList font", "background-image:url(" + B + "pbFont/" + (9 > x ? "x3mask_ie.png" : "x3mask.png") + ")"]), Ea([".pbList font", "background-image:url(" + B + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    Tb();
  }
  function Tb() {
    for (ib = Qb = null; U.length;) {
      Ka(U.shift(), jb.shift());
    }
    u("[pbList] complete.");
  }
  function Ka(a, b) {
    function d(a) {
      a = a.childNodes;
      for (var b = -1, e; e = a[++b];) {
        switch(e.nodeType) {
          case 1:
            d(e);
            break;
          case 3:
            e.data && e.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && c.push(e);
        }
      }
    }
    var c = [];
    if (ib) {
      -1 === U.indexOf(a) && (U.push(a), jb.push(b), Ub && Ia && Ia());
    } else {
      var e = U.indexOf(a);
      0 <= e && U.splice(e, 1) && jb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== qa && (e = e.split(Ja).join(Vb)), b ? a.data = e : Kc(e.split("\r").join("").split("&yen;").join(Lc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(kb).split("&amp;").join("&"), a);
      }
    }
  }
  function Kc(a, b) {
    function d(a, b) {
      for (var d = ""; b;) {
        b & 1 && (d += a), b >>= 1, a += a;
      }
      return d;
    }
    function c(a, b, c) {
      for (var e, f = -1, r, g; e = b[++f];) {
        for (; 0 <= (r = a.indexOf(e));) {
          g = e.length, a = a.substr(0, r) + d(c, g) + a.substr(r + g);
        }
      }
      return a;
    }
    function e(a) {
      var b = A(a), d = "" + b;
      return 0 < b && b === b | 0 && (b = a.indexOf(d) + d.length, b <= a.length) ? b : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), g = [], r = "", h = -1, l, k;
    if (function(a) {
      var b = a.indexOf("P");
      if (-1 === b) {
        return !1;
      }
      b = A(a.charAt(b + 1));
      return 0 <= b && 9 >= b;
    }(a)) {
      r = d("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (r = d("|", h), --h); k = a.charAt(++h);) {
        k === kb || l ? (r += "~", k === kb && (l = !l)) : r += k;
      }
      r = c(r, Mc, "^");
      r = c(r, Nc, "{");
      r = c(r, Oc, "}");
    }
    h = 0;
    for (l = a.length; h < l; ++h) {
      k = a.charAt(h);
      var q = k === lb, m = " " === k;
      k = q ? " " : k;
      var p = r.charAt(h), u = v, v = "|" === p;
      p = f["+|~{}^".indexOf(p) + 1];
      if ("\n" !== k) {
        if (qa) {
          8 > x && m && (k = h === l - 1 ? lb : Pc), 2 === qa && a.substr(h, 2) === Ja && (k = Ja, ++h), m = m && "str" === p ? ' class="pbList-strsp"' : q ? "" : !m && p ? ' class="pbList-' + p + '"' : "";
        } else {
          var t = ba.indexOf(k);
          t = -1 === t ? "" : ba.indexOf(k).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          m = m && "str" === p ? ' class="pbList-strsp"' : m || !t ? "" : p ? ' class="pbList-' + p + (t ? " " + t : "") + '"' : ' class="' + t + '"';
        }
        u && q && (n.WebKit || n.SafariMobile || n.iOSWebView) && (k = lb);
        g.push("<font" + m + ">" + k + "</font>");
      } else {
        g.push(k);
      }
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (f = bb("font", g); g = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      K(b);
    }
  }
  var k, m, a = ha.userAgent, t = ha.appVersion, mb = A(t) | 0, p = ha.platform, La = v.documentElement, nb = v.documentMode, ob = Eb.width, pb = Eb.height, Wb = q.HTMLAudioElement, Xb = q.performance, Yb = q.Int8Array, Qc = void 0 !== q.ontouchstart, R = c(t, "Version/") || c(a, "Version/"), ca = La && void 0 !== La.style.MozAppearance, Zb = q.operamini, Ma = g(a, "UCWEB"), Rc = Ma && c(a, " U2/"), Sc = Ma && c(a, "; wds "), qb = c(a.split("_").join("."), "; iPh OS "), Tc = c(a, "; Adr "), $b = 
  g(t, "YJApp-ANDROID"), N = g(p, "Android") || ca && g(t, "Android") || $b, C = c(p, "Android ") || c(t, "Android ") || c(a, "Android ") || Tc, rb = g(p, "Linux"), da = !Zb && q.opera, ac = da && (da.version && "function" === typeof da.version ? da.version() : Jb(c(a, "Opera "), R, "" + mb)), bc = q.opr, ra = !da && (v.all || nb), F = ra && (nb ? nb : q.g ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4), Na = !ra && La.msContentZoomFactor, ea = !Na && 
  q.chrome, sb = ca && c(a, "Goanna/"), O = !sb && ca && c(a, "rv:"), cc = c(a, "Firefox/"), dc = c(a, "Opera/"), y = Wa(a, "AppleWebKit/"), V = c(a, "Chrome/"), tb = c(a, "OPR/"), Uc = c(t, "KHTML/"), ec = c(a.toLowerCase(), "iris"), ub = c(a, "FxiOS/"), fa = Wa(a, "SamsungBrowser/"), sa;
  if (sa = !fa) {
    a: {
      for (var fc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Oa, vb = fc.length; Oa = fc[--vb];) {
        if (g(a, Oa)) {
          sa = 2 > A(R) ? R : 0.9;
          break a;
        }
      }
      var gc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (vb = gc.length; Oa = gc[--vb];) {
        if (g(a, Oa)) {
          sa = R;
          break a;
        }
      }
      sa = void 0;
    }
  }
  var hc = sa, ic = ea && 534.3 >= y, jc = Qc && (y || ca) && (0 === p.indexOf("Linux armv") || 0 === p.indexOf("Linux aarch") || "Linux i686" === p) && g(a, "Linux x86_64") || !C && $b, kc = q.puffinDevice, Pa = kc && kc.clientInfo, ta = Pa && "iOS" === Pa.os && Pa.osVersion, Qa = ta && Pa.model, wb = !F && v.registerElement, Vc = !F && v.execCommand, lc = rb && wb && "11.0.696.34" === V, W, G, b, va, xb, yb;
  if ("Nitro" === p) {
    var l = "NDS";
  } else {
    if ("Nintendo DSi" === p) {
      l = "NDSi";
      var h = dc;
    } else {
      if ("New Nintendo 3DS" === p || g(a, "iPhone OS 6_0") && 320 === ob && 240 === pb) {
        l = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === p) {
          l = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var Wc = h;
        } else {
          if ("Nintendo Swicth" === p) {
            l = "Swicth", h = c(t, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === p) {
              l = "WiiU", h = c(t, "NintendoBrowser/"), y = c(t, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === p) {
                l = "Wii";
                h = c(a, "Wii; U; ; ");
                var e = l;
                var f = h;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  l = "PSVita", h = b, e = l, f = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    l = "PSP";
                    h = b;
                    var mc = 3.3;
                    e = l;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      l = "PS3", h = b, e = l, f = b, 0 > Ib("4.10", b) && (k = "Sony", m = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        l = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          l = "Xbox360", h = 1;
                        } else {
                          if (2 === mb && g(a, "Sony/COM2/")) {
                            l = "Mylo";
                            h = 2;
                            mc = 3.4;
                            e = l;
                            f = 2;
                            var Ra = !0;
                          } else {
                            if (0 === p.indexOf("iP") || qb || ta) {
                              if (ta) {
                                switch(h = ta, Qa.substr(0, 4)) {
                                  case "iPho":
                                    var H = "iPhone";
                                    var X = A(Qa.substr(6));
                                    var I = !0;
                                    break;
                                  case "iPad":
                                    H = "iPad";
                                    X = A(Qa.substr(4));
                                    var J = !0;
                                    break;
                                  case "iPod":
                                    H = "iPod";
                                    X = A(Qa.substr(4));
                                    var nc = !0;
                                }
                              } else {
                                qb ? h = qb : h = c(t.split("_").join("."), "OS ");
                                h || (G = !0, h = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : Fb.isNaN ? 9.2 : q.SharedWorker ? Xb && Xb.now ? 8.0 : 8.4 : Vc ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Yb ? 4.3 : Wb ? 4.1 : 3.2);
                                var zb = 1 === q.devicePixelRatio;
                                var w = ob === 1.5 * pb || 1.5 * ob === pb;
                                0 === p.indexOf("iPhone") ? (H = "iPhone", X = w ? zb ? {max:3} : {min:4, max:5} : {max:6}, I = !0) : 0 === p.indexOf("iPad") ? (H = "iPad", X = zb ? {max:2} : {min:3}, J = !0) : 0 === p.indexOf("iPod") && (H = "iPod", X = w ? zb ? {max:3} : 4 : {min:5}, nc = !0);
                              }
                              ta || !ha.standalone && void 0 === v.fullscreenEnabled && void 0 === v.webkitFullscreenEnabled ? (yb = !0, k = "iOSWebView") : (k = "SafariMobile", e = "Safari", f = h);
                              l = "iOS";
                              m = h;
                            } else {
                              if (g(a, "Kobo")) {
                                l = "Kobo", k = "AOSP", m = 2.2, e = k, f = m, N = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  l = "SonyReader", k = "AOSP", m = 2.2, e = k, f = m;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    l = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      l = "FirefoxOS", h = 18.1 > O ? "1.0.1" : 19 > O ? 1.1 : 27 > O ? 1.2 : 29 > O ? 1.3 : 31 > O ? 1.4 : 33 > O ? 2.0 : 35 > O ? 2.1 : 38 > O ? 2.2 : 45 > O ? 2.5 : 2.6, g(a, "Mobile") ? I = !0 : g(a, "Tablet") && (J = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        l = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = l, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (I = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          l = "Tizen", h = b, e = "Samsung", f = fa, k = e, m = f, I = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(t, "Windows Phone OS ") || Sc) {
                                            var Sa = !0;
                                            h = b;
                                            I = !0;
                                          } else {
                                            if (Na && "ARM" === p) {
                                              Sa = !0, h = 10, G = I = !0;
                                            } else {
                                              if (ra && g(t, "ZuneWP")) {
                                                Sa = !0, h = 11 === F ? 8.1 : 10 === F ? 8 : 9 === F ? 7.5 : 7 === F ? 7 : "?", G = I = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  l = "FeaturePhone", I = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    l = "FeaturePhone", I = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var S = !0;
                                                      h = 6.3;
                                                      var D = J = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        S = !0, h = 6, D = J = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          S = !0, h = 5, D = J = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            S = !0, h = 5, D = J = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              S = !0, h = 5 <= A(C) ? 5 : 4, D = J = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                S = !0, h = 3, D = J = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  S = !0, h = 2, D = J = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    S = !0, h = 1, D = J = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      l = "Kindle", h = b, k = "AOSP", m = 2.2, e = k, f = m;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        S = !0, h = C, D = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          l = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            l = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || ec) {
                                                                              l = "WindowsMobile", Ra = !0;
                                                                            } else {
                                                                              if ("WinCE" === p) {
                                                                                l = p, Ra = !0;
                                                                              } else {
                                                                                if ("Win16" === p || "Win32" === p || "Win64" === p) {
                                                                                  l = p, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === p.indexOf("Mac")) {
                                                                                    l = "MacPowerPC" === p ? "MacPPC" : p;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var oc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (l = "BlackBerry", h = R, I = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? l = "SunOS" : g(a, "FreeBSD") ? l = "FreeBSD" : g(a, "OpenBSD") ? l = "OpenBSD" : g(a, "NetBSD") ? l = "NetBSD" : N && ca ? (g(a, "Android 4.4;") ? w = {min:2.3} : 4 <= A(C) ? w = C : w = {min:2.2}, h = w, jc && (G = !0)) : N && da ? (C ? w = C : (w = {min:1.6}, G = !0), h = w, g(a, "Tablet") ? J = !0 : 
                                                                                    I = !0) : C ? (h = C, N = !0) : rb && jc ? (W = !0, fa ? w = {min:4.4} : ea && !ic || bc || tb ? w = {min:4} : (w = C = void 0 !== La.style.touchAction ? {min:5} : wb ? 4.4 : Yb ? ha.connection ? q.searchBoxJavaBridge_ || ea ? Fb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? Wb ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, hc && (k = "Samsung", m = hc)), h = w, N = !0) : lc ? (h = {min:5}, W = N = !0) : rb && (g(a, 
                                                                                    "Ubuntu") ? l = "Ubuntu" : (b = c(a, "Mint/")) ? (l = "Mint", h = b) : (b = c(a, "Fedora/")) ? (l = "Fedora", h = b) : l = g(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  S && (l = "FireOS");
  N && (l = l || "Android");
  Sa && (l = "WindowsPhone");
  k || (D = D || N, da ? (k = D || Ra || I || J ? "PrestoMobile" : "Presto", m = ac) : ra ? ((w = Wa(t, "Trident/") + 4) && w !== F && (e = "IEHost", f = w), 10 <= F && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = F), Ra || I || J || nc ? k = "TridentMobile" : oc && 5 <= F ? (k = "Tasman", e = "MacIE", f = F) : (k = "Trident", oc && (e = "MacIE", f = F)), m = F) : Na ? (k = Sa ? "EdgeMobile" : "EdgeHTML", m = c(t, "Edge/")) : sb ? (k = "Goanna", m = 
  sb) : ca ? (k = D ? "Fennec" : "Gecko", m = O || cc) : fa ? (k = "Samsung", m = fa, W && (G = !0)) : (b = mc || c(a, "NetFront/")) ? (k = "NetFront", m = b) : (b = c(a, "iCab")) ? (k = "iCab", m = b) : (b = Jb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || Zb && R) ? (k = "OperaMini", m = b, l || (g(a, "iPhone") ? H = "iPhone" : g(a, "iPad") ? H = "iPad" : g(a, "iPod") && (H = "iPod"), H && (l = "iOS"))) : Ma ? (k = "UCWEB", m = Rc) : Uc ? (k = "KHTML", m = mb) : N && ic ? (k = "AOSP", m = C, va = 
  !0, W && (G = !0)) : ea || bc || tb ? (k = D ? "ChromiumMobile" : "Chromium", m = V, W && (G = !0)) : N && wb ? (k = "ChromeWebView", m = 5 > A(C) ? C : V, va = !0, q.requestFileSystem || q.webkitRequestFileSystem || (xb = !0), W && (G = !0)) : N && (R || W) ? (k = "AOSP", m = C, va = !0, W && (G = !0)) : V ? (k = D ? "ChromiumMobile" : "Chromium", m = V) : y && (k = "WebKit", m = y));
  if (!e) {
    if (b = Na && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(t, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(t, "OPT/")) {
          e = "OperaTouch", f = b, G = G || !g(t, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Ma && (b = c(a, "UCBrowser/"))) {
              e = "UC", f = b;
            } else {
              if (b = c(a, "SilK/")) {
                e = "Silk", f = b;
              } else {
                if (b = c(a, "Vivaldi/")) {
                  e = "Vivaldi", f = b;
                } else {
                  if (b = c(a, "QQBrowser/")) {
                    e = "QQ", f = b;
                  } else {
                    if (b = c(a, "YaBrowser/")) {
                      e = "Yandex", f = b;
                    } else {
                      if (b = c(a, "coc_coc_browser/")) {
                        e = "coccoc", f = b;
                      } else {
                        if (b = c(a, "Camino/")) {
                          e = "Camino", f = b;
                        } else {
                          if (g(a, "SE 2.X MetaSr 1.0")) {
                            e = "Sogou";
                          } else {
                            if (b = c(a, "Focus/") || 9 > A(ub) && yb && 11 <= A(h) && ub) {
                              e = "Focus", f = b;
                            } else {
                              if (b = c(a, "Klar/")) {
                                e = "Klar", f = b;
                              } else {
                                if (b = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ")) {
                                  e = "AOL", f = b;
                                } else {
                                  if (b = c(a, "IceDragon/")) {
                                    e = "IceDragon", f = b;
                                  } else {
                                    if (b = c(a, "Iceweasel/")) {
                                      e = "Iceweasel", f = b;
                                    } else {
                                      if (b = c(a, "TenFourFox/")) {
                                        e = "ITenFourFox", f = b;
                                      } else {
                                        if (b = c(a, "Waterfox/")) {
                                          e = "Waterfox", f = b;
                                        } else {
                                          if (b = c(a, "GNUzilla/")) {
                                            e = "GNUzilla", f = b;
                                          } else {
                                            if (b = c(a, "SeaMonkey/")) {
                                              e = "SeaMonkey", f = b;
                                            } else {
                                              if (b = c(a, "PaleMoon/")) {
                                                e = "PaleMoon", f = b;
                                              } else {
                                                if (b = c(a, "Basilisk/")) {
                                                  e = "Basilisk", f = b;
                                                } else {
                                                  if ((b = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/")) || g(a, "Maxthon")) {
                                                    e = "Maxthon", f = b || 1;
                                                  } else {
                                                    if (g(a, "Avant Browser;")) {
                                                      e = "Avant";
                                                    } else {
                                                      if (b = c(a, "Lunascape/")) {
                                                        e = "Lunascape", f = b;
                                                      } else {
                                                        if (b = c(a, "Konqueror/")) {
                                                          e = "Konqueror", f = b;
                                                        } else {
                                                          if (b = c(a, "Midori/")) {
                                                            e = "Midori", f = b;
                                                          } else {
                                                            if (b = c(a, "OmniWeb/")) {
                                                              e = "OmniWeb", f = b;
                                                            } else {
                                                              if (b = c(a, "Roccat/")) {
                                                                e = "Roccat", f = b;
                                                              } else {
                                                                if (b = c(a, "Epiphany/")) {
                                                                  e = "Epiphany", f = b;
                                                                } else {
                                                                  if (b = c(a, "WebPositive/")) {
                                                                    e = "WebPositive", f = b;
                                                                  } else {
                                                                    if ((b = c(a, "Iron/")) || g(a, " Iron ")) {
                                                                      e = "Iron", f = b || ea && V;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ea && V;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || q.FNRBrowser) {
                                                                              e = "Sleipnir", b && (f = b);
                                                                            } else {
                                                                              if (b = c(a, "Puffin/")) {
                                                                                e = "Puffin", f = b;
                                                                              } else {
                                                                                if (b = c(a, "Dooble/")) {
                                                                                  e = "Dooble", f = b;
                                                                                } else {
                                                                                  if (b = c(a, "Flock/")) {
                                                                                    e = "Flock", f = b;
                                                                                  } else {
                                                                                    if (b = c(a, "Galeon/")) {
                                                                                      e = "Galeon", f = b;
                                                                                    } else {
                                                                                      if (b = c(a, "Falkon/")) {
                                                                                        e = "Falkon", f = b;
                                                                                      } else {
                                                                                        if (b = c(a, "Iceape/")) {
                                                                                          e = "Iceape", f = b;
                                                                                        } else {
                                                                                          if (b = c(a, "K-Meleon/")) {
                                                                                            e = "KMeleon", f = b;
                                                                                          } else {
                                                                                            if (b = Wc || c(t, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (ec) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(t, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(t, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = ub || ca && (cc || m)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = ac || tb || dc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (ra) {
                                                                                                                e = "IE", f = m;
                                                                                                              } else {
                                                                                                                if (fa) {
                                                                                                                  e = k, f = fa;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ea || lc && va) && V) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (va && !xb) {
                                                                                                                      e = k, f = m;
                                                                                                                    } else {
                                                                                                                      if (yb || xb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || R) {
                                                                                                                          e = "Safari", f = R || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  l && (n.PLATFORM = l, h ? (n.PLATFORM_VERSION = za(h), n[l] = Aa(h)) : n[l] = !0);
  k && (n.ENGINE = k, m ? (n.ENGINE_VERSION = za(m), n[k] = Aa(m)) : n[k] = !0, e || (e = k, f = m));
  e && (n.BRAND = e, f ? (n.BRAND_VERSION = za(f), n[e] = Aa(f)) : n[e] = !0);
  H && (n.DEVICE = H, X ? (n.DEVICE_VERSION = za(X), n[H] = Aa(X)) : n[H] = !0);
  G && (n.PC_MODE = !0);
  var Kb = new Gb, wa = [], Nb = !!v.getElementsByTagName, T = v.body, x = n.Trident || n.TridentMobile, Ta = n.Tasman, Xc = n.EdgeHTML || n.EdgeMobile, Ua = n.Presto || n.PrestoMobile, pc = n.Gecko, qc = n.Goanna, Yc = n.SafariMobile || n.iOSWebView, Zc = n.OperaMini && n.UCWEB;
  x || Ta || (new Gb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var rc = v.scripts, $c = (Ta ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : "modern") + ".css";
  var ja = rc[rc.length - 1].src.split("/");
  --ja.length;
  var sc = ja.join("/");
  0 <= "http: https:".indexOf(ja[0]) && ja.splice(0, 3);
  ja = ja.join("/");
  var P = Array.prototype;
  P.pop || (P.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  P.push || (P.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  P.shift || (P.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  P.splice || (P.splice = function(a, b) {
    var d = arguments, c = d.length - 2 - b, e = this.slice(a, a + b), f;
    if (0 < c) {
      var g = this.length - 1;
      for (f = a + b; g >= f; --g) {
        this[g + c] = this[g];
      }
    } else {
      if (0 > c) {
        g = a + b;
        for (f = this.length; g < f; ++g) {
          this[g + c] = this[g];
        }
        this.length += c;
      }
    }
    g = 2;
    for (f = d.length; g < f; ++g) {
      this[g - 2 + a] = d[g];
    }
    return e;
  });
  P.indexOf || (P.indexOf = function(a, b) {
    var d = this.length >>> 0;
    if (0 === d) {
      return -1;
    }
    if (b) {
      var c = b || 0;
      c = -Infinity === c ? 0 : (0 > c ? -c : c) | 0;
      if (d <= c) {
        return -1;
      }
    }
    for (c = 0 <= c ? c : 0 < d + c ? d + c : 0; c < d; ++c) {
      if (this[c] === a) {
        return c;
      }
    }
    return -1;
  });
  var Ab, Bb = [];
  wa.push(function() {
    ka(function() {
      (Ab = q.logger || v.all.logger) || alert("#logger not found!");
      for (Ab ? u = function(a) {
        L(Ab, "P", null, null, a);
      } : q.console && (u = console.log); Bb.length;) {
        u(Bb.shift());
      }
    });
  });
  u = function(a) {
    Bb.push(a);
  };
  var Q = [], tc = 0, ma;
  if (5 > x || Ta) {
    q._wdb_ontimer = la, la = "_wdb_ontimer()";
  }
  var z = function(a, b) {
    Q.length || (ma = Va(la, 64));
    Q.push({f:a, p:b, uid:++tc, t:new Y - 0 + 64});
    return tc;
  };
  var uc = function(a) {
    for (var b = Q.length, d; d = Q[--b];) {
      if (d.uid === a) {
        Q.splice(b, 1);
        break;
      }
    }
  };
  Yc && wa.push(function() {
    ad();
  });
  var xa = q.matchMedia, na = [], Cb = [], $a = q.onload, vc = q.onunload;
  onload = Za;
  onunload = function(a) {
    var b = 0, d = Cb.length, c;
    for (vc && (c = vc(a)); b < d; ++b) {
      Cb[b]();
    }
    onscroll = onresize = onunload = Kb;
    onscroll = onresize = onunload = null;
    return c;
  };
  var ka = function(a) {
    na.push(a);
  };
  var bd = function(a) {
    Cb.push(a);
  };
  var Mb = [], oa, Db, Lb = !1;
  10 <= x || Xc ? (xa("(-ms-high-contrast:active)").addListener(function(a) {
    Z(Mb, a.matches);
  }), ia = null) : 10 > x || (n.Win32 || n.Win64) && (44 <= pc || qc) ? (ka(function() {
    oa = v.createElement("div");
    T.appendChild(oa);
    oa.style.cssText = "color:#123456;position:absolute;top:0;left:0;width:0;height:0;overflow:hidden";
    60 > pc || qc ? ia() : ia() && (Db = setInterval(ia, 1000));
    ia = null;
  }), bd(function() {
    Db && clearInterval(Db);
  })) : ia = null;
  var cd = [];
  xa && xa("(prefers-color-scheme: dark)").addListener(function(a) {
    Z(cd, a.matches);
  });
  var ab = [];
  q.onbeforeprint ? (onbeforeprint = Dc, onafterprint = Ec) : xa && xa("print").addListener(function(a) {
    Z(ab, a.matches);
  });
  var wc = [], xc = q.onscroll;
  onscroll = function(a) {
    var b;
    xc && (b = xc(a));
    Za || Z(wc);
    return b;
  };
  var ad = function() {
    wc.push(Cc);
  };
  var yc = Ba("html")[0];
  var pa = Ba("head")[0];
  var Da;
  na.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, l, k, r; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && K(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if ((l = f.sheet || f.styleSheet) && (k = 10 <= x ? l.cssRules : l.rules || l.cssRules) && !k.length) {
                  K(f);
                  break;
                }
              case "LINK":
                Nb && !pa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (r = c.length; r;) {
                  if (0 === h.indexOf(c[--r])) {
                    K(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Ob(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Ob(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                K(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        l = e.pop(), pa.appendChild(l);
      }
    }
    var b = !(8 > Ua || 5 > x || Ta), c = ["og:", "twitter:", "fb:"], e = [];
    a(yc);
  });
  var cb = {}, Rb = {}, zc, Fa;
  9 > x && ka(function(a) {
    a = L(T, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    zc = 1 < a.offsetHeight;
    a.style.cssText = "";
    K(a);
  });
  var Ic = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || z(b, !1)) : e = z(a));
    }
    var b = Jc, c = new Image, e, f;
    c.onerror = function() {
      (!x || 11 === x || 11 === n.IEHost) && c.width || f || (f = !0, e && uc(e), e = z(b, !1));
    };
    c.onload = function() {
      f = !0;
      e && uc(e);
      Ua && !c.complete ? e = z(b, !1) : z(b, !0);
    };
    c.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > Ua && c.complete ? z(b, !0) : e = z(a);
  };
  var Fc = "bad_" + (new Y - 0) + "_";
  var Hc = Qb;
  for (n.IEHost && 5.5 > x && ka(function() {
    var a = v.createElement("link");
    pa.appendChild(a);
    a.setAttribute("href", (sc ? sc + "/" : "") + $c);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); wa.length;) {
    wa.shift()();
  }
  wa = null;
  var Ac = Ac || {}, E = String.fromCharCode, B = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", E(960), ")", "(", E(234), E(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", E(9824), "\u2190", E(9829), E(9830), E(9827), E(956), "\u03a9", "\u2193", "\u2192", "%", E(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", E(9619)], Ha = [], gb, hb, ya = 8 > Ua && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}};
  ka(function() {
    function a(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      Ca(a, "pbTipPos" + b.toUpperCase());
      L(a, "div", {className:"pbTip" + c}, {width:e.length + f + "em"}, e);
      L(a, "div", {className:"pbTail" + c});
      l && d && (a.focus(), a.blur());
    }
    function b(a) {
      if (p && v) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", d = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", h = f.split("pbAlp")[1] || "";
        if ("CS" === d) {
          var k = "_";
        } else {
          k = d, 3 === k.length && (k = k.substr(0, 2)), k = ba[parseInt(k, 16)] || "~";
        }
        g = g.split(" ")[0];
        h = h.split(" ")[0];
        var l = 10 - A(h);
        ya && h ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, h, a.innerHTML), b && e(a, d, l, k), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + d, "pbAlp" + l, "pbCsr" + g]}, Da = 1, q = L(a, "b", b, 0, k), c(a), c(q)) : c(a);
      }
    }
    function c(a) {
      u || h || aa(a, "pbChrCS") && Ha.push(a);
    }
    function e(a, b, c, d) {
      b = ya[b + (z ? "a" : "")] || ya[b];
      b.top += "px";
      a = L(a, "img", {title:d, src:B + "pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Ha.push(a);
    }
    var f = 6 > x ? 1 : 0, g = Ba("SAMP"), h = 9 > x, l = 5 <= x && 6 > x, k, n, m;
    zc && Ca(T, "pbLCD-AX");
    if (g.length) {
      var q = L(T, "a", {id:"pbLCD-test", title:"pbLCD-test"}), p = q.offsetWidth, t = q.style, u = void 0 !== t.opacity || void 0 !== t["-moz-opacity"] || void 0 !== t["-khtml-opacity"], v = !u && !h && !ya;
      t = !p || v || ya;
      K(q);
      for (n = -1; k = g[++n];) {
        if (aa(k.parentElement || k.parentNode, "pbLCD")) {
          var z = aa(k, "PB-120") || aa(k, "FX-795P"), y = k.children;
          for (k = y.length; k;) {
            var w = y[--k];
            switch(w.tagName.toUpperCase()) {
              case "A":
                if (t) {
                  for (p || a(w), m = w.children.length; m;) {
                    b(w.children[--m]);
                  }
                }
                Zc ? w.setAttribute("href", "javascript:void(0)") : w.onclick = Gc;
                break;
              case "B":
                t && b(w);
            }
          }
        }
      }
      Ha.length ? (setInterval(Sb, 500), Ea([".pbChrCS", "background-position:0 -51px"])) : Sb = null;
      v && Ea([".pbAlp1" + (p ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2" + (p ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3" + (p ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4" + (p ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
      B + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + B + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + B + "pbLCD/x3_a90.png)"]);
    }
  });
  525.13 > n.WebKit && (yc.onclick = function(a) {
    if (hb) {
      return hb = !1, a.preventDefault(), !1;
    }
  });
  var kb = ba[7], Vb = ba[30], Lc = ba[113], Ja = E(8337) + E(8331), lb = E(160), Pc = E(8194), Nc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Oc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Mc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Vb + ba[31]).split(""), U = 
  [], jb = [], qa, Ub;
  ka(function() {
    for (var a = v.all || Ba("*"), b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    for (a = -1; c = b[++a];) {
      aa(c, "pbList") ? Ka(c) : aa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ka(c, !0);
    }
    U.length && (u("[pbList] " + U.length + " elements found. WebFont test start."), Ia());
    Ub = !0;
  });
  Ac.prettify = Ka;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

