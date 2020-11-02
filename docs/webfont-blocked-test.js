PB100 = {};
(function(sd, y, w, td, H, ia, oc, S, pc, qc, je, Cb, ud, va, ke) {
  function $a(a, b) {
    var c = S(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function rc(a) {
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
  function sc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var g = S(a[c]), u = S(b[c]);
      if (g !== u) {
        return g > u ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function tc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], g; b < c; ++b) {
      0 > sc(e, g = a[b]) && (e = g);
    }
    return e;
  }
  function uc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function n() {
  }
  function wa(a) {
    return void 0 !== a;
  }
  function ab() {
    for (var a, b = 0; b < bb.length; ++b) {
      a = bb[b], a.f();
    }
  }
  function vd() {
    Fa && (vc(), Fa = setInterval(ab, wc));
  }
  function vc() {
    Fa && (Fa = clearInterval(Fa));
  }
  function Oa() {
    for (var a, b = 0, c = new va - 0; b < oa.length;) {
      c < oa[0].t ? ++b : (a = oa.splice(b, 1)[0], a.f(a.p));
    }
    ya = oa.length ? Cb(Oa, Pa) : 0;
  }
  function wd() {
    ya && (xc(), ya = Cb(Oa, Pa));
  }
  function xc() {
    ya && (ya = ud(ya));
  }
  function za(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Ga(a, b) {
    yc && !Qa.length && K(zc);
    Qa.push(a, b);
  }
  function zc() {
    var a = Qa, b;
    for (Qa = []; b = a.shift();) {
      za(b, a.shift());
    }
  }
  function Db(a) {
    var b;
    Eb && (b = Eb(a));
    za(cb, a);
    onload = Ra;
    cb = Db = Eb = onload = null;
    return b;
  }
  function Ac() {
    var a = 9 === Ha.offsetWidth;
    Fb !== a && Ga(Bc, Fb = a);
  }
  function db() {
    return Gb = Sa ? Hb ? 2 : Ib ? 3 : 1 : 0;
  }
  function Ta(a) {
    var b = b || H;
    return xd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Aa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Cc(a) {
    var b = a.children, c = 0, e, g;
    if (!b) {
      for (b = [], a = a.childNodes, e = a.length; c < e; ++c) {
        1 === (g = a[c]).nodeType && (b[b.length] = g);
      }
    }
    return b;
  }
  function Jb(a, b) {
    var c = H.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function W(a, b, c, e, g) {
    function u(M, I) {
      for (var J in I) {
        switch(J) {
          case "class":
          case "className":
            pa(M, I[J]);
            break;
          default:
            M.setAttribute(J, I[J]);
        }
      }
    }
    function v(M, I) {
      var J = M.style, D;
      for (D in I) {
        J[D] = I[D];
      }
    }
    if ("style" === b) {
      var r = !0;
      b = Jb("div", 'a<style type="text/css">' + g + "</style>").lastChild;
    } else {
      b = Jb(b);
    }
    eb ? (2 === eb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    eb = 0;
    c && u(b, c);
    e && v(b, e);
    g && !r && b.appendChild(H.createTextNode(g));
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
  function fb(a) {
    if (Ia(O, a)) {
      var b = O.className.split(" ");
      b.splice(b.indexOf(a), 1);
      O.className = b.join(" ");
    }
  }
  function Dc(a) {
    8 <= ja && 9 > ja ? W(gb, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + Ec(a)}) : (a = W(gb, "style", {type:"text/css", media:"all"}, 0, a), Kb = a.sheet || a.styleSheet);
  }
  function Ja(a) {
    for (var b = Kb, c, e, g = "", u; a.length;) {
      c = a.shift(), e = a.shift(), u = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(u, b.cssRules.length) : g += u;
    }
    g && Dc(g);
  }
  function Fc(a) {
    function b(g) {
      e = Lb(e);
      hb = g;
      c.onload = c.onerror = Ra;
      K(a, g);
    }
    if (wa(hb)) {
      n("[dataUriTest] already done : " + hb), K(a, hb);
    } else {
      if (8 > B) {
        n("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        n("[dataUriTest] start!");
        var c = new Image, e = K(function() {
          e && b(!1);
        });
        c.onerror = function() {
          n("[dataUriTest] no DATA URI!");
          b(!1);
        };
        c.onload = function() {
          n("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Gc(a, b, c, e, g, u, v) {
    function r() {
      var p = '1.6em "' + b + '"';
      n("[webFontTest] testByNativeFontLoaderAPI start.");
      H.fonts.load(p).then(function(t) {
        n("[webFontTest] fonts.check() : " + H.fonts.check(p, "i") + ", fonts.length : " + t.length);
        D(b) ? K(a, N) : (n("[webFontTest] mesureWebFont() : false"), I(!0));
      }, function(t) {
        n("[webFontTest] fonts.load() rejected! " + t);
        Fc(qa);
      });
    }
    function M(p) {
      return H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (da = new va - 0, !1) : p < new va - da;
    }
    function I(p) {
      p && (n("[webFontTest] testWebFont start."), da = new va - 0);
      D(b) ? (n("[webFontTest] testWebFont mesurement success : " + N), a(N)) : M(ka) ? (n("[webFontTest] testWebFont timeout!"), ea ? a(0) : 9 > B ? K(a, 0) : Fc(qa)) : K(I);
    }
    function J() {
      var p = -1, t;
      J = null;
      q = ["sans-serif", "serif"];
      E = W(O, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (F = {}; t = q[++p];) {
        E.style.fontFamily = t, F[t] = E.offsetWidth;
      }
    }
    function D(p) {
      var t = 0, L = -1, Mb, Hc = 0;
      J && J();
      for (O.appendChild(E); Mb = q[++L];) {
        if (E.style.fontFamily = '"' + p + '",' + Mb, E.offsetWidth !== F[Mb]) {
          t = 1;
          break;
        }
      }
      t && g && (E.innerHTML = g, p = E.offsetWidth, E.innerHTML = u, Hc = p === E.offsetWidth ? 1 : 0, E.innerHTML = "mmmmmmmmmmlli");
      Aa(E);
      return N = t + Hc;
    }
    function qa(p) {
      n("[webFontTest] testDataUriComplete : " + p);
      (ea = p) ? Q(!0) : a(0);
    }
    function Q(p) {
      p && (da = new va - 0);
      for (t in c) {
        if (D(t)) {
          n("[webFontTest] success! " + t);
          m = W(O, "div", {"aria-hidden":"true", className:e, id:e});
          p = c[t];
          var t = Kb, L = Ic.all || 0;
          t ? t.addImport ? t.addImport(p, L) : t.insertRule && t.insertRule('@import "' + p + '"', L) : Dc('@import "' + p + '"');
          Ic.all = ++L;
          K(T, !0);
        } else {
          M(100) ? (n("[webFontTest] timeout! " + t), delete c[t], K(Q, !0)) : K(Q);
        }
        return;
      }
      a(0);
    }
    function T(p) {
      p && (n("[webFontTest] testImportedCssReady start!"), b = b.replace(Jc, ""), n("[webFontTest] targetWebFontName : " + b), da = new va - 0);
      1 < m.offsetWidth ? (n("[webFontTest] testImportedCssReady ended."), Aa(m), ka = 100, K(I, !0)) : M(ka) ? (n("[webFontTest] testImportedCssReady timeout!"), Aa(m), a(0)) : K(T);
    }
    var ka = v || 5E3, da, ea, E, m, q, F, N;
    b = Jc + b;
    n("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var p;
      if (y.MeeGo || 2.2 > y.AOSP || y.WebOS || y.UCWEB || 10 > y.TridentMobile || y.NDS || y.NDSi || y.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var t = W(gb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), L = (L = t.sheet || t.styleSheet) ? (p = 10 <= B ? L.cssRules : L.rules || L.cssRules) && (p = p[0]) ? p.cssText : L.cssText || "" : "";
      p = 0 < L.indexOf("src") && 0 === L.indexOf("@font-face");
      Aa(t);
      return p;
    })() ? (n("[webFontTest] maybeCanWebFont() : true"), !H.fonts || 603 > Nb ? (n("[webFontTest] No native font loader."), I(!0)) : (n("[webFontTest] Use Native font loader."), r())) : (n("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Kc() {
    Ob = !Ob;
    for (var a = -1, b; b = ib[++a];) {
      b.style.visibility = Ob ? "" : "hidden";
    }
  }
  function yd(a) {
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
    zd(Qb, "PB-100", {"PB-100_canTTF":C + "pbFont/ttf.css", "PB-100_canWOFF":C + "pbFont/woff.css", "PB-100_canEOT":C + "pbFont/eot.css", "PB-100_canSVG":C + "pbFont/svg.css"}, "pbFont-testCssReady", kb, "i", 5E3);
  }
  function Qb(a) {
    lb = a;
    n("[pbList] WebFont test result : " + !!a);
    a || Lc ? Rb() : Ua ? Mc(!0) : wa(Ua) ? Rb() : (n("[pbList] Need imageTest " + mb), Ad(Mc, mb));
  }
  function Mc(a) {
    a ? (n("[pbList] Fallback start!"), pa(O, "pbList-noWebFont"), 9.5 > ja || (2 === fa ? Ja([".pbList font:after", "content:url(" + mb + ")"]) : Ja([".pbList font", "background-image:url(" + mb + ")"]))) : n("[pbList] image disabled!");
    Rb();
  }
  function Rb() {
    for (Qb = Gc = null; ra.length;) {
      nb(ra.shift(), ra.shift());
    }
    n("[pbList] complete.");
  }
  function nb(a, b) {
    function c(u) {
      u = u.childNodes;
      for (var v = -1, r; r = u[++v];) {
        switch(r.nodeType) {
          case 1:
            c(r);
            break;
          case 3:
            r.data && r.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(r);
        }
      }
    }
    var e = [];
    if (Qb) {
      -1 === ra.indexOf(a) && (ra.push(a, b), Sb && jb && jb());
    } else {
      var g = ra.indexOf(a);
      0 <= g && ra.splice(g, 2);
      for (c(a); a = e.shift();) {
        g = a.data, 2 !== lb && (g = g.split(kb).join(Nc)), b ? a.data = g : Bd(g.split("\r").join("").split("&yen;").join(Cd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Tb).split("&amp;").join("&"), a);
      }
    }
  }
  function Bd(a, b) {
    function c(m, q) {
      for (var F = ""; q;) {
        q & 1 && (F += m), q >>= 1, m += m;
      }
      return F;
    }
    function e(m, q, F) {
      for (var N, p = -1, t, L; N = q[++p];) {
        for (; 0 <= (t = m.indexOf(N));) {
          L = N.length, m = m.substr(0, t) + c(F, L) + m.substr(t + L);
        }
      }
      return m;
    }
    function g(m) {
      var q = S(m), F = "" + q;
      return 0 < q && q === q | 0 && (q = m.indexOf(F) + F.length, q <= m.length) ? q : 0;
    }
    var u = " area line str cmd fnc syb".split(" "), v = [], r = "", M, I = -1, J, D;
    if (function(m) {
      var q = m.indexOf("P");
      if (-1 === q) {
        return !1;
      }
      q = S(m.charAt(q + 1));
      return 0 <= q && 9 >= q;
    }(a)) {
      r = c("+", a.length);
    } else {
      for (0 <= (M = g(a)) && (r = c("|", M), I = M, --I); D = a.charAt(++I);) {
        D === Tb || J ? (r += "~", D === Tb && (J = !J)) : r += D;
      }
      r = e(r, Dd, "^");
      r = e(r, Ed, "{");
      r = e(r, Fd, "}");
    }
    I = 0;
    for (J = a.length; I < J; ++I) {
      D = a.charAt(I);
      var qa = D === ob, Q = " " === D;
      D = qa ? " " : D;
      var T = r.charAt(I), ka = da, da = "|" === T;
      T = u["+|~{}^".indexOf(T) + 1];
      var ea = "";
      if ("\n" !== D) {
        if (lb || !Ua || Lc) {
          8 > B && Q && (D = I === J - 1 ? ob : Gd), 2 === lb && a.substr(I, 2) === kb && (D = kb, ++I), Q = Q && "str" === T ? ' class="pbList-strsp"' : qa ? "" : !Q && T ? ' class="pbList-' + T + '"' : "";
        } else {
          var E = Ba.indexOf(D);
          E = -1 === E ? "" : Ba.indexOf(D).toString(16).toUpperCase();
          E = (E = 1 === E.length ? "0" + E : E) ? "pbChr" + E : "";
          Q = Q && "str" === T ? ' class="pbList-strsp"' : Q || !E ? "" : T ? ' class="' + (E ? E + " " : "") + "pbList-" + T + '"' : ' class="' + E + '"';
        }
        ka && qa ? D = ob : da && !ka && 9.5 > ja && 4 > M && (ea = c("<font>" + ob + "</font>", 4 - M));
        v.push(ea + "<font" + Q + ">" + D + "</font>");
      } else {
        ka = da = !1, v.push(D);
      }
    }
    v = v.join("");
    if (1 === b.nodeType) {
      b.innerHTML = v;
    } else {
      for (u = Jb("font", v); v = u.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(v, b);
      }
      Aa(b);
    }
  }
  var x, z, d = ia.userAgent, X = ia.appVersion, Ub = S(X) | 0, G = ia.platform, Vb = H.documentElement, Oc = Vb && Vb.style, Wb = H.documentMode, Xb = oc.width, Yb = oc.height, Pc = w.HTMLAudioElement, Qc = w.performance, Rc = w.Int8Array, Hd = void 0 !== w.ontouchstart, Ca = l(X, "Version/") || l(d, "Version/"), Ka = void 0 !== Oc.MozAppearance, Sc = w.operamini, Zb = f(d, "UCWEB"), Id = Zb && l(d, " U2/"), Jd = Zb && l(d, "; wds "), $b = l(d.split("_").join("."), "; iPh OS "), Kd = l(d, "; Adr "), 
  Tc = f(X, "YJApp-ANDROID"), ha = f(G, "Android") || Ka && f(X, "Android") || Tc, U = l(G, "Android ") || l(X, "Android ") || l(d, "Android ") || Kd, ac = f(G, "Linux"), Uc = "MacIntel" === G && void 0 !== ia.standalone, Da = !Sc && w.opera, Ld = Da && (Da.version && "function" === typeof Da.version ? Da.version() : tc(l(d, "Opera "), Ca, "" + Ub)), Vc = w.opr, pb = !Da && (H.all || Wb), ba = pb && (Wb ? Wb : w.XMLHttpRequest ? H.getElementsByTagName ? 7 : 4 : H.compatMode ? 6 : (0).toFixed ? 5.5 : 
  w.attachEvent ? 5 : 4), bc = !pb && Vb.msContentZoomFactor, qb = !bc && w.chrome, cc = Ka && l(d, "Goanna/"), la = !cc && Ka && l(d, "rv:"), Md = l(d, "Firefox/"), Nd = l(d, "Opera/"), Od = w.FNRBrowser, sa = $a(d, "AppleWebKit/"), Va = l(d, "Chrome/"), Wc = l(d, "OPR/"), Pd = l(X, "KHTML/"), Qd = l(d.toLowerCase(), "iris"), Rd = l(d, "Silk/"), Wa = $a(d, "SamsungBrowser/"), Xa;
  if (Xa = !Wa) {
    a: {
      for (var Xc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      rb, dc = Xc.length; rb = Xc[--dc];) {
        if (f(d, rb)) {
          Xa = 2 > S(Ca) ? Ca : .9;
          break a;
        }
      }
      var Yc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (dc = Yc.length; rb = Yc[--dc];) {
        if (f(d, rb)) {
          Xa = Ca;
          break a;
        }
      }
      Xa = void 0;
    }
  }
  var Zc = Xa, $c = qb && 534.3 >= sa, ad = rc(G), Sd = ad && !f(d, G) && rc(d), Td = Hd && (sa || Ka) && Sd || !U && Tc, Ud = !!w.ReactNativeWebView, sb;
  if (sb = ad) {
    a: {
      var bd = void 0;
      for (bd in w) {
        if (0 === bd.indexOf("SlexAPI_")) {
          sb = !0;
          break a;
        }
      }
      sb = void 0;
    }
  }
  var Vd = sb, cd = w.puffinDevice, tb = cd && cd.clientInfo, Ya = tb && "iOS" === tb.os && tb.osVersion, Wd = Ya && tb.model, ec = !ba && H.registerElement, Xd = !ba && H.execCommand, Yd = ac && ec && "11.0.696.34" === Va, Zd = w._firefoxTV_playbackStateObserverJava, $d = $a(d, "diordnA "), ub, A;
  if ("Nitro" === G) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === G) {
      k = "NDSi";
      var h = Nd;
    } else {
      if ("New Nintendo 3DS" === G || f(d, "iPhone OS 6_0") && 320 === Xb && 240 === Yb) {
        k = "New3DS", h = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === G) {
          k = "N3DS", h = l(d, "Version/"), sa = 535;
        } else {
          if ("Nintendo Swicth" === G) {
            k = "Swicth", h = l(X, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === G) {
              k = "WiiU", h = l(X, "NintendoBrowser/"), sa = l(X, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === G) {
                k = "Wii";
                h = l(d, "Wii; U; ; ");
                var P = k;
                var R = h;
              } else {
                if (A = l(d, "PlayStation Vita ")) {
                  k = "PSVita", h = A, P = k, R = A;
                } else {
                  if (A = l(d, "(PlayStation Portable); ")) {
                    k = "PSP";
                    h = A;
                    var dd = 3.3;
                    P = k;
                    R = A;
                  } else {
                    if (A = l(d, "PLAYSTATION 3; ") || l(d, "PLAYSTATION 3 ")) {
                      k = "PS3", h = A, P = k, R = A, 0 > sc("4.10", A) && (x = "Sony", z = A);
                    } else {
                      if (f(d, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Ub && f(d, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            dd = 3.4;
                            P = k;
                            R = 2;
                            var vb = !0;
                          } else {
                            if (0 === G.indexOf("iP") || $b || Ya || Uc) {
                              if (Ya) {
                                switch(h = Ya, Wd.substr(0, 4)) {
                                  case "iPho":
                                    var ta = "iPhone";
                                    var ca = !0;
                                    break;
                                  case "iPad":
                                    ta = "iPad";
                                    var Y = !0;
                                    break;
                                  case "iPod":
                                    ta = "iPod";
                                    var ed = !0;
                                }
                              } else {
                                $b ? h = $b : h = l(X.split("_").join("."), "OS ");
                                if (!h || Od) {
                                  h = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : pc.isNaN ? 9.2 : w.SharedWorker ? Qc && Qc.now ? 8 : 8.4 : Xd ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : Rc ? 4.3 : Pc ? 4.1 : 3.2;
                                }
                                var Z = Xb === 1.5 * Yb || 1.5 * Xb === Yb;
                                0 === G.indexOf("iPhone") ? (ta = "iPhone", ca = !0) : 0 === G.indexOf("iPad") || Uc ? (ta = "iPad", Y = !0) : 0 === G.indexOf("iPod") && (ta = "iPod", ed = !0);
                              }
                              var fc;
                              if (fc = !Ya) {
                                var gc;
                                if (!(gc = ia.standalone)) {
                                  var wb;
                                  if (wb = Y || 12 > h) {
                                    a: {
                                      for (var ae in H) {
                                        if ("webkitFullscreenEnabled" === ae) {
                                          wb = !0;
                                          break a;
                                        }
                                      }
                                      wb = void 0;
                                    }
                                  }
                                  gc = wb;
                                }
                                fc = gc || 11 <= h && 13 > h && ia.mediaDevices;
                              }
                              fc ? (x = "SafariMobile", P = "Safari", R = h) : x = "iOSWebView";
                              k = "iOS";
                              z = h;
                            } else {
                              if (f(d, "Kobo")) {
                                k = "Kobo", x = "AOSP", z = 2.2, P = x, R = z, ha = !0;
                              } else {
                                if (f(d, "EBRD")) {
                                  k = "SonyReader", x = "AOSP", z = 2.2, P = x, R = z;
                                } else {
                                  if (A = l(d, "CrOS x86_64 ") || l(d, "CrOS aarch64 ") || l(d, "CrOS i686 ") || l(d, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = A;
                                  } else {
                                    if (void 0 !== w.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > la ? "1.0.1" : 19 > la ? 1.1 : 27 > la ? 1.2 : 29 > la ? 1.3 : 31 > la ? 1.4 : 33 > la ? 2 : 35 > la ? 2.1 : 38 > la ? 2.2 : 45 > la ? 2.5 : 2.6, f(d, "Mobile") ? ca = !0 : f(d, "Tablet") && (Y = !0);
                                    } else {
                                      if (w.palmGetResource) {
                                        k = "webOS", h = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), P = k, R = h, f(d, "webOS.TV") || f(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (A = l(d, "Tizen ")) {
                                          k = "Tizen", h = A, P = "Samsung", R = Wa, x = P, z = R, ca = !0;
                                        } else {
                                          if (A = l(d, "Windows Phone ") || l(X, "Windows Phone OS ") || Jd) {
                                            var xb = !0;
                                            h = A;
                                            ca = !0;
                                          } else {
                                            if (bc && "ARM" === G) {
                                              xb = !0, h = 10, ca = !0;
                                            } else {
                                              if (pb && f(X, "ZuneWP")) {
                                                xb = !0, h = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  k = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    k = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var ma = !0;
                                                      h = 6.3;
                                                      var V = Y = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        ma = !0, h = 6, V = Y = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          ma = !0, h = 5, V = Y = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            ma = !0, h = 5, V = Y = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              ma = !0, h = 5 <= S(U) ? 5 : 4, V = Y = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                ma = !0, h = 3, V = Y = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  ma = !0, h = 2, V = Y = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    ma = !0, h = 1, V = Y = !0;
                                                                  } else {
                                                                    if (A = l(d, "Kindle/")) {
                                                                      k = "Kindle", h = A, x = "AOSP", z = 2.2, P = x, R = z;
                                                                    } else {
                                                                      if (Zd) {
                                                                        ma = !0, h = U || $d, V = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          ma = !0, h = U, V = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            k = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              k = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Qd) {
                                                                                k = "WindowsMobile", vb = !0;
                                                                              } else {
                                                                                if ("WinCE" === G) {
                                                                                  k = G, vb = !0;
                                                                                } else {
                                                                                  if ("Win16" === G || "Win32" === G || "Win64" === G) {
                                                                                    k = G, h = l(d, "Windows NT ") || l(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === G.indexOf("Mac")) {
                                                                                      k = "MacPowerPC" === G ? "MacPPC" : G;
                                                                                      if (A = l(d.split("_").join("."), "Mac OS X ")) {
                                                                                        h = A;
                                                                                      }
                                                                                      var fd = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (k = "BlackBerry", h = Ca, ca = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? k = "SunOS" : f(d, "FreeBSD") ? k = "FreeBSD" : f(d, "OpenBSD") ? k = "OpenBSD" : f(d, "NetBSD") ? k = "NetBSD" : ha && Ka ? (f(d, "Android 4.4;") ? Z = {min:2.3} : 4 <= S(U) ? Z = U : Z = {min:2.2}, h = Z) : ha && Da ? (U ? Z = U : Z = {min:1.6}, h = Z, f(d, "Tablet") ? Y = !0 : ca = !0) : U ? (h = 
                                                                                      U, ha = !0) : ac && Td || Ud || Vd ? (ub = !0, Wa ? Z = {min:4.4} : qb && !$c || Vc || Wc ? Z = {min:4} : (Z = U = void 0 !== Oc.touchAction ? {min:5} : ec ? 4.4 : Rc ? ia.connection ? w.searchBoxJavaBridge_ || qb ? pc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= sa ? 3 : 533 <= sa ? Pc ? 2.3 : 2.2 : 530 <= sa ? 2 : 1.5, Zc && (x = "Samsung", z = Zc)), h = Z, ha = !0) : Yd ? (h = {min:5}, ub = ha = !0) : ac && (f(d, "Ubuntu") ? 
                                                                                      k = "Ubuntu" : (A = l(d, "Mint/")) ? (k = "Mint", h = A) : (A = l(d, "Fedora/")) ? (k = "Fedora", h = A) : k = f(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ma || ha && ub && Rd ? k = "FireOS" : ha && (k = k || "Android");
  xb && (k = "WindowsPhone");
  x || (V = V || ha, Da ? (x = V || vb || ca || Y ? "PrestoMobile" : "Presto", z = Ld) : pb ? ((Z = $a(X, "Trident/") + 4) && Z !== ba && (P = "IEHost", R = Z), 10 <= ba && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (P = "ModernIE", R = ba), vb || ca || Y || ed ? x = "TridentMobile" : fd && 5 <= ba ? (x = "Tasman", P = "MacIE", R = ba) : (x = "Trident", fd && (P = "MacIE", R = ba)), z = ba) : bc ? (x = xb ? "EdgeMobile" : "EdgeHTML", z = l(X, "Edge/")) : cc ? (x = "Goanna", 
  z = cc) : Ka ? (x = V ? "Fennec" : "Gecko", z = la || Md) : Wa ? (x = "Samsung", z = Wa) : (A = dd || l(d, "NetFront/")) ? (x = "NetFront", z = A) : (A = l(d, "iCab")) ? (x = "iCab", z = A) : (A = tc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Sc && Ca) ? (x = "OperaMini", z = A, k || (f(d, "iPhone") ? ta = "iPhone" : f(d, "iPad") ? ta = "iPad" : f(d, "iPod") && (ta = "iPod"), ta && (k = "iOS"))) : Zb ? (x = "UCWEB", z = Id) : Pd ? (x = "KHTML", z = Ub) : ha && $c ? (x = "AOSP", z = U) : qb || 
  Vc || Wc ? (x = V ? "ChromiumMobile" : "Chromium", z = Va) : ha && ec ? (x = "ChromeWebView", z = 5 > S(U) ? U : Va) : ha && (Ca || ub) ? (x = "AOSP", z = U) : Va ? (x = V ? "ChromiumMobile" : "Chromium", z = Va) : sa && (x = "WebKit", z = sa));
  k && (y.PLATFORM = k, h ? (y.PLATFORM_VERSION = uc(h), y[k] = h === h + "" ? S(h) : h) : y[k] = !0);
  x && (y.ENGINE = x, z ? (y.ENGINE_VERSION = uc(z), y[x] = z === z + "" ? S(z) : z) : y[x] = !0, P || (P = x, R = z));
  var Ra = td, La = [], xd = !!H.getElementsByTagName, O = H.body, xa = O.style, B = y.Trident || y.TridentMobile, yb = y.Tasman, gd = y.EdgeHTML || y.EdgeMobile, ja = y.Presto || y.PrestoMobile, Ma = y.Gecko, zb = y.Goanna, Nb = y.WebKit, hc = y.SafariMobile || y.iOSWebView, be = y.OperaMini && y.UCWEB, ic = y.Win32 || y.Win64, ce = S(ia.userAgent.split("Edg/")[1]), hd = S(ia.appVersion.split("Trident/")[1]) + 4;
  B || yb || (new qc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var id = H.scripts || Ta("script"), de = (yb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", cb = [], Fb, Gb = 0, jc, Ua, fa, ee = wa(xa.transform) ? "transform" : wa(xa["-o-transform"]) ? "-o-transform" : wa(xa["-ms-transform"]) ? "-ms-transform" : wa(xa["-moz-transform"]) ? "-moz-transform" : wa(xa["-webkit-transform"]) ? "-webkit-transform" : "";
  var C = id[id.length - 1].src.split("/");
  --C.length;
  (C = C.join("/")) && (C += "/");
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
    var c = arguments, e = c.length - 2 - b, g = this.slice(a, a + b), u;
    if (0 < e) {
      var v = this.length - 1;
      for (u = a + b; v >= u; --v) {
        this[v + e] = this[v];
      }
    } else {
      if (0 > e) {
        v = a + b;
        for (u = this.length; v < u; ++v) {
          this[v + e] = this[v];
        }
        this.length += e;
      }
    }
    v = 2;
    for (u = c.length; v < u; ++v) {
      this[v - 2 + a] = c[v];
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
  var kc, lc = [];
  La.push(function() {
    Na(function() {
      (kc = w.logger || H.logger || H.getElementById("logger")) || alert("#logger not found!");
      for (kc ? n = function(a) {
        W(kc, "P", null, null, a);
      } : w.console && (n = console.log); lc.length;) {
        n(lc.shift());
      }
    });
  });
  n = function(a) {
    lc.push(a);
  };
  n("[g_assetUrl] " + C);
  var kd = function(a) {
    bb.length || (Fa = setInterval(ab, wc));
    bb.push({f:a, g:++jd});
    return jd;
  };
  var bb = [], wc = 999, jd = 0, Fa;
  if (5 > B || yb) {
    w._wdb_onlooptimer = ab, ab = "_wdb_onlooptimer()";
  }
  La.push(function() {
    6.1 > hc && ld(vd);
    Ab(vc);
  });
  var K = function(a, b, c) {
    oa.length || (ya = Cb(Oa, Pa));
    oa.push({f:a, p:b, g:++md, t:new va - 0 + (Pa < c ? c : Pa)});
    return md;
  };
  var Lb = function(a) {
    for (var b = oa.length, c; c = oa[--b];) {
      if (c.g === a) {
        oa.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var oa = [], Pa = 64, md = 0, ya;
  if (5 > B || yb) {
    w._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  La.push(function() {
    6.1 > hc && ld(wd);
    Ab(xc);
  });
  var Ea = w.matchMedia, Qa = [], yc, Ha;
  cb.push(function() {
    Ha = W(O, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Na(function() {
      yc = !0;
      Qa.length && K(zc);
    });
  });
  var Na = function(a) {
    cb.push(a);
  };
  var Ab = function(a) {
    nd.push(a);
  };
  var nd = [], Eb = w.onload, od = w.onunload;
  onload = Db;
  onunload = function(a) {
    var b;
    od && (b = od(a));
    za(nd, a);
    onunload = Ra;
    return b;
  };
  var pd = function(a) {
    Bc.push(a);
  };
  var Bc = [];
  Na(function() {
    Ac();
    kd(Ac);
  });
  var fe = function(a) {
    Za.push(a);
  };
  var Za = [], Sa, Ib, Hb;
  if (10 <= B || gd || ic && ce) {
    Ea("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Sa = Ib = a.matches;
      Ga(Za, db());
    }), Ea("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Sa = Hb = a.matches;
      Ga(Za, db());
    }), Ea("(-ms-high-contrast:active)").addListener(function(a) {
      Sa = a.matches;
      Ga(Za, db());
    });
  } else {
    if (10 > B || ic && (44 <= Ma || zb)) {
      var Bb = function() {
        function a(g) {
          return "#ffffff" === g || "rgb(255,255,255)" === g;
        }
        var b = H.defaultView, c = Gb, e = b ? b.getComputedStyle(Ha, null) : Ha.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Sa = "#123456" !== b && "rgb(18,52,86)" !== b, Ib = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Hb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== db() && Ga(Za, Gb), !0;
        }
      };
      Na(function() {
        Ha.style.color = "#123456";
        Ha.style.backgroundColor = "#123456";
        60 > Ma || zb ? Bb() : Bb() && kd(Bb, 1E3);
        Bb = null;
      });
    }
  }
  var ge = [];
  Ea && Ea("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ga(ge, a.matches);
  });
  var mc = [];
  w.onbeforeprint ? (onbeforeprint = function() {
    za(mc, !0);
  }, onafterprint = function() {
    za(mc, !1);
  }, Ab(function() {
    onbeforeprint = onafterprint = Ra;
  })) : Ea && Ea("print").addListener(function(a) {
    za(mc, a.matches);
  });
  var ld = function(a) {
    qd.push(a);
  };
  var qd = [], nc = w.onscroll;
  onscroll = function(a) {
    var b;
    nc && (b = nc(a));
    Db || za(qd);
    return b;
  };
  Ab(function() {
    onscroll = nc = Ra;
  });
  var he = Ta("html")[0];
  var gb = Ta("head")[0];
  var eb, Ec;
  (function(a) {
    function b(e) {
      for (var g = c, u = "", v = 0, r; r = e.length;) {
        4 > r && (v = [0, 2, 1, 0][r]), r = e.charCodeAt(0) << 16 | (1 < r ? e.charCodeAt(1) : 0) << 8 | (2 < r ? e.charCodeAt(2) : 0), u += [g[r >>> 18], g[r >>> 12 & 63], 2 <= v ? "=" : g[r >>> 6 & 63], 1 <= v ? "=" : g[r & 63]].join(""), e = e.substr(3);
      }
      return u;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Ec = b;
  })(this);
  var Kb = void 0;
  var Ic = {};
  Na(function() {
    if (Fb) {
      if (!wa(fa) && (fa = zb || 8 <= B || gd || 2 <= Ma || Ma && (0 === y.ENGINE_VERSION.indexOf("1.9.1") || 0 === y.ENGINE_VERSION.indexOf("1.9.2")) || 7.2 <= ja || 522 <= Nb || 3 <= hc ? 2 : 6 <= ja || Ma ? 1 : 0, !fa)) {
        var a = W(O, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        fa = 6 <= a.offsetWidth ? 2 : 0;
        Aa(a);
      }
    } else {
      fa = void 0;
    }
  });
  var hb;
  9 > B && Na(function(a) {
    a = W(O, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    jc = 1 < a.offsetHeight;
    a.style.cssText = "";
    Aa(a);
  });
  var Ad = function(a, b) {
    function c() {
      u || (e.complete ? (n("[imageTest] timer -> img.complete. img.width=" + e.width), u = !0, K(a, !!e.width)) : --v ? g = K(c) : (n("[imageTest] timeout."), u = !0, g = K(a, !1)));
    }
    var e = new Image, g, u, v = 99;
    n("[imageTest] start.");
    e.onerror = function() {
      var r = !B || 11 === B || 11 === hd;
      n("[imageTest] error. errorFix=" + r);
      r && e.width || u || (n("[imageTest] error!"), u = !0, g && Lb(g), g = K(a, !1));
    };
    e.onload = function() {
      u = !0;
      g && Lb(g);
      n("[imageTest] onload.");
      ja && !e.complete ? (n("[imageTest] Presto not img.complete!"), g = K(a, !1)) : (n("[imageTest] success!"), Ua = !0, K(a, !0));
    };
    e.src = b;
    8 > ja && e.complete ? (n("[imageTest] Presto<8 success!"), Ua = !0, K(a, !0)) : u || (g = K(c));
  };
  var zd = Gc;
  var Jc = "bad_" + (new va - 0) + "_";
  for (11 === hd && 5.5 > B && W(gb, "link", {href:C + de, rel:"stylesheet", type:"text/css"}); La.length;) {
    La.shift()();
  }
  La = null;
  var aa = String.fromCharCode, Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", aa(960), ")", "(", aa(234), aa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", aa(9824), "\u2190", aa(9829), aa(9830), aa(9827), aa(956), "\u03a9", "\u2193", "\u2192", "%", aa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", aa(9619)], ie = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, 
  -380, -390, -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > B || ic && (44 <= Ma || zb)) && fe(function(a) {
    fb("jsHcm");
    fb("jsHcmWob");
    fb("jsHcmBow");
    if (a) {
      switch((ee || 9 === B || 5.5 <= B && 9 > B && jc) && pa(O, "jsCanRotate"), a) {
        case 1:
          pa(O, "jsHcm");
          break;
        case 2:
          pa(O, "jsHcmWob");
          break;
        case 3:
          pa(O, "jsHcmBow");
      }
    } else {
      fb("jsCanRotate");
    }
  });
  var ib = [], Ob, Pb, rd;
  pd(function(a) {
    function b(m) {
      var q = m.getAttribute("pbtip") || "", F = q.charAt(0), N = "_" === F;
      q = N ? q.charAt(2) : F;
      F = N ? "Btm" : "";
      var p = m.getAttribute("title") || "";
      r || (m.removeAttribute("pbtip"), m.removeAttribute("title"), pa(m, "pbTipPos" + q.toUpperCase()), W(m, "div", {className:"pbTip" + F}, {width:p.length + u + "em"}, p));
      W(m, "div", {className:"pbTail" + F});
      I && N && (m.focus(), m.blur());
    }
    function c(m) {
      T || v || Ia(m, "pbChrCS") && ib.push(m);
    }
    function e(m) {
      var q = m.getAttribute("pbGhst") || "", F = m.className, N = F.split("pbCsr")[1] || "", p = F.split("pbAlp")[1] || "";
      if ("CS" === q) {
        var t = "_";
      } else {
        t = q, 3 === t.length && (t = t.substr(0, 2)), t = Ba[parseInt(t, 16)] || "~";
      }
      m.removeAttribute("pbGhst");
      N = N.split(" ")[0];
      p = p.split(" ")[0];
      var L = 10 - S(p);
      2 > fa && p ? (F = F.split("pbChr")[1], F = F.split(" ")[0], g(m, F, p, m.innerHTML), q && g(m, q, L, t), m.style.backgroundImage = "none") : q ? (q = {className:"pbChr" + q + " pbAlp" + L + " pbCsr" + N}, eb = 1, D = W(m, "b", q, 0, t), c(m), c(D)) : c(m);
    }
    function g(m, q, F, N) {
      q = parseInt(q, 16);
      var p = ie[q];
      m = W(m, "img", {title:N, src:"" + C + "pbLCD/x3_a" + F + "0.png"}, 0 === q ? {x:0, y:0} : {left:(0 > p ? 0 : -14) + "px", top:3 * -Math.abs(p) + "px"});
      "CS" === N && ib.push(m);
    }
    if (a && !rd) {
      rd = !0;
      var u = 6 > B ? 1 : 0;
      a = Ta("SAMP");
      var v = 9 > B, r = 8 === B, M = 9 > ja, I = 5 <= B && 6 > B, J, D, qa, Q;
      jc && pa(O, "pbLCD-AX");
      if (a.length) {
        2 > fa && pa(O, "pbLCD-bgiFallback");
        var T = void 0 !== xa.opacity || void 0 !== xa["-moz-opacity"] || void 0 !== xa["-khtml-opacity"], ka = !T && !v;
        M = 2 > fa || M || r || ka;
        for (qa = -1; J = a[++qa];) {
          if (Ia(J.parentElement || J.parentNode, "pbLCD")) {
            var da = Cc(J);
            for (J = da.length; J;) {
              var ea = da[--J];
              switch(ea.tagName.toUpperCase()) {
                case "A":
                  if (M) {
                    (2 > fa || r) && b(ea);
                    var E = Cc(ea);
                    for (Q = E.length; Q;) {
                      r || e(E[--Q]);
                    }
                  }
                  be ? ea.setAttribute("href", "javascript:void(0)") : ea.onclick = yd;
                  break;
                case "B":
                  M && e(ea);
              }
            }
          }
        }
        ib.length ? (setInterval(Kc, 500), 2 === fa ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Kc = null;
        ka && (2 === fa ? Ja([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + C + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        C + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + C + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        C + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + C + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + C + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Nb && (he.onclick = function(a) {
    if (Pb) {
      return Pb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new qc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(H);
  var Tb = Ba[7], Nc = Ba[30], Cd = Ba[113], kb = aa(8337) + aa(8331), ob = aa(160), Gd = aa(8194), Ed = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Fd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Dd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Nc + Ba[31]).split(""), 
  ra = [], lb, mb = C + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png"), Lc = 8 > ja && !1, Sb;
  pd(function(a) {
    if (a && !Sb) {
      var b = H.all || Ta("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? nb(c) : Ia(c, "pbFont") && nb(c, !0);
      }
      ra.length && (n("[pbList] " + ra.length / 2 + " elements found. WebFont test start."), jb());
      Sb = !0;
    }
  });
  sd.prettify = nb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

