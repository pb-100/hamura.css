PB100 = {};
(function(gd, p, u, hd, H, pa, jc, X, kc, lc, Qd, sb, id, wa, Rd) {
  function tb(a, b) {
    var c = X(a.split(b)[1]);
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
      var l = X(a[c]), A = X(b[c]);
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
  function qa(a) {
    return void 0 !== a;
  }
  function Wa() {
    for (var a, b = 0; b < Xa.length; ++b) {
      a = Xa[b], a.f();
    }
  }
  function jd() {
    Ea && (pc(), Ea = setInterval(Wa, qc));
  }
  function pc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function Ma() {
    for (var a, b = 0, c = new wa - 0; b < la.length;) {
      c < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    xa = la.length ? sb(Ma, Na) : 0;
  }
  function kd() {
    xa && (rc(), xa = sb(Ma, Na));
  }
  function rc() {
    xa && (xa = id(xa));
  }
  function ca(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function ub(a) {
    var b;
    vb && (b = vb(a));
    ca(Ya, a);
    onload = Fa;
    Ya = ub = vb = onload = null;
    return b;
  }
  function sc() {
    var a = 9 === Ga.offsetWidth;
    tc !== a && ca(uc, tc = a);
  }
  function Ha() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = H.defaultView, c = wb, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Oa = "#123456" !== b && "rgb(18,52,86)" !== b, xb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), yb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== Za() && ca(Pa, wb), !0;
    }
  }
  function Za() {
    return wb = Oa ? yb ? 2 : xb ? 3 : 1 : 0;
  }
  function $a(a) {
    var b = b || H;
    return ld ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function ya(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function zb(a, b) {
    var c = H.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function da(a, b, c, e, l) {
    function A(D, I) {
      for (var v in I) {
        switch(v) {
          case "class":
          case "className":
            ra(D, I[v]);
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
      b = zb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = zb(b);
    }
    ab ? (2 === ab && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    ab = 0;
    c && A(b, c);
    e && x(b, e);
    l && !w && b.appendChild(H.createTextNode(l));
    return b;
  }
  function Ia(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var c;
    if (!Ia(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function bb(a) {
    if (Ia(L, a)) {
      var b = L.className.split(" ");
      b.splice(b.indexOf(a), 1);
      L.className = b.join(" ");
    }
  }
  function vc(a) {
    a = da(Ab, "style", {type:"text/css", media:"all"}, 0, a);
    Bb = a.sheet || a.styleSheet;
  }
  function Ja(a) {
    for (var b = Bb, c, e, l = "", A; a.length;) {
      c = a.shift(), e = a.shift(), A = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(A, b.cssRules.length) : l += A;
    }
    l && vc(l);
  }
  function wc(a) {
    function b(e) {
      Cb = e;
      c.onload = c.onerror = Fa;
      J(a, e);
    }
    if (qa(Cb)) {
      J(a, Cb);
    } else {
      if (8 > B) {
        J(a, !1);
      } else {
        var c = new Image;
        c.onerror = function() {
          c.onload = c.onerror = Fa;
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
      H.fonts.load('1.6em "' + b + '"').then(function() {
        v(b) ? J(a, Z) : D(!0);
      }, function() {
        wc(Y);
      });
    }
    function w(z) {
      return H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (O = new wa - 0, !1) : z < new wa - O;
    }
    function D(z) {
      z && (O = new wa - 0);
      v(b) ? a(Z) : w(sa) ? t ? a(0) : 9 > B ? J(a, 0) : wc(Y) : J(D);
    }
    function I() {
      var z = -1, E;
      I = null;
      F = ["sans-serif", "serif"];
      m = da(L, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Q = {}; E = F[++z];) {
        m.style.fontFamily = E, Q[E] = m.offsetWidth;
      }
    }
    function v(z) {
      var E = 0, ea = -1, Db, Eb, Fb = 0;
      I && I();
      for (L.appendChild(m); Db = F[++ea];) {
        if (m.style.fontFamily = '"' + z + '",' + Db, m.offsetWidth !== Q[Db]) {
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
      ya(m);
      return Z = E + Fb;
    }
    function Y(z) {
      (t = z) ? M(!0) : a(0);
    }
    function M(z) {
      z && (O = new wa - 0);
      for (E in c) {
        if (v(E)) {
          q = da(L, "div", {"aria-hidden":"true", className:e, id:e});
          z = c[E];
          var E = Bb, ea = yc.all || 0;
          E ? E.addImport ? E.addImport(z, ea) : E.insertRule && E.insertRule('@import "' + z + '"', ea) : vc('@import "' + z + '"');
          yc.all = ++ea;
          J(P, !0);
        } else {
          w(100) ? (delete c[E], J(M, !0)) : J(M);
        }
        return;
      }
      a(0);
    }
    function P(z) {
      z && (O = new wa - 0);
      1 < q.offsetWidth ? (ya(q), sa = 100, J(D, !0)) : w(sa) ? (ya(q), a(0)) : J(P);
    }
    var sa = A || 5000, O, t, m, q, F, Q, Z;
    (function() {
      var z;
      if (p.MeeGo || 2.2 > p.AOSP || p.WebOS || p.UCWEB || 10 > p.TridentMobile || p.NDS || p.NDSi || p.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var E = da(Ab, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), ea = (ea = E.sheet || E.styleSheet) ? (z = ea.cssRules) && (z = z[0]) ? z.cssText : ea.cssText || "" : "";
      z = 0 < ea.indexOf("src") && 0 === ea.indexOf("@font-face");
      ya(E);
      return z;
    })() ? !H.fonts || 603 > cb ? D(!0) : x() : J(a, 0);
  }
  function zc() {
    Gb = !Gb;
    for (var a = -1, b; b = Hb[++a];) {
      b.style.visibility = Gb ? "" : "hidden";
    }
  }
  function md(a) {
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
    nd(Jb, "PB-100", {"PB-100_canTTF":G + "pbFont/ttf.css", "PB-100_canWOFF":G + "pbFont/woff.css", "PB-100_canEOT":G + "pbFont/eot.css", "PB-100_canSVG":G + "pbFont/svg.css"}, "pbFont-testCssReady", {h:eb}, 5000);
  }
  function Jb(a) {
    (fb = a) ? Kb() : Qa ? Ac(!0) : qa(Qa) ? Kb() : od(Ac);
  }
  function Ac(a) {
    a && (ra(L, "pbList-noWebFont"), fa ? Ja([".pbList font:after", "content:url(" + G + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ja([".pbList font", "background-image:url(" + G + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Kb();
  }
  function Kb() {
    for (Jb = xc = null; za.length;) {
      gb(za.shift(), Lb.shift());
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
      -1 === za.indexOf(a) && (za.push(a), Lb.push(b), Mb && db && db());
    } else {
      var l = za.indexOf(a);
      0 <= l && za.splice(l, 1) && Lb.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== fb && (l = l.split(eb).join(Bc)), b ? a.data = l : pd(l.split("\r").join("").split("&yen;").join(qd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Nb).split("&amp;").join("&"), a);
      }
    }
  }
  function pd(a, b) {
    function c(m, q) {
      for (var F = ""; q;) {
        q & 1 && (F += m), q >>= 1, m += m;
      }
      return F;
    }
    function e(m, q, F) {
      for (var Q, Z = -1, z, E; Q = q[++Z];) {
        for (; 0 <= (z = m.indexOf(Q));) {
          E = Q.length, m = m.substr(0, z) + c(F, E) + m.substr(z + E);
        }
      }
      return m;
    }
    function l(m) {
      var q = X(m), F = "" + q;
      return 0 < q && q === q | 0 && (q = m.indexOf(F) + F.length, q <= m.length) ? q : 0;
    }
    var A = " area line str cmd fnc syb".split(" "), x = [], w = "", D = -1, I, v;
    if (function(m) {
      var q = m.indexOf("P");
      if (-1 === q) {
        return !1;
      }
      q = X(m.charAt(q + 1));
      return 0 <= q && 9 >= q;
    }(a)) {
      w = c("+", a.length);
    } else {
      for (0 <= (D = l(a)) && (w = c("|", D), --D); v = a.charAt(++D);) {
        v === Nb || I ? (w += "~", v === Nb && (I = !I)) : w += v;
      }
      w = e(w, rd, "^");
      w = e(w, sd, "{");
      w = e(w, td, "}");
    }
    D = 0;
    for (I = a.length; D < I; ++D) {
      v = a.charAt(D);
      var Y = v === Ob, M = " " === v;
      v = Y ? " " : v;
      var P = w.charAt(D), sa = O, O = "|" === P;
      P = A["+|~{}^".indexOf(P) + 1];
      if ("\n" !== v) {
        if (fb || !Qa) {
          8 > B && M && (v = D === I - 1 ? Ob : ud), 2 === fb && a.substr(D, 2) === eb && (v = eb, ++D), M = M && "str" === P ? ' class="pbList-strsp"' : Y ? "" : !M && P ? ' class="pbList-' + P + '"' : "";
        } else {
          var t = Aa.indexOf(v);
          t = -1 === t ? "" : Aa.indexOf(v).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          M = M && "str" === P ? ' class="pbList-strsp"' : M || !t ? "" : P ? ' class="' + (t ? t + " " : "") + "pbList-" + P + '"' : ' class="' + t + '"';
        }
        sa && Y && (cb || hb) && (v = Ob);
        x.push("<font" + M + ">" + v + "</font>");
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
      ya(b);
    }
  }
  var n, r, d = pa.userAgent, R = pa.appVersion, Pb = X(R) | 0, C = pa.platform, Qb = H.documentElement, Cc = Qb && Qb.style, Rb = H.documentMode, Sb = jc.width, Tb = jc.height, Dc = u.HTMLAudioElement, Ec = u.performance, Fc = u.Int8Array, vd = void 0 !== u.ontouchstart, Ba = k(R, "Version/") || k(d, "Version/"), Ka = void 0 !== Cc.MozAppearance, Gc = u.operamini, Ub = g(d, "UCWEB"), wd = Ub && k(d, " U2/"), xd = Ub && k(d, "; wds "), Vb = k(d.split("_").join("."), "; iPh OS "), yd = k(d, "; Adr "), 
  Hc = g(R, "YJApp-ANDROID"), ha = g(C, "Android") || Ka && g(R, "Android") || Hc, S = k(C, "Android ") || k(R, "Android ") || k(d, "Android ") || yd, Wb = g(C, "Linux"), Xb = "MacIntel" === C && void 0 !== pa.standalone, Ca = !Gc && u.opera, zd = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : nc(k(d, "Opera "), Ba, "" + Pb)), Ic = u.opr, ib = !Ca && (H.all || Rb), aa = ib && (Rb ? Rb : u.XMLHttpRequest ? H.getElementsByTagName ? 7 : 4 : H.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), Yb = !ib && Qb.msContentZoomFactor, jb = !Yb && u.chrome, Zb = Ka && k(d, "Goanna/"), ja = !Zb && Ka && k(d, "rv:"), Ad = k(d, "Firefox/"), Bd = k(d, "Opera/"), Cd = u.FNRBrowser, ma = tb(d, "AppleWebKit/"), Ra = k(d, "Chrome/"), Jc = k(d, "OPR/"), Dd = k(R, "KHTML/"), Ed = k(d.toLowerCase(), "iris"), Sa = tb(d, "SamsungBrowser/"), Ta;
  if (Ta = !Sa) {
    a: {
      for (var Kc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      kb, $b = Kc.length; kb = Kc[--$b];) {
        if (g(d, kb)) {
          Ta = 2 > X(Ba) ? Ba : 0.9;
          break a;
        }
      }
      var Lc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for ($b = Lc.length; kb = Lc[--$b];) {
        if (g(d, kb)) {
          Ta = Ba;
          break a;
        }
      }
      Ta = void 0;
    }
  }
  var Mc = Ta, Nc = jb && 534.3 >= ma, Oc = vd && (ma || Ka) && (0 === C.indexOf("Linux armv") || 0 === C.indexOf("Linux aarch") || "Linux i686" === C) && g(d, "Linux x86_64") || !S && Hc, Pc = u.puffinDevice, lb = Pc && Pc.clientInfo, Ua = lb && "iOS" === lb.os && lb.osVersion, Fd = Ua && lb.model, ac = !aa && H.registerElement, Gd = !aa && H.execCommand, Hd = Wb && ac && "11.0.696.34" === Ra, Id = u._firefoxTV_playbackStateObserverJava, ta, ia, y;
  if ("Nitro" === C) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === C) {
      h = "NDSi";
      var f = Bd;
    } else {
      if ("New Nintendo 3DS" === C || g(d, "iPhone OS 6_0") && 320 === Sb && 240 === Tb) {
        h = "New3DS", f = k(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === C) {
          h = "N3DS", f = k(d, "Version/"), ma = 535;
        } else {
          if ("Nintendo Swicth" === C) {
            h = "Swicth", f = k(R, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === C) {
              h = "WiiU", f = k(R, "NintendoBrowser/"), ma = k(R, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === C) {
                h = "Wii";
                f = k(d, "Wii; U; ; ");
                var K = h;
                var N = f;
              } else {
                if (y = k(d, "PlayStation Vita ")) {
                  h = "PSVita", f = y, K = h, N = y;
                } else {
                  if (y = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = y;
                    var Qc = 3.3;
                    K = h;
                    N = y;
                  } else {
                    if (y = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = y, K = h, N = y, 0 > mc("4.10", y) && (n = "Sony", r = y);
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
                            K = h;
                            N = 2;
                            var mb = !0;
                          } else {
                            if (0 === C.indexOf("iP") || Vb || Ua || Xb) {
                              if (Ua) {
                                switch(f = Ua, Fd.substr(0, 4)) {
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
                                    var Rc = !0;
                                }
                              } else {
                                Vb ? f = Vb : f = k(R.split("_").join("."), "OS ");
                                f || (ia = !0);
                                if (!f || Cd) {
                                  f = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : pa.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : kc.isNaN ? 9.2 : u.SharedWorker ? Ec && Ec.now ? 8.0 : 8.4 : Gd ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Fc ? 4.3 : Dc ? 4.1 : 3.2;
                                }
                                var U = Sb === 1.5 * Tb || 1.5 * Sb === Tb;
                                0 === C.indexOf("iPhone") ? (na = "iPhone", ba = !0) : 0 === C.indexOf("iPad") || Xb ? (na = "iPad", T = !0) : 0 === C.indexOf("iPod") && (na = "iPod", Rc = !0);
                              }
                              var bc;
                              if (bc = !Ua) {
                                var cc;
                                if (!(cc = pa.standalone)) {
                                  var nb;
                                  if (nb = T || 12 > f) {
                                    a: {
                                      for (var Jd in H) {
                                        if ("webkitFullscreenEnabled" === Jd) {
                                          nb = !0;
                                          break a;
                                        }
                                      }
                                      nb = void 0;
                                    }
                                  }
                                  cc = nb;
                                }
                                bc = cc || 11 <= f && 13 > f && pa.mediaDevices;
                              }
                              bc ? (n = "SafariMobile", K = "Safari", N = f) : n = "iOSWebView";
                              h = "iOS";
                              r = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", n = "AOSP", r = 2.2, K = n, N = r, ha = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", n = "AOSP", r = 2.2, K = n, N = r;
                                } else {
                                  if (y = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = y;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ja ? "1.0.1" : 19 > ja ? 1.1 : 27 > ja ? 1.2 : 29 > ja ? 1.3 : 31 > ja ? 1.4 : 33 > ja ? 2.0 : 35 > ja ? 2.1 : 38 > ja ? 2.2 : 45 > ja ? 2.5 : 2.6, g(d, "Mobile") ? ba = !0 : g(d, "Tablet") && (T = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), K = h, N = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (y = k(d, "Tizen ")) {
                                          h = "Tizen", f = y, K = "Samsung", N = Sa, n = K, r = N, ba = !0;
                                        } else {
                                          if (y = k(d, "Windows Phone ") || k(R, "Windows Phone OS ") || xd) {
                                            var ob = !0;
                                            f = y;
                                            ba = !0;
                                          } else {
                                            if (Yb && "ARM" === C) {
                                              ob = !0, f = 10, ia = ba = !0;
                                            } else {
                                              if (ib && g(R, "ZuneWP")) {
                                                ob = !0, f = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ia = ba = !0;
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
                                                      var V = T = !0;
                                                    } else {
                                                      if (g(d, "KFKAWI")) {
                                                        oa = !0, f = 6, V = T = !0;
                                                      } else {
                                                        if (g(d, "KFSUWI") || g(d, "KFAUWI") || g(d, "KFDOWI")) {
                                                          oa = !0, f = 5, V = T = !0;
                                                        } else {
                                                          if (g(d, "KFGIWI")) {
                                                            oa = !0, f = 5, V = T = !0;
                                                          } else {
                                                            if (g(d, "KFARWI") || g(d, "KFSAWA") || g(d, "KFSAWI")) {
                                                              oa = !0, f = 5 <= X(S) ? 5 : 4, V = T = !0;
                                                            } else {
                                                              if (g(d, "KFSOWI") || g(d, "KFTHWA") || g(d, "KFTHWI") || g(d, "KFAPWA") || g(d, "KFAPWI")) {
                                                                oa = !0, f = 3, V = T = !0;
                                                              } else {
                                                                if (g(d, "KFOT") || g(d, "KFTT") || g(d, "KFJWA") || g(d, "KFJWI")) {
                                                                  oa = !0, f = 2, V = T = !0;
                                                                } else {
                                                                  if (g(d, "Kindle Fire")) {
                                                                    oa = !0, f = 1, V = T = !0;
                                                                  } else {
                                                                    if (y = k(d, "Kindle/")) {
                                                                      h = "Kindle", f = y, n = "AOSP", r = 2.2, K = n, N = r;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Id) {
                                                                        oa = !0, f = S, V = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Ed) {
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
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ba, ba = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ha && Ka ? (g(d, "Android 4.4;") ? U = {min:2.3} : 4 <= X(S) ? U = S : U = {min:2.2}, f = U, Oc && (ia = !0)) : ha && Ca ? (S ? U = S : (U = {min:1.6}, ia = !0), f = U, g(d, "Tablet") ? T = 
                                                                                    !0 : ba = !0) : S ? (f = S, ha = !0) : Wb && Oc ? (ta = !0, Sa ? U = {min:4.4} : jb && !Nc || Ic || Jc ? U = {min:4} : (U = S = void 0 !== Cc.touchAction ? {min:5} : ac ? 4.4 : Fc ? pa.connection ? u.searchBoxJavaBridge_ || jb ? kc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Dc ? 2.3 : 2.2 : 530 <= ma ? 2.0 : 1.5, Mc && (n = "Samsung", r = Mc)), f = U, ha = !0) : Hd ? (f = {min:5}, ta = ha = !0) : Wb && 
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
  ha && (h = h || "Android");
  ob && (h = "WindowsPhone");
  n || (V = V || ha, Ca ? (n = V || mb || ba || T ? "PrestoMobile" : "Presto", r = zd) : ib ? ((U = tb(R, "Trident/") + 4) && U !== aa && (K = "IEHost", N = U), 10 <= aa && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (K = "ModernIE", N = aa), mb || ba || T || Rc ? n = "TridentMobile" : Sc && 5 <= aa ? (n = "Tasman", K = "MacIE", N = aa) : (n = "Trident", Sc && (K = "MacIE", N = aa)), r = aa) : Yb ? (n = ob ? "EdgeMobile" : "EdgeHTML", r = k(R, "Edge/")) : Zb ? (n = "Goanna", 
  r = Zb) : Ka ? (n = V ? "Fennec" : "Gecko", r = ja || Ad) : Sa ? (n = "Samsung", r = Sa, ta && (ia = !0)) : (y = Qc || k(d, "NetFront/")) ? (n = "NetFront", r = y) : (y = k(d, "iCab")) ? (n = "iCab", r = y) : (y = nc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Gc && Ba) ? (n = "OperaMini", r = y, h || (g(d, "iPhone") ? na = "iPhone" : g(d, "iPad") ? na = "iPad" : g(d, "iPod") && (na = "iPod"), na && (h = "iOS"))) : Ub ? (n = "UCWEB", r = wd) : Dd ? (n = "KHTML", r = Pb) : ha && Nc ? (n = "AOSP", 
  r = S, ta && (ia = !0)) : jb || Ic || Jc ? (n = V ? "ChromiumMobile" : "Chromium", r = Ra, ta && (ia = !0)) : ha && ac ? (n = "ChromeWebView", r = 5 > X(S) ? S : Ra, ta && (ia = !0)) : ha && (Ba || ta) ? (n = "AOSP", r = S, ta && (ia = !0)) : Ra ? (n = V ? "ChromiumMobile" : "Chromium", r = Ra) : ma && (n = "WebKit", r = ma));
  h && (p.PLATFORM = h, f ? (p.PLATFORM_VERSION = oc(f), p[h] = f === f + "" ? X(f) : f) : p[h] = !0);
  n && (p.ENGINE = n, r ? (p.ENGINE_VERSION = oc(r), p[n] = r === r + "" ? X(r) : r) : p[n] = !0, K || (K = n, N = r));
  if (ia || Xb) {
    p.PC_MODE = !0;
  }
  var Fa = hd, Va = [], ld = !!H.getElementsByTagName, L = H.body, va = L.style, B = p.Trident || p.TridentMobile, pb = p.Tasman, Tc = p.EdgeHTML || p.EdgeMobile, Uc = p.Presto || p.PrestoMobile, dc = p.Gecko, ec = p.Goanna, cb = p.WebKit, hb = p.SafariMobile || p.iOSWebView, Kd = p.OperaMini && p.UCWEB;
  B || pb || (new lc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Vc = H.scripts, Ld = (pb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", Wc = 0 === location.href.indexOf("https"), Ya = [], tc, wb = 0, fc, Qa, fa, Md = qa(va.transform) ? "transform" : qa(va["-o-transform"]) ? "-o-transform" : qa(va["-ms-transform"]) ? "-ms-transform" : qa(va["-moz-transform"]) ? "-moz-transform" : qa(va["-webkit-transform"]) ? "-webkit-transform" : "";
  var La = Vc[Vc.length - 1].src.split("/");
  --La.length;
  var Nd = La.join("/");
  0 <= "http: https:".indexOf(La[0]) && La.splice(0, 3);
  La = La.join("/");
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
  var Yc = function(a) {
    Xa.length || (Ea = setInterval(Wa, qc));
    Xa.push({f:a, g:++Xc});
    return Xc;
  };
  var Xa = [], qc = 999, Xc = 0, Ea;
  if (5 > B || pb) {
    u._wdb_onlooptimer = Wa, Wa = "_wdb_onlooptimer()";
  }
  Va.push(function() {
    6.1 > hb && Zc(jd);
    qb(pc);
  });
  var J = function(a, b, c) {
    la.length || (xa = sb(Ma, Na));
    la.push({f:a, p:b, g:++$c, t:new wa - 0 + (Na < c ? c : Na)});
    return $c;
  };
  var ad = function(a) {
    for (var b = la.length, c; c = la[--b];) {
      if (c.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Na = 64, $c = 0, xa;
  if (5 > B || pb) {
    u._wdb_ontimer = Ma, Ma = "_wdb_ontimer()";
  }
  Va.push(function() {
    6.1 > hb && Zc(kd);
    qb(rc);
  });
  var Da = u.matchMedia, Ga;
  Ya.push(function() {
    Ga = da(L, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var rb = function(a) {
    Ya.push(a);
  };
  var qb = function(a) {
    bd.push(a);
  };
  var bd = [], vb = u.onload, cd = u.onunload;
  onload = ub;
  onunload = function(a) {
    var b;
    cd && (b = cd(a));
    ca(bd, a);
    onunload = Fa;
    return b;
  };
  var gc = function(a) {
    uc.push(a);
  };
  var uc = [];
  rb(function() {
    sc();
    Yc(sc);
  });
  var Pa = [], Oa, xb, yb;
  10 <= B || Tc ? (Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Oa = xb = a.matches;
    ca(Pa, Za());
  }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Oa = yb = a.matches;
    ca(Pa, Za());
  }), Da("(-ms-high-contrast:active)").addListener(function(a) {
    Oa = a.matches;
    ca(Pa, Za());
  }), Ha = null) : 10 > B || (p.Win32 || p.Win64) && (44 <= dc || ec) ? rb(function() {
    Ga.style.color = "#123456";
    Ga.style.backgroundColor = "#123456";
    60 > dc || ec ? Ha() : Ha() && Yc(Ha, 1000);
    Ha = null;
  }) : Ha = null;
  var Od = [];
  Da && Da("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Od, a.matches);
  });
  var hc = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    ca(hc, !0);
  }, onafterprint = function() {
    ca(hc, !1);
  }, qb(function() {
    onbeforeprint = onafterprint = Fa;
  })) : Da && Da("print").addListener(function(a) {
    ca(hc, a.matches);
  });
  var Zc = function(a) {
    dd.push(a);
  };
  var dd = [], ic = u.onscroll;
  onscroll = function(a) {
    var b;
    ic && (b = ic(a));
    ub || ca(dd);
    return b;
  };
  qb(function() {
    onscroll = ic = Fa;
  });
  var Pd = $a("html")[0];
  var Ab = $a("head")[0];
  var ab;
  var Bb = void 0;
  var yc = {};
  fa || gc(function(a) {
    a && !qa(fa) && (fa = 1.8 <= dc || ec || 8 <= B || Tc || 530 <= cb || 3.2 <= hb, fa || (a = da(L, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), fa = 6 <= a.offsetWidth, ya(a)));
  });
  var Cb;
  9 > B && rb(function(a) {
    a = da(L, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    fc = 1 < a.offsetHeight;
    a.style.cssText = "";
    ya(a);
  });
  var od = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || J(a, !1)) : e = J(b));
    }
    if (ed) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!B || 11 === B || 11 === p.IEHost) && c.width || l || (l = !0, e && ad(e), e = J(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && ad(e);
        Uc && !c.complete ? e = J(a, !1) : (Qa = !0, J(a, !0));
      };
      c.src = ed;
      8 > Uc && c.complete ? (Qa = !0, J(a, !0)) : l || (e = J(b));
    } else {
      J(a, !1);
    }
  };
  var ed = Wc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var nd = xc;
  for (p.IEHost && 5.5 > B && rb(function() {
    da(Ab, "link", {href:Nd + "/" + Ld, rel:"stylesheet", type:"text/css"});
  }); Va.length;) {
    Va.shift()();
  }
  Va = null;
  var W = String.fromCharCode, G = Wc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", W(960), ")", "(", W(234), W(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", W(9824), "\u2190", W(9829), W(9830), W(9827), W(956), "\u03a9", "\u2193", "\u2192", "%", W(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", W(9619)];
  Pa.push(function(a) {
    bb("jsHcm");
    bb("jsHcmWob");
    bb("jsHcmBow");
    if (a) {
      switch((Md || 9 === B || 5.5 <= B && 9 > B && fc) && ra(L, "jsCanRotate"), a) {
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
      bb("jsCanRotate");
    }
  });
  var Hb = [], Gb, Ib, fd;
  gc(function(a) {
    function b(t) {
      var m = t.getAttribute("pbtip") || "", q = m.charAt(0), F = "_" === q;
      m = F ? m.charAt(2) : q;
      q = F ? "Btm" : "";
      var Q = t.getAttribute("title") || "";
      ra(t, "pbTipPos" + m.toUpperCase());
      da(t, "div", {className:"pbTip" + q}, {width:Q.length + l + "em"}, Q);
      da(t, "div", {className:"pbTail" + q});
      x && F && (t.focus(), t.blur());
    }
    function c(t) {
      if (fa && M) {
        e(t);
      } else {
        var m = t.getAttribute("pbGhos") || "", q = m.substr(1), F = t.className, Q = F.split("pbCsr")[1] || "";
        F = F.split("pbAlp")[1] || "";
        if ("CS" === q) {
          var Z = "_";
        } else {
          Z = q, 3 === Z.length && (Z = Z.substr(0, 2)), Z = Aa[parseInt(Z, 16)] || "~";
        }
        Q = Q.split(" ")[0];
        F = F.split(" ")[0];
        F = 10 - X(F);
        m ? (m = {className:["pbChr" + q + " pbAlp" + F + " pbCsr" + Q]}, ab = 1, D = da(t, "b", m, 0, Z), e(t), e(D)) : e(t);
      }
    }
    function e(t) {
      Y || A || Ia(t, "pbChrCS") && Hb.push(t);
    }
    if (a && !fd) {
      fd = !0;
      var l = 6 > B ? 1 : 0;
      a = $a("SAMP");
      var A = 9 > B, x = 5 <= B && 6 > B, w, D, I, v;
      fc && ra(L, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== va.opacity || void 0 !== va["-moz-opacity"] || void 0 !== va["-khtml-opacity"], M = !Y && !A && !0, P = !fa || M || void 0;
        for (I = -1; w = a[++I];) {
          if (Ia(w.parentElement || w.parentNode, "pbLCD")) {
            var sa = w.children;
            for (w = sa.length; w;) {
              var O = sa[--w];
              switch(O.tagName.toUpperCase()) {
                case "A":
                  if (P) {
                    for (fa || b(O), v = O.children.length; v;) {
                      c(O.children[--v]);
                    }
                  }
                  Kd ? O.setAttribute("href", "javascript:void(0)") : O.onclick = md;
                  break;
                case "B":
                  P && c(O);
              }
            }
          }
        }
        Hb.length ? (setInterval(zc, 500), fa ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : zc = null;
        M && (fa ? Ja([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + G + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + G + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        G + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + G + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + G + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + G + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + G + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + G + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + G + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + G + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        G + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + G + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + G + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + G + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > cb && (Pd.onclick = function(a) {
    if (Ib) {
      return Ib = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new lc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(H);
  var Nb = Aa[7], Bc = Aa[30], qd = Aa[113], eb = W(8337) + W(8331), Ob = W(160), ud = W(8194), sd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), td = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), rd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Bc + Aa[31]).split(""), za = 
  [], Lb = [], fb, Mb;
  gc(function(a) {
    if (a && !Mb) {
      var b = H.all || $a("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? gb(c) : Ia(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && gb(c, !0);
      }
      za.length && db();
      Mb = !0;
    }
  });
  gd.prettify = gb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

