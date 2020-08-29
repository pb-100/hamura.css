PB100 = {};
(function(hd, q, u, id, G, ka, jc, R, kc, lc, Sd, sb, jd, va, Td) {
  function tb(a, b) {
    var c = R(a.split(b)[1]);
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
  function mc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var l = R(a[c]), A = R(b[c]);
      if (l !== A) {
        return l > A ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function nc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], l; b < c; ++b) {
      0 > mc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function oc(a) {
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
  function kd() {
    Da && (pc(), Da = setInterval(Wa, qc));
  }
  function pc() {
    Da && (Da = clearInterval(Da));
  }
  function La() {
    for (var a, b = 0, c = new va - 0; b < la.length;) {
      c < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    wa = la.length ? sb(La, Ma) : 0;
  }
  function ld() {
    wa && (rc(), wa = sb(La, Ma));
  }
  function rc() {
    wa && (wa = jd(wa));
  }
  function ba(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function ub(a) {
    var b;
    vb && (b = vb(a));
    ba(Ya, a);
    onload = Ea;
    Ya = ub = vb = onload = null;
    return b;
  }
  function sc() {
    var a = 9 === Fa.offsetWidth;
    tc !== a && ba(uc, tc = a);
  }
  function Ga() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = G.defaultView, c = wb, e = b ? b.getComputedStyle(Fa, null) : Fa.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Na = "#123456" !== b && "rgb(18,52,86)" !== b, xb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), yb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== Za() && ba(Oa, wb), !0;
    }
  }
  function Za() {
    return wb = Na ? yb ? 2 : xb ? 3 : 1 : 0;
  }
  function $a(a) {
    var b = b || G;
    return md ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function zb(a, b) {
    var c = G.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ca(a, b, c, e, l) {
    function A(D, H) {
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
      b = zb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = zb(b);
    }
    ab ? (2 === ab && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    ab = 0;
    c && A(b, c);
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
  function vc(a) {
    a = ca(Ab, "style", {type:"text/css", media:"all"}, 0, a);
    Bb = a.sheet || a.styleSheet;
  }
  function Ia(a) {
    for (var b = Bb, c, e, l = "", A; a.length;) {
      c = a.shift(), e = a.shift(), A = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(A, b.cssRules.length) : l += A;
    }
    l && vc(l);
  }
  function wc(a) {
    function b(e) {
      Cb = e;
      c.onload = c.onerror = Ea;
      I(a, e);
    }
    if (pa(Cb)) {
      I(a, Cb);
    } else {
      if (8 > B) {
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
  function xc(a, b, c, e, l, A) {
    function x() {
      G.fonts.load('1.6em "' + b + '"').then(function() {
        v(b) ? I(a, Pa) : D(!0);
      }, function() {
        wc(Y);
      });
    }
    function w(z) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (P = new va - 0, !1) : z < new va - P;
    }
    function D(z) {
      z && (P = new va - 0);
      v(b) ? a(Pa) : w(ra) ? t ? a(0) : 9 > B ? I(a, 0) : wc(Y) : I(D);
    }
    function H() {
      var z = -1, E;
      H = null;
      J = ["sans-serif", "serif"];
      m = ca(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (K = {}; E = J[++z];) {
        m.style.fontFamily = E, K[E] = m.offsetWidth;
      }
    }
    function v(z) {
      var E = 0, da = -1, Db, Eb, Fb = 0;
      H && H();
      for (M.appendChild(m); Db = J[++da];) {
        if (m.style.fontFamily = '"' + z + '",' + Db, m.offsetWidth !== K[Db]) {
          E = 1;
          break;
        }
      }
      if (E && l) {
        for (Eb in l) {
          if (m.innerHTML = Eb, z = m.offsetWidth, m.innerHTML = l[Eb], Fb = z === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Fb) {
            break;
          }
        }
      }
      xa(m);
      return Pa = E + Fb;
    }
    function Y(z) {
      (t = z) ? N(!0) : a(0);
    }
    function N(z) {
      z && (P = new va - 0);
      for (E in c) {
        if (v(E)) {
          n = ca(M, "div", {"aria-hidden":"true", className:e, id:e});
          z = c[E];
          var E = Bb, da = yc.all || 0;
          E ? E.addImport ? E.addImport(z, da) : E.insertRule && E.insertRule('@import "' + z + '"', da) : vc('@import "' + z + '"');
          yc.all = ++da;
          I(Q, !0);
        } else {
          w(100) ? (delete c[E], I(N, !0)) : I(N);
        }
        return;
      }
      a(0);
    }
    function Q(z) {
      z && (P = new va - 0);
      1 < n.offsetWidth ? (xa(n), ra = 100, I(D, !0)) : w(ra) ? (xa(n), a(0)) : I(Q);
    }
    var ra = A || 5000, P, t, m, n, J, K, Pa;
    (function() {
      var z;
      if (q.MeeGo || 2.2 > q.AOSP || q.WebOS || q.UCWEB || 10 > q.TridentMobile || q.NDS || q.NDSi || q.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var E = ca(Ab, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), da = (da = E.sheet || E.styleSheet) ? (z = da.cssRules) && (z = z[0]) ? z.cssText : da.cssText || "" : "";
      z = 0 < da.indexOf("src") && 0 === da.indexOf("@font-face");
      xa(E);
      return z;
    })() ? !G.fonts || 603 > cb ? D(!0) : x() : I(a, 0);
  }
  function zc() {
    Gb = !Gb;
    for (var a = -1, b; b = Hb[++a];) {
      b.style.visibility = Gb ? "" : "hidden";
    }
  }
  function nd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Ib = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function db() {
    db = null;
    od(Jb, "PB-100", {"PB-100_canTTF":F + "pbFont/ttf.css", "PB-100_canWOFF":F + "pbFont/woff.css", "PB-100_canEOT":F + "pbFont/eot.css", "PB-100_canSVG":F + "pbFont/svg.css"}, "pbFont-testCssReady", {h:eb}, 5000);
  }
  function Jb(a) {
    (fb = a) ? Kb() : Qa ? Ac(!0) : pa(Qa) ? Kb() : pd(Ac);
  }
  function Ac(a) {
    a && (qa(M, "pbList-noWebFont"), ea ? Ia([".pbList font:after", "content:url(" + F + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ia([".pbList font", "background-image:url(" + F + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Kb();
  }
  function Kb() {
    for (Jb = xc = null; ya.length;) {
      gb(ya.shift(), Lb.shift());
    }
  }
  function gb(a, b) {
    function c(A) {
      A = A.childNodes;
      for (var x = -1, w; w = A[++x];) {
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
    if (Jb) {
      -1 === ya.indexOf(a) && (ya.push(a), Lb.push(b), Mb && db && db());
    } else {
      var l = ya.indexOf(a);
      0 <= l && ya.splice(l, 1) && Lb.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== fb && (l = l.split(eb).join(Bc)), b ? a.data = l : qd(l.split("\r").join("").split("&yen;").join(rd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Nb).split("&amp;").join("&"), a);
      }
    }
  }
  function qd(a, b) {
    function c(m, n) {
      for (var J = ""; n;) {
        n & 1 && (J += m), n >>= 1, m += m;
      }
      return J;
    }
    function e(m, n, J) {
      for (var K, Pa = -1, z, E; K = n[++Pa];) {
        for (; 0 <= (z = m.indexOf(K));) {
          E = K.length, m = m.substr(0, z) + c(J, E) + m.substr(z + E);
        }
      }
      return m;
    }
    function l(m) {
      var n = R(m), J = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(J) + J.length, n <= m.length) ? n : 0;
    }
    var A = " area line str cmd fnc syb".split(" "), x = [], w = "", D = -1, H, v;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = R(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      w = c("+", a.length);
    } else {
      for (0 <= (D = l(a)) && (w = c("|", D), --D); v = a.charAt(++D);) {
        v === Nb || H ? (w += "~", v === Nb && (H = !H)) : w += v;
      }
      w = e(w, sd, "^");
      w = e(w, td, "{");
      w = e(w, ud, "}");
    }
    D = 0;
    for (H = a.length; D < H; ++D) {
      v = a.charAt(D);
      var Y = v === Ob, N = " " === v;
      v = Y ? " " : v;
      var Q = w.charAt(D), ra = P, P = "|" === Q;
      Q = A["+|~{}^".indexOf(Q) + 1];
      if ("\n" !== v) {
        if (fb || !Qa) {
          8 > B && N && (v = D === H - 1 ? Ob : vd), 2 === fb && a.substr(D, 2) === eb && (v = eb, ++D), N = N && "str" === Q ? ' class="pbList-strsp"' : Y ? "" : !N && Q ? ' class="pbList-' + Q + '"' : "";
        } else {
          var t = za.indexOf(v);
          t = -1 === t ? "" : za.indexOf(v).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          N = N && "str" === Q ? ' class="pbList-strsp"' : N || !t ? "" : Q ? ' class="' + (t ? t + " " : "") + "pbList-" + Q + '"' : ' class="' + t + '"';
        }
        ra && Y && (cb || hb) && (v = Ob);
        x.push("<font" + N + ">" + v + "</font>");
      } else {
        x.push(v);
      }
    }
    x = x.join("");
    if (1 === b.nodeType) {
      b.innerHTML = x;
    } else {
      for (A = zb("font", x); x = A.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(x, b);
      }
      xa(b);
    }
  }
  var p, r, d = ka.userAgent, S = ka.appVersion, Pb = R(S) | 0, C = ka.platform, Qb = G.documentElement, Cc = Qb && Qb.style, Rb = G.documentMode, Sb = jc.width, Tb = jc.height, Dc = u.HTMLAudioElement, Ec = u.performance, Fc = u.Int8Array, wd = void 0 !== u.ontouchstart, Aa = k(S, "Version/") || k(d, "Version/"), Ja = void 0 !== Cc.MozAppearance, Gc = u.operamini, Ub = g(d, "UCWEB"), xd = Ub && k(d, " U2/"), yd = Ub && k(d, "; wds "), Vb = k(d.split("_").join("."), "; iPh OS "), zd = k(d, "; Adr "), 
  Hc = g(S, "YJApp-ANDROID"), fa = g(C, "Android") || Ja && g(S, "Android") || Hc, T = k(C, "Android ") || k(S, "Android ") || k(d, "Android ") || zd, Wb = g(C, "Linux"), Xb = "MacIntel" === C && void 0 !== ka.standalone, Ba = !Gc && u.opera, Ad = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : nc(k(d, "Opera "), Aa, "" + Pb)), Ic = u.opr, ib = !Ba && (G.all || Rb), Z = ib && (Rb ? Rb : u.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), Yb = !ib && Qb.msContentZoomFactor, jb = !Yb && u.chrome, Zb = Ja && k(d, "Goanna/"), ia = !Zb && Ja && k(d, "rv:"), Bd = k(d, "Firefox/"), Cd = k(d, "Opera/"), Dd = u.FNRBrowser, ma = tb(d, "AppleWebKit/"), Ra = k(d, "Chrome/"), Jc = k(d, "OPR/"), Ed = k(S, "KHTML/"), Fd = k(d.toLowerCase(), "iris"), Sa = tb(d, "SamsungBrowser/"), Ta;
  if (Ta = !Sa) {
    a: {
      for (var Kc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      kb, $b = Kc.length; kb = Kc[--$b];) {
        if (g(d, kb)) {
          Ta = 2 > R(Aa) ? Aa : 0.9;
          break a;
        }
      }
      var Lc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for ($b = Lc.length; kb = Lc[--$b];) {
        if (g(d, kb)) {
          Ta = Aa;
          break a;
        }
      }
      Ta = void 0;
    }
  }
  var Mc = Ta, Nc = jb && 534.3 >= ma, Oc = wd && (ma || Ja) && (0 === C.indexOf("Linux armv") || 0 === C.indexOf("Linux aarch") || "Linux i686" === C) && g(d, "Linux x86_64") || !T && Hc, Pc = u.puffinDevice, lb = Pc && Pc.clientInfo, Ua = lb && "iOS" === lb.os && lb.osVersion, Gd = Ua && lb.model, ac = !Z && G.registerElement, Hd = !Z && G.execCommand, Id = Wb && ac && "11.0.696.34" === Ra, Jd = u._firefoxTV_playbackStateObserverJava, sa, ha, y;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var f = Cd;
    } else {
      if ("New Nintendo 3DS" === C || g(d, "iPhone OS 6_0") && 320 === Sb && 240 === Tb) {
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
                    var Qc = 3.3;
                    L = h;
                    O = y;
                  } else {
                    if (y = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = y, L = h, O = y, 0 > mc("4.10", y) && (p = "Sony", r = y);
                    } else {
                      if (g(d, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(d, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Pb && g(d, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Qc = 3.4;
                            L = h;
                            O = 2;
                            var mb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Vb || Ua || Xb) {
                              if (Ua) {
                                switch(f = Ua, Gd.substr(0, 4)) {
                                  case "iPho":
                                    var na = "iPhone";
                                    var aa = !0;
                                    break;
                                  case "iPad":
                                    na = "iPad";
                                    var U = !0;
                                    break;
                                  case "iPod":
                                    na = "iPod";
                                    var Rc = !0;
                                }
                              } else {
                                Vb ? f = Vb : f = k(S.split("_").join("."), "OS ");
                                f || (ha = !0);
                                if (!f || Dd) {
                                  f = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ka.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : kc.isNaN ? 9.2 : u.SharedWorker ? Ec && Ec.now ? 8.0 : 8.4 : Hd ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Fc ? 4.3 : Dc ? 4.1 : 3.2;
                                }
                                var V = Sb === 1.5 * Tb || 1.5 * Sb === Tb;
                                0 === C.indexOf("iPhone") ? (na = "iPhone", aa = !0) : 0 === C.indexOf("iPad") || Xb ? (na = "iPad", U = !0) : 0 === C.indexOf("iPod") && (na = "iPod", Rc = !0);
                              }
                              var bc;
                              if (bc = !Ua) {
                                var cc;
                                if (!(cc = ka.standalone)) {
                                  var nb;
                                  if (nb = U || 12 > f) {
                                    a: {
                                      for (var Kd in G) {
                                        if ("webkitFullscreenEnabled" === Kd) {
                                          nb = !0;
                                          break a;
                                        }
                                      }
                                      nb = void 0;
                                    }
                                  }
                                  cc = nb;
                                }
                                bc = cc || 11 <= f && 13 > f && ka.mediaDevices;
                              }
                              bc ? (p = "SafariMobile", L = "Safari", O = f) : p = "iOSWebView";
                              h = "iOS";
                              r = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", p = "AOSP", r = 2.2, L = p, O = r, fa = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", r = 2.2, L = p, O = r;
                                } else {
                                  if (y = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = y;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2.0 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, g(d, "Mobile") ? aa = !0 : g(d, "Tablet") && (U = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), L = h, O = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (aa = !0);
                                      } else {
                                        if (y = k(d, "Tizen ")) {
                                          h = "Tizen", f = y, L = "Samsung", O = Sa, p = L, r = O, aa = !0;
                                        } else {
                                          if (y = k(d, "Windows Phone ") || k(S, "Windows Phone OS ") || yd) {
                                            var ob = !0;
                                            f = y;
                                            aa = !0;
                                          } else {
                                            if (Yb && "ARM" === C) {
                                              ob = !0, f = 10, ha = aa = !0;
                                            } else {
                                              if (ib && g(S, "ZuneWP")) {
                                                ob = !0, f = 11 === Z ? 8.1 : 10 === Z ? 8 : 9 === Z ? 7.5 : 7 === Z ? 7 : "?", ha = aa = !0;
                                              } else {
                                                if (g(d, "FOMA;")) {
                                                  h = "FeaturePhone", aa = !0;
                                                } else {
                                                  if (g(d, "SoftBank;")) {
                                                    h = "FeaturePhone", aa = !0;
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
                                                              oa = !0, f = 5 <= R(T) ? 5 : 4, W = U = !0;
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
                                                                      h = "Kindle", f = y, p = "AOSP", r = 2.2, L = p, O = r;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Jd) {
                                                                        oa = !0, f = T, W = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Fd) {
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
                                                                                    var Sc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Aa, aa = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : fa && Ja ? (g(d, "Android 4.4;") ? V = {min:2.3} : 4 <= R(T) ? V = T : V = {min:2.2}, f = V, Oc && (ha = !0)) : fa && Ba ? (T ? V = T : (V = {min:1.6}, ha = !0), f = V, g(d, "Tablet") ? U = 
                                                                                    !0 : aa = !0) : T ? (f = T, fa = !0) : Wb && Oc ? (sa = !0, Sa ? V = {min:4.4} : jb && !Nc || Ic || Jc ? V = {min:4} : (V = T = void 0 !== Cc.touchAction ? {min:5} : ac ? 4.4 : Fc ? ka.connection ? u.searchBoxJavaBridge_ || jb ? kc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Dc ? 2.3 : 2.2 : 530 <= ma ? 2.0 : 1.5, Mc && (p = "Samsung", r = Mc)), f = V, fa = !0) : Id ? (f = {min:5}, sa = fa = !0) : Wb && 
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
  p || (W = W || fa, Ba ? (p = W || mb || aa || U ? "PrestoMobile" : "Presto", r = Ad) : ib ? ((V = tb(S, "Trident/") + 4) && V !== Z && (L = "IEHost", O = V), 10 <= Z && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = Z), mb || aa || U || Rc ? p = "TridentMobile" : Sc && 5 <= Z ? (p = "Tasman", L = "MacIE", O = Z) : (p = "Trident", Sc && (L = "MacIE", O = Z)), r = Z) : Yb ? (p = ob ? "EdgeMobile" : "EdgeHTML", r = k(S, "Edge/")) : Zb ? (p = "Goanna", 
  r = Zb) : Ja ? (p = W ? "Fennec" : "Gecko", r = ia || Bd) : Sa ? (p = "Samsung", r = Sa, sa && (ha = !0)) : (y = Qc || k(d, "NetFront/")) ? (p = "NetFront", r = y) : (y = k(d, "iCab")) ? (p = "iCab", r = y) : (y = nc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Gc && Aa) ? (p = "OperaMini", r = y, h || (g(d, "iPhone") ? na = "iPhone" : g(d, "iPad") ? na = "iPad" : g(d, "iPod") && (na = "iPod"), na && (h = "iOS"))) : Ub ? (p = "UCWEB", r = xd) : Ed ? (p = "KHTML", r = Pb) : fa && Nc ? (p = "AOSP", 
  r = T, sa && (ha = !0)) : jb || Ic || Jc ? (p = W ? "ChromiumMobile" : "Chromium", r = Ra, sa && (ha = !0)) : fa && ac ? (p = "ChromeWebView", r = 5 > R(T) ? T : Ra, sa && (ha = !0)) : fa && (Aa || sa) ? (p = "AOSP", r = T, sa && (ha = !0)) : Ra ? (p = W ? "ChromiumMobile" : "Chromium", r = Ra) : ma && (p = "WebKit", r = ma));
  h && (q.PLATFORM = h, f ? (q.PLATFORM_VERSION = oc(f), q[h] = f === f + "" ? R(f) : f) : q[h] = !0);
  p && (q.ENGINE = p, r ? (q.ENGINE_VERSION = oc(r), q[p] = r === r + "" ? R(r) : r) : q[p] = !0, L || (L = p, O = r));
  if (ha || Xb) {
    q.PC_MODE = !0;
  }
  var Ea = id, Va = [], md = !!G.getElementsByTagName, M = G.body, ta = M.style, B = q.Trident || q.TridentMobile, pb = q.Tasman, Tc = q.EdgeHTML || q.EdgeMobile, Uc = q.Presto || q.PrestoMobile, dc = q.Gecko, ec = q.Goanna, cb = q.WebKit, hb = q.SafariMobile || q.iOSWebView, Ld = q.OperaMini && q.UCWEB, Vc = q.Win32 || q.Win64, Md = R(ka.userAgent.split("Edg/")[1]);
  B || pb || (new lc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Wc = G.scripts, Nd = (pb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", Xc = 0 === location.href.indexOf("https"), Ya = [], tc, wb = 0, fc, Qa, ea, Od = pa(ta.transform) ? "transform" : pa(ta["-o-transform"]) ? "-o-transform" : pa(ta["-ms-transform"]) ? "-ms-transform" : pa(ta["-moz-transform"]) ? "-moz-transform" : pa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ka = Wc[Wc.length - 1].src.split("/");
  --Ka.length;
  var Pd = Ka.join("/");
  0 <= "http: https:".indexOf(Ka[0]) && Ka.splice(0, 3);
  Ka = Ka.join("/");
  var ja = Array.prototype;
  ja.pop || (ja.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ja.push || (ja.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ja.shift || (ja.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ja.splice || (ja.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, l = this.slice(a, a + b), A;
    if (0 < e) {
      var x = this.length - 1;
      for (A = a + b; x >= A; --x) {
        this[x + e] = this[x];
      }
    } else {
      if (0 > e) {
        x = a + b;
        for (A = this.length; x < A; ++x) {
          this[x + e] = this[x];
        }
        this.length += e;
      }
    }
    x = 2;
    for (A = c.length; x < A; ++x) {
      this[x - 2 + a] = c[x];
    }
    return l;
  });
  ja.indexOf || (ja.indexOf = function(a, b) {
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
  var Zc = function(a) {
    Xa.length || (Da = setInterval(Wa, qc));
    Xa.push({f:a, g:++Yc});
    return Yc;
  };
  var Xa = [], qc = 999, Yc = 0, Da;
  if (5 > B || pb) {
    u._wdb_onlooptimer = Wa, Wa = "_wdb_onlooptimer()";
  }
  Va.push(function() {
    6.1 > hb && $c(kd);
    qb(pc);
  });
  var I = function(a, b, c) {
    la.length || (wa = sb(La, Ma));
    la.push({f:a, p:b, g:++ad, t:new va - 0 + (Ma < c ? c : Ma)});
    return ad;
  };
  var bd = function(a) {
    for (var b = la.length, c; c = la[--b];) {
      if (c.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Ma = 64, ad = 0, wa;
  if (5 > B || pb) {
    u._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Va.push(function() {
    6.1 > hb && $c(ld);
    qb(rc);
  });
  var Ca = u.matchMedia, Fa;
  Ya.push(function() {
    Fa = ca(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var rb = function(a) {
    Ya.push(a);
  };
  var qb = function(a) {
    cd.push(a);
  };
  var cd = [], vb = u.onload, dd = u.onunload;
  onload = ub;
  onunload = function(a) {
    var b;
    dd && (b = dd(a));
    ba(cd, a);
    onunload = Ea;
    return b;
  };
  var gc = function(a) {
    uc.push(a);
  };
  var uc = [];
  rb(function() {
    sc();
    Zc(sc);
  });
  var Oa = [], Na, xb, yb;
  10 <= B || Tc ? (Ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Na = xb = a.matches;
    ba(Oa, Za());
  }), Ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Na = yb = a.matches;
    ba(Oa, Za());
  }), Ca("(-ms-high-contrast:active)").addListener(function(a) {
    Na = a.matches;
    ba(Oa, Za());
  }), Ga = null) : 10 > B || Vc && (44 <= dc || ec) || Vc && Md ? rb(function() {
    Fa.style.color = "#123456";
    Fa.style.backgroundColor = "#123456";
    60 > dc || ec ? Ga() : Ga() && Zc(Ga, 1000);
    Ga = null;
  }) : Ga = null;
  var Qd = [];
  Ca && Ca("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ba(Qd, a.matches);
  });
  var hc = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    ba(hc, !0);
  }, onafterprint = function() {
    ba(hc, !1);
  }, qb(function() {
    onbeforeprint = onafterprint = Ea;
  })) : Ca && Ca("print").addListener(function(a) {
    ba(hc, a.matches);
  });
  var $c = function(a) {
    ed.push(a);
  };
  var ed = [], ic = u.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    ub || ba(ed);
    return b;
  };
  qb(function() {
    onscroll = ic = Ea;
  });
  var Rd = $a("html")[0];
  var Ab = $a("head")[0];
  var ab;
  var Bb = void 0;
  var yc = {};
  ea || gc(function(a) {
    a && !pa(ea) && (ea = 1.8 <= dc || ec || 8 <= B || Tc || 530 <= cb || 3.2 <= hb, ea || (a = ca(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ea = 6 <= a.offsetWidth, xa(a)));
  });
  var Cb;
  9 > B && rb(function(a) {
    a = ca(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    fc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var pd = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || I(a, !1)) : e = I(b));
    }
    if (fd) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!B || 11 === B || 11 === q.IEHost) && c.width || l || (l = !0, e && bd(e), e = I(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && bd(e);
        Uc && !c.complete ? e = I(a, !1) : (Qa = !0, I(a, !0));
      };
      c.src = fd;
      8 > Uc && c.complete ? (Qa = !0, I(a, !0)) : l || (e = I(b));
    } else {
      I(a, !1);
    }
  };
  var fd = Xc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var od = xc;
  for (q.IEHost && 5.5 > B && rb(function() {
    ca(Ab, "link", {href:Pd + "/" + Nd, rel:"stylesheet", type:"text/css"});
  }); Va.length;) {
    Va.shift()();
  }
  Va = null;
  var X = String.fromCharCode, F = Xc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)];
  Oa.push(function(a) {
    bb("jsHcm");
    bb("jsHcmWob");
    bb("jsHcmBow");
    if (a) {
      switch((Od || 9 === B || 5.5 <= B && 9 > B && fc) && qa(M, "jsCanRotate"), a) {
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
  var Hb = [], Gb, Ib, gd;
  gc(function(a) {
    function b(t) {
      var m = t.getAttribute("pbtip") || "", n = m.charAt(0), J = "_" === n;
      m = J ? m.charAt(2) : n;
      n = J ? "Btm" : "";
      var K = t.getAttribute("title") || "";
      qa(t, "pbTipPos" + m.toUpperCase());
      ca(t, "div", {className:"pbTip" + n}, {width:K.length + l + "em"}, K);
      ca(t, "div", {className:"pbTail" + n});
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
        n = 10 - R(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + J]}, ab = 1, D = ca(t, "b", m, 0, K), e(t), e(D)) : e(t);
      }
    }
    function e(t) {
      Y || A || Ha(t, "pbChrCS") && Hb.push(t);
    }
    if (a && !gd) {
      gd = !0;
      var l = 6 > B ? 1 : 0;
      a = $a("SAMP");
      var A = 9 > B, x = 5 <= B && 6 > B, w, D, H, v;
      fc && qa(M, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], N = !Y && !A && !0, Q = !ea || N || void 0;
        for (H = -1; w = a[++H];) {
          if (Ha(w.parentElement || w.parentNode, "pbLCD")) {
            var ra = w.children;
            for (w = ra.length; w;) {
              var P = ra[--w];
              switch(P.tagName.toUpperCase()) {
                case "A":
                  if (Q) {
                    for (ea || b(P), v = P.children.length; v;) {
                      c(P.children[--v]);
                    }
                  }
                  Ld ? P.setAttribute("href", "javascript:void(0)") : P.onclick = nd;
                  break;
                case "B":
                  Q && c(P);
              }
            }
          }
        }
        Hb.length ? (setInterval(zc, 500), ea ? Ia([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ia([".pbChrCS", "background-position:0 -51px"])) : zc = null;
        N && (ea ? Ia([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + F + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        F + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + F + "pbLCD/x3_a90.png)"]) : Ia([".pbAlp1", "background-image:url(" + F + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + F + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + F + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + F + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + F + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        F + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + F + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + F + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + F + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > cb && (Rd.onclick = function(a) {
    if (Ib) {
      return Ib = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new lc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Nb = za[7], Bc = za[30], rd = za[113], eb = X(8337) + X(8331), Ob = X(160), vd = X(8194), td = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ud = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), sd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Bc + za[31]).split(""), ya = 
  [], Lb = [], fb, Mb;
  gc(function(a) {
    if (a && !Mb) {
      var b = G.all || $a("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ha(c, "pbList") ? gb(c) : Ha(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && gb(c, !0);
      }
      ya.length && db();
      Mb = !0;
    }
  });
  hd.prettify = gb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

