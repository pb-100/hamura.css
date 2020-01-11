PB100 = {};
(function(yc, m, n, t, ea, tb, x, ub, vb, zc, pa, qa, ra, Ac) {
  function Oa(h, a) {
    var b = x(h.split(a)[1]);
    return 0 <= b ? b : 0;
  }
  function e(h, a) {
    return 0 <= h.indexOf(a);
  }
  function c(h, a) {
    var b = "", q = -1, c;
    if (h = h.split(a)[1]) {
      for (; c = h.charCodeAt(++q);) {
        if (48 <= c && 57 >= c || 46 === c) {
          b += h.charAt(q);
        } else {
          break;
        }
      }
      for (q = b.length; q;) {
        if (46 === b.charCodeAt(--q)) {
          b = b.substr(0, q);
        } else {
          break;
        }
      }
    }
    return b;
  }
  function wb(h, a) {
    var b = 0, q;
    h = h.split(".");
    a = a.split(".");
    for (q = Math.min(h.length, a.length); b < q; ++b) {
      var c = x(h[b]), d = x(a[b]);
      if (c !== d) {
        return c > d ? 1 : -1;
      }
    }
    return h.length === a.length ? 0 : h.length > a.length ? 1 : -1;
  }
  function xb() {
    for (var h = arguments, a = 1, b = h.length, c = h[0], d; a < b; ++a) {
      0 > wb(c, d = h[a]) && (c = d);
    }
    return c;
  }
  function ta(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function va(a) {
    return a === a + "" ? x(a) : a;
  }
  function ha(a) {
    var b = 0, h = Q.length, c;
    Qa && (c = Qa(a));
    Qa = null;
    for (onload === ha && (onload = Ra, onload = null); b < h; ++b) {
      Q[b](a);
    }
    Q = ha = null;
    return c;
  }
  function Sa(a) {
    var b = 0, h = Ta.length, c;
    wa && (c = wa(a));
    wa = null;
    onunload === Sa && (onunload = Ra);
    for (M && qa(M); b < h; ++b) {
      Ta[b]();
    }
    onscroll = onresize = Ra;
    onscroll = onresize = wa = Ua = Va = Sa = Ta = null;
    return c;
  }
  function yb() {
    for (var a = M = 0, b = zb.length; a < b; ++a) {
      zb[a]();
    }
  }
  function xa(a) {
    var b = b || t;
    return Ab ? b.getElementsByTagName(a) : b.all.h(a.toUpperCase());
  }
  function R(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function W(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ya(a, b) {
    var h;
    if (!W(a, b)) {
      if (h = a.className) {
        b = " " + b;
      }
      a.className = h + b;
    }
  }
  function X() {
    function a(b) {
      for (var h = b.rules || b.cssRules, c = -1, q, d; q = h[++c];) {
        if (0 <= (q.selectorText || "").toLowerCase().indexOf(".pblcd")) {
          return b;
        }
        if (q = q.sheet || q.styleSheet) {
          if (q = a(q)) {
            return q;
          }
        }
      }
      if ((b = b.imports) && (d = b.length)) {
        for (c = 0; c < d; ++c) {
          if (q = a(b[c])) {
            return q;
          }
        }
      }
    }
    var b = t.styleSheets, c;
    X = null;
    if (b) {
      var d = 0;
      for (c = b.length; d < c && !(y = a(b[d])); ++d) {
      }
    }
    y && y.readOnly || (y ? (d = y.href.split("/"), d.pop(), ia = d.join("/") + "/") : ia = fc, Ab ? (b = C(fa, "style", {type:"text/css"}), y = b.sheet) : (fa.insertAdjacentHTML("BeforeEnd", "<style type=text/css></style>"), y = b[b.length - 1]));
  }
  function Wa(a) {
    var b = "";
    for (X && X(); a.length;) {
      var c = a.shift(), h = a.shift().split("base:").join(ia), d = c + "{" + h + "}";
      y ? y.addRule ? y.addRule(c, h) : y.insertRule && y.insertRule(d, y.cssRules.length) : b += d;
    }
    b && C(fa, "style", 0, 0, b);
  }
  function Xa(a, b) {
    var c = t.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function C(a, b, c, d, f) {
    function h(a, b) {
      for (var c in b) {
        switch(c) {
          case "class":
          case "className":
            ya(a, b[c]);
            break;
          default:
            a.setAttribute(c, b[c]);
        }
      }
    }
    function q(a, b) {
      var c = a.style, h;
      for (h in b) {
        c[h] = b[h];
      }
    }
    if ("style" === b) {
      var e = !0;
      b = Xa("div", 'a<style type="text/css">' + f + "</style>").lastChild;
    } else {
      b = Xa(b);
    }
    za ? (2 === za && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    za = 0;
    c && h(b, c);
    d && q(b, d);
    f && !e && b.appendChild(t.createTextNode(f));
    return b;
  }
  function Aa() {
    for (var a, b = Ba.length; b;) {
      --b, a = Ba.shift(), a.f(a.p);
    }
  }
  function S(a, b) {
    Ba.length || (Ya = pa(Aa, 64));
    Ba.push({f:a, p:b, uid:++gc});
  }
  function Bb() {
    Za = !Za;
    for (var a = -1, b; b = Ca[++a];) {
      b.style.visibility = Za ? "" : "hidden";
    }
  }
  function hc(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), $a = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Da() {
    Da = null;
    Cb(ab, "PB-100", {"PB-100_canTTF":"base:pbFont/ttf.css", "PB-100_canWOFF":"base:pbFont/woff.css", "PB-100_canEOT":"base:pbFont/eot.css", "PB-100_canSVG":"base:pbFont/svg.css"}, 5000);
  }
  function ab(a) {
    var b = N.style, c = 9 > D ? "x3mask_ie.png" : "x3mask.png";
    if (Db = a) {
      if (void 0 !== b.webkitFontFeatureSettings || void 0 !== b.mozFontFeatureSettings || void 0 !== b.msFontFeatureSettings || void 0 !== b.oFontFeatureSettings || void 0 !== b.fontFeatureSettings) {
        a = C(N, "code", {className:"pbFont", "aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", display:"inline", fontSize:"72px"}, "i"), b = a.offsetWidth, a.innerHTML = Ea, bb = b === a.offsetWidth, R(a);
      }
    } else {
      ya(N, "pbList-noWebFont"), Wa([".pbList font", "background-image:url(base:pbFont/" + c + ")"]), a = ".pbList font{background-image:url(base:pbFont/x3mask_dark.png)}", X && X(), a = a.split("base:").join(ia), !y.addImport && y.insertRule && (b = C(fa, "style", {type:"text/css", media:"(prefers-color-scheme:dark)"}).sheet, b.insertRule(a, b.cssRules.length));
    }
    for (ab = Cb = null; Y.length;) {
      Fa(Y.shift(), cb.shift());
    }
  }
  function Fa(a, b) {
    function c(a) {
      a = a.childNodes;
      for (var b = -1, h; h = a[++b];) {
        switch(h.nodeType) {
          case 1:
            c(h);
            break;
          case 3:
            h.data && h.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && d.push(h);
        }
      }
    }
    var d = [];
    if (ab) {
      -1 === Y.indexOf(a) && (Y.push(a), cb.push(b), Eb && Da && Da());
    } else {
      var h = Y.indexOf(a);
      0 <= h && Y.splice(h, 1) && cb.splice(h, 1);
      for (c(a); a = d.shift();) {
        h = a.data, bb || (h = h.split(Ea).join(Fb)), b ? a.data = h : ic(h.split("\r").join("").split("&yen;").join(jc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(db).split("&amp;").join("&"), a);
      }
    }
  }
  function ic(a, b) {
    function c(a, b) {
      for (var c = ""; b;) {
        b & 1 && (c += a), b >>= 1, a += a;
      }
      return c;
    }
    function d(a, b, d) {
      for (var h, f = -1, e, q; h = b[++f];) {
        for (; 0 <= (e = a.indexOf(h));) {
          q = h.length, a = a.substr(0, e) + c(d, q) + a.substr(e + q);
        }
      }
      return a;
    }
    function h(a) {
      var b = x(a);
      return 0 < b && b === b | 0 && (b = a.indexOf(b) + b.length, b <= a.length) ? b : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), e = [], q, l, g;
    if (function(a) {
      var b = a.indexOf("P");
      if (-1 === b) {
        return !1;
      }
      b = x(a.charAt(b + 1));
      return 0 <= b && 9 >= b;
    }(a)) {
      var m = c("+", a.length);
    } else {
      for ((q = h(a)) ? (m = c("|", q), --q) : (m = "", q = -1); g = a.charAt(++q);) {
        g === db || l ? (m += "~", g === db && (l = !l)) : m += g;
      }
      m = d(m, kc, "^");
      m = d(m, lc, "{");
      m = d(m, mc, "}");
    }
    q = 0;
    for (l = a.length; q < l; ++q) {
      g = a.charAt(q);
      var k = g === Gb, p = " " === g;
      g = k ? " " : g;
      var n = m.charAt(q);
      n = "+|~{}^".indexOf(n) + 1;
      n = f[n];
      "\n" !== g ? (Db ? (8 > D && p && (g = q === l - 1 ? Gb : nc), bb && a.substr(q, 2) === Ea && (g = Ea, ++q), p = p && "str" === n ? ' class="pbList-strsp"' : k ? "" : !p && n ? ' class="pbList-' + n + '"' : "") : (k = Z.indexOf(g), k = -1 === k ? "" : Z.indexOf(g).toString(16).toUpperCase(), k = (k = 1 === k.length ? "0" + k : k) ? "pbChr" + k : "", p = p && "str" === n ? ' class="pbList-strsp"' : p || !k ? "" : n ? ' class="pbList-' + n + (k ? " " + k : "") + '"' : ' class="' + k + '"'), e.push("<font" + 
      p + ">" + g + "</font>")) : e.push("\n");
    }
    e = e.join("");
    if (1 === b.nodeType) {
      b.innerHTML = e;
    } else {
      for (f = Xa("font", e); e = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(e, b);
      }
      R(b);
    }
  }
  function Cb(a, b, c, d) {
    function h() {
      var c = '1.6em "' + b + '"';
      t.fonts.check(c, "i") ? S(a, !0) : t.fonts.load(c).then(function() {
        a(t.fonts.check(c, "i"));
      }, l);
    }
    function f(a) {
      return t.hidden || t.msHidden || t.mozHidden || t.webkitHidden ? !1 : a < new ra - sa;
    }
    function e(c) {
      c && (sa = new ra - 0);
      g(b) ? a(!0) : f(d) ? Pa ? a(!1) : l() : S(e);
    }
    function q() {
      var a = -1, b;
      v = ["sans-serif", "serif"];
      r = C(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (x = {}; b = v[++a];) {
        r.style.fontFamily = b, x[b] = r.offsetWidth;
      }
    }
    function g(a) {
      var b = -1, c;
      q && q();
      q = null;
      for (N.appendChild(r); c = v[++b];) {
        if (r.style.fontFamily = a + "," + c, r.offsetWidth !== x[c]) {
          var d = !0;
          break;
        }
      }
      R(r);
      return d;
    }
    function l() {
      if (9 > D) {
        k();
      } else {
        var a = new Image;
        a.onerror = k;
        a.onload = function() {
          Pa = 1 === a.width * a.height;
          k();
        };
        a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
    function k() {
      Pa ? n(!0) : a(!1);
    }
    function n(b) {
      var d;
      b && (sa = new ra - 0);
      for (d in c) {
        g(d) ? (u = C(N, "div", {"aria-hidden":"true", className:"pbFont-testCssReady", id:"pbFont-testCssReady"}), b = c[d], X && X(), b = b.split("base:").join(ia), y.addImport ? y.addImport(b, ++Hb) : y.insertRule && y.insertRule('@import "' + b + '"', ++Hb), S(p, !0)) : f(100) ? (delete c[d], S(n, !0)) : S(n);
        return;
      }
      a(!1);
    }
    function p(b) {
      b && (sa = new ra - 0);
      1 < u.offsetWidth ? (R(u), d = 100, S(e, !0)) : f(d) ? (R(u), a(!1)) : S(p);
    }
    var sa, Pa, r, u, v, x;
    d = d || 5000;
    (function() {
      var a;
      if (m.MeeGo || 2.2 > m.AOSP || m.WebOS || m.UCWEB || m.WindowsPhone && 10 > D || m.NDS || m.NDSi || m.N3DS) {
        return !1;
      }
      if (6 > D) {
        return !0;
      }
      var b = C(fa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), c = (c = b.sheet || b.styleSheet) ? (a = c.cssRules) && (a = a[0]) ? a.cssText : c.cssText || "" : "";
      a = 0 < c.indexOf("src") && 0 === c.indexOf("@font-face");
      R(b);
      return a;
    })() ? !t.fonts || 603 > m.WebKit ? e(!0) : h() : S(a, !1);
  }
  var k, p, a = ea.userAgent, u = ea.appVersion, eb = x(u) | 0, r = ea.platform, Ga = t.documentElement, fb = t.documentMode, gb = tb.width, hb = tb.height, Ib = n.HTMLAudioElement, Jb = n.performance, Kb = n.Int8Array, oc = void 0 !== n.ontouchstart, O = c(u, "Version/") || c(a, "Version/"), aa = Ga && void 0 !== Ga.style.MozAppearance, Lb = n.operamini, Ha = e(a, "UCWEB"), pc = Ha && c(a, " U2/"), qc = Ha && c(a, "; wds "), ib = c(a.split("_").join("."), "; iPh OS "), rc = c(a, "; Adr "), Mb = 
  e(u, "YJApp-ANDROID"), J = e(r, "Android") || aa && e(u, "Android") || Mb, w = c(r, "Android ") || c(u, "Android ") || c(a, "Android ") || rc, jb = e(r, "Linux"), ba = !Lb && n.opera, Nb = ba && (ba.version && "function" === typeof ba.version ? ba.version() : xb(c(a, "Opera "), O, "" + eb)), Ob = n.opr, ja = !ba && (t.all || fb), E = ja && (fb ? fb : n.g ? t.getElementsByTagName ? 7 : 4 : t.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 5 : 4), Ia = !ja && Ga.msContentZoomFactor, ca = !Ia && 
  n.chrome, kb = aa && c(a, "Goanna/"), K = !kb && aa && c(a, "rv:"), Pb = c(a, "Firefox/"), Qb = c(a, "Opera/"), v = Oa(a, "AppleWebKit/"), T = c(a, "Chrome/"), lb = c(a, "OPR/"), sc = c(u, "KHTML/"), Rb = c(a.toLowerCase(), "iris"), mb = c(a, "FxiOS/"), da = Oa(a, "SamsungBrowser/"), ka;
  if (ka = !da) {
    a: {
      for (var Sb = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ja, nb = Sb.length; Ja = Sb[--nb];) {
        if (e(a, Ja)) {
          ka = 2 > x(O) ? O : 0.9;
          break a;
        }
      }
      var Tb = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (nb = Tb.length; Ja = Tb[--nb];) {
        if (e(a, Ja)) {
          ka = O;
          break a;
        }
      }
      ka = void 0;
    }
  }
  var Ub = ka, Vb = ca && 534.3 >= v, Wb = oc && (v || aa) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && e(a, "Linux x86_64") || !w && Mb, Xb = n.puffinDevice, Ka = Xb && Xb.clientInfo, la = Ka && "iOS" === Ka.os && Ka.osVersion, La = la && Ka.model, ob = !E && t.registerElement, tc = !E && t.execCommand, Yb = jb && ob && "11.0.696.34" === T, U, F, b, ma, pb, qb;
  if ("Nitro" === r) {
    var g = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      g = "NDSi";
      var l = Qb;
    } else {
      if ("New Nintendo 3DS" === r || e(a, "iPhone OS 6_0") && 320 === gb && 240 === hb) {
        g = "New3DS", l = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          g = "N3DS";
          l = c(a, "Version/");
          v = 535;
          var uc = l;
        } else {
          if ("Nintendo Swicth" === r) {
            g = "Swicth", l = c(u, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              g = "WiiU", l = c(u, "NintendoBrowser/"), v = c(u, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === r) {
                g = "Wii";
                l = c(a, "Wii; U; ; ");
                var d = g;
                var f = l;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  g = "PSVita", l = b, d = g, f = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    g = "PSP";
                    l = b;
                    var Zb = 3.3;
                    d = g;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      g = "PS3", l = b, d = g, f = b, 0 > wb("4.10", b) && (k = "Sony", p = b);
                    } else {
                      if (e(a, "Xbox One")) {
                        g = "XboxOne", l = 1;
                      } else {
                        if (e(a, "Xbox")) {
                          g = "Xbox360", l = 1;
                        } else {
                          if (2 === eb && e(a, "Sony/COM2/")) {
                            g = "Mylo";
                            l = 2;
                            Zb = 3.4;
                            d = g;
                            f = 2;
                            var Ma = !0;
                          } else {
                            if (0 === r.indexOf("iP") || ib || la) {
                              if (la) {
                                switch(l = la, La.substr(0, 4)) {
                                  case "iPho":
                                    var G = "iPhone";
                                    var V = x(La.substr(6));
                                    var H = !0;
                                    break;
                                  case "iPad":
                                    G = "iPad";
                                    V = x(La.substr(4));
                                    var I = !0;
                                    break;
                                  case "iPod":
                                    G = "iPod";
                                    V = x(La.substr(4));
                                    var $b = !0;
                                }
                              } else {
                                ib ? l = ib : l = c(u.split("_").join("."), "OS ");
                                l || (F = !0, l = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ea.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : ub.isNaN ? 9.2 : n.SharedWorker ? Jb && Jb.now ? 8.0 : 8.4 : tc ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : Kb ? 4.3 : Ib ? 4.1 : 3.2);
                                var rb = 1 === n.devicePixelRatio;
                                var z = gb === 1.5 * hb || 1.5 * gb === hb;
                                0 === r.indexOf("iPhone") ? (G = "iPhone", V = z ? rb ? {max:3} : {min:4, max:5} : {max:6}, H = !0) : 0 === r.indexOf("iPad") ? (G = "iPad", V = rb ? {max:2} : {min:3}, I = !0) : 0 === r.indexOf("iPod") && (G = "iPod", V = z ? rb ? {max:3} : 4 : {min:5}, $b = !0);
                              }
                              la || !ea.standalone && void 0 === t.fullscreenEnabled && void 0 === t.webkitFullscreenEnabled ? (qb = !0, k = "iOSWebView") : (k = "SafariMobile", d = "Safari", f = l);
                              g = "iOS";
                              p = l;
                            } else {
                              if (e(a, "Kobo")) {
                                g = "Kobo", k = "AOSP", p = 2.2, d = k, f = p, J = !0;
                              } else {
                                if (e(a, "EBRD")) {
                                  g = "SonyReader", k = "AOSP", p = 2.2, d = k, f = p;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    g = "ChromeOS", l = b;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      g = "FirefoxOS", l = 18.1 > K ? "1.0.1" : 19 > K ? 1.1 : 27 > K ? 1.2 : 29 > K ? 1.3 : 31 > K ? 1.4 : 33 > K ? 2.0 : 35 > K ? 2.1 : 38 > K ? 2.2 : 45 > K ? 2.5 : 2.6, e(a, "Mobile") ? H = !0 : e(a, "Tablet") && (I = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        g = "webOS", l = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), d = g, f = l, e(a, "webOS.TV") || e(a, "/SmartTV") || (H = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          g = "Tizen", l = b, d = "Samsung", f = da, k = d, p = f, H = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(u, "Windows Phone OS ") || qc) {
                                            var Na = !0;
                                            l = b;
                                            H = !0;
                                          } else {
                                            if (Ia && "ARM" === r) {
                                              Na = !0, l = 10, F = H = !0;
                                            } else {
                                              if (ja && e(u, "ZuneWP")) {
                                                Na = !0, l = 11 === E ? 8.1 : 10 === E ? 8 : 9 === E ? 7.5 : 7 === E ? 7 : "?", F = H = !0;
                                              } else {
                                                if (e(a, "FOMA;")) {
                                                  g = "FeaturePhone", H = !0;
                                                } else {
                                                  if (e(a, "SoftBank;")) {
                                                    g = "FeaturePhone", H = !0;
                                                  } else {
                                                    if (e(a, "KFMUWI")) {
                                                      var P = !0;
                                                      l = 6.3;
                                                      var A = I = !0;
                                                    } else {
                                                      if (e(a, "KFKAWI")) {
                                                        P = !0, l = 6, A = I = !0;
                                                      } else {
                                                        if (e(a, "KFSUWI") || e(a, "KFAUWI") || e(a, "KFDOWI")) {
                                                          P = !0, l = 5, A = I = !0;
                                                        } else {
                                                          if (e(a, "KFGIWI")) {
                                                            P = !0, l = 5, A = I = !0;
                                                          } else {
                                                            if (e(a, "KFARWI") || e(a, "KFSAWA") || e(a, "KFSAWI")) {
                                                              P = !0, l = 5 <= x(w) ? 5 : 4, A = I = !0;
                                                            } else {
                                                              if (e(a, "KFSOWI") || e(a, "KFTHWA") || e(a, "KFTHWI") || e(a, "KFAPWA") || e(a, "KFAPWI")) {
                                                                P = !0, l = 3, A = I = !0;
                                                              } else {
                                                                if (e(a, "KFOT") || e(a, "KFTT") || e(a, "KFJWA") || e(a, "KFJWI")) {
                                                                  P = !0, l = 2, A = I = !0;
                                                                } else {
                                                                  if (e(a, "Kindle Fire")) {
                                                                    P = !0, l = 1, A = I = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      g = "Kindle", l = b, k = "AOSP", p = 2.2, d = k, f = p;
                                                                    } else {
                                                                      if (e(a, "AmazonWebAppPlatform") || e(a, "; AFT")) {
                                                                        P = !0, l = w, A = !0;
                                                                      } else {
                                                                        if (e(a, "MeeGo")) {
                                                                          g = "MeeGo";
                                                                        } else {
                                                                          if (e(a, "Maemo")) {
                                                                            g = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Rb) {
                                                                              g = "WindowsMobile", Ma = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                g = r, Ma = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  g = r, l = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    g = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      l = b;
                                                                                    }
                                                                                    var ac = !0;
                                                                                  } else {
                                                                                    e(a, "BlackBerry") || e(a, "BB10") ? (g = "BlackBerry", l = O, H = !0) : e(a, "SunOS") || e(a, "Sun Solaris") ? g = "SunOS" : e(a, "FreeBSD") ? g = "FreeBSD" : e(a, "OpenBSD") ? g = "OpenBSD" : e(a, "NetBSD") ? g = "NetBSD" : J && aa ? (e(a, "Android 4.4;") ? z = {min:2.3} : 4 <= x(w) ? z = w : z = {min:2.2}, l = z, Wb && (F = !0)) : J && ba ? (w ? z = w : (z = {min:1.6}, F = !0), l = z, e(a, "Tablet") ? I = !0 : 
                                                                                    H = !0) : w ? (l = w, J = !0) : jb && Wb ? (U = !0, da ? z = {min:4.4} : ca && !Vb || Ob || lb ? z = {min:4} : (z = w = void 0 !== Ga.style.touchAction ? {min:5} : ob ? 4.4 : Kb ? ea.connection ? n.searchBoxJavaBridge_ || ca ? ub.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= v ? 3 : 533 <= v ? Ib ? 2.3 : 2.2 : 530 <= v ? 2.0 : 1.5, Ub && (k = "Samsung", p = Ub)), l = z, J = !0) : Yb ? (l = {min:5}, U = J = !0) : jb && (e(a, 
                                                                                    "Ubuntu") ? g = "Ubuntu" : (b = c(a, "Mint/")) ? (g = "Mint", l = b) : (b = c(a, "Fedora/")) ? (g = "Fedora", l = b) : g = e(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  P && (g = "FireOS");
  J && (g = g || "Android");
  Na && (g = "WindowsPhone");
  k || (A = A || J, ba ? (k = A || Ma || H || I ? "PrestoMobile" : "Presto", p = Nb) : ja ? ((z = Oa(u, "Trident/") + 4) && z !== E && (d = "IEHost", f = z), 10 <= E && 6.2 <= l && 7 > l && 0 === screenY && innerHeight + 1 !== outerHeight && (d = "ModernIE", f = E), Ma || H || I || $b ? k = "TridentMobile" : ac && 5 <= E ? (k = "Tasman", d = "MacIE", f = E) : (k = "Trident", ac && (d = "MacIE", f = E)), p = E) : Ia ? (k = Na ? "EdgeMobile" : "EdgeHTML", p = c(u, "Edge/")) : kb ? (k = "Goanna", p = 
  kb) : aa ? (k = A ? "Fennec" : "Gecko", p = K || Pb) : da ? (k = "Samsung", p = da, U && (F = !0)) : (b = Zb || c(a, "NetFront/")) ? (k = "NetFront", p = b) : (b = c(a, "iCab")) ? (k = "iCab", p = b) : (b = xb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || Lb && O) ? (k = "OperaMini", p = b, g || (e(a, "iPhone") ? G = "iPhone" : e(a, "iPad") ? G = "iPad" : e(a, "iPod") && (G = "iPod"), G && (g = "iOS"))) : Ha ? (k = "UCWEB", p = pc) : sc ? (k = "KHTML", p = eb) : J && Vb ? (k = "AOSP", p = w, ma = 
  !0, U && (F = !0)) : ca || Ob || lb ? (k = A ? "ChromiumMobile" : "Chromium", p = T, U && (F = !0)) : J && ob ? (k = "ChromeWebView", p = 5 > x(w) ? w : T, ma = !0, n.requestFileSystem || n.webkitRequestFileSystem || (pb = !0), U && (F = !0)) : J && (O || U) ? (k = "AOSP", p = w, ma = !0, U && (F = !0)) : T ? (k = A ? "ChromiumMobile" : "Chromium", p = T) : v && (k = "WebKit", p = v));
  if (!d) {
    if (b = Ia && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      d = "Edge", f = b;
    } else {
      if (b = c(u, "Coast/")) {
        d = "Coast", f = b;
      } else {
        if (b = c(u, "OPT/")) {
          d = "OperaTouch", f = b, F = F || !e(u, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            d = "Yahoo", f = b;
          } else {
            if (!Ha && (b = c(a, "UCBrowser/"))) {
              d = "UC", f = b;
            } else {
              if (b = c(a, "SilK/")) {
                d = "Silk", f = b;
              } else {
                if (b = c(a, "Vivaldi/")) {
                  d = "Vivaldi", f = b;
                } else {
                  if (b = c(a, "QQBrowser/")) {
                    d = "QQ", f = b;
                  } else {
                    if (b = c(a, "YaBrowser/")) {
                      d = "Yandex", f = b;
                    } else {
                      if (b = c(a, "coc_coc_browser/")) {
                        d = "coccoc", f = b;
                      } else {
                        if (b = c(a, "Camino/")) {
                          d = "Camino", f = b;
                        } else {
                          if (e(a, "SE 2.X MetaSr 1.0")) {
                            d = "Sogou";
                          } else {
                            if (b = c(a, "Focus/") || 9 > x(mb) && qb && 11 <= x(l) && mb) {
                              d = "Focus", f = b;
                            } else {
                              if (b = c(a, "Klar/")) {
                                d = "Klar", f = b;
                              } else {
                                if (b = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ")) {
                                  d = "AOL", f = b;
                                } else {
                                  if (b = c(a, "IceDragon/")) {
                                    d = "IceDragon", f = b;
                                  } else {
                                    if (b = c(a, "Iceweasel/")) {
                                      d = "Iceweasel", f = b;
                                    } else {
                                      if (b = c(a, "TenFourFox/")) {
                                        d = "ITenFourFox", f = b;
                                      } else {
                                        if (b = c(a, "Waterfox/")) {
                                          d = "Waterfox", f = b;
                                        } else {
                                          if (b = c(a, "GNUzilla/")) {
                                            d = "GNUzilla", f = b;
                                          } else {
                                            if (b = c(a, "SeaMonkey/")) {
                                              d = "SeaMonkey", f = b;
                                            } else {
                                              if (b = c(a, "PaleMoon/")) {
                                                d = "PaleMoon", f = b;
                                              } else {
                                                if (b = c(a, "Basilisk/")) {
                                                  d = "Basilisk", f = b;
                                                } else {
                                                  if ((b = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/")) || e(a, "Maxthon")) {
                                                    d = "Maxthon", f = b || 1;
                                                  } else {
                                                    if (e(a, "Avant Browser;")) {
                                                      d = "Avant";
                                                    } else {
                                                      if (b = c(a, "Lunascape/")) {
                                                        d = "Lunascape", f = b;
                                                      } else {
                                                        if (b = c(a, "Konqueror/")) {
                                                          d = "Konqueror", f = b;
                                                        } else {
                                                          if (b = c(a, "Midori/")) {
                                                            d = "Midori", f = b;
                                                          } else {
                                                            if (b = c(a, "OmniWeb/")) {
                                                              d = "OmniWeb", f = b;
                                                            } else {
                                                              if (b = c(a, "Roccat/")) {
                                                                d = "Roccat", f = b;
                                                              } else {
                                                                if (b = c(a, "Epiphany/")) {
                                                                  d = "Epiphany", f = b;
                                                                } else {
                                                                  if (b = c(a, "WebPositive/")) {
                                                                    d = "WebPositive", f = b;
                                                                  } else {
                                                                    if ((b = c(a, "Iron/")) || e(a, " Iron ")) {
                                                                      d = "Iron", f = b || ca && T;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        d = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || e(a, " Brave ")) {
                                                                          d = "Brave", f = b || ca && T;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            d = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || n.FNRBrowser) {
                                                                              d = "Sleipnir", b && (f = b);
                                                                            } else {
                                                                              if (b = c(a, "Puffin/")) {
                                                                                d = "Puffin", f = b;
                                                                              } else {
                                                                                if (b = c(a, "Dooble/")) {
                                                                                  d = "Dooble", f = b;
                                                                                } else {
                                                                                  if (b = c(a, "Flock/")) {
                                                                                    d = "Flock", f = b;
                                                                                  } else {
                                                                                    if (b = c(a, "Galeon/")) {
                                                                                      d = "Galeon", f = b;
                                                                                    } else {
                                                                                      if (b = c(a, "Falkon/")) {
                                                                                        d = "Falkon", f = b;
                                                                                      } else {
                                                                                        if (b = c(a, "Iceape/")) {
                                                                                          d = "Iceape", f = b;
                                                                                        } else {
                                                                                          if (b = c(a, "K-Meleon/")) {
                                                                                            d = "KMeleon", f = b;
                                                                                          } else {
                                                                                            if (b = uc || c(u, "NX/")) {
                                                                                              d = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                d = "NN", f = b;
                                                                                              } else {
                                                                                                if (Rb) {
                                                                                                  d = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (e(u, "FBAN/")) {
                                                                                                    d = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(u, "Line/")) {
                                                                                                      d = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        d = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          d = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = mb || aa && (Pb || p)) {
                                                                                                            d = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = Nb || lb || Qb) {
                                                                                                              d = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (ja) {
                                                                                                                d = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (da) {
                                                                                                                  d = k, f = da;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ca || Yb && ma) && T) {
                                                                                                                    d = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (ma && !pb) {
                                                                                                                      d = k, f = p;
                                                                                                                    } else {
                                                                                                                      if (qb || pb) {
                                                                                                                        d = "unknown";
                                                                                                                      } else {
                                                                                                                        if (e(a, "Safari") || O) {
                                                                                                                          d = "Safari", f = O || (73 > v ? 0.8 : 85 > v ? 0.9 : 100 > v ? 1 : 125 > v ? 1.1 : 312 > v ? 1.2 : 412 > v ? 1.3 : 419.3 >= v ? 2 : 525.13 >= v ? 3 : 525.25 >= v ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  g && (m.PLATFORM = g, l ? (m.PLATFORM_VERSION = ta(l), m[g] = va(l)) : m[g] = !0);
  k && (m.ENGINE = k, p ? (m.ENGINE_VERSION = ta(p), m[k] = va(p)) : m[k] = !0, d || (d = k, f = p));
  d && (m.BRAND = d, f ? (m.BRAND_VERSION = ta(f), m[d] = va(f)) : m[d] = !0);
  G && (m.DEVICE = G, V ? (m.DEVICE_VERSION = ta(V), m[G] = va(V)) : m[G] = !0);
  F && (m.PC_MODE = !0);
  var Q = [], Ta = [], zb = [], bc = [], Ra = new vb, cc = t.scripts, Ab = !!t.getElementsByTagName, N = t.body, D = m.Trident || m.TridentMobile, dc = m.Tasman, vc = m.Presto || m.PrestoMobile, wc = m.OperaMini && m.UCWEB;
  D || dc || (new vb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Qa = n.onload, wa = n.onunload, Ua = n.onscroll, Va = n.onresize, M;
  onload = ha;
  onunload = Sa;
  onscroll = function(a) {
    var b = 0, c = bc.length, d;
    Ua && (d = Ua(a));
    if (!ha) {
      for (; b < c; ++b) {
        bc[b]();
      }
    }
    (m.SafariMobile || m.iOSWebView) && M && (qa(M), M = pa(yb, 100));
    return d;
  };
  onresize = function(a) {
    var b;
    Va && (b = Va(a));
    ha || (M && qa(M), M = pa(yb, 100));
    return b;
  };
  var xc = xa("html")[0];
  var fa = xa("head")[0];
  var na = cc[cc.length - 1].src.split("/");
  --na.length;
  na = na.join("/");
  m.IEHost && 5.5 > D && (Q[Q.length] = function() {
    var a = t.createElement("link");
    fa.appendChild(a);
    a.setAttribute("href", (na ? na + "/" : "") + "ie5win.css");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  });
  var L = Array.prototype;
  L.pop || (L.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  L.push || (L.push = function() {
    for (var a = arguments, b = 0, c = a.length, d = this.length; b < c; ++b) {
      this[d + b] = a[b];
    }
    return this.length;
  });
  L.shift || (L.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  L.splice || (L.splice = function(a, b) {
    var c = arguments, d = c.length - 2 - b, f = this.slice(a, a + b), e;
    if (0 < d) {
      var h = this.length - 1;
      for (e = a + b; h >= e; --h) {
        this[h + d] = this[h];
      }
    } else {
      if (0 > d) {
        h = a + b;
        for (e = this.length; h < e; ++h) {
          this[h + d] = this[h];
        }
        this.length += d;
      }
    }
    h = 2;
    for (e = c.length; h < e; ++h) {
      this[h - 2 + a] = c[h];
    }
    return f;
  });
  L.indexOf || (L.indexOf = function(a, b) {
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
  var fc = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", B = String.fromCharCode, sb = sb || {}, Z = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", B(960), ")", "(", B(234), B(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", B(9824), "\u2190", B(9829), B(9830), B(9827), B(956), "\u03a9", "\u2193", "\u2192", "%", B(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", B(9619)], y, ia = "", Hb = -1, za, Ba = [], gc = 0, Ya;
  if (5 > D || dc) {
    sb._ontimer = Aa, Aa = "PB100._ontimer()";
  }
  if (m.SafariMobile || m.iOSWebView) {
    var ec = n.onscroll;
    n.onscroll = function(a) {
      var b;
      ec && (b = ec(a));
      qa(Ya);
      Ya = pa(Aa, 64);
      return b;
    };
  }
  9 > D && Q.push(function(a) {
    a = C(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    1 < a.offsetHeight && ya(N, "pbLCD-AX");
    a.style.cssText = "";
    R(a);
  });
  var Ca = [], Za, $a, oa = 8 > vc && {"00":{left:0, top:0}, "01":{left:0, top:-30}, "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 
  13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 
  28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 
  45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 
  67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}};
  Q.push(function() {
    function a(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title");
      ya(a, "pbTipPos" + b.toUpperCase());
      C(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      C(a, "div", {className:"pbTail" + c});
      l && d && (a.focus(), a.blur());
    }
    function b(a) {
      if (r && v) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", f = b.substr(1), e = a.className, h = e.split("pbCsr")[1] || "", g = e.split("pbAlp")[1] || "";
        if ("CS" === f) {
          var k = "_";
        } else {
          k = f, 3 === k.length && (k = k.substr(0, 2)), k = Z[parseInt(k, 16)] || "~";
        }
        h = h.split(" ")[0];
        g = g.split(" ")[0];
        var l = 10 - x(g);
        oa && g ? (e = e.split("pbChr")[1], e = e.split(" ")[0], d(a, e, g, a.innerHTML), b && d(a, f, l, k), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + f, "pbAlp" + l, "pbCsr" + h]}, za = 1, p = C(a, "b", b, 0, k), c(a), c(p)) : c(a);
      }
    }
    function c(a) {
      u || g || W(a, "pbChrCS") && Ca.push(a);
    }
    function d(a, b, c, d) {
      b = oa[b + (y ? "a" : "")] || oa[b];
      b.top += "px";
      a = C(a, "img", {title:d, src:"base:pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Ca.push(a);
    }
    var e = 6 > D ? 1 : 0, f = xa("SAMP"), g = 9 > D, l = 5 <= D && 6 > D, k, m, n;
    if (f.length) {
      var p = C(N, "a", {id:"pbLCD-test", title:"pbLCD-test"}), r = p.offsetWidth, t = p.style, u = void 0 !== t.opacity || void 0 !== t["-moz-opacity"] || void 0 !== t["-khtml-opacity"], v = !u && !g && !oa;
      t = !r || v || oa;
      R(p);
      for (m = -1; k = f[++m];) {
        if (W(k.parentElement || k.parentNode, "pbLCD")) {
          var y = W(k, "PB-120") || W(k, "FX-795P"), z = k.children;
          for (k = z.length; k;) {
            var w = z[--k];
            switch(w.tagName.toUpperCase()) {
              case "A":
                if (t) {
                  for (r || a(w), n = w.children.length; n;) {
                    b(w.children[--n]);
                  }
                }
                wc ? w.setAttribute("href", "javascript:void(0)") : w.onclick = hc;
                break;
              case "B":
                t && b(w);
            }
          }
        }
      }
      Ca.length ? (setInterval(Bb, 500), Wa([".pbChrCS", "background-position:0 -51px"])) : Bb = null;
      v && Wa([".pbAlp1" + (r ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a10.png)", ".pbAlp2" + (r ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a20.png)", ".pbAlp3" + (r ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a30.png)", ".pbAlp4" + (r ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(base:pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(base:pbLCD/x3_a60.png)", 
      ".pbAlp7", "background-image:url(base:pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(base:pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(base:pbLCD/x3_a90.png)"]);
    }
  });
  525.13 > m.WebKit && (xc.onclick = function(a) {
    if ($a) {
      return $a = !1, a.preventDefault(), !1;
    }
  });
  var db = Z[7], Fb = Z[30], jc = Z[113], Ea = B(8337) + B(8331), Gb = B(160), nc = B(8194), lc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), mc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), kc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Fb + Z[31]).split(""), Y = [], 
  cb = [], Db, bb, Eb;
  Q.push(function() {
    for (var a = t.all || xa("*"), b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    for (a = -1; c = b[++a];) {
      W(c, "pbList") ? Fa(c) : W(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Fa(c, !0);
    }
    Y.length && Da();
    Eb = !0;
  });
  sb.prettify = Fa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

