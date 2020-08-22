PB100 = {};
(function(Ud, t, u, ld, G, ra, nc, Z, oc, ub, Vd, vb, md, sa, Wd) {
  function wb(a, b) {
    var d = Z(a.split(b)[1]);
    return 0 <= d ? d : 0;
  }
  function g(a, b) {
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
  function pc(a, b) {
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
  function qc() {
    for (var a = arguments, b = 1, d = a.length, e = a[0], k; b < d; ++b) {
      0 > pc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function rc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function y() {
  }
  function ab() {
    for (var a, b = 0; b < bb.length; ++b) {
      a = bb[b], a.f();
    }
  }
  function nd() {
    Fa && (sc(), Fa = setInterval(ab, 999));
  }
  function sc() {
    Fa && (Fa = clearInterval(Fa));
  }
  function Na() {
    for (var a, b = 0, d = new sa - 0; b < na.length;) {
      d < na[0].t ? ++b : (a = na.splice(b, 1)[0], a.f(a.p));
    }
    Aa = na.length ? vb(Na, 64) : 0;
  }
  function od() {
    Aa && (tc(), Aa = vb(Na, 64));
  }
  function tc() {
    Aa && (Aa = md(Aa));
  }
  function da(a, b) {
    for (var d = 0, e = a.length; d < e; ++d) {
      a[d](b);
    }
  }
  function xb(a) {
    var b;
    yb && (b = yb(a));
    da(Oa, a);
    onload = cb;
    Oa = xb = yb = onload = null;
    return b;
  }
  function uc() {
    var a = 9 === Ga.offsetWidth;
    vc !== a && da(wc, vc = a);
  }
  function Ha() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = G.defaultView, d = zb, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Pa = "#123456" !== b && "rgb(18,52,86)" !== b, Ab = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Bb = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), d !== db() && da(Qa, zb), !0;
    }
  }
  function db() {
    return zb = Pa ? Bb ? 2 : Ab ? 3 : 1 : 0;
  }
  function eb(a) {
    var b = b || G;
    return xc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function fa(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Cb(a, b) {
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
            ta(A, J[q]);
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
      b = Cb("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = Cb(b);
    }
    fb ? (2 === fb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    fb = 0;
    d && E(b, d);
    e && m(b, e);
    k && !n && b.appendChild(G.createTextNode(k));
    return b;
  }
  function yc(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
  }
  function Ia(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ta(a, b) {
    var d;
    if (!Ia(a, b)) {
      if (d = a.className) {
        b = " " + b;
      }
      a.className = d + b;
    }
  }
  function gb(a) {
    if (Ia(M, a)) {
      var b = M.className.split(" ");
      b.splice(b.indexOf(a), 1);
      M.className = b.join(" ");
    }
  }
  function zc(a) {
    a = ea(Ra, "style", {type:"text/css", media:"all"}, 0, a);
    Db = a.sheet || a.styleSheet;
  }
  function Ja(a) {
    for (var b = Db, d, e, k = "", E; a.length;) {
      d = a.shift(), e = a.shift(), E = d + "{" + e + "}", b ? b.addRule ? b.addRule(d, e) : b.insertRule && b.insertRule(E, b.cssRules.length) : k += E;
    }
    k && zc(k);
  }
  function Ac(a) {
    if (va(Sa)) {
      y("[dataUriTest] already done : " + Sa), K(a, Sa);
    } else {
      if (8 > B) {
        y("[dataUriTest] trident < 8 : false"), K(a, !1);
      } else {
        y("[dataUriTest] start!");
        var b = new Image;
        b.onerror = function() {
          y("[dataUriTest] no DATA URI!");
          a(Sa = !1);
        };
        b.onload = function() {
          y("[dataUriTest] DATA URI:" + (1 === b.width * b.height));
          a(Sa = 1 === b.width * b.height);
        };
        b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Bc(a, b, d, e, k, E) {
    function m() {
      var v = '1.6em "' + b + '"';
      y("[webFontTest] testByNativeFontLoaderAPI start.");
      G.fonts.load(v).then(function(C) {
        y("[webFontTest] fonts.check() : " + G.fonts.check(v, "i") + ", fonts.length : " + C.length);
        q(b) ? K(a, R) : (y("[webFontTest] mesureWebFont() : false"), A(!0));
      }, function(C) {
        y("[webFontTest] fonts.load() rejected! " + C);
        Ac(aa);
      });
    }
    function n(v) {
      return G.hidden || G.msHidden || G.mozHidden || G.webkitHidden ? (P = new sa - 0, !1) : v < new sa - P;
    }
    function A(v) {
      v && (y("[webFontTest] testWebFont start."), P = new sa - 0);
      q(b) ? (y("[webFontTest] testWebFont mesurement success : " + R), a(R)) : n(wa) ? (y("[webFontTest] testWebFont timeout!"), z ? a(0) : 9 > B ? K(a, 0) : Ac(aa)) : K(A);
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
      var C = 0, ha = -1, Eb, Fb, Gb = 0;
      J && J();
      for (M.appendChild(p); Eb = H[++ha];) {
        if (p.style.fontFamily = '"' + v + '",' + Eb, p.offsetWidth !== S[Eb]) {
          C = 1;
          break;
        }
      }
      if (C && k) {
        for (Fb in k) {
          if (p.innerHTML = Fb, v = p.offsetWidth, p.innerHTML = k[Fb], Gb = v === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Gb) {
            break;
          }
        }
      }
      fa(p);
      return R = C + Gb;
    }
    function aa(v) {
      y("[webFontTest] testDataUriComplete : " + v);
      (z = v) ? N(!0) : a(0);
    }
    function N(v) {
      v && (P = new sa - 0);
      for (C in d) {
        if (q(C)) {
          y("[webFontTest] success! " + C);
          w = ea(M, "div", {"aria-hidden":"true", className:e, id:e});
          v = d[C];
          var C = Db, ha = Cc.all || 0;
          C ? C.addImport ? C.addImport(v, ha) : C.insertRule && C.insertRule('@import "' + v + '"', ha) : zc('@import "' + v + '"');
          Cc.all = ++ha;
          K(Q, !0);
        } else {
          n(100) ? (y("[webFontTest] timeout! " + C), delete d[C], K(N, !0)) : K(N);
        }
        return;
      }
      a(0);
    }
    function Q(v) {
      v && (y("[webFontTest] testImportedCssReady start!"), b = b.replace(Dc, ""), y("[webFontTest] targetWebFontName : " + b), P = new sa - 0);
      1 < w.offsetWidth ? (y("[webFontTest] testImportedCssReady ended."), fa(w), wa = 100, K(A, !0)) : n(wa) ? (y("[webFontTest] testImportedCssReady timeout!"), fa(w), a(0)) : K(Q);
    }
    var wa = E || 5000, P, z, p, w, H, S, R;
    b = Dc + b;
    y("[webFontTest] WEBFONT_DEBUG_MODE : 1");
    (function() {
      var v;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > B) {
        return !0;
      }
      var C = ea(Ra, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), ha = (ha = C.sheet || C.styleSheet) ? (v = ha.cssRules) && (v = v[0]) ? v.cssText : ha.cssText || "" : "";
      v = 0 < ha.indexOf("src") && 0 === ha.indexOf("@font-face");
      fa(C);
      return v;
    })() ? (y("[webFontTest] maybeCanWebFont() : true"), !G.fonts || 603 > hb ? (y("[webFontTest] No native font loader."), A(!0)) : (y("[webFontTest] Use Native font loader."), m())) : (y("[webFontTest] maybeCanWebFont() : false"), K(a, 0));
  }
  function Ec() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function pd(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Jb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function ib() {
    ib = null;
    qd(Kb, "PB-100", {"PB-100_canTTF":I + "pbFont/ttf.css", "PB-100_canWOFF":I + "pbFont/woff.css", "PB-100_canEOT":I + "pbFont/eot.css", "PB-100_canSVG":I + "pbFont/svg.css"}, "pbFont-testCssReady", {h:jb}, 5000);
  }
  function Kb(a) {
    Ta = a;
    y("[pbList] WebFont test result : " + !!a);
    Ta ? Lb() : Ua ? Fc(!0) : va(Ua) ? Lb() : rd();
  }
  function Fc(a) {
    a && (y("[pbList] Fallback start!"), ta(M, "pbList-noWebFont"), ia ? Ja([".pbList font:after", "content:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ja([".pbList font", "background-image:url(" + I + "pbFont/" + (9 > B ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = Bc = null; xa.length;) {
      kb(xa.shift(), Mb.shift());
    }
    y("[pbList] complete.");
  }
  function kb(a, b) {
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
    if (Kb) {
      -1 === xa.indexOf(a) && (xa.push(a), Mb.push(b), Nb && ib && ib());
    } else {
      var k = xa.indexOf(a);
      0 <= k && xa.splice(k, 1) && Mb.splice(k, 1);
      for (d(a); a = e.shift();) {
        k = a.data, 2 !== Ta && (k = k.split(jb).join(Gc)), b ? a.data = k : sd(k.split("\r").join("").split("&yen;").join(td).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function sd(a, b) {
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
        q === Ob || J ? (n += "~", q === Ob && (J = !J)) : n += q;
      }
      n = e(n, ud, "^");
      n = e(n, vd, "{");
      n = e(n, wd, "}");
    }
    A = 0;
    for (J = a.length; A < J; ++A) {
      q = a.charAt(A);
      var aa = q === Pb, N = " " === q;
      q = aa ? " " : q;
      var Q = n.charAt(A), wa = P, P = "|" === Q;
      Q = E["+|~{}^".indexOf(Q) + 1];
      if ("\n" !== q) {
        if (Ta || !Ua) {
          8 > B && N && (q = A === J - 1 ? Pb : xd), 2 === Ta && a.substr(A, 2) === jb && (q = jb, ++A), N = N && "str" === Q ? ' class="pbList-strsp"' : aa ? "" : !N && Q ? ' class="pbList-' + Q + '"' : "";
        } else {
          var z = Ba.indexOf(q);
          z = -1 === z ? "" : Ba.indexOf(q).toString(16).toUpperCase();
          z = (z = 1 === z.length ? "0" + z : z) ? "pbChr" + z : "";
          N = N && "str" === Q ? ' class="pbList-strsp"' : N || !z ? "" : Q ? ' class="' + (z ? z + " " : "") + "pbList-" + Q + '"' : ' class="' + z + '"';
        }
        wa && aa && (hb || lb) && (q = Pb);
        m.push("<font" + N + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (E = Cb("font", m); m = E.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      fa(b);
    }
  }
  var r, x, c = ra.userAgent, T = ra.appVersion, Qb = Z(T) | 0, F = ra.platform, Rb = G.documentElement, Hc = Rb && Rb.style, Sb = G.documentMode, Tb = nc.width, Ub = nc.height, Ic = u.HTMLAudioElement, Jc = u.performance, Kc = u.Int8Array, yd = void 0 !== u.ontouchstart, Ca = l(T, "Version/") || l(c, "Version/"), Ka = void 0 !== Hc.MozAppearance, Lc = u.operamini, Vb = g(c, "UCWEB"), zd = Vb && l(c, " U2/"), Ad = Vb && l(c, "; wds "), Wb = l(c.split("_").join("."), "; iPh OS "), Bd = l(c, "; Adr "), 
  Mc = g(T, "YJApp-ANDROID"), ja = g(F, "Android") || Ka && g(T, "Android") || Mc, U = l(F, "Android ") || l(T, "Android ") || l(c, "Android ") || Bd, Xb = g(F, "Linux"), Yb = "MacIntel" === F && void 0 !== ra.standalone, Da = !Lc && u.opera, Cd = Da && (Da.version && "function" === typeof Da.version ? Da.version() : qc(l(c, "Opera "), Ca, "" + Qb)), Nc = u.opr, mb = !Da && (G.all || Sb), ba = mb && (Sb ? Sb : u.XMLHttpRequest ? G.getElementsByTagName ? 7 : 4 : G.compatMode ? 6 : (0).toFixed ? 5.5 : 
  u.attachEvent ? 5 : 4), Zb = !mb && Rb.msContentZoomFactor, nb = !Zb && u.chrome, $b = Ka && l(c, "Goanna/"), la = !$b && Ka && l(c, "rv:"), Dd = l(c, "Firefox/"), Ed = l(c, "Opera/"), Fd = u.FNRBrowser, oa = wb(c, "AppleWebKit/"), Va = l(c, "Chrome/"), Oc = l(c, "OPR/"), Gd = l(T, "KHTML/"), Hd = l(c.toLowerCase(), "iris"), Wa = wb(c, "SamsungBrowser/"), Xa;
  if (Xa = !Wa) {
    a: {
      for (var Pc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      ob, ac = Pc.length; ob = Pc[--ac];) {
        if (g(c, ob)) {
          Xa = 2 > Z(Ca) ? Ca : 0.9;
          break a;
        }
      }
      var Qc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Qc.length; ob = Qc[--ac];) {
        if (g(c, ob)) {
          Xa = Ca;
          break a;
        }
      }
      Xa = void 0;
    }
  }
  var Rc = Xa, Sc = nb && 534.3 >= oa, Tc = yd && (oa || Ka) && (0 === F.indexOf("Linux armv") || 0 === F.indexOf("Linux aarch") || "Linux i686" === F) && g(c, "Linux x86_64") || !U && Mc, Uc = u.puffinDevice, pb = Uc && Uc.clientInfo, Ya = pb && "iOS" === pb.os && pb.osVersion, Id = Ya && pb.model, bc = !ba && G.registerElement, Jd = !ba && G.execCommand, Kd = Xb && bc && "11.0.696.34" === Va, Ld = u._firefoxTV_playbackStateObserverJava, ya, ka, D;
  if ("Nitro" === F) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === F) {
      h = "NDSi";
      var f = Ed;
    } else {
      if ("New Nintendo 3DS" === F || g(c, "iPhone OS 6_0") && 320 === Tb && 240 === Ub) {
        h = "New3DS", f = l(c, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          h = "N3DS", f = l(c, "Version/"), oa = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            h = "Swicth", f = l(T, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              h = "WiiU", f = l(T, "NintendoBrowser/"), oa = l(T, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                h = "Wii";
                f = l(c, "Wii; U; ; ");
                var L = h;
                var O = f;
              } else {
                if (D = l(c, "PlayStation Vita ")) {
                  h = "PSVita", f = D, L = h, O = D;
                } else {
                  if (D = l(c, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = D;
                    var Vc = 3.3;
                    L = h;
                    O = D;
                  } else {
                    if (D = l(c, "PLAYSTATION 3; ") || l(c, "PLAYSTATION 3 ")) {
                      h = "PS3", f = D, L = h, O = D, 0 > pc("4.10", D) && (r = "Sony", x = D);
                    } else {
                      if (g(c, "Xbox One")) {
                        h = "XboxOne", f = 1;
                      } else {
                        if (g(c, "Xbox")) {
                          h = "Xbox360", f = 1;
                        } else {
                          if (2 === Qb && g(c, "Sony/COM2/")) {
                            h = "Mylo";
                            f = 2;
                            Vc = 3.4;
                            L = h;
                            O = 2;
                            var qb = !0;
                          } else {
                            if (0 === F.indexOf("iP") || Wb || Ya || Yb) {
                              if (Ya) {
                                switch(f = Ya, Id.substr(0, 4)) {
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
                                    var Wc = !0;
                                }
                              } else {
                                Wb ? f = Wb : f = l(T.split("_").join("."), "OS ");
                                f || (ka = !0);
                                if (!f || Fd) {
                                  f = u.PointerEvent ? 13 : u.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ra.sendBeacon ? 11.3 : u.WebAssembly ? 11.2 : u.HTMLMeterElement ? 10.3 : u.Proxy ? 10.2 : u.HTMLPictureElement ? 9.3 : oc.isNaN ? 9.2 : u.SharedWorker ? Jc && Jc.now ? 8.0 : 8.4 : Jd ? 7.1 : u.webkitURL ? 6.1 : u.Worker ? 5.1 : Kc ? 4.3 : Ic ? 4.1 : 3.2;
                                }
                                var W = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === F.indexOf("iPhone") ? (pa = "iPhone", ca = !0) : 0 === F.indexOf("iPad") || Yb ? (pa = "iPad", V = !0) : 0 === F.indexOf("iPod") && (pa = "iPod", Wc = !0);
                              }
                              var cc;
                              if (cc = !Ya) {
                                var dc;
                                if (!(dc = ra.standalone)) {
                                  var rb;
                                  if (rb = V || 12 > f) {
                                    a: {
                                      for (var Md in G) {
                                        if ("webkitFullscreenEnabled" === Md) {
                                          rb = !0;
                                          break a;
                                        }
                                      }
                                      rb = void 0;
                                    }
                                  }
                                  dc = rb;
                                }
                                cc = dc || 11 <= f && 13 > f && ra.mediaDevices;
                              }
                              cc ? (r = "SafariMobile", L = "Safari", O = f) : r = "iOSWebView";
                              h = "iOS";
                              x = f;
                            } else {
                              if (g(c, "Kobo")) {
                                h = "Kobo", r = "AOSP", x = 2.2, L = r, O = x, ja = !0;
                              } else {
                                if (g(c, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", x = 2.2, L = r, O = x;
                                } else {
                                  if (D = l(c, "CrOS x86_64 ") || l(c, "CrOS aarch64 ") || l(c, "CrOS i686 ") || l(c, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = D;
                                  } else {
                                    if (void 0 !== u.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > la ? "1.0.1" : 19 > la ? 1.1 : 27 > la ? 1.2 : 29 > la ? 1.3 : 31 > la ? 1.4 : 33 > la ? 2.0 : 35 > la ? 2.1 : 38 > la ? 2.2 : 45 > la ? 2.5 : 2.6, g(c, "Mobile") ? ca = !0 : g(c, "Tablet") && (V = !0);
                                    } else {
                                      if (u.palmGetResource) {
                                        h = "webOS", f = l(c, "webOS/") || l(c, "WEBOS") || l(c, "hpwOS/"), L = h, O = f, g(c, "webOS.TV") || g(c, "/SmartTV") || (ca = !0);
                                      } else {
                                        if (D = l(c, "Tizen ")) {
                                          h = "Tizen", f = D, L = "Samsung", O = Wa, r = L, x = O, ca = !0;
                                        } else {
                                          if (D = l(c, "Windows Phone ") || l(T, "Windows Phone OS ") || Ad) {
                                            var sb = !0;
                                            f = D;
                                            ca = !0;
                                          } else {
                                            if (Zb && "ARM" === F) {
                                              sb = !0, f = 10, ka = ca = !0;
                                            } else {
                                              if (mb && g(T, "ZuneWP")) {
                                                sb = !0, f = 11 === ba ? 8.1 : 10 === ba ? 8 : 9 === ba ? 7.5 : 7 === ba ? 7 : "?", ka = ca = !0;
                                              } else {
                                                if (g(c, "FOMA;")) {
                                                  h = "FeaturePhone", ca = !0;
                                                } else {
                                                  if (g(c, "SoftBank;")) {
                                                    h = "FeaturePhone", ca = !0;
                                                  } else {
                                                    if (g(c, "KFMUWI")) {
                                                      var qa = !0;
                                                      f = 6.3;
                                                      var X = V = !0;
                                                    } else {
                                                      if (g(c, "KFKAWI")) {
                                                        qa = !0, f = 6, X = V = !0;
                                                      } else {
                                                        if (g(c, "KFSUWI") || g(c, "KFAUWI") || g(c, "KFDOWI")) {
                                                          qa = !0, f = 5, X = V = !0;
                                                        } else {
                                                          if (g(c, "KFGIWI")) {
                                                            qa = !0, f = 5, X = V = !0;
                                                          } else {
                                                            if (g(c, "KFARWI") || g(c, "KFSAWA") || g(c, "KFSAWI")) {
                                                              qa = !0, f = 5 <= Z(U) ? 5 : 4, X = V = !0;
                                                            } else {
                                                              if (g(c, "KFSOWI") || g(c, "KFTHWA") || g(c, "KFTHWI") || g(c, "KFAPWA") || g(c, "KFAPWI")) {
                                                                qa = !0, f = 3, X = V = !0;
                                                              } else {
                                                                if (g(c, "KFOT") || g(c, "KFTT") || g(c, "KFJWA") || g(c, "KFJWI")) {
                                                                  qa = !0, f = 2, X = V = !0;
                                                                } else {
                                                                  if (g(c, "Kindle Fire")) {
                                                                    qa = !0, f = 1, X = V = !0;
                                                                  } else {
                                                                    if (D = l(c, "Kindle/")) {
                                                                      h = "Kindle", f = D, r = "AOSP", x = 2.2, L = r, O = x;
                                                                    } else {
                                                                      if (g(c, "AmazonWebAppPlatform") || g(c, "; AFT") || Ld) {
                                                                        qa = !0, f = U, X = !0;
                                                                      } else {
                                                                        if (g(c, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(c, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === c.indexOf("Windows Mobile;") || Hd) {
                                                                              h = "WindowsMobile", qb = !0;
                                                                            } else {
                                                                              if ("WinCE" === F) {
                                                                                h = F, qb = !0;
                                                                              } else {
                                                                                if ("Win16" === F || "Win32" === F || "Win64" === F) {
                                                                                  h = F, f = l(c, "Windows NT ") || l(c, "Windows ");
                                                                                } else {
                                                                                  if (0 === F.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === F ? "MacPPC" : F;
                                                                                    if (D = l(c.split("_").join("."), "Mac OS X ")) {
                                                                                      f = D;
                                                                                    }
                                                                                    var Xc = !0;
                                                                                  } else {
                                                                                    g(c, "BlackBerry") || g(c, "BB10") ? (h = "BlackBerry", f = Ca, ca = !0) : g(c, "SunOS") || g(c, "Sun Solaris") ? h = "SunOS" : g(c, "FreeBSD") ? h = "FreeBSD" : g(c, "OpenBSD") ? h = "OpenBSD" : g(c, "NetBSD") ? h = "NetBSD" : ja && Ka ? (g(c, "Android 4.4;") ? W = {min:2.3} : 4 <= Z(U) ? W = U : W = {min:2.2}, f = W, Tc && (ka = !0)) : ja && Da ? (U ? W = U : (W = {min:1.6}, ka = !0), f = W, g(c, "Tablet") ? V = 
                                                                                    !0 : ca = !0) : U ? (f = U, ja = !0) : Xb && Tc ? (ya = !0, Wa ? W = {min:4.4} : nb && !Sc || Nc || Oc ? W = {min:4} : (W = U = void 0 !== Hc.touchAction ? {min:5} : bc ? 4.4 : Kc ? ra.connection ? u.searchBoxJavaBridge_ || nb ? oc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= oa ? 3 : 533 <= oa ? Ic ? 2.3 : 2.2 : 530 <= oa ? 2.0 : 1.5, Rc && (r = "Samsung", x = Rc)), f = W, ja = !0) : Kd ? (f = {min:5}, ya = ja = !0) : Xb && 
                                                                                    (g(c, "Ubuntu") ? h = "Ubuntu" : (D = l(c, "Mint/")) ? (h = "Mint", f = D) : (D = l(c, "Fedora/")) ? (h = "Fedora", f = D) : h = g(c, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  sb && (h = "WindowsPhone");
  r || (X = X || ja, Da ? (r = X || qb || ca || V ? "PrestoMobile" : "Presto", x = Cd) : mb ? ((W = wb(T, "Trident/") + 4) && W !== ba && (L = "IEHost", O = W), 10 <= ba && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (L = "ModernIE", O = ba), qb || ca || V || Wc ? r = "TridentMobile" : Xc && 5 <= ba ? (r = "Tasman", L = "MacIE", O = ba) : (r = "Trident", Xc && (L = "MacIE", O = ba)), x = ba) : Zb ? (r = sb ? "EdgeMobile" : "EdgeHTML", x = l(T, "Edge/")) : $b ? (r = "Goanna", 
  x = $b) : Ka ? (r = X ? "Fennec" : "Gecko", x = la || Dd) : Wa ? (r = "Samsung", x = Wa, ya && (ka = !0)) : (D = Vc || l(c, "NetFront/")) ? (r = "NetFront", x = D) : (D = l(c, "iCab")) ? (r = "iCab", x = D) : (D = qc(l(c, "Opera Mini/"), l(c, "Opera Mobi/")) || Lc && Ca) ? (r = "OperaMini", x = D, h || (g(c, "iPhone") ? pa = "iPhone" : g(c, "iPad") ? pa = "iPad" : g(c, "iPod") && (pa = "iPod"), pa && (h = "iOS"))) : Vb ? (r = "UCWEB", x = zd) : Gd ? (r = "KHTML", x = Qb) : ja && Sc ? (r = "AOSP", 
  x = U, ya && (ka = !0)) : nb || Nc || Oc ? (r = X ? "ChromiumMobile" : "Chromium", x = Va, ya && (ka = !0)) : ja && bc ? (r = "ChromeWebView", x = 5 > Z(U) ? U : Va, ya && (ka = !0)) : ja && (Ca || ya) ? (r = "AOSP", x = U, ya && (ka = !0)) : Va ? (r = X ? "ChromiumMobile" : "Chromium", x = Va) : oa && (r = "WebKit", x = oa));
  h && (t.PLATFORM = h, f ? (t.PLATFORM_VERSION = rc(f), t[h] = f === f + "" ? Z(f) : f) : t[h] = !0);
  r && (t.ENGINE = r, x ? (t.ENGINE_VERSION = rc(x), t[r] = x === x + "" ? Z(x) : x) : t[r] = !0, L || (L = r, O = x));
  if (ka || Yb) {
    t.PC_MODE = !0;
  }
  var cb = ld, La = [], xc = !!G.getElementsByTagName, M = G.body, za = M.style, B = t.Trident || t.TridentMobile, Za = t.Tasman, Yc = t.EdgeHTML || t.EdgeMobile, ec = t.Presto || t.PrestoMobile, fc = t.Gecko, gc = t.Goanna, hb = t.WebKit, lb = t.SafariMobile || t.iOSWebView, Nd = t.OperaMini && t.UCWEB;
  B || Za || (new ub('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Od = 5.5 > B, Zc = G.scripts, Pd = (Za ? "ie5mac" : 5.5 > B ? "ie5win" : 6 > B ? "ie55" : 10 > B ? "ie" + (B | 0) : "modern") + ".css", $c = 0 === location.href.indexOf("https");
  var Ma = Zc[Zc.length - 1].src.split("/");
  --Ma.length;
  var Qd = Ma.join("/");
  0 <= "http: https:".indexOf(Ma[0]) && Ma.splice(0, 3);
  Ma = Ma.join("/");
  var va = function(a) {
    return void 0 !== a;
  };
  var ma = Array.prototype;
  ma.pop || (ma.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  ma.push || (ma.push = function() {
    for (var a = arguments, b = 0, d = a.length, e = this.length; b < d; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  ma.shift || (ma.shift = function() {
    for (var a = this[0], b = 1, d = this.length; b < d; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  ma.splice || (ma.splice = function(a, b) {
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
  ma.indexOf || (ma.indexOf = function(a, b) {
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
  La.push(function() {
    $a(function() {
      (hc = u.logger || G.all.logger) || alert("#logger not found!");
      for (hc ? y = function(a) {
        ea(hc, "P", null, null, a);
      } : u.console && (y = console.log); ic.length;) {
        y(ic.shift());
      }
    });
  });
  y = function(a) {
    ic.push(a);
  };
  var bb = [], Rd = 0, Fa;
  if (5 > B || Za) {
    u._wdb_onlooptimer = ab, ab = "_wdb_onlooptimer()";
  }
  var ad = function(a) {
    bb.length || (Fa = setInterval(ab, 999));
    bb.push({f:a, g:++Rd});
  };
  La.push(function() {
    6.1 > lb && bd(nd);
    tb(sc);
  });
  var na = [], cd = 0, Aa;
  if (5 > B || Za) {
    u._wdb_ontimer = Na, Na = "_wdb_ontimer()";
  }
  var K = function(a, b) {
    na.length || (Aa = vb(Na, 64));
    na.push({f:a, p:b, g:++cd, t:new sa - 0 + 64});
    return cd;
  };
  var dd = function(a) {
    for (var b = na.length, d; d = na[--b];) {
      if (d.g === a) {
        na.splice(b, 1);
        break;
      }
    }
  };
  La.push(function() {
    6.1 > lb && bd(od);
    tb(tc);
  });
  var Oa = [], vc, zb = 0, Ea = u.matchMedia, Ga;
  Oa.push(function() {
    Ga = ea(M, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var ed = [], yb = u.onload, fd = u.onunload;
  onload = xb;
  onunload = function(a) {
    var b;
    fd && (b = fd(a));
    da(ed, a);
    onunload = cb;
    return b;
  };
  var $a = function(a) {
    Oa.push(a);
  };
  var tb = function(a) {
    ed.push(a);
  };
  var wc = [];
  $a(function() {
    uc();
    ad(uc);
  });
  var jc = function(a) {
    wc.push(a);
  };
  var Qa = [], Pa, Ab, Bb;
  10 <= B || Yc ? (Ea("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Pa = Ab = a.matches;
    da(Qa, db());
  }), Ea("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Pa = Bb = a.matches;
    da(Qa, db());
  }), Ea("(-ms-high-contrast:active)").addListener(function(a) {
    Pa = a.matches;
    da(Qa, db());
  }), Ha = null) : 10 > B || (t.Win32 || t.Win64) && (44 <= fc || gc) ? $a(function() {
    Ga.style.color = "#123456";
    Ga.style.backgroundColor = "#123456";
    60 > fc || gc ? Ha() : Ha() && ad(Ha);
    Ha = null;
  }) : Ha = null;
  var Sd = [];
  Ea && Ea("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    da(Sd, a.matches);
  });
  var kc = [];
  u.onbeforeprint ? (onbeforeprint = function() {
    da(kc, !0);
  }, onafterprint = function() {
    da(kc, !1);
  }, tb(function() {
    onbeforeprint = onafterprint = cb;
  })) : Ea && Ea("print").addListener(function(a) {
    da(kc, a.matches);
  });
  var gd = [], lc = u.onscroll;
  onscroll = function(a) {
    var b;
    lc && (b = lc(a));
    xb || da(gd);
    return b;
  };
  tb(function() {
    onscroll = lc = cb;
  });
  var bd = function(a) {
    gd.push(a);
  };
  var hd = eb("html")[0];
  var Ra = eb("head")[0];
  var fb;
  Oa.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var E = k.length, m, n, A, J, q; m = k[--E];) {
        if (n = m.nodeType, 8 === n) {
          b && fa(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Od ? (A = m.sheet || m.styleSheet) && (J = 10 <= B ? A.cssRules : A.rules || A.cssRules) && !J[0] : (new ub("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  fa(m);
                  break;
                }
              case "LINK":
                xc && !Ra.contains(m) && e.push(m);
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
                if (yc(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (yc(m, "skip-cleanup")) {
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
        A = e.pop(), Ra.appendChild(A);
      }
    }
    var b = !(8 > ec || 5 > B || Za), d = ["og:", "twitter:", "fb:"], e = [];
    a(hd);
  });
  var Db = void 0;
  var Cc = {}, mc, Ua, ia, Td = va(za.transform) ? "transform" : va(za["-o-transform"]) ? "-o-transform" : va(za["-ms-transform"]) ? "-ms-transform" : va(za["-moz-transform"]) ? "-moz-transform" : va(za["-webkit-transform"]) ? "-webkit-transform" : "";
  ia || jc(function(a) {
    a && !va(ia) && (ia = 1.8 <= fc || gc || 8 <= B || Yc || 530 <= hb || 3.2 <= lb, ia || (a = ea(M, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ia = 6 <= a.offsetWidth, fa(a)));
  });
  var Sa;
  9 > B && $a(function(a) {
    a = ea(M, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    mc = 1 < a.offsetHeight;
    a.style.cssText = "";
    fa(a);
  });
  var id = $c ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var rd = function() {
    function a() {
      k || (d.complete ? (k = !0, d.width || K(b, !1)) : e = K(a));
    }
    var b = Fc;
    if (id) {
      var d = new Image, e, k;
      d.onerror = function() {
        (!B || 11 === B || 11 === t.IEHost) && d.width || k || (k = !0, e && dd(e), e = K(b, !1));
      };
      d.onload = function() {
        k = !0;
        e && dd(e);
        ec && !d.complete ? e = K(b, !1) : (Ua = !0, K(b, !0));
      };
      d.src = id;
      8 > ec && d.complete ? (Ua = !0, K(b, !0)) : k || (e = K(a));
    } else {
      y("[imageTest] TEST_IMAGE_URL is undefined!"), K(b, !1);
    }
  };
  var Dc = "bad_" + (new sa - 0) + "_";
  var qd = Bc;
  for (t.IEHost && 5.5 > B && $a(function() {
    ea(Ra, "link", {href:Qd + "/" + Pd, rel:"stylesheet", type:"text/css"});
  }); La.length;) {
    La.shift()();
  }
  La = null;
  var jd = jd || {}, Y = String.fromCharCode, I = $c ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Ba = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Y(960), ")", "(", Y(234), Y(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Y(9824), "\u2190", Y(9829), Y(9830), Y(9827), Y(956), "\u03a9", "\u2193", "\u2192", "%", Y(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Y(9619)];
  Qa.push(function(a) {
    gb("jsHcm");
    gb("jsHcmWob");
    gb("jsHcmBow");
    if (a) {
      switch((Td || 9 === B || 5.5 <= B && 9 > B && mc) && ta(M, "jsCanRotate"), a) {
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
      gb("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, kd;
  jc(function(a) {
    function b(z) {
      var p = z.getAttribute("pbtip") || "", w = p.charAt(0), H = "_" === w;
      p = H ? p.charAt(2) : w;
      w = H ? "Btm" : "";
      var S = z.getAttribute("title") || "";
      ta(z, "pbTipPos" + p.toUpperCase());
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
          R = w, 3 === R.length && (R = R.substr(0, 2)), R = Ba[parseInt(R, 16)] || "~";
        }
        S = S.split(" ")[0];
        H = H.split(" ")[0];
        H = 10 - Z(H);
        p ? (p = {className:["pbChr" + w + " pbAlp" + H + " pbCsr" + S]}, fb = 1, A = ea(z, "b", p, 0, R), e(z), e(A)) : e(z);
      }
    }
    function e(z) {
      aa || E || Ia(z, "pbChrCS") && Ib.push(z);
    }
    if (a && !kd) {
      kd = !0;
      var k = 6 > B ? 1 : 0;
      a = eb("SAMP");
      var E = 9 > B, m = 5 <= B && 6 > B, n, A, J, q;
      mc && ta(M, "pbLCD-AX");
      if (a.length) {
        var aa = void 0 !== za.opacity || void 0 !== za["-moz-opacity"] || void 0 !== za["-khtml-opacity"], N = !aa && !E && !0, Q = !ia || N || void 0;
        for (J = -1; n = a[++J];) {
          if (Ia(n.parentElement || n.parentNode, "pbLCD")) {
            var wa = n.children;
            for (n = wa.length; n;) {
              var P = wa[--n];
              switch(P.tagName.toUpperCase()) {
                case "A":
                  if (Q) {
                    for (ia || b(P), q = P.children.length; q;) {
                      d(P.children[--q]);
                    }
                  }
                  Nd ? P.setAttribute("href", "javascript:void(0)") : P.onclick = pd;
                  break;
                case "B":
                  Q && d(P);
              }
            }
          }
        }
        Ib.length ? (setInterval(Ec, 500), ia ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Ec = null;
        N && (ia ? Ja([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + I + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        I + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + I + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + I + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + I + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + I + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + I + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + I + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        I + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + I + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + I + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + I + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > hb && (hd.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === B && (new ub("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(G);
  var Ob = Ba[7], Gc = Ba[30], td = Ba[113], jb = Y(8337) + Y(8331), Pb = Y(160), xd = Y(8194), vd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), wd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), ud = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Gc + Ba[31]).split(""), xa = 
  [], Mb = [], Ta, Nb;
  jc(function(a) {
    if (a && !Nb) {
      var b = G.all || eb("*");
      a = [];
      for (var d = b.length; d;) {
        a[--d] = b[d];
      }
      for (b = -1; d = a[++b];) {
        Ia(d, "pbList") ? kb(d) : Ia(d, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(d.tagName.toUpperCase()) && kb(d, !0);
      }
      xa.length && (y("[pbList] " + xa.length + " elements found. WebFont test start."), ib());
      Nb = !0;
    }
  });
  jd.prettify = kb;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

