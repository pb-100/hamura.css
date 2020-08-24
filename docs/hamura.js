PB100 = {};
(function(jd, t, x, kd, H, qa, lc, X, mc, tb, Sd, ub, ld, xa, Td) {
  function vb(a, b) {
    var c = X(a.split(b)[1]);
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
  function nc(a, b) {
    var c = 0, e;
    a = a.split(".");
    b = b.split(".");
    for (e = Math.min(a.length, b.length); c < e; ++c) {
      var k = X(a[c]), B = X(b[c]);
      if (k !== B) {
        return k > B ? 1 : -1;
      }
    }
    return a.length === b.length ? 0 : a.length > b.length ? 1 : -1;
  }
  function oc() {
    for (var a = arguments, b = 1, c = a.length, e = a[0], k; b < c; ++b) {
      0 > nc(e, k = a[b]) && (e = k);
    }
    return e;
  }
  function pc(a) {
    return a === a + "" ? a : a === a - 0 ? "" + a : a.min && a.max ? a.min + "~" + a.max : a.min ? a.min + "~" : "~" + a.max;
  }
  function ra(a) {
    return void 0 !== a;
  }
  function Za() {
    for (var a, b = 0; b < $a.length; ++b) {
      a = $a[b], a.f();
    }
  }
  function md() {
    Ea && (qc(), Ea = setInterval(Za, rc));
  }
  function qc() {
    Ea && (Ea = clearInterval(Ea));
  }
  function Ma() {
    for (var a, b = 0, c = new xa - 0; b < ma.length;) {
      c < ma[0].t ? ++b : (a = ma.splice(b, 1)[0], a.f(a.p));
    }
    ya = ma.length ? ub(Ma, Na) : 0;
  }
  function nd() {
    ya && (sc(), ya = ub(Ma, Na));
  }
  function sc() {
    ya && (ya = ld(ya));
  }
  function ca(a, b) {
    for (var c = 0, e = a.length; c < e; ++c) {
      a[c](b);
    }
  }
  function wb(a) {
    var b;
    xb && (b = xb(a));
    ca(Oa, a);
    onload = Fa;
    Oa = wb = xb = onload = null;
    return b;
  }
  function tc() {
    var a = 9 === Ga.offsetWidth;
    uc !== a && ca(vc, uc = a);
  }
  function Ha() {
    function a(k) {
      return "#ffffff" === k || "rgb(255,255,255)" === k;
    }
    var b = H.defaultView, c = yb, e = b ? b.getComputedStyle(Ga, null) : Ga.currentStyle;
    b = (e && e.color || "").split(" ").join("");
    e = (e && e.backgroundColor || "").split(" ").join("");
    if (b) {
      return Pa = "#123456" !== b && "rgb(18,52,86)" !== b, zb = ("#000000" === b || "rgb(0,0,0)" === b) && a(e), Ab = a(b) && ("#000000" === e || "rgb(0,0,0)" === e), c !== ab() && ca(Qa, yb), !0;
    }
  }
  function ab() {
    return yb = Pa ? Ab ? 2 : zb ? 3 : 1 : 0;
  }
  function bb(a) {
    var b = b || H;
    return wc ? b.getElementsByTagName(a) : b.all.tags(a.toUpperCase());
  }
  function da(a) {
    (a.parentElement || a.parentNode).removeChild(a);
  }
  function Bb(a, b) {
    var c = H.createElement(a);
    b && (c.innerHTML = b);
    return c;
  }
  function ea(a, b, c, e, k) {
    function B(y, I) {
      for (var q in I) {
        switch(q) {
          case "class":
          case "className":
            sa(y, I[q]);
            break;
          default:
            y.setAttribute(q, I[q]);
        }
      }
    }
    function m(y, I) {
      var q = y.style, Y;
      for (Y in I) {
        q[Y] = I[Y];
      }
    }
    if ("style" === b) {
      var n = !0;
      b = Bb("div", 'a<style type="text/css">' + k + "</style>").lastChild;
    } else {
      b = Bb(b);
    }
    cb ? (2 === cb && (a = a.nextSibling), a ? (a.parentElement || a.parentNode).insertBefore(b, a) : (a.parentElement || a.parentNode).appendChild(b)) : a.appendChild(b);
    cb = 0;
    c && B(b, c);
    e && m(b, e);
    k && !n && b.appendChild(H.createTextNode(k));
    return b;
  }
  function xc(a, b) {
    return a.hasAttribute ? a.hasAttribute(b) : null != a.getAttribute(b);
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
    if (Ia(L, a)) {
      var b = L.className.split(" ");
      b.splice(b.indexOf(a), 1);
      L.className = b.join(" ");
    }
  }
  function yc(a) {
    a = ea(Ra, "style", {type:"text/css", media:"all"}, 0, a);
    Cb = a.sheet || a.styleSheet;
  }
  function Ja(a) {
    for (var b = Cb, c, e, k = "", B; a.length;) {
      c = a.shift(), e = a.shift(), B = c + "{" + e + "}", b ? b.addRule ? b.addRule(c, e) : b.insertRule && b.insertRule(B, b.cssRules.length) : k += B;
    }
    k && yc(k);
  }
  function zc(a) {
    function b(e) {
      Db = e;
      c.onload = c.onerror = Fa;
      J(a, e);
    }
    if (ra(Db)) {
      J(a, Db);
    } else {
      if (8 > z) {
        J(a, !1);
      } else {
        var c = new Image;
        c.onerror = function() {
          c.onload = c.onerror = Fa;
          b(!1);
        };
        c.onload = function() {
          b(1 === c.width * c.height);
        };
        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function Ac(a, b, c, e, k, B) {
    function m() {
      H.fonts.load('1.6em "' + b + '"').then(function() {
        q(b) ? J(a, Z) : y(!0);
      }, function() {
        zc(Y);
      });
    }
    function n(C) {
      return H.hidden || H.msHidden || H.mozHidden || H.webkitHidden ? (O = new xa - 0, !1) : C < new xa - O;
    }
    function y(C) {
      C && (O = new xa - 0);
      q(b) ? a(Z) : n(ta) ? w ? a(0) : 9 > z ? J(a, 0) : zc(Y) : J(y);
    }
    function I() {
      var C = -1, E;
      I = null;
      F = ["sans-serif", "serif"];
      p = ea(L, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (Q = {}; E = F[++C];) {
        p.style.fontFamily = E, Q[E] = p.offsetWidth;
      }
    }
    function q(C) {
      var E = 0, fa = -1, Eb, Fb, Gb = 0;
      I && I();
      for (L.appendChild(p); Eb = F[++fa];) {
        if (p.style.fontFamily = '"' + C + '",' + Eb, p.offsetWidth !== Q[Eb]) {
          E = 1;
          break;
        }
      }
      if (E && k) {
        for (Fb in k) {
          if (p.innerHTML = Fb, C = p.offsetWidth, p.innerHTML = k[Fb], Gb = C === p.offsetWidth ? 1 : 0, p.innerHTML = "mmmmmmmmmmlli", !Gb) {
            break;
          }
        }
      }
      da(p);
      return Z = E + Gb;
    }
    function Y(C) {
      (w = C) ? M(!0) : a(0);
    }
    function M(C) {
      C && (O = new xa - 0);
      for (E in c) {
        if (q(E)) {
          u = ea(L, "div", {"aria-hidden":"true", className:e, id:e});
          C = c[E];
          var E = Cb, fa = Bc.all || 0;
          E ? E.addImport ? E.addImport(C, fa) : E.insertRule && E.insertRule('@import "' + C + '"', fa) : yc('@import "' + C + '"');
          Bc.all = ++fa;
          J(P, !0);
        } else {
          n(100) ? (delete c[E], J(M, !0)) : J(M);
        }
        return;
      }
      a(0);
    }
    function P(C) {
      C && (O = new xa - 0);
      1 < u.offsetWidth ? (da(u), ta = 100, J(y, !0)) : n(ta) ? (da(u), a(0)) : J(P);
    }
    var ta = B || 5000, O, w, p, u, F, Q, Z;
    (function() {
      var C;
      if (t.MeeGo || 2.2 > t.AOSP || t.WebOS || t.UCWEB || 10 > t.TridentMobile || t.NDS || t.NDSi || t.N3DS) {
        return !1;
      }
      if (6 > z) {
        return !0;
      }
      var E = ea(Ra, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), fa = (fa = E.sheet || E.styleSheet) ? (C = fa.cssRules) && (C = C[0]) ? C.cssText : fa.cssText || "" : "";
      C = 0 < fa.indexOf("src") && 0 === fa.indexOf("@font-face");
      da(E);
      return C;
    })() ? !H.fonts || 603 > eb ? y(!0) : m() : J(a, 0);
  }
  function Cc() {
    Hb = !Hb;
    for (var a = -1, b; b = Ib[++a];) {
      b.style.visibility = Hb ? "" : "hidden";
    }
  }
  function od(a) {
    var b = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), Jb = !0, !1;
    }
    b.cancelBubble = !0;
    return b.returnValue = !1;
  }
  function fb() {
    fb = null;
    pd(Kb, "PB-100", {"PB-100_canTTF":G + "pbFont/ttf.css", "PB-100_canWOFF":G + "pbFont/woff.css", "PB-100_canEOT":G + "pbFont/eot.css", "PB-100_canSVG":G + "pbFont/svg.css"}, "pbFont-testCssReady", {h:gb}, 5000);
  }
  function Kb(a) {
    (hb = a) ? Lb() : Sa ? Dc(!0) : ra(Sa) ? Lb() : qd(Dc);
  }
  function Dc(a) {
    a && (sa(L, "pbList-noWebFont"), ha ? Ja([".pbList font:after", "content:url(" + G + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]) : Ja([".pbList font", "background-image:url(" + G + "pbFont/" + (9 > z ? "x3mask_ie.png" : "x3mask.png") + ")"]));
    Lb();
  }
  function Lb() {
    for (Kb = Ac = null; za.length;) {
      ib(za.shift(), Mb.shift());
    }
  }
  function ib(a, b) {
    function c(B) {
      B = B.childNodes;
      for (var m = -1, n; n = B[++m];) {
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
    if (Kb) {
      -1 === za.indexOf(a) && (za.push(a), Mb.push(b), Nb && fb && fb());
    } else {
      var k = za.indexOf(a);
      0 <= k && za.splice(k, 1) && Mb.splice(k, 1);
      for (c(a); a = e.shift();) {
        k = a.data, 2 !== hb && (k = k.split(gb).join(Ec)), b ? a.data = k : rd(k.split("\r").join("").split("&yen;").join(sd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(Ob).split("&amp;").join("&"), a);
      }
    }
  }
  function rd(a, b) {
    function c(p, u) {
      for (var F = ""; u;) {
        u & 1 && (F += p), u >>= 1, p += p;
      }
      return F;
    }
    function e(p, u, F) {
      for (var Q, Z = -1, C, E; Q = u[++Z];) {
        for (; 0 <= (C = p.indexOf(Q));) {
          E = Q.length, p = p.substr(0, C) + c(F, E) + p.substr(C + E);
        }
      }
      return p;
    }
    function k(p) {
      var u = X(p), F = "" + u;
      return 0 < u && u === u | 0 && (u = p.indexOf(F) + F.length, u <= p.length) ? u : 0;
    }
    var B = " area line str cmd fnc syb".split(" "), m = [], n = "", y = -1, I, q;
    if (function(p) {
      var u = p.indexOf("P");
      if (-1 === u) {
        return !1;
      }
      u = X(p.charAt(u + 1));
      return 0 <= u && 9 >= u;
    }(a)) {
      n = c("+", a.length);
    } else {
      for (0 <= (y = k(a)) && (n = c("|", y), --y); q = a.charAt(++y);) {
        q === Ob || I ? (n += "~", q === Ob && (I = !I)) : n += q;
      }
      n = e(n, td, "^");
      n = e(n, ud, "{");
      n = e(n, vd, "}");
    }
    y = 0;
    for (I = a.length; y < I; ++y) {
      q = a.charAt(y);
      var Y = q === Pb, M = " " === q;
      q = Y ? " " : q;
      var P = n.charAt(y), ta = O, O = "|" === P;
      P = B["+|~{}^".indexOf(P) + 1];
      if ("\n" !== q) {
        if (hb || !Sa) {
          8 > z && M && (q = y === I - 1 ? Pb : wd), 2 === hb && a.substr(y, 2) === gb && (q = gb, ++y), M = M && "str" === P ? ' class="pbList-strsp"' : Y ? "" : !M && P ? ' class="pbList-' + P + '"' : "";
        } else {
          var w = Aa.indexOf(q);
          w = -1 === w ? "" : Aa.indexOf(q).toString(16).toUpperCase();
          w = (w = 1 === w.length ? "0" + w : w) ? "pbChr" + w : "";
          M = M && "str" === P ? ' class="pbList-strsp"' : M || !w ? "" : P ? ' class="' + (w ? w + " " : "") + "pbList-" + P + '"' : ' class="' + w + '"';
        }
        ta && Y && (eb || jb) && (q = Pb);
        m.push("<font" + M + ">" + q + "</font>");
      } else {
        m.push(q);
      }
    }
    m = m.join("");
    if (1 === b.nodeType) {
      b.innerHTML = m;
    } else {
      for (B = Bb("font", m); m = B.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(m, b);
      }
      da(b);
    }
  }
  var r, v, d = qa.userAgent, R = qa.appVersion, Qb = X(R) | 0, D = qa.platform, Rb = H.documentElement, Fc = Rb && Rb.style, Sb = H.documentMode, Tb = lc.width, Ub = lc.height, Gc = x.HTMLAudioElement, Hc = x.performance, Ic = x.Int8Array, xd = void 0 !== x.ontouchstart, Ba = l(R, "Version/") || l(d, "Version/"), Ka = void 0 !== Fc.MozAppearance, Jc = x.operamini, Vb = g(d, "UCWEB"), yd = Vb && l(d, " U2/"), zd = Vb && l(d, "; wds "), Wb = l(d.split("_").join("."), "; iPh OS "), Ad = l(d, "; Adr "), 
  Kc = g(R, "YJApp-ANDROID"), ia = g(D, "Android") || Ka && g(R, "Android") || Kc, S = l(D, "Android ") || l(R, "Android ") || l(d, "Android ") || Ad, Xb = g(D, "Linux"), Yb = "MacIntel" === D && void 0 !== qa.standalone, Ca = !Jc && x.opera, Bd = Ca && (Ca.version && "function" === typeof Ca.version ? Ca.version() : oc(l(d, "Opera "), Ba, "" + Qb)), Lc = x.opr, kb = !Ca && (H.all || Sb), aa = kb && (Sb ? Sb : x.XMLHttpRequest ? H.getElementsByTagName ? 7 : 4 : H.compatMode ? 6 : (0).toFixed ? 5.5 : 
  x.attachEvent ? 5 : 4), Zb = !kb && Rb.msContentZoomFactor, lb = !Zb && x.chrome, $b = Ka && l(d, "Goanna/"), ka = !$b && Ka && l(d, "rv:"), Cd = l(d, "Firefox/"), Dd = l(d, "Opera/"), Ed = x.FNRBrowser, na = vb(d, "AppleWebKit/"), Ta = l(d, "Chrome/"), Mc = l(d, "OPR/"), Fd = l(R, "KHTML/"), Gd = l(d.toLowerCase(), "iris"), Ua = vb(d, "SamsungBrowser/"), Va;
  if (Va = !Ua) {
    a: {
      for (var Nc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      mb, ac = Nc.length; mb = Nc[--ac];) {
        if (g(d, mb)) {
          Va = 2 > X(Ba) ? Ba : 0.9;
          break a;
        }
      }
      var Oc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (ac = Oc.length; mb = Oc[--ac];) {
        if (g(d, mb)) {
          Va = Ba;
          break a;
        }
      }
      Va = void 0;
    }
  }
  var Pc = Va, Qc = lb && 534.3 >= na, Rc = xd && (na || Ka) && (0 === D.indexOf("Linux armv") || 0 === D.indexOf("Linux aarch") || "Linux i686" === D) && g(d, "Linux x86_64") || !S && Kc, Sc = x.puffinDevice, nb = Sc && Sc.clientInfo, Wa = nb && "iOS" === nb.os && nb.osVersion, Hd = Wa && nb.model, bc = !aa && H.registerElement, Id = !aa && H.execCommand, Jd = Xb && bc && "11.0.696.34" === Ta, Kd = x._firefoxTV_playbackStateObserverJava, va, ja, A;
  if ("Nitro" === D) {
    var h = "NDS";
  } else {
    if ("Nintendo DSi" === D) {
      h = "NDSi";
      var f = Dd;
    } else {
      if ("New Nintendo 3DS" === D || g(d, "iPhone OS 6_0") && 320 === Tb && 240 === Ub) {
        h = "New3DS", f = l(d, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === D) {
          h = "N3DS", f = l(d, "Version/"), na = 535;
        } else {
          if ("Nintendo Swicth" === D) {
            h = "Swicth", f = l(R, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === D) {
              h = "WiiU", f = l(R, "NintendoBrowser/"), na = l(R, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === D) {
                h = "Wii";
                f = l(d, "Wii; U; ; ");
                var K = h;
                var N = f;
              } else {
                if (A = l(d, "PlayStation Vita ")) {
                  h = "PSVita", f = A, K = h, N = A;
                } else {
                  if (A = l(d, "(PlayStation Portable); ")) {
                    h = "PSP";
                    f = A;
                    var Tc = 3.3;
                    K = h;
                    N = A;
                  } else {
                    if (A = l(d, "PLAYSTATION 3; ") || l(d, "PLAYSTATION 3 ")) {
                      h = "PS3", f = A, K = h, N = A, 0 > nc("4.10", A) && (r = "Sony", v = A);
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
                            K = h;
                            N = 2;
                            var ob = !0;
                          } else {
                            if (0 === D.indexOf("iP") || Wb || Wa || Yb) {
                              if (Wa) {
                                switch(f = Wa, Hd.substr(0, 4)) {
                                  case "iPho":
                                    var oa = "iPhone";
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    oa = "iPad";
                                    var T = !0;
                                    break;
                                  case "iPod":
                                    oa = "iPod";
                                    var Uc = !0;
                                }
                              } else {
                                Wb ? f = Wb : f = l(R.split("_").join("."), "OS ");
                                f || (ja = !0);
                                if (!f || Ed) {
                                  f = x.PointerEvent ? 13 : x.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : qa.sendBeacon ? 11.3 : x.WebAssembly ? 11.2 : x.HTMLMeterElement ? 10.3 : x.Proxy ? 10.2 : x.HTMLPictureElement ? 9.3 : mc.isNaN ? 9.2 : x.SharedWorker ? Hc && Hc.now ? 8.0 : 8.4 : Id ? 7.1 : x.webkitURL ? 6.1 : x.Worker ? 5.1 : Ic ? 4.3 : Gc ? 4.1 : 3.2;
                                }
                                var U = Tb === 1.5 * Ub || 1.5 * Tb === Ub;
                                0 === D.indexOf("iPhone") ? (oa = "iPhone", ba = !0) : 0 === D.indexOf("iPad") || Yb ? (oa = "iPad", T = !0) : 0 === D.indexOf("iPod") && (oa = "iPod", Uc = !0);
                              }
                              var cc;
                              if (cc = !Wa) {
                                var dc;
                                if (!(dc = qa.standalone)) {
                                  var pb;
                                  if (pb = T || 12 > f) {
                                    a: {
                                      for (var Ld in H) {
                                        if ("webkitFullscreenEnabled" === Ld) {
                                          pb = !0;
                                          break a;
                                        }
                                      }
                                      pb = void 0;
                                    }
                                  }
                                  dc = pb;
                                }
                                cc = dc || 11 <= f && 13 > f && qa.mediaDevices;
                              }
                              cc ? (r = "SafariMobile", K = "Safari", N = f) : r = "iOSWebView";
                              h = "iOS";
                              v = f;
                            } else {
                              if (g(d, "Kobo")) {
                                h = "Kobo", r = "AOSP", v = 2.2, K = r, N = v, ia = !0;
                              } else {
                                if (g(d, "EBRD")) {
                                  h = "SonyReader", r = "AOSP", v = 2.2, K = r, N = v;
                                } else {
                                  if (A = l(d, "CrOS x86_64 ") || l(d, "CrOS aarch64 ") || l(d, "CrOS i686 ") || l(d, "CrOS armv7l ")) {
                                    h = "ChromeOS", f = A;
                                  } else {
                                    if (void 0 !== x.onmoztimechange) {
                                      h = "FirefoxOS", f = 18.1 > ka ? "1.0.1" : 19 > ka ? 1.1 : 27 > ka ? 1.2 : 29 > ka ? 1.3 : 31 > ka ? 1.4 : 33 > ka ? 2.0 : 35 > ka ? 2.1 : 38 > ka ? 2.2 : 45 > ka ? 2.5 : 2.6, g(d, "Mobile") ? ba = !0 : g(d, "Tablet") && (T = !0);
                                    } else {
                                      if (x.palmGetResource) {
                                        h = "webOS", f = l(d, "webOS/") || l(d, "WEBOS") || l(d, "hpwOS/"), K = h, N = f, g(d, "webOS.TV") || g(d, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (A = l(d, "Tizen ")) {
                                          h = "Tizen", f = A, K = "Samsung", N = Ua, r = K, v = N, ba = !0;
                                        } else {
                                          if (A = l(d, "Windows Phone ") || l(R, "Windows Phone OS ") || zd) {
                                            var qb = !0;
                                            f = A;
                                            ba = !0;
                                          } else {
                                            if (Zb && "ARM" === D) {
                                              qb = !0, f = 10, ja = ba = !0;
                                            } else {
                                              if (kb && g(R, "ZuneWP")) {
                                                qb = !0, f = 11 === aa ? 8.1 : 10 === aa ? 8 : 9 === aa ? 7.5 : 7 === aa ? 7 : "?", ja = ba = !0;
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
                                                      var V = T = !0;
                                                    } else {
                                                      if (g(d, "KFKAWI")) {
                                                        pa = !0, f = 6, V = T = !0;
                                                      } else {
                                                        if (g(d, "KFSUWI") || g(d, "KFAUWI") || g(d, "KFDOWI")) {
                                                          pa = !0, f = 5, V = T = !0;
                                                        } else {
                                                          if (g(d, "KFGIWI")) {
                                                            pa = !0, f = 5, V = T = !0;
                                                          } else {
                                                            if (g(d, "KFARWI") || g(d, "KFSAWA") || g(d, "KFSAWI")) {
                                                              pa = !0, f = 5 <= X(S) ? 5 : 4, V = T = !0;
                                                            } else {
                                                              if (g(d, "KFSOWI") || g(d, "KFTHWA") || g(d, "KFTHWI") || g(d, "KFAPWA") || g(d, "KFAPWI")) {
                                                                pa = !0, f = 3, V = T = !0;
                                                              } else {
                                                                if (g(d, "KFOT") || g(d, "KFTT") || g(d, "KFJWA") || g(d, "KFJWI")) {
                                                                  pa = !0, f = 2, V = T = !0;
                                                                } else {
                                                                  if (g(d, "Kindle Fire")) {
                                                                    pa = !0, f = 1, V = T = !0;
                                                                  } else {
                                                                    if (A = l(d, "Kindle/")) {
                                                                      h = "Kindle", f = A, r = "AOSP", v = 2.2, K = r, N = v;
                                                                    } else {
                                                                      if (g(d, "AmazonWebAppPlatform") || g(d, "; AFT") || Kd) {
                                                                        pa = !0, f = S, V = !0;
                                                                      } else {
                                                                        if (g(d, "MeeGo")) {
                                                                          h = "MeeGo";
                                                                        } else {
                                                                          if (g(d, "Maemo")) {
                                                                            h = "Maemo";
                                                                          } else {
                                                                            if (0 === d.indexOf("Windows Mobile;") || Gd) {
                                                                              h = "WindowsMobile", ob = !0;
                                                                            } else {
                                                                              if ("WinCE" === D) {
                                                                                h = D, ob = !0;
                                                                              } else {
                                                                                if ("Win16" === D || "Win32" === D || "Win64" === D) {
                                                                                  h = D, f = l(d, "Windows NT ") || l(d, "Windows ");
                                                                                } else {
                                                                                  if (0 === D.indexOf("Mac")) {
                                                                                    h = "MacPowerPC" === D ? "MacPPC" : D;
                                                                                    if (A = l(d.split("_").join("."), "Mac OS X ")) {
                                                                                      f = A;
                                                                                    }
                                                                                    var Vc = !0;
                                                                                  } else {
                                                                                    g(d, "BlackBerry") || g(d, "BB10") ? (h = "BlackBerry", f = Ba, ba = !0) : g(d, "SunOS") || g(d, "Sun Solaris") ? h = "SunOS" : g(d, "FreeBSD") ? h = "FreeBSD" : g(d, "OpenBSD") ? h = "OpenBSD" : g(d, "NetBSD") ? h = "NetBSD" : ia && Ka ? (g(d, "Android 4.4;") ? U = {min:2.3} : 4 <= X(S) ? U = S : U = {min:2.2}, f = U, Rc && (ja = !0)) : ia && Ca ? (S ? U = S : (U = {min:1.6}, ja = !0), f = U, g(d, "Tablet") ? T = 
                                                                                    !0 : ba = !0) : S ? (f = S, ia = !0) : Xb && Rc ? (va = !0, Ua ? U = {min:4.4} : lb && !Qc || Lc || Mc ? U = {min:4} : (U = S = void 0 !== Fc.touchAction ? {min:5} : bc ? 4.4 : Ic ? qa.connection ? x.searchBoxJavaBridge_ || lb ? mc.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= na ? 3 : 533 <= na ? Gc ? 2.3 : 2.2 : 530 <= na ? 2.0 : 1.5, Pc && (r = "Samsung", v = Pc)), f = U, ia = !0) : Jd ? (f = {min:5}, va = ia = !0) : Xb && 
                                                                                    (g(d, "Ubuntu") ? h = "Ubuntu" : (A = l(d, "Mint/")) ? (h = "Mint", f = A) : (A = l(d, "Fedora/")) ? (h = "Fedora", f = A) : h = g(d, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
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
  qb && (h = "WindowsPhone");
  r || (V = V || ia, Ca ? (r = V || ob || ba || T ? "PrestoMobile" : "Presto", v = Bd) : kb ? ((U = vb(R, "Trident/") + 4) && U !== aa && (K = "IEHost", N = U), 10 <= aa && 6.2 <= f && 7 > f && 0 === screenY && innerHeight + 1 !== outerHeight && (K = "ModernIE", N = aa), ob || ba || T || Uc ? r = "TridentMobile" : Vc && 5 <= aa ? (r = "Tasman", K = "MacIE", N = aa) : (r = "Trident", Vc && (K = "MacIE", N = aa)), v = aa) : Zb ? (r = qb ? "EdgeMobile" : "EdgeHTML", v = l(R, "Edge/")) : $b ? (r = "Goanna", 
  v = $b) : Ka ? (r = V ? "Fennec" : "Gecko", v = ka || Cd) : Ua ? (r = "Samsung", v = Ua, va && (ja = !0)) : (A = Tc || l(d, "NetFront/")) ? (r = "NetFront", v = A) : (A = l(d, "iCab")) ? (r = "iCab", v = A) : (A = oc(l(d, "Opera Mini/"), l(d, "Opera Mobi/")) || Jc && Ba) ? (r = "OperaMini", v = A, h || (g(d, "iPhone") ? oa = "iPhone" : g(d, "iPad") ? oa = "iPad" : g(d, "iPod") && (oa = "iPod"), oa && (h = "iOS"))) : Vb ? (r = "UCWEB", v = yd) : Fd ? (r = "KHTML", v = Qb) : ia && Qc ? (r = "AOSP", 
  v = S, va && (ja = !0)) : lb || Lc || Mc ? (r = V ? "ChromiumMobile" : "Chromium", v = Ta, va && (ja = !0)) : ia && bc ? (r = "ChromeWebView", v = 5 > X(S) ? S : Ta, va && (ja = !0)) : ia && (Ba || va) ? (r = "AOSP", v = S, va && (ja = !0)) : Ta ? (r = V ? "ChromiumMobile" : "Chromium", v = Ta) : na && (r = "WebKit", v = na));
  h && (t.PLATFORM = h, f ? (t.PLATFORM_VERSION = pc(f), t[h] = f === f + "" ? X(f) : f) : t[h] = !0);
  r && (t.ENGINE = r, v ? (t.ENGINE_VERSION = pc(v), t[r] = v === v + "" ? X(v) : v) : t[r] = !0, K || (K = r, N = v));
  if (ja || Yb) {
    t.PC_MODE = !0;
  }
  var Fa = kd, Xa = [], wc = !!H.getElementsByTagName, L = H.body, wa = L.style, z = t.Trident || t.TridentMobile, Ya = t.Tasman, Wc = t.EdgeHTML || t.EdgeMobile, ec = t.Presto || t.PrestoMobile, fc = t.Gecko, gc = t.Goanna, eb = t.WebKit, jb = t.SafariMobile || t.iOSWebView, Md = t.OperaMini && t.UCWEB;
  z || Ya || (new tb('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var Nd = 5.5 > z, Xc = H.scripts, Od = (Ya ? "ie5mac" : 5.5 > z ? "ie5win" : 6 > z ? "ie55" : 10 > z ? "ie" + (z | 0) : "modern") + ".css", Yc = 0 === location.href.indexOf("https"), Oa = [], uc, yb = 0, hc, Sa, ha, Pd = ra(wa.transform) ? "transform" : ra(wa["-o-transform"]) ? "-o-transform" : ra(wa["-ms-transform"]) ? "-ms-transform" : ra(wa["-moz-transform"]) ? "-moz-transform" : ra(wa["-webkit-transform"]) ? "-webkit-transform" : "";
  var La = Xc[Xc.length - 1].src.split("/");
  --La.length;
  var Qd = La.join("/");
  0 <= "http: https:".indexOf(La[0]) && La.splice(0, 3);
  La = La.join("/");
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
    var c = arguments, e = c.length - 2 - b, k = this.slice(a, a + b), B;
    if (0 < e) {
      var m = this.length - 1;
      for (B = a + b; m >= B; --m) {
        this[m + e] = this[m];
      }
    } else {
      if (0 > e) {
        m = a + b;
        for (B = this.length; m < B; ++m) {
          this[m + e] = this[m];
        }
        this.length += e;
      }
    }
    m = 2;
    for (B = c.length; m < B; ++m) {
      this[m - 2 + a] = c[m];
    }
    return k;
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
  var $c = function(a) {
    $a.length || (Ea = setInterval(Za, rc));
    $a.push({f:a, g:++Zc});
    return Zc;
  };
  var $a = [], rc = 999, Zc = 0, Ea;
  if (5 > z || Ya) {
    x._wdb_onlooptimer = Za, Za = "_wdb_onlooptimer()";
  }
  Xa.push(function() {
    6.1 > jb && ad(md);
    rb(qc);
  });
  var J = function(a, b, c) {
    ma.length || (ya = ub(Ma, Na));
    ma.push({f:a, p:b, g:++bd, t:new xa - 0 + (Na < c ? c : Na)});
    return bd;
  };
  var cd = function(a) {
    for (var b = ma.length, c; c = ma[--b];) {
      if (c.g === a) {
        ma.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var ma = [], Na = 64, bd = 0, ya;
  if (5 > z || Ya) {
    x._wdb_ontimer = Ma, Ma = "_wdb_ontimer()";
  }
  Xa.push(function() {
    6.1 > jb && ad(nd);
    rb(sc);
  });
  var Da = x.matchMedia, Ga;
  Oa.push(function() {
    Ga = ea(L, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"});
  });
  var sb = function(a) {
    Oa.push(a);
  };
  var rb = function(a) {
    dd.push(a);
  };
  var dd = [], xb = x.onload, ed = x.onunload;
  onload = wb;
  onunload = function(a) {
    var b;
    ed && (b = ed(a));
    ca(dd, a);
    onunload = Fa;
    return b;
  };
  var ic = function(a) {
    vc.push(a);
  };
  var vc = [];
  sb(function() {
    tc();
    $c(tc);
  });
  var Qa = [], Pa, zb, Ab;
  10 <= z || Wc ? (Da("(-ms-high-contrast:black-on-white)").addListener(function(a) {
    Pa = zb = a.matches;
    ca(Qa, ab());
  }), Da("(-ms-high-contrast:white-on-black)").addListener(function(a) {
    Pa = Ab = a.matches;
    ca(Qa, ab());
  }), Da("(-ms-high-contrast:active)").addListener(function(a) {
    Pa = a.matches;
    ca(Qa, ab());
  }), Ha = null) : 10 > z || (t.Win32 || t.Win64) && (44 <= fc || gc) ? sb(function() {
    Ga.style.color = "#123456";
    Ga.style.backgroundColor = "#123456";
    60 > fc || gc ? Ha() : Ha() && $c(Ha, 1000);
    Ha = null;
  }) : Ha = null;
  var Rd = [];
  Da && Da("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    ca(Rd, a.matches);
  });
  var jc = [];
  x.onbeforeprint ? (onbeforeprint = function() {
    ca(jc, !0);
  }, onafterprint = function() {
    ca(jc, !1);
  }, rb(function() {
    onbeforeprint = onafterprint = Fa;
  })) : Da && Da("print").addListener(function(a) {
    ca(jc, a.matches);
  });
  var ad = function(a) {
    fd.push(a);
  };
  var fd = [], kc = x.onscroll;
  onscroll = function(a) {
    var b;
    kc && (b = kc(a));
    wb || ca(fd);
    return b;
  };
  rb(function() {
    onscroll = kc = Fa;
  });
  var gd = bb("html")[0];
  var Ra = bb("head")[0];
  var cb;
  Oa.splice(0, 0, function() {
    function a(k) {
      k = k.childNodes;
      for (var B = k.length, m, n, y, I, q; m = k[--B];) {
        if (n = m.nodeType, 8 === n) {
          b && da(m);
        } else {
          if (1 === n) {
            switch(n = m.tagName.toUpperCase(), n) {
              case "STYLE":
                if (Nd ? (y = m.sheet || m.styleSheet) && (I = 10 <= z ? y.cssRules : y.rules || y.cssRules) && !I[0] : (new tb("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(m)) {
                  da(m);
                  break;
                }
              case "LINK":
                wc && !Ra.contains(m) && e.push(m);
                break;
              case "META":
                n = m.getAttribute("name") || m.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === n.indexOf(c[--q])) {
                    da(m);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (xc(m, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (xc(m, "skip-cleanup")) {
                  break;
                }
              case "!":
                da(m);
                break;
              default:
                m.childNodes.length && a(m);
            }
          }
        }
      }
      for (; e[0];) {
        y = e.pop(), Ra.appendChild(y);
      }
    }
    var b = !(8 > ec || 5 > z || Ya), c = ["og:", "twitter:", "fb:"], e = [];
    a(gd);
  });
  var Cb = void 0;
  var Bc = {};
  ha || ic(function(a) {
    a && !ra(ha) && (ha = 1.8 <= fc || gc || 8 <= z || Wc || 530 <= eb || 3.2 <= jb, ha || (a = ea(L, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), ha = 6 <= a.offsetWidth, da(a)));
  });
  var Db;
  9 > z && sb(function(a) {
    a = ea(L, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    hc = 1 < a.offsetHeight;
    a.style.cssText = "";
    da(a);
  });
  var qd = function(a) {
    function b() {
      k || (c.complete ? (k = !0, c.width || J(a, !1)) : e = J(b));
    }
    if (hd) {
      var c = new Image, e, k;
      c.onerror = function() {
        (!z || 11 === z || 11 === t.IEHost) && c.width || k || (k = !0, e && cd(e), e = J(a, !1));
      };
      c.onload = function() {
        k = !0;
        e && cd(e);
        ec && !c.complete ? e = J(a, !1) : (Sa = !0, J(a, !0));
      };
      c.src = hd;
      8 > ec && c.complete ? (Sa = !0, J(a, !0)) : k || (e = J(b));
    } else {
      J(a, !1);
    }
  };
  var hd = Yc ? "//pb-100.github.io/hamura.css/pbLCD/bg.png" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
  var pd = Ac;
  for (t.IEHost && 5.5 > z && sb(function() {
    ea(Ra, "link", {href:Qd + "/" + Od, rel:"stylesheet", type:"text/css"});
  }); Xa.length;) {
    Xa.shift()();
  }
  Xa = null;
  var W = String.fromCharCode, G = Yc ? "//pb-100.github.io/hamura.css/" : "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/", Aa = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", W(960), ")", "(", W(234), W(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", 
  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", W(9824), "\u2190", W(9829), W(9830), W(9827), W(956), "\u03a9", "\u2193", "\u2192", "%", W(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", W(9619)];
  Qa.push(function(a) {
    db("jsHcm");
    db("jsHcmWob");
    db("jsHcmBow");
    if (a) {
      switch((Pd || 9 === z || 5.5 <= z && 9 > z && hc) && sa(L, "jsCanRotate"), a) {
        case 1:
          sa(L, "jsHcm");
          break;
        case 2:
          sa(L, "jsHcmWob");
          break;
        case 3:
          sa(L, "jsHcmBow");
      }
    } else {
      db("jsCanRotate");
    }
  });
  var Ib = [], Hb, Jb, id;
  ic(function(a) {
    function b(w) {
      var p = w.getAttribute("pbtip") || "", u = p.charAt(0), F = "_" === u;
      p = F ? p.charAt(2) : u;
      u = F ? "Btm" : "";
      var Q = w.getAttribute("title") || "";
      sa(w, "pbTipPos" + p.toUpperCase());
      ea(w, "div", {className:"pbTip" + u}, {width:Q.length + k + "em"}, Q);
      ea(w, "div", {className:"pbTail" + u});
      m && F && (w.focus(), w.blur());
    }
    function c(w) {
      if (ha && M) {
        e(w);
      } else {
        var p = w.getAttribute("pbGhos") || "", u = p.substr(1), F = w.className, Q = F.split("pbCsr")[1] || "";
        F = F.split("pbAlp")[1] || "";
        if ("CS" === u) {
          var Z = "_";
        } else {
          Z = u, 3 === Z.length && (Z = Z.substr(0, 2)), Z = Aa[parseInt(Z, 16)] || "~";
        }
        Q = Q.split(" ")[0];
        F = F.split(" ")[0];
        F = 10 - X(F);
        p ? (p = {className:["pbChr" + u + " pbAlp" + F + " pbCsr" + Q]}, cb = 1, y = ea(w, "b", p, 0, Z), e(w), e(y)) : e(w);
      }
    }
    function e(w) {
      Y || B || Ia(w, "pbChrCS") && Ib.push(w);
    }
    if (a && !id) {
      id = !0;
      var k = 6 > z ? 1 : 0;
      a = bb("SAMP");
      var B = 9 > z, m = 5 <= z && 6 > z, n, y, I, q;
      hc && sa(L, "pbLCD-AX");
      if (a.length) {
        var Y = void 0 !== wa.opacity || void 0 !== wa["-moz-opacity"] || void 0 !== wa["-khtml-opacity"], M = !Y && !B && !0, P = !ha || M || void 0;
        for (I = -1; n = a[++I];) {
          if (Ia(n.parentElement || n.parentNode, "pbLCD")) {
            var ta = n.children;
            for (n = ta.length; n;) {
              var O = ta[--n];
              switch(O.tagName.toUpperCase()) {
                case "A":
                  if (P) {
                    for (ha || b(O), q = O.children.length; q;) {
                      c(O.children[--q]);
                    }
                  }
                  Md ? O.setAttribute("href", "javascript:void(0)") : O.onclick = od;
                  break;
                case "B":
                  P && c(O);
              }
            }
          }
        }
        Ib.length ? (setInterval(Cc, 500), ha ? Ja([".pbChrCS:after,.pbChrCS:before", "left:0", ".pbChrCS:after,.pbChrCS:before", "top:-51px"]) : Ja([".pbChrCS", "background-position:0 -51px"])) : Cc = null;
        M && (ha ? Ja([".pbAlp1:after,.pbAlp9[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a10.png)", ".pbAlp2:after,.pbAlp8[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a20.png)", ".pbAlp3:after,.pbAlp7[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a30.png)", ".pbAlp4:after,.pbAlp6[pbGhos]:before", "content:url(" + G + "pbLCD/x3_a40.png)", ".pbAlp5:after", "content:url(" + G + "pbLCD/x3_a50.png)", ".pbAlp6:after", "content:url(" + G + "pbLCD/x3_a60.png)", ".pbAlp7:after", "content:url(" + 
        G + "pbLCD/x3_a70.png)", ".pbAlp8:after", "content:url(" + G + "pbLCD/x3_a80.png)", ".pbAlp9:after", "content:url(" + G + "pbLCD/x3_a90.png)"]) : Ja([".pbAlp1", "background-image:url(" + G + "pbLCD/x3_a10.png)", ".pbAlp2", "background-image:url(" + G + "pbLCD/x3_a20.png)", ".pbAlp3", "background-image:url(" + G + "pbLCD/x3_a30.png)", ".pbAlp4", "background-image:url(" + G + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + G + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        G + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + G + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + G + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + G + "pbLCD/x3_a90.png)"]));
      }
    }
  });
  525.13 > eb && (gd.onclick = function(a) {
    if (Jb) {
      return Jb = !1, a.preventDefault(), !1;
    }
  });
  6 === z && (new tb("d", 'd.execCommand( "BackgroundImageCache",!1,!0)'))(H);
  var Ob = Aa[7], Ec = Aa[30], sd = Aa[113], gb = W(8337) + W(8331), Pb = W(160), wd = W(8194), ud = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), vd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), td = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Ec + Aa[31]).split(""), za = 
  [], Mb = [], hb, Nb;
  ic(function(a) {
    if (a && !Nb) {
      var b = H.all || bb("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Ia(c, "pbList") ? ib(c) : Ia(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && ib(c, !0);
      }
      za.length && fb();
      Nb = !0;
    }
  });
  jd.prettify = ib;
})(PB100, {}, this, new Function, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

