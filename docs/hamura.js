PB100 = {};
(function(od, v, w, pd, I, ha, lc, R, mc, nc, fe, zb, qd, wa, ge) {
  function Za(a, b) {
    var c = R(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function oc(a) {
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
  function pc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var g = R(a[c]), q = R(b[c]);
      if (g !== q) {
        return g > q ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function qc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], g; b < c; ++b) {
      0 > pc(e, g = a[b]) && (e = g);
    }
    return e;
  }
  function rc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function sa(a) {
    return void 0 !== a;
  }
  function $a() {
    for (var a, b = 0; b < ab.length; ++b) {
      a = ab[b], a.f();
    }
  }
  function rd() {
    Ea && (sc(), Ea = setInterval($a, tc));
  }
  function sc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function La() {
    for (var a, b = 0, c = new wa - 0; b < na.length;) {
      c < na[0].t ? ++b : (a = na.splice(b, 1)[0], a.f(a.p));
    }
    xa = na.length ? zb(La, Ma) : 0;
  }
  function sd() {
    xa && (uc(), xa = zb(La, Ma));
  }
  function uc() {
    xa && (xa = qd(xa));
  }
  function ya(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Fa(a, b) {
    vc && !Na.length && J(wc);
    Na.push(a, b);
  }
  function wc() {
    var a = Na, b;
    for (Na = []; b = a.shift();) {
      ya(b, a.shift());
    }
  }
  function Ab(a) {
    var b;
    Bb && (b = Bb(a));
    ya(bb, a);
    onload = Oa;
    bb = Ab = Bb = onload = null;
    return b;
  }
  function xc() {
    var a = 9 === Ga.offsetWidth;
    Cb !== a && Fa(yc, Cb = a);
  }
  function cb() {
    return Db = Pa ? Eb ? 2 : Fb ? 3 : 1 : 0;
  }
  function Qa(a) {
    var b = b || I;
    return td ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function za(a) {
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
  function Gb(a, b) {
    var c = I.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function Z(a, b, c, e, g) {
    function q(L, G) {
      for (var H in G) {
        switch(H) {
          case "class":
          case "className":
            oa(L, G[H]);
            break;
          default:
            L.setAttribute(H, G[H]);
        }
      }
    }
    function r(L, G) {
      var H = L.style, C;
      for (C in G) {
        H[C] = G[C];
      }
    }
    if ("style" === b) {
      var t = !0;
      b = Gb("div", 'a<style type="text/css">' + g + "</style>").lastChild;
    } else {
      b = Gb(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    c && q(b, c);
    e && r(b, e);
    g && !t && b.appendChild(I.createTextNode(g));
    return b;
  }
  function Ha(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function oa(a, b) {
    var c;
    if (!Ha(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function eb(a) {
    if (Ha(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function Ac(a) {
    8 <= ia && 9 > ia ? Z(fb, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + Bc(a)}) : (a = Z(fb, "style", {type:"text/css", media:"all"}, 0, a), Hb = a.sheet || a.styleSheet);
  }
  function Ia(a) {
    for (var b = Hb, c, e, g = "", q; a.length;) {
      c = a.shift(), e = a.shift(), q = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(q, b.cssRules.length) : g += q;
    }
    g && Ac(g);
  }
  function Cc(a) {
    function b(g) {
      e = Ib(e);
      Jb = g;
      c.onload = c.onerror = Oa;
      J(a, g);
    }
    if (sa(Jb)) {
      J(a, Jb);
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
  function Dc(a, b, c, e, g, q, r) {
    function t() {
      I.fonts.load('1.6em "' + b + '"').then(function() {
        C(b) ? J(a, M) : G(!0);
      }, function() {
        Cc(pa);
      });
    }
    function L(p) {
      return I.hidden || I.msHidden || I.mozHidden || I.webkitHidden ? (ca = new wa - 0, !1) : p < new wa - ca;
    }
    function G(p) {
      p && (ca = new wa - 0);
      C(b) ? a(M) : L(ja) ? da ? a(0) : 9 > A ? J(a, 0) : Cc(pa) : J(G);
    }
    function H() {
      var p = -1, x;
      H = null;
      n = ["sans-serif", "serif"];
      D = Z(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (E = {}; x = n[++p];) {
        D.style.fontFamily = x, E[x] = D.offsetWidth;
      }
    }
    function C(p) {
      var x = 0, K = -1, Kb, Ec = 0;
      H && H();
      for (N.appendChild(D); Kb = n[++K];) {
        if (D.style.fontFamily = '"' + p + '",' + Kb, D.offsetWidth !== E[Kb]) {
          x = 1;
          break;
        }
      }
      x && g && (D.innerHTML = g, p = D.offsetWidth, D.innerHTML = q, Ec = p === D.offsetWidth ? 1 : 0, D.innerHTML = "mmmmmmmmmmlli");
      za(D);
      return M = x + Ec;
    }
    function pa(p) {
      (da = p) ? P(!0) : a(0);
    }
    function P(p) {
      p && (ca = new wa - 0);
      for (x in c) {
        if (C(x)) {
          m = Z(N, "div", {"aria-hidden":"true", className:e, id:e});
          p = c[x];
          var x = Hb, K = Fc.all || 0;
          x ? x.addImport ? x.addImport(p, K) : x.insertRule && x.insertRule('@import "' + p + '"', K) : Ac('@import "' + p + '"');
          Fc.all = ++K;
          J(S, !0);
        } else {
          L(100) ? (delete c[x], J(P, !0)) : J(P);
        }
        return;
      }
      a(0);
    }
    function S(p) {
      p && (ca = new wa - 0);
      1 < m.offsetWidth ? (za(m), ja = 100, J(G, !0)) : L(ja) ? (za(m), a(0)) : J(S);
    }
    var ja = r || 5E3, ca, da, D, m, n, E, M;
    (function() {
      var p;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > A) {
        return !0;
      }
      var x = Z(fb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), K = (K = x.sheet || x.styleSheet) ? (p = 10 <= A ? K.cssRules : K.rules || K.cssRules) && (p = p[0]) ? p.cssText : K.cssText || "" : "";
      p = 0 < K.indexOf("src") && 0 === K.indexOf("@font-face");
      za(x);
      return p;
    })() ? !I.fonts || 603 > Lb ? G(!0) : t() : J(a, 0);
  }
  function Gc() {
    Mb = !Mb;
    for (var a = -1, b; b = gb[++a];) {
      b.style.visibility = Mb ? "" : "hidden";
    }
  }
  function ud(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Nb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function hb() {
    hb = null;
    vd(Ob, "PB-100", {"PB-100_canTTF":B + "pbFont/ttf.css", "PB-100_canWOFF":B + "pbFont/woff.css", "PB-100_canEOT":B + "pbFont/eot.css", "PB-100_canSVG":B + "pbFont/svg.css"}, "pbFont-testCssReady", ib, "i", 5E3);
  }
  function Ob(a) {
    (jb = a) || Hc ? Pb() : Ra ? Ic(!0) : sa(Ra) ? Pb() : wd(Ic, Qb);
  }
  function Ic(a) {
    a && (oa(N, "pbList-noWebFont"), 9.5 > ia || (2 === ea ? Ia([".pbList font:after", "content:url(" + Qb + ")"]) : Ia([".pbList font", "background-image:url(" + Qb + ")"])));
    Pb();
  }
  function Pb() {
    for (Ob = Dc = null; ta.length;) {
      kb(ta.shift(), ta.shift());
    }
  }
  function kb(a, b) {
    function c(q) {
      q = q.childNodes;
      for (var r = -1, t; t = q[++r];) {
        switch(t.nodeType) {
          case 1:
            c(t);
            break;
          case 3:
            t.data && t.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(t);
        }
      }
    }
    var e = [];
    if (Ob) {
      -1 === ta.indexOf(a) && (ta.push(a, b), Rb && hb && hb());
    } else {
      var g = ta.indexOf(a);
      0 <= g && ta.splice(g, 2);
      for (c(a); a = e.shift();) {
        g = a.data, 2 !== jb && (g = g.split(ib).join(Jc)), b ? a.data = g : xd(g.split("\r").join("").split("&yen;").join(yd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Sb).split("&amp;").join("&"), a);
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
      for (var M, p = -1, x, K; M = n[++p];) {
        for (; 0 <= (x = m.indexOf(M));) {
          K = M.length, m = m.substr(0, x) + c(E, K) + m.substr(x + K);
        }
      }
      return m;
    }
    function g(m) {
      var n = R(m), E = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(E) + E.length, n <= m.length) ? n : 0;
    }
    var q = " area line str cmd fnc syb".split(" "), r = [], t = "", L, G = -1, H, C;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = R(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      t = c("+", a.length);
    } else {
      for (0 <= (L = g(a)) && (t = c("|", L), G = L, --G); C = a.charAt(++G);) {
        C === Sb || H ? (t += "~", C === Sb && (H = !H)) : t += C;
      }
      t = e(t, zd, "^");
      t = e(t, Ad, "{");
      t = e(t, Bd, "}");
    }
    G = 0;
    for (H = a.length; G < H; ++G) {
      C = a.charAt(G);
      var pa = C === lb, P = " " === C;
      C = pa ? " " : C;
      var S = t.charAt(G), ja = ca, ca = "|" === S;
      S = q["+|~{}^".indexOf(S) + 1];
      var da = "";
      if ("\n" !== C) {
        if (jb || !Ra || Hc) {
          8 > A && P && (C = G === H - 1 ? lb : Cd), 2 === jb && a.substr(G, 2) === ib && (C = ib, ++G), P = P && "str" === S ? ' class="pbList-strsp"' : pa ? "" : !P && S ? ' class="pbList-' + S + '"' : "";
        } else {
          var D = Aa.indexOf(C);
          D = -1 === D ? "" : Aa.indexOf(C).toString(16).toUpperCase();
          D = (D = 1 === D.length ? "0" + D : D) ? "pbChr" + D : "";
          P = P && "str" === S ? ' class="pbList-strsp"' : P || !D ? "" : S ? ' class="' + (D ? D + " " : "") + "pbList-" + S + '"' : ' class="' + D + '"';
        }
        ja && pa ? C = lb : ca && !ja && 9.5 > ia && 4 > L && (da = c("<font>" + lb + "</font>", 4 - L));
        r.push(da + "<font" + P + ">" + C + "</font>");
      } else {
        ja = ca = !1, r.push(C);
      }
    }
    r = r.join("");
    if (1 === b.nodeType) {
      b.innerHTML = r;
    } else {
      for (q = Gb("font", r); r = q.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(r, b);
      }
      za(b);
    }
  }
  var u, y, d = ha.userAgent, V = ha.appVersion, Tb = R(V) | 0, F = ha.platform, Ub = I.documentElement, Kc = Ub && Ub.style, Vb = I.documentMode, Wb = lc.width, Xb = lc.height, Lc = w.HTMLAudioElement, Mc = w.performance, Nc = w.Int8Array, Dd = void 0 !== w.ontouchstart, Ba = l(V, "Version/") || l(d, "Version/"), Ja = void 0 !== Kc.MozAppearance, Oc = w.operamini, Yb = f(d, "UCWEB"), Ed = Yb && l(d, " U2/"), Fd = Yb && l(d, "; wds "), Zb = l(d.split("_").join("."), "; iPh OS "), Gd = l(d, "; Adr "), 
  Pc = f(V, "YJApp-ANDROID"), fa = f(F, "Android") || Ja && f(V, "Android") || Pc, T = l(F, "Android ") || l(V, "Android ") || l(d, "Android ") || Gd, $b = f(F, "Linux"), Qc = "MacIntel" === F && void 0 !== ha.standalone, Ca = !Oc && w.opera, Hd = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : qc(l(d, "Opera "), Ba, "" + Tb)), Rc = w.opr, mb = !Ca && (I.all || Vb), aa = mb && (Vb ? Vb : w.XMLHttpRequest ? I.getElementsByTagName ? 7 : 4 : I.compatMode ? 6 : (0).toFixed ? 5.5 : 
  w.attachEvent ? 5 : 4), ac = !mb && Ub.msContentZoomFactor, nb = !ac && w.chrome, bc = Ja && l(d, "Goanna/"), ka = !bc && Ja && l(d, "rv:"), Id = l(d, "Firefox/"), Jd = l(d, "Opera/"), Kd = w.FNRBrowser, qa = Za(d, "AppleWebKit/"), Sa = l(d, "Chrome/"), Sc = l(d, "OPR/"), Ld = l(V, "KHTML/"), Md = l(d.toLowerCase(), "iris"), Nd = l(d, "Silk/"), Ta = Za(d, "SamsungBrowser/"), Ua;
  if (Ua = !Ta) {
    a: {
      for (var Tc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      ob, cc = Tc.length; ob = Tc[--cc];) {
        if (f(d, ob)) {
          Ua = 2 > R(Ba) ? Ba : .9;
          break a;
        }
      }
      var Uc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (cc = Uc.length; ob = Uc[--cc];) {
        if (f(d, ob)) {
          Ua = Ba;
          break a;
        }
      }
      Ua = void 0;
    }
  }
  var Vc = Ua, Wc = nb && 534.3 >= qa, Xc = oc(F), Od = Xc && !f(d, F) && oc(d), Pd = Dd && (qa || Ja) && Od || !T && Pc, Qd = !!w.ReactNativeWebView, pb;
  if (pb = Xc) {
    a: {
      var Yc = void 0;
      for (Yc in w) {
        if (0 === Yc.indexOf("SlexAPI_")) {
          pb = !0;
          break a;
        }
      }
      pb = void 0;
    }
  }
  var Rd = pb, Zc = w.puffinDevice, qb = Zc && Zc.clientInfo, Va = qb && "iOS" === qb.os && qb.osVersion, Sd = Va && qb.model, dc = !aa && I.registerElement, Td = !aa && I.execCommand, Ud = $b && dc && "11.0.696.34" === Sa, Vd = w._firefoxTV_playbackStateObserverJava, Wd = Za(d, "diordnA "), rb, z;
  if ("Nitro" === F) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      k = "NDSi";
      var h = Jd;
    } else {
      if ("New Nintendo 3DS" === F || f(d, "iPhone OS 6_0") && 320 === Wb && 240 === Xb) {
        k = "New3DS", h = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          k = "N3DS", h = l(d, "Version/"), qa = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            k = "Swicth", h = l(V, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              k = "WiiU", h = l(V, "NintendoBrowser/"), qa = l(V, "AppleWebKit/");
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
                      k = "PS3", h = z, O = k, Q = z, 0 > pc("4.10", z) && (u = "Sony", y = z);
                    } else {
                      if (f(d, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Tb && f(d, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            $c = 3.4;
                            O = k;
                            Q = 2;
                            var sb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Zb || Va || Qc) {
                              if (Va) {
                                switch(h = Va, Sd.substr(0, 4)) {
                                  case "iPho":
                                    var ra = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    ra = "iPad";
                                    var W = !0;
                                    break;
                                  case "iPod":
                                    ra = "iPod";
                                    var ad = !0;
                                }
                              } else {
                                Zb ? h = Zb : h = l(V.split("_").join("."), "OS ");
                                if (!h || Kd) {
                                  h = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : mc.isNaN ? 9.2 : w.SharedWorker ? Mc && Mc.now ? 8 : 8.4 : Td ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : Nc ? 4.3 : Lc ? 4.1 : 3.2;
                                }
                                var X = Wb === 1.5 * Xb || 1.5 * Wb === Xb;
                                0 === F.indexOf("iPhone") ? (ra = "iPhone", ba = !0) : 0 === F.indexOf("iPad") || Qc ? (ra = "iPad", W = !0) : 0 === F.indexOf("iPod") && (ra = "iPod", ad = !0);
                              }
                              var ec;
                              if (ec = !Va) {
                                var fc;
                                if (!(fc = ha.standalone)) {
                                  var tb;
                                  if (tb = W || 12 > h) {
                                    a: {
                                      for (var Xd in I) {
                                        if ("webkitFullscreenEnabled" === Xd) {
                                          tb = !0;
                                          break a;
                                        }
                                      }
                                      tb = void 0;
                                    }
                                  }
                                  fc = tb;
                                }
                                ec = fc || 11 <= h && 13 > h && ha.mediaDevices;
                              }
                              ec ? (u = "SafariMobile", O = "Safari", Q = h) : u = "iOSWebView";
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
                                      k = "FirefoxOS", h = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, f(d, "Mobile") ? ba = !0 : f(d, "Tablet") && (W = !0);
                                    } else {
                                      if (w.palmGetResource) {
                                        k = "webOS", h = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), O = k, Q = h, f(d, "webOS.TV") || f(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (z = l(d, "Tizen ")) {
                                          k = "Tizen", h = z, O = "Samsung", Q = Ta, u = O, y = Q, ba = !0;
                                        } else {
                                          if (z = l(d, "Windows Phone ") || l(V, "Windows Phone OS ") || Fd) {
                                            var ub = !0;
                                            h = z;
                                            ba = !0;
                                          } else {
                                            if (ac && "ARM" === F) {
                                              ub = !0, h = 10, ba = !0;
                                            } else {
                                              if (mb && f(V, "ZuneWP")) {
                                                ub = !0, h = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ba = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  k = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    k = "FeaturePhone", ba = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var la = !0;
                                                      h = 6.3;
                                                      var U = W = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        la = !0, h = 6, U = W = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          la = !0, h = 5, U = W = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            la = !0, h = 5, U = W = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              la = !0, h = 5 <= R(T) ? 5 : 4, U = W = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                la = !0, h = 3, U = W = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  la = !0, h = 2, U = W = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    la = !0, h = 1, U = W = !0;
                                                                  } else {
                                                                    if (z = l(d, "Kindle/")) {
                                                                      k = "Kindle", h = z, u = "AOSP", y = 2.2, O = u, Q = y;
                                                                    } else {
                                                                      if (Vd) {
                                                                        la = !0, h = T || Wd, U = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          la = !0, h = T, U = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            k = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              k = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Md) {
                                                                                k = "WindowsMobile", sb = !0;
                                                                              } else {
                                                                                if ("WinCE" === F) {
                                                                                  k = F, sb = !0;
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
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (k = "BlackBerry", h = Ba, ba = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? k = "SunOS" : f(d, "FreeBSD") ? k = "FreeBSD" : f(d, "OpenBSD") ? k = "OpenBSD" : f(d, "NetBSD") ? k = "NetBSD" : fa && Ja ? (f(d, "Android 4.4;") ? X = {min:2.3} : 4 <= R(T) ? X = T : X = {min:2.2}, h = X) : fa && Ca ? (T ? X = T : X = {min:1.6}, h = X, f(d, "Tablet") ? W = !0 : ba = !0) : T ? (h = 
                                                                                      T, fa = !0) : $b && Pd || Qd || Rd ? (rb = !0, Ta ? X = {min:4.4} : nb && !Wc || Rc || Sc ? X = {min:4} : (X = T = void 0 !== Kc.touchAction ? {min:5} : dc ? 4.4 : Nc ? ha.connection ? w.searchBoxJavaBridge_ || nb ? mc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= qa ? 3 : 533 <= qa ? Lc ? 2.3 : 2.2 : 530 <= qa ? 2 : 1.5, Vc && (u = "Samsung", y = Vc)), h = X, fa = !0) : Ud ? (h = {min:5}, rb = fa = !0) : $b && (f(d, "Ubuntu") ? 
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
  la || fa && rb && Nd ? k = "FireOS" : fa && (k = k || "Android");
  ub && (k = "WindowsPhone");
  u || (U = U || fa, Ca ? (u = U || sb || ba || W ? "PrestoMobile" : "Presto", y = Hd) : mb ? ((X = Za(V, "Trident/") + 4) && X !== aa && (O = "IEHost", Q = X), 10 <= aa && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (O = "ModernIE", Q = aa), sb || ba || W || ad ? u = "TridentMobile" : bd && 5 <= aa ? (u = "Tasman", O = "MacIE", Q = aa) : (u = "Trident", bd && (O = "MacIE", Q = aa)), y = aa) : ac ? (u = ub ? "EdgeMobile" : "EdgeHTML", y = l(V, "Edge/")) : bc ? (u = "Goanna", 
  y = bc) : Ja ? (u = U ? "Fennec" : "Gecko", y = ka || Id) : Ta ? (u = "Samsung", y = Ta) : (z = $c || l(d, "NetFront/")) ? (u = "NetFront", y = z) : (z = l(d, "iCab")) ? (u = "iCab", y = z) : (z = qc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Oc && Ba) ? (u = "OperaMini", y = z, k || (f(d, "iPhone") ? ra = "iPhone" : f(d, "iPad") ? ra = "iPad" : f(d, "iPod") && (ra = "iPod"), ra && (k = "iOS"))) : Yb ? (u = "UCWEB", y = Ed) : Ld ? (u = "KHTML", y = Tb) : fa && Wc ? (u = "AOSP", y = T) : nb || 
  Rc || Sc ? (u = U ? "ChromiumMobile" : "Chromium", y = Sa) : fa && dc ? (u = "ChromeWebView", y = 5 > R(T) ? T : Sa) : fa && (Ba || rb) ? (u = "AOSP", y = T) : Sa ? (u = U ? "ChromiumMobile" : "Chromium", y = Sa) : qa && (u = "WebKit", y = qa));
  k && (v.PLATFORM = k, h ? (v.PLATFORM_VERSION = rc(h), v[k] = h === h + "" ? R(h) : h) : v[k] = !0);
  u && (v.ENGINE = u, y ? (v.ENGINE_VERSION = rc(y), v[u] = y === y + "" ? R(y) : y) : v[u] = !0, O || (O = u, Q = y));
  var Oa = pd, Wa = [], td = !!I.getElementsByTagName, N = I.body, va = N.style, A = v.Trident || v.TridentMobile, vb = v.Tasman, cd = v.EdgeHTML || v.EdgeMobile, ia = v.Presto || v.PrestoMobile, Ka = v.Gecko, wb = v.Goanna, Lb = v.WebKit, gc = v.SafariMobile || v.iOSWebView, Yd = v.OperaMini && v.UCWEB, hc = v.Win32 || v.Win64, Zd = R(ha.userAgent.split("Edg/")[1]), dd = R(ha.appVersion.split("Trident/")[1]) + 4;
  A || vb || (new nc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ed = I.scripts || Qa("script"), $d = (vb ? "ie5mac" : 5.5 > A ? "ie5win" : 6 > A ? "ie55" : 10 > A ? "ie" + (A | 0) : "modern") + ".css", bb = [], Cb, Db = 0, ic, Ra, ea, ae = sa(va.transform) ? "transform" : sa(va["-o-transform"]) ? "-o-transform" : sa(va["-ms-transform"]) ? "-ms-transform" : sa(va["-moz-transform"]) ? "-moz-transform" : sa(va["-webkit-transform"]) ? "-webkit-transform" : "";
  var B = ed[ed.length - 1].src.split("/");
  --B.length;
  (B = B.join("/")) && (B += "/");
  var ma = Array.prototype;
  ma.pop || (ma.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ma.push || (ma.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ma.shift || (ma.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ma.splice || (ma.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, g = this.slice(a, a + b), q;
    if (0 < e) {
      var r = this.length - 1;
      for (q = a + b; r >= q; --r) {
        this[r + e] = this[r];
      }
    } else {
      if (0 > e) {
        r = a + b;
        for (q = this.length; r < q; ++r) {
          this[r + e] = this[r];
        }
        this.length += e;
      }
    }
    r = 2;
    for (q = c.length; r < q; ++r) {
      this[r - 2 + a] = c[r];
    }
    return g;
  });
  ma.indexOf || (ma.indexOf = function(a, b) {
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
    ab.length || (Ea = setInterval($a, tc));
    ab.push({f:a, g:++fd});
    return fd;
  };
  var ab = [], tc = 999, fd = 0, Ea;
  if (5 > A || vb) {
    w._wdb_onlooptimer = $a, $a = "_wdb_onlooptimer()";
  }
  Wa.push(function() {
    6.1 > gc && hd(rd);
    xb(sc);
  });
  var J = function(a, b, c) {
    na.length || (xa = zb(La, Ma));
    na.push({f:a, p:b, g:++id, t:new wa - 0 + (Ma < c ? c : Ma)});
    return id;
  };
  var Ib = function(a) {
    for (var b = na.length, c; c = na[--b];) {
      if (c.g === a) {
        na.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var na = [], Ma = 64, id = 0, xa;
  if (5 > A || vb) {
    w._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Wa.push(function() {
    6.1 > gc && hd(sd);
    xb(uc);
  });
  var Da = w.matchMedia, Na = [], vc, Ga;
  bb.push(function() {
    Ga = Z(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Xa(function() {
      vc = !0;
      Na.length && J(wc);
    });
  });
  var Xa = function(a) {
    bb.push(a);
  };
  var xb = function(a) {
    jd.push(a);
  };
  var jd = [], Bb = w.onload, kd = w.onunload;
  onload = Ab;
  onunload = function(a) {
    var b;
    kd && (b = kd(a));
    ya(jd, a);
    onunload = Oa;
    return b;
  };
  var ld = function(a) {
    yc.push(a);
  };
  var yc = [];
  Xa(function() {
    xc();
    gd(xc);
  });
  var be = function(a) {
    Ya.push(a);
  };
  var Ya = [], Pa, Fb, Eb;
  if (10 <= A || cd || hc && Zd) {
    Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Pa = Fb = a.matches;
      Fa(Ya, cb());
    }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Pa = Eb = a.matches;
      Fa(Ya, cb());
    }), Da("(-ms-high-contrast:active)").addListener(function(a) {
      Pa = a.matches;
      Fa(Ya, cb());
    });
  } else {
    if (10 > A || hc && (44 <= Ka || wb)) {
      var yb = function() {
        function a(g) {
          return "#ffffff" === g || "rgb(255,255,255)" === g;
        }
        var b = I.defaultView, c = Db, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Pa = "#123456" !== b && "rgb(18,52,86)" !== b, Fb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Eb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== cb() && Fa(Ya, Db), !0;
        }
      };
      Xa(function() {
        Ga.style.color = "#123456";
        Ga.style.backgroundColor = "#123456";
        60 > Ka || wb ? yb() : yb() && gd(yb, 1E3);
        yb = null;
      });
    }
  }
  var ce = [];
  Da && Da("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Fa(ce, a.matches);
  });
  var jc = [];
  w.onbeforeprint ? (onbeforeprint = function() {
    ya(jc, !0);
  }, onafterprint = function() {
    ya(jc, !1);
  }, xb(function() {
    onbeforeprint = onafterprint = Oa;
  })) : Da && Da("print").addListener(function(a) {
    ya(jc, a.matches);
  });
  var hd = function(a) {
    md.push(a);
  };
  var md = [], kc = w.onscroll;
  onscroll = function(a) {
    var b;
    kc && (b = kc(a));
    Ab || ya(md);
    return b;
  };
  xb(function() {
    onscroll = kc = Oa;
  });
  var de = Qa("html")[0];
  var fb = Qa("head")[0];
  var db, Bc;
  (function(a) {
    function b(e) {
      for (var g = c, q = "", r = 0, t; t = e.length;) {
        4 > t && (r = [0, 2, 1, 0][t]), t = e.charCodeAt(0) << 16 | (1 < t ? e.charCodeAt(1) : 0) << 8 | (2 < t ? e.charCodeAt(2) : 0), q += [g[t >>> 18], g[t >>> 12 & 63], 2 <= r ? "=" : g[t >>> 6 & 63], 1 <= r ? "=" : g[t & 63]].join(""), e = e.substr(3);
      }
      return q;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Bc = b;
  })(this);
  var Hb = void 0;
  var Fc = {};
  Xa(function() {
    if (Cb) {
      if (!sa(ea) && (ea = wb || 8 <= A || cd || 2 <= Ka || Ka && (0 === v.ENGINE_VERSION.indexOf("1.9.1") || 0 === v.ENGINE_VERSION.indexOf("1.9.2")) || 7.2 <= ia || 522 <= Lb || 3 <= gc ? 2 : 6 <= ia || Ka ? 1 : 0, !ea)) {
        var a = Z(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        ea = 6 <= a.offsetWidth ? 2 : 0;
        za(a);
      }
    } else {
      ea = void 0;
    }
  });
  var Jb;
  9 > A && Xa(function(a) {
    a = Z(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    ic = 1 < a.offsetHeight;
    a.style.cssText = "";
    za(a);
  });
  var wd = function(a, b) {
    function c() {
      q || (e.complete ? (q = !0, J(a, !!e.width)) : --r ? g = J(c) : (q = !0, g = J(a, !1)));
    }
    var e = new Image, g, q, r = 99;
    e.onerror = function() {
      (!A || 11 === A || 11 === dd) && e.width || q || (q = !0, g && Ib(g), g = J(a, !1));
    };
    e.onload = function() {
      q = !0;
      g && Ib(g);
      ia && !e.complete ? g = J(a, !1) : (Ra = !0, J(a, !0));
    };
    e.src = b;
    8 > ia && e.complete ? (Ra = !0, J(a, !0)) : q || (g = J(c));
  };
  var vd = Dc;
  for (11 === dd && 5.5 > A && Z(fb, "link", {href:B + $d, rel:"stylesheet", type:"text/css"}); Wa.length;) {
    Wa.shift()();
  }
  Wa = null;
  var Y = String.fromCharCode, Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)], ee = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, -380, 
  -390, -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > A || hc && (44 <= Ka || wb)) && be(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((ae || 9 === A || 5.5 <= A && 9 > A && ic) && oa(N, "jsCanRotate"), a) {
        case 1:
          oa(N, "jsHcm");
          break;
        case 2:
          oa(N, "jsHcmWob");
          break;
        case 3:
          oa(N, "jsHcmBow");
      }
    } else {
      eb("jsCanRotate");
    }
  });
  var gb = [], Mb, Nb, nd;
  ld(function(a) {
    function b(m) {
      var n = m.getAttribute("pbtip") || "", E = n.charAt(0), M = "_" === E;
      n = M ? n.charAt(2) : E;
      E = M ? "Btm" : "";
      var p = m.getAttribute("title") || "";
      t || (m.removeAttribute("pbtip"), m.removeAttribute("title"), oa(m, "pbTipPos" + n.toUpperCase()), Z(m, "div", {className:"pbTip" + E}, {width:p.length + q + "em"}, p));
      Z(m, "div", {className:"pbTail" + E});
      G && M && (m.focus(), m.blur());
    }
    function c(m) {
      S || r || Ha(m, "pbChrCS") && gb.push(m);
    }
    function e(m) {
      var n = m.getAttribute("pbGhst") || "", E = m.className, M = E.split("pbCsr")[1] || "", p = E.split("pbAlp")[1] || "";
      if ("CS" === n) {
        var x = "_";
      } else {
        x = n, 3 === x.length && (x = x.substr(0, 2)), x = Aa[parseInt(x, 16)] || "~";
      }
      m.removeAttribute("pbGhst");
      M = M.split(" ")[0];
      p = p.split(" ")[0];
      var K = 10 - R(p);
      2 > ea && p ? (E = E.split("pbChr")[1], E = E.split(" ")[0], g(m, E, p, m.innerHTML), n && g(m, n, K, x), m.style.backgroundImage = "none") : n ? (n = {className:"pbChr" + n + " pbAlp" + K + " pbCsr" + M}, db = 1, C = Z(m, "b", n, 0, x), c(m), c(C)) : c(m);
    }
    function g(m, n, E, M) {
      n = parseInt(n, 16);
      var p = ee[n];
      m = Z(m, "img", {title:M, src:"" + B + "pbLCD/x3_a" + E + "0.png"}, 0 === n ? {x:0, y:0} : {left:(0 > p ? 0 : -14) + "px", top:3 * -Math.abs(p) + "px"});
      "CS" === M && gb.push(m);
    }
    if (a && !nd) {
      nd = !0;
      var q = 6 > A ? 1 : 0;
      a = Qa("SAMP");
      var r = 9 > A, t = 8 === A, L = 9 > ia, G = 5 <= A && 6 > A, H, C, pa, P;
      ic && oa(N, "pbLCD-AX");
      if (a.length) {
        2 > ea && oa(N, "pbLCD-bgiFallback");
        var S = void 0 !== va.opacity || void 0 !== va["-moz-opacity"] || void 0 !== va["-khtml-opacity"], ja = !S && !r;
        L = 2 > ea || L || t || ja;
        for (pa = -1; H = a[++pa];) {
          if (Ha(H.parentElement || H.parentNode, "pbLCD")) {
            var ca = zc(H);
            for (H = ca.length; H;) {
              var da = ca[--H];
              switch(da.tagName.toUpperCase()) {
                case "A":
                  if (L) {
                    (2 > ea || t) && b(da);
                    var D = zc(da);
                    for (P = D.length; P;) {
                      t || e(D[--P]);
                    }
                  }
                  Yd ? da.setAttribute("href", "javascript:void(0)") : da.onclick = ud;
                  break;
                case "B":
                  L && e(da);
              }
            }
          }
        }
        gb.length ? (setInterval(Gc, 500), 2 === ea ? Ia([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ia([".pbChrCS", "background-position:0 -51px"])) : Gc = null;
        ja && (2 === ea ? Ia([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + B + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        B + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + B + "pbLCD/x3_a90.png)"]) : Ia([".pbAlp1", "background-image:url(" + B + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + B + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + B + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + B + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + B + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        B + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + B + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + B + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + B + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Lb && (de.onclick = function(a) {
    if (Nb) {
      return Nb = !1, a.preventDefault(), !1;
    }
  });
  6 === A && (new nc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(I);
  var Sb = Aa[7], Jc = Aa[30], yd = Aa[113], ib = Y(8337) + Y(8331), lb = Y(160), Cd = Y(8194), Ad = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Bd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), zd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Jc + Aa[31]).split(""), ta = 
  [], jb, Qb = B + "pbFont/" + (9 > A ? "x3mask_ie.png" : "x3mask.png"), Hc = 8 > ia && !0, Rb;
  ld(function(a) {
    if (a && !Rb) {
      var b = I.all || Qa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ha(c, "pbList") ? kb(c) : Ha(c, "pbFont") && kb(c, !0);
      }
      ta.length && hb();
      Rb = !0;
    }
  });
  od.prettify = kb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

