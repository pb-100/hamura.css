PB100 = {};
(function(nd, m, n, u, ia, Lb, z, Mb, ab, od, bb, Oc, ja, pd) {
  function cb(d, a) {
    var b = z(d.split(a)[1]);
    return 0 <= b ? b : 0;
  }
  function g(d, a) {
    return 0 <= d.indexOf(a);
  }
  function c(d, a) {
    var b = "", r = -1, c;
    if (d = d.split(a)[1]) {
      for (; c = d.charCodeAt(++r);) {
        if (48 <= c && 57 >= c || 46 === c) {
          b += d.charAt(r);
        } else {
          break;
        }
      }
      for (r = b.length; r;) {
        if (46 === b.charCodeAt(--r)) {
          b = b.substr(0, r);
        } else {
          break;
        }
      }
    }
    return b;
  }
  function Ob(d, a) {
    var b = 0, r;
    d = d.split(".");
    a = a.split(".");
    for (r = Math.min(d.length, a.length); b < r; ++b) {
      var c = z(d[b]), e = z(a[b]);
      if (c !== e) {
        return c > e ? 1 : -1;
      }
    }
    return d.length === a.length ? 0 : d.length > a.length ? 1 : -1;
  }
  function Pb() {
    for (var d = arguments, a = 1, b = d.length, c = d[0], e; a < b; ++a) {
      0 > Ob(c, e = d[a]) && (c = e);
    }
    return c;
  }
  function za(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Aa(d) {
    return d === d + "" ? z(d) : d;
  }
  function Ba() {
    for (var d, a = 0; a < Ca.length; ++a) {
      d = Ca[a], d.f();
    }
  }
  function Pc() {
    ka && (Qb(), ka = setInterval(Ba, 999));
  }
  function Qb() {
    ka && (ka = clearInterval(ka));
  }
  function na() {
    for (var d, a = 0, b = new ja - 0; a < Q.length;) {
      b < Q[0].t ? ++a : (d = Q.splice(a, 1)[0], d.f(d.p));
    }
    Y = Q.length ? bb(na, 64) : 0;
  }
  function Qc() {
    Y && (Rb(), Y = bb(na, 64));
  }
  function Rb() {
    Y && (Y = Oc(Y));
  }
  function N(d, a) {
    for (var b = 0, c = d.length; b < c; ++b) {
      d[b](a);
    }
  }
  function fb(d) {
    var a;
    gb && (a = gb(d));
    N(oa, d);
    onload = Da;
    oa = fb = gb = onload = null;
    return a;
  }
  function Sb() {
    var d = 9 === Ea.offsetWidth;
    Tb !== d && N(Ub, Tb = d);
  }
  function la() {
    var d = u.defaultView;
    d = d ? d.getComputedStyle(Ea, null) : Ea.currentStyle;
    if (d = (d && d.color || "").split(" ").join("")) {
      return d = "#123456" !== d && "rgb(18,52,86)" !== d, Vb !== d && N(Wb, Vb = d), !0;
    }
  }
  function Fa(d) {
    var a = a || u;
    return Xb ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function K(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function hb(d, a) {
    var b = u.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function L(d, a, b, c, e) {
    function r(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            Ga(d, a[b]);
            break;
          default:
            d.setAttribute(b, a[b]);
        }
      }
    }
    function f(d, a) {
      var b = d.style, c;
      for (c in a) {
        b[c] = a[c];
      }
    }
    if ("style" === a) {
      var g = !0;
      a = hb("div", 'a<style type="text/css">' + e + "</style>").lastChild;
    } else {
      a = hb(a);
    }
    Ha ? (2 === Ha && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Ha = 0;
    b && r(a, b);
    c && f(a, c);
    e && !g && a.appendChild(u.createTextNode(e));
    return a;
  }
  function Yb(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function Z(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function Ga(d, a) {
    var b;
    if (!Z(d, a)) {
      if (b = d.className) {
        a = " " + a;
      }
      d.className = b + a;
    }
  }
  function Zb(d, a) {
    var b = L(pa, "style", {type:"text/css", media:a}, 0, d);
    ib[a] = b.sheet || b.styleSheet;
  }
  function Ia(a, b) {
    for (var d = b || "all", c = ib[d], e, r, f = "", g; a.length;) {
      e = a.shift(), r = a.shift(), g = e + "{" + r + "}", c ? c.addRule ? c.addRule(e, r) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && Zb(f, d);
  }
  function jb(a) {
    if (aa(Ja)) {
      t(a, Ja);
    } else {
      if (8 > w) {
        t(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          a(Ja = !1);
        };
        d.onload = function() {
          a(Ja = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function $b(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      u.fonts.load(d).then(function() {
        u.fonts.check(d, "i");
        db(b) ? t(a, v) : jb(eb);
      }, function() {
        jb(eb);
      });
    }
    function r(a) {
      return u.hidden || u.msHidden || u.mozHidden || u.webkitHidden ? !1 : a < new ja - q;
    }
    function h(d) {
      d && (q = new ja - 0);
      db(b) ? a(v) : r(p) ? Nb ? a(0) : 9 > w ? t(a, 0) : jb(eb) : t(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      kb = ["sans-serif", "serif"];
      J = L(R, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (lb = {}; d = kb[++a];) {
        J.style.fontFamily = d, lb[d] = J.offsetWidth;
      }
    }
    function db(a) {
      var d = 0, b = -1, c, e, r = 0;
      k && k();
      for (R.appendChild(J); c = kb[++b];) {
        if (J.style.fontFamily = '"' + a + '",' + c, J.offsetWidth !== lb[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (J.innerHTML = e, a = J.offsetWidth, J.innerHTML = f[e], r = a === J.offsetWidth ? 1 : 0, J.innerHTML = "mmmmmmmmmmlli", !r) {
            break;
          }
        }
      }
      K(J);
      return v = d + r;
    }
    function eb(d) {
      (Nb = d) ? l(!0) : a(0);
    }
    function l(d) {
      d && (q = new ja - 0);
      for (b in c) {
        if (db(b)) {
          Ka = L(R, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = ib.all, f = ac.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : Zb('@import "' + d + '"', "all");
          ac.all = ++f;
          t(n, !0);
        } else {
          r(100) ? (delete c[b], t(l, !0)) : t(l);
        }
        return;
      }
      a(0);
    }
    function n(d) {
      d && (q = new ja - 0);
      1 < Ka.offsetWidth ? (K(Ka), p = 100, t(h, !0)) : r(p) ? (K(Ka), a(0)) : t(n);
    }
    var p = g || 5000, q, Nb, J, Ka, kb, lb, v;
    (function() {
      var a;
      if (m.MeeGo || 2.2 > m.AOSP || m.WebOS || m.UCWEB || 10 > m.TridentMobile || m.NDS || m.NDSi || m.N3DS) {
        return !1;
      }
      if (6 > w) {
        return !0;
      }
      var d = L(pa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      K(d);
      return a;
    })() ? !u.fonts || 603 > m.WebKit ? h(!0) : d() : t(a, 0);
  }
  function bc() {
    mb = !mb;
    for (var a = -1, b; b = La[++a];) {
      b.style.visibility = mb ? "" : "hidden";
    }
  }
  function Rc(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), nb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Ma() {
    Ma = null;
    Sc(ob, "PB-100", {"PB-100_canTTF":A + "pbFont/ttf.css", "PB-100_canWOFF":A + "pbFont/woff.css", "PB-100_canEOT":A + "pbFont/eot.css", "PB-100_canSVG":A + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Na}, 5000);
  }
  function ob(a) {
    (Oa = a) ? cc() : Tc();
  }
  function Uc(a) {
    a && (Ga(R, "pbList-noWebFont"), Ia([".pbList font", "background-image:url(" + A + "pbFont/" + (9 > w ? "x3mask_ie.png" : "x3mask.png") + ")"]), Ia([".pbList font", "background-image:url(" + A + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    cc();
  }
  function cc() {
    for (ob = $b = null; ba.length;) {
      Pa(ba.shift(), pb.shift());
    }
  }
  function Pa(a, b) {
    function d(a) {
      a = a.childNodes;
      for (var b = -1, e; e = a[++b];) {
        switch(e.nodeType) {
          case 1:
            d(e);
            break;
          case 3:
            e.data && e.data.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("") && c.push(e);
        }
      }
    }
    var c = [];
    if (ob) {
      -1 === ba.indexOf(a) && (ba.push(a), pb.push(b), qb && Ma && Ma());
    } else {
      var e = ba.indexOf(a);
      0 <= e && ba.splice(e, 1) && pb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== Oa && (e = e.split(Na).join(dc)), b ? a.data = e : Vc(e.split("\r").join("").split("&yen;").join(Wc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(rb).split("&amp;").join("&"), a);
      }
    }
  }
  function Vc(a, b) {
    function d(a, d) {
      for (var b = ""; d;) {
        d & 1 && (b += a), d >>= 1, a += a;
      }
      return b;
    }
    function c(a, b, c) {
      for (var e, f = -1, g, r; e = b[++f];) {
        for (; 0 <= (g = a.indexOf(e));) {
          r = e.length, a = a.substr(0, g) + d(c, r) + a.substr(g + r);
        }
      }
      return a;
    }
    function e(a) {
      var d = z(a), b = "" + d;
      return 0 < d && d === d | 0 && (d = a.indexOf(b) + b.length, d <= a.length) ? d : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), g = [], r = "", h = -1, k, l;
    if (function(a) {
      var d = a.indexOf("P");
      if (-1 === d) {
        return !1;
      }
      d = z(a.charAt(d + 1));
      return 0 <= d && 9 >= d;
    }(a)) {
      r = d("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (r = d("|", h), --h); l = a.charAt(++h);) {
        l === rb || k ? (r += "~", l === rb && (k = !k)) : r += l;
      }
      r = c(r, Xc, "^");
      r = c(r, Yc, "{");
      r = c(r, Zc, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var p = l === sb, n = " " === l;
      l = p ? " " : l;
      var q = r.charAt(h), u = v, v = "|" === q;
      q = f["+|~{}^".indexOf(q) + 1];
      if ("\n" !== l) {
        if (Oa) {
          8 > w && n && (l = h === k - 1 ? sb : $c), 2 === Oa && a.substr(h, 2) === Na && (l = Na, ++h), n = n && "str" === q ? ' class="pbList-strsp"' : p ? "" : !n && q ? ' class="pbList-' + q + '"' : "";
        } else {
          var t = ca.indexOf(l);
          t = -1 === t ? "" : ca.indexOf(l).toString(16).toUpperCase();
          t = (t = 1 === t.length ? "0" + t : t) ? "pbChr" + t : "";
          n = n && "str" === q ? ' class="pbList-strsp"' : n || !t ? "" : q ? ' class="pbList-' + q + (t ? " " + t : "") + '"' : ' class="' + t + '"';
        }
        u && p && (m.WebKit || m.SafariMobile || m.iOSWebView) && (l = sb);
        g.push("<font" + n + ">" + l + "</font>");
      } else {
        g.push(l);
      }
    }
    g = g.join("");
    if (1 === b.nodeType) {
      b.innerHTML = g;
    } else {
      for (f = hb("font", g); g = f.firstChild;) {
        (b.parentElement || b.parentNode).insertBefore(g, b);
      }
      K(b);
    }
  }
  var l, p, a = ia.userAgent, v = ia.appVersion, tb = z(v) | 0, q = ia.platform, Qa = u.documentElement, ub = u.documentMode, vb = Lb.width, wb = Lb.height, ec = n.HTMLAudioElement, fc = n.performance, gc = n.Int8Array, ad = void 0 !== n.ontouchstart, S = c(v, "Version/") || c(a, "Version/"), da = Qa && void 0 !== Qa.style.MozAppearance, hc = n.operamini, Ra = g(a, "UCWEB"), bd = Ra && c(a, " U2/"), cd = Ra && c(a, "; wds "), xb = c(a.split("_").join("."), "; iPh OS "), dd = c(a, "; Adr "), ic = 
  g(v, "YJApp-ANDROID"), M = g(q, "Android") || da && g(v, "Android") || ic, B = c(q, "Android ") || c(v, "Android ") || c(a, "Android ") || dd, yb = g(q, "Linux"), ea = !hc && n.opera, jc = ea && (ea.version && "function" === typeof ea.version ? ea.version() : Pb(c(a, "Opera "), S, "" + tb)), kc = n.opr, qa = !ea && (u.all || ub), E = qa && (ub ? ub : n.g ? u.getElementsByTagName ? 7 : 4 : u.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 5 : 4), Sa = !qa && Qa.msContentZoomFactor, fa = !Sa && 
  n.chrome, zb = da && c(a, "Goanna/"), O = !zb && da && c(a, "rv:"), lc = c(a, "Firefox/"), mc = c(a, "Opera/"), y = cb(a, "AppleWebKit/"), U = c(a, "Chrome/"), Ab = c(a, "OPR/"), ed = c(v, "KHTML/"), nc = c(a.toLowerCase(), "iris"), Bb = c(a, "FxiOS/"), ha = cb(a, "SamsungBrowser/"), ra;
  if (ra = !ha) {
    a: {
      for (var oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ta, Cb = oc.length; Ta = oc[--Cb];) {
        if (g(a, Ta)) {
          ra = 2 > z(S) ? S : 0.9;
          break a;
        }
      }
      var pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Cb = pc.length; Ta = pc[--Cb];) {
        if (g(a, Ta)) {
          ra = S;
          break a;
        }
      }
      ra = void 0;
    }
  }
  var qc = ra, rc = fa && 534.3 >= y, sc = ad && (y || da) && (0 === q.indexOf("Linux armv") || 0 === q.indexOf("Linux aarch") || "Linux i686" === q) && g(a, "Linux x86_64") || !B && ic, tc = n.puffinDevice, Ua = tc && tc.clientInfo, sa = Ua && "iOS" === Ua.os && Ua.osVersion, Va = sa && Ua.model, Db = !E && u.registerElement, fd = !E && u.execCommand, uc = yb && Db && "11.0.696.34" === U, V, F, b, ta, Eb, Fb;
  if ("Nitro" === q) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === q) {
      k = "NDSi";
      var h = mc;
    } else {
      if ("New Nintendo 3DS" === q || g(a, "iPhone OS 6_0") && 320 === vb && 240 === wb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === q) {
          k = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var gd = h;
        } else {
          if ("Nintendo Swicth" === q) {
            k = "Swicth", h = c(v, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === q) {
              k = "WiiU", h = c(v, "NintendoBrowser/"), y = c(v, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === q) {
                k = "Wii";
                h = c(a, "Wii; U; ; ");
                var e = k;
                var f = h;
              } else {
                if (b = c(a, "PlayStation Vita ")) {
                  k = "PSVita", h = b, e = k, f = b;
                } else {
                  if (b = c(a, "(PlayStation Portable); ")) {
                    k = "PSP";
                    h = b;
                    var vc = 3.3;
                    e = k;
                    f = b;
                  } else {
                    if (b = c(a, "PLAYSTATION 3; ") || c(a, "PLAYSTATION 3 ")) {
                      k = "PS3", h = b, e = k, f = b, 0 > Ob("4.10", b) && (l = "Sony", p = b);
                    } else {
                      if (g(a, "Xbox One")) {
                        k = "XboxOne", h = 1;
                      } else {
                        if (g(a, "Xbox")) {
                          k = "Xbox360", h = 1;
                        } else {
                          if (2 === tb && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            vc = 3.4;
                            e = k;
                            f = 2;
                            var Wa = !0;
                          } else {
                            if (0 === q.indexOf("iP") || xb || sa) {
                              if (sa) {
                                switch(h = sa, Va.substr(0, 4)) {
                                  case "iPho":
                                    var G = "iPhone";
                                    var W = z(Va.substr(6));
                                    var H = !0;
                                    break;
                                  case "iPad":
                                    G = "iPad";
                                    W = z(Va.substr(4));
                                    var I = !0;
                                    break;
                                  case "iPod":
                                    G = "iPod";
                                    W = z(Va.substr(4));
                                    var wc = !0;
                                }
                              } else {
                                xb ? h = xb : h = c(v.split("_").join("."), "OS ");
                                h || (F = !0, h = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : Mb.isNaN ? 9.2 : n.SharedWorker ? fc && fc.now ? 8.0 : 8.4 : fd ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : gc ? 4.3 : ec ? 4.1 : 3.2);
                                var Gb = 1 === n.devicePixelRatio;
                                var x = vb === 1.5 * wb || 1.5 * vb === wb;
                                0 === q.indexOf("iPhone") ? (G = "iPhone", W = x ? Gb ? {max:3} : {min:4, max:5} : {max:6}, H = !0) : 0 === q.indexOf("iPad") ? (G = "iPad", W = Gb ? {max:2} : {min:3}, I = !0) : 0 === q.indexOf("iPod") && (G = "iPod", W = x ? Gb ? {max:3} : 4 : {min:5}, wc = !0);
                              }
                              sa || !ia.standalone && void 0 === u.fullscreenEnabled && void 0 === u.webkitFullscreenEnabled ? (Fb = !0, l = "iOSWebView") : (l = "SafariMobile", e = "Safari", f = h);
                              k = "iOS";
                              p = h;
                            } else {
                              if (g(a, "Kobo")) {
                                k = "Kobo", l = "AOSP", p = 2.2, e = l, f = p, M = !0;
                              } else {
                                if (g(a, "EBRD")) {
                                  k = "SonyReader", l = "AOSP", p = 2.2, e = l, f = p;
                                } else {
                                  if (b = c(a, "CrOS x86_64 ") || c(a, "CrOS aarch64 ") || c(a, "CrOS i686 ") || c(a, "CrOS armv7l ")) {
                                    k = "ChromeOS", h = b;
                                  } else {
                                    if (void 0 !== n.onmoztimechange) {
                                      k = "FirefoxOS", h = 18.1 > O ? "1.0.1" : 19 > O ? 1.1 : 27 > O ? 1.2 : 29 > O ? 1.3 : 31 > O ? 1.4 : 33 > O ? 2.0 : 35 > O ? 2.1 : 38 > O ? 2.2 : 45 > O ? 2.5 : 2.6, g(a, "Mobile") ? H = !0 : g(a, "Tablet") && (I = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (H = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ha, l = e, p = f, H = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(v, "Windows Phone OS ") || cd) {
                                            var Xa = !0;
                                            h = b;
                                            H = !0;
                                          } else {
                                            if (Sa && "ARM" === q) {
                                              Xa = !0, h = 10, F = H = !0;
                                            } else {
                                              if (qa && g(v, "ZuneWP")) {
                                                Xa = !0, h = 11 === E ? 8.1 : 10 === E ? 8 : 9 === E ? 7.5 : 7 === E ? 7 : "?", F = H = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", H = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", H = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var T = !0;
                                                      h = 6.3;
                                                      var C = I = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        T = !0, h = 6, C = I = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          T = !0, h = 5, C = I = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            T = !0, h = 5, C = I = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              T = !0, h = 5 <= z(B) ? 5 : 4, C = I = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                T = !0, h = 3, C = I = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  T = !0, h = 2, C = I = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    T = !0, h = 1, C = I = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, l = "AOSP", p = 2.2, e = l, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        T = !0, h = B, C = !0;
                                                                      } else {
                                                                        if (g(a, "MeeGo")) {
                                                                          k = "MeeGo";
                                                                        } else {
                                                                          if (g(a, "Maemo")) {
                                                                            k = "Maemo";
                                                                          } else {
                                                                            if (0 === a.indexOf("Windows Mobile;") || nc) {
                                                                              k = "WindowsMobile", Wa = !0;
                                                                            } else {
                                                                              if ("WinCE" === q) {
                                                                                k = q, Wa = !0;
                                                                              } else {
                                                                                if ("Win16" === q || "Win32" === q || "Win64" === q) {
                                                                                  k = q, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === q.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === q ? "MacPPC" : q;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var xc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = S, H = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : M && da ? (g(a, "Android 4.4;") ? x = {min:2.3} : 4 <= z(B) ? x = B : x = {min:2.2}, h = x, sc && (F = !0)) : M && ea ? (B ? x = B : (x = {min:1.6}, F = !0), h = x, g(a, "Tablet") ? I = !0 : 
                                                                                    H = !0) : B ? (h = B, M = !0) : yb && sc ? (V = !0, ha ? x = {min:4.4} : fa && !rc || kc || Ab ? x = {min:4} : (x = B = void 0 !== Qa.style.touchAction ? {min:5} : Db ? 4.4 : gc ? ia.connection ? n.searchBoxJavaBridge_ || fa ? Mb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? ec ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, qc && (l = "Samsung", p = qc)), h = x, M = !0) : uc ? (h = {min:5}, V = M = !0) : yb && (g(a, 
                                                                                    "Ubuntu") ? k = "Ubuntu" : (b = c(a, "Mint/")) ? (k = "Mint", h = b) : (b = c(a, "Fedora/")) ? (k = "Fedora", h = b) : k = g(a, "Gentoo") ? "Gentoo" : "Linux");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  T && (k = "FireOS");
  M && (k = k || "Android");
  Xa && (k = "WindowsPhone");
  l || (C = C || M, ea ? (l = C || Wa || H || I ? "PrestoMobile" : "Presto", p = jc) : qa ? ((x = cb(v, "Trident/") + 4) && x !== E && (e = "IEHost", f = x), 10 <= E && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = E), Wa || H || I || wc ? l = "TridentMobile" : xc && 5 <= E ? (l = "Tasman", e = "MacIE", f = E) : (l = "Trident", xc && (e = "MacIE", f = E)), p = E) : Sa ? (l = Xa ? "EdgeMobile" : "EdgeHTML", p = c(v, "Edge/")) : zb ? (l = "Goanna", p = 
  zb) : da ? (l = C ? "Fennec" : "Gecko", p = O || lc) : ha ? (l = "Samsung", p = ha, V && (F = !0)) : (b = vc || c(a, "NetFront/")) ? (l = "NetFront", p = b) : (b = c(a, "iCab")) ? (l = "iCab", p = b) : (b = Pb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || hc && S) ? (l = "OperaMini", p = b, k || (g(a, "iPhone") ? G = "iPhone" : g(a, "iPad") ? G = "iPad" : g(a, "iPod") && (G = "iPod"), G && (k = "iOS"))) : Ra ? (l = "UCWEB", p = bd) : ed ? (l = "KHTML", p = tb) : M && rc ? (l = "AOSP", p = B, ta = 
  !0, V && (F = !0)) : fa || kc || Ab ? (l = C ? "ChromiumMobile" : "Chromium", p = U, V && (F = !0)) : M && Db ? (l = "ChromeWebView", p = 5 > z(B) ? B : U, ta = !0, n.requestFileSystem || n.webkitRequestFileSystem || (Eb = !0), V && (F = !0)) : M && (S || V) ? (l = "AOSP", p = B, ta = !0, V && (F = !0)) : U ? (l = C ? "ChromiumMobile" : "Chromium", p = U) : y && (l = "WebKit", p = y));
  if (!e) {
    if (b = Sa && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(v, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(v, "OPT/")) {
          e = "OperaTouch", f = b, F = F || !g(v, "Mobile/");
        } else {
          if (b = c(a.toLowerCase(), "ybrowser/")) {
            e = "Yahoo", f = b;
          } else {
            if (!Ra && (b = c(a, "UCBrowser/"))) {
              e = "UC", f = b;
            } else {
              if (b = c(a, "SilK/")) {
                e = "Silk", f = b;
              } else {
                if (b = c(a, "Vivaldi/")) {
                  e = "Vivaldi", f = b;
                } else {
                  if (b = c(a, "QQBrowser/")) {
                    e = "QQ", f = b;
                  } else {
                    if (b = c(a, "YaBrowser/")) {
                      e = "Yandex", f = b;
                    } else {
                      if (b = c(a, "coc_coc_browser/")) {
                        e = "coccoc", f = b;
                      } else {
                        if (b = c(a, "Camino/")) {
                          e = "Camino", f = b;
                        } else {
                          if (g(a, "SE 2.X MetaSr 1.0")) {
                            e = "Sogou";
                          } else {
                            if (b = c(a, "Focus/") || 9 > z(Bb) && Fb && 11 <= z(h) && Bb) {
                              e = "Focus", f = b;
                            } else {
                              if (b = c(a, "Klar/")) {
                                e = "Klar", f = b;
                              } else {
                                if (b = c(a, "AOLBUILD/") || c(a, "AOL/") || c(a, "AOL ")) {
                                  e = "AOL", f = b;
                                } else {
                                  if (b = c(a, "IceDragon/")) {
                                    e = "IceDragon", f = b;
                                  } else {
                                    if (b = c(a, "Iceweasel/")) {
                                      e = "Iceweasel", f = b;
                                    } else {
                                      if (b = c(a, "TenFourFox/")) {
                                        e = "ITenFourFox", f = b;
                                      } else {
                                        if (b = c(a, "Waterfox/")) {
                                          e = "Waterfox", f = b;
                                        } else {
                                          if (b = c(a, "GNUzilla/")) {
                                            e = "GNUzilla", f = b;
                                          } else {
                                            if (b = c(a, "SeaMonkey/")) {
                                              e = "SeaMonkey", f = b;
                                            } else {
                                              if (b = c(a, "PaleMoon/")) {
                                                e = "PaleMoon", f = b;
                                              } else {
                                                if (b = c(a, "Basilisk/")) {
                                                  e = "Basilisk", f = b;
                                                } else {
                                                  if ((b = c(a, "Maxthon/") || c(a, "Maxthon ") || c(a, "MXiOS/")) || g(a, "Maxthon")) {
                                                    e = "Maxthon", f = b || 1;
                                                  } else {
                                                    if (g(a, "Avant Browser;")) {
                                                      e = "Avant";
                                                    } else {
                                                      if (b = c(a, "Lunascape/")) {
                                                        e = "Lunascape", f = b;
                                                      } else {
                                                        if (b = c(a, "Konqueror/")) {
                                                          e = "Konqueror", f = b;
                                                        } else {
                                                          if (b = c(a, "Midori/")) {
                                                            e = "Midori", f = b;
                                                          } else {
                                                            if (b = c(a, "OmniWeb/")) {
                                                              e = "OmniWeb", f = b;
                                                            } else {
                                                              if (b = c(a, "Roccat/")) {
                                                                e = "Roccat", f = b;
                                                              } else {
                                                                if (b = c(a, "Epiphany/")) {
                                                                  e = "Epiphany", f = b;
                                                                } else {
                                                                  if (b = c(a, "WebPositive/")) {
                                                                    e = "WebPositive", f = b;
                                                                  } else {
                                                                    if ((b = c(a, "Iron/")) || g(a, " Iron ")) {
                                                                      e = "Iron", f = b || fa && U;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || fa && U;
                                                                        } else {
                                                                          if (b = c(a, "Rockmelt/")) {
                                                                            e = "Rockmelt", f = b;
                                                                          } else {
                                                                            if ((b = c(a, "Sleipnir/")) || n.FNRBrowser) {
                                                                              e = "Sleipnir", b && (f = b);
                                                                            } else {
                                                                              if (b = c(a, "Puffin/")) {
                                                                                e = "Puffin", f = b;
                                                                              } else {
                                                                                if (b = c(a, "Dooble/")) {
                                                                                  e = "Dooble", f = b;
                                                                                } else {
                                                                                  if (b = c(a, "Flock/")) {
                                                                                    e = "Flock", f = b;
                                                                                  } else {
                                                                                    if (b = c(a, "Galeon/")) {
                                                                                      e = "Galeon", f = b;
                                                                                    } else {
                                                                                      if (b = c(a, "Falkon/")) {
                                                                                        e = "Falkon", f = b;
                                                                                      } else {
                                                                                        if (b = c(a, "Iceape/")) {
                                                                                          e = "Iceape", f = b;
                                                                                        } else {
                                                                                          if (b = c(a, "K-Meleon/")) {
                                                                                            e = "KMeleon", f = b;
                                                                                          } else {
                                                                                            if (b = gd || c(v, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (nc) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(v, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(v, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = Bb || da && (lc || p)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = jc || Ab || mc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (qa) {
                                                                                                                e = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (ha) {
                                                                                                                  e = l, f = ha;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (fa || uc && ta) && U) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (ta && !Eb) {
                                                                                                                      e = l, f = p;
                                                                                                                    } else {
                                                                                                                      if (Fb || Eb) {
                                                                                                                        e = "unknown";
                                                                                                                      } else {
                                                                                                                        if (g(a, "Safari") || S) {
                                                                                                                          e = "Safari", f = S || (73 > y ? 0.8 : 85 > y ? 0.9 : 100 > y ? 1 : 125 > y ? 1.1 : 312 > y ? 1.2 : 412 > y ? 1.3 : 419.3 >= y ? 2 : 525.13 >= y ? 3 : 525.25 >= y ? 3.1 : 3.2);
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  k && (m.PLATFORM = k, h ? (m.PLATFORM_VERSION = za(h), m[k] = Aa(h)) : m[k] = !0);
  l && (m.ENGINE = l, p ? (m.ENGINE_VERSION = za(p), m[l] = Aa(p)) : m[l] = !0, e || (e = l, f = p));
  e && (m.BRAND = e, f ? (m.BRAND_VERSION = za(f), m[e] = Aa(f)) : m[e] = !0);
  G && (m.DEVICE = G, W ? (m.DEVICE_VERSION = za(W), m[G] = Aa(W)) : m[G] = !0);
  F && (m.PC_MODE = !0);
  var Da = new ab, va = [], Xb = !!u.getElementsByTagName, R = u.body, X = R.style, w = m.Trident || m.TridentMobile, wa = m.Tasman, hd = m.EdgeHTML || m.EdgeMobile, Ya = m.Presto || m.PrestoMobile, yc = m.Gecko, zc = m.Goanna, Ac = m.SafariMobile || m.iOSWebView, id = m.OperaMini && m.UCWEB;
  w || wa || (new ab('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var jd = 5.5 > w, Bc = u.scripts, kd = (wa ? "ie5mac" : 5.5 > w ? "ie5win" : 6 > w ? "ie55" : 10 > w ? "ie" + (w | 0) : "modern") + ".css";
  var ma = Bc[Bc.length - 1].src.split("/");
  --ma.length;
  var Cc = ma.join("/");
  0 <= "http: https:".indexOf(ma[0]) && ma.splice(0, 3);
  ma = ma.join("/");
  var aa = function(a) {
    return void 0 !== a;
  };
  var P = Array.prototype;
  P.pop || (P.pop = function() {
    var a = this[this.length - 1];
    --this.length;
    return a;
  });
  P.push || (P.push = function() {
    for (var a = arguments, b = 0, c = a.length, e = this.length; b < c; ++b) {
      this[e + b] = a[b];
    }
    return this.length;
  });
  P.shift || (P.shift = function() {
    for (var a = this[0], b = 1, c = this.length; b < c; ++b) {
      this[b - 1] = this[b];
    }
    --this.length;
    return a;
  });
  P.splice || (P.splice = function(a, b) {
    var d = arguments, c = d.length - 2 - b, e = this.slice(a, a + b), f;
    if (0 < c) {
      var g = this.length - 1;
      for (f = a + b; g >= f; --g) {
        this[g + c] = this[g];
      }
    } else {
      if (0 > c) {
        g = a + b;
        for (f = this.length; g < f; ++g) {
          this[g + c] = this[g];
        }
        this.length += c;
      }
    }
    g = 2;
    for (f = d.length; g < f; ++g) {
      this[g - 2 + a] = d[g];
    }
    return e;
  });
  P.indexOf || (P.indexOf = function(a, b) {
    var d = this.length >>> 0;
    if (0 === d) {
      return -1;
    }
    if (b) {
      var c = b || 0;
      c = -Infinity === c ? 0 : (0 > c ? -c : c) | 0;
      if (d <= c) {
        return -1;
      }
    }
    for (c = 0 <= c ? c : 0 < d + c ? d + c : 0; c < d; ++c) {
      if (this[c] === a) {
        return c;
      }
    }
    return -1;
  });
  var Ca = [], ld = 0, ka;
  if (5 > w || wa) {
    n._wdb_onlooptimer = Ba, Ba = "_wdb_onlooptimer()";
  }
  var Dc = function(a) {
    Ca.length || (ka = setInterval(Ba, 999));
    Ca.push({f:a, uid:++ld});
  };
  va.push(function() {
    Ac && Ec(Pc);
    Za(Qb);
  });
  var Q = [], Fc = 0, Y;
  if (5 > w || wa) {
    n._wdb_ontimer = na, na = "_wdb_ontimer()";
  }
  var t = function(a, b) {
    Q.length || (Y = bb(na, 64));
    Q.push({f:a, p:b, uid:++Fc, t:new ja - 0 + 64});
    return Fc;
  };
  var Gc = function(a) {
    for (var b = Q.length, d; d = Q[--b];) {
      if (d.uid === a) {
        Q.splice(b, 1);
        break;
      }
    }
  };
  va.push(function() {
    Ac && Ec(Qc);
    Za(Rb);
  });
  var oa = [], xa = n.matchMedia, Ea;
  oa.push(function() {
    Ea = L(R, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden", color:"#123456"});
  });
  var Hc = [], gb = n.onload, Ic = n.onunload;
  onload = fb;
  onunload = function(a) {
    var b;
    Ic && (b = Ic(a));
    N(Hc, a);
    onunload = Da;
    return b;
  };
  var $a = function(a) {
    oa.push(a);
  };
  var Za = function(a) {
    Hc.push(a);
  };
  var Ub = [], Tb;
  $a(function() {
    Sb();
    Dc(Sb);
  });
  var Hb = function(a) {
    Ub.push(a);
  };
  var Wb = [], Vb = !1;
  10 <= w || hd ? (xa("(-ms-high-contrast:active)").addListener(function(a) {
    N(Wb, a.matches);
  }), la = null) : 10 > w || (m.Win32 || m.Win64) && (44 <= yc || zc) ? $a(function() {
    60 > yc || zc ? la() : la() && Dc(la);
    la = null;
  }) : la = null;
  var md = [];
  xa && xa("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    N(md, a.matches);
  });
  var Ib = [];
  n.onbeforeprint ? (onbeforeprint = function() {
    N(Ib, !0);
  }, onafterprint = function() {
    N(Ib, !1);
  }, Za(function() {
    onbeforeprint = onafterprint = Da;
  })) : xa && xa("print").addListener(function(a) {
    N(Ib, a.matches);
  });
  var Jc = [], Jb = n.onscroll;
  onscroll = function(a) {
    var b;
    Jb && (b = Jb(a));
    fb || N(Jc);
    return b;
  };
  Za(function() {
    onscroll = Jb = Da;
  });
  var Ec = function(a) {
    Jc.push(a);
  };
  var Kc = Fa("html")[0];
  var pa = Fa("head")[0];
  var Ha;
  oa.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, r; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && K(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (jd ? (k = f.sheet || f.styleSheet) && (l = 10 <= w ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new ab("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  K(f);
                  break;
                }
              case "LINK":
                Xb && !pa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (r = c.length; r;) {
                  if (0 === h.indexOf(c[--r])) {
                    K(f);
                    break;
                  }
                }
                break;
              case "SCRIPT":
                if (Yb(f, "async")) {
                  break;
                }
              case "NOSCRIPT":
                if (Yb(f, "skip-cleanup")) {
                  break;
                }
              case "!":
                K(f);
                break;
              default:
                f.childNodes.length && a(f);
            }
          }
        }
      }
      for (; e[0];) {
        k = e.pop(), pa.appendChild(k);
      }
    }
    var b = !(8 > Ya || 5 > w || wa), c = ["og:", "twitter:", "fb:"], e = [];
    a(Kc);
  });
  var ib = {}, ac = {}, Lc, Kb;
  aa(X.transform) || aa(X["-o-transform"]) || aa(X["-ms-transform"]) || aa(X["-moz-transform"]) || aa(X["-webkit-transform"]);
  Hb(function(a) {
    a && aa(Kb) && (a = L(R, "span", {"aria-hidden":"true", id:"jsCanUseContent"}), Kb = !!a.offsetWidth, K(a));
  });
  var Ja;
  9 > w && $a(function(a) {
    a = L(R, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Lc = 1 < a.offsetHeight;
    a.style.cssText = "";
    K(a);
  });
  var Tc = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || t(b, !1)) : e = t(a));
    }
    var b = Uc, c = new Image, e, f;
    c.onerror = function() {
      (!w || 11 === w || 11 === m.IEHost) && c.width || f || (f = !0, e && Gc(e), e = t(b, !1));
    };
    c.onload = function() {
      f = !0;
      e && Gc(e);
      Ya && !c.complete ? e = t(b, !1) : t(b, !0);
    };
    c.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > Ya && c.complete ? t(b, !0) : e = t(a);
  };
  var Sc = $b;
  for (m.IEHost && 5.5 > w && $a(function() {
    var a = u.createElement("link");
    pa.appendChild(a);
    a.setAttribute("href", (Cc ? Cc + "/" : "") + kd);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); va.length;) {
    va.shift()();
  }
  va = null;
  var Mc = Mc || {}, D = String.fromCharCode, A = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", ca = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", D(960), ")", "(", D(234), D(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", D(9824), "\u2190", D(9829), D(9830), D(9827), D(956), "\u03a9", "\u2193", "\u2192", "%", D(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", D(9619)], La = [], mb, nb, ya = 8 > Ya && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}}, Nc;
  Hb(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", d = b.charAt(0), c = "_" === d;
      b = c ? b.charAt(2) : d;
      d = c ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      Ga(a, "pbTipPos" + b.toUpperCase());
      L(a, "div", {className:"pbTip" + d}, {width:e.length + f + "em"}, e);
      L(a, "div", {className:"pbTail" + d});
      h && c && (a.focus(), a.blur());
    }
    function d(a) {
      if (p && t) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", d = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", k = f.split("pbAlp")[1] || "";
        if ("CS" === d) {
          var h = "_";
        } else {
          h = d, 3 === h.length && (h = h.substr(0, 2)), h = ca[parseInt(h, 16)] || "~";
        }
        g = g.split(" ")[0];
        k = k.split(" ")[0];
        var m = 10 - z(k);
        ya && k ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, k, a.innerHTML), b && e(a, d, m, h), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + d, "pbAlp" + m, "pbCsr" + g]}, Ha = 1, l = L(a, "b", b, 0, h), c(a), c(l)) : c(a);
      }
    }
    function c(a) {
      q || g || Z(a, "pbChrCS") && La.push(a);
    }
    function e(a, b, d, c) {
      b = ya[b + (v ? "a" : "")] || ya[b];
      b.top += "px";
      a = L(a, "img", {title:c, src:A + "pbLCD/x3_a" + d + "0.png"}, b);
      "CS" === c && La.push(a);
    }
    if (a && !Nc) {
      Nc = !0;
      var f = 6 > w ? 1 : 0;
      a = Fa("SAMP");
      var g = 9 > w, h = 5 <= w && 6 > w, k, l, m, n;
      Lc && Ga(R, "pbLCD-AX");
      if (a.length) {
        var p = Kb, q = void 0 !== X.opacity || void 0 !== X["-moz-opacity"] || void 0 !== X["-khtml-opacity"], t = !q && !g && !ya, u = !p || t || ya;
        for (m = -1; k = a[++m];) {
          if (Z(k.parentElement || k.parentNode, "pbLCD")) {
            var v = Z(k, "PB-120") || Z(k, "FX-795P"), y = k.children;
            for (k = y.length; k;) {
              var x = y[--k];
              switch(x.tagName.toUpperCase()) {
                case "A":
                  if (u) {
                    for (p || b(x), n = x.children.length; n;) {
                      d(x.children[--n]);
                    }
                  }
                  id ? x.setAttribute("href", "javascript:void(0)") : x.onclick = Rc;
                  break;
                case "B":
                  u && d(x);
              }
            }
          }
        }
        La.length ? (setInterval(bc, 500), Ia([".pbChrCS", "background-position:0 -51px"])) : bc = null;
        t && Ia([".pbAlp1" + (p ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2" + (p ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3" + (p ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4" + (p ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        A + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + A + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + A + "pbLCD/x3_a90.png)"]);
      }
    }
  });
  525.13 > m.WebKit && (Kc.onclick = function(a) {
    if (nb) {
      return nb = !1, a.preventDefault(), !1;
    }
  });
  var rb = ca[7], dc = ca[30], Wc = ca[113], Na = D(8337) + D(8331), sb = D(160), $c = D(8194), Yc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), Zc = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Xc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + dc + ca[31]).split(""), ba = 
  [], pb = [], Oa, qb;
  Hb(function(a) {
    if (a && !qb) {
      var b = u.all || Fa("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        Z(c, "pbList") ? Pa(c) : Z(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Pa(c, !0);
      }
      ba.length && Ma();
      qb = !0;
    }
  });
  Mc.prettify = Pa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

