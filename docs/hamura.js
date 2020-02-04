PB100 = {};
(function(vd, l, m, w, la, Yb, z, Zb, gb, wd, hb, Xc, ma, xd) {
  function ib(d, a) {
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
  function $b(d, a) {
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
  function ac() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > $b(c, e = d[a]) && (c = e);
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
    na && (bc(), na = setInterval(Ia, 999));
  }
  function bc() {
    na && (na = clearInterval(na));
  }
  function ta() {
    for (var d, a = 0, b = new ma - 0; a < S.length;) {
      b < S[0].t ? ++a : (d = S.splice(a, 1)[0], d.f(d.p));
    }
    ca = S.length ? hb(ta, 64) : 0;
  }
  function Zc() {
    ca && (cc(), ca = hb(ta, 64));
  }
  function cc() {
    ca && (ca = Xc(ca));
  }
  function L(d, a) {
    for (var b = 0, q = d.length; b < q; ++b) {
      d[b](a);
    }
  }
  function mb(d) {
    var a;
    nb && (a = nb(d));
    L(va, d);
    onload = Ka;
    va = mb = nb = onload = null;
    return a;
  }
  function dc() {
    var d = 9 === oa.offsetWidth;
    ec !== d && L(fc, ec = d);
  }
  function pa() {
    function d(d) {
      return "#ffffff" === d || "rgb(255,255,255)" === d;
    }
    var a = w.defaultView, b = ob, c = a ? a.getComputedStyle(oa, null) : oa.currentStyle;
    a = (c && c.color || "").split(" ").join("");
    c = (c && c.backgroundColor || "").split(" ").join("");
    if (a) {
      return wa = "#123456" !== a && "rgb(18,52,86)" !== a, pb = ("#000000" === a || "rgb(0,0,0)" === a) && d(c), qb = d(a) && ("#000000" === c || "rgb(0,0,0)" === c), b !== La() && L(xa, ob), !0;
    }
  }
  function La() {
    return ob = wa ? qb ? 2 : pb ? 3 : 1 : 0;
  }
  function Ma(d) {
    var a = a || w;
    return gc ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function N(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function rb(d, a) {
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
            W(d, a[b]);
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
    Na ? (2 === Na && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Na = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(w.createTextNode(e));
    return a;
  }
  function hc(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function qa(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function W(d, a) {
    var b;
    if (!qa(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function Oa(a) {
    if (qa(A, a)) {
      var d = A.className.split(" ");
      d.splice(d.indexOf(a), 1);
      A.className = d.join(" ");
    }
  }
  function ic(a) {
    a = P(ya, "style", {type:"text/css", media:"all"}, 0, a);
    sb = a.sheet || a.styleSheet;
  }
  function ra(a) {
    for (var d = sb, b, c, e = "", f; a.length;) {
      b = a.shift(), c = a.shift(), f = b + "{" + c + "}", d ? d.addRule ? d.addRule(b, c) : d.insertRule && d.insertRule(f, d.cssRules.length) : e += f;
    }
    e && ic(e);
  }
  function tb(a) {
    if (X(Pa)) {
      x(a, Pa);
    } else {
      if (8 > u) {
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
  function jc(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      w.fonts.load(d).then(function() {
        w.fonts.check(d, "i");
        jb(b) ? x(a, t) : tb(kb);
      }, function() {
        tb(kb);
      });
    }
    function q(a) {
      return w.hidden || w.msHidden || w.mozHidden || w.webkitHidden ? !1 : a < new ma - r;
    }
    function h(d) {
      d && (r = new ma - 0);
      jb(b) ? a(t) : q(p) ? C ? a(0) : 9 > u ? x(a, 0) : tb(kb) : x(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      lb = ["sans-serif", "serif"];
      M = P(A, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (v = {}; d = lb[++a];) {
        M.style.fontFamily = d, v[d] = M.offsetWidth;
      }
    }
    function jb(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (A.appendChild(M); c = lb[++b];) {
        if (M.style.fontFamily = '"' + a + '",' + c, M.offsetWidth !== v[c]) {
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
      return t = d + q;
    }
    function kb(d) {
      (C = d) ? n(!0) : a(0);
    }
    function n(d) {
      d && (r = new ma - 0);
      for (b in c) {
        if (jb(b)) {
          Qa = P(A, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = sb, f = kc.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : ic('@import "' + d + '"');
          kc.all = ++f;
          x(m, !0);
        } else {
          q(100) ? (delete c[b], x(n, !0)) : x(n);
        }
        return;
      }
      a(0);
    }
    function m(d) {
      d && (r = new ma - 0);
      1 < Qa.offsetWidth ? (N(Qa), p = 100, x(h, !0)) : q(p) ? (N(Qa), a(0)) : x(m);
    }
    var p = g || 5000, r, C, M, Qa, lb, v, t;
    (function() {
      var a;
      if (l.MeeGo || 2.2 > l.AOSP || l.WebOS || l.UCWEB || 10 > l.TridentMobile || l.NDS || l.NDSi || l.N3DS) {
        return !1;
      }
      if (6 > u) {
        return !0;
      }
      var d = P(ya, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      N(d);
      return a;
    })() ? !w.fonts || 603 > Ra ? h(!0) : d() : x(a, 0);
  }
  function lc() {
    ub = !ub;
    for (var a = -1, b; b = vb[++a];) {
      b.style.visibility = ub ? "" : "hidden";
    }
  }
  function $c(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), wb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Sa() {
    Sa = null;
    ad(xb, "PB-100", {"PB-100_canTTF":v + "pbFont/ttf.css", "PB-100_canWOFF":v + "pbFont/woff.css", "PB-100_canEOT":v + "pbFont/eot.css", "PB-100_canSVG":v + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Ta}, 5000);
  }
  function xb(a) {
    (Ua = a) ? yb() : za ? mc(!0) : X(za) ? yb() : bd();
  }
  function mc(a) {
    a && (W(A, "pbList-noWebFont"), T ? ra([".pbList font:after", "content:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]) : ra([".pbList font", "background-image:url(" + v + "pbFont/" + (9 > u ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    yb();
  }
  function yb() {
    for (xb = jc = null; da.length;) {
      Va(da.shift(), zb.shift());
    }
  }
  function Va(a, b) {
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
    if (xb) {
      -1 === da.indexOf(a) && (da.push(a), zb.push(b), Ab && Sa && Sa());
    } else {
      var e = da.indexOf(a);
      0 <= e && da.splice(e, 1) && zb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Ua && (e = e.split(Ta).join(nc)), b ? a.data = e : cd(e.split("\r").join("").split("&yen;").join(dd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Bb).split("&amp;").join("&"), a);
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
      var m = g.charAt(h), r = v, v = "|" === m;
      m = f["+|~{}^".indexOf(m) + 1];
      if ("\n" !== l) {
        if (Ua || !za) {
          8 > u && p && (l = h === k - 1 ? Cb : hd), 2 === Ua && a.substr(h, 2) === Ta && (l = Ta, ++h), p = p && "str" === m ? ' class="pbList-strsp"' : n ? "" : !p && m ? ' class="pbList-' + m + '"' : "";
        } else {
          var C = ea.indexOf(l);
          C = -1 === C ? "" : ea.indexOf(l).toString(16).toUpperCase();
          C = (C = 1 === C.length ? "0" + C : C) ? "pbChr" + C : "";
          p = p && "str" === m ? ' class="pbList-strsp"' : p || !C ? "" : m ? ' class="' + (C ? C + " " : "") + "pbList-" + m + '"' : ' class="' + C + '"';
        }
        r && n && (Ra || Wa) && (l = Cb);
        q.push("<font" + p + ">" + l + "</font>");
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
  var n, p, a = la.userAgent, t = la.appVersion, Db = z(t) | 0, r = la.platform, Xa = w.documentElement, Eb = w.documentMode, Fb = Yb.width, Gb = Yb.height, oc = m.HTMLAudioElement, pc = m.performance, qc = m.Int8Array, id = void 0 !== m.ontouchstart, U = c(t, "Version/") || c(a, "Version/"), fa = Xa && void 0 !== Xa.style.MozAppearance, rc = m.operamini, Ya = g(a, "UCWEB"), jd = Ya && c(a, " U2/"), kd = Ya && c(a, "; wds "), Hb = c(a.split("_").join("."), "; iPh OS "), ld = c(a, "; Adr "), sc = 
  g(t, "YJApp-ANDROID"), O = g(r, "Android") || fa && g(t, "Android") || sc, D = c(r, "Android ") || c(t, "Android ") || c(a, "Android ") || ld, Ib = g(r, "Linux"), ha = !rc && m.opera, tc = ha && (ha.version && "function" === typeof ha.version ? ha.version() : ac(c(a, "Opera "), U, "" + Db)), uc = m.opr, Aa = !ha && (w.all || Eb), G = Aa && (Eb ? Eb : m.g ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4), Za = !Aa && Xa.msContentZoomFactor, ia = !Za && 
  m.chrome, Jb = fa && c(a, "Goanna/"), Q = !Jb && fa && c(a, "rv:"), vc = c(a, "Firefox/"), wc = c(a, "Opera/"), y = ib(a, "AppleWebKit/"), Y = c(a, "Chrome/"), Kb = c(a, "OPR/"), md = c(t, "KHTML/"), xc = c(a.toLowerCase(), "iris"), Lb = c(a, "FxiOS/"), ja = ib(a, "SamsungBrowser/"), Ba;
  if (Ba = !ja) {
    a: {
      for (var yc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      $a, Mb = yc.length; $a = yc[--Mb];) {
        if (g(a, $a)) {
          Ba = 2 > z(U) ? U : 0.9;
          break a;
        }
      }
      var zc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Mb = zc.length; $a = zc[--Mb];) {
        if (g(a, $a)) {
          Ba = U;
          break a;
        }
      }
      Ba = void 0;
    }
  }
  var Ac = Ba, Bc = ia && 534.3 >= y, Cc = id && (y || fa) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !D && sc, Dc = m.puffinDevice, ab = Dc && Dc.clientInfo, Ca = ab && "iOS" === ab.os && ab.osVersion, bb = Ca && ab.model, Nb = !G && w.registerElement, nd = !G && w.execCommand, Ec = Ib && Nb && "11.0.696.34" === Y, Z, H, b, Da, Ob, Pb;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = wc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === Fb && 240 === Gb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var od = h;
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
                    var Fc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > $b("4.10", b) && (n = "Sony", p = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Db && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            Fc = 3.4;
                            e = k;
                            f = 2;
                            var cb = !0;
                          } else {
                            if (0 === r.indexOf("iP") || Hb || Ca) {
                              if (Ca) {
                                switch(h = Ca, bb.substr(0, 4)) {
                                  case "iPho":
                                    var I = "iPhone";
                                    var aa = z(bb.substr(6));
                                    var J = !0;
                                    break;
                                  case "iPad":
                                    I = "iPad";
                                    aa = z(bb.substr(4));
                                    var K = !0;
                                    break;
                                  case "iPod":
                                    I = "iPod";
                                    aa = z(bb.substr(4));
                                    var Gc = !0;
                                }
                              } else {
                                Hb ? h = Hb : h = c(t.split("_").join("."), "OS ");
                                h || (H = !0, h = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : la.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : Zb.isNaN ? 9.2 : m.SharedWorker ? pc && pc.now ? 8.0 : 8.4 : nd ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : qc ? 4.3 : oc ? 4.1 : 3.2);
                                var Qb = 1 === m.devicePixelRatio;
                                var B = Fb === 1.5 * Gb || 1.5 * Fb === Gb;
                                0 === r.indexOf("iPhone") ? (I = "iPhone", aa = B ? Qb ? {max:3} : {min:4, max:5} : {max:6}, J = !0) : 0 === r.indexOf("iPad") ? (I = "iPad", aa = Qb ? {max:2} : {min:3}, K = !0) : 0 === r.indexOf("iPod") && (I = "iPod", aa = B ? Qb ? {max:3} : 4 : {min:5}, Gc = !0);
                              }
                              Ca || !la.standalone && void 0 === w.fullscreenEnabled && void 0 === w.webkitFullscreenEnabled ? (Pb = !0, n = "iOSWebView") : (n = "SafariMobile", e = "Safari", f = h);
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
                                          k = "Tizen", h = b, e = "Samsung", f = ja, n = e, p = f, J = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(t, "Windows Phone OS ") || kd) {
                                            var db = !0;
                                            h = b;
                                            J = !0;
                                          } else {
                                            if (Za && "ARM" === r) {
                                              db = !0, h = 10, H = J = !0;
                                            } else {
                                              if (Aa && g(t, "ZuneWP")) {
                                                db = !0, h = 11 === G ? 8.1 : 10 === G ? 8 : 9 === G ? 7.5 : 7 === G ? 7 : "?", H = J = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", J = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", J = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var V = !0;
                                                      h = 6.3;
                                                      var E = K = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        V = !0, h = 6, E = K = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          V = !0, h = 5, E = K = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            V = !0, h = 5, E = K = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              V = !0, h = 5 <= z(D) ? 5 : 4, E = K = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                V = !0, h = 3, E = K = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  V = !0, h = 2, E = K = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    V = !0, h = 1, E = K = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, n = "AOSP", p = 2.2, e = n, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        V = !0, h = D, E = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || xc) {
                                                                              k = "WindowsMobile", cb = !0;
                                                                            } else {
                                                                              if ("WinCE" === r) {
                                                                                k = r, cb = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var Hc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = U, J = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : O && fa ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= z(D) ? B = D : B = {min:2.2}, h = B, Cc && (H = !0)) : O && ha ? (D ? B = D : (B = {min:1.6}, H = !0), h = B, g(a, "Tablet") ? K = !0 : 
                                                                                    J = !0) : D ? (h = D, O = !0) : Ib && Cc ? (Z = !0, ja ? B = {min:4.4} : ia && !Bc || uc || Kb ? B = {min:4} : (B = D = void 0 !== Xa.style.touchAction ? {min:5} : Nb ? 4.4 : qc ? la.connection ? m.searchBoxJavaBridge_ || ia ? Zb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? oc ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, Ac && (n = "Samsung", p = Ac)), h = B, O = !0) : Ec ? (h = {min:5}, Z = O = !0) : Ib && (g(a, 
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
  V && (k = "FireOS");
  O && (k = k || "Android");
  db && (k = "WindowsPhone");
  n || (E = E || O, ha ? (n = E || cb || J || K ? "PrestoMobile" : "Presto", p = tc) : Aa ? ((B = ib(t, "Trident/") + 4) && B !== G && (e = "IEHost", f = B), 10 <= G && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = G), cb || J || K || Gc ? n = "TridentMobile" : Hc && 5 <= G ? (n = "Tasman", e = "MacIE", f = G) : (n = "Trident", Hc && (e = "MacIE", f = G)), p = G) : Za ? (n = db ? "EdgeMobile" : "EdgeHTML", p = c(t, "Edge/")) : Jb ? (n = "Goanna", p = 
  Jb) : fa ? (n = E ? "Fennec" : "Gecko", p = Q || vc) : ja ? (n = "Samsung", p = ja, Z && (H = !0)) : (b = Fc || c(a, "NetFront/")) ? (n = "NetFront", p = b) : (b = c(a, "iCab")) ? (n = "iCab", p = b) : (b = ac(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || rc && U) ? (n = "OperaMini", p = b, k || (g(a, "iPhone") ? I = "iPhone" : g(a, "iPad") ? I = "iPad" : g(a, "iPod") && (I = "iPod"), I && (k = "iOS"))) : Ya ? (n = "UCWEB", p = jd) : md ? (n = "KHTML", p = Db) : O && Bc ? (n = "AOSP", p = D, Da = 
  !0, Z && (H = !0)) : ia || uc || Kb ? (n = E ? "ChromiumMobile" : "Chromium", p = Y, Z && (H = !0)) : O && Nb ? (n = "ChromeWebView", p = 5 > z(D) ? D : Y, Da = !0, m.requestFileSystem || m.webkitRequestFileSystem || (Ob = !0), Z && (H = !0)) : O && (U || Z) ? (n = "AOSP", p = D, Da = !0, Z && (H = !0)) : Y ? (n = E ? "ChromiumMobile" : "Chromium", p = Y) : y && (n = "WebKit", p = y));
  if (!e) {
    if (b = Za && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(t, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(t, "OPT/")) {
          e = "OperaTouch", f = b, H = H || !g(t, "Mobile/");
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
                            if (b = c(a, "Focus/") || 9 > z(Lb) && Pb && 11 <= z(h) && Lb) {
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
                                                                                            if (b = od || c(t, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (xc) {
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
                                                                                                          if (b = Lb || fa && (vc || p)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = tc || Kb || wc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (Aa) {
                                                                                                                e = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (ja) {
                                                                                                                  e = n, f = ja;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (ia || Ec && Da) && Y) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (Da && !Ob) {
                                                                                                                      e = n, f = p;
                                                                                                                    } else {
                                                                                                                      if (Pb || Ob) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || U) {
                                                                                                                          e = "Safari", f = U || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  I && (l.DEVICE = I, aa ? (l.DEVICE_VERSION = Ga(aa), l[I] = Ha(aa)) : l[I] = !0);
  H && (l.PC_MODE = !0);
  var Ka = new gb, Ea = [], gc = !!w.getElementsByTagName, A = w.body, ba = A.style, u = l.Trident || l.TridentMobile, Fa = l.Tasman, Ic = l.EdgeHTML || l.EdgeMobile, Rb = l.Presto || l.PrestoMobile, Sb = l.Gecko, Tb = l.Goanna, Ra = l.WebKit, Wa = l.SafariMobile || l.iOSWebView, pd = l.OperaMini && l.UCWEB;
  u || Fa || (new gb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var qd = 5.5 > u, Jc = w.scripts, rd = (Fa ? "ie5mac" : 5.5 > u ? "ie5win" : 6 > u ? "ie55" : 10 > u ? "ie" + (u | 0) : "modern") + ".css", Kc = 0 === location.href.indexOf("https");
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
  var Ja = [], sd = 0, na;
  if (5 > u || Fa) {
    m._wdb_onlooptimer = Ia, Ia = "_wdb_onlooptimer()";
  }
  var Mc = function(a) {
    Ja.length || (na = setInterval(Ia, 999));
    Ja.push({f:a, uid:++sd});
  };
  Ea.push(function() {
    Wa && Nc(Yc);
    eb(bc);
  });
  var S = [], Oc = 0, ca;
  if (5 > u || Fa) {
    m._wdb_ontimer = ta, ta = "_wdb_ontimer()";
  }
  var x = function(a, b) {
    S.length || (ca = hb(ta, 64));
    S.push({f:a, p:b, uid:++Oc, t:new ma - 0 + 64});
    return Oc;
  };
  var Pc = function(a) {
    for (var d = S.length, b; b = S[--d];) {
      if (b.uid === a) {
        S.splice(d, 1);
        break;
      }
    }
  };
  Ea.push(function() {
    Wa && Nc(Zc);
    eb(cc);
  });
  var va = [], ec, ob = 0, ka = m.matchMedia, oa;
  va.push(function() {
    oa = P(A, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Qc = [], nb = m.onload, Rc = m.onunload;
  onload = mb;
  onunload = function(a) {
    var b;
    Rc && (b = Rc(a));
    L(Qc, a);
    onunload = Ka;
    return b;
  };
  var fb = function(a) {
    va.push(a);
  };
  var eb = function(a) {
    Qc.push(a);
  };
  var fc = [];
  fb(function() {
    dc();
    Mc(dc);
  });
  var Ub = function(a) {
    fc.push(a);
  };
  var xa = [], wa, pb, qb;
  10 <= u || Ic ? (ka("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    wa = pb = a.matches;
    L(xa, La());
  }), ka("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    wa = qb = a.matches;
    L(xa, La());
  }), ka("(-ms-high-contrast:active)").addListener(function(a) {
    wa = a.matches;
    L(xa, La());
  }), pa = null) : 10 > u || (l.Win32 || l.Win64) && (44 <= Sb || Tb) ? fb(function() {
    oa.style.color = "#123456";
    oa.style.backgroundColor = "#123456";
    60 > Sb || Tb ? pa() : pa() && Mc(pa);
    pa = null;
  }) : pa = null;
  var td = [];
  ka && ka("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    L(td, a.matches);
  });
  var Vb = [];
  m.onbeforeprint ? (onbeforeprint = function() {
    L(Vb, !0);
  }, onafterprint = function() {
    L(Vb, !1);
  }, eb(function() {
    onbeforeprint = onafterprint = Ka;
  })) : ka && ka("print").addListener(function(a) {
    L(Vb, a.matches);
  });
  var Sc = [], Wb = m.onscroll;
  onscroll = function(a) {
    var b;
    Wb && (b = Wb(a));
    mb || L(Sc);
    return b;
  };
  eb(function() {
    onscroll = Wb = Ka;
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
                if (qd ? (k = f.sheet || f.styleSheet) && (l = 10 <= u ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new gb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  N(f);
                  break;
                }
              case "LINK":
                gc && !ya.contains(f) && e.push(f);
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
                if (hc(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (hc(f, "skip-cleanup")) {
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
    var b = !(8 > Rb || 5 > u || Fa), c = ["og:", "twitter:", "fb:"], e = [];
    a(Tc);
  });
  var sb = void 0;
  var kc = {}, Xb, za, T, ud = X(ba.transform) ? "transform" : X(ba["-o-transform"]) ? "-o-transform" : X(ba["-ms-transform"]) ? "-ms-transform" : X(ba["-moz-transform"]) ? "-moz-transform" : X(ba["-webkit-transform"]) ? "-webkit-transform" : "";
  (T = Sb || Tb || 8 <= u || Ic || 530 <= Ra || 3.2 <= Wa) || Ub(function(a) {
    a && !X(T) && (a = P(A, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), T = 6 <= a.offsetWidth, N(a));
  });
  var Pa;
  9 > u && fb(function(a) {
    a = P(A, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Xb = 1 < a.offsetHeight;
    a.style.cssText = "";
    N(a);
  });
  var Uc = Kc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var bd = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || x(b, !1)) : e = x(a));
    }
    var b = mc;
    if (Uc) {
      var c = new Image, e, f;
      c.onerror = function() {
        (!u || 11 === u || 11 === l.IEHost) && c.width || f || (f = !0, e && Pc(e), e = x(b, !1));
      };
      c.onload = function() {
        f = !0;
        e && Pc(e);
        Rb && !c.complete ? e = x(b, !1) : (za = !0, x(b, !0));
      };
      c.src = Uc;
      8 > Rb && c.complete ? (za = !0, x(b, !0)) : f || (e = x(a));
    } else {
      x(b, !1);
    }
  };
  var ad = jc;
  for (l.IEHost && 5.5 > u && fb(function() {
    var a = w.createElement("link");
    ya.appendChild(a);
    a.setAttribute("href", (Lc ? Lc + "/" : "") + rd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); Ea.length;) {
    Ea.shift()();
  }
  Ea = null;
  var Vc = Vc || {}, F = String.fromCharCode, v = Kc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ea = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", F(960), ")", "(", F(234), F(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", F(9824), "\u2190", F(9829), F(9830), F(9827), F(956), "\u03a9", "\u2193", "\u2192", "%", F(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", F(9619)];
  xa.push(function(a) {
    Oa("jsHcm");
    Oa("jsHcmWob");
    Oa("jsHcmBow");
    if (a) {
      switch((ud || 9 === u || 5.5 <= u && 9 > u && Xb) && W(A, "jsCanRotate"), a) {
        case 1:
          W(A, "jsHcm");
          break;
        case 2:
          W(A, "jsHcmWob");
          break;
        case 3:
          W(A, "jsHcmBow");
      }
    } else {
      Oa("jsCanRotate");
    }
  });
  var vb = [], ub, wb, Wc;
  Ub(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", d = b.charAt(0), c = "_" === d;
      b = c ? b.charAt(2) : d;
      d = c ? "Btm" : "";
      var f = a.getAttribute("title") || "";
      W(a, "pbTipPos" + b.toUpperCase());
      P(a, "div", {className:"pbTip" + d}, {width:f.length + e + "em"}, f);
      P(a, "div", {className:"pbTail" + d});
      g && c && (a.focus(), a.blur());
    }
    function c(a) {
      if (T && n) {
        d(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", c = b.substr(1), e = a.className, f = e.split("pbCsr")[1] || "";
        e = e.split("pbAlp")[1] || "";
        if ("CS" === c) {
          var g = "_";
        } else {
          g = c, 3 === g.length && (g = g.substr(0, 2)), g = ea[parseInt(g, 16)] || "~";
        }
        f = f.split(" ")[0];
        e = e.split(" ")[0];
        e = 10 - z(e);
        b ? (b = {className:["pbChr" + c + " pbAlp" + e + " pbCsr" + f]}, Na = 1, k = P(a, "b", b, 0, g), d(a), d(k)) : d(a);
      }
    }
    function d(a) {
      p || f || qa(a, "pbChrCS") && vb.push(a);
    }
    if (a && !Wc) {
      Wc = !0;
      var e = 6 > u ? 1 : 0;
      a = Ma("SAMP");
      var f = 9 > u, g = 5 <= u && 6 > u, h, k, l, m;
      Xb && W(A, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== ba.opacity || void 0 !== ba["-moz-opacity"] || void 0 !== ba["-khtml-opacity"], n = !p && !f && !0, r = !T || n || void 0;
        for (l = -1; h = a[++l];) {
          if (qa(h.parentElement || h.parentNode, "pbLCD")) {
            var w = h.children;
            for (h = w.length; h;) {
              var t = w[--h];
              switch(t.tagName.toUpperCase()) {
                case "A":
                  if (r) {
                    for (T || b(t), m = t.children.length; m;) {
                      c(t.children[--m]);
                    }
                  }
                  pd ? t.setAttribute("href", "javascript:void(0)") : t.onclick = $c;
                  break;
                case "B":
                  r && c(t);
              }
            }
          }
        }
        vb.length ? (setInterval(lc, 500), T ? ra([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : ra([".pbChrCS", "background-position:0 -51px"])) : lc = null;
        n && (T ? ra([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + v + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        v + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + v + "pbLCD/x3_a90.png)"]) : ra([".pbAlp1", "background-image:url(" + v + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + v + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + v + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + v + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + v + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        v + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + v + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + v + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + v + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Ra && (Tc.onclick = function(a) {
    if (wb) {
      return wb = !1, a.preventDefault(), !1;
    }
  });
  var Bb = ea[7], nc = ea[30], dd = ea[113], Ta = F(8337) + F(8331), Cb = F(160), hd = F(8194), fd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), gd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), ed = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + nc + ea[31]).split(""), da = 
  [], zb = [], Ua, Ab;
  Ub(function(a) {
    if (a && !Ab) {
      var b = w.all || Ma("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        qa(c, "pbList") ? Va(c) : qa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Va(c, !0);
      }
      da.length && Sa();
      Ab = !0;
    }
  });
  Vc.prettify = Va;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

