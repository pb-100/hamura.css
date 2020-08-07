PB100 = {};
(function(Pd, t, y, fd, F, pa, ic, X, jc, rb, Qd, sb, gd, va, Rd) {
  function tb(a, b) {
    var d = X(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function l(a, b) {
    var d = "", e = -1, k;
    if (a = a.split(b)[1]) {
      for (; k = a.charCodeAt(++e);) {
        if (48 <= k && 57 >= k || 46 === k) {
          d += a.charAt(e);
        } else {
          break;
        }
      }
      for (e = d.length; e;) {
        if (46 === d.charCodeAt(--e)) {
          d = d.substr(0, e);
        } else {
          break;
        }
      }
    }
    return d;
  }
  function kc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var k = X(a[d]), C = X(b[d]);
      if (k !== C) {
        return k > C ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function lc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], k; b < d; ++b) {
      0 > kc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function mc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function Va() {
    for (var a, b = 0; b < Wa.length; ++b) {
      a = Wa[b], a.f();
    }
  }
  function hd() {
    Ca && (nc(), Ca = setInterval(Va, 999));
  }
  function nc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ja() {
    for (var a, b = 0, d = new va - 0; b < la.length;) {
      d < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    wa = la.length ? sb(Ja, 64) : 0;
  }
  function id() {
    wa && (oc(), wa = sb(Ja, 64));
  }
  function oc() {
    wa && (wa = gd(wa));
  }
  function ca(a, b) {
    for (var d = 0, e = a.length; d < e; ++d) {
      a[d](b);
    }
  }
  function ub(a) {
    var b;
    vb && (b = vb(a));
    ca(Ka, a);
    onload = Xa;
    Ka = ub = vb = onload = null;
    return b;
  }
  function pc() {
    var a = 9 === Da.offsetWidth;
    qc !== a && ca(rc, qc = a);
  }
  function Ea() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = F.defaultView, d = wb, e = b ? b.getComputedStyle(Da, null) : Da.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return La = "#123456" !== b && "rgb(18,52,86)" !== b, xb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), yb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== Ya() && ca(Ma, wb), !0;
    }
  }
  function Ya() {
    return wb = La ? yb ? 2 : xb ? 3 : 1 : 0;
  }
  function Za(a) {
    var b = b || F;
    return sc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function da(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function zb(a, b) {
    var d = F.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function ea(a, b, d, e, k) {
    function C(z, I) {
      for (var q in I) {
        switch(q) {
          case "class":
          case "className":
            qa(z, I[q]);
            break;
          default:
            z.setAttribute(q, I[q]);
        }
      }
    }
    function m(z, I) {
      var q = z.style, Y;
      for (Y in I) {
        q[Y] = I[Y];
      }
    }
    if ("style" === b) {
      var n = !0;
      b = zb("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = zb(b);
    }
    $a ? (2 === $a && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    $a = 0;
    d && C(b, d);
    e && m(b, e);
    k && !n && b.appendChild(F.createTextNode(k));
    return b;
  }
  function tc(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Fa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function qa(a, b) {
    var d;
    if (!Fa(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function ab(a) {
    if (Fa(L, a)) {
      var b = L.className.split(" ");
      b.splice(b.indexOf(a), 1);
      L.className = b.join(" ");
    }
  }
  function uc(a) {
    a = ea(Na, "style", {type:"text/css", media:"all"}, 0, a);
    Ab = a.sheet || a.styleSheet;
  }
  function Ga(a) {
    for (var b = Ab, d, e, k = "", C; a.length;) {
      d = a.shift(), e = a.shift(), C = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(C, b.cssRules.length) : k += C;
    }
    k && uc(k);
  }
  function vc(a) {
    if (ra(bb)) {
      J(a, bb);
    } else {
      if (8 > A) {
        J(a, !1);
      } else {
        var b = new Image;
        b.onerror = function() {
          a(bb = !1);
        };
        b.onload = function() {
          a(bb = 1 === b.width * b.height);
        };
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function wc(a, b, d, e, k, C) {
    function m() {
      var w = '1.6em "' + b + '"';
      F.fonts.load(w).then(function() {
        F.fonts.check(w, "i");
        q(b) ? J(a, Z) : z(!0);
      }, function() {
        vc(Y);
      });
    }
    function n(w) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (O = new va - 0, !1) : w < new va - O;
    }
    function z(w) {
      w && (O = new va - 0);
      q(b) ? a(Z) : n(sa) ? x ? a(0) : 9 > A ? J(a, 0) : vc(Y) : J(z);
    }
    function I() {
      var w = -1, E;
      I = null;
      G = ["sans-serif", "serif"];
      p = ea(L, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Q = {}; E = G[++w];) {
        p.style.fontFamily = E, Q[E] = p.offsetWidth;
      }
    }
    function q(w) {
      var E = 0, fa = -1, Bb, Cb, Db = 0;
      I && I();
      for (L.appendChild(p); Bb = G[++fa];) {
        if (p.style.fontFamily = '"' + w + '",' + Bb, p.offsetWidth !== Q[Bb]) {
          E = 1;
          break;
        }
      }
      if (E && k) {
        for (Cb in k) {
          if (p.innerHTML = Cb, w = p.offsetWidth, p.innerHTML = k[Cb], Db = w === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Db) {
            break;
          }
        }
      }
      da(p);
      return Z = E + Db;
    }
    function Y(w) {
      (x = w) ? M(!0) : a(0);
    }
    function M(w) {
      w && (O = new va - 0);
      for (E in d) {
        if (q(E)) {
          u = ea(L, "div", {"aria-hidden":"true", className:e, id:e});
          w = d[E];
          var E = Ab, fa = xc.all || 0;
          E ? E.addImport ? E.addImport(w, fa) : E.insertRule && E.insertRule('@import "' + w + '"', fa) : uc('@import "' + w + '"');
          xc.all = ++fa;
          J(P, !0);
        } else {
          n(100) ? (delete d[E], J(M, !0)) : J(M);
        }
        return;
      }
      a(0);
    }
    function P(w) {
      w && (O = new va - 0);
      1 < u.offsetWidth ? (da(u), sa = 100, J(z, !0)) : n(sa) ? (da(u), a(0)) : J(P);
    }
    var sa = C || 5000, O, x, p, u, G, Q, Z;
    (function() {
      var w;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > A) {
        return !0;
      }
      var E = ea(Na, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), fa = (fa = E.sheet || E.styleSheet) ? (w = fa.cssRules) && (w = w[0]) ? w.cssText : fa.cssText || "" : "";
      w = 0 < fa.indexOf("src") && 0 === fa.indexOf("@font-face");
      da(E);
      return w;
    })() ? !F.fonts || 603 > cb ? z(!0) : m() : J(a, 0);
  }
  function yc() {
    Eb = !Eb;
    for (var a = -1, b; b = Fb[++a];) {
      b.style.visibility = Eb ? "" : "hidden";
    }
  }
  function jd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Gb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function db() {
    db = null;
    kd(Hb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:eb}, 5000);
  }
  function Hb(a) {
    (fb = a) ? Ib() : Oa ? zc(!0) : ra(Oa) ? Ib() : ld();
  }
  function zc(a) {
    a && (qa(L, "pbList-noWebFont"), ha ? Ga([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ga([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Ib();
  }
  function Ib() {
    for (Hb = wc = null; xa.length;) {
      gb(xa.shift(), Jb.shift());
    }
  }
  function gb(a, b) {
    function d(C) {
      C = C.childNodes;
      for (var m = -1, n; n = C[++m];) {
        switch(n.nodeType) {
          case 1:
            d(n);
            break;
          case 3:
            n.data && n.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(n);
        }
      }
    }
    var e = [];
    if (Hb) {
      -1 === xa.indexOf(a) && (xa.push(a), Jb.push(b), Kb && db && db());
    } else {
      var k = xa.indexOf(a);
      0 <= k && xa.splice(k, 1) && Jb.splice(k, 1);
      for (d(a); a = e.shift();) {
        k = a.data, 2 !== fb && (k = k.split(eb).join(Ac)), b ? a.data = k : md(k.split("\r").join("").split("&yen;").join(nd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Lb).split("&amp;").join("&"), a);
      }
    }
  }
  function md(a, b) {
    function d(p, u) {
      for (var G = ""; u;) {
        u & 1 && (G += p), u >>= 1, p += p;
      }
      return G;
    }
    function e(p, u, G) {
      for (var Q, Z = -1, w, E; Q = u[++Z];) {
        for (; 0 <= (w = p.indexOf(Q));) {
          E = Q.length, p = p.substr(0, w) + d(G, E) + p.substr(w + E);
        }
      }
      return p;
    }
    function k(p) {
      var u = X(p), G = "" + u;
      return 0 < u && u === u | 0 && (u = p.indexOf(G) + G.length, u <= p.length) ? u : 0;
    }
    var C = " area line str cmd fnc syb".split(" "), m = [], n = "", z = -1, I, q;
    if (function(p) {
      var u = p.indexOf("P");
      if (-1 === u) {
        return !1;
      }
      u = X(p.charAt(u + 1));
      return 0 <= u && 9 >= u;
    }(a)) {
      n = d("+", a.length);
    } else {
      for (0 <= (z = k(a)) && (n = d("|", z), --z); q = a.charAt(++z);) {
        q === Lb || I ? (n += "~", q === Lb && (I = !I)) : n += q;
      }
      n = e(n, od, "^");
      n = e(n, pd, "{");
      n = e(n, qd, "}");
    }
    z = 0;
    for (I = a.length; z < I; ++z) {
      q = a.charAt(z);
      var Y = q === Mb, M = " " === q;
      q = Y ? " " : q;
      var P = n.charAt(z), sa = O, O = "|" === P;
      P = C["+|~{}^".indexOf(P) + 1];
      if ("\n" !== q) {
        if (fb || !Oa) {
          8 > A && M && (q = z === I - 1 ? Mb : rd), 2 === fb && a.substr(z, 2) === eb && (q = eb, ++z), M = M && "str" === P ? ' class="pbList-strsp"' : Y ? "" : !M && P ? ' class="pbList-' + P + '"' : "";
        } else {
          var x = ya.indexOf(q);
          x = -1 === x ? "" : ya.indexOf(q).toString(16).toUpperCase();
          x = (x = 1 === x.length ? "0" + x : x) ? "pbChr" + x : "";
          M = M && "str" === P ? ' class="pbList-strsp"' : M || !x ? "" : P ? ' class="' + (x ? x + " " : "") + "pbList-" + P + '"' : ' class="' + x + '"';
        }
        sa && Y && (cb || hb) && (q = Mb);
        m.push("<font" + M + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (C = zb("font", m); m = C.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      da(b);
    }
  }
  var r, v, c = pa.userAgent, R = pa.appVersion, Nb = X(R) | 0, D = pa.platform, Ob = F.documentElement, Bc = Ob && Ob.style, Pb = F.documentMode, Qb = ic.width, Rb = ic.height, Cc = y.HTMLAudioElement, Dc = y.performance, Ec = y.Int8Array, sd = void 0 !== y.ontouchstart, za = l(R, "Version/") || l(c, "Version/"), Ha = void 0 !== Bc.MozAppearance, Fc = y.operamini, Sb = f(c, "UCWEB"), td = Sb && l(c, " U2/"), ud = Sb && l(c, "; wds "), Tb = l(c.split("_").join("."), "; iPh OS "), vd = l(c, "; Adr "), 
  Gc = f(R, "YJApp-ANDROID"), ia = f(D, "Android") || Ha && f(R, "Android") || Gc, S = l(D, "Android ") || l(R, "Android ") || l(c, "Android ") || vd, Ub = f(D, "Linux"), Hc = "MacIntel" === D && void 0 !== pa.standalone, Aa = !Fc && y.opera, wd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : lc(l(c, "Opera "), za, "" + Nb)), Ic = y.opr, ib = !Aa && (F.all || Pb), aa = ib && (Pb ? Pb : y.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  y.attachEvent ? 5 : 4), Vb = !ib && Ob.msContentZoomFactor, jb = !Vb && y.chrome, Wb = Ha && l(c, "Goanna/"), ja = !Wb && Ha && l(c, "rv:"), xd = l(c, "Firefox/"), yd = l(c, "Opera/"), zd = y.FNRBrowser, ma = tb(c, "AppleWebKit/"), Pa = l(c, "Chrome/"), Jc = l(c, "OPR/"), Ad = l(R, "KHTML/"), Bd = l(c.toLowerCase(), "iris"), Qa = tb(c, "SamsungBrowser/"), Ra;
  if (Ra = !Qa) {
    a: {
      for (var Kc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      kb, Xb = Kc.length; kb = Kc[--Xb];) {
        if (f(c, kb)) {
          Ra = 2 > X(za) ? za : 0.9;
          break a;
        }
      }
      var Lc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Xb = Lc.length; kb = Lc[--Xb];) {
        if (f(c, kb)) {
          Ra = za;
          break a;
        }
      }
      Ra = void 0;
    }
  }
  var Mc = Ra, Nc = jb && 534.3 >= ma, Cd = sd && (ma || Ha) && (0 === D.indexOf("Linux armv") || 0 === D.indexOf("Linux aarch") || "Linux i686" === D) && f(c, "Linux x86_64") || !S && Gc, Oc = y.puffinDevice, lb = Oc && Oc.clientInfo, Sa = lb && "iOS" === lb.os && lb.osVersion, Dd = Sa && lb.model, Yb = !aa && F.registerElement, Ed = !aa && F.execCommand, Fd = Ub && Yb && "11.0.696.34" === Pa, Gd = y._firefoxTV_playbackStateObserverJava, Zb, B;
  if ("Nitro" === D) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === D) {
      h = "NDSi";
      var g = yd;
    } else {
      if ("New Nintendo 3DS" === D || f(c, "iPhone OS 6_0") && 320 === Qb && 240 === Rb) {
        h = "New3DS", g = l(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === D) {
          h = "N3DS", g = l(c, "Version/"), ma = 535;
        } else {
          if ("Nintendo Swicth" === D) {
            h = "Swicth", g = l(R, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === D) {
              h = "WiiU", g = l(R, "NintendoBrowser/"), ma = l(R, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === D) {
                h = "Wii";
                g = l(c, "Wii; U; ; ");
                var K = h;
                var N = g;
              } else {
                if (B = l(c, "PlayStation Vita ")) {
                  h = "PSVita", g = B, K = h, N = B;
                } else {
                  if (B = l(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = B;
                    var Pc = 3.3;
                    K = h;
                    N = B;
                  } else {
                    if (B = l(c, "PLAYSTATION 3; ") || l(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = B, K = h, N = B, 0 > kc("4.10", B) && (r = "Sony", v = B);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Nb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Pc = 3.4;
                            K = h;
                            N = 2;
                            var mb = !0;
                          } else {
                            if (0 === D.indexOf("iP") || Tb || Sa || Hc) {
                              if (Sa) {
                                switch(g = Sa, Dd.substr(0, 4)) {
                                  case "iPho":
                                    var na = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    na = "iPad";
                                    var T = !0;
                                    break;
                                  case "iPod":
                                    na = "iPod";
                                    var Qc = !0;
                                }
                              } else {
                                Tb ? g = Tb : g = l(R.split("_").join("."), "OS ");
                                if (!g || zd) {
                                  g = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : pa.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : jc.isNaN ? 9.2 : y.SharedWorker ? Dc && Dc.now ? 8.0 : 8.4 : Ed ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : Ec ? 4.3 : Cc ? 4.1 : 3.2;
                                }
                                var U = Qb === 1.5 * Rb || 1.5 * Qb === Rb;
                                0 === D.indexOf("iPhone") ? (na = "iPhone", ba = !0) : 0 === D.indexOf("iPad") || Hc ? (na = "iPad", T = !0) : 0 === D.indexOf("iPod") && (na = "iPod", Qc = !0);
                              }
                              var $b;
                              if ($b = !Sa) {
                                var ac;
                                if (!(ac = pa.standalone)) {
                                  var nb;
                                  if (nb = T || 12 > g) {
                                    a: {
                                      for (var Hd in F) {
                                        if ("webkitFullscreenEnabled" === Hd) {
                                          nb = !0;
                                          break a;
                                        }
                                      }
                                      nb = void 0;
                                    }
                                  }
                                  ac = nb;
                                }
                                $b = ac || 11 <= g && 13 > g && pa.mediaDevices;
                              }
                              $b ? (r = "SafariMobile", K = "Safari", N = g) : r = "iOSWebView";
                              h = "iOS";
                              v = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", r = "AOSP", v = 2.2, K = r, N = v, ia = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", v = 2.2, K = r, N = v;
                                } else {
                                  if (B = l(c, "CrOS x86_64 ") || l(c, "CrOS aarch64 ") || l(c, "CrOS i686 ") || l(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = B;
                                  } else {
                                    if (void 0 !== y.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ja ? "1.0.1" : 19 > ja ? 1.1 : 27 > ja ? 1.2 : 29 > ja ? 1.3 : 31 > ja ? 1.4 : 33 > ja ? 2.0 : 35 > ja ? 2.1 : 38 > ja ? 2.2 : 45 > ja ? 2.5 : 2.6, f(c, "Mobile") ? ba = !0 : f(c, "Tablet") && (T = !0);
                                    } else {
                                      if (y.palmGetResource) {
                                        h = "webOS", g = l(c, "webOS/") || l(c, "WEBOS") || l(c, "hpwOS/"), K = h, N = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (B = l(c, "Tizen ")) {
                                          h = "Tizen", g = B, K = "Samsung", N = Qa, r = K, v = N, ba = !0;
                                        } else {
                                          if (B = l(c, "Windows Phone ") || l(R, "Windows Phone OS ") || ud) {
                                            var ob = !0;
                                            g = B;
                                            ba = !0;
                                          } else {
                                            if (Vb && "ARM" === D) {
                                              ob = !0, g = 10, ba = !0;
                                            } else {
                                              if (ib && f(R, "ZuneWP")) {
                                                ob = !0, g = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
                                              } else {
                                                if (f(c, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (f(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (f(c, "KFMUWI")) {
                                                      var oa = !0;
                                                      g = 6.3;
                                                      var V = T = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        oa = !0, g = 6, V = T = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          oa = !0, g = 5, V = T = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            oa = !0, g = 5, V = T = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              oa = !0, g = 5 <= X(S) ? 5 : 4, V = T = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                oa = !0, g = 3, V = T = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  oa = !0, g = 2, V = T = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    oa = !0, g = 1, V = T = !0;
                                                                  } else {
                                                                    if (B = l(c, "Kindle/")) {
                                                                      h = "Kindle", g = B, r = "AOSP", v = 2.2, K = r, N = v;
                                                                    } else {
                                                                      if (f(c, "AmazonWebAppPlatform") || f(c, "; AFT") || Gd) {
                                                                        oa = !0, g = S, V = !0;
                                                                      } else {
                                                                        if (f(c, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (f(c, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === c.indexOf("Windows Mobile;") || Bd) {
                                                                              h = "WindowsMobile", mb = !0;
                                                                            } else {
                                                                              if ("WinCE" === D) {
                                                                                h = D, mb = !0;
                                                                              } else {
                                                                                if ("Win16" === D || "Win32" === D || "Win64" === D) {
                                                                                  h = D, g = l(c, "Windows NT ") || l(c, "Windows ");
                                                                                } else {
                                                                                  if (0 === D.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === D ? "MacPPC" : D;
                                                                                    if (B = l(c.split("_").join("."), "Mac OS X ")) {
                                                                                      g = B;
                                                                                    }
                                                                                    var Rc = !0;
                                                                                  } else {
                                                                                    f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = za, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ia && Ha ? (f(c, "Android 4.4;") ? U = {min:2.3} : 4 <= X(S) ? U = S : U = {min:2.2}, g = U) : ia && Aa ? (S ? U = S : U = {min:1.6}, g = U, f(c, "Tablet") ? T = !0 : ba = !0) : S ? (g = S, 
                                                                                    ia = !0) : Ub && Cd ? (Zb = !0, Qa ? U = {min:4.4} : jb && !Nc || Ic || Jc ? U = {min:4} : (U = S = void 0 !== Bc.touchAction ? {min:5} : Yb ? 4.4 : Ec ? pa.connection ? y.searchBoxJavaBridge_ || jb ? jc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Cc ? 2.3 : 2.2 : 530 <= ma ? 2.0 : 1.5, Mc && (r = "Samsung", v = Mc)), g = U, ia = !0) : Fd ? (g = {min:5}, Zb = ia = !0) : Ub && (f(c, "Ubuntu") ? h = "Ubuntu" : 
                                                                                    (B = l(c, "Mint/")) ? (h = "Mint", g = B) : (B = l(c, "Fedora/")) ? (h = "Fedora", g = B) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  oa && (h = "FireOS");
  ia && (h = h || "Android");
  ob && (h = "WindowsPhone");
  r || (V = V || ia, Aa ? (r = V || mb || ba || T ? "PrestoMobile" : "Presto", v = wd) : ib ? ((U = tb(R, "Trident/") + 4) && U !== aa && (K = "IEHost", N = U), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (K = "ModernIE", N = aa), mb || ba || T || Qc ? r = "TridentMobile" : Rc && 5 <= aa ? (r = "Tasman", K = "MacIE", N = aa) : (r = "Trident", Rc && (K = "MacIE", N = aa)), v = aa) : Vb ? (r = ob ? "EdgeMobile" : "EdgeHTML", v = l(R, "Edge/")) : Wb ? (r = "Goanna", 
  v = Wb) : Ha ? (r = V ? "Fennec" : "Gecko", v = ja || xd) : Qa ? (r = "Samsung", v = Qa) : (B = Pc || l(c, "NetFront/")) ? (r = "NetFront", v = B) : (B = l(c, "iCab")) ? (r = "iCab", v = B) : (B = lc(l(c, "Opera Mini/"), l(c, "Opera Mobi/")) || Fc && za) ? (r = "OperaMini", v = B, h || (f(c, "iPhone") ? na = "iPhone" : f(c, "iPad") ? na = "iPad" : f(c, "iPod") && (na = "iPod"), na && (h = "iOS"))) : Sb ? (r = "UCWEB", v = td) : Ad ? (r = "KHTML", v = Nb) : ia && Nc ? (r = "AOSP", v = S) : jb || 
  Ic || Jc ? (r = V ? "ChromiumMobile" : "Chromium", v = Pa) : ia && Yb ? (r = "ChromeWebView", v = 5 > X(S) ? S : Pa) : ia && (za || Zb) ? (r = "AOSP", v = S) : Pa ? (r = V ? "ChromiumMobile" : "Chromium", v = Pa) : ma && (r = "WebKit", v = ma));
  h && (t.PLATFORM = h, g ? (t.PLATFORM_VERSION = mc(g), t[h] = g === g + "" ? X(g) : g) : t[h] = !0);
  r && (t.ENGINE = r, v ? (t.ENGINE_VERSION = mc(v), t[r] = v === v + "" ? X(v) : v) : t[r] = !0, K || (K = r, N = v));
  var Xa = fd, Ta = [], sc = !!F.getElementsByTagName, L = F.body, ta = L.style, A = t.Trident || t.TridentMobile, Ua = t.Tasman, Sc = t.EdgeHTML || t.EdgeMobile, bc = t.Presto || t.PrestoMobile, cc = t.Gecko, dc = t.Goanna, cb = t.WebKit, hb = t.SafariMobile || t.iOSWebView, Id = t.OperaMini && t.UCWEB;
  A || Ua || (new rb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Jd = 5.5 > A, Tc = F.scripts, Kd = (Ua ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", Uc = 0 === location.href.indexOf("https");
  var Ia = Tc[Tc.length - 1].src.split("/");
  --Ia.length;
  var Ld = Ia.join("/");
  0 <= "http: https:".indexOf(Ia[0]) && Ia.splice(0, 3);
  Ia = Ia.join("/");
  var ra = function(a) {
    return void 0 !== a;
  };
  var ka = Array.prototype;
  ka.pop || (ka.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ka.push || (ka.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ka.shift || (ka.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ka.splice || (ka.splice = function(a, b) {
    var d = arguments, e = d.length - 2 - b, k = this.slice(a, a + b), C;
    if (0 < e) {
      var m = this.length - 1;
      for (C = a + b; m >= C; --m) {
        this[m + e] = this[m];
      }
    } else {
      if (0 > e) {
        m = a + b;
        for (C = this.length; m < C; ++m) {
          this[m + e] = this[m];
        }
        this.length += e;
      }
    }
    m = 2;
    for (C = d.length; m < C; ++m) {
      this[m - 2 + a] = d[m];
    }
    return k;
  });
  ka.indexOf || (ka.indexOf = function(a, b) {
    var d = this.length >>> 0;
    if (0 === d) {
      return -1;
    }
    if (b) {
      var e = b || 0;
      e = -Infinity === e ? 0 : (0 > e ? -e : e) | 0;
      if (d <= e) {
        return -1;
      }
    }
    for (e = 0 <= e ? e : 0 < d + e ? d + e : 0; e < d; ++e) {
      if (this[e] === a) {
        return e;
      }
    }
    return -1;
  });
  var Wa = [], Md = 0, Ca;
  if (5 > A || Ua) {
    y._wdb_onlooptimer = Va, Va = "_wdb_onlooptimer()";
  }
  var Vc = function(a) {
    Wa.length || (Ca = setInterval(Va, 999));
    Wa.push({f:a, g:++Md});
  };
  Ta.push(function() {
    6.1 > hb && Wc(hd);
    pb(nc);
  });
  var la = [], Xc = 0, wa;
  if (5 > A || Ua) {
    y._wdb_ontimer = Ja, Ja = "_wdb_ontimer()";
  }
  var J = function(a, b) {
    la.length || (wa = sb(Ja, 64));
    la.push({f:a, p:b, g:++Xc, t:new va - 0 + 64});
    return Xc;
  };
  var Yc = function(a) {
    for (var b = la.length, d; d = la[--b];) {
      if (d.g === a) {
        la.splice(b, 1);
        break;
      }
    }
  };
  Ta.push(function() {
    6.1 > hb && Wc(id);
    pb(oc);
  });
  var Ka = [], qc, wb = 0, Ba = y.matchMedia, Da;
  Ka.push(function() {
    Da = ea(L, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Zc = [], vb = y.onload, $c = y.onunload;
  onload = ub;
  onunload = function(a) {
    var b;
    $c && (b = $c(a));
    ca(Zc, a);
    onunload = Xa;
    return b;
  };
  var qb = function(a) {
    Ka.push(a);
  };
  var pb = function(a) {
    Zc.push(a);
  };
  var rc = [];
  qb(function() {
    pc();
    Vc(pc);
  });
  var ec = function(a) {
    rc.push(a);
  };
  var Ma = [], La, xb, yb;
  10 <= A || Sc ? (Ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    La = xb = a.matches;
    ca(Ma, Ya());
  }), Ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    La = yb = a.matches;
    ca(Ma, Ya());
  }), Ba("(-ms-high-contrast:active)").addListener(function(a) {
    La = a.matches;
    ca(Ma, Ya());
  }), Ea = null) : 10 > A || (t.Win32 || t.Win64) && (44 <= cc || dc) ? qb(function() {
    Da.style.color = "#123456";
    Da.style.backgroundColor = "#123456";
    60 > cc || dc ? Ea() : Ea() && Vc(Ea);
    Ea = null;
  }) : Ea = null;
  var Nd = [];
  Ba && Ba("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Nd, a.matches);
  });
  var fc = [];
  y.onbeforeprint ? (onbeforeprint = function() {
    ca(fc, !0);
  }, onafterprint = function() {
    ca(fc, !1);
  }, pb(function() {
    onbeforeprint = onafterprint = Xa;
  })) : Ba && Ba("print").addListener(function(a) {
    ca(fc, a.matches);
  });
  var ad = [], gc = y.onscroll;
  onscroll = function(a) {
    var b;
    gc && (b = gc(a));
    ub || ca(ad);
    return b;
  };
  pb(function() {
    onscroll = gc = Xa;
  });
  var Wc = function(a) {
    ad.push(a);
  };
  var bd = Za("html")[0];
  var Na = Za("head")[0];
  var $a;
  Ka.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var C = k.length, m, n, z, I, q; m = k[--C];) {
        if (n = m.nodeType, 8 === n) {
          b && da(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Jd ? (z = m.sheet || m.styleSheet) && (I = 10 <= A ? z.cssRules : z.rules || z.cssRules) && !I[0] : (new rb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  da(m);
                  break;
                }
              case "LINK":
                sc && !Na.contains(m) && e.push(m);
                break;
              case "META":
                n = m.getAttribute("name") || m.getAttribute("property") || "";
                for (q = d.length; q;) {
                  if (0 === n.indexOf(d[--q])) {
                    da(m);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (tc(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (tc(m, "skip-cleanup")) {
                  break;
                }
              case "!":
                da(m);
                break;
              default:
                m.childNodes.length && a(m);
            }
          }
        }
      }
      for (; e[0];) {
        z = e.pop(), Na.appendChild(z);
      }
    }
    var b = !(8 > bc || 5 > A || Ua), d = ["og:", "twitter:", "fb:"], e = [];
    a(bd);
  });
  var Ab = void 0;
  var xc = {}, hc, Oa, ha, Od = ra(ta.transform) ? "transform" : ra(ta["-o-transform"]) ? "-o-transform" : ra(ta["-ms-transform"]) ? "-ms-transform" : ra(ta["-moz-transform"]) ? "-moz-transform" : ra(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  ha || ec(function(a) {
    a && !ra(ha) && (ha = 1.8 <= cc || dc || 8 <= A || Sc || 530 <= cb || 3.2 <= hb, ha || (a = ea(L, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ha = 6 <= a.offsetWidth, da(a)));
  });
  var bb;
  9 > A && qb(function(a) {
    a = ea(L, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    da(a);
  });
  var cd = Uc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var ld = function() {
    function a() {
      k || (d.complete ? (k = !0, d.width || J(b, !1)) : e = J(a));
    }
    var b = zc;
    if (cd) {
      var d = new Image, e, k;
      d.onerror = function() {
        (!A || 11 === A || 11 === t.IEHost) && d.width || k || (k = !0, e && Yc(e), e = J(b, !1));
      };
      d.onload = function() {
        k = !0;
        e && Yc(e);
        bc && !d.complete ? e = J(b, !1) : (Oa = !0, J(b, !0));
      };
      d.src = cd;
      8 > bc && d.complete ? (Oa = !0, J(b, !0)) : k || (e = J(a));
    } else {
      J(b, !1);
    }
  };
  var kd = wc;
  for (t.IEHost && 5.5 > A && qb(function() {
    ea(Na, "link", {href:Ld + "/" + Kd, rel:"stylesheet", type:"text/css"});
  }); Ta.length;) {
    Ta.shift()();
  }
  Ta = null;
  var dd = dd || {}, W = String.fromCharCode, H = Uc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", W(960), ")", "(", W(234), W(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", W(9824), "\u2190", W(9829), W(9830), W(9827), W(956), "\u03a9", "\u2193", "\u2192", "%", W(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", W(9619)];
  Ma.push(function(a) {
    ab("jsHcm");
    ab("jsHcmWob");
    ab("jsHcmBow");
    if (a) {
      switch((Od || 9 === A || 5.5 <= A && 9 > A && hc) && qa(L, "jsCanRotate"), a) {
        case 1:
          qa(L, "jsHcm");
          break;
        case 2:
          qa(L, "jsHcmWob");
          break;
        case 3:
          qa(L, "jsHcmBow");
      }
    } else {
      ab("jsCanRotate");
    }
  });
  var Fb = [], Eb, Gb, ed;
  ec(function(a) {
    function b(x) {
      var p = x.getAttribute("pbtip") || "", u = p.charAt(0), G = "_" === u;
      p = G ? p.charAt(2) : u;
      u = G ? "Btm" : "";
      var Q = x.getAttribute("title") || "";
      qa(x, "pbTipPos" + p.toUpperCase());
      ea(x, "div", {className:"pbTip" + u}, {width:Q.length + k + "em"}, Q);
      ea(x, "div", {className:"pbTail" + u});
      m && G && (x.focus(), x.blur());
    }
    function d(x) {
      if (ha && M) {
        e(x);
      } else {
        var p = x.getAttribute("pbGhos") || "", u = p.substr(1), G = x.className, Q = G.split("pbCsr")[1] || "";
        G = G.split("pbAlp")[1] || "";
        if ("CS" === u) {
          var Z = "_";
        } else {
          Z = u, 3 === Z.length && (Z = Z.substr(0, 2)), Z = ya[parseInt(Z, 16)] || "~";
        }
        Q = Q.split(" ")[0];
        G = G.split(" ")[0];
        G = 10 - X(G);
        p ? (p = {className:["pbChr" + u + " pbAlp" + G + " pbCsr" + Q]}, $a = 1, z = ea(x, "b", p, 0, Z), e(x), e(z)) : e(x);
      }
    }
    function e(x) {
      Y || C || Fa(x, "pbChrCS") && Fb.push(x);
    }
    if (a && !ed) {
      ed = !0;
      var k = 6 > A ? 1 : 0;
      a = Za("SAMP");
      var C = 9 > A, m = 5 <= A && 6 > A, n, z, I, q;
      hc && qa(L, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], M = !Y && !C && !0, P = !ha || M || void 0;
        for (I = -1; n = a[++I];) {
          if (Fa(n.parentElement || n.parentNode, "pbLCD")) {
            var sa = n.children;
            for (n = sa.length; n;) {
              var O = sa[--n];
              switch(O.tagName.toUpperCase()) {
                case "A":
                  if (P) {
                    for (ha || b(O), q = O.children.length; q;) {
                      d(O.children[--q]);
                    }
                  }
                  Id ? O.setAttribute("href", "javascript:void(0)") : O.onclick = jd;
                  break;
                case "B":
                  P && d(O);
              }
            }
          }
        }
        Fb.length ? (setInterval(yc, 500), ha ? Ga([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ga([".pbChrCS", "background-position:0 -51px"])) : yc = null;
        M && (ha ? Ga([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ga([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > cb && (bd.onclick = function(a) {
    if (Gb) {
      return Gb = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new rb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Lb = ya[7], Ac = ya[30], nd = ya[113], eb = W(8337) + W(8331), Mb = W(160), rd = W(8194), pd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), qd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), od = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ac + ya[31]).split(""), xa = 
  [], Jb = [], fb, Kb;
  ec(function(a) {
    if (a && !Kb) {
      var b = F.all || Za("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Fa(d, "pbList") ? gb(d) : Fa(d, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(d.tagName.toUpperCase()) && gb(d, !0);
      }
      xa.length && db();
      Kb = !0;
    }
  });
  dd.prettify = gb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

