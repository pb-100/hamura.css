PB100 = {};
(function(nd, v, n, od, G, ha, lc, Q, mc, nc, ee, zb, pd, pa, fe) {
  function Ya(a, b) {
    var d = Q(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function oc(a) {
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
  function pc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var l = Q(a[d]), r = Q(b[d]);
      if (l !== r) {
        return l > r ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function qc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], l; b < d; ++b) {
      0 > pc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function rc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function w() {
  }
  function qa(a) {
    return void 0 !== a;
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function qd() {
    Da && (sc(), Da = setInterval(Za, tc));
  }
  function sc() {
    Da && (Da = clearInterval(Da));
  }
  function La() {
    for (var a, b = 0, d = new pa - 0; b < la.length;) {
      d < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    va = la.length ? zb(La, Ma) : 0;
  }
  function rd() {
    va && (uc(), va = zb(La, Ma));
  }
  function uc() {
    va && (va = pd(va));
  }
  function wa(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Ea(a, b) {
    vc && !Na.length && I(wc);
    Na.push(a, b);
  }
  function wc() {
    var a = Na, b;
    for (Na = []; b = a.shift();) {
      wa(b, a.shift());
    }
  }
  function Ab(a) {
    var b;
    Bb && (b = Bb(a));
    wa(ab, a);
    onload = Oa;
    ab = Ab = Bb = onload = null;
    return b;
  }
  function xc() {
    var a = 9 === Fa.offsetWidth;
    Cb !== a && Ea(yc, Cb = a);
  }
  function bb() {
    return Db = Pa ? Eb ? 2 : Fb ? 3 : 1 : 0;
  }
  function cb(a) {
    var b = b || G;
    return sd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Gb(a, b) {
    var d = G.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function da(a, b, d, e, l) {
    function r(H, J) {
      for (var x in J) {
        switch(x) {
          case "class":
          case "className":
            ra(H, J[x]);
            break;
          default:
            H.setAttribute(x, J[x]);
        }
      }
    }
    function y(H, J) {
      var x = H.style, U;
      for (U in J) {
        x[U] = J[U];
      }
    }
    if ("style" === b) {
      var C = !0;
      b = Gb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Gb(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    d && r(b, d);
    e && y(b, e);
    l && !C && b.appendChild(G.createTextNode(l));
    return b;
  }
  function Ga(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var d;
    if (!Ga(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function eb(a) {
    if (Ga(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function zc(a) {
    a = da(Hb, "style", {type:"text/css", media:"all"}, 0, a);
    Ib = a.sheet || a.styleSheet;
  }
  function Ha(a) {
    for (var b = Ib, d, e, l = "", r; a.length;) {
      d = a.shift(), e = a.shift(), r = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(r, b.cssRules.length) : l += r;
    }
    l && zc(l);
  }
  function Ac(a) {
    function b(e) {
      fb = e;
      d.onload = d.onerror = Oa;
      I(a, e);
    }
    if (qa(fb)) {
      w("[dataUriTest] already done : " + fb), I(a, fb);
    } else {
      if (8 > D) {
        w("[dataUriTest] trident < 8 : false"), I(a, !1);
      } else {
        w("[dataUriTest] start!");
        var d = new Image;
        d.onerror = function() {
          w("[dataUriTest] no DATA URI!");
          b(!1);
        };
        d.onload = function() {
          w("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          b(1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Bc(a, b, d, e, l, r, y) {
    function C() {
      var t = '1.6em "' + b + '"';
      w("[webFontTest] testByNativeFontLoaderAPI start.");
      G.fonts.load(t).then(function(E) {
        w("[webFontTest] fonts.check() : " + G.fonts.check(t, "i") + ", fonts.length : " + E.length);
        U(b) ? I(a, sa) : (w("[webFontTest] mesureWebFont() : false"), J(!0));
      }, function(E) {
        w("[webFontTest] fonts.load() rejected! " + E);
        Ac(R);
      });
    }
    function H(t) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (p = new pa - 0, !1) : t < new pa - p;
    }
    function J(t) {
      t && (w("[webFontTest] testWebFont start."), p = new pa - 0);
      U(b) ? (w("[webFontTest] testWebFont mesurement success : " + sa), a(sa)) : H(Z) ? (w("[webFontTest] testWebFont timeout!"), z ? a(0) : 9 > D ? I(a, 0) : Ac(R)) : I(J);
    }
    function x() {
      var t = -1, E;
      x = null;
      L = ["sans-serif", "serif"];
      m = da(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Qa = {}; E = L[++t];) {
        m.style.fontFamily = E, Qa[E] = m.offsetWidth;
      }
    }
    function U(t) {
      var E = 0, aa = -1, Jb, Cc = 0;
      x && x();
      for (N.appendChild(m); Jb = L[++aa];) {
        if (m.style.fontFamily = '"' + t + '",' + Jb, m.offsetWidth !== Qa[Jb]) {
          E = 1;
          break;
        }
      }
      E && l && (m.innerHTML = l, t = m.offsetWidth, m.innerHTML = r, Cc = t === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli");
      xa(m);
      return sa = E + Cc;
    }
    function R(t) {
      w("[webFontTest] testDataUriComplete : " + t);
      (z = t) ? O(!0) : a(0);
    }
    function O(t) {
      t && (p = new pa - 0);
      for (E in d) {
        if (U(E)) {
          w("[webFontTest] success! " + E);
          K = da(N, "div", {"aria-hidden":"true", className:e, id:e});
          t = d[E];
          var E = Ib, aa = Dc.all || 0;
          E ? E.addImport ? E.addImport(t, aa) : E.insertRule && E.insertRule('@import "' + t + '"', aa) : zc('@import "' + t + '"');
          Dc.all = ++aa;
          I(ya, !0);
        } else {
          H(100) ? (w("[webFontTest] timeout! " + E), delete d[E], I(O, !0)) : I(O);
        }
        return;
      }
      a(0);
    }
    function ya(t) {
      t && (w("[webFontTest] testImportedCssReady start!"), b = b.replace(td, ""), w("[webFontTest] targetWebFontName : " + b), p = new pa - 0);
      1 < K.offsetWidth ? (w("[webFontTest] testImportedCssReady ended."), xa(K), Z = 100, I(J, !0)) : H(Z) ? (w("[webFontTest] testImportedCssReady timeout!"), xa(K), a(0)) : I(ya);
    }
    var Z = y || 5E3, p, z, m, K, L, Qa, sa;
    (function() {
      var t;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > D) {
        return !0;
      }
      var E = da(Hb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = E.sheet || E.styleSheet) ? (t = 10 <= D ? aa.cssRules : aa.rules || aa.cssRules) && (t = t[0]) ? t.cssText : aa.cssText || "" : "";
      t = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      xa(E);
      return t;
    })() ? (w("[webFontTest] maybeCanWebFont() : true"), !G.fonts || 603 > gb ? (w("[webFontTest] No native font loader."), J(!0)) : (w("[webFontTest] Use Native font loader."), C())) : (w("[webFontTest] maybeCanWebFont() : false"), I(a, 0));
  }
  function Ec() {
    Kb = !Kb;
    for (var a = -1, b; b = Lb[++a];) {
      b.style.visibility = Kb ? "" : "hidden";
    }
  }
  function ud(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Mb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function hb() {
    hb = null;
    vd(Nb, "PB-100", {"PB-100_canTTF":A + "pbFont/ttf.css", "PB-100_canWOFF":A + "pbFont/woff.css", "PB-100_canEOT":A + "pbFont/eot.css", "PB-100_canSVG":A + "pbFont/svg.css"}, "pbFont-testCssReady", ib, "i", 5E3);
  }
  function Nb(a) {
    Ra = a;
    w("[pbList] WebFont test result : " + !!a);
    Ra ? Ob() : Sa ? Fc(!0) : qa(Sa) ? Ob() : wd(Fc, A + "pbLCD/bg.png");
  }
  function Fc(a) {
    a && (w("[pbList] Fallback start!"), ra(N, "pbList-noWebFont"), fa ? Ha([".pbList font:after", "content:url(" + A + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ha([".pbList font", "background-image:url(" + A + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Ob();
  }
  function Ob() {
    for (Nb = Bc = null; ma.length;) {
      jb(ma.shift(), ma.shift());
    }
    w("[pbList] complete.");
  }
  function jb(a, b) {
    function d(r) {
      r = r.childNodes;
      for (var y = -1, C; C = r[++y];) {
        switch(C.nodeType) {
          case 1:
            d(C);
            break;
          case 3:
            C.data && C.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(C);
        }
      }
    }
    var e = [];
    if (Nb) {
      -1 === ma.indexOf(a) && (ma.push(a, b), Pb && hb && hb());
    } else {
      var l = ma.indexOf(a);
      0 <= l && ma.splice(l, 2);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== Ra && (l = l.split(ib).join(Gc)), b ? a.data = l : xd(l.split("\r").join("").split("&yen;").join(yd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Qb).split("&amp;").join("&"), a);
      }
    }
  }
  function xd(a, b) {
    function d(z, m) {
      for (var K = ""; m;) {
        m & 1 && (K += z), m >>= 1, z += z;
      }
      return K;
    }
    function e(z, m, K) {
      for (var L, Qa = -1, sa, t; L = m[++Qa];) {
        for (; 0 <= (sa = z.indexOf(L));) {
          t = L.length, z = z.substr(0, sa) + d(K, t) + z.substr(sa + t);
        }
      }
      return z;
    }
    function l(z) {
      var m = Q(z), K = "" + m;
      return 0 < m && m === m | 0 && (m = z.indexOf(K) + K.length, m <= z.length) ? m : 0;
    }
    var r = " area line str cmd fnc syb".split(" "), y = [], C = "", H = -1, J, x;
    if (function(z) {
      var m = z.indexOf("P");
      if (-1 === m) {
        return !1;
      }
      m = Q(z.charAt(m + 1));
      return 0 <= m && 9 >= m;
    }(a)) {
      C = d("+", a.length);
    } else {
      for (0 <= (H = l(a)) && (C = d("|", H), --H); x = a.charAt(++H);) {
        x === Qb || J ? (C += "~", x === Qb && (J = !J)) : C += x;
      }
      C = e(C, zd, "^");
      C = e(C, Ad, "{");
      C = e(C, Bd, "}");
    }
    H = 0;
    for (J = a.length; H < J; ++H) {
      x = a.charAt(H);
      var U = x === Rb, R = " " === x;
      x = U ? " " : x;
      var O = C.charAt(H), ya = Z, Z = "|" === O;
      O = r["+|~{}^".indexOf(O) + 1];
      if ("\n" !== x) {
        if (Ra || !Sa) {
          8 > D && R && (x = H === J - 1 ? Rb : Cd), 2 === Ra && a.substr(H, 2) === ib && (x = ib, ++H), R = R && "str" === O ? ' class="pbList-strsp"' : U ? "" : !R && O ? ' class="pbList-' + O + '"' : "";
        } else {
          var p = za.indexOf(x);
          p = -1 === p ? "" : za.indexOf(x).toString(16).toUpperCase();
          p = (p = 1 === p.length ? "0" + p : p) ? "pbChr" + p : "";
          R = R && "str" === O ? ' class="pbList-strsp"' : R || !p ? "" : O ? ' class="' + (p ? p + " " : "") + "pbList-" + O + '"' : ' class="' + p + '"';
        }
        ya && U && (gb || kb) && (x = Rb);
        y.push("<font" + R + ">" + x + "</font>");
      } else {
        y.push(x);
      }
    }
    y = y.join("");
    if (1 === b.nodeType) {
      b.innerHTML = y;
    } else {
      for (r = Gb("font", y); y = r.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(y, b);
      }
      xa(b);
    }
  }
  var q, u, c = ha.userAgent, V = ha.appVersion, Sb = Q(V) | 0, F = ha.platform, Tb = G.documentElement, Hc = Tb && Tb.style, Ub = G.documentMode, Vb = lc.width, Wb = lc.height, Ic = n.HTMLAudioElement, Jc = n.performance, Kc = n.Int8Array, Dd = void 0 !== n.ontouchstart, Aa = k(V, "Version/") || k(c, "Version/"), Ia = void 0 !== Hc.MozAppearance, Lc = n.operamini, Xb = f(c, "UCWEB"), Ed = Xb && k(c, " U2/"), Fd = Xb && k(c, "; wds "), Yb = k(c.split("_").join("."), "; iPh OS "), Gd = k(c, "; Adr "), 
  Mc = f(V, "YJApp-ANDROID"), ea = f(F, "Android") || Ia && f(V, "Android") || Mc, S = k(F, "Android ") || k(V, "Android ") || k(c, "Android ") || Gd, Zb = f(F, "Linux"), Nc = "MacIntel" === F && void 0 !== ha.standalone, Ba = !Lc && n.opera, Hd = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : qc(k(c, "Opera "), Aa, "" + Sb)), Oc = n.opr, lb = !Ba && (G.all || Ub), ba = lb && (Ub ? Ub : n.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  n.attachEvent ? 5 : 4), $b = !lb && Tb.msContentZoomFactor, mb = !$b && n.chrome, ac = Ia && k(c, "Goanna/"), ia = !ac && Ia && k(c, "rv:"), Id = k(c, "Firefox/"), Jd = k(c, "Opera/"), Kd = n.FNRBrowser, na = Ya(c, "AppleWebKit/"), Ta = k(c, "Chrome/"), Pc = k(c, "OPR/"), Ld = k(V, "KHTML/"), Md = k(c.toLowerCase(), "iris"), Nd = k(c, "Silk/"), Ua = Ya(c, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Qc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      nb, bc = Qc.length; nb = Qc[--bc];) {
        if (f(c, nb)) {
          Va = 2 > Q(Aa) ? Aa : .9;
          break a;
        }
      }
      var Rc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (bc = Rc.length; nb = Rc[--bc];) {
        if (f(c, nb)) {
          Va = Aa;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Sc = Va, Tc = mb && 534.3 >= na, Uc = oc(F), Od = Uc && !f(c, F) && oc(c), Pd = Dd && (na || Ia) && Od || !S && Mc, Qd = !!n.ReactNativeWebView, ob;
  if (ob = Uc) {
    a: {
      var Vc = void 0;
      for (Vc in n) {
        if (0 === Vc.indexOf("SlexAPI_")) {
          ob = !0;
          break a;
        }
      }
      ob = void 0;
    }
  }
  var Rd = ob, Wc = n.puffinDevice, pb = Wc && Wc.clientInfo, Wa = pb && "iOS" === pb.os && pb.osVersion, Sd = Wa && pb.model, cc = !ba && G.registerElement, Td = !ba && G.execCommand, Ud = Zb && cc && "11.0.696.34" === Ta, Vd = n._firefoxTV_playbackStateObserverJava, Wd = Ya(c, "diordnA "), qb, B;
  if ("Nitro" === F) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      h = "NDSi";
      var g = Jd;
    } else {
      if ("New Nintendo 3DS" === F || f(c, "iPhone OS 6_0") && 320 === Vb && 240 === Wb) {
        h = "New3DS", g = k(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          h = "N3DS", g = k(c, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            h = "Swicth", g = k(V, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              h = "WiiU", g = k(V, "NintendoBrowser/"), na = k(V, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                h = "Wii";
                g = k(c, "Wii; U; ; ");
                var M = h;
                var P = g;
              } else {
                if (B = k(c, "PlayStation Vita ")) {
                  h = "PSVita", g = B, M = h, P = B;
                } else {
                  if (B = k(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = B;
                    var Xc = 3.3;
                    M = h;
                    P = B;
                  } else {
                    if (B = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = B, M = h, P = B, 0 > pc("4.10", B) && (q = "Sony", u = B);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Sb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Xc = 3.4;
                            M = h;
                            P = 2;
                            var rb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Yb || Wa || Nc) {
                              if (Wa) {
                                switch(g = Wa, Sd.substr(0, 4)) {
                                  case "iPho":
                                    var oa = "iPhone";
                                    var ca = !0;
                                    break;
                                  case "iPad":
                                    oa = "iPad";
                                    var W = !0;
                                    break;
                                  case "iPod":
                                    oa = "iPod";
                                    var Yc = !0;
                                }
                              } else {
                                Yb ? g = Yb : g = k(V.split("_").join("."), "OS ");
                                if (!g || Kd) {
                                  g = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : mc.isNaN ? 9.2 : n.SharedWorker ? Jc && Jc.now ? 8 : 8.4 : Td ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : Kc ? 4.3 : Ic ? 4.1 : 3.2;
                                }
                                var X = Vb === 1.5 * Wb || 1.5 * Vb === Wb;
                                0 === F.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === F.indexOf("iPad") || Nc ? (oa = "iPad", W = !0) : 0 === F.indexOf("iPod") && (oa = "iPod", Yc = !0);
                              }
                              var dc;
                              if (dc = !Wa) {
                                var ec;
                                if (!(ec = ha.standalone)) {
                                  var sb;
                                  if (sb = W || 12 > g) {
                                    a: {
                                      for (var Xd in G) {
                                        if ("webkitFullscreenEnabled" === Xd) {
                                          sb = !0;
                                          break a;
                                        }
                                      }
                                      sb = void 0;
                                    }
                                  }
                                  ec = sb;
                                }
                                dc = ec || 11 <= g && 13 > g && ha.mediaDevices;
                              }
                              dc ? (q = "SafariMobile", M = "Safari", P = g) : q = "iOSWebView";
                              h = "iOS";
                              u = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", q = "AOSP", u = 2.2, M = q, P = u, ea = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", q = "AOSP", u = 2.2, M = q, P = u;
                                } else {
                                  if (B = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = B;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, f(c, "Mobile") ? ca = !0 : f(c, "Tablet") && (W = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), M = h, P = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (B = k(c, "Tizen ")) {
                                          h = "Tizen", g = B, M = "Samsung", P = Ua, q = M, u = P, ca = !0;
                                        } else {
                                          if (B = k(c, "Windows Phone ") || k(V, "Windows Phone OS ") || Fd) {
                                            var tb = !0;
                                            g = B;
                                            ca = !0;
                                          } else {
                                            if ($b && "ARM" === F) {
                                              tb = !0, g = 10, ca = !0;
                                            } else {
                                              if (lb && f(V, "ZuneWP")) {
                                                tb = !0, g = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(c, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(c, "KFMUWI")) {
                                                      var ja = !0;
                                                      g = 6.3;
                                                      var T = W = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        ja = !0, g = 6, T = W = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          ja = !0, g = 5, T = W = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            ja = !0, g = 5, T = W = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              ja = !0, g = 5 <= Q(S) ? 5 : 4, T = W = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                ja = !0, g = 3, T = W = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  ja = !0, g = 2, T = W = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    ja = !0, g = 1, T = W = !0;
                                                                  } else {
                                                                    if (B = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = B, q = "AOSP", u = 2.2, M = q, P = u;
                                                                    } else {
                                                                      if (Vd) {
                                                                        ja = !0, g = S || Wd, T = !0;
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
                                                                              if (0 === c.indexOf("Windows Mobile;") || Md) {
                                                                                h = "WindowsMobile", rb = !0;
                                                                              } else {
                                                                                if ("WinCE" === F) {
                                                                                  h = F, rb = !0;
                                                                                } else {
                                                                                  if ("Win16" === F || "Win32" === F || "Win64" === F) {
                                                                                    h = F, g = k(c, "Windows NT ") || k(c, "Windows ");
                                                                                  } else {
                                                                                    if (0 === F.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === F ? "MacPPC" : F;
                                                                                      if (B = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = B;
                                                                                      }
                                                                                      var Zc = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = Aa, ca = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ea && Ia ? (f(c, "Android 4.4;") ? X = {min:2.3} : 4 <= Q(S) ? X = S : X = {min:2.2}, g = X) : ea && Ba ? (S ? X = S : X = {min:1.6}, g = X, f(c, "Tablet") ? W = !0 : ca = !0) : S ? (g = 
                                                                                      S, ea = !0) : Zb && Pd || Qd || Rd ? (qb = !0, Ua ? X = {min:4.4} : mb && !Tc || Oc || Pc ? X = {min:4} : (X = S = void 0 !== Hc.touchAction ? {min:5} : cc ? 4.4 : Kc ? ha.connection ? n.searchBoxJavaBridge_ || mb ? mc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Ic ? 2.3 : 2.2 : 530 <= na ? 2 : 1.5, Sc && (q = "Samsung", u = Sc)), g = X, ea = !0) : Ud ? (g = {min:5}, qb = ea = !0) : Zb && (f(c, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (B = k(c, "Mint/")) ? (h = "Mint", g = B) : (B = k(c, "Fedora/")) ? (h = "Fedora", g = B) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ja || ea && qb && Nd ? h = "FireOS" : ea && (h = h || "Android");
  tb && (h = "WindowsPhone");
  q || (T = T || ea, Ba ? (q = T || rb || ca || W ? "PrestoMobile" : "Presto", u = Hd) : lb ? ((X = Ya(V, "Trident/") + 4) && X !== ba && (M = "IEHost", P = X), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), rb || ca || W || Yc ? q = "TridentMobile" : Zc && 5 <= ba ? (q = "Tasman", M = "MacIE", P = ba) : (q = "Trident", Zc && (M = "MacIE", P = ba)), u = ba) : $b ? (q = tb ? "EdgeMobile" : "EdgeHTML", u = k(V, "Edge/")) : ac ? (q = "Goanna", 
  u = ac) : Ia ? (q = T ? "Fennec" : "Gecko", u = ia || Id) : Ua ? (q = "Samsung", u = Ua) : (B = Xc || k(c, "NetFront/")) ? (q = "NetFront", u = B) : (B = k(c, "iCab")) ? (q = "iCab", u = B) : (B = qc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Lc && Aa) ? (q = "OperaMini", u = B, h || (f(c, "iPhone") ? oa = "iPhone" : f(c, "iPad") ? oa = "iPad" : f(c, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Xb ? (q = "UCWEB", u = Ed) : Ld ? (q = "KHTML", u = Sb) : ea && Tc ? (q = "AOSP", u = S) : mb || 
  Oc || Pc ? (q = T ? "ChromiumMobile" : "Chromium", u = Ta) : ea && cc ? (q = "ChromeWebView", u = 5 > Q(S) ? S : Ta) : ea && (Aa || qb) ? (q = "AOSP", u = S) : Ta ? (q = T ? "ChromiumMobile" : "Chromium", u = Ta) : na && (q = "WebKit", u = na));
  h && (v.PLATFORM = h, g ? (v.PLATFORM_VERSION = rc(g), v[h] = g === g + "" ? Q(g) : g) : v[h] = !0);
  q && (v.ENGINE = q, u ? (v.ENGINE_VERSION = rc(u), v[q] = u === u + "" ? Q(u) : u) : v[q] = !0, M || (M = q, P = u));
  var Oa = od, Ja = [], sd = !!G.getElementsByTagName, N = G.body, ta = N.style, D = v.Trident || v.TridentMobile, ub = v.Tasman, $c = v.EdgeHTML || v.EdgeMobile, ad = v.Presto || v.PrestoMobile, vb = v.Gecko, wb = v.Goanna, gb = v.WebKit, kb = v.SafariMobile || v.iOSWebView, Yd = v.OperaMini && v.UCWEB, fc = v.Win32 || v.Win64, Zd = Q(ha.userAgent.split("Edg/")[1]), bd = Q(ha.appVersion.split("Trident/")[1]) + 4;
  D || ub || (new nc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var cd = G.scripts, $d = (ub ? "ie5mac" : 5.5 > D ? "ie5win" : 6 > D ? "ie55" : 10 > D ? "ie" + (D | 0) : "modern") + ".css", ab = [], Cb, Db = 0, gc, Sa, fa, ae = qa(ta.transform) ? "transform" : qa(ta["-o-transform"]) ? "-o-transform" : qa(ta["-ms-transform"]) ? "-ms-transform" : qa(ta["-moz-transform"]) ? "-moz-transform" : qa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var A = cd[cd.length - 1].src.split("/");
  --A.length;
  (A = A.join("/")) && (A += "/");
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
    var d = arguments, e = d.length - 2 - b, l = this.slice(a, a + b), r;
    if (0 < e) {
      var y = this.length - 1;
      for (r = a + b; y >= r; --y) {
        this[y + e] = this[y];
      }
    } else {
      if (0 > e) {
        y = a + b;
        for (r = this.length; y < r; ++y) {
          this[y + e] = this[y];
        }
        this.length += e;
      }
    }
    y = 2;
    for (r = d.length; y < r; ++y) {
      this[y - 2 + a] = d[y];
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
  var hc, ic = [];
  Ja.push(function() {
    Ka(function() {
      (hc = n.logger || G.all.logger) || alert("#logger not found!");
      for (hc ? w = function(a) {
        da(hc, "P", null, null, a);
      } : n.console && (w = console.log); ic.length;) {
        w(ic.shift());
      }
    });
  });
  w = function(a) {
    ic.push(a);
  };
  w("[g_assetUrl] " + A);
  var ed = function(a) {
    $a.length || (Da = setInterval(Za, tc));
    $a.push({f:a, g:++dd});
    return dd;
  };
  var $a = [], tc = 999, dd = 0, Da;
  if (5 > D || ub) {
    n._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Ja.push(function() {
    6.1 > kb && fd(qd);
    xb(sc);
  });
  var I = function(a, b, d) {
    la.length || (va = zb(La, Ma));
    la.push({f:a, p:b, g:++gd, t:new pa - 0 + (Ma < d ? d : Ma)});
    return gd;
  };
  var hd = function(a) {
    for (var b = la.length, d; d = la[--b];) {
      if (d.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Ma = 64, gd = 0, va;
  if (5 > D || ub) {
    n._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Ja.push(function() {
    6.1 > kb && fd(rd);
    xb(uc);
  });
  var Ca = n.matchMedia, Na = [], vc, Fa;
  ab.push(function() {
    Fa = da(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Ka(function() {
      vc = !0;
      Na.length && I(wc);
    });
  });
  var Ka = function(a) {
    ab.push(a);
  };
  var xb = function(a) {
    id.push(a);
  };
  var id = [], Bb = n.onload, jd = n.onunload;
  onload = Ab;
  onunload = function(a) {
    var b;
    jd && (b = jd(a));
    wa(id, a);
    onunload = Oa;
    return b;
  };
  var kd = function(a) {
    yc.push(a);
  };
  var yc = [];
  Ka(function() {
    xc();
    ed(xc);
  });
  var be = function(a) {
    Xa.push(a);
  };
  var Xa = [], Pa, Fb, Eb;
  if (10 <= D || $c || fc && Zd) {
    Ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Pa = Fb = a.matches;
      Ea(Xa, bb());
    }), Ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Pa = Eb = a.matches;
      Ea(Xa, bb());
    }), Ca("(-ms-high-contrast:active)").addListener(function(a) {
      Pa = a.matches;
      Ea(Xa, bb());
    });
  } else {
    if (10 > D || fc && (44 <= vb || wb)) {
      var yb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = G.defaultView, d = Db, e = b ? b.getComputedStyle(Fa, null) : Fa.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Pa = "#123456" !== b && "rgb(18,52,86)" !== b, Fb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Eb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== bb() && Ea(Xa, Db), !0;
        }
      };
      Ka(function() {
        Fa.style.color = "#123456";
        Fa.style.backgroundColor = "#123456";
        60 > vb || wb ? yb() : yb() && ed(yb, 1E3);
        yb = null;
      });
    }
  }
  var ce = [];
  Ca && Ca("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ea(ce, a.matches);
  });
  var jc = [];
  n.onbeforeprint ? (onbeforeprint = function() {
    wa(jc, !0);
  }, onafterprint = function() {
    wa(jc, !1);
  }, xb(function() {
    onbeforeprint = onafterprint = Oa;
  })) : Ca && Ca("print").addListener(function(a) {
    wa(jc, a.matches);
  });
  var fd = function(a) {
    ld.push(a);
  };
  var ld = [], kc = n.onscroll;
  onscroll = function(a) {
    var b;
    kc && (b = kc(a));
    Ab || wa(ld);
    return b;
  };
  xb(function() {
    onscroll = kc = Oa;
  });
  var de = cb("html")[0];
  var Hb = cb("head")[0];
  var db;
  var Ib = void 0;
  var Dc = {};
  Ka(function() {
    if (Cb) {
      if (!qa(fa) && (fa = 1.8 <= vb || wb || 8 <= D || $c || 530 <= gb || 3.2 <= kb, !fa)) {
        var a = da(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        fa = 6 <= a.offsetWidth;
        xa(a);
      }
    } else {
      fa = void 0;
    }
  });
  var fb;
  9 > D && Ka(function(a) {
    a = da(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var wd = function(a, b) {
    function d() {
      r || (e.complete ? (r = !0, e.width || I(a, !1)) : l = I(d));
    }
    var e = new Image, l, r;
    e.onerror = function() {
      (!D || 11 === D || 11 === bd) && e.width || r || (r = !0, l && hd(l), l = I(a, !1));
    };
    e.onload = function() {
      r = !0;
      l && hd(l);
      ad && !e.complete ? l = I(a, !1) : (Sa = !0, I(a, !0));
    };
    e.src = b;
    8 > ad && e.complete ? (Sa = !0, I(a, !0)) : r || (l = I(d));
  };
  var vd = Bc;
  var td = "bad_" + (new pa - 0) + "_";
  for (11 === bd && 5.5 > D && da(Hb, "link", {href:A + $d, rel:"stylesheet", type:"text/css"}); Ja.length;) {
    Ja.shift()();
  }
  Ja = null;
  var Y = String.fromCharCode, za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > D || fc && (44 <= vb || wb)) && be(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((ae || 9 === D || 5.5 <= D && 9 > D && gc) && ra(N, "jsCanRotate"), a) {
        case 1:
          ra(N, "jsHcm");
          break;
        case 2:
          ra(N, "jsHcmWob");
          break;
        case 3:
          ra(N, "jsHcmBow");
      }
    } else {
      eb("jsCanRotate");
    }
  });
  var Lb = [], Kb, Mb, md;
  kd(function(a) {
    function b(p) {
      var z = p.getAttribute("pbtip") || "", m = z.charAt(0), K = "_" === m;
      z = K ? z.charAt(2) : m;
      m = K ? "Btm" : "";
      var L = p.getAttribute("title") || "";
      ra(p, "pbTipPos" + z.toUpperCase());
      da(p, "div", {className:"pbTip" + m}, {width:L.length + l + "em"}, L);
      da(p, "div", {className:"pbTail" + m});
      y && K && (p.focus(), p.blur());
    }
    function d(p) {
      if (fa && R) {
        e(p);
      } else {
        var z = p.getAttribute("pbGhst") || "", m = p.className, K = m.split("pbCsr")[1] || "";
        m = m.split("pbAlp")[1] || "";
        if ("CS" === z) {
          var L = "_";
        } else {
          L = z, 3 === L.length && (L = L.substr(0, 2)), L = za[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        m = m.split(" ")[0];
        m = 10 - Q(m);
        z ? (z = {className:["pbChr" + z + " pbAlp" + m + " pbCsr" + K]}, db = 1, H = da(p, "b", z, 0, L), e(p), e(H)) : e(p);
      }
    }
    function e(p) {
      U || r || Ga(p, "pbChrCS") && Lb.push(p);
    }
    if (a && !md) {
      md = !0;
      var l = 6 > D ? 1 : 0;
      a = cb("SAMP");
      var r = 9 > D, y = 5 <= D && 6 > D, C, H, J, x;
      gc && ra(N, "pbLCD-AX");
      if (a.length) {
        var U = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], R = !U && !r && !0, O = !fa || R || void 0;
        for (J = -1; C = a[++J];) {
          if (Ga(C.parentElement || C.parentNode, "pbLCD")) {
            var ya = C.children;
            for (C = ya.length; C;) {
              var Z = ya[--C];
              switch(Z.tagName.toUpperCase()) {
                case "A":
                  if (O) {
                    for (fa || b(Z), x = Z.children.length; x;) {
                      d(Z.children[--x]);
                    }
                  }
                  Yd ? Z.setAttribute("href", "javascript:void(0)") : Z.onclick = ud;
                  break;
                case "B":
                  O && d(Z);
              }
            }
          }
        }
        Lb.length ? (setInterval(Ec, 500), fa ? Ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ha([".pbChrCS", "background-position:0 -51px"])) : Ec = null;
        R && (fa ? Ha([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + A + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        A + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + A + "pbLCD/x3_a90.png)"]) : Ha([".pbAlp1", "background-image:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        A + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + A + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + A + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > gb && (de.onclick = function(a) {
    if (Mb) {
      return Mb = !1, a.preventDefault(), !1;
    }
  });
  6 === D && (new nc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Qb = za[7], Gc = za[30], yd = za[113], ib = Y(8337) + Y(8331), Rb = Y(160), Cd = Y(8194), Ad = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Bd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), zd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Gc + za[31]).split(""), ma = 
  [], Ra, Pb;
  kd(function(a) {
    if (a && !Pb) {
      var b = G.all || cb("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ga(d, "pbList") ? jb(d) : Ga(d, "pbFont") && jb(d, !0);
      }
      ma.length && (w("[pbList] " + ma.length / 2 + " elements found. WebFont test start."), hb());
      Pb = !0;
    }
  });
  nd.prettify = jb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

