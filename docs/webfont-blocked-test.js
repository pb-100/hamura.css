PB100 = {};
(function(nd, w, p, od, F, ia, mc, Q, nc, oc, fe, xb, pd, pa, ge) {
  function Va(a, b) {
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
  function qc(a, b) {
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
  function rc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], l; b < c; ++b) {
      0 > qc(e, l = a[b]) && (e = l);
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
  function Wa() {
    for (var a, b = 0; b < Xa.length; ++b) {
      a = Xa[b], a.f();
    }
  }
  function qd() {
    Ca && (tc(), Ca = setInterval(Wa, uc));
  }
  function tc() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Ka() {
    for (var a, b = 0, c = new pa - 0; b < ma.length;) {
      c < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    wa = ma.length ? xb(Ka, La) : 0;
  }
  function rd() {
    wa && (vc(), wa = xb(Ka, La));
  }
  function vc() {
    wa && (wa = pd(wa));
  }
  function da(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function yb(a) {
    var b;
    zb && (b = zb(a));
    da(Ya, a);
    onload = Ma;
    Ya = yb = zb = onload = null;
    return b;
  }
  function sd() {
    var a = 9 === Da.offsetWidth;
    wc !== a && da(xc, wc = a);
  }
  function Za() {
    return Ab = Na ? Bb ? 2 : Cb ? 3 : 1 : 0;
  }
  function $a(a) {
    var b = b || F;
    return td ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function xa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Db(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ea(a, b, c, e, l) {
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
      b = Db("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Db(b);
    }
    ab ? (2 === ab && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    ab = 0;
    c && D(b, c);
    e && z(b, e);
    l && !y && b.appendChild(F.createTextNode(l));
    return b;
  }
  function Ea(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ra(a, b) {
    var c;
    if (!Ea(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function bb(a) {
    if (Ea(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function yc(a) {
    a = ea(Eb, "style", {type:"text/css", media:"all"}, 0, a);
    Fb = a.sheet || a.styleSheet;
  }
  function Fa(a) {
    for (var b = Fb, c, e, l = "", D; a.length;) {
      c = a.shift(), e = a.shift(), D = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(D, b.cssRules.length) : l += D;
    }
    l && yc(l);
  }
  function zc(a) {
    function b(e) {
      cb = e;
      c.onload = c.onerror = Ma;
      I(a, e);
    }
    if (qa(cb)) {
      u("[dataUriTest] already done : " + cb), I(a, cb);
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
  function Ac(a, b, c, e, l, D) {
    function z() {
      var r = '1.6em "' + b + '"';
      u("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(r).then(function(A) {
        u("[webFontTest] fonts.check() : " + F.fonts.check(r, "i") + ", fonts.length : " + A.length);
        x(b) ? I(a, Ga) : (u("[webFontTest] mesureWebFont() : false"), G(!0));
      }, function(A) {
        u("[webFontTest] fonts.load() rejected! " + A);
        zc(Z);
      });
    }
    function y(r) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (R = new pa - 0, !1) : r < new pa - R;
    }
    function G(r) {
      r && (u("[webFontTest] testWebFont start."), R = new pa - 0);
      x(b) ? (u("[webFontTest] testWebFont mesurement success : " + Ga), a(Ga)) : y(sa) ? (u("[webFontTest] testWebFont timeout!"), v ? a(0) : 9 > C ? I(a, 0) : zc(Z)) : I(G);
    }
    function J() {
      var r = -1, A;
      J = null;
      K = ["sans-serif", "serif"];
      m = ea(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; A = K[++r];) {
        m.style.fontFamily = A, L[A] = m.offsetWidth;
      }
    }
    function x(r) {
      var A = 0, aa = -1, Gb, Hb, Ib = 0;
      J && J();
      for (N.appendChild(m); Gb = K[++aa];) {
        if (m.style.fontFamily = '"' + r + '",' + Gb, m.offsetWidth !== L[Gb]) {
          A = 1;
          break;
        }
      }
      if (A && l) {
        for (Hb in l) {
          if (m.innerHTML = Hb, r = m.offsetWidth, m.innerHTML = l[Hb], Ib = r === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Ib) {
            break;
          }
        }
      }
      xa(m);
      return Ga = A + Ib;
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
          n = ea(N, "div", {"aria-hidden":"true", className:e, id:e});
          r = c[A];
          var A = Fb, aa = Bc.all || 0;
          A ? A.addImport ? A.addImport(r, aa) : A.insertRule && A.insertRule('@import "' + r + '"', aa) : yc('@import "' + r + '"');
          Bc.all = ++aa;
          I(S, !0);
        } else {
          y(100) ? (u("[webFontTest] timeout! " + A), delete c[A], I(O, !0)) : I(O);
        }
        return;
      }
      a(0);
    }
    function S(r) {
      r && (u("[webFontTest] testImportedCssReady start!"), b = b.replace(Cc, ""), u("[webFontTest] targetWebFontName : " + b), R = new pa - 0);
      1 < n.offsetWidth ? (u("[webFontTest] testImportedCssReady ended."), xa(n), sa = 100, I(G, !0)) : y(sa) ? (u("[webFontTest] testImportedCssReady timeout!"), xa(n), a(0)) : I(S);
    }
    var sa = D || 5000, R, v, m, n, K, L, Ga;
    b = Cc + b;
    u("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var r;
      if (w.MeeGo || 2.2 > w.AOSP || w.WebOS || w.UCWEB || 10 > w.TridentMobile || w.NDS || w.NDSi || w.N3DS) {
        return !1;
      }
      if (6 > C) {
        return !0;
      }
      var A = ea(Eb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = A.sheet || A.styleSheet) ? (r = 10 <= C ? aa.cssRules : aa.rules || aa.cssRules) && (r = r[0]) ? r.cssText : aa.cssText || "" : "";
      r = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      xa(A);
      return r;
    })() ? (u("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > db ? (u("[webFontTest] No native font loader."), G(!0)) : (u("[webFontTest] Use Native font loader."), z())) : (u("[webFontTest] maybeCanWebFont() : false"), I(a, 0));
  }
  function Dc() {
    Jb = !Jb;
    for (var a = -1, b; b = Kb[++a];) {
      b.style.visibility = Jb ? "" : "hidden";
    }
  }
  function ud(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Lb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function eb() {
    eb = null;
    vd(Mb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:fb}, 5000);
  }
  function Mb(a) {
    Oa = a;
    u("[pbList] WebFont test result : " + !!a);
    Oa ? Nb() : Pa ? Ec(!0) : qa(Pa) ? Nb() : wd(Ec);
  }
  function Ec(a) {
    a && (u("[pbList] Fallback start!"), ra(N, "pbList-noWebFont"), fa ? Fa([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Fa([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Nb();
  }
  function Nb() {
    for (Mb = Ac = null; ta.length;) {
      gb(ta.shift(), Ob.shift());
    }
    u("[pbList] complete.");
  }
  function gb(a, b) {
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
    if (Mb) {
      -1 === ta.indexOf(a) && (ta.push(a), Ob.push(b), Pb && eb && eb());
    } else {
      var l = ta.indexOf(a);
      0 <= l && ta.splice(l, 1) && Ob.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== Oa && (l = l.split(fb).join(Fc)), b ? a.data = l : xd(l.split("\r").join("").split("&yen;").join(yd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Qb).split("&amp;").join("&"), a);
      }
    }
  }
  function xd(a, b) {
    function c(m, n) {
      for (var K = ""; n;) {
        n & 1 && (K += m), n >>= 1, m += m;
      }
      return K;
    }
    function e(m, n, K) {
      for (var L, Ga = -1, r, A; L = n[++Ga];) {
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
        x === Qb || J ? (y += "~", x === Qb && (J = !J)) : y += x;
      }
      y = e(y, zd, "^");
      y = e(y, Ad, "{");
      y = e(y, Bd, "}");
    }
    G = 0;
    for (J = a.length; G < J; ++G) {
      x = a.charAt(G);
      var Z = x === Rb, O = " " === x;
      x = Z ? " " : x;
      var S = y.charAt(G), sa = R, R = "|" === S;
      S = D["+|~{}^".indexOf(S) + 1];
      if ("\n" !== x) {
        if (Oa || !Pa) {
          8 > C && O && (x = G === J - 1 ? Rb : Cd), 2 === Oa && a.substr(G, 2) === fb && (x = fb, ++G), O = O && "str" === S ? ' class="pbList-strsp"' : Z ? "" : !O && S ? ' class="pbList-' + S + '"' : "";
        } else {
          var v = ya.indexOf(x);
          v = -1 === v ? "" : ya.indexOf(x).toString(16).toUpperCase();
          v = (v = 1 === v.length ? "0" + v : v) ? "pbChr" + v : "";
          O = O && "str" === S ? ' class="pbList-strsp"' : O || !v ? "" : S ? ' class="' + (v ? v + " " : "") + "pbList-" + S + '"' : ' class="' + v + '"';
        }
        sa && Z && (db || hb) && (x = Rb);
        z.push("<font" + O + ">" + x + "</font>");
      } else {
        z.push(x);
      }
    }
    z = z.join("");
    if (1 === b.nodeType) {
      b.innerHTML = z;
    } else {
      for (D = Db("font", z); z = D.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(z, b);
      }
      xa(b);
    }
  }
  var q, t, d = ia.userAgent, V = ia.appVersion, Sb = Q(V) | 0, E = ia.platform, Tb = F.documentElement, Gc = Tb && Tb.style, Ub = F.documentMode, Vb = mc.width, Wb = mc.height, Hc = p.HTMLAudioElement, Ic = p.performance, Jc = p.Int8Array, Dd = void 0 !== p.ontouchstart, za = k(V, "Version/") || k(d, "Version/"), Ha = void 0 !== Gc.MozAppearance, Kc = p.operamini, Xb = f(d, "UCWEB"), Ed = Xb && k(d, " U2/"), Fd = Xb && k(d, "; wds "), Yb = k(d.split("_").join("."), "; iPh OS "), Gd = k(d, "; Adr "), 
  Lc = f(V, "YJApp-ANDROID"), ha = f(E, "Android") || Ha && f(V, "Android") || Lc, T = k(E, "Android ") || k(V, "Android ") || k(d, "Android ") || Gd, Zb = f(E, "Linux"), Mc = "MacIntel" === E && void 0 !== ia.standalone, Aa = !Kc && p.opera, Hd = Aa && (Aa.version && "function" === typeof Aa.version ? Aa.version() : rc(k(d, "Opera "), za, "" + Sb)), Nc = p.opr, ib = !Aa && (F.all || Ub), ba = ib && (Ub ? Ub : p.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  p.attachEvent ? 5 : 4), $b = !ib && Tb.msContentZoomFactor, jb = !$b && p.chrome, ac = Ha && k(d, "Goanna/"), ja = !ac && Ha && k(d, "rv:"), Id = k(d, "Firefox/"), Jd = k(d, "Opera/"), Kd = p.FNRBrowser, na = Va(d, "AppleWebKit/"), Qa = k(d, "Chrome/"), Oc = k(d, "OPR/"), Ld = k(V, "KHTML/"), Md = k(d.toLowerCase(), "iris"), Nd = k(d, "Silk/"), Ra = Va(d, "SamsungBrowser/"), Sa;
  if (Sa = !Ra) {
    a: {
      for (var Pc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      kb, bc = Pc.length; kb = Pc[--bc];) {
        if (f(d, kb)) {
          Sa = 2 > Q(za) ? za : 0.9;
          break a;
        }
      }
      var Qc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (bc = Qc.length; kb = Qc[--bc];) {
        if (f(d, kb)) {
          Sa = za;
          break a;
        }
      }
      Sa = void 0;
    }
  }
  var Rc = Sa, Sc = jb && 534.3 >= na, Tc = pc(E), Od = Tc && !f(d, E) && pc(d), Pd = Dd && (na || Ha) && Od || !T && Lc, Qd = !!p.ReactNativeWebView, lb;
  if (lb = Tc) {
    a: {
      var Uc = void 0;
      for (Uc in p) {
        if (0 === Uc.indexOf("SlexAPI_")) {
          lb = !0;
          break a;
        }
      }
      lb = void 0;
    }
  }
  var Rd = lb, Vc = p.puffinDevice, mb = Vc && Vc.clientInfo, Ta = mb && "iOS" === mb.os && mb.osVersion, Sd = Ta && mb.model, cc = !ba && F.registerElement, Td = !ba && F.execCommand, Ud = Zb && cc && "11.0.696.34" === Qa, Vd = p._firefoxTV_playbackStateObserverJava, Wd = Va(d, "diordnA "), nb, B;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var g = Jd;
    } else {
      if ("New Nintendo 3DS" === E || f(d, "iPhone OS 6_0") && 320 === Vb && 240 === Wb) {
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
                    var Wc = 3.3;
                    M = h;
                    P = B;
                  } else {
                    if (B = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", g = B, M = h, P = B, 0 > qc("4.10", B) && (q = "Sony", t = B);
                    } else {
                      if (f(d, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(d, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Sb && f(d, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Wc = 3.4;
                            M = h;
                            P = 2;
                            var ob = !0;
                          } else {
                            if (0 === E.indexOf("iP") || Yb || Ta || Mc) {
                              if (Ta) {
                                switch(g = Ta, Sd.substr(0, 4)) {
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
                                    var Xc = !0;
                                }
                              } else {
                                Yb ? g = Yb : g = k(V.split("_").join("."), "OS ");
                                if (!g || Kd) {
                                  g = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : nc.isNaN ? 9.2 : p.SharedWorker ? Ic && Ic.now ? 8.0 : 8.4 : Td ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : Jc ? 4.3 : Hc ? 4.1 : 3.2;
                                }
                                var X = Vb === 1.5 * Wb || 1.5 * Vb === Wb;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === E.indexOf("iPad") || Mc ? (oa = "iPad", W = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", Xc = !0);
                              }
                              var dc;
                              if (dc = !Ta) {
                                var ec;
                                if (!(ec = ia.standalone)) {
                                  var pb;
                                  if (pb = W || 12 > g) {
                                    a: {
                                      for (var Xd in F) {
                                        if ("webkitFullscreenEnabled" === Xd) {
                                          pb = !0;
                                          break a;
                                        }
                                      }
                                      pb = void 0;
                                    }
                                  }
                                  ec = pb;
                                }
                                dc = ec || 11 <= g && 13 > g && ia.mediaDevices;
                              }
                              dc ? (q = "SafariMobile", M = "Safari", P = g) : q = "iOSWebView";
                              h = "iOS";
                              t = g;
                            } else {
                              if (f(d, "Kobo")) {
                                h = "Kobo", q = "AOSP", t = 2.2, M = q, P = t, ha = !0;
                              } else {
                                if (f(d, "EBRD")) {
                                  h = "SonyReader", q = "AOSP", t = 2.2, M = q, P = t;
                                } else {
                                  if (B = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = B;
                                  } else {
                                    if (void 0 !== p.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ja ? "1.0.1" : 19 > ja ? 1.1 : 27 > ja ? 1.2 : 29 > ja ? 1.3 : 31 > ja ? 1.4 : 33 > ja ? 2.0 : 35 > ja ? 2.1 : 38 > ja ? 2.2 : 45 > ja ? 2.5 : 2.6, f(d, "Mobile") ? ca = !0 : f(d, "Tablet") && (W = !0);
                                    } else {
                                      if (p.palmGetResource) {
                                        h = "webOS", g = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), M = h, P = g, f(d, "webOS.TV") || f(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (B = k(d, "Tizen ")) {
                                          h = "Tizen", g = B, M = "Samsung", P = Ra, q = M, t = P, ca = !0;
                                        } else {
                                          if (B = k(d, "Windows Phone ") || k(V, "Windows Phone OS ") || Fd) {
                                            var qb = !0;
                                            g = B;
                                            ca = !0;
                                          } else {
                                            if ($b && "ARM" === E) {
                                              qb = !0, g = 10, ca = !0;
                                            } else {
                                              if (ib && f(V, "ZuneWP")) {
                                                qb = !0, g = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(d, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(d, "KFMUWI")) {
                                                      var ka = !0;
                                                      g = 6.3;
                                                      var U = W = !0;
                                                    } else {
                                                      if (f(d, "KFKAWI")) {
                                                        ka = !0, g = 6, U = W = !0;
                                                      } else {
                                                        if (f(d, "KFSUWI") || f(d, "KFAUWI") || f(d, "KFDOWI")) {
                                                          ka = !0, g = 5, U = W = !0;
                                                        } else {
                                                          if (f(d, "KFGIWI")) {
                                                            ka = !0, g = 5, U = W = !0;
                                                          } else {
                                                            if (f(d, "KFARWI") || f(d, "KFSAWA") || f(d, "KFSAWI")) {
                                                              ka = !0, g = 5 <= Q(T) ? 5 : 4, U = W = !0;
                                                            } else {
                                                              if (f(d, "KFSOWI") || f(d, "KFTHWA") || f(d, "KFTHWI") || f(d, "KFAPWA") || f(d, "KFAPWI")) {
                                                                ka = !0, g = 3, U = W = !0;
                                                              } else {
                                                                if (f(d, "KFOT") || f(d, "KFTT") || f(d, "KFJWA") || f(d, "KFJWI")) {
                                                                  ka = !0, g = 2, U = W = !0;
                                                                } else {
                                                                  if (f(d, "Kindle Fire")) {
                                                                    ka = !0, g = 1, U = W = !0;
                                                                  } else {
                                                                    if (B = k(d, "Kindle/")) {
                                                                      h = "Kindle", g = B, q = "AOSP", t = 2.2, M = q, P = t;
                                                                    } else {
                                                                      if (Vd) {
                                                                        ka = !0, g = T || Wd, U = !0;
                                                                      } else {
                                                                        if (f(d, "AmazonWebAppPlatform") || f(d, "; AFT")) {
                                                                          ka = !0, g = T, U = !0;
                                                                        } else {
                                                                          if (f(d, "MeeGo")) {
                                                                            h = "MeeGo";
                                                                          } else {
                                                                            if (f(d, "Maemo")) {
                                                                              h = "Maemo";
                                                                            } else {
                                                                              if (0 === d.indexOf("Windows Mobile;") || Md) {
                                                                                h = "WindowsMobile", ob = !0;
                                                                              } else {
                                                                                if ("WinCE" === E) {
                                                                                  h = E, ob = !0;
                                                                                } else {
                                                                                  if ("Win16" === E || "Win32" === E || "Win64" === E) {
                                                                                    h = E, g = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                  } else {
                                                                                    if (0 === E.indexOf("Mac")) {
                                                                                      h = "MacPowerPC" === E ? "MacPPC" : E;
                                                                                      if (B = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                        g = B;
                                                                                      }
                                                                                      var Yc = !0;
                                                                                    } else {
                                                                                      f(d, "BlackBerry") || f(d, "BB10") ? (h = "BlackBerry", g = za, ca = !0) : f(d, "SunOS") || f(d, "Sun Solaris") ? h = "SunOS" : f(d, "FreeBSD") ? h = "FreeBSD" : f(d, "OpenBSD") ? h = "OpenBSD" : f(d, "NetBSD") ? h = "NetBSD" : ha && Ha ? (f(d, "Android 4.4;") ? X = {min:2.3} : 4 <= Q(T) ? X = T : X = {min:2.2}, g = X) : ha && Aa ? (T ? X = T : X = {min:1.6}, g = X, f(d, "Tablet") ? W = !0 : ca = !0) : T ? (g = 
                                                                                      T, ha = !0) : Zb && Pd || Qd || Rd ? (nb = !0, Ra ? X = {min:4.4} : jb && !Sc || Nc || Oc ? X = {min:4} : (X = T = void 0 !== Gc.touchAction ? {min:5} : cc ? 4.4 : Jc ? ia.connection ? p.searchBoxJavaBridge_ || jb ? nc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Hc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Rc && (q = "Samsung", t = Rc)), g = X, ha = !0) : Ud ? (g = {min:5}, nb = ha = !0) : Zb && (f(d, "Ubuntu") ? 
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
  ka || ha && nb && Nd ? h = "FireOS" : ha && (h = h || "Android");
  qb && (h = "WindowsPhone");
  q || (U = U || ha, Aa ? (q = U || ob || ca || W ? "PrestoMobile" : "Presto", t = Hd) : ib ? ((X = Va(V, "Trident/") + 4) && X !== ba && (M = "IEHost", P = X), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), ob || ca || W || Xc ? q = "TridentMobile" : Yc && 5 <= ba ? (q = "Tasman", M = "MacIE", P = ba) : (q = "Trident", Yc && (M = "MacIE", P = ba)), t = ba) : $b ? (q = qb ? "EdgeMobile" : "EdgeHTML", t = k(V, "Edge/")) : ac ? (q = "Goanna", 
  t = ac) : Ha ? (q = U ? "Fennec" : "Gecko", t = ja || Id) : Ra ? (q = "Samsung", t = Ra) : (B = Wc || k(d, "NetFront/")) ? (q = "NetFront", t = B) : (B = k(d, "iCab")) ? (q = "iCab", t = B) : (B = rc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Kc && za) ? (q = "OperaMini", t = B, h || (f(d, "iPhone") ? oa = "iPhone" : f(d, "iPad") ? oa = "iPad" : f(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Xb ? (q = "UCWEB", t = Ed) : Ld ? (q = "KHTML", t = Sb) : ha && Sc ? (q = "AOSP", t = T) : jb || 
  Nc || Oc ? (q = U ? "ChromiumMobile" : "Chromium", t = Qa) : ha && cc ? (q = "ChromeWebView", t = 5 > Q(T) ? T : Qa) : ha && (za || nb) ? (q = "AOSP", t = T) : Qa ? (q = U ? "ChromiumMobile" : "Chromium", t = Qa) : na && (q = "WebKit", t = na));
  h && (w.PLATFORM = h, g ? (w.PLATFORM_VERSION = sc(g), w[h] = g === g + "" ? Q(g) : g) : w[h] = !0);
  q && (w.ENGINE = q, t ? (w.ENGINE_VERSION = sc(t), w[q] = t === t + "" ? Q(t) : t) : w[q] = !0, M || (M = q, P = t));
  var Ma = od, Ia = [], td = !!F.getElementsByTagName, N = F.body, va = N.style, C = w.Trident || w.TridentMobile, rb = w.Tasman, Zc = w.EdgeHTML || w.EdgeMobile, $c = w.Presto || w.PrestoMobile, sb = w.Gecko, tb = w.Goanna, db = w.WebKit, hb = w.SafariMobile || w.iOSWebView, Yd = w.OperaMini && w.UCWEB, fc = w.Win32 || w.Win64, Zd = Q(ia.userAgent.split("Edg/")[1]), ad = Q(ia.appVersion.split("Trident/")[1]) + 4;
  C || rb || (new oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var bd = F.scripts, $d = (rb ? "ie5mac" : 5.5 > C ? "ie5win" : 6 > C ? "ie55" : 10 > C ? "ie" + (C | 0) : "modern") + ".css", cd = 0 === location.href.indexOf("https"), Ya = [], wc, Ab = 0, gc, Pa, fa, ae = qa(va.transform) ? "transform" : qa(va["-o-transform"]) ? "-o-transform" : qa(va["-ms-transform"]) ? "-ms-transform" : qa(va["-moz-transform"]) ? "-moz-transform" : qa(va["-webkit-transform"]) ? "-webkit-transform" : "";
  var Ja = bd[bd.length - 1].src.split("/");
  --Ja.length;
  var be = Ja.join("/");
  0 <= "http: https:".indexOf(Ja[0]) && Ja.splice(0, 3);
  Ja = Ja.join("/");
  var la = Array.prototype;
  la.pop || (la.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  la.push || (la.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  la.shift || (la.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  la.splice || (la.splice = function(a, b) {
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
  la.indexOf || (la.indexOf = function(a, b) {
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
  var hc, ic = [];
  Ia.push(function() {
    ub(function() {
      (hc = p.logger || F.all.logger) || alert("#logger not found!");
      for (hc ? u = function(a) {
        ea(hc, "P", null, null, a);
      } : p.console && (u = console.log); ic.length;) {
        u(ic.shift());
      }
    });
  });
  u = function(a) {
    ic.push(a);
  };
  var ed = function(a) {
    Xa.length || (Ca = setInterval(Wa, uc));
    Xa.push({f:a, g:++dd});
    return dd;
  };
  var Xa = [], uc = 999, dd = 0, Ca;
  if (5 > C || rb) {
    p._wdb_onlooptimer = Wa, Wa = "_wdb_onlooptimer()";
  }
  Ia.push(function() {
    6.1 > hb && fd(qd);
    vb(tc);
  });
  var I = function(a, b, c) {
    ma.length || (wa = xb(Ka, La));
    ma.push({f:a, p:b, g:++gd, t:new pa - 0 + (La < c ? c : La)});
    return gd;
  };
  var hd = function(a) {
    for (var b = ma.length, c; c = ma[--b];) {
      if (c.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ma = [], La = 64, gd = 0, wa;
  if (5 > C || rb) {
    p._wdb_ontimer = Ka, Ka = "_wdb_ontimer()";
  }
  Ia.push(function() {
    6.1 > hb && fd(rd);
    vb(vc);
  });
  var Ba = p.matchMedia, Da;
  Ya.push(function() {
    Da = ea(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var ub = function(a) {
    Ya.push(a);
  };
  var vb = function(a) {
    id.push(a);
  };
  var id = [], zb = p.onload, jd = p.onunload;
  onload = yb;
  onunload = function(a) {
    var b;
    jd && (b = jd(a));
    da(id, a);
    onunload = Ma;
    return b;
  };
  var jc = function(a) {
    xc.push(a);
  };
  var xc = [];
  ub(function() {
    ed(sd);
  });
  var ce = function(a) {
    Ua.push(a);
  };
  var Ua = [], Na, Cb, Bb;
  if (10 <= C || Zc || fc && Zd) {
    Ba("(-ms-high-contrast:black-on-white)").addListener(function(a) {
      Na = Cb = a.matches;
      da(Ua, Za());
    }), Ba("(-ms-high-contrast:white-on-black)").addListener(function(a) {
      Na = Bb = a.matches;
      da(Ua, Za());
    }), Ba("(-ms-high-contrast:active)").addListener(function(a) {
      Na = a.matches;
      da(Ua, Za());
    });
  } else {
    if (10 > C || fc && (44 <= sb || tb)) {
      var wb = function() {
        function a(l) {
          return "#ffffff" === l || "rgb(255,255,255)" === l;
        }
        var b = F.defaultView, c = Ab, e = b ? b.getComputedStyle(Da, null) : Da.currentStyle;
        b = (e && e.color || "").split(" ").join("");
        e = (e && e.backgroundColor || "").split(" ").join("");
        if (b) {
          return Na = "#123456" !== b && "rgb(18,52,86)" !== b, Cb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Bb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== Za() && da(Ua, Ab), !0;
        }
      };
      ub(function() {
        Da.style.color = "#123456";
        Da.style.backgroundColor = "#123456";
        60 > sb || tb ? I(wb) : wb() && ed(wb, 1000);
        wb = null;
      });
    }
  }
  var de = [];
  Ba && Ba("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(de, a.matches);
  });
  var kc = [];
  p.onbeforeprint ? (onbeforeprint = function() {
    da(kc, !0);
  }, onafterprint = function() {
    da(kc, !1);
  }, vb(function() {
    onbeforeprint = onafterprint = Ma;
  })) : Ba && Ba("print").addListener(function(a) {
    da(kc, a.matches);
  });
  var fd = function(a) {
    kd.push(a);
  };
  var kd = [], lc = p.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    yb || da(kd);
    return b;
  };
  vb(function() {
    onscroll = lc = Ma;
  });
  var ee = $a("html")[0];
  var Eb = $a("head")[0];
  var ab;
  var Fb = void 0;
  var Bc = {};
  fa || jc(function(a) {
    a ? qa(fa) || (fa = 1.8 <= sb || tb || 8 <= C || Zc || 530 <= db || 3.2 <= hb, fa || (a = ea(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), fa = 6 <= a.offsetWidth, xa(a))) : fa = void 0;
  });
  var cb;
  9 > C && ub(function(a) {
    a = ea(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    xa(a);
  });
  var wd = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || I(a, !1)) : e = I(b));
    }
    if (ld) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!C || 11 === C || 11 === ad) && c.width || l || (l = !0, e && hd(e), e = I(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && hd(e);
        $c && !c.complete ? e = I(a, !1) : (Pa = !0, I(a, !0));
      };
      c.src = ld;
      8 > $c && c.complete ? (Pa = !0, I(a, !0)) : l || (e = I(b));
    } else {
      u("[imageTest] TEST_IMAGE_URL is undefined!"), I(a, !1);
    }
  };
  var ld = cd ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var vd = Ac;
  var Cc = "bad_" + (new pa - 0) + "_";
  for (11 === ad && 5.5 > C && ea(Eb, "link", {href:be + "/" + $d, rel:"stylesheet", type:"text/css"}); Ia.length;) {
    Ia.shift()();
  }
  Ia = null;
  var Y = String.fromCharCode, H = cd ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > C || fc && (44 <= sb || tb)) && ce(function(a) {
    bb("jsHcm");
    bb("jsHcmWob");
    bb("jsHcmBow");
    if (a) {
      switch((ae || 9 === C || 5.5 <= C && 9 > C && gc) && ra(N, "jsCanRotate"), a) {
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
      bb("jsCanRotate");
    }
  });
  var Kb = [], Jb, Lb, md;
  jc(function(a) {
    function b(v) {
      var m = v.getAttribute("pbtip") || "", n = m.charAt(0), K = "_" === n;
      m = K ? m.charAt(2) : n;
      n = K ? "Btm" : "";
      var L = v.getAttribute("title") || "";
      ra(v, "pbTipPos" + m.toUpperCase());
      ea(v, "div", {className:"pbTip" + n}, {width:L.length + l + "em"}, L);
      ea(v, "div", {className:"pbTail" + n});
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
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + K]}, ab = 1, G = ea(v, "b", m, 0, L), e(v), e(G)) : e(v);
      }
    }
    function e(v) {
      Z || D || Ea(v, "pbChrCS") && Kb.push(v);
    }
    if (a && !md) {
      md = !0;
      var l = 6 > C ? 1 : 0;
      a = $a("SAMP");
      var D = 9 > C, z = 5 <= C && 6 > C, y, G, J, x;
      gc && ra(N, "pbLCD-AX");
      if (a.length) {
        var Z = void 0 !== va.opacity || void 0 !== va["-moz-opacity"] || void 0 !== va["-khtml-opacity"], O = !Z && !D && !0, S = !fa || O || void 0;
        for (J = -1; y = a[++J];) {
          if (Ea(y.parentElement || y.parentNode, "pbLCD")) {
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
                  Yd ? R.setAttribute("href", "javascript:void(0)") : R.onclick = ud;
                  break;
                case "B":
                  S && c(R);
              }
            }
          }
        }
        Kb.length ? (setInterval(Dc, 500), fa ? Fa([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Fa([".pbChrCS", "background-position:0 -51px"])) : Dc = null;
        O && (fa ? Fa([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Fa([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > db && (ee.onclick = function(a) {
    if (Lb) {
      return Lb = !1, a.preventDefault(), !1;
    }
  });
  6 === C && (new oc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Qb = ya[7], Fc = ya[30], yd = ya[113], fb = Y(8337) + Y(8331), Rb = Y(160), Cd = Y(8194), Ad = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Bd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), zd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Fc + ya[31]).split(""), ta = 
  [], Ob = [], Oa, Pb;
  jc(function(a) {
    if (a && !Pb) {
      var b = F.all || $a("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ea(c, "pbList") ? gb(c) : Ea(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && gb(c, !0);
      }
      ta.length && (u("[pbList] " + ta.length + " elements found. WebFont test start."), eb());
      Pb = !0;
    }
  });
  nd.prettify = gb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

