PB100={};ua = [];
ua.conpare = function(Y, q) {
  var A = 0, w, F, oa = (Y + "").split("."), Q = (q + "").split("."), Ma = oa.length;
  for (w = Q.length; "0" === oa[Ma - 1];) {
    --Ma;
  }
  for (; "0" === Q[w - 1];) {
    --w;
  }
  for (F = Ma < w ? Ma : w; A < F; ++A) {
    var Wa = oa[A] - 0, m = Q[A] - 0;
    if (Wa !== m) {
      return Wa > m ? 1 : -1;
    }
  }
  return Ma > w ? 1 : Ma === w ? 0 : -1;
};
(function(Y, q, A, w, F, oa, Q, Ma) {
  function Wa(B, pa, ka) {
    ka = oa(B.split(pa)[1]);
    return 0 <= ka ? ka : 0;
  }
  function m(B, pa) {
    return 0 <= B.indexOf(pa);
  }
  function eb(B) {
    return m(B, "Linux armv") || m(B, "Linux aarch") || m(B, "Linux i686") || m(B, "Linux x86_64");
  }
  function N(B, pa) {
    for (var ka in pa) {
      if (ka === B) {
        return !0;
      }
    }
  }
  function g(B, pa) {
    var ka = "", Na = -1, Xa;
    if (B = B.split(pa)[1]) {
      for (; Xa = B.charCodeAt(++Na);) {
        if (48 <= Xa && 57 >= Xa || 46 === Xa) {
          ka += B.charAt(Na);
        } else {
          break;
        }
      }
      for (Na = ka.length; Na;) {
        if (46 === ka.charCodeAt(--Na)) {
          ka = ka.substr(0, Na);
        } else {
          break;
        }
      }
    }
    return ka;
  }
  function ta(B) {
    for (var pa = arguments, ka = 1, Na = pa[0], Xa; ka < pa.length; ++ka) {
      0 > Ga(Na, Xa = pa[ka]) && (Na = Xa);
    }
    return Na;
  }
  function Ib(B) {
    return B === B + "" ? B : B === B - 0 ? "" + B : B.min && B.max ? B.min + "~" + B.max : B.min ? B.min + "~" : "~" + B.max;
  }
  var Ga = Y.conpare, d = w.userAgent, aa = w.appVersion, kb = oa(aa) || 0, O = w.platform, v = A.documentElement, Ya = v && v.style, Ha = A.documentMode, R = F.width;
  F = F.height;
  var ea = q.HTMLAudioElement, yb = q.performance, qb = q.Int8Array, Ia = q.ontouchstart !== Ma, Za = g(aa, "Version/") || g(d, "Version/"), Jb = q.operamini, ya = !Jb && q.opera, Sb = ya && (ya.version && "function" === typeof ya.version ? ya.version() : ta(g(d, "Opera "), Za, kb)), Kb = q.opr, rb = !ya && (A.all || Ha);
  Ha = rb && (Ha ? Ha : q.XMLHttpRequest ? A.getElementsByTagName ? 7 : 4 : A.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  v = !rb && v.msContentZoomFactor;
  var fb = !v && (q.chrome || q.chromium), ib = !rb && function() {
    for (var B in Ya) {
      if (0 === B.indexOf("Moz")) {
        return !0;
      }
    }
  }(), zb = m(d, "UCWEB"), Lb = zb && g(d, " U2/"), sb = zb && g(d, "; wds "), lb = g(d.split("_").join("."), "; iPh OS "), qa = g(d, "; Adr "), gb = m(aa, "YJApp-ANDROID"), Ca = m(O, "Android") || ib && m(aa, "Android") || gb;
  qa = g(O, "Android ") || g(aa, "Android ") || g(d, "Android ") || qa;
  var Sa = m(O, "Linux"), Ab = "MacIntel" === O && w.standalone !== Ma, Bb = ib && g(d, "Goanna/"), Oa = !Bb && ib && (g(d, "rv:") || g(d.substr(d.indexOf(") Gecko/") - 11), "; ")), fa = g(d, "Firefox/"), S = g(d, "Opera/"), Cb = q.FNRBrowser, $a = Wa(d, "AppleWebKit/"), mb = g(d, "Chrome/"), Pb = g(aa, "Iron/"), Mb = g(d, "OPR/"), tb = g(aa, "KHTML/"), Qb = g(d.toLowerCase(), "iris");
  g(d, "FxiOS/");
  g(d, "CriOS/");
  g(d, "EdgiOS/");
  var ab = g(d, "Silk/"), hb = Wa(d, "SamsungBrowser/"), Db = !hb && function() {
    for (var B = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    pa, ka = B.length; pa = B[--ka];) {
      if (m(d, pa)) {
        return 2 > oa(Za) ? Za : 0.9;
      }
    }
    B = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (ka = B.length; pa = B[--ka];) {
      if (m(d, pa)) {
        return Za;
      }
    }
  }(), va = fb && 534.3 >= $a, bb = eb(O), Ja = bb && !m(d, O) && eb(d);
  Ia = Ia && ($a || ib) && Ja || !qa && gb;
  gb = !!q.ReactNativeWebView;
  bb = bb && function() {
    for (var B in q) {
      if (0 === B.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var Pa = (Ja = q.puffinDevice) && Ja.clientInfo;
  Pa = (Ja = Pa && "iOS" === Pa.os && Pa.osVersion) && Pa.model;
  var Eb = !Ha && A.registerElement, Da = !Ha && A.execCommand, Fb = q.webkitCancelAnimationFrame, ub = Sa && Eb && "11.0.696.34" === mb, vb = q._firefoxTV_playbackStateObserverJava, wb = Wa(d, "diordnA ");
  if ("Nitro" === O) {
    var y = 1;
  } else if ("Nintendo DSi" === O) {
    y = 2;
    var u = S;
  } else if ("New Nintendo 3DS" === O || m(d, "iPhone OS 6_0") && 320 === R && 240 === F) {
    y = 4, u = g(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === O) {
    y = 3, u = g(d, "Version/"), $a = 535;
  } else if ("Nintendo Swicth" === O) {
    y = 7, u = g(aa, "NintendoBrowser/");
  } else if (q.wiiu) {
    y = 6;
    u = g(aa, "NintendoBrowser/");
    var P = 15, W = g(aa, "AppleWebKit/") || (Fb ? 536 : 534);
    u || (u = Fb ? 4 : 2, m(aa, "Macintosh;") || m(aa, "Windows NT") && m(aa, "Touch"));
  } else if (ya && ya.wiiremote) {
    y = 5, u = g(d, "Wii; U; ; ");
  } else if (S = g(d, "PlayStation Vita ")) {
    y = 10, u = S;
  } else if (S = g(d, "(PlayStation Portable); ")) {
    y = 8;
    u = S;
    var Ta = 3.3;
  } else if (S = g(d, "PLAYSTATION 3; ") || g(d, "PLAYSTATION 3 ")) {
    y = 11, u = S, 0 > Ga("4.10", S) && (P = 26, W = S);
  } else if (m(d, "Xbox One")) {
    y = 15, u = 1;
  } else if (m(d, "Xbox")) {
    y = 14, u = 1;
  } else if (2 === kb && m(d, "Sony/COM2/")) {
    y = 17;
    u = 2;
    Ta = 3.4;
    var nb = !0;
  } else if (0 === O.indexOf("iP") || lb || Ja || Ab) {
    if (Ja) {
      switch(u = Ja, Pa.substr(0, 4)) {
        case "iPho":
          var wa = 0;
          g(Pa, wa);
          var xa = !0;
          break;
        case "iPad":
          wa = 1;
          g(Pa, wa);
          var na = !0;
          break;
        case "iPod":
          wa = 2;
          g(Pa, wa);
          var jb = !0;
      }
    } else {
      lb ? u = lb : (u = g(aa.split("_").join("."), "OS "), N("isSecureContext", q), N("enableWebGL", q), N("sameOrigin", q));
      if (!u || Cb) {
        u = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : w.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : Q.isNaN ? 9.2 : q.SharedWorker ? yb && yb.now ? 8.0 : 8.4 : Da ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : qb ? 4.3 : ea ? 4.1 : 3.2;
      }
      var Ea = R === 1.5 * F || 1.5 * R === F;
      0 === O.indexOf("iPhone") ? (wa = 0, xa = !0) : 0 === O.indexOf("iPad") || Ab ? (wa = 1, na = !0) : 0 === O.indexOf("iPod") && (wa = 2, jb = !0);
    }
    P = !Ja && (w.standalone || (na || 12 > u) && N("webkitFullscreenEnabled", A) || 11 <= u && 13 > u && w.mediaDevices) ? 16 : 17;
    y = 24;
    W = u;
  } else if (m(d, "Kobo")) {
    y = 18, P = 21, W = 2.2, Ca = !0;
  } else if (m(d, "EBRD")) {
    y = 19, P = 21, W = 2.2;
  } else if (S = g(d, "CrOS x86_64 ") || g(d, "CrOS aarch64 ") || g(d, "CrOS i686 ") || g(d, "CrOS armv7l ")) {
    y = 28, u = S;
  } else if (q.onmoztimechange !== Ma) {
    y = 29, u = 18.1 > Oa ? "1.0.1" : 19 > Oa ? 1.1 : 27 > Oa ? 1.2 : 29 > Oa ? 1.3 : 31 > Oa ? 1.4 : 33 > Oa ? 2.0 : 35 > Oa ? 2.1 : 38 > Oa ? 2.2 : 45 > Oa ? 2.5 : 2.6, m(d, "Mobile") ? xa = !0 : m(d, "Tablet") ? na = !0 : m(d, "TV");
  } else if (q.palmGetResource) {
    y = 30, u = g(d, "webOS/") || g(d, "WEBOS") || g(d, "hpwOS/"), m(d, "webOS.TV") || m(d, "/SmartTV") || (xa = !0);
  } else if (S = g(d, "Tizen ")) {
    y = 31, u = S, P = 24, W = hb, xa = !0;
  } else if (S = g(d, "Windows Phone ") || g(aa, "Windows Phone OS ") || sb) {
    y = 23, u = S, xa = !0;
  } else if (v && "ARM" === O) {
    y = 23, u = 10, xa = !0;
  } else if (rb && m(aa, "ZuneWP")) {
    y = 23, u = 11 === Ha ? 8.1 : 10 === Ha ? 8 : 9 === Ha ? 7.5 : 7 === Ha ? 7 : "?", xa = !0;
  } else if (m(d, "FOMA;")) {
    y = 16, xa = !0;
  } else if (m(d, "SoftBank;")) {
    y = 16, xa = !0;
  } else if (m(d, "KFMUWI")) {
    var za = !0;
    u = 6.3;
    var ra = na = !0;
  } else if (m(d, "KFKAWI")) {
    za = !0, u = 6, ra = na = !0;
  } else if (m(d, "KFSUWI") || m(d, "KFAUWI") || m(d, "KFDOWI")) {
    za = !0, u = 5, ra = na = !0;
  } else if (m(d, "KFGIWI")) {
    za = !0, u = 5, ra = na = !0;
  } else if (m(d, "KFARWI") || m(d, "KFSAWA") || m(d, "KFSAWI")) {
    za = !0, u = 5 <= oa(qa) ? 5 : 4, ra = na = !0;
  } else if (m(d, "KFSOWI") || m(d, "KFTHWA") || m(d, "KFTHWI") || m(d, "KFAPWA") || m(d, "KFAPWI")) {
    za = !0, u = 3, ra = na = !0;
  } else if (m(d, "KFOT") || m(d, "KFTT") || m(d, "KFJWA") || m(d, "KFJWI")) {
    za = !0, u = 2, ra = na = !0;
  } else if (m(d, "Kindle Fire")) {
    za = !0, u = 1, ra = na = !0;
  } else if (S = g(d, "Kindle/")) {
    y = 20, u = S, P = 21, W = 2.2;
  } else if (vb) {
    za = !0, u = qa || wb, ra = !0;
  } else if (m(d, "AmazonWebAppPlatform") || m(d, "; AFT")) {
    za = !0, u = qa, ra = !0;
  } else if (m(d, "MeeGo")) {
    y = 32;
  } else if (m(d, "Maemo")) {
    y = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || Qb) {
    y = 22, nb = !0;
  } else if ("WinCE" === O) {
    y = 21, nb = !0;
  } else if (0 === O.indexOf("Win")) {
    y = "Win16" === O ? 35 : "Win32" === O ? 36 : "Win64" === O ? 37 : 0, u = g(d, "Windows NT ") || g(d, "Windows ");
  } else if (0 === O.indexOf("Mac")) {
    y = "Mac68K" === O ? 39 : "MacPowerPC" === O || "MacPPC" === O ? 38 : "MacIntel" === O ? 40 : 0;
    if (S = g(d.split("_").join("."), "Mac OS X ")) {
      u = S;
    }
    var Nb = !0;
  } else if (m(d, "BlackBerry") || m(d, "BB10")) {
    y = 34, u = Za, xa = !0;
  } else if (m(d, "SunOS") || m(d, "Sun Solaris")) {
    y = 42;
  } else if (m(d, "FreeBSD")) {
    y = 43;
  } else if (m(d, "OpenBSD")) {
    y = 44;
  } else if (m(d, "NetBSD")) {
    y = 45;
  } else if (Ca && ib) {
    m(d, "Android 4.4;") ? Ea = {min:2.3} : 4 <= oa(qa) ? Ea = qa : Ea = {min:2.2}, u = Ea;
  } else if (Ca && ya) {
    qa ? Ea = qa : Ea = {min:1.6}, u = Ea, m(d, "Tablet") ? na = !0 : xa = !0;
  } else if (qa) {
    u = qa, Ca = !0;
  } else if (Sa && Ia || gb || bb) {
    var sa = !0;
    hb ? Ea = {min:4.4} : fb && !va || Kb || Mb ? Ea = {min:4} : (Ea = qa = Ya.touchAction !== Ma ? {min:5} : Eb ? 4.4 : qb ? w.connection ? q.searchBoxJavaBridge_ || fb ? Q.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= $a ? 3 : 533 <= $a ? ea ? 2.3 : 2.2 : 530 <= $a ? 2.0 : 1.5, Db && (P = 24, W = Db));
    u = Ea;
    Ca = !0;
  } else {
    ub ? (u = {min:5}, sa = Ca = !0) : Sa && (m(d, "Ubuntu") ? y = 46 : (S = g(d, "Mint/")) ? (y = 47, u = S) : (S = g(d, "Fedora/")) ? (y = 48, u = S) : y = m(d, "Gentoo") ? 49 : 50);
  }
  za || Ca && sa && ab ? y = 27 : Ca && (y = y || 26);
  P || (ra = ra || Ca, ya ? (P = ra || nb || xa || na ? 9 : 8, W = Sb) : rb ? (Ea = Wa(aa, "Trident/") + 4, P = nb || xa || na || jb ? 3 : Nb && 5 <= Ha ? 7 : 2, W = Ha) : v ? (P = 23 === y ? 6 : 5, W = g(aa, "Edge/")) : Bb ? (P = 13, W = Bb) : ib ? (P = ra ? 12 : 11, W = Oa || fa) : hb ? (P = 24, W = hb) : (S = Ta || g(d, "NetFront/")) ? (P = 18, W = S) : (S = g(d, "iCab")) ? (P = 19, W = S) : (S = ta(g(d, "Opera Mini/"), g(d, "Opera Mobi/")) || Jb && Za) ? (P = 10, W = S, y || (m(d, "iPhone") ? 
  wa = 0 : m(d, "iPad") ? wa = 1 : m(d, "iPod") && (wa = 2), wa && (y = 24))) : zb ? (P = 25, W = Lb) : tb ? (P = 14, W = kb) : Ca && va ? (P = 21, W = qa) : fb || Kb || Mb ? (P = ra ? 22 : 20, W = mb || Pb) : Ca && Eb ? (P = 23, W = 5 > oa(qa) ? qa : mb) : Ca && (Za || sa) ? (P = 21, W = qa) : mb ? (P = ra ? 22 : 20, W = mb) : $a && (P = 15, W = $a));
  y && (Y[2] = y, u && (Y[3] = Ib(u)));
  P && (Y[0] = P, W && (Y[1] = Ib(W)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var Y = this[this.length - 1];
  --this.length;
  return Y;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var Y = arguments, q = 0, A = Y.length, w = this.length; q < A; ++q) {
    this[w + q] = Y[q];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var Y = this[0], q = 1, A = this.length; q < A; ++q) {
    this[q - 1] = this[q];
  }
  --this.length;
  return Y;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var Y = arguments, q = Y.length, A = this.length += q - 1, w = A; w >= q; --w) {
    this[w] = this[w - q];
  }
  for (w = 0; w < q; ++w) {
    this[w] = Y[w];
  }
  return A;
});
Array.prototype.splice || (Array.prototype.splice = function(Y, q) {
  var A = arguments, w = A.length - 2 - q, F = this.slice(Y, Y + q), oa;
  if (0 < w) {
    var Q = this.length - 1;
    for (oa = Y + q; Q >= oa; --Q) {
      this[Q + w] = this[Q];
    }
  } else if (0 > w) {
    Q = Y + q;
    for (oa = this.length; Q < oa; ++Q) {
      this[Q + w] = this[Q];
    }
    this.length += w;
  }
  Q = 2;
  for (oa = A.length; Q < oa; ++Q) {
    this[Q - 2 + Y] = A[Q];
  }
  return F;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(Y, q) {
  var A = this.length >>> 0;
  if (0 === A) {
    return -1;
  }
  if (q) {
    var w = q || 0;
    w = -Infinity === w ? 0 : (0 > w ? -w : w) | 0;
    if (A <= w) {
      return -1;
    }
  }
  for (w = 0 <= w ? w : 0 < A + w ? A + w : 0; w < A; ++w) {
    if (this[w] === Y) {
      return w;
    }
  }
  return -1;
});
(function(Y, q, A, w, F, oa, Q, Ma, Wa, m, eb, N) {
  function g(p) {
    if (q[0] === p) {
      return O === O + "" ? Q(O) : O;
    }
  }
  function ta(p) {
    var H = q[3];
    if (q[2] === p) {
      return H === H + "" ? Q(H) : H;
    }
  }
  function Ib(p, H, ma) {
    p + "" === p && ("a" === p.charAt(2) && (ma = !0, p = p.substr(0, 2)), p = "CS" === p ? 7.2 > R ? 117 : 9 > v || 9 > R || Ya ? 1 : 132 : parseInt(p, 16));
    ma && (50 === p && (p = 128), 102 < p && 108 > p && (p += 24));
    return (p - 1) * -(6 * (H || 2));
  }
  var Ga = F.body, d = Ga.style, aa, kb, O = q[1], v = g(2) || g(3), Ya = g(7), Ha = g(5) || g(6), R = g(8) || g(9), ea = g(11) || g(12), yb = ea && 0 <= q.conpare(O, "1.9.1"), qb = g(13), Ia = g(15), Za = g(16) || g(17), Jb = g(10) || g(25), ya = g(20) || g(22), Sb = ya || g(23) || g(21) || g(24), Kb = ya && Q(oa.userAgent.split("Edg/")[1]), rb = Q(oa.appVersion.split("Trident/")[1]) + 4, fb = ta(35) || ta(36) || ta(37), ib = !v && !Ya && (new Ma('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), 
  zb = (Ya ? "ie5mac" : 5.5 > v ? "ie5win" : 6 > v ? "ie55" : 10 > v ? "ie" + (v | 0) : 7.2 > R ? "opr70" : 8 > R ? "opr72" : 9.5 > R ? "opr" + (R | 0) : ea && !yb ? 1.3 <= ea ? "gck190" : 1 <= ea ? "gck121" : "gck097" : "modern") + ".css";
  ta(1) || ta(2) || ta(3) || ta(4) || ta(8) || ta(9) || ta(10);
  var Lb, sb, lb, qa = d.transform !== N ? "transform" : d["-o-transform"] !== N ? "-o-transform" : d["-ms-transform"] !== N ? "-ms-transform" : d.MozTransform !== N ? "-moz-transform" : d["-webkit-transform"] !== N ? "-webkit-transform" : "", gb = [], Ca = [], Sa = [], Ab, Bb, Oa, fa, S, Cb, $a, mb, Pb, Mb;
  (function() {
    function p() {
      for (var c, f = 0, l = new eb() - 0; f < J.length;) {
        l < J[0].t ? ++f : (c = J.splice(f, 1)[0], c.f(c.p));
      }
      b = J.length ? Wa(p, h) : 0;
    }
    function H() {
      for (var c, f = 0; f < T.length; ++f) {
        c = T[f], c.f();
      }
    }
    function ma() {
      C && (C = clearInterval(C));
    }
    function ha() {
      b && (b = m(b));
    }
    Cb = function(c) {
      T.length || (C = setInterval(H, D));
      T.push({f:c, v:++M});
      return M;
    };
    $a = function() {
      C && (ma(), C = setInterval(H, D));
    };
    mb = ma;
    var T = [], D = 500, M = 0, C;
    if (5 > v || Ya) {
      A._wdb_onlooptimer = H, H = "_wdb_onlooptimer()";
    }
    fa = function(c, f, l) {
      J.length || (b = Wa(p, h));
      J.push({f:c, p:f, v:++a, t:new eb() - 0 + (h < l ? l : h)});
      return a;
    };
    S = function(c) {
      for (var f = J.length, l; l = J[--f];) {
        if (l.v === c) {
          J.splice(f, 1);
          break;
        }
      }
      return 0;
    };
    Pb = function() {
      b && (ha(), b = Wa(p, h));
    };
    Mb = ha;
    var J = [], h = 16, a = 0, b;
    if (5 > v || Ya) {
      A._wdb_ontimer = p, p = "_wdb_ontimer()";
    }
  })();
  var tb, Qb, ab, hb, Db, va, bb, Ja, Pa, Eb, Da, Fb, ub, vb, wb, y, u, P, W, Ta, nb;
  (function() {
    function p(a, b, c) {
      var f = ["<", a], l = 1, n, G;
      if (b) {
        for (n in b) {
          var K = b[n];
          if (null != K && "" !== K) {
            if ("style" === n) {
              f[++l] = ' style="';
              for (G in K) {
                for (var U = ++l, Z, X = [], L = G.split(""), V = L.length; V;) {
                  Z = L[--V], "A" <= Z && "Z" >= Z && (Z = "-" + Z.toLowerCase()), X[V] = Z;
                }
                f[U] = X.join("") + ":" + K[G] + ";";
              }
              f[++l] = '"';
            } else {
              "className" === n && (n = "class"), f[++l] = " " + n + '="' + K + '"';
            }
          }
        }
      }
      f[++l] = ">";
      null != c && (C && "font" !== a ? f[++l] = "<FONT>" + c + "</FONT>" : f[++l] = c);
      f[++l] = "</" + a + ">";
      return f.join("");
    }
    function H(a) {
      a = "*" === a && 6 > v ? "*" !== a ? F.all.tags(a.toUpperCase()) : F.all : F.getElementsByTagName(a);
      var b = [], c = 0, f;
      for (f = a.length; c < f; ++c) {
        b[c] = a[c];
      }
      return b;
    }
    function ma(a) {
      return C ? a.parentElement : a.parentNode;
    }
    function ha(a, b, c, f, l, n) {
      if (C) {
        var G = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
        var K = hb(2 > a ? ab(b) : b);
        K = 2 > a ? K.indexOf(b) + a : K.length;
        b.insertAdjacentHTML(G, p(c, f, l));
        b = hb(b)[K];
        null != l && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
      } else if (J) {
        b = F.createElement(p(c, f));
      } else {
        b = n ? F.createElementNS("http://www.w3.org/2000/svg", c) : F.createElement(c);
        if (f) {
          for (G in f) {
            if ((c = f[G]) || 0 === c) {
              switch(G) {
                case "class":
                case "className":
                  y(b, c);
                  break;
                case "style":
                  a = b.style;
                  for (K in c) {
                    a[K] = c[K];
                  }
                  break;
                default:
                  vb(b, G, c);
              }
            }
          }
        }
        h || null != l && T(b, l);
      }
      return b;
    }
    function T(a, b) {
      if (C) {
        return ha(2, a, "font", N, b);
      }
      var c = F.createTextNode("" + b);
      a.appendChild(c);
      return c;
    }
    function D(a, b) {
      9 > v ? a.className = b : a.setAttribute("class", b);
    }
    function M(a, b) {
      return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
    }
    var C = 5 > v;
    aa = H("html")[0];
    kb = H("head")[0];
    tb = H;
    Qb = function(a) {
      var b = [], c = 0, f, l = -1;
      if (9 > v || !F.getElementsByClassName) {
        var n = 6 > v ? F.all : F.getElementsByTagName("*");
      } else {
        var G = !0;
        n = F.getElementsByClassName(a);
      }
      for (f = n.length; c < f; ++c) {
        var K = n[c];
        if (G || (C || 1 === K.nodeType) && M(K, a)) {
          b[++l] = K;
        }
      }
      return b;
    };
    ab = ma;
    hb = function(a) {
      a = C ? a.children : a.childNodes;
      for (var b = [], c = a.length; c;) {
        b[--c] = a[c];
      }
      return b;
    };
    Db = function(a) {
      var b = !(7.03 < R && 7.2 > R) && a.children;
      a = b ? b : a.childNodes;
      for (var c = [], f = a.length, l = -1, n; f;) {
        if (n = a[--f], b || 1 === n.nodeType) {
          C && "FONT" === n.tagName || (c[++l] = n);
        }
      }
      return c;
    };
    va = function(a, b, c, f, l) {
      b = ha(2, a, b, c, f, l);
      C || (a.appendChild(b), h && null != f && T(b, f));
      return b;
    };
    bb = function(a, b, c, f, l) {
      b = ha(0, a, b, c, f, l);
      C || (ma(a).insertBefore(b, a), h && null != f && T(b, f));
      return b;
    };
    Ja = function(a, b, c, f, l) {
      b = ha(1, a, b, c, f, l);
      var n;
      C || ((n = a.nextSibling) ? ab(n).insertBefore(b, n) : ab(a).appendChild(b), h && null != f && T(b, f));
      return b;
    };
    Pa = T;
    Eb = function(a, b) {
      if (C) {
        return ha(0, a, "font", N, b);
      }
      var c = F.createTextNode("" + b);
      ab(a).insertBefore(c, a);
      return c;
    };
    Da = function(a) {
      C ? a.outerHTML = "" : ab(a).removeChild(a);
    };
    var J = 9 > v, h = J;
    Fb = function(a) {
      return a.tagName.toUpperCase();
    };
    ub = function(a, b) {
      return a.getAttribute(b) || "";
    };
    vb = function(a, b, c) {
      a.setAttribute(b, c);
    };
    wb = function(a, b) {
      a.removeAttribute(b);
    };
    y = D;
    u = M;
    P = function(a, b) {
      var c;
      if (!M(a, b)) {
        if (c = a.className) {
          b = " " + b;
        }
        D(a, c + b);
      }
    };
    W = function(a, b) {
      if (M(a, b)) {
        var c = a.className.split(" ");
        c.splice(c.indexOf(b), 1);
        D(a, c.join(" "));
      }
    };
    Ta = function(a, b, c) {
      a.style[b] = c;
    };
    nb = function(a, b) {
      var c = -1, f, l;
      if (5.5 > v) {
        if (b) {
          for (f = b.split(";"); l = f[++c];) {
            var n = l.split(":");
            a.style[n[0]] = l.substr(n[0].length + 1);
          }
        } else {
          a.removeAttribute("style");
        }
      } else {
        9 > R || 1 > ea ? b ? a.setAttribute("style", b) : a.removeAttribute("style") : a.style.cssText = b;
      }
    };
  })();
  var wa, xa, na, jb, Ea, za, ra, Nb, sa, B;
  (function() {
    function p() {
      return L ? t ? 2 : V ? 3 : 1 : 0;
    }
    function H(e) {
      xa(A, "load", H);
      H = N;
      ha(gb, e, !0);
      na = gb = N;
    }
    function ma(e, k) {
      za(function() {
        var E = h(e);
        k(E);
        E.addListener(k);
        return !0;
      });
    }
    function ha(e, k, E) {
      for (var r = 0; r < e.length; ++r) {
        !0 === e[r](k) && (e.splice(r, 1), --r);
      }
      E && (e.length = 0);
    }
    function T(e, k, E) {
      c && !b.length && fa(D);
      b.push(e, k, E);
    }
    function D() {
      var e = b, k;
      for (b = []; k = e.shift();) {
        ha(k, e.shift(), e.shift());
      }
    }
    function M(e) {
      var k = e || event;
      e = f[k.type];
      var E = -1, r, x;
      v ? (k.preventDefault = function() {
        k.returnValue = !1;
      }, k.stopPropagation = function() {
        k.cancelBubble = !0;
      }) : n && (k.u = k.stopPropagation, k.stopPropagation = function() {
        x = !0;
      });
      for (; r = e[++E];) {
        r.l === this ? (this.g = r.j, this.g(k), this.g = w, this.g = N) : 7.2 > R && this === F && r.l === A && (A.g = r.j, A.g(k), delete A.g);
      }
      if (v) {
        return k.preventDefault = k.stopPropagation = N, k.returnValue;
      }
      n && (k.defaultPrevented && "click" === k.type && "A" === k.target.tagName && (K = !0), x && !K && k.u(), k.u = k.stopPropagation = N);
    }
    function C() {
      var e = 9 === a.offsetWidth;
      Nb !== e && T(Ca, Nb = e);
    }
    function J(e) {
      gb || ha(da, e);
    }
    var h = A.matchMedia, a, b = [], c;
    gb.push(function() {
      ma = N;
      a = va(Ga, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
      na(function() {
        c = !0;
        b.length && fa(D);
      });
    });
    wa = function(e, k, E, r) {
      if (G) {
        e.addEventListener(k, E, r ? ib ? r : r.capture : !1);
      } else {
        var x = {l:e, j:E};
        r = f[k];
        var I = "on" + k, Aa, cb;
        if (r) {
          for (Aa = r.length; cb = r[--Aa];) {
            if (cb.l === e && cb.j === E) {
              return;
            }
          }
          f[k].push(x);
        } else {
          f[k] = r = [x], l || (k = e[I], "function" === typeof k && k !== M && r.unshift({l:e, j:k}));
        }
        l ? e.attachEvent(I, M) : e[I] = M;
      }
    };
    xa = function(e, k, E, r) {
      if (G) {
        e.removeEventListener(k, E, r ? ib ? r : r.capture : !1);
      } else {
        r = f[k];
        k = "on" + k;
        var x, I, Aa;
        if (r) {
          for (x = r.length; I = r[--x];) {
            I.l === e && (I.j === E ? r.splice(x, 1) : Aa = !0);
          }
          Aa || (l ? e.detachEvent(k, M) : (e[k] = w, e[k] = null));
        }
      }
    };
    var f = {}, l = !1, n = 525.13 > Ia, G = !n && !Ya && A.addEventListener, K;
    n && aa.addEventListener("click", function(e) {
      if (K) {
        return K = !1, e.preventDefault(), !1;
      }
    });
    na = function(e) {
      gb.push(e);
    };
    jb = function(e) {
      U && U.push(e);
    };
    var U = [];
    if (419.3 >= Ia) {
      var Z = function() {
        if (Z) {
          var e = F.readyState;
          "loaded" === e || "complete" === e ? (Z = N, H()) : fa(Z);
        }
      };
      fa(Z);
    } else {
      wa(A, "load", H);
    }
    v || 1.8 > ea ? wa(A, "unload", function(e) {
      ha(U, e, !0);
    }) : U = N;
    za = function(e) {
      Ca.push(e);
    };
    na(function() {
      C();
      Cb(C);
    });
    ra = function(e) {
      Sa && Sa.push(e);
    };
    var X = 60 > ea || qb, L, V, t;
    if (89 <= ea || 89 <= ya || fb && 79 <= Kb || h && (h("(forced-colors:none)").matches || h("(forced-colors:active)").matches)) {
      B = !0, ma("(forced-colors:active)", function(e) {
        L = e.matches;
        sa = p();
        T(Sa, sa);
      });
    } else if (10 <= v || Ha || fb && Kb) {
      B = !0, ma("(-ms-high-contrast:black-on-white)", function(e) {
        L = V = e.matches;
        sa !== p() && (sa = p(), T(Sa, sa));
      }), ma("(-ms-high-contrast:white-on-black)", function(e) {
        L = t = e.matches;
        sa !== p() && (sa = p(), T(Sa, sa));
      }), ma("(-ms-high-contrast:active)", function(e) {
        L = e.matches;
        sa !== p() && (sa = p(), T(Sa, sa));
      });
    } else if (fb && (v || ea && 0 <= q.conpare(O, "1.8.1") || qb)) {
      var z = function() {
        function e(r, x) {
          if (x && "transparent" === r) {
            return 382.5;
          }
          if ("#" === r.charAt(0)) {
            return parseInt("0x" + r.substr(1, 2), 16) + parseInt("0x" + r.substr(3, 2), 16) + parseInt("0x" + r.substr(5, 2), 16);
          }
          var I = r.split("(")[1].split(",");
          return Q(I[0]) + Q(I[1]) + Q(I[2]);
        }
        var k = F.defaultView;
        var E = k ? k.getComputedStyle(a, null) : a.currentStyle;
        k = (E && E.color || "").split(" ").join("");
        E = (E && E.backgroundColor || "").split(" ").join("");
        k && (L = "#123456" !== k && "rgb(18,52,86)" !== k, V = e(k) < e(E, !0), t = e(k) > e(E, !0), sa !== p() && (sa = p(), T(Sa, sa, X)));
      };
      za(function(e) {
        if (e) {
          return Ta(a, "color", "#123456"), Ta(a, "backgroundColor", "#123456"), X ? (z(), Sa = N) : Cb(z), z = N, !0;
        }
      });
    } else {
      Sa = p = N;
    }
    Ea = function(e) {
      da.push(e);
    };
    var da = [], Ka = 0, Fa = 1 > ea || 1.2 <= ea && 1.8 > ea || 7.2 >= R;
    Fa ? Cb(function() {
      var e = A.scrollY || Ga.scrollTop;
      Ka !== e && (Ka = e, J());
    }) : wa(A, "scroll", J);
    jb(function() {
      Fa || xa(A, "scroll", J);
    });
  })();
  var pa = 9 > v || 525 <= Ia && 530 > Ia || 2 > ya, ka = 0, Na, Xa, Tb;
  (function() {
    function p(h) {
      for (var a = ha.length, b; a;) {
        if (b = ha[--a], b.D === h) {
          return b;
        }
      }
    }
    function H() {
      var h = F.styleSheets, a = [], b = 0, c = -1, f;
      if (h) {
        for (f = h.length; b < f; ++b) {
          if (2 > ya || fb && 526 > Ia) {
            var l = ma(h[b]);
            l.parentNode && (a[b] = l);
          } else {
            a[b] = ma(h[b]);
          }
        }
      } else {
        for (h = tb("*"), f = h.length; b < f; ++b) {
          l = h[b];
          var n = Fb(l);
          if ("STYLE" === n || "LINK" === n && "text/css" === ub(l, "type")) {
            a[++c] = l;
          }
        }
      }
      return a;
    }
    function ma(h) {
      return h.owningElement || h.ownerNode;
    }
    Na = function(h, a) {
      var b = H(), c = b.length;
      c = 0 <= a && a < c ? a : c;
      var f = b[c - 1];
      b = b[c];
      if (M || C) {
        var l = b ? bb(b, "style") : f ? Ja(f, "style") : va(kb, "style");
        C && Pa(l, "");
        var n = l.styleSheet || l.sheet;
        h && vb(l, "media", h);
      } else if (T || D) {
        n = {C:h, B:c, G:!0};
      }
      if (n) {
        return ha.push({D:n, h:l, m:[]}), n;
      }
    };
    Xa = function(h) {
      h = p(h);
      var a = h.m, b = a.length, c;
      for (h.h && Da(h.h); c = a[--b];) {
        c.i && Da(c.i);
      }
      ha.splice(ha.indexOf(h), 1);
    };
    Tb = function(h, a, b, c) {
      var f = p(h), l = f.h;
      f = f.m;
      var n = "@import" === a, G = "@page" === a, K = "@font-face" === a, U = f.length, Z = "", X;
      if (h.imports) {
        var L = h.imports.length;
      } else {
        for (L = 0; L < U && "@import" === f[L].A; ++L) {
        }
      }
      if (n) {
        c = 0 <= c && c < L ? c : L;
        var V = a + ' "' + b + '"';
      } else {
        c = L <= c && c < U ? c : U;
        for (V in b) {
          Z += ";" + V + ":" + b[V];
        }
        Z = Z.substr(1);
        V = a + "{" + Z + "}";
        6 <= v && K && (c = U);
      }
      U = {A:a, F:b, s:c, o:c};
      if (9 > v) {
        L = h.rules;
        var t = L.length;
        if (K) {
          a = F.createElement("div"), a.innerHTML = '_<style type="text/css"' + (h.media ? ' media="' + h.media + '"' : "") + ">" + V + "</style>", a = a.lastChild, (X = l.nextSibling) ? ab(l).insertBefore(a, X) : ab(l).appendChild(a), U.i = a;
        } else {
          if (n ? h.addImport(b, c) : 5.5 <= v && G || h.addRule(a, Z, c), U.o = c + (L.length - t - 1), 0 === L.length - t) {
            return -1;
          }
        }
      } else if (M || C) {
        (fb && Ia || 28 > ya) && n ? U.i = Ja(l, "link", {href:b, rel:"stylesheet", type:"text/css"}) : pa && K ? (a = U.i = Ja(l, "style", {type:"text/css", media:h.media}), a.innerText = V) : h.insertRule(V, c);
      }
      f.splice(c, 0, U);
      if (T || D) {
        l = p(h);
        X = l.m;
        a = l.h;
        b = h.B;
        n = H();
        h = n[b - 1];
        b = n[b];
        n = [];
        K = G = -1;
        Z = "style";
        U = {type:"text/css", media:l.C};
        for (var z; L = X[++G];) {
          if (V = L.A, L = L.F, "@import" === V) {
            n[++K] = V + ' "' + L + '"';
          } else {
            n[++K] = V + "{";
            V = "";
            for (z in L) {
              V += ";" + z + ":" + L[z];
            }
            n[++K] = V.substr(1) + "}";
          }
        }
        n = n.join("");
        T && (n = "data:text/css;charset=utf-8;base64," + J(n), U.rel = "stylesheet", U.href = n, Z = "link", n = N);
        a ? (l.h = Ja(a, Z, U, n), Da(a)) : (a = b ? bb(b, Z, U, n) : h ? Ja(h, Z, U, n) : va(kb, Z, U, n), l.h = a);
      }
      z = c;
      h = f.length;
      for (l = z; l < h; ++l) {
        X = f[l], X.i || (a = X.o - X.s, X.s = z, X.o = z + a, z += 1 + a);
      }
      return c;
    };
    var ha = [], T = 1 > ea || 8 <= R && 9 > R, D = 7.2 <= R && 8 > R, M = !!v || !T && !D && function() {
      var h = va(aa, "style"), a = !(!h.styleSheet && !h.sheet);
      Da(h);
      return a;
    }(), C = !M && Ia && !T && !D && function() {
      var h = va(aa, "style");
      Pa(h, "");
      var a = !(!h.styleSheet && !h.sheet);
      Da(h);
      return a;
    }();
    ka = T || D ? 1 : M || C ? 2 : 0;
    var J;
    (function(h) {
      function a(c) {
        for (var f = b, l = "", n = 0, G; G = c.length;) {
          4 > G && (n = [0, 2, 1, 0][G]), G = c.charCodeAt(0) << 16 | (1 < G ? c.charCodeAt(1) : 0) << 8 | (2 < G ? c.charCodeAt(2) : 0), l += [f[G >>> 18], f[G >>> 12 & 63], 2 <= n ? "=" : f[G >>> 6 & 63], 1 <= n ? "=" : f[G & 63]].join(""), c = c.substr(3);
        }
        return l;
      }
      var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      h.btoa && (a = h.btoa);
      J = a;
    })(this);
  })();
  (function() {
    function p() {
      if (525 > Ia || ea && !yb || 2.2 > g(21) || g(25) || 10 > g(3) || ta(32) || ta(30) || ta(1) || ta(2) || ta(3)) {
        return !1;
      }
      if (pa) {
        return !0;
      }
      if (2 === ka) {
        var D = Na();
        var M = Tb(D, "@font-face", {"font-family":'"font"', src:'url("https://")'});
        M = D.cssText || D.cssRules && D.cssRules[M] && D.cssRules[M].cssText || "";
        M = M.match("src") && M.match("@font-face");
        Xa(D);
      }
      p = N;
      return T = !!M;
    }
    Ca.splice(0, 0, function() {
      if (Nb) {
        lb = 8 <= v || Ha || 9.5 <= R || yb || qb || 522 <= Ia || 3 <= Za || Jb || Sb ? 3 : 7.2 <= R ? 2 : 6 <= R || ea ? 1 : 0;
        if (!lb && !v && !Ya) {
          var D = va(Ga, "a", {"aria-hidden":"true", id:"jsCanUseContent"});
          lb = 6 <= D.offsetWidth ? 2 : 0;
          Da(D);
        }
        return !0;
      }
    });
    Ab = function(D) {
      function M(h) {
        J = S(J);
        H = h;
        C.onload = C.onerror = w;
        fa(D, h);
      }
      if (H !== N) {
        fa(D, H);
      } else if (8 > v) {
        fa(D, !1);
      } else {
        var C = new Image(), J = fa(function() {
          J && M(!1);
        });
        C.onerror = function() {
          M(!1);
        };
        C.onload = function() {
          M(1 === C.width * C.height);
        };
        C.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      }
    };
    var H;
    9 > v && na(function() {
      var D = va(Ga, "div");
      nb(D, "position:absolute;top:0;left:0;width:1px;height:1px;line-height:1px;filter:dropshadow() progid:DXImageTransform.Microsoft.Shadow()");
      Lb = 1 < D.offsetHeight;
      nb(D, "");
      Da(D);
    });
    Bb = function(D, M) {
      function C() {
        if (h || !a || J.complete) {
          var b = !!J.width;
          sb = sb || b;
          fa(D, b);
          J.onerror = J.onload = w;
          J = D = N;
        } else {
          --a, fa(C);
        }
      }
      var J = new Image(), h, a = 99;
      J.onerror = function() {
        h = !0;
      };
      J.onload = function() {
        h = !0;
      };
      J.src = M;
      fa(C);
    };
    var ma = 9 > v || 2 > ya || 12 > R, ha = ["sans-serif", "serif"], T;
    Oa = function(D, M, C, J, h, a, b) {
      function c(e) {
        D(e);
        Fa && !e && Xa(Fa);
        D = t = z = da = Fa = N;
      }
      function f() {
        F.fonts.load('1.6em "' + M + '"').then(function() {
          G(M) ? fa(c, Ka) : n(!0);
        }, function() {
          Ab(K);
        });
      }
      function l(e) {
        return F.hidden || F.msHidden || F.mozHidden || F.webkitHidden ? (L = new eb() - 0, !1) : e < new eb() - L;
      }
      function n(e) {
        e && (L = new eb() - 0);
        G(M) ? c(Ka) : l(X) ? V ? c(0) : ma ? fa(c, 0) : Ab(K) : fa(n);
      }
      function G(e) {
        var k = 0, E = -1, r = 0;
        if (!da) {
          var x = -1;
          var I;
          t = va(Ga, "span", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli");
          for (da = {}; I = ha[++x];) {
            Ta(t, "fontFamily", I), da[I] = t.offsetWidth;
          }
        }
        for (5 > v ? t || (t = va(Ga, "span", {style:{position:"absolute", top:0, left:0, visibility:"hidden", fontSize:"72px"}}, "mmmmmmmmmmlli")) : Ga.appendChild(t); x = ha[++E];) {
          if (Ta(t, "fontFamily", '"' + e + '",' + x), t.offsetWidth !== da[x]) {
            k = 1;
            break;
          }
        }
        !v && k && h && (t.innerHTML = h, e = t.offsetWidth, t.innerHTML = a, r = e === t.offsetWidth ? 1 : 0, t.innerHTML = "mmmmmmmmmmlli");
        Da(t);
        5 > v && (t = N);
        return Ka = k + r;
      }
      function K(e) {
        (V = e) ? U(!0) : c(0);
      }
      function U(e) {
        var k;
        e && (L = new eb() - 0);
        for (k in C) {
          G(k) ? (z = va(Ga, "div", {"aria-hidden":"true", className:J, id:J}), Fa = Na(), Tb(Fa, "@import", C[k]), fa(Z, !0)) : l(100) ? (delete C[k], fa(U, !0)) : fa(U);
          return;
        }
        c(0);
      }
      function Z(e) {
        e && (L = new eb() - 0);
        1 < z.offsetWidth ? (Da(z), X = 100, fa(n, !0)) : l(X) ? 528 > Ia ? (Da(z), X = 100, fa(n, !0)) : (Da(z), c(0)) : fa(Z);
      }
      var X = b || 5000, L, V, t, z, da, Ka, Fa;
      p || T ? T || p() ? !F.fonts || 603 > Ia ? n(!0) : f() : fa(c, 0) : fa(c, 0);
    };
  })();
  var Qa = String.fromCharCode, xb = [" ", "+", "-", "*", "/", "\u2191", "!", '"', "#", "$", ">", "\u2267", "=", "\u2266", "<", "\u2260", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", Qa(960), ")", "(", Qa(234), Qa(8337), "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "", "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
  "y", "z", "", "", "?", ",", ";", ":", "\u25cb", "\u03a3", "\u00b0", "\u25b3", "@", "\u00d7", "\u00f7", Qa(9824), "\u2190", Qa(9829), Qa(9830), Qa(9827), Qa(956), "\u03a9", "\u2193", "\u2192", "%", Qa(165), "\u25a1", "[", "&", "_", "'", "\uff65", "]", "\u25a0", "\\", Qa(9619)], Xb = (9 === v || ea && 0 <= q.conpare(O, "1.8.1") || qb) && !B, ob = [], pb, Va, Ob = 7.2 > R ? function() {
    pb = !pb;
    for (var p = -1, H; H = ob[++p];) {
      -1 !== H.className.indexOf("pbAlp") ? Ta(H, "display", pb ? "" : "none") : (P(H, pb ? "pbChrCS" : "pbChr00"), W(H, pb ? "pbChr00" : "pbChrCS"));
    }
  } : Xb ? function() {
    pb = !pb;
    for (var p = -1, H; H = ob[++p];) {
      Ta(H, "opacity", pb ? 1 : 0);
    }
  } : N;
  var Ub = Y.startBlinkingIfCursor = function(p) {
    Ob ? u(p, "pbChrCS") && (Va || !R && !sa || (Va = setInterval(Ob, 400)), -1 === ob.indexOf(p) && ob.push(p)) : ob = N;
  };
  Y.stopBlinkingIfCursor = function(p) {
    Ob && (p = ob.indexOf(p), 0 <= p && (ob.splice(p, 1), !ob.length && Va && (clearInterval(Va), Va = 0)));
  };
  Xb && ra(function(p) {
    p ? Va || (Va = setInterval(Ob, 400)) : Va && (clearInterval(Va), Va = 0);
  });
  Ob && jb(function() {
    Va && clearInterval(Va);
  });
  B || ra(function(p) {
    p ? (vb(aa, "forced-colors", 2 === p ? "lod" : 3 === p ? "dol" : "active"), (qa || 9 === v || 5.5 <= v && 9 > v && Lb) && P(aa, "jsCanRotate")) : (wb(aa, "forced-colors"), W(aa, "jsCanRotate"));
  });
  (function() {
    function p(t) {
      (K = t) ? T() : sb ? ha(!0) : sb !== N ? T() : Bb(ha, U);
    }
    function H() {
      H = N;
      Oa(p, "PB-100", {"PB-100_canTTF":db + "pbFont/ttf.css", "PB-100_canWOFF":db + "pbFont/woff.css", "PB-100_canEOT":db + "pbFont/eot.css", "PB-100_canSVG":db + "pbFont/svg.css"}, "pbFont-testCssReady", b, "i", 5000);
    }
    function ma(t) {
      this.focus();
      t.preventDefault();
      t.stopPropagation();
    }
    function ha(t) {
      t && P(Ga, "pbList-noWebFont");
      T();
    }
    function T() {
      for (p = Oa = N; G.length;) {
        D(G.shift(), G.shift());
      }
    }
    function D(t, z) {
      function da(r) {
        r = hb(r);
        for (var x = -1, I; I = r[++x];) {
          switch(I.nodeType) {
            case 1:
              da(I);
              break;
            case 3:
              I.data && Fa(I.data) && e.push(I);
          }
        }
      }
      function Ka(r) {
        var x = r.children, I = 0, Aa = x.length;
        if (Aa) {
          for (; I < Aa; ++I) {
            Ka(x[I]);
          }
        } else {
          (x = r.innerText) && Fa(x) && e.push(r);
        }
      }
      function Fa(r) {
        return r.split("\r").join("").split("\n").join("").split("\t").join("").split("\f").join("").split("\b").join("").split(" ").join("");
      }
      var e = [], k;
      if (p) {
        -1 === G.indexOf(t) && (G.push(t, z), Z && H && H());
      } else {
        var E = G.indexOf(t);
        0 <= E && G.splice(E, 2);
        for (5 > v ? Ka(t) : da(t); k = e.shift();) {
          E = 5 > v ? k.innerText : k.data, 2 !== K && (E = E.split(b).join(h)), z ? 5 > v ? k.innerText = E : k.data = E : M(E.split("\r\n").join("\n").split("\r").join("\n").split("&yen;").join(a).split("&lt;").join("<").split("&gt;").join(">").split("&quot;").join(J).split("&amp;").join("&"), k);
        }
      }
    }
    function M(t, z) {
      function da(la, ba) {
        for (var La = ""; ba;) {
          ba & 1 && (La += la), ba >>= 1, la += la;
        }
        return La;
      }
      function Ka(la, ba, La) {
        for (var Gb, Zb = -1, Vb, Wb; Gb = ba[++Zb];) {
          for (; 0 <= (Vb = la.indexOf(Gb));) {
            Wb = Gb.length, la = la.substr(0, Vb) + da(La, Wb) + la.substr(Vb + Wb);
          }
        }
        return la;
      }
      function Fa(la) {
        var ba = Q(la), La = "" + ba;
        return 0 < ba && ba === ba | 0 && (ba = la.indexOf(La) + La.length, ba <= la.length) ? ba : 0;
      }
      var e = " area line str cmd fnc syb".split(" "), k = 5 > v || 1 === z.nodeType, E = [], r = "", x, I = -1, Aa, cb, Ba;
      if (k) {
        if (L) {
          var Rb = z.style.visibility;
          Ta(z, "visibility", "hidden");
        }
        z.innerHTML = "";
      }
      if (V) {
        var Hb = z;
        z = F.createDocumentFragment();
      }
      if (function(la) {
        var ba = la.indexOf("P");
        if (-1 === ba) {
          return !1;
        }
        ba = Q(la.charAt(ba + 1));
        return 0 <= ba && 9 >= ba;
      }(t)) {
        r = da("+", t.length);
      } else {
        0 <= (x = Fa(t)) && (r = da("|", x), I = x, --I);
        for (; x = t.charAt(++I);) {
          x === J || Aa ? (r += "~", x === J && (Aa = !Aa)) : r += x;
        }
        r = Ka(r, n, "^");
        r = Ka(r, f, "{");
        r = Ka(r, l, "}");
      }
      I = 0;
      for (Aa = t.length; I < Aa; ++I) {
        x = t.charAt(I);
        var ca = x === c;
        var ia = " " === x;
        x = ca ? " " : x;
        var ja = r.charAt(I);
        var Ua = (cb = Ra) && ca;
        var Ra = "|" === ja;
        ja = e["+|~{}^".indexOf(ja) + 1];
        "\n" !== x ? (K || !sb ? (2 === K && t.substr(I, 2) === b && (x = b, ++I), ja = ia && "str" === ja ? "pbList-strsp" : ca ? "" : !ia && ja ? "pbList-" + ja : "") : (ca = xb.indexOf(x), ca = -1 === ca ? "" : xb.indexOf(x).toString(16).toUpperCase(), ca = (ca = 1 === ca.length ? "0" + ca : ca) ? "pbChr" + ca : "", ja = ia && "str" === ja ? "pbList-strsp" : ia || !ca ? "" : ja ? (ca ? ca + " " : "") + "pbList-" + ja : ca), ca = N, Ua ? (x = 6 <= v && 8 > v ? " " : c, ja = "") : Ra && (1.9 > ea || 
        9.5 > R) ? (Ra && !cb && (Ba = 4 - (Q(t.substr(I)) + "").length), 7.5 > R ? ca = X ? "position:relative;top:-4px;left:" + 12 * Ba + "px" : {position:"relative", top:"-4px", left:12 * Ba + "px"} : 1.3 <= ea ? (ca = X ? "position:absolute;left:" + 12 * Ba + "px" : {position:"absolute", left:12 * Ba + "px"}, ++Ba) : ca = X ? "position:relative;left:" + 12 * Ba + "px" : {position:"relative", left:12 * Ba + "px"}) : ia && 7.5 > R && (ja = "pbList-strsp"), X ? E.push("<font" + (ja ? ' class="' + 
        ja + '"' : "") + (ca ? ' style="' + ca + '"' : "") + ">" + x + "</font>") : k || V ? va(z, "font", {"class":ja, style:ca}, x) : bb(z, "font", {"class":ja, style:ca}, x)) : (cb = Ra = !1, X ? E.push(x) : k || V ? Pa(z, x) : Eb(z, x));
      }
      if (k) {
        X ? z.innerHTML = E.join("") : V && Hb.appendChild(z), L && Ta(z, "visibility", Rb);
      } else {
        if (X) {
          e = F.createElement("font");
          for (e.innerHTML = E.join(""); E = e.firstChild;) {
            z.parentNode.insertBefore(E, z);
          }
          Da(z);
        } else {
          V ? Hb.parentNode.replaceChild(z, Hb) : Da(z);
        }
      }
    }
    za(function(t) {
      if (t) {
        t = Qb("pbChrCS");
        for (var z = 0, da = t.length; z < da; ++z) {
          Ub(t[z]);
        }
        return !0;
      }
    });
    var C = [];
    za(function(t) {
      function z(ia) {
        var ja = ub(ia, "pbTip"), Ua = ja.charAt(0), Ra = "_" === Ua;
        ja = Ra ? ja.charAt(2) : Ua;
        Ua = Ra ? "Btm" : "";
        var la = ub(ia, "title");
        k || (wb(ia, "pbTip"), wb(ia, "title"), P(ia, "pbTipPos" + ja.toUpperCase()), va(ia, "div", {className:"pbTip" + Ua, style:{width:la.length + Ka + "em"}}, la));
        va(ia, "div", {className:"pbTail" + Ua});
        E && Ra && (ia.focus(), ia.blur());
      }
      function da(ia, ja) {
        var Ua = ub(ia, "pbGhst"), Ra = ia.className, la = Ra.split("pbCsr")[1] || "", ba = Ra.split("pbAlp")[1] || "";
        if ("CS" === Ua) {
          var La = "_";
        } else {
          La = Ua, 3 === La.length && (La = La.substr(0, 2)), La = xb[parseInt(La, 16)] || "~";
        }
        var Gb;
        la = la.split(" ")[0];
        if (ba = Q(ba.split(" ")[0])) {
          Fa && (Ra = Ra.split("pbChr")[1].split(" ")[0], Ta(ia, "backgroundPosition", Ib(Ra, 2, Rb) + "px " + -24 * (10 - ba) + "px")), !ja && e && bb(ia, "a").appendChild(ia);
        }
        Ua && (ba = 10 - ba, Fa && (Gb = {backgroundPosition:Ib(Ua, 2, Rb) + "px " + -24 * (10 - ba) + "px"}), wb(ia, "pbGhst"), I = bb(ia, "b", {className:"pbChr" + Ua + " pbCsr" + la + " pbAlp" + ba, style:Gb}, La), Ub(I));
        Ub(ia);
      }
      if (t) {
        var Ka = 6 > v ? 2 : 0, Fa = 7.2 > R, e = 1.1 === ea;
        t = tb("SAMP");
        var k = 8 === v, E = 5 <= v && 6 > v, r = lb, x, I, Aa, cb, Ba;
        Lb && P(Ga, "pbLCD-AX");
        if (t.length) {
          for (Aa = -1; x = t[++Aa];) {
            if (u(ab(x), "pbLCD")) {
              var Rb = u(x, "PB-120") || u(x, "FX-795P");
              var Hb = Db(x);
              for (x = Hb.length; Ba = Hb[--x];) {
                switch(Fb(Ba)) {
                  case "A":
                    (2 > r || k) && z(Ba);
                    if (2 > r) {
                      var ca = Db(Ba);
                      for (cb = ca.length; cb;) {
                        da(ca[--cb], !0);
                      }
                    }
                    Jb ? vb(Ba, "href", "javascript:void(0)") : (wa(Ba, "click", ma), C.push(Ba));
                    break;
                  case "B":
                    2 > r && da(Ba, !1);
                }
              }
            }
          }
        }
        return !0;
      }
    });
    jb(function() {
      for (var t; t = C.shift();) {
        xa(t, "click", ma);
      }
    });
    6 === v && (new Ma("d", 'try{d.execCommand( "BackgroundImageCache",!1,!0)}catch(_){}'))(F);
    var J = xb[7], h = xb[30], a = xb[113], b = Qa(8337) + Qa(8331), c = Qa(160);
    Qa(8194);
    var f = "RESTORE# WRITE# NEW# LIST# SAVE# LOAD# READ# RETURN RESTORE CLEAR INPUT PRINT GOSUB THEN STOP STEP NEXT DATA READ BEEP DEFM MODE GOTO CSR VAC VER END LET REM FOR PUT GET SET ON IF TO".split(" "), l = "KEY$ KEY LEN( MID$( MID( VAL STR( FRAC RND( RAN# DEG( DMS( SIN COS TAN ASN ACS ATN LOG EXP SQR ABS SGN INT LN".split(" "), n = (':;,"+-*/\u2191=\u2260<>\u2267\u2266' + h + xb[31]).split(""), G = [], K, U, Z;
    za(function(t) {
      if (t) {
        U = 1 > db + ea ? "pbFont/x3mask.gecko0.9.1.gif" : "pbFont/x3mask.png";
        t = tb("*");
        for (var z = -1, da; da = t[++z];) {
          u(da, "pbList") ? D(da) : u(da, "pbFont") && D(da, !0);
        }
        G.length && H();
        return !0;
      }
    });
    ea && q.conpare(O, "0.9.6");
    var X = !1, L = 8 > R, V = !X && !L && !(6 > v) && F.createDocumentFragment && !!Ga.replaceChild;
    Y.prettify = D;
  })();
  var Yb = F.scripts || tb("script");
  var db = Yb[Yb.length - 1].src.split("/");
  --db.length;
  (db = db.join("/")) && (db += "/");
  6.1 > Za && Ea($a);
  jb(mb);
  6.1 > Za && Ea(Pb);
  jb(Mb);
  10 > v && (11 !== rb || 5 !== v) || (9 > R || 1 > ea || !Ya && !A.addEventListener ? F.write('<link href="' + db + zb + '" rel="stylesheet"' + (8 > R ? "" : ' media="screen,handheld,projection,print"') + ">") : na(function() {
    va(kb, "link", {href:db + "" + zb, rel:"stylesheet", media:"screen,handheld,projection,tv,print"});
  }));
})(PB100, ua, this, function() {
}, document, navigator, parseFloat, Function, setTimeout, clearTimeout, Date, void 0);

