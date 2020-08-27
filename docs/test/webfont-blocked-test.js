PB100 = {};
(function(kd, p, q, ld, F, qa, mc, Z, nc, oc, Ud, ub, md, ra, Vd) {
  function vb(a, b) {
    var c = Z(a.split(b)[1]);
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
      var l = Z(a[c]), C = Z(b[c]);
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
  function sa(a) {
    return void 0 !== a;
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function nd() {
    Fa && (sc(), Fa = setInterval(Za, tc));
  }
  function sc() {
    Fa && (Fa = clearInterval(Fa));
  }
  function Oa() {
    for (var a, b = 0, c = new ra - 0; b < ma.length;) {
      c < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    za = ma.length ? ub(Oa, Pa) : 0;
  }
  function od() {
    za && (uc(), za = ub(Oa, Pa));
  }
  function uc() {
    za && (za = md(za));
  }
  function da(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function wb(a) {
    var b;
    xb && (b = xb(a));
    da(ab, a);
    onload = Ga;
    ab = wb = xb = onload = null;
    return b;
  }
  function vc() {
    var a = 9 === Ha.offsetWidth;
    wc !== a && da(xc, wc = a);
  }
  function Ia() {
    function a(l) {
      return "#ffffff" === l || "rgb(255,255,255)" === l;
    }
    var b = F.defaultView, c = yb, e = b ? b.getComputedStyle(Ha, null) : Ha.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Qa = "#123456" !== b && "rgb(18,52,86)" !== b, zb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Ab = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== bb() && da(Ra, yb), !0;
    }
  }
  function bb() {
    return yb = Qa ? Ab ? 2 : zb ? 3 : 1 : 0;
  }
  function cb(a) {
    var b = b || F;
    return pd ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function Aa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Bb(a, b) {
    var c = F.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ea(a, b, c, e, l) {
    function C(G, J) {
      for (var x in J) {
        switch(x) {
          case "class":
          case "className":
            ta(G, J[x]);
            break;
          default:
            G.setAttribute(x, J[x]);
        }
      }
    }
    function z(G, J) {
      var x = G.style, aa;
      for (aa in J) {
        x[aa] = J[aa];
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
  function Ja(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ta(a, b) {
    var c;
    if (!Ja(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function eb(a) {
    if (Ja(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function yc(a) {
    a = ea(Cb, "style", {type:"text/css", media:"all"}, 0, a);
    Db = a.sheet || a.styleSheet;
  }
  function Ka(a) {
    for (var b = Db, c, e, l = "", C; a.length;) {
      c = a.shift(), e = a.shift(), C = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(C, b.cssRules.length) : l += C;
    }
    l && yc(l);
  }
  function zc(a) {
    function b(e) {
      fb = e;
      c.onload = c.onerror = Ga;
      K(a, e);
    }
    if (sa(fb)) {
      v("[dataUriTest] already done : " + fb), K(a, fb);
    } else {
      if (8 > D) {
        v("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        v("[dataUriTest] start!");
        var c = new Image;
        c.onerror = function() {
          v("[dataUriTest] no DATA URI!");
          c.onload = c.onerror = Ga;
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
      var r = '1.6em "' + b + '"';
      v("[webFontTest] testByNativeFontLoaderAPI start.");
      F.fonts.load(r).then(function(A) {
        v("[webFontTest] fonts.check() : " + F.fonts.check(r, "i") + ", fonts.length : " + A.length);
        x(b) ? K(a, R) : (v("[webFontTest] mesureWebFont() : false"), G(!0));
      }, function(A) {
        v("[webFontTest] fonts.load() rejected! " + A);
        zc(aa);
      });
    }
    function y(r) {
      return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (P = new ra - 0, !1) : r < new ra - P;
    }
    function G(r) {
      r && (v("[webFontTest] testWebFont start."), P = new ra - 0);
      x(b) ? (v("[webFontTest] testWebFont mesurement success : " + R), a(R)) : y(va) ? (v("[webFontTest] testWebFont timeout!"), w ? a(0) : 9 > D ? K(a, 0) : zc(aa)) : K(G);
    }
    function J() {
      var r = -1, A;
      J = null;
      H = ["sans-serif", "serif"];
      m = ea(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (S = {}; A = H[++r];) {
        m.style.fontFamily = A, S[A] = m.offsetWidth;
      }
    }
    function x(r) {
      var A = 0, fa = -1, Eb, Fb, Gb = 0;
      J && J();
      for (M.appendChild(m); Eb = H[++fa];) {
        if (m.style.fontFamily = '"' + r + '",' + Eb, m.offsetWidth !== S[Eb]) {
          A = 1;
          break;
        }
      }
      if (A && l) {
        for (Fb in l) {
          if (m.innerHTML = Fb, r = m.offsetWidth, m.innerHTML = l[Fb], Gb = r === m.offsetWidth ? 1 : 0, m.innerHTML = "mmmmmmmmmmlli", !Gb) {
            break;
          }
        }
      }
      Aa(m);
      return R = A + Gb;
    }
    function aa(r) {
      v("[webFontTest] testDataUriComplete : " + r);
      (w = r) ? N(!0) : a(0);
    }
    function N(r) {
      r && (P = new ra - 0);
      for (A in c) {
        if (x(A)) {
          v("[webFontTest] success! " + A);
          t = ea(M, "div", {"aria-hidden":"true", className:e, id:e});
          r = c[A];
          var A = Db, fa = Bc.all || 0;
          A ? A.addImport ? A.addImport(r, fa) : A.insertRule && A.insertRule('@import "' + r + '"', fa) : yc('@import "' + r + '"');
          Bc.all = ++fa;
          K(Q, !0);
        } else {
          y(100) ? (v("[webFontTest] timeout! " + A), delete c[A], K(N, !0)) : K(N);
        }
        return;
      }
      a(0);
    }
    function Q(r) {
      r && (v("[webFontTest] testImportedCssReady start!"), b = b.replace(Cc, ""), v("[webFontTest] targetWebFontName : " + b), P = new ra - 0);
      1 < t.offsetWidth ? (v("[webFontTest] testImportedCssReady ended."), Aa(t), va = 100, K(G, !0)) : y(va) ? (v("[webFontTest] testImportedCssReady timeout!"), Aa(t), a(0)) : K(Q);
    }
    var va = C || 5000, P, w, m, t, H, S, R;
    b = Cc + b;
    v("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var r;
      if (p.MeeGo || 2.2 > p.AOSP || p.WebOS || p.UCWEB || 10 > p.TridentMobile || p.NDS || p.NDSi || p.N3DS) {
        return !1;
      }
      if (6 > D) {
        return !0;
      }
      var A = ea(Cb, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), fa = (fa = A.sheet || A.styleSheet) ? (r = fa.cssRules) && (r = r[0]) ? r.cssText : fa.cssText || "" : "";
      r = 0 < fa.indexOf("src") && 0 === fa.indexOf("@font-face");
      Aa(A);
      return r;
    })() ? (v("[webFontTest] maybeCanWebFont() : true"), !F.fonts || 603 > gb ? (v("[webFontTest] No native font loader."), G(!0)) : (v("[webFontTest] Use Native font loader."), z())) : (v("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Dc() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function qd(a) {
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
    rd(Kb, "PB-100", {"PB-100_canTTF":I + "pbFont/ttf.css", "PB-100_canWOFF":I + "pbFont/woff.css", "PB-100_canEOT":I + "pbFont/eot.css", "PB-100_canSVG":I + "pbFont/svg.css"}, "pbFont-testCssReady", {h:ib}, 5000);
  }
  function Kb(a) {
    Sa = a;
    v("[pbList] WebFont test result : " + !!a);
    Sa ? Lb() : Ta ? Ec(!0) : sa(Ta) ? Lb() : sd(Ec);
  }
  function Ec(a) {
    a && (v("[pbList] Fallback start!"), ta(M, "pbList-noWebFont"), ha ? Ka([".pbList font:after", "content:url(" + I + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ka([".pbList font", "background-image:url(" + I + "pbFont/" + (9 > D ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = Ac = null; wa.length;) {
      jb(wa.shift(), Mb.shift());
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
      -1 === wa.indexOf(a) && (wa.push(a), Mb.push(b), Nb && hb && hb());
    } else {
      var l = wa.indexOf(a);
      0 <= l && wa.splice(l, 1) && Mb.splice(l, 1);
      for (c(a); a = e.shift();) {
        l = a.data, 2 !== Sa && (l = l.split(ib).join(Fc)), b ? a.data = l : td(l.split("\r").join("").split("&yen;").join(ud).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function td(a, b) {
    function c(m, t) {
      for (var H = ""; t;) {
        t & 1 && (H += m), t >>= 1, m += m;
      }
      return H;
    }
    function e(m, t, H) {
      for (var S, R = -1, r, A; S = t[++R];) {
        for (; 0 <= (r = m.indexOf(S));) {
          A = S.length, m = m.substr(0, r) + c(H, A) + m.substr(r + A);
        }
      }
      return m;
    }
    function l(m) {
      var t = Z(m), H = "" + t;
      return 0 < t && t === t | 0 && (t = m.indexOf(H) + H.length, t <= m.length) ? t : 0;
    }
    var C = " area line str cmd fnc syb".split(" "), z = [], y = "", G = -1, J, x;
    if (function(m) {
      var t = m.indexOf("P");
      if (-1 === t) {
        return !1;
      }
      t = Z(m.charAt(t + 1));
      return 0 <= t && 9 >= t;
    }(a)) {
      y = c("+", a.length);
    } else {
      for (0 <= (G = l(a)) && (y = c("|", G), --G); x = a.charAt(++G);) {
        x === Ob || J ? (y += "~", x === Ob && (J = !J)) : y += x;
      }
      y = e(y, vd, "^");
      y = e(y, wd, "{");
      y = e(y, xd, "}");
    }
    G = 0;
    for (J = a.length; G < J; ++G) {
      x = a.charAt(G);
      var aa = x === Pb, N = " " === x;
      x = aa ? " " : x;
      var Q = y.charAt(G), va = P, P = "|" === Q;
      Q = C["+|~{}^".indexOf(Q) + 1];
      if ("\n" !== x) {
        if (Sa || !Ta) {
          8 > D && N && (x = G === J - 1 ? Pb : yd), 2 === Sa && a.substr(G, 2) === ib && (x = ib, ++G), N = N && "str" === Q ? ' class="pbList-strsp"' : aa ? "" : !N && Q ? ' class="pbList-' + Q + '"' : "";
        } else {
          var w = Ba.indexOf(x);
          w = -1 === w ? "" : Ba.indexOf(x).toString(16).toUpperCase();
          w = (w = 1 === w.length ? "0" + w : w) ? "pbChr" + w : "";
          N = N && "str" === Q ? ' class="pbList-strsp"' : N || !w ? "" : Q ? ' class="' + (w ? w + " " : "") + "pbList-" + Q + '"' : ' class="' + w + '"';
        }
        va && aa && (gb || kb) && (x = Pb);
        z.push("<font" + N + ">" + x + "</font>");
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
      Aa(b);
    }
  }
  var n, u, d = qa.userAgent, T = qa.appVersion, Qb = Z(T) | 0, E = qa.platform, Rb = F.documentElement, Gc = Rb && Rb.style, Sb = F.documentMode, Tb = mc.width, Ub = mc.height, Hc = q.HTMLAudioElement, Ic = q.performance, Jc = q.Int8Array, zd = void 0 !== q.ontouchstart, Ca = k(T, "Version/") || k(d, "Version/"), La = void 0 !== Gc.MozAppearance, Kc = q.operamini, Vb = g(d, "UCWEB"), Ad = Vb && k(d, " U2/"), Bd = Vb && k(d, "; wds "), Wb = k(d.split("_").join("."), "; iPh OS "), Cd = k(d, "; Adr "), 
  Lc = g(T, "YJApp-ANDROID"), ia = g(E, "Android") || La && g(T, "Android") || Lc, U = k(E, "Android ") || k(T, "Android ") || k(d, "Android ") || Cd, Xb = g(E, "Linux"), Yb = "MacIntel" === E && void 0 !== qa.standalone, Da = !Kc && q.opera, Dd = Da && (Da.version && "function" === typeof Da.version ? Da.version() : qc(k(d, "Opera "), Ca, "" + Qb)), Mc = q.opr, lb = !Da && (F.all || Sb), ba = lb && (Sb ? Sb : q.XMLHttpRequest ? F.getElementsByTagName ? 7 : 4 : F.compatMode ? 6 : (0).toFixed ? 5.5 : 
  q.attachEvent ? 5 : 4), Zb = !lb && Rb.msContentZoomFactor, mb = !Zb && q.chrome, $b = La && k(d, "Goanna/"), ka = !$b && La && k(d, "rv:"), Ed = k(d, "Firefox/"), Fd = k(d, "Opera/"), Gd = q.FNRBrowser, na = vb(d, "AppleWebKit/"), Ua = k(d, "Chrome/"), Nc = k(d, "OPR/"), Hd = k(T, "KHTML/"), Id = k(d.toLowerCase(), "iris"), Va = vb(d, "SamsungBrowser/"), Wa;
  if (Wa = !Va) {
    a: {
      for (var Oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      nb, ac = Oc.length; nb = Oc[--ac];) {
        if (g(d, nb)) {
          Wa = 2 > Z(Ca) ? Ca : 0.9;
          break a;
        }
      }
      var Pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Pc.length; nb = Pc[--ac];) {
        if (g(d, nb)) {
          Wa = Ca;
          break a;
        }
      }
      Wa = void 0;
    }
  }
  var Qc = Wa, Rc = mb && 534.3 >= na, Sc = zd && (na || La) && (0 === E.indexOf("Linux armv") || 0 === E.indexOf("Linux aarch") || "Linux i686" === E) && g(d, "Linux x86_64") || !U && Lc, Tc = q.puffinDevice, ob = Tc && Tc.clientInfo, Xa = ob && "iOS" === ob.os && ob.osVersion, Jd = Xa && ob.model, bc = !ba && F.registerElement, Kd = !ba && F.execCommand, Ld = Xb && bc && "11.0.696.34" === Ua, Md = q._firefoxTV_playbackStateObserverJava, xa, ja, B;
  if ("Nitro" === E) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === E) {
      h = "NDSi";
      var f = Fd;
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
                var L = h;
                var O = f;
              } else {
                if (B = k(d, "PlayStation Vita ")) {
                  h = "PSVita", f = B, L = h, O = B;
                } else {
                  if (B = k(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = B;
                    var Uc = 3.3;
                    L = h;
                    O = B;
                  } else {
                    if (B = k(d, "PLAYSTATION 3; ") || k(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = B, L = h, O = B, 0 > pc("4.10", B) && (n = "Sony", u = B);
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
                            Uc = 3.4;
                            L = h;
                            O = 2;
                            var pb = !0;
                          } else {
                            if (0 === E.indexOf("iP") || Wb || Xa || Yb) {
                              if (Xa) {
                                switch(f = Xa, Jd.substr(0, 4)) {
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
                                Wb ? f = Wb : f = k(T.split("_").join("."), "OS ");
                                f || (ja = !0);
                                if (!f || Gd) {
                                  f = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : nc.isNaN ? 9.2 : q.SharedWorker ? Ic && Ic.now ? 8.0 : 8.4 : Kd ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Jc ? 4.3 : Hc ? 4.1 : 3.2;
                                }
                                var W = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === E.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === E.indexOf("iPad") || Yb ? (oa = "iPad", V = !0) : 0 === E.indexOf("iPod") && (oa = "iPod", Vc = !0);
                              }
                              var cc;
                              if (cc = !Xa) {
                                var dc;
                                if (!(dc = qa.standalone)) {
                                  var qb;
                                  if (qb = V || 12 > f) {
                                    a: {
                                      for (var Nd in F) {
                                        if ("webkitFullscreenEnabled" === Nd) {
                                          qb = !0;
                                          break a;
                                        }
                                      }
                                      qb = void 0;
                                    }
                                  }
                                  dc = qb;
                                }
                                cc = dc || 11 <= f && 13 > f && qa.mediaDevices;
                              }
                              cc ? (n = "SafariMobile", L = "Safari", O = f) : n = "iOSWebView";
                              h = "iOS";
                              u = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", n = "AOSP", u = 2.2, L = n, O = u, ia = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", n = "AOSP", u = 2.2, L = n, O = u;
                                } else {
                                  if (B = k(d, "CrOS x86_64 ") || k(d, "CrOS aarch64 ") || k(d, "CrOS i686 ") || k(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = B;
                                  } else {
                                    if (void 0 !== q.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2.0 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, g(d, "Mobile") ? ca = !0 : g(d, "Tablet") && (V = !0);
                                    } else {
                                      if (q.palmGetResource) {
                                        h = "webOS", f = k(d, "webOS/") || k(d, "WEBOS") || k(d, "hpwOS/"), L = h, O = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (B = k(d, "Tizen ")) {
                                          h = "Tizen", f = B, L = "Samsung", O = Va, n = L, u = O, ca = !0;
                                        } else {
                                          if (B = k(d, "Windows Phone ") || k(T, "Windows Phone OS ") || Bd) {
                                            var rb = !0;
                                            f = B;
                                            ca = !0;
                                          } else {
                                            if (Zb && "ARM" === E) {
                                              rb = !0, f = 10, ja = ca = !0;
                                            } else {
                                              if (lb && g(T, "ZuneWP")) {
                                                rb = !0, f = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ja = ca = !0;
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
                                                              pa = !0, f = 5 <= Z(U) ? 5 : 4, X = V = !0;
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
                                                                      h = "Kindle", f = B, n = "AOSP", u = 2.2, L = n, O = u;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Md) {
                                                                        pa = !0, f = U, X = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Id) {
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
                                                                                    var Wc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ca, ca = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ia && La ? (g(d, "Android 4.4;") ? W = {min:2.3} : 4 <= Z(U) ? W = U : W = {min:2.2}, f = W, Sc && (ja = !0)) : ia && Da ? (U ? W = U : (W = {min:1.6}, ja = !0), f = W, g(d, "Tablet") ? V = 
                                                                                    !0 : ca = !0) : U ? (f = U, ia = !0) : Xb && Sc ? (xa = !0, Va ? W = {min:4.4} : mb && !Rc || Mc || Nc ? W = {min:4} : (W = U = void 0 !== Gc.touchAction ? {min:5} : bc ? 4.4 : Jc ? qa.connection ? q.searchBoxJavaBridge_ || mb ? nc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Hc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Qc && (n = "Samsung", u = Qc)), f = W, ia = !0) : Ld ? (f = {min:5}, xa = ia = !0) : Xb && 
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
  ia && (h = h || "Android");
  rb && (h = "WindowsPhone");
  n || (X = X || ia, Da ? (n = X || pb || ca || V ? "PrestoMobile" : "Presto", u = Dd) : lb ? ((W = vb(T, "Trident/") + 4) && W !== ba && (L = "IEHost", O = W), 10 <= ba && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = ba), pb || ca || V || Vc ? n = "TridentMobile" : Wc && 5 <= ba ? (n = "Tasman", L = "MacIE", O = ba) : (n = "Trident", Wc && (L = "MacIE", O = ba)), u = ba) : Zb ? (n = rb ? "EdgeMobile" : "EdgeHTML", u = k(T, "Edge/")) : $b ? (n = "Goanna", 
  u = $b) : La ? (n = X ? "Fennec" : "Gecko", u = ka || Ed) : Va ? (n = "Samsung", u = Va, xa && (ja = !0)) : (B = Uc || k(d, "NetFront/")) ? (n = "NetFront", u = B) : (B = k(d, "iCab")) ? (n = "iCab", u = B) : (B = qc(k(d, "Opera Mini/"), k(d, "Opera Mobi/")) || Kc && Ca) ? (n = "OperaMini", u = B, h || (g(d, "iPhone") ? oa = "iPhone" : g(d, "iPad") ? oa = "iPad" : g(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Vb ? (n = "UCWEB", u = Ad) : Hd ? (n = "KHTML", u = Qb) : ia && Rc ? (n = "AOSP", 
  u = U, xa && (ja = !0)) : mb || Mc || Nc ? (n = X ? "ChromiumMobile" : "Chromium", u = Ua, xa && (ja = !0)) : ia && bc ? (n = "ChromeWebView", u = 5 > Z(U) ? U : Ua, xa && (ja = !0)) : ia && (Ca || xa) ? (n = "AOSP", u = U, xa && (ja = !0)) : Ua ? (n = X ? "ChromiumMobile" : "Chromium", u = Ua) : na && (n = "WebKit", u = na));
  h && (p.PLATFORM = h, f ? (p.PLATFORM_VERSION = rc(f), p[h] = f === f + "" ? Z(f) : f) : p[h] = !0);
  n && (p.ENGINE = n, u ? (p.ENGINE_VERSION = rc(u), p[n] = u === u + "" ? Z(u) : u) : p[n] = !0, L || (L = n, O = u));
  if (ja || Yb) {
    p.PC_MODE = !0;
  }
  var Ga = ld, Ma = [], pd = !!F.getElementsByTagName, M = F.body, ya = M.style, D = p.Trident || p.TridentMobile, sb = p.Tasman, Xc = p.EdgeHTML || p.EdgeMobile, Yc = p.Presto || p.PrestoMobile, ec = p.Gecko, fc = p.Goanna, gb = p.WebKit, kb = p.SafariMobile || p.iOSWebView, Od = p.OperaMini && p.UCWEB;
  D || sb || (new oc('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Zc = F.scripts, Pd = (sb ? "ie5mac" : 5.5 > D ? "ie5win" : 6 > D ? "ie55" : 10 > D ? "ie" + (D | 0) : "modern") + ".css", $c = 0 === location.href.indexOf("https"), ab = [], wc, yb = 0, gc, Ta, ha, Qd = sa(ya.transform) ? "transform" : sa(ya["-o-transform"]) ? "-o-transform" : sa(ya["-ms-transform"]) ? "-ms-transform" : sa(ya["-moz-transform"]) ? "-moz-transform" : sa(ya["-webkit-transform"]) ? "-webkit-transform" : "";
  var Na = Zc[Zc.length - 1].src.split("/");
  --Na.length;
  var Rd = Na.join("/");
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
  Ma.push(function() {
    Ya(function() {
      (hc = q.logger || F.all.logger) || alert("#logger not found!");
      for (hc ? v = function(a) {
        ea(hc, "P", null, null, a);
      } : q.console && (v = console.log); ic.length;) {
        v(ic.shift());
      }
    });
  });
  v = function(a) {
    ic.push(a);
  };
  var bd = function(a) {
    $a.length || (Fa = setInterval(Za, tc));
    $a.push({f:a, g:++ad});
    return ad;
  };
  var $a = [], tc = 999, ad = 0, Fa;
  if (5 > D || sb) {
    q._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Ma.push(function() {
    6.1 > kb && cd(nd);
    tb(sc);
  });
  var K = function(a, b, c) {
    ma.length || (za = ub(Oa, Pa));
    ma.push({f:a, p:b, g:++dd, t:new ra - 0 + (Pa < c ? c : Pa)});
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
  var ma = [], Pa = 64, dd = 0, za;
  if (5 > D || sb) {
    q._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  Ma.push(function() {
    6.1 > kb && cd(od);
    tb(uc);
  });
  var Ea = q.matchMedia, Ha;
  ab.push(function() {
    Ha = ea(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var Ya = function(a) {
    ab.push(a);
  };
  var tb = function(a) {
    fd.push(a);
  };
  var fd = [], xb = q.onload, gd = q.onunload;
  onload = wb;
  onunload = function(a) {
    var b;
    gd && (b = gd(a));
    da(fd, a);
    onunload = Ga;
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
  10 <= D || Xc ? (Ea("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Qa = zb = a.matches;
    da(Ra, bb());
  }), Ea("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Qa = Ab = a.matches;
    da(Ra, bb());
  }), Ea("(-ms-high-contrast:active)").addListener(function(a) {
    Qa = a.matches;
    da(Ra, bb());
  }), Ia = null) : 10 > D || (p.Win32 || p.Win64) && (44 <= ec || fc) ? Ya(function() {
    Ha.style.color = "#123456";
    Ha.style.backgroundColor = "#123456";
    60 > ec || fc ? Ia() : Ia() && bd(Ia, 1000);
    Ia = null;
  }) : Ia = null;
  var Sd = [];
  Ea && Ea("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(Sd, a.matches);
  });
  var kc = [];
  q.onbeforeprint ? (onbeforeprint = function() {
    da(kc, !0);
  }, onafterprint = function() {
    da(kc, !1);
  }, tb(function() {
    onbeforeprint = onafterprint = Ga;
  })) : Ea && Ea("print").addListener(function(a) {
    da(kc, a.matches);
  });
  var cd = function(a) {
    hd.push(a);
  };
  var hd = [], lc = q.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    wb || da(hd);
    return b;
  };
  tb(function() {
    onscroll = lc = Ga;
  });
  var Td = cb("html")[0];
  var Cb = cb("head")[0];
  var db;
  var Db = void 0;
  var Bc = {};
  ha || jc(function(a) {
    a && !sa(ha) && (ha = 1.8 <= ec || fc || 8 <= D || Xc || 530 <= gb || 3.2 <= kb, ha || (a = ea(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ha = 6 <= a.offsetWidth, Aa(a)));
  });
  var fb;
  9 > D && Ya(function(a) {
    a = ea(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    gc = 1 < a.offsetHeight;
    a.style.cssText = "";
    Aa(a);
  });
  var sd = function(a) {
    function b() {
      l || (c.complete ? (l = !0, c.width || K(a, !1)) : e = K(b));
    }
    if (id) {
      var c = new Image, e, l;
      c.onerror = function() {
        (!D || 11 === D || 11 === p.IEHost) && c.width || l || (l = !0, e && ed(e), e = K(a, !1));
      };
      c.onload = function() {
        l = !0;
        e && ed(e);
        Yc && !c.complete ? e = K(a, !1) : (Ta = !0, K(a, !0));
      };
      c.src = id;
      8 > Yc && c.complete ? (Ta = !0, K(a, !0)) : l || (e = K(b));
    } else {
      v("[imageTest] TEST_IMAGE_URL is undefined!"), K(a, !1);
    }
  };
  var id = $c ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var rd = Ac;
  var Cc = "bad_" + (new ra - 0) + "_";
  for (p.IEHost && 5.5 > D && Ya(function() {
    ea(Cb, "link", {href:Rd + "/" + Pd, rel:"stylesheet", type:"text/css"});
  }); Ma.length;) {
    Ma.shift()();
  }
  Ma = null;
  var Y = String.fromCharCode, I = $c ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  Ra.push(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((Qd || 9 === D || 5.5 <= D && 9 > D && gc) && ta(M, "jsCanRotate"), a) {
        case 1:
          ta(M, "jsHcm");
          break;
        case 2:
          ta(M, "jsHcmWob");
          break;
        case 3:
          ta(M, "jsHcmBow");
      }
    } else {
      eb("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, jd;
  jc(function(a) {
    function b(w) {
      var m = w.getAttribute("pbtip") || "", t = m.charAt(0), H = "_" === t;
      m = H ? m.charAt(2) : t;
      t = H ? "Btm" : "";
      var S = w.getAttribute("title") || "";
      ta(w, "pbTipPos" + m.toUpperCase());
      ea(w, "div", {className:"pbTip" + t}, {width:S.length + l + "em"}, S);
      ea(w, "div", {className:"pbTail" + t});
      z && H && (w.focus(), w.blur());
    }
    function c(w) {
      if (ha && N) {
        e(w);
      } else {
        var m = w.getAttribute("pbGhos") || "", t = m.substr(1), H = w.className, S = H.split("pbCsr")[1] || "";
        H = H.split("pbAlp")[1] || "";
        if ("CS" === t) {
          var R = "_";
        } else {
          R = t, 3 === R.length && (R = R.substr(0, 2)), R = Ba[parseInt(R, 16)] || "~";
        }
        S = S.split(" ")[0];
        H = H.split(" ")[0];
        H = 10 - Z(H);
        m ? (m = {className:["pbChr" + t + " pbAlp" + H + " pbCsr" + S]}, db = 1, G = ea(w, "b", m, 0, R), e(w), e(G)) : e(w);
      }
    }
    function e(w) {
      aa || C || Ja(w, "pbChrCS") && Ib.push(w);
    }
    if (a && !jd) {
      jd = !0;
      var l = 6 > D ? 1 : 0;
      a = cb("SAMP");
      var C = 9 > D, z = 5 <= D && 6 > D, y, G, J, x;
      gc && ta(M, "pbLCD-AX");
      if (a.length) {
        var aa = void 0 !== ya.opacity || void 0 !== ya["-moz-opacity"] || void 0 !== ya["-khtml-opacity"], N = !aa && !C && !0, Q = !ha || N || void 0;
        for (J = -1; y = a[++J];) {
          if (Ja(y.parentElement || y.parentNode, "pbLCD")) {
            var va = y.children;
            for (y = va.length; y;) {
              var P = va[--y];
              switch(P.tagName.toUpperCase()) {
                case "A":
                  if (Q) {
                    for (ha || b(P), x = P.children.length; x;) {
                      c(P.children[--x]);
                    }
                  }
                  Od ? P.setAttribute("href", "javascript:void(0)") : P.onclick = qd;
                  break;
                case "B":
                  Q && c(P);
              }
            }
          }
        }
        Ib.length ? (setInterval(Dc, 500), ha ? Ka([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ka([".pbChrCS", "background-position:0 -51px"])) : Dc = null;
        N && (ha ? Ka([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + I + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        I + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + I + "pbLCD/x3_a90.png)"]) : Ka([".pbAlp1", "background-image:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        I + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + I + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + I + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > gb && (Td.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === D && (new oc("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(F);
  var Ob = Ba[7], Fc = Ba[30], ud = Ba[113], ib = Y(8337) + Y(8331), Pb = Y(160), yd = Y(8194), wd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), xd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), vd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Fc + Ba[31]).split(""), wa = 
  [], Mb = [], Sa, Nb;
  jc(function(a) {
    if (a && !Nb) {
      var b = F.all || cb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ja(c, "pbList") ? jb(c) : Ja(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && jb(c, !0);
      }
      wa.length && (v("[pbList] " + wa.length + " elements found. WebFont test start."), hb());
      Nb = !0;
    }
  });
  kd.prettify = jb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

