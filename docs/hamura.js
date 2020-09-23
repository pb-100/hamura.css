PB100 = {};
(function(kd, v, r, ld, F, fa, jc, P, kc, lc, ae, xb, md, ra, be) {
  function Wa(a, b) {
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
    var d = "", e = -1, l;
    if (a = a.split(b)[1]) {
      for (; l = a.charCodeAt(++e);) {
        if (48 <= l && 57 >= l || 46 === l) {
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
      var l = P(a[d]), n = P(b[d]);
      if (l !== n) {
        return l > n ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function oc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], l; b < d; ++b) {
      0 > nc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function pc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function na(a) {
    return void 0 !== a;
  }
  function Xa() {
    for (var a, b = 0; b < Ya.length; ++b) {
      a = Ya[b], a.f();
    }
  }
  function nd() {
    Ca && (qc(), Ca = setInterval(Xa, rc));
  }
  function qc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ia() {
    for (var a, b = 0, d = new ra - 0; b < ka.length;) {
      d < ka[0].t ? ++b : (a = ka.splice(b, 1)[0], a.f(a.p));
    }
    sa = ka.length ? xb(Ia, Ja) : 0;
  }
  function od() {
    sa && (sc(), sa = xb(Ia, Ja));
  }
  function sc() {
    sa && (sa = md(sa));
  }
  function ta(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Da(a, b) {
    tc && !Ka.length && G(uc);
    Ka.push(a, b);
  }
  function uc() {
    var a = Ka, b;
    for (Ka = []; b = a.shift();) {
      ta(b, a.shift());
    }
  }
  function yb(a) {
    var b;
    zb && (b = zb(a));
    ta(Za, a);
    onload = La;
    Za = yb = zb = onload = null;
    return b;
  }
  function vc() {
    var a = 9 === Ea.offsetWidth;
    Ab !== a && Da(wc, Ab = a);
  }
  function $a() {
    return Bb = Ma ? Cb ? 2 : Db ? 3 : 1 : 0;
  }
  function ab(a) {
    var b = b || F;
    return pd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function va(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Eb(a, b) {
    var d = F.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function da(a, b, d, e, l) {
    function n(E, H) {
      for (var w in H) {
        switch(w) {
          case "class":
          case "className":
            oa(E, H[w]);
            break;
          default:
            E.setAttribute(w, H[w]);
        }
      }
    }
    function u(E, H) {
      var w = E.style, T;
      for (T in H) {
        w[T] = H[T];
      }
    }
    if ("style" === b) {
      var z = !0;
      b = Eb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Eb(b);
    }
    bb ? (2 === bb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    bb = 0;
    d && n(b, d);
    e && u(b, e);
    l && !z && b.appendChild(F.createTextNode(l));
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
  function cb(a) {
    if (Fa(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function xc(a) {
    a = da(Fb, "style", {type:"text/css", media:"all"}, 0, a);
    Gb = a.sheet || a.styleSheet;
  }
  function Ga(a) {
    for (var b = Gb, d, e, l = "", n; a.length;) {
      d = a.shift(), e = a.shift(), n = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(n, b.cssRules.length) : l += n;
    }
    l && xc(l);
  }
  function yc(a) {
    function b(l) {
      e = Hb(e);
      Ib = l;
      d.onload = d.onerror = La;
      G(a, l);
    }
    if (na(Ib)) {
      G(a, Ib);
    } else {
      if (8 > A) {
        G(a, !1);
      } else {
        var d = new Image, e = G(function() {
          e && b(!1);
        });
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
  function zc(a, b, d, e, l, n, u) {
    function z() {
      F.fonts.load('1.6em "' + b + '"').then(function() {
        T(b) ? G(a, wa) : H(!0);
      }, function() {
        yc(Q);
      });
    }
    function E(B) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (p = new ra - 0, !1) : B < new ra - p;
    }
    function H(B) {
      B && (p = new ra - 0);
      T(b) ? a(wa) : E(Y) ? x ? a(0) : 9 > A ? G(a, 0) : yc(Q) : G(H);
    }
    function w() {
      var B = -1, I;
      w = null;
      K = ["sans-serif", "serif"];
      m = da(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Na = {}; I = K[++B];) {
        m.style.fontFamily = I, Na[I] = m.offsetWidth;
      }
    }
    function T(B) {
      var I = 0, Z = -1, Jb, Ac = 0;
      w && w();
      for (M.appendChild(m); Jb = K[++Z];) {
        if (m.style.fontFamily = '"' + B + '",' + Jb, m.offsetWidth !== Na[Jb]) {
          I = 1;
          break;
        }
      }
      I && l && (m.innerHTML = l, B = m.offsetWidth, m.innerHTML = n, Ac = B === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli");
      va(m);
      return wa = I + Ac;
    }
    function Q(B) {
      (x = B) ? N(!0) : a(0);
    }
    function N(B) {
      B && (p = new ra - 0);
      for (I in d) {
        if (T(I)) {
          J = da(M, "div", {"aria-hidden":"true", className:e, id:e});
          B = d[I];
          var I = Gb, Z = Bc.all || 0;
          I ? I.addImport ? I.addImport(B, Z) : I.insertRule && I.insertRule('@import "' + B + '"', Z) : xc('@import "' + B + '"');
          Bc.all = ++Z;
          G(xa, !0);
        } else {
          E(100) ? (delete d[I], G(N, !0)) : G(N);
        }
        return;
      }
      a(0);
    }
    function xa(B) {
      B && (p = new ra - 0);
      1 < J.offsetWidth ? (va(J), Y = 100, G(H, !0)) : E(Y) ? (va(J), a(0)) : G(xa);
    }
    var Y = u || 5E3, p, x, m, J, K, Na, wa;
    (function() {
      var B;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > A) {
        return !0;
      }
      var I = da(Fb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), Z = (Z = I.sheet || I.styleSheet) ? (B = 10 <= A ? Z.cssRules : Z.rules || Z.cssRules) && (B = B[0]) ? B.cssText : Z.cssText || "" : "";
      B = 0 < Z.indexOf("src") && 0 === Z.indexOf("@font-face");
      va(I);
      return B;
    })() ? !F.fonts || 603 > db ? H(!0) : z() : G(a, 0);
  }
  function Cc() {
    Kb = !Kb;
    for (var a = -1, b; b = Lb[++a];) {
      b.style.visibility = Kb ? "" : "hidden";
    }
  }
  function qd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Mb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function eb() {
    eb = null;
    rd(Nb, "PB-100", {"PB-100_canTTF":C + "pbFont/ttf.css", "PB-100_canWOFF":C + "pbFont/woff.css", "PB-100_canEOT":C + "pbFont/eot.css", "PB-100_canSVG":C + "pbFont/svg.css"}, "pbFont-testCssReady", fb, "i", 5E3);
  }
  function Nb(a) {
    (gb = a) ? Ob() : Oa ? Dc(!0) : na(Oa) ? Ob() : sd(Dc, C + "pbLCD/bg.png");
  }
  function Dc(a) {
    a && (oa(M, "pbList-noWebFont"), ea ? Ga([".pbList font:after", "content:url(" + C + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ga([".pbList font", "background-image:url(" + C + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Ob();
  }
  function Ob() {
    for (Nb = zc = null; pa.length;) {
      hb(pa.shift(), pa.shift());
    }
  }
  function hb(a, b) {
    function d(n) {
      n = n.childNodes;
      for (var u = -1, z; z = n[++u];) {
        switch(z.nodeType) {
          case 1:
            d(z);
            break;
          case 3:
            z.data && z.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(z);
        }
      }
    }
    var e = [];
    if (Nb) {
      -1 === pa.indexOf(a) && (pa.push(a, b), Pb && eb && eb());
    } else {
      var l = pa.indexOf(a);
      0 <= l && pa.splice(l, 2);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== gb && (l = l.split(fb).join(Ec)), b ? a.data = l : td(l.split("\r").join("").split("&yen;").join(ud).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Qb).split("&amp;").join("&"), a);
      }
    }
  }
  function td(a, b) {
    function d(x, m) {
      for (var J = ""; m;) {
        m & 1 && (J += x), m >>= 1, x += x;
      }
      return J;
    }
    function e(x, m, J) {
      for (var K, Na = -1, wa, B; K = m[++Na];) {
        for (; 0 <= (wa = x.indexOf(K));) {
          B = K.length, x = x.substr(0, wa) + d(J, B) + x.substr(wa + B);
        }
      }
      return x;
    }
    function l(x) {
      var m = P(x), J = "" + m;
      return 0 < m && m === m | 0 && (m = x.indexOf(J) + J.length, m <= x.length) ? m : 0;
    }
    var n = " area line str cmd fnc syb".split(" "), u = [], z = "", E = -1, H, w;
    if (function(x) {
      var m = x.indexOf("P");
      if (-1 === m) {
        return !1;
      }
      m = P(x.charAt(m + 1));
      return 0 <= m && 9 >= m;
    }(a)) {
      z = d("+", a.length);
    } else {
      for (0 <= (E = l(a)) && (z = d("|", E), --E); w = a.charAt(++E);) {
        w === Qb || H ? (z += "~", w === Qb && (H = !H)) : z += w;
      }
      z = e(z, vd, "^");
      z = e(z, wd, "{");
      z = e(z, xd, "}");
    }
    E = 0;
    for (H = a.length; E < H; ++E) {
      w = a.charAt(E);
      var T = w === Rb, Q = " " === w;
      w = T ? " " : w;
      var N = z.charAt(E), xa = Y, Y = "|" === N;
      N = n["+|~{}^".indexOf(N) + 1];
      if ("\n" !== w) {
        if (gb || !Oa) {
          8 > A && Q && (w = E === H - 1 ? Rb : yd), 2 === gb && a.substr(E, 2) === fb && (w = fb, ++E), Q = Q && "str" === N ? ' class="pbList-strsp"' : T ? "" : !Q && N ? ' class="pbList-' + N + '"' : "";
        } else {
          var p = ya.indexOf(w);
          p = -1 === p ? "" : ya.indexOf(w).toString(16).toUpperCase();
          p = (p = 1 === p.length ? "0" + p : p) ? "pbChr" + p : "";
          Q = Q && "str" === N ? ' class="pbList-strsp"' : Q || !p ? "" : N ? ' class="' + (p ? p + " " : "") + "pbList-" + N + '"' : ' class="' + p + '"';
        }
        xa && T && (db || ib) && (w = Rb);
        u.push("<font" + Q + ">" + w + "</font>");
      } else {
        u.push(w);
      }
    }
    u = u.join("");
    if (1 === b.nodeType) {
      b.innerHTML = u;
    } else {
      for (n = Eb("font", u); u = n.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(u, b);
      }
      va(b);
    }
  }
  var q, t, c = fa.userAgent, U = fa.appVersion, Sb = P(U) | 0, D = fa.platform, Tb = F.documentElement, Fc = Tb && Tb.style, Ub = F.documentMode, Vb = jc.width, Wb = jc.height, Gc = r.HTMLAudioElement, Hc = r.performance, Ic = r.Int8Array, zd = void 0 !== r.ontouchstart, za = k(U, "Version/") || k(c, "Version/"), Ha = void 0 !== Fc.MozAppearance, Jc = r.operamini, Xb = f(c, "UCWEB"), Ad = Xb && k(c, " U2/"), Bd = Xb && k(c, "; wds "), Yb = k(c.split("_").join("."), "; iPh OS "), Cd = k(c, "; Adr "), 
  Kc = f(U, "YJApp-ANDROID"), ca = f(D, "Android") || Ha && f(U, "Android") || Kc, R = k(D, "Android ") || k(U, "Android ") || k(c, "Android ") || Cd, Zb = f(D, "Linux"), Lc = "MacIntel" === D && void 0 !== fa.standalone, Aa = !Jc && r.opera, Dd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : oc(k(c, "Opera "), za, "" + Sb)), Mc = r.opr, jb = !Aa && (F.all || Ub), aa = jb && (Ub ? Ub : r.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  r.attachEvent ? 5 : 4), $b = !jb && Tb.msContentZoomFactor, kb = !$b && r.chrome, ac = Ha && k(c, "Goanna/"), ha = !ac && Ha && k(c, "rv:"), Ed = k(c, "Firefox/"), Fd = k(c, "Opera/"), Gd = r.FNRBrowser, la = Wa(c, "AppleWebKit/"), Pa = k(c, "Chrome/"), Nc = k(c, "OPR/"), Hd = k(U, "KHTML/"), Id = k(c.toLowerCase(), "iris"), Jd = k(c, "Silk/"), Qa = Wa(c, "SamsungBrowser/"), Ra;
  if (Ra = !Qa) {
    a: {
      for (var Oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      lb, bc = Oc.length; lb = Oc[--bc];) {
        if (f(c, lb)) {
          Ra = 2 > P(za) ? za : .9;
          break a;
        }
      }
      var Pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (bc = Pc.length; lb = Pc[--bc];) {
        if (f(c, lb)) {
          Ra = za;
          break a;
        }
      }
      Ra = void 0;
    }
  }
  var Qc = Ra, Rc = kb && 534.3 >= la, Sc = mc(D), Kd = Sc && !f(c, D) && mc(c), Ld = zd && (la || Ha) && Kd || !R && Kc, Md = !!r.ReactNativeWebView, mb;
  if (mb = Sc) {
    a: {
      var Tc = void 0;
      for (Tc in r) {
        if (0 === Tc.indexOf("SlexAPI_")) {
          mb = !0;
          break a;
        }
      }
      mb = void 0;
    }
  }
  var Nd = mb, Uc = r.puffinDevice, nb = Uc && Uc.clientInfo, Sa = nb && "iOS" === nb.os && nb.osVersion, Od = Sa && nb.model, cc = !aa && F.registerElement, Pd = !aa && F.execCommand, Qd = Zb && cc && "11.0.696.34" === Pa, Rd = r._firefoxTV_playbackStateObserverJava, Sd = Wa(c, "diordnA "), ob, y;
  if ("Nitro" === D) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === D) {
      h = "NDSi";
      var g = Fd;
    } else {
      if ("New Nintendo 3DS" === D || f(c, "iPhone OS 6_0") && 320 === Vb && 240 === Wb) {
        h = "New3DS", g = k(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === D) {
          h = "N3DS", g = k(c, "Version/"), la = 535;
        } else {
          if ("Nintendo Swicth" === D) {
            h = "Swicth", g = k(U, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === D) {
              h = "WiiU", g = k(U, "NintendoBrowser/"), la = k(U, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === D) {
                h = "Wii";
                g = k(c, "Wii; U; ; ");
                var L = h;
                var O = g;
              } else {
                if (y = k(c, "PlayStation Vita ")) {
                  h = "PSVita", g = y, L = h, O = y;
                } else {
                  if (y = k(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = y;
                    var Vc = 3.3;
                    L = h;
                    O = y;
                  } else {
                    if (y = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = y, L = h, O = y, 0 > nc("4.10", y) && (q = "Sony", t = y);
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
                            var pb = !0;
                          } else {
                            if (0 === D.indexOf("iP") || Yb || Sa || Lc) {
                              if (Sa) {
                                switch(g = Sa, Od.substr(0, 4)) {
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
                                if (!g || Gd) {
                                  g = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : kc.isNaN ? 9.2 : r.SharedWorker ? Hc && Hc.now ? 8 : 8.4 : Pd ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : Ic ? 4.3 : Gc ? 4.1 : 3.2;
                                }
                                var W = Vb === 1.5 * Wb || 1.5 * Vb === Wb;
                                0 === D.indexOf("iPhone") ? (ma = "iPhone", ba = !0) : 0 === D.indexOf("iPad") || Lc ? (ma = "iPad", V = !0) : 0 === D.indexOf("iPod") && (ma = "iPod", Wc = !0);
                              }
                              var dc;
                              if (dc = !Sa) {
                                var ec;
                                if (!(ec = fa.standalone)) {
                                  var qb;
                                  if (qb = V || 12 > g) {
                                    a: {
                                      for (var Td in F) {
                                        if ("webkitFullscreenEnabled" === Td) {
                                          qb = !0;
                                          break a;
                                        }
                                      }
                                      qb = void 0;
                                    }
                                  }
                                  ec = qb;
                                }
                                dc = ec || 11 <= g && 13 > g && fa.mediaDevices;
                              }
                              dc ? (q = "SafariMobile", L = "Safari", O = g) : q = "iOSWebView";
                              h = "iOS";
                              t = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", q = "AOSP", t = 2.2, L = q, O = t, ca = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", q = "AOSP", t = 2.2, L = q, O = t;
                                } else {
                                  if (y = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = y;
                                  } else {
                                    if (void 0 !== r.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ha ? "1.0.1" : 19 > ha ? 1.1 : 27 > ha ? 1.2 : 29 > ha ? 1.3 : 31 > ha ? 1.4 : 33 > ha ? 2 : 35 > ha ? 2.1 : 38 > ha ? 2.2 : 45 > ha ? 2.5 : 2.6, f(c, "Mobile") ? ba = !0 : f(c, "Tablet") && (V = !0);
                                    } else {
                                      if (r.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), L = h, O = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (y = k(c, "Tizen ")) {
                                          h = "Tizen", g = y, L = "Samsung", O = Qa, q = L, t = O, ba = !0;
                                        } else {
                                          if (y = k(c, "Windows Phone ") || k(U, "Windows Phone OS ") || Bd) {
                                            var rb = !0;
                                            g = y;
                                            ba = !0;
                                          } else {
                                            if ($b && "ARM" === D) {
                                              rb = !0, g = 10, ba = !0;
                                            } else {
                                              if (jb && f(U, "ZuneWP")) {
                                                rb = !0, g = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
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
                                                                    if (y = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = y, q = "AOSP", t = 2.2, L = q, O = t;
                                                                    } else {
                                                                      if (Rd) {
                                                                        ia = !0, g = R || Sd, S = !0;
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
                                                                              if (0 === c.indexOf("Windows Mobile;") || Id) {
                                                                                h = "WindowsMobile", pb = !0;
                                                                              } else {
                                                                                if ("WinCE" === D) {
                                                                                  h = D, pb = !0;
                                                                                } else {
                                                                                  if ("Win16" === D || "Win32" === D || "Win64" === D) {
                                                                                    h = D, g = k(c, "Windows NT ") || k(c, "Windows ");
                                                                                  } else {
                                                                                    if (0 === D.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === D ? "MacPPC" : D;
                                                                                      if (y = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = y;
                                                                                      }
                                                                                      var Xc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = za, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ca && Ha ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= P(R) ? W = R : W = {min:2.2}, g = W) : ca && Aa ? (R ? W = R : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ba = !0) : R ? (g = 
                                                                                      R, ca = !0) : Zb && Ld || Md || Nd ? (ob = !0, Qa ? W = {min:4.4} : kb && !Rc || Mc || Nc ? W = {min:4} : (W = R = void 0 !== Fc.touchAction ? {min:5} : cc ? 4.4 : Ic ? fa.connection ? r.searchBoxJavaBridge_ || kb ? kc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= la ? 3 : 533 <= la ? Gc ? 2.3 : 2.2 : 530 <= la ? 2 : 1.5, Qc && (q = "Samsung", t = Qc)), g = W, ca = !0) : Qd ? (g = {min:5}, ob = ca = !0) : Zb && (f(c, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (y = k(c, "Mint/")) ? (h = "Mint", g = y) : (y = k(c, "Fedora/")) ? (h = "Fedora", g = y) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ia || ca && ob && Jd ? h = "FireOS" : ca && (h = h || "Android");
  rb && (h = "WindowsPhone");
  q || (S = S || ca, Aa ? (q = S || pb || ba || V ? "PrestoMobile" : "Presto", t = Dd) : jb ? ((W = Wa(U, "Trident/") + 4) && W !== aa && (L = "IEHost", O = W), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), pb || ba || V || Wc ? q = "TridentMobile" : Xc && 5 <= aa ? (q = "Tasman", L = "MacIE", O = aa) : (q = "Trident", Xc && (L = "MacIE", O = aa)), t = aa) : $b ? (q = rb ? "EdgeMobile" : "EdgeHTML", t = k(U, "Edge/")) : ac ? (q = "Goanna", 
  t = ac) : Ha ? (q = S ? "Fennec" : "Gecko", t = ha || Ed) : Qa ? (q = "Samsung", t = Qa) : (y = Vc || k(c, "NetFront/")) ? (q = "NetFront", t = y) : (y = k(c, "iCab")) ? (q = "iCab", t = y) : (y = oc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Jc && za) ? (q = "OperaMini", t = y, h || (f(c, "iPhone") ? ma = "iPhone" : f(c, "iPad") ? ma = "iPad" : f(c, "iPod") && (ma = "iPod"), ma && (h = "iOS"))) : Xb ? (q = "UCWEB", t = Ad) : Hd ? (q = "KHTML", t = Sb) : ca && Rc ? (q = "AOSP", t = R) : kb || 
  Mc || Nc ? (q = S ? "ChromiumMobile" : "Chromium", t = Pa) : ca && cc ? (q = "ChromeWebView", t = 5 > P(R) ? R : Pa) : ca && (za || ob) ? (q = "AOSP", t = R) : Pa ? (q = S ? "ChromiumMobile" : "Chromium", t = Pa) : la && (q = "WebKit", t = la));
  h && (v.PLATFORM = h, g ? (v.PLATFORM_VERSION = pc(g), v[h] = g === g + "" ? P(g) : g) : v[h] = !0);
  q && (v.ENGINE = q, t ? (v.ENGINE_VERSION = pc(t), v[q] = t === t + "" ? P(t) : t) : v[q] = !0, L || (L = q, O = t));
  var La = ld, Ta = [], pd = !!F.getElementsByTagName, M = F.body, qa = M.style, A = v.Trident || v.TridentMobile, sb = v.Tasman, Yc = v.EdgeHTML || v.EdgeMobile, Zc = v.Presto || v.PrestoMobile, tb = v.Gecko, ub = v.Goanna, db = v.WebKit, ib = v.SafariMobile || v.iOSWebView, Ud = v.OperaMini && v.UCWEB, fc = v.Win32 || v.Win64, Vd = P(fa.userAgent.split("Edg/")[1]), $c = P(fa.appVersion.split("Trident/")[1]) + 4;
  A || sb || (new lc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ad = F.scripts, Wd = (sb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", Za = [], Ab, Bb = 0, gc, Oa, ea, Xd = na(qa.transform) ? "transform" : na(qa["-o-transform"]) ? "-o-transform" : na(qa["-ms-transform"]) ? "-ms-transform" : na(qa["-moz-transform"]) ? "-moz-transform" : na(qa["-webkit-transform"]) ? "-webkit-transform" : "";
  var C = ad[ad.length - 1].src.split("/");
  --C.length;
  (C = C.join("/")) && (C += "/");
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
    var d = arguments, e = d.length - 2 - b, l = this.slice(a, a + b), n;
    if (0 < e) {
      var u = this.length - 1;
      for (n = a + b; u >= n; --u) {
        this[u + e] = this[u];
      }
    } else {
      if (0 > e) {
        u = a + b;
        for (n = this.length; u < n; ++u) {
          this[u + e] = this[u];
        }
        this.length += e;
      }
    }
    u = 2;
    for (n = d.length; u < n; ++u) {
      this[u - 2 + a] = d[u];
    }
    return l;
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
  var cd = function(a) {
    Ya.length || (Ca = setInterval(Xa, rc));
    Ya.push({f:a, g:++bd});
    return bd;
  };
  var Ya = [], rc = 999, bd = 0, Ca;
  if (5 > A || sb) {
    r._wdb_onlooptimer = Xa, Xa = "_wdb_onlooptimer()";
  }
  Ta.push(function() {
    6.1 > ib && dd(nd);
    vb(qc);
  });
  var G = function(a, b, d) {
    ka.length || (sa = xb(Ia, Ja));
    ka.push({f:a, p:b, g:++ed, t:new ra - 0 + (Ja < d ? d : Ja)});
    return ed;
  };
  var Hb = function(a) {
    for (var b = ka.length, d; d = ka[--b];) {
      if (d.g === a) {
        ka.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ka = [], Ja = 64, ed = 0, sa;
  if (5 > A || sb) {
    r._wdb_ontimer = Ia, Ia = "_wdb_ontimer()";
  }
  Ta.push(function() {
    6.1 > ib && dd(od);
    vb(sc);
  });
  var Ba = r.matchMedia, Ka = [], tc, Ea;
  Za.push(function() {
    Ea = da(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Ua(function() {
      tc = !0;
      Ka.length && G(uc);
    });
  });
  var Ua = function(a) {
    Za.push(a);
  };
  var vb = function(a) {
    fd.push(a);
  };
  var fd = [], zb = r.onload, gd = r.onunload;
  onload = yb;
  onunload = function(a) {
    var b;
    gd && (b = gd(a));
    ta(fd, a);
    onunload = La;
    return b;
  };
  var hd = function(a) {
    wc.push(a);
  };
  var wc = [];
  Ua(function() {
    vc();
    cd(vc);
  });
  var Yd = function(a) {
    Va.push(a);
  };
  var Va = [], Ma, Db, Cb;
  if (10 <= A || Yc || fc && Vd) {
    Ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Ma = Db = a.matches;
      Da(Va, $a());
    }), Ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Ma = Cb = a.matches;
      Da(Va, $a());
    }), Ba("(-ms-high-contrast:active)").addListener(function(a) {
      Ma = a.matches;
      Da(Va, $a());
    });
  } else {
    if (10 > A || fc && (44 <= tb || ub)) {
      var wb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = F.defaultView, d = Bb, e = b ? b.getComputedStyle(Ea, null) : Ea.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Ma = "#123456" !== b && "rgb(18,52,86)" !== b, Db = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Cb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== $a() && Da(Va, Bb), !0;
        }
      };
      Ua(function() {
        Ea.style.color = "#123456";
        Ea.style.backgroundColor = "#123456";
        60 > tb || ub ? wb() : wb() && cd(wb, 1E3);
        wb = null;
      });
    }
  }
  var Zd = [];
  Ba && Ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Da(Zd, a.matches);
  });
  var hc = [];
  r.onbeforeprint ? (onbeforeprint = function() {
    ta(hc, !0);
  }, onafterprint = function() {
    ta(hc, !1);
  }, vb(function() {
    onbeforeprint = onafterprint = La;
  })) : Ba && Ba("print").addListener(function(a) {
    ta(hc, a.matches);
  });
  var dd = function(a) {
    id.push(a);
  };
  var id = [], ic = r.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    yb || ta(id);
    return b;
  };
  vb(function() {
    onscroll = ic = La;
  });
  var $d = ab("html")[0];
  var Fb = ab("head")[0];
  var bb;
  var Gb = void 0;
  var Bc = {};
  Ua(function() {
    if (Ab) {
      if (!na(ea) && (ea = 1.8 <= tb || ub || 8 <= A || Yc || 530 <= db || 3.2 <= ib, !ea)) {
        var a = da(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth;
        va(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Ib;
  9 > A && Ua(function(a) {
    a = da(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    va(a);
  });
  var sd = function(a, b) {
    function d() {
      n || (e.complete ? (n = !0, G(a, !!e.width)) : --u ? l = G(d) : (n = !0, l = G(a, !1)));
    }
    var e = new Image, l, n, u = 99;
    e.onerror = function() {
      (!A || 11 === A || 11 === $c) && e.width || n || (n = !0, l && Hb(l), l = G(a, !1));
    };
    e.onload = function() {
      n = !0;
      l && Hb(l);
      Zc && !e.complete ? l = G(a, !1) : (Oa = !0, G(a, !0));
    };
    e.src = b;
    8 > Zc && e.complete ? (Oa = !0, G(a, !0)) : n || (l = G(d));
  };
  var rd = zc;
  for (11 === $c && 5.5 > A && da(Fb, "link", {href:C + Wd, rel:"stylesheet", type:"text/css"}); Ta.length;) {
    Ta.shift()();
  }
  Ta = null;
  var X = String.fromCharCode, ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > A || fc && (44 <= tb || ub)) && Yd(function(a) {
    cb("jsHcm");
    cb("jsHcmWob");
    cb("jsHcmBow");
    if (a) {
      switch((Xd || 9 === A || 5.5 <= A && 9 > A && gc) && oa(M, "jsCanRotate"), a) {
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
      cb("jsCanRotate");
    }
  });
  var Lb = [], Kb, Mb, jd;
  hd(function(a) {
    function b(p) {
      var x = p.getAttribute("pbtip") || "", m = x.charAt(0), J = "_" === m;
      x = J ? x.charAt(2) : m;
      m = J ? "Btm" : "";
      var K = p.getAttribute("title") || "";
      oa(p, "pbTipPos" + x.toUpperCase());
      da(p, "div", {className:"pbTip" + m}, {width:K.length + l + "em"}, K);
      da(p, "div", {className:"pbTail" + m});
      u && J && (p.focus(), p.blur());
    }
    function d(p) {
      if (ea && Q) {
        e(p);
      } else {
        var x = p.getAttribute("pbGhst") || "", m = p.className, J = m.split("pbCsr")[1] || "";
        m = m.split("pbAlp")[1] || "";
        if ("CS" === x) {
          var K = "_";
        } else {
          K = x, 3 === K.length && (K = K.substr(0, 2)), K = ya[parseInt(K, 16)] || "~";
        }
        J = J.split(" ")[0];
        m = m.split(" ")[0];
        m = 10 - P(m);
        x ? (x = {className:["pbChr" + x + " pbAlp" + m + " pbCsr" + J]}, bb = 1, E = da(p, "b", x, 0, K), e(p), e(E)) : e(p);
      }
    }
    function e(p) {
      T || n || Fa(p, "pbChrCS") && Lb.push(p);
    }
    if (a && !jd) {
      jd = !0;
      var l = 6 > A ? 1 : 0;
      a = ab("SAMP");
      var n = 9 > A, u = 5 <= A && 6 > A, z, E, H, w;
      gc && oa(M, "pbLCD-AX");
      if (a.length) {
        var T = void 0 !== qa.opacity || void 0 !== qa["-moz-opacity"] || void 0 !== qa["-khtml-opacity"], Q = !T && !n && !0, N = !ea || Q || void 0;
        for (H = -1; z = a[++H];) {
          if (Fa(z.parentElement || z.parentNode, "pbLCD")) {
            var xa = z.children;
            for (z = xa.length; z;) {
              var Y = xa[--z];
              switch(Y.tagName.toUpperCase()) {
                case "A":
                  if (N) {
                    for (ea || b(Y), w = Y.children.length; w;) {
                      d(Y.children[--w]);
                    }
                  }
                  Ud ? Y.setAttribute("href", "javascript:void(0)") : Y.onclick = qd;
                  break;
                case "B":
                  N && d(Y);
              }
            }
          }
        }
        Lb.length ? (setInterval(Cc, 500), ea ? Ga([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ga([".pbChrCS", "background-position:0 -51px"])) : Cc = null;
        Q && (ea ? Ga([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + C + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        C + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + C + "pbLCD/x3_a90.png)"]) : Ga([".pbAlp1", "background-image:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        C + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + C + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + C + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > db && ($d.onclick = function(a) {
    if (Mb) {
      return Mb = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new lc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Qb = ya[7], Ec = ya[30], ud = ya[113], fb = X(8337) + X(8331), Rb = X(160), yd = X(8194), wd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), xd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), vd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ec + ya[31]).split(""), pa = 
  [], gb, Pb;
  hd(function(a) {
    if (a && !Pb) {
      var b = F.all || ab("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Fa(d, "pbList") ? hb(d) : Fa(d, "pbFont") && hb(d, !0);
      }
      pa.length && eb();
      Pb = !0;
    }
  });
  kd.prettify = hb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

