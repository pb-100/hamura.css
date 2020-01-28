PB100 = {};
(function(vd, l, m, w, ma, Zb, z, $b, eb, wd, fb, Xc, na, xd) {
  function gb(d, a) {
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
  function ac(d, a) {
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
  function bc() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > ac(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function Ga(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Ha(d) {
    return d === d + "" ? z(d) : d;
  }
  function Ia() {
    for (var d, a = 0; a < Ja.length; ++a) {
      d = Ja[a], d.f();
    }
  }
  function Yc() {
    oa && (cc(), oa = setInterval(Ia, 999));
  }
  function cc() {
    oa && (oa = clearInterval(oa));
  }
  function ta() {
    for (var d, a = 0, b = new na - 0; a < S.length;) {
      b < S[0].t ? ++a : (d = S.splice(a, 1)[0], d.f(d.p));
    }
    da = S.length ? fb(ta, 64) : 0;
  }
  function Zc() {
    da && (dc(), da = fb(ta, 64));
  }
  function dc() {
    da && (da = Xc(da));
  }
  function L(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function kb(d) {
    var a;
    lb && (a = lb(d));
    L(va, d);
    onload = Ka;
    va = kb = lb = onload = null;
    return a;
  }
  function ec() {
    var d = 9 === pa.offsetWidth;
    fc !== d && L(gc, fc = d);
  }
  function qa() {
    function d(d) {
      return "#ffffff" === d || "rgb(255,255,255)" === d;
    }
    var a = w.defaultView, b = mb, c = a ? a.getComputedStyle(pa, null) : pa.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return wa = "#123456" !== a && "rgb(18,52,86)" !== a, nb = ("#000000" === a || "rgb(0,0,0)" === a) && d(c), ob = d(a) && ("#000000" === c || "rgb(0,0,0)" === c), b !== La() && L(xa, mb), !0;
    }
  }
  function La() {
    return mb = wa ? ob ? 2 : nb ? 3 : 1 : 0;
  }
  function Ma(d) {
    var a = a || w;
    return hc ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function N(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function pb(d, a) {
    var b = w.createElement(d);
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
      a = pb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = pb(a);
    }
    Na ? (2 === Na && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Na = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(w.createTextNode(e));
    return a;
  }
  function ic(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function ra(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function V(d, a) {
    var b;
    if (!ra(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function Oa(a) {
    if (ra(A, a)) {
      var d = A.className.split(" ");
      d.splice(d.indexOf(a), 1);
      A.className = d.join(" ");
    }
  }
  function jc(a, b) {
    var d = P(ya, "style", {type:"text/css", media:b}, 0, a);
    qb[b] = d.sheet || d.styleSheet;
  }
  function W(a, b) {
    for (var d = b || "all", c = qb[d], e, q, f = "", g; a.length;) {
      e = a.shift(), q = a.shift(), g = e + "{" + q + "}", c ? c.addRule ? c.addRule(e, q) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && jc(f, d);
  }
  function rb(a) {
    if (X(Pa)) {
      x(a, Pa);
    } else {
      if (8 > t) {
        x(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          a(Pa = !1);
        };
        d.onload = function() {
          a(Pa = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function kc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      w.fonts.load(d).then(function() {
        w.fonts.check(d, "i");
        hb(b) ? x(a, v) : rb(ib);
      }, function() {
        rb(ib);
      });
    }
    function q(a) {
      return w.hidden || w.msHidden || w.mozHidden || w.webkitHidden ? !1 : a < new na - r;
    }
    function h(d) {
      d && (r = new na - 0);
      hb(b) ? a(v) : q(p) ? C ? a(0) : 9 > t ? x(a, 0) : rb(ib) : x(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      jb = ["sans-serif", "serif"];
      M = P(A, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (u = {}; d = jb[++a];) {
        M.style.fontFamily = d, u[d] = M.offsetWidth;
      }
    }
    function hb(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (A.appendChild(M); c = jb[++b];) {
        if (M.style.fontFamily = '"' + a + '",' + c, M.offsetWidth !== u[c]) {
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
      return v = d + q;
    }
    function ib(d) {
      (C = d) ? n(!0) : a(0);
    }
    function n(d) {
      d && (r = new na - 0);
      for (b in c) {
        if (hb(b)) {
          Qa = P(A, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = qb.all, f = lc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : jc('@import "' + d + '"', "all");
          lc.all = ++f;
          x(m, !0);
        } else {
          q(100) ? (delete c[b], x(n, !0)) : x(n);
        }
        return;
      }
      a(0);
    }
    function m(d) {
      d && (r = new na - 0);
      1 < Qa.offsetWidth ? (N(Qa), p = 100, x(h, !0)) : q(p) ? (N(Qa), a(0)) : x(m);
    }
    var p = g || 5000, r, C, M, Qa, jb, u, v;
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > t) {
        return !0;
      }
      var d = P(ya, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      N(d);
      return a;
    })() ? !w.fonts || 603 > sb ? h(!0) : d() : x(a, 0);
  }
  function mc() {
    tb = !tb;
    for (var a = -1, b; b = ub[++a];) {
      b.style.visibility = tb ? "" : "hidden";
    }
  }
  function $c(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), vb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Ra() {
    Ra = null;
    ad(wb, "PB-100", {"PB-100_canTTF":u + "pbFont/ttf.css", "PB-100_canWOFF":u + "pbFont/woff.css", "PB-100_canEOT":u + "pbFont/eot.css", "PB-100_canSVG":u + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Sa}, 5000);
  }
  function wb(a) {
    (Ta = a) ? xb() : za ? nc(!0) : X(za) ? xb() : bd();
  }
  function nc(a) {
    a && (V(A, "pbList-noWebFont"), Y ? (W([".pbList font:after", "content:url(" + u + "pbFont/" + (9 > t ? "x3mask_ie.png" : "x3mask.png") + ")"]), W([".jsHcmBow .pbList font:after, .jsHcm .pbList font:after", "content:url(" + u + "pbFont/" + (9 > t ? "x3mask_ie_dark.png" : "x3mask_dark.png") + ")"], "screen"), t || yb || W([".pbList font:after", "content:url(" + u + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)")) : W([".pbList font", "background-image:url(" + u + "pbFont/" + 
    (9 > t ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    xb();
  }
  function xb() {
    for (wb = kc = null; ea.length;) {
      Ua(ea.shift(), zb.shift());
    }
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
    if (wb) {
      -1 === ea.indexOf(a) && (ea.push(a), zb.push(b), Ab && Ra && Ra());
    } else {
      var e = ea.indexOf(a);
      0 <= e && ea.splice(e, 1) && zb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Ta && (e = e.split(Sa).join(oc)), b ? a.data = e : cd(e.split("\r").join("").split("&yen;").join(dd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Bb).split("&amp;").join("&"), a);
      }
    }
  }
  function cd(a, b) {
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
        l === Bb || k ? (g += "~", l === Bb && (k = !k)) : g += l;
      }
      g = c(g, ed, "^");
      g = c(g, fd, "{");
      g = c(g, gd, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var n = l === Cb, p = " " === l;
      l = n ? " " : l;
      var m = g.charAt(h), r = u, u = "|" === m;
      m = f["+|~{}^".indexOf(m) + 1];
      if ("\n" !== l) {
        if (Ta || !za) {
          8 > t && p && (l = h === k - 1 ? Cb : hd), 2 === Ta && a.substr(h, 2) === Sa && (l = Sa, ++h), p = p && "str" === m ? ' class="pbList-strsp"' : n ? "" : !p && m ? ' class="pbList-' + m + '"' : "";
        } else {
          var C = fa.indexOf(l);
          C = -1 === C ? "" : fa.indexOf(l).toString(16).toUpperCase();
          C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "";
          p = p && "str" === m ? ' class="pbList-strsp"' : p || !C ? "" : m ? ' class="pbList-' + m + (C ? " " + C : "") + '"' : ' class="' + C + '"';
        }
        r && n && (sb || Db) && (l = Cb);
        q.push("<font" + p + ">" + l + "</font>");
      } else {
        q.push(l);
      }
    }
    q = q.join("");
    if (1 === b.nodeType) {
      b.innerHTML = q;
    } else {
      for (f = pb("font", q); q = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(q, b);
      }
      N(b);
    }
  }
  var n, p, a = ma.userAgent, v = ma.appVersion, Eb = z(v) | 0, r = ma.platform, Va = w.documentElement, Fb = w.documentMode, Gb = Zb.width, Hb = Zb.height, pc = m.HTMLAudioElement, qc = m.performance, rc = m.Int8Array, id = void 0 !== m.ontouchstart, T = c(v, "Version/") || c(a, "Version/"), ha = Va && void 0 !== Va.style.MozAppearance, sc = m.operamini, Wa = g(a, "UCWEB"), jd = Wa && c(a, " U2/"), kd = Wa && c(a, "; wds "), Ib = c(a.split("_").join("."), "; iPh OS "), ld = c(a, "; Adr "), tc = 
  g(v, "YJApp-ANDROID"), O = g(r, "Android") || ha && g(v, "Android") || tc, D = c(r, "Android ") || c(v, "Android ") || c(a, "Android ") || ld, Jb = g(r, "Linux"), ia = !sc && m.opera, uc = ia && (ia.version && "function" === typeof ia.version ? ia.version() : bc(c(a, "Opera "), T, "" + Eb)), vc = m.opr, Aa = !ia && (w.all || Fb), G = Aa && (Fb ? Fb : m.g ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4), Xa = !Aa && Va.msContentZoomFactor, ja = !Xa && 
  m.chrome, Kb = ha && c(a, "Goanna/"), Q = !Kb && ha && c(a, "rv:"), wc = c(a, "Firefox/"), xc = c(a, "Opera/"), y = gb(a, "AppleWebKit/"), Z = c(a, "Chrome/"), Lb = c(a, "OPR/"), md = c(v, "KHTML/"), yc = c(a.toLowerCase(), "iris"), Mb = c(a, "FxiOS/"), ka = gb(a, "SamsungBrowser/"), Ba;
  if (Ba = !ka) {
    a: {
      for (var zc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ya, Nb = zc.length; Ya = zc[--Nb];) {
        if (g(a, Ya)) {
          Ba = 2 > z(T) ? T : 0.9;
          break a;
        }
      }
      var Ac = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Nb = Ac.length; Ya = Ac[--Nb];) {
        if (g(a, Ya)) {
          Ba = T;
          break a;
        }
      }
      Ba = void 0;
    }
  }
  var Bc = Ba, Cc = ja && 534.3 >= y, Dc = id && (y || ha) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !D && tc, Ec = m.puffinDevice, Za = Ec && Ec.clientInfo, Ca = Za && "iOS" === Za.os && Za.osVersion, $a = Ca && Za.model, Ob = !G && w.registerElement, nd = !G && w.execCommand, Fc = Jb && Ob && "11.0.696.34" === Z, aa, H, b, Da, Pb, Qb;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = xc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === Gb && 240 === Hb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var od = h;
        } else {
          if ("Nintendo Swicth" === r) {
            k = "Swicth", h = c(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              k = "WiiU", h = c(v, "NintendoBrowser/"), y = c(v, "AppleWebKit/");
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
                    var Gc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > ac("4.10", b) && (n = "Sony", p = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Eb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            Gc = 3.4;
                            e = k;
                            f = 2;
                            var ab = !0;
                          } else {
                            if (0 === r.indexOf("iP") || Ib || Ca) {
                              if (Ca) {
                                switch(h = Ca, $a.substr(0, 4)) {
                                  case "iPho":
                                    var I = "iPhone";
                                    var ba = z($a.substr(6));
                                    var J = !0;
                                    break;
                                  case "iPad":
                                    I = "iPad";
                                    ba = z($a.substr(4));
                                    var K = !0;
                                    break;
                                  case "iPod":
                                    I = "iPod";
                                    ba = z($a.substr(4));
                                    var Hc = !0;
                                }
                              } else {
                                Ib ? h = Ib : h = c(v.split("_").join("."), "OS ");
                                h || (H = !0, h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ma.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : $b.isNaN ? 9.2 : m.SharedWorker ? qc && qc.now ? 8.0 : 8.4 : nd ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : rc ? 4.3 : pc ? 4.1 : 3.2);
                                var Rb = 1 === m.devicePixelRatio;
                                var B = Gb === 1.5 * Hb || 1.5 * Gb === Hb;
                                0 === r.indexOf("iPhone") ? (I = "iPhone", ba = B ? Rb ? {max:3} : {min:4, max:5} : {max:6}, J = !0) : 0 === r.indexOf("iPad") ? (I = "iPad", ba = Rb ? {max:2} : {min:3}, K = !0) : 0 === r.indexOf("iPod") && (I = "iPod", ba = B ? Rb ? {max:3} : 4 : {min:5}, Hc = !0);
                              }
                              Ca || !ma.standalone && void 0 === w.fullscreenEnabled && void 0 === w.webkitFullscreenEnabled ? (Qb = !0, n = "iOSWebView") : (n = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              p = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", n = "AOSP", p = 2.2, e = n, f = p, O = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", n = "AOSP", p = 2.2, e = n, f = p;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== m.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > Q ? "1.0.1" : 19 > Q ? 1.1 : 27 > Q ? 1.2 : 29 > Q ? 1.3 : 31 > Q ? 1.4 : 33 > Q ? 2.0 : 35 > Q ? 2.1 : 38 > Q ? 2.2 : 45 > Q ? 2.5 : 2.6, g(a, "Mobile") ? J = !0 : g(a, "Tablet") && (K = !0);
                                    } else {
                                      if (m.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (J = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ka, n = e, p = f, J = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(v, "Windows Phone OS ") || kd) {
                                            var bb = !0;
                                            h = b;
                                            J = !0;
                                          } else {
                                            if (Xa && "ARM" === r) {
                                              bb = !0, h = 10, H = J = !0;
                                            } else {
                                              if (Aa && g(v, "ZuneWP")) {
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
                                                              U = !0, h = 5 <= z(D) ? 5 : 4, E = K = !0;
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
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, n = "AOSP", p = 2.2, e = n, f = p;
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
                                                                            if (0 === a.indexOf("Windows Mobile;") || yc) {
                                                                              k = "WindowsMobile", ab = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                k = r, ab = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Ic = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = T, J = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : O && ha ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= z(D) ? B = D : B = {min:2.2}, h = B, Dc && (H = !0)) : O && ia ? (D ? B = D : (B = {min:1.6}, H = !0), h = B, g(a, "Tablet") ? K = !0 : 
                                                                                    J = !0) : D ? (h = D, O = !0) : Jb && Dc ? (aa = !0, ka ? B = {min:4.4} : ja && !Cc || vc || Lb ? B = {min:4} : (B = D = void 0 !== Va.style.touchAction ? {min:5} : Ob ? 4.4 : rc ? ma.connection ? m.searchBoxJavaBridge_ || ja ? $b.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? pc ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, Bc && (n = "Samsung", p = Bc)), h = B, O = !0) : Fc ? (h = {min:5}, aa = O = !0) : Jb && (g(a, 
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
  O && (k = k || "Android");
  bb && (k = "WindowsPhone");
  n || (E = E || O, ia ? (n = E || ab || J || K ? "PrestoMobile" : "Presto", p = uc) : Aa ? ((B = gb(v, "Trident/") + 4) && B !== G && (e = "IEHost", f = B), 10 <= G && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = G), ab || J || K || Hc ? n = "TridentMobile" : Ic && 5 <= G ? (n = "Tasman", e = "MacIE", f = G) : (n = "Trident", Ic && (e = "MacIE", f = G)), p = G) : Xa ? (n = bb ? "EdgeMobile" : "EdgeHTML", p = c(v, "Edge/")) : Kb ? (n = "Goanna", p = 
  Kb) : ha ? (n = E ? "Fennec" : "Gecko", p = Q || wc) : ka ? (n = "Samsung", p = ka, aa && (H = !0)) : (b = Gc || c(a, "NetFront/")) ? (n = "NetFront", p = b) : (b = c(a, "iCab")) ? (n = "iCab", p = b) : (b = bc(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || sc && T) ? (n = "OperaMini", p = b, k || (g(a, "iPhone") ? I = "iPhone" : g(a, "iPad") ? I = "iPad" : g(a, "iPod") && (I = "iPod"), I && (k = "iOS"))) : Wa ? (n = "UCWEB", p = jd) : md ? (n = "KHTML", p = Eb) : O && Cc ? (n = "AOSP", p = D, Da = 
  !0, aa && (H = !0)) : ja || vc || Lb ? (n = E ? "ChromiumMobile" : "Chromium", p = Z, aa && (H = !0)) : O && Ob ? (n = "ChromeWebView", p = 5 > z(D) ? D : Z, Da = !0, m.requestFileSystem || m.webkitRequestFileSystem || (Pb = !0), aa && (H = !0)) : O && (T || aa) ? (n = "AOSP", p = D, Da = !0, aa && (H = !0)) : Z ? (n = E ? "ChromiumMobile" : "Chromium", p = Z) : y && (n = "WebKit", p = y));
  if (!e) {
    if (b = Xa && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(v, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(v, "OPT/")) {
          e = "OperaTouch", f = b, H = H || !g(v, "Mobile/");
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
                            if (b = c(a, "Focus/") || 9 > z(Mb) && Qb && 11 <= z(h) && Mb) {
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
                                                                      e = "Iron", f = b || ja && Z;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || ja && Z;
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
                                                                                            if (b = od || c(v, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (yc) {
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
                                                                                                          if (b = Mb || ha && (wc || p)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = uc || Lb || xc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (Aa) {
                                                                                                                e = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (ka) {
                                                                                                                  e = n, f = ka;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ja || Fc && Da) && Z) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (Da && !Pb) {
                                                                                                                      e = n, f = p;
                                                                                                                    } else {
                                                                                                                      if (Qb || Pb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || T) {
                                                                                                                          e = "Safari", f = T || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = Ga(h), l[k] = Ha(h)) : l[k] = !0);
  n && (l.ENGINE = n, p ? (l.ENGINE_VERSION = Ga(p), l[n] = Ha(p)) : l[n] = !0, e || (e = n, f = p));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = Ga(f), l[e] = Ha(f)) : l[e] = !0);
  I && (l.DEVICE = I, ba ? (l.DEVICE_VERSION = Ga(ba), l[I] = Ha(ba)) : l[I] = !0);
  H && (l.PC_MODE = !0);
  var Ka = new eb, Ea = [], hc = !!w.getElementsByTagName, A = w.body, ca = A.style, t = l.Trident || l.TridentMobile, Fa = l.Tasman, yb = l.EdgeHTML || l.EdgeMobile, Sb = l.Presto || l.PrestoMobile, Tb = l.Gecko, Ub = l.Goanna, sb = l.WebKit, Db = l.SafariMobile || l.iOSWebView, pd = l.OperaMini && l.UCWEB;
  t || Fa || (new eb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var qd = 5.5 > t, Jc = w.scripts, rd = (Fa ? "ie5mac" : 5.5 > t ? "ie5win" : 6 > t ? "ie55" : 10 > t ? "ie" + (t | 0) : "modern") + ".css", Kc = 0 === location.href.indexOf("https");
  var sa = Jc[Jc.length - 1].src.split("/");
  --sa.length;
  var Lc = sa.join("/");
  0 <= "http: https:".indexOf(sa[0]) && sa.splice(0, 3);
  sa = sa.join("/");
  var X = function(a) {
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
  var Ja = [], sd = 0, oa;
  if (5 > t || Fa) {
    m._wdb_onlooptimer = Ia, Ia = "_wdb_onlooptimer()";
  }
  var Mc = function(a) {
    Ja.length || (oa = setInterval(Ia, 999));
    Ja.push({f:a, uid:++sd});
  };
  Ea.push(function() {
    Db && Nc(Yc);
    cb(cc);
  });
  var S = [], Oc = 0, da;
  if (5 > t || Fa) {
    m._wdb_ontimer = ta, ta = "_wdb_ontimer()";
  }
  var x = function(a, b) {
    S.length || (da = fb(ta, 64));
    S.push({f:a, p:b, uid:++Oc, t:new na - 0 + 64});
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
  Ea.push(function() {
    Db && Nc(Zc);
    cb(dc);
  });
  var va = [], fc, mb = 0, la = m.matchMedia, pa;
  va.push(function() {
    pa = P(A, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Qc = [], lb = m.onload, Rc = m.onunload;
  onload = kb;
  onunload = function(a) {
    var b;
    Rc && (b = Rc(a));
    L(Qc, a);
    onunload = Ka;
    return b;
  };
  var db = function(a) {
    va.push(a);
  };
  var cb = function(a) {
    Qc.push(a);
  };
  var gc = [];
  db(function() {
    ec();
    Mc(ec);
  });
  var Vb = function(a) {
    gc.push(a);
  };
  var xa = [], wa, nb, ob;
  10 <= t || yb ? (la("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    wa = nb = a.matches;
    L(xa, La());
  }), la("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    wa = ob = a.matches;
    L(xa, La());
  }), la("(-ms-high-contrast:active)").addListener(function(a) {
    wa = a.matches;
    L(xa, La());
  }), qa = null) : 10 > t || (l.Win32 || l.Win64) && (44 <= Tb || Ub) ? db(function() {
    pa.style.color = "#123456";
    pa.style.backgroundColor = "#123456";
    60 > Tb || Ub ? qa() : qa() && Mc(qa);
    qa = null;
  }) : qa = null;
  var td = [];
  la && la("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    L(td, a.matches);
  });
  var Wb = [];
  m.onbeforeprint ? (onbeforeprint = function() {
    L(Wb, !0);
  }, onafterprint = function() {
    L(Wb, !1);
  }, cb(function() {
    onbeforeprint = onafterprint = Ka;
  })) : la && la("print").addListener(function(a) {
    L(Wb, a.matches);
  });
  var Sc = [], Xb = m.onscroll;
  onscroll = function(a) {
    var b;
    Xb && (b = Xb(a));
    kb || L(Sc);
    return b;
  };
  cb(function() {
    onscroll = Xb = Ka;
  });
  var Nc = function(a) {
    Sc.push(a);
  };
  var Tc = Ma("html")[0];
  var ya = Ma("head")[0];
  var Na;
  va.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && N(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (qd ? (k = f.sheet || f.styleSheet) && (l = 10 <= t ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new eb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
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
    var b = !(8 > Sb || 5 > t || Fa), c = ["og:", "twitter:", "fb:"], e = [];
    a(Tc);
  });
  var qb = {}, lc = {}, Yb, za, Y, ud = X(ca.transform) ? "transform" : X(ca["-o-transform"]) ? "-o-transform" : X(ca["-ms-transform"]) ? "-ms-transform" : X(ca["-moz-transform"]) ? "-moz-transform" : X(ca["-webkit-transform"]) ? "-webkit-transform" : "";
  Vb(function(a) {
    a && !X(Y) && (a = P(A, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), Y = Tb || Ub || 8 <= t || yb || 6 <= a.offsetWidth, N(a));
  });
  var Pa;
  9 > t && db(function(a) {
    a = P(A, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Yb = 1 < a.offsetHeight;
    a.style.cssText = "";
    N(a);
  });
  var Uc = Kc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var bd = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || x(b, !1)) : e = x(a));
    }
    var b = nc;
    if (Uc) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!t || 11 === t || 11 === l.IEHost) && c.width || f || (f = !0, e && Pc(e), e = x(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Pc(e);
        Sb && !c.complete ? e = x(b, !1) : (za = !0, x(b, !0));
      };
      c.src = Uc;
      8 > Sb && c.complete ? (za = !0, x(b, !0)) : f || (e = x(a));
    } else {
      x(b, !1);
    }
  };
  var ad = kc;
  for (l.IEHost && 5.5 > t && db(function() {
    var a = w.createElement("link");
    ya.appendChild(a);
    a.setAttribute("href", (Lc ? Lc + "/" : "") + rd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); Ea.length;) {
    Ea.shift()();
  }
  Ea = null;
  var Vc = Vc || {}, F = String.fromCharCode, u = Kc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", fa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", F(960), ")", "(", F(234), F(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", F(9824), "\u2190", F(9829), F(9830), F(9827), F(956), "\u03a9", "\u2193", "\u2192", "%", F(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", F(9619)], ub = [], tb, vb, Wc;
  Vb(function(a) {
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
      if (Y && n) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = fa[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - z(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Na = 1, k = P(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      p || f || ra(a, "pbChrCS") && ub.push(a);
    }
    if (a && !Wc) {
      Wc = !0;
      var e = 6 > t ? 1 : 0;
      a = Ma("SAMP");
      var f = 9 > t, g = 5 <= t && 6 > t, h, k, l, m;
      Yb && V(A, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== ca.opacity || void 0 !== ca["-moz-opacity"] || void 0 !== ca["-khtml-opacity"], n = !p && !f && !0, r = !Y || n || void 0;
        for (l = -1; h = a[++l];) {
          if (ra(h.parentElement || h.parentNode, "pbLCD")) {
            var w = h.children;
            for (h = w.length; h;) {
              var v = w[--h];
              switch(v.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (Y || b(v), m = v.children.length; m;) {
                      c(v.children[--m]);
                    }
                  }
                  pd ? v.setAttribute("href", "javascript:void(0)") : v.onclick = $c;
                  break;
                case "B":
                  r && c(v);
              }
            }
          }
        }
        ub.length ? (setInterval(mc, 500), Y ? W([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : W([".pbChrCS", "background-position:0 -51px"])) : mc = null;
        n && (Y ? W([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + u + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + u + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + u + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + u + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + u + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + u + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        u + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + u + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + u + "pbLCD/x3_a90.png)"]) : W([".pbAlp1", "background-image:url(" + u + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + u + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + u + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + u + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + u + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        u + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + u + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + u + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + u + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > sb && (Tc.onclick = function(a) {
    if (vb) {
      return vb = !1, a.preventDefault(), !1;
    }
  });
  xa.push(function(a) {
    Oa("jsHcm");
    Oa("jsHcmWob");
    Oa("jsHcmBow");
    if (a) {
      switch((ud || 9 === t || 5.5 <= t && 9 > t && Yb) && V(A, "jsCanRotate"), a) {
        case 1:
          V(A, "jsHcm");
          break;
        case 2:
          V(A, "jsHcmWob");
          break;
        case 3:
          V(A, "jsHcmBow");
      }
    } else {
      Oa("jsCanRotate");
    }
  });
  var Bb = fa[7], oc = fa[30], dd = fa[113], Sa = F(8337) + F(8331), Cb = F(160), hd = F(8194), fd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), gd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), ed = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + oc + fa[31]).split(""), ea = 
  [], zb = [], Ta, Ab;
  Vb(function(a) {
    if (a && !Ab) {
      var b = w.all || Ma("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        ra(c, "pbList") ? Ua(c) : ra(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Ua(c, !0);
      }
      ea.length && Ra();
      Ab = !0;
    }
  });
  Vc.prettify = Ua;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

