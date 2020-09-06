PB100 = {};
(function(nd, t, q, od, F, fa, jc, P, kc, lc, ee, yb, pd, ra, fe) {
  function Xa(a, b) {
    var d = P(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function mc(a) {
    return f(a, "Linux armv") || f(a, "Linux aarch") || f(a, "Linux i686") || f(a, "Linux x86_64");
  }
  function k(a, b) {
    var d = "", e = -1, m;
    if (a = a.split(b)[1]) {
      for (; m = a.charCodeAt(++e);) {
        if (48 <= m && 57 >= m || 46 === m) {
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
  function nc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var m = P(a[d]), B = P(b[d]);
      if (m !== B) {
        return m > B ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function oc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], m; b < d; ++b) {
      0 > nc(e, m = a[b]) && (e = m);
    }
    return e;
  }
  function pc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function na(a) {
    return void 0 !== a;
  }
  function Ya() {
    for (var a, b = 0; b < Za.length; ++b) {
      a = Za[b], a.f();
    }
  }
  function qd() {
    Ca && (qc(), Ca = setInterval(Ya, rc));
  }
  function qc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ja() {
    for (var a, b = 0, d = new ra - 0; b < ka.length;) {
      d < ka[0].t ? ++b : (a = ka.splice(b, 1)[0], a.f(a.p));
    }
    sa = ka.length ? yb(Ja, Ka) : 0;
  }
  function rd() {
    sa && (sc(), sa = yb(Ja, Ka));
  }
  function sc() {
    sa && (sa = pd(sa));
  }
  function ta(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Da(a, b) {
    tc && !La.length && G(uc);
    La.push(a, b);
  }
  function uc() {
    var a = La, b;
    for (La = []; b = a.shift();) {
      ta(b, a.shift());
    }
  }
  function zb(a) {
    var b;
    Ab && (b = Ab(a));
    ta($a, a);
    onload = Ma;
    $a = zb = Ab = onload = null;
    return b;
  }
  function vc() {
    var a = 9 === Ea.offsetWidth;
    Bb !== a && Da(wc, Bb = a);
  }
  function ab() {
    return Cb = Na ? Db ? 2 : Eb ? 3 : 1 : 0;
  }
  function bb(a) {
    var b = b || F;
    return sd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function va(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Fb(a, b) {
    var d = F.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function da(a, b, d, e, m) {
    function B(D, H) {
      for (var u in H) {
        switch(u) {
          case "class":
          case "className":
            oa(D, H[u]);
            break;
          default:
            D.setAttribute(u, H[u]);
        }
      }
    }
    function v(D, H) {
      var u = D.style, T;
      for (T in H) {
        u[T] = H[T];
      }
    }
    if ("style" === b) {
      var y = !0;
      b = Fb("div", 'a<style type="text/css">' + m + "</style>").lastChild;
    } else {
      b = Fb(b);
    }
    cb ? (2 === cb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    cb = 0;
    d && B(b, d);
    e && v(b, e);
    m && !y && b.appendChild(F.createTextNode(m));
    return b;
  }
  function Fa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function oa(a, b) {
    var d;
    if (!Fa(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function db(a) {
    if (Fa(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function xc(a) {
    a = da(Gb, "style", {type:"text/css", media:"all"}, 0, a);
    Hb = a.sheet || a.styleSheet;
  }
  function Ga(a) {
    for (var b = Hb, d, e, m = "", B; a.length;) {
      d = a.shift(), e = a.shift(), B = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(B, b.cssRules.length) : m += B;
    }
    m && xc(m);
  }
  function yc(a) {
    function b(e) {
      Ib = e;
      d.onload = d.onerror = Ma;
      G(a, e);
    }
    if (na(Ib)) {
      G(a, Ib);
    } else {
      if (8 > z) {
        G(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          b(!1);
        };
        d.onload = function() {
          b(1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function zc(a, b, d, e, m, B, v) {
    function y() {
      F.fonts.load('1.6em "' + b + '"').then(function() {
        T(b) ? G(a, wa) : H(!0);
      }, function() {
        yc(Q);
      });
    }
    function D(A) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (n = new ra - 0, !1) : A < new ra - n;
    }
    function H(A) {
      A && (n = new ra - 0);
      T(b) ? a(wa) : D(Y) ? w ? a(0) : 9 > z ? G(a, 0) : yc(Q) : G(H);
    }
    function u() {
      var A = -1, I;
      u = null;
      K = ["sans-serif", "serif"];
      l = da(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Oa = {}; I = K[++A];) {
        l.style.fontFamily = I, Oa[I] = l.offsetWidth;
      }
    }
    function T(A) {
      var I = 0, Z = -1, Jb, Ac = 0;
      u && u();
      for (M.appendChild(l); Jb = K[++Z];) {
        if (l.style.fontFamily = '"' + A + '",' + Jb, l.offsetWidth !== Oa[Jb]) {
          I = 1;
          break;
        }
      }
      I && m && (l.innerHTML = m, A = l.offsetWidth, l.innerHTML = B, Ac = A === l.offsetWidth ? 1 : 0, l.innerHTML = "mmmmmmmmmmlli");
      va(l);
      return wa = I + Ac;
    }
    function Q(A) {
      (w = A) ? N(!0) : a(0);
    }
    function N(A) {
      A && (n = new ra - 0);
      for (I in d) {
        if (T(I)) {
          J = da(M, "div", {"aria-hidden":"true", className:e, id:e});
          A = d[I];
          var I = Hb, Z = Bc.all || 0;
          I ? I.addImport ? I.addImport(A, Z) : I.insertRule && I.insertRule('@import "' + A + '"', Z) : xc('@import "' + A + '"');
          Bc.all = ++Z;
          G(xa, !0);
        } else {
          D(100) ? (delete d[I], G(N, !0)) : G(N);
        }
        return;
      }
      a(0);
    }
    function xa(A) {
      A && (n = new ra - 0);
      1 < J.offsetWidth ? (va(J), Y = 100, G(H, !0)) : D(Y) ? (va(J), a(0)) : G(xa);
    }
    var Y = v || 5000, n, w, l, J, K, Oa, wa;
    (function() {
      var A;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > z) {
        return !0;
      }
      var I = da(Gb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), Z = (Z = I.sheet || I.styleSheet) ? (A = 10 <= z ? Z.cssRules : Z.rules || Z.cssRules) && (A = A[0]) ? A.cssText : Z.cssText || "" : "";
      A = 0 < Z.indexOf("src") && 0 === Z.indexOf("@font-face");
      va(I);
      return A;
    })() ? !F.fonts || 603 > eb ? H(!0) : y() : G(a, 0);
  }
  function Cc() {
    Kb = !Kb;
    for (var a = -1, b; b = Lb[++a];) {
      b.style.visibility = Kb ? "" : "hidden";
    }
  }
  function td(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Mb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function fb() {
    fb = null;
    ud(Nb, "PB-100", {"PB-100_canTTF":E + "pbFont/ttf.css", "PB-100_canWOFF":E + "pbFont/woff.css", "PB-100_canEOT":E + "pbFont/eot.css", "PB-100_canSVG":E + "pbFont/svg.css"}, "pbFont-testCssReady", gb, "i", 5000);
  }
  function Nb(a) {
    (hb = a) ? Ob() : Pa ? Dc(!0) : na(Pa) ? Ob() : vd(Dc);
  }
  function Dc(a) {
    a && (oa(M, "pbList-noWebFont"), ea ? Ga([".pbList font:after", "content:url(" + E + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ga([".pbList font", "background-image:url(" + E + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Ob();
  }
  function Ob() {
    for (Nb = zc = null; pa.length;) {
      ib(pa.shift(), pa.shift());
    }
  }
  function ib(a, b) {
    function d(B) {
      B = B.childNodes;
      for (var v = -1, y; y = B[++v];) {
        switch(y.nodeType) {
          case 1:
            d(y);
            break;
          case 3:
            y.data && y.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(y);
        }
      }
    }
    var e = [];
    if (Nb) {
      -1 === pa.indexOf(a) && (pa.push(a, b), Pb && fb && fb());
    } else {
      var m = pa.indexOf(a);
      0 <= m && pa.splice(m, 2);
      for (d(a); a = e.shift();) {
        m = a.data, 2 !== hb && (m = m.split(gb).join(Ec)), b ? a.data = m : wd(m.split("\r").join("").split("&yen;").join(xd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Qb).split("&amp;").join("&"), a);
      }
    }
  }
  function wd(a, b) {
    function d(w, l) {
      for (var J = ""; l;) {
        l & 1 && (J += w), l >>= 1, w += w;
      }
      return J;
    }
    function e(w, l, J) {
      for (var K, Oa = -1, wa, A; K = l[++Oa];) {
        for (; 0 <= (wa = w.indexOf(K));) {
          A = K.length, w = w.substr(0, wa) + d(J, A) + w.substr(wa + A);
        }
      }
      return w;
    }
    function m(w) {
      var l = P(w), J = "" + l;
      return 0 < l && l === l | 0 && (l = w.indexOf(J) + J.length, l <= w.length) ? l : 0;
    }
    var B = " area line str cmd fnc syb".split(" "), v = [], y = "", D = -1, H, u;
    if (function(w) {
      var l = w.indexOf("P");
      if (-1 === l) {
        return !1;
      }
      l = P(w.charAt(l + 1));
      return 0 <= l && 9 >= l;
    }(a)) {
      y = d("+", a.length);
    } else {
      for (0 <= (D = m(a)) && (y = d("|", D), --D); u = a.charAt(++D);) {
        u === Qb || H ? (y += "~", u === Qb && (H = !H)) : y += u;
      }
      y = e(y, yd, "^");
      y = e(y, zd, "{");
      y = e(y, Ad, "}");
    }
    D = 0;
    for (H = a.length; D < H; ++D) {
      u = a.charAt(D);
      var T = u === Rb, Q = " " === u;
      u = T ? " " : u;
      var N = y.charAt(D), xa = Y, Y = "|" === N;
      N = B["+|~{}^".indexOf(N) + 1];
      if ("\n" !== u) {
        if (hb || !Pa) {
          8 > z && Q && (u = D === H - 1 ? Rb : Bd), 2 === hb && a.substr(D, 2) === gb && (u = gb, ++D), Q = Q && "str" === N ? ' class="pbList-strsp"' : T ? "" : !Q && N ? ' class="pbList-' + N + '"' : "";
        } else {
          var n = ya.indexOf(u);
          n = -1 === n ? "" : ya.indexOf(u).toString(16).toUpperCase();
          n = (n = 1 === n.length ? "0" + n : n) ? "pbChr" + n : "";
          Q = Q && "str" === N ? ' class="pbList-strsp"' : Q || !n ? "" : N ? ' class="' + (n ? n + " " : "") + "pbList-" + N + '"' : ' class="' + n + '"';
        }
        xa && T && (eb || jb) && (u = Rb);
        v.push("<font" + Q + ">" + u + "</font>");
      } else {
        v.push(u);
      }
    }
    v = v.join("");
    if (1 === b.nodeType) {
      b.innerHTML = v;
    } else {
      for (B = Fb("font", v); v = B.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(v, b);
      }
      va(b);
    }
  }
  var p, r, c = fa.userAgent, U = fa.appVersion, Sb = P(U) | 0, C = fa.platform, Tb = F.documentElement, Fc = Tb && Tb.style, Ub = F.documentMode, Vb = jc.width, Wb = jc.height, Gc = q.HTMLAudioElement, Hc = q.performance, Ic = q.Int8Array, Cd = void 0 !== q.ontouchstart, za = k(U, "Version/") || k(c, "Version/"), Ha = void 0 !== Fc.MozAppearance, Jc = q.operamini, Xb = f(c, "UCWEB"), Dd = Xb && k(c, " U2/"), Ed = Xb && k(c, "; wds "), Yb = k(c.split("_").join("."), "; iPh OS "), Fd = k(c, "; Adr "), 
  Kc = f(U, "YJApp-ANDROID"), ca = f(C, "Android") || Ha && f(U, "Android") || Kc, R = k(C, "Android ") || k(U, "Android ") || k(c, "Android ") || Fd, Zb = f(C, "Linux"), Lc = "MacIntel" === C && void 0 !== fa.standalone, Aa = !Jc && q.opera, Gd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : oc(k(c, "Opera "), za, "" + Sb)), Mc = q.opr, kb = !Aa && (F.all || Ub), aa = kb && (Ub ? Ub : q.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  q.attachEvent ? 5 : 4), $b = !kb && Tb.msContentZoomFactor, lb = !$b && q.chrome, ac = Ha && k(c, "Goanna/"), ha = !ac && Ha && k(c, "rv:"), Hd = k(c, "Firefox/"), Id = k(c, "Opera/"), Jd = q.FNRBrowser, la = Xa(c, "AppleWebKit/"), Qa = k(c, "Chrome/"), Nc = k(c, "OPR/"), Kd = k(U, "KHTML/"), Ld = k(c.toLowerCase(), "iris"), Md = k(c, "Silk/"), Ra = Xa(c, "SamsungBrowser/"), Sa;
  if (Sa = !Ra) {
    a: {
      for (var Oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      mb, bc = Oc.length; mb = Oc[--bc];) {
        if (f(c, mb)) {
          Sa = 2 > P(za) ? za : 0.9;
          break a;
        }
      }
      var Pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (bc = Pc.length; mb = Pc[--bc];) {
        if (f(c, mb)) {
          Sa = za;
          break a;
        }
      }
      Sa = void 0;
    }
  }
  var Qc = Sa, Rc = lb && 534.3 >= la, Sc = mc(C), Nd = Sc && !f(c, C) && mc(c), Od = Cd && (la || Ha) && Nd || !R && Kc, Pd = !!q.ReactNativeWebView, nb;
  if (nb = Sc) {
    a: {
      var Tc = void 0;
      for (Tc in q) {
        if (0 === Tc.indexOf("SlexAPI_")) {
          nb = !0;
          break a;
        }
      }
      nb = void 0;
    }
  }
  var Qd = nb, Uc = q.puffinDevice, ob = Uc && Uc.clientInfo, Ta = ob && "iOS" === ob.os && ob.osVersion, Rd = Ta && ob.model, cc = !aa && F.registerElement, Sd = !aa && F.execCommand, Td = Zb && cc && "11.0.696.34" === Qa, Ud = q._firefoxTV_playbackStateObserverJava, Vd = Xa(c, "diordnA "), pb, x;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var g = Id;
    } else {
      if ("New Nintendo 3DS" === C || f(c, "iPhone OS 6_0") && 320 === Vb && 240 === Wb) {
        h = "New3DS", g = k(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === C) {
          h = "N3DS", g = k(c, "Version/"), la = 535;
        } else {
          if ("Nintendo Swicth" === C) {
            h = "Swicth", g = k(U, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === C) {
              h = "WiiU", g = k(U, "NintendoBrowser/"), la = k(U, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === C) {
                h = "Wii";
                g = k(c, "Wii; U; ; ");
                var L = h;
                var O = g;
              } else {
                if (x = k(c, "PlayStation Vita ")) {
                  h = "PSVita", g = x, L = h, O = x;
                } else {
                  if (x = k(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = x;
                    var Vc = 3.3;
                    L = h;
                    O = x;
                  } else {
                    if (x = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = x, L = h, O = x, 0 > nc("4.10", x) && (p = "Sony", r = x);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Sb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Vc = 3.4;
                            L = h;
                            O = 2;
                            var qb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Yb || Ta || Lc) {
                              if (Ta) {
                                switch(g = Ta, Rd.substr(0, 4)) {
                                  case "iPho":
                                    var ma = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    ma = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    ma = "iPod";
                                    var Wc = !0;
                                }
                              } else {
                                Yb ? g = Yb : g = k(U.split("_").join("."), "OS ");
                                if (!g || Jd) {
                                  g = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : kc.isNaN ? 9.2 : q.SharedWorker ? Hc && Hc.now ? 8.0 : 8.4 : Sd ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Ic ? 4.3 : Gc ? 4.1 : 3.2;
                                }
                                var W = Vb === 1.5 * Wb || 1.5 * Vb === Wb;
                                0 === C.indexOf("iPhone") ? (ma = "iPhone", ba = !0) : 0 === C.indexOf("iPad") || Lc ? (ma = "iPad", V = !0) : 0 === C.indexOf("iPod") && (ma = "iPod", Wc = !0);
                              }
                              var dc;
                              if (dc = !Ta) {
                                var ec;
                                if (!(ec = fa.standalone)) {
                                  var rb;
                                  if (rb = V || 12 > g) {
                                    a: {
                                      for (var Wd in F) {
                                        if ("webkitFullscreenEnabled" === Wd) {
                                          rb = !0;
                                          break a;
                                        }
                                      }
                                      rb = void 0;
                                    }
                                  }
                                  ec = rb;
                                }
                                dc = ec || 11 <= g && 13 > g && fa.mediaDevices;
                              }
                              dc ? (p = "SafariMobile", L = "Safari", O = g) : p = "iOSWebView";
                              h = "iOS";
                              r = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", p = "AOSP", r = 2.2, L = p, O = r, ca = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", r = 2.2, L = p, O = r;
                                } else {
                                  if (x = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = x;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ha ? "1.0.1" : 19 > ha ? 1.1 : 27 > ha ? 1.2 : 29 > ha ? 1.3 : 31 > ha ? 1.4 : 33 > ha ? 2.0 : 35 > ha ? 2.1 : 38 > ha ? 2.2 : 45 > ha ? 2.5 : 2.6, f(c, "Mobile") ? ba = !0 : f(c, "Tablet") && (V = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), L = h, O = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (x = k(c, "Tizen ")) {
                                          h = "Tizen", g = x, L = "Samsung", O = Ra, p = L, r = O, ba = !0;
                                        } else {
                                          if (x = k(c, "Windows Phone ") || k(U, "Windows Phone OS ") || Ed) {
                                            var sb = !0;
                                            g = x;
                                            ba = !0;
                                          } else {
                                            if ($b && "ARM" === C) {
                                              sb = !0, g = 10, ba = !0;
                                            } else {
                                              if (kb && f(U, "ZuneWP")) {
                                                sb = !0, g = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
                                              } else {
                                                if (f(c, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (f(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (f(c, "KFMUWI")) {
                                                      var ia = !0;
                                                      g = 6.3;
                                                      var S = V = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        ia = !0, g = 6, S = V = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          ia = !0, g = 5, S = V = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            ia = !0, g = 5, S = V = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              ia = !0, g = 5 <= P(R) ? 5 : 4, S = V = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                ia = !0, g = 3, S = V = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  ia = !0, g = 2, S = V = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    ia = !0, g = 1, S = V = !0;
                                                                  } else {
                                                                    if (x = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = x, p = "AOSP", r = 2.2, L = p, O = r;
                                                                    } else {
                                                                      if (Ud) {
                                                                        ia = !0, g = R || Vd, S = !0;
                                                                      } else {
                                                                        if (f(c, "AmazonWebAppPlatform") || f(c, "; AFT")) {
                                                                          ia = !0, g = R, S = !0;
                                                                        } else {
                                                                          if (f(c, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(c, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === c.indexOf("Windows Mobile;") || Ld) {
                                                                                h = "WindowsMobile", qb = !0;
                                                                              } else {
                                                                                if ("WinCE" === C) {
                                                                                  h = C, qb = !0;
                                                                                } else {
                                                                                  if ("Win16" === C || "Win32" === C || "Win64" === C) {
                                                                                    h = C, g = k(c, "Windows NT ") || k(c, "Windows ");
                                                                                  } else {
                                                                                    if (0 === C.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === C ? "MacPPC" : C;
                                                                                      if (x = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = x;
                                                                                      }
                                                                                      var Xc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = za, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ca && Ha ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= P(R) ? W = R : W = {min:2.2}, g = W) : ca && Aa ? (R ? W = R : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ba = !0) : R ? (g = 
                                                                                      R, ca = !0) : Zb && Od || Pd || Qd ? (pb = !0, Ra ? W = {min:4.4} : lb && !Rc || Mc || Nc ? W = {min:4} : (W = R = void 0 !== Fc.touchAction ? {min:5} : cc ? 4.4 : Ic ? fa.connection ? q.searchBoxJavaBridge_ || lb ? kc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= la ? 3 : 533 <= la ? Gc ? 2.3 : 2.2 : 530 <= la ? 2.0 : 1.5, Qc && (p = "Samsung", r = Qc)), g = W, ca = !0) : Td ? (g = {min:5}, pb = ca = !0) : Zb && (f(c, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (x = k(c, "Mint/")) ? (h = "Mint", g = x) : (x = k(c, "Fedora/")) ? (h = "Fedora", g = x) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ia || ca && pb && Md ? h = "FireOS" : ca && (h = h || "Android");
  sb && (h = "WindowsPhone");
  p || (S = S || ca, Aa ? (p = S || qb || ba || V ? "PrestoMobile" : "Presto", r = Gd) : kb ? ((W = Xa(U, "Trident/") + 4) && W !== aa && (L = "IEHost", O = W), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), qb || ba || V || Wc ? p = "TridentMobile" : Xc && 5 <= aa ? (p = "Tasman", L = "MacIE", O = aa) : (p = "Trident", Xc && (L = "MacIE", O = aa)), r = aa) : $b ? (p = sb ? "EdgeMobile" : "EdgeHTML", r = k(U, "Edge/")) : ac ? (p = "Goanna", 
  r = ac) : Ha ? (p = S ? "Fennec" : "Gecko", r = ha || Hd) : Ra ? (p = "Samsung", r = Ra) : (x = Vc || k(c, "NetFront/")) ? (p = "NetFront", r = x) : (x = k(c, "iCab")) ? (p = "iCab", r = x) : (x = oc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Jc && za) ? (p = "OperaMini", r = x, h || (f(c, "iPhone") ? ma = "iPhone" : f(c, "iPad") ? ma = "iPad" : f(c, "iPod") && (ma = "iPod"), ma && (h = "iOS"))) : Xb ? (p = "UCWEB", r = Dd) : Kd ? (p = "KHTML", r = Sb) : ca && Rc ? (p = "AOSP", r = R) : lb || 
  Mc || Nc ? (p = S ? "ChromiumMobile" : "Chromium", r = Qa) : ca && cc ? (p = "ChromeWebView", r = 5 > P(R) ? R : Qa) : ca && (za || pb) ? (p = "AOSP", r = R) : Qa ? (p = S ? "ChromiumMobile" : "Chromium", r = Qa) : la && (p = "WebKit", r = la));
  h && (t.PLATFORM = h, g ? (t.PLATFORM_VERSION = pc(g), t[h] = g === g + "" ? P(g) : g) : t[h] = !0);
  p && (t.ENGINE = p, r ? (t.ENGINE_VERSION = pc(r), t[p] = r === r + "" ? P(r) : r) : t[p] = !0, L || (L = p, O = r));
  var Ma = od, Ua = [], sd = !!F.getElementsByTagName, M = F.body, qa = M.style, z = t.Trident || t.TridentMobile, tb = t.Tasman, Yc = t.EdgeHTML || t.EdgeMobile, Zc = t.Presto || t.PrestoMobile, ub = t.Gecko, vb = t.Goanna, eb = t.WebKit, jb = t.SafariMobile || t.iOSWebView, Xd = t.OperaMini && t.UCWEB, fc = t.Win32 || t.Win64, Yd = P(fa.userAgent.split("Edg/")[1]), $c = P(fa.appVersion.split("Trident/")[1]) + 4;
  z || tb || (new lc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ad = F.scripts, Zd = (tb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : "modern") + ".css", bd = 0 === location.href.indexOf("https"), $a = [], Bb, Cb = 0, gc, Pa, ea, $d = na(qa.transform) ? "transform" : na(qa["-o-transform"]) ? "-o-transform" : na(qa["-ms-transform"]) ? "-ms-transform" : na(qa["-moz-transform"]) ? "-moz-transform" : na(qa["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ia = ad[ad.length - 1].src.split("/");
  --Ia.length;
  var ae = Ia.join("/");
  0 <= "http: https:".indexOf(Ia[0]) && Ia.splice(0, 3);
  Ia = Ia.join("/");
  var ja = Array.prototype;
  ja.pop || (ja.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ja.push || (ja.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ja.shift || (ja.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ja.splice || (ja.splice = function(a, b) {
    var d = arguments, e = d.length - 2 - b, m = this.slice(a, a + b), B;
    if (0 < e) {
      var v = this.length - 1;
      for (B = a + b; v >= B; --v) {
        this[v + e] = this[v];
      }
    } else {
      if (0 > e) {
        v = a + b;
        for (B = this.length; v < B; ++v) {
          this[v + e] = this[v];
        }
        this.length += e;
      }
    }
    v = 2;
    for (B = d.length; v < B; ++v) {
      this[v - 2 + a] = d[v];
    }
    return m;
  });
  ja.indexOf || (ja.indexOf = function(a, b) {
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
  var dd = function(a) {
    Za.length || (Ca = setInterval(Ya, rc));
    Za.push({f:a, g:++cd});
    return cd;
  };
  var Za = [], rc = 999, cd = 0, Ca;
  if (5 > z || tb) {
    q._wdb_onlooptimer = Ya, Ya = "_wdb_onlooptimer()";
  }
  Ua.push(function() {
    6.1 > jb && ed(qd);
    wb(qc);
  });
  var G = function(a, b, d) {
    ka.length || (sa = yb(Ja, Ka));
    ka.push({f:a, p:b, g:++fd, t:new ra - 0 + (Ka < d ? d : Ka)});
    return fd;
  };
  var gd = function(a) {
    for (var b = ka.length, d; d = ka[--b];) {
      if (d.g === a) {
        ka.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ka = [], Ka = 64, fd = 0, sa;
  if (5 > z || tb) {
    q._wdb_ontimer = Ja, Ja = "_wdb_ontimer()";
  }
  Ua.push(function() {
    6.1 > jb && ed(rd);
    wb(sc);
  });
  var Ba = q.matchMedia, La = [], tc, Ea;
  $a.push(function() {
    Ea = da(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Va(function() {
      tc = !0;
      La.length && G(uc);
    });
  });
  var Va = function(a) {
    $a.push(a);
  };
  var wb = function(a) {
    hd.push(a);
  };
  var hd = [], Ab = q.onload, id = q.onunload;
  onload = zb;
  onunload = function(a) {
    var b;
    id && (b = id(a));
    ta(hd, a);
    onunload = Ma;
    return b;
  };
  var jd = function(a) {
    wc.push(a);
  };
  var wc = [];
  Va(function() {
    vc();
    dd(vc);
  });
  var be = function(a) {
    Wa.push(a);
  };
  var Wa = [], Na, Eb, Db;
  if (10 <= z || Yc || fc && Yd) {
    Ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Na = Eb = a.matches;
      Da(Wa, ab());
    }), Ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Na = Db = a.matches;
      Da(Wa, ab());
    }), Ba("(-ms-high-contrast:active)").addListener(function(a) {
      Na = a.matches;
      Da(Wa, ab());
    });
  } else {
    if (10 > z || fc && (44 <= ub || vb)) {
      var xb = function() {
        function a(m) {
          return "#ffffff" === m || "rgb(255,255,255)" === m;
        }
        var b = F.defaultView, d = Cb, e = b ? b.getComputedStyle(Ea, null) : Ea.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Na = "#123456" !== b && "rgb(18,52,86)" !== b, Eb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Db = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== ab() && Da(Wa, Cb), !0;
        }
      };
      Va(function() {
        Ea.style.color = "#123456";
        Ea.style.backgroundColor = "#123456";
        60 > ub || vb ? xb() : xb() && dd(xb, 1000);
        xb = null;
      });
    }
  }
  var ce = [];
  Ba && Ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Da(ce, a.matches);
  });
  var hc = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    ta(hc, !0);
  }, onafterprint = function() {
    ta(hc, !1);
  }, wb(function() {
    onbeforeprint = onafterprint = Ma;
  })) : Ba && Ba("print").addListener(function(a) {
    ta(hc, a.matches);
  });
  var ed = function(a) {
    kd.push(a);
  };
  var kd = [], ic = q.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    zb || ta(kd);
    return b;
  };
  wb(function() {
    onscroll = ic = Ma;
  });
  var de = bb("html")[0];
  var Gb = bb("head")[0];
  var cb;
  var Hb = void 0;
  var Bc = {};
  Va(function() {
    if (Bb) {
      if (!na(ea) && (ea = 1.8 <= ub || vb || 8 <= z || Yc || 530 <= eb || 3.2 <= jb, !ea)) {
        var a = da(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth;
        va(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Ib;
  9 > z && Va(function(a) {
    a = da(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    va(a);
  });
  var vd = function(a) {
    function b() {
      m || (d.complete ? (m = !0, d.width || G(a, !1)) : e = G(b));
    }
    if (ld) {
      var d = new Image, e, m;
      d.onerror = function() {
        (!z || 11 === z || 11 === $c) && d.width || m || (m = !0, e && gd(e), e = G(a, !1));
      };
      d.onload = function() {
        m = !0;
        e && gd(e);
        Zc && !d.complete ? e = G(a, !1) : (Pa = !0, G(a, !0));
      };
      d.src = ld;
      8 > Zc && d.complete ? (Pa = !0, G(a, !0)) : m || (e = G(b));
    } else {
      G(a, !1);
    }
  };
  var ld = bd ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var ud = zc;
  for (11 === $c && 5.5 > z && da(Gb, "link", {href:ae + "/" + Zd, rel:"stylesheet", type:"text/css"}); Ua.length;) {
    Ua.shift()();
  }
  Ua = null;
  var X = String.fromCharCode, E = bd ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > z || fc && (44 <= ub || vb)) && be(function(a) {
    db("jsHcm");
    db("jsHcmWob");
    db("jsHcmBow");
    if (a) {
      switch(($d || 9 === z || 5.5 <= z && 9 > z && gc) && oa(M, "jsCanRotate"), a) {
        case 1:
          oa(M, "jsHcm");
          break;
        case 2:
          oa(M, "jsHcmWob");
          break;
        case 3:
          oa(M, "jsHcmBow");
      }
    } else {
      db("jsCanRotate");
    }
  });
  var Lb = [], Kb, Mb, md;
  jd(function(a) {
    function b(n) {
      var w = n.getAttribute("pbtip") || "", l = w.charAt(0), J = "_" === l;
      w = J ? w.charAt(2) : l;
      l = J ? "Btm" : "";
      var K = n.getAttribute("title") || "";
      oa(n, "pbTipPos" + w.toUpperCase());
      da(n, "div", {className:"pbTip" + l}, {width:K.length + m + "em"}, K);
      da(n, "div", {className:"pbTail" + l});
      v && J && (n.focus(), n.blur());
    }
    function d(n) {
      if (ea && Q) {
        e(n);
      } else {
        var w = n.getAttribute("pbGhst") || "", l = n.className, J = l.split("pbCsr")[1] || "";
        l = l.split("pbAlp")[1] || "";
        if ("CS" === w) {
          var K = "_";
        } else {
          K = w, 3 === K.length && (K = K.substr(0, 2)), K = ya[parseInt(K, 16)] || "~";
        }
        J = J.split(" ")[0];
        l = l.split(" ")[0];
        l = 10 - P(l);
        w ? (w = {className:["pbChr" + w + " pbAlp" + l + " pbCsr" + J]}, cb = 1, D = da(n, "b", w, 0, K), e(n), e(D)) : e(n);
      }
    }
    function e(n) {
      T || B || Fa(n, "pbChrCS") && Lb.push(n);
    }
    if (a && !md) {
      md = !0;
      var m = 6 > z ? 1 : 0;
      a = bb("SAMP");
      var B = 9 > z, v = 5 <= z && 6 > z, y, D, H, u;
      gc && oa(M, "pbLCD-AX");
      if (a.length) {
        var T = void 0 !== qa.opacity || void 0 !== qa["-moz-opacity"] || void 0 !== qa["-khtml-opacity"], Q = !T && !B && !0, N = !ea || Q || void 0;
        for (H = -1; y = a[++H];) {
          if (Fa(y.parentElement || y.parentNode, "pbLCD")) {
            var xa = y.children;
            for (y = xa.length; y;) {
              var Y = xa[--y];
              switch(Y.tagName.toUpperCase()) {
                case "A":
                  if (N) {
                    for (ea || b(Y), u = Y.children.length; u;) {
                      d(Y.children[--u]);
                    }
                  }
                  Xd ? Y.setAttribute("href", "javascript:void(0)") : Y.onclick = td;
                  break;
                case "B":
                  N && d(Y);
              }
            }
          }
        }
        Lb.length ? (setInterval(Cc, 500), ea ? Ga([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ga([".pbChrCS", "background-position:0 -51px"])) : Cc = null;
        Q && (ea ? Ga([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + E + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + E + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + E + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + E + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + E + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + E + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        E + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + E + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + E + "pbLCD/x3_a90.png)"]) : Ga([".pbAlp1", "background-image:url(" + E + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + E + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + E + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + E + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + E + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        E + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + E + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + E + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + E + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > eb && (de.onclick = function(a) {
    if (Mb) {
      return Mb = !1, a.preventDefault(), !1;
    }
  });
  6 === z && (new lc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Qb = ya[7], Ec = ya[30], xd = ya[113], gb = X(8337) + X(8331), Rb = X(160), Bd = X(8194), zd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Ad = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), yd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ec + ya[31]).split(""), pa = 
  [], hb, Pb;
  jd(function(a) {
    if (a && !Pb) {
      var b = F.all || bb("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Fa(d, "pbList") ? ib(d) : Fa(d, "pbFont") && ib(d, !0);
      }
      pa.length && fb();
      Pb = !0;
    }
  });
  nd.prettify = ib;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

