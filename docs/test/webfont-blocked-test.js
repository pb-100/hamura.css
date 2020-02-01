PB100 = {};
(function(Bd, l, m, u, oa, bc, A, cc, gb, Cd, hb, cd, ea, Dd) {
  function ib(d, a) {
    var q = A(d.split(a)[1]);
    return 0 <= q ? q : 0;
  }
  function g(d, a) {
    return 0 <= d.indexOf(a);
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
  function Ka(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function La(d) {
    return d === d + "" ? A(d) : d;
  }
  function r() {
  }
  function Ma() {
    for (var d, a = 0; a < Na.length; ++a) {
      d = Na[a], d.f();
    }
  }
  function dd() {
    pa && (fc(), pa = setInterval(Ma, 999));
  }
  function fc() {
    pa && (pa = clearInterval(pa));
  }
  function xa() {
    for (var d, a = 0, b = new ea - 0; a < U.length;) {
      b < U[0].t ? ++a : (d = U.splice(a, 1)[0], d.f(d.p));
    }
    fa = U.length ? hb(xa, 64) : 0;
  }
  function ed() {
    fa && (gc(), fa = hb(xa, 64));
  }
  function gc() {
    fa && (fa = cd(fa));
  }
  function M(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function mb(d) {
    var a;
    nb && (a = nb(d));
    M(ya, d);
    onload = Oa;
    ya = mb = nb = onload = null;
    return a;
  }
  function hc() {
    var d = 9 === qa.offsetWidth;
    ic !== d && M(jc, ic = d);
  }
  function ra() {
    function d(d) {
      return "#ffffff" === d || "rgb(255,255,255)" === d;
    }
    var a = u.defaultView, b = ob, c = a ? a.getComputedStyle(qa, null) : qa.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return za = "#123456" !== a && "rgb(18,52,86)" !== a, pb = ("#000000" === a || "rgb(0,0,0)" === a) && d(c), qb = d(a) && ("#000000" === c || "rgb(0,0,0)" === c), b !== Pa() && M(Aa, ob), !0;
    }
  }
  function Pa() {
    return ob = za ? qb ? 2 : pb ? 3 : 1 : 0;
  }
  function Qa(d) {
    var a = a || u;
    return kc ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function O(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function rb(d, a) {
    var b = u.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function P(d, a, b, c, e) {
    function q(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            V(d, a[b]);
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
    Ra ? (2 === Ra && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Ra = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function lc(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function sa(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function V(d, a) {
    var b;
    if (!sa(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function Sa(d) {
    if (sa(B, d)) {
      var a = B.className.split(" ");
      a.splice(a.indexOf(d), 1);
      B.className = a.join(" ");
    }
  }
  function mc(a, b) {
    var d = P(Ba, "style", {type:"text/css", media:b}, 0, a);
    sb[b] = d.sheet || d.styleSheet;
  }
  function ha(a, b) {
    for (var d = b || "all", c = sb[d], q, e, f = "", g; a.length;) {
      q = a.shift(), e = a.shift(), g = q + "{" + e + "}", c ? c.addRule ? c.addRule(q, e) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && mc(f, d);
  }
  function tb(a) {
    if (Y(Ca)) {
      r("[dataUriTest] already done : " + Ca), y(a, Ca);
    } else {
      if (8 > v) {
        r("[dataUriTest] trident < 8 : false"), y(a, !1);
      } else {
        r("[dataUriTest] start!");
        var d = new Image;
        d.onerror = function() {
          r("[dataUriTest] no DATA URI!");
          a(Ca = !1);
        };
        d.onload = function() {
          r("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          a(Ca = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function nc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      r("[webFontTest] testByNativeFontLoaderAPI start.");
      u.fonts.load(d).then(function(c) {
        r("[webFontTest] fonts.check() : " + u.fonts.check(d, "i") + ", fonts.length : " + c.length);
        jb(b) ? y(a, x) : (r("[webFontTest] mesureWebFont() : false"), tb(kb));
      }, function(a) {
        r("[webFontTest] fonts.load() rejected! " + a);
        tb(kb);
      });
    }
    function q(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new ea - t;
    }
    function h(d) {
      d && (r("[webFontTest] testWebFont start."), t = new ea - 0);
      jb(b) ? (r("[webFontTest] testWebFont mesurement success : " + x), a(x)) : q(n) ? (r("[webFontTest] testWebFont timeout!"), D ? a(0) : 9 > v ? y(a, 0) : tb(kb)) : y(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      lb = ["sans-serif", "serif"];
      N = P(B, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (w = {}; d = lb[++a];) {
        N.style.fontFamily = d, w[d] = N.offsetWidth;
      }
    }
    function jb(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (B.appendChild(N); c = lb[++b];) {
        if (N.style.fontFamily = '"' + a + '",' + c, N.offsetWidth !== w[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (N.innerHTML = e, a = N.offsetWidth, N.innerHTML = f[e], q = a === N.offsetWidth ? 1 : 0, N.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      O(N);
      return x = d + q;
    }
    function kb(d) {
      r("[webFontTest] testDataUriComplete : " + d);
      (D = d) ? p(!0) : a(0);
    }
    function p(d) {
      d && (t = new ea - 0);
      for (b in c) {
        if (jb(b)) {
          r("[webFontTest] success! " + b);
          Ta = P(B, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = sb.all, f = oc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : mc('@import "' + d + '"', "all");
          oc.all = ++f;
          y(m, !0);
        } else {
          q(100) ? (r("[webFontTest] timeout! " + b), delete c[b], y(p, !0)) : y(p);
        }
        return;
      }
      a(0);
    }
    function m(d) {
      d && (r("[webFontTest] testImportedCssReady start!"), b = b.replace(pc, ""), r("[webFontTest] targetWebFontName : " + b), t = new ea - 0);
      1 < Ta.offsetWidth ? (r("[webFontTest] testImportedCssReady ended."), O(Ta), n = 100, y(h, !0)) : q(n) ? (r("[webFontTest] testImportedCssReady timeout!"), O(Ta), a(0)) : y(m);
    }
    var n = g || 5000, t, D, N, Ta, lb, w, x;
    b = pc + b;
    r("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > v) {
        return !0;
      }
      var d = P(Ba, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      O(d);
      return a;
    })() ? (r("[webFontTest] maybeCanWebFont() : true"), !u.fonts || 603 > ub ? (r("[webFontTest] No native font loader."), h(!0)) : (r("[webFontTest] Use Native font loader."), d())) : (r("[webFontTest] maybeCanWebFont() : false"), y(a, 0));
  }
  function qc() {
    vb = !vb;
    for (var a = -1, b; b = wb[++a];) {
      b.style.visibility = vb ? "" : "hidden";
    }
  }
  function fd(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), xb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Ua() {
    Ua = null;
    gd(yb, "PB-100", {"PB-100_canTTF":w + "pbFont/ttf.css", "PB-100_canWOFF":w + "pbFont/woff.css", "PB-100_canEOT":w + "pbFont/eot.css", "PB-100_canSVG":w + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Va}, 5000);
  }
  function yb(a) {
    Da = a;
    r("[pbList] WebFont test result : " + !!a);
    Da ? zb() : Ea ? rc(!0) : Y(Ea) ? zb() : hd();
  }
  function rc(a) {
    a && (r("[pbList] Fallback start!"), V(B, "pbList-noWebFont"), Z ? (ha([".pbList font:after", "content:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]), !Ab && sc && ha([".pbList font", "filter:invert(100%)"], "only screen and (prefers-color-scheme:dark)")) : ha([".pbList font", "background-image:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    zb();
  }
  function zb() {
    for (yb = nc = null; aa.length;) {
      Wa(aa.shift(), Bb.shift());
    }
    r("[pbList] complete.");
  }
  function Wa(a, b) {
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
    if (yb) {
      -1 === aa.indexOf(a) && (aa.push(a), Bb.push(b), Cb && Ua && Ua());
    } else {
      var e = aa.indexOf(a);
      0 <= e && aa.splice(e, 1) && Bb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Da && (e = e.split(Va).join(tc)), b ? a.data = e : id(e.split("\r").join("").split("&yen;").join(jd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Db).split("&amp;").join("&"), a);
      }
    }
  }
  function id(a, b) {
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
        l === Db || k ? (g += "~", l === Db && (k = !k)) : g += l;
      }
      g = c(g, kd, "^");
      g = c(g, ld, "{");
      g = c(g, md, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var p = l === Eb, m = " " === l;
      l = p ? " " : l;
      var n = g.charAt(h), r = t, t = "|" === n;
      n = f["+|~{}^".indexOf(n) + 1];
      if ("\n" !== l) {
        if (Da || !Ea) {
          8 > v && m && (l = h === k - 1 ? Eb : nd), 2 === Da && a.substr(h, 2) === Va && (l = Va, ++h), m = m && "str" === n ? ' class="pbList-strsp"' : p ? "" : !m && n ? ' class="pbList-' + n + '"' : "";
        } else {
          var D = ia.indexOf(l);
          D = -1 === D ? "" : ia.indexOf(l).toString(16).toUpperCase();
          D = (D = 1 === D.length ? "0" + D : D) ? "pbChr" + D : "";
          m = m && "str" === n ? ' class="pbList-strsp"' : m || !D ? "" : n ? ' class="' + (D ? D + " " : "") + "pbList-" + n + '"' : ' class="' + D + '"';
        }
        r && p && (ub || Fb) && (l = Eb);
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
      O(b);
    }
  }
  var p, n, a = oa.userAgent, x = oa.appVersion, Gb = A(x) | 0, t = oa.platform, Xa = u.documentElement, Hb = u.documentMode, Ib = bc.width, Jb = bc.height, uc = m.HTMLAudioElement, vc = m.performance, wc = m.Int8Array, od = void 0 !== m.ontouchstart, W = c(x, "Version/") || c(a, "Version/"), ja = Xa && void 0 !== Xa.style.MozAppearance, xc = m.operamini, Ya = g(a, "UCWEB"), pd = Ya && c(a, " U2/"), qd = Ya && c(a, "; wds "), Kb = c(a.split("_").join("."), "; iPh OS "), rd = c(a, "; Adr "), yc = 
  g(x, "YJApp-ANDROID"), Q = g(t, "Android") || ja && g(x, "Android") || yc, E = c(t, "Android ") || c(x, "Android ") || c(a, "Android ") || rd, Lb = g(t, "Linux"), ka = !xc && m.opera, zc = ka && (ka.version && "function" === typeof ka.version ? ka.version() : ec(c(a, "Opera "), W, "" + Gb)), Ac = m.opr, Fa = !ka && (u.all || Hb), H = Fa && (Hb ? Hb : m.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4), Za = !Fa && Xa.msContentZoomFactor, la = !Za && 
  m.chrome, Mb = ja && c(a, "Goanna/"), R = !Mb && ja && c(a, "rv:"), Bc = c(a, "Firefox/"), Cc = c(a, "Opera/"), z = ib(a, "AppleWebKit/"), ba = c(a, "Chrome/"), Nb = c(a, "OPR/"), sd = c(x, "KHTML/"), Dc = c(a.toLowerCase(), "iris"), Ob = c(a, "FxiOS/"), ma = ib(a, "SamsungBrowser/"), Ga;
  if (Ga = !ma) {
    a: {
      for (var Ec = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      $a, Pb = Ec.length; $a = Ec[--Pb];) {
        if (g(a, $a)) {
          Ga = 2 > A(W) ? W : 0.9;
          break a;
        }
      }
      var Fc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Pb = Fc.length; $a = Fc[--Pb];) {
        if (g(a, $a)) {
          Ga = W;
          break a;
        }
      }
      Ga = void 0;
    }
  }
  var Gc = Ga, Hc = la && 534.3 >= z, Ic = od && (z || ja) && (0 === t.indexOf("Linux armv") || 0 === t.indexOf("Linux aarch") || "Linux i686" === t) && g(a, "Linux x86_64") || !E && yc, Jc = m.puffinDevice, ab = Jc && Jc.clientInfo, Ha = ab && "iOS" === ab.os && ab.osVersion, bb = Ha && ab.model, Qb = !H && u.registerElement, td = !H && u.execCommand, Kc = Lb && Qb && "11.0.696.34" === ba, ca, I, b, Ia, Rb, Sb;
  if ("Nitro" === t) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === t) {
      k = "NDSi";
      var h = Cc;
    } else {
      if ("New Nintendo 3DS" === t || g(a, "iPhone OS 6_0") && 320 === Ib && 240 === Jb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === t) {
          k = "N3DS";
          h = c(a, "Version/");
          z = 535;
          var ud = h;
        } else {
          if ("Nintendo Swicth" === t) {
            k = "Swicth", h = c(x, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === t) {
              k = "WiiU", h = c(x, "NintendoBrowser/"), z = c(x, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === t) {
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
                    var Lc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > dc("4.10", b) && (p = "Sony", n = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Gb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            Lc = 3.4;
                            e = k;
                            f = 2;
                            var cb = !0;
                          } else {
                            if (0 === t.indexOf("iP") || Kb || Ha) {
                              if (Ha) {
                                switch(h = Ha, bb.substr(0, 4)) {
                                  case "iPho":
                                    var J = "iPhone";
                                    var da = A(bb.substr(6));
                                    var K = !0;
                                    break;
                                  case "iPad":
                                    J = "iPad";
                                    da = A(bb.substr(4));
                                    var L = !0;
                                    break;
                                  case "iPod":
                                    J = "iPod";
                                    da = A(bb.substr(4));
                                    var Mc = !0;
                                }
                              } else {
                                Kb ? h = Kb : h = c(x.split("_").join("."), "OS ");
                                h || (I = !0, h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : oa.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : cc.isNaN ? 9.2 : m.SharedWorker ? vc && vc.now ? 8.0 : 8.4 : td ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : wc ? 4.3 : uc ? 4.1 : 3.2);
                                var Tb = 1 === m.devicePixelRatio;
                                var C = Ib === 1.5 * Jb || 1.5 * Ib === Jb;
                                0 === t.indexOf("iPhone") ? (J = "iPhone", da = C ? Tb ? {max:3} : {min:4, max:5} : {max:6}, K = !0) : 0 === t.indexOf("iPad") ? (J = "iPad", da = Tb ? {max:2} : {min:3}, L = !0) : 0 === t.indexOf("iPod") && (J = "iPod", da = C ? Tb ? {max:3} : 4 : {min:5}, Mc = !0);
                              }
                              Ha || !oa.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (Sb = !0, p = "iOSWebView") : (p = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              n = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", p = "AOSP", n = 2.2, e = p, f = n, Q = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", p = "AOSP", n = 2.2, e = p, f = n;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== m.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > R ? "1.0.1" : 19 > R ? 1.1 : 27 > R ? 1.2 : 29 > R ? 1.3 : 31 > R ? 1.4 : 33 > R ? 2.0 : 35 > R ? 2.1 : 38 > R ? 2.2 : 45 > R ? 2.5 : 2.6, g(a, "Mobile") ? K = !0 : g(a, "Tablet") && (L = !0);
                                    } else {
                                      if (m.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (K = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ma, p = e, n = f, K = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(x, "Windows Phone OS ") || qd) {
                                            var db = !0;
                                            h = b;
                                            K = !0;
                                          } else {
                                            if (Za && "ARM" === t) {
                                              db = !0, h = 10, I = K = !0;
                                            } else {
                                              if (Fa && g(x, "ZuneWP")) {
                                                db = !0, h = 11 === H ? 8.1 : 10 === H ? 8 : 9 === H ? 7.5 : 7 === H ? 7 : "?", I = K = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", K = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", K = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var X = !0;
                                                      h = 6.3;
                                                      var F = L = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        X = !0, h = 6, F = L = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          X = !0, h = 5, F = L = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            X = !0, h = 5, F = L = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              X = !0, h = 5 <= A(E) ? 5 : 4, F = L = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                X = !0, h = 3, F = L = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  X = !0, h = 2, F = L = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    X = !0, h = 1, F = L = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, p = "AOSP", n = 2.2, e = p, f = n;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        X = !0, h = E, F = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Dc) {
                                                                              k = "WindowsMobile", cb = !0;
                                                                            } else {
                                                                              if ("WinCE" === t) {
                                                                                k = t, cb = !0;
                                                                              } else {
                                                                                if ("Win16" === t || "Win32" === t || "Win64" === t) {
                                                                                  k = t, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === t.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === t ? "MacPPC" : t;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Nc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = W, K = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : Q && ja ? (g(a, "Android 4.4;") ? C = {min:2.3} : 4 <= A(E) ? C = E : C = {min:2.2}, h = C, Ic && (I = !0)) : Q && ka ? (E ? C = E : (C = {min:1.6}, I = !0), h = C, g(a, "Tablet") ? L = !0 : 
                                                                                    K = !0) : E ? (h = E, Q = !0) : Lb && Ic ? (ca = !0, ma ? C = {min:4.4} : la && !Hc || Ac || Nb ? C = {min:4} : (C = E = void 0 !== Xa.style.touchAction ? {min:5} : Qb ? 4.4 : wc ? oa.connection ? m.searchBoxJavaBridge_ || la ? cc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= z ? 3 : 533 <= z ? uc ? 2.3 : 2.2 : 530 <= z ? 2.0 : 1.5, Gc && (p = "Samsung", n = Gc)), h = C, Q = !0) : Kc ? (h = {min:5}, ca = Q = !0) : Lb && (g(a, 
                                                                                    "Ubuntu") ? k = "Ubuntu" : (b = c(a, "Mint/")) ? (k = "Mint", h = b) : (b = c(a, "Fedora/")) ? (k = "Fedora", h = b) : k = g(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  X && (k = "FireOS");
  Q && (k = k || "Android");
  db && (k = "WindowsPhone");
  p || (F = F || Q, ka ? (p = F || cb || K || L ? "PrestoMobile" : "Presto", n = zc) : Fa ? ((C = ib(x, "Trident/") + 4) && C !== H && (e = "IEHost", f = C), 10 <= H && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = H), cb || K || L || Mc ? p = "TridentMobile" : Nc && 5 <= H ? (p = "Tasman", e = "MacIE", f = H) : (p = "Trident", Nc && (e = "MacIE", f = H)), n = H) : Za ? (p = db ? "EdgeMobile" : "EdgeHTML", n = c(x, "Edge/")) : Mb ? (p = "Goanna", n = 
  Mb) : ja ? (p = F ? "Fennec" : "Gecko", n = R || Bc) : ma ? (p = "Samsung", n = ma, ca && (I = !0)) : (b = Lc || c(a, "NetFront/")) ? (p = "NetFront", n = b) : (b = c(a, "iCab")) ? (p = "iCab", n = b) : (b = ec(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || xc && W) ? (p = "OperaMini", n = b, k || (g(a, "iPhone") ? J = "iPhone" : g(a, "iPad") ? J = "iPad" : g(a, "iPod") && (J = "iPod"), J && (k = "iOS"))) : Ya ? (p = "UCWEB", n = pd) : sd ? (p = "KHTML", n = Gb) : Q && Hc ? (p = "AOSP", n = E, Ia = 
  !0, ca && (I = !0)) : la || Ac || Nb ? (p = F ? "ChromiumMobile" : "Chromium", n = ba, ca && (I = !0)) : Q && Qb ? (p = "ChromeWebView", n = 5 > A(E) ? E : ba, Ia = !0, m.requestFileSystem || m.webkitRequestFileSystem || (Rb = !0), ca && (I = !0)) : Q && (W || ca) ? (p = "AOSP", n = E, Ia = !0, ca && (I = !0)) : ba ? (p = F ? "ChromiumMobile" : "Chromium", n = ba) : z && (p = "WebKit", n = z));
  if (!e) {
    if (b = Za && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(x, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(x, "OPT/")) {
          e = "OperaTouch", f = b, I = I || !g(x, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Ya && (b = c(a, "UCBrowser/"))) {
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
                            if (b = c(a, "Focus/") || 9 > A(Ob) && Sb && 11 <= A(h) && Ob) {
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
                                                                      e = "Iron", f = b || la && ba;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || la && ba;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || m.FNRBrowser) {
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
                                                                                            if (b = ud || c(x, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (Dc) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(x, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(x, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = Ob || ja && (Bc || n)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = zc || Nb || Cc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (Fa) {
                                                                                                                e = "IE", f = n;
                                                                                                              } else {
                                                                                                                if (ma) {
                                                                                                                  e = p, f = ma;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (la || Kc && Ia) && ba) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (Ia && !Rb) {
                                                                                                                      e = p, f = n;
                                                                                                                    } else {
                                                                                                                      if (Sb || Rb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || W) {
                                                                                                                          e = "Safari", f = W || (73 > z ? 0.8 : 85 > z ? 0.9 : 100 > z ? 1 : 125 > z ? 1.1 : 312 > z ? 1.2 : 412 > z ? 1.3 : 419.3 >= z ? 2 : 525.13 >= z ? 3 : 525.25 >= z ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = Ka(h), l[k] = La(h)) : l[k] = !0);
  p && (l.ENGINE = p, n ? (l.ENGINE_VERSION = Ka(n), l[p] = La(n)) : l[p] = !0, e || (e = p, f = n));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = Ka(f), l[e] = La(f)) : l[e] = !0);
  J && (l.DEVICE = J, da ? (l.DEVICE_VERSION = Ka(da), l[J] = La(da)) : l[J] = !0);
  I && (l.PC_MODE = !0);
  var Oa = new gb, ta = [], kc = !!u.getElementsByTagName, B = u.body, S = B.style, v = l.Trident || l.TridentMobile, Ja = l.Tasman, Ab = l.EdgeHTML || l.EdgeMobile, Ub = l.Presto || l.PrestoMobile, Vb = l.Gecko, Wb = l.Goanna, ub = l.WebKit, Fb = l.SafariMobile || l.iOSWebView, vd = l.OperaMini && l.UCWEB;
  v || Ja || (new gb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var wd = 5.5 > v, Oc = u.scripts, xd = (Ja ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : "modern") + ".css", Pc = 0 === location.href.indexOf("https");
  var va = Oc[Oc.length - 1].src.split("/");
  --va.length;
  var Qc = va.join("/");
  0 <= "http: https:".indexOf(va[0]) && va.splice(0, 3);
  va = va.join("/");
  var Y = function(a) {
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
  var Xb, Yb = [];
  ta.push(function() {
    wa(function() {
      (Xb = m.logger || u.all.logger) || alert("#logger not found!");
      for (Xb ? r = function(a) {
        P(Xb, "P", null, null, a);
      } : m.console && (r = console.log); Yb.length;) {
        r(Yb.shift());
      }
    });
  });
  r = function(a) {
    Yb.push(a);
  };
  var Na = [], yd = 0, pa;
  if (5 > v || Ja) {
    m._wdb_onlooptimer = Ma, Ma = "_wdb_onlooptimer()";
  }
  var Rc = function(a) {
    Na.length || (pa = setInterval(Ma, 999));
    Na.push({f:a, uid:++yd});
  };
  ta.push(function() {
    Fb && Sc(dd);
    eb(fc);
  });
  var U = [], Tc = 0, fa;
  if (5 > v || Ja) {
    m._wdb_ontimer = xa, xa = "_wdb_ontimer()";
  }
  var y = function(a, b) {
    U.length || (fa = hb(xa, 64));
    U.push({f:a, p:b, uid:++Tc, t:new ea - 0 + 64});
    return Tc;
  };
  var Uc = function(a) {
    for (var b = U.length, d; d = U[--b];) {
      if (d.uid === a) {
        U.splice(b, 1);
        break;
      }
    }
  };
  ta.push(function() {
    Fb && Sc(ed);
    eb(gc);
  });
  var ya = [], ic, ob = 0, na = m.matchMedia, qa;
  ya.push(function() {
    qa = P(B, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Vc = [], nb = m.onload, Wc = m.onunload;
  onload = mb;
  onunload = function(a) {
    var b;
    Wc && (b = Wc(a));
    M(Vc, a);
    onunload = Oa;
    return b;
  };
  var wa = function(a) {
    ya.push(a);
  };
  var eb = function(a) {
    Vc.push(a);
  };
  var jc = [];
  wa(function() {
    hc();
    Rc(hc);
  });
  var Zb = function(a) {
    jc.push(a);
  };
  var Aa = [], za, pb, qb;
  10 <= v || Ab ? (na("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    za = pb = a.matches;
    M(Aa, Pa());
  }), na("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    za = qb = a.matches;
    M(Aa, Pa());
  }), na("(-ms-high-contrast:active)").addListener(function(a) {
    za = a.matches;
    M(Aa, Pa());
  }), ra = null) : 10 > v || (l.Win32 || l.Win64) && (44 <= Vb || Wb) ? wa(function() {
    qa.style.color = "#123456";
    qa.style.backgroundColor = "#123456";
    60 > Vb || Wb ? ra() : ra() && Rc(ra);
    ra = null;
  }) : ra = null;
  var zd = [];
  na && na("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    M(zd, a.matches);
  });
  var $b = [];
  m.onbeforeprint ? (onbeforeprint = function() {
    M($b, !0);
  }, onafterprint = function() {
    M($b, !1);
  }, eb(function() {
    onbeforeprint = onafterprint = Oa;
  })) : na && na("print").addListener(function(a) {
    M($b, a.matches);
  });
  var Xc = [], ac = m.onscroll;
  onscroll = function(a) {
    var b;
    ac && (b = ac(a));
    mb || M(Xc);
    return b;
  };
  eb(function() {
    onscroll = ac = Oa;
  });
  var Sc = function(a) {
    Xc.push(a);
  };
  var Yc = Qa("html")[0];
  var Ba = Qa("head")[0];
  var Ra;
  ya.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && O(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (wd ? (k = f.sheet || f.styleSheet) && (l = 10 <= v ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new gb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  O(f);
                  break;
                }
              case "LINK":
                kc && !Ba.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === h.indexOf(c[--q])) {
                    O(f);
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
                O(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        k = e.pop(), Ba.appendChild(k);
      }
    }
    var b = !(8 > Ub || 5 > v || Ja), c = ["og:", "twitter:", "fb:"], e = [];
    a(Yc);
  });
  var sb = {}, oc = {}, fb, Ea, Z, Ad = Y(S.transform) ? "transform" : Y(S["-o-transform"]) ? "-o-transform" : Y(S["-ms-transform"]) ? "-ms-transform" : Y(S["-moz-transform"]) ? "-moz-transform" : Y(S["-webkit-transform"]) ? "-webkit-transform" : "";
  Zb(function(a) {
    a && !Y(Z) && (a = P(B, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), Z = Vb || Wb || 8 <= v || Ab || 6 <= a.offsetWidth, O(a));
  });
  var Ca;
  9 > v && wa(function(a) {
    a = P(B, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    fb = 1 < a.offsetHeight;
    a.style.cssText = "";
    O(a);
  });
  var Zc = Pc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var hd = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || y(b, !1)) : e = y(a));
    }
    var b = rc;
    if (Zc) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!v || 11 === v || 11 === l.IEHost) && c.width || f || (f = !0, e && Uc(e), e = y(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Uc(e);
        Ub && !c.complete ? e = y(b, !1) : (Ea = !0, y(b, !0));
      };
      c.src = Zc;
      8 > Ub && c.complete ? (Ea = !0, y(b, !0)) : f || (e = y(a));
    } else {
      r("[imageTest] TEST_IMAGE_URL is undefined!"), y(b, !1);
    }
  };
  var pc = "bad_" + (new ea - 0) + "_";
  var gd = nc;
  for (l.IEHost && 5.5 > v && wa(function() {
    var a = u.createElement("link");
    Ba.appendChild(a);
    a.setAttribute("href", (Qc ? Qc + "/" : "") + xd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); ta.length;) {
    ta.shift()();
  }
  ta = null;
  var $c = $c || {}, G = String.fromCharCode, w = Pc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", sc = !v && (void 0 !== S.filter || void 0 !== S["-webkit-filter"]), ad;
  wa(function() {
    ad = fb && 9 === v;
    sc || ad || V(B, "jsNoFilter");
  });
  var ia = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", G(960), ")", "(", G(234), G(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", 
  ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", G(9824), "\u2190", G(9829), G(9830), G(9827), G(956), "\u03a9", "\u2193", "\u2192", "%", G(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", G(9619)];
  Aa.push(function(a) {
    Sa("jsHcm");
    Sa("jsHcmWob");
    Sa("jsHcmBow");
    if (a) {
      switch((Ad || 9 === v || 5.5 <= v && 9 > v && fb) && V(B, "jsCanRotate"), a) {
        case 1:
          V(B, "jsHcm");
          break;
        case 2:
          V(B, "jsHcmWob");
          break;
        case 3:
          V(B, "jsHcmBow");
      }
    } else {
      Sa("jsCanRotate");
    }
  });
  var wb = [], vb, xb, bd;
  Zb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      V(a, "pbTipPos" + b.toUpperCase());
      P(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      P(a, "div", {className:"pbTail" + c});
      g && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (Z && p) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = ia[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - A(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Ra = 1, k = P(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      n || f || sa(a, "pbChrCS") && wb.push(a);
    }
    if (a && !bd) {
      bd = !0;
      var e = 6 > v ? 1 : 0;
      a = Qa("SAMP");
      var f = 9 > v, g = 5 <= v && 6 > v, h, k, l, m;
      fb && V(B, "pbLCD-AX");
      if (a.length) {
        var n = void 0 !== S.opacity || void 0 !== S["-moz-opacity"] || void 0 !== S["-khtml-opacity"], p = !n && !f && !0, r = !Z || p || void 0;
        for (l = -1; h = a[++l];) {
          if (sa(h.parentElement || h.parentNode, "pbLCD")) {
            var t = h.children;
            for (h = t.length; h;) {
              var u = t[--h];
              switch(u.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (Z || b(u), m = u.children.length; m;) {
                      c(u.children[--m]);
                    }
                  }
                  vd ? u.setAttribute("href", "javascript:void(0)") : u.onclick = fd;
                  break;
                case "B":
                  r && c(u);
              }
            }
          }
        }
        wb.length ? (setInterval(qc, 500), Z ? ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ha([".pbChrCS", "background-position:0 -51px"])) : qc = null;
        p && (Z ? ha([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + w + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        w + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + w + "pbLCD/x3_a90.png)"]) : ha([".pbAlp1", "background-image:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        w + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + w + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + w + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > ub && (Yc.onclick = function(a) {
    if (xb) {
      return xb = !1, a.preventDefault(), !1;
    }
  });
  var Db = ia[7], tc = ia[30], jd = ia[113], Va = G(8337) + G(8331), Eb = G(160), nd = G(8194), ld = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), md = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), kd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + tc + ia[31]).split(""), aa = 
  [], Bb = [], Da, Cb;
  Zb(function(a) {
    if (a && !Cb) {
      var b = u.all || Qa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        sa(c, "pbList") ? Wa(c) : sa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Wa(c, !0);
      }
      aa.length && (r("[pbList] " + aa.length + " elements found. WebFont test start."), Ua());
      Cb = !0;
    }
  });
  $c.prettify = Wa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

