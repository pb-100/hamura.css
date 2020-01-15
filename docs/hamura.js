PB100 = {};
(function(zc, q, m, v, fa, ub, y, vb, wb, Ac, qa, ra, sa, Bc) {
  function Oa(g, a) {
    var b = y(g.split(a)[1]);
    return 0 <= b ? b : 0;
  }
  function e(g, a) {
    return 0 <= g.indexOf(a);
  }
  function c(g, a) {
    var b = "", r = -1, c;
    if (g = g.split(a)[1]) {
      for (; c = g.charCodeAt(++r);) {
        if (48 <= c && 57 >= c || 46 === c) {
          b += g.charAt(r);
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
  function xb(g, a) {
    var b = 0, r;
    g = g.split(".");
    a = a.split(".");
    for (r = Math.min(g.length, a.length); b < r; ++b) {
      var c = y(g[b]), d = y(a[b]);
      if (c !== d) {
        return c > d ? 1 : -1;
      }
    }
    return g.length === a.length ? 0 : g.length > a.length ? 1 : -1;
  }
  function yb() {
    for (var g = arguments, a = 1, b = g.length, c = g[0], d; a < b; ++a) {
      0 > xb(c, d = g[a]) && (c = d);
    }
    return c;
  }
  function ta(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function va(a) {
    return a === a + "" ? y(a) : a;
  }
  function ja(a) {
    var b = 0, g = R.length, c;
    Qa && (c = Qa(a));
    Qa = null;
    for (onload === ja && (onload = Ra, onload = null); b < g; ++b) {
      R[b](a);
    }
    R = ja = null;
    return c;
  }
  function Sa(a) {
    var b = 0, g = Ta.length, c;
    wa && (c = wa(a));
    wa = null;
    onunload === Sa && (onunload = Ra);
    for (M && ra(M); b < g; ++b) {
      Ta[b]();
    }
    onscroll = onresize = Ra;
    onscroll = onresize = wa = Ua = Va = Sa = Ta = null;
    return c;
  }
  function zb() {
    for (var a = M = 0, b = Ab.length; a < b; ++a) {
      Ab[a]();
    }
  }
  function xa(a) {
    var b = b || v;
    return Bb ? b.getElementsByTagName(a) : b.all.h(a.toUpperCase());
  }
  function S(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function X(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ya(a, b) {
    var g;
    if (!X(a, b)) {
      if (g = a.className) {
        b = " " + b;
      }
      a.className = g + b;
    }
  }
  function Y() {
    function a(b) {
      if (!b.href || 0 === location.href.indexOf(b.href.split("/").splice(0, 3).join("/"))) {
        for (var g = b.rules || b.cssRules, c = -1, r, d; r = g[++c];) {
          if (0 <= (r.selectorText || "").toLowerCase().indexOf(".pblcd")) {
            return b;
          }
          if (r = r.sheet || r.styleSheet) {
            if (r = a(r)) {
              return r;
            }
          }
        }
        if ((b = b.imports) && (d = b.length)) {
          for (c = 0; c < d; ++c) {
            if (r = a(b[c])) {
              return r;
            }
          }
        }
      }
    }
    var b = v.styleSheets, c;
    Y = null;
    if (b) {
      var d = 0;
      for (c = b.length; d < c && !(t = a(b[d])); ++d) {
      }
    }
    if (!t || t.readOnly) {
      t ? (d = t.href.split("/"), d.pop(), ka = d.join("/") + "/") : ka = gc, Bb ? (b = C(ha, "style", {type:"text/css"}), t = b.sheet || b.styleSheet) : (ha.insertAdjacentHTML("BeforeEnd", "<style type=text/css></style>"), t = b[b.length - 1]);
    }
  }
  function Wa(a) {
    var b = "";
    for (Y && Y(); a.length;) {
      var c = a.shift(), g = a.shift().split("base:").join(ka), d = c + "{" + g + "}";
      t ? t.addRule ? t.addRule(c, g) : t.insertRule && t.insertRule(d, t.cssRules.length) : b += d;
    }
    b && C(ha, "style", 0, 0, b);
  }
  function Xa(a, b) {
    var c = v.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function C(a, b, c, d, f) {
    function g(a, b) {
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
    function r(a, b) {
      var c = a.style, g;
      for (g in b) {
        c[g] = b[g];
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
    c && g(b, c);
    d && r(b, d);
    f && !e && b.appendChild(v.createTextNode(f));
    return b;
  }
  function Aa() {
    for (var a, b = Ba.length; b;) {
      --b, a = Ba.shift(), a.f(a.p);
    }
  }
  function N(a, b) {
    Ba.length || (Ya = qa(Aa, 64));
    Ba.push({f:a, p:b, uid:++hc});
  }
  function Cb() {
    Za = !Za;
    for (var a = -1, b; b = Ca[++a];) {
      b.style.visibility = Za ? "" : "hidden";
    }
  }
  function ic(a) {
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
    Db(ab, "PB-100", {"PB-100_canTTF":"base:pbFont/ttf.css", "PB-100_canWOFF":"base:pbFont/woff.css", "PB-100_canEOT":"base:pbFont/eot.css", "PB-100_canSVG":"base:pbFont/svg.css"}, 5000);
  }
  function ab(a) {
    var b = O.style, c = 9 > I ? "x3mask_ie.png" : "x3mask.png";
    if (Eb = a) {
      if (void 0 !== b.webkitFontFeatureSettings || void 0 !== b.mozFontFeatureSettings || void 0 !== b.msFontFeatureSettings || void 0 !== b.oFontFeatureSettings || void 0 !== b.fontFeatureSettings) {
        a = C(O, "code", {className:"pbFont", "aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", display:"inline", fontSize:"72px"}, "i"), b = a.offsetWidth, a.innerHTML = Ea, bb = b === a.offsetWidth, S(a);
      }
    } else {
      ya(O, "pbList-noWebFont"), Wa([".pbList font", "background-image:url(base:pbFont/" + c + ")"]), a = "body .pbList font{background-image:url(base:pbFont/x3mask_dark.png)}", Y && Y(), a = a.split("base:").join(ka), t.addImport || t.insertRule && C(ha, "style", {type:"text/css", media:"only screen and (prefers-color-scheme:dark)"}, null, a);
    }
    for (ab = Db = null; Z.length;) {
      Fa(Z.shift(), cb.shift());
    }
  }
  function Fa(a, b) {
    function c(a) {
      a = a.childNodes;
      for (var b = -1, g; g = a[++b];) {
        switch(g.nodeType) {
          case 1:
            c(g);
            break;
          case 3:
            g.data && g.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && d.push(g);
        }
      }
    }
    var d = [];
    if (ab) {
      -1 === Z.indexOf(a) && (Z.push(a), cb.push(b), Fb && Da && Da());
    } else {
      var g = Z.indexOf(a);
      0 <= g && Z.splice(g, 1) && cb.splice(g, 1);
      for (c(a); a = d.shift();) {
        g = a.data, bb || (g = g.split(Ea).join(Gb)), b ? a.data = g : jc(g.split("\r").join("").split("&yen;").join(kc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(db).split("&amp;").join("&"), a);
      }
    }
  }
  function jc(a, b) {
    function c(a, b) {
      for (var c = ""; b;) {
        b & 1 && (c += a), b >>= 1, a += a;
      }
      return c;
    }
    function d(a, b, d) {
      for (var g, f = -1, e, r; g = b[++f];) {
        for (; 0 <= (e = a.indexOf(g));) {
          r = g.length, a = a.substr(0, e) + c(d, r) + a.substr(e + r);
        }
      }
      return a;
    }
    function g(a) {
      var b = y(a), c = "" + b;
      return 0 < b && b === b | 0 && (b = a.indexOf(c) + c.length, b <= a.length) ? b : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), e = [], r = "", h = -1, l, k;
    if (function(a) {
      var b = a.indexOf("P");
      if (-1 === b) {
        return !1;
      }
      b = y(a.charAt(b + 1));
      return 0 <= b && 9 >= b;
    }(a)) {
      r = c("+", a.length);
    } else {
      for (0 <= (h = g(a)) && (r = c("|", h), --h); k = a.charAt(++h);) {
        k === db || l ? (r += "~", k === db && (l = !l)) : r += k;
      }
      r = d(r, lc, "^");
      r = d(r, mc, "{");
      r = d(r, nc, "}");
    }
    h = 0;
    for (l = a.length; h < l; ++h) {
      k = a.charAt(h);
      var n = k === eb, m = " " === k;
      k = n ? " " : k;
      var p = r.charAt(h), v = u, u = "|" === p;
      p = f["+|~{}^".indexOf(p) + 1];
      if ("\n" !== k) {
        if (Eb) {
          8 > I && m && (k = h === l - 1 ? eb : oc), bb && a.substr(h, 2) === Ea && (k = Ea, ++h), m = m && "str" === p ? ' class="pbList-strsp"' : n ? "" : !m && p ? ' class="pbList-' + p + '"' : "";
        } else {
          var t = aa.indexOf(k);
          t = -1 === t ? "" : aa.indexOf(k).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          m = m && "str" === p ? ' class="pbList-strsp"' : m || !t ? "" : p ? ' class="pbList-' + p + (t ? " " + t : "") + '"' : ' class="' + t + '"';
        }
        v && n && (q.WebKit || q.SafariMobile || q.iOSWebView) && (k = eb);
        e.push("<font" + m + ">" + k + "</font>");
      } else {
        e.push(k);
      }
    }
    e = e.join("");
    if (1 === b.nodeType) {
      b.innerHTML = e;
    } else {
      for (f = Xa("font", e); e = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(e, b);
      }
      S(b);
    }
  }
  function Db(a, b, c, d) {
    function g() {
      var c = '1.6em "' + b + '"';
      v.fonts.load(c).then(function() {
        v.fonts.check(c, "i");
        h(b) ? N(a, !0) : N(l);
      }, l);
    }
    function f(a) {
      return v.hidden || v.msHidden || v.mozHidden || v.webkitHidden ? !1 : a < new sa - p;
    }
    function e(c) {
      c && (p = new sa - 0);
      h(b) ? a(!0) : f(d) ? Pa ? a(!1) : l() : N(e);
    }
    function r() {
      var a = -1, b;
      r = null;
      w = ["sans-serif", "serif"];
      W = C(O, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (y = {}; b = w[++a];) {
        W.style.fontFamily = b, y[b] = W.offsetWidth;
      }
    }
    function h(a) {
      var b = -1, c;
      r && r();
      for (O.appendChild(W); c = w[++b];) {
        if (W.style.fontFamily = '"' + a + '",' + c, W.offsetWidth !== y[c]) {
          var d = !0;
          break;
        }
      }
      S(W);
      return d;
    }
    function l() {
      if (9 > I) {
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
      Pa ? m(!0) : a(!1);
    }
    function m(b) {
      var d;
      b && (p = new sa - 0);
      for (d in c) {
        h(d) ? (u = C(O, "div", {"aria-hidden":"true", className:"pbFont-testCssReady", id:"pbFont-testCssReady"}), b = c[d], Y && Y(), b = b.split("base:").join(ka), t.addImport ? t.addImport(b, ++Hb) : t.insertRule && t.insertRule('@import "' + b + '"', ++Hb), N(n, !0)) : f(100) ? (delete c[d], N(m, !0)) : N(m);
        return;
      }
      a(!1);
    }
    function n(b) {
      b && (p = new sa - 0);
      1 < u.offsetWidth ? (S(u), d = 100, N(e, !0)) : f(d) ? (S(u), a(!1)) : N(n);
    }
    var p, Pa, W, u, w, y;
    d = d || 5000;
    (function() {
      var a;
      if (q.MeeGo || 2.2 > q.AOSP || q.WebOS || q.UCWEB || 10 > q.TridentMobile || q.NDS || q.NDSi || q.N3DS) {
        return !1;
      }
      if (6 > I) {
        return !0;
      }
      var b = C(ha, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), c = (c = b.sheet || b.styleSheet) ? (a = c.cssRules) && (a = a[0]) ? a.cssText : c.cssText || "" : "";
      a = 0 < c.indexOf("src") && 0 === c.indexOf("@font-face");
      S(b);
      return a;
    })() ? !v.fonts || 603 > q.WebKit ? e(!0) : g() : N(a, !1);
  }
  var k, n, a = fa.userAgent, u = fa.appVersion, fb = y(u) | 0, p = fa.platform, Ga = v.documentElement, gb = v.documentMode, hb = ub.width, ib = ub.height, Ib = m.HTMLAudioElement, Jb = m.performance, Kb = m.Int8Array, pc = void 0 !== m.ontouchstart, P = c(u, "Version/") || c(a, "Version/"), ba = Ga && void 0 !== Ga.style.MozAppearance, Lb = m.operamini, Ha = e(a, "UCWEB"), qc = Ha && c(a, " U2/"), rc = Ha && c(a, "; wds "), jb = c(a.split("_").join("."), "; iPh OS "), sc = c(a, "; Adr "), Mb = 
  e(u, "YJApp-ANDROID"), J = e(p, "Android") || ba && e(u, "Android") || Mb, x = c(p, "Android ") || c(u, "Android ") || c(a, "Android ") || sc, kb = e(p, "Linux"), ca = !Lb && m.opera, Nb = ca && (ca.version && "function" === typeof ca.version ? ca.version() : yb(c(a, "Opera "), P, "" + fb)), Ob = m.opr, la = !ca && (v.all || gb), D = la && (gb ? gb : m.g ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4), Ia = !la && Ga.msContentZoomFactor, da = !Ia && 
  m.chrome, lb = ba && c(a, "Goanna/"), K = !lb && ba && c(a, "rv:"), Pb = c(a, "Firefox/"), Qb = c(a, "Opera/"), w = Oa(a, "AppleWebKit/"), T = c(a, "Chrome/"), mb = c(a, "OPR/"), tc = c(u, "KHTML/"), Rb = c(a.toLowerCase(), "iris"), nb = c(a, "FxiOS/"), ea = Oa(a, "SamsungBrowser/"), ma;
  if (ma = !ea) {
    a: {
      for (var Sb = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ja, ob = Sb.length; Ja = Sb[--ob];) {
        if (e(a, Ja)) {
          ma = 2 > y(P) ? P : 0.9;
          break a;
        }
      }
      var Tb = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ob = Tb.length; Ja = Tb[--ob];) {
        if (e(a, Ja)) {
          ma = P;
          break a;
        }
      }
      ma = void 0;
    }
  }
  var Ub = ma, Vb = da && 534.3 >= w, Wb = pc && (w || ba) && (0 === p.indexOf("Linux armv") || 0 === p.indexOf("Linux aarch") || "Linux i686" === p) && e(a, "Linux x86_64") || !x && Mb, Xb = m.puffinDevice, Ka = Xb && Xb.clientInfo, na = Ka && "iOS" === Ka.os && Ka.osVersion, La = na && Ka.model, pb = !D && v.registerElement, uc = !D && v.execCommand, Yb = kb && pb && "11.0.696.34" === T, U, E, b, oa, qb, rb;
  if ("Nitro" === p) {
    var l = "NDS";
  } else {
    if ("Nintendo DSi" === p) {
      l = "NDSi";
      var h = Qb;
    } else {
      if ("New Nintendo 3DS" === p || e(a, "iPhone OS 6_0") && 320 === hb && 240 === ib) {
        l = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === p) {
          l = "N3DS";
          h = c(a, "Version/");
          w = 535;
          var vc = h;
        } else {
          if ("Nintendo Swicth" === p) {
            l = "Swicth", h = c(u, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === p) {
              l = "WiiU", h = c(u, "NintendoBrowser/"), w = c(u, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === p) {
                l = "Wii";
                h = c(a, "Wii; U; ; ");
                var d = l;
                var f = h;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  l = "PSVita", h = b, d = l, f = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    l = "PSP";
                    h = b;
                    var Zb = 3.3;
                    d = l;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      l = "PS3", h = b, d = l, f = b, 0 > xb("4.10", b) && (k = "Sony", n = b);
                    } else {
                      if (e(a, "Xbox One")) {
                        l = "XboxOne", h = 1;
                      } else {
                        if (e(a, "Xbox")) {
                          l = "Xbox360", h = 1;
                        } else {
                          if (2 === fb && e(a, "Sony/COM2/")) {
                            l = "Mylo";
                            h = 2;
                            Zb = 3.4;
                            d = l;
                            f = 2;
                            var Ma = !0;
                          } else {
                            if (0 === p.indexOf("iP") || jb || na) {
                              if (na) {
                                switch(h = na, La.substr(0, 4)) {
                                  case "iPho":
                                    var F = "iPhone";
                                    var V = y(La.substr(6));
                                    var G = !0;
                                    break;
                                  case "iPad":
                                    F = "iPad";
                                    V = y(La.substr(4));
                                    var H = !0;
                                    break;
                                  case "iPod":
                                    F = "iPod";
                                    V = y(La.substr(4));
                                    var $b = !0;
                                }
                              } else {
                                jb ? h = jb : h = c(u.split("_").join("."), "OS ");
                                h || (E = !0, h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : vb.isNaN ? 9.2 : m.SharedWorker ? Jb && Jb.now ? 8.0 : 8.4 : uc ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : Kb ? 4.3 : Ib ? 4.1 : 3.2);
                                var sb = 1 === m.devicePixelRatio;
                                var z = hb === 1.5 * ib || 1.5 * hb === ib;
                                0 === p.indexOf("iPhone") ? (F = "iPhone", V = z ? sb ? {max:3} : {min:4, max:5} : {max:6}, G = !0) : 0 === p.indexOf("iPad") ? (F = "iPad", V = sb ? {max:2} : {min:3}, H = !0) : 0 === p.indexOf("iPod") && (F = "iPod", V = z ? sb ? {max:3} : 4 : {min:5}, $b = !0);
                              }
                              na || !fa.standalone && void 0 === v.fullscreenEnabled && void 0 === v.webkitFullscreenEnabled ? (rb = !0, k = "iOSWebView") : (k = "SafariMobile", d = "Safari", f = h);
                              l = "iOS";
                              n = h;
                            } else {
                              if (e(a, "Kobo")) {
                                l = "Kobo", k = "AOSP", n = 2.2, d = k, f = n, J = !0;
                              } else {
                                if (e(a, "EBRD")) {
                                  l = "SonyReader", k = "AOSP", n = 2.2, d = k, f = n;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    l = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== m.onmoztimechange) {
                                      l = "FirefoxOS", h = 18.1 > K ? "1.0.1" : 19 > K ? 1.1 : 27 > K ? 1.2 : 29 > K ? 1.3 : 31 > K ? 1.4 : 33 > K ? 2.0 : 35 > K ? 2.1 : 38 > K ? 2.2 : 45 > K ? 2.5 : 2.6, e(a, "Mobile") ? G = !0 : e(a, "Tablet") && (H = !0);
                                    } else {
                                      if (m.palmGetResource) {
                                        l = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), d = l, f = h, e(a, "webOS.TV") || e(a, "/SmartTV") || (G = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          l = "Tizen", h = b, d = "Samsung", f = ea, k = d, n = f, G = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(u, "Windows Phone OS ") || rc) {
                                            var Na = !0;
                                            h = b;
                                            G = !0;
                                          } else {
                                            if (Ia && "ARM" === p) {
                                              Na = !0, h = 10, E = G = !0;
                                            } else {
                                              if (la && e(u, "ZuneWP")) {
                                                Na = !0, h = 11 === D ? 8.1 : 10 === D ? 8 : 9 === D ? 7.5 : 7 === D ? 7 : "?", E = G = !0;
                                              } else {
                                                if (e(a, "FOMA;")) {
                                                  l = "FeaturePhone", G = !0;
                                                } else {
                                                  if (e(a, "SoftBank;")) {
                                                    l = "FeaturePhone", G = !0;
                                                  } else {
                                                    if (e(a, "KFMUWI")) {
                                                      var Q = !0;
                                                      h = 6.3;
                                                      var A = H = !0;
                                                    } else {
                                                      if (e(a, "KFKAWI")) {
                                                        Q = !0, h = 6, A = H = !0;
                                                      } else {
                                                        if (e(a, "KFSUWI") || e(a, "KFAUWI") || e(a, "KFDOWI")) {
                                                          Q = !0, h = 5, A = H = !0;
                                                        } else {
                                                          if (e(a, "KFGIWI")) {
                                                            Q = !0, h = 5, A = H = !0;
                                                          } else {
                                                            if (e(a, "KFARWI") || e(a, "KFSAWA") || e(a, "KFSAWI")) {
                                                              Q = !0, h = 5 <= y(x) ? 5 : 4, A = H = !0;
                                                            } else {
                                                              if (e(a, "KFSOWI") || e(a, "KFTHWA") || e(a, "KFTHWI") || e(a, "KFAPWA") || e(a, "KFAPWI")) {
                                                                Q = !0, h = 3, A = H = !0;
                                                              } else {
                                                                if (e(a, "KFOT") || e(a, "KFTT") || e(a, "KFJWA") || e(a, "KFJWI")) {
                                                                  Q = !0, h = 2, A = H = !0;
                                                                } else {
                                                                  if (e(a, "Kindle Fire")) {
                                                                    Q = !0, h = 1, A = H = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      l = "Kindle", h = b, k = "AOSP", n = 2.2, d = k, f = n;
                                                                    } else {
                                                                      if (e(a, "AmazonWebAppPlatform") || e(a, "; AFT")) {
                                                                        Q = !0, h = x, A = !0;
                                                                      } else {
                                                                        if (e(a, "MeeGo")) {
                                                                          l = "MeeGo";
                                                                        } else {
                                                                          if (e(a, "Maemo")) {
                                                                            l = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Rb) {
                                                                              l = "WindowsMobile", Ma = !0;
                                                                            } else {
                                                                              if ("WinCE" === p) {
                                                                                l = p, Ma = !0;
                                                                              } else {
                                                                                if ("Win16" === p || "Win32" === p || "Win64" === p) {
                                                                                  l = p, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === p.indexOf("Mac")) {
                                                                                    l = "MacPowerPC" === p ? "MacPPC" : p;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var ac = !0;
                                                                                  } else {
                                                                                    e(a, "BlackBerry") || e(a, "BB10") ? (l = "BlackBerry", h = P, G = !0) : e(a, "SunOS") || e(a, "Sun Solaris") ? l = "SunOS" : e(a, "FreeBSD") ? l = "FreeBSD" : e(a, "OpenBSD") ? l = "OpenBSD" : e(a, "NetBSD") ? l = "NetBSD" : J && ba ? (e(a, "Android 4.4;") ? z = {min:2.3} : 4 <= y(x) ? z = x : z = {min:2.2}, h = z, Wb && (E = !0)) : J && ca ? (x ? z = x : (z = {min:1.6}, E = !0), h = z, e(a, "Tablet") ? H = !0 : 
                                                                                    G = !0) : x ? (h = x, J = !0) : kb && Wb ? (U = !0, ea ? z = {min:4.4} : da && !Vb || Ob || mb ? z = {min:4} : (z = x = void 0 !== Ga.style.touchAction ? {min:5} : pb ? 4.4 : Kb ? fa.connection ? m.searchBoxJavaBridge_ || da ? vb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= w ? 3 : 533 <= w ? Ib ? 2.3 : 2.2 : 530 <= w ? 2.0 : 1.5, Ub && (k = "Samsung", n = Ub)), h = z, J = !0) : Yb ? (h = {min:5}, U = J = !0) : kb && (e(a, 
                                                                                    "Ubuntu") ? l = "Ubuntu" : (b = c(a, "Mint/")) ? (l = "Mint", h = b) : (b = c(a, "Fedora/")) ? (l = "Fedora", h = b) : l = e(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Q && (l = "FireOS");
  J && (l = l || "Android");
  Na && (l = "WindowsPhone");
  k || (A = A || J, ca ? (k = A || Ma || G || H ? "PrestoMobile" : "Presto", n = Nb) : la ? ((z = Oa(u, "Trident/") + 4) && z !== D && (d = "IEHost", f = z), 10 <= D && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (d = "ModernIE", f = D), Ma || G || H || $b ? k = "TridentMobile" : ac && 5 <= D ? (k = "Tasman", d = "MacIE", f = D) : (k = "Trident", ac && (d = "MacIE", f = D)), n = D) : Ia ? (k = Na ? "EdgeMobile" : "EdgeHTML", n = c(u, "Edge/")) : lb ? (k = "Goanna", n = 
  lb) : ba ? (k = A ? "Fennec" : "Gecko", n = K || Pb) : ea ? (k = "Samsung", n = ea, U && (E = !0)) : (b = Zb || c(a, "NetFront/")) ? (k = "NetFront", n = b) : (b = c(a, "iCab")) ? (k = "iCab", n = b) : (b = yb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || Lb && P) ? (k = "OperaMini", n = b, l || (e(a, "iPhone") ? F = "iPhone" : e(a, "iPad") ? F = "iPad" : e(a, "iPod") && (F = "iPod"), F && (l = "iOS"))) : Ha ? (k = "UCWEB", n = qc) : tc ? (k = "KHTML", n = fb) : J && Vb ? (k = "AOSP", n = x, oa = 
  !0, U && (E = !0)) : da || Ob || mb ? (k = A ? "ChromiumMobile" : "Chromium", n = T, U && (E = !0)) : J && pb ? (k = "ChromeWebView", n = 5 > y(x) ? x : T, oa = !0, m.requestFileSystem || m.webkitRequestFileSystem || (qb = !0), U && (E = !0)) : J && (P || U) ? (k = "AOSP", n = x, oa = !0, U && (E = !0)) : T ? (k = A ? "ChromiumMobile" : "Chromium", n = T) : w && (k = "WebKit", n = w));
  if (!d) {
    if (b = Ia && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      d = "Edge", f = b;
    } else {
      if (b = c(u, "Coast/")) {
        d = "Coast", f = b;
      } else {
        if (b = c(u, "OPT/")) {
          d = "OperaTouch", f = b, E = E || !e(u, "Mobile/");
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
                            if (b = c(a, "Focus/") || 9 > y(nb) && rb && 11 <= y(h) && nb) {
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
                                                                      d = "Iron", f = b || da && T;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        d = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || e(a, " Brave ")) {
                                                                          d = "Brave", f = b || da && T;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            d = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || m.FNRBrowser) {
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
                                                                                            if (b = vc || c(u, "NX/")) {
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
                                                                                                          if (b = nb || ba && (Pb || n)) {
                                                                                                            d = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = Nb || mb || Qb) {
                                                                                                              d = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (la) {
                                                                                                                d = "IE", f = n;
                                                                                                              } else {
                                                                                                                if (ea) {
                                                                                                                  d = k, f = ea;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (da || Yb && oa) && T) {
                                                                                                                    d = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (oa && !qb) {
                                                                                                                      d = k, f = n;
                                                                                                                    } else {
                                                                                                                      if (rb || qb) {
                                                                                                                        d = "unknown";
                                                                                                                      } else {
                                                                                                                        if (e(a, "Safari") || P) {
                                                                                                                          d = "Safari", f = P || (73 > w ? 0.8 : 85 > w ? 0.9 : 100 > w ? 1 : 125 > w ? 1.1 : 312 > w ? 1.2 : 412 > w ? 1.3 : 419.3 >= w ? 2 : 525.13 >= w ? 3 : 525.25 >= w ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  l && (q.PLATFORM = l, h ? (q.PLATFORM_VERSION = ta(h), q[l] = va(h)) : q[l] = !0);
  k && (q.ENGINE = k, n ? (q.ENGINE_VERSION = ta(n), q[k] = va(n)) : q[k] = !0, d || (d = k, f = n));
  d && (q.BRAND = d, f ? (q.BRAND_VERSION = ta(f), q[d] = va(f)) : q[d] = !0);
  F && (q.DEVICE = F, V ? (q.DEVICE_VERSION = ta(V), q[F] = va(V)) : q[F] = !0);
  E && (q.PC_MODE = !0);
  var R = [], Ta = [], Ab = [], bc = [], Ra = new wb, Bb = !!v.getElementsByTagName, O = v.body, I = q.Trident || q.TridentMobile, cc = q.Tasman, wc = q.Presto || q.PrestoMobile, xc = q.OperaMini && q.UCWEB;
  I || cc || (new wb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var dc = v.scripts;
  var ia = dc[dc.length - 1].src.split("/");
  --ia.length;
  var ec = ia.join("/");
  0 <= "http: https:".indexOf(ia[0]) && ia.splice(0, 3);
  ia = ia.join("/");
  var Qa = m.onload, wa = m.onunload, Ua = m.onscroll, Va = m.onresize, M;
  onload = ja;
  onunload = Sa;
  onscroll = function(a) {
    var b = 0, c = bc.length, d;
    Ua && (d = Ua(a));
    if (!ja) {
      for (; b < c; ++b) {
        bc[b]();
      }
    }
    (q.SafariMobile || q.iOSWebView) && M && (ra(M), M = qa(zb, 100));
    return d;
  };
  onresize = function(a) {
    var b;
    Va && (b = Va(a));
    ja || (M && ra(M), M = qa(zb, 100));
    return b;
  };
  var yc = xa("html")[0];
  var ha = xa("head")[0];
  q.IEHost && 5.5 > I && (R[R.length] = function() {
    var a = v.createElement("link");
    ha.appendChild(a);
    a.setAttribute("href", (ec ? ec + "/" : "") + "ie5win.css");
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
      var g = this.length - 1;
      for (e = a + b; g >= e; --g) {
        this[g + d] = this[g];
      }
    } else {
      if (0 > d) {
        g = a + b;
        for (e = this.length; g < e; ++g) {
          this[g + d] = this[g];
        }
        this.length += d;
      }
    }
    g = 2;
    for (e = c.length; g < e; ++g) {
      this[g - 2 + a] = c[g];
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
  var tb = tb || {}, B = String.fromCharCode, gc = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", B(960), ")", "(", B(234), B(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", B(9824), "\u2190", B(9829), B(9830), B(9827), B(956), "\u03a9", "\u2193", "\u2192", "%", B(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", B(9619)], t, ka = "", Hb = -1, za, Ba = [], hc = 0, Ya;
  if (5 > I || cc) {
    tb._ontimer = Aa, Aa = "PB100._ontimer()";
  }
  if (q.SafariMobile || q.iOSWebView) {
    var fc = m.onscroll;
    m.onscroll = function(a) {
      var b;
      fc && (b = fc(a));
      ra(Ya);
      Ya = qa(Aa, 64);
      return b;
    };
  }
  9 > I && R.push(function(a) {
    a = C(O, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    1 < a.offsetHeight && ya(O, "pbLCD-AX");
    a.style.cssText = "";
    S(a);
  });
  var Ca = [], Za, $a, pa = 8 > wc && {"00":{left:0, top:0}, "01":{left:0, top:-30}, "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 
  13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 
  28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 
  45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 
  67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}};
  R.push(function() {
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
      if (n && u) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", f = b.substr(1), e = a.className, g = e.split("pbCsr")[1] || "", h = e.split("pbAlp")[1] || "";
        if ("CS" === f) {
          var k = "_";
        } else {
          k = f, 3 === k.length && (k = k.substr(0, 2)), k = aa[parseInt(k, 16)] || "~";
        }
        g = g.split(" ")[0];
        h = h.split(" ")[0];
        var l = 10 - y(h);
        pa && h ? (e = e.split("pbChr")[1], e = e.split(" ")[0], d(a, e, h, a.innerHTML), b && d(a, f, l, k), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + f, "pbAlp" + l, "pbCsr" + g]}, za = 1, p = C(a, "b", b, 0, k), c(a), c(p)) : c(a);
      }
    }
    function c(a) {
      v || h || X(a, "pbChrCS") && Ca.push(a);
    }
    function d(a, b, c, d) {
      b = pa[b + (w ? "a" : "")] || pa[b];
      b.top += "px";
      a = C(a, "img", {title:d, src:"base:pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Ca.push(a);
    }
    var e = 6 > I ? 1 : 0, f = xa("SAMP"), h = 9 > I, l = 5 <= I && 6 > I, k, m, q;
    if (f.length) {
      var p = C(O, "a", {id:"pbLCD-test", title:"pbLCD-test"}), n = p.offsetWidth, t = p.style, v = void 0 !== t.opacity || void 0 !== t["-moz-opacity"] || void 0 !== t["-khtml-opacity"], u = !v && !h && !pa;
      t = !n || u || pa;
      S(p);
      for (m = -1; k = f[++m];) {
        if (X(k.parentElement || k.parentNode, "pbLCD")) {
          var w = X(k, "PB-120") || X(k, "FX-795P"), z = k.children;
          for (k = z.length; k;) {
            var x = z[--k];
            switch(x.tagName.toUpperCase()) {
              case "A":
                if (t) {
                  for (n || a(x), q = x.children.length; q;) {
                    b(x.children[--q]);
                  }
                }
                xc ? x.setAttribute("href", "javascript:void(0)") : x.onclick = ic;
                break;
              case "B":
                t && b(x);
            }
          }
        }
      }
      Ca.length ? (setInterval(Cb, 500), Wa([".pbChrCS", "background-position:0 -51px"])) : Cb = null;
      u && Wa([".pbAlp1" + (n ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a10.png)", ".pbAlp2" + (n ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a20.png)", ".pbAlp3" + (n ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a30.png)", ".pbAlp4" + (n ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(base:pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(base:pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(base:pbLCD/x3_a60.png)", 
      ".pbAlp7", "background-image:url(base:pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(base:pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(base:pbLCD/x3_a90.png)"]);
    }
  });
  525.13 > q.WebKit && (yc.onclick = function(a) {
    if ($a) {
      return $a = !1, a.preventDefault(), !1;
    }
  });
  var db = aa[7], Gb = aa[30], kc = aa[113], Ea = B(8337) + B(8331), eb = B(160), oc = B(8194), mc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), nc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), lc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Gb + aa[31]).split(""), Z = 
  [], cb = [], Eb, bb, Fb;
  R.push(function() {
    for (var a = v.all || xa("*"), b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    for (a = -1; c = b[++a];) {
      X(c, "pbList") ? Fa(c) : X(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Fa(c, !0);
    }
    Z.length && Da();
    Fb = !0;
  });
  tb.prettify = Fa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

