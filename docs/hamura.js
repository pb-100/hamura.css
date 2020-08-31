PB100 = {};
(function(id, r, u, jd, G, ia, kc, P, lc, mc, Ud, tb, kd, va, Vd) {
  function ub(a, b) {
    var c = P(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function g(a, b) {
    return 0 <= a.indexOf(b);
  }
  function k(a, b) {
    var c = "", e = -1, l;
    if (a = a.split(b)[1]) {
      for (; l = a.charCodeAt(++e);) {
        if (48 <= l && 57 >= l || 46 === l) {
          c += a.charAt(e);
        } else {
          break;
        }
      }
      for (e = c.length; e;) {
        if (46 === c.charCodeAt(--e)) {
          c = c.substr(0, e);
        } else {
          break;
        }
      }
    }
    return c;
  }
  function nc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var l = P(a[c]), B = P(b[c]);
      if (l !== B) {
        return l > B ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function oc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], l; b < c; ++b) {
      0 > nc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function pc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function pa(a) {
    return void 0 !== a;
  }
  function Wa() {
    for (var a, b = 0; b < Xa.length; ++b) {
      a = Xa[b], a.f();
    }
  }
  function ld() {
    Da && (qc(), Da = setInterval(Wa, rc));
  }
  function qc() {
    Da && (Da = clearInterval(Da));
  }
  function La() {
    for (var a, b = 0, c = new va - 0; b < la.length;) {
      c < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    wa = la.length ? tb(La, Ma) : 0;
  }
  function md() {
    wa && (sc(), wa = tb(La, Ma));
  }
  function sc() {
    wa && (wa = kd(wa));
  }
  function ca(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function vb(a) {
    var b;
    wb && (b = wb(a));
    ca(Ya, a);
    onload = Ea;
    Ya = vb = wb = onload = null;
    return b;
  }
  function tc() {
    var a = 9 === Fa.offsetWidth;
    uc !== a && ca(vc, uc = a);
  }
  function Ga() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = G.defaultView, c = xb, e = b ? b.getComputedStyle(Fa, null) : Fa.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Na = "#123456" !== b && "rgb(18,52,86)" !== b, yb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), zb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== Za() && ca(Oa, xb), !0;
    }
  }
  function Za() {
    return xb = Na ? zb ? 2 : yb ? 3 : 1 : 0;
  }
  function $a(a) {
    var b = b || G;
    return nd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Ab(a, b) {
    var c = G.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function da(a, b, c, e, l) {
    function B(D, H) {
      for (var v in H) {
        switch(v) {
          case "class":
          case "className":
            qa(D, H[v]);
            break;
          default:
            D.setAttribute(v, H[v]);
        }
      }
    }
    function x(D, H) {
      var v = D.style, Y;
      for (Y in H) {
        v[Y] = H[Y];
      }
    }
    if ("style" === b) {
      var w = !0;
      b = Ab("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Ab(b);
    }
    ab ? (2 === ab && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    ab = 0;
    c && B(b, c);
    e && x(b, e);
    l && !w && b.appendChild(G.createTextNode(l));
    return b;
  }
  function Ha(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function qa(a, b) {
    var c;
    if (!Ha(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function bb(a) {
    if (Ha(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function wc(a) {
    a = da(Bb, "style", {type:"text/css", media:"all"}, 0, a);
    Cb = a.sheet || a.styleSheet;
  }
  function Ia(a) {
    for (var b = Cb, c, e, l = "", B; a.length;) {
      c = a.shift(), e = a.shift(), B = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(B, b.cssRules.length) : l += B;
    }
    l && wc(l);
  }
  function xc(a) {
    function b(e) {
      Db = e;
      c.onload = c.onerror = Ea;
      I(a, e);
    }
    if (pa(Db)) {
      I(a, Db);
    } else {
      if (8 > z) {
        I(a, !1);
      } else {
        var c = new Image;
        c.onerror = function() {
          c.onload = c.onerror = Ea;
          b(!1);
        };
        c.onload = function() {
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function yc(a, b, c, e, l, B) {
    function x() {
      G.fonts.load('1.6em "' + b + '"').then(function() {
        v(b) ? I(a, Pa) : D(!0);
      }, function() {
        xc(Y);
      });
    }
    function w(A) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (Q = new va - 0, !1) : A < new va - Q;
    }
    function D(A) {
      A && (Q = new va - 0);
      v(b) ? a(Pa) : w(ra) ? t ? a(0) : 9 > z ? I(a, 0) : xc(Y) : I(D);
    }
    function H() {
      var A = -1, E;
      H = null;
      J = ["sans-serif", "serif"];
      m = da(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (K = {}; E = J[++A];) {
        m.style.fontFamily = E, K[E] = m.offsetWidth;
      }
    }
    function v(A) {
      var E = 0, Z = -1, Eb, Fb, Gb = 0;
      H && H();
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
      xa(m);
      return Pa = E + Gb;
    }
    function Y(A) {
      (t = A) ? N(!0) : a(0);
    }
    function N(A) {
      A && (Q = new va - 0);
      for (E in c) {
        if (v(E)) {
          n = da(M, "div", {"aria-hidden":"true", className:e, id:e});
          A = c[E];
          var E = Cb, Z = zc.all || 0;
          E ? E.addImport ? E.addImport(A, Z) : E.insertRule && E.insertRule('@import "' + A + '"', Z) : wc('@import "' + A + '"');
          zc.all = ++Z;
          I(R, !0);
        } else {
          w(100) ? (delete c[E], I(N, !0)) : I(N);
        }
        return;
      }
      a(0);
    }
    function R(A) {
      A && (Q = new va - 0);
      1 < n.offsetWidth ? (xa(n), ra = 100, I(D, !0)) : w(ra) ? (xa(n), a(0)) : I(R);
    }
    var ra = B || 5000, Q, t, m, n, J, K, Pa;
    (function() {
      var A;
      if (r.MeeGo || 2.2 > r.AOSP || r.WebOS || r.UCWEB || 10 > r.TridentMobile || r.NDS || r.NDSi || r.N3DS) {
        return !1;
      }
      if (6 > z) {
        return !0;
      }
      var E = da(Bb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), Z = (Z = E.sheet || E.styleSheet) ? (A = 10 <= z ? Z.cssRules : Z.rules || Z.cssRules) && (A = A[0]) ? A.cssText : Z.cssText || "" : "";
      A = 0 < Z.indexOf("src") && 0 === Z.indexOf("@font-face");
      xa(E);
      return A;
    })() ? !G.fonts || 603 > cb ? D(!0) : x() : I(a, 0);
  }
  function Ac() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function od(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Jb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function db() {
    db = null;
    pd(Kb, "PB-100", {"PB-100_canTTF":F + "pbFont/ttf.css", "PB-100_canWOFF":F + "pbFont/woff.css", "PB-100_canEOT":F + "pbFont/eot.css", "PB-100_canSVG":F + "pbFont/svg.css"}, "pbFont-testCssReady", {h:eb}, 5000);
  }
  function Kb(a) {
    (fb = a) ? Lb() : Qa ? Bc(!0) : pa(Qa) ? Lb() : qd(Bc);
  }
  function Bc(a) {
    a && (qa(M, "pbList-noWebFont"), ea ? Ia([".pbList font:after", "content:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ia([".pbList font", "background-image:url(" + F + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = yc = null; ya.length;) {
      gb(ya.shift(), Mb.shift());
    }
  }
  function gb(a, b) {
    function c(B) {
      B = B.childNodes;
      for (var x = -1, w; w = B[++x];) {
        switch(w.nodeType) {
          case 1:
            c(w);
            break;
          case 3:
            w.data && w.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(w);
        }
      }
    }
    var e = [];
    if (Kb) {
      -1 === ya.indexOf(a) && (ya.push(a), Mb.push(b), Nb && db && db());
    } else {
      var l = ya.indexOf(a);
      0 <= l && ya.splice(l, 1) && Mb.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== fb && (l = l.split(eb).join(Cc)), b ? a.data = l : rd(l.split("\r").join("").split("&yen;").join(sd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function rd(a, b) {
    function c(m, n) {
      for (var J = ""; n;) {
        n & 1 && (J += m), n >>= 1, m += m;
      }
      return J;
    }
    function e(m, n, J) {
      for (var K, Pa = -1, A, E; K = n[++Pa];) {
        for (; 0 <= (A = m.indexOf(K));) {
          E = K.length, m = m.substr(0, A) + c(J, E) + m.substr(A + E);
        }
      }
      return m;
    }
    function l(m) {
      var n = P(m), J = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(J) + J.length, n <= m.length) ? n : 0;
    }
    var B = " area line str cmd fnc syb".split(" "), x = [], w = "", D = -1, H, v;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = P(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      w = c("+", a.length);
    } else {
      for (0 <= (D = l(a)) && (w = c("|", D), --D); v = a.charAt(++D);) {
        v === Ob || H ? (w += "~", v === Ob && (H = !H)) : w += v;
      }
      w = e(w, td, "^");
      w = e(w, ud, "{");
      w = e(w, vd, "}");
    }
    D = 0;
    for (H = a.length; D < H; ++D) {
      v = a.charAt(D);
      var Y = v === Pb, N = " " === v;
      v = Y ? " " : v;
      var R = w.charAt(D), ra = Q, Q = "|" === R;
      R = B["+|~{}^".indexOf(R) + 1];
      if ("\n" !== v) {
        if (fb || !Qa) {
          8 > z && N && (v = D === H - 1 ? Pb : wd), 2 === fb && a.substr(D, 2) === eb && (v = eb, ++D), N = N && "str" === R ? ' class="pbList-strsp"' : Y ? "" : !N && R ? ' class="pbList-' + R + '"' : "";
        } else {
          var t = za.indexOf(v);
          t = -1 === t ? "" : za.indexOf(v).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          N = N && "str" === R ? ' class="pbList-strsp"' : N || !t ? "" : R ? ' class="' + (t ? t + " " : "") + "pbList-" + R + '"' : ' class="' + t + '"';
        }
        ra && Y && (cb || hb) && (v = Pb);
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
      xa(b);
    }
  }
  var p, q, d = ia.userAgent, S = ia.appVersion, Qb = P(S) | 0, C = ia.platform, Rb = G.documentElement, Dc = Rb && Rb.style, Sb = G.documentMode, Tb = kc.width, Ub = kc.height, Ec = u.HTMLAudioElement, Fc = u.performance, Gc = u.Int8Array, xd = void 0 !== u.ontouchstart, Aa = k(S, "Version/") || k(d, "Version/"), Ja = void 0 !== Dc.MozAppearance, Hc = u.operamini, Vb = g(d, "UCWEB"), yd = Vb && k(d, " U2/"), zd = Vb && k(d, "; wds "), Wb = k(d.split("_").join("."), "; iPh OS "), Ad = k(d, "; Adr "), 
  Ic = g(S, "YJApp-ANDROID"), fa = g(C, "Android") || Ja && g(S, "Android") || Ic, T = k(C, "Android ") || k(S, "Android ") || k(d, "Android ") || Ad, Xb = g(C, "Linux"), Yb = "MacIntel" === C && void 0 !== ia.standalone, Ba = !Hc && u.opera, Bd = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : oc(k(d, "Opera "), Aa, "" + Qb)), Jc = u.opr, ib = !Ba && (G.all || Sb), aa = ib && (Sb ? Sb : u.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), Zb = !ib && Rb.msContentZoomFactor, jb = !Zb && u.chrome, $b = Ja && k(d, "Goanna/"), ja = !$b && Ja && k(d, "rv:"), Cd = k(d, "Firefox/"), Dd = k(d, "Opera/"), Ed = u.FNRBrowser, ma = ub(d, "AppleWebKit/"), Ra = k(d, "Chrome/"), Kc = k(d, "OPR/"), Fd = k(S, "KHTML/"), Gd = k(d.toLowerCase(), "iris"), Sa = ub(d, "SamsungBrowser/"), Ta;
  if (Ta = !Sa) {
    a: {
      for (var Lc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      kb, ac = Lc.length; kb = Lc[--ac];) {
        if (g(d, kb)) {
          Ta = 2 > P(Aa) ? Aa : 0.9;
          break a;
        }
      }
      var Mc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Mc.length; kb = Mc[--ac];) {
        if (g(d, kb)) {
          Ta = Aa;
          break a;
        }
      }
      Ta = void 0;
    }
  }
  var Nc = Ta, Oc = jb && 534.3 >= ma, Pc = xd && (ma || Ja) && (0 === C.indexOf("Linux armv") || 0 === C.indexOf("Linux aarch") || "Linux i686" === C) && g(d, "Linux x86_64") || !T && Ic, Qc = u.puffinDevice, lb = Qc && Qc.clientInfo, Ua = lb && "iOS" === lb.os && lb.osVersion, Hd = Ua && lb.model, bc = !aa && G.registerElement, Id = !aa && G.execCommand, Jd = Xb && bc && "11.0.696.34" === Ra, Kd = u._firefoxTV_playbackStateObserverJava, sa, ha, y;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var f = Dd;
    } else {
      if ("New Nintendo 3DS" === C || g(d, "iPhone OS 6_0") && 320 === Tb && 240 === Ub) {
        h = "New3DS", f = k(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === C) {
          h = "N3DS", f = k(d, "Version/"), ma = 535;
        } else {
          if ("Nintendo Swicth" === C) {
            h = "Swicth", f = k(S, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === C) {
              h = "WiiU", f = k(S, "NintendoBrowser/"), ma = k(S, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === C) {
                h = "Wii";
                f = k(d, "Wii; U; ; ");
                var L = h;
                var O = f;
              } else {
                if (y = k(d, "PlayStation Vita ")) {
                  h = "PSVita", f = y, L = h, O = y;
                } else {
                  if (y = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = y;
                    var Rc = 3.3;
                    L = h;
                    O = y;
                  } else {
                    if (y = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = y, L = h, O = y, 0 > nc("4.10", y) && (p = "Sony", q = y);
                    } else {
                      if (g(d, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(d, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Qb && g(d, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Rc = 3.4;
                            L = h;
                            O = 2;
                            var mb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Wb || Ua || Yb) {
                              if (Ua) {
                                switch(f = Ua, Hd.substr(0, 4)) {
                                  case "iPho":
                                    var na = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    na = "iPad";
                                    var U = !0;
                                    break;
                                  case "iPod":
                                    na = "iPod";
                                    var Sc = !0;
                                }
                              } else {
                                Wb ? f = Wb : f = k(S.split("_").join("."), "OS ");
                                f || (ha = !0);
                                if (!f || Ed) {
                                  f = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : lc.isNaN ? 9.2 : u.SharedWorker ? Fc && Fc.now ? 8.0 : 8.4 : Id ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Gc ? 4.3 : Ec ? 4.1 : 3.2;
                                }
                                var V = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === C.indexOf("iPhone") ? (na = "iPhone", ba = !0) : 0 === C.indexOf("iPad") || Yb ? (na = "iPad", U = !0) : 0 === C.indexOf("iPod") && (na = "iPod", Sc = !0);
                              }
                              var cc;
                              if (cc = !Ua) {
                                var dc;
                                if (!(dc = ia.standalone)) {
                                  var nb;
                                  if (nb = U || 12 > f) {
                                    a: {
                                      for (var Ld in G) {
                                        if ("webkitFullscreenEnabled" === Ld) {
                                          nb = !0;
                                          break a;
                                        }
                                      }
                                      nb = void 0;
                                    }
                                  }
                                  dc = nb;
                                }
                                cc = dc || 11 <= f && 13 > f && ia.mediaDevices;
                              }
                              cc ? (p = "SafariMobile", L = "Safari", O = f) : p = "iOSWebView";
                              h = "iOS";
                              q = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", p = "AOSP", q = 2.2, L = p, O = q, fa = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", q = 2.2, L = p, O = q;
                                } else {
                                  if (y = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = y;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ja ? "1.0.1" : 19 > ja ? 1.1 : 27 > ja ? 1.2 : 29 > ja ? 1.3 : 31 > ja ? 1.4 : 33 > ja ? 2.0 : 35 > ja ? 2.1 : 38 > ja ? 2.2 : 45 > ja ? 2.5 : 2.6, g(d, "Mobile") ? ba = !0 : g(d, "Tablet") && (U = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), L = h, O = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (y = k(d, "Tizen ")) {
                                          h = "Tizen", f = y, L = "Samsung", O = Sa, p = L, q = O, ba = !0;
                                        } else {
                                          if (y = k(d, "Windows Phone ") || k(S, "Windows Phone OS ") || zd) {
                                            var ob = !0;
                                            f = y;
                                            ba = !0;
                                          } else {
                                            if (Zb && "ARM" === C) {
                                              ob = !0, f = 10, ha = ba = !0;
                                            } else {
                                              if (ib && g(S, "ZuneWP")) {
                                                ob = !0, f = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ha = ba = !0;
                                              } else {
                                                if (g(d, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (g(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (g(d, "KFMUWI")) {
                                                      var oa = !0;
                                                      f = 6.3;
                                                      var W = U = !0;
                                                    } else {
                                                      if (g(d, "KFKAWI")) {
                                                        oa = !0, f = 6, W = U = !0;
                                                      } else {
                                                        if (g(d, "KFSUWI") || g(d, "KFAUWI") || g(d, "KFDOWI")) {
                                                          oa = !0, f = 5, W = U = !0;
                                                        } else {
                                                          if (g(d, "KFGIWI")) {
                                                            oa = !0, f = 5, W = U = !0;
                                                          } else {
                                                            if (g(d, "KFARWI") || g(d, "KFSAWA") || g(d, "KFSAWI")) {
                                                              oa = !0, f = 5 <= P(T) ? 5 : 4, W = U = !0;
                                                            } else {
                                                              if (g(d, "KFSOWI") || g(d, "KFTHWA") || g(d, "KFTHWI") || g(d, "KFAPWA") || g(d, "KFAPWI")) {
                                                                oa = !0, f = 3, W = U = !0;
                                                              } else {
                                                                if (g(d, "KFOT") || g(d, "KFTT") || g(d, "KFJWA") || g(d, "KFJWI")) {
                                                                  oa = !0, f = 2, W = U = !0;
                                                                } else {
                                                                  if (g(d, "Kindle Fire")) {
                                                                    oa = !0, f = 1, W = U = !0;
                                                                  } else {
                                                                    if (y = k(d, "Kindle/")) {
                                                                      h = "Kindle", f = y, p = "AOSP", q = 2.2, L = p, O = q;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Kd) {
                                                                        oa = !0, f = T, W = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Gd) {
                                                                              h = "WindowsMobile", mb = !0;
                                                                            } else {
                                                                              if ("WinCE" === C) {
                                                                                h = C, mb = !0;
                                                                              } else {
                                                                                if ("Win16" === C || "Win32" === C || "Win64" === C) {
                                                                                  h = C, f = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                } else {
                                                                                  if (0 === C.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === C ? "MacPPC" : C;
                                                                                    if (y = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                      f = y;
                                                                                    }
                                                                                    var Tc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Aa, ba = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : fa && Ja ? (g(d, "Android 4.4;") ? V = {min:2.3} : 4 <= P(T) ? V = T : V = {min:2.2}, f = V, Pc && (ha = !0)) : fa && Ba ? (T ? V = T : (V = {min:1.6}, ha = !0), f = V, g(d, "Tablet") ? U = 
                                                                                    !0 : ba = !0) : T ? (f = T, fa = !0) : Xb && Pc ? (sa = !0, Sa ? V = {min:4.4} : jb && !Oc || Jc || Kc ? V = {min:4} : (V = T = void 0 !== Dc.touchAction ? {min:5} : bc ? 4.4 : Gc ? ia.connection ? u.searchBoxJavaBridge_ || jb ? lc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Ec ? 2.3 : 2.2 : 530 <= ma ? 2.0 : 1.5, Nc && (p = "Samsung", q = Nc)), f = V, fa = !0) : Jd ? (f = {min:5}, sa = fa = !0) : Xb && 
                                                                                    (g(d, "Ubuntu") ? h = "Ubuntu" : (y = k(d, "Mint/")) ? (h = "Mint", f = y) : (y = k(d, "Fedora/")) ? (h = "Fedora", f = y) : h = g(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  fa && (h = h || "Android");
  ob && (h = "WindowsPhone");
  p || (W = W || fa, Ba ? (p = W || mb || ba || U ? "PrestoMobile" : "Presto", q = Bd) : ib ? ((V = ub(S, "Trident/") + 4) && V !== aa && (L = "IEHost", O = V), 10 <= aa && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = aa), mb || ba || U || Sc ? p = "TridentMobile" : Tc && 5 <= aa ? (p = "Tasman", L = "MacIE", O = aa) : (p = "Trident", Tc && (L = "MacIE", O = aa)), q = aa) : Zb ? (p = ob ? "EdgeMobile" : "EdgeHTML", q = k(S, "Edge/")) : $b ? (p = "Goanna", 
  q = $b) : Ja ? (p = W ? "Fennec" : "Gecko", q = ja || Cd) : Sa ? (p = "Samsung", q = Sa, sa && (ha = !0)) : (y = Rc || k(d, "NetFront/")) ? (p = "NetFront", q = y) : (y = k(d, "iCab")) ? (p = "iCab", q = y) : (y = oc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Hc && Aa) ? (p = "OperaMini", q = y, h || (g(d, "iPhone") ? na = "iPhone" : g(d, "iPad") ? na = "iPad" : g(d, "iPod") && (na = "iPod"), na && (h = "iOS"))) : Vb ? (p = "UCWEB", q = yd) : Fd ? (p = "KHTML", q = Qb) : fa && Oc ? (p = "AOSP", 
  q = T, sa && (ha = !0)) : jb || Jc || Kc ? (p = W ? "ChromiumMobile" : "Chromium", q = Ra, sa && (ha = !0)) : fa && bc ? (p = "ChromeWebView", q = 5 > P(T) ? T : Ra, sa && (ha = !0)) : fa && (Aa || sa) ? (p = "AOSP", q = T, sa && (ha = !0)) : Ra ? (p = W ? "ChromiumMobile" : "Chromium", q = Ra) : ma && (p = "WebKit", q = ma));
  h && (r.PLATFORM = h, f ? (r.PLATFORM_VERSION = pc(f), r[h] = f === f + "" ? P(f) : f) : r[h] = !0);
  p && (r.ENGINE = p, q ? (r.ENGINE_VERSION = pc(q), r[p] = q === q + "" ? P(q) : q) : r[p] = !0, L || (L = p, O = q));
  if (ha || Yb) {
    r.PC_MODE = !0;
  }
  var Ea = jd, Va = [], nd = !!G.getElementsByTagName, M = G.body, ta = M.style, z = r.Trident || r.TridentMobile, pb = r.Tasman, Uc = r.EdgeHTML || r.EdgeMobile, Vc = r.Presto || r.PrestoMobile, qb = r.Gecko, rb = r.Goanna, cb = r.WebKit, hb = r.SafariMobile || r.iOSWebView, Md = r.OperaMini && r.UCWEB, ec = r.Win32 || r.Win64, Nd = P(ia.userAgent.split("Edg/")[1]), Wc = P(ia.appVersion.split("Trident/")[1]) + 4;
  z || pb || (new mc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Xc = G.scripts, Od = (pb ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : "modern") + ".css", Yc = 0 === location.href.indexOf("https"), Ya = [], uc, xb = 0, fc, Qa, ea, Pd = pa(ta.transform) ? "transform" : pa(ta["-o-transform"]) ? "-o-transform" : pa(ta["-ms-transform"]) ? "-ms-transform" : pa(ta["-moz-transform"]) ? "-moz-transform" : pa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ka = Xc[Xc.length - 1].src.split("/");
  --Ka.length;
  var Qd = Ka.join("/");
  0 <= "http: https:".indexOf(Ka[0]) && Ka.splice(0, 3);
  Ka = Ka.join("/");
  var ka = Array.prototype;
  ka.pop || (ka.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ka.push || (ka.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ka.shift || (ka.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ka.splice || (ka.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, l = this.slice(a, a + b), B;
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
    for (B = c.length; x < B; ++x) {
      this[x - 2 + a] = c[x];
    }
    return l;
  });
  ka.indexOf || (ka.indexOf = function(a, b) {
    var c = this.length >>> 0;
    if (0 === c) {
      return -1;
    }
    if (b) {
      var e = b || 0;
      e = -Infinity === e ? 0 : (0 > e ? -e : e) | 0;
      if (c <= e) {
        return -1;
      }
    }
    for (e = 0 <= e ? e : 0 < c + e ? c + e : 0; e < c; ++e) {
      if (this[e] === a) {
        return e;
      }
    }
    return -1;
  });
  var $c = function(a) {
    Xa.length || (Da = setInterval(Wa, rc));
    Xa.push({f:a, g:++Zc});
    return Zc;
  };
  var Xa = [], rc = 999, Zc = 0, Da;
  if (5 > z || pb) {
    u._wdb_onlooptimer = Wa, Wa = "_wdb_onlooptimer()";
  }
  Va.push(function() {
    6.1 > hb && ad(ld);
    sb(qc);
  });
  var I = function(a, b, c) {
    la.length || (wa = tb(La, Ma));
    la.push({f:a, p:b, g:++bd, t:new va - 0 + (Ma < c ? c : Ma)});
    return bd;
  };
  var cd = function(a) {
    for (var b = la.length, c; c = la[--b];) {
      if (c.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Ma = 64, bd = 0, wa;
  if (5 > z || pb) {
    u._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Va.push(function() {
    6.1 > hb && ad(md);
    sb(sc);
  });
  var Ca = u.matchMedia, Fa;
  Ya.push(function() {
    Fa = da(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var gc = function(a) {
    Ya.push(a);
  };
  var sb = function(a) {
    dd.push(a);
  };
  var dd = [], wb = u.onload, ed = u.onunload;
  onload = vb;
  onunload = function(a) {
    var b;
    ed && (b = ed(a));
    ca(dd, a);
    onunload = Ea;
    return b;
  };
  var hc = function(a) {
    vc.push(a);
  };
  var vc = [];
  gc(function() {
    tc();
    $c(tc);
  });
  var Rd = function(a) {
    Oa.push(a);
  };
  var Oa = [], Na, yb, zb;
  10 <= z || Uc || ec && Nd ? (Ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Na = yb = a.matches;
    ca(Oa, Za());
  }), Ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Na = zb = a.matches;
    ca(Oa, Za());
  }), Ca("(-ms-high-contrast:active)").addListener(function(a) {
    Na = a.matches;
    ca(Oa, Za());
  }), Ga = null) : 10 > z || ec && (44 <= qb || rb) ? gc(function() {
    Fa.style.color = "#123456";
    Fa.style.backgroundColor = "#123456";
    60 > qb || rb ? Ga() : Ga() && $c(Ga, 1000);
    Ga = null;
  }) : Ga = null;
  var Sd = [];
  Ca && Ca("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Sd, a.matches);
  });
  var ic = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    ca(ic, !0);
  }, onafterprint = function() {
    ca(ic, !1);
  }, sb(function() {
    onbeforeprint = onafterprint = Ea;
  })) : Ca && Ca("print").addListener(function(a) {
    ca(ic, a.matches);
  });
  var ad = function(a) {
    fd.push(a);
  };
  var fd = [], jc = u.onscroll;
  onscroll = function(a) {
    var b;
    jc && (b = jc(a));
    vb || ca(fd);
    return b;
  };
  sb(function() {
    onscroll = jc = Ea;
  });
  var Td = $a("html")[0];
  var Bb = $a("head")[0];
  var ab;
  var Cb = void 0;
  var zc = {};
  ea || hc(function(a) {
    a && !pa(ea) && (ea = 1.8 <= qb || rb || 8 <= z || Uc || 530 <= cb || 3.2 <= hb, ea || (a = da(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ea = 6 <= a.offsetWidth, xa(a)));
  });
  var Db;
  9 > z && gc(function(a) {
    a = da(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    fc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var qd = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || I(a, !1)) : e = I(b));
    }
    if (gd) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!z || 11 === z || 11 === Wc) && c.width || l || (l = !0, e && cd(e), e = I(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && cd(e);
        Vc && !c.complete ? e = I(a, !1) : (Qa = !0, I(a, !0));
      };
      c.src = gd;
      8 > Vc && c.complete ? (Qa = !0, I(a, !0)) : l || (e = I(b));
    } else {
      I(a, !1);
    }
  };
  var gd = Yc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var pd = yc;
  for (11 === Wc && 5.5 > z && da(Bb, "link", {href:Qd + "/" + Od, rel:"stylesheet", type:"text/css"}); Va.length;) {
    Va.shift()();
  }
  Va = null;
  var X = String.fromCharCode, F = Yc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  (10 > z || ec && (44 <= qb || rb)) && Rd(function(a) {
    bb("jsHcm");
    bb("jsHcmWob");
    bb("jsHcmBow");
    if (a) {
      switch((Pd || 9 === z || 5.5 <= z && 9 > z && fc) && qa(M, "jsCanRotate"), a) {
        case 1:
          qa(M, "jsHcm");
          break;
        case 2:
          qa(M, "jsHcmWob");
          break;
        case 3:
          qa(M, "jsHcmBow");
      }
    } else {
      bb("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, hd;
  hc(function(a) {
    function b(t) {
      var m = t.getAttribute("pbtip") || "", n = m.charAt(0), J = "_" === n;
      m = J ? m.charAt(2) : n;
      n = J ? "Btm" : "";
      var K = t.getAttribute("title") || "";
      qa(t, "pbTipPos" + m.toUpperCase());
      da(t, "div", {className:"pbTip" + n}, {width:K.length + l + "em"}, K);
      da(t, "div", {className:"pbTail" + n});
      x && J && (t.focus(), t.blur());
    }
    function c(t) {
      if (ea && N) {
        e(t);
      } else {
        var m = t.getAttribute("pbGhst") || "", n = t.className, J = n.split("pbCsr")[1] || "";
        n = n.split("pbAlp")[1] || "";
        if ("CS" === m) {
          var K = "_";
        } else {
          K = m, 3 === K.length && (K = K.substr(0, 2)), K = za[parseInt(K, 16)] || "~";
        }
        J = J.split(" ")[0];
        n = n.split(" ")[0];
        n = 10 - P(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + J]}, ab = 1, D = da(t, "b", m, 0, K), e(t), e(D)) : e(t);
      }
    }
    function e(t) {
      Y || B || Ha(t, "pbChrCS") && Ib.push(t);
    }
    if (a && !hd) {
      hd = !0;
      var l = 6 > z ? 1 : 0;
      a = $a("SAMP");
      var B = 9 > z, x = 5 <= z && 6 > z, w, D, H, v;
      fc && qa(M, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], N = !Y && !B && !0, R = !ea || N || void 0;
        for (H = -1; w = a[++H];) {
          if (Ha(w.parentElement || w.parentNode, "pbLCD")) {
            var ra = w.children;
            for (w = ra.length; w;) {
              var Q = ra[--w];
              switch(Q.tagName.toUpperCase()) {
                case "A":
                  if (R) {
                    for (ea || b(Q), v = Q.children.length; v;) {
                      c(Q.children[--v]);
                    }
                  }
                  Md ? Q.setAttribute("href", "javascript:void(0)") : Q.onclick = od;
                  break;
                case "B":
                  R && c(Q);
              }
            }
          }
        }
        Ib.length ? (setInterval(Ac, 500), ea ? Ia([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ia([".pbChrCS", "background-position:0 -51px"])) : Ac = null;
        N && (ea ? Ia([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + F + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        F + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + F + "pbLCD/x3_a90.png)"]) : Ia([".pbAlp1", "background-image:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        F + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + F + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + F + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > cb && (Td.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === z && (new mc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Ob = za[7], Cc = za[30], sd = za[113], eb = X(8337) + X(8331), Pb = X(160), wd = X(8194), ud = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), vd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), td = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Cc + za[31]).split(""), ya = 
  [], Mb = [], fb, Nb;
  hc(function(a) {
    if (a && !Nb) {
      var b = G.all || $a("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ha(c, "pbList") ? gb(c) : Ha(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && gb(c, !0);
      }
      ya.length && db();
      Nb = !0;
    }
  });
  id.prettify = gb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

