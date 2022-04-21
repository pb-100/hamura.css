PB100={};ua = [];
ua.conpare = function(P, m) {
  var v = 0, u, y, X = (P + "").split("."), E = (m + "").split("."), ra = X.length;
  for (u = E.length; "0" === X[ra - 1];) {
    --ra;
  }
  for (; "0" === E[u - 1];) {
    --u;
  }
  for (y = ra < u ? ra : u; v < y; ++v) {
    var Ga = X[v] - 0, h = E[v] - 0;
    if (Ga !== h) {
      return Ga > h ? 1 : -1;
    }
  }
  return ra > u ? 1 : ra === u ? 0 : -1;
};
(function(P, m, v, u, y, X, E, ra) {
  function Ga(w, ca, R) {
    R = X(w.split(ca)[1]);
    return 0 <= R ? R : 0;
  }
  function h(w, ca) {
    return 0 <= w.indexOf(ca);
  }
  function Ia(w) {
    return h(w, "Linux armv") || h(w, "Linux aarch") || h(w, "Linux i686") || h(w, "Linux x86_64");
  }
  function C(w, ca) {
    for (var R in ca) {
      if (R === w) {
        return !0;
      }
    }
  }
  function p(w, ca) {
    var R = "", W = -1, la;
    if (w = w.split(ca)[1]) {
      for (; la = w.charCodeAt(++W);) {
        if (48 <= la && 57 >= la || 46 === la) {
          R += w.charAt(W);
        } else {
          break;
        }
      }
      for (W = R.length; W;) {
        if (46 === R.charCodeAt(--W)) {
          R = R.substr(0, W);
        } else {
          break;
        }
      }
    }
    return R;
  }
  function $a(w) {
    for (var ca = arguments, R = 1, W = ca[0], la; R < ca.length; ++R) {
      0 > ya(W, la = ca[R]) && (W = la);
    }
    return W;
  }
  function hb(w) {
    return w === w + "" ? w : w === w - 0 ? "" + w : w.min && w.max ? w.min + "~" + w.max : w.min ? w.min + "~" : "~" + w.max;
  }
  var ya = P.conpare, e = u.userAgent, U = u.appVersion, La = X(U) || 0, L = u.platform, M = v.documentElement, fa = M && M.style, ma = v.documentMode, ib = y.width;
  y = y.height;
  var tb = m.HTMLAudioElement, jb = m.performance, ub = m.Int8Array, Ma = m.ontouchstart !== ra, za = p(U, "Version/") || p(e, "Version/"), kb = m.operamini, da = !kb && m.opera, lb = da && (da.version && "function" === typeof da.version ? da.version() : $a(p(e, "Opera "), za, La)), Na = m.opr, Sa = !da && (v.all || ma);
  ma = Sa && (ma ? ma : m.XMLHttpRequest ? v.getElementsByTagName ? 7 : 4 : v.compatMode ? 6 : (0).toFixed ? 5.5 : m.attachEvent ? 5 : 4);
  M = !Sa && M.msContentZoomFactor;
  var Oa = !M && (m.chrome || m.chromium), Pa = !Sa && function() {
    for (var w in fa) {
      if (0 === w.indexOf("Moz")) {
        return !0;
      }
    }
  }(), ab = h(e, "UCWEB"), vb = ab && p(e, " U2/"), Pb = ab && p(e, "; wds "), mb = p(e.split("_").join("."), "; iPh OS "), Y = p(e, "; Adr "), bb = h(U, "YJApp-ANDROID"), na = h(L, "Android") || Pa && h(U, "Android") || bb;
  Y = p(L, "Android ") || p(U, "Android ") || p(e, "Android ") || Y;
  var cb = h(L, "Linux"), db = "MacIntel" === L && u.standalone !== ra, wb = Pa && p(e, "Goanna/"), oa = !wb && Pa && (p(e, "rv:") || p(e.substr(e.indexOf(") Gecko/") - 11), "; ")), sa = p(e, "Firefox/"), D = p(e, "Opera/"), Qa = m.FNRBrowser, q = Ga(e, "AppleWebKit/"), ta = p(e, "Chrome/"), Qb = p(U, "Iron/"), N = p(e, "OPR/"), V = p(U, "KHTML/"), xb = p(e.toLowerCase(), "iris");
  p(e, "FxiOS/");
  p(e, "CriOS/");
  p(e, "EdgiOS/");
  var nb = p(e, "Silk/"), ia = Ga(e, "SamsungBrowser/"), ob = !ia && function() {
    for (var w = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    ca, R = w.length; ca = w[--R];) {
      if (h(e, ca)) {
        return 2 > X(za) ? za : 0.9;
      }
    }
    w = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (R = w.length; ca = w[--R];) {
      if (h(e, ca)) {
        return za;
      }
    }
  }(), yb = Oa && 534.3 >= q, Ca = Ia(L), Ja = Ca && !h(e, L) && Ia(e);
  Ma = Ma && (q || Pa) && Ja || !Y && bb;
  bb = !!m.ReactNativeWebView;
  Ca = Ca && function() {
    for (var w in m) {
      if (0 === w.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Da = (Ja = m.puffinDevice) && Ja.clientInfo;
  Da = (Ja = Da && "iOS" === Da.os && Da.osVersion) && Da.model;
  var zb = !ma && v.registerElement, eb = !ma && v.execCommand, Ab = m.webkitCancelAnimationFrame, Rb = cb && zb && "11.0.696.34" === ta, Bb = m._firefoxTV_playbackStateObserverJava, fb = Ga(e, "diordnA ");
  if ("Nitro" === L) {
    var t = 1;
  } else if ("Nintendo DSi" === L) {
    t = 2;
    var r = D;
  } else if ("New Nintendo 3DS" === L || h(e, "iPhone OS 6_0") && 320 === ib && 240 === y) {
    t = 4, r = p(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === L) {
    t = 3, r = p(e, "Version/"), q = 535;
  } else if ("Nintendo Swicth" === L) {
    t = 7, r = p(U, "NintendoBrowser/");
  } else if (m.wiiu) {
    t = 6;
    r = p(U, "NintendoBrowser/");
    var F = 15, O = p(U, "AppleWebKit/") || (Ab ? 536 : 534);
    r || (r = Ab ? 4 : 2, h(U, "Macintosh;") || h(U, "Windows NT") && h(U, "Touch"));
  } else if (da && da.wiiremote) {
    t = 5, r = p(e, "Wii; U; ; ");
  } else if (D = p(e, "PlayStation Vita ")) {
    t = 10, r = D;
  } else if (D = p(e, "(PlayStation Portable); ")) {
    t = 8;
    r = D;
    var Ea = 3.3;
  } else if (D = p(e, "PLAYSTATION 3; ") || p(e, "PLAYSTATION 3 ")) {
    t = 11, r = D, 0 > ya("4.10", D) && (F = 26, O = D);
  } else if (h(e, "Xbox One")) {
    t = 15, r = 1;
  } else if (h(e, "Xbox")) {
    t = 14, r = 1;
  } else if (2 === La && h(e, "Sony/COM2/")) {
    t = 17;
    r = 2;
    Ea = 3.4;
    var Ta = !0;
  } else if (0 === L.indexOf("iP") || mb || Ja || db) {
    if (Ja) {
      switch(r = Ja, Da.substr(0, 4)) {
        case "iPho":
          var va = 0;
          p(Da, va);
          var ha = !0;
          break;
        case "iPad":
          va = 1;
          p(Da, va);
          var ja = !0;
          break;
        case "iPod":
          va = 2;
          p(Da, va);
          var Cb = !0;
      }
    } else {
      mb ? r = mb : (r = p(U.split("_").join("."), "OS "), C("isSecureContext", m), C("enableWebGL", m), C("sameOrigin", m));
      if (!r || Qa) {
        r = m.PointerEvent ? 13 : m.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : u.sendBeacon ? 11.3 : m.WebAssembly ? 11.2 : m.HTMLMeterElement ? 10.3 : m.Proxy ? 10.2 : m.HTMLPictureElement ? 9.3 : E.isNaN ? 9.2 : m.SharedWorker ? jb && jb.now ? 8.0 : 8.4 : eb ? 7.1 : m.webkitURL ? 6.1 : m.Worker ? 5.1 : ub ? 4.3 : tb ? 4.1 : 3.2;
      }
      var ea = ib === 1.5 * y || 1.5 * ib === y;
      0 === L.indexOf("iPhone") ? (va = 0, ha = !0) : 0 === L.indexOf("iPad") || db ? (va = 1, ja = !0) : 0 === L.indexOf("iPod") && (va = 2, Cb = !0);
    }
    F = !Ja && (u.standalone || (ja || 12 > r) && C("webkitFullscreenEnabled", v) || 11 <= r && 13 > r && u.mediaDevices) ? 16 : 17;
    t = 24;
    O = r;
  } else if (h(e, "Kobo")) {
    t = 18, F = 21, O = 2.2, na = !0;
  } else if (h(e, "EBRD")) {
    t = 19, F = 21, O = 2.2;
  } else if (D = p(e, "CrOS x86_64 ") || p(e, "CrOS aarch64 ") || p(e, "CrOS i686 ") || p(e, "CrOS armv7l ")) {
    t = 28, r = D;
  } else if (m.onmoztimechange !== ra) {
    t = 29, r = 18.1 > oa ? "1.0.1" : 19 > oa ? 1.1 : 27 > oa ? 1.2 : 29 > oa ? 1.3 : 31 > oa ? 1.4 : 33 > oa ? 2.0 : 35 > oa ? 2.1 : 38 > oa ? 2.2 : 45 > oa ? 2.5 : 2.6, h(e, "Mobile") ? ha = !0 : h(e, "Tablet") ? ja = !0 : h(e, "TV");
  } else if (m.palmGetResource) {
    t = 30, r = p(e, "webOS/") || p(e, "WEBOS") || p(e, "hpwOS/"), h(e, "webOS.TV") || h(e, "/SmartTV") || (ha = !0);
  } else if (D = p(e, "Tizen ")) {
    t = 31, r = D, F = 24, O = ia, ha = !0;
  } else if (D = p(e, "Windows Phone ") || p(U, "Windows Phone OS ") || Pb) {
    t = 23, r = D, ha = !0;
  } else if (M && "ARM" === L) {
    t = 23, r = 10, ha = !0;
  } else if (Sa && h(U, "ZuneWP")) {
    t = 23, r = 11 === ma ? 8.1 : 10 === ma ? 8 : 9 === ma ? 7.5 : 7 === ma ? 7 : "?", ha = !0;
  } else if (h(e, "FOMA;")) {
    t = 16, ha = !0;
  } else if (h(e, "SoftBank;")) {
    t = 16, ha = !0;
  } else if (h(e, "KFMUWI")) {
    var G = !0;
    r = 6.3;
    var ka = ja = !0;
  } else if (h(e, "KFKAWI")) {
    G = !0, r = 6, ka = ja = !0;
  } else if (h(e, "KFSUWI") || h(e, "KFAUWI") || h(e, "KFDOWI")) {
    G = !0, r = 5, ka = ja = !0;
  } else if (h(e, "KFGIWI")) {
    G = !0, r = 5, ka = ja = !0;
  } else if (h(e, "KFARWI") || h(e, "KFSAWA") || h(e, "KFSAWI")) {
    G = !0, r = 5 <= X(Y) ? 5 : 4, ka = ja = !0;
  } else if (h(e, "KFSOWI") || h(e, "KFTHWA") || h(e, "KFTHWI") || h(e, "KFAPWA") || h(e, "KFAPWI")) {
    G = !0, r = 3, ka = ja = !0;
  } else if (h(e, "KFOT") || h(e, "KFTT") || h(e, "KFJWA") || h(e, "KFJWI")) {
    G = !0, r = 2, ka = ja = !0;
  } else if (h(e, "Kindle Fire")) {
    G = !0, r = 1, ka = ja = !0;
  } else if (D = p(e, "Kindle/")) {
    t = 20, r = D, F = 21, O = 2.2;
  } else if (Bb) {
    G = !0, r = Y || fb, ka = !0;
  } else if (h(e, "AmazonWebAppPlatform") || h(e, "; AFT")) {
    G = !0, r = Y, ka = !0;
  } else if (h(e, "MeeGo")) {
    t = 32;
  } else if (h(e, "Maemo")) {
    t = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || xb) {
    t = 22, Ta = !0;
  } else if ("WinCE" === L) {
    t = 21, Ta = !0;
  } else if (0 === L.indexOf("Win")) {
    t = "Win16" === L ? 35 : "Win32" === L ? 36 : "Win64" === L ? 37 : 0, r = p(e, "Windows NT ") || p(e, "Windows ");
  } else if (0 === L.indexOf("Mac")) {
    t = "Mac68K" === L ? 39 : "MacPowerPC" === L || "MacPPC" === L ? 38 : "MacIntel" === L ? 40 : 0;
    if (D = p(e.split("_").join("."), "Mac OS X ")) {
      r = D;
    }
    var gc = !0;
  } else if (h(e, "BlackBerry") || h(e, "BB10")) {
    t = 34, r = za, ha = !0;
  } else if (h(e, "SunOS") || h(e, "Sun Solaris")) {
    t = 42;
  } else if (h(e, "FreeBSD")) {
    t = 43;
  } else if (h(e, "OpenBSD")) {
    t = 44;
  } else if (h(e, "NetBSD")) {
    t = 45;
  } else if (na && Pa) {
    h(e, "Android 4.4;") ? ea = {min:2.3} : 4 <= X(Y) ? ea = Y : ea = {min:2.2}, r = ea;
  } else if (na && da) {
    Y ? ea = Y : ea = {min:1.6}, r = ea, h(e, "Tablet") ? ja = !0 : ha = !0;
  } else if (Y) {
    r = Y, na = !0;
  } else if (cb && Ma || bb || Ca) {
    var Aa = !0;
    ia ? ea = {min:4.4} : Oa && !yb || Na || N ? ea = {min:4} : (ea = Y = fa.touchAction !== ra ? {min:5} : zb ? 4.4 : ub ? u.connection ? m.searchBoxJavaBridge_ || Oa ? E.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= q ? 3 : 533 <= q ? tb ? 2.3 : 2.2 : 530 <= q ? 2.0 : 1.5, ob && (F = 24, O = ob));
    r = ea;
    na = !0;
  } else {
    Rb ? (r = {min:5}, Aa = na = !0) : cb && (h(e, "Ubuntu") ? t = 46 : (D = p(e, "Mint/")) ? (t = 47, r = D) : (D = p(e, "Fedora/")) ? (t = 48, r = D) : t = h(e, "Gentoo") ? 49 : 50);
  }
  G || na && Aa && nb ? t = 27 : na && (t = t || 26);
  F || (ka = ka || na, da ? (F = ka || Ta || ha || ja ? 9 : 8, O = lb) : Sa ? (ea = Ga(U, "Trident/") + 4, F = Ta || ha || ja || Cb ? 3 : gc && 5 <= ma ? 7 : 2, O = ma) : M ? (F = 23 === t ? 6 : 5, O = p(U, "Edge/")) : wb ? (F = 13, O = wb) : Pa ? (F = ka ? 12 : 11, O = oa || sa) : ia ? (F = 24, O = ia) : (D = Ea || p(e, "NetFront/")) ? (F = 18, O = D) : (D = p(e, "iCab")) ? (F = 19, O = D) : (D = $a(p(e, "Opera Mini/"), p(e, "Opera Mobi/")) || kb && za) ? (F = 10, O = D, t || (h(e, "iPhone") ? va = 
  0 : h(e, "iPad") ? va = 1 : h(e, "iPod") && (va = 2), va && (t = 24))) : ab ? (F = 25, O = vb) : V ? (F = 14, O = La) : na && yb ? (F = 21, O = Y) : Oa || Na || N ? (F = ka ? 22 : 20, O = ta || Qb) : na && zb ? (F = 23, O = 5 > X(Y) ? Y : ta) : na && (za || Aa) ? (F = 21, O = Y) : ta ? (F = ka ? 22 : 20, O = ta) : q && (F = 15, O = q));
  t && (P[2] = t, r && (P[3] = hb(r)));
  F && (P[0] = F, O && (P[1] = hb(O)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var P = this[this.length - 1];
  --this.length;
  return P;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var P = arguments, m = 0, v = P.length, u = this.length; m < v; ++m) {
    this[u + m] = P[m];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var P = this[0], m = 1, v = this.length; m < v; ++m) {
    this[m - 1] = this[m];
  }
  --this.length;
  return P;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var P = arguments, m = P.length, v = this.length += m - 1, u = v; u >= m; --u) {
    this[u] = this[u - m];
  }
  for (u = 0; u < m; ++u) {
    this[u] = P[u];
  }
  return v;
});
Array.prototype.splice || (Array.prototype.splice = function(P, m) {
  var v = arguments, u = v.length - 2 - m, y = this.slice(P, P + m), X;
  if (0 < u) {
    var E = this.length - 1;
    for (X = P + m; E >= X; --E) {
      this[E + u] = this[E];
    }
  } else if (0 > u) {
    E = P + m;
    for (X = this.length; E < X; ++E) {
      this[E + u] = this[E];
    }
    this.length += u;
  }
  E = 2;
  for (X = v.length; E < X; ++E) {
    this[E - 2 + P] = v[E];
  }
  return y;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(P, m) {
  var v = this.length >>> 0;
  if (0 === v) {
    return -1;
  }
  if (m) {
    var u = m || 0;
    u = -Infinity === u ? 0 : (0 > u ? -u : u) | 0;
    if (v <= u) {
      return -1;
    }
  }
  for (u = 0 <= u ? u : 0 < v + u ? v + u : 0; u < v; ++u) {
    if (this[u] === P) {
      return u;
    }
  }
  return -1;
});
(function(P, m, v, u, y, X, E, ra, Ga, h, Ia, C) {
  function p(a) {
    (Sb = a) ? cb() : fb ? na(!0) : fb !== C ? cb() : $c(na, yc);
  }
  function $a() {
    $a = C;
    zc(p, "PB-100", {"PB-100_canTTF":Ha + "pbFont/ttf.css", "PB-100_canWOFF":Ha + "pbFont/woff.css", "PB-100_canEOT":Ha + "pbFont/eot.css", "PB-100_canSVG":Ha + "pbFont/svg.css"}, "pbFont-testCssReady", Tb, "i", 5000);
  }
  function hb() {
    if (525 > ia || V && !xb || 2.2 > M(21) || M(25) || 10 > M(3) || fa(32) || fa(30) || fa(1) || fa(2) || fa(3)) {
      return !1;
    }
    if (Ac) {
      return !0;
    }
    if (2 === Bc) {
      var a = Cc();
      var b = Dc(a, "@font-face", {"font-family":'"font"', src:'url("https://")'});
      b = a.cssText || a.cssRules && a.cssRules[b] && a.cssRules[b].cssText || "";
      b = b.match("src") && b.match("@font-face");
      Ec(a);
    }
    hb = C;
    return hc = !!b;
  }
  function ya() {
    return pb ? ic ? 2 : jc ? 3 : 1 : 0;
  }
  function e(a) {
    kc(v, "load", e);
    e = C;
    lb(F, a, !0);
    Db = F = C;
  }
  function U(a, b) {
    Eb(function() {
      var c = Ub(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function La() {
    for (var a, b = 0, c = new Ia() - 0; b < Aa.length;) {
      c < Aa[0].t ? ++b : (a = Aa.splice(b, 1)[0], a.f(a.p));
    }
    R = Aa.length ? Ga(La, w) : 0;
  }
  function L() {
    for (var a, b = 0; b < ha.length; ++b) {
      a = ha[b], a.f();
    }
  }
  function M(a) {
    if (m[0] === a) {
      return Qa === Qa + "" ? E(Qa) : Qa;
    }
  }
  function fa(a) {
    var b = m[3];
    if (m[2] === a) {
      return b === b + "" ? E(b) : b;
    }
  }
  function ma() {
    ea && (ea = clearInterval(ea));
  }
  function ib() {
    R && (R = h(R));
  }
  function tb(a, b, c) {
    var d = ["<", a], g = 1, f, k;
    if (b) {
      for (f in b) {
        var n = b[f];
        if (null != n && "" !== n) {
          if ("style" === f) {
            d[++g] = ' style="';
            for (k in n) {
              for (var A = ++g, l, x = [], Q = k.split(""), H = Q.length; H;) {
                l = Q[--H], "A" <= l && "Z" >= l && (l = "-" + l.toLowerCase()), x[H] = l;
              }
              d[A] = x.join("") + ":" + n[k] + ";";
            }
            d[++g] = '"';
          } else {
            "className" === f && (f = "class"), d[++g] = " " + f + '="' + n + '"';
          }
        }
      }
    }
    d[++g] = ">";
    null != c && (W && "font" !== a ? d[++g] = "<FONT>" + c + "</FONT>" : d[++g] = c);
    d[++g] = "</" + a + ">";
    return d.join("");
  }
  function jb(a) {
    a = "*" === a && 6 > q ? "*" !== a ? y.all.tags(a.toUpperCase()) : y.all : y.getElementsByTagName(a);
    var b = [], c = 0, d;
    for (d = a.length; c < d; ++c) {
      b[c] = a[c];
    }
    return b;
  }
  function ub(a) {
    return W ? a.parentElement : a.parentNode;
  }
  function Ma(a, b, c, d, g, f) {
    if (W) {
      var k = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var n = lc(2 > a ? Ua(b) : b);
      n = 2 > a ? n.indexOf(b) + a : n.length;
      b.insertAdjacentHTML(k, tb(c, d, g));
      b = lc(b)[n];
      null != g && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Fc) {
      b = y.createElement(tb(c, d));
    } else {
      b = f ? y.createElementNS("http://www.w3.org/2000/svg", c) : y.createElement(c);
      if (d) {
        for (k in d) {
          if ((c = d[k]) || 0 === c) {
            switch(k) {
              case "class":
              case "className":
                ad(b, c);
                break;
              case "style":
                a = b.style;
                for (n in c) {
                  a[n] = c[n];
                }
                break;
              default:
                Vb(b, k, c);
            }
          }
        }
      }
      Wb || null != g && za(b, g);
    }
    return b;
  }
  function za(a, b) {
    if (W) {
      return Ma(2, a, "font", C, b);
    }
    var c = y.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function kb(a, b) {
    9 > q ? a.className = b : a.setAttribute("class", b);
  }
  function da(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function lb(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function Na(a, b, c) {
    Gc && !Fb.length && G(Sa);
    Fb.push(a, b, c);
  }
  function Sa() {
    var a = Fb, b;
    for (Fb = []; b = a.shift();) {
      lb(b, a.shift(), a.shift());
    }
  }
  function Oa(a) {
    var b = a || event;
    a = Gb[b.type];
    var c = -1, d, g;
    q ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : Xb && (b.u = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; d = a[++c];) {
      d.l === this ? (this.g = d.j, this.g(b), this.g = oa, this.g = C) : 7.2 > N && this === y && d.l === v && (v.g = d.j, v.g(b), delete v.g);
    }
    if (q) {
      return b.preventDefault = b.stopPropagation = C, b.returnValue;
    }
    Xb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (Yb = !0), g && !Yb && b.u(), b.u = b.stopPropagation = C);
  }
  function Pa() {
    var a = 9 === qb.offsetWidth;
    mc !== a && Na(O, mc = a);
  }
  function ab(a) {
    F || lb(Hc, a);
  }
  function vb(a) {
    for (var b = Hb.length, c; b;) {
      if (c = Hb[--b], c.D === a) {
        return c;
      }
    }
  }
  function Pb() {
    var a = y.styleSheets, b = [], c = 0, d = -1, g;
    if (a) {
      for (g = a.length; c < g; ++c) {
        if (2 > Ca || eb && 526 > ia) {
          var f = mb(a[c]);
          f.parentNode && (b[c] = f);
        } else {
          b[c] = mb(a[c]);
        }
      }
    } else {
      for (a = Zb("*"), g = a.length; c < g; ++c) {
        f = a[c];
        var k = Ic(f);
        if ("STYLE" === k || "LINK" === k && "text/css" === $b(f, "type")) {
          b[++d] = f;
        }
      }
    }
    return b;
  }
  function mb(a) {
    return a.owningElement || a.ownerNode;
  }
  function Y(a, b, c) {
    a + "" === a && ("a" === a.charAt(2) && (c = !0, a = a.substr(0, 2)), a = "CS" === a ? 7.2 > N ? 117 : 9 > q || 9 > N || ta ? 1 : 132 : parseInt(a, 16));
    c && (50 === a && (a = 128), 102 < a && 108 > a && (a += 24));
    return (a - 1) * -(6 * (b || 2));
  }
  function bb(a) {
    this.focus();
    a.preventDefault();
    a.stopPropagation();
  }
  function na(a) {
    a && Ib(sa, "pbList-noWebFont");
    cb();
  }
  function cb() {
    for (p = zc = C; Va.length;) {
      db(Va.shift(), Va.shift());
    }
  }
  function db(a, b) {
    function c(A) {
      A = lc(A);
      for (var l = -1, x; x = A[++l];) {
        switch(x.nodeType) {
          case 1:
            c(x);
            break;
          case 3:
            x.data && g(x.data) && f.push(x);
        }
      }
    }
    function d(A) {
      var l = A.children, x = 0, Q = l.length;
      if (Q) {
        for (; x < Q; ++x) {
          d(l[x]);
        }
      } else {
        (l = A.innerText) && g(l) && f.push(A);
      }
    }
    function g(A) {
      return A.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
    }
    var f = [], k;
    if (p) {
      -1 === Va.indexOf(a) && (Va.push(a, b), bd && $a && $a());
    } else {
      var n = Va.indexOf(a);
      0 <= n && Va.splice(n, 2);
      for (5 > q ? d(a) : c(a); k = f.shift();) {
        n = 5 > q ? k.innerText : k.data, 2 !== Sb && (n = n.split(Tb).join(Jc)), b ? 5 > q ? k.innerText = n : k.data = n : wb(n.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(cd).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(nc).split("&amp;").join("&"), k);
      }
    }
  }
  function wb(a, b) {
    function c(S, I) {
      for (var K = ""; I;) {
        I & 1 && (K += S), I >>= 1, S += S;
      }
      return K;
    }
    function d(S, I, K) {
      for (var pa, oc = -1, rb, Wa; pa = I[++oc];) {
        for (; 0 <= (rb = S.indexOf(pa));) {
          Wa = pa.length, S = S.substr(0, rb) + c(K, Wa) + S.substr(rb + Wa);
        }
      }
      return S;
    }
    function g(S) {
      var I = E(S), K = "" + I;
      return 0 < I && I === I | 0 && (I = S.indexOf(K) + K.length, I <= S.length) ? I : 0;
    }
    var f = " area line str cmd fnc syb".split(" "), k = 5 > q || 1 === b.nodeType, n = [], A = "", l, x = -1, Q, H, B;
    if (k) {
      if (pc) {
        var Ka = b.style.visibility;
        Ra(b, "visibility", "hidden");
      }
      b.innerHTML = "";
    }
    if (Jb) {
      var Z = b;
      b = y.createDocumentFragment();
    }
    if (function(S) {
      var I = S.indexOf("P");
      if (-1 === I) {
        return !1;
      }
      I = E(S.charAt(I + 1));
      return 0 <= I && 9 >= I;
    }(a)) {
      A = c("+", a.length);
    } else {
      0 <= (l = g(a)) && (A = c("|", l), x = l, --x);
      for (; l = a.charAt(++x);) {
        l === nc || Q ? (A += "~", l === nc && (Q = !Q)) : A += l;
      }
      A = d(A, dd, "^");
      A = d(A, ed, "{");
      A = d(A, fd, "}");
    }
    x = 0;
    for (Q = a.length; x < Q; ++x) {
      l = a.charAt(x);
      var J = l === Kc;
      var T = " " === l;
      l = J ? " " : l;
      var z = A.charAt(x);
      var ba = (H = aa) && J;
      var aa = "|" === z;
      z = f["+|~{}^".indexOf(z) + 1];
      "\n" !== l ? (Sb || !fb ? (2 === Sb && a.substr(x, 2) === Tb && (l = Tb, ++x), z = T && "str" === z ? "pbList-strsp" : J ? "" : !T && z ? "pbList-" + z : "") : (J = gb.indexOf(l), J = -1 === J ? "" : gb.indexOf(l).toString(16).toUpperCase(), J = (J = 1 === J.length ? "0" + J : J) ? "pbChr" + J : "", z = T && "str" === z ? "pbList-strsp" : T || !J ? "" : z ? (J ? J + " " : "") + "pbList-" + z : J), J = C, ba ? (l = 6 <= q && 8 > q ? " " : Kc, z = "") : aa && (1.9 > V || 9.5 > N) ? (aa && !H && 
      (B = 4 - (E(a.substr(x)) + "").length), 7.5 > N ? J = Xa ? "position:relative;top:-4px;left:" + 12 * B + "px" : {position:"relative", top:"-4px", left:12 * B + "px"} : 1.3 <= V ? (J = Xa ? "position:absolute;left:" + 12 * B + "px" : {position:"absolute", left:12 * B + "px"}, ++B) : J = Xa ? "position:relative;left:" + 12 * B + "px" : {position:"relative", left:12 * B + "px"}) : T && 7.5 > N && (z = "pbList-strsp"), Xa ? n.push("<font" + (z ? ' class="' + z + '"' : "") + (J ? ' style="' + J + 
      '"' : "") + ">" + l + "</font>") : k || Jb ? wa(b, "font", {"class":z, style:J}, l) : Kb(b, "font", {"class":z, style:J}, l)) : (H = aa = !1, Xa ? n.push(l) : k || Jb ? qc(b, l) : gd(b, l));
    }
    if (k) {
      Xa ? b.innerHTML = n.join("") : Jb && Z.appendChild(b), pc && Ra(b, "visibility", Ka);
    } else {
      if (Xa) {
        f = y.createElement("font");
        for (f.innerHTML = n.join(""); n = f.firstChild;) {
          b.parentNode.insertBefore(n, b);
        }
        Ba(b);
      } else {
        Jb ? Z.parentNode.replaceChild(b, Z) : Ba(b);
      }
    }
  }
  var oa = u, sa = y.body, D = sa.style, Qa = m[1], q = M(2) || M(3), ta = M(7), Qb = M(5) || M(6), N = M(8) || M(9), V = M(11) || M(12), xb = V && 0 <= m.conpare(Qa, "1.9.1"), nb = M(13), ia = M(15), ob = M(16) || M(17), yb = M(10) || M(25), Ca = M(20) || M(22), Ja = Ca || M(23) || M(21) || M(24), Da = Ca && E(X.userAgent.split("Edg/")[1]), zb = E(X.appVersion.split("Trident/")[1]) + 4, eb = fa(35) || fa(36) || fa(37), Ab = !q && !ta && (new ra('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Rb = (ta ? "ie5mac" : 5.5 > q ? "ie5win" : 6 > q ? "ie55" : 10 > q ? "ie" + (q | 0) : 7.2 > N ? "opr70" : 8 > N ? "opr72" : 9.5 > N ? "opr" + (N | 0) : V && !xb ? 1.3 <= V ? "gck190" : 1 <= V ? "gck121" : "gck097" : "modern") + ".css";
  fa(1) || fa(2) || fa(3) || fa(4) || fa(8) || fa(9) || fa(10);
  var Bb, fb, t, r = D.transform !== C ? "transform" : D["-o-transform"] !== C ? "-o-transform" : D["-ms-transform"] !== C ? "-ms-transform" : D.MozTransform !== C ? "-moz-transform" : D["-webkit-transform"] !== C ? "-webkit-transform" : "", F = [], O = [], Ea = [];
  var Ta = function(a) {
    ha.length || (ea = setInterval(L, ja));
    ha.push({f:a, v:++Cb});
    return Cb;
  };
  var va = function() {
    ea && (ma(), ea = setInterval(L, ja));
  };
  var ha = [], ja = 500, Cb = 0, ea;
  if (5 > q || ta) {
    v._wdb_onlooptimer = L, L = "_wdb_onlooptimer()";
  }
  var G = function(a, b, c) {
    Aa.length || (R = Ga(La, w));
    Aa.push({f:a, p:b, v:++ca, t:new Ia() - 0 + (w < c ? c : w)});
    return ca;
  };
  var ka = function(a) {
    for (var b = Aa.length, c; c = Aa[--b];) {
      if (c.v === a) {
        Aa.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var gc = function() {
    R && (ib(), R = Ga(La, w));
  };
  var Aa = [], w = 16, ca = 0, R;
  if (5 > q || ta) {
    v._wdb_ontimer = La, La = "_wdb_ontimer()";
  }
  var W = 5 > q;
  var la = jb("html")[0];
  var rc = jb("head")[0];
  var Zb = jb;
  var hd = function(a) {
    var b = [], c = 0, d, g = -1;
    if (9 > q || !y.getElementsByClassName) {
      var f = 6 > q ? y.all : y.getElementsByTagName("*");
    } else {
      var k = !0;
      f = y.getElementsByClassName(a);
    }
    for (d = f.length; c < d; ++c) {
      var n = f[c];
      if (k || (W || 1 === n.nodeType) && da(n, a)) {
        b[++g] = n;
      }
    }
    return b;
  };
  var Ua = ub;
  var lc = function(a) {
    a = W ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var Lc = function(a) {
    var b = !(7.03 < N && 7.2 > N) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, g = -1, f; d;) {
      if (f = a[--d], b || 1 === f.nodeType) {
        W && "FONT" === f.tagName || (c[++g] = f);
      }
    }
    return c;
  };
  var wa = function(a, b, c, d, g) {
    b = Ma(2, a, b, c, d, g);
    W || (a.appendChild(b), Wb && null != d && za(b, d));
    return b;
  };
  var Kb = function(a, b, c, d, g) {
    b = Ma(0, a, b, c, d, g);
    W || (ub(a).insertBefore(b, a), Wb && null != d && za(b, d));
    return b;
  };
  var Lb = function(a, b, c, d, g) {
    b = Ma(1, a, b, c, d, g);
    var f;
    W || ((f = a.nextSibling) ? Ua(f).insertBefore(b, f) : Ua(a).appendChild(b), Wb && null != d && za(b, d));
    return b;
  };
  var qc = za;
  var gd = function(a, b) {
    if (W) {
      return Ma(0, a, "font", C, b);
    }
    var c = y.createTextNode("" + b);
    Ua(a).insertBefore(c, a);
    return c;
  };
  var Ba = function(a) {
    W ? a.outerHTML = "" : Ua(a).removeChild(a);
  };
  var Fc = 9 > q, Wb = Fc;
  var Ic = function(a) {
    return a.tagName.toUpperCase();
  };
  var $b = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Vb = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var ac = function(a, b) {
    a.removeAttribute(b);
  };
  var ad = kb;
  var Ib = function(a, b) {
    var c;
    if (!da(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      kb(a, c + b);
    }
  };
  var Mc = function(a, b) {
    if (da(a, b)) {
      var c = a.className.split(" ");
      c.splice(c.indexOf(b), 1);
      kb(a, c.join(" "));
    }
  };
  var Ra = function(a, b, c) {
    a.style[b] = c;
  };
  var Nc = function(a, b) {
    var c = -1, d, g;
    if (5.5 > q) {
      if (b) {
        for (d = b.split(";"); g = d[++c];) {
          var f = g.split(":");
          a.style[f[0]] = g.substr(f[0].length + 1);
        }
      } else {
        a.removeAttribute("style");
      }
    } else {
      9 > N || 1 > V ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  var mc, qa, Ub = v.matchMedia, qb, Fb = [], Gc;
  F.push(function() {
    U = C;
    qb = wa(sa, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    Db(function() {
      Gc = !0;
      Fb.length && G(Sa);
    });
  });
  var bc = function(a, b, c, d) {
    if (Oc) {
      a.addEventListener(b, c, d ? Ab ? d : d.capture : !1);
    } else {
      var g = {l:a, j:c};
      d = Gb[b];
      var f = "on" + b, k, n;
      if (d) {
        for (k = d.length; n = d[--k];) {
          if (n.l === a && n.j === c) {
            return;
          }
        }
        Gb[b].push(g);
      } else {
        Gb[b] = d = [g], sc || (b = a[f], "function" === typeof b && b !== Oa && d.unshift({l:a, j:b}));
      }
      sc ? a.attachEvent(f, Oa) : a[f] = Oa;
    }
  };
  var kc = function(a, b, c, d) {
    if (Oc) {
      a.removeEventListener(b, c, d ? Ab ? d : d.capture : !1);
    } else {
      d = Gb[b];
      b = "on" + b;
      var g, f, k;
      if (d) {
        for (g = d.length; f = d[--g];) {
          f.l === a && (f.j === c ? d.splice(g, 1) : k = !0);
        }
        k || (sc ? a.detachEvent(b, Oa) : (a[b] = oa, a[b] = null));
      }
    }
  };
  var Gb = {}, sc = !1, Xb = 525.13 > ia, Oc = !Xb && !ta && v.addEventListener, Yb;
  Xb && la.addEventListener("click", function(a) {
    if (Yb) {
      return Yb = !1, a.preventDefault(), !1;
    }
  });
  var Db = function(a) {
    F.push(a);
  };
  var Mb = function(a) {
    cc && cc.push(a);
  };
  var cc = [];
  if (419.3 >= ia) {
    var dc = function() {
      if (dc) {
        var a = y.readyState;
        "loaded" === a || "complete" === a ? (dc = C, e()) : G(dc);
      }
    };
    G(dc);
  } else {
    bc(v, "load", e);
  }
  q || 0.9 <= V && 1.8 > V ? bc(v, "unload", function(a) {
    lb(cc, a, !0);
  }) : cc = C;
  var Eb = function(a) {
    O.push(a);
  };
  Db(function() {
    Pa();
    Ta(Pa);
  });
  var Pc = function(a) {
    Ea && Ea.push(a);
  };
  var Qc = 60 > V || nb, pb, jc, ic;
  if (89 <= V || 89 <= Ca || eb && 79 <= Da || Ub && (Ub("(forced-colors:none)").matches || Ub("(forced-colors:active)").matches)) {
    var tc = !0;
    U("(forced-colors:active)", function(a) {
      pb = a.matches;
      qa = ya();
      Na(Ea, qa);
    });
  } else if (10 <= q || Qb || eb && Da) {
    tc = !0, U("(-ms-high-contrast:black-on-white)", function(a) {
      pb = jc = a.matches;
      qa !== ya() && (qa = ya(), Na(Ea, qa));
    }), U("(-ms-high-contrast:white-on-black)", function(a) {
      pb = ic = a.matches;
      qa !== ya() && (qa = ya(), Na(Ea, qa));
    }), U("(-ms-high-contrast:active)", function(a) {
      pb = a.matches;
      qa !== ya() && (qa = ya(), Na(Ea, qa));
    });
  } else if (eb && (q || V && 0 <= m.conpare(Qa, "1.8.1") || nb)) {
    var uc = function() {
      function a(d, g) {
        if (g && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var f = d.split("(")[1].split(",");
        return E(f[0]) + E(f[1]) + E(f[2]);
      }
      var b = y.defaultView;
      var c = b ? b.getComputedStyle(qb, null) : qb.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (pb = "#123456" !== b && "rgb(18,52,86)" !== b, jc = a(b) < a(c, !0), ic = a(b) > a(c, !0), qa !== ya() && (qa = ya(), Na(Ea, qa, Qc)));
    };
    Eb(function(a) {
      if (a) {
        return Ra(qb, "color", "#123456"), Ra(qb, "backgroundColor", "#123456"), Qc ? (uc(), Ea = C) : Ta(uc), uc = C, !0;
      }
    });
  } else {
    Ea = ya = C;
  }
  var Rc = function(a) {
    Hc.push(a);
  };
  var Hc = [], Sc = 0, Tc = 1 > V || 1.2 <= V && 1.8 > V || 7.2 >= N;
  Tc ? Ta(function() {
    var a = v.scrollY || sa.scrollTop;
    Sc !== a && (Sc = a, ab());
  }) : bc(v, "scroll", ab);
  Mb(function() {
    Tc || kc(v, "scroll", ab);
  });
  var Ac = 9 > q || 525 <= ia && 530 > ia || 2 > Ca, Bc = 0;
  var Cc = function(a, b) {
    var c = Pb(), d = c.length;
    d = 0 <= b && b < d ? b : d;
    var g = c[d - 1];
    c = c[d];
    if (ec || fc) {
      var f = c ? Kb(c, "style") : g ? Lb(g, "style") : wa(rc, "style");
      fc && qc(f, "");
      var k = f.styleSheet || f.sheet;
      a && Vb(f, "media", a);
    } else if (sb || Nb) {
      k = {C:a, B:d, G:!0};
    }
    if (k) {
      return Hb.push({D:k, h:f, m:[]}), k;
    }
  };
  var Ec = function(a) {
    a = vb(a);
    var b = a.m, c = b.length, d;
    for (a.h && Ba(a.h); d = b[--c];) {
      d.i && Ba(d.i);
    }
    Hb.splice(Hb.indexOf(a), 1);
  };
  var Dc = function(a, b, c, d) {
    var g = vb(a), f = g.h;
    g = g.m;
    var k = "@import" === b, n = "@page" === b, A = "@font-face" === b, l = g.length, x = "", Q;
    if (a.imports) {
      var H = a.imports.length;
    } else {
      for (H = 0; H < l && "@import" === g[H].A; ++H) {
      }
    }
    if (k) {
      d = 0 <= d && d < H ? d : H;
      var B = b + ' "' + c + '"';
    } else {
      d = H <= d && d < l ? d : l;
      for (B in c) {
        x += ";" + B + ":" + c[B];
      }
      x = x.substr(1);
      B = b + "{" + x + "}";
      6 <= q && A && (d = l);
    }
    l = {A:b, F:c, s:d, o:d};
    if (9 > q) {
      H = a.rules;
      var Ka = H.length;
      if (A) {
        b = y.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + B + "</style>", b = b.lastChild, (Q = f.nextSibling) ? Ua(f).insertBefore(b, Q) : Ua(f).appendChild(b), l.i = b;
      } else {
        if (k ? a.addImport(c, d) : 5.5 <= q && n || a.addRule(b, x, d), l.o = d + (H.length - Ka - 1), 0 === H.length - Ka) {
          return -1;
        }
      }
    } else if (ec || fc) {
      (eb && ia || 28 > Ca) && k ? l.i = Lb(f, "link", {href:c, rel:"stylesheet", type:"text/css"}) : Ac && A ? (b = l.i = Lb(f, "style", {type:"text/css", media:a.media}), b.innerText = B) : a.insertRule(B, d);
    }
    g.splice(d, 0, l);
    if (sb || Nb) {
      f = vb(a);
      Q = f.m;
      b = f.h;
      c = a.B;
      k = Pb();
      a = k[c - 1];
      c = k[c];
      k = [];
      A = n = -1;
      x = "style";
      l = {type:"text/css", media:f.C};
      for (var Z; H = Q[++n];) {
        if (B = H.A, H = H.F, "@import" === B) {
          k[++A] = B + ' "' + H + '"';
        } else {
          k[++A] = B + "{";
          B = "";
          for (Z in H) {
            B += ";" + Z + ":" + H[Z];
          }
          k[++A] = B.substr(1) + "}";
        }
      }
      k = k.join("");
      sb && (k = "data:text/css;charset=utf-8;base64," + Uc(k), l.rel = "stylesheet", l.href = k, x = "link", k = C);
      b ? (f.h = Lb(b, x, l, k), Ba(b)) : (b = c ? Kb(c, x, l, k) : a ? Lb(a, x, l, k) : wa(rc, x, l, k), f.h = b);
    }
    Z = d;
    a = g.length;
    for (f = Z; f < a; ++f) {
      Q = g[f], Q.i || (b = Q.o - Q.s, Q.s = Z, Q.o = Z + b, Z += 1 + b);
    }
    return d;
  };
  var Hb = [], sb = 1 > V || 8 <= N && 9 > N, Nb = 7.2 <= N && 8 > N, ec = !!q || !sb && !Nb && function() {
    var a = wa(la, "style"), b = !(!a.styleSheet && !a.sheet);
    Ba(a);
    return b;
  }(), fc = !ec && ia && !sb && !Nb && function() {
    var a = wa(la, "style");
    qc(a, "");
    var b = !(!a.styleSheet && !a.sheet);
    Ba(a);
    return b;
  }();
  Bc = sb || Nb ? 1 : ec || fc ? 2 : 0;
  var Uc;
  (function(a) {
    function b(d) {
      for (var g = c, f = "", k = 0, n; n = d.length;) {
        4 > n && (k = [0, 2, 1, 0][n]), n = d.charCodeAt(0) << 16 | (1 < n ? d.charCodeAt(1) : 0) << 8 | (2 < n ? d.charCodeAt(2) : 0), f += [g[n >>> 18], g[n >>> 12 & 63], 2 <= k ? "=" : g[n >>> 6 & 63], 1 <= k ? "=" : g[n & 63]].join(""), d = d.substr(3);
      }
      return f;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Uc = b;
  })(this);
  O.splice(0, 0, function() {
    if (mc) {
      t = 8 <= q || Qb || 9.5 <= N || xb || nb || 522 <= ia || 3 <= ob || yb || Ja ? 3 : 7.2 <= N ? 2 : 6 <= N || V ? 1 : 0;
      if (!t && !q && !ta) {
        var a = wa(sa, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        t = 6 <= a.offsetWidth ? 2 : 0;
        Ba(a);
      }
      return !0;
    }
  });
  var Vc = function(a) {
    function b(g) {
      d = ka(d);
      vc = g;
      c.onload = c.onerror = oa;
      G(a, g);
    }
    if (vc !== C) {
      G(a, vc);
    } else if (8 > q) {
      G(a, !1);
    } else {
      var c = new Image(), d = G(function() {
        d && b(!1);
      });
      c.onerror = function() {
        b(!1);
      };
      c.onload = function() {
        b(1 === c.width * c.height);
      };
      c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    }
  };
  var vc;
  9 > q && Db(function() {
    var a = wa(sa, "div");
    Nc(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    Bb = 1 < a.offsetHeight;
    Nc(a, "");
    Ba(a);
  });
  var $c = function(a, b) {
    function c() {
      if (g || !f || d.complete) {
        var k = !!d.width;
        fb = fb || k;
        G(a, k);
        d.onerror = d.onload = oa;
        d = a = C;
      } else {
        --f, G(c);
      }
    }
    var d = new Image(), g, f = 99;
    d.onerror = function() {
      g = !0;
    };
    d.onload = function() {
      g = !0;
    };
    d.src = b;
    G(c);
  };
  var id = 9 > q || 2 > Ca || 12 > N, Wc = ["sans-serif", "serif"], hc;
  var zc = function(a, b, c, d, g, f, k) {
    function n(K) {
      a(K);
      I && !K && Ec(I);
      a = z = ba = aa = I = C;
    }
    function A() {
      y.fonts.load('1.6em "' + b + '"').then(function() {
        Q(b) ? G(n, S) : x(!0);
      }, function() {
        Vc(H);
      });
    }
    function l(K) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (J = new Ia() - 0, !1) : K < new Ia() - J;
    }
    function x(K) {
      K && (J = new Ia() - 0);
      Q(b) ? n(S) : l(Z) ? T ? n(0) : id ? G(n, 0) : Vc(H) : G(x);
    }
    function Q(K) {
      var pa = 0, oc = -1, rb = 0;
      if (!aa) {
        var Wa = -1;
        var wc;
        z = wa(sa, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
        for (aa = {}; wc = Wc[++Wa];) {
          Ra(z, "fontFamily", wc), aa[wc] = z.offsetWidth;
        }
      }
      for (5 > q ? z || (z = wa(sa, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : sa.appendChild(z); Wa = Wc[++oc];) {
        if (Ra(z, "fontFamily", '"' + K + '",' + Wa), z.offsetWidth !== aa[Wa]) {
          pa = 1;
          break;
        }
      }
      !q && pa && g && (z.innerHTML = g, K = z.offsetWidth, z.innerHTML = f, rb = K === z.offsetWidth ? 1 : 0, z.innerHTML = "mmmmmmmmmmlli");
      Ba(z);
      5 > q && (z = C);
      return S = pa + rb;
    }
    function H(K) {
      (T = K) ? B(!0) : n(0);
    }
    function B(K) {
      var pa;
      K && (J = new Ia() - 0);
      for (pa in c) {
        Q(pa) ? (ba = wa(sa, "div", {"aria-hidden":"true", className:d, id:d}), I = Cc(), Dc(I, "@import", c[pa]), G(Ka, !0)) : l(100) ? (delete c[pa], G(B, !0)) : G(B);
        return;
      }
      n(0);
    }
    function Ka(K) {
      K && (J = new Ia() - 0);
      1 < ba.offsetWidth ? (Ba(ba), Z = 100, G(x, !0)) : l(Z) ? 528 > ia ? (Ba(ba), Z = 100, G(x, !0)) : (Ba(ba), n(0)) : G(Ka);
    }
    var Z = k || 5000, J, T, z, ba, aa, S, I;
    hb || hc ? hc || hb() ? !y.fonts || 603 > ia ? x(!0) : A() : G(n, 0) : G(n, 0);
  };
  var xa = String.fromCharCode, gb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", xa(960), ")", "(", xa(234), xa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", xa(9824), "\u2190", xa(9829), xa(9830), xa(9827), xa(956), "\u03a9", "\u2193", "\u2192", "%", xa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", xa(9619)], Xc = (9 === q || V && 0 <= m.conpare(Qa, "1.8.1") || nb) && !tc, Ya = [], Za, Fa, Ob = 7.2 > N ? function() {
    Za = !Za;
    for (var a = -1, b; b = Ya[++a];) {
      -1 !== b.className.indexOf("pbAlp") ? Ra(b, "display", Za ? "" : "none") : (Ib(b, Za ? "pbChrCS" : "pbChr00"), Mc(b, Za ? "pbChr00" : "pbChrCS"));
    }
  } : Xc ? function() {
    Za = !Za;
    for (var a = -1, b; b = Ya[++a];) {
      Ra(b, "opacity", Za ? 1 : 0);
    }
  } : C;
  var xc = P.startBlinkingIfCursor = function(a) {
    Ob ? da(a, "pbChrCS") && (Fa || !N && !qa || (Fa = setInterval(Ob, 400)), -1 === Ya.indexOf(a) && Ya.push(a)) : Ya = C;
  };
  P.stopBlinkingIfCursor = function(a) {
    Ob && (a = Ya.indexOf(a), 0 <= a && (Ya.splice(a, 1), !Ya.length && Fa && (clearInterval(Fa), Fa = 0)));
  };
  Xc && Pc(function(a) {
    a ? Fa || (Fa = setInterval(Ob, 400)) : Fa && (clearInterval(Fa), Fa = 0);
  });
  Ob && Mb(function() {
    Fa && clearInterval(Fa);
  });
  tc || Pc(function(a) {
    a ? (Vb(la, "forced-colors", 2 === a ? "lod" : 3 === a ? "dol" : "active"), (r || 9 === q || 5.5 <= q && 9 > q && Bb) && Ib(la, "jsCanRotate")) : (ac(la, "forced-colors"), Mc(la, "jsCanRotate"));
  });
  Eb(function(a) {
    if (a) {
      a = hd("pbChrCS");
      for (var b = 0, c = a.length; b < c; ++b) {
        xc(a[b]);
      }
      return !0;
    }
  });
  var Yc = [];
  Eb(function(a) {
    function b(T) {
      var z = $b(T, "pbTip"), ba = z.charAt(0), aa = "_" === ba;
      z = aa ? z.charAt(2) : ba;
      ba = aa ? "Btm" : "";
      var S = $b(T, "title");
      k || (ac(T, "pbTip"), ac(T, "title"), Ib(T, "pbTipPos" + z.toUpperCase()), wa(T, "div", {className:"pbTip" + ba, style:{width:S.length + d + "em"}}, S));
      wa(T, "div", {className:"pbTail" + ba});
      n && aa && (T.focus(), T.blur());
    }
    function c(T, z) {
      var ba = $b(T, "pbGhst"), aa = T.className, S = aa.split("pbCsr")[1] || "", I = aa.split("pbAlp")[1] || "";
      if ("CS" === ba) {
        var K = "_";
      } else {
        K = ba, 3 === K.length && (K = K.substr(0, 2)), K = gb[parseInt(K, 16)] || "~";
      }
      var pa;
      S = S.split(" ")[0];
      if (I = E(I.split(" ")[0])) {
        g && (aa = aa.split("pbChr")[1].split(" ")[0], Ra(T, "backgroundPosition", Y(aa, 2, Ka) + "px " + -24 * (10 - I) + "px")), !z && f && Kb(T, "a").appendChild(T);
      }
      ba && (I = 10 - I, g && (pa = {backgroundPosition:Y(ba, 2, Ka) + "px " + -24 * (10 - I) + "px"}), ac(T, "pbGhst"), x = Kb(T, "b", {className:"pbChr" + ba + " pbCsr" + S + " pbAlp" + I, style:pa}, K), xc(x));
      xc(T);
    }
    if (a) {
      var d = 6 > q ? 2 : 0, g = 7.2 > N, f = 1.1 === V;
      a = Zb("SAMP");
      var k = 8 === q, n = 5 <= q && 6 > q, A = t, l, x, Q, H, B;
      Bb && Ib(sa, "pbLCD-AX");
      if (a.length) {
        for (Q = -1; l = a[++Q];) {
          if (da(Ua(l), "pbLCD")) {
            var Ka = da(l, "PB-120") || da(l, "FX-795P");
            var Z = Lc(l);
            for (l = Z.length; B = Z[--l];) {
              switch(Ic(B)) {
                case "A":
                  (2 > A || k) && b(B);
                  if (2 > A) {
                    var J = Lc(B);
                    for (H = J.length; H;) {
                      c(J[--H], !0);
                    }
                  }
                  yb ? Vb(B, "href", "javascript:void(0)") : (bc(B, "click", bb), Yc.push(B));
                  break;
                case "B":
                  2 > A && c(B, !1);
              }
            }
          }
        }
      }
      return !0;
    }
  });
  Mb(function() {
    for (var a; a = Yc.shift();) {
      kc(a, "click", bb);
    }
  });
  6 === q && (new ra("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
  var nc = gb[7], Jc = gb[30], cd = gb[113], Tb = xa(8337) + xa(8331), Kc = xa(160);
  xa(8194);
  var ed = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), fd = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), dd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Jc + gb[31]).split(""), Va = [], Sb, yc, bd;
  Eb(function(a) {
    if (a) {
      yc = 1 > Ha + V ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
      a = Zb("*");
      for (var b = -1, c; c = a[++b];) {
        da(c, "pbList") ? db(c) : da(c, "pbFont") && db(c, !0);
      }
      Va.length && $a();
      return !0;
    }
  });
  var Xa = !1, pc = 8 > N, Jb = !Xa && !pc && !(6 > q) && y.createDocumentFragment && !!sa.replaceChild;
  P.prettify = db;
  var Zc = y.scripts || Zb("script");
  var Ha = Zc[Zc.length - 1].src.split("/");
  --Ha.length;
  (Ha = Ha.join("/")) && (Ha += "/");
  6.1 > ob && Rc(va);
  Mb(ma);
  6.1 > ob && Rc(gc);
  Mb(ib);
  10 > q && (11 !== zb || 5 !== q) || (9 > N || 1 > V || !ta && !v.addEventListener ? y.write('<link href="' + Ha + Rb + '" rel="stylesheet"' + (8 > N ? "" : ' media="screen,handheld,projection,print"') + ">") : Db(function() {
    wa(rc, "link", {href:Ha + "" + Rb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

