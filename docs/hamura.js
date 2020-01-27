PB100 = {};
(function(td, l, p, w, ja, Wb, z, Xb, ab, ud, bb, Uc, ka, vd) {
  function cb(d, a) {
    var q = z(d.split(a)[1]);
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
  function Yb(d, a) {
    var q = 0, b;
    d = d.split(".");
    a = a.split(".");
    for (b = Math.min(d.length, a.length); q < b; ++q) {
      var c = z(d[q]), e = z(a[q]);
      if (c !== e) {
        return c > e ? 1 : -1;
      }
    }
    return d.length === a.length ? 0 : d.length > a.length ? 1 : -1;
  }
  function Zb() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > Yb(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function Fa(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Ga(d) {
    return d === d + "" ? z(d) : d;
  }
  function Ha() {
    for (var d, a = 0; a < Ia.length; ++a) {
      d = Ia[a], d.f();
    }
  }
  function Vc() {
    la && ($b(), la = setInterval(Ha, 999));
  }
  function $b() {
    la && (la = clearInterval(la));
  }
  function qa() {
    for (var d, a = 0, b = new ka - 0; a < R.length;) {
      b < R[0].t ? ++a : (d = R.splice(a, 1)[0], d.f(d.p));
    }
    aa = R.length ? bb(qa, 64) : 0;
  }
  function Wc() {
    aa && (ac(), aa = bb(qa, 64));
  }
  function ac() {
    aa && (aa = Uc(aa));
  }
  function K(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function gb(d) {
    var a;
    hb && (a = hb(d));
    K(ra, d);
    onload = Ja;
    ra = gb = hb = onload = null;
    return a;
  }
  function bc() {
    var d = 9 === ma.offsetWidth;
    cc !== d && K(dc, cc = d);
  }
  function na() {
    function d(d) {
      return "#ffffff" === d && "rgb(255,255,255)" !== d;
    }
    var a = w.defaultView, b = ib, c = a ? a.getComputedStyle(ma, null) : ma.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return sa = "#123456" !== a && "rgb(18,52,86)" !== a, jb = "#000000" === a && "rgb(0,0,0)" !== a && d(c), kb = d(a) && "#000000" === c && "rgb(0,0,0)" !== c, b !== Ka() && K(ta, ib), !0;
    }
  }
  function Ka() {
    return ib = sa ? kb ? 2 : jb ? 3 : 1 : 0;
  }
  function La(d) {
    var a = a || w;
    return ec ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function M(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function lb(d, a) {
    var b = w.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function O(d, a, b, c, e) {
    function q(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            va(d, a[b]);
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
      a = lb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = lb(a);
    }
    Ma ? (2 === Ma && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Ma = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(w.createTextNode(e));
    return a;
  }
  function fc(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function oa(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function va(d, a) {
    var b;
    if (!oa(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function gc(a, b) {
    var d = O(wa, "style", {type:"text/css", media:b}, 0, a);
    mb[b] = d.sheet || d.styleSheet;
  }
  function ba(a, b) {
    for (var d = b || "all", c = mb[d], e, q, f = "", g; a.length;) {
      e = a.shift(), q = a.shift(), g = e + "{" + q + "}", c ? c.addRule ? c.addRule(e, q) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && gc(f, d);
  }
  function nb(a) {
    if (U(Na)) {
      x(a, Na);
    } else {
      if (8 > u) {
        x(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          a(Na = !1);
        };
        d.onload = function() {
          a(Na = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function hc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      w.fonts.load(d).then(function() {
        w.fonts.check(d, "i");
        db(b) ? x(a, fb) : nb(eb);
      }, function() {
        nb(eb);
      });
    }
    function q(a) {
      return w.hidden || w.msHidden || w.mozHidden || w.webkitHidden ? !1 : a < new ka - r;
    }
    function h(d) {
      d && (r = new ka - 0);
      db(b) ? a(fb) : q(n) ? ic ? a(0) : 9 > u ? x(a, 0) : nb(eb) : x(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      v = ["sans-serif", "serif"];
      L = O(E, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (t = {}; d = v[++a];) {
        L.style.fontFamily = d, t[d] = L.offsetWidth;
      }
    }
    function db(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (E.appendChild(L); c = v[++b];) {
        if (L.style.fontFamily = '"' + a + '",' + c, L.offsetWidth !== t[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (L.innerHTML = e, a = L.offsetWidth, L.innerHTML = f[e], q = a === L.offsetWidth ? 1 : 0, L.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      M(L);
      return fb = d + q;
    }
    function eb(d) {
      (ic = d) ? m(!0) : a(0);
    }
    function m(d) {
      d && (r = new ka - 0);
      for (b in c) {
        if (db(b)) {
          Ea = O(E, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = mb.all, f = jc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : gc('@import "' + d + '"', "all");
          jc.all = ++f;
          x(p, !0);
        } else {
          q(100) ? (delete c[b], x(m, !0)) : x(m);
        }
        return;
      }
      a(0);
    }
    function p(d) {
      d && (r = new ka - 0);
      1 < Ea.offsetWidth ? (M(Ea), n = 100, x(h, !0)) : q(n) ? (M(Ea), a(0)) : x(p);
    }
    var n = g || 5000, r, ic, L, Ea, v, t, fb;
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > u) {
        return !0;
      }
      var d = O(wa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      M(d);
      return a;
    })() ? !w.fonts || 603 > ob ? h(!0) : d() : x(a, 0);
  }
  function kc() {
    pb = !pb;
    for (var a = -1, b; b = qb[++a];) {
      b.style.visibility = pb ? "" : "hidden";
    }
  }
  function Xc(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), rb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Oa() {
    Oa = null;
    Yc(sb, "PB-100", {"PB-100_canTTF":v + "pbFont/ttf.css", "PB-100_canWOFF":v + "pbFont/woff.css", "PB-100_canEOT":v + "pbFont/eot.css", "PB-100_canSVG":v + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Pa}, 5000);
  }
  function sb(a) {
    (tb = a) ? ub() : U(void 0) ? ub() : Zc();
  }
  function $c(a) {
    a && (va(E, "pbList-noWebFont"), V ? (ba([".pbList font:after", "content:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]), u || vb || ba([".pbList font:after", "content:url(" + v + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)")) : ba([".pbList font", "background-image:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    ub();
  }
  function ub() {
    for (sb = hc = null; ca.length;) {
      Qa(ca.shift(), wb.shift());
    }
  }
  function Qa(a, b) {
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
    if (sb) {
      -1 === ca.indexOf(a) && (ca.push(a), wb.push(b), xb && Oa && Oa());
    } else {
      var e = ca.indexOf(a);
      0 <= e && ca.splice(e, 1) && wb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== tb && (e = e.split(Pa).join(lc)), b ? a.data = e : ad(e.split("\r").join("").split("&yen;").join(bd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(yb).split("&amp;").join("&"), a);
      }
    }
  }
  function ad(a, b) {
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
      var d = z(a), b = "" + d;
      return 0 < d && d === d | 0 && (d = a.indexOf(b) + b.length, d <= a.length) ? d : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), q = [], g = "", h = -1, k, l;
    if (function(a) {
      var d = a.indexOf("P");
      if (-1 === d) {
        return !1;
      }
      d = z(a.charAt(d + 1));
      return 0 <= d && 9 >= d;
    }(a)) {
      g = d("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (g = d("|", h), --h); l = a.charAt(++h);) {
        l === yb || k ? (g += "~", l === yb && (k = !k)) : g += l;
      }
      g = c(g, cd, "^");
      g = c(g, dd, "{");
      g = c(g, ed, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var m = l === zb, n = " " === l;
      l = m ? " " : l;
      var p = g.charAt(h), r = v, v = "|" === p;
      p = f["+|~{}^".indexOf(p) + 1];
      "\n" !== l ? (8 > u && n && (l = h === k - 1 ? zb : fd), 2 === tb && a.substr(h, 2) === Pa && (l = Pa, ++h), n = n && "str" === p ? ' class="pbList-strsp"' : m ? "" : !n && p ? ' class="pbList-' + p + '"' : "", r && m && (ob || Ab) && (l = zb), q.push("<font" + n + ">" + l + "</font>")) : q.push(l);
    }
    q = q.join("");
    if (1 === b.nodeType) {
      b.innerHTML = q;
    } else {
      for (f = lb("font", q); q = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(q, b);
      }
      M(b);
    }
  }
  var m, n, a = ja.userAgent, t = ja.appVersion, Bb = z(t) | 0, r = ja.platform, Ra = w.documentElement, Cb = w.documentMode, Db = Wb.width, Eb = Wb.height, mc = p.HTMLAudioElement, nc = p.performance, oc = p.Int8Array, gd = void 0 !== p.ontouchstart, S = c(t, "Version/") || c(a, "Version/"), da = Ra && void 0 !== Ra.style.MozAppearance, pc = p.operamini, Sa = g(a, "UCWEB"), hd = Sa && c(a, " U2/"), id = Sa && c(a, "; wds "), Fb = c(a.split("_").join("."), "; iPh OS "), jd = c(a, "; Adr "), qc = 
  g(t, "YJApp-ANDROID"), N = g(r, "Android") || da && g(t, "Android") || qc, B = c(r, "Android ") || c(t, "Android ") || c(a, "Android ") || jd, Gb = g(r, "Linux"), ea = !pc && p.opera, rc = ea && (ea.version && "function" === typeof ea.version ? ea.version() : Zb(c(a, "Opera "), S, "" + Bb)), sc = p.opr, xa = !ea && (w.all || Cb), F = xa && (Cb ? Cb : p.g ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4), Ta = !xa && Ra.msContentZoomFactor, fa = !Ta && 
  p.chrome, Hb = da && c(a, "Goanna/"), P = !Hb && da && c(a, "rv:"), tc = c(a, "Firefox/"), uc = c(a, "Opera/"), y = cb(a, "AppleWebKit/"), W = c(a, "Chrome/"), Ib = c(a, "OPR/"), kd = c(t, "KHTML/"), vc = c(a.toLowerCase(), "iris"), Jb = c(a, "FxiOS/"), ha = cb(a, "SamsungBrowser/"), ya;
  if (ya = !ha) {
    a: {
      for (var wc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ua, Kb = wc.length; Ua = wc[--Kb];) {
        if (g(a, Ua)) {
          ya = 2 > z(S) ? S : 0.9;
          break a;
        }
      }
      var xc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Kb = xc.length; Ua = xc[--Kb];) {
        if (g(a, Ua)) {
          ya = S;
          break a;
        }
      }
      ya = void 0;
    }
  }
  var yc = ya, zc = fa && 534.3 >= y, Ac = gd && (y || da) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !B && qc, Bc = p.puffinDevice, Va = Bc && Bc.clientInfo, za = Va && "iOS" === Va.os && Va.osVersion, Wa = za && Va.model, Lb = !F && w.registerElement, ld = !F && w.execCommand, Cc = Gb && Lb && "11.0.696.34" === W, X, G, b, Aa, Mb, Nb;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = uc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === Db && 240 === Eb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var md = h;
        } else {
          if ("Nintendo Swicth" === r) {
            k = "Swicth", h = c(t, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              k = "WiiU", h = c(t, "NintendoBrowser/"), y = c(t, "AppleWebKit/");
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
                    var Dc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > Yb("4.10", b) && (m = "Sony", n = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Bb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            Dc = 3.4;
                            e = k;
                            f = 2;
                            var Xa = !0;
                          } else {
                            if (0 === r.indexOf("iP") || Fb || za) {
                              if (za) {
                                switch(h = za, Wa.substr(0, 4)) {
                                  case "iPho":
                                    var H = "iPhone";
                                    var Y = z(Wa.substr(6));
                                    var I = !0;
                                    break;
                                  case "iPad":
                                    H = "iPad";
                                    Y = z(Wa.substr(4));
                                    var J = !0;
                                    break;
                                  case "iPod":
                                    H = "iPod";
                                    Y = z(Wa.substr(4));
                                    var Ec = !0;
                                }
                              } else {
                                Fb ? h = Fb : h = c(t.split("_").join("."), "OS ");
                                h || (G = !0, h = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ja.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : Xb.isNaN ? 9.2 : p.SharedWorker ? nc && nc.now ? 8.0 : 8.4 : ld ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : oc ? 4.3 : mc ? 4.1 : 3.2);
                                var Ob = 1 === p.devicePixelRatio;
                                var A = Db === 1.5 * Eb || 1.5 * Db === Eb;
                                0 === r.indexOf("iPhone") ? (H = "iPhone", Y = A ? Ob ? {max:3} : {min:4, max:5} : {max:6}, I = !0) : 0 === r.indexOf("iPad") ? (H = "iPad", Y = Ob ? {max:2} : {min:3}, J = !0) : 0 === r.indexOf("iPod") && (H = "iPod", Y = A ? Ob ? {max:3} : 4 : {min:5}, Ec = !0);
                              }
                              za || !ja.standalone && void 0 === w.fullscreenEnabled && void 0 === w.webkitFullscreenEnabled ? (Nb = !0, m = "iOSWebView") : (m = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              n = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", m = "AOSP", n = 2.2, e = m, f = n, N = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", m = "AOSP", n = 2.2, e = m, f = n;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > P ? "1.0.1" : 19 > P ? 1.1 : 27 > P ? 1.2 : 29 > P ? 1.3 : 31 > P ? 1.4 : 33 > P ? 2.0 : 35 > P ? 2.1 : 38 > P ? 2.2 : 45 > P ? 2.5 : 2.6, g(a, "Mobile") ? I = !0 : g(a, "Tablet") && (J = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (I = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ha, m = e, n = f, I = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(t, "Windows Phone OS ") || id) {
                                            var Ya = !0;
                                            h = b;
                                            I = !0;
                                          } else {
                                            if (Ta && "ARM" === r) {
                                              Ya = !0, h = 10, G = I = !0;
                                            } else {
                                              if (xa && g(t, "ZuneWP")) {
                                                Ya = !0, h = 11 === F ? 8.1 : 10 === F ? 8 : 9 === F ? 7.5 : 7 === F ? 7 : "?", G = I = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", I = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", I = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var T = !0;
                                                      h = 6.3;
                                                      var C = J = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        T = !0, h = 6, C = J = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          T = !0, h = 5, C = J = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            T = !0, h = 5, C = J = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              T = !0, h = 5 <= z(B) ? 5 : 4, C = J = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                T = !0, h = 3, C = J = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  T = !0, h = 2, C = J = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    T = !0, h = 1, C = J = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, m = "AOSP", n = 2.2, e = m, f = n;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        T = !0, h = B, C = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || vc) {
                                                                              k = "WindowsMobile", Xa = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                k = r, Xa = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Fc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = S, I = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : N && da ? (g(a, "Android 4.4;") ? A = {min:2.3} : 4 <= z(B) ? A = B : A = {min:2.2}, h = A, Ac && (G = !0)) : N && ea ? (B ? A = B : (A = {min:1.6}, G = !0), h = A, g(a, "Tablet") ? J = !0 : 
                                                                                    I = !0) : B ? (h = B, N = !0) : Gb && Ac ? (X = !0, ha ? A = {min:4.4} : fa && !zc || sc || Ib ? A = {min:4} : (A = B = void 0 !== Ra.style.touchAction ? {min:5} : Lb ? 4.4 : oc ? ja.connection ? p.searchBoxJavaBridge_ || fa ? Xb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? mc ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, yc && (m = "Samsung", n = yc)), h = A, N = !0) : Cc ? (h = {min:5}, X = N = !0) : Gb && (g(a, 
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
  T && (k = "FireOS");
  N && (k = k || "Android");
  Ya && (k = "WindowsPhone");
  m || (C = C || N, ea ? (m = C || Xa || I || J ? "PrestoMobile" : "Presto", n = rc) : xa ? ((A = cb(t, "Trident/") + 4) && A !== F && (e = "IEHost", f = A), 10 <= F && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = F), Xa || I || J || Ec ? m = "TridentMobile" : Fc && 5 <= F ? (m = "Tasman", e = "MacIE", f = F) : (m = "Trident", Fc && (e = "MacIE", f = F)), n = F) : Ta ? (m = Ya ? "EdgeMobile" : "EdgeHTML", n = c(t, "Edge/")) : Hb ? (m = "Goanna", n = 
  Hb) : da ? (m = C ? "Fennec" : "Gecko", n = P || tc) : ha ? (m = "Samsung", n = ha, X && (G = !0)) : (b = Dc || c(a, "NetFront/")) ? (m = "NetFront", n = b) : (b = c(a, "iCab")) ? (m = "iCab", n = b) : (b = Zb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || pc && S) ? (m = "OperaMini", n = b, k || (g(a, "iPhone") ? H = "iPhone" : g(a, "iPad") ? H = "iPad" : g(a, "iPod") && (H = "iPod"), H && (k = "iOS"))) : Sa ? (m = "UCWEB", n = hd) : kd ? (m = "KHTML", n = Bb) : N && zc ? (m = "AOSP", n = B, Aa = 
  !0, X && (G = !0)) : fa || sc || Ib ? (m = C ? "ChromiumMobile" : "Chromium", n = W, X && (G = !0)) : N && Lb ? (m = "ChromeWebView", n = 5 > z(B) ? B : W, Aa = !0, p.requestFileSystem || p.webkitRequestFileSystem || (Mb = !0), X && (G = !0)) : N && (S || X) ? (m = "AOSP", n = B, Aa = !0, X && (G = !0)) : W ? (m = C ? "ChromiumMobile" : "Chromium", n = W) : y && (m = "WebKit", n = y));
  if (!e) {
    if (b = Ta && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
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
            if (!Sa && (b = c(a, "UCBrowser/"))) {
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
                            if (b = c(a, "Focus/") || 9 > z(Jb) && Nb && 11 <= z(h) && Jb) {
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
                                                                      e = "Iron", f = b || fa && W;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || fa && W;
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
                                                                                            if (b = md || c(t, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (vc) {
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
                                                                                                          if (b = Jb || da && (tc || n)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = rc || Ib || uc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (xa) {
                                                                                                                e = "IE", f = n;
                                                                                                              } else {
                                                                                                                if (ha) {
                                                                                                                  e = m, f = ha;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (fa || Cc && Aa) && W) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (Aa && !Mb) {
                                                                                                                      e = m, f = n;
                                                                                                                    } else {
                                                                                                                      if (Nb || Mb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || S) {
                                                                                                                          e = "Safari", f = S || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = Fa(h), l[k] = Ga(h)) : l[k] = !0);
  m && (l.ENGINE = m, n ? (l.ENGINE_VERSION = Fa(n), l[m] = Ga(n)) : l[m] = !0, e || (e = m, f = n));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = Fa(f), l[e] = Ga(f)) : l[e] = !0);
  H && (l.DEVICE = H, Y ? (l.DEVICE_VERSION = Fa(Y), l[H] = Ga(Y)) : l[H] = !0);
  G && (l.PC_MODE = !0);
  var Ja = new ab, Ba = [], ec = !!w.getElementsByTagName, E = w.body, Z = E.style, u = l.Trident || l.TridentMobile, Ca = l.Tasman, vb = l.EdgeHTML || l.EdgeMobile, Pb = l.Presto || l.PrestoMobile, Qb = l.Gecko, Rb = l.Goanna, ob = l.WebKit, Ab = l.SafariMobile || l.iOSWebView, nd = l.OperaMini && l.UCWEB;
  u || Ca || (new ab('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var od = 5.5 > u, Gc = w.scripts, pd = (Ca ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : "modern") + ".css", Hc = 0 === location.href.indexOf("https");
  var pa = Gc[Gc.length - 1].src.split("/");
  --pa.length;
  var Ic = pa.join("/");
  0 <= "http: https:".indexOf(pa[0]) && pa.splice(0, 3);
  pa = pa.join("/");
  var U = function(a) {
    return void 0 !== a;
  };
  var Q = Array.prototype;
  Q.pop || (Q.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  Q.push || (Q.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  Q.shift || (Q.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  Q.splice || (Q.splice = function(a, b) {
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
  Q.indexOf || (Q.indexOf = function(a, b) {
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
  var Ia = [], qd = 0, la;
  if (5 > u || Ca) {
    p._wdb_onlooptimer = Ha, Ha = "_wdb_onlooptimer()";
  }
  var Jc = function(a) {
    Ia.length || (la = setInterval(Ha, 999));
    Ia.push({f:a, uid:++qd});
  };
  Ba.push(function() {
    Ab && Kc(Vc);
    Za($b);
  });
  var R = [], Lc = 0, aa;
  if (5 > u || Ca) {
    p._wdb_ontimer = qa, qa = "_wdb_ontimer()";
  }
  var x = function(a, b) {
    R.length || (aa = bb(qa, 64));
    R.push({f:a, p:b, uid:++Lc, t:new ka - 0 + 64});
    return Lc;
  };
  var Mc = function(a) {
    for (var b = R.length, d; d = R[--b];) {
      if (d.uid === a) {
        R.splice(b, 1);
        break;
      }
    }
  };
  Ba.push(function() {
    Ab && Kc(Wc);
    Za(ac);
  });
  var ra = [], cc, ib = 0, ia = p.matchMedia, ma;
  ra.push(function() {
    ma = O(E, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Nc = [], hb = p.onload, Oc = p.onunload;
  onload = gb;
  onunload = function(a) {
    var b;
    Oc && (b = Oc(a));
    K(Nc, a);
    onunload = Ja;
    return b;
  };
  var $a = function(a) {
    ra.push(a);
  };
  var Za = function(a) {
    Nc.push(a);
  };
  var dc = [];
  $a(function() {
    bc();
    Jc(bc);
  });
  var Sb = function(a) {
    dc.push(a);
  };
  var ta = [], sa, jb, kb;
  10 <= u || vb ? (ia("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    sa = jb = a.matches;
    K(ta, Ka());
  }), ia("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    sa = kb = a.matches;
    K(ta, Ka());
  }), ia("(-ms-high-contrast:active)").addListener(function(a) {
    sa = a.matches;
    K(ta, Ka());
  }), na = null) : 10 > u || (l.Win32 || l.Win64) && (44 <= Qb || Rb) ? $a(function() {
    ma.style.color = "#123456";
    ma.style.backgroundColor = "#123456";
    60 > Qb || Rb ? na() : na() && Jc(na);
    na = null;
  }) : na = null;
  var rd = [];
  ia && ia("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    K(rd, a.matches);
  });
  var Tb = [];
  p.onbeforeprint ? (onbeforeprint = function() {
    K(Tb, !0);
  }, onafterprint = function() {
    K(Tb, !1);
  }, Za(function() {
    onbeforeprint = onafterprint = Ja;
  })) : ia && ia("print").addListener(function(a) {
    K(Tb, a.matches);
  });
  var Pc = [], Ub = p.onscroll;
  onscroll = function(a) {
    var b;
    Ub && (b = Ub(a));
    gb || K(Pc);
    return b;
  };
  Za(function() {
    onscroll = Ub = Ja;
  });
  var Kc = function(a) {
    Pc.push(a);
  };
  var Qc = La("html")[0];
  var wa = La("head")[0];
  var Ma;
  ra.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && M(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (od ? (k = f.sheet || f.styleSheet) && (l = 10 <= u ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new ab("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  M(f);
                  break;
                }
              case "LINK":
                ec && !wa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === h.indexOf(c[--q])) {
                    M(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (fc(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (fc(f, "skip-cleanup")) {
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
        k = e.pop(), wa.appendChild(k);
      }
    }
    var b = !(8 > Pb || 5 > u || Ca), c = ["og:", "twitter:", "fb:"], e = [];
    a(Qc);
  });
  var mb = {}, jc = {}, Vb, V, sd = U(Z.transform) ? "transform" : U(Z["-o-transform"]) ? "-o-transform" : U(Z["-ms-transform"]) ? "-ms-transform" : U(Z["-moz-transform"]) ? "-moz-transform" : U(Z["-webkit-transform"]) ? "-webkit-transform" : "";
  Sb(function(a) {
    a && !U(V) && (a = O(E, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), V = Qb || Rb || 8 <= u || vb || 6 <= a.offsetWidth, M(a));
  });
  var Na;
  9 > u && $a(function(a) {
    a = O(E, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Vb = 1 < a.offsetHeight;
    a.style.cssText = "";
    M(a);
  });
  var Rc = Hc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var Zc = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || x(b, !1)) : e = x(a));
    }
    var b = $c;
    if (Rc) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!u || 11 === u || 11 === l.IEHost) && c.width || f || (f = !0, e && Mc(e), e = x(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Mc(e);
        Pb && !c.complete ? e = x(b, !1) : x(b, !0);
      };
      c.src = Rc;
      8 > Pb && c.complete ? x(b, !0) : f || (e = x(a));
    } else {
      x(b, !1);
    }
  };
  var Yc = hc;
  for (l.IEHost && 5.5 > u && $a(function() {
    var a = w.createElement("link");
    wa.appendChild(a);
    a.setAttribute("href", (Ic ? Ic + "/" : "") + pd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); Ba.length;) {
    Ba.shift()();
  }
  Ba = null;
  var Sc = Sc || {}, D = String.fromCharCode, v = Hc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Da = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", D(960), ")", "(", D(234), D(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", D(9824), "\u2190", D(9829), D(9830), D(9827), D(956), "\u03a9", "\u2193", "\u2192", "%", D(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", D(9619)], qb = [], pb, rb, Tc;
  Sb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      va(a, "pbTipPos" + b.toUpperCase());
      O(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      O(a, "div", {className:"pbTail" + c});
      g && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (V && n) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = Da[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - z(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Ma = 1, k = O(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      p || f || oa(a, "pbChrCS") && qb.push(a);
    }
    if (a && !Tc) {
      Tc = !0;
      var e = 6 > u ? 1 : 0;
      a = La("SAMP");
      var f = 9 > u, g = 5 <= u && 6 > u, h, k, l, m;
      Vb && va(E, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== Z.opacity || void 0 !== Z["-moz-opacity"] || void 0 !== Z["-khtml-opacity"], n = !p && !f && !0, r = !V || n || void 0;
        for (l = -1; h = a[++l];) {
          if (oa(h.parentElement || h.parentNode, "pbLCD")) {
            var w = h.children;
            for (h = w.length; h;) {
              var t = w[--h];
              switch(t.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (V || b(t), m = t.children.length; m;) {
                      c(t.children[--m]);
                    }
                  }
                  nd ? t.setAttribute("href", "javascript:void(0)") : t.onclick = Xc;
                  break;
                case "B":
                  r && c(t);
              }
            }
          }
        }
        qb.length ? (setInterval(kc, 500), V ? ba([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ba([".pbChrCS", "background-position:0 -51px"])) : kc = null;
        n && (V ? ba([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + v + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        v + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + v + "pbLCD/x3_a90.png)"]) : ba([".pbAlp1", "background-image:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        v + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + v + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + v + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > ob && (Qc.onclick = function(a) {
    if (rb) {
      return rb = !1, a.preventDefault(), !1;
    }
  });
  ta.push(function(a) {
    a ? (sd || 9 === u || 5.5 <= u && 9 > u && Vb) && va(E, "jsCanRotate") : oa(E, "jsCanRotate") && (a = E.className.split(" "), a.splice(a.indexOf("jsCanRotate"), 1), E.className = a.join(" "));
  });
  var yb = Da[7], lc = Da[30], bd = Da[113], Pa = D(8337) + D(8331), zb = D(160), fd = D(8194), dd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ed = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), cd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + lc + Da[31]).split(""), ca = 
  [], wb = [], tb, xb;
  Sb(function(a) {
    if (a && !xb) {
      var b = w.all || La("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        oa(c, "pbList") ? Qa(c) : oa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Qa(c, !0);
      }
      ca.length && Oa();
      xb = !0;
    }
  });
  Sc.prettify = Qa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

