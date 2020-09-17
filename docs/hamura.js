PB100 = {};
(function(kd, u, r, ld, F, fa, ic, P, jc, kc, ae, xb, md, ra, be) {
  function Wa(a, b) {
    var d = P(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function lc(a) {
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
  function mc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var l = P(a[d]), q = P(b[d]);
      if (l !== q) {
        return l > q ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function nc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], l; b < d; ++b) {
      0 > mc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function oc(a) {
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
    Ca && (pc(), Ca = setInterval(Xa, qc));
  }
  function pc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ia() {
    for (var a, b = 0, d = new ra - 0; b < ka.length;) {
      d < ka[0].t ? ++b : (a = ka.splice(b, 1)[0], a.f(a.p));
    }
    sa = ka.length ? xb(Ia, Ja) : 0;
  }
  function od() {
    sa && (rc(), sa = xb(Ia, Ja));
  }
  function rc() {
    sa && (sa = md(sa));
  }
  function ta(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Da(a, b) {
    sc && !Ka.length && G(tc);
    Ka.push(a, b);
  }
  function tc() {
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
  function uc() {
    var a = 9 === Ea.offsetWidth;
    Ab !== a && Da(vc, Ab = a);
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
    function q(E, H) {
      for (var v in H) {
        switch(v) {
          case "class":
          case "className":
            oa(E, H[v]);
            break;
          default:
            E.setAttribute(v, H[v]);
        }
      }
    }
    function w(E, H) {
      var v = E.style, T;
      for (T in H) {
        v[T] = H[T];
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
    d && q(b, d);
    e && w(b, e);
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
  function wc(a) {
    a = da(Fb, "style", {type:"text/css", media:"all"}, 0, a);
    Gb = a.sheet || a.styleSheet;
  }
  function Ga(a) {
    for (var b = Gb, d, e, l = "", q; a.length;) {
      d = a.shift(), e = a.shift(), q = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(q, b.cssRules.length) : l += q;
    }
    l && wc(l);
  }
  function xc(a) {
    function b(e) {
      Hb = e;
      d.onload = d.onerror = La;
      G(a, e);
    }
    if (na(Hb)) {
      G(a, Hb);
    } else {
      if (8 > A) {
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
  function yc(a, b, d, e, l, q, w) {
    function z() {
      F.fonts.load('1.6em "' + b + '"').then(function() {
        T(b) ? G(a, wa) : H(!0);
      }, function() {
        xc(Q);
      });
    }
    function E(B) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (n = new ra - 0, !1) : B < new ra - n;
    }
    function H(B) {
      B && (n = new ra - 0);
      T(b) ? a(wa) : E(Y) ? x ? a(0) : 9 > A ? G(a, 0) : xc(Q) : G(H);
    }
    function v() {
      var B = -1, I;
      v = null;
      K = ["sans-serif", "serif"];
      m = da(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Na = {}; I = K[++B];) {
        m.style.fontFamily = I, Na[I] = m.offsetWidth;
      }
    }
    function T(B) {
      var I = 0, Z = -1, Ib, zc = 0;
      v && v();
      for (M.appendChild(m); Ib = K[++Z];) {
        if (m.style.fontFamily = '"' + B + '",' + Ib, m.offsetWidth !== Na[Ib]) {
          I = 1;
          break;
        }
      }
      I && l && (m.innerHTML = l, B = m.offsetWidth, m.innerHTML = q, zc = B === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli");
      va(m);
      return wa = I + zc;
    }
    function Q(B) {
      (x = B) ? N(!0) : a(0);
    }
    function N(B) {
      B && (n = new ra - 0);
      for (I in d) {
        if (T(I)) {
          J = da(M, "div", {"aria-hidden":"true", className:e, id:e});
          B = d[I];
          var I = Gb, Z = Ac.all || 0;
          I ? I.addImport ? I.addImport(B, Z) : I.insertRule && I.insertRule('@import "' + B + '"', Z) : wc('@import "' + B + '"');
          Ac.all = ++Z;
          G(xa, !0);
        } else {
          E(100) ? (delete d[I], G(N, !0)) : G(N);
        }
        return;
      }
      a(0);
    }
    function xa(B) {
      B && (n = new ra - 0);
      1 < J.offsetWidth ? (va(J), Y = 100, G(H, !0)) : E(Y) ? (va(J), a(0)) : G(xa);
    }
    var Y = w || 5E3, n, x, m, J, K, Na, wa;
    (function() {
      var B;
      if (u.MeeGo || 2.2 > u.AOSP || u.WebOS || u.UCWEB || 10 > u.TridentMobile || u.NDS || u.NDSi || u.N3DS) {
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
  function Bc() {
    Jb = !Jb;
    for (var a = -1, b; b = Kb[++a];) {
      b.style.visibility = Jb ? "" : "hidden";
    }
  }
  function qd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Lb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function eb() {
    eb = null;
    rd(Mb, "PB-100", {"PB-100_canTTF":C + "pbFont/ttf.css", "PB-100_canWOFF":C + "pbFont/woff.css", "PB-100_canEOT":C + "pbFont/eot.css", "PB-100_canSVG":C + "pbFont/svg.css"}, "pbFont-testCssReady", fb, "i", 5E3);
  }
  function Mb(a) {
    (gb = a) ? Nb() : Oa ? Cc(!0) : na(Oa) ? Nb() : sd(Cc, C + "pbLCD/bg.png");
  }
  function Cc(a) {
    a && (oa(M, "pbList-noWebFont"), ea ? Ga([".pbList font:after", "content:url(" + C + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ga([".pbList font", "background-image:url(" + C + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Nb();
  }
  function Nb() {
    for (Mb = yc = null; pa.length;) {
      hb(pa.shift(), pa.shift());
    }
  }
  function hb(a, b) {
    function d(q) {
      q = q.childNodes;
      for (var w = -1, z; z = q[++w];) {
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
    if (Mb) {
      -1 === pa.indexOf(a) && (pa.push(a, b), Ob && eb && eb());
    } else {
      var l = pa.indexOf(a);
      0 <= l && pa.splice(l, 2);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== gb && (l = l.split(fb).join(Dc)), b ? a.data = l : td(l.split("\r").join("").split("&yen;").join(ud).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Pb).split("&amp;").join("&"), a);
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
    var q = " area line str cmd fnc syb".split(" "), w = [], z = "", E = -1, H, v;
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
      for (0 <= (E = l(a)) && (z = d("|", E), --E); v = a.charAt(++E);) {
        v === Pb || H ? (z += "~", v === Pb && (H = !H)) : z += v;
      }
      z = e(z, vd, "^");
      z = e(z, wd, "{");
      z = e(z, xd, "}");
    }
    E = 0;
    for (H = a.length; E < H; ++E) {
      v = a.charAt(E);
      var T = v === Qb, Q = " " === v;
      v = T ? " " : v;
      var N = z.charAt(E), xa = Y, Y = "|" === N;
      N = q["+|~{}^".indexOf(N) + 1];
      if ("\n" !== v) {
        if (gb || !Oa) {
          8 > A && Q && (v = E === H - 1 ? Qb : yd), 2 === gb && a.substr(E, 2) === fb && (v = fb, ++E), Q = Q && "str" === N ? ' class="pbList-strsp"' : T ? "" : !Q && N ? ' class="pbList-' + N + '"' : "";
        } else {
          var n = ya.indexOf(v);
          n = -1 === n ? "" : ya.indexOf(v).toString(16).toUpperCase();
          n = (n = 1 === n.length ? "0" + n : n) ? "pbChr" + n : "";
          Q = Q && "str" === N ? ' class="pbList-strsp"' : Q || !n ? "" : N ? ' class="' + (n ? n + " " : "") + "pbList-" + N + '"' : ' class="' + n + '"';
        }
        xa && T && (db || ib) && (v = Qb);
        w.push("<font" + Q + ">" + v + "</font>");
      } else {
        w.push(v);
      }
    }
    w = w.join("");
    if (1 === b.nodeType) {
      b.innerHTML = w;
    } else {
      for (q = Eb("font", w); w = q.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(w, b);
      }
      va(b);
    }
  }
  var p, t, c = fa.userAgent, U = fa.appVersion, Rb = P(U) | 0, D = fa.platform, Sb = F.documentElement, Ec = Sb && Sb.style, Tb = F.documentMode, Ub = ic.width, Vb = ic.height, Fc = r.HTMLAudioElement, Gc = r.performance, Hc = r.Int8Array, zd = void 0 !== r.ontouchstart, za = k(U, "Version/") || k(c, "Version/"), Ha = void 0 !== Ec.MozAppearance, Ic = r.operamini, Wb = f(c, "UCWEB"), Ad = Wb && k(c, " U2/"), Bd = Wb && k(c, "; wds "), Xb = k(c.split("_").join("."), "; iPh OS "), Cd = k(c, "; Adr "), 
  Jc = f(U, "YJApp-ANDROID"), ca = f(D, "Android") || Ha && f(U, "Android") || Jc, R = k(D, "Android ") || k(U, "Android ") || k(c, "Android ") || Cd, Yb = f(D, "Linux"), Kc = "MacIntel" === D && void 0 !== fa.standalone, Aa = !Ic && r.opera, Dd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : nc(k(c, "Opera "), za, "" + Rb)), Lc = r.opr, jb = !Aa && (F.all || Tb), aa = jb && (Tb ? Tb : r.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  r.attachEvent ? 5 : 4), Zb = !jb && Sb.msContentZoomFactor, kb = !Zb && r.chrome, $b = Ha && k(c, "Goanna/"), ha = !$b && Ha && k(c, "rv:"), Ed = k(c, "Firefox/"), Fd = k(c, "Opera/"), Gd = r.FNRBrowser, la = Wa(c, "AppleWebKit/"), Pa = k(c, "Chrome/"), Mc = k(c, "OPR/"), Hd = k(U, "KHTML/"), Id = k(c.toLowerCase(), "iris"), Jd = k(c, "Silk/"), Qa = Wa(c, "SamsungBrowser/"), Ra;
  if (Ra = !Qa) {
    a: {
      for (var Nc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      lb, ac = Nc.length; lb = Nc[--ac];) {
        if (f(c, lb)) {
          Ra = 2 > P(za) ? za : .9;
          break a;
        }
      }
      var Oc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Oc.length; lb = Oc[--ac];) {
        if (f(c, lb)) {
          Ra = za;
          break a;
        }
      }
      Ra = void 0;
    }
  }
  var Pc = Ra, Qc = kb && 534.3 >= la, Rc = lc(D), Kd = Rc && !f(c, D) && lc(c), Ld = zd && (la || Ha) && Kd || !R && Jc, Md = !!r.ReactNativeWebView, mb;
  if (mb = Rc) {
    a: {
      var Sc = void 0;
      for (Sc in r) {
        if (0 === Sc.indexOf("SlexAPI_")) {
          mb = !0;
          break a;
        }
      }
      mb = void 0;
    }
  }
  var Nd = mb, Tc = r.puffinDevice, nb = Tc && Tc.clientInfo, Sa = nb && "iOS" === nb.os && nb.osVersion, Od = Sa && nb.model, bc = !aa && F.registerElement, Pd = !aa && F.execCommand, Qd = Yb && bc && "11.0.696.34" === Pa, Rd = r._firefoxTV_playbackStateObserverJava, Sd = Wa(c, "diordnA "), ob, y;
  if ("Nitro" === D) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === D) {
      h = "NDSi";
      var g = Fd;
    } else {
      if ("New Nintendo 3DS" === D || f(c, "iPhone OS 6_0") && 320 === Ub && 240 === Vb) {
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
                    var Uc = 3.3;
                    L = h;
                    O = y;
                  } else {
                    if (y = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = y, L = h, O = y, 0 > mc("4.10", y) && (p = "Sony", t = y);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Rb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Uc = 3.4;
                            L = h;
                            O = 2;
                            var pb = !0;
                          } else {
                            if (0 === D.indexOf("iP") || Xb || Sa || Kc) {
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
                                    var Vc = !0;
                                }
                              } else {
                                Xb ? g = Xb : g = k(U.split("_").join("."), "OS ");
                                if (!g || Gd) {
                                  g = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : jc.isNaN ? 9.2 : r.SharedWorker ? Gc && Gc.now ? 8 : 8.4 : Pd ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : Hc ? 4.3 : Fc ? 4.1 : 3.2;
                                }
                                var W = Ub === 1.5 * Vb || 1.5 * Ub === Vb;
                                0 === D.indexOf("iPhone") ? (ma = "iPhone", ba = !0) : 0 === D.indexOf("iPad") || Kc ? (ma = "iPad", V = !0) : 0 === D.indexOf("iPod") && (ma = "iPod", Vc = !0);
                              }
                              var cc;
                              if (cc = !Sa) {
                                var dc;
                                if (!(dc = fa.standalone)) {
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
                                  dc = qb;
                                }
                                cc = dc || 11 <= g && 13 > g && fa.mediaDevices;
                              }
                              cc ? (p = "SafariMobile", L = "Safari", O = g) : p = "iOSWebView";
                              h = "iOS";
                              t = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", p = "AOSP", t = 2.2, L = p, O = t, ca = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", t = 2.2, L = p, O = t;
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
                                          h = "Tizen", g = y, L = "Samsung", O = Qa, p = L, t = O, ba = !0;
                                        } else {
                                          if (y = k(c, "Windows Phone ") || k(U, "Windows Phone OS ") || Bd) {
                                            var rb = !0;
                                            g = y;
                                            ba = !0;
                                          } else {
                                            if (Zb && "ARM" === D) {
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
                                                                      h = "Kindle", g = y, p = "AOSP", t = 2.2, L = p, O = t;
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
                                                                                      var Wc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = za, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ca && Ha ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= P(R) ? W = R : W = {min:2.2}, g = W) : ca && Aa ? (R ? W = R : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ba = !0) : R ? (g = 
                                                                                      R, ca = !0) : Yb && Ld || Md || Nd ? (ob = !0, Qa ? W = {min:4.4} : kb && !Qc || Lc || Mc ? W = {min:4} : (W = R = void 0 !== Ec.touchAction ? {min:5} : bc ? 4.4 : Hc ? fa.connection ? r.searchBoxJavaBridge_ || kb ? jc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= la ? 3 : 533 <= la ? Fc ? 2.3 : 2.2 : 530 <= la ? 2 : 1.5, Pc && (p = "Samsung", t = Pc)), g = W, ca = !0) : Qd ? (g = {min:5}, ob = ca = !0) : Yb && (f(c, "Ubuntu") ? 
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
  p || (S = S || ca, Aa ? (p = S || pb || ba || V ? "PrestoMobile" : "Presto", t = Dd) : jb ? ((W = Wa(U, "Trident/") + 4) && W !== aa && (L = "IEHost", O = W), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), pb || ba || V || Vc ? p = "TridentMobile" : Wc && 5 <= aa ? (p = "Tasman", L = "MacIE", O = aa) : (p = "Trident", Wc && (L = "MacIE", O = aa)), t = aa) : Zb ? (p = rb ? "EdgeMobile" : "EdgeHTML", t = k(U, "Edge/")) : $b ? (p = "Goanna", 
  t = $b) : Ha ? (p = S ? "Fennec" : "Gecko", t = ha || Ed) : Qa ? (p = "Samsung", t = Qa) : (y = Uc || k(c, "NetFront/")) ? (p = "NetFront", t = y) : (y = k(c, "iCab")) ? (p = "iCab", t = y) : (y = nc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Ic && za) ? (p = "OperaMini", t = y, h || (f(c, "iPhone") ? ma = "iPhone" : f(c, "iPad") ? ma = "iPad" : f(c, "iPod") && (ma = "iPod"), ma && (h = "iOS"))) : Wb ? (p = "UCWEB", t = Ad) : Hd ? (p = "KHTML", t = Rb) : ca && Qc ? (p = "AOSP", t = R) : kb || 
  Lc || Mc ? (p = S ? "ChromiumMobile" : "Chromium", t = Pa) : ca && bc ? (p = "ChromeWebView", t = 5 > P(R) ? R : Pa) : ca && (za || ob) ? (p = "AOSP", t = R) : Pa ? (p = S ? "ChromiumMobile" : "Chromium", t = Pa) : la && (p = "WebKit", t = la));
  h && (u.PLATFORM = h, g ? (u.PLATFORM_VERSION = oc(g), u[h] = g === g + "" ? P(g) : g) : u[h] = !0);
  p && (u.ENGINE = p, t ? (u.ENGINE_VERSION = oc(t), u[p] = t === t + "" ? P(t) : t) : u[p] = !0, L || (L = p, O = t));
  var La = ld, Ta = [], pd = !!F.getElementsByTagName, M = F.body, qa = M.style, A = u.Trident || u.TridentMobile, sb = u.Tasman, Xc = u.EdgeHTML || u.EdgeMobile, Yc = u.Presto || u.PrestoMobile, tb = u.Gecko, ub = u.Goanna, db = u.WebKit, ib = u.SafariMobile || u.iOSWebView, Ud = u.OperaMini && u.UCWEB, ec = u.Win32 || u.Win64, Vd = P(fa.userAgent.split("Edg/")[1]), Zc = P(fa.appVersion.split("Trident/")[1]) + 4;
  A || sb || (new kc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var $c = F.scripts, Wd = (sb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", Za = [], Ab, Bb = 0, fc, Oa, ea, Xd = na(qa.transform) ? "transform" : na(qa["-o-transform"]) ? "-o-transform" : na(qa["-ms-transform"]) ? "-ms-transform" : na(qa["-moz-transform"]) ? "-moz-transform" : na(qa["-webkit-transform"]) ? "-webkit-transform" : "";
  var C = $c[$c.length - 1].src.split("/");
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
    var d = arguments, e = d.length - 2 - b, l = this.slice(a, a + b), q;
    if (0 < e) {
      var w = this.length - 1;
      for (q = a + b; w >= q; --w) {
        this[w + e] = this[w];
      }
    } else {
      if (0 > e) {
        w = a + b;
        for (q = this.length; w < q; ++w) {
          this[w + e] = this[w];
        }
        this.length += e;
      }
    }
    w = 2;
    for (q = d.length; w < q; ++w) {
      this[w - 2 + a] = d[w];
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
  var bd = function(a) {
    Ya.length || (Ca = setInterval(Xa, qc));
    Ya.push({f:a, g:++ad});
    return ad;
  };
  var Ya = [], qc = 999, ad = 0, Ca;
  if (5 > A || sb) {
    r._wdb_onlooptimer = Xa, Xa = "_wdb_onlooptimer()";
  }
  Ta.push(function() {
    6.1 > ib && cd(nd);
    vb(pc);
  });
  var G = function(a, b, d) {
    ka.length || (sa = xb(Ia, Ja));
    ka.push({f:a, p:b, g:++dd, t:new ra - 0 + (Ja < d ? d : Ja)});
    return dd;
  };
  var ed = function(a) {
    for (var b = ka.length, d; d = ka[--b];) {
      if (d.g === a) {
        ka.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ka = [], Ja = 64, dd = 0, sa;
  if (5 > A || sb) {
    r._wdb_ontimer = Ia, Ia = "_wdb_ontimer()";
  }
  Ta.push(function() {
    6.1 > ib && cd(od);
    vb(rc);
  });
  var Ba = r.matchMedia, Ka = [], sc, Ea;
  Za.push(function() {
    Ea = da(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Ua(function() {
      sc = !0;
      Ka.length && G(tc);
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
    vc.push(a);
  };
  var vc = [];
  Ua(function() {
    uc();
    bd(uc);
  });
  var Yd = function(a) {
    Va.push(a);
  };
  var Va = [], Ma, Db, Cb;
  if (10 <= A || Xc || ec && Vd) {
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
    if (10 > A || ec && (44 <= tb || ub)) {
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
        60 > tb || ub ? wb() : wb() && bd(wb, 1E3);
        wb = null;
      });
    }
  }
  var Zd = [];
  Ba && Ba("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Da(Zd, a.matches);
  });
  var gc = [];
  r.onbeforeprint ? (onbeforeprint = function() {
    ta(gc, !0);
  }, onafterprint = function() {
    ta(gc, !1);
  }, vb(function() {
    onbeforeprint = onafterprint = La;
  })) : Ba && Ba("print").addListener(function(a) {
    ta(gc, a.matches);
  });
  var cd = function(a) {
    id.push(a);
  };
  var id = [], hc = r.onscroll;
  onscroll = function(a) {
    var b;
    hc && (b = hc(a));
    yb || ta(id);
    return b;
  };
  vb(function() {
    onscroll = hc = La;
  });
  var $d = ab("html")[0];
  var Fb = ab("head")[0];
  var bb;
  var Gb = void 0;
  var Ac = {};
  Ua(function() {
    if (Ab) {
      if (!na(ea) && (ea = 1.8 <= tb || ub || 8 <= A || Xc || 530 <= db || 3.2 <= ib, !ea)) {
        var a = da(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth;
        va(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Hb;
  9 > A && Ua(function(a) {
    a = da(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    fc = 1 < a.offsetHeight;
    a.style.cssText = "";
    va(a);
  });
  var sd = function(a, b) {
    function d() {
      q || (e.complete ? (q = !0, e.width || G(a, !1)) : l = G(d));
    }
    var e = new Image, l, q;
    e.onerror = function() {
      (!A || 11 === A || 11 === Zc) && e.width || q || (q = !0, l && ed(l), l = G(a, !1));
    };
    e.onload = function() {
      q = !0;
      l && ed(l);
      Yc && !e.complete ? l = G(a, !1) : (Oa = !0, G(a, !0));
    };
    e.src = b;
    8 > Yc && e.complete ? (Oa = !0, G(a, !0)) : q || (l = G(d));
  };
  var rd = yc;
  for (11 === Zc && 5.5 > A && da(Fb, "link", {href:C + Wd, rel:"stylesheet", type:"text/css"}); Ta.length;) {
    Ta.shift()();
  }
  Ta = null;
  var X = String.fromCharCode, ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > A || ec && (44 <= tb || ub)) && Yd(function(a) {
    cb("jsHcm");
    cb("jsHcmWob");
    cb("jsHcmBow");
    if (a) {
      switch((Xd || 9 === A || 5.5 <= A && 9 > A && fc) && oa(M, "jsCanRotate"), a) {
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
  var Kb = [], Jb, Lb, jd;
  hd(function(a) {
    function b(n) {
      var x = n.getAttribute("pbtip") || "", m = x.charAt(0), J = "_" === m;
      x = J ? x.charAt(2) : m;
      m = J ? "Btm" : "";
      var K = n.getAttribute("title") || "";
      oa(n, "pbTipPos" + x.toUpperCase());
      da(n, "div", {className:"pbTip" + m}, {width:K.length + l + "em"}, K);
      da(n, "div", {className:"pbTail" + m});
      w && J && (n.focus(), n.blur());
    }
    function d(n) {
      if (ea && Q) {
        e(n);
      } else {
        var x = n.getAttribute("pbGhst") || "", m = n.className, J = m.split("pbCsr")[1] || "";
        m = m.split("pbAlp")[1] || "";
        if ("CS" === x) {
          var K = "_";
        } else {
          K = x, 3 === K.length && (K = K.substr(0, 2)), K = ya[parseInt(K, 16)] || "~";
        }
        J = J.split(" ")[0];
        m = m.split(" ")[0];
        m = 10 - P(m);
        x ? (x = {className:["pbChr" + x + " pbAlp" + m + " pbCsr" + J]}, bb = 1, E = da(n, "b", x, 0, K), e(n), e(E)) : e(n);
      }
    }
    function e(n) {
      T || q || Fa(n, "pbChrCS") && Kb.push(n);
    }
    if (a && !jd) {
      jd = !0;
      var l = 6 > A ? 1 : 0;
      a = ab("SAMP");
      var q = 9 > A, w = 5 <= A && 6 > A, z, E, H, v;
      fc && oa(M, "pbLCD-AX");
      if (a.length) {
        var T = void 0 !== qa.opacity || void 0 !== qa["-moz-opacity"] || void 0 !== qa["-khtml-opacity"], Q = !T && !q && !0, N = !ea || Q || void 0;
        for (H = -1; z = a[++H];) {
          if (Fa(z.parentElement || z.parentNode, "pbLCD")) {
            var xa = z.children;
            for (z = xa.length; z;) {
              var Y = xa[--z];
              switch(Y.tagName.toUpperCase()) {
                case "A":
                  if (N) {
                    for (ea || b(Y), v = Y.children.length; v;) {
                      d(Y.children[--v]);
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
        Kb.length ? (setInterval(Bc, 500), ea ? Ga([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ga([".pbChrCS", "background-position:0 -51px"])) : Bc = null;
        Q && (ea ? Ga([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + C + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        C + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + C + "pbLCD/x3_a90.png)"]) : Ga([".pbAlp1", "background-image:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        C + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + C + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + C + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > db && ($d.onclick = function(a) {
    if (Lb) {
      return Lb = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new kc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Pb = ya[7], Dc = ya[30], ud = ya[113], fb = X(8337) + X(8331), Qb = X(160), yd = X(8194), wd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), xd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), vd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Dc + ya[31]).split(""), pa = 
  [], gb, Ob;
  hd(function(a) {
    if (a && !Ob) {
      var b = F.all || ab("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Fa(d, "pbList") ? hb(d) : Fa(d, "pbFont") && hb(d, !0);
      }
      pa.length && eb();
      Ob = !0;
    }
  });
  kd.prettify = hb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

