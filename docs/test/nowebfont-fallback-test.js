PB100 = {};
(function(Dc, q, n, v, ha, xb, z, yb, zb, Ec, sa, ta, ka, Fc) {
  function Ra(g, a) {
    var t = z(g.split(a)[1]);
    return 0 <= t ? t : 0;
  }
  function f(g, a) {
    return 0 <= g.indexOf(a);
  }
  function c(g, a) {
    var t = "", b = -1, c;
    if (g = g.split(a)[1]) {
      for (; c = g.charCodeAt(++b);) {
        if (48 <= c && 57 >= c || 46 === c) {
          t += g.charAt(b);
        } else {
          break;
        }
      }
      for (b = t.length; b;) {
        if (46 === t.charCodeAt(--b)) {
          t = t.substr(0, b);
        } else {
          break;
        }
      }
    }
    return t;
  }
  function Ab(g, a) {
    var b = 0, t;
    g = g.split(".");
    a = a.split(".");
    for (t = Math.min(g.length, a.length); b < t; ++b) {
      var c = z(g[b]), d = z(a[b]);
      if (c !== d) {
        return c > d ? 1 : -1;
      }
    }
    return g.length === a.length ? 0 : g.length > a.length ? 1 : -1;
  }
  function Bb() {
    for (var g = arguments, a = 1, b = g.length, c = g[0], d; a < b; ++a) {
      0 > Ab(c, d = g[a]) && (c = d);
    }
    return c;
  }
  function wa(g) {
    return g === g + "" ? g : g === g - 0 ? "" + g : g.min && g.max ? g.min + "~" + g.max : g.min ? g.min + "~" : "~" + g.max;
  }
  function xa(g) {
    return g === g + "" ? z(g) : g;
  }
  function la(g) {
    var a = 0, b = N.length, c;
    Sa && (c = Sa(g));
    Sa = null;
    for (onload === la && (onload = Ta, onload = null); a < b; ++a) {
      N[a](g);
    }
    N = la = null;
    return c;
  }
  function Ua(a) {
    var g = 0, b = Va.length, c;
    ya && (c = ya(a));
    ya = null;
    onunload === Ua && (onunload = Ta);
    for (O && ta(O); g < b; ++g) {
      Va[g]();
    }
    onscroll = onresize = Ta;
    onscroll = onresize = ya = Wa = Xa = Ua = Va = null;
    return c;
  }
  function Cb() {
    for (var a = O = 0, b = Db.length; a < b; ++a) {
      Db[a]();
    }
  }
  function za(a) {
    var g = g || v;
    return Eb ? g.getElementsByTagName(a) : g.all.h(a.toUpperCase());
  }
  function T(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Z(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Aa(a, b) {
    var g;
    if (!Z(a, b)) {
      if (g = a.className) {
        b = " " + b;
      }
      a.className = g + b;
    }
  }
  function p() {
  }
  function aa() {
    function a(b) {
      if (!b.href || 0 === location.href.indexOf(b.href.split("/").splice(0, 3).join("/"))) {
        for (var g = b.rules || b.cssRules, c = -1, t, d; t = g[++c];) {
          if (0 <= (t.selectorText || "").toLowerCase().indexOf(".pblcd")) {
            return b;
          }
          if (t = t.sheet || t.styleSheet) {
            if (t = a(t)) {
              return t;
            }
          }
        }
        if ((b = b.imports) && (d = b.length)) {
          for (c = 0; c < d; ++c) {
            if (t = a(b[c])) {
              return t;
            }
          }
        }
      }
    }
    var b = v.styleSheets, c;
    aa = null;
    if (b) {
      var d = 0;
      for (c = b.length; d < c && !(y = a(b[d])); ++d) {
      }
    }
    if (!y || y.readOnly) {
      y ? (d = y.href.split("/"), d.pop(), ma = d.join("/") + "/") : ma = jc, Eb ? (b = A(ia, "style", {type:"text/css"}), y = b.sheet || b.styleSheet) : (ia.insertAdjacentHTML("BeforeEnd", "<style type=text/css></style>"), y = b[b.length - 1]);
    }
  }
  function Ya(a) {
    var b = "";
    for (aa && aa(); a.length;) {
      var g = a.shift(), c = a.shift().split("base:").join(ma), d = g + "{" + c + "}";
      y ? y.addRule ? y.addRule(g, c) : y.insertRule && y.insertRule(d, y.cssRules.length) : b += d;
    }
    b && A(ia, "style", 0, 0, b);
  }
  function Za(a, b) {
    var g = v.createElement(a);
    b && (g.innerHTML = b);
    return g;
  }
  function A(a, b, c, d, e) {
    function g(a, b) {
      for (var g in b) {
        switch(g) {
          case "class":
          case "className":
            Aa(a, b[g]);
            break;
          default:
            a.setAttribute(g, b[g]);
        }
      }
    }
    function t(a, b) {
      var g = a.style, c;
      for (c in b) {
        g[c] = b[c];
      }
    }
    if ("style" === b) {
      var f = !0;
      b = Za("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      b = Za(b);
    }
    Ba ? (2 === Ba && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    Ba = 0;
    c && g(b, c);
    d && t(b, d);
    e && !f && b.appendChild(v.createTextNode(e));
    return b;
  }
  function Ca() {
    for (var a, b = Da.length; b;) {
      --b, a = Da.shift(), a.f(a.p);
    }
  }
  function P(a, b) {
    Da.length || ($a = sa(Ca, 64));
    Da.push({f:a, p:b, uid:++kc});
  }
  function Fb() {
    ab = !ab;
    for (var a = -1, b; b = Ea[++a];) {
      b.style.visibility = ab ? "" : "hidden";
    }
  }
  function lc(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), bb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Fa() {
    Fa = null;
    Gb(cb, "PB-100", {"PB-100_canTTF":"base:pbFont/ttf.css", "PB-100_canWOFF":"base:pbFont/woff.css", "PB-100_canEOT":"base:pbFont/eot.css", "PB-100_canSVG":"base:pbFont/svg.css"}, 5000);
  }
  function cb(a) {
    var b = Q.style, c = 9 > J ? "x3mask_ie.png" : "x3mask.png";
    db = a;
    p("[pbList] WebFont test result : " + !!a);
    if (db) {
      if (void 0 !== b.webkitFontFeatureSettings || void 0 !== b.mozFontFeatureSettings || void 0 !== b.msFontFeatureSettings || void 0 !== b.oFontFeatureSettings || void 0 !== b.fontFeatureSettings) {
        p("[pbList] fontFeatureSettings property found in style."), a = A(Q, "code", {className:"pbFont", "aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", display:"inline", fontSize:"72px"}, "i"), b = a.offsetWidth, a.innerHTML = Ga, Ha = b === a.offsetWidth, T(a), p("[pbList] Ligature test result : " + Ha);
      }
    } else {
      p("[pbList] Fallback start!"), Aa(Q, "pbList-noWebFont"), Ya([".pbList font", "background-image:url(base:pbFont/" + c + ")"]), a = "body .pbList font{background-image:url(base:pbFont/x3mask_dark.png)}", aa && aa(), a = a.split("base:").join(ma), y.addImport || y.insertRule && A(ia, "style", {type:"text/css", media:"only screen and (prefers-color-scheme:dark)"}, null, a);
    }
    for (cb = Gb = null; U.length;) {
      Ia(U.shift(), eb.shift());
    }
    p("[pbList] complete.");
  }
  function Ia(a, b) {
    function c(a) {
      a = a.childNodes;
      for (var b = -1, d; d = a[++b];) {
        switch(d.nodeType) {
          case 1:
            c(d);
            break;
          case 3:
            d.data && d.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && g.push(d);
        }
      }
    }
    var g = [];
    if (cb) {
      -1 === U.indexOf(a) && (U.push(a), eb.push(b), Hb && Fa && Fa());
    } else {
      var d = U.indexOf(a);
      0 <= d && U.splice(d, 1) && eb.splice(d, 1);
      for (c(a); a = g.shift();) {
        d = a.data, Ha || (d = d.split(Ga).join(Ib)), b ? a.data = d : mc(d.split("\r").join("").split("&yen;").join(nc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(fb).split("&amp;").join("&"), a);
      }
    }
  }
  function mc(a, b) {
    function c(a, b) {
      for (var c = ""; b;) {
        b & 1 && (c += a), b >>= 1, a += a;
      }
      return c;
    }
    function g(a, b, g) {
      for (var d, e = -1, f, t; d = b[++e];) {
        for (; 0 <= (f = a.indexOf(d));) {
          t = d.length, a = a.substr(0, f) + c(g, t) + a.substr(f + t);
        }
      }
      return a;
    }
    function d(a) {
      var b = z(a), c = "" + b;
      return 0 < b && b === b | 0 && (b = a.indexOf(c) + c.length, b <= a.length) ? b : 0;
    }
    var e = " area line str cmd fnc syb".split(" "), t = [], f = "", h = -1, l, k;
    if (function(a) {
      var b = a.indexOf("P");
      if (-1 === b) {
        return !1;
      }
      b = z(a.charAt(b + 1));
      return 0 <= b && 9 >= b;
    }(a)) {
      f = c("+", a.length);
    } else {
      for (0 <= (h = d(a)) && (f = c("|", h), --h); k = a.charAt(++h);) {
        k === fb || l ? (f += "~", k === fb && (l = !l)) : f += k;
      }
      f = g(f, oc, "^");
      f = g(f, pc, "{");
      f = g(f, qc, "}");
    }
    h = 0;
    for (l = a.length; h < l; ++h) {
      k = a.charAt(h);
      var n = k === gb, m = " " === k;
      k = n ? " " : k;
      var p = f.charAt(h), u = v, v = "|" === p;
      p = e["+|~{}^".indexOf(p) + 1];
      if ("\n" !== k) {
        if (db) {
          8 > J && m && (k = h === l - 1 ? gb : rc), Ha && a.substr(h, 2) === Ga && (k = Ga, ++h), m = m && "str" === p ? ' class="pbList-strsp"' : n ? "" : !m && p ? ' class="pbList-' + p + '"' : "";
        } else {
          var r = ba.indexOf(k);
          r = -1 === r ? "" : ba.indexOf(k).toString(16).toUpperCase();
          r = (r = 1 === r.length ? "0" + r : r) ? "pbChr" + r : "";
          m = m && "str" === p ? ' class="pbList-strsp"' : m || !r ? "" : p ? ' class="pbList-' + p + (r ? " " + r : "") + '"' : ' class="' + r + '"';
        }
        u && n && (q.WebKit || q.SafariMobile || q.iOSWebView) && (k = gb);
        t.push("<font" + m + ">" + k + "</font>");
      } else {
        t.push(k);
      }
    }
    t = t.join("");
    if (1 === b.nodeType) {
      b.innerHTML = t;
    } else {
      for (e = Za("font", t); t = e.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(t, b);
      }
      T(b);
    }
  }
  function Gb(a, b, c, d) {
    function g() {
      var c = '1.6em "' + b + '"';
      p("[pbList > webFontTest] testByNativeFontLoaderAPI start.");
      v.fonts.load(c).then(function(d) {
        p("[pbList > webFontTest] fonts.check() : " + v.fonts.check(c, "i") + ", fonts.length : " + d.length);
        h(b) ? P(a, !0) : (p("[pbList > webFontTest] mesureWebFont() : false"), P(l));
      }, function(a) {
        p("[pbList > webFontTest] fonts.load() rejected! " + a);
        l();
      });
    }
    function f(a) {
      return v.hidden || v.msHidden || v.mozHidden || v.webkitHidden ? !1 : a < new ka - r;
    }
    function e(c) {
      c && (p("[pbList > webFontTest] testWebFont start."), r = new ka - 0);
      h(b) ? (p("[pbList > webFontTest] testWebFont mesurement success!"), a(!0)) : f(d) ? (p("[pbList > webFontTest] testWebFont timeout!"), va ? a(!1) : l()) : P(e);
    }
    function t() {
      var a = -1, b;
      t = null;
      w = ["sans-serif", "serif"];
      Y = A(Q, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (z = {}; b = w[++a];) {
        Y.style.fontFamily = b, z[b] = Y.offsetWidth;
      }
    }
    function h(a) {
      var b = -1, c;
      t && t();
      for (Q.appendChild(Y); c = w[++b];) {
        if (Y.style.fontFamily = '"' + a + '",' + c, Y.offsetWidth !== z[c]) {
          var d = !0;
          break;
        }
      }
      T(Y);
      return d;
    }
    function l() {
      p("[pbList > webFontTest] testDataURI start.");
      if (9 > J) {
        k();
      } else {
        var a = new Image;
        a.onerror = k;
        a.onload = function() {
          va = 1 === a.width * a.height;
          k();
        };
        a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
    function k() {
      p("[pbList > webFontTest] testDataURI ended : " + va);
      va ? m(!0) : a(!1);
    }
    function m(b) {
      var d;
      b && (r = new ka - 0);
      for (d in c) {
        h(d) ? (p("[pbList > webFontTest] success! " + d), u = A(Q, "div", {"aria-hidden":"true", className:"pbFont-testCssReady", id:"pbFont-testCssReady"}), b = c[d], aa && aa(), b = b.split("base:").join(ma), y.addImport ? y.addImport(b, ++Jb) : y.insertRule && y.insertRule('@import "' + b + '"', ++Jb), P(n, !0)) : f(100) ? (p("[pbList > webFontTest] timeout! " + d), delete c[d], P(m, !0)) : P(m);
        return;
      }
      a(!1);
    }
    function n(c) {
      c && (p("[pbList > webFontTest] testImportedCssReady start!"), p("[pbList > webFontTest] targetWebFontName : " + b), r = new ka - 0);
      1 < u.offsetWidth ? (p("[pbList > webFontTest] testImportedCssReady ended."), T(u), d = 100, P(e, !0)) : f(d) ? (p("[pbList > webFontTest] testImportedCssReady timeout!"), T(u), a(!1)) : P(n);
    }
    var r, va, Y, u, w, z;
    d = d || 5000;
    b = sc + b;
    p("[pbList > webFontTest] DEBUG_MODE : 2");
    (function() {
      var a;
      if (q.MeeGo || 2.2 > q.AOSP || q.WebOS || q.UCWEB || 10 > q.TridentMobile || q.NDS || q.NDSi || q.N3DS) {
        return !1;
      }
      if (6 > J) {
        return !0;
      }
      var b = A(ia, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), c = (c = b.sheet || b.styleSheet) ? (a = c.cssRules) && (a = a[0]) ? a.cssText : c.cssText || "" : "";
      a = 0 < c.indexOf("src") && 0 === c.indexOf("@font-face");
      T(b);
      return a;
    })() ? (p("[pbList > webFontTest] maybeCanWebFont() : true"), !v.fonts || 603 > q.WebKit ? (p("[pbList > webFontTest] No native font loader."), e(!0)) : (p("[pbList > webFontTest] Use Native font loader."), g())) : (p("[pbList > webFontTest] maybeCanWebFont() : false"), P(a, !1));
  }
  var k, m, a = ha.userAgent, r = ha.appVersion, hb = z(r) | 0, u = ha.platform, Ja = v.documentElement, ib = v.documentMode, jb = xb.width, kb = xb.height, Kb = n.HTMLAudioElement, Lb = n.performance, Mb = n.Int8Array, tc = void 0 !== n.ontouchstart, R = c(r, "Version/") || c(a, "Version/"), ca = Ja && void 0 !== Ja.style.MozAppearance, Nb = n.operamini, Ka = f(a, "UCWEB"), uc = Ka && c(a, " U2/"), vc = Ka && c(a, "; wds "), lb = c(a.split("_").join("."), "; iPh OS "), wc = c(a, "; Adr "), Ob = 
  f(r, "YJApp-ANDROID"), K = f(u, "Android") || ca && f(r, "Android") || Ob, B = c(u, "Android ") || c(r, "Android ") || c(a, "Android ") || wc, mb = f(u, "Linux"), da = !Nb && n.opera, Pb = da && (da.version && "function" === typeof da.version ? da.version() : Bb(c(a, "Opera "), R, "" + hb)), Qb = n.opr, na = !da && (v.all || ib), E = na && (ib ? ib : n.g ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 5 : 4), La = !na && Ja.msContentZoomFactor, ea = !La && 
  n.chrome, nb = ca && c(a, "Goanna/"), L = !nb && ca && c(a, "rv:"), Rb = c(a, "Firefox/"), Sb = c(a, "Opera/"), w = Ra(a, "AppleWebKit/"), V = c(a, "Chrome/"), ob = c(a, "OPR/"), xc = c(r, "KHTML/"), Tb = c(a.toLowerCase(), "iris"), pb = c(a, "FxiOS/"), fa = Ra(a, "SamsungBrowser/"), oa;
  if (oa = !fa) {
    a: {
      for (var Ub = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ma, qb = Ub.length; Ma = Ub[--qb];) {
        if (f(a, Ma)) {
          oa = 2 > z(R) ? R : 0.9;
          break a;
        }
      }
      var Vb = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (qb = Vb.length; Ma = Vb[--qb];) {
        if (f(a, Ma)) {
          oa = R;
          break a;
        }
      }
      oa = void 0;
    }
  }
  var Wb = oa, Xb = ea && 534.3 >= w, Yb = tc && (w || ca) && (0 === u.indexOf("Linux armv") || 0 === u.indexOf("Linux aarch") || "Linux i686" === u) && f(a, "Linux x86_64") || !B && Ob, Zb = n.puffinDevice, Na = Zb && Zb.clientInfo, pa = Na && "iOS" === Na.os && Na.osVersion, Oa = pa && Na.model, rb = !E && v.registerElement, yc = !E && v.execCommand, $b = mb && rb && "11.0.696.34" === V, W, F, b, qa, sb, tb;
  if ("Nitro" === u) {
    var l = "NDS";
  } else {
    if ("Nintendo DSi" === u) {
      l = "NDSi";
      var h = Sb;
    } else {
      if ("New Nintendo 3DS" === u || f(a, "iPhone OS 6_0") && 320 === jb && 240 === kb) {
        l = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === u) {
          l = "N3DS";
          h = c(a, "Version/");
          w = 535;
          var zc = h;
        } else {
          if ("Nintendo Swicth" === u) {
            l = "Swicth", h = c(r, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === u) {
              l = "WiiU", h = c(r, "NintendoBrowser/"), w = c(r, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === u) {
                l = "Wii";
                h = c(a, "Wii; U; ; ");
                var d = l;
                var e = h;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  l = "PSVita", h = b, d = l, e = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    l = "PSP";
                    h = b;
                    var ac = 3.3;
                    d = l;
                    e = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      l = "PS3", h = b, d = l, e = b, 0 > Ab("4.10", b) && (k = "Sony", m = b);
                    } else {
                      if (f(a, "Xbox One")) {
                        l = "XboxOne", h = 1;
                      } else {
                        if (f(a, "Xbox")) {
                          l = "Xbox360", h = 1;
                        } else {
                          if (2 === hb && f(a, "Sony/COM2/")) {
                            l = "Mylo";
                            h = 2;
                            ac = 3.4;
                            d = l;
                            e = 2;
                            var Pa = !0;
                          } else {
                            if (0 === u.indexOf("iP") || lb || pa) {
                              if (pa) {
                                switch(h = pa, Oa.substr(0, 4)) {
                                  case "iPho":
                                    var G = "iPhone";
                                    var X = z(Oa.substr(6));
                                    var H = !0;
                                    break;
                                  case "iPad":
                                    G = "iPad";
                                    X = z(Oa.substr(4));
                                    var I = !0;
                                    break;
                                  case "iPod":
                                    G = "iPod";
                                    X = z(Oa.substr(4));
                                    var bc = !0;
                                }
                              } else {
                                lb ? h = lb : h = c(r.split("_").join("."), "OS ");
                                h || (F = !0, h = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : yb.isNaN ? 9.2 : n.SharedWorker ? Lb && Lb.now ? 8.0 : 8.4 : yc ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : Mb ? 4.3 : Kb ? 4.1 : 3.2);
                                var ub = 1 === n.devicePixelRatio;
                                var x = jb === 1.5 * kb || 1.5 * jb === kb;
                                0 === u.indexOf("iPhone") ? (G = "iPhone", X = x ? ub ? {max:3} : {min:4, max:5} : {max:6}, H = !0) : 0 === u.indexOf("iPad") ? (G = "iPad", X = ub ? {max:2} : {min:3}, I = !0) : 0 === u.indexOf("iPod") && (G = "iPod", X = x ? ub ? {max:3} : 4 : {min:5}, bc = !0);
                              }
                              pa || !ha.standalone && void 0 === v.fullscreenEnabled && void 0 === v.webkitFullscreenEnabled ? (tb = !0, k = "iOSWebView") : (k = "SafariMobile", d = "Safari", e = h);
                              l = "iOS";
                              m = h;
                            } else {
                              if (f(a, "Kobo")) {
                                l = "Kobo", k = "AOSP", m = 2.2, d = k, e = m, K = !0;
                              } else {
                                if (f(a, "EBRD")) {
                                  l = "SonyReader", k = "AOSP", m = 2.2, d = k, e = m;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    l = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      l = "FirefoxOS", h = 18.1 > L ? "1.0.1" : 19 > L ? 1.1 : 27 > L ? 1.2 : 29 > L ? 1.3 : 31 > L ? 1.4 : 33 > L ? 2.0 : 35 > L ? 2.1 : 38 > L ? 2.2 : 45 > L ? 2.5 : 2.6, f(a, "Mobile") ? H = !0 : f(a, "Tablet") && (I = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        l = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), d = l, e = h, f(a, "webOS.TV") || f(a, "/SmartTV") || (H = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          l = "Tizen", h = b, d = "Samsung", e = fa, k = d, m = e, H = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(r, "Windows Phone OS ") || vc) {
                                            var Qa = !0;
                                            h = b;
                                            H = !0;
                                          } else {
                                            if (La && "ARM" === u) {
                                              Qa = !0, h = 10, F = H = !0;
                                            } else {
                                              if (na && f(r, "ZuneWP")) {
                                                Qa = !0, h = 11 === E ? 8.1 : 10 === E ? 8 : 9 === E ? 7.5 : 7 === E ? 7 : "?", F = H = !0;
                                              } else {
                                                if (f(a, "FOMA;")) {
                                                  l = "FeaturePhone", H = !0;
                                                } else {
                                                  if (f(a, "SoftBank;")) {
                                                    l = "FeaturePhone", H = !0;
                                                  } else {
                                                    if (f(a, "KFMUWI")) {
                                                      var S = !0;
                                                      h = 6.3;
                                                      var C = I = !0;
                                                    } else {
                                                      if (f(a, "KFKAWI")) {
                                                        S = !0, h = 6, C = I = !0;
                                                      } else {
                                                        if (f(a, "KFSUWI") || f(a, "KFAUWI") || f(a, "KFDOWI")) {
                                                          S = !0, h = 5, C = I = !0;
                                                        } else {
                                                          if (f(a, "KFGIWI")) {
                                                            S = !0, h = 5, C = I = !0;
                                                          } else {
                                                            if (f(a, "KFARWI") || f(a, "KFSAWA") || f(a, "KFSAWI")) {
                                                              S = !0, h = 5 <= z(B) ? 5 : 4, C = I = !0;
                                                            } else {
                                                              if (f(a, "KFSOWI") || f(a, "KFTHWA") || f(a, "KFTHWI") || f(a, "KFAPWA") || f(a, "KFAPWI")) {
                                                                S = !0, h = 3, C = I = !0;
                                                              } else {
                                                                if (f(a, "KFOT") || f(a, "KFTT") || f(a, "KFJWA") || f(a, "KFJWI")) {
                                                                  S = !0, h = 2, C = I = !0;
                                                                } else {
                                                                  if (f(a, "Kindle Fire")) {
                                                                    S = !0, h = 1, C = I = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      l = "Kindle", h = b, k = "AOSP", m = 2.2, d = k, e = m;
                                                                    } else {
                                                                      if (f(a, "AmazonWebAppPlatform") || f(a, "; AFT")) {
                                                                        S = !0, h = B, C = !0;
                                                                      } else {
                                                                        if (f(a, "MeeGo")) {
                                                                          l = "MeeGo";
                                                                        } else {
                                                                          if (f(a, "Maemo")) {
                                                                            l = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Tb) {
                                                                              l = "WindowsMobile", Pa = !0;
                                                                            } else {
                                                                              if ("WinCE" === u) {
                                                                                l = u, Pa = !0;
                                                                              } else {
                                                                                if ("Win16" === u || "Win32" === u || "Win64" === u) {
                                                                                  l = u, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === u.indexOf("Mac")) {
                                                                                    l = "MacPowerPC" === u ? "MacPPC" : u;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var cc = !0;
                                                                                  } else {
                                                                                    f(a, "BlackBerry") || f(a, "BB10") ? (l = "BlackBerry", h = R, H = !0) : f(a, "SunOS") || f(a, "Sun Solaris") ? l = "SunOS" : f(a, "FreeBSD") ? l = "FreeBSD" : f(a, "OpenBSD") ? l = "OpenBSD" : f(a, "NetBSD") ? l = "NetBSD" : K && ca ? (f(a, "Android 4.4;") ? x = {min:2.3} : 4 <= z(B) ? x = B : x = {min:2.2}, h = x, Yb && (F = !0)) : K && da ? (B ? x = B : (x = {min:1.6}, F = !0), h = x, f(a, "Tablet") ? I = !0 : 
                                                                                    H = !0) : B ? (h = B, K = !0) : mb && Yb ? (W = !0, fa ? x = {min:4.4} : ea && !Xb || Qb || ob ? x = {min:4} : (x = B = void 0 !== Ja.style.touchAction ? {min:5} : rb ? 4.4 : Mb ? ha.connection ? n.searchBoxJavaBridge_ || ea ? yb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= w ? 3 : 533 <= w ? Kb ? 2.3 : 2.2 : 530 <= w ? 2.0 : 1.5, Wb && (k = "Samsung", m = Wb)), h = x, K = !0) : $b ? (h = {min:5}, W = K = !0) : mb && (f(a, 
                                                                                    "Ubuntu") ? l = "Ubuntu" : (b = c(a, "Mint/")) ? (l = "Mint", h = b) : (b = c(a, "Fedora/")) ? (l = "Fedora", h = b) : l = f(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  K && (l = l || "Android");
  Qa && (l = "WindowsPhone");
  k || (C = C || K, da ? (k = C || Pa || H || I ? "PrestoMobile" : "Presto", m = Pb) : na ? ((x = Ra(r, "Trident/") + 4) && x !== E && (d = "IEHost", e = x), 10 <= E && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (d = "ModernIE", e = E), Pa || H || I || bc ? k = "TridentMobile" : cc && 5 <= E ? (k = "Tasman", d = "MacIE", e = E) : (k = "Trident", cc && (d = "MacIE", e = E)), m = E) : La ? (k = Qa ? "EdgeMobile" : "EdgeHTML", m = c(r, "Edge/")) : nb ? (k = "Goanna", m = 
  nb) : ca ? (k = C ? "Fennec" : "Gecko", m = L || Rb) : fa ? (k = "Samsung", m = fa, W && (F = !0)) : (b = ac || c(a, "NetFront/")) ? (k = "NetFront", m = b) : (b = c(a, "iCab")) ? (k = "iCab", m = b) : (b = Bb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || Nb && R) ? (k = "OperaMini", m = b, l || (f(a, "iPhone") ? G = "iPhone" : f(a, "iPad") ? G = "iPad" : f(a, "iPod") && (G = "iPod"), G && (l = "iOS"))) : Ka ? (k = "UCWEB", m = uc) : xc ? (k = "KHTML", m = hb) : K && Xb ? (k = "AOSP", m = B, qa = 
  !0, W && (F = !0)) : ea || Qb || ob ? (k = C ? "ChromiumMobile" : "Chromium", m = V, W && (F = !0)) : K && rb ? (k = "ChromeWebView", m = 5 > z(B) ? B : V, qa = !0, n.requestFileSystem || n.webkitRequestFileSystem || (sb = !0), W && (F = !0)) : K && (R || W) ? (k = "AOSP", m = B, qa = !0, W && (F = !0)) : V ? (k = C ? "ChromiumMobile" : "Chromium", m = V) : w && (k = "WebKit", m = w));
  if (!d) {
    if (b = La && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      d = "Edge", e = b;
    } else {
      if (b = c(r, "Coast/")) {
        d = "Coast", e = b;
      } else {
        if (b = c(r, "OPT/")) {
          d = "OperaTouch", e = b, F = F || !f(r, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            d = "Yahoo", e = b;
          } else {
            if (!Ka && (b = c(a, "UCBrowser/"))) {
              d = "UC", e = b;
            } else {
              if (b = c(a, "SilK/")) {
                d = "Silk", e = b;
              } else {
                if (b = c(a, "Vivaldi/")) {
                  d = "Vivaldi", e = b;
                } else {
                  if (b = c(a, "QQBrowser/")) {
                    d = "QQ", e = b;
                  } else {
                    if (b = c(a, "YaBrowser/")) {
                      d = "Yandex", e = b;
                    } else {
                      if (b = c(a, "coc_coc_browser/")) {
                        d = "coccoc", e = b;
                      } else {
                        if (b = c(a, "Camino/")) {
                          d = "Camino", e = b;
                        } else {
                          if (f(a, "SE 2.X MetaSr 1.0")) {
                            d = "Sogou";
                          } else {
                            if (b = c(a, "Focus/") || 9 > z(pb) && tb && 11 <= z(h) && pb) {
                              d = "Focus", e = b;
                            } else {
                              if (b = c(a, "Klar/")) {
                                d = "Klar", e = b;
                              } else {
                                if (b = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ")) {
                                  d = "AOL", e = b;
                                } else {
                                  if (b = c(a, "IceDragon/")) {
                                    d = "IceDragon", e = b;
                                  } else {
                                    if (b = c(a, "Iceweasel/")) {
                                      d = "Iceweasel", e = b;
                                    } else {
                                      if (b = c(a, "TenFourFox/")) {
                                        d = "ITenFourFox", e = b;
                                      } else {
                                        if (b = c(a, "Waterfox/")) {
                                          d = "Waterfox", e = b;
                                        } else {
                                          if (b = c(a, "GNUzilla/")) {
                                            d = "GNUzilla", e = b;
                                          } else {
                                            if (b = c(a, "SeaMonkey/")) {
                                              d = "SeaMonkey", e = b;
                                            } else {
                                              if (b = c(a, "PaleMoon/")) {
                                                d = "PaleMoon", e = b;
                                              } else {
                                                if (b = c(a, "Basilisk/")) {
                                                  d = "Basilisk", e = b;
                                                } else {
                                                  if ((b = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/")) || f(a, "Maxthon")) {
                                                    d = "Maxthon", e = b || 1;
                                                  } else {
                                                    if (f(a, "Avant Browser;")) {
                                                      d = "Avant";
                                                    } else {
                                                      if (b = c(a, "Lunascape/")) {
                                                        d = "Lunascape", e = b;
                                                      } else {
                                                        if (b = c(a, "Konqueror/")) {
                                                          d = "Konqueror", e = b;
                                                        } else {
                                                          if (b = c(a, "Midori/")) {
                                                            d = "Midori", e = b;
                                                          } else {
                                                            if (b = c(a, "OmniWeb/")) {
                                                              d = "OmniWeb", e = b;
                                                            } else {
                                                              if (b = c(a, "Roccat/")) {
                                                                d = "Roccat", e = b;
                                                              } else {
                                                                if (b = c(a, "Epiphany/")) {
                                                                  d = "Epiphany", e = b;
                                                                } else {
                                                                  if (b = c(a, "WebPositive/")) {
                                                                    d = "WebPositive", e = b;
                                                                  } else {
                                                                    if ((b = c(a, "Iron/")) || f(a, " Iron ")) {
                                                                      d = "Iron", e = b || ea && V;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        d = "ComodoDragon", e = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || f(a, " Brave ")) {
                                                                          d = "Brave", e = b || ea && V;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            d = "Rockmelt", e = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || n.FNRBrowser) {
                                                                              d = "Sleipnir", b && (e = b);
                                                                            } else {
                                                                              if (b = c(a, "Puffin/")) {
                                                                                d = "Puffin", e = b;
                                                                              } else {
                                                                                if (b = c(a, "Dooble/")) {
                                                                                  d = "Dooble", e = b;
                                                                                } else {
                                                                                  if (b = c(a, "Flock/")) {
                                                                                    d = "Flock", e = b;
                                                                                  } else {
                                                                                    if (b = c(a, "Galeon/")) {
                                                                                      d = "Galeon", e = b;
                                                                                    } else {
                                                                                      if (b = c(a, "Falkon/")) {
                                                                                        d = "Falkon", e = b;
                                                                                      } else {
                                                                                        if (b = c(a, "Iceape/")) {
                                                                                          d = "Iceape", e = b;
                                                                                        } else {
                                                                                          if (b = c(a, "K-Meleon/")) {
                                                                                            d = "KMeleon", e = b;
                                                                                          } else {
                                                                                            if (b = zc || c(r, "NX/")) {
                                                                                              d = "NetFrontNX", e = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                d = "NN", e = b;
                                                                                              } else {
                                                                                                if (Tb) {
                                                                                                  d = "Iris", e = b;
                                                                                                } else {
                                                                                                  if (f(r, "FBAN/")) {
                                                                                                    d = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(r, "Line/")) {
                                                                                                      d = "LINE", e = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        d = "QtWebEngine", e = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          d = "QtWebKit", e = b;
                                                                                                        } else {
                                                                                                          if (b = pb || ca && (Rb || m)) {
                                                                                                            d = "Firefox", e = b;
                                                                                                          } else {
                                                                                                            if (b = Pb || ob || Sb) {
                                                                                                              d = "Opera", e = b;
                                                                                                            } else {
                                                                                                              if (na) {
                                                                                                                d = "IE", e = m;
                                                                                                              } else {
                                                                                                                if (fa) {
                                                                                                                  d = k, e = fa;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ea || $b && qa) && V) {
                                                                                                                    d = "Chrome", e = b;
                                                                                                                  } else {
                                                                                                                    if (qa && !sb) {
                                                                                                                      d = k, e = m;
                                                                                                                    } else {
                                                                                                                      if (tb || sb) {
                                                                                                                        d = "unknown";
                                                                                                                      } else {
                                                                                                                        if (f(a, "Safari") || R) {
                                                                                                                          d = "Safari", e = R || (73 > w ? 0.8 : 85 > w ? 0.9 : 100 > w ? 1 : 125 > w ? 1.1 : 312 > w ? 1.2 : 412 > w ? 1.3 : 419.3 >= w ? 2 : 525.13 >= w ? 3 : 525.25 >= w ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  l && (q.PLATFORM = l, h ? (q.PLATFORM_VERSION = wa(h), q[l] = xa(h)) : q[l] = !0);
  k && (q.ENGINE = k, m ? (q.ENGINE_VERSION = wa(m), q[k] = xa(m)) : q[k] = !0, d || (d = k, e = m));
  d && (q.BRAND = d, e ? (q.BRAND_VERSION = wa(e), q[d] = xa(e)) : q[d] = !0);
  G && (q.DEVICE = G, X ? (q.DEVICE_VERSION = wa(X), q[G] = xa(X)) : q[G] = !0);
  F && (q.PC_MODE = !0);
  var N = [], Va = [], Db = [], dc = [], Ta = new zb, Eb = !!v.getElementsByTagName, Q = v.body, J = q.Trident || q.TridentMobile, ec = q.Tasman, Ac = q.Presto || q.PrestoMobile, Bc = q.OperaMini && q.UCWEB;
  J || ec || (new zb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var fc = v.scripts;
  var ja = fc[fc.length - 1].src.split("/");
  --ja.length;
  var gc = ja.join("/");
  0 <= "http: https:".indexOf(ja[0]) && ja.splice(0, 3);
  ja = ja.join("/");
  var Sa = n.onload, ya = n.onunload, Wa = n.onscroll, Xa = n.onresize, O;
  onload = la;
  onunload = Ua;
  onscroll = function(a) {
    var b = 0, c = dc.length, d;
    Wa && (d = Wa(a));
    if (!la) {
      for (; b < c; ++b) {
        dc[b]();
      }
    }
    (q.SafariMobile || q.iOSWebView) && O && (ta(O), O = sa(Cb, 100));
    return d;
  };
  onresize = function(a) {
    var b;
    Xa && (b = Xa(a));
    la || (O && ta(O), O = sa(Cb, 100));
    return b;
  };
  var Cc = za("html")[0];
  var ia = za("head")[0];
  q.IEHost && 5.5 > J && (N[N.length] = function() {
    var a = v.createElement("link");
    ia.appendChild(a);
    a.setAttribute("href", (gc ? gc + "/" : "") + "ie5win.css");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  });
  var M = Array.prototype;
  M.pop || (M.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  M.push || (M.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  M.shift || (M.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  M.splice || (M.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, g = this.slice(a, a + b), f;
    if (0 < d) {
      var e = this.length - 1;
      for (f = a + b; e >= f; --e) {
        this[e + d] = this[e];
      }
    } else {
      if (0 > d) {
        e = a + b;
        for (f = this.length; e < f; ++e) {
          this[e + d] = this[e];
        }
        this.length += d;
      }
    }
    e = 2;
    for (f = c.length; e < f; ++e) {
      this[e - 2 + a] = c[e];
    }
    return g;
  });
  M.indexOf || (M.indexOf = function(a, b) {
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
  var vb = vb || {}, D = String.fromCharCode, jc = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", wb, hc = [];
  N.push(function() {
    (wb = n.logger || v.all.logger) || alert("#logger not found!");
    wb ? p = function(a) {
      A(wb, "P", null, null, a);
    } : n.console && (p = console.log);
    for (var a; a = hc.shift();) {
      p(a);
    }
  });
  p = function(a) {
    hc.push(a);
  };
  var ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", D(960), ")", "(", D(234), D(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", 
  ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", D(9824), "\u2190", D(9829), D(9830), D(9827), D(956), "\u03a9", "\u2193", "\u2192", "%", D(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", D(9619)], y, ma = "", Jb = -1, Ba, Da = [], kc = 0, $a;
  if (5 > J || ec) {
    vb._ontimer = Ca, Ca = "PB100._ontimer()";
  }
  if (q.SafariMobile || q.iOSWebView) {
    var ic = n.onscroll;
    n.onscroll = function(a) {
      var b;
      ic && (b = ic(a));
      ta($a);
      $a = sa(Ca, 64);
      return b;
    };
  }
  9 > J && N.push(function(a) {
    a = A(Q, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    1 < a.offsetHeight && Aa(Q, "pbLCD-AX");
    a.style.cssText = "";
    T(a);
  });
  var Ea = [], ab, bb, ra = 8 > Ac && {"00":{left:0, top:0}, "01":{left:0, top:-30}, "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 
  13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 
  28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 
  45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 
  67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}};
  N.push(function() {
    function a(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title");
      Aa(a, "pbTipPos" + b.toUpperCase());
      A(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      A(a, "div", {className:"pbTail" + c});
      l && d && (a.focus(), a.blur());
    }
    function b(a) {
      if (p && v) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", e = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", h = f.split("pbAlp")[1] || "";
        if ("CS" === e) {
          var k = "_";
        } else {
          k = e, 3 === k.length && (k = k.substr(0, 2)), k = ba[parseInt(k, 16)] || "~";
        }
        g = g.split(" ")[0];
        h = h.split(" ")[0];
        var l = 10 - z(h);
        ra && h ? (f = f.split("pbChr")[1], f = f.split(" ")[0], d(a, f, h, a.innerHTML), b && d(a, e, l, k), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + e, "pbAlp" + l, "pbCsr" + g]}, Ba = 1, n = A(a, "b", b, 0, k), c(a), c(n)) : c(a);
      }
    }
    function c(a) {
      u || h || Z(a, "pbChrCS") && Ea.push(a);
    }
    function d(a, b, c, d) {
      b = ra[b + (w ? "a" : "")] || ra[b];
      b.top += "px";
      a = A(a, "img", {title:d, src:"base:pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Ea.push(a);
    }
    var e = 6 > J ? 1 : 0, f = za("SAMP"), h = 9 > J, l = 5 <= J && 6 > J, k, m, q;
    if (f.length) {
      var n = A(Q, "a", {id:"pbLCD-test", title:"pbLCD-test"}), p = n.offsetWidth, r = n.style, u = void 0 !== r.opacity || void 0 !== r["-moz-opacity"] || void 0 !== r["-khtml-opacity"], v = !u && !h && !ra;
      r = !p || v || ra;
      T(n);
      for (m = -1; k = f[++m];) {
        if (Z(k.parentElement || k.parentNode, "pbLCD")) {
          var w = Z(k, "PB-120") || Z(k, "FX-795P"), y = k.children;
          for (k = y.length; k;) {
            var x = y[--k];
            switch(x.tagName.toUpperCase()) {
              case "A":
                if (r) {
                  for (p || a(x), q = x.children.length; q;) {
                    b(x.children[--q]);
                  }
                }
                Bc ? x.setAttribute("href", "javascript:void(0)") : x.onclick = lc;
                break;
              case "B":
                r && b(x);
            }
          }
        }
      }
      Ea.length ? (setInterval(Fb, 500), Ya([".pbChrCS", "background-position:0 -51px"])) : Fb = null;
      v && Ya([".pbAlp1" + (p ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a10.png)", ".pbAlp2" + (p ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a20.png)", ".pbAlp3" + (p ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a30.png)", ".pbAlp4" + (p ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(base:pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(base:pbLCD/x3_a60.png)", 
      ".pbAlp7", "background-image:url(base:pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(base:pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(base:pbLCD/x3_a90.png)"]);
    }
  });
  525.13 > q.WebKit && (Cc.onclick = function(a) {
    if (bb) {
      return bb = !1, a.preventDefault(), !1;
    }
  });
  var fb = ba[7], Ib = ba[30], nc = ba[113], Ga = D(8337) + D(8331), gb = D(160), rc = D(8194), pc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), qc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), oc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ib + ba[31]).split(""), U = 
  [], eb = [], db, Ha, Hb;
  N.push(function() {
    for (var a = v.all || za("*"), b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    for (a = -1; c = b[++a];) {
      Z(c, "pbList") ? Ia(c) : Z(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ia(c, !0);
    }
    U.length && (p("[pbList] " + U.length + " elements found. WebFont test start."), Fa());
    Hb = !0;
  });
  vb.prettify = Ia;
  var sc = "bad_" + (new ka - 0) + "_";
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

