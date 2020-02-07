PB100 = {};
(function(Fd, l, m, w, W, Yb, z, Zb, hb, Gd, ib, dd, da, Hd) {
  function jb(c, a) {
    var q = z(c.split(a)[1]);
    return 0 <= q ? q : 0;
  }
  function g(c, a) {
    return 0 <= c.indexOf(a);
  }
  function Ga(c, a) {
    for (var q in a) {
      if (q === c) {
        return !0;
      }
    }
  }
  function d(c, a) {
    var q = "", b = -1, d;
    if (c = c.split(a)[1]) {
      for (; d = c.charCodeAt(++b);) {
        if (48 <= d && 57 >= d || 46 === d) {
          q += c.charAt(b);
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
  function ac(c, a) {
    var q = 0, b;
    c = c.split(".");
    a = a.split(".");
    for (b = Math.min(c.length, a.length); q < b; ++q) {
      var d = z(c[q]), e = z(a[q]);
      if (d !== e) {
        return d > e ? 1 : -1;
      }
    }
    return c.length === a.length ? 0 : c.length > a.length ? 1 : -1;
  }
  function bc() {
    for (var c = arguments, a = 1, b = c.length, d = c[0], e; a < b; ++a) {
      0 > ac(d, e = c[a]) && (d = e);
    }
    return d;
  }
  function Ha(c) {
    return c === c + "" ? c : c === c - 0 ? "" + c : c.min && c.max ? c.min + "~" + c.max : c.min ? c.min + "~" : "~" + c.max;
  }
  function Ia(c) {
    return c === c + "" ? z(c) : c;
  }
  function Ja() {
    for (var c, a = 0; a < Ka.length; ++a) {
      c = Ka[a], c.f();
    }
  }
  function ed() {
    na && (cc(), na = setInterval(Ja, 999));
  }
  function cc() {
    na && (na = clearInterval(na));
  }
  function ta() {
    for (var c, a = 0, b = new da - 0; a < T.length;) {
      b < T[0].t ? ++a : (c = T.splice(a, 1)[0], c.f(c.p));
    }
    ea = T.length ? ib(ta, 64) : 0;
  }
  function fd() {
    ea && (dc(), ea = ib(ta, 64));
  }
  function dc() {
    ea && (ea = dd(ea));
  }
  function L(c, a) {
    for (var b = 0, q = c.length; b < q; ++b) {
      c[b](a);
    }
  }
  function mb(c) {
    var a;
    nb && (a = nb(c));
    L(va, c);
    onload = La;
    va = mb = nb = onload = null;
    return a;
  }
  function ec() {
    var c = 9 === oa.offsetWidth;
    fc !== c && L(gc, fc = c);
  }
  function pa() {
    function c(c) {
      return "#ffffff" === c || "rgb(255,255,255)" === c;
    }
    var a = w.defaultView, b = ob, d = a ? a.getComputedStyle(oa, null) : oa.currentStyle;
    a = (d && d.color || "").split(" ").join("");
    d = (d && d.backgroundColor || "").split(" ").join("");
    if (a) {
      return wa = "#123456" !== a && "rgb(18,52,86)" !== a, pb = ("#000000" === a || "rgb(0,0,0)" === a) && c(d), qb = c(a) && ("#000000" === d || "rgb(0,0,0)" === d), b !== Ma() && L(xa, ob), !0;
    }
  }
  function Ma() {
    return ob = wa ? qb ? 2 : pb ? 3 : 1 : 0;
  }
  function Na(c) {
    var a = a || w;
    return hc ? a.getElementsByTagName(c) : a.all.i(c.toUpperCase());
  }
  function N(c) {
    (c.parentElement || c.parentNode).removeChild(c);
  }
  function rb(c, a) {
    var b = w.createElement(c);
    a && (b.innerHTML = a);
    return b;
  }
  function Q(c, a, b, d, e) {
    function q(c, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            X(c, a[b]);
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
      a = rb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = rb(a);
    }
    Oa ? (2 === Oa && (c = c.nextSibling), c ? (c.parentElement || c.parentNode).insertBefore(a, c) : (c.parentElement || c.parentNode).appendChild(a)) : c.appendChild(a);
    Oa = 0;
    b && q(a, b);
    d && f(a, d);
    e && !g && a.appendChild(w.createTextNode(e));
    return a;
  }
  function ic(c, a) {
    return c.hasAttribute ? c.hasAttribute(a) : null != c.getAttribute(a);
  }
  function qa(c, a) {
    return -1 !== (" " + c.className + " ").indexOf(" " + a + " ");
  }
  function X(c, a) {
    var b;
    if (!qa(c, a)) {
      if (b = c.className) {
        a = " " + a;
      }
      c.className = b + a;
    }
  }
  function Pa(a) {
    if (qa(A, a)) {
      var c = A.className.split(" ");
      c.splice(c.indexOf(a), 1);
      A.className = c.join(" ");
    }
  }
  function jc(a) {
    a = Q(ya, "style", {type:"text/css", media:"all"}, 0, a);
    sb = a.sheet || a.styleSheet;
  }
  function ra(a) {
    for (var c = sb, b, d, e = "", f; a.length;) {
      b = a.shift(), d = a.shift(), f = b + "{" + d + "}", c ? c.addRule ? c.addRule(b, d) : c.insertRule && c.insertRule(f, c.cssRules.length) : e += f;
    }
    e && jc(e);
  }
  function kc(a) {
    if (Y(Qa)) {
      x(a, Qa);
    } else {
      if (8 > u) {
        x(a, !1);
      } else {
        var c = new Image;
        c.onerror = function() {
          a(Qa = !1);
        };
        c.onload = function() {
          a(Qa = 1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function lc(a, b, d, e, f, g) {
    function c() {
      var c = '1.6em "' + b + '"';
      w.fonts.load(c).then(function() {
        w.fonts.check(c, "i");
        kb(b) ? x(a, t) : h(!0);
      }, function() {
        kc($b);
      });
    }
    function q(a) {
      return w.hidden || w.msHidden || w.mozHidden || w.webkitHidden ? (r = new da - 0, !1) : a < new da - r;
    }
    function h(c) {
      c && (r = new da - 0);
      kb(b) ? a(t) : q(p) ? C ? a(0) : 9 > u ? x(a, 0) : kc($b) : x(h);
    }
    function k() {
      var a = -1, c;
      k = null;
      lb = ["sans-serif", "serif"];
      M = Q(A, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (v = {}; c = lb[++a];) {
        M.style.fontFamily = c, v[c] = M.offsetWidth;
      }
    }
    function kb(a) {
      var c = 0, b = -1, d, e, q = 0;
      k && k();
      for (A.appendChild(M); d = lb[++b];) {
        if (M.style.fontFamily = '"' + a + '",' + d, M.offsetWidth !== v[d]) {
          c = 1;
          break;
        }
      }
      if (c && f) {
        for (e in f) {
          if (M.innerHTML = e, a = M.offsetWidth, M.innerHTML = f[e], q = a === M.offsetWidth ? 1 : 0, M.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      N(M);
      return t = c + q;
    }
    function $b(c) {
      (C = c) ? n(!0) : a(0);
    }
    function n(c) {
      c && (r = new da - 0);
      for (b in d) {
        if (kb(b)) {
          Ra = Q(A, "div", {"aria-hidden":"true", className:e, id:e});
          c = d[b];
          var b = sb, f = mc.all || 0;
          b ? b.addImport ? b.addImport(c, f) : b.insertRule && b.insertRule('@import "' + c + '"', f) : jc('@import "' + c + '"');
          mc.all = ++f;
          x(m, !0);
        } else {
          q(100) ? (delete d[b], x(n, !0)) : x(n);
        }
        return;
      }
      a(0);
    }
    function m(c) {
      c && (r = new da - 0);
      1 < Ra.offsetWidth ? (N(Ra), p = 100, x(h, !0)) : q(p) ? (N(Ra), a(0)) : x(m);
    }
    var p = g || 5000, r, C, M, Ra, lb, v, t;
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > u) {
        return !0;
      }
      var c = Q(ya, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = c.sheet || c.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      N(c);
      return a;
    })() ? !w.fonts || 603 > Sa ? h(!0) : c() : x(a, 0);
  }
  function nc() {
    tb = !tb;
    for (var a = -1, b; b = ub[++a];) {
      b.style.visibility = tb ? "" : "hidden";
    }
  }
  function gd(a) {
    var c = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), vb = !0, !1;
    }
    c.cancelBubble = !0;
    return c.returnValue = !1;
  }
  function Ta() {
    Ta = null;
    hd(wb, "PB-100", {"PB-100_canTTF":v + "pbFont/ttf.css", "PB-100_canWOFF":v + "pbFont/woff.css", "PB-100_canEOT":v + "pbFont/eot.css", "PB-100_canSVG":v + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Ua}, 5000);
  }
  function wb(a) {
    (Va = a) ? xb() : za ? oc(!0) : Y(za) ? xb() : id();
  }
  function oc(a) {
    a && (X(A, "pbList-noWebFont"), O ? ra([".pbList font:after", "content:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]) : ra([".pbList font", "background-image:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    xb();
  }
  function xb() {
    for (wb = lc = null; fa.length;) {
      Wa(fa.shift(), yb.shift());
    }
  }
  function Wa(a, b) {
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
    if (wb) {
      -1 === fa.indexOf(a) && (fa.push(a), yb.push(b), zb && Ta && Ta());
    } else {
      var e = fa.indexOf(a);
      0 <= e && fa.splice(e, 1) && yb.splice(e, 1);
      for (c(a); a = d.shift();) {
        e = a.data, 2 !== Va && (e = e.split(Ua).join(pc)), b ? a.data = e : jd(e.split("\r").join("").split("&yen;").join(kd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ab).split("&amp;").join("&"), a);
      }
    }
  }
  function jd(a, b) {
    function c(a, c) {
      for (var b = ""; c;) {
        c & 1 && (b += a), c >>= 1, a += a;
      }
      return b;
    }
    function d(a, b, d) {
      for (var e, f = -1, q, g; e = b[++f];) {
        for (; 0 <= (q = a.indexOf(e));) {
          g = e.length, a = a.substr(0, q) + c(d, g) + a.substr(q + g);
        }
      }
      return a;
    }
    function e(a) {
      var c = z(a), b = "" + c;
      return 0 < c && c === c | 0 && (c = a.indexOf(b) + b.length, c <= a.length) ? c : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), q = [], g = "", h = -1, k, l;
    if (function(a) {
      var c = a.indexOf("P");
      if (-1 === c) {
        return !1;
      }
      c = z(a.charAt(c + 1));
      return 0 <= c && 9 >= c;
    }(a)) {
      g = c("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (g = c("|", h), --h); l = a.charAt(++h);) {
        l === Ab || k ? (g += "~", l === Ab && (k = !k)) : g += l;
      }
      g = d(g, ld, "^");
      g = d(g, md, "{");
      g = d(g, nd, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var n = l === Bb, m = " " === l;
      l = n ? " " : l;
      var p = g.charAt(h), r = v, v = "|" === p;
      p = f["+|~{}^".indexOf(p) + 1];
      if ("\n" !== l) {
        if (Va || !za) {
          8 > u && m && (l = h === k - 1 ? Bb : od), 2 === Va && a.substr(h, 2) === Ua && (l = Ua, ++h), m = m && "str" === p ? ' class="pbList-strsp"' : n ? "" : !m && p ? ' class="pbList-' + p + '"' : "";
        } else {
          var C = ha.indexOf(l);
          C = -1 === C ? "" : ha.indexOf(l).toString(16).toUpperCase();
          C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "";
          m = m && "str" === p ? ' class="pbList-strsp"' : m || !C ? "" : p ? ' class="' + (C ? C + " " : "") + "pbList-" + p + '"' : ' class="' + C + '"';
        }
        r && n && (Sa || Xa) && (l = Bb);
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
      N(b);
    }
  }
  var n, p, a = W.userAgent, t = W.appVersion, Cb = z(t) | 0, r = W.platform, Db = w.documentElement, qc = Db && Db.style, Eb = w.documentMode, Fb = Yb.width, Gb = Yb.height, rc = m.HTMLAudioElement, sc = m.performance, tc = m.Int8Array, pd = void 0 !== m.ontouchstart, U = d(t, "Version/") || d(a, "Version/"), ia = void 0 !== qc.MozAppearance, uc = m.operamini, Ya = g(a, "UCWEB"), qd = Ya && d(a, " U2/"), rd = Ya && d(a, "; wds "), Hb = d(a.split("_").join("."), "; iPh OS "), sd = d(a, "; Adr "), 
  vc = g(t, "YJApp-ANDROID"), P = g(r, "Android") || ia && g(t, "Android") || vc, E = d(r, "Android ") || d(t, "Android ") || d(a, "Android ") || sd, Ib = g(r, "Linux"), Jb = "MacIntel" === r && void 0 !== W.standalone, ja = !uc && m.opera, wc = ja && (ja.version && "function" === typeof ja.version ? ja.version() : bc(d(a, "Opera "), U, "" + Cb)), xc = m.opr, Aa = !ja && (w.all || Eb), H = Aa && (Eb ? Eb : m.g ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 
  5 : 4), Za = !Aa && Db.msContentZoomFactor, ka = !Za && m.chrome, Kb = ia && d(a, "Goanna/"), R = !Kb && ia && d(a, "rv:"), yc = d(a, "Firefox/"), zc = d(a, "Opera/"), td = d(a, "Focus/"), Ac = m.FNRBrowser, y = jb(a, "AppleWebKit/"), Z = d(a, "Chrome/"), Lb = d(a, "OPR/"), ud = d(t, "KHTML/"), Bc = d(a.toLowerCase(), "iris"), Mb = d(a, "FxiOS/"), vd = d(a, "CriOS/"), wd = d(a, "EdgiOS/"), la = jb(a, "SamsungBrowser/"), Ba;
  if (Ba = !la) {
    a: {
      for (var Cc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      $a, Nb = Cc.length; $a = Cc[--Nb];) {
        if (g(a, $a)) {
          Ba = 2 > z(U) ? U : 0.9;
          break a;
        }
      }
      var Dc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Nb = Dc.length; $a = Dc[--Nb];) {
        if (g(a, $a)) {
          Ba = U;
          break a;
        }
      }
      Ba = void 0;
    }
  }
  var Ec = Ba, Fc = ka && 534.3 >= y, Gc = pd && (y || ia) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !E && vc, Hc = m.puffinDevice, ab = Hc && Hc.clientInfo, Ca = ab && "iOS" === ab.os && ab.osVersion, bb = Ca && ab.model, Ob = !H && w.registerElement, xd = !H && w.execCommand, Ic = Ib && Ob && "11.0.696.34" === Z, aa, I, b, Da, Pb, cb, Jc, Kc, Lc;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = zc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === Fb && 240 === Gb) {
        k = "New3DS", h = d(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = d(a, "Version/");
          y = 535;
          var yd = h;
        } else {
          if ("Nintendo Swicth" === r) {
            k = "Swicth", h = d(t, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              k = "WiiU", h = d(t, "NintendoBrowser/"), y = d(t, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === r) {
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
                    var Mc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = d(a, "PLAYSTATION 3; ") || d(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > ac("4.10", b) && (n = "Sony", p = b);
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
                            Mc = 3.4;
                            e = k;
                            f = 2;
                            var db = !0;
                          } else {
                            if (0 === r.indexOf("iP") || Hb || Ca || Jb) {
                              if (Ca) {
                                switch(h = Ca, bb.substr(0, 4)) {
                                  case "iPho":
                                    var J = "iPhone";
                                    var ba = z(bb.substr(6));
                                    var K = !0;
                                    break;
                                  case "iPad":
                                    J = "iPad";
                                    ba = z(bb.substr(4));
                                    var D = !0;
                                    break;
                                  case "iPod":
                                    J = "iPod";
                                    ba = z(bb.substr(4));
                                    var Nc = !0;
                                }
                              } else {
                                Hb ? h = Hb : (h = d(t.split("_").join("."), "OS "), Jc = !Ga("isSecureContext", m), Kc = Ga("enableWebGL", m), Lc = Ga("sameOrigin", m));
                                h || (I = !0);
                                if (!h || Ac) {
                                  h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : W.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : Zb.isNaN ? 9.2 : m.SharedWorker ? sc && sc.now ? 8.0 : 8.4 : xd ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : tc ? 4.3 : rc ? 4.1 : 3.2;
                                }
                                var Qb = 1 === m.devicePixelRatio;
                                var B = Fb === 1.5 * Gb || 1.5 * Fb === Gb;
                                0 === r.indexOf("iPhone") ? (J = "iPhone", ba = B ? Qb ? {max:3} : {min:4, max:5} : {max:6}, K = !0) : 0 === r.indexOf("iPad") || Jb ? (J = "iPad", ba = Qb ? {max:2} : {min:3}, D = !0) : 0 === r.indexOf("iPod") && (J = "iPod", ba = B ? Qb ? {max:3} : 4 : {min:5}, Nc = !0);
                              }
                              !Ca && (W.standalone || (D || 12 > h) && Ga("webkitFullscreenEnabled", w) || 11 <= h && 13 > h && W.mediaDevices) ? (n = "SafariMobile", e = "Safari", f = h) : (cb = !0, n = "iOSWebView");
                              k = "iOS";
                              p = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", n = "AOSP", p = 2.2, e = n, f = p, P = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", n = "AOSP", p = 2.2, e = n, f = p;
                                } else {
                                  if (b = d(a, "CrOS x86_64 ") || d(a, "CrOS aarch64 ") || d(a, "CrOS i686 ") || d(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== m.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > R ? "1.0.1" : 19 > R ? 1.1 : 27 > R ? 1.2 : 29 > R ? 1.3 : 31 > R ? 1.4 : 33 > R ? 2.0 : 35 > R ? 2.1 : 38 > R ? 2.2 : 45 > R ? 2.5 : 2.6, g(a, "Mobile") ? K = !0 : g(a, "Tablet") && (D = !0);
                                    } else {
                                      if (m.palmGetResource) {
                                        k = "webOS", h = d(a, "webOS/") || d(a, "WEBOS") || d(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (K = !0);
                                      } else {
                                        if (b = d(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = la, n = e, p = f, K = !0;
                                        } else {
                                          if (b = d(a, "Windows Phone ") || d(t, "Windows Phone OS ") || rd) {
                                            var eb = !0;
                                            h = b;
                                            K = !0;
                                          } else {
                                            if (Za && "ARM" === r) {
                                              eb = !0, h = 10, I = K = !0;
                                            } else {
                                              if (Aa && g(t, "ZuneWP")) {
                                                eb = !0, h = 11 === H ? 8.1 : 10 === H ? 8 : 9 === H ? 7.5 : 7 === H ? 7 : "?", I = K = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", K = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", K = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var V = !0;
                                                      h = 6.3;
                                                      var F = D = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        V = !0, h = 6, F = D = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          V = !0, h = 5, F = D = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            V = !0, h = 5, F = D = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              V = !0, h = 5 <= z(E) ? 5 : 4, F = D = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                V = !0, h = 3, F = D = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  V = !0, h = 2, F = D = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    V = !0, h = 1, F = D = !0;
                                                                  } else {
                                                                    if (b = d(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, n = "AOSP", p = 2.2, e = n, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        V = !0, h = E, F = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || Bc) {
                                                                              k = "WindowsMobile", db = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                k = r, db = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = d(a, "Windows NT ") || d(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = d(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Oc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = U, K = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : P && ia ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= z(E) ? B = E : B = {min:2.2}, h = B, Gc && (I = !0)) : P && ja ? (E ? B = E : (B = {min:1.6}, I = !0), h = B, g(a, "Tablet") ? D = !0 : 
                                                                                    K = !0) : E ? (h = E, P = !0) : Ib && Gc ? (aa = !0, la ? B = {min:4.4} : ka && !Fc || xc || Lb ? B = {min:4} : (B = E = void 0 !== qc.touchAction ? {min:5} : Ob ? 4.4 : tc ? W.connection ? m.searchBoxJavaBridge_ || ka ? Zb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? rc ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, Ec && (n = "Samsung", p = Ec)), h = B, P = !0) : Ic ? (h = {min:5}, aa = P = !0) : Ib && (g(a, "Ubuntu") ? 
                                                                                    k = "Ubuntu" : (b = d(a, "Mint/")) ? (k = "Mint", h = b) : (b = d(a, "Fedora/")) ? (k = "Fedora", h = b) : k = g(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  V && (k = "FireOS");
  P && (k = k || "Android");
  eb && (k = "WindowsPhone");
  n || (F = F || P, ja ? (n = F || db || K || D ? "PrestoMobile" : "Presto", p = wc) : Aa ? ((B = jb(t, "Trident/") + 4) && B !== H && (e = "IEHost", f = B), 10 <= H && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = H), db || K || D || Nc ? n = "TridentMobile" : Oc && 5 <= H ? (n = "Tasman", e = "MacIE", f = H) : (n = "Trident", Oc && (e = "MacIE", f = H)), p = H) : Za ? (n = eb ? "EdgeMobile" : "EdgeHTML", p = d(t, "Edge/")) : Kb ? (n = "Goanna", p = 
  Kb) : ia ? (n = F ? "Fennec" : "Gecko", p = R || yc) : la ? (n = "Samsung", p = la, aa && (I = !0)) : (b = Mc || d(a, "NetFront/")) ? (n = "NetFront", p = b) : (b = d(a, "iCab")) ? (n = "iCab", p = b) : (b = bc(d(a, "Opera Mini/"), d(a, "Opera Mobi/")) || uc && U) ? (n = "OperaMini", p = b, k || (g(a, "iPhone") ? J = "iPhone" : g(a, "iPad") ? J = "iPad" : g(a, "iPod") && (J = "iPod"), J && (k = "iOS"))) : Ya ? (n = "UCWEB", p = qd) : ud ? (n = "KHTML", p = Cb) : P && Fc ? (n = "AOSP", p = E, Da = 
  !0, aa && (I = !0)) : ka || xc || Lb ? (n = F ? "ChromiumMobile" : "Chromium", p = Z, aa && (I = !0)) : P && Ob ? (n = "ChromeWebView", p = 5 > z(E) ? E : Z, Da = !0, m.requestFileSystem || m.webkitRequestFileSystem || (Pb = !0), aa && (I = !0)) : P && (U || aa) ? (n = "AOSP", p = E, Da = !0, aa && (I = !0)) : Z ? (n = F ? "ChromiumMobile" : "Chromium", p = Z) : y && (n = "WebKit", p = y));
  e || ((b = Za && d(a, "Edge/") || d(a, "EdgA/") || wd || d(a, "Edg/")) ? (e = "Edge", f = b) : (b = d(t, "Coast/")) ? (e = "Coast", f = b) : Jc ? e = "OperaTurbo" : (b = d(t, "OPT/")) ? (e = "OperaTouch", f = b, I = I || !g(t, "Mobile/")) : (b = d(a.toLowerCase(), "ybrowser/")) ? (e = "Yahoo", f = b) : !Ya && (b = d(a, "UCBrowser/")) ? (e = "UC", f = b) : (b = d(a, "SilK/")) ? (e = "Silk", f = b) : (b = d(a, "Vivaldi/")) ? (e = "Vivaldi", f = b) : (b = d(a, "QQBrowser/")) ? (e = "QQ", f = b) : 
  (b = d(a, "YaBrowser/")) ? (e = "Yandex", f = b) : (b = d(a, "coc_coc_browser/")) ? (e = "coccoc", f = b) : (b = d(a, "Camino/")) ? (e = "Camino", f = b) : g(a, "SE 2.X MetaSr 1.0") ? e = "Sogou" : (b = td || d(a, "Klar/") || 9 > z(Mb) && cb && 11 <= z(h) && Mb) ? (e = "Focus", f = b) : (b = d(a, "AOLBUILD/") || d(a, "AOL/") || d(a, "AOL ")) ? (e = "AOL", f = b) : (b = d(a, "IceDragon/")) ? (e = "IceDragon", f = b) : (b = d(a, "Iceweasel/")) ? (e = "Iceweasel", f = b) : (b = d(a, "TenFourFox/")) ? 
  (e = "ITenFourFox", f = b) : (b = d(a, "Waterfox/")) ? (e = "Waterfox", f = b) : (b = d(a, "GNUzilla/")) ? (e = "GNUzilla", f = b) : (b = d(a, "SeaMonkey/")) ? (e = "SeaMonkey", f = b) : (b = d(a, "PaleMoon/")) ? (e = "PaleMoon", f = b) : (b = d(a, "Basilisk/")) ? (e = "Basilisk", f = b) : (b = d(a, "Maxthon/") || d(a, "Maxthon ") || d(a, "MXiOS/")) || g(a, "Maxthon") ? (e = "Maxthon", f = b || 1) : g(a, "Avant Browser;") ? e = "Avant" : (b = d(a, "Lunascape/")) ? (e = "Lunascape", f = b) : (b = 
  d(a, "Konqueror/")) ? (e = "Konqueror", f = b) : (b = d(a, "Midori/")) ? (e = "Midori", f = b) : (b = d(a, "OmniWeb/")) ? (e = "OmniWeb", f = b) : (b = d(a, "Roccat/")) ? (e = "Roccat", f = b) : (b = d(a, "Epiphany/")) ? (e = "Epiphany", f = b) : (b = d(a, "WebPositive/")) ? (e = "WebPositive", f = b) : (b = d(a, "Iron/")) || g(a, " Iron ") ? (e = "Iron", f = b || ka && Z) : (b = d(a, "Comodo Dragon/")) ? (e = "ComodoDragon", f = b) : (b = d(a, "Brave/")) || g(a, " Brave ") || Lc ? (e = "Brave", 
  f = b || ka && Z) : (b = d(a, "Rockmelt/")) ? (e = "Rockmelt", f = b) : (b = d(a, "Sleipnir/")) || Ac ? (e = "Sleipnir", b && (f = b)) : Kc ? e = "Dolphin" : (b = d(a, "Puffin/")) ? (e = "Puffin", f = b) : (b = d(a, "Dooble/")) ? (e = "Dooble", f = b) : (b = d(a, "Flock/")) ? (e = "Flock", f = b) : (b = d(a, "Galeon/")) ? (e = "Galeon", f = b) : (b = d(a, "Falkon/")) ? (e = "Falkon", f = b) : (b = d(a, "Iceape/")) ? (e = "Iceape", f = b) : (b = d(a, "K-Meleon/")) ? (e = "KMeleon", f = b) : (b = 
  yd || d(t, "NX/")) ? (e = "NetFrontNX", f = b) : (b = d(a, "Netscape6/") || d(a, "Netscape/") || d(a, "Navigator/")) ? (e = "NN", f = b) : Bc ? (e = "Iris", f = b) : g(t, "FBAN/") ? e = "Facebook" : (b = d(t, "Line/")) ? (e = "LINE", f = b) : (b = d(a, "QtWebEngine/")) ? (e = "QtWebEngine", f = b) : (b = d(a, "QtWebKit/")) ? (e = "QtWebKit", f = b) : (b = Mb || ia && (yc || p)) ? (e = "Firefox", f = b) : (b = wc || Lb || zc) ? (e = "Opera", f = b) : Aa ? (e = "IE", f = p) : la ? (e = n, f = la) : 
  (b = vd || (ka || Ic && Da) && Z) ? (e = "Chrome", f = b) : Da && !Pb ? (e = n, f = p) : cb && !D ? (n = "SafariMobile", e = "Safari", f = h) : cb || Pb || !g(a, "Safari") && !U || (e = "Safari", f = U || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2)), e = e || "unknown");
  k && (l.PLATFORM = k, h ? (l.PLATFORM_VERSION = Ha(h), l[k] = Ia(h)) : l[k] = !0);
  n && (l.ENGINE = n, p ? (l.ENGINE_VERSION = Ha(p), l[n] = Ia(p)) : l[n] = !0, e || (e = n, f = p));
  e && (l.BRAND = e, f ? (l.BRAND_VERSION = Ha(f), l[e] = Ia(f)) : l[e] = !0);
  J && (l.DEVICE = J, ba ? (l.DEVICE_VERSION = Ha(ba), l[J] = Ia(ba)) : l[J] = !0);
  if (I || Jb) {
    l.PC_MODE = !0;
  }
  var La = new hb, Ea = [], hc = !!w.getElementsByTagName, A = w.body, ca = A.style, u = l.Trident || l.TridentMobile, Fa = l.Tasman, Pc = l.EdgeHTML || l.EdgeMobile, Rb = l.Presto || l.PrestoMobile, Sb = l.Gecko, Tb = l.Goanna, Sa = l.WebKit, Xa = l.SafariMobile || l.iOSWebView, zd = l.OperaMini && l.UCWEB;
  u || Fa || (new hb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Ad = 5.5 > u, Qc = w.scripts, Bd = (Fa ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : "modern") + ".css", Rc = 0 === location.href.indexOf("https");
  var sa = Qc[Qc.length - 1].src.split("/");
  --sa.length;
  var Sc = sa.join("/");
  0 <= "http: https:".indexOf(sa[0]) && sa.splice(0, 3);
  sa = sa.join("/");
  var Y = function(a) {
    return void 0 !== a;
  };
  var S = Array.prototype;
  S.pop || (S.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  S.push || (S.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  S.shift || (S.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  S.splice || (S.splice = function(a, b) {
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
  S.indexOf || (S.indexOf = function(a, b) {
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
  var Ka = [], Cd = 0, na;
  if (5 > u || Fa) {
    m._wdb_onlooptimer = Ja, Ja = "_wdb_onlooptimer()";
  }
  var Tc = function(a) {
    Ka.length || (na = setInterval(Ja, 999));
    Ka.push({f:a, uid:++Cd});
  };
  Ea.push(function() {
    Xa && Uc(ed);
    fb(cc);
  });
  var T = [], Vc = 0, ea;
  if (5 > u || Fa) {
    m._wdb_ontimer = ta, ta = "_wdb_ontimer()";
  }
  var x = function(a, b) {
    T.length || (ea = ib(ta, 64));
    T.push({f:a, p:b, uid:++Vc, t:new da - 0 + 64});
    return Vc;
  };
  var Wc = function(a) {
    for (var c = T.length, b; b = T[--c];) {
      if (b.uid === a) {
        T.splice(c, 1);
        break;
      }
    }
  };
  Ea.push(function() {
    Xa && Uc(fd);
    fb(dc);
  });
  var va = [], fc, ob = 0, ma = m.matchMedia, oa;
  va.push(function() {
    oa = Q(A, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Xc = [], nb = m.onload, Yc = m.onunload;
  onload = mb;
  onunload = function(a) {
    var c;
    Yc && (c = Yc(a));
    L(Xc, a);
    onunload = La;
    return c;
  };
  var gb = function(a) {
    va.push(a);
  };
  var fb = function(a) {
    Xc.push(a);
  };
  var gc = [];
  gb(function() {
    ec();
    Tc(ec);
  });
  var Ub = function(a) {
    gc.push(a);
  };
  var xa = [], wa, pb, qb;
  10 <= u || Pc ? (ma("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    wa = pb = a.matches;
    L(xa, Ma());
  }), ma("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    wa = qb = a.matches;
    L(xa, Ma());
  }), ma("(-ms-high-contrast:active)").addListener(function(a) {
    wa = a.matches;
    L(xa, Ma());
  }), pa = null) : 10 > u || (l.Win32 || l.Win64) && (44 <= Sb || Tb) ? gb(function() {
    oa.style.color = "#123456";
    oa.style.backgroundColor = "#123456";
    60 > Sb || Tb ? pa() : pa() && Tc(pa);
    pa = null;
  }) : pa = null;
  var Dd = [];
  ma && ma("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    L(Dd, a.matches);
  });
  var Vb = [];
  m.onbeforeprint ? (onbeforeprint = function() {
    L(Vb, !0);
  }, onafterprint = function() {
    L(Vb, !1);
  }, fb(function() {
    onbeforeprint = onafterprint = La;
  })) : ma && ma("print").addListener(function(a) {
    L(Vb, a.matches);
  });
  var Zc = [], Wb = m.onscroll;
  onscroll = function(a) {
    var b;
    Wb && (b = Wb(a));
    mb || L(Zc);
    return b;
  };
  fb(function() {
    onscroll = Wb = La;
  });
  var Uc = function(a) {
    Zc.push(a);
  };
  var $c = Na("html")[0];
  var ya = Na("head")[0];
  var Oa;
  va.splice(0, 0, function() {
    function a(c) {
      c = c.childNodes;
      for (var g = c.length, f, h, k, l, q; f = c[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && N(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (Ad ? (k = f.sheet || f.styleSheet) && (l = 10 <= u ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new hb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  N(f);
                  break;
                }
              case "LINK":
                hc && !ya.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = d.length; q;) {
                  if (0 === h.indexOf(d[--q])) {
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
    var b = !(8 > Rb || 5 > u || Fa), d = ["og:", "twitter:", "fb:"], e = [];
    a($c);
  });
  var sb = void 0;
  var mc = {}, Xb, za, O, Ed = Y(ca.transform) ? "transform" : Y(ca["-o-transform"]) ? "-o-transform" : Y(ca["-ms-transform"]) ? "-ms-transform" : Y(ca["-moz-transform"]) ? "-moz-transform" : Y(ca["-webkit-transform"]) ? "-webkit-transform" : "";
  O || Ub(function(a) {
    a && !Y(O) && (O = 1.8 <= Sb || Tb || 8 <= u || Pc || 530 <= Sa || 3.2 <= Xa, O || (a = Q(A, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), O = 6 <= a.offsetWidth, N(a)));
  });
  var Qa;
  9 > u && gb(function(a) {
    a = Q(A, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Xb = 1 < a.offsetHeight;
    a.style.cssText = "";
    N(a);
  });
  var ad = Rc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var id = function() {
    function a() {
      f || (d.complete ? (f = !0, d.width || x(b, !1)) : e = x(a));
    }
    var b = oc;
    if (ad) {
      var d = new Image, e, f;
      d.onerror = function() {
        (!u || 11 === u || 11 === l.IEHost) && d.width || f || (f = !0, e && Wc(e), e = x(b, !1));
      };
      d.onload = function() {
        f = !0;
        e && Wc(e);
        Rb && !d.complete ? e = x(b, !1) : (za = !0, x(b, !0));
      };
      d.src = ad;
      8 > Rb && d.complete ? (za = !0, x(b, !0)) : f || (e = x(a));
    } else {
      x(b, !1);
    }
  };
  var hd = lc;
  for (l.IEHost && 5.5 > u && gb(function() {
    var a = w.createElement("link");
    ya.appendChild(a);
    a.setAttribute("href", (Sc ? Sc + "/" : "") + Bd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); Ea.length;) {
    Ea.shift()();
  }
  Ea = null;
  var bd = bd || {}, G = String.fromCharCode, v = Rc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ha = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", G(960), ")", "(", G(234), G(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", G(9824), "\u2190", G(9829), G(9830), G(9827), G(956), "\u03a9", "\u2193", "\u2192", "%", G(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", G(9619)];
  xa.push(function(a) {
    Pa("jsHcm");
    Pa("jsHcmWob");
    Pa("jsHcmBow");
    if (a) {
      switch((Ed || 9 === u || 5.5 <= u && 9 > u && Xb) && X(A, "jsCanRotate"), a) {
        case 1:
          X(A, "jsHcm");
          break;
        case 2:
          X(A, "jsHcmWob");
          break;
        case 3:
          X(A, "jsHcmBow");
      }
    } else {
      Pa("jsCanRotate");
    }
  });
  var ub = [], tb, vb, cd;
  Ub(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", c = b.charAt(0), d = "_" === c;
      b = d ? b.charAt(2) : c;
      c = d ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      X(a, "pbTipPos" + b.toUpperCase());
      Q(a, "div", {className:"pbTip" + c}, {width:f.length + e + "em"}, f);
      Q(a, "div", {className:"pbTail" + c});
      g && d && (a.focus(), a.blur());
    }
    function c(a) {
      if (O && n) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = ha[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - z(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Oa = 1, k = Q(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      p || f || qa(a, "pbChrCS") && ub.push(a);
    }
    if (a && !cd) {
      cd = !0;
      var e = 6 > u ? 1 : 0;
      a = Na("SAMP");
      var f = 9 > u, g = 5 <= u && 6 > u, h, k, l, m;
      Xb && X(A, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== ca.opacity || void 0 !== ca["-moz-opacity"] || void 0 !== ca["-khtml-opacity"], n = !p && !f && !0, r = !O || n || void 0;
        for (l = -1; h = a[++l];) {
          if (qa(h.parentElement || h.parentNode, "pbLCD")) {
            var w = h.children;
            for (h = w.length; h;) {
              var t = w[--h];
              switch(t.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (O || b(t), m = t.children.length; m;) {
                      c(t.children[--m]);
                    }
                  }
                  zd ? t.setAttribute("href", "javascript:void(0)") : t.onclick = gd;
                  break;
                case "B":
                  r && c(t);
              }
            }
          }
        }
        ub.length ? (setInterval(nc, 500), O ? ra([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ra([".pbChrCS", "background-position:0 -51px"])) : nc = null;
        n && (O ? ra([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + v + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        v + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + v + "pbLCD/x3_a90.png)"]) : ra([".pbAlp1", "background-image:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        v + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + v + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + v + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Sa && ($c.onclick = function(a) {
    if (vb) {
      return vb = !1, a.preventDefault(), !1;
    }
  });
  var Ab = ha[7], pc = ha[30], kd = ha[113], Ua = G(8337) + G(8331), Bb = G(160), od = G(8194), md = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), nd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), ld = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + pc + ha[31]).split(""), fa = 
  [], yb = [], Va, zb;
  Ub(function(a) {
    if (a && !zb) {
      var b = w.all || Na("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        qa(c, "pbList") ? Wa(c) : qa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Wa(c, !0);
      }
      fa.length && Ta();
      zb = !0;
    }
  });
  bd.prettify = Wa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

