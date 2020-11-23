PB100 = {};
(function(od, v, w, pd, I, ha, nc, Y, oc, Ab, ge, Bb, qd, xa, he) {
  function ab(a, b) {
    var c = Y(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function pc(a) {
    return f(a, "Linux armv") || f(a, "Linux aarch") || f(a, "Linux i686") || f(a, "Linux x86_64");
  }
  function l(a, b) {
    var c = "", e = -1, g;
    if (a = a.split(b)[1]) {
      for (; g = a.charCodeAt(++e);) {
        if (48 <= g && 57 >= g || 46 === g) {
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
  function ia(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    var g = a.length, r = b.length;
    for (e = g < r ? g : r; c < e; ++c) {
      var p = a[c] - 0, q = b[c] - 0;
      if (p !== q) {
        return p > q ? 1 : -1;
      }
    }
    return g > r ? 1 : g === r ? 0 : -1;
  }
  function qc() {
    for (var a = arguments, b = 1, c = a[0], e; b < a.length; ++b) {
      0 > ia(c, e = a[b]) && (c = e);
    }
    return c;
  }
  function rc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function ta(a) {
    return void 0 !== a;
  }
  function bb() {
    for (var a, b = 0; b < cb.length; ++b) {
      a = cb[b], a.f();
    }
  }
  function rd() {
    Fa && (sc(), Fa = setInterval(bb, tc));
  }
  function sc() {
    Fa && (Fa = clearInterval(Fa));
  }
  function La() {
    for (var a, b = 0, c = new xa - 0; b < oa.length;) {
      c < oa[0].t ? ++b : (a = oa.splice(b, 1)[0], a.f(a.p));
    }
    ya = oa.length ? Bb(La, Ma) : 0;
  }
  function sd() {
    ya && (uc(), ya = Bb(La, Ma));
  }
  function uc() {
    ya && (ya = qd(ya));
  }
  function za(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Ga(a, b) {
    vc && !Na.length && J(wc);
    Na.push(a, b);
  }
  function wc() {
    var a = Na, b;
    for (Na = []; b = a.shift();) {
      za(b, a.shift());
    }
  }
  function Cb(a) {
    var b;
    Db && (b = Db(a));
    za(db, a);
    onload = Oa;
    db = Cb = Db = onload = null;
    return b;
  }
  function xc() {
    var a = 9 === Ha.offsetWidth;
    Eb !== a && Ga(yc, Eb = a);
  }
  function eb() {
    return Fb = Pa ? Gb ? 2 : Hb ? 3 : 1 : 0;
  }
  function Qa(a) {
    var b = b || I;
    return td ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Aa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function zc(a) {
    var b = a.children, c = 0, e, g;
    if (!b) {
      for (b = [], a = a.childNodes, e = a.length; c < e; ++c) {
        1 === (g = a[c]).nodeType && (b[b.length] = g);
      }
    }
    return b;
  }
  function Ib(a, b) {
    var c = I.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function Z(a, b, c, e, g) {
    function r(L, G) {
      for (var H in G) {
        switch(H) {
          case "class":
          case "className":
            pa(L, G[H]);
            break;
          default:
            L.setAttribute(H, G[H]);
        }
      }
    }
    function p(L, G) {
      var H = L.style, C;
      for (C in G) {
        H[C] = G[C];
      }
    }
    if ("style" === b) {
      var q = !0;
      b = Ib("div", 'a<style type="text/css">' + g + "</style>").lastChild;
    } else {
      b = Ib(b);
    }
    fb ? (2 === fb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    fb = 0;
    c && r(b, c);
    e && p(b, e);
    g && !q && b.appendChild(I.createTextNode(g));
    return b;
  }
  function Ia(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function pa(a, b) {
    var c;
    if (!Ia(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function gb(a) {
    if (Ia(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function Ac(a) {
    8 <= ja && 9 > ja ? Z(hb, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + Bc(a)}) : (a = Z(hb, "style", {type:"text/css", media:"all"}, 0, a), Jb = a.sheet || a.styleSheet);
  }
  function Ja(a) {
    for (var b = Jb, c, e, g = "", r; a.length;) {
      c = a.shift(), e = a.shift(), r = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(r, b.cssRules.length) : g += r;
    }
    g && Ac(g);
  }
  function Cc(a) {
    function b(g) {
      e = Kb(e);
      Lb = g;
      c.onload = c.onerror = Oa;
      J(a, g);
    }
    if (ta(Lb)) {
      J(a, Lb);
    } else {
      if (8 > A) {
        J(a, !1);
      } else {
        var c = new Image, e = J(function() {
          e && b(!1);
        });
        c.onerror = function() {
          b(!1);
        };
        c.onload = function() {
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Dc(a, b, c, e, g, r, p) {
    function q() {
      I.fonts.load('1.6em "' + b + '"').then(function() {
        C(b) ? J(a, M) : G(!0);
      }, function() {
        Cc(qa);
      });
    }
    function L(t) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (ca = new xa - 0, !1) : t < new xa - ca;
    }
    function G(t) {
      t && (ca = new xa - 0);
      C(b) ? a(M) : L(ka) ? da ? a(0) : 9 > A ? J(a, 0) : Cc(qa) : J(G);
    }
    function H() {
      var t = -1, x;
      H = null;
      n = ["sans-serif", "serif"];
      D = Z(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (E = {}; x = n[++t];) {
        D.style.fontFamily = x, E[x] = D.offsetWidth;
      }
    }
    function C(t) {
      var x = 0, K = -1, Mb, Ec = 0;
      H && H();
      for (N.appendChild(D); Mb = n[++K];) {
        if (D.style.fontFamily = '"' + t + '",' + Mb, D.offsetWidth !== E[Mb]) {
          x = 1;
          break;
        }
      }
      x && g && (D.innerHTML = g, t = D.offsetWidth, D.innerHTML = r, Ec = t === D.offsetWidth ? 1 : 0, D.innerHTML = "mmmmmmmmmmlli");
      Aa(D);
      return M = x + Ec;
    }
    function qa(t) {
      (da = t) ? P(!0) : a(0);
    }
    function P(t) {
      t && (ca = new xa - 0);
      for (x in c) {
        if (C(x)) {
          m = Z(N, "div", {"aria-hidden":"true", className:e, id:e});
          t = c[x];
          var x = Jb, K = Fc.all || 0;
          x ? x.addImport ? x.addImport(t, K) : x.insertRule && x.insertRule('@import "' + t + '"', K) : Ac('@import "' + t + '"');
          Fc.all = ++K;
          J(R, !0);
        } else {
          L(100) ? (delete c[x], J(P, !0)) : J(P);
        }
        return;
      }
      a(0);
    }
    function R(t) {
      t && (ca = new xa - 0);
      1 < m.offsetWidth ? (Aa(m), ka = 100, J(G, !0)) : L(ka) ? (Aa(m), a(0)) : J(R);
    }
    var ka = p || 5E3, ca, da, D, m, n, E, M;
    (function() {
      var t;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > A) {
        return !0;
      }
      var x = Z(hb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), K = (K = x.sheet || x.styleSheet) ? (t = 10 <= A ? K.cssRules : K.rules || K.cssRules) && (t = t[0]) ? t.cssText : K.cssText || "" : "";
      t = 0 < K.indexOf("src") && 0 === K.indexOf("@font-face");
      Aa(x);
      return t;
    })() ? !I.fonts || 603 > Nb ? G(!0) : q() : J(a, 0);
  }
  function Gc() {
    Ob = !Ob;
    for (var a = -1, b; b = ib[++a];) {
      b.style.visibility = Ob ? "" : "hidden";
    }
  }
  function ud(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Pb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function jb() {
    jb = null;
    vd(Qb, "PB-100", {"PB-100_canTTF":B + "pbFont/ttf.css", "PB-100_canWOFF":B + "pbFont/woff.css", "PB-100_canEOT":B + "pbFont/eot.css", "PB-100_canSVG":B + "pbFont/svg.css"}, "pbFont-testCssReady", kb, "i", 5E3);
  }
  function Qb(a) {
    (lb = a) || Hc ? Rb() : Ra ? Ic(!0) : ta(Ra) ? Rb() : wd(Ic, Sb);
  }
  function Ic(a) {
    a && (pa(N, "pbList-noWebFont"), 9.5 > ja || (2 === ea ? Ja([".pbList font:after", "content:url(" + Sb + ")"]) : Ja([".pbList font", "background-image:url(" + Sb + ")"])));
    Rb();
  }
  function Rb() {
    for (Qb = Dc = null; va.length;) {
      mb(va.shift(), va.shift());
    }
  }
  function mb(a, b) {
    function c(r) {
      r = r.childNodes;
      for (var p = -1, q; q = r[++p];) {
        switch(q.nodeType) {
          case 1:
            c(q);
            break;
          case 3:
            q.data && q.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(q);
        }
      }
    }
    var e = [];
    if (Qb) {
      -1 === va.indexOf(a) && (va.push(a, b), Tb && jb && jb());
    } else {
      var g = va.indexOf(a);
      0 <= g && va.splice(g, 2);
      for (c(a); a = e.shift();) {
        g = a.data, 2 !== lb && (g = g.split(kb).join(Jc)), b ? a.data = g : xd(g.split("\r").join("").split("&yen;").join(yd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ub).split("&amp;").join("&"), a);
      }
    }
  }
  function xd(a, b) {
    function c(m, n) {
      for (var E = ""; n;) {
        n & 1 && (E += m), n >>= 1, m += m;
      }
      return E;
    }
    function e(m, n, E) {
      for (var M, t = -1, x, K; M = n[++t];) {
        for (; 0 <= (x = m.indexOf(M));) {
          K = M.length, m = m.substr(0, x) + c(E, K) + m.substr(x + K);
        }
      }
      return m;
    }
    function g(m) {
      var n = Y(m), E = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(E) + E.length, n <= m.length) ? n : 0;
    }
    var r = " area line str cmd fnc syb".split(" "), p = [], q = "", L, G = -1, H, C;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = Y(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      q = c("+", a.length);
    } else {
      for (0 <= (L = g(a)) && (q = c("|", L), G = L, --G); C = a.charAt(++G);) {
        C === Ub || H ? (q += "~", C === Ub && (H = !H)) : q += C;
      }
      q = e(q, zd, "^");
      q = e(q, Ad, "{");
      q = e(q, Bd, "}");
    }
    G = 0;
    for (H = a.length; G < H; ++G) {
      C = a.charAt(G);
      var qa = C === nb, P = " " === C;
      C = qa ? " " : C;
      var R = q.charAt(G), ka = ca, ca = "|" === R;
      R = r["+|~{}^".indexOf(R) + 1];
      var da = "";
      if ("\n" !== C) {
        if (lb || !Ra || Hc) {
          8 > A && P && (C = G === H - 1 ? nb : Cd), 2 === lb && a.substr(G, 2) === kb && (C = kb, ++G), P = P && "str" === R ? ' class="pbList-strsp"' : qa ? "" : !P && R ? ' class="pbList-' + R + '"' : "";
        } else {
          var D = Ba.indexOf(C);
          D = -1 === D ? "" : Ba.indexOf(C).toString(16).toUpperCase();
          D = (D = 1 === D.length ? "0" + D : D) ? "pbChr" + D : "";
          P = P && "str" === R ? ' class="pbList-strsp"' : P || !D ? "" : R ? ' class="' + (D ? D + " " : "") + "pbList-" + R + '"' : ' class="' + D + '"';
        }
        ka && qa ? C = nb : ca && !ka && 9.5 > ja && 4 > L && (da = c("<font>" + nb + "</font>", 4 - L));
        p.push(da + "<font" + P + ">" + C + "</font>");
      } else {
        ka = ca = !1, p.push(C);
      }
    }
    p = p.join("");
    if (1 === b.nodeType) {
      b.innerHTML = p;
    } else {
      for (r = Ib("font", p); p = r.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(p, b);
      }
      Aa(b);
    }
  }
  var u, y, d = ha.userAgent, U = ha.appVersion, Vb = Y(U) || 0, F = ha.platform, Wb = I.documentElement, Kc = Wb && Wb.style, Xb = I.documentMode, Yb = nc.width, Zb = nc.height, Lc = w.HTMLAudioElement, Mc = w.performance, Nc = w.Int8Array, Dd = void 0 !== w.ontouchstart, Ca = l(U, "Version/") || l(d, "Version/"), Da = !Oc && w.opera, Ed = Da && (Da.version && "function" === typeof Da.version ? Da.version() : qc(l(d, "Opera "), Ca, "" + Vb)), Pc = w.opr, Sa = !Da && (I.all || Xb), aa = Sa && (Xb ? 
  Xb : w.XMLHttpRequest ? I.getElementsByTagName ? 7 : 4 : I.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4), $b = !Sa && Wb.msContentZoomFactor, ob = !$b && w.chrome, Ka = !Sa && void 0 !== Kc.MozAppearance, Oc = w.operamini, ac = f(d, "UCWEB"), Fd = ac && l(d, " U2/"), Gd = ac && l(d, "; wds "), bc = l(d.split("_").join("."), "; iPh OS "), Hd = l(d, "; Adr "), Qc = f(U, "YJApp-ANDROID"), fa = f(F, "Android") || Ka && f(U, "Android") || Qc, S = l(F, "Android ") || l(U, "Android ") || 
  l(d, "Android ") || Hd, cc = f(F, "Linux"), Rc = "MacIntel" === F && void 0 !== ha.standalone, dc = Ka && l(d, "Goanna/"), la = !dc && Ka && l(d, "rv:"), Id = l(d, "Firefox/"), Jd = l(d, "Opera/"), Kd = w.FNRBrowser, ra = ab(d, "AppleWebKit/"), Ta = l(d, "Chrome/"), Sc = l(d, "OPR/"), Ld = l(U, "KHTML/"), Md = l(d.toLowerCase(), "iris"), Nd = l(d, "Silk/"), Ua = ab(d, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Tc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      pb, ec = Tc.length; pb = Tc[--ec];) {
        if (f(d, pb)) {
          Va = 2 > Y(Ca) ? Ca : .9;
          break a;
        }
      }
      var Uc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ec = Uc.length; pb = Uc[--ec];) {
        if (f(d, pb)) {
          Va = Ca;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Vc = Va, Wc = ob && 534.3 >= ra, Xc = pc(F), Od = Xc && !f(d, F) && pc(d), Pd = Dd && (ra || Ka) && Od || !S && Qc, Qd = !!w.ReactNativeWebView, qb;
  if (qb = Xc) {
    a: {
      var Yc = void 0;
      for (Yc in w) {
        if (0 === Yc.indexOf("SlexAPI_")) {
          qb = !0;
          break a;
        }
      }
      qb = void 0;
    }
  }
  var Rd = qb, Zc = w.puffinDevice, rb = Zc && Zc.clientInfo, Wa = rb && "iOS" === rb.os && rb.osVersion, Sd = Wa && rb.model, fc = !aa && I.registerElement, Td = !aa && I.execCommand, Ud = cc && fc && "11.0.696.34" === Ta, Vd = w._firefoxTV_playbackStateObserverJava, Wd = ab(d, "diordnA "), sb, z;
  if ("Nitro" === F) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      k = "NDSi";
      var h = Jd;
    } else {
      if ("New Nintendo 3DS" === F || f(d, "iPhone OS 6_0") && 320 === Yb && 240 === Zb) {
        k = "New3DS", h = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          k = "N3DS", h = l(d, "Version/"), ra = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            k = "Swicth", h = l(U, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              k = "WiiU", h = l(U, "NintendoBrowser/"), ra = l(U, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                k = "Wii";
                h = l(d, "Wii; U; ; ");
                var O = k;
                var Q = h;
              } else {
                if (z = l(d, "PlayStation Vita ")) {
                  k = "PSVita", h = z, O = k, Q = z;
                } else {
                  if (z = l(d, "(PlayStation Portable); ")) {
                    k = "PSP";
                    h = z;
                    var $c = 3.3;
                    O = k;
                    Q = z;
                  } else {
                    if (z = l(d, "PLAYSTATION 3; ") || l(d, "PLAYSTATION 3 ")) {
                      k = "PS3", h = z, O = k, Q = z, 0 > ia("4.10", z) && (u = "Sony", y = z);
                    } else {
                      if (f(d, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Vb && f(d, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            $c = 3.4;
                            O = k;
                            Q = 2;
                            var tb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || bc || Wa || Rc) {
                              if (Wa) {
                                switch(h = Wa, Sd.substr(0, 4)) {
                                  case "iPho":
                                    var sa = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    sa = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    sa = "iPod";
                                    var ad = !0;
                                }
                              } else {
                                bc ? h = bc : h = l(U.split("_").join("."), "OS ");
                                if (!h || Kd) {
                                  h = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : oc.isNaN ? 9.2 : w.SharedWorker ? Mc && Mc.now ? 8 : 8.4 : Td ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : Nc ? 4.3 : Lc ? 4.1 : 3.2;
                                }
                                var W = Yb === 1.5 * Zb || 1.5 * Yb === Zb;
                                0 === F.indexOf("iPhone") ? (sa = "iPhone", ba = !0) : 0 === F.indexOf("iPad") || Rc ? (sa = "iPad", V = !0) : 0 === F.indexOf("iPod") && (sa = "iPod", ad = !0);
                              }
                              var gc;
                              if (gc = !Wa) {
                                var hc;
                                if (!(hc = ha.standalone)) {
                                  var ub;
                                  if (ub = V || 12 > h) {
                                    a: {
                                      for (var Xd in I) {
                                        if ("webkitFullscreenEnabled" === Xd) {
                                          ub = !0;
                                          break a;
                                        }
                                      }
                                      ub = void 0;
                                    }
                                  }
                                  hc = ub;
                                }
                                gc = hc || 11 <= h && 13 > h && ha.mediaDevices;
                              }
                              gc ? (u = "SafariMobile", O = "Safari", Q = h) : u = "iOSWebView";
                              k = "iOS";
                              y = h;
                            } else {
                              if (f(d, "Kobo")) {
                                k = "Kobo", u = "AOSP", y = 2.2, O = u, Q = y, fa = !0;
                              } else {
                                if (f(d, "EBRD")) {
                                  k = "SonyReader", u = "AOSP", y = 2.2, O = u, Q = y;
                                } else {
                                  if (z = l(d, "CrOS x86_64 ") || l(d, "CrOS aarch64 ") || l(d, "CrOS i686 ") || l(d, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = z;
                                  } else {
                                    if (void 0 !== w.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > la ? "1.0.1" : 19 > la ? 1.1 : 27 > la ? 1.2 : 29 > la ? 1.3 : 31 > la ? 1.4 : 33 > la ? 2 : 35 > la ? 2.1 : 38 > la ? 2.2 : 45 > la ? 2.5 : 2.6, f(d, "Mobile") ? ba = !0 : f(d, "Tablet") && (V = !0);
                                    } else {
                                      if (w.palmGetResource) {
                                        k = "webOS", h = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), O = k, Q = h, f(d, "webOS.TV") || f(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (z = l(d, "Tizen ")) {
                                          k = "Tizen", h = z, O = "Samsung", Q = Ua, u = O, y = Q, ba = !0;
                                        } else {
                                          if (z = l(d, "Windows Phone ") || l(U, "Windows Phone OS ") || Gd) {
                                            var vb = !0;
                                            h = z;
                                            ba = !0;
                                          } else {
                                            if ($b && "ARM" === F) {
                                              vb = !0, h = 10, ba = !0;
                                            } else {
                                              if (Sa && f(U, "ZuneWP")) {
                                                vb = !0, h = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  k = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    k = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var ma = !0;
                                                      h = 6.3;
                                                      var T = V = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        ma = !0, h = 6, T = V = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          ma = !0, h = 5, T = V = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            ma = !0, h = 5, T = V = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              ma = !0, h = 5 <= Y(S) ? 5 : 4, T = V = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                ma = !0, h = 3, T = V = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  ma = !0, h = 2, T = V = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    ma = !0, h = 1, T = V = !0;
                                                                  } else {
                                                                    if (z = l(d, "Kindle/")) {
                                                                      k = "Kindle", h = z, u = "AOSP", y = 2.2, O = u, Q = y;
                                                                    } else {
                                                                      if (Vd) {
                                                                        ma = !0, h = S || Wd, T = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          ma = !0, h = S, T = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            k = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              k = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Md) {
                                                                                k = "WindowsMobile", tb = !0;
                                                                              } else {
                                                                                if ("WinCE" === F) {
                                                                                  k = F, tb = !0;
                                                                                } else {
                                                                                  if ("Win16" === F || "Win32" === F || "Win64" === F) {
                                                                                    k = F, h = l(d, "Windows NT ") || l(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === F.indexOf("Mac")) {
                                                                                      k = "MacPowerPC" === F ? "MacPPC" : F;
                                                                                      if (z = l(d.split("_").join("."), "Mac OS X ")) {
                                                                                        h = z;
                                                                                      }
                                                                                      var bd = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (k = "BlackBerry", h = Ca, ba = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? k = "SunOS" : f(d, "FreeBSD") ? k = "FreeBSD" : f(d, "OpenBSD") ? k = "OpenBSD" : f(d, "NetBSD") ? k = "NetBSD" : fa && Ka ? (f(d, "Android 4.4;") ? W = {min:2.3} : 4 <= Y(S) ? W = S : W = {min:2.2}, h = W) : fa && Da ? (S ? W = S : W = {min:1.6}, h = W, f(d, "Tablet") ? V = !0 : ba = !0) : S ? (h = 
                                                                                      S, fa = !0) : cc && Pd || Qd || Rd ? (sb = !0, Ua ? W = {min:4.4} : ob && !Wc || Pc || Sc ? W = {min:4} : (W = S = void 0 !== Kc.touchAction ? {min:5} : fc ? 4.4 : Nc ? ha.connection ? w.searchBoxJavaBridge_ || ob ? oc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ra ? 3 : 533 <= ra ? Lc ? 2.3 : 2.2 : 530 <= ra ? 2 : 1.5, Vc && (u = "Samsung", y = Vc)), h = W, fa = !0) : Ud ? (h = {min:5}, sb = fa = !0) : cc && (f(d, "Ubuntu") ? 
                                                                                      k = "Ubuntu" : (z = l(d, "Mint/")) ? (k = "Mint", h = z) : (z = l(d, "Fedora/")) ? (k = "Fedora", h = z) : k = f(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ma || fa && sb && Nd ? k = "FireOS" : fa && (k = k || "Android");
  vb && (k = "WindowsPhone");
  u || (T = T || fa, Da ? (u = T || tb || ba || V ? "PrestoMobile" : "Presto", y = Ed) : Sa ? ((W = ab(U, "Trident/") + 4) && W !== aa && (O = "IEHost", Q = W), 10 <= aa && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (O = "ModernIE", Q = aa), tb || ba || V || ad ? u = "TridentMobile" : bd && 5 <= aa ? (u = "Tasman", O = "MacIE", Q = aa) : (u = "Trident", bd && (O = "MacIE", Q = aa)), y = aa) : $b ? (u = vb ? "EdgeMobile" : "EdgeHTML", y = l(U, "Edge/")) : dc ? (u = "Goanna", 
  y = dc) : Ka ? (u = T ? "Fennec" : "Gecko", y = la || Id) : Ua ? (u = "Samsung", y = Ua) : (z = $c || l(d, "NetFront/")) ? (u = "NetFront", y = z) : (z = l(d, "iCab")) ? (u = "iCab", y = z) : (z = qc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Oc && Ca) ? (u = "OperaMini", y = z, k || (f(d, "iPhone") ? sa = "iPhone" : f(d, "iPad") ? sa = "iPad" : f(d, "iPod") && (sa = "iPod"), sa && (k = "iOS"))) : ac ? (u = "UCWEB", y = Fd) : Ld ? (u = "KHTML", y = Vb) : fa && Wc ? (u = "AOSP", y = S) : ob || 
  Pc || Sc ? (u = T ? "ChromiumMobile" : "Chromium", y = Ta) : fa && fc ? (u = "ChromeWebView", y = 5 > Y(S) ? S : Ta) : fa && (Ca || sb) ? (u = "AOSP", y = S) : Ta ? (u = T ? "ChromiumMobile" : "Chromium", y = Ta) : ra && (u = "WebKit", y = ra));
  ia = "" + ia;
  v.conpare = new Ab(ia.substring(ia.indexOf("(") + 1, ia.indexOf(")")), ia.substring(ia.indexOf("{") + 1, ia.lastIndexOf("}") - 1));
  k && (v.PLATFORM = k, h ? (v.PLATFORM_VERSION = rc(h), v[k] = h === h + "" ? Y(h) : h) : v[k] = !0);
  u && (v.ENGINE = u, y ? (v.ENGINE_VERSION = rc(y), v[u] = y === y + "" ? Y(y) : y) : v[u] = !0, O || (O = u, Q = y));
  var Oa = pd, Xa = [], td = !!I.getElementsByTagName, N = I.body, wa = N.style, A = v.Trident || v.TridentMobile, wb = v.Tasman, cd = v.EdgeHTML || v.EdgeMobile, ja = v.Presto || v.PrestoMobile, Ya = v.Gecko, Yd = Ya && 0 <= v.conpare(v.ENGINE_VERSION, "1.9.1"), xb = v.Goanna, Nb = v.WebKit, ic = v.SafariMobile || v.iOSWebView, Zd = v.OperaMini && v.UCWEB, jc = v.Win32 || v.Win64, $d = Y(ha.userAgent.split("Edg/")[1]), dd = Y(ha.appVersion.split("Trident/")[1]) + 4;
  A || wb || (new Ab('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ed = I.scripts || Qa("script"), ae = (wb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", db = [], Eb, Fb = 0, kc, Ra, ea, be = ta(wa.transform) ? "transform" : ta(wa["-o-transform"]) ? "-o-transform" : ta(wa["-ms-transform"]) ? "-ms-transform" : ta(wa["-moz-transform"]) ? "-moz-transform" : ta(wa["-webkit-transform"]) ? "-webkit-transform" : "";
  var B = ed[ed.length - 1].src.split("/");
  --B.length;
  (B = B.join("/")) && (B += "/");
  var na = Array.prototype;
  na.pop || (na.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  na.push || (na.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  na.shift || (na.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  na.splice || (na.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, g = this.slice(a, a + b), r;
    if (0 < e) {
      var p = this.length - 1;
      for (r = a + b; p >= r; --p) {
        this[p + e] = this[p];
      }
    } else {
      if (0 > e) {
        p = a + b;
        for (r = this.length; p < r; ++p) {
          this[p + e] = this[p];
        }
        this.length += e;
      }
    }
    p = 2;
    for (r = c.length; p < r; ++p) {
      this[p - 2 + a] = c[p];
    }
    return g;
  });
  na.indexOf || (na.indexOf = function(a, b) {
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
  var gd = function(a) {
    cb.length || (Fa = setInterval(bb, tc));
    cb.push({f:a, g:++fd});
    return fd;
  };
  var cb = [], tc = 999, fd = 0, Fa;
  if (5 > A || wb) {
    w._wdb_onlooptimer = bb, bb = "_wdb_onlooptimer()";
  }
  Xa.push(function() {
    6.1 > ic && hd(rd);
    yb(sc);
  });
  var J = function(a, b, c) {
    oa.length || (ya = Bb(La, Ma));
    oa.push({f:a, p:b, g:++id, t:new xa - 0 + (Ma < c ? c : Ma)});
    return id;
  };
  var Kb = function(a) {
    for (var b = oa.length, c; c = oa[--b];) {
      if (c.g === a) {
        oa.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var oa = [], Ma = 64, id = 0, ya;
  if (5 > A || wb) {
    w._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Xa.push(function() {
    6.1 > ic && hd(sd);
    yb(uc);
  });
  var Ea = w.matchMedia, Na = [], vc, Ha;
  db.push(function() {
    Ha = Z(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Za(function() {
      vc = !0;
      Na.length && J(wc);
    });
  });
  var Za = function(a) {
    db.push(a);
  };
  var yb = function(a) {
    jd.push(a);
  };
  var jd = [], Db = w.onload, kd = w.onunload;
  onload = Cb;
  onunload = function(a) {
    var b;
    kd && (b = kd(a));
    za(jd, a);
    onunload = Oa;
    return b;
  };
  var ld = function(a) {
    yc.push(a);
  };
  var yc = [];
  Za(function() {
    xc();
    gd(xc);
  });
  var ce = function(a) {
    $a.push(a);
  };
  var $a = [], Pa, Hb, Gb;
  if (10 <= A || cd || jc && $d) {
    Ea("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Pa = Hb = a.matches;
      Ga($a, eb());
    }), Ea("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Pa = Gb = a.matches;
      Ga($a, eb());
    }), Ea("(-ms-high-contrast:active)").addListener(function(a) {
      Pa = a.matches;
      Ga($a, eb());
    });
  } else {
    if (10 > A || jc && (44 <= Ya || xb)) {
      var zb = function() {
        function a(g) {
          return "#ffffff" === g || "rgb(255,255,255)" === g;
        }
        var b = I.defaultView, c = Fb, e = b ? b.getComputedStyle(Ha, null) : Ha.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Pa = "#123456" !== b && "rgb(18,52,86)" !== b, Hb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Gb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== eb() && Ga($a, Fb), !0;
        }
      };
      Za(function() {
        Ha.style.color = "#123456";
        Ha.style.backgroundColor = "#123456";
        60 > Ya || xb ? zb() : zb() && gd(zb, 1E3);
        zb = null;
      });
    }
  }
  var de = [];
  Ea && Ea("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ga(de, a.matches);
  });
  var lc = [];
  w.onbeforeprint ? (onbeforeprint = function() {
    za(lc, !0);
  }, onafterprint = function() {
    za(lc, !1);
  }, yb(function() {
    onbeforeprint = onafterprint = Oa;
  })) : Ea && Ea("print").addListener(function(a) {
    za(lc, a.matches);
  });
  var hd = function(a) {
    md.push(a);
  };
  var md = [], mc = w.onscroll;
  onscroll = function(a) {
    var b;
    mc && (b = mc(a));
    Cb || za(md);
    return b;
  };
  yb(function() {
    onscroll = mc = Oa;
  });
  var ee = Qa("html")[0];
  var hb = Qa("head")[0];
  var fb, Bc;
  (function(a) {
    function b(e) {
      for (var g = c, r = "", p = 0, q; q = e.length;) {
        4 > q && (p = [0, 2, 1, 0][q]), q = e.charCodeAt(0) << 16 | (1 < q ? e.charCodeAt(1) : 0) << 8 | (2 < q ? e.charCodeAt(2) : 0), r += [g[q >>> 18], g[q >>> 12 & 63], 2 <= p ? "=" : g[q >>> 6 & 63], 1 <= p ? "=" : g[q & 63]].join(""), e = e.substr(3);
      }
      return r;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Bc = b;
  })(this);
  var Jb = void 0;
  var Fc = {};
  Za(function() {
    if (Eb) {
      if (!ta(ea) && (ea = xb || 8 <= A || cd || Yd || 7.2 <= ja || 522 <= Nb || 3 <= ic ? 2 : 6 <= ja || Ya ? 1 : 0, !ea)) {
        var a = Z(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth ? 2 : 0;
        Aa(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Lb;
  9 > A && Za(function(a) {
    a = Z(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    kc = 1 < a.offsetHeight;
    a.style.cssText = "";
    Aa(a);
  });
  var wd = function(a, b) {
    function c() {
      r || (e.complete ? (r = !0, J(a, !!e.width)) : --p ? g = J(c) : (r = !0, g = J(a, !1)));
    }
    var e = new Image, g, r, p = 99;
    e.onerror = function() {
      (!A || 11 === A || 11 === dd) && e.width || r || (r = !0, g && Kb(g), g = J(a, !1));
    };
    e.onload = function() {
      r = !0;
      g && Kb(g);
      ja && !e.complete ? g = J(a, !1) : (Ra = !0, J(a, !0));
    };
    e.src = b;
    8 > ja && e.complete ? (Ra = !0, J(a, !0)) : r || (g = J(c));
  };
  var vd = Dc;
  for (11 === dd && 5.5 > A && Z(hb, "link", {href:B + ae, rel:"stylesheet", type:"text/css"}); Xa.length;) {
    Xa.shift()();
  }
  Xa = null;
  var X = String.fromCharCode, Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", X(960), ")", "(", X(234), X(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", X(9824), "\u2190", X(9829), X(9830), X(9827), X(956), "\u03a9", "\u2193", "\u2192", "%", X(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", X(9619)], fe = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, -380, 
  -390, -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > A || jc && (44 <= Ya || xb)) && ce(function(a) {
    gb("jsHcm");
    gb("jsHcmWob");
    gb("jsHcmBow");
    if (a) {
      switch((be || 9 === A || 5.5 <= A && 9 > A && kc) && pa(N, "jsCanRotate"), a) {
        case 1:
          pa(N, "jsHcm");
          break;
        case 2:
          pa(N, "jsHcmWob");
          break;
        case 3:
          pa(N, "jsHcmBow");
      }
    } else {
      gb("jsCanRotate");
    }
  });
  var ib = [], Ob, Pb, nd;
  ld(function(a) {
    function b(m) {
      var n = m.getAttribute("pbtip") || "", E = n.charAt(0), M = "_" === E;
      n = M ? n.charAt(2) : E;
      E = M ? "Btm" : "";
      var t = m.getAttribute("title") || "";
      q || (m.removeAttribute("pbtip"), m.removeAttribute("title"), pa(m, "pbTipPos" + n.toUpperCase()), Z(m, "div", {className:"pbTip" + E}, {width:t.length + r + "em"}, t));
      Z(m, "div", {className:"pbTail" + E});
      G && M && (m.focus(), m.blur());
    }
    function c(m) {
      R || p || Ia(m, "pbChrCS") && ib.push(m);
    }
    function e(m) {
      var n = m.getAttribute("pbGhst") || "", E = m.className, M = E.split("pbCsr")[1] || "", t = E.split("pbAlp")[1] || "";
      if ("CS" === n) {
        var x = "_";
      } else {
        x = n, 3 === x.length && (x = x.substr(0, 2)), x = Ba[parseInt(x, 16)] || "~";
      }
      m.removeAttribute("pbGhst");
      M = M.split(" ")[0];
      t = t.split(" ")[0];
      var K = 10 - Y(t);
      2 > ea && t ? (E = E.split("pbChr")[1], E = E.split(" ")[0], g(m, E, t, m.innerHTML), n && g(m, n, K, x), m.style.backgroundImage = "none") : n ? (n = {className:"pbChr" + n + " pbAlp" + K + " pbCsr" + M}, fb = 1, C = Z(m, "b", n, 0, x), c(m), c(C)) : c(m);
    }
    function g(m, n, E, M) {
      n = parseInt(n, 16);
      var t = fe[n];
      m = Z(m, "img", {title:M, src:"" + B + "pbLCD/x3_a" + E + "0.png"}, 0 === n ? {x:0, y:0} : {left:(0 > t ? 0 : -14) + "px", top:3 * -Math.abs(t) + "px"});
      "CS" === M && ib.push(m);
    }
    if (a && !nd) {
      nd = !0;
      var r = 6 > A ? 1 : 0;
      a = Qa("SAMP");
      var p = 9 > A, q = 8 === A, L = 9 > ja, G = 5 <= A && 6 > A, H, C, qa, P;
      kc && pa(N, "pbLCD-AX");
      if (a.length) {
        2 > ea && pa(N, "pbLCD-bgiFallback");
        var R = void 0 !== wa.opacity || void 0 !== wa["-moz-opacity"] || void 0 !== wa["-khtml-opacity"], ka = !R && !p;
        L = 2 > ea || L || q || ka;
        for (qa = -1; H = a[++qa];) {
          if (Ia(H.parentElement || H.parentNode, "pbLCD")) {
            var ca = zc(H);
            for (H = ca.length; H;) {
              var da = ca[--H];
              switch(da.tagName.toUpperCase()) {
                case "A":
                  if (L) {
                    (2 > ea || q) && b(da);
                    var D = zc(da);
                    for (P = D.length; P;) {
                      q || e(D[--P]);
                    }
                  }
                  Zd ? da.setAttribute("href", "javascript:void(0)") : da.onclick = ud;
                  break;
                case "B":
                  L && e(da);
              }
            }
          }
        }
        ib.length ? (setInterval(Gc, 500), 2 === ea ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Gc = null;
        ka && (2 === ea ? Ja([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + B + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        B + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + B + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        B + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + B + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + B + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Nb && (ee.onclick = function(a) {
    if (Pb) {
      return Pb = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new Ab("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(I);
  var Ub = Ba[7], Jc = Ba[30], yd = Ba[113], kb = X(8337) + X(8331), nb = X(160), Cd = X(8194), Ad = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Bd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), zd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Jc + Ba[31]).split(""), va = 
  [], lb, Sb = B + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png"), Hc = 8 > ja && !0, Tb;
  ld(function(a) {
    if (a && !Tb) {
      var b = I.all || Qa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? mb(c) : Ia(c, "pbFont") && mb(c, !0);
      }
      va.length && jb();
      Tb = !0;
    }
  });
  od.prettify = mb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

