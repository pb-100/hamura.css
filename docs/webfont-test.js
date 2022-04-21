PB100={};var k;
ua = [];
ua.conpare = function(P, n) {
  var w = 0, v, y, Z = (P + "").split("."), H = (n + "").split("."), va = Z.length;
  for (v = H.length; "0" === Z[va - 1];) {
    --va;
  }
  for (; "0" === H[v - 1];) {
    --v;
  }
  for (y = va < v ? va : v; w < y; ++w) {
    var Ha = Z[w] - 0, l = H[w] - 0;
    if (Ha !== l) {
      return Ha > l ? 1 : -1;
    }
  }
  return va > v ? 1 : va === v ? 0 : -1;
};
(function(P, n, w, v, y, Z, H, va) {
  function Ha(z, fa, O) {
    O = Z(z.split(fa)[1]);
    return 0 <= O ? O : 0;
  }
  function l(z, fa) {
    return 0 <= z.indexOf(fa);
  }
  function Ia(z) {
    return l(z, "Linux armv") || l(z, "Linux aarch") || l(z, "Linux i686") || l(z, "Linux x86_64");
  }
  function C(z, fa) {
    for (var O in fa) {
      if (O === z) {
        return !0;
      }
    }
  }
  function q(z, fa) {
    var O = "", oa = -1, La;
    if (z = z.split(fa)[1]) {
      for (; La = z.charCodeAt(++oa);) {
        if (48 <= La && 57 >= La || 46 === La) {
          O += z.charAt(oa);
        } else {
          break;
        }
      }
      for (oa = O.length; oa;) {
        if (46 === O.charCodeAt(--oa)) {
          O = O.substr(0, oa);
        } else {
          break;
        }
      }
    }
    return O;
  }
  function eb(z) {
    for (var fa = arguments, O = 1, oa = fa[0], La; O < fa.length; ++O) {
      0 > za(oa, La = fa[O]) && (oa = La);
    }
    return oa;
  }
  function nb(z) {
    return z === z + "" ? z : z === z - 0 ? "" + z : z.min && z.max ? z.min + "~" + z.max : z.min ? z.min + "~" : "~" + z.max;
  }
  var za = P.conpare, e = v.userAgent, V = v.appVersion, Oa = Z(V) || 0, L = v.platform, M = w.documentElement, ha = M && M.style, sa = w.documentMode, ob = y.width;
  y = y.height;
  var Eb = n.HTMLAudioElement, pb = n.performance, Fb = n.Int8Array, Pa = n.ontouchstart !== va, Aa = q(V, "Version/") || q(e, "Version/"), qb = n.operamini, ea = !qb && n.opera, rb = ea && (ea.version && "function" === typeof ea.version ? ea.version() : eb(q(e, "Opera "), Aa, Oa)), Qa = n.opr, Wa = !ea && (w.all || sa);
  sa = Wa && (sa ? sa : n.XMLHttpRequest ? w.getElementsByTagName ? 7 : 4 : w.compatMode ? 6 : (0).toFixed ? 5.5 : n.attachEvent ? 5 : 4);
  M = !Wa && M.msContentZoomFactor;
  var Ra = !M && (n.chrome || n.chromium), Sa = !Wa && function() {
    for (var z in ha) {
      if (0 === z.indexOf("Moz")) {
        return !0;
      }
    }
  }(), fb = l(e, "UCWEB"), sb = fb && q(e, " U2/"), Vb = fb && q(e, "; wds "), la = q(e.split("_").join("."), "; iPh OS "), aa = q(e, "; Adr "), gb = l(V, "YJApp-ANDROID"), ta = l(L, "Android") || Sa && l(V, "Android") || gb;
  aa = q(L, "Android ") || q(V, "Android ") || q(e, "Android ") || aa;
  var tb = l(L, "Linux"), ub = "MacIntel" === L && v.standalone !== va, Xa = Sa && q(e, "Goanna/"), Da = !Xa && Sa && (q(e, "rv:") || q(e.substr(e.indexOf(") Gecko/") - 11), "; ")), Ya = q(e, "Firefox/"), A = q(e, "Opera/"), hb = n.FNRBrowser, pa = Ha(e, "AppleWebKit/"), r = q(e, "Chrome/"), Ma = q(V, "Iron/"), Gb = q(e, "OPR/"), N = q(V, "KHTML/"), W = q(e.toLowerCase(), "iris");
  q(e, "FxiOS/");
  q(e, "CriOS/");
  q(e, "EdgiOS/");
  var Hb = q(e, "Silk/"), Na = Ha(e, "SamsungBrowser/"), wa = !Na && function() {
    for (var z = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    fa, O = z.length; fa = z[--O];) {
      if (l(e, fa)) {
        return 2 > Z(Aa) ? Aa : 0.9;
      }
    }
    z = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (O = z.length; fa = z[--O];) {
      if (l(e, fa)) {
        return Aa;
      }
    }
  }(), vb = Ra && 534.3 >= pa, ib = Ia(L), qa = ib && !l(e, L) && Ia(e);
  Pa = Pa && (pa || Sa) && qa || !aa && gb;
  gb = !!n.ReactNativeWebView;
  ib = ib && function() {
    for (var z in n) {
      if (0 === z.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Ja = (qa = n.puffinDevice) && qa.clientInfo;
  Ja = (qa = Ja && "iOS" === Ja.os && Ja.osVersion) && Ja.model;
  var wb = !sa && w.registerElement, nc = !sa && w.execCommand, Za = n.webkitCancelAnimationFrame, Wb = tb && wb && "11.0.696.34" === r, Xb = n._firefoxTV_playbackStateObserverJava, Ib = Ha(e, "diordnA ");
  if ("Nitro" === L) {
    var u = 1;
  } else if ("Nintendo DSi" === L) {
    u = 2;
    var t = A;
  } else if ("New Nintendo 3DS" === L || l(e, "iPhone OS 6_0") && 320 === ob && 240 === y) {
    u = 4, t = q(e, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === L) {
    u = 3, t = q(e, "Version/"), pa = 535;
  } else if ("Nintendo Swicth" === L) {
    u = 7, t = q(V, "NintendoBrowser/");
  } else if (n.wiiu) {
    u = 6;
    t = q(V, "NintendoBrowser/");
    var Q = 15, I = q(V, "AppleWebKit/") || (Za ? 536 : 534);
    t || (t = Za ? 4 : 2, l(V, "Macintosh;") || l(V, "Windows NT") && l(V, "Touch"));
  } else if (ea && ea.wiiremote) {
    u = 5, t = q(e, "Wii; U; ; ");
  } else if (A = q(e, "PlayStation Vita ")) {
    u = 10, t = A;
  } else if (A = q(e, "(PlayStation Portable); ")) {
    u = 8;
    t = A;
    var xb = 3.3;
  } else if (A = q(e, "PLAYSTATION 3; ") || q(e, "PLAYSTATION 3 ")) {
    u = 11, t = A, 0 > za("4.10", A) && (Q = 26, I = A);
  } else if (l(e, "Xbox One")) {
    u = 15, t = 1;
  } else if (l(e, "Xbox")) {
    u = 14, t = 1;
  } else if (2 === Oa && l(e, "Sony/COM2/")) {
    u = 17;
    t = 2;
    xb = 3.4;
    var xa = !0;
  } else if (0 === L.indexOf("iP") || la || qa || ub) {
    if (qa) {
      switch(t = qa, Ja.substr(0, 4)) {
        case "iPho":
          var ma = 0;
          q(Ja, ma);
          var ia = !0;
          break;
        case "iPad":
          ma = 1;
          q(Ja, ma);
          var ja = !0;
          break;
        case "iPod":
          ma = 2;
          q(Ja, ma);
          var Yb = !0;
      }
    } else {
      la ? t = la : (t = q(V.split("_").join("."), "OS "), C("isSecureContext", n), C("enableWebGL", n), C("sameOrigin", n));
      if (!t || hb) {
        t = n.PointerEvent ? 13 : n.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : v.sendBeacon ? 11.3 : n.WebAssembly ? 11.2 : n.HTMLMeterElement ? 10.3 : n.Proxy ? 10.2 : n.HTMLPictureElement ? 9.3 : H.isNaN ? 9.2 : n.SharedWorker ? pb && pb.now ? 8.0 : 8.4 : nc ? 7.1 : n.webkitURL ? 6.1 : n.Worker ? 5.1 : Fb ? 4.3 : Eb ? 4.1 : 3.2;
      }
      var na = ob === 1.5 * y || 1.5 * ob === y;
      0 === L.indexOf("iPhone") ? (ma = 0, ia = !0) : 0 === L.indexOf("iPad") || ub ? (ma = 1, ja = !0) : 0 === L.indexOf("iPod") && (ma = 2, Yb = !0);
    }
    Q = !qa && (v.standalone || (ja || 12 > t) && C("webkitFullscreenEnabled", w) || 11 <= t && 13 > t && v.mediaDevices) ? 16 : 17;
    u = 24;
    I = t;
  } else if (l(e, "Kobo")) {
    u = 18, Q = 21, I = 2.2, ta = !0;
  } else if (l(e, "EBRD")) {
    u = 19, Q = 21, I = 2.2;
  } else if (A = q(e, "CrOS x86_64 ") || q(e, "CrOS aarch64 ") || q(e, "CrOS i686 ") || q(e, "CrOS armv7l ")) {
    u = 28, t = A;
  } else if (n.onmoztimechange !== va) {
    u = 29, t = 18.1 > Da ? "1.0.1" : 19 > Da ? 1.1 : 27 > Da ? 1.2 : 29 > Da ? 1.3 : 31 > Da ? 1.4 : 33 > Da ? 2.0 : 35 > Da ? 2.1 : 38 > Da ? 2.2 : 45 > Da ? 2.5 : 2.6, l(e, "Mobile") ? ia = !0 : l(e, "Tablet") ? ja = !0 : l(e, "TV");
  } else if (n.palmGetResource) {
    u = 30, t = q(e, "webOS/") || q(e, "WEBOS") || q(e, "hpwOS/"), l(e, "webOS.TV") || l(e, "/SmartTV") || (ia = !0);
  } else if (A = q(e, "Tizen ")) {
    u = 31, t = A, Q = 24, I = Na, ia = !0;
  } else if (A = q(e, "Windows Phone ") || q(V, "Windows Phone OS ") || Vb) {
    u = 23, t = A, ia = !0;
  } else if (M && "ARM" === L) {
    u = 23, t = 10, ia = !0;
  } else if (Wa && l(V, "ZuneWP")) {
    u = 23, t = 11 === sa ? 8.1 : 10 === sa ? 8 : 9 === sa ? 7.5 : 7 === sa ? 7 : "?", ia = !0;
  } else if (l(e, "FOMA;")) {
    u = 16, ia = !0;
  } else if (l(e, "SoftBank;")) {
    u = 16, ia = !0;
  } else if (l(e, "KFMUWI")) {
    var Ba = !0;
    t = 6.3;
    var ka = ja = !0;
  } else if (l(e, "KFKAWI")) {
    Ba = !0, t = 6, ka = ja = !0;
  } else if (l(e, "KFSUWI") || l(e, "KFAUWI") || l(e, "KFDOWI")) {
    Ba = !0, t = 5, ka = ja = !0;
  } else if (l(e, "KFGIWI")) {
    Ba = !0, t = 5, ka = ja = !0;
  } else if (l(e, "KFARWI") || l(e, "KFSAWA") || l(e, "KFSAWI")) {
    Ba = !0, t = 5 <= Z(aa) ? 5 : 4, ka = ja = !0;
  } else if (l(e, "KFSOWI") || l(e, "KFTHWA") || l(e, "KFTHWI") || l(e, "KFAPWA") || l(e, "KFAPWI")) {
    Ba = !0, t = 3, ka = ja = !0;
  } else if (l(e, "KFOT") || l(e, "KFTT") || l(e, "KFJWA") || l(e, "KFJWI")) {
    Ba = !0, t = 2, ka = ja = !0;
  } else if (l(e, "Kindle Fire")) {
    Ba = !0, t = 1, ka = ja = !0;
  } else if (A = q(e, "Kindle/")) {
    u = 20, t = A, Q = 21, I = 2.2;
  } else if (Xb) {
    Ba = !0, t = aa || Ib, ka = !0;
  } else if (l(e, "AmazonWebAppPlatform") || l(e, "; AFT")) {
    Ba = !0, t = aa, ka = !0;
  } else if (l(e, "MeeGo")) {
    u = 32;
  } else if (l(e, "Maemo")) {
    u = 33;
  } else if (0 === e.indexOf("Windows Mobile;") || W) {
    u = 22, xa = !0;
  } else if ("WinCE" === L) {
    u = 21, xa = !0;
  } else if (0 === L.indexOf("Win")) {
    u = "Win16" === L ? 35 : "Win32" === L ? 36 : "Win64" === L ? 37 : 0, t = q(e, "Windows NT ") || q(e, "Windows ");
  } else if (0 === L.indexOf("Mac")) {
    u = "Mac68K" === L ? 39 : "MacPowerPC" === L || "MacPPC" === L ? 38 : "MacIntel" === L ? 40 : 0;
    if (A = q(e.split("_").join("."), "Mac OS X ")) {
      t = A;
    }
    var $a = !0;
  } else if (l(e, "BlackBerry") || l(e, "BB10")) {
    u = 34, t = Aa, ia = !0;
  } else if (l(e, "SunOS") || l(e, "Sun Solaris")) {
    u = 42;
  } else if (l(e, "FreeBSD")) {
    u = 43;
  } else if (l(e, "OpenBSD")) {
    u = 44;
  } else if (l(e, "NetBSD")) {
    u = 45;
  } else if (ta && Sa) {
    l(e, "Android 4.4;") ? na = {min:2.3} : 4 <= Z(aa) ? na = aa : na = {min:2.2}, t = na;
  } else if (ta && ea) {
    aa ? na = aa : na = {min:1.6}, t = na, l(e, "Tablet") ? ja = !0 : ia = !0;
  } else if (aa) {
    t = aa, ta = !0;
  } else if (tb && Pa || gb || ib) {
    var U = !0;
    Na ? na = {min:4.4} : Ra && !vb || Qa || Gb ? na = {min:4} : (na = aa = ha.touchAction !== va ? {min:5} : wb ? 4.4 : Fb ? v.connection ? n.searchBoxJavaBridge_ || Ra ? H.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= pa ? 3 : 533 <= pa ? Eb ? 2.3 : 2.2 : 530 <= pa ? 2.0 : 1.5, wa && (Q = 24, I = wa));
    t = na;
    ta = !0;
  } else {
    Wb ? (t = {min:5}, U = ta = !0) : tb && (l(e, "Ubuntu") ? u = 46 : (A = q(e, "Mint/")) ? (u = 47, t = A) : (A = q(e, "Fedora/")) ? (u = 48, t = A) : u = l(e, "Gentoo") ? 49 : 50);
  }
  Ba || ta && U && Hb ? u = 27 : ta && (u = u || 26);
  Q || (ka = ka || ta, ea ? (Q = ka || xa || ia || ja ? 9 : 8, I = rb) : Wa ? (na = Ha(V, "Trident/") + 4, Q = xa || ia || ja || Yb ? 3 : $a && 5 <= sa ? 7 : 2, I = sa) : M ? (Q = 23 === u ? 6 : 5, I = q(V, "Edge/")) : Xa ? (Q = 13, I = Xa) : Sa ? (Q = ka ? 12 : 11, I = Da || Ya) : Na ? (Q = 24, I = Na) : (A = xb || q(e, "NetFront/")) ? (Q = 18, I = A) : (A = q(e, "iCab")) ? (Q = 19, I = A) : (A = eb(q(e, "Opera Mini/"), q(e, "Opera Mobi/")) || qb && Aa) ? (Q = 10, I = A, u || (l(e, "iPhone") ? ma = 
  0 : l(e, "iPad") ? ma = 1 : l(e, "iPod") && (ma = 2), ma && (u = 24))) : fb ? (Q = 25, I = sb) : N ? (Q = 14, I = Oa) : ta && vb ? (Q = 21, I = aa) : Ra || Qa || Gb ? (Q = ka ? 22 : 20, I = r || Ma) : ta && wb ? (Q = 23, I = 5 > Z(aa) ? aa : r) : ta && (Aa || U) ? (Q = 21, I = aa) : r ? (Q = ka ? 22 : 20, I = r) : pa && (Q = 15, I = pa));
  u && (P[2] = u, t && (P[3] = nb(t)));
  Q && (P[0] = Q, I && (P[1] = nb(I)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var yb;
Array.prototype.pop || (Array.prototype.pop = function() {
  var P = this[this.length - 1];
  --this.length;
  return P;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var P = arguments, n = 0, w = P.length, v = this.length; n < w; ++n) {
    this[v + n] = P[n];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var P = this[0], n = 1, w = this.length; n < w; ++n) {
    this[n - 1] = this[n];
  }
  --this.length;
  return P;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var P = arguments, n = P.length, w = this.length += n - 1, v = w; v >= n; --v) {
    this[v] = this[v - n];
  }
  for (v = 0; v < n; ++v) {
    this[v] = P[v];
  }
  return w;
});
Array.prototype.splice || (Array.prototype.splice = function(P, n) {
  var w = arguments, v = w.length - 2 - n, y = this.slice(P, P + n), Z;
  if (0 < v) {
    var H = this.length - 1;
    for (Z = P + n; H >= Z; --H) {
      this[H + v] = this[H];
    }
  } else if (0 > v) {
    H = P + n;
    for (Z = this.length; H < Z; ++H) {
      this[H + v] = this[H];
    }
    this.length += v;
  }
  H = 2;
  for (Z = w.length; H < Z; ++H) {
    this[H - 2 + P] = w[H];
  }
  return y;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(P, n) {
  var w = this.length >>> 0;
  if (0 === w) {
    return -1;
  }
  if (n) {
    var v = n || 0;
    v = -Infinity === v ? 0 : (0 > v ? -v : v) | 0;
    if (w <= v) {
      return -1;
    }
  }
  for (v = 0 <= v ? v : 0 < w + v ? w + v : 0; v < w; ++v) {
    if (this[v] === P) {
      return v;
    }
  }
  return -1;
});
(function(P, n, w, v, y, Z, H, va, Ha, l, Ia, C) {
  function q(a) {
    Zb = a;
    k("[pbList] WebFont test result : " + !!a);
    a ? ub() : u ? tb(!0) : u !== C ? ub() : (k("[pbList] Need imageTest " + oc), ed(tb, oc));
    k("window.offscreenBuffering = " + w.offscreenBuffering);
  }
  function eb() {
    eb = C;
    Fc(q, "PB-100", {"PB-100_canTTF":Ea + "pbFont/ttf.css", "PB-100_canWOFF":Ea + "pbFont/woff.css", "PB-100_canEOT":Ea + "pbFont/eot.css", "PB-100_canSVG":Ea + "pbFont/svg.css"}, "pbFont-testCssReady", $b, "i", 5000);
  }
  function nb() {
    if (525 > wa || W && !Hb || 2.2 > M(21) || M(25) || 10 > M(3) || ha(32) || ha(30) || ha(1) || ha(2) || ha(3)) {
      return !1;
    }
    if (Gc) {
      return !0;
    }
    if (2 === pc) {
      var a = Hc();
      var b = Ic(a, "@font-face", {"font-family":'"font"', src:'url("https://")'});
      var c = a.cssText || a.cssRules && a.cssRules[b] && a.cssRules[b].cssText || "";
      var d = c.match("src") && c.match("@font-face");
      k("[webFontTest] webFontTest_testMaybeCanUseWebFont() cssText: " + c);
      k("[webFontTest] webFontTest_testMaybeCanUseWebFont() length: " + (9 > r ? a.rules : a.cssRules).length);
      k("[webFontTest] webFontTest_testMaybeCanUseWebFont() src: " + fd(a, b, "src"));
      Jc(a);
    }
    nb = C;
    return qc = !!d;
  }
  function za() {
    return zb ? rc ? 2 : sc ? 3 : 1 : 0;
  }
  function e(a) {
    tc(w, "load", e);
    e = C;
    rb(I, a, !0);
    I = C;
  }
  function V(a, b) {
    Jb(function() {
      var c = ac(a);
      b(c);
      c.addListener(b);
      return !0;
    });
  }
  function Oa() {
    for (var a, b = 0, c = new Ia() - 0; b < O.length;) {
      c < O[0].t ? ++b : (a = O.splice(b, 1)[0], a.f(a.p));
    }
    jb = O.length ? Ha(Oa, oa) : 0;
  }
  function L() {
    for (var a, b = 0; b < na.length; ++b) {
      a = na[b], a.f();
    }
  }
  function M(a) {
    if (n[0] === a) {
      return pa === pa + "" ? H(pa) : pa;
    }
  }
  function ha(a) {
    var b = n[3];
    if (n[2] === a) {
      return b === b + "" ? H(b) : b;
    }
  }
  function sa() {
    $a && ($a = clearInterval($a));
  }
  function ob() {
    jb && (jb = l(jb));
  }
  function Eb(a, b, c) {
    var d = ["<", a], f = 1, g, h;
    if (b) {
      for (g in b) {
        var p = b[g];
        if (null != p && "" !== p) {
          if ("style" === g) {
            d[++f] = ' style="';
            for (h in p) {
              for (var D = ++f, m, x = [], R = h.split(""), G = R.length; G;) {
                m = R[--G], "A" <= m && "Z" >= m && (m = "-" + m.toLowerCase()), x[G] = m;
              }
              d[D] = x.join("") + ":" + p[h] + ";";
            }
            d[++f] = '"';
          } else {
            "className" === g && (g = "class"), d[++f] = " " + g + '="' + p + '"';
          }
        }
      }
    }
    d[++f] = ">";
    null != c && (Fa && "font" !== a ? d[++f] = "<FONT>" + c + "</FONT>" : d[++f] = c);
    d[++f] = "</" + a + ">";
    return d.join("");
  }
  function pb(a) {
    a = "*" === a && 6 > r ? "*" !== a ? y.all.tags(a.toUpperCase()) : y.all : y.getElementsByTagName(a);
    var b = [], c = 0, d;
    for (d = a.length; c < d; ++c) {
      b[c] = a[c];
    }
    return b;
  }
  function Fb(a) {
    return Fa ? a.parentElement : a.parentNode;
  }
  function Pa(a, b, c, d, f, g) {
    if (Fa) {
      var h = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var p = uc(2 > a ? Ta(b) : b);
      p = 2 > a ? p.indexOf(b) + a : p.length;
      b.insertAdjacentHTML(h, Eb(c, d, f));
      b = uc(b)[p];
      null != f && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Kc) {
      b = y.createElement(Eb(c, d));
    } else {
      b = g ? y.createElementNS("http://www.w3.org/2000/svg", c) : y.createElement(c);
      if (d) {
        for (h in d) {
          if ((c = d[h]) || 0 === c) {
            switch(h) {
              case "class":
              case "className":
                gd(b, c);
                break;
              case "style":
                a = b.style;
                for (p in c) {
                  a[p] = c[p];
                }
                break;
              default:
                bc(b, h, c);
            }
          }
        }
      }
      cc || null != f && Aa(b, f);
    }
    return b;
  }
  function Aa(a, b) {
    if (Fa) {
      return Pa(2, a, "font", C, b);
    }
    var c = y.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function qb(a, b) {
    9 > r ? a.className = b : a.setAttribute("class", b);
  }
  function ea(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function rb(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function Qa(a, b, c) {
    Lc && !Kb.length && U(Wa);
    Kb.push(a, b, c);
  }
  function Wa() {
    var a = Kb, b;
    for (Kb = []; b = a.shift();) {
      rb(b, a.shift(), a.shift());
    }
  }
  function Ra(a) {
    var b = a || event;
    a = Lb[b.type];
    var c = -1, d, f;
    r ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : dc && (b.A = b.stopPropagation, b.stopPropagation = function() {
      f = !0;
    });
    for (; d = a[++c];) {
      d.l === this ? (this.g = d.j, this.g(b), this.g = Ya, this.g = C) : 7.2 > N && this === y && d.l === w && (w.g = d.j, w.g(b), delete w.g);
    }
    if (r) {
      return b.preventDefault = b.stopPropagation = C, b.returnValue;
    }
    dc && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (ec = !0), f && !ec && b.A(), b.A = b.stopPropagation = C);
  }
  function Sa() {
    var a = 9 === Ab.offsetWidth;
    fc !== a && (Qa(xb, fc = a), k("p_cssAvailability:" + fc));
  }
  function fb(a) {
    I || rb(Mc, a);
  }
  function sb(a) {
    for (var b = Mb.length, c; b;) {
      if (c = Mb[--b], c.F === a) {
        return c;
      }
    }
  }
  function Vb() {
    var a = y.styleSheets, b = [], c = 0, d = -1, f;
    if (a) {
      for (f = a.length; c < f; ++c) {
        if (2 > qa || Za && 526 > wa) {
          var g = aa(a[c]);
          g.parentNode && (b[c] = g);
        } else {
          b[c] = aa(a[c]);
        }
      }
    } else {
      for (a = gc("*"), f = a.length; c < f; ++c) {
        g = a[c];
        var h = Nc(g);
        if ("STYLE" === h || "LINK" === h && "text/css" === hc(g, "type")) {
          b[++d] = g;
        }
      }
    }
    return b;
  }
  function la(a) {
    return a.styleSheet || a.sheet;
  }
  function aa(a) {
    return a.owningElement || a.ownerNode;
  }
  function gb(a, b, c) {
    a + "" === a && ("a" === a.charAt(2) && (c = !0, a = a.substr(0, 2)), a = "CS" === a ? 7.2 > N ? 117 : 9 > r || 9 > N || Ma ? 1 : 132 : parseInt(a, 16));
    c && (50 === a && (a = 128), 102 < a && 108 > a && (a += 24));
    return (a - 1) * -(6 * (b || 2));
  }
  function ta(a) {
    this.focus();
    a.preventDefault();
    a.stopPropagation();
  }
  function tb(a) {
    a ? (k("[pbList] Fallback start!"), Nb(A, "pbList-noWebFont")) : k("[pbList] image disabled!");
    ub();
  }
  function ub() {
    for (q = Fc = C; Ua.length;) {
      Xa(Ua.shift(), Ua.shift());
    }
    k("[pbList] complete.");
  }
  function Xa(a, b) {
    function c(D) {
      D = uc(D);
      for (var m = -1, x; x = D[++m];) {
        switch(x.nodeType) {
          case 1:
            c(x);
            break;
          case 3:
            x.data && f(x.data) && g.push(x);
        }
      }
    }
    function d(D) {
      var m = D.children, x = 0, R = m.length;
      if (R) {
        for (; x < R; ++x) {
          d(m[x]);
        }
      } else {
        (m = D.innerText) && f(m) && g.push(D);
      }
    }
    function f(D) {
      return D.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
    }
    var g = [], h;
    if (q) {
      -1 === Ua.indexOf(a) && (Ua.push(a, b), hd && eb && eb());
    } else {
      var p = Ua.indexOf(a);
      0 <= p && Ua.splice(p, 2);
      for (5 > r ? d(a) : c(a); h = g.shift();) {
        p = 5 > r ? h.innerText : h.data, 2 !== Zb && (p = p.split($b).join(Oc)), b ? 5 > r ? h.innerText = p : h.data = p : Da(p.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(id).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(vc).split("&amp;").join("&"), h);
      }
    }
  }
  function Da(a, b) {
    function c(S, J) {
      for (var F = ""; J;) {
        J & 1 && (F += S), J >>= 1, S += S;
      }
      return F;
    }
    function d(S, J, F) {
      for (var Y, wc = -1, Bb, ab; Y = J[++wc];) {
        for (; 0 <= (Bb = S.indexOf(Y));) {
          ab = Y.length, S = S.substr(0, Bb) + c(F, ab) + S.substr(Bb + ab);
        }
      }
      return S;
    }
    function f(S) {
      var J = H(S), F = "" + J;
      return 0 < J && J === J | 0 && (J = S.indexOf(F) + F.length, J <= S.length) ? J : 0;
    }
    var g = " area line str cmd fnc syb".split(" "), h = 5 > r || 1 === b.nodeType, p = [], D = "", m, x = -1, R, G, E;
    if (h) {
      if (xc) {
        var Ka = b.style.visibility;
        Va(b, "visibility", "hidden");
      }
      b.innerHTML = "";
    }
    if (Ob) {
      var ba = b;
      b = y.createDocumentFragment();
    }
    if (function(S) {
      var J = S.indexOf("P");
      if (-1 === J) {
        return !1;
      }
      J = H(S.charAt(J + 1));
      return 0 <= J && 9 >= J;
    }(a)) {
      D = c("+", a.length);
    } else {
      0 <= (m = f(a)) && (D = c("|", m), x = m, --x);
      for (; m = a.charAt(++x);) {
        m === vc || R ? (D += "~", m === vc && (R = !R)) : D += m;
      }
      D = d(D, jd, "^");
      D = d(D, kd, "{");
      D = d(D, ld, "}");
    }
    x = 0;
    for (R = a.length; x < R; ++x) {
      m = a.charAt(x);
      var K = m === Pc;
      var T = " " === m;
      m = K ? " " : m;
      var B = D.charAt(x);
      var X = (G = ca) && K;
      var ca = "|" === B;
      B = g["+|~{}^".indexOf(B) + 1];
      "\n" !== m ? (Zb || !u ? (2 === Zb && a.substr(x, 2) === $b && (m = $b, ++x), B = T && "str" === B ? "pbList-strsp" : K ? "" : !T && B ? "pbList-" + B : "") : (K = kb.indexOf(m), K = -1 === K ? "" : kb.indexOf(m).toString(16).toUpperCase(), K = (K = 1 === K.length ? "0" + K : K) ? "pbChr" + K : "", B = T && "str" === B ? "pbList-strsp" : T || !K ? "" : B ? (K ? K + " " : "") + "pbList-" + B : K), K = C, X ? (m = 6 <= r && 8 > r ? " " : Pc, B = "") : ca && (1.9 > W || 9.5 > N) ? (ca && !G && 
      (E = 4 - (H(a.substr(x)) + "").length), 7.5 > N ? K = bb ? "position:relative;top:-4px;left:" + 12 * E + "px" : {position:"relative", top:"-4px", left:12 * E + "px"} : 1.3 <= W ? (K = bb ? "position:absolute;left:" + 12 * E + "px" : {position:"absolute", left:12 * E + "px"}, ++E) : K = bb ? "position:relative;left:" + 12 * E + "px" : {position:"relative", left:12 * E + "px"}) : T && 7.5 > N && (B = "pbList-strsp"), bb ? p.push("<font" + (B ? ' class="' + B + '"' : "") + (K ? ' style="' + K + 
      '"' : "") + ">" + m + "</font>") : h || Ob ? ra(b, "font", {"class":B, style:K}, m) : Pb(b, "font", {"class":B, style:K}, m)) : (G = ca = !1, bb ? p.push(m) : h || Ob ? yc(b, m) : md(b, m));
    }
    if (h) {
      bb ? b.innerHTML = p.join("") : Ob && ba.appendChild(b), xc && Va(b, "visibility", Ka);
    } else {
      if (bb) {
        g = y.createElement("font");
        for (g.innerHTML = p.join(""); p = g.firstChild;) {
          b.parentNode.insertBefore(p, b);
        }
        Ca(b);
      } else {
        Ob ? ba.parentNode.replaceChild(b, ba) : Ca(b);
      }
    }
  }
  var Ya = v, A = y.body, hb = A.style, pa = n[1], r = M(2) || M(3), Ma = M(7), Gb = M(5) || M(6), N = M(8) || M(9), W = M(11) || M(12), Hb = W && 0 <= n.conpare(pa, "1.9.1"), Na = M(13), wa = M(15), vb = M(16) || M(17), ib = M(10) || M(25), qa = M(20) || M(22), Ja = qa || M(23) || M(21) || M(24), wb = qa && H(Z.userAgent.split("Edg/")[1]), nc = H(Z.appVersion.split("Trident/")[1]) + 4, Za = ha(35) || ha(36) || ha(37), Wb = !r && !Ma && (new va('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  Xb = (Ma ? "ie5mac" : 5.5 > r ? "ie5win" : 6 > r ? "ie55" : 10 > r ? "ie" + (r | 0) : 7.2 > N ? "opr70" : 8 > N ? "opr72" : 9.5 > N ? "opr" + (N | 0) : W && !Hb ? 1.3 <= W ? "gck190" : 1 <= W ? "gck121" : "gck097" : "modern") + ".css";
  ha(1) || ha(2) || ha(3) || ha(4) || ha(8) || ha(9) || ha(10);
  var Ib, u, t, Q = hb.transform !== C ? "transform" : hb["-o-transform"] !== C ? "-o-transform" : hb["-ms-transform"] !== C ? "-ms-transform" : hb.MozTransform !== C ? "-moz-transform" : hb["-webkit-transform"] !== C ? "-webkit-transform" : "", I = [], xb = [], xa = [], ma = [], ia = [];
  k = function(a) {
    ma.push(a);
  };
  yb = function(a) {
    ia.push(a);
  };
  var ja = function(a) {
    na.length || ($a = setInterval(L, Ba));
    na.push({f:a, B:++ka});
    return ka;
  };
  var Yb = function() {
    $a && (sa(), $a = setInterval(L, Ba));
  };
  var na = [], Ba = 500, ka = 0, $a;
  if (5 > r || Ma) {
    w._wdb_onlooptimer = L, L = "_wdb_onlooptimer()";
  }
  var U = function(a, b, c) {
    O.length || (jb = Ha(Oa, oa));
    O.push({f:a, p:b, B:++La, t:new Ia() - 0 + (oa < c ? c : oa)});
    return La;
  };
  var z = function(a) {
    for (var b = O.length, c; c = O[--b];) {
      if (c.B === a) {
        O.splice(b, 1);
        break;
      }
    }
    return 0;
  };
  var fa = function() {
    jb && (ob(), jb = Ha(Oa, oa));
  };
  var O = [], oa = 16, La = 0, jb;
  if (5 > r || Ma) {
    w._wdb_ontimer = Oa, Oa = "_wdb_ontimer()";
  }
  var Fa = 5 > r;
  var lb = pb("html")[0];
  var zc = pb("head")[0];
  var nd = function(a) {
    return w[a] || y[a] || y.getElementById(a);
  };
  var gc = pb;
  var od = function(a) {
    var b = [], c = 0, d, f = -1;
    if (9 > r || !y.getElementsByClassName) {
      var g = 6 > r ? y.all : y.getElementsByTagName("*");
    } else {
      var h = !0;
      g = y.getElementsByClassName(a);
    }
    for (d = g.length; c < d; ++c) {
      var p = g[c];
      if (h || (Fa || 1 === p.nodeType) && ea(p, a)) {
        b[++f] = p;
      }
    }
    return b;
  };
  var Ta = Fb;
  var uc = function(a) {
    a = Fa ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var Qc = function(a) {
    var b = !(7.03 < N && 7.2 > N) && a.children;
    a = b ? b : a.childNodes;
    for (var c = [], d = a.length, f = -1, g; d;) {
      if (g = a[--d], b || 1 === g.nodeType) {
        Fa && "FONT" === g.tagName || (c[++f] = g);
      }
    }
    return c;
  };
  var ra = function(a, b, c, d, f) {
    b = Pa(2, a, b, c, d, f);
    Fa || (a.appendChild(b), cc && null != d && Aa(b, d));
    return b;
  };
  var Pb = function(a, b, c, d, f) {
    b = Pa(0, a, b, c, d, f);
    Fa || (Fb(a).insertBefore(b, a), cc && null != d && Aa(b, d));
    return b;
  };
  var Qb = function(a, b, c, d, f) {
    b = Pa(1, a, b, c, d, f);
    var g;
    Fa || ((g = a.nextSibling) ? Ta(g).insertBefore(b, g) : Ta(a).appendChild(b), cc && null != d && Aa(b, d));
    return b;
  };
  var yc = Aa;
  var md = function(a, b) {
    if (Fa) {
      return Pa(0, a, "font", C, b);
    }
    var c = y.createTextNode("" + b);
    Ta(a).insertBefore(c, a);
    return c;
  };
  var Ca = function(a) {
    Ta(a) ? Fa ? a.outerHTML = "" : Ta(a).removeChild(a) : k("[DOM] p_DOM_remove(), No parentNode!");
  };
  var Kc = 9 > r, cc = Kc;
  var Nc = function(a) {
    return a.tagName.toUpperCase();
  };
  var hc = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var bc = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var ic = function(a, b) {
    a.removeAttribute(b);
  };
  var gd = qb;
  var Nb = function(a, b) {
    var c;
    if (!ea(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      qb(a, c + b);
    }
  };
  var Rc = function(a, b) {
    if (ea(a, b)) {
      var c = a.className.split(" ");
      c.splice(c.indexOf(b), 1);
      qb(a, c.join(" "));
    }
  };
  var Va = function(a, b, c) {
    a.style[b] = c;
  };
  var Sc = function(a, b) {
    var c = -1, d, f;
    if (5.5 > r) {
      if (b) {
        for (d = b.split(";"); f = d[++c];) {
          var g = f.split(":");
          a.style[g[0]] = f.substr(g[0].length + 1);
        }
      } else {
        a.removeAttribute("style");
      }
    } else {
      9 > N || 1 > W ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
    }
  };
  var fc, da, ac = w.matchMedia, Ab, Kb = [], Lc;
  I.push(function() {
    V = C;
    Ab = ra(A, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    Rb(function() {
      Lc = !0;
      Kb.length && U(Wa);
    });
  });
  var jc = function(a, b, c, d) {
    if (Tc) {
      a.addEventListener(b, c, d ? Wb ? d : d.capture : !1);
    } else {
      var f = {l:a, j:c};
      d = Lb[b];
      var g = "on" + b, h, p;
      if (d) {
        for (h = d.length; p = d[--h];) {
          if (p.l === a && p.j === c) {
            return;
          }
        }
        Lb[b].push(f);
      } else {
        Lb[b] = d = [f], Ac || (b = a[g], "function" === typeof b && b !== Ra && d.unshift({l:a, j:b}));
      }
      Ac ? a.attachEvent(g, Ra) : a[g] = Ra;
    }
  };
  var tc = function(a, b, c, d) {
    if (Tc) {
      a.removeEventListener(b, c, d ? Wb ? d : d.capture : !1);
    } else {
      d = Lb[b];
      b = "on" + b;
      var f, g, h;
      if (d) {
        for (f = d.length; g = d[--f];) {
          g.l === a && (g.j === c ? d.splice(f, 1) : h = !0);
        }
        h || (Ac ? a.detachEvent(b, Ra) : (a[b] = Ya, a[b] = null));
      }
    }
  };
  var Lb = {}, Ac = !1, dc = 525.13 > wa, Tc = !dc && !Ma && w.addEventListener, ec;
  dc && lb.addEventListener("click", function(a) {
    if (ec) {
      return ec = !1, a.preventDefault(), !1;
    }
  });
  var Rb = function(a) {
    I ? I.push(a) : alert("Load event has already been dispatched!");
  };
  var Sb = function(a) {
    kc && kc.push(a);
  };
  var kc = [];
  if (419.3 >= wa) {
    var lc = function() {
      if (lc) {
        var a = y.readyState;
        "loaded" === a || "complete" === a ? (lc = C, e()) : U(lc);
      }
    };
    U(lc);
  } else {
    jc(w, "load", e);
  }
  r || 0.9 <= W && 1.8 > W ? jc(w, "unload", function(a) {
    rb(kc, a, !0);
  }) : kc = C;
  var Jb = function(a) {
    xb.push(a);
  };
  Rb(function() {
    Sa();
    ja(Sa);
  });
  var Uc = function(a) {
    xa && xa.push(a);
  };
  var Vc = 60 > W || Na, zb, sc, rc;
  if (89 <= W || 89 <= qa || Za && 79 <= wb || ac && (ac("(forced-colors:none)").matches || ac("(forced-colors:active)").matches)) {
    var Bc = !0;
    V("(forced-colors:active)", function(a) {
      zb = a.matches;
      da = za();
      Qa(xa, da);
      k("(forced-colors:active):" + da);
    });
  } else if (10 <= r || Gb || Za && wb) {
    Bc = !0, V("(-ms-high-contrast:black-on-white)", function(a) {
      zb = sc = a.matches;
      da !== za() && (da = za(), Qa(xa, da), k("(-ms-high-contrast:black-on-white):" + da));
    }), V("(-ms-high-contrast:white-on-black)", function(a) {
      zb = rc = a.matches;
      da !== za() && (da = za(), Qa(xa, da), k("(-ms-high-contrast:white-on-black):" + da));
    }), V("(-ms-high-contrast:active)", function(a) {
      zb = a.matches;
      da !== za() && (da = za(), Qa(xa, da), k("(-ms-high-contrast:active):" + da));
    });
  } else if (Za && (r || W && 0 <= n.conpare(pa, "1.8.1") || Na)) {
    var Cc = function() {
      function a(d, f) {
        if (f && "transparent" === d) {
          return 382.5;
        }
        if ("#" === d.charAt(0)) {
          return parseInt("0x" + d.substr(1, 2), 16) + parseInt("0x" + d.substr(3, 2), 16) + parseInt("0x" + d.substr(5, 2), 16);
        }
        var g = d.split("(")[1].split(",");
        return H(g[0]) + H(g[1]) + H(g[2]);
      }
      var b = y.defaultView;
      var c = b ? b.getComputedStyle(Ab, null) : Ab.currentStyle;
      b = (c && c.color || "").split(" ").join("");
      c = (c && c.backgroundColor || "").split(" ").join("");
      b && (zb = "#123456" !== b && "rgb(18,52,86)" !== b, sc = a(b) < a(c, !0), rc = a(b) > a(c, !0), da !== za() && (da = za(), k("(forced-colors-fallback):" + da), Qa(xa, da, Vc)));
    };
    Jb(function(a) {
      if (a) {
        return Va(Ab, "color", "#123456"), Va(Ab, "backgroundColor", "#123456"), Vc ? (Cc(), xa = C) : ja(Cc), Cc = C, !0;
      }
    });
  } else {
    xa = za = C;
  }
  var Wc = function(a) {
    Mc.push(a);
  };
  var Mc = [], Xc = 0, Yc = 1 > W || 1.2 <= W && 1.8 > W || 7.2 >= N;
  Yc ? ja(function() {
    var a = w.scrollY || A.scrollTop;
    Xc !== a && (Xc = a, fb());
  }) : jc(w, "scroll", fb);
  Sb(function() {
    Yc || tc(w, "scroll", fb);
  });
  var Gc = 9 > r || 525 <= wa && 530 > wa || 2 > qa, pc = 0;
  var Hc = function(a, b) {
    var c = Vb(), d = c.length;
    d = 0 <= b && b < d ? b : d;
    var f = c[d - 1];
    c = c[d];
    if (mb || Cb) {
      var g = c ? Pb(c, "style") : f ? Qb(f, "style") : ra(zc, "style");
      Cb && yc(g, "");
      var h = la(g);
      a && bc(g, "media", a);
    } else if (Db || Tb) {
      h = {D:a, C:d, G:!0};
    }
    if (h) {
      return Mb.push({F:h, h:g, m:[]}), h;
    }
  };
  var Jc = function(a) {
    a = sb(a);
    var b = a.m, c = b.length, d;
    for (a.h && Ca(a.h); d = b[--c];) {
      d.i && Ca(d.i);
    }
    Mb.splice(Mb.indexOf(a), 1);
  };
  var Ic = function(a, b, c, d) {
    var f = sb(a), g = f.h;
    f = f.m;
    var h = "@import" === b, p = "@page" === b, D = "@font-face" === b, m = f.length, x = "", R;
    if (a.imports) {
      var G = a.imports.length;
    } else {
      for (G = 0; G < m && "@import" === f[G].u; ++G) {
      }
    }
    if (h) {
      d = 0 <= d && d < G ? d : G;
      var E = b + ' "' + c + '"';
    } else {
      d = G <= d && d < m ? d : m;
      for (E in c) {
        x += ";" + E + ":" + c[E];
      }
      x = x.substr(1);
      E = b + "{" + x + "}";
      6 <= r && D && (d = m);
    }
    m = {u:b, v:c, o:d, s:d};
    if (9 > r) {
      G = a.rules;
      var Ka = G.length;
      if (D) {
        b = y.createElement("div"), b.innerHTML = '_<style type="text/css"' + (a.media ? ' media="' + a.media + '"' : "") + ">" + E + "</style>", b = b.lastChild, (R = g.nextSibling) ? Ta(g).insertBefore(b, R) : Ta(g).appendChild(b), m.i = b;
      } else {
        h ? a.addImport(c, d) : 5.5 <= r && p || a.addRule(b, x, d);
        m.s = d + (G.length - Ka - 1);
        if (0 === G.length - Ka) {
          return k("[CSSOM] rule\u8ffd\u52a0\u306b\u5931\u6557! " + E), -1;
        }
        k("[CSSOM] rules.length \u306e\u5897\u5206" + (G.length - Ka));
      }
    } else if (mb || Cb) {
      (Za && wa || 28 > qa) && h ? m.i = Qb(g, "link", {href:c, rel:"stylesheet", type:"text/css"}) : Gc && D ? (b = m.i = Qb(g, "style", {type:"text/css", media:a.media}), b.innerText = E) : a.insertRule(E, d);
    }
    f.splice(d, 0, m);
    if (Db || Tb) {
      g = sb(a);
      R = g.m;
      b = g.h;
      c = a.C;
      h = Vb();
      a = h[c - 1];
      c = h[c];
      h = [];
      D = p = -1;
      x = "style";
      m = {type:"text/css", media:g.D};
      for (var ba; G = R[++p];) {
        if (E = G.u, G = G.v, "@import" === E) {
          h[++D] = E + ' "' + G + '"';
        } else {
          h[++D] = E + "{";
          E = "";
          for (ba in G) {
            E += ";" + ba + ":" + G[ba];
          }
          h[++D] = E.substr(1) + "}";
        }
      }
      h = h.join("");
      Db && (h = "data:text/css;charset=utf-8;base64," + Zc(h), m.rel = "stylesheet", m.href = h, x = "link", h = C);
      b ? (g.h = Qb(b, x, m, h), Ca(b)) : (b = c ? Pb(c, x, m, h) : a ? Qb(a, x, m, h) : ra(zc, x, m, h), g.h = b);
    }
    ba = d;
    a = f.length;
    for (g = ba; g < a; ++g) {
      R = f[g], R.i || (b = R.s - R.o, R.o = ba, R.s = ba + b, ba += 1 + b);
    }
    return d;
  };
  var fd = function(a, b, c) {
    b = sb(a).m[b];
    var d;
    if (b) {
      if ("@import" === b.u) {
        var f = b.v;
      } else if (mb || Cb) {
        k("[CSSOM] CSSOM_getRawValueOfRule : " + d + " " + (9 > r ? a.rules : a.cssRules).length + " " + b.o);
        if (a = d = (9 > r ? a.rules : a.cssRules)[b.o]) {
          d = d.style;
          a = [];
          c = c.split("");
          f = 0;
          b = c.length;
          for (var g, h = !1; f < b; ++f) {
            g = c[f], "-" === g ? h = !0 : h ? (a[f] = g.toUpperCase(), h = !1) : a[f] = g;
          }
          a = d[a.join("")];
        }
        f = a;
      } else {
        f = b.v[c];
      }
    }
    return f;
  };
  var Mb = [], Db = 1 > W || 8 <= N && 9 > N, Tb = 7.2 <= N && 8 > N, mb = !!r || !Db && !Tb && function() {
    var a = ra(lb, "style"), b = !!la(a);
    b && (k("[CSSOM] CSSStyleSheet @insertRule : " + !!la(a).insertRule), k("[CSSOM] CSSStyleSheet @addRule : " + !!la(a).addRule), k("[CSSOM] CSSStyleSheet @cssRules : " + !!la(a).cssRules), k("[CSSOM] CSSStyleSheet @rules : " + !!la(a).rules), k("[CSSOM] CSSStyleSheet @cssText : " + ("" === la(a).cssText)));
    Ca(a);
    return b;
  }();
  k("[CSSOM] CSSOM_HAS_STYLESHEET_OBJECT : " + mb);
  var Cb = !mb && wa && !Db && !Tb && function() {
    var a = ra(lb, "style"), b;
    yc(a, "");
    if (b = !!la(a)) {
      k("[CSSOM] CSSStyleSheet @insertRule : " + !!la(a).insertRule), k("[CSSOM] CSSStyleSheet @addRule : " + !!la(a).addRule), k("[CSSOM] CSSStyleSheet @cssRules : " + !!la(a).cssRules), k("[CSSOM] CSSStyleSheet @rules : " + !!la(a).rules), k("[CSSOM] CSSStyleSheet @cssText : " + ("" === la(a).cssText));
    }
    Ca(a);
    return b;
  }();
  mb || k("[CSSOM] CSSOM_HAS_STYLESHEET_WITH_PATCH : " + Cb);
  pc = Db || Tb ? 1 : mb || Cb ? 2 : 0;
  k("[CSSOM] p_CSSOM_canuse : " + pc);
  var Zc;
  (function(a) {
    function b(d) {
      for (var f = c, g = "", h = 0, p; p = d.length;) {
        4 > p && (h = [0, 2, 1, 0][p]), p = d.charCodeAt(0) << 16 | (1 < p ? d.charCodeAt(1) : 0) << 8 | (2 < p ? d.charCodeAt(2) : 0), g += [f[p >>> 18], f[p >>> 12 & 63], 2 <= h ? "=" : f[p >>> 6 & 63], 1 <= h ? "=" : f[p & 63]].join(""), d = d.substr(3);
      }
      return g;
    }
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    a.btoa && (b = a.btoa);
    Zc = b;
  })(this);
  xb.splice(0, 0, function() {
    if (fc) {
      t = 8 <= r || Gb || 9.5 <= N || Hb || Na || 522 <= wa || 3 <= vb || ib || Ja ? 3 : 7.2 <= N ? 2 : 6 <= N || W ? 1 : 0;
      if (!t && !r && !Ma) {
        var a = ra(A, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
        t = 6 <= a.offsetWidth ? 2 : 0;
        Ca(a);
      }
      k("p_cssGeneratedContentGrade:" + t);
      return !0;
    }
  });
  var $c = function(a) {
    function b(f) {
      d = z(d);
      mc = f;
      c.onload = c.onerror = Ya;
      U(a, f);
    }
    if (mc !== C) {
      k("[dataUriTest] already done : " + mc), U(a, mc);
    } else if (8 > r) {
      k("[dataUriTest] trident < 8 : false"), U(a, !1);
    } else {
      k("[dataUriTest] start!");
      var c = new Image(), d = U(function() {
        d && b(!1);
      });
      c.onerror = function() {
        k("[dataUriTest] no DATA URI!");
        b(!1);
      };
      c.onload = function() {
        k("[dataUriTest] DATA URI:" + (1 === c.width * c.height));
        b(1 === c.width * c.height);
      };
      c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    }
  };
  var mc;
  9 > r && Rb(function() {
    var a = ra(A, "div");
    Sc(a, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
    Ib = 1 < a.offsetHeight;
    Sc(a, "");
    Ca(a);
  });
  var ed = function(a, b) {
    function c() {
      if (f || !g || d.complete) {
        k("[imageTest] timer -> img.complete. img.width=" + d.width);
        var h = !!d.width;
        u = u || h;
        U(a, h);
        d.onerror = d.onload = Ya;
        d = a = C;
      } else {
        --g, U(c);
      }
    }
    var d = new Image(), f, g = 99;
    k("[imageTest] start.");
    d.onerror = function() {
      k("[imageTest] error!");
      f = !0;
    };
    d.onload = function() {
      k("[imageTest] onload.");
      f = !0;
    };
    d.src = b;
    U(c);
  };
  var pd = 9 > r || 2 > qa || 12 > N, qd = "bad_" + (new Ia() - 0) + "_", ad = ["sans-serif", "serif"], qc;
  var Fc = function(a, b, c, d, f, g, h) {
    function p(F) {
      a(F);
      J && !F && Jc(J);
      a = B = X = ca = J = C;
    }
    function D() {
      var F = '1.6em "' + b + '"';
      k("[webFontTest] testByNativeFontLoaderAPI start.");
      y.fonts.load(F).then(function(Y) {
        k("[webFontTest] fonts.check() : " + y.fonts.check(F, "i") + ", fonts.length : " + Y.length);
        R(b) ? U(p, S) : (k("[webFontTest] mesureWebFont() : false"), x(!0));
      }, function(Y) {
        k("[webFontTest] fonts.load() rejected! " + Y);
        $c(G);
      });
    }
    function m(F) {
      return y.hidden || y.msHidden || y.mozHidden || y.webkitHidden ? (K = new Ia() - 0, !1) : F < new Ia() - K;
    }
    function x(F) {
      F && (k("[webFontTest] testWebFont start."), K = new Ia() - 0);
      R(b) ? (k("[webFontTest] testWebFont mesurement success : " + S), p(S)) : m(ba) ? (k("[webFontTest] testWebFont timeout!"), T ? p(0) : pd ? U(p, 0) : $c(G)) : U(x);
    }
    function R(F) {
      var Y = 0, wc = -1, Bb = 0;
      if (!ca) {
        var ab = -1;
        var Dc;
        B = ra(A, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
        for (ca = {}; Dc = ad[++ab];) {
          Va(B, "fontFamily", Dc), ca[Dc] = B.offsetWidth;
        }
      }
      for (5 > r ? B || (B = ra(A, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : A.appendChild(B); ab = ad[++wc];) {
        if (Va(B, "fontFamily", '"' + F + '",' + ab), B.offsetWidth !== ca[ab]) {
          Y = 1;
          break;
        }
      }
      !r && Y && f && (B.innerHTML = f, F = B.offsetWidth, B.innerHTML = g, Bb = F === B.offsetWidth ? 1 : 0, B.innerHTML = "mmmmmmmmmmlli");
      Ca(B);
      5 > r && (B = C);
      return S = Y + Bb;
    }
    function G(F) {
      k("[webFontTest] onTestDataURIComplete : " + F);
      (T = F) ? E(!0) : p(0);
    }
    function E(F) {
      var Y;
      F && (K = new Ia() - 0);
      for (Y in c) {
        R(Y) ? (k("[webFontTest] success! " + Y), X = ra(A, "div", {"aria-hidden":"true", className:d, id:d}), J = Hc(), Ic(J, "@import", c[Y]), U(Ka, !0)) : m(100) ? (k("[webFontTest] timeout! " + Y), delete c[Y], U(E, !0)) : U(E);
        return;
      }
      p(0);
    }
    function Ka(F) {
      F && (k("[webFontTest] testImportedCssReady start!"), b = b.replace(qd, ""), k("[webFontTest] targetWebFontName : " + b), K = new Ia() - 0);
      1 < X.offsetWidth ? (k("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + X.offsetWidth), Ca(X), ba = 100, U(x, !0)) : m(ba) ? 528 > wa ? (k("[webFontTest] testImportedCssReady ended. elmDiv.offsetWidth=" + X.offsetWidth), Ca(X), ba = 100, U(x, !0)) : (k("[webFontTest] testImportedCssReady timeout!"), Ca(X), p(0)) : U(Ka);
    }
    var ba = h || 5000, K, T, B, X, ca, S, J;
    nb || qc ? qc || nb() ? (k("[webFontTest] webFontTest_testMaybeCanUseWebFont() : true"), !y.fonts || 603 > wa ? (k("[webFontTest] No native font loader."), x(!0)) : (k("[webFontTest] Use Native font loader."), D())) : (k("[webFontTest] webFontTest_testMaybeCanUseWebFont() : false"), U(p, 0)) : (k("[webFontTest] webFontTest_maybeCanUseWebFont : false"), U(p, 0));
  };
  var ya = String.fromCharCode, kb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ya(960), ")", "(", ya(234), ya(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", ya(9824), "\u2190", ya(9829), ya(9830), ya(9827), ya(956), "\u03a9", "\u2193", "\u2192", "%", ya(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", ya(9619)], bd = (9 === r || W && 0 <= n.conpare(pa, "1.8.1") || Na) && !Bc, cb = [], db, Ga, Ub = 7.2 > N ? function() {
    db = !db;
    for (var a = -1, b; b = cb[++a];) {
      -1 !== b.className.indexOf("pbAlp") ? Va(b, "display", db ? "" : "none") : (Nb(b, db ? "pbChrCS" : "pbChr00"), Rc(b, db ? "pbChr00" : "pbChrCS"));
    }
  } : bd ? function() {
    db = !db;
    for (var a = -1, b; b = cb[++a];) {
      Va(b, "opacity", db ? 1 : 0);
    }
  } : C;
  var Ec = P.startBlinkingIfCursor = function(a) {
    Ub ? ea(a, "pbChrCS") && (Ga || !N && !da || (Ga = setInterval(Ub, 400)), -1 === cb.indexOf(a) && cb.push(a)) : cb = C;
  };
  P.stopBlinkingIfCursor = function(a) {
    Ub && (a = cb.indexOf(a), 0 <= a && (cb.splice(a, 1), !cb.length && Ga && (clearInterval(Ga), Ga = 0)));
  };
  bd && Uc(function(a) {
    a ? Ga || (Ga = setInterval(Ub, 400)) : Ga && (clearInterval(Ga), Ga = 0);
  });
  Ub && Sb(function() {
    Ga && clearInterval(Ga);
  });
  Bc || Uc(function(a) {
    a ? (bc(lb, "forced-colors", 2 === a ? "lod" : 3 === a ? "dol" : "active"), (Q || 9 === r || 5.5 <= r && 9 > r && Ib) && Nb(lb, "jsCanRotate")) : (ic(lb, "forced-colors"), Rc(lb, "jsCanRotate"));
  });
  Jb(function(a) {
    if (a) {
      a = od("pbChrCS");
      for (var b = 0, c = a.length; b < c; ++b) {
        Ec(a[b]);
      }
      return !0;
    }
  });
  var cd = [];
  Jb(function(a) {
    function b(T) {
      var B = hc(T, "pbTip"), X = B.charAt(0), ca = "_" === X;
      B = ca ? B.charAt(2) : X;
      X = ca ? "Btm" : "";
      var S = hc(T, "title");
      h || (ic(T, "pbTip"), ic(T, "title"), Nb(T, "pbTipPos" + B.toUpperCase()), ra(T, "div", {className:"pbTip" + X, style:{width:S.length + d + "em"}}, S));
      ra(T, "div", {className:"pbTail" + X});
      p && ca && (T.focus(), T.blur());
    }
    function c(T, B) {
      var X = hc(T, "pbGhst"), ca = T.className, S = ca.split("pbCsr")[1] || "", J = ca.split("pbAlp")[1] || "";
      if ("CS" === X) {
        var F = "_";
      } else {
        F = X, 3 === F.length && (F = F.substr(0, 2)), F = kb[parseInt(F, 16)] || "~";
      }
      var Y;
      S = S.split(" ")[0];
      if (J = H(J.split(" ")[0])) {
        f && (ca = ca.split("pbChr")[1].split(" ")[0], Va(T, "backgroundPosition", gb(ca, 2, Ka) + "px " + -24 * (10 - J) + "px")), !B && g && Pb(T, "a").appendChild(T);
      }
      X && (J = 10 - J, f && (Y = {backgroundPosition:gb(X, 2, Ka) + "px " + -24 * (10 - J) + "px"}), ic(T, "pbGhst"), x = Pb(T, "b", {className:"pbChr" + X + " pbCsr" + S + " pbAlp" + J, style:Y}, F), Ec(x));
      Ec(T);
    }
    if (a) {
      var d = 6 > r ? 2 : 0, f = 7.2 > N, g = 1.1 === W;
      a = gc("SAMP");
      var h = 8 === r, p = 5 <= r && 6 > r, D = t, m, x, R, G, E;
      Ib && Nb(A, "pbLCD-AX");
      if (a.length) {
        for (R = -1; m = a[++R];) {
          if (ea(Ta(m), "pbLCD")) {
            var Ka = ea(m, "PB-120") || ea(m, "FX-795P");
            var ba = Qc(m);
            for (m = ba.length; E = ba[--m];) {
              switch(Nc(E)) {
                case "A":
                  (2 > D || h) && b(E);
                  if (2 > D) {
                    var K = Qc(E);
                    for (G = K.length; G;) {
                      c(K[--G], !0);
                    }
                  }
                  ib ? bc(E, "href", "javascript:void(0)") : (jc(E, "click", ta), cd.push(E));
                  break;
                case "B":
                  2 > D && c(E, !1);
              }
            }
          }
        }
      }
      return !0;
    }
  });
  Sb(function() {
    for (var a; a = cd.shift();) {
      tc(a, "click", ta);
    }
  });
  6 === r && (new va("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(y);
  var vc = kb[7], Oc = kb[30], id = kb[113], $b = ya(8337) + ya(8331), Pc = ya(160);
  ya(8194);
  var kd = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), ld = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), jd = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + Oc + kb[31]).split(""), Ua = [], Zb, oc, hd;
  Jb(function(a) {
    if (a) {
      oc = 1 > Ea + W ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
      a = gc("*");
      for (var b = -1, c; c = a[++b];) {
        ea(c, "pbList") ? Xa(c) : ea(c, "pbFont") && Xa(c, !0);
      }
      Ua.length && (k("[pbList] " + Ua.length / 2 + " elements found. WebFont test start."), eb());
      return !0;
    }
  });
  var bb = !1, xc = 8 > N, Ob = !bb && !xc && !(6 > r) && y.createDocumentFragment && !!A.replaceChild;
  P.prettify = Xa;
  var dd = y.scripts || gc("script");
  var Ea = dd[dd.length - 1].src.split("/");
  --Ea.length;
  (Ea = Ea.join("/")) && (Ea += "/");
  k("[p_assetUrl] " + Ea);
  Rb(function() {
    var a;
    (a = nd("logger")) || alert("#logger not found!");
    a ? (k = function(b) {
      ra(a, "P", C, b);
    }, yb = function(b) {
      ra(a, "P", {style:{color:"red"}}, b);
    }, w.onerror = function(b, c, d) {
      yb(b + ", " + c + ", " + d);
      return !0;
    }) : w.console ? (k = console.log, yb = console.error) : N ? (k = Ya, yb = opera.postError) : k = yb = Ya;
    for (; ma.length;) {
      k(ma.shift());
    }
    for (; ia.length;) {
      k(ia.shift());
    }
    ma = ia = C;
  });
  6.1 > vb && Wc(Yb);
  Sb(sa);
  6.1 > vb && Wc(fa);
  Sb(ob);
  10 > r && (11 !== nc || 5 !== r) || (9 > N || 1 > W || !Ma && !w.addEventListener ? y.write('<link href="' + Ea + Xb + '" rel="stylesheet"' + (8 > N ? "" : ' media="screen,handheld,projection,print"') + ">") : Rb(function() {
    ra(zc, "link", {href:Ea + "" + Xb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

