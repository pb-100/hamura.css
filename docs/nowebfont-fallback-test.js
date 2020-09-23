PB100 = {};
(function(nd, y, p, od, G, ha, mc, Q, nc, oc, ee, zb, pd, pa, fe) {
  function Ya(a, b) {
    var d = Q(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function pc(a) {
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
  function qc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var l = Q(a[d]), q = Q(b[d]);
      if (l !== q) {
        return l > q ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function rc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], l; b < d; ++b) {
      0 > qc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function sc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function n() {
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
    Da && (tc(), Da = setInterval(Za, uc));
  }
  function tc() {
    Da && (Da = clearInterval(Da));
  }
  function La() {
    for (var a, b = 0, d = new pa - 0; b < la.length;) {
      d < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    va = la.length ? zb(La, Ma) : 0;
  }
  function rd() {
    va && (vc(), va = zb(La, Ma));
  }
  function vc() {
    va && (va = pd(va));
  }
  function wa(a, b) {
    for (var d = 0; d < a.length; ++d) {
      a[d](b);
    }
  }
  function Ea(a, b) {
    wc && !Na.length && I(xc);
    Na.push(a, b);
  }
  function xc() {
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
  function yc() {
    var a = 9 === Fa.offsetWidth;
    Cb !== a && Ea(zc, Cb = a);
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
    function q(H, J) {
      for (var z in J) {
        switch(z) {
          case "class":
          case "className":
            ra(H, J[z]);
            break;
          default:
            H.setAttribute(z, J[z]);
        }
      }
    }
    function w(H, J) {
      var z = H.style, U;
      for (U in J) {
        z[U] = J[U];
      }
    }
    if ("style" === b) {
      var x = !0;
      b = Gb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Gb(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    d && q(b, d);
    e && w(b, e);
    l && !x && b.appendChild(G.createTextNode(l));
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
  function Ac(a) {
    a = da(Hb, "style", {type:"text/css", media:"all"}, 0, a);
    Ib = a.sheet || a.styleSheet;
  }
  function Ha(a) {
    for (var b = Ib, d, e, l = "", q; a.length;) {
      d = a.shift(), e = a.shift(), q = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(q, b.cssRules.length) : l += q;
    }
    l && Ac(l);
  }
  function Bc(a) {
    function b(l) {
      e = Jb(e);
      fb = l;
      d.onload = d.onerror = Oa;
      I(a, l);
    }
    if (qa(fb)) {
      n("[dataUriTest] already done : " + fb), I(a, fb);
    } else {
      if (8 > D) {
        n("[dataUriTest] trident < 8 : false"), I(a, !1);
      } else {
        n("[dataUriTest] start!");
        var d = new Image, e = I(function() {
          e && b(!1);
        });
        d.onerror = function() {
          n("[dataUriTest] no DATA URI!");
          b(!1);
        };
        d.onload = function() {
          n("[dataUriTest] DATA URI:" + (1 === d.width * d.height));
          b(1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Cc(a, b, d, e, l, q, w) {
    function x() {
      var u = '1.6em "' + b + '"';
      n("[webFontTest] testByNativeFontLoaderAPI start.");
      G.fonts.load(u).then(function(E) {
        n("[webFontTest] fonts.check() : " + G.fonts.check(u, "i") + ", fonts.length : " + E.length);
        U(b) ? I(a, sa) : (n("[webFontTest] mesureWebFont() : false"), J(!0));
      }, function(E) {
        n("[webFontTest] fonts.load() rejected! " + E);
        Bc(R);
      });
    }
    function H(u) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (r = new pa - 0, !1) : u < new pa - r;
    }
    function J(u) {
      u && (n("[webFontTest] testWebFont start."), r = new pa - 0);
      U(b) ? (n("[webFontTest] testWebFont mesurement success : " + sa), a(sa)) : H(Z) ? (n("[webFontTest] testWebFont timeout!"), B ? a(0) : 9 > D ? I(a, 0) : Bc(R)) : I(J);
    }
    function z() {
      var u = -1, E;
      z = null;
      L = ["sans-serif", "serif"];
      m = da(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Qa = {}; E = L[++u];) {
        m.style.fontFamily = E, Qa[E] = m.offsetWidth;
      }
    }
    function U(u) {
      var E = 0, aa = -1, Kb, Dc = 0;
      z && z();
      for (N.appendChild(m); Kb = L[++aa];) {
        if (m.style.fontFamily = '"' + u + '",' + Kb, m.offsetWidth !== Qa[Kb]) {
          E = 1;
          break;
        }
      }
      E && l && (m.innerHTML = l, u = m.offsetWidth, m.innerHTML = q, Dc = u === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli");
      xa(m);
      return sa = E + Dc;
    }
    function R(u) {
      n("[webFontTest] testDataUriComplete : " + u);
      (B = u) ? O(!0) : a(0);
    }
    function O(u) {
      u && (r = new pa - 0);
      for (E in d) {
        if (U(E)) {
          n("[webFontTest] success! " + E);
          K = da(N, "div", {"aria-hidden":"true", className:e, id:e});
          u = d[E];
          var E = Ib, aa = Ec.all || 0;
          E ? E.addImport ? E.addImport(u, aa) : E.insertRule && E.insertRule('@import "' + u + '"', aa) : Ac('@import "' + u + '"');
          Ec.all = ++aa;
          I(ya, !0);
        } else {
          H(100) ? (n("[webFontTest] timeout! " + E), delete d[E], I(O, !0)) : I(O);
        }
        return;
      }
      a(0);
    }
    function ya(u) {
      u && (n("[webFontTest] testImportedCssReady start!"), n("[webFontTest] targetWebFontName : " + b), r = new pa - 0);
      1 < K.offsetWidth ? (n("[webFontTest] testImportedCssReady ended."), xa(K), Z = 100, I(J, !0)) : H(Z) ? (n("[webFontTest] testImportedCssReady timeout!"), xa(K), a(0)) : I(ya);
    }
    var Z = w || 5E3, r, B, m, K, L, Qa, sa;
    b = td + b;
    n("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var u;
      if (y.MeeGo || 2.2 > y.AOSP || y.WebOS || y.UCWEB || 10 > y.TridentMobile || y.NDS || y.NDSi || y.N3DS) {
        return !1;
      }
      if (6 > D) {
        return !0;
      }
      var E = da(Hb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = E.sheet || E.styleSheet) ? (u = 10 <= D ? aa.cssRules : aa.rules || aa.cssRules) && (u = u[0]) ? u.cssText : aa.cssText || "" : "";
      u = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      xa(E);
      return u;
    })() ? (n("[webFontTest] maybeCanWebFont() : true"), !G.fonts || 603 > gb ? (n("[webFontTest] No native font loader."), J(!0)) : (n("[webFontTest] Use Native font loader."), x())) : (n("[webFontTest] maybeCanWebFont() : false"), I(a, 0));
  }
  function Fc() {
    Lb = !Lb;
    for (var a = -1, b; b = Mb[++a];) {
      b.style.visibility = Lb ? "" : "hidden";
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
    vd(Ob, "PB-100", {"PB-100_canTTF":A + "pbFont/ttf.css", "PB-100_canWOFF":A + "pbFont/woff.css", "PB-100_canEOT":A + "pbFont/eot.css", "PB-100_canSVG":A + "pbFont/svg.css"}, "pbFont-testCssReady", ib, "i", 5E3);
  }
  function Ob(a) {
    Ra = a;
    n("[pbList] WebFont test result : " + !!a);
    Ra ? Pb() : Sa ? Gc(!0) : qa(Sa) ? Pb() : (n("[pbList] Need imageTest " + A + "pbLCD/bg.png"), wd(Gc, A + "pbLCD/bg.png"));
  }
  function Gc(a) {
    a ? (n("[pbList] Fallback start!"), ra(N, "pbList-noWebFont"), fa ? Ha([".pbList font:after", "content:url(" + A + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ha([".pbList font", "background-image:url(" + A + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"])) : n("[pbList] image disabled!");
    Pb();
  }
  function Pb() {
    for (Ob = Cc = null; ma.length;) {
      jb(ma.shift(), ma.shift());
    }
    n("[pbList] complete.");
  }
  function jb(a, b) {
    function d(q) {
      q = q.childNodes;
      for (var w = -1, x; x = q[++w];) {
        switch(x.nodeType) {
          case 1:
            d(x);
            break;
          case 3:
            x.data && x.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(x);
        }
      }
    }
    var e = [];
    if (Ob) {
      -1 === ma.indexOf(a) && (ma.push(a, b), Qb && hb && hb());
    } else {
      var l = ma.indexOf(a);
      0 <= l && ma.splice(l, 2);
      for (d(a); a = e.shift();) {
        l = a.data, 2 !== Ra && (l = l.split(ib).join(Hc)), b ? a.data = l : xd(l.split("\r").join("").split("&yen;").join(yd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Rb).split("&amp;").join("&"), a);
      }
    }
  }
  function xd(a, b) {
    function d(B, m) {
      for (var K = ""; m;) {
        m & 1 && (K += B), m >>= 1, B += B;
      }
      return K;
    }
    function e(B, m, K) {
      for (var L, Qa = -1, sa, u; L = m[++Qa];) {
        for (; 0 <= (sa = B.indexOf(L));) {
          u = L.length, B = B.substr(0, sa) + d(K, u) + B.substr(sa + u);
        }
      }
      return B;
    }
    function l(B) {
      var m = Q(B), K = "" + m;
      return 0 < m && m === m | 0 && (m = B.indexOf(K) + K.length, m <= B.length) ? m : 0;
    }
    var q = " area line str cmd fnc syb".split(" "), w = [], x = "", H = -1, J, z;
    if (function(B) {
      var m = B.indexOf("P");
      if (-1 === m) {
        return !1;
      }
      m = Q(B.charAt(m + 1));
      return 0 <= m && 9 >= m;
    }(a)) {
      x = d("+", a.length);
    } else {
      for (0 <= (H = l(a)) && (x = d("|", H), --H); z = a.charAt(++H);) {
        z === Rb || J ? (x += "~", z === Rb && (J = !J)) : x += z;
      }
      x = e(x, zd, "^");
      x = e(x, Ad, "{");
      x = e(x, Bd, "}");
    }
    H = 0;
    for (J = a.length; H < J; ++H) {
      z = a.charAt(H);
      var U = z === Sb, R = " " === z;
      z = U ? " " : z;
      var O = x.charAt(H), ya = Z, Z = "|" === O;
      O = q["+|~{}^".indexOf(O) + 1];
      if ("\n" !== z) {
        if (Ra || !Sa) {
          8 > D && R && (z = H === J - 1 ? Sb : Cd), 2 === Ra && a.substr(H, 2) === ib && (z = ib, ++H), R = R && "str" === O ? ' class="pbList-strsp"' : U ? "" : !R && O ? ' class="pbList-' + O + '"' : "";
        } else {
          var r = za.indexOf(z);
          r = -1 === r ? "" : za.indexOf(z).toString(16).toUpperCase();
          r = (r = 1 === r.length ? "0" + r : r) ? "pbChr" + r : "";
          R = R && "str" === O ? ' class="pbList-strsp"' : R || !r ? "" : O ? ' class="' + (r ? r + " " : "") + "pbList-" + O + '"' : ' class="' + r + '"';
        }
        ya && U && (gb || kb) && (z = Sb);
        w.push("<font" + R + ">" + z + "</font>");
      } else {
        w.push(z);
      }
    }
    w = w.join("");
    if (1 === b.nodeType) {
      b.innerHTML = w;
    } else {
      for (q = Gb("font", w); w = q.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(w, b);
      }
      xa(b);
    }
  }
  var t, v, c = ha.userAgent, V = ha.appVersion, Tb = Q(V) | 0, F = ha.platform, Ub = G.documentElement, Ic = Ub && Ub.style, Vb = G.documentMode, Wb = mc.width, Xb = mc.height, Jc = p.HTMLAudioElement, Kc = p.performance, Lc = p.Int8Array, Dd = void 0 !== p.ontouchstart, Aa = k(V, "Version/") || k(c, "Version/"), Ia = void 0 !== Ic.MozAppearance, Mc = p.operamini, Yb = f(c, "UCWEB"), Ed = Yb && k(c, " U2/"), Fd = Yb && k(c, "; wds "), Zb = k(c.split("_").join("."), "; iPh OS "), Gd = k(c, "; Adr "), 
  Nc = f(V, "YJApp-ANDROID"), ea = f(F, "Android") || Ia && f(V, "Android") || Nc, S = k(F, "Android ") || k(V, "Android ") || k(c, "Android ") || Gd, $b = f(F, "Linux"), Oc = "MacIntel" === F && void 0 !== ha.standalone, Ba = !Mc && p.opera, Hd = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : rc(k(c, "Opera "), Aa, "" + Tb)), Pc = p.opr, lb = !Ba && (G.all || Vb), ba = lb && (Vb ? Vb : p.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  p.attachEvent ? 5 : 4), ac = !lb && Ub.msContentZoomFactor, mb = !ac && p.chrome, bc = Ia && k(c, "Goanna/"), ia = !bc && Ia && k(c, "rv:"), Id = k(c, "Firefox/"), Jd = k(c, "Opera/"), Kd = p.FNRBrowser, na = Ya(c, "AppleWebKit/"), Ta = k(c, "Chrome/"), Qc = k(c, "OPR/"), Ld = k(V, "KHTML/"), Md = k(c.toLowerCase(), "iris"), Nd = k(c, "Silk/"), Ua = Ya(c, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Rc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      nb, cc = Rc.length; nb = Rc[--cc];) {
        if (f(c, nb)) {
          Va = 2 > Q(Aa) ? Aa : .9;
          break a;
        }
      }
      var Sc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (cc = Sc.length; nb = Sc[--cc];) {
        if (f(c, nb)) {
          Va = Aa;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Tc = Va, Uc = mb && 534.3 >= na, Vc = pc(F), Od = Vc && !f(c, F) && pc(c), Pd = Dd && (na || Ia) && Od || !S && Nc, Qd = !!p.ReactNativeWebView, ob;
  if (ob = Vc) {
    a: {
      var Wc = void 0;
      for (Wc in p) {
        if (0 === Wc.indexOf("SlexAPI_")) {
          ob = !0;
          break a;
        }
      }
      ob = void 0;
    }
  }
  var Rd = ob, Xc = p.puffinDevice, pb = Xc && Xc.clientInfo, Wa = pb && "iOS" === pb.os && pb.osVersion, Sd = Wa && pb.model, dc = !ba && G.registerElement, Td = !ba && G.execCommand, Ud = $b && dc && "11.0.696.34" === Ta, Vd = p._firefoxTV_playbackStateObserverJava, Wd = Ya(c, "diordnA "), qb, C;
  if ("Nitro" === F) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      h = "NDSi";
      var g = Jd;
    } else {
      if ("New Nintendo 3DS" === F || f(c, "iPhone OS 6_0") && 320 === Wb && 240 === Xb) {
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
                if (C = k(c, "PlayStation Vita ")) {
                  h = "PSVita", g = C, M = h, P = C;
                } else {
                  if (C = k(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = C;
                    var Yc = 3.3;
                    M = h;
                    P = C;
                  } else {
                    if (C = k(c, "PLAYSTATION 3; ") || k(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = C, M = h, P = C, 0 > qc("4.10", C) && (t = "Sony", v = C);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Tb && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Yc = 3.4;
                            M = h;
                            P = 2;
                            var rb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Zb || Wa || Oc) {
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
                                    var Zc = !0;
                                }
                              } else {
                                Zb ? g = Zb : g = k(V.split("_").join("."), "OS ");
                                if (!g || Kd) {
                                  g = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : nc.isNaN ? 9.2 : p.SharedWorker ? Kc && Kc.now ? 8 : 8.4 : Td ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : Lc ? 4.3 : Jc ? 4.1 : 3.2;
                                }
                                var X = Wb === 1.5 * Xb || 1.5 * Wb === Xb;
                                0 === F.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === F.indexOf("iPad") || Oc ? (oa = "iPad", W = !0) : 0 === F.indexOf("iPod") && (oa = "iPod", Zc = !0);
                              }
                              var ec;
                              if (ec = !Wa) {
                                var fc;
                                if (!(fc = ha.standalone)) {
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
                                  fc = sb;
                                }
                                ec = fc || 11 <= g && 13 > g && ha.mediaDevices;
                              }
                              ec ? (t = "SafariMobile", M = "Safari", P = g) : t = "iOSWebView";
                              h = "iOS";
                              v = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", t = "AOSP", v = 2.2, M = t, P = v, ea = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", t = "AOSP", v = 2.2, M = t, P = v;
                                } else {
                                  if (C = k(c, "CrOS x86_64 ") || k(c, "CrOS aarch64 ") || k(c, "CrOS i686 ") || k(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = C;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, f(c, "Mobile") ? ca = !0 : f(c, "Tablet") && (W = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        h = "webOS", g = k(c, "webOS/") || k(c, "WEBOS") || k(c, "hpwOS/"), M = h, P = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (C = k(c, "Tizen ")) {
                                          h = "Tizen", g = C, M = "Samsung", P = Ua, t = M, v = P, ca = !0;
                                        } else {
                                          if (C = k(c, "Windows Phone ") || k(V, "Windows Phone OS ") || Fd) {
                                            var tb = !0;
                                            g = C;
                                            ca = !0;
                                          } else {
                                            if (ac && "ARM" === F) {
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
                                                                    if (C = k(c, "Kindle/")) {
                                                                      h = "Kindle", g = C, t = "AOSP", v = 2.2, M = t, P = v;
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
                                                                                      if (C = k(c.split("_").join("."), "Mac OS X ")) {
                                                                                        g = C;
                                                                                      }
                                                                                      var $c = !0;
                                                                                    } else {
                                                                                      f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = Aa, ca = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ea && Ia ? (f(c, "Android 4.4;") ? X = {min:2.3} : 4 <= Q(S) ? X = S : X = {min:2.2}, g = X) : ea && Ba ? (S ? X = S : X = {min:1.6}, g = X, f(c, "Tablet") ? W = !0 : ca = !0) : S ? (g = 
                                                                                      S, ea = !0) : $b && Pd || Qd || Rd ? (qb = !0, Ua ? X = {min:4.4} : mb && !Uc || Pc || Qc ? X = {min:4} : (X = S = void 0 !== Ic.touchAction ? {min:5} : dc ? 4.4 : Lc ? ha.connection ? p.searchBoxJavaBridge_ || mb ? nc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Jc ? 2.3 : 2.2 : 530 <= na ? 2 : 1.5, Tc && (t = "Samsung", v = Tc)), g = X, ea = !0) : Ud ? (g = {min:5}, qb = ea = !0) : $b && (f(c, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (C = k(c, "Mint/")) ? (h = "Mint", g = C) : (C = k(c, "Fedora/")) ? (h = "Fedora", g = C) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  t || (T = T || ea, Ba ? (t = T || rb || ca || W ? "PrestoMobile" : "Presto", v = Hd) : lb ? ((X = Ya(V, "Trident/") + 4) && X !== ba && (M = "IEHost", P = X), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), rb || ca || W || Zc ? t = "TridentMobile" : $c && 5 <= ba ? (t = "Tasman", M = "MacIE", P = ba) : (t = "Trident", $c && (M = "MacIE", P = ba)), v = ba) : ac ? (t = tb ? "EdgeMobile" : "EdgeHTML", v = k(V, "Edge/")) : bc ? (t = "Goanna", 
  v = bc) : Ia ? (t = T ? "Fennec" : "Gecko", v = ia || Id) : Ua ? (t = "Samsung", v = Ua) : (C = Yc || k(c, "NetFront/")) ? (t = "NetFront", v = C) : (C = k(c, "iCab")) ? (t = "iCab", v = C) : (C = rc(k(c, "Opera Mini/"), k(c, "Opera Mobi/")) || Mc && Aa) ? (t = "OperaMini", v = C, h || (f(c, "iPhone") ? oa = "iPhone" : f(c, "iPad") ? oa = "iPad" : f(c, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Yb ? (t = "UCWEB", v = Ed) : Ld ? (t = "KHTML", v = Tb) : ea && Uc ? (t = "AOSP", v = S) : mb || 
  Pc || Qc ? (t = T ? "ChromiumMobile" : "Chromium", v = Ta) : ea && dc ? (t = "ChromeWebView", v = 5 > Q(S) ? S : Ta) : ea && (Aa || qb) ? (t = "AOSP", v = S) : Ta ? (t = T ? "ChromiumMobile" : "Chromium", v = Ta) : na && (t = "WebKit", v = na));
  h && (y.PLATFORM = h, g ? (y.PLATFORM_VERSION = sc(g), y[h] = g === g + "" ? Q(g) : g) : y[h] = !0);
  t && (y.ENGINE = t, v ? (y.ENGINE_VERSION = sc(v), y[t] = v === v + "" ? Q(v) : v) : y[t] = !0, M || (M = t, P = v));
  var Oa = od, Ja = [], sd = !!G.getElementsByTagName, N = G.body, ta = N.style, D = y.Trident || y.TridentMobile, ub = y.Tasman, ad = y.EdgeHTML || y.EdgeMobile, bd = y.Presto || y.PrestoMobile, vb = y.Gecko, wb = y.Goanna, gb = y.WebKit, kb = y.SafariMobile || y.iOSWebView, Yd = y.OperaMini && y.UCWEB, gc = y.Win32 || y.Win64, Zd = Q(ha.userAgent.split("Edg/")[1]), cd = Q(ha.appVersion.split("Trident/")[1]) + 4;
  D || ub || (new oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var dd = G.scripts, $d = (ub ? "ie5mac" : 5.5 > D ? "ie5win" : 6 > D ? "ie55" : 10 > D ? "ie" + (D | 0) : "modern") + ".css", ab = [], Cb, Db = 0, hc, Sa, fa, ae = qa(ta.transform) ? "transform" : qa(ta["-o-transform"]) ? "-o-transform" : qa(ta["-ms-transform"]) ? "-ms-transform" : qa(ta["-moz-transform"]) ? "-moz-transform" : qa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var A = dd[dd.length - 1].src.split("/");
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
    var d = arguments, e = d.length - 2 - b, l = this.slice(a, a + b), q;
    if (0 < e) {
      var w = this.length - 1;
      for (q = a + b; w >= q; --w) {
        this[w + e] = this[w];
      }
    } else {
      if (0 > e) {
        w = a + b;
        for (q = this.length; w < q; ++w) {
          this[w + e] = this[w];
        }
        this.length += e;
      }
    }
    w = 2;
    for (q = d.length; w < q; ++w) {
      this[w - 2 + a] = d[w];
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
  var ic, jc = [];
  Ja.push(function() {
    Ka(function() {
      (ic = p.logger || G.all.logger) || alert("#logger not found!");
      for (ic ? n = function(a) {
        da(ic, "P", null, null, a);
      } : p.console && (n = console.log); jc.length;) {
        n(jc.shift());
      }
    });
  });
  n = function(a) {
    jc.push(a);
  };
  n("[g_assetUrl] " + A);
  var fd = function(a) {
    $a.length || (Da = setInterval(Za, uc));
    $a.push({f:a, g:++ed});
    return ed;
  };
  var $a = [], uc = 999, ed = 0, Da;
  if (5 > D || ub) {
    p._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Ja.push(function() {
    6.1 > kb && gd(qd);
    xb(tc);
  });
  var I = function(a, b, d) {
    la.length || (va = zb(La, Ma));
    la.push({f:a, p:b, g:++hd, t:new pa - 0 + (Ma < d ? d : Ma)});
    return hd;
  };
  var Jb = function(a) {
    for (var b = la.length, d; d = la[--b];) {
      if (d.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Ma = 64, hd = 0, va;
  if (5 > D || ub) {
    p._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  Ja.push(function() {
    6.1 > kb && gd(rd);
    xb(vc);
  });
  var Ca = p.matchMedia, Na = [], wc, Fa;
  ab.push(function() {
    Fa = da(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    Ka(function() {
      wc = !0;
      Na.length && I(xc);
    });
  });
  var Ka = function(a) {
    ab.push(a);
  };
  var xb = function(a) {
    id.push(a);
  };
  var id = [], Bb = p.onload, jd = p.onunload;
  onload = Ab;
  onunload = function(a) {
    var b;
    jd && (b = jd(a));
    wa(id, a);
    onunload = Oa;
    return b;
  };
  var kd = function(a) {
    zc.push(a);
  };
  var zc = [];
  Ka(function() {
    yc();
    fd(yc);
  });
  var be = function(a) {
    Xa.push(a);
  };
  var Xa = [], Pa, Fb, Eb;
  if (10 <= D || ad || gc && Zd) {
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
    if (10 > D || gc && (44 <= vb || wb)) {
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
        60 > vb || wb ? yb() : yb() && fd(yb, 1E3);
        yb = null;
      });
    }
  }
  var ce = [];
  Ca && Ca("only screen and (prefers-color-scheme:dark)").addListener(function(a) {
    Ea(ce, a.matches);
  });
  var kc = [];
  p.onbeforeprint ? (onbeforeprint = function() {
    wa(kc, !0);
  }, onafterprint = function() {
    wa(kc, !1);
  }, xb(function() {
    onbeforeprint = onafterprint = Oa;
  })) : Ca && Ca("print").addListener(function(a) {
    wa(kc, a.matches);
  });
  var gd = function(a) {
    ld.push(a);
  };
  var ld = [], lc = p.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    Ab || wa(ld);
    return b;
  };
  xb(function() {
    onscroll = lc = Oa;
  });
  var de = cb("html")[0];
  var Hb = cb("head")[0];
  var db;
  var Ib = void 0;
  var Ec = {};
  Ka(function() {
    if (Cb) {
      if (!qa(fa) && (fa = 1.8 <= vb || wb || 8 <= D || ad || 530 <= gb || 3.2 <= kb, !fa)) {
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
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var wd = function(a, b) {
    function d() {
      q || (e.complete ? (n("[imageTest] timer -> img.complete. img.width=" + e.width), q = !0, I(a, !!e.width)) : --w ? l = I(d) : (n("[imageTest] timeout."), q = !0, l = I(a, !1)));
    }
    var e = new Image, l, q, w = 99;
    n("[imageTest] start.");
    e.onerror = function() {
      var x = !D || 11 === D || 11 === cd;
      n("[imageTest] error. errorFix=" + x);
      x && e.width || q || (n("[imageTest] error!"), q = !0, l && Jb(l), l = I(a, !1));
    };
    e.onload = function() {
      q = !0;
      l && Jb(l);
      n("[imageTest] onload.");
      bd && !e.complete ? (n("[imageTest] Presto not img.complete!"), l = I(a, !1)) : (n("[imageTest] success!"), Sa = !0, I(a, !0));
    };
    e.src = b;
    8 > bd && e.complete ? (n("[imageTest] Presto<8 success!"), Sa = !0, I(a, !0)) : q || (l = I(d));
  };
  var vd = Cc;
  var td = "bad_" + (new pa - 0) + "_";
  for (11 === cd && 5.5 > D && da(Hb, "link", {href:A + $d, rel:"stylesheet", type:"text/css"}); Ja.length;) {
    Ja.shift()();
  }
  Ja = null;
  var Y = String.fromCharCode, za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > D || gc && (44 <= vb || wb)) && be(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((ae || 9 === D || 5.5 <= D && 9 > D && hc) && ra(N, "jsCanRotate"), a) {
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
  var Mb = [], Lb, Nb, md;
  kd(function(a) {
    function b(r) {
      var B = r.getAttribute("pbtip") || "", m = B.charAt(0), K = "_" === m;
      B = K ? B.charAt(2) : m;
      m = K ? "Btm" : "";
      var L = r.getAttribute("title") || "";
      ra(r, "pbTipPos" + B.toUpperCase());
      da(r, "div", {className:"pbTip" + m}, {width:L.length + l + "em"}, L);
      da(r, "div", {className:"pbTail" + m});
      w && K && (r.focus(), r.blur());
    }
    function d(r) {
      if (fa && R) {
        e(r);
      } else {
        var B = r.getAttribute("pbGhst") || "", m = r.className, K = m.split("pbCsr")[1] || "";
        m = m.split("pbAlp")[1] || "";
        if ("CS" === B) {
          var L = "_";
        } else {
          L = B, 3 === L.length && (L = L.substr(0, 2)), L = za[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        m = m.split(" ")[0];
        m = 10 - Q(m);
        B ? (B = {className:["pbChr" + B + " pbAlp" + m + " pbCsr" + K]}, db = 1, H = da(r, "b", B, 0, L), e(r), e(H)) : e(r);
      }
    }
    function e(r) {
      U || q || Ga(r, "pbChrCS") && Mb.push(r);
    }
    if (a && !md) {
      md = !0;
      var l = 6 > D ? 1 : 0;
      a = cb("SAMP");
      var q = 9 > D, w = 5 <= D && 6 > D, x, H, J, z;
      hc && ra(N, "pbLCD-AX");
      if (a.length) {
        var U = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], R = !U && !q && !0, O = !fa || R || void 0;
        for (J = -1; x = a[++J];) {
          if (Ga(x.parentElement || x.parentNode, "pbLCD")) {
            var ya = x.children;
            for (x = ya.length; x;) {
              var Z = ya[--x];
              switch(Z.tagName.toUpperCase()) {
                case "A":
                  if (O) {
                    for (fa || b(Z), z = Z.children.length; z;) {
                      d(Z.children[--z]);
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
        Mb.length ? (setInterval(Fc, 500), fa ? Ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ha([".pbChrCS", "background-position:0 -51px"])) : Fc = null;
        R && (fa ? Ha([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + A + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        A + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + A + "pbLCD/x3_a90.png)"]) : Ha([".pbAlp1", "background-image:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        A + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + A + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + A + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > gb && (de.onclick = function(a) {
    if (Nb) {
      return Nb = !1, a.preventDefault(), !1;
    }
  });
  6 === D && (new oc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Rb = za[7], Hc = za[30], yd = za[113], ib = Y(8337) + Y(8331), Sb = Y(160), Cd = Y(8194), Ad = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Bd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), zd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Hc + za[31]).split(""), ma = 
  [], Ra, Qb;
  kd(function(a) {
    if (a && !Qb) {
      var b = G.all || cb("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ga(d, "pbList") ? jb(d) : Ga(d, "pbFont") && jb(d, !0);
      }
      ma.length && (n("[pbList] " + ma.length / 2 + " elements found. WebFont test start."), hb());
      Qb = !0;
    }
  });
  nd.prettify = jb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

