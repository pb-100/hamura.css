PB100 = {};
(function(xd, l, p, u, la, Zb, A, $b, db, yd, eb, Xc, ca, zd) {
  function fb(d, a) {
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
  function ac(d, a) {
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
  function bc() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > ac(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function Ja(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Ka(d) {
    return d === d + "" ? A(d) : d;
  }
  function r() {
  }
  function La() {
    for (var d, a = 0; a < Ma.length; ++a) {
      d = Ma[a], d.f();
    }
  }
  function Yc() {
    ma && (cc(), ma = setInterval(La, 999));
  }
  function cc() {
    ma && (ma = clearInterval(ma));
  }
  function sa() {
    for (var d, a = 0, b = new ca - 0; a < S.length;) {
      b < S[0].t ? ++a : (d = S.splice(a, 1)[0], d.f(d.p));
    }
    da = S.length ? eb(sa, 64) : 0;
  }
  function Zc() {
    da && (dc(), da = eb(sa, 64));
  }
  function dc() {
    da && (da = Xc(da));
  }
  function L(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function ib(d) {
    var a;
    jb && (a = jb(d));
    L(ta, d);
    onload = Na;
    ta = ib = jb = onload = null;
    return a;
  }
  function ec() {
    var d = 9 === na.offsetWidth;
    fc !== d && L(gc, fc = d);
  }
  function oa() {
    function d(d) {
      return "#ffffff" === d && "rgb(255,255,255)" !== d;
    }
    var a = u.defaultView, b = kb, c = a ? a.getComputedStyle(na, null) : na.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return va = "#123456" !== a && "rgb(18,52,86)" !== a, lb = "#000000" === a && "rgb(0,0,0)" !== a && d(c), mb = d(a) && "#000000" === c && "rgb(0,0,0)" !== c, b !== Oa() && L(wa, kb), !0;
    }
  }
  function Oa() {
    return kb = va ? mb ? 2 : lb ? 3 : 1 : 0;
  }
  function Pa(d) {
    var a = a || u;
    return hc ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function N(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function nb(d, a) {
    var b = u.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function O(d, a, b, c, e) {
    function q(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            xa(d, a[b]);
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
      a = nb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = nb(a);
    }
    Qa ? (2 === Qa && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Qa = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function ic(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function pa(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function xa(d, a) {
    var b;
    if (!pa(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function jc(d, a) {
    var b = O(ya, "style", {type:"text/css", media:a}, 0, d);
    ob[a] = b.sheet || b.styleSheet;
  }
  function ea(a, b) {
    for (var d = b || "all", c = ob[d], q, e, f = "", g; a.length;) {
      q = a.shift(), e = a.shift(), g = q + "{" + e + "}", c ? c.addRule ? c.addRule(q, e) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && jc(f, d);
  }
  function pb(a) {
    if (V(za)) {
      r("[dataUriTest] already done : " + za), y(a, za);
    } else {
      if (8 > v) {
        r("[dataUriTest] trident < 8 : false"), y(a, !1);
      } else {
        r("[dataUriTest] start!");
        var d = new Image;
        d.onerror = function() {
          r("[dataUriTest] no DATA URI!");
          a(za = !1);
        };
        d.onload = function() {
          r("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          a(za = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function kc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      r("[webFontTest] testByNativeFontLoaderAPI start.");
      u.fonts.load(d).then(function(c) {
        r("[webFontTest] fonts.check() : " + u.fonts.check(d, "i") + ", fonts.length : " + c.length);
        gb(b) ? y(a, Ia) : (r("[webFontTest] mesureWebFont() : false"), pb(hb));
      }, function(a) {
        r("[webFontTest] fonts.load() rejected! " + a);
        pb(hb);
      });
    }
    function q(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new ca - t;
    }
    function h(d) {
      d && (r("[webFontTest] testWebFont start."), t = new ca - 0);
      gb(b) ? (r("[webFontTest] testWebFont mesurement success : " + Ia), a(Ia)) : q(n) ? (r("[webFontTest] testWebFont timeout!"), lc ? a(0) : 9 > v ? y(a, 0) : pb(hb)) : y(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      w = ["sans-serif", "serif"];
      M = O(F, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (x = {}; d = w[++a];) {
        M.style.fontFamily = d, x[d] = M.offsetWidth;
      }
    }
    function gb(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (F.appendChild(M); c = w[++b];) {
        if (M.style.fontFamily = '"' + a + '",' + c, M.offsetWidth !== x[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (M.innerHTML = e, a = M.offsetWidth, M.innerHTML = f[e], q = a === M.offsetWidth ? 1 : 0, M.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      N(M);
      return Ia = d + q;
    }
    function hb(d) {
      r("[webFontTest] testDataUriComplete : " + d);
      (lc = d) ? m(!0) : a(0);
    }
    function m(d) {
      d && (t = new ca - 0);
      for (b in c) {
        if (gb(b)) {
          r("[webFontTest] success! " + b);
          Ha = O(F, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = ob.all, f = mc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : jc('@import "' + d + '"', "all");
          mc.all = ++f;
          y(p, !0);
        } else {
          q(100) ? (r("[webFontTest] timeout! " + b), delete c[b], y(m, !0)) : y(m);
        }
        return;
      }
      a(0);
    }
    function p(d) {
      d && (r("[webFontTest] testImportedCssReady start!"), r("[webFontTest] targetWebFontName : " + b), t = new ca - 0);
      1 < Ha.offsetWidth ? (r("[webFontTest] testImportedCssReady ended."), N(Ha), n = 100, y(h, !0)) : q(n) ? (r("[webFontTest] testImportedCssReady timeout!"), N(Ha), a(0)) : y(p);
    }
    var n = g || 5000, t, lc, M, Ha, w, x, Ia;
    b = $c + b;
    r("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > v) {
        return !0;
      }
      var d = O(ya, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      N(d);
      return a;
    })() ? (r("[webFontTest] maybeCanWebFont() : true"), !u.fonts || 603 > qb ? (r("[webFontTest] No native font loader."), h(!0)) : (r("[webFontTest] Use Native font loader."), d())) : (r("[webFontTest] maybeCanWebFont() : false"), y(a, 0));
  }
  function nc() {
    rb = !rb;
    for (var a = -1, b; b = sb[++a];) {
      b.style.visibility = rb ? "" : "hidden";
    }
  }
  function ad(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), tb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Ra() {
    Ra = null;
    bd(ub, "PB-100", {"PB-100_canTTF":w + "pbFont/ttf.css", "PB-100_canWOFF":w + "pbFont/woff.css", "PB-100_canEOT":w + "pbFont/eot.css", "PB-100_canSVG":w + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Sa}, 5000);
  }
  function ub(a) {
    Ta = a;
    r("[pbList] WebFont test result : " + !!a);
    Ta ? vb() : V(void 0) ? vb() : cd();
  }
  function dd(a) {
    a && (r("[pbList] Fallback start!"), xa(F, "pbList-noWebFont"), W ? (ea([".pbList font:after", "content:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]), v || wb || ea([".pbList font:after", "content:url(" + w + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)")) : ea([".pbList font", "background-image:url(" + w + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    vb();
  }
  function vb() {
    for (ub = kc = null; X.length;) {
      Ua(X.shift(), xb.shift());
    }
    r("[pbList] complete.");
  }
  function Ua(a, b) {
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
    if (ub) {
      -1 === X.indexOf(a) && (X.push(a), xb.push(b), yb && Ra && Ra());
    } else {
      var e = X.indexOf(a);
      0 <= e && X.splice(e, 1) && xb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Ta && (e = e.split(Sa).join(oc)), b ? a.data = e : ed(e.split("\r").join("").split("&yen;").join(fd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(zb).split("&amp;").join("&"), a);
      }
    }
  }
  function ed(a, b) {
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
        l === zb || k ? (g += "~", l === zb && (k = !k)) : g += l;
      }
      g = c(g, gd, "^");
      g = c(g, hd, "{");
      g = c(g, id, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var m = l === Ab, p = " " === l;
      l = m ? " " : l;
      var n = g.charAt(h), r = t, t = "|" === n;
      n = f["+|~{}^".indexOf(n) + 1];
      "\n" !== l ? (8 > v && p && (l = h === k - 1 ? Ab : jd), 2 === Ta && a.substr(h, 2) === Sa && (l = Sa, ++h), p = p && "str" === n ? ' class="pbList-strsp"' : m ? "" : !p && n ? ' class="pbList-' + n + '"' : "", r && m && (qb || Bb) && (l = Ab), q.push("<font" + p + ">" + l + "</font>")) : q.push(l);
    }
    q = q.join("");
    if (1 === b.nodeType) {
      b.innerHTML = q;
    } else {
      for (f = nb("font", q); q = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(q, b);
      }
      N(b);
    }
  }
  var m, n, a = la.userAgent, x = la.appVersion, Cb = A(x) | 0, t = la.platform, Va = u.documentElement, Db = u.documentMode, Eb = Zb.width, Fb = Zb.height, pc = p.HTMLAudioElement, qc = p.performance, rc = p.Int8Array, kd = void 0 !== p.ontouchstart, T = c(x, "Version/") || c(a, "Version/"), fa = Va && void 0 !== Va.style.MozAppearance, sc = p.operamini, Wa = g(a, "UCWEB"), ld = Wa && c(a, " U2/"), md = Wa && c(a, "; wds "), Gb = c(a.split("_").join("."), "; iPh OS "), nd = c(a, "; Adr "), tc = 
  g(x, "YJApp-ANDROID"), P = g(t, "Android") || fa && g(x, "Android") || tc, C = c(t, "Android ") || c(x, "Android ") || c(a, "Android ") || nd, Hb = g(t, "Linux"), ha = !sc && p.opera, uc = ha && (ha.version && "function" === typeof ha.version ? ha.version() : bc(c(a, "Opera "), T, "" + Cb)), vc = p.opr, Aa = !ha && (u.all || Db), G = Aa && (Db ? Db : p.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4), Xa = !Aa && Va.msContentZoomFactor, ia = !Xa && 
  p.chrome, Ib = fa && c(a, "Goanna/"), Q = !Ib && fa && c(a, "rv:"), wc = c(a, "Firefox/"), xc = c(a, "Opera/"), z = fb(a, "AppleWebKit/"), Y = c(a, "Chrome/"), Jb = c(a, "OPR/"), od = c(x, "KHTML/"), yc = c(a.toLowerCase(), "iris"), Kb = c(a, "FxiOS/"), ja = fb(a, "SamsungBrowser/"), Ba;
  if (Ba = !ja) {
    a: {
      for (var zc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ya, Lb = zc.length; Ya = zc[--Lb];) {
        if (g(a, Ya)) {
          Ba = 2 > A(T) ? T : 0.9;
          break a;
        }
      }
      var Ac = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Lb = Ac.length; Ya = Ac[--Lb];) {
        if (g(a, Ya)) {
          Ba = T;
          break a;
        }
      }
      Ba = void 0;
    }
  }
  var Bc = Ba, Cc = ia && 534.3 >= z, Dc = kd && (z || fa) && (0 === t.indexOf("Linux armv") || 0 === t.indexOf("Linux aarch") || "Linux i686" === t) && g(a, "Linux x86_64") || !C && tc, Ec = p.puffinDevice, Za = Ec && Ec.clientInfo, Ca = Za && "iOS" === Za.os && Za.osVersion, $a = Ca && Za.model, Mb = !G && u.registerElement, pd = !G && u.execCommand, Fc = Hb && Mb && "11.0.696.34" === Y, Z, H, b, Da, Nb, Ob;
  if ("Nitro" === t) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === t) {
      k = "NDSi";
      var h = xc;
    } else {
      if ("New Nintendo 3DS" === t || g(a, "iPhone OS 6_0") && 320 === Eb && 240 === Fb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === t) {
          k = "N3DS";
          h = c(a, "Version/");
          z = 535;
          var qd = h;
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
                    var Gc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > ac("4.10", b) && (m = "Sony", n = b);
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
                            Gc = 3.4;
                            e = k;
                            f = 2;
                            var ab = !0;
                          } else {
                            if (0 === t.indexOf("iP") || Gb || Ca) {
                              if (Ca) {
                                switch(h = Ca, $a.substr(0, 4)) {
                                  case "iPho":
                                    var I = "iPhone";
                                    var aa = A($a.substr(6));
                                    var J = !0;
                                    break;
                                  case "iPad":
                                    I = "iPad";
                                    aa = A($a.substr(4));
                                    var K = !0;
                                    break;
                                  case "iPod":
                                    I = "iPod";
                                    aa = A($a.substr(4));
                                    var Hc = !0;
                                }
                              } else {
                                Gb ? h = Gb : h = c(x.split("_").join("."), "OS ");
                                h || (H = !0, h = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : la.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : $b.isNaN ? 9.2 : p.SharedWorker ? qc && qc.now ? 8.0 : 8.4 : pd ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : rc ? 4.3 : pc ? 4.1 : 3.2);
                                var Pb = 1 === p.devicePixelRatio;
                                var B = Eb === 1.5 * Fb || 1.5 * Eb === Fb;
                                0 === t.indexOf("iPhone") ? (I = "iPhone", aa = B ? Pb ? {max:3} : {min:4, max:5} : {max:6}, J = !0) : 0 === t.indexOf("iPad") ? (I = "iPad", aa = Pb ? {max:2} : {min:3}, K = !0) : 0 === t.indexOf("iPod") && (I = "iPod", aa = B ? Pb ? {max:3} : 4 : {min:5}, Hc = !0);
                              }
                              Ca || !la.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (Ob = !0, m = "iOSWebView") : (m = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              n = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", m = "AOSP", n = 2.2, e = m, f = n, P = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", m = "AOSP", n = 2.2, e = m, f = n;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > Q ? "1.0.1" : 19 > Q ? 1.1 : 27 > Q ? 1.2 : 29 > Q ? 1.3 : 31 > Q ? 1.4 : 33 > Q ? 2.0 : 35 > Q ? 2.1 : 38 > Q ? 2.2 : 45 > Q ? 2.5 : 2.6, g(a, "Mobile") ? J = !0 : g(a, "Tablet") && (K = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (J = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ja, m = e, n = f, J = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(x, "Windows Phone OS ") || md) {
                                            var bb = !0;
                                            h = b;
                                            J = !0;
                                          } else {
                                            if (Xa && "ARM" === t) {
                                              bb = !0, h = 10, H = J = !0;
                                            } else {
                                              if (Aa && g(x, "ZuneWP")) {
                                                bb = !0, h = 11 === G ? 8.1 : 10 === G ? 8 : 9 === G ? 7.5 : 7 === G ? 7 : "?", H = J = !0;
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
                                                      var D = K = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        U = !0, h = 6, D = K = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          U = !0, h = 5, D = K = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            U = !0, h = 5, D = K = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              U = !0, h = 5 <= A(C) ? 5 : 4, D = K = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                U = !0, h = 3, D = K = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  U = !0, h = 2, D = K = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    U = !0, h = 1, D = K = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, m = "AOSP", n = 2.2, e = m, f = n;
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
                                                                            if (0 === a.indexOf("Windows Mobile;") || yc) {
                                                                              k = "WindowsMobile", ab = !0;
                                                                            } else {
                                                                              if ("WinCE" === t) {
                                                                                k = t, ab = !0;
                                                                              } else {
                                                                                if ("Win16" === t || "Win32" === t || "Win64" === t) {
                                                                                  k = t, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === t.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === t ? "MacPPC" : t;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Ic = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = T, J = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : P && fa ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= A(C) ? B = C : B = {min:2.2}, h = B, Dc && (H = !0)) : P && ha ? (C ? B = C : (B = {min:1.6}, H = !0), h = B, g(a, "Tablet") ? K = !0 : 
                                                                                    J = !0) : C ? (h = C, P = !0) : Hb && Dc ? (Z = !0, ja ? B = {min:4.4} : ia && !Cc || vc || Jb ? B = {min:4} : (B = C = void 0 !== Va.style.touchAction ? {min:5} : Mb ? 4.4 : rc ? la.connection ? p.searchBoxJavaBridge_ || ia ? $b.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= z ? 3 : 533 <= z ? pc ? 2.3 : 2.2 : 530 <= z ? 2.0 : 1.5, Bc && (m = "Samsung", n = Bc)), h = B, P = !0) : Fc ? (h = {min:5}, Z = P = !0) : Hb && (g(a, 
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
  U && (k = "FireOS");
  P && (k = k || "Android");
  bb && (k = "WindowsPhone");
  m || (D = D || P, ha ? (m = D || ab || J || K ? "PrestoMobile" : "Presto", n = uc) : Aa ? ((B = fb(x, "Trident/") + 4) && B !== G && (e = "IEHost", f = B), 10 <= G && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = G), ab || J || K || Hc ? m = "TridentMobile" : Ic && 5 <= G ? (m = "Tasman", e = "MacIE", f = G) : (m = "Trident", Ic && (e = "MacIE", f = G)), n = G) : Xa ? (m = bb ? "EdgeMobile" : "EdgeHTML", n = c(x, "Edge/")) : Ib ? (m = "Goanna", n = 
  Ib) : fa ? (m = D ? "Fennec" : "Gecko", n = Q || wc) : ja ? (m = "Samsung", n = ja, Z && (H = !0)) : (b = Gc || c(a, "NetFront/")) ? (m = "NetFront", n = b) : (b = c(a, "iCab")) ? (m = "iCab", n = b) : (b = bc(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || sc && T) ? (m = "OperaMini", n = b, k || (g(a, "iPhone") ? I = "iPhone" : g(a, "iPad") ? I = "iPad" : g(a, "iPod") && (I = "iPod"), I && (k = "iOS"))) : Wa ? (m = "UCWEB", n = ld) : od ? (m = "KHTML", n = Cb) : P && Cc ? (m = "AOSP", n = C, Da = 
  !0, Z && (H = !0)) : ia || vc || Jb ? (m = D ? "ChromiumMobile" : "Chromium", n = Y, Z && (H = !0)) : P && Mb ? (m = "ChromeWebView", n = 5 > A(C) ? C : Y, Da = !0, p.requestFileSystem || p.webkitRequestFileSystem || (Nb = !0), Z && (H = !0)) : P && (T || Z) ? (m = "AOSP", n = C, Da = !0, Z && (H = !0)) : Y ? (m = D ? "ChromiumMobile" : "Chromium", n = Y) : z && (m = "WebKit", n = z));
  if (!e) {
    if (b = Xa && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(x, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(x, "OPT/")) {
          e = "OperaTouch", f = b, H = H || !g(x, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Wa && (b = c(a, "UCBrowser/"))) {
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
                            if (b = c(a, "Focus/") || 9 > A(Kb) && Ob && 11 <= A(h) && Kb) {
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
                                                                      e = "Iron", f = b || ia && Y;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ia && Y;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || p.FNRBrowser) {
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
                                                                                            if (b = qd || c(x, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (yc) {
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
                                                                                                          if (b = Kb || fa && (wc || n)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = uc || Jb || xc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (Aa) {
                                                                                                                e = "IE", f = n;
                                                                                                              } else {
                                                                                                                if (ja) {
                                                                                                                  e = m, f = ja;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ia || Fc && Da) && Y) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (Da && !Nb) {
                                                                                                                      e = m, f = n;
                                                                                                                    } else {
                                                                                                                      if (Ob || Nb) {
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
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = Ja(h), l[k] = Ka(h)) : l[k] = !0);
  m && (l.ENGINE = m, n ? (l.ENGINE_VERSION = Ja(n), l[m] = Ka(n)) : l[m] = !0, e || (e = m, f = n));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = Ja(f), l[e] = Ka(f)) : l[e] = !0);
  I && (l.DEVICE = I, aa ? (l.DEVICE_VERSION = Ja(aa), l[I] = Ka(aa)) : l[I] = !0);
  H && (l.PC_MODE = !0);
  var Na = new db, qa = [], hc = !!u.getElementsByTagName, F = u.body, ba = F.style, v = l.Trident || l.TridentMobile, Ea = l.Tasman, wb = l.EdgeHTML || l.EdgeMobile, Qb = l.Presto || l.PrestoMobile, Rb = l.Gecko, Sb = l.Goanna, qb = l.WebKit, Bb = l.SafariMobile || l.iOSWebView, rd = l.OperaMini && l.UCWEB;
  v || Ea || (new db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var sd = 5.5 > v, Jc = u.scripts, td = (Ea ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : "modern") + ".css", Kc = 0 === location.href.indexOf("https");
  var ra = Jc[Jc.length - 1].src.split("/");
  --ra.length;
  var Lc = ra.join("/");
  0 <= "http: https:".indexOf(ra[0]) && ra.splice(0, 3);
  ra = ra.join("/");
  var V = function(a) {
    return void 0 !== a;
  };
  var R = Array.prototype;
  R.pop || (R.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  R.push || (R.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  R.shift || (R.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  R.splice || (R.splice = function(a, b) {
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
  R.indexOf || (R.indexOf = function(a, b) {
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
  var Tb, Ub = [];
  qa.push(function() {
    Fa(function() {
      (Tb = p.logger || u.all.logger) || alert("#logger not found!");
      for (Tb ? r = function(a) {
        O(Tb, "P", null, null, a);
      } : p.console && (r = console.log); Ub.length;) {
        r(Ub.shift());
      }
    });
  });
  r = function(a) {
    Ub.push(a);
  };
  var Ma = [], ud = 0, ma;
  if (5 > v || Ea) {
    p._wdb_onlooptimer = La, La = "_wdb_onlooptimer()";
  }
  var Mc = function(a) {
    Ma.length || (ma = setInterval(La, 999));
    Ma.push({f:a, uid:++ud});
  };
  qa.push(function() {
    Bb && Nc(Yc);
    cb(cc);
  });
  var S = [], Oc = 0, da;
  if (5 > v || Ea) {
    p._wdb_ontimer = sa, sa = "_wdb_ontimer()";
  }
  var y = function(a, b) {
    S.length || (da = eb(sa, 64));
    S.push({f:a, p:b, uid:++Oc, t:new ca - 0 + 64});
    return Oc;
  };
  var Pc = function(a) {
    for (var b = S.length, d; d = S[--b];) {
      if (d.uid === a) {
        S.splice(b, 1);
        break;
      }
    }
  };
  qa.push(function() {
    Bb && Nc(Zc);
    cb(dc);
  });
  var ta = [], fc, kb = 0, ka = p.matchMedia, na;
  ta.push(function() {
    na = O(F, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Qc = [], jb = p.onload, Rc = p.onunload;
  onload = ib;
  onunload = function(a) {
    var b;
    Rc && (b = Rc(a));
    L(Qc, a);
    onunload = Na;
    return b;
  };
  var Fa = function(a) {
    ta.push(a);
  };
  var cb = function(a) {
    Qc.push(a);
  };
  var gc = [];
  Fa(function() {
    ec();
    Mc(ec);
  });
  var Vb = function(a) {
    gc.push(a);
  };
  var wa = [], va, lb, mb;
  10 <= v || wb ? (ka("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    va = lb = a.matches;
    L(wa, Oa());
  }), ka("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    va = mb = a.matches;
    L(wa, Oa());
  }), ka("(-ms-high-contrast:active)").addListener(function(a) {
    va = a.matches;
    L(wa, Oa());
  }), oa = null) : 10 > v || (l.Win32 || l.Win64) && (44 <= Rb || Sb) ? Fa(function() {
    na.style.color = "#123456";
    na.style.backgroundColor = "#123456";
    60 > Rb || Sb ? oa() : oa() && Mc(oa);
    oa = null;
  }) : oa = null;
  var vd = [];
  ka && ka("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    L(vd, a.matches);
  });
  var Wb = [];
  p.onbeforeprint ? (onbeforeprint = function() {
    L(Wb, !0);
  }, onafterprint = function() {
    L(Wb, !1);
  }, cb(function() {
    onbeforeprint = onafterprint = Na;
  })) : ka && ka("print").addListener(function(a) {
    L(Wb, a.matches);
  });
  var Sc = [], Xb = p.onscroll;
  onscroll = function(a) {
    var b;
    Xb && (b = Xb(a));
    ib || L(Sc);
    return b;
  };
  cb(function() {
    onscroll = Xb = Na;
  });
  var Nc = function(a) {
    Sc.push(a);
  };
  var Tc = Pa("html")[0];
  var ya = Pa("head")[0];
  var Qa;
  ta.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && N(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (sd ? (k = f.sheet || f.styleSheet) && (l = 10 <= v ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new db("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  N(f);
                  break;
                }
              case "LINK":
                hc && !ya.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === h.indexOf(c[--q])) {
                    N(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (ic(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (ic(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                N(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        k = e.pop(), ya.appendChild(k);
      }
    }
    var b = !(8 > Qb || 5 > v || Ea), c = ["og:", "twitter:", "fb:"], e = [];
    a(Tc);
  });
  var ob = {}, mc = {}, Yb, W, wd = V(ba.transform) ? "transform" : V(ba["-o-transform"]) ? "-o-transform" : V(ba["-ms-transform"]) ? "-ms-transform" : V(ba["-moz-transform"]) ? "-moz-transform" : V(ba["-webkit-transform"]) ? "-webkit-transform" : "";
  Vb(function(a) {
    a && !V(W) && (a = O(F, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), W = Rb || Sb || 8 <= v || wb || 6 <= a.offsetWidth, N(a));
  });
  var za;
  9 > v && Fa(function(a) {
    a = O(F, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Yb = 1 < a.offsetHeight;
    a.style.cssText = "";
    N(a);
  });
  var Uc = Kc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var cd = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || y(b, !1)) : e = y(a));
    }
    var b = dd;
    if (Uc) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!v || 11 === v || 11 === l.IEHost) && c.width || f || (f = !0, e && Pc(e), e = y(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Pc(e);
        Qb && !c.complete ? e = y(b, !1) : y(b, !0);
      };
      c.src = Uc;
      8 > Qb && c.complete ? y(b, !0) : f || (e = y(a));
    } else {
      r("[imageTest] TEST_IMAGE_URL is undefined!"), y(b, !1);
    }
  };
  var $c = "bad_" + (new ca - 0) + "_";
  var bd = kc;
  for (l.IEHost && 5.5 > v && Fa(function() {
    var a = u.createElement("link");
    ya.appendChild(a);
    a.setAttribute("href", (Lc ? Lc + "/" : "") + td);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); qa.length;) {
    qa.shift()();
  }
  qa = null;
  var Vc = Vc || {}, E = String.fromCharCode, w = Kc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Ga = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", E(960), ")", "(", E(234), E(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", E(9824), "\u2190", E(9829), E(9830), E(9827), E(956), "\u03a9", "\u2193", "\u2192", "%", E(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", E(9619)], sb = [], rb, tb, Wc;
  Vb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      xa(a, "pbTipPos" + b.toUpperCase());
      O(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      O(a, "div", {className:"pbTail" + c});
      g && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (W && n) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = Ga[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - A(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Qa = 1, k = O(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      p || f || pa(a, "pbChrCS") && sb.push(a);
    }
    if (a && !Wc) {
      Wc = !0;
      var e = 6 > v ? 1 : 0;
      a = Pa("SAMP");
      var f = 9 > v, g = 5 <= v && 6 > v, h, k, l, m;
      Yb && xa(F, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== ba.opacity || void 0 !== ba["-moz-opacity"] || void 0 !== ba["-khtml-opacity"], n = !p && !f && !0, r = !W || n || void 0;
        for (l = -1; h = a[++l];) {
          if (pa(h.parentElement || h.parentNode, "pbLCD")) {
            var t = h.children;
            for (h = t.length; h;) {
              var u = t[--h];
              switch(u.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (W || b(u), m = u.children.length; m;) {
                      c(u.children[--m]);
                    }
                  }
                  rd ? u.setAttribute("href", "javascript:void(0)") : u.onclick = ad;
                  break;
                case "B":
                  r && c(u);
              }
            }
          }
        }
        sb.length ? (setInterval(nc, 500), W ? ea([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ea([".pbChrCS", "background-position:0 -51px"])) : nc = null;
        n && (W ? ea([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + w + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        w + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + w + "pbLCD/x3_a90.png)"]) : ea([".pbAlp1", "background-image:url(" + w + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + w + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + w + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + w + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + w + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        w + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + w + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + w + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + w + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > qb && (Tc.onclick = function(a) {
    if (tb) {
      return tb = !1, a.preventDefault(), !1;
    }
  });
  wa.push(function(a) {
    a ? (wd || 9 === v || 5.5 <= v && 9 > v && Yb) && xa(F, "jsCanRotate") : pa(F, "jsCanRotate") && (a = F.className.split(" "), a.splice(a.indexOf("jsCanRotate"), 1), F.className = a.join(" "));
  });
  var zb = Ga[7], oc = Ga[30], fd = Ga[113], Sa = E(8337) + E(8331), Ab = E(160), jd = E(8194), hd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), id = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), gd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + oc + Ga[31]).split(""), X = 
  [], xb = [], Ta, yb;
  Vb(function(a) {
    if (a && !yb) {
      var b = u.all || Pa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        pa(c, "pbList") ? Ua(c) : pa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ua(c, !0);
      }
      X.length && (r("[pbList] " + X.length + " elements found. WebFont test start."), Ra());
      yb = !0;
    }
  });
  Vc.prettify = Ua;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

