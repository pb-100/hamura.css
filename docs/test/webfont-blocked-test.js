PB100 = {};
(function(sd, n, q, u, ka, Ob, A, Pb, db, td, eb, Sc, ba, ud) {
  function fb(c, a) {
    var m = A(c.split(a)[1]);
    return 0 <= m ? m : 0;
  }
  function g(c, a) {
    return 0 <= c.indexOf(a);
  }
  function d(c, a) {
    var m = "", b = -1, d;
    if (c = c.split(a)[1]) {
      for (; d = c.charCodeAt(++b);) {
        if (48 <= d && 57 >= d || 46 === d) {
          m += c.charAt(b);
        } else {
          break;
        }
      }
      for (b = m.length; b;) {
        if (46 === m.charCodeAt(--b)) {
          m = m.substr(0, b);
        } else {
          break;
        }
      }
    }
    return m;
  }
  function Rb(c, a) {
    var b = 0, m;
    c = c.split(".");
    a = a.split(".");
    for (m = Math.min(c.length, a.length); b < m; ++b) {
      var d = A(c[b]), e = A(a[b]);
      if (d !== e) {
        return d > e ? 1 : -1;
      }
    }
    return c.length === a.length ? 0 : c.length > a.length ? 1 : -1;
  }
  function Sb() {
    for (var c = arguments, a = 1, b = c.length, d = c[0], e; a < b; ++a) {
      0 > Rb(d, e = c[a]) && (d = e);
    }
    return d;
  }
  function Da(c) {
    return c === c + "" ? c : c === c - 0 ? "" + c : c.min && c.max ? c.min + "~" + c.max : c.min ? c.min + "~" : "~" + c.max;
  }
  function Ea(c) {
    return c === c + "" ? A(c) : c;
  }
  function r() {
  }
  function Fa() {
    for (var c, a = 0; a < Ga.length; ++a) {
      c = Ga[a], c.f();
    }
  }
  function Tc() {
    la && (Tb(), la = setInterval(Fa, 999));
  }
  function Tb() {
    la && (la = clearInterval(la));
  }
  function pa() {
    for (var c, a = 0, b = new ba - 0; a < R.length;) {
      b < R[0].t ? ++a : (c = R.splice(a, 1)[0], c.f(c.p));
    }
    ca = R.length ? eb(pa, 64) : 0;
  }
  function Uc() {
    ca && (Ub(), ca = eb(pa, 64));
  }
  function Ub() {
    ca && (ca = Sc(ca));
  }
  function O(c, a) {
    for (var b = 0, m = c.length; b < m; ++b) {
      c[b](a);
    }
  }
  function ib(c) {
    var a;
    jb && (a = jb(c));
    O(qa, c);
    onload = Ha;
    qa = ib = jb = onload = null;
    return a;
  }
  function Vb() {
    var c = 9 === Ia.offsetWidth;
    Wb !== c && O(Xb, Wb = c);
  }
  function ma() {
    var c = u.defaultView;
    c = c ? c.getComputedStyle(Ia, null) : Ia.currentStyle;
    if (c = (c && c.color || "").split(" ").join("")) {
      return c = "#123456" !== c && "rgb(18,52,86)" !== c, Yb !== c && O(Zb, Yb = c), !0;
    }
  }
  function Ja(c) {
    var a = a || u;
    return $b ? a.getElementsByTagName(c) : a.all.i(c.toUpperCase());
  }
  function M(c) {
    (c.parentElement || c.parentNode).removeChild(c);
  }
  function kb(c, a) {
    var b = u.createElement(c);
    a && (b.innerHTML = a);
    return b;
  }
  function L(c, a, b, d, e) {
    function m(c, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            Ka(c, a[b]);
            break;
          default:
            c.setAttribute(b, a[b]);
        }
      }
    }
    function f(c, a) {
      var b = c.style, d;
      for (d in a) {
        b[d] = a[d];
      }
    }
    if ("style" === a) {
      var g = !0;
      a = kb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = kb(a);
    }
    La ? (2 === La && (c = c.nextSibling), c ? (c.parentElement || c.parentNode).insertBefore(a, c) : (c.parentElement || c.parentNode).appendChild(a)) : c.appendChild(a);
    La = 0;
    b && m(a, b);
    d && f(a, d);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function ac(c, a) {
    return c.hasAttribute ? c.hasAttribute(a) : null != c.getAttribute(a);
  }
  function da(c, a) {
    return -1 !== (" " + c.className + " ").indexOf(" " + a + " ");
  }
  function Ka(c, a) {
    var b;
    if (!da(c, a)) {
      if (b = c.className) {
        a = " " + a;
      }
      c.className = b + a;
    }
  }
  function bc(c, a) {
    var b = L(ra, "style", {type:"text/css", media:a}, 0, c);
    lb[a] = b.sheet || b.styleSheet;
  }
  function Ma(c, a) {
    for (var b = a || "all", d = lb[b], m, e, f = "", g; c.length;) {
      m = c.shift(), e = c.shift(), g = m + "{" + e + "}", d ? d.addRule ? d.addRule(m, e) : d.insertRule && d.insertRule(g, d.cssRules.length) : f += g;
    }
    f && bc(f, b);
  }
  function mb(c) {
    if (ea(sa)) {
      r("[dataUriTest] already done : " + sa), y(c, sa);
    } else {
      if (8 > w) {
        r("[dataUriTest] trident < 8 : false"), y(c, !1);
      } else {
        r("[dataUriTest] start!");
        var a = new Image;
        a.onerror = function() {
          r("[dataUriTest] no DATA URI!");
          c(sa = !1);
        };
        a.onload = function() {
          r("[dataUriTest] DATA URI:" + (1 === a.width * a.height));
          c(sa = 1 === a.width * a.height);
        };
        a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function cc(a, b, d, e, f, g) {
    function c() {
      var c = '1.6em "' + b + '"';
      r("[webFontTest] testByNativeFontLoaderAPI start.");
      u.fonts.load(c).then(function(d) {
        r("[webFontTest] fonts.check() : " + u.fonts.check(c, "i") + ", fonts.length : " + d.length);
        gb(b) ? y(a, Na) : (r("[webFontTest] mesureWebFont() : false"), mb(hb));
      }, function(a) {
        r("[webFontTest] fonts.load() rejected! " + a);
        mb(hb);
      });
    }
    function m(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new ba - t;
    }
    function h(c) {
      c && (r("[webFontTest] testWebFont start."), t = new ba - 0);
      gb(b) ? (r("[webFontTest] testWebFont mesurement success : " + Na), a(Na)) : m(p) ? (r("[webFontTest] testWebFont timeout!"), Qb ? a(0) : 9 > w ? y(a, 0) : mb(hb)) : y(h);
    }
    function k() {
      var a = -1, c;
      k = null;
      nb = ["sans-serif", "serif"];
      x = L(S, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (v = {}; c = nb[++a];) {
        x.style.fontFamily = c, v[c] = x.offsetWidth;
      }
    }
    function gb(a) {
      var c = 0, b = -1, d, e, m = 0;
      k && k();
      for (S.appendChild(x); d = nb[++b];) {
        if (x.style.fontFamily = '"' + a + '",' + d, x.offsetWidth !== v[d]) {
          c = 1;
          break;
        }
      }
      if (c && f) {
        for (e in f) {
          if (x.innerHTML = e, a = x.offsetWidth, x.innerHTML = f[e], m = a === x.offsetWidth ? 1 : 0, x.innerHTML = "mmmmmmmmmmlli", !m) {
            break;
          }
        }
      }
      M(x);
      return Na = c + m;
    }
    function hb(c) {
      r("[webFontTest] testDataUriComplete : " + c);
      (Qb = c) ? l(!0) : a(0);
    }
    function l(c) {
      c && (t = new ba - 0);
      for (b in d) {
        if (gb(b)) {
          r("[webFontTest] success! " + b);
          Oa = L(S, "div", {"aria-hidden":"true", className:e, id:e});
          c = d[b];
          var b = lb.all, f = dc.all || 0;
          b ? b.addImport ? b.addImport(c, f) : b.insertRule && b.insertRule('@import "' + c + '"', f) : bc('@import "' + c + '"', "all");
          dc.all = ++f;
          y(q, !0);
        } else {
          m(100) ? (r("[webFontTest] timeout! " + b), delete d[b], y(l, !0)) : y(l);
        }
        return;
      }
      a(0);
    }
    function q(c) {
      c && (r("[webFontTest] testImportedCssReady start!"), b = b.replace(ec, ""), r("[webFontTest] targetWebFontName : " + b), t = new ba - 0);
      1 < Oa.offsetWidth ? (r("[webFontTest] testImportedCssReady ended."), M(Oa), p = 100, y(h, !0)) : m(p) ? (r("[webFontTest] testImportedCssReady timeout!"), M(Oa), a(0)) : y(q);
    }
    var p = g || 5000, t, Qb, x, Oa, nb, v, Na;
    b = ec + b;
    r("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var a;
      if (n.MeeGo || 2.2 > n.AOSP || n.WebOS || n.UCWEB || 10 > n.TridentMobile || n.NDS || n.NDSi || n.N3DS) {
        return !1;
      }
      if (6 > w) {
        return !0;
      }
      var c = L(ra, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = c.sheet || c.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      M(c);
      return a;
    })() ? (r("[webFontTest] maybeCanWebFont() : true"), !u.fonts || 603 > Vc ? (r("[webFontTest] No native font loader."), h(!0)) : (r("[webFontTest] Use Native font loader."), c())) : (r("[webFontTest] maybeCanWebFont() : false"), y(a, 0));
  }
  function fc() {
    ob = !ob;
    for (var a = -1, b; b = Pa[++a];) {
      b.style.visibility = ob ? "" : "hidden";
    }
  }
  function Wc(a) {
    var c = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), pb = !0, !1;
    }
    c.cancelBubble = !0;
    return c.returnValue = !1;
  }
  function Qa() {
    Qa = null;
    Xc(qb, "PB-100", {"PB-100_canTTF":B + "pbFont/ttf.css", "PB-100_canWOFF":B + "pbFont/woff.css", "PB-100_canEOT":B + "pbFont/eot.css", "PB-100_canSVG":B + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Ra}, 5000);
  }
  function qb(a) {
    Sa = a;
    r("[pbList] WebFont test result : " + !!a);
    Sa ? gc() : Yc();
  }
  function Zc(a) {
    a && (r("[pbList] Fallback start!"), Ka(S, "pbList-noWebFont"), Ma([".pbList font", "background-image:url(" + B + "pbFont/" + (9 > w ? "x3mask_ie.png" : "x3mask.png") + ")"]), Ma([".pbList font", "background-image:url(" + B + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    gc();
  }
  function gc() {
    for (qb = cc = null; W.length;) {
      Ta(W.shift(), rb.shift());
    }
    r("[pbList] complete.");
  }
  function Ta(a, b) {
    function c(a) {
      a = a.childNodes;
      for (var b = -1, e; e = a[++b];) {
        switch(e.nodeType) {
          case 1:
            c(e);
            break;
          case 3:
            e.data && e.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && d.push(e);
        }
      }
    }
    var d = [];
    if (qb) {
      -1 === W.indexOf(a) && (W.push(a), rb.push(b), sb && Qa && Qa());
    } else {
      var e = W.indexOf(a);
      0 <= e && W.splice(e, 1) && rb.splice(e, 1);
      for (c(a); a = d.shift();) {
        e = a.data, 2 !== Sa && (e = e.split(Ra).join(hc)), b ? a.data = e : $c(e.split("\r").join("").split("&yen;").join(ad).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(tb).split("&amp;").join("&"), a);
      }
    }
  }
  function $c(a, b) {
    function c(a, c) {
      for (var b = ""; c;) {
        c & 1 && (b += a), c >>= 1, a += a;
      }
      return b;
    }
    function d(a, b, d) {
      for (var e, f = -1, m, g; e = b[++f];) {
        for (; 0 <= (m = a.indexOf(e));) {
          g = e.length, a = a.substr(0, m) + c(d, g) + a.substr(m + g);
        }
      }
      return a;
    }
    function e(a) {
      var c = A(a), b = "" + c;
      return 0 < c && c === c | 0 && (c = a.indexOf(b) + b.length, c <= a.length) ? c : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), g = [], m = "", h = -1, k, l;
    if (function(a) {
      var c = a.indexOf("P");
      if (-1 === c) {
        return !1;
      }
      c = A(a.charAt(c + 1));
      return 0 <= c && 9 >= c;
    }(a)) {
      m = c("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (m = c("|", h), --h); l = a.charAt(++h);) {
        l === tb || k ? (m += "~", l === tb && (k = !k)) : m += l;
      }
      m = d(m, bd, "^");
      m = d(m, cd, "{");
      m = d(m, dd, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var q = l === ub, p = " " === l;
      l = q ? " " : l;
      var r = m.charAt(h), t = u, u = "|" === r;
      r = f["+|~{}^".indexOf(r) + 1];
      "\n" !== l ? (8 > w && p && (l = h === k - 1 ? ub : ed), 2 === Sa && a.substr(h, 2) === Ra && (l = Ra, ++h), p = p && "str" === r ? ' class="pbList-strsp"' : q ? "" : !p && r ? ' class="pbList-' + r + '"' : "", t && q && (n.WebKit || n.SafariMobile || n.iOSWebView) && (l = ub), g.push("<font" + p + ">" + l + "</font>")) : g.push(l);
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (f = kb("font", g); g = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      M(b);
    }
  }
  var l, p, a = ka.userAgent, v = ka.appVersion, vb = A(v) | 0, t = ka.platform, Ua = u.documentElement, wb = u.documentMode, xb = Ob.width, yb = Ob.height, ic = q.HTMLAudioElement, jc = q.performance, kc = q.Int8Array, fd = void 0 !== q.ontouchstart, T = d(v, "Version/") || d(a, "Version/"), fa = Ua && void 0 !== Ua.style.MozAppearance, lc = q.operamini, Va = g(a, "UCWEB"), gd = Va && d(a, " U2/"), hd = Va && d(a, "; wds "), zb = d(a.split("_").join("."), "; iPh OS "), id = d(a, "; Adr "), mc = 
  g(v, "YJApp-ANDROID"), N = g(t, "Android") || fa && g(v, "Android") || mc, D = d(t, "Android ") || d(v, "Android ") || d(a, "Android ") || id, Ab = g(t, "Linux"), ha = !lc && q.opera, nc = ha && (ha.version && "function" === typeof ha.version ? ha.version() : Sb(d(a, "Opera "), T, "" + vb)), oc = q.opr, ta = !ha && (u.all || wb), G = ta && (wb ? wb : q.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4), Wa = !ta && Ua.msContentZoomFactor, ia = !Wa && 
  q.chrome, Bb = fa && d(a, "Goanna/"), P = !Bb && fa && d(a, "rv:"), pc = d(a, "Firefox/"), qc = d(a, "Opera/"), z = fb(a, "AppleWebKit/"), X = d(a, "Chrome/"), Cb = d(a, "OPR/"), jd = d(v, "KHTML/"), rc = d(a.toLowerCase(), "iris"), Db = d(a, "FxiOS/"), ja = fb(a, "SamsungBrowser/"), va;
  if (va = !ja) {
    a: {
      for (var sc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Xa, Eb = sc.length; Xa = sc[--Eb];) {
        if (g(a, Xa)) {
          va = 2 > A(T) ? T : 0.9;
          break a;
        }
      }
      var tc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Eb = tc.length; Xa = tc[--Eb];) {
        if (g(a, Xa)) {
          va = T;
          break a;
        }
      }
      va = void 0;
    }
  }
  var uc = va, vc = ia && 534.3 >= z, wc = fd && (z || fa) && (0 === t.indexOf("Linux armv") || 0 === t.indexOf("Linux aarch") || "Linux i686" === t) && g(a, "Linux x86_64") || !D && mc, xc = q.puffinDevice, Ya = xc && xc.clientInfo, wa = Ya && "iOS" === Ya.os && Ya.osVersion, Za = wa && Ya.model, Fb = !G && u.registerElement, kd = !G && u.execCommand, yc = Ab && Fb && "11.0.696.34" === X, Y, H, b, xa, Gb, Hb;
  if ("Nitro" === t) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === t) {
      k = "NDSi";
      var h = qc;
    } else {
      if ("New Nintendo 3DS" === t || g(a, "iPhone OS 6_0") && 320 === xb && 240 === yb) {
        k = "New3DS", h = d(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === t) {
          k = "N3DS";
          h = d(a, "Version/");
          z = 535;
          var ld = h;
        } else {
          if ("Nintendo Swicth" === t) {
            k = "Swicth", h = d(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === t) {
              k = "WiiU", h = d(v, "NintendoBrowser/"), z = d(v, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === t) {
                k = "Wii";
                h = d(a, "Wii; U; ; ");
                var e = k;
                var f = h;
              } else {
                if (b = d(a, "PlayStation Vita ")) {
                  k = "PSVita", h = b, e = k, f = b;
                } else {
                  if (b = d(a, "(PlayStation Portable); ")) {
                    k = "PSP";
                    h = b;
                    var zc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = d(a, "PLAYSTATION 3; ") || d(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > Rb("4.10", b) && (l = "Sony", p = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === vb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            zc = 3.4;
                            e = k;
                            f = 2;
                            var $a = !0;
                          } else {
                            if (0 === t.indexOf("iP") || zb || wa) {
                              if (wa) {
                                switch(h = wa, Za.substr(0, 4)) {
                                  case "iPho":
                                    var I = "iPhone";
                                    var Z = A(Za.substr(6));
                                    var J = !0;
                                    break;
                                  case "iPad":
                                    I = "iPad";
                                    Z = A(Za.substr(4));
                                    var K = !0;
                                    break;
                                  case "iPod":
                                    I = "iPod";
                                    Z = A(Za.substr(4));
                                    var Ac = !0;
                                }
                              } else {
                                zb ? h = zb : h = d(v.split("_").join("."), "OS ");
                                h || (H = !0, h = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ka.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : Pb.isNaN ? 9.2 : q.SharedWorker ? jc && jc.now ? 8.0 : 8.4 : kd ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : kc ? 4.3 : ic ? 4.1 : 3.2);
                                var Ib = 1 === q.devicePixelRatio;
                                var C = xb === 1.5 * yb || 1.5 * xb === yb;
                                0 === t.indexOf("iPhone") ? (I = "iPhone", Z = C ? Ib ? {max:3} : {min:4, max:5} : {max:6}, J = !0) : 0 === t.indexOf("iPad") ? (I = "iPad", Z = Ib ? {max:2} : {min:3}, K = !0) : 0 === t.indexOf("iPod") && (I = "iPod", Z = C ? Ib ? {max:3} : 4 : {min:5}, Ac = !0);
                              }
                              wa || !ka.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (Hb = !0, l = "iOSWebView") : (l = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              p = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", l = "AOSP", p = 2.2, e = l, f = p, N = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", l = "AOSP", p = 2.2, e = l, f = p;
                                } else {
                                  if (b = d(a, "CrOS x86_64 ") || d(a, "CrOS aarch64 ") || d(a, "CrOS i686 ") || d(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > P ? "1.0.1" : 19 > P ? 1.1 : 27 > P ? 1.2 : 29 > P ? 1.3 : 31 > P ? 1.4 : 33 > P ? 2.0 : 35 > P ? 2.1 : 38 > P ? 2.2 : 45 > P ? 2.5 : 2.6, g(a, "Mobile") ? J = !0 : g(a, "Tablet") && (K = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        k = "webOS", h = d(a, "webOS/") || d(a, "WEBOS") || d(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (J = !0);
                                      } else {
                                        if (b = d(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ja, l = e, p = f, J = !0;
                                        } else {
                                          if (b = d(a, "Windows Phone ") || d(v, "Windows Phone OS ") || hd) {
                                            var ab = !0;
                                            h = b;
                                            J = !0;
                                          } else {
                                            if (Wa && "ARM" === t) {
                                              ab = !0, h = 10, H = J = !0;
                                            } else {
                                              if (ta && g(v, "ZuneWP")) {
                                                ab = !0, h = 11 === G ? 8.1 : 10 === G ? 8 : 9 === G ? 7.5 : 7 === G ? 7 : "?", H = J = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", J = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", J = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var U = !0;
                                                      h = 6.3;
                                                      var E = K = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        U = !0, h = 6, E = K = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          U = !0, h = 5, E = K = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            U = !0, h = 5, E = K = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              U = !0, h = 5 <= A(D) ? 5 : 4, E = K = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                U = !0, h = 3, E = K = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  U = !0, h = 2, E = K = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    U = !0, h = 1, E = K = !0;
                                                                  } else {
                                                                    if (b = d(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, l = "AOSP", p = 2.2, e = l, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        U = !0, h = D, E = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || rc) {
                                                                              k = "WindowsMobile", $a = !0;
                                                                            } else {
                                                                              if ("WinCE" === t) {
                                                                                k = t, $a = !0;
                                                                              } else {
                                                                                if ("Win16" === t || "Win32" === t || "Win64" === t) {
                                                                                  k = t, h = d(a, "Windows NT ") || d(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === t.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === t ? "MacPPC" : t;
                                                                                    if (b = d(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Bc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = T, J = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : N && fa ? (g(a, "Android 4.4;") ? C = {min:2.3} : 4 <= A(D) ? C = D : C = {min:2.2}, h = C, wc && (H = !0)) : N && ha ? (D ? C = D : (C = {min:1.6}, H = !0), h = C, g(a, "Tablet") ? K = !0 : 
                                                                                    J = !0) : D ? (h = D, N = !0) : Ab && wc ? (Y = !0, ja ? C = {min:4.4} : ia && !vc || oc || Cb ? C = {min:4} : (C = D = void 0 !== Ua.style.touchAction ? {min:5} : Fb ? 4.4 : kc ? ka.connection ? q.searchBoxJavaBridge_ || ia ? Pb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= z ? 3 : 533 <= z ? ic ? 2.3 : 2.2 : 530 <= z ? 2.0 : 1.5, uc && (l = "Samsung", p = uc)), h = C, N = !0) : yc ? (h = {min:5}, Y = N = !0) : Ab && (g(a, 
                                                                                    "Ubuntu") ? k = "Ubuntu" : (b = d(a, "Mint/")) ? (k = "Mint", h = b) : (b = d(a, "Fedora/")) ? (k = "Fedora", h = b) : k = g(a, "Gentoo") ? "Gentoo" : "Linux");
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
  U && (k = "FireOS");
  N && (k = k || "Android");
  ab && (k = "WindowsPhone");
  l || (E = E || N, ha ? (l = E || $a || J || K ? "PrestoMobile" : "Presto", p = nc) : ta ? ((C = fb(v, "Trident/") + 4) && C !== G && (e = "IEHost", f = C), 10 <= G && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = G), $a || J || K || Ac ? l = "TridentMobile" : Bc && 5 <= G ? (l = "Tasman", e = "MacIE", f = G) : (l = "Trident", Bc && (e = "MacIE", f = G)), p = G) : Wa ? (l = ab ? "EdgeMobile" : "EdgeHTML", p = d(v, "Edge/")) : Bb ? (l = "Goanna", p = 
  Bb) : fa ? (l = E ? "Fennec" : "Gecko", p = P || pc) : ja ? (l = "Samsung", p = ja, Y && (H = !0)) : (b = zc || d(a, "NetFront/")) ? (l = "NetFront", p = b) : (b = d(a, "iCab")) ? (l = "iCab", p = b) : (b = Sb(d(a, "Opera Mini/"), d(a, "Opera Mobi/")) || lc && T) ? (l = "OperaMini", p = b, k || (g(a, "iPhone") ? I = "iPhone" : g(a, "iPad") ? I = "iPad" : g(a, "iPod") && (I = "iPod"), I && (k = "iOS"))) : Va ? (l = "UCWEB", p = gd) : jd ? (l = "KHTML", p = vb) : N && vc ? (l = "AOSP", p = D, xa = 
  !0, Y && (H = !0)) : ia || oc || Cb ? (l = E ? "ChromiumMobile" : "Chromium", p = X, Y && (H = !0)) : N && Fb ? (l = "ChromeWebView", p = 5 > A(D) ? D : X, xa = !0, q.requestFileSystem || q.webkitRequestFileSystem || (Gb = !0), Y && (H = !0)) : N && (T || Y) ? (l = "AOSP", p = D, xa = !0, Y && (H = !0)) : X ? (l = E ? "ChromiumMobile" : "Chromium", p = X) : z && (l = "WebKit", p = z));
  if (!e) {
    if (b = Wa && d(a, "Edge/") || d(a, "EdgA/") || d(a, "EdgiOS/") || d(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = d(v, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = d(v, "OPT/")) {
          e = "OperaTouch", f = b, H = H || !g(v, "Mobile/");
        } else {
          if (b = d(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Va && (b = d(a, "UCBrowser/"))) {
              e = "UC", f = b;
            } else {
              if (b = d(a, "SilK/")) {
                e = "Silk", f = b;
              } else {
                if (b = d(a, "Vivaldi/")) {
                  e = "Vivaldi", f = b;
                } else {
                  if (b = d(a, "QQBrowser/")) {
                    e = "QQ", f = b;
                  } else {
                    if (b = d(a, "YaBrowser/")) {
                      e = "Yandex", f = b;
                    } else {
                      if (b = d(a, "coc_coc_browser/")) {
                        e = "coccoc", f = b;
                      } else {
                        if (b = d(a, "Camino/")) {
                          e = "Camino", f = b;
                        } else {
                          if (g(a, "SE 2.X MetaSr 1.0")) {
                            e = "Sogou";
                          } else {
                            if (b = d(a, "Focus/") || 9 > A(Db) && Hb && 11 <= A(h) && Db) {
                              e = "Focus", f = b;
                            } else {
                              if (b = d(a, "Klar/")) {
                                e = "Klar", f = b;
                              } else {
                                if (b = d(a, "AOLBUILD/") || d(a, "AOL/") || d(a, "AOL ")) {
                                  e = "AOL", f = b;
                                } else {
                                  if (b = d(a, "IceDragon/")) {
                                    e = "IceDragon", f = b;
                                  } else {
                                    if (b = d(a, "Iceweasel/")) {
                                      e = "Iceweasel", f = b;
                                    } else {
                                      if (b = d(a, "TenFourFox/")) {
                                        e = "ITenFourFox", f = b;
                                      } else {
                                        if (b = d(a, "Waterfox/")) {
                                          e = "Waterfox", f = b;
                                        } else {
                                          if (b = d(a, "GNUzilla/")) {
                                            e = "GNUzilla", f = b;
                                          } else {
                                            if (b = d(a, "SeaMonkey/")) {
                                              e = "SeaMonkey", f = b;
                                            } else {
                                              if (b = d(a, "PaleMoon/")) {
                                                e = "PaleMoon", f = b;
                                              } else {
                                                if (b = d(a, "Basilisk/")) {
                                                  e = "Basilisk", f = b;
                                                } else {
                                                  if ((b = d(a, "Maxthon/") || d(a, "Maxthon ") || d(a, "MXiOS/")) || g(a, "Maxthon")) {
                                                    e = "Maxthon", f = b || 1;
                                                  } else {
                                                    if (g(a, "Avant Browser;")) {
                                                      e = "Avant";
                                                    } else {
                                                      if (b = d(a, "Lunascape/")) {
                                                        e = "Lunascape", f = b;
                                                      } else {
                                                        if (b = d(a, "Konqueror/")) {
                                                          e = "Konqueror", f = b;
                                                        } else {
                                                          if (b = d(a, "Midori/")) {
                                                            e = "Midori", f = b;
                                                          } else {
                                                            if (b = d(a, "OmniWeb/")) {
                                                              e = "OmniWeb", f = b;
                                                            } else {
                                                              if (b = d(a, "Roccat/")) {
                                                                e = "Roccat", f = b;
                                                              } else {
                                                                if (b = d(a, "Epiphany/")) {
                                                                  e = "Epiphany", f = b;
                                                                } else {
                                                                  if (b = d(a, "WebPositive/")) {
                                                                    e = "WebPositive", f = b;
                                                                  } else {
                                                                    if ((b = d(a, "Iron/")) || g(a, " Iron ")) {
                                                                      e = "Iron", f = b || ia && X;
                                                                    } else {
                                                                      if (b = d(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = d(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ia && X;
                                                                        } else {
                                                                          if (b = d(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = d(a, "Sleipnir/")) || q.FNRBrowser) {
                                                                              e = "Sleipnir", b && (f = b);
                                                                            } else {
                                                                              if (b = d(a, "Puffin/")) {
                                                                                e = "Puffin", f = b;
                                                                              } else {
                                                                                if (b = d(a, "Dooble/")) {
                                                                                  e = "Dooble", f = b;
                                                                                } else {
                                                                                  if (b = d(a, "Flock/")) {
                                                                                    e = "Flock", f = b;
                                                                                  } else {
                                                                                    if (b = d(a, "Galeon/")) {
                                                                                      e = "Galeon", f = b;
                                                                                    } else {
                                                                                      if (b = d(a, "Falkon/")) {
                                                                                        e = "Falkon", f = b;
                                                                                      } else {
                                                                                        if (b = d(a, "Iceape/")) {
                                                                                          e = "Iceape", f = b;
                                                                                        } else {
                                                                                          if (b = d(a, "K-Meleon/")) {
                                                                                            e = "KMeleon", f = b;
                                                                                          } else {
                                                                                            if (b = ld || d(v, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = d(a, "Netscape6/") || d(a, "Netscape/") || d(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (rc) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(v, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = d(v, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = d(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = d(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = Db || fa && (pc || p)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = nc || Cb || qc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (ta) {
                                                                                                                e = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (ja) {
                                                                                                                  e = l, f = ja;
                                                                                                                } else {
                                                                                                                  if (b = d(a, "CriOS/") || (ia || yc && xa) && X) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (xa && !Gb) {
                                                                                                                      e = l, f = p;
                                                                                                                    } else {
                                                                                                                      if (Hb || Gb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || T) {
                                                                                                                          e = "Safari", f = T || (73 > z ? 0.8 : 85 > z ? 0.9 : 100 > z ? 1 : 125 > z ? 1.1 : 312 > z ? 1.2 : 412 > z ? 1.3 : 419.3 >= z ? 2 : 525.13 >= z ? 3 : 525.25 >= z ? 3.1 : 3.2);
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
  k && (n.PLATFORM = k, h ? (n.PLATFORM_VERSION = Da(h), n[k] = Ea(h)) : n[k] = !0);
  l && (n.ENGINE = l, p ? (n.ENGINE_VERSION = Da(p), n[l] = Ea(p)) : n[l] = !0, e || (e = l, f = p));
  e && (n.BRAND = e, f ? (n.BRAND_VERSION = Da(f), n[e] = Ea(f)) : n[e] = !0);
  I && (n.DEVICE = I, Z ? (n.DEVICE_VERSION = Da(Z), n[I] = Ea(Z)) : n[I] = !0);
  H && (n.PC_MODE = !0);
  var Ha = new db, na = [], $b = !!u.getElementsByTagName, S = u.body, aa = S.style, w = n.Trident || n.TridentMobile, ya = n.Tasman, md = n.EdgeHTML || n.EdgeMobile, bb = n.Presto || n.PrestoMobile, Cc = n.Gecko, Dc = n.Goanna, Vc = n.WebKit, Ec = n.SafariMobile || n.iOSWebView, nd = n.OperaMini && n.UCWEB;
  w || ya || (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var od = 5.5 > w, Fc = u.scripts, pd = (ya ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : "modern") + ".css";
  var oa = Fc[Fc.length - 1].src.split("/");
  --oa.length;
  var Gc = oa.join("/");
  0 <= "http: https:".indexOf(oa[0]) && oa.splice(0, 3);
  oa = oa.join("/");
  var ea = function(a) {
    return void 0 !== a;
  };
  var Q = Array.prototype;
  Q.pop || (Q.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  Q.push || (Q.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  Q.shift || (Q.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  Q.splice || (Q.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, e = this.slice(a, a + b), f;
    if (0 < d) {
      var g = this.length - 1;
      for (f = a + b; g >= f; --g) {
        this[g + d] = this[g];
      }
    } else {
      if (0 > d) {
        g = a + b;
        for (f = this.length; g < f; ++g) {
          this[g + d] = this[g];
        }
        this.length += d;
      }
    }
    g = 2;
    for (f = c.length; g < f; ++g) {
      this[g - 2 + a] = c[g];
    }
    return e;
  });
  Q.indexOf || (Q.indexOf = function(a, b) {
    var c = this.length >>> 0;
    if (0 === c) {
      return -1;
    }
    if (b) {
      var d = b || 0;
      d = -Infinity === d ? 0 : (0 > d ? -d : d) | 0;
      if (c <= d) {
        return -1;
      }
    }
    for (d = 0 <= d ? d : 0 < c + d ? c + d : 0; d < c; ++d) {
      if (this[d] === a) {
        return d;
      }
    }
    return -1;
  });
  var Jb, Kb = [];
  na.push(function() {
    za(function() {
      (Jb = q.logger || u.all.logger) || alert("#logger not found!");
      for (Jb ? r = function(a) {
        L(Jb, "P", null, null, a);
      } : q.console && (r = console.log); Kb.length;) {
        r(Kb.shift());
      }
    });
  });
  r = function(a) {
    Kb.push(a);
  };
  var Ga = [], qd = 0, la;
  if (5 > w || ya) {
    q._wdb_onlooptimer = Fa, Fa = "_wdb_onlooptimer()";
  }
  var Hc = function(a) {
    Ga.length || (la = setInterval(Fa, 999));
    Ga.push({f:a, uid:++qd});
  };
  na.push(function() {
    Ec && Ic(Tc);
    cb(Tb);
  });
  var R = [], Jc = 0, ca;
  if (5 > w || ya) {
    q._wdb_ontimer = pa, pa = "_wdb_ontimer()";
  }
  var y = function(a, b) {
    R.length || (ca = eb(pa, 64));
    R.push({f:a, p:b, uid:++Jc, t:new ba - 0 + 64});
    return Jc;
  };
  var Kc = function(a) {
    for (var b = R.length, c; c = R[--b];) {
      if (c.uid === a) {
        R.splice(b, 1);
        break;
      }
    }
  };
  na.push(function() {
    Ec && Ic(Uc);
    cb(Ub);
  });
  var qa = [], Aa = q.matchMedia, Ia;
  qa.push(function() {
    Ia = L(S, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden", color:"#123456"});
  });
  var Lc = [], jb = q.onload, Mc = q.onunload;
  onload = ib;
  onunload = function(a) {
    var b;
    Mc && (b = Mc(a));
    O(Lc, a);
    onunload = Ha;
    return b;
  };
  var za = function(a) {
    qa.push(a);
  };
  var cb = function(a) {
    Lc.push(a);
  };
  var Xb = [], Wb;
  za(function() {
    Vb();
    Hc(Vb);
  });
  var Lb = function(a) {
    Xb.push(a);
  };
  var Zb = [], Yb = !1;
  10 <= w || md ? (Aa("(-ms-high-contrast:active)").addListener(function(a) {
    O(Zb, a.matches);
  }), ma = null) : 10 > w || (n.Win32 || n.Win64) && (44 <= Cc || Dc) ? za(function() {
    60 > Cc || Dc ? ma() : ma() && Hc(ma);
    ma = null;
  }) : ma = null;
  var rd = [];
  Aa && Aa("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    O(rd, a.matches);
  });
  var Mb = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    O(Mb, !0);
  }, onafterprint = function() {
    O(Mb, !1);
  }, cb(function() {
    onbeforeprint = onafterprint = Ha;
  })) : Aa && Aa("print").addListener(function(a) {
    O(Mb, a.matches);
  });
  var Nc = [], Nb = q.onscroll;
  onscroll = function(a) {
    var b;
    Nb && (b = Nb(a));
    ib || O(Nc);
    return b;
  };
  cb(function() {
    onscroll = Nb = Ha;
  });
  var Ic = function(a) {
    Nc.push(a);
  };
  var Oc = Ja("html")[0];
  var ra = Ja("head")[0];
  var La;
  qa.splice(0, 0, function() {
    function a(c) {
      c = c.childNodes;
      for (var g = c.length, f, h, k, l, m; f = c[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && M(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (od ? (k = f.sheet || f.styleSheet) && (l = 10 <= w ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new db("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  M(f);
                  break;
                }
              case "LINK":
                $b && !ra.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (m = d.length; m;) {
                  if (0 === h.indexOf(d[--m])) {
                    M(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (ac(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (ac(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                M(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        k = e.pop(), ra.appendChild(k);
      }
    }
    var b = !(8 > bb || 5 > w || ya), d = ["og:", "twitter:", "fb:"], e = [];
    a(Oc);
  });
  var lb = {}, dc = {}, Pc, V;
  ea(aa.transform) || ea(aa["-o-transform"]) || ea(aa["-ms-transform"]) || ea(aa["-moz-transform"]) || ea(aa["-webkit-transform"]);
  Lb(function(a) {
    a && !ea(V) && (a = L(S, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), V = !!a.offsetWidth, M(a));
  });
  var sa;
  9 > w && za(function(a) {
    a = L(S, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Pc = 1 < a.offsetHeight;
    a.style.cssText = "";
    M(a);
  });
  var Yc = function() {
    function a() {
      f || (d.complete ? (f = !0, d.width || y(b, !1)) : e = y(a));
    }
    var b = Zc, d = new Image, e, f;
    d.onerror = function() {
      (!w || 11 === w || 11 === n.IEHost) && d.width || f || (f = !0, e && Kc(e), e = y(b, !1));
    };
    d.onload = function() {
      f = !0;
      e && Kc(e);
      bb && !d.complete ? e = y(b, !1) : y(b, !0);
    };
    d.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > bb && d.complete ? y(b, !0) : e = y(a);
  };
  var ec = "bad_" + (new ba - 0) + "_";
  var Xc = cc;
  for (n.IEHost && 5.5 > w && za(function() {
    var a = u.createElement("link");
    ra.appendChild(a);
    a.setAttribute("href", (Gc ? Gc + "/" : "") + pd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); na.length;) {
    na.shift()();
  }
  na = null;
  var Qc = Qc || {}, F = String.fromCharCode, B = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", F(960), ")", "(", F(234), F(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", F(9824), "\u2190", F(9829), F(9830), F(9827), F(956), "\u03a9", "\u2193", "\u2192", "%", F(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", F(9619)], Pa = [], ob, pb, Ca = 8 > bb && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}}, Rc;
  Lb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      Ka(a, "pbTipPos" + b.toUpperCase());
      L(a, "div", {className:"pbTip" + c}, {width:e.length + f + "em"}, e);
      L(a, "div", {className:"pbTail" + c});
      h && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (V && r) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", k = f.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var h = "_";
        } else {
          h = c, 3 === h.length && (h = h.substr(0, 2)), h = Ba[parseInt(h, 16)] || "~";
        }
        g = g.split(" ")[0];
        k = k.split(" ")[0];
        var m = 10 - A(k);
        Ca && k ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, k, a.innerHTML), b && e(a, c, m, h), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + c + " pbAlp" + m + " pbCsr" + g]}, La = 1, l = L(a, "b", b, 0, h), d(a), d(l)) : d(a);
      }
    }
    function d(a) {
      q || g || da(a, "pbChrCS") && Pa.push(a);
    }
    function e(a, b, c, d) {
      b = Ca[b + (u ? "a" : "")] || Ca[b];
      b.top += "px";
      a = L(a, "img", {title:d, src:B + "pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Pa.push(a);
    }
    if (a && !Rc) {
      Rc = !0;
      var f = 6 > w ? 1 : 0;
      a = Ja("SAMP");
      var g = 9 > w, h = 5 <= w && 6 > w, k, l, n, p;
      Pc && Ka(S, "pbLCD-AX");
      if (a.length) {
        var q = void 0 !== aa.opacity || void 0 !== aa["-moz-opacity"] || void 0 !== aa["-khtml-opacity"], r = !q && !g && !Ca, t = !V || r || Ca;
        for (n = -1; k = a[++n];) {
          if (da(k.parentElement || k.parentNode, "pbLCD")) {
            var u = da(k, "PB-120") || da(k, "FX-795P"), v = k.children;
            for (k = v.length; k;) {
              var x = v[--k];
              switch(x.tagName.toUpperCase()) {
                case "A":
                  if (t) {
                    for (V || b(x), p = x.children.length; p;) {
                      c(x.children[--p]);
                    }
                  }
                  nd ? x.setAttribute("href", "javascript:void(0)") : x.onclick = Wc;
                  break;
                case "B":
                  t && c(x);
              }
            }
          }
        }
        Pa.length ? (setInterval(fc, 500), Ma([".pbChrCS", "background-position:0 -51px"])) : fc = null;
        r && Ma([".pbAlp1" + (V ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2" + (V ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3" + (V ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4" + (V ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        B + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + B + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + B + "pbLCD/x3_a90.png)"]);
      }
    }
  });
  525.13 > n.WebKit && (Oc.onclick = function(a) {
    if (pb) {
      return pb = !1, a.preventDefault(), !1;
    }
  });
  var tb = Ba[7], hc = Ba[30], ad = Ba[113], Ra = F(8337) + F(8331), ub = F(160), ed = F(8194), cd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), dd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), bd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + hc + Ba[31]).split(""), W = 
  [], rb = [], Sa, sb;
  Lb(function(a) {
    if (a && !sb) {
      var b = u.all || Ja("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        da(c, "pbList") ? Ta(c) : da(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ta(c, !0);
      }
      W.length && (r("[pbList] " + W.length + " elements found. WebFont test start."), Qa());
      sb = !0;
    }
  });
  Qc.prettify = Ta;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

