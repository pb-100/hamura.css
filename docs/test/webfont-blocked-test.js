PB100 = {};
(function(rd, p, m, u, ja, Ob, z, Pb, bb, sd, cb, Sc, aa, td) {
  function db(c, a) {
    var n = z(c.split(a)[1]);
    return 0 <= n ? n : 0;
  }
  function g(c, a) {
    return 0 <= c.indexOf(a);
  }
  function d(c, a) {
    var n = "", b = -1, d;
    if (c = c.split(a)[1]) {
      for (; d = c.charCodeAt(++b);) {
        if (48 <= d && 57 >= d || 46 === d) {
          n += c.charAt(b);
        } else {
          break;
        }
      }
      for (b = n.length; b;) {
        if (46 === n.charCodeAt(--b)) {
          n = n.substr(0, b);
        } else {
          break;
        }
      }
    }
    return n;
  }
  function Rb(c, a) {
    var b = 0, n;
    c = c.split(".");
    a = a.split(".");
    for (n = Math.min(c.length, a.length); b < n; ++b) {
      var d = z(c[b]), e = z(a[b]);
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
  function Ca(c) {
    return c === c + "" ? c : c === c - 0 ? "" + c : c.min && c.max ? c.min + "~" + c.max : c.min ? c.min + "~" : "~" + c.max;
  }
  function Da(c) {
    return c === c + "" ? z(c) : c;
  }
  function r() {
  }
  function Ea() {
    for (var c, a = 0; a < Fa.length; ++a) {
      c = Fa[a], c.f();
    }
  }
  function Tc() {
    ka && (Tb(), ka = setInterval(Ea, 999));
  }
  function Tb() {
    ka && (ka = clearInterval(ka));
  }
  function oa() {
    for (var c, a = 0, b = new aa - 0; a < R.length;) {
      b < R[0].t ? ++a : (c = R.splice(a, 1)[0], c.f(c.p));
    }
    ba = R.length ? cb(oa, 64) : 0;
  }
  function Uc() {
    ba && (Ub(), ba = cb(oa, 64));
  }
  function Ub() {
    ba && (ba = Sc(ba));
  }
  function O(c, a) {
    for (var b = 0, n = c.length; b < n; ++b) {
      c[b](a);
    }
  }
  function gb(c) {
    var a;
    hb && (a = hb(c));
    O(pa, c);
    onload = Ga;
    pa = gb = hb = onload = null;
    return a;
  }
  function Vb() {
    var c = 9 === Ha.offsetWidth;
    Wb !== c && O(Xb, Wb = c);
  }
  function la() {
    var c = u.defaultView;
    c = c ? c.getComputedStyle(Ha, null) : Ha.currentStyle;
    if (c = (c && c.color || "").split(" ").join("")) {
      return c = "#123456" !== c && "rgb(18,52,86)" !== c, Yb !== c && O(Zb, Yb = c), !0;
    }
  }
  function Ia(c) {
    var a = a || u;
    return $b ? a.getElementsByTagName(c) : a.all.i(c.toUpperCase());
  }
  function M(c) {
    (c.parentElement || c.parentNode).removeChild(c);
  }
  function ib(c, a) {
    var b = u.createElement(c);
    a && (b.innerHTML = a);
    return b;
  }
  function K(c, a, b, d, e) {
    function n(c, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            Ja(c, a[b]);
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
      a = ib("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = ib(a);
    }
    Ka ? (2 === Ka && (c = c.nextSibling), c ? (c.parentElement || c.parentNode).insertBefore(a, c) : (c.parentElement || c.parentNode).appendChild(a)) : c.appendChild(a);
    Ka = 0;
    b && n(a, b);
    d && f(a, d);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function ac(c, a) {
    return c.hasAttribute ? c.hasAttribute(a) : null != c.getAttribute(a);
  }
  function ca(c, a) {
    return -1 !== (" " + c.className + " ").indexOf(" " + a + " ");
  }
  function Ja(c, a) {
    var b;
    if (!ca(c, a)) {
      if (b = c.className) {
        a = " " + a;
      }
      c.className = b + a;
    }
  }
  function bc(c, a) {
    var b = K(qa, "style", {type:"text/css", media:a}, 0, c);
    jb[a] = b.sheet || b.styleSheet;
  }
  function La(c, a) {
    for (var b = a || "all", d = jb[b], n, e, f = "", g; c.length;) {
      n = c.shift(), e = c.shift(), g = n + "{" + e + "}", d ? d.addRule ? d.addRule(n, e) : d.insertRule && d.insertRule(g, d.cssRules.length) : f += g;
    }
    f && bc(f, b);
  }
  function kb(c) {
    if (da(ra)) {
      r("[dataUriTest] already done : " + ra), y(c, ra);
    } else {
      if (8 > x) {
        r("[dataUriTest] trident < 8 : false"), y(c, !1);
      } else {
        r("[dataUriTest] start!");
        var a = new Image;
        a.onerror = function() {
          r("[dataUriTest] no DATA URI!");
          c(ra = !1);
        };
        a.onload = function() {
          r("[dataUriTest] DATA URI:" + (1 === a.width * a.height));
          c(ra = 1 === a.width * a.height);
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
        eb(b) ? y(a, Ma) : (r("[webFontTest] mesureWebFont() : false"), kb(fb));
      }, function(a) {
        r("[webFontTest] fonts.load() rejected! " + a);
        kb(fb);
      });
    }
    function n(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new aa - t;
    }
    function h(c) {
      c && (r("[webFontTest] testWebFont start."), t = new aa - 0);
      eb(b) ? (r("[webFontTest] testWebFont mesurement success : " + Ma), a(Ma)) : n(q) ? (r("[webFontTest] testWebFont timeout!"), Qb ? a(0) : 9 > x ? y(a, 0) : kb(fb)) : y(h);
    }
    function k() {
      var a = -1, c;
      k = null;
      lb = ["sans-serif", "serif"];
      L = K(S, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (mb = {}; c = lb[++a];) {
        L.style.fontFamily = c, mb[c] = L.offsetWidth;
      }
    }
    function eb(a) {
      var c = 0, b = -1, d, e, n = 0;
      k && k();
      for (S.appendChild(L); d = lb[++b];) {
        if (L.style.fontFamily = '"' + a + '",' + d, L.offsetWidth !== mb[d]) {
          c = 1;
          break;
        }
      }
      if (c && f) {
        for (e in f) {
          if (L.innerHTML = e, a = L.offsetWidth, L.innerHTML = f[e], n = a === L.offsetWidth ? 1 : 0, L.innerHTML = "mmmmmmmmmmlli", !n) {
            break;
          }
        }
      }
      M(L);
      return Ma = c + n;
    }
    function fb(c) {
      r("[webFontTest] testDataUriComplete : " + c);
      (Qb = c) ? l(!0) : a(0);
    }
    function l(c) {
      c && (t = new aa - 0);
      for (b in d) {
        if (eb(b)) {
          r("[webFontTest] success! " + b);
          v = K(S, "div", {"aria-hidden":"true", className:e, id:e});
          c = d[b];
          var b = jb.all, f = dc.all || 0;
          b ? b.addImport ? b.addImport(c, f) : b.insertRule && b.insertRule('@import "' + c + '"', f) : bc('@import "' + c + '"', "all");
          dc.all = ++f;
          y(m, !0);
        } else {
          n(100) ? (r("[webFontTest] timeout! " + b), delete d[b], y(l, !0)) : y(l);
        }
        return;
      }
      a(0);
    }
    function m(c) {
      c && (r("[webFontTest] testImportedCssReady start!"), b = b.replace(ec, ""), r("[webFontTest] targetWebFontName : " + b), t = new aa - 0);
      1 < v.offsetWidth ? (r("[webFontTest] testImportedCssReady ended."), M(v), q = 100, y(h, !0)) : n(q) ? (r("[webFontTest] testImportedCssReady timeout!"), M(v), a(0)) : y(m);
    }
    var q = g || 5000, t, Qb, L, v, lb, mb, Ma;
    b = ec + b;
    r("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var a;
      if (p.MeeGo || 2.2 > p.AOSP || p.WebOS || p.UCWEB || 10 > p.TridentMobile || p.NDS || p.NDSi || p.N3DS) {
        return !1;
      }
      if (6 > x) {
        return !0;
      }
      var c = K(qa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = c.sheet || c.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      M(c);
      return a;
    })() ? (r("[webFontTest] maybeCanWebFont() : true"), !u.fonts || 603 > p.WebKit ? (r("[webFontTest] No native font loader."), h(!0)) : (r("[webFontTest] Use Native font loader."), c())) : (r("[webFontTest] maybeCanWebFont() : false"), y(a, 0));
  }
  function fc() {
    nb = !nb;
    for (var a = -1, b; b = Na[++a];) {
      b.style.visibility = nb ? "" : "hidden";
    }
  }
  function Vc(a) {
    var c = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), ob = !0, !1;
    }
    c.cancelBubble = !0;
    return c.returnValue = !1;
  }
  function Oa() {
    Oa = null;
    Wc(pb, "PB-100", {"PB-100_canTTF":A + "pbFont/ttf.css", "PB-100_canWOFF":A + "pbFont/woff.css", "PB-100_canEOT":A + "pbFont/eot.css", "PB-100_canSVG":A + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Pa}, 5000);
  }
  function pb(a) {
    Qa = a;
    r("[pbList] WebFont test result : " + !!a);
    Qa ? gc() : Xc();
  }
  function Yc(a) {
    a && (r("[pbList] Fallback start!"), Ja(S, "pbList-noWebFont"), La([".pbList font", "background-image:url(" + A + "pbFont/" + (9 > x ? "x3mask_ie.png" : "x3mask.png") + ")"]), La([".pbList font", "background-image:url(" + A + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    gc();
  }
  function gc() {
    for (pb = cc = null; V.length;) {
      Ra(V.shift(), qb.shift());
    }
    r("[pbList] complete.");
  }
  function Ra(a, b) {
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
    if (pb) {
      -1 === V.indexOf(a) && (V.push(a), qb.push(b), rb && Oa && Oa());
    } else {
      var e = V.indexOf(a);
      0 <= e && V.splice(e, 1) && qb.splice(e, 1);
      for (c(a); a = d.shift();) {
        e = a.data, 2 !== Qa && (e = e.split(Pa).join(hc)), b ? a.data = e : Zc(e.split("\r").join("").split("&yen;").join($c).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(sb).split("&amp;").join("&"), a);
      }
    }
  }
  function Zc(a, b) {
    function c(a, c) {
      for (var b = ""; c;) {
        c & 1 && (b += a), c >>= 1, a += a;
      }
      return b;
    }
    function d(a, b, d) {
      for (var e, f = -1, n, g; e = b[++f];) {
        for (; 0 <= (n = a.indexOf(e));) {
          g = e.length, a = a.substr(0, n) + c(d, g) + a.substr(n + g);
        }
      }
      return a;
    }
    function e(a) {
      var c = z(a), b = "" + c;
      return 0 < c && c === c | 0 && (c = a.indexOf(b) + b.length, c <= a.length) ? c : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), g = [], n = "", h = -1, k, l;
    if (function(a) {
      var c = a.indexOf("P");
      if (-1 === c) {
        return !1;
      }
      c = z(a.charAt(c + 1));
      return 0 <= c && 9 >= c;
    }(a)) {
      n = c("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (n = c("|", h), --h); l = a.charAt(++h);) {
        l === sb || k ? (n += "~", l === sb && (k = !k)) : n += l;
      }
      n = d(n, ad, "^");
      n = d(n, bd, "{");
      n = d(n, cd, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var m = l === tb, q = " " === l;
      l = m ? " " : l;
      var r = n.charAt(h), t = u, u = "|" === r;
      r = f["+|~{}^".indexOf(r) + 1];
      "\n" !== l ? (8 > x && q && (l = h === k - 1 ? tb : dd), 2 === Qa && a.substr(h, 2) === Pa && (l = Pa, ++h), q = q && "str" === r ? ' class="pbList-strsp"' : m ? "" : !q && r ? ' class="pbList-' + r + '"' : "", t && m && (p.WebKit || p.SafariMobile || p.iOSWebView) && (l = tb), g.push("<font" + q + ">" + l + "</font>")) : g.push(l);
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (f = ib("font", g); g = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      M(b);
    }
  }
  var l, q, a = ja.userAgent, v = ja.appVersion, ub = z(v) | 0, t = ja.platform, Sa = u.documentElement, vb = u.documentMode, wb = Ob.width, xb = Ob.height, ic = m.HTMLAudioElement, jc = m.performance, kc = m.Int8Array, ed = void 0 !== m.ontouchstart, T = d(v, "Version/") || d(a, "Version/"), ea = Sa && void 0 !== Sa.style.MozAppearance, lc = m.operamini, Ta = g(a, "UCWEB"), fd = Ta && d(a, " U2/"), gd = Ta && d(a, "; wds "), yb = d(a.split("_").join("."), "; iPh OS "), hd = d(a, "; Adr "), mc = 
  g(v, "YJApp-ANDROID"), N = g(t, "Android") || ea && g(v, "Android") || mc, C = d(t, "Android ") || d(v, "Android ") || d(a, "Android ") || hd, zb = g(t, "Linux"), fa = !lc && m.opera, nc = fa && (fa.version && "function" === typeof fa.version ? fa.version() : Sb(d(a, "Opera "), T, "" + ub)), oc = m.opr, sa = !fa && (u.all || vb), F = sa && (vb ? vb : m.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4), Ua = !sa && Sa.msContentZoomFactor, ha = !Ua && 
  m.chrome, Ab = ea && d(a, "Goanna/"), P = !Ab && ea && d(a, "rv:"), pc = d(a, "Firefox/"), qc = d(a, "Opera/"), w = db(a, "AppleWebKit/"), W = d(a, "Chrome/"), Bb = d(a, "OPR/"), id = d(v, "KHTML/"), rc = d(a.toLowerCase(), "iris"), Cb = d(a, "FxiOS/"), ia = db(a, "SamsungBrowser/"), ta;
  if (ta = !ia) {
    a: {
      for (var sc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Va, Db = sc.length; Va = sc[--Db];) {
        if (g(a, Va)) {
          ta = 2 > z(T) ? T : 0.9;
          break a;
        }
      }
      var tc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Db = tc.length; Va = tc[--Db];) {
        if (g(a, Va)) {
          ta = T;
          break a;
        }
      }
      ta = void 0;
    }
  }
  var uc = ta, vc = ha && 534.3 >= w, wc = ed && (w || ea) && (0 === t.indexOf("Linux armv") || 0 === t.indexOf("Linux aarch") || "Linux i686" === t) && g(a, "Linux x86_64") || !C && mc, xc = m.puffinDevice, Wa = xc && xc.clientInfo, va = Wa && "iOS" === Wa.os && Wa.osVersion, Xa = va && Wa.model, Eb = !F && u.registerElement, jd = !F && u.execCommand, yc = zb && Eb && "11.0.696.34" === W, X, G, b, wa, Fb, Gb;
  if ("Nitro" === t) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === t) {
      k = "NDSi";
      var h = qc;
    } else {
      if ("New Nintendo 3DS" === t || g(a, "iPhone OS 6_0") && 320 === wb && 240 === xb) {
        k = "New3DS", h = d(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === t) {
          k = "N3DS";
          h = d(a, "Version/");
          w = 535;
          var kd = h;
        } else {
          if ("Nintendo Swicth" === t) {
            k = "Swicth", h = d(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === t) {
              k = "WiiU", h = d(v, "NintendoBrowser/"), w = d(v, "AppleWebKit/");
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
                      k = "PS3", h = b, e = k, f = b, 0 > Rb("4.10", b) && (l = "Sony", q = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === ub && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            zc = 3.4;
                            e = k;
                            f = 2;
                            var Ya = !0;
                          } else {
                            if (0 === t.indexOf("iP") || yb || va) {
                              if (va) {
                                switch(h = va, Xa.substr(0, 4)) {
                                  case "iPho":
                                    var H = "iPhone";
                                    var Y = z(Xa.substr(6));
                                    var I = !0;
                                    break;
                                  case "iPad":
                                    H = "iPad";
                                    Y = z(Xa.substr(4));
                                    var J = !0;
                                    break;
                                  case "iPod":
                                    H = "iPod";
                                    Y = z(Xa.substr(4));
                                    var Ac = !0;
                                }
                              } else {
                                yb ? h = yb : h = d(v.split("_").join("."), "OS ");
                                h || (G = !0, h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ja.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : Pb.isNaN ? 9.2 : m.SharedWorker ? jc && jc.now ? 8.0 : 8.4 : jd ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : kc ? 4.3 : ic ? 4.1 : 3.2);
                                var Hb = 1 === m.devicePixelRatio;
                                var B = wb === 1.5 * xb || 1.5 * wb === xb;
                                0 === t.indexOf("iPhone") ? (H = "iPhone", Y = B ? Hb ? {max:3} : {min:4, max:5} : {max:6}, I = !0) : 0 === t.indexOf("iPad") ? (H = "iPad", Y = Hb ? {max:2} : {min:3}, J = !0) : 0 === t.indexOf("iPod") && (H = "iPod", Y = B ? Hb ? {max:3} : 4 : {min:5}, Ac = !0);
                              }
                              va || !ja.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (Gb = !0, l = "iOSWebView") : (l = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              q = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", l = "AOSP", q = 2.2, e = l, f = q, N = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", l = "AOSP", q = 2.2, e = l, f = q;
                                } else {
                                  if (b = d(a, "CrOS x86_64 ") || d(a, "CrOS aarch64 ") || d(a, "CrOS i686 ") || d(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== m.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > P ? "1.0.1" : 19 > P ? 1.1 : 27 > P ? 1.2 : 29 > P ? 1.3 : 31 > P ? 1.4 : 33 > P ? 2.0 : 35 > P ? 2.1 : 38 > P ? 2.2 : 45 > P ? 2.5 : 2.6, g(a, "Mobile") ? I = !0 : g(a, "Tablet") && (J = !0);
                                    } else {
                                      if (m.palmGetResource) {
                                        k = "webOS", h = d(a, "webOS/") || d(a, "WEBOS") || d(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (I = !0);
                                      } else {
                                        if (b = d(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ia, l = e, q = f, I = !0;
                                        } else {
                                          if (b = d(a, "Windows Phone ") || d(v, "Windows Phone OS ") || gd) {
                                            var Za = !0;
                                            h = b;
                                            I = !0;
                                          } else {
                                            if (Ua && "ARM" === t) {
                                              Za = !0, h = 10, G = I = !0;
                                            } else {
                                              if (sa && g(v, "ZuneWP")) {
                                                Za = !0, h = 11 === F ? 8.1 : 10 === F ? 8 : 9 === F ? 7.5 : 7 === F ? 7 : "?", G = I = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", I = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", I = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var U = !0;
                                                      h = 6.3;
                                                      var D = J = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        U = !0, h = 6, D = J = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          U = !0, h = 5, D = J = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            U = !0, h = 5, D = J = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              U = !0, h = 5 <= z(C) ? 5 : 4, D = J = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                U = !0, h = 3, D = J = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  U = !0, h = 2, D = J = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    U = !0, h = 1, D = J = !0;
                                                                  } else {
                                                                    if (b = d(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, l = "AOSP", q = 2.2, e = l, f = q;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        U = !0, h = C, D = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || rc) {
                                                                              k = "WindowsMobile", Ya = !0;
                                                                            } else {
                                                                              if ("WinCE" === t) {
                                                                                k = t, Ya = !0;
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
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = T, I = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : N && ea ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= z(C) ? B = C : B = {min:2.2}, h = B, wc && (G = !0)) : N && fa ? (C ? B = C : (B = {min:1.6}, G = !0), h = B, g(a, "Tablet") ? J = !0 : 
                                                                                    I = !0) : C ? (h = C, N = !0) : zb && wc ? (X = !0, ia ? B = {min:4.4} : ha && !vc || oc || Bb ? B = {min:4} : (B = C = void 0 !== Sa.style.touchAction ? {min:5} : Eb ? 4.4 : kc ? ja.connection ? m.searchBoxJavaBridge_ || ha ? Pb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= w ? 3 : 533 <= w ? ic ? 2.3 : 2.2 : 530 <= w ? 2.0 : 1.5, uc && (l = "Samsung", q = uc)), h = B, N = !0) : yc ? (h = {min:5}, X = N = !0) : zb && (g(a, 
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
  Za && (k = "WindowsPhone");
  l || (D = D || N, fa ? (l = D || Ya || I || J ? "PrestoMobile" : "Presto", q = nc) : sa ? ((B = db(v, "Trident/") + 4) && B !== F && (e = "IEHost", f = B), 10 <= F && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = F), Ya || I || J || Ac ? l = "TridentMobile" : Bc && 5 <= F ? (l = "Tasman", e = "MacIE", f = F) : (l = "Trident", Bc && (e = "MacIE", f = F)), q = F) : Ua ? (l = Za ? "EdgeMobile" : "EdgeHTML", q = d(v, "Edge/")) : Ab ? (l = "Goanna", q = 
  Ab) : ea ? (l = D ? "Fennec" : "Gecko", q = P || pc) : ia ? (l = "Samsung", q = ia, X && (G = !0)) : (b = zc || d(a, "NetFront/")) ? (l = "NetFront", q = b) : (b = d(a, "iCab")) ? (l = "iCab", q = b) : (b = Sb(d(a, "Opera Mini/"), d(a, "Opera Mobi/")) || lc && T) ? (l = "OperaMini", q = b, k || (g(a, "iPhone") ? H = "iPhone" : g(a, "iPad") ? H = "iPad" : g(a, "iPod") && (H = "iPod"), H && (k = "iOS"))) : Ta ? (l = "UCWEB", q = fd) : id ? (l = "KHTML", q = ub) : N && vc ? (l = "AOSP", q = C, wa = 
  !0, X && (G = !0)) : ha || oc || Bb ? (l = D ? "ChromiumMobile" : "Chromium", q = W, X && (G = !0)) : N && Eb ? (l = "ChromeWebView", q = 5 > z(C) ? C : W, wa = !0, m.requestFileSystem || m.webkitRequestFileSystem || (Fb = !0), X && (G = !0)) : N && (T || X) ? (l = "AOSP", q = C, wa = !0, X && (G = !0)) : W ? (l = D ? "ChromiumMobile" : "Chromium", q = W) : w && (l = "WebKit", q = w));
  if (!e) {
    if (b = Ua && d(a, "Edge/") || d(a, "EdgA/") || d(a, "EdgiOS/") || d(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = d(v, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = d(v, "OPT/")) {
          e = "OperaTouch", f = b, G = G || !g(v, "Mobile/");
        } else {
          if (b = d(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Ta && (b = d(a, "UCBrowser/"))) {
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
                            if (b = d(a, "Focus/") || 9 > z(Cb) && Gb && 11 <= z(h) && Cb) {
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
                                                                      e = "Iron", f = b || ha && W;
                                                                    } else {
                                                                      if (b = d(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = d(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ha && W;
                                                                        } else {
                                                                          if (b = d(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = d(a, "Sleipnir/")) || m.FNRBrowser) {
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
                                                                                            if (b = kd || d(v, "NX/")) {
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
                                                                                                          if (b = Cb || ea && (pc || q)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = nc || Bb || qc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (sa) {
                                                                                                                e = "IE", f = q;
                                                                                                              } else {
                                                                                                                if (ia) {
                                                                                                                  e = l, f = ia;
                                                                                                                } else {
                                                                                                                  if (b = d(a, "CriOS/") || (ha || yc && wa) && W) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (wa && !Fb) {
                                                                                                                      e = l, f = q;
                                                                                                                    } else {
                                                                                                                      if (Gb || Fb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || T) {
                                                                                                                          e = "Safari", f = T || (73 > w ? 0.8 : 85 > w ? 0.9 : 100 > w ? 1 : 125 > w ? 1.1 : 312 > w ? 1.2 : 412 > w ? 1.3 : 419.3 >= w ? 2 : 525.13 >= w ? 3 : 525.25 >= w ? 3.1 : 3.2);
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
  k && (p.PLATFORM = k, h ? (p.PLATFORM_VERSION = Ca(h), p[k] = Da(h)) : p[k] = !0);
  l && (p.ENGINE = l, q ? (p.ENGINE_VERSION = Ca(q), p[l] = Da(q)) : p[l] = !0, e || (e = l, f = q));
  e && (p.BRAND = e, f ? (p.BRAND_VERSION = Ca(f), p[e] = Da(f)) : p[e] = !0);
  H && (p.DEVICE = H, Y ? (p.DEVICE_VERSION = Ca(Y), p[H] = Da(Y)) : p[H] = !0);
  G && (p.PC_MODE = !0);
  var Ga = new bb, ma = [], $b = !!u.getElementsByTagName, S = u.body, Z = S.style, x = p.Trident || p.TridentMobile, xa = p.Tasman, ld = p.EdgeHTML || p.EdgeMobile, $a = p.Presto || p.PrestoMobile, Cc = p.Gecko, Dc = p.Goanna, Ec = p.SafariMobile || p.iOSWebView, md = p.OperaMini && p.UCWEB;
  x || xa || (new bb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var nd = 5.5 > x, Fc = u.scripts, od = (xa ? "ie5mac" : 5.5 > x ? "ie5win" : 6 > x ? "ie55" : 10 > x ? "ie" + (x | 0) : "modern") + ".css";
  var na = Fc[Fc.length - 1].src.split("/");
  --na.length;
  var Gc = na.join("/");
  0 <= "http: https:".indexOf(na[0]) && na.splice(0, 3);
  na = na.join("/");
  var da = function(a) {
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
  var Ib, Jb = [];
  ma.push(function() {
    ya(function() {
      (Ib = m.logger || u.all.logger) || alert("#logger not found!");
      for (Ib ? r = function(a) {
        K(Ib, "P", null, null, a);
      } : m.console && (r = console.log); Jb.length;) {
        r(Jb.shift());
      }
    });
  });
  r = function(a) {
    Jb.push(a);
  };
  var Fa = [], pd = 0, ka;
  if (5 > x || xa) {
    m._wdb_onlooptimer = Ea, Ea = "_wdb_onlooptimer()";
  }
  var Hc = function(a) {
    Fa.length || (ka = setInterval(Ea, 999));
    Fa.push({f:a, uid:++pd});
  };
  ma.push(function() {
    Ec && Ic(Tc);
    ab(Tb);
  });
  var R = [], Jc = 0, ba;
  if (5 > x || xa) {
    m._wdb_ontimer = oa, oa = "_wdb_ontimer()";
  }
  var y = function(a, b) {
    R.length || (ba = cb(oa, 64));
    R.push({f:a, p:b, uid:++Jc, t:new aa - 0 + 64});
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
  ma.push(function() {
    Ec && Ic(Uc);
    ab(Ub);
  });
  var pa = [], za = m.matchMedia, Ha;
  pa.push(function() {
    Ha = K(S, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden", color:"#123456"});
  });
  var Lc = [], hb = m.onload, Mc = m.onunload;
  onload = gb;
  onunload = function(a) {
    var b;
    Mc && (b = Mc(a));
    O(Lc, a);
    onunload = Ga;
    return b;
  };
  var ya = function(a) {
    pa.push(a);
  };
  var ab = function(a) {
    Lc.push(a);
  };
  var Xb = [], Wb;
  ya(function() {
    Vb();
    Hc(Vb);
  });
  var Kb = function(a) {
    Xb.push(a);
  };
  var Zb = [], Yb = !1;
  10 <= x || ld ? (za("(-ms-high-contrast:active)").addListener(function(a) {
    O(Zb, a.matches);
  }), la = null) : 10 > x || (p.Win32 || p.Win64) && (44 <= Cc || Dc) ? ya(function() {
    60 > Cc || Dc ? la() : la() && Hc(la);
    la = null;
  }) : la = null;
  var qd = [];
  za && za("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    O(qd, a.matches);
  });
  var Lb = [];
  m.onbeforeprint ? (onbeforeprint = function() {
    O(Lb, !0);
  }, onafterprint = function() {
    O(Lb, !1);
  }, ab(function() {
    onbeforeprint = onafterprint = Ga;
  })) : za && za("print").addListener(function(a) {
    O(Lb, a.matches);
  });
  var Nc = [], Mb = m.onscroll;
  onscroll = function(a) {
    var b;
    Mb && (b = Mb(a));
    gb || O(Nc);
    return b;
  };
  ab(function() {
    onscroll = Mb = Ga;
  });
  var Ic = function(a) {
    Nc.push(a);
  };
  var Oc = Ia("html")[0];
  var qa = Ia("head")[0];
  var Ka;
  pa.splice(0, 0, function() {
    function a(c) {
      c = c.childNodes;
      for (var g = c.length, f, h, k, l, n; f = c[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && M(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (nd ? (k = f.sheet || f.styleSheet) && (l = 10 <= x ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new bb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  M(f);
                  break;
                }
              case "LINK":
                $b && !qa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (n = d.length; n;) {
                  if (0 === h.indexOf(d[--n])) {
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
        k = e.pop(), qa.appendChild(k);
      }
    }
    var b = !(8 > $a || 5 > x || xa), d = ["og:", "twitter:", "fb:"], e = [];
    a(Oc);
  });
  var jb = {}, dc = {}, Pc, Nb;
  da(Z.transform) || da(Z["-o-transform"]) || da(Z["-ms-transform"]) || da(Z["-moz-transform"]) || da(Z["-webkit-transform"]);
  Kb(function(a) {
    a && !da(Nb) && (a = K(S, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), Nb = !!a.offsetWidth, M(a));
  });
  var ra;
  9 > x && ya(function(a) {
    a = K(S, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Pc = 1 < a.offsetHeight;
    a.style.cssText = "";
    M(a);
  });
  var Xc = function() {
    function a() {
      f || (d.complete ? (f = !0, d.width || y(b, !1)) : e = y(a));
    }
    var b = Yc, d = new Image, e, f;
    d.onerror = function() {
      (!x || 11 === x || 11 === p.IEHost) && d.width || f || (f = !0, e && Kc(e), e = y(b, !1));
    };
    d.onload = function() {
      f = !0;
      e && Kc(e);
      $a && !d.complete ? e = y(b, !1) : y(b, !0);
    };
    d.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > $a && d.complete ? y(b, !0) : e = y(a);
  };
  var ec = "bad_" + (new aa - 0) + "_";
  var Wc = cc;
  for (p.IEHost && 5.5 > x && ya(function() {
    var a = u.createElement("link");
    qa.appendChild(a);
    a.setAttribute("href", (Gc ? Gc + "/" : "") + od);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); ma.length;) {
    ma.shift()();
  }
  ma = null;
  var Qc = Qc || {}, E = String.fromCharCode, A = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", E(960), ")", "(", E(234), E(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", E(9824), "\u2190", E(9829), E(9830), E(9827), E(956), "\u03a9", "\u2193", "\u2192", "%", E(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", E(9619)], Na = [], nb, ob, Ba = 8 > $a && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}}, Rc;
  Kb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      Ja(a, "pbTipPos" + b.toUpperCase());
      K(a, "div", {className:"pbTip" + c}, {width:e.length + f + "em"}, e);
      K(a, "div", {className:"pbTail" + c});
      h && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (m && t) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", k = f.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var h = "_";
        } else {
          h = c, 3 === h.length && (h = h.substr(0, 2)), h = Aa[parseInt(h, 16)] || "~";
        }
        g = g.split(" ")[0];
        k = k.split(" ")[0];
        var n = 10 - z(k);
        Ba && k ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, k, a.innerHTML), b && e(a, c, n, h), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + c + " pbAlp" + n + " pbCsr" + g]}, Ka = 1, l = K(a, "b", b, 0, h), d(a), d(l)) : d(a);
      }
    }
    function d(a) {
      r || g || ca(a, "pbChrCS") && Na.push(a);
    }
    function e(a, b, c, d) {
      b = Ba[b + (v ? "a" : "")] || Ba[b];
      b.top += "px";
      a = K(a, "img", {title:d, src:A + "pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Na.push(a);
    }
    if (a && !Rc) {
      Rc = !0;
      var f = 6 > x ? 1 : 0;
      a = Ia("SAMP");
      var g = 9 > x, h = 5 <= x && 6 > x, k, l, p, q;
      Pc && Ja(S, "pbLCD-AX");
      if (a.length) {
        var m = Nb, r = void 0 !== Z.opacity || void 0 !== Z["-moz-opacity"] || void 0 !== Z["-khtml-opacity"], t = !r && !g && !Ba, u = !m || t || Ba;
        for (p = -1; k = a[++p];) {
          if (ca(k.parentElement || k.parentNode, "pbLCD")) {
            var v = ca(k, "PB-120") || ca(k, "FX-795P"), y = k.children;
            for (k = y.length; k;) {
              var w = y[--k];
              switch(w.tagName.toUpperCase()) {
                case "A":
                  if (u) {
                    for (m || b(w), q = w.children.length; q;) {
                      c(w.children[--q]);
                    }
                  }
                  md ? w.setAttribute("href", "javascript:void(0)") : w.onclick = Vc;
                  break;
                case "B":
                  u && c(w);
              }
            }
          }
        }
        Na.length ? (setInterval(fc, 500), La([".pbChrCS", "background-position:0 -51px"])) : fc = null;
        t && La([".pbAlp1" + (m ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2" + (m ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3" + (m ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4" + (m ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        A + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + A + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + A + "pbLCD/x3_a90.png)"]);
      }
    }
  });
  525.13 > p.WebKit && (Oc.onclick = function(a) {
    if (ob) {
      return ob = !1, a.preventDefault(), !1;
    }
  });
  var sb = Aa[7], hc = Aa[30], $c = Aa[113], Pa = E(8337) + E(8331), tb = E(160), dd = E(8194), bd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), cd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), ad = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + hc + Aa[31]).split(""), V = 
  [], qb = [], Qa, rb;
  Kb(function(a) {
    if (a && !rb) {
      var b = u.all || Ia("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        ca(c, "pbList") ? Ra(c) : ca(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ra(c, !0);
      }
      V.length && (r("[pbList] " + V.length + " elements found. WebFont test start."), Oa());
      rb = !0;
    }
  });
  Qc.prettify = Ra;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

