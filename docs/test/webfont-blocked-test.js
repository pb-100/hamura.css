PB100 = {};
(function(nd, t, u, od, G, ra, oc, Z, pc, vb, Wd, wb, pd, sa, Xd) {
  function xb(a, b) {
    var c = Z(a.split(b)[1]);
    return 0 <= c ? c : 0;
  }
  function g(a, b) {
    return 0 <= a.indexOf(b);
  }
  function l(a, b) {
    var c = "", e = -1, k;
    if (a = a.split(b)[1]) {
      for (; k = a.charCodeAt(++e);) {
        if (48 <= k && 57 >= k || 46 === k) {
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
      var k = Z(a[c]), E = Z(b[c]);
      if (k !== E) {
        return k > E ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function rc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], k; b < c; ++b) {
      0 > qc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function sc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function y() {
  }
  function ta(a) {
    return void 0 !== a;
  }
  function bb() {
    for (var a, b = 0; b < cb.length; ++b) {
      a = cb[b], a.f();
    }
  }
  function qd() {
    Fa && (tc(), Fa = setInterval(bb, uc));
  }
  function tc() {
    Fa && (Fa = clearInterval(Fa));
  }
  function Oa() {
    for (var a, b = 0, c = new sa - 0; b < na.length;) {
      c < na[0].t ? ++b : (a = na.splice(b, 1)[0], a.f(a.p));
    }
    Aa = na.length ? wb(Oa, Pa) : 0;
  }
  function rd() {
    Aa && (vc(), Aa = wb(Oa, Pa));
  }
  function vc() {
    Aa && (Aa = pd(Aa));
  }
  function da(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function yb(a) {
    var b;
    zb && (b = zb(a));
    da(Qa, a);
    onload = Ga;
    Qa = yb = zb = onload = null;
    return b;
  }
  function wc() {
    var a = 9 === Ha.offsetWidth;
    xc !== a && da(yc, xc = a);
  }
  function Ia() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = G.defaultView, c = Ab, e = b ? b.getComputedStyle(Ha, null) : Ha.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Ra = "#123456" !== b && "rgb(18,52,86)" !== b, Bb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Cb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== db() && da(Sa, Ab), !0;
    }
  }
  function db() {
    return Ab = Ra ? Cb ? 2 : Bb ? 3 : 1 : 0;
  }
  function eb(a) {
    var b = b || G;
    return zc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function fa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Db(a, b) {
    var c = G.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ea(a, b, c, e, k) {
    function E(A, J) {
      for (var q in J) {
        switch(q) {
          case "class":
          case "className":
            va(A, J[q]);
            break;
          default:
            A.setAttribute(q, J[q]);
        }
      }
    }
    function m(A, J) {
      var q = A.style, aa;
      for (aa in J) {
        q[aa] = J[aa];
      }
    }
    if ("style" === b) {
      var n = !0;
      b = Db("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = Db(b);
    }
    fb ? (2 === fb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    fb = 0;
    c && E(b, c);
    e && m(b, e);
    k && !n && b.appendChild(G.createTextNode(k));
    return b;
  }
  function Ac(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Ja(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function va(a, b) {
    var c;
    if (!Ja(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      a.className = c + b;
    }
  }
  function gb(a) {
    if (Ja(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function Bc(a) {
    a = ea(Ta, "style", {type:"text/css", media:"all"}, 0, a);
    Eb = a.sheet || a.styleSheet;
  }
  function Ka(a) {
    for (var b = Eb, c, e, k = "", E; a.length;) {
      c = a.shift(), e = a.shift(), E = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(E, b.cssRules.length) : k += E;
    }
    k && Bc(k);
  }
  function Cc(a) {
    function b(e) {
      hb = e;
      c.onload = c.onerror = Ga;
      K(a, e);
    }
    if (ta(hb)) {
      y("[dataUriTest] already done : " + hb), K(a, hb);
    } else {
      if (8 > B) {
        y("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        y("[dataUriTest] start!");
        var c = new Image;
        c.onerror = function() {
          y("[dataUriTest] no DATA URI!");
          c.onload = c.onerror = Ga;
          b(!1);
        };
        c.onload = function() {
          y("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Dc(a, b, c, e, k, E) {
    function m() {
      var v = '1.6em "' + b + '"';
      y("[webFontTest] testByNativeFontLoaderAPI start.");
      G.fonts.load(v).then(function(C) {
        y("[webFontTest] fonts.check() : " + G.fonts.check(v, "i") + ", fonts.length : " + C.length);
        q(b) ? K(a, R) : (y("[webFontTest] mesureWebFont() : false"), A(!0));
      }, function(C) {
        y("[webFontTest] fonts.load() rejected! " + C);
        Cc(aa);
      });
    }
    function n(v) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (P = new sa - 0, !1) : v < new sa - P;
    }
    function A(v) {
      v && (y("[webFontTest] testWebFont start."), P = new sa - 0);
      q(b) ? (y("[webFontTest] testWebFont mesurement success : " + R), a(R)) : n(wa) ? (y("[webFontTest] testWebFont timeout!"), z ? a(0) : 9 > B ? K(a, 0) : Cc(aa)) : K(A);
    }
    function J() {
      var v = -1, C;
      J = null;
      H = ["sans-serif", "serif"];
      p = ea(M, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (S = {}; C = H[++v];) {
        p.style.fontFamily = C, S[C] = p.offsetWidth;
      }
    }
    function q(v) {
      var C = 0, ha = -1, Fb, Gb, Hb = 0;
      J && J();
      for (M.appendChild(p); Fb = H[++ha];) {
        if (p.style.fontFamily = '"' + v + '",' + Fb, p.offsetWidth !== S[Fb]) {
          C = 1;
          break;
        }
      }
      if (C && k) {
        for (Gb in k) {
          if (p.innerHTML = Gb, v = p.offsetWidth, p.innerHTML = k[Gb], Hb = v === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Hb) {
            break;
          }
        }
      }
      fa(p);
      return R = C + Hb;
    }
    function aa(v) {
      y("[webFontTest] testDataUriComplete : " + v);
      (z = v) ? N(!0) : a(0);
    }
    function N(v) {
      v && (P = new sa - 0);
      for (C in c) {
        if (q(C)) {
          y("[webFontTest] success! " + C);
          w = ea(M, "div", {"aria-hidden":"true", className:e, id:e});
          v = c[C];
          var C = Eb, ha = Ec.all || 0;
          C ? C.addImport ? C.addImport(v, ha) : C.insertRule && C.insertRule('@import "' + v + '"', ha) : Bc('@import "' + v + '"');
          Ec.all = ++ha;
          K(Q, !0);
        } else {
          n(100) ? (y("[webFontTest] timeout! " + C), delete c[C], K(N, !0)) : K(N);
        }
        return;
      }
      a(0);
    }
    function Q(v) {
      v && (y("[webFontTest] testImportedCssReady start!"), b = b.replace(Fc, ""), y("[webFontTest] targetWebFontName : " + b), P = new sa - 0);
      1 < w.offsetWidth ? (y("[webFontTest] testImportedCssReady ended."), fa(w), wa = 100, K(A, !0)) : n(wa) ? (y("[webFontTest] testImportedCssReady timeout!"), fa(w), a(0)) : K(Q);
    }
    var wa = E || 5000, P, z, p, w, H, S, R;
    b = Fc + b;
    y("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var v;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var C = ea(Ta, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), ha = (ha = C.sheet || C.styleSheet) ? (v = ha.cssRules) && (v = v[0]) ? v.cssText : ha.cssText || "" : "";
      v = 0 < ha.indexOf("src") && 0 === ha.indexOf("@font-face");
      fa(C);
      return v;
    })() ? (y("[webFontTest] maybeCanWebFont() : true"), !G.fonts || 603 > ib ? (y("[webFontTest] No native font loader."), A(!0)) : (y("[webFontTest] Use Native font loader."), m())) : (y("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Gc() {
    Ib = !Ib;
    for (var a = -1, b; b = Jb[++a];) {
      b.style.visibility = Ib ? "" : "hidden";
    }
  }
  function sd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Kb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function jb() {
    jb = null;
    td(Lb, "PB-100", {"PB-100_canTTF":I + "pbFont/ttf.css", "PB-100_canWOFF":I + "pbFont/woff.css", "PB-100_canEOT":I + "pbFont/eot.css", "PB-100_canSVG":I + "pbFont/svg.css"}, "pbFont-testCssReady", {h:kb}, 5000);
  }
  function Lb(a) {
    Ua = a;
    y("[pbList] WebFont test result : " + !!a);
    Ua ? Mb() : Va ? Hc(!0) : ta(Va) ? Mb() : ud(Hc);
  }
  function Hc(a) {
    a && (y("[pbList] Fallback start!"), va(M, "pbList-noWebFont"), ia ? Ka([".pbList font:after", "content:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ka([".pbList font", "background-image:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Mb();
  }
  function Mb() {
    for (Lb = Dc = null; xa.length;) {
      lb(xa.shift(), Nb.shift());
    }
    y("[pbList] complete.");
  }
  function lb(a, b) {
    function c(E) {
      E = E.childNodes;
      for (var m = -1, n; n = E[++m];) {
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
    if (Lb) {
      -1 === xa.indexOf(a) && (xa.push(a), Nb.push(b), Ob && jb && jb());
    } else {
      var k = xa.indexOf(a);
      0 <= k && xa.splice(k, 1) && Nb.splice(k, 1);
      for (c(a); a = e.shift();) {
        k = a.data, 2 !== Ua && (k = k.split(kb).join(Ic)), b ? a.data = k : vd(k.split("\r").join("").split("&yen;").join(wd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Pb).split("&amp;").join("&"), a);
      }
    }
  }
  function vd(a, b) {
    function c(p, w) {
      for (var H = ""; w;) {
        w & 1 && (H += p), w >>= 1, p += p;
      }
      return H;
    }
    function e(p, w, H) {
      for (var S, R = -1, v, C; S = w[++R];) {
        for (; 0 <= (v = p.indexOf(S));) {
          C = S.length, p = p.substr(0, v) + c(H, C) + p.substr(v + C);
        }
      }
      return p;
    }
    function k(p) {
      var w = Z(p), H = "" + w;
      return 0 < w && w === w | 0 && (w = p.indexOf(H) + H.length, w <= p.length) ? w : 0;
    }
    var E = " area line str cmd fnc syb".split(" "), m = [], n = "", A = -1, J, q;
    if (function(p) {
      var w = p.indexOf("P");
      if (-1 === w) {
        return !1;
      }
      w = Z(p.charAt(w + 1));
      return 0 <= w && 9 >= w;
    }(a)) {
      n = c("+", a.length);
    } else {
      for (0 <= (A = k(a)) && (n = c("|", A), --A); q = a.charAt(++A);) {
        q === Pb || J ? (n += "~", q === Pb && (J = !J)) : n += q;
      }
      n = e(n, xd, "^");
      n = e(n, yd, "{");
      n = e(n, zd, "}");
    }
    A = 0;
    for (J = a.length; A < J; ++A) {
      q = a.charAt(A);
      var aa = q === Qb, N = " " === q;
      q = aa ? " " : q;
      var Q = n.charAt(A), wa = P, P = "|" === Q;
      Q = E["+|~{}^".indexOf(Q) + 1];
      if ("\n" !== q) {
        if (Ua || !Va) {
          8 > B && N && (q = A === J - 1 ? Qb : Ad), 2 === Ua && a.substr(A, 2) === kb && (q = kb, ++A), N = N && "str" === Q ? ' class="pbList-strsp"' : aa ? "" : !N && Q ? ' class="pbList-' + Q + '"' : "";
        } else {
          var z = Ba.indexOf(q);
          z = -1 === z ? "" : Ba.indexOf(q).toString(16).toUpperCase();
          z = (z = 1 === z.length ? "0" + z : z) ? "pbChr" + z : "";
          N = N && "str" === Q ? ' class="pbList-strsp"' : N || !z ? "" : Q ? ' class="' + (z ? z + " " : "") + "pbList-" + Q + '"' : ' class="' + z + '"';
        }
        wa && aa && (ib || mb) && (q = Qb);
        m.push("<font" + N + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (E = Db("font", m); m = E.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      fa(b);
    }
  }
  var r, x, d = ra.userAgent, T = ra.appVersion, Rb = Z(T) | 0, F = ra.platform, Sb = G.documentElement, Jc = Sb && Sb.style, Tb = G.documentMode, Ub = oc.width, Vb = oc.height, Kc = u.HTMLAudioElement, Lc = u.performance, Mc = u.Int8Array, Bd = void 0 !== u.ontouchstart, Ca = l(T, "Version/") || l(d, "Version/"), La = void 0 !== Jc.MozAppearance, Nc = u.operamini, Wb = g(d, "UCWEB"), Cd = Wb && l(d, " U2/"), Dd = Wb && l(d, "; wds "), Xb = l(d.split("_").join("."), "; iPh OS "), Ed = l(d, "; Adr "), 
  Oc = g(T, "YJApp-ANDROID"), ja = g(F, "Android") || La && g(T, "Android") || Oc, U = l(F, "Android ") || l(T, "Android ") || l(d, "Android ") || Ed, Yb = g(F, "Linux"), Zb = "MacIntel" === F && void 0 !== ra.standalone, Da = !Nc && u.opera, Fd = Da && (Da.version && "function" === typeof Da.version ? Da.version() : rc(l(d, "Opera "), Ca, "" + Rb)), Pc = u.opr, nb = !Da && (G.all || Tb), ba = nb && (Tb ? Tb : u.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), $b = !nb && Sb.msContentZoomFactor, ob = !$b && u.chrome, ac = La && l(d, "Goanna/"), la = !ac && La && l(d, "rv:"), Gd = l(d, "Firefox/"), Hd = l(d, "Opera/"), Id = u.FNRBrowser, oa = xb(d, "AppleWebKit/"), Wa = l(d, "Chrome/"), Qc = l(d, "OPR/"), Jd = l(T, "KHTML/"), Kd = l(d.toLowerCase(), "iris"), Xa = xb(d, "SamsungBrowser/"), Ya;
  if (Ya = !Xa) {
    a: {
      for (var Rc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      pb, bc = Rc.length; pb = Rc[--bc];) {
        if (g(d, pb)) {
          Ya = 2 > Z(Ca) ? Ca : 0.9;
          break a;
        }
      }
      var Sc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (bc = Sc.length; pb = Sc[--bc];) {
        if (g(d, pb)) {
          Ya = Ca;
          break a;
        }
      }
      Ya = void 0;
    }
  }
  var Tc = Ya, Uc = ob && 534.3 >= oa, Vc = Bd && (oa || La) && (0 === F.indexOf("Linux armv") || 0 === F.indexOf("Linux aarch") || "Linux i686" === F) && g(d, "Linux x86_64") || !U && Oc, Wc = u.puffinDevice, qb = Wc && Wc.clientInfo, Za = qb && "iOS" === qb.os && qb.osVersion, Ld = Za && qb.model, cc = !ba && G.registerElement, Md = !ba && G.execCommand, Nd = Yb && cc && "11.0.696.34" === Wa, Od = u._firefoxTV_playbackStateObserverJava, ya, ka, D;
  if ("Nitro" === F) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      h = "NDSi";
      var f = Hd;
    } else {
      if ("New Nintendo 3DS" === F || g(d, "iPhone OS 6_0") && 320 === Ub && 240 === Vb) {
        h = "New3DS", f = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          h = "N3DS", f = l(d, "Version/"), oa = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            h = "Swicth", f = l(T, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              h = "WiiU", f = l(T, "NintendoBrowser/"), oa = l(T, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                h = "Wii";
                f = l(d, "Wii; U; ; ");
                var L = h;
                var O = f;
              } else {
                if (D = l(d, "PlayStation Vita ")) {
                  h = "PSVita", f = D, L = h, O = D;
                } else {
                  if (D = l(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = D;
                    var Xc = 3.3;
                    L = h;
                    O = D;
                  } else {
                    if (D = l(d, "PLAYSTATION 3; ") || l(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = D, L = h, O = D, 0 > qc("4.10", D) && (r = "Sony", x = D);
                    } else {
                      if (g(d, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(d, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Rb && g(d, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Xc = 3.4;
                            L = h;
                            O = 2;
                            var rb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Xb || Za || Zb) {
                              if (Za) {
                                switch(f = Za, Ld.substr(0, 4)) {
                                  case "iPho":
                                    var pa = "iPhone";
                                    var ca = !0;
                                    break;
                                  case "iPad":
                                    pa = "iPad";
                                    var V = !0;
                                    break;
                                  case "iPod":
                                    pa = "iPod";
                                    var Yc = !0;
                                }
                              } else {
                                Xb ? f = Xb : f = l(T.split("_").join("."), "OS ");
                                f || (ka = !0);
                                if (!f || Id) {
                                  f = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ra.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : pc.isNaN ? 9.2 : u.SharedWorker ? Lc && Lc.now ? 8.0 : 8.4 : Md ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Mc ? 4.3 : Kc ? 4.1 : 3.2;
                                }
                                var W = Ub === 1.5 * Vb || 1.5 * Ub === Vb;
                                0 === F.indexOf("iPhone") ? (pa = "iPhone", ca = !0) : 0 === F.indexOf("iPad") || Zb ? (pa = "iPad", V = !0) : 0 === F.indexOf("iPod") && (pa = "iPod", Yc = !0);
                              }
                              var dc;
                              if (dc = !Za) {
                                var ec;
                                if (!(ec = ra.standalone)) {
                                  var sb;
                                  if (sb = V || 12 > f) {
                                    a: {
                                      for (var Pd in G) {
                                        if ("webkitFullscreenEnabled" === Pd) {
                                          sb = !0;
                                          break a;
                                        }
                                      }
                                      sb = void 0;
                                    }
                                  }
                                  ec = sb;
                                }
                                dc = ec || 11 <= f && 13 > f && ra.mediaDevices;
                              }
                              dc ? (r = "SafariMobile", L = "Safari", O = f) : r = "iOSWebView";
                              h = "iOS";
                              x = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", r = "AOSP", x = 2.2, L = r, O = x, ja = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", x = 2.2, L = r, O = x;
                                } else {
                                  if (D = l(d, "CrOS x86_64 ") || l(d, "CrOS aarch64 ") || l(d, "CrOS i686 ") || l(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = D;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > la ? "1.0.1" : 19 > la ? 1.1 : 27 > la ? 1.2 : 29 > la ? 1.3 : 31 > la ? 1.4 : 33 > la ? 2.0 : 35 > la ? 2.1 : 38 > la ? 2.2 : 45 > la ? 2.5 : 2.6, g(d, "Mobile") ? ca = !0 : g(d, "Tablet") && (V = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", f = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), L = h, O = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (D = l(d, "Tizen ")) {
                                          h = "Tizen", f = D, L = "Samsung", O = Xa, r = L, x = O, ca = !0;
                                        } else {
                                          if (D = l(d, "Windows Phone ") || l(T, "Windows Phone OS ") || Dd) {
                                            var tb = !0;
                                            f = D;
                                            ca = !0;
                                          } else {
                                            if ($b && "ARM" === F) {
                                              tb = !0, f = 10, ka = ca = !0;
                                            } else {
                                              if (nb && g(T, "ZuneWP")) {
                                                tb = !0, f = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ka = ca = !0;
                                              } else {
                                                if (g(d, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (g(d, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (g(d, "KFMUWI")) {
                                                      var qa = !0;
                                                      f = 6.3;
                                                      var X = V = !0;
                                                    } else {
                                                      if (g(d, "KFKAWI")) {
                                                        qa = !0, f = 6, X = V = !0;
                                                      } else {
                                                        if (g(d, "KFSUWI") || g(d, "KFAUWI") || g(d, "KFDOWI")) {
                                                          qa = !0, f = 5, X = V = !0;
                                                        } else {
                                                          if (g(d, "KFGIWI")) {
                                                            qa = !0, f = 5, X = V = !0;
                                                          } else {
                                                            if (g(d, "KFARWI") || g(d, "KFSAWA") || g(d, "KFSAWI")) {
                                                              qa = !0, f = 5 <= Z(U) ? 5 : 4, X = V = !0;
                                                            } else {
                                                              if (g(d, "KFSOWI") || g(d, "KFTHWA") || g(d, "KFTHWI") || g(d, "KFAPWA") || g(d, "KFAPWI")) {
                                                                qa = !0, f = 3, X = V = !0;
                                                              } else {
                                                                if (g(d, "KFOT") || g(d, "KFTT") || g(d, "KFJWA") || g(d, "KFJWI")) {
                                                                  qa = !0, f = 2, X = V = !0;
                                                                } else {
                                                                  if (g(d, "Kindle Fire")) {
                                                                    qa = !0, f = 1, X = V = !0;
                                                                  } else {
                                                                    if (D = l(d, "Kindle/")) {
                                                                      h = "Kindle", f = D, r = "AOSP", x = 2.2, L = r, O = x;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Od) {
                                                                        qa = !0, f = U, X = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Kd) {
                                                                              h = "WindowsMobile", rb = !0;
                                                                            } else {
                                                                              if ("WinCE" === F) {
                                                                                h = F, rb = !0;
                                                                              } else {
                                                                                if ("Win16" === F || "Win32" === F || "Win64" === F) {
                                                                                  h = F, f = l(d, "Windows NT ") || l(d, "Windows ");
                                                                                } else {
                                                                                  if (0 === F.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === F ? "MacPPC" : F;
                                                                                    if (D = l(d.split("_").join("."), "Mac OS X ")) {
                                                                                      f = D;
                                                                                    }
                                                                                    var Zc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ca, ca = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ja && La ? (g(d, "Android 4.4;") ? W = {min:2.3} : 4 <= Z(U) ? W = U : W = {min:2.2}, f = W, Vc && (ka = !0)) : ja && Da ? (U ? W = U : (W = {min:1.6}, ka = !0), f = W, g(d, "Tablet") ? V = 
                                                                                    !0 : ca = !0) : U ? (f = U, ja = !0) : Yb && Vc ? (ya = !0, Xa ? W = {min:4.4} : ob && !Uc || Pc || Qc ? W = {min:4} : (W = U = void 0 !== Jc.touchAction ? {min:5} : cc ? 4.4 : Mc ? ra.connection ? u.searchBoxJavaBridge_ || ob ? pc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= oa ? 3 : 533 <= oa ? Kc ? 2.3 : 2.2 : 530 <= oa ? 2.0 : 1.5, Tc && (r = "Samsung", x = Tc)), f = W, ja = !0) : Nd ? (f = {min:5}, ya = ja = !0) : Yb && 
                                                                                    (g(d, "Ubuntu") ? h = "Ubuntu" : (D = l(d, "Mint/")) ? (h = "Mint", f = D) : (D = l(d, "Fedora/")) ? (h = "Fedora", f = D) : h = g(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qa && (h = "FireOS");
  ja && (h = h || "Android");
  tb && (h = "WindowsPhone");
  r || (X = X || ja, Da ? (r = X || rb || ca || V ? "PrestoMobile" : "Presto", x = Fd) : nb ? ((W = xb(T, "Trident/") + 4) && W !== ba && (L = "IEHost", O = W), 10 <= ba && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = ba), rb || ca || V || Yc ? r = "TridentMobile" : Zc && 5 <= ba ? (r = "Tasman", L = "MacIE", O = ba) : (r = "Trident", Zc && (L = "MacIE", O = ba)), x = ba) : $b ? (r = tb ? "EdgeMobile" : "EdgeHTML", x = l(T, "Edge/")) : ac ? (r = "Goanna", 
  x = ac) : La ? (r = X ? "Fennec" : "Gecko", x = la || Gd) : Xa ? (r = "Samsung", x = Xa, ya && (ka = !0)) : (D = Xc || l(d, "NetFront/")) ? (r = "NetFront", x = D) : (D = l(d, "iCab")) ? (r = "iCab", x = D) : (D = rc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Nc && Ca) ? (r = "OperaMini", x = D, h || (g(d, "iPhone") ? pa = "iPhone" : g(d, "iPad") ? pa = "iPad" : g(d, "iPod") && (pa = "iPod"), pa && (h = "iOS"))) : Wb ? (r = "UCWEB", x = Cd) : Jd ? (r = "KHTML", x = Rb) : ja && Uc ? (r = "AOSP", 
  x = U, ya && (ka = !0)) : ob || Pc || Qc ? (r = X ? "ChromiumMobile" : "Chromium", x = Wa, ya && (ka = !0)) : ja && cc ? (r = "ChromeWebView", x = 5 > Z(U) ? U : Wa, ya && (ka = !0)) : ja && (Ca || ya) ? (r = "AOSP", x = U, ya && (ka = !0)) : Wa ? (r = X ? "ChromiumMobile" : "Chromium", x = Wa) : oa && (r = "WebKit", x = oa));
  h && (t.PLATFORM = h, f ? (t.PLATFORM_VERSION = sc(f), t[h] = f === f + "" ? Z(f) : f) : t[h] = !0);
  r && (t.ENGINE = r, x ? (t.ENGINE_VERSION = sc(x), t[r] = x === x + "" ? Z(x) : x) : t[r] = !0, L || (L = r, O = x));
  if (ka || Zb) {
    t.PC_MODE = !0;
  }
  var Ga = od, Ma = [], zc = !!G.getElementsByTagName, M = G.body, za = M.style, B = t.Trident || t.TridentMobile, $a = t.Tasman, $c = t.EdgeHTML || t.EdgeMobile, fc = t.Presto || t.PrestoMobile, gc = t.Gecko, hc = t.Goanna, ib = t.WebKit, mb = t.SafariMobile || t.iOSWebView, Qd = t.OperaMini && t.UCWEB;
  B || $a || (new vb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Rd = 5.5 > B, ad = G.scripts, Sd = ($a ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", bd = 0 === location.href.indexOf("https"), Qa = [], xc, Ab = 0, ic, Va, ia, Td = ta(za.transform) ? "transform" : ta(za["-o-transform"]) ? "-o-transform" : ta(za["-ms-transform"]) ? "-ms-transform" : ta(za["-moz-transform"]) ? "-moz-transform" : ta(za["-webkit-transform"]) ? "-webkit-transform" : "";
  var Na = ad[ad.length - 1].src.split("/");
  --Na.length;
  var Ud = Na.join("/");
  0 <= "http: https:".indexOf(Na[0]) && Na.splice(0, 3);
  Na = Na.join("/");
  var ma = Array.prototype;
  ma.pop || (ma.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ma.push || (ma.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ma.shift || (ma.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ma.splice || (ma.splice = function(a, b) {
    var c = arguments, e = c.length - 2 - b, k = this.slice(a, a + b), E;
    if (0 < e) {
      var m = this.length - 1;
      for (E = a + b; m >= E; --m) {
        this[m + e] = this[m];
      }
    } else {
      if (0 > e) {
        m = a + b;
        for (E = this.length; m < E; ++m) {
          this[m + e] = this[m];
        }
        this.length += e;
      }
    }
    m = 2;
    for (E = c.length; m < E; ++m) {
      this[m - 2 + a] = c[m];
    }
    return k;
  });
  ma.indexOf || (ma.indexOf = function(a, b) {
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
  Ma.push(function() {
    ab(function() {
      (jc = u.logger || G.all.logger) || alert("#logger not found!");
      for (jc ? y = function(a) {
        ea(jc, "P", null, null, a);
      } : u.console && (y = console.log); kc.length;) {
        y(kc.shift());
      }
    });
  });
  y = function(a) {
    kc.push(a);
  };
  var dd = function(a) {
    cb.length || (Fa = setInterval(bb, uc));
    cb.push({f:a, g:++cd});
    return cd;
  };
  var cb = [], uc = 999, cd = 0, Fa;
  if (5 > B || $a) {
    u._wdb_onlooptimer = bb, bb = "_wdb_onlooptimer()";
  }
  Ma.push(function() {
    6.1 > mb && ed(qd);
    ub(tc);
  });
  var K = function(a, b, c) {
    na.length || (Aa = wb(Oa, Pa));
    na.push({f:a, p:b, g:++fd, t:new sa - 0 + (Pa < c ? c : Pa)});
    return fd;
  };
  var gd = function(a) {
    for (var b = na.length, c; c = na[--b];) {
      if (c.g === a) {
        na.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var na = [], Pa = 64, fd = 0, Aa;
  if (5 > B || $a) {
    u._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  Ma.push(function() {
    6.1 > mb && ed(rd);
    ub(vc);
  });
  var Ea = u.matchMedia, Ha;
  Qa.push(function() {
    Ha = ea(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var ab = function(a) {
    Qa.push(a);
  };
  var ub = function(a) {
    hd.push(a);
  };
  var hd = [], zb = u.onload, id = u.onunload;
  onload = yb;
  onunload = function(a) {
    var b;
    id && (b = id(a));
    da(hd, a);
    onunload = Ga;
    return b;
  };
  var lc = function(a) {
    yc.push(a);
  };
  var yc = [];
  ab(function() {
    wc();
    dd(wc);
  });
  var Sa = [], Ra, Bb, Cb;
  10 <= B || $c ? (Ea("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Ra = Bb = a.matches;
    da(Sa, db());
  }), Ea("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Ra = Cb = a.matches;
    da(Sa, db());
  }), Ea("(-ms-high-contrast:active)").addListener(function(a) {
    Ra = a.matches;
    da(Sa, db());
  }), Ia = null) : 10 > B || (t.Win32 || t.Win64) && (44 <= gc || hc) ? ab(function() {
    Ha.style.color = "#123456";
    Ha.style.backgroundColor = "#123456";
    60 > gc || hc ? Ia() : Ia() && dd(Ia, 1000);
    Ia = null;
  }) : Ia = null;
  var Vd = [];
  Ea && Ea("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(Vd, a.matches);
  });
  var mc = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    da(mc, !0);
  }, onafterprint = function() {
    da(mc, !1);
  }, ub(function() {
    onbeforeprint = onafterprint = Ga;
  })) : Ea && Ea("print").addListener(function(a) {
    da(mc, a.matches);
  });
  var ed = function(a) {
    jd.push(a);
  };
  var jd = [], nc = u.onscroll;
  onscroll = function(a) {
    var b;
    nc && (b = nc(a));
    yb || da(jd);
    return b;
  };
  ub(function() {
    onscroll = nc = Ga;
  });
  var kd = eb("html")[0];
  var Ta = eb("head")[0];
  var fb;
  Qa.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var E = k.length, m, n, A, J, q; m = k[--E];) {
        if (n = m.nodeType, 8 === n) {
          b && fa(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Rd ? (A = m.sheet || m.styleSheet) && (J = 10 <= B ? A.cssRules : A.rules || A.cssRules) && !J[0] : (new vb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  fa(m);
                  break;
                }
              case "LINK":
                zc && !Ta.contains(m) && e.push(m);
                break;
              case "META":
                n = m.getAttribute("name") || m.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === n.indexOf(c[--q])) {
                    fa(m);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Ac(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Ac(m, "skip-cleanup")) {
                  break;
                }
              case "!":
                fa(m);
                break;
              default:
                m.childNodes.length && a(m);
            }
          }
        }
      }
      for (; e[0];) {
        A = e.pop(), Ta.appendChild(A);
      }
    }
    var b = !(8 > fc || 5 > B || $a), c = ["og:", "twitter:", "fb:"], e = [];
    a(kd);
  });
  var Eb = void 0;
  var Ec = {};
  ia || lc(function(a) {
    a && !ta(ia) && (ia = 1.8 <= gc || hc || 8 <= B || $c || 530 <= ib || 3.2 <= mb, ia || (a = ea(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ia = 6 <= a.offsetWidth, fa(a)));
  });
  var hb;
  9 > B && ab(function(a) {
    a = ea(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    ic = 1 < a.offsetHeight;
    a.style.cssText = "";
    fa(a);
  });
  var ud = function(a) {
    function b() {
      k || (c.complete ? (k = !0, c.width || K(a, !1)) : e = K(b));
    }
    if (ld) {
      var c = new Image, e, k;
      c.onerror = function() {
        (!B || 11 === B || 11 === t.IEHost) && c.width || k || (k = !0, e && gd(e), e = K(a, !1));
      };
      c.onload = function() {
        k = !0;
        e && gd(e);
        fc && !c.complete ? e = K(a, !1) : (Va = !0, K(a, !0));
      };
      c.src = ld;
      8 > fc && c.complete ? (Va = !0, K(a, !0)) : k || (e = K(b));
    } else {
      y("[imageTest] TEST_IMAGE_URL is undefined!"), K(a, !1);
    }
  };
  var ld = bd ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var td = Dc;
  var Fc = "bad_" + (new sa - 0) + "_";
  for (t.IEHost && 5.5 > B && ab(function() {
    ea(Ta, "link", {href:Ud + "/" + Sd, rel:"stylesheet", type:"text/css"});
  }); Ma.length;) {
    Ma.shift()();
  }
  Ma = null;
  var Y = String.fromCharCode, I = bd ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  Sa.push(function(a) {
    gb("jsHcm");
    gb("jsHcmWob");
    gb("jsHcmBow");
    if (a) {
      switch((Td || 9 === B || 5.5 <= B && 9 > B && ic) && va(M, "jsCanRotate"), a) {
        case 1:
          va(M, "jsHcm");
          break;
        case 2:
          va(M, "jsHcmWob");
          break;
        case 3:
          va(M, "jsHcmBow");
      }
    } else {
      gb("jsCanRotate");
    }
  });
  var Jb = [], Ib, Kb, md;
  lc(function(a) {
    function b(z) {
      var p = z.getAttribute("pbtip") || "", w = p.charAt(0), H = "_" === w;
      p = H ? p.charAt(2) : w;
      w = H ? "Btm" : "";
      var S = z.getAttribute("title") || "";
      va(z, "pbTipPos" + p.toUpperCase());
      ea(z, "div", {className:"pbTip" + w}, {width:S.length + k + "em"}, S);
      ea(z, "div", {className:"pbTail" + w});
      m && H && (z.focus(), z.blur());
    }
    function c(z) {
      if (ia && N) {
        e(z);
      } else {
        var p = z.getAttribute("pbGhos") || "", w = p.substr(1), H = z.className, S = H.split("pbCsr")[1] || "";
        H = H.split("pbAlp")[1] || "";
        if ("CS" === w) {
          var R = "_";
        } else {
          R = w, 3 === R.length && (R = R.substr(0, 2)), R = Ba[parseInt(R, 16)] || "~";
        }
        S = S.split(" ")[0];
        H = H.split(" ")[0];
        H = 10 - Z(H);
        p ? (p = {className:["pbChr" + w + " pbAlp" + H + " pbCsr" + S]}, fb = 1, A = ea(z, "b", p, 0, R), e(z), e(A)) : e(z);
      }
    }
    function e(z) {
      aa || E || Ja(z, "pbChrCS") && Jb.push(z);
    }
    if (a && !md) {
      md = !0;
      var k = 6 > B ? 1 : 0;
      a = eb("SAMP");
      var E = 9 > B, m = 5 <= B && 6 > B, n, A, J, q;
      ic && va(M, "pbLCD-AX");
      if (a.length) {
        var aa = void 0 !== za.opacity || void 0 !== za["-moz-opacity"] || void 0 !== za["-khtml-opacity"], N = !aa && !E && !0, Q = !ia || N || void 0;
        for (J = -1; n = a[++J];) {
          if (Ja(n.parentElement || n.parentNode, "pbLCD")) {
            var wa = n.children;
            for (n = wa.length; n;) {
              var P = wa[--n];
              switch(P.tagName.toUpperCase()) {
                case "A":
                  if (Q) {
                    for (ia || b(P), q = P.children.length; q;) {
                      c(P.children[--q]);
                    }
                  }
                  Qd ? P.setAttribute("href", "javascript:void(0)") : P.onclick = sd;
                  break;
                case "B":
                  Q && c(P);
              }
            }
          }
        }
        Jb.length ? (setInterval(Gc, 500), ia ? Ka([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ka([".pbChrCS", "background-position:0 -51px"])) : Gc = null;
        N && (ia ? Ka([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + I + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        I + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + I + "pbLCD/x3_a90.png)"]) : Ka([".pbAlp1", "background-image:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        I + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + I + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + I + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > ib && (kd.onclick = function(a) {
    if (Kb) {
      return Kb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new vb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Pb = Ba[7], Ic = Ba[30], wd = Ba[113], kb = Y(8337) + Y(8331), Qb = Y(160), Ad = Y(8194), yd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), zd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), xd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ic + Ba[31]).split(""), xa = 
  [], Nb = [], Ua, Ob;
  lc(function(a) {
    if (a && !Ob) {
      var b = G.all || eb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ja(c, "pbList") ? lb(c) : Ja(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && lb(c, !0);
      }
      xa.length && (y("[pbList] " + xa.length + " elements found. WebFont test start."), jb());
      Ob = !0;
    }
  });
  nd.prettify = lb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

