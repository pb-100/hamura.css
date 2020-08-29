PB100 = {};
(function(kd, q, r, ld, F, la, mc, S, nc, oc, Wd, ub, md, qa, Xd) {
  function vb(a, b) {
    var c = S(a.split(b)[1]);
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
  function pc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var l = S(a[c]), C = S(b[c]);
      if (l !== C) {
        return l > C ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function qc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], l; b < c; ++b) {
      0 > pc(e, l = a[b]) && (e = l);
    }
    return e;
  }
  function rc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function v() {
  }
  function ra(a) {
    return void 0 !== a;
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function nd() {
    Ea && (sc(), Ea = setInterval(Za, tc));
  }
  function sc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function Oa() {
    for (var a, b = 0, c = new qa - 0; b < ma.length;) {
      c < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    ya = ma.length ? ub(Oa, Pa) : 0;
  }
  function od() {
    ya && (uc(), ya = ub(Oa, Pa));
  }
  function uc() {
    ya && (ya = md(ya));
  }
  function ca(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function wb(a) {
    var b;
    xb && (b = xb(a));
    ca(ab, a);
    onload = Fa;
    ab = wb = xb = onload = null;
    return b;
  }
  function vc() {
    var a = 9 === Ga.offsetWidth;
    wc !== a && ca(xc, wc = a);
  }
  function Ha() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = F.defaultView, c = yb, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Qa = "#123456" !== b && "rgb(18,52,86)" !== b, zb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Ab = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== bb() && ca(Ra, yb), !0;
    }
  }
  function bb() {
    return yb = Qa ? Ab ? 2 : zb ? 3 : 1 : 0;
  }
  function cb(a) {
    var b = b || F;
    return pd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function za(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Bb(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function da(a, b, c, e, l) {
    function C(G, I) {
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
      b = Bb("div", 'a<style type="text/css">' + l + "</style>").lastChild;
    } else {
      b = Bb(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    c && C(b, c);
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
  function eb(a) {
    if (Ia(N, a)) {
      var b = N.className.split(" ");
      b.splice(b.indexOf(a), 1);
      N.className = b.join(" ");
    }
  }
  function yc(a) {
    a = da(Cb, "style", {type:"text/css", media:"all"}, 0, a);
    Db = a.sheet || a.styleSheet;
  }
  function Ja(a) {
    for (var b = Db, c, e, l = "", C; a.length;) {
      c = a.shift(), e = a.shift(), C = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(C, b.cssRules.length) : l += C;
    }
    l && yc(l);
  }
  function zc(a) {
    function b(e) {
      fb = e;
      c.onload = c.onerror = Fa;
      J(a, e);
    }
    if (ra(fb)) {
      v("[dataUriTest] already done : " + fb), J(a, fb);
    } else {
      if (8 > D) {
        v("[dataUriTest] trident < 8 : false"), J(a, !1);
      } else {
        v("[dataUriTest] start!");
        var c = new Image;
        c.onerror = function() {
          v("[dataUriTest] no DATA URI!");
          c.onload = c.onerror = Fa;
          b(!1);
        };
        c.onload = function() {
          v("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Ac(a, b, c, e, l, C) {
    function z() {
      var t = '1.6em "' + b + '"';
      v("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(t).then(function(A) {
        v("[webFontTest] fonts.check() : " + F.fonts.check(t, "i") + ", fonts.length : " + A.length);
        x(b) ? J(a, Ka) : (v("[webFontTest] mesureWebFont() : false"), G(!0));
      }, function(A) {
        v("[webFontTest] fonts.load() rejected! " + A);
        zc(Z);
      });
    }
    function y(t) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (Q = new qa - 0, !1) : t < new qa - Q;
    }
    function G(t) {
      t && (v("[webFontTest] testWebFont start."), Q = new qa - 0);
      x(b) ? (v("[webFontTest] testWebFont mesurement success : " + Ka), a(Ka)) : y(ta) ? (v("[webFontTest] testWebFont timeout!"), w ? a(0) : 9 > D ? J(a, 0) : zc(Z)) : J(G);
    }
    function I() {
      var t = -1, A;
      I = null;
      K = ["sans-serif", "serif"];
      m = da(N, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (L = {}; A = K[++t];) {
        m.style.fontFamily = A, L[A] = m.offsetWidth;
      }
    }
    function x(t) {
      var A = 0, ea = -1, Eb, Fb, Gb = 0;
      I && I();
      for (N.appendChild(m); Eb = K[++ea];) {
        if (m.style.fontFamily = '"' + t + '",' + Eb, m.offsetWidth !== L[Eb]) {
          A = 1;
          break;
        }
      }
      if (A && l) {
        for (Fb in l) {
          if (m.innerHTML = Fb, t = m.offsetWidth, m.innerHTML = l[Fb], Gb = t === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Gb) {
            break;
          }
        }
      }
      za(m);
      return Ka = A + Gb;
    }
    function Z(t) {
      v("[webFontTest] testDataUriComplete : " + t);
      (w = t) ? O(!0) : a(0);
    }
    function O(t) {
      t && (Q = new qa - 0);
      for (A in c) {
        if (x(A)) {
          v("[webFontTest] success! " + A);
          n = da(N, "div", {"aria-hidden":"true", className:e, id:e});
          t = c[A];
          var A = Db, ea = Bc.all || 0;
          A ? A.addImport ? A.addImport(t, ea) : A.insertRule && A.insertRule('@import "' + t + '"', ea) : yc('@import "' + t + '"');
          Bc.all = ++ea;
          J(R, !0);
        } else {
          y(100) ? (v("[webFontTest] timeout! " + A), delete c[A], J(O, !0)) : J(O);
        }
        return;
      }
      a(0);
    }
    function R(t) {
      t && (v("[webFontTest] testImportedCssReady start!"), v("[webFontTest] targetWebFontName : " + b), Q = new qa - 0);
      1 < n.offsetWidth ? (v("[webFontTest] testImportedCssReady ended."), za(n), ta = 100, J(G, !0)) : y(ta) ? (v("[webFontTest] testImportedCssReady timeout!"), za(n), a(0)) : J(R);
    }
    var ta = C || 5000, Q, w, m, n, K, L, Ka;
    b = qd + b;
    v("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var t;
      if (q.MeeGo || 2.2 > q.AOSP || q.WebOS || q.UCWEB || 10 > q.TridentMobile || q.NDS || q.NDSi || q.N3DS) {
        return !1;
      }
      if (6 > D) {
        return !0;
      }
      var A = da(Cb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), ea = (ea = A.sheet || A.styleSheet) ? (t = ea.cssRules) && (t = t[0]) ? t.cssText : ea.cssText || "" : "";
      t = 0 < ea.indexOf("src") && 0 === ea.indexOf("@font-face");
      za(A);
      return t;
    })() ? (v("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > gb ? (v("[webFontTest] No native font loader."), G(!0)) : (v("[webFontTest] Use Native font loader."), z())) : (v("[webFontTest] maybeCanWebFont() : false"), J(a, 0));
  }
  function Cc() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function rd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Jb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function hb() {
    hb = null;
    sd(Kb, "PB-100", {"PB-100_canTTF":H + "pbFont/ttf.css", "PB-100_canWOFF":H + "pbFont/woff.css", "PB-100_canEOT":H + "pbFont/eot.css", "PB-100_canSVG":H + "pbFont/svg.css"}, "pbFont-testCssReady", {h:ib}, 5000);
  }
  function Kb(a) {
    Sa = a;
    v("[pbList] WebFont test result : " + !!a);
    Sa ? Lb() : Ta ? Dc(!0) : ra(Ta) ? Lb() : td(Dc);
  }
  function Dc(a) {
    a && (v("[pbList] Fallback start!"), sa(N, "pbList-noWebFont"), fa ? Ja([".pbList font:after", "content:url(" + H + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ja([".pbList font", "background-image:url(" + H + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = Ac = null; va.length;) {
      jb(va.shift(), Mb.shift());
    }
    v("[pbList] complete.");
  }
  function jb(a, b) {
    function c(C) {
      C = C.childNodes;
      for (var z = -1, y; y = C[++z];) {
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
    if (Kb) {
      -1 === va.indexOf(a) && (va.push(a), Mb.push(b), Nb && hb && hb());
    } else {
      var l = va.indexOf(a);
      0 <= l && va.splice(l, 1) && Mb.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== Sa && (l = l.split(ib).join(Ec)), b ? a.data = l : ud(l.split("\r").join("").split("&yen;").join(vd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function ud(a, b) {
    function c(m, n) {
      for (var K = ""; n;) {
        n & 1 && (K += m), n >>= 1, m += m;
      }
      return K;
    }
    function e(m, n, K) {
      for (var L, Ka = -1, t, A; L = n[++Ka];) {
        for (; 0 <= (t = m.indexOf(L));) {
          A = L.length, m = m.substr(0, t) + c(K, A) + m.substr(t + A);
        }
      }
      return m;
    }
    function l(m) {
      var n = S(m), K = "" + n;
      return 0 < n && n === n | 0 && (n = m.indexOf(K) + K.length, n <= m.length) ? n : 0;
    }
    var C = " area line str cmd fnc syb".split(" "), z = [], y = "", G = -1, I, x;
    if (function(m) {
      var n = m.indexOf("P");
      if (-1 === n) {
        return !1;
      }
      n = S(m.charAt(n + 1));
      return 0 <= n && 9 >= n;
    }(a)) {
      y = c("+", a.length);
    } else {
      for (0 <= (G = l(a)) && (y = c("|", G), --G); x = a.charAt(++G);) {
        x === Ob || I ? (y += "~", x === Ob && (I = !I)) : y += x;
      }
      y = e(y, wd, "^");
      y = e(y, xd, "{");
      y = e(y, yd, "}");
    }
    G = 0;
    for (I = a.length; G < I; ++G) {
      x = a.charAt(G);
      var Z = x === Pb, O = " " === x;
      x = Z ? " " : x;
      var R = y.charAt(G), ta = Q, Q = "|" === R;
      R = C["+|~{}^".indexOf(R) + 1];
      if ("\n" !== x) {
        if (Sa || !Ta) {
          8 > D && O && (x = G === I - 1 ? Pb : zd), 2 === Sa && a.substr(G, 2) === ib && (x = ib, ++G), O = O && "str" === R ? ' class="pbList-strsp"' : Z ? "" : !O && R ? ' class="pbList-' + R + '"' : "";
        } else {
          var w = Aa.indexOf(x);
          w = -1 === w ? "" : Aa.indexOf(x).toString(16).toUpperCase();
          w = (w = 1 === w.length ? "0" + w : w) ? "pbChr" + w : "";
          O = O && "str" === R ? ' class="pbList-strsp"' : O || !w ? "" : R ? ' class="' + (w ? w + " " : "") + "pbList-" + R + '"' : ' class="' + w + '"';
        }
        ta && Z && (gb || kb) && (x = Pb);
        z.push("<font" + O + ">" + x + "</font>");
      } else {
        z.push(x);
      }
    }
    z = z.join("");
    if (1 === b.nodeType) {
      b.innerHTML = z;
    } else {
      for (C = Bb("font", z); z = C.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(z, b);
      }
      za(b);
    }
  }
  var p, u, d = la.userAgent, T = la.appVersion, Qb = S(T) | 0, E = la.platform, Rb = F.documentElement, Fc = Rb && Rb.style, Sb = F.documentMode, Tb = mc.width, Ub = mc.height, Gc = r.HTMLAudioElement, Hc = r.performance, Ic = r.Int8Array, Ad = void 0 !== r.ontouchstart, Ba = k(T, "Version/") || k(d, "Version/"), La = void 0 !== Fc.MozAppearance, Jc = r.operamini, Vb = g(d, "UCWEB"), Bd = Vb && k(d, " U2/"), Cd = Vb && k(d, "; wds "), Wb = k(d.split("_").join("."), "; iPh OS "), Dd = k(d, "; Adr "), 
  Kc = g(T, "YJApp-ANDROID"), ha = g(E, "Android") || La && g(T, "Android") || Kc, U = k(E, "Android ") || k(T, "Android ") || k(d, "Android ") || Dd, Xb = g(E, "Linux"), Yb = "MacIntel" === E && void 0 !== la.standalone, Ca = !Jc && r.opera, Ed = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : qc(k(d, "Opera "), Ba, "" + Qb)), Lc = r.opr, lb = !Ca && (F.all || Sb), aa = lb && (Sb ? Sb : r.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  r.attachEvent ? 5 : 4), Zb = !lb && Rb.msContentZoomFactor, mb = !Zb && r.chrome, $b = La && k(d, "Goanna/"), ja = !$b && La && k(d, "rv:"), Fd = k(d, "Firefox/"), Gd = k(d, "Opera/"), Hd = r.FNRBrowser, na = vb(d, "AppleWebKit/"), Ua = k(d, "Chrome/"), Mc = k(d, "OPR/"), Id = k(T, "KHTML/"), Jd = k(d.toLowerCase(), "iris"), Va = vb(d, "SamsungBrowser/"), Wa;
  if (Wa = !Va) {
    a: {
      for (var Nc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      nb, ac = Nc.length; nb = Nc[--ac];) {
        if (g(d, nb)) {
          Wa = 2 > S(Ba) ? Ba : 0.9;
          break a;
        }
      }
      var Oc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Oc.length; nb = Oc[--ac];) {
        if (g(d, nb)) {
          Wa = Ba;
          break a;
        }
      }
      Wa = void 0;
    }
  }
  var Pc = Wa, Qc = mb && 534.3 >= na, Rc = Ad && (na || La) && (0 === E.indexOf("Linux armv") || 0 === E.indexOf("Linux aarch") || "Linux i686" === E) && g(d, "Linux x86_64") || !U && Kc, Sc = r.puffinDevice, ob = Sc && Sc.clientInfo, Xa = ob && "iOS" === ob.os && ob.osVersion, Kd = Xa && ob.model, bc = !aa && F.registerElement, Ld = !aa && F.execCommand, Md = Xb && bc && "11.0.696.34" === Ua, Nd = r._firefoxTV_playbackStateObserverJava, wa, ia, B;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var f = Gd;
    } else {
      if ("New Nintendo 3DS" === E || g(d, "iPhone OS 6_0") && 320 === Tb && 240 === Ub) {
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
                    var Tc = 3.3;
                    M = h;
                    P = B;
                  } else {
                    if (B = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = B, M = h, P = B, 0 > pc("4.10", B) && (p = "Sony", u = B);
                    } else {
                      if (g(d, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(d, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Qb && g(d, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Tc = 3.4;
                            M = h;
                            P = 2;
                            var pb = !0;
                          } else {
                            if (0 === E.indexOf("iP") || Wb || Xa || Yb) {
                              if (Xa) {
                                switch(f = Xa, Kd.substr(0, 4)) {
                                  case "iPho":
                                    var oa = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    oa = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    oa = "iPod";
                                    var Uc = !0;
                                }
                              } else {
                                Wb ? f = Wb : f = k(T.split("_").join("."), "OS ");
                                f || (ia = !0);
                                if (!f || Hd) {
                                  f = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : la.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : nc.isNaN ? 9.2 : r.SharedWorker ? Hc && Hc.now ? 8.0 : 8.4 : Ld ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : Ic ? 4.3 : Gc ? 4.1 : 3.2;
                                }
                                var W = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ba = !0) : 0 === E.indexOf("iPad") || Yb ? (oa = "iPad", V = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", Uc = !0);
                              }
                              var cc;
                              if (cc = !Xa) {
                                var dc;
                                if (!(dc = la.standalone)) {
                                  var qb;
                                  if (qb = V || 12 > f) {
                                    a: {
                                      for (var Od in F) {
                                        if ("webkitFullscreenEnabled" === Od) {
                                          qb = !0;
                                          break a;
                                        }
                                      }
                                      qb = void 0;
                                    }
                                  }
                                  dc = qb;
                                }
                                cc = dc || 11 <= f && 13 > f && la.mediaDevices;
                              }
                              cc ? (p = "SafariMobile", M = "Safari", P = f) : p = "iOSWebView";
                              h = "iOS";
                              u = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", p = "AOSP", u = 2.2, M = p, P = u, ha = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", p = "AOSP", u = 2.2, M = p, P = u;
                                } else {
                                  if (B = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = B;
                                  } else {
                                    if (void 0 !== r.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ja ? "1.0.1" : 19 > ja ? 1.1 : 27 > ja ? 1.2 : 29 > ja ? 1.3 : 31 > ja ? 1.4 : 33 > ja ? 2.0 : 35 > ja ? 2.1 : 38 > ja ? 2.2 : 45 > ja ? 2.5 : 2.6, g(d, "Mobile") ? ba = !0 : g(d, "Tablet") && (V = !0);
                                    } else {
                                      if (r.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), M = h, P = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (B = k(d, "Tizen ")) {
                                          h = "Tizen", f = B, M = "Samsung", P = Va, p = M, u = P, ba = !0;
                                        } else {
                                          if (B = k(d, "Windows Phone ") || k(T, "Windows Phone OS ") || Cd) {
                                            var rb = !0;
                                            f = B;
                                            ba = !0;
                                          } else {
                                            if (Zb && "ARM" === E) {
                                              rb = !0, f = 10, ia = ba = !0;
                                            } else {
                                              if (lb && g(T, "ZuneWP")) {
                                                rb = !0, f = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ia = ba = !0;
                                              } else {
                                                if (g(d, "FOMA;")) {
                                                  h = "FeaturePhone", ba = !0;
                                                } else {
                                                  if (g(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ba = !0;
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
                                                              pa = !0, f = 5 <= S(U) ? 5 : 4, X = V = !0;
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
                                                                      h = "Kindle", f = B, p = "AOSP", u = 2.2, M = p, P = u;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Nd) {
                                                                        pa = !0, f = U, X = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Jd) {
                                                                              h = "WindowsMobile", pb = !0;
                                                                            } else {
                                                                              if ("WinCE" === E) {
                                                                                h = E, pb = !0;
                                                                              } else {
                                                                                if ("Win16" === E || "Win32" === E || "Win64" === E) {
                                                                                  h = E, f = k(d, "Windows NT ") || k(d, "Windows ");
                                                                                } else {
                                                                                  if (0 === E.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === E ? "MacPPC" : E;
                                                                                    if (B = k(d.split("_").join("."), "Mac OS X ")) {
                                                                                      f = B;
                                                                                    }
                                                                                    var Vc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ba, ba = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ha && La ? (g(d, "Android 4.4;") ? W = {min:2.3} : 4 <= S(U) ? W = U : W = {min:2.2}, f = W, Rc && (ia = !0)) : ha && Ca ? (U ? W = U : (W = {min:1.6}, ia = !0), f = W, g(d, "Tablet") ? V = 
                                                                                    !0 : ba = !0) : U ? (f = U, ha = !0) : Xb && Rc ? (wa = !0, Va ? W = {min:4.4} : mb && !Qc || Lc || Mc ? W = {min:4} : (W = U = void 0 !== Fc.touchAction ? {min:5} : bc ? 4.4 : Ic ? la.connection ? r.searchBoxJavaBridge_ || mb ? nc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Gc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Pc && (p = "Samsung", u = Pc)), f = W, ha = !0) : Md ? (f = {min:5}, wa = ha = !0) : Xb && 
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
  rb && (h = "WindowsPhone");
  p || (X = X || ha, Ca ? (p = X || pb || ba || V ? "PrestoMobile" : "Presto", u = Ed) : lb ? ((W = vb(T, "Trident/") + 4) && W !== aa && (M = "IEHost", P = W), 10 <= aa && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (M = "ModernIE", P = aa), pb || ba || V || Uc ? p = "TridentMobile" : Vc && 5 <= aa ? (p = "Tasman", M = "MacIE", P = aa) : (p = "Trident", Vc && (M = "MacIE", P = aa)), u = aa) : Zb ? (p = rb ? "EdgeMobile" : "EdgeHTML", u = k(T, "Edge/")) : $b ? (p = "Goanna", 
  u = $b) : La ? (p = X ? "Fennec" : "Gecko", u = ja || Fd) : Va ? (p = "Samsung", u = Va, wa && (ia = !0)) : (B = Tc || k(d, "NetFront/")) ? (p = "NetFront", u = B) : (B = k(d, "iCab")) ? (p = "iCab", u = B) : (B = qc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Jc && Ba) ? (p = "OperaMini", u = B, h || (g(d, "iPhone") ? oa = "iPhone" : g(d, "iPad") ? oa = "iPad" : g(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Vb ? (p = "UCWEB", u = Bd) : Id ? (p = "KHTML", u = Qb) : ha && Qc ? (p = "AOSP", 
  u = U, wa && (ia = !0)) : mb || Lc || Mc ? (p = X ? "ChromiumMobile" : "Chromium", u = Ua, wa && (ia = !0)) : ha && bc ? (p = "ChromeWebView", u = 5 > S(U) ? U : Ua, wa && (ia = !0)) : ha && (Ba || wa) ? (p = "AOSP", u = U, wa && (ia = !0)) : Ua ? (p = X ? "ChromiumMobile" : "Chromium", u = Ua) : na && (p = "WebKit", u = na));
  h && (q.PLATFORM = h, f ? (q.PLATFORM_VERSION = rc(f), q[h] = f === f + "" ? S(f) : f) : q[h] = !0);
  p && (q.ENGINE = p, u ? (q.ENGINE_VERSION = rc(u), q[p] = u === u + "" ? S(u) : u) : q[p] = !0, M || (M = p, P = u));
  if (ia || Yb) {
    q.PC_MODE = !0;
  }
  var Fa = ld, Ma = [], pd = !!F.getElementsByTagName, N = F.body, xa = N.style, D = q.Trident || q.TridentMobile, sb = q.Tasman, Wc = q.EdgeHTML || q.EdgeMobile, Xc = q.Presto || q.PrestoMobile, ec = q.Gecko, fc = q.Goanna, gb = q.WebKit, kb = q.SafariMobile || q.iOSWebView, Pd = q.OperaMini && q.UCWEB, Yc = q.Win32 || q.Win64, Qd = S(la.userAgent.split("Edg/")[1]);
  D || sb || (new oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Zc = F.scripts, Rd = (sb ? "ie5mac" : 5.5 > D ? "ie5win" : 6 > D ? "ie55" : 10 > D ? "ie" + (D | 0) : "modern") + ".css", $c = 0 === location.href.indexOf("https"), ab = [], wc, yb = 0, gc, Ta, fa, Sd = ra(xa.transform) ? "transform" : ra(xa["-o-transform"]) ? "-o-transform" : ra(xa["-ms-transform"]) ? "-ms-transform" : ra(xa["-moz-transform"]) ? "-moz-transform" : ra(xa["-webkit-transform"]) ? "-webkit-transform" : "";
  var Na = Zc[Zc.length - 1].src.split("/");
  --Na.length;
  var Td = Na.join("/");
  0 <= "http: https:".indexOf(Na[0]) && Na.splice(0, 3);
  Na = Na.join("/");
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
    var c = arguments, e = c.length - 2 - b, l = this.slice(a, a + b), C;
    if (0 < e) {
      var z = this.length - 1;
      for (C = a + b; z >= C; --z) {
        this[z + e] = this[z];
      }
    } else {
      if (0 > e) {
        z = a + b;
        for (C = this.length; z < C; ++z) {
          this[z + e] = this[z];
        }
        this.length += e;
      }
    }
    z = 2;
    for (C = c.length; z < C; ++z) {
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
  var hc, ic = [];
  Ma.push(function() {
    Ya(function() {
      (hc = r.logger || F.all.logger) || alert("#logger not found!");
      for (hc ? v = function(a) {
        da(hc, "P", null, null, a);
      } : r.console && (v = console.log); ic.length;) {
        v(ic.shift());
      }
    });
  });
  v = function(a) {
    ic.push(a);
  };
  var bd = function(a) {
    $a.length || (Ea = setInterval(Za, tc));
    $a.push({f:a, g:++ad});
    return ad;
  };
  var $a = [], tc = 999, ad = 0, Ea;
  if (5 > D || sb) {
    r._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Ma.push(function() {
    6.1 > kb && cd(nd);
    tb(sc);
  });
  var J = function(a, b, c) {
    ma.length || (ya = ub(Oa, Pa));
    ma.push({f:a, p:b, g:++dd, t:new qa - 0 + (Pa < c ? c : Pa)});
    return dd;
  };
  var ed = function(a) {
    for (var b = ma.length, c; c = ma[--b];) {
      if (c.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ma = [], Pa = 64, dd = 0, ya;
  if (5 > D || sb) {
    r._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  Ma.push(function() {
    6.1 > kb && cd(od);
    tb(uc);
  });
  var Da = r.matchMedia, Ga;
  ab.push(function() {
    Ga = da(N, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Ya = function(a) {
    ab.push(a);
  };
  var tb = function(a) {
    fd.push(a);
  };
  var fd = [], xb = r.onload, gd = r.onunload;
  onload = wb;
  onunload = function(a) {
    var b;
    gd && (b = gd(a));
    ca(fd, a);
    onunload = Fa;
    return b;
  };
  var jc = function(a) {
    xc.push(a);
  };
  var xc = [];
  Ya(function() {
    vc();
    bd(vc);
  });
  var Ra = [], Qa, zb, Ab;
  10 <= D || Wc ? (Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Qa = zb = a.matches;
    ca(Ra, bb());
  }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Qa = Ab = a.matches;
    ca(Ra, bb());
  }), Da("(-ms-high-contrast:active)").addListener(function(a) {
    Qa = a.matches;
    ca(Ra, bb());
  }), Ha = null) : 10 > D || Yc && (44 <= ec || fc) || Yc && Qd ? Ya(function() {
    Ga.style.color = "#123456";
    Ga.style.backgroundColor = "#123456";
    60 > ec || fc ? Ha() : Ha() && bd(Ha, 1000);
    Ha = null;
  }) : Ha = null;
  var Ud = [];
  Da && Da("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Ud, a.matches);
  });
  var kc = [];
  r.onbeforeprint ? (onbeforeprint = function() {
    ca(kc, !0);
  }, onafterprint = function() {
    ca(kc, !1);
  }, tb(function() {
    onbeforeprint = onafterprint = Fa;
  })) : Da && Da("print").addListener(function(a) {
    ca(kc, a.matches);
  });
  var cd = function(a) {
    hd.push(a);
  };
  var hd = [], lc = r.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    wb || ca(hd);
    return b;
  };
  tb(function() {
    onscroll = lc = Fa;
  });
  var Vd = cb("html")[0];
  var Cb = cb("head")[0];
  var db;
  var Db = void 0;
  var Bc = {};
  fa || jc(function(a) {
    a && !ra(fa) && (fa = 1.8 <= ec || fc || 8 <= D || Wc || 530 <= gb || 3.2 <= kb, fa || (a = da(N, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), fa = 6 <= a.offsetWidth, za(a)));
  });
  var fb;
  9 > D && Ya(function(a) {
    a = da(N, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    za(a);
  });
  var td = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || J(a, !1)) : e = J(b));
    }
    if (id) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!D || 11 === D || 11 === q.IEHost) && c.width || l || (l = !0, e && ed(e), e = J(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && ed(e);
        Xc && !c.complete ? e = J(a, !1) : (Ta = !0, J(a, !0));
      };
      c.src = id;
      8 > Xc && c.complete ? (Ta = !0, J(a, !0)) : l || (e = J(b));
    } else {
      v("[imageTest] TEST_IMAGE_URL is undefined!"), J(a, !1);
    }
  };
  var id = $c ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var sd = Ac;
  var qd = "bad_" + (new qa - 0) + "_";
  for (q.IEHost && 5.5 > D && Ya(function() {
    da(Cb, "link", {href:Td + "/" + Rd, rel:"stylesheet", type:"text/css"});
  }); Ma.length;) {
    Ma.shift()();
  }
  Ma = null;
  var Y = String.fromCharCode, H = $c ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  Ra.push(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((Sd || 9 === D || 5.5 <= D && 9 > D && gc) && sa(N, "jsCanRotate"), a) {
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
      eb("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, jd;
  jc(function(a) {
    function b(w) {
      var m = w.getAttribute("pbtip") || "", n = m.charAt(0), K = "_" === n;
      m = K ? m.charAt(2) : n;
      n = K ? "Btm" : "";
      var L = w.getAttribute("title") || "";
      sa(w, "pbTipPos" + m.toUpperCase());
      da(w, "div", {className:"pbTip" + n}, {width:L.length + l + "em"}, L);
      da(w, "div", {className:"pbTail" + n});
      z && K && (w.focus(), w.blur());
    }
    function c(w) {
      if (fa && O) {
        e(w);
      } else {
        var m = w.getAttribute("pbGhst") || "", n = w.className, K = n.split("pbCsr")[1] || "";
        n = n.split("pbAlp")[1] || "";
        if ("CS" === m) {
          var L = "_";
        } else {
          L = m, 3 === L.length && (L = L.substr(0, 2)), L = Aa[parseInt(L, 16)] || "~";
        }
        K = K.split(" ")[0];
        n = n.split(" ")[0];
        n = 10 - S(n);
        m ? (m = {className:["pbChr" + m + " pbAlp" + n + " pbCsr" + K]}, db = 1, G = da(w, "b", m, 0, L), e(w), e(G)) : e(w);
      }
    }
    function e(w) {
      Z || C || Ia(w, "pbChrCS") && Ib.push(w);
    }
    if (a && !jd) {
      jd = !0;
      var l = 6 > D ? 1 : 0;
      a = cb("SAMP");
      var C = 9 > D, z = 5 <= D && 6 > D, y, G, I, x;
      gc && sa(N, "pbLCD-AX");
      if (a.length) {
        var Z = void 0 !== xa.opacity || void 0 !== xa["-moz-opacity"] || void 0 !== xa["-khtml-opacity"], O = !Z && !C && !0, R = !fa || O || void 0;
        for (I = -1; y = a[++I];) {
          if (Ia(y.parentElement || y.parentNode, "pbLCD")) {
            var ta = y.children;
            for (y = ta.length; y;) {
              var Q = ta[--y];
              switch(Q.tagName.toUpperCase()) {
                case "A":
                  if (R) {
                    for (fa || b(Q), x = Q.children.length; x;) {
                      c(Q.children[--x]);
                    }
                  }
                  Pd ? Q.setAttribute("href", "javascript:void(0)") : Q.onclick = rd;
                  break;
                case "B":
                  R && c(Q);
              }
            }
          }
        }
        Ib.length ? (setInterval(Cc, 500), fa ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Cc = null;
        O && (fa ? Ja([".pbAlp1:after,.pbAlp9[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhst]:before", "content:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + H + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        H + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + H + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + H + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + H + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + H + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + H + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + H + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        H + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + H + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + H + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + H + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > gb && (Vd.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === D && (new oc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Ob = Aa[7], Ec = Aa[30], vd = Aa[113], ib = Y(8337) + Y(8331), Pb = Y(160), zd = Y(8194), xd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), yd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), wd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ec + Aa[31]).split(""), va = 
  [], Mb = [], Sa, Nb;
  jc(function(a) {
    if (a && !Nb) {
      var b = F.all || cb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? jb(c) : Ia(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && jb(c, !0);
      }
      va.length && (v("[pbList] " + va.length + " elements found. WebFont test start."), hb());
      Nb = !0;
    }
  });
  kd.prettify = jb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

