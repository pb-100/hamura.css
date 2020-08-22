PB100 = {};
(function(Qd, t, y, hd, F, qa, kc, X, lc, tb, Rd, ub, id, xa, Sd) {
  function vb(a, b) {
    var d = X(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function g(a, b) {
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
  function mc(a, b) {
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
  function nc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], k; b < d; ++b) {
      0 > mc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function oc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function Xa() {
    for (var a, b = 0; b < Ya.length; ++b) {
      a = Ya[b], a.f();
    }
  }
  function jd() {
    Ea && (pc(), Ea = setInterval(Xa, 999));
  }
  function pc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function La() {
    for (var a, b = 0, d = new xa - 0; b < ma.length;) {
      d < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    ya = ma.length ? ub(La, 64) : 0;
  }
  function kd() {
    ya && (qc(), ya = ub(La, 64));
  }
  function qc() {
    ya && (ya = id(ya));
  }
  function ca(a, b) {
    for (var d = 0, e = a.length; d < e; ++d) {
      a[d](b);
    }
  }
  function wb(a) {
    var b;
    xb && (b = xb(a));
    ca(Ma, a);
    onload = Za;
    Ma = wb = xb = onload = null;
    return b;
  }
  function rc() {
    var a = 9 === Fa.offsetWidth;
    sc !== a && ca(tc, sc = a);
  }
  function Ga() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = F.defaultView, d = yb, e = b ? b.getComputedStyle(Fa, null) : Fa.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Na = "#123456" !== b && "rgb(18,52,86)" !== b, zb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Ab = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== $a() && ca(Oa, yb), !0;
    }
  }
  function $a() {
    return yb = Na ? Ab ? 2 : zb ? 3 : 1 : 0;
  }
  function ab(a) {
    var b = b || F;
    return uc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function da(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Bb(a, b) {
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
            ra(z, I[q]);
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
      b = Bb("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = Bb(b);
    }
    bb ? (2 === bb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    bb = 0;
    d && C(b, d);
    e && m(b, e);
    k && !n && b.appendChild(F.createTextNode(k));
    return b;
  }
  function vc(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Ha(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var d;
    if (!Ha(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function cb(a) {
    if (Ha(L, a)) {
      var b = L.className.split(" ");
      b.splice(b.indexOf(a), 1);
      L.className = b.join(" ");
    }
  }
  function wc(a) {
    a = ea(Pa, "style", {type:"text/css", media:"all"}, 0, a);
    Cb = a.sheet || a.styleSheet;
  }
  function Ia(a) {
    for (var b = Cb, d, e, k = "", C; a.length;) {
      d = a.shift(), e = a.shift(), C = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(C, b.cssRules.length) : k += C;
    }
    k && wc(k);
  }
  function xc(a) {
    if (sa(db)) {
      J(a, db);
    } else {
      if (8 > A) {
        J(a, !1);
      } else {
        var b = new Image;
        b.onerror = function() {
          a(db = !1);
        };
        b.onload = function() {
          a(db = 1 === b.width * b.height);
        };
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function yc(a, b, d, e, k, C) {
    function m() {
      var w = '1.6em "' + b + '"';
      F.fonts.load(w).then(function() {
        F.fonts.check(w, "i");
        q(b) ? J(a, Z) : z(!0);
      }, function() {
        xc(Y);
      });
    }
    function n(w) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (O = new xa - 0, !1) : w < new xa - O;
    }
    function z(w) {
      w && (O = new xa - 0);
      q(b) ? a(Z) : n(ta) ? x ? a(0) : 9 > A ? J(a, 0) : xc(Y) : J(z);
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
      var E = 0, fa = -1, Db, Eb, Fb = 0;
      I && I();
      for (L.appendChild(p); Db = G[++fa];) {
        if (p.style.fontFamily = '"' + w + '",' + Db, p.offsetWidth !== Q[Db]) {
          E = 1;
          break;
        }
      }
      if (E && k) {
        for (Eb in k) {
          if (p.innerHTML = Eb, w = p.offsetWidth, p.innerHTML = k[Eb], Fb = w === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Fb) {
            break;
          }
        }
      }
      da(p);
      return Z = E + Fb;
    }
    function Y(w) {
      (x = w) ? M(!0) : a(0);
    }
    function M(w) {
      w && (O = new xa - 0);
      for (E in d) {
        if (q(E)) {
          u = ea(L, "div", {"aria-hidden":"true", className:e, id:e});
          w = d[E];
          var E = Cb, fa = zc.all || 0;
          E ? E.addImport ? E.addImport(w, fa) : E.insertRule && E.insertRule('@import "' + w + '"', fa) : wc('@import "' + w + '"');
          zc.all = ++fa;
          J(P, !0);
        } else {
          n(100) ? (delete d[E], J(M, !0)) : J(M);
        }
        return;
      }
      a(0);
    }
    function P(w) {
      w && (O = new xa - 0);
      1 < u.offsetWidth ? (da(u), ta = 100, J(z, !0)) : n(ta) ? (da(u), a(0)) : J(P);
    }
    var ta = C || 5000, O, x, p, u, G, Q, Z;
    (function() {
      var w;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > A) {
        return !0;
      }
      var E = ea(Pa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), fa = (fa = E.sheet || E.styleSheet) ? (w = fa.cssRules) && (w = w[0]) ? w.cssText : fa.cssText || "" : "";
      w = 0 < fa.indexOf("src") && 0 === fa.indexOf("@font-face");
      da(E);
      return w;
    })() ? !F.fonts || 603 > eb ? z(!0) : m() : J(a, 0);
  }
  function Ac() {
    Gb = !Gb;
    for (var a = -1, b; b = Hb[++a];) {
      b.style.visibility = Gb ? "" : "hidden";
    }
  }
  function ld(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Ib = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function fb() {
    fb = null;
    md(Jb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:gb}, 5000);
  }
  function Jb(a) {
    (hb = a) ? Kb() : Qa ? Bc(!0) : sa(Qa) ? Kb() : nd();
  }
  function Bc(a) {
    a && (ra(L, "pbList-noWebFont"), ha ? Ia([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ia([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Kb();
  }
  function Kb() {
    for (Jb = yc = null; za.length;) {
      ib(za.shift(), Lb.shift());
    }
  }
  function ib(a, b) {
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
    if (Jb) {
      -1 === za.indexOf(a) && (za.push(a), Lb.push(b), Mb && fb && fb());
    } else {
      var k = za.indexOf(a);
      0 <= k && za.splice(k, 1) && Lb.splice(k, 1);
      for (d(a); a = e.shift();) {
        k = a.data, 2 !== hb && (k = k.split(gb).join(Cc)), b ? a.data = k : od(k.split("\r").join("").split("&yen;").join(pd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Nb).split("&amp;").join("&"), a);
      }
    }
  }
  function od(a, b) {
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
        q === Nb || I ? (n += "~", q === Nb && (I = !I)) : n += q;
      }
      n = e(n, qd, "^");
      n = e(n, rd, "{");
      n = e(n, sd, "}");
    }
    z = 0;
    for (I = a.length; z < I; ++z) {
      q = a.charAt(z);
      var Y = q === Ob, M = " " === q;
      q = Y ? " " : q;
      var P = n.charAt(z), ta = O, O = "|" === P;
      P = C["+|~{}^".indexOf(P) + 1];
      if ("\n" !== q) {
        if (hb || !Qa) {
          8 > A && M && (q = z === I - 1 ? Ob : td), 2 === hb && a.substr(z, 2) === gb && (q = gb, ++z), M = M && "str" === P ? ' class="pbList-strsp"' : Y ? "" : !M && P ? ' class="pbList-' + P + '"' : "";
        } else {
          var x = Aa.indexOf(q);
          x = -1 === x ? "" : Aa.indexOf(q).toString(16).toUpperCase();
          x = (x = 1 === x.length ? "0" + x : x) ? "pbChr" + x : "";
          M = M && "str" === P ? ' class="pbList-strsp"' : M || !x ? "" : P ? ' class="' + (x ? x + " " : "") + "pbList-" + P + '"' : ' class="' + x + '"';
        }
        ta && Y && (eb || jb) && (q = Ob);
        m.push("<font" + M + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (C = Bb("font", m); m = C.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      da(b);
    }
  }
  var r, v, c = qa.userAgent, R = qa.appVersion, Pb = X(R) | 0, D = qa.platform, Qb = F.documentElement, Dc = Qb && Qb.style, Rb = F.documentMode, Sb = kc.width, Tb = kc.height, Ec = y.HTMLAudioElement, Fc = y.performance, Gc = y.Int8Array, ud = void 0 !== y.ontouchstart, Ba = l(R, "Version/") || l(c, "Version/"), Ja = void 0 !== Dc.MozAppearance, Hc = y.operamini, Ub = g(c, "UCWEB"), vd = Ub && l(c, " U2/"), wd = Ub && l(c, "; wds "), Vb = l(c.split("_").join("."), "; iPh OS "), xd = l(c, "; Adr "), 
  Ic = g(R, "YJApp-ANDROID"), ia = g(D, "Android") || Ja && g(R, "Android") || Ic, S = l(D, "Android ") || l(R, "Android ") || l(c, "Android ") || xd, Wb = g(D, "Linux"), Xb = "MacIntel" === D && void 0 !== qa.standalone, Ca = !Hc && y.opera, yd = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : nc(l(c, "Opera "), Ba, "" + Pb)), Jc = y.opr, kb = !Ca && (F.all || Rb), aa = kb && (Rb ? Rb : y.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  y.attachEvent ? 5 : 4), Yb = !kb && Qb.msContentZoomFactor, lb = !Yb && y.chrome, Zb = Ja && l(c, "Goanna/"), ka = !Zb && Ja && l(c, "rv:"), zd = l(c, "Firefox/"), Ad = l(c, "Opera/"), Bd = y.FNRBrowser, na = vb(c, "AppleWebKit/"), Ra = l(c, "Chrome/"), Kc = l(c, "OPR/"), Cd = l(R, "KHTML/"), Dd = l(c.toLowerCase(), "iris"), Sa = vb(c, "SamsungBrowser/"), Ta;
  if (Ta = !Sa) {
    a: {
      for (var Lc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      mb, $b = Lc.length; mb = Lc[--$b];) {
        if (g(c, mb)) {
          Ta = 2 > X(Ba) ? Ba : 0.9;
          break a;
        }
      }
      var Mc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for ($b = Mc.length; mb = Mc[--$b];) {
        if (g(c, mb)) {
          Ta = Ba;
          break a;
        }
      }
      Ta = void 0;
    }
  }
  var Nc = Ta, Oc = lb && 534.3 >= na, Pc = ud && (na || Ja) && (0 === D.indexOf("Linux armv") || 0 === D.indexOf("Linux aarch") || "Linux i686" === D) && g(c, "Linux x86_64") || !S && Ic, Qc = y.puffinDevice, nb = Qc && Qc.clientInfo, Ua = nb && "iOS" === nb.os && nb.osVersion, Ed = Ua && nb.model, ac = !aa && F.registerElement, Fd = !aa && F.execCommand, Gd = Wb && ac && "11.0.696.34" === Ra, Hd = y._firefoxTV_playbackStateObserverJava, va, ja, B;
  if ("Nitro" === D) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === D) {
      h = "NDSi";
      var f = Ad;
    } else {
      if ("New Nintendo 3DS" === D || g(c, "iPhone OS 6_0") && 320 === Sb && 240 === Tb) {
        h = "New3DS", f = l(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === D) {
          h = "N3DS", f = l(c, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === D) {
            h = "Swicth", f = l(R, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === D) {
              h = "WiiU", f = l(R, "NintendoBrowser/"), na = l(R, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === D) {
                h = "Wii";
                f = l(c, "Wii; U; ; ");
                var K = h;
                var N = f;
              } else {
                if (B = l(c, "PlayStation Vita ")) {
                  h = "PSVita", f = B, K = h, N = B;
                } else {
                  if (B = l(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = B;
                    var Rc = 3.3;
                    K = h;
                    N = B;
                  } else {
                    if (B = l(c, "PLAYSTATION 3; ") || l(c, "PLAYSTATION 3 ")) {
                      h = "PS3", f = B, K = h, N = B, 0 > mc("4.10", B) && (r = "Sony", v = B);
                    } else {
                      if (g(c, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(c, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Pb && g(c, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Rc = 3.4;
                            K = h;
                            N = 2;
                            var ob = !0;
                          } else {
                            if (0 === D.indexOf("iP") || Vb || Ua || Xb) {
                              if (Ua) {
                                switch(f = Ua, Ed.substr(0, 4)) {
                                  case "iPho":
                                    var oa = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    oa = "iPad";
                                    var T = !0;
                                    break;
                                  case "iPod":
                                    oa = "iPod";
                                    var Sc = !0;
                                }
                              } else {
                                Vb ? f = Vb : f = l(R.split("_").join("."), "OS ");
                                f || (ja = !0);
                                if (!f || Bd) {
                                  f = y.PointerEvent ? 13 : y.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : y.WebAssembly ? 11.2 : y.HTMLMeterElement ? 10.3 : y.Proxy ? 10.2 : y.HTMLPictureElement ? 9.3 : lc.isNaN ? 9.2 : y.SharedWorker ? Fc && Fc.now ? 8.0 : 8.4 : Fd ? 7.1 : y.webkitURL ? 6.1 : y.Worker ? 5.1 : Gc ? 4.3 : Ec ? 4.1 : 3.2;
                                }
                                var U = Sb === 1.5 * Tb || 1.5 * Sb === Tb;
                                0 === D.indexOf("iPhone") ? (oa = "iPhone", ba = !0) : 0 === D.indexOf("iPad") || Xb ? (oa = "iPad", T = !0) : 0 === D.indexOf("iPod") && (oa = "iPod", Sc = !0);
                              }
                              var bc;
                              if (bc = !Ua) {
                                var cc;
                                if (!(cc = qa.standalone)) {
                                  var pb;
                                  if (pb = T || 12 > f) {
                                    a: {
                                      for (var Id in F) {
                                        if ("webkitFullscreenEnabled" === Id) {
                                          pb = !0;
                                          break a;
                                        }
                                      }
                                      pb = void 0;
                                    }
                                  }
                                  cc = pb;
                                }
                                bc = cc || 11 <= f && 13 > f && qa.mediaDevices;
                              }
                              bc ? (r = "SafariMobile", K = "Safari", N = f) : r = "iOSWebView";
                              h = "iOS";
                              v = f;
                            } else {
                              if (g(c, "Kobo")) {
                                h = "Kobo", r = "AOSP", v = 2.2, K = r, N = v, ia = !0;
                              } else {
                                if (g(c, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", v = 2.2, K = r, N = v;
                                } else {
                                  if (B = l(c, "CrOS x86_64 ") || l(c, "CrOS aarch64 ") || l(c, "CrOS i686 ") || l(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = B;
                                  } else {
                                    if (void 0 !== y.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2.0 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, g(c, "Mobile") ? ba = !0 : g(c, "Tablet") && (T = !0);
                                    } else {
                                      if (y.palmGetResource) {
                                        h = "webOS", f = l(c, "webOS/") || l(c, "WEBOS") || l(c, "hpwOS/"), K = h, N = f, g(c, "webOS.TV") || g(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (B = l(c, "Tizen ")) {
                                          h = "Tizen", f = B, K = "Samsung", N = Sa, r = K, v = N, ba = !0;
                                        } else {
                                          if (B = l(c, "Windows Phone ") || l(R, "Windows Phone OS ") || wd) {
                                            var qb = !0;
                                            f = B;
                                            ba = !0;
                                          } else {
                                            if (Yb && "ARM" === D) {
                                              qb = !0, f = 10, ja = ba = !0;
                                            } else {
                                              if (kb && g(R, "ZuneWP")) {
                                                qb = !0, f = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ja = ba = !0;
                                              } else {
                                                if (g(c, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (g(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (g(c, "KFMUWI")) {
                                                      var pa = !0;
                                                      f = 6.3;
                                                      var V = T = !0;
                                                    } else {
                                                      if (g(c, "KFKAWI")) {
                                                        pa = !0, f = 6, V = T = !0;
                                                      } else {
                                                        if (g(c, "KFSUWI") || g(c, "KFAUWI") || g(c, "KFDOWI")) {
                                                          pa = !0, f = 5, V = T = !0;
                                                        } else {
                                                          if (g(c, "KFGIWI")) {
                                                            pa = !0, f = 5, V = T = !0;
                                                          } else {
                                                            if (g(c, "KFARWI") || g(c, "KFSAWA") || g(c, "KFSAWI")) {
                                                              pa = !0, f = 5 <= X(S) ? 5 : 4, V = T = !0;
                                                            } else {
                                                              if (g(c, "KFSOWI") || g(c, "KFTHWA") || g(c, "KFTHWI") || g(c, "KFAPWA") || g(c, "KFAPWI")) {
                                                                pa = !0, f = 3, V = T = !0;
                                                              } else {
                                                                if (g(c, "KFOT") || g(c, "KFTT") || g(c, "KFJWA") || g(c, "KFJWI")) {
                                                                  pa = !0, f = 2, V = T = !0;
                                                                } else {
                                                                  if (g(c, "Kindle Fire")) {
                                                                    pa = !0, f = 1, V = T = !0;
                                                                  } else {
                                                                    if (B = l(c, "Kindle/")) {
                                                                      h = "Kindle", f = B, r = "AOSP", v = 2.2, K = r, N = v;
                                                                    } else {
                                                                      if (g(c, "AmazonWebAppPlatform") || g(c, "; AFT") || Hd) {
                                                                        pa = !0, f = S, V = !0;
                                                                      } else {
                                                                        if (g(c, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(c, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === c.indexOf("Windows Mobile;") || Dd) {
                                                                              h = "WindowsMobile", ob = !0;
                                                                            } else {
                                                                              if ("WinCE" === D) {
                                                                                h = D, ob = !0;
                                                                              } else {
                                                                                if ("Win16" === D || "Win32" === D || "Win64" === D) {
                                                                                  h = D, f = l(c, "Windows NT ") || l(c, "Windows ");
                                                                                } else {
                                                                                  if (0 === D.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === D ? "MacPPC" : D;
                                                                                    if (B = l(c.split("_").join("."), "Mac OS X ")) {
                                                                                      f = B;
                                                                                    }
                                                                                    var Tc = !0;
                                                                                  } else {
                                                                                    g(c, "BlackBerry") || g(c, "BB10") ? (h = "BlackBerry", f = Ba, ba = !0) : g(c, "SunOS") || g(c, "Sun Solaris") ? h = "SunOS" : g(c, "FreeBSD") ? h = "FreeBSD" : g(c, "OpenBSD") ? h = "OpenBSD" : g(c, "NetBSD") ? h = "NetBSD" : ia && Ja ? (g(c, "Android 4.4;") ? U = {min:2.3} : 4 <= X(S) ? U = S : U = {min:2.2}, f = U, Pc && (ja = !0)) : ia && Ca ? (S ? U = S : (U = {min:1.6}, ja = !0), f = U, g(c, "Tablet") ? T = 
                                                                                    !0 : ba = !0) : S ? (f = S, ia = !0) : Wb && Pc ? (va = !0, Sa ? U = {min:4.4} : lb && !Oc || Jc || Kc ? U = {min:4} : (U = S = void 0 !== Dc.touchAction ? {min:5} : ac ? 4.4 : Gc ? qa.connection ? y.searchBoxJavaBridge_ || lb ? lc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Ec ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Nc && (r = "Samsung", v = Nc)), f = U, ia = !0) : Gd ? (f = {min:5}, va = ia = !0) : Wb && 
                                                                                    (g(c, "Ubuntu") ? h = "Ubuntu" : (B = l(c, "Mint/")) ? (h = "Mint", f = B) : (B = l(c, "Fedora/")) ? (h = "Fedora", f = B) : h = g(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  pa && (h = "FireOS");
  ia && (h = h || "Android");
  qb && (h = "WindowsPhone");
  r || (V = V || ia, Ca ? (r = V || ob || ba || T ? "PrestoMobile" : "Presto", v = yd) : kb ? ((U = vb(R, "Trident/") + 4) && U !== aa && (K = "IEHost", N = U), 10 <= aa && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (K = "ModernIE", N = aa), ob || ba || T || Sc ? r = "TridentMobile" : Tc && 5 <= aa ? (r = "Tasman", K = "MacIE", N = aa) : (r = "Trident", Tc && (K = "MacIE", N = aa)), v = aa) : Yb ? (r = qb ? "EdgeMobile" : "EdgeHTML", v = l(R, "Edge/")) : Zb ? (r = "Goanna", 
  v = Zb) : Ja ? (r = V ? "Fennec" : "Gecko", v = ka || zd) : Sa ? (r = "Samsung", v = Sa, va && (ja = !0)) : (B = Rc || l(c, "NetFront/")) ? (r = "NetFront", v = B) : (B = l(c, "iCab")) ? (r = "iCab", v = B) : (B = nc(l(c, "Opera Mini/"), l(c, "Opera Mobi/")) || Hc && Ba) ? (r = "OperaMini", v = B, h || (g(c, "iPhone") ? oa = "iPhone" : g(c, "iPad") ? oa = "iPad" : g(c, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Ub ? (r = "UCWEB", v = vd) : Cd ? (r = "KHTML", v = Pb) : ia && Oc ? (r = "AOSP", 
  v = S, va && (ja = !0)) : lb || Jc || Kc ? (r = V ? "ChromiumMobile" : "Chromium", v = Ra, va && (ja = !0)) : ia && ac ? (r = "ChromeWebView", v = 5 > X(S) ? S : Ra, va && (ja = !0)) : ia && (Ba || va) ? (r = "AOSP", v = S, va && (ja = !0)) : Ra ? (r = V ? "ChromiumMobile" : "Chromium", v = Ra) : na && (r = "WebKit", v = na));
  h && (t.PLATFORM = h, f ? (t.PLATFORM_VERSION = oc(f), t[h] = f === f + "" ? X(f) : f) : t[h] = !0);
  r && (t.ENGINE = r, v ? (t.ENGINE_VERSION = oc(v), t[r] = v === v + "" ? X(v) : v) : t[r] = !0, K || (K = r, N = v));
  if (ja || Xb) {
    t.PC_MODE = !0;
  }
  var Za = hd, Va = [], uc = !!F.getElementsByTagName, L = F.body, wa = L.style, A = t.Trident || t.TridentMobile, Wa = t.Tasman, Uc = t.EdgeHTML || t.EdgeMobile, dc = t.Presto || t.PrestoMobile, ec = t.Gecko, fc = t.Goanna, eb = t.WebKit, jb = t.SafariMobile || t.iOSWebView, Jd = t.OperaMini && t.UCWEB;
  A || Wa || (new tb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Kd = 5.5 > A, Vc = F.scripts, Ld = (Wa ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", Wc = 0 === location.href.indexOf("https");
  var Ka = Vc[Vc.length - 1].src.split("/");
  --Ka.length;
  var Md = Ka.join("/");
  0 <= "http: https:".indexOf(Ka[0]) && Ka.splice(0, 3);
  Ka = Ka.join("/");
  var sa = function(a) {
    return void 0 !== a;
  };
  var la = Array.prototype;
  la.pop || (la.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  la.push || (la.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  la.shift || (la.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  la.splice || (la.splice = function(a, b) {
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
  la.indexOf || (la.indexOf = function(a, b) {
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
  var Ya = [], Nd = 0, Ea;
  if (5 > A || Wa) {
    y._wdb_onlooptimer = Xa, Xa = "_wdb_onlooptimer()";
  }
  var Xc = function(a) {
    Ya.length || (Ea = setInterval(Xa, 999));
    Ya.push({f:a, g:++Nd});
  };
  Va.push(function() {
    6.1 > jb && Yc(jd);
    rb(pc);
  });
  var ma = [], Zc = 0, ya;
  if (5 > A || Wa) {
    y._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  var J = function(a, b) {
    ma.length || (ya = ub(La, 64));
    ma.push({f:a, p:b, g:++Zc, t:new xa - 0 + 64});
    return Zc;
  };
  var $c = function(a) {
    for (var b = ma.length, d; d = ma[--b];) {
      if (d.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
  };
  Va.push(function() {
    6.1 > jb && Yc(kd);
    rb(qc);
  });
  var Ma = [], sc, yb = 0, Da = y.matchMedia, Fa;
  Ma.push(function() {
    Fa = ea(L, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var ad = [], xb = y.onload, bd = y.onunload;
  onload = wb;
  onunload = function(a) {
    var b;
    bd && (b = bd(a));
    ca(ad, a);
    onunload = Za;
    return b;
  };
  var sb = function(a) {
    Ma.push(a);
  };
  var rb = function(a) {
    ad.push(a);
  };
  var tc = [];
  sb(function() {
    rc();
    Xc(rc);
  });
  var gc = function(a) {
    tc.push(a);
  };
  var Oa = [], Na, zb, Ab;
  10 <= A || Uc ? (Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Na = zb = a.matches;
    ca(Oa, $a());
  }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Na = Ab = a.matches;
    ca(Oa, $a());
  }), Da("(-ms-high-contrast:active)").addListener(function(a) {
    Na = a.matches;
    ca(Oa, $a());
  }), Ga = null) : 10 > A || (t.Win32 || t.Win64) && (44 <= ec || fc) ? sb(function() {
    Fa.style.color = "#123456";
    Fa.style.backgroundColor = "#123456";
    60 > ec || fc ? Ga() : Ga() && Xc(Ga);
    Ga = null;
  }) : Ga = null;
  var Od = [];
  Da && Da("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Od, a.matches);
  });
  var hc = [];
  y.onbeforeprint ? (onbeforeprint = function() {
    ca(hc, !0);
  }, onafterprint = function() {
    ca(hc, !1);
  }, rb(function() {
    onbeforeprint = onafterprint = Za;
  })) : Da && Da("print").addListener(function(a) {
    ca(hc, a.matches);
  });
  var cd = [], ic = y.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    wb || ca(cd);
    return b;
  };
  rb(function() {
    onscroll = ic = Za;
  });
  var Yc = function(a) {
    cd.push(a);
  };
  var dd = ab("html")[0];
  var Pa = ab("head")[0];
  var bb;
  Ma.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var C = k.length, m, n, z, I, q; m = k[--C];) {
        if (n = m.nodeType, 8 === n) {
          b && da(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Kd ? (z = m.sheet || m.styleSheet) && (I = 10 <= A ? z.cssRules : z.rules || z.cssRules) && !I[0] : (new tb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  da(m);
                  break;
                }
              case "LINK":
                uc && !Pa.contains(m) && e.push(m);
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
                if (vc(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (vc(m, "skip-cleanup")) {
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
        z = e.pop(), Pa.appendChild(z);
      }
    }
    var b = !(8 > dc || 5 > A || Wa), d = ["og:", "twitter:", "fb:"], e = [];
    a(dd);
  });
  var Cb = void 0;
  var zc = {}, jc, Qa, ha, Pd = sa(wa.transform) ? "transform" : sa(wa["-o-transform"]) ? "-o-transform" : sa(wa["-ms-transform"]) ? "-ms-transform" : sa(wa["-moz-transform"]) ? "-moz-transform" : sa(wa["-webkit-transform"]) ? "-webkit-transform" : "";
  ha || gc(function(a) {
    a && !sa(ha) && (ha = 1.8 <= ec || fc || 8 <= A || Uc || 530 <= eb || 3.2 <= jb, ha || (a = ea(L, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ha = 6 <= a.offsetWidth, da(a)));
  });
  var db;
  9 > A && sb(function(a) {
    a = ea(L, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    jc = 1 < a.offsetHeight;
    a.style.cssText = "";
    da(a);
  });
  var ed = Wc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var nd = function() {
    function a() {
      k || (d.complete ? (k = !0, d.width || J(b, !1)) : e = J(a));
    }
    var b = Bc;
    if (ed) {
      var d = new Image, e, k;
      d.onerror = function() {
        (!A || 11 === A || 11 === t.IEHost) && d.width || k || (k = !0, e && $c(e), e = J(b, !1));
      };
      d.onload = function() {
        k = !0;
        e && $c(e);
        dc && !d.complete ? e = J(b, !1) : (Qa = !0, J(b, !0));
      };
      d.src = ed;
      8 > dc && d.complete ? (Qa = !0, J(b, !0)) : k || (e = J(a));
    } else {
      J(b, !1);
    }
  };
  var md = yc;
  for (t.IEHost && 5.5 > A && sb(function() {
    ea(Pa, "link", {href:Md + "/" + Ld, rel:"stylesheet", type:"text/css"});
  }); Va.length;) {
    Va.shift()();
  }
  Va = null;
  var fd = fd || {}, W = String.fromCharCode, H = Wc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", W(960), ")", "(", W(234), W(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", W(9824), "\u2190", W(9829), W(9830), W(9827), W(956), "\u03a9", "\u2193", "\u2192", "%", W(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", W(9619)];
  Oa.push(function(a) {
    cb("jsHcm");
    cb("jsHcmWob");
    cb("jsHcmBow");
    if (a) {
      switch((Pd || 9 === A || 5.5 <= A && 9 > A && jc) && ra(L, "jsCanRotate"), a) {
        case 1:
          ra(L, "jsHcm");
          break;
        case 2:
          ra(L, "jsHcmWob");
          break;
        case 3:
          ra(L, "jsHcmBow");
      }
    } else {
      cb("jsCanRotate");
    }
  });
  var Hb = [], Gb, Ib, gd;
  gc(function(a) {
    function b(x) {
      var p = x.getAttribute("pbtip") || "", u = p.charAt(0), G = "_" === u;
      p = G ? p.charAt(2) : u;
      u = G ? "Btm" : "";
      var Q = x.getAttribute("title") || "";
      ra(x, "pbTipPos" + p.toUpperCase());
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
          Z = u, 3 === Z.length && (Z = Z.substr(0, 2)), Z = Aa[parseInt(Z, 16)] || "~";
        }
        Q = Q.split(" ")[0];
        G = G.split(" ")[0];
        G = 10 - X(G);
        p ? (p = {className:["pbChr" + u + " pbAlp" + G + " pbCsr" + Q]}, bb = 1, z = ea(x, "b", p, 0, Z), e(x), e(z)) : e(x);
      }
    }
    function e(x) {
      Y || C || Ha(x, "pbChrCS") && Hb.push(x);
    }
    if (a && !gd) {
      gd = !0;
      var k = 6 > A ? 1 : 0;
      a = ab("SAMP");
      var C = 9 > A, m = 5 <= A && 6 > A, n, z, I, q;
      jc && ra(L, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== wa.opacity || void 0 !== wa["-moz-opacity"] || void 0 !== wa["-khtml-opacity"], M = !Y && !C && !0, P = !ha || M || void 0;
        for (I = -1; n = a[++I];) {
          if (Ha(n.parentElement || n.parentNode, "pbLCD")) {
            var ta = n.children;
            for (n = ta.length; n;) {
              var O = ta[--n];
              switch(O.tagName.toUpperCase()) {
                case "A":
                  if (P) {
                    for (ha || b(O), q = O.children.length; q;) {
                      d(O.children[--q]);
                    }
                  }
                  Jd ? O.setAttribute("href", "javascript:void(0)") : O.onclick = ld;
                  break;
                case "B":
                  P && d(O);
              }
            }
          }
        }
        Hb.length ? (setInterval(Ac, 500), ha ? Ia([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ia([".pbChrCS", "background-position:0 -51px"])) : Ac = null;
        M && (ha ? Ia([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ia([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > eb && (dd.onclick = function(a) {
    if (Ib) {
      return Ib = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new tb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Nb = Aa[7], Cc = Aa[30], pd = Aa[113], gb = W(8337) + W(8331), Ob = W(160), td = W(8194), rd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), sd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), qd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Cc + Aa[31]).split(""), za = 
  [], Lb = [], hb, Mb;
  gc(function(a) {
    if (a && !Mb) {
      var b = F.all || ab("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ha(d, "pbList") ? ib(d) : Ha(d, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(d.tagName.toUpperCase()) && ib(d, !0);
      }
      za.length && fb();
      Mb = !0;
    }
  });
  fd.prettify = ib;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

