PB100 = {};
(function(od, m, n, t, ia, Lb, z, Mb, ab, pd, bb, Oc, ja, qd) {
  function cb(d, a) {
    var b = z(d.split(a)[1]);
    return 0 <= b ? b : 0;
  }
  function g(d, a) {
    return 0 <= d.indexOf(a);
  }
  function c(d, a) {
    var b = "", q = -1, c;
    if (d = d.split(a)[1]) {
      for (; c = d.charCodeAt(++q);) {
        if (48 <= c && 57 >= c || 46 === c) {
          b += d.charAt(q);
        } else {
          break;
        }
      }
      for (q = b.length; q;) {
        if (46 === b.charCodeAt(--q)) {
          b = b.substr(0, q);
        } else {
          break;
        }
      }
    }
    return b;
  }
  function Ob(d, a) {
    var b = 0, q;
    d = d.split(".");
    a = a.split(".");
    for (q = Math.min(d.length, a.length); b < q; ++b) {
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
  function Aa(d) {
    return d === d + "" ? d : d === d - 0 ? "" + d : d.min && d.max ? d.min + "~" + d.max : d.min ? d.min + "~" : "~" + d.max;
  }
  function Ba(d) {
    return d === d + "" ? z(d) : d;
  }
  function Ca() {
    for (var d, a = 0; a < Da.length; ++a) {
      d = Da[a], d.f();
    }
  }
  function Pc() {
    ka && (Qb(), ka = setInterval(Ca, 999));
  }
  function Qb() {
    ka && (ka = clearInterval(ka));
  }
  function na() {
    for (var d, a = 0, b = new ja - 0; a < Q.length;) {
      b < Q[0].t ? ++a : (d = Q.splice(a, 1)[0], d.f(d.p));
    }
    Z = Q.length ? bb(na, 64) : 0;
  }
  function Qc() {
    Z && (Rb(), Z = bb(na, 64));
  }
  function Rb() {
    Z && (Z = Oc(Z));
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
    onload = Ea;
    oa = fb = gb = onload = null;
    return a;
  }
  function Sb() {
    var d = 9 === Fa.offsetWidth;
    Tb !== d && N(Ub, Tb = d);
  }
  function la() {
    var d = t.defaultView;
    d = d ? d.getComputedStyle(Fa, null) : Fa.currentStyle;
    if (d = (d && d.color || "").split(" ").join("")) {
      return d = "#123456" !== d && "rgb(18,52,86)" !== d, Vb !== d && N(Wb, Vb = d), !0;
    }
  }
  function Ga(d) {
    var a = a || t;
    return Xb ? a.getElementsByTagName(d) : a.all.i(d.toUpperCase());
  }
  function K(d) {
    (d.parentElement || d.parentNode).removeChild(d);
  }
  function hb(d, a) {
    var b = t.createElement(d);
    a && (b.innerHTML = a);
    return b;
  }
  function L(d, a, b, c, e) {
    function q(d, a) {
      for (var b in a) {
        switch(b) {
          case "class":
          case "className":
            Ha(d, a[b]);
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
    Ia ? (2 === Ia && (d = d.nextSibling), d ? (d.parentElement || d.parentNode).insertBefore(a, d) : (d.parentElement || d.parentNode).appendChild(a)) : d.appendChild(a);
    Ia = 0;
    b && q(a, b);
    c && f(a, c);
    e && !g && a.appendChild(t.createTextNode(e));
    return a;
  }
  function Yb(d, a) {
    return d.hasAttribute ? d.hasAttribute(a) : null != d.getAttribute(a);
  }
  function aa(d, a) {
    return -1 !== (" " + d.className + " ").indexOf(" " + a + " ");
  }
  function Ha(d, a) {
    var b;
    if (!aa(d, a)) {
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
  function Ja(a, b) {
    for (var d = b || "all", c = ib[d], e, q, f = "", g; a.length;) {
      e = a.shift(), q = a.shift(), g = e + "{" + q + "}", c ? c.addRule ? c.addRule(e, q) : c.insertRule && c.insertRule(g, c.cssRules.length) : f += g;
    }
    f && Zb(f, d);
  }
  function jb(a) {
    if (ba(Ka)) {
      w(a, Ka);
    } else {
      if (8 > v) {
        w(a, !1);
      } else {
        var d = new Image;
        d.onerror = function() {
          a(Ka = !1);
        };
        d.onload = function() {
          a(Ka = 1 === d.width * d.height);
        };
        d.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    }
  }
  function $b(a, b, c, e, f, g) {
    function d() {
      var d = '1.6em "' + b + '"';
      t.fonts.load(d).then(function() {
        t.fonts.check(d, "i");
        db(b) ? w(a, kb) : jb(eb);
      }, function() {
        jb(eb);
      });
    }
    function q(a) {
      return t.hidden || t.msHidden || t.mozHidden || t.webkitHidden ? !1 : a < new ja - r;
    }
    function h(d) {
      d && (r = new ja - 0);
      db(b) ? a(kb) : q(p) ? Nb ? a(0) : 9 > v ? w(a, 0) : jb(eb) : w(h);
    }
    function k() {
      var a = -1, d;
      k = null;
      lb = ["sans-serif", "serif"];
      x = L(R, "span", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}, "mmmmmmmmmmlli");
      for (u = {}; d = lb[++a];) {
        x.style.fontFamily = d, u[d] = x.offsetWidth;
      }
    }
    function db(a) {
      var d = 0, b = -1, c, e, q = 0;
      k && k();
      for (R.appendChild(x); c = lb[++b];) {
        if (x.style.fontFamily = '"' + a + '",' + c, x.offsetWidth !== u[c]) {
          d = 1;
          break;
        }
      }
      if (d && f) {
        for (e in f) {
          if (x.innerHTML = e, a = x.offsetWidth, x.innerHTML = f[e], q = a === x.offsetWidth ? 1 : 0, x.innerHTML = "mmmmmmmmmmlli", !q) {
            break;
          }
        }
      }
      K(x);
      return kb = d + q;
    }
    function eb(d) {
      (Nb = d) ? l(!0) : a(0);
    }
    function l(d) {
      d && (r = new ja - 0);
      for (b in c) {
        if (db(b)) {
          La = L(R, "div", {"aria-hidden":"true", className:e, id:e});
          d = c[b];
          var b = ib.all, f = ac.all || 0;
          b ? b.addImport ? b.addImport(d, f) : b.insertRule && b.insertRule('@import "' + d + '"', f) : Zb('@import "' + d + '"', "all");
          ac.all = ++f;
          w(n, !0);
        } else {
          q(100) ? (delete c[b], w(l, !0)) : w(l);
        }
        return;
      }
      a(0);
    }
    function n(d) {
      d && (r = new ja - 0);
      1 < La.offsetWidth ? (K(La), p = 100, w(h, !0)) : q(p) ? (K(La), a(0)) : w(n);
    }
    var p = g || 5000, r, Nb, x, La, lb, u, kb;
    (function() {
      var a;
      if (m.MeeGo || 2.2 > m.AOSP || m.WebOS || m.UCWEB || 10 > m.TridentMobile || m.NDS || m.NDSi || m.N3DS) {
        return !1;
      }
      if (6 > v) {
        return !0;
      }
      var d = L(pa, "style", 0, 0, '@font-face{font-family:"font";src:url("https://")}'), b = (b = d.sheet || d.styleSheet) ? (a = b.cssRules) && (a = a[0]) ? a.cssText : b.cssText || "" : "";
      a = 0 < b.indexOf("src") && 0 === b.indexOf("@font-face");
      K(d);
      return a;
    })() ? !t.fonts || 603 > Rc ? h(!0) : d() : w(a, 0);
  }
  function bc() {
    mb = !mb;
    for (var a = -1, b; b = Ma[++a];) {
      b.style.visibility = mb ? "" : "hidden";
    }
  }
  function Sc(a) {
    var d = a || event;
    this.focus();
    if (a) {
      return a.preventDefault(), a.stopPropagation(), nb = !0, !1;
    }
    d.cancelBubble = !0;
    return d.returnValue = !1;
  }
  function Na() {
    Na = null;
    Tc(ob, "PB-100", {"PB-100_canTTF":A + "pbFont/ttf.css", "PB-100_canWOFF":A + "pbFont/woff.css", "PB-100_canEOT":A + "pbFont/eot.css", "PB-100_canSVG":A + "pbFont/svg.css"}, "pbFont-testCssReady", {h:Oa}, 5000);
  }
  function ob(a) {
    (pb = a) ? cc() : Uc();
  }
  function Vc(a) {
    a && (Ha(R, "pbList-noWebFont"), Ja([".pbList font", "background-image:url(" + A + "pbFont/" + (9 > v ? "x3mask_ie.png" : "x3mask.png") + ")"]), Ja([".pbList font", "background-image:url(" + A + "pbFont/x3mask_dark.png)"], "only screen and (prefers-color-scheme:dark)"));
    cc();
  }
  function cc() {
    for (ob = $b = null; ca.length;) {
      Pa(ca.shift(), qb.shift());
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
      -1 === ca.indexOf(a) && (ca.push(a), qb.push(b), rb && Na && Na());
    } else {
      var e = ca.indexOf(a);
      0 <= e && ca.splice(e, 1) && qb.splice(e, 1);
      for (d(a); a = c.shift();) {
        e = a.data, 2 !== pb && (e = e.split(Oa).join(dc)), b ? a.data = e : Wc(e.split("\r").join("").split("&yen;").join(Xc).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(sb).split("&amp;").join("&"), a);
      }
    }
  }
  function Wc(a, b) {
    function d(a, d) {
      for (var b = ""; d;) {
        d & 1 && (b += a), d >>= 1, a += a;
      }
      return b;
    }
    function c(a, b, c) {
      for (var e, f = -1, g, q; e = b[++f];) {
        for (; 0 <= (g = a.indexOf(e));) {
          q = e.length, a = a.substr(0, g) + d(c, q) + a.substr(g + q);
        }
      }
      return a;
    }
    function e(a) {
      var d = z(a), b = "" + d;
      return 0 < d && d === d | 0 && (d = a.indexOf(b) + b.length, d <= a.length) ? d : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), g = [], q = "", h = -1, k, l;
    if (function(a) {
      var d = a.indexOf("P");
      if (-1 === d) {
        return !1;
      }
      d = z(a.charAt(d + 1));
      return 0 <= d && 9 >= d;
    }(a)) {
      q = d("+", a.length);
    } else {
      for (0 <= (h = e(a)) && (q = d("|", h), --h); l = a.charAt(++h);) {
        l === sb || k ? (q += "~", l === sb && (k = !k)) : q += l;
      }
      q = c(q, Yc, "^");
      q = c(q, Zc, "{");
      q = c(q, $c, "}");
    }
    h = 0;
    for (k = a.length; h < k; ++h) {
      l = a.charAt(h);
      var p = l === tb, n = " " === l;
      l = p ? " " : l;
      var r = q.charAt(h), t = u, u = "|" === r;
      r = f["+|~{}^".indexOf(r) + 1];
      "\n" !== l ? (8 > v && n && (l = h === k - 1 ? tb : ad), 2 === pb && a.substr(h, 2) === Oa && (l = Oa, ++h), n = n && "str" === r ? ' class="pbList-strsp"' : p ? "" : !n && r ? ' class="pbList-' + r + '"' : "", t && p && (m.WebKit || m.SafariMobile || m.iOSWebView) && (l = tb), g.push("<font" + n + ">" + l + "</font>")) : g.push(l);
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
  var l, p, a = ia.userAgent, u = ia.appVersion, ub = z(u) | 0, r = ia.platform, Qa = t.documentElement, vb = t.documentMode, wb = Lb.width, xb = Lb.height, ec = n.HTMLAudioElement, fc = n.performance, gc = n.Int8Array, bd = void 0 !== n.ontouchstart, S = c(u, "Version/") || c(a, "Version/"), da = Qa && void 0 !== Qa.style.MozAppearance, hc = n.operamini, Ra = g(a, "UCWEB"), cd = Ra && c(a, " U2/"), dd = Ra && c(a, "; wds "), yb = c(a.split("_").join("."), "; iPh OS "), ed = c(a, "; Adr "), ic = 
  g(u, "YJApp-ANDROID"), M = g(r, "Android") || da && g(u, "Android") || ic, C = c(r, "Android ") || c(u, "Android ") || c(a, "Android ") || ed, zb = g(r, "Linux"), ea = !hc && n.opera, jc = ea && (ea.version && "function" === typeof ea.version ? ea.version() : Pb(c(a, "Opera "), S, "" + ub)), kc = n.opr, qa = !ea && (t.all || vb), F = qa && (vb ? vb : n.g ? t.getElementsByTagName ? 7 : 4 : t.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 5 : 4), Sa = !qa && Qa.msContentZoomFactor, fa = !Sa && 
  n.chrome, Ab = da && c(a, "Goanna/"), O = !Ab && da && c(a, "rv:"), lc = c(a, "Firefox/"), mc = c(a, "Opera/"), y = cb(a, "AppleWebKit/"), V = c(a, "Chrome/"), Bb = c(a, "OPR/"), fd = c(u, "KHTML/"), nc = c(a.toLowerCase(), "iris"), Cb = c(a, "FxiOS/"), ha = cb(a, "SamsungBrowser/"), ra;
  if (ra = !ha) {
    a: {
      for (var oc = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
      Ta, Db = oc.length; Ta = oc[--Db];) {
        if (g(a, Ta)) {
          ra = 2 > z(S) ? S : 0.9;
          break a;
        }
      }
      var pc = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
      for (Db = pc.length; Ta = pc[--Db];) {
        if (g(a, Ta)) {
          ra = S;
          break a;
        }
      }
      ra = void 0;
    }
  }
  var qc = ra, rc = fa && 534.3 >= y, sc = bd && (y || da) && (0 === r.indexOf("Linux armv") || 0 === r.indexOf("Linux aarch") || "Linux i686" === r) && g(a, "Linux x86_64") || !C && ic, tc = n.puffinDevice, Ua = tc && tc.clientInfo, sa = Ua && "iOS" === Ua.os && Ua.osVersion, Va = sa && Ua.model, Eb = !F && t.registerElement, gd = !F && t.execCommand, uc = zb && Eb && "11.0.696.34" === V, W, G, b, ta, Fb, Gb;
  if ("Nitro" === r) {
    var k = "NDS";
  } else {
    if ("Nintendo DSi" === r) {
      k = "NDSi";
      var h = mc;
    } else {
      if ("New Nintendo 3DS" === r || g(a, "iPhone OS 6_0") && 320 === wb && 240 === xb) {
        k = "New3DS", h = c(a, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === r) {
          k = "N3DS";
          h = c(a, "Version/");
          y = 535;
          var hd = h;
        } else {
          if ("Nintendo Swicth" === r) {
            k = "Swicth", h = c(u, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === r) {
              k = "WiiU", h = c(u, "NintendoBrowser/"), y = c(u, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === r) {
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
                          if (2 === ub && g(a, "Sony/COM2/")) {
                            k = "Mylo";
                            h = 2;
                            vc = 3.4;
                            e = k;
                            f = 2;
                            var Wa = !0;
                          } else {
                            if (0 === r.indexOf("iP") || yb || sa) {
                              if (sa) {
                                switch(h = sa, Va.substr(0, 4)) {
                                  case "iPho":
                                    var H = "iPhone";
                                    var X = z(Va.substr(6));
                                    var I = !0;
                                    break;
                                  case "iPad":
                                    H = "iPad";
                                    X = z(Va.substr(4));
                                    var J = !0;
                                    break;
                                  case "iPod":
                                    H = "iPod";
                                    X = z(Va.substr(4));
                                    var wc = !0;
                                }
                              } else {
                                yb ? h = yb : h = c(u.split("_").join("."), "OS ");
                                h || (G = !0, h = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : ia.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : Mb.isNaN ? 9.2 : n.SharedWorker ? fc && fc.now ? 8.0 : 8.4 : gd ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : gc ? 4.3 : ec ? 4.1 : 3.2);
                                var Hb = 1 === n.devicePixelRatio;
                                var B = wb === 1.5 * xb || 1.5 * wb === xb;
                                0 === r.indexOf("iPhone") ? (H = "iPhone", X = B ? Hb ? {max:3} : {min:4, max:5} : {max:6}, I = !0) : 0 === r.indexOf("iPad") ? (H = "iPad", X = Hb ? {max:2} : {min:3}, J = !0) : 0 === r.indexOf("iPod") && (H = "iPod", X = B ? Hb ? {max:3} : 4 : {min:5}, wc = !0);
                              }
                              sa || !ia.standalone && void 0 === t.fullscreenEnabled && void 0 === t.webkitFullscreenEnabled ? (Gb = !0, l = "iOSWebView") : (l = "SafariMobile", e = "Safari", f = h);
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
                                      k = "FirefoxOS", h = 18.1 > O ? "1.0.1" : 19 > O ? 1.1 : 27 > O ? 1.2 : 29 > O ? 1.3 : 31 > O ? 1.4 : 33 > O ? 2.0 : 35 > O ? 2.1 : 38 > O ? 2.2 : 45 > O ? 2.5 : 2.6, g(a, "Mobile") ? I = !0 : g(a, "Tablet") && (J = !0);
                                    } else {
                                      if (n.palmGetResource) {
                                        k = "webOS", h = c(a, "webOS/") || c(a, "WEBOS") || c(a, "hpwOS/"), e = k, f = h, g(a, "webOS.TV") || g(a, "/SmartTV") || (I = !0);
                                      } else {
                                        if (b = c(a, "Tizen ")) {
                                          k = "Tizen", h = b, e = "Samsung", f = ha, l = e, p = f, I = !0;
                                        } else {
                                          if (b = c(a, "Windows Phone ") || c(u, "Windows Phone OS ") || dd) {
                                            var Xa = !0;
                                            h = b;
                                            I = !0;
                                          } else {
                                            if (Sa && "ARM" === r) {
                                              Xa = !0, h = 10, G = I = !0;
                                            } else {
                                              if (qa && g(u, "ZuneWP")) {
                                                Xa = !0, h = 11 === F ? 8.1 : 10 === F ? 8 : 9 === F ? 7.5 : 7 === F ? 7 : "?", G = I = !0;
                                              } else {
                                                if (g(a, "FOMA;")) {
                                                  k = "FeaturePhone", I = !0;
                                                } else {
                                                  if (g(a, "SoftBank;")) {
                                                    k = "FeaturePhone", I = !0;
                                                  } else {
                                                    if (g(a, "KFMUWI")) {
                                                      var T = !0;
                                                      h = 6.3;
                                                      var D = J = !0;
                                                    } else {
                                                      if (g(a, "KFKAWI")) {
                                                        T = !0, h = 6, D = J = !0;
                                                      } else {
                                                        if (g(a, "KFSUWI") || g(a, "KFAUWI") || g(a, "KFDOWI")) {
                                                          T = !0, h = 5, D = J = !0;
                                                        } else {
                                                          if (g(a, "KFGIWI")) {
                                                            T = !0, h = 5, D = J = !0;
                                                          } else {
                                                            if (g(a, "KFARWI") || g(a, "KFSAWA") || g(a, "KFSAWI")) {
                                                              T = !0, h = 5 <= z(C) ? 5 : 4, D = J = !0;
                                                            } else {
                                                              if (g(a, "KFSOWI") || g(a, "KFTHWA") || g(a, "KFTHWI") || g(a, "KFAPWA") || g(a, "KFAPWI")) {
                                                                T = !0, h = 3, D = J = !0;
                                                              } else {
                                                                if (g(a, "KFOT") || g(a, "KFTT") || g(a, "KFJWA") || g(a, "KFJWI")) {
                                                                  T = !0, h = 2, D = J = !0;
                                                                } else {
                                                                  if (g(a, "Kindle Fire")) {
                                                                    T = !0, h = 1, D = J = !0;
                                                                  } else {
                                                                    if (b = c(a, "Kindle/")) {
                                                                      k = "Kindle", h = b, l = "AOSP", p = 2.2, e = l, f = p;
                                                                    } else {
                                                                      if (g(a, "AmazonWebAppPlatform") || g(a, "; AFT")) {
                                                                        T = !0, h = C, D = !0;
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
                                                                              if ("WinCE" === r) {
                                                                                k = r, Wa = !0;
                                                                              } else {
                                                                                if ("Win16" === r || "Win32" === r || "Win64" === r) {
                                                                                  k = r, h = c(a, "Windows NT ") || c(a, "Windows ");
                                                                                } else {
                                                                                  if (0 === r.indexOf("Mac")) {
                                                                                    k = "MacPowerPC" === r ? "MacPPC" : r;
                                                                                    if (b = c(a.split("_").join("."), "Mac OS X ")) {
                                                                                      h = b;
                                                                                    }
                                                                                    var xc = !0;
                                                                                  } else {
                                                                                    g(a, "BlackBerry") || g(a, "BB10") ? (k = "BlackBerry", h = S, I = !0) : g(a, "SunOS") || g(a, "Sun Solaris") ? k = "SunOS" : g(a, "FreeBSD") ? k = "FreeBSD" : g(a, "OpenBSD") ? k = "OpenBSD" : g(a, "NetBSD") ? k = "NetBSD" : M && da ? (g(a, "Android 4.4;") ? B = {min:2.3} : 4 <= z(C) ? B = C : B = {min:2.2}, h = B, sc && (G = !0)) : M && ea ? (C ? B = C : (B = {min:1.6}, G = !0), h = B, g(a, "Tablet") ? J = !0 : 
                                                                                    I = !0) : C ? (h = C, M = !0) : zb && sc ? (W = !0, ha ? B = {min:4.4} : fa && !rc || kc || Bb ? B = {min:4} : (B = C = void 0 !== Qa.style.touchAction ? {min:5} : Eb ? 4.4 : gc ? ia.connection ? n.searchBoxJavaBridge_ || fa ? Mb.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= y ? 3 : 533 <= y ? ec ? 2.3 : 2.2 : 530 <= y ? 2.0 : 1.5, qc && (l = "Samsung", p = qc)), h = B, M = !0) : uc ? (h = {min:5}, W = M = !0) : zb && (g(a, 
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
  l || (D = D || M, ea ? (l = D || Wa || I || J ? "PrestoMobile" : "Presto", p = jc) : qa ? ((B = cb(u, "Trident/") + 4) && B !== F && (e = "IEHost", f = B), 10 <= F && 6.2 <= h && 7 > h && 0 === screenY && innerHeight + 1 !== outerHeight && (e = "ModernIE", f = F), Wa || I || J || wc ? l = "TridentMobile" : xc && 5 <= F ? (l = "Tasman", e = "MacIE", f = F) : (l = "Trident", xc && (e = "MacIE", f = F)), p = F) : Sa ? (l = Xa ? "EdgeMobile" : "EdgeHTML", p = c(u, "Edge/")) : Ab ? (l = "Goanna", p = 
  Ab) : da ? (l = D ? "Fennec" : "Gecko", p = O || lc) : ha ? (l = "Samsung", p = ha, W && (G = !0)) : (b = vc || c(a, "NetFront/")) ? (l = "NetFront", p = b) : (b = c(a, "iCab")) ? (l = "iCab", p = b) : (b = Pb(c(a, "Opera Mini/"), c(a, "Opera Mobi/")) || hc && S) ? (l = "OperaMini", p = b, k || (g(a, "iPhone") ? H = "iPhone" : g(a, "iPad") ? H = "iPad" : g(a, "iPod") && (H = "iPod"), H && (k = "iOS"))) : Ra ? (l = "UCWEB", p = cd) : fd ? (l = "KHTML", p = ub) : M && rc ? (l = "AOSP", p = C, ta = 
  !0, W && (G = !0)) : fa || kc || Bb ? (l = D ? "ChromiumMobile" : "Chromium", p = V, W && (G = !0)) : M && Eb ? (l = "ChromeWebView", p = 5 > z(C) ? C : V, ta = !0, n.requestFileSystem || n.webkitRequestFileSystem || (Fb = !0), W && (G = !0)) : M && (S || W) ? (l = "AOSP", p = C, ta = !0, W && (G = !0)) : V ? (l = D ? "ChromiumMobile" : "Chromium", p = V) : y && (l = "WebKit", p = y));
  if (!e) {
    if (b = Sa && c(a, "Edge/") || c(a, "EdgA/") || c(a, "EdgiOS/") || c(a, "Edg/")) {
      e = "Edge", f = b;
    } else {
      if (b = c(u, "Coast/")) {
        e = "Coast", f = b;
      } else {
        if (b = c(u, "OPT/")) {
          e = "OperaTouch", f = b, G = G || !g(u, "Mobile/");
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
                            if (b = c(a, "Focus/") || 9 > z(Cb) && Gb && 11 <= z(h) && Cb) {
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
                                                                      e = "Iron", f = b || fa && V;
                                                                    } else {
                                                                      if (b = c(a, "Comodo Dragon/")) {
                                                                        e = "ComodoDragon", f = b;
                                                                      } else {
                                                                        if ((b = c(a, "Brave/")) || g(a, " Brave ")) {
                                                                          e = "Brave", f = b || fa && V;
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
                                                                                            if (b = hd || c(u, "NX/")) {
                                                                                              e = "NetFrontNX", f = b;
                                                                                            } else {
                                                                                              if (b = c(a, "Netscape6/") || c(a, "Netscape/") || c(a, "Navigator/")) {
                                                                                                e = "NN", f = b;
                                                                                              } else {
                                                                                                if (nc) {
                                                                                                  e = "Iris", f = b;
                                                                                                } else {
                                                                                                  if (g(u, "FBAN/")) {
                                                                                                    e = "Facebook";
                                                                                                  } else {
                                                                                                    if (b = c(u, "Line/")) {
                                                                                                      e = "LINE", f = b;
                                                                                                    } else {
                                                                                                      if (b = c(a, "QtWebEngine/")) {
                                                                                                        e = "QtWebEngine", f = b;
                                                                                                      } else {
                                                                                                        if (b = c(a, "QtWebKit/")) {
                                                                                                          e = "QtWebKit", f = b;
                                                                                                        } else {
                                                                                                          if (b = Cb || da && (lc || p)) {
                                                                                                            e = "Firefox", f = b;
                                                                                                          } else {
                                                                                                            if (b = jc || Bb || mc) {
                                                                                                              e = "Opera", f = b;
                                                                                                            } else {
                                                                                                              if (qa) {
                                                                                                                e = "IE", f = p;
                                                                                                              } else {
                                                                                                                if (ha) {
                                                                                                                  e = l, f = ha;
                                                                                                                } else {
                                                                                                                  if (b = c(a, "CriOS/") || (fa || uc && ta) && V) {
                                                                                                                    e = "Chrome", f = b;
                                                                                                                  } else {
                                                                                                                    if (ta && !Fb) {
                                                                                                                      e = l, f = p;
                                                                                                                    } else {
                                                                                                                      if (Gb || Fb) {
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
  k && (m.PLATFORM = k, h ? (m.PLATFORM_VERSION = Aa(h), m[k] = Ba(h)) : m[k] = !0);
  l && (m.ENGINE = l, p ? (m.ENGINE_VERSION = Aa(p), m[l] = Ba(p)) : m[l] = !0, e || (e = l, f = p));
  e && (m.BRAND = e, f ? (m.BRAND_VERSION = Aa(f), m[e] = Ba(f)) : m[e] = !0);
  H && (m.DEVICE = H, X ? (m.DEVICE_VERSION = Aa(X), m[H] = Ba(X)) : m[H] = !0);
  G && (m.PC_MODE = !0);
  var Ea = new ab, va = [], Xb = !!t.getElementsByTagName, R = t.body, Y = R.style, v = m.Trident || m.TridentMobile, wa = m.Tasman, id = m.EdgeHTML || m.EdgeMobile, Ya = m.Presto || m.PrestoMobile, yc = m.Gecko, zc = m.Goanna, Rc = m.WebKit, Ac = m.SafariMobile || m.iOSWebView, jd = m.OperaMini && m.UCWEB;
  v || wa || (new ab('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  var kd = 5.5 > v, Bc = t.scripts, ld = (wa ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : "modern") + ".css";
  var ma = Bc[Bc.length - 1].src.split("/");
  --ma.length;
  var Cc = ma.join("/");
  0 <= "http: https:".indexOf(ma[0]) && ma.splice(0, 3);
  ma = ma.join("/");
  var ba = function(a) {
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
  var Da = [], md = 0, ka;
  if (5 > v || wa) {
    n._wdb_onlooptimer = Ca, Ca = "_wdb_onlooptimer()";
  }
  var Dc = function(a) {
    Da.length || (ka = setInterval(Ca, 999));
    Da.push({f:a, uid:++md});
  };
  va.push(function() {
    Ac && Ec(Pc);
    Za(Qb);
  });
  var Q = [], Fc = 0, Z;
  if (5 > v || wa) {
    n._wdb_ontimer = na, na = "_wdb_ontimer()";
  }
  var w = function(a, b) {
    Q.length || (Z = bb(na, 64));
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
  var oa = [], xa = n.matchMedia, Fa;
  oa.push(function() {
    Fa = L(R, "div", {"aria-hidden":"true"}, {position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden", color:"#123456"});
  });
  var Hc = [], gb = n.onload, Ic = n.onunload;
  onload = fb;
  onunload = function(a) {
    var b;
    Ic && (b = Ic(a));
    N(Hc, a);
    onunload = Ea;
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
  var Ib = function(a) {
    Ub.push(a);
  };
  var Wb = [], Vb = !1;
  10 <= v || id ? (xa("(-ms-high-contrast:active)").addListener(function(a) {
    N(Wb, a.matches);
  }), la = null) : 10 > v || (m.Win32 || m.Win64) && (44 <= yc || zc) ? $a(function() {
    60 > yc || zc ? la() : la() && Dc(la);
    la = null;
  }) : la = null;
  var nd = [];
  xa && xa("only screen and (prefers-color-scheme: dark)").addListener(function(a) {
    N(nd, a.matches);
  });
  var Jb = [];
  n.onbeforeprint ? (onbeforeprint = function() {
    N(Jb, !0);
  }, onafterprint = function() {
    N(Jb, !1);
  }, Za(function() {
    onbeforeprint = onafterprint = Ea;
  })) : xa && xa("print").addListener(function(a) {
    N(Jb, a.matches);
  });
  var Jc = [], Kb = n.onscroll;
  onscroll = function(a) {
    var b;
    Kb && (b = Kb(a));
    fb || N(Jc);
    return b;
  };
  Za(function() {
    onscroll = Kb = Ea;
  });
  var Ec = function(a) {
    Jc.push(a);
  };
  var Kc = Ga("html")[0];
  var pa = Ga("head")[0];
  var Ia;
  oa.splice(0, 0, function() {
    function a(d) {
      d = d.childNodes;
      for (var g = d.length, f, h, k, l, q; f = d[--g];) {
        if (h = f.nodeType, 8 === h) {
          b && K(f);
        } else {
          if (1 === h) {
            switch(h = f.tagName.toUpperCase(), h) {
              case "STYLE":
                if (kd ? (k = f.sheet || f.styleSheet) && (l = 10 <= v ? k.cssRules : k.rules || k.cssRules) && !l[0] : (new ab("k,a,b,s,r", "try{s=a(k),r=b(s);return !r[0]}catch(e){}"))(f)) {
                  K(f);
                  break;
                }
              case "LINK":
                Xb && !pa.contains(f) && e.push(f);
                break;
              case "META":
                h = f.getAttribute("name") || f.getAttribute("property") || "";
                for (q = c.length; q;) {
                  if (0 === h.indexOf(c[--q])) {
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
    var b = !(8 > Ya || 5 > v || wa), c = ["og:", "twitter:", "fb:"], e = [];
    a(Kc);
  });
  var ib = {}, ac = {}, Lc, U;
  ba(Y.transform) || ba(Y["-o-transform"]) || ba(Y["-ms-transform"]) || ba(Y["-moz-transform"]) || ba(Y["-webkit-transform"]);
  Ib(function(a) {
    a && !ba(U) && (a = L(R, "a", {"aria-hidden":"true", id:"jsCanUseContent"}), U = !!a.offsetWidth, K(a));
  });
  var Ka;
  9 > v && $a(function(a) {
    a = L(R, "div");
    a.style.cssText = "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()";
    Lc = 1 < a.offsetHeight;
    a.style.cssText = "";
    K(a);
  });
  var Uc = function() {
    function a() {
      f || (c.complete ? (f = !0, c.width || w(b, !1)) : e = w(a));
    }
    var b = Vc, c = new Image, e, f;
    c.onerror = function() {
      (!v || 11 === v || 11 === m.IEHost) && c.width || f || (f = !0, e && Gc(e), e = w(b, !1));
    };
    c.onload = function() {
      f = !0;
      e && Gc(e);
      Ya && !c.complete ? e = w(b, !1) : w(b, !0);
    };
    c.src = "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/pbLCD/bg.png";
    8 > Ya && c.complete ? w(b, !0) : e = w(a);
  };
  var Tc = $b;
  for (m.IEHost && 5.5 > v && $a(function() {
    var a = t.createElement("link");
    pa.appendChild(a);
    a.setAttribute("href", (Cc ? Cc + "/" : "") + ld);
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
  }); va.length;) {
    va.shift()();
  }
  va = null;
  var Mc = Mc || {}, E = String.fromCharCode, A = "http:" === location.protocol ? "//my-http-proxy-856.appspot.com/pb-100.github.io/hamura.css/" : "//pb-100.github.io/hamura.css/", ya = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", E(960), ")", "(", E(234), E(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", 
  "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", E(9824), "\u2190", E(9829), E(9830), E(9827), E(956), "\u03a9", "\u2193", "\u2192", "%", E(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", E(9619)], Ma = [], mb, nb, za = 8 > Ya && {"00":{left:0, top:0}, "01":{left:0, top:-30}, 
  "02":{left:0, top:-60}, "03":{left:0, top:-90}, "04":{left:0, top:-120}, "05":{left:0, top:-150}, "06":{left:0, top:-180}, "07":{left:0, top:-210}, "08":{left:0, top:-240}, "09":{left:0, top:-270}, "0A":{left:0, top:-300}, "0B":{left:0, top:-330}, "0C":{left:0, top:-360}, "0D":{left:0, top:-390}, "0E":{left:0, top:-420}, "0F":{left:0, top:-450}, 10:{left:0, top:-480}, 11:{left:0, top:-510}, 12:{left:0, top:-540}, 13:{left:0, top:-570}, 14:{left:0, top:-600}, 15:{left:0, top:-630}, 16:{left:0, top:-660}, 
  17:{left:0, top:-690}, 18:{left:0, top:-720}, 19:{left:0, top:-750}, "1A":{left:0, top:-780}, "1B":{left:0, top:-810}, "1C":{left:0, top:-840}, "1D":{left:0, top:-870}, "1E":{left:0, top:-900}, "1F":{left:0, top:-930}, 20:{left:0, top:-960}, 21:{left:0, top:-990}, 22:{left:0, top:-1020}, 23:{left:0, top:-1050}, 24:{left:0, top:-1080}, 25:{left:0, top:-1110}, 26:{left:0, top:-1140}, 27:{left:0, top:-1170}, 28:{left:0, top:-1200}, 29:{left:0, top:-1230}, "2A":{left:0, top:-1260}, "2B":{left:0, top:-1290}, 
  "2C":{left:0, top:-1320}, "2D":{left:0, top:-1350}, "2E":{left:0, top:-1380}, "2F":{left:0, top:-1410}, 30:{left:0, top:-1440}, 31:{left:0, top:-1470}, 32:{left:0, top:-1500}, 33:{left:0, top:-1530}, 34:{left:0, top:-1560}, 35:{left:0, top:-1590}, 36:{left:0, top:-1620}, 37:{left:0, top:-1650}, 38:{left:0, top:-1680}, 39:{left:0, top:-1710}, 40:{top:0}, 41:{top:-30}, 42:{top:-60}, 43:{top:-90}, 44:{top:-120}, 45:{top:-150}, 46:{top:-180}, 47:{top:-210}, 48:{top:-240}, 49:{top:-270}, "4A":{top:-300}, 
  "4B":{top:-330}, "4C":{top:-360}, "4D":{top:-390}, "4E":{top:-420}, "4F":{top:-450}, 50:{top:-480}, 51:{top:-510}, 52:{top:-540}, 53:{top:-570}, 54:{top:-600}, 55:{top:-630}, 56:{top:-660}, 57:{top:-690}, 58:{top:-720}, 59:{top:-750}, "5C":{top:-840}, "5D":{top:-870}, "5E":{top:-900}, "5F":{top:-930}, 60:{top:-423}, 61:{top:-990}, 62:{top:-1020}, 63:{top:-1050}, 64:{top:-1080}, 65:{top:-1110}, 66:{top:-1140}, 67:{top:-1170}, 68:{top:-1200}, 69:{top:-1230}, "6A":{top:-1260}, "6B":{top:-1290}, "6C":{top:-1320}, 
  "6D":{top:-1350}, "6E":{top:-1380}, "6F":{top:-1410}, 70:{top:-1440}, 71:{top:-1470}, 72:{top:-1500}, 73:{top:-1530}, 74:{top:-1560}, 75:{left:0, top:-51}, 76:{top:-1620}, 77:{left:0, top:-786}, 78:{top:-1680}, 79:{top:-1710}, "7A":{top:-1740}, "7B":{top:-1770}, "32a":{left:0, top:-1740}, "67a":{top:-1590}, "69a":{top:-780}, "6Aa":{top:-810}, "6Ba":{top:-1650}}, Nc;
  Ib(function(a) {
    function b(a) {
      var b = a.getAttribute("pbtip") || "", d = b.charAt(0), c = "_" === d;
      b = c ? b.charAt(2) : d;
      d = c ? "Btm" : "";
      var e = a.getAttribute("title") || "";
      Ha(a, "pbTipPos" + b.toUpperCase());
      L(a, "div", {className:"pbTip" + d}, {width:e.length + f + "em"}, e);
      L(a, "div", {className:"pbTail" + d});
      h && c && (a.focus(), a.blur());
    }
    function d(a) {
      if (U && r) {
        c(a);
      } else {
        var b = a.getAttribute("pbGhos") || "", d = b.substr(1), f = a.className, g = f.split("pbCsr")[1] || "", k = f.split("pbAlp")[1] || "";
        if ("CS" === d) {
          var h = "_";
        } else {
          h = d, 3 === h.length && (h = h.substr(0, 2)), h = ya[parseInt(h, 16)] || "~";
        }
        g = g.split(" ")[0];
        k = k.split(" ")[0];
        var m = 10 - z(k);
        za && k ? (f = f.split("pbChr")[1], f = f.split(" ")[0], e(a, f, k, a.innerHTML), b && e(a, d, m, h), a.style.backgroundImage = "none") : b ? (b = {className:["pbChr" + d + " pbAlp" + m + " pbCsr" + g]}, Ia = 1, l = L(a, "b", b, 0, h), c(a), c(l)) : c(a);
      }
    }
    function c(a) {
      p || g || aa(a, "pbChrCS") && Ma.push(a);
    }
    function e(a, b, d, c) {
      b = za[b + (u ? "a" : "")] || za[b];
      b.top += "px";
      a = L(a, "img", {title:c, src:A + "pbLCD/x3_a" + d + "0.png"}, b);
      "CS" === c && Ma.push(a);
    }
    if (a && !Nc) {
      Nc = !0;
      var f = 6 > v ? 1 : 0;
      a = Ga("SAMP");
      var g = 9 > v, h = 5 <= v && 6 > v, k, l, m, n;
      Lc && Ha(R, "pbLCD-AX");
      if (a.length) {
        var p = void 0 !== Y.opacity || void 0 !== Y["-moz-opacity"] || void 0 !== Y["-khtml-opacity"], r = !p && !g && !za, t = !U || r || za;
        for (m = -1; k = a[++m];) {
          if (aa(k.parentElement || k.parentNode, "pbLCD")) {
            var u = aa(k, "PB-120") || aa(k, "FX-795P"), w = k.children;
            for (k = w.length; k;) {
              var x = w[--k];
              switch(x.tagName.toUpperCase()) {
                case "A":
                  if (t) {
                    for (U || b(x), n = x.children.length; n;) {
                      d(x.children[--n]);
                    }
                  }
                  jd ? x.setAttribute("href", "javascript:void(0)") : x.onclick = Sc;
                  break;
                case "B":
                  t && d(x);
              }
            }
          }
        }
        Ma.length ? (setInterval(bc, 500), Ja([".pbChrCS", "background-position:0 -51px"])) : bc = null;
        r && Ja([".pbAlp1" + (U ? ",.pbAlp9[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a10.png)", ".pbAlp2" + (U ? ",.pbAlp8[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a20.png)", ".pbAlp3" + (U ? ",.pbAlp7[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a30.png)", ".pbAlp4" + (U ? ",.pbAlp6[pbGhos]:before" : ""), "background-image:url(" + A + "pbLCD/x3_a40.png)", ".pbAlp5", "background-image:url(" + A + "pbLCD/x3_a50.png)", ".pbAlp6", "background-image:url(" + 
        A + "pbLCD/x3_a60.png)", ".pbAlp7", "background-image:url(" + A + "pbLCD/x3_a70.png)", ".pbAlp8", "background-image:url(" + A + "pbLCD/x3_a80.png)", ".pbAlp9", "background-image:url(" + A + "pbLCD/x3_a90.png)"]);
      }
    }
  });
  525.13 > m.WebKit && (Kc.onclick = function(a) {
    if (nb) {
      return nb = !1, a.preventDefault(), !1;
    }
  });
  var sb = ya[7], dc = ya[30], Xc = ya[113], Oa = E(8337) + E(8331), tb = E(160), ad = E(8194), Zc = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), $c = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), Yc = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + dc + ya[31]).split(""), ca = 
  [], qb = [], pb, rb;
  Ib(function(a) {
    if (a && !rb) {
      var b = t.all || Ga("*");
      a = [];
      for (var c = b.length; c;) {
        a[--c] = b[c];
      }
      for (b = -1; c = a[++b];) {
        aa(c, "pbList") ? Pa(c) : aa(c, "pbFont") && 0 < " CODE,VAR,SAMP,KBD,PRE,TT,PLAINTEXT".indexOf(c.tagName.toUpperCase()) && Pa(c, !0);
      }
      ca.length && Na();
      rb = !0;
    }
  });
  Mc.prettify = Pa;
})(PB100, {}, this, document, navigator, screen, parseFloat, Number, Function, isFinite, setTimeout, clearTimeout, Date);

