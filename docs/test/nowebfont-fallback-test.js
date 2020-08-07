PB100 = {};
(function(Td, t, u, id, G, qa, lc, Z, mc, sb, Ud, tb, jd, ra, Vd) {
  function ub(a, b) {
    var d = Z(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function f(a, b) {
    return 0 <= a.indexOf(b);
  }
  function l(a, b) {
    var d = "", e = -1, k;
    if (a = a.split(b)[1]) {
      for (; k = a.charCodeAt(++e);) {
        if (48 <= k && 57 >= k || 46 === k) {
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
  function nc(a, b) {
    var d = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); d < e; ++d) {
      var k = Z(a[d]), E = Z(b[d]);
      if (k !== E) {
        return k > E ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function oc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], k; b < d; ++b) {
      0 > nc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function pc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function y() {
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function kd() {
    Da && (qc(), Da = setInterval(Za, 999));
  }
  function qc() {
    Da && (Da = clearInterval(Da));
  }
  function La() {
    for (var a, b = 0, d = new ra - 0; b < ma.length;) {
      d < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    ya = ma.length ? tb(La, 64) : 0;
  }
  function ld() {
    ya && (rc(), ya = tb(La, 64));
  }
  function rc() {
    ya && (ya = jd(ya));
  }
  function da(a, b) {
    for (var d = 0, e = a.length; d < e; ++d) {
      a[d](b);
    }
  }
  function vb(a) {
    var b;
    wb && (b = wb(a));
    da(Ma, a);
    onload = ab;
    Ma = vb = wb = onload = null;
    return b;
  }
  function sc() {
    var a = 9 === Ea.offsetWidth;
    tc !== a && da(uc, tc = a);
  }
  function Fa() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = G.defaultView, d = xb, e = b ? b.getComputedStyle(Ea, null) : Ea.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Na = "#123456" !== b && "rgb(18,52,86)" !== b, yb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), zb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== bb() && da(Oa, xb), !0;
    }
  }
  function bb() {
    return xb = Na ? zb ? 2 : yb ? 3 : 1 : 0;
  }
  function cb(a) {
    var b = b || G;
    return vc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function fa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Ab(a, b) {
    var d = G.createElement(a);
    b && (d.innerHTML = b);
    return d;
  }
  function ea(a, b, d, e, k) {
    function E(A, J) {
      for (var q in J) {
        switch(q) {
          case "class":
          case "className":
            sa(A, J[q]);
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
      b = Ab("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = Ab(b);
    }
    db ? (2 === db && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    db = 0;
    d && E(b, d);
    e && m(b, e);
    k && !n && b.appendChild(G.createTextNode(k));
    return b;
  }
  function wc(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Ga(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function sa(a, b) {
    var d;
    if (!Ga(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function eb(a) {
    if (Ga(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function xc(a) {
    a = ea(Pa, "style", {type:"text/css", media:"all"}, 0, a);
    Bb = a.sheet || a.styleSheet;
  }
  function Ha(a) {
    for (var b = Bb, d, e, k = "", E; a.length;) {
      d = a.shift(), e = a.shift(), E = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(E, b.cssRules.length) : k += E;
    }
    k && xc(k);
  }
  function yc(a) {
    if (ta(Qa)) {
      y("[dataUriTest] already done : " + Qa), K(a, Qa);
    } else {
      if (8 > B) {
        y("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        y("[dataUriTest] start!");
        var b = new Image;
        b.onerror = function() {
          y("[dataUriTest] no DATA URI!");
          a(Qa = !1);
        };
        b.onload = function() {
          y("[dataUriTest] DATA URI:" + (1 === b.width * b.height));
          a(Qa = 1 === b.width * b.height);
        };
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function zc(a, b, d, e, k, E) {
    function m() {
      var v = '1.6em "' + b + '"';
      y("[webFontTest] testByNativeFontLoaderAPI start.");
      G.fonts.load(v).then(function(C) {
        y("[webFontTest] fonts.check() : " + G.fonts.check(v, "i") + ", fonts.length : " + C.length);
        q(b) ? K(a, R) : (y("[webFontTest] mesureWebFont() : false"), A(!0));
      }, function(C) {
        y("[webFontTest] fonts.load() rejected! " + C);
        yc(aa);
      });
    }
    function n(v) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (P = new ra - 0, !1) : v < new ra - P;
    }
    function A(v) {
      v && (y("[webFontTest] testWebFont start."), P = new ra - 0);
      q(b) ? (y("[webFontTest] testWebFont mesurement success : " + R), a(R)) : n(va) ? (y("[webFontTest] testWebFont timeout!"), z ? a(0) : 9 > B ? K(a, 0) : yc(aa)) : K(A);
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
      var C = 0, ha = -1, Cb, Db, Eb = 0;
      J && J();
      for (M.appendChild(p); Cb = H[++ha];) {
        if (p.style.fontFamily = '"' + v + '",' + Cb, p.offsetWidth !== S[Cb]) {
          C = 1;
          break;
        }
      }
      if (C && k) {
        for (Db in k) {
          if (p.innerHTML = Db, v = p.offsetWidth, p.innerHTML = k[Db], Eb = v === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Eb) {
            break;
          }
        }
      }
      fa(p);
      return R = C + Eb;
    }
    function aa(v) {
      y("[webFontTest] testDataUriComplete : " + v);
      (z = v) ? N(!0) : a(0);
    }
    function N(v) {
      v && (P = new ra - 0);
      for (C in d) {
        if (q(C)) {
          y("[webFontTest] success! " + C);
          w = ea(M, "div", {"aria-hidden":"true", className:e, id:e});
          v = d[C];
          var C = Bb, ha = Ac.all || 0;
          C ? C.addImport ? C.addImport(v, ha) : C.insertRule && C.insertRule('@import "' + v + '"', ha) : xc('@import "' + v + '"');
          Ac.all = ++ha;
          K(Q, !0);
        } else {
          n(100) ? (y("[webFontTest] timeout! " + C), delete d[C], K(N, !0)) : K(N);
        }
        return;
      }
      a(0);
    }
    function Q(v) {
      v && (y("[webFontTest] testImportedCssReady start!"), y("[webFontTest] targetWebFontName : " + b), P = new ra - 0);
      1 < w.offsetWidth ? (y("[webFontTest] testImportedCssReady ended."), fa(w), va = 100, K(A, !0)) : n(va) ? (y("[webFontTest] testImportedCssReady timeout!"), fa(w), a(0)) : K(Q);
    }
    var va = E || 5000, P, z, p, w, H, S, R;
    b = md + b;
    y("[webFontTest] WEBFONT_DEBUG_MODE : 2");
    (function() {
      var v;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var C = ea(Pa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), ha = (ha = C.sheet || C.styleSheet) ? (v = ha.cssRules) && (v = v[0]) ? v.cssText : ha.cssText || "" : "";
      v = 0 < ha.indexOf("src") && 0 === ha.indexOf("@font-face");
      fa(C);
      return v;
    })() ? (y("[webFontTest] maybeCanWebFont() : true"), !G.fonts || 603 > fb ? (y("[webFontTest] No native font loader."), A(!0)) : (y("[webFontTest] Use Native font loader."), m())) : (y("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Bc() {
    Fb = !Fb;
    for (var a = -1, b; b = Gb[++a];) {
      b.style.visibility = Fb ? "" : "hidden";
    }
  }
  function nd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Hb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function gb() {
    gb = null;
    od(Ib, "PB-100", {"PB-100_canTTF":I + "pbFont/ttf.css", "PB-100_canWOFF":I + "pbFont/woff.css", "PB-100_canEOT":I + "pbFont/eot.css", "PB-100_canSVG":I + "pbFont/svg.css"}, "pbFont-testCssReady", {h:hb}, 5000);
  }
  function Ib(a) {
    Ra = a;
    y("[pbList] WebFont test result : " + !!a);
    Ra ? Jb() : Sa ? Cc(!0) : ta(Sa) ? Jb() : pd();
  }
  function Cc(a) {
    a && (y("[pbList] Fallback start!"), sa(M, "pbList-noWebFont"), ia ? Ha([".pbList font:after", "content:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ha([".pbList font", "background-image:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Jb();
  }
  function Jb() {
    for (Ib = zc = null; wa.length;) {
      ib(wa.shift(), Kb.shift());
    }
    y("[pbList] complete.");
  }
  function ib(a, b) {
    function d(E) {
      E = E.childNodes;
      for (var m = -1, n; n = E[++m];) {
        switch(n.nodeType) {
          case 1:
            d(n);
            break;
          case 3:
            n.data && n.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && e.push(n);
        }
      }
    }
    var e = [];
    if (Ib) {
      -1 === wa.indexOf(a) && (wa.push(a), Kb.push(b), Lb && gb && gb());
    } else {
      var k = wa.indexOf(a);
      0 <= k && wa.splice(k, 1) && Kb.splice(k, 1);
      for (d(a); a = e.shift();) {
        k = a.data, 2 !== Ra && (k = k.split(hb).join(Dc)), b ? a.data = k : qd(k.split("\r").join("").split("&yen;").join(rd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Mb).split("&amp;").join("&"), a);
      }
    }
  }
  function qd(a, b) {
    function d(p, w) {
      for (var H = ""; w;) {
        w & 1 && (H += p), w >>= 1, p += p;
      }
      return H;
    }
    function e(p, w, H) {
      for (var S, R = -1, v, C; S = w[++R];) {
        for (; 0 <= (v = p.indexOf(S));) {
          C = S.length, p = p.substr(0, v) + d(H, C) + p.substr(v + C);
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
      n = d("+", a.length);
    } else {
      for (0 <= (A = k(a)) && (n = d("|", A), --A); q = a.charAt(++A);) {
        q === Mb || J ? (n += "~", q === Mb && (J = !J)) : n += q;
      }
      n = e(n, sd, "^");
      n = e(n, td, "{");
      n = e(n, ud, "}");
    }
    A = 0;
    for (J = a.length; A < J; ++A) {
      q = a.charAt(A);
      var aa = q === Nb, N = " " === q;
      q = aa ? " " : q;
      var Q = n.charAt(A), va = P, P = "|" === Q;
      Q = E["+|~{}^".indexOf(Q) + 1];
      if ("\n" !== q) {
        if (Ra || !Sa) {
          8 > B && N && (q = A === J - 1 ? Nb : vd), 2 === Ra && a.substr(A, 2) === hb && (q = hb, ++A), N = N && "str" === Q ? ' class="pbList-strsp"' : aa ? "" : !N && Q ? ' class="pbList-' + Q + '"' : "";
        } else {
          var z = za.indexOf(q);
          z = -1 === z ? "" : za.indexOf(q).toString(16).toUpperCase();
          z = (z = 1 === z.length ? "0" + z : z) ? "pbChr" + z : "";
          N = N && "str" === Q ? ' class="pbList-strsp"' : N || !z ? "" : Q ? ' class="' + (z ? z + " " : "") + "pbList-" + Q + '"' : ' class="' + z + '"';
        }
        va && aa && (fb || jb) && (q = Nb);
        m.push("<font" + N + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (E = Ab("font", m); m = E.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      fa(b);
    }
  }
  var r, x, c = qa.userAgent, T = qa.appVersion, Ob = Z(T) | 0, F = qa.platform, Pb = G.documentElement, Ec = Pb && Pb.style, Qb = G.documentMode, Rb = lc.width, Sb = lc.height, Fc = u.HTMLAudioElement, Gc = u.performance, Hc = u.Int8Array, wd = void 0 !== u.ontouchstart, Aa = l(T, "Version/") || l(c, "Version/"), Ia = void 0 !== Ec.MozAppearance, Ic = u.operamini, Tb = f(c, "UCWEB"), xd = Tb && l(c, " U2/"), yd = Tb && l(c, "; wds "), Ub = l(c.split("_").join("."), "; iPh OS "), zd = l(c, "; Adr "), 
  Jc = f(T, "YJApp-ANDROID"), ja = f(F, "Android") || Ia && f(T, "Android") || Jc, U = l(F, "Android ") || l(T, "Android ") || l(c, "Android ") || zd, Vb = f(F, "Linux"), Kc = "MacIntel" === F && void 0 !== qa.standalone, Ba = !Ic && u.opera, Ad = Ba && (Ba.version && "function" === typeof Ba.version ? Ba.version() : oc(l(c, "Opera "), Aa, "" + Ob)), Lc = u.opr, kb = !Ba && (G.all || Qb), ba = kb && (Qb ? Qb : u.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), Wb = !kb && Pb.msContentZoomFactor, lb = !Wb && u.chrome, Xb = Ia && l(c, "Goanna/"), ka = !Xb && Ia && l(c, "rv:"), Bd = l(c, "Firefox/"), Cd = l(c, "Opera/"), Dd = u.FNRBrowser, na = ub(c, "AppleWebKit/"), Ta = l(c, "Chrome/"), Mc = l(c, "OPR/"), Ed = l(T, "KHTML/"), Fd = l(c.toLowerCase(), "iris"), Ua = ub(c, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Nc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      mb, Yb = Nc.length; mb = Nc[--Yb];) {
        if (f(c, mb)) {
          Va = 2 > Z(Aa) ? Aa : 0.9;
          break a;
        }
      }
      var Oc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Yb = Oc.length; mb = Oc[--Yb];) {
        if (f(c, mb)) {
          Va = Aa;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Pc = Va, Qc = lb && 534.3 >= na, Gd = wd && (na || Ia) && (0 === F.indexOf("Linux armv") || 0 === F.indexOf("Linux aarch") || "Linux i686" === F) && f(c, "Linux x86_64") || !U && Jc, Rc = u.puffinDevice, nb = Rc && Rc.clientInfo, Wa = nb && "iOS" === nb.os && nb.osVersion, Hd = Wa && nb.model, Zb = !ba && G.registerElement, Id = !ba && G.execCommand, Jd = Vb && Zb && "11.0.696.34" === Ta, Kd = u._firefoxTV_playbackStateObserverJava, $b, D;
  if ("Nitro" === F) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      h = "NDSi";
      var g = Cd;
    } else {
      if ("New Nintendo 3DS" === F || f(c, "iPhone OS 6_0") && 320 === Rb && 240 === Sb) {
        h = "New3DS", g = l(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          h = "N3DS", g = l(c, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            h = "Swicth", g = l(T, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              h = "WiiU", g = l(T, "NintendoBrowser/"), na = l(T, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                h = "Wii";
                g = l(c, "Wii; U; ; ");
                var L = h;
                var O = g;
              } else {
                if (D = l(c, "PlayStation Vita ")) {
                  h = "PSVita", g = D, L = h, O = D;
                } else {
                  if (D = l(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    g = D;
                    var Sc = 3.3;
                    L = h;
                    O = D;
                  } else {
                    if (D = l(c, "PLAYSTATION 3; ") || l(c, "PLAYSTATION 3 ")) {
                      h = "PS3", g = D, L = h, O = D, 0 > nc("4.10", D) && (r = "Sony", x = D);
                    } else {
                      if (f(c, "Xbox One")) {
                        h = "XboxOne", g = 1;
                      } else {
                        if (f(c, "Xbox")) {
                          h = "Xbox360", g = 1;
                        } else {
                          if (2 === Ob && f(c, "Sony/COM2/")) {
                            h = "Mylo";
                            g = 2;
                            Sc = 3.4;
                            L = h;
                            O = 2;
                            var ob = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Ub || Wa || Kc) {
                              if (Wa) {
                                switch(g = Wa, Hd.substr(0, 4)) {
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
                                    var Tc = !0;
                                }
                              } else {
                                Ub ? g = Ub : g = l(T.split("_").join("."), "OS ");
                                if (!g || Dd) {
                                  g = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : mc.isNaN ? 9.2 : u.SharedWorker ? Gc && Gc.now ? 8.0 : 8.4 : Id ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Hc ? 4.3 : Fc ? 4.1 : 3.2;
                                }
                                var W = Rb === 1.5 * Sb || 1.5 * Rb === Sb;
                                0 === F.indexOf("iPhone") ? (oa = "iPhone", ca = !0) : 0 === F.indexOf("iPad") || Kc ? (oa = "iPad", V = !0) : 0 === F.indexOf("iPod") && (oa = "iPod", Tc = !0);
                              }
                              var ac;
                              if (ac = !Wa) {
                                var bc;
                                if (!(bc = qa.standalone)) {
                                  var pb;
                                  if (pb = V || 12 > g) {
                                    a: {
                                      for (var Ld in G) {
                                        if ("webkitFullscreenEnabled" === Ld) {
                                          pb = !0;
                                          break a;
                                        }
                                      }
                                      pb = void 0;
                                    }
                                  }
                                  bc = pb;
                                }
                                ac = bc || 11 <= g && 13 > g && qa.mediaDevices;
                              }
                              ac ? (r = "SafariMobile", L = "Safari", O = g) : r = "iOSWebView";
                              h = "iOS";
                              x = g;
                            } else {
                              if (f(c, "Kobo")) {
                                h = "Kobo", r = "AOSP", x = 2.2, L = r, O = x, ja = !0;
                              } else {
                                if (f(c, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", x = 2.2, L = r, O = x;
                                } else {
                                  if (D = l(c, "CrOS x86_64 ") || l(c, "CrOS aarch64 ") || l(c, "CrOS i686 ") || l(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", g = D;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", g = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2.0 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, f(c, "Mobile") ? ca = !0 : f(c, "Tablet") && (V = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", g = l(c, "webOS/") || l(c, "WEBOS") || l(c, "hpwOS/"), L = h, O = g, f(c, "webOS.TV") || f(c, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (D = l(c, "Tizen ")) {
                                          h = "Tizen", g = D, L = "Samsung", O = Ua, r = L, x = O, ca = !0;
                                        } else {
                                          if (D = l(c, "Windows Phone ") || l(T, "Windows Phone OS ") || yd) {
                                            var qb = !0;
                                            g = D;
                                            ca = !0;
                                          } else {
                                            if (Wb && "ARM" === F) {
                                              qb = !0, g = 10, ca = !0;
                                            } else {
                                              if (kb && f(T, "ZuneWP")) {
                                                qb = !0, g = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ca = !0;
                                              } else {
                                                if (f(c, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (f(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (f(c, "KFMUWI")) {
                                                      var pa = !0;
                                                      g = 6.3;
                                                      var X = V = !0;
                                                    } else {
                                                      if (f(c, "KFKAWI")) {
                                                        pa = !0, g = 6, X = V = !0;
                                                      } else {
                                                        if (f(c, "KFSUWI") || f(c, "KFAUWI") || f(c, "KFDOWI")) {
                                                          pa = !0, g = 5, X = V = !0;
                                                        } else {
                                                          if (f(c, "KFGIWI")) {
                                                            pa = !0, g = 5, X = V = !0;
                                                          } else {
                                                            if (f(c, "KFARWI") || f(c, "KFSAWA") || f(c, "KFSAWI")) {
                                                              pa = !0, g = 5 <= Z(U) ? 5 : 4, X = V = !0;
                                                            } else {
                                                              if (f(c, "KFSOWI") || f(c, "KFTHWA") || f(c, "KFTHWI") || f(c, "KFAPWA") || f(c, "KFAPWI")) {
                                                                pa = !0, g = 3, X = V = !0;
                                                              } else {
                                                                if (f(c, "KFOT") || f(c, "KFTT") || f(c, "KFJWA") || f(c, "KFJWI")) {
                                                                  pa = !0, g = 2, X = V = !0;
                                                                } else {
                                                                  if (f(c, "Kindle Fire")) {
                                                                    pa = !0, g = 1, X = V = !0;
                                                                  } else {
                                                                    if (D = l(c, "Kindle/")) {
                                                                      h = "Kindle", g = D, r = "AOSP", x = 2.2, L = r, O = x;
                                                                    } else {
                                                                      if (f(c, "AmazonWebAppPlatform") || f(c, "; AFT") || Kd) {
                                                                        pa = !0, g = U, X = !0;
                                                                      } else {
                                                                        if (f(c, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (f(c, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === c.indexOf("Windows Mobile;") || Fd) {
                                                                              h = "WindowsMobile", ob = !0;
                                                                            } else {
                                                                              if ("WinCE" === F) {
                                                                                h = F, ob = !0;
                                                                              } else {
                                                                                if ("Win16" === F || "Win32" === F || "Win64" === F) {
                                                                                  h = F, g = l(c, "Windows NT ") || l(c, "Windows ");
                                                                                } else {
                                                                                  if (0 === F.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === F ? "MacPPC" : F;
                                                                                    if (D = l(c.split("_").join("."), "Mac OS X ")) {
                                                                                      g = D;
                                                                                    }
                                                                                    var Uc = !0;
                                                                                  } else {
                                                                                    f(c, "BlackBerry") || f(c, "BB10") ? (h = "BlackBerry", g = Aa, ca = !0) : f(c, "SunOS") || f(c, "Sun Solaris") ? h = "SunOS" : f(c, "FreeBSD") ? h = "FreeBSD" : f(c, "OpenBSD") ? h = "OpenBSD" : f(c, "NetBSD") ? h = "NetBSD" : ja && Ia ? (f(c, "Android 4.4;") ? W = {min:2.3} : 4 <= Z(U) ? W = U : W = {min:2.2}, g = W) : ja && Ba ? (U ? W = U : W = {min:1.6}, g = W, f(c, "Tablet") ? V = !0 : ca = !0) : U ? (g = U, 
                                                                                    ja = !0) : Vb && Gd ? ($b = !0, Ua ? W = {min:4.4} : lb && !Qc || Lc || Mc ? W = {min:4} : (W = U = void 0 !== Ec.touchAction ? {min:5} : Zb ? 4.4 : Hc ? qa.connection ? u.searchBoxJavaBridge_ || lb ? mc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Fc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Pc && (r = "Samsung", x = Pc)), g = W, ja = !0) : Jd ? (g = {min:5}, $b = ja = !0) : Vb && (f(c, "Ubuntu") ? h = "Ubuntu" : 
                                                                                    (D = l(c, "Mint/")) ? (h = "Mint", g = D) : (D = l(c, "Fedora/")) ? (h = "Fedora", g = D) : h = f(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  ja && (h = h || "Android");
  qb && (h = "WindowsPhone");
  r || (X = X || ja, Ba ? (r = X || ob || ca || V ? "PrestoMobile" : "Presto", x = Ad) : kb ? ((W = ub(T, "Trident/") + 4) && W !== ba && (L = "IEHost", O = W), 10 <= ba && 6.2 <= g && 7 > g && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = ba), ob || ca || V || Tc ? r = "TridentMobile" : Uc && 5 <= ba ? (r = "Tasman", L = "MacIE", O = ba) : (r = "Trident", Uc && (L = "MacIE", O = ba)), x = ba) : Wb ? (r = qb ? "EdgeMobile" : "EdgeHTML", x = l(T, "Edge/")) : Xb ? (r = "Goanna", 
  x = Xb) : Ia ? (r = X ? "Fennec" : "Gecko", x = ka || Bd) : Ua ? (r = "Samsung", x = Ua) : (D = Sc || l(c, "NetFront/")) ? (r = "NetFront", x = D) : (D = l(c, "iCab")) ? (r = "iCab", x = D) : (D = oc(l(c, "Opera Mini/"), l(c, "Opera Mobi/")) || Ic && Aa) ? (r = "OperaMini", x = D, h || (f(c, "iPhone") ? oa = "iPhone" : f(c, "iPad") ? oa = "iPad" : f(c, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Tb ? (r = "UCWEB", x = xd) : Ed ? (r = "KHTML", x = Ob) : ja && Qc ? (r = "AOSP", x = U) : lb || 
  Lc || Mc ? (r = X ? "ChromiumMobile" : "Chromium", x = Ta) : ja && Zb ? (r = "ChromeWebView", x = 5 > Z(U) ? U : Ta) : ja && (Aa || $b) ? (r = "AOSP", x = U) : Ta ? (r = X ? "ChromiumMobile" : "Chromium", x = Ta) : na && (r = "WebKit", x = na));
  h && (t.PLATFORM = h, g ? (t.PLATFORM_VERSION = pc(g), t[h] = g === g + "" ? Z(g) : g) : t[h] = !0);
  r && (t.ENGINE = r, x ? (t.ENGINE_VERSION = pc(x), t[r] = x === x + "" ? Z(x) : x) : t[r] = !0, L || (L = r, O = x));
  var ab = id, Ja = [], vc = !!G.getElementsByTagName, M = G.body, xa = M.style, B = t.Trident || t.TridentMobile, Xa = t.Tasman, Vc = t.EdgeHTML || t.EdgeMobile, cc = t.Presto || t.PrestoMobile, dc = t.Gecko, ec = t.Goanna, fb = t.WebKit, jb = t.SafariMobile || t.iOSWebView, Md = t.OperaMini && t.UCWEB;
  B || Xa || (new sb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Nd = 5.5 > B, Wc = G.scripts, Od = (Xa ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", Xc = 0 === location.href.indexOf("https");
  var Ka = Wc[Wc.length - 1].src.split("/");
  --Ka.length;
  var Pd = Ka.join("/");
  0 <= "http: https:".indexOf(Ka[0]) && Ka.splice(0, 3);
  Ka = Ka.join("/");
  var ta = function(a) {
    return void 0 !== a;
  };
  var la = Array.prototype;
  la.pop || (la.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  la.push || (la.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  la.shift || (la.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  la.splice || (la.splice = function(a, b) {
    var d = arguments, e = d.length - 2 - b, k = this.slice(a, a + b), E;
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
    for (E = d.length; m < E; ++m) {
      this[m - 2 + a] = d[m];
    }
    return k;
  });
  la.indexOf || (la.indexOf = function(a, b) {
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
  var fc, gc = [];
  Ja.push(function() {
    Ya(function() {
      (fc = u.logger || G.all.logger) || alert("#logger not found!");
      for (fc ? y = function(a) {
        ea(fc, "P", null, null, a);
      } : u.console && (y = console.log); gc.length;) {
        y(gc.shift());
      }
    });
  });
  y = function(a) {
    gc.push(a);
  };
  var $a = [], Qd = 0, Da;
  if (5 > B || Xa) {
    u._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  var Yc = function(a) {
    $a.length || (Da = setInterval(Za, 999));
    $a.push({f:a, g:++Qd});
  };
  Ja.push(function() {
    6.1 > jb && Zc(kd);
    rb(qc);
  });
  var ma = [], $c = 0, ya;
  if (5 > B || Xa) {
    u._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  var K = function(a, b) {
    ma.length || (ya = tb(La, 64));
    ma.push({f:a, p:b, g:++$c, t:new ra - 0 + 64});
    return $c;
  };
  var ad = function(a) {
    for (var b = ma.length, d; d = ma[--b];) {
      if (d.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
  };
  Ja.push(function() {
    6.1 > jb && Zc(ld);
    rb(rc);
  });
  var Ma = [], tc, xb = 0, Ca = u.matchMedia, Ea;
  Ma.push(function() {
    Ea = ea(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var bd = [], wb = u.onload, cd = u.onunload;
  onload = vb;
  onunload = function(a) {
    var b;
    cd && (b = cd(a));
    da(bd, a);
    onunload = ab;
    return b;
  };
  var Ya = function(a) {
    Ma.push(a);
  };
  var rb = function(a) {
    bd.push(a);
  };
  var uc = [];
  Ya(function() {
    sc();
    Yc(sc);
  });
  var hc = function(a) {
    uc.push(a);
  };
  var Oa = [], Na, yb, zb;
  10 <= B || Vc ? (Ca("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Na = yb = a.matches;
    da(Oa, bb());
  }), Ca("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Na = zb = a.matches;
    da(Oa, bb());
  }), Ca("(-ms-high-contrast:active)").addListener(function(a) {
    Na = a.matches;
    da(Oa, bb());
  }), Fa = null) : 10 > B || (t.Win32 || t.Win64) && (44 <= dc || ec) ? Ya(function() {
    Ea.style.color = "#123456";
    Ea.style.backgroundColor = "#123456";
    60 > dc || ec ? Fa() : Fa() && Yc(Fa);
    Fa = null;
  }) : Fa = null;
  var Rd = [];
  Ca && Ca("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(Rd, a.matches);
  });
  var ic = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    da(ic, !0);
  }, onafterprint = function() {
    da(ic, !1);
  }, rb(function() {
    onbeforeprint = onafterprint = ab;
  })) : Ca && Ca("print").addListener(function(a) {
    da(ic, a.matches);
  });
  var dd = [], jc = u.onscroll;
  onscroll = function(a) {
    var b;
    jc && (b = jc(a));
    vb || da(dd);
    return b;
  };
  rb(function() {
    onscroll = jc = ab;
  });
  var Zc = function(a) {
    dd.push(a);
  };
  var ed = cb("html")[0];
  var Pa = cb("head")[0];
  var db;
  Ma.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var E = k.length, m, n, A, J, q; m = k[--E];) {
        if (n = m.nodeType, 8 === n) {
          b && fa(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Nd ? (A = m.sheet || m.styleSheet) && (J = 10 <= B ? A.cssRules : A.rules || A.cssRules) && !J[0] : (new sb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  fa(m);
                  break;
                }
              case "LINK":
                vc && !Pa.contains(m) && e.push(m);
                break;
              case "META":
                n = m.getAttribute("name") || m.getAttribute("property") || "";
                for (q = d.length; q;) {
                  if (0 === n.indexOf(d[--q])) {
                    fa(m);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (wc(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (wc(m, "skip-cleanup")) {
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
        A = e.pop(), Pa.appendChild(A);
      }
    }
    var b = !(8 > cc || 5 > B || Xa), d = ["og:", "twitter:", "fb:"], e = [];
    a(ed);
  });
  var Bb = void 0;
  var Ac = {}, kc, Sa, ia, Sd = ta(xa.transform) ? "transform" : ta(xa["-o-transform"]) ? "-o-transform" : ta(xa["-ms-transform"]) ? "-ms-transform" : ta(xa["-moz-transform"]) ? "-moz-transform" : ta(xa["-webkit-transform"]) ? "-webkit-transform" : "";
  ia || hc(function(a) {
    a && !ta(ia) && (ia = 1.8 <= dc || ec || 8 <= B || Vc || 530 <= fb || 3.2 <= jb, ia || (a = ea(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ia = 6 <= a.offsetWidth, fa(a)));
  });
  var Qa;
  9 > B && Ya(function(a) {
    a = ea(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    kc = 1 < a.offsetHeight;
    a.style.cssText = "";
    fa(a);
  });
  var fd = Xc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var pd = function() {
    function a() {
      k || (d.complete ? (k = !0, d.width || K(b, !1)) : e = K(a));
    }
    var b = Cc;
    if (fd) {
      var d = new Image, e, k;
      d.onerror = function() {
        (!B || 11 === B || 11 === t.IEHost) && d.width || k || (k = !0, e && ad(e), e = K(b, !1));
      };
      d.onload = function() {
        k = !0;
        e && ad(e);
        cc && !d.complete ? e = K(b, !1) : (Sa = !0, K(b, !0));
      };
      d.src = fd;
      8 > cc && d.complete ? (Sa = !0, K(b, !0)) : k || (e = K(a));
    } else {
      y("[imageTest] TEST_IMAGE_URL is undefined!"), K(b, !1);
    }
  };
  var md = "bad_" + (new ra - 0) + "_";
  var od = zc;
  for (t.IEHost && 5.5 > B && Ya(function() {
    ea(Pa, "link", {href:Pd + "/" + Od, rel:"stylesheet", type:"text/css"});
  }); Ja.length;) {
    Ja.shift()();
  }
  Ja = null;
  var gd = gd || {}, Y = String.fromCharCode, I = Xc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", za = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  Oa.push(function(a) {
    eb("jsHcm");
    eb("jsHcmWob");
    eb("jsHcmBow");
    if (a) {
      switch((Sd || 9 === B || 5.5 <= B && 9 > B && kc) && sa(M, "jsCanRotate"), a) {
        case 1:
          sa(M, "jsHcm");
          break;
        case 2:
          sa(M, "jsHcmWob");
          break;
        case 3:
          sa(M, "jsHcmBow");
      }
    } else {
      eb("jsCanRotate");
    }
  });
  var Gb = [], Fb, Hb, hd;
  hc(function(a) {
    function b(z) {
      var p = z.getAttribute("pbtip") || "", w = p.charAt(0), H = "_" === w;
      p = H ? p.charAt(2) : w;
      w = H ? "Btm" : "";
      var S = z.getAttribute("title") || "";
      sa(z, "pbTipPos" + p.toUpperCase());
      ea(z, "div", {className:"pbTip" + w}, {width:S.length + k + "em"}, S);
      ea(z, "div", {className:"pbTail" + w});
      m && H && (z.focus(), z.blur());
    }
    function d(z) {
      if (ia && N) {
        e(z);
      } else {
        var p = z.getAttribute("pbGhos") || "", w = p.substr(1), H = z.className, S = H.split("pbCsr")[1] || "";
        H = H.split("pbAlp")[1] || "";
        if ("CS" === w) {
          var R = "_";
        } else {
          R = w, 3 === R.length && (R = R.substr(0, 2)), R = za[parseInt(R, 16)] || "~";
        }
        S = S.split(" ")[0];
        H = H.split(" ")[0];
        H = 10 - Z(H);
        p ? (p = {className:["pbChr" + w + " pbAlp" + H + " pbCsr" + S]}, db = 1, A = ea(z, "b", p, 0, R), e(z), e(A)) : e(z);
      }
    }
    function e(z) {
      aa || E || Ga(z, "pbChrCS") && Gb.push(z);
    }
    if (a && !hd) {
      hd = !0;
      var k = 6 > B ? 1 : 0;
      a = cb("SAMP");
      var E = 9 > B, m = 5 <= B && 6 > B, n, A, J, q;
      kc && sa(M, "pbLCD-AX");
      if (a.length) {
        var aa = void 0 !== xa.opacity || void 0 !== xa["-moz-opacity"] || void 0 !== xa["-khtml-opacity"], N = !aa && !E && !0, Q = !ia || N || void 0;
        for (J = -1; n = a[++J];) {
          if (Ga(n.parentElement || n.parentNode, "pbLCD")) {
            var va = n.children;
            for (n = va.length; n;) {
              var P = va[--n];
              switch(P.tagName.toUpperCase()) {
                case "A":
                  if (Q) {
                    for (ia || b(P), q = P.children.length; q;) {
                      d(P.children[--q]);
                    }
                  }
                  Md ? P.setAttribute("href", "javascript:void(0)") : P.onclick = nd;
                  break;
                case "B":
                  Q && d(P);
              }
            }
          }
        }
        Gb.length ? (setInterval(Bc, 500), ia ? Ha([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ha([".pbChrCS", "background-position:0 -51px"])) : Bc = null;
        N && (ia ? Ha([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + I + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        I + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + I + "pbLCD/x3_a90.png)"]) : Ha([".pbAlp1", "background-image:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        I + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + I + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + I + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > fb && (ed.onclick = function(a) {
    if (Hb) {
      return Hb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new sb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Mb = za[7], Dc = za[30], rd = za[113], hb = Y(8337) + Y(8331), Nb = Y(160), vd = Y(8194), td = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ud = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), sd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Dc + za[31]).split(""), wa = 
  [], Kb = [], Ra, Lb;
  hc(function(a) {
    if (a && !Lb) {
      var b = G.all || cb("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ga(d, "pbList") ? ib(d) : Ga(d, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(d.tagName.toUpperCase()) && ib(d, !0);
      }
      wa.length && (y("[pbList] " + wa.length + " elements found. WebFont test start."), gb());
      Lb = !0;
    }
  });
  gd.prettify = ib;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

