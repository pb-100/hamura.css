PB100 = {};
(function($c, m, p, u, ea, Bb, A, Cb, Db, ad, Ua, yc, fa, bd) {
  function Va(d, a) {
    var b = A(d.split(a)[1]);
    return 0 <= b ? b : 0;
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
  function Fb(d, a) {
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
  function Gb() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > Fb(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function wa(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function xa(d) {
    return d === d + "" ? A(d) : d;
  }
  function ja() {
    for (var d, a = 0, b = new fa - 0; a < P.length;) {
      b < P[0].t ? ++a : (d = P.splice(a, 1)[0], d.f(d.p));
    }
    ka = P.length ? Ua(ja, 64) : 0;
  }
  function zc() {
    ka && (yc(ka), ka = Ua(ja, 64));
  }
  function W(d, a) {
    for (var b = 0, c = d.length; b < c; ++b) {
      d[b](a);
    }
  }
  function Ya(d) {
    var a = 0, b = la.length, c;
    for (Za && (c = Za(d)); a < b; ++a) {
      la[a](d);
    }
    onload = Hb;
    la = Ya = Za = onload = null;
    return c;
  }
  function ha() {
    var d = u.defaultView;
    d = d ? d.getComputedStyle(ma, null) : ma.currentStyle;
    if (d = (d && d.color || "").split(" ").join("")) {
      return d = "#123456" !== d && "rgb(18,52,86)" !== d, Ib !== d && W(Jb, Ib = d), !0;
    }
  }
  function Ac() {
    W($a, !0);
  }
  function Bc() {
    W($a, !1);
  }
  function ya(d) {
    var a = a || u;
    return Kb ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function J(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function ab(d, a) {
    var b = u.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function M(d, a, b, c, e) {
    function r(a, d) {
      for (var b in d) {
        switch(b) {
          case "class":
          case "className":
            za(a, d[b]);
            break;
          default:
            a.setAttribute(b, d[b]);
        }
      }
    }
    function f(a, d) {
      var b = a.style, c;
      for (c in d) {
        b[c] = d[c];
      }
    }
    if ("style" === a) {
      var g = !0;
      a = ab("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = ab(a);
    }
    Aa ? (2 === Aa && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Aa = 0;
    b && r(a, b);
    c && f(a, c);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function Lb(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function X(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function za(a, b) {
    var d;
    if (!X(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function Mb(a, b) {
    var d = M(na, "style", {type:"text/css", media:b}, 0, a);
    bb[b] = d.sheet || d.styleSheet;
  }
  function Ba(a, b) {
    for (var d = b || "all", c = bb[d], e, r, f = "", g; a.length;) {
      e = a.shift(), r = a.shift(), g = e + "{" + r + "}", c ? c.addRule ? c.addRule(e, r) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && Mb(f, d);
  }
  function cb(a) {
    if (void 0 !== Ca) {
      if (7 > w) {
        t(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          a(Ca = !1);
        };
        d.onload = function() {
          a(Ca = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    } else {
      t(a, Ca);
    }
  }
  function Nb(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      u.fonts.load(d).then(function() {
        u.fonts.check(d, "i");
        Wa(b) ? t(a, v) : cb(Xa);
      }, function() {
        cb(Xa);
      });
    }
    function r(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new fa - q;
    }
    function h(d) {
      d && (q = new fa - 0);
      Wa(b) ? a(v) : r(p) ? Eb ? a(0) : 9 > w ? t(a, 0) : cb(Xa) : t(h);
    }
    function l() {
      var a = -1, d;
      l = null;
      db = ["sans-serif", "serif"];
      K = M(S, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (eb = {}; d = db[++a];) {
        K.style.fontFamily = d, eb[d] = K.offsetWidth;
      }
    }
    function Wa(a) {
      var d = 0, b = -1, c, e, r = 0;
      l && l();
      for (S.appendChild(K); c = db[++b];) {
        if (K.style.fontFamily = '"' + a + '",' + c, K.offsetWidth !== eb[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (K.innerHTML = e, a = K.offsetWidth, K.innerHTML = f[e], r = a === K.offsetWidth ? 1 : 0, !r) {
            break;
          }
        }
      }
      J(K);
      return v = d + r;
    }
    function Xa(d) {
      (Eb = d) ? k(!0) : a(0);
    }
    function k(d) {
      d && (q = new fa - 0);
      for (b in c) {
        if (Wa(b)) {
          Da = M(S, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = bb.all, f = Ob.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : Mb('@import "' + d + '"', "all");
          Ob.all = ++f;
          t(n, !0);
        } else {
          r(100) ? (delete c[b], t(k, !0)) : t(k);
        }
        return;
      }
      a(0);
    }
    function n(d) {
      d && (q = new fa - 0);
      1 < Da.offsetWidth ? (J(Da), p = 100, t(h, !0)) : r(p) ? (J(Da), a(0)) : t(n);
    }
    var p = g || 5000, q, Eb, K, Da, db, eb, v;
    (function() {
      var a;
      if (m.MeeGo || 2.2 > m.AOSP || m.WebOS || m.UCWEB || 10 > m.TridentMobile || m.NDS || m.NDSi || m.N3DS) {
        return !1;
      }
      if (6 > w) {
        return !0;
      }
      var d = M(na, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      J(d);
      return a;
    })() ? !u.fonts || 603 > m.WebKit ? h(!0) : d() : t(a, 0);
  }
  function Pb() {
    fb = !fb;
    for (var a = -1, b; b = Ea[++a];) {
      b.style.visibility = fb ? "" : "hidden";
    }
  }
  function Cc(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), gb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function Fa() {
    Fa = null;
    Dc(hb, "PB-100", {"PB-100_canTTF":B + "pbFont/ttf.css", "PB-100_canWOFF":B + "pbFont/woff.css", "PB-100_canEOT":B + "pbFont/eot.css", "PB-100_canSVG":B + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Ga}, 5000);
  }
  function hb(a) {
    (Ha = a) ? Qb() : Ec();
  }
  function Fc(a) {
    a && (za(S, "pbList-noWebFont"), Ba([".pbList font", "background-image:url(" + B + "pbFont/" + (9 > w ? "x3mask_ie.png" : "x3mask.png") + ")"]), Ba([".pbList font", "background-image:url(" + B + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    Qb();
  }
  function Qb() {
    for (hb = Nb = null; Y.length;) {
      Ia(Y.shift(), ib.shift());
    }
  }
  function Ia(a, b) {
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
    if (hb) {
      -1 === Y.indexOf(a) && (Y.push(a), ib.push(b), Rb && Fa && Fa());
    } else {
      var e = Y.indexOf(a);
      0 <= e && Y.splice(e, 1) && ib.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Ha && (e = e.split(Ga).join(Sb)), b ? a.data = e : Gc(e.split("\r").join("").split("&yen;").join(Hc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(jb).split("&amp;").join("&"), a);
      }
    }
  }
  function Gc(a, b) {
    function d(a, b) {
      for (var d = ""; b;) {
        b & 1 && (d += a), b >>= 1, a += a;
      }
      return d;
    }
    function c(a, b, c) {
      for (var e, f = -1, g, r; e = b[++f];) {
        for (; 0 <= (g = a.indexOf(e));) {
          r = e.length, a = a.substr(0, g) + d(c, r) + a.substr(g + r);
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
        k === jb || l ? (r += "~", k === jb && (l = !l)) : r += k;
      }
      r = c(r, Ic, "^");
      r = c(r, Jc, "{");
      r = c(r, Kc, "}");
    }
    h = 0;
    for (l = a.length; h < l; ++h) {
      k = a.charAt(h);
      var p = k === kb, n = " " === k;
      k = p ? " " : k;
      var q = r.charAt(h), u = v, v = "|" === q;
      q = f["+|~{}^".indexOf(q) + 1];
      if ("\n" !== k) {
        if (Ha) {
          8 > w && n && (k = h === l - 1 ? kb : Lc), 2 === Ha && a.substr(h, 2) === Ga && (k = Ga, ++h), n = n && "str" === q ? ' class="pbList-strsp"' : p ? "" : !n && q ? ' class="pbList-' + q + '"' : "";
        } else {
          var t = Z.indexOf(k);
          t = -1 === t ? "" : Z.indexOf(k).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          n = n && "str" === q ? ' class="pbList-strsp"' : n || !t ? "" : q ? ' class="pbList-' + q + (t ? " " + t : "") + '"' : ' class="' + t + '"';
        }
        u && p && (m.WebKit || m.SafariMobile || m.iOSWebView) && (k = kb);
        g.push("<font" + n + ">" + k + "</font>");
      } else {
        g.push(k);
      }
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (f = ab("font", g); g = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      J(b);
    }
  }
  var k, n, a = ea.userAgent, v = ea.appVersion, lb = A(v) | 0, q = ea.platform, Ja = u.documentElement, mb = u.documentMode, nb = Bb.width, ob = Bb.height, Tb = p.HTMLAudioElement, Ub = p.performance, Vb = p.Int8Array, Mc = void 0 !== p.ontouchstart, Q = c(v, "Version/") || c(a, "Version/"), aa = Ja && void 0 !== Ja.style.MozAppearance, Wb = p.operamini, Ka = g(a, "UCWEB"), Nc = Ka && c(a, " U2/"), Oc = Ka && c(a, "; wds "), pb = c(a.split("_").join("."), "; iPh OS "), Pc = c(a, "; Adr "), Xb = 
  g(v, "YJApp-ANDROID"), L = g(q, "Android") || aa && g(v, "Android") || Xb, x = c(q, "Android ") || c(v, "Android ") || c(a, "Android ") || Pc, qb = g(q, "Linux"), ba = !Wb && p.opera, Yb = ba && (ba.version && "function" === typeof ba.version ? ba.version() : Gb(c(a, "Opera "), Q, "" + lb)), Zb = p.opr, oa = !ba && (u.all || mb), E = oa && (mb ? mb : p.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4), La = !oa && Ja.msContentZoomFactor, ca = !La && 
  p.chrome, rb = aa && c(a, "Goanna/"), N = !rb && aa && c(a, "rv:"), $b = c(a, "Firefox/"), ac = c(a, "Opera/"), y = Va(a, "AppleWebKit/"), T = c(a, "Chrome/"), sb = c(a, "OPR/"), Qc = c(v, "KHTML/"), bc = c(a.toLowerCase(), "iris"), tb = c(a, "FxiOS/"), da = Va(a, "SamsungBrowser/"), pa;
  if (pa = !da) {
    a: {
      for (var cc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ma, ub = cc.length; Ma = cc[--ub];) {
        if (g(a, Ma)) {
          pa = 2 > A(Q) ? Q : 0.9;
          break a;
        }
      }
      var dc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ub = dc.length; Ma = dc[--ub];) {
        if (g(a, Ma)) {
          pa = Q;
          break a;
        }
      }
      pa = void 0;
    }
  }
  var ec = pa, fc = ca && 534.3 >= y, gc = Mc && (y || aa) && (0 === q.indexOf("Linux armv") || 0 === q.indexOf("Linux aarch") || "Linux i686" === q) && g(a, "Linux x86_64") || !x && Xb, hc = p.puffinDevice, Na = hc && hc.clientInfo, qa = Na && "iOS" === Na.os && Na.osVersion, Oa = qa && Na.model, vb = !E && u.registerElement, Rc = !E && u.execCommand, ic = qb && vb && "11.0.696.34" === T, U, F, b, ra, wb, xb;
  if ("Nitro" === q) {
    var l = "NDS";
  } else {
    if ("Nintendo DSi" === q) {
      l = "NDSi";
      var h = ac;
    } else {
      if ("New Nintendo 3DS" === q || g(a, "iPhone OS 6_0") && 320 === nb && 240 === ob) {
        l = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === q) {
          l = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var Sc = h;
        } else {
          if ("Nintendo Swicth" === q) {
            l = "Swicth", h = c(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === q) {
              l = "WiiU", h = c(v, "NintendoBrowser/"), y = c(v, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === q) {
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
                    var jc = 3.3;
                    e = l;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      l = "PS3", h = b, e = l, f = b, 0 > Fb("4.10", b) && (k = "Sony", n = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        l = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          l = "Xbox360", h = 1;
                        } else {
                          if (2 === lb && g(a, "Sony/COM2/")) {
                            l = "Mylo";
                            h = 2;
                            jc = 3.4;
                            e = l;
                            f = 2;
                            var Pa = !0;
                          } else {
                            if (0 === q.indexOf("iP") || pb || qa) {
                              if (qa) {
                                switch(h = qa, Oa.substr(0, 4)) {
                                  case "iPho":
                                    var G = "iPhone";
                                    var V = A(Oa.substr(6));
                                    var H = !0;
                                    break;
                                  case "iPad":
                                    G = "iPad";
                                    V = A(Oa.substr(4));
                                    var I = !0;
                                    break;
                                  case "iPod":
                                    G = "iPod";
                                    V = A(Oa.substr(4));
                                    var kc = !0;
                                }
                              } else {
                                pb ? h = pb : h = c(v.split("_").join("."), "OS ");
                                h || (F = !0, h = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ea.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : Cb.isNaN ? 9.2 : p.SharedWorker ? Ub && Ub.now ? 8.0 : 8.4 : Rc ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : Vb ? 4.3 : Tb ? 4.1 : 3.2);
                                var yb = 1 === p.devicePixelRatio;
                                var z = nb === 1.5 * ob || 1.5 * nb === ob;
                                0 === q.indexOf("iPhone") ? (G = "iPhone", V = z ? yb ? {max:3} : {min:4, max:5} : {max:6}, H = !0) : 0 === q.indexOf("iPad") ? (G = "iPad", V = yb ? {max:2} : {min:3}, I = !0) : 0 === q.indexOf("iPod") && (G = "iPod", V = z ? yb ? {max:3} : 4 : {min:5}, kc = !0);
                              }
                              qa || !ea.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (xb = !0, k = "iOSWebView") : (k = "SafariMobile", e = "Safari", f = h);
                              l = "iOS";
                              n = h;
                            } else {
                              if (g(a, "Kobo")) {
                                l = "Kobo", k = "AOSP", n = 2.2, e = k, f = n, L = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  l = "SonyReader", k = "AOSP", n = 2.2, e = k, f = n;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    l = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      l = "FirefoxOS", h = 18.1 > N ? "1.0.1" : 19 > N ? 1.1 : 27 > N ? 1.2 : 29 > N ? 1.3 : 31 > N ? 1.4 : 33 > N ? 2.0 : 35 > N ? 2.1 : 38 > N ? 2.2 : 45 > N ? 2.5 : 2.6, g(a, "Mobile") ? H = !0 : g(a, "Tablet") && (I = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        l = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = l, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (H = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          l = "Tizen", h = b, e = "Samsung", f = da, k = e, n = f, H = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(v, "Windows Phone OS ") || Oc) {
                                            var Qa = !0;
                                            h = b;
                                            H = !0;
                                          } else {
                                            if (La && "ARM" === q) {
                                              Qa = !0, h = 10, F = H = !0;
                                            } else {
                                              if (oa && g(v, "ZuneWP")) {
                                                Qa = !0, h = 11 === E ? 8.1 : 10 === E ? 8 : 9 === E ? 7.5 : 7 === E ? 7 : "?", F = H = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  l = "FeaturePhone", H = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    l = "FeaturePhone", H = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var R = !0;
                                                      h = 6.3;
                                                      var C = I = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        R = !0, h = 6, C = I = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          R = !0, h = 5, C = I = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            R = !0, h = 5, C = I = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              R = !0, h = 5 <= A(x) ? 5 : 4, C = I = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                R = !0, h = 3, C = I = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  R = !0, h = 2, C = I = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    R = !0, h = 1, C = I = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      l = "Kindle", h = b, k = "AOSP", n = 2.2, e = k, f = n;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        R = !0, h = x, C = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          l = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            l = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || bc) {
                                                                              l = "WindowsMobile", Pa = !0;
                                                                            } else {
                                                                              if ("WinCE" === q) {
                                                                                l = q, Pa = !0;
                                                                              } else {
                                                                                if ("Win16" === q || "Win32" === q || "Win64" === q) {
                                                                                  l = q, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === q.indexOf("Mac")) {
                                                                                    l = "MacPowerPC" === q ? "MacPPC" : q;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var lc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (l = "BlackBerry", h = Q, H = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? l = "SunOS" : g(a, "FreeBSD") ? l = "FreeBSD" : g(a, "OpenBSD") ? l = "OpenBSD" : g(a, "NetBSD") ? l = "NetBSD" : L && aa ? (g(a, "Android 4.4;") ? z = {min:2.3} : 4 <= A(x) ? z = x : z = {min:2.2}, h = z, gc && (F = !0)) : L && ba ? (x ? z = x : (z = {min:1.6}, F = !0), h = z, g(a, "Tablet") ? I = !0 : 
                                                                                    H = !0) : x ? (h = x, L = !0) : qb && gc ? (U = !0, da ? z = {min:4.4} : ca && !fc || Zb || sb ? z = {min:4} : (z = x = void 0 !== Ja.style.touchAction ? {min:5} : vb ? 4.4 : Vb ? ea.connection ? p.searchBoxJavaBridge_ || ca ? Cb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? Tb ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, ec && (k = "Samsung", n = ec)), h = z, L = !0) : ic ? (h = {min:5}, U = L = !0) : qb && (g(a, 
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
  R && (l = "FireOS");
  L && (l = l || "Android");
  Qa && (l = "WindowsPhone");
  k || (C = C || L, ba ? (k = C || Pa || H || I ? "PrestoMobile" : "Presto", n = Yb) : oa ? ((z = Va(v, "Trident/") + 4) && z !== E && (e = "IEHost", f = z), 10 <= E && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = E), Pa || H || I || kc ? k = "TridentMobile" : lc && 5 <= E ? (k = "Tasman", e = "MacIE", f = E) : (k = "Trident", lc && (e = "MacIE", f = E)), n = E) : La ? (k = Qa ? "EdgeMobile" : "EdgeHTML", n = c(v, "Edge/")) : rb ? (k = "Goanna", n = 
  rb) : aa ? (k = C ? "Fennec" : "Gecko", n = N || $b) : da ? (k = "Samsung", n = da, U && (F = !0)) : (b = jc || c(a, "NetFront/")) ? (k = "NetFront", n = b) : (b = c(a, "iCab")) ? (k = "iCab", n = b) : (b = Gb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || Wb && Q) ? (k = "OperaMini", n = b, l || (g(a, "iPhone") ? G = "iPhone" : g(a, "iPad") ? G = "iPad" : g(a, "iPod") && (G = "iPod"), G && (l = "iOS"))) : Ka ? (k = "UCWEB", n = Nc) : Qc ? (k = "KHTML", n = lb) : L && fc ? (k = "AOSP", n = x, ra = 
  !0, U && (F = !0)) : ca || Zb || sb ? (k = C ? "ChromiumMobile" : "Chromium", n = T, U && (F = !0)) : L && vb ? (k = "ChromeWebView", n = 5 > A(x) ? x : T, ra = !0, p.requestFileSystem || p.webkitRequestFileSystem || (wb = !0), U && (F = !0)) : L && (Q || U) ? (k = "AOSP", n = x, ra = !0, U && (F = !0)) : T ? (k = C ? "ChromiumMobile" : "Chromium", n = T) : y && (k = "WebKit", n = y));
  if (!e) {
    if (b = La && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(v, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(v, "OPT/")) {
          e = "OperaTouch", f = b, F = F || !g(v, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Ka && (b = c(a, "UCBrowser/"))) {
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
                            if (b = c(a, "Focus/") || 9 > A(tb) && xb && 11 <= A(h) && tb) {
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
                                                                      e = "Iron", f = b || ca && T;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ca && T;
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
                                                                                            if (b = Sc || c(v, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (bc) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(v, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(v, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = tb || aa && ($b || n)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = Yb || sb || ac) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (oa) {
                                                                                                                e = "IE", f = n;
                                                                                                              } else {
                                                                                                                if (da) {
                                                                                                                  e = k, f = da;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ca || ic && ra) && T) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (ra && !wb) {
                                                                                                                      e = k, f = n;
                                                                                                                    } else {
                                                                                                                      if (xb || wb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || Q) {
                                                                                                                          e = "Safari", f = Q || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  l && (m.PLATFORM = l, h ? (m.PLATFORM_VERSION = wa(h), m[l] = xa(h)) : m[l] = !0);
  k && (m.ENGINE = k, n ? (m.ENGINE_VERSION = wa(n), m[k] = xa(n)) : m[k] = !0, e || (e = k, f = n));
  e && (m.BRAND = e, f ? (m.BRAND_VERSION = wa(f), m[e] = xa(f)) : m[e] = !0);
  G && (m.DEVICE = G, V ? (m.DEVICE_VERSION = wa(V), m[G] = xa(V)) : m[G] = !0);
  F && (m.PC_MODE = !0);
  var Hb = new Db, Ra = [], Kb = !!u.getElementsByTagName, S = u.body, w = m.Trident || m.TridentMobile, Sa = m.Tasman, Tc = m.EdgeHTML || m.EdgeMobile, Ta = m.Presto || m.PrestoMobile, mc = m.Gecko, nc = m.Goanna, Uc = m.SafariMobile || m.iOSWebView, Vc = m.OperaMini && m.UCWEB;
  w || Sa || (new Db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var oc = u.scripts, Wc = (Sa ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : "modern") + ".css";
  var ia = oc[oc.length - 1].src.split("/");
  --ia.length;
  var pc = ia.join("/");
  0 <= "http: https:".indexOf(ia[0]) && ia.splice(0, 3);
  ia = ia.join("/");
  var O = Array.prototype;
  O.pop || (O.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  O.push || (O.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  O.shift || (O.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  O.splice || (O.splice = function(a, b) {
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
  O.indexOf || (O.indexOf = function(a, b) {
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
  var P = [], qc = 0, ka;
  if (5 > w || Sa) {
    p._wdb_ontimer = ja, ja = "_wdb_ontimer()";
  }
  var t = function(a, b) {
    P.length || (ka = Ua(ja, 64));
    P.push({f:a, p:b, uid:++qc, t:new fa - 0 + 64});
    return qc;
  };
  var rc = function(a) {
    for (var b = P.length, d; d = P[--b];) {
      if (d.uid === a) {
        P.splice(b, 1);
        break;
      }
    }
  };
  Uc && Ra.push(function() {
    Xc();
  });
  var sa = p.matchMedia, la = [], zb = [], Za = p.onload, sc = p.onunload;
  onload = Ya;
  onunload = function(a) {
    var b = 0, d = zb.length, c;
    for (sc && (c = sc(a)); b < d; ++b) {
      zb[b]();
    }
    onscroll = onresize = onunload = Hb;
    onscroll = onresize = onunload = null;
    return c;
  };
  var ta = function(a) {
    la.push(a);
  };
  var Yc = function(a) {
    zb.push(a);
  };
  var Jb = [], ma, Ab, Ib = !1;
  10 <= w || Tc ? (sa("(-ms-high-contrast:active)").addListener(function(a) {
    W(Jb, a.matches);
  }), ha = null) : 10 > w || (m.Win32 || m.Win64) && (44 <= mc || nc) ? (ta(function() {
    ma = u.createElement("div");
    S.appendChild(ma);
    ma.style.cssText = "color:#123456;position:absolute;top:0;left:0;width:0;height:0;overflow:hidden";
    60 > mc || nc ? ha() : ha() && (Ab = setInterval(ha, 1000));
    ha = null;
  }), Yc(function() {
    Ab && clearInterval(Ab);
  })) : ha = null;
  var Zc = [];
  sa && sa("(prefers-color-scheme: dark)").addListener(function(a) {
    W(Zc, a.matches);
  });
  var $a = [];
  p.onbeforeprint ? (onbeforeprint = Ac, onafterprint = Bc) : sa && sa("print").addListener(function(a) {
    W($a, a.matches);
  });
  var tc = [], uc = p.onscroll;
  onscroll = function(a) {
    var b;
    uc && (b = uc(a));
    Ya || W(tc);
    return b;
  };
  var Xc = function() {
    tc.push(zc);
  };
  var vc = ya("html")[0];
  var na = ya("head")[0];
  var Aa;
  la.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, l, k, r; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && J(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if ((l = f.sheet || f.styleSheet) && (k = 10 <= w ? l.cssRules : l.rules || l.cssRules) && !k.length) {
                  J(f);
                  break;
                }
              case "LINK":
                Kb && !na.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (r = c.length; r;) {
                  if (0 === h.indexOf(c[--r])) {
                    J(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Lb(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Lb(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                J(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        l = e.pop(), na.appendChild(l);
      }
    }
    var b = !(8 > Ta || 5 > w || Sa), c = ["og:", "twitter:", "fb:"], e = [];
    a(vc);
  });
  var bb = {}, Ob = {}, wc, Ca;
  9 > w && ta(function(a) {
    a = M(S, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    wc = 1 < a.offsetHeight;
    a.style.cssText = "";
    J(a);
  });
  var Ec = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || t(b, !1)) : e = t(a));
    }
    var b = Fc, c = new Image, e, f;
    c.onerror = function() {
      (!w || 11 === w || 11 === m.IEHost) && c.width || f || (f = !0, e && rc(e), e = t(b, !1));
    };
    c.onload = function() {
      f = !0;
      e && rc(e);
      Ta && !c.complete ? e = t(b, !1) : t(b, !0);
    };
    c.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > Ta && c.complete ? t(b, !0) : e = t(a);
  };
  var Dc = Nb;
  for (m.IEHost && 5.5 > w && ta(function() {
    var a = u.createElement("link");
    na.appendChild(a);
    a.setAttribute("href", (pc ? pc + "/" : "") + Wc);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); Ra.length;) {
    Ra.shift()();
  }
  Ra = null;
  var xc = xc || {}, D = String.fromCharCode, B = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", Z = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", D(960), ")", "(", D(234), D(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", D(9824), "\u2190", D(9829), D(9830), D(9827), D(956), "\u03a9", "\u2193", "\u2192", "%", D(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", D(9619)], Ea = [], fb, gb, va = 8 > Ta && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}};
  ta(function() {
    function a(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      za(a, "pbTipPos" + b.toUpperCase());
      M(a, "div", {className:"pbTip" + c}, {width:e.length + f + "em"}, e);
      M(a, "div", {className:"pbTail" + c});
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
          k = d, 3 === k.length && (k = k.substr(0, 2)), k = Z[parseInt(k, 16)] || "~";
        }
        g = g.split(" ")[0];
        h = h.split(" ")[0];
        var l = 10 - A(h);
        va && h ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, h, a.innerHTML), b && e(a, d, l, k), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + d, "pbAlp" + l, "pbCsr" + g]}, Aa = 1, q = M(a, "b", b, 0, k), c(a), c(q)) : c(a);
      }
    }
    function c(a) {
      u || h || X(a, "pbChrCS") && Ea.push(a);
    }
    function e(a, b, c, d) {
      b = va[b + (y ? "a" : "")] || va[b];
      b.top += "px";
      a = M(a, "img", {title:d, src:B + "pbLCD/x3_a" + c + "0.png"}, b);
      "CS" === d && Ea.push(a);
    }
    var f = 6 > w ? 1 : 0, g = ya("SAMP"), h = 9 > w, l = 5 <= w && 6 > w, k, m, n;
    wc && za(S, "pbLCD-AX");
    if (g.length) {
      var q = M(S, "a", {id:"pbLCD-test", title:"pbLCD-test"}), p = q.offsetWidth, t = q.style, u = void 0 !== t.opacity || void 0 !== t["-moz-opacity"] || void 0 !== t["-khtml-opacity"], v = !u && !h && !va;
      t = !p || v || va;
      J(q);
      for (m = -1; k = g[++m];) {
        if (X(k.parentElement || k.parentNode, "pbLCD")) {
          var y = X(k, "PB-120") || X(k, "FX-795P"), z = k.children;
          for (k = z.length; k;) {
            var x = z[--k];
            switch(x.tagName.toUpperCase()) {
              case "A":
                if (t) {
                  for (p || a(x), n = x.children.length; n;) {
                    b(x.children[--n]);
                  }
                }
                Vc ? x.setAttribute("href", "javascript:void(0)") : x.onclick = Cc;
                break;
              case "B":
                t && b(x);
            }
          }
        }
      }
      Ea.length ? (setInterval(Pb, 500), Ba([".pbChrCS", "background-position:0 -51px"])) : Pb = null;
      v && Ba([".pbAlp1" + (p ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2" + (p ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3" + (p ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4" + (p ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
      B + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + B + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + B + "pbLCD/x3_a90.png)"]);
    }
  });
  525.13 > m.WebKit && (vc.onclick = function(a) {
    if (gb) {
      return gb = !1, a.preventDefault(), !1;
    }
  });
  var jb = Z[7], Sb = Z[30], Hc = Z[113], Ga = D(8337) + D(8331), kb = D(160), Lc = D(8194), Jc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Kc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Ic = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Sb + Z[31]).split(""), Y = [], 
  ib = [], Ha, Rb;
  ta(function() {
    for (var a = u.all || ya("*"), b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    for (a = -1; c = b[++a];) {
      X(c, "pbList") ? Ia(c) : X(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ia(c, !0);
    }
    Y.length && Fa();
    Rb = !0;
  });
  xc.prettify = Ia;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

