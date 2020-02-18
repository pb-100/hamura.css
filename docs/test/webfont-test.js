PB100 = {};
(function(Kd, l, n, fd, x, X, $b, A, ac, bc, Ld, ib, gd, Y, Md) {
  function jb(d, q) {
    var a = A(d.split(q)[1]);
    return 0 <= a ? a : 0;
  }
  function g(d, a) {
    return 0 <= d.indexOf(a);
  }
  function Ka(d, a) {
    for (var q in a) {
      if (q === d) {
        return !0;
      }
    }
  }
  function c(d, a) {
    var q = "", b = -1, c;
    if (d = d.split(a)[1]) {
      for (; c = d.charCodeAt(++b);) {
        if (48 <= c && 57 >= c || 46 === c) {
          q += d.charAt(b);
        } else {
          break;
        }
      }
      for (b = q.length; b;) {
        if (46 === q.charCodeAt(--b)) {
          q = q.substr(0, b);
        } else {
          break;
        }
      }
    }
    return q;
  }
  function dc(d, a) {
    var q = 0, b;
    d = d.split(".");
    a = a.split(".");
    for (b = Math.min(d.length, a.length); q < b; ++q) {
      var c = A(d[q]), e = A(a[q]);
      if (c !== e) {
        return c > e ? 1 : -1;
      }
    }
    return d.length === a.length ? 0 : d.length > a.length ? 1 : -1;
  }
  function ec() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > dc(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function La(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Ma(d) {
    return d === d + "" ? A(d) : d;
  }
  function t() {
  }
  function Na() {
    for (var d, a = 0; a < Oa.length; ++a) {
      d = Oa[a], d.f();
    }
  }
  function hd() {
    oa && (fc(), oa = setInterval(Na, 999));
  }
  function fc() {
    oa && (oa = clearInterval(oa));
  }
  function wa() {
    for (var d, a = 0, b = new Y - 0; a < U.length;) {
      b < U[0].t ? ++a : (d = U.splice(a, 1)[0], d.f(d.p));
    }
    ha = U.length ? ib(wa, 64) : 0;
  }
  function id() {
    ha && (gc(), ha = ib(wa, 64));
  }
  function gc() {
    ha && (ha = gd(ha));
  }
  function M(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function mb(d) {
    var a;
    nb && (a = nb(d));
    M(xa, d);
    onload = Pa;
    xa = mb = nb = onload = null;
    return a;
  }
  function hc() {
    var d = 9 === pa.offsetWidth;
    ic !== d && M(jc, ic = d);
  }
  function qa() {
    function d(d) {
      return "#ffffff" === d || "rgb(255,255,255)" === d;
    }
    var a = x.defaultView, b = ob, c = a ? a.getComputedStyle(pa, null) : pa.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return ya = "#123456" !== a && "rgb(18,52,86)" !== a, pb = ("#000000" === a || "rgb(0,0,0)" === a) && d(c), qb = d(a) && ("#000000" === c || "rgb(0,0,0)" === c), b !== Qa() && M(za, ob), !0;
    }
  }
  function Qa() {
    return ob = ya ? qb ? 2 : pb ? 3 : 1 : 0;
  }
  function Ra(d) {
    var a = a || x;
    return kc ? a.getElementsByTagName(d) : a.all.j(d.toUpperCase());
  }
  function P(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function rb(d, a) {
    var b = x.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function N(d, a, b, c, e) {
    function q(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            Z(d, a[b]);
            break;
          default:
            d.setAttribute(b, a[b]);
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
      a = rb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = rb(a);
    }
    Sa ? (2 === Sa && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Sa = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(x.createTextNode(e));
    return a;
  }
  function lc(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function ra(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function Z(d, a) {
    var b;
    if (!ra(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function Ta(a) {
    if (ra(B, a)) {
      var d = B.className.split(" ");
      d.splice(d.indexOf(a), 1);
      B.className = d.join(" ");
    }
  }
  function mc(a) {
    a = N(Aa, "style", {type:"text/css", media:"all"}, 0, a);
    sb = a.sheet || a.styleSheet;
  }
  function sa(a) {
    for (var d = sb, b, c, e = "", f; a.length;) {
      b = a.shift(), c = a.shift(), f = b + "{" + c + "}", d ? d.addRule ? d.addRule(b, c) : d.insertRule && d.insertRule(f, d.cssRules.length) : e += f;
    }
    e && mc(e);
  }
  function nc(a) {
    if (aa(Ba)) {
      t("[dataUriTest] already done : " + Ba), y(a, Ba);
    } else {
      if (8 > v) {
        t("[dataUriTest] trident < 8 : false"), y(a, !1);
      } else {
        t("[dataUriTest] start!");
        var d = new Image;
        d.onerror = function() {
          t("[dataUriTest] no DATA URI!");
          a(Ba = !1);
        };
        d.onload = function() {
          t("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          a(Ba = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function oc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      t("[webFontTest] testByNativeFontLoaderAPI start.");
      x.fonts.load(d).then(function(c) {
        t("[webFontTest] fonts.check() : " + x.fonts.check(d, "i") + ", fonts.length : " + c.length);
        kb(b) ? y(a, u) : (t("[webFontTest] mesureWebFont() : false"), h(!0));
      }, function(a) {
        t("[webFontTest] fonts.load() rejected! " + a);
        nc(cc);
      });
    }
    function q(a) {
      return x.hidden || x.msHidden || x.mozHidden || x.webkitHidden ? (r = new Y - 0, !1) : a < new Y - r;
    }
    function h(d) {
      d && (t("[webFontTest] testWebFont start."), r = new Y - 0);
      kb(b) ? (t("[webFontTest] testWebFont mesurement success : " + u), a(u)) : q(p) ? (t("[webFontTest] testWebFont timeout!"), D ? a(0) : 9 > v ? y(a, 0) : nc(cc)) : y(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      lb = ["sans-serif", "serif"];
      O = N(B, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (w = {}; d = lb[++a];) {
        O.style.fontFamily = d, w[d] = O.offsetWidth;
      }
    }
    function kb(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (B.appendChild(O); c = lb[++b];) {
        if (O.style.fontFamily = '"' + a + '",' + c, O.offsetWidth !== w[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (O.innerHTML = e, a = O.offsetWidth, O.innerHTML = f[e], q = a === O.offsetWidth ? 1 : 0, O.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      P(O);
      return u = d + q;
    }
    function cc(d) {
      t("[webFontTest] testDataUriComplete : " + d);
      (D = d) ? n(!0) : a(0);
    }
    function n(d) {
      d && (r = new Y - 0);
      for (b in c) {
        if (kb(b)) {
          t("[webFontTest] success! " + b);
          Ua = N(B, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = sb, f = pc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : mc('@import "' + d + '"');
          pc.all = ++f;
          y(m, !0);
        } else {
          q(100) ? (t("[webFontTest] timeout! " + b), delete c[b], y(n, !0)) : y(n);
        }
        return;
      }
      a(0);
    }
    function m(d) {
      d && (t("[webFontTest] testImportedCssReady start!"), b = b.replace(jd, ""), t("[webFontTest] targetWebFontName : " + b), r = new Y - 0);
      1 < Ua.offsetWidth ? (t("[webFontTest] testImportedCssReady ended."), P(Ua), p = 100, y(h, !0)) : q(p) ? (t("[webFontTest] testImportedCssReady timeout!"), P(Ua), a(0)) : y(m);
    }
    var p = g || 5000, r, D, O, Ua, lb, w, u;
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > v) {
        return !0;
      }
      var d = N(Aa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      P(d);
      return a;
    })() ? (t("[webFontTest] maybeCanWebFont() : true"), !x.fonts || 603 > Va ? (t("[webFontTest] No native font loader."), h(!0)) : (t("[webFontTest] Use Native font loader."), d())) : (t("[webFontTest] maybeCanWebFont() : false"), y(a, 0));
  }
  function qc() {
    tb = !tb;
    for (var a = -1, b; b = ub[++a];) {
      b.style.visibility = tb ? "" : "hidden";
    }
  }
  function kd(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), vb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Wa() {
    Wa = null;
    ld(wb, "PB-100", {"PB-100_canTTF":w + "pbFont/ttf.css", "PB-100_canWOFF":w + "pbFont/woff.css", "PB-100_canEOT":w + "pbFont/eot.css", "PB-100_canSVG":w + "pbFont/svg.css"}, "pbFont-testCssReady", {i:Xa}, 5000);
  }
  function wb(a) {
    Ca = a;
    t("[pbList] WebFont test result : " + !!a);
    Ca ? xb() : Da ? rc(!0) : aa(Da) ? xb() : md();
  }
  function rc(a) {
    a && (t("[pbList] Fallback start!"), Z(B, "pbList-noWebFont"), Q ? sa([".pbList font:after", "content:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]) : sa([".pbList font", "background-image:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    xb();
  }
  function xb() {
    for (wb = oc = null; ba.length;) {
      Ya(ba.shift(), yb.shift());
    }
    t("[pbList] complete.");
  }
  function Ya(a, b) {
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
    if (wb) {
      -1 === ba.indexOf(a) && (ba.push(a), yb.push(b), zb && Wa && Wa());
    } else {
      var e = ba.indexOf(a);
      0 <= e && ba.splice(e, 1) && yb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Ca && (e = e.split(Xa).join(sc)), b ? a.data = e : nd(e.split("\r").join("").split("&yen;").join(od).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ab).split("&amp;").join("&"), a);
      }
    }
  }
  function nd(a, b) {
    function d(a, d) {
      for (var b = ""; d;) {
        d & 1 && (b += a), d >>= 1, a += a;
      }
      return b;
    }
    function c(a, b, c) {
      for (var e, f = -1, g, q; e = b[++f];) {
        for (; 0 <= (g = a.indexOf(e));) {
          q = e.length, a = a.substr(0, g) + d(c, q) + a.substr(g + q);
        }
      }
      return a;
    }
    function e(a) {
      var d = A(a), b = "" + d;
      return 0 < d && d === d | 0 && (d = a.indexOf(b) + b.length, d <= a.length) ? d : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), q = [], g = "", h = -1, k, l;
    if (function(a) {
      var d = a.indexOf("P");
      if (-1 === d) {
        return !1;
      }
      d = A(a.charAt(d + 1));
      return 0 <= d && 9 >= d;
    }(a)) {
      g = d("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (g = d("|", h), --h); l = a.charAt(++h);) {
        l === Ab || k ? (g += "~", l === Ab && (k = !k)) : g += l;
      }
      g = c(g, pd, "^");
      g = c(g, qd, "{");
      g = c(g, rd, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var n = l === Bb, m = " " === l;
      l = n ? " " : l;
      var p = g.charAt(h), r = t, t = "|" === p;
      p = f["+|~{}^".indexOf(p) + 1];
      if ("\n" !== l) {
        if (Ca || !Da) {
          8 > v && m && (l = h === k - 1 ? Bb : sd), 2 === Ca && a.substr(h, 2) === Xa && (l = Xa, ++h), m = m && "str" === p ? ' class="pbList-strsp"' : n ? "" : !m && p ? ' class="pbList-' + p + '"' : "";
        } else {
          var D = ia.indexOf(l);
          D = -1 === D ? "" : ia.indexOf(l).toString(16).toUpperCase();
          D = (D = 1 === D.length ? "0" + D : D) ? "pbChr" + D : "";
          m = m && "str" === p ? ' class="pbList-strsp"' : m || !D ? "" : p ? ' class="' + (D ? D + " " : "") + "pbList-" + p + '"' : ' class="' + D + '"';
        }
        r && n && (Va || Za) && (l = Bb);
        q.push("<font" + m + ">" + l + "</font>");
      } else {
        q.push(l);
      }
    }
    q = q.join("");
    if (1 === b.nodeType) {
      b.innerHTML = q;
    } else {
      for (f = rb("font", q); q = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(q, b);
      }
      P(b);
    }
  }
  var m, p, a = X.userAgent, u = X.appVersion, Cb = A(u) | 0, r = X.platform, Db = x.documentElement, tc = Db && Db.style, Eb = x.documentMode, Fb = $b.width, Gb = $b.height, uc = n.HTMLAudioElement, vc = n.performance, wc = n.Int8Array, td = void 0 !== n.ontouchstart, V = c(u, "Version/") || c(a, "Version/"), ja = void 0 !== tc.MozAppearance, xc = n.operamini, $a = g(a, "UCWEB"), ud = $a && c(a, " U2/"), vd = $a && c(a, "; wds "), Hb = c(a.split("_").join("."), "; iPh OS "), wd = c(a, "; Adr "), 
  yc = g(u, "YJApp-ANDROID"), R = g(r, "Android") || ja && g(u, "Android") || yc, F = c(r, "Android ") || c(u, "Android ") || c(a, "Android ") || wd, Ib = g(r, "Linux"), Jb = "MacIntel" === r && void 0 !== X.standalone, ka = !xc && n.opera, zc = ka && (ka.version && "function" === typeof ka.version ? ka.version() : ec(c(a, "Opera "), V, "" + Cb)), Ac = n.opr, Ea = !ka && (x.all || Eb), I = Ea && (Eb ? Eb : n.h ? x.getElementsByTagName ? 7 : 4 : x.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 
  5 : 4), ab = !Ea && Db.msContentZoomFactor, la = !ab && n.chrome, Kb = ja && c(a, "Goanna/"), S = !Kb && ja && c(a, "rv:"), Bc = c(a, "Firefox/"), Cc = c(a, "Opera/"), xd = c(a, "Focus/"), Dc = n.FNRBrowser, z = jb(a, "AppleWebKit/"), ca = c(a, "Chrome/"), Lb = c(a, "OPR/"), yd = c(u, "KHTML/"), Ec = c(a.toLowerCase(), "iris"), Mb = c(a, "FxiOS/"), zd = c(a, "CriOS/"), Ad = c(a, "EdgiOS/"), ma = jb(a, "SamsungBrowser/"), Fa;
  if (Fa = !ma) {
    a: {
      for (var Fc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      bb, Nb = Fc.length; bb = Fc[--Nb];) {
        if (g(a, bb)) {
          Fa = 2 > A(V) ? V : 0.9;
          break a;
        }
      }
      var Gc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Nb = Gc.length; bb = Gc[--Nb];) {
        if (g(a, bb)) {
          Fa = V;
          break a;
        }
      }
      Fa = void 0;
    }
  }
  var Hc = Fa, Ic = la && 534.3 >= z, Jc = td && (z || ja) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !F && yc, Kc = n.puffinDevice, cb = Kc && Kc.clientInfo, Ga = cb && "iOS" === cb.os && cb.osVersion, db = Ga && cb.model, Ob = !I && x.registerElement, Bd = !I && x.execCommand, Lc = Ib && Ob && "11.0.696.34" === ca, da, J, b, Ha, Pb, eb, Mc, Nc, Oc;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = Cc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === Fb && 240 === Gb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = c(a, "Version/");
          z = 535;
          var Cd = h;
        } else {
          if ("Nintendo Swicth" === r) {
            k = "Swicth", h = c(u, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              k = "WiiU", h = c(u, "NintendoBrowser/"), z = c(u, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === r) {
                k = "Wii";
                h = c(a, "Wii; U; ; ");
                var e = k;
                var f = h;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  k = "PSVita", h = b, e = k, f = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    k = "PSP";
                    h = b;
                    var Pc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > dc("4.10", b) && (m = "Sony", p = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Cb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            Pc = 3.4;
                            e = k;
                            f = 2;
                            var fb = !0;
                          } else {
                            if (0 === r.indexOf("iP") || Hb || Ga || Jb) {
                              if (Ga) {
                                switch(h = Ga, db.substr(0, 4)) {
                                  case "iPho":
                                    var K = "iPhone";
                                    var ea = A(db.substr(6));
                                    var L = !0;
                                    break;
                                  case "iPad":
                                    K = "iPad";
                                    ea = A(db.substr(4));
                                    var E = !0;
                                    break;
                                  case "iPod":
                                    K = "iPod";
                                    ea = A(db.substr(4));
                                    var Qc = !0;
                                }
                              } else {
                                Hb ? h = Hb : (h = c(u.split("_").join("."), "OS "), Mc = !Ka("isSecureContext", n), Nc = Ka("enableWebGL", n), Oc = Ka("sameOrigin", n));
                                h || (J = !0);
                                if (!h || Dc) {
                                  h = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : X.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : ac.isNaN ? 9.2 : n.SharedWorker ? vc && vc.now ? 8.0 : 8.4 : Bd ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : wc ? 4.3 : uc ? 4.1 : 3.2;
                                }
                                var Qb = 1 === n.devicePixelRatio;
                                var C = Fb === 1.5 * Gb || 1.5 * Fb === Gb;
                                0 === r.indexOf("iPhone") ? (K = "iPhone", ea = C ? Qb ? {max:3} : {min:4, max:5} : {max:6}, L = !0) : 0 === r.indexOf("iPad") || Jb ? (K = "iPad", ea = Qb ? {max:2} : {min:3}, E = !0) : 0 === r.indexOf("iPod") && (K = "iPod", ea = C ? Qb ? {max:3} : 4 : {min:5}, Qc = !0);
                              }
                              !Ga && (X.standalone || (E || 12 > h) && Ka("webkitFullscreenEnabled", x) || 11 <= h && 13 > h && X.mediaDevices) ? (m = "SafariMobile", e = "Safari", f = h) : (eb = !0, m = "iOSWebView");
                              k = "iOS";
                              p = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", m = "AOSP", p = 2.2, e = m, f = p, R = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", m = "AOSP", p = 2.2, e = m, f = p;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > S ? "1.0.1" : 19 > S ? 1.1 : 27 > S ? 1.2 : 29 > S ? 1.3 : 31 > S ? 1.4 : 33 > S ? 2.0 : 35 > S ? 2.1 : 38 > S ? 2.2 : 45 > S ? 2.5 : 2.6, g(a, "Mobile") ? L = !0 : g(a, "Tablet") && (E = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (L = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ma, m = e, p = f, L = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(u, "Windows Phone OS ") || vd) {
                                            var gb = !0;
                                            h = b;
                                            L = !0;
                                          } else {
                                            if (ab && "ARM" === r) {
                                              gb = !0, h = 10, J = L = !0;
                                            } else {
                                              if (Ea && g(u, "ZuneWP")) {
                                                gb = !0, h = 11 === I ? 8.1 : 10 === I ? 8 : 9 === I ? 7.5 : 7 === I ? 7 : "?", J = L = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", L = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", L = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var W = !0;
                                                      h = 6.3;
                                                      var G = E = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        W = !0, h = 6, G = E = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          W = !0, h = 5, G = E = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            W = !0, h = 5, G = E = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              W = !0, h = 5 <= A(F) ? 5 : 4, G = E = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                W = !0, h = 3, G = E = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  W = !0, h = 2, G = E = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    W = !0, h = 1, G = E = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, m = "AOSP", p = 2.2, e = m, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        W = !0, h = F, G = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Ec) {
                                                                              k = "WindowsMobile", fb = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                k = r, fb = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Rc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = V, L = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : R && ja ? (g(a, "Android 4.4;") ? C = {min:2.3} : 4 <= A(F) ? C = F : C = {min:2.2}, h = C, Jc && (J = !0)) : R && ka ? (F ? C = F : (C = {min:1.6}, J = !0), h = C, g(a, "Tablet") ? E = !0 : 
                                                                                    L = !0) : F ? (h = F, R = !0) : Ib && Jc ? (da = !0, ma ? C = {min:4.4} : la && !Ic || Ac || Lb ? C = {min:4} : (C = F = void 0 !== tc.touchAction ? {min:5} : Ob ? 4.4 : wc ? X.connection ? n.searchBoxJavaBridge_ || la ? ac.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= z ? 3 : 533 <= z ? uc ? 2.3 : 2.2 : 530 <= z ? 2.0 : 1.5, Hc && (m = "Samsung", p = Hc)), h = C, R = !0) : Lc ? (h = {min:5}, da = R = !0) : Ib && (g(a, "Ubuntu") ? 
                                                                                    k = "Ubuntu" : (b = c(a, "Mint/")) ? (k = "Mint", h = b) : (b = c(a, "Fedora/")) ? (k = "Fedora", h = b) : k = g(a, "Gentoo") ? "Gentoo" : "Linux");
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
  W && (k = "FireOS");
  R && (k = k || "Android");
  gb && (k = "WindowsPhone");
  m || (G = G || R, ka ? (m = G || fb || L || E ? "PrestoMobile" : "Presto", p = zc) : Ea ? ((C = jb(u, "Trident/") + 4) && C !== I && (e = "IEHost", f = C), 10 <= I && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = I), fb || L || E || Qc ? m = "TridentMobile" : Rc && 5 <= I ? (m = "Tasman", e = "MacIE", f = I) : (m = "Trident", Rc && (e = "MacIE", f = I)), p = I) : ab ? (m = gb ? "EdgeMobile" : "EdgeHTML", p = c(u, "Edge/")) : Kb ? (m = "Goanna", p = 
  Kb) : ja ? (m = G ? "Fennec" : "Gecko", p = S || Bc) : ma ? (m = "Samsung", p = ma, da && (J = !0)) : (b = Pc || c(a, "NetFront/")) ? (m = "NetFront", p = b) : (b = c(a, "iCab")) ? (m = "iCab", p = b) : (b = ec(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || xc && V) ? (m = "OperaMini", p = b, k || (g(a, "iPhone") ? K = "iPhone" : g(a, "iPad") ? K = "iPad" : g(a, "iPod") && (K = "iPod"), K && (k = "iOS"))) : $a ? (m = "UCWEB", p = ud) : yd ? (m = "KHTML", p = Cb) : R && Ic ? (m = "AOSP", p = F, Ha = 
  !0, da && (J = !0)) : la || Ac || Lb ? (m = G ? "ChromiumMobile" : "Chromium", p = ca, da && (J = !0)) : R && Ob ? (m = "ChromeWebView", p = 5 > A(F) ? F : ca, Ha = !0, n.requestFileSystem || n.webkitRequestFileSystem || (Pb = !0), da && (J = !0)) : R && (V || da) ? (m = "AOSP", p = F, Ha = !0, da && (J = !0)) : ca ? (m = G ? "ChromiumMobile" : "Chromium", p = ca) : z && (m = "WebKit", p = z));
  e || ((b = ab && c(a, "Edge/") || c(a, "EdgA/") || Ad || c(a, "Edg/")) ? (e = "Edge", f = b) : (b = c(u, "Coast/")) ? (e = "Coast", f = b) : Mc ? e = "OperaTurbo" : (b = c(u, "OPT/")) ? (e = "OperaTouch", f = b, J = J || !g(u, "Mobile/")) : (b = c(a.toLowerCase(), "ybrowser/")) ? (e = "Yahoo", f = b) : !$a && (b = c(a, "UCBrowser/")) ? (e = "UC", f = b) : (b = c(a, "SilK/")) ? (e = "Silk", f = b) : (b = c(a, "Vivaldi/")) ? (e = "Vivaldi", f = b) : (b = c(a, "QQBrowser/")) ? (e = "QQ", f = b) : 
  (b = c(a, "YaBrowser/")) ? (e = "Yandex", f = b) : (b = c(a, "coc_coc_browser/")) ? (e = "coccoc", f = b) : (b = c(a, "Camino/")) ? (e = "Camino", f = b) : g(a, "SE 2.X MetaSr 1.0") ? e = "Sogou" : (b = xd || c(a, "Klar/") || 9 > A(Mb) && eb && 11 <= A(h) && Mb) ? (e = "Focus", f = b) : (b = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ")) ? (e = "AOL", f = b) : (b = c(a, "IceDragon/")) ? (e = "IceDragon", f = b) : (b = c(a, "Iceweasel/")) ? (e = "Iceweasel", f = b) : (b = c(a, "TenFourFox/")) ? 
  (e = "ITenFourFox", f = b) : (b = c(a, "Waterfox/")) ? (e = "Waterfox", f = b) : (b = c(a, "GNUzilla/")) ? (e = "GNUzilla", f = b) : (b = c(a, "SeaMonkey/")) ? (e = "SeaMonkey", f = b) : (b = c(a, "PaleMoon/")) ? (e = "PaleMoon", f = b) : (b = c(a, "Basilisk/")) ? (e = "Basilisk", f = b) : (b = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/")) || g(a, "Maxthon") ? (e = "Maxthon", f = b || 1) : g(a, "Avant Browser;") ? e = "Avant" : (b = c(a, "Lunascape/")) ? (e = "Lunascape", f = b) : (b = 
  c(a, "Konqueror/")) ? (e = "Konqueror", f = b) : (b = c(a, "Midori/")) ? (e = "Midori", f = b) : (b = c(a, "OmniWeb/")) ? (e = "OmniWeb", f = b) : (b = c(a, "Roccat/")) ? (e = "Roccat", f = b) : (b = c(a, "Epiphany/")) ? (e = "Epiphany", f = b) : (b = c(a, "WebPositive/")) ? (e = "WebPositive", f = b) : (b = c(a, "Iron/")) || g(a, " Iron ") ? (e = "Iron", f = b || la && ca) : (b = c(a, "Comodo Dragon/")) ? (e = "ComodoDragon", f = b) : (b = c(a, "Brave/")) || g(a, " Brave ") || Oc ? (e = "Brave", 
  f = b || la && ca) : (b = c(a, "Rockmelt/")) ? (e = "Rockmelt", f = b) : (b = c(a, "Sleipnir/")) || Dc ? (e = "Sleipnir", b && (f = b)) : Nc ? e = "Dolphin" : (b = c(a, "Puffin/")) ? (e = "Puffin", f = b) : (b = c(a, "Dooble/")) ? (e = "Dooble", f = b) : (b = c(a, "Flock/")) ? (e = "Flock", f = b) : (b = c(a, "Galeon/")) ? (e = "Galeon", f = b) : (b = c(a, "Falkon/")) ? (e = "Falkon", f = b) : (b = c(a, "Iceape/")) ? (e = "Iceape", f = b) : (b = c(a, "K-Meleon/")) ? (e = "KMeleon", f = b) : (b = 
  Cd || c(u, "NX/")) ? (e = "NetFrontNX", f = b) : (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) ? (e = "NN", f = b) : Ec ? (e = "Iris", f = b) : g(u, "FBAN/") ? e = "Facebook" : (b = c(u, "Line/")) ? (e = "LINE", f = b) : (b = c(a, "QtWebEngine/")) ? (e = "QtWebEngine", f = b) : (b = c(a, "QtWebKit/")) ? (e = "QtWebKit", f = b) : (b = Mb || ja && (Bc || p)) ? (e = "Firefox", f = b) : (b = zc || Lb || Cc) ? (e = "Opera", f = b) : Ea ? (e = "IE", f = p) : ma ? (e = m, f = ma) : 
  (b = zd || (la || Lc && Ha) && ca) ? (e = "Chrome", f = b) : Ha && !Pb ? (e = m, f = p) : eb && !E ? (m = "SafariMobile", e = "Safari", f = h) : eb || Pb || !g(a, "Safari") && !V || (e = "Safari", f = V || (73 > z ? 0.8 : 85 > z ? 0.9 : 100 > z ? 1 : 125 > z ? 1.1 : 312 > z ? 1.2 : 412 > z ? 1.3 : 419.3 >= z ? 2 : 525.13 >= z ? 3 : 525.25 >= z ? 3.1 : 3.2)), e = e || "unknown");
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = La(h), l[k] = Ma(h)) : l[k] = !0);
  m && (l.ENGINE = m, p ? (l.ENGINE_VERSION = La(p), l[m] = Ma(p)) : l[m] = !0, e || (e = m, f = p));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = La(f), l[e] = Ma(f)) : l[e] = !0);
  K && (l.DEVICE = K, ea ? (l.DEVICE_VERSION = La(ea), l[K] = Ma(ea)) : l[K] = !0);
  if (J || Jb) {
    l.PC_MODE = !0;
  }
  var Pa = fd, ta = [], kc = !!x.getElementsByTagName, B = x.body, fa = B.style, v = l.Trident || l.TridentMobile, Ia = l.Tasman, Sc = l.EdgeHTML || l.EdgeMobile, Rb = l.Presto || l.PrestoMobile, Sb = l.Gecko, Tb = l.Goanna, Va = l.WebKit, Za = l.SafariMobile || l.iOSWebView, Dd = l.OperaMini && l.UCWEB;
  v || Ia || (new bc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Ed = 5.5 > v, Tc = x.scripts, Fd = (Ia ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : "modern") + ".css", Uc = 0 === location.href.indexOf("https");
  var va = Tc[Tc.length - 1].src.split("/");
  --va.length;
  var Gd = va.join("/");
  0 <= "http: https:".indexOf(va[0]) && va.splice(0, 3);
  va = va.join("/");
  var aa = function(a) {
    return void 0 !== a;
  };
  var T = Array.prototype;
  T.pop || (T.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  T.push || (T.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  T.shift || (T.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  T.splice || (T.splice = function(a, b) {
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
  T.indexOf || (T.indexOf = function(a, b) {
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
  var Ub, Vb = [];
  ta.push(function() {
    Ja(function() {
      (Ub = n.logger || x.all.logger) || alert("#logger not found!");
      for (Ub ? t = function(a) {
        N(Ub, "P", null, null, a);
      } : n.console && (t = console.log); Vb.length;) {
        t(Vb.shift());
      }
    });
  });
  t = function(a) {
    Vb.push(a);
  };
  var Oa = [], Hd = 0, oa;
  if (5 > v || Ia) {
    n._wdb_onlooptimer = Na, Na = "_wdb_onlooptimer()";
  }
  var Vc = function(a) {
    Oa.length || (oa = setInterval(Na, 999));
    Oa.push({f:a, g:++Hd});
  };
  ta.push(function() {
    Za && Wc(hd);
    hb(fc);
  });
  var U = [], Xc = 0, ha;
  if (5 > v || Ia) {
    n._wdb_ontimer = wa, wa = "_wdb_ontimer()";
  }
  var y = function(a, b) {
    U.length || (ha = ib(wa, 64));
    U.push({f:a, p:b, g:++Xc, t:new Y - 0 + 64});
    return Xc;
  };
  var Yc = function(a) {
    for (var b = U.length, d; d = U[--b];) {
      if (d.g === a) {
        U.splice(b, 1);
        break;
      }
    }
  };
  ta.push(function() {
    Za && Wc(id);
    hb(gc);
  });
  var xa = [], ic, ob = 0, na = n.matchMedia, pa;
  xa.push(function() {
    pa = N(B, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Zc = [], nb = n.onload, $c = n.onunload;
  onload = mb;
  onunload = function(a) {
    var b;
    $c && (b = $c(a));
    M(Zc, a);
    onunload = Pa;
    return b;
  };
  var Ja = function(a) {
    xa.push(a);
  };
  var hb = function(a) {
    Zc.push(a);
  };
  var jc = [];
  Ja(function() {
    hc();
    Vc(hc);
  });
  var Wb = function(a) {
    jc.push(a);
  };
  var za = [], ya, pb, qb;
  10 <= v || Sc ? (na("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    ya = pb = a.matches;
    M(za, Qa());
  }), na("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    ya = qb = a.matches;
    M(za, Qa());
  }), na("(-ms-high-contrast:active)").addListener(function(a) {
    ya = a.matches;
    M(za, Qa());
  }), qa = null) : 10 > v || (l.Win32 || l.Win64) && (44 <= Sb || Tb) ? Ja(function() {
    pa.style.color = "#123456";
    pa.style.backgroundColor = "#123456";
    60 > Sb || Tb ? qa() : qa() && Vc(qa);
    qa = null;
  }) : qa = null;
  var Id = [];
  na && na("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    M(Id, a.matches);
  });
  var Xb = [];
  n.onbeforeprint ? (onbeforeprint = function() {
    M(Xb, !0);
  }, onafterprint = function() {
    M(Xb, !1);
  }, hb(function() {
    onbeforeprint = onafterprint = Pa;
  })) : na && na("print").addListener(function(a) {
    M(Xb, a.matches);
  });
  var ad = [], Yb = n.onscroll;
  onscroll = function(a) {
    var b;
    Yb && (b = Yb(a));
    mb || M(ad);
    return b;
  };
  hb(function() {
    onscroll = Yb = Pa;
  });
  var Wc = function(a) {
    ad.push(a);
  };
  var bd = Ra("html")[0];
  var Aa = Ra("head")[0];
  var Sa;
  xa.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && P(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (Ed ? (k = f.sheet || f.styleSheet) && (l = 10 <= v ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new bc("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  P(f);
                  break;
                }
              case "LINK":
                kc && !Aa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === h.indexOf(c[--q])) {
                    P(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (lc(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (lc(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                P(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        k = e.pop(), Aa.appendChild(k);
      }
    }
    var b = !(8 > Rb || 5 > v || Ia), c = ["og:", "twitter:", "fb:"], e = [];
    a(bd);
  });
  var sb = void 0;
  var pc = {}, Zb, Da, Q, Jd = aa(fa.transform) ? "transform" : aa(fa["-o-transform"]) ? "-o-transform" : aa(fa["-ms-transform"]) ? "-ms-transform" : aa(fa["-moz-transform"]) ? "-moz-transform" : aa(fa["-webkit-transform"]) ? "-webkit-transform" : "";
  Q || Wb(function(a) {
    a && !aa(Q) && (Q = 1.8 <= Sb || Tb || 8 <= v || Sc || 530 <= Va || 3.2 <= Za, Q || (a = N(B, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), Q = 6 <= a.offsetWidth, P(a)));
  });
  var Ba;
  9 > v && Ja(function(a) {
    a = N(B, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Zb = 1 < a.offsetHeight;
    a.style.cssText = "";
    P(a);
  });
  var cd = Uc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var md = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || y(b, !1)) : e = y(a));
    }
    var b = rc;
    if (cd) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!v || 11 === v || 11 === l.IEHost) && c.width || f || (f = !0, e && Yc(e), e = y(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Yc(e);
        Rb && !c.complete ? e = y(b, !1) : (Da = !0, y(b, !0));
      };
      c.src = cd;
      8 > Rb && c.complete ? (Da = !0, y(b, !0)) : f || (e = y(a));
    } else {
      t("[imageTest] TEST_IMAGE_URL is undefined!"), y(b, !1);
    }
  };
  var jd = "bad_" + (new Y - 0) + "_";
  var ld = oc;
  for (l.IEHost && 5.5 > v && Ja(function() {
    N(Aa, "link", {href:Gd + "/" + Fd, rel:"stylesheet", type:"text/css"});
  }); ta.length;) {
    ta.shift()();
  }
  ta = null;
  var dd = dd || {}, H = String.fromCharCode, w = Uc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ia = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", H(960), ")", "(", H(234), H(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", H(9824), "\u2190", H(9829), H(9830), H(9827), H(956), "\u03a9", "\u2193", "\u2192", "%", H(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", H(9619)];
  za.push(function(a) {
    Ta("jsHcm");
    Ta("jsHcmWob");
    Ta("jsHcmBow");
    if (a) {
      switch((Jd || 9 === v || 5.5 <= v && 9 > v && Zb) && Z(B, "jsCanRotate"), a) {
        case 1:
          Z(B, "jsHcm");
          break;
        case 2:
          Z(B, "jsHcmWob");
          break;
        case 3:
          Z(B, "jsHcmBow");
      }
    } else {
      Ta("jsCanRotate");
    }
  });
  var ub = [], tb, vb, ed;
  Wb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      Z(a, "pbTipPos" + b.toUpperCase());
      N(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      N(a, "div", {className:"pbTail" + c});
      g && d && (a.focus(), a.blur());
    }
    function d(a) {
      if (Q && n) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", d = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === d) {
          var g = "_";
        } else {
          g = d, 3 === g.length && (g = g.substr(0, 2)), g = ia[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - A(e);
        b ? (b = {className:["pbChr" + d + " pbAlp" + e + " pbCsr" + f]}, Sa = 1, k = N(a, "b", b, 0, g), c(a), c(k)) : c(a);
      }
    }
    function c(a) {
      p || f || ra(a, "pbChrCS") && ub.push(a);
    }
    if (a && !ed) {
      ed = !0;
      var e = 6 > v ? 1 : 0;
      a = Ra("SAMP");
      var f = 9 > v, g = 5 <= v && 6 > v, h, k, l, m;
      Zb && Z(B, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== fa.opacity || void 0 !== fa["-moz-opacity"] || void 0 !== fa["-khtml-opacity"], n = !p && !f && !0, r = !Q || n || void 0;
        for (l = -1; h = a[++l];) {
          if (ra(h.parentElement || h.parentNode, "pbLCD")) {
            var t = h.children;
            for (h = t.length; h;) {
              var u = t[--h];
              switch(u.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (Q || b(u), m = u.children.length; m;) {
                      d(u.children[--m]);
                    }
                  }
                  Dd ? u.setAttribute("href", "javascript:void(0)") : u.onclick = kd;
                  break;
                case "B":
                  r && d(u);
              }
            }
          }
        }
        ub.length ? (setInterval(qc, 500), Q ? sa([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : sa([".pbChrCS", "background-position:0 -51px"])) : qc = null;
        n && (Q ? sa([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + w + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        w + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + w + "pbLCD/x3_a90.png)"]) : sa([".pbAlp1", "background-image:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        w + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + w + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + w + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Va && (bd.onclick = function(a) {
    if (vb) {
      return vb = !1, a.preventDefault(), !1;
    }
  });
  var Ab = ia[7], sc = ia[30], od = ia[113], Xa = H(8337) + H(8331), Bb = H(160), sd = H(8194), qd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), rd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), pd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + sc + ia[31]).split(""), ba = 
  [], yb = [], Ca, zb;
  Wb(function(a) {
    if (a && !zb) {
      var b = x.all || Ra("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        ra(c, "pbList") ? Ya(c) : ra(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ya(c, !0);
      }
      ba.length && (t("[pbList] " + ba.length + " elements found. WebFont test start."), Wa());
      zb = !0;
    }
  });
  dd.prettify = Ya;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

