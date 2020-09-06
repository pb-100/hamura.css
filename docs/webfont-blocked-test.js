PB100 = {};
(function(rd, v, n, sd, F, ha, mc, Q, nc, oc, ie, Ab, td, pa, je) {
  function Za(a, b) {
    var c = Q(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function pc(a) {
    return f(a, "Linux armv") || f(a, "Linux aarch") || f(a, "Linux i686") || f(a, "Linux x86_64");
  }
  function k(a, b) {
    var c = "", e = -1, m;
    if (a = a.split(b)[1]) {
      for (; m = a.charCodeAt(++e);) {
        if (48 <= m && 57 >= m || 46 === m) {
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
  function qc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var m = Q(a[c]), C = Q(b[c]);
      if (m !== C) {
        return m > C ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function rc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], m; b < c; ++b) {
      0 > qc(e, m = a[b]) && (e = m);
    }
    return e;
  }
  function sc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function u() {
  }
  function qa(a) {
    return void 0 !== a;
  }
  function $a() {
    for (var a, b = 0; b < ab.length; ++b) {
      a = ab[b], a.f();
    }
  }
  function ud() {
    Da && (tc(), Da = setInterval($a, uc));
  }
  function tc() {
    Da && (Da = clearInterval(Da));
  }
  function Ma() {
    for (var a, b = 0, c = new pa - 0; b < la.length;) {
      c < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    va = la.length ? Ab(Ma, Na) : 0;
  }
  function vd() {
    va && (vc(), va = Ab(Ma, Na));
  }
  function vc() {
    va && (va = td(va));
  }
  function wa(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Ea(a, b) {
    wc && !Oa.length && I(xc);
    Oa.push(a, b);
  }
  function xc() {
    var a = Oa, b;
    for (Oa = []; b = a.shift();) {
      wa(b, a.shift());
    }
  }
  function Bb(a) {
    var b;
    Cb && (b = Cb(a));
    wa(bb, a);
    onload = Pa;
    bb = Bb = Cb = onload = null;
    return b;
  }
  function yc() {
    var a = 9 === Fa.offsetWidth;
    Db !== a && Ea(zc, Db = a);
  }
  function cb() {
    return Eb = Qa ? Fb ? 2 : Gb ? 3 : 1 : 0;
  }
  function db(a) {
    var b = b || F;
    return wd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Hb(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function da(a, b, c, e, m) {
    function C(G, J) {
      for (var w in J) {
        switch(w) {
          case "class":
          case "className":
            ra(G, J[w]);
            break;
          default:
            G.setAttribute(w, J[w]);
        }
      }
    }
    function x(G, J) {
      var w = G.style, U;
      for (U in J) {
        w[U] = J[U];
      }
    }
    if ("style" === b) {
      var A = !0;
      b = Hb("div", 'a<style type="text/css">' + m + "</style>").lastChild;
    } else {
      b = Hb(b);
    }
    eb ? (2 === eb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    eb = 0;
    c && C(b, c);
    e && x(b, e);
    m && !A && b.appendChild(F.createTextNode(m));
    return b;
  }
  function Ga(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var c;
    if (!Ga(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function fb(a) {
    if (Ga(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function Ac(a) {
    a = da(Ib, "style", {type:"text/css", media:"all"}, 0, a);
    Jb = a.sheet || a.styleSheet;
  }
  function Ha(a) {
    for (var b = Jb, c, e, m = "", C; a.length;) {
      c = a.shift(), e = a.shift(), C = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(C, b.cssRules.length) : m += C;
    }
    m && Ac(m);
  }
  function Bc(a) {
    function b(e) {
      gb = e;
      c.onload = c.onerror = Pa;
      I(a, e);
    }
    if (qa(gb)) {
      u("[dataUriTest] already done : " + gb), I(a, gb);
    } else {
      if (8 > B) {
        u("[dataUriTest] trident < 8 : false"), I(a, !1);
      } else {
        u("[dataUriTest] start!");
        var c = new Image;
        c.onerror = function() {
          u("[dataUriTest] no DATA URI!");
          b(!1);
        };
        c.onload = function() {
          u("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Cc(a, b, c, e, m, C, x) {
    function A() {
      var r = '1.6em "' + b + '"';
      u("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(r).then(function(D) {
        u("[webFontTest] fonts.check() : " + F.fonts.check(r, "i") + ", fonts.length : " + D.length);
        U(b) ? I(a, sa) : (u("[webFontTest] mesureWebFont() : false"), J(!0));
      }, function(D) {
        u("[webFontTest] fonts.load() rejected! " + D);
        Bc(R);
      });
    }
    function G(r) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (p = new pa - 0, !1) : r < new pa - p;
    }
    function J(r) {
      r && (u("[webFontTest] testWebFont start."), p = new pa - 0);
      U(b) ? (u("[webFontTest] testWebFont mesurement success : " + sa), a(sa)) : G(Z) ? (u("[webFontTest] testWebFont timeout!"), y ? a(0) : 9 > B ? I(a, 0) : Bc(R)) : I(J);
    }
    function w() {
      var r = -1, D;
      w = null;
      L = ["sans-serif", "serif"];
      l = da(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Ra = {}; D = L[++r];) {
        l.style.fontFamily = D, Ra[D] = l.offsetWidth;
      }
    }
    function U(r) {
      var D = 0, aa = -1, Kb, Dc = 0;
      w && w();
      for (N.appendChild(l); Kb = L[++aa];) {
        if (l.style.fontFamily = '"' + r + '",' + Kb, l.offsetWidth !== Ra[Kb]) {
          D = 1;
          break;
        }
      }
      D && m && (l.innerHTML = m, r = l.offsetWidth, l.innerHTML = C, Dc = r === l.offsetWidth ? 1 : 0, l.innerHTML = "mmmmmmmmmmlli");
      xa(l);
      return sa = D + Dc;
    }
    function R(r) {
      u("[webFontTest] testDataUriComplete : " + r);
      (y = r) ? O(!0) : a(0);
    }
    function O(r) {
      r && (p = new pa - 0);
      for (D in c) {
        if (U(D)) {
          u("[webFontTest] success! " + D);
          K = da(N, "div", {"aria-hidden":"true", className:e, id:e});
          r = c[D];
          var D = Jb, aa = Ec.all || 0;
          D ? D.addImport ? D.addImport(r, aa) : D.insertRule && D.insertRule('@import "' + r + '"', aa) : Ac('@import "' + r + '"');
          Ec.all = ++aa;
          I(ya, !0);
        } else {
          G(100) ? (u("[webFontTest] timeout! " + D), delete c[D], I(O, !0)) : I(O);
        }
        return;
      }
      a(0);
    }
    function ya(r) {
      r && (u("[webFontTest] testImportedCssReady start!"), b = b.replace(Fc, ""), u("[webFontTest] targetWebFontName : " + b), p = new pa - 0);
      1 < K.offsetWidth ? (u("[webFontTest] testImportedCssReady ended."), xa(K), Z = 100, I(J, !0)) : G(Z) ? (u("[webFontTest] testImportedCssReady timeout!"), xa(K), a(0)) : I(ya);
    }
    var Z = x || 5000, p, y, l, K, L, Ra, sa;
    b = Fc + b;
    u("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var r;
      if (v.MeeGo || 2.2 > v.AOSP || v.WebOS || v.UCWEB || 10 > v.TridentMobile || v.NDS || v.NDSi || v.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var D = da(Ib, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = D.sheet || D.styleSheet) ? (r = 10 <= B ? aa.cssRules : aa.rules || aa.cssRules) && (r = r[0]) ? r.cssText : aa.cssText || "" : "";
      r = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      xa(D);
      return r;
    })() ? (u("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > hb ? (u("[webFontTest] No native font loader."), J(!0)) : (u("[webFontTest] Use Native font loader."), A())) : (u("[webFontTest] maybeCanWebFont() : false"), I(a, 0));
  }
  function Gc() {
    Lb = !Lb;
    for (var a = -1, b; b = Mb[++a];) {
      b.style.visibility = Lb ? "" : "hidden";
    }
  }
  function xd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Nb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function ib() {
    ib = null;
    yd(Ob, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", jb, "i", 5000);
  }
  function Ob(a) {
    Sa = a;
    u("[pbList] WebFont test result : " + !!a);
    Sa ? Pb() : Ta ? Hc(!0) : qa(Ta) ? Pb() : zd(Hc);
  }
  function Hc(a) {
    a && (u("[pbList] Fallback start!"), ra(N, "pbList-noWebFont"), fa ? Ha([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ha([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Pb();
  }
  function Pb() {
    for (Ob = Cc = null; ma.length;) {
      kb(ma.shift(), ma.shift());
    }
    u("[pbList] complete.");
  }
  function kb(a, b) {
    function c(C) {
      C = C.childNodes;
      for (var x = -1, A; A = C[++x];) {
        switch(A.nodeType) {
          case 1:
            c(A);
            break;
          case 3:
            A.data && A.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(A);
        }
      }
    }
    var e = [];
    if (Ob) {
      -1 === ma.indexOf(a) && (ma.push(a, b), Qb && ib && ib());
    } else {
      var m = ma.indexOf(a);
      0 <= m && ma.splice(m, 2);
      for (c(a); a = e.shift();) {
        m = a.data, 2 !== Sa && (m = m.split(jb).join(Ic)), b ? a.data = m : Ad(m.split("\r").join("").split("&yen;").join(Bd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Rb).split("&amp;").join("&"), a);
      }
    }
  }
  function Ad(a, b) {
    function c(y, l) {
      for (var K = ""; l;) {
        l & 1 && (K += y), l >>= 1, y += y;
      }
      return K;
    }
    function e(y, l, K) {
      for (var L, Ra = -1, sa, r; L = l[++Ra];) {
        for (; 0 <= (sa = y.indexOf(L));) {
          r = L.length, y = y.substr(0, sa) + c(K, r) + y.substr(sa + r);
        }
      }
      return y;
    }
    function m(y) {
      var l = Q(y), K = "" + l;
      return 0 < l && l === l | 0 && (l = y.indexOf(K) + K.length, l <= y.length) ? l : 0;
    }
    var C = " area line str cmd fnc syb".split(" "), x = [], A = "", G = -1, J, w;
    if (function(y) {
      var l = y.indexOf("P");
      if (-1 === l) {
        return !1;
      }
      l = Q(y.charAt(l + 1));
      return 0 <= l && 9 >= l;
    }(a)) {
      A = c("+", a.length);
    } else {
      for (0 <= (G = m(a)) && (A = c("|", G), --G); w = a.charAt(++G);) {
        w === Rb || J ? (A += "~", w === Rb && (J = !J)) : A += w;
      }
      A = e(A, Cd, "^");
      A = e(A, Dd, "{");
      A = e(A, Ed, "}");
    }
    G = 0;
    for (J = a.length; G < J; ++G) {
      w = a.charAt(G);
      var U = w === Sb, R = " " === w;
      w = U ? " " : w;
      var O = A.charAt(G), ya = Z, Z = "|" === O;
      O = C["+|~{}^".indexOf(O) + 1];
      if ("\n" !== w) {
        if (Sa || !Ta) {
          8 > B && R && (w = G === J - 1 ? Sb : Fd), 2 === Sa && a.substr(G, 2) === jb && (w = jb, ++G), R = R && "str" === O ? ' class="pbList-strsp"' : U ? "" : !R && O ? ' class="pbList-' + O + '"' : "";
        } else {
          var p = za.indexOf(w);
          p = -1 === p ? "" : za.indexOf(w).toString(16).toUpperCase();
          p = (p = 1 === p.length ? "0" + p : p) ? "pbChr" + p : "";
          R = R && "str" === O ? ' class="pbList-strsp"' : R || !p ? "" : O ? ' class="' + (p ? p + " " : "") + "pbList-" + O + '"' : ' class="' + p + '"';
        }
        ya && U && (hb || lb) && (w = Sb);
        x.push("<font" + R + ">" + w + "</font>");
      } else {
        x.push(w);
      }
    }
    x = x.join("");
    if (1 === b.nodeType) {
      b.innerHTML = x;
    } else {
      for (C = Hb("font", x); x = C.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(x, b);
      }
      xa(b);
    }
  }
  var q, t, d = ha.userAgent, V = ha.appVersion, Tb = Q(V) | 0, E = ha.platform, Ub = F.documentElement, Jc = Ub && Ub.style, Vb = F.documentMode, Wb = mc.width, Xb = mc.height, Kc = n.HTMLAudioElement, Lc = n.performance, Mc = n.Int8Array, Gd = void 0 !== n.ontouchstart, Aa = k(V, "Version/") || k(d, "Version/"), Ia = void 0 !== Jc.MozAppearance, Nc = n.operamini, Yb = f(d, "UCWEB"), Hd = Yb && k(d, " U2/"), Id = Yb && k(d, "; wds "), Zb = k(d.split("_").join("."), "; iPh OS "), Jd = k(d, "; Adr "), 
  Oc = f(V, "YJApp-ANDROID"), ea = f(E, "Android") || Ia && f(V, "Android") || Oc, S = k(E, "Android ") || k(V, "Android ") || k(d, "Android ") || Jd, $b = f(E, "Linux"), Pc = "MacIntel" === E && void 0 !== ha.standalone, Ba = !Nc && n.opera, Kd = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : rc(k(d, "Opera "), Aa, "" + Tb)), Qc = n.opr, mb = !Ba && (F.all || Vb), ba = mb && (Vb ? Vb : n.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  n.attachEvent ? 5 : 4), ac = !mb && Ub.msContentZoomFactor, nb = !ac && n.chrome, bc = Ia && k(d, "Goanna/"), ia = !bc && Ia && k(d, "rv:"), Ld = k(d, "Firefox/"), Md = k(d, "Opera/"), Nd = n.FNRBrowser, na = Za(d, "AppleWebKit/"), Ua = k(d, "Chrome/"), Rc = k(d, "OPR/"), Od = k(V, "KHTML/"), Pd = k(d.toLowerCase(), "iris"), Qd = k(d, "Silk/"), Va = Za(d, "SamsungBrowser/"), Wa;
  if (Wa = !Va) {
    a: {
      for (var Sc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      ob, cc = Sc.length; ob = Sc[--cc];) {
        if (f(d, ob)) {
          Wa = 2 > Q(Aa) ? Aa : 0.9;
          break a;
        }
      }
      var Tc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (cc = Tc.length; ob = Tc[--cc];) {
        if (f(d, ob)) {
          Wa = Aa;
          break a;
        }
      }
      Wa = void 0;
    }
  }
  var Uc = Wa, Vc = nb && 534.3 >= na, Wc = pc(E), Rd = Wc && !f(d, E) && pc(d), Sd = Gd && (na || Ia) && Rd || !S && Oc, Td = !!n.ReactNativeWebView, pb;
  if (pb = Wc) {
    a: {
      var Xc = void 0;
      for (Xc in n) {
        if (0 === Xc.indexOf("SlexAPI_")) {
          pb = !0;
          break a;
        }
      }
      pb = void 0;
    }
  }
  var Ud = pb, Yc = n.puffinDevice, qb = Yc && Yc.clientInfo, Xa = qb && "iOS" === qb.os && qb.osVersion, Vd = Xa && qb.model, dc = !ba && F.registerElement, Wd = !ba && F.execCommand, Xd = $b && dc && "11.0.696.34" === Ua, Yd = n._firefoxTV_playbackStateObserverJava, Zd = Za(d, "diordnA "), rb, z;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var g = Md;
    } else {
      if ("New Nintendo 3DS" === E || f(d, "iPhone OS 6_0") && 320 === Wb && 240 === Xb) {
        h = "New3DS", g = k(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === E) {
          h = "N3DS", g = k(d, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === E) {
            h = "Swicth", g = k(V, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === E) {
              h = "WiiU", g = k(V, "NintendoBrowser/"), na = k(V, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === E) {
                h = "Wii";
                g = k(d, "Wii; U; ; ");
                var M = h;
                var P = g;
              } else {
                if (z = k(d, "PlayStation Vita ")) {
                  h = "PSVita", g = z, M = h, P = z;
                } else {
                  if (z = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = z;
                    var Zc = 3.3;
                    M = h;
                    P = z;
                  } else {
                    if (z = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", g = z, M = h, P = z, 0 > qc("4.10", z) && (q = "Sony", t = z);
                    } else {
                      if (f(d, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Tb && f(d, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Zc = 3.4;
                            M = h;
                            P = 2;
                            var sb = !0;
                          } else {
                            if (0 === E.indexOf("iP") || Zb || Xa || Pc) {
                              if (Xa) {
                                switch(g = Xa, Vd.substr(0, 4)) {
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
                                    var $c = !0;
                                }
                              } else {
                                Zb ? g = Zb : g = k(V.split("_").join("."), "OS ");
                                if (!g || Nd) {
                                  g = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : nc.isNaN ? 9.2 : n.SharedWorker ? Lc && Lc.now ? 8.0 : 8.4 : Wd ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : Mc ? 4.3 : Kc ? 4.1 : 3.2;
                                }
                                var X = Wb === 1.5 * Xb || 1.5 * Wb === Xb;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === E.indexOf("iPad") || Pc ? (oa = "iPad", W = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", $c = !0);
                              }
                              var ec;
                              if (ec = !Xa) {
                                var fc;
                                if (!(fc = ha.standalone)) {
                                  var tb;
                                  if (tb = W || 12 > g) {
                                    a: {
                                      for (var $d in F) {
                                        if ("webkitFullscreenEnabled" === $d) {
                                          tb = !0;
                                          break a;
                                        }
                                      }
                                      tb = void 0;
                                    }
                                  }
                                  fc = tb;
                                }
                                ec = fc || 11 <= g && 13 > g && ha.mediaDevices;
                              }
                              ec ? (q = "SafariMobile", M = "Safari", P = g) : q = "iOSWebView";
                              h = "iOS";
                              t = g;
                            } else {
                              if (f(d, "Kobo")) {
                                h = "Kobo", q = "AOSP", t = 2.2, M = q, P = t, ea = !0;
                              } else {
                                if (f(d, "EBRD")) {
                                  h = "SonyReader", q = "AOSP", t = 2.2, M = q, P = t;
                                } else {
                                  if (z = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = z;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2.0 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, f(d, "Mobile") ? ca = !0 : f(d, "Tablet") && (W = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        h = "webOS", g = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), M = h, P = g, f(d, "webOS.TV") || f(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (z = k(d, "Tizen ")) {
                                          h = "Tizen", g = z, M = "Samsung", P = Va, q = M, t = P, ca = !0;
                                        } else {
                                          if (z = k(d, "Windows Phone ") || k(V, "Windows Phone OS ") || Id) {
                                            var ub = !0;
                                            g = z;
                                            ca = !0;
                                          } else {
                                            if (ac && "ARM" === E) {
                                              ub = !0, g = 10, ca = !0;
                                            } else {
                                              if (mb && f(V, "ZuneWP")) {
                                                ub = !0, g = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var ja = !0;
                                                      g = 6.3;
                                                      var T = W = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        ja = !0, g = 6, T = W = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          ja = !0, g = 5, T = W = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            ja = !0, g = 5, T = W = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              ja = !0, g = 5 <= Q(S) ? 5 : 4, T = W = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                ja = !0, g = 3, T = W = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  ja = !0, g = 2, T = W = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    ja = !0, g = 1, T = W = !0;
                                                                  } else {
                                                                    if (z = k(d, "Kindle/")) {
                                                                      h = "Kindle", g = z, q = "AOSP", t = 2.2, M = q, P = t;
                                                                    } else {
                                                                      if (Yd) {
                                                                        ja = !0, g = S || Zd, T = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          ja = !0, g = S, T = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Pd) {
                                                                                h = "WindowsMobile", sb = !0;
                                                                              } else {
                                                                                if ("WinCE" === E) {
                                                                                  h = E, sb = !0;
                                                                                } else {
                                                                                  if ("Win16" === E || "Win32" === E || "Win64" === E) {
                                                                                    h = E, g = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === E.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === E ? "MacPPC" : E;
                                                                                      if (z = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                        g = z;
                                                                                      }
                                                                                      var ad = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (h = "BlackBerry", g = Aa, ca = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? h = "SunOS" : f(d, "FreeBSD") ? h = "FreeBSD" : f(d, "OpenBSD") ? h = "OpenBSD" : f(d, "NetBSD") ? h = "NetBSD" : ea && Ia ? (f(d, "Android 4.4;") ? X = {min:2.3} : 4 <= Q(S) ? X = S : X = {min:2.2}, g = X) : ea && Ba ? (S ? X = S : X = {min:1.6}, g = X, f(d, "Tablet") ? W = !0 : ca = !0) : S ? (g = 
                                                                                      S, ea = !0) : $b && Sd || Td || Ud ? (rb = !0, Va ? X = {min:4.4} : nb && !Vc || Qc || Rc ? X = {min:4} : (X = S = void 0 !== Jc.touchAction ? {min:5} : dc ? 4.4 : Mc ? ha.connection ? n.searchBoxJavaBridge_ || nb ? nc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Kc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Uc && (q = "Samsung", t = Uc)), g = X, ea = !0) : Xd ? (g = {min:5}, rb = ea = !0) : $b && (f(d, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (z = k(d, "Mint/")) ? (h = "Mint", g = z) : (z = k(d, "Fedora/")) ? (h = "Fedora", g = z) : h = f(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ja || ea && rb && Qd ? h = "FireOS" : ea && (h = h || "Android");
  ub && (h = "WindowsPhone");
  q || (T = T || ea, Ba ? (q = T || sb || ca || W ? "PrestoMobile" : "Presto", t = Kd) : mb ? ((X = Za(V, "Trident/") + 4) && X !== ba && (M = "IEHost", P = X), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), sb || ca || W || $c ? q = "TridentMobile" : ad && 5 <= ba ? (q = "Tasman", M = "MacIE", P = ba) : (q = "Trident", ad && (M = "MacIE", P = ba)), t = ba) : ac ? (q = ub ? "EdgeMobile" : "EdgeHTML", t = k(V, "Edge/")) : bc ? (q = "Goanna", 
  t = bc) : Ia ? (q = T ? "Fennec" : "Gecko", t = ia || Ld) : Va ? (q = "Samsung", t = Va) : (z = Zc || k(d, "NetFront/")) ? (q = "NetFront", t = z) : (z = k(d, "iCab")) ? (q = "iCab", t = z) : (z = rc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Nc && Aa) ? (q = "OperaMini", t = z, h || (f(d, "iPhone") ? oa = "iPhone" : f(d, "iPad") ? oa = "iPad" : f(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Yb ? (q = "UCWEB", t = Hd) : Od ? (q = "KHTML", t = Tb) : ea && Vc ? (q = "AOSP", t = S) : nb || 
  Qc || Rc ? (q = T ? "ChromiumMobile" : "Chromium", t = Ua) : ea && dc ? (q = "ChromeWebView", t = 5 > Q(S) ? S : Ua) : ea && (Aa || rb) ? (q = "AOSP", t = S) : Ua ? (q = T ? "ChromiumMobile" : "Chromium", t = Ua) : na && (q = "WebKit", t = na));
  h && (v.PLATFORM = h, g ? (v.PLATFORM_VERSION = sc(g), v[h] = g === g + "" ? Q(g) : g) : v[h] = !0);
  q && (v.ENGINE = q, t ? (v.ENGINE_VERSION = sc(t), v[q] = t === t + "" ? Q(t) : t) : v[q] = !0, M || (M = q, P = t));
  var Pa = sd, Ja = [], wd = !!F.getElementsByTagName, N = F.body, ta = N.style, B = v.Trident || v.TridentMobile, vb = v.Tasman, bd = v.EdgeHTML || v.EdgeMobile, cd = v.Presto || v.PrestoMobile, wb = v.Gecko, xb = v.Goanna, hb = v.WebKit, lb = v.SafariMobile || v.iOSWebView, ae = v.OperaMini && v.UCWEB, gc = v.Win32 || v.Win64, be = Q(ha.userAgent.split("Edg/")[1]), dd = Q(ha.appVersion.split("Trident/")[1]) + 4;
  B || vb || (new oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var ed = F.scripts, ce = (vb ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", fd = 0 === location.href.indexOf("https"), bb = [], Db, Eb = 0, hc, Ta, fa, de = qa(ta.transform) ? "transform" : qa(ta["-o-transform"]) ? "-o-transform" : qa(ta["-ms-transform"]) ? "-ms-transform" : qa(ta["-moz-transform"]) ? "-moz-transform" : qa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ka = ed[ed.length - 1].src.split("/");
  --Ka.length;
  var ee = Ka.join("/");
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
    var c = arguments, e = c.length - 2 - b, m = this.slice(a, a + b), C;
    if (0 < e) {
      var x = this.length - 1;
      for (C = a + b; x >= C; --x) {
        this[x + e] = this[x];
      }
    } else {
      if (0 > e) {
        x = a + b;
        for (C = this.length; x < C; ++x) {
          this[x + e] = this[x];
        }
        this.length += e;
      }
    }
    x = 2;
    for (C = c.length; x < C; ++x) {
      this[x - 2 + a] = c[x];
    }
    return m;
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
  var ic, jc = [];
  Ja.push(function() {
    La(function() {
      (ic = n.logger || F.all.logger) || alert("#logger not found!");
      for (ic ? u = function(a) {
        da(ic, "P", null, null, a);
      } : n.console && (u = console.log); jc.length;) {
        u(jc.shift());
      }
    });
  });
  u = function(a) {
    jc.push(a);
  };
  var hd = function(a) {
    ab.length || (Da = setInterval($a, uc));
    ab.push({f:a, g:++gd});
    return gd;
  };
  var ab = [], uc = 999, gd = 0, Da;
  if (5 > B || vb) {
    n._wdb_onlooptimer = $a, $a = "_wdb_onlooptimer()";
  }
  Ja.push(function() {
    6.1 > lb && id(ud);
    yb(tc);
  });
  var I = function(a, b, c) {
    la.length || (va = Ab(Ma, Na));
    la.push({f:a, p:b, g:++jd, t:new pa - 0 + (Na < c ? c : Na)});
    return jd;
  };
  var kd = function(a) {
    for (var b = la.length, c; c = la[--b];) {
      if (c.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Na = 64, jd = 0, va;
  if (5 > B || vb) {
    n._wdb_ontimer = Ma, Ma = "_wdb_ontimer()";
  }
  Ja.push(function() {
    6.1 > lb && id(vd);
    yb(vc);
  });
  var Ca = n.matchMedia, Oa = [], wc, Fa;
  bb.push(function() {
    Fa = da(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    La(function() {
      wc = !0;
      Oa.length && I(xc);
    });
  });
  var La = function(a) {
    bb.push(a);
  };
  var yb = function(a) {
    ld.push(a);
  };
  var ld = [], Cb = n.onload, md = n.onunload;
  onload = Bb;
  onunload = function(a) {
    var b;
    md && (b = md(a));
    wa(ld, a);
    onunload = Pa;
    return b;
  };
  var nd = function(a) {
    zc.push(a);
  };
  var zc = [];
  La(function() {
    yc();
    hd(yc);
  });
  var fe = function(a) {
    Ya.push(a);
  };
  var Ya = [], Qa, Gb, Fb;
  if (10 <= B || bd || gc && be) {
    Ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Qa = Gb = a.matches;
      Ea(Ya, cb());
    }), Ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Qa = Fb = a.matches;
      Ea(Ya, cb());
    }), Ca("(-ms-high-contrast:active)").addListener(function(a) {
      Qa = a.matches;
      Ea(Ya, cb());
    });
  } else {
    if (10 > B || gc && (44 <= wb || xb)) {
      var zb = function() {
        function a(m) {
          return "#ffffff" === m || "rgb(255,255,255)" === m;
        }
        var b = F.defaultView, c = Eb, e = b ? b.getComputedStyle(Fa, null) : Fa.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Qa = "#123456" !== b && "rgb(18,52,86)" !== b, Gb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Fb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== cb() && Ea(Ya, Eb), !0;
        }
      };
      La(function() {
        Fa.style.color = "#123456";
        Fa.style.backgroundColor = "#123456";
        60 > wb || xb ? zb() : zb() && hd(zb, 1000);
        zb = null;
      });
    }
  }
  var ge = [];
  Ca && Ca("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ea(ge, a.matches);
  });
  var kc = [];
  n.onbeforeprint ? (onbeforeprint = function() {
    wa(kc, !0);
  }, onafterprint = function() {
    wa(kc, !1);
  }, yb(function() {
    onbeforeprint = onafterprint = Pa;
  })) : Ca && Ca("print").addListener(function(a) {
    wa(kc, a.matches);
  });
  var id = function(a) {
    od.push(a);
  };
  var od = [], lc = n.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    Bb || wa(od);
    return b;
  };
  yb(function() {
    onscroll = lc = Pa;
  });
  var he = db("html")[0];
  var Ib = db("head")[0];
  var eb;
  var Jb = void 0;
  var Ec = {};
  La(function() {
    if (Db) {
      if (!qa(fa) && (fa = 1.8 <= wb || xb || 8 <= B || bd || 530 <= hb || 3.2 <= lb, !fa)) {
        var a = da(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        fa = 6 <= a.offsetWidth;
        xa(a);
      }
    } else {
      fa = void 0;
    }
  });
  var gb;
  9 > B && La(function(a) {
    a = da(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var zd = function(a) {
    function b() {
      m || (c.complete ? (m = !0, c.width || I(a, !1)) : e = I(b));
    }
    if (pd) {
      var c = new Image, e, m;
      c.onerror = function() {
        (!B || 11 === B || 11 === dd) && c.width || m || (m = !0, e && kd(e), e = I(a, !1));
      };
      c.onload = function() {
        m = !0;
        e && kd(e);
        cd && !c.complete ? e = I(a, !1) : (Ta = !0, I(a, !0));
      };
      c.src = pd;
      8 > cd && c.complete ? (Ta = !0, I(a, !0)) : m || (e = I(b));
    } else {
      u("[imageTest] TEST_IMAGE_URL is undefined!"), I(a, !1);
    }
  };
  var pd = fd ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var yd = Cc;
  var Fc = "bad_" + (new pa - 0) + "_";
  for (11 === dd && 5.5 > B && da(Ib, "link", {href:ee + "/" + ce, rel:"stylesheet", type:"text/css"}); Ja.length;) {
    Ja.shift()();
  }
  Ja = null;
  var Y = String.fromCharCode, H = fd ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > B || gc && (44 <= wb || xb)) && fe(function(a) {
    fb("jsHcm");
    fb("jsHcmWob");
    fb("jsHcmBow");
    if (a) {
      switch((de || 9 === B || 5.5 <= B && 9 > B && hc) && ra(N, "jsCanRotate"), a) {
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
      fb("jsCanRotate");
    }
  });
  var Mb = [], Lb, Nb, qd;
  nd(function(a) {
    function b(p) {
      var y = p.getAttribute("pbtip") || "", l = y.charAt(0), K = "_" === l;
      y = K ? y.charAt(2) : l;
      l = K ? "Btm" : "";
      var L = p.getAttribute("title") || "";
      ra(p, "pbTipPos" + y.toUpperCase());
      da(p, "div", {className:"pbTip" + l}, {width:L.length + m + "em"}, L);
      da(p, "div", {className:"pbTail" + l});
      x && K && (p.focus(), p.blur());
    }
    function c(p) {
      if (fa && R) {
        e(p);
      } else {
        var y = p.getAttribute("pbGhst") || "", l = p.className, K = l.split("pbCsr")[1] || "";
        l = l.split("pbAlp")[1] || "";
        if ("CS" === y) {
          var L = "_";
        } else {
          L = y, 3 === L.length && (L = L.substr(0, 2)), L = za[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        l = l.split(" ")[0];
        l = 10 - Q(l);
        y ? (y = {className:["pbChr" + y + " pbAlp" + l + " pbCsr" + K]}, eb = 1, G = da(p, "b", y, 0, L), e(p), e(G)) : e(p);
      }
    }
    function e(p) {
      U || C || Ga(p, "pbChrCS") && Mb.push(p);
    }
    if (a && !qd) {
      qd = !0;
      var m = 6 > B ? 1 : 0;
      a = db("SAMP");
      var C = 9 > B, x = 5 <= B && 6 > B, A, G, J, w;
      hc && ra(N, "pbLCD-AX");
      if (a.length) {
        var U = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], R = !U && !C && !0, O = !fa || R || void 0;
        for (J = -1; A = a[++J];) {
          if (Ga(A.parentElement || A.parentNode, "pbLCD")) {
            var ya = A.children;
            for (A = ya.length; A;) {
              var Z = ya[--A];
              switch(Z.tagName.toUpperCase()) {
                case "A":
                  if (O) {
                    for (fa || b(Z), w = Z.children.length; w;) {
                      c(Z.children[--w]);
                    }
                  }
                  ae ? Z.setAttribute("href", "javascript:void(0)") : Z.onclick = xd;
                  break;
                case "B":
                  O && c(Z);
              }
            }
          }
        }
        Mb.length ? (setInterval(Gc, 500), fa ? Ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ha([".pbChrCS", "background-position:0 -51px"])) : Gc = null;
        R && (fa ? Ha([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ha([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > hb && (he.onclick = function(a) {
    if (Nb) {
      return Nb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new oc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Rb = za[7], Ic = za[30], Bd = za[113], jb = Y(8337) + Y(8331), Sb = Y(160), Fd = Y(8194), Dd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Ed = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Cd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ic + za[31]).split(""), ma = 
  [], Sa, Qb;
  nd(function(a) {
    if (a && !Qb) {
      var b = F.all || db("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ga(c, "pbList") ? kb(c) : Ga(c, "pbFont") && kb(c, !0);
      }
      ma.length && (u("[pbList] " + ma.length / 2 + " elements found. WebFont test start."), ib());
      Qb = !0;
    }
  });
  rd.prettify = kb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

