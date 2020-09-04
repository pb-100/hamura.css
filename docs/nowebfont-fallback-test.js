PB100 = {};
(function(qd, w, p, rd, F, ha, nc, Q, oc, pc, ie, zb, sd, pa, je) {
  function Ya(a, b) {
    var c = Q(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function qc(a) {
    return f(a, "Linux armv") || f(a, "Linux aarch") || f(a, "Linux i686") || f(a, "Linux x86_64");
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
  function rc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var l = Q(a[c]), D = Q(b[c]);
      if (l !== D) {
        return l > D ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function sc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], l; b < c; ++b) {
      0 > rc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function tc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function u() {
  }
  function qa(a) {
    return void 0 !== a;
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function td() {
    Ca && (uc(), Ca = setInterval(Za, vc));
  }
  function uc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ma() {
    for (var a, b = 0, c = new pa - 0; b < la.length;) {
      c < la[0].t ? ++b : (a = la.splice(b, 1)[0], a.f(a.p));
    }
    va = la.length ? zb(Ma, Na) : 0;
  }
  function ud() {
    va && (wc(), va = zb(Ma, Na));
  }
  function wc() {
    va && (va = sd(va));
  }
  function wa(a, b) {
    for (var c = 0; c < a.length; ++c) {
      a[c](b);
    }
  }
  function Da(a, b) {
    xc && !Oa.length && I(yc);
    Oa.push(a, b);
  }
  function yc() {
    var a = Oa, b;
    for (Oa = []; b = a.shift();) {
      wa(b, a.shift());
    }
  }
  function Ab(a) {
    var b;
    Bb && (b = Bb(a));
    wa(ab, a);
    onload = Pa;
    ab = Ab = Bb = onload = null;
    return b;
  }
  function zc() {
    var a = 9 === Ea.offsetWidth;
    Cb !== a && Da(Ac, Cb = a);
  }
  function bb() {
    return Db = Qa ? Eb ? 2 : Fb ? 3 : 1 : 0;
  }
  function cb(a) {
    var b = b || F;
    return vd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Gb(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function da(a, b, c, e, l) {
    function D(G, J) {
      for (var x in J) {
        switch(x) {
          case "class":
          case "className":
            ra(G, J[x]);
            break;
          default:
            G.setAttribute(x, J[x]);
        }
      }
    }
    function z(G, J) {
      var x = G.style, Z;
      for (Z in J) {
        x[Z] = J[Z];
      }
    }
    if ("style" === b) {
      var y = !0;
      b = Gb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Gb(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    c && D(b, c);
    e && z(b, e);
    l && !y && b.appendChild(F.createTextNode(l));
    return b;
  }
  function Fa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var c;
    if (!Fa(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function eb(a) {
    if (Fa(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function Bc(a) {
    a = da(Hb, "style", {type:"text/css", media:"all"}, 0, a);
    Ib = a.sheet || a.styleSheet;
  }
  function Ga(a) {
    for (var b = Ib, c, e, l = "", D; a.length;) {
      c = a.shift(), e = a.shift(), D = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(D, b.cssRules.length) : l += D;
    }
    l && Bc(l);
  }
  function Cc(a) {
    function b(e) {
      fb = e;
      c.onload = c.onerror = Pa;
      I(a, e);
    }
    if (qa(fb)) {
      u("[dataUriTest] already done : " + fb), I(a, fb);
    } else {
      if (8 > C) {
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
  function Dc(a, b, c, e, l, D) {
    function z() {
      var r = '1.6em "' + b + '"';
      u("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(r).then(function(A) {
        u("[webFontTest] fonts.check() : " + F.fonts.check(r, "i") + ", fonts.length : " + A.length);
        x(b) ? I(a, Ha) : (u("[webFontTest] mesureWebFont() : false"), G(!0));
      }, function(A) {
        u("[webFontTest] fonts.load() rejected! " + A);
        Cc(Z);
      });
    }
    function y(r) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (R = new pa - 0, !1) : r < new pa - R;
    }
    function G(r) {
      r && (u("[webFontTest] testWebFont start."), R = new pa - 0);
      x(b) ? (u("[webFontTest] testWebFont mesurement success : " + Ha), a(Ha)) : y(sa) ? (u("[webFontTest] testWebFont timeout!"), v ? a(0) : 9 > C ? I(a, 0) : Cc(Z)) : I(G);
    }
    function J() {
      var r = -1, A;
      J = null;
      K = ["sans-serif", "serif"];
      m = da(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; A = K[++r];) {
        m.style.fontFamily = A, L[A] = m.offsetWidth;
      }
    }
    function x(r) {
      var A = 0, aa = -1, Jb, Kb, Lb = 0;
      J && J();
      for (N.appendChild(m); Jb = K[++aa];) {
        if (m.style.fontFamily = '"' + r + '",' + Jb, m.offsetWidth !== L[Jb]) {
          A = 1;
          break;
        }
      }
      if (A && l) {
        for (Kb in l) {
          if (m.innerHTML = Kb, r = m.offsetWidth, m.innerHTML = l[Kb], Lb = r === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Lb) {
            break;
          }
        }
      }
      xa(m);
      return Ha = A + Lb;
    }
    function Z(r) {
      u("[webFontTest] testDataUriComplete : " + r);
      (v = r) ? O(!0) : a(0);
    }
    function O(r) {
      r && (R = new pa - 0);
      for (A in c) {
        if (x(A)) {
          u("[webFontTest] success! " + A);
          n = da(N, "div", {"aria-hidden":"true", className:e, id:e});
          r = c[A];
          var A = Ib, aa = Ec.all || 0;
          A ? A.addImport ? A.addImport(r, aa) : A.insertRule && A.insertRule('@import "' + r + '"', aa) : Bc('@import "' + r + '"');
          Ec.all = ++aa;
          I(S, !0);
        } else {
          y(100) ? (u("[webFontTest] timeout! " + A), delete c[A], I(O, !0)) : I(O);
        }
        return;
      }
      a(0);
    }
    function S(r) {
      r && (u("[webFontTest] testImportedCssReady start!"), u("[webFontTest] targetWebFontName : " + b), R = new pa - 0);
      1 < n.offsetWidth ? (u("[webFontTest] testImportedCssReady ended."), xa(n), sa = 100, I(G, !0)) : y(sa) ? (u("[webFontTest] testImportedCssReady timeout!"), xa(n), a(0)) : I(S);
    }
    var sa = D || 5000, R, v, m, n, K, L, Ha;
    b = wd + b;
    u("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var r;
      if (w.MeeGo || 2.2 > w.AOSP || w.WebOS || w.UCWEB || 10 > w.TridentMobile || w.NDS || w.NDSi || w.N3DS) {
        return !1;
      }
      if (6 > C) {
        return !0;
      }
      var A = da(Hb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = A.sheet || A.styleSheet) ? (r = 10 <= C ? aa.cssRules : aa.rules || aa.cssRules) && (r = r[0]) ? r.cssText : aa.cssText || "" : "";
      r = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      xa(A);
      return r;
    })() ? (u("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > gb ? (u("[webFontTest] No native font loader."), G(!0)) : (u("[webFontTest] Use Native font loader."), z())) : (u("[webFontTest] maybeCanWebFont() : false"), I(a, 0));
  }
  function Fc() {
    Mb = !Mb;
    for (var a = -1, b; b = Nb[++a];) {
      b.style.visibility = Mb ? "" : "hidden";
    }
  }
  function xd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Ob = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function hb() {
    hb = null;
    yd(Pb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:ib}, 5000);
  }
  function Pb(a) {
    Ra = a;
    u("[pbList] WebFont test result : " + !!a);
    Ra ? Qb() : Sa ? Gc(!0) : qa(Sa) ? Qb() : zd(Gc);
  }
  function Gc(a) {
    a && (u("[pbList] Fallback start!"), ra(N, "pbList-noWebFont"), fa ? Ga([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ga([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Qb();
  }
  function Qb() {
    for (Pb = Dc = null; ma.length;) {
      jb(ma.shift(), ma.shift());
    }
    u("[pbList] complete.");
  }
  function jb(a, b) {
    function c(D) {
      D = D.childNodes;
      for (var z = -1, y; y = D[++z];) {
        switch(y.nodeType) {
          case 1:
            c(y);
            break;
          case 3:
            y.data && y.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(y);
        }
      }
    }
    var e = [];
    if (Pb) {
      -1 === ma.indexOf(a) && (ma.push(a, b), Rb && hb && hb());
    } else {
      var l = ma.indexOf(a);
      0 <= l && ma.splice(l, 2);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== Ra && (l = l.split(ib).join(Hc)), b ? a.data = l : Ad(l.split("\r").join("").split("&yen;").join(Bd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Sb).split("&amp;").join("&"), a);
      }
    }
  }
  function Ad(a, b) {
    function c(m, n) {
      for (var K = ""; n;) {
        n & 1 && (K += m), n >>= 1, m += m;
      }
      return K;
    }
    function e(m, n, K) {
      for (var L, Ha = -1, r, A; L = n[++Ha];) {
        for (; 0 <= (r = m.indexOf(L));) {
          A = L.length, m = m.substr(0, r) + c(K, A) + m.substr(r + A);
        }
      }
      return m;
    }
    function l(m) {
      var n = Q(m), K = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(K) + K.length, n <= m.length) ? n : 0;
    }
    var D = " area line str cmd fnc syb".split(" "), z = [], y = "", G = -1, J, x;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = Q(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      y = c("+", a.length);
    } else {
      for (0 <= (G = l(a)) && (y = c("|", G), --G); x = a.charAt(++G);) {
        x === Sb || J ? (y += "~", x === Sb && (J = !J)) : y += x;
      }
      y = e(y, Cd, "^");
      y = e(y, Dd, "{");
      y = e(y, Ed, "}");
    }
    G = 0;
    for (J = a.length; G < J; ++G) {
      x = a.charAt(G);
      var Z = x === Tb, O = " " === x;
      x = Z ? " " : x;
      var S = y.charAt(G), sa = R, R = "|" === S;
      S = D["+|~{}^".indexOf(S) + 1];
      if ("\n" !== x) {
        if (Ra || !Sa) {
          8 > C && O && (x = G === J - 1 ? Tb : Fd), 2 === Ra && a.substr(G, 2) === ib && (x = ib, ++G), O = O && "str" === S ? ' class="pbList-strsp"' : Z ? "" : !O && S ? ' class="pbList-' + S + '"' : "";
        } else {
          var v = ya.indexOf(x);
          v = -1 === v ? "" : ya.indexOf(x).toString(16).toUpperCase();
          v = (v = 1 === v.length ? "0" + v : v) ? "pbChr" + v : "";
          O = O && "str" === S ? ' class="pbList-strsp"' : O || !v ? "" : S ? ' class="' + (v ? v + " " : "") + "pbList-" + S + '"' : ' class="' + v + '"';
        }
        sa && Z && (gb || kb) && (x = Tb);
        z.push("<font" + O + ">" + x + "</font>");
      } else {
        z.push(x);
      }
    }
    z = z.join("");
    if (1 === b.nodeType) {
      b.innerHTML = z;
    } else {
      for (D = Gb("font", z); z = D.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(z, b);
      }
      xa(b);
    }
  }
  var q, t, d = ha.userAgent, V = ha.appVersion, Ub = Q(V) | 0, E = ha.platform, Vb = F.documentElement, Ic = Vb && Vb.style, Wb = F.documentMode, Xb = nc.width, Yb = nc.height, Jc = p.HTMLAudioElement, Kc = p.performance, Lc = p.Int8Array, Gd = void 0 !== p.ontouchstart, za = k(V, "Version/") || k(d, "Version/"), Ia = void 0 !== Ic.MozAppearance, Mc = p.operamini, Zb = f(d, "UCWEB"), Hd = Zb && k(d, " U2/"), Id = Zb && k(d, "; wds "), $b = k(d.split("_").join("."), "; iPh OS "), Jd = k(d, "; Adr "), 
  Nc = f(V, "YJApp-ANDROID"), ea = f(E, "Android") || Ia && f(V, "Android") || Nc, T = k(E, "Android ") || k(V, "Android ") || k(d, "Android ") || Jd, ac = f(E, "Linux"), Oc = "MacIntel" === E && void 0 !== ha.standalone, Aa = !Mc && p.opera, Kd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : sc(k(d, "Opera "), za, "" + Ub)), Pc = p.opr, lb = !Aa && (F.all || Wb), ba = lb && (Wb ? Wb : p.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  p.attachEvent ? 5 : 4), bc = !lb && Vb.msContentZoomFactor, mb = !bc && p.chrome, cc = Ia && k(d, "Goanna/"), ia = !cc && Ia && k(d, "rv:"), Ld = k(d, "Firefox/"), Md = k(d, "Opera/"), Nd = p.FNRBrowser, na = Ya(d, "AppleWebKit/"), Ta = k(d, "Chrome/"), Qc = k(d, "OPR/"), Od = k(V, "KHTML/"), Pd = k(d.toLowerCase(), "iris"), Qd = k(d, "Silk/"), Ua = Ya(d, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Rc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      nb, dc = Rc.length; nb = Rc[--dc];) {
        if (f(d, nb)) {
          Va = 2 > Q(za) ? za : 0.9;
          break a;
        }
      }
      var Sc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (dc = Sc.length; nb = Sc[--dc];) {
        if (f(d, nb)) {
          Va = za;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Tc = Va, Uc = mb && 534.3 >= na, Vc = qc(E), Rd = Vc && !f(d, E) && qc(d), Sd = Gd && (na || Ia) && Rd || !T && Nc, Td = !!p.ReactNativeWebView, ob;
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
  var Ud = ob, Xc = p.puffinDevice, pb = Xc && Xc.clientInfo, Wa = pb && "iOS" === pb.os && pb.osVersion, Vd = Wa && pb.model, ec = !ba && F.registerElement, Wd = !ba && F.execCommand, Xd = ac && ec && "11.0.696.34" === Ta, Yd = p._firefoxTV_playbackStateObserverJava, Zd = Ya(d, "diordnA "), qb, B;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var g = Md;
    } else {
      if ("New Nintendo 3DS" === E || f(d, "iPhone OS 6_0") && 320 === Xb && 240 === Yb) {
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
                if (B = k(d, "PlayStation Vita ")) {
                  h = "PSVita", g = B, M = h, P = B;
                } else {
                  if (B = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = B;
                    var Yc = 3.3;
                    M = h;
                    P = B;
                  } else {
                    if (B = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", g = B, M = h, P = B, 0 > rc("4.10", B) && (q = "Sony", t = B);
                    } else {
                      if (f(d, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Ub && f(d, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Yc = 3.4;
                            M = h;
                            P = 2;
                            var rb = !0;
                          } else {
                            if (0 === E.indexOf("iP") || $b || Wa || Oc) {
                              if (Wa) {
                                switch(g = Wa, Vd.substr(0, 4)) {
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
                                $b ? g = $b : g = k(V.split("_").join("."), "OS ");
                                if (!g || Nd) {
                                  g = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ha.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : oc.isNaN ? 9.2 : p.SharedWorker ? Kc && Kc.now ? 8.0 : 8.4 : Wd ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : Lc ? 4.3 : Jc ? 4.1 : 3.2;
                                }
                                var X = Xb === 1.5 * Yb || 1.5 * Xb === Yb;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === E.indexOf("iPad") || Oc ? (oa = "iPad", W = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", Zc = !0);
                              }
                              var fc;
                              if (fc = !Wa) {
                                var gc;
                                if (!(gc = ha.standalone)) {
                                  var sb;
                                  if (sb = W || 12 > g) {
                                    a: {
                                      for (var $d in F) {
                                        if ("webkitFullscreenEnabled" === $d) {
                                          sb = !0;
                                          break a;
                                        }
                                      }
                                      sb = void 0;
                                    }
                                  }
                                  gc = sb;
                                }
                                fc = gc || 11 <= g && 13 > g && ha.mediaDevices;
                              }
                              fc ? (q = "SafariMobile", M = "Safari", P = g) : q = "iOSWebView";
                              h = "iOS";
                              t = g;
                            } else {
                              if (f(d, "Kobo")) {
                                h = "Kobo", q = "AOSP", t = 2.2, M = q, P = t, ea = !0;
                              } else {
                                if (f(d, "EBRD")) {
                                  h = "SonyReader", q = "AOSP", t = 2.2, M = q, P = t;
                                } else {
                                  if (B = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = B;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ia ? "1.0.1" : 19 > ia ? 1.1 : 27 > ia ? 1.2 : 29 > ia ? 1.3 : 31 > ia ? 1.4 : 33 > ia ? 2.0 : 35 > ia ? 2.1 : 38 > ia ? 2.2 : 45 > ia ? 2.5 : 2.6, f(d, "Mobile") ? ca = !0 : f(d, "Tablet") && (W = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        h = "webOS", g = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), M = h, P = g, f(d, "webOS.TV") || f(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (B = k(d, "Tizen ")) {
                                          h = "Tizen", g = B, M = "Samsung", P = Ua, q = M, t = P, ca = !0;
                                        } else {
                                          if (B = k(d, "Windows Phone ") || k(V, "Windows Phone OS ") || Id) {
                                            var tb = !0;
                                            g = B;
                                            ca = !0;
                                          } else {
                                            if (bc && "ARM" === E) {
                                              tb = !0, g = 10, ca = !0;
                                            } else {
                                              if (lb && f(V, "ZuneWP")) {
                                                tb = !0, g = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
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
                                                      var U = W = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        ja = !0, g = 6, U = W = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          ja = !0, g = 5, U = W = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            ja = !0, g = 5, U = W = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              ja = !0, g = 5 <= Q(T) ? 5 : 4, U = W = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                ja = !0, g = 3, U = W = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  ja = !0, g = 2, U = W = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    ja = !0, g = 1, U = W = !0;
                                                                  } else {
                                                                    if (B = k(d, "Kindle/")) {
                                                                      h = "Kindle", g = B, q = "AOSP", t = 2.2, M = q, P = t;
                                                                    } else {
                                                                      if (Yd) {
                                                                        ja = !0, g = T || Zd, U = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          ja = !0, g = T, U = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Pd) {
                                                                                h = "WindowsMobile", rb = !0;
                                                                              } else {
                                                                                if ("WinCE" === E) {
                                                                                  h = E, rb = !0;
                                                                                } else {
                                                                                  if ("Win16" === E || "Win32" === E || "Win64" === E) {
                                                                                    h = E, g = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === E.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === E ? "MacPPC" : E;
                                                                                      if (B = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                        g = B;
                                                                                      }
                                                                                      var $c = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (h = "BlackBerry", g = za, ca = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? h = "SunOS" : f(d, "FreeBSD") ? h = "FreeBSD" : f(d, "OpenBSD") ? h = "OpenBSD" : f(d, "NetBSD") ? h = "NetBSD" : ea && Ia ? (f(d, "Android 4.4;") ? X = {min:2.3} : 4 <= Q(T) ? X = T : X = {min:2.2}, g = X) : ea && Aa ? (T ? X = T : X = {min:1.6}, g = X, f(d, "Tablet") ? W = !0 : ca = !0) : T ? (g = 
                                                                                      T, ea = !0) : ac && Sd || Td || Ud ? (qb = !0, Ua ? X = {min:4.4} : mb && !Uc || Pc || Qc ? X = {min:4} : (X = T = void 0 !== Ic.touchAction ? {min:5} : ec ? 4.4 : Lc ? ha.connection ? p.searchBoxJavaBridge_ || mb ? oc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Jc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Tc && (q = "Samsung", t = Tc)), g = X, ea = !0) : Xd ? (g = {min:5}, qb = ea = !0) : ac && (f(d, "Ubuntu") ? 
                                                                                      h = "Ubuntu" : (B = k(d, "Mint/")) ? (h = "Mint", g = B) : (B = k(d, "Fedora/")) ? (h = "Fedora", g = B) : h = f(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ja || ea && qb && Qd ? h = "FireOS" : ea && (h = h || "Android");
  tb && (h = "WindowsPhone");
  q || (U = U || ea, Aa ? (q = U || rb || ca || W ? "PrestoMobile" : "Presto", t = Kd) : lb ? ((X = Ya(V, "Trident/") + 4) && X !== ba && (M = "IEHost", P = X), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), rb || ca || W || Zc ? q = "TridentMobile" : $c && 5 <= ba ? (q = "Tasman", M = "MacIE", P = ba) : (q = "Trident", $c && (M = "MacIE", P = ba)), t = ba) : bc ? (q = tb ? "EdgeMobile" : "EdgeHTML", t = k(V, "Edge/")) : cc ? (q = "Goanna", 
  t = cc) : Ia ? (q = U ? "Fennec" : "Gecko", t = ia || Ld) : Ua ? (q = "Samsung", t = Ua) : (B = Yc || k(d, "NetFront/")) ? (q = "NetFront", t = B) : (B = k(d, "iCab")) ? (q = "iCab", t = B) : (B = sc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Mc && za) ? (q = "OperaMini", t = B, h || (f(d, "iPhone") ? oa = "iPhone" : f(d, "iPad") ? oa = "iPad" : f(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Zb ? (q = "UCWEB", t = Hd) : Od ? (q = "KHTML", t = Ub) : ea && Uc ? (q = "AOSP", t = T) : mb || 
  Pc || Qc ? (q = U ? "ChromiumMobile" : "Chromium", t = Ta) : ea && ec ? (q = "ChromeWebView", t = 5 > Q(T) ? T : Ta) : ea && (za || qb) ? (q = "AOSP", t = T) : Ta ? (q = U ? "ChromiumMobile" : "Chromium", t = Ta) : na && (q = "WebKit", t = na));
  h && (w.PLATFORM = h, g ? (w.PLATFORM_VERSION = tc(g), w[h] = g === g + "" ? Q(g) : g) : w[h] = !0);
  q && (w.ENGINE = q, t ? (w.ENGINE_VERSION = tc(t), w[q] = t === t + "" ? Q(t) : t) : w[q] = !0, M || (M = q, P = t));
  var Pa = rd, Ja = [], vd = !!F.getElementsByTagName, N = F.body, ta = N.style, C = w.Trident || w.TridentMobile, ub = w.Tasman, ad = w.EdgeHTML || w.EdgeMobile, bd = w.Presto || w.PrestoMobile, vb = w.Gecko, wb = w.Goanna, gb = w.WebKit, kb = w.SafariMobile || w.iOSWebView, ae = w.OperaMini && w.UCWEB, hc = w.Win32 || w.Win64, be = Q(ha.userAgent.split("Edg/")[1]), cd = Q(ha.appVersion.split("Trident/")[1]) + 4;
  C || ub || (new pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var dd = F.scripts, ce = (ub ? "ie5mac" : 5.5 > C ? "ie5win" : 6 > C ? "ie55" : 10 > C ? "ie" + (C | 0) : "modern") + ".css", ed = 0 === location.href.indexOf("https"), ab = [], Cb, Db = 0, ic, Sa, fa, de = qa(ta.transform) ? "transform" : qa(ta["-o-transform"]) ? "-o-transform" : qa(ta["-ms-transform"]) ? "-ms-transform" : qa(ta["-moz-transform"]) ? "-moz-transform" : qa(ta["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ka = dd[dd.length - 1].src.split("/");
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
    var c = arguments, e = c.length - 2 - b, l = this.slice(a, a + b), D;
    if (0 < e) {
      var z = this.length - 1;
      for (D = a + b; z >= D; --z) {
        this[z + e] = this[z];
      }
    } else {
      if (0 > e) {
        z = a + b;
        for (D = this.length; z < D; ++z) {
          this[z + e] = this[z];
        }
        this.length += e;
      }
    }
    z = 2;
    for (D = c.length; z < D; ++z) {
      this[z - 2 + a] = c[z];
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
  var jc, kc = [];
  Ja.push(function() {
    La(function() {
      (jc = p.logger || F.all.logger) || alert("#logger not found!");
      for (jc ? u = function(a) {
        da(jc, "P", null, null, a);
      } : p.console && (u = console.log); kc.length;) {
        u(kc.shift());
      }
    });
  });
  u = function(a) {
    kc.push(a);
  };
  var gd = function(a) {
    $a.length || (Ca = setInterval(Za, vc));
    $a.push({f:a, g:++fd});
    return fd;
  };
  var $a = [], vc = 999, fd = 0, Ca;
  if (5 > C || ub) {
    p._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Ja.push(function() {
    6.1 > kb && hd(td);
    xb(uc);
  });
  var I = function(a, b, c) {
    la.length || (va = zb(Ma, Na));
    la.push({f:a, p:b, g:++id, t:new pa - 0 + (Na < c ? c : Na)});
    return id;
  };
  var jd = function(a) {
    for (var b = la.length, c; c = la[--b];) {
      if (c.g === a) {
        la.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var la = [], Na = 64, id = 0, va;
  if (5 > C || ub) {
    p._wdb_ontimer = Ma, Ma = "_wdb_ontimer()";
  }
  Ja.push(function() {
    6.1 > kb && hd(ud);
    xb(wc);
  });
  var Ba = p.matchMedia, Oa = [], xc, Ea;
  ab.push(function() {
    Ea = da(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
    La(function() {
      xc = !0;
      Oa.length && I(yc);
    });
  });
  var La = function(a) {
    ab.push(a);
  };
  var xb = function(a) {
    kd.push(a);
  };
  var kd = [], Bb = p.onload, ld = p.onunload;
  onload = Ab;
  onunload = function(a) {
    var b;
    ld && (b = ld(a));
    wa(kd, a);
    onunload = Pa;
    return b;
  };
  var md = function(a) {
    Ac.push(a);
  };
  var Ac = [];
  La(function() {
    zc();
    gd(zc);
  });
  var fe = function(a) {
    Xa.push(a);
  };
  var Xa = [], Qa, Fb, Eb;
  if (10 <= C || ad || hc && be) {
    Ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Qa = Fb = a.matches;
      Da(Xa, bb());
    }), Ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Qa = Eb = a.matches;
      Da(Xa, bb());
    }), Ba("(-ms-high-contrast:active)").addListener(function(a) {
      Qa = a.matches;
      Da(Xa, bb());
    });
  } else {
    if (10 > C || hc && (44 <= vb || wb)) {
      var yb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = F.defaultView, c = Db, e = b ? b.getComputedStyle(Ea, null) : Ea.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Qa = "#123456" !== b && "rgb(18,52,86)" !== b, Fb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Eb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== bb() && Da(Xa, Db), !0;
        }
      };
      La(function() {
        Ea.style.color = "#123456";
        Ea.style.backgroundColor = "#123456";
        60 > vb || wb ? yb() : yb() && gd(yb, 1000);
        yb = null;
      });
    }
  }
  var ge = [];
  Ba && Ba("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    Da(ge, a.matches);
  });
  var lc = [];
  p.onbeforeprint ? (onbeforeprint = function() {
    wa(lc, !0);
  }, onafterprint = function() {
    wa(lc, !1);
  }, xb(function() {
    onbeforeprint = onafterprint = Pa;
  })) : Ba && Ba("print").addListener(function(a) {
    wa(lc, a.matches);
  });
  var hd = function(a) {
    nd.push(a);
  };
  var nd = [], mc = p.onscroll;
  onscroll = function(a) {
    var b;
    mc && (b = mc(a));
    Ab || wa(nd);
    return b;
  };
  xb(function() {
    onscroll = mc = Pa;
  });
  var he = cb("html")[0];
  var Hb = cb("head")[0];
  var db;
  var Ib = void 0;
  var Ec = {};
  La(function() {
    if (Cb) {
      if (!qa(fa) && (fa = 1.8 <= vb || wb || 8 <= C || ad || 530 <= gb || 3.2 <= kb, !fa)) {
        var a = da(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        fa = 6 <= a.offsetWidth;
        xa(a);
      }
    } else {
      fa = void 0;
    }
  });
  var fb;
  9 > C && La(function(a) {
    a = da(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    ic = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var zd = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || I(a, !1)) : e = I(b));
    }
    if (od) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!C || 11 === C || 11 === cd) && c.width || l || (l = !0, e && jd(e), e = I(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && jd(e);
        bd && !c.complete ? e = I(a, !1) : (Sa = !0, I(a, !0));
      };
      c.src = od;
      8 > bd && c.complete ? (Sa = !0, I(a, !0)) : l || (e = I(b));
    } else {
      u("[imageTest] TEST_IMAGE_URL is undefined!"), I(a, !1);
    }
  };
  var od = ed ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var yd = Dc;
  var wd = "bad_" + (new pa - 0) + "_";
  for (11 === cd && 5.5 > C && da(Hb, "link", {href:ee + "/" + ce, rel:"stylesheet", type:"text/css"}); Ja.length;) {
    Ja.shift()();
  }
  Ja = null;
  var Y = String.fromCharCode, H = ed ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > C || hc && (44 <= vb || wb)) && fe(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((de || 9 === C || 5.5 <= C && 9 > C && ic) && ra(N, "jsCanRotate"), a) {
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
  var Nb = [], Mb, Ob, pd;
  md(function(a) {
    function b(v) {
      var m = v.getAttribute("pbtip") || "", n = m.charAt(0), K = "_" === n;
      m = K ? m.charAt(2) : n;
      n = K ? "Btm" : "";
      var L = v.getAttribute("title") || "";
      ra(v, "pbTipPos" + m.toUpperCase());
      da(v, "div", {className:"pbTip" + n}, {width:L.length + l + "em"}, L);
      da(v, "div", {className:"pbTail" + n});
      z && K && (v.focus(), v.blur());
    }
    function c(v) {
      if (fa && O) {
        e(v);
      } else {
        var m = v.getAttribute("pbGhst") || "", n = v.className, K = n.split("pbCsr")[1] || "";
        n = n.split("pbAlp")[1] || "";
        if ("CS" === m) {
          var L = "_";
        } else {
          L = m, 3 === L.length && (L = L.substr(0, 2)), L = ya[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        n = n.split(" ")[0];
        n = 10 - Q(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + K]}, db = 1, G = da(v, "b", m, 0, L), e(v), e(G)) : e(v);
      }
    }
    function e(v) {
      Z || D || Fa(v, "pbChrCS") && Nb.push(v);
    }
    if (a && !pd) {
      pd = !0;
      var l = 6 > C ? 1 : 0;
      a = cb("SAMP");
      var D = 9 > C, z = 5 <= C && 6 > C, y, G, J, x;
      ic && ra(N, "pbLCD-AX");
      if (a.length) {
        var Z = void 0 !== ta.opacity || void 0 !== ta["-moz-opacity"] || void 0 !== ta["-khtml-opacity"], O = !Z && !D && !0, S = !fa || O || void 0;
        for (J = -1; y = a[++J];) {
          if (Fa(y.parentElement || y.parentNode, "pbLCD")) {
            var sa = y.children;
            for (y = sa.length; y;) {
              var R = sa[--y];
              switch(R.tagName.toUpperCase()) {
                case "A":
                  if (S) {
                    for (fa || b(R), x = R.children.length; x;) {
                      c(R.children[--x]);
                    }
                  }
                  ae ? R.setAttribute("href", "javascript:void(0)") : R.onclick = xd;
                  break;
                case "B":
                  S && c(R);
              }
            }
          }
        }
        Nb.length ? (setInterval(Fc, 500), fa ? Ga([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ga([".pbChrCS", "background-position:0 -51px"])) : Fc = null;
        O && (fa ? Ga([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ga([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > gb && (he.onclick = function(a) {
    if (Ob) {
      return Ob = !1, a.preventDefault(), !1;
    }
  });
  6 === C && (new pc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Sb = ya[7], Hc = ya[30], Bd = ya[113], ib = Y(8337) + Y(8331), Tb = Y(160), Fd = Y(8194), Dd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Ed = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Cd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Hc + ya[31]).split(""), ma = 
  [], Ra, Rb;
  md(function(a) {
    if (a && !Rb) {
      var b = F.all || cb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Fa(c, "pbList") ? jb(c) : Fa(c, "pbFont") && jb(c, !0);
      }
      ma.length && (u("[pbList] " + ma.length / 2 + " elements found. WebFont test start."), hb());
      Rb = !0;
    }
  });
  qd.prettify = jb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

