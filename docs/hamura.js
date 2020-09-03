PB100 = {};
(function(jd, u, q, kd, G, ha, jc, P, kc, lc, be, ub, ld, sa, ce) {
  function Ta(a, b) {
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
      var l = P(a[d]), B = P(b[d]);
      if (l !== B) {
        return l > B ? 1 : -1;
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
  function oa(a) {
    return void 0 !== a;
  }
  function Ua() {
    for (var a, b = 0; b < Va.length; ++b) {
      a = Va[b], a.f();
    }
  }
  function md() {
    Ba && (qc(), Ba = setInterval(Ua, rc));
  }
  function qc() {
    Ba && (Ba = clearInterval(Ba));
  }
  function Ha() {
    for (var a, b = 0, d = new sa - 0; b < la.length;) {
      d < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    ta = la.length ? ub(Ha, Ia) : 0;
  }
  function nd() {
    ta && (sc(), ta = ub(Ha, Ia));
  }
  function sc() {
    ta && (ta = ld(ta));
  }
  function ca(a, b) {
    for (var d = 0, e = a.length; d < e; ++d) {
      a[d](b);
    }
  }
  function vb(a) {
    var b;
    wb && (b = wb(a));
    ca(Wa, a);
    onload = Ja;
    Wa = vb = wb = onload = null;
    return b;
  }
  function od() {
    var a = 9 === Ca.offsetWidth;
    tc !== a && ca(uc, tc = a);
  }
  function Xa() {
    return xb = Ka ? yb ? 2 : zb ? 3 : 1 : 0;
  }
  function Ya(a) {
    var b = b || G;
    return pd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function va(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Ab(a, b) {
    var d = G.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function fa(a, b, d, e, l) {
    function B(D, I) {
      for (var v in I) {
        switch(v) {
          case "class":
          case "className":
            pa(D, I[v]);
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
      b = Ab("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Ab(b);
    }
    Za ? (2 === Za && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    Za = 0;
    d && B(b, d);
    e && x(b, e);
    l && !w && b.appendChild(G.createTextNode(l));
    return b;
  }
  function Da(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function pa(a, b) {
    var d;
    if (!Da(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function $a(a) {
    if (Da(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function vc(a) {
    a = fa(Bb, "style", {type:"text/css", media:"all"}, 0, a);
    Cb = a.sheet || a.styleSheet;
  }
  function Ea(a) {
    for (var b = Cb, d, e, l = "", B; a.length;) {
      d = a.shift(), e = a.shift(), B = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(B, b.cssRules.length) : l += B;
    }
    l && vc(l);
  }
  function wc(a) {
    function b(e) {
      Db = e;
      d.onload = d.onerror = Ja;
      H(a, e);
    }
    if (oa(Db)) {
      H(a, Db);
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
  function xc(a, b, d, e, l, B) {
    function x() {
      G.fonts.load('1.6em "' + b + '"').then(function() {
        v(b) ? H(a, La) : D(!0);
      }, function() {
        wc(Y);
      });
    }
    function w(A) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (Q = new sa - 0, !1) : A < new sa - Q;
    }
    function D(A) {
      A && (Q = new sa - 0);
      v(b) ? a(La) : w(qa) ? t ? a(0) : 9 > z ? H(a, 0) : wc(Y) : H(D);
    }
    function I() {
      var A = -1, E;
      I = null;
      J = ["sans-serif", "serif"];
      m = fa(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (K = {}; E = J[++A];) {
        m.style.fontFamily = E, K[E] = m.offsetWidth;
      }
    }
    function v(A) {
      var E = 0, Z = -1, Eb, Fb, Gb = 0;
      I && I();
      for (M.appendChild(m); Eb = J[++Z];) {
        if (m.style.fontFamily = '"' + A + '",' + Eb, m.offsetWidth !== K[Eb]) {
          E = 1;
          break;
        }
      }
      if (E && l) {
        for (Fb in l) {
          if (m.innerHTML = Fb, A = m.offsetWidth, m.innerHTML = l[Fb], Gb = A === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Gb) {
            break;
          }
        }
      }
      va(m);
      return La = E + Gb;
    }
    function Y(A) {
      (t = A) ? N(!0) : a(0);
    }
    function N(A) {
      A && (Q = new sa - 0);
      for (E in d) {
        if (v(E)) {
          n = fa(M, "div", {"aria-hidden":"true", className:e, id:e});
          A = d[E];
          var E = Cb, Z = yc.all || 0;
          E ? E.addImport ? E.addImport(A, Z) : E.insertRule && E.insertRule('@import "' + A + '"', Z) : vc('@import "' + A + '"');
          yc.all = ++Z;
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
      1 < n.offsetWidth ? (va(n), qa = 100, H(D, !0)) : w(qa) ? (va(n), a(0)) : H(R);
    }
    var qa = B || 5000, Q, t, m, n, J, K, La;
    (function() {
      var A;
      if (u.MeeGo || 2.2 > u.AOSP || u.WebOS || u.UCWEB || 10 > u.TridentMobile || u.NDS || u.NDSi || u.N3DS) {
        return !1;
      }
      if (6 > z) {
        return !0;
      }
      var E = fa(Bb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), Z = (Z = E.sheet || E.styleSheet) ? (A = 10 <= z ? Z.cssRules : Z.rules || Z.cssRules) && (A = A[0]) ? A.cssText : Z.cssText || "" : "";
      A = 0 < Z.indexOf("src") && 0 === Z.indexOf("@font-face");
      va(E);
      return A;
    })() ? !G.fonts || 603 > ab ? D(!0) : x() : H(a, 0);
  }
  function zc() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function qd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Jb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function bb() {
    bb = null;
    rd(Kb, "PB-100", {"PB-100_canTTF":F + "pbFont/ttf.css", "PB-100_canWOFF":F + "pbFont/woff.css", "PB-100_canEOT":F + "pbFont/eot.css", "PB-100_canSVG":F + "pbFont/svg.css"}, "pbFont-testCssReady", {h:cb}, 5000);
  }
  function Kb(a) {
    (db = a) ? Lb() : Ma ? Ac(!0) : oa(Ma) ? Lb() : sd(Ac);
  }
  function Ac(a) {
    a && (pa(M, "pbList-noWebFont"), da ? Ea([".pbList font:after", "content:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ea([".pbList font", "background-image:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = xc = null; wa.length;) {
      eb(wa.shift(), Mb.shift());
    }
  }
  function eb(a, b) {
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
    if (Kb) {
      -1 === wa.indexOf(a) && (wa.push(a), Mb.push(b), Nb && bb && bb());
    } else {
      var l = wa.indexOf(a);
      0 <= l && wa.splice(l, 1) && Mb.splice(l, 1);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== db && (l = l.split(cb).join(Bc)), b ? a.data = l : td(l.split("\r").join("").split("&yen;").join(ud).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function td(a, b) {
    function d(m, n) {
      for (var J = ""; n;) {
        n & 1 && (J += m), n >>= 1, m += m;
      }
      return J;
    }
    function e(m, n, J) {
      for (var K, La = -1, A, E; K = n[++La];) {
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
        v === Ob || I ? (w += "~", v === Ob && (I = !I)) : w += v;
      }
      w = e(w, vd, "^");
      w = e(w, wd, "{");
      w = e(w, xd, "}");
    }
    D = 0;
    for (I = a.length; D < I; ++D) {
      v = a.charAt(D);
      var Y = v === Pb, N = " " === v;
      v = Y ? " " : v;
      var R = w.charAt(D), qa = Q, Q = "|" === R;
      R = B["+|~{}^".indexOf(R) + 1];
      if ("\n" !== v) {
        if (db || !Ma) {
          8 > z && N && (v = D === I - 1 ? Pb : yd), 2 === db && a.substr(D, 2) === cb && (v = cb, ++D), N = N && "str" === R ? ' class="pbList-strsp"' : Y ? "" : !N && R ? ' class="pbList-' + R + '"' : "";
        } else {
          var t = xa.indexOf(v);
          t = -1 === t ? "" : xa.indexOf(v).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          N = N && "str" === R ? ' class="pbList-strsp"' : N || !t ? "" : R ? ' class="' + (t ? t + " " : "") + "pbList-" + R + '"' : ' class="' + t + '"';
        }
        qa && Y && (ab || fb) && (v = Pb);
        x.push("<font" + N + ">" + v + "</font>");
      } else {
        x.push(v);
      }
    }
    x = x.join("");
    if (1 === b.nodeType) {
      b.innerHTML = x;
    } else {
      for (B = Ab("font", x); x = B.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(x, b);
      }
      va(b);
    }
  }
  var p, r, c = ha.userAgent, U = ha.appVersion, Qb = P(U) | 0, C = ha.platform, Rb = G.documentElement, Cc = Rb && Rb.style, Sb = G.documentMode, Tb = jc.width, Ub = jc.height, Dc = q.HTMLAudioElement, Ec = q.performance, Fc = q.Int8Array, zd = void 0 !== q.ontouchstart, ya = k(U, "Version/") || k(c, "Version/"), Fa = void 0 !== Cc.MozAppearance, Gc = q.operamini, Vb = f(c, "UCWEB"), Ad = Vb && k(c, " U2/"), Bd = Vb && k(c, "; wds "), Wb = k(c.split("_").join("."), "; iPh OS "), Cd = k(c, "; Adr "), 
  Hc = f(U, "YJApp-ANDROID"), ea = f(C, "Android") || Fa && f(U, "Android") || Hc, S = k(C, "Android ") || k(U, "Android ") || k(c, "Android ") || Cd, Xb = f(C, "Linux"), Ic = "MacIntel" === C && void 0 !== ha.standalone, za = !Gc && q.opera, Dd = za && (za.version && "function" === typeof za.version ? za.version() : oc(k(c, "Opera "), ya, "" + Qb)), Jc = q.opr, gb = !za && (G.all || Sb), aa = gb && (Sb ? Sb : q.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  q.attachEvent ? 5 : 4), Yb = !gb && Rb.msContentZoomFactor, hb = !Yb && q.chrome, Zb = Fa && k(c, "Goanna/"), ia = !Zb && Fa && k(c, "rv:"), Ed = k(c, "Firefox/"), Fd = k(c, "Opera/"), Gd = q.FNRBrowser, ma = Ta(c, "AppleWebKit/"), Na = k(c, "Chrome/"), Kc = k(c, "OPR/"), Hd = k(U, "KHTML/"), Id = k(c.toLowerCase(), "iris"), Jd = k(c, "Silk/"), Oa = Ta(c, "SamsungBrowser/"), Pa;
  if (Pa = !Oa) {
    a: {
      for (var Lc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      ib, $b = Lc.length; ib = Lc[--$b];) {
        if (f(c, ib)) {
          Pa = 2 > P(ya) ? ya : 0.9;
          break a;
        }
      }
      var Mc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for ($b = Mc.length; ib = Mc[--$b];) {
        if (f(c, ib)) {
          Pa = ya;
          break a;
        }
      }
      Pa = void 0;
    }
  }
  var Nc = Pa, Oc = hb && 534.3 >= ma, Pc = mc(C), Kd = Pc && !f(c, C) && mc(c), Ld = zd && (ma || Fa) && Kd || !S && Hc, Md = !!q.ReactNativeWebView, jb;
  if (jb = Pc) {
    a: {
      var Qc = void 0;
      for (Qc in q) {
        if (0 === Qc.indexOf("SlexAPI_")) {
          jb = !0;
          break a;
        }
      }
      jb = void 0;
    }
  }
  var Nd = jb, Rc = q.puffinDevice, kb = Rc && Rc.clientInfo, Qa = kb && "iOS" === kb.os && kb.osVersion, Od = Qa && kb.model, ac = !aa && G.registerElement, Pd = !aa && G.execCommand, Qd = Xb && ac && "11.0.696.34" === Na, Rd = q._firefoxTV_playbackStateObserverJava, Sd = Ta(c, "diordnA "), lb, y;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var g = Fd;
    } else {
      if ("New Nintendo 3DS" === C || f(c, "iPhone OS 6_0") && 320 === Tb && 240 === Ub) {
        h = "New3DS", g = k(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === C) {
          h = "N3DS", g = k(c, "Version/"), ma = 535;
        } else {
          if ("Nintendo Swicth" === C) {
            h = "Swicth", g = k(U, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === C) {
              h = "WiiU", g = k(U, "NintendoBrowser/"), ma = k(U, "AppleWebKit/");
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
                    var Sc = 3.3;
                    L = h;
                    O = y;
                  } else {
                    if (y = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = y, L = h, O = y, 0 > nc("4.10", y) && (p = "Sony", r = y);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Qb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Sc = 3.4;
                            L = h;
                            O = 2;
                            var mb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Wb || Qa || Ic) {
                              if (Qa) {
                                switch(g = Qa, Od.substr(0, 4)) {
                                  case "iPho":
                                    var na = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    na = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    na = "iPod";
                                    var Tc = !0;
                                }
                              } else {
                                Wb ? g = Wb : g = k(U.split("_").join("."), "OS ");
                                if (!g || Gd) {
                                  g = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : kc.isNaN ? 9.2 : q.SharedWorker ? Ec && Ec.now ? 8.0 : 8.4 : Pd ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Fc ? 4.3 : Dc ? 4.1 : 3.2;
                                }
                                var W = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === C.indexOf("iPhone") ? (na = "iPhone", ba = !0) : 0 === C.indexOf("iPad") || Ic ? (na = "iPad", V = !0) : 0 === C.indexOf("iPod") && (na = "iPod", Tc = !0);
                              }
                              var bc;
                              if (bc = !Qa) {
                                var cc;
                                if (!(cc = ha.standalone)) {
                                  var nb;
                                  if (nb = V || 12 > g) {
                                    a: {
                                      for (var Td in G) {
                                        if ("webkitFullscreenEnabled" === Td) {
                                          nb = !0;
                                          break a;
                                        }
                                      }
                                      nb = void 0;
                                    }
                                  }
                                  cc = nb;
                                }
                                bc = cc || 11 <= g && 13 > g && ha.mediaDevices;
                              }
                              bc ? (p = "SafariMobile", L = "Safari", O = g) : p = "iOSWebView";
                              h = "iOS";
                              r = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", p = "AOSP", r = 2.2, L = p, O = r, ea = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", r = 2.2, L = p, O = r;
                                } else {
                                  if (y = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = y;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2.0 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, f(c, "Mobile") ? ba = !0 : f(c, "Tablet") && (V = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), L = h, O = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (y = k(c, "Tizen ")) {
                                          h = "Tizen", g = y, L = "Samsung", O = Oa, p = L, r = O, ba = !0;
                                        } else {
                                          if (y = k(c, "Windows Phone ") || k(U, "Windows Phone OS ") || Bd) {
                                            var ob = !0;
                                            g = y;
                                            ba = !0;
                                          } else {
                                            if (Yb && "ARM" === C) {
                                              ob = !0, g = 10, ba = !0;
                                            } else {
                                              if (gb && f(U, "ZuneWP")) {
                                                ob = !0, g = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
                                              } else {
                                                if (f(c, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (f(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (f(c, "KFMUWI")) {
                                                      var ja = !0;
                                                      g = 6.3;
                                                      var T = V = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        ja = !0, g = 6, T = V = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          ja = !0, g = 5, T = V = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            ja = !0, g = 5, T = V = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              ja = !0, g = 5 <= P(S) ? 5 : 4, T = V = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                ja = !0, g = 3, T = V = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  ja = !0, g = 2, T = V = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    ja = !0, g = 1, T = V = !0;
                                                                  } else {
                                                                    if (y = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = y, p = "AOSP", r = 2.2, L = p, O = r;
                                                                    } else {
                                                                      if (Rd) {
                                                                        ja = !0, g = S || Sd, T = !0;
                                                                      } else {
                                                                        if (f(c, "AmazonWebAppPlatform") || f(c, "; AFT")) {
                                                                          ja = !0, g = S, T = !0;
                                                                        } else {
                                                                          if (f(c, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(c, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === c.indexOf("Windows Mobile;") || Id) {
                                                                                h = "WindowsMobile", mb = !0;
                                                                              } else {
                                                                                if ("WinCE" === C) {
                                                                                  h = C, mb = !0;
                                                                                } else {
                                                                                  if ("Win16" === C || "Win32" === C || "Win64" === C) {
                                                                                    h = C, g = k(c, "Windows NT ") || k(c, "Windows ");
                                                                                  } else {
                                                                                    if (0 === C.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === C ? "MacPPC" : C;
                                                                                      if (y = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = y;
                                                                                      }
                                                                                      var Uc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = ya, ba = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ea && Fa ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= P(S) ? W = S : W = {min:2.2}, g = W) : ea && za ? (S ? W = S : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ba = !0) : S ? (g = 
                                                                                      S, ea = !0) : Xb && Ld || Md || Nd ? (lb = !0, Oa ? W = {min:4.4} : hb && !Oc || Jc || Kc ? W = {min:4} : (W = S = void 0 !== Cc.touchAction ? {min:5} : ac ? 4.4 : Fc ? ha.connection ? q.searchBoxJavaBridge_ || hb ? kc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Dc ? 2.3 : 2.2 : 530 <= ma ? 2.0 : 1.5, Nc && (p = "Samsung", r = Nc)), g = W, ea = !0) : Qd ? (g = {min:5}, lb = ea = !0) : Xb && (f(c, "Ubuntu") ? 
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
  ja || ea && lb && Jd ? h = "FireOS" : ea && (h = h || "Android");
  ob && (h = "WindowsPhone");
  p || (T = T || ea, za ? (p = T || mb || ba || V ? "PrestoMobile" : "Presto", r = Dd) : gb ? ((W = Ta(U, "Trident/") + 4) && W !== aa && (L = "IEHost", O = W), 10 <= aa && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), mb || ba || V || Tc ? p = "TridentMobile" : Uc && 5 <= aa ? (p = "Tasman", L = "MacIE", O = aa) : (p = "Trident", Uc && (L = "MacIE", O = aa)), r = aa) : Yb ? (p = ob ? "EdgeMobile" : "EdgeHTML", r = k(U, "Edge/")) : Zb ? (p = "Goanna", 
  r = Zb) : Fa ? (p = T ? "Fennec" : "Gecko", r = ia || Ed) : Oa ? (p = "Samsung", r = Oa) : (y = Sc || k(c, "NetFront/")) ? (p = "NetFront", r = y) : (y = k(c, "iCab")) ? (p = "iCab", r = y) : (y = oc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Gc && ya) ? (p = "OperaMini", r = y, h || (f(c, "iPhone") ? na = "iPhone" : f(c, "iPad") ? na = "iPad" : f(c, "iPod") && (na = "iPod"), na && (h = "iOS"))) : Vb ? (p = "UCWEB", r = Ad) : Hd ? (p = "KHTML", r = Qb) : ea && Oc ? (p = "AOSP", r = S) : hb || 
  Jc || Kc ? (p = T ? "ChromiumMobile" : "Chromium", r = Na) : ea && ac ? (p = "ChromeWebView", r = 5 > P(S) ? S : Na) : ea && (ya || lb) ? (p = "AOSP", r = S) : Na ? (p = T ? "ChromiumMobile" : "Chromium", r = Na) : ma && (p = "WebKit", r = ma));
  h && (u.PLATFORM = h, g ? (u.PLATFORM_VERSION = pc(g), u[h] = g === g + "" ? P(g) : g) : u[h] = !0);
  p && (u.ENGINE = p, r ? (u.ENGINE_VERSION = pc(r), u[p] = r === r + "" ? P(r) : r) : u[p] = !0, L || (L = p, O = r));
  var Ja = kd, Ra = [], pd = !!G.getElementsByTagName, M = G.body, ra = M.style, z = u.Trident || u.TridentMobile, pb = u.Tasman, Vc = u.EdgeHTML || u.EdgeMobile, Wc = u.Presto || u.PrestoMobile, qb = u.Gecko, rb = u.Goanna, ab = u.WebKit, fb = u.SafariMobile || u.iOSWebView, Ud = u.OperaMini && u.UCWEB, dc = u.Win32 || u.Win64, Vd = P(ha.userAgent.split("Edg/")[1]), Xc = P(ha.appVersion.split("Trident/")[1]) + 4;
  z || pb || (new lc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Yc = G.scripts, Wd = (pb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : "modern") + ".css", Zc = 0 === location.href.indexOf("https"), Wa = [], tc, xb = 0, ec, Ma, da, Xd = oa(ra.transform) ? "transform" : oa(ra["-o-transform"]) ? "-o-transform" : oa(ra["-ms-transform"]) ? "-ms-transform" : oa(ra["-moz-transform"]) ? "-moz-transform" : oa(ra["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ga = Yc[Yc.length - 1].src.split("/");
  --Ga.length;
  var Yd = Ga.join("/");
  0 <= "http: https:".indexOf(Ga[0]) && Ga.splice(0, 3);
  Ga = Ga.join("/");
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
  var ad = function(a) {
    Va.length || (Ba = setInterval(Ua, rc));
    Va.push({f:a, g:++$c});
    return $c;
  };
  var Va = [], rc = 999, $c = 0, Ba;
  if (5 > z || pb) {
    q._wdb_onlooptimer = Ua, Ua = "_wdb_onlooptimer()";
  }
  Ra.push(function() {
    6.1 > fb && bd(md);
    sb(qc);
  });
  var H = function(a, b, d) {
    la.length || (ta = ub(Ha, Ia));
    la.push({f:a, p:b, g:++cd, t:new sa - 0 + (Ia < d ? d : Ia)});
    return cd;
  };
  var dd = function(a) {
    for (var b = la.length, d; d = la[--b];) {
      if (d.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Ia = 64, cd = 0, ta;
  if (5 > z || pb) {
    q._wdb_ontimer = Ha, Ha = "_wdb_ontimer()";
  }
  Ra.push(function() {
    6.1 > fb && bd(nd);
    sb(sc);
  });
  var Aa = q.matchMedia, Ca;
  Wa.push(function() {
    Ca = fa(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var fc = function(a) {
    Wa.push(a);
  };
  var sb = function(a) {
    ed.push(a);
  };
  var ed = [], wb = q.onload, fd = q.onunload;
  onload = vb;
  onunload = function(a) {
    var b;
    fd && (b = fd(a));
    ca(ed, a);
    onunload = Ja;
    return b;
  };
  var gc = function(a) {
    uc.push(a);
  };
  var uc = [];
  fc(function() {
    ad(od);
  });
  var Zd = function(a) {
    Sa.push(a);
  };
  var Sa = [], Ka, zb, yb;
  if (10 <= z || Vc || dc && Vd) {
    Aa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Ka = zb = a.matches;
      ca(Sa, Xa());
    }), Aa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Ka = yb = a.matches;
      ca(Sa, Xa());
    }), Aa("(-ms-high-contrast:active)").addListener(function(a) {
      Ka = a.matches;
      ca(Sa, Xa());
    });
  } else {
    if (10 > z || dc && (44 <= qb || rb)) {
      var tb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = G.defaultView, d = xb, e = b ? b.getComputedStyle(Ca, null) : Ca.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Ka = "#123456" !== b && "rgb(18,52,86)" !== b, zb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), yb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== Xa() && ca(Sa, xb), !0;
        }
      };
      fc(function() {
        Ca.style.color = "#123456";
        Ca.style.backgroundColor = "#123456";
        60 > qb || rb ? H(tb) : tb() && ad(tb, 1000);
        tb = null;
      });
    }
  }
  var $d = [];
  Aa && Aa("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca($d, a.matches);
  });
  var hc = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    ca(hc, !0);
  }, onafterprint = function() {
    ca(hc, !1);
  }, sb(function() {
    onbeforeprint = onafterprint = Ja;
  })) : Aa && Aa("print").addListener(function(a) {
    ca(hc, a.matches);
  });
  var bd = function(a) {
    gd.push(a);
  };
  var gd = [], ic = q.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    vb || ca(gd);
    return b;
  };
  sb(function() {
    onscroll = ic = Ja;
  });
  var ae = Ya("html")[0];
  var Bb = Ya("head")[0];
  var Za;
  var Cb = void 0;
  var yc = {};
  da || gc(function(a) {
    a ? oa(da) || (da = 1.8 <= qb || rb || 8 <= z || Vc || 530 <= ab || 3.2 <= fb, da || (a = fa(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), da = 6 <= a.offsetWidth, va(a))) : da = void 0;
  });
  var Db;
  9 > z && fc(function(a) {
    a = fa(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    ec = 1 < a.offsetHeight;
    a.style.cssText = "";
    va(a);
  });
  var sd = function(a) {
    function b() {
      l || (d.complete ? (l = !0, d.width || H(a, !1)) : e = H(b));
    }
    if (hd) {
      var d = new Image, e, l;
      d.onerror = function() {
        (!z || 11 === z || 11 === Xc) && d.width || l || (l = !0, e && dd(e), e = H(a, !1));
      };
      d.onload = function() {
        l = !0;
        e && dd(e);
        Wc && !d.complete ? e = H(a, !1) : (Ma = !0, H(a, !0));
      };
      d.src = hd;
      8 > Wc && d.complete ? (Ma = !0, H(a, !0)) : l || (e = H(b));
    } else {
      H(a, !1);
    }
  };
  var hd = Zc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var rd = xc;
  for (11 === Xc && 5.5 > z && fa(Bb, "link", {href:Yd + "/" + Wd, rel:"stylesheet", type:"text/css"}); Ra.length;) {
    Ra.shift()();
  }
  Ra = null;
  var X = String.fromCharCode, F = Zc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", xa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > z || dc && (44 <= qb || rb)) && Zd(function(a) {
    $a("jsHcm");
    $a("jsHcmWob");
    $a("jsHcmBow");
    if (a) {
      switch((Xd || 9 === z || 5.5 <= z && 9 > z && ec) && pa(M, "jsCanRotate"), a) {
        case 1:
          pa(M, "jsHcm");
          break;
        case 2:
          pa(M, "jsHcmWob");
          break;
        case 3:
          pa(M, "jsHcmBow");
      }
    } else {
      $a("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, id;
  gc(function(a) {
    function b(t) {
      var m = t.getAttribute("pbtip") || "", n = m.charAt(0), J = "_" === n;
      m = J ? m.charAt(2) : n;
      n = J ? "Btm" : "";
      var K = t.getAttribute("title") || "";
      pa(t, "pbTipPos" + m.toUpperCase());
      fa(t, "div", {className:"pbTip" + n}, {width:K.length + l + "em"}, K);
      fa(t, "div", {className:"pbTail" + n});
      x && J && (t.focus(), t.blur());
    }
    function d(t) {
      if (da && N) {
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
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + J]}, Za = 1, D = fa(t, "b", m, 0, K), e(t), e(D)) : e(t);
      }
    }
    function e(t) {
      Y || B || Da(t, "pbChrCS") && Ib.push(t);
    }
    if (a && !id) {
      id = !0;
      var l = 6 > z ? 1 : 0;
      a = Ya("SAMP");
      var B = 9 > z, x = 5 <= z && 6 > z, w, D, I, v;
      ec && pa(M, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== ra.opacity || void 0 !== ra["-moz-opacity"] || void 0 !== ra["-khtml-opacity"], N = !Y && !B && !0, R = !da || N || void 0;
        for (I = -1; w = a[++I];) {
          if (Da(w.parentElement || w.parentNode, "pbLCD")) {
            var qa = w.children;
            for (w = qa.length; w;) {
              var Q = qa[--w];
              switch(Q.tagName.toUpperCase()) {
                case "A":
                  if (R) {
                    for (da || b(Q), v = Q.children.length; v;) {
                      d(Q.children[--v]);
                    }
                  }
                  Ud ? Q.setAttribute("href", "javascript:void(0)") : Q.onclick = qd;
                  break;
                case "B":
                  R && d(Q);
              }
            }
          }
        }
        Ib.length ? (setInterval(zc, 500), da ? Ea([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ea([".pbChrCS", "background-position:0 -51px"])) : zc = null;
        N && (da ? Ea([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + F + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        F + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + F + "pbLCD/x3_a90.png)"]) : Ea([".pbAlp1", "background-image:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        F + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + F + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + F + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > ab && (ae.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === z && (new lc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Ob = xa[7], Bc = xa[30], ud = xa[113], cb = X(8337) + X(8331), Pb = X(160), yd = X(8194), wd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), xd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), vd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Bc + xa[31]).split(""), wa = 
  [], Mb = [], db, Nb;
  gc(function(a) {
    if (a && !Nb) {
      var b = G.all || Ya("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Da(d, "pbList") ? eb(d) : Da(d, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(d.tagName.toUpperCase()) && eb(d, !0);
      }
      wa.length && bb();
      Nb = !0;
    }
  });
  jd.prettify = eb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

