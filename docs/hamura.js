PB100 = {};
(function(nd, u, q, od, G, fa, kc, P, lc, mc, ee, xb, pd, sa, fe) {
  function Wa(a, b) {
    var d = P(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function nc(a) {
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
  function oc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var l = P(a[d]), B = P(b[d]);
      if (l !== B) {
        return l > B ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function pc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], l; b < d; ++b) {
      0 > oc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function qc(a) {
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
  function qd() {
    Ba && (rc(), Ba = setInterval(Xa, sc));
  }
  function rc() {
    Ba && (Ba = clearInterval(Ba));
  }
  function Ia() {
    for (var a, b = 0, d = new sa - 0; b < ka.length;) {
      d < ka[0].t ? ++b : (a = ka.splice(b, 1)[0], a.f(a.p));
    }
    ta = ka.length ? xb(Ia, Ja) : 0;
  }
  function rd() {
    ta && (tc(), ta = xb(Ia, Ja));
  }
  function tc() {
    ta && (ta = pd(ta));
  }
  function va(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Ca(a, b) {
    uc && !Ka.length && H(vc);
    Ka.push(a, b);
  }
  function vc() {
    var a = Ka, b;
    for (Ka = []; b = a.shift();) {
      va(b, a.shift());
    }
  }
  function yb(a) {
    var b;
    zb && (b = zb(a));
    va(Za, a);
    onload = La;
    Za = yb = zb = onload = null;
    return b;
  }
  function wc() {
    var a = 9 === Da.offsetWidth;
    Ab !== a && Ca(xc, Ab = a);
  }
  function $a() {
    return Bb = Ma ? Cb ? 2 : Db ? 3 : 1 : 0;
  }
  function ab(a) {
    var b = b || G;
    return sd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function wa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Eb(a, b) {
    var d = G.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function da(a, b, d, e, l) {
    function B(D, I) {
      for (var v in I) {
        switch(v) {
          case "class":
          case "className":
            oa(D, I[v]);
            break;
          default:
            D.setAttribute(v, I[v]);
        }
      }
    }
    function x(D, I) {
      var v = D.style, Y;
      for (Y in I) {
        v[Y] = I[Y];
      }
    }
    if ("style" === b) {
      var w = !0;
      b = Eb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Eb(b);
    }
    bb ? (2 === bb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    bb = 0;
    d && B(b, d);
    e && x(b, e);
    l && !w && b.appendChild(G.createTextNode(l));
    return b;
  }
  function Ea(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function oa(a, b) {
    var d;
    if (!Ea(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function cb(a) {
    if (Ea(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function yc(a) {
    a = da(Fb, "style", {type:"text/css", media:"all"}, 0, a);
    Gb = a.sheet || a.styleSheet;
  }
  function Fa(a) {
    for (var b = Gb, d, e, l = "", B; a.length;) {
      d = a.shift(), e = a.shift(), B = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(B, b.cssRules.length) : l += B;
    }
    l && yc(l);
  }
  function zc(a) {
    function b(e) {
      Hb = e;
      d.onload = d.onerror = La;
      H(a, e);
    }
    if (na(Hb)) {
      H(a, Hb);
    } else {
      if (8 > z) {
        H(a, !1);
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
  function Ac(a, b, d, e, l, B) {
    function x() {
      G.fonts.load('1.6em "' + b + '"').then(function() {
        v(b) ? H(a, Na) : D(!0);
      }, function() {
        zc(Y);
      });
    }
    function w(A) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (Q = new sa - 0, !1) : A < new sa - Q;
    }
    function D(A) {
      A && (Q = new sa - 0);
      v(b) ? a(Na) : w(pa) ? t ? a(0) : 9 > z ? H(a, 0) : zc(Y) : H(D);
    }
    function I() {
      var A = -1, E;
      I = null;
      J = ["sans-serif", "serif"];
      m = da(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (K = {}; E = J[++A];) {
        m.style.fontFamily = E, K[E] = m.offsetWidth;
      }
    }
    function v(A) {
      var E = 0, Z = -1, Ib, Jb, Kb = 0;
      I && I();
      for (M.appendChild(m); Ib = J[++Z];) {
        if (m.style.fontFamily = '"' + A + '",' + Ib, m.offsetWidth !== K[Ib]) {
          E = 1;
          break;
        }
      }
      if (E && l) {
        for (Jb in l) {
          if (m.innerHTML = Jb, A = m.offsetWidth, m.innerHTML = l[Jb], Kb = A === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Kb) {
            break;
          }
        }
      }
      wa(m);
      return Na = E + Kb;
    }
    function Y(A) {
      (t = A) ? N(!0) : a(0);
    }
    function N(A) {
      A && (Q = new sa - 0);
      for (E in d) {
        if (v(E)) {
          n = da(M, "div", {"aria-hidden":"true", className:e, id:e});
          A = d[E];
          var E = Gb, Z = Bc.all || 0;
          E ? E.addImport ? E.addImport(A, Z) : E.insertRule && E.insertRule('@import "' + A + '"', Z) : yc('@import "' + A + '"');
          Bc.all = ++Z;
          H(R, !0);
        } else {
          w(100) ? (delete d[E], H(N, !0)) : H(N);
        }
        return;
      }
      a(0);
    }
    function R(A) {
      A && (Q = new sa - 0);
      1 < n.offsetWidth ? (wa(n), pa = 100, H(D, !0)) : w(pa) ? (wa(n), a(0)) : H(R);
    }
    var pa = B || 5000, Q, t, m, n, J, K, Na;
    (function() {
      var A;
      if (u.MeeGo || 2.2 > u.AOSP || u.WebOS || u.UCWEB || 10 > u.TridentMobile || u.NDS || u.NDSi || u.N3DS) {
        return !1;
      }
      if (6 > z) {
        return !0;
      }
      var E = da(Fb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), Z = (Z = E.sheet || E.styleSheet) ? (A = 10 <= z ? Z.cssRules : Z.rules || Z.cssRules) && (A = A[0]) ? A.cssText : Z.cssText || "" : "";
      A = 0 < Z.indexOf("src") && 0 === Z.indexOf("@font-face");
      wa(E);
      return A;
    })() ? !G.fonts || 603 > db ? D(!0) : x() : H(a, 0);
  }
  function Cc() {
    Lb = !Lb;
    for (var a = -1, b; b = Mb[++a];) {
      b.style.visibility = Lb ? "" : "hidden";
    }
  }
  function td(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Nb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function eb() {
    eb = null;
    ud(Ob, "PB-100", {"PB-100_canTTF":F + "pbFont/ttf.css", "PB-100_canWOFF":F + "pbFont/woff.css", "PB-100_canEOT":F + "pbFont/eot.css", "PB-100_canSVG":F + "pbFont/svg.css"}, "pbFont-testCssReady", {h:fb}, 5000);
  }
  function Ob(a) {
    (gb = a) ? Pb() : Oa ? Dc(!0) : na(Oa) ? Pb() : vd(Dc);
  }
  function Dc(a) {
    a && (oa(M, "pbList-noWebFont"), ea ? Fa([".pbList font:after", "content:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Fa([".pbList font", "background-image:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Pb();
  }
  function Pb() {
    for (Ob = Ac = null; qa.length;) {
      hb(qa.shift(), qa.shift());
    }
  }
  function hb(a, b) {
    function d(B) {
      B = B.childNodes;
      for (var x = -1, w; w = B[++x];) {
        switch(w.nodeType) {
          case 1:
            d(w);
            break;
          case 3:
            w.data && w.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(w);
        }
      }
    }
    var e = [];
    if (Ob) {
      -1 === qa.indexOf(a) && (qa.push(a, b), Qb && eb && eb());
    } else {
      var l = qa.indexOf(a);
      0 <= l && qa.splice(l, 2);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== gb && (l = l.split(fb).join(Ec)), b ? a.data = l : wd(l.split("\r").join("").split("&yen;").join(xd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Rb).split("&amp;").join("&"), a);
      }
    }
  }
  function wd(a, b) {
    function d(m, n) {
      for (var J = ""; n;) {
        n & 1 && (J += m), n >>= 1, m += m;
      }
      return J;
    }
    function e(m, n, J) {
      for (var K, Na = -1, A, E; K = n[++Na];) {
        for (; 0 <= (A = m.indexOf(K));) {
          E = K.length, m = m.substr(0, A) + d(J, E) + m.substr(A + E);
        }
      }
      return m;
    }
    function l(m) {
      var n = P(m), J = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(J) + J.length, n <= m.length) ? n : 0;
    }
    var B = " area line str cmd fnc syb".split(" "), x = [], w = "", D = -1, I, v;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = P(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      w = d("+", a.length);
    } else {
      for (0 <= (D = l(a)) && (w = d("|", D), --D); v = a.charAt(++D);) {
        v === Rb || I ? (w += "~", v === Rb && (I = !I)) : w += v;
      }
      w = e(w, yd, "^");
      w = e(w, zd, "{");
      w = e(w, Ad, "}");
    }
    D = 0;
    for (I = a.length; D < I; ++D) {
      v = a.charAt(D);
      var Y = v === Sb, N = " " === v;
      v = Y ? " " : v;
      var R = w.charAt(D), pa = Q, Q = "|" === R;
      R = B["+|~{}^".indexOf(R) + 1];
      if ("\n" !== v) {
        if (gb || !Oa) {
          8 > z && N && (v = D === I - 1 ? Sb : Bd), 2 === gb && a.substr(D, 2) === fb && (v = fb, ++D), N = N && "str" === R ? ' class="pbList-strsp"' : Y ? "" : !N && R ? ' class="pbList-' + R + '"' : "";
        } else {
          var t = xa.indexOf(v);
          t = -1 === t ? "" : xa.indexOf(v).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          N = N && "str" === R ? ' class="pbList-strsp"' : N || !t ? "" : R ? ' class="' + (t ? t + " " : "") + "pbList-" + R + '"' : ' class="' + t + '"';
        }
        pa && Y && (db || ib) && (v = Sb);
        x.push("<font" + N + ">" + v + "</font>");
      } else {
        x.push(v);
      }
    }
    x = x.join("");
    if (1 === b.nodeType) {
      b.innerHTML = x;
    } else {
      for (B = Eb("font", x); x = B.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(x, b);
      }
      wa(b);
    }
  }
  var p, r, c = fa.userAgent, U = fa.appVersion, Tb = P(U) | 0, C = fa.platform, Ub = G.documentElement, Fc = Ub && Ub.style, Vb = G.documentMode, Wb = kc.width, Xb = kc.height, Gc = q.HTMLAudioElement, Hc = q.performance, Ic = q.Int8Array, Cd = void 0 !== q.ontouchstart, ya = k(U, "Version/") || k(c, "Version/"), Ga = void 0 !== Fc.MozAppearance, Jc = q.operamini, Yb = f(c, "UCWEB"), Dd = Yb && k(c, " U2/"), Ed = Yb && k(c, "; wds "), Zb = k(c.split("_").join("."), "; iPh OS "), Fd = k(c, "; Adr "), 
  Kc = f(U, "YJApp-ANDROID"), ca = f(C, "Android") || Ga && f(U, "Android") || Kc, S = k(C, "Android ") || k(U, "Android ") || k(c, "Android ") || Fd, $b = f(C, "Linux"), Lc = "MacIntel" === C && void 0 !== fa.standalone, za = !Jc && q.opera, Gd = za && (za.version && "function" === typeof za.version ? za.version() : pc(k(c, "Opera "), ya, "" + Tb)), Mc = q.opr, jb = !za && (G.all || Vb), aa = jb && (Vb ? Vb : q.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  q.attachEvent ? 5 : 4), ac = !jb && Ub.msContentZoomFactor, kb = !ac && q.chrome, bc = Ga && k(c, "Goanna/"), ha = !bc && Ga && k(c, "rv:"), Hd = k(c, "Firefox/"), Id = k(c, "Opera/"), Jd = q.FNRBrowser, la = Wa(c, "AppleWebKit/"), Pa = k(c, "Chrome/"), Nc = k(c, "OPR/"), Kd = k(U, "KHTML/"), Ld = k(c.toLowerCase(), "iris"), Md = k(c, "Silk/"), Qa = Wa(c, "SamsungBrowser/"), Ra;
  if (Ra = !Qa) {
    a: {
      for (var Oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      lb, cc = Oc.length; lb = Oc[--cc];) {
        if (f(c, lb)) {
          Ra = 2 > P(ya) ? ya : 0.9;
          break a;
        }
      }
      var Pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (cc = Pc.length; lb = Pc[--cc];) {
        if (f(c, lb)) {
          Ra = ya;
          break a;
        }
      }
      Ra = void 0;
    }
  }
  var Qc = Ra, Rc = kb && 534.3 >= la, Sc = nc(C), Nd = Sc && !f(c, C) && nc(c), Od = Cd && (la || Ga) && Nd || !S && Kc, Pd = !!q.ReactNativeWebView, mb;
  if (mb = Sc) {
    a: {
      var Tc = void 0;
      for (Tc in q) {
        if (0 === Tc.indexOf("SlexAPI_")) {
          mb = !0;
          break a;
        }
      }
      mb = void 0;
    }
  }
  var Qd = mb, Uc = q.puffinDevice, nb = Uc && Uc.clientInfo, Sa = nb && "iOS" === nb.os && nb.osVersion, Rd = Sa && nb.model, dc = !aa && G.registerElement, Sd = !aa && G.execCommand, Td = $b && dc && "11.0.696.34" === Pa, Ud = q._firefoxTV_playbackStateObserverJava, Vd = Wa(c, "diordnA "), ob, y;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var g = Id;
    } else {
      if ("New Nintendo 3DS" === C || f(c, "iPhone OS 6_0") && 320 === Wb && 240 === Xb) {
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
                      h = "PS3", g = y, L = h, O = y, 0 > oc("4.10", y) && (p = "Sony", r = y);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Tb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Vc = 3.4;
                            L = h;
                            O = 2;
                            var pb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Zb || Sa || Lc) {
                              if (Sa) {
                                switch(g = Sa, Rd.substr(0, 4)) {
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
                                Zb ? g = Zb : g = k(U.split("_").join("."), "OS ");
                                if (!g || Jd) {
                                  g = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : fa.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : lc.isNaN ? 9.2 : q.SharedWorker ? Hc && Hc.now ? 8.0 : 8.4 : Sd ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Ic ? 4.3 : Gc ? 4.1 : 3.2;
                                }
                                var W = Wb === 1.5 * Xb || 1.5 * Wb === Xb;
                                0 === C.indexOf("iPhone") ? (ma = "iPhone", ba = !0) : 0 === C.indexOf("iPad") || Lc ? (ma = "iPad", V = !0) : 0 === C.indexOf("iPod") && (ma = "iPod", Wc = !0);
                              }
                              var ec;
                              if (ec = !Sa) {
                                var fc;
                                if (!(fc = fa.standalone)) {
                                  var qb;
                                  if (qb = V || 12 > g) {
                                    a: {
                                      for (var Wd in G) {
                                        if ("webkitFullscreenEnabled" === Wd) {
                                          qb = !0;
                                          break a;
                                        }
                                      }
                                      qb = void 0;
                                    }
                                  }
                                  fc = qb;
                                }
                                ec = fc || 11 <= g && 13 > g && fa.mediaDevices;
                              }
                              ec ? (p = "SafariMobile", L = "Safari", O = g) : p = "iOSWebView";
                              h = "iOS";
                              r = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", p = "AOSP", r = 2.2, L = p, O = r, ca = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", r = 2.2, L = p, O = r;
                                } else {
                                  if (y = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = y;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ha ? "1.0.1" : 19 > ha ? 1.1 : 27 > ha ? 1.2 : 29 > ha ? 1.3 : 31 > ha ? 1.4 : 33 > ha ? 2.0 : 35 > ha ? 2.1 : 38 > ha ? 2.2 : 45 > ha ? 2.5 : 2.6, f(c, "Mobile") ? ba = !0 : f(c, "Tablet") && (V = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), L = h, O = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (y = k(c, "Tizen ")) {
                                          h = "Tizen", g = y, L = "Samsung", O = Qa, p = L, r = O, ba = !0;
                                        } else {
                                          if (y = k(c, "Windows Phone ") || k(U, "Windows Phone OS ") || Ed) {
                                            var rb = !0;
                                            g = y;
                                            ba = !0;
                                          } else {
                                            if (ac && "ARM" === C) {
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
                                                      var T = V = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        ia = !0, g = 6, T = V = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          ia = !0, g = 5, T = V = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            ia = !0, g = 5, T = V = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              ia = !0, g = 5 <= P(S) ? 5 : 4, T = V = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                ia = !0, g = 3, T = V = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  ia = !0, g = 2, T = V = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    ia = !0, g = 1, T = V = !0;
                                                                  } else {
                                                                    if (y = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = y, p = "AOSP", r = 2.2, L = p, O = r;
                                                                    } else {
                                                                      if (Ud) {
                                                                        ia = !0, g = S || Vd, T = !0;
                                                                      } else {
                                                                        if (f(c, "AmazonWebAppPlatform") || f(c, "; AFT")) {
                                                                          ia = !0, g = S, T = !0;
                                                                        } else {
                                                                          if (f(c, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(c, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === c.indexOf("Windows Mobile;") || Ld) {
                                                                                h = "WindowsMobile", pb = !0;
                                                                              } else {
                                                                                if ("WinCE" === C) {
                                                                                  h = C, pb = !0;
                                                                                } else {
                                                                                  if ("Win16" === C || "Win32" === C || "Win64" === C) {
                                                                                    h = C, g = k(c, "Windows NT ") || k(c, "Windows ");
                                                                                  } else {
                                                                                    if (0 === C.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === C ? "MacPPC" : C;
                                                                                      if (y = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = y;
                                                                                      }
                                                                                      var Xc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = ya, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ca && Ga ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= P(S) ? W = S : W = {min:2.2}, g = W) : ca && za ? (S ? W = S : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ba = !0) : S ? (g = 
                                                                                      S, ca = !0) : $b && Od || Pd || Qd ? (ob = !0, Qa ? W = {min:4.4} : kb && !Rc || Mc || Nc ? W = {min:4} : (W = S = void 0 !== Fc.touchAction ? {min:5} : dc ? 4.4 : Ic ? fa.connection ? q.searchBoxJavaBridge_ || kb ? lc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= la ? 3 : 533 <= la ? Gc ? 2.3 : 2.2 : 530 <= la ? 2.0 : 1.5, Qc && (p = "Samsung", r = Qc)), g = W, ca = !0) : Td ? (g = {min:5}, ob = ca = !0) : $b && (f(c, "Ubuntu") ? 
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
  ia || ca && ob && Md ? h = "FireOS" : ca && (h = h || "Android");
  rb && (h = "WindowsPhone");
  p || (T = T || ca, za ? (p = T || pb || ba || V ? "PrestoMobile" : "Presto", r = Gd) : jb ? ((W = Wa(U, "Trident/") + 4) && W !== aa && (L = "IEHost", O = W), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), pb || ba || V || Wc ? p = "TridentMobile" : Xc && 5 <= aa ? (p = "Tasman", L = "MacIE", O = aa) : (p = "Trident", Xc && (L = "MacIE", O = aa)), r = aa) : ac ? (p = rb ? "EdgeMobile" : "EdgeHTML", r = k(U, "Edge/")) : bc ? (p = "Goanna", 
  r = bc) : Ga ? (p = T ? "Fennec" : "Gecko", r = ha || Hd) : Qa ? (p = "Samsung", r = Qa) : (y = Vc || k(c, "NetFront/")) ? (p = "NetFront", r = y) : (y = k(c, "iCab")) ? (p = "iCab", r = y) : (y = pc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Jc && ya) ? (p = "OperaMini", r = y, h || (f(c, "iPhone") ? ma = "iPhone" : f(c, "iPad") ? ma = "iPad" : f(c, "iPod") && (ma = "iPod"), ma && (h = "iOS"))) : Yb ? (p = "UCWEB", r = Dd) : Kd ? (p = "KHTML", r = Tb) : ca && Rc ? (p = "AOSP", r = S) : kb || 
  Mc || Nc ? (p = T ? "ChromiumMobile" : "Chromium", r = Pa) : ca && dc ? (p = "ChromeWebView", r = 5 > P(S) ? S : Pa) : ca && (ya || ob) ? (p = "AOSP", r = S) : Pa ? (p = T ? "ChromiumMobile" : "Chromium", r = Pa) : la && (p = "WebKit", r = la));
  h && (u.PLATFORM = h, g ? (u.PLATFORM_VERSION = qc(g), u[h] = g === g + "" ? P(g) : g) : u[h] = !0);
  p && (u.ENGINE = p, r ? (u.ENGINE_VERSION = qc(r), u[p] = r === r + "" ? P(r) : r) : u[p] = !0, L || (L = p, O = r));
  var La = od, Ta = [], sd = !!G.getElementsByTagName, M = G.body, ra = M.style, z = u.Trident || u.TridentMobile, sb = u.Tasman, Yc = u.EdgeHTML || u.EdgeMobile, Zc = u.Presto || u.PrestoMobile, tb = u.Gecko, ub = u.Goanna, db = u.WebKit, ib = u.SafariMobile || u.iOSWebView, Xd = u.OperaMini && u.UCWEB, gc = u.Win32 || u.Win64, Yd = P(fa.userAgent.split("Edg/")[1]), $c = P(fa.appVersion.split("Trident/")[1]) + 4;
  z || sb || (new mc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ad = G.scripts, Zd = (sb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : "modern") + ".css", bd = 0 === location.href.indexOf("https"), Za = [], Ab, Bb = 0, hc, Oa, ea, $d = na(ra.transform) ? "transform" : na(ra["-o-transform"]) ? "-o-transform" : na(ra["-ms-transform"]) ? "-ms-transform" : na(ra["-moz-transform"]) ? "-moz-transform" : na(ra["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ha = ad[ad.length - 1].src.split("/");
  --Ha.length;
  var ae = Ha.join("/");
  0 <= "http: https:".indexOf(Ha[0]) && Ha.splice(0, 3);
  Ha = Ha.join("/");
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
    var d = arguments, e = d.length - 2 - b, l = this.slice(a, a + b), B;
    if (0 < e) {
      var x = this.length - 1;
      for (B = a + b; x >= B; --x) {
        this[x + e] = this[x];
      }
    } else {
      if (0 > e) {
        x = a + b;
        for (B = this.length; x < B; ++x) {
          this[x + e] = this[x];
        }
        this.length += e;
      }
    }
    x = 2;
    for (B = d.length; x < B; ++x) {
      this[x - 2 + a] = d[x];
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
  var dd = function(a) {
    Ya.length || (Ba = setInterval(Xa, sc));
    Ya.push({f:a, g:++cd});
    return cd;
  };
  var Ya = [], sc = 999, cd = 0, Ba;
  if (5 > z || sb) {
    q._wdb_onlooptimer = Xa, Xa = "_wdb_onlooptimer()";
  }
  Ta.push(function() {
    6.1 > ib && ed(qd);
    vb(rc);
  });
  var H = function(a, b, d) {
    ka.length || (ta = xb(Ia, Ja));
    ka.push({f:a, p:b, g:++fd, t:new sa - 0 + (Ja < d ? d : Ja)});
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
  var ka = [], Ja = 64, fd = 0, ta;
  if (5 > z || sb) {
    q._wdb_ontimer = Ia, Ia = "_wdb_ontimer()";
  }
  Ta.push(function() {
    6.1 > ib && ed(rd);
    vb(tc);
  });
  var Aa = q.matchMedia, Ka = [], uc, Da;
  Za.push(function() {
    Da = da(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Ua(function() {
      uc = !0;
      Ka.length && H(vc);
    });
  });
  var Ua = function(a) {
    Za.push(a);
  };
  var vb = function(a) {
    hd.push(a);
  };
  var hd = [], zb = q.onload, id = q.onunload;
  onload = yb;
  onunload = function(a) {
    var b;
    id && (b = id(a));
    va(hd, a);
    onunload = La;
    return b;
  };
  var jd = function(a) {
    xc.push(a);
  };
  var xc = [];
  Ua(function() {
    wc();
    dd(wc);
  });
  var be = function(a) {
    Va.push(a);
  };
  var Va = [], Ma, Db, Cb;
  if (10 <= z || Yc || gc && Yd) {
    Aa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Ma = Db = a.matches;
      Ca(Va, $a());
    }), Aa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Ma = Cb = a.matches;
      Ca(Va, $a());
    }), Aa("(-ms-high-contrast:active)").addListener(function(a) {
      Ma = a.matches;
      Ca(Va, $a());
    });
  } else {
    if (10 > z || gc && (44 <= tb || ub)) {
      var wb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = G.defaultView, d = Bb, e = b ? b.getComputedStyle(Da, null) : Da.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Ma = "#123456" !== b && "rgb(18,52,86)" !== b, Db = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Cb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== $a() && Ca(Va, Bb), !0;
        }
      };
      Ua(function() {
        Da.style.color = "#123456";
        Da.style.backgroundColor = "#123456";
        60 > tb || ub ? wb() : wb() && dd(wb, 1000);
        wb = null;
      });
    }
  }
  var ce = [];
  Aa && Aa("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    Ca(ce, a.matches);
  });
  var ic = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    va(ic, !0);
  }, onafterprint = function() {
    va(ic, !1);
  }, vb(function() {
    onbeforeprint = onafterprint = La;
  })) : Aa && Aa("print").addListener(function(a) {
    va(ic, a.matches);
  });
  var ed = function(a) {
    kd.push(a);
  };
  var kd = [], jc = q.onscroll;
  onscroll = function(a) {
    var b;
    jc && (b = jc(a));
    yb || va(kd);
    return b;
  };
  vb(function() {
    onscroll = jc = La;
  });
  var de = ab("html")[0];
  var Fb = ab("head")[0];
  var bb;
  var Gb = void 0;
  var Bc = {};
  Ua(function() {
    if (Ab) {
      if (!na(ea) && (ea = 1.8 <= tb || ub || 8 <= z || Yc || 530 <= db || 3.2 <= ib, !ea)) {
        var a = da(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth;
        wa(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Hb;
  9 > z && Ua(function(a) {
    a = da(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    wa(a);
  });
  var vd = function(a) {
    function b() {
      l || (d.complete ? (l = !0, d.width || H(a, !1)) : e = H(b));
    }
    if (ld) {
      var d = new Image, e, l;
      d.onerror = function() {
        (!z || 11 === z || 11 === $c) && d.width || l || (l = !0, e && gd(e), e = H(a, !1));
      };
      d.onload = function() {
        l = !0;
        e && gd(e);
        Zc && !d.complete ? e = H(a, !1) : (Oa = !0, H(a, !0));
      };
      d.src = ld;
      8 > Zc && d.complete ? (Oa = !0, H(a, !0)) : l || (e = H(b));
    } else {
      H(a, !1);
    }
  };
  var ld = bd ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var ud = Ac;
  for (11 === $c && 5.5 > z && da(Fb, "link", {href:ae + "/" + Zd, rel:"stylesheet", type:"text/css"}); Ta.length;) {
    Ta.shift()();
  }
  Ta = null;
  var X = String.fromCharCode, F = bd ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", xa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > z || gc && (44 <= tb || ub)) && be(function(a) {
    cb("jsHcm");
    cb("jsHcmWob");
    cb("jsHcmBow");
    if (a) {
      switch(($d || 9 === z || 5.5 <= z && 9 > z && hc) && oa(M, "jsCanRotate"), a) {
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
  var Mb = [], Lb, Nb, md;
  jd(function(a) {
    function b(t) {
      var m = t.getAttribute("pbtip") || "", n = m.charAt(0), J = "_" === n;
      m = J ? m.charAt(2) : n;
      n = J ? "Btm" : "";
      var K = t.getAttribute("title") || "";
      oa(t, "pbTipPos" + m.toUpperCase());
      da(t, "div", {className:"pbTip" + n}, {width:K.length + l + "em"}, K);
      da(t, "div", {className:"pbTail" + n});
      x && J && (t.focus(), t.blur());
    }
    function d(t) {
      if (ea && N) {
        e(t);
      } else {
        var m = t.getAttribute("pbGhst") || "", n = t.className, J = n.split("pbCsr")[1] || "";
        n = n.split("pbAlp")[1] || "";
        if ("CS" === m) {
          var K = "_";
        } else {
          K = m, 3 === K.length && (K = K.substr(0, 2)), K = xa[parseInt(K, 16)] || "~";
        }
        J = J.split(" ")[0];
        n = n.split(" ")[0];
        n = 10 - P(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + J]}, bb = 1, D = da(t, "b", m, 0, K), e(t), e(D)) : e(t);
      }
    }
    function e(t) {
      Y || B || Ea(t, "pbChrCS") && Mb.push(t);
    }
    if (a && !md) {
      md = !0;
      var l = 6 > z ? 1 : 0;
      a = ab("SAMP");
      var B = 9 > z, x = 5 <= z && 6 > z, w, D, I, v;
      hc && oa(M, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== ra.opacity || void 0 !== ra["-moz-opacity"] || void 0 !== ra["-khtml-opacity"], N = !Y && !B && !0, R = !ea || N || void 0;
        for (I = -1; w = a[++I];) {
          if (Ea(w.parentElement || w.parentNode, "pbLCD")) {
            var pa = w.children;
            for (w = pa.length; w;) {
              var Q = pa[--w];
              switch(Q.tagName.toUpperCase()) {
                case "A":
                  if (R) {
                    for (ea || b(Q), v = Q.children.length; v;) {
                      d(Q.children[--v]);
                    }
                  }
                  Xd ? Q.setAttribute("href", "javascript:void(0)") : Q.onclick = td;
                  break;
                case "B":
                  R && d(Q);
              }
            }
          }
        }
        Mb.length ? (setInterval(Cc, 500), ea ? Fa([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Fa([".pbChrCS", "background-position:0 -51px"])) : Cc = null;
        N && (ea ? Fa([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + F + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        F + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + F + "pbLCD/x3_a90.png)"]) : Fa([".pbAlp1", "background-image:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        F + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + F + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + F + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > db && (de.onclick = function(a) {
    if (Nb) {
      return Nb = !1, a.preventDefault(), !1;
    }
  });
  6 === z && (new mc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Rb = xa[7], Ec = xa[30], xd = xa[113], fb = X(8337) + X(8331), Sb = X(160), Bd = X(8194), zd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Ad = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), yd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ec + xa[31]).split(""), qa = 
  [], gb, Qb;
  jd(function(a) {
    if (a && !Qb) {
      var b = G.all || ab("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ea(d, "pbList") ? hb(d) : Ea(d, "pbFont") && hb(d, !0);
      }
      qa.length && eb();
      Qb = !0;
    }
  });
  nd.prettify = hb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

