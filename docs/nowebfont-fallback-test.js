PB100 = {};
(function(rd, y, w, sd, H, ia, qc, aa, rc, Db, ke, Eb, td, wa, le) {
  function bb(a, b) {
    var c = aa(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function sc(a) {
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
  function ja(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    var g = a.length, u = b.length;
    for (e = g < u ? g : u; c < e; ++c) {
      var t = a[c] - 0, n = b[c] - 0;
      if (t !== n) {
        return t > n ? 1 : -1;
      }
    }
    return g > u ? 1 : g === u ? 0 : -1;
  }
  function tc() {
    for (var a = arguments, b = 1, c = a[0], e; b < a.length; ++b) {
      0 > ja(c, e = a[b]) && (c = e);
    }
    return c;
  }
  function uc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function p() {
  }
  function xa(a) {
    return void 0 !== a;
  }
  function cb() {
    for (var a, b = 0; b < db.length; ++b) {
      a = db[b], a.f();
    }
  }
  function ud() {
    Ga && (vc(), Ga = setInterval(cb, wc));
  }
  function vc() {
    Ga && (Ga = clearInterval(Ga));
  }
  function Oa() {
    for (var a, b = 0, c = new wa - 0; b < pa.length;) {
      c < pa[0].t ? ++b : (a = pa.splice(b, 1)[0], a.f(a.p));
    }
    za = pa.length ? Eb(Oa, Pa) : 0;
  }
  function vd() {
    za && (xc(), za = Eb(Oa, Pa));
  }
  function xc() {
    za && (za = td(za));
  }
  function Aa(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Ha(a, b) {
    yc && !Qa.length && K(zc);
    Qa.push(a, b);
  }
  function zc() {
    var a = Qa, b;
    for (Qa = []; b = a.shift();) {
      Aa(b, a.shift());
    }
  }
  function Fb(a) {
    var b;
    Gb && (b = Gb(a));
    Aa(eb, a);
    onload = Ra;
    eb = Fb = Gb = onload = null;
    return b;
  }
  function Ac() {
    var a = 9 === Ia.offsetWidth;
    Hb !== a && Ha(Bc, Hb = a);
  }
  function fb() {
    return Ib = Sa ? Jb ? 2 : Kb ? 3 : 1 : 0;
  }
  function Ta(a) {
    var b = b || H;
    return wd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Ba(a) {
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
  function Lb(a, b) {
    var c = H.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function V(a, b, c, e, g) {
    function u(M, I) {
      for (var J in I) {
        switch(J) {
          case "class":
          case "className":
            qa(M, I[J]);
            break;
          default:
            M.setAttribute(J, I[J]);
        }
      }
    }
    function t(M, I) {
      var J = M.style, D;
      for (D in I) {
        J[D] = I[D];
      }
    }
    if ("style" === b) {
      var n = !0;
      b = Lb("div", 'a<style type="text/css">' + g + "</style>").lastChild;
    } else {
      b = Lb(b);
    }
    gb ? (2 === gb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    gb = 0;
    c && u(b, c);
    e && t(b, e);
    g && !n && b.appendChild(H.createTextNode(g));
    return b;
  }
  function Ja(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function qa(a, b) {
    var c;
    if (!Ja(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function hb(a) {
    if (Ja(O, a)) {
      var b = O.className.split(" ");
      b.splice(b.indexOf(a), 1);
      O.className = b.join(" ");
    }
  }
  function Dc(a) {
    8 <= ka && 9 > ka ? V(ib, "link", {type:"text/css", rel:"stylesheet", media:"all", href:"data:text/css;charset=utf-8;base64," + Ec(a)}) : (a = V(ib, "style", {type:"text/css", media:"all"}, 0, a), Mb = a.sheet || a.styleSheet);
  }
  function Ka(a) {
    for (var b = Mb, c, e, g = "", u; a.length;) {
      c = a.shift(), e = a.shift(), u = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(u, b.cssRules.length) : g += u;
    }
    g && Dc(g);
  }
  function Fc(a) {
    function b(g) {
      e = Nb(e);
      jb = g;
      c.onload = c.onerror = Ra;
      K(a, g);
    }
    if (xa(jb)) {
      p("[dataUriTest] already done : " + jb), K(a, jb);
    } else {
      if (8 > B) {
        p("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        p("[dataUriTest] start!");
        var c = new Image, e = K(function() {
          e && b(!1);
        });
        c.onerror = function() {
          p("[dataUriTest] no DATA URI!");
          b(!1);
        };
        c.onload = function() {
          p("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Gc(a, b, c, e, g, u, t) {
    function n() {
      var q = '1.6em "' + b + '"';
      p("[webFontTest] testByNativeFontLoaderAPI start.");
      H.fonts.load(q).then(function(v) {
        p("[webFontTest] fonts.check() : " + H.fonts.check(q, "i") + ", fonts.length : " + v.length);
        D(b) ? K(a, N) : (p("[webFontTest] mesureWebFont() : false"), I(!0));
      }, function(v) {
        p("[webFontTest] fonts.load() rejected! " + v);
        Fc(ra);
      });
    }
    function M(q) {
      return H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (da = new wa - 0, !1) : q < new wa - da;
    }
    function I(q) {
      q && (p("[webFontTest] testWebFont start."), da = new wa - 0);
      D(b) ? (p("[webFontTest] testWebFont mesurement success : " + N), a(N)) : M(la) ? (p("[webFontTest] testWebFont timeout!"), ea ? a(0) : 9 > B ? K(a, 0) : Fc(ra)) : K(I);
    }
    function J() {
      var q = -1, v;
      J = null;
      r = ["sans-serif", "serif"];
      E = V(O, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (F = {}; v = r[++q];) {
        E.style.fontFamily = v, F[v] = E.offsetWidth;
      }
    }
    function D(q) {
      var v = 0, L = -1, Ob, Hc = 0;
      J && J();
      for (O.appendChild(E); Ob = r[++L];) {
        if (E.style.fontFamily = '"' + q + '",' + Ob, E.offsetWidth !== F[Ob]) {
          v = 1;
          break;
        }
      }
      v && g && (E.innerHTML = g, q = E.offsetWidth, E.innerHTML = u, Hc = q === E.offsetWidth ? 1 : 0, E.innerHTML = "mmmmmmmmmmlli");
      Ba(E);
      return N = v + Hc;
    }
    function ra(q) {
      p("[webFontTest] testDataUriComplete : " + q);
      (ea = q) ? Q(!0) : a(0);
    }
    function Q(q) {
      q && (da = new wa - 0);
      for (v in c) {
        if (D(v)) {
          p("[webFontTest] success! " + v);
          m = V(O, "div", {"aria-hidden":"true", className:e, id:e});
          q = c[v];
          var v = Mb, L = Ic.all || 0;
          v ? v.addImport ? v.addImport(q, L) : v.insertRule && v.insertRule('@import "' + q + '"', L) : Dc('@import "' + q + '"');
          Ic.all = ++L;
          K(S, !0);
        } else {
          M(100) ? (p("[webFontTest] timeout! " + v), delete c[v], K(Q, !0)) : K(Q);
        }
        return;
      }
      a(0);
    }
    function S(q) {
      q && (p("[webFontTest] testImportedCssReady start!"), p("[webFontTest] targetWebFontName : " + b), da = new wa - 0);
      1 < m.offsetWidth ? (p("[webFontTest] testImportedCssReady ended."), Ba(m), la = 100, K(I, !0)) : M(la) ? (p("[webFontTest] testImportedCssReady timeout!"), Ba(m), a(0)) : K(S);
    }
    var la = t || 5E3, da, ea, E, m, r, F, N;
    b = xd + b;
    p("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var q;
      if (y.MeeGo || 2.2 > y.AOSP || y.WebOS || y.UCWEB || 10 > y.TridentMobile || y.NDS || y.NDSi || y.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var v = V(ib, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), L = (L = v.sheet || v.styleSheet) ? (q = 10 <= B ? L.cssRules : L.rules || L.cssRules) && (q = q[0]) ? q.cssText : L.cssText || "" : "";
      q = 0 < L.indexOf("src") && 0 === L.indexOf("@font-face");
      Ba(v);
      return q;
    })() ? (p("[webFontTest] maybeCanWebFont() : true"), !H.fonts || 603 > Pb ? (p("[webFontTest] No native font loader."), I(!0)) : (p("[webFontTest] Use Native font loader."), n())) : (p("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Jc() {
    Qb = !Qb;
    for (var a = -1, b; b = kb[++a];) {
      b.style.visibility = Qb ? "" : "hidden";
    }
  }
  function yd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Rb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function lb() {
    lb = null;
    zd(Sb, "PB-100", {"PB-100_canTTF":C + "pbFont/ttf.css", "PB-100_canWOFF":C + "pbFont/woff.css", "PB-100_canEOT":C + "pbFont/eot.css", "PB-100_canSVG":C + "pbFont/svg.css"}, "pbFont-testCssReady", mb, "i", 5E3);
  }
  function Sb(a) {
    nb = a;
    p("[pbList] WebFont test result : " + !!a);
    a || Kc ? Tb() : Ua ? Lc(!0) : xa(Ua) ? Tb() : (p("[pbList] Need imageTest " + ob), Ad(Lc, ob));
  }
  function Lc(a) {
    a ? (p("[pbList] Fallback start!"), qa(O, "pbList-noWebFont"), 9.5 > ka || (2 === fa ? Ka([".pbList font:after", "content:url(" + ob + ")"]) : Ka([".pbList font", "background-image:url(" + ob + ")"]))) : p("[pbList] image disabled!");
    Tb();
  }
  function Tb() {
    for (Sb = Gc = null; sa.length;) {
      pb(sa.shift(), sa.shift());
    }
    p("[pbList] complete.");
  }
  function pb(a, b) {
    function c(u) {
      u = u.childNodes;
      for (var t = -1, n; n = u[++t];) {
        switch(n.nodeType) {
          case 1:
            c(n);
            break;
          case 3:
            n.data && n.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(n);
        }
      }
    }
    var e = [];
    if (Sb) {
      -1 === sa.indexOf(a) && (sa.push(a, b), Ub && lb && lb());
    } else {
      var g = sa.indexOf(a);
      0 <= g && sa.splice(g, 2);
      for (c(a); a = e.shift();) {
        g = a.data, 2 !== nb && (g = g.split(mb).join(Mc)), b ? a.data = g : Bd(g.split("\r").join("").split("&yen;").join(Cd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Vb).split("&amp;").join("&"), a);
      }
    }
  }
  function Bd(a, b) {
    function c(m, r) {
      for (var F = ""; r;) {
        r & 1 && (F += m), r >>= 1, m += m;
      }
      return F;
    }
    function e(m, r, F) {
      for (var N, q = -1, v, L; N = r[++q];) {
        for (; 0 <= (v = m.indexOf(N));) {
          L = N.length, m = m.substr(0, v) + c(F, L) + m.substr(v + L);
        }
      }
      return m;
    }
    function g(m) {
      var r = aa(m), F = "" + r;
      return 0 < r && r === r | 0 && (r = m.indexOf(F) + F.length, r <= m.length) ? r : 0;
    }
    var u = " area line str cmd fnc syb".split(" "), t = [], n = "", M, I = -1, J, D;
    if (function(m) {
      var r = m.indexOf("P");
      if (-1 === r) {
        return !1;
      }
      r = aa(m.charAt(r + 1));
      return 0 <= r && 9 >= r;
    }(a)) {
      n = c("+", a.length);
    } else {
      for (0 <= (M = g(a)) && (n = c("|", M), I = M, --I); D = a.charAt(++I);) {
        D === Vb || J ? (n += "~", D === Vb && (J = !J)) : n += D;
      }
      n = e(n, Dd, "^");
      n = e(n, Ed, "{");
      n = e(n, Fd, "}");
    }
    I = 0;
    for (J = a.length; I < J; ++I) {
      D = a.charAt(I);
      var ra = D === qb, Q = " " === D;
      D = ra ? " " : D;
      var S = n.charAt(I), la = da, da = "|" === S;
      S = u["+|~{}^".indexOf(S) + 1];
      var ea = "";
      if ("\n" !== D) {
        if (nb || !Ua || Kc) {
          8 > B && Q && (D = I === J - 1 ? qb : Gd), 2 === nb && a.substr(I, 2) === mb && (D = mb, ++I), Q = Q && "str" === S ? ' class="pbList-strsp"' : ra ? "" : !Q && S ? ' class="pbList-' + S + '"' : "";
        } else {
          var E = Ca.indexOf(D);
          E = -1 === E ? "" : Ca.indexOf(D).toString(16).toUpperCase();
          E = (E = 1 === E.length ? "0" + E : E) ? "pbChr" + E : "";
          Q = Q && "str" === S ? ' class="pbList-strsp"' : Q || !E ? "" : S ? ' class="' + (E ? E + " " : "") + "pbList-" + S + '"' : ' class="' + E + '"';
        }
        la && ra ? D = qb : da && !la && 9.5 > ka && 4 > M && (ea = c("<font>" + qb + "</font>", 4 - M));
        t.push(ea + "<font" + Q + ">" + D + "</font>");
      } else {
        la = da = !1, t.push(D);
      }
    }
    t = t.join("");
    if (1 === b.nodeType) {
      b.innerHTML = t;
    } else {
      for (u = Lb("font", t); t = u.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(t, b);
      }
      Ba(b);
    }
  }
  var x, z, d = ia.userAgent, W = ia.appVersion, Wb = aa(W) || 0, G = ia.platform, Xb = H.documentElement, Nc = Xb && Xb.style, Yb = H.documentMode, Zb = qc.width, $b = qc.height, Oc = w.HTMLAudioElement, Pc = w.performance, Qc = w.Int8Array, Hd = void 0 !== w.ontouchstart, Da = l(W, "Version/") || l(d, "Version/"), Ea = !Rc && w.opera, Id = Ea && (Ea.version && "function" === typeof Ea.version ? Ea.version() : tc(l(d, "Opera "), Da, "" + Wb)), Sc = w.opr, Va = !Ea && (H.all || Yb), ba = Va && (Yb ? 
  Yb : w.XMLHttpRequest ? H.getElementsByTagName ? 7 : 4 : H.compatMode ? 6 : (0).toFixed ? 5.5 : w.attachEvent ? 5 : 4), ac = !Va && Xb.msContentZoomFactor, rb = !ac && w.chrome, La = !Va && void 0 !== Nc.MozAppearance, Rc = w.operamini, bc = f(d, "UCWEB"), Jd = bc && l(d, " U2/"), Kd = bc && l(d, "; wds "), cc = l(d.split("_").join("."), "; iPh OS "), Ld = l(d, "; Adr "), Tc = f(W, "YJApp-ANDROID"), ha = f(G, "Android") || La && f(W, "Android") || Tc, T = l(G, "Android ") || l(W, "Android ") || 
  l(d, "Android ") || Ld, dc = f(G, "Linux"), Uc = "MacIntel" === G && void 0 !== ia.standalone, ec = La && l(d, "Goanna/"), ma = !ec && La && l(d, "rv:"), Md = l(d, "Firefox/"), Nd = l(d, "Opera/"), Od = w.FNRBrowser, ta = bb(d, "AppleWebKit/"), Wa = l(d, "Chrome/"), Vc = l(d, "OPR/"), Pd = l(W, "KHTML/"), Qd = l(d.toLowerCase(), "iris"), Rd = l(d, "Silk/"), Xa = bb(d, "SamsungBrowser/"), Ya;
  if (Ya = !Xa) {
    a: {
      for (var Wc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      sb, fc = Wc.length; sb = Wc[--fc];) {
        if (f(d, sb)) {
          Ya = 2 > aa(Da) ? Da : .9;
          break a;
        }
      }
      var Xc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (fc = Xc.length; sb = Xc[--fc];) {
        if (f(d, sb)) {
          Ya = Da;
          break a;
        }
      }
      Ya = void 0;
    }
  }
  var Yc = Ya, Zc = rb && 534.3 >= ta, $c = sc(G), Sd = $c && !f(d, G) && sc(d), Td = Hd && (ta || La) && Sd || !T && Tc, Ud = !!w.ReactNativeWebView, tb;
  if (tb = $c) {
    a: {
      var ad = void 0;
      for (ad in w) {
        if (0 === ad.indexOf("SlexAPI_")) {
          tb = !0;
          break a;
        }
      }
      tb = void 0;
    }
  }
  var Vd = tb, bd = w.puffinDevice, ub = bd && bd.clientInfo, Za = ub && "iOS" === ub.os && ub.osVersion, Wd = Za && ub.model, gc = !ba && H.registerElement, Xd = !ba && H.execCommand, Yd = dc && gc && "11.0.696.34" === Wa, Zd = w._firefoxTV_playbackStateObserverJava, $d = bb(d, "diordnA "), vb, A;
  if ("Nitro" === G) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === G) {
      k = "NDSi";
      var h = Nd;
    } else {
      if ("New Nintendo 3DS" === G || f(d, "iPhone OS 6_0") && 320 === Zb && 240 === $b) {
        k = "New3DS", h = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === G) {
          k = "N3DS", h = l(d, "Version/"), ta = 535;
        } else {
          if ("Nintendo Swicth" === G) {
            k = "Swicth", h = l(W, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === G) {
              k = "WiiU", h = l(W, "NintendoBrowser/"), ta = l(W, "AppleWebKit/");
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
                    var cd = 3.3;
                    P = k;
                    R = A;
                  } else {
                    if (A = l(d, "PLAYSTATION 3; ") || l(d, "PLAYSTATION 3 ")) {
                      k = "PS3", h = A, P = k, R = A, 0 > ja("4.10", A) && (x = "Sony", z = A);
                    } else {
                      if (f(d, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === Wb && f(d, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            cd = 3.4;
                            P = k;
                            R = 2;
                            var wb = !0;
                          } else {
                            if (0 === G.indexOf("iP") || cc || Za || Uc) {
                              if (Za) {
                                switch(h = Za, Wd.substr(0, 4)) {
                                  case "iPho":
                                    var va = "iPhone";
                                    var ca = !0;
                                    break;
                                  case "iPad":
                                    va = "iPad";
                                    var X = !0;
                                    break;
                                  case "iPod":
                                    va = "iPod";
                                    var dd = !0;
                                }
                              } else {
                                cc ? h = cc : h = l(W.split("_").join("."), "OS ");
                                if (!h || Od) {
                                  h = w.PointerEvent ? 13 : w.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : w.WebAssembly ? 11.2 : w.HTMLMeterElement ? 10.3 : w.Proxy ? 10.2 : w.HTMLPictureElement ? 9.3 : rc.isNaN ? 9.2 : w.SharedWorker ? Pc && Pc.now ? 8 : 8.4 : Xd ? 7.1 : w.webkitURL ? 6.1 : w.Worker ? 5.1 : Qc ? 4.3 : Oc ? 4.1 : 3.2;
                                }
                                var Y = Zb === 1.5 * $b || 1.5 * Zb === $b;
                                0 === G.indexOf("iPhone") ? (va = "iPhone", ca = !0) : 0 === G.indexOf("iPad") || Uc ? (va = "iPad", X = !0) : 0 === G.indexOf("iPod") && (va = "iPod", dd = !0);
                              }
                              var hc;
                              if (hc = !Za) {
                                var ic;
                                if (!(ic = ia.standalone)) {
                                  var xb;
                                  if (xb = X || 12 > h) {
                                    a: {
                                      for (var ae in H) {
                                        if ("webkitFullscreenEnabled" === ae) {
                                          xb = !0;
                                          break a;
                                        }
                                      }
                                      xb = void 0;
                                    }
                                  }
                                  ic = xb;
                                }
                                hc = ic || 11 <= h && 13 > h && ia.mediaDevices;
                              }
                              hc ? (x = "SafariMobile", P = "Safari", R = h) : x = "iOSWebView";
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
                                      k = "FirefoxOS", h = 18.1 > ma ? "1.0.1" : 19 > ma ? 1.1 : 27 > ma ? 1.2 : 29 > ma ? 1.3 : 31 > ma ? 1.4 : 33 > ma ? 2 : 35 > ma ? 2.1 : 38 > ma ? 2.2 : 45 > ma ? 2.5 : 2.6, f(d, "Mobile") ? ca = !0 : f(d, "Tablet") && (X = !0);
                                    } else {
                                      if (w.palmGetResource) {
                                        k = "webOS", h = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), P = k, R = h, f(d, "webOS.TV") || f(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (A = l(d, "Tizen ")) {
                                          k = "Tizen", h = A, P = "Samsung", R = Xa, x = P, z = R, ca = !0;
                                        } else {
                                          if (A = l(d, "Windows Phone ") || l(W, "Windows Phone OS ") || Kd) {
                                            var yb = !0;
                                            h = A;
                                            ca = !0;
                                          } else {
                                            if (ac && "ARM" === G) {
                                              yb = !0, h = 10, ca = !0;
                                            } else {
                                              if (Va && f(W, "ZuneWP")) {
                                                yb = !0, h = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  k = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    k = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var na = !0;
                                                      h = 6.3;
                                                      var U = X = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        na = !0, h = 6, U = X = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          na = !0, h = 5, U = X = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            na = !0, h = 5, U = X = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              na = !0, h = 5 <= aa(T) ? 5 : 4, U = X = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                na = !0, h = 3, U = X = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  na = !0, h = 2, U = X = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    na = !0, h = 1, U = X = !0;
                                                                  } else {
                                                                    if (A = l(d, "Kindle/")) {
                                                                      k = "Kindle", h = A, x = "AOSP", z = 2.2, P = x, R = z;
                                                                    } else {
                                                                      if (Zd) {
                                                                        na = !0, h = T || $d, U = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          na = !0, h = T, U = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            k = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              k = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Qd) {
                                                                                k = "WindowsMobile", wb = !0;
                                                                              } else {
                                                                                if ("WinCE" === G) {
                                                                                  k = G, wb = !0;
                                                                                } else {
                                                                                  if ("Win16" === G || "Win32" === G || "Win64" === G) {
                                                                                    k = G, h = l(d, "Windows NT ") || l(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === G.indexOf("Mac")) {
                                                                                      k = "MacPowerPC" === G ? "MacPPC" : G;
                                                                                      if (A = l(d.split("_").join("."), "Mac OS X ")) {
                                                                                        h = A;
                                                                                      }
                                                                                      var ed = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (k = "BlackBerry", h = Da, ca = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? k = "SunOS" : f(d, "FreeBSD") ? k = "FreeBSD" : f(d, "OpenBSD") ? k = "OpenBSD" : f(d, "NetBSD") ? k = "NetBSD" : ha && La ? (f(d, "Android 4.4;") ? Y = {min:2.3} : 4 <= aa(T) ? Y = T : Y = {min:2.2}, h = Y) : ha && Ea ? (T ? Y = T : Y = {min:1.6}, h = Y, f(d, "Tablet") ? X = !0 : ca = !0) : T ? (h = 
                                                                                      T, ha = !0) : dc && Td || Ud || Vd ? (vb = !0, Xa ? Y = {min:4.4} : rb && !Zc || Sc || Vc ? Y = {min:4} : (Y = T = void 0 !== Nc.touchAction ? {min:5} : gc ? 4.4 : Qc ? ia.connection ? w.searchBoxJavaBridge_ || rb ? rc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ta ? 3 : 533 <= ta ? Oc ? 2.3 : 2.2 : 530 <= ta ? 2 : 1.5, Yc && (x = "Samsung", z = Yc)), h = Y, ha = !0) : Yd ? (h = {min:5}, vb = ha = !0) : dc && (f(d, "Ubuntu") ? 
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
  na || ha && vb && Rd ? k = "FireOS" : ha && (k = k || "Android");
  yb && (k = "WindowsPhone");
  x || (U = U || ha, Ea ? (x = U || wb || ca || X ? "PrestoMobile" : "Presto", z = Id) : Va ? ((Y = bb(W, "Trident/") + 4) && Y !== ba && (P = "IEHost", R = Y), 10 <= ba && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (P = "ModernIE", R = ba), wb || ca || X || dd ? x = "TridentMobile" : ed && 5 <= ba ? (x = "Tasman", P = "MacIE", R = ba) : (x = "Trident", ed && (P = "MacIE", R = ba)), z = ba) : ac ? (x = yb ? "EdgeMobile" : "EdgeHTML", z = l(W, "Edge/")) : ec ? (x = "Goanna", 
  z = ec) : La ? (x = U ? "Fennec" : "Gecko", z = ma || Md) : Xa ? (x = "Samsung", z = Xa) : (A = cd || l(d, "NetFront/")) ? (x = "NetFront", z = A) : (A = l(d, "iCab")) ? (x = "iCab", z = A) : (A = tc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Rc && Da) ? (x = "OperaMini", z = A, k || (f(d, "iPhone") ? va = "iPhone" : f(d, "iPad") ? va = "iPad" : f(d, "iPod") && (va = "iPod"), va && (k = "iOS"))) : bc ? (x = "UCWEB", z = Jd) : Pd ? (x = "KHTML", z = Wb) : ha && Zc ? (x = "AOSP", z = T) : rb || 
  Sc || Vc ? (x = U ? "ChromiumMobile" : "Chromium", z = Wa) : ha && gc ? (x = "ChromeWebView", z = 5 > aa(T) ? T : Wa) : ha && (Da || vb) ? (x = "AOSP", z = T) : Wa ? (x = U ? "ChromiumMobile" : "Chromium", z = Wa) : ta && (x = "WebKit", z = ta));
  ja = "" + ja;
  y.conpare = new Db(ja.substring(ja.indexOf("(") + 1, ja.indexOf(")")), ja.substring(ja.indexOf("{") + 1, ja.lastIndexOf("}") - 1));
  k && (y.PLATFORM = k, h ? (y.PLATFORM_VERSION = uc(h), y[k] = h === h + "" ? aa(h) : h) : y[k] = !0);
  x && (y.ENGINE = x, z ? (y.ENGINE_VERSION = uc(z), y[x] = z === z + "" ? aa(z) : z) : y[x] = !0, P || (P = x, R = z));
  var Ra = sd, Ma = [], wd = !!H.getElementsByTagName, O = H.body, ya = O.style, B = y.Trident || y.TridentMobile, zb = y.Tasman, fd = y.EdgeHTML || y.EdgeMobile, ka = y.Presto || y.PrestoMobile, $a = y.Gecko, be = $a && 0 <= y.conpare(y.ENGINE_VERSION, "1.9.1"), Ab = y.Goanna, Pb = y.WebKit, jc = y.SafariMobile || y.iOSWebView, ce = y.OperaMini && y.UCWEB, kc = y.Win32 || y.Win64, de = aa(ia.userAgent.split("Edg/")[1]), gd = aa(ia.appVersion.split("Trident/")[1]) + 4;
  B || zb || (new Db('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var hd = H.scripts || Ta("script"), ee = (zb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", eb = [], Hb, Ib = 0, lc, Ua, fa, fe = xa(ya.transform) ? "transform" : xa(ya["-o-transform"]) ? "-o-transform" : xa(ya["-ms-transform"]) ? "-ms-transform" : xa(ya["-moz-transform"]) ? "-moz-transform" : xa(ya["-webkit-transform"]) ? "-webkit-transform" : "";
  var C = hd[hd.length - 1].src.split("/");
  --C.length;
  (C = C.join("/")) && (C += "/");
  var oa = Array.prototype;
  oa.pop || (oa.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  oa.push || (oa.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  oa.shift || (oa.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  oa.splice || (oa.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, g = this.slice(a, a + b), u;
    if (0 < e) {
      var t = this.length - 1;
      for (u = a + b; t >= u; --t) {
        this[t + e] = this[t];
      }
    } else {
      if (0 > e) {
        t = a + b;
        for (u = this.length; t < u; ++t) {
          this[t + e] = this[t];
        }
        this.length += e;
      }
    }
    t = 2;
    for (u = c.length; t < u; ++t) {
      this[t - 2 + a] = c[t];
    }
    return g;
  });
  oa.indexOf || (oa.indexOf = function(a, b) {
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
  var mc, nc = [];
  Ma.push(function() {
    Na(function() {
      (mc = w.logger || H.logger || H.getElementById("logger")) || alert("#logger not found!");
      for (mc ? p = function(a) {
        V(mc, "P", null, null, a);
      } : w.console && (p = console.log); nc.length;) {
        p(nc.shift());
      }
    });
  });
  p = function(a) {
    nc.push(a);
  };
  p("[g_assetUrl] " + C);
  var jd = function(a) {
    db.length || (Ga = setInterval(cb, wc));
    db.push({f:a, g:++id});
    return id;
  };
  var db = [], wc = 999, id = 0, Ga;
  if (5 > B || zb) {
    w._wdb_onlooptimer = cb, cb = "_wdb_onlooptimer()";
  }
  Ma.push(function() {
    6.1 > jc && kd(ud);
    Bb(vc);
  });
  var K = function(a, b, c) {
    pa.length || (za = Eb(Oa, Pa));
    pa.push({f:a, p:b, g:++ld, t:new wa - 0 + (Pa < c ? c : Pa)});
    return ld;
  };
  var Nb = function(a) {
    for (var b = pa.length, c; c = pa[--b];) {
      if (c.g === a) {
        pa.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var pa = [], Pa = 64, ld = 0, za;
  if (5 > B || zb) {
    w._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  Ma.push(function() {
    6.1 > jc && kd(vd);
    Bb(xc);
  });
  var Fa = w.matchMedia, Qa = [], yc, Ia;
  eb.push(function() {
    Ia = V(O, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Na(function() {
      yc = !0;
      Qa.length && K(zc);
    });
  });
  var Na = function(a) {
    eb.push(a);
  };
  var Bb = function(a) {
    md.push(a);
  };
  var md = [], Gb = w.onload, nd = w.onunload;
  onload = Fb;
  onunload = function(a) {
    var b;
    nd && (b = nd(a));
    Aa(md, a);
    onunload = Ra;
    return b;
  };
  var od = function(a) {
    Bc.push(a);
  };
  var Bc = [];
  Na(function() {
    Ac();
    jd(Ac);
  });
  var ge = function(a) {
    ab.push(a);
  };
  var ab = [], Sa, Kb, Jb;
  if (10 <= B || fd || kc && de) {
    Fa("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Sa = Kb = a.matches;
      Ha(ab, fb());
    }), Fa("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Sa = Jb = a.matches;
      Ha(ab, fb());
    }), Fa("(-ms-high-contrast:active)").addListener(function(a) {
      Sa = a.matches;
      Ha(ab, fb());
    });
  } else {
    if (10 > B || kc && (44 <= $a || Ab)) {
      var Cb = function() {
        function a(g) {
          return "#ffffff" === g || "rgb(255,255,255)" === g;
        }
        var b = H.defaultView, c = Ib, e = b ? b.getComputedStyle(Ia, null) : Ia.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Sa = "#123456" !== b && "rgb(18,52,86)" !== b, Kb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Jb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== fb() && Ha(ab, Ib), !0;
        }
      };
      Na(function() {
        Ia.style.color = "#123456";
        Ia.style.backgroundColor = "#123456";
        60 > $a || Ab ? Cb() : Cb() && jd(Cb, 1E3);
        Cb = null;
      });
    }
  }
  var he = [];
  Fa && Fa("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ha(he, a.matches);
  });
  var oc = [];
  w.onbeforeprint ? (onbeforeprint = function() {
    Aa(oc, !0);
  }, onafterprint = function() {
    Aa(oc, !1);
  }, Bb(function() {
    onbeforeprint = onafterprint = Ra;
  })) : Fa && Fa("print").addListener(function(a) {
    Aa(oc, a.matches);
  });
  var kd = function(a) {
    pd.push(a);
  };
  var pd = [], pc = w.onscroll;
  onscroll = function(a) {
    var b;
    pc && (b = pc(a));
    Fb || Aa(pd);
    return b;
  };
  Bb(function() {
    onscroll = pc = Ra;
  });
  var ie = Ta("html")[0];
  var ib = Ta("head")[0];
  var gb, Ec;
  (function(a) {
    function b(e) {
      for (var g = c, u = "", t = 0, n; n = e.length;) {
        4 > n && (t = [0, 2, 1, 0][n]), n = e.charCodeAt(0) << 16 | (1 < n ? e.charCodeAt(1) : 0) << 8 | (2 < n ? e.charCodeAt(2) : 0), u += [g[n >>> 18], g[n >>> 12 & 63], 2 <= t ? "=" : g[n >>> 6 & 63], 1 <= t ? "=" : g[n & 63]].join(""), e = e.substr(3);
      }
      return u;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Ec = b;
  })(this);
  var Mb = void 0;
  var Ic = {};
  Na(function() {
    if (Hb) {
      if (!xa(fa) && (fa = Ab || 8 <= B || fd || be || 7.2 <= ka || 522 <= Pb || 3 <= jc ? 2 : 6 <= ka || $a ? 1 : 0, !fa)) {
        var a = V(O, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        fa = 6 <= a.offsetWidth ? 2 : 0;
        Ba(a);
      }
    } else {
      fa = void 0;
    }
  });
  var jb;
  9 > B && Na(function(a) {
    a = V(O, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    lc = 1 < a.offsetHeight;
    a.style.cssText = "";
    Ba(a);
  });
  var Ad = function(a, b) {
    function c() {
      u || (e.complete ? (p("[imageTest] timer -> img.complete. img.width=" + e.width), u = !0, K(a, !!e.width)) : --t ? g = K(c) : (p("[imageTest] timeout."), u = !0, g = K(a, !1)));
    }
    var e = new Image, g, u, t = 99;
    p("[imageTest] start.");
    e.onerror = function() {
      var n = !B || 11 === B || 11 === gd;
      p("[imageTest] error. errorFix=" + n);
      n && e.width || u || (p("[imageTest] error!"), u = !0, g && Nb(g), g = K(a, !1));
    };
    e.onload = function() {
      u = !0;
      g && Nb(g);
      p("[imageTest] onload.");
      ka && !e.complete ? (p("[imageTest] Presto not img.complete!"), g = K(a, !1)) : (p("[imageTest] success!"), Ua = !0, K(a, !0));
    };
    e.src = b;
    8 > ka && e.complete ? (p("[imageTest] Presto<8 success!"), Ua = !0, K(a, !0)) : u || (g = K(c));
  };
  var zd = Gc;
  var xd = "bad_" + (new wa - 0) + "_";
  for (11 === gd && 5.5 > B && V(ib, "link", {href:C + ee, rel:"stylesheet", type:"text/css"}); Ma.length;) {
    Ma.shift()();
  }
  Ma = null;
  var Z = String.fromCharCode, Ca = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Z(960), ")", "(", Z(234), Z(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Z(9824), "\u2190", Z(9829), Z(9830), Z(9827), Z(956), "\u03a9", "\u2193", "\u2192", "%", Z(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Z(9619)], je = [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -100, -110, -120, -130, -140, -150, -160, -170, -180, -190, -200, -210, -220, -230, -240, -250, -260, -270, -280, -290, -300, -310, -320, -330, -340, -350, -360, -370, -380, 
  -390, -400, -410, -420, -430, -440, -450, -460, -470, -480, -490, -500, -510, -520, -530, -540, -550, -570, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 0, 0, 280, 290, 300, 310, 141, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, -17, 540, -262, 560, 570, 580, 590];
  (10 > B || kc && (44 <= $a || Ab)) && ge(function(a) {
    hb("jsHcm");
    hb("jsHcmWob");
    hb("jsHcmBow");
    if (a) {
      switch((fe || 9 === B || 5.5 <= B && 9 > B && lc) && qa(O, "jsCanRotate"), a) {
        case 1:
          qa(O, "jsHcm");
          break;
        case 2:
          qa(O, "jsHcmWob");
          break;
        case 3:
          qa(O, "jsHcmBow");
      }
    } else {
      hb("jsCanRotate");
    }
  });
  var kb = [], Qb, Rb, qd;
  od(function(a) {
    function b(m) {
      var r = m.getAttribute("pbtip") || "", F = r.charAt(0), N = "_" === F;
      r = N ? r.charAt(2) : F;
      F = N ? "Btm" : "";
      var q = m.getAttribute("title") || "";
      n || (m.removeAttribute("pbtip"), m.removeAttribute("title"), qa(m, "pbTipPos" + r.toUpperCase()), V(m, "div", {className:"pbTip" + F}, {width:q.length + u + "em"}, q));
      V(m, "div", {className:"pbTail" + F});
      I && N && (m.focus(), m.blur());
    }
    function c(m) {
      S || t || Ja(m, "pbChrCS") && kb.push(m);
    }
    function e(m) {
      var r = m.getAttribute("pbGhst") || "", F = m.className, N = F.split("pbCsr")[1] || "", q = F.split("pbAlp")[1] || "";
      if ("CS" === r) {
        var v = "_";
      } else {
        v = r, 3 === v.length && (v = v.substr(0, 2)), v = Ca[parseInt(v, 16)] || "~";
      }
      m.removeAttribute("pbGhst");
      N = N.split(" ")[0];
      q = q.split(" ")[0];
      var L = 10 - aa(q);
      2 > fa && q ? (F = F.split("pbChr")[1], F = F.split(" ")[0], g(m, F, q, m.innerHTML), r && g(m, r, L, v), m.style.backgroundImage = "none") : r ? (r = {className:"pbChr" + r + " pbAlp" + L + " pbCsr" + N}, gb = 1, D = V(m, "b", r, 0, v), c(m), c(D)) : c(m);
    }
    function g(m, r, F, N) {
      r = parseInt(r, 16);
      var q = je[r];
      m = V(m, "img", {title:N, src:"" + C + "pbLCD/x3_a" + F + "0.png"}, 0 === r ? {x:0, y:0} : {left:(0 > q ? 0 : -14) + "px", top:3 * -Math.abs(q) + "px"});
      "CS" === N && kb.push(m);
    }
    if (a && !qd) {
      qd = !0;
      var u = 6 > B ? 1 : 0;
      a = Ta("SAMP");
      var t = 9 > B, n = 8 === B, M = 9 > ka, I = 5 <= B && 6 > B, J, D, ra, Q;
      lc && qa(O, "pbLCD-AX");
      if (a.length) {
        2 > fa && qa(O, "pbLCD-bgiFallback");
        var S = void 0 !== ya.opacity || void 0 !== ya["-moz-opacity"] || void 0 !== ya["-khtml-opacity"], la = !S && !t;
        M = 2 > fa || M || n || la;
        for (ra = -1; J = a[++ra];) {
          if (Ja(J.parentElement || J.parentNode, "pbLCD")) {
            var da = Cc(J);
            for (J = da.length; J;) {
              var ea = da[--J];
              switch(ea.tagName.toUpperCase()) {
                case "A":
                  if (M) {
                    (2 > fa || n) && b(ea);
                    var E = Cc(ea);
                    for (Q = E.length; Q;) {
                      n || e(E[--Q]);
                    }
                  }
                  ce ? ea.setAttribute("href", "javascript:void(0)") : ea.onclick = yd;
                  break;
                case "B":
                  M && e(ea);
              }
            }
          }
        }
        kb.length ? (setInterval(Jc, 500), 2 === fa ? Ka([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ka([".pbChrCS", "background-position:0 -51px"])) : Jc = null;
        la && (2 === fa ? Ka([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + C + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        C + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + C + "pbLCD/x3_a90.png)"]) : Ka([".pbAlp1", "background-image:url(" + C + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + C + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + C + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + C + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + C + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        C + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + C + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + C + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + C + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > Pb && (ie.onclick = function(a) {
    if (Rb) {
      return Rb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new Db("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(H);
  var Vb = Ca[7], Mc = Ca[30], Cd = Ca[113], mb = Z(8337) + Z(8331), qb = Z(160), Gd = Z(8194), Ed = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Fd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Dd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Mc + Ca[31]).split(""), sa = 
  [], nb, ob = C + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png"), Kc = 8 > ka && !1, Ub;
  od(function(a) {
    if (a && !Ub) {
      var b = H.all || Ta("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ja(c, "pbList") ? pb(c) : Ja(c, "pbFont") && pb(c, !0);
      }
      sa.length && (p("[pbList] " + sa.length / 2 + " elements found. WebFont test start."), lb());
      Ub = !0;
    }
  });
  rd.prettify = pb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

