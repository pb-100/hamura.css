PB100 = {};
(function(ld, u, q, md, F, ja, nc, Q, oc, pc, Yd, wb, nd, qa, Zd) {
  function xb(a, b) {
    var c = Q(a.split(b)[1]);
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
  function w() {
  }
  function ra(a) {
    return void 0 !== a;
  }
  function Ya() {
    for (var a, b = 0; b < Za.length; ++b) {
      a = Za[b], a.f();
    }
  }
  function od() {
    Ea && (tc(), Ea = setInterval(Ya, uc));
  }
  function tc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function Oa() {
    for (var a, b = 0, c = new qa - 0; b < ma.length;) {
      c < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    ya = ma.length ? wb(Oa, Pa) : 0;
  }
  function pd() {
    ya && (vc(), ya = wb(Oa, Pa));
  }
  function vc() {
    ya && (ya = nd(ya));
  }
  function da(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function yb(a) {
    var b;
    zb && (b = zb(a));
    da($a, a);
    onload = Fa;
    $a = yb = zb = onload = null;
    return b;
  }
  function wc() {
    var a = 9 === Ga.offsetWidth;
    xc !== a && da(yc, xc = a);
  }
  function Ha() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = F.defaultView, c = Ab, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Qa = "#123456" !== b && "rgb(18,52,86)" !== b, Bb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Cb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== ab() && da(Ra, Ab), !0;
    }
  }
  function ab() {
    return Ab = Qa ? Cb ? 2 : Bb ? 3 : 1 : 0;
  }
  function bb(a) {
    var b = b || F;
    return qd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function za(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Db(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ea(a, b, c, e, l) {
    function D(G, I) {
      for (var x in I) {
        switch(x) {
          case "class":
          case "className":
            sa(G, I[x]);
            break;
          default:
            G.setAttribute(x, I[x]);
        }
      }
    }
    function z(G, I) {
      var x = G.style, Z;
      for (Z in I) {
        x[Z] = I[Z];
      }
    }
    if ("style" === b) {
      var y = !0;
      b = Db("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Db(b);
    }
    cb ? (2 === cb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    cb = 0;
    c && D(b, c);
    e && z(b, e);
    l && !y && b.appendChild(F.createTextNode(l));
    return b;
  }
  function Ia(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function sa(a, b) {
    var c;
    if (!Ia(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function db(a) {
    if (Ia(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function zc(a) {
    a = ea(Eb, "style", {type:"text/css", media:"all"}, 0, a);
    Fb = a.sheet || a.styleSheet;
  }
  function Ja(a) {
    for (var b = Fb, c, e, l = "", D; a.length;) {
      c = a.shift(), e = a.shift(), D = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(D, b.cssRules.length) : l += D;
    }
    l && zc(l);
  }
  function Ac(a) {
    function b(e) {
      eb = e;
      c.onload = c.onerror = Fa;
      J(a, e);
    }
    if (ra(eb)) {
      w("[dataUriTest] already done : " + eb), J(a, eb);
    } else {
      if (8 > C) {
        w("[dataUriTest] trident < 8 : false"), J(a, !1);
      } else {
        w("[dataUriTest] start!");
        var c = new Image;
        c.onerror = function() {
          w("[dataUriTest] no DATA URI!");
          c.onload = c.onerror = Fa;
          b(!1);
        };
        c.onload = function() {
          w("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Bc(a, b, c, e, l, D) {
    function z() {
      var r = '1.6em "' + b + '"';
      w("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(r).then(function(A) {
        w("[webFontTest] fonts.check() : " + F.fonts.check(r, "i") + ", fonts.length : " + A.length);
        x(b) ? J(a, Ka) : (w("[webFontTest] mesureWebFont() : false"), G(!0));
      }, function(A) {
        w("[webFontTest] fonts.load() rejected! " + A);
        Ac(Z);
      });
    }
    function y(r) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (R = new qa - 0, !1) : r < new qa - R;
    }
    function G(r) {
      r && (w("[webFontTest] testWebFont start."), R = new qa - 0);
      x(b) ? (w("[webFontTest] testWebFont mesurement success : " + Ka), a(Ka)) : y(ta) ? (w("[webFontTest] testWebFont timeout!"), v ? a(0) : 9 > C ? J(a, 0) : Ac(Z)) : J(G);
    }
    function I() {
      var r = -1, A;
      I = null;
      K = ["sans-serif", "serif"];
      m = ea(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; A = K[++r];) {
        m.style.fontFamily = A, L[A] = m.offsetWidth;
      }
    }
    function x(r) {
      var A = 0, aa = -1, Gb, Hb, Ib = 0;
      I && I();
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
      za(m);
      return Ka = A + Ib;
    }
    function Z(r) {
      w("[webFontTest] testDataUriComplete : " + r);
      (v = r) ? O(!0) : a(0);
    }
    function O(r) {
      r && (R = new qa - 0);
      for (A in c) {
        if (x(A)) {
          w("[webFontTest] success! " + A);
          n = ea(N, "div", {"aria-hidden":"true", className:e, id:e});
          r = c[A];
          var A = Fb, aa = Cc.all || 0;
          A ? A.addImport ? A.addImport(r, aa) : A.insertRule && A.insertRule('@import "' + r + '"', aa) : zc('@import "' + r + '"');
          Cc.all = ++aa;
          J(S, !0);
        } else {
          y(100) ? (w("[webFontTest] timeout! " + A), delete c[A], J(O, !0)) : J(O);
        }
        return;
      }
      a(0);
    }
    function S(r) {
      r && (w("[webFontTest] testImportedCssReady start!"), b = b.replace(rd, ""), w("[webFontTest] targetWebFontName : " + b), R = new qa - 0);
      1 < n.offsetWidth ? (w("[webFontTest] testImportedCssReady ended."), za(n), ta = 100, J(G, !0)) : y(ta) ? (w("[webFontTest] testImportedCssReady timeout!"), za(n), a(0)) : J(S);
    }
    var ta = D || 5000, R, v, m, n, K, L, Ka;
    (function() {
      var r;
      if (u.MeeGo || 2.2 > u.AOSP || u.WebOS || u.UCWEB || 10 > u.TridentMobile || u.NDS || u.NDSi || u.N3DS) {
        return !1;
      }
      if (6 > C) {
        return !0;
      }
      var A = ea(Eb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), aa = (aa = A.sheet || A.styleSheet) ? (r = 10 <= C ? aa.cssRules : aa.rules || aa.cssRules) && (r = r[0]) ? r.cssText : aa.cssText || "" : "";
      r = 0 < aa.indexOf("src") && 0 === aa.indexOf("@font-face");
      za(A);
      return r;
    })() ? (w("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > fb ? (w("[webFontTest] No native font loader."), G(!0)) : (w("[webFontTest] Use Native font loader."), z())) : (w("[webFontTest] maybeCanWebFont() : false"), J(a, 0));
  }
  function Dc() {
    Jb = !Jb;
    for (var a = -1, b; b = Kb[++a];) {
      b.style.visibility = Jb ? "" : "hidden";
    }
  }
  function sd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Lb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function gb() {
    gb = null;
    td(Mb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:hb}, 5000);
  }
  function Mb(a) {
    Sa = a;
    w("[pbList] WebFont test result : " + !!a);
    Sa ? Nb() : Ta ? Ec(!0) : ra(Ta) ? Nb() : ud(Ec);
  }
  function Ec(a) {
    a && (w("[pbList] Fallback start!"), sa(N, "pbList-noWebFont"), fa ? Ja([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ja([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > C ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Nb();
  }
  function Nb() {
    for (Mb = Bc = null; va.length;) {
      ib(va.shift(), Ob.shift());
    }
    w("[pbList] complete.");
  }
  function ib(a, b) {
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
      -1 === va.indexOf(a) && (va.push(a), Ob.push(b), Pb && gb && gb());
    } else {
      var l = va.indexOf(a);
      0 <= l && va.splice(l, 1) && Ob.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== Sa && (l = l.split(hb).join(Fc)), b ? a.data = l : vd(l.split("\r").join("").split("&yen;").join(wd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Qb).split("&amp;").join("&"), a);
      }
    }
  }
  function vd(a, b) {
    function c(m, n) {
      for (var K = ""; n;) {
        n & 1 && (K += m), n >>= 1, m += m;
      }
      return K;
    }
    function e(m, n, K) {
      for (var L, Ka = -1, r, A; L = n[++Ka];) {
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
    var D = " area line str cmd fnc syb".split(" "), z = [], y = "", G = -1, I, x;
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
        x === Qb || I ? (y += "~", x === Qb && (I = !I)) : y += x;
      }
      y = e(y, xd, "^");
      y = e(y, yd, "{");
      y = e(y, zd, "}");
    }
    G = 0;
    for (I = a.length; G < I; ++G) {
      x = a.charAt(G);
      var Z = x === Rb, O = " " === x;
      x = Z ? " " : x;
      var S = y.charAt(G), ta = R, R = "|" === S;
      S = D["+|~{}^".indexOf(S) + 1];
      if ("\n" !== x) {
        if (Sa || !Ta) {
          8 > C && O && (x = G === I - 1 ? Rb : Ad), 2 === Sa && a.substr(G, 2) === hb && (x = hb, ++G), O = O && "str" === S ? ' class="pbList-strsp"' : Z ? "" : !O && S ? ' class="pbList-' + S + '"' : "";
        } else {
          var v = Aa.indexOf(x);
          v = -1 === v ? "" : Aa.indexOf(x).toString(16).toUpperCase();
          v = (v = 1 === v.length ? "0" + v : v) ? "pbChr" + v : "";
          O = O && "str" === S ? ' class="pbList-strsp"' : O || !v ? "" : S ? ' class="' + (v ? v + " " : "") + "pbList-" + S + '"' : ' class="' + v + '"';
        }
        ta && Z && (fb || jb) && (x = Rb);
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
      za(b);
    }
  }
  var p, t, d = ja.userAgent, T = ja.appVersion, Sb = Q(T) | 0, E = ja.platform, Tb = F.documentElement, Gc = Tb && Tb.style, Ub = F.documentMode, Vb = nc.width, Wb = nc.height, Hc = q.HTMLAudioElement, Ic = q.performance, Jc = q.Int8Array, Bd = void 0 !== q.ontouchstart, Ba = k(T, "Version/") || k(d, "Version/"), La = void 0 !== Gc.MozAppearance, Kc = q.operamini, Xb = g(d, "UCWEB"), Cd = Xb && k(d, " U2/"), Dd = Xb && k(d, "; wds "), Yb = k(d.split("_").join("."), "; iPh OS "), Ed = k(d, "; Adr "), 
  Lc = g(T, "YJApp-ANDROID"), ha = g(E, "Android") || La && g(T, "Android") || Lc, U = k(E, "Android ") || k(T, "Android ") || k(d, "Android ") || Ed, Zb = g(E, "Linux"), $b = "MacIntel" === E && void 0 !== ja.standalone, Ca = !Kc && q.opera, Fd = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : rc(k(d, "Opera "), Ba, "" + Sb)), Mc = q.opr, kb = !Ca && (F.all || Ub), ba = kb && (Ub ? Ub : q.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  q.attachEvent ? 5 : 4), ac = !kb && Tb.msContentZoomFactor, lb = !ac && q.chrome, bc = La && k(d, "Goanna/"), ka = !bc && La && k(d, "rv:"), Gd = k(d, "Firefox/"), Hd = k(d, "Opera/"), Id = q.FNRBrowser, na = xb(d, "AppleWebKit/"), Ua = k(d, "Chrome/"), Nc = k(d, "OPR/"), Jd = k(T, "KHTML/"), Kd = k(d.toLowerCase(), "iris"), Va = xb(d, "SamsungBrowser/"), Wa;
  if (Wa = !Va) {
    a: {
      for (var Oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      mb, cc = Oc.length; mb = Oc[--cc];) {
        if (g(d, mb)) {
          Wa = 2 > Q(Ba) ? Ba : 0.9;
          break a;
        }
      }
      var Pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (cc = Pc.length; mb = Pc[--cc];) {
        if (g(d, mb)) {
          Wa = Ba;
          break a;
        }
      }
      Wa = void 0;
    }
  }
  var Qc = Wa, Rc = lb && 534.3 >= na, Sc = Bd && (na || La) && (0 === E.indexOf("Linux armv") || 0 === E.indexOf("Linux aarch") || "Linux i686" === E) && g(d, "Linux x86_64") || !U && Lc, Tc = q.puffinDevice, nb = Tc && Tc.clientInfo, Xa = nb && "iOS" === nb.os && nb.osVersion, Ld = Xa && nb.model, dc = !ba && F.registerElement, Md = !ba && F.execCommand, Nd = Zb && dc && "11.0.696.34" === Ua, Od = q._firefoxTV_playbackStateObserverJava, wa, ia, B;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var f = Hd;
    } else {
      if ("New Nintendo 3DS" === E || g(d, "iPhone OS 6_0") && 320 === Vb && 240 === Wb) {
        h = "New3DS", f = k(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === E) {
          h = "N3DS", f = k(d, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === E) {
            h = "Swicth", f = k(T, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === E) {
              h = "WiiU", f = k(T, "NintendoBrowser/"), na = k(T, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === E) {
                h = "Wii";
                f = k(d, "Wii; U; ; ");
                var M = h;
                var P = f;
              } else {
                if (B = k(d, "PlayStation Vita ")) {
                  h = "PSVita", f = B, M = h, P = B;
                } else {
                  if (B = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = B;
                    var Uc = 3.3;
                    M = h;
                    P = B;
                  } else {
                    if (B = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = B, M = h, P = B, 0 > qc("4.10", B) && (p = "Sony", t = B);
                    } else {
                      if (g(d, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(d, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Sb && g(d, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Uc = 3.4;
                            M = h;
                            P = 2;
                            var ob = !0;
                          } else {
                            if (0 === E.indexOf("iP") || Yb || Xa || $b) {
                              if (Xa) {
                                switch(f = Xa, Ld.substr(0, 4)) {
                                  case "iPho":
                                    var oa = "iPhone";
                                    var ca = !0;
                                    break;
                                  case "iPad":
                                    oa = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    oa = "iPod";
                                    var Vc = !0;
                                }
                              } else {
                                Yb ? f = Yb : f = k(T.split("_").join("."), "OS ");
                                f || (ia = !0);
                                if (!f || Id) {
                                  f = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ja.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : oc.isNaN ? 9.2 : q.SharedWorker ? Ic && Ic.now ? 8.0 : 8.4 : Md ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Jc ? 4.3 : Hc ? 4.1 : 3.2;
                                }
                                var W = Vb === 1.5 * Wb || 1.5 * Vb === Wb;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === E.indexOf("iPad") || $b ? (oa = "iPad", V = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", Vc = !0);
                              }
                              var ec;
                              if (ec = !Xa) {
                                var fc;
                                if (!(fc = ja.standalone)) {
                                  var pb;
                                  if (pb = V || 12 > f) {
                                    a: {
                                      for (var Pd in F) {
                                        if ("webkitFullscreenEnabled" === Pd) {
                                          pb = !0;
                                          break a;
                                        }
                                      }
                                      pb = void 0;
                                    }
                                  }
                                  fc = pb;
                                }
                                ec = fc || 11 <= f && 13 > f && ja.mediaDevices;
                              }
                              ec ? (p = "SafariMobile", M = "Safari", P = f) : p = "iOSWebView";
                              h = "iOS";
                              t = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", p = "AOSP", t = 2.2, M = p, P = t, ha = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", t = 2.2, M = p, P = t;
                                } else {
                                  if (B = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = B;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2.0 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, g(d, "Mobile") ? ca = !0 : g(d, "Tablet") && (V = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), M = h, P = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (B = k(d, "Tizen ")) {
                                          h = "Tizen", f = B, M = "Samsung", P = Va, p = M, t = P, ca = !0;
                                        } else {
                                          if (B = k(d, "Windows Phone ") || k(T, "Windows Phone OS ") || Dd) {
                                            var qb = !0;
                                            f = B;
                                            ca = !0;
                                          } else {
                                            if (ac && "ARM" === E) {
                                              qb = !0, f = 10, ia = ca = !0;
                                            } else {
                                              if (kb && g(T, "ZuneWP")) {
                                                qb = !0, f = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ia = ca = !0;
                                              } else {
                                                if (g(d, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (g(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (g(d, "KFMUWI")) {
                                                      var pa = !0;
                                                      f = 6.3;
                                                      var X = V = !0;
                                                    } else {
                                                      if (g(d, "KFKAWI")) {
                                                        pa = !0, f = 6, X = V = !0;
                                                      } else {
                                                        if (g(d, "KFSUWI") || g(d, "KFAUWI") || g(d, "KFDOWI")) {
                                                          pa = !0, f = 5, X = V = !0;
                                                        } else {
                                                          if (g(d, "KFGIWI")) {
                                                            pa = !0, f = 5, X = V = !0;
                                                          } else {
                                                            if (g(d, "KFARWI") || g(d, "KFSAWA") || g(d, "KFSAWI")) {
                                                              pa = !0, f = 5 <= Q(U) ? 5 : 4, X = V = !0;
                                                            } else {
                                                              if (g(d, "KFSOWI") || g(d, "KFTHWA") || g(d, "KFTHWI") || g(d, "KFAPWA") || g(d, "KFAPWI")) {
                                                                pa = !0, f = 3, X = V = !0;
                                                              } else {
                                                                if (g(d, "KFOT") || g(d, "KFTT") || g(d, "KFJWA") || g(d, "KFJWI")) {
                                                                  pa = !0, f = 2, X = V = !0;
                                                                } else {
                                                                  if (g(d, "Kindle Fire")) {
                                                                    pa = !0, f = 1, X = V = !0;
                                                                  } else {
                                                                    if (B = k(d, "Kindle/")) {
                                                                      h = "Kindle", f = B, p = "AOSP", t = 2.2, M = p, P = t;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Od) {
                                                                        pa = !0, f = U, X = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Kd) {
                                                                              h = "WindowsMobile", ob = !0;
                                                                            } else {
                                                                              if ("WinCE" === E) {
                                                                                h = E, ob = !0;
                                                                              } else {
                                                                                if ("Win16" === E || "Win32" === E || "Win64" === E) {
                                                                                  h = E, f = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                } else {
                                                                                  if (0 === E.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === E ? "MacPPC" : E;
                                                                                    if (B = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                      f = B;
                                                                                    }
                                                                                    var Wc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ba, ca = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ha && La ? (g(d, "Android 4.4;") ? W = {min:2.3} : 4 <= Q(U) ? W = U : W = {min:2.2}, f = W, Sc && (ia = !0)) : ha && Ca ? (U ? W = U : (W = {min:1.6}, ia = !0), f = W, g(d, "Tablet") ? V = 
                                                                                    !0 : ca = !0) : U ? (f = U, ha = !0) : Zb && Sc ? (wa = !0, Va ? W = {min:4.4} : lb && !Rc || Mc || Nc ? W = {min:4} : (W = U = void 0 !== Gc.touchAction ? {min:5} : dc ? 4.4 : Jc ? ja.connection ? q.searchBoxJavaBridge_ || lb ? oc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Hc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Qc && (p = "Samsung", t = Qc)), f = W, ha = !0) : Nd ? (f = {min:5}, wa = ha = !0) : Zb && 
                                                                                    (g(d, "Ubuntu") ? h = "Ubuntu" : (B = k(d, "Mint/")) ? (h = "Mint", f = B) : (B = k(d, "Fedora/")) ? (h = "Fedora", f = B) : h = g(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  pa && (h = "FireOS");
  ha && (h = h || "Android");
  qb && (h = "WindowsPhone");
  p || (X = X || ha, Ca ? (p = X || ob || ca || V ? "PrestoMobile" : "Presto", t = Fd) : kb ? ((W = xb(T, "Trident/") + 4) && W !== ba && (M = "IEHost", P = W), 10 <= ba && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = ba), ob || ca || V || Vc ? p = "TridentMobile" : Wc && 5 <= ba ? (p = "Tasman", M = "MacIE", P = ba) : (p = "Trident", Wc && (M = "MacIE", P = ba)), t = ba) : ac ? (p = qb ? "EdgeMobile" : "EdgeHTML", t = k(T, "Edge/")) : bc ? (p = "Goanna", 
  t = bc) : La ? (p = X ? "Fennec" : "Gecko", t = ka || Gd) : Va ? (p = "Samsung", t = Va, wa && (ia = !0)) : (B = Uc || k(d, "NetFront/")) ? (p = "NetFront", t = B) : (B = k(d, "iCab")) ? (p = "iCab", t = B) : (B = rc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Kc && Ba) ? (p = "OperaMini", t = B, h || (g(d, "iPhone") ? oa = "iPhone" : g(d, "iPad") ? oa = "iPad" : g(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Xb ? (p = "UCWEB", t = Cd) : Jd ? (p = "KHTML", t = Sb) : ha && Rc ? (p = "AOSP", 
  t = U, wa && (ia = !0)) : lb || Mc || Nc ? (p = X ? "ChromiumMobile" : "Chromium", t = Ua, wa && (ia = !0)) : ha && dc ? (p = "ChromeWebView", t = 5 > Q(U) ? U : Ua, wa && (ia = !0)) : ha && (Ba || wa) ? (p = "AOSP", t = U, wa && (ia = !0)) : Ua ? (p = X ? "ChromiumMobile" : "Chromium", t = Ua) : na && (p = "WebKit", t = na));
  h && (u.PLATFORM = h, f ? (u.PLATFORM_VERSION = sc(f), u[h] = f === f + "" ? Q(f) : f) : u[h] = !0);
  p && (u.ENGINE = p, t ? (u.ENGINE_VERSION = sc(t), u[p] = t === t + "" ? Q(t) : t) : u[p] = !0, M || (M = p, P = t));
  if (ia || $b) {
    u.PC_MODE = !0;
  }
  var Fa = md, Ma = [], qd = !!F.getElementsByTagName, N = F.body, xa = N.style, C = u.Trident || u.TridentMobile, rb = u.Tasman, Xc = u.EdgeHTML || u.EdgeMobile, Yc = u.Presto || u.PrestoMobile, sb = u.Gecko, tb = u.Goanna, fb = u.WebKit, jb = u.SafariMobile || u.iOSWebView, Qd = u.OperaMini && u.UCWEB, gc = u.Win32 || u.Win64, Rd = Q(ja.userAgent.split("Edg/")[1]), Zc = Q(ja.appVersion.split("Trident/")[1]) + 4;
  C || rb || (new pc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var $c = F.scripts, Sd = (rb ? "ie5mac" : 5.5 > C ? "ie5win" : 6 > C ? "ie55" : 10 > C ? "ie" + (C | 0) : "modern") + ".css", ad = 0 === location.href.indexOf("https"), $a = [], xc, Ab = 0, hc, Ta, fa, Td = ra(xa.transform) ? "transform" : ra(xa["-o-transform"]) ? "-o-transform" : ra(xa["-ms-transform"]) ? "-ms-transform" : ra(xa["-moz-transform"]) ? "-moz-transform" : ra(xa["-webkit-transform"]) ? "-webkit-transform" : "";
  var Na = $c[$c.length - 1].src.split("/");
  --Na.length;
  var Ud = Na.join("/");
  0 <= "http: https:".indexOf(Na[0]) && Na.splice(0, 3);
  Na = Na.join("/");
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
  var ic, jc = [];
  Ma.push(function() {
    ub(function() {
      (ic = q.logger || F.all.logger) || alert("#logger not found!");
      for (ic ? w = function(a) {
        ea(ic, "P", null, null, a);
      } : q.console && (w = console.log); jc.length;) {
        w(jc.shift());
      }
    });
  });
  w = function(a) {
    jc.push(a);
  };
  var cd = function(a) {
    Za.length || (Ea = setInterval(Ya, uc));
    Za.push({f:a, g:++bd});
    return bd;
  };
  var Za = [], uc = 999, bd = 0, Ea;
  if (5 > C || rb) {
    q._wdb_onlooptimer = Ya, Ya = "_wdb_onlooptimer()";
  }
  Ma.push(function() {
    6.1 > jb && dd(od);
    vb(tc);
  });
  var J = function(a, b, c) {
    ma.length || (ya = wb(Oa, Pa));
    ma.push({f:a, p:b, g:++ed, t:new qa - 0 + (Pa < c ? c : Pa)});
    return ed;
  };
  var fd = function(a) {
    for (var b = ma.length, c; c = ma[--b];) {
      if (c.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ma = [], Pa = 64, ed = 0, ya;
  if (5 > C || rb) {
    q._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  Ma.push(function() {
    6.1 > jb && dd(pd);
    vb(vc);
  });
  var Da = q.matchMedia, Ga;
  $a.push(function() {
    Ga = ea(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var ub = function(a) {
    $a.push(a);
  };
  var vb = function(a) {
    gd.push(a);
  };
  var gd = [], zb = q.onload, hd = q.onunload;
  onload = yb;
  onunload = function(a) {
    var b;
    hd && (b = hd(a));
    da(gd, a);
    onunload = Fa;
    return b;
  };
  var kc = function(a) {
    yc.push(a);
  };
  var yc = [];
  ub(function() {
    wc();
    cd(wc);
  });
  var Vd = function(a) {
    Ra.push(a);
  };
  var Ra = [], Qa, Bb, Cb;
  10 <= C || Xc || gc && Rd ? (Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Qa = Bb = a.matches;
    da(Ra, ab());
  }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Qa = Cb = a.matches;
    da(Ra, ab());
  }), Da("(-ms-high-contrast:active)").addListener(function(a) {
    Qa = a.matches;
    da(Ra, ab());
  }), Ha = null) : 10 > C || gc && (44 <= sb || tb) ? ub(function() {
    Ga.style.color = "#123456";
    Ga.style.backgroundColor = "#123456";
    60 > sb || tb ? Ha() : Ha() && cd(Ha, 1000);
    Ha = null;
  }) : Ha = null;
  var Wd = [];
  Da && Da("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(Wd, a.matches);
  });
  var lc = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    da(lc, !0);
  }, onafterprint = function() {
    da(lc, !1);
  }, vb(function() {
    onbeforeprint = onafterprint = Fa;
  })) : Da && Da("print").addListener(function(a) {
    da(lc, a.matches);
  });
  var dd = function(a) {
    id.push(a);
  };
  var id = [], mc = q.onscroll;
  onscroll = function(a) {
    var b;
    mc && (b = mc(a));
    yb || da(id);
    return b;
  };
  vb(function() {
    onscroll = mc = Fa;
  });
  var Xd = bb("html")[0];
  var Eb = bb("head")[0];
  var cb;
  var Fb = void 0;
  var Cc = {};
  fa || kc(function(a) {
    a && !ra(fa) && (fa = 1.8 <= sb || tb || 8 <= C || Xc || 530 <= fb || 3.2 <= jb, fa || (a = ea(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), fa = 6 <= a.offsetWidth, za(a)));
  });
  var eb;
  9 > C && ub(function(a) {
    a = ea(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    za(a);
  });
  var ud = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || J(a, !1)) : e = J(b));
    }
    if (jd) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!C || 11 === C || 11 === Zc) && c.width || l || (l = !0, e && fd(e), e = J(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && fd(e);
        Yc && !c.complete ? e = J(a, !1) : (Ta = !0, J(a, !0));
      };
      c.src = jd;
      8 > Yc && c.complete ? (Ta = !0, J(a, !0)) : l || (e = J(b));
    } else {
      w("[imageTest] TEST_IMAGE_URL is undefined!"), J(a, !1);
    }
  };
  var jd = ad ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var td = Bc;
  var rd = "bad_" + (new qa - 0) + "_";
  for (11 === Zc && 5.5 > C && ea(Eb, "link", {href:Ud + "/" + Sd, rel:"stylesheet", type:"text/css"}); Ma.length;) {
    Ma.shift()();
  }
  Ma = null;
  var Y = String.fromCharCode, H = ad ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  (10 > C || gc && (44 <= sb || tb)) && Vd(function(a) {
    db("jsHcm");
    db("jsHcmWob");
    db("jsHcmBow");
    if (a) {
      switch((Td || 9 === C || 5.5 <= C && 9 > C && hc) && sa(N, "jsCanRotate"), a) {
        case 1:
          sa(N, "jsHcm");
          break;
        case 2:
          sa(N, "jsHcmWob");
          break;
        case 3:
          sa(N, "jsHcmBow");
      }
    } else {
      db("jsCanRotate");
    }
  });
  var Kb = [], Jb, Lb, kd;
  kc(function(a) {
    function b(v) {
      var m = v.getAttribute("pbtip") || "", n = m.charAt(0), K = "_" === n;
      m = K ? m.charAt(2) : n;
      n = K ? "Btm" : "";
      var L = v.getAttribute("title") || "";
      sa(v, "pbTipPos" + m.toUpperCase());
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
          L = m, 3 === L.length && (L = L.substr(0, 2)), L = Aa[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        n = n.split(" ")[0];
        n = 10 - Q(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + K]}, cb = 1, G = ea(v, "b", m, 0, L), e(v), e(G)) : e(v);
      }
    }
    function e(v) {
      Z || D || Ia(v, "pbChrCS") && Kb.push(v);
    }
    if (a && !kd) {
      kd = !0;
      var l = 6 > C ? 1 : 0;
      a = bb("SAMP");
      var D = 9 > C, z = 5 <= C && 6 > C, y, G, I, x;
      hc && sa(N, "pbLCD-AX");
      if (a.length) {
        var Z = void 0 !== xa.opacity || void 0 !== xa["-moz-opacity"] || void 0 !== xa["-khtml-opacity"], O = !Z && !D && !0, S = !fa || O || void 0;
        for (I = -1; y = a[++I];) {
          if (Ia(y.parentElement || y.parentNode, "pbLCD")) {
            var ta = y.children;
            for (y = ta.length; y;) {
              var R = ta[--y];
              switch(R.tagName.toUpperCase()) {
                case "A":
                  if (S) {
                    for (fa || b(R), x = R.children.length; x;) {
                      c(R.children[--x]);
                    }
                  }
                  Qd ? R.setAttribute("href", "javascript:void(0)") : R.onclick = sd;
                  break;
                case "B":
                  S && c(R);
              }
            }
          }
        }
        Kb.length ? (setInterval(Dc, 500), fa ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Dc = null;
        O && (fa ? Ja([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > fb && (Xd.onclick = function(a) {
    if (Lb) {
      return Lb = !1, a.preventDefault(), !1;
    }
  });
  6 === C && (new pc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Qb = Aa[7], Fc = Aa[30], wd = Aa[113], hb = Y(8337) + Y(8331), Rb = Y(160), Ad = Y(8194), yd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), zd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), xd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Fc + Aa[31]).split(""), va = 
  [], Ob = [], Sa, Pb;
  kc(function(a) {
    if (a && !Pb) {
      var b = F.all || bb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? ib(c) : Ia(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && ib(c, !0);
      }
      va.length && (w("[pbList] " + va.length + " elements found. WebFont test start."), gb());
      Pb = !0;
    }
  });
  ld.prettify = ib;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

